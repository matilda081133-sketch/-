import type { Metadata } from 'next';
import KorporativnyjDogovorClient from './KorporativnyjDogovorClient';

export const metadata: Metadata = {
  title: 'Корпоративный договор в Липецке — разработка и согласование | Де-Юре',
  description:
    'Разработка корпоративного договора для участников ООО и акционеров: управление, голосование, финансирование, доли, выход партнёра и разрешение тупиков.',
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/korporativnyj-yurist/korporativnyj-dogovor/'
  },
  openGraph: {
    title: 'Корпоративный договор в Липецке — разработка и согласование | Де-Юре',
    description:
      'Разработка корпоративного договора для участников ООО и акционеров: управление, голосование, финансирование, доли, выход партнёра и разрешение тупиков.',
    url: 'https://dejure-help.ru/biznesu/korporativnyj-yurist/korporativnyj-dogovor/',
    type: 'website',
        images: [
      {
        url: 'https://dejure-help.ru/images/og/corporate-agreement-og.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Корпоративный договор между участниками ООО в Липецке — ЮК «Де-Юре»'
      }
    ],
    locale: 'ru_RU',
    siteName: 'Юридическая компания «Де-Юре»'
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://dejure-help.ru/images/og/corporate-agreement-og.jpg']
  }
};

export default function KorporativnyjDogovorPage() {
  return <KorporativnyjDogovorClient />;
}
