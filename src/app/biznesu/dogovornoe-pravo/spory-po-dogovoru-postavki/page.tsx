import React from 'react';
import type { Metadata } from 'next';
import SporyPostavkaClient from './SporyPostavkaClient';

export const metadata: Metadata = {
  title: 'Споры по договору поставки в Липецке | Де-Юре',
  description:
    'Поможем поставщику или покупателю в споре по договору поставки: оценим документы, подготовим претензию или защиту и представим бизнес в арбитражном суде.',
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/dogovornoe-pravo/spory-po-dogovoru-postavki/'
  },
  openGraph: {
    title: 'Споры по договору поставки в Липецке | Де-Юре',
    description:
      'Поможем поставщику или покупателю в споре по договору поставки: оценим документы, подготовим претензию или защиту и представим бизнес в арбитражном суде.',
    url: 'https://dejure-help.ru/biznesu/dogovornoe-pravo/spory-po-dogovoru-postavki/',
    siteName: 'ЮК «Де-Юре»',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/contract-law-b2b-lipetsk-og.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Юрист по спорам из договоров поставки в Липецке — Де-Юре'
      }
    ],
    locale: 'ru_RU',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Споры по договору поставки в Липецке | Де-Юре',
    description:
      'Поможем поставщику или покупателю в споре по договору поставки: оценим документы, подготовим претензию или защиту и представим бизнес в арбитражном суде.',
    images: ['https://dejure-help.ru/images/og/contract-law-b2b-lipetsk-og.jpg']
  }
};

export default function SporyPostavkaPage() {
  return <SporyPostavkaClient />;
}
