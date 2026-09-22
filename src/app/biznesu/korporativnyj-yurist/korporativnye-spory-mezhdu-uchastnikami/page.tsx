import type { Metadata } from 'next';
import KorporativnyeSporyClient from './KorporativnyeSporyClient';

export const metadata: Metadata = {
  title: 'Юрист по корпоративным спорам в Липецке | Де-Юре',
  description: 'Помощь при конфликтах участников ООО, корпоративном тупике, оспаривании решений, доступе к документам, убытках директора и защите прав участника. 📞 +7 (4742) 20-15-25.',
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/korporativnyj-yurist/korporativnye-spory-mezhdu-uchastnikami/'
  },
  openGraph: {
    title: 'Юрист по корпоративным спорам в Липецке | Де-Юре',
    description: 'Помощь при конфликтах участников ООО, корпоративном тупике, оспаривании решений, доступе к документам, убытках директора и защите прав участника. 📞 +7 (4742) 20-15-25.',
    url: 'https://dejure-help.ru/biznesu/korporativnyj-yurist/korporativnye-spory-mezhdu-uchastnikami/',
    type: 'website',
        images: [
      {
        url: 'https://dejure-help.ru/images/og/corporate-disputes-og.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Корпоративные споры между участниками ООО в Липецке — ЮК «Де-Юре»'
      }
    ],
    locale: 'ru_RU',
    siteName: 'Юридическая компания «Де-Юре»'
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://dejure-help.ru/images/og/corporate-disputes-og.jpg']
  }
};

export default function KorporativnyeSporyPage() {
  return <KorporativnyeSporyClient />;
}
