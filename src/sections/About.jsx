import React from 'react';
import { useApp } from '../context/AppContext';

const About = () => {
  const { t } = useApp();
  const titleLines = t('about.title').split('\n');

  return (
    <section id="about" className="max-w-7xl mx-auto px-8 py-32 border-t border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <span className="mono-detail block mb-6">{t('about.label')}</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 leading-tight">
            {titleLines.map((line, i) => (
              <React.Fragment key={i}>
                {line}{i < titleLines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
          <div className="space-y-6 text-gray-500 text-lg leading-relaxed">
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
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
              <span className="mono-detail text-black">{t('about.university')}</span>
              <span className="text-sm font-medium">OMU</span>
            </li>
            <li className="flex justify-between border-b border-gray-200 pb-2">
              <span className="mono-detail text-black">{t('about.location')}</span>
              <span className="text-sm font-medium">Samsun, TR</span>
            </li>
            <li className="flex justify-between border-b border-gray-200 pb-2">
              <span className="mono-detail text-black">{t('about.focus')}</span>
              <span className="text-sm font-medium">{t('about.focusVal')}</span>
            </li>
            <li className="flex justify-between">
              <span className="mono-detail text-black">{t('about.interest')}</span>
              <span className="text-sm font-medium">{t('about.interestVal')}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
