import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'
import Stripe from 'stripe'
import { createServerSupabase } from '@/lib/supabase/server'
import { getStripeClient } from '@/lib/stripe'
import { sendNotificationEmail, adminPurchaseNotification } from '@/lib/email'

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const sig = request.headers.get('stripe-signature')
    if (!sig) {
      return NextResponse.json(
        { error: 'No signature' }, 
        { status: 400 }
      )
    }
    let event: Stripe.Event
    try {
      const stripe = getStripeClient()
      event = stripe.webhooks.constructEvent(
        body, sig, 
        process.env.STRIPE_WEBHOOK_SECRET!
      )
    } catch (err) {
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 400 }
      )
    }

    const supabase = await createServerSupabase()

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session

      const userId = session.metadata?.userId
      const productType = session.metadata?.productType

      if (!userId || !productType) {
        console.error('Missing metadata in webhook')
        return NextResponse.json({ error: 'Missing metadata' }, { status: 400 })
      }

      // Record the purchase using UPSERT to prevent duplicates
      // If same session is processed twice, this will update instead of failing
      const { data: existingPurchase, error: checkError } = await supabase
        .from('purchases')
        .select('id')
        .eq('stripe_session_id', session.id)
        .single()

      if (existingPurchase) {
        console.log('Purchase already recorded for session:', session.id)
        // Purchase already exists, just return success
        return NextResponse.json({ received: true })
      }

      const { error: purchaseError } = await supabase
        .from('purchases')
        .insert([
          {
            user_id: userId,
            product: productType === 'course_access' ? 'course' : 'cert',
            stripe_session_id: session.id,
            stripe_payment_intent: session.payment_intent?.toString(),
          },
        ])

      if (purchaseError) {
        console.error('Error recording purchase:', purchaseError)
        return NextResponse.json({ error: 'Failed to record purchase' }, { status: 500 })
      }

      // Update user access based on product type
      if (productType === 'course_access') {
        // Grant course access
        const { error: accessError } = await supabase
          .from('profiles')
          .update({ has_course_access: true })
          .eq('id', userId)

        if (accessError) {
          console.error('Error granting course access:', accessError)
          // Don't fail the webhook - access is non-blocking
        } else {
          console.log('Course access granted to user:', userId)
        }
      } else if (productType === 'certification_exam') {
        // Grant certification exam access
        const { error: certError } = await supabase
          .from('profiles')
          .update({ has_certification_access: true })
          .eq('id', userId)

        if (certError) {
          console.error('Error granting certification access:', certError)
          // Don't fail the webhook - access is non-blocking
        } else {
          console.log('Certification access granted to user:', userId)
        }
      }
      // Advisory purchases don't need special access updates

      // Send admin notification email
      try {
        const { data: profile } = await supabase.from('profiles').select('*').eq('id', userId).single()
        
        if (profile) {
          const adminEmail = (process.env.RESEND_ADMIN_EMAIL ?? process.env.ADMIN_EMAIL) || 'naol@leencaqaulityllc.com'
          const customerEmail = session.customer_email ?? profile.email ?? 'unknown@example.com'
          const adminHtml = adminPurchaseNotification({
            firstName: profile.first_name ?? 'Unknown',
            lastName: profile.last_name ?? 'Unknown',
            email: customerEmail,
            phone: profile.phone ?? 'N/A',
            productType,
            amount: Math.round((session.amount_total ?? 0) / 100),
            currency: (session.currency ?? 'usd').toUpperCase(),
          })

          await sendNotificationEmail(adminEmail, `New Purchase — ${profile.first_name || 'User'} ${profile.last_name || ''}`, adminHtml, customerEmail)
        }
      } catch (notificationError) {
        console.error('Failed to send admin purchase notification:', notificationError)
        // Don't fail the webhook - notification is non-critical
      }

      console.log(`Purchase recorded successfully - UserId: ${userId}, Product: ${productType}, SessionId: ${session.id}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 })
  }
}