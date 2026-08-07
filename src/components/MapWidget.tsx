"use client";

import React, { useEffect, useRef, useState } from 'react';
import { isAccepted, setConsent, CONSENT_EVENT } from '@/lib/cookieConsent';

/**
 * MapWidget with consent gate.
 *
 * Per TZ п. 4:
 * «До согласия карта заменяется заглушкой и кнопкой "Показать карту".
 *  Кнопка даёт функциональное согласие либо открывает общий интерфейс.»
 *
 * Clicking "Показать карту" → records 'accepted' consent → loads the map.
 */
export default function MapWidget() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [consented, setConsented] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Check consent on mount
  useEffect(() => {
    setConsented(isAccepted());

    const handler = (e: Event) => {
      const decision = (e as CustomEvent<{ decision: string }>).detail?.decision;
      if (decision === 'accepted') setConsented(true);
    };
    window.addEventListener(CONSENT_EVENT, handler);
    return () => window.removeEventListener(CONSENT_EVENT, handler);
  }, []);

  // Load Yandex Maps when consented
  useEffect(() => {
    if (!consented || mapLoaded) return;

    if (document.getElementById('yandex-maps-script')) {
      // Script already in DOM — just init
      initMap();
      return;
    }

    const script = document.createElement('script');
    script.id = 'yandex-maps-script';
    script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=suggest_apikey';
    script.async = true;
    script.onload = initMap;
    document.head.appendChild(script);

    function initMap() {
      if (!window.ymaps || !mapRef.current) return;
      window.ymaps.ready(() => {
        if (!mapRef.current) return;
        const map = new window.ymaps.Map(mapRef.current, {
          center: [52.604024, 39.585799],
          zoom: 17,
          controls: ['zoomControl', 'fullscreenControl']
        });
        const placemark = new window.ymaps.Placemark(
          [52.604024, 39.585799],
          {
            hintContent: 'ЮК «Де-Юре»',
            balloonContent: '<b>ООО ЮК «Де-Юре»</b><br/>г. Липецк, ул. Советская, д. 35, офис 213 (2 этаж)'
          },
          { preset: 'islands#blueStretchyIcon', iconColor: '#17324D' }
        );
        map.geoObjects.add(placemark);
        map.behaviors.disable('scrollZoom');
        setMapLoaded(true);
      });
    }
  }, [consented, mapLoaded]);

  const handleShowMap = () => {
    setConsent('accepted');
    setConsented(true);
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        minHeight: '400px',
        position: 'relative',
        background: '#e5e3df',
        border: '1px solid rgba(23, 50, 77, 0.1)'
      }}
      title="Карта проезда к офису «Де-Юре»"
    >
      {/* Map container — rendered but hidden until consented */}
      <div
        ref={mapRef}
        style={{
          width: '100%',
          height: '100%',
          minHeight: '400px',
          display: consented ? 'block' : 'none'
        }}
      />

      {/* Placeholder — shown until consent */}
      {!consented && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            background: 'linear-gradient(135deg, #f0ede9 0%, #e8e4de 100%)',
            padding: '24px'
          }}
        >
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(23,50,77,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 6px', fontSize: '15px', fontWeight: 600, color: 'var(--color-deep-blue, #10273B)' }}>
              Карта не загружена
            </p>
            <p style={{ margin: '0 0 16px', fontSize: '13px', color: 'rgba(23,50,77,0.55)', maxWidth: '280px', lineHeight: 1.5 }}>
              Яндекс Карта использует сторонние cookie. Нажмите, чтобы загрузить карту и принять функциональные cookie.
            </p>
            <button
              onClick={handleShowMap}
              style={{
                padding: '10px 24px',
                fontSize: '14px',
                fontWeight: 600,
                background: 'var(--color-deep-blue, #10273B)',
                color: '#ffffff',
                border: '1px solid #9B7E55',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'opacity 0.2s'
              }}
              onMouseOver={e => (e.currentTarget.style.opacity = '0.88')}
              onMouseOut={e => (e.currentTarget.style.opacity = '1')}
            >
              Показать карту
            </button>
          </div>
          <a
            href="https://yandex.ru/maps/?pt=39.585799,52.604024&z=17&text=г.+Липецк,+ул.+Советская,+д.+35"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '13px', color: 'rgba(23,50,77,0.5)', textDecoration: 'underline' }}
          >
            Открыть на Яндекс Картах →
          </a>
        </div>
      )}
    </div>
  );
}

// Global declaration for ymaps
declare global {
  interface Window {
    ymaps: any;
  }
}
