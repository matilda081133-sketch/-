import { Metadata } from 'next';
import VzyskanieUshcherbaB2BClient from './VzyskanieUshcherbaB2BClient';

export const metadata: Metadata = {
  title: "Взыскание материального ущерба с работника в Липецке | Де-Юре",
  description: "Помогаем работодателям законно взыскать прямой ущерб с работника: служебная проверка, договор о материальной ответственности, переговоры и суд. ЮК «Де-Юре».",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Взыскание материального ущерба с работника | Де-Юре",
    description: "Фиксация обстоятельств и размера прямого ущерба, служебная проверка, добровольное возмещение либо взыскание через суд.",
    url: "https://dejure-help.ru/biznesu/trudovye-spory-s-rabotnikami/vzyskanie-materialnogo-ushcherba-s-rabotnika/",
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: "https://dejure-help.ru/biznesu/trudovye-spory-s-rabotnikami/vzyskanie-materialnogo-ushcherba-s-rabotnika/",
  },
};

export default function Page() {
  return <VzyskanieUshcherbaB2BClient />;
}
