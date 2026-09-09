import type { Metadata } from 'next';
import ReorganizaciyaBiznesaClient from './ReorganizaciyaBiznesaClient';

export const metadata: Metadata = {
  title: 'Реорганизация бизнеса в Липецке — юридическое сопровождение | Де-Юре',
  description:
    'Сопровождение слияния, присоединения, выделения, разделения и преобразования компаний: структура, решения, кредиторы, регистрация и передача активов.',
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/korporativnyj-yurist/reorganizaciya-biznesa/'
  },
  openGraph: {
    title: 'Реорганизация бизнеса в Липецке — юридическое сопровождение | Де-Юре',
    description:
      'Сопровождение слияния, присоединения, выделения, разделения и преобразования компаний: структура, решения, кредиторы, регистрация и передача активов.',
    url: 'https://dejure-help.ru/biznesu/korporativnyj-yurist/reorganizaciya-biznesa/',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Юридическая компания «Де-Юре»'
  }
};

export default function ReorganizaciyaBiznesaPage() {
  return <ReorganizaciyaBiznesaClient />;
}
