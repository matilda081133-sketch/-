import React from 'react';
import OsparivanieSdelokClient from './OsparivanieSdelokClient';

export const metadata = {
  title: 'Оспаривание сделок с недвижимостью в Липецке | Де-Юре',
  description: 'Помощь в оспаривании сделок с недвижимостью в Липецке: оценим основания и срок, подготовим иск или защиту, добьёмся применимых последствий.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/osparivanie-sdelok-s-nedvizhimostyu/'
  },
  openGraph: {
    title: 'Оспаривание сделок с недвижимостью в Липецке | Де-Юре',
    description: 'Признание недействительными договоров купли-продажи, дарения и ренты в Липецке: защита добросовестных покупателей, возврат квартир, обеспечительные меры.',
    url: 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/osparivanie-sdelok-s-nedvizhimostyu/',
    siteName: 'ЮК «Де-Юре»',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/real-estate-transaction-dispute-og.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Оспаривание сделок с недвижимостью в Липецке — ЮК «Де-Юре»'
      }
    ],
    locale: 'ru_RU',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Оспаривание сделок с недвижимостью в Липецке | Де-Юре',
    description: 'Помощь в оспаривании сделок с недвижимостью в Липецке: оценим основания и срок, подготовим иск или защиту, добьёмся применимых последствий.',
    images: ['https://dejure-help.ru/images/og/real-estate-transaction-dispute-og.jpg']
  }
};

export default function OsparivanieSdelokPage() {
  return <OsparivanieSdelokClient />;
}
