import { Metadata } from 'next';
import UstanovlenieIOsparivanieOttsovstvaClient from './UstanovlenieIOsparivanieOttsovstvaClient';

export const metadata: Metadata = {
  title: 'Установление и оспаривание отцовства в Липецке | Де-Юре',
  description: 'Юридическая помощь в Липецке при установлении и оспаривании отцовства: оценка доказательств, подготовка иска, экспертиза и представительство в суде.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/semejnyj-yurist/ustanovlenie-i-osparivanie-ottsovstva/',
  },
  openGraph: {
    title: 'Установление и оспаривание отцовства в Липецке | Де-Юре',
    description: 'Юридическая помощь в Липецке при установлении и оспаривании отцовства: оценка доказательств, подготовка иска, экспертиза и представительство в суде.',
    url: 'https://dejure-help.ru/grazhdanam/semejnyj-yurist/ustanovlenie-i-osparivanie-ottsovstva/',
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

export default function UstanovlenieIOsparivanieOttsovstvaPage() {
  return <UstanovlenieIOsparivanieOttsovstvaClient />;
}
