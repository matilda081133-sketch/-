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
  },
};

export default function NezakonnoeSokrashchenieClientPage() {
  return <NezakonnoeSokrashchenieClient />;
}
