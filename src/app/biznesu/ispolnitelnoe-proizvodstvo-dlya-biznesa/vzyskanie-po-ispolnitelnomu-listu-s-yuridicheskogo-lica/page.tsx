import { Metadata } from 'next';
import VzyskanieClient from './VzyskanieClient';

export const metadata: Metadata = {
  title: 'Взыскание по исполнительному листу с юридического лица в Липецке | ЮК «Де-Юре»',
  description: 'Юридическое сопровождение взыскания задолженности по исполнительным листам с юридических лиц в Липецке: предъявление в банки, работа с ФССП, розыск активов должника, обжалование бездействия приставов.',
  openGraph: {
    title: 'Взыскание по исполнительному листу с юридического лица в Липецке | ЮК «Де-Юре»',
    description: 'Поможем реально получить деньги по исполнительному листу с компании-должника: напрямую через банк или через ФССП с розыском имущества и контролем действий пристава.',
    url: 'https://dejure-help.ru/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/vzyskanie-po-ispolnitelnomu-listu-s-yuridicheskogo-lica/',
    siteName: 'ЮК «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og-b2b-exec-list.jpg',
        width: 1200,
        height: 630,
        alt: 'Взыскание по исполнительному листу с юридического лица | ЮК «Де-Юре»'
      }
    ]
  },
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/vzyskanie-po-ispolnitelnomu-listu-s-yuridicheskogo-lica/',
  },
};

const faqs = [
  {
    q: 'Куда предъявлять исполнительный лист на организацию?',
    a: 'Если известен банк и нужно взыскать деньги со счёта, документ можно направить непосредственно в банк. Когда требуется искать активы и применять меры принудительного исполнения, обычно нужен пристав. Для бюджетных должников может действовать специальный порядок.'
  },
  {
    q: 'Как узнать, в каких банках у должника открыты счета?',
    a: 'Взыскатель с исполнительным листом, срок предъявления которого не истёк, вправе запросить предусмотренные законом сведения в налоговом органе. Комплект и способ подачи проверяются до направления запроса.'
  },
  {
    q: 'Что будет, если денег на счёте недостаточно?',
    a: 'Банк исполняет документ в пределах доступных средств и продолжает исполнение в предусмотренном законом порядке, если документ не отозван и нет другого основания прекратить операции. Одновременно оценивается целесообразность перехода в ФССП.'
  },
  {
    q: 'Можно ли одновременно подать один исполнительный лист в банк и приставам?',
    a: 'Оригинал одного бумажного документа нельзя одновременно предъявить разным адресатам. Маршрут и момент отзыва документа нужно планировать с учётом срока предъявления и уже проведённого частичного взыскания.'
  },
  {
    q: 'Что делать, если у должника несколько взыскателей?',
    a: 'Нужно проверить сводное производство, характер требований, очередь и уже арестованные активы. При недостаточности денег распределение зависит от установленной законом очередности и правил внутри одной очереди.'
  },
  {
    q: 'Обязан ли пристав взыскать долг за два месяца?',
    a: 'Нет. Закон устанавливает общий срок совершения исполнительных действий, но он не гарантирует поступление денег. Фактическая длительность зависит от активов, других требований, обжалований, реализации имущества и поведения должника.'
  },
  {
    q: 'Можно ли повторно предъявить лист после возврата?',
    a: 'Во многих случаях да, но сначала нужно проверить основание возврата и срок нового предъявления. Повторная подача без новых сведений и конкретного плана действий может привести к тому же результату.'
  },
  {
    q: 'Что делать, если должник готовится к банкротству?',
    a: 'Нужно быстро сопоставить индивидуальное взыскание с правилами банкротства: проверить публикации и дело, определить характер требования и момент, когда защита интересов должна продолжаться уже в банкротной процедуре.'
  }
];

export default function VzyskaniePage() {
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
          streetAddress: 'ул. Советская, 35',
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
        '@id': 'https://dejure-help.ru/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/vzyskanie-po-ispolnitelnomu-listu-s-yuridicheskogo-lica/#breadcrumbs',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://dejure-help.ru/' },
          { '@type': 'ListItem', position: 2, name: 'Бизнесу', item: 'https://dejure-help.ru/biznesu/' },
          { '@type': 'ListItem', position: 3, name: 'Исполнительное производство для бизнеса', item: 'https://dejure-help.ru/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/' },
          { '@type': 'ListItem', position: 4, name: 'Взыскание по исполнительному листу с юридического лица', item: 'https://dejure-help.ru/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/vzyskanie-po-ispolnitelnomu-listu-s-yuridicheskogo-lica/' }
        ]
      },
      {
        '@type': 'WebPage',
        '@id': 'https://dejure-help.ru/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/vzyskanie-po-ispolnitelnomu-listu-s-yuridicheskogo-lica/#webpage',
        name: 'Взыскание по исполнительному листу с юридического лица в Липецке | ЮК «Де-Юре»',
        description: 'Юридическое сопровождение взыскания задолженности по исполнительным листам с юридических лиц в Липецке: предъявление в банки, работа с ФССП, розыск активов должника, обжалование бездействия приставов.',
        url: 'https://dejure-help.ru/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/vzyskanie-po-ispolnitelnomu-listu-s-yuridicheskogo-lica/',
        about: {
          '@id': 'https://dejure-help.ru/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/vzyskanie-po-ispolnitelnomu-listu-s-yuridicheskogo-lica/#service'
        }
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/vzyskanie-po-ispolnitelnomu-listu-s-yuridicheskogo-lica/#service',
        name: 'Взыскание по исполнительному листу с юридического лица',
        description: 'Взыскание по исполнительному листу с юридического лица в Липецке: предъявление в банки, работа с ФССП, розыск счетов и имущества, обжалование бездействия судебного пристава.',
        url: 'https://dejure-help.ru/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/vzyskanie-po-ispolnitelnomu-listu-s-yuridicheskogo-lica/',
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
        '@id': 'https://dejure-help.ru/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/vzyskanie-po-ispolnitelnomu-listu-s-yuridicheskogo-lica/#faq',
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
      <VzyskanieClient />
    </>
  );
}
