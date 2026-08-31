import React from 'react';
import type { Metadata } from 'next';
import OsparivanieVinyClient from './OsparivanieVinyClient';

export const metadata: Metadata = {
  title: 'Оспаривание вины в ДТП в Липецке — помощь автоюриста | Де-Юре',
  description: 'Помощь автоюриста по оспариванию вины в ДТП в Липецке: анализ схемы и видео, трасологическая экспертиза, защита в ГИБДД и суде.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/avtoyurist/osparivanie-viny-v-dtp/',
  },
  openGraph: {
    title: 'Оспаривание вины в ДТП в Липецке | Де-Юре',
    description: 'Помощь автоюриста по оспариванию вины в ДТП в Липецке: анализ схемы и видео, трасологическая экспертиза, защита в ГИБДД и суде.',
    url: 'https://dejure-help.ru/grazhdanam/avtoyurist/osparivanie-viny-v-dtp/',
    siteName: 'ЮК «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/avtoyurist.jpg',
        width: 1200,
        height: 630,
        alt: 'Оспаривание вины в ДТП в Липецке — ЮК «Де-Юре»',
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
    q: 'Если в постановлении ГИБДД виновником указан я, можно ли это изменить?',
    a: 'Не обязательно. В гражданском споре суд оценивает все доказательства в совокупности и не связан исключительно административными материалами. Важно восстановить полную хронологию и доказать причинную связь.'
  },
  {
    q: 'Достаточно ли доказать нарушение ПДД другим участником?',
    a: 'Нет. Нарушение должно находиться в прямой причинной связи с механизмом ДТП и причинением ущерба. Нарушение правил, не повлиявшее на возникновение аварии, не меняет распределение ответственности автоматически.'
  },
  {
    q: 'Нужна ли автотехническая экспертиза?',
    a: 'Не всегда. Экспертиза требуется при наличии технических вопросов (скорость, траектория, момент опасности) и достаточных исходных данных. Сначала юрист анализирует видеозаписи, схему, замеры и формулирует юридически корректные вопросы эксперту.'
  },
  {
    q: 'Кто определяет, какой водитель виноват?',
    a: 'В административном деле орган ГИБДД или суд оценивает конкретный состав КоАП РФ. В споре о страховом возмещении и возмещении вреда окончательную степень вины и ответственность устанавливает только суд.'
  },
  {
    q: 'Что делать, если страховщик выплатил только половину?',
    a: 'Запросить мотивированный расчёт и акт страховой компании, провести аудит материалов и пройти обязательный досудебный порядок (претензия и финансовый уполномоченный). Затем подаётся иск в суд о взыскании недостающей части возмещения.'
  },
  {
    q: 'Какие доказательства особенно важно сохранить?',
    a: 'Оригиналы файлов с видеорегистратора, фотографии места ДТП и повреждений, копию схемы с внесёнными замечаниями, данные городских камер до их перезаписи, контакты свидетелей и протоколы ГИБДД.'
  }
];

export default function OsparivanieVinyPage() {
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
        '@id': 'https://dejure-help.ru/grazhdanam/avtoyurist/osparivanie-viny-v-dtp/#breadcrumbs',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://dejure-help.ru/' },
          { '@type': 'ListItem', position: 2, name: 'Гражданам', item: 'https://dejure-help.ru/grazhdanam/' },
          { '@type': 'ListItem', position: 3, name: 'Автоюрист', item: 'https://dejure-help.ru/grazhdanam/avtoyurist/' },
          { '@type': 'ListItem', position: 4, name: 'Оспаривание вины в ДТП', item: 'https://dejure-help.ru/grazhdanam/avtoyurist/osparivanie-viny-v-dtp/' },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': 'https://dejure-help.ru/grazhdanam/avtoyurist/osparivanie-viny-v-dtp/#webpage',
        url: 'https://dejure-help.ru/grazhdanam/avtoyurist/osparivanie-viny-v-dtp/',
        name: 'Оспаривание вины в ДТП в Липецке — помощь автоюриста | Де-Юре',
        description: 'Помощь автоюриста по оспариванию вины в ДТП в Липецке: анализ схемы и видео, трасологическая экспертиза, защита в ГИБДД и суде.',
        inLanguage: 'ru-RU',
        about: {
          '@id': 'https://dejure-help.ru/grazhdanam/avtoyurist/osparivanie-viny-v-dtp/#service'
        }
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/grazhdanam/avtoyurist/osparivanie-viny-v-dtp/#service',
        name: 'Оспаривание вины в ДТП',
        serviceType: 'Юридическая помощь по установлению обстоятельств ДТП и оспариванию вины',
        description: 'Анализ материалов ДТП, видеозаписей, схемы происшествия, назначение судебной автотехнической экспертизы и защита прав водителя в суде.',
        url: 'https://dejure-help.ru/grazhdanam/avtoyurist/osparivanie-viny-v-dtp/',
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
        '@id': 'https://dejure-help.ru/grazhdanam/avtoyurist/osparivanie-viny-v-dtp/#faq',
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
      <OsparivanieVinyClient />
    </>
  );
}
