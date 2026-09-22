import type { Metadata } from 'next';
import ArbitrazhClient from './ArbitrazhClient';

export const metadata: Metadata = {
  title: 'Арбитражный юрист в Липецке — представительство в арбитражном суде | Де-Юре',
  description: 'Арбитражный юрист в Липецке: оценка перспектив, подготовка позиции и документов, представительство компаний и ИП в арбитражном суде. Помощь истцам и ответчикам. 📞 +7 (4742) 20-15-25.',
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/'
  },
  openGraph: {
    title: 'Арбитражный юрист в Липецке — представительство в арбитражном суде | Де-Юре',
    description: 'Оценка перспектив спора, формирование доказательственной базы, подготовка исков, отзывов и жалоб, представительство интересов юридических лиц и ИП в Арбитражном суде. 📞 +7 (4742) 20-15-25.',
    url: 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Юридическая компания «Де-Юре»',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/arbitrazhnyj-yurist.jpg',
        width: 1200,
        height: 630,
        alt: 'Арбитражный юрист в Липецке — ЮК Де-Юре'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://dejure-help.ru/images/og/arbitrazhnyj-yurist.jpg']
  }
};

export default function ArbitrazhPage() {
  return <ArbitrazhClient />;
}
