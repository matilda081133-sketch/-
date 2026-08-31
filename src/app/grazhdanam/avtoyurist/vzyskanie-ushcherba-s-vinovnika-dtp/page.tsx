import React from 'react';
import type { Metadata } from 'next';
import VzyskanieVinovnikClient from './VzyskanieVinovnikClient';

export const metadata: Metadata = {
  title: 'Взыскание ущерба с виновника ДТП в Липецке — помощь автоюриста | Де-Юре',
  description: 'Взыскание ущерба с виновника ДТП в Липецке: возмещение сверх лимита ОСАГО, утрата товарной стоимости, франшиза, досудебная претензия и суд.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/avtoyurist/vzyskanie-ushcherba-s-vinovnika-dtp/',
  },
  openGraph: {
    title: 'Взыскание ущерба с виновника ДТП в Липецке | Де-Юре',
    description: 'Взыскание разницы между страховой выплатой и реальным ущербом, возмещение УТС и сопутствующих расходов с виновника аварии.',
    url: 'https://dejure-help.ru/grazhdanam/avtoyurist/vzyskanie-ushcherba-s-vinovnika-dtp/',
    siteName: 'ЮК «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/avtoyurist.jpg',
        width: 1200,
        height: 630,
        alt: 'Взыскание ущерба с виновника ДТП в Липецке — ЮК «Де-Юре»',
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
    q: 'В каких случаях ущерб взыскивается непосредственно с виновника ДТП?',
    a: 'Когда ущерб превышает лимит по ОСАГО (400 000 руб.), для взыскания разницы без учёта износа деталей (по Постановлению КС РФ № 6-П), возмещения утраты товарной стоимости (УТС) и компенсации франшизы по КАСКО.'
  },
  {
    q: 'Можно ли взыскать реальную стоимость ремонта без износа деталей?',
    a: 'Да. Страховая выплата по ОСАГО рассчитывается с учётом износа (по Единой методике ЦБ РФ), а реальный ущерб без учёта износа подлежит взысканию с причинителя вреда на основании ст. 15 и 1072 ГК РФ.'
  },
  {
    q: 'Как взыскать утрату товарной стоимости (УТС)?',
    a: 'УТС рассчитывается экспертом-техником для автомобилей не старше 5 лет. Если страховая не возместила её или лимит исчерпан, сумма взыскивается с виновника аварии.'
  },
  {
    q: 'Какие дополнительные расходы можно взыскать с виновника?',
    a: 'Расходы на эвакуатор, хранение аварийного автомобиля на стоянке, независимую экспертизу, почтовые отправления, госпошлину и услуги юриста.'
  },
  {
    q: 'Обязательно ли отправлять досудебную претензию виновнику?',
    a: 'По спорам между гражданами досудебная претензия формально не обязательна, но крайне рекомендована: она фиксирует требования, даёт шанс мирного расчета и исключает ссылки виновника на неведение в суде.'
  }
];

export default function VzyskanieVinovnikPage() {
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
        '@id': 'https://dejure-help.ru/grazhdanam/avtoyurist/vzyskanie-ushcherba-s-vinovnika-dtp/#breadcrumbs',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://dejure-help.ru/' },
          { '@type': 'ListItem', position: 2, name: 'Гражданам', item: 'https://dejure-help.ru/grazhdanam/' },
          { '@type': 'ListItem', position: 3, name: 'Автоюрист', item: 'https://dejure-help.ru/grazhdanam/avtoyurist/' },
          { '@type': 'ListItem', position: 4, name: 'Взыскание ущерба с виновника', item: 'https://dejure-help.ru/grazhdanam/avtoyurist/vzyskanie-ushcherba-s-vinovnika-dtp/' },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': 'https://dejure-help.ru/grazhdanam/avtoyurist/vzyskanie-ushcherba-s-vinovnika-dtp/#webpage',
        url: 'https://dejure-help.ru/grazhdanam/avtoyurist/vzyskanie-ushcherba-s-vinovnika-dtp/',
        name: 'Взыскание ущерба с виновника ДТП в Липецке — помощь автоюриста | Де-Юре',
        description: 'Взыскание ущерба с виновника ДТП в Липецке: возмещение сверх лимита ОСАГО, утрата товарной стоимости.',
        inLanguage: 'ru-RU',
        about: {
          '@id': 'https://dejure-help.ru/grazhdanam/avtoyurist/vzyskanie-ushcherba-s-vinovnika-dtp/#service'
        }
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/grazhdanam/avtoyurist/vzyskanie-ushcherba-s-vinovnika-dtp/#service',
        name: 'Взыскание ущерба с виновника ДТП',
        serviceType: 'Юридическая помощь по взысканию имущественного вреда с причинителя вреда при ДТП',
        description: 'Проведение независимой оценки ущерба без износа, подготовка досудебной претензии, представительство в суде и на стадии исполнения решения.',
        url: 'https://dejure-help.ru/grazhdanam/avtoyurist/vzyskanie-ushcherba-s-vinovnika-dtp/',
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
        '@id': 'https://dejure-help.ru/grazhdanam/avtoyurist/vzyskanie-ushcherba-s-vinovnika-dtp/#faq',
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
      <VzyskanieVinovnikClient />
    </>
  );
}
