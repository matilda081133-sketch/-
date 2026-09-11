import { Metadata } from 'next';
import IsklyuchenieIzReestraKontroliruemyhLicClient from './IsklyuchenieIzReestraKontroliruemyhLicClient';

export const metadata: Metadata = {
  title: 'Исключение из реестра контролируемых лиц (режим высылки) в Липецке | Де-Юре',
  description: 'Помощь при включении в реестр контролируемых лиц МВД: установление основания, исправление сведений, обжалование исходного решения и контроль прекращения ограничений.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/migracionnyj-yurist/isklyuchenie-iz-reestra-kontroliruemyh-lic/',
  },
  openGraph: {
    title: 'Исключение из реестра контролируемых лиц (режим высылки) в Липецке | Де-Юре',
    description: 'Помощь при включении в реестр контролируемых лиц МВД: установление основания, исправление сведений, обжалование исходного решения и контроль прекращения ограничений.',
    url: 'https://dejure-help.ru/grazhdanam/migracionnyj-yurist/isklyuchenie-iz-reestra-kontroliruemyh-lic/',
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/migracionnyj-yurist.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Исключение из реестра контролируемых лиц МВД — ЮК «Де-Юре»',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://dejure-help.ru/images/og/migracionnyj-yurist.jpg'],
  },
};

export default function IsklyuchenieIzReestraPage() {
  const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/isklyuchenie-iz-reestra-kontroliruemyh-lic/#webpage",
      "url": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/isklyuchenie-iz-reestra-kontroliruemyh-lic/",
      "name": "Исключение из реестра контролируемых лиц (режим высылки) в Липецке | Де-Юре",
      "description": "Помощь при включении в реестр контролируемых лиц МВД: установление основания, исправление сведений, обжалование исходного решения и контроль прекращения ограничений.",
      "isPartOf": {
        "@id": "https://dejure-help.ru/#website"
      },
      "breadcrumb": {
        "@id": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/isklyuchenie-iz-reestra-kontroliruemyh-lic/#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/isklyuchenie-iz-reestra-kontroliruemyh-lic/#service"
      },
      "about": {
        "@id": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/isklyuchenie-iz-reestra-kontroliruemyh-lic/#service"
      },
      "mentions": {
        "@id": "https://dejure-help.ru/specialisty/konopkin-dmitriy-sergeevich/#person"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/isklyuchenie-iz-reestra-kontroliruemyh-lic/#breadcrumb",
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
          "name": "Реестр контролируемых лиц",
          "item": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/isklyuchenie-iz-reestra-kontroliruemyh-lic/"
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
      "@id": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/isklyuchenie-iz-reestra-kontroliruemyh-lic/#service",
      "name": "Исключение из реестра контролируемых лиц МВД",
      "description": "Помощь при включении в реестр контролируемых лиц МВД: установление основания, исправление сведений, обжалование исходного решения и контроль прекращения ограничений.",
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
      "@id": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/isklyuchenie-iz-reestra-kontroliruemyh-lic/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Что такое реестр контролируемых лиц МВД?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Это единый государственный реестр иностранцев, которые, по данным МВД, не имеют законных оснований для нахождения в РФ. С момента внесения сведений в отношении лица действует режим высылки."
          }
        },
        {
          "@type": "Question",
          "name": "Какие ограничения действуют при включении в реестр (режим высылки)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Контролируемому лицу отказывают в открытии новых счетов и ограничивают банковские операции. Исключения предусмотрены для входящих переводов, уплаты обязательных платежей и выдачи наличных в сумме не более 30 000 рублей в месяц. Кроме того, действуют ограничения в отношении транспорта, недвижимости, предпринимательской деятельности, заключения брака и передвижения."
          }
        },
        {
          "@type": "Question",
          "name": "Как проверить, находится ли человек в реестре контролируемых лиц?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Проверка осуществляется через официальный сервис МВД России. Адвокат поможет сделать официальный запрос для установления точной причины и ведомственного акта, послужившего основанием для включения."
          }
        },
        {
          "@type": "Question",
          "name": "Как исключить сведения из реестра контролируемых лиц?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Исключение возможно при: устранении технической ошибки, приобретении законного основания пребывания (РВП, ВНЖ, патент), отмене исходного решения (запрета, выдворения, депортации) через суд или МВД."
          }
        },
        {
          "@type": "Question",
          "name": "Приостанавливает ли подача жалобы действие ограничений?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Автоматически нет. Поэтому при обращении в суд юрист заявляет ходатайство о применении мер предварительной защиты (ст. 85 КАС РФ) для приостановления действия ограничений на период судебного разбирательства."
          }
        },
        {
          "@type": "Question",
          "name": "Разблокируют ли банковские счета после исключения из реестра?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Режим высылки прекращается со дня исключения сведений из реестра. Фактическое восстановление банковских операций может зависеть от обновления данных в информационных системах МВД и банка. Если ограничения продолжают действовать, необходимо проверить статус записи и направить обращения в МВД и кредитную организацию."
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
      <IsklyuchenieIzReestraKontroliruemyhLicClient />
    </>
  );
}
