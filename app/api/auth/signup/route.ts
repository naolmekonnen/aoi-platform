import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { sendNotificationEmail, adminSignupNotification } from '@/lib/email'
import { checkRateLimit, getClientIp } from '@/lib/rate-limit'

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request)

    // Rate limiting: 3 signup attempts per hour per IP
    if (!checkRateLimit(ip, 3, 60 * 60 * 1000)) {
      return NextResponse.json(
        { error: 'Too many signup attempts. Please try again later.' },
        { status: 429 }
      )
    }

    const { email, password, firstName, lastName, jobTitle, company, phone, honeypot, captchaAnswer, expectedCaptcha } = await request.json()

    // Check honeypot field (basic bot protection)
    if (honeypot && honeypot.length > 0) {
      return NextResponse.json(
        { error: 'Bot detected. Access denied.' },
        { status: 403 }
      )
    }

    // Check CAPTCHA
    if (!captchaAnswer || parseInt(captchaAnswer) !== expectedCaptcha) {
      return NextResponse.json(
        { error: 'Incorrect security check answer.' },
        { status: 400 }
      )
    }

    // Validate required fields
    if (!email || !password || !firstName || !lastName) {
      return NextResponse.json(
        { error: 'Email, password, first name, and last name are required.' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }

    // Validate password strength
    if (password.length < 8) {
      return NextResponse.json(
        { error: 'Password must be at least 8 characters long.' },
        { status: 400 }
      )
    }

    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
      return NextResponse.json(
        { error: 'Password must contain at least one uppercase letter, one lowercase letter, and one number.' },
        { status: 400 }
      )
    }

    // Validate names
    if (firstName.trim().length < 2 || lastName.trim().length < 2) {
      return NextResponse.json(
        { error: 'First and last names must be at least 2 characters long.' },
        { status: 400 }
      )
    }

    // Create auth client (anon) for signup
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !supabaseAnonKey || !serviceRoleKey) {
      throw new Error('Missing Supabase configuration')
    }

    // Sign up the user via auth
    const authClient = createClient(supabaseUrl, supabaseAnonKey)
    const { data: authData, error: authError } = await authClient.auth.signUp({
      email,
      password,
    })

    if (authError || !authData?.user?.id) {
      throw new Error(authError?.message || 'Failed to create auth user')
    }

    const userId = authData.user.id

    // Create profile using service role client (bypasses RLS)
    // Use UPSERT to handle existing profiles gracefully
    const serviceClient = createClient(supabaseUrl, serviceRoleKey)
    const { error: profileError } = await serviceClient.from('profiles').upsert(
      {
        id: userId,
        email,
        first_name: firstName || null,
        last_name: lastName || null,
        job_title: jobTitle || null,
        company: company || null,
        phone: phone || null,
      },
      { onConflict: 'id' }
    )

    if (profileError) {
      console.error('Profile creation error (non-blocking):', profileError.message)
    }

    try {
      const adminEmail = (process.env.RESEND_ADMIN_EMAIL ?? process.env.ADMIN_EMAIL) || 'naolmekonnen@gmail.com'
      const adminHtml = adminSignupNotification({
        firstName: firstName || 'Unknown',
        lastName: lastName || 'Unknown',
        email,
        phone: phone || 'N/A',
        jobTitle: jobTitle || 'Not provided',
        company: company || 'Not provided',
      })
      await sendNotificationEmail(adminEmail, `New Signup — ${firstName || 'Unknown'} ${lastName || ''} (${phone || 'No phone'})`, adminHtml, email, process.env.RESEND_ADMIN_EMAIL)
    } catch (notificationError) {
      console.error('Failed to send admin signup notification:', notificationError)
    }

    return NextResponse.json({ success: true, userId })
  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Signup failed' },
      { status: 400 }
    )
  }
}
