import React from 'react';
import { Metadata } from 'next';
import RazdelClient from './RazdelClient';

export const metadata: Metadata = {
  title: 'Раздел лицевых счетов и оплаты ЖКУ в Липецке — юрист | Де-Юре',
  description: 'Определим порядок оплаты ЖКУ между собственниками или жильцами: соглашение, отдельные платёжные документы, иск и защита по долгу в Липецке.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/razdel-licevyh-schetov-i-poryadka-oplaty-zhku/'
  },
  openGraph: {
    title: 'Раздел лицевых счетов и оплаты ЖКУ в Липецке — юрист | Де-Юре',
    description: 'Определим порядок оплаты ЖКУ между собственниками или жильцами: соглашение, отдельные платёжные документы, иск и защита по долгу в Липецке.',
    url: 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/razdel-licevyh-schetov-i-poryadka-oplaty-zhku/',
    siteName: 'ЮК «Де-Юре»',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/utility-payment-shares-og.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Раздел лицевых счетов и порядка оплаты ЖКУ в Липецке — ЮК «Де-Юре»'
      }
    ],
    locale: 'ru_RU',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://dejure-help.ru/images/og/utility-payment-shares-og.jpg']
  }
};

export default function RazdelPage() {
  return <RazdelClient />;
}
