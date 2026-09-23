import { Metadata } from 'next';
import MigracionnoeSoprovozhdenieClient from './MigracionnoeSoprovozhdenieClient';

export const metadata: Metadata = {
  title: 'Миграционное сопровождение бизнеса в Липецке | Де-Юре',
  description: 'Миграционное сопровождение бизнеса в Липецке: оформление иностранных работников, аудит, помощь при проверках МВД и защита по ст. 18.15 КоАП РФ. 📞 +7 (4742) 20-15-25.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Миграционное сопровождение бизнеса в Липецке | Де-Юре',
    description: 'Миграционное сопровождение бизнеса в Липецке: оформление иностранных работников, аудит, помощь при проверках МВД и защита по ст. 18.15 КоАП РФ. 📞 +7 (4742) 20-15-25.',
    url: 'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/',
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/migracionnyj-yurist.jpg',
        width: 1200,
        height: 630,
        alt: 'Миграционное сопровождение бизнеса в Липецке',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Миграционное сопровождение бизнеса в Липецке | Де-Юре',
    description: 'Миграционное сопровождение бизнеса в Липецке: оформление иностранных работников, аудит, помощь при проверках МВД и защита по ст. 18.15 КоАП РФ. 📞 +7 (4742) 20-15-25.',
    images: ['https://dejure-help.ru/images/og/migracionnyj-yurist.jpg'],
  },
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/',
  },
};

export default function MigracionnoeSoprovozhdeniePage() {
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
        '@id': 'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/#breadcrumbs',
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
          }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/#service',
        name: 'Миграционное сопровождение бизнеса в Липецке',
        description: 'Миграционное сопровождение бизнеса в Липецке: оформление иностранных работников, аудит, помощь при проверках МВД и защита по ст. 18.15 КоАП РФ. 📞 +7 (4742) 20-15-25.',
        url: 'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/',
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
            "@id": "https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/#faq",
            "mainEntity": [
                  {
                        "@type": "Question",
                        "name": "Кому подходит миграционное сопровождение бизнеса?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Компаниям и индивидуальным предпринимателям, которые планируют принять иностранного работника, уже используют труд иностранных сотрудников либо столкнулись с запросом, проверкой или административным делом МВД."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "С работниками из каких стран вы помогаете работодателям?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Порядок зависит не только от гражданства, но и от статуса человека в России (ЕАЭС, безвизовый порядок по патенту, РВП, ВНЖ). На консультации проверим имеющиеся документы и определим допустимый формат помощи. Получение квот, приглашений, рабочих виз и разрешений для привлечения работников из визовых стран мы не сопровождаем."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Вы получаете или переоформляете патенты?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Нет. Мы не получаем и не переоформляем патенты для физических лиц. При юридическом оформлении работника работодателем мы проверяем уже имеющийся патент, подтверждения авансовых платежей НДФЛ, сроки действия и соответствие планируемой работы указанным условиям."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Можно ли проверить документы иностранца до заключения договора?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Да. Проверим представленные документы и статус, сопоставим их с предполагаемой должностью, местом и условиями работы и обозначим правовые риски до фактического допуска сотрудника к работе."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Вы помогаете с уведомлениями МВД о заключении или расторжении договора?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Да, в рамках юридического оформления иностранного работника мы готовим или проверяем уведомление и порядок его подачи. Напоминаем: срок подачи уведомления в территориальный орган МВД строго ограничен тремя рабочими днями."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Когда компании необходим миграционный аудит?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Если иностранные работники уже оформлены, документы ведут разные сотрудники, менялись ответственные лица или есть сомнения в полноте уведомлений и контроле сроков. Аудит позволяет выявить нарушения до того, как их обнаружит проверяющий орган."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Что делать, если МВД уже запросило документы или пришло на объект?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Не препятствуйте законным действиям и не подписывайте документы без прочтения. Зафиксируйте сведения о проверяющих, основание и предмет мероприятий, назначьте одного контактного представителя и как можно быстрее передайте юристу требование, акт и имеющиеся материалы."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Чем сопровождение проверки отличается от защиты по статье 18.15 КоАП РФ?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Сопровождение проверки начинается на стадии запроса, осмотра или сбора документов инспекторами. Защита по статье 18.15 КоАП РФ требуется, когда уже составляется протокол, рассматривается административное дело либо вынесено постановление о штрафе."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Можно ли отменить или снизить штраф по ст. 18.15 КоАП РФ?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Это зависит от состава нарушения, доказательств, соблюдения процедуры проверки, статуса работодателя и стадии дела. После изучения материалов определим основания для прекращения дела, изменения квалификации, назначения предупреждения или снижения штрафа ниже низшего предела."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Можно ли начать работу дистанционно?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Да. Обсудить задачу, направить документы и согласовать первичные действия можно дистанционно. Необходимость очного участия зависит от стадии проверки или дела и места проведения процессуальных действий."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "От чего зависит стоимость услуг?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "От количества иностранных работников, их правового статуса, объёма документов, срочности, стадии проверки или судебного дела и необходимого объёма представительства. Состав работ и цена фиксируются в договоре до начала работы."
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
      <MigracionnoeSoprovozhdenieClient />
    </>
  );
}
