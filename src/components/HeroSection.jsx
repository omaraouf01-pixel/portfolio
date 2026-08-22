import { useState } from 'react';
import { ArrowLeft, Sparkles, Zap, Code, Eye, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState('preview');
  const { language, t } = useLanguage();

  return (
    <section id="hero" className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28 bg-grid">
      {/* Dynamic Glowing Ambient Blobs (Hardware Optimized) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-accent-start/20 via-accent-mid/15 to-accent-pink/15 rounded-full blur-[70px] pointer-events-none" style={{ transform: 'translateZ(0)' }} />
      <div className="absolute -bottom-10 right-10 w-80 h-80 bg-accent-cyan/15 rounded-full blur-[60px] pointer-events-none" style={{ transform: 'translateZ(0)' }} />
      
      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Left Column: Text & Value Proposition */}
        <div className="flex flex-col items-start text-start w-full lg:w-[48%]">
          
          {/* Live Availability Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-2.5 px-4 py-2 mb-6 rounded-full bg-accent-start/10 dark:bg-accent-start/15 border border-accent-start/30 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success"></span>
            </span>
            <span className="text-xs sm:text-sm font-bold text-accent-start">
              {t.hero.badge}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="animate-fade-in-up delay-100 text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-[1.25] text-text-primary tracking-tight">
            {t.hero.title1}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-start via-accent-mid to-accent-pink animate-gradient-flow">
              {t.hero.titleHighlight}
            </span>{' '}
            {t.hero.title2}
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-in-up delay-200 text-lg md:text-xl text-text-secondary mb-10 max-w-xl leading-relaxed font-normal">
            {t.hero.desc}
          </p>

          {/* Action CTAs */}
          <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="#contact"
              aria-label="Contact CTA"
              className="group relative w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4.5 text-base font-bold text-white bg-gradient-to-r from-accent-start via-accent-mid to-accent-end rounded-2xl shadow-xl shadow-accent-start/30 hover:shadow-2xl hover:shadow-accent-start/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <Sparkles className="w-5 h-5 text-white/90" />
              <span>{t.hero.startBtn}</span>
              <ArrowLeft className={`w-5 h-5 transition-transform duration-300 ${language === 'ar' ? 'group-hover:-translate-x-1.5' : 'rotate-180 group-hover:translate-x-1.5'}`} />
            </a>

            <a
              href="#portfolio"
              aria-label="Portfolio CTA"
              className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4.5 text-base font-bold glass hover:bg-text-primary/5 text-text-primary border border-border-subtle hover:border-accent-start/50 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>{t.hero.portfolioBtn}</span>
              <ChevronRight className={`w-4 h-4 text-accent-start group-hover:translate-x-1 transition-transform ${language === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
            </a>
          </div>
        </div>

        {/* Right Column: Prominent Interactive 3D Tech Showcase Mockup */}
        <div className="w-full lg:w-[52%] flex justify-center lg:justify-end animate-fade-in-up delay-300 relative">
          
          {/* Ambient Floating Badges */}
          <div className="hidden sm:flex absolute -top-5 -right-4 z-20 items-center gap-2.5 px-4 py-2.5 rounded-2xl glass-strong shadow-2xl border border-accent-start/30 animate-float">
            <div className="w-3 h-3 rounded-full bg-success animate-ping" />
            <div className="text-start">
              <div className="text-xs font-black text-text-primary">{t.hero.mockupUptime}</div>
              <div className="text-[11px] text-text-muted font-medium">{t.hero.mockupUptimeSub}</div>
            </div>
          </div>

          <div className="hidden sm:flex absolute -bottom-5 -left-4 z-20 items-center gap-3 px-4 py-2.5 rounded-2xl glass-strong shadow-2xl border border-accent-end/30 animate-float-slow">
            <div className="p-2 rounded-xl bg-accent-start/15 text-accent-start">
              <Zap className="w-4 h-4" />
            </div>
            <div className="text-start">
              <div className="text-xs font-black text-text-primary">{t.hero.mockupLatency}</div>
              <div className="text-[11px] text-text-muted font-medium">{t.hero.mockupLatencySub}</div>
            </div>
          </div>

          {/* The Enhanced Glass Dashboard Window */}
          <div className="relative w-full max-w-[680px] rounded-3xl overflow-hidden glass-card border border-border-subtle shadow-2xl shadow-black/25 bg-bg-secondary/95 transition-all duration-500">
            
            {/* Window Topbar */}
            <div className="px-5 py-4 bg-bg-tertiary/90 border-b border-border-subtle flex items-center justify-between">
              {/* Window Controls */}
              <div className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-red-500/80 hover:opacity-100 cursor-pointer" />
                <div className="w-3.5 h-3.5 rounded-full bg-amber-500/80 hover:opacity-100 cursor-pointer" />
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/80 hover:opacity-100 cursor-pointer" />
              </div>

              {/* URL Capsule */}
              <div className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-bg-primary/90 border border-border-subtle text-xs font-mono text-text-secondary" dir="ltr">
                <span className="text-success font-bold">https://</span>
                <span className="font-semibold text-text-primary">codesolve.tech/cloud-dashboard</span>
              </div>

              {/* View Toggle Tabs */}
              <div className="flex items-center gap-1 p-1 rounded-xl bg-bg-primary/80 border border-border-subtle">
                <button
                  onClick={() => setActiveTab('preview')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeTab === 'preview'
                      ? 'bg-accent-start text-white shadow-md'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{t.hero.previewTab}</span>
                </button>
                <button
                  onClick={() => setActiveTab('code')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeTab === 'code'
                      ? 'bg-accent-start text-white shadow-md'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  <Code className="w-3.5 h-3.5" />
                  <span>{t.hero.codeTab}</span>
                </button>
              </div>
            </div>

            {/* Window Body */}
            {activeTab === 'preview' ? (
              <div className="p-4 sm:p-7 space-y-4 sm:space-y-6 text-start">
                {/* Internal Mini Dashboard Preview with Mobile Adaptation */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4">
                  <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-bg-tertiary/90 border border-border-subtle flex flex-col justify-between">
                    <div className="text-[10px] sm:text-xs font-semibold text-text-muted mb-0.5 sm:mb-1 truncate">{t.hero.dailySales}</div>
                    <div className="text-xs sm:text-lg lg:text-xl font-black text-text-primary truncate">{t.hero.dailySalesAmount}</div>
                    <div className="text-[10px] sm:text-xs text-success font-bold mt-0.5 sm:mt-1">{t.hero.growth}</div>
                  </div>
                  <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-bg-tertiary/90 border border-border-subtle flex flex-col justify-between">
                    <div className="text-[10px] sm:text-xs font-semibold text-text-muted mb-0.5 sm:mb-1 truncate">{t.hero.activeOrders}</div>
                    <div className="text-xs sm:text-lg lg:text-xl font-black text-text-primary">342</div>
                    <div className="text-[10px] sm:text-xs text-accent-start font-bold mt-0.5 sm:mt-1 truncate">{t.hero.instantSync}</div>
                  </div>
                  <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-bg-tertiary/90 border border-border-subtle flex flex-col justify-between">
                    <div className="text-[10px] sm:text-xs font-semibold text-text-muted mb-0.5 sm:mb-1 truncate">{t.hero.cloudStock}</div>
                    <div className="text-xs sm:text-lg lg:text-xl font-black text-text-primary">1,890</div>
                    <div className="text-[10px] sm:text-xs text-emerald-500 font-bold mt-0.5 sm:mt-1">{t.hero.secure}</div>
                  </div>
                </div>

                {/* Simulated Chart/Analytics Visual */}
                <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-bg-primary/90 border border-border-subtle flex flex-col gap-2 sm:gap-3">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-text-primary">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent-start animate-ping" />
                      <span>{t.hero.throughput}</span>
                    </div>
                    <span className="text-accent-start font-mono font-bold text-xs sm:text-sm">1.2k req/sec</span>
                  </div>
                  <div className="flex items-end gap-1.5 sm:gap-2 h-16 sm:h-24 pt-2 sm:pt-4">
                    {[40, 65, 45, 80, 55, 90, 75, 95, 60, 85, 100, 78, 88, 96].map((h, i) => (
                      <div
                        key={i}
                        style={{ height: `${h}%` }}
                        className={`flex-1 rounded-t-md transition-all duration-500 ${
                          i === 10 || i === 13
                            ? 'bg-gradient-to-t from-accent-start to-accent-pink shadow-lg shadow-accent-pink/30'
                            : 'bg-accent-start/40 hover:bg-accent-start/80'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-4 sm:p-7 font-mono text-[11px] sm:text-xs md:text-sm text-start overflow-x-auto bg-[#090D16] text-slate-200" dir="ltr">
                <div className="text-slate-400 mb-2">// Enterprise Architecture Configuration</div>
                <div className="text-pink-400 font-bold">const <span className="text-blue-300">systemArchitecture</span> = &#123;</div>
                <div className="pl-4 text-emerald-400">framework: <span className="text-amber-300">'React 19 + Vite'</span>,</div>
                <div className="pl-4 text-emerald-400">cloudSync: <span className="text-blue-400 font-bold">true</span>,</div>
                <div className="pl-4 text-emerald-400">offlineSupport: <span className="text-blue-400 font-bold">true</span>,</div>
                <div className="pl-4 text-emerald-400">security: &#123;</div>
                <div className="pl-8 text-slate-200">encryption: <span className="text-amber-300 font-semibold">'AES-256-GCM'</span>,</div>
                <div className="pl-8 text-slate-200">authProvider: <span className="text-amber-300 font-semibold">'Zero-Trust JWT'</span></div>
                <div className="pl-4 text-emerald-400">&#125;,</div>
                <div className="pl-4 text-emerald-400">performance: <span className="text-amber-300 font-semibold">'Lighthouse 100/100'</span></div>
                <div className="text-pink-400 font-bold">&#125;;</div>
                <div className="mt-3 text-cyan-400 font-bold">export default <span className="text-blue-300">systemArchitecture</span>;</div>
              </div>
            )}

            {/* Bottom Glow Strip */}
            <div className="h-1 bg-gradient-to-r from-accent-start via-accent-mid to-accent-pink" />
          </div>
        </div>

      </div>
    </section>
  );
}