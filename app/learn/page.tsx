'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const learningPaths = [
  {
    title: 'AI Readiness Course',
    description: 'Master the fundamentals of AI implementation and strategy for business leaders.',
    duration: '4 weeks',
    level: 'Beginner to Intermediate',
    link: '/course',
    icon: '📚',
  },
  {
    title: 'AI Certification Exam',
    description: 'Prove your AI expertise with our comprehensive certification program.',
    duration: 'Self-paced',
    level: 'Intermediate to Advanced',
    link: '/certification',
    icon: '🎓',
  },
  {
    title: 'AI Implementation Workshop',
    description: 'Hands-on training for deploying AI systems in your organization.',
    duration: '2 days',
    level: 'Intermediate',
    link: '/advisory',
    icon: '⚙️',
  },
]

export default function LearnPage() {
  return (
    <main className="min-h-screen bg-aoi-navy text-white py-16 sm:py-20 px-5 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="text-center mb-4"
        >
          <p className="text-sm uppercase tracking-[0.32em] text-[#C9A84C] mb-4">Learning Center</p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl mb-6">
            Accelerate your AI journey with expert-led training
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/70">
            From foundational concepts to advanced implementation, our learning programs equip you with the knowledge and skills to lead AI transformation in your organization.
          </p>
        </motion.section>

        <motion.div
          className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {learningPaths.map((path, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="rounded-2xl border border-white/10 bg-white/8 p-8 shadow-md hover:shadow-xl hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{path.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{path.title}</h3>
              <p className="text-white/70 mb-4">{path.description}</p>
              <div className="space-y-2 mb-6">
                <div className="text-sm text-white/60">
                  <span className="font-semibold text-[#C9A84C]">Duration:</span> {path.duration}
                </div>
                <div className="text-sm text-white/60">
                  <span className="font-semibold text-[#C9A84C]">Level:</span> {path.level}
                </div>
              </div>
              <Link href={path.link} className="inline-flex items-center gap-2 text-[#C9A84C] font-semibold hover:text-white transition">
                Learn more →
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Start your AI learning journey today</h2>
          <p className="text-white/70 mb-8">Take the assessment to understand your current AI readiness and get personalized learning recommendations.</p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/assessment"
              className="inline-flex items-center justify-center rounded-full bg-[#C9A84C] px-8 py-4 text-base font-semibold text-[#0A2342] shadow-xl shadow-[#C9A84C]/20 transition hover:-translate-y-0.5"
            >
              Take AI Assessment
            </Link>
            <Link
              href="/course"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Browse Courses
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  )
}
