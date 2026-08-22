import { Search, PenTool, Code2, Rocket, Sparkles, Check } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useLanguage } from '../context/LanguageContext';

export default function Process() {
  const [ref] = useIntersectionObserver({ threshold: 0.1 });
  const { t } = useLanguage();

  const steps = [
    {
      icon: Search,
      title: t.process.s1Title,
      description: t.process.s1Desc,
      deliverable: t.process.s1Deliverable,
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      icon: PenTool,
      title: t.process.s2Title,
      description: t.process.s2Desc,
      deliverable: t.process.s2Deliverable,
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Code2,
      title: t.process.s3Title,
      description: t.process.s3Desc,
      deliverable: t.process.s3Deliverable,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Rocket,
      title: t.process.s4Title,
      description: t.process.s4Desc,
      deliverable: t.process.s4Deliverable,
      gradient: 'from-pink-500 to-emerald-500',
    },
  ];

  return (
    <section id="process" className="relative py-24 bg-bg-secondary/40">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-end/10 text-accent-end border border-accent-end/20 text-xs font-bold mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.process.badge}</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-text-primary text-center mb-4">
          {t.process.title}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-start via-accent-mid to-accent-end">
            {t.process.titleHighlight}
          </span>
        </h2>

        <p className="max-w-2xl text-center text-text-secondary text-base md:text-lg mb-20">
          {t.process.desc}
        </p>

        {/* Illuminated Steps Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full relative">
          
          {steps.map((step, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-3xl glass-card flex flex-col items-start text-start border border-border-subtle hover:border-accent-start/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-start/15"
            >
              {/* Step Number Badge */}
              <div className="flex items-center justify-between w-full mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${step.gradient} p-0.5 shadow-lg shadow-accent-start/20`}>
                  <div className="w-full h-full rounded-[14px] bg-bg-secondary flex items-center justify-center group-hover:bg-transparent transition-colors">
                    <step.icon className="w-6 h-6 text-accent-start group-hover:text-white transition-colors" />
                  </div>
                </div>

                <span className="font-mono text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-text-muted to-accent-start/60">
                  0{index + 1}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-black text-text-primary mb-3 group-hover:text-accent-start transition-colors">
                {step.title}
              </h3>

              <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">
                {step.description}
              </p>

              {/* Milestone Box */}
              <div className="w-full p-3 rounded-xl bg-bg-tertiary/80 border border-border-subtle flex items-start gap-2 text-xs font-semibold text-text-secondary">
                <Check className="w-4 h-4 text-success shrink-0 mt-0.5" />
                <span>{step.deliverable}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

