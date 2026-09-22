import { Metadata } from 'next';
import ZashchitaPoNalogovymPrestupleniyamClient from './ZashchitaPoNalogovymPrestupleniyamClient';

export const metadata: Metadata = {
  title: 'Защита по налоговым преступлениям в Липецке | Де-Юре',
  description: 'Уголовная защита должностных лиц бизнеса по налоговым статьям 199, 199.1, 199.2 УК РФ. Сопровождение в СК РФ и суде в Липецке и Липецкой области. 📞 +7 (4742) 20-15-25.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Защита по налоговым преступлениям в Липецке | Де-Юре',
    description: 'Защита руководства и учредителей при уголовных делах по ст. 199 УК РФ. Сопровождение доследственных проверок и следствия в СК РФ. 📞 +7 (4742) 20-15-25.',
    url: 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-nalogovym-prestupleniyam/',
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/zashchita-po-nalogovym-prestupleniyam-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Защита по налоговым преступлениям в Липецке',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Защита по налоговым преступлениям в Липецке | Де-Юре',
    description: 'Уголовная защита должностных лиц бизнеса по налоговым статьям 199, 199.1, 199.2 УК РФ. Сопровождение в СК РФ и суде в Липецке и Липецкой области. 📞 +7 (4742) 20-15-25.',
    images: ['https://dejure-help.ru/images/og/zashchita-po-nalogovym-prestupleniyam-og.jpg'],
  },
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-nalogovym-prestupleniyam/',
  },
};

export default function ZashchitaPoNalogovymPrestupleniyamPage() {
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
        '@id': 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-nalogovym-prestupleniyam/#breadcrumbs',
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
            name: 'Защита по налоговым преступлениям',
            item: 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-nalogovym-prestupleniyam/'
          }
        ]
      },
      {
        '@type': 'WebPage',
        '@id': 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-nalogovym-prestupleniyam/#webpage',
        name: 'Защита по налоговым преступлениям в Липецке | Де-Юре',
        description: 'Уголовная защита должностных лиц бизнеса по налоговым статьям 199, 199.1, 199.2 УК РФ. Сопровождение в СК РФ и суде в Липецке и Липецкой области. 📞 +7 (4742) 20-15-25.',
        url: 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-nalogovym-prestupleniyam/',
        about: {
          '@id': 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-nalogovym-prestupleniyam/#service'
        }
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-nalogovym-prestupleniyam/#service',
        name: 'Защита по налоговым преступлениям в Липецке',
        description: 'Уголовная защита должностных лиц бизнеса по налоговым статьям 199, 199.1, 199.2 УК РФ. Сопровождение в СК РФ и суде в Липецке и Липецкой области. 📞 +7 (4742) 20-15-25.',
        url: 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-nalogovym-prestupleniyam/',
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
        '@id': 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-nalogovym-prestupleniyam/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Означает ли доначисление налогов инспекцией автоматическое возбуждение уголовного дела?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Нет. Налоговая недоимка и решение инспекции сами по себе не означают наличия состава преступления. При решении вопроса о возбуждении дела оценивается наличие достаточных данных, указывающих на признаки преступления. Для привлечения конкретного лица к ответственности необходимо доказать предусмотренный законом размер недоимки, прямой умысел и роль этого лица.'
            }
          },
          {
            '@type': 'Question',
            name: 'В какой момент налоговая инспекция передаёт материалы в Следственный комитет?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Согласно пункту 3 статьи 32 НК РФ материалы направляются в следственные органы при наличии совокупности предусмотренных законом условий, включая неуплату в установленный 75-дневный срок и размер недоимки, позволяющий предполагать наличие признаков преступления. После выявления этих обстоятельств материалы направляются в течение 10 дней. Само направление материалов не означает автоматического возбуждения уголовного дела.'
            }
          },
          {
            '@type': 'Question',
            name: 'Можно ли одному адвокату одновременно защищать директора и главного бухгалтера?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Только в том случае, если их показания и интересы не противоречат друг другу. Однако в налоговых делах следствие часто пытается склонить бухгалтера к показаниям против руководителя. При малейшем несовпадении позиций закон запрещает одному адвокату представлять обоих участников.'
            }
          },
          {
            '@type': 'Question',
            name: 'Прекращается ли уголовное дело, если полностью погасить недоимку, пени и штраф?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Закон предусматривает специальные условия освобождения от ответственности для отдельных налоговых составов. Их применимость зависит от статьи, обстоятельств, стадии дела, полноты платежей и соблюдения других требований закона. Автоматическое прекращение дела обещать нельзя.'
            }
          },
          {
            '@type': 'Question',
            name: 'Как арбитражный спор с ФНС влияет на расследование уголовного дела?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Решение арбитражного суда учитывается при оценке налоговых обстоятельств и доказательств, но не предопределяет автоматически выводы по уголовному делу. Значение решения определяется с учётом его содержания и остальных материалов.'
            }
          },
          {
            '@type': 'Question',
            name: 'Что делать, если генерального директора или главного бухгалтера вызывают на опрос в ОЭБиПК?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Не являйтесь на опрос в одиночку. Все первичные показания, данные на этапе доследственной проверки без квалифицированной защиты, следователь в дальнейшем закрепит в протоколах допросов. Перед визитом к силовикам необходимо выработать единую правовую позицию с адвокатом.'
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
      <ZashchitaPoNalogovymPrestupleniyamClient />
    </>
  );
}
