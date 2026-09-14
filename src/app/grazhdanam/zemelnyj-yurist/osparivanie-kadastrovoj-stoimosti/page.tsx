import React from 'react';
import OsparivanieKadastrovojStoimostiClient from './OsparivanieKadastrovojStoimostiClient';

export const metadata = {
  title: 'Оспаривание кадастровой стоимости в Липецке | Де-Юре',
  description: 'Оценим экономический смысл пересмотра кадастровой стоимости в Липецкой области, организуем рыночную оценку и сопроводим внесудебную и судебную процедуру.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/zemelnyj-yurist/osparivanie-kadastrovoj-stoimosti/',
  },
  openGraph: {
    title: 'Оспаривание кадастровой стоимости в Липецке | Де-Юре',
    description: 'Оценим экономический смысл пересмотра кадастровой стоимости в Липецкой области, организуем рыночную оценку и сопроводим внесудебную и судебную процедуру.',
    url: 'https://dejure-help.ru/grazhdanam/zemelnyj-yurist/osparivanie-kadastrovoj-stoimosti/',
    siteName: 'ЮК «Де-Юре»',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/land-cadastral-cost-dispute-og.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Оспаривание кадастровой стоимости в Липецке — ЮК «Де-Юре»'
      }
    ],
    locale: 'ru_RU',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Оспаривание кадастровой стоимости в Липецке | Де-Юре',
    description: 'Оценим экономический смысл пересмотра кадастровой стоимости в Липецкой области, организуем рыночную оценку и сопроводим внесудебную и судебную процедуру.',
    images: ['https://dejure-help.ru/images/og/land-cadastral-cost-dispute-og.jpg']
  }
};

export default function OsparivanieKadastrovojStoimostiPage() {
  return <OsparivanieKadastrovojStoimostiClient />;
}
