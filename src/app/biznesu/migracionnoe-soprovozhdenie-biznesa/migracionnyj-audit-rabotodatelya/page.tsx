import { Metadata } from 'next';
import MigracionnyjAuditClient from './MigracionnyjAuditClient';

export const metadata: Metadata = {
  title: 'Миграционный аудит работодателя в Липецке | Де-Юре',
  description: 'Миграционный аудит работодателя в Липецке: проверка иностранных работников, договоров, уведомлений МВД, сроков и внутренних процессов компании. 📞 +7 (4742) 20-15-25.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Миграционный аудит работодателя в Липецке | Де-Юре',
    description: 'Миграционный аудит работодателя в Липецке: проверка иностранных работников, договоров, уведомлений МВД, сроков и внутренних процессов компании. 📞 +7 (4742) 20-15-25.',
    url: 'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/migracionnyj-audit-rabotodatelya/',
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/migracionnyj-yurist.jpg',
        width: 1200,
        height: 630,
        alt: 'Миграционный аудит работодателя в Липецке',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Миграционный аудит работодателя в Липецке | Де-Юре',
    description: 'Миграционный аудит работодателя в Липецке: проверка иностранных работников, договоров, уведомлений МВД, сроков и внутренних процессов компании. 📞 +7 (4742) 20-15-25.',
    images: ['https://dejure-help.ru/images/og/migracionnyj-yurist.jpg'],
  },
  alternates: {
    canonical:
      'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/migracionnyj-audit-rabotodatelya/',
  },
};

export default function MigracionnyjAuditPage() {
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
        '@id': 'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/migracionnyj-audit-rabotodatelya/#breadcrumbs',
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
            name: 'Миграционный аудит работодателя',
            item: 'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/migracionnyj-audit-rabotodatelya/'
          }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/migracionnyj-audit-rabotodatelya/#service',
        name: 'Миграционный аудит работодателя в Липецке',
        description: 'Миграционный аудит работодателя в Липецке: проверка иностранных работников, договоров, уведомлений МВД, сроков и внутренних процессов компании. 📞 +7 (4742) 20-15-25.',
        url: 'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/migracionnyj-audit-rabotodatelya/',
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
            "@id": "https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/migracionnyj-audit-rabotodatelya/#faq",
            "mainEntity": [
                  {
                        "@type": "Question",
                        "name": "Что входит в миграционный аудит работодателя?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Проверка действующих иностранных сотрудников, их паспортов, патентов, чеков и миграционных карт; аудит трудовых договоров, уведомлений МВД и подтверждений подачи; оценка миграционного учета и внутренних регламентов допуска к работе."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Чем аудит отличается от услуги оформления работника?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Оформление решает задачу по одному конкретному кандидату при приеме или увольнении. Аудит проверяет всю систему компании: весь иностранный штат, архив за предыдущие периоды и предотвращает системные штрафы."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Когда компании необходимо проводить миграционный аудит?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "При росте иностранного штата, смене кадровика или бухгалтера, перед сделками купли-продажи бизнеса, перед проверками МВД, а также при наличии сомнений в актуальности чеков патентов и уведомлений."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Можно ли провести аудит дистанционно?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Да. Основная часть проверки проводится по электронным копиям документов через согласованный защищённый канал связи. Выезд на производственные площадки согласовывается при необходимости очной проверки фактического допуска."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Сколько времени занимает проведение миграционного аудита?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Срок зависит от численности иностранного штата и состояния архива: экспресс-аудит (до 5 человек) занимает 2-3 рабочих дня, комплексный аудит предприятия — от 5 до 10 рабочих дней."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Что делать, если в ходе аудита обнаружатся нарушения?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Юрист предложит законный план действий по минимизации последствий: корректировку кадровых документов, надлежащее оформление переводов, отстранение сотрудников с недействительными документами. Мы категорически не используем фальсификацию задним числом."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Гарантирует ли проведение аудита отсутствие штрафов?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Аудит позволяет выявить и устранить управляемые риски компании до проверки контролирующими органами. Если нарушение уже совершено и зафиксировано МВД, требуется процессуальная защита в рамках административного дела."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Проверяются ли иностранные работники субподрядчиков?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Да. Мы анализируем договоры подряда, акты допуска на объект и пропускной режим, чтобы защитить компанию-заказчика от перекладывания ответственности за нелегальных рабочих подрядчика."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Проверяются ли работники по реестру контролируемых лиц МВД?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Да. В рамках аудита мы проверяем статус сотрудников и выстраиваем внутренний регламент регулярной сверки со сведениями официальных баз миграционного учета МВД России."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Что получает работодатель по итогам аудита?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Руководитель получает структурированное юридическое заключение: сводную матрицу работников, карту рисков со ссылками на КоАП РФ, пошаговый план исправлений и комплект рабочих чек-листов для кадровика."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Что делать, если МВД уже пришло с проверкой во время аудита?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "В такой ситуации аудит немедленно переводится в формат экстренного сопровождения миграционной проверки МВД. Наш специалист подключается к защите интересов компании на объекте."
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
      <MigracionnyjAuditClient />
    </>
  );
}
