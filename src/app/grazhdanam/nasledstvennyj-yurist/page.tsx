import React from 'react';
import NasledstvennyjClient from './NasledstvennyjClient';

export const metadata = {
  title: 'Наследственный юрист в Липецке — помощь с наследством | Де-Юре',
  description: 'Помощь наследственного юриста в Липецке: оформление у нотариуса, восстановление срока, споры о завещании и раздел наследства. Разберём ситуацию и предложим порядок действий.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/nasledstvennyj-yurist/'
  },
  openGraph: {
    title: 'Наследственный юрист в Липецке — помощь с наследством | Де-Юре',
    description: 'Помощь наследственного юриста в Липецке: оформление у нотариуса, восстановление срока, споры о завещании и раздел наследства. Разберём ситуацию и предложим порядок действий.',
    url: 'https://dejure-help.ru/grazhdanam/nasledstvennyj-yurist/',
    siteName: 'ЮК «Де-Юре»',
    locale: 'ru_RU',
    type: 'website'
  }
};

export default function Page() {
  return <NasledstvennyjClient />;
}
