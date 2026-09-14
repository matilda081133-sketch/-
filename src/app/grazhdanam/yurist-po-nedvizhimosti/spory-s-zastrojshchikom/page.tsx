import React from 'react';
import SporySZastrojshchikomClient from './SporySZastrojshchikomClient';

export const metadata = {
  title: 'Споры с застройщиком в Липецке — помощь юриста | Де-Юре',
  description: 'Юрист по спорам с застройщиком в Липецке: просрочка по ДДУ, расторжение договора, недостатки квартиры, претензия, суд и исполнение решения.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/spory-s-zastrojshchikom/'
  },
  openGraph: {
    title: 'Споры с застройщиком в Липецке | Де-Юре',
    description: 'Юридическая помощь дольщикам в Липецке: взыскание неустойки по ДДУ, расторжение договора долевого участия, возмещение строительных дефектов.',
    url: 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/spory-s-zastrojshchikom/',
    siteName: 'ЮК «Де-Юре»',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/developer-disputes-lipetsk-og.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Споры с застройщиком в Липецке — ЮК «Де-Юре»'
      }
    ],
    locale: 'ru_RU',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Споры с застройщиком в Липецке — помощь юриста | Де-Юре',
    description: 'Юрист по спорам с застройщиком в Липецке: просрочка по ДДУ, расторжение договора, недостатки квартиры, претензия, суд и исполнение решения.',
    images: ['https://dejure-help.ru/images/og/developer-disputes-lipetsk-og.jpg']
  }
};

export default function SporySZastrojshchikomPage() {
  return <SporySZastrojshchikomClient />;
}
