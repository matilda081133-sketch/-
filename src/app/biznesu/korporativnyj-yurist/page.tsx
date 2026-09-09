import type { Metadata } from 'next';
import KorporativnyjYuristClient from './KorporativnyjYuristClient';

export const metadata: Metadata = {
  title: 'Корпоративный юрист в Липецке — услуги бизнесу | Де-Юре',
  description:
    'Корпоративные споры, выход из ООО, взыскание стоимости доли, корпоративные договоры, сделки с долями, покупка бизнеса, реорганизация и защита контроля.',
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/korporativnyj-yurist/'
  },
  openGraph: {
    title: 'Корпоративный юрист в Липецке — услуги бизнесу | Де-Юре',
    description:
      'Корпоративные споры, выход из ООО, взыскание стоимости доли, корпоративные договоры, сделки с долями, покупка бизнеса, реорганизация и защита контроля.',
    url: 'https://dejure-help.ru/biznesu/korporativnyj-yurist/',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Юридическая компания «Де-Юре»'
  }
};

export default function KorporativnyjYuristPage() {
  return <KorporativnyjYuristClient />;
}
