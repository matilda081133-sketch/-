import { Metadata } from 'next';
import KreditnyjYuristClient from './KreditnyjYuristClient';

export const metadata: Metadata = {
  title: 'Кредитный юрист в Липецке — помощь по долгам и кредитам | Де-Юре',
  description: 'Помощь кредитного юриста в Липецке: отмена судебных приказов, защита от исков банков и МФО, снижение неустойки, оспаривание незаконных комиссий и страховок.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/kreditnyj-yurist/',
  },
  openGraph: {
    title: 'Кредитный юрист в Липецке | Де-Юре',
    description: 'Защита заемщиков в судах, отмена судебных приказов, снижение штрафов и пени, споры с банками и коллекторами.',
    url: 'https://dejure-help.ru/grazhdanam/kreditnyj-yurist/',
    siteName: 'Юридическая компания Де-Юре',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Кредитный юрист в Липецке — ЮК Де-Юре',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Кредитный юрист в Липецке | Де-Юре',
    description: 'Помощь кредитного юриста: отмена судебных приказов, защита по искам банков и МФО.',
    images: ['/images/og-image.jpg'],
  },
};

export default function KreditnyjYuristPage() {
  return <KreditnyjYuristClient />;
}
