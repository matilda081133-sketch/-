import type { Metadata } from 'next';
import VzyskanieStoimostiDoliClient from './VzyskanieStoimostiDoliClient';

export const metadata: Metadata = {
  title: 'Взыскание действительной стоимости доли ООО в Липецке | Де-Юре',
  description:
    'Помощь при невыплате или занижении действительной стоимости доли ООО: анализ расчёта и активов, оценка, претензия, переговоры и судебное взыскание.',
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/korporativnyj-yurist/vzyskanie-dejstvitelnoj-stoimosti-doli/'
  },
  openGraph: {
    title: 'Взыскание действительной стоимости доли ООО в Липецке | Де-Юре',
    description:
      'Помощь при невыплате или занижении действительной стоимости доли ООО: анализ расчёта и активов, оценка, претензия, переговоры и судебное взыскание.',
    url: 'https://dejure-help.ru/biznesu/korporativnyj-yurist/vzyskanie-dejstvitelnoj-stoimosti-doli/',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Юридическая компания «Де-Юре»'
  }
};

export default function VzyskanieStoimostiDoliPage() {
  return <VzyskanieStoimostiDoliClient />;
}
