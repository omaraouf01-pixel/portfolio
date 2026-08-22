import { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, User } from 'lucide-react';
import { playClickSound, playChime } from '../utils/soundEffects';
import { useLanguage } from '../context/LanguageContext';

export default function AIChatBot() {
  const { language, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: t.chatbot.welcome,
      time: 'Now',
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Update initial message if history only has the default greeting
  useEffect(() => {
    setMessages((prev) => {
      if (prev.length <= 1) {
        return [
          {
            id: 1,
            sender: 'bot',
            text: t.chatbot.welcome,
            time: new Date().toLocaleTimeString(language === 'ar' ? 'ar-DZ' : language === 'fr' ? 'fr-FR' : 'en-US', { hour: '2-digit', minute: '2-digit' }),
          },
        ];
      }
      return prev;
    });
  }, [t.chatbot.welcome, language]);

  // Helper to normalize Arabic characters for robust intent matching
  const normalizeText = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[أإآ]/g, 'ا')
      .replace(/ة/g, 'ه')
      .replace(/ى/g, 'ي')
      .replace(/[\u064B-\u065F]/g, ''); // Remove Tashkeel
  };

  // Comprehensive Multilingual Knowledge Base & Intent Classifier
  const generateAIResponse = (userMsg) => {
    const norm = normalizeText(userMsg);
    const lang = language;

    // 1. Greetings
    if (/^(سلام|مرحبا|اهلا|صباح الخير|مساء الخير|salut|hello|hi|bonjour|coucou|hey)/.test(norm) ||
        /(كيف حالك|كيفك|شخبارك|واش راك|راك مليح|لباس|صافا|ça va|ca va|how are you|cv|comment ca va)/.test(norm)) {
      if (lang === 'fr') {
        return `Bonjour et bienvenue ! 😊 Je suis en pleine forme et à votre entière disposition ⚡
Je suis là pour répondre à toutes vos questions sur vos projets logiciels, nos tarifs, nos technologies ou nos systèmes sur mesure. De quoi aimeriez-vous discuter ?`;
      }
      if (lang === 'en') {
        return `Hello and welcome! 😊 I am doing great and fully ready to assist you ⚡
I'm here to answer any questions about your software projects, custom architectures, pricing, and capabilities. What would you like to explore?`;
      }
      return `أهلاً وسهلاً بك! 😊 أنا بخير وفي أتم الجاهزية لمساعدتك ⚡
أنا هنا للإجابة عن كل ما يخص مشاريعك التقنية، دراسات الجدوى البرمجية، أو استفسارات الأسعار والأنظمة. عن ماذا تود أن نتحدث؟`;
    }

    // 2. Identity & Profile
    if (/(من انت|شكون انت|شكون نتوما|من انتم|عرفني بنفسك|من هو عمر|who are you|qui etes vous|c'est quoi codesolve|about codesolve)/.test(norm)) {
      if (lang === 'fr') {
        return `Nous sommes **CodeSolve** 🚀 — un studio spécialisé en ingénierie logicielle et solutions digitales de pointe pour entreprises et commerces en Algérie 🇩🇿.
• **Notre mission :** Transformer vos processus manuels en systèmes digitaux automatisés et ultra-rapides.
• **Nos spécialités :** Systèmes de caisse POS, plateformes ERP, applications Web SaaS et applications mobiles.`;
      }
      if (lang === 'en') {
        return `We are **CodeSolve** 🚀 — a specialized software engineering studio building high-performance digital systems for businesses and startups in Algeria 🇩🇿.
• **Our Mission:** Automate manual operations into lightning-fast, secure software architectures that multiply productivity and profits.
• **Our Core Expertise:** Cloud POS systems, enterprise ERPs, cloud platforms, and mobile applications.`;
      }
      return `نحن **CodeSolve** 🚀 — استوديو متخصص في الهندسة البرمجية والحلول الرقمية المتطورة للشركات والأنشطة التجارية في الجزائر 🇩🇿.
• **مهمتنا:** تحويل إدارة أعمالك من الفوضى والملفات اليدوية إلى أنظمة برمجية سريعة ومؤتمتة تزيد أرباحك وتوفر وقتك.
• **تخصصاتنا:** أنظمة نقاط البيع (POS)، أنظمة تخطيط الموارد (ERP)، منصات الويب السحابية، وتطبيقات الهواتف الذكية.`;
    }

    // 3. Source Code Ownership
    if (/(كود ملكي|ملكيتي|الملكيه|حقوق الملكيه|سورس كود|source code|الكود المصدري|code source|propriete)/.test(norm)) {
      if (lang === 'fr') {
        return `🔒 **Oui, le code source (Source Code) est 100% votre propriété exclusive !**
À la livraison finale du projet :
• Nous vous remettons le dépôt de code complet avec documentation technique détaillée.
• Aucun abonnement caché ni dépendance forcée, vous êtes libre de faire évoluer votre système.`;
      }
      if (lang === 'en') {
        return `🔒 **Yes, the source code is 100% your full intellectual property!**
Upon final project handover:
• We deliver complete clean code repositories with full architectural documentation.
• No hidden fees or proprietary vendor lock-in; you maintain complete autonomy.`;
      }
      return `🔒 **نعم، الكود المصدري (Source Code) ملكك بالكامل 100%!**
عند انتهاء وتسليم المشروع:
• نسلمك المستودع البرمجي وملفات الكود كاملة مع التوثيق الهندسي (Documentation).
• لا توجد أي اشتراكات خفية أو احتكار لنظامك، ويمكنك تطويره مستقبلاً بكل حرية وأمان.`;
    }

    // 4. Payment Methods in Algeria
    if (/(طرق الدفع|دفع|بريدي موب|baridimob|ccp|فليكسي|دراهم|paiement|payment|virement|modalites)/.test(norm)) {
      if (lang === 'fr') {
        return `💳 **Modes de paiement acceptés en Algérie :**
• **Paiement électronique rapide :** Via **BaridiMob** ou virement postal **CCP**.
• **Virement bancaire (Facture pro-forma & définitive) :** Disponible pour les entreprises.
• **Paiement échelonné sécurisé :**
  1. Acompte de 30% à la signature du contrat.
  2. 40% à la livraison de la version de test / staging.
  3. 30% restant après le déploiement final et la formation.`;
      }
      if (lang === 'en') {
        return `💳 **Supported payment methods in Algeria:**
• **Instant Digital Transfer:** via **BaridiMob** or **CCP** postal transfer.
• **Official Bank Wire (Corporate Invoicing):** Available for enterprises and registered companies.
• **Flexible Milestone Payments:**
  1. 30% upfront upon contract kickoff.
  2. 40% upon staging demo preview.
  3. 30% upon final production launch & team training.`;
      }
      return `💳 **طرق الدفع والتعامل المالي المتاحة في الجزائر:**
• **الدفع الإلكتروني السريع:** عبر تطبيق **BaridiMob** أو التحويل البريدي **CCP**.
• **التحويل البنكي (Virement Bancaire):** متاح للشركات والمؤسسات مع فواتير رسمية.
• **نظام الدفع المرحلي المريح:**
  1. دفعة أولى عند توقيع الاتفاق والبدء في التصميم (30%).
  2. دفعة ثانية مع تسليم النسخة التجريبية للمعاينة (40%).
  3. دفعة أخيرة بعد الإطلاق النهائي والتدريب (30%).`;
    }

    // 5. Offline & Internet connectivity
    if (/(بدون انترنت|بدون نت|بلا نت|بلا انترنت|من غير نت|offline|بدون اتصال|مزامنه|انقطاع النت|sync|hors ligne|sans internet|connection)/.test(norm)) {
      if (lang === 'fr') {
        return `⚡ **Fonctionnement Hors-Ligne (Offline-First Architecture) :**
Nous concevons nos systèmes pour être totalement résilients :
• **100% opérationnel sans Internet :** Ventes, tickets de caisse, mises à jour de stock et opérations quotidiennes sans aucune interruption.
• **Synchronisation intelligente (Auto-Sync) :** Dès le retour de la connexion Internet, les données locales se synchronisent automatiquement avec le serveur cloud en toute sécurité !`;
      }
      if (lang === 'en') {
        return `⚡ **Offline-First Resilience & Zero-Downtime:**
We engineer our POS and inventory architectures specifically for intermittent connections:
• **100% Functional Offline:** Process sales, scan barcodes, update local inventory, and print receipts without internet.
• **Smart Auto-Sync:** As soon as internet is restored, all offline transactions sync automatically to the cloud with zero data loss.`;
      }
      return `⚡ **العمل بدون إنترنت (Offline-First Architecture):**
نحن ندرك تماماً واقع الاتصال في الجزائر، ولذلك نصمم أنظمة نقاط البيع والمخزون لتعمل كالآتي:
• **عمل كامل 100% بدون إنترنت:** تسجيل مبيعات، طباعة فواتير، تحديث مخزون، والتعامل مع الزبائن فوراً دون توقف.
• **مزامنة ذكية (Auto-Sync):** بمجرد عودة اتصال الإنترنت في المحل أو الفرع، يقوم النظام تلقائياً بمزامنة البيانات مع السيرفر السحابي بأمان تام!`;
    }

    // 6. Training & Support
    if (/(تدريب|فورماسيون|support|دعم فني|ضمان|صيانه|خدمه ما بعد البيع|عطل|formation|garantie|maintenance)/.test(norm)) {
      if (lang === 'fr') {
        return `🛡️ **Formation, Garantie & Support Technique :**
• **Formation complète :** Formation interactive de votre équipe avec guides et vidéos explicatives.
• **Garantie offerte 3 mois :** Couvre la maintenance, les correctifs et les optimisations légères.
• **Support réactif :** Intervention et réponse le jour même pour garantir la continuité de vos opérations.`;
      }
      if (lang === 'en') {
        return `🛡️ **Training, Warranty & Post-Launch Support:**
• **Hands-on Team Onboarding:** Step-by-step training for your staff with video documentation.
• **3 Months Free Warranty:** Full coverage for bug fixes, performance adjustments, and technical monitoring.
• **Same-Day Rapid Support:** Direct developer access for immediate assistance whenever needed.`;
      }
      return `🛡️ **التدريب والضمان وخدمة ما بعد الإطلاق:**
• **تدريب شامل:** نقوم بتدريبك أنت وفريق عملك على استخدام النظام خطوة بخطوة مع توفير فيديوهات إرشادية.
• **ضمان مجاني لمدة 3 أشهر:** يشمل إصلاح أي أخطاء أو أعطال غير متوقعة وتعديلات طفيفة.
• **استجابة فورية:** فريقنا يستجيب لأي طارئ في نفس اليوم لضمان عدم تعطل مبيعاتك.`;
    }

    // 7. Pricing & Timeline
    if (/(سعر|اسعار|تكلفه|شحال|بشحال|سومه|prix|tarif|cost|combien|كم يكلف|devis|budget|delay|delai|duree)/.test(norm)) {
      if (lang === 'fr') {
        return `💰 **Tarifs & Délais de réalisation :**
• **Systèmes de Caisse POS & Stock :** 2 à 3 semaines avec formation incluse.
• **Plateformes ERP & Cloud sur mesure :** 3 à 6 semaines selon le nombre de modules et d'utilisateurs.
• **Applications Mobiles (iOS & Android) :** 3 à 4 semaines.
💡 Utilisez notre **[Calculateur de Projet]** sur le site ou contactez-nous sur WhatsApp pour un devis personnalisé immédiat !`;
      }
      if (lang === 'en') {
        return `💰 **Project Pricing & Development Timelines:**
• **POS & Retail Inventory Systems:** ~ 2 to 3 weeks with immediate deployment and team onboarding.
• **Enterprise ERP & Cloud SaaS:** ~ 3 to 6 weeks depending on modules and complexity.
• **Mobile Applications (iOS & Android):** ~ 3 to 4 weeks.
💡 You can test our interactive **[Project Estimator]** on this page or WhatsApp us for a free detailed quote!`;
      }
      return `💰 **الأسعار والجدول الزمني لتنفيذ المشاريع:**
• **أنظمة نقاط البيع ومتاجر التجزئة (POS):** تتراوح المدة عادة بين **أسبوعين إلى 3 أسابيع** مع تسليم فوري وتدريب.
• **المنصات السحابية وأنظمة ERP المتكاملة:** تبدأ من **3 إلى 6 أسابيع** وفقاً لعدد الأقسام وحجم التعقيد.
• **تطبيقات الهواتف (Android & iOS):** من **3 إلى 4 أسابيع**.
💡 يمكنك تجربة **[حاسبة تقدير المشاريع]** في الموقع، أو مراسلتنا عبر واتساب لنقدم لك استشارة مجانية وعرض سعر مخصص بدقة!`;
    }

    // 8. Tech Stack & Security
    if (/(تقنيات|لغات|stack|برمجه|react|next|node|python|database|امان|تشفير|security|base de donnees|technologies)/.test(norm)) {
      if (lang === 'fr') {
        return `💻 **Stack Technique & Normes de Sécurité :**
• **Frontend & Mobile :** React 19, Next.js 15, React Native, Tailwind CSS v4.
• **Backend & Bases de données :** Node.js, Fastify, Python, PostgreSQL, SQLite (Offline Sync), Redis.
• **Sécurité :** Chiffrement des bases de données en **AES-256** et authentification Zero-Trust JWT.`;
      }
      if (lang === 'en') {
        return `💻 **Technical Stack & Security Standards:**
• **Frontend & Mobile:** React 19, Next.js 15, React Native, Tailwind CSS v4.
• **Backend & Databases:** Node.js, Fastify, Python, PostgreSQL, SQLite (Offline Sync), Redis Cache.
• **Security & Encryption:** Bank-grade **AES-256** database encryption with Zero-Trust JWT authentication.`;
      }
      return `💻 **الترسانة التقنية ومعايير الأمان والهندسة البرمجية:**
• **الواجهات والتطبيقات:** React 19, Next.js 15, React Native, Tailwind CSS v4.
• **الأنظمة الخلفية وقواعد البيانات:** Node.js, Fastify, Python, PostgreSQL, SQLite, Redis.
• **معايير الأمان والتشفير:** تشفير قواعد البيانات بتقنية **AES-256** ونظام مصادقة مشدد Zero-Trust JWT لحماية بياناتك من أي اختراق.`;
    }

    // 9. Location
    if (/(وين جايين|وين راكم|الموقع|المقر|العنوان|ولايه|وهران|oran|location|adresse|58 ولايه|wilaya)/.test(norm)) {
      if (lang === 'fr') {
        return `📍 **Localisation & Couverture géographique :**
Notre bureau principal est situé à **Oran, Algérie 🇩🇿**.
Nous intervenons et déployons nos solutions logicielles à distance et sur site pour les entreprises des **58 Wilayas** !`;
      }
      if (lang === 'en') {
        return `📍 **Location & Coverage:**
Headquartered in **Oran, Algeria 🇩🇿**.
We serve businesses, startups, and retail chains across all **58 Wilayas** remotely and on-site!`;
      }
      return `📍 **الموقع الجغرافي ونطاق التغطية:**
مقرنا الرئيسي في **وهران، الجزائر 🇩🇿**.
ونقدم خدماتنا البرمجية والاستشارية للمؤسسات والشركات والمتاجر في **كافة ولايات الوطن الـ 58** عن بُعد مع دعم وتركيب كامل!`;
    }

    // 10. Contact & Start
    if (/(كيفاش نبدا|كيف نبدا|ابدا|حجز|تواصل|واتساب|رقم|هاتف|اتصال|نيميرو|خدمه|نخدم|hire|contact|phone|numéro|demarrer)/.test(norm)) {
      if (lang === 'fr') {
        return `🚀 **Comment démarrer votre projet avec CodeSolve ?**
Le processus est simple et structuré :
1. **Contactez-nous :** Envoyez un message sur WhatsApp au [+213 668 20 21 10](https://wa.me/213668202110) ou via le formulaire de contact.
2. **Consultation gratuite :** Nous analysons vos besoins et vous transmettons un cahier des charges avec devis sous 48h.
3. **Développement & Livraison :** Démos hebdomadaires jusqu'à la mise en production et la formation !`;
      }
      if (lang === 'en') {
        return `🚀 **How do we kick off your project?**
In 3 straightforward steps:
1. **Reach Out:** Chat with us directly on WhatsApp at [+213 668 20 21 10](https://wa.me/213668202110) or fill out the contact form.
2. **Free Consultation:** We analyze your requirements and deliver a detailed roadmap & quote within 48 hours.
3. **Build & Deploy:** Live weekly progress demos leading to final production deployment and team training!`;
      }
      return `🚀 **كيف نبدأ العمل على مشروعك؟**
الأمر يتم في 3 خطوات بسيطة ومضمونة:
1. **تواصل معنا:** راسلنا عبر واتساب على الرقم [+213 668 20 21 10](https://wa.me/213668202110) أو عبر نموذج التواصل.
2. **دراسة المتطلبات:** نجلس معك في استشارة مجانية لتحليل احتياجاتك ونقدم لك عرض سعر وخطة عمل خلال 48 ساعة.
3. **البدء والتسليم:** نبدأ العمل الفعلي ونسلمك نسخاً تجريبية أسبوعية حية للمعاينة حتى الإطلاق النهائي والتدريب!`;
    }

    // Fallback response
    if (lang === 'fr') {
      return `Merci pour votre question ! ✨ Chez **CodeSolve**, nous sommes experts dans la création de systèmes de caisse POS, plateformes ERP cloud et applications web/mobiles sur mesure en Algérie.
Vous pouvez me poser des questions sur :
• **Les tarifs et délais de livraison**
• **Le mode hors-ligne (Offline-First)**
• **La propriété du code source et garanties**
• **Une consultation gratuite via WhatsApp**`;
    }
    if (lang === 'en') {
      return `Thank you for your question! ✨ At **CodeSolve**, we specialize in engineering bespoke Cloud POS systems, ERP platforms, and high-speed web & mobile apps in Algeria.
Feel free to ask about:
• **Pricing and delivery timelines**
• **Offline-First capabilities**
• **Source code ownership & warranties**
• **Booking a free consultation via WhatsApp**`;
    }
    return `شكراً لسؤالك! ✨ نحن في **CodeSolve** متخصصون في بناء أنظمة نقاط البيع (POS)، المنصات السحابية (ERP)، وتطبيقات الويب والهواتف للشركات والأنشطة التجارية في الجزائر.

يمكنني إجابتك بدقة عن:
• **الأسعار والمدة الزمنية**
• **العمل بدون إنترنت (Offline-First)**
• **ملكية الكود والضمان الفني**
• **حجز استشارة مجانية مع المهندس عبر واتساب**`;
  };

  const handleSendMessage = (textToSend) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    playClickSound();

    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: text.trim(),
      time: new Date().toLocaleTimeString(language === 'ar' ? 'ar-DZ' : language === 'fr' ? 'fr-FR' : 'en-US', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const reply = generateAIResponse(text);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'bot',
          text: reply,
          time: new Date().toLocaleTimeString(language === 'ar' ? 'ar-DZ' : language === 'fr' ? 'fr-FR' : 'en-US', { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
      setIsTyping(false);
      playChime();
    }, 500);
  };

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen]);

  return (
    <div className={`fixed bottom-6 ${language === 'ar' ? 'left-6' : 'right-6'} z-50 flex flex-col items-start font-sans`}>
      
      {/* Chat Window */}
      {isOpen && (
        <div className="w-[92vw] sm:w-[410px] max-h-[580px] h-[540px] rounded-3xl glass-strong border border-border-subtle shadow-2xl shadow-black/40 flex flex-col overflow-hidden animate-slide-up mb-4 text-start">
          
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-accent-start via-accent-mid to-accent-end text-white flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                <Bot className="w-6 h-6 text-white" />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white animate-pulse" />
              </div>
              <div>
                <h3 className="font-black text-sm text-white flex items-center gap-1.5">
                  <span>{t.chatbot.headerTitle}</span>
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                </h3>
                <span className="text-[11px] text-white/80 font-medium">{t.chatbot.headerSubtitle}</span>
              </div>
            </div>

            <button
              onClick={() => {
                playClickSound();
                setIsOpen(false);
              }}
              className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label={t.chatbot.closeAria}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-bg-secondary/40 text-xs sm:text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <div className={`w-7 h-7 rounded-xl shrink-0 flex items-center justify-center text-xs ${
                  msg.sender === 'user' ? 'bg-accent-start text-white' : 'bg-bg-tertiary border border-border-subtle text-accent-start'
                }`}>
                  {msg.sender === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                </div>

                <div className={`max-w-[85%] p-3.5 rounded-2xl whitespace-pre-wrap leading-relaxed shadow-sm ${
                  msg.sender === 'user'
                    ? 'bg-accent-start text-white rounded-br-none'
                    : 'bg-bg-secondary text-text-primary border border-border-subtle rounded-bl-none'
                }`}>
                  <div dangerouslySetInnerHTML={{ __html: msg.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                  <div className={`text-[9px] mt-1.5 text-end ${msg.sender === 'user' ? 'text-white/70' : 'text-text-muted'}`}>
                    {msg.time}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 text-text-muted text-xs p-2">
                <div className="w-6 h-6 rounded-lg bg-bg-tertiary flex items-center justify-center">
                  <Bot className="w-3 h-3 text-accent-start animate-bounce" />
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-start animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-start animate-bounce delay-100" />
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-start animate-bounce delay-200" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions Pills */}
          <div className="px-3 py-2 bg-bg-secondary border-t border-border-subtle flex gap-1.5 overflow-x-auto scrollbar-hide">
            {t.chatbot.quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(q)}
                className="shrink-0 px-2.5 py-1 rounded-lg bg-bg-tertiary hover:bg-accent-start/10 text-[11px] font-semibold text-text-secondary hover:text-accent-start border border-border-subtle transition-all cursor-pointer"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-bg-primary border-t border-border-subtle flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={t.chatbot.placeholder}
              className="flex-1 px-3.5 py-2.5 rounded-xl bg-bg-secondary border border-border-subtle text-text-primary text-xs focus:outline-none focus:border-accent-start focus:ring-1 focus:ring-accent-start transition-all"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="p-2.5 rounded-xl bg-accent-start hover:bg-accent-end text-white disabled:opacity-40 disabled:pointer-events-none transition-all shadow-md shadow-accent-start/20 cursor-pointer"
              aria-label={t.chatbot.sendAria}
            >
              <Send className={`w-4 h-4 ${language !== 'ar' ? '' : 'rotate-180'}`} />
            </button>
          </form>

        </div>
      )}

      {/* Floating Action Button Bubble */}
      <button
        onClick={() => {
          playClickSound();
          setIsOpen(!isOpen);
        }}
        className="group relative flex items-center gap-3 p-3.5 sm:px-5 sm:py-3.5 rounded-full bg-gradient-to-r from-accent-start via-accent-mid to-accent-end text-white shadow-2xl shadow-accent-start/40 hover:shadow-accent-start/60 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer border border-white/20"
        aria-label={t.chatbot.openAria}
      >
        <div className="relative">
          <Bot className="w-6 h-6 text-white transition-transform group-hover:rotate-12" />
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-accent-start animate-ping" />
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-accent-start" />
        </div>

        <span className="hidden sm:inline-block font-black text-xs">
          {isOpen ? t.chatbot.closeBtn : t.chatbot.openBtn}
        </span>
      </button>

    </div>
  );
}

