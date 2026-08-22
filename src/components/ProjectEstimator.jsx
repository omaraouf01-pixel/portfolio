import { useState, useMemo } from 'react';
import { Calculator, Sparkles, Check, ArrowLeft, MessageCircle, Clock, Cpu, Layers, ShieldCheck, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ProjectEstimator() {
  const { language, t } = useLanguage();
  const [projectType, setProjectType] = useState('pos');
  const [selectedFeatures, setSelectedFeatures] = useState(['offline', 'analytics']);
  const [projectScale, setProjectScale] = useState('standard');

  const projectTypes = [
    { 
      id: 'pos', 
      label: language === 'en' ? 'Cloud POS & Stock System' : language === 'fr' ? 'Système de Caisse & Stock (POS)' : 'نظام نقاط بيع ومخزون (POS)', 
      baseDays: 14, 
      icon: Zap 
    },
    { 
      id: 'erp', 
      label: language === 'en' ? 'Enterprise ERP Platform' : language === 'fr' ? 'Système de Gestion ERP' : 'نظام تخطيط وإدارة مؤسسات (ERP)', 
      baseDays: 28, 
      icon: Layers 
    },
    { 
      id: 'mobile', 
      label: language === 'en' ? 'Mobile App (iOS & Android)' : language === 'fr' ? 'Application Mobile (iOS/Android)' : 'تطبيق هاتف (iOS & Android)', 
      baseDays: 21, 
      icon: Cpu 
    },
    { 
      id: 'web', 
      label: language === 'en' ? 'Custom Web Platform / SaaS' : language === 'fr' ? 'Plateforme Web / SaaS' : 'منصة ويب مخصصة / SaaS', 
      baseDays: 18, 
      icon: Sparkles 
    },
  ];

  const availableFeatures = [
    { 
      id: 'offline', 
      label: language === 'en' ? 'Offline-First Operations' : language === 'fr' ? 'Fonctionnement Hors-Ligne (Offline)' : 'العمل بدون إنترنت (Offline-First)', 
      days: 4, 
      desc: language === 'en' ? 'Auto-sync when internet returns' : language === 'fr' ? 'Synchro auto dès le retour de connexion' : 'مزامنة تلقائية عند عودة الاتصال' 
    },
    { 
      id: 'multibranch', 
      label: language === 'en' ? 'Multi-Branch & Warehouses' : language === 'fr' ? 'Multi-Boutiques & Dépôts' : 'إدارة فروع ومستودعات متعددة', 
      days: 5, 
      desc: language === 'en' ? 'Centralized control dashboard' : language === 'fr' ? 'Tableau de bord centralisé' : 'لوحة تحكم مركزية لجميع الفروع' 
    },
    { 
      id: 'analytics', 
      label: language === 'en' ? 'Realtime Analytics & BI' : language === 'fr' ? 'Analyses & Graphiques en direct' : 'لوحة تحليلات ورسوم بيانية فورية', 
      days: 3, 
      desc: language === 'en' ? 'Daily profit & revenue reports' : language === 'fr' ? 'Rapports des ventes et bénéfices' : 'تقارير الأرباح والعمليات اليومية' 
    },
    { 
      id: 'payment', 
      label: language === 'en' ? 'Payment Gateways & Invoicing' : language === 'fr' ? 'Paiement en ligne & Facturation' : 'ربط بوابات دفع إلكتروني وفواتير', 
      days: 4, 
      desc: language === 'en' ? 'Secure digital card payments' : language === 'fr' ? 'Paiement sécurisé par carte' : 'دعم الدفع الآمن والبطاقات' 
    },
    { 
      id: 'roles', 
      label: language === 'en' ? 'User Roles & Permissions' : language === 'fr' ? 'Rôles & Permissions Employés' : 'نظام أذونات وصلاحيات موظفين', 
      days: 3, 
      desc: language === 'en' ? 'Granular access control per user' : language === 'fr' ? 'Gestion fine des accès' : 'تحديد صلاحيات دقيقة لكل مستخدم' 
    },
    { 
      id: 'backup', 
      label: language === 'en' ? 'Cloud Backups & Encryption' : language === 'fr' ? 'Sauvegardes Cloud & Sécurité' : 'نسخ احتياطي سحابي وتشفير عالي', 
      days: 2, 
      desc: language === 'en' ? 'AES-256 data protection' : language === 'fr' ? 'Chiffrement de données AES-256' : 'تشفير AES-256 وحماية البيانات' 
    },
  ];

  const scaleOptions = [
    { 
      id: 'mvp', 
      label: language === 'en' ? 'Fast MVP Launch' : language === 'fr' ? 'Lancement Rapide (MVP)' : 'إطلاق سريع ونموذج أولي (MVP)', 
      multiplier: 0.8 
    },
    { 
      id: 'standard', 
      label: language === 'en' ? 'Standard Production System' : language === 'fr' ? 'Système Standard Complet' : 'نظام قياسي متكامل للعمليات', 
      multiplier: 1.0 
    },
    { 
      id: 'enterprise', 
      label: language === 'en' ? 'Large Enterprise Scale' : language === 'fr' ? 'Échelle Entreprise & Grands Comptes' : 'بنية مؤسسية ضخمة قابلة للتوسع', 
      multiplier: 1.4 
    },
  ];

  const toggleFeature = (featureId) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureId) ? prev.filter((id) => id !== featureId) : [...prev, featureId]
    );
  };

  const calculation = useMemo(() => {
    const typeObj = projectTypes.find((t) => t.id === projectType);
    let totalDays = typeObj ? typeObj.baseDays : 14;

    selectedFeatures.forEach((fId) => {
      const feat = availableFeatures.find((f) => f.id === fId);
      if (feat) totalDays += feat.days;
    });

    const scaleObj = scaleOptions.find((s) => s.id === projectScale);
    if (scaleObj) totalDays = Math.round(totalDays * scaleObj.multiplier);

    const weeks = Math.max(1, Math.round(totalDays / 7));
    const weeksLabel = language === 'en' ? `~ ${weeks} - ${weeks + 1} Weeks` : language === 'fr' ? `~ ${weeks} à ${weeks + 1} Semaines` : `${weeks} - ${weeks + 1} أسابيع تقريباً`;

    let recommendedStack = 'React 19 + Node.js + PostgreSQL';
    if (projectType === 'pos') recommendedStack = 'React 19 + SQLite Offline Sync + Tailwind';
    if (projectType === 'erp') recommendedStack = 'Next.js 15 + PostgreSQL + Redis + Docker';
    if (projectType === 'mobile') recommendedStack = 'React Native / Flutter + Cloud APIs';
    if (projectType === 'web') recommendedStack = 'Next.js + Tailwind CSS + Firebase Auth';

    return {
      days: totalDays,
      weeks: weeksLabel,
      stack: recommendedStack,
      typeLabel: typeObj?.label || '',
    };
  }, [projectType, selectedFeatures, projectScale, language]);

  const generateWhatsAppUrl = () => {
    const selectedFeatLabels = availableFeatures
      .filter((f) => selectedFeatures.includes(f.id))
      .map((f) => `• ${f.label}`)
      .join('\n');

    const message = `${t.estimator.whatsappGreeting || 'Hello CodeSolve 👋'}

${t.estimator.whatsappType || '📌 Type:'} ${calculation.typeLabel}
${t.estimator.whatsappFeatures || '⚙️ Features:'}
${selectedFeatLabels || t.estimator.standardFeatures || '• Standard Features'}
${t.estimator.whatsappTimeline || '⏱️ Timeline:'} ${calculation.weeks}
${t.estimator.whatsappArch || '🛠️ Architecture:'} ${calculation.stack}

${t.estimator.whatsappCta || 'Please provide consultation & custom quotation. Thank you!'}`;

    return `https://wa.me/213668202110?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="estimator" className="relative py-24 bg-bg-primary overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-accent-start/10 rounded-full blur-[60px] pointer-events-none" style={{ transform: 'translateZ(0)' }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-start/10 text-accent-start border border-accent-start/20 text-xs font-bold mb-4">
          <Calculator className="w-3.5 h-3.5" />
          <span>{t.estimator.badge}</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-text-primary mb-4">
          {t.estimator.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-start via-accent-mid to-accent-pink">{t.estimator.titleHighlight}</span> {t.estimator.titleEnd}
        </h2>

        <p className="max-w-2xl text-text-secondary text-base md:text-lg mb-16">
          {t.estimator.desc}
        </p>

        {/* Interactive Estimator Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-6xl text-start">
          
          {/* Controls: Left 7 Cols */}
          <div className="lg:col-span-7 space-y-8 p-6 sm:p-8 rounded-3xl glass-card border border-border-subtle">
            
            {/* Step 1: Project Type */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-accent-start mb-3">
                {t.estimator.step1}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setProjectType(type.id)}
                    className={`p-4 rounded-2xl border text-start flex items-center gap-3 transition-all duration-300 cursor-pointer ${
                      projectType === type.id
                        ? 'bg-accent-start/15 border-accent-start text-text-primary shadow-lg shadow-accent-start/10'
                        : 'bg-bg-secondary/60 border-border-subtle text-text-secondary hover:border-border-subtle/80 hover:text-text-primary'
                    }`}
                  >
                    <div className={`p-2.5 rounded-xl ${projectType === type.id ? 'bg-accent-start text-white' : 'bg-bg-tertiary text-text-muted'}`}>
                      <type.icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold">{type.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Features Checklist */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-accent-start mb-3">
                {t.estimator.step2}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {availableFeatures.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <div
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className={`p-3.5 rounded-2xl border cursor-pointer select-none transition-all duration-300 flex items-start gap-3 ${
                        isChecked
                          ? 'bg-accent-mid/10 border-accent-mid text-text-primary shadow-md shadow-accent-mid/10'
                          : 'bg-bg-secondary/40 border-border-subtle text-text-secondary hover:border-border-subtle/80'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-lg border mt-0.5 flex items-center justify-center transition-colors shrink-0 ${
                        isChecked ? 'bg-accent-mid border-accent-mid text-white' : 'border-border-subtle bg-bg-secondary'
                      }`}>
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-text-primary">{feat.label}</div>
                        <div className="text-[11px] text-text-muted mt-0.5">{feat.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Scale */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-accent-start mb-3">
                {t.estimator.step3}
              </label>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {scaleOptions.map((scale) => (
                  <button
                    key={scale.id}
                    onClick={() => setProjectScale(scale.id)}
                    className={`p-3 rounded-xl border text-center text-xs font-bold transition-all duration-300 cursor-pointer ${
                      projectScale === scale.id
                        ? 'bg-gradient-to-r from-accent-start to-accent-end text-white border-transparent shadow-md'
                        : 'bg-bg-secondary/60 border-border-subtle text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {scale.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Summary Box: Right 5 Cols */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl glass-strong border border-accent-start/30 shadow-2xl shadow-accent-start/10 relative overflow-hidden">
            
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-border-subtle">
                <div className="flex items-center gap-2 text-text-primary font-black text-lg">
                  <Sparkles className="w-5 h-5 text-accent-start" />
                  <span>{t.estimator.summaryTitle}</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-success/10 text-success text-xs font-bold">
                  {t.estimator.instantBadge}
                </span>
              </div>

              {/* Delivery Timeline Card */}
              <div className="p-4 rounded-2xl bg-bg-secondary/80 border border-border-subtle flex items-start gap-3.5">
                <div className="p-3 rounded-xl bg-accent-start/10 text-accent-start shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-text-muted font-medium">{t.estimator.timeLabel}</span>
                  <div className="text-xl font-black text-text-primary mt-0.5">{calculation.weeks}</div>
                  <span className="text-[11px] text-success font-semibold">{t.estimator.timeWeekly}</span>
                </div>
              </div>

              {/* Blueprint Recommendation */}
              <div className="p-4 rounded-2xl bg-bg-secondary/80 border border-border-subtle flex items-start gap-3.5">
                <div className="p-3 rounded-xl bg-accent-mid/10 text-accent-mid shrink-0">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-text-muted font-medium">{t.estimator.stackLabel}</span>
                  <div className="text-sm font-mono font-bold text-text-primary mt-1">{calculation.stack}</div>
                  <span className="text-[11px] text-text-muted">{t.estimator.stackSub}</span>
                </div>
              </div>

              {/* Guarantees list */}
              <div className="space-y-2 pt-2 text-xs text-text-secondary font-medium">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-success" />
                  <span>{t.estimator.guarantee1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-success" />
                  <span>{t.estimator.guarantee2}</span>
                </div>
              </div>
            </div>

            {/* Instant WhatsApp Action */}
            <div className="mt-8 pt-6 border-t border-border-subtle">
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl font-black text-sm text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-xl shadow-emerald-500/25 hover:shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{t.estimator.whatsappBtn}</span>
                <ArrowLeft className={`w-4 h-4 transition-transform duration-300 ${language === 'ar' ? 'group-hover:-translate-x-1' : 'rotate-180 group-hover:translate-x-1'}`} />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
