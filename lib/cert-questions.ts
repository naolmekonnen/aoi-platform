import { CertQuestion } from "@/types"

export const CERT_QUESTIONS: CertQuestion[] = [
  // Prompting (8 questions)
  {
    id: 1,
    scenario:
      "You're drafting a prompt to generate product descriptions. Which approach would be most effective?",
    options: [
      "Write a description",
      "Provide example descriptions, specify tone, and set output length constraints",
      "Ask the AI to 'write good descriptions'",
      "Request one description and expect consistency",
    ],
    correctAnswer: 1,
    category: "Prompting",
    explanation:
      "The PREP framework (Purpose, Role, Examples, Parameters) is most effective. Examples and clear parameters guide AI output quality.",
  },
  {
    id: 2,
    scenario:
      "Your AI is producing outputs that sound generic. What's the first thing to adjust in your prompt?",
    options: [
      "The tone and style examples you're providing",
      "Switch to a different AI tool",
      "Ask it to 'be more creative'",
      "Request longer outputs",
    ],
    correctAnswer: 0,
    category: "Prompting",
    explanation:
      "Specific examples of desired tone and style dramatically improve output quality. Generic requests produce generic results.",
  },
  {
    id: 3,
    scenario:
      "You've developed a prompt that works perfectly for your use case. What's the best way to preserve it?",
    options: [
      "Write it down in a notebook",
      "Store it in a shared document library with metadata about context and performance",
      "Memorize it",
      "Keep it in browser history",
    ],
    correctAnswer: 1,
    category: "Prompting",
    explanation:
      "Documenting prompts with context helps your team scale effective practices and maintain consistency.",
  },
  {
    id: 4,
    scenario: "A team member struggles with vague AI outputs. What's the root cause?",
    options: [
      "The AI model isn't smart enough",
      "The prompt lacks specificity, context, or clear output parameters",
      "They're using the wrong tool",
      "AI simply can't produce precise outputs",
    ],
    correctAnswer: 1,
    category: "Prompting",
    explanation:
      "Clarity in prompting directly correlates with output quality. Vague prompts produce vague results.",
  },
  {
    id: 5,
    scenario:
      "You're building a prompt for client communication. Which element is non-negotiable?",
    options: [
      "The length of the output",
      "The specific tone and style that matches your brand",
      "Using only positive language",
      "Mentioning the customer's budget",
    ],
    correctAnswer: 1,
    category: "Prompting",
    explanation:
      "Tone and style are critical for brand consistency. This should be explicitly defined in every customer-facing prompt.",
  },
  {
    id: 6,
    scenario: "Your prompt works in ChatGPT but not in Claude. What might be the issue?",
    options: [
      "Claude is inferior",
      "Different models have different strengths; adjust your prompt's structure and examples for Claude's approach",
      "Your prompt is broken",
      "Use ChatGPT exclusively",
    ],
    correctAnswer: 1,
    category: "Prompting",
    explanation:
      "Different AI models respond differently to prompting styles. Experienced operators adapt their approach per tool.",
  },
  {
    id: 7,
    scenario: "What's the difference between a zero-shot and few-shot prompt in practice?",
    options: [
      "Zero-shot is faster",
      "Few-shot provides examples (shots), leading to more consistent outputs",
      "They produce identical results",
      "Zero-shot is for experts only",
    ],
    correctAnswer: 1,
    category: "Prompting",
    explanation:
      "Few-shot prompting (with examples) dramatically improves accuracy over zero-shot (no examples).",
  },
  {
    id: 8,
    scenario: "You need AI to follow a complex workflow with multiple steps. What's most effective?",
    options: [
      "One long, detailed prompt",
      "Break it into sequential prompts with outputs from each feeding into the next",
      "Hope the AI figures it out",
      "Hire someone instead",
    ],
    correctAnswer: 1,
    category: "Prompting",
    explanation:
      "Sequential prompting is more reliable than attempting entire workflows in a single prompt.",
  },

  // Use-Case Selection (7 questions)
  {
    id: 9,
    scenario: "Which of these tasks is AI BEST suited for?",
    options: [
      "Diagnosing medical conditions without expert review",
      "Generating first-draft content for human review and refinement",
      "Making final legal decisions without human oversight",
      "Creating financial investment advice as final recommendation",
    ],
    correctAnswer: 1,
    category: "Use-Case Selection",
    explanation:
      "AI excels at generating, drafting, and ideating—not at making final, irreversible decisions, especially in high-stakes domains.",
  },
  {
    id: 10,
    scenario: "Your team spends 3 hours weekly on data entry. Is AI a good fit?",
    options: [
      "No, AI can't do data entry",
      "Yes, strongly—but verify accuracy and implement QA checkpoints",
      "Only if the data is perfectly structured",
      "Maybe, but it's too risky",
    ],
    correctAnswer: 1,
    category: "Use-Case Selection",
    explanation:
      "Repetitive, rule-based tasks are ideal AI candidates. Data entry + verification is a classic AI ROI case.",
  },
  {
    id: 11,
    scenario:
      "A client asks: 'Can you use AI to replace our customer service team?' What's the honest answer?",
    options: [
      "Yes, immediately",
      "AI can handle high-volume routine queries but should work alongside humans for complex issues",
      "No, AI will never replace customer service",
      "Only if the team agrees",
    ],
    correctAnswer: 1,
    category: "Use-Case Selection",
    explanation:
      "AI augments human teams best. Hybrid models (AI handling volume, humans handling nuance) deliver superior outcomes.",
  },
  {
    id: 12,
    scenario: "Your business needs rapid insight into market trends. Is AI appropriate?",
    options: [
      "No, you need human analysts only",
      "Yes, AI can synthesize data; pair with human interpretation",
      "Only on Tuesdays",
      "AI can't understand trends",
    ],
    correctAnswer: 1,
    category: "Use-Case Selection",
    explanation:
      "Synthesis and analysis at scale are AI strengths. Human judgment then validates and contextualizes.",
  },
  {
    id: 13,
    scenario: "You want AI to write persuasive marketing copy. What's the realistic expectation?",
    options: [
      "It will be publication-ready immediately",
      "It's a strong first draft that your best copywriter refines",
      "It won't work for marketing",
      "You'll use it 100% as-is",
    ],
    correctAnswer: 1,
    category: "Use-Case Selection",
    explanation:
      "AI generates strong drafts. Human creativity and brand voice remain essential for exceptional copy.",
  },
  {
    id: 14,
    scenario: "Which is NOT a good use case for AI?",
    options: [
      "Brainstorming campaign ideas",
      "Making subjective hiring decisions without human involvement",
      "Summarizing long documents",
      "Generating email templates",
    ],
    correctAnswer: 1,
    category: "Use-Case Selection",
    explanation:
      "Hiring decisions require human judgment for fairness and cultural fit. AI should assist, never decide alone.",
  },
  {
    id: 15,
    scenario:
      "Your business has 50 similar customer inquiries weekly. What's the AI opportunity?",
    options: [
      "No opportunity; respond manually",
      "AI can draft responses, your team customizes; huge time savings",
      "Use AI but expect low quality",
      "Too risky to automate",
    ],
    correctAnswer: 1,
    category: "Use-Case Selection",
    explanation:
      "High-volume, similar tasks are the ROI sweet spot: AI handles volume and consistency, humans add personality.",
  },

  // Output Evaluation (5 questions)
  {
    id: 16,
    scenario:
      "You receive AI-generated market analysis. Before using it, what must you verify?",
    options: [
      "That it sounds confident",
      "Fact-check critical claims, compare data sources, verify dates and numbers",
      "Nothing; trust AI implicitly",
      "Whether it's long enough",
    ],
    correctAnswer: 1,
    category: "Output Evaluation",
    explanation:
      "AI hallucinates or uses outdated data. Verification is non-negotiable, especially for decision-making content.",
  },
  {
    id: 17,
    scenario: "Your AI-generated report contains outdated statistics. What went wrong?",
    options: [
      "AI should never be used for reports",
      "You likely didn't specify recency requirements or the model's knowledge cutoff limited it",
      "The AI is broken",
      "Reports always have this problem",
    ],
    correctAnswer: 1,
    category: "Output Evaluation",
    explanation:
      "Understanding model knowledge cutoffs and specifying date ranges prevents outdated information.",
  },
  {
    id: 18,
    scenario:
      "An AI generated three campaign concepts. How should you evaluate them professionally?",
    options: [
      "Pick the first one",
      "Score by criteria: originality, brand alignment, target resonance, feasibility",
      "Use all three",
      "Assume they're equally good",
    ],
    correctAnswer: 1,
    category: "Output Evaluation",
    explanation:
      "Structure evaluation with criteria. This trains the model and improves workflow refinement.",
  },
  {
    id: 19,
    scenario:
      "You're reviewing AI-generated legal language. What's the correct approach?",
    options: [
      "Use it directly; AI handles legal matters",
      "Have a qualified attorney review before use",
      "Assume it's mostly correct",
      "Skip review to save time",
    ],
    correctAnswer: 1,
    category: "Output Evaluation",
    explanation:
      "High-risk content (legal, medical, financial) always requires qualified human review.",
  },
  {
    id: 20,
    scenario: "Quality checking AI outputs for consistency takes time. Is it necessary?",
    options: [
      "No, trust the AI",
      "Yes, absolutely—QA protects your reputation and prevents errors from reaching customers",
      "Only for important work",
      "Depends on your mood",
    ],
    correctAnswer: 1,
    category: "Output Evaluation",
    explanation:
      "QA prevents reputational damage and ensures AI aids rather than harms your business.",
  },

  // Workflow Design (5 questions)
  {
    id: 21,
    scenario:
      "You're designing an AI-powered workflow for your team. What's the first step?",
    options: [
      "Jump straight to automation",
      "Map the current process, identify bottlenecks, then determine which steps AI can improve",
      "Automate randomly",
      "Hire an AI specialist",
    ],
    correctAnswer: 1,
    category: "Workflow Design",
    explanation:
      "Process mapping reveals where AI creates the most value. Thoughtful design > random automation.",
  },
  {
    id: 22,
    scenario: "Your AI workflow produces 85% accuracy. Is it deployment-ready?",
    options: [
      "Yes, proceed",
      "It depends: 85% might be great for drafting, insufficient for final decisions",
      "Never use anything below 99%",
      "Accuracy doesn't matter",
    ],
    correctAnswer: 1,
    category: "Workflow Design",
    explanation:
      "Accuracy standards must match use case. Drafting-only workflows tolerate lower accuracy than decision workflows.",
  },
  {
    id: 23,
    scenario: "Your team resists using an AI tool. What's likely the issue?",
    options: [
      "They're technologically incompetent",
      "You may have skipped change management; train them on value, ease of use, and outcomes",
      "It's an impossible problem",
      "Never involve the team",
    ],
    correctAnswer: 1,
    category: "Workflow Design",
    explanation:
      "Successful AI adoption requires clear communication about time savings, new responsibilities, and skill development.",
  },
  {
    id: 24,
    scenario:
      "You've automated 10 small tasks. What's the next strategic move?",
    options: [
      "Stop automating",
      "Analyze which automations saved the most time, then build larger workflows combining those wins",
      "Randomize further automations",
      "Keep the tasks manual",
    ],
    correctAnswer: 1,
    category: "Workflow Design",
    explanation:
      "Compound wins: start small, measure impact, then scale the highest-ROI processes.",
  },
  {
    id: 25,
    scenario:
      "A workflow fails when handling edge cases. What's your QA strategy?",
    options: [
      "Ignore edge cases",
      "Document them, retrain the prompt/model on examples, add human checkpoints",
      "Delete the workflow",
      "Hope they don't occur",
    ],
    correctAnswer: 1,
    category: "Workflow Design",
    explanation:
      "Edge cases require dedicated testing and human safeguards. Robust workflows anticipate failure modes.",
  },

  // AI Limitations & Ethics (5 questions)
  {
    id: 26,
    scenario: "AI is sometimes confidently wrong. What's the technical term?",
    options: [
      "Stupidity",
      "Hallucination—generating plausible-sounding but false information",
      "A rare glitch",
      "Should never happen",
    ],
    correctAnswer: 1,
    category: "AI Limitations & Ethics",
    explanation:
      "Hallucination is an inherent limitation of large language models. Verification is always necessary.",
  },
  {
    id: 27,
    scenario:
      "You're using AI for hiring recommendations. What's the critical ethical concern?",
    options: [
      "There isn't one",
      "AI can perpetuate bias from training data; humans must oversee and challenge recommendations",
      "Hiring is neutral",
      "AI is always objective",
    ],
    correctAnswer: 1,
    category: "AI Limitations & Ethics",
    explanation:
      "AI bias is real and significant. Ethical use requires diverse oversight and regular fairness audits.",
  },
  {
    id: 28,
    scenario: "An AI model was trained on publicly available data. Is all use ethical?",
    options: [
      "Yes, it's public",
      "No, consider consent, copyright, privacy, and how the system will affect vulnerable groups",
      "Ethics don't apply to AI",
      "Anything goes",
    ],
    correctAnswer: 1,
    category: "AI Limitations & Ethics",
    explanation:
      "Ethical AI use goes beyond legality; consider stakeholder impact and potential harms.",
  },
  {
    id: 29,
    scenario: "You must explain an AI decision to your customer. The model can't explain it. What do you do?",
    options: [
      "Keep it a black box; they'll accept it",
      "Be transparent about AI limitations, provide the supporting data used, and offer human review",
      "Make up an explanation",
      "Blame the AI",
    ],
    correctAnswer: 1,
    category: "AI Limitations & Ethics",
    explanation:
      "Transparency builds trust. Acknowledge AI's role and limitations; human judgment should always be present.",
  },
  {
    id: 30,
    scenario:
      "Your company deploys an AI system that negatively affects a customer segment. What's your responsibility?",
    options: [
      "Nothing; it's just AI",
      "Investigate the impact, fix the issue, communicate with affected users, and adjust future systems",
      "Ignore it",
      "Blame the tool vendor",
    ],
    correctAnswer: 1,
    category: "AI Limitations & Ethics",
    explanation:
      "Organizations are accountable for AI system outcomes. Responsibility doesn't disappear because automation is involved.",
  },
]

// Helper to get correct answers
export function getCertCorrectAnswers(): number[] {
  return CERT_QUESTIONS.map((q) => q.correctAnswer)
}
