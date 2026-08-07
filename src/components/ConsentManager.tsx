'use client';

import { useEffect } from 'react';
import { isAccepted, CONSENT_EVENT, ConsentDecision } from '@/lib/cookieConsent';

/**
 * ConsentManager — client component that conditionally loads analytics scripts.
 *
 * On mount:   if consent = accepted → inject all analytics scripts immediately.
 * On event:   if user just accepted  → inject scripts without page reload.
 *
 * Scripts are guarded by `window.__deJureAnalyticsLoaded` flag so they are
 * never injected twice even if the component re-renders.
 *
 * When analytics accounts are ready, fill in the real IDs below:
 *   - METRIKA_ID  – Yandex Metrika counter number
 *   - ROISTAT_ID  – Roistat project number
 *
 * Until IDs are filled in, this module is a no-op (scripts are never injected).
 */

const METRIKA_ID = ''; // e.g. '12345678' — fill when ready
const ROISTAT_ID = ''; // e.g. '12345'    — fill when ready

function loadAnalytics() {
  if (typeof window === 'undefined') return;
  if ((window as Window & { __deJureAnalyticsLoaded?: boolean }).__deJureAnalyticsLoaded) return;
  (window as Window & { __deJureAnalyticsLoaded?: boolean }).__deJureAnalyticsLoaded = true;

  // ── Yandex Metrika + Webvisor ──────────────────────────────────────────────
  if (METRIKA_ID) {
    const ym = document.createElement('script');
    ym.type = 'text/javascript';
    ym.innerHTML = `
      (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();
      for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}
      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
      (window,document,'script','https://mc.yandex.ru/metrika/tag.js','ym');
      ym(${METRIKA_ID},'init',{clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:true,ecommerce:'dataLayer'});
    `;
    document.head.appendChild(ym);

    const noscript = document.createElement('noscript');
    noscript.innerHTML = `<div><img src="https://mc.yandex.ru/watch/${METRIKA_ID}" style="position:absolute;left:-9999px;" alt=""/></div>`;
    document.body.appendChild(noscript);
  }

  // ── Roistat ────────────────────────────────────────────────────────────────
  if (ROISTAT_ID) {
    const rs = document.createElement('script');
    rs.innerHTML = `
      (function(r,o,i,s,t,a){r[t]=r[t]||function(){(r[t].q=r[t].q||[]).push(arguments)};
      a=o.createElement(i);a.async=1;a.src=s;
      o.getElementsByTagName(i)[0].parentNode.insertBefore(a,o.getElementsByTagName(i)[0]);
      })(window,document,'script','https://cdn.roistat.com/integration/loader.js','roistat');
      roistat('init',{projectId:'${ROISTAT_ID}'});
    `;
    document.head.appendChild(rs);
  }

  // ── VK Pixel (add when account is ready) ──────────────────────────────────
  // if (VK_PIXEL_ID) { ... }
}

export default function ConsentManager() {
  useEffect(() => {
    // Check on mount
    if (isAccepted()) {
      loadAnalytics();
    }

    // React to future consent changes in this session
    const handler = (e: Event) => {
      const decision = (e as CustomEvent<{ decision: ConsentDecision }>).detail?.decision;
      if (decision === 'accepted') {
        loadAnalytics();
      }
    };

    window.addEventListener(CONSENT_EVENT, handler);
    return () => window.removeEventListener(CONSENT_EVENT, handler);
  }, []);

  return null; // renders nothing
}
