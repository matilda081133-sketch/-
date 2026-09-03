import { Metadata } from 'next';
import AdvokatKrazhiClient from './AdvokatKrazhiClient';

export const metadata: Metadata = {
  title: 'Адвокат по краже, грабежу и разбою в Липецке | Де-Юре',
  description:
    'Защита по обвинениям в краже (ст. 158), грабеже (ст. 161), разбое (ст. 162 УК РФ) в Липецке. Оспаривание квалификации, оценка ущерба, прекращение за примирением.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-krazham-grabezham-i-razboyam/',
  },
  openGraph: {
    title: 'Адвокат по краже, грабежу и разбою в Липецке | Де-Юре',
    description:
      'Защита по обвинениям в краже (ст. 158), грабеже (ст. 161), разбое (ст. 162 УК РФ) в Липецке. Оспаривание квалификации, оценка ущерба, прекращение за примирением.',
    url: 'https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-krazham-grabezham-i-razboyam/',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/bobkin.jpg',
        width: 1200,
        height: 630,
        alt: 'Адвокат по кражам, грабежам и разбоям в Липецке — ЮК Де-Юре',
      },
    ],
  },
};

export default function AdvokatKrazhiClientPage() {
  return <AdvokatKrazhiClient />;
}
