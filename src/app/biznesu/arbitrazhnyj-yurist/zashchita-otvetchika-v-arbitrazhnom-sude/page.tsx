import type { Metadata } from 'next';
import ZashchitaOtvetchikaClient from './ZashchitaOtvetchikaClient';

export const metadata: Metadata = {
  title: 'Защита ответчика в арбитражном суде в Липецке | Де-Юре',
  description:
    'Получили иск в арбитражный суд? Проверим материалы и сроки, подготовим отзыв и ходатайства, выстроим позицию и представим интересы ответчика.',
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/zashchita-otvetchika-v-arbitrazhnom-sude/'
  },
  openGraph: {
    title: 'Защита ответчика в арбитражном суде в Липецке | Де-Юре',
    description:
      'Защита интересов ответчика в арбитражном суде: срочный анализ иска, подготовка мотивированного отзыва, возражения, экспертиза и процессуальное представительство.',
    url: 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/zashchita-otvetchika-v-arbitrazhnom-sude/',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Юридическая компания «Де-Юре»',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/zashchita-otvetchika-v-arbitrazhnom-sude.jpg',
        width: 1200,
        height: 630,
        alt: 'Защита ответчика в арбитражном суде в Липецке'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://dejure-help.ru/images/og/zashchita-otvetchika-v-arbitrazhnom-sude.jpg']
  }
};

export default function ZashchitaOtvetchikaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LegalService',
        '@id': 'https://dejure-help.ru/#organization',
        'name': 'Юридическая компания «Де-Юре»',
        'url': 'https://dejure-help.ru/',
        'telephone': '+7 (4742) 20-15-25',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'ул. Советская, д. 35, оф. 213',
          'addressLocality': 'Липецк',
          'addressRegion': 'Липецкая область',
          'addressCountry': 'RU'
        }
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/zashchita-otvetchika-v-arbitrazhnom-sude/#service',
        'url': 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/zashchita-otvetchika-v-arbitrazhnom-sude/',
        'name': 'Защита ответчика в арбитражном суде в Липецке',
        'serviceType': 'Юридическая защита ответчика в арбитражном процессе',
        'description': 'Срочный анализ иска, проверка подсудности и сроков, подготовка мотивированного отзыва, назначение судебных экспертиз, представление интересов ответчика в арбитраже.',
        'areaServed': [
          { '@type': 'AdministrativeArea', 'name': 'Липецкая область' },
          { '@type': 'City', 'name': 'Липецк' },
          { '@type': 'Country', 'name': 'Россия' }
        ],
        'provider': {
          '@id': 'https://dejure-help.ru/#organization'
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/zashchita-otvetchika-v-arbitrazhnom-sude/#breadcrumbs',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Главная', 'item': 'https://dejure-help.ru/' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Бизнесу', 'item': 'https://dejure-help.ru/biznesu/' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Арбитражный юрист', 'item': 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/' },
          { '@type': 'ListItem', 'position': 4, 'name': 'Защита ответчика', 'item': 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/zashchita-otvetchika-v-arbitrazhnom-sude/' }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/zashchita-otvetchika-v-arbitrazhnom-sude/#faq',
        'mainEntity': [
                    {
                              "@type": "Question",
                              "name": "Что делать, если получен иск из арбитражного суда?",
                              "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Необходимо срочно изучить карточку дела в системе «Мой Арбитр», проверить процессуальный срок для подачи отзыва, запросить материалы дела и привлечь юриста для формирования возражений."
                              }
                    },
                    {
                              "@type": "Question",
                              "name": "Как снизить неустойку по статье 333 ГК РФ?",
                              "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Для предпринимателей снижение неустойки возможно исключительно по письменному мотивированному заявлению ответчика с представлением контррасчёта и доказательств несоразмерности последствиям нарушения."
                              }
                    },
                    {
                              "@type": "Question",
                              "name": "В каких случаях подаётся встречный иск?",
                              "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Встречный иск подаётся, когда у ответчика есть взаимные требования к истцу (срыв сроков, недостатки работ, переплата, непередача документов), зачёт которых исключает или уменьшает требования истца."
                              }
                    },
                    {
                              "@type": "Question",
                              "name": "Можно ли заключить мировое соглашение в арбитраже?",
                              "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Да, мировое соглашение можно заключить на любой стадии арбитражного процесса. Соглашение утверждает суд. При нарушении его условий взыскатель вправе получить исполнительный лист на принудительное исполнение."
                              }
                    },
                    {
                              "@type": "Question",
                              "name": "Как снять арест с расчётного счёта компании?",
                              "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Подаётся ходатайство об отмене или замене обеспечительных мер с доказыванием их несоразмерности, либо на депозитный счёт суда вносится встречное обеспечение."
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
      <ZashchitaOtvetchikaClient />
    </>
  );
}
