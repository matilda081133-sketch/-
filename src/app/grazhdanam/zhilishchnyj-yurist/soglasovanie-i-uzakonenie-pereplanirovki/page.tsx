import React from 'react';
import { Metadata } from 'next';
import PereplanirovkaClient from './PereplanirovkaClient';

export const metadata: Metadata = {
  title: 'Узаконение перепланировки в Липецке под ключ | Де-Юре',
  description: 'Проверим допустимость перепланировки, организуем проект и технические документы, согласуем работы, приёмку и изменения ЕГРН. При необходимости — суд.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/soglasovanie-i-uzakonenie-pereplanirovki/'
  },
  openGraph: {
    title: 'Узаконение перепланировки в Липецке под ключ | Де-Юре',
    description: 'Проверим допустимость перепланировки, организуем проект и технические документы, согласуем работы, приёмку и изменения ЕГРН. При необходимости — суд.',
    url: 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/soglasovanie-i-uzakonenie-pereplanirovki/',
    siteName: 'ЮК «Де-Юре»',
    images: [
      {
        url: 'https://dejure-help.ru/images/housing_law_hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Узаконение и согласование перепланировки в Липецке'
      }
    ],
    locale: 'ru_RU',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Узаконение перепланировки в Липецке под ключ | Де-Юре',
    description: 'Проверим допустимость перепланировки, организуем проект и технические документы, согласуем работы, приёмку и изменения ЕГРН. При необходимости — суд.',
    images: ['https://dejure-help.ru/images/housing_law_hero.jpg']
  }
};

export default function PereplanirovkaPage() {
  return <PereplanirovkaClient />;
}
