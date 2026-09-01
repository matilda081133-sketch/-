import { Metadata } from 'next';
import NasledstvennyjClient from './NasledstvennyjClient';

export const metadata: Metadata = {
  title: 'Наследственный юрист в Липецке — помощь по наследственным делам | Де-Юре',
  description: 'Помощь наследственного юриста в Липецке: оформление у нотариуса, восстановление срока, установление факта принятия, оспаривание завещания и раздел наследства.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/nasledstvennyj-yurist/',
  },
  openGraph: {
    title: 'Наследственный юрист в Липецке — помощь по наследственным делам | Де-Юре',
    description: 'Помощь наследственного юриста в Липецке: оформление у нотариуса, восстановление срока, установление факта принятия, оспаривание завещания и раздел наследства.',
    url: 'https://dejure-help.ru/grazhdanam/nasledstvennyj-yurist/',
    siteName: 'ЮК «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/smolyaninova.jpg',
        width: 1200,
        height: 630,
        alt: 'Наследственный юрист в Липецке',
      },
    ],
  },
};

export default function Page() {
  return <NasledstvennyjClient />;
}
