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
    <section id="process" className="relative py-28 md:py-36 bg-bg-secondary/40 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent-end/10 rounded-full blur-[100px] pointer-events-none" style={{ transform: 'translateZ(0)' }} />

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

        <p className="max-w-2xl text-center text-text-secondary text-base md:text-lg mb-20 font-normal leading-relaxed">
          {t.process.desc}
        </p>

        {/* Illuminated Steps Grid with Connected Pipeline Track */}
        <div ref={ref} className="relative w-full">
          
          {/* Continuous Glowing Pipeline Bar for Large Screens (Desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-500/40 via-purple-500/50 to-emerald-500/40 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-start to-transparent w-32 animate-shimmer opacity-75" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="group relative p-8 rounded-3xl glass-card flex flex-col items-start text-start border border-border-subtle hover:border-accent-start/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-start/20 bg-bg-secondary/95"
              >
                {/* Step Header with Pulse Node */}
                <div className="flex items-center justify-between w-full mb-7 relative">
                  <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-tr ${step.gradient} p-0.5 shadow-lg shadow-accent-start/20`}>
                    <div className="w-full h-full rounded-[14px] bg-bg-secondary flex items-center justify-center group-hover:bg-transparent transition-colors">
                      <step.icon className="w-6 h-6 text-accent-start group-hover:text-white transition-colors" />
                    </div>
                    {/* Live Pipeline Pulse Node */}
                    <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-start opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-start"></span>
                    </span>
                  </div>

                  <span className="font-mono text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-text-secondary to-accent-start">
                    0{index + 1}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl sm:text-2xl font-black text-text-primary mb-3.5 group-hover:text-accent-start transition-colors">
                  {step.title}
                </h3>

                <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-6 flex-grow font-normal">
                  {step.description}
                </p>

                {/* Milestone Box */}
                <div className="w-full p-3.5 rounded-2xl bg-bg-tertiary border border-border-subtle flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-text-primary">
                  <Check className="w-4 h-4 text-success shrink-0 mt-0.5" />
                  <span>{step.deliverable}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

