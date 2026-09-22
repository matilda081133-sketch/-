import { Metadata } from 'next';
import YuridicheskijAuditClient from './YuridicheskijAuditClient';

export const metadata: Metadata = {
  title: 'Юридический аудит бизнеса в Липецке | Де-Юре',
  description: 'Проверим документы и процессы компании, выявим правовые риски и подготовим письменный отчёт с приоритетным планом их устранения. 📞 +7 (4742) 20-15-25.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Юридический аудит бизнеса в Липецке | Де-Юре',
    description: 'Проверим документы и процессы компании, выявим правовые риски и подготовим письменный отчёт с приоритетным планом их устранения. 📞 +7 (4742) 20-15-25.',
    url: 'https://dejure-help.ru/biznesu/yuridicheskoe-soprovozhdenie-biznesa/yuridicheskij-audit-biznesa/',
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/yuridicheskij-audit-biznesa-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Юридический аудит бизнеса в Липецке',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Юридический аудит бизнеса в Липецке | Де-Юре',
    description: 'Проверим документы и процессы компании, выявим правовые риски и подготовим письменный отчёт с приоритетным планом их устранения. 📞 +7 (4742) 20-15-25.',
    images: ['https://dejure-help.ru/images/og/yuridicheskij-audit-biznesa-og.jpg'],
  },
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/yuridicheskoe-soprovozhdenie-biznesa/yuridicheskij-audit-biznesa/',
  },
};

export default function YuridicheskijAuditPage() {
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
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/biznesu/yuridicheskoe-soprovozhdenie-biznesa/yuridicheskij-audit-biznesa/#breadcrumbs',
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
            'name': 'Юридическое сопровождение бизнеса',
            'item': 'https://dejure-help.ru/biznesu/yuridicheskoe-soprovozhdenie-biznesa/'
          },
          {
            '@type': 'ListItem',
            'position': 4,
            'name': 'Юридический аудит бизнеса',
            'item': 'https://dejure-help.ru/biznesu/yuridicheskoe-soprovozhdenie-biznesa/yuridicheskij-audit-biznesa/'
          }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/yuridicheskoe-soprovozhdenie-biznesa/yuridicheskij-audit-biznesa/#service',
        'name': 'Юридический аудит бизнеса в Липецке',
        'description':
          'Проверим документы и процессы компании, выявим правовые риски и подготовим письменный отчёт с приоритетным планом их устранения.',
        'url': 'https://dejure-help.ru/biznesu/yuridicheskoe-soprovozhdenie-biznesa/yuridicheskij-audit-biznesa/',
        'provider': {
          '@id': 'https://dejure-help.ru/#organization'
        },
        'areaServed': {
          '@type': 'AdministrativeArea',
          'name': 'Липецк и Липецкая область'
        }
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/biznesu/yuridicheskoe-soprovozhdenie-biznesa/yuridicheskij-audit-biznesa/#faq',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Что такое юридический аудит бизнеса?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Это согласованная проверка правовой стороны документов и процессов компании. Юристы фиксируют периметр, анализируют материалы, классифицируют выявленные риски и готовят письменные выводы и рекомендации.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Чем юридический аудит отличается от проверки договора?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Проверка договора касается конкретного документа и сделки. Аудит оценивает систему или несколько процессов: кто принимает решения, как оформляются документы, где повторяются пробелы и какие риски связаны между собой.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Обязательно ли проверять всю компанию?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Нет. Можно выбрать один или несколько модулей: корпоративный, договорный, трудовой, претензионно-судебный и другие. Периметр определяется целью и фиксируется до начала.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Юридический аудит — это обязательный бухгалтерский аудит?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Нет. Де-Юре проверяет правовые риски в согласованном объёме и не выдаёт аудиторское заключение о бухгалтерской отчётности. Если нужен обязательный, бухгалтерский или иной специализированный аудит, требуется соответствующий исполнитель.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Какие документы нужны?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Список зависит от модулей. Для первого обсуждения достаточно описать структуру бизнеса, цель, известные проблемы и категории документов. После этого формируется точный запрос, чтобы не собирать лишний архив.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Можно ли провести аудит, если часть документов отсутствует?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Можно оценить доступный периметр, но отсутствие материалов ограничит выводы. В отчёте должно быть отдельно указано, какие документы не получены и какие вопросы из-за этого нельзя проверить.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Сколько длится аудит?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Срок зависит от количества компаний и модулей, периода, объёма документов, интервью и качества систематизации материалов. Его можно определить после согласования периметра.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Исправление нарушений входит в стоимость?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Не автоматически. Аудит выявляет и описывает риски. Подготовка новых документов, сопровождение изменений, споров или специальных процедур оценивается отдельно, если иное не закреплено в договоре.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Гарантирует ли аудит отсутствие претензий и штрафов?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Нет. Проверка снижает неопределённость в согласованном периметре, но не может гарантировать отсутствие будущих событий, скрытых фактов или иной оценки со стороны суда и государственных органов.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Можно ли после аудита перейти на постоянное сопровождение?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Да. Отчёт и карта приоритетов могут стать основой для плана исправлений и дальнейшей регулярной юридической поддержки. Формат и объём сопровождения согласуются отдельно.'
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
      <YuridicheskijAuditClient />
    </>
  );
}
