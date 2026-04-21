export interface CertExamQuestion {
  id: number
  scenario: string
  options: string[]
  correctAnswer: number
  explanation: string
  category:
    | 'Prompting Strategy'
    | 'Use-Case Selection'
    | 'Output Evaluation'
    | 'Workflow Design'
    | 'AI Limitations and Ethics'
}

export const CERT_EXAM_QUESTIONS: CertExamQuestion[] = [
  // PROMPTING STRATEGY (8 questions)
  {
    id: 1,
    scenario:
      'You need AI to write a strategic recommendation memo for your board of directors. Your first action should be:',
    options: [
      'Open your AI tool and describe what happened',
      'Define the memo\'s purpose, the AI\'s role, provide a format example, and specify tone, audience, and length constraints before prompting',
      'Ask AI to write a board memo about your topic',
      'Search for a board memo template',
    ],
    correctAnswer: 1,
    explanation:
      'The PREP framework (Purpose, Role, Examples, Parameters) ensures AI outputs are aligned with your exact requirements. Defining all elements upfront produces higher quality results than generic requests.',
    category: 'Prompting Strategy',
  },
  {
    id: 2,
    scenario:
      'Your AI-generated client proposal sounds generic and doesn\'t reflect your company\'s voice. The most effective fix is:',
    options: [
      'Try a different AI tool',
      'Ask it to "be more creative"',
      'Provide 2-3 examples of your past proposals and specify your brand voice characteristics before regenerating',
      'Edit the output manually each time',
    ],
    correctAnswer: 2,
    explanation:
      'Few-shot prompting (providing examples) dramatically improves consistency and brand alignment. This is more effective than changing tools or relying on vague instructions.',
    category: 'Prompting Strategy',
  },
  {
    id: 3,
    scenario: 'Which prompt will produce the most useful competitive analysis?',
    options: [
      'Analyze my competitors',
      'Do a competitive analysis for a SaaS company',
      'Act as a senior strategy consultant. Analyze these 3 competitors [names] against our company [description] across: pricing, positioning, target market, key differentiators, and weaknesses. Format as a structured table with an executive summary. Audience: our CEO.',
      'Compare these companies and tell me who\'s winning',
    ],
    correctAnswer: 2,
    explanation:
      'The third option includes all elements of good prompting: clear role, specific competitors, defined criteria, output format, and audience context. This specificity produces actionable analysis.',
    category: 'Prompting Strategy',
  },
  {
    id: 4,
    scenario:
      'You are using AI to draft 50 personalized outreach emails. To maintain quality and consistency across all 50, you should:',
    options: [
      'Prompt AI separately for each email',
      'Create a master prompt template with variables for personalization, test it on 5 emails, refine, then scale',
      'Write one email and ask AI to create 49 variations',
      'Use AI for the first 10 and copy the format manually',
    ],
    correctAnswer: 1,
    explanation:
      'Template-based prompting with variables is the professional approach to scaling. It ensures consistency while allowing for personalization, and is far more efficient than manual replication.',
    category: 'Prompting Strategy',
  },
  {
    id: 5,
    scenario:
      'A junior employee says AI gives them "random results" every time. The root cause is most likely:',
    options: [
      'They are using the wrong AI tool',
      'The AI model has inconsistent quality',
      'Their prompts lack specificity, role definition, and example outputs — leading to variable interpretation',
      'They need to pay for a premium AI subscription',
    ],
    correctAnswer: 2,
    explanation:
      'Vague prompts lead to variable outputs because the AI has to guess your intent. Clear role definition, specific parameters, and examples dramatically improve consistency.',
    category: 'Prompting Strategy',
  },
  {
    id: 6,
    scenario:
      'You need AI to analyze 200 customer support tickets and identify the top 5 complaint themes. The best prompting approach is:',
    options: [
      'Paste all 200 tickets and ask "what are the themes?"',
      'Define the analysis framework first, specify the output format (ranked list with frequency and representative examples), then process in structured batches',
      'Ask AI to read the tickets and summarize them',
      'Have AI categorize each ticket individually',
    ],
    correctAnswer: 1,
    explanation:
      'Structured batch processing with a defined framework ensures accuracy and consistency. This approach breaks a large task into manageable parts with clear output specs.',
    category: 'Prompting Strategy',
  },
  {
    id: 7,
    scenario: 'Chain prompting is most valuable when:',
    options: [
      'Your task is simple and straightforward',
      'You want faster outputs',
      'A complex task benefits from breaking into sequential steps where each output becomes the input for the next prompt',
      'You are using multiple AI tools simultaneously',
    ],
    correctAnswer: 2,
    explanation:
      'Chain prompting allows you to break complex reasoning into sequential steps, with each step\'s output informing the next. This produces better results than trying to solve everything at once.',
    category: 'Prompting Strategy',
  },
  {
    id: 8,
    scenario:
      'You receive an important AI output but suspect it may contain errors. Your professional protocol should be:',
    options: [
      'Trust it — AI is generally reliable',
      'Skim it for obvious mistakes',
      'Systematically verify all specific facts, statistics, and claims against primary sources before using or distributing',
      'Ask a colleague if it sounds right',
    ],
    correctAnswer: 2,
    explanation:
      'Verification against primary sources is the professional standard. AI can hallucinate confidently, so systematic fact-checking is essential before any use.',
    category: 'Prompting Strategy',
  },

  // USE-CASE SELECTION (7 questions)
  {
    id: 9,
    scenario: 'Your law firm wants to use AI. The highest-value, lowest-risk starting point is:',
    options: [
      'Have AI draft final client contracts',
      'Use AI to research case precedents and draft first versions of internal memos for attorney review',
      'Replace paralegals with AI for document review',
      'Let AI communicate directly with clients',
    ],
    correctAnswer: 1,
    explanation:
      'Research and first-draft internal work are high-value (saves significant time) but low-risk (expert lawyers review everything). Final client deliverables should never be AI-only.',
    category: 'Use-Case Selection',
  },
  {
    id: 10,
    scenario:
      'A healthcare business wants to use AI for patient communications. The appropriate boundary is:',
    options: [
      'AI can handle all patient queries to reduce staff workload',
      'AI drafts responses that trained staff review and approve before sending',
      'AI manages routine appointment scheduling only, with no clinical communication',
      'AI is not appropriate for healthcare at all',
    ],
    correctAnswer: 1,
    explanation:
      'Human review of all patient-facing communications is critical in healthcare. AI can increase efficiency but licensed professionals must verify all clinical information.',
    category: 'Use-Case Selection',
  },
  {
    id: 11,
    scenario: 'Which function typically delivers the fastest measurable ROI from AI adoption?',
    options: [
      'Executive strategy',
      'IT and infrastructure',
      'Repetitive high-volume tasks: reporting, communication, content production, data summarization',
      'Human resources',
    ],
    correctAnswer: 2,
    explanation:
      'High-volume repetitive tasks save the most time immediately. If something takes 2 hours/week and AI reduces it to 10 minutes, that ROI is measurable in days.',
    category: 'Use-Case Selection',
  },
  {
    id: 12,
    scenario:
      'A professional services firm asks which client-facing work is appropriate for AI assistance. The correct answer is:',
    options: [
      'All client deliverables — AI is good enough',
      'None — clients expect human-only work',
      'Research, first drafts, and analysis — with mandatory expert review, quality verification, and professional judgment applied before delivery',
      'Only internal work — never use AI for clients',
    ],
    correctAnswer: 2,
    explanation:
      'AI can dramatically accelerate client work in specific roles (research, drafting) but must be reviewed by the human expert before delivery. This maintains quality and professional accountability.',
    category: 'Use-Case Selection',
  },
  {
    id: 13,
    scenario: 'When should AI NOT be the primary tool for a business decision?',
    options: [
      'When the decision involves data analysis',
      'When the decision requires synthesizing large amounts of information',
      'When the decision has significant human impact and requires accountability, ethical judgment, and contextual understanding beyond AI\'s capability',
      'When the team is unfamiliar with the topic',
    ],
    correctAnswer: 2,
    explanation:
      'High-stakes decisions affecting people require human judgment, ethical reasoning, and accountability. Humans should make these decisions; AI can provide analysis and recommendations.',
    category: 'Use-Case Selection',
  },
  {
    id: 14,
    scenario:
      'A retail business wants to use AI to improve customer experience. The most strategically sound starting point is:',
    options: [
      'Deploy AI chatbots to replace customer service staff',
      'Use AI to analyze customer feedback patterns and generate actionable insights for human decision-makers',
      'Use AI to generate social media posts',
      'Implement AI-powered pricing without human oversight',
    ],
    correctAnswer: 1,
    explanation:
      'Analysis that informs human decisions creates value without  risk. This allows you to understand customers better before making operational changes.',
    category: 'Use-Case Selection',
  },
  {
    id: 15,
    scenario: 'The most common mistake organizations make when selecting AI use cases is:',
    options: [
      'Starting with too many use cases at once',
      'Selecting use cases based on excitement rather than ROI potential and implementation feasibility',
      'Not using enterprise AI tools',
      'Involving too many stakeholders in the decision',
    ],
    correctAnswer: 1,
    explanation:
      'Use cases should be selected based on clear ROI metrics and implementation reality. Excitement-driven selection often leads to failed pilots and wasted resources.',
    category: 'Use-Case Selection',
  },

  // OUTPUT EVALUATION (5 questions)
  {
    id: 16,
    scenario: 'You receive an AI-generated market report. Your quality evaluation should include:',
    options: [
      'Checking grammar and formatting',
      'Verifying all statistics against original sources, assessing logical consistency, checking for hallucinated facts or citations, and applying your professional judgment to conclusions',
      'Asking a colleague if it sounds credible',
      'Checking if it matches your expectations',
    ],
    correctAnswer: 1,
    explanation:
      'Rigorous evaluation requires verifying facts, checking logic, and applying expert judgment. Grammar is the least important aspect of quality output.',
    category: 'Output Evaluation',
  },
  {
    id: 17,
    scenario:
      'AI confidently states that your competitor "filed for bankruptcy in 2023" but you cannot find any supporting evidence. This is an example of:',
    options: [
      'An outdated AI knowledge base',
      'AI hallucination — generating plausible but fabricated information with high confidence',
      'A database error in the AI system',
      'Competitor information being private',
    ],
    correctAnswer: 1,
    explanation:
      'Hallucination is when AI confidently generates false information that sounds plausible. This is a known limitation that requires systematic verification.',
    category: 'Output Evaluation',
  },
  {
    id: 18,
    scenario:
      'You need to evaluate whether an AI-generated strategic recommendation is sound. The most rigorous evaluation process is:',
    options: [
      'Check if it matches your initial instinct',
      'See if it sounds professional',
      'Assess the logic chain, verify supporting data, identify unstated assumptions, consider alternative conclusions, and apply your domain expertise to the final judgment',
      'Have another AI tool review it',
    ],
    correctAnswer: 2,
    explanation:
      'Sound evaluation requires critical thinking: following the logic, verifying data, identifying assumptions, and applying your expertise. This cannot be delegated to another AI.',
    category: 'Output Evaluation',
  },
  {
    id: 19,
    scenario:
      'An AI output is impressive but slightly different from what you asked for. The professional response is:',
    options: [
      'Use it anyway — close enough',
      'Document what the prompt produced, refine the prompt to close the gap, and iterate until output meets your defined quality standard',
      'Start over with a completely different approach',
      'Accept it and note the limitation',
    ],
    correctAnswer: 1,
    explanation:
      'Iteration is how you build reliable AI workflows. Documenting the gap and refining the prompt creates repeatable, high-quality processes.',
    category: 'Output Evaluation',
  },
  {
    id: 20,
    scenario:
      'A team member submits an AI-assisted report without disclosing AI use. As their manager, your response should be:',
    options: [
      'It doesn\'t matter as long as the quality is good',
      'Establish a clear AI use disclosure policy, define quality standards for AI-assisted work, and create a review process that ensures professional accountability',
      'Ban AI use for all reports',
      'Only review AI-assisted work more carefully',
    ],
    correctAnswer: 1,
    explanation:
      'Professional standards require transparency about AI use, quality standards for AI-assisted work, and clear review processes. Policies ensure accountability.',
    category: 'Output Evaluation',
  },

  // WORKFLOW DESIGN (5 questions)
  {
    id: 21,
    scenario: 'The foundation of a scalable AI workflow is:',
    options: [
      'Using the most advanced AI model available',
      'Clear documentation of the process, prompts, quality standards, and human review checkpoints',
      'Automation of as many steps as possible',
      'Having a dedicated AI specialist manage it',
    ],
    correctAnswer: 1,
    explanation:
      'Documentation is what makes a workflow scalable and repeatable. Without it, knowledge and processes are locked in individuals.',
    category: 'Workflow Design',
  },
  {
    id: 22,
    scenario:
      'An AI workflow has been running well for 3 months but quality has declined. The most likely cause is:',
    options: [
      'The AI model has degraded',
      'The team is using it wrong',
      'The workflow has not been reviewed, updated, or improved since launch — prompts and standards need refinement',
      'The business has outgrown AI',
    ],
    correctAnswer: 2,
    explanation:
      'Workflows require continuous improvement. Quality degradation usually signals that the workflow needs refinement as usage patterns or requirements change.',
    category: 'Workflow Design',
  },
  {
    id: 23,
    scenario:
      'When designing an AI workflow for a team, the most critical component to include is:',
    options: [
      'The most sophisticated AI tools',
      'Mandatory human review checkpoints before any AI output reaches clients, stakeholders, or final decisions',
      'A dedicated AI budget',
      'Individual AI training for each team member',
    ],
    correctAnswer: 1,
    explanation:
      'Human review checkpoints are non-negotiable for quality and accountability. They ensure that AI outputs meet professional standards before use.',
    category: 'Workflow Design',
  },
  {
    id: 24,
    scenario:
      'You want to ensure your AI workflows create organizational value beyond individual productivity. The key requirement is:',
    options: [
      'Everyone uses the same AI tool',
      'AI workflows are documented, shared, standardized, and continuously improved as organizational assets',
      'A senior leader champions AI adoption',
      'Quarterly AI training for all staff',
    ],
    correctAnswer: 1,
    explanation:
      'Documentation and standardization transform individual AI use into organizational capability. This creates compounding value and prevents knowledge loss.',
    category: 'Workflow Design',
  },
  {
    id: 25,
    scenario: 'The primary risk of undocumented AI workflows is:',
    options: [
      'Lower quality outputs',
      'Higher AI tool costs',
      'Knowledge and capability that exists only in individuals — lost when they leave and impossible to scale',
      'Compliance and regulatory issues',
    ],
    correctAnswer: 2,
    explanation:
      'Undocumented workflows are trapped in individuals. When someone leaves, the workflow disappears. This prevents scaling and creates critical dependencies.',
    category: 'Workflow Design',
  },

  // AI LIMITATIONS AND ETHICS (5 questions)
  {
    id: 26,
    scenario: 'The most important principle for professional AI use is:',
    options: [
      'Use the most advanced model available',
      'Automate as many tasks as possible to maximize efficiency',
      'Maintain full human accountability for all AI-assisted decisions, outputs, and actions — AI is a tool, not a decision-maker',
      'Disclose AI use only when directly asked',
    ],
    correctAnswer: 2,
    explanation:
      'Humans remain accountable for all AI-assisted work. AI does not share responsibility; it only augments human decision-making.',
    category: 'AI Limitations and Ethics',
  },
  {
    id: 27,
    scenario:
      'Your client has not asked about AI use in your deliverables. You should:',
    options: [
      'Not mention it — it\'s a competitive advantage to keep private',
      'Proactively establish clear AI use policies in your engagement terms and maintain transparency about AI-assisted work in your process',
      'Disclose only if asked directly',
      'Use AI only for internal work to avoid the issue',
    ],
    correctAnswer: 1,
    explanation:
      'Professional ethics require proactive transparency. Clients have a right to know how their work is being produced, even if they don\'t ask.',
    category: 'AI Limitations and Ethics',
  },
  {
    id: 28,
    scenario:
      'An AI tool\'s terms of service state that inputs may be used to improve the model. In a professional context, this means:',
    options: [
      'It\'s fine — AI companies are trustworthy',
      'Review your client confidentiality obligations before inputting any client data, and use enterprise tools with appropriate data protection agreements for sensitive work',
      'Never use AI for professional work',
      'Only use AI for public information',
    ],
    correctAnswer: 1,
    explanation:
      'Data privacy and client confidentiality are paramount. Check your obligations and use tools with appropriate safeguards for sensitive information.',
    category: 'AI Limitations and Ethics',
  },
  {
    id: 29,
    scenario: 'AI systems can exhibit bias in outputs because:',
    options: [
      'AI tools are programmed with biased rules',
      'AI developers intentionally create biased systems',
      'Training data reflects historical human biases, which AI systems learn and can amplify — requiring human oversight in high-stakes applications',
      'AI cannot process cultural nuance',
    ],
    correctAnswer: 2,
    explanation:
      'AI learns from data. If historical training data contains human biases, the AI will learn and potentially amplify them. This requires awareness and oversight.',
    category: 'AI Limitations and Ethics',
  },
  {
    id: 30,
    scenario:
      'The professional who will thrive in an AI-enabled economy is someone who:',
    options: [
      'Has deep technical AI development skills',
      'Avoids AI to maintain authentic human expertise',
      'Develops the judgment to direct AI strategically, evaluate outputs critically, and apply domain expertise to create value that AI alone cannot produce',
      'Automates their entire workflow with AI',
    ],
    correctAnswer: 2,
    explanation:
      'The future belongs to professionals who combine AI leverage with human judgment. Neither alone is sufficient; the combination is where value is created.',
    category: 'AI Limitations and Ethics',
  },
]
