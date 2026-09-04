import React from 'react';
import BankrotstvoFizicheskihLicClient from './BankrotstvoFizicheskihLicClient';

export const metadata = {
  title: 'Банкротство физических лиц в Липецке — помощь юриста | Де-Юре',
  description: 'Юридическая помощь при банкротстве физических лиц в Липецке: оценим долги, имущество и сделки, объясним риски и сопроводим процедуру в суде.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/bankrotstvo-fizicheskih-lic/'
  },
  openGraph: {
    title: 'Банкротство физических лиц в Липецке | Де-Юре',
    description: 'Проверим, подходит ли банкротство в Вашей ситуации, объясним риски для имущества и сопроводим судебную процедуру.',
    url: 'https://dejure-help.ru/grazhdanam/bankrotstvo-fizicheskih-lic/',
    siteName: 'ЮК «Де-Юре»',
    images: [
      {
        url: 'https://dejure-help.ru/images/nacheshnikov.jpg',
        width: 1200,
        height: 630,
        alt: 'Владимир Начешников — специалист ЮК «Де-Юре»'
      }
    ],
    locale: 'ru_RU',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Банкротство физических лиц в Липецке | Де-Юре',
    description: 'Проверим, подходит ли банкротство в Вашей ситуации, объясним риски для имущества и сопроводим судебную процедуру.',
    images: ['https://dejure-help.ru/images/nacheshnikov.jpg']
  }
};

export default function BankrotstvoFizicheskihLicPage() {
  return <BankrotstvoFizicheskihLicClient />;
}
