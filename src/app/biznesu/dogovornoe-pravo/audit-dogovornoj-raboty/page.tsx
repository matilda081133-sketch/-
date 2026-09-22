import React from 'react';
import type { Metadata } from 'next';
import AuditDogovornojRabotyClient from './AuditDogovornojRabotyClient';

export const metadata: Metadata = {
  title: 'Аудит договорной работы компании в Липецке | Де-Юре',
  description: 'Проверим договоры, шаблоны и процесс работы с ними: выявим системные риски, узкие места согласования и контроля, подготовим отчёт и план изменений. 📞 +7 (4742) 20-15-25.',
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/dogovornoe-pravo/audit-dogovornoj-raboty/'
  },
  openGraph: {
    title: 'Аудит договорной работы компании — Де-Юре',
    description: 'Проверим договорную систему бизнеса и покажем, какие риски и процессы нужно исправлять в первую очередь. 📞 +7 (4742) 20-15-25.',
    url: 'https://dejure-help.ru/biznesu/dogovornoe-pravo/audit-dogovornoj-raboty/',
    siteName: 'ЮК «Де-Юре»',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/contract-law-b2b-lipetsk-og.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Аудит договорной работы компании — Де-Юре'
      }
    ],
    locale: 'ru_RU',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Аудит договорной работы компании — Де-Юре',
    description: 'Проверим договорную систему бизнеса и покажем, какие риски и процессы нужно исправлять в первую очередь. 📞 +7 (4742) 20-15-25.',
    images: ['https://dejure-help.ru/images/og/contract-law-b2b-lipetsk-og.jpg']
  }
};

export default function AuditDogovornojRabotyPage() {
  return <AuditDogovornojRabotyClient />;
}
