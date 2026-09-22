import React from 'react';
import type { Metadata } from 'next';
import SdelkiKommercheskayaClient from './SdelkiKommercheskayaClient';

export const metadata: Metadata = {
  title: 'Сопровождение сделок с коммерческой недвижимостью в Липецке | Де-Юре',
  description: 'Юридическое сопровождение покупки и продажи коммерческой недвижимости в Липецке: проверка объекта и контрагента, договор, расчёты, регистрация и передача. 📞 +7 (4742) 20-15-25.',
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/soprovozhdenie-sdelok-s-kommercheskoy-nedvizhimostyu/'
  },
  openGraph: {
    title: 'Сопровождение сделок с коммерческой недвижимостью в Липецке | Де-Юре',
    description: 'Юридическое сопровождение покупки и продажи коммерческой недвижимости в Липецке: проверка объекта и контрагента, договор, расчёты, регистрация и передача. 📞 +7 (4742) 20-15-25.',
    url: 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/soprovozhdenie-sdelok-s-kommercheskoy-nedvizhimostyu/',
    siteName: 'ЮК «Де-Юре»',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/real-estate-b2b-lipetsk-og.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Сопровождение сделок с коммерческой недвижимостью в Липецке — Де-Юре'
      }
    ],
    locale: 'ru_RU',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Сопровождение сделок с коммерческой недвижимостью в Липецке | Де-Юре',
    description: 'Юридическое сопровождение покупки и продажи коммерческой недвижимости в Липецке: проверка объекта и контрагента, договор, расчёты, регистрация и передача. 📞 +7 (4742) 20-15-25.',
    images: ['https://dejure-help.ru/images/og/real-estate-b2b-lipetsk-og.jpg']
  }
};

export default function SdelkiKommercheskayaPage() {
  return <SdelkiKommercheskayaClient />;
}
