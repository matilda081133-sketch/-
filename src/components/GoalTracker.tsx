'use client';

import { useEffect } from 'react';
import { sendLeadToCRM } from '../lib/crm';
import { resolveDirection } from './ContactsForm';

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

    let lastClickTime = 0;

    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest?.('a');
      if (!target || !target.href) return;

      const href = target.href;

      if (href.startsWith('tel:')) {
        const phoneNum = href.replace('tel:', '').trim() || '+7 (4742) 20-15-25';

        // 1. Отправляем цель в Яндекс Метрику
        window.trackGoal?.('CLICK_PHONE', { phone: phoneNum });

        // 2. Мгновенная отправка вебхука в Битрикс24 (Click-to-Call)
        const now = Date.now();
        if (now - lastClickTime > 5000) {
          lastClickTime = now;
          const currentPath = window.location.pathname;
          const direction = resolveDirection(currentPath);

          sendLeadToCRM({
            name: 'Звонок по телефону (Click-to-Call)',
            phone: phoneNum,
            message: `Клиент кликнул по номеру телефона/кнопке «Позвонить» (${phoneNum}) на мобильном устройстве или сайте.`,
            direction: direction,
            ctaSource: 'click_to_call',
            selected_service: 'Звонок по телефону',
            source_page: window.location.origin + currentPath,
            page_url: window.location.href,
            page_title: document.title,
          }).catch(err => console.error('Click-to-Call CRM error:', err));
        }
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

