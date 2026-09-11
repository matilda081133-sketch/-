import React from 'react';
import { Metadata } from 'next';
import ZhilishchnyjYuristClient from './ZhilishchnyjYuristClient';

export const metadata: Metadata = {
  title: 'Жилищный юрист в Липецке — помощь по жилищным спорам | Де-Юре',
  description: 'Помощь жилищного юриста в Липецке: выписка и вселение, споры с УК и соседями, залив квартиры, оплата ЖКУ, приватизация и перепланировка.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/'
  },
  openGraph: {
    title: 'Жилищный юрист в Липецке | Де-Юре',
    description: 'Определим правовой режим жилья, оценим документы и предложим порядок действий для досудебного или судебного решения жилищного спора.',
    url: 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/',
    siteName: 'ЮК «Де-Юре»',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/housing-lawyer-lipetsk-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Жилищный юрист в Липецке — ЮК Де-Юре'
      }
    ],
    locale: 'ru_RU',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Жилищный юрист в Липецке | Де-Юре',
    description: 'Определим правовой режим жилья, оценим документы и предложим порядок действий для досудебного или судебного решения жилищного спора.',
    images: ['https://dejure-help.ru/images/og/housing-lawyer-lipetsk-og.jpg']
  }
};

export default function ZhilishchnyjYuristPage() {
  return <ZhilishchnyjYuristClient />;
}
