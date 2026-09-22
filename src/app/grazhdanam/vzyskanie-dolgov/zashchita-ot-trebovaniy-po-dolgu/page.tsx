import { Metadata } from 'next';
import ZashchitaOtTrebovaniyClient from './ZashchitaOtTrebovaniyClient';

export const metadata: Metadata = {
  title: 'Защита от взыскания долга по расписке в Липецке | Де-Юре',
  description: 'Проверим расписку, передачу денег, расчёт, сроки и доказательства возврата. Подготовим возражения и защитим ответчика по частному долгу в суде. 📞 +7 (4742) 20-15-25.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Защита от требований по расписке и договору займа',
    description: 'Юридическая защита при частном денежном споре: анализ документов, возражения, доказательства и представительство в суде. 📞 +7 (4742) 20-15-25.',
    url: 'https://dejure-help.ru/grazhdanam/vzyskanie-dolgov/zashchita-ot-trebovaniy-po-dolgu/',
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/zashchita-ot-trebovaniy-po-dolgu-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Защита от взыскания долга по расписке в Липецке',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Защита от требований по расписке и договору займа',
    description: 'Юридическая защита при частном денежном споре: анализ документов, возражения, доказательства и представительство в суде. 📞 +7 (4742) 20-15-25.',
    images: ['https://dejure-help.ru/images/og/zashchita-ot-trebovaniy-po-dolgu-og.jpg'],
  },
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/vzyskanie-dolgov/zashchita-ot-trebovaniy-po-dolgu/',
  },
};

export default function ZashchitaOtTrebovaniyPage() {
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
          'streetAddress': 'ул. Советская, 35',
          'addressLocality': 'Липецк',
          'addressRegion': 'Липецкая область',
          'addressCountry': 'RU'
        },
        'employee': {
          '@id': 'https://dejure-help.ru/specialisty/smolyaninova-marina-valerevna/#person'
        }
      },
      {
        '@id': 'https://dejure-help.ru/specialisty/smolyaninova-marina-valerevna/#person',
        '@type': 'Person',
        'name': 'Смольянинова Марина Валерьевна',
        'url': 'https://dejure-help.ru/specialisty/smolyaninova-marina-valerevna/',
        'jobTitle': 'Ведущий юрист ЮК «Де-Юре»',
        'image': 'https://dejure-help.ru/images/smolyaninova.jpg',
        'worksFor': {
          '@id': 'https://dejure-help.ru/#organization'
        }
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/grazhdanam/vzyskanie-dolgov/zashchita-ot-trebovaniy-po-dolgu/#service',
        'url': 'https://dejure-help.ru/grazhdanam/vzyskanie-dolgov/zashchita-ot-trebovaniy-po-dolgu/',
        'name': 'Защита от взыскания долга по расписке или договору займа',
        'serviceType': 'Юридическая защита ответчика по частным долговым обязательствам',
        'description':
          'Проверим расписку, передачу денег, расчёт, сроки и доказательства возврата. Подготовим возражения и защитим ответчика по частному долгу в суде.',
        'areaServed': [
          { '@type': 'AdministrativeArea', 'name': 'Липецкая область' },
          { '@type': 'City', 'name': 'Липецк' },
          { '@type': 'Country', 'name': 'Россия' }
        ],
        'audience': {
          '@type': 'Audience',
          'audienceType': 'Ответчики по частным денежным требованиям'
        },
        'provider': {
          '@id': 'https://dejure-help.ru/#organization'
        }
      },
      {
        '@type': 'WebPage',
        '@id': 'https://dejure-help.ru/grazhdanam/vzyskanie-dolgov/zashchita-ot-trebovaniy-po-dolgu/#webpage',
        'url': 'https://dejure-help.ru/grazhdanam/vzyskanie-dolgov/zashchita-ot-trebovaniy-po-dolgu/',
        'name': 'Защита от взыскания долга по расписке в Липецке | Де-Юре',
        'description':
          'Проверим расписку, передачу денег, расчёт, сроки и доказательства возврата. Подготовим возражения и защитим ответчика по частному долгу в суде.',
        'inLanguage': 'ru-RU',
        'isPartOf': {
          '@id': 'https://dejure-help.ru/#website'
        },
        'about': {
          '@id': 'https://dejure-help.ru/grazhdanam/vzyskanie-dolgov/zashchita-ot-trebovaniy-po-dolgu/#service'
        },
        'breadcrumb': {
          '@id': 'https://dejure-help.ru/grazhdanam/vzyskanie-dolgov/zashchita-ot-trebovaniy-po-dolgu/#breadcrumbs'
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/grazhdanam/vzyskanie-dolgov/zashchita-ot-trebovaniy-po-dolgu/#breadcrumbs',
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
            'name': 'Гражданам',
            'item': 'https://dejure-help.ru/grazhdanam/'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Взыскание долгов',
            'item': 'https://dejure-help.ru/grazhdanam/vzyskanie-dolgov/'
          },
          {
            '@type': 'ListItem',
            'position': 4,
            'name': 'Защита от требований по долгу',
            'item': 'https://dejure-help.ru/grazhdanam/vzyskanie-dolgov/zashchita-ot-trebovaniy-po-dolgu/'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/grazhdanam/vzyskanie-dolgov/zashchita-ot-trebovaniy-po-dolgu/#faq',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Можно ли оспорить расписку, если я её подписал?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Подпись имеет существенное значение, но не исключает проверку содержания документа, передачи денег, суммы, срока и исполнения. Правовая позиция зависит от фактов и допустимых доказательств, а не от одного заявления об оспаривании.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Что такое безденежность договора займа?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Это ситуация, когда заёмщик доказывает, что деньги или иное имущество фактически не получил либо получил в меньшем количестве, чем указано. Для письменного займа действуют специальные правила доказывания.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Можно ли доказать неполучение денег свидетелями?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Если договор займа должен быть письменным, оспаривание по безденежности только свидетельскими показаниями обычно не допускается, кроме прямо предусмотренных законом обстоятельств. Нужно искать и другие допустимые доказательства.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Я вернул долг наличными, но расписку не взял. Что делать?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Нужно восстановить хронологию и проверить переписку, движения по счетам, поведение сторон, возврат оригинала и другие материалы. Отсутствие подтверждения создаёт риск, но вывод делается после анализа совокупности обстоятельств.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Банковский перевод доказывает, что это был заём?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Перевод подтверждает движение денег, но не всегда основание. Суд оценивает назначение, переписку, договорённости, последующие платежи и иные отношения сторон.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Суд сам применит исковую давность?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Как правило, исковая давность применяется судом по заявлению стороны, сделанному до вынесения решения. Срок нужно рассчитать с учётом даты исполнения, требований и возможного признания долга.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Может ли частичный платёж повлиять на срок давности?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Действия, свидетельствующие о признании долга, могут иметь правовые последствия для течения срока. Значение имеет содержание и связь конкретного действия с обязательством.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Можно ли уменьшить проценты и неустойку?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Сначала проверяются основание, ставка, период и арифметика. Для отдельных санкций возможно заявлять о несоразмерности, но уменьшение не происходит автоматически и не относится одинаково ко всем начислениям.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Если подпись подделана, кто назначает экспертизу?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Сторона должна своевременно заявить мотивированное возражение и ходатайство, представить оригинал и сравнительные материалы. Вопрос о назначении экспертизы решает суд.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Что делать, если уже получен судебный приказ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Сначала зафиксировать дату получения и проверить срок подачи возражений. Подробный порядок относится к отдельной услуге отмены судебного приказа; затягивать с обращением нельзя.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Можно ли договориться без суда?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Да, если условия точно определяют сумму, сроки, порядок платежей, расходы, отказ от остальных требований и последствия исполнения. Не подписывайте признание или новый график без проверки.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Можно ли работать с юристом дистанционно?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Первичный анализ, подготовка позиции и часть заседаний возможны дистанционно. Формат зависит от суда, доказательств, необходимости экспертизы и личного участия.'
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
      <ZashchitaOtTrebovaniyClient />
    </>
  );
}
