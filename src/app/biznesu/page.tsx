import { Metadata } from 'next';
import BiznesuClient from '../uslugi/biznesu/BiznesuClient';

export const metadata: Metadata = {
  title: 'Юридические услуги для бизнеса в Липецке | ЮК «Де-Юре»',
  description: 'Юридическая помощь бизнесу в Липецке: арбитражные споры, договоры, налоги, банкротство, взыскание долгов и сопровождение компаний. ЮК «Де-Юре».',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Юридические услуги для бизнеса в Липецке | ЮК «Де-Юре»',
    description: 'Юридическая помощь бизнесу в Липецке: арбитражные споры, договоры, налоги, банкротство, взыскание долгов и сопровождение компаний. ЮК «Де-Юре».',
    url: 'https://dejure-help.ru/biznesu/',
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og-main.jpg',
        width: 1200,
        height: 630,
        alt: 'Юридические услуги для бизнеса в Липецке',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Юридические услуги для бизнеса в Липецке | ЮК «Де-Юре»',
    description: 'Юридическая помощь бизнесу в Липецке: арбитражные споры, договоры, налоги, банкротство, взыскание долгов и сопровождение компаний. ЮК «Де-Юре».',
    images: ['https://dejure-help.ru/images/og-main.jpg'],
  },
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/',
  },
};

export default function BiznesuAliasPage() {
  const jsonLdGraph = [
    {
      "@type": "BreadcrumbList",
      "@id": "https://dejure-help.ru/biznesu/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://dejure-help.ru/" },
        { "@type": "ListItem", "position": 2, "name": "Бизнесу", "item": "https://dejure-help.ru/biznesu/" }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://dejure-help.ru/biznesu/#webpage",
      "url": "https://dejure-help.ru/biznesu/",
      "name": "Юридические услуги для бизнеса в Липецке | ЮК «Де-Юре»",
      "description": "Юридическая помощь бизнесу в Липецке: арбитражные споры, договоры, налоги, банкротство, взыскание долгов и сопровождение компаний. ЮК «Де-Юре».",
      "breadcrumb": { "@id": "https://dejure-help.ru/biznesu/#breadcrumb" }
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": jsonLdGraph }) }}
      />
      <BiznesuClient />
    </>
  );
}
