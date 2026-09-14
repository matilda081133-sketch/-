import React from 'react';
import RazdelUchastkaClient from './RazdelUchastkaClient';

export const metadata = {
  title: 'Раздел земельного участка в Липецке | Де-Юре',
  description: 'Проверим юридическую и техническую делимость земельного участка в Липецке, подготовим соглашение или судебное дело и сопроводим кадастровый учёт.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/zemelnyj-yurist/razdel-zemelnogo-uchastka/',
  },
  openGraph: {
    title: 'Раздел земельного участка в Липецке | Де-Юре',
    description: 'Проверим юридическую и техническую делимость земельного участка в Липецке, подготовим соглашение или судебное дело и сопроводим кадастровый учёт.',
    url: 'https://dejure-help.ru/grazhdanam/zemelnyj-yurist/razdel-zemelnogo-uchastka/',
    siteName: 'ЮК «Де-Юре»',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/land-division-share-og.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Раздел земельного участка в Липецке — ЮК «Де-Юре»'
      }
    ],
    locale: 'ru_RU',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Раздел земельного участка в Липецке | Де-Юре',
    description: 'Проверим юридическую и техническую делимость земельного участка в Липецке, подготовим соглашение или судебное дело и сопроводим кадастровый учёт.',
    images: ['https://dejure-help.ru/images/og/land-division-share-og.jpg']
  }
};

export default function RazdelUchastkaPage() {
  return <RazdelUchastkaClient />;
}
