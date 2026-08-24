import React from 'react';
import ObzhalovanieClient from './ObzhalovanieClient';

export const metadata = {
  title: 'Обжалование действий приставов для бизнеса в Липецке | Де-Юре',
  description: 'Обжалуем постановления, действия и бездействие приставов в отношении бизнеса: защита счетов и имущества, жалоба руководителю или обращение в суд.',
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/obzhalovanie-dejstvij-pristavov-dlya-biznesa/'
  },
  openGraph: {
    title: 'Обжалование действий приставов для бизнеса | Де-Юре',
    description: 'Проверим материалы производства, выберем способ обжалования и защитим интересы компании в ФССП или суде.',
    url: 'https://dejure-help.ru/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/obzhalovanie-dejstvij-pristavov-dlya-biznesa/',
    siteName: 'ЮК «Де-Юре»',
    images: [
      {
        url: 'https://dejure-help.ru/images/og-bailiff-appeal-b2b.jpg',
        width: 1200,
        height: 630,
        alt: 'Обжалование действий судебных приставов для бизнеса в Липецке'
      }
    ],
    locale: 'ru_RU',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Обжалование действий приставов для бизнеса в Липецке | Де-Юре',
    description: 'Обжалуем постановления, действия и бездействие приставов в отношении бизнеса: защита счетов и имущества, жалоба руководителю или обращение в суд.',
    images: ['https://dejure-help.ru/images/og-bailiff-appeal-b2b.jpg']
  }
};

export default function ObzhalovaniePage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Главная',
        item: 'https://dejure-help.ru/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Бизнесу',
        item: 'https://dejure-help.ru/biznesu/'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Исполнительное производство для бизнеса',
        item: 'https://dejure-help.ru/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/'
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Обжалование действий приставов для бизнеса',
        item: 'https://dejure-help.ru/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/obzhalovanie-dejstvij-pristavov-dlya-biznesa/'
      }
    ]
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Обжалование действий приставов для бизнеса в Липецке',
    serviceType: 'Юридические услуги бизнесу по обжалованию решений, действий и бездействия судебных приставов',
    description: 'Обжалуем постановления, действия и бездействие приставов в отношении бизнеса: защита счетов и имущества, жалоба руководителю или обращение в суд.',
    provider: {
      '@type': 'LegalService',
      name: 'ЮК «Де-Юре»',
      url: 'https://dejure-help.ru',
      telephone: '+7 (910) 350-31-11',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Липецк',
        addressCountry: 'RU'
      }
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Липецк и Липецкая область'
    },
    url: 'https://dejure-help.ru/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/obzhalovanie-dejstvij-pristavov-dlya-biznesa/'
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Можно ли обжаловать не только постановление, но и бездействие пристава?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Да. Предметом защиты может быть постановление, конкретное действие, отказ либо бездействие. До подачи жалобы нужно определить нарушенную обязанность пристава и тот юридический результат, который должен восстановить нарушенное право компании.'
        }
      },
      {
        '@type': 'Question',
        name: 'Какой срок установлен для подачи жалобы?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Законом установлен десятидневный срок, но момент его начала зависит от обстоятельств: даты совершения действия, вынесения постановления, отказа либо момента, когда не извещённое лицо фактически узнало о нарушении.'
        }
      },
      {
        '@type': 'Question',
        name: 'Обязательно ли сначала жаловаться старшему судебному приставу?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Нет, универсального обязательного досудебного порядка нет. Жалоба в порядке подчинённости вышестоящему должностному лицу и обращение в суд — самостоятельные способы защиты.'
        }
      },
      {
        '@type': 'Question',
        name: 'Куда обращаться компании — в арбитражный суд или суд общей юрисдикции?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Подсудность зависит от вида исполнительного документа, характера спорных правоотношений и субъектного состава сторон.'
        }
      },
      {
        '@type': 'Question',
        name: 'Приостанавливает ли подача жалобы списание денег или арест имущества?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Нет, подача жалобы сама по себе автоматически не приостанавливает производство. Основания и порядок приостановления производства оцениваются и заявляются отдельно.'
        }
      },
      {
        '@type': 'Question',
        name: 'Можно ли оспорить постановление о взыскании исполнительского сбора?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Да, при наличии правовых оснований постановление пристава можно оспорить в суде либо ходатайствовать об уменьшении размера сбора или освобождении от его взыскания.'
        }
      },
      {
        '@type': 'Question',
        name: 'Что делать, если пристав не предпринимает мер по взысканию долга?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Необходимо изучить материалы исполнительного производства, зафиксировать несовершённые запросы и пропущенные процессуальные сроки. После этого готовится адресная жалоба.'
        }
      },
      {
        '@type': 'Question',
        name: 'Поможет ли жалоба снять арест с имущества третьего лица?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Не всегда. Если возник спор о принадлежности имущества, надлежащим способом защиты является самостоятельный иск в суд об освобождении имущества от ареста.'
        }
      },
      {
        '@type': 'Question',
        name: 'Можно ли начать работу дистанционно?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Да. Для первичной правовой оценки достаточно направить электронные копии исполнительного документа, постановлений, извещений и переписки с ФССП.'
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ObzhalovanieClient />
    </>
  );
}
