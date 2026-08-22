import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ProjectCard({ project, onClick }) {
  const { language, t } = useLanguage();

  const getCategoryLabel = (category) => {
    if (category === 'cloud') return t.portfolio.catCloud;
    if (category === 'web') return t.portfolio.catWeb;
    return t.portfolio.catMobile;
  };

  return (
    <div
      id={`project-card-${project.id}`}
      className="group relative rounded-3xl overflow-hidden cursor-pointer glass-card border border-border-subtle hover:border-accent-start/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-start/20 flex flex-col h-full bg-bg-secondary/90 text-start"
      onClick={() => onClick(project)}
      role="button"
      tabIndex={0}
      aria-label={`${t.portfolio.readCase}: ${project.title}`}
      onKeyDown={(e) => e.key === 'Enter' && onClick(project)}
    >
      {/* Project Image & Overlay */}
      <div className="relative w-full h-56 sm:h-64 overflow-hidden shrink-0">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-bg-secondary/40 to-transparent" />
        
        {/* Category Pill on top of image */}
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3.5 py-1 rounded-full text-xs font-bold text-white bg-black/60 backdrop-blur-md border border-white/20">
            {getCategoryLabel(project.category)}
          </span>
        </div>

        {/* Live Demo indicator if available */}
        {project.caseStudy.liveUrl && (
          <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-emerald-300 bg-emerald-950/80 backdrop-blur-md border border-emerald-500/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{t.portfolio.liveDemo}</span>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
        <div>
          {/* Title */}
          <h3 className="text-2xl font-black text-text-primary mb-3 group-hover:text-accent-start transition-colors flex items-center justify-between">
            <span>{project.title}</span>
          </h3>

          {/* Solution Brief */}
          <p className="text-sm text-text-secondary leading-relaxed mb-6 line-clamp-2 font-normal">
            {project.caseStudy.solution}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-semibold rounded-lg bg-bg-tertiary text-text-secondary border border-border-subtle"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom CTA Action Bar */}
        <div className="pt-4 border-t border-border-subtle/80 flex items-center justify-between">
          <span className="text-xs font-bold text-accent-start flex items-center gap-1.5 group-hover:underline">
            <span>{t.portfolio.readCase}</span>
            <ArrowLeft className={`w-4 h-4 transition-transform duration-300 ${language === 'ar' ? 'group-hover:-translate-x-1.5' : 'rotate-180 group-hover:translate-x-1.5'}`} />
          </span>

          <div className="w-8 h-8 rounded-full bg-accent-start/10 text-accent-start flex items-center justify-center group-hover:bg-accent-start group-hover:text-white transition-all duration-300">
            <ArrowLeft className={`w-4 h-4 ${language !== 'ar' ? 'rotate-180' : ''}`} />
          </div>
        </div>
      </div>

      {/* Bottom Glow Strip on Hover */}
      <div className="absolute bottom-0 right-0 left-0 h-1 bg-gradient-to-r from-accent-start via-accent-mid to-accent-pink opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}