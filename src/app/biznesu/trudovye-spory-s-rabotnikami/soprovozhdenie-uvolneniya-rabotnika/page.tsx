import { Metadata } from 'next';
import SoprovozhdenieUvolneniyaClient from './SoprovozhdenieUvolneniyaClient';

export const metadata: Metadata = {
  title: "Сопровождение увольнения работника в Липецке | Де-Юре",
  description: "Помогаем работодателям законно уволить работника: оцениваем основание и риски, готовим документы, сопровождаем переговоры и защищаем в споре. ЮК «Де-Юре».",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Юридическое сопровождение увольнения работника | Де-Юре",
    description: "Проверим основание и документы, поможем провести сложное увольнение и защитить позицию работодателя при оспаривании.",
    url: "https://dejure-help.ru/biznesu/trudovye-spory-s-rabotnikami/soprovozhdenie-uvolneniya-rabotnika/",
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
      images: [
      {
        url: 'https://dejure-help.ru/images/og/nezakonnoe-uvolnenie-og.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Сопровождение увольнения работника в Липецке — ЮК «Де-Юре»'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://dejure-help.ru/images/og/nezakonnoe-uvolnenie-og.jpg'],
  },
  alternates: {
    canonical: "https://dejure-help.ru/biznesu/trudovye-spory-s-rabotnikami/soprovozhdenie-uvolneniya-rabotnika/",
  },
};

export default function Page() {
  return <SoprovozhdenieUvolneniyaClient />;
}
