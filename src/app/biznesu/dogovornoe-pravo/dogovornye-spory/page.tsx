import React from 'react';
import type { Metadata } from 'next';
import DogovornyeSporyClient from './DogovornyeSporyClient';

export const metadata: Metadata = {
  title: 'Юрист по договорным спорам в Липецке | Де-Юре',
  description:
    'Поможем разрешить договорный спор: оценим позицию, подготовим претензию или ответ, проведём переговоры и представим интересы бизнеса в арбитражном суде.',
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/dogovornoe-pravo/dogovornye-spory/'
  },
  openGraph: {
    title: 'Договорные споры для бизнеса — Де-Юре',
    description:
      'Защита интересов компании в переговорах, претензионной работе и арбитражном процессе по договору.',
    url: 'https://dejure-help.ru/biznesu/dogovornoe-pravo/dogovornye-spory/',
    siteName: 'ЮК «Де-Юре»',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/contract-law-b2b-lipetsk-og.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Юрист по договорным спорам для бизнеса — Де-Юре'
      }
    ],
    locale: 'ru_RU',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Договорные споры для бизнеса — Де-Юре',
    description:
      'Защита интересов компании в переговорах, претензионной работе и арбитражном процессе по договору.',
    images: ['https://dejure-help.ru/images/og/contract-law-b2b-lipetsk-og.jpg']
  }
};

export default function DogovornyeSporyPage() {
  return <DogovornyeSporyClient />;
}
