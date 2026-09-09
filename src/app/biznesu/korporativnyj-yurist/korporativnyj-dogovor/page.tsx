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
    locale: 'ru_RU',
    siteName: 'Юридическая компания «Де-Юре»'
  }
};

export default function KorporativnyjDogovorPage() {
  return <KorporativnyjDogovorClient />;
}
