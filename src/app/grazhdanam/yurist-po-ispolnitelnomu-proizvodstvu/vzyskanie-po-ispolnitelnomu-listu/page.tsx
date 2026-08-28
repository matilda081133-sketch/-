import React from 'react';
import type { Metadata } from 'next';
import VzyskanieIspolnitelnyListClient from './VzyskanieIspolnitelnyListClient';

export const metadata: Metadata = {
  title: 'Взыскание по исполнительному листу в Липецке | Де-Юре',
  description: 'Поможем взыскать деньги по исполнительному листу: выберем способ предъявления, найдём активы, проконтролируем пристава или подадим документ в банк.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/vzyskanie-po-ispolnitelnomu-listu/',
  },
  openGraph: {
    title: 'Взыскание по исполнительному листу | Де-Юре',
    description: 'Проверим исполнительный документ, выберем канал взыскания и сопроводим получение присуждённых денег.',
    url: 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/vzyskanie-po-ispolnitelnomu-listu/',
    siteName: 'ЮК «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'Куда подавать исполнительный лист?',
    a: 'Адресат зависит от должника и известной информации. Документ можно предъявить приставам, непосредственно в банк, а в предусмотренных законом случаях — работодателю, казначейству или иному органу. Юрист сравнивает маршруты до подачи.'
  },
  {
    q: 'Можно ли узнать, в каких банках у должника есть счета?',
    a: 'Взыскатель с исполнительным листом, срок предъявления которого не истёк, вправе обратиться в налоговый орган за предусмотренными законом сведениями о счетах должника.'
  },
  {
    q: 'Какой срок предъявления исполнительного листа?',
    a: 'Общее правило для листа на основании судебного акта — три года со дня вступления акта в законную силу. Для периодических платежей и ряда других документов действуют специальные сроки; также учитываются предыдущие предъявления и перерыв срока.'
  },
  {
    q: 'Обязан ли пристав взыскать деньги за два месяца?',
    a: 'Закон устанавливает общий двухмесячный срок совершения исполнительных действий, но это не гарантия фактического взыскания. Результат зависит от наличия денег и имущества, очередности требований, розыска и обжалований.'
  },
  {
    q: 'Что делать, если пристав ничего не делает?',
    a: 'Нужно изучить материалы производства и определить, какие обязательные или запрошенные действия не совершены. После этого подаются адресные ходатайства, жалоба руководителю либо административный иск.'
  },
  {
    q: 'Можно ли подать лист в банк без приставов?',
    a: 'Да, если речь идёт о взыскании денег или их аресте и известен банк должника. Вместе с документом подаётся заявление с обязательными сведениями и реквизитами взыскателя.'
  },
  {
    q: 'Что происходит, если денег на счёте недостаточно?',
    a: 'Банк перечисляет доступную сумму и, если нет законного основания прекратить исполнение, продолжает исполнять документ по мере поступления денег до полного погашения требования.'
  },
  {
    q: 'Можно ли предъявить документ повторно после возврата?',
    a: 'Во многих случаях — да, но нужно проверить основание окончания производства и правильно рассчитать новый срок предъявления. Повторная подача без новых сведений или ходатайств может снова не дать результата.'
  },
  {
    q: 'Можно ли взыскать алименты напрямую через работодателя?',
    a: 'Для периодических платежей закон предусматривает предъявление исполнительного документа лицу, выплачивающему должнику зарплату или иной периодический доход. Перед подачей проверяются документ, место работы и реквизиты заявления.'
  }
];

export default function VzyskanieIspolnitelnyListPage() {
  const jsonLdGraph = {
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
          streetAddress: 'ул. Советская, д. 35',
          addressLocality: 'Липецк',
          addressRegion: 'Липецкая область',
          addressCountry: 'RU'
        }
      },
      {
        '@type': 'Person',
        '@id': 'https://dejure-help.ru/specialisty/smolyaninova-marina-valerevna/#person',
        name: 'Марина Валерьевна Смольянинова',
        jobTitle: 'Ведущий юрист',
        url: 'https://dejure-help.ru/specialisty/smolyaninova-marina-valerevna/',
        worksFor: {
          '@id': 'https://dejure-help.ru/#organization'
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/vzyskanie-po-ispolnitelnomu-listu/#breadcrumbs',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://dejure-help.ru/' },
          { '@type': 'ListItem', position: 2, name: 'Гражданам', item: 'https://dejure-help.ru/grazhdanam/' },
          { '@type': 'ListItem', position: 3, name: 'Юрист по исполнительному производству', item: 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/' },
          { '@type': 'ListItem', position: 4, name: 'Взыскание по исполнительному листу', item: 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/vzyskanie-po-ispolnitelnomu-listu/' },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/vzyskanie-po-ispolnitelnomu-listu/#webpage',
        name: 'Взыскание по исполнительному листу в Липецке | Де-Юре',
        description: 'Поможем взыскать деньги по исполнительному листу: выберем способ предъявления, найдём активы, проконтролируем пристава или подадим документ в банк.',
        url: 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/vzyskanie-po-ispolnitelnomu-listu/',
        about: {
          '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/vzyskanie-po-ispolnitelnomu-listu/#service'
        }
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/vzyskanie-po-ispolnitelnomu-listu/#service',
        name: 'Взыскание по исполнительному листу в Липецке',
        description: 'Поможем взыскать деньги по исполнительному листу: выберем способ предъявления, найдём активы, проконтролируем пристава или подадим документ в банк.',
        url: 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/vzyskanie-po-ispolnitelnomu-listu/',
        provider: {
          '@id': 'https://dejure-help.ru/#organization'
        },
        areaServed: [
          {
            '@type': 'AdministrativeArea',
            name: 'Липецкая область'
          },
          {
            '@type': 'Country',
            name: 'Россия'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/vzyskanie-po-ispolnitelnomu-listu/#faq',
        mainEntity: faqs.map(faq => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a
          }
        }))
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />
      <VzyskanieIspolnitelnyListClient />
    </>
  );
}
