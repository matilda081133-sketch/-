'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import ContactsForm from '@/components/ContactsForm';

export default function IskArbitrazhClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LegalService',
        '@id': 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/isk-v-arbitrazhnyj-sud/#service',
        'name': 'Подготовка и подача иска в арбитражный суд — Де-Юре Липецк',
        'description': 'Проверка требований, расчет цены иска и пошлины, подготовка искового заявления со всеми приложениями и подача в арбитражный суд.',
        'url': 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/isk-v-arbitrazhnyj-sud/',
        'telephone': '+7 (910) 350-31-11',
        'priceRange': '₽₽₽',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'пл. Победы, д. 8, офис 412',
          'addressLocality': 'Липецк',
          'addressRegion': 'Липецкая область',
          'postalCode': '398001',
          'addressCountry': 'RU'
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/isk-v-arbitrazhnyj-sud/#breadcrumb',
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
            'name': 'Бизнесу',
            'item': 'https://dejure-help.ru/biznesu/'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Арбитражный юрист',
            'item': 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/'
          },
          {
            '@type': 'ListItem',
            'position': 4,
            'name': 'Подготовка и подача иска',
            'item': 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/isk-v-arbitrazhnyj-sud/'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/isk-v-arbitrazhnyj-sud/#faq',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Обязательно ли направлять претензию перед подачей иска?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Для большинства гражданско-правовых споров в арбитражном суде обязателен 30-дневный претензионный срок со дня направления претензии, если иной срок или порядок не установлен законом или договором.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Как подается иск в арбитражный суд?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Иск подается в электронном виде через федеральную систему «Мой Арбитр» с усиленной квалифицированной электронной подписью либо на бумажном носителе через канцелярию суда или почтой.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Как правильно рассчитать государственную пошлину?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Госпошлина рассчитывается по правилам статьи 333.21 Налогового кодекса РФ исходя из цены иска (основной долг, неустойка, проценты) либо фиксированной ставки по неимущественным спорам.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Что делать, если иск оставлен без движения?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Суд выносит определение об оставлении без движения при нарушении требований статей 125, 126 АПК РФ. Мы оперативно готовим ходатайство об устранении недостатков и досылаем документы в установленный срок.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Можно ли заявить ходатайство об аресте счетов должника вместе с иском?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Да, заявление об обеспечительных мерах может быть подано одновременно с иском. Для удовлетворения необходимо обосновать риск невозможности исполнения судебного акта и оплатить госпошлину.'
            }
          }
        ]
      }
    ]
  };

  const situations: { tag: string; title: React.ReactNode; desc: string }[] = [
    {
      tag: 'Неоплата по договору',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Поставка товара или услуги</span> <br />
          <span style={{ display: 'inline-block' }}>не оплачены контрагентом</span>
        </span>
      ),
      desc: 'Товар поставлен, работы выполнены, но покупатель уклоняется от оплаты. Претензионный срок истек или ответ не получен.'
    },
    {
      tag: 'Нарушение сроков',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Срыв сроков выполнения</span> <br />
          <span style={{ display: 'inline-block' }}>работ или поставки</span>
        </span>
      ),
      desc: 'Подрядчик или поставщик нарушил сроки. Требуется взыскание аванса, договорной неустойки и причиненных убытков.'
    },
    {
      tag: 'Качество и дефекты',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Поставлен некачественный</span> <br />
          <span style={{ display: 'inline-block' }}>товар или работы</span>
        </span>
      ),
      desc: 'Обнаружены скрытые дефекты. Необходимо зафиксировать недостатки, провести досудебную экспертизу и подать иск о возврате средств.'
    },
    {
      tag: 'Расторжение договора',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Отказ от договора и</span> <br />
          <span style={{ display: 'inline-block' }}>возврат авансовых платежей</span>
        </span>
      ),
      desc: 'Существенное нарушение условий сделки одной из сторон, требующее судебного расторжения договора и компенсации ущерба.'
    },
    {
      tag: 'Неосновательное обогащение',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Ошибочный перевод или</span> <br />
          <span style={{ display: 'inline-block' }}>неотработанный аванс</span>
        </span>
      ),
      desc: 'Контрагент получил денежные средства без правовых оснований либо при незаключенном договоре и отказывается от возврата.'
    },
    {
      tag: 'Обеспечение иска',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Риск вывода активов</span> <br />
          <span style={{ display: 'inline-block' }}>недобросовестным должником</span>
        </span>
      ),
      desc: 'Подача иска со срочным ходатайством о наложении ареста на денежные средства и имущество ответчика до рассмотрения спора.'
    }
  ];

  const urgentItems: { title: React.ReactNode; desc: string }[] = [
    {
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Истекает 3-летний срок</span> <br />
          <span style={{ display: 'inline-block' }}>исковой давности</span>
        </span>
      ),
      desc: 'Пропуск общего срока лишает компанию возможности судебного принудительного взыскания долга при заявлении ответчика.'
    },
    {
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Должник начал процесс</span> <br />
          <span style={{ display: 'inline-block' }}>ликвидации или банкротства</span>
        </span>
      ),
      desc: 'Подача иска и заявления о включении в реестр требований кредиторов требует немедленных процессуальных действий.'
    },
    {
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Массовые иски других</span> <br />
          <span style={{ display: 'inline-block' }}>кредиторов в картотеке</span>
        </span>
      ),
      desc: 'Опоздание с подачей иска снижает шансы реального исполнения решения из-за ареста всех счетов другими истцами.'
    },
    {
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Риск отчуждения имущества</span> <br />
          <span style={{ display: 'inline-block' }}>и спецтехники</span>
        </span>
      ),
      desc: 'Необходимо срочно подать иск с обеспечительными мерами до момента переоформления активов на аффилированных лиц.'
    }
  ];

  const routes: { tag: string; title: React.ReactNode; desc: string; route: string }[] = [
    {
      tag: 'Сумма до 1,2 млн ₽',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Упрощенное производство</span> <br />
          <span style={{ display: 'inline-block' }}>без вызова сторон</span>
        </span>
      ),
      desc: 'Рассмотрение дела по письменным доказательствам в ускоренный срок (до 2 месяцев) без явки представителей.',
      route: 'Формирование исчерпывающего комплекта доказательств сразу при подаче заявления.'
    },
    {
      tag: 'Сложные споры',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Общий исковой порядок</span> <br />
          <span style={{ display: 'inline-block' }}>с судебными заседаниями</span>
        </span>
      ),
      desc: 'Требования свыше 1,2 млн ₽, споры по подряду, качеству, вызов свидетелей и назначение судебной экспертизы.',
      route: 'Полноформатное судебное представительство, ходатайства и участие во всех заседаниях.'
    },
    {
      tag: 'Срочные меры',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Иск с обеспечительными</span> <br />
          <span style={{ display: 'inline-block' }}>мерами (арест счетов)</span>
        </span>
      ),
      desc: 'Немедленная подача заявления об обеспечении иска для гарантированного сохранения средств на счетах ответчика.',
      route: 'Подготовка мотивированного заявления об обеспечении иска с обоснованием соразмерности.'
    }
  ];

  const stages: { num: string; stage: React.ReactNode; works: string; result: string }[] = [
    {
      num: '01',
      stage: 'Анализ оснований и доказательственной базы',
      works: 'Изучаем первичные документы, договоры, акты сверки, полномочия подписантов и рассчитываем цену иска с пенями и штрафами.',
      result: 'Заключение о перспективах иска и точный математический контррасчёт цены требований.'
    },
    {
      num: '02',
      stage: 'Проверка и реализация досудебного порядка',
      works: 'Проверяем правильность ранее направленной претензии либо составляем новую мотивированную претензию с отслеживанием срока.',
      result: 'Соблюденный 30-дневный досудебный порядок, исключающий возврат иска судом.'
    },
    {
      num: '03',
      stage: 'Составление искового заявления со ссылками на законы',
      works: 'Формулируем предмет и основания иска, подбираем релевантную практику Арбитражного суда Центрального округа и Верховного Суда РФ.',
      result: 'Готовый выверенный текст искового заявления со всеми правовыми обоснованиями.'
    },
    {
      num: '04',
      stage: 'Оплата госпошлины и рассылка сторонам спора',
      works: 'Формируем платежное поручение с точными реквизитами суда, направляем копии иска и приложений ответчику и третьим лицам.',
      result: 'Квитанции об оплате пошлины и почтовые уведомления о вручении участникам дела.'
    },
    {
      num: '05',
      stage: 'Подача комплекта через «Мой Арбитр» и контроль принятия',
      works: 'Загружаем электронные образы документов в систему «Мой Арбитр», отслеживаем вынесение определения о принятии иска к производству.',
      result: 'Определение арбитражного суда о принятии иска и назначении даты судебного заседания.'
    }
  ];

  const disputeCategories = [
    {
      title: 'Взыскание задолженности',
      desc: 'Иски по неоплате договоров поставки, подряда, аренды, оказания услуг и транспортной экспедиции.',
      href: '/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/'
    },
    {
      title: 'Строительные иски',
      desc: 'Взыскание задолженности по актам КС-2, расторжение договоров подряда, возврат неотработанного аванса.',
      href: '/biznesu/arbitrazhnyj-yurist/'
    },
    {
      title: 'Расторжение договоров',
      desc: 'Судебное расторжение и изменение коммерческих сделок в связи с существенным нарушением обязательств.',
      href: '/biznesu/arbitrazhnyj-yurist/'
    },
    {
      title: 'Неустойка и штрафы',
      desc: 'Взыскание договорной пени, процентов по ст. 395 ГК РФ и штрафов за ненадлежащее исполнение условий сделки.',
      href: '/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/'
    },
    {
      title: 'Возмещение убытков',
      desc: 'Взыскание прямого ущерба и упущенной выгоды, причиненных неправомерными действиями контрагента.',
      href: '/biznesu/arbitrazhnyj-yurist/'
    },
    {
      title: 'Неосновательное обогащение',
      desc: 'Иски о возврате денежных средств, полученных без правовых оснований (статья 1102 ГК РФ).',
      href: '/biznesu/arbitrazhnyj-yurist/'
    },
    {
      title: 'Истребование имущества',
      desc: 'Виндикационные иски об истребовании коммерческого имущества из чужого незаконного владения.',
      href: '/biznesu/arbitrazhnyj-yurist/'
    },
    {
      title: 'Признание права собственности',
      desc: 'Иски о признании прав на недвижимость, земельные участки, здания и самовольные постройки.',
      href: '/biznesu/arbitrazhnyj-yurist/'
    },
    {
      title: 'Корпоративные иски',
      desc: 'Иски об исключении участника из общества, признании недействительными решений общих собраний и сделок.',
      href: '/biznesu/arbitrazhnyj-yurist/'
    }
  ];

  const cases = [
    {
      num: '01',
      category: 'Договор поставки • Иск удовлетворен',
      desc: 'Подготовлен и подан иск о взыскании 7,8\u00A0млн\u00A0₽ задолженности за поставленное промышленное оборудование. Доказано надлежащее вручение УПД и соблюдение гарантийных сроков.',
      result: 'Иск удовлетворён полностью: взыскан долг 7,8\u00A0млн\u00A0₽, неустойка 650\u00A0000\u00A0₽ и расходы по госпошлине.',
      badge: 'Взыскано 8,45\u00A0млн\u00A0₽'
    },
    {
      num: '02',
      category: 'Строительный подряд • Обеспечительные меры',
      desc: 'Подан иск о взыскании аванса 12,4\u00A0млн\u00A0₽ в связи со срывом сроков строительства склада. Одновременно заявлено ходатайство об аресте счетов генподрядчика.',
      result: 'Суд наложил арест на счета ответчика. После блокировки средств ответчик добровольно погасил всю сумму долга.',
      badge: 'Арест счетов и возврат долга'
    },
    {
      num: '03',
      category: 'Аренда коммерческой недвижимости',
      desc: 'Иск о взыскании задолженности по аренде и обязании освободить помещение. Подготовлена доказательственная база фактического пользования площадями.',
      result: 'Решение суда вступило в силу: взыскан долг 3,2\u00A0млн\u00A0₽, помещение освобождено и передано арендодателю.',
      badge: 'Иск удовлетворен'
    }
  ];

  const pricingTiers = [
    {
      name: 'Правовой аудит оснований иска',
      price: 'от 20 000 ₽',
      desc: 'Проверка документов, претензионного порядка, сроков давности и перспектив спора.',
      features: [
        'Анализ договоров, накладных, актов и переписки',
        'Проверка соблюдения досудебного порядка',
        'Расчёт цены иска, процентов и госпошлины',
        'Определение надлежащей подсудности',
        'Письменное заключение о судебных рисках'
      ],
      highlight: false
    },
    {
      name: 'Составление и подача иска «под ключ»',
      price: 'от 35 000 ₽',
      desc: 'Полная подготовка искового заявления со всеми приложениями и подача через Мой Арбитр.',
      features: [
        'Все услуги тарифа «Правовой аудит»',
        'Составление текста искового заявления',
        'Формирование полного пакета приложений',
        'Направление копий сторонам дела',
        'Подача через систему «Мой Арбитр» и контроль принятия'
      ],
      highlight: true
    },
    {
      name: 'Иск + судебное представительство',
      price: 'от 75 000 ₽',
      desc: 'Подготовка иска и личное ведение дела во всех заседаниях первой инстанции.',
      features: [
        'Все услуги тарифа «Составление и подача»',
        'Личное участие юриста во всех заседаниях суда',
        'Подготовка процессуальных ходатайств и пояснений',
        'Участие в назначении экспертиз и допросе свидетелей',
        'Получение исполнительного листа и взыскание судебных расходов'
      ],
      highlight: false
    }
  ];

  const faqItems = [
    {
      q: 'Обязательно ли направлять претензию перед подачей иска?',
      a: 'Для большинства гражданско-правовых споров в арбитражном суде обязателен 30-дневный претензионный срок со дня направления претензии, если иной срок или порядок не установлен законом или договором. Исключения составляют споры по установлению фактов, банкротству и корпоративные споры.'
    },
    {
      q: 'Как подается иск в арбитражный суд?',
      a: 'Иск подается в электронном виде через федеральную систему «Мой Арбитр» с усиленной квалифицированной электронной подписью либо на бумажном носителе через канцелярию суда или почтовым отправлением с описью вложения.'
    },
    {
      q: 'Как правильно рассчитать государственную пошлину?',
      a: 'Госпошлина рассчитывается по правилам статьи 333.21 Налогового кодекса РФ исходя из цены иска (основной долг, неустойка, проценты) либо фиксированной ставки по неимущественным спорам.'
    },
    {
      q: 'Что делать, если иск оставлен без движения?',
      a: 'Суд выносит определение об оставлении без движения при нарушении требований статей 125, 126 АПК РФ (не приложены доказательства направления сторонам, нет документа об оплате пошлины и т.д.). Мы оперативно устраняем замечания суда в установленный срок.'
    },
    {
      q: 'Можно ли заявить ходатайство об аресте счетов должника вместе с иском?',
      a: 'Да, заявление об обеспечительных мерах может быть подано одновременно с иском. Для удовлетворения необходимо мотивировать риск неисполнения решения суда и приложить доказательства неблагонадежности должника.'
    },
    {
      q: 'Сколько времени занимает принятие иска к производству?',
      a: 'Суд решает вопрос о принятии искового заявления в течение 5 рабочих дней со дня поступления в арбитражный суд и выносит определение о принятии иска к производству и назначении заседания.'
    }
  ];

  return (
    <>
      <Script
        id="isk-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ═══ БЛОК 1: HERO (ПОДГОТОВКА И ПОДАЧА ИСКА) ═══ */}
      <section className="hero bg-light" style={{ padding: '60px 0 70px 0', borderBottom: '1px solid var(--color-border)', background: 'var(--gradient-cream)' }}>
        <div className="container">
          {/* Хлебные крошки */}
          <nav aria-label="Хлебные крошки" style={{ marginBottom: '24px' }}>
            <ol style={{
              display: 'flex',
              flexWrap: 'wrap',
              listStyle: 'none',
              padding: 0,
              margin: 0,
              fontSize: '13.5px',
              color: 'var(--color-text-secondary)'
            }}>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <Link href="/" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>Главная</Link>
                <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <Link href="/biznesu/" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>Бизнесу</Link>
                <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <Link href="/biznesu/arbitrazhnyj-yurist/" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>Арбитражный юрист</Link>
                <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
              </li>
              <li style={{ color: 'var(--color-deep-blue)', fontWeight: 500 }}>
                Подготовка и подача иска
              </li>
            </ol>
          </nav>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '40px'
          }}>
            <div style={{ flex: '1 1 580px', maxWidth: '720px' }}>
              <div style={{
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--color-gold)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '14px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-gold)' }}></span>
                Процессуальная услуга для бизнеса • Липецк и Липецкая область
              </div>

              <h1 className="with-accent" style={{
                fontSize: 'clamp(30px, 4.5vw, 44px)',
                fontFamily: 'var(--font-serif)',
                color: 'var(--color-primary)',
                lineHeight: 1.15,
                margin: '0 0 20px 0',
                fontWeight: 600
              }}>
                Подготовка и подача иска <br />в арбитражный суд в Липецке
              </h1>

              <p style={{
                fontSize: '17px',
                color: 'var(--color-deep-blue)',
                lineHeight: 1.6,
                marginBottom: '32px',
                opacity: 0.92,
                maxWidth: '640px'
              }}>
                Подготовим иск в арбитражный суд: проверим требования, подсудность, претензионный порядок, доказательства и расчёт, сформируем комплект и сопроводим подачу.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', marginBottom: '40px' }}>
                <a href="#form" className="btn btn-primary" style={{ padding: '15px 32px', fontSize: '15.5px' }}>
                  Заказать подготовку иска
                </a>
                <a href="#situations" className="btn btn-outline" style={{ padding: '15px 28px', fontSize: '15.5px' }}>
                  Основания для иска ↓
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px', color: 'var(--color-text-secondary)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>Электронная подача через «Мой Арбитр» с гарантией соблюдения требований АПК РФ.</span>
              </div>
            </div>

            {/* Карточка переключателя на смежные услуги хаба */}
            <div style={{ flex: '1 1 380px', maxWidth: '440px' }}>
              <div style={{
                background: '#FFFFFF',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-primary)',
                boxShadow: '0 8px 30px rgba(23, 50, 77, 0.07)',
                padding: '28px 24px'
              }}>
                <div style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: 'var(--color-gold)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '16px'
                }}>
                  Смежные услуги арбитражной практики
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <Link
                    href="/biznesu/arbitrazhnyj-yurist/zashchita-otvetchika-v-arbitrazhnom-sude/"
                    className="hover-lift"
                    style={{
                      display: 'block',
                      padding: '14px 16px',
                      background: 'var(--color-bg-light)',
                      border: '1px solid var(--color-border)',
                      borderLeft: '3px solid var(--color-gold)',
                      textDecoration: 'none'
                    }}
                  >
                    <strong style={{ display: 'block', fontSize: '14px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>
                      Защита ответчика в суде →
                    </strong>
                    <span style={{ fontSize: '12.5px', color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>
                      Отзыв на иск, возражения и снижение неустойки.
                    </span>
                  </Link>

                  <Link
                    href="/biznesu/arbitrazhnyj-yurist/obzhalovanie-resheniya-arbitrazhnogo-suda/"
                    className="hover-lift"
                    style={{
                      display: 'block',
                      padding: '14px 16px',
                      background: 'var(--color-bg-light)',
                      border: '1px solid var(--color-border)',
                      borderLeft: '3px solid var(--color-deep-blue)',
                      textDecoration: 'none'
                    }}
                  >
                    <strong style={{ display: 'block', fontSize: '14px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>
                      Обжалование решений суда →
                    </strong>
                    <span style={{ fontSize: '12.5px', color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>
                      Апелляция и кассация по арбитражным делам.
                    </span>
                  </Link>

                  <Link
                    href="/biznesu/arbitrazhnyj-yurist/"
                    className="hover-lift"
                    style={{
                      display: 'block',
                      padding: '14px 16px',
                      background: 'var(--color-bg-light)',
                      border: '1px solid var(--color-border)',
                      borderLeft: '3px solid var(--color-primary)',
                      textDecoration: 'none'
                    }}
                  >
                    <strong style={{ display: 'block', fontSize: '14px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>
                      Общий хаб: Арбитражный юрист →
                    </strong>
                    <span style={{ fontSize: '12.5px', color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>
                      Комплексное ведение дел любой сложности.
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 2: СИТУАЦИИ ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '44px', textAlign: 'left' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px'
            }}>
              Основания для иска
            </div>
            <h2 className="with-accent" style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-deep-blue)',
              margin: '0 0 16px 0',
              lineHeight: 1.2
            }}>
              В каких случаях мы готовим иск в арбитраж
            </h2>
            <p style={{
              fontSize: '16px',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.6,
              margin: 0
            }}>
              Помогаем сформировать доказательственную базу и подать исковое заявление при любых хозяйственных нарушениях со стороны контрагентов.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '32px' }}>
            {situations.map((item, i) => (
              <div
                key={i}
                className="hover-lift"
                style={{
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  padding: '32px 26px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)'
                }}
              >
                <div>
                  <div style={{
                    fontSize: '11.5px',
                    fontWeight: 700,
                    color: 'var(--color-gold)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '12px',
                    background: 'rgba(193, 160, 102, 0.12)',
                    padding: '4px 10px',
                    display: 'inline-block'
                  }}>
                    {item.tag}
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '18px',
                    fontWeight: 600,
                    color: 'var(--color-deep-blue)',
                    margin: '0 0 12px 0',
                    lineHeight: 1.35
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: '14.5px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: СРОЧНЫЕ СИТУАЦИИ ДО ПОДАЧИ ИСКА ═══ */}
      <section className="section" style={{ background: 'var(--color-deep-blue)', color: '#FFFFFF', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '44px', textAlign: 'left' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px'
            }}>
              Критические риски промедления
            </div>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontFamily: 'var(--font-serif)',
              color: '#FFFFFF',
              margin: '0 0 16px 0',
              lineHeight: 1.2
            }}>
              Когда иск нужно подавать немедленно
            </h2>
            <p style={{
              fontSize: '16px',
              color: 'rgba(255, 255, 255, 0.82)',
              lineHeight: 1.6,
              margin: 0
            }}>
              Затягивание с подачей иска может привести к утрате возможности реального взыскания денег или истечению процессуальных сроков.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '24px', marginBottom: '40px' }}>
            {urgentItems.map((item, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderLeft: '4px solid var(--color-gold)',
                  padding: '28px 26px'
                }}
              >
                <h3 style={{
                  fontSize: '18px',
                  fontFamily: 'var(--font-serif)',
                  color: '#FFFFFF',
                  margin: '0 0 10px 0',
                  lineHeight: 1.35
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '14.5px',
                  color: 'rgba(255, 255, 255, 0.78)',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.15)',
            paddingTop: '28px',
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            flexWrap: 'wrap'
          }}>
            <a href="tel:+79103503111" style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.02em' }}>
              +7 (910) 350-31-11
            </a>
            <a href="tel:+79103503111" className="btn-urgent-call" style={{ padding: '14px 28px', fontSize: '15px' }}>
              Срочная консультация юриста
            </a>
            <a href="#form" className="btn btn-urgent-outline" style={{ padding: '14px 28px', fontSize: '15px' }}>
              Отправить документы на аудит
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: ДИАГНОСТИКА: ДВЕ ВЕЩИ ДО ПОДАЧИ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
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
                Проверка перед судом
              </div>
              <h2 className="with-accent" style={{
                fontSize: 'clamp(28px, 4vw, 40px)',
                fontFamily: 'var(--font-serif)',
                color: 'var(--color-primary)',
                margin: 0,
                lineHeight: 1.2
              }}>
                До подачи иска проверяем <br />два ключевых параметра
              </h2>
            </div>
            <div style={{ maxWidth: '480px', paddingTop: '24px' }}>
              <p style={{
                fontSize: '15.5px',
                color: 'var(--color-deep-blue)',
                lineHeight: 1.65,
                margin: 0,
                opacity: 0.92
              }}>
                Исключаем риски оставления иска без движения или возврата заявления из-за процессуальных недочетов.
              </p>
            </div>
          </div>

          <div className="grid grid-2" style={{ gap: '28px', marginBottom: '32px' }}>
            <div style={{
              background: '#FFFFFF',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-primary)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              padding: '36px 32px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
                <span style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(193, 160, 102, 0.15)',
                  color: 'var(--color-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '15px'
                }}>1</span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: 'var(--color-deep-blue)', margin: 0 }}>
                  Обоснованность и доказательства
                </h3>
              </div>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                Проверяем наличие оригиналов или заверенных копий первички, подтверждение полномочий лиц, подписавших документы, и соблюдение досудебного порядка.
              </p>
              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', color: 'var(--color-deep-blue)', lineHeight: 1.7 }}>
                <li>Соблюдение обязательного 30-дневного претензионного срока</li>
                <li>Точный расчет цены иска, неустойки и законных процентов</li>
                <li>Наличие доказательств передачи товара / выполнения работ</li>
              </ul>
            </div>

            <div style={{
              background: '#FFFFFF',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-gold)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              padding: '36px 32px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
                <span style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(193, 160, 102, 0.15)',
                  color: 'var(--color-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '15px'
                }}>2</span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: 'var(--color-deep-blue)', margin: 0 }}>
                  Процессуальная готовность комплекта
                </h3>
              </div>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                Определяем надлежащую подсудность, оплачиваем госпошлину по актуальным реквизитам и направляем копии документов всем участникам процесса.
              </p>
              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', color: 'var(--color-deep-blue)', lineHeight: 1.7 }}>
                <li>Проверка договорной и территориальной подсудности</li>
                <li>Формирование квитанций об отправке иска сторонам</li>
                <li>Обоснование обеспечительных мер для сохранения активов</li>
              </ul>
            </div>
          </div>

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
            gap: '20px'
          }}>
            <span style={{ fontSize: '14.5px', color: 'var(--color-deep-blue)', fontWeight: 500 }}>
              Проверяем иск до отправки в суд для исключения задержек и оставления без движения
            </span>
            <a href="#form" className="btn btn-primary" style={{ padding: '12px 28px', fontSize: '14.5px' }}>
              Проверить иск перед подачей
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 5: СЦЕНАРИИ ПОДАЧИ ИСКА ═══ */}
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
              Порядок судопроизводства
            </div>
            <h2 className="with-accent" style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-deep-blue)',
              margin: '0 0 16px 0',
              lineHeight: 1.2
            }}>
              Форматы рассмотрения искового заявления
            </h2>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
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
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)'
                }}
              >
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
                    display: 'inline-block'
                  }}>
                    {item.tag}
                  </div>
                  <h3 style={{
                    fontSize: '18px',
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--color-deep-blue)',
                    margin: '0 0 12px 0',
                    lineHeight: 1.35
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                    margin: '0 0 20px 0'
                  }}>
                    {item.desc}
                  </p>
                </div>

                <div style={{
                  borderTop: '1px solid rgba(193, 160, 102, 0.25)',
                  paddingTop: '16px',
                  fontSize: '13px',
                  color: 'var(--color-primary)',
                  fontWeight: 500,
                  lineHeight: 1.45
                }}>
                  <span style={{ color: 'var(--color-gold)', fontWeight: 700, display: 'block', marginBottom: '2px', fontSize: '11.5px', textTransform: 'uppercase' }}>
                    Процессуальный маршрут:
                  </span>
                  {item.route}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 6: ЭТАПЫ РАБОТЫ (ГОРИЗОНТАЛЬНЫЕ КАРТОЧКИ) ═══ */}
      <section className="section bg-light" id="stages" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '44px', textAlign: 'left' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px'
            }}>
              Процедура подготовки
            </div>
            <h2 className="with-accent" style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-primary)',
              margin: '0 0 16px 0',
              lineHeight: 1.2
            }}>
              Этапы подготовки и подачи иска
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {stages.map((st, i) => (
              <div
                key={i}
                className="stage-horizontal-card hover-lift"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid var(--color-border)',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)',
                  padding: '28px 32px',
                  display: 'grid',
                  gridTemplateColumns: '80px 1.2fr 2fr 1.5fr',
                  alignItems: 'center',
                  gap: '24px',
                  position: 'relative'
                }}
              >
                <div className="stage-accent"></div>
                <div style={{
                  fontSize: '28px',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 700,
                  color: 'var(--color-gold)'
                }}>
                  {st.num}
                </div>
                <div>
                  <h3 style={{
                    fontSize: '17px',
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--color-deep-blue)',
                    margin: 0,
                    lineHeight: 1.35
                  }}>
                    {st.stage}
                  </h3>
                </div>
                <div>
                  <span style={{ fontSize: '11.5px', fontWeight: 700, color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '4px' }}>
                    Состав работы:
                  </span>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.55 }}>
                    {st.works}
                  </p>
                </div>
                <div style={{
                  background: 'rgba(193, 160, 102, 0.08)',
                  padding: '14px 18px',
                  borderLeft: '3px solid var(--color-gold)'
                }}>
                  <span style={{ fontSize: '11.5px', fontWeight: 700, color: 'var(--color-deep-blue)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '2px' }}>
                    Результат этапа:
                  </span>
                  <span style={{ fontSize: '13.5px', color: 'var(--color-deep-blue)', lineHeight: 1.45, fontWeight: 500 }}>
                    {st.result}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 7: КАТЕГОРИИ СПОРОВ (3x3 МАТРИЦА) ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '44px', textAlign: 'left' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px'
            }}>
              Предметная специализация
            </div>
            <h2 className="with-accent" style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-deep-blue)',
              margin: '0 0 16px 0',
              lineHeight: 1.2
            }}>
              По каким категориям мы составляем иски
            </h2>
          </div>

          <div className="claims-matrix-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px'
          }}>
            {disputeCategories.map((cat, i) => (
              <div
                key={i}
                className="usp-card hover-lift"
                style={{
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  border: '1px solid var(--color-border)',
                  padding: '30px 26px',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)'
                }}
              >
                <div className="usp-accent"></div>
                <div>
                  <h3 style={{
                    fontSize: '17.5px',
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--color-deep-blue)',
                    margin: '0 0 12px 0',
                    lineHeight: 1.35
                  }}>
                    {cat.title}
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                    margin: '0 0 16px 0'
                  }}>
                    {cat.desc}
                  </p>
                </div>
                <Link
                  href={cat.href}
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--color-primary)',
                    textDecoration: 'none'
                  }}
                >
                  Подробнее о направлении →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 8: ДОКУМЕНТЫ ДЛЯ СОСТАВЛЕНИЯ ИСКА ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '44px', textAlign: 'left' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px'
            }}>
              Пакет документов
            </div>
            <h2 className="with-accent" style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-primary)',
              margin: '0 0 16px 0',
              lineHeight: 1.2
            }}>
              Документы для составления иска
            </h2>
          </div>

          <div className="grid grid-2" style={{ gap: '28px' }}>
            <div style={{
              background: '#FFFFFF',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-primary)',
              padding: '36px 32px'
            }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px' }}>
                Обязательный перечень
              </div>
              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.75 }}>
                <li>Договор, спецификации, дополнительные соглашения</li>
                <li>Акты выполненных работ, накладные (ТОРГ-12), УПД с отметками о вручении</li>
                <li>Досудебная претензия и документы об отправке (почтовая опись, чек)</li>
                <li>Справка о банковских реквизитах истца для перечисления средств</li>
              </ul>
            </div>

            <div style={{
              background: '#FFFFFF',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-gold)',
              padding: '36px 32px'
            }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px' }}>
                Дополнительные материалы
              </div>
              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.75 }}>
                <li>Деловая переписка, протоколы разногласий, гарантийные письма</li>
                <li>Акты сверки взаиморасчетов, платежные поручения по авансам</li>
                <li>Заключения независимых экспертов и дефектные акты</li>
                <li>Справки о наличии имущества у должника для обеспечения иска</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 9: СПЕЦИАЛИСТЫ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
            border: '1px solid var(--color-border)',
            borderTop: '3px solid var(--color-primary)',
            padding: '40px 48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '32px'
          }}>
            <div style={{ maxWidth: '640px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                Судебная практика
              </div>
              <h3 style={{ fontSize: '22px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0' }}>
                Составление исков арбитражными юристами практики
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.65, margin: 0 }}>
                Все исковые заявления проходят двойную проверку: процессуальную (на соответствие нормам АПК РФ) и материально-правовую (с учетом актуальных определений ВС РФ).
              </p>
            </div>
            <a href="#form" className="btn btn-primary" style={{ padding: '14px 32px', fontSize: '15px' }}>
              Передать документы на иск
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 10: КЕЙСЫ ═══ */}
      <section className="section bg-light" id="cases" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '44px', textAlign: 'left' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
              Судебные результаты
            </div>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', margin: '0 0 16px 0', lineHeight: 1.2 }}>
              Примеры подготовленных нами исков
            </h2>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {cases.map((c, i) => (
              <div
                key={i}
                className="hover-lift"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <span style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'var(--color-gold)' }}>
                      {c.num}
                    </span>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-primary)', background: 'rgba(193, 160, 102, 0.15)', padding: '4px 8px', borderRadius: '2px', textTransform: 'uppercase' }}>
                      {c.badge}
                    </span>
                  </div>
                  <div style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--color-deep-blue)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '10px' }}>
                    {c.category}
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
                    {c.desc}
                  </p>
                </div>
                <div style={{ borderTop: '1px solid rgba(193, 160, 102, 0.25)', paddingTop: '14px', fontSize: '13px', color: 'var(--color-deep-blue)', fontWeight: 600 }}>
                  {c.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 11: ПРОЦЕСС РАБОТЫ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '44px', textAlign: 'left' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
              Порядок взаимодействия
            </div>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 16px 0', lineHeight: 1.2 }}>
              Как заказать подготовку и подачу иска
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div style={{ padding: '24px', background: 'var(--color-bg-light)', borderLeft: '3px solid var(--color-primary)' }}>
              <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '6px' }}>
                1. Передача первичных документов
              </strong>
              <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                Направляете сканы договора, актов, претензии и банковских реквизитов.
              </span>
            </div>
            <div style={{ padding: '24px', background: 'var(--color-bg-light)', borderLeft: '3px solid var(--color-gold)' }}>
              <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '6px' }}>
                2. Расчет пошлины и подготовка иска
              </strong>
              <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                Составляем мотивированный иск, формируем комплект приложений и платежку на госпошлину.
              </span>
            </div>
            <div style={{ padding: '24px', background: 'var(--color-bg-light)', borderLeft: '3px solid var(--color-primary)' }}>
              <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '6px' }}>
                3. Согласование и подача в суд
              </strong>
              <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                Согласовываем текст с вами и отправляем иск в арбитражный суд через «Мой Арбитр».
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 12: ЦЕНЫ ═══ */}
      <section className="section bg-light" id="pricing" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '44px', textAlign: 'left' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
              Стоимость услуг
            </div>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', margin: '0 0 16px 0', lineHeight: 1.2 }}>
              Тарифы на подготовку и подачу иска
            </h2>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {pricingTiers.map((tier, i) => (
              <div
                key={i}
                className="hover-lift"
                style={{
                  background: '#FFFFFF',
                  border: tier.highlight ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                  borderTop: '4px solid var(--color-primary)',
                  padding: '36px 30px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: tier.highlight ? '0 8px 30px rgba(23, 50, 77, 0.1)' : '0 4px 20px rgba(23, 50, 77, 0.04)'
                }}
              >
                <div>
                  <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>
                    {tier.name}
                  </h3>
                  <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', marginBottom: '14px' }}>
                    {tier.price}
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, marginBottom: '24px' }}>
                    {tier.desc}
                  </p>
                  <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '20px', marginBottom: '28px' }}>
                    <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                      {tier.features.map((feat, idx) => (
                        <li key={idx}>{feat}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a href="#form" className={tier.highlight ? 'btn btn-primary' : 'btn btn-outline'} style={{ width: '100%', textAlign: 'center', padding: '12px 20px', fontSize: '14.5px' }}>
                  Выбрать тариф
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 13: FAQ ═══ */}
      <section className="section bg-white" id="faq" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '44px', textAlign: 'left' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
              Частые вопросы
            </div>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 16px 0', lineHeight: 1.2 }}>
              Вопросы о подаче иска в арбитраж
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '900px' }}>
            {faqItems.map((item, i) => (
              <div
                key={i}
                style={{
                  border: '1px solid var(--color-border)',
                  background: openFaq === i ? 'var(--color-bg-light)' : '#FFFFFF',
                  transition: 'all 0.2s'
                }}
              >
                <button
                  onClick={() => toggleFaq(i)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    gap: '16px'
                  }}
                  aria-expanded={openFaq === i}
                >
                  <span style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)' }}>
                    {item.q}
                  </span>
                  <span style={{ fontSize: '20px', color: 'var(--color-gold)', fontWeight: 700, transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 24px 22px 24px', fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.65, borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 14: ОФИС В ЛИПЕЦКЕ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
                Офис в Липецке
              </div>
              <h2 className="with-accent" style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', margin: '0 0 20px 0', lineHeight: 1.25 }}>
                Подача исков в Арбитражный суд Липецкой области
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14.5px', color: 'var(--color-deep-blue)', marginBottom: '32px' }}>
                <div><strong>Адрес:</strong> г. Липецк, пл. Победы, д. 8, офис 412</div>
                <div><strong>Режим работы:</strong> Пн–Пт с 09:00 до 18:00 (по предварительной записи)</div>
                <div><strong>Телефон:</strong> +7 (910) 350-31-11</div>
              </div>
              <a href="https://yandex.ru/maps/-/CDuWqM5Z" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-route-map" style={{ width: '100%', textAlign: 'center', padding: '14px 28px', fontSize: '15px' }}>
                Построить маршрут на Яндекс.Картах →
              </a>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-gold)', boxShadow: '0 8px 30px rgba(23, 50, 77, 0.08)', padding: '24px' }}>
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=39.573436%2C52.603884&z=16&pt=39.573436,52.603884,pm2rdm"
                width="100%"
                height="340"
                frameBorder="0"
                allowFullScreen={true}
                style={{ position: 'relative', border: '1px solid var(--color-border)' }}
                title="Офис Де-Юре на карте Липецка"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 15: ФИНАЛЬНАЯ ФОРМА ═══ */}
      <section className="section bg-white" id="form" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
              Заказ иска
            </div>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 16px 0', lineHeight: 1.2 }}>
              Поручите составление иска арбитражному юристу
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
              Опишите требования и контрагента. Перезвоним в течение 15 минут в рабочее время и согласуем безопасную передачу первичных документов.
            </p>
          </div>

          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <ContactsForm
              title="Заявка на составление иска в арбитражный суд"
              subtitle="Перезвоним в течение 15 минут в рабочее время для предварительной оценки спора."
              hiddenFields={[{ name: 'service', value: 'Подготовка и подача иска в арбитражный суд' }]}
              buttonText="Заказать подготовку иска"
            />
          </div>
        </div>
      </section>
    </>
  );
}
