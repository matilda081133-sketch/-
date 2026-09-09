import type { Metadata } from 'next';
import ZashchitaKontrolyaClient from './ZashchitaKontrolyaClient';

export const metadata: Metadata = {
  title: 'Защита корпоративного контроля в Липецке — восстановление управления | Де-Юре',
  description:
    'Защита и восстановление корпоративного контроля: незаконная смена директора или участников, изменения в ЕГРЮЛ, блокировка счетов и риск вывода активов.',
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/korporativnyj-yurist/zashchita-korporativnogo-kontrolya/'
  },
  openGraph: {
    title: 'Защита корпоративного контроля в Липецке — восстановление управления | Де-Юре',
    description:
      'Защита и восстановление корпоративного контроля: незаконная смена директора или участников, изменения в ЕГРЮЛ, блокировка счетов и риск вывода активов.',
    url: 'https://dejure-help.ru/biznesu/korporativnyj-yurist/zashchita-korporativnogo-kontrolya/',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Юридическая компания «Де-Юре»'
  }
};

export default function ZashchitaKontrolyaPage() {
  return <ZashchitaKontrolyaClient />;
}
