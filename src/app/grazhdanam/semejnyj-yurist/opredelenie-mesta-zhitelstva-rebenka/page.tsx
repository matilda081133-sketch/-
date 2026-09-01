import { Metadata } from 'next';
import OpredelenieMestaZhitelstvaRebenkaClient from './OpredelenieMestaZhitelstvaRebenkaClient';

export const metadata: Metadata = {
  title: 'Определение места жительства ребёнка в Липецке | Де-Юре',
  description: 'Юридическая помощь в спорах о месте жительства ребёнка в Липецке: оценка обстоятельств, доказательства, орган опеки и представительство в суде.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/semejnyj-yurist/opredelenie-mesta-zhitelstva-rebenka/',
  },
  openGraph: {
    title: 'Определение места жительства ребёнка в Липецке | Де-Юре',
    description: 'Юридическая помощь в спорах о месте жительства ребёнка в Липецке: оценка обстоятельств, доказательства, орган опеки и представительство в суде.',
    url: 'https://dejure-help.ru/grazhdanam/semejnyj-yurist/opredelenie-mesta-zhitelstva-rebenka/',
    siteName: 'ЮК «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/smolyaninova.jpg',
        width: 1200,
        height: 630,
        alt: 'Определение места жительства ребёнка в Липецке',
      },
    ],
  },
};

export default function OpredelenieMestaZhitelstvaRebenkaPage() {
  return <OpredelenieMestaZhitelstvaRebenkaClient />;
}
