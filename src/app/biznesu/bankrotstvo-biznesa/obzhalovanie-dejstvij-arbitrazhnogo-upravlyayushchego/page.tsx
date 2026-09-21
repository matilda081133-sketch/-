import { Metadata } from 'next';
import ObzhalovanieUpravlyayushchegoClient from './ObzhalovanieUpravlyayushchegoClient';

export const metadata: Metadata = {
  title: 'Жалоба на арбитражного управляющего в Липецке | Де-Юре',
  description:
    'Проверим действие или бездействие арбитражного управляющего, выберем судебный либо контрольный маршрут, подготовим жалобу и представим интересы. Де-Юре, Липецк.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Жалоба на арбитражного управляющего в Липецке | Де-Юре',
    description:
      'Проверим действие или бездействие арбитражного управляющего, выберем судебный либо контрольный маршрут, подготовим жалобу и представим интересы. Де-Юре, Липецк.',
    url: 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/obzhalovanie-dejstvij-arbitrazhnogo-upravlyayushchego/',
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/obzhalovanie-dejstvij-arbitrazhnogo-upravlyayushchego-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Обжалование действий арбитражного управляющего в Липецке',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Жалоба на арбитражного управляющего в Липецке | Де-Юре',
    description:
      'Проверим действие или бездействие арбитражного управляющего, выберем судебный либо контрольный маршрут, подготовим жалобу и представим интересы. Де-Юре, Липецк.',
    images: ['https://dejure-help.ru/images/og/obzhalovanie-dejstvij-arbitrazhnogo-upravlyayushchego-og.jpg'],
  },
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/obzhalovanie-dejstvij-arbitrazhnogo-upravlyayushchego/',
  },
};

export default function ObzhalovanieUpravlyayushchegoPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LegalService',
        '@id': 'https://dejure-help.ru/#organization',
        'name': 'Юридическая компания «Де-Юре»',
        'url': 'https://dejure-help.ru/',
        'telephone': '+7 (910) 350-31-11',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'ул. Советская, д. 35, оф. 213',
          'addressLocality': 'Липецк',
          'addressRegion': 'Липецкая область',
          'addressCountry': 'RU'
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/obzhalovanie-dejstvij-arbitrazhnogo-upravlyayushchego/#breadcrumbs',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Главная',
            'item': 'https://dejure-help.ru/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Бизнесу',
            'item': 'https://dejure-help.ru/biznesu/'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Банкротство бизнеса',
            'item': 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/'
          },
          {
            '@type': 'ListItem',
            'position': 4,
            'name': 'Обжалование действий арбитражного управляющего',
            'item': 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/obzhalovanie-dejstvij-arbitrazhnogo-upravlyayushchego/'
          }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/obzhalovanie-dejstvij-arbitrazhnogo-upravlyayushchego/#service',
        'name': 'Обжалование действий арбитражного управляющего в Липецке',
        'description':
          'Проверим действие или бездействие арбитражного управляющего, выберем судебный либо контрольный маршрут, подготовим жалобу и представим интересы. Де-Юре, Липецк.',
        'url': 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/obzhalovanie-dejstvij-arbitrazhnogo-upravlyayushchego/',
        'provider': {
          '@id': 'https://dejure-help.ru/#organization'
        }
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/obzhalovanie-dejstvij-arbitrazhnogo-upravlyayushchego/#faq',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Куда жаловаться на арбитражного управляющего?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Зависит от цели. Для защиты права в конкретном деле обычно оценивают судебную жалобу в рамках банкротства. СРО и Росреестр решают контрольные вопросы, а убытки и обжалование судебного акта могут потребовать самостоятельного маршрута.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Можно ли пожаловаться, если управляющий не отвечает?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Можно оценить этот вариант, но самого отсутствия ответа недостаточно. Важны содержание и доставка обращения, обязанность управляющего, срок с учётом конкретного события и то, какое право нарушено бездействием.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Жалоба автоматически отстранит управляющего?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Нет. Отстранение — отдельная мера, для которой суд оценивает установленные нарушения и применимые основания. Страница и договор не должны обещать её применение.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Можно одновременно обратиться в суд, СРО и Росреестр?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Иногда маршруты сочетаются, но у них разные цели и последствия. Сначала полезно определить требуемый результат, чтобы обращения не противоречили друг другу и не превращались в дублирующую рассылку.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Можно ли отменить торги жалобой на управляющего?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Не всегда. Спор о действиях управляющего, спор о торгах, обеспечительные меры и обжалование судебного акта могут иметь разные предметы и требования. Нужны документы и стадия события.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Что нужно доказать в суде?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Проверяются статус заявителя, конкретное действие или бездействие, обязанность управляющего, нарушение права или законного интереса, доказательства эпизода и надлежащий способ защиты.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Можно ли взыскать с управляющего убытки?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Такой способ существует, но не включается автоматически в жалобу. Потребуются отдельная проверка противоправности, размера потерь, причинной связи, субъектов и доступных источников возмещения.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Что делать, если проблема уже отражена в судебном акте?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Нужно разграничить поведение управляющего и вывод суда. Если требуется изменить судебный акт, может быть нужен порядок его обжалования, а не повторная жалоба на управляющего.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Сколько времени занимает спор?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Продолжительность зависит от маршрута, стадии дела, извещений, доказательств, заседаний и обжалования. До анализа документов нельзя публиковать универсальный срок.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Можно ли работать дистанционно?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Да, когда материалы можно безопасно передать, а процесс допускает дистанционную работу. Необходимость очного участия и поездок согласуется отдельно.'
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ObzhalovanieUpravlyayushchegoClient />
    </>
  );
}
