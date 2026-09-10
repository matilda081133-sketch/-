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

export default function RazdelImushchestvaSuprugovPage() {
  return <RazdelImushchestvaSuprugovClient />;
}
