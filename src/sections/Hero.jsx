import React from 'react';
import { useApp } from '../context/AppContext';
import { projects } from '../data/projects';

const Hero = () => {
  const { t, language } = useApp();
  const titleLines = t('hero.title').split('\n');
  const cvFile = language === 'tr'
    ? '/cv/EyuphanBinici_CV_TR.pdf'
    : '/cv/EyuphanBinici_CV_EN.pdf';

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Hafif Engineering Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="reveal" style={{ animationDelay: '0.2s' }}>
          <span className="mono-detail block mb-6">{t('hero.status')}</span>
          <h1 className="hero-title mb-8" style={{ lineHeight: '1.2' }}>
            {titleLines.map((line, i) => (
              <React.Fragment key={i}>
                {line}{i < titleLines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 reveal" style={{ animationDelay: '0.4s' }}>
          <p className="text-xl md:text-2xl text-gray-500 max-w-xl leading-relaxed">
            {t('hero.desc')}
          </p>
          <div className="flex gap-4 border-l border-gray-200 pl-6 h-fit">
            <div className="text-left">
              <span className="block text-2xl font-bold">{projects.length}+</span>
              <span className="mono-detail">{t('hero.projects')}</span>
            </div>
          </div>
        </div>

        <div className="mt-12 reveal" style={{ animationDelay: '0.6s' }}>
          <a
            href={cvFile}
            download
            className="inline-flex items-center gap-3 bg-[#1d1d1f] text-white text-sm font-bold tracking-wide px-6 py-3 rounded-full hover:bg-blue-600 transition-colors duration-300"
          >
            {t('cv.download')}
            <span className="text-base">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;