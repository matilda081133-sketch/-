'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MilitaryHero from '@/components/MilitaryHero';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import ProcessBlock from '@/components/ProcessBlock';
import CasesBlock, { CaseData } from '@/components/CasesBlock';
import SpecialistBlock from '@/components/SpecialistBlock';
import PricingBlock, { PricingTier } from '@/components/PricingBlock';

export default function SoprovozhdenieProverokClient() {
  const situations = [
    {
      tag: 'Требование ФНС',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Получено требование</span> <br />
          <span style={{ display: 'inline-block' }}>о представлении документов</span>
        </span>
      ),
      desc: 'Проверим обоснованность запроса по ст. 93, 93.1 НК РФ, сопоставим запрошенные документы с предметом контроля и подготовим безопасный ответ.',
      btnText: 'Проверить требование'
    },
    {
      tag: 'Камеральная проверка',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Камеральная налоговая</span> <br />
          <span style={{ display: 'inline-block' }}>проверка декларации</span>
        </span>
      ),
      desc: 'Поможем устранить претензии по налоговым разрывам в АСК НДС-2, подтвердить правомерность вычетов и расходов, подготовить обоснованные пояснения.',
      btnText: 'Защита при камералке'
    },
    {
      tag: 'Выездная проверка (ВНП)',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Решение о назначении</span> <br />
          <span style={{ display: 'inline-block' }}>выездной проверки компании</span>
        </span>
      ),
      desc: 'Организуем комплексное юридическое сопровождение ВНП: контроль действий инспекторов, взаимодействие с проверяющими и защита конфиденциальных данных.',
      btnText: 'Сопровождение ВНП'
    },
    {
      tag: 'Вызов на допрос',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Вызов директора, главбуха</span> <br />
          <span style={{ display: 'inline-block' }}>или сотрудника на допрос</span>
        </span>
      ),
      desc: 'Определим предмет допроса по ст. 90 НК РФ, исключим противоречия между показаниями персонала и первичными документами, сопроводим визит в ФНС.',
      btnText: 'Подготовка к допросу'
    },
    {
      tag: 'Осмотр и выемка',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Осмотр помещений</span> <br />
          <span style={{ display: 'inline-block' }}>или выемка документов ФНС</span>
        </span>
      ),
      desc: 'Контролируем процессуальный порядок по ст. 92, 94 НК РФ, присутствие понятых, детальную опись изымаемых оригиналов и недопущение изъятия лишнего.',
      btnText: 'Контроль осмотра'
    },
    {
      tag: 'Акт проверки',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Получен акт налоговой проверки</span> <br />
          <span style={{ display: 'inline-block' }}>с крупными доначислениями</span>
        </span>
      ),
      desc: 'Проведем аудит доказательств ФНС, подготовим мотивированные возражения в установленный 1 месяц и отстоим интересы на рассмотрении материалов.',
      btnText: 'Возражения на акт'
    }
  ];

  const urgentRisks = [
    {
      title: 'Предоставление лишней информации без правового анализа',
      desc: 'Бухгалтерия в спешке передает инспекторам внутреннюю переписку, черновики и документы, не входящие в предмет требования, что дает повод для новых доначислений.'
    },
    {
      title: 'Неподготовленные показания сотрудников на допросе',
      desc: 'Инспекторы ловят испуганных работников на неточностях. Протокол допроса свидетеля по ст. 90 НК РФ становится главным доказательством фиктивности сделок.'
    },
    {
      title: 'Пропуск месячного срока на подачу возражений на акт',
      desc: 'По ст. 100 НК РФ у компании есть ровно один месяц со дня получения акта для подачи мотивированных возражений. Пропуск срока лишает шанса снять претензии до решения.'
    }
  ];

  const directions = [
    {
      num: '01',
      title: 'Аудит требований и запросов инспекции',
      desc: 'Проверяем законность требований по ст. 93 и 93.1 НК РФ, наличие оснований и допустимость запрашиваемых документов вне рамок проверок.'
    },
    {
      num: '02',
      title: 'Подготовка непротиворечивых пояснений',
      desc: 'Формируем официальные ответы на запросы ФНС, раскрывая экономический смысл сделок и исключая раскрытие коммерческой тайны.'
    },
    {
      num: '03',
      title: 'Личное сопровождение юриста на допросах в ФНС',
      desc: 'Очное присутствие юриста на допросе директора, главного бухгалтера или сотрудников, фиксация нарушений инспекторов и внесение замечаний в протокол.'
    },
    {
      num: '04',
      title: 'Правовой контроль при осмотрах и выемках',
      desc: 'Предотвращаем незаконное изъятие серверов, печатей и первичных документов, следим за соблюдением прав налогоплательщика.'
    },
    {
      num: '05',
      title: 'Подготовка мотивированных возражений на акт проверки',
      desc: 'Анализируем доказательства налогового органа по каждому эпизоду, выявляем процессуальные пороки и формируем встречную доказательственную базу.'
    },
    {
      num: '06',
      title: 'Защита на рассмотрении материалов проверки',
      desc: 'Очное участие при рассмотрении акта и возражений руководством ИФНС, заявление ходатайств о вызове свидетелей и проведении экспертизы.'
    }
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Анализ текущей ситуации и документов',
      desc: 'Изучаем требование, уведомление о вызове, решение о назначении проверки или акт с расчетом доначислений.'
    },
    {
      num: '02',
      title: 'Сбор доказательств и контррасчет',
      desc: 'Сопоставляем первичные документы с данными деклараций, выявляем нестыковки, проводим встречный расчет налоговых обязательств.'
    },
    {
      num: '03',
      title: 'Согласование единой позиции компании',
      desc: 'Координируем позицию генерального директора, бухгалтерии и ответственных менеджеров во избежание противоречий.'
    },
    {
      num: '04',
      title: 'Подготовка ответов, пояснений и возражений',
      desc: 'Составляем процессуально безупречные документы со ссылками на Налоговый кодекс РФ и актуальные позиции ВС РФ.'
    },
    {
      num: '05',
      title: 'Участие в процессуальных действиях',
      desc: 'Сопровождаем доверителей на допросах, осмотрах территорий и официальном рассмотрении материалов проверки в инспекции.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Ответ на требование или подготовка к допросу',
      subtitle: 'Точечная юридическая помощь',
      popular: false,
      price: 'от 15 000 ₽',
      features: [
        { name: 'Правовая экспертиза требования по ст. 93/93.1', value: 'Включено' },
        { name: 'Подготовка официального мотивированного ответа', value: 'Включено' },
        { name: 'Инструктаж сотрудника перед визитом в налоговую', value: 'Включено' },
        { name: 'Очное участие юриста на одном допросе в ФНС', value: 'По согласованию' }
      ],
      buttonText: 'Заказать ответ',
      buttonHref: '#form'
    },
    {
      title: 'Возражения на акт налоговой проверки',
      subtitle: 'Комплексный разбор претензий инспекции',
      popular: true,
      badgeText: 'Ключевой этап',
      price: 'от 45 000 ₽',
      features: [
        { name: 'Детальный аудит каждого спорного эпизода акта', value: 'Включено' },
        { name: 'Сбор доказательств реальности исполнения договоров', value: 'Включено' },
        { name: 'Подготовка мотивированных письменных возражений', value: 'Включено' },
        { name: 'Очное участие при рассмотрении материалов в ИФНС', value: 'Включено' }
      ],
      buttonText: 'Подготовить возражения',
      buttonHref: '#form'
    },
    {
      title: 'Полное сопровождение выездной проверки (ВНП)',
      subtitle: 'Защита бизнеса на весь период проверки',
      popular: false,
      price: 'от 90 000 ₽',
      features: [
        { name: 'Неограниченный аудит входящих требований инспекторов', value: 'Включено' },
        { name: 'Юридический фильтр всех передаваемых в ФНС бумаг', value: 'Включено' },
        { name: 'Участие во всех допросах, осмотрах и выемках', value: 'Включено' },
        { name: 'Подготовка и защита возражений на итоговый акт', value: 'Включено' }
      ],
      buttonText: 'Сопровождение ВНП',
      buttonHref: '#form'
    }
  ];

  const practiceCases: CaseData[] = [
    {
      category: 'Камеральная проверка',
      title: 'Снятие претензий по вычетам НДС на 8,4 млн ₽ без доначислений',
      problem: 'Инспекция выставила требование по камеральной проверке декларации НДС торговой сети, указав на наличие разрыва 3-го звена в цепочке поставщиков.',
      action: 'Юристы подготовили подробные пояснения, приложили ТТН с отметками весового контроля, путевые листы и подтвердили должную осмотрительность при выборе контрагента.',
      result: 'Налоговый орган принял представленные доказательства. Камеральная проверка завершилась без составления акта и доначислений.'
    },
    {
      category: 'Выездная проверка',
      title: 'Исключение претензий на 19,5 млн ₽ на стадии рассмотрения акта ВНП',
      problem: 'В акте выездной проверки строительно-монтажного предприятия проверяющие сняли расходы по договорам субподряда, сочтя их фиктивными.',
      action: 'В возражениях предоставили журналы общих работ по форме КС-6, акты скрытых работ, списки рабочих с пропусками на объект и доказательства аренды спецтехники.',
      result: 'Руководство инспекции при рассмотрении материалов согласилось с доводами возражений и исключило спорные начисления из итогового решения.'
    },
    {
      category: 'Допрос свидетеля',
      title: 'Предотвращение признания сделок нереальными после допроса начальника склада',
      problem: 'Инспекторы вызвали начальника склада логистического центра на допрос с целью доказать отсутствие реального хранения товаров спорного поставщика.',
      action: 'Юрист провел предварительный инструктаж с опорой на архивные журналы погрузки и лично участвовал в допросе, пресекая наводящие вопросы инспектора.',
      result: 'Показания сотрудника полностью подтвердили реальность движения товара и совпали с первичными документами, лишив инспекцию повода для доначислений.'
    }
  ];

  const faqs = [
    {
      q: 'Обязана ли компания предоставлять документы вне рамок налоговой проверки?',
      a: 'По ст. 93.1 НК РФ налоговый орган вправе истребовать документы (информацию) относительно конкретной сделки вне рамок налоговых проверок. Однако требование должно содержать четкие реквизиты сделки и контрагента. Запросы общего характера без указания сделки являются неправомерными, и на них можно дать мотивированный отказ.'
    },
    {
      q: 'Может ли юрист или адвокат присутствовать на допросе в качестве свидетеля?',
      a: 'Да. В силу ч. 1 ст. 48 Конституции РФ и позиции ФНС РФ свидетель при допросе в налоговом органе имеет безусловное право пользоваться юридической помощью адвоката или квалифицированного юриста, который вправе делать замечания и вносить записи в протокол.'
    },
    {
      q: 'Какой срок дается на подачу возражений на акт налоговой проверки?',
      a: 'В соответствии с п. 6 ст. 100 НК РФ налогоплательщик вправе подать письменные возражения на акт налоговой проверки в течение одного месяца со дня получения акта. Этот срок не подлежит продлению, поэтому начинать работу над возражениями необходимо немедленно.'
    },
    {
      q: 'Что делать, если инспекторы требуют оригиналы первичных документов?',
      a: 'По закону (ст. 93 НК РФ) документы представляются в налоговый орган в виде заверенных копий. Подлинники документов проверяющие вправе лишь осматривать на территории налогоплательщика. Изъятие оригиналов допустимо исключительно в рамках процедуры выемки по ст. 94 НК РФ.'
    },
    {
      q: 'Как выездная проверка связана со статьей 199 УК РФ?',
      a: 'Если сумма недоимки по акту проверки превышает крупный размер (от 18,75 млн ₽ за 3 финансовых года), а неуплата носит умышленный характер, материалы после вступления решения в силу передаются в Следственный комитет. Поэтому позиция на стадии проверки должна учитывать риски уголовного обвинения.'
    },
    {
      q: 'Можно ли оспорить акт проверки сразу в суде?',
      a: 'Нет. Акт проверки не является ненормативным правовым актом и не порождает обязанностей по уплате. На акт подаются возражения в инспекцию, которая затем выносит решение. И только итоговое решение после обжалования в УФНС может быть обжаловано в арбитражном суде.'
    }
  ];

  return (
    <main>
      <Header />

      {/* ═══ БЛОК 1: HERO ═══ */}
      <MilitaryHero
        breadcrumbs={
          <>
            <Link href="/">Главная</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/biznesu/">Бизнесу</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/biznesu/nalogovyj-yurist-dlya-biznesa/">Налоговый юрист для бизнеса</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Сопровождение налоговых проверок</span>
          </>
        }
        superTitle={
          <span style={{ whiteSpace: 'normal', display: 'inline-block', lineHeight: 1.4 }}>
            <span style={{ display: 'inline-block' }}>НАЛОГОВЫЕ ПРОВЕРКИ И СПОРЫ •</span> <br />
            <span style={{ display: 'inline-block' }}>Липецк и Липецкая область</span>
          </span>
        }
        title={
          <span style={{ display: 'block' }}>
            <span style={{ display: 'inline-block' }}>Сопровождение налоговых</span> <br />
            <span style={{ display: 'inline-block', color: 'var(--color-gold)' }}>проверок в Липецке</span>
          </span>
        }
        subtitle="Помогаем бизнесу отвечать на требования ФНС, проходить камеральные и выездные проверки, участвовать в мероприятиях налогового контроля и готовить возражения на акт."
        trustItems={[
          'Проверим основания, объем и сроки требований инспекции',
          'Согласуем единую позицию руководства, бухгалтерии и персонала',
          'Очное участие юриста при допросах, осмотрах и рассмотрении акта',
          'Подготовим мотивированные возражения и снизим сумму доначислений'
        ]}
        primaryCtaText="Обсудить налоговую проверку"
        primaryCtaLink="#form"
        secondaryCtaText="Риски проверок"
        secondaryCtaLink="#urgent"
      />

      {/* ═══ БЛОК 2: СИТУАЦИИ ═══ */}
      <section id="situations" style={{ padding: '60px 0', background: 'var(--color-bg-light)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span
              style={{
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--color-gold)',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}
            >
              СТАДИИ НАЛОГОВОГО КОНТРОЛЯ
            </span>
            <h2
              style={{
                fontSize: '32px',
                fontWeight: 800,
                color: 'var(--color-text-main)',
                marginTop: '8px',
                marginBottom: '12px'
              }}
            >
              В каких ситуациях мы помогаем бизнесу
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', maxWidth: '750px', margin: '0 auto' }}>
              Подключаемся на любой текущей стадии проверки и выстраиваем согласованную защиту интересов компании.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px'
            }}
          >
            {situations.map((sit, idx) => (
              <div
                key={idx}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)',
                  padding: '28px',
                  borderRadius: '12px',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
                  border: '1px solid rgba(0,0,0,0.06)',
                  borderTop: '3px solid var(--color-gold)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-10px',
                    width: '70px',
                    height: '70px',
                    opacity: 0.04,
                    pointerEvents: 'none'
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                  </svg>
                </div>

                <div>
                  <div
                    style={{
                      display: 'inline-block',
                      fontSize: '11px',
                      fontWeight: 700,
                      color: 'var(--color-gold)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      background: 'rgba(218, 165, 32, 0.1)',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      marginBottom: '14px'
                    }}
                  >
                    {sit.tag}
                  </div>
                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      color: 'var(--color-text-main)',
                      marginBottom: '12px',
                      lineHeight: '1.3'
                    }}
                  >
                    {sit.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '14px',
                      color: 'var(--color-text-secondary)',
                      lineHeight: '1.5',
                      marginBottom: '20px'
                    }}
                  >
                    {sit.desc}
                  </p>
                </div>

                <a
                  href="#form"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--color-deep-blue)',
                    textDecoration: 'none',
                    borderBottom: '1px dashed var(--color-deep-blue)',
                    width: 'fit-content',
                    paddingBottom: '2px'
                  }}
                >
                  {sit.btnText} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: РИСКИ И СРОЧНОСТЬ ═══ */}
      <section
        id="urgent"
        style={{
          padding: '70px 0',
          background: 'var(--color-deep-blue)',
          color: '#ffffff',
          position: 'relative'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span
              style={{
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--color-gold)',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}
            >
              КРИТИЧЕСКИЕ ОШИБКИ БИЗНЕСА
            </span>
            <h2
              style={{
                fontSize: '32px',
                fontWeight: 800,
                color: '#ffffff',
                marginTop: '8px',
                marginBottom: '12px'
              }}
            >
              Что опасно делать при налоговой проверке без юриста
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)', maxWidth: '800px', margin: '0 auto' }}>
              Ошибки, допущенные при даче первых пояснений или на допросах, практически невозможно исправить в суде.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
              marginBottom: '40px'
            }}
          >
            {urgentRisks.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '12px',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'rgba(218, 165, 32, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-gold)',
                      fontWeight: 700,
                      fontSize: '14px'
                    }}
                  >
                    !
                  </div>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                    {item.title}
                  </h3>
                </div>
                <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              background: 'rgba(0,0,0,0.25)',
              borderRadius: '12px',
              padding: '24px',
              borderLeft: '4px solid var(--color-gold)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '20px'
            }}
          >
            <div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                Получили акт налоговой проверки или повестку на допрос в ИФНС?
              </div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)' }}>
                Проанализируем документы и согласуем стратегию защиты в течение 1 рабочего дня.
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href="tel:+74742201525"
                style={{
                  fontSize: '18px',
                  fontWeight: 800,
                  color: 'var(--color-gold)',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap'
                }}
              >
                +7 (4742) 20-15-25
              </a>
              <a
                href="#form"
                style={{
                  background: 'var(--color-gold)',
                  color: '#ffffff',
                  padding: '12px 24px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  whiteSpace: 'nowrap'
                }}
              >
                Срочная консультация
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: КОНТУРЫ СОПРОВОЖДЕНИЯ ═══ */}
      <section id="directions" style={{ padding: '60px 0', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span
              style={{
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--color-gold)',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}
            >
              КОМПЛЕКСНАЯ ПОМОЩЬ
            </span>
            <h2
              style={{
                fontSize: '32px',
                fontWeight: 800,
                color: 'var(--color-text-main)',
                marginTop: '8px',
                marginBottom: '12px'
              }}
            >
              Что входит в юридическое сопровождение проверки
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', maxWidth: '750px', margin: '0 auto' }}>
              Обеспечиваем непрерывный правовой контроль всех действий инспекторов от первого запроса до итогового решения.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px'
            }}
          >
            {directions.map((dir, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--color-bg-light)',
                  borderRadius: '12px',
                  padding: '28px',
                  border: '1px solid rgba(0,0,0,0.06)',
                  display: 'flex',
                  gap: '16px'
                }}
              >
                <div
                  style={{
                    fontSize: '22px',
                    fontWeight: 900,
                    color: 'var(--color-gold)',
                    lineHeight: 1
                  }}
                >
                  {dir.num}
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: '17px',
                      fontWeight: 700,
                      color: 'var(--color-text-main)',
                      marginBottom: '8px',
                      lineHeight: 1.3
                    }}
                  >
                    {dir.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '14px',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.5,
                      margin: 0
                    }}
                  >
                    {dir.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 5: ЭТАПЫ РАБОТЫ ═══ */}
      <ProcessBlock
        title="Как проходит сопровождение налоговой проверки"
        steps={processSteps}
      />

      {/* ═══ БЛОК 6: КУРАТОР (SPECIALISTBLOCK) ═══ */}
      <SpecialistBlock
        title="Куратор направления — Аркадий Евгеньевич Бобкин"
        name="Аркадий Евгеньевич Бобкин"
        position={<>Директор, управляющий партнёр ЮК «Де-Юре»,<br />куратор направления «Налоговые проверки и споры»</>}
        imageUrl="/images/bobkin.jpg"
        imagePosition="center 15%"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Аркадий Евгеньевич курирует работу по сложным выездным и камеральным проверкам: оценивает материалы и позицию ФНС, помогает определить ключевые налоговые и связанные уголовно-правовые риски, участвует в формировании стратегии и координирует работу профильных налоговых юристов и аудиторов.
          </span>,
          <div
            key="2"
            style={{
              borderLeft: '3px solid var(--color-gold)',
              paddingLeft: '16px',
              fontStyle: 'italic',
              fontSize: '14.5px',
              color: 'var(--color-deep-blue)',
              margin: '16px 0 0 0'
            }}
          >
            «Опыт работы в следственных подразделениях налоговой полиции и МВД помогает учитывать, как отдельные документы, пояснения и свидетельские показания могут быть истолкованы при дальнейшем развитии спора».
          </div>,
          <ul key="3" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>22 года в следственных подразделениях налоговой полиции и Следственного комитета МВД РФ</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>Десятки предотвращенных доначислений на стадии рассмотрения материалов проверки</span>
            </li>
          </ul>,
          <a key="4" href="/specialisty/bobkin-arkadiy-evgenevich/" style={{ display: 'inline-block', marginTop: '16px', fontSize: '14px', color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
            Подробнее об опыте куратора →
          </a>
        ]}
        buttonText="Задать вопрос куратору"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 7: ЦЕНЫ ═══ */}
      <PricingBlock
        title="Стоимость сопровождения налоговой проверки"
        subtitle="Цена зависит от формата проверки (камеральная или выездная), числа проверяемых контрагентов и объема возражений"
        tiers={pricingTiers}
      />

      {/* ═══ БЛОК 8: КЕЙСЫ ═══ */}
      <CasesBlock
        title="Примеры сопровождения налоговых проверок"
        subtitle="Реальные результаты защиты интересов налогоплательщиков в инспекциях Липецка и Черноземья"
        cases={practiceCases}
      />

      {/* ═══ БЛОК 9: FAQ ═══ */}
      <FAQBlock items={faqs} />

      {/* ═══ БЛОК 10: СВЯЗАННЫЕ УСЛУГИ ═══ */}
      <section style={{ padding: '60px 0', background: 'var(--color-bg-light)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2
            style={{
              fontSize: '26px',
              fontWeight: 800,
              color: 'var(--color-text-main)',
              marginBottom: '24px',
              textAlign: 'center'
            }}
          >
            Связанные налоговые услуги
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '16px'
            }}
          >
            <Link
              href="/biznesu/nalogovyj-yurist-dlya-biznesa/"
              style={{
                background: '#ffffff',
                padding: '20px',
                borderRadius: '8px',
                textDecoration: 'none',
                color: 'var(--color-text-main)',
                border: '1px solid rgba(0,0,0,0.06)',
                fontWeight: 600,
                fontSize: '15px',
                display: 'block'
              }}
            >
              ← Все услуги налогового юриста
            </Link>
            <Link
              href="/biznesu/nalogovyj-yurist-dlya-biznesa/osparivanie-donachislenij-i-reshenij-fns/"
              style={{
                background: '#ffffff',
                padding: '20px',
                borderRadius: '8px',
                textDecoration: 'none',
                color: 'var(--color-text-main)',
                border: '1px solid rgba(0,0,0,0.06)',
                fontWeight: 600,
                fontSize: '15px',
                display: 'block'
              }}
            >
              Оспаривание решений ФНС →
            </Link>
            <Link
              href="/biznesu/nalogovyj-yurist-dlya-biznesa/zashchita-pri-obvinenii-v-droblenii-biznesa/"
              style={{
                background: '#ffffff',
                padding: '20px',
                borderRadius: '8px',
                textDecoration: 'none',
                color: 'var(--color-text-main)',
                border: '1px solid rgba(0,0,0,0.06)',
                fontWeight: 600,
                fontSize: '15px',
                display: 'block'
              }}
            >
              Защита при дроблении бизнеса →
            </Link>
            <Link
              href="/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-nalogovym-prestupleniyam/"
              style={{
                background: '#ffffff',
                padding: '20px',
                borderRadius: '8px',
                textDecoration: 'none',
                color: 'var(--color-text-main)',
                border: '1px solid rgba(0,0,0,0.06)',
                fontWeight: 600,
                fontSize: '15px',
                display: 'block'
              }}
            >
              Защита по ст. 199 УК РФ →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 11: ФОРМА И КОНТАКТЫ ═══ */}
      <section id="form" style={{ padding: '70px 0', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
              alignItems: 'start'
            }}
          >
            <div>
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  color: 'var(--color-gold)',
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}
              >
                ПРАВОВАЯ ЗАЩИТА БИЗНЕСА
              </span>
              <h2
                style={{
                  fontSize: '32px',
                  fontWeight: 800,
                  color: 'var(--color-text-main)',
                  marginTop: '8px',
                  marginBottom: '16px'
                }}
              >
                Обсудите налоговую проверку со специалистом
              </h2>
              <p
                style={{
                  fontSize: '15px',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '24px'
                }}
              >
                Укажите, какое требование или уведомление получено от ФНС и какой срок ответа установлен. Обращение будет передано Аркадию Евгеньевичу Бобкину для анализа ситуации и организации защиты.
              </p>
              <div
                style={{
                  background: 'var(--color-bg-light)',
                  padding: '20px',
                  borderRadius: '8px',
                  borderLeft: '4px solid var(--color-gold)',
                  marginBottom: '24px'
                }}
              >
                <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--color-deep-blue)' }}>
                  Полная конфиденциальность
                </div>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>
                  Данные налоговой отчетности и коммерческая информация охраняются законом о коммерческой и профессиональной тайне.
                </div>
              </div>
              <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
                Офис в Липецке: <strong>ул. Советская, д. 35, оф. 213</strong>
                <br />
                Телефон для связи: <strong>+7 (4742) 20-15-25</strong>
              </div>
            </div>

            <div
              style={{
                background: 'var(--color-bg-light)',
                padding: '32px',
                borderRadius: '12px',
                border: '1px solid rgba(0,0,0,0.08)'
              }}
            >
              <ContactsForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
