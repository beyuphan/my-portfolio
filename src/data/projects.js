export const projects = [
  {
    id: 1,
    title: "GeoIntel MCP",
    category: "Data & AI",
    description: "Konum tabanlı akıllı karar destek sistemi mimarisi. Model Context Protocol (MCP) kullanarak proaktif veri analitiği ve çok kaynaklı veri entegrasyonu sunar.",
    tags: ["React", "MCP", "Python", "Data Analytics"],
    link: "https://github.com/beyuphan/geointel-mcp",
    technicalDetails: {
      problem: "Dinamik konum verilerinin, statik harita katmanlarının ötesine geçip kullanıcıya proaktif bir zeka çıktısı üretememesi.",
      solution: "Model Context Protocol (MCP) mimarisi üzerine inşa edilen sistemde, veri kaynakları ile AI ajanları arasında standartlaştırılmış bir iletişim hattı kuruldu.",
      engineeringNote: "AI ajanları, MCP köprüsü sayesinde doğrudan veritabanı erişimine ihtiyaç duymadan bağlamsal konum verilerini standart protokoller üzerinden tüketir.",
      flow: [
        { stepTitle: "Veri Entegrasyonu", stepDesc: "Farklı formatlardaki coğrafi veriler sisteme dahil edilir." },
        { stepTitle: "MCP Köprüsü", stepDesc: "Veriler, AI modellerinin anlayabileceği standart yapıya dönüştürülür." },
        { stepTitle: "Ajan Analizi", stepDesc: "AI modelleri konum verisini analiz ederek proaktif kararlar üretir." },
        { stepTitle: "Karar Destek", stepDesc: "Kullanıcıya müdahale gerektirmeyen, konum tabanlı akıllı bildirimler sunulur." }
      ],
      highlights: ["Proaktif Karar Destek Sistemi", "MCP Entegrasyonu", "Akıllı Tahminleme Mekanizmaları"]
    }
  },
  {
    id: 3,
    title: "Fourier Ses Temizleme",
    category: "Signal Processing",
    description: "FFT (Hızlı Fourier Dönüşümü) tabanlı spektral çıkarma yöntemiyle ses kayıtlarındaki gürültü bileşenlerini filtreleyen mühendislik çözümü.",
    tags: ["Python", "STFT", "FFT", "Signal Processing"], // Rapor Python tabanlı 
    link: "https://github.com/beyuphan/fourier-denoise",
    reportPath: "/reports/sinyalrapor.pdf",
    technicalDetails: {
      problem: "Gürültülü ortamlarda kaydedilmiş insan sesi kayıtlarındaki gürültü bileşenlerini azaltarak sesin anlaşılırlığını iyileştirmek[cite: 13, 14].",
      solution: "Kısa Zamanlı Fourier Dönüşümü (STFT) tabanlı Spektral Çıkarım (Spectral Subtraction) yöntemi kullanılarak gürültü profilinin genlik spektrumundan ayrıştırılması[cite: 19, 22].",
      engineeringNote: "Spektral sızıntıyı önlemek için Hann penceresi kullanılmış, sentez aşamasında ise çerçeveler arası pürüzsüz geçiş için Overlap-Add (OLA) yöntemi tercih edilmiştir[cite: 23, 24, 33].",
      flow: [
        { stepTitle: "STFT & Pencereleme", stepDesc: "Sinyal %50-75 bindirmeli çerçevelere bölünür ve Hann penceresi uygulanır." },
        { stepTitle: "Gürültü Modelleme", stepDesc: "Sessiz bölümlerden (varsayılan 0.5-3 sn) ortalama genlik spektrumu hesaplanarak profil elde edilir[cite: 26, 27]." },
        { stepTitle: "Spektral Çıkarım", stepDesc: "Gürültülü sinyal genliğinden, gürültü profili bir alfa faktörü ile ölçeklenerek çıkarılır[cite: 28]." },
        { stepTitle: "ISTFT & OLA", stepDesc: "Faz bilgisi korunarak Ters FFT uygulanır ve sinyal zaman domeninde sentezlenir[cite: 30, 32, 33]." }
      ],
      highlights: ["Gerçek Zamanlı Callback Mekanizması [cite: 35]", "Hann (Hanning) Pencereleme [cite: 24]", "Dinamik Temizleme Seviyeleri [cite: 17]"]
    }
  },
  {
    id: 6,
    title: "KitapKöşem",
    category: "Web Development",
    description: "Kullanıcıların kitap incelemeleri paylaştığı, birbirini takip edebildiği ve veri tabanı odaklı kurgulanan sosyal etkileşim platformu.",
    tags: ["Java", "Jakarta EE", "MySQL", "AJAX"],
    link: "https://github.com/beyuphan/KitapKosem",
    reportPath: "/reports/web-rapor.pdf",
    technicalDetails: {
      problem: "Kullanıcıların okuma deneyimlerini paylaşabileceği dinamik, güvenli ve etkileşimli bir sosyal topluluk platformu mimarisi kurmak[cite: 89].",
      solution: "Jakarta EE (Servlet/JSP) tabanlı, Model-View-Controller (MVC) tasarım desenine uygun katmanlı mimari geliştirilmesi[cite: 100, 108, 109].",
      engineeringNote: "DAO katmanı veritabanı etkileşimini soyutlayarak kodun yönetilebilirliğini artırırken, jBCrypt kütüphanesi ile şifrelerin güvenli hashlenmesi sağlanmıştır[cite: 105, 109, 114].",
      flow: [
        { stepTitle: "Servlet Controller", stepDesc: "HTTP istekleri Servlet'ler tarafından yakalanır ve iş mantığına yönlendirilir[cite: 121, 122]." },
        { stepTitle: "DAO Katmanı", stepDesc: "POJO model yapıları kullanılarak MySQL veritabanı üzerinden CRUD işlemleri yürütülür[cite: 112, 114]." },
        { stepTitle: "AJAX & JSON", stepDesc: "Beğeni sistemi ve zaman akışı (timeline) sayfa yenilenmeden asenkron olarak güncellenir[cite: 145, 152]." },
        { stepTitle: "External API", stepDesc: "Resim yükleme işlemleri HttpClient üzerinden imgBB API entegrasyonu ile yönetilir[cite: 107]." }
      ],
      highlights: ["MVC Mimari Tasarımı [cite: 109]", "BCrypt ile Güvenli Hashleme [cite: 105]", "Infinite Scroll Zaman Akışı [cite: 152]"]
    }
  },

  {
  id: 7,
  title: "Jetpack E-Ticaret",
  category: "Mobile Engineering",
  description: "Jetpack Compose ve modern Android mimarisi ile geliştirilmiş, API kısıtlarını akıllı algoritmalarla aşan e-ticaret platformu.",
  tags: ["Kotlin", "Jetpack Compose", "MVVM", "Hilt", "Retrofit", "DataStore"],
  link: "https://github.com/beyuphan/ECommerceApp-Android",
  technicalDetails: {
    problem: "API'nin favoriler ve sepette adet güncelleme gibi temel özellikleri desteklememesi nedeniyle oluşan 'statik' kullanıcı deneyimi kısıtı.",
    solution: "API kısıtlarını aşmak için DataStore ile cihaz tabanlı yerel favori sistemi ve ViewModel seviyesinde 'sepet birleştirme' algoritmaları geliştirildi. UI tarafında modern 'Swipe-to-Action' mekanizmalarıyla etkileşim zenginleştirildi.",
    engineeringNote: "Ağ trafiği, API'nin HTTP yapısı nedeniyle 'cleartextTraffic' izniyle yönetilmiş; asenkron veri akışı Retrofit ve Coroutines entegrasyonuyla optimize edilmiştir.",
    flow: [
      { stepTitle: "Asenkron Veri Akışı", stepDesc: "Retrofit ve Hilt kullanılarak Kasım Adalan API'sinden ürün verileri MVVM katmanlarına asenkron olarak çekilir." },
      { stepTitle: "Yerel Durum Yönetimi", stepDesc: "Jetpack DataStore kullanılarak, API desteği olmayan favori durumu cihaz hafızasında kalıcı ve reaktif hale getirilir." },
      { stepTitle: "Gestural Interaction", stepDesc: "SwipeToDismissBox ile ana sayfada hızlı sepete ekleme, sepette ise 'Undo' destekli silme mekanizması kurulur." },
      { stepTitle: "UI/UX & Navigation", stepDesc: "Landscapist Glide ile görsel performansı optimize edilirken, sayfalar arası nesne transferi Gson tabanlı asenkron yapıyla yönetilir." }
    ],
    highlights: [
      "Swipe-to-Add & Undo Delete Algoritması",
      "Local Favorites (DataStore) Mimarisi",
      "Hilt tabanlı Dependency Injection",
      "Custom UI/UX & Segmented Filtering"
    ]
  }
},
{
  id: 8,
  title: "Turing PIN Simülatörü",
  category: "Theoretical Computer Science",
  description: "Turing makinesi kuramsal konseptini kullanarak ATM PIN kodu doğrulama mekanizmasını simüle eden bir karar mekanizmasıdır.",
  tags: ["Python", "Turing Machine", "Automata Theory", "Simulation"],
  link: "https://github.com/beyuphan/TuringPINProject",
  technicalDetails: {
    problem: "Kuramsal bilgisayar biliminin en temel yapılarından biri olan Turing makinesinin, gerçek dünyadaki bir güvenlik protokolü (PIN doğrulama) üzerinden somutlaştırılması.",
    solution: "4 haneli PIN kodlarını karşılaştıran bir Turing makinesi tasarlandı. Sistem, '#' ayırıcıları ve ' ' boşluklarını içeren özel bir şerit yapısı üzerinde, rakamları 'X' ve 'Y' sembolleriyle işaretleyerek deterministik bir karar süreci yürütür.",
    engineeringNote: "Makine, durum geçişleri (Q0-Q6) sırasında boşluk karakterlerini (' ') ve işaretleyicileri atlayacak şekilde optimize edilmiş; geçiş tablosu üzerinden karmaşıklık minimize edilmiştir.",
    flow: [
      { stepTitle: "Şerit Formatlama", stepDesc: "Kullanıcı ve sistem PIN'leri, aralarına ayırıcılar eklenerek '# 1 2 3 4 # 1 2 3 4 #' formatında şeride aktarılır." },
      { stepTitle: "Karakter İşleme (Q1)", stepDesc: "Kullanıcı PIN'indeki ilk rakam okunur, 'X' ile işaretlenir ve rakam geçici belleğe (tasinan_rakam) alınır." },
      { stepTitle: "Spektral Karşılaştırma (Q3)", stepDesc: "Şerit kafası sistem PIN'ine ilerler, bellekteki rakamı sistemdekiyle kıyaslar; eşleşirse 'Y' ile işaretleyip geri döner." },
      { stepTitle: "Final Doğrulama (Q6)", stepDesc: "Tüm kullanıcı rakamları bittiğinde, sistem PIN'inde işaretlenmemiş (Y olmamış) rakam kalıp kalmadığı kontrol edilerek KABUL/RED kararı verilir." }
    ],
    highlights: [
      "Deterministik Karar Mekanizması",
      "Adım Adım Simülasyon Modu",
      "Özel Alfabe & İşaretleme Sistemi",
      "Teorik Bilgisayar Bilimi Uygulaması"
    ]
  }
},
  {
    id: 2, // Klinik Analiz projesini güncelliyoruz
    title: "JulardzijaSmile",
    category: "Full-Stack Ecosystem",
    description: "Saç ekim süreçleri için 5 farklı açıdan görsel standardizasyon sağlayan, NestJS ve Flutter tabanlı uçtan uca klinik yönetim platformu.",
    tags: ["NestJS", "Flutter", "Prisma", "S3", "Docker", "WebSockets"],
    link: "https://github.com/beyuphan/JulardzijaSmile",
    technicalDetails: {
      problem: "Saç ekimi öncesi konsültasyonlarda, hastaların gönderdiği fotoğrafların farklı açılardan ve kalitelerde olması nedeniyle analiz süreçlerinin standardize edilememesi.",
      solution: "Flutter tarafında geliştirilen 'Photo Wizard' modülü ile hastaların 5 kritik açıyı (ön, üst, sol, sağ, donör) doğru hizalaması sağlandı. Backend tarafında NestJS ve Prisma mimarisiyle veriler PostgreSQL'de tutulurken, yüksek çözünürlüklü görseller S3 entegrasyonu ile yönetildi.",
      engineeringNote: "Sistem, gerçek zamanlı doktor-hasta etkileşimi için WebSockets (Gateway) kullanır ve tüm servisler Docker-compose ile mikroservis standartlarında konteynırlanmıştır.",
      flow: [
        { stepTitle: "Asenkron Hizalama", stepDesc: "Photo Wizard, kamera overlay'leri kullanarak hastayı 5 farklı açıdan fotoğraf çekmeye yönlendirir." },
        { stepTitle: "S3 & Cloud Storage", stepDesc: "Çekilen görseller asenkron olarak AWS S3 standartlarındaki storage servisine yüklenir." },
        { stepTitle: "Admin Slot Yönetimi", stepDesc: "React tabanlı admin panelinden doktorlar, Prisma üzerinden gelen randevu slotlarını ve hasta timeline'ını yönetir." },
        { stepTitle: "Real-time Chat", stepDesc: "NestJS Gateway üzerinden sağlanan WebSocket bağlantısı ile doktor ve hasta arasında anlık veri transferi sağlanır." }
      ],
      highlights: ["Photo Wizard (5-Angle Standard)", "Microservice Architecture", "S3 Image Management", "Prisma ORM & PostgreSQL"]
    }
  },
  {
    id: 4, // Kopernik (Tedarik) projesini güncelliyoruz
    title: "Kopernik Tedarik Yönetimi",
    category: "Mobile Development",
    description: "Firebase backend entegrasyonu ile çalışan, real-time stok ve tedarik zinciri takip mekanizmalarına sahip mobil platform.",
    tags: ["Flutter", "Dart", "Firebase Auth", "Firestore", "Cloud Functions"],
    link: "https://github.com/beyuphan/KopernikProject",
    technicalDetails: {
      problem: "Dinamik tedarik süreçlerinde verilerin senkronize olmaması nedeniyle yaşanan stok takibi ve iletişim aksaklıkları.",
      solution: "Flutter BLoC mimarisi (veya Provider) ile kurgulanan uygulama, Firebase Realtime Database/Firestore kullanarak tüm kullanıcılar arasında anlık veri senkronizasyonu sağlar. Kullanıcı profilleri ve tedarik detayları merkezi bir bulut yapısında yönetilir.",
      engineeringNote: "Uygulama, kullanıcı deneyimini artırmak için özel ses efektleri (WAV/MP3) ve Lottie animasyonları (splash_animation.json) ile desteklenmiş; bildirim servisleri entegre edilmiştir.",
      flow: [
        { stepTitle: "Firebase Auth", stepDesc: "Kullanıcılar güvenli bir şekilde kayıt olur ve kendi profillerini yönetir." },
        { stepTitle: "Real-time Tedarik Takibi", stepDesc: "Tedarik listeleri ve detayları Firestore üzerinden anlık olarak güncellenir." },
        { stepTitle: "Timeline & History", stepDesc: "Tedarik süreçlerinin geçmişi ve aktif durumu kullanıcıya görsel bir akışla sunulur." },
        { stepTitle: "Etkileşim Servisleri", stepDesc: "Sinyal ve bildirimler üzerinden süreç değişiklikleri kullanıcıya anlık iletilir." }
      ],
      highlights: ["Firebase Real-time Sync", "Cloud Storage Integration", "Custom UI Animations", "Advanced Profile Management"]
    }
  },
{
  id: 5,
  title: "Projecte: Enterprise Resource System",
  category: "Software Architecture & ERP",
  description: "Kurumsal süreçleri, çalışan verimliliğini ve proje görev dağılımlarını MySQL tabanlı ilişkisel bir mimaride yöneten, yüksek performanslı C# masaüstü platformu.",
  tags: ["C#", ".NET WinForms", "MySQL", "Cryptography", "Data Management"],
  link: "https://github.com/beyuphan/Projecte",
  technicalDetails: {
    problem: "Kurumsal yapılarda çalışanların birden fazla projeye atanması, görev bazlı efor takibi ve bu verilerin güvenli bir şekilde merkezi bir veritabanında tutarlılığının sağlanamaması.",
    solution: "C# WinForms mimarisi üzerinde, MySQL Connector entegrasyonu ile çalışan katmanlı bir sistem geliştirildi. Sistem; Employee, Project ve Task varlıkları arasında kompleks ilişkiler kurarak, kaynak planlamasını dijitalize eder.",
    engineeringNote: "Projede veri güvenliği için BouncyCastle kütüphanesi entegre edilmiş; veritabanı haberleşmesinde ise ZstdSharp ve LZ4 sıkıştırma algoritmaları kullanılarak ağ trafiği ve veri işleme performansı optimize edilmiştir.",
    flow: [
      { stepTitle: "Kriptografik Kimlik Doğrulama", stepDesc: "Kullanıcı kayıt ve giriş süreçleri, güvenli hashleme algoritmalarıyla korunarak yetkilendirme katmanından geçer." },
      { stepTitle: "İlişkisel Veri Haritalama", stepDesc: "Çalışanlar (Employees) ve projeler tanımlanarak, veritabanı seviyesinde normalize edilmiş bir yapıya aktarılır." },
      { stepTitle: "Görev Dağılımı & Tasking", stepDesc: "Her proje altına spesifik görevler açılır ve bu görevler çalışanlara atanarak mikro seviyede yönetim sağlanır." },
      { stepTitle: "Merkezi Veri Senkronizasyonu", stepDesc: "DAL (Data Access Layer) üzerinden yürütülen CRUD işlemleri, asenkron yapılarla arayüzü kilitlemeden MySQL sunucusuyla haberleşir." }
    ],
    highlights: ["Katmanlı Mimari (Layered Architecture)", "Cryptographic Security Entegrasyonu", "Project-Employee Mapping", "Data Compression Optimization"]
  }
},
];