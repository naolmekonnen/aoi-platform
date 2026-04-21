'use client'

import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { BarChart3, Download, Share2, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { QUIZ_QUESTIONS } from '@/lib/quiz-questions'

interface AssessmentResult {
  totalScore: number
  level: 'Not Ready' | 'Developing' | 'Ready'
  dimensionScores: Record<string, number>
  answers: number[]
}

export default function ResultsPage() {
  const params = useParams()
  const router = useRouter()
  const resultId = params.id as string

  const [result, setResult] = useState<AssessmentResult | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Try to load from sessionStorage first (from quiz submission)
    const stored = sessionStorage.getItem(`result-${resultId}`)
    if (stored) {
      try {
        setResult(JSON.parse(stored))
        setLoading(false)
        return
      } catch (e) {
        console.error('Failed to parse stored result')
      }
    }

    // Fetch from API
    fetch(`/api/results/${resultId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.error('API error:', data.error)
          // Fallback to mock data for demo
          const mockResult: AssessmentResult = {
            totalScore: 72,
            level: 'Ready',
            dimensionScores: {
              'AI Awareness': 85,
              'Business Application': 68,
              'Prompt Proficiency': 70,
              'Workflow Readiness': 64,
            },
            answers: new Array(12).fill(2),
          }
          setResult(mockResult)
        } else {
          setResult({
            totalScore: data.totalScore,
            level: data.level,
            dimensionScores: data.dimensionScores,
            answers: data.answers,
          })
        }
        setLoading(false)
      })
      .catch((error) => {
        console.error('Failed to fetch result:', error)
        // Fallback to mock data
        const mockResult: AssessmentResult = {
          totalScore: 72,
          level: 'Ready',
          dimensionScores: {
            'AI Awareness': 85,
            'Business Application': 68,
            'Prompt Proficiency': 70,
            'Workflow Readiness': 64,
          },
          answers: new Array(12).fill(2),
        }
        setResult(mockResult)
        setLoading(false)
      })
  }, [resultId])

  if (loading || !result) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-aoi-gold mx-auto mb-4" />
          <p className="text-aoi-secondary">Loading your results...</p>
        </div>
      </div>
    )
  }

  const getHeadline = () => {
    if (result.totalScore <= 40)
      return 'Your Business Has a Critical AI Capability Gap — And It\'s Compounding.'
    if (result.totalScore <= 70)
      return 'You\'re AI-Aware But Not Yet AI-Operational. The Gap Is Closeable — But the Window Is Narrowing.'
    return 'You Have Strong AI Foundations. Now It\'s Time To Formalize, Certify, and Lead.'
  }

  const getLevelColor = () => {
    if (result.level === 'Not Ready') return 'bg-red-100 text-red-800 border-red-300'
    if (result.level === 'Developing') return 'bg-amber-100 text-amber-800 border-amber-300'
    return 'bg-green-100 text-green-800 border-green-300'
  }

  const getLevelBadge = () => {
    if (result.level === 'Not Ready') return 'Level 1 — AI Unaware'
    if (result.level === 'Developing') return 'Level 2 — AI Developing'
    return 'Level 3 — AI Capable'
  }

  const getGaps = () => {
    const dimensions = Object.entries(result.dimensionScores)
      .sort(([, a], [, b]) => a - b)
      .slice(0, 3)
    return dimensions
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-aoi-navy to-white">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-aoi-navy text-white py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Your AI Readiness Results</h1>
          <p className="text-gray-200">Assessment ID: {resultId}</p>
        </div>
      </motion.div>

      {/* Score Display */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center mb-8">
            <div className="relative w-80 h-80">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#E5E7EB" strokeWidth="8" />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#C9A84C"
                  strokeWidth="8"
                  strokeDasharray={`${(result.totalScore / 100) * 282.7} 282.7`}
                  initial={{ strokeDasharray: '0 282.7' }}
                  animate={{ strokeDasharray: `${(result.totalScore / 100) * 282.7} 282.7` }}
                  transition={{ duration: 2, ease: 'easeOut' }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-6xl font-bold text-aoi-navy"
                >
                  {result.totalScore}
                </motion.div>
                <div className="text-lg text-aoi-secondary">/100</div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-aoi-navy mb-3">{getLevelBadge()}</h2>
            <div className={`inline-block px-4 py-2 rounded-full border-2 mb-6 ${getLevelColor()}`}>
              {result.level}
            </div>
            <p className="text-xl text-aoi-dark max-w-2xl mx-auto leading-relaxed">{getHeadline()}</p>
          </div>
        </motion.div>

        {/* Dimension Scores */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl p-8 mb-12 shadow-sm border border-gray-200"
        >
          <h3 className="text-2xl font-bold text-aoi-navy mb-8 text-center">Your Dimension Scores</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(result.dimensionScores).map(([dimension, score]) => (
              <div key={dimension}>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-aoi-navy">{dimension}</h4>
                  <span className="text-lg font-bold text-aoi-gold">{score}/100</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${score}%` }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-aoi-gold to-aoi-gold/80 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Gap Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-aoi-lightgray rounded-2xl p-8 mb-12"
        >
          <h3 className="text-2xl font-bold text-aoi-navy mb-6">Your Key Development Areas</h3>
          <div className="space-y-4">
            {getGaps().map(([dimension, score]) => (
              <div key={dimension} className="bg-white rounded-lg p-4 border-l-4 border-aoi-gold">
                <h4 className="font-semibold text-aoi-navy mb-2">{dimension}: {score}/100</h4>
                <p className="text-sm text-aoi-secondary">
                  {dimension === 'AI Awareness' &&
                    'Build deeper understanding of what AI can and cannot do, and develop strategic thinking about AI adoption.'}
                  {dimension === 'Business Application' &&
                    'Learn to identify high-value AI use cases, calculate ROI, and build business cases for AI investment.'}
                  {dimension === 'Prompt Proficiency' &&
                    'Master the frameworks and techniques that consistently produce high-quality AI outputs.'}
                  {dimension === 'Workflow Readiness' &&
                    'Design, document, and implement scalable AI workflows that create organizational value.'}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Benchmark Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="bg-gradient-to-r from-aoi-navy/5 to-aoi-gold/5 border border-aoi-navy/20 rounded-2xl p-8 mb-12"
        >
          <p className="text-sm text-aoi-dark leading-relaxed">
            <span className="font-semibold">Based on current AI adoption benchmarks</span> published by McKinsey
            Global Institute and Deloitte, organizations at your readiness level face material competitive risk within
            the next 12-18 months without structured capability development.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {result.totalScore <= 70 ? (
            <div className="bg-aoi-gold/10 border border-aoi-gold rounded-2xl p-8 text-center">
              <h4 className="text-2xl font-bold text-aoi-navy mb-3">Close the Gap</h4>
              <p className="text-aoi-secondary mb-6">
                A structured, self-paced program that closes your specific gaps and certifies your capability.
              </p>
              <div className="text-sm text-aoi-secondary mb-6">
                <div className="font-semibold">2-3 hours · Self-paced · Includes certification prep</div>
              </div>
              <Link href="/course" className="inline-block w-full px-6 py-3 bg-aoi-gold text-aoi-navy font-semibold rounded-lg hover:bg-opacity-90 transition-all mb-4">
                Enroll Now — $29 →
              </Link>
              <p className="text-xs text-aoi-secondary">30-day money-back guarantee</p>
            </div>
          ) : (
            <div className="bg-aoi-gold/10 border border-aoi-gold rounded-2xl p-8 text-center">
              <h4 className="text-2xl font-bold text-aoi-navy mb-3">You're Ready to Certify</h4>
              <p className="text-aoi-secondary mb-6">
                Formalize your capability with a professional credential recognized by employers and clients.
              </p>
              <div className="text-sm text-aoi-secondary mb-6">
                <div className="font-semibold">30 questions · Scenario-based · PDF certificate</div>
              </div>
              <Link href="/certification/exam" className="inline-block w-full px-6 py-3 bg-aoi-gold text-aoi-navy font-semibold rounded-lg hover:bg-opacity-90 transition-all mb-4">
                Get Certified — $49 →
              </Link>
            </div>
          )}

          <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
            <h4 className="text-2xl font-bold text-aoi-navy mb-3">Transform Your Business</h4>
            <p className="text-aoi-secondary mb-6">
              Get expert eyes on your results. We'll assess your business, identify AI opportunities, and build a
              roadmap.
            </p>
            <div className="text-sm text-aoi-secondary mb-6">
              <div className="font-semibold">30-minute consultation · Personalized roadmap · No obligation</div>
            </div>
            <Link href="/advisory" className="inline-block w-full px-6 py-3 border-2 border-aoi-navy text-aoi-navy font-semibold rounded-lg hover:bg-gray-50 transition-all">
              Request Free Consultation →
            </Link>
          </div>
        </motion.div>

        {/* Persuasive Copy Section Below CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="bg-gradient-to-r from-aoi-navy/5 to-aoi-gold/5 border border-aoi-navy/20 rounded-2xl p-8 mb-12"
        >
          {result.totalScore <= 70 ? (
            <div>
              <h3 className="text-2xl font-bold text-aoi-navy mb-6">Why This Course Is Worth 100x Its Cost</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="text-2xl flex-shrink-0">→</div>
                  <div>
                    <p className="font-semibold text-aoi-navy mb-1">
                      The average professional loses 10-15 hours per week to tasks AI could handle.
                    </p>
                    <p className="text-sm text-aoi-secondary">
                      At $75/hr that is $750-$1,125 per week. This course costs $29.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl flex-shrink-0">→</div>
                  <div>
                    <p className="font-semibold text-aoi-navy mb-1">
                      Professionals with verified AI skills are being promoted faster and paid more.
                    </p>
                    <p className="text-sm text-aoi-secondary">
                      This credential signals you are ahead of the curve.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl flex-shrink-0">→</div>
                  <div>
                    <p className="font-semibold text-aoi-navy mb-1">
                      Every week you wait is another week your competitors build capability you don't have.
                    </p>
                    <p className="text-sm text-aoi-secondary">
                      The window for early advantage is still open. It's narrowing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <h3 className="text-2xl font-bold text-aoi-navy mb-6">Why the Certification Matters</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="text-2xl flex-shrink-0">→</div>
                  <div>
                    <p className="font-semibold text-aoi-navy mb-1">
                      Strong AI knowledge without a credential is invisible.
                    </p>
                    <p className="text-sm text-aoi-secondary">
                      The certification makes your capability verifiable and shareable. It moves you from "knowledgeable" to "certified."
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl flex-shrink-0">→</div>
                  <div>
                    <p className="font-semibold text-aoi-navy mb-1">
                      Scenario-based exams are the gold standard for professional certifications.
                    </p>
                    <p className="text-sm text-aoi-secondary">
                      This tests real decision-making, not memorization. Employers know the difference.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl flex-shrink-0">→</div>
                  <div>
                    <p className="font-semibold text-aoi-navy mb-1">
                      One LinkedIn post with your certificate reaches hundreds of people in your network.
                    </p>
                    <p className="text-sm text-aoi-secondary">
                      That is marketing that compounds. It signals to employers and clients that you are ahead of the curve.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        <div className="text-center text-sm text-aoi-secondary">
          <p className="mb-4">Your personalized AI Readiness Report is available to download</p>
          <button className="inline-flex items-center gap-2 text-aoi-gold font-semibold hover:underline">
            <Download className="w-4 h-4" /> Download Report as PDF
          </button>
        </div>
      </div>
    </div>
  )
}

