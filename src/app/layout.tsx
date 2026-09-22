import type { Metadata } from 'next';
import './globals.css';
import CookieConsent from '@/components/CookieConsent';
import ConsentManager from '@/components/ConsentManager';

export const metadata: Metadata = {
  title: '«Де-Юре» | Юридическая компания в Липецке',
  description: 'Юридические услуги для граждан и бизнеса в Липецке. Более 10 лет опыта.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Merriweather:wght@400;700&display=swap" rel="stylesheet" />
        {/* Yandex.Metrika counter with deferred script load to prevent TBT blocking */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              window.ym = window.ym || function(){ (window.ym.a = window.ym.a || []).push(arguments); };
              window.ym.l = 1 * new Date();
              window.ym(111927249, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});

              (function() {
                var loaded = false;
                function loadMetrika() {
                  if (loaded) return;
                  loaded = true;
                  var k = document.createElement('script');
                  k.async = true;
                  k.src = 'https://mc.yandex.ru/metrika/tag.js?id=111927249';
                  var a = document.getElementsByTagName('script')[0];
                  if (a && a.parentNode) {
                    a.parentNode.insertBefore(k, a);
                  } else {
                    document.head.appendChild(k);
                  }
                }
                var events = ['scroll', 'touchstart', 'pointerdown', 'keydown'];
                function onUserInteract() {
                  loadMetrika();
                  events.forEach(function(e) { window.removeEventListener(e, onUserInteract); });
                }
                events.forEach(function(e) { window.addEventListener(e, onUserInteract, { passive: true }); });
                if ('requestIdleCallback' in window) {
                  requestIdleCallback(function() { setTimeout(loadMetrika, 7000); });
                } else {
                  setTimeout(loadMetrika, 7000);
                }
              })();
            `,
          }}
        />
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/111927249" style={{ position: 'absolute', left: '-9999px' }} alt="" />
          </div>
        </noscript>
        {/* /Yandex.Metrika counter */}
      </head>
      <body>
        {children}
        <CookieConsent />
        <ConsentManager />
      </body>
    </html>
  );
}

