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
  },
};

export default function TrudovojPage() {
  return <TrudovojClient />;
}
