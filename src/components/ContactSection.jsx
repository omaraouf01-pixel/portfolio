import { useState, useEffect } from 'react';
import { Mail, MapPin, MessageCircle, CheckCircle2, X, Send, Sparkles, Copy, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '', botField: '' });
  const [toast, setToast] = useState({ visible: false, message: '' });
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('codesolve01@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Honeypot check for bots
    if (formData.botField !== '') {
      setToast({ visible: true, message: t.contact.toastSuccess });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '', botField: '' });
      return;
    }

    // Simulate API submission
    setTimeout(() => {
      setToast({ visible: true, message: t.contact.toastSuccess });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '', botField: '' });
    }, 400);
  };

  useEffect(() => {
    if (toast.visible) {
      const timer = setTimeout(() => setToast({ visible: false, message: '' }), 6000);
      return () => clearTimeout(timer);
    }
  }, [toast.visible]);

  return (
    <section id="contact" className="relative py-24 bg-bg-primary">
      {/* Toast Notification */}
      <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 ${
        toast.visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}>
        <div className="bg-emerald-600 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-emerald-400/30 backdrop-blur-xl">
          <CheckCircle2 className="w-6 h-6 shrink-0" />
          <span className="font-bold text-sm sm:text-base">{toast.message}</span>
          <button onClick={() => setToast({ visible: false, message: '' })} className="mr-4 p-1 hover:bg-white/20 rounded-full transition-colors cursor-pointer">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-start/10 text-accent-start border border-accent-start/20 text-xs font-bold mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.contact.badge}</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-text-primary mb-4">
          {t.contact.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-start via-accent-mid to-accent-pink">{t.contact.titleHighlight}</span>
        </h2>

        <p className="max-w-2xl text-text-secondary text-base md:text-lg mb-16">
          {t.contact.desc}
        </p>

        <div className="flex flex-col lg:flex-row max-w-6xl w-full text-start gap-10">
          
          {/* Contact Info Cards */}
          <div className="w-full lg:w-1/3 space-y-4 flex flex-col">
            
            {/* WhatsApp Card */}
            <a 
              href="https://wa.me/213668202110" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="WhatsApp Direct" 
              className="group p-6 rounded-3xl glass-card hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 flex items-start gap-4 border border-border-subtle"
            >
              <div className="relative p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6" />
                <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold text-emerald-500 mb-1">{t.contact.whatsappCard}</p>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500">{t.contact.onlineNow}</span>
                </div>
                <p className="text-text-primary font-black text-base" dir="ltr">+213 668 20 21 10</p>
                <p className="text-xs text-text-secondary mt-1">{t.contact.fastReply}</p>
              </div>
            </a>

            {/* Email Card */}
            <div className="group p-6 rounded-3xl glass-card hover:border-accent-start/50 transition-all duration-300 flex items-start gap-4 border border-border-subtle">
              <div className="p-4 rounded-2xl bg-accent-start/10 border border-accent-start/20 text-accent-start group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold text-text-muted mb-1">{t.contact.emailCard}</p>
                  <button 
                    onClick={copyEmail}
                    className="text-xs font-bold text-accent-start hover:underline flex items-center gap-1 cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-success" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedEmail ? t.contact.copied : t.contact.copy}</span>
                  </button>
                </div>
                <a href="mailto:codesolve01@gmail.com" className="text-text-primary font-bold text-base hover:text-accent-start transition-colors">
                  codesolve01@gmail.com
                </a>
                <p className="text-xs text-text-secondary mt-1">{t.contact.emailSub}</p>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-3xl glass-card flex items-start gap-4 border border-border-subtle">
              <div className="p-4 rounded-2xl bg-accent-mid/10 border border-accent-mid/20 text-accent-mid">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-text-muted mb-1">{t.contact.locationCard}</p>
                <p className="text-text-primary font-bold text-base">{t.contact.locationCity}</p>
                <p className="text-xs text-text-secondary mt-1">{t.contact.locationSub}</p>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <form 
            onSubmit={handleSubmit} 
            id="contact-form" 
            className="w-full lg:w-2/3 p-8 sm:p-10 rounded-3xl glass-strong border border-border-subtle shadow-2xl shadow-black/10 space-y-6"
          >
            {/* Honeypot Field */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="botField">Leave blank</label>
              <input
                type="text"
                id="botField"
                name="botField"
                value={formData.botField}
                onChange={handleInputChange}
                tabIndex="-1"
                autoComplete="off"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-xs font-black text-text-primary mb-2">
                  {t.contact.nameLabel} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  minLength={3}
                  className="w-full px-4 py-3.5 rounded-xl bg-bg-secondary border border-border-subtle text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-accent-start focus:ring-2 focus:ring-accent-start/20 transition-all"
                  placeholder={t.contact.namePlaceholder}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-black text-text-primary mb-2">
                  {t.contact.emailLabel} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-bg-secondary border border-border-subtle text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-accent-start focus:ring-2 focus:ring-accent-start/20 transition-all"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs font-black text-text-primary mb-2">
                {t.contact.subjectLabel} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                minLength={4}
                className="w-full px-4 py-3.5 rounded-xl bg-bg-secondary border border-border-subtle text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-accent-start focus:ring-2 focus:ring-accent-start/20 transition-all"
                placeholder={t.contact.subjectPlaceholder}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-black text-text-primary mb-2">
                {t.contact.messageLabel} <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                minLength={10}
                rows={5}
                className="w-full px-4 py-3.5 rounded-xl bg-bg-secondary border border-border-subtle text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-accent-start focus:ring-2 focus:ring-accent-start/20 transition-all resize-none"
                placeholder={t.contact.messagePlaceholder}
              />
            </div>

            <button
              type="submit"
              className="group w-full flex justify-center items-center gap-3 px-8 py-4.5 text-base font-bold text-white bg-gradient-to-r from-accent-start via-accent-mid to-accent-end rounded-2xl shadow-xl shadow-accent-start/30 hover:shadow-2xl hover:shadow-accent-start/50 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <Send className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
              <span>{t.contact.submitBtn}</span>
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}