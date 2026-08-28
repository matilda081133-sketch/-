import { Metadata } from 'next';
import IspolnitelnoeGrazhdanamClient from './IspolnitelnoeGrazhdanamClient';

export const metadata: Metadata = {
  title: 'Юрист по исполнительному производству в Липецке | Де-Юре',
  description: 'Юрист по исполнительному производству в Липецке: помощь должникам и взыскателям, жалобы на приставов, аресты, списания и исполнение решений суда.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Юрист по исполнительному производству в Липецке | Де-Юре',
    description: 'Помощь гражданам-должникам и взыскателям: споры с приставами, незаконные списания, аресты и взыскание по исполнительному листу.',
    url: 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/',
    siteName: 'ЮК «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/',
  },
};

export default function IspolnitelnoeGrazhdanamPage() {
  const faqs = [
    {
      q: 'Вы помогаете должникам или только взыскателям?',
      a: 'Работаем с обеими сторонами. Должнику помогаем проверить законность списаний, арестов, удержаний и ограничений. Взыскателю — предъявить исполнительный документ, контролировать действия пристава и добиваться фактического исполнения.'
    },
    {
      q: 'Можно ли обжаловать действие или бездействие пристава?',
      a: 'Да, если постановление, действие или бездействие нарушает Ваши права. В зависимости от ситуации возможны жалоба вышестоящему должностному лицу, обращение в прокуратуру или суд. Способ выбирают после изучения материалов и желаемого результата.'
    },
    {
      q: 'Какой срок даётся на жалобу?',
      a: 'Как правило, жалобу подают в течение десяти рабочих дней со дня постановления, действия, установления бездействия либо со дня, когда не извещённое лицо узнало или должно было узнать о нарушении. Начало и возможность восстановления срока нужно проверять индивидуально.'
    },
    {
      q: 'Нужно ли сначала жаловаться старшему приставу, а потом идти в суд?',
      a: 'Не во всех случаях внесудебная жалоба обязательна. Административный и судебный маршруты могут различаться по задаче, срокам и доказательствам. Юрист определит, какой способ или их сочетание подходит именно в Вашей ситуации.'
    },
    {
      q: 'Можно ли вернуть деньги, которые уже списали?',
      a: 'Иногда да. Имеют значение основание взыскания, вид поступления, размер списания, погашение долга и то, куда уже перечислены деньги. Для оценки нужны постановления и банковская выписка с назначением поступления и списания.'
    },
    {
      q: 'Можно ли сохранить прожиточный минимум?',
      a: 'Должник-гражданин вправе обратиться с заявлением о сохранении ежемесячного дохода в размере прожиточного минимума на одном указанном счёте. Правило не применяется к отдельным категориям взысканий, поэтому основания и документы нужно проверить.'
    },
    {
      q: 'Что нужно для консультации?',
      a: 'По возможности подготовьте номер исполнительного производства, исполнительный документ, постановления пристава, уведомления, банковские выписки, переписку и документы на имущество. Если части документов нет, сначала определим, что и где нужно получить.'
    },
    {
      q: 'Можно ли начать работу дистанционно?',
      a: 'Да. Консультацию, изучение электронных копий документов и подготовку обращений можно начать дистанционно. Необходимость личного участия зависит от стадии производства и выбранного способа защиты.'
    }
  ];

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
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/#breadcrumbs',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://dejure-help.ru/' },
          { '@type': 'ListItem', position: 2, name: 'Гражданам', item: 'https://dejure-help.ru/grazhdanam/' },
          { '@type': 'ListItem', position: 3, name: 'Юрист по исполнительному производству', item: 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/' },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/#webpage',
        name: 'Юрист по исполнительному производству в Липецке | Де-Юре',
        description: 'Юрист по исполнительному производству в Липецке: помощь должникам и взыскателям, жалобы на приставов, аресты, списания и исполнение решений суда.',
        url: 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/',
        about: {
          '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/#service'
        }
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/#service',
        name: 'Юрист по исполнительному производству для граждан',
        description: 'Помощь гражданам-должникам и взыскателям: споры с приставами, незаконные списания, аресты счетов и автомобиля, взыскание по исполнительному листу.',
        url: 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/',
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
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/#faq',
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
      <IspolnitelnoeGrazhdanamClient />
    </>
  );
}
