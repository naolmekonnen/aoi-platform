import { QuizAnswer, QuizQuestion } from "@/types"

// Quiz scoring logic
export function calculateQuizScore(
  answers: QuizAnswer[],
  questions: QuizQuestion[]
) {
  const scoresByDimension: Record<string, number> = {
    "AI Awareness": 0,
    "Business Application": 0,
    "Prompt Proficiency": 0,
    "Workflow Readiness": 0,
  }

  const maxScoresByDimension: Record<string, number> = {
    "AI Awareness": 0,
    "Business Application": 0,
    "Prompt Proficiency": 0,
    "Workflow Readiness": 0,
  }

  // Calculate scores per dimension
  answers.forEach((answer) => {
    const question = questions.find((q) => q.id === answer.questionId)
    if (question) {
      const points = question.points[answer.selectedAnswer] || 0
      scoresByDimension[question.dimension] += points
      maxScoresByDimension[question.dimension] += Math.max(...question.points)
    }
  })

  // Calculate dimension percentages
  const dimensionScores = {
    awarenessScore: Math.round(
      (scoresByDimension["AI Awareness"] / maxScoresByDimension["AI Awareness"]) * 100
    ),
    businessScore: Math.round(
      (scoresByDimension["Business Application"] / maxScoresByDimension["Business Application"]) * 100
    ),
    promptScore: Math.round(
      (scoresByDimension["Prompt Proficiency"] / maxScoresByDimension["Prompt Proficiency"]) * 100
    ),
    workflowScore: Math.round(
      (scoresByDimension["Workflow Readiness"] / maxScoresByDimension["Workflow Readiness"]) * 100
    ),
  }

  // Calculate overall score (equal weight to all dimensions)
  const overallScore = Math.round(
    (dimensionScores.awarenessScore +
      dimensionScores.businessScore +
      dimensionScores.promptScore +
      dimensionScores.workflowScore) /
      4
  )

  // Determine level
  let level: "Not Ready" | "Developing" | "Ready"
  if (overallScore >= 71) {
    level = "Ready"
  } else if (overallScore >= 41) {
    level = "Developing"
  } else {
    level = "Not Ready"
  }

  return {
    score: overallScore,
    level,
    ...dimensionScores,
  }
}

// Get gap analysis based on scores
export function getGapAnalysis(
  awarenessScore: number,
  businessScore: number,
  promptScore: number,
  workflowScore: number
): string[] {
  const scores = [
    { dimension: "AI Awareness", score: awarenessScore },
    { dimension: "Business Application", score: businessScore },
    { dimension: "Prompt Proficiency", score: promptScore },
    { dimension: "Workflow Readiness", score: workflowScore },
  ]

  // Sort by lowest scores
  const sorted = scores.sort((a, b) => a.score - b.score)

  const gaps: string[] = []

  if (sorted[0].score < 50) {
    gaps.push(
      `Your lowest area is ${sorted[0].dimension} (${sorted[0].score}%). This is critical — focus here first to unlock AI value in your role.`
    )
  }

  if (sorted[1].score < 50) {
    gaps.push(
      `${sorted[1].dimension} is also below 50% (${sorted[1].score}%). Paired with ${sorted[0].dimension}, this limits your AI leverage.`
    )
  }

  gaps.push(
    "The gap between your strongest area and weakest area shows where to prioritize learning."
  )

  return gaps
}

// Format date
export function formatDate(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

// Generate report ID
export function generateReportId(): string {
  return `AOI-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

// Certification scoring
export function calculateCertScore(
  answers: number[],
  correctAnswers: number[]
): { score: number; passed: boolean; percentage: number } {
  let correct = 0
  answers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      correct++
    }
  })

  const percentage = Math.round((correct / correctAnswers.length) * 100)
  const passed = percentage >= 70

  return {
    score: correct,
    passed,
    percentage,
  }
}

// Get stripe product prices (in cents)
export const PRICES = {
  COURSE: 2900, // $29
  CERTIFICATION: 4900, // $49
  ADVISORY: 0, // Custom pricing
}
