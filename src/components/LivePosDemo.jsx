import { useState } from 'react';
import { ShoppingCart, Plus, Minus, Trash2, Printer, Wifi, WifiOff, X, Barcode } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { playBarcodeBeep, playClickSound, playChime } from '../utils/soundEffects';

export default function LivePosDemo() {
  const { language, t } = useLanguage();
  const [cart, setCart] = useState([
    { id: 1, name: language === 'en' ? 'Espresso Coffee' : language === 'fr' ? 'Café Espresso' : 'قهوة إسبريسو مختصة', price: 250, qty: 2, icon: '☕' },
    { id: 3, name: language === 'en' ? 'Fresh Croissant' : language === 'fr' ? 'Croissant Frais' : 'كرواسون طازج', price: 180, qty: 1, icon: '🥐' },
  ]);
  const [isOnline, setIsOnline] = useState(true);
  const [receiptModal, setReceiptModal] = useState(null);

  const sampleProducts = [
    { id: 1, name: language === 'en' ? 'Espresso Coffee' : language === 'fr' ? 'Café Espresso' : 'قهوة إسبريسو مختصة', price: 250, icon: '☕' },
    { id: 2, name: language === 'en' ? 'Mineral Water 500ml' : language === 'fr' ? 'Eau Minérale 500ml' : 'مياه معدنية 500ml', price: 50, icon: '💧' },
    { id: 3, name: language === 'en' ? 'Fresh Croissant' : language === 'fr' ? 'Croissant Frais' : 'كرواسون طازج', price: 180, icon: '🥐' },
    { id: 4, name: language === 'en' ? 'Fine Chocolate 80g' : language === 'fr' ? 'Chocolat Fin 80g' : 'شوكولاتة فاخرة 80g', price: 320, icon: '🍫' },
    { id: 5, name: language === 'en' ? 'Fresh Orange Juice' : language === 'fr' ? 'Jus d\'Orange' : 'عصير برتقال طبيعي', price: 220, icon: '🍊' },
    { id: 6, name: language === 'en' ? 'Mint Green Tea' : language === 'fr' ? 'Thé Vert Menthe' : 'شاي أخضر بالنعناع', price: 120, icon: '🍵' },
  ];

  const addToCart = (product) => {
    playBarcodeBeep();
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id, delta) => {
    playClickSound();
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeFromCart = (id) => {
    playClickSound();
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const handleCheckout = () => {
    if (cart.length === 0) return;
    playChime();
    const invoiceNum = 'INV-' + Math.floor(100000 + Math.random() * 900000);
    setReceiptModal({
      number: invoiceNum,
      date: new Date().toLocaleDateString(language === 'ar' ? 'ar-DZ' : language === 'fr' ? 'fr-FR' : 'en-US') + ' ' + new Date().toLocaleTimeString(),
      items: [...cart],
      total: totalAmount,
      mode: isOnline ? t.pos.online : t.pos.offline,
    });
    setCart([]);
  };

  return (
    <section id="pos-simulator" className="relative py-28 md:py-36 bg-bg-secondary/40 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-accent-cyan/15 rounded-full blur-[70px] pointer-events-none" style={{ transform: 'translateZ(0)' }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 text-xs font-bold mb-4">
          <Barcode className="w-3.5 h-3.5" />
          <span>{t.pos.badge}</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-text-primary mb-4">
          {t.pos.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-accent-start">{t.pos.titleHighlight}</span> {t.pos.titleEnd}
        </h2>

        <p className="max-w-2xl text-text-secondary text-base md:text-lg mb-16 font-normal leading-relaxed">
          {t.pos.desc}
        </p>

        {/* The POS Terminal Window */}
        <div className="w-full max-w-5xl rounded-3xl overflow-hidden glass-strong border border-border-subtle shadow-2xl shadow-black/25 text-start">
          
          {/* POS Header Bar */}
          <div className="p-4 sm:px-6 bg-bg-tertiary/90 border-b border-border-subtle flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-success animate-pulse" />
              <span className="font-black text-sm text-text-primary">{t.pos.terminalName}</span>
            </div>

            {/* Offline/Online Mode Switch */}
            <button
              onClick={() => {
                playClickSound();
                setIsOnline(!isOnline);
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-2 border transition-all cursor-pointer shadow-sm ${
                isOnline
                  ? 'bg-emerald-500/15 text-emerald-500 border-emerald-500/30'
                  : 'bg-amber-500/15 text-amber-500 border-amber-500/30'
              }`}
            >
              {isOnline ? <Wifi className="w-3.5 h-3.5" /> : <WifiOff className="w-3.5 h-3.5" />}
              <span>{isOnline ? t.pos.online : t.pos.offline}</span>
            </button>
          </div>

          {/* POS Main Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Products Grid (7 Cols) */}
            <div className={`lg:col-span-7 p-6 sm:p-7 border-b lg:border-b-0 ${language === 'ar' ? 'lg:border-l' : 'lg:border-r'} border-border-subtle`}>
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs sm:text-sm font-black text-text-primary">{t.pos.quickProducts}</span>
                <span className="text-xs text-text-secondary font-medium">{t.pos.barcodeScan}</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
                {sampleProducts.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => addToCart(p)}
                    className="group p-4 rounded-2xl bg-bg-secondary border border-border-subtle hover:border-accent-start/60 hover:shadow-xl hover:shadow-accent-start/15 transition-all duration-300 flex flex-col items-center text-center cursor-pointer active:scale-95"
                  >
                    <span className="text-3xl mb-2 transition-transform group-hover:scale-125">{p.icon}</span>
                    <span className="text-xs sm:text-sm font-bold text-text-primary line-clamp-1 mb-1">{p.name}</span>
                    <span className="text-xs sm:text-sm font-black text-accent-start font-mono">{p.price} {t.currency}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Shopping Cart & Total (5 Cols) */}
            <div className="lg:col-span-5 p-6 sm:p-7 bg-bg-secondary/70 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-border-subtle">
                  <div className="flex items-center gap-2 font-black text-sm sm:text-base text-text-primary">
                    <ShoppingCart className="w-4 h-4 text-accent-start" />
                    <span>{t.pos.cartTitle}</span>
                  </div>
                  <span className="text-xs font-bold text-text-secondary">{cart.length} {t.pos.itemsCount}</span>
                </div>

                {/* Cart Items List */}
                <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                  {cart.length === 0 ? (
                    <div className="py-12 text-center text-text-muted text-xs sm:text-sm font-medium">
                      {t.pos.emptyCart}
                    </div>
                  ) : (
                    cart.map((item) => (
                      <div
                        key={item.id}
                        className="p-3 rounded-xl bg-bg-primary/90 border border-border-subtle flex items-center justify-between gap-2 text-xs sm:text-sm"
                      >
                        <div className="flex items-center gap-2 flex-1 min-w-0">
                          <span className="text-base">{item.icon}</span>
                          <span className="font-bold text-text-primary truncate">{item.name}</span>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => updateQty(item.id, -1)}
                            className="p-1.5 rounded-lg bg-bg-secondary hover:bg-red-500/20 text-text-secondary hover:text-red-500 cursor-pointer transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-5 text-center font-bold font-mono text-text-primary">{item.qty}</span>
                          <button
                            onClick={() => updateQty(item.id, 1)}
                            className="p-1.5 rounded-lg bg-bg-secondary hover:bg-emerald-500/20 text-text-secondary hover:text-emerald-500 cursor-pointer transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="font-black text-accent-start font-mono min-w-[55px] text-end">
                          {item.price * item.qty} {t.currency}
                        </span>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-1 text-text-muted hover:text-red-500 cursor-pointer transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Cart Footer & Checkout */}
              <div className="pt-5 mt-5 border-t border-border-subtle space-y-4">
                <div className="flex items-center justify-between text-sm sm:text-base">
                  <span className="text-text-secondary font-bold">{t.pos.total}</span>
                  <span className="text-2xl sm:text-3xl font-black text-text-primary font-mono">{totalAmount} {t.currency}</span>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={cart.length === 0}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-black text-sm sm:text-base text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-xl shadow-emerald-500/25 disabled:opacity-40 disabled:pointer-events-none transition-all cursor-pointer active:scale-98"
                >
                  <Printer className="w-4 h-4" />
                  <span>{t.pos.checkoutBtn}</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Simulated Receipt Modal */}
      {receiptModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-sm p-6 rounded-3xl bg-white text-slate-900 shadow-2xl animate-slide-up text-start font-mono text-xs space-y-4">
            
            <button
              onClick={() => setReceiptModal(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Receipt Header */}
            <div className="text-center pb-3 border-b border-dashed border-slate-300">
              <div className="text-base font-black text-slate-900 font-sans">{t.pos.storeName}</div>
              <div className="text-[11px] text-slate-600 font-semibold mt-0.5">CodeSolve Cloud POS</div>
              <div className="text-[11px] text-slate-600 font-semibold">{t.pos.invoiceNo} {receiptModal.number}</div>
              <div className="text-[11px] text-slate-600 font-semibold">{receiptModal.date}</div>
            </div>

            {/* Receipt Items */}
            <div className="space-y-1.5 py-2 border-b border-dashed border-slate-300">
              {receiptModal.items.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center text-[11px]">
                  <span className="font-medium text-slate-800">{item.name} x{item.qty}</span>
                  <span className="font-bold text-slate-950">{item.price * item.qty} {t.currency}</span>
                </div>
              ))}
            </div>

            {/* Receipt Total */}
            <div className="flex justify-between items-center text-sm font-black pt-1">
              <span>{t.pos.total}</span>
              <span className="text-emerald-700 text-lg font-black">{receiptModal.total} {t.currency}</span>
            </div>

            <div className="p-3 rounded-xl bg-emerald-50 text-emerald-900 text-xs text-center font-bold">
              {t.pos.invoiceSuccess} {receiptModal.mode}
            </div>

            <button
              onClick={() => setReceiptModal(null)}
              className="w-full py-3 rounded-xl bg-slate-900 text-white text-xs font-bold text-center hover:bg-slate-800 transition-colors cursor-pointer shadow-md"
            >
              {t.pos.printDone}
            </button>

          </div>
        </div>
      )}

    </section>
  );
}

