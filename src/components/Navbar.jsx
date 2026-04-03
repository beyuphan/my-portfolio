import React from 'react';

const Navbar = () => {
  return (
    <nav className="nav-blur border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        
        {/* Sol Taraf: Status & Logo */}
        <div className="flex items-center gap-6">
          <div className="font-black text-xl tracking-tighter hover:opacity-70 cursor-pointer">
            E. BINICI
          </div>
          <div className="hidden md:flex status-indicator">
            <span className="status-dot"></span>
            AVAILABLE FOR PROJECTS
          </div>
        </div>

        {/* Orta: Ana Navigasyon */}
        <div className="hidden md:flex items-center space-x-12">
          <a href="#projects" className="nav-link text-black">Projects</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        {/* Sağ Taraf: Teknik Detay veya Sosyal */}
        <div className="flex items-center gap-6">
          <a href="https://github.com/beyuphan" target="_blank" className="nav-link text-black font-black underline decoration-gray-200 decoration-2 underline-offset-4">
            GH
          </a>
          <div className="h-4 w-[1px] bg-gray-200"></div>
          <div className="mono-detail text-[9px]">SAMSUN / 41.02° N</div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;