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
    q: 'Можно ли обжаловать не только постановление, но и бездействие пристава?',
    a: 'Да. Предметом защиты может быть постановление, конкретное действие, отказ либо бездействие. До подачи жалобы нужно определить нарушенную обязанность пристава и тот юридический результат, который должен восстановить нарушенное право компании.'
  },
  {
    q: 'Какой срок установлен для подачи жалобы?',
    a: 'Законом установлен десятидневный срок, но момент его начала зависит от обстоятельств: даты совершения действия, вынесения постановления, отказа либо момента, когда не извещённое лицо фактически узнало о нарушении. Срок рассчитывается индивидуально после проверки документов.'
  },
  {
    q: 'Обязательно ли сначала жаловаться старшему судебному приставу?',
    a: 'Нет, универсального обязательного досудебного порядка нет. Жалоба в порядке подчинённости вышестоящему должностному лицу и обращение в суд — самостоятельные способы защиты. Выбор зависит от характера нарушения, срочности и доказательной базы.'
  },
  {
    q: 'Куда обращаться компании — в арбитражный суд или суд общей юрисдикции?',
    a: 'Подсудность зависит от вида исполнительного документа, характера спорных правоотношений и субъектного состава сторон. Ошибка с подсудностью ведёт к потере времени, поэтому надлежащий суд определяется юристом до подачи заявления.'
  },
  {
    q: 'Приостанавливает ли подача жалобы списание денег или арест имущества?',
    a: 'Нет, подача жалобы сама по себе автоматически не приостанавливает производство. Основания и порядок приостановления производства, отдельного исполнительного действия или применения обеспечительных мер оцениваются и заявляются отдельно.'
  },
  {
    q: 'Можно ли оспорить постановление о взыскании исполнительского сбора?',
    a: 'Да, при наличии правовых оснований постановление пристава можно оспорить в суде либо ходатайствовать об уменьшении размера сбора или освобождении от его взыскания. Перспектива зависит от соблюдения порядка извещения и причин несвоевременного исполнения.'
  },
  {
    q: 'Что делать, если пристав не предпринимает мер по взысканию долга?',
    a: 'Необходимо изучить материалы исполнительного производства, зафиксировать несовершённые запросы и пропущенные процессуальные сроки. После этого готовится адресная жалоба с требованием совершить конкретные исполнительные действия.'
  },
  {
    q: 'Поможет ли жалоба снять арест с имущества третьего лица?',
    a: 'Не всегда. Если возник спор о принадлежности имущества (например, имущество находится в лизинге, аренде или принадлежит контрагенту), надлежащим способом защиты является самостоятельный иск в суд об освобождении имущества от ареста.'
  },
  {
    q: 'Можно ли начать работу дистанционно?',
    a: 'Да. Для первичной правовой оценки достаточно направить электронные копии исполнительного документа, постановлений, извещений и переписки с ФССП. Необходимость очного участия в службе приставов или суде определяется индивидуально.'
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
