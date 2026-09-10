import { Metadata } from 'next';
import ObzhalovanieResheniyaODeportaciiClient from './ObzhalovanieResheniyaODeportaciiClient';

export const metadata: Metadata = {
  title: 'Обжалование решения о депортации в Липецке — помощь адвоката | Де-Юре',
  description: 'Судебное обжалование решения МВД о депортации по КАС РФ. Заявление мер предварительной защиты (ст. 85 КАС РФ), приостановление высылки. ЮК «Де-Юре».',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/migracionnyj-yurist/obzhalovanie-resheniya-o-deportacii/',
  },
  openGraph: {
    title: 'Обжалование решения о депортации в Липецке — помощь адвоката | Де-Юре',
    description: 'Судебное обжалование решения МВД о депортации по КАС РФ. Заявление мер предварительной защиты (ст. 85 КАС РФ), приостановление высылки. ЮК «Де-Юре».',
    url: 'https://dejure-help.ru/grazhdanam/migracionnyj-yurist/obzhalovanie-resheniya-o-deportacii/',
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

export default function ObzhalovanieDeportaciiPage() {
  const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/obzhalovanie-resheniya-o-deportacii/#webpage",
      "url": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/obzhalovanie-resheniya-o-deportacii/",
      "name": "Обжалование решения о депортации в Липецке — помощь адвоката | Де-Юре",
      "description": "Судебное обжалование решения МВД о депортации по КАС РФ. Заявление мер предварительной защиты (ст. 85 КАС РФ), приостановление высылки. ЮК «Де-Юре».",
      "isPartOf": {
        "@id": "https://dejure-help.ru/#website"
      },
      "breadcrumb": {
        "@id": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/obzhalovanie-resheniya-o-deportacii/#breadcrumb"
      },
      "about": {
        "@id": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/obzhalovanie-resheniya-o-deportacii/#service"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/obzhalovanie-resheniya-o-deportacii/#breadcrumb",
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
          "name": "Обжалование депортации",
          "item": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/obzhalovanie-resheniya-o-deportacii/"
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
      "@id": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/obzhalovanie-resheniya-o-deportacii/#service",
      "name": "Обжалование решения о депортации из Российской Федерации",
      "description": "Судебное обжалование решения МВД о депортации по КАС РФ. Заявление мер предварительной защиты (ст. 85 КАС РФ), приостановление высылки. ЮК «Де-Юре».",
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
      "@id": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/obzhalovanie-resheniya-o-deportacii/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Чем депортация отличается от административного выдворения?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Депортация — это внесудебное решение миграционного органа (МВД) о принудительной высылке иностранца при утрате законных оснований для пребывания. Выдворение — это мера административного наказания, назначаемая судом по КоАП РФ."
          }
        },
        {
          "@type": "Question",
          "name": "В какой срок можно обжаловать решение о депортации?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Распоряжение о депортации может быть обжаловано в суд в порядке административного судопроизводства (КАС РФ) в течение 3 месяцев со дня, когда иностранному гражданину стало известно о нарушении его прав."
          }
        },
        {
          "@type": "Question",
          "name": "Как не допустить высылки во время судебного процесса?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "При подаче административного искового заявления адвокат заявляет ходатайство о применении мер предварительной защиты (ст. 85 КАС РФ) в виде приостановления действия оспариваемого распоряжения МВД до вступления решения суда в силу."
          }
        },
        {
          "@type": "Question",
          "name": "Можно ли отменить депортацию, если в России проживает семья?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да. Наличие супруга, несовершеннолетних детей или нетрудоспособных родителей — граждан РФ является ключевым основанием для признания депортации несоразмерным вмешательством в семейную жизнь (ст. 38 Конституции РФ и правовых позиций Конституционного Суда РФ)."
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
      <ObzhalovanieResheniyaODeportaciiClient />
    </>
  );
}
