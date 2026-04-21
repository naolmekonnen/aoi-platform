'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const challengeOptions = [
  'Too much manual repetitive work',
  'Not following up consistently',
  'Not responding fast enough to leads',
  'Past customers not coming back',
  'Struggling to scale without hiring more',
]

const teamOptions = ['Just me', '2-5', '6-15', '16+']

export default function AdvisoryPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    businessName: '',
    businessType: '',
    teamSize: teamOptions[0],
    additionalNotes: '',
    challengeItems: [] as string[],
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (field: string, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }))
  }

  const toggleChallenge = (option: string) => {
    setFormData((current) => {
      const nextItems = current.challengeItems.includes(option)
        ? current.challengeItems.filter((item) => item !== option)
        : [...current.challengeItems, option]
      return { ...current, challengeItems: nextItems }
    })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    setSubmitting(true)

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.businessType) {
      setError('Please complete all required fields.')
      setSubmitting(false)
      return
    }

    try {
      const response = await fetch('/api/advisory', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          businessType: formData.businessType,
          teamSize: formData.teamSize,
          monthlyLeads: '', // Not collected in current form
          challenge: formData.challengeItems.join(', '),
          message: formData.additionalNotes,
        }),
      })
      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to submit request')
      }

      setSubmitted(true)
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'An error occurred')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-aoi-navy text-white py-16 sm:py-20 px-5 sm:px-8">
        <div className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-white/8 p-10 shadow-xl">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: "easeOut" }}>
            <div className="space-y-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#C9A84C]/10 text-[#C9A84C]">
                ✓
              </div>
              <h1 className="text-4xl font-semibold text-white">Request Received</h1>
              <p className="mx-auto max-w-2xl text-lg text-white/70">
                Thanks {formData.firstName}. We received your advisory request and may text you within 24 hours to confirm the next available time.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:gap-8 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h2 className="text-xl font-semibold text-white">What to expect</h2>
                <p className="mt-4 text-white/70">
                  We will review your answers, prioritize the highest-impact AI opportunities, and send a direct follow-up with the best next step.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h2 className="text-xl font-semibold text-white">Your contact</h2>
                <p className="mt-4 text-white/70">Phone: {formData.phone}</p>
                <p className="mt-2 text-white/60 text-sm">We may text or call shortly to confirm your session details.</p>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a href="/assessment" className="rounded-full bg-[#C9A84C] px-8 py-4 text-base font-semibold text-[#0A2342] transition hover:-translate-y-0.5">
                Start assessment
              </a>
              <a href="/course" className="rounded-full border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10">
                Explore course
              </a>
            </div>
          </motion.div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-aoi-navy text-white py-16 sm:py-20 px-5 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="grid gap-6 sm:gap-8 lg:grid-cols-[1.25fr_0.95fr] lg:items-center"
        >
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.32em] text-[#C9A84C]">Free strategy review</p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Book a free AI advisory call that starts with lead and sales acceleration.</h1>
            <p className="max-w-2xl text-lg text-white/70">
              Submit your business details below and receive a prioritized action plan for AI-powered growth, follow-up automation, and revenue optimization.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/8 p-8 shadow-xl">
            <p className="text-sm uppercase tracking-[0.32em] text-[#C9A84C]">Free call request</p>
            <h2 className="mt-4 text-2xl font-semibold text-white">Secure your spot with a phone number</h2>
            <p className="mt-3 text-sm text-white/70">
              We require phone so our team can text a fast follow-up and confirm a time that works for your schedule.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={(event) => handleChange('firstName', event.target.value)}
                  required
                  autoComplete="given-name"
                  className="w-full rounded-3xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white shadow-sm outline-none transition focus:border-[#C9A84C]/80 focus:ring-2 focus:ring-[#C9A84C]/20 placeholder:text-white/50"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={(event) => handleChange('lastName', event.target.value)}
                  required
                  autoComplete="family-name"
                  className="w-full rounded-3xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white shadow-sm outline-none transition focus:border-[#C9A84C]/80 focus:ring-2 focus:ring-[#C9A84C]/20 placeholder:text-white/50"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(event) => handleChange('email', event.target.value)}
                  required
                  autoComplete="email"
                  className="w-full rounded-3xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white shadow-sm outline-none transition focus:border-[#C9A84C]/80 focus:ring-2 focus:ring-[#C9A84C]/20 placeholder:text-white/50"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(event) => handleChange('phone', event.target.value)}
                  required
                  autoComplete="tel"
                  className="w-full rounded-3xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white shadow-sm outline-none transition focus:border-[#C9A84C]/80 focus:ring-2 focus:ring-[#C9A84C]/20 placeholder:text-white/50"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Business name"
                  value={formData.businessName}
                  onChange={(event) => handleChange('businessName', event.target.value)}
                  required
                  autoComplete="organization"
                  className="w-full rounded-3xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white shadow-sm outline-none transition focus:border-[#C9A84C]/80 focus:ring-2 focus:ring-[#C9A84C]/20 placeholder:text-white/50"
                />
                <input
                  type="text"
                  placeholder="Business type"
                  value={formData.businessType}
                  onChange={(event) => handleChange('businessType', event.target.value)}
                  required
                  autoComplete="organization-title"
                  className="w-full rounded-3xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white shadow-sm outline-none transition focus:border-[#C9A84C]/80 focus:ring-2 focus:ring-[#C9A84C]/20 placeholder:text-white/50"
                />
              </div>

              <div>
                <select
                  value={formData.teamSize}
                  onChange={(event) => handleChange('teamSize', event.target.value)}
                  className="w-full rounded-3xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white shadow-sm outline-none transition focus:border-[#C9A84C]/80 focus:ring-2 focus:ring-[#C9A84C]/20"
                >
                  {teamOptions.map((option) => (
                    <option key={option} value={option} className="bg-[#0A2342] text-white">
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="rounded-3xl border border-white/20 bg-white/5 p-4">
                <p className="mb-3 text-sm font-semibold text-white">Choose your biggest challenge</p>
                <div className="grid gap-3">
                  {challengeOptions.map((option) => (
                    <button
                      type="button"
                      key={option}
                      onClick={() => toggleChallenge(option)}
                      className={`w-full rounded-3xl border px-4 py-3 text-left text-sm transition ${
                        formData.challengeItems.includes(option)
                          ? 'border-[#C9A84C] bg-[#C9A84C]/10 text-white'
                          : 'border-white/20 bg-white/5 text-white/70 hover:border-white/30'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <textarea
                placeholder="Additional details or goals (optional)"
                value={formData.additionalNotes}
                onChange={(event) => handleChange('additionalNotes', event.target.value)}
                rows={4}
                className="w-full rounded-3xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white shadow-sm outline-none transition focus:border-[#C9A84C]/80 focus:ring-2 focus:ring-[#C9A84C]/20 placeholder:text-white/50"
              />

              {error && <p className="text-sm text-rose-300">{error}</p>}

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex w-full items-center justify-center rounded-full bg-[#C9A84C] px-6 py-4 text-sm font-semibold text-[#0A2342] shadow-xl shadow-[#C9A84C]/30 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? 'Submitting...' : 'Book Free Consultation'}
              </button>
            </form>
          </div>
        </motion.section>
      </div>
    </main>
  )
}
