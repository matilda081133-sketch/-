import { Metadata } from 'next';
import AdvokatNarkotikiClient from './AdvokatNarkotikiClient';

export const metadata: Metadata = {
  title: 'Адвокат по статье 228 в Липецке — дела о наркотиках | Де-Юре',
  description:
    'Защита по делам о наркотиках (ст. 228, 228.1 УК РФ) в Липецке. Проверка законности задержания, досмотра, экспертиз и веса вещества. Следственный опыт.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-delam-o-narkotikah/',
  },
  openGraph: {
    title: 'Адвокат по статье 228 в Липецке — дела о наркотиках | Де-Юре',
    description:
      'Защита по делам о наркотиках (ст. 228, 228.1 УК РФ) в Липецке. Проверка законности задержания, досмотра, экспертиз и веса вещества. Следственный опыт.',
    url: 'https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-delam-o-narkotikah/',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/bobkin.jpg',
        width: 1200,
        height: 630,
        alt: 'Адвокат по делам о наркотиках в Липецке — ЮК Де-Юре',
      },
    ],
  },
};

export default function AdvokatNarkotikiClientPage() {
  return <AdvokatNarkotikiClient />;
}
