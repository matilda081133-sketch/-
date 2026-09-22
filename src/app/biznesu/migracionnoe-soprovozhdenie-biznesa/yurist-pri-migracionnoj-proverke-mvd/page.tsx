import { Metadata } from 'next';
import YuristPriProverkeMvdClient from './YuristPriProverkeMvdClient';

export const metadata: Metadata = {
  title: 'Юрист при миграционной проверке МВД в Липецке | Де-Юре',
  description: 'Юрист при миграционной проверке МВД в Липецке: анализ требований, подготовка документов и пояснений, сопровождение проверки работодателя. 📞 +7 (4742) 20-15-25.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Юрист при миграционной проверке МВД в Липецке | Де-Юре',
    description: 'Юрист при миграционной проверке МВД в Липецке: анализ требований, подготовка документов и пояснений, сопровождение проверки работодателя. 📞 +7 (4742) 20-15-25.',
    url: 'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/yurist-pri-migracionnoj-proverke-mvd/',
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/migracionnyj-yurist.jpg',
        width: 1200,
        height: 630,
        alt: 'Юрист при миграционной проверке МВД в Липецке',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Юрист при миграционной проверке МВД в Липецке | Де-Юре',
    description: 'Юрист при миграционной проверке МВД в Липецке: анализ требований, подготовка документов и пояснений, сопровождение проверки работодателя. 📞 +7 (4742) 20-15-25.',
    images: ['https://dejure-help.ru/images/og/migracionnyj-yurist.jpg'],
  },
  alternates: {
    canonical:
      'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/yurist-pri-migracionnoj-proverke-mvd/',
  },
};

export default function YuristPriProverkeMvdPage() {
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
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/yurist-pri-migracionnoj-proverke-mvd/#breadcrumbs',
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
            name: 'Миграционное сопровождение бизнеса',
            item: 'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/'
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Юрист при миграционной проверке МВД',
            item: 'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/yurist-pri-migracionnoj-proverke-mvd/'
          }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/yurist-pri-migracionnoj-proverke-mvd/#service',
        name: 'Юрист при миграционной проверке МВД в Липецке',
        description: 'Юрист при миграционной проверке МВД в Липецке: анализ требований, подготовка документов и пояснений, сопровождение проверки работодателя. 📞 +7 (4742) 20-15-25.',
        url: 'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/yurist-pri-migracionnoj-proverke-mvd/',
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
            "@id": "https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/yurist-pri-migracionnoj-proverke-mvd/#faq",
            "mainEntity": [
                  {
                        "@type": "Question",
                        "name": "Что делать в первую очередь, если сотрудники МВД уже прибыли на объект?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Немедленно свяжитесь с юристом. Попросите проверяющих предъявить служебные удостоверения и распоряжение о проверке, перепишите их данные. Назначьте одного представителя компании и попросите сотрудников не давать комментариев до согласования позиции."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Имеют ли право сотрудники МВД проверять документы у всех работников?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "В рамках проведения контрольно-надзорных мероприятий сотрудники вправе проверять документы, удостоверяющие личность и подтверждающие право на пребывание и осуществление трудовой деятельности. При этом действия проверяющих должны строго соответствовать распоряжению о проверке."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Обязана ли компания отдавать оригиналы трудовых договоров и личных дел?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "По общему правилу проверка проводится по заверенным копиям. Изъятие оригиналов допускается только в исключительных случаях с обязательным составлением протокола изъятия в присутствии понятых (или с видеозаписью) и вручением копии протокола работодателю."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Может ли юрист или адвокат присутствовать при проверке и опросе?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Да. В соответствии с законодательством РФ юридическое лицо и граждане имеют право на получение квалифицированной юридической помощи. Защитник вправе присутствовать при проведении проверочных мероприятий и фиксации объяснений."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Как правильно вести себя работникам при отборе объяснений?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Работникам следует отвечать правдиво только на те вопросы, которые относятся к их непосредственным обязанностям и известным им фактам. Не следует подписывать пустые бланки или протоколы с формулировками, которые они не говорили."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Можно ли вести видеозапись действий сотрудников полиции на объекте?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Да, деятельность полиции является открытой для общества в той мере, в какой это не противоречит требованиям закона. Видеосъёмка действий проверяющих на производственной площадке дисциплинирует стороны и фиксирует возможные нарушения."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Что делать, если срок для ответа на запрос МВД составляет всего 1-2 дня?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Необходимо немедленно подать мотивированное ходатайство о продлении срока предоставления документов в связи со значительным объёмом и необходимостью архивного подбора, одновременно предоставив имеющуюся часть документов."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Стоит ли отвечать на устные телефонные звонки из миграционной службы?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Любое взаимодействие с государственными органами желательно переводить в письменную форму. Попросите направить официальный письменный запрос или повестку с указанием процессуального основания вызова."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Что делать, если проверяющие выявили факт работы иностранца без патента?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Не пытайтесь фальсифицировать документы задним числом. Необходимо установить, кем фактически был допущен сотрудник (возможно, подрядчиком), зафиксировать реальные обстоятельства и готовить позицию защиты по субъекту правонарушения."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Чем сопровождение проверки отличается от защиты по ст. 18.15 КоАП РФ?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Сопровождение проверки направлено на то, чтобы предотвратить нарушения при проверке и не допустить составления протокола. Защита по ст. 18.15 начинается, когда протокол уже составлен и дело направлено на рассмотрение или в суд."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Как быстро юрист может подключиться к ситуации в Липецке?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "По телефону и мессенджерам консультация и правовой анализ документов начинаются немедленно. При необходимости очного участия выезд на объект в черте Липецка осуществляется в течение 40–60 минут."
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
      <YuristPriProverkeMvdClient />
    </>
  );
}
