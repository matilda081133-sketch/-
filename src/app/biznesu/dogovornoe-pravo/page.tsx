import React from 'react';
import type { Metadata } from 'next';
import DogovornoePravoClient from './DogovornoePravoClient';

export const metadata: Metadata = {
  title: 'Договорный юрист для бизнеса в Липецке — услуги по договорам | Де-Юре',
  description:
    'Договорный юрист для бизнеса в Липецке: разработка и экспертиза договоров, аудит договорной работы, урегулирование договорных споров. Изучим задачу и предложим формат помощи.',
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/dogovornoe-pravo/'
  },
  openGraph: {
    title: 'Договорный юрист для бизнеса — Де-Юре',
    description:
      'Разработка и проверка договоров, аудит договорной работы и защита бизнеса в спорах с контрагентами.',
    url: 'https://dejure-help.ru/biznesu/dogovornoe-pravo/',
    siteName: 'ЮК «Де-Юре»',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/contract-law-b2b-lipetsk-og.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Договорный юрист для бизнеса в Липецке — Де-Юре'
      }
    ],
    locale: 'ru_RU',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Договорный юрист для бизнеса — Де-Юре',
    description:
      'Разработка и проверка договоров, аудит договорной работы и защита бизнеса в спорах с контрагентами.',
    images: ['https://dejure-help.ru/images/og/contract-law-b2b-lipetsk-og.jpg']
  }
};

export default function DogovornoePravoPage() {
  return <DogovornoePravoClient />;
}
