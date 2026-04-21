'use client'

import Link from 'next/link'
import { XCircle } from 'lucide-react'

export default function CheckoutCancelPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />

        <h1 className="text-3xl font-bold text-aoi-navy mb-2">Payment Cancelled</h1>
        <p className="text-gray-600 mb-8">
          Your payment was cancelled. No charges have been made to your account.
        </p>

        <Link
          href="/dashboard"
          className="inline-block bg-aoi-gold text-aoi-navy px-8 py-3 rounded-lg font-bold hover:bg-aoi-gold/90 transition-colors mb-4"
        >
          Back to Dashboard
        </Link>

        <p className="text-sm text-gray-600 mb-4">
          If you need help, please contact support at naol@leencaqaulityllc.com
        </p>

        <div className="bg-gray-100 rounded-lg p-4 mt-6 text-left">
          <p className="text-sm font-semibold text-aoi-navy mb-2">Still interested?</p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>
              <Link href="/course" className="text-aoi-gold hover:underline">
                Explore the Course →
              </Link>
            </li>
            <li>
              <Link href="/certification" className="text-aoi-gold hover:underline">
                Learn about Certification →
              </Link>
            </li>
            <li>
              <Link href="/assessment" className="text-aoi-gold hover:underline">
                Take the Free Assessment →
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
