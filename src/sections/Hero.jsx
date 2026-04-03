import React from 'react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Arkaplanda çok hafif bir mühendislik gridi */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="reveal" style={{ animationDelay: '0.2s' }}>
          <span className="mono-detail block mb-6">4th Year Computer Engineering Student</span>
          <h1 className="hero-title mb-8">
            Basitliği <br />
            Koda Dökmek.
          </h1>
        </div>
        
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 reveal" style={{ animationDelay: '0.4s' }}>
          <p className="text-xl md:text-2xl text-gray-500 max-w-xl leading-relaxed">
            Abartıdan uzak, işlevselliğe odaklanan bir yaklaşımla; GeoIntel gibi proaktif sistemlerden sinyal işleme algoritmalarına kadar mühendislik çözümleri üretiyorum.
          </p>
          <div className="flex gap-4 border-l border-gray-200 pl-6 h-fit">
            <div className="text-left">
              <span className="block text-2xl font-bold">10+</span>
              <span className="mono-detail">Projeler</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;