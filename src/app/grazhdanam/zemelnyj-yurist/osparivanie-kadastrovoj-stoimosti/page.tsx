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
    images: [{ url: 'https://matilda081133-sketch.github.io/images/og_zemelnyj.png', width: 1200, height: 630 }],
    locale: 'ru_RU',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Оспаривание кадастровой стоимости в Липецке | Де-Юре',
    description: 'Оценим экономический смысл пересмотра кадастровой стоимости в Липецкой области, организуем рыночную оценку и сопроводим внесудебную и судебную процедуру.',
    images: ['https://matilda081133-sketch.github.io/images/og_zemelnyj.png']
  }
};

export default function OsparivanieKadastrovojStoimostiPage() {
  return <OsparivanieKadastrovojStoimostiClient />;
}
