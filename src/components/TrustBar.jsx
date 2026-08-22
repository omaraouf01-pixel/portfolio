import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useAnimatedCounter } from '../hooks/useAnimatedCounter';
import { CheckCircle2, Award, Clock4, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

function AnimatedStat({ value, suffix, prefix, label, icon: Icon, trigger }) {
  const count = useAnimatedCounter(value, 1800, trigger);
  
  return (
    <div className="group relative p-6 rounded-2xl glass-card flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent-start/50">
      <div className="p-3 rounded-xl bg-accent-start/10 text-accent-start mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent-start/15">
        <Icon className="w-5 h-5" />
      </div>
      <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-text-primary to-accent-start mb-1 font-mono" dir="ltr">
        {prefix}{count}{suffix}
      </div>
      <div className="text-xs md:text-sm text-text-secondary font-semibold">{label}</div>
    </div>
  );
}

export default function TrustBar() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.2 });
  const { t } = useLanguage();

  const stats = [
    { value: 18, prefix: '+', suffix: '', label: t.trust.stat1Label, icon: Award },
    { value: 14, prefix: '+', suffix: '', label: t.trust.stat2Label, icon: CheckCircle2 },
    { value: 100, prefix: '', suffix: '%', label: t.trust.stat3Label, icon: Users },
    { value: 24, prefix: '<', suffix: t.trust.stat4Suffix || 'h', label: t.trust.stat4Label, icon: Clock4 },
  ];

  return (
    <section ref={ref} id="trust-bar" className="w-full py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <AnimatedStat 
              key={i}
              value={stat.value} 
              prefix={stat.prefix} 
              suffix={stat.suffix} 
              label={stat.label} 
              icon={stat.icon}
              trigger={isIntersecting} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

