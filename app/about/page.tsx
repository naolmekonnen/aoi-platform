'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-aoi-navy text-white py-16 sm:py-20 px-5 sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.32em] text-[#C9A84C] mb-4">About AOI</p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl mb-6">
              Closing the AI capability gap
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/70">
              The AI Operator Institute exists to help professionals and teams become truly AI-native — proficient in using AI tools daily, not just aware of them.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-white text-[#0A2342] py-16 sm:py-20 px-5 sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold mb-4 sm:mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-4xl">
            The AI Operator Institute exists to close the capability gap. We believe that human transformation through AI
            capability is the defining issue of our era. Our mission: help professionals and teams become truly
            AI-native — not just aware of AI, but proficient in using it daily.
          </p>
        </div>
      </motion.section>

      {/* Core Message Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-aoi-navy text-white py-16 sm:py-20 px-5 sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold mb-6">Core Message</h2>
          <blockquote className="border-l-4 border-[#C9A84C] pl-6 italic text-white/90 text-lg mb-4">
            "AI won't replace you. Falling behind it will."
          </blockquote>
          <p className="text-white/70">
            This isn't about job displacement. It's about opportunity. The professionals who master AI tools and
            integrate them into their workflows will significantly outperform those who don't.
          </p>
        </div>
      </motion.section>

      {/* What Makes Different Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-white text-[#0A2342] py-16 sm:py-20 px-5 sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold mb-8">What Makes AOI Different</h2>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="font-semibold text-[#0A2342] mb-3">Practical, Not Academic</h3>
              <p className="text-gray-600">
                We teach real-world workflows and use cases, not theoretical AI concepts. Your learning is immediately
                applicable to your role.
              </p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="font-semibold text-[#0A2342] mb-3">Measured, Not Hype</h3>
              <p className="text-gray-600">
                Our content is grounded in research from McKinsey Global Institute, Deloitte, Accenture, and the World Economic Forum — not Silicon Valley
                hype.
              </p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="font-semibold text-[#0A2342] mb-3">Certification, Not Participation</h3>
              <p className="text-gray-600">
                You don't get a certificate for finishing. You get one for demonstrating capability. Pass a rigorous
                30-question exam to earn your credential.
              </p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="font-semibold text-[#0A2342] mb-3">Corporate-Grade, Studio-Designed</h3>
              <p className="text-gray-600">
                AOI's design and positioning reference programs from Deloitte's and McKinsey's internal AI certification
                — corporate, authoritative, premium.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Three Paths Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-aoi-navy text-white py-16 sm:py-20 px-5 sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold mb-8">Our Three Paths</h2>
          <motion.div 
            className="grid gap-6 sm:gap-8 md:grid-cols-3"
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
                title: "Beginners",
                description: "Start with the free assessment to benchmark your readiness. Most people are surprised by their results."
              },
              {
                title: "Self-Directed Learners",
                description: "Take the course to close your gaps. Four modules, ready-to-use workflows, 100% practical."
              },
              {
                title: "Professionals",
                description: "Earn your AI Operator Certification. Pass the 30-question exam, get your credential."
              }
            ].map((path, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white/8 rounded-2xl p-6"
              >
                <h3 className="font-semibold text-white mb-3">{path.title}</h3>
                <p className="text-white/70 text-sm">{path.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* How Positioned Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-white text-[#0A2342] py-16 sm:py-20 px-5 sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold mb-6">How We're Positioned</h2>
          <p className="text-gray-600 mb-4">
            AOI is positioned as the premium AI certification platform for professionals — think of the gold standard
            that serious practitioners pursue. We're not competing on price or entertainment value. We're competing on
            credibility and outcomes.
          </p>
          <p className="text-gray-600">
            If you want to learn about cutting-edge AI research, other resources exist. If you want to be certified as
            proficient in using AI effectively in your work, AOI is your destination.
          </p>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-aoi-navy text-white py-20 text-center"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Close Your AI Capability Gap?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Start with the free assessment.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/assessment"
              className="inline-flex items-center justify-center rounded-full bg-[#C9A84C] px-8 py-4 text-base font-semibold text-[#0A2342] shadow-xl shadow-[#C9A84C]/20 transition hover:-translate-y-0.5"
            >
              Take the Free Assessment →
            </Link>
            <Link
              href="/advisory"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </motion.section>
    </main>
  )
}
