import React from 'react';
import type { Metadata } from 'next';
import ArendaKommercheskayaClient from '../yuridicheskoe-soprovozhdenie-arendy-kommercheskoy-nedvizhimosti/ArendaKommercheskayaClient';

export const metadata: Metadata = {
  title: 'Юридическое сопровождение аренды коммерческой недвижимости в Липецке | Де-Юре',
  description: 'Юрист по аренде коммерческой недвижимости в Липецке: проверка и подготовка договора, переговоры, регистрация, изменение условий, расторжение и возврат объекта. 📞 +7 (4742) 20-15-25.',
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/yuridicheskoe-soprovozhdenie-arendy-kommercheskoy-nedvizhimosti/'
  }
};

export default function ArendaAliasPage() {
  return <ArendaKommercheskayaClient />;
}
