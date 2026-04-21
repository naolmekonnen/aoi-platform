import Stripe from 'stripe'

const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

export const getStripePublishableKey = () => {
  if (!stripePublishableKey) {
    throw new Error('Missing NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY environment variable')
  }
  return stripePublishableKey
}

// Product IDs for different offerings
export const PRODUCTS = {
  COURSE_ACCESS: process.env.STRIPE_PRODUCT_COURSE_ACCESS,
  CERTIFICATION_EXAM: process.env.STRIPE_PRODUCT_CERTIFICATION_EXAM,
  PREMIUM_ADVISORY: process.env.STRIPE_PRODUCT_PREMIUM_ADVISORY,
}

// Price IDs
export const PRICES = {
  COURSE_ACCESS: process.env.STRIPE_PRICE_COURSE_ACCESS,
  CERTIFICATION_EXAM: process.env.STRIPE_PRICE_CERTIFICATION_EXAM,
  PREMIUM_ADVISORY: process.env.STRIPE_PRICE_PREMIUM_ADVISORY,
}

// Lazy initialization of Stripe client
let stripeInstance: Stripe | null = null

export function getStripeClient(): Stripe {
  if (!stripeInstance) {
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY
    if (!stripeSecretKey) {
      throw new Error('Missing STRIPE_SECRET_KEY environment variable')
    }
    stripeInstance = new Stripe(stripeSecretKey, {
      apiVersion: '2026-03-25.dahlia',
    })
  }
  return stripeInstance
}

export async function createCheckoutSession({
  priceId,
  userId,
  userEmail,
  successUrl,
  cancelUrl,
  metadata = {},
}: {
  priceId: string
  userId: string
  userEmail: string
  successUrl: string
  cancelUrl: string
  metadata?: Record<string, string>
}) {
  const stripe = getStripeClient()
  return stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: 'payment',
    customer_email: userEmail,
    metadata: {
      userId,
      ...metadata,
    },
    success_url: successUrl,
    cancel_url: cancelUrl,
  })
}

export async function createCustomerPortalSession(customerId: string, returnUrl: string) {
  const stripe = getStripeClient()
  return stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: returnUrl,
  })
}

export async function getCustomerByEmail(email: string) {
  const stripe = getStripeClient()
  const customers = await stripe.customers.list({
    email,
    limit: 1,
  })
  return customers.data[0] || null
}

export async function createCustomer(email: string, name?: string, metadata?: Record<string, string>) {
  const stripe = getStripeClient()
  return stripe.customers.create({
    email,
    name,
    metadata,
  })
}