import { Metadata } from 'next';
import NalogovyjYuristClient from './NalogovyjYuristClient';

export const metadata: Metadata = {
  title: 'Налоговый юрист для бизнеса в Липецке — проверки и споры с ФНС | Де-Юре',
  description: 'Сопровождение налоговых проверок, возражения на акт, обжалование доначислений и решений ФНС, защита при обвинении в дроблении бизнеса. 📞 +7 (4742) 20-15-25.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Налоговый юрист для бизнеса в Липецке — проверки и споры с ФНС | Де-Юре',
    description: 'Сопровождение налоговых проверок, возражения на акт, обжалование доначислений и решений ФНС, защита при обвинении в дроблении бизнеса. 📞 +7 (4742) 20-15-25.',
    url: 'https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/',
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/nalogovyj-yurist-dlya-biznesa-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Налоговый юрист для бизнеса в Липецке',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Налоговый юрист для бизнеса в Липецке — проверки и споры с ФНС | Де-Юре',
    description: 'Сопровождение налоговых проверок, возражения на акт, обжалование доначислений и решений ФНС, защита при обвинении в дроблении бизнеса. 📞 +7 (4742) 20-15-25.',
    images: ['https://dejure-help.ru/images/og/nalogovyj-yurist-dlya-biznesa-og.jpg'],
  },
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/',
  },
};

export default function NalogovyjYuristPage() {
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
        },
        employee: {
          '@id': 'https://dejure-help.ru/specialisty/bobkin-arkadiy-evgenevich/#person'
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/#breadcrumbs',
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
            name: 'Налоговый юрист для бизнеса',
            item: 'https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/'
          }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/#service',
        name: 'Налоговый юрист для бизнеса в Липецке',
        description: 'Сопровождение налоговых проверок, возражения на акт, обжалование доначислений и решений ФНС, защита при обвинении в дроблении бизнеса. 📞 +7 (4742) 20-15-25.',
        url: 'https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/',
        provider: {
          '@id': 'https://dejure-help.ru/#organization'
        },
        areaServed: {
          '@type': 'AdministrativeArea',
          name: 'Липецк и Липецкая область'
        }
      },
      {
            "@type": "FAQPage",
            "@id": "https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/#faq",
            "mainEntity": [
                  {
                        "@type": "Question",
                        "name": "На какой стадии лучше подключить налогового юриста?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Оптимально — сразу после получения первого требования о предоставлении документов или вызова на допрос. Это позволяет сформировать непротиворечивую позицию компании до того, как сотрудники дадут некорректные пояснения инспекторам."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Какие документы нужны для первичной консультации?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Достаточно документов, которые уже получены от налогового органа: требование, уведомление о вызове, акт выездной/камеральной проверки или итоговое решение. Направлять весь бухгалтерский архив заранее не требуется."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Можно ли оспорить решение ФНС сразу в арбитражном суде?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "По общему правилу п. 2 ст. 138 Налогового кодекса РФ решения налоговых органов по результатам проверок подлежат обязательному досудебному обжалованию в вышестоящем налоговом органе (УФНС). Обращение в суд возможно только после рассмотрения жалобы Управлением."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Что делать, если компанию обвиняют в дроблении бизнеса?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Необходимо доказать самостоятельность каждого субъекта группы: наличие собственного штата, оборудования, помещений, раздельных контрактов и реальной деловой цели создания каждой структуры (например, разные рынки сбыта или лицензируемые виды деятельности)."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Всегда ли налоговая проверка влечет уголовную ответственность?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Нет. Уголовная ответственность по ст. 199 УК РФ наступает только при наличии доказанного прямого умысла руководства на уклонение от налогообложения и сумме неуплаченных налогов от 18,75 млн ₽ за 3 года. Доказывание отсутствия умысла — ключевая задача юриста."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Можно ли приостановить списание денег со счетов на время судебного спора?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Да. Юристы подготовят ходатайство об обеспечительных мерах и будут добиваться приостановления действия решения ФНС и списания денег со счетов. Решение принимает суд, поэтому само обращение в арбитражный суд взыскание автоматически не останавливает."
                        }
                  }
            ]
      },
      {
        "@type": "Person",
        "@id": "https://dejure-help.ru/specialisty/bobkin-arkadiy-evgenevich/#person",
        "name": "Аркадий Евгеньевич Бобкин",
        "url": "https://dejure-help.ru/specialisty/bobkin-arkadiy-evgenevich/",
        "jobTitle": "Директор, управляющий партнёр ЮК «Де-Юре»",
        "worksFor": {
                "@id": "https://dejure-help.ru/#organization"
        }
}
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NalogovyjYuristClient />
    </>
  );
}
