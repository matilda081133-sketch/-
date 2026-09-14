import type { Metadata } from 'next';
import TrudovojClient from './TrudovojClient';

export const metadata: Metadata = {
  title: 'Трудовой юрист в Липецке — защита прав работников | Де-Юре',
  description: 'Помощь трудового юриста в Липецке для работников: незаконное увольнение, сокращение, невыплата зарплаты, производственные травмы. Защита в суде.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/trudovoj-yurist/',
  },
  openGraph: {
    title: 'Трудовой юрист в Липецке — защита прав работников | Де-Юре',
    description: 'Помощь трудового юриста в Липецке для работников: незаконное увольнение, сокращение, невыплата зарплаты, производственные травмы. Защита в суде.',
    url: 'https://dejure-help.ru/grazhdanam/trudovoj-yurist/',
    siteName: 'ЮК «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/trudovoj-yurist-lipetsk-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Трудовой юрист в Липецке — ЮК Де-Юре',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Трудовой юрист в Липецке — защита прав работников | Де-Юре',
    description: 'Помощь трудового юриста в Липецке для работников: незаконное увольнение, сокращение, невыплата зарплаты, производственные травмы. Защита в суде.',
    images: ['https://dejure-help.ru/images/og/trudovoj-yurist-lipetsk-og.jpg'],
  },
};

export default function TrudovojPage() {
  return <TrudovojClient />;
}
