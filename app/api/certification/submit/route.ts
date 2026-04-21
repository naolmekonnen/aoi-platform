import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabase } from '@/lib/supabase/server'
import { findProfileByEmail } from '@/lib/supabase/profile'
import { certificationResultEmailBody, sendNotificationEmail } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const { score, passed, answers, certificateId } = await request.json()

    if (typeof score !== 'number' || typeof passed !== 'boolean' || !Array.isArray(answers) || !certificateId) {
      return NextResponse.json({ error: 'Invalid request data' }, { status: 400 })
    }

    // Get user profile (assuming user is authenticated)
    const supabase = await createServerSupabase()
    const { data: { user }, error: userError } = await supabase.auth.getUser()

    if (userError || !user) {
      return NextResponse.json({ error: 'User not authenticated' }, { status: 401 })
    }

    const profile = await findProfileByEmail(user.email!)
    if (!profile) {
      return NextResponse.json({ error: 'Profile not found' }, { status: 404 })
    }

    // Save certification attempt
    const { data: attempt, error: insertError } = await supabase
      .from('cert_attempts')
      .insert([
        {
          user_id: profile.id,
          score,
          passed,
          answers: answers,
        },
      ])
      .select()
      .single()

    if (insertError) {
      throw insertError
    }

    // Send result email
    const emailHtml = certificationResultEmailBody({
      firstName: profile.first_name || 'Valued User',
      score,
      passed,
      certificateId,
    })

    await sendNotificationEmail(
      profile.email,
      passed ? 'Congratulations! Your AOI Certification Results' : 'Your AOI Certification Results',
      emailHtml
    )

    return NextResponse.json({
      success: true,
      attemptId: attempt.id,
      certificateId,
    })
  } catch (error) {
    console.error('Error submitting certification:', error)
    return NextResponse.json({ error: 'Failed to submit certification' }, { status: 500 })
  }
}