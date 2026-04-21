'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function FollowUpPage() {
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
          <p className="text-sm uppercase tracking-[0.32em] text-[#C9A84C] mb-4">Follow-Up Automation</p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl mb-6">
            Never miss a follow-up opportunity again
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/70">
            Intelligent follow-up sequences that adapt to prospect behavior, ensuring no lead falls through the cracks and every opportunity is maximized.
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
                Manual follow-up is inconsistent and time-consuming. Most sales teams miss 80% of follow-up opportunities, leading to lost revenue and frustrated prospects.
              </p>
              <h2 className="text-2xl font-bold text-[#0A2342] mb-4">The Solution</h2>
              <p className="text-gray-600">
                AI-driven follow-up automation that creates personalized sequences, tracks engagement, and adapts messaging based on prospect responses and behavior patterns.
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
                  <span className="text-[#C9A84C] mt-1">🤖</span>
                  <span>AI-generated personalized follow-up sequences</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C9A84C] mt-1">📊</span>
                  <span>Real-time engagement tracking and analytics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C9A84C] mt-1">🔄</span>
                  <span>Adaptive messaging based on responses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C9A84C] mt-1">⏰</span>
                  <span>Optimal timing and frequency optimization</span>
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
            Our AI analyzes prospect behavior to create and execute personalized follow-up sequences that maximize engagement.
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
              <h3 className="text-xl font-bold text-[#0A2342] mb-3">Behavior Analysis</h3>
              <p className="text-gray-600">AI analyzes prospect interactions and engagement patterns</p>
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
              <h3 className="text-xl font-bold text-[#0A2342] mb-3">Sequence Generation</h3>
              <p className="text-gray-600">Personalized follow-up sequences are automatically created</p>
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
              <h3 className="text-xl font-bold text-[#0A2342] mb-3">Adaptive Execution</h3>
              <p className="text-gray-600">Messages adapt based on responses and optimal timing</p>
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready to perfect your follow-up process?</h2>
          <p className="text-white/70 mb-8">Book a free consultation to see how follow-up automation can boost your close rates.</p>
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
