'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { createBrowserClient } from '@supabase/ssr'

export default function LoginPage() {
  const [ready, setReady] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        window.location.replace('/dashboard')
      } else {
        setReady(true)
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!ready) return null

  async function handleLogin() {
    setSubmitting(true)
    setError('')

    try {
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email: email.trim().toLowerCase(),
        password,
      })

      if (authError) {
        const msg = authError.message
        if (msg.includes('Invalid') || msg.includes('invalid')) {
          setError('Incorrect email or password.')
        } else if (msg.includes('confirmed') || msg.includes('verified')) {
          setError('Please confirm your email before signing in.')
        } else {
          setError(msg || 'Login failed. Please try again.')
        }
        setSubmitting(false)
        return
      }

      if (data?.session) {
        window.location.replace('/dashboard')
        return
      }

      setError('No session returned. Please try again.')
      setSubmitting(false)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Try again.')
      setSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#0A2342]
      flex items-center justify-center px-5"
      style={{backgroundImage:`repeating-linear-gradient(
        45deg,transparent,transparent 40px,
        rgba(201,168,76,0.03) 40px,
        rgba(201,168,76,0.03) 41px)`}}>
      <div className="w-full max-w-md bg-white
        rounded-2xl shadow-2xl p-10">

        <div className="flex items-center gap-2
          justify-center mb-8">
          <span className="text-xl font-black
            text-[#0A2342]">AOI</span>
          <span className="text-[#C9A84C]
            font-light text-lg">|</span>
          <span className="text-[9px] font-semibold
            tracking-[0.18em] text-[#C9A84C]
            uppercase">AI OPERATOR INSTITUTE</span>
        </div>

        <h1 className="text-2xl font-bold
          text-[#0A2342] text-center mb-2">
          Welcome Back
        </h1>
        <p className="text-gray-500 text-sm
          text-center mb-8">
          Sign in to your AOI account
        </p>

        <form onSubmit={(e) => {
          e.preventDefault()
          void handleLogin()
        }}
          className="space-y-4">
          <div>
            <label className="block text-sm
              font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoComplete="email"
              required
              placeholder="you@example.com"
              className="w-full border border-gray-200
                rounded-xl px-4 py-3 text-base
                focus:outline-none focus:border-[#C9A84C]
                focus:ring-1 focus:ring-[#C9A84C]"
            />
          </div>

          <div>
            <label className="block text-sm
              font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoComplete="current-password"
              required
              placeholder="••••••••"
              className="w-full border border-gray-200
                rounded-xl px-4 py-3 text-base
                focus:outline-none focus:border-[#C9A84C]
                focus:ring-1 focus:ring-[#C9A84C]"
            />
            <div className="text-right mt-1">
              <Link href="/auth/forgot-password"
                className="text-xs text-gray-400
                  hover:text-[#C9A84C]">
                Forgot password?
              </Link>
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-sm
              bg-red-50 border border-red-100
              rounded-xl px-4 py-3">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-[#C9A84C]
              text-[#0A2342] font-bold py-3
              rounded-xl hover:brightness-95
              transition-all disabled:opacity-50
              text-base mt-2">
            {submitting ? 'Signing in...' : 'Login'}
          </button>
        </form>

        <div className="border-t border-gray-100
          mt-6 pt-6 text-center">
          <p className="text-sm text-gray-500">
            Don't have an account?{' '}
            <Link href="/auth/signup"
              className="text-[#0A2342] font-semibold
                hover:text-[#C9A84C]">
              Sign up →
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
