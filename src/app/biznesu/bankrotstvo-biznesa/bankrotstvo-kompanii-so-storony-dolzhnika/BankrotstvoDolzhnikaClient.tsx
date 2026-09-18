'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock, { FAQItem } from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';
import CasesBlock, { CaseData } from '@/components/CasesBlock';
import ProcessBlock, { ProcessStep } from '@/components/ProcessBlock';
import PricingBlock, { PricingTier } from '@/components/PricingBlock';
import SpecialistBlock from '@/components/SpecialistBlock';

export default function BankrotstvoDolzhnikaClient() {
  const situations = [
    {
      tag: 'Неплатежи',
      title: 'Компания перестала справляться с текущими платежами',
      desc: 'Просрочки перед поставщиками, банками или бюджетом накапливаются. Нужно установить, возникла ли у директора обязанность подачи заявления в суд.'
    },
    {
      tag: 'Блокировки',
      title: 'Арест расчетных счетов и действия судебных приставов',
      desc: 'Исполнительные производства блокируют операционную деятельность. Расчёты с контрагентами парализованы, возникает риск преимущественного удовлетворения.'
    },
    {
      tag: 'Угроза кредитора',
      title: 'Кредитор опубликовал намерение или подал заявление',
      desc: 'Контрагент инициировал банкротство компании. Требуется срочный аудит обоснованности требований и противодействие навязанной кандидатуре управляющего.'
    },
    {
      tag: 'Неравномерность',
      title: 'Исполнение перед одними исключает расчеты с другими',
      desc: 'Выборочные выплаты кредиторам в условиях кризиса создают прямой состав оспоримости сделок и персональной ответственности руководителя.'
    },
    {
      tag: 'Сделки в кризис',
      title: 'Отчуждение имущества, зачеты или займы учредителей',
      desc: 'Необходим превентивный аудит хозяйственных операций за 3 года, чтобы исключить квалификацию действий как вывод активов или вред кредиторам.'
    },
    {
      tag: 'Документооборот',
      title: 'Неполнота или риск утраты первичной документации',
      desc: 'Отсутствие первичных бухгалтерских документов у управляющего — главное основание для взыскания всех долгов компании с руководителя.'
    }
  ];

  const urgentCards: { title: React.ReactNode; desc: string }[] = [
    {
      title: (
        <>
          Месячный срок <br />
          на подачу заявления
        </>
      ),
      desc: 'При возникновении признаков неплатёжеспособности руководитель обязан обратиться в арбитражный суд в течение 1 месяца (ст. 9 Закона № 127-ФЗ). Пропуск срока влечёт личную субсидиарную ответственность по всем новым обязательствам.'
    },
    {
      title: (
        <>
          Глубина проверки сделок <br />
          до 3 лет
        </>
      ),
      desc: 'Арбитражный управляющий и кредиторы проверяют любые сделки по отчуждению техники, недвижимости, взаимозачётам и премиям. Без правовой подготовки высок риск их признания недействительными с возвратом активов.'
    },
    {
      title: (
        <>
          Инициатива кредиторов <br />
          и кандидатура АУ
        </>
      ),
      desc: 'Если первым в суд обратится недобросовестный кредитор, он заявит кандидатуру арбитражного управляющего из своей СРО. Перехватить контроль над инвентаризацией и оценкой станет в разы сложнее.'
    }
  ];

  const diagnosticContours = [
    {
      title: 'Стадия и судебный статус',
      what: 'Судебные дела в картотеке арбитража, публикации на Федресурсе, исполнительные производства ФССП и аресты счетов.',
      why: 'Определить ближайшее процессуальное действие и исключить опоздание с процессуальными сроками.'
    },
    {
      title: 'Реестр обязательств компании',
      what: 'Кредиторы, суммы требований, сроки погашения, залоги, споры по неустойкам и очередность платежей.',
      why: 'Отделить бесспорный долг от необоснованных претензий и собрать достоверную карту финансовой нагрузки.'
    },
    {
      title: 'Имущественный комплекс',
      what: 'Недвижимость, спецтехника, права требования (дебиторка), товарные остатки и обременения.',
      why: 'Оценить реальную конкурсную массу без иллюзий и риска обвинений в сокрытии имущества.'
    },
    {
      title: 'Сделки периода подозрительности',
      what: 'Платежи, взаимозачёты, отчуждение имущества, займы учредителей за последние 3 года.',
      why: 'Выявить риски оспаривания по специальным статьям 61.2 и 61.3 Закона о банкротстве и подготовить защиту.'
    },
    {
      title: 'Контур управления и КДЛ',
      what: 'Приказы, полномочия, бухгалтерские базы, сохранность первички и основания ключевых управленческих решений.',
      why: 'Защитить директора, учредителей и финансового руководителя от субсидиарной ответственности.'
    },
    {
      title: 'Альтернативные сценарии',
      what: 'Мировое соглашение, финансовое оздоровление, структурированная реструктуризация долга.',
      why: 'Не подменять юридический анализ формальным банкротством, если есть возможность сохранить бизнес.'
    }
  ];

  const processSteps: ProcessStep[] = [
    {
      num: '01',
      title: 'Фиксируем роль и событие',
      desc: 'Уточняем, кто обращается, что уже произошло и какое действие требует ближайшей реакции.'
    },
    {
      num: '02',
      title: 'Проверяем открытые данные',
      desc: 'Изучаем картотеку арбитражных дел, публикации в ЕФРСБ, исполнительные производства и реестры.'
    },
    {
      num: '03',
      title: 'Собираем документы',
      desc: 'Согласуем перечень и безопасный канал передачи финансовых, корпоративных и судебных материалов.'
    },
    {
      num: '04',
      title: 'Готовим правовую карту',
      desc: 'Разделяем подтверждённые факты, недостающие данные, риски и доступные сценарии.'
    },
    {
      num: '05',
      title: 'Фиксируем решение и объём',
      desc: 'Согласуем необходимость обращения, этапы, команду, стоимость юридических услуг и внешние расходы.'
    },
    {
      num: '06',
      title: 'Подаём заявление и сопровождаем',
      desc: 'Готовим документы, представляем интересы в суде и ведём согласованные стадии и смежные задачи.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Первичная консультация',
      subtitle: 'Уточнение роли, стадии и события',
      price: 'от 5 000 ₽',
      popular: false,
      features: [
        { name: 'экспресс-анализ карточки дела и долгов', value: 'Да' },
        { name: 'определение обязанности подачи заявления', value: 'Да' },
        { name: 'рекомендации по неотложным действиям', value: 'Да' }
      ],
      buttonText: 'Записаться',
      buttonHref: '#form'
    },
    {
      title: 'Банкротная диагностика',
      subtitle: 'Полная проверка оснований и рисков',
      price: 'от 35 000 ₽',
      popular: true,
      badgeText: 'Оптимально',
      features: [
        { name: 'карта признаков неплатёжеспособности', value: 'Да' },
        { name: 'аудит сделок периода подозрительности', value: 'Да' },
        { name: 'анализ субсидиарных рисков директора', value: 'Да' },
        { name: 'письменная правовая позиция', value: 'Да' }
      ],
      buttonText: 'Заказать аудит',
      buttonHref: '#form'
    },
    {
      title: 'Подготовка заявления должника',
      subtitle: 'Комплект документов для арбитража',
      price: 'от 40 000 ₽',
      popular: false,
      features: [
        { name: 'мотивированное заявление в арбитраж', value: 'Да' },
        { name: 'формирование описи и приложений', value: 'Да' },
        { name: 'публикация на Федресурсе', value: 'Да' },
        { name: 'электронная подача в суд', value: 'Да' }
      ],
      buttonText: 'Подготовить заявление',
      buttonHref: '#form'
    },
    {
      title: 'Сопровождение отдельной стадии',
      subtitle: 'Наблюдение или конкурсное производство',
      price: 'от 50 000 ₽',
      popular: false,
      features: [
        { name: 'участие в судебных заседаниях', value: 'Да' },
        { name: 'взаимодействие с управляющим', value: 'Да' },
        { name: 'контроль реестра требований кредиторов', value: 'Да' }
      ],
      buttonText: 'Обсудить стадию',
      buttonHref: '#form'
    },
    {
      title: 'Комплексное сопровождение',
      subtitle: 'Полное ведение процедуры под контролем',
      price: 'от 80 000 ₽',
      popular: false,
      features: [
        { name: 'полный цикл от заявления до завершения', value: 'Да' },
        { name: 'защита директора от субсидиарки', value: 'Да' },
        { name: 'отбитие необоснованных требований', value: 'Да' },
        { name: 'постоянная правовая поддержка', value: 'Да' }
      ],
      buttonText: 'Запросить смету',
      buttonHref: '#form'
    }
  ];

  const casesData: CaseData[] = [
    {
      category: 'Производство / Стройматериалы',
      title: 'Производственная компания: своевременная подача заявления должника',
      problem: 'У компании образовались кассовые разрывы, долги перед поставщиками на сумму 32 млн ₽, начались аресты счетов ФССП.',
      action: 'Провели аудит задолженности, установили точный момент наступления неплатёжеспособности, подготовили и подали заявление должника с полным комплектом финансово-экономических обоснований.',
      result: 'Суд ввёл процедуру наблюдения, сняты исполнительные аресты со счетов, процесс переведён в цивилизованное русло без персональных обвинений руководства.'
    },
    {
      category: 'Оптовая торговля / Защита',
      title: 'Кредитор подал заявление о банкротстве компании с лояльным АУ',
      problem: 'Банк инициировал банкротство торговой компании за невозврат кредита на 18 млн ₽ с намерением ввести контролируемого конкурсного управляющего.',
      action: 'Вступили в дело, проверили расчёты банка, выявили процессуальные нарушения в публикации намерения, подготовили мотивированные возражения и альтернативные кандидатуры СРО.',
      result: 'Утверждена независимая кандидатура арбитражного управляющего, пресечены попытки необоснованного отчуждения залоговой базы по заниженной цене.'
    },
    {
      category: 'Логистика / Активы и сделки',
      title: 'Компания с автопарком: превентивная защита сделок перед банкротством',
      problem: 'В период финансового ухудшения компания реализовала часть автотранспорта. Возник высокий риск оспаривания сделок и личной ответственности генерального директора.',
      action: 'Собрали доказательства рыночности цен сделок и расходования всей выручки на расчёты по зарплате и поставщикам, подготовили превентивную правовую позицию.',
      result: 'Арбитражному управляющему представлены исчерпывающие доказательства добросовестности; основания для оспаривания сделок и привлечения к субсидиарной ответственности исключены.'
    }
  ];

  const faqItems: FAQItem[] = [
    {
      q: 'Когда компания вправе сама обратиться с заявлением о банкротстве?',
      a: 'Право должника связано с обстоятельствами, при которых очевидно, что исполнить обязательства в установленный срок невозможно. Юрист оценивает финансовые показатели, сроки, активы и требования контрагентов, чтобы обосновать добросовестность обращения.'
    },
    {
      q: 'Когда обращение в суд становится обязанностью руководителя?',
      a: 'Закон предусматривает несколько оснований: неудовлетворение требований одного кредитора делает невозможным исполнение перед другими, размер обязательств превышает стоимость активов. Руководитель обязан подать заявление не позднее 1 месяца со дня наступления таких признаков.'
    },
    {
      q: 'Можно ли подать заявление должника, если кредитор уже подал в суд?',
      a: 'Сначала необходимо проверить карточку дела, содержание заявления кредитора, назначенную дату заседания и приложенные расчеты. Дальнейшие действия зависят от стадии: иногда эффективнее заявить обоснованные возражения или предложить план реструктуризации.'
    },
    {
      q: 'Банкротство автоматически освобождает от долгов компанию и директора?',
      a: 'Нет. Непогашенные долги списываются у юридического лица только при завершении конкурсного производства при условии отсутствия оснований для субсидиарной ответственности. Руководитель и учредители защищены только в том случае, если их действия были добросовестными и разумными.'
    },
    {
      q: 'Может ли предприятие продолжать работу во время процедуры?',
      a: 'В процедуре наблюдения руководство сохраняет большинство полномочий с ограничением на крупные сделки. В конкурсном производстве управление переходит к арбитражному управляющему, но производственная деятельность может продолжаться по решению собрания кредиторов.'
    },
    {
      q: 'Кто утверждает арбитражного управляющего?',
      a: 'При подаче заявления должником выбирается саморегулируемая организация (СРО), из числа членов которой суд методом случайного выбора или в установленном законом порядке утверждает управляющего. Мы строго контролируем соблюдение установленной законом процедуры.'
    },
    {
      q: 'Какие сделки за последние 3 года будут проверять?',
      a: 'Проверяются подозрительные сделки по заниженным ценам (ст. 61.2 Закона о банкротстве), сделки с предпочтением одному из кредиторов (ст. 61.3), а также операции с аффилированными лицами, учредителями и займы.'
    },
    {
      q: 'Как защитить директора от субсидиарной ответственности?',
      a: 'Главное — обеспечить полную сохранность и передачу бухгалтерской документации, доказать экономическую обоснованность антикризисного плана и не допускать сомнительных сделок перед банкротством. Этим занимается профильный юрист на этапе диагностики.'
    },
    {
      q: 'Сколько времени занимает банкротство юридического лица?',
      a: 'В среднем от 9 месяцев до 2 лет. Сроки зависят от объёма конкурсной массы, количества кредиторов, оспаривания сделок и реализации имущества на открытых торгах.'
    },
    {
      q: 'Из чего складывается итоговая стоимость процедуры?',
      a: 'Стоимость состоит из фиксированной оплаты юридического сопровождения и обязательных внешних расходов (госпошлина, вознаграждение АУ — 30 000 ₽/мес., публикации в ЕФРСБ и газете «Коммерсантъ», торги, судебный депозит).'
    }
  ];

  const relatedServices = [
    {
      title: 'Представление интересов кредитора',
      desc: 'Взыскание долгов с неплатежеспособного контрагента в процедуре банкротства.',
      link: '/biznesu/bankrotstvo-biznesa/predstavlenie-interesov-kreditora/'
    },
    {
      title: 'Включение в реестр требований',
      desc: 'Соблюдение сроков, подготовка требования и доказывание долга в суде.',
      link: '/biznesu/bankrotstvo-biznesa/vklyuchenie-v-reestr-trebovanij-kreditorov/'
    },
    {
      title: 'Защита от субсидиарной ответственности',
      desc: 'Защита директора, учредителей и бухгалтера от взыскания долгов компании.',
      link: '/biznesu/bankrotstvo-biznesa/zashchita-ot-subsidiarnoj-otvetstvennosti/'
    },
    {
      title: 'Оспаривание сделок при банкротстве',
      desc: 'Защита договоров купли-продажи, залога и платежей от отмены управляющим.',
      link: '/biznesu/bankrotstvo-biznesa/osparivanie-sdelok-pri-bankrotstve/'
    }
  ];

  const jsonLdGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LegalService',
        '@id': 'https://dejure-help.ru/#legalservice',
        name: 'Юридическая компания Де-Юре',
        url: 'https://dejure-help.ru/',
        telephone: '+7 (4742) 20-15-25',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'ул. Советская, д. 35, оф. 213',
          addressLocality: 'Липецк',
          addressRegion: 'Липецкая область',
          addressCountry: 'RU'
        },
        areaServed: ['Липецк', 'Липецкая область'],
        employee: {
          '@id': 'https://dejure-help.ru/specialisty/nacheshnikov-vladimir-viktorovich/#person'
        }
      },
      {
        '@type': 'Person',
        '@id': 'https://dejure-help.ru/specialisty/nacheshnikov-vladimir-viktorovich/#person',
        name: 'Владимир Викторович Начешников',
        url: 'https://dejure-help.ru/specialisty/nacheshnikov-vladimir-viktorovich/',
        worksFor: {
          '@id': 'https://dejure-help.ru/#legalservice'
        }
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/bankrotstvo-kompanii-so-storony-dolzhnika/#service',
        name: 'Банкротство компании со стороны должника в Липецке',
        serviceType: 'Юридическое сопровождение банкротства юридических лиц со стороны должника',
        provider: {
          '@id': 'https://dejure-help.ru/#legalservice'
        },
        areaServed: ['Липецк', 'Липецкая область'],
        url: 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/bankrotstvo-kompanii-so-storony-dolzhnika/',
        description: 'Диагностика кризиса, аудит обязательств, активов и сделок, защита директора от субсидиарной ответственности и подача заявления в арбитражный суд.'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/bankrotstvo-kompanii-so-storony-dolzhnika/#breadcrumb',
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
            name: 'Банкротство бизнеса',
            item: 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/'
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Банкротство со стороны должника',
            item: 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/bankrotstvo-kompanii-so-storony-dolzhnika/'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/bankrotstvo-kompanii-so-storony-dolzhnika/#faq',
        mainEntity: faqItems.map(item => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a
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
      <Header />

      {/* ═══ БЛОК 1: HERO ═══ */}
      <MilitaryHero
        breadcrumbs={
          <>
            <Link href="/">Главная</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/biznesu/">Бизнесу</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/biznesu/bankrotstvo-biznesa/">Банкротство бизнеса</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Банкротство со стороны должника</span>
          </>
        }
        superTitle={
          <span style={{ whiteSpace: 'normal', display: 'inline-block', lineHeight: 1.4 }}>
            <span style={{ display: 'inline-block' }}>БАНКРОТСТВО КОМПАНИИ • ДОЛЖНИК •</span> <br />
            <span style={{ display: 'inline-block' }}>Липецк и арбитраж</span>
          </span>
        }
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Банкротство компании
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              со стороны должника
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Проверим основания и стадию кризиса, документы, активы, сделки и риски руководства. Если банкротная процедура применима, подготовим обращение в суд и согласуем объём сопровождения.
          </span>
        }
        primaryCtaText="Проверить ситуацию компании"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_primary_cta_bankrotstvo_dolzhnika"
        primaryCtaSubtext={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Перезвоним в рабочее время
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              или ответим по телефону: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (4742) 20-15-25</a>
            </span>
          </span>
        }
        imageUrl="/images/nacheshnikov.jpg"
        imageName="Владимир Викторович Начешников"
        imageSubtitle="Куратор направления арбитражного и банкротного права"
        imageObjectPosition="center 15%"
        trustItems={[
          {
            text: (
              <span>
                <strong>Куратор направления</strong> — Владимир Викторович Начешников
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Практический опыт с 1997 года</strong> в арбитражных судах и процедурах банкротства
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Защита руководства</strong> от необоснованной субсидиарной ответственности
              </span>
            )
          }
        ]}
      />

      {/* ═══ БЛОК 2: ТИПОВЫЕ СИТУАЦИИ / СИГНАЛЫ КРИЗИСА (#situations) ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span style={{ display: 'inline-block' }}>Когда компании необходима</span> <br />
              <span style={{ display: 'inline-block' }}>правовая помощь должнику</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Отдельная задержка платежей ещё не означает банкротства. Но наличие нескольких факторов требует срочного правового анализа, пока не совершены необратимые ошибки.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '32px' }}>
            {situations.map((sit, idx) => (
              <div
                key={idx}
                className="card hover-lift"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-gold)',
                  borderRadius: '0',
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '-15px',
                  width: '90px',
                  height: '90px',
                  opacity: 0.04,
                  pointerEvents: 'none',
                  color: 'var(--color-deep-blue)'
                }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>

                <div>
                  {sit.tag && (
                    <div style={{
                      fontSize: '11.5px',
                      fontWeight: 700,
                      color: 'var(--color-primary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      marginBottom: '12px',
                      background: 'rgba(23, 50, 77, 0.06)',
                      padding: '3px 8px',
                      display: 'inline-block',
                      borderRadius: '2px'
                    }}>
                      {sit.tag}
                    </div>
                  )}

                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '18px',
                    fontWeight: 600,
                    color: 'var(--color-deep-blue)',
                    margin: '0 0 12px 0',
                    lineHeight: 1.35
                  }}>
                    {sit.title}
                  </h3>

                  <p style={{
                    fontSize: '14px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    {sit.desc}
                  </p>
                </div>

                <a
                  href="#form"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--color-primary)',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    marginTop: '20px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-primary)')}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('form');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    else window.location.hash = 'form';
                  }}
                >
                  <span>Проверить ситуацию</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: СРОЧНОСТЬ — КОГДА НЕЛЬЗЯ ТЕРЯТЬ ВРЕМЯ (#urgent) ═══ */}
      <section className="section" id="urgent" style={{ background: 'var(--color-deep-blue)', color: '#FFFFFF', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '60px', height: '2px', background: 'var(--color-gold)' }}></div>
              <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Срочность обращения
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 3.8vw, 38px)', color: '#FFFFFF', margin: '0 0 16px 0', lineHeight: 1.25 }}>
              Когда затягивание приводит к личной ответственности руководства
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.82)', margin: 0, lineHeight: 1.65 }}>
              В банкротном праве пассивность должника толкуется судами не в пользу руководителя. Своевременные действия позволяют защитить законные интересы предприятия и сохранить контроль над правовой позицией:
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '20px', marginBottom: '40px' }}>
            {urgentCards.map((card, cIdx) => (
              <div
                key={cIdx}
                className="urgent-card hover-lift"
                style={{
                  background: 'linear-gradient(135deg, #FAF7F2 0%, #F3ECDF 100%)',
                  padding: '30px 24px',
                  borderTop: '4px solid var(--color-gold)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
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
                      {card.title}
                    </div>
                  </div>
                  <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '14px', lineHeight: 1.55, margin: 0 }}>
                    {card.desc}
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
              <strong style={{ color: '#FFFFFF' }}>Важно:</strong> Не совершайте платежей «задним числом» и не передавайте активы до правовой оценки.
            </span> <br className="hidden-mobile" />
            <span style={{ display: 'inline-block' }}>
              Любые нетипичные переводы перед судом оспариваются конкурсным управляющим и служат доказательством недобросовестности.
            </span>
          </div>

          <style dangerouslySetInnerHTML={{__html: `
            .urgent-card {
              transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
            }
            .urgent-card:hover {
              transform: translateY(-6px);
              box-shadow: 0 18px 36px rgba(0,0,0,0.28) !important;
            }
            .btn-urgent-outline {
              border: 1px solid rgba(255,255,255,0.8) !important;
              color: #FFFFFF !important;
              background: transparent !important;
              text-decoration: none !important;
              font-weight: 600 !important;
              transition: all 0.3s ease !important;
              border-radius: 0 !important;
              display: inline-block !important;
            }
            .btn-urgent-outline:hover {
              background: rgba(255,255,255,0.18) !important;
              color: #FFFFFF !important;
              border-color: #FFFFFF !important;
            }
            .btn-urgent-call {
              display: inline-block !important;
              border-radius: 0 !important;
              text-decoration: none !important;
              background-color: var(--color-gold) !important;
              color: var(--color-deep-blue) !important;
              font-weight: 700 !important;
              transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
              border: 1px solid var(--color-gold) !important;
            }
            .btn-urgent-call:hover {
              background-color: #FFFFFF !important;
              color: #0B1C2A !important;
              border-color: #FFFFFF !important;
              transform: translateY(-2px);
            }
          `}} />

          {/* Зона связи */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <a href="tel:+79103503111" style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.02em' }} data-analytics="phone_click">
                +7 (910) 350-31-11
              </a>
              <a href="tel:+79103503111" className="btn-urgent-call" style={{ padding: '14px 28px', fontSize: '15px' }} data-analytics="phone_click">
                Позвонить юристу
              </a>
              <a href="#form" className="btn btn-urgent-outline" style={{ padding: '14px 28px', fontSize: '15px' }}>
                Срочная консультация
              </a>
            </div>
            <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px' }}>
              Консультация дежурного юриста по банкротству
            </span>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: ШЕСТЬ КОНТУРОВ ПРОВЕРКИ (#check) ═══ */}
      <section className="section" id="check" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              <span style={{ display: 'inline-block' }}>Шесть контуров правовой</span> <br />
              <span style={{ display: 'inline-block' }}>проверки должника</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Исследуем не просто один баланс, а полную систему отношений компании с контрагентами, банками, налоговыми органами и участниками.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', position: 'relative' }}>
            {diagnosticContours.map((item, idx) => (
              <div
                key={idx}
                className="hover-lift"
                style={{
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  padding: '36px 30px 32px 30px',
                  border: '1px solid var(--color-border)',
                  borderTop: '4px solid var(--color-gold)',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '24px',
                  background: 'var(--color-gold)',
                  color: '#FFFFFF',
                  fontSize: '12px',
                  fontWeight: 700,
                  padding: '2px 10px',
                  borderRadius: '2px',
                  letterSpacing: '0.05em'
                }}>
                  0{idx + 1}
                </div>
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '8px 0 14px 0', lineHeight: 1.35 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: '0 0 12px 0' }}>
                  <strong>Что смотрим:</strong> {item.what}
                </p>
                <p style={{ fontSize: '13.5px', color: 'var(--color-deep-blue)', lineHeight: 1.55, margin: 0, borderTop: '1px dashed var(--color-border)', paddingTop: '10px' }}>
                  <strong>Зачем:</strong> {item.why}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 5: КУРАТОР НАПРАВЛЕНИЯ ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name="Владимир Викторович Начешников"
        position="Специалист по арбитражным спорам и банкротству, куратор корпоративного направления"
        imageUrl="/images/nacheshnikov.jpg"
        imagePosition="center 15%"
        profileHref="/specialisty/nacheshnikov-vladimir-viktorovich/"
        profileText="Подробнее о Владимире Викторовиче Начешникове →"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Банкротство должника — это не формальная ликвидация компании, а сложный судебный процесс с высокими рисками личной субсидиарной ответственности руководства и учредителей.
          </span>,
          <span key="2" style={{ color: 'var(--color-deep-blue)', display: 'block', marginTop: '12px' }}>
            Владимир Викторович лично руководит правовым аудитом кризисной ситуации, оценивает безопасность сделок за трёхлетний период и формирует выверенную позицию для арбитражного суда.
          </span>
        ]}
        buttonText="Обсудить ситуацию с куратором"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 6: ПРАКТИКА И КЕЙСЫ ═══ */}
      <CasesBlock
        title={<><span style={{ display: 'inline-block' }}>Практика защиты компании</span> <br /><span style={{ display: 'inline-block' }}>и руководства при банкротстве</span></>}
        cases={casesData}
        showAllLink="/praktika/"
        showAllText="Смотреть всю практику →"
        showDemoWarning={true}
      />

      {/* ═══ БЛОК 7: ПОРЯДОК РАБОТЫ ═══ */}
      <ProcessBlock
        title="Порядок совместной работы"
        subtitle="Чёткий алгоритм действий — от сбора открытых сведений до судебного представительства."
        alignTitle="center"
        steps={processSteps}
        ctaTitle="Готовы провести диагностику компании?"
        ctaSubtitle="Оставьте заявку на разбор ситуации — куратор направления свяжется с вами в рабочее время."
        ctaButtonText="Обсудить ситуацию"
        ctaButtonHref="#form"
      />

      {/* ═══ БЛОК 8: ТАРИФЫ И СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость сопровождения банкротства компании"
        subtitle="Стоимость юридических услуг фиксируется в договоре. Судебные расходы и депозит регламентируются законом."
        tiers={pricingTiers}
        disclaimer="Вознаграждение арбитражного управляющего (от 30 000 ₽/мес.), обязательные публикации в ЕФРСБ и газете «Коммерсантъ», судебные депозиты и экспертизы оплачиваются отдельно в соответствии с требованиями Федерального закона № 127-ФЗ."
        ctaTitle="Рассчитаем точную смету сопровождения"
        ctaSubtitle="Оставьте заявку — куратор проведет предварительный анализ ситуации и подготовит предложение."
        ctaButtonText="Запросить смету"
        ctaButtonLink="#form"
      />

      {/* ═══ БЛОК 9: FAQ ═══ */}
      <FAQBlock
        superTitle="Частые вопросы должников"
        title={<><span>Вопросы и ответы</span> <br /><span>о банкротстве компании</span></>}
        subtitle="Об обязанностях директора, сохранении активов, сделках и процедурах"
        ctaText="Задать свой вопрос"
        ctaLink="#form"
        faqs={faqItems}
      />

      {/* ═══ БЛОК 10: СМЕЖНЫЕ НАПРАВЛЕНИЯ ПРАКТИКИ ═══ */}
      <section className="section bg-light" id="related-services" style={{ padding: '64px 0', background: 'var(--gradient-cream)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ marginBottom: '36px' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '10px'
            }}>
              Смежные направления практики
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '24px'
            }}>
              <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px, 3.5vw, 34px)', color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.25, flex: '1 1 480px', minWidth: '280px' }}>
                <span style={{ display: 'inline-block' }}>Связанные процедуры</span> <br /><span style={{ display: 'inline-block' }}>в банкротном праве</span>
              </h2>
              <p style={{
                flex: '0 1 440px',
                minWidth: '280px',
                fontSize: '15.5px',
                color: 'var(--color-text-secondary)',
                fontWeight: 400,
                lineHeight: 1.65,
                margin: 0,
                textAlign: 'left',
                textWrap: 'balance'
              }}>
                Комплексная защита бизнеса и руководства в арбитражных судах всех инстанций.
              </p>
            </div>
          </div>

          <style dangerouslySetInnerHTML={{ __html: `
            .related-service-card {
              border-top: 3px solid var(--color-primary) !important;
              transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
            }
            .related-service-card:hover {
              border-top: 3px solid var(--color-gold) !important;
              transform: translateY(-6px) !important;
              box-shadow: 0 16px 36px rgba(23, 50, 77, 0.12) !important;
            }
            .related-service-card:hover .card-arrow {
              color: var(--color-gold) !important;
            }
            .related-service-card:hover .card-arrow svg {
              stroke: var(--color-gold) !important;
              transform: translateX(6px) !important;
            }
          `}} />

          <div className="grid grid-4" style={{ gap: '20px', marginBottom: '28px' }}>
            {relatedServices.map((rel, idx) => (
              <Link key={idx} href={rel.link} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                <div
                  className="card related-service-card hover-lift"
                  style={{
                    height: '100%',
                    minHeight: '180px',
                    padding: '26px 24px',
                    background: 'var(--color-white)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 16px rgba(23, 50, 77, 0.04)'
                  }}
                >
                  <div>
                    <h3 style={{ margin: '0 0 10px 0', fontSize: '17px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', lineHeight: 1.35, fontWeight: 700 }}>
                      {rel.title}
                    </h3>
                    <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                      {rel.desc}
                    </p>
                  </div>
                  <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontSize: '13.5px', fontWeight: 600, marginTop: '18px', transition: 'color 0.35s ease' }}>
                    <span>Подробнее об услуге</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 11: ФИНАЛЬНАЯ ФОРМА (#form) ═══ */}
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
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Проверьте положение компании</span>{' '}
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>до принятия решений</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Сообщите название компании или номер дела и кратко опишите ситуацию. Специалист уточнит стадию и согласует перечень документов для первичного разбора.
              </p>

              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация юриста</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Позвоните нам: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (4742) 20-15-25</a>
                </p>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '6px' }}>
                  Липецк, ул. Советская, д. 35, офис 213 (приём по записи)
                </div>
              </div>

              <div style={{ background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Конфиденциальность:</strong>
                Не передавайте через форму бухгалтерские базы, пароли, банковские реквизиты, коммерческую тайну и конфиденциальные сведения. Защищённый способ связи согласуем после контакта.
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm
                title="Заявка на диагностику"
                subtitle="Оставьте контакты и номер дела — юрист свяжется с вами в течение 15 минут в рабочее время."
                subtext="Если вы оставите заявку вечером или в выходной день, мы свяжемся с вами в ближайший рабочий день."
                buttonText="Проверить ситуацию компании"
                commentPlaceholder="Кратко укажите суть задачи, номер дела или реквизиты компании…"
                hiddenFields={[
                  { name: 'source_page', value: '/biznesu/bankrotstvo-biznesa/bankrotstvo-kompanii-so-storony-dolzhnika/' },
                  { name: 'service', value: 'Банкротство компании со стороны должника' }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 12: FOOTER ═══ */}
      <Footer />
    </>
  );
}
