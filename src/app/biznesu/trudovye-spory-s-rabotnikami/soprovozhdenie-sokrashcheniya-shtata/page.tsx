import { Metadata } from 'next';
import SoprovozhdenieSokrashcheniyaClient from './SoprovozhdenieSokrashcheniyaClient';

export const metadata: Metadata = {
  title: "Сопровождение сокращения штата в Липецке | Де-Юре",
  description: "Помогаем работодателям провести сокращение штата по закону: оцениваем процедуру, готовим документы, уведомления и защищаем при оспаривании. ЮК «Де-Юре».",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Юридическое сопровождение сокращения штата | Де-Юре",
    description: "Правовая проверка процедуры, категорий работников, вакансий, уведомлений и выплат при сокращении численности или штата.",
    url: "https://dejure-help.ru/biznesu/trudovye-spory-s-rabotnikami/soprovozhdenie-sokrashcheniya-shtata/",
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: "https://dejure-help.ru/biznesu/trudovye-spory-s-rabotnikami/soprovozhdenie-sokrashcheniya-shtata/",
  },
};

export default function Page() {
  return <SoprovozhdenieSokrashcheniyaClient />;
}
