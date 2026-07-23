"use client";

import React, { useEffect, useRef } from 'react';

export default function MapWidget() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Prevent multiple initializations
    if (document.getElementById('yandex-maps-script')) return;

    const script = document.createElement('script');
    script.id = 'yandex-maps-script';
    script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=suggest_apikey'; 
    script.async = true;
    
    script.onload = () => {
      if (window.ymaps) {
        window.ymaps.ready(() => {
          if (!mapRef.current) return;
          
          const map = new window.ymaps.Map(mapRef.current, {
            center: [52.610220, 39.598857], // Липецк, ул. Советская, 35
            zoom: 16,
            controls: ['zoomControl', 'fullscreenControl']
          });

          // Custom Placemark
          const placemark = new window.ymaps.Placemark(
            [52.610220, 39.598857],
            {
              hintContent: 'ООО «Де-Юре»',
              balloonContent: '<b>ООО «Де-Юре»</b><br/>г. Липецк, ул. Советская, д. 35'
            },
            {
              preset: 'islands#blueStretchyIcon',
              iconColor: '#17324D' // var(--color-deep-blue)
            }
          );

          map.geoObjects.add(placemark);
          
          // Disable scroll zoom
          map.behaviors.disable('scrollZoom');
        });
      }
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup map if component unmounts
      if (mapRef.current) {
        mapRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div 
      ref={mapRef} 
      style={{ width: '100%', height: '480px', background: '#e5e3df', position: 'relative', border: '1px solid rgba(23, 50, 77, 0.1)' }}
      title="Карта проезда к офису Де-Юре"
    />
  );
}

// Global declaration for ymaps
declare global {
  interface Window {
    ymaps: any;
  }
}
