import type { Metadata } from 'next';
import NezakonnoeUvolnenieClient from './NezakonnoeUvolnenieClient';

export const metadata: Metadata = {
  title: 'Незаконное увольнение в Липецке — помощь юриста | Де-Юре',
  description: 'Помощь юриста при незаконном увольнении в Липецке: восстановление на работе, отмена дисциплинарных взысканий, взыскание среднего заработка за вынужденный прогул.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/trudovoj-yurist/nezakonnoe-uvolnenie/',
  },
  openGraph: {
    title: 'Незаконное увольнение в Липецке — помощь юриста | Де-Юре',
    description: 'Помощь юриста при незаконном увольнении в Липецке: восстановление на работе, отмена дисциплинарных взысканий, взыскание среднего заработка за вынужденный прогул.',
    url: 'https://dejure-help.ru/grazhdanam/trudovoj-yurist/nezakonnoe-uvolnenie/',
    siteName: 'ЮК «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function NezakonnoeUvolnenieClientPage() {
  return <NezakonnoeUvolnenieClient />;
}
