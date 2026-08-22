import { useState, useRef, useEffect } from 'react';
import { Terminal, CornerDownLeft, Trash2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function InteractiveTerminal() {
  const { t } = useLanguage();
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: t.terminal.welcome,
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const terminalBodyRef = useRef(null);

  // Update initial welcome message when language changes if history is clean or on mount
  useEffect(() => {
    setHistory((prev) => {
      if (prev.length <= 1) {
        return [{ type: 'system', text: t.terminal.welcome }];
      }
      return prev;
    });
  }, [t.terminal.welcome]);

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    let output = t.terminal.notRecognized.replace('{cmd}', trimmed);
    if (t.terminal.commands[trimmed]) {
      output = t.terminal.commands[trimmed];
    }

    setHistory((prev) => [
      ...prev,
      { type: 'user', text: `$ ${trimmed}` },
      { type: 'response', text: output },
    ]);
    setInputVal('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  useEffect(() => {
    if (history.length > 1 && terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const pillButtons = [
    { cmd: 'skills', label: t.terminal.pills.skills },
    { cmd: 'projects', label: t.terminal.pills.projects },
    { cmd: 'services', label: t.terminal.pills.services },
    { cmd: 'contact', label: t.terminal.pills.contact },
    { cmd: 'hire', label: t.terminal.pills.hire },
    { cmd: 'about', label: t.terminal.pills.about },
    { cmd: 'clear', label: t.terminal.pills.clear },
  ];

  return (
    <section id="terminal" className="relative py-28 md:py-36 bg-bg-secondary/30 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-pink/10 rounded-full blur-[90px] pointer-events-none" style={{ transform: 'translateZ(0)' }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-pink/10 text-accent-pink border border-accent-pink/20 text-xs font-bold mb-4">
          <Terminal className="w-3.5 h-3.5" />
          <span>{t.terminal.badge}</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-text-primary mb-4">
          {t.terminal.title}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-pink via-accent-mid to-accent-start">
            {t.terminal.titleHighlight}
          </span>
        </h2>

        <p className="max-w-2xl text-text-secondary text-base md:text-lg mb-16 font-normal leading-relaxed">
          {t.terminal.desc}
        </p>

        {/* Quick Command Pills */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 mb-8 max-w-3xl">
          <span className="text-xs font-bold text-text-secondary ml-2">{t.terminal.clickHint}</span>
          {pillButtons.map((item) => (
            <button
              key={item.cmd}
              onClick={() => handleCommand(item.cmd)}
              className="px-4 py-2 rounded-xl font-mono text-xs sm:text-sm font-bold bg-bg-secondary border border-border-subtle hover:border-accent-start text-text-primary hover:text-accent-start hover:bg-accent-start/10 transition-all shadow-sm cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Terminal Window */}
        <div className="w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border border-slate-700/60 bg-[#0A0E17] text-slate-200 text-start font-mono text-xs sm:text-sm" dir="ltr">
          
          {/* Terminal Title Bar */}
          <div className="px-5 py-3.5 bg-[#121826] border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>

            <div className="text-xs text-slate-400 font-sans font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>codesolve-cli ~ bash interactive</span>
            </div>

            <button
              onClick={() => setHistory([])}
              className="text-slate-400 hover:text-red-400 p-1 transition-colors cursor-pointer"
              title={t.terminal.clearHistory}
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>

          {/* Terminal Body */}
          <div ref={terminalBodyRef} className="p-6 h-80 overflow-y-auto space-y-4 select-text">
            {history.map((item, idx) => (
              <div key={idx} className="leading-relaxed whitespace-pre-wrap">
                {item.type === 'system' && (
                  <span className="text-slate-400">{item.text}</span>
                )}
                {item.type === 'user' && (
                  <span className="text-emerald-400 font-bold">{item.text}</span>
                )}
                {item.type === 'response' && (
                  <span className="text-cyan-300">{item.text}</span>
                )}
              </div>
            ))}
          </div>

          {/* Terminal Input Bar */}
          <form onSubmit={handleSubmit} className="px-5 py-3 bg-[#0E131F] border-t border-slate-800 flex items-center gap-3">
            <span className="text-emerald-400 font-bold">$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder={t.terminal.placeholder}
              className="flex-1 bg-transparent text-slate-100 placeholder-slate-500 text-xs sm:text-sm focus:outline-none font-mono"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-accent-start/20 hover:bg-accent-start text-accent-start hover:text-white transition-all cursor-pointer"
              title={t.terminal.execCmd}
            >
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}

