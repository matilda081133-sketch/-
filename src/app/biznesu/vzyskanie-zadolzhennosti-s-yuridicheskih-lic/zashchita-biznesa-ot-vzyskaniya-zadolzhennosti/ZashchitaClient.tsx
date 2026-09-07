'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MilitaryHero from '@/components/MilitaryHero';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import CasesBlock, { CaseData } from '@/components/CasesBlock';
import SpecialistBlock from '@/components/SpecialistBlock';
import PricingBlock, { PricingTier } from '@/components/PricingBlock';
import ProcessBlock, { ProcessStep } from '@/components/ProcessBlock';

export default function ZashchitaClient() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LegalService',
        '@id': 'https://dejure-help.ru/#organization',
        'name': 'ЮК «Де-Юре»',
        'url': 'https://dejure-help.ru',
        'logo': 'https://dejure-help.ru/images/logo_dark.png',
        'telephone': '+7 (910) 350-31-11',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'ул. Советская, д. 35, оф. 213',
          'addressLocality': 'Липецк',
          'addressRegion': 'Липецкая область',
          'addressCountry': 'RU'
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/zashchita-biznesa-ot-vzyskaniya-zadolzhennosti/#breadcrumbs',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Главная', 'item': 'https://dejure-help.ru/' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Бизнесу', 'item': 'https://dejure-help.ru/biznesu/' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Взыскание задолженности с юридических лиц', 'item': 'https://dejure-help.ru/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/' },
          { '@type': 'ListItem', 'position': 4, 'name': 'Защита бизнеса от взыскания задолженности', 'item': 'https://dejure-help.ru/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/zashchita-biznesa-ot-vzyskaniya-zadolzhennosti/' }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/zashchita-biznesa-ot-vzyskaniya-zadolzhennosti/#service',
        'url': 'https://dejure-help.ru/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/zashchita-biznesa-ot-vzyskaniya-zadolzhennosti/',
        'name': 'Защита бизнеса от взыскания задолженности в Липецке',
        'provider': { '@id': 'https://dejure-help.ru/#organization' },
        'areaServed': [
          { '@type': 'AdministrativeArea', 'name': 'Липецкая область' },
          { '@type': 'Country', 'name': 'Россия' }
        ],
        'description': 'Проверим требования кредитора, расчёт долга и доказательства, подготовим контррасчёт и отзыв на иск, снизим неустойку по ст. 333 ГК РФ, снимем аресты со счетов и защитим компанию в суде.'
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/zashchita-biznesa-ot-vzyskaniya-zadolzhennosti/#faq',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Нужно ли отвечать на претензию контрагента?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Ответ позволяет зафиксировать возражения по объёму и качеству, исключить необоснованные штрафы и предотвратить подачу иска. Срок и порядок ответа определяются договором и законом.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Можно ли не платить, если акт приёмки не подписан?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Отсутствие подписи не освобождает автоматически. Суд оценивает фактическое пользование, переписку, мотивированность отказа от приёмки и встречные доказательства.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Как снизить неустойку и штрафы по ст. 333 ГК РФ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Для предпринимателя снижение неустойки возможно исключительно по мотивированному заявлению ответчика. Требуется контррасчёт и доказательства явной несоразмерности последствиям нарушения.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Что делать, если срок на подачу отзыва на иск почти истёк?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Необходимо срочно изучить карточку дела в арбитраже, подготовить предварительный отзыв и ходатайство об ознакомлении с материалами дела для недопущения заочного решения.'
            }
          },
          {
            '@type': 'Question',
            'name': 'В каких случаях подаётся встречный иск?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Когда у компании есть взаимные денежные требования (недостатки работ, срыв сроков, переплата, неустойка), удовлетворение которых исключает или уменьшает требования истца.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Как снять арест с расчётного счёта компании?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Подаётся ходатайство об отмене или замене обеспечительных мер с доказыванием их несоразмерности, либо вносится встречное обеспечение на депозитный счёт суда.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Если долг реальный, чем поможет юрист?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Исключит неправомерные штрафы и двойную ответственность, согласует график выплат в мировом соглашении и добьётся судебной отсрочки или рассрочки исполнения.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Как получить судебную отсрочку или рассрочку исполнения?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Подаётся заявление по ст. 324 АПК РФ с приложением доказательств временных финансовых затруднений и графика реального погашения задолженности без риска банкротства.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Защищаете ли вы руководство от субсидиарной ответственности?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Да. Своевременная защита компании в суде предотвращает образование искусственной кредиторской задолженности и защищает директора и учредителей от личной финансовой ответственности.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Возможно ли полностью дистанционное сопровождение дела?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Да. Работаем через систему «Мой Арбитр», участвуем в судебных заседаниях онлайн и согласуем процессуальные документы по защищённым каналам связи.'
            }
          }
        ]
      }
    ]
  };

  const situations = [
    {
      tag: 'Претензия',
      title: 'Получена досудебная претензия',
      desc: 'Контрагент требует оплату, начислил штрафы и грозит судом. Проверим обоснованность требований, выявим встречные недостатки и подготовим мотивированный ответ.'
    },
    {
      tag: 'Суд / Иск',
      title: <>Иск уже подан<br />в арбитражный суд</>,
      desc: 'Возбуждено судебное производство, назначено заседание. Составим детальный контррасчёт, мотивированный отзыв на иск и сформируем доказательственную базу защиты.'
    },
    {
      tag: 'Блокировка',
      title: <>Арестованы банковские<br />счета компании</>,
      desc: 'Истец наложил обеспечительные меры, заблокировав расчётные счета. Подготовим ходатайство об отмене или замене обеспечительных мер для разблокировки деятельности.'
    },
    {
      tag: 'Ст. 333 ГК РФ',
      title: <>Несоразмерные штрафы<br />и неустойка</>,
      desc: 'Кредитор начислил штрафы, превышающие размер основного долга. Заявим ходатайство о снижении неустойки по ст. 333 ГК РФ и исключим двойную ответственность.'
    },
    {
      tag: 'Встречный иск',
      title: <>Есть встречные<br />претензии к кредитору</>,
      desc: 'Поставлен бракованный товар, нарушены сроки или не закрыты объёмы. Подготовим встречный иск для зачёта требований либо полного отказа истцу.'
    },
    {
      tag: 'Урегулирование',
      title: <>Необходима рассрочка<br />или мировое соглашение</>,
      desc: 'Долг бесспорный, но единовременная выплата нарушит операционную работу. Проведём переговоры и утвердим мировое соглашение с комфортным графиком выплат.'
    }
  ];

  const urgentItems: { title: React.ReactNode; desc: string }[] = [
    {
      title: <>Срок на подачу отзыва<br />на иск истекает</>,
      desc: 'Пропуск процессуального срока грозит рассмотрением спора без учёта ваших возражений и полным удовлетворением требований истца вместе со штрафами.'
    },
    {
      title: <>Наложен арест<br />на расчётные счета компании</>,
      desc: 'Блокировка счетов парализует расчёты с контрагентами, выплату зарплат и налогов. Требуется срочная подача ходатайства об отмене обеспечительных мер.'
    },
    {
      title: <>Кредитор подал публикацию<br />на Федресурс о банкротстве</>,
      desc: 'Угроза банкротства создаёт критический риск потери контроля над бизнесом и привлечения генерального директора и учредителей к субсидиарной ответственности.'
    }
  ];

  const routes: { tag: string; title: React.ReactNode; desc: string; route: string }[] = [
    {
      tag: 'Претензия',
      title: <>Досудебный контррасчёт<br />и переговоры</>,
      desc: 'Проверяем первичку, исключаем необоснованные суммы и предлагаем кредитору урегулирование без судебных издержек.',
      route: 'Мотивированный ответ на претензию + проект соглашения'
    },
    {
      tag: 'Арбитраж',
      title: <>Судебная защита<br />и встречный иск</>,
      desc: 'Полноценное оспаривание требований в суде, снижение неустойки по ст. 333 ГК РФ, подача встречного иска и защита активов.',
      route: 'Отзыв на иск + контррасчёт + ходатайства + защита в заседаниях'
    },
    {
      tag: 'Рассрочка',
      title: <>Мировое соглашение<br />и судебная рассрочка</>,
      desc: 'Утверждение графика выплат через мировое соглашение либо судебную отсрочку/рассрочку исполнения по ст. 324 АПК РФ.',
      route: 'Судебное утверждение графика платежей без арестов'
    }
  ];

  const stages: { num: string; stage: React.ReactNode; works: string; result: string }[] = [
    {
      num: '01',
      stage: 'Правовой аудит претензии, иска и первичных документов',
      works: 'Изучаем договор, спецификации, акты, накладные, переписку и обоснованность начислений. Выявляем слабые места в позиции истца и проверяем сроки исковой давности.',
      result: 'Письменное заключение с оценкой рисков, реального размера долга и стратегией защиты.'
    },
    {
      num: '02',
      stage: 'Формирование контррасчёта и защитной позиции',
      works: 'Исключаем необоснованные объёмы, проверяем полномочия подписантов, рассчитываем соразмерную неустойку и оцениваем основания для встречного иска.',
      result: 'Обоснованный контррасчёт долга, комплект доказательств и проект процессуальных возражений.'
    },
    {
      num: '03',
      stage: 'Досудебный ответ и переговоры с кредитором',
      works: 'Направляем мотивированный ответ на претензию, проводим переговоры с истцом, согласовываем варианты добровольного урегулирования или зачёта встречных требований.',
      result: 'Предотвращение судебного разбирательства либо фиксация выгодной позиции для суда.'
    },
    {
      num: '04',
      stage: <>Защита в арбитражном<br />суде всех инстанций</>,
      works: 'Подаём отзыв на исковое заявление, ходатайства по ст. 333 ГК РФ и отмене арестов, представляем интересы компании во всех судебных заседаниях.',
      result: 'Судебный акт с максимальным снижением или полным отказом в удовлетворении требований истца.'
    },
    {
      num: '05',
      stage: 'Мировое соглашение, отсрочка или рассрочка исполнения',
      works: 'При необходимости утверждаем в суде мировое соглашение с комфортным графиком либо добиваемся судебной рассрочки исполнения решения по ст. 324 АПК РФ.',
      result: 'Сохранение платёжеспособности бизнеса, снятие ограничений со счетов и защита руководства.'
    }
  ];

  const claims: { tag: string; title: React.ReactNode; desc: string }[] = [
    {
      tag: 'Поставка',
      title: <>Споры по договорам<br />поставки и отгрузкам</>,
      desc: 'Оспаривание неподтверждённых накладных, брака продукции, недопоставок и завышенных договорных цен.'
    },
    {
      tag: 'Подряд',
      title: <>Претензии по договорам<br />подряда и субподряда</>,
      desc: 'Защита при завышении объёмов работ, спорах по актам КС-2, КС-3, встречных претензиях по качеству и срокам.'
    },
    {
      tag: 'Аренда',
      title: <>Требования по коммерческой<br />аренде и лизингу</>,
      desc: 'Оспаривание завышенной арендной платы, штрафов за досрочное расторжение, возврат обеспечительных платежей.'
    },
    {
      tag: 'Услуги',
      title: <>Споры по возмездным<br />услугам и договорам</>,
      desc: 'Защита при отсутствии актов оказания услуг, неподтверждённых расходах исполнителя и навязанных работах.'
    },
    {
      tag: 'Займы',
      title: <>Задолженность по займам,<br />кредитам и гарантиям</>,
      desc: 'Оспаривание ростовщических процентов, скрытых комиссий, защита поручителей и залогодателей компании.'
    },
    {
      tag: 'Авансы',
      title: <>Требования о возврате<br />неотработанных авансов</>,
      desc: 'Доказывание факта выполнения встречных обязательств, зачёт фактических затрат и расходов исполнителя.'
    },
    {
      tag: 'Обогащение',
      title: <>Иски о неосновательном<br />обогащении бизнеса</>,
      desc: 'Защита при спорных безналичных переводах, бездоговорном пользовании имуществом и ошибочных платежах.'
    },
    {
      tag: 'Санкции',
      title: <>Снижение неустойки<br />и штрафов по ст. 333 ГК РФ</>,
      desc: 'Уменьшение явно завышенных штрафных санкций, пеней и исключение двойной ответственности по договору.'
    },
    {
      tag: 'Аресты',
      title: <>Снятие арестов со счетов<br />и обеспечительных мер</>,
      desc: 'Отмена необоснованных обеспечительных мер суда, разблокировка расчётных счетов и сохранение активов.'
    }
  ];

  const cases: CaseData[] = [
    {
      category: (
        <>
          <span>Поставка /</span>
          <br />
          <span>Снижение требований на 1,6 млн ₽</span>
        </>
      ),
      title: 'Отказ во взыскании неподтверждённой части задолженности',
      problem: 'Поставщик требовал с компании клиента 3,4\u00A0млн\u00A0₽, однако часть товарных накладных не содержала подписей уполномоченных лиц, а в расчёт была включена оплаченная партия продукции.',
      action: 'Сопоставили договор, товарные накладные, акты сверки, банковские выписки и деловую переписку. Подготовили детальный контррасчёт и мотивированный отзыв на исковое заявление, доказав необоснованность части требований.',
      result: 'Арбитражный суд отказал истцу во взыскании 1,6\u00A0млн\u00A0₽ неподтверждённого долга. Итоговая взысканная сумма снижена более чем вдвое, судебные расходы распределены пропорционально.'
    },
    {
      category: (
        <>
          <span>Подряд / Ст. 333 ГК РФ /</span>
          <br />
          <span>Снижение на 1,75 млн ₽</span>
        </>
      ),
      title: 'Снижение штрафных санкций и исключение двойного начисления',
      problem: 'Заказчик предъявил иск о взыскании 1,2\u00A0млн\u00A0₽ основного долга и начислил 2,1\u00A0млн\u00A0₽ неустойки и процентов за пересекающиеся периоды просрочки по договору подряда.',
      action: 'Проверили условия договора, периоды начислений и платежи. Заявили возражения против одновременного взыскания двух видов ответственности и подали мотивированное ходатайство о снижении неустойки по ст. 333 ГК РФ.',
      result: 'Суд исключил двойную ответственность и снизил размер неустойки с 2,1\u00A0млн\u00A0₽ до 350\u00A0000\u00A0₽. Итоговые выплаты компании снижены на 1,75\u00A0млн\u00A0₽.'
    },
    {
      category: (
        <>
          <span>Урегулирование /</span>
          <br />
          <span>Мировое соглашение на 5,6 млн ₽</span>
        </>
      ),
      title: 'Утверждение мирового соглашения с рассрочкой без блокировки счетов',
      problem: 'Контрагент подал иск на 5,6\u00A0млн\u00A0₽ и ходатайствовал об аресте всех банковских счетов компании, что парализовало бы операционную деятельность и выплату зарплат.',
      action: 'Предотвратили наложение обеспечительных мер, доказав их несоразмерность. Провели переговоры с кредитором, разделили спорную и признанную части долга и подготовили проект мирового соглашения с графиком платежей на 8 месяцев.',
      result: 'Мировое соглашение утверждено арбитражным судом. Счета компании не блокировались, штрафы прекратили начисляться, бизнес продолжил нормальную работу.'
    }
  ];

  const steps: ProcessStep[] = [
    {
      num: '01',
      title: 'Фиксация документа и сроков',
      desc: 'Определяем, какой документ получен (претензия, иск, судебный приказ, определение суда), кем направлен и когда фактически получен, чтобы не пропустить процессуальные сроки.'
    },
    {
      num: '02',
      title: 'Правовой аудит требований кредитора',
      desc: 'Проверяем основание долга, полномочия сторон, факт встречного исполнения кредитором, правильность расчёта и применимость исковой давности.'
    },
    {
      num: '03',
      title: 'Определение защитной позиции',
      desc: 'Отделяем обоснованную сумму от завышенной, выявляем встречные требования, переплаты или основания для снижения штрафов по ст. 333 ГК РФ.'
    },
    {
      num: '04',
      title: 'Выбор процессуального инструмента',
      desc: 'Предлагаем оптимальный вариант: мотивированный ответ на претензию, мировое соглашение, отзыв на иск или встречное исковое заявление.'
    },
    {
      num: '05',
      title: 'Подготовка процессуальных документов',
      desc: 'Составляем отзыв на иск, контррасчёт задолженности, ходатайства о снижении санкций или отмене обеспечительных мер и формируем доказательственную базу.'
    },
    {
      num: '06',
      title: <>Защита интересов<br />в суде</>,
      desc: 'Представляем интересы бизнеса во всех заседаниях арбитражного суда, отстаиваем возражения и нейтрализуем доводы кредитора.'
    },
    {
      num: '07',
      title: 'Сопровождение исполнения или обжалование',
      desc: 'При необходимости подаём апелляционную жалобу либо добиваемся судебной отсрочки или рассрочки исполнения решения по ст. 324 АПК РФ.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Экспресс-аудит претензии / иска',
      subtitle: 'Срочный правовой аудит документов кредитора, проверка расчёта и оценка процессуальных рисков',
      price: 'от 15 000 ₽',
      features: [
        { name: 'Изучение иска, претензии и приложений', value: '✓' },
        { name: 'Проверка сроков и обоснованности расчёта', value: '✓' },
        { name: 'Выявление оснований для снижения неустойки', value: '✓' },
        { name: 'Письменная стратегия процессуальной защиты', value: '✓' }
      ],
      popular: false,
      buttonText: 'Заказать аудит',
      buttonHref: '#form'
    },
    {
      title: 'Защита в суде под ключ',
      subtitle: 'Полное ведение дела в арбитражном суде на стороне ответчика',
      price: 'от 45 000 ₽',
      popular: true,
      badgeText: 'Популярно',
      features: [
        { name: 'Подготовка отзыва на иск и контррасчёта', value: '✓' },
        { name: 'Ходатайства по ст. 333 ГК РФ и обеспечительным мерам', value: '✓' },
        { name: 'Подача встречного иска при наличии оснований', value: '✓' },
        { name: 'Представительство во всех судебных заседаниях', value: '✓' },
        { name: 'Проведение переговоров о мировом соглашении', value: '✓' }
      ],
      buttonText: 'Поручить защиту',
      buttonHref: '#form'
    },
    {
      title: 'Урегулирование и рассрочка',
      subtitle: 'Переговоры с кредитором, утверждение графика выплат и судебная рассрочка без ареста счетов',
      price: 'от 25 000 ₽',
      features: [
        { name: 'Разработка проекта мирового соглашения', value: '✓' },
        { name: 'Согласование графика выплат с истцом', value: '✓' },
        { name: 'Утверждение соглашения в арбитражном суде', value: '✓' },
        { name: 'Заявление о судебной рассрочке по ст. 324 АПК РФ', value: '✓' }
      ],
      popular: false,
      buttonText: 'Оформить рассрочку',
      buttonHref: '#form'
    }
  ];

  const faqs = [
    {
      q: 'Нужно ли отвечать на претензию контрагента?',
      a: 'Ответ не всегда является формальной обязанностью, но его отсутствие лишает компанию возможности зафиксировать возражения по объёму и качеству, исключить необоснованные штрафы и урегулировать спор до суда.'
    },
    {
      q: 'Можно ли не платить, если акт приёмки не подписан?',
      a: 'Отсутствие подписи само по себе не всегда исключает долг. Суд оценивает договор, фактическое пользование, переписку, мотивированность отказа от приёмки и встречные доказательства.'
    },
    {
      q: 'Как уменьшить неустойку и штрафы по ст. 333 ГК РФ?',
      a: 'Для предпринимателя суд рассматривает уменьшение явно несоразмерной неустойки исключительно по мотивированному заявлению должника. Необходимы контррасчёт и доказательства явной несоразмерности.'
    },
    {
      q: 'Что делать, если срок на отзыв почти истёк?',
      a: 'Нужно немедленно проверить карточку дела в арбитраже, подготовить предварительный отзыв и ходатайство об ознакомлении с материалами дела для предотвращения вынесения решения в пользу истца.'
    },
    {
      q: 'Когда целесообразно подавать встречный иск?',
      a: 'Когда у компании есть самостоятельное требование к истцу (брак товара, срыв сроков, переплата, неустойка), удовлетворение которого полностью или частично исключает требования первоначального иска.'
    },
    {
      q: 'Можно ли снять арест с расчётного счёта компании?',
      a: 'Нужно установить источник ограничения. Если это обеспечительная мера суда, подаётся ходатайство об отмене или замене мер; если действия пристава — подаются возражения в рамках исполнительного производства.'
    },
    {
      q: 'Если долг реальный, чем поможет юрист?',
      a: 'Проверит правильность расчёта, исключит неправомерные штрафы и двойную ответственность, согласует график выплат в мировом соглашении и поможет избежать блокировки счетов компании.'
    },
    {
      q: 'Можно ли получить судебную рассрочку исполнения решения?',
      a: 'Да. Подаётся заявление по ст. 324 АПК РФ с подтверждением обстоятельств, затрудняющих единовременное исполнение, и экономически обоснованного графика платежей.'
    },
    {
      q: 'Защищаете ли вы руководство от субсидиарной ответственности?',
      a: 'Да. Своевременная правовая защита компании исключает искусственное наращивание долгов и защищает генерального директора и учредителей от личной финансовой ответственности.'
    },
    {
      q: 'Можно ли работать полностью дистанционно?',
      a: 'Да. Все процессуальные документы подаются через систему «Мой Арбитр», участие в заседаниях осуществляется по видеоконференцсвязи, а согласование позиции — по защищённым каналам связи.'
    }
  ];

  return (
    <main style={{ position: 'relative', overflowX: 'hidden' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      {/* ═══ БЛОК 1: ПЕРВЫЙ ЭКРАН (HERO) ═══ */}
      <MilitaryHero
        breadcrumbs={
          <>
            <Link href="/">Главная</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/biznesu/">Бизнесу</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/">Взыскание задолженности с юридических лиц</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Защита бизнеса от взыскания</span>
          </>
        }
        superTitle="Защита бизнеса от взыскания • Липецк и Липецкая область"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Защита бизнеса от взыскания
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              задолженности в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Проверим обоснованность требований кредитора, расчёт долга и первичные документы. Подготовим контррасчёт, возражения или встречный иск, защитим компанию в арбитражном суде, снизим неустойку и снимем обеспечительные меры.
          </span>
        }
        primaryCtaText="Оценить перспективы защиты"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_primary_cta_defense"
        primaryCtaSubtext={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Перезвоним вам в рабочее время
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              или ответим по телефону: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (910) 350-31-11</a>
            </span>
          </span>
        }
        trustItems={[
          { text: 'Оцениваем риски и контррасчёт до суда' },
          { text: 'Снижаем неустойку по ст. 333 ГК РФ' },
          { text: 'Снимаем аресты со счетов и активов' },
          { text: 'Куратор — адвокат Дмитрий Сергеевич Конопкин' }
        ]}
        imageUrl="/images/konopkin.jpg"
        imageName="Дмитрий Сергеевич Конопкин"
        imageSubtitle="Адвокат, председатель Коллегии адвокатов «Де-Юре», куратор направления"
        imageObjectPosition="center 25%"
      />

      {/* ═══ БЛОК 2: В КАКОЙ СИТУАЦИИ ВАМ НУЖНА ПОМОЩЬ (ШАБЛОН «СИТУАЦИИ») ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              В какой ситуации вам нужна защита
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Подбираем тактику процессуальной защиты под текущую стадию спора с кредитором. Выберите вашу ситуацию, чтобы увидеть план действий.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '32px' }}>
            {situations.map((item, i) => (
              <div key={i} className="hover-lift" style={{
                padding: '36px 30px',
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-primary)',
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', opacity: 0.06, pointerEvents: 'none' }}>
                  <svg width="100" height="100" viewBox="0 0 24 24" fill="var(--color-deep-blue)">
                    <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>

                <div style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: 'var(--color-gold)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '14px',
                  background: 'rgba(193, 160, 102, 0.1)',
                  padding: '4px 10px',
                  alignSelf: 'flex-start',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {item.tag}
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '18px',
                  fontWeight: 600,
                  color: 'var(--color-deep-blue)',
                  margin: '0 0 14px 0',
                  lineHeight: 1.35,
                  position: 'relative',
                  zIndex: 1
                }}>
                  {item.title}
                </h3>

                <p style={{
                  fontSize: '15px',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.6,
                  margin: 0,
                  position: 'relative',
                  zIndex: 1
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Переключатель роли на страницу взыскания долга */}
          <div style={{
            background: '#FFFFFF',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-gold)',
            padding: '22px 28px',
            boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '32px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: '1 1 500px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <path d="M12 3v18" />
                <path d="M3 7h18" />
                <path d="m6 7-3 8a3 3 0 0 0 6 0l-3-8Z" />
                <path d="m18 7-3 8a3 3 0 0 0 6 0l-3-8Z" />
                <path d="M8 21h8" />
              </svg>
              <div>
                <strong style={{ display: 'block', fontSize: '15.5px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>
                  Вам не платят контрагенты?
                </strong>
                <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Проверим должника, рассчитаем требования и вернём задолженность через арбитражный суд и ФССП.
                </span>
              </div>
            </div>
            <Link
              href="/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/"
              className="btn btn-outline"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 22px', fontSize: '14px', whiteSpace: 'nowrap' }}
            >
              <span>Взыскание задолженности</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>

          {/* Баннер «Не нашли свою ситуацию?» */}
          <div
            style={{
              background: 'linear-gradient(135deg, var(--color-deep-blue) 0%, #17324D 100%)',
              padding: '40px 48px',
              borderTop: '3px solid var(--color-gold)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '32px',
              flexWrap: 'wrap',
              boxShadow: '0 12px 30px rgba(11, 28, 42, 0.15)'
            }}
          >
            <div style={{ flex: '1 1 500px', minWidth: '280px' }}>
              <h3 style={{ margin: '0 0 12px 0', fontSize: '26px', fontFamily: 'var(--font-serif)', color: '#FFFFFF', lineHeight: 1.3 }}>
                Не нашли свою ситуацию?
              </h3>
              <p style={{ margin: 0, fontSize: '15px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6 }}>
                <span style={{ display: 'inline-block' }}>Опишите требования и претензии в форме. Изучим имеющиеся документы</span> <br />
                <span style={{ display: 'inline-block' }}>и предложим оптимальную тактику защиты бизнеса.</span>
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <a
                href="#form"
                className="btn white-btn-custom"
                style={{
                  display: 'inline-block',
                  textAlign: 'center',
                  fontSize: '15px',
                  padding: '14px 28px',
                  fontWeight: 600,
                  whiteSpace: 'nowrap'
                }}
              >
                Описать ситуацию
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: СРОЧНЫЕ СИТУАЦИИ (ШАБЛОН «КОГДА ВАЖНО ОБРАТИТЬСЯ БЕЗ ПРОМЕДЛЕНИЯ») ═══ */}
      <section style={{ background: 'var(--color-deep-blue)', padding: '64px 0 56px', position: 'relative', overflow: 'hidden' }} id="urgent">
        <div className="container">
          <div style={{ maxWidth: '800px', marginBottom: '36px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontFamily: 'var(--font-serif)', color: '#FFFFFF', marginBottom: '12px', marginTop: 0, lineHeight: 1.25 }}>
              <span style={{ display: 'inline-block' }}>Когда нельзя затягивать</span> <br />
              <span style={{ display: 'inline-block' }}>с защитой бизнеса</span>
            </h2>
            <div style={{ width: '60px', height: '2px', background: 'var(--color-gold)', marginBottom: '20px' }}></div>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', marginBottom: '40px', maxWidth: '720px', lineHeight: 1.6 }}>
              В арбитражных спорах промедление грозит вынесением заочного решения, арестом счетов и блокировкой хозяйственной деятельности.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '20px', marginBottom: '40px' }}>
            {urgentItems.map((item, i) => (
              <div
                key={i}
                className="urgent-card"
                style={{
                  background: 'linear-gradient(135deg, #FAF7F2 0%, #F3ECDF 100%)',
                  padding: '30px 24px',
                  borderTop: '4px solid var(--color-gold)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B08D57" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <div style={{ fontSize: '16.5px', fontWeight: 700, color: 'var(--color-deep-blue)', lineHeight: 1.35, fontFamily: 'var(--font-serif)' }}>
                      {item.title}
                    </div>
                  </div>
                  <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '14px', lineHeight: 1.55, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.08)',
            borderLeft: '4px solid var(--color-gold)',
            padding: '16px 24px',
            marginBottom: '32px',
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '14px',
            lineHeight: 1.6
          }}>
            <span style={{ display: 'inline-block' }}>
              <strong style={{ color: '#FFFFFF' }}>Предупреждение:</strong> Срочность не означает согласия с необоснованными требованиями.
            </span> <br className="hidden-mobile" />
            <span style={{ display: 'inline-block' }}>
              Сначала оцениваем правовую позицию, блокируем обеспечительные меры и снижаем размер ответственности.
            </span>
          </div>

          {/* Зона связи */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '28px', display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <a href="tel:+79103503111" style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.02em' }} data-analytics="phone_click">
              +7 (910) 350-31-11
            </a>
            <a href="tel:+79103503111" className="btn-urgent-call" style={{ padding: '14px 28px', fontSize: '15px' }} data-analytics="phone_click">
              Позвонить юристу
            </a>
            <a href="#form" className="btn btn-urgent-outline" style={{ padding: '14px 28px', fontSize: '15px' }}>
              Описать ситуацию
            </a>
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
              Перезвоним вам в рабочее время и оценим риски до наступления процессуальных последствий
            </span>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: ДИАГНОСТИКА: ДО НАЧАЛА ЗАЩИТЫ ПРОВЕРЯЕМ ДВЕ ВЕЩИ ═══ */}
      <section className="section bg-light" id="audit" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '28px',
            marginBottom: '40px',
            borderBottom: '1px solid rgba(193, 160, 102, 0.3)',
            paddingBottom: '28px'
          }}>
            <div style={{ maxWidth: '620px' }}>
              <div style={{
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--color-gold)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '12px'
              }}>
                Диагностика требований
              </div>
              <h2 className="with-accent" style={{
                fontSize: 'clamp(28px, 4vw, 42px)',
                fontFamily: 'var(--font-serif)',
                color: 'var(--color-primary)',
                margin: 0,
                lineHeight: 1.2
              }}>
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                  До формирования позиции
                </span>
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                  проверяем две вещи
                </span>
              </h2>
            </div>
            <div style={{ maxWidth: '480px', paddingTop: '28px' }}>
              <p style={{
                fontSize: '15.5px',
                color: 'var(--color-deep-blue)',
                lineHeight: 1.65,
                margin: 0,
                opacity: 0.92
              }}>
                Наличие претензии не означает её законность. До выбора процессуального инструмента мы тщательно анализируем доказательства истца и выявляем встречные основания для защиты.
              </p>
            </div>
          </div>

          <div className="grid grid-2" style={{ gap: '28px', marginBottom: '32px' }}>
            {/* Карточка 1: Обоснованность требований истца */}
            <div style={{
              background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-primary)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0, paddingBottom: '12px', borderBottom: '1px solid rgba(23, 50, 77, 0.1)' }}>
                Обоснованность требований истца
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  'Действительность договора и соблюдение порядка согласования условий',
                  'Полномочия лиц, подписывавших товарные накладные, УПД и акты приёмки',
                  'Фактическое исполнение встречных обязательств со стороны кредитора',
                  'Соблюдение досудебного претензионного порядка и срок исковой давности',
                  'Обоснованность расчёта основного долга и отсутствие задвоенных платежей',
                  'Соразмерность начисленных неустоек, процентов и штрафных санкций'
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <polyline points="9 11 12 14 22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                    <span style={{ fontSize: '14.5px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Карточка 2: Процессуальные контрмеры */}
            <div style={{
              background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-gold)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0, paddingBottom: '12px', borderBottom: '1px solid rgba(23, 50, 77, 0.1)' }}>
                Процессуальные контрмеры
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  'Наличие оснований для снижения неустойки по ст. 333 ГК РФ',
                  'Основания для подачи встречного иска по браку, срыву сроков или переплате',
                  'Риск наложения обеспечительных мер и готовность ходатайства об их отмене',
                  'Возможность зачёта встречных однородных требований по ст. 410 ГК РФ',
                  'Перспективы утверждения мирового соглашения с рассрочкой выплат',
                  'Основания для судебной отсрочки или рассрочки исполнения по ст. 324 АПК РФ'
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <polyline points="9 11 12 14 22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                    <span style={{ fontSize: '14.5px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Панель действия */}
          <div style={{
            padding: '24px 32px',
            background: '#FFFFFF',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-gold)',
            boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: '1 1 520px' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <polyline points="9 11 12 14 22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
              <span style={{ fontSize: '15px', color: 'var(--color-deep-blue)', fontWeight: 500, lineHeight: 1.55 }}>
                Сопоставляем оба параметра на консультации до начала активных судебных заседаний
              </span>
            </div>
            <a href="#form" className="btn btn-primary" style={{ padding: '13px 28px', fontSize: '14.5px', whiteSpace: 'nowrap', flexShrink: 0 }}>
              Проверить иск и обоснованность требований
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 5: НЕ КАЖДЫЙ ИСК ТРЕБУЕТ ОДИНАКОВОЙ ЗАЩИТЫ (ШАБЛОН СЦЕНАРИЕВ) ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '48px', textAlign: 'left' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px'
            }}>
              Выбор процессуального порядка
            </div>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Не каждый иск требует</span> <br />
              <span style={{ display: 'inline-block' }}>одинаковой защиты</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Порядок работы зависит от обоснованности требований, наличия первичных документов, встречных претензий и целей компании.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '32px' }}>
            {routes.map((item, i) => (
              <div
                key={i}
                className="hover-lift"
                style={{
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  padding: '34px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Фирменный водяной знак */}
                <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', opacity: 0.05, pointerEvents: 'none' }}>
                  <svg width="100" height="100" viewBox="0 0 24 24" fill="var(--color-deep-blue)">
                    <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>

                <div>
                  <div style={{
                    fontSize: '11.5px',
                    fontWeight: 700,
                    color: 'var(--color-gold)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '14px',
                    background: 'rgba(193, 160, 102, 0.12)',
                    padding: '4px 10px',
                    alignSelf: 'flex-start',
                    display: 'inline-block',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {item.tag}
                  </div>
                  <h3 style={{
                    fontSize: '18px',
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--color-deep-blue)',
                    margin: '0 0 12px 0',
                    lineHeight: 1.35,
                    fontWeight: 600,
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: '14.5px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                    margin: '0 0 24px 0',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {item.desc}
                  </p>
                </div>

                <div style={{
                  background: '#FFFFFF',
                  padding: '16px 18px',
                  border: '1px solid var(--color-border)',
                  borderLeft: '3px solid var(--color-gold)',
                  marginTop: 'auto',
                  position: 'relative',
                  zIndex: 1,
                  boxShadow: '0 2px 8px rgba(23, 50, 77, 0.03)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    <strong style={{ fontSize: '11.5px', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      Применимый маршрут
                    </strong>
                  </div>
                  <span style={{ fontSize: '13.5px', color: 'var(--color-deep-blue)', lineHeight: 1.45, fontWeight: 500, display: 'block' }}>
                    {item.route}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 6: ЭТАПЫ ЮРИДИЧЕСКОГО СОПРОВОЖДЕНИЯ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '48px', textAlign: 'left' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px'
            }}>
              Этапы юридического сопровождения
            </div>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Защита интересов бизнеса</span> <br />
              <span style={{ display: 'inline-block' }}>под конкретную стадию</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Чёткий состав работ и осязаемый результат на каждом этапе правового взаимодействия.
            </p>
          </div>

          {/* Длинные горизонтальные карточки этапов 01 → 05 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {stages.map((step, idx) => (
              <div
                key={idx}
                className="hover-lift stage-horizontal-card"
                style={{
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  border: '1px solid var(--color-border)',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                  padding: '28px 32px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '28px',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div className="stage-accent" />
                <div style={{ flex: '1 1 520px', minWidth: '280px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                    <span style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '26px',
                      fontWeight: 700,
                      color: 'var(--color-gold)',
                      lineHeight: 1
                    }}>
                      {step.num}
                    </span>
                    <span style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: 'var(--color-primary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      background: 'rgba(23, 50, 77, 0.06)',
                      padding: '3px 8px'
                    }}>
                      Этап {step.num}
                    </span>
                  </div>

                  <h3 style={{
                    fontSize: '19px',
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--color-deep-blue)',
                    margin: '0 0 10px 0',
                    lineHeight: 1.35,
                    fontWeight: 600
                  }}>
                    {step.stage}
                  </h3>

                  <p style={{
                    fontSize: '14.5px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    {step.works}
                  </p>
                </div>

                <div style={{
                  flex: '1 1 320px',
                  minWidth: '260px',
                  background: '#FAF7F2',
                  border: '1px solid rgba(193, 160, 102, 0.25)',
                  borderLeft: '3px solid var(--color-gold)',
                  padding: '16px 20px',
                  boxSizing: 'border-box'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      <polyline points="9 11 12 14 22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                    <strong style={{ fontSize: '11.5px', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      Результат этапа
                    </strong>
                  </div>
                  <span style={{ fontSize: '13.5px', color: 'var(--color-deep-blue)', lineHeight: 1.45, fontWeight: 500, display: 'block' }}>
                    {step.result}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Плашка действия под этапами */}
          <div style={{
            padding: '24px 32px',
            background: '#FFFFFF',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-gold)',
            boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
            marginTop: '36px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: '1 1 520px' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <polyline points="9 11 12 14 22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
              <span style={{ fontSize: '15px', color: 'var(--color-deep-blue)', fontWeight: 500, lineHeight: 1.55 }}>
                <span style={{ display: 'inline-block' }}>Подключаемся на любой стадии: от претензии и арбитражного суда</span>{' '}
                <span style={{ display: 'inline-block' }}>до утверждения мирового соглашения и рассрочки</span>
              </span>
            </div>
            <a href="#form" className="btn btn-primary" style={{ padding: '13px 28px', fontSize: '14.5px', whiteSpace: 'nowrap', flexShrink: 0 }}>
              Определить стадию спора
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 7: С КАКИМИ ТРЕБОВАНИЯМИ И СПОРАМИ РАБОТАЕМ (ШАБЛОН «МОДЕЛЬ РАБОТЫ») ═══ */}
      <section className="section bg-white" id="claims" style={{ position: 'relative', overflow: 'hidden', padding: '70px 0' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
            <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
              Категории споров
            </span>
          </div>

          <h2 style={{ 
            marginBottom: '16px', 
            fontSize: 'clamp(28px, 3.2vw, 42px)', 
            fontFamily: 'var(--font-serif)', 
            color: 'var(--color-deep-blue)',
            textAlign: 'left',
            textWrap: 'balance',
            marginTop: 0
          }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              С какими требованиями
            </span>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              и исками работаем
            </span>
          </h2>

          <p style={{ 
            fontSize: '16px', 
            color: 'var(--color-text-secondary)', 
            lineHeight: 1.7, 
            maxWidth: '820px', 
            marginBottom: '40px'
          }}>
            Защищаем организации и индивидуальных предпринимателей от необоснованных требований по всем видам коммерческих договоров:
          </p>

          {/* Единая сетка-матрица в стиле «Модель работы ЮК Де-Юре» строго по 3 карточки в ряд */}
          <div className="claims-matrix-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            borderTop: '1px solid var(--color-primary)', 
            borderLeft: '1px solid rgba(23, 50, 77, 0.1)',
            borderBottom: '1px solid rgba(23, 50, 77, 0.1)',
            marginBottom: '32px'
          }}>
            {claims.map((item, idx) => (
              <div 
                key={idx} 
                className="usp-card" 
                style={{ 
                  padding: '40px 32px', 
                  borderRight: '1px solid rgba(23, 50, 77, 0.1)',
                  borderBottom: '1px solid rgba(23, 50, 77, 0.1)',
                  background: 'rgba(247, 244, 237, 0.45)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start'
                }}
              >
                <div>
                  <div className="usp-accent"></div>
                  
                  <div style={{ 
                    fontSize: '11px', 
                    letterSpacing: '0.1em', 
                    color: 'var(--color-gold)', 
                    fontWeight: 700, 
                    marginBottom: '16px', 
                    textTransform: 'uppercase', 
                    position: 'relative', 
                    zIndex: 1 
                  }}>
                    {item.tag}
                  </div>
                  <h3 style={{ 
                    fontSize: '20px', 
                    fontWeight: 'bold', 
                    color: 'var(--color-deep-blue)', 
                    marginBottom: '16px', 
                    fontFamily: 'var(--font-serif)', 
                    lineHeight: 1.3, 
                    minHeight: '52px', 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    position: 'relative', 
                    zIndex: 1 
                  }}>
                    {item.title}
                  </h3>
                </div>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: 1.6, margin: 0, position: 'relative', zIndex: 1 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
            marginTop: '8px'
          }}>
            <p style={{ 
              fontSize: '15px', 
              color: 'var(--color-text-secondary)', 
              lineHeight: 1.6, 
              margin: 0,
              fontStyle: 'italic',
              borderLeft: '3px solid var(--color-primary)',
              paddingLeft: '16px',
              flex: '1 1 500px'
            }}>
              Защищаем компанию от необоснованных долгов, завышенных штрафов и блокировки операционной деятельности
            </p>
            <a href="#form" className="btn btn-primary" style={{ padding: '12px 28px', fontSize: '14.5px', whiteSpace: 'nowrap' }}>
              Рассчитать варианты защиты
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 8: ДОКУМЕНТЫ ДЛЯ ПРЕДВАРИТЕЛЬНОГО АНАЛИЗА (ШАБЛОН «ДОКУМЕНТЫ») ═══ */}
      <section className="section bg-light" id="documents" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Документы для</span> <br />
              <span style={{ display: 'inline-block' }}>правового анализа</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Для первичного анализа достаточно претензии, иска и имеющихся первичных документов.</span> <br />
              <span style={{ display: 'inline-block' }}>Недостающие доказательства юрист определит на индивидуальной консультации.</span>
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '28px', marginBottom: '32px' }}>
            {/* Карточка 1: Обязательно (при наличии) */}
            <div style={{
              background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-primary)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0, paddingBottom: '12px', borderBottom: '1px solid rgba(23, 50, 77, 0.1)' }}>
                Обязательно (при наличии)
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  {
                    title: 'Претензия или исковое заявление',
                    desc: 'Документ с требованиями кредитора, расчётом долга, штрафов и ссылками на пункты договора.'
                  },
                  {
                    title: 'Договор и спецификации',
                    desc: 'Договор со всеми приложениями, спецификациями и дополнительными соглашениями.'
                  },
                  {
                    title: 'Первичные учётные документы',
                    desc: 'УПД, товарные накладные, акты приёмки выполненных работ, платёжные поручения.'
                  },
                  {
                    title: 'Судебные определения и материалы',
                    desc: 'Определение суда о принятии иска, если судебный процесс уже возбуждён.'
                  }
                ].map((doc, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <polyline points="9 11 12 14 22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                    <div>
                      <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>
                        {doc.title}
                      </strong>
                      <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                        {doc.desc}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Карточка 2: Дополнительно помогает */}
            <div style={{
              background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-gold)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0, paddingBottom: '12px', borderBottom: '1px solid rgba(23, 50, 77, 0.1)' }}>
                Дополнительно помогает
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  {
                    title: 'Деловая переписка и акты сверок',
                    desc: 'Переписка по согласованию этапов, мотивированные отказы от приёмки и сверка расчётов.'
                  },
                  {
                    title: 'Доказательства встречных недостатков',
                    desc: 'Акты о выявленных дефектах продукции, фотофиксация, заключения экспертов.'
                  },
                  {
                    title: 'Платёжные поручения и выписки',
                    desc: 'Банковские выписки для подтверждения частичной оплаты или встречных затрат.'
                  },
                  {
                    title: 'Финансовые сведения для рассрочки',
                    desc: 'Бухгалтерские справки для обоснования графика рассрочки по ст. 324 АПК РФ.'
                  }
                ].map((doc, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <polyline points="9 11 12 14 22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                    <div>
                      <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>
                        {doc.title}
                      </strong>
                      <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                        {doc.desc}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Плашка действия и предупреждения */}
          <div style={{
            background: 'var(--color-white)',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-gold)',
            padding: '24px 30px',
            boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: '1 1 500px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <span style={{ fontSize: '14.5px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
                <strong>Не откладывайте обращение из-за отсутствия части документов.</strong> Сначала изучим претензию или иск и скажем, какие доказательства являются решающими для арбитражного суда.
              </span>
            </div>
            <a href="#form" className="btn btn-primary" style={{ padding: '12px 28px', fontSize: '14.5px', whiteSpace: 'nowrap' }}>
              Передать документы на анализ
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 9: КУРАТОР НАПРАВЛЕНИЯ (SPECIALIST BLOCK) ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name="Дмитрий Сергеевич Конопкин"
        position="Адвокат, председатель Коллегии адвокатов «Де-Юре», куратор направления"
        imageUrl="/images/konopkin.jpg"
        imagePosition="center 15%"
        profileHref="/specialisty/konopkin-dmitriy-sergeevich/"
        profileText="Подробнее об адвокате Дмитрии Сергеевиче Конопкине →"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Дмитрий Сергеевич курирует защиту бизнеса в арбитражных спорах: проверяет расчёты и доказательства истцов, выявляет основания для снижения штрафных санкций по ст. 333 ГК РФ и формирует доказательственную базу для арбитражного суда.
          </span>,
          <ul key="2" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Юридическая практика в сфере защиты интересов бизнеса и арбитражного процесса — с 2016 года</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Опыт работы в Следственном комитете помогает выявлять фиктивные требования и схемы давления</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Успешный опыт снижения штрафов и отмены обеспечительных мер в арбитражных судах РФ</span>
            </li>
          </ul>
        ]}
        buttonText="Задать вопрос Дмитрию Сергеевичу"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 10: ПРИМЕРЫ ДЕЛ ИЗ ПРАКТИКИ (КЕЙСЫ) ═══ */}
      <CasesBlock
        title="Примеры дел из практики"
        showAllLink="/praktika/"
        showAllText="Смотреть все дела"
        showDemoWarning={true}
        cases={cases}
      />

      {/* ═══ БЛОК 11: СХЕМА РАБОТЫ (ПОЭТАПНЫЙ ПРОЦЕСС) ═══ */}
      <ProcessBlock
        title="Как строится работа"
        subtitle="Прозрачный и предсказуемый процесс от получения претензии до судебного решения и защиты активов"
        steps={steps}
        ctaTitle="Начните с правового анализа документов"
        ctaSubtitle="Изучим иск, претензию и первичку, проверим правильность расчёта, выявим основания для снижения штрафов и предложим стратегию защиты."
        ctaButtonText="Обсудить ситуацию"
      />

      {/* ═══ БЛОК 12: СТОИМОСТЬ ЮРИДИЧЕСКИХ УСЛУГ ═══ */}
      <PricingBlock
        title="Стоимость защиты бизнеса"
        subtitle="Честные условия и прозрачные этапы. Стоимость фиксируется в официальном договоре до начала работы."
        tiers={pricingTiers}
        disclaimer="Окончательная стоимость определяется после изучения исковых требований, первичных документов, суммы спора и необходимости проведения экспертиз."
      />

      {/* ═══ БЛОК 13: FAQ ═══ */}
      <FAQBlock
        superTitle="Частые вопросы клиентов"
        title="Ответы на вопросы о защите бизнеса"
        subtitle="Юридические нюансы, сроки, снижение штрафов по ст. 333 ГК РФ и снятие обеспечительных мер"
        faqs={faqs}
      />

      {/* ═══ БЛОК 14: ЛОКАЛЬНЫЙ ОФИС В ЛИПЕЦКЕ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '48px', alignItems: 'center' }}>
            <div>
              <div style={{
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--color-gold)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '12px'
              }}>
                Офис в Липецке
              </div>
              <h2 className="with-accent" style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.25 }}>
                <span style={{ display: 'inline-block' }}>Обсудить защиту</span> <br />
                <span style={{ display: 'inline-block' }}>бизнеса в офисе</span>
              </h2>
              <p style={{ fontSize: '15.5px', color: 'var(--color-deep-blue)', opacity: 0.9, lineHeight: 1.6, marginBottom: '24px' }}>
                Можно встретиться лично в офисе ЮК «Де-Юре» в центре Липецка либо передать документы в электронном виде для дистанционного анализа.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px' }}>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)' }}>Адрес офиса:</strong>
                    <span style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)' }}>г. Липецк, ул. Советская, д. 35, оф. 213</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px' }}>
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)' }}>Режим работы:</strong>
                    <span style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)' }}>Пн–Пт с 9:00 до 18:00 (по предварительной записи)</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px' }}>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)' }}>Прямой телефон:</strong>
                    <a href="tel:+79103503111" style={{ fontSize: '15px', color: 'var(--color-primary)', fontWeight: 700, textDecoration: 'none' }}>+7 (910) 350-31-11</a>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a href="#form" className="btn btn-primary" style={{ padding: '12px 28px' }}>
                  Записаться на встречу
                </a>
                <a href="tel:+79103503111" className="btn btn-outline" style={{ padding: '12px 24px' }}>
                  Позвонить
                </a>
              </div>
            </div>

            <div style={{
              background: 'var(--color-white)',
              border: '1px solid var(--color-border)',
              boxShadow: '0 8px 30px rgba(23, 50, 77, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              minHeight: '380px'
            }}>
              <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '320px', background: '#EAEFE9', overflow: 'hidden', flex: 1 }}>
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=39.585799%2C52.604024&amp;z=17&amp;pt=39.585799%2C52.604024%2Cpm2blm"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0, width: '100%', height: '100%', minHeight: '320px' }}
                  allowFullScreen={true}
                  title="Офис ЮК Де-Юре: г. Липецк, ул. Советская, д. 35, оф. 213"
                  loading="lazy"
                ></iframe>
              </div>
              <a
                href="https://yandex.ru/maps/?pt=39.585799,52.604024&z=17&text=%D0%B3.+%D0%9B%D0%B8%D0%BF%D0%B5%D1%86%D0%BA,+%D1%83%D0%BB.+%D0%A1%D0%BE%D0%B2%D0%B5%D1%82%D1%81%D0%BA%D0%B0%D1%8F,+%D0%B4.+35"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-route-map"
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  padding: '14px 20px',
                  fontSize: '15px',
                  fontWeight: 600,
                  borderRadius: 0,
                  borderLeft: 'none',
                  borderRight: 'none',
                  borderBottom: 'none',
                  borderTop: '1px solid var(--color-border)',
                  textDecoration: 'none',
                  boxSizing: 'border-box'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="3 11 22 2 13 21 11 13 3 11" />
                </svg>
                <span>Построить маршрут до офиса</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 15: ФИНАЛЬНАЯ ФОРМА (СВЯЗАТЬСЯ С НАМИ) ═══ */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px', padding: '80px 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>
                  Связаться с нами
                </span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Получите оценку</span> <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>перспектив защиты</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Кратко опишите ситуацию и оставьте контакты. Юрист изучит иск или претензию, проверит обоснованность расчёта и свяжется с вами для выработки тактики защиты.
              </p>

              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация арбитражного юриста</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Позвоните прямо сейчас: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (910) 350-31-11</a>
                </p>
              </div>

              <div style={{ background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Конфиденциальность:</strong>
                Не указывайте в форме закрытые коммерческие данные. Документы можно передать юристу после согласования защищённого канала связи.
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm
                title="Заказать анализ иска"
                subtitle={
                  <>
                    <span style={{ display: 'inline-block' }}>Оставьте имя и номер телефона. Юрист свяжется с вами</span> <br />
                    <span style={{ display: 'inline-block' }}>в течение 15 минут в рабочее время.</span>
                  </>
                }
                subtext={
                  <>
                    <span style={{ display: 'inline-block' }}>Если вы оставите заявку вечером или в&nbsp;выходной день,</span> <br />
                    <span style={{ display: 'inline-block' }}>мы перезвоним в&nbsp;ближайший рабочий день.</span>
                  </>
                }
                buttonText="Оценить перспективы защиты"
                commentPlaceholder="Кратко опишите ситуацию: сумма иска, кто истец, на какой стадии дело…"
                hiddenFields={[
                  { name: 'source_page', value: '/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/zashchita-biznesa-ot-vzyskaniya-zadolzhennosti/' },
                  { name: 'page_type', value: 'service' },
                  { name: 'direction', value: 'vzyskanie_zadolzhennosti' },
                  { name: 'service', value: 'zashchita_biznesa_ot_vzyskaniya' },
                  { name: 'curator', value: 'konopkin-dmitriy-sergeevich' }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 991px) {
          .claims-matrix-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .claims-matrix-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />
    </main>
  );
}
