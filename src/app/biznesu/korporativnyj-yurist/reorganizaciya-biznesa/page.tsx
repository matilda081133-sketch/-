import type { Metadata } from 'next';
import ReorganizaciyaBiznesaClient from './ReorganizaciyaBiznesaClient';

export const metadata: Metadata = {
  title: 'Реорганизация бизнеса в Липецке — юридическое сопровождение | Де-Юре',
  description: 'Сопровождение слияния, присоединения, выделения, разделения и преобразования компаний: структура, решения, кредиторы, регистрация и передача активов. 📞 +7 (4742) 20-15-25.',
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/korporativnyj-yurist/reorganizaciya-biznesa/'
  },
  openGraph: {
    title: 'Реорганизация бизнеса в Липецке — юридическое сопровождение | Де-Юре',
    description: 'Сопровождение слияния, присоединения, выделения, разделения и преобразования компаний: структура, решения, кредиторы, регистрация и передача активов. 📞 +7 (4742) 20-15-25.',
    url: 'https://dejure-help.ru/biznesu/korporativnyj-yurist/reorganizaciya-biznesa/',
    type: 'website',
        images: [
      {
        url: 'https://dejure-help.ru/images/og/business-reorganization-og.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Реорганизация бизнеса в Липецке — ЮК «Де-Юре»'
      }
    ],
    locale: 'ru_RU',
    siteName: 'Юридическая компания «Де-Юре»'
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://dejure-help.ru/images/og/business-reorganization-og.jpg']
  }
};

export default function ReorganizaciyaBiznesaPage() {
  return <ReorganizaciyaBiznesaClient />;
}
