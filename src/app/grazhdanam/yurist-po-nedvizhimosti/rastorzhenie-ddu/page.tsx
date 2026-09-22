import React from 'react';
import RastorzhenieDDUClient from './RastorzhenieDDUClient';

export const metadata = {
  title: 'Расторжение ДДУ в Липецке — помощь юриста | Де-Юре',
  description: 'Расторжение договора долевого участия в Липецке: проверим основания, подготовим отказ, соглашение или иск, возврат денег и сопровождение исполнения. 📞 +7 (4742) 20-15-25.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/rastorzhenie-ddu/'
  },
  openGraph: {
    title: 'Расторжение ДДУ в Липецке | Де-Юре',
    description: 'Юридическая помощь при расторжении ДДУ: возврат цены договора со счетов эскроу, взыскание процентов за пользование деньгами, взаимодействие с банком. 📞 +7 (4742) 20-15-25.',
    url: 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/rastorzhenie-ddu/',
    siteName: 'ЮК «Де-Юре»',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/ddu-contract-termination-og.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Расторжение ДДУ в Липецке — ЮК «Де-Юре»'
      }
    ],
    locale: 'ru_RU',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Расторжение ДДУ в Липецке — помощь юриста | Де-Юре',
    description: 'Расторжение договора долевого участия в Липецке: проверим основания, подготовим отказ, соглашение или иск, возврат денег и сопровождение исполнения. 📞 +7 (4742) 20-15-25.',
    images: ['https://dejure-help.ru/images/og/ddu-contract-termination-og.jpg']
  }
};

export default function RastorzhenieDDUPage() {
  return <RastorzhenieDDUClient />;
}
