import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const Navbar = () => {
  const { language, toggleLanguage, mode, setViewMode, t } = useApp();
  const [modeOpen, setModeOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const cvFile = language === 'tr'
    ? '/cv/EyuphanBinici_CV_TR.pdf'
    : '/cv/EyuphanBinici_CV_EN.pdf';

  const modes = [
    { id: 'technical', label: t('mode.technical'), icon: '⚙️' },
    { id: 'hr', label: t('mode.hr'), icon: '👤' }
  ];

  const navLinks = [
    { id: 'projects', label: t('nav.projects'), active: true },
    { id: 'about', label: t('nav.about') },
    { id: 'contact', label: t('nav.contact') }
  ];

  // Her route'ta çalışır: ana sayfada değilsek önce ana sayfaya git, sonra bölüme kaydır.
  const goToSection = (id) => {
    setMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 80);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goHome = () => {
    setMenuOpen(false);
    if (location.pathname !== '/') navigate('/');
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="nav-blur border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        {/* Sol Taraf: Status & Logo */}
        <div className="flex items-center gap-6">
          <button
            onClick={goHome}
            className="font-black text-xl tracking-tighter hover:opacity-70 cursor-pointer"
          >
            E. BINICI
          </button>
          <div className="hidden md:flex status-indicator">
            <span className="status-dot"></span>
            {t('nav.available')}
          </div>
        </div>

        {/* Orta: Ana Navigasyon (masaüstü) */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => goToSection(link.id)}
              className={`nav-link ${link.active ? 'text-black' : ''}`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Sağ Taraf: Controls */}
        <div className="flex items-center gap-4">
          {/* Mode Selector */}
          <div className="relative">
            <button
              onClick={() => setModeOpen(!modeOpen)}
              className="px-3 py-2 rounded-md text-xs font-mono bg-gray-100 hover:bg-gray-200 transition-colors flex items-center gap-1"
            >
              <span>{modes.find(m => m.id === mode)?.icon}</span>
              <span className="hidden sm:inline">{modes.find(m => m.id === mode)?.label}</span>
            </button>

            {modeOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-40">
                {modes.map(m => (
                  <button
                    key={m.id}
                    onClick={() => {
                      setViewMode(m.id);
                      setModeOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-blue-50 transition-colors ${
                      mode === m.id ? 'bg-blue-50 font-semibold' : ''
                    }`}
                  >
                    <span className="mr-2">{m.icon}</span>{m.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="h-4 w-[1px] bg-gray-200"></div>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="px-3 py-2 rounded-md text-xs font-mono bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            {language === 'tr' ? '🇹🇷 TR' : '🇬🇧 EN'}
          </button>

          <a
            href={cvFile}
            download
            className="px-3 py-2 rounded-md text-xs font-mono bg-[#1d1d1f] text-white hover:bg-blue-600 transition-colors hidden sm:inline-flex items-center gap-1"
          >
            CV ↓
          </a>

          <div className="h-4 w-[1px] bg-gray-200 hidden sm:block"></div>

          <a href="https://github.com/beyuphan" target="_blank" rel="noreferrer" className="nav-link text-black font-black underline decoration-gray-200 decoration-2 underline-offset-4 hidden sm:inline">
            GH
          </a>

          <div className="mono-detail text-[9px] hidden sm:block">{t('nav.location')}</div>

          {/* Hamburger (mobil) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            aria-expanded={menuOpen}
            className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 items-center"
          >
            <span className={`block h-[2px] w-5 bg-black transition-transform ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`}></span>
            <span className={`block h-[2px] w-5 bg-black transition-opacity ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-[2px] w-5 bg-black transition-transform ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobil açılır menü */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur px-8 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => goToSection(link.id)}
              className="nav-link text-black text-base text-left"
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://github.com/beyuphan"
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
            className="nav-link text-black text-base"
          >
            GitHub
          </a>
          <a
            href={cvFile}
            download
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center gap-1 bg-[#1d1d1f] text-white text-sm font-bold px-4 py-2 rounded-md w-fit"
          >
            {t('cv.download')} ↓
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
