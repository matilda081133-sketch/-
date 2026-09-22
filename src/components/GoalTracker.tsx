'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    ym?: (counterId: number, action: string, target: string, params?: Record<string, any>) => void;
    trackGoal?: (goalName: string, params?: Record<string, any>) => void;
  }
}

const COUNTER_ID = 111927249;

export default function GoalTracker() {
  useEffect(() => {
    // Global helper
    window.trackGoal = (goalName: string, params?: Record<string, any>) => {
      try {
        if (typeof window.ym === 'function') {
          window.ym(COUNTER_ID, 'reachGoal', goalName, params);
        }
      } catch (err) {
        console.error('Goal tracking error:', err);
      }
    };

    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest?.('a');
      if (!target || !target.href) return;

      const href = target.href;

      if (href.startsWith('tel:')) {
        window.trackGoal?.('CLICK_PHONE', { phone: href.replace('tel:', '') });
      } else if (href.includes('t.me') || href.includes('telegram')) {
        window.trackGoal?.('CLICK_TELEGRAM');
      } else if (href.includes('max.ru')) {
        window.trackGoal?.('CLICK_MAX');
      } else if (href.includes('yandex.ru/maps') || href.includes('yandex.ru/map-widget') || target.classList.contains('btn-route-map')) {
        window.trackGoal?.('CLICK_ROUTE_MAP');
      } else if (href.startsWith('mailto:')) {
        window.trackGoal?.('CLICK_EMAIL');
      }
    };

    document.addEventListener('click', handleClick, { passive: true });

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
}
