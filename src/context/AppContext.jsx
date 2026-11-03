/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState('tr'); // 'tr' or 'en'
  const [mode, setMode] = useState('technical'); // 'technical' (varsayılan) veya 'hr'

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'tr' ? 'en' : 'tr');
  };

  const setViewMode = (newMode) => {
    setMode(newMode);
  };

  // Localize a field that may be a { tr, en } object (or a plain value/array).
  const L = (field) => {
    if (
      field &&
      typeof field === 'object' &&
      !Array.isArray(field) &&
      ('tr' in field || 'en' in field)
    ) {
      return field[language] ?? field.tr ?? field.en;
    }
    return field;
  };

  const t = (key) => {
    const translations = {
      tr: {
        // Navigation
        'nav.available': 'PROJELERİN İÇİN HAZIR',
        'nav.projects': 'Projeler',
        'nav.about': 'Hakkında',
        'nav.contact': 'İletişim',
        'nav.location': 'SAMSUN / 41.02° N',

        // Hero
        'hero.status': 'Bilgisayar Mühendisi',
        'hero.title': 'Merhaba, ben\nEyüphan.',
        'hero.desc': 'Yapay zekâ, harita ve uydu verisi, mobil uygulama ve oyun yapıyorum. Bitirdiklerimi, hâlâ uğraştıklarımı ve nasıl yaptığımı aşağıda bulabilirsin.',
        'hero.projects': 'Proje',
        'hero.seeProjects': 'Projelere Bak',
        'hero.finals': 'Hackathon Finali',
        'hero.grad': 'Mezuniyet',
        'cv.download': 'CV İndir',

        // Mode labels
        'mode.normal': 'Normal',
        'mode.hr': 'İK Modu',
        'mode.technical': 'Teknik Mod',

        // Project Card
        'project.viewDetails': 'Detayları Görüntüle',
        'project.github': 'GitHub\'da Gör',
        'project.problem': 'Problem',
        'project.solution': 'Çözüm',
        'project.flow': 'İş Akışı',
        'project.highlights': 'Öne Çıkan Özellikler',
        'card.skills': 'Yetkinlik',
        'card.impact': 'Etki',
        'card.problemStatement': '# Problem Tanımı',
        'card.viewTechnical': '[teknik_dökümanı_aç]',

        // Projects section
        'projects.label': 'Seçili Çalışmalar',
        'projects.title': 'Mühendislik\nÇözümleri.',
        'projects.subtitle': 'GeoIntel gibi proaktif sistemlerden karmaşık sinyal işleme algoritmalarına kadar geniş bir yelpazede geliştirilen projeler.',

        // Skills section
        'skills.label': 'Temel Yetkinlikler',
        'skills.title': 'Teknik\nYetkinlikler.',

        // About section
        'about.label': 'Hakkımda',
        'about.title': 'Ben Kimim.',
        'about.p1': 'Samsun\'da yaşıyorum. Önce İYTE\'de makine mühendisliğine başladım, bana göre olmadığını görünce OMÜ Bilgisayar Mühendisliği\'ne yatay geçiş yaptım ve 2026\'da mezun oldum. En çok backend, mobil ve yapay zekâ tarafıyla uğraşıyorum; hackathonlarda bir fikri baştan sona ürüne çevirmek hoşuma gidiyor.',
        'about.p2': 'Bir yandan Anadolu Üniversitesi\'nde Görsel İletişim okuyorum. Sinemaya ve oyunlara meraklıyım; Ash n Seed gibi küçük oyunlar da yapıyorum. Yazılımda iyi çalışan şeyin aynı zamanda iyi görünmesini istiyorum.',
        'about.university': 'Üniversite',
        'about.location': 'Konum',
        'about.focus': 'Odak',
        'about.interest': 'İlgi Alanı',
        'about.focusVal': 'Backend, Mobil & AI',
        'about.interestVal': 'Sinema & Oyun',

        // Contact section
        'contact.label': 'İletişime Geç',
        'contact.title': 'Birlikte\nGeliştirelim.',

        // System Logs
        'syslogs.title': 'Sistem Kayıtları &',
        'syslogs.reroutes': 'Yeniden Yönlenmeler',
        'syslogs.desc': 'İşler her zaman ilk seferinde mükemmel çalışmaz. Önemli olan hatayı erken fark edip (fail fast), sistemi daha güçlü bir şekilde yeniden inşa etmektir.',

        // Project Detail
        'pd.back': 'ÇALIŞMALARA DÖN',
        'pd.challenge': '01 / Problem',
        'pd.solution': '02 / Mühendislik Çözümü',
        'pd.engNote': 'Mühendislik Notu',
        'pd.techFlow': '03 / Teknik Akış',
        'pd.deliverables': '04 / Temel Çıktılar',
        'pd.builtWith': 'Kullanılan Teknolojiler',
        'pd.execution': 'Kaynaklar',
        'pd.sourceCode': 'Kaynak Kod',
        'pd.documentation': 'Dokümantasyon',
        'pd.soon': 'Yakında',
        'pd.location': 'Konum',
        'pd.phase': 'Aşama',
        'pd.phaseVal': 'Mühendislik Tamamlandı',
        'pd.nextProject': 'SONRAKİ PROJE',
        'pd.notFound': '404 // Proje bulunamadı.',
        'pd.return': 'Ana sayfaya dön',
        'pd.architecture': 'Mimari',
        'pd.algorithms': 'Algoritmalar & Teknikler',
        'pd.role': 'Rol',
        'pd.impact': 'Etki & Sonuç',
        'pd.demo': 'Canlı Demo',

        // Arama / Filtre
        'search.placeholder': 'Proje veya teknoloji ara...',
        'search.allTech': 'Tümü',
        'search.noResults': 'Eşleşen proje bulunamadı.',
        'search.results': 'proje',
        'search.clear': 'Temizle',

        // HR Mode
        'hr.title': 'İK Aracısı',
        'hr.hardSkills': 'Teknik Yetkinlikler',
        'hr.softSkills': 'Yumuşak Beceriler',
        'hr.experience': 'Deneyim',
        'hr.education': 'Eğitim',
        'hr.assessment': 'Değerlendirme',
        'hr.placeholder': 'Bir soru yazın...',
        'hr.send': 'Gönder',
        'hr.thinking': 'düşünüyor...',
        'hr.suggested': 'Önerilen sorular',
        'hr.error': 'Bağlantı hatası. Lütfen tekrar deneyin.',
      },
      en: {
        // Navigation
        'nav.available': 'AVAILABLE FOR PROJECTS',
        'nav.projects': 'Projects',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        'nav.location': 'SAMSUN / 41.02° N',

        // Hero
        'hero.status': 'Computer Engineer',
        'hero.title': 'Hi, I\'m\nEyüphan.',
        'hero.desc': 'I build AI, map and satellite data tools, mobile apps, and games. Below you can find what I finished, what I\'m still working on, and how I built it.',
        'hero.projects': 'Projects',
        'hero.seeProjects': 'See Projects',
        'hero.finals': 'Hackathon Finals',
        'hero.grad': 'Graduated',
        'cv.download': 'Download CV',

        // Mode labels
        'mode.normal': 'Normal',
        'mode.hr': 'HR Mode',
        'mode.technical': 'Tech View',

        // Project Card
        'project.viewDetails': 'View Details',
        'project.github': 'View on GitHub',
        'project.problem': 'Problem',
        'project.solution': 'Solution',
        'project.flow': 'Workflow',
        'project.highlights': 'Highlights',
        'card.skills': 'Skills',
        'card.impact': 'Impact',
        'card.problemStatement': '# Problem Statement',
        'card.viewTechnical': '[view_technical_docs]',

        // Projects section
        'projects.label': 'Selected Works',
        'projects.title': 'Engineering\nSolutions.',
        'projects.subtitle': 'Projects spanning a wide range — from proactive systems like GeoIntel to complex signal-processing algorithms.',

        // Skills section
        'skills.label': 'Core Competencies',
        'skills.title': 'Technical\nSkills.',

        // About section
        'about.label': 'About Me',
        'about.title': 'Who I Am.',
        'about.p1': 'I live in Samsun. I started in mechanical engineering at İYTE, realized it wasn\'t for me, transferred to Computer Engineering at OMU, and graduated in 2026. I mostly work on backend, mobile, and AI, and I enjoy taking an idea all the way to a product at hackathons.',
        'about.p2': 'I\'m also studying Visual Communication at Anadolu University. I\'m into cinema and games, and I make small games like Ash n Seed. I want software that works well to look good too.',
        'about.university': 'University',
        'about.location': 'Location',
        'about.focus': 'Focus',
        'about.interest': 'Interest',
        'about.focusVal': 'Backend, Mobile & AI',
        'about.interestVal': 'Cinema & Games',

        // Contact section
        'contact.label': 'Get in Touch',
        'contact.title': 'Let\'s Build\nTogether.',

        // System Logs
        'syslogs.title': 'System Logs &',
        'syslogs.reroutes': 'Reroutes',
        'syslogs.desc': 'Things don\'t always work perfectly on the first try. What matters is catching the error early (fail fast) and rebuilding the system stronger.',

        // Project Detail
        'pd.back': 'BACK TO WORKS',
        'pd.challenge': '01 / The Challenge',
        'pd.solution': '02 / Engineering Solution',
        'pd.engNote': 'Engineering Note',
        'pd.techFlow': '03 / Technical Flow',
        'pd.deliverables': '04 / Key Deliverables',
        'pd.builtWith': 'Built With',
        'pd.execution': 'Execution',
        'pd.sourceCode': 'Source Code',
        'pd.documentation': 'Documentation',
        'pd.soon': 'Soon',
        'pd.location': 'Location',
        'pd.phase': 'Phase',
        'pd.phaseVal': 'Engineering Complete',
        'pd.nextProject': 'NEXT PROJECT',
        'pd.notFound': '404 // Project not found.',
        'pd.return': 'Return to safety',
        'pd.architecture': 'Architecture',
        'pd.algorithms': 'Algorithms & Techniques',
        'pd.role': 'Role',
        'pd.impact': 'Impact & Outcomes',
        'pd.demo': 'Live Demo',

        // Search / Filter
        'search.placeholder': 'Search projects or tech...',
        'search.allTech': 'All',
        'search.noResults': 'No matching projects found.',
        'search.results': 'projects',
        'search.clear': 'Clear',

        // HR Mode
        'hr.title': 'HR Agent',
        'hr.hardSkills': 'Technical Skills',
        'hr.softSkills': 'Soft Skills',
        'hr.experience': 'Experience',
        'hr.education': 'Education',
        'hr.assessment': 'Assessment',
        'hr.placeholder': 'Type a question...',
        'hr.send': 'Send',
        'hr.thinking': 'thinking...',
        'hr.suggested': 'Suggested questions',
        'hr.error': 'Connection error. Please try again.',
      }
    };

    return translations[language][key] || key;
  };

  return (
    <AppContext.Provider value={{ language, toggleLanguage, mode, setViewMode, t, L }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};
