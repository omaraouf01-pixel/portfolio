import { useState } from 'react';
import { Gauge, Zap, AlertTriangle, CheckCircle2, Play, RefreshCw } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { playClickSound, playChime } from '../utils/soundEffects';

export default function PerformanceBenchmark() {
  const { t } = useLanguage();
  const [isRunning, setIsRunning] = useState(false);
  const [testCompleted, setTestCompleted] = useState(false);
  const [customScore, setCustomScore] = useState(100);

  const runBenchmark = () => {
    playClickSound();
    setIsRunning(true);
    setTestCompleted(false);

    setTimeout(() => {
      setIsRunning(false);
      setTestCompleted(true);
      setCustomScore(99 + Math.floor(Math.random() * 2));
      playChime();
    }, 1800);
  };

  return (
    <section id="benchmark" className="relative py-24 bg-bg-primary overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-start/10 text-accent-start border border-accent-start/20 text-xs font-bold mb-4">
          <Gauge className="w-3.5 h-3.5" />
          <span>{t.benchmark.badge}</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-text-primary mb-4">
          {t.benchmark.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-start via-accent-mid to-accent-pink">{t.benchmark.titleHighlight}</span>
        </h2>

        <p className="max-w-2xl text-text-secondary text-base md:text-lg mb-14">
          {t.benchmark.desc}
        </p>

        {/* Comparison Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl text-start mb-12">
          
          {/* Card 1: Generic Legacy Systems */}
          <div className="p-8 sm:p-10 rounded-3xl bg-red-500/5 dark:bg-red-500/10 border border-red-500/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-red-500/20">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-red-500/20 text-red-500">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-black text-text-primary">{t.benchmark.legacyTitle}</h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 font-bold text-xs">{t.benchmark.legacyBadge}</span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-text-secondary">
                <div className="flex items-center justify-between p-3 rounded-xl bg-bg-secondary/60">
                  <span>{t.benchmark.metric1Label}</span>
                  <span className="font-mono font-bold text-red-500">{t.benchmark.metric1Legacy}</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-bg-secondary/60">
                  <span>{t.benchmark.metric2Label}</span>
                  <span className="font-mono font-bold text-red-500">42 / 100</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-bg-secondary/60">
                  <span>{t.benchmark.metric3Label}</span>
                  <span className="font-bold text-red-500">{t.benchmark.metric3Legacy}</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-bg-secondary/60">
                  <span>{t.benchmark.metric4Label}</span>
                  <span className="font-mono font-bold text-red-500">{t.benchmark.metric4Legacy}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: CodeSolve Systems */}
          <div className="p-8 sm:p-10 rounded-3xl glass-strong border border-emerald-500/40 shadow-2xl shadow-emerald-500/10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-accent-start" />

            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border-subtle">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-black text-text-primary">{t.benchmark.codeSolveTitle}</h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs">{t.benchmark.codeSolveBadge}</span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-text-secondary">
                <div className="flex items-center justify-between p-3 rounded-xl bg-bg-secondary border border-border-subtle">
                  <span>{t.benchmark.metric1Label}</span>
                  <span className="font-mono font-bold text-emerald-400">{t.benchmark.metric1CodeSolve}</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-bg-secondary border border-border-subtle">
                  <span>{t.benchmark.metric2Label}</span>
                  <span className="font-mono font-bold text-emerald-400">{testCompleted ? `${customScore} / 100` : '100 / 100'}</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-bg-secondary border border-border-subtle">
                  <span>{t.benchmark.metric3Label}</span>
                  <span className="font-bold text-emerald-400">{t.benchmark.metric3CodeSolve}</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-bg-secondary border border-border-subtle">
                  <span>{t.benchmark.metric4Label}</span>
                  <span className="font-mono font-bold text-emerald-400">{t.benchmark.metric4CodeSolve}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Live Test Benchmark Trigger */}
        <div className="flex flex-col items-center gap-3">
          <button
            onClick={runBenchmark}
            disabled={isRunning}
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-sm font-black text-white bg-gradient-to-r from-accent-start via-accent-mid to-accent-end shadow-xl shadow-accent-start/25 hover:shadow-2xl hover:shadow-accent-start/40 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer disabled:opacity-60"
          >
            {isRunning ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>{t.benchmark.btnRunning}</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
                <span>{t.benchmark.btnRun}</span>
              </>
            )}
          </button>

          {testCompleted && (
            <div className="animate-fade-in text-xs font-bold text-success flex items-center gap-1.5 mt-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>{t.benchmark.successMsg}</span>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
