import React from 'react';
import SporyOGranicahClient from './SporyOGranicahClient';

export const metadata = {
  title: 'Юрист по спорам о границах земельного участка в Липецке | Де-Юре',
  description: 'Юридическая помощь при наложении границ, реестровой ошибке, захвате части участка и споре с соседом в Липецке. Анализ документов, переговоры и представительство в суде.',
  alternates: {
    canonical: 'https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/spory-o-granicah-zemelnogo-uchastka/'
  },
  openGraph: {
    title: 'Юрист по спорам о границах земельного участка в Липецке | Де-Юре',
    description: 'Юридическая помощь при наложении границ, реестровой ошибке, захвате части участка и споре с соседом в Липецке. Анализ документов, переговоры и представительство в суде.',
    url: 'https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/spory-o-granicah-zemelnogo-uchastka/',
    siteName: 'ЮК «Де-Юре»',
    images: [
      {
        url: 'https://matilda081133-sketch.github.io/-/images/land_law_hero_pro.jpg',
        width: 1200,
        height: 630,
        alt: 'Юрист по спорам о границах земельного участка в Липецке'
      }
    ],
    locale: 'ru_RU',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Юрист по спорам о границах земельного участка в Липецке | Де-Юре',
    description: 'Юридическая помощь при наложении границ, реестровой ошибке, захвате части участка и споре с соседом в Липецке.',
    images: ['https://matilda081133-sketch.github.io/-/images/land_law_hero_pro.jpg']
  }
};

export default function SporyOGranicahPage() {
  return <SporyOGranicahClient />;
}
