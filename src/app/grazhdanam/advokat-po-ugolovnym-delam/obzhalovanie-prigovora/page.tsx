import { Metadata } from 'next';
import ObzhalovaniePrigovoraClient from './ObzhalovaniePrigovoraClient';

export const metadata: Metadata = {
  title: 'Обжалование приговора по уголовному делу в Липецке | Де-Юре',
  description:
    'Апелляционное и кассационное обжалование приговоров по уголовным делам в Липецке. Аудит протоколов, выявление нарушений УПК, отмена и смягчение наказания.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/obzhalovanie-prigovora/',
  },
  openGraph: {
    title: 'Обжалование приговора по уголовному делу в Липецке | Де-Юре',
    description:
      'Апелляционное и кассационное обжалование приговоров по уголовным делам в Липецке. Аудит протоколов, выявление нарушений УПК, отмена и смягчение наказания.',
    url: 'https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/obzhalovanie-prigovora/',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/bobkin.jpg',
        width: 1200,
        height: 630,
        alt: 'Обжалование приговора в Липецке — ЮК Де-Юре',
      },
    ],
  },
};

export default function ObzhalovaniePrigovoraClientPage() {
  return <ObzhalovaniePrigovoraClient />;
}
