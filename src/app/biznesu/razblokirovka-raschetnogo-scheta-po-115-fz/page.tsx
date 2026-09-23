import { Metadata } from 'next';
import Razblokirovka115fzClient from './Razblokirovka115fzClient';

export const metadata: Metadata = {
  title: 'Разблокировка расчётного счёта по 115-ФЗ в Липецке | Де-Юре',
  description:
    'Юридическая помощь бизнесу при ограничениях по 115-ФЗ в Липецке: ответ банку, документы, обжалование отказа, МВК и суд. 📞 +7 (4742) 20-15-25.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Разблокировка расчётного счёта по 115-ФЗ в Липецке | Де-Юре',
    description: 'Юридическая помощь бизнесу при ограничениях по 115-ФЗ: ответ банку, документы, обжалование отказа, обращение в МВК и защита в суде. 📞 +7 (4742) 20-15-25.',
    url: 'https://dejure-help.ru/biznesu/razblokirovka-raschetnogo-scheta-po-115-fz/',
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/razblokirovka-raschetnogo-scheta-po-115-fz-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Разблокировка расчётного счёта по 115-ФЗ в Липецке',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Разблокировка расчётного счёта по 115-ФЗ в Липецке | Де-Юре',
    description: 'Юридическая помощь бизнесу при ограничениях по 115-ФЗ: ответ банку, документы, обжалование отказа, обращение в МВК и защита в суде. 📞 +7 (4742) 20-15-25.',
    images: ['https://dejure-help.ru/images/og/razblokirovka-raschetnogo-scheta-po-115-fz-og.jpg'],
  },
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/razblokirovka-raschetnogo-scheta-po-115-fz/',
  },
};

export default function Razblokirovka115fzPage() {
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
          streetAddress: 'ул. Советская, 35',
          addressLocality: 'Липецк',
          addressRegion: 'Липецкая область',
          addressCountry: 'RU'
        },
        employee: {
          '@id': 'https://dejure-help.ru/specialisty/nacheshnikov-vladimir-viktorovich/#person'
        }
      },
      {
        '@type': 'Person',
        '@id': 'https://dejure-help.ru/specialisty/nacheshnikov-vladimir-viktorovich/#person',
        name: 'Владимир Викторович Начешников',
        url: 'https://dejure-help.ru/specialisty/nacheshnikov-vladimir-viktorovich/',
        jobTitle: 'Специалист ЮК «Де-Юре»',
        worksFor: {
          '@id': 'https://dejure-help.ru/#organization'
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/biznesu/razblokirovka-raschetnogo-scheta-po-115-fz/#breadcrumbs',
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
            name: 'Разблокировка расчётного счёта по 115-ФЗ',
            item: 'https://dejure-help.ru/biznesu/razblokirovka-raschetnogo-scheta-po-115-fz/'
          }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/razblokirovka-raschetnogo-scheta-po-115-fz/#service',
        name: 'Разблокировка расчётного счёта по 115-ФЗ в Липецке',
        serviceType: 'Юридическая помощь при ограничениях по 115-ФЗ',
        description: 'Юридическая помощь бизнесу при ограничениях по 115-ФЗ: ответ банку, документы, обжалование отказа, обращение в МВК и защита в суде. 📞 +7 (4742) 20-15-25.',
        url: 'https://dejure-help.ru/biznesu/razblokirovka-raschetnogo-scheta-po-115-fz/',
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
        '@id': 'https://dejure-help.ru/biznesu/razblokirovka-raschetnogo-scheta-po-115-fz/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Банк действительно заблокировал весь счёт или только ограничил операции?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Не всегда. Под словом «блокировка» могут скрываться запрос документов, отказ в конкретной операции, ограничение дистанционного обслуживания, высокий уровень риска или прекращение расходных операций. Для выбора способа защиты необходимо изучить уведомление банка и фактически введённые ограничения.'
            }
          },
          {
            '@type': 'Question',
            name: 'Что делать сразу после получения запроса банка по 115-ФЗ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Зафиксируйте установленный банком срок ответа, получите полный перечень вопросов и не направляйте разрозненные документы без пояснений. Сначала необходимо сопоставить операции, договоры и первичные документы, а затем подготовить единый непротиворечивый ответ.'
            }
          },
          {
            '@type': 'Question',
            name: 'Какие документы обычно требует служба финансового мониторинга?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Набор зависит от конкретной операции и деятельности компании. Это могут быть договоры, счета, акты, накладные, сведения о контрагентах, налогах, сотрудниках, помещениях и деловой цели платежей. Универсальный комплект без анализа запроса может оказаться недостаточным или избыточным.'
            }
          },
          {
            '@type': 'Question',
            name: 'Сколько времени занимает процедура пересмотра решения в банке и МВК?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Срок зависит от процедуры. Заявление о пересмотре отказа банк рассматривает в течение 7 рабочих дней. МВК рассматривает обращение в течение 20 рабочих дней со дня поступления документов. Обращение о пересмотре высокого уровня риска в платформе ЗСК Банк России рассматривает в течение 15 рабочих дней. Фактическое восстановление обслуживания зависит от полноты документов, принятого решения и последующих действий банка.'
            }
          },
          {
            '@type': 'Question',
            name: 'Можно ли просто открыть счёт в другом банке при блокировке?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Новый счёт не устраняет причину ограничений и не гарантирует обслуживание в другом банке. Сведения о риске и предыдущих отказах могут учитываться при оценке клиента. Сначала необходимо установить основание решения и выбрать применимый порядок его пересмотра.'
            }
          },
          {
            '@type': 'Question',
            name: 'Что делать, если компания попала в «красную зону» платформы «Знай своего клиента» (ЗСК)?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Высокая оценка платформы ЗСК сама по себе не прекращает операции. Ограничительные меры применяются, когда высокий уровень риска присвоили и Банк России, и обслуживающий банк. Если банк меры не применил, оценку ЗСК сначала оспаривают в Банке России. Если высокая оценка совпала и меры применены, обратиться в МВК можно в течение 6 месяцев со дня, следующего за днём получения уведомления банка.'
            }
          },
          {
            '@type': 'Question',
            name: 'Рассматривает ли МВК ограничение банк-клиента?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Не каждое ограничение дистанционного банковского обслуживания само по себе относится к предмету рассмотрения МВК. Сначала необходимо установить, было ли принято решение, для которого законом предусмотрен внесудебный порядок обжалования.'
            }
          },
          {
            '@type': 'Question',
            name: 'Когда приходится обращаться в суд?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Судебный порядок рассматривают, если внесудебный маршрут неприменим, не дал результата либо спор связан с самостоятельными нарушениями банка. Перспективу оценивают по документам, переписке и последствиям конкретного решения.'
            }
          },
          {
            '@type': 'Question',
            name: 'Можно ли гарантировать разблокировку счёта?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Нет. Юрист может проверить основания, подготовить позицию и документы, сопровождать обращение и обжалование, но решение принимает банк, Банк России, МВК или суд с учётом обстоятельств конкретного дела.'
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
      <Razblokirovka115fzClient />
    </>
  );
}
