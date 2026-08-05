import React from 'react';
import OformleniePravClient from './OformleniePravClient';

export const metadata = {
  title: 'Оформление прав на земельный участок в Липецке | Де-Юре',
  description: 'Проверим основания и документы, определим административный или судебный порядок оформления права на земельный участок в Липецке и сопроводим регистрацию.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/zemelnyj-yurist/oformlenie-prav-na-zemelnyj-uchastok/',
  },
  openGraph: {
    title: 'Оформление прав на земельный участок в Липецке | Де-Юре',
    description: 'Проверим основания и документы, определим административный или судебный порядок оформления права на земельный участок в Липецке и сопроводим регистрацию.',
    url: 'https://dejure-help.ru/grazhdanam/zemelnyj-yurist/oformlenie-prav-na-zemelnyj-uchastok/',
    siteName: 'ЮК «Де-Юре»',
    images: [{ url: 'https://matilda081133-sketch.github.io/-/images/og_zemelnyj.png', width: 1200, height: 630 }],
    locale: 'ru_RU',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Оформление прав на земельный участок в Липецке | Де-Юре',
    description: 'Проверим основания и документы, определим административный или судебный порядок оформления права на земельный участок в Липецке и сопроводим регистрацию.',
    images: ['https://matilda081133-sketch.github.io/-/images/og_zemelnyj.png']
  }
};

export default function OformleniePravPage() {
  return <OformleniePravClient />;
}
