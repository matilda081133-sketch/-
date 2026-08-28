import { Metadata } from 'next';
import SnyatieArestaSchetaClient from './SnyatieArestaSchetaClient';

export const metadata: Metadata = {
  title: 'Снятие ареста со счёта приставами в Липецке | Де-Юре',
  description: 'Поможем снять арест со счёта или банковской карты: проверим основание, подготовим заявление или жалобу и проконтролируем исполнение банком.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Снятие ареста со счёта приставами | Де-Юре',
    description: 'Проверим исполнительное производство, добьёмся отмены или корректировки ареста и проконтролируем передачу постановления в банк.',
    url: 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/snyatie-aresta-so-scheta/',
    siteName: 'ЮК «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/snyatie-aresta-so-scheta/',
  },
};

export default function SnyatieArestaSchetaPage() {
  const faqs = [
    {
      q: 'Можно ли снять арест со счёта через банк?',
      a: 'Если ограничение наложено постановлением пристава, банк обычно не вправе отменить его по просьбе клиента. Сначала нужно добиться надлежащего постановления об отмене или корректировке ареста и проверить его поступление в банк.'
    },
    {
      q: 'Сколько времени занимает снятие ареста?',
      a: 'Единого срока нет. Он зависит от причины ограничения, наличия документов, необходимости подтвердить оплату или защищённый доход, вынесения постановления и его обработки банком. Обещать универсальный срок до проверки нельзя.'
    },
    {
      q: 'Арест снимется автоматически после оплаты долга?',
      a: 'Не всегда. Нужно проверить полный расчёт, исполнительский сбор, другие производства, вынесение постановления об окончании производства и отмене ограничений, а также его направление в банк.'
    },
    {
      q: 'Можно ли снять арест только с зарплатного счёта?',
      a: 'Сам факт зачисления зарплаты не всегда означает полное снятие ареста. Проверяются допустимый размер взыскания, идентификация дохода и возможность скорректировать порядок удержаний или защитить установленную законом сумму.'
    },
    {
      q: 'Что делать, если на счёт поступают пособия или алименты?',
      a: 'Нужно подтвердить вид и назначение поступлений банковской выпиской и документами плательщика. Правовой режим зависит от конкретного дохода и вида взыскиваемого требования, поэтому перечень статьи 101 применяется с учётом исключений.'
    },
    {
      q: 'Можно ли снять арест, если долг мне не принадлежит?',
      a: 'Да, если подтверждена ошибочная идентификация или счёт не принадлежит должнику. Потребуются документы о личности, принадлежности счёта и несоответствии данным фактического должника.'
    },
    {
      q: 'Почему банк не разблокировал счёт после постановления пристава?',
      a: 'Нужно проверить, направлено ли постановление именно в этот банк, содержит ли реквизиты нужного счёта и объём снятия ограничения, получено ли оно банком и нет ли другого действующего ареста.'
    },
    {
      q: 'Нужно ли обжаловать постановление пристава в суде?',
      a: 'Не всегда. В части случаев вопрос решается заявлением или жалобой руководителю. Судебный порядок нужен, если акт, отказ или бездействие невозможно устранить административным способом либо такой способ уже не дал результата.'
    },
    {
      q: 'Какие документы нужны для проверки?',
      a: 'Обычно нужны уведомление или справка банка об ограничении, выписка по счёту, номер исполнительного производства, постановления, документы об оплате долга и подтверждение происхождения поступлений. Точный перечень определим по ситуации.'
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
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/snyatie-aresta-so-scheta/#breadcrumbs',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://dejure-help.ru/' },
          { '@type': 'ListItem', position: 2, name: 'Гражданам', item: 'https://dejure-help.ru/grazhdanam/' },
          { '@type': 'ListItem', position: 3, name: 'Юрист по исполнительному производству', item: 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/' },
          { '@type': 'ListItem', position: 4, name: 'Снятие ареста со счёта', item: 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/snyatie-aresta-so-scheta/' },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/snyatie-aresta-so-scheta/#webpage',
        name: 'Снятие ареста со счёта приставами в Липецке | Де-Юре',
        description: 'Поможем снять арест со счёта или банковской карты: проверим основание, подготовим заявление или жалобу и проконтролируем исполнение банком.',
        url: 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/snyatie-aresta-so-scheta/',
        about: {
          '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/snyatie-aresta-so-scheta/#service'
        }
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/snyatie-aresta-so-scheta/#service',
        name: 'Снятие ареста со счёта или банковской карты в Липецке',
        description: 'Проверка оснований ареста карты и счёта, подготовка заявлений приставу, жалоб и исков в Липецке и по России.',
        url: 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/snyatie-aresta-so-scheta/',
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
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/snyatie-aresta-so-scheta/#faq',
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
      <SnyatieArestaSchetaClient />
    </>
  );
}
