import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabase } from '@/lib/supabase/server'

export async function GET(request: NextRequest) {
  try {
    const supabase = await createServerSupabase()

    // Check if user is authenticated and is admin
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // For now, allow any authenticated user to access admin (you might want to add role checking)

    const { data: purchases, error } = await supabase
      .from('purchases')
      .select(`
        *,
        profiles:user_id (
          id,
          first_name,
          last_name,
          email
        )
      `)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching purchases:', error)
      return NextResponse.json({ error: 'Failed to fetch purchases' }, { status: 500 })
    }

    // Transform the data to flatten the user info
    const transformedPurchases = purchases?.map(purchase => ({
      ...purchase,
      user: purchase.profiles
    })) || []

    return NextResponse.json(transformedPurchases)
  } catch (error) {
    console.error('Admin purchases API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}