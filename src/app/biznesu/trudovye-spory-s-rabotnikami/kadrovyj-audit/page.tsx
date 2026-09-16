import { Metadata } from 'next';
import KadrovyjAuditClient from './KadrovyjAuditClient';

export const metadata: Metadata = {
  title: "Кадровый аудит организации в Липецке | Де-Юре",
  description: "Проводим независимый кадровый аудит для работодателей: выявляем нарушения в договорах и локальных актах, оцениваем риски и даём рекомендации. ЮК «Де-Юре».",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Кадровый аудит организации в Липецке | Де-Юре",
    description: "Проверка трудовых договоров, локальных актов и кадровых процедур с перечнем рисков и рекомендациями по устранению нарушений.",
    url: "https://dejure-help.ru/biznesu/trudovye-spory-s-rabotnikami/kadrovyj-audit/",
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
      images: [
      {
        url: 'https://dejure-help.ru/images/og/trudovoj-yurist-lipetsk-og.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Кадровый аудит организации в Липецке — ЮК «Де-Юре»'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://dejure-help.ru/images/og/trudovoj-yurist-lipetsk-og.jpg'],
  },
  alternates: {
    canonical: "https://dejure-help.ru/biznesu/trudovye-spory-s-rabotnikami/kadrovyj-audit/",
  },
};

export default function Page() {
  return <KadrovyjAuditClient />;
}
