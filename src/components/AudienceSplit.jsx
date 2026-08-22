import { useState } from 'react';
import { ShoppingBag, Building2, ArrowLeft, CheckCircle2, Sparkles, Database, WifiOff, Printer, BarChart3, Users2, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function AudienceSplit() {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState('retail');

  const handleScrollAndFilter = (filterId) => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const filterBtn = document.getElementById(`filter-${filterId}`);
        if (filterBtn) {
          filterBtn.click();
        }
      }, 500);
    }
  };

  return (
    <section id="sectors" className="w-full py-28 md:py-36 bg-bg-secondary/30 relative scroll-mt-20">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-start/10 rounded-full blur-[90px] pointer-events-none" style={{ transform: 'translateZ(0)' }} />

      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto flex flex-col items-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-mid/10 text-accent-mid border border-accent-mid/20 text-xs font-bold mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.audience.badge}</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-black text-text-primary text-center mb-4">
          {t.audience.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-start via-accent-mid to-accent-end">{t.audience.titleHighlight}</span>
        </h2>

        {/* Subtitle */}
        <p className="text-text-secondary text-base md:text-lg text-center max-w-2xl mb-12 font-normal leading-relaxed">
          {t.audience.desc}
        </p>

        {/* Horizontal Interactive Sector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 w-full max-w-2xl p-1.5 rounded-2xl bg-bg-secondary/80 border border-border-subtle backdrop-blur-md">
          <button
            onClick={() => setActiveTab('retail')}
            className={`flex-1 min-w-[200px] flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-sm font-black transition-all duration-300 cursor-pointer ${
              activeTab === 'retail'
                ? 'bg-gradient-to-r from-accent-start to-accent-mid text-white shadow-lg shadow-accent-start/25 scale-[1.02]'
                : 'text-text-secondary hover:text-text-primary hover:bg-bg-tertiary/50'
            }`}
          >
            <ShoppingBag className="w-5 h-5 shrink-0" />
            <span>{t.audience.card1Title}</span>
          </button>

          <button
            onClick={() => setActiveTab('enterprise')}
            className={`flex-1 min-w-[200px] flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-sm font-black transition-all duration-300 cursor-pointer ${
              activeTab === 'enterprise'
                ? 'bg-gradient-to-r from-accent-mid to-accent-end text-white shadow-lg shadow-accent-end/25 scale-[1.02]'
                : 'text-text-secondary hover:text-text-primary hover:bg-bg-tertiary/50'
            }`}
          >
            <Building2 className="w-5 h-5 shrink-0" />
            <span>{t.audience.card2Title}</span>
          </button>
        </div>

        {/* Tab Content Display */}
        <div className="w-full max-w-5xl">
          {activeTab === 'retail' ? (
            <div className="animate-fade-in p-8 sm:p-12 lg:p-14 rounded-3xl glass-card border border-border-subtle bg-bg-secondary/95 shadow-2xl shadow-black/10 flex flex-col lg:flex-row items-center gap-10 lg:gap-14 text-start">
              
              {/* Left Details */}
              <div className="w-full lg:w-3/5 flex flex-col items-start">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-accent-start/15 text-accent-start font-bold text-xs mb-5">
                  <ShoppingBag className="w-4 h-4" />
                  <span>{language === 'en' ? 'Retail & POS Solutions' : language === 'fr' ? 'Solutions Caisse & Commerces' : 'حلول المتاجر ونقاط البيع'}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-text-primary mb-4 leading-tight">
                  {t.audience.card1Title}
                </h3>

                <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-8 font-normal">
                  {t.audience.card1Desc}
                </p>

                <ul className="space-y-3.5 mb-10 w-full text-xs sm:text-sm text-text-secondary font-medium">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                    <span className="text-text-primary font-semibold">{t.audience.card1F1}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                    <span className="text-text-primary font-semibold">{t.audience.card1F2}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                    <span className="text-text-primary font-semibold">{t.audience.card1F3}</span>
                  </li>
                </ul>

                <button
                  onClick={() => handleScrollAndFilter('desktop')}
                  className="group/btn inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-accent-start to-accent-mid text-white font-bold text-sm transition-all duration-300 cursor-pointer shadow-lg shadow-accent-start/25 hover:shadow-xl hover:shadow-accent-start/40 hover:-translate-y-0.5"
                >
                  <span>{t.audience.card1Btn}</span>
                  <ArrowLeft className={`w-4 h-4 transition-transform duration-300 ${language === 'ar' ? 'group-hover/btn:-translate-x-1.5' : 'rotate-180 group-hover/btn:translate-x-1.5'}`} />
                </button>
              </div>

              {/* Right Visual Micro-Preview */}
              <div className="w-full lg:w-2/5 p-6 rounded-2xl bg-bg-primary/90 border border-border-subtle space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-border-subtle text-xs font-bold text-text-primary">
                  <span>{language === 'en' ? 'Store Terminal #01' : language === 'fr' ? 'Terminal Magasin #01' : 'محطة البيع #01'}</span>
                  <span className="flex items-center gap-1.5 text-emerald-400 font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    {language === 'en' ? 'Offline Ready' : language === 'fr' ? 'Prêt Hors-Ligne' : 'جاهز للعمل محلياً'}
                  </span>
                </div>

                <div className="space-y-2.5 text-xs font-medium">
                  <div className="p-3 rounded-xl bg-bg-secondary flex items-center justify-between border border-border-subtle">
                    <div className="flex items-center gap-2">
                      <WifiOff className="w-4 h-4 text-amber-500" />
                      <span className="text-text-primary">{language === 'en' ? 'Offline-First Engine' : language === 'fr' ? 'Moteur Hors-Ligne' : 'محرك العمل أوفلاين'}</span>
                    </div>
                    <span className="text-success font-bold">100%</span>
                  </div>

                  <div className="p-3 rounded-xl bg-bg-secondary flex items-center justify-between border border-border-subtle">
                    <div className="flex items-center gap-2">
                      <Printer className="w-4 h-4 text-blue-400" />
                      <span className="text-text-primary">{language === 'en' ? 'ESC/POS 80mm Print' : language === 'fr' ? 'Impression Thermique 80mm' : 'طباعة حرارية 80mm'}</span>
                    </div>
                    <span className="text-accent-start font-bold">&lt; 0.2s</span>
                  </div>

                  <div className="p-3 rounded-xl bg-bg-secondary flex items-center justify-between border border-border-subtle">
                    <div className="flex items-center gap-2">
                      <Database className="w-4 h-4 text-purple-400" />
                      <span className="text-text-primary">{language === 'en' ? 'Local DB Auto-Sync' : language === 'fr' ? 'Synchro Automatique' : 'مزامنة قواعد البيانات'}</span>
                    </div>
                    <span className="text-purple-400 font-bold">SQLite + Cloud</span>
                  </div>
                </div>
              </div>

            </div>
          ) : (
            <div className="animate-fade-in p-8 sm:p-12 lg:p-14 rounded-3xl glass-card border border-border-subtle bg-bg-secondary/95 shadow-2xl shadow-black/10 flex flex-col lg:flex-row items-center gap-10 lg:gap-14 text-start">
              
              {/* Left Details */}
              <div className="w-full lg:w-3/5 flex flex-col items-start">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-accent-end/15 text-accent-end font-bold text-xs mb-5">
                  <Building2 className="w-4 h-4" />
                  <span>{language === 'en' ? 'Enterprise & ERP Systems' : language === 'fr' ? 'Systèmes ERP & Entreprises' : 'أنظمة المؤسسات والـ ERP'}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-text-primary mb-4 leading-tight">
                  {t.audience.card2Title}
                </h3>

                <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-8 font-normal">
                  {t.audience.card2Desc}
                </p>

                <ul className="space-y-3.5 mb-10 w-full text-xs sm:text-sm text-text-secondary font-medium">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent-end shrink-0" />
                    <span className="text-text-primary font-semibold">{t.audience.card2F1}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent-end shrink-0" />
                    <span className="text-text-primary font-semibold">{t.audience.card2F2}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent-end shrink-0" />
                    <span className="text-text-primary font-semibold">{t.audience.card2F3}</span>
                  </li>
                </ul>

                <button
                  onClick={() => handleScrollAndFilter('web')}
                  className="group/btn inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-accent-mid to-accent-end text-white font-bold text-sm transition-all duration-300 cursor-pointer shadow-lg shadow-accent-end/25 hover:shadow-xl hover:shadow-accent-end/40 hover:-translate-y-0.5"
                >
                  <span>{t.audience.card2Btn}</span>
                  <ArrowLeft className={`w-4 h-4 transition-transform duration-300 ${language === 'ar' ? 'group-hover/btn:-translate-x-1.5' : 'rotate-180 group-hover/btn:translate-x-1.5'}`} />
                </button>
              </div>

              {/* Right Visual Micro-Preview */}
              <div className="w-full lg:w-2/5 p-6 rounded-2xl bg-bg-primary/90 border border-border-subtle space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-border-subtle text-xs font-bold text-text-primary">
                  <span>{language === 'en' ? 'Enterprise Core Hub' : language === 'fr' ? 'Noyau Central Entreprise' : 'المنظومة المؤسسية المركزية'}</span>
                  <span className="flex items-center gap-1.5 text-accent-start font-mono">
                    <span className="w-2 h-2 rounded-full bg-accent-start animate-ping" />
                    {language === 'en' ? 'Multi-Branch' : language === 'fr' ? 'Multi-Sites' : 'متعدد الفروع'}
                  </span>
                </div>

                <div className="space-y-2.5 text-xs font-medium">
                  <div className="p-3 rounded-xl bg-bg-secondary flex items-center justify-between border border-border-subtle">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-pink-400" />
                      <span className="text-text-primary">{language === 'en' ? 'Realtime Telemetry & BI' : language === 'fr' ? 'Analyses & BI en Direct' : 'تحليلات ذكية وفورية'}</span>
                    </div>
                    <span className="text-pink-400 font-bold">1.2k req/s</span>
                  </div>

                  <div className="p-3 rounded-xl bg-bg-secondary flex items-center justify-between border border-border-subtle">
                    <div className="flex items-center gap-2">
                      <Users2 className="w-4 h-4 text-cyan-400" />
                      <span className="text-text-primary">{language === 'en' ? 'Granular RBAC Matrix' : language === 'fr' ? 'Contrôle des Droits RBAC' : 'صلاحيات وأذونات دقيقة'}</span>
                    </div>
                    <span className="text-cyan-400 font-bold">Zero-Trust</span>
                  </div>

                  <div className="p-3 rounded-xl bg-bg-secondary flex items-center justify-between border border-border-subtle">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-emerald-400" />
                      <span className="text-text-primary">{language === 'en' ? 'Automated Cloud Failover' : language === 'fr' ? 'Redondance Cloud Auto' : 'نسخ احتياطي واسترداد'}</span>
                    </div>
                    <span className="text-emerald-400 font-bold">99.99%</span>
                  </div>
                </div>
              </div>

            </div>
          )}
        </div>

      </div>
    </section>
  );
}
