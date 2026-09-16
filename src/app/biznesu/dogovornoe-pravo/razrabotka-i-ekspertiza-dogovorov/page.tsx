import React from 'react';
import type { Metadata } from 'next';
import RazrabotkaEkspertizaClient from './RazrabotkaEkspertizaClient';

export const metadata: Metadata = {
  title: 'Разработка и экспертиза договоров для бизнеса в Липецке | Де-Юре',
  description:
    'Разработаем договор под задачу бизнеса или проверим проект контрагента: выявим риски, предложим правки, подготовим протокол разногласий. Работаем в Липецке и дистанционно.',
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/dogovornoe-pravo/razrabotka-i-ekspertiza-dogovorov/'
  },
  openGraph: {
    title: 'Разработка и экспертиза договоров для бизнеса — Де-Юре',
    description:
      'Подготовим договор под сделку, проверим условия и приложения, объясним риски и предложим рабочую редакцию.',
    url: 'https://dejure-help.ru/biznesu/dogovornoe-pravo/razrabotka-i-ekspertiza-dogovorov/',
    siteName: 'ЮК «Де-Юре»',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/real-estate-b2b-lipetsk-og.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Разработка и правовая экспертиза договоров для бизнеса — Де-Юре'
      }
    ],
    locale: 'ru_RU',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Разработка и экспертиза договоров для бизнеса — Де-Юре',
    description:
      'Подготовим договор под сделку, проверим условия и приложения, объясним риски и предложим рабочую редакцию.',
    images: ['https://dejure-help.ru/images/og/real-estate-b2b-lipetsk-og.jpg']
  }
};

export default function RazrabotkaEkspertizaPage() {
  return <RazrabotkaEkspertizaClient />;
}
