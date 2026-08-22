import { X, Printer, Briefcase, GraduationCap, Code2, Award, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { playClickSound } from '../utils/soundEffects';

export default function ResumeModal({ isOpen, onClose }) {
  const { language, t } = useLanguage();

  if (!isOpen) return null;

  const handlePrint = () => {
    playClickSound();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-bg-secondary text-text-primary rounded-3xl border border-border-subtle shadow-2xl overflow-hidden flex flex-col animate-slide-up">
        
        {/* Header Actions */}
        <div className="p-5 bg-bg-tertiary/90 border-b border-border-subtle flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-accent-start/10 text-accent-start flex items-center justify-center">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-black text-sm text-text-primary">
                {t.resume.title}
              </h3>
              <p className="text-[11px] text-text-muted">Omar | Full-Stack Software Engineer</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-accent-start text-white text-xs font-bold hover:bg-accent-end transition-all shadow-md cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{t.resume.print}</span>
            </button>
            <button
              onClick={() => {
                playClickSound();
                onClose();
              }}
              className="p-2 rounded-xl text-text-secondary hover:text-text-primary hover:bg-text-primary/5 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable / Viewable Resume Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-start text-xs sm:text-sm print:p-0">
          
          {/* Personal Profile */}
          <div className="pb-6 border-b border-border-subtle flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-text-primary">Omar | CodeSolve</h1>
              <p className="text-sm font-bold text-accent-start mt-0.5">{t.resume.role}</p>
              <p className="text-xs text-text-secondary mt-2 max-w-xl leading-relaxed">
                {t.resume.summary}
              </p>
            </div>

            <div className="space-y-1.5 text-xs text-text-muted shrink-0">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-accent-start" />
                <span>Oran, Algeria 🇩🇿</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-500" />
                <span dir="ltr">+213 668 20 21 10</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-accent-mid" />
                <span>codesolve01@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-base font-black text-text-primary mb-4 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-accent-start" />
              <span>{t.resume.skillsTitle}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-bg-tertiary border border-border-subtle">
                <span className="font-black text-text-primary block mb-1">{t.resume.feTitle}:</span>
                <p className="text-text-secondary">React 19, Next.js 15, React Native, Tailwind CSS v4, TypeScript, Vite, Progressive Web Apps (PWA).</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-bg-tertiary border border-border-subtle">
                <span className="font-black text-text-primary block mb-1">{t.resume.beTitle}:</span>
                <p className="text-text-secondary">Node.js, Express, Fastify, Python, PostgreSQL, SQLite (Offline-First), Redis, Docker, Firebase, AWS.</p>
              </div>
            </div>
          </div>

          {/* Experience / Featured Production Systems */}
          <div>
            <h3 className="text-base font-black text-text-primary mb-4 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-accent-start" />
              <span>{t.resume.projectsTitle}</span>
            </h3>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-bg-tertiary border border-border-subtle">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-bold text-text-primary text-sm">{t.resume.tawassolTitle}</h4>
                  <span className="text-[11px] font-mono text-emerald-500 font-bold">{t.resume.tawassolStatus}</span>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {t.resume.tawassolDesc}
                </p>
              </div>
            </div>
          </div>

          {/* Education & Guarantees */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <h3 className="text-base font-black text-text-primary mb-3 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-accent-start" />
                <span>{t.resume.eduTitle}</span>
              </h3>
              <div className="p-3.5 rounded-2xl bg-bg-tertiary border border-border-subtle text-xs">
                <p className="font-bold text-text-primary">{t.resume.eduDegree}</p>
                <p className="text-[11px] text-text-muted mt-0.5">{t.resume.eduLocation}</p>
              </div>
            </div>

            <div>
              <h3 className="text-base font-black text-text-primary mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-accent-mid" />
                <span>{t.resume.commitTitle}</span>
              </h3>
              <div className="p-3.5 rounded-2xl bg-bg-tertiary border border-border-subtle text-xs space-y-1">
                <p className="text-emerald-500 font-bold">{t.resume.c1}</p>
                <p className="text-accent-start font-bold">{t.resume.c2}</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

