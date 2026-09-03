import { Metadata } from 'next';
import RassledovanieSluchayaClient from './RassledovanieSluchayaClient';

export const metadata: Metadata = {
  title: "Расследование несчастного случая на производстве в Липецке | Де-Юре",
  description: "Юридическая помощь работодателю при несчастном случае на производстве: комиссия, извещения, материалы расследования и защита интересов. ЮК «Де-Юре».",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Расследование несчастного случая на производстве | Де-Юре",
    description: "Помощь работодателю в обязательных действиях, работе комиссии, сборе материалов и защите позиции компании по итогам расследования.",
    url: "https://dejure-help.ru/biznesu/trudovye-spory-s-rabotnikami/rassledovanie-neschastnogo-sluchaya-na-proizvodstve/",
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: "https://dejure-help.ru/biznesu/trudovye-spory-s-rabotnikami/rassledovanie-neschastnogo-sluchaya-na-proizvodstve/",
  },
};

export default function Page() {
  return <RassledovanieSluchayaClient />;
}
