import { Metadata } from 'next';
import ZashchitaPoEkonomicheskimPrestupleniyamClient from './ZashchitaPoEkonomicheskimPrestupleniyamClient';

export const metadata: Metadata = {
  title: 'Защита по экономическим преступлениям в Липецке | Де-Юре',
  description:
    'Уголовно-правовая защита руководителей и собственников бизнеса по экономическим статьям: мошенничество, растрата, злоупотребления в Липецке и области.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Защита по экономическим преступлениям в Липецке | Де-Юре',
    description:
      'Защита руководства и бизнеса по статьям 159, 160, 201 УК РФ. Проверка обоснованности обвинений, защита активов и свободы.',
    url: 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-ekonomicheskim-prestupleniyam/',
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/zashchita-po-ekonomicheskim-prestupleniyam-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Защита по экономическим преступлениям в Липецке',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Защита по экономическим преступлениям в Липецке | Де-Юре',
    description:
      'Уголовно-правовая защита руководителей и собственников бизнеса по экономическим статьям: мошенничество, растрата, злоупотребления в Липецке и области.',
    images: ['https://dejure-help.ru/images/og/zashchita-po-ekonomicheskim-prestupleniyam-og.jpg'],
  },
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-ekonomicheskim-prestupleniyam/',
  },
};

export default function ZashchitaPoEkonomicheskimPrestupleniyamPage() {
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
        '@id': 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-ekonomicheskim-prestupleniyam/#breadcrumbs',
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
            name: 'Защита по экономическим преступлениям',
            item: 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-ekonomicheskim-prestupleniyam/'
          }
        ]
      },
      {
        '@type': 'WebPage',
        '@id': 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-ekonomicheskim-prestupleniyam/#webpage',
        name: 'Защита по экономическим преступлениям в Липецке | Де-Юре',
        description: 'Уголовно-правовая защита руководителей и собственников бизнеса по экономическим статьям: мошенничество, растрата, злоупотребления в Липецке и области.',
        url: 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-ekonomicheskim-prestupleniyam/',
        about: {
          '@id': 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-ekonomicheskim-prestupleniyam/#service'
        }
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-ekonomicheskim-prestupleniyam/#service',
        name: 'Защита по экономическим преступлениям в Липецке',
        description:
          'Уголовно-правовая защита руководителей и собственников бизнеса по экономическим статьям: мошенничество, растрата, злоупотребления в Липецке и области.',
        url: 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-ekonomicheskim-prestupleniyam/',
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
        '@id': 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-ekonomicheskim-prestupleniyam/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Можно ли избежать заключения под стражу по экономическому преступлению?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Возможность заключения под стражу оценивается с учётом статьи обвинения, обстоятельств дела, связи деяния с предпринимательской деятельностью и предусмотренных законом исключений. Защита представляет документы и доводы в пользу применения менее строгой меры пресечения, но решение принимает суд.'
            }
          },
          {
            '@type': 'Question',
            name: 'Чем обвинение по ст. 159 УК РФ отличается от неисполнения договора в арбитраже?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Для уголовной квалификации необходимо установить признаки хищения и умысел, существовавший в юридически значимый момент. Фактическое исполнение обязательств, понесённые расходы и деловая переписка могут иметь значение для разграничения уголовного обвинения и гражданско-правового спора, но вывод делается после анализа всех обстоятельств.'
            }
          },
          {
            '@type': 'Question',
            name: 'Может ли один адвокат защищать компанию и генерального директора?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Адвокат защищает конкретное физическое лицо (руководителя, учредителя или бухгалтера). Если интересы юридического лица и должностного лица полностью совпадают, противоречий нет. Однако при возникновении конфликта интересов защита каждого участника поручается отдельным адвокатам команды.'
            }
          },
          {
            '@type': 'Question',
            name: 'Что делать, если следователь требует дать показания без адвоката?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Сначала необходимо определить процессуальный статус человека, разъяснённые ему права и характер предстоящего действия. Вопрос об участии адвоката и порядке дачи показаний решается применительно к конкретной ситуации.'
            }
          },
          {
            '@type': 'Question',
            name: 'Помогает ли добровольное возмещение ущерба прекратить уголовное дело?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'По ряду экономических составов возмещение ущерба является законным основанием для прекращения уголовного преследования или освобождения от уголовной ответственности (ст. 76.1 УК РФ, ст. 28.1 УПК РФ).'
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
      <ZashchitaPoEkonomicheskimPrestupleniyamClient />
    </>
  );
}
