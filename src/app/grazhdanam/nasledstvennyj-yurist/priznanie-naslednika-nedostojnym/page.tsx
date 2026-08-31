import React from 'react';
import PriznanieNaslednikaNedostojnymClient from './PriznanieNaslednikaNedostojnymClient';

export const metadata = {
  title: 'Признание наследника недостойным в Липецке | Де-Юре',
  description: 'Юридическая помощь по делам о признании наследника недостойным и исключении из наследства в Липецке. Проверим основания по ст. 1117 ГК РФ и представим интересы в суде.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/nasledstvennyj-yurist/priznanie-naslednika-nedostojnym/'
  },
  openGraph: {
    title: 'Признание наследника недостойным в Липецке | Де-Юре',
    description: 'Юридическая помощь по делам о признании наследника недостойным и исключении из наследства в Липецке. Проверим основания по ст. 1117 ГК РФ и представим интересы в суде.',
    url: 'https://dejure-help.ru/grazhdanam/nasledstvennyj-yurist/priznanie-naslednika-nedostojnym/',
    siteName: 'ЮК «Де-Юре»',
    locale: 'ru_RU',
    type: 'website'
  }
};

export default function Page() {
  return <PriznanieNaslednikaNedostojnymClient />;
}
