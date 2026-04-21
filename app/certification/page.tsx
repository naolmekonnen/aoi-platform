'use server'

import Link from 'next/link'
import { redirect } from 'next/navigation'
import { Brain, Shield, Award } from 'lucide-react'
import { createServerSupabase } from '@/lib/supabase/server'
import CertButton from './CertButton'

export default async function CertificationPage() {
  const supabase = await createServerSupabase()

  // Get the current user
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // If not logged in, show overview only
  let hasCertAccess = false

  if (user) {
    // Check if user has purchased certification exam access
    const { data: purchase } = await supabase
      .from('purchases')
      .select('*')
      .eq('user_id', user.id)
      .eq('product', 'cert')
      .eq('status', 'completed')
      .single()

    hasCertAccess = !!purchase
  }

  // If user has access, show certification portal
  if (user && hasCertAccess) {
    return (
      <div className="min-h-screen bg-white">
        {/* Certification Header */}
        <section className="bg-aoi-navy text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold mb-2">AI Operator Certification</h1>
            <p className="text-gray-200">Your verifiable credential in practical AI capability</p>
          </div>
        </section>

        {/* Certification Module */}
        <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-aoi-navy to-aoi-navy/80 rounded-lg p-8 text-white mb-8">
              <h2 className="text-2xl font-bold mb-4">You're Ready to Take the Exam</h2>
              <p className="text-gray-200 mb-6">30 scenario-based questions. 1 hour. Instant results and downloadable certificate.</p>
              <a 
                href="/certification/exam"
                className="inline-block bg-aoi-gold text-aoi-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all"
              >
                Start Exam →
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
              {[
                { label: '30 Questions', icon: '❓' },
                { label: '70% to Pass', icon: '✓' },
                { label: '1 Hour Limit', icon: '⏱️' },
                { label: 'Instant Results', icon: '⚡' },
                { label: 'PDF Certificate', icon: '📜' },
              ].map((item, idx) => (
                <div key={idx} className="bg-aoi-lightgray rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <p className="text-sm font-semibold text-aoi-navy">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="bg-aoi-lightgray rounded-lg p-8">
              <h3 className="text-xl font-bold text-aoi-navy mb-4">What This Credential Means</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-aoi-gold font-bold">•</span>
                  <span className="text-aoi-secondary">You can demonstrate practical AI capability to employers and clients</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-aoi-gold font-bold">•</span>
                  <span className="text-aoi-secondary">Verifiable credential with unique ID you can share on LinkedIn</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-aoi-gold font-bold">•</span>
                  <span className="text-aoi-secondary">Built to professional certification standards (scenario-based, not trivia)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-aoi-gold font-bold">•</span>
                  <span className="text-aoi-secondary">Indicates you make better decisions with AI than most peers</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    )
  }

  // Show certification overview if not logged in or if not purchased
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Navy Background */}
      <section className="bg-aoi-navy text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 leading-tight">Prove You're AI-Ready. Get Certified.</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            The AI Operator Certification is a 30-question scenario-based exam that validates your practical AI capability with a verifiable credential you can share with employers, clients, and partners.
          </p>
        </div>
      </section>

      {/* Credential Pillars - White Cards with Gold Top Border */}
      <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-aoi-navy text-center mb-12">Why This Certification Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 - Scenario-Based */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all">
              <div className="h-1 bg-aoi-gold"></div>
              <div className="p-8">
                <Brain className="w-10 h-10 text-aoi-gold mb-4" />
                <h3 className="text-xl font-bold text-aoi-navy mb-4">Scenario-Based</h3>
                <p className="text-aoi-secondary">
                  This is not a multiple choice knowledge quiz. Every question puts you in a real business situation and tests whether you make the right call. That is the standard the market is moving toward.
                </p>
              </div>
            </div>

            {/* Card 2 - Verifiable */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all">
              <div className="h-1 bg-aoi-gold"></div>
              <div className="p-8">
                <Shield className="w-10 h-10 text-aoi-gold mb-4" />
                <h3 className="text-xl font-bold text-aoi-navy mb-4">Verifiable</h3>
                <p className="text-aoi-secondary">
                  Every certificate includes a unique ID that can be verified at aoiinstitute.com/verify. Shareable on LinkedIn with one click.
                </p>
              </div>
            </div>

            {/* Card 3 - Recognized */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all">
              <div className="h-1 bg-aoi-gold"></div>
              <div className="p-8">
                <Award className="w-10 h-10 text-aoi-gold mb-4" />
                <h3 className="text-xl font-bold text-aoi-navy mb-4">Recognized</h3>
                <p className="text-aoi-secondary">
                  Built to the same standard as professional certifications in other fields — scenario-based, practical, and tied to real business outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What The Exam Covers - Light Gray Background */}
      <section className="bg-aoi-lightgray py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-aoi-navy text-center mb-12">What the Exam Covers</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { category: 'Prompt Engineering & Strategy', count: 8 },
              { category: 'Business AI Application', count: 7 },
              { category: 'Output Evaluation & Quality', count: 5 },
              { category: 'AI Workflow Design', count: 5 },
              { category: 'AI Limitations & Ethics', count: 5 },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 text-center border border-gray-200">
                <div className="text-3xl font-bold text-aoi-gold mb-3">{item.count}</div>
                <p className="font-semibold text-aoi-navy text-sm">{item.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Earns This - Navy Background */}
      <section className="bg-aoi-navy text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Who Earns This Certification</h2>
          <p className="text-lg text-gray-200">
            The AI Operator Certification is for professionals and business owners who want more than a participation trophy. It is for people who can demonstrate they make better decisions with AI than their peers — and can prove it.
          </p>
        </div>
      </section>

      {/* Exam Details & CTA */}
      <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Exam Details */}
            <div>
              <h2 className="text-2xl font-bold text-aoi-navy mb-8">The Exam</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-aoi-gold pl-6">
                  <p className="font-semibold text-aoi-navy mb-1">30 Scenario-Based Questions</p>
                  <p className="text-aoi-secondary">Each tests real decision-making across business contexts.</p>
                </div>
                <div className="border-l-4 border-aoi-gold pl-6">
                  <p className="font-semibold text-aoi-navy mb-1">70% Pass Rate Required</p>
                  <p className="text-aoi-secondary">21 out of 30 correct answers to earn your certificate.</p>
                </div>
                <div className="border-l-4 border-aoi-gold pl-6">
                  <p className="font-semibold text-aoi-navy mb-1">1 Hour Time Limit</p>
                  <p className="text-aoi-secondary">Sufficient time to think through each scenario carefully.</p>
                </div>
                <div className="border-l-4 border-aoi-gold pl-6">
                  <p className="font-semibold text-aoi-navy mb-1">Instant Results</p>
                  <p className="text-aoi-secondary">See your score immediately. Certificate available for download.</p>
                </div>
                <div className="border-l-4 border-aoi-gold pl-6">
                  <p className="font-semibold text-aoi-navy mb-1">Retake Available</p>
                  <p className="text-aoi-secondary">Didn't pass? Try again in 24 hours. $20 per retake.</p>
                </div>
              </div>
            </div>

            {/* Pricing Card */}
            <div className="bg-aoi-navy rounded-2xl p-8 text-white h-fit">
              <h3 className="text-2xl font-bold mb-6">AI Operator Certification</h3>
              
              {/* Trust Signals */}
              <div className="space-y-3 mb-8 pb-8 border-b border-gray-600">
                <div className="flex items-center gap-3">
                  <span className="text-lg">🔒</span>
                  <span className="text-sm">30-Day Money-Back Guarantee</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">⚡</span>
                  <span className="text-sm">Instant Access After Purchase</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">📜</span>
                  <span className="text-sm">PDF Certificate + LinkedIn Share</span>
                </div>
              </div>

              <div className="text-5xl font-bold text-aoi-gold mb-6">$49</div>

              <div className="mb-6">
                <CertButton userEmail={user?.email} />
              </div>

              <p className="text-sm text-gray-300 text-center">
                Prerequisites: Recommended to complete the self-guided course first
              </p>
              <Link href="/course" className="block text-center text-aoi-gold text-sm font-semibold hover:underline mt-4">
                Not ready? Take the course →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Scenario-Based - Context */}
      <section className="bg-aoi-lightgray py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-aoi-navy mb-6">Why Scenario-Based?</h2>
          <p className="text-aoi-secondary mb-4">
            Traditional certifications test knowledge. This certification tests judgment. When you're on the job, you won't be asked to recall facts—you'll need to make decisions. This exam mirrors that reality, which is why employers trust it.
          </p>
          <p className="text-aoi-secondary">
            The AI Operator Certification is built to the same standard as professional certifications in other fields (PMP, CPA, etc.), giving your credential real market value.
          </p>
        </div>
      </section>
    </div>
  )
}
