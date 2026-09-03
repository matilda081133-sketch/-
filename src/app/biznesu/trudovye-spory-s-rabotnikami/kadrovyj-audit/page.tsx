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
  },
  alternates: {
    canonical: "https://dejure-help.ru/biznesu/trudovye-spory-s-rabotnikami/kadrovyj-audit/",
  },
};

export default function Page() {
  return <KadrovyjAuditClient />;
}
