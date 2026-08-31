import React from 'react';
import type { Metadata } from 'next';
import LisheniePravClient from './LisheniePravClient';

export const metadata: Metadata = {
  title: 'Защита при лишении водительских прав в Липецке — адвокат по КоАП РФ | Де-Юре',
  description: 'Помощь автоюриста при угрозе лишения водительских прав в Липецке: ст. 12.8, 12.26, 12.15, 12.27 КоАП РФ. Анализ протоколов, защита в суде и обжалование.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/avtoyurist/lishenie-voditelskih-prav/',
  },
  openGraph: {
    title: 'Защита при лишении водительских прав в Липецке | Де-Юре',
    description: 'Защита интересов водителей по делам об административных правонарушениях: проверка процедур, видеозаписей и обжалование постановлений.',
    url: 'https://dejure-help.ru/grazhdanam/avtoyurist/lishenie-voditelskih-prav/',
    siteName: 'ЮК «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/avtoyurist.jpg',
        width: 1200,
        height: 630,
        alt: 'Защита при лишении водительских прав в Липецке — ЮК «Де-Юре»',
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
    q: 'По каким статьям КоАП РФ грозит лишение прав?',
    a: 'Основные статьи: ч. 1 и 2 ст. 12.8 (управление в состоянии опьянения), ст. 12.26 (отказ от освидетельствования), ч. 4 и 5 ст. 12.15 (выезд на встречную полосу), ч. 2 ст. 12.27 (оставление места ДТП), ч. 4 и 5 ст. 12.9 (превышение скорости на 60+ км/ч).'
  },
  {
    q: 'Может ли инспектор ДПС забрать водительское удостоверение на месте?',
    a: 'Нет. Инспектор ГИБДД не имеет права изымать права на месте. Решение о лишении права управления транспортными средствами принимает исключительно суд.'
  },
  {
    q: 'Какой срок на обжалование постановления суда о лишении прав?',
    a: 'Срок составляет 10 суток со дня вручения или получения копии постановления суда. В течение этого срока водитель вправе управлять автомобилем, если постановление не вступило в законную силу.'
  },
  {
    q: 'Какие нарушения со стороны сотрудников ДПС помогают защитить права?',
    a: 'Нарушение порядка освидетельствования (отсутствие видеозаписи или понятых), неразъяснение процессуальных прав, составление протокола неуполномоченным лицом, исправления без подписи водителя, отсутствие поверки прибора.'
  },
  {
    q: 'Что делать, если пропущен 10-дневный срок обжалования?',
    a: 'Подаётся жалоба с ходатайством о восстановлении пропущенного процессуального срока с приложением доказательств уважительности причин (болезнь, командировка, неполучение почтового извещения).'
  }
];

export default function LisheniePravPage() {
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
        '@id': 'https://dejure-help.ru/grazhdanam/avtoyurist/lishenie-voditelskih-prav/#breadcrumbs',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://dejure-help.ru/' },
          { '@type': 'ListItem', position: 2, name: 'Гражданам', item: 'https://dejure-help.ru/grazhdanam/' },
          { '@type': 'ListItem', position: 3, name: 'Автоюрист', item: 'https://dejure-help.ru/grazhdanam/avtoyurist/' },
          { '@type': 'ListItem', position: 4, name: 'Лишение водительских прав', item: 'https://dejure-help.ru/grazhdanam/avtoyurist/lishenie-voditelskih-prav/' },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': 'https://dejure-help.ru/grazhdanam/avtoyurist/lishenie-voditelskih-prav/#webpage',
        url: 'https://dejure-help.ru/grazhdanam/avtoyurist/lishenie-voditelskih-prav/',
        name: 'Защита при лишении водительских прав в Липецке — адвокат по КоАП РФ | Де-Юре',
        description: 'Помощь автоюриста при угрозе лишения водительских прав в Липецке: ст. 12.8, 12.26, 12.15, 12.27 КоАП РФ.',
        inLanguage: 'ru-RU',
        about: {
          '@id': 'https://dejure-help.ru/grazhdanam/avtoyurist/lishenie-voditelskih-prav/#service'
        }
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/grazhdanam/avtoyurist/lishenie-voditelskih-prav/#service',
        name: 'Защита при лишении водительских прав',
        serviceType: 'Юридическая помощь и защита по делам об административных правонарушениях с риском лишения прав',
        description: 'Проверка протоколов ГИБДД, освидетельствования, видеозаписей, формирование правовой позиции и защита водителя в мировых и районных судах.',
        url: 'https://dejure-help.ru/grazhdanam/avtoyurist/lishenie-voditelskih-prav/',
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
        '@id': 'https://dejure-help.ru/grazhdanam/avtoyurist/lishenie-voditelskih-prav/#faq',
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
      <LisheniePravClient />
    </>
  );
}
