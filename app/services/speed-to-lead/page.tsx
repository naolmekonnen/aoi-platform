'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function SpeedToLeadPage() {
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
          <p className="text-sm uppercase tracking-[0.32em] text-[#C9A84C] mb-4">Speed to Lead</p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl mb-6">
            Respond to leads in under 5 minutes, every time
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/70">
            Slow lead response kills conversions. Our AI system ensures instant acknowledgment and intelligent follow-up sequences that nurture prospects until they're ready to buy.
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
                Most businesses take hours or days to respond to leads. By then, prospects have moved on. Studies show that responding within 5 minutes increases conversion rates by 300%.
              </p>
              <h2 className="text-2xl font-bold text-[#0A2342] mb-4">The Solution</h2>
              <p className="text-gray-600">
                AI-powered instant response system that acknowledges leads immediately, qualifies them automatically, and triggers personalized follow-up sequences based on their behavior and profile.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white border border-gray-100 shadow-md rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-[#0A2342] mb-4">Key Features</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-[#C9A84C] mt-1">⚡</span>
                  <span>Instant lead acknowledgment via email, text, and chat</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C9A84C] mt-1">🎯</span>
                  <span>AI qualification scoring and routing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C9A84C] mt-1">📈</span>
                  <span>Automated nurture sequences with 24/7 availability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C9A84C] mt-1">📊</span>
                  <span>Real-time analytics and conversion tracking</span>
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
              <h3 className="text-xl font-bold text-[#0A2342] mb-3">Lead Captured</h3>
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
              <h3 className="text-xl font-bold text-[#0A2342] mb-3">AI Qualification</h3>
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
              <h3 className="text-xl font-bold text-[#0A2342] mb-3">Automated Follow-Up</h3>
              <p className="text-gray-600">Personalized nurture sequence begins immediately</p>
            </motion.div>
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready to accelerate your lead response?</h2>
          <p className="text-white/70 mb-8">Book a free consultation to see how Speed to Lead can transform your conversion rates.</p>
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
