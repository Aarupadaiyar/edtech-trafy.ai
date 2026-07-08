// Full 8-week curriculum — source of truth for Section 4 (journey), Section 8 (accordion)
export const curriculum = [
  {
    week: 1,
    mission: 'Mission 01',
    title: 'Think Like an AI Engineer',
    goal: "Stop being a tutorial watcher. Start shipping software.",
    concepts: ['AI Engineering vs Machine Learning', 'Modern AI ecosystem', 'Python essentials', 'Git & GitHub', 'APIs', 'JSON', 'VS Code', 'Prompt Engineering Basics', 'AI assisted development'],
    micro: ['AI Calculator', 'AI Terminal Assistant', 'Smart Unit Converter', 'AI Text Formatter', 'Prompt Playground'],
    major: {
      name: 'Build Your First AI Employee',
      subtitle: 'AI Personal Assistant',
      features: ['Chat Interface', 'Memory', 'Theme Switching', 'Conversation History', 'Export Chats']
    },
    skills: ['Python', 'APIs', 'Prompt Engineering', 'JSON', 'Git'],
    outcome: 'Ships a working AI assistant and a GitHub habit, proof you can go from blank file to running app in one week.'
  },
  {
    week: 2,
    mission: 'Mission 02',
    title: 'Build AI Applications',
    goal: 'Move from single prompts to real product surfaces.',
    concepts: ['OpenAI API', 'Streaming Responses', 'Context Windows', 'Prompt Chaining', 'System Prompts', 'Function Calling'],
    micro: ['Email Generator', 'Cover Letter Generator', 'Meeting Summary Tool', 'Blog Generator', 'AI Translator'],
    major: {
      name: 'Launch Your First Content Engine',
      subtitle: 'AI Content Studio',
      features: ['Blog Generator', 'LinkedIn Generator', 'Tweet Generator', 'Email Generator', 'Tone Control']
    },
    skills: ['OpenAI API', 'Streaming', 'System Prompts', 'Function Calling'],
    outcome: 'A deployed multi format content generator, the first live URL in the portfolio.'
  },
  {
    week: 3,
    mission: 'Mission 03',
    title: 'Teach AI to Read Books',
    goal: 'Give AI real documents to reason over.',
    concepts: ['PDFs', 'CSV', 'Embeddings', 'Vector Search', 'RAG', 'Chunking'],
    micro: ['PDF Chat', 'CSV Chat', 'FAQ Bot', 'Resume Analyzer', 'Invoice Reader'],
    major: {
      name: 'Build a Research Brain',
      subtitle: 'AI Research Assistant',
      features: ['Upload PDFs, Notes, Books', 'Ask Questions', 'Receive Sources']
    },
    skills: ['Embeddings', 'Vector Search', 'RAG', 'Chunking'],
    outcome: 'A retrieval augmented app that answers from real source material, the skill every AI native company hires for.'
  },
  {
    week: 4,
    mission: 'Mission 04',
    title: 'Replace Your Gmail With AI',
    goal: 'Wire AI into the tools people actually run their day on.',
    concepts: ['Automation', 'APIs', 'Webhooks', 'Email', 'Calendar', 'AI Workflows'],
    micro: ['Gmail Automation', 'Calendar Scheduler', 'Invoice Generator', 'AI Reminder', 'Meeting Organizer'],
    major: {
      name: 'Build Your Own Chief of Staff',
      subtitle: 'AI Executive Assistant',
      features: ['Email', 'Calendar', 'Scheduling', 'Summaries', 'Task Manager', 'Notifications']
    },
    skills: ['Webhooks', 'Automation', 'Calendar & Email APIs'],
    outcome: 'A live automation system running against real accounts, the project that gets forwarded internally by hiring managers.'
  },
  {
    week: 5,
    mission: 'Mission 05',
    title: 'Build an AI Team',
    goal: 'Move from one model call to a team of them.',
    concepts: ['Agents', 'Memory', 'Planning', 'Multi step Reasoning', 'Tool Calling'],
    micro: ['Research Agent', 'Coding Agent', 'Travel Agent', 'Finance Agent', 'Study Agent'],
    major: {
      name: 'Launch a Multi Agent Productivity Suite',
      subtitle: 'Multi Agent Productivity Suite',
      features: ['Research Agent', 'Writing Agent', 'Planning Agent', 'Execution Agent', 'Review Agent']
    },
    skills: ['Agentic Design', 'Tool Calling', 'Multi step Reasoning'],
    outcome: 'A coordinated team of agents shipping work end to end, the exact pattern most 2026 AI native startups are hiring to build.'
  },
  {
    week: 6,
    mission: 'Mission 06',
    title: 'Go Full Stack',
    goal: 'Wrap the AI in a real product: auth, database, UI.',
    concepts: ['FastAPI', 'React', 'Authentication', 'Databases', 'Docker'],
    micro: ['Login API', 'CRUD API', 'JWT Authentication', 'File Upload', 'Dashboard'],
    major: {
      name: 'Launch Your First AI SaaS',
      subtitle: 'AI SaaS Platform',
      features: ['Authentication', 'Dashboard', 'Chat', 'Payments (Demo)', 'Projects', 'Deploy']
    },
    skills: ['FastAPI', 'React', 'PostgreSQL', 'JWT', 'Docker'],
    outcome: 'A full stack, authenticated, deployed AI SaaS, indistinguishable from a funded startup\u2019s MVP.'
  },
  {
    week: 7,
    mission: 'Mission 07',
    title: 'Make It Production',
    goal: 'Take the SaaS from "works on my machine" to production grade.',
    concepts: ['Monitoring', 'Logging', 'Rate Limiting', 'Redis', 'Performance', 'Deployment'],
    micro: ['Logging System', 'Docker Container', 'Redis Cache', 'Monitoring Dashboard', 'CI/CD Pipeline'],
    major: {
      name: 'Harden It Like an Engineer',
      subtitle: 'Production AI System',
      features: ['Deploy', 'Docker', 'Redis', 'Database', 'Authentication', 'Monitoring']
    },
    skills: ['CI/CD', 'Redis', 'Monitoring', 'Rate Limiting'],
    outcome: 'A system that survives real traffic and real failure, the difference between "student project" and "engineer".'
  },
  {
    week: 8,
    mission: 'Mission 08',
    title: 'Convince a Company to Hire You',
    goal: 'One capstone, built to be shown in an interview room.',
    concepts: ['System Design', 'Product Thinking', 'Storytelling', 'Interview Readiness'],
    micro: [],
    major: {
      name: 'Convince a Company to Hire You',
      subtitle: 'Industry Capstone, choose one',
      features: ['AI CRM', 'AI ATS', 'Medical AI Assistant', 'Legal AI Assistant', 'AI Tutor', 'AI Customer Support', 'AI Sales Agent', 'Custom Startup Idea']
    },
    skills: ['End to end ownership', 'Product framing', 'Demo storytelling'],
    outcome: 'A capstone application, a recorded demo, and an interview ready story, on graduation day.'
  }
];

export const finalDeliverables = [
  { label: 'GitHub', detail: '48 repositories, well documented and organized' },
  { label: 'Portfolio Website', detail: 'Live, deployed, and linked everywhere' },
  { label: 'Resume', detail: 'AI focused, rewritten around what you shipped' },
  { label: 'LinkedIn', detail: 'A professional profile built from real work' },
  { label: 'Deployments', detail: '8 live applications, not localhost demos' },
  { label: 'Documentation', detail: 'Every project documented like production code' },
  { label: 'Presentation Videos', detail: 'Short demos for each major project' },
  { label: 'Employability Index', detail: 'Updated from every mission completed' }
];

export const techStack = [
  'Python', 'FastAPI', 'React', 'TypeScript', 'OpenAI', 'LangChain',
  'Docker', 'PostgreSQL', 'Redis', 'GitHub', 'Vector DB', 'Cloud Deployment'
];
