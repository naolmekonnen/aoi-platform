'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import {
  ArrowRight,
  ShieldCheck,
  ClipboardCheck,
  Users,
  Briefcase,
  BarChart3,
  CheckCircle,
  TrendingUp,
  Lightbulb,
  ChevronDown,
} from 'lucide-react'

const metricCards = [
  {
    metric: '92%',
    detail: 'of organizations report their workforce is unprepared for AI adoption',
    source: 'Deloitte',
    icon: ShieldCheck,
  },
  {
    metric: '$4.4T',
    detail: 'in annual value AI is projected to add to the global economy',
    source: 'McKinsey',
    icon: BarChart3,
  },
  {
    metric: '68%',
    detail: 'average productivity increase reported by AI-enabled professionals',
    source: 'Accenture',
    icon: Users,
  },
  {
    metric: '18 Months',
    detail: 'the window executives have to build AI capability before it becomes a structural disadvantage',
    source: 'World Economic Forum',
    icon: Briefcase,
  },
]

function FAQAccordion() {
  const [open, setOpen] = React.useState(0)
  const items = [
    {
      q: "How do I know if AOI is right for me?",
      a: "If you own a service business that runs on leads, follow-up, and repeat customers — AOI is built for you. If you are a professional who wants to build and certify your AI skills — AOI is also built for you. Start with the free 3-minute assessment and we will show you exactly where you stand and what to do next."
    },
    {
      q: "What is the difference between the training and the consulting?",
      a: "The training — course and certification — builds your personal AI knowledge and gives you a verified credential. The consulting is where we come into your business, build the AI systems for you, and install them. Many clients do both: get certified to understand AI, then hire us to implement it in their business."
    },
    {
      q: "How quickly can I see results?",
      a: "The free assessment takes 3 minutes and gives you immediate clarity. AI systems we build for clients can go live in as little as 48 hours. The course takes 2-3 hours to complete. Results from customer reactivation campaigns typically show within 2 weeks."
    },
    {
      q: "Do I need to be technical?",
      a: "No. The course is built for business operators, not engineers. The AI systems we build require zero technical knowledge to use — we build everything and train your team. If you can use email, you can do this."
    },
    {
      q: "Is there a guarantee?",
      a: "Yes. 30-day money-back guarantee on the course and certification, no questions asked. For consulting engagements, we scope the work carefully before starting so both sides are confident in the outcome."
    }
  ]
  return (
    <div className="divide-y divide-gray-100">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            className="w-full flex justify-between items-center py-5 text-left gap-4"
          >
            <span className="font-semibold text-[#0A2342] text-base">{item.q}</span>
            <svg className={`w-5 h-5 text-[#C9A84C] flex-shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {open === i && (
            <p className="text-gray-600 text-sm leading-relaxed pb-5">{item.a}</p>
          )}
        </div>
      ))}
    </div>
  )
}

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="text-aoi-dark">
      {/* Section 1: Hero */}
      <section className="relative min-h-[640px] bg-aoi-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-100">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <pattern id="geo" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M0 80 L80 0" stroke="#C9A84C" strokeWidth="0.5" opacity="0.04" />
                <path d="M0 0 L80 80" stroke="#C9A84C" strokeWidth="0.5" opacity="0.04" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#geo)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20 relative z-10">
          <p className="inline-flex items-center text-xs font-semibold tracking-wide text-aoi-gold bg-white/10 px-3 py-1 rounded-full mb-4">
            AI Transformation for Business Owners & Professionals
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Your Competitors Are Already Deploying AI. Where Does That Leave You?
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mb-8">
            The professionals and businesses that build AI capability today will dominate their industries for the next decade. Those who wait will spend years catching up. AOI gives you the benchmark, the training, the credential, and the expert implementation support to lead — not follow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/assessment" className="py-4 px-8 text-base font-bold rounded-xl bg-[#C9A84C] text-[#0A2342] inline-flex items-center gap-2">
              Take the Free Assessment <ArrowRight className="w-4 h-4" />
            </Link>
            <button className="py-4 px-8 text-base font-bold rounded-xl border-2 border-white/80 text-white bg-transparent inline-flex items-center gap-2" onClick={() => window.location.href = '/advisory'}>
              See How We Transform Businesses <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Section 2: McKinsey Quote */}
      <section className="bg-[#0B1929] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <blockquote className="text-3xl sm:text-4xl font-semibold text-white leading-tight mb-6 max-w-4xl">
            "The organizations that master AI in the next 24 months will define the next decade."
          </blockquote>
          <div className="border-t-2 border-[#C9A84C] w-24 mb-4" />
          <p className="text-[#C9A84C] font-medium">— McKinsey Global Institute, The Age of AI Report</p>
        </div>
      </section>

      {/* Section 3: Research-Backed Impact Data */}
      <section className="bg-[#0A2342] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-wider">Research-Backed Impact Data</p>
          <h2 className="text-4xl font-bold mt-3 mb-10">The AI Capability Gap Is Measurable. And It's Costing You.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {metricCards.map((metric, i) => {
              const Icon = metric.icon
              return (
                <div key={i} className="bg-white/8 border border-white/15 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-5 h-5 text-[#C9A84C]" />
                    <p className="text-xs uppercase tracking-widest text-gray-300">Source: {metric.source === 'WEF' ? 'World Economic Forum' : metric.source}</p>
                  </div>
                  <div className="text-3xl font-bold text-[#C9A84C] mb-2">{metric.metric}</div>
                  <p className="text-sm leading-relaxed text-gray-200">{metric.detail}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section 4: Our Foundation */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-white text-[#0A2342] py-16 sm:py-20"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-wider">Our Foundation</p>
          <h2 className="text-4xl font-bold text-[#0A2342] mt-2 mb-4">We Exist to Close the AI Capability Gap</h2>
          
          <p className="text-lg text-gray-600 mb-6 max-w-3xl">
            92% of organizations report their workforce is unprepared for AI adoption. That gap costs companies millions in missed productivity, delayed transformation, and competitive disadvantage.
          </p>
          
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">
            AOI exists to change that. We bridge the gap between knowing "AI exists" and truly being able to deploy it. We do this through rigorous assessment, structured training, verified credentials, and hands-on advisory that transforms both individuals and organizations.
          </p>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
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
              className="bg-white border border-gray-100 shadow-md rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <h3 className="text-xl font-bold text-[#0A2342] mb-3">Benchmark</h3>
              <p className="text-gray-600">
                Know where you truly stand. Our assessment reveals your exact AI capability across four dimensions, not just a vanity score.
              </p>
            </motion.div>
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white border border-gray-100 shadow-md rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <h3 className="text-xl font-bold text-[#0A2342] mb-3">Build</h3>
              <p className="text-gray-600">
                Close your gaps with practical training tied to real workflows. Learn not just theory, but how to actually operate AI tools in your role.
              </p>
            </motion.div>
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white border border-gray-100 shadow-md rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <h3 className="text-xl font-bold text-[#0A2342] mb-3">Deploy</h3>
              <p className="text-gray-600">
                For businesses, we don't stop at training. We design, install, and hand off AI systems so your operation runs with AI natively.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Section 5: Why AI Readiness Matters Now */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-aoi-navy text-white py-16 sm:py-20"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-wider">Critical Timing</p>
          <h2 className="text-4xl font-bold text-white mt-2 mb-4">Why AI Readiness Matters Now</h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
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
              className="bg-white/8 rounded-2xl border border-white/10 p-8"
            >
              <div className="h-1 bg-[#C9A84C]" />
              <div className="p-8">
                <TrendingUp className="w-8 h-8 text-[#C9A84C] mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Adapt Before Systems Leave You Behind</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  AI is reshaping every role across every industry. The organizations that build capability now will lead. Those that wait will spend years trying to catch up — if they survive the gap at all. This is not a trend. It is a structural shift.
                </p>
                <Link href="/assessment" className="text-[#C9A84C] font-bold text-sm hover:text-white transition">
                  For everyone — from solopreneurs to enterprise teams →
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white/8 rounded-2xl border border-white/10 p-8"
            >
              <div className="h-1 bg-[#C9A84C]" />
              <div className="p-8">
                <Lightbulb className="w-8 h-8 text-[#C9A84C] mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Create With AI. Don't Just Consume It.</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  Most people use AI as a search engine. The operators who win use it as a thinking partner, a workflow engine, and a competitive weapon. AOI teaches you to direct AI — not just prompt it — for purposeful creation and higher-order results.
                </p>
                <Link href="/course" className="text-[#C9A84C] font-bold text-sm hover:text-white transition">
                  For marketing teams to operations managers →
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white/8 rounded-2xl border border-white/10 p-8"
            >
              <div className="h-1 bg-[#C9A84C]" />
              <div className="p-8">
                <Users className="w-8 h-8 text-[#C9A84C] mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Empower Your Team Before It's Too Late</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  AI capability is now a hiring criterion, a performance differentiator, and an organizational asset. AOI installs verified AI capability inside your team — building the judgment and systems that make your people and your business indispensable.
                </p>
                <Link href="/advisory" className="text-[#C9A84C] font-bold text-sm hover:text-white transition">
                  For founders to HR directors →
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="bg-aoi-navy text-white py-16 sm:py-20 text-center">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Link
            href="/assessment"
            className="inline-flex items-center justify-center rounded-full bg-[#C9A84C] px-8 py-4 text-base font-semibold text-[#0A2342] shadow-xl shadow-[#C9A84C]/20 transition hover:-translate-y-0.5"
          >
            Take the Free Assessment →
          </Link>
        </div>
      </section>

      {/* Section 6: One Platform. Two Paths to AI Capability. */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-white text-[#0A2342] py-16 sm:py-20"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-wider">One Platform. Two Paths to AI Capability.</p>
          <h2 className="text-4xl font-bold mt-2 mb-4">One Platform. Two Paths to AI Capability.</h2>
          <p className="text-lg text-gray-600 mb-10">
            Whether you're an individual professional or a business owner, AOI gives you the tools, training, and expert support to become AI-native.
          </p>
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
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
              className="bg-white border border-gray-100 shadow-md rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-wider">For Professionals & Career Builders</p>
              <h3 className="text-2xl font-bold text-[#0A2342] mt-2 mb-4">Advance Your Career With Verified AI Skills</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#C9A84C] mt-1" />Benchmark your current AI capability with a free assessment</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#C9A84C] mt-1" />Close skill gaps with a structured, practical self-guided course</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#C9A84C] mt-1" />Earn a verified AI Operator credential recognized by employers</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#C9A84C] mt-1" />Get a personalized AI readiness report with your exact gaps</li>
              </ul>
              <Link href="/assessment" className="inline-flex mt-6 items-center gap-2 btn-gold">
                Take the Free Assessment <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white border border-gray-100 shadow-md rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-wider">For Business Owners & Founders</p>
              <h3 className="text-2xl font-bold text-[#0A2342] mt-2 mb-4">Transform Your Business Into an AI-Native Operation</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#C9A84C] mt-1" />Get a full consultation on your business's current AI readiness</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#C9A84C] mt-1" />Receive a custom 90-day AI implementation roadmap</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#C9A84C] mt-1" />Have AI systems designed and installed in your workflows</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#C9A84C] mt-1" />Get coached so your team can operate AI independently</li>
              </ul>
              <Link href="/advisory" className="inline-flex mt-6 items-center gap-2 rounded-full bg-[#C9A84C] px-5 py-3 text-sm font-semibold text-[#0A2342] hover:bg-opacity-90 transition">
                Book Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Dual CTA Banner */}
      <section className="bg-aoi-navy text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Lead With AI?</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals and businesses building AI capability today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/assessment" className="btn-gold inline-flex items-center gap-2">
              Take the Free Assessment <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={() => window.location.href = '/advisory'}
              className="inline-flex items-center justify-center rounded-lg border-2 border-[#C9A84C] bg-transparent px-6 py-3 text-base font-semibold text-[#C9A84C] transition hover:bg-[#C9A84C] hover:text-[#0A2342]"
            >
              Book Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Section 8: How It Works */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-white text-[#0A2342] py-16 sm:py-20"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-wider">How It Works</p>
          <h2 className="text-4xl font-bold mt-2 mb-4">Your Path to AI Mastery</h2>

          <div className="relative">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8"
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
              {[
                {
                  step: '1',
                  title: 'Take the Free Assessment',
                  description: 'Complete our 12-question diagnostic and receive a detailed PDF report showing exactly where you stand and what it is costing you.',
                },
                {
                  step: '2',
                  title: 'Get Your Personalized Roadmap',
                  description: 'Your results reveal your exact capability gaps across four dimensions. We show you the precise path to close them.',
                },
                {
                  step: '3',
                  title: 'Build Your AI Capability',
                  description: 'Complete the self-guided course, earn your certification, and develop practical skills that translate directly to business results.',
                },
                {
                  step: '4',
                  title: 'Install & Scale',
                  description: 'For business owners ready to go further — we assess your operation, design your AI system, install it, and train your team to run it.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="bg-white border border-gray-100 shadow-md rounded-2xl p-8"
                >
                  <div className="w-12 h-12 rounded-full mx-auto mb-6 bg-[#C9A84C] text-[#0A2342] font-black text-xl flex items-center justify-center">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-[#0A2342] mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Section 7: FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C] border-l-4 border-[#C9A84C] pl-3 mb-4">COMMON QUESTIONS</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2342] mb-12">Everything You Need to Know</h2>
          <FAQAccordion />
        </div>
      </section>

    </div>
  )
}
