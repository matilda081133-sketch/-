import React from 'react';
import type { Metadata } from 'next';
import ArendaKommercheskayaClient from './ArendaKommercheskayaClient';

export const metadata: Metadata = {
  title: 'Юридическое сопровождение аренды коммерческой недвижимости в Липецке | Де-Юре',
  description:
    'Юрист по аренде коммерческой недвижимости в Липецке: проверка и подготовка договора, переговоры, регистрация, изменение условий, расторжение и возврат объекта.',
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/yuridicheskoe-soprovozhdenie-arendy-kommercheskoy-nedvizhimosti/'
  },
  openGraph: {
    title: 'Юридическое сопровождение аренды коммерческой недвижимости в Липецке | Де-Юре',
    description:
      'Юрист по аренде коммерческой недвижимости в Липецке: проверка и подготовка договора, переговоры, регистрация, изменение условий, расторжение и возврат объекта.',
    url: 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/yuridicheskoe-soprovozhdenie-arendy-kommercheskoy-nedvizhimosti/',
    siteName: 'ЮК «Де-Юре»',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/real-estate-b2b-lipetsk-og.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Юрист по аренде коммерческой недвижимости в Липецке — Де-Юре'
      }
    ],
    locale: 'ru_RU',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Юридическое сопровождение аренды коммерческой недвижимости в Липецке | Де-Юре',
    description:
      'Юрист по аренде коммерческой недвижимости в Липецке: проверка и подготовка договора, переговоры, регистрация, изменение условий, расторжение и возврат объекта.',
    images: ['https://dejure-help.ru/images/og/real-estate-b2b-lipetsk-og.jpg']
  }
};

export default function ArendaKommercheskayaPage() {
  return <ArendaKommercheskayaClient />;
}
