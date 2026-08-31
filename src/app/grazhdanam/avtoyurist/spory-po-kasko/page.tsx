import React from 'react';
import type { Metadata } from 'next';
import SporyPoKaskoClient from './SporyPoKaskoClient';

export const metadata: Metadata = {
  title: 'Юрист по спорам с КАСКО в Липецке — взыскание выплат со страховой | Де-Юре',
  description: 'Помощь автоюриста по КАСКО в Липецке: отказ в выплате, занижение суммы, затягивание сроков ремонта по КАСКО. Досудебное урегулирование и суд.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/avtoyurist/spory-po-kasko/',
  },
  openGraph: {
    title: 'Юрист по спорам с КАСКО в Липецке | Де-Юре',
    description: 'Взыскание страхового возмещения по КАСКО, оспаривание отказов и занижений выплат.',
    url: 'https://dejure-help.ru/grazhdanam/avtoyurist/spory-po-kasko/',
    siteName: 'ЮК «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/avtoyurist.jpg',
        width: 1200,
        height: 630,
        alt: 'Юрист по спорам по КАСКО в Липецке — ЮК «Де-Юре»',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://dejure-help.ru/images/og/avtoyurist.jpg'],
  },
};

const faqs = [
  {
    q: 'Что делать, если страховая отказала в выплате по КАСКО?',
    a: 'Запросите письменный мотивированный отказ и копии акта осмотра. Юрист проверит соответствие отказа договору и закону о защите прав потребителей, составит претензию и при необходимости обратится к финансовому уполномоченному или в суд.'
  },
  {
    q: 'Страховая занизила сумму ущерба. Как оспорить расчёт?',
    a: 'Проводится независимая автотехническая экспертиза для установления реальной стоимости восстановительного ремонта. Разница взыскивается со страховой компании в претензионном или судебном порядке со штрафом и неустойкой.'
  },
  {
    q: 'Обязательно ли обращаться к финансовому уполномоченному по спорам КАСКО?',
    a: 'Да, для требований потребителей к страховым компаниям на сумму до 500 000 рублей досудебное обращение к финансовому уполномоченному является обязательным процессуальным этапом перед подачей иска в суд.'
  },
  {
    q: 'Можно ли взыскать со страховой неустойку и моральный вред?',
    a: 'Да, при нарушении сроков выплаты или необоснованном отказе по КАСКО закон предусматривает взыскание неустойки, штрафа в размере 50% от присуждённой суммы, компенсации морального вреда и расходов на юриста и экспертизу.'
  },
  {
    q: 'Что делать, если СТОА затягивает ремонт автомобиля по КАСКО?',
    a: 'Страховщик несёт ответственность за соблюдение сроков ремонта на направлении СТОА. Фиксируется просрочка, направляется требование об изменении формы страхового возмещения на выплату деньгами и взыскание неустойки.'
  }
];

export default function SporyPoKaskoPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LegalService',
        '@id': 'https://dejure-help.ru/#organization',
        name: 'ЮК «Де-Юре»',
        url: 'https://dejure-help.ru/',
        logo: 'https://dejure-help.ru/images/logo.png',
        telephone: '+7 (910) 350-31-11',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'ул. Советская, 35',
          addressLocality: 'Липецк',
          addressRegion: 'Липецкая область',
          addressCountry: 'RU'
        }
      },
      {
        '@type': 'Person',
        '@id': 'https://dejure-help.ru/specialisty/konopkin-dmitriy-sergeevich/#person',
        name: 'Дмитрий Сергеевич Конопкин',
        jobTitle: 'Адвокат, председатель Коллегии адвокатов «Де-Юре»',
        url: 'https://dejure-help.ru/specialisty/konopkin-dmitriy-sergeevich/'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/grazhdanam/avtoyurist/spory-po-kasko/#breadcrumbs',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://dejure-help.ru/' },
          { '@type': 'ListItem', position: 2, name: 'Гражданам', item: 'https://dejure-help.ru/grazhdanam/' },
          { '@type': 'ListItem', position: 3, name: 'Автоюрист', item: 'https://dejure-help.ru/grazhdanam/avtoyurist/' },
          { '@type': 'ListItem', position: 4, name: 'Споры по КАСКО', item: 'https://dejure-help.ru/grazhdanam/avtoyurist/spory-po-kasko/' },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': 'https://dejure-help.ru/grazhdanam/avtoyurist/spory-po-kasko/#webpage',
        url: 'https://dejure-help.ru/grazhdanam/avtoyurist/spory-po-kasko/',
        name: 'Юрист по спорам с КАСКО в Липецке — взыскание выплат со страховой | Де-Юре',
        description: 'Помощь автоюриста по КАСКО в Липецке: отказ в выплате, занижение суммы, затягивание сроков ремонта по КАСКО.',
        inLanguage: 'ru-RU',
        about: {
          '@id': 'https://dejure-help.ru/grazhdanam/avtoyurist/spory-po-kasko/#service'
        }
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/grazhdanam/avtoyurist/spory-po-kasko/#service',
        name: 'Споры по КАСКО',
        serviceType: 'Юридическая помощь в спорах со страховыми компаниями по договорам добровольного страхования КАСКО',
        description: 'Оспаривание незаконных отказов в выплате, взыскание недоплаченного страхового возмещения, неустоек и штрафов по КАСКО.',
        url: 'https://dejure-help.ru/grazhdanam/avtoyurist/spory-po-kasko/',
        provider: {
          '@id': 'https://dejure-help.ru/#organization'
        },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Липецкая область' },
          { '@type': 'Country', name: 'Россия' }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/grazhdanam/avtoyurist/spory-po-kasko/#faq',
        mainEntity: faqs.map(item => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a
          }
        }))
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SporyPoKaskoClient />
    </>
  );
}
