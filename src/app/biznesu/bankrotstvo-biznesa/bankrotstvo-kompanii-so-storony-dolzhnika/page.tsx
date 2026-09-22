import { Metadata } from 'next';
import BankrotstvoDolzhnikaClient from './BankrotstvoDolzhnikaClient';

export const metadata: Metadata = {
  title: 'Банкротство компании-должника в Липецке | Де-Юре',
  description: 'Юридическое сопровождение банкротства компании-должника в Липецке: диагностика оснований и рисков, подготовка заявления, документов и представительство в процедуре. 📞 +7 (4742) 20-15-25.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Банкротство компании-должника в Липецке | Де-Юре',
    description: 'Юридическое сопровождение банкротства компании-должника в Липецке: диагностика оснований и рисков, подготовка заявления, документов и представительство в процедуре. 📞 +7 (4742) 20-15-25.',
    url: 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/bankrotstvo-kompanii-so-storony-dolzhnika/',
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/bankrotstvo-kompanii-so-storony-dolzhnika-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Банкротство компании со стороны должника в Липецке',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Банкротство компании-должника в Липецке | Де-Юре',
    description: 'Юридическое сопровождение банкротства компании-должника в Липецке: диагностика оснований и рисков, подготовка заявления, документов и представительство в процедуре. 📞 +7 (4742) 20-15-25.',
    images: ['https://dejure-help.ru/images/og/bankrotstvo-kompanii-so-storony-dolzhnika-og.jpg'],
  },
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/bankrotstvo-kompanii-so-storony-dolzhnika/',
  },
};

export default function BankrotstvoDolzhnikaPage() {
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
          'streetAddress': 'ул. Советская, д. 35, оф. 213',
          'addressLocality': 'Липецк',
          'addressRegion': 'Липецкая область',
          'addressCountry': 'RU'
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/bankrotstvo-kompanii-so-storony-dolzhnika/#breadcrumbs',
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
            'name': 'Банкротство компании со стороны должника',
            'item': 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/bankrotstvo-kompanii-so-storony-dolzhnika/'
          }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/bankrotstvo-kompanii-so-storony-dolzhnika/#service',
        'name': 'Банкротство компании со стороны должника в Липецке',
        'description':
          'Юридическое сопровождение банкротства компании-должника в Липецке: диагностика оснований и рисков, подготовка заявления, документов и представительство в процедуре.',
        'url': 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/bankrotstvo-kompanii-so-storony-dolzhnika/',
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
        '@id': 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/bankrotstvo-kompanii-so-storony-dolzhnika/#faq',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Когда компания вправе сама обратиться с заявлением о банкротстве?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Право должника связано не с желанием закрыть компанию, а с обстоятельствами, при которых уже видно, что исполнить обязательства в установленный срок не получится. Юрист проверяет финансовые данные, сроки, активы, требования и применимую редакцию закона.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Когда обращение в суд становится обязанностью руководителя?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Закон предусматривает несколько самостоятельных оснований. Нельзя определять обязанность только по общей сумме долга или одной просрочке: важны последствия расчётов с отдельными кредиторами, признаки неплатёжеспособности или недостаточности имущества и другие обстоятельства. Начало срока требует оценки конкретной даты и фактов.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Можно ли подать заявление, если кредитор уже начал банкротство?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Сначала нужно проверить карточку дела, содержание заявления кредитора, назначенную дату и принятые судом акты. Дальнейшие действия зависят от стадии: самостоятельная подача не всегда является правильным или доступным следующим шагом.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Банкротство автоматически прекращает все долги компании?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Нет. Требования рассматриваются в установленной процедуре, имущество формирует конкурсную массу, а итог зависит от судебных актов, расчётов и завершения дела. Нельзя заранее обещать прекращение всех обязательств или отсутствие требований к другим лицам.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Можно ли продолжать работу компании во время процедуры?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Это зависит от введённой процедуры, состояния бизнеса, полномочий органов управления, позиции управляющего и судебных актов. Возможность текущей деятельности оценивается отдельно; банкротство не означает автоматической остановки в день подачи заявления.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Кто выбирает арбитражного управляющего?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Порядок определения кандидатуры и саморегулируемой организации регулируется законом и судебной процедурой. Юридическая компания не должна обещать назначение «своего» или контролируемого управляющего.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Что будет со сделками, совершёнными до банкротства?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Их могут проверять по специальным банкротным и общегражданским основаниям. Имеют значение период, цена, встречное исполнение, взаимосвязанность сторон, осведомлённость и влияние на кредиторов. Подробный спор относится к странице об оспаривании сделок.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Отвечает ли директор личным имуществом?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Не автоматически. Ответственность КДЛ требует конкретных оснований, фактов, причинной связи и процессуального рассмотрения. Если личное требование уже предъявлено или риск существенный, нужен отдельный анализ по услуге защиты от субсидиарной ответственности.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Сколько длится банкротство компании?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Универсального срока нет. На продолжительность влияют процедура, активы, число кредиторов, торги, сделки, требования к КДЛ, жалобы и обжалование судебных актов. После диагностики можно обсуждать этапы, но не гарантировать дату завершения.'
            }
          },
          {
            '@type': 'Question',
            'name': 'От чего зависит стоимость сопровождения?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'От стадии, объёма и состояния документов, числа кредиторов, имущества, заседаний и самостоятельных споров. В договоре отдельно фиксируются юридические услуги и применимые внешние расходы.'
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
      <BankrotstvoDolzhnikaClient />
    </>
  );
}
