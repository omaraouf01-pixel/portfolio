import { ShoppingBag, Building2, ArrowLeft, CheckCircle2, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function AudienceSplit() {
  const { language, t } = useLanguage();

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
    <section className="w-full py-20 bg-bg-primary/50 relative">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto flex flex-col items-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-mid/10 text-accent-mid border border-accent-mid/20 text-xs font-bold mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.audience.badge}</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-text-primary text-center mb-4">
          {t.audience.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-start to-accent-end">{t.audience.titleHighlight}</span>
        </h2>

        <p className="text-text-secondary text-base md:text-lg text-center max-w-2xl mb-14">
          {t.audience.desc}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          
          {/* Card 1: Retail & Business Owners */}
          <div 
            className="group relative p-8 sm:p-10 rounded-3xl glass-card flex flex-col items-start text-start border border-border-subtle hover:border-accent-start/60 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-accent-start/15"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-start/20 to-accent-cyan/20 border border-accent-start/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <ShoppingBag className="w-7 h-7 text-accent-start" />
            </div>

            <h3 className="text-2xl font-black text-text-primary mb-3">
              {t.audience.card1Title}
            </h3>

            <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-6">
              {t.audience.card1Desc}
            </p>

            <ul className="space-y-2.5 mb-8 w-full text-xs sm:text-sm text-text-secondary font-medium">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                <span>{t.audience.card1F1}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                <span>{t.audience.card1F2}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                <span>{t.audience.card1F3}</span>
              </li>
            </ul>

            <button
              onClick={() => handleScrollAndFilter('desktop')}
              className="mt-auto group/btn inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-start/10 hover:bg-accent-start text-accent-start hover:text-white font-bold text-sm transition-all duration-300 cursor-pointer"
            >
              <span>{t.audience.card1Btn}</span>
              <ArrowLeft className={`w-4 h-4 transition-transform duration-300 ${language === 'ar' ? 'group-hover/btn:-translate-x-1' : 'rotate-180 group-hover/btn:translate-x-1'}`} />
            </button>
          </div>

          {/* Card 2: Startups & Enterprises */}
          <div 
            className="group relative p-8 sm:p-10 rounded-3xl glass-card flex flex-col items-start text-start border border-border-subtle hover:border-accent-end/60 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-accent-end/15"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-end/20 to-accent-pink/20 border border-accent-end/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Building2 className="w-7 h-7 text-accent-end" />
            </div>

            <h3 className="text-2xl font-black text-text-primary mb-3">
              {t.audience.card2Title}
            </h3>

            <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-6">
              {t.audience.card2Desc}
            </p>

            <ul className="space-y-2.5 mb-8 w-full text-xs sm:text-sm text-text-secondary font-medium">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-accent-end shrink-0" />
                <span>{t.audience.card2F1}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-accent-end shrink-0" />
                <span>{t.audience.card2F2}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-accent-end shrink-0" />
                <span>{t.audience.card2F3}</span>
              </li>
            </ul>

            <button
              onClick={() => handleScrollAndFilter('web')}
              className="mt-auto group/btn inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-end/10 hover:bg-accent-end text-accent-end hover:text-white font-bold text-sm transition-all duration-300 cursor-pointer"
            >
              <span>{t.audience.card2Btn}</span>
              <ArrowLeft className={`w-4 h-4 transition-transform duration-300 ${language === 'ar' ? 'group-hover/btn:-translate-x-1' : 'rotate-180 group-hover/btn:translate-x-1'}`} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
