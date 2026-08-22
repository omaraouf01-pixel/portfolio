export const categories = [
  { id: 'all', label: { ar: 'الكل', fr: 'Tous', en: 'All' } },
  { id: 'web', label: { ar: 'تطبيقات الويب', fr: 'Applications Web', en: 'Web Apps' } },
];

export const projects = [
  {
    id: 'tawassol-1',
    title: {
      ar: 'منصة تواصل (Tawassol)',
      fr: 'Plateforme Sociale Tawassol',
      en: 'Tawassol Collaborative Platform',
    },
    category: 'web',
    thumbnail: '/images/tawassol.png',
    tags: ['React', 'Next.js', 'Firebase'],
    caseStudy: {
      problem: {
        ar: 'تشتت المصادر التعليمية وصعوبة التواصل الأكاديمي الفعال بين الطلاب والأساتذة.',
        fr: 'Dispersion des ressources éducatives et difficultés d\'échange académique fluide entre étudiants et enseignants.',
        en: 'Scattered academic resources and inefficient communication channels between educational institutions and students.',
      },
      solution: {
        ar: 'منصة اجتماعية تعليمية مخصصة توفر بيئة مركزية وآمنة للتعاون والمشاركة الأكاديمية وتبادل المعرفة.',
        fr: 'Plateforme collaborative dédiée offrant un espace centralisé et sécurisé pour l\'échange et le partage de cours.',
        en: 'Developed a dedicated educational social platform providing a centralized, secure environment for collaboration and knowledge sharing.',
      },
      liveUrl: 'https://twassel-u0y8xq0l5-omaraouf01-2734s-projects.vercel.app/',
      sourceUrl: ''
    }
  }
];

export function getLocalizedProjects(lang = 'ar') {
  return projects.map((p) => ({
    ...p,
    title: typeof p.title === 'object' ? p.title[lang] || p.title.ar : p.title,
    caseStudy: {
      ...p.caseStudy,
      problem: typeof p.caseStudy.problem === 'object' ? p.caseStudy.problem[lang] || p.caseStudy.problem.ar : p.caseStudy.problem,
      solution: typeof p.caseStudy.solution === 'object' ? p.caseStudy.solution[lang] || p.caseStudy.solution.ar : p.caseStudy.solution,
    },
  }));
}

