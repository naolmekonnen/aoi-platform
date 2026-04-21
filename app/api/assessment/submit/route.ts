import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { QUIZ_QUESTIONS } from '@/lib/quiz-questions'
import { calculateQuizScore, getGapAnalysis } from '@/lib/utils'
import { ensureProfileByEmail } from '@/lib/supabase/profile'
import { assessmentEmailBody, sendNotificationEmail, adminQuizSubmissionNotification } from '@/lib/email'

// Service role client bypasses RLS — safe because this is a server-side route
function getAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}

export async function POST(request: NextRequest) {
  try {
    const { email, answers } = await request.json()

    if (!email || !Array.isArray(answers) || answers.length !== QUIZ_QUESTIONS.length) {
      return NextResponse.json({ error: 'Missing required fields or invalid answers' }, { status: 400 })
    }

    const answerPayload = answers.map((selectedIndex: number, index: number) => ({
      questionId: QUIZ_QUESTIONS[index].id,
      selectedAnswer: Number(selectedIndex) ?? 0,
    }))

    const profile = await ensureProfileByEmail({ email })
    const scoreData = calculateQuizScore(answerPayload, QUIZ_QUESTIONS)
    const adminClient = getAdminClient()

    const { data: insertedResult, error: insertError } = await adminClient
      .from('quiz_results')
      .insert([
        {
          user_id: profile?.id ?? null,
          score: scoreData.score,
          level: scoreData.level,
          awareness_score: scoreData.awarenessScore,
          business_score: scoreData.businessScore,
          prompt_score: scoreData.promptScore,
          workflow_score: scoreData.workflowScore,
          answers_json: answerPayload,
        },
      ])
      .select()
      .single()

    if (insertError) {
      console.error('Quiz result insert error:', insertError)
      // Continue anyway - don't fail the response
    }

    const gaps = getGapAnalysis(
      scoreData.awarenessScore,
      scoreData.businessScore,
      scoreData.promptScore,
      scoreData.workflowScore
    )

    const isReady = scoreData.score >= 71
    const summary = isReady
      ? `Your AI readiness score is strong. Focus next on certification and building repeatable workflows.`
      : `Your report highlights the most important areas to strengthen in order to close the gap and accelerate AI adoption.`

    const subject = isReady
      ? `Your AI Readiness Report — You're Ready`
      : `Your AI Readiness Report — ${scoreData.score}/100`

    // Send user report email
    const userEmailHtml = assessmentEmailBody({
      name: profile?.first_name ?? 'AOI member',
      score: scoreData.score,
      level: scoreData.level,
      summary: `${summary}<br /><br />Top gaps:<br />${gaps.slice(0, 2).map((line) => `- ${line}`).join('<br />')}`,
      link: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'}/results/${insertedResult?.id || 'unknown'}`,
      ctaText: 'View Your Report',
    })

    try {
      await sendNotificationEmail(email, subject, userEmailHtml)
    } catch (userEmailError) {
      console.error('Failed to send user assessment email:', userEmailError)
    }

    // Send admin notification email
    const adminEmail = (process.env.RESEND_ADMIN_EMAIL ?? process.env.ADMIN_EMAIL) || 'naolmekonnen@gmail.com'
    const adminSubject = `New Quiz — ${profile?.first_name ?? 'Unknown'} ${profile?.last_name ?? ''} (${profile?.phone ?? 'N/A'}) Score: ${scoreData.score}/100`

    // Create admin email HTML with all details
    const adminHtml = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
        <div style="background:#0A2342;padding:24px;border-radius:8px 8px 0 0">
          <h1 style="color:#C9A84C;margin:0;font-size:20px">
            New Quiz Submission
          </h1>
        </div>
        <div style="background:#f9f9f9;padding:24px;border-radius:0 0 8px 8px;border:1px solid #eee">
          <table style="width:100%;border-collapse:collapse">
            <tr style="border-bottom:1px solid #eee">
              <td style="padding:10px 0;font-weight:bold;color:#0A2342;width:40%">📞 Phone</td>
              <td style="padding:10px 0">
                <a href="tel:${profile?.phone || 'N/A'}" style="color:#0A2342;font-size:18px;font-weight:bold">
                  ${profile?.phone || 'Not provided'}
                </a>
              </td>
            </tr>
            <tr style="border-bottom:1px solid #eee">
              <td style="padding:10px 0;font-weight:bold;color:#0A2342">📧 Email</td>
              <td style="padding:10px 0">
                <a href="mailto:${email}" style="color:#0A2342">
                  ${email}
                </a>
              </td>
            </tr>
            <tr style="border-bottom:1px solid #eee">
              <td style="padding:10px 0;font-weight:bold;color:#0A2342">👤 Name</td>
              <td style="padding:10px 0">${profile?.first_name ?? 'Unknown'} ${profile?.last_name ?? ''}</td>
            </tr>
            <tr style="border-bottom:1px solid #eee">
              <td style="padding:10px 0;font-weight:bold;color:#0A2342">🏢 Company</td>
              <td style="padding:10px 0">${profile?.company ?? 'Not provided'}</td>
            </tr>
            <tr style="border-bottom:1px solid #eee">
              <td style="padding:10px 0;font-weight:bold;color:#0A2342">💼 Job Title</td>
              <td style="padding:10px 0">${profile?.job_title ?? 'Not provided'}</td>
            </tr>
            <tr style="border-bottom:1px solid #eee">
              <td style="padding:10px 0;font-weight:bold;color:#0A2342">📊 Score</td>
              <td style="padding:10px 0;font-size:18px;font-weight:bold;color:#0A2342">${scoreData.score}/100</td>
            </tr>
            <tr style="border-bottom:1px solid #eee">
              <td style="padding:10px 0;font-weight:bold;color:#0A2342">🏆 Level</td>
              <td style="padding:10px 0">${scoreData.level}</td>
            </tr>
            <tr style="border-bottom:1px solid #eee">
              <td style="padding:10px 0;font-weight:bold;color:#0A2342">🧠 Awareness</td>
              <td style="padding:10px 0">${scoreData.awarenessScore}/25</td>
            </tr>
            <tr style="border-bottom:1px solid #eee">
              <td style="padding:10px 0;font-weight:bold;color:#0A2342">💼 Business</td>
              <td style="padding:10px 0">${scoreData.businessScore}/25</td>
            </tr>
            <tr style="border-bottom:1px solid #eee">
              <td style="padding:10px 0;font-weight:bold;color:#0A2342">💬 Prompt</td>
              <td style="padding:10px 0">${scoreData.promptScore}/25</td>
            </tr>
            <tr style="border-bottom:1px solid #eee">
              <td style="padding:10px 0;font-weight:bold;color:#0A2342">⚙️ Workflow</td>
              <td style="padding:10px 0">${scoreData.workflowScore}/25</td>
            </tr>
          </table>
          <div style="margin-top:20px;padding:15px;background:#fff;border-radius:8px;border:1px solid #eee">
            <h3 style="margin:0 0 10px 0;color:#0A2342;font-size:16px">Top Gaps to Address:</h3>
            <ul style="margin:0;padding-left:20px;color:#666">
              ${gaps.slice(0, 3).map((gap) => `<li>${gap}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
    `

    try {
      await sendNotificationEmail(adminEmail, adminSubject, adminHtml, email, process.env.RESEND_ADMIN_EMAIL)
    } catch (adminEmailError) {
      console.error('Failed to send admin quiz notification:', adminEmailError)
    }

    return NextResponse.json({
      success: true,
      resultId: insertedResult?.id || null,
      score: scoreData.score,
      level: scoreData.level,
    })
  } catch (error) {
    console.error('Error submitting assessment:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to submit assessment' },
      { status: 500 }
    )
  }
}
