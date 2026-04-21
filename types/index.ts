// User and Auth Types
export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  jobTitle: string
  company?: string
  createdAt: string
}

// Quiz and Results Types
export interface QuizAnswer {
  questionId: number
  selectedAnswer: number
}

export interface QuizResult {
  id: string
  userId: string
  score: number
  level: "Not Ready" | "Developing" | "Ready"
  awarenessScore: number
  businessScore: number
  promptScore: number
  workflowScore: number
  answersJson: QuizAnswer[]
  reportSent: boolean
  createdAt: string
}

// Course Types
export interface CourseModule {
  id: number
  title: string
  description: string
  duration: string
  lessons: string[]
}

export interface CourseProgress {
  id: string
  userId: string
  modulesCompleted: number[]
  checklistItems: Record<string, boolean>
  lastUpdated: string
}

// Purchase Types
export interface Purchase {
  id: string
  userId: string
  product: "course" | "cert"
  stripeSessionId: string
  stripePaymentIntent: string
  createdAt: string
}

// Certification Types
export interface CertificationAttempt {
  id: string
  userId: string
  score: number
  passed: boolean
  answers: number[]
  createdAt: string
}

// Advisory Request Types
export interface AdvisoryRequest {
  id: string
  firstName: string
  lastName: string
  email: string
  jobTitle: string
  company: string
  message: string
  createdAt: string
}

// Quiz Question Type
export interface QuizQuestion {
  id: number
  text: string
  options: string[]
  dimension: "AI Awareness" | "Business Application" | "Prompt Proficiency" | "Workflow Readiness"
  points: number[]
  microInsight: string
}

// Certification Question Type
export interface CertQuestion {
  id: number
  scenario: string
  options: string[]
  correctAnswer: number
  category: "Prompting" | "Use-Case Selection" | "Output Evaluation" | "Workflow Design" | "AI Limitations & Ethics"
  explanation: string
}
