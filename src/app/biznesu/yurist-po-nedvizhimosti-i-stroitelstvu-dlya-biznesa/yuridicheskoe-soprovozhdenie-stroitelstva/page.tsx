import React from 'react';
import type { Metadata } from 'next';
import SoprovozhdenieStroitelstvaClient from './SoprovozhdenieStroitelstvaClient';

export const metadata: Metadata = {
  title: 'Юридическое сопровождение строительства и реконструкции в Липецке | Де-Юре',
  description: 'Юридическое сопровождение строительства и реконструкции для бизнеса в Липецке: аудит проекта, договоры, проектная документация, разрешение, контроль изменений, ввод и регистрация объекта. 📞 +7 (4742) 20-15-25.',
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/yuridicheskoe-soprovozhdenie-stroitelstva/'
  },
  openGraph: {
    title: 'Юридическое сопровождение строительства и реконструкции в Липецке | Де-Юре',
    description: 'Юридическое сопровождение строительства и реконструкции для бизнеса в Липецке: аудит проекта, договоры, проектная документация, разрешение, контроль изменений, ввод и регистрация объекта. 📞 +7 (4742) 20-15-25.',
    url: 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/yuridicheskoe-soprovozhdenie-stroitelstva/',
    siteName: 'ЮК «Де-Юре»',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/real-estate-b2b-lipetsk-og.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Юридическое сопровождение строительства в Липецке — Де-Юре'
      }
    ],
    locale: 'ru_RU',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Юридическое сопровождение строительства и реконструкции в Липецке | Де-Юре',
    description: 'Юридическое сопровождение строительства и реконструкции для бизнеса в Липецке: аудит проекта, договоры, проектная документация, разрешение, контроль изменений, ввод и регистрация объекта. 📞 +7 (4742) 20-15-25.',
    images: ['https://dejure-help.ru/images/og/real-estate-b2b-lipetsk-og.jpg']
  }
};

export default function SoprovozhdenieStroitelstvaPage() {
  return <SoprovozhdenieStroitelstvaClient />;
}
