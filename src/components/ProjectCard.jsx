import React from 'react';
import { Link } from 'react-router-dom'; 

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card group">
      {/* Üst Kısım: Kategori ve Yıl */}
      <div className="flex justify-between items-start mb-6">
        <span className="mono-detail text-[9px]">{project.category}</span>
        <span className="mono-detail text-[9px]">2025-26</span>
      </div>

      {/* Orta Kısım: Başlık ve Açıklama */}
      <Link to={`/project/${project.id}`}>
        <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-blue-600 transition-colors cursor-pointer">
          {project.title}
        </h3>
      </Link>
      <p className="text-gray-500 text-sm leading-relaxed mb-8 h-20 overflow-hidden">
        {project.description}
      </p>

      {/* Alt Kısım: Teknik Etiketler ve Link */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag, index) => (
          <span key={index} className="tech-tag">
            {tag}
          </span>
        ))}
      </div>

      <a 
        href={project.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center text-xs font-bold tracking-widest uppercase border-b border-black pb-1 hover:opacity-50 transition-opacity"
      >
        Source Code ↗
      </a>
    </div>
  );
};

export default ProjectCard;