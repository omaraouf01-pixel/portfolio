import { useState, useMemo } from 'react';
import { getLocalizedProjects, categories } from '../data/projects';
import ProjectCard from './ProjectCard';
import CaseStudyModal from './CaseStudyModal';
import { Layers } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useLanguage } from '../context/LanguageContext';

export default function PortfolioGrid() {
  const { language, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [ref] = useIntersectionObserver({ threshold: 0.1 });

  const localizedProjects = useMemo(() => getLocalizedProjects(language), [language]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return localizedProjects;
    return localizedProjects.filter((p) => p.category === activeFilter);
  }, [activeFilter, localizedProjects]);

  return (
    <>
      <section id="portfolio" className="relative py-28 md:py-36 bg-gradient-to-b from-bg-primary via-indigo-950/20 to-bg-primary overflow-hidden scroll-mt-20">
        {/* Subtle ambient lighting with purple/indigo glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-accent-mid/15 rounded-full blur-[100px] pointer-events-none" style={{ transform: 'translateZ(0)' }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-start/10 text-accent-start border border-accent-start/20 text-xs font-bold mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>{t.portfolio.badge}</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-text-primary text-center mb-4">
            {t.portfolio.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-start via-accent-mid to-accent-pink">
              {t.portfolio.titleHighlight}
            </span>
          </h2>

          <p className="max-w-2xl text-center text-text-secondary text-base md:text-lg mb-16 font-normal leading-relaxed">
            {t.portfolio.desc}
          </p>

          {/* Category Filter Pills (Shown when multiple categories exist) */}
          {categories.length > 1 && (
            <div className="flex flex-wrap justify-center gap-3 mb-16 w-full">
              {categories.map((cat) => {
                const label = typeof cat.label === 'object' ? cat.label[language] || cat.label.ar : cat.label;
                return (
                  <button
                    key={cat.id}
                    id={`filter-${cat.id}`}
                    onClick={() => setActiveFilter(cat.id)}
                    className={`relative flex justify-center items-center px-7 py-3 text-xs sm:text-sm font-bold rounded-2xl border transition-all duration-300 cursor-pointer ${
                      activeFilter === cat.id
                        ? 'bg-gradient-to-r from-accent-start to-accent-end text-white border-transparent shadow-lg shadow-accent-start/30 scale-105'
                        : 'text-text-secondary border-border-subtle bg-bg-secondary hover:text-text-primary hover:border-accent-start/40 hover:bg-text-primary/5'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          )}

          {/* Projects Grid */}
          <div
            ref={ref}
            className={`w-full ${
              filteredProjects.length === 1
                ? 'max-w-2xl mx-auto'
                : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'
            }`}
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="w-full"
              >
                <ProjectCard
                  project={project}
                  onClick={setSelectedProject}
                />
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-text-muted w-full">
              <p className="text-lg font-semibold">{t.portfolio.emptyMsg}</p>
            </div>
          )}
        </div>
      </section>

      {/* Case Study Modal */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}

