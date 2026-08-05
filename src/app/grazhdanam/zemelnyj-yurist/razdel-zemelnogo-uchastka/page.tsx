import React from 'react';
import RazdelUchastkaClient from './RazdelUchastkaClient';

export const metadata = {
  title: 'Раздел земельного участка в Липецке | Де-Юре',
  description: 'Проверим юридическую и техническую делимость земельного участка в Липецке, подготовим соглашение или судебное дело и сопроводим кадастровый учёт.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/zemelnyj-yurist/razdel-zemelnogo-uchastka/',
  },
  openGraph: {
    title: 'Раздел земельного участка в Липецке | Де-Юре',
    description: 'Проверим юридическую и техническую делимость земельного участка в Липецке, подготовим соглашение или судебное дело и сопроводим кадастровый учёт.',
    url: 'https://dejure-help.ru/grazhdanam/zemelnyj-yurist/razdel-zemelnogo-uchastka/',
    siteName: 'ЮК «Де-Юре»',
    images: [{ url: 'https://matilda081133-sketch.github.io/-/images/og_zemelnyj.png', width: 1200, height: 630 }],
    locale: 'ru_RU',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Раздел земельного участка в Липецке | Де-Юре',
    description: 'Проверим юридическую и техническую делимость земельного участка в Липецке, подготовим соглашение или судебное дело и сопроводим кадастровый учёт.',
    images: ['https://matilda081133-sketch.github.io/-/images/og_zemelnyj.png']
  }
};

export default function RazdelUchastkaPage() {
  return <RazdelUchastkaClient />;
}
