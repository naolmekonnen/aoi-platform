'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Zap, RefreshCw, MessageSquare, Bot, FileText, Database } from 'lucide-react'

const services = [
  {
    slug: 'speed-to-lead',
    title: 'Speed to Lead',
    description: 'Automate lead response and follow-up to convert prospects 3x faster.',
    icon: Zap,
  },
  {
    slug: 'reactivation',
    title: 'Customer Reactivation',
    description: 'Re-engage dormant customers with personalized AI-driven campaigns.',
    icon: RefreshCw,
  },
  {
    slug: 'follow-up',
    title: 'Follow-Up Automation',
    description: 'Never miss a follow-up with intelligent, context-aware sequences.',
    icon: MessageSquare,
  },
  {
    slug: 'executive-assistant',
    title: 'AI Executive Assistant',
    description: 'AI handles scheduling, email drafting, meeting prep, and routine communications automatically.',
    icon: Bot,
  },
  {
    slug: 'invoice-processing',
    title: 'Invoice Processing',
    description: 'AI generates invoices, sends payment reminders, and tracks outstanding balances without manual entry.',
    icon: FileText,
  },
  {
    slug: 'data-entry',
    title: 'Data Entry Automation',
    description: 'AI captures, organizes, and syncs data across your systems — eliminating manual entry and human error.',
    icon: Database,
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-aoi-navy text-white py-16 sm:py-20 px-5 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-4"
        >
          <p className="text-sm uppercase tracking-[0.32em] text-[#C9A84C] mb-4">AI Services</p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl mb-6">
            Close the AI capability gap with proven systems
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/70">
            Deploy battle-tested AI solutions that accelerate your business growth and eliminate manual bottlenecks.
          </p>
        </motion.section>

        <motion.div 
          className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="rounded-2xl border border-white/10 bg-white/8 p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="text-4xl mb-4">{React.createElement(service.icon, { className: "w-8 h-8 text-[#C9A84C]" })}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-white/70 mb-6">{service.description}</p>
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-2 text-[#C9A84C] font-semibold hover:text-white transition"
              >
                Learn more →
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mt-8 text-center"
        >
          <h2 className="text-3xl font-semibold text-white mb-6">Ready to accelerate your business?</h2>
          <p className="text-white/70 mb-8">Book a free consultation to see which systems fit your needs.</p>
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
