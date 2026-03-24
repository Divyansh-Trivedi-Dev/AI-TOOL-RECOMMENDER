export const categories = [
  "All",
  "Text & Chat",
  "Image Generation",
  "Video Generation",
  "Audio & Music",
  "Coding",
  "Productivity & Writing"
];

export const tools = [
  // --- Text & Chat ---
  {
    id: "chatgpt", name: "ChatGPT", description: "OpenAI's powerful conversational AI for text generation, analysis, and problem-solving.",
    url: "https://chat.openai.com", category: "Text & Chat", tags: ["LLM", "Conversational", "Versatile"], icon: "💬"
  },
  {
    id: "claude", name: "Claude", description: "Anthropic's advanced AI assistant known for exceptional writing, reasoning, and large context windows.",
    url: "https://claude.ai", category: "Text & Chat", tags: ["Writing", "Safe AI", "Large Context"], icon: "🧠"
  },
  {
    id: "gemini", name: "Gemini", description: "Google's multimodal AI model natively deeply integrated with Google ecosystem.",
    url: "https://gemini.google.com", category: "Text & Chat", tags: ["Multimodal", "Google", "Research"], icon: "✨"
  },
  {
    id: "groq", name: "Groq", description: "Lightning-fast AI inference engine providing nearly instantaneous LLM responses.",
    url: "https://groq.com", category: "Text & Chat", tags: ["Fast Inference", "Llama 3", "LPU"], icon: "⚡"
  },
  {
    id: "mistral", name: "Mistral", description: "Open-weight AI models from Europe combining high performance with efficiency.",
    url: "https://chat.mistral.ai", category: "Text & Chat", tags: ["Open Source", "Efficient", "European"], icon: "🌪️"
  },
  {
    id: "pi", name: "Pi", description: "Inflection's emotionally intelligent personal AI designed to be supportive and conversational.",
    url: "https://pi.ai", category: "Text & Chat", tags: ["Personal AI", "Empathetic", "Chat"], icon: "🗣️"
  },

  // --- Image Generation ---
  {
    id: "midjourney", name: "Midjourney", description: "State-of-the-art AI image generator producing highly artistic and photorealistic visuals. Operated via Discord.",
    url: "https://www.midjourney.com", category: "Image Generation", tags: ["Art", "Photorealistic", "Discord"], icon: "🎨"
  },
  {
    id: "dalle3", name: "DALL-E 3", description: "OpenAI's brilliant image generation model integrated directly into ChatGPT and Bing.",
    url: "https://chat.openai.com", category: "Image Generation", tags: ["Illustration", "Integrated", "Prompt-friendly"], icon: "🖼️"
  },
  {
    id: "leonardo", name: "Leonardo AI", description: "Creative platform for generating game assets, concept art, and detailed illustrations with fine control.",
    url: "https://leonardo.ai", category: "Image Generation", tags: ["Game Assets", "Concept Art", "Advanced Control"], icon: "🖌️"
  },
  {
    id: "ideogram", name: "Ideogram", description: "Outstanding AI image generator specifically known for accurately rendering text within images.",
    url: "https://ideogram.ai", category: "Image Generation", tags: ["Typography", "Text Rendering", "Design"], icon: "🔠"
  },
  {
    id: "firefly", name: "Adobe Firefly", description: "Adobe's suite of creative generative AI models focusing on safe, commercial, and high-quality image generation.",
    url: "https://firefly.adobe.com", category: "Image Generation", tags: ["Commercial Safe", "Adobe", "Design"], icon: "🪄"
  },

  // --- Video Generation ---
  {
    id: "runway", name: "RunwayML", description: "Pioneering creative suite featuring Gen-2 video generation and advanced video editing AI models.",
    url: "https://runwayml.com", category: "Video Generation", tags: ["Video Editing", "Gen-2", "Creative Suite"], icon: "🎬"
  },
  {
    id: "pika", name: "Pika", description: "Idea-to-video platform that animates images and text prompts into dynamic video clips.",
    url: "https://pika.art", category: "Video Generation", tags: ["Animation", "Text-to-Video", "Discord"], icon: "🎥"
  },
  {
    id: "sora", name: "Sora", description: "OpenAI's highly anticipated text-to-video model capable of creating realistic and imaginative scenes.",
    url: "https://openai.com/sora", category: "Video Generation", tags: ["Realistic Video", "OpenAI", "Preview"], icon: "📽️"
  },
  {
    id: "luma", name: "Luma Dream Machine", description: "High-quality, fast AI model capable of generating realistic and stylized videos from text and images.",
    url: "https://lumalabs.ai/dream-machine", category: "Video Generation", tags: ["Realistic", "Fast", "3D Generation"], icon: "🚀"
  },

  // --- Audio & Music ---
  {
    id: "elevenlabs", name: "ElevenLabs", description: "The most realistic AI voice generator for text-to-speech, dubbing, and voice cloning.",
    url: "https://elevenlabs.io", category: "Audio & Music", tags: ["Voice Cloning", "TTS", "Audiobooks"], icon: "🎙️"
  },
  {
    id: "suno", name: "Suno", description: "Create full, high-quality songs with vocals and instrumentation from simple text prompts.",
    url: "https://suno.com", category: "Audio & Music", tags: ["Music Generation", "Songs", "Creative"], icon: "🎵"
  },
  {
    id: "udio", name: "Udio", description: "Next-generation music creation AI producing incredibly realistic tracks across any genre.",
    url: "https://www.udio.com", category: "Audio & Music", tags: ["Music", "High Fidelity", "Tracks"], icon: "🎧"
  },
  {
    id: "murf", name: "Murf AI", description: "Versatile AI voice generator focused on professional voiceovers for videos and presentations.",
    url: "https://murf.ai", category: "Audio & Music", tags: ["Voiceovers", "Professional", "Studio"], icon: "🎤"
  },

  // --- Coding ---
  {
    id: "copilot", name: "GitHub Copilot", description: "Your AI pair programmer that auto-completes code directly in your IDE.",
    url: "https://github.com/features/copilot", category: "Coding", tags: ["Pair Programming", "Autocomplete", "IDE"], icon: "💻"
  },
  {
    id: "cursor", name: "Cursor", description: "The AI-first IDE built to help you write software faster, powered by top tier LLMs.",
    url: "https://cursor.sh", category: "Coding", tags: ["IDE", "AI-First", "Refactoring", "Codebase Knowledge"], icon: "⌨️"
  },
  {
    id: "v0", name: "v0 by Vercel", description: "Generative AI platform that creates beautiful user interfaces and React components from text.",
    url: "https://v0.dev", category: "Coding", tags: ["UI Generation", "React", "Frontend"], icon: "⚛️"
  },
  {
    id: "amazonq", name: "Amazon Q Developer", description: "AWS's generative AI assistant for software development, upgrading the former CodeWhisperer.",
    url: "https://aws.amazon.com/q/developer/", category: "Coding", tags: ["AWS", "Enterprise", "Assistant"], icon: "☁️"
  },
  {
    id: "replit", name: "Replit AI", description: "Cloud-based IDE with deeply integrated conversational AI and code generation.",
    url: "https://replit.com/ai", category: "Coding", tags: ["Cloud IDE", "Hosting", "Beginner-friendly"], icon: "🧰"
  },

  // --- Productivity & Writing ---
  {
    id: "perplexity", name: "Perplexity AI", description: "AI-powered search engine that provides real-time citations and deep research capabilities.",
    url: "https://www.perplexity.ai", category: "Productivity & Writing", tags: ["Search", "Research", "Citations", "Real-time"], icon: "🔍"
  },
  {
    id: "notion", name: "Notion AI", description: "Integrated AI to help you write, brainstorm, edit, and summarize directly in your workspace.",
    url: "https://www.notion.so/product/ai", category: "Productivity & Writing", tags: ["Workspace", "Summarization", "Editing"], icon: "📝"
  },
  {
    id: "jasper", name: "Jasper", description: "Enterprise-grade AI copilot for marketing teams to create on-brand copy and content.",
    url: "https://www.jasper.ai", category: "Productivity & Writing", tags: ["Marketing", "Copywriting", "Enterprise"], icon: "✍️"
  },
  {
    id: "gamma", name: "Gamma", description: "Generate beautiful presentations, documents, and websites instantly with AI.",
    url: "https://gamma.app", category: "Productivity & Writing", tags: ["Presentations", "Slides", "Design"], icon: "📊"
  },
  {
    id: "beautifulai", name: "Beautiful.ai", description: "Presentation software that uses AI to apply rules of great design in real-time.",
    url: "https://www.beautiful.ai", category: "Productivity & Writing", tags: ["Presentations", "Pitch Decks", "Design Rules"], icon: "📈"
  },
  {
    id: "grammarly", name: "GrammarlyGO", description: "AI communication assistant that helps you write, rewrite, ideate, and reply contextually.",
    url: "https://www.grammarly.com/ai", category: "Productivity & Writing", tags: ["Editing", "Grammar", "Communication"], icon: "✅"
  }
];
