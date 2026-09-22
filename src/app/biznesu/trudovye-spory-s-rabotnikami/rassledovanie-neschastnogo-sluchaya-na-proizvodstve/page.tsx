import { Metadata } from 'next';
import RassledovanieSluchayaClient from './RassledovanieSluchayaClient';

export const metadata: Metadata = {
  title: "Сопровождение расследования несчастного случая на производстве в Липецке | Де-Юре",
  description: "Юридическая помощь работодателю при несчастном случае на производстве: комиссия, извещения, материалы расследования и защита интересов. ЮК «Де-Юре». 📞 +7 (4742) 20-15-25.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Сопровождение расследования несчастного случая на производстве | Де-Юре",
    description: "Помощь работодателю в обязательных действиях, работе комиссии, сборе материалов и защите позиции компании по итогам расследования. 📞 +7 (4742) 20-15-25.",
    url: "https://dejure-help.ru/biznesu/trudovye-spory-s-rabotnikami/rassledovanie-neschastnogo-sluchaya-na-proizvodstve/",
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
      images: [
      {
        url: 'https://dejure-help.ru/images/og/proizvodstvennaya-travma-og.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Расследование несчастного случая на производстве в Липецке — ЮК «Де-Юре»'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://dejure-help.ru/images/og/proizvodstvennaya-travma-og.jpg'],
  },
  alternates: {
    canonical: "https://dejure-help.ru/biznesu/trudovye-spory-s-rabotnikami/rassledovanie-neschastnogo-sluchaya-na-proizvodstve/",
  },
};

export default function Page() {
  return <RassledovanieSluchayaClient />;
}
