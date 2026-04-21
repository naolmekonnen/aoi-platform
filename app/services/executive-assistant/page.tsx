'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ExecutiveAssistantPage() {
  return (
    <div>
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-aoi-navy text-white py-16 sm:py-20 px-5 sm:px-8"
      >
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-[#C9A84C] mb-4">AI SOLUTION 04</p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl mb-6">
            Your AI Executive Assistant Works 24 Hours a Day.
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/70">
            Scheduling, emails, meeting prep, and routine communications — handled automatically while you focus on growth.
          </p>
        </div>
      </motion.section>

      {/* Problem Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-white text-[#0A2342] py-16 sm:py-20 px-5 sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl font-bold text-[#0A2342] mb-4">The Problem</h2>
              <p className="text-gray-600 mb-6">
                The average business owner spends hours every week on scheduling, follow-up emails, and routine communications. This is not where your value is created.
              </p>
              <h2 className="text-2xl font-bold text-[#0A2342] mb-4">The Solution</h2>
              <p className="text-gray-600">
                AI handles all of it — drafting responses, managing your calendar, preparing meeting briefs, and keeping communications moving — automatically.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white border border-gray-100 shadow-md rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-[#0A2342] mb-4">Included</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-[#C9A84C] mt-1">✓</span>
                  <span>Email drafting and responses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C9A84C] mt-1">✓</span>
                  <span>Calendar management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C9A84C] mt-1">✓</span>
                  <span>Meeting preparation briefs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C9A84C] mt-1">✓</span>
                  <span>Routine communication automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C9A84C] mt-1">✓</span>
                  <span>Style and preference learning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C9A84C] mt-1">✓</span>
                  <span>Weekly summary reports</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-[#F4F6F9] text-[#0A2342] py-16 sm:py-20 px-5 sm:px-8"
      >
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold text-[#0A2342] mb-4">How It Works</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our AI system integrates seamlessly with your existing tools to provide instant, intelligent lead management.
          </p>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
              className="bg-white border border-gray-100 shadow-md rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-[#C9A84C] rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-[#0A2342] mb-3">You define your preferences and style</h3>
              <p className="text-gray-600">Lead form submission triggers instant AI acknowledgment</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
              className="bg-white border border-gray-100 shadow-md rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-[#C9A84C] rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-[#0A2342] mb-3">AI drafts emails and responses</h3>
              <p className="text-gray-600">System analyzes lead data and assigns qualification score</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
              className="bg-white border border-gray-100 shadow-md rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-[#C9A84C] rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-[#0A2342] mb-3">AI manages scheduling requests</h3>
              <p className="text-gray-600">Personalized nurture sequence begins immediately</p>
            </motion.div>
          </div>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 mt-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
              className="bg-white border border-gray-100 shadow-md rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-[#C9A84C] rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-white font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-[#0A2342] mb-3">You review and approve in seconds</h3>
              <p className="text-gray-600">You review and approve in seconds</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
              className="bg-white border border-gray-100 shadow-md rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-[#C9A84C] rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-white font-bold">5</span>
              </div>
              <h3 className="text-xl font-bold text-[#0A2342] mb-3">AI learns your patterns over time</h3>
              <p className="text-gray-600">AI learns your patterns over time</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Results Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-white text-[#0A2342] py-16 sm:py-20 px-5 sm:px-8"
      >
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold text-[#0A2342] mb-8">Results</h2>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            <div className="bg-[#F4F6F9] rounded-2xl p-8">
              <div className="text-4xl font-bold text-[#C9A84C] mb-2">60%</div>
              <p className="text-gray-600">time saved on admin</p>
            </div>
            <div className="bg-[#F4F6F9] rounded-2xl p-8">
              <div className="text-4xl font-bold text-[#C9A84C] mb-2">3x faster</div>
              <p className="text-gray-600">response to communications</p>
            </div>
            <div className="bg-[#F4F6F9] rounded-2xl p-8">
              <div className="text-4xl font-bold text-[#C9A84C] mb-2">Zero</div>
              <p className="text-gray-600">missed scheduling conflicts</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-aoi-navy text-white py-16 sm:py-20 px-5 sm:px-8 text-center"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Your Time Back?</h2>
          <p className="text-white/70 mb-8">Book a free consultation to see how AI Executive Assistant can transform your productivity.</p>
          <Link
            href="/advisory"
            className="inline-flex items-center justify-center rounded-full bg-[#C9A84C] px-8 py-4 text-base font-semibold text-[#0A2342] shadow-xl shadow-[#C9A84C]/20 transition hover:-translate-y-0.5"
          >
            Book Free Consultation
          </Link>
        </div>
      </motion.section>
    </div>
  )
}