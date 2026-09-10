'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';
import CasesBlock, { CaseData } from '@/components/CasesBlock';
import ProcessBlock, { ProcessStep } from '@/components/ProcessBlock';
import PricingBlock, { PricingTier } from '@/components/PricingBlock';
import SpecialistBlock from '@/components/SpecialistBlock';

export default function KorporativnyjDogovorClient() {
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
        areaServed: ['Липецк', 'Липецкая область']
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/korporativnyj-yurist/korporativnyj-dogovor/#service',
        name: 'Разработка корпоративного договора в Липецке',
        serviceType: 'Разработка и согласование соглашений участников ООО и акционеров',
        provider: {
          '@id': 'https://dejure-help.ru/#legalservice'
        },
        areaServed: ['Липецк', 'Липецкая область'],
        description: 'Разработка корпоративного договора для участников ООО и акционеров: управление, голосование, финансирование, доли, выход партнёра и разрешение тупиков.'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/biznesu/korporativnyj-yurist/korporativnyj-dogovor/#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://dejure-help.ru/' },
          { '@type': 'ListItem', position: 2, name: 'Бизнесу', item: 'https://dejure-help.ru/biznesu/' },
          { '@type': 'ListItem', position: 3, name: 'Корпоративный юрист', item: 'https://dejure-help.ru/biznesu/korporativnyj-yurist/' },
          { '@type': 'ListItem', position: 4, name: 'Корпоративный договор', item: 'https://dejure-help.ru/biznesu/korporativnyj-yurist/korporativnyj-dogovor/' }
        ]
      }
    ]
  };

  const situations = [
    {
      tag: 'Несколько основателей',
      title: <>Партнёры создают общий бизнес <br />с равными или разными долями</>,
      desc: 'Нужно заранее распределить зоны ответственности, полномочия, порядок принятия ключевых решений и правила финансирования проекта.'
    },
    {
      tag: 'Привлечение инвестиций',
      title: <>В компанию входит инвестор <br />или венчурный фонд</>,
      desc: 'Требуется зафиксировать права инвестора на контроль расходов, вето на сделки и гарантии доходности без вмешательства в операционку.'
    },
    {
      tag: 'Риск дедлока 50/50',
      title: <>Доли распределены поровну <br />между двумя партнерами</>,
      desc: 'Необходим четкий сценарий разрешения тупиковых ситуаций (русская/техасская рулетка, выкуп долей, медиатор), чтобы бизнес не встал.'
    },
    {
      tag: 'Ограничение продажи долей',
      title: <>Защита от нежелательных <br />третьих лиц в составе ООО</>,
      desc: 'Включение прав совместной продажи (tag-along) или обязанности присоединиться к продаже (drag-along), запреты на отчуждение конкурентам.'
    },
    {
      tag: 'Пассивный инвестор',
      title: <>Один партнёр инвестирует, <br />второй управляет операционно</>,
      desc: 'Разделение непропорционального распределения прибыли и объёма голосов при принятии стратегических решений.'
    },
    {
      tag: 'Правила выхода',
      title: <>Порядок цивилизованного <br />расставания партнёров</>,
      desc: 'Фиксация формулы расчёта стоимости доли, графиков выплат и запретов на переманивание клиентов и сотрудников (non-compete).'
    }
  ];

  const contractProvisions = [
    {
      title: 'Порядок согласованного голосования',
      desc: 'Обязанность голосовать определённым образом по вопросам дивидендов, смены директора, крупных сделок или ликвидации.'
    },
    {
      title: 'Механизмы разрешения дедлоков',
      desc: 'Индивидуальные алгоритмы преодоления тупика: опционы Call/Put, «русская рулетка», выкуп доли по фиксированной формуле.'
    },
    {
      title: 'Непропорциональное распределение прав',
      desc: 'Возможность предоставить участнику с долей 20% право решающего голоса или повышенную долю в дивидендах.'
    },
    {
      title: 'Ограничения на передачу долей',
      desc: 'Условия Tag-Along (право присоединенной продажи) и Drag-Along (право потребовать совместной продажи) при входе покупателя.'
    },
    {
      title: 'Дополнительное финансирование',
      desc: 'Обязанности участников по предоставлению займов или вкладов в имущество и последствия отказа от финансирования.'
    },
    {
      title: 'Неустойки и штрафы за нарушение',
      desc: 'Установление существенных денежных штрафов за несоблюдение обязательств договора и голосование вразрез с договоренностями.'
    }
  ];

  const practiceCases: CaseData[] = [
    {
      category: 'Стартап и инвестиции',
      title: 'Корпоративный договор для IT-компании с венчурным инвестором',
      problem: 'Инвестор вкладывал 20 млн ₽ за долю 25%, требуя право вето на ключевые сделки и запрет на отчуждение долей фаундерами в течение 3 лет.',
      action: 'Разработали сбалансированный корпоративный договор и новую редакцию устава: закрепили права инвестора на аудит и вето по сделкам свыше 2 млн ₽, а фаундерам сохранили полную свободу в операционном управлении и найме.',
      result: 'Договор и изменения в устав удостоверены нотариусом. Инвестиции привлечены, баланс контроля сохранен.'
    },
    {
      category: 'Партнерство 50/50',
      title: 'Предотвращение дедлока в производственной компании с двумя соучредителями',
      problem: 'Два собственника кирпичного завода с долями 50/50 хотели обезопасить бизнес от возможного паралича при споре о назначении директора.',
      action: 'Интегрировали в договор механизм «русской рулетки» (Russian Roulette deadlock clause) с формулой оценки стоимости на основе чистой прибыли за последние 3 года и условиями обязательного выкупа.',
      result: 'Корпоративный договор подписан всеми участниками. Риск блокировки операционной деятельности предприятия сведен к нулю.'
    },
    {
      category: 'Опционы и мотивация',
      title: 'Опционная программа для топ-менеджеров с условиями KPI',
      problem: 'Собственник группы компаний хотел мотивировать генерального директора долей 10% в бизнесе, но только при достижении целевой выручки через 2 года.',
      action: 'Подготовили корпоративный договор и безотзывную оферту (опцион на заключение договора купли-продажи доли) с четкими метриками исполнения KPI и условиями обратного выкупа (Call-option) при увольнении.',
      result: 'Опцион удостоверен нотариусом. Директор мотивирован, риски потери контроля для собственника полностью исключены.'
    }
  ];

  const processSteps: ProcessStep[] = [
    {
      num: '01',
      title: 'Интервью и сбор договоренностей',
      desc: 'Проводим детальный опрос всех участников: цели партнерства, доли, финансирование, зоны ответственности и сценарии выхода.'
    },
    {
      num: '02',
      title: 'Аудит устава и подготовка матрицы условий',
      desc: 'Сопоставляем договоренности с действующим уставом и законодательством, формируем матрицу прав и обязанностей (Term Sheet).'
    },
    {
      num: '03',
      title: 'Разработка текста договора и синхронизация устава',
      desc: 'Пишем индивидуальный проект корпоративного договора, устраняем противоречия с уставом и разрабатываем сопутствующие решения.'
    },
    {
      num: '04',
      title: 'Согласование и подписание',
      desc: 'Проводим раунды правового согласования со всеми сторонами и сопровождаем подписание и нотариальное удостоверение.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Базовый корпоративный договор',
      subtitle: 'Для 2–3 партнёров со стандартной структурой',
      popular: false,
      price: 'от 30 000 ₽',
      features: [
        { name: 'Правовой аудит устава компании', value: 'Включено' },
        { name: 'Индивидуальный корпоративный договор', value: 'Включено' },
        { name: 'Порядок голосования и дивидендов', value: 'Включено' },
        { name: '1 раунд правовых правок и согласований', value: 'Включено' }
      ],
      buttonText: 'Заказать базовый договор',
      buttonHref: '#form'
    },
    {
      title: 'Комплекс «Договор + Устав + Дедлоки»',
      subtitle: 'Максимальная защита и предотвращение тупиков',
      popular: true,
      badgeText: 'Выбор большинства',
      price: 'от 55 000 ₽',
      features: [
        { name: 'Синхронизация корпоративного договора и устава', value: 'Включено' },
        { name: 'Детальные механизмы преодоления Deadlock', value: 'Включено' },
        { name: 'Ограничения Tag-along и Drag-along', value: 'Включено' },
        { name: 'Сопровождение нотариального удостоверения', value: 'Включено' }
      ],
      buttonText: 'Выбрать комплекс',
      buttonHref: '#form'
    },
    {
      title: 'Инвестиционный / Опционный договор',
      subtitle: 'Привлечение инвесторов и опционы ключевым сотрудникам',
      popular: false,
      price: 'от 75 000 ₽',
      features: [
        { name: 'Инвестиционное соглашение и SHA', value: 'Включено' },
        { name: 'Опционы Call / Put для участников и топ-менеджмента', value: 'Включено' },
        { name: 'Заверения об обстоятельствах и возмещение потерь', value: 'Включено' },
        { name: 'Полный юридический консалтинг на всех этапах', value: 'Включено' }
      ],
      buttonText: 'Заказать инвестиционный SHA',
      buttonHref: '#form'
    }
  ];

  const faqs = [
    {
      q: 'Обязательно ли заверять корпоративный договор у нотариуса?',
      a: 'Корпоративный договор подлежит обязательному нотариальному удостоверению только в определенных случаях (например, если он содержит опционы на долю или отчуждение долей). Однако в остальных ситуациях нотариальное удостоверение также крайне рекомендуется для фиксации даты, дееспособности сторон и предотвращения оспаривания.'
    },
    {
      q: 'Нужно ли раскрывать содержание корпоративного договора в налоговой или ЕГРЮЛ?',
      a: 'Нет. Сам текст корпоративного договора является строго конфиденциальным документом. В регистрирующий орган (ФНС) направляется лишь уведомление о факте заключения договора, если он предусматривает непропорциональный объем правомочий участников или ограничения на отчуждение долей.'
    },
    {
      q: 'Что имеет приоритет: устав или корпоративный договор?',
      a: 'Устав регулирует деятельность общества в целом и обязателен для всех органов и третьих лиц. Корпоративный договор обязывает только тех участников, которые его подписали. При этом условия договора, прямо противоречащие императивным нормам закона или уставу, могут быть оспорены, поэтому крайне важно синхронизировать оба документа.'
    },
    {
      q: 'Что происходит, если один из партнеров нарушает корпоративный договор?',
      a: 'В договоре фиксируются существенные штрафные неустойки за нарушение обязательств (например, голосование вопреки соглашению). Кроме того, решения органов общества, принятые в нарушение корпоративного договора, могут быть признаны судом недействительными по иску добросовестной стороны.'
    }
  ];

  const relatedServices = [
    {
      title: 'Корпоративные споры',
      desc: 'Защита при конфликтах участников и оспаривании решений собраний.',
      link: '/biznesu/korporativnyj-yurist/korporativnye-spory-mezhdu-uchastnikami/'
    },
    {
      title: 'Сделки с долями ООО',
      desc: 'Сопровождение купли-продажи, дарения и залога долей.',
      link: '/biznesu/korporativnyj-yurist/sdelki-s-dolyami-ooo/'
    },
    {
      title: 'Покупка и продажа бизнеса',
      desc: 'Due diligence и комплексное сопровождение M&A сделок.',
      link: '/biznesu/korporativnyj-yurist/pokupka-prodazha-biznesa/'
    },
    {
      title: 'Защита корпоративного контроля',
      desc: 'Восстановление контроля при несанкционированной смене директора.',
      link: '/biznesu/korporativnyj-yurist/zashchita-korporativnogo-kontrolya/'
    }
  ];

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
            <Link href="/biznesu/korporativnyj-yurist/">Корпоративный юрист</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Корпоративный договор</span>
          </>
        }
        superTitle={
          <span style={{ whiteSpace: 'normal', display: 'inline-block', lineHeight: 1.4 }}>
            <span style={{ display: 'inline-block' }}>СОГЛАШЕНИЯ УЧАСТНИКОВ И ПАРТНЕРОВ •</span> <br />
            <span style={{ display: 'inline-block' }}>Липецк и РФ</span>
          </span>
        }
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Разработка корпоративного договора
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Индивидуальные соглашения участников ООО и акционеров: распределение контроля, правил голосования, инвестиций, сценариев выхода и разрешения тупиковых ситуаций (дедлоков).
          </span>
        }
        primaryCtaText="Заказать разработку договора"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_primary_cta_corp_dogovor"
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
        imageSubtitle="Специалист по корпоративным процедурам, куратор направления"
        imageObjectPosition="center 15%"
        trustItems={[
          {
            text: (
              <span>
                <strong>Практический опыт с 1997 года</strong> в сопровождении корпоративных процедур
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Полная конфиденциальность</strong> и защита коммерческой тайны бизнеса
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Арбитражный суд Липецкой области</strong> и арбитражные суды РФ
              </span>
            )
          }
        ]}
      />

      {/* ═══ БЛОК 2: ТИПОВЫЕ СИТУАЦИИ / КОНФЛИКТЫ ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span style={{ display: 'inline-block' }}>Типовые ситуации заключения</span> <br />
              <span style={{ display: 'inline-block' }}>корпоративного договора</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Договор защищает бизнес-партнерство и инвестиции, фиксируя правила управления и распределения прибыли.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '32px' }}>
            {situations.map((sit, idx) => (
              <div
                key={idx}
                className="hover-lift"
                style={{
                  padding: '36px 30px',
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
              >
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
                  display: 'inline-block',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {sit.tag}
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '20px',
                  fontWeight: 600,
                  color: 'var(--color-deep-blue)',
                  margin: '0 0 14px 0',
                  lineHeight: 1.35,
                  position: 'relative',
                  zIndex: 1
                }}>
                  {sit.title}
                </h3>

                <p style={{
                  fontSize: '15px',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.6,
                  margin: 0,
                  position: 'relative',
                  zIndex: 1
                }}>
                  {sit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: СОДЕРЖАНИЕ ДОГОВОРА ═══ */}
      <section className="section bg-white" id="content">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 50px auto' }}>
            <h2 className="section-title" style={{ marginBottom: '16px' }}>
              Содержание и ключевые разделы корпоративного договора
            </h2>
            <p className="section-subtitle" style={{ color: 'var(--color-text-secondary)', margin: '0 auto' }}>
              Каждый договор разрабатывается с нуля под бизнес-модель, риски и архитектуру конкретного партнерства.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px' }}>
            {contractProvisions.map((prov, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  padding: '32px 26px',
                  backgroundColor: 'var(--color-bg-light)',
                  border: '1px solid var(--color-border)'
                }}
              >
                <h3 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', marginBottom: '12px', lineHeight: 1.4 }}>
                  {prov.title}
                </h3>
                <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {prov.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: КУРАТОР ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name="Владимир Викторович Начешников"
        position="Специалист по корпоративным процедурам и сопровождению бизнеса, куратор направления"
        imageUrl="/images/nacheshnikov.jpg"
        imagePosition="center 15%"
        profileHref="/specialisty/nacheshnikov-vladimir-viktorovich/"
        profileText="Подробнее о Владимире Викторовиче Начешникове →"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Грамотный корпоративный договор — это юридический фундамент компании, исключающий 90% будущих конфликтов между учредителями.
          </span>,
          <span key="2" style={{ color: 'var(--color-deep-blue)', display: 'block', marginTop: '12px' }}>
            Владимир Викторович структурирует переговоры между учредителями и инвесторами, выявляет скрытые противоречия и курирует процесс фиксации договоренностей в юридически обязывающие документы.
          </span>
        ]}
        buttonText="Обсудить условия договора"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 5: КЕЙСЫ ═══ */}
      <CasesBlock
        title={<><span style={{ display: 'inline-block' }}>Примеры разработки</span> <br /><span style={{ display: 'inline-block' }}>корпоративных договоров</span></>}
        cases={practiceCases}
        showAllLink="/praktika"
        showAllText="Смотреть всю практику →"
      />

      {/* ═══ БЛОК 6: КАК ПРОХОДИТ РАБОТА (ПОРЯДОК РАБОТЫ) ═══ */}
      <ProcessBlock
        title={<><span style={{ display: 'inline-block' }}>Этапы подготовки</span> <br /><span style={{ display: 'inline-block' }}>корпоративного договора</span></>}
        subtitle="Четкая последовательность от детального брифинга до нотариального удостоверения."
        steps={processSteps}
        ctaTitle="Планируете запуск бизнеса с партнёром или привлечение инвестора?"
        ctaSubtitle="Подготовим матрицу условий и проект договора, защищающий ваши инвестиции и контроль."
        ctaButtonText="Заказать аудит"
        ctaButtonHref="#form"
      />

      {/* ═══ БЛОК 7: ТАРИФЫ ═══ */}
      <PricingBlock
        title="Стоимость разработки корпоративного договора"
        subtitle="Фиксированная стоимость, зависящая от сложности структуры и количества участников."
        tiers={pricingTiers}
        ctaTitle="Рассчитаем стоимость подготовки договора для вашего бизнеса"
        ctaSubtitle="Оставьте заявку — проконсультируем по структуре документа и подготовим расчет стоимости."
        ctaButtonText="Рассчитать стоимость"
        ctaButtonLink="#form"
      />

      {/* ═══ БЛОК 8: FAQ ═══ */}
      <FAQBlock
        superTitle="Частые вопросы"
        title="Вопросы о корпоративном договоре"
        subtitle="Разъяснения юристов по заключению, условиям и правовой силе соглашений участников."
        faqs={faqs}
      />

      {/* ═══ БЛОК 9: СВЯЗАННЫЕ УСЛУГИ ═══ */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 40px auto' }}>
            <h2 className="section-title" style={{ marginBottom: '12px' }}>
              Другие корпоративные задачи
            </h2>
            <p className="section-subtitle" style={{ color: 'var(--color-text-secondary)', margin: '0 auto' }}>
              Комплексные юридические услуги для собственников и топ-менеджмента в Липецке.
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '20px' }}>
            {relatedServices.map((rel, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  padding: '24px 20px',
                  backgroundColor: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <h3 style={{ fontSize: '17px', color: 'var(--color-deep-blue)', marginBottom: '10px' }}>
                    <Link href={rel.link} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {rel.title}
                    </Link>
                  </h3>
                  <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5, marginBottom: '16px' }}>
                    {rel.desc}
                  </p>
                </div>
                <Link href={rel.link} style={{ fontSize: '13.5px', color: 'var(--color-primary)', fontWeight: 600 }}>
                  Перейти к услуге →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 10: ФИНАЛЬНАЯ ФОРМА ═══ */}
      <ContactsForm
        title="Зафиксируйте правила до возникновения конфликта"
        subtitle="Оставьте заявку на подготовку корпоративного договора. Обсудим задачи бизнеса и согласуем оптимальную правовую конструкцию."
        hiddenFields={[{ name: 'service', value: 'Разработка корпоративного договора' }]}
      />

      <Footer />
    </>
  );
}
