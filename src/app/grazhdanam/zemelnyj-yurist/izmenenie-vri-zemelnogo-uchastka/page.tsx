import React from 'react';
import IzmenenieVriClient from './IzmenenieVriClient';

export const metadata = {
  title: 'Изменение ВРИ земельного участка в Липецке | Де-Юре',
  description: 'Проверим территориальную зону, регламент и ограничения, определим порядок изменения ВРИ земельного участка в Липецке и сопроводим процедуру или обжалование.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/zemelnyj-yurist/izmenenie-vri-zemelnogo-uchastka/',
  },
  openGraph: {
    title: 'Изменение ВРИ земельного участка в Липецке | Де-Юре',
    description: 'Проверим территориальную зону, регламент и ограничения, определим порядок изменения ВРИ земельного участка в Липецке и сопроводим процедуру или обжалование.',
    url: 'https://dejure-help.ru/grazhdanam/zemelnyj-yurist/izmenenie-vri-zemelnogo-uchastka/',
    siteName: 'ЮК «Де-Юре»',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/land-permitted-use-change-og.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Изменение ВРИ земельного участка в Липецке — ЮК «Де-Юре»'
      }
    ],
    locale: 'ru_RU',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Изменение ВРИ земельного участка в Липецке | Де-Юре',
    description: 'Проверим территориальную зону, регламент и ограничения, определим порядок изменения ВРИ земельного участка в Липецке и сопроводим процедуру или обжалование.',
    images: ['https://dejure-help.ru/images/og/land-permitted-use-change-og.jpg']
  }
};

export default function IzmenenieVriPage() {
  return <IzmenenieVriClient />;
}
