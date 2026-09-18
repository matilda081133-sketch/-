import { Metadata } from 'next';
import ZashchitaPriDrobleniiClient from './ZashchitaPriDrobleniiClient';

export const metadata: Metadata = {
  title: 'Защита при обвинении в дроблении бизнеса в Липецке | Де-Юре',
  description:
    'Помощь бизнесу при претензиях ФНС о дроблении: анализ признаков и доказательств, сопровождение проверки, возражения, жалоба в УФНС и арбитражный спор.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Защита при обвинении в дроблении бизнеса в Липецке | Де-Юре',
    description:
      'Помощь бизнесу при претензиях ФНС о дроблении: анализ признаков и доказательств, сопровождение проверки, возражения, жалоба в УФНС и арбитражный спор.',
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
    description:
      'Помощь бизнесу при претензиях ФНС о дроблении: анализ признаков и доказательств, сопровождение проверки, возражения, жалоба в УФНС и арбитражный спор.',
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
        description:
          'Помощь бизнесу при претензиях ФНС о дроблении: анализ признаков и доказательств, сопровождение проверки, возражения, жалоба в УФНС и арбитражный спор.',
        url: 'https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/zashchita-pri-obvinenii-v-droblenii-biznesa/',
        provider: {
          '@id': 'https://dejure-help.ru/#organization'
        },
        areaServed: {
          '@type': 'AdministrativeArea',
          name: 'Липецк и Липецкая область'
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
