import { Metadata } from 'next';
import SnyatieArestaAvtoClient from './SnyatieArestaAvtoClient';

export const metadata: Metadata = {
  title: 'Снятие ареста с автомобиля приставами в Липецке | Де-Юре',
  description: 'Поможем снять арест с автомобиля или запрет регистрационных действий: проверим основания, подготовим обращение приставу, жалобу или иск.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Снятие ареста и запрета с автомобиля | Де-Юре',
    description: 'Проверим ограничения на автомобиль и выберем правовой маршрут: обращение к приставу, жалоба или судебное освобождение имущества.',
    url: 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/snyatie-aresta-s-avtomobilya/',
    siteName: 'ЮК «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/snyatie-aresta-s-avtomobilya/',
  },
};

export default function SnyatieArestaAvtoPage() {
  const faqs = [
    {
      q: 'Чем запрет регистрационных действий отличается от ареста?',
      a: 'Запрет препятствует изменению регистрационных данных. Арест имущества — более широкая мера: он включает запрет распоряжаться машиной, а при необходимости может ограничивать пользование и сопровождаться описью или изъятием.'
    },
    {
      q: 'Снимется ли запрет автоматически после оплаты долга?',
      a: 'Не всегда. Пристав должен вынести постановление об отмене меры и направить его в регистрационный орган. Кроме того, на автомобиле могут оставаться другие запреты.'
    },
    {
      q: 'Можно ли ездить на автомобиле с запретом регистрации?',
      a: 'Сам по себе регистрационный запрет не всегда означает запрет эксплуатации. Но нужно проверить точный вид меры: при аресте пристав может отдельно ограничить пользование или изъять автомобиль.'
    },
    {
      q: 'Что делать, если я купил машину до появления запрета?',
      a: 'Соберите договор, документы об оплате и передаче автомобиля. Если пристав не снимает ограничение из-за спора о принадлежности, может потребоваться иск об освобождении имущества от ареста.'
    },
    {
      q: 'А если автомобиль куплен уже после запрета?',
      a: 'Перспектива снятия существенно хуже и зависит от обстоятельств сделки. Необходимо оценить требования к продавцу, возможность расторжения договора или взыскания убытков.'
    },
    {
      q: 'Куда подавать заявление о снятии запрета?',
      a: 'Сначала определяется орган и должностное лицо, вынесшее конкретное постановление. Обращение не следует направлять наугад только в Госавтоинспекцию: она исполняет поступившее ограничение.'
    },
    {
      q: 'Можно ли снять запрет без суда?',
      a: 'Да, если основание бесспорно и пристав вправе отменить постановление. При споре о собственности автомобиля часто требуется исковой порядок.'
    },
    {
      q: 'Сколько времени занимает снятие ограничения?',
      a: 'Единого срока результата нет. Время зависит от основания, количества запретов, необходимости обжалования и фактического обмена сведениями между органами.'
    },
    {
      q: 'Нужно ли оплачивать чужой долг, чтобы зарегистрировать машину?',
      a: 'Не следует платить чужой долг без анализа документов. Сначала нужно установить дату запрета и основания защиты права покупателя.'
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
        '@id': 'https://dejure-help.ru/specialisty/smolyaninova-marina-valerevna/#person',
        name: 'Марина Валерьевна Смольянинова',
        jobTitle: 'Ведущий юрист',
        url: 'https://dejure-help.ru/specialisty/smolyaninova-marina-valerevna/',
        worksFor: {
          '@id': 'https://dejure-help.ru/#organization'
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/snyatie-aresta-s-avtomobilya/#breadcrumbs',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://dejure-help.ru/' },
          { '@type': 'ListItem', position: 2, name: 'Гражданам', item: 'https://dejure-help.ru/grazhdanam/' },
          { '@type': 'ListItem', position: 3, name: 'Юрист по исполнительному производству', item: 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/' },
          { '@type': 'ListItem', position: 4, name: 'Снятие ареста с автомобиля', item: 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/snyatie-aresta-s-avtomobilya/' },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/snyatie-aresta-s-avtomobilya/#webpage',
        name: 'Снятие ареста с автомобиля приставами в Липецке | Де-Юре',
        description: 'Поможем снять арест с автомобиля или запрет регистрационных действий: проверим основания, подготовим обращение приставу, жалобу или иск.',
        url: 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/snyatie-aresta-s-avtomobilya/',
        about: {
          '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/snyatie-aresta-s-avtomobilya/#service'
        }
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/snyatie-aresta-s-avtomobilya/#service',
        name: 'Снятие ареста с автомобиля и запрета на регистрационные действия',
        description: 'Проверка ограничений, подготовка заявлений приставу, жалоб и исков об освобождении автомобиля от ареста в Липецке и по России.',
        url: 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/snyatie-aresta-s-avtomobilya/',
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
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/snyatie-aresta-s-avtomobilya/#faq',
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
      <SnyatieArestaAvtoClient />
    </>
  );
}
