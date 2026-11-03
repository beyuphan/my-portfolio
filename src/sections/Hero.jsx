import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { projects } from '../data/projects';

// Hero'da öne çıkarılan projeler (id'ler projects.js'ten)
const FEATURED_IDS = [1, 12, 13, 15];

const Hero = () => {
  const { t, L, language } = useApp();
  const titleLines = t('hero.title').split('\n');
  const cvFile = language === 'tr'
    ? '/cv/EyuphanBinici_CV_TR.pdf'
    : '/cv/EyuphanBinici_CV_EN.pdf';

  const featured = FEATURED_IDS
    .map((id) => projects.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Hafif grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>
      {/* Yumuşak renk lekesi */}
      <div className="absolute -top-24 right-0 w-[520px] h-[520px] rounded-full bg-blue-100/60 blur-3xl pointer-events-none z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Sol: karşılama */}
        <div className="reveal" style={{ animationDelay: '0.2s' }}>
          <span className="mono-detail block mb-6">{t('hero.status')}</span>
          <h1 className="hero-title mb-8" style={{ lineHeight: '1.1' }}>
            {titleLines.map((line, i) => (
              <React.Fragment key={i}>
                {line}{i < titleLines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>
          <p className="text-xl text-gray-500 max-w-lg leading-relaxed mb-10">
            {t('hero.desc')}
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a
              href="#projects"
              className="inline-flex items-center gap-3 bg-[#1d1d1f] text-white text-sm font-bold tracking-wide px-6 py-3 rounded-full hover:bg-blue-600 transition-colors duration-300"
            >
              {t('hero.seeProjects')}
              <span className="text-base">→</span>
            </a>
            <a
              href={cvFile}
              download
              className="inline-flex items-center gap-3 border border-gray-300 text-[#1d1d1f] text-sm font-bold tracking-wide px-6 py-3 rounded-full hover:border-black transition-colors duration-300"
            >
              {t('cv.download')}
              <span className="text-base">↓</span>
            </a>
          </div>

          <div className="flex gap-10 border-t border-gray-200 pt-6">
            <div>
              <span className="block text-3xl font-black tracking-tight">{projects.length}</span>
              <span className="mono-detail">{t('hero.projects')}</span>
            </div>
            <div>
              <span className="block text-3xl font-black tracking-tight">2026</span>
              <span className="mono-detail">{t('hero.grad')}</span>
            </div>
          </div>
        </div>

        {/* Sağ: kod penceresi + öne çıkan projeler */}
        <div className="reveal space-y-4" style={{ animationDelay: '0.4s' }}>
          <div className="rounded-2xl bg-[#0f1115] shadow-2xl shadow-blue-900/10 overflow-hidden border border-gray-800">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800">
              <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400/80"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
              <span className="ml-3 text-[11px] font-mono text-gray-500">eyuphan.ts</span>
            </div>
            <pre className="p-5 text-[13px] leading-7 font-mono text-gray-300 overflow-x-auto">
<span className="text-purple-400">const</span> <span className="text-blue-300">eyuphan</span> = {'{'}{'\n'}
{'  '}role: <span className="text-green-300">"{t('hero.status')}"</span>,{'\n'}
{'  '}city: <span className="text-green-300">"Rize"</span>,{'\n'}
{'  '}stack: [<span className="text-green-300">"Python"</span>, <span className="text-green-300">"TypeScript"</span>, <span className="text-green-300">"Kotlin"</span>, <span className="text-green-300">"Rust"</span>],{'\n'}
{'  '}focus: [<span className="text-green-300">"Backend"</span>, <span className="text-green-300">"Mobile"</span>, <span className="text-green-300">"AI"</span>],{'\n'}
{'  '}openToWork: <span className="text-orange-300">true</span><span className="inline-block w-2 h-4 bg-gray-300 align-middle ml-1 animate-pulse"></span>{'\n'}
{'}'};
            </pre>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {featured.map((p) => (
              <Link
                key={p.id}
                to={`/project/${p.id}`}
                className="group bg-white/80 backdrop-blur border border-gray-200 rounded-2xl p-4 hover:border-black hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="mono-detail text-[9px] text-blue-600 block mb-2">{L(p.category)}</span>
                <span className="font-bold tracking-tight text-[#1d1d1f] block leading-tight group-hover:text-blue-600 transition-colors">
                  {p.title}
                </span>
                <span className="text-xs text-gray-400 mt-2 block">{p.year}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
