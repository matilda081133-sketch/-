import type { Metadata } from 'next';
import NezakonnoeUvolnenieClient from './NezakonnoeUvolnenieClient';

export const metadata: Metadata = {
  title: 'Незаконное увольнение в Липецке — помощь юриста | Де-Юре',
  description: 'Помощь юриста при незаконном увольнении в Липецке: восстановление на работе, отмена дисциплинарных взысканий, взыскание среднего заработка за вынужденный прогул. 📞 +7 (4742) 20-15-25.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/trudovoj-yurist/nezakonnoe-uvolnenie/',
  },
  openGraph: {
    title: 'Незаконное увольнение в Липецке — помощь юриста | Де-Юре',
    description: 'Помощь юриста при незаконном увольнении в Липецке: восстановление на работе, отмена дисциплинарных взысканий, взыскание среднего заработка за вынужденный прогул. 📞 +7 (4742) 20-15-25.',
    url: 'https://dejure-help.ru/grazhdanam/trudovoj-yurist/nezakonnoe-uvolnenie/',
    siteName: 'ЮК «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/nezakonnoe-uvolnenie-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Помощь юриста при незаконном увольнении в Липецке — ЮК Де-Юре',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Незаконное увольнение в Липецке — помощь юриста | Де-Юре',
    description: 'Помощь юриста при незаконном увольнении в Липецке: восстановление на работе, отмена дисциплинарных взысканий, взыскание среднего заработка за вынужденный прогул. 📞 +7 (4742) 20-15-25.',
    images: ['https://dejure-help.ru/images/og/nezakonnoe-uvolnenie-og.jpg'],
  },
};

export default function NezakonnoeUvolnenieClientPage() {
  return <NezakonnoeUvolnenieClient />;
}
