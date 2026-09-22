import { Metadata } from 'next';
import TrudovyeSporyB2BClient from './TrudovyeSporyB2BClient';

export const metadata: Metadata = {
  title: "Юрист по трудовым спорам для работодателей в Липецке | Де-Юре",
  description: "Помогаем работодателям в трудовых спорах с работниками: увольнение и сокращение, проверки ГИТ, кадровый аудит, взыскание ущерба и защита в суде. ЮК «Де-Юре», Липецк. 📞 +7 (4742) 20-15-25.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Трудовые споры с работниками — помощь работодателям | Де-Юре",
    description: "Юридическая помощь работодателям при увольнении, сокращении, проверках ГИТ, кадровых рисках, материальном ущербе и несчастных случаях. 📞 +7 (4742) 20-15-25.",
    url: "https://dejure-help.ru/biznesu/trudovye-spory-s-rabotnikami/",
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
      images: [
      {
        url: 'https://dejure-help.ru/images/og/trudovoj-yurist-lipetsk-og.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Трудовые споры с работниками в Липецке — ЮК «Де-Юре»'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://dejure-help.ru/images/og/trudovoj-yurist-lipetsk-og.jpg'],
  },
  alternates: {
    canonical: "https://dejure-help.ru/biznesu/trudovye-spory-s-rabotnikami/",
  },
};

export default function Page() {
  return <TrudovyeSporyB2BClient />;
}
