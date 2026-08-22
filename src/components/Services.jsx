import { Monitor, Smartphone, Cloud, Database, Cpu, ArrowUpRight, Sparkles, CheckCircle2, ShieldCheck, Zap, Server } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const [ref] = useIntersectionObserver({ threshold: 0.1 });
  const { language, t } = useLanguage();

  const services = [
    {
      num: '01',
      icon: Monitor,
      title: t.services.s1Title,
      description: t.services.s1Desc,
      tags: ['React 19', 'Next.js 15', 'Tailwind CSS v4', 'Realtime Web', 'Micro-Frontends'],
      gradient: 'from-blue-500/20 via-cyan-500/15 to-transparent',
      accentColor: 'text-blue-400',
      borderColor: 'border-blue-500/30',
      badge: language === 'en' ? 'Ultra-Responsive Web' : language === 'fr' ? 'Web Haute Performance' : 'ويب عالي الأداء والسرعة',
      highlight: language === 'en' ? 'Lighthouse 100/100' : language === 'fr' ? 'Score Lighthouse 100/100' : 'أداء قياسي Lighthouse 100/100',
    },
    {
      num: '02',
      icon: Smartphone,
      title: t.services.s2Title,
      description: t.services.s2Desc,
      tags: ['React Native', 'Flutter', 'iOS & Android', 'Push Alerts', 'Offline Cache'],
      gradient: 'from-purple-500/20 via-pink-500/15 to-transparent',
      accentColor: 'text-purple-400',
      borderColor: 'border-purple-500/30',
      badge: language === 'en' ? 'Cross-Platform Apps' : language === 'fr' ? 'Applications Hybrides' : 'تطبيقات هواتف هجينة وأصلية',
      highlight: language === 'en' ? '60 FPS Native Fluidity' : language === 'fr' ? 'Fluidité 60 FPS Native' : 'سلاسة فائقة 60 إطار/ثانية',
    },
    {
      num: '03',
      icon: Database,
      title: t.services.s3Title,
      description: t.services.s3Desc,
      tags: ['Offline-First', 'SQLite & Postgres', 'Inventory Sync', '80mm Thermal Print', 'Role Matrix'],
      gradient: 'from-emerald-500/20 via-teal-500/15 to-transparent',
      accentColor: 'text-emerald-400',
      borderColor: 'border-emerald-500/30',
      badge: language === 'en' ? 'Zero Downtime POS' : language === 'fr' ? 'Caisse 100% Hors-Ligne' : 'نقاط بيع ومخزون أوفلاين',
      highlight: language === 'en' ? 'Instant Cloud Sync' : language === 'fr' ? 'Synchro Immédiate' : 'مزامنة سحابية فورية',
    },
    {
      num: '04',
      icon: Cloud,
      title: t.services.s4Title,
      description: t.services.s4Desc,
      tags: ['Docker Containers', 'AWS & Cloudflare', 'Zero-Trust Auth', 'AES-256 Backups', 'CI/CD Pipelines'],
      gradient: 'from-amber-500/20 via-orange-500/15 to-transparent',
      accentColor: 'text-amber-400',
      borderColor: 'border-amber-500/30',
      badge: language === 'en' ? 'Enterprise Cloud Ops' : language === 'fr' ? 'Infrastructure Cloud' : 'بنية تحتية سحابية مؤمنة',
      highlight: language === 'en' ? '99.99% Availability SLA' : language === 'fr' ? 'Disponibilité 99.99%' : 'ضمان استقرار 99.99%',
    },
  ];

  return (
    <section id="solutions" className="relative py-28 md:py-36 bg-gradient-to-b from-bg-primary via-bg-secondary/40 to-bg-primary overflow-hidden scroll-mt-20">
      {/* Subtle ambient lighting with distinct blue/cyan tint */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[110px] pointer-events-none" style={{ transform: 'translateZ(0)' }} />
      <div className="absolute bottom-1/4 left-0 w-[550px] h-[550px] bg-indigo-600/10 rounded-full blur-[110px] pointer-events-none" style={{ transform: 'translateZ(0)' }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-start/10 text-accent-start border border-accent-start/20 text-xs font-bold mb-4">
          <Cpu className="w-3.5 h-3.5" />
          <span>{t.services.badge}</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-black text-text-primary text-center mb-4">
          {t.services.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-start via-accent-mid to-accent-end">{t.services.titleHighlight}</span>
        </h2>

        {/* Subtitle */}
        <p className="max-w-2xl text-center text-text-secondary text-base md:text-lg mb-20 font-normal leading-relaxed">
          {t.services.desc}
        </p>

        {/* Alternating Solutions Flow (Zig-Zag Layout) */}
        <div ref={ref} className="w-full max-w-5xl flex flex-col gap-12 sm:gap-16 text-start">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={service.num}
                className={`group p-8 sm:p-10 lg:p-12 rounded-3xl glass-card border border-border-subtle hover:border-accent-start/50 bg-bg-secondary/90 shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Visual Showcase Side */}
                <div className="w-full lg:w-5/12 flex flex-col items-center justify-center p-8 rounded-2xl bg-gradient-to-br from-bg-primary/90 to-bg-tertiary/70 border border-border-subtle relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-50 pointer-events-none`} />
                  
                  {/* Big Stylized Icon */}
                  <div className={`relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-bg-secondary/90 border ${service.borderColor} flex items-center justify-center shadow-2xl mb-6`}>
                    <service.icon className={`w-10 h-10 sm:w-12 sm:h-12 ${service.accentColor}`} />
                  </div>

                  {/* Micro Badge */}
                  <div className="relative z-10 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bg-secondary border border-border-subtle text-xs font-bold text-text-primary shadow-sm">
                    <Sparkles className={`w-3.5 h-3.5 ${service.accentColor}`} />
                    <span>{service.badge}</span>
                  </div>

                  {/* High Value Highlight Metric */}
                  <div className="relative z-10 mt-3 text-xs font-mono font-bold text-success">
                    ✓ {service.highlight}
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-7/12 flex flex-col items-start justify-between">
                  <div>
                    {/* Index Number */}
                    <div className="flex items-center justify-between w-full mb-3">
                      <span className="text-2xl sm:text-3xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-accent-start to-accent-mid opacity-70">
                        {service.num}
                      </span>
                      <div className="p-2 rounded-xl bg-text-primary/5 text-text-secondary group-hover:text-accent-start group-hover:bg-accent-start/10 transition-all">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Service Title */}
                    <h3 className="text-2xl sm:text-3xl font-black text-text-primary mb-4 group-hover:text-accent-start transition-colors leading-snug">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-6 font-normal">
                      {service.description}
                    </p>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 pt-5 border-t border-border-subtle w-full">
                    {service.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3.5 py-1 text-xs font-semibold rounded-xl bg-bg-tertiary text-text-primary border border-border-subtle group-hover:border-accent-start/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
