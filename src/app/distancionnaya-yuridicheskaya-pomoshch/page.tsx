import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DistancionnayaPomoshchClient from './DistancionnayaPomoshchClient';

export const metadata: Metadata = {
  title: 'Дистанционная юридическая помощь — работа из других регионов | Де-Юре',
  description: 'Юридическая помощь из другого города: консультация, документы, договор через ЭДО или почтой, прямая связь с юристом. Формат работы и выезды согласуем заранее.',
  alternates: {
    canonical: 'https://dejure-help.ru/distancionnaya-yuridicheskaya-pomoshch/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Дистанционная юридическая помощь — работа из других регионов | Де-Юре',
    description: 'Юридическая помощь из другого города: консультация, документы, договор через ЭДО или почтой, прямая связь с юристом. Формат работы и выезды согласуем заранее.',
    url: 'https://dejure-help.ru/distancionnaya-yuridicheskaya-pomoshch/',
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/office-interior-real.webp',
        width: 1600,
        height: 1200,
        alt: 'Офис коллегии адвокатов «Де-Юре» — дистанционная работа с регионами',
      },
    ],
  },
};

export default function DistancionnayaPomoshchPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://dejure-help.ru/distancionnaya-yuridicheskaya-pomoshch/#webpage',
        'url': 'https://dejure-help.ru/distancionnaya-yuridicheskaya-pomoshch/',
        'name': 'Дистанционная юридическая помощь — работа из других регионов | Де-Юре',
        'description': 'Юридическая помощь из другого города: консультация, документы, договор через ЭДО или почтой, прямая связь с юристом. Формат работы и выезды согласуем заранее.',
        'isPartOf': {
          '@id': 'https://dejure-help.ru/#website',
        },
        'breadcrumb': {
          '@id': 'https://dejure-help.ru/distancionnaya-yuridicheskaya-pomoshch/#breadcrumb',
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/distancionnaya-yuridicheskaya-pomoshch/#breadcrumb',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Главная',
            'item': 'https://dejure-help.ru/',
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Дистанционная юридическая помощь',
            'item': 'https://dejure-help.ru/distancionnaya-yuridicheskaya-pomoshch/',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Можно ли обратиться из другого региона',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Да. Сообщите город, суть вопроса и стадию дела. После уточнения обстоятельств определим возможность принять задачу, подходящий формат помощи и необходимость выезда.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Нужно ли приезжать в Липецк для заключения договора',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Договор можно оформить через ЭДО или обменяться документами почтой. Нужны ли личные действия на других этапах, зависит от конкретного поручения.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Можно ли начать без полного комплекта документов',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Да, начните с описания ситуации и сообщите, какие материалы есть. Сотрудник компании уточнит, какие документы нужны для дальнейшего разбора. Возможность содержательного анализа зависит от достаточности сведений.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Можно ли провести всё дело без моего присутствия',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Это определяется после изучения задачи. Для отдельных действий может потребоваться личное участие клиента, оригиналы документов или присутствие представителя. Формат работы и необходимые полномочия согласуем заранее.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Как я буду получать информацию о ходе дела',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Вы общаетесь напрямую с выделенным юристом. Регулярность взаимодействия согласуется в начале работы. Дополнительную информацию можно запросить вне планового графика.',
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <DistancionnayaPomoshchClient />
      <Footer />
    </>
  );
}
