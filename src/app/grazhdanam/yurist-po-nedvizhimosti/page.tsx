import React from 'react';
import YuristPoNedvizhimostiClient from './YuristPoNedvizhimostiClient';

export const metadata = {
  title: 'Юрист по недвижимости в Липецке — сделки и споры | Де-Юре',
  description: 'Помощь юриста по недвижимости в Липецке: сопровождение сделок, споры с застройщиком, признание права собственности и оспаривание сделок. 📞 +7 (4742) 20-15-25.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/'
  },
  openGraph: {
    title: 'Юрист по недвижимости в Липецке | Де-Юре',
    description: 'Проверим документы и правовую историю объекта, оценим риски и определим способ оформления или защиты права на недвижимость. 📞 +7 (4742) 20-15-25.',
    url: 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/',
    siteName: 'ЮК «Де-Юре»',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/real-estate-lawyer-lipetsk-og.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Юрист по недвижимости в Липецке — ЮК «Де-Юре»'
      }
    ],
    locale: 'ru_RU',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Юрист по недвижимости в Липецке — сделки и споры | Де-Юре',
    description: 'Помощь юриста по недвижимости в Липецке: сопровождение сделок, споры с застройщиком, признание права собственности и оспаривание сделок. 📞 +7 (4742) 20-15-25.',
    images: ['https://dejure-help.ru/images/og/real-estate-lawyer-lipetsk-og.jpg']
  }
};

export default function YuristPoNedvizhimostiPage() {
  return <YuristPoNedvizhimostiClient />;
}
