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
        url: 'https://dejure-help.ru/images/og/apartment-flood-og.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Юрист по заливу квартиры в Липецке — ЮК «Де-Юре»'
      }
    ],
    locale: 'ru_RU',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://dejure-help.ru/images/og/apartment-flood-og.jpg']
  }
};

export default function ZalivPage() {
  return <ZalivClient />;
}
