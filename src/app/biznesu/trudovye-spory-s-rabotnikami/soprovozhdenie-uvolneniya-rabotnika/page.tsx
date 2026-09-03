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
  },
  alternates: {
    canonical: "https://dejure-help.ru/biznesu/trudovye-spory-s-rabotnikami/soprovozhdenie-uvolneniya-rabotnika/",
  },
};

export default function Page() {
  return <SoprovozhdenieUvolneniyaClient />;
}
