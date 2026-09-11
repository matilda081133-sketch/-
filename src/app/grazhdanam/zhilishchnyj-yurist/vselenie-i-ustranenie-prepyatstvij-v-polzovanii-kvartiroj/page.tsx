import React from 'react';
import { Metadata } from 'next';
import VselenieClient from './VselenieClient';

export const metadata: Metadata = {
  title: 'Вселение и порядок пользования квартирой в Липецке — юрист | Де-Юре',
  description: 'Поможем получить доступ к квартире, прекратить препятствия или определить порядок пользования. Оценим право, доказательства и судебную перспективу. Липецк.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/vselenie-i-ustranenie-prepyatstvij-v-polzovanii-kvartiroj/'
  },
  openGraph: {
    title: 'Вселение и порядок пользования квартирой в Липецке — юрист | Де-Юре',
    description: 'Поможем получить доступ к квартире, прекратить препятствия или определить порядок пользования. Оценим право, доказательства и судебную перспективу. Липецк.',
    url: 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/vselenie-i-ustranenie-prepyatstvij-v-polzovanii-kvartiroj/',
    siteName: 'ЮК «Де-Юре»',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/apartment-access-og.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Вселение и устранение препятствий в Липецке — ЮК «Де-Юре»'
      }
    ],
    locale: 'ru_RU',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://dejure-help.ru/images/og/apartment-access-og.jpg']
  }
};

export default function VseleniePage() {
  return <VselenieClient />;
}
