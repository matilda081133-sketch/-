import { Metadata } from 'next';
import OtkazAnnulirovanieRvpVnzhClient from './OtkazAnnulirovanieRvpVnzhClient';

export const metadata: Metadata = {
  title: 'Обжалование отказа и аннулирования РВП / ВНЖ в Липецке — адвокат | Де-Юре',
  description: 'Обжалование отказа и аннулирования РВП / ВНЖ в Липецке: досудебное обжалование, иск в суд по КАС РФ, меры предварительной защиты (ст. 85 КАС РФ). ЮК «Де-Юре».',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/migracionnyj-yurist/otkaz-annulirovanie-rvp-vnzh/',
  },
  openGraph: {
    title: 'Обжалование отказа и аннулирования РВП / ВНЖ в Липецке — адвокат | Де-Юре',
    description: 'Обжалование отказа и аннулирования РВП / ВНЖ в Липецке: досудебное обжалование, иск в суд по КАС РФ, меры предварительной защиты (ст. 85 КАС РФ). ЮК «Де-Юре».',
    url: 'https://dejure-help.ru/grazhdanam/migracionnyj-yurist/otkaz-annulirovanie-rvp-vnzh/',
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

export default function OtkazAnnulirovaniePage() {
  const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/otkaz-annulirovanie-rvp-vnzh/#webpage",
      "url": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/otkaz-annulirovanie-rvp-vnzh/",
      "name": "Обжалование отказа и аннулирования РВП / ВНЖ в Липецке — адвокат | Де-Юре",
      "description": "Обжалование отказа и аннулирования РВП / ВНЖ в Липецке: досудебное обжалование, иск в суд по КАС РФ, меры предварительной защиты (ст. 85 КАС РФ). ЮК «Де-Юре».",
      "isPartOf": {
        "@id": "https://dejure-help.ru/#website"
      },
      "breadcrumb": {
        "@id": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/otkaz-annulirovanie-rvp-vnzh/#breadcrumb"
      },
      "about": {
        "@id": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/otkaz-annulirovanie-rvp-vnzh/#service"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/otkaz-annulirovanie-rvp-vnzh/#breadcrumb",
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
          "name": "Отказ и аннулирование РВП/ВНЖ",
          "item": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/otkaz-annulirovanie-rvp-vnzh/"
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
      "@id": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/otkaz-annulirovanie-rvp-vnzh/#service",
      "name": "Обжалование отказа или аннулирования РВП и ВНЖ",
      "description": "Обжалование отказа и аннулирования РВП / ВНЖ в Липецке: досудебное обжалование, иск в суд по КАС РФ, меры предварительной защиты (ст. 85 КАС РФ). ЮК «Де-Юре».",
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
      "@id": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/otkaz-annulirovanie-rvp-vnzh/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Чем отказ в выдаче отличается от аннулирования РВП или ВНЖ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Отказ выносится на этапе рассмотрения заявления до выдачи документа. Аннулирование прекращает действие уже выданного и действующего РВП или ВНЖ и обязывает покинуть РФ в 15-дневный срок."
          }
        },
        {
          "@type": "Question",
          "name": "Какой срок установлен для обжалования отказа или аннулирования?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Решение об отказе или аннулировании РВП/ВНЖ может быть обжаловано в вышестоящий орган МВД в течение 3 рабочих дней либо в суд в течение 3 месяцев со дня получения уведомления."
          }
        },
        {
          "@type": "Question",
          "name": "Обязан ли иностранец покинуть Россию в течение 15 дней после аннулирования?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "По закону — да, если решение не обжаловано. Однако при подаче административного иска и принятии судом мер предварительной защиты срок выезда законно приостанавливается до решения суда."
          }
        },
        {
          "@type": "Question",
          "name": "По каким основаниям чаще всего аннулируют РВП и ВНЖ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Основные причины: нахождение за пределами РФ более 6 месяцев суммарно за год, неподача ежегодного уведомления о подтверждении проживания, непредоставление подтверждения доходов или привлечение к ответственности."
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
      <OtkazAnnulirovanieRvpVnzhClient />
    </>
  );
}
