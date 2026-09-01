import { Metadata } from 'next';
import OsparivanieZaveschaniyaClient from './OsparivanieZaveschaniyaClient';

export const metadata: Metadata = {
  title: 'Оспаривание завещания в Липецке | Де-Юре',
  description: 'Помощь в оспаривании завещания и защите от необоснованного иска в Липецке: экспертиза, сбор доказательств, судебное представительство. Разберём дело и оценим перспективы.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/nasledstvennyj-yurist/osparivanie-zaveschaniya/',
  },
  openGraph: {
    title: 'Оспаривание завещания в Липецке | Де-Юре',
    description: 'Помощь в оспаривании завещания и защите от необоснованного иска в Липецке: экспертиза, сбор доказательств, судебное представительство. Разберём дело и оценим перспективы.',
    url: 'https://dejure-help.ru/grazhdanam/nasledstvennyj-yurist/osparivanie-zaveschaniya/',
    siteName: 'ЮК «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/smolyaninova.jpg',
        width: 1200,
        height: 630,
        alt: 'Оспаривание завещания в Липецке',
      },
    ],
  },
};

export default function Page() {
  return <OsparivanieZaveschaniyaClient />;
}
