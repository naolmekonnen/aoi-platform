'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-aoi-gold hover:text-aoi-navy mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-aoi-navy mb-8">Terms of Service</h1>
        <p className="text-aoi-secondary mb-8">Last updated April 2026</p>

        <div className="prose prose-sm max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-aoi-navy mb-4">Agreement to Terms</h2>
            <p className="text-aoi-secondary">
              By using the AI Operator Institute platform, you agree to these terms and conditions. If you do not agree, please do not use the platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-aoi-navy mb-4">Services Provided</h2>
            <p className="text-aoi-secondary">
              AOI provides:
            </p>
            <ul className="list-disc pl-6 text-aoi-secondary space-y-2 mt-4">
              <li>Free AI Readiness Assessment (3 minutes)</li>
              <li>Self-guided AI training course ($29)</li>
              <li>Professional AI Operator Certification ($49)</li>
              <li>Business AI consulting and free consultation services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-aoi-navy mb-4">Payment &amp; Refunds</h2>
            <p className="text-aoi-secondary">
              We offer a 30-day money-back guarantee on all paid services. If you are not satisfied with a course or certification purchase, request a refund within 30 days of purchase, no questions asked.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-aoi-navy mb-4">Certification</h2>
            <p className="text-aoi-secondary">
              To earn the AI Operator Certificate, you must:
            </p>
            <ul className="list-disc pl-6 text-aoi-secondary space-y-2 mt-4">
              <li>Score 70% or higher on the 30-question exam</li>
              <li>Complete the exam without unauthorized assistance</li>
              <li>Use your real name for certification records</li>
            </ul>
            <p className="text-aoi-secondary mt-4">
              The certification represents verified knowledge at the time of testing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-aoi-navy mb-4">Advisory Services</h2>
            <p className="text-aoi-secondary">
              Advisory services are engagement-based and scope is defined in a proposal before work begins. Services include assessment, roadmap development, and implementation support.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-aoi-navy mb-4">Intellectual Property</h2>
            <p className="text-aoi-secondary">
              All course content, assessments, and materials are owned by AOI. You may not reproduce, distribute, or commercially use this content without permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-aoi-navy mb-4">Limitation of Liability</h2>
            <p className="text-aoi-secondary">
              AOI provides educational content and advisory services as-is. We are not liable for indirect, incidental, or consequential damages resulting from use of our platform or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-aoi-navy mb-4">Contact</h2>
            <p className="text-aoi-secondary">
              For questions about these terms, contact naol@leencaqaulityllc.com
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
