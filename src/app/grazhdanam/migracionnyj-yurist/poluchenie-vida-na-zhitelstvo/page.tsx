import { Metadata } from 'next';
import PoluchenieVidaNaZhitelstvoClient from './PoluchenieVidaNaZhitelstvoClient';

export const metadata: Metadata = {
  title: 'Помощь в получении ВНЖ в Липецке — оформление вида на жительство | Де-Юре',
  description: 'Юридическая помощь в оформлении вида на жительство (ВНЖ) в Липецке: после РВП и напрямую по семейным, образовательным и профессиональным основаниям. Проверка документов и сопровождение подачи.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/migracionnyj-yurist/poluchenie-vida-na-zhitelstvo/',
  },
  openGraph: {
    title: 'Помощь в получении ВНЖ в Липецке — оформление вида на жительство | Де-Юре',
    description: 'Юридическая помощь в оформлении вида на жительство (ВНЖ) в Липецке: после РВП и напрямую по семейным, образовательным и профессиональным основаниям. Проверка документов и сопровождение подачи.',
    url: 'https://dejure-help.ru/grazhdanam/migracionnyj-yurist/poluchenie-vida-na-zhitelstvo/',
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/migracionnyj-yurist.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Оформление вида на жительство (ВНЖ) — ЮК «Де-Юре»',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://dejure-help.ru/images/og/migracionnyj-yurist.jpg'],
  },
};

export default function PoluchenieVnzhPage() {
  const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/poluchenie-vida-na-zhitelstvo/#webpage",
      "url": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/poluchenie-vida-na-zhitelstvo/",
      "name": "Помощь в получении ВНЖ в Липецке — оформление вида на жительство | Де-Юре",
      "description": "Юридическая помощь в оформлении вида на жительство (ВНЖ) в Липецке: после РВП и напрямую по семейным, образовательным и профессиональным основаниям. Проверка документов и сопровождение подачи.",
      "isPartOf": {
        "@id": "https://dejure-help.ru/#website"
      },
      "breadcrumb": {
        "@id": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/poluchenie-vida-na-zhitelstvo/#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/poluchenie-vida-na-zhitelstvo/#service"
      },
      "about": {
        "@id": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/poluchenie-vida-na-zhitelstvo/#service"
      },
      "mentions": {
        "@id": "https://dejure-help.ru/specialisty/konopkin-dmitriy-sergeevich/#person"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/poluchenie-vida-na-zhitelstvo/#breadcrumb",
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
          "name": "Получение ВНЖ",
          "item": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/poluchenie-vida-na-zhitelstvo/"
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
      "@id": "https://dejure-help.ru/specialisty/konopkin-dmitriy-sergeevich/#person",
      "name": "Дмитрий Сергеевич Конопкин",
      "url": "https://dejure-help.ru/specialisty/konopkin-dmitriy-sergeevich/",
      "jobTitle": "Адвокат"
    },
    {
      "@type": "Service",
      "@id": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/poluchenie-vida-na-zhitelstvo/#service",
      "name": "Оформление вида на жительство (ВНЖ)",
      "description": "Юридическая помощь в оформлении вида на жительство (ВНЖ) в Липецке: после РВП и напрямую по семейным, образовательным и профессиональным основаниям. Проверка документов и сопровождение подачи.",
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
      "@id": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/poluchenie-vida-na-zhitelstvo/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Какие права даёт вид на жительство (ВНЖ) в России?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ВНЖ даёт право постоянного проживания в любом регионе РФ, официального трудоустройства без патента, бесплатной медицинской помощи по ОМС, пенсионного обеспечения и последующего оформления гражданства РФ."
          }
        },
        {
          "@type": "Question",
          "name": "Является ли вид на жительство бессрочным?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да, с 2019 года ВНЖ в России выдаётся бессрочно (за исключением ВНЖ для высококвалифицированных специалистов и членов их семей, который выдаётся на срок действия разрешения на работу)."
          }
        },
        {
          "@type": "Question",
          "name": "Кто может получить ВНЖ напрямую без предварительного оформления РВП?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Перечень оснований установлен статьёй 8 закона № 115-ФЗ. Каждая категория требует отдельной проверки. Для родителей и детей учитываются конкретная конструкция родства, гражданство и проживание родственника; для выпускников — форма обучения, аккредитация и вид диплома; для специалистов — профессия, работодатель, стаж и взносы; для граждан отдельных государств — применимый закон или международное соглашение. Ранее принятое решение о признании носителем русского языка может иметь значение, если оно было вынесено до прекращения соответствующей процедуры. Новые заявления на признание носителем русского языка не рассматриваются как самостоятельный действующий маршрут. Основание и дату решения необходимо проверять по документам."
          }
        },
        {
          "@type": "Question",
          "name": "Нужно ли подтверждать проживание по ВНЖ каждый год?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да, иностранный гражданин с ВНЖ обязан ежегодно подавать в МВД уведомление о подтверждении своего проживания в РФ с приложением справки о доходах (а каждый пятый год — лично)."
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
      <PoluchenieVidaNaZhitelstvoClient />
    </>
  );
}
