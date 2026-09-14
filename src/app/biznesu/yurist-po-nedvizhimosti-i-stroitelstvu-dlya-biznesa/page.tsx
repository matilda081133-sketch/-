import React from 'react';
import type { Metadata } from 'next';
import YuristNedvizhimostStroitelstvoClient from './YuristNedvizhimostStroitelstvoClient';

export const metadata: Metadata = {
  title: 'Юрист по недвижимости и строительству для бизнеса в Липецке | Де-Юре',
  description:
    'Юридическая помощь бизнесу по коммерческой недвижимости, земле и строительству в Липецке: сделки, аренда, сопровождение проектов и строительные споры.',
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/'
  },
  openGraph: {
    title: 'Юрист по недвижимости и строительству для бизнеса в Липецке | Де-Юре',
    description:
      'Юридическая помощь бизнесу по коммерческой недвижимости, земле и строительству в Липецке: сделки, аренда, сопровождение проектов и строительные споры.',
    url: 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/',
    siteName: 'ЮК «Де-Юре»',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/real-estate-b2b-lipetsk-og.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Юрист по недвижимости и строительству для бизнеса в Липецке — Де-Юре'
      }
    ],
    locale: 'ru_RU',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Юрист по недвижимости и строительству для бизнеса в Липецке | Де-Юре',
    description:
      'Юридическая помощь бизнесу по коммерческой недвижимости, земле и строительству в Липецке: сделки, аренда, сопровождение проектов и строительные споры.',
    images: ['https://dejure-help.ru/images/og/real-estate-b2b-lipetsk-og.jpg']
  }
};

export default function YuristNedvizhimostStroitelstvoPage() {
  return <YuristNedvizhimostStroitelstvoClient />;
}
