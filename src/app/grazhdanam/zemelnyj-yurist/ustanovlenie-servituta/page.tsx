import React from 'react';
import UstanovlenieServitutaClient from './UstanovlenieServitutaClient';

export const metadata = {
  title: 'Установление земельного сервитута в Липецке | Де-Юре',
  description: 'Помощь в установлении, изменении и прекращении земельного сервитута в Липецке: маршрут, условия, плата, соглашение и представительство в суде. 📞 +7 (4742) 20-15-25.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/zemelnyj-yurist/ustanovlenie-servituta/',
  },
  openGraph: {
    title: 'Установление земельного сервитута в Липецке | Де-Юре',
    description: 'Помощь в установлении, изменении и прекращении земельного сервитута в Липецке: маршрут, условия, плата, соглашение и представительство в суде. 📞 +7 (4742) 20-15-25.',
    url: 'https://dejure-help.ru/grazhdanam/zemelnyj-yurist/ustanovlenie-servituta/',
    siteName: 'ЮК «Де-Юре»',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/land-easement-servitude-og.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Установление сервитута на земельный участок в Липецке — ЮК «Де-Юре»'
      }
    ],
    locale: 'ru_RU',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Установление земельного сервитута в Липецке | Де-Юре',
    description: 'Помощь в установлении, изменении и прекращении земельного сервитута в Липецке: маршрут, условия, плата, соглашение и представительство в суде. 📞 +7 (4742) 20-15-25.',
    images: ['https://dejure-help.ru/images/og/land-easement-servitude-og.jpg']
  }
};

export default function UstanovlenieServitutaPage() {
  return <UstanovlenieServitutaClient />;
}
