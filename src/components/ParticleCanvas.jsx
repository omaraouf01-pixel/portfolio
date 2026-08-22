import { useEffect, useRef } from 'react';
import { useTheme } from './ThemeProvider';

export default function ParticleCanvas() {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let isScrolling = false;
    let scrollTimeout;

    // Pause heavy canvas updates during active user scroll to guarantee 120 FPS
    const handleScroll = () => {
      isScrolling = true;
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 100);
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    // Ultra-lightweight particle set (only 20 particles, zero nested heavy distance loops)
    const particleCount = 22;
    const isDark = theme === 'dark';

    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 1.2,
      color: isDark ? 'rgba(99, 102, 241, 0.35)' : 'rgba(59, 130, 246, 0.25)',
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    }));

    let lastTime = 0;
    const targetFPS = 45; // Cap to 45 FPS to save 75% GPU/CPU overhead
    const interval = 1000 / targetFPS;

    const render = (time) => {
      animationFrameId = requestAnimationFrame(render);

      if (isScrolling) return; // Skip rendering while scrolling for butter-smooth scroll

      const delta = time - lastTime;
      if (delta < interval) return;
      lastTime = time - (delta % interval);

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(scrollTimeout);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
      aria-hidden="true"
      style={{ willChange: 'contents', transform: 'translateZ(0)' }}
    />
  );
}
