import React from 'react';
import UstanovlenieFaktaPrinyatiyaNasledstvaClient from './UstanovlenieFaktaPrinyatiyaNasledstvaClient';

export const metadata = {
  title: 'Установление факта принятия наследства в Липецке | Де-Юре',
  description: 'Помощь в установлении факта принятия наследства через суд в Липецке, если 6-месячный срок у нотариуса пропущен. Сбор доказательств, подготовка иска и признание права собственности.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/nasledstvennyj-yurist/ustanovlenie-fakta-prinyatiya-nasledstva/'
  },
  openGraph: {
    title: 'Установление факта принятия наследства в Липецке | Де-Юре',
    description: 'Помощь в установлении факта принятия наследства через суд в Липецке, если 6-месячный срок у нотариуса пропущен. Сбор доказательств, подготовка иска и признание права собственности.',
    url: 'https://dejure-help.ru/grazhdanam/nasledstvennyj-yurist/ustanovlenie-fakta-prinyatiya-nasledstva/',
    siteName: 'ЮК «Де-Юре»',
    locale: 'ru_RU',
    type: 'website'
  }
};

export default function Page() {
  return <UstanovlenieFaktaPrinyatiyaNasledstvaClient />;
}
