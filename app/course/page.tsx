'use server'

import Link from 'next/link'
import { redirect } from 'next/navigation'
import { CheckCircle2, Clock, BookOpen, Award } from 'lucide-react'
import { createServerSupabase } from '@/lib/supabase/server'
import EnrollButton from './EnrollButton'

export default async function CoursePage() {
  const supabase = await createServerSupabase()

  // Get the current user
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // If not logged in, show overview only
  let hasCourseAccess = false

  if (user) {
    // Check if user has purchased course access
    const { data: purchase } = await supabase
      .from('purchases')
      .select('*')
      .eq('user_id', user.id)
      .eq('product', 'course')
      .eq('status', 'completed')
      .single()

    hasCourseAccess = !!purchase
  }

  // If user has access, show course portal
  if (user && hasCourseAccess) {
    return (
      <div className="min-h-screen bg-white">
        {/* Course Header */}
        <section className="bg-aoi-navy text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold mb-2">AI Readiness Course</h1>
            <p className="text-gray-200">Your personalized path to becoming an AI operator</p>
          </div>
        </section>

        {/* Course Modules */}
        <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {[
              { module: 'Module 1', title: 'AI Clarity', duration: '45 min', subtitle: 'Foundations', description: 'Understand the fundamentals of AI and how it applies to your business.' },
              { module: 'Module 2', title: 'Real Use Cases', duration: '45 min', subtitle: 'Application', description: 'See proven use cases and learn how to identify opportunities in your business.' },
              { module: 'Module 3', title: 'Practical Workflows', duration: '60 min', subtitle: 'Systems', description: 'Build documented workflows your team can follow and improve over time.' },
              { module: 'Module 4', title: 'Becoming AI-Native', duration: '30 min', subtitle: 'Mastery', description: 'Master the mindset and practices of truly AI-native operations.' },
            ].map((item, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-6 mb-4 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="text-sm font-semibold text-aoi-gold mb-1">{item.module}</p>
                    <h3 className="text-xl font-bold text-aoi-navy">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.subtitle}</p>
                  </div>
                  <span className="text-aoi-gold font-semibold text-sm">{item.duration}</span>
                </div>
                <p className="text-aoi-secondary mb-4">{item.description}</p>
                <button className="text-aoi-gold font-semibold hover:text-aoi-gold/80 text-sm">
                  Start Module {idx + 1} →
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Resources */}
        <section className="bg-aoi-lightgray py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-aoi-navy mb-8">Course Materials</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6">
                <BookOpen className="w-8 h-8 text-aoi-gold mb-3" />
                <h3 className="font-semibold text-aoi-navy mb-2">Reference Guides</h3>
                <p className="text-sm text-aoi-secondary mb-4">Keep these templates and frameworks for your team to reference.</p>
                <a href="#" className="text-aoi-gold font-semibold text-sm hover:underline">Download PDF</a>
              </div>
              <div className="bg-white rounded-lg p-6">
                <Award className="w-8 h-8 text-aoi-gold mb-3" />
                <h3 className="font-semibold text-aoi-navy mb-2">Certification Prep</h3>
                <p className="text-sm text-aoi-secondary mb-4">Practice questions and study guide for the certification exam.</p>
                <a href="/certification/exam" className="text-aoi-gold font-semibold text-sm hover:underline">Take Exam</a>
              </div>
              <div className="bg-white rounded-lg p-6">
                <Clock className="w-8 h-8 text-aoi-gold mb-3" />
                <h3 className="font-semibold text-aoi-navy mb-2">Workbook</h3>
                <p className="text-sm text-aoi-secondary mb-4">Exercises and worksheets to apply what you learn.</p>
                <a href="#" className="text-aoi-gold font-semibold text-sm hover:underline">Access Workbook</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  // Show enrollment overview if not logged in or if not purchased
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Navy Background */}
      <section className="bg-aoi-navy text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 leading-tight">Stop Guessing. Start Operating.</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            The AI Readiness Course is a 2-3 hour self-guided program that closes your specific AI gaps, gives you practical frameworks you can use immediately, and prepares you to earn your AI Operator Certification.
          </p>
        </div>
      </section>

      {/* CTA Section - Right after hero */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-aoi-navy rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">AI Readiness Course</h2>
            <p className="text-lg text-gray-200 mb-8">2-3 hours · Self-paced · Cert prep included</p>
            <div className="mb-6">
              <EnrollButton userEmail={user?.email} />
            </div>
            <p className="text-sm text-gray-300">30-day money-back guarantee</p>
          </div>
        </div>
      </section>

      {/* Value Section - White Background, 2 Columns */}
      <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Outcomes */}
            <div>
              <h2 className="text-3xl font-bold text-aoi-navy mb-8">What You'll Be Able to Do After This Course:</h2>
              <div className="space-y-4">
                {[
                  'Direct AI to produce consistently high-quality outputs',
                  'Build documented AI workflows your team can follow',
                  'Identify which AI tools fit which business tasks',
                  'Measure and communicate the ROI of your AI investment',
                  'Avoid the costly mistakes most operators make with AI',
                  'Pass the AI Operator Certification exam with confidence',
                ].map((outcome, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-6 h-6 text-aoi-gold flex-shrink-0 mt-0.5" />
                    <p className="text-aoi-secondary">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Course Breakdown Card */}
            <div className="bg-aoi-navy rounded-2xl p-8 text-white h-fit">
              <h3 className="text-2xl font-bold mb-8">AI Readiness Course</h3>
              <div className="space-y-5 mb-8">
                {[
                  { module: 'Module 1', title: 'AI Clarity', duration: '45 min', subtitle: 'Foundations' },
                  { module: 'Module 2', title: 'Real Use Cases', duration: '45 min', subtitle: 'Application' },
                  { module: 'Module 3', title: 'Practical Workflows', duration: '60 min', subtitle: 'Systems' },
                  { module: 'Module 4', title: 'Becoming AI-Native', duration: '30 min', subtitle: 'Mastery' },
                ].map((item, idx) => (
                  <div key={idx} className="border-b border-gray-600 pb-5 last:border-0 last:pb-0">
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <p className="font-semibold">{item.module} — {item.title}</p>
                        <p className="text-sm text-gray-300">{item.subtitle}</p>
                      </div>
                      <span className="text-aoi-gold font-semibold">{item.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-600 pt-5 mb-6">
                <p className="text-sm text-gray-300 mb-2">Total: <span className="text-aoi-gold font-semibold">2h 30min</span> of focused learning</p>
                <p className="text-sm text-gray-300">Includes certification prep guide</p>
              </div>
              <div className="h-1 bg-gradient-to-r from-aoi-gold to-aoi-gold/50 rounded mb-6"></div>
              <div className="text-4xl font-bold text-aoi-gold mb-6">$29</div>
              <EnrollButton userEmail={user?.email} />
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Section - Gold Background */}
      <section className="bg-aoi-gold text-aoi-navy py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">The Cost of Not Acting</h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto">
            Every week without structured AI capability is another week your competitors pull ahead. At the average professional's hourly rate, the time lost to inefficient AI use costs most businesses <span className="font-bold">$3,000-$8,000 per month</span>. This course costs $29.
          </p>

          {/* Trust Signals */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">🔒</div>
              <p className="font-semibold">30-Day Money-Back Guarantee</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">⚡</div>
              <p className="font-semibold">Instant Access After Purchase</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">🏆</div>
              <p className="font-semibold">Includes Certification Prep</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="w-full">
            <EnrollButton userEmail={user?.email} />
          </div>
          <p className="text-sm font-semibold">
            Join professionals and business owners who have already closed their AI capability gap.
          </p>
        </div>
      </section>

      {/* FAQ or Additional Context */}
      <section className="bg-aoi-lightgray py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-aoi-navy mb-8 text-center">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 text-center">
              <BookOpen className="w-10 h-10 text-aoi-gold mx-auto mb-4" />
              <h3 className="font-semibold text-aoi-navy mb-2">4 Self-Paced Modules</h3>
              <p className="text-sm text-aoi-secondary">Video lessons, frameworks, and templates you can reference forever.</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <Clock className="w-10 h-10 text-aoi-gold mx-auto mb-4" />
              <h3 className="font-semibold text-aoi-navy mb-2">2.5 Hours Total</h3>
              <p className="text-sm text-aoi-secondary">Complete at your own pace. No time pressure, no live sessions.</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <Award className="w-10 h-10 text-aoi-gold mx-auto mb-4" />
              <h3 className="font-semibold text-aoi-navy mb-2">Certification Prep</h3>
              <p className="text-sm text-aoi-secondary">Full study guide + practice questions for the certification exam.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
