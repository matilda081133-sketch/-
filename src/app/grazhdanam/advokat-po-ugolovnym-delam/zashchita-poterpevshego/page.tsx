import { Metadata } from 'next';
import ZashchitaPoterpevshegoClient from './ZashchitaPoterpevshegoClient';

export const metadata: Metadata = {
  title: 'Адвокат для потерпевшего по уголовному делу в Липецке | Де-Юре',
  description:
    'Представительство потерпевшего на следствии и в суде: ходатайства, жалобы, гражданский иск, возмещение вреда и обжалование решений.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/zashchita-poterpevshego/',
  },
  openGraph: {
    title: 'Адвокат для потерпевшего по уголовному делу в Липецке | Де-Юре',
    description:
      'Представительство потерпевшего на следствии и в суде: ходатайства, жалобы, гражданский иск, возмещение вреда и обжалование решений.',
    url: 'https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/zashchita-poterpevshego/',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/bobkin.jpg',
        width: 1200,
        height: 630,
        alt: 'Защита прав потерпевшего в Липецке — ЮК Де-Юре',
      },
    ],
  },
};

export default function ZashchitaPoterpevshegoClientPage() {
  return <ZashchitaPoterpevshegoClient />;
}
