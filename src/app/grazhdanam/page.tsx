import React from 'react';
import GrazhdanamClient from './GrazhdanamClient';

export const metadata = {
  title: 'Юридические услуги для граждан в Липецке | ЮК «Де-Юре»',
  description: 'Юридическая помощь гражданам в Липецке: консультации, подготовка документов, представительство в государственных органах и суде. ЮК «Де-Юре».',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/'
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Юридические услуги для граждан в Липецке | ЮК «Де-Юре»',
    description: 'Юридическая помощь гражданам в Липецке: консультации, подготовка документов, представительство в государственных органах и суде. ЮК «Де-Юре».',
    url: 'https://dejure-help.ru/grazhdanam/',
    siteName: 'ЮК «Де-Юре»',
    images: [
      {
        url: 'https://dejure-help.ru/images/og-main.jpg',
        width: 1200,
        height: 630,
        alt: 'Юридическая помощь гражданам в Липецке'
      }
    ],
    locale: 'ru_RU',
    type: 'website'
  }
};

export default function GrazhdanamPage() {
  const jsonLdGraph = [
    {
      "@type": "BreadcrumbList",
      "@id": "https://dejure-help.ru/grazhdanam/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://dejure-help.ru/" },
        { "@type": "ListItem", "position": 2, "name": "Гражданам", "item": "https://dejure-help.ru/grazhdanam/" }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://dejure-help.ru/grazhdanam/#itemlist",
      "name": "Направления юридической помощи гражданам",
      "numberOfItems": 14,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Семейный юрист" },
        { "@type": "ListItem", "position": 2, "name": "Наследственный юрист" },
        { "@type": "ListItem", "position": 3, "name": "Жилищный юрист" },
        { "@type": "ListItem", "position": 4, "name": "Юрист по недвижимости" },
        { "@type": "ListItem", "position": 5, "name": "Земельный юрист", "url": "https://dejure-help.ru/grazhdanam/zemelnyj-yurist/" },
        { "@type": "ListItem", "position": 6, "name": "Банкротство физических лиц" },
        { "@type": "ListItem", "position": 7, "name": "Кредитный юрист" },
        { "@type": "ListItem", "position": 8, "name": "Взыскание долгов" },
        { "@type": "ListItem", "position": 9, "name": "Юрист по исполнительному производству" },
        { "@type": "ListItem", "position": 10, "name": "Автоюрист" },
        { "@type": "ListItem", "position": 11, "name": "Трудовой юрист" },
        { "@type": "ListItem", "position": 12, "name": "Адвокат по уголовным делам", "url": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/" },
        { "@type": "ListItem", "position": 13, "name": "Военный юрист", "url": "https://dejure-help.ru/grazhdanam/voennyj-yurist/" },
        { "@type": "ListItem", "position": 14, "name": "Миграционный юрист" }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://dejure-help.ru/grazhdanam/#webpage",
      "url": "https://dejure-help.ru/grazhdanam/",
      "name": "Юридические услуги для граждан в Липецке | ЮК «Де-Юре»",
      "description": "Юридическая помощь гражданам в Липецке: консультации, подготовка документов, представительство в государственных органах и суде. ЮК «Де-Юре».",
      "breadcrumb": { "@id": "https://dejure-help.ru/grazhdanam/#breadcrumb" }
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": jsonLdGraph }) }}
      />
      <GrazhdanamClient />
    </>
  );
}
