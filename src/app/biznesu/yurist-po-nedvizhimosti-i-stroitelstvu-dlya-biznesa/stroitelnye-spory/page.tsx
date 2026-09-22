import React from 'react';
import type { Metadata } from 'next';
import StroitelnyeSporyClient from './StroitelnyeSporyClient';

export const metadata: Metadata = {
  title: 'Строительные споры: юрист для подрядчика и заказчика в Липецке | Де-Юре',
  description: 'Юрист по строительным спорам в Липецке: неоплата и приёмка работ, КС-2/КС-3, недостатки, сроки, неустойка, возврат аванса, экспертиза, претензия и арбитражный суд. 📞 +7 (4742) 20-15-25.',
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/stroitelnye-spory/'
  },
  openGraph: {
    title: 'Строительные споры: юрист для подрядчика и заказчика в Липецке | Де-Юре',
    description: 'Юрист по строительным спорам в Липецке: неоплата и приёмка работ, КС-2/КС-3, недостатки, сроки, неустойка, возврат аванса, экспертиза, претензия и арбитражный суд. 📞 +7 (4742) 20-15-25.',
    url: 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/stroitelnye-spory/',
    siteName: 'ЮК «Де-Юре»',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/real-estate-b2b-lipetsk-og.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Юрист по строительным спорам в Липецке — Де-Юре'
      }
    ],
    locale: 'ru_RU',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Строительные споры: юрист для подрядчика и заказчика в Липецке | Де-Юре',
    description: 'Юрист по строительным спорам в Липецке: неоплата и приёмка работ, КС-2/КС-3, недостатки, сроки, неустойка, возврат аванса, экспертиза, претензия и арбитражный суд. 📞 +7 (4742) 20-15-25.',
    images: ['https://dejure-help.ru/images/og/real-estate-b2b-lipetsk-og.jpg']
  }
};

export default function StroitelnyeSporyPage() {
  return <StroitelnyeSporyClient />;
}
