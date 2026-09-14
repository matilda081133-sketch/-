import type { Metadata } from 'next';
import NezakonnoeSokrashchenieClient from './NezakonnoeSokrashchenieClient';

export const metadata: Metadata = {
  title: 'Незаконное сокращение в Липецке — помощь юриста | Де-Юре',
  description: 'Помощь юриста при незаконном сокращении штата в Липецке: проверка процедуры, преимущественное право, предложение вакансий, выплата выходного пособия и суд.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/trudovoj-yurist/nezakonnoe-sokrashchenie/',
  },
  openGraph: {
    title: 'Незаконное сокращение в Липецке — помощь юриста | Де-Юре',
    description: 'Помощь юриста при незаконном сокращении штата в Липецке: проверка процедуры, преимущественное право, предложение вакансий, выплата выходного пособия и суд.',
    url: 'https://dejure-help.ru/grazhdanam/trudovoj-yurist/nezakonnoe-sokrashchenie/',
    siteName: 'ЮК «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/nezakonnoe-sokrashchenie-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Помощь юриста при незаконном сокращении в Липецке — ЮК Де-Юре',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Незаконное сокращение в Липецке — помощь юриста | Де-Юре',
    description: 'Помощь юриста при незаконном сокращении штата в Липецке: проверка процедуры, преимущественное право, предложение вакансий, выплата выходного пособия и суд.',
    images: ['https://dejure-help.ru/images/og/nezakonnoe-sokrashchenie-og.jpg'],
  },
};

export default function NezakonnoeSokrashchenieClientPage() {
  return <NezakonnoeSokrashchenieClient />;
}
