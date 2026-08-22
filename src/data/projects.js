export const categories = [
  { id: 'all', label: { ar: 'الكل', fr: 'Tous', en: 'All' } },
  { id: 'web', label: { ar: 'تطبيقات الويب', fr: 'Applications Web', en: 'Web Apps' } },
  { id: 'mobile', label: { ar: 'تطبيقات الهاتف', fr: 'Applications Mobiles', en: 'Mobile Apps' } },
  { id: 'cloud', label: { ar: 'الأنظمة السحابية', fr: 'Systèmes Cloud', en: 'Cloud Systems' } },
];

export const projects = [
  {
    id: 'cloud-pos',
    title: {
      ar: 'نظام نقاط بيع سحابي (Cloud POS)',
      fr: 'Système de Caisse Cloud (Cloud POS)',
      en: 'Cloud POS & Retail System',
    },
    category: 'cloud',
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fm=webp&fit=crop&q=80&w=800',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    caseStudy: {
      problem: {
        ar: 'معاناة سلاسل المتاجر من تشتت البيانات بين الفروع وعدم وجود تقارير فورية للمبيعات والمخزون.',
        fr: 'Difficulté pour les chaînes de magasins à centraliser leurs données et obtenir des rapports de vente en temps réel.',
        en: 'Multi-branch retail chains struggling with fragmented data, stock discrepancies, and delayed sales reporting.',
      },
      solution: {
        ar: 'بناء نظام سحابي متكامل يربط جميع الفروع بلوحة تحكم مركزية، مع إمكانية العمل دون اتصال بالإنترنت (Offline-first) والمزامنة الفورية عند الاتصال.',
        fr: 'Conception d\'un système cloud unifié avec fonctionnement hors-ligne (Offline-First) et synchronisation instantanée au retour de connexion.',
        en: 'Engineered an integrated offline-first cloud POS architecture linking all branches to a central dashboard with instant auto-sync.',
      },
      liveUrl: 'https://pos-system-demo.codesolve.com',
      sourceUrl: ''
    }
  },
  {
    id: 'b2b-dashboard',
    title: {
      ar: 'لوحة تحكم إدارية (B2B Analytics)',
      fr: 'Tableau de Bord B2B Analytics',
      en: 'Enterprise B2B Analytics Hub',
    },
    category: 'web',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fm=webp&fit=crop&q=80&w=800',
    tags: ['Next.js', 'Tailwind', 'Firebase'],
    caseStudy: {
      problem: {
        ar: 'صعوبة اتخاذ القرارات الإدارية بسبب تفرق البيانات التشغيلية والمالية في عدة أنظمة غير متصلة.',
        fr: 'Prise de décision ralentie en raison de la dispersion des données opérationnelles et financières sur des outils disparates.',
        en: 'Executive decision-making hindered by dispersed operational and financial data across disconnected legacy tools.',
      },
      solution: {
        ar: 'تصميم لوحة تحكم ذكية تجمع وتحلل البيانات في وقت فعلي، وتقدم رسوماً بيانية وتقارير مخصصة للإدارة العليا.',
        fr: 'Développement d\'un tableau de bord intelligent analysant les métriques clés en temps réel avec graphiques interactifs.',
        en: 'Designed an intelligent real-time BI analytics dashboard aggregating cross-departmental KPIs with customized executive reports.',
      },
      liveUrl: 'https://b2b-analytics-demo.codesolve.com',
      sourceUrl: ''
    }
  },
  {
    id: 'erp-cloud',
    title: {
      ar: 'نظام تخطيط الموارد (ERP System)',
      fr: 'Système ERP de Gestion d\'Entreprise',
      en: 'Enterprise Cloud ERP Platform',
    },
    category: 'cloud',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fm=webp&fit=crop&q=80&w=800',
    tags: ['Vue.js', 'Python', 'AWS'],
    caseStudy: {
      problem: {
        ar: 'بطء العمليات الورقية وضعف التنسيق بين إدارات الموارد البشرية، المبيعات، والمستودعات.',
        fr: 'Processus papier lents et manque de coordination entre les départements RH, ventes et entrepôts.',
        en: 'Slow manual paperwork and communication friction between HR, supply chain, warehouse, and sales departments.',
      },
      solution: {
        ar: 'تطوير نظام تخطيط موارد المؤسسات (ERP) لتأتمتة سير العمل وتقليل الأخطاء البشرية بنسبة 80%.',
        fr: 'Création d\'un ERP complet pour automatiser les flux de travail inter-services et réduire les erreurs humaines de 80%.',
        en: 'Built an end-to-end ERP ecosystem automating cross-departmental workflows, decreasing human data entry errors by 80%.',
      },
      liveUrl: '',
      sourceUrl: ''
    }
  },
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
        ar: 'تشتت المصادر التعليمية وصعوبة التواصل الأكاديمي الفعال.',
        fr: 'Dispersion des ressources éducatives et difficultés d\'échange académique fluide entre étudiants et enseignants.',
        en: 'Scattered academic resources and inefficient communication channels between educational institutions and students.',
      },
      solution: {
        ar: 'منصة اجتماعية تعليمية مخصصة توفر بيئة مركزية وآمنة للتعاون والمشاركة.',
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

