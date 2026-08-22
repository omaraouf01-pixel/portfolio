import { useEffect, useState, useRef } from 'react';

export function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        // Disconnect once it becomes visible (trigger once)
        observer.disconnect();
      }
    }, {
      threshold: 0.1, // Trigger when 10% visible
      ...options
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options.threshold, options.root, options.rootMargin]);

  return [elementRef, isIntersecting];
}
