import { Metadata } from 'next';
import ZashchitaPoterpevshegoClient from './ZashchitaPoterpevshegoClient';

export const metadata: Metadata = {
  title: 'Адвокат для потерпевшего по уголовному делу в Липецке | Де-Юре',
  description:
    'Представительство потерпевших по уголовным делам в Липецке: возбуждение дела, гражданский иск, возмещение ущерба, контроль следствия и участие в суде.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/zashchita-poterpevshego/',
  },
  openGraph: {
    title: 'Адвокат для потерпевшего по уголовному делу в Липецке | Де-Юре',
    description:
      'Представительство потерпевших по уголовным делам в Липецке: возбуждение дела, гражданский иск, возмещение ущерба, контроль следствия и участие в суде.',
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
