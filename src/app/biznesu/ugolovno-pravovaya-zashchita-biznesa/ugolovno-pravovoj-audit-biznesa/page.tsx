import { Metadata } from 'next';
import UgolovnoPravovojAuditClient from './UgolovnoPravovojAuditClient';

export const metadata: Metadata = {
  title: 'Уголовно-правовой аудит бизнеса в Липецке | Де-Юре',
  description:
    'Превентивный аудит уголовных рисков компании: анализ договоров, сделок, налоговых схем и управленческих решений. Липецк и Липецкая область.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Уголовно-правовой аудит бизнеса в Липецке | Де-Юре',
    description:
      'Анализируем риски сделок, договоров и решений руководства до того, как они привлекут внимание силовых структур.',
    url: 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/ugolovno-pravovoj-audit-biznesa/',
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/ugolovno-pravovoj-audit-biznesa-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Уголовно-правовой аудит бизнеса в Липецке',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Уголовно-правовой аудит бизнеса в Липецке | Де-Юре',
    description:
      'Превентивный аудит уголовных рисков компании: анализ договоров, сделок, налоговых схем и управленческих решений. Липецк и Липецкая область.',
    images: ['https://dejure-help.ru/images/og/ugolovno-pravovoj-audit-biznesa-og.jpg'],
  },
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/ugolovno-pravovoj-audit-biznesa/',
  },
};

export default function UgolovnoPravovojAuditPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LegalService',
        '@id': 'https://dejure-help.ru/#organization',
        name: 'Юридическая компания «Де-Юре»',
        url: 'https://dejure-help.ru/',
        telephone: '+7 (4742) 20-15-25',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'ул. Советская, д. 35, оф. 213',
          addressLocality: 'Липецк',
          addressRegion: 'Липецкая область',
          addressCountry: 'RU'
        }
      },
      {
        '@type': 'Person',
        '@id': 'https://dejure-help.ru/specialisty/bobkin-arkadiy-evgenevich/#person',
        name: 'Аркадий Евгеньевич Бобкин',
        jobTitle: 'Директор, управляющий партнёр',
        url: 'https://dejure-help.ru/specialisty/bobkin-arkadiy-evgenevich/',
        worksFor: {
          '@id': 'https://dejure-help.ru/#organization'
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/ugolovno-pravovoj-audit-biznesa/#breadcrumbs',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Главная',
            item: 'https://dejure-help.ru/'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Бизнесу',
            item: 'https://dejure-help.ru/biznesu/'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Уголовно-правовая защита бизнеса',
            item: 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/'
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Уголовно-правовой аудит бизнеса',
            item: 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/ugolovno-pravovoj-audit-biznesa/'
          }
        ]
      },
      {
        '@type': 'WebPage',
        '@id': 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/ugolovno-pravovoj-audit-biznesa/#webpage',
        name: 'Уголовно-правовой аудит бизнеса в Липецке | Де-Юре',
        description: 'Превентивный аудит уголовных рисков компании: анализ договоров, сделок, налоговых схем и управленческих решений. Липецк и Липецкая область.',
        url: 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/ugolovno-pravovoj-audit-biznesa/',
        about: {
          '@id': 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/ugolovno-pravovoj-audit-biznesa/#service'
        }
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/ugolovno-pravovoj-audit-biznesa/#service',
        name: 'Уголовно-правовой аудит бизнеса в Липецке',
        description:
          'Превентивный аудит уголовных рисков компании: анализ договоров, сделок, налоговых схем и управленческих решений. Липецк и Липецкая область.',
        url: 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/ugolovno-pravovoj-audit-biznesa/',
        provider: {
          '@id': 'https://dejure-help.ru/#organization'
        },
        areaServed: {
          '@type': 'AdministrativeArea',
          name: 'Липецк и Липецкая область'
        }
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/ugolovno-pravovoj-audit-biznesa/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Чем уголовно-правовой аудит отличается от обычного бухгалтерского или налогового аудита?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Бухгалтерский аудит проверяет правильность проводок и баланса, налоговый — правильность исчисления налогов. Уголовно-правовой аудит оценивает действия руководства глазами следователя: есть ли в сделках признаки обмана, злоупотребления, растраты или сговора, которые могут стать основанием для уголовного дела.'
            }
          },
          {
            '@type': 'Question',
            name: 'Гарантирует ли аудит, что компанию никогда не проверит ОБЭП или СК?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Нет. Аудит не исключает проверку, претензии правоохранительных органов или возбуждение уголовного дела. Его результат — перечень выявленных обстоятельств, оценка рисков и рекомендации по законным изменениям в документах и процессах компании.'
            }
          },
          {
            '@type': 'Question',
            name: 'Узнают ли сотрудники о проведении аудита?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Формат проверки определяется собственником. Аудит может проводиться полностью конфиденциально на основе удалённой выгрузки документов без уведомления рядового персонала компании.'
            }
          },
          {
            '@type': 'Question',
            name: 'Что делать, если в ходе аудита будут обнаружены критические риски?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'По результатам аудита формируется план законного снижения рисков: корректировка процессов на будущее, устранение выявленных несоответствий допустимыми способами, уточнение бухгалтерского и налогового учёта в установленном порядке, сохранение доказательств и подготовка позиции на случай претензий. Аудит не предполагает сокрытия, уничтожения или оформления документов задним числом.'
            }
          },
          {
            '@type': 'Question',
            name: 'Как обеспечивается тайна полученных вами сведений?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'До передачи первых документов подписывается двустороннее соглашение о конфиденциальности с фиксацией штрафных санкций. Информация передаётся по зашифрованным каналам связи.'
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
      <UgolovnoPravovojAuditClient />
    </>
  );
}
