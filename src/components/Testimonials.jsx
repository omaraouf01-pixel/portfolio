import { Star, Quote, CheckCircle2, Building2, Store, Briefcase } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Testimonials() {
  const { language } = useLanguage();

  const testimonials = [
    {
      name: language === 'en' ? 'Karim Benali' : language === 'fr' ? 'Karim Benali' : 'كريم بن علي',
      role: language === 'en' ? 'Owner, El-Bahja Supermarket (Oran)' : language === 'fr' ? 'Gérant, Supermarché El-Bahja (Oran)' : 'مالك سوبرماركت البهجة (وهران)',
      avatar: '🛒',
      icon: Store,
      rating: 5,
      comment: language === 'en' 
        ? 'The Cloud POS system developed by CodeSolve completely transformed our inventory management. It works smoothly offline during internet cuts and synced our 3 branches effortlessly.'
        : language === 'fr'
        ? 'Le système de caisse POS de CodeSolve a transformé la gestion de notre stock. Il fonctionne sans coupure en mode hors-ligne et a synchronisé nos 3 magasins avec une facilité déconcertante.'
        : 'نظام نقاط البيع والمخزون من CodeSolve غيّر طريقة عملنا تماماً. أصبحنا نبيع بدون أي انقطاع حتى مع مشاكل النت، وربطنا 3 فروع في لوحة تحكم واحدة على الهاتف.',
      result: language === 'en' ? '+35% Faster Sales Checkout' : language === 'fr' ? '+35% de rapidité en caisse' : '+35% سرعة في معالجة مبيعات الزبائن',
    },
    {
      name: language === 'en' ? 'Amine Touati' : language === 'fr' ? 'Amine Touati' : 'أمين تواتي',
      role: language === 'en' ? 'Operations Director, Maghreb Logistique' : language === 'fr' ? 'Directeur des Opérations, Maghreb Logistique' : 'مدير العمليات، مغرب لوجستيك (الجزائر)',
      avatar: '📦',
      icon: Building2,
      rating: 5,
      comment: language === 'en'
        ? 'We replaced 6 separate messy Excel sheets with a single custom ERP system. Fast response time, clean architecture, and same-day support whenever needed.'
        : language === 'fr'
        ? 'Nous avons remplacé 6 fichiers Excel désordonnés par un seul ERP sur mesure. Temps de réponse ultra-rapide et support technique disponible le jour même.'
        : 'تخلصنا من فوضى جداول الإكسل المعقدة بفضل نظام الـ ERP السحابي المخصص. سرعة خارقة في معالجة الشحنات والفواتير ودعم فني حاضر في أي لحظة.',
      result: language === 'en' ? 'Saved 15+ Hours Weekly' : language === 'fr' ? '+15h de travail économisées par semaine' : 'توفير أكثر من 15 ساعة عمل أسبوعياً',
    },
    {
      name: language === 'en' ? 'Dr. Sarah Mansouri' : language === 'fr' ? 'Dr. Sarah Mansouri' : 'د. سارة منصوري',
      role: language === 'en' ? 'Founder, Chifa Medical Center' : language === 'fr' ? 'Fondatrice, Centre Médical Chifa' : 'مؤسسة مركز الشفاء الطبي',
      avatar: '🏥',
      icon: Briefcase,
      rating: 5,
      comment: language === 'en'
        ? 'Exceptional attention to security, patient data encryption, and simple UI that our receptionists learned in less than 30 minutes. Highly recommended!'
        : language === 'fr'
        ? 'Une attention remarquable portée à la sécurité et au chiffrement des données, avec une interface intuitive que notre équipe a maîtrisée en 30 minutes.'
        : 'اهتمام فائق بأمان وتشفير ملفات المرضى، مع واجهة سهلة جداً تعلّمها موظفو الاستقبال في أقل من نصف ساعة. عمل احترافي يرفع الرأس!',
      result: language === 'en' ? '100% Secure & Automated' : language === 'fr' ? '100% Sécurisé & Automatisé' : 'أتمتة المواعيد وأمان بيانات بنسبة 100%',
    },
  ];

  return (
    <section id="testimonials" className="relative py-24 bg-bg-secondary/30 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-accent-pink/10 rounded-full blur-[70px] pointer-events-none" style={{ transform: 'translateZ(0)' }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20 text-xs font-bold mb-4">
          <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
          <span>{language === 'en' ? 'Client Testimonials' : language === 'fr' ? 'Témoignages Clients' : 'قصص نجاح وثقة العملاء'}</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-text-primary mb-4">
          {language === 'en' ? 'Trusted by' : language === 'fr' ? 'Recommandé par des' : 'تجارب حقيقية لشركات'}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-accent-mid to-accent-pink">
            {language === 'en' ? 'Ambitious Businesses' : language === 'fr' ? 'Entreprises Ambitieuses' : 'طوّرت أعمالها معنا'}
          </span>
        </h2>

        <p className="max-w-2xl text-text-secondary text-base md:text-lg mb-16">
          {language === 'en'
            ? 'Hear from real business owners who transformed their operations and scaled their profits using our systems.'
            : language === 'fr'
            ? 'Découvrez les retours de gérants d\'entreprises qui ont automatisé leurs opérations et augmenté leurs bénéfices.'
            : 'آراء وتقييمات أصحاب الأنشطة والشركات الذين اعتمدوا على أنظمتنا البرمجية لإدارة وتوسيع أعمالهم اليومية.'}
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl text-start">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="group relative p-8 rounded-3xl glass-card border border-border-subtle hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Header Rating & Quote */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-text-muted/30 group-hover:text-amber-500/40 transition-colors" />
                </div>

                {/* Comment Text */}
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  "{t.comment}"
                </p>
              </div>

              <div>
                {/* Result Highlight Badge */}
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-bold mb-5 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>{t.result}</span>
                </div>

                {/* User Info */}
                <div className="pt-4 border-t border-border-subtle flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-bg-tertiary border border-border-subtle flex items-center justify-center text-xl shadow-inner">
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="font-black text-sm text-text-primary">{t.name}</h4>
                    <p className="text-[11px] text-text-muted">{t.role}</p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
