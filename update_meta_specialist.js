const fs = require('fs');

// 1. Update page.tsx with Russian Cyrillic Metadata
const pageFile = 'src/app/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/page.tsx';
const pageContent = `import { Metadata } from 'next';
import IspolnitelnoeClient from './IspolnitelnoeClient';

export const metadata: Metadata = {
  title: 'Исполнительное производство для бизнеса в Липецке | ЮК «Де-Юре»',
  description: 'Юридическое сопровождение исполнительного производства для организаций: взыскание по исполнительным документам, работа с ФССП и защита бизнеса от незаконных мер. Липецк и область.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Исполнительное производство для бизнеса — ЮК «Де-Юре»',
    description: 'Юридическое сопровождение исполнительного производства для организаций: взыскание по исполнительным документам, работа с ФССП и защита бизнеса от незаконных мер.',
    url: 'https://dejure-help.ru/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/',
    siteName: 'ЮК «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/',
  },
};

export default function IspolnitelnoeProizvodstvoPage() {
  const jsonLd = [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://dejure-help.ru/' },
        { '@type': 'ListItem', position: 2, name: 'Бизнесу', item: 'https://dejure-help.ru/biznesu/' },
        { '@type': 'ListItem', position: 3, name: 'Исполнительное производство для бизнеса', item: 'https://dejure-help.ru/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/' },
      ],
    },
    {
      '@type': 'WebPage',
      name: 'Исполнительное производство для бизнеса в Липецке | ЮК «Де-Юре»',
      description: 'Юридическое сопровождение исполнительного производства для организаций: взыскание по исполнительным документам, работа с ФССП и защита бизнеса от незаконных мер.',
      url: 'https://dejure-help.ru/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/',
    },
    {
      '@type': 'Service',
      name: 'Исполнительное производство для бизнеса',
      description: 'Юридическое сопровождение исполнительного производства для организаций: взыскание по исполнительным листам, обжалование действий приставов, защита должника.',
      provider: {
        '@type': 'LegalService',
        name: 'ЮК «Де-Юре»',
        url: 'https://dejure-help.ru/',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'пл. Плеханова, д. 1, оф. 213',
          addressLocality: 'Липецк',
          addressCountry: 'RU',
        },
      },
      areaServed: 'Липецк и Липецкая область',
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': jsonLd }),
        }}
      />
      <IspolnitelnoeClient />
    </>
  );
}
`;

fs.writeFileSync(pageFile, pageContent, 'utf-8');

// 2. Update IspolnitelnoeClient.tsx with profile link for Smolyaninova
const clientFile = 'src/app/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/IspolnitelnoeClient.tsx';
let clientContent = fs.readFileSync(clientFile, 'utf-8');

const oldSpecialist = /\{\/\* BLOK 6: KURATOR \*\/\}[\s\S]*?<CasesBlock/m;
const newSpecialist = `{/* BLOK 6: KURATOR */}
      <SpecialistBlock
        title="Куратор направления"
        name="Марина Валерьевна Смольянинова"
        position="Ведущий юрист ЮК «Де-Юре»"
        imageUrl="/images/smolyaninova.jpg"
        profileHref="/specialisty/smolyaninova-marina-valerevna/"
        profileText="Подробнее о Марине Валерьевне Смольяниновой →"
        description={[
          '13 лет в Федеральной службе судебных приставов: знает систему изнутри — понимает, какие инструменты реально работают, а какие создают только видимость.',
          'Специализируется на исполнительном производстве с участием организаций: взыскание по исполнительным листам, защита имущества должника, обжалование действий приставов.',
          'Опыт работы с многоуровневыми производствами: несколько взыскателей, оспаривание постановлений в арбитражном суде, ходатайства об отсрочке и рассрочке исполнения.',
          'Сопровождает компании в Липецке и Липецкой области; возможен дистанционный формат работы по всей России.',
        ]}
        buttonText="Обсудить ситуацию с Мариной Валерьевной"
        buttonHref="#form"
      />

      {/* BLOK 7: KEYSY */}
      <CasesBlock`;

clientContent = clientContent.replace(oldSpecialist, newSpecialist);
fs.writeFileSync(clientFile, clientContent, 'utf-8');
console.log('page.tsx metadata and SpecialistBlock profile link updated successfully');
