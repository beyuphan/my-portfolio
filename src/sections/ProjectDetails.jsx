import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const ProjectDetail = () => {
  const { id } = useParams();
  
  // Mevcut projenin index'ini buluyoruz
  const currentIndex = projects.findIndex(p => p.id === parseInt(id));
  const project = projects[currentIndex];

  // Sonraki projeyi hesaplıyoruz (Son projeden sonra ilk projeye döner)
  const nextProject = projects.length > 0 ? projects[(currentIndex + 1) % projects.length] : null;

  useEffect(() => {
    // DOM tam olarak güncellendikten hemen sonra sayfanın en üstüne atmasını garantiliyoruz
    setTimeout(() => {
      window.scrollTo({ 
        top: 0, 
        left: 0, 
        behavior: 'instant' // 'smooth' yaparsan yukarı kaydığını görürsün, instant direkt atar
      });
    }, 10);
  }, [id]);

  if (!project) {
    return (
      <div className="pt-40 text-center">
        <span className="mono-detail">404 // Project not found.</span>
        <Link to="/" className="block mt-4 underline">Return to safety</Link>
      </div>
    );
  }

  return (
    <div className="reveal pt-32 pb-32 px-8 max-w-6xl mx-auto text-[#1d1d1f]">
      {/* Üst Navigasyon */}
      <div className="mb-16 flex justify-between items-center">
        <Link to="/" className="mono-detail hover:text-black transition-colors flex items-center gap-2">
          <span className="text-lg">←</span> BACK TO WORKS
        </Link>
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="mono-detail text-[9px] opacity-50 text-black">SYSTEM_STABLE // ID: 00{project.id}</span>
        </div>
      </div>

      {/* Başlık ve Özet */}
      <header className="mb-24">
        <span className="mono-detail block mb-4 text-blue-600 font-bold">{project.category}</span>
        <h1 className="hero-title mb-10 text-6xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tighter">
          {project.title}
        </h1>
        <p className="text-2xl md:text-3xl text-gray-400 leading-tight max-w-4xl font-light">
          {project.description}
        </p>
      </header>

      {/* Ana İçerik Grid Yapısı */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 border-t border-gray-100 pt-16">
        
        {/* Sol Sütun: Mühendislik Derinliği */}
        <div className="lg:col-span-8 space-y-24">
          
          {/* 01 / Problem Tanımı */}
          <section>
            <h3 className="mono-detail text-black mb-8">01 / The Challenge</h3>
            <p className="text-xl text-gray-700 leading-relaxed font-medium">
              {project.technicalDetails?.problem}
            </p>
          </section>

          {/* 02 / Mühendislik Çözümü */}
          <section>
            <h3 className="mono-detail text-black mb-8">02 / Engineering Solution</h3>
            <div className="text-lg text-gray-500 leading-relaxed space-y-6">
              <p>{project.technicalDetails?.solution}</p>
              
              {/* Fourier projesi için Karizmatik Matematik */}
              {project.id === 3 && (
                <div className="bg-white p-12 rounded-3xl border border-gray-100 shadow-sm text-center my-12 group transition-all hover:shadow-md">
                  <p className="mb-8 text-[10px] mono-detail tracking-[0.4em] opacity-40">Mathematical Foundation // FFT </p>
                  <div className="text-2xl md:text-3xl py-4 overflow-x-auto text-[#1d1d1f]">
                    <BlockMath math={"\\mathcal{F}\\{f(t)\\} = \\int_{-\\infty}^{\\infty} f(t) e^{-i 2\\pi \\xi t} dt"} />
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* 03 / Engineering Note - Vurgulu Kutu */}
          {project.technicalDetails?.engineeringNote && (
            <section>
              <div className="bg-blue-50/30 border border-blue-100 p-8 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:rotate-12 transition-transform duration-700">
                   <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                </div>
                <h4 className="mono-detail text-blue-600 mb-4 tracking-[0.3em]">Engineering Note</h4>
                <p className="text-gray-700 italic leading-relaxed relative z-10 text-lg">
                  "{project.technicalDetails.engineeringNote}"
                </p>
              </div>
            </section>
          )}

          {/* 04 / Technical Flow - Adım Adım Süreç */}
          {project.technicalDetails?.flow && (
            <section>
              <h3 className="mono-detail text-black mb-12">03 / Technical Flow</h3>
              <div className="space-y-12 pl-4">
                {project.technicalDetails.flow.map((step, index) => (
                  <div key={index} className="flex gap-8 group">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-xs font-bold group-hover:border-black group-hover:bg-black group-hover:text-white transition-all duration-500">
                        {index + 1}
                      </div>
                      {index !== project.technicalDetails.flow.length - 1 && (
                        <div className="w-[1px] h-full bg-gray-100 mt-4"></div>
                      )}
                    </div>
                    <div className="pb-12">
                      <h5 className="font-bold text-xl mb-3 tracking-tight text-[#1d1d1f]">{step.stepTitle}</h5>
                      <p className="text-gray-500 leading-relaxed max-w-2xl">{step.stepDesc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 05 / Teknik Çıktılar / Highlights */}
          <section className="bg-white border border-gray-100 p-12 rounded-3xl shadow-sm">
            <h3 className="mono-detail text-black mb-8">04 / Key Deliverables</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {project.technicalDetails?.highlights?.map((h, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="text-blue-500 font-mono font-bold">0{i+1}</span>
                  <span className="text-sm font-semibold text-gray-600 uppercase tracking-[0.1em] leading-relaxed">{h}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sağ Sütun: Sidebar & Metadata */}
        <div className="lg:col-span-4 space-y-16">
          <div className="sticky top-32">
            {/* Tech Stack */}
            <div className="mb-12">
              <h4 className="mono-detail text-black mb-6">Built With</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tech-tag bg-white border border-gray-200 text-[#1d1d1f] px-3 py-1.5 font-bold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Resources & Links */}
            <div className="space-y-4">
              <h4 className="mono-detail text-black mb-6">Execution</h4>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex justify-between items-center p-5 bg-[#1d1d1f] text-white rounded-2xl hover:bg-blue-600 transition-all duration-500"
              >
                <span className="text-xs font-bold tracking-[0.2em] uppercase">Source Code</span>
                <span className="text-xl group-hover:translate-x-1 transition-transform">↗</span>
              </a>

              {project.reportPath ? (
                <a 
                  href={project.reportPath} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex justify-between items-center p-5 border border-gray-200 rounded-2xl hover:border-black transition-all group"
                >
                  <span className="text-xs font-bold tracking-[0.2em] uppercase opacity-50 group-hover:opacity-100 text-black">Documentation</span>
                  <span className="text-xs font-mono opacity-30 italic text-black">PDF</span>
                </a>
              ) : (
                <div className="w-full flex justify-between items-center p-5 border border-gray-50 rounded-2xl cursor-not-allowed opacity-20 bg-gray-50">
                  <span className="text-xs font-bold tracking-widest uppercase text-black">Documentation</span>
                  <span className="text-[9px] mono-detail text-black italic">Soon</span>
                </div>
              )}
            </div>

            {/* Extra Meta Info */}
            <div className="mt-16 pt-8 border-t border-gray-100 space-y-4">
              <div className="flex justify-between text-[10px] mono-detail">
                <span>Location</span>
                <span className="text-black">Samsun / OMU</span>
              </div>
              <div className="flex justify-between text-[10px] mono-detail">
                <span>Phase</span>
                <span className="text-black">Engineering Complete</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projeler Arası Geçiş (Sonraki Proje) */}
      {nextProject && (
        <div className="mt-32 pt-16 border-t border-gray-100 flex justify-end reveal">
          <Link 
            to={`/project/${nextProject.id}`} 
            className="group flex flex-col items-end text-right"
          >
            <span className="mono-detail text-gray-400 mb-3 tracking-[0.3em] text-xs">
              NEXT PROJECT
            </span>
            <div className="flex items-center gap-6 text-[#1d1d1f] transition-colors">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter group-hover:text-blue-600 transition-colors duration-300">
                {nextProject.title}
              </h2>
              <span className="text-4xl md:text-5xl lg:text-6xl font-light transform transition-transform duration-500 group-hover:translate-x-4 group-hover:text-blue-600">
                →
              </span>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;