import { Metadata } from 'next';
import ObzhalovanieAdministrativnogoVydvoreniyaClient from './ObzhalovanieAdministrativnogoVydvoreniyaClient';

export const metadata: Metadata = {
  title: 'Обжалование административного выдворения в Липецке — адвокат | Де-Юре',
  description: 'Срочное обжалование выдворения в 10-дневный срок по КоАП РФ. Освобождение из ЦВСИГ, апелляция и кассация в Липецке. ЮК «Де-Юре».',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/migracionnyj-yurist/obzhalovanie-administrativnogo-vydvoreniya/',
  },
  openGraph: {
    title: 'Обжалование административного выдворения в Липецке — адвокат | Де-Юре',
    description: 'Срочное обжалование выдворения в 10-дневный срок по КоАП РФ. Освобождение из ЦВСИГ, апелляция и кассация в Липецке. ЮК «Де-Юре».',
    url: 'https://dejure-help.ru/grazhdanam/migracionnyj-yurist/obzhalovanie-administrativnogo-vydvoreniya/',
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/migracionnyj-yurist.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Обжалование постановления об административном выдворении — ЮК «Де-Юре»',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://dejure-help.ru/images/og/migracionnyj-yurist.jpg'],
  },
};

export default function ObzhalovanieVydvoreniyaPage() {
  const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/obzhalovanie-administrativnogo-vydvoreniya/#webpage",
      "url": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/obzhalovanie-administrativnogo-vydvoreniya/",
      "name": "Обжалование административного выдворения в Липецке — адвокат | Де-Юре",
      "description": "Срочное обжалование выдворения в 10-дневный срок по КоАП РФ. Освобождение из ЦВСИГ, апелляция и кассация в Липецке. ЮК «Де-Юре».",
      "isPartOf": {
        "@id": "https://dejure-help.ru/#website"
      },
      "breadcrumb": {
        "@id": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/obzhalovanie-administrativnogo-vydvoreniya/#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/obzhalovanie-administrativnogo-vydvoreniya/#service"
      },
      "about": {
        "@id": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/obzhalovanie-administrativnogo-vydvoreniya/#service"
      },
      "mentions": {
        "@id": "https://dejure-help.ru/specialisty/konopkin-dmitriy-sergeevich/#person"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/obzhalovanie-administrativnogo-vydvoreniya/#breadcrumb",
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
          "name": "Обжалование выдворения",
          "item": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/obzhalovanie-administrativnogo-vydvoreniya/"
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
      "@id": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/obzhalovanie-administrativnogo-vydvoreniya/#service",
      "name": "Обжалование постановления об административном выдворении",
      "description": "Срочное обжалование выдворения в 10-дневный срок по КоАП РФ. Освобождение из ЦВСИГ, апелляция и кассация в Липецке. ЮК «Де-Юре».",
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
      "@id": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/obzhalovanie-administrativnogo-vydvoreniya/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Сколько времени даётся на обжалование выдворения?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "По общему правилу жалоба на постановление суда по делу об административном правонарушении подаётся в течение 10 суток со дня вручения или получения копии постановления (ст. 30.3 КоАП РФ)."
          }
        },
        {
          "@type": "Question",
          "name": "Можно ли восстановить пропущенный 10-дневный срок обжалования?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да, закон допускает восстановление срока судьёй при наличии уважительных причин (болезнь, отсутствие перевода, неизвещение, позднее вручение копии постановления)."
          }
        },
        {
          "@type": "Question",
          "name": "Приостанавливает ли подача жалобы исполнение выдворения?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да. Жалоба, поданная в установленный срок на не вступившее в силу постановление, препятствует его вступлению в силу до рассмотрения жалобы. При этом помещение и дальнейшее содержание в ЦВСИГ регулируются отдельным судебным актом и требуют самостоятельной проверки."
          }
        },
        {
          "@type": "Question",
          "name": "Чем самостоятельный контролируемый выезд отличается от принудительного?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "При самостоятельном выезде иностранец обязан покинуть РФ за свой счёт в течение 5 дней после вступления акта в силу. При принудительном — человека помещают в ЦВСИГ до высылки под конвоем."
          }
        },
        {
          "@type": "Question",
          "name": "Какой срок запрета на въезд влечёт выдворение?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Административное выдворение влечёт автоматический запрет на въезд в Российскую Федерацию сроком на 5 лет (а при повторном нарушении — на 10 лет)."
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
      <ObzhalovanieAdministrativnogoVydvoreniyaClient />
    </>
  );
}
