import { Metadata } from 'next';
import KreditnyjYuristClient from './KreditnyjYuristClient';

export const metadata: Metadata = {
  metadataBase: new URL('https://dejure-help.ru'),
  title: 'Кредитный юрист в Липецке — споры с банками | Де-Юре',
  description: 'Помощь кредитного юриста в Липецке: проверим договор и расчёт долга, подготовим обращения и возражения, защитим интересы в споре с банком или МФО. 📞 +7 (4742) 20-15-25.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/kreditnyj-yurist/',
  },
  openGraph: {
    title: 'Кредитный юрист в Липецке | Де-Юре',
    description: 'Проверим требования кредитора, определим варианты защиты и сопроводим досудебный или судебный кредитный спор. 📞 +7 (4742) 20-15-25.',
    url: 'https://dejure-help.ru/grazhdanam/kreditnyj-yurist/',
    siteName: 'Юридическая компания Де-Юре',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/kreditnyj-yurist.jpg',
        width: 1200,
        height: 630,
        alt: 'Кредитный юрист в Липецке — ЮК «Де-Юре»',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Кредитный юрист в Липецке | Де-Юре',
    description: 'Проверим требования кредитора, определим варианты защиты и сопроводим досудебный или судебный кредитный спор. 📞 +7 (4742) 20-15-25.',
    images: ['https://dejure-help.ru/images/og/kreditnyj-yurist.jpg'],
  },
};

export default function KreditnyjYuristPage() {
  return <KreditnyjYuristClient />;
}
