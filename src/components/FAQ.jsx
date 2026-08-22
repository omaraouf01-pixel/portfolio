import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const { language, t } = useLanguage();

  const faqsAr = [
    {
      q: 'هل أحتاج اتصالاً دائماً بالإنترنت لكي يعمل نظام نقاط البيع (POS)؟',
      a: 'لا على الإطلاق! نبني النظام بمعمارية (Offline-First) ليعمل محلياً بكل كفاءة وسرعة، مع إجراء مزامنة سحابية تلقائية وفورية فور توفر اتصال بالإنترنت دون أي تعطل لسير العمل.'
    },
    {
      q: 'كم يستغرق بناء وتسليم المشروع البرمجي عادةً؟',
      a: 'يعتمد ذلك على حجم ومتطلبات المشروع؛ المشاريع الصغيرة والمتوسطة تستغرق عادة من أسبوعين إلى 4 أسابيع، بينما الأنظمة المؤسسية الكبرى (ERP) تخضع لجدول زمني مرحلي يتم تسليم نتائجه أسبوعياً.'
    },
    {
      q: 'ماذا يحدث إذا واجهت مشكلة أو عطلاً تقنياً بعد الإطلاق؟',
      a: 'نقدم ضماناً ودعماً فنياً مستمراً؛ فريقنا يلتزم بالاستجابة في نفس اليوم وإصلاح أي طارئ بسرعة، مع إجراء نسخ احتياطي دوري لبياناتك لضمان استقرار العمل بنسبة 100%.'
    },
    {
      q: 'هل يمكنني إدارة عدة فروع ومستودعات من لوحة تحكم واحدة؟',
      a: 'نعم بالتأكيد! نصمم لوحات التحكم المركزية لتمكنك من مراقبة كافة الفروع، تحويل المخزون بين المستودعات، وتتبع أداء المبيعات والموظفين لحظياً من أي مكان.'
    },
    {
      q: 'كيف تضمنون أمان وسرية بيانات نشاطي التجاري؟',
      a: 'نتبع أعلى معايير الحماية والتشفير القياسية (AES-256) مع تطبيق مبدأ الصلاحيات الدقيقة (Role-Based Access). إن كان النظام محلياً تبقى بياناتك على أجهزتك فقط، وإن كان سحابياً تُخزن بشكل مشفر تماماً.'
    },
    {
      q: 'كيف نبدأ العمل على المشروع وما هي الخطوة الأولى؟',
      a: 'الأمر بسيط جداً؛ تواصل معنا عبر النموذج أو الواتساب لحجز استشارة أولية مجانية. نناقش متطلباتك ونقدم لك تحليلاً وتصوراً فنياً وعرض سعر واضح ومحدد في غضون 48 ساعة.'
    }
  ];

  const faqsFr = [
    {
      q: 'Ai-je besoin d\'une connexion Internet permanente pour la caisse (POS) ?',
      a: 'Pas du tout ! Nous concevons le système avec une architecture Offline-First pour fonctionner à 100% en local, avec synchronisation cloud automatique dès le retour de connexion.'
    },
    {
      q: 'Combien de temps prend la réalisation d\'un projet en moyenne ?',
      a: 'Les projets standards (POS, vitrines) prennent entre 2 et 4 semaines. Les plateformes ERP et applications complexes font l\'objet d\'un calendrier avec démos hebdomadaires.'
    },
    {
      q: 'Que se passe-t-il en cas de problème technique après le lancement ?',
      a: 'Nous offrons 3 mois de garantie et support technique inclus, avec intervention le jour même et sauvegardes de données automatisées.'
    },
    {
      q: 'Puis-je gérer plusieurs boutiques et dépôts depuis un seul écran ?',
      a: 'Absolument ! Notre module multi-boutiques vous permet de centraliser vos stocks, suivre les transferts et consulter les ventes de chaque point de vente en direct.'
    },
    {
      q: 'Comment garantissez-vous la sécurité de nos données ?',
      a: 'Nous appliquons le chiffrement AES-256 et des protocoles de sécurité stricts (Zero-Trust) avec gestion personnalisée des droits d\'accès pour chaque collaborateur.'
    },
    {
      q: 'Comment débuter la collaboration avec CodeSolve ?',
      a: 'Contactez-nous via WhatsApp ou le formulaire. Après une consultation initiale gratuite, nous vous fournissons un cahier des charges et un devis détaillé sous 48h.'
    }
  ];

  const faqsEn = [
    {
      q: 'Do I need an always-on internet connection for the POS system?',
      a: 'Not at all! Our systems are engineered Offline-First, operating with maximum speed locally and automatically syncing to the cloud whenever internet is available.'
    },
    {
      q: 'How long does development and deployment usually take?',
      a: 'Standard projects take between 2 to 4 weeks, while larger enterprise platforms (ERPs) follow phased sprint cycles with live weekly progress demos.'
    },
    {
      q: 'What happens if we encounter an issue after launch?',
      a: 'We provide 3 months of free post-launch support and warranty, featuring same-day response times and automated data backups.'
    },
    {
      q: 'Can I manage multiple store branches and warehouses from one place?',
      a: 'Yes! Our multi-branch engine centralizes inventory management, stock transfers, and realtime sales reporting across all your locations.'
    },
    {
      q: 'How do you guarantee our business data privacy and security?',
      a: 'We implement industry-standard AES-256 encryption, strict zero-trust authentication, and granular role-based access control.'
    },
    {
      q: 'How do we get started on our project?',
      a: 'Simply message us via WhatsApp or the contact form. We will schedule a free consultation and deliver a detailed technical roadmap & quote within 48 hours.'
    }
  ];

  const faqs = language === 'en' ? faqsEn : language === 'fr' ? faqsFr : faqsAr;

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="w-full py-24 flex flex-col items-center bg-bg-secondary/40 relative">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-start/10 text-accent-start border border-accent-start/20 text-xs font-bold mb-4">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>{t.faq.badge}</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-text-primary mb-4">
          {t.faq.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-start via-accent-mid to-accent-end">{t.faq.titleHighlight}</span>
        </h2>

        <p className="text-base md:text-lg text-text-secondary max-w-2xl mb-14">
          {t.faq.desc}
        </p>

        <div className="w-full max-w-3xl flex flex-col gap-4 text-start">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`p-6 rounded-2xl glass-card transition-all duration-300 cursor-pointer border ${
                  isOpen 
                    ? 'border-accent-start/50 bg-bg-secondary shadow-lg shadow-accent-start/10' 
                    : 'border-border-subtle hover:border-border-subtle/80'
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-bold text-text-primary">
                    {faq.q}
                  </h3>
                  <div className={`p-2 rounded-xl bg-text-primary/5 text-text-secondary transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-accent-start bg-accent-start/10' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>

                {isOpen && (
                  <div className="mt-4 pt-4 border-t border-border-subtle/60 text-text-secondary text-sm sm:text-base leading-relaxed animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
