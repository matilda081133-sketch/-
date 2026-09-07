'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import ContactsForm from '@/components/ContactsForm';

export default function ZashchitaOtvetchikaClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LegalService',
        '@id': 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/zashchita-otvetchika-v-arbitrazhnom-sude/#service',
        'name': 'Защита ответчика в арбитражном суде — Де-Юре Липецк',
        'description': 'Срочный анализ иска и материалов дела, подготовка мотивированного отзыва, снижение неустойки, подача встречного иска и судебная защита.',
        'url': 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/zashchita-otvetchika-v-arbitrazhnom-sude/',
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
        '@id': 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/zashchita-otvetchika-v-arbitrazhnom-sude/#breadcrumb',
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
            'name': 'Защита ответчика',
            'item': 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/zashchita-otvetchika-v-arbitrazhnom-sude/'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/zashchita-otvetchika-v-arbitrazhnom-sude/#faq',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Получили иск в арбитражный суд — с чего начать?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Сохраните иск, приложения, конверт с датой получения, проверьте номер дела в картотеке арбитражных дел (kad.arbitr.ru), дату заседания и срок для представления отзыва.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Какой срок установлен для подачи отзыва на иск?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Срок для отзыва устанавливается определением арбитражного суда и обычно составляет от 15 до 30 дней. Отзыв должен поступить в суд заблаговременно до начала судебного заседания.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Что будет, если не подать отзыв на иск?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'При непредставлении отзыва арбитражный суд вправе рассмотреть дело по имеющимся в деле доказательствам и отнести все судебные расходы на ответчика независимо от исхода дела (ст. 131 АПК РФ).'
            }
          },
          {
            '@type': 'Question',
            'name': 'Можно ли снизить договорную неустойку и штрафы?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Да, по мотивированному заявлению ответчика суд вправе существенно снизить неустойку на основании статьи 333 ГК РФ, если докажет её явную несоразмерность последствиям нарушения.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Когда можно подать встречный иск?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Встречный иск может быть предъявлен до принятия судебного акта первой инстанции, если встречное требование направлено к зачету первоначального или исключает его удовлетворение.'
            }
          }
        ]
      }
    ]
  };

  const situations: { tag: string; title: React.ReactNode; desc: string }[] = [
    {
      tag: 'Получен иск',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Поступило исковое заявление</span> <br />
          <span style={{ display: 'inline-block' }}>или определение суда</span>
        </span>
      ),
      desc: 'Контрагент подал иск в арбитражный суд. Требуется срочно изучить требования, проверить доказательства и подготовить мотивированный отзыв.'
    },
    {
      tag: 'Завышенные требования',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Истец требует завышенную</span> <br />
          <span style={{ display: 'inline-block' }}>неустойку и штрафы</span>
        </span>
      ),
      desc: 'Сумма основного долга признается частично либо полностью, но размер пеней несоразмерен. Необходимо снижение неустойки по ст. 333 ГК РФ.'
    },
    {
      tag: 'Недоказанность долга',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Истец не доказал факт</span> <br />
          <span style={{ display: 'inline-block' }}>поставки или объем работ</span>
        </span>
      ),
      desc: 'Отсутствуют подписанные накладные, акты КС-2, нарушены гарантийные обязательства или поставлен некачественный товар.'
    },
    {
      tag: 'Встречные претензии',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Есть встречные требования</span> <br />
          <span style={{ display: 'inline-block' }}>к истцу для зачета</span>
        </span>
      ),
      desc: 'Истец сам допустил нарушения условий договора, сорвал сроки или причинил убытки. Требуется подготовка встречного искового заявления.'
    },
    {
      tag: 'Арест счетов',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Наложены обеспечительные</span> <br />
          <span style={{ display: 'inline-block' }}>меры на счета компании</span>
        </span>
      ),
      desc: 'Суд заблокировал банковские счета ответчика по заявлению истца. Необходима срочная отмена или замена обеспечительных мер.'
    },
    {
      tag: 'Рассрочка и мировое',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Необходима рассрочка</span> <br />
          <span style={{ display: 'inline-block' }}>или мировое соглашение</span>
        </span>
      ),
      desc: 'Требуется зафиксировать комфортный график выплат без блокировки счетов и ареста имущества в рамках судебного мирового соглашения.'
    }
  ];

  const urgentItems: { title: React.ReactNode; desc: string }[] = [
    {
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Срок на подачу отзыва</span> <br />
          <span style={{ display: 'inline-block' }}>на иск истекает</span>
        </span>
      ),
      desc: 'Определение суда устанавливает жесткий срок; неподача отзыва лишает компанию возможности приобщить контрдоказательства.'
    },
    {
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Судебное заседание</span> <br />
          <span style={{ display: 'inline-block' }}>назначено на днях</span>
        </span>
      ),
      desc: 'Осталось мало времени для подготовки правовой позиции; требуется экстренное ходатайство об отложении или выезд юриста в процесс.'
    },
    {
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Счета заблокированы</span> <br />
          <span style={{ display: 'inline-block' }}>определением суда</span>
        </span>
      ),
      desc: 'Обеспечительные меры парализовали текущую деятельность бизнеса; требуется ходатайство о встречном обеспечении или отмене ареста.'
    },
    {
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Риск вынесения решения</span> <br />
          <span style={{ display: 'inline-block' }}>в упрощенном порядке</span>
        </span>
      ),
      desc: 'Дело рассматривается без вызова сторон; без своевременного отзыва и ходатайств суд полностью удовлетворит требования истца.'
    }
  ];

  const routes: { tag: string; title: React.ReactNode; desc: string; route: string }[] = [
    {
      tag: 'Полное оспаривание',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Отказ в иске в связи с</span> <br />
          <span style={{ display: 'inline-block' }}>необоснованностью</span>
        </span>
      ),
      desc: 'Доказываем отсутствие задолженности, пропуск исковой давности, недействительность сделки или отсутствие факта поставки.',
      route: 'Формирование исчерпывающей системы доказательств и мотивированный отзыв с ходатайством об отказе.'
    },
    {
      tag: 'Снижение выплат',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Снижение неустойки</span> <br />
          <span style={{ display: 'inline-block' }}>по статье 333 ГК РФ</span>
        </span>
      ),
      desc: 'Истец начислил чрезмерные штрафные санкции. Доказываем несоразмерность и снижаем сумму требований на 50–90%.',
      route: 'Экономический контррасчет, сравнение со ставками ЦБ РФ и судебная защита позиции по снижению санкций.'
    },
    {
      tag: 'Встречный иск',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Подача встречного иска</span> <br />
          <span style={{ display: 'inline-block' }}>и взаимозачет требований</span>
        </span>
      ),
      desc: 'Предъявляем встречные требования по дефектам товара, срыву сроков или причиненным убыткам для полного или частичного зачета.',
      route: 'Подготовка встречного иска, оплата пошлины и процессуальное объединение в одно производство.'
    }
  ];

  const stages: { num: string; stage: React.ReactNode; works: string; result: string }[] = [
    {
      num: '01',
      stage: 'Анализ иска, материалов дела и процессуальных сроков',
      works: 'Ознакомление с делом в арбитражном суде (включая электронные материалы в КАД), проверка оснований иска и сроков давности.',
      result: 'Заключение о слабых местах позиции истца и стратегия процессуальной защиты.'
    },
    {
      num: '02',
      stage: 'Формирование доказательственной базы и контррасчета',
      works: 'Сбор актов, переписки, подтверждений частичных оплат, обоснование снижения неустойки по ст. 333 ГК РФ.',
      result: 'Контррасчёт требований и комплект оправдательных документов ответчика.'
    },
    {
      num: '03',
      stage: 'Подготовка мотивированного отзыва на исковое заявление',
      works: 'Составление отзыва со ссылками на законы и судебную практику, подготовка ходатайств об истребовании или экспертизе.',
      result: 'Готовый отзыв на иск с приложениями, направленный истцу и поданный в арбитражный суд.'
    },
    {
      num: '04',
      stage: 'Подготовка встречного иска (при целесообразности)',
      works: 'Формулирование встречных требований, расчёт цены встречного иска, подготовка комплекта и подача в суд.',
      result: 'Принятый судом встречный иск для совместного рассмотрения с первоначальным.'
    },
    {
      num: '05',
      stage: 'Судебное представительство и защита интересов в заседаниях',
      works: 'Участие во всех судебных заседаниях, заявление возражений, допрос экспертов, ведение переговоров о мировом соглашении.',
      result: 'Минимизация финансовых потерь компании или полный отказ в удовлетворении иска.'
    }
  ];

  const disputeCategories = [
    {
      title: 'Защита по договорам поставки',
      desc: 'Снижение неустойки, оспаривание объёмов и сроков поставки, встречные претензии по качеству товара.',
      href: '/biznesu/'
    },
    {
      title: 'Защита подрядчиков и заказчиков',
      desc: 'Споры по качеству и скрытым дефектам работ, признание актов КС-2 недействительными, судебные экспертизы.',
      href: '/biznesu/'
    },
    {
      title: 'Защита от взыскания задолженности',
      desc: 'Оспаривание необоснованных требований кредиторов, пропуск исковой давности, перерасчет долга.',
      href: '/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/'
    },
    {
      title: 'Защита по договорам аренды',
      desc: 'Споры по арендным платежам, неотделимым улучшениям, досрочному расторжению и возврату залога.',
      href: '/biznesu/'
    },
    {
      title: 'Защита от неосновательного обогащения',
      desc: 'Доказывание правовых оснований получения денежных средств и встречного предоставления.',
      href: '/biznesu/arbitrazhnyj-yurist/'
    },
    {
      title: 'Корпоративная защита',
      desc: 'Защита генерального директора и участников ООО от исков об убытках и оспаривания решений собраний.',
      href: '/biznesu/'
    },
    {
      title: 'Защита от исков госорганов',
      desc: 'Возражения по искам ФНС, Росприроднадзора, антимонопольной службы (ФАС) и таможни.',
      href: '/biznesu/'
    },
    {
      title: 'Отмена обеспечительных мер',
      desc: 'Снятие арестов с расчетных счетов и имущества компании, наложенных по ходатайству истца.',
      href: '/biznesu/arbitrazhnyj-yurist/'
    },
    {
      title: 'Утверждение мировых соглашений',
      desc: 'Переговоры с истцом, разработка безопасного графика платежей и утверждение мирового соглашения судом.',
      href: '/biznesu/arbitrazhnyj-yurist/'
    }
  ];

  const cases = [
    {
      num: '01',
      category: 'Договор поставки • Снижение требований',
      desc: 'К клиенту был предъявлен иск на 6,8\u00A0млн\u00A0₽ (основной долг 4,2\u00A0млн\u00A0₽ и пени 2,6\u00A0млн\u00A0₽). Подготовлен отзыв с мотивированным ходатайством по ст. 333 ГК РФ.',
      result: 'Неустойка снижена на 85% (до 390\u00A0000\u00A0₽). Утвержден комфортный график погашения основного долга.',
      badge: 'Экономия 2,21\u00A0млн\u00A0₽'
    },
    {
      num: '02',
      category: 'Строительный подряд • Встречный иск',
      desc: 'Заказчик требовал взыскать с подрядчика 9,5\u00A0млн\u00A0₽ за срыв сроков. Юристы подали встречный иск о взыскании задолженности за дополнительные работы на 11,2\u00A0млн\u00A0₽.',
      result: 'Проведена судебная экспертиза. Встречный иск удовлетворен, в пользу подрядчика взыскана разница 1,7\u00A0млн\u00A0₽.',
      badge: 'Встречное взыскание'
    },
    {
      num: '03',
      category: 'Арест счетов • Отмена обеспечения',
      desc: 'Истец наложил арест на счета торговой компании на сумму 15\u00A0млн\u00A0₽. Подготовлено срочное ходатайство об отмене обеспечительных мер с доказательством их несоразмерности.',
      result: 'Суд отменил арест счетов в течение 3 дней. Операционная деятельность предприятия полностью восстановлена.',
      badge: 'Снятие ареста со счетов'
    }
  ];

  const pricingTiers = [
    {
      name: 'Срочный анализ иска и отзыв',
      price: 'от 30 000 ₽',
      desc: 'Ознакомление с делом, правовая оценка иска и подготовка мотивированного отзыва.',
      features: [
        'Изучение искового заявления и приложений',
        'Проверка соблюдения истцом досудебного порядка',
        'Контррасчёт цены иска и применение ст. 333 ГК РФ',
        'Подготовка текста отзыва со ссылками на законы',
        'Подача отзыва в суд через «Мой Арбитр»'
      ],
      highlight: false
    },
    {
      name: 'Отзыв + встречный иск / снижение неустойки',
      price: 'от 55 000 ₽',
      desc: 'Комплексная защита: отзыв, встречный иск и ходатайства об обеспечительных мерах.',
      features: [
        'Все услуги тарифа «Срочный анализ и отзыв»',
        'Подготовка встречного искового заявления',
        'Формирование пакета приложений и расчет пошлины',
        'Ходатайства о снижении штрафов и назначении экспертизы',
        'Ходатайство об отмене ареста счетов ответчика'
      ],
      highlight: true
    },
    {
      name: 'Защита ответчика «под ключ»',
      price: 'от 90 000 ₽',
      desc: 'Полное процессуальное сопровождение дела во всех заседаниях первой инстанции.',
      features: [
        'Все услуги тарифа «Отзыв + встречный иск»',
        'Личное участие юриста во всех судебных заседаниях',
        'Оперативная подготовка письменных возражений',
        'Проведение переговоров по мировому соглашению',
        'Взыскание судебных расходов с истца при отказе в иске'
      ],
      highlight: false
    }
  ];

  const faqItems = [
    {
      q: 'Получили иск в арбитражный суд — с чего начать?',
      a: 'Сохраните иск, приложения, конверт с датой получения, проверьте номер дела в картотеке арбитражных дел (kad.arbitr.ru), дату заседания и срок для представления отзыва.'
    },
    {
      q: 'Какой срок установлен для подачи отзыва на иск?',
      a: 'Срок для отзыва устанавливается определением арбитражного суда и обычно составляет от 15 до 30 дней. Отзыв должен поступить в суд заблаговременно до начала судебного заседания.'
    },
    {
      q: 'Что будет, если не подать отзыв на иск?',
      a: 'При непредставлении отзыва арбитражный суд вправе рассмотреть дело по имеющимся в деле доказательствам и отнести все судебные расходы на ответчика независимо от исхода дела (ст. 131 АПК РФ).'
    },
    {
      q: 'Можно ли снизить договорную неустойку и штрафы?',
      a: 'Да, по мотивированному заявлению ответчика суд вправе существенно снизить неустойку на основании статьи 333 ГК РФ, если докажет её явную несоразмерность последствиям нарушения.'
    },
    {
      q: 'Когда можно подать встречный иск?',
      a: 'Встречный иск может быть предъявлен до принятия судебного акта первой инстанции, если встречное требование направлено к зачету первоначального или исключает его удовлетворение.'
    },
    {
      q: 'Что делать, если заседание назначено уже через несколько дней?',
      a: 'Необходимо срочно подать через систему «Мой Арбитр» краткий предварительный отзыв и ходатайство об отложении заседания для ознакомления с материалами дела и подготовки полной позиции.'
    }
  ];

  return (
    <>
      <Script
        id="zashchita-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ═══ БЛОК 1: HERO (ЗАЩИТА ОТВЕТЧИКА) ═══ */}
      <section className="hero bg-light" style={{ padding: '60px 0 70px 0', borderBottom: '1px solid var(--color-border)', background: 'var(--gradient-cream)' }}>
        <div className="container">
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
                Защита ответчика
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
                Срочная процессуальная защита • Липецк и Липецкая область
              </div>

              <h1 className="with-accent" style={{
                fontSize: 'clamp(30px, 4.5vw, 44px)',
                fontFamily: 'var(--font-serif)',
                color: 'var(--color-primary)',
                lineHeight: 1.15,
                margin: '0 0 20px 0',
                fontWeight: 600
              }}>
                Защита ответчика <br />в арбитражном суде в Липецке
              </h1>

              <p style={{
                fontSize: '17px',
                color: 'var(--color-deep-blue)',
                lineHeight: 1.6,
                marginBottom: '32px',
                opacity: 0.92,
                maxWidth: '640px'
              }}>
                Получили иск в арбитражный суд? Проверим материалы и сроки, подготовим отзыв и ходатайства, выстроим позицию и представим интересы ответчика.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', marginBottom: '40px' }}>
                <a href="#form" className="btn btn-primary" style={{ padding: '15px 32px', fontSize: '15.5px' }}>
                  Защитить компанию от иска
                </a>
                <a href="#situations" className="btn btn-outline" style={{ padding: '15px 28px', fontSize: '15.5px' }}>
                  Срочные риски ↓
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px', color: 'var(--color-text-secondary)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>Подготовка отзыва на иск и ходатайств в срок от 24 часов при горящих сроках.</span>
              </div>
            </div>

            <div style={{ flex: '1 1 380px', maxWidth: '440px' }}>
              <div style={{
                background: '#FFFFFF',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-gold)',
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
                    href="/biznesu/arbitrazhnyj-yurist/isk-v-arbitrazhnyj-sud/"
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
                      Подготовка и подача иска →
                    </strong>
                    <span style={{ fontSize: '12.5px', color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>
                      Подача встречного или самостоятельного иска.
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
                      borderLeft: '3px solid var(--color-gold)',
                      textDecoration: 'none'
                    }}
                  >
                    <strong style={{ display: 'block', fontSize: '14px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>
                      Общий хаб: Арбитражный юрист →
                    </strong>
                    <span style={{ fontSize: '12.5px', color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>
                      Комплексное судебное представительство.
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
              Основания для защиты
            </div>
            <h2 className="with-accent" style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-deep-blue)',
              margin: '0 0 16px 0',
              lineHeight: 1.2
            }}>
              В какой ситуации вам нужна защита ответчика
            </h2>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '32px' }}>
            {situations.map((item, i) => (
              <div
                key={i}
                className="hover-lift"
                style={{
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-gold)',
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

      {/* ═══ БЛОК 3: СРОЧНЫЕ СИТУАЦИИ ═══ */}
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
              Критические процессуальные риски
            </div>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontFamily: 'var(--font-serif)',
              color: '#FFFFFF',
              margin: '0 0 16px 0',
              lineHeight: 1.2
            }}>
              Когда ответчику нужно действовать немедленно
            </h2>
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
              Позвонить дежурному юристу
            </a>
            <a href="#form" className="btn btn-urgent-outline" style={{ padding: '14px 28px', fontSize: '15px' }}>
              Отправить иск на анализ
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: ДИАГНОСТИКА: ДВЕ ВЕЩИ ПРИ ЗАЩИТЕ ═══ */}
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
                Экспертный аудит иска
              </div>
              <h2 className="with-accent" style={{
                fontSize: 'clamp(28px, 4vw, 40px)',
                fontFamily: 'var(--font-serif)',
                color: 'var(--color-primary)',
                margin: 0,
                lineHeight: 1.2
              }}>
                До составления отзыва <br />проверяем две ключевые вещи
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
                Находим процессуальные ошибки истца и закладываем основу для снижения суммы требований или полного отказа в иске.
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
                  Обоснованность требований истца
                </h3>
              </div>
              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', color: 'var(--color-deep-blue)', lineHeight: 1.7 }}>
                <li>Проверка первичных документов и полномочий подписантов истца</li>
                <li>Соблюдение обязательного претензионного порядка перед подачей иска</li>
                <li>Пропуск 3-летнего срока исковой давности по части или всей сумме</li>
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
                  Контрпозиция и снижение неустойки
                </h3>
              </div>
              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', color: 'var(--color-deep-blue)', lineHeight: 1.7 }}>
                <li>Подготовка контррасчёта с ходатайством по статье 333 ГК РФ</li>
                <li>Наличие встречных требований для зачета (встречный иск)</li>
                <li>Возможность назначения судебной экспертизы по качеству/объему</li>
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
              Сопоставляем оба параметра на консультации до составления процессуальных документов
            </span>
            <a href="#form" className="btn btn-primary" style={{ padding: '12px 28px', fontSize: '14.5px' }}>
              Проверить иск и требования
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 5: СЦЕНАРИИ ЗАЩИТЫ ═══ */}
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
              Стратегия защиты
            </div>
            <h2 className="with-accent" style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-deep-blue)',
              margin: '0 0 16px 0',
              lineHeight: 1.2
            }}>
              Сценарии процессуальной защиты ответчика
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
                  borderTop: '3px solid var(--color-gold)',
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
                    Стратегический маршрут:
                  </span>
                  {item.route}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 6: ЭТАПЫ РАБОТЫ ═══ */}
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
              Порядок защиты
            </div>
            <h2 className="with-accent" style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-primary)',
              margin: '0 0 16px 0',
              lineHeight: 1.2
            }}>
              Этапы судебной защиты ответчика
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

      {/* ═══ БЛОК 7: КАТЕГОРИИ СПОРОВ ═══ */}
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
              Отраслевая компетенция
            </div>
            <h2 className="with-accent" style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-deep-blue)',
              margin: '0 0 16px 0',
              lineHeight: 1.2
            }}>
              Категории споров, в которых мы защищаем ответчиков
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

      {/* ═══ БЛОК 8: ДОКУМЕНТЫ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '44px', textAlign: 'left' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
              Документооборот
            </div>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', margin: '0 0 16px 0', lineHeight: 1.2 }}>
              Документы для подготовки отзыва и защиты
            </h2>
          </div>

          <div className="grid grid-2" style={{ gap: '28px' }}>
            <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', padding: '36px 32px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px' }}>
                Судебные материалы
              </div>
              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.75 }}>
                <li>Копия искового заявления со всеми приложениями истца</li>
                <li>Определение арбитражного суда о принятии иска к производству</li>
                <li>Почтовый конверт или уведомление с датой вручения иска ответчику</li>
                <li>Номер дела в Картотеке арбитражных дел (kad.arbitr.ru)</li>
              </ul>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-gold)', padding: '36px 32px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px' }}>
                Оправдательные документы ответчика
              </div>
              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.75 }}>
                <li>Договор, спецификации, переписка по исполнению обязательств</li>
                <li>Платежные поручения об оплатах и частичных погашениях</li>
                <li>Претензии, направленные в адрес истца, акты разногласий</li>
                <li>Акты приема-передачи с фиксацией дефектов или просрочки истца</li>
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
            borderTop: '3px solid var(--color-gold)',
            padding: '40px 48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '32px'
          }}>
            <div style={{ maxWidth: '640px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                Судебная защита бизнеса
              </div>
              <h3 style={{ fontSize: '22px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0' }}>
                Защита интересов ответчика опытными судебными юристами
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.65, margin: 0 }}>
                Оперативно подключаемся к процессу на любой стадии: от подготовки первого отзыва до судебных прений и заключения мирового соглашения.
              </p>
            </div>
            <a href="#form" className="btn btn-primary" style={{ padding: '14px 32px', fontSize: '15px' }}>
              Защитить компанию в суде
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 10: КЕЙСЫ ═══ */}
      <section className="section bg-light" id="cases" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '44px', textAlign: 'left' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
              Практика защиты
            </div>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', margin: '0 0 16px 0', lineHeight: 1.2 }}>
              Примеры защиты ответчиков в арбитражном суде
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
              Алгоритм защиты
            </div>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 16px 0', lineHeight: 1.2 }}>
              Как мы организуем защиту ответчика
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div style={{ padding: '24px', background: 'var(--color-bg-light)', borderLeft: '3px solid var(--color-primary)' }}>
              <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '6px' }}>
                1. Срочный аудит иска
              </strong>
              <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                Вы направляете нам копию иска и определение суда. Мы изучаем дело и процессуальные сроки.
              </span>
            </div>
            <div style={{ padding: '24px', background: 'var(--color-bg-light)', borderLeft: '3px solid var(--color-gold)' }}>
              <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '6px' }}>
                2. Подготовка отзыва и контррасчета
              </strong>
              <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                Составляем мотивированный отзыв, готовим ходатайства о снижении штрафов и встречный иск.
              </span>
            </div>
            <div style={{ padding: '24px', background: 'var(--color-bg-light)', borderLeft: '3px solid var(--color-primary)' }}>
              <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '6px' }}>
                3. Судебное представительство
              </strong>
              <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                Участвуем во всех судебных заседаниях, отбиваем необоснованные требования и защищаем активы.
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
              Тарифы на защиту ответчика
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
              Вопросы по защите ответчика
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
                Защита в Арбитражном суде Липецкой области
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
              Защита ответчика
            </div>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 16px 0', lineHeight: 1.2 }}>
              Поручите защиту компании арбитражному юристу
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
              Укажите номер дела или приложите копию иска. Перезвоним в течение 15 минут в рабочее время для срочного процессуального аудита.
            </p>
          </div>

          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <ContactsForm
              title="Срочная заявка на защиту ответчика"
              subtitle="Перезвоним в течение 15 минут в рабочее время для анализа иска."
              hiddenFields={[{ name: 'service', value: 'Защита ответчика в арбитражном суде' }]}
              buttonText="Защитить компанию от иска"
            />
          </div>
        </div>
      </section>
    </>
  );
}
