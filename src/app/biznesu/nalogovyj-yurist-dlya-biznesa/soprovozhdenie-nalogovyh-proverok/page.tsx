import { Metadata } from 'next';
import SoprovozhdenieProverokClient from './SoprovozhdenieProverokClient';

export const metadata: Metadata = {
  title: 'Сопровождение налоговых проверок в Липецке — юрист | Де-Юре',
  description: 'Сопровождение камеральных и выездных налоговых проверок в Липецке: анализ требований ФНС, подготовка ответов и возражений, участие при рассмотрении материалов. 📞 +7 (4742) 20-15-25.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Сопровождение налоговых проверок в Липецке — юрист | Де-Юре',
    description: 'Сопровождение камеральных и выездных налоговых проверок в Липецке: анализ требований ФНС, подготовка ответов и возражений, участие при рассмотрении материалов. 📞 +7 (4742) 20-15-25.',
    url: 'https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/soprovozhdenie-nalogovyh-proverok/',
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/soprovozhdenie-nalogovyh-proverok-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Сопровождение налоговых проверок в Липецке',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Сопровождение налоговых проверок в Липецке — юрист | Де-Юре',
    description: 'Сопровождение камеральных и выездных налоговых проверок в Липецке: анализ требований ФНС, подготовка ответов и возражений, участие при рассмотрении материалов. 📞 +7 (4742) 20-15-25.',
    images: ['https://dejure-help.ru/images/og/soprovozhdenie-nalogovyh-proverok-og.jpg'],
  },
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/soprovozhdenie-nalogovyh-proverok/',
  },
};

export default function SoprovozhdenieProverokPage() {
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
        '@id': 'https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/soprovozhdenie-nalogovyh-proverok/#breadcrumbs',
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
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Сопровождение налоговых проверок',
            item: 'https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/soprovozhdenie-nalogovyh-proverok/'
          }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/soprovozhdenie-nalogovyh-proverok/#service',
        name: 'Сопровождение налоговых проверок в Липецке',
        description: 'Сопровождение камеральных и выездных налоговых проверок в Липецке: анализ требований ФНС, подготовка ответов и возражений, участие при рассмотрении материалов. 📞 +7 (4742) 20-15-25.',
        url: 'https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/soprovozhdenie-nalogovyh-proverok/',
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
            "@id": "https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/soprovozhdenie-nalogovyh-proverok/#faq",
            "mainEntity": [
                  {
                        "@type": "Question",
                        "name": "Обязана ли компания предоставлять документы вне рамок налоговой проверки?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "По ст. 93.1 НК РФ налоговый орган вправе истребовать документы (информацию) относительно конкретной сделки вне рамок налоговых проверок. Однако требование должно содержать четкие реквизиты сделки и контрагента. Запросы общего характера без указания сделки являются неправомерными, и на них можно дать мотивированный отказ."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Может ли юрист или адвокат присутствовать при допросе свидетеля в ФНС?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Да. В силу ч. 1 ст. 48 Конституции РФ и позиции ФНС РФ свидетель при допросе в налоговом органе имеет безусловное право пользоваться юридической помощью адвоката или квалифицированного юриста, который вправе делать замечания и вносить записи в протокол."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Какой срок дается на подачу возражений на акт налоговой проверки?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "В соответствии с п. 6 ст. 100 НК РФ налогоплательщик вправе подать письменные возражения на акт налоговой проверки в течение одного месяца со дня получения акта. Этот срок не подлежит продлению, поэтому начинать работу над возражениями необходимо немедленно."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Что делать, если инспекторы требуют оригиналы первичных документов?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "По закону (ст. 93 НК РФ) документы представляются в налоговый орган в виде заверенных копий. Подлинники документов проверяющие вправе лишь осматривать на территории налогоплательщика. Изъятие оригиналов допустимо исключительно в рамках процедуры выемки по ст. 94 НК РФ."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Как выездная проверка связана со статьей 199 УК РФ?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Если сумма недоимки по акту проверки превышает крупный размер (от 18,75 млн ₽ за 3 финансовых года), а неуплата носит умышленный характер, материалы после вступления решения в силу передаются в Следственный комитет. Поэтому позиция на стадии проверки должна учитывать риски уголовного обвинения."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Можно ли оспорить акт проверки сразу в суде?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Нет. Акт проверки не является ненормативным правовым актом и не порождает обязанностей по уплате. На акт подаются возражения в инспекцию, которая затем выносит решение. И только итоговое решение после обжалования в УФНС может быть обжаловано в арбитражном суде."
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
      <SoprovozhdenieProverokClient />
    </>
  );
}
