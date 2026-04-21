'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Download, Share2, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import { CERTIFICATION_QUESTIONS } from '@/lib/certification-questions'
import { jsPDF } from 'jspdf'

type ExamStage = 'instructions' | 'exam' | 'review' | 'results'

interface ExamState {
  currentQuestion: number
  answers: (number | null)[]
  stage: ExamStage
  score: number
  passed: boolean
  certificateId: string
}

export default function CertificationExam() {
  const [examState, setExamState] = useState<ExamState>({
    currentQuestion: 0,
    answers: new Array(CERTIFICATION_QUESTIONS.length).fill(null),
    stage: 'instructions',
    score: 0,
    passed: false,
    certificateId: '',
  })

  const handleStartExam = () => {
    setExamState((prev) => ({
      ...prev,
      stage: 'exam',
    }))
  }

  const handleAnswerSelected = (optionIndex: number) => {
    const newAnswers = [...examState.answers]
    newAnswers[examState.currentQuestion] = optionIndex
    setExamState((prev) => ({
      ...prev,
      answers: newAnswers,
    }))
  }

  const handleNextQuestion = () => {
    if (examState.currentQuestion < CERTIFICATION_QUESTIONS.length - 1) {
      setExamState((prev) => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1,
      }))
    }
  }

  const handlePreviousQuestion = () => {
    if (examState.currentQuestion > 0) {
      setExamState((prev) => ({
        ...prev,
        currentQuestion: prev.currentQuestion - 1,
      }))
    }
  }

  const handleReviewAnswers = () => {
    setExamState((prev) => ({
      ...prev,
      stage: 'review',
    }))
  }

  const handleSubmitExam = async () => {
    // Calculate score
    let correctCount = 0
    CERTIFICATION_QUESTIONS.forEach((question, index) => {
      if (examState.answers[index] === question.correctAnswer) {
        correctCount++
      }
    })

    const score = Math.round((correctCount / CERTIFICATION_QUESTIONS.length) * 100)
    const passed = score >= 70
    const certId = `AOI-${new Date().getFullYear()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`

    try {
      // Save to Supabase
      const response = await fetch('/api/certification/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          score,
          passed,
          answers: examState.answers,
          certificateId: certId,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to save certification result')
      }

      setExamState((prev) => ({
        ...prev,
        stage: 'results',
        score,
        passed,
        certificateId: certId,
      }))
    } catch (error) {
      console.error('Error submitting exam:', error)
      // Still show results even if save fails
      setExamState((prev) => ({
        ...prev,
        stage: 'results',
        score,
        passed,
        certificateId: certId,
      }))
    }
  }

  const generateCertificatePDF = () => {
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a4',
    })

    // Navy background
    pdf.setFillColor(10, 35, 66)
    pdf.rect(0, 0, 297, 210, 'F')

    // Gold border
    pdf.setDrawColor(201, 168, 76)
    pdf.setLineWidth(3)
    pdf.rect(10, 10, 277, 190)

    // White inner border
    pdf.setDrawColor(255, 255, 255)
    pdf.setLineWidth(1)
    pdf.rect(15, 15, 267, 180)

    // Title
    pdf.setTextColor(201, 168, 76)
    pdf.setFontSize(28)
    pdf.setFont('Helvetica', 'bold')
    pdf.text('CERTIFICATE OF ACHIEVEMENT', 148.5, 50, { align: 'center' })

    // Text
    pdf.setTextColor(255, 255, 255)
    pdf.setFontSize(14)
    pdf.setFont('Helvetica', 'normal')
    pdf.text('This certifies that', 148.5, 75, { align: 'center' })

    pdf.setFontSize(24)
    pdf.setFont('Helvetica', 'bold')
    pdf.text('[Recipient Name]', 148.5, 95, { align: 'center' })

    pdf.setFontSize(14)
    pdf.setFont('Helvetica', 'normal')
    pdf.text('Is a Certified AI Operator', 148.5, 115, { align: 'center' })

    pdf.setFontSize(11)
    pdf.text('Having demonstrated professional proficiency in:', 148.5, 130, { align: 'center' })

    pdf.setFontSize(10)
    pdf.text('Prompt Engineering • Business AI Application • Workflow Design • Output Evaluation • AI Ethics', 148.5, 142, { align: 'center' })

    //Date and ID
    pdf.setFontSize(10)
    const today = new Date().toLocaleDateString()
    pdf.text(`Issued: ${today}`, 50, 170)
    pdf.text(`Certificate ID: ${examState.certificateId}`, 50, 180)
    pdf.text('Issued by AI Operator Institute (AOI)', 230, 170, { align: 'right' })
    pdf.text('Verify at aoi.com/verify', 230, 180, { align: 'right' })

    pdf.save(`AOI-Certificate-${examState.certificateId}.pdf`)
  }

  // INSTRUCTIONS SCREEN
  if (examState.stage === 'instructions') {
    return (
      <div className="min-h-screen bg-aoi-navy text-white flex items-center justify-center px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
            <h1 className="text-4xl font-bold mb-6">AI Operator Certification Exam</h1>
            <div className="space-y-6 text-gray-200 mb-8">
              <div>
                <h3 className="text-aoi-gold font-semibold mb-2">Exam Details</h3>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Total Questions:</strong> 30 scenario-based questions</li>
                  <li>• <strong>Format:</strong> Multiple choice (4 options per question)</li>
                  <li>• <strong>Time Limit:</strong> No time limit (work at your own pace)</li>
                  <li>• <strong>Pass Requirement:</strong> 70% or higher (21/30 correct)</li>
                  <li>• <strong>Duration:</strong> Typically 45-90 minutes</li>
                </ul>
              </div>

              <div>
                <h3 className="text-aoi-gold font-semibold mb-2">What You'll Be Tested On</h3>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Prompt Engineering (8 questions):</strong> Crafting effective prompts, frameworks, consistency</li>
                  <li>• <strong>Use-Case Selection (7 questions):</strong> ROI, feasibility, professional risk assessment</li>
                  <li>• <strong>Output Evaluation (5 questions):</strong> Quality checks, bias detection, accuracy verification</li>
                  <li>• <strong>Workflow Design (5 questions):</strong> Building scalable AI systems and processes</li>
                  <li>• <strong>AI Limitations & Ethics (5 questions):</strong> Professional responsibility, bias, data safety</li>
                </ul>
              </div>

              <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4">
                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-red-400 mb-1">Important Rules</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Once you select an answer, you cannot change it</li>
                      <li>• You can review all answers before final submission</li>
                      <li>• If you don't pass (below 70%), you can retake after 24 hours</li>
                      <li>• Take this exam in a quiet environment with no external assistance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handleStartExam}
              className="w-full py-3 bg-aoi-gold text-aoi-navy font-semibold rounded-lg hover:bg-opacity-90 transition-all"
            >
              Start Exam →
            </button>
          </div>
        </motion.div>
      </div>
    )
  }

  // EXAM SCREEN - intentionally simplified for brevity
  if (examState.stage === 'exam') {
    const question = CERTIFICATION_QUESTIONS[examState.currentQuestion]
    const selectedAnswer = examState.answers[examState.currentQuestion]
    const progress = ((examState.currentQuestion + 1) / CERTIFICATION_QUESTIONS.length) * 100

    return (
      <div className="min-h-screen bg-white flex flex-col px-4 py-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto w-full mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-sm font-semibold text-aoi-navy">
                Question {examState.currentQuestion + 1} of {CERTIFICATION_QUESTIONS.length}
              </div>
              <div className="text-xs text-aoi-secondary mt-1">{Math.round(progress)}% Complete</div>
            </div>
            <div className="text-sm text-aoi-navy font-semibold">
              {CERTIFICATION_QUESTIONS[examState.currentQuestion].category}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
              className="h-full bg-aoi-gold"
            />
          </div>
        </div>

        {/* Question Content */}
        <div className="max-w-4xl mx-auto w-full flex-1">
          <motion.div
            key={examState.currentQuestion}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-aoi-navy mb-8 leading-tight">{question.text}</h2>

            {/* Answer Options */}
            <div className="space-y-3 mb-12">
              {question.options.map((option, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleAnswerSelected(index)}
                  disabled={selectedAnswer !== null && selectedAnswer !== index}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                    selectedAnswer === index
                      ? 'border-aoi-gold bg-aoi-gold/10'
                      : selectedAnswer !== null
                      ? 'border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed'
                      : 'border-gray-200 bg-white hover:border-aoi-gold hover:bg-aoi-gold/5'
                  }`}
                  whileHover={selectedAnswer === null ? { scale: 1.01 } : {}}
                  whileTap={selectedAnswer === null ? { scale: 0.99 } : {}}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1 transition-all ${
                        selectedAnswer === index
                          ? 'border-aoi-gold bg-aoi-gold'
                          : 'border-gray-300'
                      }`}
                    >
                      {selectedAnswer === index && <div className="w-2 h-2 bg-white rounded-full" />}
                    </div>
                    <span className="text-aoi-navy font-medium">{option}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Navigation Footer */}
        <div className="max-w-4xl mx-auto w-full border-t border-gray-200 pt-8 flex items-center justify-between">
          <button
            onClick={handlePreviousQuestion}
            disabled={examState.currentQuestion === 0}
            className="flex items-center gap-2 px-6 py-2 text-aoi-navy font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 rounded-lg transition-all"
          >
            <ChevronLeft className="w-4 h-4" /> Previous
          </button>

          <div className="text-sm text-aoi-secondary">
            {selectedAnswer !== null ? 'Answer selected ✓' : 'Select an answer to continue'}
          </div>

          {examState.currentQuestion === CERTIFICATION_QUESTIONS.length - 1 ? (
            <button
              onClick={handleReviewAnswers}
              disabled={selectedAnswer === null}
              className="flex items-center gap-2 px-6 py-2 bg-aoi-gold text-white font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-opacity-90 transition-all"
            >
              Review & Submit <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleNextQuestion}
              disabled={selectedAnswer === null}
              className="flex items-center gap-2 px-6 py-2 bg-aoi-gold text-white font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-opacity-90 transition-all"
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    )
  }

  // REVIEW SCREEN
  if (examState.stage === 'review') {
    const unansweredCount = examState.answers.filter((a) => a === null).length

    return (
      <div className="min-h-screen bg-white px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl font-bold text-aoi-navy mb-6">Review Your Answers</h1>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
              <p className="text-blue-900 font-medium">
                {unansweredCount === 0
                  ? '✓ All questions answered. Ready to submit.'
                  : `⚠ ${unansweredCount} question(s) remaining unanswered.`}
              </p>
            </div>

            {/* Answer Summary */}
            <div className="space-y-4 mb-8">
              {CERTIFICATION_QUESTIONS.map((question, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border ${
                    examState.answers[index] !== null
                      ? 'border-green-200 bg-green-50'
                      : 'border-red-200 bg-red-50'
                  }`}
                >
                  <div className="font-semibold text-sm mb-2">
                    Q{index + 1}: {question.text.substring(0, 60)}...
                  </div>
                  <div className="text-sm">
                    {examState.answers[index] !== null ? (
                      <span className="text-green-700">
                        ✓ {question.options[examState.answers[index]!]}
                      </span>
                    ) : (
                      <span className="text-red-700">✗ Unanswered</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => setExamState((prev) => ({ ...prev, stage: 'exam' }))}
                className="flex-1 px-6 py-3 border-2 border-aoi-navy text-aoi-navy font-semibold rounded-lg hover:bg-gray-50 transition-all"
              >
                Back to Exam
              </button>
              <button
                onClick={handleSubmitExam}
                disabled={examState.answers.some((a) => a === null)}
                className="flex-1 px-6 py-3 bg-aoi-gold text-white font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-opacity-90 transition-all"
              >
                Submit Exam
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  // RESULTS SCREEN
  if (examState.stage === 'results') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-aoi-navy to-aoi-navy/80 text-white px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <AnimatePresence>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
              {examState.passed ? (
                <>
                  {/* Success Confetti Badge */}
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="mb-8"
                  >
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-aoi-gold/20 border-2 border-aoi-gold mb-6">
                      <span className="text-5xl">✓</span>
                    </div>
                  </motion.div>

                  <h1 className="text-4xl font-bold mb-2">Congratulations!</h1>
                  <h2 className="text-2xl text-aoi-gold mb-8">You Are a Certified AI Operator</h2>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
                    <div className="mb-6">
                      <div className="text-6xl font-bold text-aoi-gold mb-2">{examState.score}%</div>
                      <p className="text-gray-200">You scored {examState.score}% ({Math.round((examState.score / 100) * 30)}/30 correct)</p>
                    </div>

                    <div className="text-left space-y-2 text-sm text-gray-300 mb-8 pb-8 border-b border-white/20">
                      <p>✓ Prompt Engineering & Strategy</p>
                      <p>✓ Business AI Application</p>
                      <p>✓ Workflow Design & Implementation</p>
                      <p>✓ Output Evaluation & Quality</p>
                      <p>✓ AI Limitations & Professional Ethics</p>
                    </div>

                    <div className="bg-aoi-gold/20 rounded-lg p-4 border border-aoi-gold/50">
                      <p className="text-xs text-aoi-gold uppercase tracking-widest font-semibold mb-2">Certificate ID</p>
                      <p className="font-mono text-lg text-white">{examState.certificateId}</p>
                      <p className="text-xs text-gray-300 mt-2">Verify at aoi.com/verify</p>
                    </div>
                  </div>

                  {/* Download Certificate Button */}
                  <button
                    onClick={generateCertificatePDF}
                    className="w-full py-3 bg-aoi-gold text-aoi-navy font-semibold rounded-lg hover:bg-opacity-90 transition-all mb-4 flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" /> Download Certificate
                  </button>

                  {/* Share Button */}
                  <button
                    onClick={() => {
                      const text = `Proud to have earned my AI Operator Certification from AI Operator Institute (AOI). Ready to lead AI transformation. #AIOperator #CertifiedAI #AOI ${window.location.origin}`;
                      const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.origin)}`;
                      window.open(url, '_blank');
                    }}
                    className="w-full py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                  >
                    <Share2 className="w-4 h-4" /> Share on LinkedIn
                  </button>

                  {/* Next CTA */}
                  <div className="mt-12 pt-8 border-t border-white/20">
                    <p className="text-gray-300 mb-4">Ready to implement AI in your business with expert support?</p>
                    <Link href="/advisory" className="inline-block px-8 py-3 bg-aoi-gold text-aoi-navy font-semibold rounded-lg hover:bg-aoi-gold/90 transition-all">
                      Request a Free Consultation →
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <h1 className="text-3xl font-bold mb-4">Keep Learning</h1>
                  <p className="text-gray-300 mb-8">
                    You scored {examState.score}%. You need 70% to pass. But don't worry — you can retake in 24 hours.
                  </p>

                  <button
                    onClick={() => window.location.href = '/course'}
                    className="w-full py-3 bg-aoi-gold text-aoi-navy font-semibold rounded-lg hover:bg-opacity-90 transition-all mb-4"
                  >
                    Return to Course
                  </button>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    )
  }
}
