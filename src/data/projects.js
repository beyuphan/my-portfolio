// Çevrilebilir alanlar { tr, en } objesidir; bileşenler useApp().L() ile dili seçer.
// Mod alanları: role/impact (İK), architecture/algorithms (Teknik). link/demoLink opsiyoneldir.
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
    id: 2,
    title: "JulardzijaSmile",
    category: { tr: "Full-Stack Ekosistem", en: "Full-Stack Ecosystem" },
    year: "2025",
    role: { tr: "Full-Stack Mühendis", en: "Full-Stack Engineer" },
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
      tr: "FastAPI + OpenCV tabanlı, üç görüntü işleme aracını tek serviste sunan uygulama: evrak düzeltme, optik form (OMR) okuma ve otomatik tane sayma. HuggingFace Space üzerinde Docker ile canlı yayında.",
      en: "A FastAPI + OpenCV application offering three image-processing tools in one service: document correction, optical mark (OMR) reading, and automatic grain counting. Live on a HuggingFace Space via Docker."
    },
    tags: ["Python", "FastAPI", "OpenCV", "scikit-image", "Computer Vision", "Docker"],
    demoLink: "https://huggingface.co/spaces/beyuphan/goru-isleme",
    impact: {
      tr: [
        "Eğri/çarpık çekilmiş belgeleri otomatik düzelterek okunabilirliği artırır.",
        "Çoktan seçmeli optik formları otomatik okur (OMR).",
        "Tohum/tane gibi nesneleri kümelenmiş olsalar bile doğru sayar."
      ],
      en: [
        "Auto-corrects skewed/warped documents to improve readability.",
        "Automatically reads multiple-choice optical forms (OMR).",
        "Counts objects like seeds/grains accurately even when clustered."
      ]
    },
    architecture: {
      tr: "FastAPI; üç ayrı router/servis (document, omr, counter); OpenCV + NumPy + scikit-image; Docker ile HuggingFace Space'te (port 7860) yayınlı.",
      en: "FastAPI with three separate routers/services (document, omr, counter); OpenCV + NumPy + scikit-image; published on a HuggingFace Space (port 7860) via Docker."
    },
    algorithms: {
      tr: [
        "Evrak: perspektif dönüşümü (getPerspectiveTransform / warpPerspective) + kontrast iyileştirme",
        "OMR: adaptif eşikleme + kontur/balon tespiti ile işaretli şıkların okunması",
        "Tane sayma: connected components + distance transform + Watershed segmentasyon",
        "Yuvarlaklık oranı A/(πD²) ile tekil/kümelenmiş tane ayrımı; ağırlıklı medyan tane alanı tahmini"
      ],
      en: [
        "Document: perspective transform (getPerspectiveTransform / warpPerspective) + contrast enhancement",
        "OMR: adaptive thresholding + contour/bubble detection to read marked options",
        "Grain counting: connected components + distance transform + Watershed segmentation",
        "Single-vs-clustered separation via roundness ratio A/(πD²); weighted-median grain-area estimation"
      ]
    },
    technicalDetails: {
      problem: {
        tr: "Evrak dijitalleştirme, optik form okuma ve nesne sayma gibi işleri tek, erişilebilir bir görüntü işleme servisinde toplamak.",
        en: "Bringing document digitization, optical-form reading, and object counting together in one accessible image-processing service."
      },
      solution: {
        tr: "FastAPI üzerinde modüler OpenCV servisleri; her iş için ayrı router/servis; Docker ile HuggingFace Space'te yayın.",
        en: "Modular OpenCV services on FastAPI; a separate router/service per task; published on a HuggingFace Space via Docker."
      },
      engineeringNote: {
        tr: "Tane sayma, kümelenmiş taneleri ayırmak için distance transform + Watershed kullanır; yuvarlaklık oranıyla tekil/kümeli ayrımı yapıp ağırlıklı medyan alanla sayıyı tahmin eder.",
        en: "Grain counting uses distance transform + Watershed to split clusters; it separates single vs clustered blobs by roundness ratio and estimates the count via weighted-median area."
      },
      flow: [
        { stepTitle: { tr: "Yükleme", en: "Upload" }, stepDesc: { tr: "Görsel ilgili API ucuna gönderilir (evrak / OMR / sayma).", en: "An image is sent to the relevant endpoint (document / OMR / count)." } },
        { stepTitle: { tr: "Ön İşleme", en: "Preprocessing" }, stepDesc: { tr: "Gri tonlama, eşikleme ve perspektif/kontur hazırlığı yapılır.", en: "Grayscale, thresholding, and perspective/contour preparation are applied." } },
        { stepTitle: { tr: "Analiz", en: "Analysis" }, stepDesc: { tr: "İlgili algoritma çalışır (perspektif düzeltme / OMR okuma / Watershed sayma).", en: "The relevant algorithm runs (perspective correction / OMR reading / Watershed counting)." } },
        { stepTitle: { tr: "Sonuç", en: "Result" }, stepDesc: { tr: "İşlenmiş görsel ve sayısal sonuç döner.", en: "The processed image and numeric result are returned." } }
      ],
      highlights: {
        tr: ["Watershed ile Tane Sayma", "Perspektif Düzeltme", "OMR Optik Form Okuma", "Docker ile Canlı HF Space"],
        en: ["Watershed Grain Counting", "Perspective Correction", "OMR Optical-Form Reading", "Live HF Space via Docker"]
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
      tr: "TUA Astrohackathon 2025 için geliştirilen uzay sanayii B2B ekosistem eşleştirme platformu; projeler ile şirketleri ağırlıklı bir skorla otomatik eşleştirir.",
      en: "A space-industry B2B ecosystem matchmaking platform built for TUA Astrohackathon 2025; it automatically matches projects with companies using a weighted score."
    },
    tags: ["FastAPI", "React", "PostgreSQL", "SQLAlchemy", "Python", "Docker"],
    // link: yok (linksiz feature)
    impact: {
      tr: [
        "Yeni proje yayınlanınca uygun şirketleri otomatik skorlar ve sıralar.",
        "Eşik altı eşleşmeleri başvuruya kapatarak kaliteyi korur.",
        "Hackathon kapsamında uçtan uca (backend + frontend + DB) teslim edildi."
      ],
      en: [
        "Automatically scores and ranks suitable companies when a new project is posted.",
        "Locks sub-threshold matches out of applications to preserve quality.",
        "Delivered end-to-end (backend + frontend + DB) within the hackathon."
      ]
    },
    architecture: {
      tr: "FastAPI + SQLAlchemy + PostgreSQL backend; React 18 + Vite frontend; Docker Compose; seed verisiyle hızlı kurulum.",
      en: "FastAPI + SQLAlchemy + PostgreSQL backend; React 18 + Vite frontend; Docker Compose; quick setup with seed data."
    },
    algorithms: {
      tr: [
        "Ağırlıklı eşleştirme skoru (0-100): Kategori %40, Fiyat %30, Etiket %20, Konum %10",
        "Haversine ile şehirler arası mesafe (maks. 500 km üzerinden normalizasyon)",
        "40 puan altı eşleşmelerde başvuru kilidi"
      ],
      en: [
        "Weighted match score (0-100): Category 40%, Price 30%, Tags 20%, Location 10%",
        "City-to-city distance via Haversine (normalized over a 500 km max)",
        "Application lock for matches under 40 points"
      ]
    },
    technicalDetails: {
      problem: {
        tr: "Uzay sanayii ekosisteminde proje sahipleri ile yetkin şirketleri hızlı ve objektif şekilde eşleştirmek.",
        en: "Matching project owners with capable companies quickly and objectively in the space-industry ecosystem."
      },
      solution: {
        tr: "Çok kriterli ağırlıklı skorlama servisi; her yeni projede aday şirketleri otomatik puanlayıp sıralar.",
        en: "A multi-criteria weighted scoring service that automatically scores and ranks candidate companies for each new project."
      },
      engineeringNote: {
        tr: "Eşleştirme skoru kategori/fiyat/etiket/konum bileşenlerinden 0-100 arası hesaplanır; konum bileşeni Haversine mesafesiyle 500 km üzerinden normalize edilir.",
        en: "The match score is computed 0-100 from category/price/tags/location components; the location component is normalized via Haversine distance over 500 km."
      },
      flow: [
        { stepTitle: { tr: "Kayıt", en: "Registration" }, stepDesc: { tr: "Kuruluşlar ve projeler veritabanına eklenir.", en: "Organizations and projects are added to the database." } },
        { stepTitle: { tr: "Skorlama", en: "Scoring" }, stepDesc: { tr: "Yeni projede aday şirketler 4 kritere göre puanlanır.", en: "Candidate companies are scored on 4 criteria for a new project." } },
        { stepTitle: { tr: "Eşik", en: "Threshold" }, stepDesc: { tr: "40 puan altı eşleşmeler başvuruya kapatılır.", en: "Matches below 40 points are locked out of applications." } },
        { stepTitle: { tr: "Eşleşme", en: "Matching" }, stepDesc: { tr: "Sıralı eşleşmeler ve başvurular yönetilir.", en: "Ranked matches and applications are managed." } }
      ],
      highlights: {
        tr: ["Ağırlıklı Çok Kriterli Eşleştirme", "Haversine Konum Skoru", "FastAPI + React Uçtan Uca", "Hackathon Teslimi"],
        en: ["Weighted Multi-Criteria Matching", "Haversine Location Score", "FastAPI + React End-to-End", "Hackathon Delivery"]
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
      tr: "Yazılım projelerinden Gemini ile otomatik akademik rapor üreten VS Code eklentisi; kod tabanını analiz edip raporu webview panelinde sunar.",
      en: "A VS Code extension that auto-generates academic reports from software projects with Gemini; it analyzes the codebase and presents the report in a webview panel."
    },
    tags: ["TypeScript", "VS Code API", "Gemini", "Python", "AI"],
    link: "https://github.com/beyuphan/codebrief-ai",
    impact: {
      tr: [
        "Proje raporu yazma yükünü otomatikleştirir.",
        "Kod tabanından bağlam çıkarıp Gemini ile derli toplu rapor üretir.",
        "VS Code içinde tek komutla çalışır; yayımlanmış bir eklentidir."
      ],
      en: [
        "Automates the burden of writing project reports.",
        "Extracts context from the codebase and produces a tidy report with Gemini.",
        "Runs with a single command inside VS Code; a published extension."
      ]
    },
    architecture: {
      tr: "TypeScript VS Code eklentisi (webview sidebar + komut) + arka uç servis (varsayılan localhost:8000); rapor üretimi Gemini API ile yapılır.",
      en: "A TypeScript VS Code extension (webview sidebar + command) + a backend service (default localhost:8000); report generation uses the Gemini API."
    },
    algorithms: {
      tr: [
        "Kod tabanı tarama + bağlam çıkarımı",
        "Gemini ile yapılandırılmış akademik rapor üretimi",
        "Webview ↔ eklenti mesajlaşması"
      ],
      en: [
        "Codebase scanning + context extraction",
        "Structured academic report generation with Gemini",
        "Webview ↔ extension messaging"
      ]
    },
    technicalDetails: {
      problem: {
        tr: "Öğrenci ve geliştiricilerin projeleri için akademik rapor yazmasının zaman alıcı ve tekrarlı olması.",
        en: "Writing academic reports for projects is time-consuming and repetitive for students and developers."
      },
      solution: {
        tr: "VS Code eklentisi kod tabanını analiz eder, Gemini'ye bağlam göndererek yapılandırılmış rapor üretir ve webview'da gösterir.",
        en: "The VS Code extension analyzes the codebase, sends context to Gemini to produce a structured report, and renders it in a webview."
      },
      engineeringNote: {
        tr: "Eklenti (TypeScript) ile raporu üreten arka uç ayrıktır; backend URL'i ayarlanabilir; rapor webview panelinde canlı sunulur.",
        en: "The TypeScript extension and the report-generating backend are decoupled; the backend URL is configurable; the report is presented live in a webview panel."
      },
      flow: [
        { stepTitle: { tr: "Komut", en: "Command" }, stepDesc: { tr: "VS Code içinde 'Rapor Oluştur' çalıştırılır.", en: "'Generate Report' is run inside VS Code." } },
        { stepTitle: { tr: "Analiz", en: "Analysis" }, stepDesc: { tr: "Eklenti proje dosyalarından bağlam çıkarır.", en: "The extension extracts context from project files." } },
        { stepTitle: { tr: "Üretim", en: "Generation" }, stepDesc: { tr: "Gemini yapılandırılmış raporu üretir.", en: "Gemini produces the structured report." } },
        { stepTitle: { tr: "Sunum", en: "Presentation" }, stepDesc: { tr: "Rapor webview panelinde gösterilir.", en: "The report is shown in the webview panel." } }
      ],
      highlights: {
        tr: ["Gemini Destekli Rapor", "VS Code Eklentisi (Webview)", "Kod Tabanı Analizi", "Yayımlanmış Eklenti"],
        en: ["Gemini-Powered Reports", "VS Code Extension (Webview)", "Codebase Analysis", "Published Extension"]
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
      tr: "Kullanıcıların kitap incelemeleri paylaştığı, birbirini takip edebildiği ve veri tabanı odaklı kurgulanan sosyal etkileşim platformu.",
      en: "A database-driven social platform where users share book reviews, rate books, and follow one another."
    },
    tags: ["Java", "Jakarta EE", "MySQL", "AJAX", "Tomcat"],
    link: "https://github.com/beyuphan/KitapKosem",
    reportPath: "/reports/web-rapor.pdf",
    impact: {
      tr: [
        "Güvenli kimlik doğrulama ve sosyal etkileşim (takip, beğeni, puan) sunar.",
        "Sayfa yenilemeden akan, hızlı bir kullanıcı deneyimi sağlar."
      ],
      en: [
        "Provides secure authentication and social interaction (follow, like, rate).",
        "Delivers a fast UX that flows without page reloads."
      ]
    },
    architecture: {
      tr: "Java/Jakarta EE (Servlet/JSP) MVC; DAO veri katmanı; MySQL; AJAX/JSON; Apache Tomcat.",
      en: "Java/Jakarta EE (Servlet/JSP) MVC; a DAO data layer; MySQL; AJAX/JSON; Apache Tomcat."
    },
    algorithms: {
      tr: [
        "MVC + DAO katmanlı mimari",
        "jBCrypt ile güvenli şifre hashleme",
        "AJAX ile sonsuz kaydırma (infinite scroll) zaman akışı",
        "imgBB API + HttpClient ile görsel yükleme"
      ],
      en: [
        "Layered MVC + DAO architecture",
        "Secure password hashing with jBCrypt",
        "AJAX infinite-scroll timeline",
        "Image upload via imgBB API + HttpClient"
      ]
    },
    technicalDetails: {
      problem: {
        tr: "Kullanıcıların okuma deneyimlerini paylaşabileceği dinamik, güvenli ve etkileşimli bir sosyal topluluk platformu mimarisi kurmak.",
        en: "Build a dynamic, secure, and interactive social community platform where users can share their reading experiences."
      },
      solution: {
        tr: "Jakarta EE (Servlet/JSP) tabanlı, MVC desenine uygun katmanlı mimari; DAO katmanı veritabanını soyutlar.",
        en: "A layered architecture on Jakarta EE (Servlet/JSP) following MVC; a DAO layer abstracts the database."
      },
      engineeringNote: {
        tr: "DAO katmanı veritabanı etkileşimini soyutlayarak yönetilebilirliği artırır; jBCrypt ile şifreler güvenli hashlenir.",
        en: "The DAO layer abstracts database interaction to improve maintainability; jBCrypt securely hashes passwords."
      },
      flow: [
        { stepTitle: { tr: "Servlet Controller", en: "Servlet Controller" }, stepDesc: { tr: "HTTP istekleri Servlet'lerce yakalanır ve iş mantığına yönlendirilir.", en: "HTTP requests are captured by servlets and routed to business logic." } },
        { stepTitle: { tr: "DAO Katmanı", en: "DAO Layer" }, stepDesc: { tr: "POJO modellerle MySQL üzerinde CRUD yürütülür.", en: "CRUD runs over MySQL using POJO models." } },
        { stepTitle: { tr: "AJAX & JSON", en: "AJAX & JSON" }, stepDesc: { tr: "Beğeni ve zaman akışı sayfa yenilenmeden asenkron güncellenir.", en: "Likes and the timeline update asynchronously without reloads." } }
      ],
      highlights: {
        tr: ["MVC Mimari Tasarımı", "BCrypt ile Güvenli Hashleme", "Infinite Scroll Zaman Akışı", "imgBB Görsel Entegrasyonu"],
        en: ["MVC Architecture Design", "Secure Hashing with BCrypt", "Infinite-Scroll Timeline", "imgBB Image Integration"]
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
    year: "2025",
    role: { tr: "Mobil Geliştirici", en: "Mobile Developer" },
    description: {
      tr: "Firebase backend entegrasyonu ile çalışan, gerçek zamanlı stok ve tedarik zinciri takip mekanizmalarına sahip mobil platform.",
      en: "A mobile platform with real-time stock and supply-chain tracking, powered by Firebase backend integration."
    },
    tags: ["Flutter", "Dart", "Firebase Auth", "Firestore", "Cloud Functions"],
    link: "https://github.com/beyuphan/KopernikProject",
    impact: {
      tr: [
        "Tüm kullanıcılar arasında anlık veri senkronizasyonu sağlar.",
        "Güvenli kimlik doğrulama ve merkezi profil yönetimi sunar."
      ],
      en: [
        "Keeps data synchronized instantly across all users.",
        "Provides secure authentication and centralized profile management."
      ]
    },
    architecture: {
      tr: "Flutter (BLoC/Provider); Firebase Auth + Firestore; Cloud Storage; Lottie animasyonları.",
      en: "Flutter (BLoC/Provider); Firebase Auth + Firestore; Cloud Storage; Lottie animations."
    },
    algorithms: {
      tr: [
        "Firestore ile gerçek zamanlı veri senkronizasyonu",
        "Firebase Auth tabanlı güvenli oturum",
        "Reaktif stok/tedarik akışı"
      ],
      en: [
        "Real-time data sync with Firestore",
        "Secure sessions via Firebase Auth",
        "Reactive stock/supply stream"
      ]
    },
    technicalDetails: {
      problem: {
        tr: "Dinamik tedarik süreçlerinde verilerin senkronize olmaması nedeniyle yaşanan stok takibi ve iletişim aksaklıkları.",
        en: "Stock-tracking and communication breakdowns in dynamic supply processes caused by unsynchronized data."
      },
      solution: {
        tr: "Flutter (BLoC/Provider) ve Firestore ile tüm kullanıcılar arasında anlık senkronizasyon; profiller ve tedarik detayları merkezi bulutta yönetilir.",
        en: "Instant sync across users with Flutter (BLoC/Provider) and Firestore; profiles and supply details managed centrally in the cloud."
      },
      engineeringNote: {
        tr: "Kullanıcı deneyimi özel ses efektleri ve Lottie animasyonlarıyla desteklendi; bildirim servisleri entegre edildi.",
        en: "UX is supported by custom sound effects and Lottie animations; notification services are integrated."
      },
      flow: [
        { stepTitle: { tr: "Firebase Auth", en: "Firebase Auth" }, stepDesc: { tr: "Kullanıcılar güvenli kayıt olur ve profillerini yönetir.", en: "Users sign up securely and manage their profiles." } },
        { stepTitle: { tr: "Gerçek Zamanlı Takip", en: "Real-time Tracking" }, stepDesc: { tr: "Tedarik listeleri Firestore üzerinden anlık güncellenir.", en: "Supply lists update instantly via Firestore." } },
        { stepTitle: { tr: "Zaman Akışı", en: "Timeline" }, stepDesc: { tr: "Tedarik geçmişi ve aktif durum görsel akışla sunulur.", en: "Supply history and active status are presented as a visual flow." } }
      ],
      highlights: {
        tr: ["Firebase Gerçek Zamanlı Sync", "Cloud Storage Entegrasyonu", "Özel UI Animasyonları", "Merkezi Profil Yönetimi"],
        en: ["Firebase Real-time Sync", "Cloud Storage Integration", "Custom UI Animations", "Centralized Profile Management"]
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
