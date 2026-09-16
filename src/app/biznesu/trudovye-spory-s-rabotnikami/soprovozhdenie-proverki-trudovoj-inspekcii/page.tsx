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
      images: [
      {
        url: 'https://dejure-help.ru/images/og/trudovoj-yurist-lipetsk-og.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Сопровождение проверок трудовой инспекции (ГИТ) в Липецке — ЮК «Де-Юре»'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://dejure-help.ru/images/og/trudovoj-yurist-lipetsk-og.jpg'],
  },
  alternates: {
    canonical: "https://dejure-help.ru/biznesu/trudovye-spory-s-rabotnikami/soprovozhdenie-proverki-trudovoj-inspekcii/",
  },
};

export default function Page() {
  return <SoprovozhdenieProverkiGitClient />;
}
