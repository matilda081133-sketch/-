import { Metadata } from 'next';
import ObzhalovanieClient from './ObzhalovanieClient';

export const metadata: Metadata = {
  title: 'Обжалование действий судебных приставов для бизнеса в Липецке | ЮК «Де-Юре»',
  description: 'Юридическая помощь бизнесу при незаконных действиях или бездействии судебных приставов в Липецке: обжалование незаконных арестов счетов и имущества, отмена постановлений, жалобы в ФССП, прокуратуру и арбитражный суд.',
  openGraph: {
    title: 'Обжалование действий судебных приставов для бизнеса в Липецке | ЮК «Де-Юре»',
    description: 'Защищаем права компании при нарушениях со стороны ФССП: снимаем незаконные аресты, отменяем неправомерные постановления, добиваемся активных действий по взысканию.',
    url: 'https://dejure-help.ru/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/obzhalovanie-dejstvij-pristavov-dlya-biznesa/',
    siteName: 'ЮК «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og-bailiff-appeal-b2b.jpg',
        width: 1200,
        height: 630,
        alt: 'Обжалование действий судебных приставов для бизнеса в Липецке | ЮК «Де-Юре»'
      }
    ]
  },
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/obzhalovanie-dejstvij-pristavov-dlya-biznesa/',
  },
};

const faqs = [
  {
    q: 'В какой срок нужно подать жалобу на действия или бездействие пристава?',
    a: 'Срок составляет 10 рабочих дней со дня вынесения постановления, совершения действия или установления факта бездействия. Если компания не была извещена вовремя — 10 дней с момента, когда она узнала или должна была узнать о нарушении. Пропущенный по уважительной причине срок можно восстановить через суд.'
  },
  {
    q: 'Кому подавать жалобу: вышестоящему приставу или сразу в суд?',
    a: 'Закон позволяет использовать оба пути. Жалоба старшему судебному приставу (в порядке подчинённости) рассматривается быстрее — в течение 10 дней, без уплаты госпошлины. Обращение в арбитражный суд требует больше времени, но судебный акт обязателен для ФССП. Юрист оценит, какой маршрут эффективнее.'
  },
  {
    q: 'Пристав арестовал счёт с зарплатными деньгами. Что делать?',
    a: 'Пристав не имеет права блокировать средства, предназначенные для выплаты заработной платы и уплаты налогов (они имеют приоритетную очерёдность). Необходимо незамедлительно подать приставу ходатайство о снятии ареста в части социально значимых платежей с приложением документов.'
  },
  {
    q: 'Арестовали оборудование, без которого производство остановилось. Это законно?',
    a: 'Закон об исполнительном производстве устанавливает очерёдность взыскания имущества: сначала денежные средства, затем имущество, не участвующее в производстве, и лишь в последнюю очередь — основные производственные фонды. Если этот порядок нарушен, арест можно оспорить.'
  },
  {
    q: 'Пристав бездействует по нашему исполнительному листу уже 3 месяца. Как реагировать?',
    a: 'Зафиксируйте отсутствие действий: запросите материалы производства для ознакомления, проверьте, направлялись ли запросы в банки и регистрирующие органы. После этого подайте жалобу на бездействие старшему приставу или административный иск в арбитражный суд.'
  },
  {
    q: 'Приостанавливает ли подача жалобы исполнительные действия?',
    a: 'Подача жалобы вышестоящему приставу сама по себе не приостанавливает производство. Однако при обращении в суд можно заявить ходатайство о применении мер предварительной защиты (приостановлении исполнительного производства). Юрист подготовит такое ходатайство.'
  },
  {
    q: 'Какие документы нужны для первичной оценки ситуации?',
    a: 'Постановление о возбуждении исполнительного производства, обжалуемое постановление (об аресте, оценке, взыскании сбора), переписка с ФССП, документы на спорное имущество. Если производство электронное — достаточно номера исполнительного производства.'
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
        '@id': 'https://dejure-help.ru/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/obzhalovanie-dejstvij-pristavov-dlya-biznesa/#breadcrumbs',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://dejure-help.ru/' },
          { '@type': 'ListItem', position: 2, name: 'Бизнесу', item: 'https://dejure-help.ru/biznesu/' },
          { '@type': 'ListItem', position: 3, name: 'Исполнительное производство для бизнеса', item: 'https://dejure-help.ru/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/' },
          { '@type': 'ListItem', position: 4, name: 'Обжалование действий судебных приставов для бизнеса', item: 'https://dejure-help.ru/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/obzhalovanie-dejstvij-pristavov-dlya-biznesa/' }
        ]
      },
      {
        '@type': 'WebPage',
        '@id': 'https://dejure-help.ru/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/obzhalovanie-dejstvij-pristavov-dlya-biznesa/#webpage',
        name: 'Обжалование действий судебных приставов для бизнеса в Липецке | ЮК «Де-Юре»',
        description: 'Юридическая помощь бизнесу при незаконных действиях или бездействии судебных приставов в Липецке: обжалование незаконных арестов счетов и имущества, отмена постановлений, жалобы в ФССП, прокуратуру и арбитражный суд.',
        url: 'https://dejure-help.ru/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/obzhalovanie-dejstvij-pristavov-dlya-biznesa/',
        about: {
          '@id': 'https://dejure-help.ru/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/obzhalovanie-dejstvij-pristavov-dlya-biznesa/#service'
        }
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/obzhalovanie-dejstvij-pristavov-dlya-biznesa/#service',
        name: 'Обжалование действий судебных приставов для бизнеса',
        description: 'Юридическая помощь бизнесу при незаконных действиях или бездействии судебных приставов в Липецке: обжалование незаконных арестов счетов и имущества, отмена постановлений, жалобы в ФССП, прокуратуру и арбитражный суд.',
        url: 'https://dejure-help.ru/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/obzhalovanie-dejstvij-pristavov-dlya-biznesa/',
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
        '@id': 'https://dejure-help.ru/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/obzhalovanie-dejstvij-pristavov-dlya-biznesa/#faq',
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
