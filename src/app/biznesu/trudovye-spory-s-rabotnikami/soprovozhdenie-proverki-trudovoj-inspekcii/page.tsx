import { Metadata } from 'next';
import SoprovozhdenieProverkiGitClient from './SoprovozhdenieProverkiGitClient';

export const metadata: Metadata = {
  title: "Сопровождение проверок трудовой инспекции в Липецке | Де-Юре",
  description: "Помогаем работодателям при проверках ГИТ: оцениваем риски, готовим документы и объяснения, сопровождаем инспекцию и обжалуем штрафы. ЮК «Де-Юре».",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Сопровождение проверок трудовой инспекции (ГИТ) | Де-Юре",
    description: "Анализ запроса и рисков, подготовка документов и объяснений, взаимодействие с инспекцией труда, обжалование предписаний и штрафов.",
    url: "https://dejure-help.ru/biznesu/trudovye-spory-s-rabotnikami/soprovozhdenie-proverki-trudovoj-inspekcii/",
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: "https://dejure-help.ru/biznesu/trudovye-spory-s-rabotnikami/soprovozhdenie-proverki-trudovoj-inspekcii/",
  },
};

export default function Page() {
  return <SoprovozhdenieProverkiGitClient />;
}
