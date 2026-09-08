import React from 'react';
import { Metadata } from 'next';
import ZalivClient from './ZalivClient';

export const metadata: Metadata = {
  title: 'Залив квартиры в Липецке — взыскание ущерба и защита | Де-Юре',
  description: 'Поможем зафиксировать залив, установить ответственного, оценить и взыскать ущерб или защититься от завышенных требований. Юристы в Липецке.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/zaliv-kvartiry/'
  },
  openGraph: {
    title: 'Залив квартиры в Липецке — взыскание ущерба и защита | Де-Юре',
    description: 'Поможем зафиксировать залив, установить ответственного, оценить и взыскать ущерб или защититься от завышенных требований. Юристы в Липецке.',
    url: 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/zaliv-kvartiry/',
    siteName: 'ЮК «Де-Юре»',
    images: [
      {
        url: 'https://dejure-help.ru/images/housing_law_hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Залив квартиры в Липецке'
      }
    ],
    locale: 'ru_RU',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Залив квартиры в Липецке — взыскание ущерба и защита | Де-Юре',
    description: 'Поможем зафиксировать залив, установить ответственного, оценить и взыскать ущерб или защититься от завышенных требований. Юристы в Липецке.',
    images: ['https://dejure-help.ru/images/housing_law_hero.jpg']
  }
};

export default function ZalivPage() {
  return <ZalivClient />;
}
