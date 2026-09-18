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

export default function ObzhalovanieUpravlyayushchegoClient() {
  const situations = [
    {
      tag: 'Бездействие',
      title: 'Управляющий затягивает процедуру и не разыскивает активы',
      desc: 'Не направляет запросы в госорганы, не проводит инвентаризацию и уклоняется от подачи заявлений об оспаривании подозрительных сделок должника.'
    },
    {
      tag: 'Нарушения на торгах',
      title: 'Занижение стоимости имущества и непрозрачные аукционы',
      desc: 'Утверждает заведомо невыгодное положение о торгах, занижает стартовую стоимость объектов и создает препятствия для независимых участников.'
    },
    {
      tag: 'Завышенные расходы',
      title: 'Необоснованное расходование конкурсной массы на специалистов',
      desc: 'Привлекает карманных юристов, оценщиков и бухгалтеров по завышенным ставкам, искусственно уменьшая объём выплат реестровым кредиторам.'
    },
    {
      tag: 'Сокрытие информации',
      title: 'Игнорирование запросов и непредставление отчетов кредиторам',
      desc: 'Отказывается знакомить кредиторов с материалами дела, не направляет финансовые отчеты и скрывает сведения о движении средств на спецсчетах.'
    },
    {
      tag: 'Конфликт интересов',
      title: 'Аффилированность управляющего с должником или мажоритарием',
      desc: 'Действует в узких интересах должника или связанного кредитора, игнорируя законные права остальных участников дела о банкротстве.'
    },
    {
      tag: 'Взыскание убытков',
      title: 'Причинение прямого финансового ущерба конкурсному имуществу',
      desc: 'Утрата имущества, непринятие мер по взысканию дебиторской задолженности. Взыщем убытки за счёт страховки АУ и компенсационного фонда СРО.'
    }
  ];

  const urgentCards = [
    {
      title: 'Срочное приостановление незаконных торгов',
      desc: 'Если управляющий опубликовал положение о торгах с заниженной ценой или торги уже идут, требуется экстренное ходатайство в арбитражный суд об обеспечительных мерах.'
    },
    {
      title: 'Официальная фиксация факта нарушения',
      desc: 'Суд отклонит жалобу, если бездействие не зафиксировано документально. Требуется направить официальный запрос с описью вложения и зафиксировать пропуск законного срока ответа.'
    },
    {
      title: 'Предельные процессуальные сроки процедуры',
      desc: 'Жалобу с требованием об отстранении управляющего необходимо заявлять до утверждения судом отчета о завершении процедуры банкротства.'
    }
  ];

  const analysisContours = [
    {
      title: 'Статус и права заявителя',
      what: 'Проверяем процессуальный статус кредитора (включенность в реестр, размер требований) или статус участника должника.',
      why: 'Исключить отказ суда в рассмотрении жалобы по причине отсутствия процессуального права.'
    },
    {
      title: 'Квалификация нарушений закона',
      what: 'Сопоставляем действия или бездействие АУ со статьями 20.3, 60, 129, 130 и 139 Закона № 127-ФЗ.',
      why: 'Сформировать неоспоримый состав правонарушения, исключающий субъективное судейское усмотрение.'
    },
    {
      title: 'Доказательственная база',
      what: 'Собираем почтовые квитанции, скриншоты публикаций в ЕФРСБ, выписки из банков, отчеты об оценке и протоколы собраний.',
      why: 'Обеспечить 100% документальное подтверждение каждого довода жалобы.'
    },
    {
      title: 'Расчёт причинённого ущерба',
      what: 'Определяем разницу между реальной стоимостью актива и ценой продажи либо размер необоснованно списанных расходов.',
      why: 'Обосновать реальное нарушение прав заявителя и подготовить основание для взыскания убытков.'
    },
    {
      title: 'Точная маршрутизация обращения',
      what: 'Выбираем адресата: арбитражный суд (ст. 60), Управление Росреестра (ст. 14.13 КоАП РФ) или дисциплинарный комитет СРО.',
      why: 'Добиться максимального правового эффекта без потери времени на формальные отписки.'
    },
    {
      title: 'Контроль исполнения определения',
      what: 'Контролируем устранение нарушений, передачу документов, отстранение управляющего и утверждение нового АУ.',
      why: 'Довести рассмотрение жалобы до реального восстановления имущественных прав доверителя.'
    }
  ];

  const processSteps: ProcessStep[] = [
    {
      num: '01',
      title: 'Фиксация нарушений и аудит дела',
      desc: 'Изучаем отчеты управляющего, публикации в ЕФРСБ, картотеку арбитража и выявляем отступления от Закона о банкротстве.'
    },
    {
      num: '02',
      title: 'Сбор доказательственной базы',
      desc: 'Формируем официальные запросы, фиксируем почтовые отправления, собираем выписки и альтернативные оценки имущества.'
    },
    {
      num: '03',
      title: 'Подготовка мотивированной жалобы',
      desc: 'Составляем жалобу со ссылками на судебную практику ВС РФ, требованиями об устранении нарушений или отстранении управляющего.'
    },
    {
      num: '04',
      title: 'Принятие обеспечительных мер',
      desc: 'При необходимости заявляем ходатайство о приостановлении торгов или запрете расходования средств конкурсной массы.'
    },
    {
      num: '05',
      title: 'Судебное представительство',
      desc: 'Поддерживаем жалобу в судебных заседаниях арбитражного суда, опровергаем возражения управляющего и его представителей.'
    },
    {
      num: '06',
      title: 'Контроль исполнения и взыскание убытков',
      desc: 'Контролируем отстранение АУ, выбор новой кандидатуры либо взыскиваем причиненный ущерб со страховой компании управляющего.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Экспертиза действий управляющего',
      subtitle: 'Анализ отчетов и рисков дела',
      price: 'от 10 000 ₽',
      popular: false,
      features: [
        { name: 'правовой анализ отчетов и публикаций АУ', value: 'Да' },
        { name: 'проверка соблюдения сроков процедуры', value: 'Да' },
        { name: 'оценка перспектив отстранения или жалобы', value: 'Да' },
        { name: 'письменное заключение с планом действий', value: 'Да' }
      ],
      buttonText: 'Заказать экспертизу',
      buttonHref: '#form'
    },
    {
      title: 'Подготовка и подача жалобы',
      subtitle: 'Жалоба в арбитражный суд (ст. 60)',
      price: 'от 25 000 ₽',
      popular: true,
      badgeText: 'Востребовано',
      features: [
        { name: 'составление мотивированной жалобы в арбитраж', value: 'Да' },
        { name: 'формирование реестра доказательств нарушений', value: 'Да' },
        { name: 'подготовка жалоб в Росреестр и СРО', value: 'Да' },
        { name: 'подача документов через систему «Мой Арбитр»', value: 'Да' }
      ],
      buttonText: 'Подать жалобу',
      buttonHref: '#form'
    },
    {
      title: 'Ведение спора в суде под ключ',
      subtitle: 'Судебное представительство',
      price: 'от 55 000 ₽',
      popular: false,
      features: [
        { name: 'все действия тарифа «Подготовка жалобы»', value: 'Да' },
        { name: 'участие во всех судебных заседаниях суда', value: 'Да' },
        { name: 'подача ходатайств об обеспечительных мерах', value: 'Да' },
        { name: 'доказывание грубости нарушений для отстранения', value: 'Да' }
      ],
      buttonText: 'Передать спор юристу',
      buttonHref: '#form'
    },
    {
      title: 'Взыскание убытков с управляющего',
      subtitle: 'Возмещение причиненного ущерба',
      price: 'от 60 000 ₽',
      popular: false,
      features: [
        { name: 'расчет реального ущерба конкурсной массе', value: 'Да' },
        { name: 'доказывание вины и причинной связи в суде', value: 'Да' },
        { name: 'взыскание средств со страховой компании АУ', value: 'Да' },
        { name: 'обращение к компенсационному фонду СРО', value: 'Да' }
      ],
      buttonText: 'Взыскать убытки',
      buttonHref: '#form'
    }
  ];

  const casesData: CaseData[] = [
    {
      category: 'Приостановление торгов',
      title: 'Отмена незаконного положения о торгах и сохранение имущества на 45 млн ₽',
      problem: 'Конкурсный управляющий утвердил продажу имущественного комплекса завода по заниженной в 3 раза начальной цене в пользу связанного покупателя.',
      action: 'Подали срочную жалобу в арбитражный суд с ходатайством об обеспечительных мерах. Доказали занижение стоимости и нарушение правил публикации.',
      result: 'Торги приостановлены судом, положение признано недействительным, начальная цена повышена до справедливой рыночной оценки 45 млн ₽.'
    },
    {
      category: 'Отстранение управляющего',
      title: 'Отстранение конкурсного управляющего за уклонение от оспаривания сделок',
      problem: 'Управляющий на протяжении 8 месяцев игнорировал требования кредиторов об оспаривании вывода автопарка должника на сумму 19 млн ₽.',
      action: 'Зафиксировали бездействие официальными запросами, доказали в суде осведомленность АУ о признаках недействительности сделок и причинение вреда.',
      result: 'Арбитражный суд Липецкой области признал бездействие незаконным и вынес определение об отстранении конкурсного управляющего от исполнения обязанностей.'
    },
    {
      category: 'Взыскание убытков',
      title: 'Взыскание 4,8 млн ₽ убытков с арбитражного управляющего за пропуск срока',
      problem: 'Управляющий не предъявил исполнительные листы к банковским счетам контрагентов должника, допустив истечение срока давности и утрату дебиторки.',
      action: 'Доказали виновное бездействие АУ и прямую причинно-следственную связь с утратой возможности реального пополнения конкурсной массы.',
      result: 'Суд взыскал 4,8 млн ₽ убытков с управляющего; выплата полностью получена кредиторами за счёт страхового полиса ответственности АУ.'
    }
  ];

  const faqItems: FAQItem[] = [
    {
      q: 'Куда эффективнее жаловаться на арбитражного управляющего?',
      a: 'Основной и наиболее действенный орган — арбитражный суд, рассматривающий дело о банкротстве (ст. 60 Закона о банкротстве). Только суд может признать действия незаконными, обязать совершить действия, отстранить управляющего или взыскать с него убытки. Жалобы в Росреестр и СРО эффективны как дополнительный рычаг давления для привлечения к административной ответственности.'
    },
    {
      q: 'Кто имеет право обжаловать действия или бездействие управляющего?',
      a: 'Правом на подачу жалобы в арбитражный суд обладают конкурсные кредиторы, уполномоченный орган (ФНС), должник, а также учредители (участники) должника через своего представителя.'
    },
    {
      q: 'За какие нарушения арбитражного управляющего могут отстранить?',
      a: 'Отстранение — исключительная мера. Для этого необходимо доказать не просто формальное нарушение, а неисполнение или ненадлежащее исполнение обязанностей, которое повлекло или могло повлечь убытки для должника или кредиторов.'
    },
    {
      q: 'Как доказать незаконность бездействия управляющего?',
      a: 'Необходимо подтвердить, что кредитор официально обращался к управляющему (с отметкой о вручении или почтовой описью), управляющий имел реальную возможность совершить требуемое действие, но не предпринял мер в разумный срок, нарушив законные права кредиторов.'
    },
    {
      q: 'Можно ли оспорить привлечение управляющим сторонних юристов и бухгалтеров?',
      a: 'Да. Если услуги привлеченных лиц дублируют прямые обязанности управляющего либо стоимость их услуг явно завышена по сравнению со среднерыночной, кредиторы вправе подать ходатайство о признании расходов необоснованными и снижении вознаграждения.'
    },
    {
      q: 'Как взыскать убытки с арбитражного управляющего?',
      a: 'Подается заявление в арбитражный суд о взыскании убытков. После вступления судебного акта в силу взыскание производится со страховой организации, где застрахована ответственность АУ (лимит от 10 млн ₽), а при недостаточности — из компенсационного фонда СРО (до 50 млн ₽) и личного имущества.'
    },
    {
      q: 'Какой срок установлен для рассмотрения жалобы в арбитражном суде?',
      a: 'Согласно ст. 60 Закона о банкротстве жалоба рассматривается судьей в срок не позднее 1 месяца с даты ее поступления в арбитражный суд.'
    },
    {
      q: 'Что делать, если управляющий занижает начальную цену на торгах?',
      a: 'Подается жалоба на действие управляющего по утверждению положения о торгах с одновременным ходатайством о принятии обеспечительных мер в виде запрета проведения торгов до разрешения спора по существу.'
    },
    {
      q: 'Влечет ли удовлетворение жалобы автоматическое исключение из СРО?',
      a: 'При повторном привлечении к административной ответственности по ст. 14.13 КоАП РФ Росреестр и суд вправе применить меру в виде дисквалификации управляющего на срок от 6 месяцев до 3 лет.'
    },
    {
      q: 'Возмещаются ли расходы на юриста при удовлетворении жалобы на АУ?',
      a: 'Да. Судебные расходы, понесенные кредитором при рассмотрении обоснованной жалобы на действия управляющего, взыскиваются непосредственно с арбитражного управляющего как с проигравшей стороны.'
    }
  ];

  const relatedServices = [
    {
      title: 'Представление интересов кредитора',
      desc: 'Комплексный контроль за процедурой банкротства и собраниями кредиторов.',
      link: '/biznesu/bankrotstvo-biznesa/predstavlenie-interesov-kreditora/'
    },
    {
      title: 'Оспаривание сделок при банкротстве',
      desc: 'Подача заявлений об отмене сделок при уклонении конкурсного управляющего.',
      link: '/biznesu/bankrotstvo-biznesa/osparivanie-sdelok-pri-bankrotstve/'
    },
    {
      title: 'Включение в реестр требований',
      desc: 'Установление и защита требований кредитора в арбитражном суде.',
      link: '/biznesu/bankrotstvo-biznesa/vklyuchenie-v-reestr-trebovanij-kreditorov/'
    },
    {
      title: 'Банкротство компании со стороны должника',
      desc: 'Защита предприятия и директора при злоупотреблениях со стороны АУ.',
      link: '/biznesu/bankrotstvo-biznesa/bankrotstvo-kompanii-so-storony-dolzhnika/'
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
        '@id': 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/obzhalovanie-dejstvij-arbitrazhnogo-upravlyayushchego/#service',
        name: 'Обжалование действий арбитражного управляющего в Липецке',
        serviceType: 'Юридическое сопровождение жалоб на арбитражных управляющих и взыскание убытков',
        provider: {
          '@id': 'https://dejure-help.ru/#legalservice'
        },
        areaServed: ['Липецк', 'Липецкая область'],
        url: 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/obzhalovanie-dejstvij-arbitrazhnogo-upravlyayushchego/',
        description: 'Жалобы на арбитражного управляющего по ст. 60 Закона о банкротстве в Арбитражном суде Липецкой области: отстранение, приостановление торгов, взыскание убытков.'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/obzhalovanie-dejstvij-arbitrazhnogo-upravlyayushchego/#breadcrumb',
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
            name: 'Обжалование действий управляющего',
            item: 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/obzhalovanie-dejstvij-arbitrazhnogo-upravlyayushchego/'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/obzhalovanie-dejstvij-arbitrazhnogo-upravlyayushchego/#faq',
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
            <span style={{ color: 'var(--color-text-main)' }}>Обжалование действий управляющего</span>
          </>
        }
        superTitle={
          <span style={{ whiteSpace: 'normal', display: 'inline-block', lineHeight: 1.4 }}>
            <span style={{ display: 'inline-block' }}>БАНКРОТСТВО КОМПАНИИ • СУДЕБНЫЙ НАДЗОР ЗА АУ •</span> <br />
            <span style={{ display: 'inline-block' }}>Липецк и арбитраж</span>
          </span>
        }
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Обжалование действий
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              арбитражного управляющего
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Защитим права кредиторов и должника при незаконных действиях, бездействии, затягивании процедуры, занижении стоимости активов на торгах или необоснованных расходах конкурсного управляющего.
          </span>
        }
        primaryCtaText="Проверить нарушения управляющего"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_primary_cta_obzhalovanie_upravlyayushchego"
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
                <strong>Жалобы по ст. 60 Закона № 127-ФЗ</strong>, Росреестр и дисциплинарные комитеты СРО
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Приостановление торгов</strong>, отстранение АУ и взыскание реальных убытков
              </span>
            )
          }
        ]}
      />

      {/* ═══ БЛОК 2: ТИПОВЫЕ СИТУАЦИИ (#situations) ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span style={{ display: 'inline-block' }}>Типичные нарушения в работе</span> <br />
              <span style={{ display: 'inline-block' }}>арбитражных управляющих</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Пресекаем злоупотребления арбитражных управляющих и восстанавливаем законный баланс интересов сторон в судебном порядке.
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
                  <span>Пресечь нарушения</span>
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

      {/* ═══ БЛОК 3: СРОЧНОСТЬ (#urgent) ═══ */}
      <section className="section" id="urgent" style={{ background: 'var(--color-deep-blue)', color: '#FFFFFF', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '60px', height: '2px', background: 'var(--color-gold)' }}></div>
              <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Срочность реагирования
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 3.8vw, 38px)', color: '#FFFFFF', margin: '0 0 16px 0', lineHeight: 1.25 }}>
              Когда промедление с жалобой приводит к невосполнимым потерям
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.82)', margin: 0, lineHeight: 1.65 }}>
              В банкротном процессе время работает на недобросовестного управляющего: активы могут быть проданы на торгах, а деньги распределены:
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '40px' }}>
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
            padding: '24px 28px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px'
          }}>
            <div style={{ maxWidth: '680px' }}>
              <strong style={{ display: 'block', fontSize: '16px', color: '#FFFFFF', marginBottom: '4px' }}>
                Суд оценивает только надлежащим образом зафиксированные процессуальные доказательства
              </strong>
              <span style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.5 }}>
                Составим официальные запросы и обеспечим документальную базу нарушений для гарантированного рассмотрения жалобы арбитражным судом.
              </span>
            </div>
            <a
              href="#form"
              className="btn"
              style={{
                background: 'var(--color-gold)',
                color: 'var(--color-deep-blue)',
                fontWeight: 700,
                padding: '14px 26px',
                whiteSpace: 'nowrap',
                textDecoration: 'none'
              }}
            >
              Срочная консультация
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: ШЕСТЬ КОНТУРОВ АНАЛИЗА НАРУШЕНИЙ (#check) ═══ */}
      <section className="section" id="check" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              <span style={{ display: 'inline-block' }}>Шесть контуров правового</span> <br />
              <span style={{ display: 'inline-block' }}>анализа действий управляющего</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Шесть контрольных факторов, исключающих риск признания жалобы необоснованной или формальной.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', position: 'relative' }}>
            {analysisContours.map((item, idx) => (
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
                  <strong>Что исследуем:</strong> {item.what}
                </p>
                <p style={{ fontSize: '13.5px', color: 'var(--color-deep-blue)', lineHeight: 1.55, margin: 0, borderTop: '1px dashed var(--color-border)', paddingTop: '10px' }}>
                  <strong>Результат:</strong> {item.why}
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
        title={<><span style={{ display: 'inline-block' }}>Практика обжалования действий</span> <br /><span style={{ display: 'inline-block' }}>арбитражных управляющих</span></>}
        cases={casesData}
        showAllLink="/praktika/"
        showAllText="Смотреть всю практику →"
        showDemoWarning={true}
      />

      {/* ═══ БЛОК 7: ПОРЯДОК РАБОТЫ ═══ */}
      <ProcessBlock
        title="Порядок совместной работы"
        subtitle="Шесть последовательных шагов: от аудита отчетов АУ до реального возмещения убытков."
        alignTitle="center"
        steps={processSteps}
        ctaTitle="Управляющий нарушает ваши права?"
        ctaSubtitle="Передайте отчеты и материалы дела на правовой анализ судебным юристам."
        ctaButtonText="Проверить нарушения"
        ctaButtonHref="#form"
      />

      {/* ═══ БЛОК 8: ТАРИФЫ И СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость обжалования действий управляющего"
        subtitle="Фиксированная стоимость юридических услуг в договоре. Все издержки взыскиваются с АУ."
        tiers={pricingTiers}
        disclaimer="Госпошлина за рассмотрение жалобы, почтовые расходы и стоимость судебных экспертиз оплачиваются отдельно и при удовлетворении требований подлежат взысканию с арбитражного управляющего."
        ctaTitle="Рассчитаем стоимость подачи жалобы"
        ctaSubtitle="Оставьте заявку — куратор проведет предварительный аудит нарушений и подготовит смету."
        ctaButtonText="Рассчитать стоимость"
        ctaButtonLink="#form"
      />

      {/* ═══ БЛОК 9: FAQ ═══ */}
      <FAQBlock
        superTitle="Частые вопросы о жалобах на АУ"
        title={<><span>Вопросы и ответы</span> <br /><span>об обжаловании действий управляющего</span></>}
        subtitle="О порядке подачи по ст. 60, отстранении управляющего, торгах и убытках"
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
                <span style={{ display: 'inline-block' }}>Связанные процедуры</span> <br /><span style={{ display: 'inline-block' }}>в деле о банкротстве</span>
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
                Комплексная правовая защита прав кредиторов и должников в процедурах банкротства.
              </p>
            </div>
          </div>

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
                    borderTop: '3px solid var(--color-primary)',
                    borderRadius: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 16px rgba(23, 50, 77, 0.04)',
                    transition: 'all 0.3s ease'
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
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Пресеките злоупотребления</span>{' '}
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>управляющего вовремя</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Сообщите номер дела, вашу процессуальную роль и суть допущенного нарушения (торги, затягивание, расходы). Юрист изучит карточку дела и назовёт перспективы жалобы.
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
                Не указывайте в форме конфиденциальные финансовые сведения и коммерческую тайну. Защищённый канал передачи документов согласуем после контакта.
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm
                title="Заявка на проверку действий АУ"
                subtitle="Оставьте контакты и номер дела — юрист свяжется с вами в течение 15 минут в рабочее время."
                subtext="Если вы оставите заявку вечером или в выходной день, мы свяжемся с вами в ближайший рабочий день."
                buttonText="Проверить нарушения управляющего"
                commentPlaceholder="Кратко укажите суть нарушений: торги, затягивание, непредставление отчетов…"
                hiddenFields={[
                  { name: 'source_page', value: '/biznesu/bankrotstvo-biznesa/obzhalovanie-dejstvij-arbitrazhnogo-upravlyayushchego/' },
                  { name: 'service', value: 'Обжалование действий арбитражного управляющего' }
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
