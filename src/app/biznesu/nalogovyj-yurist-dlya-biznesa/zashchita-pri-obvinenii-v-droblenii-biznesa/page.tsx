import { Metadata } from 'next';
import ZashchitaPriDrobleniiClient from './ZashchitaPriDrobleniiClient';

export const metadata: Metadata = {
  title: 'Защита при обвинении в дроблении бизнеса в Липецке | Де-Юре',
  description: 'Помощь бизнесу при претензиях ФНС о дроблении: анализ признаков и доказательств, сопровождение проверки, возражения, жалоба в УФНС и арбитражный спор. 📞 +7 (4742) 20-15-25.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Защита при обвинении в дроблении бизнеса в Липецке | Де-Юре',
    description: 'Помощь бизнесу при претензиях ФНС о дроблении: анализ признаков и доказательств, сопровождение проверки, возражения, жалоба в УФНС и арбитражный спор. 📞 +7 (4742) 20-15-25.',
    url: 'https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/zashchita-pri-obvinenii-v-droblenii-biznesa/',
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/zashchita-pri-obvinenii-v-droblenii-biznesa-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Защита при обвинении в дроблении бизнеса в Липецке',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Защита при обвинении в дроблении бизнеса в Липецке | Де-Юре',
    description: 'Помощь бизнесу при претензиях ФНС о дроблении: анализ признаков и доказательств, сопровождение проверки, возражения, жалоба в УФНС и арбитражный спор. 📞 +7 (4742) 20-15-25.',
    images: ['https://dejure-help.ru/images/og/zashchita-pri-obvinenii-v-droblenii-biznesa-og.jpg'],
  },
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/zashchita-pri-obvinenii-v-droblenii-biznesa/',
  },
};

export default function ZashchitaPriDrobleniiPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LegalService',
        '@id': 'https://dejure-help.ru/#organization',
        name: 'Юридическая компания «Де-Юре»',
        url: 'https://dejure-help.ru/',
        telephone: '+7 (4742) 20-15-25',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'ул. Советская, д. 35, оф. 213',
          addressLocality: 'Липецк',
          addressRegion: 'Липецкая область',
          addressCountry: 'RU'
        },
        employee: {
          '@id': 'https://dejure-help.ru/specialisty/bobkin-arkadiy-evgenevich/#person'
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/zashchita-pri-obvinenii-v-droblenii-biznesa/#breadcrumbs',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Главная',
            item: 'https://dejure-help.ru/'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Бизнесу',
            item: 'https://dejure-help.ru/biznesu/'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Налоговый юрист для бизнеса',
            item: 'https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/'
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Защита при дроблении бизнеса',
            item: 'https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/zashchita-pri-obvinenii-v-droblenii-biznesa/'
          }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/zashchita-pri-obvinenii-v-droblenii-biznesa/#service',
        name: 'Защита при обвинении в дроблении бизнеса в Липецке',
        description: 'Помощь бизнесу при претензиях ФНС о дроблении: анализ признаков и доказательств, сопровождение проверки, возражения, жалоба в УФНС и арбитражный спор. 📞 +7 (4742) 20-15-25.',
        url: 'https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/zashchita-pri-obvinenii-v-droblenii-biznesa/',
        provider: {
          '@id': 'https://dejure-help.ru/#organization'
        },
        areaServed: {
          '@type': 'AdministrativeArea',
          name: 'Липецк и Липецкая область'
        }
      },
      {
            "@type": "FAQPage",
            "@id": "https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/zashchita-pri-obvinenii-v-droblenii-biznesa/#faq",
            "mainEntity": [
                  {
                        "@type": "Question",
                        "name": "Что считается законным разделением бизнеса, а что незаконным дроблением?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Законное разделение бизнеса обусловлено реальной деловой целью (разные виды деятельности, лицензирование, территориальная экспансия, разделение рисков). Незаконное дробление преследует исключительно получение необоснованной налоговой выгоды за счет сохранения льготных спецрежимов (УСН, ПСН)."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Является ли наличие родственников среди директоров признаком дробления?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Взаимозависимость лиц (включая супругов, родителей и детей по ст. 105.1 НК РФ) сама по себе не является доказательством дробления. Верховный Суд РФ неоднократно подчеркивал, что взаимозависимость имеет значение только в совокупности с доказательствами несамостоятельности участников (общий счет, общий штат, единый орган управления)."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Как работает налоговая амнистия по дроблению бизнеса в 2025–2026 годах?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Механизм позволяет прекратить обязанность по уплате связанных с дроблением налогов, пеней и штрафов за 2022–2024 годы при соблюдении установленных законом условий добровольного отказа от дробления в 2025–2026 годах. Проверим применимость амнистии к конкретной ситуации и определим действия, необходимые для её использования."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Обязана ли ФНС учитывать налоги, уплаченные на УСН, при консолидации доходов?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Да. Согласно утвержденной судебной практике ВС РФ, инспекция обязана уменьшить сумму доначисленного налога на прибыль и НДС на суммы налогов, которые уже были фактически уплачены участниками схемы по упрощенной системе налогообложения."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Могут ли арестовать личное имущество учредителей при претензиях по дроблению?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Да. Налоговые органы активно используют механизмы пп. 2 п. 2 ст. 45 НК РФ (взыскание задолженности с взаимозависимых лиц) и привлекают фактических бенефициаров к субсидиарной ответственности в порядке банкротства."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Как доказать реальную самостоятельность компаний группы?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Необходимо предоставить документы, подтверждающие раздельное несение расходов: договоры аренды независимых офисов/складов, раздельные кассовые аппараты, собственный штат сотрудников с трудовыми договорами, независимые договоры с контрагентами и раздельное управление счетами."
                        }
                  }
            ]
      },
      {
        "@type": "Person",
        "@id": "https://dejure-help.ru/specialisty/bobkin-arkadiy-evgenevich/#person",
        "name": "Аркадий Евгеньевич Бобкин",
        "url": "https://dejure-help.ru/specialisty/bobkin-arkadiy-evgenevich/",
        "jobTitle": "Директор, управляющий партнёр ЮК «Де-Юре»",
        "worksFor": {
                "@id": "https://dejure-help.ru/#organization"
        }
}
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ZashchitaPriDrobleniiClient />
    </>
  );
}
