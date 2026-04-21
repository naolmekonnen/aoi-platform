export const COURSE_CONTENT = {
  module_1: {
    title: "AI Clarity",
    description: "Understand what AI actually is (and isn't), and why most professionals use it ineffectively.",
    duration: "45 minutes",
    lessons: [
      {
        title: "What AI Actually Is (and Isn't)",
        content: `
          Artificial Intelligence (AI) is often misunderstood in popular media and business conversations. Let's cut through the hype.

          **What AI actually is:**
          - AI is a statistical model trained on massive amounts of data
          - Large Language Models (LLMs) like ChatGPT or Claude are pattern-matching engines
          - They predict the next most likely word based on patterns in training data
          - They're remarkably good at recognizing patterns, but they don't "think" like humans

          **What AI isn't:**
          - AI is not conscious or sentient (despite sci-fi narratives)
          - AI is not a replacement for critical thinking or human judgment
          - AI is not always right — it hallucinates (generates plausible-sounding false information)
          - AI is not magic — it's a tool with specific capabilities and constraints

          **Key Insight:** Understanding AI as a sophisticated pattern-matcher, not a replacement for human expertise, changes how you use it effectively. You're not delegating thinking; you're amplifying your capability.

          **Real Example:** ChatGPT can analyze financial data and generate recommendations, but it can't guarantee accuracy. You verify, contextualize, and decide. That's the right model.
        `,
      },
      {
        title: "The 3 Categories of AI Tools That Matter for Business",
        content: `
          There are thousands of AI tools. Most fall into three categories that drive business value:

          **1. LLM-Based Tools (Text, Chat, Writing)**
          - Examples: ChatGPT, Claude, Gemini, Copilot
          - Use cases: Writing, brainstorming, summarization, analysis, code generation
          - Business impact: Time savings on content creation and thinking work
          - Key advantage: You can use these with plain language (no coding required)
          
          **2. Vision & Image Tools**
          - Examples: DALL-E, Midjourney, GenAI-powered design tools
          - Use cases: Image generation, design, visual content, object detection
          - Business impact: Accelerates creative workflows
          - Key advantage: Can turn text descriptions into visuals instantly

          **3. Specialized AI Tools (Domain-Specific)**
          - Examples: Jasper (marketing copy), Copilot (code), HubSpot AI (sales)
          - Use cases: Role-specific tasks optimized for particular workflows
          - Business impact: Higher accuracy than general-purpose tools for their domain
          - Key advantage: Pre-trained on industry-specific data and best practices

          **Why This Matters:** Most business value comes from categories 1 and 3. Focus your learning and investment there. You don't need to learn "AI" broadly; learn the tools that fit your workflow.

          **Decision Framework:** For each task, ask: "Is there a dedicated tool for this? If not, what LLM tool handles it well?"
        `,
      },
      {
        title: "Why Most Professionals Use AI Ineffectively",
        content: `
          AI adoption is skyrocketing, but usage patterns show a consistent problem: most people use it ineffectively.

          **Common Mistakes:**

          1. **Vague Prompting**
          - "Write a marketing email" → Generic, unusable output
          - Better: "Write a 3-line email subject line for a SaaS tool targeting marketing managers, tone: confident but not hype-y"
          - Pattern: Specific context + clear constraints = better output

          2. **Trusting Without Verification**
          - Using AI outputs as-is without fact-checking
          - AI hallucinates. You must verify critical information.
          - Better: AI for drafting and ideas, humans for verification and final decisions

          3. **Tool Hopping Without Mastery**
          - Trying every new AI tool instead of mastering one
          - Each tool has different strengths and prompting styles
          - Better: Pick 1-2 tools, get proficient, then carefully evaluate new ones

          4. **Treating AI as Replacement, Not Augmentation**
          - "AI will do this work for us" → Set up to fail
          - AI augments your capability; it doesn't eliminate the need for human work
          - Better: "AI will help us do this 50% faster with humans adding judgment"

          5. **No Documentation or Process**
          - Prompts and workflows aren't recorded
          - Team members re-invent the wheel
          - Better: Document working prompts; build a library; share knowledge

          6. **Ignoring Cost-Benefit Analysis**
          - Using AI on tasks where humans are faster/cheaper
          - Better: Measure time saved and value gained; focus on high-impact tasks

          **The Fix:** This course teaches you the framework to avoid these mistakes.
        `,
      },
      {
        title: "What McKinsey, Deloitte, and Accenture Say About AI Adoption",
        content: `
          The world's leading consulting firms have invested heavily in AI transformation research. Their findings inform this course.

          **McKinsey's Key Finding:**
          "Organizations that adopt AI in core business processes see 20-40% productivity gains. But only if they combine automation with reskilling."
          
          **Translation:** AI is a tool multiplier, not a job eliminator. Your competitive advantage is using AI+human expertise.

          **Deloitte's Insight:**
          "The gap between AI leaders and laggards will widen. By 2026, organizations with AI adoption roadmaps will significantly outperform those without."
          
          **Translation:** You don't need to be first; you need to start now. Waiting means falling behind.

          **Accenture's Framework:**
          Accenture identifies three stages:
          1. **Pilot** — Test AI on low-risk, high-learning tasks
          2. **Scale** — Deploy winning pilots across the organization
          3. **Optimize** — Continuously improve based on outcomes

          **Translation:** You don't need a perfect AI strategy Day 1. Start small, measure, scale.

          **The Bigger Picture:**
          These firms agree on one thing: AI adoption is not optional for competitive businesses. Being "AI-native" means:
          - Your team uses AI daily
          - You measure AI's impact on time, cost, and quality
          - You continuously evolve your AI toolkit as new tools emerge
          - You treat AI skills as core business capabilities

          **Your Competitive Position:** By completing this course, you're ahead of 70% of professionals. By applying it, you're in the top 10%.
        `,
      },
      {
        title: "The AI Hierarchy: Tools → Workflows → Systems → Strategy",
        content: `
          AI maturity follows a progression. Understanding where you are helps you know where to go next.

          **Level 1: Tools**
          - You use ChatGPT for occasional tasks
          - Output: Single pieces of content
          - Value: "This saved me 30 minutes once"
          - Maturity: Beginner

          **Level 2: Workflows**
          - You've built a repeatable process with AI (e.g., "AI drafts email, I customize, it sends")
          - Output: Consistent, quality results from structured process
          - Value: "This saves me 5 hours weekly"
          - Maturity: Intermediate

          **Level 3: Systems**
          - Multiple workflows are integrated
          - Example: "AI generates content → verification system checks facts → publishing system distributes"
          - Output: Entire business processes run with AI at the core
          - Value: "We've doubled output with same team size"
          - Maturity: Advanced

          **Level 4: Strategy**
          - AI informs business decisions and competitive positioning
          - Example: "Our product roadmap is shaped by AI-powered customer insight"
          - Output: Sustainable competitive advantage
          - Value: "We're outpacing competitors"
          - Maturity: Expert

          **Where You'll Be After This Course:** Level 1.5-2 (solid tool use, early workflows)

          **Your 90-Day Goal:** Get to Level 2 in your core role area. Build one high-impact workflow.

          **Long-term Ambition:** Move toward Level 3 by helping your team adopt.

          **Critical Insight:** You don't skip levels. All foundations matter. Master prompting before building workflows. Master workflows before designing systems.
        `,
      },
    ],
  },

  module_2: {
    title: "Real Use Cases",
    description: "Learn which business tasks AI handles well, the 5 tasks to never fully delegate, and ROI frameworks.",
    duration: "50 minutes",
    lessons: [
      {
        title: "20 Real Business Tasks AI Handles Well",
        content: `
          These tasks deliver measured ROI. Use these as inspiration for your own AI opportunities.

          **Content & Writing (5 tasks)**
          1. Email drafting (40% time savings on longer emails)
          2. Social media captions (generating 5-10 options in seconds)
          3. Blog post outlines (structure + bullet points)
          4. Product descriptions (variations for A/B testing)
          5. Meeting summary/recap (transcription + synthesis)

          **Analysis & Synthesis (5 tasks)**
          6. Market research summarization (scanning 20 articles into key insights)
          7. Competitive analysis (strengths/weaknesses from public data)
          8. Trend identification (patterns in customer feedback)
          9. Data interpretation (turning spreadsheets into insights)
          10. Risk assessment (scenario planning based on scenarios)

          **Learning & Development (3 tasks)**
          11. Training content generation (course outlines, quizzes)
          12. FAQ creation (from customer questions or documents)
          13. Onboarding documentation (process into step-by-step guides)

          **BDev & Operations (4 tasks)**
          14. Code review comments and suggestions
          15. Test case generation (given a spec)
          16. Documentation from code (docstrings → user guides)
          17. SQL/data query generation (natural language → queries)

          **Sales & Customer Success (3 tasks)**
          18. Personalized email templates (context-aware, not generic)
          19. Proposal outlines (structure, sections, flow)
          20. Customer feedback categorization (tagging themes)

          **Common Pattern:** AI shines on high-volume, template-able work. All 20 share: clear input → predictable output structure.

          **How to Apply:** Pick 3 from this list that fit your role. Create a prompt for each. Test it. Document it. You've just built your first AI workflow library.
        `,
      },
      {
        title: "The 5 Tasks You Should Never Fully Delegate to AI",
        content: `
          AI can assist with these; never let it decide alone.

          **1. Hiring & Talent Decisions**
          - Why: Bias, discrimination risk, cultural fit is subjective
          - Better approach: AI screens resumes for keywords; humans interview and decide
          - Real consequence: Biased hiring perpetuates organizational problems
          
          **2. Medical or Legal Advice**
          - Why: Liability, hallucination risk in domain-specific knowledge
          - Better approach: AI drafts summaries or options; licensed professional decides
          - Real consequence: Giving bad legal advice could lead to lawsuits

          **3. Financial or Investment Recommendations**
          - Why: Fiduciary responsibility, accuracy not guaranteed
          - Better approach: AI analyzes data; human advisor makes recommendation
          - Real consequence: Bad advice could cause financial loss

          **4. Content Moderation or Content Policy Decisions**
          - Why: Requires nuance, cultural context, and value judgment
          - Better approach: AI flags potential violations; humans decide
          - Real consequence: Unfair moderation decisions erode user trust

          **5. Pricing or Product Decisions Based on Customer Data**
          - Why: Can disadvantage or discriminate against customer segments
          - Better approach: AI identifies opportunities; humans decide with ethical oversight
          - Real consequence: Price discrimination lawsuits; customer backlash

          **The Pattern:** High-stakes, irreversible decisions with legal/ethical implications.

          **Your Guardrail:** Before deploying AI to "decide," ask: "If this fails, what's the consequence?" If it's significant, add human approval.
        `,
      },
      {
        title: "Case Studies: Solopreneur, Agency Owner, Corporate Team, Service Business",
        content: `
          Real-world examples of AI ROI across different business types.

          **Case 1: Solopreneur (Consultant)**
          - Situation: 50% of time spent on proposals, contracts, admin
          - AI Solution: "Proposal generator" (client name + project details → draft proposal in 5 min)
          - Result: Went from 3-4 proposals/week to 8-10 proposals/week (same time)
          - ROI: 2-3 additional clients/quarter from increased proposal volume
          - Implementation: Prompt templates + Stripe webhook to send proposals automatically

          **Case 2: Agency Owner**
          - Situation: Team of 8 spends 30% of billable time on client communication and brief interpretation
          - AI Solution: "Brief analyzer" (client email → structured requirements in Notion)
          - Problem solved: Briefs interpreted consistently; rework reduced
          - Result: 15% increase in billable hours as a team
          - Implementation: Zapier + Claude API to auto-populate project management

          **Case 3: Corporate Team (Marketing, 15 people)**
          - Situation: Endless meetings to align on messaging and positioning
          - AI Solution: "Brand voice trainer" (company voice guidelines + outputs reviewed by AI for consistency)
          - Problem solved: Lower-level team members produce on-brand content; fewer review cycles
          - Result: 25% faster content creation pipeline
          - Implementation: GPT-4 API with custom instructions for brand voice

          **Case 4: Service Business (30-person digital agency)**
          - Situation: Client feedback analysis is manual; data sits in Slack
          - AI Solution: "Feedback aggregator" (Slack messages → weekly trends + sentiment dashboard)
          - Problem solved: Spot issues faster; improve delivery based on real patterns
          - Result: Client retention increased from 78% to 85% in 6 months
          - Implementation: Custom Slack bot using Claude API

          **Across All Cases:**
          - All focused on **time-consuming**, **repeatable** tasks first
          - All **measured impact** before claiming ROI
          - All **trained team members** on the new tool
          - All **started small** and scaled winners

          **Your Takeaway:** ROI comes from fitting AI to your specific workflow, not from generic adoption.
        `,
      },
      {
        title: "The ROI Framework: Time Saved × Hourly Value = AI ROI",
        content: `
          How to calculate whether an AI tool is worth your effort.

          **The Formula:**
          (Hours saved per month) × (Your hourly rate) - (Cost of AI tool per month) = Monthly ROI

          **Example 1: Email Drafting**
          - Task: Writing customer emails
          - Current time: 2 hours/week = 8 hours/month
          - AI time: 5 min/email (vs. 15 min manually) = saves 66% = 5.3 hours/month savings
          - Your hourly rate: $75
          - AI cost: ChatGPT Plus $20/month
          - **ROI: (5.3 × $75) - $20 = $397.50/month gain**
          - Verdict: Worth it. Implement immediately.

          **Example 2: Code Review Assistance**
          - Task: Reviewing team code for bugs
          - Current time: 5 hours/week = 20 hours/month (team aggregate)
          - AI time: AI suggests issues, engineer verifies = 40% time savings = 8 hours/month saved
          - Team hourly rate (blended): $85
          - AI cost: GitHub Copilot $10/month
          - **ROI: (8 × $85) - $10 = $670/month gain (for 3-person team)**
          - Verdict: Immediate ROI. But requires training on trust and verification.

          **Example 3: Market Research**
          - Task: Researching competitor features monthly
          - Current time: 6 hours/month
          - AI time: AI summarizes 15 articles in parallel = 1 hour + human review = saves 5 hours
          - Your hourly rate: $125
          - AI cost: ChatGPT $20/month
          - **ROI: (5 × $125) - $20 = $605/month gain**
          - Verdict: Strong ROI. But verify facts before using in strategy.

          **When NOT to Use This Framework:**
          - Strategic work where quality matters more than time
          - Learning activities where time investment builds skills
          - Customer-facing first contact (brand matters more than speed)

          **Gotcha:** Don't count time saved if you don't actually cut the task or redeploy the person. If they just feel "less busy," AI didn't make you more profitable.

          **Your Action:** Pick one task you do regularly. Calculate its ROI using this framework. If positive, implement this month.
        `,
      },
      {
        title: "Decision Matrix: When to Use AI vs. When Not To",
        content: `
          A practical checklist to make the "AI or not" decision.

          **Ask These Questions:**

          **1. Is the task high-volume or repeatable?**
          - Yes → AI candidate (scales benefit)
          - No → Probably not (setup cost > benefit)

          **2. Is the output template-able? (Predictable inputs and outputs)**
          - Yes → AI candidate (easier to prompt and verify)
          - No → Harder setup, but possible with examples

          **3. Is the task time-consuming but low-cognitive-demand?**
          - Yes → Strong AI candidate (drafting, summarization, categorization)
          - No → Might need human judgment, so AI assists not replaces

          **4. Is the task creative or strategic?**
          - Yes → AI as brainstorm partner, not final answer
          - No → AI can likely handle end-to-end

          **5. Are you verifying/editing the output anyway?**
          - Yes → Still okay if verification is fast. AI catches 80%, you catch 20%
          - No → Risky. Only if high accuracy is guaranteed (it usually isn't)

          **6. Would an AI mistake seriously damage your business/customer relationship?**
          - Yes → Human must review. AI assists only.
          - No → More freedom to automate

          **7. Is there regulatory or compliance risk?**
          - Yes → Legal review required; AI assists, doesn't decide
          - No → Usually safer

          **Decision Tree:**

          Start → Is task repeatable? 
          → No: Don't automate yet
          → Yes: Does it take you 3+ hours/week?
             → No: Nice-to-have, probably not worth setup
             → Yes: Is the output critical/high-stakes?
                → Yes: AI assists; human decides
                → No: Can go to higher automation

          **Your Action:** Map your top 5 tasks through this matrix. You'll quickly see which are ripe for AI.
        `,
      },
    ],
  },

  module_3: {
    title: "Practical Workflows",
    description: "Learn the PREP framework, ready-to-use prompts, and how to build your first workflow in 30 minutes.",
    duration: "55 minutes",
    lessons: [
      {
        title: "The PREP Prompt Framework: Purpose, Role, Examples, Parameters",
        content: `
          The most effective prompt structure for consistent, high-quality AI output.

          **PREP Framework:**

          **P — Purpose (6 words max)**
          What do you want the AI to do? Be specific about the outcome, not the task.
          - ❌ Bad: "Write an email"
          - ✅ Good: "Convince a potential customer to book a demo"

          **R — Role (Persona)**
          What role should the AI adopt? This shapes tone and expertise.
          - Options: "expert copywriter," "consultant," "creative director," "customer success rep"
          - Example: "You are a results-driven SaaS marketing expert"

          **E — Examples (2-3 samples)**
          Show, don't tell. Examples guide output better than descriptions.
          - ❌ Bad: "Write in a friendly tone"
          - ✅ Good: [paste 2 great emails you've written] "Write in this tone"

          **P — Parameters (Constraints)**
          What are the non-negotiables? Length, format, tone, output structure.
          - Examples: "max 3 sentences," "use bullet points," "include 3 statistic," "avoid jargon"

          **Complete PREP Example:**

          Purpose: Generate 5 Instagram post ideas about AI productivity
          Role: You're a viral social media strategist who understands B2B software audiences
          Examples: 
          [Paste 2 existing posts you loved]
          Parameters:
          - Each post should be 1-2 sentences max + 3-5 relevant emojis
          - Tone: confident, not preachy
          - Focus on "AI is a tool, not a threat"
          - Target: professionals who are AI-curious but skeptical

          **Why PREP Works:**
          - **Specificity reduces hallucinations** — AI has clear constraints
          - **Role shapes output quality** — Expert role = higher-quality thinking
          - **Examples are worth 1000 descriptions** — Patterns matter more than words
          - **Parameters prevent scope creep** — You get what you specified

          **Golden Rule:** If your output is bad, it's usually one of these four:
          1. Purpose is vague
          2. Role isn't specific enough
          3. You didn't give examples
          4. Parameters are missing

          **Your First PREP Prompt:** Write one for your most-used AI task using PREP right now. Test it. Save it. It's your first template.
        `,
      },
      {
        title: "10 Copy-Paste Business Prompt Templates",
        content: `
          Ready-to-use prompts. Fill in the brackets and go.

          **1. Email Cold Outreach**
          Purpose: Get a meeting
          Role: You're a [your-title] at [company-name], an expert in [your-specialty]
          Context: I'm reaching out to [prospect-role] at [company] about [specific-need]
          Examples: [paste 1 email that got a response]
          Parameters: 
          - 3-4 sentences max
          - Include one specific value prop
          - End with a clear next step (calendar link, call, etc.)
          
          Output: [Result: ~50% higher response rate with personalization]

          **2. Social Media Content Generator**
          Purpose: Create 5 LinkedIn posts about [topic]
          Role: You're a thought leader and B2B marketing expert
          Examples: [Paste 2 posts you wrote that performed well]
          Parameters:
          - 2-3 short sentences per post
          - Include a relevant statistic or insight
          - Add 2-3 engaging questions or calls-to-action
          
          Output: [Ready-to-post content in 30 seconds]

          **3. Customer Feedback Analysis**
          Purpose: Identify themes in customer feedback
          Context: Here are 20 recent customer support tickets: [paste]
          Role: You're a customer experience analyst
          Parameters:
          - List top 5 complaint themes with frequency
          - Suggest 2 product improvements based on patterns
          - Rate urgency (high/medium/low) for each theme
          
          Output: [Actionable summary you can share with product team]

          **4. Meeting Notes Summary**
          Purpose: Turn a meeting transcript into action items
          Context: [Paste meeting transcript or notes]
          Role: You're an executive assistant capturing key decisions
          Parameters:
          - Decisions made (bullet list)
          - Action items with owner + deadline
          - Follow-up topics for next meeting
          
          Output: [Searchable summary you can share with attendees]

          **5. Proposal Generator**
          Purpose: Create a project proposal outline
          Context: Client: [name], Project: [description], Budget: [range]
          Role: You're a proposal writer for [your-industry]
          Examples: [Paste 1 proposal you liked]
          Parameters:
          - Sections: Problem, Solution, Approach, Timeline, Investment
          - 2-3 paragraphs per section
          - Include 2 success metrics
          
          Output: [Client-ready draft, needs personalization but 80% done]

          **6. FAQ Generator**
          Purpose: Create FAQs about [your-product/service]
          Context: Common questions people ask: [list 5-10]
          Role: You're a customer success expert
          Parameters:
          - 8-10 Q&A pairs
          - Answers: 2-3 sentences max
          - Tone: helpful, not defensive
          
          Output: [Website-ready FAQs]

          **7. Blog Post Outline**
          Purpose: Outline a blog post about [topic]
          Role: You're an expert writer in [industry]
          Context: Target audience: [describe readers]
          Parameters:
          - H1 + H2 structure (5-7 sections)
          - 2-3 bullet points under each H2
          - Include 1-2 action items/next steps
          
          Output: [Outline you hand to a writer, vastly speeds up drafting]

          **8. Competitive Analysis**
          Purpose: Analyze competitor [name]'s positioning
          Context: [Describe your product, what makes you different]
          Role: You're a business strategist
          Parameters:
          - Competitor's strengths (3-4)
          - Competitor's weaknesses (3-4)
          - 2 ways we can differentiate
          
          Output: [Strategic input for marketing and product]

          **9. Internal Communication Draft**
          Purpose: Draft a message about [topic] for [audience]
          Examples: [Paste 1 internal communication you liked]
          Role: You're a [your-title] communicating with [team/company]
          Parameters:
          - Key message upfront
          - Supporting context (2-3 bullets)
          - Clear next steps or action required
          
          Output: [Draft for your editing and sending]

          **10. Training Content Generator**
          Purpose: Create training content about [skill/process]
          Role: You're an instructional designer
          Context: Learners are [describe experience level]
          Parameters:
          - 3-5 learning objectives
          - Step-by-step instructions (5-8 steps)
          - 1-2 practice exercises
          
          Output: [Module outline you can expand with examples]

          **How to Use These:**
          1. Copy one above
          2. Fill in the [brackets]
          3. Paste into your AI tool
          4. Iterate until satisfied
          5. Save the working version (it's your template now)
          6. Use the same template next time, just update the specifics

          **Pro Tip:** Your best prompts come from your own work. After each successful prompt, document it and reuse it. Over 6 months, you'll build a powerful library.
        `,
      },
      {
        title: "How to Build Your First AI Workflow in 30 Minutes",
        content: `
          A step-by-step guide to build a real AI workflow today.

          **Pick Your Task (5 min)**
          Choose something you do at least 2-3 times per week. It should take 15+ minutes currently.
          
          Examples: 
          - Writing drafts of something repetitive
          - Summarizing information
          - Generating variations (ideas, options, versions)
          
          **Clarify the Input & Output (5 min)**
          What goes in? What should come out?
          
          Example:
          - Input: Customer request/question
          - Output: Personalized response email template
          
          **Write Your PREP Prompt (10 min)**
          Using the PREP framework from earlier:
          - Purpose: What AI should do
          - Role: What persona should AI adopt
          - Example: Paste 1-2 samples of excellent output
          - Parameters: Constraints (length, tone, format)
          
          **Test It (5 min)**
          Give your prompt a real input. Does the output match your expectations?
          - Yes → Move to "Refine"
          - No → Adjust Parameters or Examples, re-test

          **Refine (Until satisfied)**
          Tweak until output is 80%+ ready to use.
          - If output is still bad, you likely need better examples or clearer constraints
          - Test 2-3 times with different inputs

          **Document It**
          Save your final prompt in a file (Google Doc, Notion, or prompt library tool)
          Include:
          - Task name
          - The full PREP prompt
          - How you tested it
          - Version number (v1.0)

          **Real Example: 30-Min Build**

          **Minute 0-5: Pick Task**
          - Current task: Writing follow-up emails to "soft no" prospects
          - Time spent: 15 min per email
          - Frequency: 5-10 per week

          **Minute 5-10: Clarify I/O**
          - Input: Prospect name, how they responded (objection/excuse), last context
          - Output: 2-3 personalized follow-up email options, tone: persistent not pushy

          **Minute 10-20: Write PREP Prompt**
          \`\`\`
          Purpose: Write 3 personalized follow-up emails to a prospect who said "not right now"
          
          Role: You're a skilled sales professional who understands psychology. You believe in persistence without pushiness.
          
          Context: Prospect [NAME] was interested in [TOPIC] but said [OBJECTION]. Last conversation: [DATE/KEY POINTS]
          
          Examples:
          [Paste 2 great follow-ups you've sent that worked]
          
          Parameters:
          - 3 email options, each different in tone/angle
          - Max 150 words each
          - Avoid hard selling; focus on value or timing
          - Include specific detail from earlier conversation
          \`\`\`

          **Minute 20-25: Test**
          - Input: Real prospect name, their actual objection
          - Output: 3 emails, all solid
          - Verdict: Ready to use, minor tweaks needed

          **Minute 25-30: Document & Save**
          - Saved in Notion under "Sales Workflows"
          - Tagged: leads, email, follow-up
          - Ready to use next time

          **Result:** Future follow-ups now take 2 minutes (pick best + customize) instead of 15.
          Time saved: 65 minutes/week. ROI: Immediate.

          **Your 30-Minute Task:**
          Do this right now. Pick one task. Walk through all 6 steps. You'll have your first real workflow by lunchtime. That's the power of this approach.
        `,
      },
      {
        title: "Tool Map: ChatGPT vs Claude vs Gemini vs Copilot",
        content: `
          A practical comparison to help you choose.

          **ChatGPT (OpenAI)**
          Strengths:
          - Most intuitive interface
          - Excellent for brainstorming and creative work
          - Strong writing quality across domains
          - Huge community (lots of examples online)
          
          Why use: Default choice for 80% of use cases. Best all-around.
          
          Cost: Free (GPT-3.5) or $20/month (GPT-4)
          
          Best for: Writing, ideation, customer service responses, learning

          **Claude (Anthropic)**
          Strengths:
          - Longer context window (reads much longer documents)
          - Excellent at detailed analysis and structure
          - Very good at following complex instructions
          - Strong at reasoning through multi-step problems
          
          Why use: When you need to analyze long documents or complex logic.
          
          Cost: Free (Claude 3.5 Sonnet) or $20/month (Pro)
          
          Best for: Document analysis, research synthesis, code review, detailed editing

          **Gemini (Google)**
          Strengths:
          - Integrates with Google Workspace (Gmail, Docs, Sheets)
          - Real-time internet access (current information)
          - Strong at handling structured data
          
          Why use: If you live in Google's ecosystem or need current info.
          
          Cost: Free or $20/month (Premium)
          
          Best for: Google Workspace users, current events analysis, data-heavy tasks

          **Copilot (Microsoft)**
          Strengths:
          - Deep integration with Office (Word, Excel, Outlook)
          - Seamless coding assistance in VS Code
          - Real-time internet search
          
          Why use: If you use Microsoft Office heavily or write code.
          
          Cost: Free (basic) or $20/month (Pro)
          
          Best for: Office automation, coding, professional document creation

          **Comparison Matrix:**

          | Task | Best Choice |
          |---|---|
          | Email drafting | ChatGPT or Copilot |
          | Code generation | Copilot or Claude |
          | Long document analysis | Claude |
          | Current events content | Gemini |
          | Social media copy | ChatGPT |
          | Complex reasoning | Claude |
          | Spreadsheet formulas | Gemini |
          | Marketing strategy | ChatGPT |
          | Data table interpretation | Claude or Gemini |
          | Brainstorming | ChatGPT |

          **Practical Recommendation:**
          - Start with ChatGPT (most learnable, best community)
          - Add Claude when you hit its strengths (document analysis, complex logic)
          - Add Gemini/Copilot if your workflow heavily uses those ecosystems
          - Don't try to master all four; pick 1-2, get great at them

          **Pro Tip:** Different tools give different outputs for the same prompt. If outputs are weak, try a different tool before rewriting your prompt.
        `,
      },
      {
        title: "SOP Template for Documenting AI Workflows",
        content: `
          How to write Standard Operating Procedures so anyone can replicate your AI workflow.

          **SOP Template: AI Workflow**

          **Title:** [Workflow Name]
          **Owner:** [Your Name]
          **Last Updated:** [Date]
          **Version:** [1.0]

          **Purpose:**
          Why does this workflow exist? What problem does it solve?
          Example: "Reduces time spent on email follow-ups from 15 min to 2 min per email"

          **Tools Required:**
          - [AI Tool] (e.g., ChatGPT Pro)
          - [Supporting tools] (e.g., Gmail, Notion)

          **Step-by-Step Process:**
          1. [Clear instruction]
          2. [Next step]
          3. [Next step]
          
          Include: Where to copy/paste the prompt, which fields to fill in, etc.

          **The Prompt (Full PREP):**
          \`\`\`
          [Paste your full prompt here so anyone can use it]
          \`\`\`

          **Expected Output:**
          What should the result look like? How do you know if it's good?
          Example: 3 email options, each 100-150 words, personalized to prospect

          **Quality Check:**
          - [ ] Output matches purpose
          - [ ] No hallucinations or false claims
          - [ ] Tone is consistent throughout
          - [ ] Customized, not generic

          **How to Customize:**
          List the fields in the prompt that change per use:
          - [PROSPECT_NAME]
          - [COMPANY]
          - [OBJECTION]
          Etc.

          **Time Saved:**
          Manual process: [X] minutes
          AI workflow: [Y] minutes
          Monthly savings: [X-Y] mins × [frequency] = [Total]

          **Version History:**
          - v1.0 (Nov 2024): Initial workflow designed
          - v1.1 (Nov 2024): Added 3rd email variant for better response rates

          **Real Example:**

          **Title:** Cold Email Follow-Up Generator
          **Owner:** Alex Martinez
          **Purpose:** Generate personalized follow-up emails for prospects who didn't respond to initial outreach. Reduces drafting time from 15 min to 2 min per email.

          **Tools:** ChatGPT Pro, Gmail

          **Step-by-Step:**
          1. Log into ChatGPT
          2. Copy the prompt below
          3. Fill in [BRACKETS] with prospect info
          4. Paste into ChatGPT
          5. Pick best variant (or blend them)
          6. Paste into email draft
          7. Send with personal note

          **The Prompt:**
          \`\`\`
          Purpose: Write 3 personalized follow-up emails...
          [... full prompt from earlier ...]
          \`\`\`

          **Expected Output:** 3 email options, each formatted for immediate use

          **Quality Check:**
          - [ ] Mentions specific detail from initial conversation
          - [ ] Tone matches our brand voice
          - [ ] Each variant takes a different angle
          - [ ] No generic language

          **Customize These Fields:**
          - [PROSPECT_NAME]: first and last name
          - [COMPANY]: prospect's company
          - [OBJECTION]: what they said ("Not in budget," "Wrong timing," etc.)
          - [INITIAL_CONTEXT]: what we discussed in first conversation

          **Time Saved:**
          Manual: 15 minutes per email
          Workflow: 2 minutes per email
          Monthly savings: 13 min × 8 emails = 104 minutes/month = 1.7 hours saved

          **How to Use This Template:**
          1. Copy the template above
          2. Document your first workflow using it
          3. Share with your team
          4. Refine based on feedback
          5. Update version number when you improve it

          This is how top teams scale AI usage. Everyone has documented prompts, not tribal knowledge.
        `,
      },
    ],
  },

  module_4: {
    title: "Becoming AI-Native",
    description: "Daily AI habits, staying current, building your SOP library, and your 30-day action plan.",
    duration: "40 minutes",
    lessons: [
      {
        title: "Daily AI Habits of High-Performing Operators",
        content: `
          The difference between dabbling and mastery is daily practice.

          **The 5 Daily Habits:**

          **1. Morning Prompt (5 min)**
          Before your day starts, use AI to:
          - Summarize your calendar + priorities
          - Draft your 3 key goals
          - Generate 1-2 ideas for your first meeting
          
          Example prompt: "Given my calendar [paste], what are my top 3 priorities today?"
          
          This trains you to think in prompts and saves mental energy.

          **2. Voice Input for Ideas (ongoing)**
          Whenever you have an idea or think "I should write about this...":
          - Don't write it down
          - Use AI voice or dictation
          - Let AI turn voice into outline/structure
          
          Example: Voice memo about customer feedback trend → AI turns it into 5-bullet analysis in Slack.

          **3. Prompt Documentation (2 min)**
          At the end of each week:
          - Review prompts you used that worked well
          - Add to your prompt library
          - Add metadata: task, outcome, tool used
          
          This is compounding interest. Your library grows exponentially.

          **4. Output Verification Checklist (1 min per output)**
          Before using any AI output, scan:
          - ✓ Tone matches my brand
          - ✓ Facts are verified (if factual content)
          - ✓ No hallucinations or errors
          - ✓ Customized, not generic
          
          This prevents AI mistakes from reaching customers.

          **5. Weekly Skill Refresh (15 min)**
          Pick 1 thing you learned from this course and practice it:
          - Monday: Craft a better PREP prompt
          - Wednesday: Test a new tool
          - Friday: Document a workflow
          
          Small, consistent progress compounds.

          **Behavioral Shift:**
          Most people use AI: "When I think of it"
          High performers: "Before every knowledge task, ask: Can AI help here?"

          **Your Week 1 Commitment:**
          Pick ONE habit from the five above. Do it every day for 7 days. By week 2, add another.
          By week 4, all five are automatic. That's when AI becomes truly native.
        `,
      },
      {
        title: "How to Stay Current Without Overwhelm",
        content: `
          AI tools change constantly. You don't need to chase everything.

          **The News Overload Problem:**
          New AI tools: 15+ per week
          New research papers: 100+ per week
          New features: Daily across major tools
          Result: Most people try to follow everything and burn out.

          **The Smart Approach:**
          Follow 3-4 high-quality sources, not 100 randos.

          **Best Sources:**

          **1. Newsletter: Stratechery (2x/week)**
          Ben Thompson breaks down why new AI matters to business strategy.
          Signal-to-noise: Very high. Takes 10 min to read.
          Focus: Business implications, not hype.

          **2. Newsletter: Import AI (1x/week)**
          Jack Clark summarizes cutting-edge AI research in layman's terms.
          Signal-to-noise: High. Focuses on capabilities, not tools.
          Focus: Understanding what's happening, not promoting tools.

          **3. YouTube Channel: Two Minute Papers**
          Károly Zsolnai-Fehér explains AI research papers in plain English.
          Signal-to-noise: Excellent. Visual explanations help understanding.
          Focus: Emerging research you should know about.

          **4. Twitter/X: Follow 3-5 Builders**
          Follow people building tools in your space (not random tech personalities).
          Signal-to-noise: Medium-low, but discover niche tools.
          Best accounts: People using AI in your industry.

          **What NOT to Follow:**
          - General AI news aggregators (too much noise)
          - Every AI tool launch (most fail; winners emerge through word-of-mouth)
          - Influencers hyping every new thing (low signal)

          **Your Action Plan:**
          Subscribe to 1-2 sources above.
          Schedule 15 minutes on Friday afternoon for reading.
          Ask yourself: "How does this change my work?"
          Most of the time: "It doesn't." That's okay.

          **The Pareto Principle:**
          90% of useful AI breakthroughs affect your workflow not at all.
          10% dramatically change what's possible.
          Your job: Spot the 10%.

          **That's why following 3-4 distilled sources beats following 50 noise sources.**
        `,
      },
      {
        title: "Building Your Personal AI SOP Library",
        content: `
          Your competitive advantage is your personal collection of AI workflows.

          **What to Build:**
          - Prompts that work
          - Workflows that save time
          - SOPs for repeatable processes
          - Templates that scale

          **How to Organize:**

          **Option 1: Notion Database (Recommended)**
          Structure:
          - Task Name | Time Saved | Tool | PREP Prompt | Expected Output | Last Tested | Notes
          
          Easy search. Visual. Shareable with team.

          **Option 2: Google Doc (Simple)**
          Sections:
          - Writing
          - Analysis
          - Code/Dev
          - Sales/Marketing
          - Admin/Operations
          
          Each section: prompt, example output, tips.

          **Option 3: Prompt Library Tool**
          Tools: Promptly, PromptBase, or custom database
          Advantage: Purpose-built for prompt organization
          Cost: Free-$10/month

          **What to Include in Each Entry:**

          Task Name:
          - Clear one-liner ("Cold Email Drafting")
          
          Purpose:
          - Why you built this, what problem it solves
          
          Prompt (Full PREP):
          - Copy-paste ready
          - All necessary context
          
          Example Input:
          - Real example of what goes in
          
          Example Output:
          - What you expect back
          
          Time Saved:
          - Manual vs. AI time
          
          Tools Used:
          - ChatGPT, Claude, etc.
          
          Success Rate:
          - How often it works (80%, 95%, etc.)
          
          Last Tested:
          - When you last used it successfully
          
          Notes:
          - Tips for best results
          - Gotchas to avoid
          - When NOT to use it

          **Maintenance (15 min/month):**
          - Review workflows you used last month
          - Remove ones you never use (keep signal-to-noise ratio high)
          - Update ones that improved
          - Test old ones that seem stale

          **Scaling Your Library:**

          Month 1: 3-5 workflows (your core tasks)
          Month 2: 8-10 workflows (covering main role)
          Month 3+: Specialized workflows (depth)

          Your library is most valuable after 6 months when:
          - You have 15-20 tested workflows
          - Each saves 2-5 hours/month on average
          - Your team knows they can trust your library

          **Share with Team:**
          Best part: Other team members steal your workflows.
          They test and refine them.
          Your library grows faster than you could alone.

          **Competitive Advantage:**
          A person with no AI library: Reinvents the wheel weekly
          A person with 20 tested workflows: Runs circles around them

          Your SOP library IS your competitive advantage.
        `,
      },
      {
        title: "Certification Prep Guide",
        content: `
          This course has covered all concepts on the certification exam.

          **What the Exam Tests:**
          - Scenario-based practical questions (not trivia)
          - 30 questions across 5 categories:
            - Prompting (8q): Building effective prompts
            - Use-Case Selection (7q): When to use AI
            - Output Evaluation (5q): Verifying AI work
            - Workflow Design (5q): Building processes
            - AI Limitations & Ethics (5q): Understanding constraints

          **Exam Format:**
          - 1 hour time limit
          - 70% pass score (21/30 correct)
          - No multiple attempts per day
          - Can retake in 24 hours if you fail

          **What You Need to Know:**

          **Prompting (Review Module 3, Lesson 1)**
          - PREP framework inside-out
          - Why examples matter
          - How to fix vague outputs
          
          **Use-Case Selection (Review Module 2, Lessons 1-2)**
          - Which tasks AI handles well
          - The 5 tasks to never fully delegate
          - ROI calculation
          
          **Output Evaluation (Review Module 2, Lesson 4)**
          - How to verify AI work
          - When hallucination is likely
          - Risk assessment by domain (legal, medical, financial)
          
          **Workflow Design (Review Module 3, Lessons 3-4)**
          - Building repeatable processes
          - Managing team AI adoption
          - Handling edge cases
          
          **Limitations & Ethics (Review throughout)**
          - AI bias and fairness
          - Transparency and accountability
          - Regulatory compliance

          **Study Tips:**

          **1. You Already Know This**
          You've read the course. Most questions test your comprehension, not memorization.

          **2. Think Practically**
          Every question has a scenario. Ask: "In real business, what's the smart move?"
          Not: "What's theoretically correct?"

          **3. Watch for Absolutes**
          Options with "always" or "never" are usually wrong.
          Business is nuanced. "Usually," "it depends," "with verification" are often right.

          **4. Elimination**
          2-3 options are obviously wrong. Between the last two, pick the one that considers context/risk.

          **Practice:**
          Before you take the exam, do a practice attempt:
          - Go through all 30 questions
          - Time yourself (60 min)
          - Score yourself
          - Review wrong answers against the course

          **Score to Target:**
          - 70-79%: You passed. You're "Ready" in AI skills.
          - 80-89%: You're "Advanced." Can teach others.
          - 90%+: You're mastery level. Document your workflows, share them.

          **If You Fail (Unlikely):**
          - You can retake in 24 hours
          - Review the questions you missed
          - The course has all answers; find where each was covered
          - Re-read that section and try again

          **Honest Assessment:**
          This exam is not designed to trick you. It's designed to verify you can apply AI practically.
          If you've worked through this course and built a workflow, you'll pass.

          You're ready. Take the exam when you feel confident.
        `,
      },
      {
        title: "Your 30-Day AI Integration Plan",
        content: `
          A concrete plan to go from course completion to AI-native professional.

          **Week 1: Foundation & Fundamentals**
          Goal: Build your first workflow

          - Day 1: Review PREP framework. Write 1 PREP prompt for a task you do weekly.
          - Day 2: Test that prompt 3 times with real inputs. Refine.
          - Day 3: Document the prompt using SOP template. Save to Notion/Drive.
          - Day 4: Build a 2nd workflow (pick an easier task).
          - Day 5: Test both workflows with a colleague. Gather feedback.
          - Day 6-7: Rest or explore one new AI tool (optional).

          Week 1 Outcome: 2 working prompts documented. Daily habit of prompt documentation started.

          **Week 2: Expand & Share**
          Goal: Build 3 more workflows. Start team adoption.

          - Day 8: Build 3rd workflow (drafting/ideation task).
          - Day 9: Build 4th workflow (analysis/summarization task).
          - Day 10: Document both.
          - Day 11: Introduce your #1 workflow to a colleague. Walk them through it.
          - Day 12-13: Gather feedback. Refine based on their experience.
          - Day 14: Review your 4 workflows. Which saves the most time?

          Week 2 Outcome: 4 documented workflows. Colleague has adopted one and tested it.

          **Week 3: Integrate & Optimize**
          Goal: Make AI part of your daily work rhythm. Identify your highest-ROI workflow.

          - Day 15: Integrate your #1 workflow into actual work. Use it daily.
          - Day 16: Same for #2.
          - Day 17: Same for #3.
          - Day 18: Use all 4 workflows in real work. Track time saved.
          - Day 19: Analyze: Which workflow saves the most time? Which is most reliable?
          - Day 20: Deep dive on your highest-impact workflow. Can you improve it? Test improvements.
          - Day 21: Step back. Reflect on what's working.

          Week 3 Outcome: 4 workflows are now part of your natural workflow. You're saving measurable time.

          **Week 4: Teach & Scale**
          Goal: Help others adopt. Prepare for certification.

          - Day 22: Identify 1-2 colleagues who could benefit from your workflows. Share.
          - Day 23: Run a 15-minute walkthrough with them.
          - Day 24: They test your workflow. Capture feedback.
          - Day 25: Build your 5th workflow (if you have time and interest).
          - Day 26: Review full certification practice exam. Note weak areas.
          - Day 27: Deep dive on one weak area. Re-read relevant course section.
          - Day 28-29: Study and prepare for certification exam.
          - Day 30: Take certification exam.

          Week 4 Outcome: Others are using your workflows. You're certification-ready.

          **Daily Standup (2 min):**
          At the start of each day, ask yourself:
          - Can AI help with my #1 task today?
          - Do I have a workflow for this?
          - If not, is it worth building one?

          **Weekly Reflection (10 min):**
          Every Friday:
          - Time saved: Total minutes from all workflows
          - Workflows working well: Which ones?
          - Workflows that failed: Why? Can they be fixed?
          - New opportunity spotted: Could AI help with [new task]?

          **Measurement:**

          Track these metrics over 30 days:

          | Metric | Week 1 | Week 2 | Week 3 | Week 4 |
          |---|---|---|---|---|
          | Workflows built | 2 | 4 | 4 | 5 |
          | Time saved (hr/week) | 2 | 6 | 12 | 14 |
          | Workflows shared | 0 | 1 | 2 | 3+ |
          | % of role using AI | 20% | 40% | 60% | 70%+ |

          These aren't requirements; they're targets. Your pace may vary.

          **Real Expectations:**
          - You won't master AI in 30 days (mastery is months/years)
          - You will have concrete, working examples of AI in your workflow
          - You will be ahead of 80% of people in AI capability
          - You will have a foundation to keep learning and experimenting

          **On Day 31:**
          You're no longer in "learning mode." You're in "doing mode."
          You've built workflows, documented them, and shared them.
          You've taken certification and passed (assuming you did the work).
          
          Now: Keep building. Keep documenting. Keep learning from failure.
          
          The difference between "AI dabbler" and "AI operator" is this:
          - Dabbler: Tries every new tool, integrates none
          - Operator: Masters 1-2 tools, documents workflows, ships consistently
          
          You're now an operator.

          Welcome to the future of work.
        `,
      },
    ],
  },
}
