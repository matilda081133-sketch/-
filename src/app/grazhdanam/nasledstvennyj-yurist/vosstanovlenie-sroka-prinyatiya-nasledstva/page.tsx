import { Metadata } from 'next';
import VosstanovlenieSrokaPrinyatiyaNasledstvaClient from './VosstanovlenieSrokaPrinyatiyaNasledstvaClient';

export const metadata: Metadata = {
  title: 'Восстановление срока принятия наследства в Липецке | Де-Юре',
  description: 'Помощь в восстановлении пропущенного 6-месячного срока принятия наследства через суд в Липецке по ст. 1155 ГК РФ. Докажем уважительность причин и защитим вашу долю.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/nasledstvennyj-yurist/vosstanovlenie-sroka-prinyatiya-nasledstva/',
  },
  openGraph: {
    title: 'Восстановление срока принятия наследства в Липецке | Де-Юре',
    description: 'Помощь в восстановлении пропущенного 6-месячного срока принятия наследства через суд в Липецке по ст. 1155 ГК РФ. Докажем уважительность причин и защитим вашу долю.',
    url: 'https://dejure-help.ru/grazhdanam/nasledstvennyj-yurist/vosstanovlenie-sroka-prinyatiya-nasledstva/',
    siteName: 'ЮК «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/smolyaninova.jpg',
        width: 1200,
        height: 630,
        alt: 'Восстановление срока принятия наследства в Липецке',
      },
    ],
  },
};

export default function Page() {
  return <VosstanovlenieSrokaPrinyatiyaNasledstvaClient />;
}
