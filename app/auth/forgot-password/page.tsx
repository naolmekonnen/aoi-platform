'use client'

import { useState } from 'react'
import Link from 'next/link'
import { AOILogo } from '@/components/logo'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    setError('')

    try {
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Request failed')
      }

      setMessage('Password reset link sent. Check your inbox.')
      setEmail('')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-aoi-lightgray py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-card p-8">
        <div className="flex justify-center mb-6">
          <AOILogo />
        </div>

        <h1 className="text-2xl font-bold text-center text-aoi-navy mb-4">Forgot Password</h1>
        <p className="text-sm text-aoi-secondary mb-6 text-center">
          Enter your email and we will send a reset link.
        </p>

        {message && <div className="mb-4 p-3 rounded-lg bg-green-50 text-green-700 text-sm">{message}</div>}
        {error && <div className="mb-4 p-3 rounded-lg bg-red-50 text-red-700 text-sm">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-sm font-medium text-aoi-dark">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aoi-gold focus:border-transparent outline-none"
            placeholder="you@example.com"
          />

          <button type="submit" disabled={loading} className="w-full btn-gold disabled:opacity-50">
            {loading ? 'Sending...' : 'Send Reset Link'}
          </button>

          <p className="text-center text-sm text-aoi-secondary">
            Remembered? <Link href="/auth/login" className="text-aoi-gold hover:text-aoi-navy">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  )
}
