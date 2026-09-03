import { Metadata } from 'next';
import AdvokatUgolovnyjClient from './AdvokatUgolovnyjClient';

export const metadata: Metadata = {
  title: 'Адвокат по уголовным делам в Липецке | Защита и представительство — Де-Юре',
  description:
    'Помощь адвоката по уголовным делам в Липецке: проверка, задержание, обыск, допрос, следствие, суд, обжалование, УДО и защита потерпевших. Изучим ситуацию и определим стратегию.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/',
  },
  openGraph: {
    title: 'Адвокат по уголовным делам в Липецке | Де-Юре',
    description:
      'Защита подозреваемых и обвиняемых, помощь свидетелям и потерпевшим на всех стадиях уголовного дела.',
    url: 'https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/bobkin.jpg',
        width: 1200,
        height: 630,
        alt: 'Адвокат по уголовным делам в Липецке — ЮК Де-Юре',
      },
    ],
  },
};

export default function AdvokatUgolovnymDelamPage() {
  return <AdvokatUgolovnyjClient />;
}
