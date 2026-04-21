'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const caseStudies = [
  {
    title: 'Manufacturing Company Increases Lead Conversion by 340%',
    description: 'A mid-sized manufacturer struggling with lead response times implemented our Speed to Lead system, resulting in instant response times and automated qualification that transformed their sales process.',
    challenge: 'The company was losing leads due to 24-hour response times and manual qualification processes that couldn\'t keep up with inbound inquiries.',
    solution: 'We deployed our AI-powered Speed to Lead system that automatically responds to web inquiries within 5 minutes, qualifies leads based on intent and budget, and routes high-priority prospects directly to sales reps.',
    results: ['340% increase in lead conversion', 'Response time reduced from 24hrs to 5min', '$2.1M additional revenue in 6 months', 'Lead quality improved by 85%'],
    industry: 'Manufacturing',
    timeline: '3 weeks to implement, results within first month'
  },
  {
    title: 'E-commerce Store Reactivates 45% of Dormant Customers',
    description: 'An online retailer with a large database of inactive customers deployed our reactivation campaigns, bringing back lapsed buyers with personalized AI messaging and timing optimization.',
    challenge: '45% of their customer database hadn\'t purchased in over 6 months, representing millions in lost revenue potential.',
    solution: 'Our AI analyzed purchase history, browsing behavior, and engagement patterns to create personalized reactivation sequences with optimal timing and messaging for each customer segment.',
    results: ['45% reactivation rate', '23% increase in repeat purchase value', 'Customer lifetime value up 67%', 'Email open rates increased 340%'],
    industry: 'E-commerce',
    timeline: '2 weeks to deploy, full reactivation cycle completed in 8 weeks'
  },
  {
    title: 'Professional Services Firm Automates 80% of Follow-ups',
    description: 'A consulting firm struggling with manual follow-up processes implemented our AI follow-up sequences, ensuring no prospect was forgotten and dramatically improving close rates.',
    challenge: 'Sales reps were overwhelmed with manual follow-up tasks, leading to prospects falling through the cracks and extended sales cycles.',
    solution: 'We installed automated follow-up sequences that send personalized, context-aware messages at optimal intervals, track engagement, and escalate hot prospects to human sales reps.',
    results: ['80% of follow-ups automated', '156% increase in proposal response rate', 'Sales cycle reduced by 40%', 'Sales productivity increased 300%'],
    industry: 'Professional Services',
    timeline: '4 weeks to implement, immediate improvement in response rates'
  },
]

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-aoi-navy text-white py-16 sm:py-20 px-5 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-4"
        >
          <p className="text-sm uppercase tracking-[0.32em] text-[#C9A84C] mb-4">Success Stories</p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl mb-6">
            Real results from businesses closing the AI gap
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/70">
            See how companies across industries have transformed their operations and revenue with AI-powered systems.
          </p>
        </motion.section>

        <motion.div 
          className="grid gap-6 sm:gap-8 lg:grid-cols-2 xl:grid-cols-3 mb-8"
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
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="rounded-2xl border border-white/10 bg-white/8 p-8 shadow-md hover:shadow-xl hover:-translate-y-1"
            >
              <div className="text-sm text-[#C9A84C] uppercase tracking-wide mb-2">{study.industry}</div>
              <h3 className="text-xl font-semibold text-white mb-4">{study.title}</h3>
              <p className="text-white/70 mb-6">{study.description}</p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-[#C9A84C] uppercase tracking-wide mb-2">Challenge</h4>
                <p className="text-white/60 text-sm mb-4">{study.challenge}</p>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-[#C9A84C] uppercase tracking-wide mb-2">Solution</h4>
                <p className="text-white/60 text-sm mb-4">{study.solution}</p>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-[#C9A84C] uppercase tracking-wide mb-2">Timeline</h4>
                <p className="text-white/60 text-sm mb-4">{study.timeline}</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-[#C9A84C] uppercase tracking-wide mb-2">Results</h4>
                <div className="space-y-2">
                  {study.results.map((result, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-[#C9A84C]">✓</span>
                      <span className="text-sm text-white/70">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Ready to join these success stories?</h2>
          <p className="text-white/70 mb-8">Book a free consultation to see which systems can deliver similar results for your business.</p>
          <Link
            href="/advisory"
            className="inline-flex items-center justify-center rounded-full bg-[#C9A84C] px-8 py-4 text-base font-semibold text-[#0A2342] shadow-xl shadow-[#C9A84C]/20 transition hover:-translate-y-0.5"
          >
            Book Free Consultation
          </Link>
        </motion.section>
      </div>
    </main>
  )
}
