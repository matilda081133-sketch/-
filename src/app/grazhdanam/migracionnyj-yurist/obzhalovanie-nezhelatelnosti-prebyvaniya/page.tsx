import { Metadata } from 'next';
import ObzhalovanieNezhelatelnostiPrebyvaniyaClient from './ObzhalovanieNezhelatelnostiPrebyvaniyaClient';

export const metadata: Metadata = {
  title: 'Обжалование нежелательности пребывания в РФ в Липецке — адвокат | Де-Юре',
  description: 'Отмена решений Минюста, Роспотребнадзора, МВД, ФСБ о нежелательности пребывания по ст. 25.10 114-ФЗ. Судебная защита прав иностранцев в Липецке. ЮК «Де-Юре».',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/migracionnyj-yurist/obzhalovanie-nezhelatelnosti-prebyvaniya/',
  },
  openGraph: {
    title: 'Обжалование нежелательности пребывания в РФ в Липецке — адвокат | Де-Юре',
    description: 'Отмена решений Минюста, Роспотребнадзора, МВД, ФСБ о нежелательности пребывания по ст. 25.10 114-ФЗ. Судебная защита прав иностранцев в Липецке. ЮК «Де-Юре».',
    url: 'https://dejure-help.ru/grazhdanam/migracionnyj-yurist/obzhalovanie-nezhelatelnosti-prebyvaniya/',
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/migracionnyj-yurist.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Миграционный юрист в Липецке — ЮК «Де-Юре»',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://dejure-help.ru/images/og/migracionnyj-yurist.jpg'],
  },
};

export default function ObzhalovanieNezhelatelnostiPage() {
  const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/obzhalovanie-nezhelatelnosti-prebyvaniya/#webpage",
      "url": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/obzhalovanie-nezhelatelnosti-prebyvaniya/",
      "name": "Обжалование нежелательности пребывания в РФ в Липецке — адвокат | Де-Юре",
      "description": "Отмена решений Минюста, Роспотребнадзора, МВД, ФСБ о нежелательности пребывания по ст. 25.10 114-ФЗ. Судебная защита прав иностранцев в Липецке. ЮК «Де-Юре».",
      "isPartOf": {
        "@id": "https://dejure-help.ru/#website"
      },
      "breadcrumb": {
        "@id": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/obzhalovanie-nezhelatelnosti-prebyvaniya/#breadcrumb"
      },
      "about": {
        "@id": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/obzhalovanie-nezhelatelnosti-prebyvaniya/#service"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/obzhalovanie-nezhelatelnosti-prebyvaniya/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Главная",
          "item": "https://dejure-help.ru/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Гражданам",
          "item": "https://dejure-help.ru/grazhdanam/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Миграционный юрист",
          "item": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Нежелательность пребывания",
          "item": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/obzhalovanie-nezhelatelnosti-prebyvaniya/"
        }
      ]
    },
    {
      "@type": "LegalService",
      "@id": "https://dejure-help.ru/#organization",
      "name": "Юридическая компания «Де-Юре»",
      "url": "https://dejure-help.ru/",
      "logo": "https://dejure-help.ru/images/logo.png",
      "image": "https://dejure-help.ru/images/og/migracionnyj-yurist.jpg",
      "telephone": "+7 (4742) 20-15-25",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ул. Советская, 35",
        "addressLocality": "Липецк",
        "addressRegion": "Липецкая область",
        "addressCountry": "RU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 52.6038,
        "longitude": 39.5712
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    },
    {
      "@type": "Person",
      "@id": "https://dejure-help.ru/specialisty/konopkin-dmitrij-sergeevich/#person",
      "name": "Дмитрий Сергеевич Конопкин",
      "jobTitle": "Адвокат, председатель Коллегии адвокатов «Де-Юре», куратор направления «Миграционное право»",
      "url": "https://dejure-help.ru/specialisty/konopkin-dmitrij-sergeevich/",
      "image": "https://dejure-help.ru/images/konopkin.jpg",
      "worksFor": {
        "@id": "https://dejure-help.ru/#organization"
      }
    },
    {
      "@type": "Service",
      "@id": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/obzhalovanie-nezhelatelnosti-prebyvaniya/#service",
      "name": "Обжалование решения о нежелательности пребывания в РФ",
      "description": "Отмена решений Минюста, Роспотребнадзора, МВД, ФСБ о нежелательности пребывания по ст. 25.10 114-ФЗ. Судебная защита прав иностранцев в Липецке. ЮК «Де-Юре».",
      "provider": {
        "@id": "https://dejure-help.ru/#organization"
      },
      "serviceType": "Миграционное право",
      "areaServed": {
        "@type": "Country",
        "name": "Российская Федерация"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/obzhalovanie-nezhelatelnosti-prebyvaniya/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Что означает решение о нежелательности пребывания?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Это решение уполномоченного федерального органа (Минюст, Роспотребнадзор, МВД, ФСБ) по ст. 25.10 закона № 114-ФЗ. Оно обязывает иностранца выехать из РФ, влечёт депортацию при невыезде и пожизненный или длительный запрет на въезд."
          }
        },
        {
          "@type": "Question",
          "name": "Какой орган может признать пребывание нежелательным?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Распоряжение о нежелательности пребывания вправе выносить Минюст РФ (в отношении судимых лиц), Роспотребнадзор (по медицинским показаниям), МВД РФ и ФСБ России (по вопросам безопасности и правопорядка)."
          }
        },
        {
          "@type": "Question",
          "name": "Можно ли отменить нежелательность пребывания после погашения судимости?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Если нежелательность установлена Минюстом РФ в связи с наличием судимости, решение принимается на срок до момента погашения или снятия судимости. Однако при наличии семьи (супруг, дети — граждане РФ), длительного проживания и положительных характеристик юристы «Де-Юре» добиваются отмены распоряжения в судебном порядке по ст. 8 Конвенции о защите прав человека и позиции КС РФ."
          }
        },
        {
          "@type": "Question",
          "name": "Как отменить решение Роспотребнадзора по медицинским основаниям?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "После прохождения лечения и получения официального медицинского заключения аккредитованного учреждения об излечении или стойкой ремиссии подаётся заявление в Роспотребнадзор либо административный иск в суд."
          }
        },
        {
          "@type": "Question",
          "name": "Какой срок на обжалование распоряжения о нежелательности пребывания?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Административное исковое заявление по КАС РФ может быть подано в суд в течение 3 месяцев со дня, когда гражданину стало известно о нарушении его прав (ч. 1 ст. 219 КАС РФ). Пропуск срока возможен к восстановлению при наличии уважительных причин."
          }
        },
        {
          "@type": "Question",
          "name": "Что происходит с действием решения во время суда?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Подача административного иска автоматически не приостанавливает действие распоряжения о нежелательности. Юрист одновременно с подачей иска заявляет ходатайство о применении мер предварительной защиты (ст. 85 КАС РФ) для приостановления действия решения и защиты от депортации на время процесса."
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
      <ObzhalovanieNezhelatelnostiPrebyvaniyaClient />
    </>
  );
}
