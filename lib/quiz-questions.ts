import { QuizQuestion } from "@/types"

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    text: "Right now, how would you describe your relationship with AI in your work?",
    options: [
      "I know I should be using it but haven't started",
      "I've experimented but it's not part of my routine",
      "I use AI tools regularly for specific tasks",
      "AI is embedded in how I work and run my business",
    ],
    points: [0, 2, 4, 5],
    dimension: "AI Awareness",
    microInsight:
      "82% of business owners fall into A or B — and their competitors are pulling ahead.",
  },
  {
    id: 2,
    text: "A competitor announces they've cut operational costs by 35% using AI automation. What's your honest reaction?",
    options: [
      "I wouldn't know where to begin to match that",
      "I'd be worried but have no clear response strategy",
      "I have some ideas but no structured plan to act",
      "I'd know exactly which AI systems to deploy immediately",
    ],
    points: [0, 2, 3, 5],
    dimension: "Business Application",
    microInsight: "This scenario is already happening in every industry. Strategic response time is shrinking.",
  },
  {
    id: 3,
    text: "When you use AI and the output isn't what you needed, what typically happens?",
    options: [
      "I accept it or give up — I'm not sure how to improve it",
      "I try rephrasing but it's mostly trial and error",
      "I have some techniques that usually improve results",
      "I have a systematic framework that reliably gets high-quality outputs",
    ],
    points: [0, 2, 3, 5],
    dimension: "Prompt Proficiency",
    microInsight: "Prompt mastery is the highest-leverage AI skill in business today.",
  },
  {
    id: 4,
    text: "How many of your core business processes have AI formally integrated into them?",
    options: [
      "None — AI isn't part of our business processes",
      "One or two informal uses, nothing documented",
      "Several processes use AI but it's inconsistent",
      "AI is systematically integrated with documented workflows my team follows",
    ],
    points: [0, 1, 3, 5],
    dimension: "Workflow Readiness",
    microInsight: "Documented AI workflows are worth 10x more than individual AI use.",
  },
  {
    id: 5,
    text: "Has an AI tool ever given you confidently wrong information that you almost used — or actually used?",
    options: [
      "Probably — I don't always verify AI outputs",
      "Yes, and I'm not sure how to prevent it reliably",
      "I have some checks but they're not systematic",
      "I have a verification process and catch errors consistently",
    ],
    points: [0, 2, 3, 5],
    dimension: "Prompt Proficiency",
    microInsight: "AI hallucinations cost businesses millions annually. Detection is a critical skill.",
  },
  {
    id: 6,
    text: "Estimate how many hours per week your business loses to tasks AI could handle or accelerate.",
    options: [
      "I've never calculated this",
      "Maybe a few hours — it's not top of mind",
      "Probably 5-10 hours but I'm not sure where to start",
      "I've calculated this and I'm actively reducing it",
    ],
    points: [0, 2, 3, 5],
    dimension: "Business Application",
    microInsight:
      "The average SMB loses 15-20 hours per week to AI-automatable tasks. At $100/hr that's $80,000+ annually.",
  },
  {
    id: 7,
    text: "Your team needs to produce 50 personalized client reports this month. How do you approach this with AI?",
    options: [
      "I wouldn't know how to use AI for this",
      "I'd have someone use AI manually for each one",
      "I could build a basic template-based system",
      "I'd design a systematic AI workflow that produces all 50 at consistent quality with minimal human time",
    ],
    points: [0, 2, 3, 5],
    dimension: "Workflow Readiness",
    microInsight: "Scalable AI workflows are the difference between freelancers and operators.",
  },
  {
    id: 8,
    text: "If your top 3 competitors are aggressively adopting AI right now — where does that leave your business in 18 months?",
    options: [
      "Honestly, I'd be significantly behind",
      "Somewhat behind but I'd catch up eventually",
      "About the same — everyone's figuring it out together",
      "Ahead — I'm already building the capability they'll be scrambling for",
    ],
    points: [0, 2, 3, 5],
    dimension: "Business Application",
    microInsight:
      "The AI adoption window is compressing. Early movers are building advantages that will take years to close.",
  },
  {
    id: 9,
    text: "If you hired someone tomorrow, could you train them on how your business uses AI?",
    options: [
      "No — there's nothing structured to train them on",
      "I could share tips but nothing organized",
      "I could walk them through what I personally do",
      "Yes — we have documented AI processes, prompts, and standards",
    ],
    points: [0, 2, 3, 5],
    dimension: "Workflow Readiness",
    microInsight: "If your AI knowledge lives only in your head, it doesn't scale.",
  },
  {
    id: 10,
    text: "Do you have a written AI strategy for your business or career for the next 12 months?",
    options: [
      "No — I haven't thought about AI at that level",
      "I have vague intentions but nothing written",
      "I have rough ideas I could articulate",
      "Yes — I have a clear AI roadmap I'm actively executing",
    ],
    points: [0, 2, 3, 5],
    dimension: "AI Awareness",
    microInsight:
      "Organizations with documented AI strategies outperform those without by 3.5x.",
  },
  {
    id: 11,
    text: "How ready is your business to deploy AI across multiple departments or functions simultaneously?",
    options: [
      "Not ready at all — we'd need significant help",
      "Ready for one area but not at scale",
      "Mostly ready but missing structure and leadership",
      "Ready to move fast — we have the foundation",
    ],
    points: [0, 2, 3, 5],
    dimension: "Business Application",
    microInsight:
      "Multi-function AI deployment is where the real competitive advantage compounds.",
  },
  {
    id: 12,
    text: "What does 'AI-native' mean to you — and how urgently do you need to get there?",
    options: [
      "I'm not sure what that means for my business",
      "I understand it conceptually but it feels distant",
      "It's a clear goal — I need a structured path to get there",
      "I'm actively building it and need expert support to accelerate",
    ],
    points: [0, 2, 4, 5],
    dimension: "AI Awareness",
    microInsight:
      "AI-native organizations don't just use AI — they're built around it. That's where you're headed.",
  },
]
