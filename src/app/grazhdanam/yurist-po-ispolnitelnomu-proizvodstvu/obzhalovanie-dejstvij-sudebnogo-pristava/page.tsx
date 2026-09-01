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
    q: 'Кто вправе обжаловать действия или бездействие пристава?',
    a: 'Стороны исполнительного производства — взыскатель и должник, а также иные лица, если постановлением, действием или бездействием нарушены их права и законные интересы. Перед подачей жалобы необходимо подтвердить, как именно нарушение затрагивает заявителя.'
  },
  {
    q: 'Какой срок установлен для жалобы?',
    a: 'Как правило, десять дней со дня вынесения постановления, совершения действия или установления бездействия. Если лицо не было извещено, срок исчисляется с момента, когда оно узнало или должно было узнать о нарушении. Конкретный расчёт и возможность восстановления срока проверяются индивидуально по документам.'
  },
  {
    q: 'Нужно сначала жаловаться старшему приставу, а потом идти в суд?',
    a: 'Общего правила об обязательной последовательности нет. Постановления, действия и бездействие могут обжаловаться в порядке подчинённости и оспариваться в суде. Выбор маршрута зависит от требования, доказательств, процессуального срока и необходимого результата.'
  },
  {
    q: 'Куда подают жалобу в порядке подчинённости?',
    a: 'Обычно жалоба на судебного пристава-исполнителя подаётся старшему судебному приставу (руководителю подразделения), в подчинении которого он находится. Для постановлений и действий руководителей действует другая подчинённость, поэтому адресата определяют по должности и материалам дела.'
  },
  {
    q: 'Приостанавливает ли жалоба исполнительное производство?',
    a: 'Сама по себе подача жалобы не означает автоматической остановки взыскания. При наличии оснований вопрос о приостановлении производства или отдельного исполнительного действия ставится дополнительно перед старшим судебным приставом или судом.'
  },
  {
    q: 'Можно ли пожаловаться в прокуратуру?',
    a: 'Обращение в прокуратуру возможно при наличии оснований, однако оно не заменяет специальную жалобу в ФССП или судебное оспаривание и не отменяет постановление пристава автоматически. Юрист оценивает, даст ли этот инструмент практический результат в конкретной ситуации.'
  },
  {
    q: 'Какие документы нужны для оценки?',
    a: 'По возможности подготовьте номер исполнительного производства, исполнительный документ, оспариваемое постановление, извещения, Ваши заявления и ответы пристава, банковские выписки или документы на имущество. Если материалов нет, юрист подскажет, как ознакомиться с делом.'
  },
  {
    q: 'Какого результата можно требовать?',
    a: 'В зависимости от нарушения можно требовать отмены или изменения постановления, признания действия либо бездействия незаконным и возложения обязанности устранить нарушение. Точное требование формулируется после правовой оценки полномочий адресата и материалов дела.'
  },
  {
    q: 'Можно ли начать работу дистанционно?',
    a: 'Да. Консультацию, проверку электронных копий и подготовку документов можно провести дистанционно. Формат дальнейшего участия зависит от выбранного порядка обжалования и региона.'
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
