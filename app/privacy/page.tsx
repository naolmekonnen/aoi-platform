'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-aoi-gold hover:text-aoi-navy mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-aoi-navy mb-8">Privacy Policy</h1>
        <p className="text-aoi-secondary mb-8">Last updated April 2026</p>

        <div className="prose prose-sm max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-aoi-navy mb-4">Data We Collect</h2>
            <p className="text-aoi-secondary">
              We collect personal information you provide directly to us through assessment forms, signup pages, and advisory requests. This includes:
            </p>
            <ul className="list-disc pl-6 text-aoi-secondary space-y-2 mt-4">
              <li>Name and email address</li>
              <li>Job title and company information</li>
              <li>Assessment answers and quiz responses</li>
              <li>Certification exam results</li>
              <li>Advisory request details</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-aoi-navy mb-4">How We Use Your Data</h2>
            <p className="text-aoi-secondary">
              Your information is used to:
            </p>
            <ul className="list-disc pl-6 text-aoi-secondary space-y-2 mt-4">
              <li>Deliver assessment results and personalized reports</li>
              <li>Process course enrollments and certification attempts</li>
              <li>Provide advisory services and consultations</li>
              <li>Send email notifications about your progress and results</li>
              <li>Improve our platform and educational content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-aoi-navy mb-4">Third-Party Services</h2>
            <p className="text-aoi-secondary">
              We use third-party services to operate the platform:
            </p>
            <ul className="list-disc pl-6 text-aoi-secondary space-y-2 mt-4">
              <li><strong>Supabase</strong> - Database and authentication</li>
              <li><strong>Stripe</strong> - Payment processing</li>
              <li><strong>Resend</strong> - Email delivery</li>
            </ul>
            <p className="text-aoi-secondary mt-4">
              These services maintain their own privacy policies. We recommend reviewing them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-aoi-navy mb-4">Your Rights</h2>
            <p className="text-aoi-secondary">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-aoi-secondary space-y-2 mt-4">
              <li>Access your personal data</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your data</li>
              <li>Opt out of non-essential communications</li>
            </ul>
            <p className="text-aoi-secondary mt-4">
              Contact us at naol@leencaqaulityllc.com to exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-aoi-navy mb-4">Contact</h2>
            <p className="text-aoi-secondary">
              For privacy inquiries, contact us at naol@leencaqaulityllc.com
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
