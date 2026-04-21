'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ChevronRight, Loader2 } from 'lucide-react'
import { QUIZ_QUESTIONS } from '@/lib/quiz-questions'

type Stage = 'email_gate' | 'quiz' | 'loading' | 'error'

interface EmailGateData {
  firstName: string
  lastName: string
  email: string
  phone: string
  jobTitle: string
  company: string
}

export default function AssessmentPage() {
  const router = useRouter()
  const [stage, setStage] = useState<Stage>('email_gate')
  const [emailData, setEmailData] = useState<EmailGateData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobTitle: '',
    company: '',
  })
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(new Array(QUIZ_QUESTIONS.length).fill(-1))
  const [showMicroInsight, setShowMicroInsight] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleEmailGateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setEmailData((prev) => ({ ...prev, [name]: value }))
  }

  const handleEmailGateSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Validate form
    if (!emailData.firstName || !emailData.lastName || !emailData.email || !emailData.phone || !emailData.jobTitle) {
      setError('First name, last name, email, phone, and job title are required')
      setLoading(false)
      return
    }

    try {
      const response = await fetch('/api/assessment/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailData),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to start assessment')
      }

      setStage('quiz')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      setLoading(false)
    }
  }

  const handleAnswerSelect = (optionIndex: number) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = optionIndex
    setSelectedAnswers(newAnswers)
    setShowMicroInsight(true)

    // Auto advance after 1.5 seconds
    setTimeout(() => {
      if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
        setCurrentQuestion((prev) => prev + 1)
        setShowMicroInsight(false)
      } else {
        submitQuiz()
      }
    }, 1500)
  }

  const submitQuiz = async () => {
    setStage('loading')
    setLoading(true)

    try {
      // Calculate scores by dimension
      const dimensionScores = {
        'AI Awareness': 0,
        'Business Application': 0,
        'Prompt Proficiency': 0,
        'Workflow Readiness': 0,
      }
      let totalScore = 0

      QUIZ_QUESTIONS.forEach((question, index) => {
        const answerIndex = selectedAnswers[index]
        const points = question.points[answerIndex] || 0
        totalScore += points
        dimensionScores[question.dimension] += points
      })

      // Submit assessment
      const response = await fetch('/api/assessment/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: emailData.email,
          answers: selectedAnswers,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit assessment')
      }

      const data = await response.json()
      router.push(`/results/${data.resultId}`)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit assessment')
      setStage('error')
      setLoading(false)
    }
  }

  const question = QUIZ_QUESTIONS[currentQuestion]
  const selectedIndex = selectedAnswers[currentQuestion]

  // EMAIL GATE
  if (stage === 'email_gate') {
    return (
      <div className="min-h-screen bg-aoi-navy flex items-center justify-center px-4">
        {/* Animated geometric background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <pattern id="geo-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M0 100 L100 0" stroke="#C9A84C" strokeWidth="0.5" />
                <path d="M0 0 L100 100" stroke="#C9A84C" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="2" fill="#C9A84C" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#geo-pattern)" />
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 w-full max-w-md"
        >
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            {/* Logo */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-aoi-navy text-white font-bold text-lg mb-4">
                AOI
              </div>
              <h1 className="text-3xl font-bold text-aoi-navy mb-2">Discover Your AI Readiness</h1>
              <p className="text-aoi-secondary text-sm">
                Most professionals and business owners dramatically overestimate their AI readiness. This 12-question assessment
                reveals your true capability score — and what it's costing you right now.
              </p>
            </div>

            <form onSubmit={handleEmailGateSubmit} className="space-y-4 mb-6">
              {error && <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm">{error}</div>}

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={emailData.firstName}
                  onChange={handleEmailGateChange}
                  autoComplete="given-name"
                  className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-aoi-gold text-sm"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={emailData.lastName}
                  onChange={handleEmailGateChange}
                  autoComplete="family-name"
                  className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-aoi-gold text-sm"
                  required
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={emailData.email}
                onChange={handleEmailGateChange}
                autoComplete="email"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-aoi-gold text-sm"
                required
              />

              <input
              type="tel"
              name="phone"
              placeholder="(555) 555-5555"
              value={emailData.phone}
              onChange={handleEmailGateChange}
              autoComplete="tel"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-aoi-gold text-sm"
              required
            />

            <input
                name="jobTitle"
                placeholder="Job Title"
                value={emailData.jobTitle}
                onChange={handleEmailGateChange}
                autoComplete="organization-title"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-aoi-gold text-sm"
                required
              />

            <input
                name="company"
                placeholder="Company (optional)"
                value={emailData.company}
                onChange={handleEmailGateChange}
                autoComplete="organization"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-aoi-gold text-sm"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-aoi-gold text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Starting...
                  </>
                ) : (
                  <>
                    Reveal My AI Score <ChevronRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            <div className="text-center text-xs text-gray-500">
              Free assessment. Instant results. No spam — ever.
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  // QUIZ
  if (stage === 'quiz' && question) {
    const progress = ((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100

    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-8">
        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full max-w-2xl mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm font-semibold text-aoi-navy">
              Question {currentQuestion + 1} of {QUIZ_QUESTIONS.length}
            </div>
            <div className="text-sm text-aoi-secondary">{Math.round(progress)}%</div>
          </div>
          <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
              className="h-full bg-aoi-gold rounded-full"
            />
          </div>
        </motion.div>

        {/* Question content */}
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-2xl"
        >
          <h2 className="text-3xl font-bold text-aoi-navy mb-8 leading-tight">{question.text}</h2>

          {/* Answer options */}
          <div className="space-y-3 mb-8">
            {question.options.map((option, index) => (
              <motion.button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={selectedIndex !== -1}
                whileHover={selectedIndex === -1 ? { scale: 1.02 } : {}}
                className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 flex items-start gap-3 ${
                  selectedIndex === index
                    ? 'border-aoi-gold bg-aoi-gold/10 text-aoi-navy'
                    : selectedIndex === -1
                      ? 'border-gray-200 hover:border-aoi-gold hover:bg-gray-50 text-aoi-dark'
                      : 'border-gray-200 text-gray-400'
                }`}
              >
                <div
                  className={`flex-shrink-0 w-6 h-6 rounded-full border-2 mt-0.5 flex items-center justify-center ${
                    selectedIndex === index
                      ? 'border-aoi-gold bg-aoi-gold text-white'
                      : 'border-gray-300'
                  }`}
                >
                  {selectedIndex === index && <span className="text-sm font-bold">✓</span>}
                </div>
                <span className="flex-1">{option}</span>
              </motion.button>
            ))}
          </div>

          {/* Micro-insight */}
          {showMicroInsight && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="p-4 bg-aoi-navy/5 border border-aoi-gold/30 rounded-xl"
            >
              <p className="text-sm text-aoi-secondary italic">{question.microInsight}</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    )
  }

  // LOADING
  if (stage === 'loading') {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="inline-block mb-6"
          >
            <div className="w-16 h-16 border-4 border-aoi-gold/30 border-t-aoi-gold rounded-full" />
          </motion.div>
          <h2 className="text-2xl font-bold text-aoi-navy mb-2">Building Your Profile</h2>
          <p className="text-aoi-secondary">Analyzing your responses...</p>

          {/* Animated progress */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 3, ease: 'easeInOut' }}
            className="mt-6 h-1 bg-aoi-gold rounded-full max-w-xs mx-auto"
          />
        </motion.div>
      </div>
    )
  }

  // ERROR
  if (stage === 'error') {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h2>
          <p className="text-aoi-secondary mb-6">{error}</p>
          <button
            onClick={() => {
              setStage('email_gate')
              setError('')
            }}
            className="px-6 py-2 bg-aoi-gold text-white font-semibold rounded-lg hover:bg-opacity-90"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }
}
