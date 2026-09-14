import React from 'react';
import SoprovozhdenieSdelokClient from './SoprovozhdenieSdelokClient';

export const metadata = {
  title: 'Сопровождение сделок с недвижимостью в Липецке | Де-Юре',
  description: 'Юридическое сопровождение покупки и продажи недвижимости в Липецке: проверка объекта и сторон, договор, безопасные расчёты, регистрация и приёмка.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/soprovozhdenie-sdelok-s-nedvizhimostyu/'
  },
  openGraph: {
    title: 'Сопровождение сделок с недвижимостью в Липецке | Де-Юре',
    description: 'Юридическое сопровождение покупки и продажи недвижимости в Липецке: проверка объекта и сторон, договор, безопасные расчёты, регистрация и приёмка.',
    url: 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/soprovozhdenie-sdelok-s-nedvizhimostyu/',
    siteName: 'ЮК «Де-Юре»',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/real-estate-transaction-support-og.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Сопровождение сделок с недвижимостью в Липецке — ЮК «Де-Юре»'
      }
    ],
    locale: 'ru_RU',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Сопровождение сделок с недвижимостью в Липецке | Де-Юре',
    description: 'Юридическое сопровождение покупки и продажи недвижимости в Липецке: проверка объекта и сторон, договор, безопасные расчёты, регистрация и приёмка.',
    images: ['https://dejure-help.ru/images/og/real-estate-transaction-support-og.jpg']
  }
};

export default function SoprovozhdenieSdelokPage() {
  return <SoprovozhdenieSdelokClient />;
}
