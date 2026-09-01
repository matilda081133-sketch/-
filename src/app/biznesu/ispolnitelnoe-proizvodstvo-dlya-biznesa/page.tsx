import { Metadata } from 'next';
import IspolnitelnoeClient from './IspolnitelnoeClient';

export const metadata: Metadata = {
  title: 'Исполнительное производство для бизнеса в Липецке | ЮК «Де-Юре»',
  description: 'Юридическое сопровождение исполнительного производства для бизнеса в Липецке: взыскание долгов по исполнительным листам с контрагентов, защита интересов компании-должника, обжалование действий и бездействия судебных приставов.',
  openGraph: {
    title: 'Исполнительное производство для бизнеса в Липецке | ЮК «Де-Юре»',
    description: 'Комплексное юридическое сопровождение исполнительного производства для юридических лиц и ИП: на стороне взыскателя и должника. Куратор направления — юрист с 13-летним стажем в ФССП.',
    url: 'https://dejure-help.ru/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/',
    siteName: 'ЮК «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og-b2b-enforcement.jpg',
        width: 1200,
        height: 630,
        alt: 'Исполнительное производство для бизнеса в Липецке | ЮК «Де-Юре»'
      }
    ]
  },
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/',
  },
};

const faqs = [
  {
    q: "Можно ли предъявить исполнительный лист сразу в банк должника?",
    a: "Да, денежный исполнительный документ может быть направлен взыскателем непосредственно в известный банк. Но этот маршрут эффективен, когда банк и реквизиты должника определены и на счетах есть деньги. В остальных случаях может потребоваться ФССП и розыск активов."
  },
  {
    q: "Суд выигран. Почему пристав не взыскал деньги за два месяца?",
    a: "Закон устанавливает срок совершения исполнительных действий, но он не гарантирует фактическое поступление денег за два месяца. Результат зависит от активов должника, очередности требований, обжалований и полноты принятых мер."
  },
  {
    q: "Можно ли обжаловать бездействие пристава от имени организации?",
    a: "Да. Постановление, действие или бездействие можно обжаловать в порядке подчинённости и оспорить в суде. Способ выбирают с учётом цели, доказательств, текущей стадии и короткого срока подачи жалобы."
  },
  {
    q: "Что делать, если пристав арестовал расчётный счёт компании?",
    a: "Нужно установить основание и сумму ограничения, проверить постановление, остаток долга, очередность списаний и наличие других производств. Дальнейший маршрут может включать заявление приставу, жалобу, обращение в суд либо изменение порядка исполнения."
  },
  {
    q: "Можно ли снять арест с оборудования, которое нужно для работы?",
    a: "Само использование имущества в деятельности компании не гарантирует снятие ареста. Проверяются принадлежность имущества, основание и соразмерность меры, очередность обращения взыскания и возможность предложить другой способ исполнения."
  },
  {
    q: "Что делать, если у должника несколько взыскателей?",
    a: "Нужно проверить сводное производство, очередность требований, уже выявленные активы и перспективу каждого способа взыскания. Это влияет на выбор между банком, ФССП, банкротным маршрутом и дополнительными судебными действиями."
  },
  {
    q: "Можно ли получить отсрочку или рассрочку исполнения?",
    a: "Такая возможность предусмотрена, но решение принимает суд или другой орган, выдавший исполнительный документ, с учётом обстоятельств дела. Одного желания сохранить оборотные средства недостаточно — нужны доказательства и реалистичный порядок исполнения."
  },
  {
    q: "Какие документы нужны для консультации?",
    a: "Минимально полезны судебный акт, исполнительный документ, постановление о возбуждении производства и последние постановления пристава. Для должника также важны банковские уведомления и документы на имущество; для взыскателя — сведения о предпринятых мерах и известных активах."
  }
];

export default function IspolnitelnoePage() {
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
        '@id': 'https://dejure-help.ru/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/#breadcrumbs',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://dejure-help.ru/' },
          { '@type': 'ListItem', position: 2, name: 'Бизнесу', item: 'https://dejure-help.ru/biznesu/' },
          { '@type': 'ListItem', position: 3, name: 'Исполнительное производство для бизнеса', item: 'https://dejure-help.ru/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/' }
        ]
      },
      {
        '@type': 'WebPage',
        '@id': 'https://dejure-help.ru/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/#webpage',
        name: 'Исполнительное производство для бизнеса в Липецке | ЮК «Де-Юре»',
        description: 'Юридическое сопровождение исполнительного производства для бизнеса в Липецке: взыскание долгов по исполнительным листам с контрагентов, защита интересов компании-должника, обжалование действий и бездействия судебных приставов.',
        url: 'https://dejure-help.ru/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/',
        about: {
          '@id': 'https://dejure-help.ru/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/#service'
        }
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/#service',
        name: 'Исполнительное производство для бизнеса',
        description: 'Юридическое сопровождение исполнительного производства для бизнеса в Липецке: на стороне взыскателя и должника. Розыск активов, обжалование действий приставов, снятие арестов со счетов.',
        url: 'https://dejure-help.ru/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/',
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
        '@id': 'https://dejure-help.ru/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/#faq',
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
      <IspolnitelnoeClient />
    </>
  );
}
