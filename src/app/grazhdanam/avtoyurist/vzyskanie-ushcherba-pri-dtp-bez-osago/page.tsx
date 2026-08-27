import React from 'react';
import type { Metadata } from 'next';
import DtpBezOsagoClient from './DtpBezOsagoClient';

export const metadata: Metadata = {
  title: 'Взыскание ущерба при ДТП без ОСАГО в Липецке | Де-Юре',
  description: 'У виновника ДТП нет ОСАГО? Поможем зафиксировать обстоятельства, оценить ущерб, определить ответчика, подготовить претензию и иск.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/avtoyurist/vzyskanie-ushcherba-pri-dtp-bez-osago/',
  },
  openGraph: {
    title: 'Взыскание ущерба при ДТП без ОСАГО | Де-Юре',
    description: 'Проверим статус полиса и ответчика, соберём доказательства ущерба и сопроводим переговоры или суд.',
    url: 'https://dejure-help.ru/grazhdanam/avtoyurist/vzyskanie-ushcherba-pri-dtp-bez-osago/',
    type: 'website',
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
  },
};

export default function DtpBezOsagoPage() {
  return <DtpBezOsagoClient />;
}
