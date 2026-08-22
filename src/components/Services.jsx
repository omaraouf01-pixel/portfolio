import { Monitor, Smartphone, Cloud, Database, Cpu, ArrowUpRight } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const [ref] = useIntersectionObserver({ threshold: 0.1 });
  const { t } = useLanguage();

  const services = [
    {
      icon: Monitor,
      title: t.services.s1Title,
      description: t.services.s1Desc,
      tags: ['React 19', 'Next.js', 'Tailwind', 'Realtime Web'],
      gradient: 'from-blue-500/20 to-cyan-500/20',
      iconColor: 'text-blue-500',
    },
    {
      icon: Smartphone,
      title: t.services.s2Title,
      description: t.services.s2Desc,
      tags: ['React Native', 'Flutter', 'Cross-Platform', 'APIs'],
      gradient: 'from-purple-500/20 to-pink-500/20',
      iconColor: 'text-purple-500',
    },
    {
      icon: Database,
      title: t.services.s3Title,
      description: t.services.s3Desc,
      tags: ['Offline-First', 'PostgreSQL', 'Inventory Sync', 'Automation'],
      gradient: 'from-emerald-500/20 to-teal-500/20',
      iconColor: 'text-emerald-500',
    },
    {
      icon: Cloud,
      title: t.services.s4Title,
      description: t.services.s4Desc,
      tags: ['AWS', 'Firebase', 'Docker', 'AES-256 Security'],
      gradient: 'from-amber-500/20 to-orange-500/20',
      iconColor: 'text-amber-500',
    },
  ];

  return (
    <section id="services" className="relative py-24 bg-bg-primary">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-start/10 text-accent-start border border-accent-start/20 text-xs font-bold mb-4">
          <Cpu className="w-3.5 h-3.5" />
          <span>{t.services.badge}</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-text-primary text-center mb-4">
          {t.services.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-start via-accent-mid to-accent-end">{t.services.titleHighlight}</span>
        </h2>

        <p className="max-w-2xl text-center text-text-secondary text-base md:text-lg mb-16">
          {t.services.desc}
        </p>

        {/* Bento-style Services Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 sm:p-10 rounded-3xl glass-card text-start flex flex-col justify-between border border-border-subtle hover:border-accent-start/50 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-accent-start/15"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} border border-border-subtle flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                    <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                  </div>
                  <div className="p-2 rounded-xl bg-text-primary/5 text-text-muted group-hover:text-accent-start group-hover:bg-accent-start/10 transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-2xl font-black text-text-primary mb-3 group-hover:text-accent-start transition-colors">
                  {service.title}
                </h3>

                <p className="text-text-secondary leading-relaxed text-sm md:text-base mb-8">
                  {service.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border-subtle/60">
                {service.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-semibold rounded-lg bg-bg-tertiary text-text-secondary border border-border-subtle"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
