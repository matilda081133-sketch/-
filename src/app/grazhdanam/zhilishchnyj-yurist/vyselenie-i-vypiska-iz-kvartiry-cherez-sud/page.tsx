import React from 'react';
import { Metadata } from 'next';
import VyselenieClient from './VyselenieClient';

export const metadata: Metadata = {
  title: 'Выселение и выписка из квартиры через суд в Липецке — юрист | Де-Юре',
  description: 'Поможем выписать и выселить человека через суд или защититься от необоснованного иска. Оценим право пользования, доказательства и риски. Липецк.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/vyselenie-i-vypiska-iz-kvartiry-cherez-sud/'
  },
  openGraph: {
    title: 'Выселение и выписка из квартиры через суд в Липецке — юрист | Де-Юре',
    description: 'Поможем выписать и выселить человека через суд или защититься от необоснованного иска. Оценим право пользования, доказательства и риски. Липецк.',
    url: 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/vyselenie-i-vypiska-iz-kvartiry-cherez-sud/',
    siteName: 'ЮК «Де-Юре»',
    images: [
      {
        url: 'https://dejure-help.ru/images/housing_law_hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Выселение и выписка из квартиры через суд в Липецке'
      }
    ],
    locale: 'ru_RU',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Выселение и выписка из квартиры через суд в Липецке — юрист | Де-Юре',
    description: 'Поможем выписать и выселить человека через суд или защититься от необоснованного иска. Оценим право пользования, доказательства и риски. Липецк.',
    images: ['https://dejure-help.ru/images/housing_law_hero.jpg']
  }
};

export default function VyseleniePage() {
  return <VyselenieClient />;
}
