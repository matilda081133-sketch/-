import type { Metadata } from 'next';
import { Inter, Merriweather } from 'next/font/google';
import './globals.css';
import CookieConsent from '@/components/CookieConsent';
import ConsentManager from '@/components/ConsentManager';

const inter = Inter({
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
});

const merriweather = Merriweather({
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  variable: '--font-serif',
  weight: ['400', '700'],
});

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
    <html lang="ru" className={`${inter.variable} ${merriweather.variable}`}>
      <head>
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
                var events = ['scroll', 'touchstart', 'pointerdown', 'mousemove', 'keydown'];
                function onUserInteract() {
                  loadMetrika();
                  events.forEach(function(e) { window.removeEventListener(e, onUserInteract, { passive: true }); });
                }
                events.forEach(function(e) { window.addEventListener(e, onUserInteract, { passive: true }); });
                if ('requestIdleCallback' in window) {
                  requestIdleCallback(function() { setTimeout(loadMetrika, 3500); });
                } else {
                  setTimeout(loadMetrika, 3500);
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

