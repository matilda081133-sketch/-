import React from 'react';
import VosstanovlenieSrokaPrinyatiyaNasledstvaClient from './VosstanovlenieSrokaPrinyatiyaNasledstvaClient';

export const metadata = {
  title: 'Восстановление срока принятия наследства в Липецке | Де-Юре',
  description: 'Помощь в восстановлении пропущенного 6-месячного срока принятия наследства через суд в Липецке по ст. 1155 ГК РФ. Докажем уважительность причин и защитим вашу долю.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/nasledstvennyj-yurist/vosstanovlenie-sroka-prinyatiya-nasledstva/'
  },
  openGraph: {
    title: 'Восстановление срока принятия наследства в Липецке | Де-Юре',
    description: 'Помощь в восстановлении пропущенного 6-месячного срока принятия наследства через суд в Липецке по ст. 1155 ГК РФ. Докажем уважительность причин и защитим вашу долю.',
    url: 'https://dejure-help.ru/grazhdanam/nasledstvennyj-yurist/vosstanovlenie-sroka-prinyatiya-nasledstva/',
    siteName: 'ЮК «Де-Юре»',
    locale: 'ru_RU',
    type: 'website'
  }
};

export default function Page() {
  return <VosstanovlenieSrokaPrinyatiyaNasledstvaClient />;
}
