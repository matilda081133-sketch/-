import React from 'react';
import PriznaniePravaSobstvennostiClient from './PriznaniePravaSobstvennostiClient';

export const metadata = {
  title: 'Признание права собственности на недвижимость в Липецке | Де-Юре',
  description: 'Помощь в признании и регистрации права собственности на недвижимость в Липецке: проверим основание, подготовим документы, суд и внесение записи в ЕГРН. 📞 +7 (4742) 20-15-25.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/priznanie-prava-sobstvennosti-na-nedvizhimost/'
  },
  openGraph: {
    title: 'Признание права собственности на недвижимость в Липецке | Де-Юре',
    description: 'Признание права собственности на квартиры, дома, гаражи и участки через суд в Липецке: приобретательная давность, утеря документов, ликвидация продавца. 📞 +7 (4742) 20-15-25.',
    url: 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/priznanie-prava-sobstvennosti-na-nedvizhimost/',
    siteName: 'ЮК «Де-Юре»',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/property-rights-recognition-og.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Признание права собственности на недвижимость в Липецке — ЮК «Де-Юре»'
      }
    ],
    locale: 'ru_RU',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Признание права собственности на недвижимость в Липецке | Де-Юре',
    description: 'Помощь в признании и регистрации права собственности на недвижимость в Липецке: проверим основание, подготовим документы, суд и внесение записи в ЕГРН. 📞 +7 (4742) 20-15-25.',
    images: ['https://dejure-help.ru/images/og/property-rights-recognition-og.jpg']
  }
};

export default function PriznaniePravaSobstvennostiPage() {
  return <PriznaniePravaSobstvennostiClient />;
}
