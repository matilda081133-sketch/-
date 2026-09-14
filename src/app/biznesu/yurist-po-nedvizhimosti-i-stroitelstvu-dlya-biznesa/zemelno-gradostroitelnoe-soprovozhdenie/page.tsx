import React from 'react';
import type { Metadata } from 'next';
import ZemelnoGradostroitelnoeClient from './ZemelnoGradostroitelnoeClient';

export const metadata: Metadata = {
  title: 'Земельный и градостроительный юрист для бизнеса в Липецке | Де-Юре',
  description:
    'Земельно-градостроительное сопровождение бизнеса в Липецке: аудит участка, получение земли, ВРИ и ПЗЗ, ГПЗУ, планировка территории, ЗОУИТ и обжалование отказов.',
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/zemelno-gradostroitelnoe-soprovozhdenie/'
  },
  openGraph: {
    title: 'Земельный и градостроительный юрист для бизнеса в Липецке | Де-Юре',
    description:
      'Земельно-градостроительное сопровождение бизнеса в Липецке: аудит участка, получение земли, ВРИ и ПЗЗ, ГПЗУ, планировка территории, ЗОУИТ и обжалование отказов.',
    url: 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/zemelno-gradostroitelnoe-soprovozhdenie/',
    siteName: 'ЮК «Де-Юре»',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/real-estate-b2b-lipetsk-og.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Земельно-градостроительное сопровождение бизнеса в Липецке — Де-Юре'
      }
    ],
    locale: 'ru_RU',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Земельный и градостроительный юрист для бизнеса в Липецке | Де-Юре',
    description:
      'Земельно-градостроительное сопровождение бизнеса в Липецке: аудит участка, получение земли, ВРИ и ПЗЗ, ГПЗУ, планировка территории, ЗОУИТ и обжалование отказов.',
    images: ['https://dejure-help.ru/images/og/real-estate-b2b-lipetsk-og.jpg']
  }
};

export default function ZemelnoGradostroitelnoePage() {
  return <ZemelnoGradostroitelnoeClient />;
}
