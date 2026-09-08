import React from 'react';
import { Metadata } from 'next';
import ZhilishchnyjYuristClient from '../grazhdanam/zhilishchnyj-yurist/ZhilishchnyjYuristClient';

export const metadata: Metadata = {
  title: 'Жилищный юрист в Липецке — помощь по жилищным спорам | Де-Юре',
  description: 'Помощь жилищного юриста в Липецке: выписка и вселение, споры с УК и соседями, залив квартиры, оплата ЖКУ, приватизация и перепланировка.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/'
  },
  robots: {
    index: false,
    follow: true,
  }
};

export default function ZhilishchnyjYuristAliasPage() {
  return (
    <>
      <ZhilishchnyjYuristClient />
    </>
  );
}
