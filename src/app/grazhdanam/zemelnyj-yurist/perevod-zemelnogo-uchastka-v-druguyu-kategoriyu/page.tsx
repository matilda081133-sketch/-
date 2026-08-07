import React from 'react';
import PerevodKategoriiClient from './PerevodKategoriiClient';

export const metadata = {
  title: 'Перевод земельного участка в другую категорию в Липецке | Де-Юре',
  description: 'Проверим допустимость перевода земельного участка в другую категорию в Липецкой области, подготовим обоснование, ходатайство и сопроводим решение или обжалование.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/zemelnyj-yurist/perevod-zemelnogo-uchastka-v-druguyu-kategoriyu/',
  },
  openGraph: {
    title: 'Перевод земельного участка в другую категорию в Липецке | Де-Юре',
    description: 'Проверим допустимость перевода земельного участка в другую категорию в Липецкой области, подготовим обоснование, ходатайство и сопроводим решение или обжалование.',
    url: 'https://dejure-help.ru/grazhdanam/zemelnyj-yurist/perevod-zemelnogo-uchastka-v-druguyu-kategoriyu/',
    siteName: 'ЮК «Де-Юре»',
    images: [{ url: 'https://matilda081133-sketch.github.io/images/og_zemelnyj.png', width: 1200, height: 630 }],
    locale: 'ru_RU',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Перевод земельного участка в другую категорию в Липецке | Де-Юре',
    description: 'Проверим допустимость перевода земельного участка в другую категорию в Липецкой области, подготовим обоснование, ходатайство и сопроводим решение или обжалование.',
    images: ['https://matilda081133-sketch.github.io/images/og_zemelnyj.png']
  }
};

export default function PerevodKategoriiPage() {
  return <PerevodKategoriiClient />;
}
