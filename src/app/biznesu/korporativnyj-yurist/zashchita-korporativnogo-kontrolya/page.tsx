import type { Metadata } from 'next';
import ZashchitaKontrolyaClient from './ZashchitaKontrolyaClient';

export const metadata: Metadata = {
  title: 'Защита корпоративного контроля в Липецке — восстановление управления | Де-Юре',
  description: 'Защита и восстановление корпоративного контроля: незаконная смена директора или участников, изменения в ЕГРЮЛ, блокировка счетов и риск вывода активов. 📞 +7 (4742) 20-15-25.',
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/korporativnyj-yurist/zashchita-korporativnogo-kontrolya/'
  },
  openGraph: {
    title: 'Защита корпоративного контроля в Липецке — восстановление управления | Де-Юре',
    description: 'Защита и восстановление корпоративного контроля: незаконная смена директора или участников, изменения в ЕГРЮЛ, блокировка счетов и риск вывода активов. 📞 +7 (4742) 20-15-25.',
    url: 'https://dejure-help.ru/biznesu/korporativnyj-yurist/zashchita-korporativnogo-kontrolya/',
    type: 'website',
        images: [
      {
        url: 'https://dejure-help.ru/images/og/corporate-control-protection-og.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Защита корпоративного контроля над ООО в Липецке — ЮК «Де-Юре»'
      }
    ],
    locale: 'ru_RU',
    siteName: 'Юридическая компания «Де-Юре»'
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://dejure-help.ru/images/og/corporate-control-protection-og.jpg']
  }
};

export default function ZashchitaKontrolyaPage() {
  return <ZashchitaKontrolyaClient />;
}
