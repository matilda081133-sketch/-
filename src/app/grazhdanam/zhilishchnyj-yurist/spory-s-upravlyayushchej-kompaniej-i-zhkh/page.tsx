import React from 'react';
import { Metadata } from 'next';
import SporyUKClient from './SporyUKClient';

export const metadata: Metadata = {
  title: 'Споры с управляющей компанией и ЖКХ в Липецке — юрист | Де-Юре',
  description: 'Поможем оспорить начисления, добиться перерасчёта, ремонта общего имущества и реакции УК или ТСЖ. Претензии, жалобы и суд в Липецке.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/spory-s-upravlyayushchej-kompaniej-i-zhkh/'
  },
  openGraph: {
    title: 'Споры с управляющей компанией и ЖКХ в Липецке — юрист | Де-Юре',
    description: 'Поможем оспорить начисления, добиться перерасчёта, ремонта общего имущества и реакции УК или ТСЖ. Претензии, жалобы и суд в Липецке.',
    url: 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/spory-s-upravlyayushchej-kompaniej-i-zhkh/',
    siteName: 'ЮК «Де-Юре»',
    images: [
      {
        url: 'https://dejure-help.ru/images/housing_law_hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Споры с управляющей компанией, ТСЖ и ЖКХ в Липецке'
      }
    ],
    locale: 'ru_RU',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Споры с управляющей компанией и ЖКХ в Липецке — юрист | Де-Юре',
    description: 'Поможем оспорить начисления, добиться перерасчёта, ремонта общего имущества и реакции УК или ТСЖ. Претензии, жалобы и суд в Липецке.',
    images: ['https://dejure-help.ru/images/housing_law_hero.jpg']
  }
};

export default function SporyUKPage() {
  return <SporyUKClient />;
}
