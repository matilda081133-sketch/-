import type { Metadata } from 'next';
import SdelkiSDolyamiClient from './SdelkiSDolyamiClient';

export const metadata: Metadata = {
  title: 'Сделки с долями ООО в Липецке — юридическое сопровождение | Де-Юре',
  description:
    'Сопровождение продажи, покупки и дарения доли ООО: проверка устава и ограничений, оферта и согласия, договор, расчёты, нотариус и регистрация перехода.',
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/korporativnyj-yurist/sdelki-s-dolyami-ooo/'
  },
  openGraph: {
    title: 'Сделки с долями ООО в Липецке — юридическое сопровождение | Де-Юре',
    description:
      'Сопровождение продажи, покупки и дарения доли ООО: проверка устава и ограничений, оферта и согласия, договор, расчёты, нотариус и регистрация перехода.',
    url: 'https://dejure-help.ru/biznesu/korporativnyj-yurist/sdelki-s-dolyami-ooo/',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Юридическая компания «Де-Юре»'
  }
};

export default function SdelkiSDolyamiPage() {
  return <SdelkiSDolyamiClient />;
}
