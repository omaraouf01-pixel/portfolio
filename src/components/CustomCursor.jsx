import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on fine pointers (desktop mouse)
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = target.closest('a, button, input, textarea, select, [role="button"], .glass-card, .cursor-pointer');
      setIsHovered(!!isInteractive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Smooth Trailing animation frame
    let animFrame;
    const animateTrailing = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.25,
        y: prev.y + (position.y - prev.y) * 0.25,
      }));
      animFrame = requestAnimationFrame(animateTrailing);
    };
    animFrame = requestAnimationFrame(animateTrailing);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animFrame);
    };
  }, [position, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Tiny Laser Dot */}
      <div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-accent-start pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_12px_#3B82F6] transition-transform duration-75"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      />

      {/* Outer Glowing Magnetic Aura */}
      <div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out border border-accent-start/40 ${
          isHovered
            ? 'w-14 h-14 bg-accent-start/15 backdrop-blur-[2px] scale-110 border-accent-pink/60 shadow-[0_0_25px_rgba(59,130,246,0.3)]'
            : 'w-8 h-8 bg-transparent scale-100'
        }`}
        style={{ transform: `translate(${trailingPos.x}px, ${trailingPos.y}px)` }}
      />
    </>
  );
}
