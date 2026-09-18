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

export default function YuridicheskoeSoprovozhdenieClient() {
  const situations = [
    {
      tag: 'Без штатного юриста',
      title: 'Договоры проверяет генеральный директор или главный бухгалтер',
      desc: 'Отдельного юриста в штате нет, а риски в контрактах с поставщиками и покупателями копятся и требуют постоянного экспертного контроля.'
    },
    {
      tag: 'Штатный перегружен',
      title: 'Специалист не успевает закрывать поток или не имеет судебной практики',
      desc: 'Штатный сотрудник перегружен рутиной, а компании требуется узкая арбитражная, налоговая или корпоративная защита в сложных спорах.'
    },
    {
      tag: 'Хаос в задачах',
      title: 'Подразделения компании обращаются к разным исполнителям',
      desc: 'Отсутствует единое окно приёма юридических задач, единая правовая позиция бизнеса и системный реестр действующих обязательств.'
    },
    {
      tag: 'Режим пожара',
      title: 'Документы и контрмеры готовятся уже после возникновения проблем',
      desc: 'Претензии контрагентов, запросы банков по 115-ФЗ или проверки госорганов рассматриваются в экстренном порядке без превентивной защиты.'
    },
    {
      tag: 'Масштабирование',
      title: 'Бизнес расширяется, запускает новые направления и открывает филиалы',
      desc: 'Растёт штат сотрудников, число контрактов и активов, требуя системного пересмотра внутренней документации и корпоративной структуры.'
    },
    {
      tag: 'Временная замена',
      title: 'Требуется временная подстраховка или проектное юридическое усиление',
      desc: 'Штатный юрист уходит в отпуск/декрет либо компании необходимо профессиональное сопровождение крупной сделки или реорганизации.'
    }
  ];

  const urgentCards = [
    {
      title: 'Подписание типовых договоров контрагента без правового анализа',
      desc: 'Скрытые неустойки, право контрагента на односторонний отказ, ограничение ответственности поставщика и подсудность в другом регионе создают прямые финансовые убытки.'
    },
    {
      title: 'Пропуск сроков ответа на претензии и запросы банков по 115-ФЗ',
      desc: 'Непредоставление документов по запросу финансового мониторинга влечёт мгновенную блокировку дистанционного банковского обслуживания и паралич операционной деятельности.'
    },
    {
      title: 'Накопление дебиторской задолженности без контроля сроков давности',
      desc: 'Отсутствие регулярной претензионной работы приводит к истечению 3-летнего срока исковой давности, после чего взыскать долг через арбитражный суд невозможно.'
    }
  ];

  const directions = [
    {
      title: 'Юридический аудит бизнеса',
      desc: 'Комплексная инвентаризация правовых рисков компании, договоров, корпоративной структуры и трудовой документации.',
      href: '/biznesu/yuridicheskoe-soprovozhdenie-biznesa/yuridicheskij-audit-biznesa/'
    },
    {
      title: 'Договорное право и экспертиза',
      desc: 'Разработка индивидуальных форм контрактов, аудит входящих договоров, протоколы разногласий и переговоры.',
      href: '/biznesu/dogovornoe-pravo/'
    },
    {
      title: 'Взыскание задолженности и арбитраж',
      desc: 'Досудебное урегулирование, взыскание долгов с юрлиц в Арбитражном суде Липецкой области и исполнительное производство.',
      href: '/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/'
    },
    {
      title: 'Корпоративный юрист',
      desc: 'Сделки с долями ООО, выход участников, смена генерального директора, корпоративные договоры и споры партнеров.',
      href: '/biznesu/korporativnyj-yurist/'
    },
    {
      title: 'Трудовые споры для бизнеса',
      desc: 'Разработка локальных нормативных актов, защита работодателя при конфликтах с работниками и проверках ГИТ.',
      href: '/biznesu/trudovye-spory-s-rabotnikami/'
    },
    {
      title: 'Банкротство бизнеса и защита КДЛ',
      desc: 'Сопровождение компаний при кризисе, защита директора от субсидиарной ответственности и возврат долгов через банкротство.',
      href: '/biznesu/bankrotstvo-biznesa/'
    }
  ];

  const processSteps: ProcessStep[] = [
    {
      num: '01',
      title: 'Обсуждение бизнеса и задач',
      desc: 'Уточняем сферу деятельности, кто в компании ставит задачи, какие вопросы повторяются регулярно и где уже есть срочность.'
    },
    {
      num: '02',
      title: 'Первичная инвентаризация',
      desc: 'Разделяем текущий операционный поток, накопившиеся нерешённые проблемы и отдельные масштабные судебные или проектные задачи.'
    },
    {
      num: '03',
      title: 'Модель взаимодействия и SLA',
      desc: 'Согласуем удобные каналы связи, регламент приоритетов, сроки первичной реакции и список ответственных лиц со стороны компании.'
    },
    {
      num: '04',
      title: 'Фиксация объёма в договоре',
      desc: 'Указываем конкретный перечень включённых работ, доступные лимиты, порядок эскалации и правила согласования дополнительных задач.'
    },
    {
      num: '05',
      title: 'Запуск сопровождения',
      desc: 'Принимаем обращения по согласованному регламенту, распределяем задачи между профильными юристами и отслеживаем статусы исполнения.'
    },
    {
      num: '06',
      title: 'Контроль и корректировка',
      desc: 'По итогам отчётного периода анализируем фактическую нагрузку, динамику вопросов и при необходимости гибко оптимизируем объём обслуживания.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Базовое сопровождение',
      subtitle: 'Для малого бизнеса и ИП',
      price: 'от 35 000 ₽ / мес',
      popular: false,
      features: [
        { name: 'устные и письменные консультации юристов', value: 'Да' },
        { name: 'проверка и согласование текущих договоров', value: 'Да' },
        { name: 'составление досудебных претензий контрагентам', value: 'Да' },
        { name: 'единое окно приёма обращений через Telegram/email', value: 'Да' }
      ],
      buttonText: 'Выбрать тариф',
      buttonHref: '#form'
    },
    {
      title: 'Расширенное обслуживание',
      subtitle: 'Внешний юридический отдел',
      price: 'от 65 000 ₽ / мес',
      popular: true,
      badgeText: 'Популярно',
      features: [
        { name: 'полный спектр текущих договорных задач', value: 'Да' },
        { name: 'приём задач от руководителей всех отделов', value: 'Да' },
        { name: 'участие в коммерческих переговорах', value: 'Да' },
        { name: 'регулярная отчётность по статусам поручений', value: 'Да' }
      ],
      buttonText: 'Подключить аутсорсинг',
      buttonHref: '#form'
    },
    {
      title: 'Усиление штатного юриста',
      subtitle: 'Подключение экспертов к сложным спорам',
      price: 'от 45 000 ₽ / мес',
      popular: false,
      features: [
        { name: 'разгрузка внутреннего юриста от непрофильных задач', value: 'Да' },
        { name: 'судебное представительство в арбитраже Липецка', value: 'Да' },
        { name: 'сопровождение налоговых проверок и споров', value: 'Да' },
        { name: 'чёткое разграничение зон ответственности', value: 'Да' }
      ],
      buttonText: 'Обсудить усиление',
      buttonHref: '#form'
    },
    {
      title: 'Проектная поддержка',
      subtitle: 'Сделки, реорганизация, кризис',
      price: 'от 50 000 ₽',
      popular: false,
      features: [
        { name: 'выделение проектной команды судебных юристов', value: 'Да' },
        { name: 'правовой контроль крупных сделок и реструктуризации', value: 'Да' },
        { name: 'юридический аудит перед покупкой активов', value: 'Да' },
        { name: 'структурированная передача дел после финала', value: 'Да' }
      ],
      buttonText: 'Оценить проект',
      buttonHref: '#form'
    }
  ];

  const casesData: CaseData[] = [
    {
      category: 'Оптовая торговля / Аутсорсинг',
      title: 'Систематизация договорной и претензионной работы дистрибьютора',
      problem: 'В компании договоры визировали директор и главный бухгалтер, замечания терялись в почте, а претензии к должникам выставлялись с опозданием до полугода.',
      action: 'Внедрили единый регламент визирования договоров, разработали защищенные типовые формы поставки и оцифровали контроль дебиторской задолженности.',
      result: 'Время согласования контрактов сократилось до 1 рабочего дня, а взыскание просроченных долгов поставлено на системный поток без просрочек.'
    },
    {
      category: 'Производство / Усиление',
      title: 'Усиление единственного штатного юриста промышленного завода',
      problem: 'Штатный юрист вел кадровую и рутинную работу, но не справлялся с параллельным ведением крупных арбитражных споров по поставкам оборудования.',
      action: 'Разделили функции: штатный специалист сохранил текущую рутину, а внешняя команда «Де-Юре» взяла на себя ведение арбитражных споров в суде.',
      result: 'Успешно защищены интересы предприятия в арбитражном суде на сумму 24 млн ₽, штрафные санкции контрагентов снижены более чем на 80%.'
    },
    {
      category: 'Логистика / Проектная поддержка',
      title: 'Правовое обеспечение объединения двух логистических компаний',
      problem: 'При слиянии подразделений потребовалось оперативно перезаключить 70+ контрактов с перевозчиками и пересмотреть трудовые регламенты при отсутствии руководителя юротдела.',
      action: 'Выделили проектную группу на 4 месяца, провели аудит рисков, переоформили договоры без остановки перевозок и передали архив новому руководству.',
      result: 'Бесперебойное функционирование логистических цепочек и бесконфликтный переход бизнеса на обновленную структуру без претензий контрагентов.'
    }
  ];

  const faqItems: FAQItem[] = [
    {
      q: 'Что входит в юридическое сопровождение бизнеса?',
      a: 'Состав услуг зависит от выбранного тарифа. В абонентское обслуживание могут входить устные и письменные консультации, разработка и проверка договоров, подготовка претензий, взаимодействие с банками и госорганами, а также ведение судебных дел в арбитраже.'
    },
    {
      q: 'Чем абонентское обслуживание выгоднее штатного юриста?',
      a: 'Компания получает целую команду профильных экспертов (судебные юристы, специалисты по налогам, корпоративному праву и недвижимости) по цене одного штатного сотрудника, экономя на налогах с ФОТ (НДФЛ 13% и взносы 30%), рабочем месте и справочно-правовых системах.'
    },
    {
      q: 'Как строится взаимодействие и постановка задач?',
      a: 'Задачи ставятся через согласованный канал (электронная почта, Telegram, CRM). За вашей компанией закрепляется ведущий юрист, который координирует работу профильных специалистов и контролирует сроки исполнения.'
    },
    {
      q: 'Входят ли судебные арбитражные споры в абонентскую плату?',
      a: 'В базовых тарифах судебные споры тарифицируются отдельно со скидкой для постоянных клиентов либо согласуются в рамках расширенных индивидуальных пакетов обслуживания.'
    },
    {
      q: 'Что происходит с неиспользованными часами или услугами за месяц?',
      a: 'Абонентская плата обеспечивает постоянную готовность юридической команды и резервирование рабочего времени специалистов под нужды вашей компании. Формат лимитов детально фиксируется в договоре.'
    },
    {
      q: 'Как соблюдается конфиденциальность коммерческой тайны?',
      a: 'До начала работы мы подписываем соглашение о неразглашении конфиденциальной информации (NDA). Все документы передаются по защищенным каналам связи, а ответственность юристов застрахована.'
    },
    {
      q: 'Можно ли привлечь вас только для усиления штатного юриста?',
      a: 'Да, это один из наиболее востребованных форматов сотрудничества. Внутренний юрист компании ведет текущую операционку, а команда «Де-Юре» берет на себя сложные судебные споры, сделки и проверки.'
    },
    {
      q: 'Сколько времени занимает первичный запуск обслуживания?',
      a: 'От первого звонка до подписания договора и приёма первых задач обычно проходит 1–2 рабочих дня.'
    },
    {
      q: 'Как оплачиваются услуги?',
      a: 'Оплата производится ежемесячно по безналичному расчету на основании выставленного счета и акта оказанных услуг. Расходы на юридическое сопровождение уменьшают налогооблагаемую базу по налогу на прибыль (или УСН «доходы минус расходы»).'
    },
    {
      q: 'Можно ли изменить тариф в процессе работы?',
      a: 'Да, при изменении объёмов бизнеса или сезонных колебаниях нагрузки тарифный план можно скорректировать с начала любого календарного месяца.'
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
        '@id': 'https://dejure-help.ru/biznesu/yuridicheskoe-soprovozhdenie-biznesa/#service',
        name: 'Юридическое сопровождение бизнеса в Липецке',
        serviceType: 'Абонентское юридическое обслуживание и аутсорсинг бизнеса',
        provider: {
          '@id': 'https://dejure-help.ru/#legalservice'
        },
        areaServed: ['Липецк', 'Липецкая область'],
        url: 'https://dejure-help.ru/biznesu/yuridicheskoe-soprovozhdenie-biznesa/',
        description: 'Комплексное юридическое сопровождение бизнеса в Липецке: договорная работа, арбитражные споры, взыскание задолженности, корпоративное право и налоговая безопасность.'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/biznesu/yuridicheskoe-soprovozhdenie-biznesa/#breadcrumb',
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
            name: 'Юридическое сопровождение бизнеса',
            item: 'https://dejure-help.ru/biznesu/yuridicheskoe-soprovozhdenie-biznesa/'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/biznesu/yuridicheskoe-soprovozhdenie-biznesa/#faq',
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
            <span style={{ color: 'var(--color-text-main)' }}>Юридическое сопровождение бизнеса</span>
          </>
        }
        superTitle={
          <span style={{ whiteSpace: 'normal', display: 'inline-block', lineHeight: 1.4 }}>
            <span style={{ display: 'inline-block' }}>ЮРИДИЧЕСКИЕ УСЛУГИ ДЛЯ БИЗНЕСА • АУТСОРСИНГ •</span> <br />
            <span style={{ display: 'inline-block' }}>Липецк и область</span>
          </span>
        }
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Юридическое
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              сопровождение бизнеса
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Возьмём на себя регулярные юридические задачи компании или усилим штатного юриста: согласуем объём работ, регламент реагирования и подключим команду профильных судебных специалистов.
          </span>
        }
        primaryCtaText="Обсудить сопровождение бизнеса"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_primary_cta_yuridicheskoe_soprovozhdenie"
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
        imageSubtitle="Куратор направления правовой поддержки и арбитража"
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
                <strong>Единое окно</strong> для обращений генерального директора и руководителей подразделений
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Команда профильных юристов</strong>: договоры, арбитраж, налоги, кадры и банкротство
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
              <span style={{ display: 'inline-block' }}>Когда бизнесу требуется</span> <br />
              <span style={{ display: 'inline-block' }}>постоянная юридическая поддержка</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Аутсорсинг оправдан, когда правовые вопросы возникают регулярно, перегружают руководство и бухгалтерию и требуют системного регламента работы.
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
                  <span>Подобрать формат</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            ))}
          </div>

          <div style={{
            background: 'linear-gradient(135deg, var(--color-deep-blue) 0%, #17324D 100%)',
            padding: '36px 40px',
            color: '#FFFFFF',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px',
            borderLeft: '4px solid var(--color-gold)'
          }}>
            <div style={{ maxWidth: '650px' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', margin: '0 0 8px 0', color: '#FFFFFF' }}>
                Не нашли описание своей задачи?
              </h3>
              <p style={{ margin: 0, fontSize: '14.5px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.5 }}>
                Проанализируем текущий юридический документооборот вашей компании и предложим персональную модель обслуживания.
              </p>
            </div>
            <a
              href="#form"
              className="btn"
              style={{
                background: 'var(--color-gold)',
                color: 'var(--color-deep-blue)',
                padding: '14px 28px',
                fontWeight: 700,
                fontSize: '14px',
                whiteSpace: 'nowrap',
                textDecoration: 'none'
              }}
            >
              Индивидуальный расчет
            </a>
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
                Риски отсутствия юриста
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 3.8vw, 38px)', color: '#FFFFFF', margin: '0 0 16px 0', lineHeight: 1.25 }}>
              Скрытые юридические риски, приводящие к прямым убыткам бизнеса
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.82)', margin: 0, lineHeight: 1.65 }}>
              Экономия на системной юридической поддержке оборачивается судебными исками, штрафами и блокировками счетов:
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '40px' }}>
            {urgentCards.map((card, cIdx) => (
              <div
                key={cIdx}
                className="urgent-card hover-lift"
                style={{
                  background: 'linear-gradient(135deg, #FAF7F2 0%, #F3ECDF 100%)',
                  borderTop: '4px solid var(--color-gold)',
                  padding: '30px 26px',
                  borderRadius: '0',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <strong style={{ fontSize: '12.5px', color: 'var(--color-deep-blue)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Зона риска
                  </strong>
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', color: 'var(--color-deep-blue)', margin: '0 0 10px 0', lineHeight: 1.35 }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {card.desc}
                </p>
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
                Предупредить проблему в договоре в 10 раз дешевле, чем судиться в арбитраже
              </strong>
              <span style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.5 }}>
                Выстроим надёжный превентивный контроль входящих контрактов и претензий с первого дня сотрудничества.
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

      {/* ═══ БЛОК 4: НАПРАВЛЕНИЯ ЮРИДИЧЕСКОЙ ПОДДЕРЖКИ (#directions) ═══ */}
      <section className="section" id="directions" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              <span style={{ display: 'inline-block' }}>Ключевые направления</span> <br />
              <span style={{ display: 'inline-block' }}>юридической помощи бизнесу</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Каждое направление ведётся профильными судебными специалистами компании «Де-Юре».
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', position: 'relative' }}>
            {directions.map((dir, idx) => (
              <Link key={idx} href={dir.href} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                <div
                  className="card service-card hover-lift"
                  style={{
                    height: '100%',
                    minHeight: '220px',
                    padding: '36px 30px 32px 30px',
                    background: '#FFFFFF',
                    border: '1px solid var(--color-border)',
                    borderTop: '4px solid var(--color-primary)',
                    borderRadius: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 12px 0', lineHeight: 1.35, fontWeight: 700 }}>
                      {dir.title}
                    </h3>
                    <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                      {dir.desc}
                    </p>
                  </div>
                  <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontSize: '13.5px', fontWeight: 600, marginTop: '20px', transition: 'color 0.35s ease' }}>
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

      {/* ═══ БЛОК 5: КУРАТОР НАПРАВЛЕНИЯ ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name={
          <>
            Владимир<br />
            Викторович Начешников
          </>
        }
        position="Специалист по комплексному сопровождению бизнеса и арбитражным процессам, куратор направления"
        imageUrl="/images/nacheshnikov.jpg"
        imagePosition="center 15%"
        profileHref="/specialisty/nacheshnikov-vladimir-viktorovich/"
        profileText="Подробнее о Владимире Викторовиче Начешникове →"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Аутсорсинг юридических услуг — это не подмена штатного юриста, а доступ к совокупному практическому опыту целой команды судебных юристов по цене одного сотрудника.
          </span>,
          <span key="2" style={{ color: 'var(--color-deep-blue)', display: 'block', marginTop: '12px' }}>
            Владимир Викторович лично координирует внедрение регламентов взаимодействия, контролирует качество правовых заключений и подключает узкопрофильных специалистов к нестандартным арбитражным спорам.
          </span>
        ]}
        buttonText="Обсудить сотрудничество с куратором"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 6: ПРАКТИКА И КЕЙСЫ ═══ */}
      <CasesBlock
        title={<><span style={{ display: 'inline-block' }}>Практика юридического</span> <br /><span style={{ display: 'inline-block' }}>сопровождения бизнеса</span></>}
        cases={casesData}
        showAllLink="/praktika/"
        showAllText="Смотреть всю практику →"
        showDemoWarning={true}
      />

      {/* ═══ БЛОК 7: ПОРЯДОК РАБОТЫ ═══ */}
      <ProcessBlock
        title="Порядок совместной работы"
        subtitle="Шесть последовательных шагов: от первого аудита процессов до слаженного функционирования внешнего юридического отдела."
        alignTitle="center"
        steps={processSteps}
        ctaTitle="Готовы оптимизировать юридические процессы?"
        ctaSubtitle="Оставьте заявку на бесплатный экспресс-аудит договоров вашей компании."
        ctaButtonText="Заказать аудит процессов"
        ctaButtonHref="#form"
      />

      {/* ═══ БЛОК 8: ТАРИФЫ И СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Тарифы на юридическое сопровождение бизнеса"
        subtitle="Фиксированная стоимость юридических услуг в договоре без скрытых доплат."
        tiers={pricingTiers}
        disclaimer="Государственные пошлины, нотариальные тарифы, выезды за пределы Липецкой области и судебные экспертизы оплачиваются отдельно по согласованию с доверителем."
        ctaTitle="Рассчитаем персональный тариф сопровождения"
        ctaSubtitle="Оставьте заявку — куратор направления проведет предварительную оценку документооборота компании."
        ctaButtonText="Рассчитать тариф"
        ctaButtonLink="#form"
      />

      {/* ═══ БЛОК 9: FAQ ═══ */}
      <FAQBlock
        superTitle="Частые вопросы бизнеса"
        title={<><span>Вопросы и ответы</span> <br /><span>о юридическом аутсорсинге</span></>}
        subtitle="О регламенте работы, SLA, конфиденциальности и разграничении зон ответственности"
        ctaText="Задать свой вопрос"
        ctaLink="#form"
        faqs={faqItems}
      />

      {/* ═══ БЛОК 10: ФИНАЛЬНАЯ ФОРМА (#form) ═══ */}
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
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Подберите формат поддержки</span>{' '}
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>под задачи вашего бизнеса</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Кратко опишите сферу деятельности вашей компании и ключевые юридические задачи. Юрист свяжется с вами для согласования персональной модели сопровождения.
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
                Не указывайте в форме конфиденциальные финансовые сведения, пароли и закрытые договоры. Соглашение о неразглашении (NDA) подписываем до передачи коммерческой тайны.
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm
                title="Заявка на сопровождение"
                subtitle="Оставьте контакты — юрист свяжется с вами в течение 15 минут в рабочее время."
                subtext="Если вы оставите заявку вечером или в выходной день, мы свяжемся с вами в ближайший рабочий день."
                buttonText="Обсудить сопровождение бизнеса"
                commentPlaceholder="Кратко укажите сферу деятельности компании и текущие юридические задачи…"
                hiddenFields={[
                  { name: 'source_page', value: '/biznesu/yuridicheskoe-soprovozhdenie-biznesa/' },
                  { name: 'service', value: 'Юридическое сопровождение бизнеса' }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 11: FOOTER ═══ */}
      <Footer />
    </>
  );
}
