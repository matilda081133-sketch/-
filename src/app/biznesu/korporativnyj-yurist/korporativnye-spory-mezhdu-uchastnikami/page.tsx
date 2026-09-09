import type { Metadata } from 'next';
import KorporativnyeSporyClient from './KorporativnyeSporyClient';

export const metadata: Metadata = {
  title: 'Юрист по корпоративным спорам в Липецке | Де-Юре',
  description:
    'Помощь при конфликтах участников ООО, корпоративном тупике, оспаривании решений, доступе к документам, убытках директора и защите прав участника.',
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/korporativnyj-yurist/korporativnye-spory-mezhdu-uchastnikami/'
  },
  openGraph: {
    title: 'Юрист по корпоративным спорам в Липецке | Де-Юре',
    description:
      'Помощь при конфликтах участников ООО, корпоративном тупике, оспаривании решений, доступе к документам, убытках директора и защите прав участника.',
    url: 'https://dejure-help.ru/biznesu/korporativnyj-yurist/korporativnye-spory-mezhdu-uchastnikami/',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Юридическая компания «Де-Юре»'
  }
};

export default function KorporativnyeSporyPage() {
  return <KorporativnyeSporyClient />;
}
