import { ArrowLeft, Sparkles, PhoneCall } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function FinalCTA() {
  const { language, t } = useLanguage();

  return (
    <section id="final-cta" className="w-full py-28 flex flex-col items-center bg-bg-primary relative overflow-hidden">
      {/* Dynamic Ambient Background Glows (Hardware Optimized) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-gradient-to-r from-accent-start/15 via-accent-mid/15 to-accent-pink/10 rounded-full blur-[60px] pointer-events-none" style={{ transform: 'translateZ(0)' }} />

      <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative z-10">
        
        {/* Banner Card */}
        <div className="w-full p-10 sm:p-16 rounded-[2.5rem] glass-strong border border-accent-start/30 shadow-2xl shadow-accent-start/15 flex flex-col items-center relative overflow-hidden">
          
          {/* Subtle Decorative Background Lines */}
          <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-start/15 text-accent-start border border-accent-start/30 text-xs font-bold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.cta.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-text-primary mb-6 leading-tight max-w-3xl">
            {t.cta.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-start via-accent-mid to-accent-pink">
              {t.cta.titleHighlight}
            </span>
          </h2>

          <p className="text-base sm:text-xl text-text-secondary mb-10 max-w-2xl leading-relaxed">
            {t.cta.desc}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="#contact"
              className="group relative w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4.5 text-base font-bold text-white bg-gradient-to-r from-accent-start via-accent-mid to-accent-end rounded-2xl shadow-xl shadow-accent-start/30 hover:shadow-2xl hover:shadow-accent-start/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <Sparkles className="w-5 h-5" />
              <span>{t.cta.btnFree}</span>
              <ArrowLeft className={`w-5 h-5 transition-transform duration-300 ${language === 'ar' ? 'group-hover:-translate-x-1.5' : 'rotate-180 group-hover:translate-x-1.5'}`} />
            </a>

            <a
              href="https://wa.me/213668202110"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 text-base font-bold glass text-emerald-500 hover:text-emerald-400 hover:border-emerald-500/40 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{t.cta.btnWhatsapp}</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
