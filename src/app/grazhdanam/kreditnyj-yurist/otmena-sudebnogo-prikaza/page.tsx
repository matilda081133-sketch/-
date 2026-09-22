import { Metadata } from 'next';
import OtmenaPrikazaClient from './OtmenaPrikazaClient';

export const metadata: Metadata = {
  metadataBase: new URL('https://dejure-help.ru'),
  title: 'Отмена судебного приказа в Липецке — юрист | Де-Юре',
  description: 'Поможем отменить судебный приказ по кредиту или займу: проверим срок, подготовим возражения, обоснуем позднюю подачу и сопроводим прекращение взыскания. 📞 +7 (4742) 20-15-25.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/kreditnyj-yurist/otmena-sudebnogo-prikaza/',
  },
  openGraph: {
    title: 'Отмена судебного приказа по кредиту | Де-Юре',
    description: 'Проверим срок, подготовим возражения и определим действия, если приказ уже передан на исполнение. 📞 +7 (4742) 20-15-25.',
    url: 'https://dejure-help.ru/grazhdanam/kreditnyj-yurist/otmena-sudebnogo-prikaza/',
    siteName: 'Юридическая компания Де-Юре',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/otmena-sudebnogo-prikaza.jpg',
        width: 1200,
        height: 630,
        alt: 'Отмена судебного приказа в Липецке — ЮК «Де-Юре»',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Отмена судебного приказа в Липецке | Де-Юре',
    description: 'Поможем отменить судебный приказ по кредиту или займу: проверим срок и подготовим возражения. 📞 +7 (4742) 20-15-25.',
    images: ['https://dejure-help.ru/images/og/otmena-sudebnogo-prikaza.jpg'],
  },
};

export default function OtmenaPrikazaPage() {
  return <OtmenaPrikazaClient />;
}
