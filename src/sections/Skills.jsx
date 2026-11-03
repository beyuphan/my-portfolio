import React from 'react';
import { skills } from '../data/skills';
import { useApp } from '../context/AppContext';

const Skills = () => {
  const { t, L } = useApp();
  const titleLines = t('skills.title').split('\n');

  return (
    <section id="skills" className="max-w-7xl mx-auto px-8 py-32 border-t border-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-6">
        <div>
          <span className="mono-detail block mb-4">{t('skills.label')}</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
            {titleLines.map((line, i) => (
              <React.Fragment key={i}>
                {line}{i < titleLines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-20">
        {skills.map((skillGroup, index) => (
          <div key={index} className="space-y-6">
            <h3 className="mono-detail text-black border-b border-gray-200 pb-4">
              {L(skillGroup.category)}
            </h3>
            <div className="flex flex-wrap gap-x-5 gap-y-3">
              {skillGroup.items.map((item, i) => (
                <div key={i} className="group cursor-default">
                  <span className="text-xl md:text-2xl font-bold text-gray-300 group-hover:text-black transition-colors duration-500 tracking-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
