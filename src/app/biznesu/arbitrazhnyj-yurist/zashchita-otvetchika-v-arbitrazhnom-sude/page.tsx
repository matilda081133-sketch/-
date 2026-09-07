import type { Metadata } from 'next';
import ZashchitaOtvetchikaClient from './ZashchitaOtvetchikaClient';

export const metadata: Metadata = {
  title: 'Защита ответчика в арбитражном суде в Липецке | Де-Юре',
  description:
    'Получили иск в арбитражный суд? Проверим материалы и сроки, подготовим отзыв и ходатайства, выстроим позицию и представим интересы ответчика.',
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/zashchita-otvetchika-v-arbitrazhnom-sude/'
  },
  openGraph: {
    title: 'Защита ответчика в арбитражном суде в Липецке | Де-Юре',
    description:
      'Защита интересов ответчика в арбитражном суде: срочный анализ иска, подготовка мотивированного отзыва, снижение неустойки, встречный иск и процессуальное представительство.',
    url: 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/zashchita-otvetchika-v-arbitrazhnom-sude/',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Юридическая компания «Де-Юре»'
  }
};

export default function ZashchitaOtvetchikaPage() {
  return <ZashchitaOtvetchikaClient />;
}
