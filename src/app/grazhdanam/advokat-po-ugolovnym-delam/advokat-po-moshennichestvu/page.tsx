import { Metadata } from 'next';
import AdvokatMoshennichestvoClient from './AdvokatMoshennichestvoClient';

export const metadata: Metadata = {
  title: 'Адвокат по мошенничеству в Липецке — ст. 159 УК РФ | Де-Юре',
  description:
    'Защита по делам о мошенничестве (ст. 159 УК РФ) в Липецке: проверка умысла, анализ договоров, платежей, переписки. Сопровождение допросов, следствия и суда.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-moshennichestvu/',
  },
  openGraph: {
    title: 'Адвокат по мошенничеству в Липецке — ст. 159 УК РФ | Де-Юре',
    description:
      'Защита по делам о мошенничестве (ст. 159 УК РФ) в Липецке: проверка умысла, анализ договоров, платежей, переписки. Сопровождение допросов, следствия и суда.',
    url: 'https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-moshennichestvu/',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/bobkin.jpg',
        width: 1200,
        height: 630,
        alt: 'Адвокат по мошенничеству в Липецке — ЮК Де-Юре',
      },
    ],
  },
};

export default function AdvokatMoshennichestvoClientPage() {
  return <AdvokatMoshennichestvoClient />;
}
