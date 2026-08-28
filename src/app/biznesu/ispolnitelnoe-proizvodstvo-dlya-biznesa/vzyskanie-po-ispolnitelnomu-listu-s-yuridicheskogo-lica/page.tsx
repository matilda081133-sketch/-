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
    q: 'Что делать в первую очередь после получения исполнительного листа?',
    a: 'Не спешите сразу нести лист приставам. Сначала целесообразно запросить в налоговой инспекции сведения об открытых счетах должника и предъявить лист напрямую в банк, где есть остатки. Это может сэкономить недели и месяцы.'
  },
  {
    q: 'Как узнать, в каких банках у должника есть деньги?',
    a: 'Взыскатель, имеющий на руках подлинник исполнительного листа с неистёкшим сроком, вправе направить запрос в любую налоговую инспекцию. ФНС обязана в течение 7 дней предоставить сведения о банках, в которых у должника открыты счета. Юрист подготовит такой запрос.'
  },
  {
    q: 'Банк вернул исполнительный лист без исполнения. Почему?',
    a: 'Чаще всего причина — отсутствие или недостаточность денег на счёте. Также возможны ошибки в заявлении или отзыв листа должником. Если на счёте пусто, лист передаётся в ФССП для принудительного розыска иного имущества.'
  },
  {
    q: 'Пристав не принимает никаких мер. Как заставить его работать?',
    a: 'Законом предусмотрена процедура обжалования бездействия пристава: старшему судебному приставу, в прокуратуру или арбитражный суд. Юрист составит обоснованную жалобу со ссылками на конкретные сроки и нормы Закона об исполнительном производстве.'
  },
  {
    q: 'Должник перевёл активы на другое юрлицо. Что делать?',
    a: 'Это распространённая схема уклонения. В таких случаях юрист анализирует сделки по выводу активов, инициирует их оспаривание через суд, а при наличии признаков преднамеренного банкротства — ставит вопрос о субсидиарной ответственности руководителей.'
  },
  {
    q: 'Сколько времени действует исполнительный лист?',
    a: 'Общий срок предъявления исполнительного листа к исполнению — 3 года со дня вступления судебного акта в законную силу. При каждом предъявлении в банк или ФССП срок прерывается и после возврата начинает течь заново.'
  },
  {
    q: 'Каковы условия и стоимость работы юриста?',
    a: 'Стоимость зависит от объёма задач: от подготовки разовых документов (запрос в ФНС, заявление в банк, жалоба на пристава) до полного комплексного сопровождения взыскания «под ключ». Условия фиксируются в договоре.'
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
