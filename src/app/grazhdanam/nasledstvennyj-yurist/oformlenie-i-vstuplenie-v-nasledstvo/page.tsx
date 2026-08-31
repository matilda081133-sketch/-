import React from 'react';
import OformlenieIVstuplenieVNasledstvoClient from './OformlenieIVstuplenieVNasledstvoClient';

export const metadata = {
  title: 'Оформление и вступление в наследство в Липецке | Де-Юре',
  description: 'Помощь в оформлении наследства по закону и завещанию в Липецке: нотариус, сбор документов, подтверждение родства и прав. Разберём ситуацию и поможем оформить имущество.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/nasledstvennyj-yurist/oformlenie-i-vstuplenie-v-nasledstvo/'
  },
  openGraph: {
    title: 'Оформление и вступление в наследство в Липецке | Де-Юре',
    description: 'Помощь в оформлении наследства по закону и завещанию в Липецке: нотариус, сбор документов, подтверждение родства и прав. Разберём ситуацию и поможем оформить имущество.',
    url: 'https://dejure-help.ru/grazhdanam/nasledstvennyj-yurist/oformlenie-i-vstuplenie-v-nasledstvo/',
    siteName: 'ЮК «Де-Юре»',
    locale: 'ru_RU',
    type: 'website'
  }
};

export default function Page() {
  return <OformlenieIVstuplenieVNasledstvoClient />;
}
