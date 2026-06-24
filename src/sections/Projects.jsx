import React, { useState, useMemo } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { useApp } from '../context/AppContext';

const Projects = () => {
  const { t, L } = useApp();
  const titleLines = t('projects.title').split('\n');

  const [query, setQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  // Filtre çipleri: en az 2 projede geçen teknolojiler (sık kullanılanlar)
  const chips = useMemo(() => {
    const freq = {};
    projects.forEach(p => p.tags.forEach(tag => { freq[tag] = (freq[tag] || 0) + 1; }));
    return Object.keys(freq)
      .filter(tag => freq[tag] >= 2)
      .sort((a, b) => freq[b] - freq[a] || a.localeCompare(b));
  }, []);

  const toggleTag = (tag) => {
    setSelectedTags(prev => prev.includes(tag) ? prev.filter(x => x !== tag) : [...prev, tag]);
  };

  const clearAll = () => { setQuery(''); setSelectedTags([]); };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter(p => {
      // Çip filtresi (OR): seçili etiketlerden en az biri projede varsa geçer
      const tagOk = selectedTags.length === 0 || p.tags.some(tag => selectedTags.includes(tag));
      if (!tagOk) return false;
      if (!q) return true;
      // Metin filtresi: başlık + açıklama + kategori + etiketler
      const hay = [
        p.title,
        L(p.description),
        L(p.category),
        ...p.tags,
      ].join(' ').toLowerCase();
      return hay.includes(q);
    });
  }, [query, selectedTags, L]);

  const hasFilter = query.trim() !== '' || selectedTags.length > 0;

  return (
    <section id="projects" className="max-w-7xl mx-auto px-8 py-32 border-t border-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div>
          <span className="mono-detail block mb-4">{t('projects.label')}</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
            {titleLines.map((line, i) => (
              <React.Fragment key={i}>
                {line}{i < titleLines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
        </div>
        <p className="text-gray-400 max-w-xs text-sm font-medium leading-relaxed">
          {t('projects.subtitle')}
        </p>
      </div>

      {/* Arama + Filtre */}
      <div className="mb-12 space-y-5">
        <div className="flex items-center gap-3 flex-wrap">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('search.placeholder')}
            className="flex-1 min-w-[200px] max-w-md px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:border-blue-500 outline-none transition-colors"
          />
          <span className="mono-detail text-[10px] text-gray-400">
            {filtered.length} {t('search.results')}
          </span>
          {hasFilter && (
            <button onClick={clearAll} className="mono-detail text-[10px] text-blue-600 hover:text-blue-800 underline">
              {t('search.clear')}
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {chips.map(tag => {
            const active = selectedTags.includes(tag);
            return (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`text-[10px] font-mono tracking-widest uppercase px-3 py-1.5 rounded-full border transition-colors ${
                  active
                    ? 'bg-black text-white border-black'
                    : 'bg-gray-50 text-gray-500 border-gray-200 hover:border-gray-400'
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <p className="mono-detail text-gray-400">{t('search.noResults')}</p>
          <button onClick={clearAll} className="mt-4 text-sm text-blue-600 underline">
            {t('search.clear')}
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
