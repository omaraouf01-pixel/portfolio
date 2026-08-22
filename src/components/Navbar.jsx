import { useState, useEffect } from 'react';
import { Menu, X, Code2, Sun, Moon, Sparkles, ArrowLeft, Volume2, VolumeX, Globe, FileText } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { useLanguage } from '../context/LanguageContext';
import { toggleSound, playClickSound } from '../utils/soundEffects';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [langDropdown, setLangDropdown] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { href: '#hero', label: t.nav.hero },
    { href: '#pos-simulator', label: t.nav.pos },
    { href: '#estimator', label: t.nav.estimator },
    { href: '#portfolio', label: t.nav.portfolio },
    { href: '#services', label: t.nav.services },
    { href: '#benchmark', label: t.nav.benchmark },
    { href: '#faq', label: t.nav.faq },
  ];

  const languages = [
    { code: 'ar', label: 'العربية', flag: '🇩🇿' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
  ];

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const newState = !soundOn;
    setSoundOn(newState);
    toggleSound(newState);
  };

  const handleSelectLanguage = (code) => {
    playClickSound();
    setLanguage(code);
    setLangDropdown(false);
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 right-0 left-0 w-full flex flex-col items-center z-50 transition-all duration-500 ${
        scrolled ? 'py-3.5' : 'py-6'
      }`}
    >
      {/* Floating Container */}
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-500">
        <div 
          className={`flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-500 ${
            scrolled
              ? 'glass-strong shadow-xl shadow-black/10 dark:shadow-black/40 border border-border-subtle backdrop-blur-2xl'
              : 'bg-transparent'
          }`}
        >
          {/* Logo & Status Badge */}
          <a href="#hero" className="flex items-center gap-3.5 group" id="logo-link">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-accent-start via-accent-mid to-accent-end flex items-center justify-center shadow-lg shadow-accent-start/30 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
              <Code2 className="w-5 h-5 text-white" />
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-success border-2 border-bg-primary animate-pulse" />
            </div>
            <div className="flex flex-col text-start">
              <span className="text-xl font-black tracking-tight text-text-primary group-hover:text-accent-start transition-colors">
                CodeSolve
              </span>
              <span className="text-[10px] font-medium text-text-muted hidden sm:inline-block leading-tight">
                Software Engineering
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-1 p-1 rounded-xl bg-bg-secondary/60 dark:bg-bg-secondary/40 border border-border-subtle/50 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-3 py-1.5 text-xs font-bold text-text-secondary hover:text-text-primary rounded-lg hover:bg-text-primary/5 transition-all duration-300 group flex items-center"
              >
                {link.label}
                <span className="absolute bottom-1 right-1/2 translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-accent-start to-accent-end rounded-full group-hover:w-1/2 transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-2">
            
            {/* CV / Resume Button */}
            <button
              onClick={() => {
                playClickSound();
                if (onOpenResume) onOpenResume();
              }}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-text-secondary hover:text-accent-start border border-border-subtle bg-bg-secondary/60 hover:border-accent-start/30 transition-all cursor-pointer"
              title={t.nav.resume}
            >
              <FileText className="w-3.5 h-3.5 text-accent-mid" />
              <span>{t.nav.resume}</span>
            </button>

            {/* Language Switcher Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangDropdown(!langDropdown)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-text-secondary hover:text-text-primary border border-border-subtle bg-bg-secondary/60 hover:border-accent-start/30 transition-all cursor-pointer"
                title="تغيير اللغة / Change Language"
              >
                <Globe className="w-3.5 h-3.5 text-accent-start" />
                <span className="uppercase font-mono">{language}</span>
                <span>{languages.find((l) => l.code === language)?.flag}</span>
              </button>

              {langDropdown && (
                <div className="absolute top-full mt-2 right-0 sm:left-0 w-36 rounded-2xl glass-strong border border-border-subtle shadow-2xl p-1.5 z-50 animate-slide-up flex flex-col gap-1">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => handleSelectLanguage(l.code)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        language === l.code
                          ? 'bg-accent-start text-white shadow-sm'
                          : 'text-text-secondary hover:text-text-primary hover:bg-bg-tertiary'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{l.flag}</span>
                        <span>{l.label}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Sound FX Toggle */}
            <button
              onClick={handleSoundToggle}
              className={`p-2.5 rounded-xl transition-all border border-border-subtle flex items-center justify-center cursor-pointer ${
                soundOn
                  ? 'text-emerald-500 bg-emerald-500/10 border-emerald-500/30'
                  : 'text-text-muted bg-bg-secondary/60'
              }`}
              aria-label="Toggle Sound"
              title={soundOn ? 'Mute Sound' : 'Enable Sound'}
            >
              {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={() => {
                playClickSound();
                toggleTheme();
              }}
              className="p-2.5 rounded-xl text-text-secondary hover:text-accent-start hover:bg-accent-start/10 transition-all border border-border-subtle bg-bg-secondary/60 hover:border-accent-start/30 flex items-center justify-center cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>

            {/* CTA Button */}
            <a
              href="#contact"
              id="cta-navbar"
              className="group relative inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-accent-start via-accent-mid to-accent-end rounded-xl shadow-md shadow-accent-start/25 hover:shadow-xl hover:shadow-accent-start/40 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
            >
              <Sparkles className="w-4 h-4 text-white/80 animate-pulse" />
              <span>{t.nav.cta}</span>
              <ArrowLeft className={`w-3.5 h-3.5 transition-transform duration-300 ${language === 'ar' ? 'group-hover:-translate-x-1' : 'rotate-180 group-hover:translate-x-1'}`} />
            </a>
          </div>

          {/* Mobile Menu & Quick Lang */}
          <div className="flex items-center gap-1.5 md:hidden">
            {/* Mobile Language Cycle */}
            <button
              onClick={() => {
                const nextLang = language === 'ar' ? 'fr' : language === 'fr' ? 'en' : 'ar';
                handleSelectLanguage(nextLang);
              }}
              className="p-2 rounded-xl border border-border-subtle bg-bg-secondary/60 text-xs font-bold flex items-center gap-1"
            >
              <span>{languages.find((l) => l.code === language)?.flag}</span>
              <span className="uppercase font-mono">{language}</span>
            </button>

            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl text-text-secondary hover:text-text-primary border border-border-subtle bg-bg-secondary/60"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>

            <button
              className="p-2.5 rounded-xl border border-border-subtle bg-bg-secondary/60 text-text-secondary hover:text-text-primary"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-md z-40 transition-opacity duration-300 lg:hidden ${
          mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`} 
        onClick={() => setMobileOpen(false)} 
      />
      
      <div
        className={`fixed top-0 right-0 h-screen w-72 sm:w-80 bg-bg-primary/95 backdrop-blur-2xl border-l border-border-subtle shadow-2xl z-50 transform transition-transform duration-400 ease-out lg:hidden flex flex-col ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 flex flex-col h-full overflow-y-auto">
          <div className="flex items-center justify-between pb-6 border-b border-border-subtle">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-accent-start to-accent-end flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-black text-text-primary">CodeSolve</span>
            </div>
            <button onClick={() => setMobileOpen(false)} className="p-2 text-text-secondary">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-6 flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-3 text-base font-semibold text-text-secondary hover:text-accent-start hover:bg-accent-start/10 rounded-xl transition-all"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
          
          <div className="mt-auto flex flex-col gap-3 pt-6 border-t border-border-subtle">
            <button
              onClick={() => {
                setMobileOpen(false);
                if (onOpenResume) onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-border-subtle text-text-primary font-bold text-sm bg-bg-secondary"
            >
              <FileText className="w-4 h-4 text-accent-start" />
              <span>{t.nav.resume}</span>
            </button>

            <a
              href="#contact"
              className="w-full text-center py-3.5 text-sm font-bold text-white bg-gradient-to-r from-accent-start via-accent-mid to-accent-end rounded-xl shadow-lg"
              onClick={() => setMobileOpen(false)}
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}