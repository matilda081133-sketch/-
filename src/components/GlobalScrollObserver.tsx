'use client';
import { useEffect } from 'react';

export default function GlobalScrollObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.1, 
      rootMargin: '0px 0px -50px 0px' 
    });

    const initObserver = () => {
      document.querySelectorAll('.reveal-on-scroll:not(.observed)').forEach((el) => {
        el.classList.add('observed');
        observer.observe(el);
      });
    };

    // Initial check
    initObserver();
    
    // Fallbacks to ensure it catches late renders
    setTimeout(initObserver, 100);
    setTimeout(initObserver, 500);
    setTimeout(initObserver, 1000);

    return () => observer.disconnect();
  }, []);

  return null;
}
