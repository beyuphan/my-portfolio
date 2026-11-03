// Çevrilebilir alanlar { tr, en } objesidir; bileşenler useApp().L() ile dili seçer.
// Mod alanları: role/impact (İK), architecture/algorithms (Teknik). link/demoLink/award opsiyoneldir.
export const projects = [
  {
    id: 1,
    title: "GeoIntel MCP",
    category: { tr: "Veri & Yapay Zeka", en: "Data & AI" },
    year: "2025 – 2026",
    role: { tr: "Backend Lider", en: "Backend Lead" },
    description: {
      tr: "AI destekli coğrafi rotalama ve seyahat zekâsı platformu. LangGraph karar mekanizması ve Model Context Protocol (MCP) araç seti ile gerçek zamanlı trafik, hava, yakıt ve POI verisini birleştirip proaktif navigasyon üretir.",
      en: "An AI-powered geospatial routing and travel-intelligence platform. A LangGraph decision engine and a Model Context Protocol (MCP) toolset combine real-time traffic, weather, fuel, and POI data into proactive navigation."
    },
    tags: ["Python", "FastAPI", "LangGraph", "MCP", "PostgreSQL", "PostGIS", "pgRouting", "HERE API", "Redis", "Docker"],
    link: "https://github.com/beyuphan/geointel-backend",
    impact: {
      tr: [
        "Tek bir doğal dil sorgusundan çok kriterli rota planı üretir (mesafe, süre, yakıt, gişe, hava, mola).",
        "Mikroservis mimarisi sayesinde yeni veri kaynakları (etkinlik, eczane, radar) bağımsız eklenebilir.",
        "HERE limiti/hatası anında yerel pgRouting'e düşerek kesintisiz çalışır."
      ],
      en: [
        "Turns a single natural-language query into a multi-criteria route plan (distance, time, fuel, tolls, weather, breaks).",
        "Microservice architecture lets new data sources (events, pharmacies, speed cameras) be added independently.",
        "Falls back instantly to local pgRouting on HERE rate-limit/error, staying available."
      ]
    },
    architecture: {
      tr: "Docker Compose ile 6 servis: FastAPI orchestrator (LangGraph 3-node akış: intent → agent → tools), mcp_city / mcp_intel / mcp_satellite (FastMCP araç sunucuları), PostGIS + pgRouting + pgVector veritabanı ve Redis önbellek. Orchestrator, LLM (Claude birincil, Gemini yedek) ile MCP araçlarını seçer.",
      en: "Six services via Docker Compose: a FastAPI orchestrator (LangGraph 3-node flow: intent → agent → tools), mcp_city / mcp_intel / mcp_satellite (FastMCP tool servers), a PostGIS + pgRouting + pgVector database, and a Redis cache. The orchestrator selects MCP tools through an LLM (Claude primary, Gemini fallback)."
    },
    algorithms: {
      tr: [
        "pgRouting Dijkstra ile en kısa yol; yağmur faktörlü kenar maliyeti: C = L × (1 + yağmur × 0.3)",
        "Hibrit rotalama: HERE Maps (canlı trafik) → pgRouting (yerel fallback); geocoding Google → OSM Nominatim",
        "Bounding-box ile pgRouting alt-graf optimizasyonu",
        "Rota boyunca 40 km aralıkla hava analizi; %80 menzil aralığıyla yakıt durağı yerleştirme + menzil dışı filtreleme",
        "LangGraph 3-node akış: intent sınıflandırma → LLM araç seçimi → MCP RPC",
        "pgVector ile semantik (hybrid) yer arama"
      ],
      en: [
        "Shortest path via pgRouting Dijkstra; rain-weighted edge cost: C = L × (1 + rain × 0.3)",
        "Hybrid routing: HERE Maps (live traffic) → pgRouting (local fallback); geocoding Google → OSM Nominatim",
        "Bounding-box pgRouting subgraph optimization",
        "Weather analysis every 40 km along the route; fuel-stop placement at 80% of range + out-of-range filtering",
        "LangGraph 3-node flow: intent classification → LLM tool selection → MCP RPC",
        "Semantic (hybrid) place search with pgVector"
      ]
    },
    technicalDetails: {
      problem: {
        tr: "Dinamik konum verisinin, statik harita katmanlarının ötesine geçip kullanıcıya proaktif, çok kaynaklı bir seyahat zekâsı üretememesi.",
        en: "Dynamic location data failing to go beyond static map layers and produce proactive, multi-source travel intelligence for the user."
      },
      solution: {
        tr: "MCP üzerine kurulu, LangGraph karar mekanizmalı bir ajan sistemi; coğrafi araçları (rota, POI, hava, yakıt, gişe, radar, WFS/İBB) standart protokolle birleştirir.",
        en: "An agent system built on MCP with a LangGraph decision engine, unifying geospatial tools (routing, POI, weather, fuel, tolls, speed cameras, WFS/İBB) over a standard protocol."
      },
      engineeringNote: {
        tr: "AI ajanları, MCP köprüsü sayesinde doğrudan veritabanı erişimi olmadan araçları çağırır; HERE hatasında pgRouting fallback ile sistem çökmeden devam eder.",
        en: "AI agents call tools through the MCP bridge without direct database access; on HERE failure, the pgRouting fallback keeps the system running."
      },
      flow: [
        { stepTitle: { tr: "Araç Katmanı", en: "Tool Layer" }, stepDesc: { tr: "FastMCP araç sunucuları (city/intel/satellite) coğrafi kaynakları standart protokolle sarmalar.", en: "FastMCP tool servers (city/intel/satellite) wrap geospatial sources behind a standard protocol." } },
        { stepTitle: { tr: "LangGraph Orchestrator", en: "LangGraph Orchestrator" }, stepDesc: { tr: "intent → agent (LLM araç seçimi) → tools düğümleriyle sorgu işlenir.", en: "Query flows through intent → agent (LLM tool selection) → tools nodes." } },
        { stepTitle: { tr: "Hibrit Rotalama", en: "Hybrid Routing" }, stepDesc: { tr: "HERE birincil, pgRouting Dijkstra fallback (yağmur faktörlü maliyet).", en: "HERE primary, pgRouting Dijkstra fallback (rain-weighted cost)." } },
        { stepTitle: { tr: "Zenginleştirme", en: "Enrichment" }, stepDesc: { tr: "Rota boyunca hava (40 km), yakıt durağı, gişe (>50 km), radar ve ETA hesaplanır.", en: "Weather (40 km), fuel stops, tolls (>50 km), speed cameras, and ETA are computed along the route." } }
      ],
      highlights: {
        tr: ["LangGraph 3-Node Ajan Akışı", "MCP Araç Mimarisi", "pgRouting + HERE Hibrit Rotalama", "Çok Kaynaklı Proaktif Analiz"],
        en: ["LangGraph 3-Node Agent Flow", "MCP Tool Architecture", "pgRouting + HERE Hybrid Routing", "Multi-Source Proactive Analysis"]
      }
    }
  },
  {
    id: 12,
    title: "Moka Agent Wallet",
    category: { tr: "Yapay Zeka & Fintech", en: "AI & Fintech" },
    year: "2026",
    role: { tr: "Full-Stack & Backend Mühendisi", en: "Full-Stack & Backend Engineer" },
    award: { tr: "🏆 Hackathon Finalisti", en: "🏆 Hackathon Finalist" },
    description: {
      tr: "Yapay zeka ajanlarının şirket adına güvenle para harcamasını sağlayan ödeme yetkilendirme platformu. Patron doğal dilde kural koyar, kurallar kriptografik yetki belgesine (mandate) dönüşür; her ödeme imza, kural motoru ve AI risk bekçisinden geçip değişmez deftere yazılır.",
      en: "A payment authorization platform that lets AI agents spend company money safely. A manager sets rules in natural language, which compile into cryptographic mandates; every payment passes signature checks, a rule engine, and an AI risk warden before landing in an immutable ledger."
    },
    tags: ["NestJS", "Prisma", "PostgreSQL", "Redis", "React", "TypeScript", "Ed25519", "JWS", "Claude API", "Docker", "SSE"],
    link: "https://github.com/beyuphan/Moka-Agent-Wallet",
    demoLink: "https://moka-2839.onrender.com/",
    impact: {
      tr: [
        "AI ajanına ham kart bilgisi verilmez; sadece kapsamı ve süresi sınırlı kriptografik token verilir.",
        "\"Teknolojiye ayda en fazla 50.000 TL harca\" gibi doğal dil kuralı, yapılandırılmış yetki belgesine dönüşür.",
        "Reddedilen ve onaylanan her işlem silinemez denetim defterine yazılır; patron için tam şeffaflık."
      ],
      en: [
        "The AI agent never receives raw card data — only a cryptographic token limited in scope and lifetime.",
        "A natural-language rule like \"spend up to 50,000 TL on technology this month\" compiles into a structured mandate.",
        "Every approved and rejected transaction is written to a tamper-proof audit ledger, giving the manager full transparency."
      ]
    },
    architecture: {
      tr: "NestJS 11 + Prisma 7 + PostgreSQL 16 backend, Redis ile idempotency/nonce saklama; React 19 (Vite) + Tailwind v4 + shadcn/ui yönetim paneli; risk analizi için Anthropic Claude (erişilemezse deterministik mock'a düşer); tüm stack Docker Compose ile ayağa kalkar. Tek giriş noktası POST /api/authorize; canlı defter akışı Server-Sent Events ile panele basılır.",
      en: "A NestJS 11 + Prisma 7 + PostgreSQL 16 backend with Redis for idempotency/nonce storage; a React 19 (Vite) + Tailwind v4 + shadcn/ui admin panel; Anthropic Claude for risk analysis (falling back to a deterministic mock when unavailable); the whole stack boots via Docker Compose. A single entry point, POST /api/authorize, and a live ledger stream pushed to the panel over Server-Sent Events."
    },
    algorithms: {
      tr: [
        "Yetkilendirme hattı: idempotency → Ed25519 imza + replay doğrulama → scoped token → kural motoru → AI risk bekçisi → ödeme ağı → deftere yazım",
        "Ed25519 / JWS imza doğrulaması; nonce ile 60 saniyelik replay penceresi koruması",
        "Scoped token yalnızca ilgili mandate'e bağlıdır; harcama kararı her zaman sunucudaki mandate kaydından üretilir",
        "Hash zinciri: hash(n) = H(hash(n-1) ‖ payload); GET /ledger/verify zinciri genesis'ten bugüne doğrular",
        "PostgreSQL trigger ile append-only defter (UPDATE/DELETE/TRUNCATE engellenir)",
        "SELECT ... FOR UPDATE ile mandate satır kilidi — eşzamanlı taleplerde limit aşımı yarış koşulu engellenir",
        "Çift katmanlı idempotency: nonce (replay) + Idempotency-Key başlığı (ağ tekrarı)",
        "LLM risk skorlaması LOW / MEDIUM / HIGH üretir; 3 sn timeout'ta deterministik mock'a düşerek kilitlenmeyi önler"
      ],
      en: [
        "Authorization pipeline: idempotency → Ed25519 signature + replay check → scoped token → rule engine → AI risk warden → payment network → ledger write",
        "Ed25519 / JWS signature verification; nonce-based 60-second replay protection window",
        "Scoped tokens are bound to a single mandate; the spending decision always derives from the server-side mandate record",
        "Hash chain: hash(n) = H(hash(n-1) ‖ payload); GET /ledger/verify validates the chain from genesis to present",
        "Append-only ledger enforced by a PostgreSQL trigger (UPDATE/DELETE/TRUNCATE blocked)",
        "SELECT ... FOR UPDATE row lock on the mandate — prevents concurrent requests from racing past the limit",
        "Dual-layer idempotency: nonce (replay) + Idempotency-Key header (network retries)",
        "LLM risk scoring returns LOW / MEDIUM / HIGH; a 3s timeout falls back to a deterministic mock so nothing deadlocks"
      ]
    },
    technicalDetails: {
      problem: {
        tr: "Otonom AI ajanlarına ödeme yetkisi vermenin iki kötü seçeneği var: ya şirket kartını tamamen teslim etmek (ajan hacklenirse veya halüsinasyon görürse şirket batar), ya da her işlemde insana onay sordurmak (ajanın hızını ve otonomisini yok eder).",
        en: "Delegating payment authority to autonomous AI agents leaves two bad options: hand over the company card entirely (one hack or hallucination and the company is drained), or ask a human to approve every transaction (killing the agent's speed and autonomy)."
      },
      solution: {
        tr: "Ajan ile şirket kasası arasına duran bir denetim katmanı: doğal dil kuralları kriptografik yetki belgesine derlenir, ajan her talebi kendi özel anahtarıyla imzalar, sistem imzayı ve kuralları doğrular, AI davranış anomalisi arar ve karar ne olursa olsun hash-zincirli değişmez deftere yazılır.",
        en: "A control layer sitting between the agent and the company treasury: natural-language rules compile into cryptographic mandates, the agent signs every request with its private key, the system verifies signature and rules, an AI looks for behavioral anomalies, and every decision — whatever it is — lands in a hash-linked immutable ledger."
      },
      engineeringNote: {
        tr: "AI asla tek başına onay veremez; yalnızca işlemi durdurabilir (HIGH) veya insana eskalasyon yapabilir (MEDIUM). Böylece LLM'in halüsinasyonu para kaybına dönüşemez. Anthropic API erişilemezse sistem deterministik mock'a düşerek çalışmaya devam eder.",
        en: "The AI can never approve on its own — it can only block a transaction (HIGH) or escalate to a human (MEDIUM), so an LLM hallucination can never turn into lost money. If the Anthropic API is unreachable, the system falls back to a deterministic mock and keeps running."
      },
      flow: [
        { stepTitle: { tr: "Mandate Derleme", en: "Mandate Compilation" }, stepDesc: { tr: "Patronun doğal dilde yazdığı kural (limit, süre, kategori) LLM ile yapılandırılmış yetki belgesine çevrilir.", en: "The manager's natural-language rule (limit, window, category) is compiled by an LLM into a structured mandate record." } },
        { stepTitle: { tr: "Kriptografik Doğrulama", en: "Cryptographic Verification" }, stepDesc: { tr: "Ajanın Ed25519 imzası, JWS scoped token'ı ve nonce'u doğrulanır; 60 sn'lik replay penceresi dışındaki talepler reddedilir.", en: "The agent's Ed25519 signature, JWS scoped token, and nonce are verified; requests outside the 60s replay window are rejected." } },
        { stepTitle: { tr: "Kural Motoru + AI Bekçisi", en: "Rule Engine + AI Warden" }, stepDesc: { tr: "Limit, kategori ve süre kontrolü deterministik çalışır; ardından LLM davranış anomalisi arar (LOW / MEDIUM / HIGH).", en: "Limit, category, and validity checks run deterministically; then an LLM scans for behavioral anomalies (LOW / MEDIUM / HIGH)." } },
        { stepTitle: { tr: "Hash-Zincirli Defter", en: "Hash-Linked Ledger" }, stepDesc: { tr: "Karar append-only deftere yazılır (DB trigger korumalı); SSE ile panele canlı akar, /ledger/verify zinciri doğrular.", en: "The decision is written to an append-only ledger (guarded by a DB trigger), streamed live to the panel over SSE, and validated by /ledger/verify." } }
      ],
      highlights: {
        tr: ["Ed25519 İmza & Scoped Token", "Kural Motoru + AI Risk Bekçisi", "Hash-Zincirli Değişmez Defter", "Doğal Dilden Yetki Belgesi"],
        en: ["Ed25519 Signatures & Scoped Tokens", "Rule Engine + AI Risk Warden", "Hash-Linked Immutable Ledger", "Natural Language to Mandate"]
      }
    }
  },
  {
    id: 13,
    title: "Kıvılcım",
    category: { tr: "Uydu Verisi & Web", en: "Satellite Data & Web" },
    year: "2026",
    role: { tr: "Full-Stack Geliştirici", en: "Full-Stack Developer" },
    description: {
      tr: "NASA FIRMS uydu verisiyle Türkiye'deki orman yangını tespitlerini harita üzerinde gösteren izleme paneli. Her yer için yakındaki tespitleri, verinin ne kadar taze olduğunu ve yangın havası indeksini sunar; geçmiş yangınların öncesi/sonrası uydu görüntüsünü karşılaştırır.",
      en: "A wildfire monitoring dashboard that shows fire detections across Turkey on a map using NASA FIRMS satellite data. For any place it lists nearby detections, how fresh the data is, and a fire-weather index, and compares before/after satellite imagery of past fires."
    },
    tags: ["Python", "FastAPI", "SQLAlchemy", "SQLite", "Leaflet", "NASA FIRMS", "Open-Meteo", "Telegram Bot", "Docker"],
    link: "https://github.com/beyuphan/kivilcim",
    impact: {
      tr: [
        "\"Yakınımda yangın var mı?\" sorusuna Türkçe, sade bir cevap verir; uydunun neyi göremeyeceğini de açıkça söyler.",
        "Telegram botu ile seçilen konumun 3-50 km çevresinde yeni yangın görülünce mesaj gönderir (hesap yok, /durdur ile veri silinir).",
        "2016'ya kadar uzanan arşivden geçmiş yangınların öncesi/sonrası görüntüsünü ve gün gün yayılımını gösterir."
      ],
      en: [
        "Answers \"is there a fire near me?\" in plain Turkish and states clearly what the satellites cannot see.",
        "A Telegram bot messages you when a new fire appears 3–50 km from a chosen location (no accounts; /durdur deletes your data).",
        "Shows before/after imagery and day-by-day spread of past fires from an archive reaching back to 2016."
      ]
    },
    architecture: {
      tr: "Python 3.11 + FastAPI + SQLAlchemy (SQLite) tek süreçte hem siteyi hem 30 dakikalık veri çekme zamanlayıcısını çalıştırır. Harita Leaflet ile, uydu katmanları NASA GIBS (Sentinel-2/Landsat/VIIRS) ile, hava verisi Open-Meteo ile gelir. PWA olarak kurulabilir; salt-okunur ücretsiz bir API ve 81 il için SEO sayfaları sunar. Docker ve CI ile yayına hazırdır.",
      en: "Python 3.11 + FastAPI + SQLAlchemy (SQLite) runs both the site and a 30-minute ingest scheduler in a single process. The map uses Leaflet, satellite layers come from NASA GIBS (Sentinel-2/Landsat/VIIRS), and weather from Open-Meteo. It installs as a PWA, exposes a free read-only API, and serves SEO pages for all 81 provinces. Ready to ship with Docker and CI."
    },
    algorithms: {
      tr: [
        "Tespitleri yere göre gruplayıp ısı gücüne göre boyutlandırma; düşük güvenli ve neredeyse her gün tespit veren noktalar (fabrika, rafineri, çöplük) boş halka olarak ayrı gösterilir",
        "Hava indeksi: nem, rüzgâr ve son 72 saatlik yağışın sıcaklıkla ölçeklenmiş skoru; geçmiş tespitlere karşı ölçüldü (AUC ≈ 0.7), yayılım tahmini olarak sunulmaz",
        "Uydu geçiş modeli: herkese açık yörünge verisinden tarama zamanlarının tahmini; 600 tespitin %99'u modellenen şeridin içine düştü",
        "Rüzgâr geometrisi: en yakın tespit ile konum arasında rüzgârın yönü (yangından sana / çapraz / uzağa) hesabı",
        "Olay çıkarımı: arşivdeki tespitlerden geçmiş yangınları bulup saklama, her 375 m piksel ilk göründüğü günde çizilerek gün gün yayılım oynatıcısı",
        "Öncesi/sonrası karşılaştırma: bulutsuz gün seçimi ile 30 m Sentinel-2/Landsat görüntüleri, kaynak ve bulut oranıyla etiketli"
      ],
      en: [
        "Groups detections by place and sizes them by heat power; low-confidence and near-daily detections (factories, refineries, landfills) are drawn separately as hollow rings",
        "Weather index: humidity, wind, and 72 h of rain scaled by temperature; measured against past detections (AUC ≈ 0.7) and never presented as a spread forecast",
        "Satellite pass model: scan times predicted from public orbit data; 99% of 600 detections fell inside the modeled swath",
        "Wind geometry: compares wind direction with the nearest detection (fire toward you / across / away)",
        "Event extraction: finds past fires in the archive and stores them; each 375 m pixel is drawn on the day it first appears for a day-by-day spread player",
        "Before/after comparison: cloud-free day selection with 30 m Sentinel-2/Landsat imagery, labeled with source and cloud cover"
      ]
    },
    technicalDetails: {
      problem: {
        tr: "NASA FIRMS aynı tespitleri ham noktalar ve İngilizce terimlerle gösteriyor; orman idaresinin araçları ise itfaiyeciler için yapılmış. Köyde, tarlada ya da tatilde yaşayan biri için sade ve dürüst bir cevap yok.",
        en: "NASA FIRMS shows the same detections as raw dots with English terms, and forestry tools are made for firefighters. Someone living, farming, or holidaying near wooded land has no plain, honest answer."
      },
      solution: {
        tr: "Tespitleri yere göre özetleyen, verinin tazeliğini ve uydunun o bölgeyi gerçekten tarayıp taramadığını gösteren Türkçe bir panel. Telegram uyarıları, paylaşılabilir yangın kartları ve yazdırılabilir rapor ekler.",
        en: "A Turkish dashboard that summarizes detections by place and shows data freshness and whether a satellite actually scanned the area. It adds Telegram alerts, shareable fire cards, and a printable report."
      },
      engineeringNote: {
        tr: "Sistem neyi bilmediğini söyler: iki zaman ayrı gösterilir (verinin çekilme zamanı ve uydunun gözlem zamanı), hava indeksi \"deneysel\" etiketlidir ve ölçüm sonuçları /methodology sayfasında yayımlanır. Resmi bir uyarı sistemi değildir; acil durumda 112.",
        en: "The system states what it does not know: two timestamps are shown separately (fetch time and satellite observation time), the weather index is labeled experimental, and measurement results are published at /methodology. It is not an official warning system; in an emergency call 112."
      },
      flow: [
        { stepTitle: { tr: "Veri Çekme", en: "Ingest" }, stepDesc: { tr: "Zamanlayıcı her 30 dakikada NASA FIRMS tespitlerini çeker; bilgisayar kapalıyken kaçırılanları yakalar.", en: "A scheduler pulls NASA FIRMS detections every 30 minutes and catches up after downtime." } },
        { stepTitle: { tr: "Zenginleştirme", en: "Enrichment" }, stepDesc: { tr: "Bölgeye göre gruplama, Open-Meteo hava verisi, rüzgâr geometrisi ve uydu tarama geçmişi eklenir.", en: "Grouping by region, Open-Meteo weather, wind geometry, and satellite scan history are added." } },
        { stepTitle: { tr: "Harita & Arama", en: "Map & Search" }, stepDesc: { tr: "Leaflet haritasında il/ilçe araması, konumum ve paylaşılabilir bağlantılarla yakın tespitler gösterilir.", en: "Nearby detections are shown on a Leaflet map with province/district search, geolocation, and shareable links." } },
        { stepTitle: { tr: "Uyarı & Rapor", en: "Alerts & Report" }, stepDesc: { tr: "Telegram bildirimi, yangın kartı (öncesi/sonrası) ve tek sayfalık yazdırılabilir rapor üretilir.", en: "Telegram notifications, before/after fire cards, and a one-page printable report are generated." } }
      ],
      highlights: {
        tr: ["NASA FIRMS Uydu Verisi", "Öncesi/Sonrası Uydu Karşılaştırma", "Telegram Uyarı Botu", "Dürüst Belirsizlik Gösterimi"],
        en: ["NASA FIRMS Satellite Data", "Before/After Satellite Comparison", "Telegram Alert Bot", "Honest Uncertainty Display"]
      }
    }
  },
  {
    id: 14,
    title: "Ash n Seed",
    category: { tr: "Oyun Geliştirme", en: "Game Development" },
    year: "2026",
    role: { tr: "Oyun Geliştirici", en: "Game Developer" },
    description: {
      tr: "Belediye başkanı olarak otuz günde fabrika dumanıyla boğulan Karatepe'yi yeniden yeşertmeye çalıştığın, 2 boyutlu piksel sanatlı şehir yönetimi oyunu. COP31 Oyun Hackathonu için Godot ile geliştirildi.",
      en: "A 2D pixel-art city management game where, as mayor, you have thirty days to make the smog-choked town of Karatepe green again. Built with Godot for the COP31 Game Hackathon."
    },
    tags: ["Godot 4", "GDScript", "Pixel Art", "Game Design", "Hackathon"],
    link: "https://github.com/beyuphan/ash-n-seed",
    demoLink: "https://beyuphan.itch.io/ashnseed",
    impact: {
      tr: [
        "Her gün masa (karar kartları), saha (ağaç dikme, çöp toplama, bacalara filtre) ve gazete (kararların sonucu) olmak üzere üç parçadan oluşur.",
        "Kelebek etkisi: bugünkü karar günler sonra geri döner (kömür dağıtırsan astım salgını, çöpü ormana yığarsan zehirli su).",
        "Windows sürümü GitHub Releases'te, web sürümü itch.io'da yayında; Türkçe ve İngilizce tanıtım videosu hazırlandı."
      ],
      en: [
        "Each day has three parts: the desk (decision cards), the field (planting trees, collecting litter, fitting chimney filters), and the newspaper (the consequences of your choices).",
        "Butterfly effect: today's decision comes back days later (hand out coal and get an asthma outbreak; dump trash in the forest and get toxic water).",
        "A Windows build is on GitHub Releases and a web build is on itch.io; Turkish and English trailers were produced."
      ]
    },
    architecture: {
      tr: "Godot 4 projesi; sahneler (intro, ana menü, oyun, arayüz) ve GDScript betikleri. Karakterler ve masa/saha görünümleri kodla çizilir (character_painter, desk_surface vb.); günlük raporlar, akşam gazetesi ve oyun sonu özetleri ayrı betiklerde. Windows ve web (HTML5) dışa aktarımı.",
      en: "A Godot 4 project with scenes (intro, main menu, game, UI) and GDScript scripts. Characters and the desk/field views are drawn in code (character_painter, desk_surface, etc.); daily reports, the evening paper, and end-game summaries live in separate scripts. Exports to Windows and web (HTML5)."
    },
    algorithms: {
      tr: [
        "Kasa, Halk ve Çevre dengesini birlikte oynatan karar kartı sistemi",
        "Gecikmeli sonuç (kelebek etkisi) mekaniği: kararlar sonraki günlerde olay olarak geri döner",
        "Dört mini oyun: portakal yakalama, geri dönüşüm ayıklama, köstebek kovma, sıra hafızası",
        "Günün olaylarından otomatik üretilen akşam gazetesi manşetleri",
        "Sahne kodu ile prosedürel karakter ve ortam çizimi"
      ],
      en: [
        "A decision-card system that moves Treasury, Public, and Environment balances together",
        "A delayed-consequence (butterfly effect) mechanic: decisions return as events in later days",
        "Four mini-games: catch oranges, sort recycling, chase moles, remember the sequence",
        "Evening-newspaper headlines generated from the day's events",
        "Procedural character and environment drawing in code"
      ]
    },
    technicalDetails: {
      problem: {
        tr: "İklim ve çevre temasını, ders verir gibi değil oynarken hissettiren bir oyuna çevirmek; hackathon süresinde oynanabilir ve cilalı bir bütün çıkarmak.",
        en: "Turning a climate and environment theme into something players feel while playing rather than a lecture, and shipping a playable, polished whole within a hackathon."
      },
      solution: {
        tr: "Seçimlerin hem bugünü hem yarını etkilediği otuz günlük bir döngü; mizahi gazete diliyle sonuçları göstermek ve mini oyunlarla sahaya çeşitlilik katmak.",
        en: "A thirty-day loop where choices affect both today and tomorrow, with a humorous newspaper voice to surface consequences and mini-games to vary the field gameplay."
      },
      engineeringNote: {
        tr: "Windows sürümü en yüksek performansı verir; web sürümü tarayıcı sınırları yüzünden daha düşük performansla çalışır. Üçüncü taraf içeriklerin kaynakları ve lisansları CREDITS.md dosyasında tutulur.",
        en: "The Windows build runs best; the web build is slower because of browser limits. Third-party assets and their licenses are tracked in CREDITS.md."
      },
      flow: [
        { stepTitle: { tr: "Masa", en: "Desk" }, stepDesc: { tr: "Karar kartları gelir; her seçim Kasa, Halk ve Çevre dengesini oynatır.", en: "Decision cards arrive; each choice shifts the Treasury, Public, and Environment balance." } },
        { stepTitle: { tr: "Saha", en: "Field" }, stepDesc: { tr: "Haritada ağaç dikilir, çöp toplanır, bacalara filtre takılır, komşuların istekleri mini oyunlarla çözülür.", en: "Plant trees, collect litter, fit chimney filters, and solve neighbors' requests through mini-games." } },
        { stepTitle: { tr: "Gazete", en: "Newspaper" }, stepDesc: { tr: "Akşam Karatepe Postası kararların sonucunu manşetle gösterir.", en: "In the evening, the Karatepe Post headlines the consequences of your decisions." } },
        { stepTitle: { tr: "Kelebek Etkisi", en: "Butterfly Effect" }, stepDesc: { tr: "Eski kararlar günler sonra yeni olaylar olarak geri döner.", en: "Earlier decisions return days later as new events." } }
      ],
      highlights: {
        tr: ["Godot 4 ile 2D Piksel Oyun", "Kelebek Etkisi Mekaniği", "4 Mini Oyun", "Windows + Web Yayını"],
        en: ["2D Pixel Game in Godot 4", "Butterfly-Effect Mechanic", "4 Mini-Games", "Windows + Web Release"]
      }
    }
  },
  {
    id: 15,
    title: "SimTrack",
    category: { tr: "Masaüstü & Bilgisayarlı Görü", en: "Desktop & Computer Vision" },
    year: "2026",
    role: { tr: "Geliştirici", en: "Developer" },
    description: {
      tr: "Web kamerasıyla kafa takibi: IR şapka yok, reflektör yok. Başlat'a bas, oyunu aç. Kafanın duruşunu hesaplayıp Euro Truck Simulator 2, American Truck Simulator, MSFS, DCS gibi TrackIR/FreeTrack destekleyen oyunlara iletir.",
      en: "Head tracking with a plain webcam: no IR clip, no reflector. Press Start and play. It computes head pose and feeds TrackIR/FreeTrack-compatible games such as Euro Truck Simulator 2, American Truck Simulator, MSFS, and DCS."
    },
    tags: ["Rust", "Tauri 2", "React", "TypeScript", "ONNX Runtime", "Computer Vision", "Windows"],
    link: "https://github.com/beyuphan/simtrack",
    impact: {
      tr: [
        "Pahalı TrackIR donanımı ve karmaşık opentrack ayarı yerine tek düğmeli, ücretsiz bir alternatif sunar.",
        "ETS2 ve ATS'de kafa takibi ayarı kapalıysa yedek alarak kendisi açar; oyun bağlanınca adını arayüzde gösterir.",
        "Tek dosyalık SimTrack.exe, kurulum sihirbazı ve MSI paketiyle MIT lisanslı açık kaynak olarak yayınlandı."
      ],
      en: [
        "Offers a free, one-button alternative to costly TrackIR hardware and fiddly opentrack setup.",
        "Enables head tracking in ETS2 and ATS itself (with a backup) if it is off, and shows the connected game's name in the UI.",
        "Released as open source under MIT with a single-file SimTrack.exe, an installer, and an MSI package."
      ]
    },
    architecture: {
      tr: "Tauri 2 uygulaması: React + Vite + TypeScript arayüzü, Rust çekirdeği. Kamera Windows Media Foundation (nokhwa) ile okunur, iki ONNX modeli ONNX Runtime ile çalışır, sonuç 120 Hz motor döngüsünde filtrelenip FreeTrack paylaşımlı belleğine yazılır. Modeller ilk açılışta (~190 MB) doğrulamalı indirilir.",
      en: "A Tauri 2 app: a React + Vite + TypeScript UI with a Rust core. The camera is read via Windows Media Foundation (nokhwa), two ONNX models run on ONNX Runtime, and the result is filtered in a 120 Hz engine loop and written to FreeTrack shared memory. Models (~190 MB) are downloaded and verified on first launch."
    },
    algorithms: {
      tr: [
        "İki aşamalı ONNX hattı: head-localizer yüzü bulur, head-pose kırpılmış yüzden dönme (kuaterniyon) ve konum/boyut çıkarır; kare başına ~10 ms",
        "One-Euro (hıza duyarlı) filtre: kafa dururken pürüzsüz, hızlı dönerken tepkili",
        "Ölü bölge, eğri ve hassasiyet eşlemesi: küçük hareketler oyuna geçmez, görüntü titremez",
        "Histogram genişletme + gama ile düşük ışıkta kamera parlaklığı düzeltme",
        "FT_SharedMem paylaşımlı belleğine yazım; NPClient64/freetrackclient64 DLL yollarını takip süresince kayıt defterine kaydedip durunca eski değerleri geri yükleme"
      ],
      en: [
        "A two-stage ONNX pipeline: head-localizer finds the face, head-pose outputs rotation (quaternion) and position/size from the cropped face; ~10 ms per frame",
        "One-Euro (speed-adaptive) filter: smooth when the head is still, responsive during fast turns",
        "Dead zone, response curve, and sensitivity mapping: small movements don't reach the game, so the view doesn't jitter",
        "Histogram stretching + gamma to correct camera brightness in low light",
        "Writes to FT_SharedMem shared memory; registers NPClient64/freetrackclient64 DLL paths in the registry while tracking and restores the previous values on stop"
      ]
    },
    technicalDetails: {
      problem: {
        tr: "Simülasyon oyunlarında kafa takibi için iki seçenek var: iyi çalışan ama pahalı TrackIR donanımı ya da ücretsiz ama arayüzü karmaşık, ince ayarı zahmetli opentrack.",
        en: "Head tracking in sim games has two options: TrackIR, which works well but is expensive, or opentrack, which is free but has a complex UI and tedious tuning."
      },
      solution: {
        tr: "opentrack'in sinir ağı modellerini Rust'a taşıyan, akıllı varsayılanlara sahip tek bir küçük program: Başlat'a basılır, oyuna otomatik bağlanır.",
        en: "A single small program that ports opentrack's neural-network models to Rust, with smart defaults: press Start and it connects to the game automatically."
      },
      engineeringNote: {
        tr: "Oyunlar TrackIR verisini UDP'den değil, kendi süreçlerine yükledikleri DLL üzerinden paylaşımlı bellekten okur. Bu yüzden SimTrack kayıt defterini yalnızca takip çalışırken değiştirir ve durunca önceki TrackIR/opentrack yolunu geri yazar. Kamera görüntüsü cihazdan çıkmaz.",
        en: "Games read TrackIR data from shared memory through a DLL loaded into their own process, not over UDP. So SimTrack modifies the registry only while tracking runs and restores any previous TrackIR/opentrack path on stop. Camera frames never leave the device."
      },
      flow: [
        { stepTitle: { tr: "Kamera", en: "Camera" }, stepDesc: { tr: "Windows Media Foundation ile 640×480 kare okunur, parlaklık düzeltilir.", en: "640×480 frames are read via Windows Media Foundation and brightness is corrected." } },
        { stepTitle: { tr: "Yüz & Duruş", en: "Face & Pose" }, stepDesc: { tr: "ONNX Runtime ile yüz bulunur, kırpılmış yüzden dönme ve konum çıkarılır.", en: "ONNX Runtime locates the face and extracts rotation and position from the crop." } },
        { stepTitle: { tr: "Filtre & Eşleme", en: "Filter & Mapping" }, stepDesc: { tr: "One-Euro filtre, ölü bölge ve eğri uygulanır (120 Hz).", en: "A One-Euro filter, dead zone, and curve are applied (120 Hz)." } },
        { stepTitle: { tr: "Oyuna Çıkış", en: "Game Output" }, stepDesc: { tr: "Sonuç FreeTrack paylaşımlı belleğine yazılır, oyun DLL üzerinden okur.", en: "The result is written to FreeTrack shared memory and the game reads it via the DLL." } }
      ],
      highlights: {
        tr: ["Rust + Tauri 2", "ONNX ile Gerçek Zamanlı Duruş Tahmini", "TrackIR / FreeTrack Uyumu", "MIT Lisanslı Açık Kaynak"],
        en: ["Rust + Tauri 2", "Real-Time Pose Estimation with ONNX", "TrackIR / FreeTrack Compatible", "MIT-Licensed Open Source"]
      }
    }
  },
  {
    id: 16,
    title: "Mısra",
    category: { tr: "Full-Stack / Mobil Web (PWA)", en: "Full-Stack / Mobile Web (PWA)" },
    year: "2026",
    role: { tr: "Full-Stack Geliştirici", en: "Full-Stack Developer" },
    description: {
      tr: "Her gün iki kez bir şiir sunan, mısra mısra yıldızlanabilen, listelenebilen ve paylaşılabilen sosyal şiir uygulaması. Şiirleri yapay zekâ seçer, YouTube'dan okuma videosu bulur ve abonelere web push ile gönderir.",
      en: "A social poetry app that serves a poem twice a day, where readers star, list, and share individual lines. AI picks the poems, finds a reading on YouTube, and sends them to subscribers via web push."
    },
    tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "Supabase", "PostgreSQL", "Deno Edge Functions", "pg_cron", "Groq", "YouTube Data API", "Web Push", "PWA", "Remotion"],
    demoLink: "https://siir-eta.vercel.app",
    impact: {
      tr: [
        "Sabah ve akşam olmak üzere günde iki şiiri otomatik seçip yayınlar; şiir, okuma videosu ve bildirim insan müdahalesi olmadan hazırlanır.",
        "Okuyucular sadece şiiri değil tek bir mısrayı yıldızlar, vurgular, karta çevirip paylaşır; profil, takip, liste ve yorum sistemiyle sosyal bir okuma topluluğu kurar.",
        "Eksik kalan gün olmasın diye teslimat kayıtları, kilitler ve Telegram alarmı ile güvenilirliği izlenir.",
        "Instagram ve Reels için Remotion ile otomatik üretilen \"Şair Dosyası\" carousel'leri ve \"Divan'dan DM'e\" videolarıyla büyüme planı koda bağlanmıştır."
      ],
      en: [
        "Automatically picks and publishes two poems a day (morning and evening); the poem, a reading video, and the notification are prepared without human intervention.",
        "Readers star, highlight, turn into cards, and share single lines, not just whole poems; profiles, follows, lists, and comments make it a social reading community.",
        "Delivery runs, locks, and Telegram alerts monitor reliability so no day is missed.",
        "The growth plan for Instagram and Reels is wired into code: Remotion generates \"Poet File\" carousels and \"From Divan to DM\" videos."
      ]
    },
    architecture: {
      tr: "Next.js 16 (App Router) + React 19 + Tailwind v4 arayüzü, Supabase üzerinde PostgreSQL, Auth ve satır düzeyinde yetkilendirme. Günlük kürasyon bir Deno Supabase Edge Function'dır (daily-curation); pg_cron + pg_net ile tetiklenir, CRON_SECRET ile korunur. Groq LLM şiiri seçer, YouTube Data API v3 okuma videosunu bulur, web-push (VAPID) bildirimi gönderir. PWA olarak kurulur (service worker, manifest, çevrimdışı sayfa). 8 SQL migration ile şema: poems, notes, favorites, line_highlights, reading_log, delivery_runs, profiles, poem_stars, verse_stars, lists, list_items, follows, reports, poem_comments (+ sürümleri), push_subscriptions. Paylaşım kartları /api/card ile üretilir. Remotion tabanlı ayrı bir video/ projesi sosyal medya içeriği üretir.",
      en: "A Next.js 16 (App Router) + React 19 + Tailwind v4 frontend on Supabase for PostgreSQL, Auth, and row-level authorization. Daily curation is a Deno Supabase Edge Function (daily-curation) triggered by pg_cron + pg_net and guarded by CRON_SECRET. A Groq LLM picks the poem, the YouTube Data API v3 finds a reading, and web-push (VAPID) sends the notification. It installs as a PWA (service worker, manifest, offline page). The schema spans 8 SQL migrations: poems, notes, favorites, line_highlights, reading_log, delivery_runs, profiles, poem_stars, verse_stars, lists, list_items, follows, reports, poem_comments (+ versions), push_subscriptions. Share cards are rendered by /api/card. A separate Remotion-based video/ project produces social content."
    },
    algorithms: {
      tr: [
        "Çok adımlı LLM kürasyonu: önce yalnızca şair seçtirilir (modelin hafızasının güvenilir olduğu yer), sonra o şairin doğrulanmış şiir listesinden çoktan seçmeli bir şiir seçtirilir; açık uçlu üretimdeki uydurma başlık sorunu böyle çözüldü. İlk sürümdeki tek büyük tool-calling sohbeti Groq dakikalık token sınırına (TPM) takıldığı için terk edildi",
        "YouTube eşleştirme: aramadan gelen adaylar süre filtresinden geçer; bir şiir okumasının makul süresini aşan videolar (belgesel, derleme) elenir, durma kelimeleriyle sorgular temizlenir",
        "Teslimat güvenilirliği: sabah/akşam slotları, her slot için kürasyon ve push dakikaları (SCHEDULE), 360 dakikalık push penceresi, 90 dakika sonra \"geç başlık\" alarmı, delivery_runs tablosunda kilit (kürasyon için 4 dk, push için 5 dk) ve tek seferlik Telegram alarmı (alertOnce)",
        "Yetkilendirme: Edge Function çağrısı ya service-role Bearer ya da x-cron-secret başlığıyla yapılabilir; cron_secret_auth migration'ı ile cron çağrısının yetkilendirmesi veritabanı tarafında kurulur",
        "İstanbul saatine göre günün tarihi ve slot hesabı, yeniden denemelerde aynı şiiri iki kez yayınlamamak için served_date + slot tekilliği",
        "Mısra düzeyinde etkileşim: verse_stars ve line_highlights ile tek dize yıldızlama/vurgulama, vurgulananlardan paylaşım kartı üretimi (2 kat çözünürlüklü PNG)",
        "Yorumların düzenleme geçmişi poem_comment_versions tablosunda tutulur; reports tablosu ve moderasyon düğmeleri ile şikâyet akışı",
        "Remotion ile 2160×2700 carousel (Şair Dosyası) ve 9:16 video üretimi, veri JSON'dan (sair-dosyasi.json) okunur"
      ],
      en: [
        "Multi-step LLM curation: first only a poet is chosen (where the model's memory is reliable), then a poem is picked multiple-choice from that poet's verified poem list; this fixed the invented-title problem of open-ended generation. The first version, one long tool-calling chat, was dropped because it hit Groq's per-minute token limit (TPM)",
        "YouTube matching: candidates from search go through a duration filter; videos exceeding a plausible length for a single poem reading (documentaries, compilations) are dropped, and queries are cleaned of stopwords",
        "Delivery reliability: morning/evening slots, per-slot curate and push minutes (SCHEDULE), a 360-minute push window, a late-title alert after 90 minutes, locks in delivery_runs (4 min for curation, 5 min for push), and one-shot Telegram alerts (alertOnce)",
        "Authorization: the Edge Function accepts either a service-role Bearer token or an x-cron-secret header; the cron_secret_auth migration sets up cron-call authorization on the database side",
        "Day and slot computed in Istanbul time; uniqueness on served_date + slot prevents publishing the same poem twice on retries",
        "Line-level engagement: verse_stars and line_highlights for starring/highlighting single lines, and share cards built from highlights (2x resolution PNG)",
        "Comment edit history is kept in poem_comment_versions; a reports table and moderation buttons provide a reporting flow",
        "Remotion renders 2160×2700 carousels (Poet File) and 9:16 videos from JSON data (sair-dosyasi.json)"
      ]
    },
    technicalDetails: {
      problem: {
        tr: "Şiir uygulamaları ya statik bir arşivdir ya da sosyal medyada parçalanmış mısralar. Düzenli okuma alışkanlığı kuran, mısra düzeyinde etkileşimi olan ve kendi kendine içerik üretip büyüyebilen bir ürün yok. Tek kişilik ekip için de her gün elle şiir seçip bildirim atmak sürdürülebilir değil.",
        en: "Poetry apps are either static archives or fragments scattered across social media. There is no product that builds a daily reading habit, supports line-level engagement, and can produce its own content to grow. For a one-person team, choosing a poem and sending a notification by hand every day is unsustainable."
      },
      solution: {
        tr: "Günde iki kez çalışan otomatik bir kürasyon hattı (LLM ile şiir seçimi, YouTube okuma videosu, web push) ve üstünde mısra mısra yıldızlama, liste, takip, yorum, günlük ve arşiv takvimi sunan bir PWA. Aynı veriden sosyal medya kartları ve videoları üreten Remotion hattı büyümeyi besler.",
        en: "An automated curation pipeline that runs twice a day (LLM poem selection, YouTube reading, web push) with a PWA on top offering line-by-line starring, lists, follows, comments, a journal, and an archive calendar. A Remotion pipeline turns the same data into social cards and videos to fuel growth."
      },
      engineeringNote: {
        tr: "LLM'in en güvenilmez olduğu yer şiir başlığını ve metnini hatırlamak; bu yüzden modele serbest üretim yerine sınırlı bir listeden seçim yaptırıyorum. Bir otomasyonun asıl riski sessizce bozulmasıdır, bu yüzden her slot için kilit, süre penceresi ve tek seferlik alarm tuttum.",
        en: "The LLM is least reliable at recalling poem titles and text, so instead of free generation I make it choose from a bounded list. The real risk of automation is silent failure, so every slot has a lock, a time window, and a one-shot alert."
      },
      flow: [
        { stepTitle: { tr: "Zamanlama", en: "Scheduling" }, stepDesc: { tr: "pg_cron + pg_net, İstanbul saatine göre sabah ve akşam slotları için Edge Function'ı çağırır; çağrı CRON_SECRET ile yetkilendirilir.", en: "pg_cron + pg_net call the Edge Function for the morning and evening slots in Istanbul time; the call is authorized with CRON_SECRET." } },
        { stepTitle: { tr: "Kürasyon", en: "Curation" }, stepDesc: { tr: "Groq LLM önce şairi, sonra şairin listesinden şiiri seçer; YouTube Data API ile süre filtreli okuma videosu bulunur ve poems tablosuna yazılır.", en: "A Groq LLM picks the poet, then a poem from that poet's list; the YouTube Data API finds a duration-filtered reading, and the result is written to the poems table." } },
        { stepTitle: { tr: "Bildirim", en: "Notification" }, stepDesc: { tr: "VAPID ile web push tüm abonelere gönderilir; başarısızlıklar ve gecikmeler delivery_runs ve Telegram alarmıyla izlenir.", en: "Web push is sent to all subscribers via VAPID; failures and delays are tracked through delivery_runs and Telegram alerts." } },
        { stepTitle: { tr: "Okuma & Etkileşim", en: "Reading & Engagement" }, stepDesc: { tr: "Okuyucu şiiri açar, mısra yıldızlar/vurgular, listeye ekler, not alır, yorum yazar; vurgulanan mısralar paylaşım kartına dönüşür.", en: "Readers open the poem, star or highlight lines, add to lists, take notes, and comment; highlighted lines become share cards." } },
        { stepTitle: { tr: "Büyüme", en: "Growth" }, stepDesc: { tr: "Remotion, şair dosyası carousel'lerini ve Divan'dan DM'e videolarını üretir; her platform için ayrı UTM'li bağlantılar kullanılır.", en: "Remotion renders Poet File carousels and From-Divan-to-DM videos; each platform gets its own UTM-tagged links." } }
      ],
      highlights: {
        tr: ["Otomatik LLM Kürasyon Hattı", "Mısra Düzeyinde Sosyal Etkileşim", "Web Push + PWA", "Remotion ile İçerik Üretimi"],
        en: ["Automated LLM Curation Pipeline", "Line-Level Social Engagement", "Web Push + PWA", "Content Generation with Remotion"]
      }
    }
  },
  {
    id: 2,
    title: "JulardzijaSmile",
    category: { tr: "Full-Stack Ekosistem", en: "Full-Stack Ecosystem" },
    year: "2025",
    role: { tr: "Full-Stack Mühendis", en: "Full-Stack Engineer" },
    award: { tr: "🏆 Hackathon Finalisti", en: "🏆 Hackathon Finalist" },
    description: {
      tr: "Saç ekim süreçleri için 5 farklı açıdan görsel standardizasyon sağlayan, NestJS ve Flutter tabanlı uçtan uca klinik yönetim platformu.",
      en: "An end-to-end clinical management platform built with NestJS and Flutter that standardizes hair-transplant imaging from 5 different angles."
    },
    tags: ["NestJS", "Flutter", "Prisma", "PostgreSQL", "S3", "Docker", "WebSockets", "React"],
    link: "https://github.com/beyuphan/JulardzijaSmile",
    impact: {
      tr: [
        "Konsültasyon fotoğraflarını 5 sabit açıda standartlaştırarak analiz tutarlılığı sağlar.",
        "Doktor ve hasta arasında gerçek zamanlı iletişim sunar.",
        "Mikroservis standardında, Docker ile ölçeklenebilir kurulum."
      ],
      en: [
        "Standardizes consultation photos across 5 fixed angles for consistent analysis.",
        "Provides real-time doctor–patient communication.",
        "Scalable, microservice-standard deployment with Docker."
      ]
    },
    architecture: {
      tr: "NestJS (Gateway + REST) + Prisma + PostgreSQL backend; React admin paneli; Flutter mobil istemci; S3 uyumlu görsel depolama; tüm servisler Docker Compose ile konteynerize; gerçek zamanlı için WebSocket Gateway.",
      en: "NestJS (Gateway + REST) + Prisma + PostgreSQL backend; a React admin panel; a Flutter mobile client; S3-compatible image storage; all services containerized with Docker Compose; a WebSocket Gateway for real-time features."
    },
    algorithms: {
      tr: [
        "Photo Wizard: kamera overlay'leri ile 5 sabit açıda hizalı görüntü yakalama",
        "WebSocket Gateway ile gerçek zamanlı doktor-hasta mesajlaşma",
        "Prisma ORM ile ilişkisel randevu/timeline modeli",
        "S3 pre-signed upload ile asenkron görsel yükleme"
      ],
      en: [
        "Photo Wizard: aligned capture across 5 fixed angles using camera overlays",
        "Real-time doctor–patient messaging via a WebSocket Gateway",
        "Relational appointment/timeline model with Prisma ORM",
        "Asynchronous image upload via S3 pre-signed URLs"
      ]
    },
    technicalDetails: {
      problem: {
        tr: "Saç ekimi öncesi konsültasyonlarda, hastaların gönderdiği fotoğrafların farklı açılardan ve kalitelerde olması nedeniyle analiz süreçlerinin standardize edilememesi.",
        en: "In pre-hair-transplant consultations, analysis cannot be standardized because patient photos arrive from different angles and qualities."
      },
      solution: {
        tr: "Flutter 'Photo Wizard' ile hastalar 5 kritik açıyı (ön, üst, sol, sağ, donör) doğru hizalar; NestJS + Prisma backend veriyi PostgreSQL'de tutar, görseller S3 ile yönetilir.",
        en: "A Flutter 'Photo Wizard' guides patients to align 5 critical angles (front, top, left, right, donor); a NestJS + Prisma backend stores data in PostgreSQL while images are managed via S3."
      },
      engineeringNote: {
        tr: "Sistem gerçek zamanlı doktor-hasta etkileşimi için WebSocket (Gateway) kullanır ve tüm servisler Docker Compose ile mikroservis standartlarında konteynırlanmıştır.",
        en: "The system uses WebSockets (Gateway) for real-time doctor–patient interaction, and all services are containerized at microservice standards with Docker Compose."
      },
      flow: [
        { stepTitle: { tr: "Hizalı Yakalama", en: "Aligned Capture" }, stepDesc: { tr: "Photo Wizard, kamera overlay'leri ile hastayı 5 açıdan fotoğraf çekmeye yönlendirir.", en: "The Photo Wizard uses camera overlays to guide capture from 5 angles." } },
        { stepTitle: { tr: "S3 Depolama", en: "S3 Storage" }, stepDesc: { tr: "Görseller asenkron olarak S3 uyumlu depolamaya yüklenir.", en: "Images are uploaded asynchronously to S3-compatible storage." } },
        { stepTitle: { tr: "Admin Yönetimi", en: "Admin Management" }, stepDesc: { tr: "React panelinden doktorlar randevu slotlarını ve hasta timeline'ını yönetir.", en: "Doctors manage appointment slots and patient timelines from a React panel." } },
        { stepTitle: { tr: "Gerçek Zamanlı Sohbet", en: "Real-time Chat" }, stepDesc: { tr: "NestJS Gateway WebSocket ile doktor-hasta arası anlık iletişim sağlanır.", en: "A NestJS Gateway WebSocket enables instant doctor–patient communication." } }
      ],
      highlights: {
        tr: ["Photo Wizard (5-Açı Standardı)", "Mikroservis Mimarisi", "S3 Görsel Yönetimi", "Prisma ORM & PostgreSQL"],
        en: ["Photo Wizard (5-Angle Standard)", "Microservice Architecture", "S3 Image Management", "Prisma ORM & PostgreSQL"]
      }
    }
  },
  {
    id: 9,
    title: "Görüntü İşleme (HuggingFace)",
    category: { tr: "Bilgisayarlı Görü", en: "Computer Vision" },
    year: "2025",
    role: { tr: "Geliştirici", en: "Developer" },
    description: {
      tr: "FastAPI + OpenCV ile üç görüntü işleme aracını tek serviste sunan uygulama: kamerayla belge tarayıp perspektifi düzeltme, çoktan seçmeli optik formları (OMR) okuyup puanlama ve kümelenmiş taneleri sayma. HuggingFace Space üzerinde Docker ile canlı.",
      en: "A FastAPI + OpenCV application with three image-processing tools in one service: scanning documents by camera and correcting perspective, reading multiple-choice optical forms (OMR) with scoring, and counting clustered grains. Live on a HuggingFace Space via Docker."
    },
    tags: ["Python", "FastAPI", "OpenCV", "NumPy", "SciPy", "scikit-image", "JavaScript", "Docker", "HuggingFace Spaces"],
    demoLink: "https://huggingface.co/spaces/beyuphan/goru-isleme",
    impact: {
      tr: [
        "Canlı kamera önizlemesinde belge köşelerini gerçek zamanlı bulur; eğri çekilmiş kâğıdı en/boy oranını koruyarak dikleştirir.",
        "Birçok öğrenci kâğıdını toplu yükleyip cevap anahtarına göre puanlar, öğrenci numarasını okur ve sonuçları CSV olarak verir.",
        "Birbirine değen tohum/tanelerde bile her tanenin alanını tahmin ederek doğru sayıya ulaşır."
      ],
      en: [
        "Finds document corners in real time on the live camera preview and straightens skewed paper while preserving the true aspect ratio.",
        "Uploads many student sheets at once, scores them against an answer key, reads the student number, and exports results as CSV.",
        "Estimates each grain's area to reach the right count even when seeds touch each other."
      ]
    },
    architecture: {
      tr: "FastAPI arka ucu üç router (document, omr, counter) ve üç servis katmanından oluşur (yaklaşık 1250 satır OpenCV kodu: document 507, OMR 500, counter 245). Ortak görüntü yardımcıları utils/image_utils.py'dedir. Vanilla JS arayüzü (kamera modülü, belge/OMR/sayma sayfaları) aynı servisten statik olarak sunulur. Python 3.11-slim tabanlı Docker imajı, OpenCV headless için libgl1/libglib2.0 kurar ve HuggingFace Space'te uvicorn ile 7860 portunda çalışır.",
      en: "The FastAPI backend has three routers (document, omr, counter) and three service layers (about 1,250 lines of OpenCV code: document 507, OMR 500, counter 245). Shared image helpers live in utils/image_utils.py. A vanilla JS frontend (camera module plus document/OMR/counter pages) is served statically by the same service. A Python 3.11-slim Docker image installs libgl1/libglib2.0 for headless OpenCV and runs uvicorn on port 7860 in the HuggingFace Space."
    },
    algorithms: {
      tr: [
        "Belge köşe bulma: ağır (21×21) ve hafif (5×5) Gauss bulanıklaştırma üzerinde iki ölçekli Canny + Otsu ikili haritalarından en büyük 3 kontur aday olur; zemin koyuysa parlak (beyaz kâğıt) bölge adayları da eklenir",
        "Piksel-hassas köşe: GrabCut ile ön plan maskesi, morfolojik açma/kapama, kontura cv2.fitLine ile kenar doğruları uydurup kesişim noktalarından rafine 4 köşe; başarısız olursa kaba tespite düşer",
        "Gerçek en/boy oranı tahmini ile perspektif düzeltme (getPerspectiveTransform + warpPerspective), kenardaki arka plan şeridini kırpma ve LAB uzayında yalnız L kanalına CLAHE (clip 1.5, 8×8) ile renk bozmadan kontrast artırma",
        "Canlı önizleme için hızlı kaba tespit (analyze-frame) ve otomatik tespit başarısızsa manuel köşe seçimi",
        "OMR: Gauss adaptif eşikleme, CLAHE ile ışık dengeleme ve HoughCircles ile balon tespiti; her balonun doluluk skoruyla işaretli şık seçimi",
        "OMR ızgara çözümü: baloncukları satır ve sütun olarak 1B kümeleme, boşluk bazlı bölme ile şık sayısı büyüklüğündeki sütun gruplarını cevap bloğu, kalanları öğrenci numarası sütunu sayma; kâğıt 4 yönden denenip en tutarlı yön seçilir",
        "Cevap anahtarı hem fotoğraftan hem JSON'dan alınır; sonuç görseli doğru/yanlış halkalarıyla çizilir",
        "Tane sayma: kenar piksellerinin medyan LAB a/b rengine göre otomatik ön plan çıkarma (Otsu), delik doldurma, morfolojik temizlik, connected components + distance transform + Watershed",
        "Yuvarlaklık oranına göre tekil/kümeli ayrımı; tekil taneler için alan-ağırlıklı medyan tane alanı, kümelerde alan / tane alanı (1.6 katını aşan bileşenlerde) ile sayı tahmini; hassasiyet parametresi ile ayar"
      ],
      en: [
        "Document corner detection: on heavy (21×21) and light (5×5) Gaussian blurs, the three largest contours from dual-scale Canny + Otsu binary maps become candidates; bright (white paper) region candidates are added when the background is dark",
        "Pixel-precise corners: a GrabCut foreground mask, morphological open/close, and cv2.fitLine edge lines whose intersections yield refined 4 corners; falls back to the coarse detector on failure",
        "True aspect-ratio estimation with perspective correction (getPerspectiveTransform + warpPerspective), trimming the background strip at edges, and CLAHE (clip 1.5, 8×8) on only the L channel in LAB to boost contrast without shifting color",
        "Fast coarse detection for the live preview (analyze-frame) and manual corner selection when auto detection fails",
        "OMR: Gaussian adaptive thresholding, CLAHE lighting balance, and HoughCircles bubble detection; the marked option is chosen by each bubble's fill score",
        "OMR grid solving: 1D clustering of bubbles into rows and columns, gap-based splitting, column groups sized to the choice count are answer blocks and the rest count as student-number columns; the sheet is tried in 4 orientations and the most consistent one wins",
        "The answer key can come from a photo or JSON; the result image is drawn with correct/incorrect rings",
        "Grain counting: automatic foreground extraction from the median LAB a/b color of border pixels (Otsu), hole filling, morphological cleanup, connected components + distance transform + Watershed",
        "Single/clustered separation by roundness ratio; a weighted-median grain area from single grains, and counts in clusters estimated as area / grain area (for components above 1.6x); tunable via a sensitivity parameter"
      ]
    },
    technicalDetails: {
      problem: {
        tr: "Sınıf ortamında belge tarama, optik form okuma ve nesne sayma için ayrı ayrı pahalı araçlar gerekiyor; telefon kamerasıyla çekilen fotoğraflar ise eğri, gölgeli ve düzensiz ışıklı oluyor. Klasik sabit eşikli yöntemler bu koşullarda kırılıyor.",
        en: "Document scanning, optical form reading, and object counting each need separate, costly tools; photos from a phone camera are skewed, shadowed, and unevenly lit. Classic fixed-threshold methods break under these conditions."
      },
      solution: {
        tr: "Her işte sabit eşik yerine görüntüden öğrenilen referanslarla (kenar rengi medyanı, balon medyan yarıçapı, kâğıt parlaklığı) çalışan sağlam bir OpenCV hattı; tek bir servis ve tek bir tarayıcı arayüzü.",
        en: "A robust OpenCV pipeline per task that uses references learned from the image itself (median border color, median bubble radius, paper brightness) instead of fixed thresholds, served as one service with one browser UI."
      },
      engineeringNote: {
        tr: "Her aşamanın bir düşüş yolu var: hassas köşe bulma başarısız olursa kaba tespite, kaba tespit de olmazsa kullanıcının manuel köşe seçimine geçilir. OMR'de kâğıdın hangi yönde çekildiği önceden bilinmediği için dört yön denenir ve en çok tutarlı cevap veren seçilir.",
        en: "Every stage has a fallback: if precise corner detection fails it drops to coarse detection, and if that fails the user picks corners manually. In OMR the orientation of the sheet is unknown, so all four are tried and the most consistent reading wins."
      },
      flow: [
        { stepTitle: { tr: "Canlı Analiz", en: "Live Analysis" }, stepDesc: { tr: "Kamera karesi analyze-frame ucuna gider; kaba köşeler bulunup arayüzde çizilir.", en: "A camera frame goes to the analyze-frame endpoint; coarse corners are found and drawn in the UI." } },
        { stepTitle: { tr: "Hassas Tespit", en: "Precise Detection" }, stepDesc: { tr: "Çekimde GrabCut ve kenar doğrusu uydurmayla piksel hassasiyetinde köşeler çıkarılır.", en: "On capture, GrabCut and edge-line fitting extract pixel-precise corners." } },
        { stepTitle: { tr: "Düzeltme / Okuma / Sayma", en: "Correct / Read / Count" }, stepDesc: { tr: "Perspektif düzeltme + CLAHE, OMR ızgara çözümü ve puanlama ya da Watershed ile tane sayımı çalışır.", en: "Perspective correction + CLAHE, OMR grid solving with scoring, or Watershed grain counting runs." } },
        { stepTitle: { tr: "Sonuç", en: "Result" }, stepDesc: { tr: "İşaretli görsel ve sayısal sonuç döner; OMR sonuçları birikir ve CSV olarak indirilir.", en: "The annotated image and numeric result return; OMR results accumulate and download as CSV." } }
      ],
      highlights: {
        tr: ["GrabCut ile Piksel-Hassas Belge Köşesi", "OMR Izgara Çözümü + Toplu Puanlama", "Watershed ile Kümelenmiş Tane Sayma", "Docker ile Canlı HF Space"],
        en: ["Pixel-Precise Document Corners via GrabCut", "OMR Grid Solving + Batch Scoring", "Watershed Counting of Clustered Grains", "Live HF Space via Docker"]
      }
    }
  },
  {
    id: 10,
    title: "OrbitMatch B2B",
    category: { tr: "Full-Stack / Hackathon", en: "Full-Stack / Hackathon" },
    year: "2025",
    role: { tr: "Full-Stack Geliştirici", en: "Full-Stack Developer" },
    description: {
      tr: "TUA Astrohackathon 2025 (Samsun) için geliştirilen uzay sanayii B2B ekosistem eşleştirme platformu. Proje sahipleri iş ilanı açar, kuruluşlar teklif verir; sistem her ikisini dört ölçütlü ağırlıklı bir skorla otomatik eşleştirir.",
      en: "A space-industry B2B ecosystem matchmaking platform built for TUA Astrohackathon 2025 (Samsun). Project owners post work, organizations bid, and the system automatically matches both with a four-criteria weighted score."
    },
    tags: ["FastAPI", "SQLAlchemy", "PostgreSQL", "React 18", "Vite", "React Router", "Python", "Docker"],
    impact: {
      tr: [
        "Yeni proje yayınlanınca uygun kuruluşları 0-100 arası skorlar; skor bileşenleri (yetenek, etiket, konum, maliyet) ayrı ayrı gösterilir, neden eşleştiği okunabilir.",
        "Eşik altı (varsayılan 40) eşleşmeler başvuruya kapatılır; kalite korunur.",
        "Kuruluş paneli, keşfet ekranı, başvuru yönetimi ve admin istatistikleri ile baştan sona çalışan bir ürün olarak hackathonda teslim edildi."
      ],
      en: [
        "Scores suitable organizations 0–100 when a project is posted; the components (capability, tags, location, cost) are shown separately so the reason for a match is readable.",
        "Matches below the threshold (default 40) are locked out of applications to preserve quality.",
        "Delivered as a working product end to end at the hackathon: organization dashboard, discover screen, application management, and admin statistics."
      ]
    },
    architecture: {
      tr: "FastAPI + SQLAlchemy + PostgreSQL 15 arka ucu; modeller City, Tag, OrganizationType, Organization, AuthUser, Project ve ProjectMatch. Ayrı router'lar: auth (kayıt, giriş, admin girişi), organizations, projects, matches, cities, tags, org_types ve stats. Eşleştirme ve skorlama services/matching.py içindedir; ağırlıklar ve eşikler config.py'de tek yerde tutulur. React 18 + Vite + React Router arayüzü; sayfalar: Dashboard, Discover, Companies, CompanyProfile, MyProjects, MyProjectDetail, MyApplications, Stats ve admin ekranları. seed.py ile örnek veri yüklenir; Docker Compose ile kurulur.",
      en: "A FastAPI + SQLAlchemy + PostgreSQL 15 backend; models City, Tag, OrganizationType, Organization, AuthUser, Project, and ProjectMatch. Separate routers: auth (register, login, admin login), organizations, projects, matches, cities, tags, org_types, and stats. Matching and scoring live in services/matching.py; weights and thresholds are kept in one place in config.py. A React 18 + Vite + React Router frontend with pages: Dashboard, Discover, Companies, CompanyProfile, MyProjects, MyProjectDetail, MyApplications, Stats, and admin screens. seed.py loads sample data; Docker Compose handles setup."
    },
    algorithms: {
      tr: [
        "Nihai skor = kategori×0.40 + fiyat×0.30 + etiket×0.20 + konum×0.10; her bileşen 0-100 ölçeğinde, hepsi ProjectMatch satırında ayrı ayrı saklanır ve gerektiğinde yeniden hesaplanır (refresh)",
        "Konum skoru: konum belirtilmemişse veya aynı şehirse 100; koordinat bulunamazsa 10; aksi halde Haversine mesafesi 500 km'ye kadar doğrusal olarak 100'den 0'a iner",
        "Etiket skoru: virgülle ayrılmış etiketlerin küçük harfe çevrilmiş küme kesişimi",
        "Eşleşme nedenleri: bileşen eşiklerini (yetenek 50, etiket 40, konum 80, maliyet 80) geçenler \"yetenek uyumu\", \"etiket uyumu\" vb. gerekçe olarak yazılır; skor kalitesi 70+ yeşil, 45+ turuncu, altı kırmızı",
        "Parola güvenliği: tuzlu PBKDF2-HMAC-SHA256 (120.000 iterasyon) ve sabit zamanlı karşılaştırma (secrets.compare_digest)",
        "Keşfet ucu (discover/{org_id}): kuruluşa uygun açık projeleri skorlarıyla listeler; ayrıca başvuru (apply) ve geri çekme (withdraw) uçları bulunur",
        "Admin istatistik ucu (stats/overview): platform geneli özet ve admin aksiyonları"
      ],
      en: [
        "Final score = category×0.40 + price×0.30 + tags×0.20 + location×0.10; each component is on a 0–100 scale, stored separately on the ProjectMatch row and recomputable on demand (refresh)",
        "Location score: 100 when no location is given or the city matches; 10 if coordinates are missing; otherwise the Haversine distance falls linearly from 100 to 0 over 500 km",
        "Tag score: intersection of lower-cased comma-separated tag sets",
        "Match reasons: components above their thresholds (capability 50, tags 40, location 80, cost 80) are written as reasons such as \"capability fit\" or \"tag fit\"; score quality is green at 70+, orange at 45+, red below",
        "Password security: salted PBKDF2-HMAC-SHA256 (120,000 iterations) with constant-time comparison (secrets.compare_digest)",
        "Discover endpoint (discover/{org_id}): lists open projects suited to an organization with their scores; apply and withdraw endpoints are also provided",
        "Admin stats endpoint (stats/overview): platform-wide summary and admin actions"
      ]
    },
    technicalDetails: {
      problem: {
        tr: "Uzay sanayii ekosisteminde proje sahipleri ile yetkin şirketleri bulmak ve karşılaştırmak elle, tanıdıklık ve belirsiz ölçütlerle yapılıyor; teklifler arasında objektif bir sıralama yok.",
        en: "In the space-industry ecosystem, finding and comparing capable companies for a project is done by hand, through acquaintance and vague criteria; there is no objective ranking among bids."
      },
      solution: {
        tr: "Kategori, fiyat, etiket ve konumu tek bir 0-100 skorda birleştiren, bileşenleri şeffaf gösteren bir eşleştirme servisi; her yeni proje ve teklifte skor otomatik hesaplanır, eşik altı eşleşmeler kapatılır.",
        en: "A matching service that combines category, price, tags, and location into a single 0–100 score with transparent components; the score is computed automatically for every new project and bid, and below-threshold matches are closed."
      },
      engineeringNote: {
        tr: "Ağırlıklar ve eşikler kodun içine gömülmek yerine config.py'de tek yerde tutulur; ayarlamak için servis koduna dokunmak gerekmez. Skorun bileşenleri veritabanında saklandığı için arayüz her eşleşmeyi gerekçesiyle açıklayabilir.",
        en: "Weights and thresholds live in one place in config.py rather than being hard-coded, so tuning them doesn't require touching the service code. Because score components are stored in the database, the UI can explain every match with its reasons."
      },
      flow: [
        { stepTitle: { tr: "Kayıt", en: "Registration" }, stepDesc: { tr: "Kuruluşlar tür, şehir ve etiketleriyle kaydolur; projeler gereken kuruluş türleri, bütçe ve konumla açılır.", en: "Organizations register with type, city, and tags; projects are posted with required organization types, budget, and location." } },
        { stepTitle: { tr: "Skorlama", en: "Scoring" }, stepDesc: { tr: "Aday kuruluşlar dört ölçüte göre puanlanır; bileşenler ProjectMatch kaydına yazılır.", en: "Candidate organizations are scored on four criteria; the components are written to the ProjectMatch record." } },
        { stepTitle: { tr: "Keşfet & Başvuru", en: "Discover & Apply" }, stepDesc: { tr: "Kuruluş keşfet ekranında kendisine uygun projeleri skorlarıyla görür; başvurur veya başvurusunu geri çeker.", en: "In the discover screen an organization sees suitable projects with their scores and applies or withdraws." } },
        { stepTitle: { tr: "Yönetim", en: "Management" }, stepDesc: { tr: "Proje sahibi eşleşmelerin durumunu günceller; admin panelinden platform istatistikleri izlenir.", en: "The project owner updates match statuses; platform statistics are tracked from the admin panel." } }
      ],
      highlights: {
        tr: ["Şeffaf 4 Bileşenli Skor", "Haversine Konum Skoru", "Config'ten Ayarlanabilir Ağırlıklar", "PBKDF2 ile Güvenli Kimlik Doğrulama"],
        en: ["Transparent 4-Component Score", "Haversine Location Score", "Config-Tunable Weights", "Secure Auth with PBKDF2"]
      }
    }
  },
  {
    id: 11,
    title: "CodeBrief AI",
    category: { tr: "Yapay Zeka / Geliştirici Araçları", en: "AI / Developer Tools" },
    year: "2025",
    role: { tr: "Geliştirici", en: "Developer" },
    description: {
      tr: "Yazılım projelerini Gemini ile analiz edip akademik formatta PDF rapor üreten VS Code eklentisi. Kod tabanını okur, öğrenci/ders/üniversite bilgileriyle kapak sayfası hazırlar ve Türkçe karakter uyumlu, dizgi hatasız bir PDF çıkarır.",
      en: "A VS Code extension that analyzes software projects with Gemini and generates an academic-format PDF report. It reads the codebase, builds a cover page from student/course/university details, and outputs a Turkish-character-safe, typeset-clean PDF."
    },
    tags: ["TypeScript", "VS Code API", "Python", "FastAPI", "Gemini 2.5 Pro", "xhtml2pdf", "ReportLab"],
    link: "https://github.com/beyuphan/codebrief-ai",
    impact: {
      tr: [
        "Dönem projesi raporu yazma yükünü tek tıklamaya indirir; proje klasörünün köküne hazır bir PDF bırakır.",
        "Başlıkların sayfa sonunda yetim kalması ve kod bloklarının sayfalar arasında bölünmesi gibi dizgi sorunlarını çözer.",
        "Gemini API anahtarı yalnızca yerel .env dosyasında tutulur; kod, yapılandırılan Gemini isteği dışında dışarı gönderilmez.",
        "Sürüm 2.0'dan 2.3.1'e kadar birçok .vsix sürümü yayımlanmış, VS Code Marketplace'te \"beyuphan\" yayıncısı altında yer alan bir eklentidir."
      ],
      en: [
        "Cuts the burden of writing a course-project report to one click, leaving a ready PDF in the project root.",
        "Solves typesetting problems such as headings orphaned at page bottoms and code blocks split across pages.",
        "The Gemini API key lives only in a local .env file; code is not sent anywhere beyond the configured Gemini request.",
        "Shipped as many .vsix releases from 2.0 to 2.3.1, published on the VS Code Marketplace under the \"beyuphan\" publisher."
      ]
    },
    architecture: {
      tr: "İki parça: (1) TypeScript VS Code eklentisi: komut paleti komutu codebrief.generateReport ve kenar çubuğunda webview formu (öğrenci, proje, ders, üniversite, bölüm, logo); (2) Python FastAPI arka ucu (varsayılan 127.0.0.1:8000, /generate-report ve /health). Arka uç ProjectAnalyzer ile kodu okur, Gemini 2.5 Pro ile Markdown rapor üretir, ReportConverter ile Markdown'ı HTML'e ve xhtml2pdf/ReportLab ile PDF'e çevirir. Eklenti ilk çalıştırmada gereken Python kütüphanelerini kurmayı dener.",
      en: "Two parts: (1) a TypeScript VS Code extension with the codebrief.generateReport command-palette command and a sidebar webview form (student, project, course, university, department, logo); (2) a Python FastAPI backend (default 127.0.0.1:8000, /generate-report and /health). The backend reads code with ProjectAnalyzer, generates a Markdown report with Gemini 2.5 Pro, and ReportConverter turns Markdown into HTML and then PDF via xhtml2pdf/ReportLab. On first run the extension tries to install the required Python libraries."
    },
    algorithms: {
      tr: [
        "Akıllı kod tarama: node_modules, dist, build, bin, obj, vendor, target, .git, venv, cache gibi klasörler ve kilit dosyaları atlanır; yalnızca tanımlı kaynak uzantıları (.py, .ts, .cs, .java, .go, .rs, .sql, .md vb.) okunur",
        "Bağlam sınırı: en fazla 300 dosya, dosya başına 100 KB; her dosya yol başlığıyla tek bir büyük bağlama eklenir ve dosya ağacı ayrıca çıkarılır",
        "Gemini 2.5 Pro ile yapılandırılmış akademik raporun Markdown olarak üretilmesi; analiz hatası veya model reddi durumunda PDF üretilmeden hata döner",
        "Türkçe PDF için yazı tipi kaydı (_setup_turkish_fonts) ile ğ, ş, ı gibi karakterlerin doğru basılması",
        "Yetim başlık önleme (_prevent_orphan_headings): bir başlığın sayfa sonunda tek başına kalmasını HTML düzeyinde engeller",
        "Kod blokları işleme (_process_code_blocks): kod bloklarının sayfa taşmasını ve bölünmesini düzenler",
        "Eklenti ile arka uç arasında HTTP: webview form verisi JSON olarak /generate-report ucuna gider, çıktı yolu ve ham Markdown döner"
      ],
      en: [
        "Smart code scanning: skips node_modules, dist, build, bin, obj, vendor, target, .git, venv, cache folders and lock files; only recognized source extensions (.py, .ts, .cs, .java, .go, .rs, .sql, .md, etc.) are read",
        "Context limits: at most 300 files and 100 KB per file; each file is appended to one large context with a path header, and a file tree is extracted separately",
        "Gemini 2.5 Pro generates a structured academic report as Markdown; on analysis failure or model refusal an error is returned without producing a PDF",
        "Font registration for Turkish PDFs (_setup_turkish_fonts) so characters such as ğ, ş, ı print correctly",
        "Orphan heading prevention (_prevent_orphan_headings): stops a heading from being stranded alone at the bottom of a page at the HTML level",
        "Code-block handling (_process_code_blocks): manages code blocks that overflow or split across pages",
        "HTTP between extension and backend: webview form data goes to /generate-report as JSON, and the output path and raw Markdown come back"
      ]
    },
    technicalDetails: {
      problem: {
        tr: "Öğrenciler ve geliştiriciler dönem projeleri için akademik rapor yazarken kodu, mimariyi ve algoritmaları saatlerce elle belgelemek zorunda; üstüne PDF dizgisi (başlık/kod bloğu kayması, Türkçe karakter) ayrı bir dert.",
        en: "Students and developers spend hours documenting code, architecture, and algorithms by hand for course-project reports, and PDF typesetting (heading/code-block drift, Turkish characters) is another headache."
      },
      solution: {
        tr: "Kod tabanını bağlam olarak Gemini'ye veren, çıktıyı Markdown'dan dizgisi düzeltilmiş PDF'e çeviren iki katmanlı bir sistem; kullanıcı VS Code'dan çıkmadan raporu alır.",
        en: "A two-layer system that feeds the codebase to Gemini as context and converts the output from Markdown into a typeset-corrected PDF; the user gets the report without leaving VS Code."
      },
      engineeringNote: {
        tr: "LLM çıktısını doğrudan PDF'e basmak dizgi hatalarıyla dolu olur; bu yüzden Markdown ile PDF arasına HTML son işleme katmanı koydum: yetim başlık ve kod bloğu düzeltmeleri orada yapılıyor. Eklenti ile Python arka ucu ayrı tutulduğu için arka uç bağımsız test edilebiliyor.",
        en: "Printing LLM output straight to PDF is full of layout errors, so I added an HTML post-processing layer between Markdown and PDF where orphan-heading and code-block fixes happen. Keeping the extension and Python backend separate lets the backend be tested independently."
      },
      flow: [
        { stepTitle: { tr: "Komut / Form", en: "Command / Form" }, stepDesc: { tr: "Kenar çubuğundaki formdan öğrenci, ders ve üniversite bilgileri girilir; ilk çalıştırmada Gemini API anahtarı istenir.", en: "Student, course, and university details are entered in the sidebar form; the Gemini API key is requested on first run." } },
        { stepTitle: { tr: "Kod Tarama", en: "Code Scan" }, stepDesc: { tr: "ProjectAnalyzer gereksiz klasörleri eleyip en fazla 300 dosyayı bağlama toplar.", en: "ProjectAnalyzer filters out noise folders and collects up to 300 files into the context." } },
        { stepTitle: { tr: "Rapor Üretimi", en: "Report Generation" }, stepDesc: { tr: "Gemini 2.5 Pro yapılandırılmış akademik raporu Markdown olarak yazar.", en: "Gemini 2.5 Pro writes the structured academic report as Markdown." } },
        { stepTitle: { tr: "PDF Dizgisi", en: "PDF Typesetting" }, stepDesc: { tr: "Markdown HTML'e, HTML düzeltmelerle PDF'e çevrilir; dosya proje kökünde oluşur.", en: "Markdown becomes HTML, then a PDF with the fixes applied; the file lands in the project root." } }
      ],
      highlights: {
        tr: ["Gemini 2.5 Pro ile Akademik Rapor", "Dizgisi Düzeltilmiş PDF", "VS Code Kenar Çubuğu Eklentisi", "Yerel API Anahtarı"],
        en: ["Academic Report with Gemini 2.5 Pro", "Typeset-Corrected PDF", "VS Code Sidebar Extension", "Local API Key"]
      }
    }
  },
  {
    id: 7,
    title: "Jetpack E-Ticaret",
    category: { tr: "Mobil Mühendislik", en: "Mobile Engineering" },
    year: "2025",
    role: { tr: "Mobil Geliştirici", en: "Mobile Developer" },
    description: {
      tr: "Jetpack Compose ve modern Android mimarisi ile geliştirilmiş, API kısıtlarını akıllı algoritmalarla aşan e-ticaret platformu.",
      en: "An e-commerce platform built with Jetpack Compose and modern Android architecture, overcoming API limitations through smart algorithms."
    },
    tags: ["Kotlin", "Jetpack Compose", "MVVM", "Hilt", "Retrofit", "DataStore"],
    link: "https://github.com/beyuphan/ECommerceApp-Android",
    impact: {
      tr: [
        "API'nin desteklemediği favoriler ve sepet özelliklerini yerel algoritmalarla ekledi.",
        "Modern, akıcı bir Material 3 kullanıcı deneyimi sundu."
      ],
      en: [
        "Added favorites and cart features the API lacked, via local algorithms.",
        "Delivered a modern, fluid Material 3 user experience."
      ]
    },
    architecture: {
      tr: "Kotlin + Jetpack Compose; MVVM; Hilt DI; Retrofit + Coroutines; Jetpack DataStore.",
      en: "Kotlin + Jetpack Compose; MVVM; Hilt DI; Retrofit + Coroutines; Jetpack DataStore."
    },
    algorithms: {
      tr: [
        "DataStore ile cihaz-yerel favori sistemi (API kısıtını aşar)",
        "ViewModel seviyesinde sepet birleştirme",
        "SwipeToDismiss ile Swipe-to-Add / Undo-Delete",
        "Gson tabanlı sayfa arası nesne transferi"
      ],
      en: [
        "Device-local favorites with DataStore (works around the API limit)",
        "Cart merging at the ViewModel level",
        "Swipe-to-Add / Undo-Delete via SwipeToDismiss",
        "Gson-based object transfer between pages"
      ]
    },
    technicalDetails: {
      problem: {
        tr: "API'nin favoriler ve sepette adet güncelleme gibi temel özellikleri desteklememesi nedeniyle oluşan 'statik' kullanıcı deneyimi kısıtı.",
        en: "A 'static' user experience caused by the API not supporting core features such as favorites and cart quantity updates."
      },
      solution: {
        tr: "DataStore ile cihaz tabanlı yerel favori sistemi ve ViewModel seviyesinde sepet birleştirme algoritmaları geliştirildi; UI modern 'Swipe-to-Action' mekanizmalarıyla zenginleştirildi.",
        en: "A device-based local favorites system with DataStore and cart-merging algorithms at the ViewModel level were developed; the UI was enriched with modern 'Swipe-to-Action' mechanics."
      },
      engineeringNote: {
        tr: "Asenkron veri akışı Retrofit ve Coroutines ile optimize edildi; favori durumu DataStore'da kalıcı ve reaktif tutuldu.",
        en: "Async data flow was optimized with Retrofit and Coroutines; favorite state was kept persistent and reactive in DataStore."
      },
      flow: [
        { stepTitle: { tr: "Asenkron Veri", en: "Async Data" }, stepDesc: { tr: "Retrofit + Hilt ile ürün verisi MVVM katmanlarına çekilir.", en: "Product data is fetched into the MVVM layers via Retrofit + Hilt." } },
        { stepTitle: { tr: "Yerel Durum", en: "Local State" }, stepDesc: { tr: "DataStore ile favori durumu kalıcı ve reaktif yapılır.", en: "Favorite state is made persistent and reactive with DataStore." } },
        { stepTitle: { tr: "Jest Etkileşimi", en: "Gestural Interaction" }, stepDesc: { tr: "SwipeToDismiss ile hızlı sepete ekleme ve Undo'lu silme.", en: "Quick add-to-cart and undo-able deletion via SwipeToDismiss." } }
      ],
      highlights: {
        tr: ["Swipe-to-Add & Undo Delete", "DataStore Yerel Favoriler", "Hilt Dependency Injection", "Özel UI/UX & Filtreleme"],
        en: ["Swipe-to-Add & Undo Delete", "DataStore Local Favorites", "Hilt Dependency Injection", "Custom UI/UX & Filtering"]
      }
    }
  },
  {
    id: 6,
    title: "KitapKöşem",
    category: { tr: "Web Geliştirme", en: "Web Development" },
    year: "2025",
    role: { tr: "Full-Stack Geliştirici", en: "Full-Stack Developer" },
    description: {
      tr: "Kullanıcıların kitap ekleyip inceleme yazdığı, puanladığı, beğendiği ve birbirini takip ettiği sosyal kitap platformu. Java 17 ve Jakarta EE (Servlet/JSP) ile MVC + DAO mimarisinde, MySQL üzerinde yazıldı.",
      en: "A social book platform where users add books, write reviews, rate, like, and follow one another. Written in Java 17 and Jakarta EE (Servlet/JSP) with an MVC + DAO architecture on MySQL."
    },
    tags: ["Java 17", "Jakarta EE", "Servlet/JSP", "MySQL", "Maven", "Tomcat 11", "AJAX", "Gson", "jBCrypt"],
    link: "https://github.com/beyuphan/KitapKosem",
    reportPath: "/reports/web-rapor.pdf",
    impact: {
      tr: [
        "Kayıt, giriş, profil düzenleme, takip, beğeni ve yorum akışıyla tam bir sosyal döngü sunar.",
        "Takip edilen kullanıcıların etkinliklerinden oluşan bir zaman akışı gösterir; sayfa yenilemeden akar.",
        "Kitap kapakları imgBB API'siyle yüklenir, böylece sunucu disk yönetimi gerekmez.",
        "Procfile ve dağıtım rehberiyle Railway/Heroku'ya alınabilecek şekilde hazırlanmıştır."
      ],
      en: [
        "Delivers a full social loop with registration, login, profile editing, following, likes, and reviews.",
        "Shows a timeline built from followed users' activity that flows without page reloads.",
        "Book covers upload through the imgBB API, avoiding server disk management.",
        "Ready to deploy to Railway/Heroku with a Procfile and a deployment guide."
      ]
    },
    architecture: {
      tr: "Java 17 + Jakarta EE (Servlet/JSP, JSTL) MVC. 15 kontrolcü servlet'i (AddBook, AddReview, BookDetail, DeleteBook, DeleteReview, EditProfile, Follow, Index, LikeBook, LikeReview, Login, Logout, Profile, Register, Timeline); 5 DAO (User, Book, Review, Follow, Activity); 4 model (User, Book, Review, Activity); ImageUploadService ve PasswordUtil yardımcıları. MySQL 8, Maven ile derlenir, Tomcat 11 üzerinde çalışır. Ön yüz JSP + vanilla JS (index.js, timeline.js, bookDetail.js, profile.js) ve AJAX/JSON ile konuşur.",
      en: "Java 17 + Jakarta EE (Servlet/JSP, JSTL) MVC. 15 controller servlets (AddBook, AddReview, BookDetail, DeleteBook, DeleteReview, EditProfile, Follow, Index, LikeBook, LikeReview, Login, Logout, Profile, Register, Timeline); 5 DAOs (User, Book, Review, Follow, Activity); 4 models (User, Book, Review, Activity); ImageUploadService and PasswordUtil helpers. MySQL 8, built with Maven, running on Tomcat 11. The frontend is JSP + vanilla JS (index.js, timeline.js, bookDetail.js, profile.js) talking via AJAX/JSON."
    },
    algorithms: {
      tr: [
        "MVC + DAO katmanlı mimari: servlet'ler HTTP'yi karşılar, DAO'lar SQL'i soyutlar, modeller POJO olarak taşınır",
        "jBCrypt ile tuzlu parola hashleme (PasswordUtil)",
        "ActivityDAO ile kullanıcı eylemlerinin (kitap ekleme, inceleme, beğeni) kayıt altına alınması ve takip edilenlerin etkinliklerinden zaman akışı üretilmesi",
        "AJAX ile sonsuz kaydırma: zaman akışı sayfa sayfa JSON olarak çekilir ve DOM'a eklenir",
        "Kitap ve inceleme için ayrı beğeni uçları (LikeBook/LikeReview), AJAX ile anında geri bildirim",
        "imgBB API'sine Apache HttpClient (httpmime) ile çok parçalı görsel yükleme",
        "Gson ile JSON serileştirme"
      ],
      en: [
        "Layered MVC + DAO: servlets handle HTTP, DAOs abstract SQL, models travel as POJOs",
        "Salted password hashing with jBCrypt (PasswordUtil)",
        "ActivityDAO records user actions (adding books, reviews, likes) and builds the timeline from the activity of followed users",
        "AJAX infinite scroll: the timeline is fetched page by page as JSON and appended to the DOM",
        "Separate like endpoints for books and reviews (LikeBook/LikeReview) with instant AJAX feedback",
        "Multipart image upload to the imgBB API with Apache HttpClient (httpmime)",
        "JSON serialization with Gson"
      ]
    },
    technicalDetails: {
      problem: {
        tr: "Okurların kitap deneyimlerini paylaşabileceği, diğer okurları takip edip onların etkinliğini görebileceği; güvenli, dinamik ve sayfa yenileme gerektirmeyen bir topluluk platformu kurmak.",
        en: "Build a secure, dynamic community platform that needs no page reloads, where readers share book experiences and follow others to see their activity."
      },
      solution: {
        tr: "Jakarta EE Servlet/JSP üzerinde MVC; veri erişimini DAO katmanına yalıtan, eylemleri bir etkinlik tablosunda toplayıp takip grafiğinden zaman akışı üreten bir mimari.",
        en: "MVC on Jakarta EE Servlet/JSP with data access isolated in a DAO layer; user actions are collected into an activity table and the timeline is built from the follow graph."
      },
      engineeringNote: {
        tr: "Servlet başına tek sorumluluk (ekle, sil, beğen, takip et) kodu okunur tutar; ortak iş mantığı DAO ve servis katmanlarında toplanır. Görsel yükleme dış servise bırakılarak uygulama durumsuz kalır ve platforma dağıtımı kolaylaşır.",
        en: "One responsibility per servlet (add, delete, like, follow) keeps the code readable, with shared logic in the DAO and service layers. Delegating image upload to an external service keeps the app stateless and easy to deploy."
      },
      flow: [
        { stepTitle: { tr: "Kimlik Doğrulama", en: "Authentication" }, stepDesc: { tr: "Register/Login servlet'leri jBCrypt ile parolayı doğrular, oturum açar.", en: "Register/Login servlets verify the password with jBCrypt and start a session." } },
        { stepTitle: { tr: "İçerik", en: "Content" }, stepDesc: { tr: "Kitap ekleme, kapak yükleme (imgBB) ve inceleme/puan yazma servlet'leri DAO üzerinden MySQL'e yazar.", en: "Servlets for adding books, uploading covers (imgBB), and writing reviews/ratings write to MySQL through DAOs." } },
        { stepTitle: { tr: "Sosyal Etkileşim", en: "Social Interaction" }, stepDesc: { tr: "Takip, kitap ve inceleme beğenisi AJAX ile sayfa yenilenmeden uygulanır; her eylem etkinlik olarak kaydedilir.", en: "Follows and likes on books and reviews are applied via AJAX without reloads; each action is recorded as activity." } },
        { stepTitle: { tr: "Zaman Akışı", en: "Timeline" }, stepDesc: { tr: "Takip edilenlerin etkinlikleri Timeline servlet'inden sonsuz kaydırmayla JSON olarak akar.", en: "Followed users' activity streams from the Timeline servlet as JSON with infinite scroll." } }
      ],
      highlights: {
        tr: ["15 Servlet ile MVC + DAO", "Takip Grafiğinden Zaman Akışı", "jBCrypt ile Güvenli Parolalar", "imgBB Görsel Entegrasyonu"],
        en: ["MVC + DAO with 15 Servlets", "Timeline from the Follow Graph", "Secure Passwords with jBCrypt", "imgBB Image Integration"]
      }
    }
  },
  {
    id: 3,
    title: "Fourier Ses Temizleme",
    category: { tr: "Sinyal İşleme", en: "Signal Processing" },
    year: "2025",
    role: { tr: "Sinyal İşleme Mühendisi", en: "Signal Processing Engineer" },
    description: {
      tr: "FFT (Hızlı Fourier Dönüşümü) tabanlı spektral çıkarma yöntemiyle ses kayıtlarındaki gürültü bileşenlerini filtreleyen mühendislik çözümü.",
      en: "An engineering solution that filters noise components from audio recordings using FFT-based spectral subtraction."
    },
    tags: ["Python", "STFT", "FFT", "PyQt5", "Signal Processing"],
    link: "https://github.com/beyuphan/noise_cleaner_project",
    reportPath: "/reports/sinyalrapor.pdf",
    impact: {
      tr: [
        "Gürültülü kayıtlarda konuşmanın anlaşılırlığını artırır.",
        "Gerçek zamanlı ve ayarlanabilir temizleme seviyeleri sunar."
      ],
      en: [
        "Improves speech intelligibility in noisy recordings.",
        "Offers real-time, adjustable cleaning levels."
      ]
    },
    architecture: {
      tr: "Python; gerçek zamanlı ses için callback tabanlı işleme; PyQt5 GUI; STFT/ISTFT işlem hattı.",
      en: "Python; callback-based processing for real-time audio; a PyQt5 GUI; an STFT/ISTFT pipeline."
    },
    algorithms: {
      tr: [
        "STFT tabanlı Spektral Çıkarım (Spectral Subtraction)",
        "Hann pencereleme ile spektral sızıntı önleme",
        "Overlap-Add (OLA) sentezi (%50-75 çerçeve bindirme)",
        "Sessiz bölümlerden gürültü profili tahmini + alfa ölçekleme"
      ],
      en: [
        "STFT-based Spectral Subtraction",
        "Hann windowing to prevent spectral leakage",
        "Overlap-Add (OLA) synthesis (50–75% frame overlap)",
        "Noise-profile estimation from silent segments + alpha scaling"
      ]
    },
    technicalDetails: {
      problem: {
        tr: "Gürültülü ortamlarda kaydedilmiş insan sesi kayıtlarındaki gürültü bileşenlerini azaltarak sesin anlaşılırlığını iyileştirmek.",
        en: "Reduce noise components in human-voice recordings captured in noisy environments to improve speech intelligibility."
      },
      solution: {
        tr: "Kısa Zamanlı Fourier Dönüşümü (STFT) tabanlı Spektral Çıkarım ile gürültü profilinin genlik spektrumundan ayrıştırılması.",
        en: "Short-Time Fourier Transform (STFT)-based spectral subtraction that separates the noise profile from the amplitude spectrum."
      },
      engineeringNote: {
        tr: "Spektral sızıntıyı önlemek için Hann penceresi, sentezde ise çerçeveler arası pürüzsüz geçiş için Overlap-Add (OLA) kullanıldı.",
        en: "A Hann window prevents spectral leakage, and Overlap-Add (OLA) ensures smooth transitions between frames during synthesis."
      },
      flow: [
        { stepTitle: { tr: "STFT & Pencereleme", en: "STFT & Windowing" }, stepDesc: { tr: "Sinyal %50-75 bindirmeli çerçevelere bölünür, Hann penceresi uygulanır.", en: "The signal is split into 50–75% overlapping frames and a Hann window is applied." } },
        { stepTitle: { tr: "Gürültü Modelleme", en: "Noise Modeling" }, stepDesc: { tr: "Sessiz bölümlerden ortalama genlik spektrumu ile profil çıkarılır.", en: "A profile is derived from the average amplitude spectrum of silent segments." } },
        { stepTitle: { tr: "Spektral Çıkarım", en: "Spectral Subtraction" }, stepDesc: { tr: "Gürültü profili bir alfa faktörüyle ölçeklenip sinyalden çıkarılır.", en: "The noise profile is scaled by an alpha factor and subtracted from the signal." } },
        { stepTitle: { tr: "ISTFT & OLA", en: "ISTFT & OLA" }, stepDesc: { tr: "Faz korunarak Ters FFT uygulanır, sinyal zaman domeninde sentezlenir.", en: "Inverse FFT is applied preserving phase, and the signal is synthesized in time." } }
      ],
      highlights: {
        tr: ["Gerçek Zamanlı Callback", "Hann Pencereleme", "Overlap-Add Sentezi", "Dinamik Temizleme Seviyeleri"],
        en: ["Real-Time Callback", "Hann Windowing", "Overlap-Add Synthesis", "Dynamic Cleaning Levels"]
      }
    }
  },
  {
    id: 4,
    title: "Kopernik Tedarik Yönetimi",
    category: { tr: "Mobil Geliştirme", en: "Mobile Development" },
    year: "2024",
    role: { tr: "Mobil Geliştirici", en: "Mobile Developer" },
    description: {
      tr: "Kullanıcıların tedarik ilanı açıp birbirine başvurduğu Flutter + Firebase mobil uygulaması. Bir ilana başvuru geldiğinde Cloud Function ile ilan sahibine anında push bildirimi gider.",
      en: "A Flutter + Firebase mobile app where users post supply listings and apply to one another's. When an application arrives, a Cloud Function pushes an instant notification to the listing owner."
    },
    tags: ["Flutter", "Dart", "Firebase Auth", "Firestore", "Cloud Functions", "FCM"],
    link: "https://github.com/beyuphan/KopernikProject",
    impact: {
      tr: [
        "İlan, başvuru ve profil verisi Firestore ile tüm kullanıcılar arasında anlık senkron kalır.",
        "Yeni bir başvuru oluştuğunda ilan sahibine sunucu tarafından push bildirimi gönderilir; uygulama kapalıyken de ulaşır.",
        "Herkese açık profil sayfaları ile tedarikçiler birbirini keşfeder."
      ],
      en: [
        "Listing, application, and profile data stay synchronized instantly across all users through Firestore.",
        "When a new application is created, the server pushes a notification to the listing owner, reaching them even when the app is closed.",
        "Public profile pages let suppliers discover each other."
      ]
    },
    architecture: {
      tr: "Flutter (Dart) istemci; ekranlar: giriş, kayıt, ana sayfa, tedarik detayı, başvuru, profil, herkese açık profil, bağlantılar. Servis katmanı: auth_service ve notification_service (FCM token yönetimi); ortak widget'lar ve tema. Firebase tarafı: Auth, Firestore (users, supplies ve supplies/{id}/applications alt koleksiyonu) ve Node.js Cloud Functions (v2).",
      en: "A Flutter (Dart) client; screens: login, register, home, supply detail, application, profile, public profile, and links. Service layer: auth_service and notification_service (FCM token management); shared widgets and theme. Firebase side: Auth, Firestore (users, supplies, and the supplies/{id}/applications subcollection), and Node.js Cloud Functions (v2)."
    },
    algorithms: {
      tr: [
        "Firestore tetikleyicisi: supplies/{supplyId}/applications/{applicantId} altında yeni belge oluşunca onDocumentCreated çalışır",
        "Fonksiyon zinciri: ilanı bulur, ilan sahibini (created_by) ve başvuran kullanıcıyı Firestore'dan okur, satıcının fcmToken'ını alır ve başvuranın adıyla FCM bildirimi gönderir",
        "Eksik belge, kullanıcı veya boş token durumunda fonksiyon sessizce ve loglayarak erken çıkar; başvuru yazımı bu yüzden hiçbir zaman başarısız olmaz",
        "Kullanıcı belgesinde saklanan fcmToken alanı ile cihaz bazlı hedefleme (notification_service istemci tarafında token'ı yönetir)"
      ],
      en: [
        "Firestore trigger: onDocumentCreated fires when a new document appears under supplies/{supplyId}/applications/{applicantId}",
        "Function chain: finds the listing, reads the owner (created_by) and applicant from Firestore, gets the seller's fcmToken, and sends an FCM notification with the applicant's name",
        "On a missing document, user, or empty token the function exits early with logging, so writing an application never fails because of it",
        "Per-device targeting through the fcmToken field stored on the user document (notification_service manages the token on the client)"
      ]
    },
    technicalDetails: {
      problem: {
        tr: "Dinamik tedarik süreçlerinde ilan sahibi, başvuru geldiğini uygulamayı açmadıkça fark etmiyor; veriler farklı cihazlarda senkron olmadığında iletişim ve stok takibi aksıyor.",
        en: "In dynamic supply processes, the listing owner doesn't notice an application until they open the app; when data isn't synchronized across devices, communication and tracking break down."
      },
      solution: {
        tr: "Firestore ile gerçek zamanlı veri, Firebase Auth ile kimlik ve Cloud Functions + FCM ile olay güdümlü bildirim: istemci sadece başvuru belgesini yazar, bildirim mantığı tamamen sunucuda çalışır.",
        en: "Real-time data with Firestore, identity with Firebase Auth, and event-driven notification with Cloud Functions + FCM: the client only writes the application document and the notification logic runs entirely on the server."
      },
      engineeringNote: {
        tr: "Bildirimi istemciden göndermek, başka bir kullanıcının FCM token'ına erişmeyi gerektirir. Bunu Firestore tetikleyicili bir Cloud Function'a taşıyınca istemci yalnızca başvuru belgesini yazıyor, token okuma ve gönderme sunucuda kalıyor.",
        en: "Sending the notification from the client would require reading another user's FCM token. Moving it to a Firestore-triggered Cloud Function means the client only writes the application document, while token reading and sending stay on the server."
      },
      flow: [
        { stepTitle: { tr: "Kimlik", en: "Identity" }, stepDesc: { tr: "Firebase Auth ile kayıt/giriş; FCM token'ı kullanıcı belgesine yazılır.", en: "Sign-up/login via Firebase Auth; the FCM token is written to the user document." } },
        { stepTitle: { tr: "İlan", en: "Listing" }, stepDesc: { tr: "Kullanıcı tedarik ilanı açar; ilanlar Firestore'dan canlı listelenir.", en: "A user posts a supply listing; listings are shown live from Firestore." } },
        { stepTitle: { tr: "Başvuru", en: "Application" }, stepDesc: { tr: "Başvuran, ilanın applications alt koleksiyonuna belge yazar.", en: "An applicant writes a document into the listing's applications subcollection." } },
        { stepTitle: { tr: "Bildirim", en: "Notification" }, stepDesc: { tr: "Cloud Function tetiklenir, ilan sahibinin token'ına FCM bildirimi gönderir.", en: "A Cloud Function fires and sends an FCM notification to the listing owner's token." } }
      ],
      highlights: {
        tr: ["Firestore Tetikleyicili Cloud Function", "FCM ile Sunucu Taraflı Push", "Gerçek Zamanlı Senkronizasyon", "Herkese Açık Tedarikçi Profilleri"],
        en: ["Firestore-Triggered Cloud Function", "Server-Side Push via FCM", "Real-Time Synchronization", "Public Supplier Profiles"]
      }
    }
  },
  {
    id: 8,
    title: "Turing PIN Simülatörü",
    category: { tr: "Kuramsal Bilgisayar Bilimi", en: "Theoretical Computer Science" },
    year: "2025",
    role: { tr: "Geliştirici", en: "Developer" },
    description: {
      tr: "Turing makinesi kuramsal konseptini kullanarak ATM PIN kodu doğrulama mekanizmasını simüle eden bir karar mekanizması.",
      en: "A decision mechanism simulating ATM PIN verification using the theoretical concept of a Turing machine."
    },
    tags: ["Python", "Turing Machine", "Automata Theory", "Simulation"],
    link: "https://github.com/beyuphan/TuringPINProject",
    impact: {
      tr: [
        "Soyut bir kuramsal kavramı somut bir güvenlik protokolüyle gösterir.",
        "Adım adım simülasyon ile öğretici bir görselleştirme sunar."
      ],
      en: [
        "Demonstrates an abstract theoretical concept through a concrete security protocol.",
        "Offers an instructive visualization with step-by-step simulation."
      ]
    },
    architecture: {
      tr: "Python; durum geçiş tablosu (Q0-Q6); adım adım simülasyon modu.",
      en: "Python; a state-transition table (Q0-Q6); a step-by-step simulation mode."
    },
    algorithms: {
      tr: [
        "Deterministik Turing makinesi (Q0-Q6 durum geçişleri)",
        "X/Y işaretleme ile rakam eşleştirme",
        "Şerit tabanlı KABUL/RED karar süreci"
      ],
      en: [
        "Deterministic Turing machine (Q0-Q6 state transitions)",
        "Digit matching via X/Y marking",
        "Tape-based ACCEPT/REJECT decision process"
      ]
    },
    technicalDetails: {
      problem: {
        tr: "Kuramsal bilgisayar biliminin temel yapısı Turing makinesini, gerçek dünyadaki bir güvenlik protokolü (PIN doğrulama) üzerinden somutlaştırmak.",
        en: "Concretizing the Turing machine — a fundamental construct of theoretical CS — through a real-world security protocol (PIN verification)."
      },
      solution: {
        tr: "4 haneli PIN'leri karşılaştıran bir Turing makinesi; '#' ayırıcı ve boşluk içeren özel şeritte rakamları 'X'/'Y' ile işaretleyerek deterministik karar verir.",
        en: "A Turing machine comparing 4-digit PINs; on a special tape with '#' separators and spaces, it marks digits with 'X'/'Y' to decide deterministically."
      },
      engineeringNote: {
        tr: "Durum geçişlerinde boşluk ve işaretleyiciler atlanacak şekilde optimize edildi; karmaşıklık geçiş tablosuyla minimize edildi.",
        en: "State transitions are optimized to skip spaces and markers; complexity is minimized via the transition table."
      },
      flow: [
        { stepTitle: { tr: "Şerit Formatlama", en: "Tape Formatting" }, stepDesc: { tr: "Kullanıcı ve sistem PIN'leri ayırıcılarla şeride yazılır.", en: "User and system PINs are written to the tape with separators." } },
        { stepTitle: { tr: "Karakter İşleme", en: "Character Processing" }, stepDesc: { tr: "İlk rakam okunur, 'X' ile işaretlenir, belleğe alınır.", en: "The first digit is read, marked 'X', and stored." } },
        { stepTitle: { tr: "Karşılaştırma", en: "Comparison" }, stepDesc: { tr: "Sistem PIN'inde eşleşen rakam 'Y' ile işaretlenir.", en: "A matching digit in the system PIN is marked 'Y'." } },
        { stepTitle: { tr: "Final Doğrulama", en: "Final Verification" }, stepDesc: { tr: "İşaretlenmemiş rakam kalıp kalmadığına göre KABUL/RED.", en: "ACCEPT/REJECT depending on whether any unmarked digit remains." } }
      ],
      highlights: {
        tr: ["Deterministik Karar Mekanizması", "Adım Adım Simülasyon", "Özel Alfabe & İşaretleme", "Teorik Bilgisayar Bilimi"],
        en: ["Deterministic Decision Mechanism", "Step-by-Step Simulation", "Custom Alphabet & Marking", "Theoretical CS Application"]
      }
    }
  },
  {
    id: 5,
    title: "Projecte: Kurumsal Kaynak Sistemi",
    category: { tr: "Yazılım Mimarisi & ERP", en: "Software Architecture & ERP" },
    year: "2024",
    role: { tr: "Geliştirici", en: "Developer" },
    description: {
      tr: "Kurumsal süreçleri, çalışan verimliliğini ve proje görev dağılımlarını MySQL tabanlı ilişkisel mimaride yöneten, yüksek performanslı C# masaüstü platformu.",
      en: "A high-performance C# desktop platform managing enterprise processes, employee productivity, and project task allocation on a MySQL-based relational architecture."
    },
    tags: ["C#", ".NET WinForms", "MySQL", "Cryptography", "Data Management"],
    link: "https://github.com/beyuphan/Projecte",
    impact: {
      tr: [
        "Çalışan-proje-görev ilişkilerini dijitalleştirerek kaynak planlamasını kolaylaştırır.",
        "Veri güvenliği ve sıkıştırma ile performanslı bir masaüstü deneyimi sunar."
      ],
      en: [
        "Digitizes employee-project-task relationships to simplify resource planning.",
        "Delivers a performant desktop experience with data security and compression."
      ]
    },
    architecture: {
      tr: "C# WinForms; katmanlı mimari (DAL); MySQL Connector; BouncyCastle; ZstdSharp/LZ4.",
      en: "C# WinForms; layered architecture (DAL); MySQL Connector; BouncyCastle; ZstdSharp/LZ4."
    },
    algorithms: {
      tr: [
        "Katmanlı mimari + DAL ile asenkron CRUD",
        "BouncyCastle ile kriptografik kimlik doğrulama",
        "ZstdSharp/LZ4 ile veri sıkıştırma",
        "Employee-Project-Task ilişkisel haritalama"
      ],
      en: [
        "Async CRUD via layered architecture + DAL",
        "Cryptographic authentication with BouncyCastle",
        "Data compression with ZstdSharp/LZ4",
        "Employee-Project-Task relational mapping"
      ]
    },
    technicalDetails: {
      problem: {
        tr: "Çalışanların birden fazla projeye atanması, görev bazlı efor takibi ve bu verilerin merkezi veritabanında tutarlı tutulması.",
        en: "Assigning employees to multiple projects, tracking task-based effort, and keeping this data consistent in a central database."
      },
      solution: {
        tr: "C# WinForms üzerinde MySQL Connector ile katmanlı sistem; Employee, Project ve Task varlıkları arasında ilişkiler kurarak kaynak planlamasını dijitalize eder.",
        en: "A layered system on C# WinForms with MySQL Connector; it digitizes resource planning by relating Employee, Project, and Task entities."
      },
      engineeringNote: {
        tr: "Veri güvenliği için BouncyCastle; veritabanı haberleşmesinde ZstdSharp ve LZ4 ile trafik ve işleme performansı optimize edildi.",
        en: "BouncyCastle for data security; ZstdSharp and LZ4 optimize traffic and processing performance in DB communication."
      },
      flow: [
        { stepTitle: { tr: "Kimlik Doğrulama", en: "Authentication" }, stepDesc: { tr: "Kayıt/giriş güvenli hashleme ile yetkilendirme katmanından geçer.", en: "Sign-up/login pass an authorization layer with secure hashing." } },
        { stepTitle: { tr: "İlişkisel Haritalama", en: "Relational Mapping" }, stepDesc: { tr: "Çalışanlar ve projeler normalize bir yapıya aktarılır.", en: "Employees and projects are mapped to a normalized structure." } },
        { stepTitle: { tr: "Görev Dağılımı", en: "Task Allocation" }, stepDesc: { tr: "Projelere görevler açılıp çalışanlara atanır.", en: "Tasks are created per project and assigned to employees." } },
        { stepTitle: { tr: "Senkronizasyon", en: "Synchronization" }, stepDesc: { tr: "DAL üzerinden asenkron CRUD ile MySQL'e yazılır.", en: "Async CRUD via the DAL writes to MySQL." } }
      ],
      highlights: {
        tr: ["Katmanlı Mimari", "Kriptografik Güvenlik", "Project-Employee Mapping", "Veri Sıkıştırma Optimizasyonu"],
        en: ["Layered Architecture", "Cryptographic Security", "Project-Employee Mapping", "Data Compression Optimization"]
      }
    }
  },
];
