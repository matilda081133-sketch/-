import { Metadata } from 'next';
import SemejnyjClient from './SemejnyjClient';

export const metadata: Metadata = {
  title: 'Семейный юрист в Липецке — помощь по семейным спорам | Де-Юре',
  description: 'Помощь семейного юриста в Липецке: развод через суд, раздел имущества, алименты, споры о детях, отцовство, родительские права и брачный договор.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/semejnyj-yurist/',
  },
  openGraph: {
    title: 'Семейный юрист в Липецке — помощь по семейным спорам | Де-Юре',
    description: 'Помощь семейного юриста в Липецке: развод через суд, раздел имущества, алименты, споры о детях, отцовство, родительские права и брачный договор.',
    url: 'https://dejure-help.ru/grazhdanam/semejnyj-yurist/',
    siteName: 'ЮК «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/smolyaninova.jpg',
        width: 1200,
        height: 630,
        alt: 'Семейный юрист в Липецке',
      },
    ],
  },
};

export default function SemejnyjPage() {
  return <SemejnyjClient />;
}
