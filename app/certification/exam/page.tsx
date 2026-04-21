import { redirect } from 'next/navigation'
import { createServerSupabase } from '@/lib/supabase/server'
import CertificationExam from './_exam'

export default async function CertificationExamPage() {
  const supabase = await createServerSupabase()

  // Get the current user
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // If not logged in, redirect to login
  if (!user) {
    redirect('/auth/login')
  }

  // Check if user has purchased certification exam access
  const { data: purchase } = await supabase
    .from('purchases')
    .select('*')
    .eq('user_id', user.id)
      .eq('product', 'cert')
    .eq('status', 'completed')
    .single()

  // If not purchased, redirect to certification page
  if (!purchase) {
    redirect('/certification')
  }

  // User has access - render exam component
  return <CertificationExam />
}
