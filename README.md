# Eyüphan Binici — Portfolio

Kişisel portfolyo sitesi. React 19 + Vite + Tailwind CSS 4 ile geliştirildi.

🔗 Canlı: [beyuphan.vercel.app](https://beyuphan.vercel.app)

## Özellikler

- **İki dilli (TR/EN)** — `AppContext` üzerinden `t()` (UI metinleri) ve `L()` (içerik) ile tam çeviri
- **Üç görüntüleme modu** — Normal / İK (HR) / Teknik; proje kartları moda göre render edilir
- **8 detaylı proje** — her biri için problem → çözüm → mühendislik notu → teknik akış → çıktılar
- **Canlı AI HR Asistanı** — `hr-backend` (Gemini) ile Eyüphan'ın ağzından (birinci şahıs) cevap veren mülakat sohbeti
- KaTeX matematik gösterimi, "System Logs" (fail-fast) anlatımı, mobil uyumlu

## Kurulum

```bash
npm install
npm run dev        # geliştirme sunucusu
npm run build      # production derleme
npm run lint       # eslint
```

Ortam değişkeni (`.env`):

```
VITE_HR_API_URL=http://localhost:3000   # HR Agent backend adresi
```

## HR Agent Backend

`hr-backend/` içinde ayrı bir **NestJS** servisi bulunur. Gemini'yi Eyüphan'ın gerçek
CV/proje verisiyle besler ve soruları birinci tekil şahısla yanıtlar. Çalıştırmak için:

```bash
cd hr-backend
npm install
# .env: GEMINI_API_KEY, PORT, FRONTEND_ORIGIN
npm run start:dev
```

Gemini kotasını ve spam'i korumak için backend IP başına istek limiti (rate limit) uygular.

## Yapı

```
src/
  context/AppContext.jsx   # dil + mod state, t() / L() çeviri
  components/              # Navbar, ProjectCard, HRAgent
  sections/               # Hero, Projects, Skills, About, Contact, SystemLogs, ProjectDetails
  data/                   # projects.js, skills.js (iki dilli içerik)
hr-backend/               # NestJS AI HR asistanı
```
