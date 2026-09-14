import type { Metadata } from 'next';
import VzyskanieZarabotnojPlatyClient from './VzyskanieZarabotnojPlatyClient';

export const metadata: Metadata = {
  title: 'Взыскание заработной платы в Липецке — юрист по зарплате | Де-Юре',
  description: 'Помощь юриста по взысканию заработной платы в Липецке: задержка выплат, расчет при увольнении, невыплата премий, компенсация по ст. 236 ТК РФ и суд.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/trudovoj-yurist/vzyskanie-zarabotnoj-platy/',
  },
  openGraph: {
    title: 'Взыскание заработной платы в Липецке — юрист по зарплате | Де-Юре',
    description: 'Помощь юриста по взысканию заработной платы в Липецке: задержка выплат, расчет при увольнении, невыплата премий, компенсация по ст. 236 ТК РФ и суд.',
    url: 'https://dejure-help.ru/grazhdanam/trudovoj-yurist/vzyskanie-zarabotnoj-platy/',
    siteName: 'ЮК «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/vzyskanie-zarabotnoj-platy-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Взыскание заработной платы в Липецке — ЮК Де-Юре',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Взыскание заработной платы в Липецке — юрист по зарплате | Де-Юре',
    description: 'Помощь юриста по взысканию заработной платы в Липецке: задержка выплат, расчет при увольнении, невыплата премий, компенсация по ст. 236 ТК РФ и суд.',
    images: ['https://dejure-help.ru/images/og/vzyskanie-zarabotnoj-platy-og.jpg'],
  },
};

export default function VzyskanieZarabotnojPlatyClientPage() {
  return <VzyskanieZarabotnojPlatyClient />;
}
