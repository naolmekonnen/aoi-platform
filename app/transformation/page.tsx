'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function TransformationPage() {
  return (
    <div>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-aoi-navy text-white py-16 sm:py-20 px-5 sm:px-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-[#C9A84C] mb-4">AI Transformation System</p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl mb-6">
            We Don't Just Teach AI.
            We Install It In Your Business.
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/70">
            Most business owners know they need AI.
            Few know where to start. AOI assesses your
            operation, designs a custom AI system, installs
            it in your workflows, and trains your team
            to run it. This is not a course. 
            This is a transformation.
          </p>
        </div>
      </motion.section>

      {/* The 4 Pillars */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-white text-[#0A2342] py-16 sm:py-20 px-5 sm:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white/8 border border-white/10 rounded-2xl p-6"
            >
              <div className="w-12 h-12 bg-[#C9A84C] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#0A2342]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#0A2342] mb-2">Free Consultation</h3>
              <p className="text-gray-600 text-sm">
                Full assessment of your tools, workflows,
                and gaps
              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white/8 border border-white/10 rounded-2xl p-6"
            >
              <div className="w-12 h-12 bg-[#C9A84C] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#0A2342]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#0A2342] mb-2">Custom Roadmap</h3>
              <p className="text-gray-600 text-sm">
                90-day AI implementation plan for your
                specific business
              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white/8 border border-white/10 rounded-2xl p-6"
            >
              <div className="w-12 h-12 bg-[#C9A84C] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#0A2342]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#0A2342] mb-2">Installation</h3>
              <p className="text-gray-600 text-sm">
                AI systems built and deployed in your
                operation by our team
              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white/8 border border-white/10 rounded-2xl p-6"
            >
              <div className="w-12 h-12 bg-[#C9A84C] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#0A2342]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#0A2342] mb-2">Team Training</h3>
              <p className="text-gray-600 text-sm">
                Coaching until your team operates
                AI independently
              </p>
            </motion.div>
          </motion.div>

          <div className="bg-white/8 border border-[#C9A84C] rounded-2xl p-8 mt-8">
            <h3 className="text-xl font-bold text-[#C9A84C] mb-6">Implementation Timeline</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#C9A84C] mb-2">Week 1</div>
                <div className="text-[#0A2342] font-semibold mb-1">Free Consultation & Discovery</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#C9A84C] mb-2">Week 2</div>
                <div className="text-[#0A2342] font-semibold mb-1">Roadmap & Design</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#C9A84C] mb-2">Week 3</div>
                <div className="text-[#0A2342] font-semibold mb-1">Installation Sprint</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#C9A84C] mb-2">Week 4</div>
                <div className="text-[#0A2342] font-semibold mb-1">Training & Handoff</div>
              </div>
            </div>
            <p className="text-[#C9A84C] italic text-center mt-6">
              Implementation-led — scoped to your business.
            </p>
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
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to transform your business with AI?</h2>
          <p className="text-white/70 mb-8">Book a free consultation to get your custom AI implementation roadmap.</p>
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