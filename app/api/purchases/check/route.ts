import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabase } from '@/lib/supabase/server'

/**
 * GET /api/purchases/check
 * Check purchase status for the current user
 * Query params: ?product=course|certification
 */
export async function GET(request: NextRequest) {
  try {
    const supabase = await createServerSupabase()
    const { data: { user }, error: userError } = await supabase.auth.getUser()

    if (userError || !user) {
      return NextResponse.json({ error: 'User not authenticated' }, { status: 401 })
    }

    const searchParams = request.nextUrl.searchParams
    const product = searchParams.get('product')

    if (!product || !['course', 'certification'].includes(product)) {
      return NextResponse.json({ error: 'Invalid product type' }, { status: 400 })
    }

    const productType = product === 'course' ? 'course_access' : 'certification_exam'

    const { data, error } = await supabase
      .from('purchases')
      .select('id, created_at')
      .eq('user_id', user.id)
      .eq('product', product)
      .order('created_at', { ascending: false })
      .limit(1)
      .single()

    if (error && error.code !== 'PGRST116') {
      // PGRST116 = no rows found
      console.error('Error checking purchase:', error)
      return NextResponse.json({ purchased: false })
    }

    return NextResponse.json({
      purchased: !!data,
      purchaseDate: data?.created_at || null,
    })
  } catch (error) {
    console.error('Error checking purchase:', error)
    return NextResponse.json({ purchased: false })
  }
}
