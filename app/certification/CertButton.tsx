'use client'
import { useState } from 'react'

export default function CertButton({
  userEmail
}: {
  userEmail?: string
}) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleCert() {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          product: 'cert',
          userEmail: userEmail || ''
        })
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        setError(data.error || 'Something went wrong')
      }
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <button
        onClick={handleCert}
        disabled={loading}
        className="w-full bg-[#C9A84C] text-[#0A2342]
          font-bold py-4 rounded-xl text-base
          hover:brightness-95 transition-all
          disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Processing...' : 'Get Certified — $49 →'}
      </button>
      {error && (
        <p className="text-red-500 text-sm text-center mt-2">
          {error}
        </p>
      )}
      <p className="text-center text-xs text-gray-400 mt-3">
        30-day money-back guarantee
      </p>
    </div>
  )
}
