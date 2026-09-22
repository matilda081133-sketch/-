import type { Metadata } from 'next';
import VyhodUchastnikaClient from './VyhodUchastnikaClient';

export const metadata: Metadata = {
  title: 'Выход участника из ООО в Липецке | Де-Юре',
  description: 'Сопровождение выхода участника из ООО: проверка устава, подготовка к нотариусу, контроль изменений в ЕГРЮЛ и оформление последствий перехода доли. 📞 +7 (4742) 20-15-25.',
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/korporativnyj-yurist/vyhod-uchastnika-iz-ooo/'
  },
  openGraph: {
    title: 'Выход участника из ООО в Липецке | Де-Юре',
    description: 'Сопровождение выхода участника из ООО: проверка устава, подготовка к нотариусу, контроль изменений в ЕГРЮЛ и оформление последствий перехода доли. 📞 +7 (4742) 20-15-25.',
    url: 'https://dejure-help.ru/biznesu/korporativnyj-yurist/vyhod-uchastnika-iz-ooo/',
    type: 'website',
        images: [
      {
        url: 'https://dejure-help.ru/images/og/exit-from-ooo-og.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Выход участника из ООО в Липецке — ЮК «Де-Юре»'
      }
    ],
    locale: 'ru_RU',
    siteName: 'Юридическая компания «Де-Юре»'
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://dejure-help.ru/images/og/exit-from-ooo-og.jpg']
  }
};

export default function VyhodUchastnikaPage() {
  return <VyhodUchastnikaClient />;
}
