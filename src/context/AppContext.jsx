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
        'hero.title': 'Uçtan uca\nmühendislik.',
        'hero.desc': 'Veriyi karara, fikri ürüne dönüştürüyorum. GeoIntel gibi yapay zekâ sistemlerinden mobil uygulamalara kadar; uçtan uca, temiz ve ölçeklenebilir kodla inşa ediyorum.',
        'hero.projects': 'Proje',

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
        'about.label': 'Felsefe & Eğitim',
        'about.title': 'Karmaşıklığı\nSadeleştirmek.',
        'about.p1': 'Ondokuz Mayıs Üniversitesi Bilgisayar Mühendisliği mezunuyum. Yazılım geliştirme sürecine sadece kod yazmak olarak değil, bir mühendislik disiplini ve görsel bir anlatım olarak yaklaşıyorum.',
        'about.p2': 'Anadolu Üniversitesi\'nde devam ettiğim Görsel İletişim eğitimi, teknik çözümlerimi kullanıcı odaklı bir estetikle harmanlamamı sağlıyor. Gereksiz detaylardan ve gösterişten kaçınan, işlevselliği merkeze alan bir tasarım anlayışına sahibim.',
        'about.university': 'Üniversite',
        'about.location': 'Konum',
        'about.focus': 'Odak',
        'about.interest': 'İlgi Alanı',
        'about.focusVal': 'Mobil & AI',
        'about.interestVal': 'Sinema Sanatları',

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
        'hero.title': 'End-to-end\nengineering.',
        'hero.desc': 'I turn data into decisions and ideas into products. From AI systems like GeoIntel to mobile apps, I build end-to-end with clean, scalable code.',
        'hero.projects': 'Projects',

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
        'about.label': 'Philosophy & Education',
        'about.title': 'Simplifying\nComplexity.',
        'about.p1': 'I am a Computer Engineering graduate from Ondokuz Mayıs University. I approach software development not merely as writing code, but as an engineering discipline and a form of visual storytelling.',
        'about.p2': 'My ongoing Visual Communication studies at Anadolu University let me blend technical solutions with user-focused aesthetics. I favor a design philosophy centered on functionality, avoiding unnecessary detail and ostentation.',
        'about.university': 'University',
        'about.location': 'Location',
        'about.focus': 'Focus',
        'about.interest': 'Interest',
        'about.focusVal': 'Mobile & AI',
        'about.interestVal': 'Cinematic Arts',

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
