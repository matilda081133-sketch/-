import { Metadata } from 'next';
import RazdelImushchestvaSuprugovClient from './RazdelImushchestvaSuprugovClient';

export const metadata: Metadata = {
  title: 'Раздел имущества супругов в Липецке | Де-Юре',
  description: 'Юридическая помощь при разделе имущества супругов в Липецке: недвижимость, ипотека, автомобили, долги, скрытые активы. Соглашение или защита в суде.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/semejnyj-yurist/razdel-imushchestva-suprugov/',
  },
  openGraph: {
    title: 'Раздел имущества супругов в Липецке | Де-Юре',
    description: 'Юридическая помощь при разделе имущества супругов в Липецке: недвижимость, ипотека, автомобили, долги, скрытые активы. Соглашение или защита в суде.',
    url: 'https://dejure-help.ru/grazhdanam/semejnyj-yurist/razdel-imushchestva-suprugov/',
    siteName: 'ЮК «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/smolyaninova.jpg',
        width: 1200,
        height: 630,
        alt: 'Раздел имущества супругов в Липецке',
      },
    ],
  },
};

export default function RazdelImushchestvaSuprugovPage() {
  return <RazdelImushchestvaSuprugovClient />;
}
