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
    images: [{ url: 'https://matilda081133-sketch.github.io/-/images/og_zemelnyj.png', width: 1200, height: 630 }],
    locale: 'ru_RU',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Изменение ВРИ земельного участка в Липецке | Де-Юре',
    description: 'Проверим территориальную зону, регламент и ограничения, определим порядок изменения ВРИ земельного участка в Липецке и сопроводим процедуру или обжалование.',
    images: ['https://matilda081133-sketch.github.io/-/images/og_zemelnyj.png']
  }
};

export default function IzmenenieVriPage() {
  return <IzmenenieVriClient />;
}
