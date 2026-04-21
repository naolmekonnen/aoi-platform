'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error:', error)
    }
    // In production, you could send this to an error tracking service
  }, [error])

  return (
    <html>
      <body>
        <div className="min-h-screen bg-aoi-navy text-white flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center">
            <h1 className="text-5xl font-bold mb-4">Oops!</h1>
            <p className="text-xl mb-6">Something went wrong. We're working on fixing it.</p>

            <p className="text-gray-300 mb-8 text-sm">
              {process.env.NODE_ENV === 'development' && error.message
                ? `Error: ${error.message}`
                : 'Please try again or contact support if the problem persists.'}
            </p>

            <div className="flex gap-4 justify-center">
              <button
                onClick={() => reset()}
                className="bg-aoi-gold text-aoi-navy px-6 py-3 rounded-lg font-bold hover:bg-aoi-gold/90 transition-colors"
              >
                Try Again
              </button>
              <Link
                href="/"
                className="bg-gray-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-600 transition-colors"
              >
                Go Home
              </Link>
            </div>

            {process.env.NODE_ENV === 'development' && (
              <div className="mt-8 p-4 bg-red-900 rounded text-left text-xs overflow-auto max-h-40">
                <p className="font-bold mb-2">Debug Info:</p>
                <pre className="text-red-200">{error.stack}</pre>
              </div>
            )}
          </div>
        </div>
      </body>
    </html>
  )
}
