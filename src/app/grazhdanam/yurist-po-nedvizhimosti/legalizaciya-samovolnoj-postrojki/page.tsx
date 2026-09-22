import React from 'react';
import LegalizaciyaSamovolnojPostrojkiClient from './LegalizaciyaSamovolnojPostrojkiClient';

export const metadata = {
  title: 'Как узаконить самовольную постройку в Липецке — помощь юриста | Де-Юре',
  description: 'Легализация дома, пристройки и реконструкции в Липецке: проверим участок и параметры, выберем порядок, подготовим документы, суд и регистрацию. 📞 +7 (4742) 20-15-25.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/legalizaciya-samovolnoj-postrojki/'
  },
  openGraph: {
    title: 'Легализация самовольной постройки в Липецке | Де-Юре',
    description: 'Узаконивание самовольно возведённых домов, пристроек и реконструкций в Липецке: экспертиза строительных норм, защита от сноса, суд по ст. 222 ГК РФ. 📞 +7 (4742) 20-15-25.',
    url: 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/legalizaciya-samovolnoj-postrojki/',
    siteName: 'ЮК «Де-Юре»',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/unauthorized-construction-legalization-og.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Легализация самовольной постройки в Липецке — ЮК «Де-Юре»'
      }
    ],
    locale: 'ru_RU',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Как узаконить самовольную постройку в Липецке — помощь юриста | Де-Юре',
    description: 'Легализация дома, пристройки и реконструкции в Липецке: проверим участок и параметры, выберем порядок, подготовим документы, суд и регистрацию. 📞 +7 (4742) 20-15-25.',
    images: ['https://dejure-help.ru/images/og/unauthorized-construction-legalization-og.jpg']
  }
};

export default function LegalizaciyaSamovolnojPostrojkiPage() {
  return <LegalizaciyaSamovolnojPostrojkiClient />;
}
