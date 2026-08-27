import React from 'react';
import type { Metadata } from 'next';
import SporyPoOsagoClient from './SporyPoOsagoClient';

export const metadata: Metadata = {
  title: 'Юрист по спорам со страховой по ОСАГО в Липецке | Де-Юре',
  description: 'Помощь при недоплате, отказе и проблемах с ремонтом по ОСАГО: оценка документов, претензия, финансовый уполномоченный и суд. Дмитрий Конопкин.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/avtoyurist/spory-po-osago/',
  },
  openGraph: {
    title: 'Споры по ОСАГО — юридическая помощь | Де-Юре',
    description: 'Проверим расчёт и отказ страховщика, подготовим досудебное обращение и представим Ваши интересы.',
    url: 'https://dejure-help.ru/grazhdanam/avtoyurist/spory-po-osago/',
    type: 'website',
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
  },
};

export default function SporyPoOsagoPage() {
  return <SporyPoOsagoClient />;
}
