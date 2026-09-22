import React from 'react';
import GrazhdanamClient from './GrazhdanamClient';

export const metadata = {
  title: 'Юридические услуги для граждан в Липецке | ЮК «Де-Юре»',
  description: 'Юридическая помощь гражданам в Липецке: консультации, подготовка документов, представительство в государственных органах и суде. ЮК «Де-Юре». 📞 +7 (4742) 20-15-25.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/'
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Юридические услуги для граждан в Липецке | ЮК «Де-Юре»',
    description: 'Юридическая помощь гражданам в Липецке: консультации, подготовка документов, представительство в государственных органах и суде. ЮК «Де-Юре». 📞 +7 (4742) 20-15-25.',
    url: 'https://dejure-help.ru/grazhdanam/',
    siteName: 'ЮК «Де-Юре»',
    images: [
      {
        url: 'https://dejure-help.ru/images/og-main.jpg',
        width: 1200,
        height: 630,
        alt: 'Юридическая помощь гражданам в Липецке'
      }
    ],
    locale: 'ru_RU',
    type: 'website'
  }
};

export default function GrazhdanamPage() {
  const jsonLdGraph = [
    {
      "@type": "BreadcrumbList",
      "@id": "https://dejure-help.ru/grazhdanam/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://dejure-help.ru/" },
        { "@type": "ListItem", "position": 2, "name": "Гражданам", "item": "https://dejure-help.ru/grazhdanam/" }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://dejure-help.ru/grazhdanam/#itemlist",
      "name": "Направления юридической помощи гражданам",
      "numberOfItems": 14,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Семейный юрист" },
        { "@type": "ListItem", "position": 2, "name": "Наследственный юрист" },
        { "@type": "ListItem", "position": 3, "name": "Жилищный юрист", "url": "https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/" },
        { "@type": "ListItem", "position": 4, "name": "Юрист по недвижимости" },
        { "@type": "ListItem", "position": 5, "name": "Земельный юрист", "url": "https://dejure-help.ru/grazhdanam/zemelnyj-yurist/" },
        { "@type": "ListItem", "position": 6, "name": "Банкротство физических лиц" },
        { "@type": "ListItem", "position": 7, "name": "Кредитный юрист" },
        { "@type": "ListItem", "position": 8, "name": "Взыскание долгов" },
        { "@type": "ListItem", "position": 9, "name": "Юрист по исполнительному производству" },
        { "@type": "ListItem", "position": 10, "name": "Автоюрист" },
        { "@type": "ListItem", "position": 11, "name": "Трудовой юрист" },
        { "@type": "ListItem", "position": 12, "name": "Адвокат по уголовным делам", "url": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/" },
        { "@type": "ListItem", "position": 13, "name": "Военный юрист", "url": "https://dejure-help.ru/grazhdanam/voennyj-yurist/" },
        { "@type": "ListItem", "position": 14, "name": "Миграционный юрист" }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://dejure-help.ru/grazhdanam/#webpage",
      "url": "https://dejure-help.ru/grazhdanam/",
      "name": "Юридические услуги для граждан в Липецке | ЮК «Де-Юре»",
      "description": "Юридическая помощь гражданам в Липецке: консультации, подготовка документов, представительство в суде. 📞 +7 (4742) 20-15-25.",
      "breadcrumb": { "@id": "https://dejure-help.ru/grazhdanam/#breadcrumb" }
    },
    {
      "@type": "FAQPage",
      "@id": "https://dejure-help.ru/grazhdanam/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Как понять, к какому направлению относится моя ситуация?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Необязательно определять направление самостоятельно. Кратко опишите, что произошло, и мы уточним обстоятельства и подберём специалиста по характеру вопроса."
          }
        },
        {
          "@type": "Question",
          "name": "Можно ли обратиться, если вопрос относится сразу к нескольким направлениям?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да. Такие ситуации встречаются, например, когда спор одновременно затрагивает семейные, наследственные и имущественные вопросы. После первичного разговора определим, какой специалист должен вести дело и в какой последовательности решать задачи."
          }
        },
        {
          "@type": "Question",
          "name": "Какие документы нужны для первой консультации?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Подготовьте документы, которые относятся к ситуации: договоры, решения и определения суда, постановления, уведомления, претензии, переписку и другие имеющиеся материалы. Если вы не уверены, что важно, возьмите всё доступное — после обращения специалист уточнит необходимый перечень."
          }
        },
        {
          "@type": "Question",
          "name": "Можно ли обратиться, если дело уже рассматривается в суде?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да. Сообщите, на какой стадии находится дело и когда назначено ближайшее заседание. Специалист изучит материалы и оценит, какие действия ещё возможны с учётом текущей стадии процесса."
          }
        },
        {
          "@type": "Question",
          "name": "Можно ли обратиться после вынесения решения суда?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да. В зависимости от обстоятельств можно оценить основания для обжалования, восстановления процессуального срока или сопровождения исполнительного производства. В таких вопросах важны сроки, поэтому при обращении сразу укажите дату решения и дату его получения."
          }
        },
        {
          "@type": "Question",
          "name": "Можно ли получить юридическую помощь дистанционно?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да. Консультации можно проводить по телефону или видеосвязи, а документы передавать в электронном виде. Возможность полностью дистанционного ведения конкретного дела зависит от его обстоятельств и необходимых процессуальных действий."
          }
        },
        {
          "@type": "Question",
          "name": "Когда станет известна стоимость юридической помощи?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "После того как специалист уточнит обстоятельства, изучит доступные документы и определит объём необходимых действий. Состав услуг, стоимость и порядок оплаты согласовываются до начала работы."
          }
        }
      ]
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": jsonLdGraph }) }}
      />
      <GrazhdanamClient />
    </>
  );
}
