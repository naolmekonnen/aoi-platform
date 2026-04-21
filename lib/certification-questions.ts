export interface CertificationQuestion {
  id: number
  text: string
  category: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export const CERTIFICATION_QUESTIONS: CertificationQuestion[] = [
  // PROMPTING STRATEGY (8 questions)
  {
    id: 1,
    text: 'You need AI to write a strategic recommendation memo for your board of directors. Your first action should be:',
    category: 'Prompting Strategy',
    options: [
      'Open your AI tool and describe what happened',
      'Define the memo\'s purpose, the AI\'s role, provide a format example, and specify tone, audience, and length constraints before prompting',
      'Ask AI to write a board memo about your topic',
      'Search for a board memo template',
    ],
    correctAnswer: 1,
    explanation:
      'The PREP framework (Purpose, Role, Examples, Parameters) is the most effective approach. Providing all four elements ensures higher-quality output.',
  },
  {
    id: 2,
    text: 'Your AI-generated client proposal sounds generic and doesn\'t reflect your company\'s voice. The most effective fix is:',
    category: 'Prompting Strategy',
    options: [
      'Try a different AI tool',
      'Ask it to "be more creative"',
      'Provide 2-3 examples of your past proposals and specify your brand voice characteristics before regenerating',
      'Edit the output manually each time',
    ],
    correctAnswer: 2,
    explanation:
      'Examples are one of the most powerful prompt elements. They show AI exactly what "good" looks like in your context.',
  },
  {
    id: 3,
    text: 'Which prompt will produce the most useful competitive analysis?',
    category: 'Prompting Strategy',
    options: [
      '"Analyze my competitors"',
      '"Do a competitive analysis for a SaaS company"',
      '"Act as a senior strategy consultant. Analyze these 3 competitors [names] against our company [description] across: pricing, positioning, target market, key differentiators, and weaknesses. Format as a structured table with an executive summary. Audience: our CEO."',
      '"Compare these companies and tell me who\'s winning"',
    ],
    correctAnswer: 2,
    explanation:
      'The longest, most specific answer is best. It includes role, context, specific analysis dimensions, format requirements, and audience. This eliminates ambiguity.',
  },
  {
    id: 4,
    text: 'You are using AI to draft 50 personalized outreach emails. To maintain quality and consistency across all 50, you should:',
    category: 'Prompting Strategy',
    options: [
      'Prompt AI separately for each email',
      'Create a master prompt template with variables for personalization, test it on 5 emails, refine, then scale',
      'Write one email and ask AI to create 49 variations',
      'Use AI for the first 10 and copy the format manually',
    ],
    correctAnswer: 1,
    explanation:
      'Testing a template on a small batch before scaling ensures consistency and quality. This is how professional AI workflows operate.',
  },
  {
    id: 5,
    text: 'A junior employee says AI gives them "random results" every time. The root cause is most likely:',
    category: 'Prompting Strategy',
    options: [
      'They are using the wrong AI tool',
      'The AI model has inconsistent quality',
      'Their prompts lack specificity, role definition, and example outputs — leading to variable interpretation',
      'They need to pay for a premium AI subscription',
    ],
    correctAnswer: 2,
    explanation:
      'Vague prompts produce variable outputs. Consistency comes from specificity in: purpose, role, examples, and parameters.',
  },
  {
    id: 6,
    text: 'You need AI to analyze 200 customer support tickets and identify the top 5 complaint themes. The best prompting approach is:',
    category: 'Prompting Strategy',
    options: [
      'Paste all 200 tickets and ask "what are the themes?"',
      'Define the analysis framework first, specify the output format (ranked list with frequency and representative examples), then process in structured batches',
      'Ask AI to read the tickets and summarize them',
      'Have AI categorize each ticket individually',
    ],
    correctAnswer: 1,
    explanation:
      'Large volume tasks require a structured approach: define the framework, specify the output format, then process in batches for consistency.',
  },
  {
    id: 7,
    text: 'Chain prompting is most valuable when:',
    category: 'Prompting Strategy',
    options: [
      'Your task is simple and straightforward',
      'You want faster outputs',
      'A complex task benefits from breaking into sequential steps where each output becomes the input for the next prompt',
      'You are using multiple AI tools simultaneously',
    ],
    correctAnswer: 2,
    explanation:
      'Chain prompting breaks complex tasks into sequential steps. Each step refines the previous output, improving overall quality.',
  },
  {
    id: 8,
    text: 'You receive an important AI output but suspect it may contain errors. Your professional protocol should be:',
    category: 'Prompting Strategy',
    options: [
      'Trust it — AI is generally reliable',
      'Skim it for obvious mistakes',
      'Systematically verify all specific facts, statistics, and claims against primary sources before using or distributing',
      'Ask a colleague if it sounds right',
    ],
    correctAnswer: 2,
    explanation:
      'Professional accountability requires verification. Never trust AI outputs without validation, especially for facts, statistics, or claims you\'re accountable for.',
  },

  // USE-CASE SELECTION (7 questions)
  {
    id: 9,
    text: 'Your law firm wants to use AI. The highest-value, lowest-risk starting point is:',
    category: 'Use-Case Selection',
    options: [
      'Have AI draft final client contracts',
      'Use AI to research case precedents and draft first versions of internal memos for attorney review',
      'Replace paralegals with AI for document review',
      'Let AI communicate directly with clients',
    ],
    correctAnswer: 1,
    explanation:
      'High-value, low-risk applications are internal work that still requires expert review. Research and first drafts are ideal — human experts verify.',
  },
  {
    id: 10,
    text: 'A healthcare business wants to use AI for patient communications. The appropriate boundary is:',
    category: 'Use-Case Selection',
    options: [
      'AI can handle all patient queries to reduce staff workload',
      'AI drafts responses that trained staff review and approve before sending',
      'AI manages routine appointment scheduling only, with no clinical communication',
      'AI is not appropriate for healthcare at all',
    ],
    correctAnswer: 1,
    explanation:
      'In regulated industries, human oversight is essential. AI can assist with drafting, but a qualified human must review before any patient contact.',
  },
  {
    id: 11,
    text: 'Which function typically delivers the fastest measurable ROI from AI adoption?',
    category: 'Use-Case Selection',
    options: [
      'Executive strategy',
      'IT and infrastructure',
      'Repetitive high-volume tasks: reporting, communication, content production, data summarization',
      'Human resources',
    ],
    correctAnswer: 2,
    explanation:
      'High-volume, repetitive tasks show ROI fastest because AI saves the most time. Start here, then move to strategic applications.',
  },
  {
    id: 12,
    text: 'A professional services firm asks which client-facing work is appropriate for AI assistance. The correct answer is:',
    category: 'Use-Case Selection',
    options: [
      'All client deliverables — AI is good enough',
      'None — clients expect human-only work',
      'Research, first drafts, and analysis — with mandatory expert review, quality verification, and professional judgment applied before delivery',
      'Only internal work — never use AI for clients',
    ],
    correctAnswer: 2,
    explanation:
      'AI can add significant value to professional services when used correctly: assist with research and drafts, but expert humans deliver the final product.',
  },
  {
    id: 13,
    text: 'When should AI NOT be the primary tool for a business decision?',
    category: 'Use-Case Selection',
    options: [
      'When the decision involves data analysis',
      'When the decision requires synthesizing large amounts of information',
      'When the decision has significant human impact and requires accountability, ethical judgment, and contextual understanding beyond AI\'s capability',
      'When the team is unfamiliar with the topic',
    ],
    correctAnswer: 2,
    explanation:
      'High-stakes decisions affecting people require human judgment and accountability. AI can inform decisions, but humans must make them.',
  },
  {
    id: 14,
    text: 'A retail business wants to use AI to improve customer experience. The most strategically sound starting point is:',
    category: 'Use-Case Selection',
    options: [
      'Deploy AI chatbots to replace customer service staff',
      'Use AI to analyze customer feedback patterns and generate actionable insights for human decision-makers',
      'Use AI to generate social media posts',
      'Implement AI-powered pricing without human oversight',
    ],
    correctAnswer: 1,
    explanation:
      'Analysis and insight generation (assistant role) is more valuable than replacement. Use AI to surface patterns, then have humans make strategic decisions.',
  },
  {
    id: 15,
    text: 'The most common mistake organizations make when selecting AI use cases is:',
    category: 'Use-Case Selection',
    options: [
      'Starting with too many use cases at once',
      'Selecting use cases based on excitement rather than ROI potential and implementation feasibility',
      'Not using enterprise AI tools',
      'Involving too many stakeholders in the decision',
    ],
    correctAnswer: 1,
    explanation:
      'Many organizations get excited about AI and try too many things. Strategic selection combines: (1) high ROI potential and (2) implementation feasibility.',
  },

  // OUTPUT EVALUATION (5 questions)
  {
    id: 16,
    text: 'You receive an AI-generated market report. Your quality evaluation should include:',
    category: 'Output Evaluation',
    options: [
      'Checking grammar and formatting',
      'Verifying all statistics against original sources, assessing logical consistency, checking for hallucinated facts or citations, and applying your professional judgment to conclusions',
      'Asking a colleague if it sounds credible',
      'Checking if it matches your expectations',
    ],
    correctAnswer: 1,
    explanation:
      'Rigorous evaluation means: verify facts against sources, check logical consistency, identify hallucinations, and apply your expertise to conclusions.',
  },
  {
    id: 17,
    text: 'AI confidently states that your competitor "filed for bankruptcy in 2023" but you cannot find any supporting evidence. This is an example of:',
    category: 'Output Evaluation',
    options: [
      'An outdated AI knowledge base',
      'AI hallucination — generating plausible but fabricated information with high confidence',
      'A database error in the AI system',
      'Competitor information being private',
    ],
    correctAnswer: 1,
    explanation:
      'Hallucination is when AI generates false information with confidence. It\'s one of the most critical risks to understand and guard against.',
  },
  {
    id: 18,
    text: 'You need to evaluate whether an AI-generated strategic recommendation is sound. The most rigorous evaluation process is:',
    category: 'Output Evaluation',
    options: [
      'Check if it matches your initial instinct',
      'See if it sounds professional',
      'Assess the logic chain, verify supporting data, identify unstated assumptions, consider alternative conclusions, and apply your domain expertise to the final judgment',
      'Have another AI tool review it',
    ],
    correctAnswer: 2,
    explanation:
      'Critical thinking requires: examining the logic, verifying data, identifying assumptions, considering alternatives, and applying your expertise.',
  },
  {
    id: 19,
    text: 'An AI output is impressive but slightly different from what you asked for. The professional response is:',
    category: 'Output Evaluation',
    options: [
      'Use it anyway — close enough',
      'Document what the prompt produced, refine the prompt to close the gap, and iterate until output meets your defined quality standard',
      'Start over with a completely different approach',
      'Accept it and note the limitation',
    ],
    correctAnswer: 1,
    explanation:
      'Iteration is the path to quality. Document the gap, refine the prompt, and iterate until output meets your standard.',
  },
  {
    id: 20,
    text: 'A team member submits an AI-assisted report without disclosing AI use. As their manager, your response should be:',
    category: 'Output Evaluation',
    options: [
      'It doesn\'t matter as long as the quality is good',
      'Establish a clear AI use disclosure policy, define quality standards for AI-assisted work, and create a review process that ensures professional accountability',
      'Ban AI use for all reports',
      'Only review AI-assisted work more carefully',
    ],
    correctAnswer: 1,
    explanation:
      'Transparency and accountability are non-negotiable. Establish clear policies about AI use disclosure and quality standards.',
  },

  // WORKFLOW DESIGN (5 questions)
  {
    id: 21,
    text: 'The foundation of a scalable AI workflow is:',
    category: 'Workflow Design',
    options: [
      'Using the most advanced AI model available',
      'Clear documentation of the process, prompts, quality standards, and human review checkpoints',
      'Automation of as many steps as possible',
      'Having a dedicated AI specialist manage it',
    ],
    correctAnswer: 1,
    explanation:
      'Documentation makes workflows repeatable and scalable. Clear process documentation, templates, and standards are the true foundation.',
  },
  {
    id: 22,
    text: 'An AI workflow has been running well for 3 months but quality has declined. The most likely cause is:',
    category: 'Workflow Design',
    options: [
      'The AI model has degraded',
      'The team is using it wrong',
      'The workflow has not been reviewed, updated, or improved since launch — prompts and standards need refinement',
      'The business has outgrown AI',
    ],
    correctAnswer: 2,
    explanation:
      'Workflows require continuous improvement. Regular reviews, prompt refinement, and standard updates keep workflows effective.',
  },
  {
    id: 23,
    text: 'When designing an AI workflow for a team, the most critical component to include is:',
    category: 'Workflow Design',
    options: [
      'The most sophisticated AI tools',
      'Mandatory human review checkpoints before any AI output reaches clients, stakeholders, or final decisions',
      'A dedicated AI budget',
      'Individual AI training for each team member',
    ],
    correctAnswer: 1,
    explanation:
      'Human review checkpoints are essential for quality control and accountability. They ensure professional standards regardless of AI output.',
  },
  {
    id: 24,
    text: 'You want to ensure your AI workflows create organizational value beyond individual productivity. The key requirement is:',
    category: 'Workflow Design',
    options: [
      'Everyone uses the same AI tool',
      'AI workflows are documented, shared, standardized, and continuously improved as organizational assets',
      'A senior leader champions AI adoption',
      'Quarterly AI training for all staff',
    ],
    correctAnswer: 1,
    explanation:
      'Organizational value comes from shared, documented workflows that are continuously improved. This makes AI knowledge institutional, not individual.',
  },
  {
    id: 25,
    text: 'The primary risk of undocumented AI workflows is:',
    category: 'Workflow Design',
    options: [
      'Lower quality outputs',
      'Higher AI tool costs',
      'Knowledge and capability that exists only in individuals — lost when they leave and impossible to scale',
      'Compliance and regulatory issues',
    ],
    correctAnswer: 2,
    explanation:
      'Undocumented workflows are fragile knowledge silos. They\'re lost when people leave and can\'t scale. Documentation is critical.',
  },

  // AI LIMITATIONS & ETHICS (5 questions)
  {
    id: 26,
    text: 'The most important principle for professional AI use is:',
    category: 'AI Limitations & Ethics',
    options: [
      'Use the most advanced model available',
      'Automate as many tasks as possible to maximize efficiency',
      'Maintain full human accountability for all AI-assisted decisions, outputs, and actions — AI is a tool, not a decision-maker',
      'Disclose AI use only when directly asked',
    ],
    correctAnswer: 2,
    explanation:
      'Human accountability is non-negotiable. AI is a tool. Humans remain responsible for decisions, outputs, and actions.',
  },
  {
    id: 27,
    text: 'Your client has not asked about AI use in your deliverables. You should:',
    category: 'AI Limitations & Ethics',
    options: [
      'Not mention it — it\'s a competitive advantage to keep private',
      'Proactively establish clear AI use policies in your engagement terms and maintain transparency about AI-assisted work in your process',
      'Disclose only if asked directly',
      'Use AI only for internal work to avoid the issue',
    ],
    correctAnswer: 1,
    explanation:
      'Professional ethics require proactive transparency. Establish clear AI policies upfront. This builds trust and prevents misunderstandings.',
  },
  {
    id: 28,
    text: 'An AI tool\'s terms of service state that inputs may be used to improve the model. In a professional context, this means:',
    category: 'AI Limitations & Ethics',
    options: [
      'It\'s fine — AI companies are trustworthy',
      'Review your client confidentiality obligations before inputting any client data, and use enterprise tools with appropriate data protection agreements for sensitive work',
      'Never use AI for professional work',
      'Only use AI for public information',
    ],
    correctAnswer: 1,
    explanation:
      'Data privacy is critical. Before using any AI tool for professional or client work, understand data handling, confidentiality obligations, and use enterprise tools when needed.',
  },
  {
    id: 29,
    text: 'AI systems can exhibit bias in outputs because:',
    category: 'AI Limitations & Ethics',
    options: [
      'AI tools are programmed with biased rules',
      'AI developers intentionally create biased systems',
      'Training data reflects historical human biases, which AI systems learn and can amplify — requiring human oversight in high-stakes applications',
      'AI cannot process cultural nuance',
    ],
    correctAnswer: 2,
    explanation:
      'Bias in AI comes from training data. Historical biases in data become embedded in AI systems. Human oversight is essential in high-stakes decisions.',
  },
  {
    id: 30,
    text: 'The professional who will thrive in an AI-enabled economy is someone who:',
    category: 'AI Limitations & Ethics',
    options: [
      'Has deep technical AI development skills',
      'Avoids AI to maintain authentic human expertise',
      'Develops the judgment to direct AI strategically, evaluate outputs critically, and apply domain expertise to create value that AI alone cannot produce',
      'Automates their entire workflow with AI',
    ],
    correctAnswer: 2,
    explanation:
      'The future belongs to those who combine human judgment, domain expertise, and strategic AI use. This combination creates value AI alone cannot.',
  },
]
