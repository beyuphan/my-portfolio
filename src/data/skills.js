// category alanı { tr, en } objesidir; bileşenler useApp().L() ile dili seçer.
// Yalnızca gerçekten projelerde kullanılan şeyler listelenir.
export const skills = [
  {
    category: { tr: "Diller", en: "Languages" },
    items: ["Python", "TypeScript", "JavaScript", "Java", "Kotlin", "Dart", "C#", "Rust", "SQL", "GDScript"]
  },
  {
    category: { tr: "Backend & Veri", en: "Backend & Data" },
    items: ["FastAPI", "NestJS", "Node.js", "Prisma", "SQLAlchemy", "PostgreSQL", "PostGIS", "MySQL", "Redis", "Supabase", "Firebase"]
  },
  {
    category: { tr: "Web & Mobil", en: "Web & Mobile" },
    items: ["React", "Next.js", "Tailwind", "Flutter", "Jetpack Compose", "Tauri", "Jakarta EE"]
  },
  {
    category: { tr: "Yapay Zekâ & Görü", en: "AI & Vision" },
    items: ["LangGraph", "MCP", "Claude API", "Gemini API", "Groq", "OpenCV", "ONNX Runtime"]
  },
  {
    category: { tr: "Oyun & Medya", en: "Games & Media" },
    items: ["Godot", "Remotion", "Premiere Pro", "DaVinci Resolve", "Photoshop", "Figma"]
  },
  {
    category: { tr: "Altyapı & Araçlar", en: "Infra & Tools" },
    items: ["Docker", "Git", "GitHub Actions", "Vercel", "Railway", "HuggingFace Spaces"]
  }
];
