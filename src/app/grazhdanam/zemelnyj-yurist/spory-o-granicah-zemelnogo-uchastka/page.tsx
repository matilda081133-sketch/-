import React from 'react';
import SporyOGranicahClient from './SporyOGranicahClient';

export const metadata = {
  title: 'Юрист по спорам о границах земельного участка в Липецке | Де-Юре',
  description: 'Юридическая помощь при наложении границ, реестровой ошибке, захвате части участка и споре с соседом в Липецке. Анализ документов, переговоры и представительство в суде.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/zemelnyj-yurist/spory-o-granicah-zemelnogo-uchastka/'
  },
  openGraph: {
    title: 'Юрист по спорам о границах земельного участка в Липецке | Де-Юре',
    description: 'Юридическая помощь при наложении границ, реестровой ошибке, захвате части участка и споре с соседом в Липецке. Анализ документов, переговоры и представительство в суде.',
    url: 'https://dejure-help.ru/grazhdanam/zemelnyj-yurist/spory-o-granicah-zemelnogo-uchastka/',
    siteName: 'ЮК «Де-Юре»',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/land-boundary-disputes-og.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Споры о границах земельного участка в Липецке — ЮК «Де-Юре»'
      }
    ],
    locale: 'ru_RU',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Юрист по спорам о границах земельного участка в Липецке | Де-Юре',
    description: 'Юридическая помощь при наложении границ, реестровой ошибке, захвате части участка и споре с соседом в Липецке.',
    images: ['https://dejure-help.ru/images/og/land-boundary-disputes-og.jpg']
  }
};

export default function SporyOGranicahPage() {
  return <SporyOGranicahClient />;
}
