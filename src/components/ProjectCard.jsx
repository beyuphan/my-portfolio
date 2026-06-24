import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const ProjectCard = ({ project }) => {
  const { mode, t, L } = useApp();

  const category = L(project.category);
  const description = L(project.description);
  const role = L(project.role);
  const impact = L(project.impact);
  const highlights = L(project.technicalDetails?.highlights);
  const problem = L(project.technicalDetails?.problem);

  // İK (HR) Modu: işe alım odaklı, sade anlatım — rol, etki, yetkinlik. Karta tıklayınca DETAY açılır.
  if (mode === 'hr') {
    return (
      <div className="project-card group bg-gradient-to-br from-blue-50 to-white">
        <div className="flex justify-between items-start mb-4">
          <span className="mono-detail text-[9px] bg-blue-100 text-blue-700 px-2 py-1 rounded">
            {category}
          </span>
          <span className="text-xs font-semibold text-green-600">📊 {project.tags.length} {t('card.skills')}</span>
        </div>

        <Link to={`/project/${project.id}`}>
          <h3 className="text-xl font-bold mb-1 group-hover:text-blue-600 transition-colors cursor-pointer">
            {project.title}
          </h3>
        </Link>
        {role && <p className="mono-detail text-[9px] text-blue-600 mb-3">{role}</p>}

        <div className="mb-4 p-3 bg-white rounded border border-gray-200">
          <p className="text-[11px] text-gray-700 leading-relaxed">
            <span className="font-semibold text-blue-600">{t('card.impact')}:</span> {impact?.[0] || highlights?.[0] || description}
          </p>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {project.tags.slice(0, 4).map((tag, index) => (
            <span key={index} className="tech-tag text-[10px] bg-blue-100 text-blue-700">
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="text-[10px] text-gray-500">+{project.tags.length - 4}</span>
          )}
        </div>

        <div className="flex items-center gap-4">
          <Link
            to={`/project/${project.id}`}
            className="inline-flex items-center text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
          >
            {t('project.viewDetails')} →
          </Link>
          {project.demoLink && (
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center text-xs font-semibold text-green-600 hover:text-green-800 transition-colors">
              {t('pd.demo')} ↗
            </a>
          )}
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center text-xs font-semibold text-gray-400 hover:text-gray-700 transition-colors">
              {t('project.github')} ↗
            </a>
          )}
        </div>
      </div>
    );
  }

  // Varsayılan: Teknik (detaylı) görünüm — problem özeti, etiketler, teknik doküman + linkler.
  return (
    <div className="project-card group bg-gray-900 text-white border border-gray-800">
      <div className="flex justify-between items-start mb-4">
        <span className="mono-detail text-[9px] text-gray-400">{category}</span>
        <span className="text-[9px] text-green-400 font-mono">{project.year || `v${project.id}`}</span>
      </div>

      <Link to={`/project/${project.id}`}>
        <h3 className="text-xl font-mono font-bold mb-3 text-green-400 group-hover:text-green-300 transition-colors">
          {project.title}
        </h3>
      </Link>

      <div className="mb-4 p-3 bg-gray-800 rounded border border-gray-700 font-mono text-[10px]">
        <div className="text-green-400 mb-2">
          <span className="text-gray-500">{t('card.problemStatement')}</span>
        </div>
        <p className="text-gray-300 leading-relaxed text-[11px]">
          {problem?.slice(0, 150)}...
        </p>
      </div>

      <div className="flex flex-wrap gap-1 mb-4">
        {project.tags.map((tag, index) => (
          <span key={index} className="tech-tag bg-green-900 text-green-300 text-[9px] font-mono">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 flex-wrap">
        <Link
          to={`/project/${project.id}`}
          className="inline-flex items-center text-xs font-mono text-green-400 hover:text-green-300 transition-colors"
        >
          {t('card.viewTechnical')} ↗
        </Link>
        {project.demoLink && (
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center text-xs font-mono text-green-500 hover:text-green-300 transition-colors">
            {t('pd.demo')} ↗
          </a>
        )}
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center text-xs font-mono text-gray-500 hover:text-gray-300 transition-colors">
            GitHub ↗
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
