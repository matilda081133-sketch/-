import { Metadata } from 'next';
import VzyskanieAlimentovClient from './VzyskanieAlimentovClient';

export const metadata: Metadata = {
  title: 'Взыскание алиментов в Липецке — помощь юриста | Де-Юре',
  description: 'Помощь юриста по алиментам в Липецке: взыскание в долях или твёрдой сумме, изменение размера, задолженность, неустойка и представительство в суде.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/semejnyj-yurist/vzyskanie-alimentov/',
  },
  openGraph: {
    title: 'Взыскание алиментов в Липецке — помощь юриста | Де-Юре',
    description: 'Помощь юриста по алиментам в Липецке: взыскание в долях или твёрдой сумме, изменение размера, задолженность, неустойка и представительство в суде.',
    url: 'https://dejure-help.ru/grazhdanam/semejnyj-yurist/vzyskanie-alimentov/',
    siteName: 'ЮК «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/smolyaninova.jpg',
        width: 1200,
        height: 630,
        alt: 'Взыскание алиментов в Липецке',
      },
    ],
  },
};

export default function VzyskanieAlimentovPage() {
  return <VzyskanieAlimentovClient />;
}
