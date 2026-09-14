import React from 'react';
import NedostatkiKvartiryClient from './NedostatkiKvartiryClient';

export const metadata = {
  title: 'Недостатки квартиры от застройщика — взыскание расходов в Липецке | Де-Юре',
  description: 'Помощь при недостатках квартиры от застройщика в Липецке: оценим документы и дефекты, подготовим требование, взыщем расходы или уменьшение цены.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/nedostatki-kvartiry-i-vzyskanie-rashodov/'
  },
  openGraph: {
    title: 'Недостатки квартиры от застройщика в Липецке | Де-Юре',
    description: 'Взыскание компенсации за строительные дефекты новостройки в Липецке: независимая строительная экспертиза, досудебная претензия и судебное взыскание.',
    url: 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/nedostatki-kvartiry-i-vzyskanie-rashodov/',
    siteName: 'ЮК «Де-Юре»',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/apartment-defects-damages-og.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Недостатки квартиры от застройщика в Липецке — ЮК «Де-Юре»'
      }
    ],
    locale: 'ru_RU',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Недостатки квартиры от застройщика — взыскание расходов в Липецке | Де-Юре',
    description: 'Помощь при недостатках квартиры от застройщика в Липецке: оценим документы и дефекты, подготовим требование, взыщем расходы или уменьшение цены.',
    images: ['https://dejure-help.ru/images/og/apartment-defects-damages-og.jpg']
  }
};

export default function NedostatkiKvartiryPage() {
  return <NedostatkiKvartiryClient />;
}
