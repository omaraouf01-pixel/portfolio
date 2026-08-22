import { Zap, ShieldCheck, Clock, HeadphonesIcon, Award, CheckCircle } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useLanguage } from '../context/LanguageContext';

export default function WhyUs() {
  const [ref] = useIntersectionObserver({ threshold: 0.1 });
  const { t } = useLanguage();

  const commitments = [
    {
      icon: Zap,
      title: t.whyUs.c1Title,
      description: t.whyUs.c1Desc,
      metric: t.whyUs.c1Metric,
      gradient: 'from-amber-500/20 to-orange-500/20',
      iconColor: 'text-amber-500',
    },
    {
      icon: Clock,
      title: t.whyUs.c2Title,
      description: t.whyUs.c2Desc,
      metric: t.whyUs.c2Metric,
      gradient: 'from-blue-500/20 to-indigo-500/20',
      iconColor: 'text-blue-500',
    },
    {
      icon: HeadphonesIcon,
      title: t.whyUs.c3Title,
      description: t.whyUs.c3Desc,
      metric: t.whyUs.c3Metric,
      gradient: 'from-purple-500/20 to-pink-500/20',
      iconColor: 'text-purple-500',
    },
    {
      icon: ShieldCheck,
      title: t.whyUs.c4Title,
      description: t.whyUs.c4Desc,
      metric: t.whyUs.c4Metric,
      gradient: 'from-emerald-500/20 to-teal-500/20',
      iconColor: 'text-emerald-500',
    },
  ];

  return (
    <section id="why-us" className="w-full py-24 flex flex-col items-center bg-bg-secondary/40 relative">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-start/10 text-accent-start border border-accent-start/20 text-xs font-bold mb-4">
          <Award className="w-3.5 h-3.5" />
          <span>{t.whyUs.badge}</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-text-primary mb-4">
          {t.whyUs.title}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-start via-accent-mid to-accent-end">
            {t.whyUs.titleHighlight}
          </span>
        </h2>

        <p className="text-base md:text-lg text-text-secondary max-w-2xl mb-16">
          {t.whyUs.desc}
        </p>
        
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {commitments.map((item, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-3xl glass-card flex flex-col items-start text-start border border-border-subtle hover:border-accent-start/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-start/15"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} border border-border-subtle flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`w-7 h-7 ${item.iconColor}`} />
              </div>

              <h3 className="text-xl font-black text-text-primary mb-3 group-hover:text-accent-start transition-colors">
                {item.title}
              </h3>

              <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">
                {item.description}
              </p>

              <div className="w-full pt-4 border-t border-border-subtle flex items-center gap-2 text-xs font-bold text-accent-start">
                <CheckCircle className="w-4 h-4" />
                <span>{item.metric}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

