// app/api/advisory/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      firstName = '',
      lastName = '',
      email = '',
      phone = '',
      businessType = '',
      teamSize = '',
      monthlyLeads = '',
      challenge = '',
      message = ''
    } = body

    // 1. Save to Supabase (best effort)
    try {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
      const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY
      if (supabaseUrl && supabaseKey) {
        const { createClient } = await import('@supabase/supabase-js')
        const admin = createClient(supabaseUrl, supabaseKey)

        // Try with phone first
        const { error } = await admin
          .from('advisory_requests')
          .insert({
            first_name: firstName,
            last_name: lastName,
            email: email,
            company: businessType,
            job_title: teamSize,
            annual_revenue: monthlyLeads,
            message: challenge || message,
          })

        if (error) {
          console.error('DB insert error:', error.message)
          // Continue anyway
        }
      }
    } catch (dbErr) {
      console.error('DB error:', dbErr)
      // Continue to send email
    }

    // 2. Send admin email (always)
    try {
      const resendKey = process.env.RESEND_API_KEY
      if (resendKey) {
        const { Resend } = await import('resend')
        const resend = new Resend(resendKey)

        const adminEmail = process.env.RESEND_ADMIN_EMAIL
          || 'naolmekonnen@gmail.com'

        await resend.emails.send({
          from: 'AOI Platform <onboarding@resend.dev>',
          to: adminEmail,
          replyTo: email,
          subject: `New Strategy Call — ${firstName} ${lastName} (${phone || 'no phone'})`,
          html: `
            <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
              <div style="background:#0A2342;padding:24px;border-radius:8px 8px 0 0">
                <h1 style="color:#C9A84C;margin:0;font-size:20px">
                  New Strategy Call Request
                </h1>
              </div>
              <div style="background:#f9f9f9;padding:24px;border-radius:0 0 8px 8px;border:1px solid #eee">
                <table style="width:100%;border-collapse:collapse">
                  <tr style="border-bottom:1px solid #eee">
                    <td style="padding:10px 0;font-weight:bold;color:#0A2342;width:40%">📞 Phone</td>
                    <td style="padding:10px 0">
                      <a href="tel:${phone}" style="color:#0A2342;font-size:18px;font-weight:bold">
                        ${phone || 'Not provided'}
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
                    <td style="padding:10px 0">${firstName} ${lastName}</td>
                  </tr>
                  <tr style="border-bottom:1px solid #eee">
                    <td style="padding:10px 0;font-weight:bold;color:#0A2342">🏢 Business Type</td>
                    <td style="padding:10px 0">${businessType}</td>
                  </tr>
                  <tr style="border-bottom:1px solid #eee">
                    <td style="padding:10px 0;font-weight:bold;color:#0A2342">👥 Team Size</td>
                    <td style="padding:10px 0">${teamSize}</td>
                  </tr>
                  <tr style="border-bottom:1px solid #eee">
                    <td style="padding:10px 0;font-weight:bold;color:#0A2342">📊 Monthly Leads</td>
                    <td style="padding:10px 0">${monthlyLeads}</td>
                  </tr>
                  <tr style="border-bottom:1px solid #eee">
                    <td style="padding:10px 0;font-weight:bold;color:#0A2342">🎯 Challenge</td>
                    <td style="padding:10px 0">${challenge || message}</td>
                  </tr>
                </table>
              </div>
            </div>
          `
        })
      }
    } catch (emailErr) {
      console.error('Email send error:', emailErr)
    }

    // 3. Send confirmation to user
    try {
      const resendKey = process.env.RESEND_API_KEY
      if (resendKey && email) {
        const { Resend } = await import('resend')
        const resend = new Resend(resendKey)
        await resend.emails.send({
          from: 'AOI Platform <onboarding@resend.dev>',
          to: email,
          subject: 'Your Strategy Call Request — Received',
          html: `
            <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
              <div style="background:#0A2342;padding:24px;border-radius:8px 8px 0 0">
                <h1 style="color:#C9A84C;margin:0;font-size:20px">
                  Request Received
                </h1>
              </div>
              <div style="padding:24px">
                <p>Hi ${firstName},</p>
                <p>We received your strategy call request and will reach out within 1 hour.</p>
                <p style="color:#666">While you wait, take the free AI assessment:</p>
                <a href="https://aoi-platform-three.vercel.app/assessment"
                  style="display:inline-block;background:#C9A84C;color:#0A2342;
                  font-weight:bold;padding:12px 24px;border-radius:8px;
                  text-decoration:none;margin-top:12px">
                  Take the Free Assessment →
                </a>
              </div>
            </div>
          `
        })
      }
    } catch (confirmErr) {
      console.error('Confirmation email error:', confirmErr)
    }

    return NextResponse.json({
      success: true,
      message: 'Request received successfully'
    })

  } catch (error) {
    console.error('Advisory route error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to submit request' },
      { status: 500 }
    )
  }
}
