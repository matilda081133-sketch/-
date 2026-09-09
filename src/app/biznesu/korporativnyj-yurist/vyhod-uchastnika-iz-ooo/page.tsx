import type { Metadata } from 'next';
import VyhodUchastnikaClient from './VyhodUchastnikaClient';

export const metadata: Metadata = {
  title: 'Выход участника из ООО в Липецке | Де-Юре',
  description:
    'Сопровождение выхода участника из ООО: проверка устава, подготовка к нотариусу, контроль изменений в ЕГРЮЛ и оформление последствий перехода доли.',
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/korporativnyj-yurist/vyhod-uchastnika-iz-ooo/'
  },
  openGraph: {
    title: 'Выход участника из ООО в Липецке | Де-Юре',
    description:
      'Сопровождение выхода участника из ООО: проверка устава, подготовка к нотариусу, контроль изменений в ЕГРЮЛ и оформление последствий перехода доли.',
    url: 'https://dejure-help.ru/biznesu/korporativnyj-yurist/vyhod-uchastnika-iz-ooo/',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Юридическая компания «Де-Юре»'
  }
};

export default function VyhodUchastnikaPage() {
  return <VyhodUchastnikaClient />;
}
