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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Merriweather:wght@400;700&display=swap" rel="stylesheet" />
        {/* Yandex.Metrika counter */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();
                  for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=111927249', 'ym');

              ym(111927249, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
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

