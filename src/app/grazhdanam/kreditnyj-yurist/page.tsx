import { Metadata } from 'next';
import KreditnyjYuristClient from './KreditnyjYuristClient';

export const metadata: Metadata = {
  title: 'Кредитный юрист в Липецке — споры с банками | Де-Юре',
  description: 'Помощь кредитного юриста в Липецке: проверим договор и расчёт долга, подготовим обращения и возражения, защитим интересы в споре с банком или МФО.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/kreditnyj-yurist/',
  },
  openGraph: {
    title: 'Кредитный юрист в Липецке | Де-Юре',
    description: 'Проверим требования кредитора, определим варианты защиты и сопроводим досудебный или судебный кредитный спор.',
    url: 'https://dejure-help.ru/grazhdanam/kreditnyj-yurist/',
    siteName: 'Юридическая компания Де-Юре',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Владимир Начешников — специалист ЮК Де-Юре',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Кредитный юрист в Липецке | Де-Юре',
    description: 'Проверим требования кредитора, определим варианты защиты и сопроводим досудебный или судебный кредитный спор.',
    images: ['/images/og-image.jpg'],
  },
};

export default function KreditnyjYuristPage() {
  return <KreditnyjYuristClient />;
}
