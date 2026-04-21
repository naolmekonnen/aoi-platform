/**
 * Server-side helper functions for checking purchase status
 * Always fetch purchase status from Supabase, never trust client-side data
 */

import { createServerSupabase } from './supabase/server'

/**
 * Check if user has purchased course access
 * Must be called server-side only
 */
export async function checkCoursePurchase(userId: string): Promise<boolean> {
  try {
    const supabase = await createServerSupabase()

    const { data, error } = await supabase
      .from('purchases')
      .select('id')
      .eq('user_id', userId)
      .eq('product', 'course')
      .eq('status', 'completed')
      .single()

    if (error && error.code !== 'PGRST116') {
      // PGRST116 = no rows found, which is fine
      console.error('Error checking course purchase:', error)
      return false
    }

    return !!data
  } catch (error) {
    console.error('Error checking course purchase:', error)
    return false
  }
}

/**
 * Check if user has purchased certification access
 * Must be called server-side only
 */
export async function checkCertificationPurchase(userId: string): Promise<boolean> {
  try {
    const supabase = await createServerSupabase()

    const { data, error } = await supabase
      .from('purchases')
      .select('id')
      .eq('user_id', userId)
      .eq('product', 'cert')
      .eq('status', 'completed')
      .single()

    if (error && error.code !== 'PGRST116') {
      console.error('Error checking certification purchase:', error)
      return false
    }

    return !!data
  } catch (error) {
    console.error('Error checking certification purchase:', error)
    return false
  }
}

/**
 * Get all purchases for a user
 * Must be called server-side only
 */
export async function getUserPurchases(userId: string) {
  try {
    const supabase = await createServerSupabase()

    const { data, error } = await supabase
      .from('purchases')
      .select('*')
      .eq('user_id', userId)
      .eq('status', 'completed')
      .order('purchased_at', { ascending: false })

    if (error) {
      console.error('Error fetching user purchases:', error)
      return []
    }

    return data || []
  } catch (error) {
    console.error('Error fetching user purchases:', error)
    return []
  }
}

/**
 * Check if purchase is within refund window (30 days)
 */
export function isWithinRefundWindow(purchaseDate: string): boolean {
  const purchase = new Date(purchaseDate)
  const now = new Date()
  const daysSince = (now.getTime() - purchase.getTime()) / (1000 * 60 * 60 * 24)
  return daysSince <= 30
}
