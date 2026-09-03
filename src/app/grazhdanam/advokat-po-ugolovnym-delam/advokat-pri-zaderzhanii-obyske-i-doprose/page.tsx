import { Metadata } from 'next';
import AdvokatZaderzhanieClient from './AdvokatZaderzhanieClient';

export const metadata: Metadata = {
  title: 'Адвокат при задержании, обыске и допросе в Липецке | Де-Юре',
  description:
    'Срочный выезд адвоката при задержании, обыске, выемке, допросе в Липецке. Защита от давления, фиксация нарушений в протоколах. В рабочее время Пн–Пт 09:00–18:00.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-pri-zaderzhanii-obyske-i-doprose/',
  },
  openGraph: {
    title: 'Адвокат при задержании, обыске и допросе в Липецке | Де-Юре',
    description:
      'Срочный выезд адвоката при задержании, обыске, выемке, допросе в Липецке. Защита от давления, фиксация нарушений в протоколах. В рабочее время Пн–Пт 09:00–18:00.',
    url: 'https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-pri-zaderzhanii-obyske-i-doprose/',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/bobkin.jpg',
        width: 1200,
        height: 630,
        alt: 'Адвокат при задержании, обыске и допросе в Липецке — ЮК Де-Юре',
      },
    ],
  },
};

export default function AdvokatZaderzhanieClientPage() {
  return <AdvokatZaderzhanieClient />;
}
