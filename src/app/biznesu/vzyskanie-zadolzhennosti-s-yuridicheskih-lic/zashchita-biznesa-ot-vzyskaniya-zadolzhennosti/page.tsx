import { Metadata } from 'next';
import ZashchitaClient from './ZashchitaClient';

export const metadata: Metadata = {
  title: 'Защита бизнеса от взыскания задолженности в Липецке | Де-Юре',
  description: 'Проверим требования кредитора, расчёт долга и доказательства, подготовим ответ на претензию или отзыв на иск, представим интересы бизнеса в суде.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Защита бизнеса от взыскания задолженности в Липецке | Де-Юре',
    description: 'Проверим требования кредитора, расчёт долга и доказательства, подготовим ответ на претензию или отзыв на иск, представим интересы бизнеса в суде.',
    url: 'https://dejure-help.ru/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/zashchita-biznesa-ot-vzyskaniya-zadolzhennosti/',
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/zashchita-biznesa-ot-vzyskaniya-zadolzhennosti-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Защита бизнеса от взыскания задолженности в Липецке',
      },
    ],
  },
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/zashchita-biznesa-ot-vzyskaniya-zadolzhennosti/',
  },
};

export default function ZashchitaPage() {
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
        },
        'employee': {
          '@id': 'https://dejure-help.ru/specialisty/nacheshnikov-vladimir-viktorovich/#person'
        }
      },
      {
        '@id': 'https://dejure-help.ru/specialisty/nacheshnikov-vladimir-viktorovich/#person',
        '@type': 'Person',
        'name': 'Владимир Викторович Начешников',
        'url': 'https://dejure-help.ru/specialisty/nacheshnikov-vladimir-viktorovich/',
        'jobTitle': 'Куратор направления взыскания задолженности с юридических лиц',
        'worksFor': {
          '@id': 'https://dejure-help.ru/#organization'
        }
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/zashchita-biznesa-ot-vzyskaniya-zadolzhennosti/#service',
        'name': 'Защита бизнеса от взыскания задолженности в Липецке',
        'url': 'https://dejure-help.ru/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/zashchita-biznesa-ot-vzyskaniya-zadolzhennosti/',
        'serviceType': 'Юридическая защита ответчиков и должников в арбитражных спорах',
        'description': 'Правовой анализ требований кредитора, подготовка возражений на иск, снижение неустойки по ст. 333 ГК РФ, отмена обеспечительных мер, согласование мирового соглашения и рассрочки.',
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
        '@id': 'https://dejure-help.ru/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/zashchita-biznesa-ot-vzyskaniya-zadolzhennosti/#breadcrumbs',
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
            'name': 'Взыскание задолженности с юридических лиц',
            'item': 'https://dejure-help.ru/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/'
          },
          {
            '@type': 'ListItem',
            'position': 4,
            'name': 'Защита бизнеса',
            'item': 'https://dejure-help.ru/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/zashchita-biznesa-ot-vzyskaniya-zadolzhennosti/'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/zashchita-biznesa-ot-vzyskaniya-zadolzhennosti/#faq',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Нужно ли отвечать на претензию контрагента?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Ответ не всегда является формальной обязанностью, но его отсутствие лишает компанию возможности зафиксировать возражения по объёму и качеству, исключить необоснованные штрафы и урегулировать спор до суда.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Можно ли не платить, если акт приёмки не подписан?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Отсутствие подписи само по себе не всегда исключает долг. Суд оценивает договор, фактическое пользование, переписку, мотивированность отказа от приёмки и встречные доказательства.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Как уменьшить неустойку и штрафы по ст. 333 ГК РФ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Для предпринимателя суд рассматривает уменьшение явно несоразмерной неустойки исключительно по мотивированному заявлению должника. Необходимы контррасчёт и доказательства явной несоразмерности.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Что делать, если срок на отзыв почти истёк?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Нужно немедленно проверить карточку дела в арбитраже, подготовить предварительный отзыв и ходатайство об ознакомлении с материалами дела для предотвращения вынесения решения в пользу истца.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Когда целесообразно подавать встречный иск?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Когда у компании есть самостоятельное требование к истцу (брак товара, срыв сроков, переплата, неустойка), удовлетворение которого полностью или частично исключает требования первоначального иска.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Можно ли снять арест с расчётного счёта компании?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Нужно установить источник ограничения. Если это обеспечительная мера суда, подаётся ходатайство об отмене или замене мер. Если исполнительный лист уже находится в банке или в ФССП, задача передаётся в направление «Исполнительное производство для бизнеса».'
            }
          },
          {
            '@type': 'Question',
            'name': 'Если долг реальный, чем поможет юрист?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Проверит правильность расчёта, исключит неправомерные штрафы и двойную ответственность, согласует график выплат в мировом соглашении и поможет избежать блокировки счетов компании.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Можно ли получить судебную рассрочку исполнения решения?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Да. Подаётся заявление по ст. 324 АПК РФ с подтверждением обстоятельств, затрудняющих единовременное исполнение, и экономически обоснованного графика платежей.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Защищаете ли вы компанию при угрозе банкротства?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Да, но это самостоятельный банкротный проект. Если кредитор намерен инициировать банкротство или финансовое состояние компании указывает на неплатёжеспособность, оцениваем риски и передаём задачу в направление «Банкротство бизнеса».'
            }
          },
          {
            '@type': 'Question',
            'name': 'Можно ли работать дистанционно?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Да, если характер и стадия дела позволяют. Анализ документов, подготовку позиции и значительную часть коммуникации можно организовать дистанционно. Возможность онлайн-участия в заседаниях зависит от суда и обстоятельств дела.'
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
      <ZashchitaClient />
    </>
  );
}
