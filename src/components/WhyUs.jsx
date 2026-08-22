import { Zap, ShieldCheck, Clock, HeadphonesIcon, Award, CheckCircle2 } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useLanguage } from '../context/LanguageContext';

export default function WhyUs() {
  const [ref] = useIntersectionObserver({ threshold: 0.1 });
  const { t } = useLanguage();

  const commitments = [
    {
      step: '01',
      icon: Zap,
      title: t.whyUs.c1Title,
      description: t.whyUs.c1Desc,
      metric: t.whyUs.c1Metric,
      accent: 'from-amber-500 to-orange-500',
      iconColor: 'text-amber-500',
      bgColor: 'bg-amber-500/10 border-amber-500/20',
    },
    {
      step: '02',
      icon: Clock,
      title: t.whyUs.c2Title,
      description: t.whyUs.c2Desc,
      metric: t.whyUs.c2Metric,
      accent: 'from-blue-500 to-indigo-500',
      iconColor: 'text-blue-500',
      bgColor: 'bg-blue-500/10 border-blue-500/20',
    },
    {
      step: '03',
      icon: HeadphonesIcon,
      title: t.whyUs.c3Title,
      description: t.whyUs.c3Desc,
      metric: t.whyUs.c3Metric,
      accent: 'from-purple-500 to-pink-500',
      iconColor: 'text-purple-500',
      bgColor: 'bg-purple-500/10 border-purple-500/20',
    },
    {
      step: '04',
      icon: ShieldCheck,
      title: t.whyUs.c4Title,
      description: t.whyUs.c4Desc,
      metric: t.whyUs.c4Metric,
      accent: 'from-emerald-500 to-teal-500',
      iconColor: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10 border-emerald-500/20',
    },
  ];

  return (
    <section id="why-us" className="w-full py-28 md:py-36 flex flex-col items-center bg-gradient-to-b from-bg-primary via-bg-secondary/30 to-bg-primary relative overflow-hidden scroll-mt-20">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-accent-start/10 rounded-full blur-[100px] pointer-events-none" style={{ transform: 'translateZ(0)' }} />

      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-start/10 text-accent-start border border-accent-start/20 text-xs font-bold mb-4">
          <Award className="w-3.5 h-3.5" />
          <span>{t.whyUs.badge}</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-black text-text-primary mb-4">
          {t.whyUs.title}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-start via-accent-mid to-accent-end">
            {t.whyUs.titleHighlight}
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-text-secondary max-w-2xl mb-24 font-normal leading-relaxed">
          {t.whyUs.desc}
        </p>
        
        {/* Clean Timeline Track Container (Borderless & Elevated) */}
        <div ref={ref} className="relative w-full max-w-6xl">
          
          {/* Subtle Horizontal Connector Line (Visible on Desktop) */}
          <div className="hidden lg:block absolute top-8 right-16 left-16 h-0.5 bg-gradient-to-r from-amber-500/30 via-blue-500/30 via-purple-500/30 to-emerald-500/30 z-0" />

          {/* Timeline Nodes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 relative z-10">
            {commitments.map((item, index) => (
              <div 
                key={index} 
                className="group flex flex-col items-center lg:items-start text-center lg:text-start transition-all duration-300 hover:-translate-y-1"
              >
                {/* Milestone Node Badge */}
                <div className="relative mb-6 flex items-center justify-center">
                  <div className={`w-16 h-16 rounded-2xl ${item.bgColor} border flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl`}>
                    <item.icon className={`w-8 h-8 ${item.iconColor}`} />
                  </div>
                  <span className="absolute -top-2.5 -right-2.5 px-2 py-0.5 rounded-full text-[10px] font-mono font-black text-white bg-gradient-to-r from-accent-start to-accent-end shadow-md">
                    {item.step}
                  </span>
                </div>

                {/* Milestone Title */}
                <h3 className="text-xl sm:text-2xl font-black text-text-primary mb-3 group-hover:text-accent-start transition-colors">
                  {item.title}
                </h3>

                {/* Milestone Description */}
                <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>

                {/* Metric Guarantee Tag */}
                <div className="mt-auto inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-bg-secondary border border-border-subtle text-xs font-bold text-accent-start shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                  <span>{item.metric}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
