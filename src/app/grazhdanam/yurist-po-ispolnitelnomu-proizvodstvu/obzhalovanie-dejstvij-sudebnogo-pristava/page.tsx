import React from 'react';
import ObzhalovanieClient from './ObzhalovanieClient';

export const metadata = {
  title: 'Обжалование действий судебного пристава в Липецке | Де-Юре',
  description: 'Обжалуем незаконные постановления, действия и бездействие судебных приставов в Липецке. Анализ материалов, жалоба руководителю или обращение в суд.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/obzhalovanie-dejstvij-sudebnogo-pristava/',
  },
  openGraph: {
    title: 'Обжалование действий и бездействия судебного пристава | Де-Юре',
    description: 'Проверим материалы исполнительного производства, выберем порядок обжалования, подготовим документы и представим Ваши интересы.',
    url: 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/obzhalovanie-dejstvij-sudebnogo-pristava/',
    siteName: 'ЮК «Де-Юре»',
    locale: 'ru_RU',
    type: 'website'
  }
};

const faqs = [
  {
    q: 'Можно ли обжаловать бездействие судебного пристава?',
    a: 'Да. Если пристав не совершает обязательных исполнительных действий, затягивает сроки или не отвечает на обращения, бездействие можно обжаловать старшему приставу, в прокуратуру или суд.'
  },
  {
    q: 'В какой срок нужно подать жалобу на пристава?',
    a: 'Общий срок — 10 рабочих дней со дня вынесения постановления, совершения действия или установления факта бездействия (либо со дня, когда вы узнали о нарушении).'
  },
  {
    q: 'Обязательно ли сначала жаловаться старшему приставу?',
    a: 'Нет, досудебный порядок не всегда является строго обязательным, однако жалоба вышестоящему приставу часто позволяет решить вопрос быстрее, чем через суд.'
  },
  {
    q: 'Приостанавливает ли подача жалобы исполнительные действия?',
    a: 'Автоматически подача жалобы производство не приостанавливает. Для приостановления мер принудительного исполнения необходимо заявить отдельное ходатайство.'
  },
  {
    q: 'Какие документы нужны для подачи жалобы?',
    a: 'Постановление пристава (если обжалуется оно), доказательства нарушения, выписки по счетам, подтверждение оплаты или иные релевантные документы.'
  }
];

export default function ObzhalovaniePage() {
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
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/obzhalovanie-dejstvij-sudebnogo-pristava/#breadcrumbs',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://dejure-help.ru/' },
          { '@type': 'ListItem', position: 2, name: 'Гражданам', item: 'https://dejure-help.ru/grazhdanam/' },
          { '@type': 'ListItem', position: 3, name: 'Юрист по исполнительному производству', item: 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/' },
          { '@type': 'ListItem', position: 4, name: 'Обжалование действий судебного пристава', item: 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/obzhalovanie-dejstvij-sudebnogo-pristava/' }
        ]
      },
      {
        '@type': 'WebPage',
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/obzhalovanie-dejstvij-sudebnogo-pristava/#webpage',
        name: 'Обжалование действий судебного пристава в Липецке | Де-Юре',
        description: 'Обжалуем незаконные постановления, действия и бездействие судебных приставов в Липецке. Анализ материалов, жалоба руководителю или обращение в суд.',
        url: 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/obzhalovanie-dejstvij-sudebnogo-pristava/',
        about: {
          '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/obzhalovanie-dejstvij-sudebnogo-pristava/#service'
        }
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/obzhalovanie-dejstvij-sudebnogo-pristava/#service',
        name: 'Обжалование действий и бездействия судебного пристава в Липецке',
        description: 'Обжалование незаконных постановлений, действий и бездействия судебных приставов-исполнителей. Анализ материалов дела, жалоба в порядке подчинённости, административный иск в суд.',
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
        ],
        url: 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/obzhalovanie-dejstvij-sudebnogo-pristava/'
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/obzhalovanie-dejstvij-sudebnogo-pristava/#faq',
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
      <ObzhalovanieClient />
    </>
  );
}
