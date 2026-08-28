import React from 'react';
import type { Metadata } from 'next';
import VozvratDenegClient from './VozvratDenegClient';

export const metadata: Metadata = {
  title: 'Возврат незаконно списанных приставами денег в Липецке | Де-Юре',
  description: 'Поможем вернуть деньги, незаконно списанные приставами: защищённые выплаты, повторное или избыточное взыскание, чужой долг. Юрист в Липецке.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/vozvrat-nezakonno-spisannyh-deneg/',
  },
  openGraph: {
    title: 'Возврат незаконно списанных приставами денег | Де-Юре',
    description: 'Проверим основание списания и движение средств, подготовим заявления, жалобу или документы для судебного возврата денег.',
    url: 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/vozvrat-nezakonno-spisannyh-deneg/',
    siteName: 'ЮК «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'Можно ли вернуть деньги, которые приставы уже списали?',
    a: 'Да, если подтверждено незаконное, ошибочное, повторное или избыточное взыскание либо отменено исполненное основание. Способ зависит от того, где находятся средства и кому они перечислены.'
  },
  {
    q: 'Какие выплаты нельзя списывать?',
    a: 'Перечень установлен статьёй 101 Закона № 229-ФЗ и включает ряд целевых компенсаций, пособий и иных выплат. Для некоторых требований действуют исключения, поэтому нужно проверить конкретный вид поступления и долг.'
  },
  {
    q: 'Что делать, если списали пособие или компенсацию?',
    a: 'Получите банковскую выписку и справку плательщика о виде и назначении выплаты. После этого можно определить, кто допустил ошибку и куда направлять требование о возврате.'
  },
  {
    q: 'Вернут ли деньги, если их уже перечислили взыскателю?',
    a: 'Это возможно, но заявление приставу не всегда приводит к возврату. Может потребоваться поворот исполнения отменённого судебного акта или отдельное требование к получателю средств.'
  },
  {
    q: 'Что делать при двойном списании?',
    a: 'Нужно сопоставить оба платежа, остаток долга, несколько исполнительных производств и дату учёта оплаты. Подтверждённая переплата подлежит возврату в установленном порядке.'
  },
  {
    q: 'Можно ли вернуть деньги после отмены судебного приказа?',
    a: 'Вопрос обычно решается через поворот исполнения. Возможность и порядок зависят от стадии спора и наличия нового искового производства, поэтому документы нужно оценивать индивидуально.'
  },
  {
    q: 'Кто отвечает за ошибку — банк или пристав?',
    a: 'Это зависит от постановления, идентификации должника, кода вида дохода, расчёта доступной к взысканию суммы и движения средств. До предъявления требования нужно установить конкретное нарушение каждого участника.'
  },
  {
    q: 'Сколько времени занимает возврат?',
    a: 'Единого срока нет. Он зависит от того, остались ли деньги на депозитном счёте ФССП, требуется ли получить документы, обжаловать отказ или обращаться в суд.'
  },
  {
    q: 'Какие документы нужны для проверки?',
    a: 'Обычно нужны банковская выписка, сведения об исполнительном производстве, постановления, документы об оплате долга и справка об источнике выплаты. Точный перечень определим после изучения ситуации.'
  }
];

export default function VozvratDenegPage() {
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
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/vozvrat-nezakonno-spisannyh-deneg/#breadcrumbs',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://dejure-help.ru/' },
          { '@type': 'ListItem', position: 2, name: 'Гражданам', item: 'https://dejure-help.ru/grazhdanam/' },
          { '@type': 'ListItem', position: 3, name: 'Юрист по исполнительному производству', item: 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/' },
          { '@type': 'ListItem', position: 4, name: 'Возврат незаконно списанных денег', item: 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/vozvrat-nezakonno-spisannyh-deneg/' },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/vozvrat-nezakonno-spisannyh-deneg/#webpage',
        name: 'Возврат незаконно списанных приставами денег в Липецке | Де-Юре',
        description: 'Поможем вернуть деньги, незаконно списанные приставами: защищённые выплаты, повторное или избыточное взыскание, чужой долг. Юрист в Липецке.',
        url: 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/vozvrat-nezakonno-spisannyh-deneg/',
        about: {
          '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/vozvrat-nezakonno-spisannyh-deneg/#service'
        }
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/vozvrat-nezakonno-spisannyh-deneg/#service',
        name: 'Возврат незаконно списанных приставами денежных средств в Липецке',
        description: 'Проверим основание списания и движение средств, подготовим заявления, жалобу или документы для судебного возврата денег.',
        url: 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/vozvrat-nezakonno-spisannyh-deneg/',
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
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/vozvrat-nezakonno-spisannyh-deneg/#faq',
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
      <VozvratDenegClient />
    </>
  );
}
