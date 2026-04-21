import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { product, userEmail } = body

    const secretKey = process.env.STRIPE_SECRET_KEY
    if (!secretKey) {
      console.error('Missing STRIPE_SECRET_KEY')
      return NextResponse.json(
        { error: 'Payment not configured' },
        { status: 500 }
      )
    }

    const coursePriceId = process.env.STRIPE_COURSE_PRICE_ID
    const certPriceId = process.env.STRIPE_CERT_PRICE_ID

    const priceId = product === 'course'
      ? coursePriceId
      : certPriceId

    if (!priceId) {
      console.error('Missing price ID for:', product)
      return NextResponse.json(
        { error: 'Price not configured' },
        { status: 500 }
      )
    }

    const Stripe = (await import('stripe')).default
    const stripe = new Stripe(secretKey, {
      apiVersion: '2024-06-20' as any
    })

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
      || 'https://aoi-platform-three.vercel.app'

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price: priceId,
        quantity: 1
      }],
      mode: 'payment',
      success_url: `${siteUrl}/${product === 'course' ? 'course' : 'certification'}?success=true`,
      cancel_url: `${siteUrl}/${product === 'course' ? 'course' : 'certification'}`,
      customer_email: userEmail || undefined,
      metadata: {
        product,
        userEmail: userEmail || ''
      }
    })

    console.log('Stripe session created:', session.id)
    return NextResponse.json({ url: session.url })

  } catch (error: any) {
    console.error('Stripe checkout error:', error.message)
    return NextResponse.json(
      { error: error.message || 'Checkout failed' },
      { status: 500 }
    )
  }
}