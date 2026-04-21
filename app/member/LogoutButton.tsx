'use client'

import { useRouter } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'

export default function LogoutButton() {
  const router = useRouter()

  async function handleLogout() {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  return (
    <button
      onClick={handleLogout}
      className="text-sm font-medium text-white/70 hover:text-white border border-white/20 px-4 py-2 rounded-lg hover:border-white/40 transition-all"
    >
      Log Out
    </button>
  )
}
