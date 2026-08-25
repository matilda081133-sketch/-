import React from 'react';
import VzyskanieClient from './VzyskanieClient';

export const metadata = {
  title: 'Взыскание по исполнительному листу с юрлица в Липецке | Де-Юре',
  description: 'Поможем взыскать деньги с юридического лица по исполнительному листу: проверим счета и активы, выберем банк или ФССП, проконтролируем исполнение.',
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/vzyskanie-po-ispolnitelnomu-listu-s-yuridicheskogo-lica/'
  },
  openGraph: {
    title: 'Взыскание по исполнительному листу с юридического лица | Де-Юре',
    description: 'Проверим организацию-должника, выберем канал исполнения и сопроводим фактическое взыскание.',
    url: 'https://dejure-help.ru/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/vzyskanie-po-ispolnitelnomu-listu-s-yuridicheskogo-lica/',
    siteName: 'ЮК «Де-Юре»',
    images: [
      {
        url: 'https://dejure-help.ru/images/og-bailiff-appeal-b2b.jpg',
        width: 1200,
        height: 630,
        alt: 'Взыскание по исполнительному листу с юридического лица в Липецке'
      }
    ],
    locale: 'ru_RU',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Взыскание по исполнительному листу с юрлица в Липецке | Де-Юре',
    description: 'Поможем взыскать деньги с юридического лица по исполнительному листу: проверим счета и активы, выберем банк или ФССП, проконтролируем исполнение.',
    images: ['https://dejure-help.ru/images/og-bailiff-appeal-b2b.jpg']
  }
};

export default function VzyskaniePage() {
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
        name: 'Взыскание по исполнительному листу с юридического лица',
        item: 'https://dejure-help.ru/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/vzyskanie-po-ispolnitelnomu-listu-s-yuridicheskogo-lica/'
      }
    ]
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Взыскание по исполнительному листу с юридического лица в Липецке',
    serviceType: 'Юридические услуги бизнесу по взысканию задолженности по исполнительным документам',
    description: 'Поможем взыскать деньги с юридического лица по исполнительному листу: проверим счета и активы, выберем банк или ФССП, проконтролируем исполнение.',
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
    url: 'https://dejure-help.ru/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/vzyskanie-po-ispolnitelnomu-listu-s-yuridicheskogo-lica/'
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Куда предъявлять исполнительный лист на организацию?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Если известен банк и нужно взыскать деньги со счёта, документ можно направить непосредственно в банк. Когда требуется искать активы и применять меры принудительного исполнения, обычно нужен пристав. Для бюджетных должников может действовать специальный порядок.'
        }
      },
      {
        '@type': 'Question',
        name: 'Как узнать, в каких банках у должника открыты счета?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Взыскатель с исполнительным листом, срок предъявления которого не истёк, вправе запросить предусмотренные законом сведения в налоговом органе. Комплект и способ подачи проверяются до направления запроса.'
        }
      },
      {
        '@type': 'Question',
        name: 'Что будет, если денег на счёте недостаточно?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Банк исполняет документ в пределах доступных средств и продолжает исполнение в предусмотренном законом порядке, если документ не отозван и нет другого основания прекратить операции. Одновременно оценивается целесообразность перехода в ФССП.'
        }
      },
      {
        '@type': 'Question',
        name: 'Можно ли одновременно подать один исполнительный лист в банк и приставам?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Оригинал одного бумажного документа нельзя одновременно предъявить разным адресатам. Маршрут и момент отзыва документа нужно планировать с учётом срока предъявления и уже проведённого частичного взыскания.'
        }
      },
      {
        '@type': 'Question',
        name: 'Что делать, если у должника несколько взыскателей?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Нужно проверить сводное производство, характер требований, очередь и уже арестованные активы. При недостаточности денег распределение зависит от установленной законом очередности и правил внутри одной очереди.'
        }
      },
      {
        '@type': 'Question',
        name: 'Обязан ли пристав взыскать долг за два месяца?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Нет. Закон устанавливает общий срок совершения исполнительных действий, но он не гарантирует поступление денег. Фактическая длительность зависит от активов, других требований, обжалований, реализации имущества и поведения должника.'
        }
      },
      {
        '@type': 'Question',
        name: 'Можно ли повторно предъявить лист после возврата?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Во многих случаях да, но сначала нужно проверить основание возврата и срок нового предъявления. Повторная подача без новых сведений и конкретного плана действий может привести к тому же результату.'
        }
      },
      {
        '@type': 'Question',
        name: 'Что делать, если должник готовится к банкротству?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Нужно быстро сопоставить индивидуальное взыскание с правилами банкротства: проверить публикации и дело, определить характер требования и момент, когда защита интересов должна продолжаться уже в банкротной процедуре.'
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
      <VzyskanieClient />
    </>
  );
}
