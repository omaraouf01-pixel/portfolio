import { Zap, ShieldCheck, Cloud, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function TrustBar() {
  const { t } = useLanguage();

  const trustMetrics = [
    {
      icon: Zap,
      iconColor: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
      title: t.trustBar?.item1Title || 'أداء عالي',
      subtitle: t.trustBar?.item1Sub || 'مبني بتقنيات حديثة',
    },
    {
      icon: ShieldCheck,
      iconColor: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
      title: t.trustBar?.item2Title || 'أمان بالتصميم',
      subtitle: t.trustBar?.item2Sub || 'تشفير على مستوى الصناعة',
    },
    {
      icon: Cloud,
      iconColor: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
      title: t.trustBar?.item3Title || 'بنية سحابية',
      subtitle: t.trustBar?.item3Sub || 'قابلة للتوسع والنمو',
    },
    {
      icon: Award,
      iconColor: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
      title: t.trustBar?.item4Title || 'ضمان 3 أشهر',
      subtitle: t.trustBar?.item4Sub || 'دعم فني مجاني بعد التسليم',
    },
  ];

  return (
    <section className="w-full border-y border-border-subtle/80 bg-bg-secondary/60 backdrop-blur-md py-6 sm:py-8 relative z-20 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {trustMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 sm:gap-4 justify-start group"
            >
              <div className={`p-2.5 sm:p-3 rounded-2xl border flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 ${metric.iconColor}`}>
                <metric.icon className="w-5 h-5" />
              </div>
              <div className="flex flex-col text-start min-w-0">
                <span className="text-sm sm:text-base font-black text-text-primary tracking-tight leading-tight">
                  {metric.title}
                </span>
                <span className="text-xs text-text-secondary font-medium truncate mt-0.5">
                  {metric.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
