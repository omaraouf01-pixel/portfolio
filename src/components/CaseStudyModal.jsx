import { useEffect, useRef, useState } from 'react';
import { X, ExternalLink, Code2, AlertCircle, Lightbulb, CheckCircle2, Layers, ShieldCheck, Zap, Server, Database, RefreshCw } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function CaseStudyModal({ project, onClose }) {
  const overlayRef = useRef(null);
  const modalRef = useRef(null);
  const [activeTab, setActiveTab] = useState('overview');
  const { language, t } = useLanguage();

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  if (!project) return null;

  const projectTitle = typeof project.title === 'object' ? project.title[language] || project.title.ar : project.title;
  const projectProblem = typeof project.caseStudy.problem === 'object' ? project.caseStudy.problem[language] || project.caseStudy.problem.ar : project.caseStudy.problem;
  const projectSolution = typeof project.caseStudy.solution === 'object' ? project.caseStudy.solution[language] || project.caseStudy.solution.ar : project.caseStudy.solution;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-fade-in"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-2xl transition-opacity" />

      {/* Modal Card */}
      <div
        ref={modalRef}
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-bg-secondary border border-border-subtle shadow-2xl shadow-black/50 animate-slide-up text-start z-10"
      >
        {/* Modal Hero Banner */}
        <div className="relative h-64 sm:h-80 overflow-hidden rounded-t-3xl">
          <img
            src={project.thumbnail}
            alt={projectTitle}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-bg-secondary/75 to-black/40" />
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 left-5 p-2.5 rounded-full bg-black/60 backdrop-blur-md hover:bg-black/80 transition-all duration-300 border border-white/20 text-white cursor-pointer"
            aria-label={t.caseStudy.closeAria}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title Header */}
          <div className="absolute bottom-0 right-0 left-0 p-6 sm:p-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-start/20 border border-accent-start/40 text-accent-start text-xs font-bold mb-3 backdrop-blur-md">
              <Layers className="w-3.5 h-3.5" />
              <span>{t.caseStudy.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white drop-shadow-md">
              {projectTitle}
            </h2>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="px-6 sm:px-10 pt-6 pb-2 border-b border-border-subtle flex items-center gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'overview'
                ? 'bg-accent-start text-white shadow-md'
                : 'text-text-secondary hover:text-text-primary hover:bg-text-primary/5'
            }`}
          >
            {t.caseStudy.overviewTab}
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'architecture'
                ? 'bg-accent-start text-white shadow-md'
                : 'text-text-secondary hover:text-text-primary hover:bg-text-primary/5'
            }`}
          >
            <Server className="w-3.5 h-3.5" />
            <span>{t.caseStudy.architectureTab}</span>
          </button>
        </div>

        {/* Modal Content Sections */}
        <div className="p-6 sm:p-10 space-y-8">
          
          {activeTab === 'overview' ? (
            <>
              {/* Problem Section */}
              <div className="p-6 rounded-2xl bg-red-500/5 dark:bg-red-500/10 border border-red-500/20 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-red-500/20 text-red-500">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary">{t.caseStudy.problemTitle}</h3>
                </div>
                <p className="text-text-secondary leading-relaxed text-sm sm:text-base font-normal">
                  {projectProblem}
                </p>
              </div>

              {/* Solution Section */}
              <div className="p-6 rounded-2xl bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-500">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary">{t.caseStudy.solutionTitle}</h3>
                </div>
                <p className="text-text-secondary leading-relaxed text-sm sm:text-base font-normal">
                  {projectSolution}
                </p>
              </div>

              {/* Tech Stack & Architecture */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-2 border-b border-border-subtle">
                  <CheckCircle2 className="w-5 h-5 text-accent-start" />
                  <h3 className="text-lg font-bold text-text-primary">{t.caseStudy.toolsTitle}</h3>
                </div>
                <div className="flex flex-wrap gap-2.5 pt-1">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 text-xs sm:text-sm font-bold rounded-xl bg-accent-start/10 text-accent-start border border-accent-start/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </>
          ) : (
            /* Interactive Architecture Flow Tab */
            <div className="space-y-6">
              <div className="text-xs sm:text-sm text-text-secondary">
                {t.caseStudy.archDesc}
              </div>

              <div className="p-6 rounded-2xl bg-[#0A0E17] border border-slate-800 space-y-6 text-slate-200">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center">
                  
                  {/* Node 1: Client */}
                  <div className="p-4 rounded-xl bg-slate-900 border border-blue-500/40 flex flex-col items-center">
                    <div className="p-2.5 rounded-lg bg-blue-500/20 text-blue-400 mb-2">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div className="text-xs font-bold text-white">Client Apps</div>
                    <div className="text-[10px] text-slate-400 mt-1">React 19 / Mobile</div>
                  </div>

                  {/* Node 2: Gateway & Security */}
                  <div className="p-4 rounded-xl bg-slate-900 border border-purple-500/40 flex flex-col items-center">
                    <div className="p-2.5 rounded-lg bg-purple-500/20 text-purple-400 mb-2">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div className="text-xs font-bold text-white">API Gateway</div>
                    <div className="text-[10px] text-slate-400 mt-1">JWT + Rate Limiting</div>
                  </div>

                  {/* Node 3: Core Engine */}
                  <div className="p-4 rounded-xl bg-slate-900 border border-emerald-500/40 flex flex-col items-center">
                    <div className="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-400 mb-2">
                      <Server className="w-5 h-5" />
                    </div>
                    <div className="text-xs font-bold text-white">Services Engine</div>
                    <div className="text-[10px] text-slate-400 mt-1">Node.js Microservices</div>
                  </div>

                  {/* Node 4: DB & Sync */}
                  <div className="p-4 rounded-xl bg-slate-900 border border-pink-500/40 flex flex-col items-center">
                    <div className="p-2.5 rounded-lg bg-pink-500/20 text-pink-400 mb-2">
                      <Database className="w-5 h-5" />
                    </div>
                    <div className="text-xs font-bold text-white">Database & Cache</div>
                    <div className="text-[10px] text-slate-400 mt-1">PostgreSQL + Redis</div>
                  </div>

                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 text-emerald-400 animate-spin-slow" />
                    <span>{t.caseStudy.multiBranchSync}</span>
                  </div>
                  <span className="text-emerald-400 font-bold">{t.caseStudy.latency}</span>
                </div>
              </div>
            </div>
          )}

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border-subtle">
            {project.caseStudy.liveUrl ? (
              <a
                href={project.caseStudy.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t.caseStudy.liveDemo}: ${projectTitle}`}
                className="group flex-1 flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-accent-start to-accent-end rounded-xl shadow-lg shadow-accent-start/30 hover:shadow-xl hover:shadow-accent-start/50 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>{t.caseStudy.liveDemo}</span>
                <ExternalLink className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </a>
            ) : null}

            {project.caseStudy.sourceUrl ? (
              <a
                href={project.caseStudy.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t.caseStudy.sourceCode}: ${projectTitle}`}
                className="group flex-1 flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-text-primary bg-bg-tertiary border border-border-subtle rounded-xl hover:border-accent-start hover:text-accent-start transition-all duration-300 hover:-translate-y-0.5"
              >
                <Code2 className="w-5 h-5" />
                <span>{t.caseStudy.sourceCode}</span>
              </a>
            ) : null}

            <button
              onClick={onClose}
              className="px-6 py-4 rounded-xl border border-border-subtle text-text-secondary hover:text-text-primary hover:bg-text-primary/5 text-sm font-bold transition-all cursor-pointer"
            >
              {t.caseStudy.closeBtn}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

