import type { Metadata } from 'next';
import IskArbitrazhClient from './IskArbitrazhClient';

export const metadata: Metadata = {
  title: 'Составление и подача иска в арбитражный суд в Липецке | Де-Юре',
  description:
    'Подготовим иск в арбитражный суд: проверим требования, подсудность, претензионный порядок, доказательства и расчёт, сформируем комплект и сопроводим подачу.',
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/isk-v-arbitrazhnyj-sud/'
  },
  openGraph: {
    title: 'Составление и подача иска в арбитражный суд в Липецке | Де-Юре',
    description:
      'Подготовка искового заявления в арбитражный суд: правовая квалификация, расчет цены иска и пошлины, формирование приложений и подача через «Мой Арбитр».',
    url: 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/isk-v-arbitrazhnyj-sud/',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Юридическая компания «Де-Юре»'
  }
};

export default function IskArbitrazhPage() {
  return <IskArbitrazhClient />;
}
