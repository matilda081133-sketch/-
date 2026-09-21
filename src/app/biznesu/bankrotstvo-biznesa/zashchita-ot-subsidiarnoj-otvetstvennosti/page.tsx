import { Metadata } from 'next';
import SubsidiarnayaOtvetstvennostClient from './SubsidiarnayaOtvetstvennostClient';

export const metadata: Metadata = {
  title: 'Защита директора от субсидиарной ответственности в Липецке | Де-Юре',
  description:
    'Проверим основания привлечения к субсидиарной ответственности, соберём доказательства и представим директора, собственника или иное КДЛ в суде. Де-Юре, Липецк.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Защита директора от субсидиарной ответственности в Липецке | Де-Юре',
    description:
      'Проверим основания привлечения к субсидиарной ответственности, соберём доказательства и представим директора, собственника или иное КДЛ в суде. Де-Юре, Липецк.',
    url: 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/zashchita-ot-subsidiarnoj-otvetstvennosti/',
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/zashchita-ot-subsidiarnoj-otvetstvennosti-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Защита от субсидиарной ответственности в Липецке',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Защита директора от субсидиарной ответственности в Липецке | Де-Юре',
    description:
      'Проверим основания привлечения к субсидиарной ответственности, соберём доказательства и представим директора, собственника или иное КДЛ в суде. Де-Юре, Липецк.',
    images: ['https://dejure-help.ru/images/og/zashchita-ot-subsidiarnoj-otvetstvennosti-og.jpg'],
  },
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/zashchita-ot-subsidiarnoj-otvetstvennosti/',
  },
};

export default function SubsidiarnayaOtvetstvennostPage() {
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
        '@id': 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/zashchita-ot-subsidiarnoj-otvetstvennosti/#breadcrumbs',
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
            'name': 'Защита от субсидиарной ответственности',
            'item': 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/zashchita-ot-subsidiarnoj-otvetstvennosti/'
          }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/zashchita-ot-subsidiarnoj-otvetstvennosti/#service',
        'name': 'Защита от субсидиарной ответственности в Липецке',
        'description':
          'Проверим основания привлечения к субсидиарной ответственности, соберём доказательства и представим директора, собственника или иное КДЛ в суде. Де-Юре, Липецк.',
        'url': 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/zashchita-ot-subsidiarnoj-otvetstvennosti/',
        'provider': {
          '@id': 'https://dejure-help.ru/#organization'
        }
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/zashchita-ot-subsidiarnoj-otvetstvennosti/#faq',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Кого могут признать контролирующим должника лицом?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Не только директора или участника. Суд оценивает фактическую возможность определять действия компании, конкретный период и доказательства влияния. Формальная должность или доля важны, но не должны подменять анализ фактов.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Учредитель автоматически отвечает по долгам ООО?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Нет. Сам по себе статус участника не означает автоматическую ответственность по всем долгам. Заявитель должен ссылаться на предусмотренное законом основание, а суд исследует контроль, действия, причинную связь и другие обстоятельства.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Бывший директор тоже может быть ответчиком?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Да, если требование связано с периодом его контроля или действиями. Защита должна точно разделить даты полномочий, фактическое влияние, передачу дел и эпизоды, которые возникли до или после ухода.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Что делать после получения заявления?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Сохранить заявление и приложения, проверить определение суда и ближайшее заседание, обеспечить сохранность документов и переписки. Не удалять материалы и не подписывать признание фактов до анализа позиции.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Можно ли защититься ссылкой на экономический кризис?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Общей ссылки недостаточно. Нужно подтвердить, какие внешние причины действовали, какую информацию имел руководитель, какие решения принимались и почему именно действия ответчика не вызвали невозможность расчётов либо прирост спорных обязательств.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Что если часть документов утрачена?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Нельзя восстанавливать их фиктивно или задним числом. Нужно установить причину отсутствия, подтвердить передачу или объективные обстоятельства, определить альтернативные источники и корректно объяснить ситуацию суду.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Можно ли уменьшить размер ответственности?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Размер можно оспаривать, если в него включены неподходящие обязательства, чужие периоды или суммы без необходимой связи. Конкретный результат зависит от основания, расчёта и доказательств; снижение не гарантируется.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Есть ли срок для предъявления такого заявления?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Закон устанавливает специальные правила и предельные периоды, но их расчёт зависит от основания, момента осведомлённости заявителя и процессуальной ситуации. Срок проверяется по материалам дела и действующей редакции закона.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Можно ли переписать имущество, чтобы его не взыскали?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Мы не рекомендуем фиктивные или направленные на сокрытие активов действия. Они могут создать дополнительные споры и риски. Допустимы только законные решения после анализа фактов, целей и последствий.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Спишется ли субсидиарный долг в личном банкротстве?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Этот вопрос относится к отдельной процедуре гражданина и зависит от основания долга и судебных выводов. Страница BIZ-BKR-04 не обещает списание и направляет на индивидуальную диагностику в кластер банкротства физических лиц.'
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
      <SubsidiarnayaOtvetstvennostClient />
    </>
  );
}
