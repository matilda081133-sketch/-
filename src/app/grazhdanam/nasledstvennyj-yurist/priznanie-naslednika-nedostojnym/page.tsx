import { Metadata } from 'next';
import PriznanieNaslednikaNedostojnymClient from './PriznanieNaslednikaNedostojnymClient';

export const metadata: Metadata = {
  title: 'Признание наследника недостойным в Липецке | Де-Юре',
  description: 'Юридическая помощь по делам о признании наследника недостойным и исключении из наследства в Липецке. Проверим основания по ст. 1117 ГК РФ и представим интересы в суде.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/nasledstvennyj-yurist/priznanie-naslednika-nedostojnym/',
  },
  openGraph: {
    title: 'Признание наследника недостойным в Липецке | Де-Юре',
    description: 'Юридическая помощь по делам о признании наследника недостойным и исключении из наследства в Липецке. Проверим основания по ст. 1117 ГК РФ и представим интересы в суде.',
    url: 'https://dejure-help.ru/grazhdanam/nasledstvennyj-yurist/priznanie-naslednika-nedostojnym/',
    siteName: 'ЮК «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/smolyaninova.jpg',
        width: 1200,
        height: 630,
        alt: 'Признание наследника недостойным в Липецке',
      },
    ],
  },
};

export default function Page() {
  return <PriznanieNaslednikaNedostojnymClient />;
}
