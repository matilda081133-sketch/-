import React from 'react';
import UstanovlenieServitutaClient from './UstanovlenieServitutaClient';

export const metadata = {
  title: 'Установление земельного сервитута в Липецке | Де-Юре',
  description: 'Помощь в установлении, изменении и прекращении земельного сервитута в Липецке: маршрут, условия, плата, соглашение и представительство в суде.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/zemelnyj-yurist/ustanovlenie-servituta/',
  },
  openGraph: {
    title: 'Установление земельного сервитута в Липецке | Де-Юре',
    description: 'Помощь в установлении, изменении и прекращении земельного сервитута в Липецке: маршрут, условия, плата, соглашение и представительство в суде.',
    url: 'https://dejure-help.ru/grazhdanam/zemelnyj-yurist/ustanovlenie-servituta/',
    siteName: 'ЮК «Де-Юре»',
    images: [{ url: 'https://matilda081133-sketch.github.io/-/images/og_zemelnyj.png', width: 1200, height: 630 }],
    locale: 'ru_RU',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Установление земельного сервитута в Липецке | Де-Юре',
    description: 'Помощь в установлении, изменении и прекращении земельного сервитута в Липецке: маршрут, условия, плата, соглашение и представительство в суде.',
    images: ['https://matilda081133-sketch.github.io/-/images/og_zemelnyj.png']
  }
};

export default function UstanovlenieServitutaPage() {
  return <UstanovlenieServitutaClient />;
}
