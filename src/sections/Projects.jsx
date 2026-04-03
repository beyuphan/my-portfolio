import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-8 py-32 border-t border-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
        <div>
          <span className="mono-detail block mb-4">Selected Works</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
            Mühendislik <br /> Çözümleri.
          </h2>
        </div>
        <p className="text-gray-400 max-w-xs text-sm font-medium leading-relaxed">
          GeoIntel gibi proaktif sistemlerden karmaşık sinyal işleme algoritmalarına kadar geniş bir yelpazede geliştirilen projeler.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;