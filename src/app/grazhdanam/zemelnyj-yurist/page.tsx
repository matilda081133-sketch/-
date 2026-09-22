import React from 'react';
import ZemelnyjYuristClient from './ZemelnyjYuristClient';

export const metadata = {
  title: 'Земельный юрист в Липецке — помощь по земельным вопросам | Де-Юре',
  description: 'Земельный юрист в Липецке: споры о границах, оформление прав, раздел участка, сервитут, кадастровая стоимость, изменение ВРИ и категории земли. 📞 +7 (4742) 20-15-25.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/zemelnyj-yurist/'
  },
  openGraph: {
    title: 'Земельный юрист в Липецке — помощь по земельным вопросам | Де-Юре',
    description: 'Помощь земельного юриста в Липецке: споры о границах, оформление прав, сервитут, кадастровая стоимость, изменение ВРИ и перевод земли в другую категорию. 📞 +7 (4742) 20-15-25.',
    url: 'https://dejure-help.ru/grazhdanam/zemelnyj-yurist/',
    siteName: 'ЮК «Де-Юре»',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/land-lawyer-lipetsk-og.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Земельный юрист в Липецке — ЮК «Де-Юре»'
      }
    ],
    locale: 'ru_RU',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Земельный юрист в Липецке — помощь по земельным вопросам | Де-Юре',
    description: 'Помощь земельного юриста в Липецке: споры о границах, оформление прав, сервитут, кадастровая стоимость, изменение ВРИ и перевод земли в другую категорию. 📞 +7 (4742) 20-15-25.',
    images: ['https://dejure-help.ru/images/og/land-lawyer-lipetsk-og.jpg']
  }
};

export default function ZemelnyjYuristPage() {
  return <ZemelnyjYuristClient />;
}
