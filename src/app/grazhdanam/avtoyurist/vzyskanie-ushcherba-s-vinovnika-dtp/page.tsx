import { Metadata } from 'next';
import VzyskanieVinovnikClient from './VzyskanieVinovnikClient';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Взыскание ущерба с виновника ДТП в Липецке | Де-Юре',
  description: 'Помощь во взыскании непокрытой части ущерба после ДТП: проверка выплаты ОСАГО, оценка убытков, претензия, иск и представительство в суде.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/avtoyurist/vzyskanie-ushcherba-s-vinovnika-dtp/',
  },
  openGraph: {
    title: 'Взыскание ущерба с виновника ДТП | Де-Юре',
    description: 'Отделим обязательство страховщика от требования к ответственному лицу, докажем размер ущерба и сопроводим взыскание.',
    url: 'https://dejure-help.ru/grazhdanam/avtoyurist/vzyskanie-ushcherba-s-vinovnika-dtp/',
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function VzyskanieVinovnikPage() {
  return <VzyskanieVinovnikClient />;
}
