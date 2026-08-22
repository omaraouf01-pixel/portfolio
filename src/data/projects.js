export const categories = [
  { id: 'all', label: { ar: 'الكل', fr: 'Tous', en: 'All' } },
  { id: 'web', label: { ar: 'تطبيقات الويب', fr: 'Applications Web', en: 'Web Apps' } },
  { id: 'desktop', label: { ar: 'تطبيقات سطح المكتب', fr: 'Applications Desktop', en: 'Desktop Apps' } },
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
  },
  {
    id: 'debt-manager',
    title: {
      ar: 'نظام إدارة الديون والحسابات التجارية (Debt Manager)',
      fr: 'Système de Gestion des Dettes & Comptes (Debt Manager)',
      en: 'Commercial Debt & Accounting Manager (CodeSolve POS)',
    },
    category: 'desktop',
    thumbnail: '/images/debt-manager.png',
    tags: ['Electron.js', 'Node.js', 'SQLite3', 'Tailwind CSS', 'JavaScript (ES6+)', 'Offline-First'],
    caseStudy: {
      problem: {
        ar: 'معاناة أصحاب المحلات والأنشطة التجارية من تشتت وصعوبة تتبع ديون الزبائن ومستحقات الموردين بالدفاتر الورقية المعرضة للتلف والضياع، مع استغراق وقت طويل في حساب الإجماليات اليومية وغياب النسخ الاحتياطي الآمن للمعاملات المالية.',
        fr: 'Difficulté majeure pour les commerçants à suivre les créances clients et dettes fournisseurs sur des registres papier sujets à perte et détérioration, avec lenteur de calcul des totaux quotidiens et absence de sauvegarde sécurisée.',
        en: 'Commercial businesses struggle to track customer debts and supplier receivables using fragile paper ledgers, causing time-consuming balance calculations and lacking secure backup mechanisms.',
      },
      solution: {
        ar: 'تطبيق سطح مكتب فائق السرعة يعمل محلياً (Offline) بنسبة 100% دون إنترنت. يتيح إدارة ومتابعة أرصدة الزبائن والموردين لحظياً، طباعة حرارية فورية للوصولات (80mm) وكشوفات حساب مفصلة (A4)، يومية مدفوعات الموردين، لوحة إحصائيات مالية، وحماية مشددة برمز PIN مع نسخ احتياطي واسترجاع فوري للبيانات.',
        fr: 'Application desktop robuste et ultra-rapide fonctionnant à 100% hors ligne (Offline). Comprend la gestion en temps réel des clients et fournisseurs, double impression instantanée (tickets thermiques 80mm et relevés A4), journalier des paiements, tableau de bord statistique, et sécurité par code PIN avec sauvegarde/restauration en un clic.',
        en: 'High-performance Offline-First desktop application built with Electron & SQLite. Features real-time customer and supplier balance tracking, instant dual printing (80mm thermal receipts & A4 detailed statements), daily supplier payment journal, financial analytics dashboard, PIN protection, and 1-click database backup & restore.',
      },
      liveUrl: '',
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
