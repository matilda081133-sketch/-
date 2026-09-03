import { Metadata } from 'next';
import AdvokatDtpClient from './AdvokatDtpClient';

export const metadata: Metadata = {
  title: 'Адвокат по ДТП с пострадавшими в Липецке — ст. 264 УК РФ | Де-Юре',
  description:
    'Защита водителей и представительство потерпевших по ст. 264 УК РФ при ДТП с тяжким вредом здоровью или погибшими в Липецке. Экспертизы, автотехника, суд.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-dtp-s-postradavshimi/',
  },
  openGraph: {
    title: 'Адвокат по ДТП с пострадавшими в Липецке — ст. 264 УК РФ | Де-Юре',
    description:
      'Защита водителей и представительство потерпевших по ст. 264 УК РФ при ДТП с тяжким вредом здоровью или погибшими в Липецке. Экспертизы, автотехника, суд.',
    url: 'https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-dtp-s-postradavshimi/',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/bobkin.jpg',
        width: 1200,
        height: 630,
        alt: 'Адвокат по ДТП с пострадавшими в Липецке — ЮК Де-Юре',
      },
    ],
  },
};

export default function AdvokatDtpClientPage() {
  return <AdvokatDtpClient />;
}
