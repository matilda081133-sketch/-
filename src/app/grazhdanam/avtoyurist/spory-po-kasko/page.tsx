import { Metadata } from 'next';
import SporyPoKaskoClient from './SporyPoKaskoClient';

export const metadata: Metadata = {
  title: 'Юрист по спорам со страховой по КАСКО в Липецке | Де-Юре',
  description: 'Помощь при отказе, недоплате и проблемах с ремонтом по КАСКО: анализ полиса и правил, претензия, финансовый уполномоченный и суд.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/avtoyurist/spory-po-kasko/',
  },
  openGraph: {
    title: 'Споры по КАСКО — юридическая помощь | Де-Юре',
    description: 'Проверим договор, правила и основания решения страховой, подготовим требования и представим Ваши интересы.',
    url: 'https://dejure-help.ru/grazhdanam/avtoyurist/spory-po-kasko/',
    siteName: 'Юридическая компания «Де-Юре»',
    images: [{ url: 'https://dejure-help.ru/images/konopkin.jpg', width: 1200, height: 630 }],
    locale: 'ru_RU',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'Страховая отказала в выплате по КАСКО. Что делать?',
    a: 'Получите письменный отказ, сохраните полис и правила нужной редакции, заявление и доказательства события. Основание нужно сопоставить с договором и фактами, после чего определяется содержание заявления страховщику.'
  },
  {
    q: 'Все ли условия правил КАСКО обязательны?',
    a: 'Проверяется ссылка на правила в полисе, их предоставление страхователю, редакция и согласование условий. Одного упоминания пункта в отказе недостаточно для оценки.'
  },
  {
    q: 'Можно ли сразу обратиться в суд?',
    a: 'Если спор потребительский и подпадает под компетенцию финансового уполномоченного, сначала необходимы обращение к страховщику и досудебное рассмотрение. При сумме свыше установленного лимита или ином статусе маршрут может отличаться.'
  },
  {
    q: 'Когда нужна независимая экспертиза?',
    a: 'Когда требуются специальные знания о повреждениях, стоимости ремонта, качестве работ, полной гибели или остатках. Момент и вопросы эксперту определяются после проверки осмотра и условий договора.'
  },
  {
    q: 'Что делать, если ремонт по КАСКО затягивается?',
    a: 'Сохраните направление, документы СТО, даты передачи автомобиля и переписку. Срок и ответственный за нарушение определяются по договору, правилам и фактической организации ремонта.'
  },
  {
    q: 'Как рассчитывают выплату при полной гибели?',
    a: 'Проверяются страховая сумма, предусмотренная амортизация, критерий полной гибели, предшествующие повреждения и судьба годных остатков. Универсальной формулы для всех полисов нет.'
  },
  {
    q: 'Может ли отсутствие второго ключа повлечь отказ при угоне?',
    a: 'Нужно изучить условия договора, обстоятельства утраты ключа, действия страхователя и правовые основания отказа. Сам по себе бытовой факт нельзя оценить без договора и доказательств.'
  },
  {
    q: 'Можно ли поручить весь спор юристу?',
    a: 'Да. Объём может включать требования страховщику, финансового уполномоченного, экспертизу и суд. Полномочия, участие клиента и внешние расходы фиксируются в договоре.'
  }
];

export default function SporyPoKaskoPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/grazhdanam/avtoyurist/spory-po-kasko/#service',
        'name': 'Споры по КАСКО в Липецке',
        'serviceType': 'Юридическая помощь в спорах по добровольному страхованию автомобилей',
        'areaServed': [
          {
            '@type': 'AdministrativeArea',
            'name': 'Липецкая область'
          },
          {
            '@type': 'Country',
            'name': 'Россия'
          }
        ],
        'provider': {
          '@id': 'https://dejure-help.ru/#organization'
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/grazhdanam/avtoyurist/spory-po-kasko/#breadcrumbs',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Главная',
            'item': 'https://dejure-help.ru/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Гражданам',
            'item': 'https://dejure-help.ru/grazhdanam/'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Автоюрист',
            'item': 'https://dejure-help.ru/grazhdanam/avtoyurist/'
          },
          {
            '@type': 'ListItem',
            'position': 4,
            'name': 'Споры по КАСКО',
            'item': 'https://dejure-help.ru/grazhdanam/avtoyurist/spory-po-kasko/'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/grazhdanam/avtoyurist/spory-po-kasko/#faq',
        'mainEntity': faqs.map((faq) => ({
          '@type': 'Question',
          'name': faq.q,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.a
          }
        }))
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SporyPoKaskoClient />
    </>
  );
}
