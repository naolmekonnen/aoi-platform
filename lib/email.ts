import { Resend } from 'resend'

const resendFromEmail = process.env.RESEND_FROM_EMAIL ?? 'AI Operator Institute <onboarding@resend.dev>'
const verifiedAdminFromEmail = process.env.RESEND_ADMIN_EMAIL ?? resendFromEmail

function sanitizePhone(phone: string) {
  return phone.replace(/[^+\d]/g, '')
}

export function formatEmailBody({ title, message, ctaText, ctaUrl, footer }: { title: string; message: string; ctaText?: string; ctaUrl?: string; footer?: string }) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
  </head>
  <body style="margin:0;padding:0;font-family:Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif; background:#f8fafc; color:#0f172a;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc; width:100%;">
      <tr>
        <td align="center" style="padding:24px 16px;">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:24px; overflow:hidden; border:1px solid rgba(201,168,76,0.18);">
            <tr>
              <td style="background:#0A2342; padding:24px; text-align:center; color:#ffffff;">
                <h1 style="margin:0; font-size:24px; letter-spacing:0.08em; text-transform:uppercase;">AOI</h1>
                <p style="margin:8px 0 0; color:#C9A84C; font-weight:700;">AI Operator Institute</p>
              </td>
            </tr>
            <tr>
              <td style="padding:32px 32px 24px 32px;">
                <h2 style="margin:0 0 16px; font-size:22px; color:#0A2342;">${title}</h2>
                <div style="color:#475569; font-size:16px; line-height:1.8;">${message}</div>
                ${ctaText && ctaUrl ? `<div style="margin-top:28px;"><a href="${ctaUrl}" style="display:inline-block;padding:14px 28px;background:#C9A84C;color:#0A2342;font-weight:700;border-radius:10px;text-decoration:none;">${ctaText}</a></div>` : ''}
              </td>
            </tr>
            <tr>
              <td style="background:#F4F6F9; padding:24px; color:#6B7280; font-size:13px; text-align:center;">
                ${footer ?? `AOI exists to close the AI capability gap — turning professionals and business owners into AI-native operators before the window closes.`}
              </td>
            </tr>
          </table>
          <p style="margin:18px 0 0; color:#94a3b8; font-size:12px;">If you did not request this email, please ignore it.</p>
        </td>
      </tr>
    </table>
  </body>
</html>`
}

export async function sendNotificationEmail(to: string, subject: string, html: string, replyTo?: string, fromOverride?: string) {
  const resendApiKey = process.env.RESEND_API_KEY
  if (!resendApiKey) {
    throw new Error('Missing RESEND_API_KEY environment variable')
  }

  const resend = new Resend(resendApiKey)
  return resend.emails.send({
    from: fromOverride ?? resendFromEmail,
    to,
    subject,
    html,
    replyTo: replyTo ? [replyTo] : undefined,
  })
}

function buildAdminBody({
  title,
  phone,
  email,
  badge,
  body,
}: {
  title: string
  phone: string
  email: string
  badge?: string
  body: string
}) {
  const telLink = sanitizePhone(phone)
  return formatEmailBody({
    title,
    message: `
      <div style="border-bottom:1px solid #E2E8F0;padding-bottom:18px;margin-bottom:18px;">
        ${badge ? `<p style="margin:0 0 12px;font-size:15px;font-weight:700;color:#C9A84C;">${badge}</p>` : ''}
        <p style="margin:0 0 8px;font-size:15px;"><strong>📞 PHONE:</strong> <a href="tel:${telLink}" style="color:#0A2342;text-decoration:none;font-size:15px;">${phone}</a></p>
        <p style="margin:0;font-size:15px;"><strong>📧 EMAIL:</strong> <a href="mailto:${email}" style="color:#0A2342;text-decoration:none;font-size:15px;">${email}</a></p>
      </div>
      ${body}
    `,
    footer: `Reply-To: ${email}`,
  })
}

export function assessmentEmailBody({ name, score, level, summary, link, ctaText }: { name: string; score: number; level: string; summary: string; link: string; ctaText: string }) {
  return formatEmailBody({
    title: `Your AI Readiness Report — ${score}/100`,
    message: `Hi ${name},<br /><br />You scored <strong>${score}/100</strong> on your AOI AI Readiness Assessment. <strong>${level}</strong>.<br /><br />${summary}<br /><br />Your full, personalized report is available here: <a href="${link}" style="color:#0A2342;">View your report</a>.<br /><br />`,
    ctaText,
    ctaUrl: link,
    footer: 'If you need expert guidance, AOI is here to help with a free consultation and roadmap review.',
  })
}

export function advisoryConfirmationEmailBody({ firstName }: { firstName: string }) {
  return formatEmailBody({
    title: 'Your Free Consultation Request — Received',
    message: `Hi ${firstName},<br /><br />Thanks for requesting a free consultation. We received your information and will reach out within 24 hours with next steps.<br /><br />Expect a short confirmation email soon with your session details.`,
    footer: 'AOI exists to close the AI capability gap — we look forward to helping you move fast.',
  })
}

export function certificationResultEmailBody({ firstName, score, passed, certificateId }: { firstName: string; score: number; passed: boolean; certificateId: string }) {
  const status = passed ? 'PASSED' : 'DID NOT PASS'
  const message = passed
    ? `Congratulations! You scored <strong>${score}%</strong> and have earned your AOI Certification.<br /><br />Your certificate ID is <strong>${certificateId}</strong>. You can download your certificate from your dashboard.`
    : `You scored <strong>${score}%</strong> on the AOI Certification Exam. A passing score is 70%.<br /><br />Don't worry — you can retake the exam after reviewing the material.`

  return formatEmailBody({
    title: `Your AOI Certification Results — ${status}`,
    message: `Hi ${firstName},<br /><br />${message}<br /><br />Keep building your AI capabilities — the gap is closing fast.`,
    ctaText: passed ? 'Download Certificate' : 'Retake Exam',
    ctaUrl: passed ? '/dashboard' : '/certification/exam',
    footer: 'AOI exists to close the AI capability gap — certification is just the beginning.',
  })
}

export function adminQuizSubmissionNotification({
  firstName,
  lastName,
  email,
  phone,
  jobTitle,
  company,
  score,
  level,
  awarenessScore,
  businessScore,
  promptScore,
  workflowScore,
  resultId,
}: {
  firstName: string
  lastName: string
  email: string
  phone: string
  jobTitle: string
  company: string
  score: number
  level: string
  awarenessScore: number
  businessScore: number
  promptScore: number
  workflowScore: number
  resultId: string
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
  return buildAdminBody({
    title: `New Quiz — ${firstName} ${lastName} (${phone}) Score: ${score}/100`,
    phone,
    email,
    badge: 'NEW QUIZ SUBMISSION',
    body: `
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Job Title:</strong> ${jobTitle}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Score:</strong> ${score}/100 | <strong>Level:</strong> ${level}</p>
      <p><strong>Awareness:</strong> ${awarenessScore}/100</p>
      <p><strong>Business:</strong> ${businessScore}/100</p>
      <p><strong>Prompting:</strong> ${promptScore}/100</p>
      <p><strong>Workflow:</strong> ${workflowScore}/100</p>
      <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
      <p><a href="${siteUrl}/results/${resultId}" style="color:#0A2342; text-decoration:none; font-weight:bold;">View Full Results →</a></p>
    `,
  })
}

export function adminSignupNotification({
  firstName,
  lastName,
  email,
  phone,
  jobTitle,
  company,
}: {
  firstName: string
  lastName: string
  email: string
  phone: string
  jobTitle: string
  company: string
}) {
  return buildAdminBody({
    title: `New Signup — ${firstName} ${lastName} (${phone || 'No phone'})`,
    phone: phone || 'N/A',
    email,
    badge: 'NEW SIGNUP',
    body: `
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Job Title:</strong> ${jobTitle}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Signed Up:</strong> ${new Date().toLocaleString()}</p>
    `,
  })
}

export function advisoryAdminNotification({
  firstName,
  lastName,
  email,
  phone,
  businessName,
  businessType,
  yearsInBusiness = 'Not provided',
  teamSize,
  monthlyNewLeads = 'Not provided',
  responseTime = 'Not provided',
  challengeItems,
  additionalNotes,
  priorityLabel,
  recommendation,
  reason,
}: {
  firstName: string
  lastName: string
  email: string
  phone?: string
  businessName?: string
  businessType: string
  yearsInBusiness?: string
  teamSize?: string
  monthlyNewLeads?: string
  responseTime?: string
  challengeItems?: string[]
  additionalNotes?: string
  priorityLabel: string
  recommendation: string
  reason: string
}) {
  const badge = `PRIORITY: ${priorityLabel}`
  return buildAdminBody({
    title: `[${priorityLabel}] ${firstName} ${lastName}${phone ? ` (${phone})` : ''} — ${businessType}`,
    phone: phone || '',
    email,
    badge,
    body: `
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Business:</strong> ${businessName ? `${businessName} (${businessType})` : businessType}</p>
      <p><strong>Team:</strong> ${teamSize || 'Not provided'} | <strong>Years:</strong> ${yearsInBusiness}</p>
      <p><strong>Leads/mo:</strong> ${monthlyNewLeads} | <strong>Response:</strong> ${responseTime}</p>
      <p><strong>Challenges:</strong></p>
      <ul style="margin-top:0;margin-bottom:16px; padding-left:18px;">
        ${(challengeItems || []).map((challenge) => `<li>${challenge}</li>`).join('')}
      </ul>
      <p><strong>Message:</strong></p>
      <p>${additionalNotes || 'No additional notes provided.'}</p>
      <div style="border-top:1px solid #E2E8F0; margin:24px 0 18px; padding-top:18px;">
        <p><strong>🤖 RECOMMENDED:</strong> ${recommendation}</p>
        <p><strong>Reason:</strong> ${reason}</p>
      </div>
    `,
  })
}

export function adminPurchaseNotification({
  firstName,
  lastName,
  email,
  phone,
  productType,
  amount,
  currency = 'USD',
}: {
  firstName: string
  lastName: string
  email: string
  phone: string
  productType: string
  amount: number
  currency?: string
}) {
  const productName = productType === 'course_access' ? 'Course Access' : productType === 'certification_exam' ? 'Certification Exam' : 'Premium Advisory'
  return buildAdminBody({
    title: `New Purchase — ${firstName} ${lastName} (${phone}) — ${productName}`,
    phone: phone || 'N/A',
    email,
    badge: 'NEW PURCHASE',
    body: `
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Product:</strong> ${productName}</p>
      <p><strong>Amount:</strong> ${currency} $${amount}</p>
      <p><strong>Purchased:</strong> ${new Date().toLocaleString()}</p>
    `,
  })
}
