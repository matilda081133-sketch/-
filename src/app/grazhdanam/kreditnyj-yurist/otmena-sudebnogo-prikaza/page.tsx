import { Metadata } from 'next';
import OtmenaPrikazaClient from './OtmenaPrikazaClient';

export const metadata: Metadata = {
  title: 'Отмена судебного приказа в Липецке — юрист | Де-Юре',
  description: 'Поможем отменить судебный приказ по кредиту или займу: проверим срок, подготовим возражения, обоснуем позднюю подачу и сопроводим прекращение взыскания.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/kreditnyj-yurist/otmena-sudebnogo-prikaza/',
  },
  openGraph: {
    title: 'Отмена судебного приказа по кредиту | Де-Юре',
    description: 'Проверим срок, подготовим возражения и определим действия, если приказ уже передан на исполнение.',
    url: 'https://dejure-help.ru/grazhdanam/kreditnyj-yurist/otmena-sudebnogo-prikaza/',
    siteName: 'Юридическая компания Де-Юре',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Отмена судебного приказа в Липецке — ЮК Де-Юре',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Отмена судебного приказа в Липецке | Де-Юре',
    description: 'Поможем отменить судебный приказ по кредиту или займу: проверим срок и подготовим возражения.',
    images: ['/images/og-image.jpg'],
  },
};

export default function OtmenaPrikazaPage() {
  return <OtmenaPrikazaClient />;
}
