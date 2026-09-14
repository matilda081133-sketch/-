import React from 'react';
import VzyskanieNeustojkiDDUClient from './VzyskanieNeustojkiDDUClient';

export const metadata = {
  title: 'Взыскание неустойки по ДДУ в Липецке | Де-Юре',
  description: 'Взыскание неустойки с застройщика по ДДУ в Липецке: проверим период просрочки, рассчитаем требования, подготовим претензию, иск и исполнение.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/vzyskanie-neustojki-po-ddu/'
  },
  openGraph: {
    title: 'Взыскание неустойки по ДДУ в Липецке | Де-Юре',
    description: 'Взыскание неустойки с застройщика по ДДУ в Липецке: точный расчёт по периодам с учётом мораториев, претензия, суд и фактическое исполнение.',
    url: 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/vzyskanie-neustojki-po-ddu/',
    siteName: 'ЮК «Де-Юре»',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/ddu-penalty-recovery-og.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Взыскание неустойки по ДДУ в Липецке — ЮК «Де-Юре»'
      }
    ],
    locale: 'ru_RU',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Взыскание неустойки по ДДУ в Липецке | Де-Юре',
    description: 'Взыскание неустойки с застройщика по ДДУ в Липецке: проверим период просрочки, рассчитаем требования, подготовим претензию, иск и исполнение.',
    images: ['https://dejure-help.ru/images/og/ddu-penalty-recovery-og.jpg']
  }
};

export default function VzyskanieNeustojkiPage() {
  return <VzyskanieNeustojkiDDUClient />;
}
