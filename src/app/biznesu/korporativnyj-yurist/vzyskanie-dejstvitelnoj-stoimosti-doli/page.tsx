import type { Metadata } from 'next';
import VzyskanieStoimostiDoliClient from './VzyskanieStoimostiDoliClient';

export const metadata: Metadata = {
  title: 'Взыскание действительной стоимости доли ООО в Липецке | Де-Юре',
  description: 'Помощь при невыплате или занижении действительной стоимости доли ООО: анализ расчёта и активов, оценка, претензия, переговоры и судебное взыскание. 📞 +7 (4742) 20-15-25.',
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/korporativnyj-yurist/vzyskanie-dejstvitelnoj-stoimosti-doli/'
  },
  openGraph: {
    title: 'Взыскание действительной стоимости доли ООО в Липецке | Де-Юре',
    description: 'Помощь при невыплате или занижении действительной стоимости доли ООО: анализ расчёта и активов, оценка, претензия, переговоры и судебное взыскание. 📞 +7 (4742) 20-15-25.',
    url: 'https://dejure-help.ru/biznesu/korporativnyj-yurist/vzyskanie-dejstvitelnoj-stoimosti-doli/',
    type: 'website',
        images: [
      {
        url: 'https://dejure-help.ru/images/og/actual-share-value-recovery-og.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Взыскание действительной стоимости доли ООО в Липецке — ЮК «Де-Юре»'
      }
    ],
    locale: 'ru_RU',
    siteName: 'Юридическая компания «Де-Юре»'
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://dejure-help.ru/images/og/actual-share-value-recovery-og.jpg']
  }
};

export default function VzyskanieStoimostiDoliPage() {
  return <VzyskanieStoimostiDoliClient />;
}
