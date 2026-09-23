import { Metadata } from 'next';
import YuridicheskoeOformlenieClient from './YuridicheskoeOformlenieClient';

export const metadata: Metadata = {
  title: 'Оформление иностранных работников в Липецке | Де-Юре',
  description: 'Юридическое оформление иностранных работников в Липецке: проверка статуса и документов, договоры, уведомления МВД, приём и увольнение. 📞 +7 (4742) 20-15-25.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Оформление иностранных работников в Липецке | Де-Юре',
    description: 'Юридическое оформление иностранных работников в Липецке: проверка статуса и документов, договоры, уведомления МВД, приём и увольнение. 📞 +7 (4742) 20-15-25.',
    url: 'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/yuridicheskoe-oformlenie-inostrannyh-rabotnikov/',
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/migracionnyj-yurist.jpg',
        width: 1200,
        height: 630,
        alt: 'Юридическое оформление иностранных работников в Липецке',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Оформление иностранных работников в Липецке | Де-Юре',
    description: 'Юридическое оформление иностранных работников в Липецке: проверка статуса и документов, договоры, уведомления МВД, приём и увольнение. 📞 +7 (4742) 20-15-25.',
    images: ['https://dejure-help.ru/images/og/migracionnyj-yurist.jpg'],
  },
  alternates: {
    canonical:
      'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/yuridicheskoe-oformlenie-inostrannyh-rabotnikov/',
  },
};

export default function YuridicheskoeOformleniePage() {
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
          '@id': 'https://dejure-help.ru/specialisty/konopkin-dmitriy-sergeevich/#person'
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/yuridicheskoe-oformlenie-inostrannyh-rabotnikov/#breadcrumbs',
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
            name: 'Юридическое оформление иностранных работников',
            item: 'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/yuridicheskoe-oformlenie-inostrannyh-rabotnikov/'
          }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/yuridicheskoe-oformlenie-inostrannyh-rabotnikov/#service',
        name: 'Юридическое оформление иностранных работников в Липецке',
        description: 'Юридическое оформление иностранных работников в Липецке: проверка статуса и документов, договоры, уведомления МВД, приём и увольнение. 📞 +7 (4742) 20-15-25.',
        url: 'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/yuridicheskoe-oformlenie-inostrannyh-rabotnikov/',
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
            "@id": "https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/yuridicheskoe-oformlenie-inostrannyh-rabotnikov/#faq",
            "mainEntity": [
                  {
                        "@type": "Question",
                        "name": "Можно ли принять иностранца по обычному трудовому договору?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Трудовой договор с иностранным гражданином заключается с учётом общих норм ТК РФ и специальных положений главы 50.1 ТК РФ. В договоре обязательно указываются реквизиты патента, РВП, ВНЖ либо полиса ДМС (если применимо)."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "В какой срок нужно уведомить МВД о заключении или прекращении договора?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Работодатель или заказчик работ обязан уведомить территориальный орган МВД в субъекте РФ, где трудится иностранец, в срок, не превышающий 3 рабочих дней с даты заключения или прекращения соответствующего договора (п. 8 ст. 13 Федерального закона № 115-ФЗ)."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Нужно ли подавать уведомление в МВД при приёме гражданина страны ЕАЭС?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Да. Освобождение граждан государств ЕАЭС (Беларусь, Казахстан, Армения, Киргизия) от обязанности получать патент не освобождает работодателя от обязанности уведомить орган МВД о заключении или расторжении трудового договора в 3-дневный срок."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Вы помогаете получить или переоформить патент?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Нет. Мы не занимаемся оформлением, получением или переоформлением патентов для физических лиц. В рамках услуг работодателю мы проверяем подлинность, сроки действия, чеки и соответствие уже имеющегося у работника патента."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Оформляете ли вы работников из стран с визовым режимом?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Нет. Мы не сопровождаем оформление квот, приглашений на въезд, рабочих виз, разрешений на привлечение и использование иностранных работников и разрешений на работу для визовых стран."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Можно ли сначала допустить иностранца к работе, а оформить документы позже?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Категорически нет. Фактический допуск иностранного гражданина к выполнению работ без надлежащих документов образует состав административного правонарушения по ч. 1 ст. 18.15 КоАП РФ со штрафом для юрлиц от 250 000 до 800 000 ₽ либо приостановлением деятельности до 90 суток."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Защищает ли договор ГПХ от проверок миграционной службы?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Нет. Обязанность проверки права на работу и 3-дневного уведомления МВД распространяется как на трудовые договоры, так и на договоры ГПХ. Кроме того, притворное прикрытие трудовых отношений договором ГПХ создаёт дополнительные риски со стороны трудовой инспекции."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Что делать, если 3-дневный срок уведомления МВД уже пропущен?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Не направляйте документы хаотично задним числом. Необходимо срочно связаться с юристом для правового анализа ситуации, установления точной даты заключения договора и формирования защитной позиции до инициации проверки МВД."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Можно ли провести оформление документов дистанционно?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Да. Правовой анализ документов работника, составление трудового договора и заполнение форм уведомлений можно провести дистанционно по электронным копиям. Оригиналы подписываются сторонами на месте."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Как проверить, оплачен ли патент иностранного сотрудника?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Необходимо ежемесячно проверять квитанции об уплате налога на доходы физических лиц в виде фиксированного авансового платежа. Платёж должен быть внесён до дня истечения оплаченного периода, с корректными реквизитами и указанием ИНН работника."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Какие документы нужны для первичной проверки кандидата?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Паспорт кандидата, миграционная карта (при наличии), отрывной бланк уведомления о прибытии (миграционный учёт), патент с чеками оплаты (или РВП / ВНЖ), а также предполагаемая должность и адрес объекта работы в Липецкой области."
                        }
                  }
            ]
      },
      {
        "@type": "Person",
        "@id": "https://dejure-help.ru/specialisty/konopkin-dmitriy-sergeevich/#person",
        "name": "Дмитрий Сергеевич Конопкин",
        "url": "https://dejure-help.ru/specialisty/konopkin-dmitriy-sergeevich/",
        "jobTitle": "Адвокат, председатель Коллегии адвокатов «Де-Юре»"
}
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <YuridicheskoeOformlenieClient />
    </>
  );
}
