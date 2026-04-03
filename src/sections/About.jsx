import React from 'react';

const About = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-8 py-32 border-t border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <span className="mono-detail block mb-6">Philosophy & Education</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 leading-tight">
            Karmaşıklığı <br /> Sadeleştirmek.
          </h2>
          <div className="space-y-6 text-gray-500 text-lg leading-relaxed">
            <p>
              Ondokuz Mayıs Üniversitesi'nde Bilgisayar Mühendisliği son sınıf öğrencisiyim. 
              Yazılım geliştirme sürecine sadece kod yazmak olarak değil, bir mühendislik disiplini ve görsel bir anlatım olarak yaklaşıyorum.
            </p>
            <p>
              Anadolu Üniversitesi'nde devam ettiğim Görsel İletişim eğitimi, teknik çözümlerimi kullanıcı odaklı bir estetikle harmanlamamı sağlıyor. 
              Gereksiz detaylardan ve "ostantasyon"dan kaçınan, işlevselliği merkeze alan bir tasarım anlayışına sahibim.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 relative h-fit self-center">
          <div className="absolute top-4 left-4 flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-gray-200"></div>
            <div className="w-2 h-2 rounded-full bg-gray-200"></div>
            <div className="w-2 h-2 rounded-full bg-gray-200"></div>
          </div>
          <ul className="mt-6 space-y-4">
            <li className="flex justify-between border-b border-gray-200 pb-2">
              <span className="mono-detail text-black">University</span>
              <span className="text-sm font-medium">OMU</span>
            </li>
            <li className="flex justify-between border-b border-gray-200 pb-2">
              <span className="mono-detail text-black">Location</span>
              <span className="text-sm font-medium">Samsun, TR</span>
            </li>
            <li className="flex justify-between border-b border-gray-200 pb-2">
              <span className="mono-detail text-black">Focus</span>
              <span className="text-sm font-medium">Mobile & AI</span>
            </li>
            <li className="flex justify-between">
              <span className="mono-detail text-black">Interest</span>
              <span className="text-sm font-medium">Cinematic Arts</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;