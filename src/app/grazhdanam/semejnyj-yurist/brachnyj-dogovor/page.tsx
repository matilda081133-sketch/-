import { Metadata } from 'next';
import BrachnyjDogovorClient from './BrachnyjDogovorClient';

export const metadata: Metadata = {
  title: 'Брачный договор в Липецке — составление и проверка | Де-Юре',
  description: 'Юридическая помощь по брачному договору в Липецке: составление, проверка, изменение, расторжение и оспаривание. Подготовка к нотариальному удостоверению.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/semejnyj-yurist/brachnyj-dogovor/',
  },
  openGraph: {
    title: 'Брачный договор в Липецке — составление и проверка | Де-Юре',
    description: 'Юридическая помощь по брачному договору в Липецке: составление, проверка, изменение, расторжение и оспаривание. Подготовка к нотариальному удостоверению.',
    url: 'https://dejure-help.ru/grazhdanam/semejnyj-yurist/brachnyj-dogovor/',
    siteName: 'ЮК «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/smolyaninova.jpg',
        width: 1200,
        height: 630,
        alt: 'Брачный договор в Липецке',
      },
    ],
  },
};

export default function BrachnyjDogovorPage() {
  return <BrachnyjDogovorClient />;
}
