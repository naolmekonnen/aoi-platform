import { NextRequest, NextResponse } from 'next/server'
import { ensureProfileByEmail } from '@/lib/supabase/profile'

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, phone, jobTitle, company } = await request.json()

    if (!email || !firstName || !lastName || !phone || !jobTitle) {
      return NextResponse.json({ error: 'All required fields must be provided' }, { status: 400 })
    }

    const profile = await ensureProfileByEmail({
      email,
      firstName,
      lastName,
      jobTitle,
      company,
      phone,
    })

    return NextResponse.json({
      success: true,
      profileId: profile.id,
      email: profile.email,
    })
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to start assessment' },
      { status: 500 }
    )
  }
}
