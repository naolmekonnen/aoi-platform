'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { CheckCircle2 } from 'lucide-react'

export default function CheckoutSuccessPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isPurchaseVerified, setIsPurchaseVerified] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [productType, setProductType] = useState<'course' | 'certification' | null>(null)

  useEffect(() => {
    const product = searchParams.get('product') as 'course' | 'certification' | null
    setProductType(product)

    // Give Stripe webhook time to process (2-3 seconds)
    const timer = setTimeout(() => {
      verifyPurchase(product)
    }, 3000)

    return () => clearTimeout(timer)
  }, [searchParams])

  const verifyPurchase = async (product: 'course' | 'certification' | null) => {
    if (!product) {
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch(`/api/purchases/check?product=${product}`)
      const { purchased } = await response.json()

      if (purchased) {
        setIsPurchaseVerified(true)
      }
    } catch (error) {
      console.error('Error verifying purchase:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="inline-block">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-aoi-gold"></div>
          </div>
          <p className="mt-4 text-aoi-navy font-semibold">Processing your payment...</p>
          <p className="text-sm text-gray-600 mt-2">This usually takes a few seconds.</p>
        </div>
      </div>
    )
  }

  if (!isPurchaseVerified) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="text-5xl mb-4">⏳</div>
          <h1 className="text-2xl font-bold text-aoi-navy mb-4">Payment Processing</h1>
          <p className="text-gray-600 mb-6">
            Your payment has been received. Our system is setting up your access...
          </p>
          <p className="text-sm text-gray-600 mb-6">
            If you don't see access in a few moments, please refresh this page.
          </p>

          <button
            onClick={() => window.location.reload()}
            className="bg-aoi-gold text-aoi-navy px-6 py-3 rounded-lg font-bold hover:bg-aoi-gold/90 transition-colors mb-4 w-full"
          >
            Refresh Page
          </button>

          <Link
            href={productType === 'course' ? '/course' : productType === 'certification' ? '/certification' : '/dashboard'}
            className="block text-aoi-gold hover:underline text-sm"
          >
            Go to {productType === 'course' ? 'Course' : 'Certification'}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />

        <h1 className="text-3xl font-bold text-aoi-navy mb-2">Success!</h1>
        <p className="text-gray-600 mb-8">
          Your purchase is complete. Your access has been activated.
        </p>

        <Link
          href={
            productType === 'course'
              ? '/course'
              : productType === 'certification'
                ? '/certification'
                : '/dashboard'
          }
          className="inline-block bg-aoi-gold text-aoi-navy px-8 py-3 rounded-lg font-bold hover:bg-aoi-gold/90 transition-colors mb-4"
        >
          {productType === 'course'
            ? 'Start the Course'
            : productType === 'certification'
              ? 'Take the Exam'
              : 'Go to Dashboard'}
        </Link>

        <p className="text-sm text-gray-600">
          A confirmation email has been sent to your inbox.
        </p>
      </div>
    </div>
  )
}
