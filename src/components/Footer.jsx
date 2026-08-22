import { Code2, MessageCircle, Mail, ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full border-t border-border-subtle bg-bg-secondary/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">
          
          {/* Logo and About */}
          <div className="md:col-span-2 flex flex-col items-start gap-4 text-start">
            <a href="#hero" className="flex items-center gap-3.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-accent-start to-accent-end flex items-center justify-center shadow-lg shadow-accent-start/30 transition-transform group-hover:scale-105">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-text-primary">CodeSolve</span>
                <span className="text-[11px] text-text-muted">Software Engineering & Tech Solutions</span>
              </div>
            </a>
            <p className="text-text-secondary text-sm max-w-md leading-relaxed">
              {t.footer.desc}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start text-start gap-3">
            <h4 className="font-bold text-text-primary text-sm uppercase tracking-wider mb-2">{t.footer.quickLinks}</h4>
            <a href="#hero" className="text-sm text-text-secondary hover:text-accent-start transition-colors">{t.nav.hero}</a>
            <a href="#services" className="text-sm text-text-secondary hover:text-accent-start transition-colors">{t.nav.services}</a>
            <a href="#portfolio" className="text-sm text-text-secondary hover:text-accent-start transition-colors">{t.nav.portfolio}</a>
            <a href="#estimator" className="text-sm text-text-secondary hover:text-accent-start transition-colors">{t.nav.estimator}</a>
            <a href="#faq" className="text-sm text-text-secondary hover:text-accent-start transition-colors">{t.nav.faq}</a>
          </div>

          {/* Contact Direct */}
          <div className="flex flex-col items-start text-start gap-3">
            <h4 className="font-bold text-text-primary text-sm uppercase tracking-wider mb-2">{t.footer.contactDirect}</h4>
            <a href="mailto:codesolve01@gmail.com" className="text-sm text-text-secondary hover:text-accent-start transition-colors flex items-center gap-2">
              <Mail className="w-4 h-4 text-accent-start" />
              <span>codesolve01@gmail.com</span>
            </a>
            <a href="https://wa.me/213668202110" target="_blank" rel="noopener noreferrer" className="text-sm text-emerald-500 hover:underline transition-colors flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              <span dir="ltr">+213 668 20 21 10</span>
            </a>
            <div className="text-xs text-text-muted mt-2">
              {t.footer.location}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-text-secondary font-medium">
            © {currentYear} {t.footer.copyright}
          </p>
          
          <div className="flex items-center gap-3">
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl glass hover:bg-accent-start hover:text-white text-text-secondary transition-all flex items-center gap-2 text-xs font-bold cursor-pointer"
              aria-label="Back to top"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
