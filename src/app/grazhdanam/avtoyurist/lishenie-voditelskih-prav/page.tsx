import type { Metadata } from 'next';
import LisheniePravClient from './LisheniePravClient';

export const metadata: Metadata = {
  title: 'Адвокат при лишении водительских прав в Липецке | Де-Юре',
  description: 'Защита при риске лишения водительских прав в Липецке: анализ протокола и доказательств, позиция для суда, ходатайства и обжалование постановления. Адвокат Дмитрий Конопкин.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/avtoyurist/lishenie-voditelskih-prav/',
  },
  openGraph: {
    title: 'Защита при лишении водительских прав | Де-Юре',
    description: 'Проверим материалы дела, оценим процессуальные нарушения и подготовим защиту в суде или при обжаловании.',
    url: 'https://dejure-help.ru/grazhdanam/avtoyurist/lishenie-voditelskih-prav/',
    siteName: 'ЮК Де-Юре',
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function LisheniePravPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/grazhdanam/avtoyurist/lishenie-voditelskih-prav/#service',
        name: 'Защита при лишении водительских прав',
        serviceType: 'Юридическая помощь по делам о лишении права управления транспортными средствами',
        areaServed: [
          {
            '@type': 'AdministrativeArea',
            name: 'Липецкая область'
          },
          {
            '@type': 'Country',
            name: 'Россия'
          }
        ],
        provider: {
          '@id': 'https://dejure-help.ru/#organization'
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/grazhdanam/avtoyurist/lishenie-voditelskih-prav/#breadcrumbs',
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
            name: 'Гражданам',
            item: 'https://dejure-help.ru/grazhdanam/'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Автоюрист',
            item: 'https://dejure-help.ru/grazhdanam/avtoyurist/'
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Защита при лишении водительских прав',
            item: 'https://dejure-help.ru/grazhdanam/avtoyurist/lishenie-voditelskih-prav/'
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
      <LisheniePravClient />
    </>
  );
}
