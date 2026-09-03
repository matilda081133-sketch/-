import { Metadata } from 'next';
import TrudovyeSporyB2BClient from './TrudovyeSporyB2BClient';

export const metadata: Metadata = {
  title: "Юрист по трудовым спорам для работодателей в Липецке | Де-Юре",
  description: "Помогаем работодателям в трудовых спорах с работниками: увольнение и сокращение, проверки ГИТ, кадровый аудит, взыскание ущерба и защита в суде. ЮК «Де-Юре», Липецк.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Трудовые споры с работниками — помощь работодателям | Де-Юре",
    description: "Юридическая помощь работодателям при увольнении, сокращении, проверках ГИТ, кадровых рисках, материальном ущербе и несчастных случаях.",
    url: "https://dejure-help.ru/biznesu/trudovye-spory-s-rabotnikami/",
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: "https://dejure-help.ru/biznesu/trudovye-spory-s-rabotnikami/",
  },
};

export default function Page() {
  return <TrudovyeSporyB2BClient />;
}
