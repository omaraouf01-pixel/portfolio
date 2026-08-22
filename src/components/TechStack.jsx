import { Code2, Server, Database, Layers, Terminal } from 'lucide-react';

export default function TechStack() {
  const techCategories = [
    {
      category: 'تطوير الواجهات (Frontend)',
      icon: Layers,
      items: [
        { name: 'React 19', tag: 'Core UI', color: 'text-cyan-400', border: 'hover:border-cyan-500/50' },
        { name: 'Next.js 15', tag: 'Fullstack SSR', color: 'text-white', border: 'hover:border-slate-400/50' },
        { name: 'Tailwind CSS v4', tag: 'Modern Styling', color: 'text-sky-400', border: 'hover:border-sky-500/50' },
        { name: 'TypeScript', tag: 'Type Safety', color: 'text-blue-400', border: 'hover:border-blue-500/50' },
      ],
    },
    {
      category: 'الأنظمة الخلفية (Backend & APIs)',
      icon: Server,
      items: [
        { name: 'Node.js', tag: 'High Concurrency', color: 'text-emerald-400', border: 'hover:border-emerald-500/50' },
        { name: 'Python', tag: 'Data & Automation', color: 'text-amber-400', border: 'hover:border-amber-500/50' },
        { name: 'Express / Fastify', tag: 'RESTful APIs', color: 'text-slate-300', border: 'hover:border-slate-500/50' },
        { name: 'GraphQL', tag: 'Optimized Queries', color: 'text-pink-400', border: 'hover:border-pink-500/50' },
      ],
    },
    {
      category: 'قواعد البيانات والسحابة (Cloud & Database)',
      icon: Database,
      items: [
        { name: 'PostgreSQL', tag: 'Relational DB', color: 'text-blue-400', border: 'hover:border-blue-500/50' },
        { name: 'Firebase', tag: 'Realtime Backend', color: 'text-amber-500', border: 'hover:border-amber-500/50' },
        { name: 'Redis', tag: 'High-speed Cache', color: 'text-red-400', border: 'hover:border-red-500/50' },
        { name: 'Docker / AWS', tag: 'Cloud Infrastructure', color: 'text-indigo-400', border: 'hover:border-indigo-500/50' },
      ],
    },
  ];

  return (
    <section id="tech-stack" className="w-full py-24 flex flex-col items-center bg-bg-primary relative">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-mid/10 text-accent-mid border border-accent-mid/20 text-xs font-bold mb-4">
          <Terminal className="w-3.5 h-3.5" />
          <span>الترسانة التقنية</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-text-primary mb-4">
          تقنيات حديثة <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-start to-accent-pink">لبناء أنظمة المستقبل</span>
        </h2>

        <p className="text-base md:text-lg text-text-secondary max-w-2xl mb-16">
          نختار أفضل وأحدث الأدوات البرمجية لضمان أقصى درجات الاستقرار، الأمان، وسرعة الاستجابة
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
          {techCategories.map((group, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl glass-card border border-border-subtle flex flex-col items-start text-start"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border-subtle w-full">
                <div className="p-2.5 rounded-xl bg-accent-start/10 text-accent-start">
                  <group.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-black text-text-primary">{group.category}</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                {group.items.map((tech, i) => (
                  <div
                    key={i}
                    className={`p-3.5 rounded-2xl bg-bg-secondary border border-border-subtle ${tech.border} transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Code2 className={`w-4 h-4 ${tech.color}`} />
                      <span className="font-bold text-sm text-text-primary">{tech.name}</span>
                    </div>
                    <span className="text-[11px] text-text-muted font-medium">{tech.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
