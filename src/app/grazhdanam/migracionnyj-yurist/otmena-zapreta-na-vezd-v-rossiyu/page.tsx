import { Metadata } from 'next';
import OtmenaZapretaNaVezdVRossiyuClient from './OtmenaZapretaNaVezdVRossiyuClient';

export const metadata: Metadata = {
  title: 'Отмена запрета на въезд в Россию в Липецке — миграционный адвокат | Де-Юре',
  description: 'Снятие запрета и неразрешения на въезд в РФ: проверка по базам МВД/ФСБ, досудебное и судебное обжалование, защита семьи. ЮК «Де-Юре».',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/migracionnyj-yurist/otmena-zapreta-na-vezd-v-rossiyu/',
  },
  openGraph: {
    title: 'Отмена запрета на въезд в Россию в Липецке — миграционный адвокат | Де-Юре',
    description: 'Снятие запрета и неразрешения на въезд в РФ: проверка по базам МВД/ФСБ, досудебное и судебное обжалование, защита семьи. ЮК «Де-Юре».',
    url: 'https://dejure-help.ru/grazhdanam/migracionnyj-yurist/otmena-zapreta-na-vezd-v-rossiyu/',
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

export default function OtmenaZapretaPage() {
  const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/otmena-zapreta-na-vezd-v-rossiyu/#webpage",
      "url": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/otmena-zapreta-na-vezd-v-rossiyu/",
      "name": "Отмена запрета на въезд в Россию в Липецке — миграционный адвокат | Де-Юре",
      "description": "Снятие запрета и неразрешения на въезд в РФ: проверка по базам МВД/ФСБ, досудебное и судебное обжалование, защита семьи. ЮК «Де-Юре».",
      "isPartOf": {
        "@id": "https://dejure-help.ru/#website"
      },
      "breadcrumb": {
        "@id": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/otmena-zapreta-na-vezd-v-rossiyu/#breadcrumb"
      },
      "about": {
        "@id": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/otmena-zapreta-na-vezd-v-rossiyu/#service"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/otmena-zapreta-na-vezd-v-rossiyu/#breadcrumb",
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
          "name": "Отмена запрета на въезд",
          "item": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/otmena-zapreta-na-vezd-v-rossiyu/"
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
      "@id": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/otmena-zapreta-na-vezd-v-rossiyu/#service",
      "name": "Отмена запрета на въезд в Российскую Федерацию",
      "description": "Снятие запрета и неразрешения на въезд в РФ: проверка по базам МВД/ФСБ, досудебное и судебное обжалование, защита семьи. ЮК «Де-Юре».",
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
      "@id": "https://dejure-help.ru/grazhdanam/migracionnyj-yurist/otmena-zapreta-na-vezd-v-rossiyu/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Как узнать, кем и на какой срок наложен запрет на въезд?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Официальный и надёжный способ — направление адвокатского запроса в Главное управление по вопросам миграции МВД России и Пограничную службу ФСБ РФ. Проверка через неофициальные базы часто выдаёт устаревшие сведения."
          }
        },
        {
          "@type": "Question",
          "name": "Можно ли отменить запрет, если иностранный гражданин находится за границей?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Значительную часть работы можно организовать дистанционно: получить решение, изучить документы, подготовить обращение или иск. В зависимости от органа, процессуального действия и позиции суда могут потребоваться доверенность, дополнительные документы или личное участие доверителя. Точный порядок определяется после изучения ситуации."
          }
        },
        {
          "@type": "Question",
          "name": "Сколько времени занимает отмена запрета через суд?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Единого срока отмены запрета нет. Он зависит от получения официального решения и материалов, выбранного административного или судебного порядка, подсудности, необходимости обжалования и наличия других ограничений. После отмены решения отдельно проверяется обновление сведений в ведомственных базах."
          }
        },
        {
          "@type": "Question",
          "name": "Чем результат справочной онлайн-проверки отличается от официального решения?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Онлайн-сервисы носят исключительно справочный характер, могут отображать неполные или устаревшие сведения и не содержат мотивированных оснований, органа-инициатора и реквизитов акта. Для юридических действий и обжалования требуется официальный ответ ведомства либо судебное решение."
          }
        },
        {
          "@type": "Question",
          "name": "Обязательно ли сначала обращаться в МВД или другое ведомство?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Зависит от органа-инициатора и конкретного основания запрета. В ряде случаев возможно досудебное обращение в вышестоящий орган, а в других — целесообразно сразу обращаться в суд с административным иском по КАС РФ."
          }
        },
        {
          "@type": "Question",
          "name": "Какие документы нужны для первичной оценки запрета?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Копия паспорта с переводом, миграционная карта, уведомление о неразрешении въезда (при наличии) и документы, подтверждающие семейные связи, очное обучение, лечение или трудовую деятельность в России."
          }
        },
        {
          "@type": "Question",
          "name": "Можно ли покупать билет сразу после отмены решения?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Сразу покупать билет не рекомендуется. После вынесения судебного решения или ведомственного акта об отмене требуется время для направления сведений в Пограничную службу ФСБ РФ и фактической актуализации контрольных списков на пунктах пропуска."
          }
        },
        {
          "@type": "Question",
          "name": "Чем запрет на въезд отличается от выдворения, депортации и нежелательности пребывания?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Запрет — это ограничение въезда по закону № 114-ФЗ; выдворение — мера судебного наказания по КоАП РФ; депортация — принудительная высылка при утрате законных оснований пребывания; нежелательность пребывания — распоряжение уполномоченного ведомства, влекущее длительное или бессрочное ограничение."
          }
        },
        {
          "@type": "Question",
          "name": "Гарантирует ли брак с гражданином РФ 100% отмену запрета?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Брак является сильнейшим аргументом, но суд оценивает добросовестность, совместное проживание, отсутствие фиктивности и тяжесть нарушений. Грамотно сформированная доказательная база существенно повышает шансы на успех."
          }
        },
        {
          "@type": "Question",
          "name": "Что делать, если запрет наложен из-за неоплаченных штрафов?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Необходимо оперативно оплатить все задолженности, получить квитанции с отметкой банка и приложить их к досудебной жалобе в МВД или административному иску вместе с доказательствами тесной связи с Россией."
          }
        },
        {
          "@type": "Question",
          "name": "Можно ли въехать в Россию, пока идёт судебный процесс?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "До отмены решения и обновления контрольных списков погранслужбы въезд в РФ закрыт. Попытка нелегального пересечения границы влечёт уголовную ответственность по ст. 322 УК РФ."
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
      <OtmenaZapretaNaVezdVRossiyuClient />
    </>
  );
}
