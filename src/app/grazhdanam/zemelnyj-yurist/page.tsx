import React from 'react';
import ZemelnyjYuristClient from './ZemelnyjYuristClient';

export const metadata = {
  title: 'Земельный юрист в Липецке — помощь по земельным вопросам | Де-Юре',
  description: 'Земельный юрист в Липецке: споры о границах, оформление прав, раздел участка, сервитут, кадастровая стоимость, изменение ВРИ и категории земли.',
  alternates: {
    canonical: 'https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/'
  },
  openGraph: {
    title: 'Земельный юрист в Липецке — помощь по земельным вопросам | Де-Юре',
    description: 'Помощь земельного юриста в Липецке: споры о границах, оформление прав, сервитут, кадастровая стоимость, изменение ВРИ и перевод земли в другую категорию.',
    url: 'https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/',
    siteName: 'ЮК «Де-Юре»',
    images: [
      {
        url: 'https://matilda081133-sketch.github.io/-/images/land_law_hero_pro.jpg',
        width: 1200,
        height: 630,
        alt: 'Земельный юрист в Липецке'
      }
    ],
    locale: 'ru_RU',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Земельный юрист в Липецке — помощь по земельным вопросам | Де-Юре',
    description: 'Помощь земельного юриста в Липецке: споры о границах, оформление прав, сервитут, кадастровая стоимость, изменение ВРИ и перевод земли в другую категорию.',
    images: ['https://matilda081133-sketch.github.io/-/images/land_law_hero_pro.jpg']
  }
};

export default function ZemelnyjYuristPage() {
  return <ZemelnyjYuristClient />;
}
