export const categories = [
  "All",
  "Text & Chat",
  "Image Generation",
  "Video Generation",
  "Audio & Music",
  "Coding",
  "Productivity & Writing",
  "Research & Academic",
  "Automation",
  "Design & UI/UX"
];

export const tools = [
  // --- Text & Chat ---
  {
    id: "chatgpt", name: "ChatGPT", description: "OpenAI's powerful conversational AI for text generation, analysis, and problem-solving.",
    url: "https://chat.openai.com", category: "Text & Chat", tags: ["LLM", "Conversational", "Versatile"], icon: "💬",
    problems: ["write an essay", "debug code", "translate text", "summarize articles", "brainstorm ideas"]
  },
  {
    id: "claude", name: "Claude", description: "Anthropic's advanced AI assistant known for exceptional writing, reasoning, and large context windows.",
    url: "https://claude.ai", category: "Text & Chat", tags: ["Writing", "Safe AI", "Large Context"], icon: "🧠",
    problems: ["analyze long documents", "write creative stories", "professional emails", "logical reasoning"]
  },
  {
    id: "gemini", name: "Gemini", description: "Google's multimodal AI model natively deeply integrated with Google ecosystem.",
    url: "https://gemini.google.com", category: "Text & Chat", tags: ["Multimodal", "Google", "Research"], icon: "✨",
    problems: ["youtube video summary", "google docs integration", "real-time information", "multimodal search"]
  },
  {
    id: "grok", name: "Grok", description: "Elon Musk's xAI model with real-time access to X (formerly Twitter) data and a rebellious personality.",
    url: "https://x.ai", category: "Text & Chat", tags: ["Real-time", "X Data", "Unfiltered"], icon: "🐦",
    problems: ["latest news", "trending topics", "witty conversation", "unfiltered answers"]
  },
  {
    id: "mistral", name: "Mistral", description: "Open-weight AI models from Europe combining high performance with efficiency.",
    url: "https://chat.mistral.ai", category: "Text & Chat", tags: ["Open Source", "Efficient", "European"], icon: "🌪️",
    problems: ["self-hosting ai", "efficient text generation", "developer api", "privacy focus"]
  },

  // --- Image Generation ---
  {
    id: "midjourney", name: "Midjourney", description: "State-of-the-art AI image generator producing highly artistic and photorealistic visuals.",
    url: "https://www.midjourney.com", category: "Image Generation", tags: ["Art", "Photorealistic", "High Quality"], icon: "🎨",
    problems: ["make digital art", "realistic photos", "concept art", "character design"]
  },
  {
    id: "dalle3", name: "DALL-E 3", description: "OpenAI's brilliant image generation model integrated directly into ChatGPT and Bing.",
    url: "https://chat.openai.com", category: "Image Generation", tags: ["Illustration", "Integrated", "Prompt-friendly"], icon: "🖼️",
    problems: ["create illustration", "logo design", "simple drawings", "visualizing concepts"]
  },
  {
    id: "leonardo", name: "Leonardo AI", description: "Creative platform for generating game assets, concept art, and detailed illustrations with fine control.",
    url: "https://leonardo.ai", category: "Image Generation", tags: ["Game Assets", "Concept Art", "Advanced Control"], icon: "🖌️",
    problems: ["game assets", "3d textures", "consistent character design", "upscaling images"]
  },
  {
    id: "flux", name: "FLUX.1", description: "A new state-of-the-art open-weights image model by Black Forest Labs, known for speed and quality.",
    url: "https://blackforestlabs.ai", category: "Image Generation", tags: ["Open Weights", "Fast", "Hyper-realistic"], icon: "🔥",
    problems: ["high speed generation", "realistic human portraits", "text in images"]
  },
  {
    id: "ideogram", name: "Ideogram", description: "Outstanding AI image generator specifically known for accurately rendering text within images.",
    url: "https://ideogram.ai", category: "Image Generation", tags: ["Typography", "Text Rendering", "Design"], icon: "🔠",
    problems: ["poster design with text", "t-shirt graphics", "typographic art", "signs and labels"]
  },
  {
    id: "firefly", name: "Adobe Firefly", description: "Adobe's creative generative AI focusing on commercial safety and integration with Creative Cloud.",
    url: "https://firefly.adobe.com", category: "Image Generation", tags: ["Commercial Safe", "Adobe", "Design"], icon: "🪄",
    problems: ["remove background", "generative fill", "recolor vector", "texture effects"]
  },

  // --- Video Generation ---
  {
    id: "runway", name: "RunwayML", description: "Pioneering creative suite featuring Gen-3 video generation and advanced video editing AI.",
    url: "https://runwayml.com", category: "Video Generation", tags: ["Video Editing", "Gen-3", "Creative Suite"], icon: "🎬",
    problems: ["video from text", "image to video", "remove objects from video", "slow motion effect"]
  },
  {
    id: "luma", name: "Luma Dream Machine", description: "High-quality, fast AI model capable of generating realistic and stylized videos from text and images.",
    url: "https://lumalabs.ai/dream-machine", category: "Video Generation", tags: ["Realistic", "Fast", "Cinematic"], icon: "🚀",
    problems: ["realistic cinematic video", "animate my photo", "short film clips", "b-roll generation"]
  },
  {
    id: "heygen", name: "HeyGen", description: "AI video generation platform specializing in high-quality avatars and video translation.",
    url: "https://heygen.com", category: "Video Generation", tags: ["Avatars", "Lip Sync", "Video Translation"], icon: "👤",
    problems: ["ai spokesperson", "talking avatar", "translate my video", "personalized video messages"]
  },
  {
    id: "kling", name: "Kling AI", description: "Powerful text-to-video model capable of generating long, cinematic videos with realistic physics.",
    url: "https://klingai.com", category: "Video Generation", tags: ["Cinematic", "Long Video", "Physics"], icon: "🐲",
    problems: ["long ai videos", "realistic movement", "detailed scenery"]
  },

  // --- Audio & Music ---
  {
    id: "elevenlabs", name: "ElevenLabs", description: "The most realistic AI voice generator for text-to-speech, dubbing, and voice cloning.",
    url: "https://elevenlabs.io", category: "Audio & Music", tags: ["Voice Cloning", "TTS", "Audiobooks"], icon: "🎙️",
    problems: ["voiceover for video", "clone my voice", "audiobook narration", "realistic speech"]
  },
  {
    id: "suno", name: "Suno", description: "Create full, high-quality songs with vocals and instrumentation from simple text prompts.",
    url: "https://suno.com", category: "Audio & Music", tags: ["Music Generation", "Songs", "Creative"], icon: "🎵",
    problems: ["write a song", "make background music", "custom birthday song", "genre blending"]
  },
  {
    id: "udio", name: "Udio", description: "Next-generation music creation AI producing incredibly realistic tracks across any genre.",
    url: "https://www.udio.com", category: "Audio & Music", tags: ["Music", "High Fidelity", "Tracks"], icon: "🎧",
    problems: ["high fidelity music", "realistic vocals", "radio ready tracks"]
  },

  // --- Coding ---
  {
    id: "cursor", name: "Cursor", description: "The AI-first IDE built to help you write software faster, powered by top tier LLMs.",
    url: "https://cursor.sh", category: "Coding", tags: ["IDE", "AI-First", "Refactoring"], icon: "⌨️",
    problems: ["build a website", "refactor code", "understand codebase", "fix bugs automatically"]
  },
  {
    id: "v0", name: "v0 by Vercel", description: "Generative AI platform that creates beautiful user interfaces and React components from text.",
    url: "https://v0.dev", category: "Coding", tags: ["UI Generation", "React", "Frontend"], icon: "⚛️",
    problems: ["design ui with code", "react components", "tailwind layouts", "landing page mockup"]
  },
  {
    id: "bolt", name: "Bolt.new", description: "A full-stack web development agent that allows you to prompt, run, and deploy applications in the browser.",
    url: "https://bolt.new", category: "Coding", tags: ["Fullstack", "Deployment", "Browser IDE"], icon: "⚡",
    problems: ["build fullstack app", "deploy website", "instant web project"]
  },
  {
    id: "copilot", name: "GitHub Copilot", description: "Your AI pair programmer that auto-completes code directly in your IDE.",
    url: "https://github.com/features/copilot", category: "Coding", tags: ["Pair Programming", "Autocomplete", "IDE"], icon: "💻",
    problems: ["code completion", "unit tests", "boilerplate code", "documentation"]
  },

  // --- Productivity & Writing ---
  {
    id: "perplexity", name: "Perplexity AI", description: "AI-powered search engine that provides real-time citations and deep research capabilities.",
    url: "https://www.perplexity.ai", category: "Productivity & Writing", tags: ["Search", "Research", "Citations"], icon: "🔍",
    problems: ["fact checking", "research paper search", "current events", "summarize web search"]
  },
  {
    id: "gamma", name: "Gamma", description: "Generate beautiful presentations, documents, and websites instantly with AI.",
    url: "https://gamma.app", category: "Productivity & Writing", tags: ["Presentations", "Slides", "Design"], icon: "📊",
    problems: ["make presentation", "design deck", "quick website", "professional documents"]
  },
  {
    id: "notion", name: "Notion AI", description: "Integrated AI to help you write, brainstorm, edit, and summarize directly in your workspace.",
    url: "https://www.notion.so/product/ai", category: "Productivity & Writing", tags: ["Workspace", "Summarization", "Editing"], icon: "📝",
    problems: ["take notes", "summarize meeting", "plan a project", "improve writing"]
  },

  // --- Research & Academic ---
  {
    id: "consensus", name: "Consensus", description: "Search engine that uses AI to find answers in scientific research papers.",
    url: "https://consensus.app", category: "Research & Academic", tags: ["Science", "Evidence-based", "Academic"], icon: "🔬",
    problems: ["scientific evidence", "health research", "verify facts", "cite sources"]
  },
  {
    id: "elicit", name: "Elicit", description: "The AI Research Assistant that helps automate research workflows like literature reviews.",
    url: "https://elicit.org", category: "Research & Academic", tags: ["Literature Review", "Data Extraction", "Citations"], icon: "📚",
    problems: ["literature review", "extract data from papers", "summarize research"]
  },
  {
    id: "scispace", name: "SciSpace", description: "All-in-one platform for exploring, reading, and publishing research papers.",
    url: "https://typeset.io", category: "Research & Academic", tags: ["Research", "Reading", "Formatting"], icon: "🧬",
    problems: ["explain research paper", "format thesis", "discover related papers"]
  },

  // --- Automation ---
  {
    id: "zapier", name: "Zapier Central", description: "Build your own custom AI bots and connect them to 6,000+ apps to automate your work.",
    url: "https://zapier.com/central", category: "Automation", tags: ["Workflow", "Connections", "No-code"], icon: "⚙️",
    problems: ["automate tasks", "connect apps", "customer support bot", "data entry automation"]
  },
  {
    id: "make", name: "Make.com", description: "Visual platform that lets you design, build, and automate anything from simple tasks to complex workflows.",
    url: "https://www.make.com", category: "Automation", tags: ["Visual", "Complex Workflow", "Integration"], icon: "🧱",
    problems: ["complex automation", "visual workflow", "api integration", "database syncing"]
  },

  // --- Design & UI/UX ---
  {
    id: "canva", name: "Canva Magic Studio", description: "Suite of AI design tools to create visual content effortlessly.",
    url: "https://www.canva.com", category: "Design & UI/UX", tags: ["Social Media", "Graphics", "Easy"], icon: "🎨",
    problems: ["social media post", "logo creation", "photo editing", "presentation design"]
  },
  {
    id: "framer", name: "Framer AI", description: "Generate and publish professional websites from a simple text prompt in seconds.",
    url: "https://www.framer.com", category: "Design & UI/UX", tags: ["Web Design", "Interactive", "No-code"], icon: "✨",
    problems: ["build landing page", "responsive website", "interactive design"]
  },
  {
    id: "relume", name: "Relume AI", description: "Uses AI to generate sitemaps and wireframes for websites, speeding up the design process.",
    url: "https://www.relume.io", category: "Design & UI/UX", tags: ["Wireframing", "Sitemaps", "Webflow"], icon: "🗺️",
    problems: ["website structure", "wireframe design", "sitemap planning"]
  },
  {
    id: "uizard", name: "Uizard", description: "AI-powered design tool used for app wireframing, prototyping, and layout creation.",
    url: "https://uizard.io", category: "Design & UI/UX", tags: ["Mockups", "App Design", "Prototyping"], icon: "📱",
    problems: ["app wireframe", "screenshot to mockup", "prototype design"]
  }
];
