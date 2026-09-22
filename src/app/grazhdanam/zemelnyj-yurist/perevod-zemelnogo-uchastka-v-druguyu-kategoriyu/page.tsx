import React from 'react';
import PerevodKategoriiClient from './PerevodKategoriiClient';

export const metadata = {
  title: 'Перевод земельного участка в другую категорию в Липецке | Де-Юре',
  description: 'Проверим допустимость перевода земельного участка в другую категорию в Липецкой области, подготовим обоснование, ходатайство и сопроводим решение или обжалование. 📞 +7 (4742) 20-15-25.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/zemelnyj-yurist/perevod-zemelnogo-uchastka-v-druguyu-kategoriyu/',
  },
  openGraph: {
    title: 'Перевод земельного участка в другую категорию в Липецке | Де-Юре',
    description: 'Проверим допустимость перевода земельного участка в другую категорию в Липецкой области, подготовим обоснование, ходатайство и сопроводим решение или обжалование. 📞 +7 (4742) 20-15-25.',
    url: 'https://dejure-help.ru/grazhdanam/zemelnyj-yurist/perevod-zemelnogo-uchastka-v-druguyu-kategoriyu/',
    siteName: 'ЮК «Де-Юре»',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/land-category-transfer-og.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Перевод земельного участка в другую категорию в Липецке — ЮК «Де-Юре»'
      }
    ],
    locale: 'ru_RU',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Перевод земельного участка в другую категорию в Липецке | Де-Юре',
    description: 'Проверим допустимость перевода земельного участка в другую категорию в Липецкой области, подготовим обоснование, ходатайство и сопроводим решение или обжалование. 📞 +7 (4742) 20-15-25.',
    images: ['https://dejure-help.ru/images/og/land-category-transfer-og.jpg']
  }
};

export default function PerevodKategoriiPage() {
  return <PerevodKategoriiClient />;
}
