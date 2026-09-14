import React from 'react';
import type { Metadata } from 'next';
import SdelkiKommercheskayaClient from '../soprovozhdenie-sdelok-s-kommercheskoy-nedvizhimostyu/SdelkiKommercheskayaClient';

export const metadata: Metadata = {
  title: 'Сопровождение сделок с коммерческой недвижимостью в Липецке | Де-Юре',
  description:
    'Юридическое сопровождение покупки и продажи коммерческой недвижимости в Липецке: проверка объекта и контрагента, договор, расчёты, регистрация и передача.',
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/soprovozhdenie-sdelok-s-kommercheskoy-nedvizhimostyu/'
  }
};

export default function SdelkiAliasPage() {
  return <SdelkiKommercheskayaClient />;
}
