import { Metadata } from 'next';
import UdoClient from './UdoClient';

export const metadata: Metadata = {
  title: 'Условно-досрочное освобождение: адвокат по УДО в Липецке | Де-Юре',
  description:
    'Помощь адвоката по УДО (ст. 79 УК РФ) и замене наказания (ст. 80 УК РФ) в Липецке и Липецкой области. Сбор документов, снятие взысканий, суд.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/uslovno-dosrochnoe-osvobozhdenie/',
  },
  openGraph: {
    title: 'Условно-досрочное освобождение: адвокат по УДО в Липецке | Де-Юре',
    description:
      'Помощь адвоката по УДО (ст. 79 УК РФ) и замене наказания (ст. 80 УК РФ) в Липецке и Липецкой области. Сбор документов, снятие взысканий, суд.',
    url: 'https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/uslovno-dosrochnoe-osvobozhdenie/',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/bobkin.jpg',
        width: 1200,
        height: 630,
        alt: 'Условно-досрочное освобождение в Липецке — ЮК Де-Юре',
      },
    ],
  },
};

export default function UdoClientPage() {
  return <UdoClient />;
}
