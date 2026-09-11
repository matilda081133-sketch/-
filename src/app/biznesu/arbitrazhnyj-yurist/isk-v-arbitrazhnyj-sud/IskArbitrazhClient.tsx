'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MilitaryHero from '@/components/MilitaryHero';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import CasesBlock, { CaseData } from '@/components/CasesBlock';
import PricingBlock, { PricingTier } from '@/components/PricingBlock';

export default function IskArbitrazhClient() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LegalService',
        '@id': 'https://dejure-help.ru/#organization',
        'name': 'ЮК «Де-Юре»',
        'url': 'https://dejure-help.ru',
        'logo': 'https://dejure-help.ru/images/logo_dark.png',
        'telephone': '+7 (4742) 20-15-25',
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
        '@id': 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/isk-v-arbitrazhnyj-sud/#breadcrumbs',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Главная', 'item': 'https://dejure-help.ru/' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Бизнесу', 'item': 'https://dejure-help.ru/biznesu/' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Арбитражный юрист', 'item': 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/' },
          { '@type': 'ListItem', 'position': 4, 'name': 'Подготовка и подача иска', 'item': 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/isk-v-arbitrazhnyj-sud/' }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/isk-v-arbitrazhnyj-sud/#service',
        'url': 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/isk-v-arbitrazhnyj-sud/',
        'name': 'Подготовка и подача иска в арбитражный суд в Липецке',
        'provider': { '@id': 'https://dejure-help.ru/#organization' },
        'areaServed': [
          { '@type': 'AdministrativeArea', 'name': 'Липецкая область' },
          { '@type': 'Country', 'name': 'Россия' }
        ],
        'description': 'Проверим требования, подсудность, претензионный порядок, сформируем доказательственную базу, рассчитаем госпошлину и подадим иск через «Мой Арбитр».'
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/isk-v-arbitrazhnyj-sud/#faq',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Обязательно ли отправлять претензию перед подачей иска?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Для большинства гражданско-правовых денежных споров в арбитраже досудебный порядок обязателен. Иск можно подать только по истечении 30 календарных дней со дня направления претензии, если иной срок или порядок не установлены законом или договором.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Как правильно рассчитать цену иска и госпошлину?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Цена иска складывается из основного долга, договорной неустойки, процентов по ст. 395 ГК РФ и убытков. Госпошлина рассчитывается по прогрессивной шкале ст. 333.21 НК РФ.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Как подаётся иск в арбитражный суд?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Иск подаётся в электронном виде через систему «Мой Арбитр» с усиленной ЭЦП либо в бумажном виде через канцелярию или почту. Предварительно копии иска и приложений направляются всем участникам дела.'
            }
          }
        ]
      }
    ]
  };

  const situations = [
    {
      tag: 'Нарушение оплаты',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Контрагент не платит</span> <br />
          <span style={{ display: 'inline-block' }}>по договору</span>
        </span>
      ),
      desc: 'Поставка выполнена, услуги оказаны или работы приняты, но оплата не поступила. Готовим претензию и иск о взыскании долга и неустойки.'
    },
    {
      tag: 'Срыв сроков и дефекты',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Нарушены сроки</span> <br />
          <span style={{ display: 'inline-block' }}>или качество работ</span>
        </span>
      ),
      desc: 'Подрядчик сорвал график или сдал объект с неустранимыми дефектами. Формируем требования о расторжении договора, возврате аванса и возмещении убытков.'
    },
    {
      tag: 'Непоставка товара',
      title: 'Внесён аванс, товар не отгружен',
      desc: 'Поставщик получил предоплату, но товар не передал. Составляем иск о возврате предоплаты и процентов за пользование чужими денежными средствами.'
    },
    {
      tag: 'Убытки и ущерб',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Контрагент причинил</span> <br />
          <span style={{ display: 'inline-block' }}>ущерб бизнесу</span>
        </span>
      ),
      desc: 'Неисполнение обязательств повлекло реальный ущерб или упущенную выгоду. Доказываем причинно-следственную связь и размер убытков.'
    },
    {
      tag: 'Риск вывода активов',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Ответчик прячет</span> <br />
          <span style={{ display: 'inline-block' }}>имущество и деньги</span>
        </span>
      ),
      desc: 'Параллельно с иском подаём мотивированное ходатайство о наложении ареста на расчётные счета и имущество ответчика.'
    },
    {
      tag: 'Отказ от признания',
      title: 'Оппонент не признаёт первичку',
      desc: 'Отсутствуют подписанные акты или накладные. Собираем косвенные доказательства фактического исполнения обязательств.'
    }
  ];

  const urgentItems = [
    {
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Истекает 3-летний срок</span> <br />
          <span style={{ display: 'inline-block' }}>исковой давности</span>
        </span>
      ),
      desc: 'Пропуск срока исковой давности является самостоятельным основанием для отказа в иске при заявлении ответчика.'
    },
    {
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Ответчик начал</span> <br />
          <span style={{ display: 'inline-block' }}>ликвидацию или банкротство</span>
        </span>
      ),
      desc: 'Необходимо срочно подать иск и заявить обеспечительные меры до прекращения существования юрлица.'
    },
    {
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Иски других кредиторов</span> <br />
          <span style={{ display: 'inline-block' }}>к ответчику</span>
        </span>
      ),
      desc: 'Массовые иски к должнику создают риск опережения другими взыскателями и исчерпания свободных средств на счетах.'
    },
    {
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Смена контроля</span> <br />
          <span style={{ display: 'inline-block' }}>и номинальные директора</span>
        </span>
      ),
      desc: 'Смена генерального директора или участников должника свидетельствует о подготовке к бросанию компании.'
    },
    {
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Вывод активов</span> <br />
          <span style={{ display: 'inline-block' }}>и продажа транспорта</span>
        </span>
      ),
      desc: 'Требуется немедленное обеспечение иска в виде запрета совершения регистрационных действий.'
    },
    {
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Несоблюдение досудебного</span> <br />
          <span style={{ display: 'inline-block' }}>порядка</span>
        </span>
      ),
      desc: 'Подача иска без надлежащей претензии приведёт к оставлению заявления без движения или без рассмотрения.'
    }
  ];

  const stages = [
    {
      num: '01',
      stage: 'Правовой аудит оснований и доказательств',
      works: 'Изучаем договор, первичные документы, переписку, полномочия подписантов и проверяем соблюдение срока давности.',
      result: 'Заключение о судебных перспективах и перечень необходимых приложений'
    },
    {
      num: '02',
      stage: 'Претензионная работа и досудебный порядок',
      works: 'Составляем аргументированную претензию с расчётом долга и неустойки, направляем должнику с описью вложения.',
      result: 'Официальное доказательство соблюдения обязательного претензионного порядка'
    },
    {
      num: '03',
      stage: 'Расчёт цены иска и государственной пошлины',
      works: 'Формируем точную структуру требований (основной долг, неустойка, проценты, расходы), готовим платёжное поручение.',
      result: 'Детализированный расчёт требований и корректно оплаченная госпошлина'
    },
    {
      num: '04',
      stage: 'Подготовка иска и обеспечительных ходатайств',
      works: 'Пишем мотивированное исковое заявление со ссылками на закон и судебную практику, готовим ходатайство об аресте счетов.',
      result: 'Готовый комплект документов, полностью соответствующий ст. 125, 126 АПК РФ'
    },
    {
      num: '05',
      stage: 'Подача в арбитражный суд и контроль принятия',
      works: 'Направляем копии иска ответчику, подаём иск через «Мой Арбитр» и контролируем вынесение определения о принятии дела.',
      result: 'Определение арбитражного суда о принятии искового заявления к производству'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Аудит и претензионный этап',
      subtitle: 'Проверка оснований иска, расчет требований и подготовка досудебной претензии',
      price: 'от 15 000 ₽',
      popular: false,
      features: [
        { name: 'Правовой анализ договоров и первички', value: '✓' },
        { name: 'Расчёт основного долга и неустойки', value: '✓' },
        { name: 'Составление и направление претензии', value: '✓' },
        { name: 'Проверка рисков и подсудности спора', value: '✓' }
      ],
      buttonText: 'Заказать претензию',
      buttonHref: '#form'
    },
    {
      title: 'Иск «под ключ» с подачей',
      subtitle: 'Полный комплект искового заявления со всеми приложениями и подачей через «Мой Арбитр»',
      price: 'от 30 000 ₽',
      popular: true,
      badgeText: 'Популярно',
      features: [
        { name: 'Все услуги тарифа «Аудит и претензия»', value: '✓' },
        { name: 'Подготовка мотивированного искового заявления', value: '✓' },
        { name: 'Формирование доказательственной базы', value: '✓' },
        { name: 'Ходатайство об обеспечительных мерах', value: '✓' },
        { name: 'Подача через «Мой Арбитр» и контроль принятия', value: '✓' }
      ],
      buttonText: 'Подготовить иск',
      buttonHref: '#form'
    },
    {
      title: 'Иск + полное судебное ведение',
      subtitle: 'Подготовка иска и комплексное представительство во всех судебных заседаниях инстанции',
      price: 'от 60 000 ₽',
      popular: false,
      features: [
        { name: 'Все услуги тарифа «Иск под ключ»', value: '✓' },
        { name: 'Участие во всех заседаниях суда первой инстанции', value: '✓' },
        { name: 'Письменные пояснения и реакция на отзывы', value: '✓' },
        { name: 'Получение решения суда и исполнительного листа', value: '✓' },
        { name: 'Взыскание судебных расходов с ответчика', value: '✓' }
      ],
      buttonText: 'Поручить ведение',
      buttonHref: '#form'
    }
  ];

  const cases: CaseData[] = [
    {
      category: 'Поставка оборудования • АС Липецкой области',
      title: 'Взыскание 7,6\u00A0млн\u00A0₽ за поставку производственной линии',
      problem: 'Покупатель уклонялся от полной оплаты оборудования, утверждая, что накладные подписаны неуполномоченным лицом.',
      action: 'Собрали переписку, акты пусконаладки и доказательства частичной оплаты. Подготовили иск и ходатайство об аресте счетов должника.',
      result: 'Иск удовлетворён в полном объёме, взыскан долг 7,6\u00A0млн\u00A0₽ и неустойка 650\u00A0000\u00A0₽.'
    },
    {
      category: 'Строительный подряд • АС Воронежской области',
      title: 'Взыскание аванса 4,2\u00A0млн\u00A0₽ с недобросовестного подрядчика',
      problem: 'Подрядчик получил предоплату, но к выполнению монолитных работ на объекте так и не приступил.',
      action: 'Оформили односторонний отказ от договора, провели фиксацию состояния объекта и подали иск о возврате аванса и процентов по ст. 395 ГК РФ.',
      result: 'Суд взыскал сумму аванса, проценты и обязал вернуть переданную проектную документацию.'
    },
    {
      category: 'Коммерческая аренда • АС Липецкой области',
      title: 'Взыскание задолженности по аренде и возмещение ущерба помещению',
      problem: 'Арендатор съехал из помещения без уведомления, оставив долг за 4 месяца и повреждённую отделку.',
      action: 'Провели досудебную строительную экспертизу ущерба, рассчитали задолженность с учётом обеспечительного платежа и подали иск.',
      result: 'Взыскан долг по арендной плате 1,8\u00A0млн\u00A0₽ и стоимость восстановительного ремонта 920\u00A0000\u00A0₽.'
    }
  ];

  const faqs = [
    {
      q: 'Обязательно ли отправлять претензию перед подачей иска?',
      a: 'Для большинства денежных требований по коммерческим договорам в арбитражном процессе действует обязательный досудебный порядок. Иск может быть подан по истечении 30 календарных дней со дня направления претензии, если иной срок или порядок не установлены законом или договором.'
    },
    {
      q: 'Как правильно рассчитать госпошлину в арбитражный суд?',
      a: 'Госпошлина рассчитывается от цены иска по прогрессивной шкале, установленной статьёй 333.21 Налогового кодекса РФ. В цену иска входят сумма основного долга, неустойка, штрафы и проценты.'
    },
    {
      q: 'В какой арбитражный суд подавать иск?',
      a: 'По общему правилу иск подаётся по месту нахождения или жительства ответчика (ст. 35 АПК РФ). Однако стороны могут согласовать в договоре договорную подсудность (например, Арбитражный суд Липецкой области).'
    },
    {
      q: 'Как подаётся иск в арбитражный суд?',
      a: 'Иск подаётся в электронном виде через систему «Мой Арбитр» либо на бумажном носителе. Перед подачей копии искового заявления со всеми приложениями обязательно направляются ответчику и третьим лицам заказным письмом с описью вложения.'
    },
    {
      q: 'Что делать, если суд оставил иск без движения?',
      a: 'Суд указывает причины в определении (нехватка документа, ошибка в пошлине, отсутствие доказательства направления иска ответчику) и даёт срок на устранение. Юристы оперативно устраняют замечания, чтобы иск был принят к производству.'
    },
    {
      q: 'Можно ли взыскать расходы на подготовку иска с ответчика?',
      a: 'Да. Расходы на юридические услуги по составлению претензии, иска и сбору доказательств взыскиваются с проигравшей стороны в составе судебных расходов после завершения процесса.'
    }
  ];

  return (
    <main style={{ position: 'relative', overflowX: 'hidden' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
            <Link href="/biznesu/arbitrazhnyj-yurist/">Арбитражный юрист</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Подготовка и подача иска</span>
          </>
        }
        superTitle={
          <span style={{ whiteSpace: 'normal', display: 'inline-block', lineHeight: 1.4 }}>
            <span style={{ display: 'inline-block' }}>Исковое производство в арбитраже •</span> <br />
            <span style={{ display: 'inline-block' }}>Липецк и арбитражные суды РФ</span>
          </span>
        }
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Подготовка и подача иска
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              в арбитражный суд в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Проверим основания требований, подсудность, претензионный порядок и доказательства; рассчитаем цену иска и пошлину, сформируем комплект и сопроводим подачу в суд.
          </span>
        }
        primaryCtaText="Подготовить иск в арбитраж"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_primary_cta_isk"
        primaryCtaSubtext={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Перезвоним вам в рабочее время
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              или ответим по телефону: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (4742) 20-15-25</a>
            </span>
          </span>
        }
        trustItems={[
          { text: 'Проверка обязательного досудебного порядка' },
          { text: 'Точный расчёт неустойки и государственной пошлины' },
          { text: 'Ходатайства об обеспечительных мерах и аресте счетов' },
          { text: 'Официальная подача через систему «Мой Арбитр»' }
        ]}
        imageUrl="/images/konopkin.jpg"
        imageName="Дмитрий Сергеевич Конопкин"
        imageSubtitle="Адвокат, председатель Коллегии адвокатов «Де-Юре», куратор направления"
        imageObjectPosition="center 25%"
      />

      {/* ═══ БЛОК 2: СИТУАЦИИ ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span style={{ display: 'inline-block' }}>Когда требуется подготовка</span> <br /><span style={{ display: 'inline-block' }}>искового заявления</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Формируем сильную исковую позицию под конкретные обстоятельства коммерческого спора.
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
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', opacity: 0.06, pointerEvents: 'none' }}>
                  <svg width="100" height="100" viewBox="0 0 24 24" fill="var(--color-deep-blue)">
                    <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>

                <div style={{ position: 'relative', zIndex: 1 }}>
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
                    display: 'inline-block'
                  }}>
                    {item.tag}
                  </div>

                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '18px',
                    fontWeight: 600,
                    color: 'var(--color-deep-blue)',
                    margin: '0 0 14px 0',
                    lineHeight: 1.35
                  }}>
                    {item.title}
                  </h3>

                  <p style={{
                    fontSize: '15px',
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

          {/* Переключатель на защиту ответчика */}
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
            gap: '16px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: '1 1 500px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M12 8v4" />
                <path d="M12 16h.01" />
              </svg>
              <div>
                <strong style={{ display: 'block', fontSize: '15.5px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>
                  Иск предъявлен к вашей компании?
                </strong>
                <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Срочно изучим иск и определение суда, подготовим отзыв и заявим встречные требования.
                </span>
              </div>
            </div>
            <Link
              href="/biznesu/arbitrazhnyj-yurist/zashchita-otvetchika-v-arbitrazhnom-sude/"
              className="btn btn-outline"
              style={{ padding: '10px 22px', fontSize: '14px', whiteSpace: 'nowrap' }}
            >
              Защита ответчика в суде →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: СРОЧНЫЕ СИТУАЦИИ ═══ */}
      <section style={{ background: 'var(--color-deep-blue)', padding: '64px 0 56px', position: 'relative', overflow: 'hidden' }} id="urgent">
        <div className="container">
          <div style={{ maxWidth: '1000px', marginBottom: '36px' }}>
            <h2 style={{ fontSize: 'clamp(26px, 3.8vw, 38px)', fontFamily: 'var(--font-serif)', color: '#FFFFFF', marginBottom: '12px', marginTop: 0, lineHeight: 1.25 }}>
              Когда подачу иска нельзя откладывать
            </h2>
            <div style={{ width: '60px', height: '2px', background: 'var(--color-gold)', marginBottom: '20px' }}></div>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', marginBottom: '40px', maxWidth: '720px', lineHeight: 1.6 }}>
              <span style={{ display: 'inline-block' }}>Затягивание с подачей иска ведёт к пропуску сроков</span> <br className="hidden-mobile" />
              <span style={{ display: 'inline-block' }}>и невозможности реального взыскания денег.</span>
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

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '28px', display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <a href="tel:+74742201525" style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.02em' }} data-analytics="phone_click">
              +7 (4742) 20-15-25
            </a>
            <a href="tel:+74742201525" className="btn-urgent-call" style={{ padding: '14px 28px', fontSize: '15px' }} data-analytics="phone_click">
              Позвонить юристу
            </a>
            <a href="#form" className="btn-urgent-outline" style={{ padding: '14px 28px', fontSize: '15px' }}>
              Оценить иск
            </a>
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginLeft: '4px' }}>
              Ответим в рабочее время и согласуем процессуальные действия
            </span>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: ЭТАПЫ (ТАЙМЛАЙН) ═══ */}
      <section className="section bg-light" id="process" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '48px', textAlign: 'left' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
              Порядок подготовки иска
            </div>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Этапы подготовки и подачи</span> <br />
              <span style={{ display: 'inline-block' }}>искового заявления</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Строгое соблюдение требований АПК РФ исключает оставление иска без движения или возврат заявления.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {stages.map((step, idx) => (
              <div
                key={idx}
                className="hover-lift stage-horizontal-card"
                style={{
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  border: '1px solid var(--color-border)',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                  padding: '24px 32px 24px 20px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '24px',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div className="stage-accent" />
                
                {/* Левая часть: крупный номер по центру и по левому краю с легким срезом + текст */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '18px', flex: '1 1 540px', minWidth: '280px', position: 'relative' }}>
                  <div style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(64px, 6.5vw, 88px)',
                    fontWeight: 800,
                    color: 'var(--color-gold)',
                    lineHeight: 0.72,
                    marginLeft: '-46px',
                    marginTop: '-40px',
                    opacity: 0.2,
                    userSelect: 'none',
                    flexShrink: 0,
                    letterSpacing: '-0.05em'
                  }}>
                    {step.num}
                  </div>

                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: '19px',
                      fontFamily: 'var(--font-serif)',
                      color: 'var(--color-deep-blue)',
                      margin: '0 0 8px 0',
                      lineHeight: 1.35,
                      fontWeight: 600
                    }}>
                      {step.stage}
                    </h3>

                    <p style={{
                      fontSize: '14.5px',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.55,
                      margin: 0
                    }}>
                      {step.works}
                    </p>
                  </div>
                </div>

                {/* Правая часть: Результат этапа */}
                <div style={{
                  flex: '0 1 320px',
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
        </div>
      </section>

      {/* ═══ БЛОК 5: СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость составления и подачи иска"
        subtitle="Фиксированная стоимость услуг юриста закрепляется в договоре до начала подготовки документов."
        tiers={pricingTiers}
        disclaimer="Государственная пошлина оплачивается доверителем напрямую по реквизитам арбитражного суда. Понесённые судебные расходы взыскиваются с ответчика."
      />

      {/* ═══ БЛОК 6: КЕЙСЫ ═══ */}
      <CasesBlock
        title={
          <span>
            <span style={{ display: 'inline-block' }}>Примеры поданных исков</span> <br />
            <span style={{ display: 'inline-block' }}>из практики</span>
          </span>
        }
        showAllLink="/praktika/"
        showAllText="Смотреть все дела"
        showDemoWarning={true}
        cases={cases}
      />

      {/* ═══ БЛОК 7: FAQ ═══ */}
      <FAQBlock
        superTitle="Частые вопросы"
        title={
          <>
            <span style={{ display: 'inline-block' }}>Вопросы о подготовке</span> <br />
            <span style={{ display: 'inline-block' }}>и подаче иска</span>
          </>
        }
        subtitle="Претензионный порядок, расчёт пошлины, подсудность и подача через «Мой Арбитр»"
        faqs={faqs}
      />

      {/* ═══ БЛОК 8: ОФИС В ЛИПЕЦКЕ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '48px', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
                Офис в Липецке
              </div>
              <h2 className="with-accent" style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.25 }}>
                <span style={{ display: 'inline-block' }}>Обсудить подачу иска</span> <br />
                <span style={{ display: 'inline-block' }}>в офисе «Де-Юре»</span>
              </h2>
              <p style={{ fontSize: '15.5px', color: 'var(--color-deep-blue)', opacity: 0.9, lineHeight: 1.6, marginBottom: '24px' }}>
                Встретимся в офисе либо проведём аудит документов дистанционно.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
                <span style={{ fontSize: '14.5px', color: 'var(--color-deep-blue)' }}><strong>Адрес:</strong> г. Липецк, ул. Советская, д. 35, оф. 213</span>
                <span style={{ fontSize: '14.5px', color: 'var(--color-deep-blue)' }}><strong>Телефон:</strong> +7 (4742) 20-15-25</span>
                <span style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)' }}>Пн–Пт с 9:00 до 18:00 (по предварительной записи)</span>
              </div>
              <a href="#form" className="btn btn-primary" style={{ padding: '12px 28px' }}>
                Записаться на встречу
              </a>
            </div>
            <div style={{ background: 'var(--color-white)', border: '1px solid var(--color-border)', boxShadow: '0 8px 30px rgba(23, 50, 77, 0.08)', minHeight: '380px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ flex: 1, minHeight: '320px' }}>
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
                style={{ width: '100%', textAlign: 'center', padding: '14px 20px', borderTop: '1px solid var(--color-border)' }}
              >
                Построить маршрут до офиса
              </a>
            </div>
          </div>
        </div>
      </section>

            {/* ═══ БЛОК 9: ФОРМА (СВЯЗАТЬСЯ С НАМИ) — ШАБЛОН ═══ */}
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
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Поручите подготовку иска</span> <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>арбитражным юристам</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Опишите ситуацию и имеющиеся документы. Юрист изучит материалы, проверит досудебный порядок и свяжется с вами для согласования иска.
              </p>

              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация юриста</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Позвоните прямо сейчас: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (4742) 20-15-25</a>
                </p>
              </div>

              <div style={{ background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Конфиденциальность:</strong>
                Не указывайте в форме конфиденциальные данные и закрытые документы. Документы можно передать юристу после согласования защищённого канала связи.
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm
                title="Написать нам"
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
                buttonText="Обсудить подготовку иска"
                commentPlaceholder="Кратко опишите спор: основание иска, сумма долга, контрагент…"
                hiddenFields={[
                  { name: 'source_page', value: '/biznesu/arbitrazhnyj-yurist/isk-v-arbitrazhnyj-sud/' },
                  { name: 'page_type', value: 'service' },
                  { name: 'direction', value: 'arbitrazh' },
                  { name: 'service', value: 'isk-v-arbitrazhnyj-sud' }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
