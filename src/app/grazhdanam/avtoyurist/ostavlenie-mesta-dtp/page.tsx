import { Metadata } from 'next';
import OstavlenieMestaDtpClient from './OstavlenieMestaDtpClient';

export const metadata: Metadata = {
  title: 'Адвокат при оставлении места ДТП в Липецке | Де-Юре',
  description: 'Защита по ч. 2 ст. 12.27 КоАП РФ в Липецке: анализ материалов и видеозаписей, подготовка позиции, участие в суде и обжалование. Адвокат Дмитрий Конопкин.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Защита при оставлении места ДТП | Де-Юре',
    description: 'Проверим обстоятельства, доказательства умысла и соблюдение процедуры, подготовим защиту в суде или при обжаловании.',
    url: 'https://dejure-help.ru/grazhdanam/avtoyurist/ostavlenie-mesta-dtp/',
    siteName: 'ЮК «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/avtoyurist/ostavlenie-mesta-dtp/',
  },
};

export default function OstavlenieMestaDtpPage() {
  const faqs = [
    {
      q: 'Что считается оставлением места ДТП?',
      a: 'Это умышленное оставление водителем в нарушение ПДД места происшествия, участником которого он являлся, до надлежащего оформления. Для квалификации проверяются конкретные факты, а не только то, что автомобиль переместился.'
    },
    {
      q: 'Что грозит по части 2 статьи 12.27 КоАП РФ?',
      a: 'По редакции, проверенной 11 августа 2026 года, предусмотрено лишение права управления на срок от одного года до полутора лет либо административный арест до пятнадцати суток. Перед публикацией и при каждом обновлении норму нужно перепроверять.'
    },
    {
      q: 'Если я не заметил ДТП, могут ли лишить прав?',
      a: 'Умышленная форма вины является обязательным элементом состава. Однако одного заявления «не заметил» недостаточно: оцениваются повреждения, характер контакта, обзор, шум, габариты автомобиля, видео, показания и действия водителя.'
    },
    {
      q: 'Можно ли отъехать, чтобы освободить дорогу?',
      a: 'ПДД в определённых случаях обязывают освободить проезжую часть, предварительно зафиксировав положение автомобилей, следы и повреждения. Важно отличать необходимое перемещение от фактического ухода от оформления.'
    },
    {
      q: 'Можно ли уехать, если второй участник не имеет претензий?',
      a: 'Только отсутствие претензий не заменяет предусмотренный законом порядок оформления. Оставить место можно, когда выполнены условия оформления без полиции либо получены соответствующие указания сотрудника полиции.'
    },
    {
      q: 'Что делать, если вызвали в ГИБДД?',
      a: 'Уточните подразделение, должностное лицо, номер материала и свой процессуальный статус. Получите юридическую консультацию до подробных объяснений, сохраните доказательства и не игнорируйте вызов.'
    },
    {
      q: 'Поможет ли возвращение на место ДТП?',
      a: 'Возвращение и последующие действия учитываются вместе с другими обстоятельствами, но не гарантируют отсутствия состава. Важны время, причины отъезда, сохранение доказательств и поведение участника.'
    },
    {
      q: 'Можно ли заменить лишение штрафом?',
      a: 'Часть 2 статьи 12.27 КоАП РФ не предусматривает штраф как альтернативную санкцию. Защита не должна строиться на обещании такой замены. Возможная переквалификация зависит от установленных фактов и правовой оценки.'
    },
    {
      q: 'Если постановление уже вынесено, сколько времени на жалобу?',
      a: 'Жалоба обычно подаётся в течение десяти дней со дня вручения или получения копии постановления. Пропущенный срок может быть восстановлен при наличии оснований, которые нужно подтвердить.'
    },
    {
      q: 'Нужно ли личное участие, если есть адвокат?',
      a: 'Это зависит от стадии, позиции и решения суда. Адвокат может представлять интересы и заявлять ходатайства, но в отдельных ситуациях личные объяснения необходимы или целесообразны.'
    }
  ];

  const jsonLdGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LegalService',
        '@id': 'https://dejure-help.ru/#organization',
        name: 'ЮК «Де-Юре»',
        url: 'https://dejure-help.ru/',
        logo: 'https://dejure-help.ru/images/logo.png',
        telephone: '+7 (910) 350-31-11',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'ул. Советская, д. 35',
          addressLocality: 'Липецк',
          addressRegion: 'Липецкая область',
          addressCountry: 'RU'
        }
      },
      {
        '@type': 'Person',
        '@id': 'https://dejure-help.ru/specialisty/konopkin-dmitriy-sergeevich/#person',
        name: 'Дмитрий Сергеевич Конопкин',
        jobTitle: 'Адвокат, председатель Коллегии адвокатов «Де-Юре»',
        url: 'https://dejure-help.ru/specialisty/konopkin-dmitriy-sergeevich/'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/grazhdanam/avtoyurist/ostavlenie-mesta-dtp/#breadcrumbs',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://dejure-help.ru/' },
          { '@type': 'ListItem', position: 2, name: 'Гражданам', item: 'https://dejure-help.ru/grazhdanam/' },
          { '@type': 'ListItem', position: 3, name: 'Автоюрист', item: 'https://dejure-help.ru/grazhdanam/avtoyurist/' },
          { '@type': 'ListItem', position: 4, name: 'Защита при оставлении места ДТП', item: 'https://dejure-help.ru/grazhdanam/avtoyurist/ostavlenie-mesta-dtp/' },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': 'https://dejure-help.ru/grazhdanam/avtoyurist/ostavlenie-mesta-dtp/#webpage',
        name: 'Адвокат при оставлении места ДТП в Липецке | Де-Юре',
        description: 'Защита по ч. 2 ст. 12.27 КоАП РФ в Липецке: анализ материалов и видеозаписей, подготовка позиции, участие в суде и обжалование. Адвокат Дмитрий Конопкин.',
        url: 'https://dejure-help.ru/grazhdanam/avtoyurist/ostavlenie-mesta-dtp/',
        about: {
          '@id': 'https://dejure-help.ru/grazhdanam/avtoyurist/ostavlenie-mesta-dtp/#service'
        }
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/grazhdanam/avtoyurist/ostavlenie-mesta-dtp/#service',
        name: 'Защита при оставлении места ДТП',
        serviceType: 'Юридическая помощь по делам об оставлении места дорожно-транспортного происшествия',
        description: 'Защита по части 2 статьи 12.27 КоАП РФ в Липецке: проверка умысла, анализ видео и повреждений, подготовка позиции для ГИБДД и суда.',
        url: 'https://dejure-help.ru/grazhdanam/avtoyurist/ostavlenie-mesta-dtp/',
        provider: {
          '@id': 'https://dejure-help.ru/#organization'
        },
        areaServed: [
          {
            '@type': 'AdministrativeArea',
            name: 'Липецкая область'
          },
          {
            '@type': 'Country',
            name: 'Россия'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/grazhdanam/avtoyurist/ostavlenie-mesta-dtp/#faq',
        mainEntity: faqs.map(faq => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a
          }
        }))
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />
      <OstavlenieMestaDtpClient />
    </>
  );
}
