import { Metadata } from 'next';
import UstanovlenieFaktaPrinyatiyaNasledstvaClient from './UstanovlenieFaktaPrinyatiyaNasledstvaClient';

export const metadata: Metadata = {
  title: 'Установление факта принятия наследства в Липецке | Де-Юре',
  description: 'Помощь в установлении факта принятия наследства через суд в Липецке, если 6-месячный срок у нотариуса пропущен. Сбор доказательств, подготовка иска и признание права собственности.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/nasledstvennyj-yurist/ustanovlenie-fakta-prinyatiya-nasledstva/',
  },
  openGraph: {
    title: 'Установление факта принятия наследства в Липецке | Де-Юре',
    description: 'Помощь в установлении факта принятия наследства через суд в Липецке, если 6-месячный срок у нотариуса пропущен. Сбор доказательств, подготовка иска и признание права собственности.',
    url: 'https://dejure-help.ru/grazhdanam/nasledstvennyj-yurist/ustanovlenie-fakta-prinyatiya-nasledstva/',
    siteName: 'ЮК «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/smolyaninova.jpg',
        width: 1200,
        height: 630,
        alt: 'Установление факта принятия наследства в Липецке',
      },
    ],
  },
};

export default function Page() {
  return <UstanovlenieFaktaPrinyatiyaNasledstvaClient />;
}
