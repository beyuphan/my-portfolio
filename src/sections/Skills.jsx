import React from 'react';
import { skills } from '../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-8 py-32 border-t border-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-6">
        <div>
          <span className="mono-detail block mb-4">Core Competencies</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
            Teknik <br /> Yetkinlikler.
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {skills.map((skillGroup, index) => (
          <div key={index} className="space-y-8">
            <h3 className="mono-detail text-black border-b border-gray-200 pb-4">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-x-8 gap-y-6">
              {skillGroup.items.map((item, i) => (
                <div key={i} className="group cursor-default">
                  <span className="text-2xl md:text-3xl font-bold text-gray-200 group-hover:text-black transition-colors duration-500 tracking-tight">
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