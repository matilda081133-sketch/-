import { Metadata } from 'next';
import PredstavlenieKreditoraClient from './PredstavlenieKreditoraClient';

export const metadata: Metadata = {
  title: 'Юрист кредитору при банкротстве должника в Липецке | Де-Юре',
  description:
    'Комплексное представление интересов кредитора в банкротстве компании: стратегия участия, собрания кредиторов, судебные заседания и контроль процедуры. Де-Юре, Липецк.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Юрист кредитору при банкротстве должника в Липецке | Де-Юре',
    description:
      'Комплексное представление интересов кредитора в банкротстве компании: стратегия участия, собрания кредиторов, судебные заседания и контроль процедуры. Де-Юре, Липецк.',
    url: 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/predstavlenie-interesov-kreditora/',
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/predstavlenie-interesov-kreditora-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Представление интересов кредитора в банкротстве компании в Липецке',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Юрист кредитору при банкротстве должника в Липецке | Де-Юре',
    description:
      'Комплексное представление интересов кредитора в банкротстве компании: стратегия участия, собрания кредиторов, судебные заседания и контроль процедуры. Де-Юре, Липецк.',
    images: ['https://dejure-help.ru/images/og/predstavlenie-interesov-kreditora-og.jpg'],
  },
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/predstavlenie-interesov-kreditora/',
  },
};

export default function PredstavlenieKreditoraPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LegalService',
        '@id': 'https://dejure-help.ru/#organization',
        'name': 'Юридическая компания «Де-Юре»',
        'url': 'https://dejure-help.ru/',
        'telephone': '+7 (910) 350-31-11',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'ул. Советская, д. 35, оф. 213',
          'addressLocality': 'Липецк',
          'addressRegion': 'Липецкая область',
          'addressCountry': 'RU'
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/predstavlenie-interesov-kreditora/#breadcrumbs',
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
            'name': 'Бизнесу',
            'item': 'https://dejure-help.ru/biznesu/'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Банкротство бизнеса',
            'item': 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/'
          },
          {
            '@type': 'ListItem',
            'position': 4,
            'name': 'Представление интересов кредитора',
            'item': 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/predstavlenie-interesov-kreditora/'
          }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/predstavlenie-interesov-kreditora/#service',
        'name': 'Представление интересов кредитора в банкротстве компании в Липецке',
        'description':
          'Комплексное представление интересов кредитора в банкротстве компании: стратегия участия, собрания кредиторов, судебные заседания и контроль процедуры. Де-Юре, Липецк.',
        'url': 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/predstavlenie-interesov-kreditora/',
        'provider': {
          '@id': 'https://dejure-help.ru/#organization'
        },
        'areaServed': {
          '@type': 'AdministrativeArea',
          'name': 'Липецк и Липецкая область'
        }
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/predstavlenie-interesov-kreditora/#faq',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Зачем кредитору представитель после включения требования в реестр?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Реестр подтверждает статус требования, но процедура продолжается: проходят собрания и заседания, управляющий представляет отчёты, принимаются решения об имуществе и расчётах. Представитель анализирует события и своевременно формирует позицию кредитора.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Если требование ещё не установлено, подходит ли эта услуга?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Сначала нужно определить процессуальный маршрут. Для самостоятельного включения в реестр предназначена BIZ-BKR-03; если кредитору требуется дальнейшее комплексное сопровождение, этап можно включить в общий согласованный план.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Можно ли подключить юриста, когда процедура уже идёт?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Да. Сначала юрист проверит текущую стадию, статус требования, прошедшие решения и ближайшие события. Часть возможностей могла измениться, поэтому объём работы определяется после диагностики.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Что именно делает представитель на собрании кредиторов?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Анализирует повестку и материалы, согласует позицию, участвует в голосовании в пределах полномочий и фиксирует решения или нарушения. Вес голоса зависит от установленного требования и его статуса.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Как кредитор получает информацию о ходе дела?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Формат отчётности фиксируется при согласовании: ключевые судебные акты, публикации, собрания, действия управляющего, риски и следующие шаги. Канал и периодичность зависят от объёма сопровождения.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Можно ли пожаловаться на арбитражного управляющего?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Да, при наличии нарушения и доказательств, но это отдельный поисковый и коммерческий интент BIZ-BKR-06. В рамках сопровождения юрист выявляет сигнал и определяет, требуется ли самостоятельное обжалование.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Можно ли оспорить подозрительную сделку должника?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Да, при наличии предусмотренных законом оснований и доказательств. Это самостоятельный обособленный спор; его целесообразность и бюджет оцениваются отдельно.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Можно ли взыскать долг с директора или собственника?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Не автоматически. Для субсидиарной или иной ответственности нужны специальные основания, причинная связь и доказательства. Подробная стратегия относится к отдельной услуге по КДЛ.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Можно ли сменить представителя в ходе процедуры?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Да, если это допускают документы о полномочиях и процессуальная ситуация. Новый юрист сначала принимает материалы, проверяет совершённые действия и согласует приоритеты.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Сколько денег удастся вернуть?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Заранее достоверно назвать процент нельзя. Он зависит от активов, состава и очередности требований, расходов процедуры, результатов споров и расчётов. Юрист может оценить сценарии, но не гарантировать выплату.'
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
      <PredstavlenieKreditoraClient />
    </>
  );
}
