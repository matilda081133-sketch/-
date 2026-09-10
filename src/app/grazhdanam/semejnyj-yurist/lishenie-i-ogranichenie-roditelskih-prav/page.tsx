import { Metadata } from 'next';
import LishenieIOgranichenieRoditelskihPravClient from './LishenieIOgranichenieRoditelskihPravClient';

export const metadata: Metadata = {
  title: 'Лишение и ограничение родительских прав в Липецке | Де-Юре',
  description: 'Юридическая помощь по делам о лишении и ограничении родительских прав в Липецке: оценка оснований, подготовка иска, доказательства и представительство в суде.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/semejnyj-yurist/lishenie-i-ogranichenie-roditelskih-prav/',
  },
  openGraph: {
    title: 'Лишение и ограничение родительских прав в Липецке | Де-Юре',
    description: 'Юридическая помощь по делам о лишении и ограничении родительских прав в Липецке: оценка оснований, подготовка иска, доказательства и представительство в суде.',
    url: 'https://dejure-help.ru/grazhdanam/semejnyj-yurist/lishenie-i-ogranichenie-roditelskih-prav/',
    siteName: 'ЮК «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/semejnyj-yurist.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Семейный юрист в Липецке — ЮК «Де-Юре»',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://dejure-help.ru/images/og/semejnyj-yurist.jpg'],
  },
};

export default function LishenieIOgranichenieRoditelskihPravPage() {
  return <LishenieIOgranichenieRoditelskihPravClient />;
}
