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

  const contractProvisions: { title: React.ReactNode; desc: string }[] = [
    {
      title: <><span style={{ display: 'inline-block' }}>Порядок согласованного</span> <br /><span style={{ display: 'inline-block' }}>голосования участников</span></>,
      desc: 'Обязанность голосовать определённым образом по вопросам дивидендов, смены директора, крупных сделок или ликвидации.'
    },
    {
      title: <><span style={{ display: 'inline-block' }}>Механизмы разрешения</span> <br /><span style={{ display: 'inline-block' }}>тупиков (дедлоков)</span></>,
      desc: 'Индивидуальные алгоритмы преодоления тупика: опционы Call/Put, «русская рулетка», выкуп доли по фиксированной формуле.'
    },
    {
      title: <><span style={{ display: 'inline-block' }}>Непропорциональное</span> <br /><span style={{ display: 'inline-block' }}>распределение прав</span></>,
      desc: 'Возможность предоставить участнику с долей 20% право решающего голоса или повышенную долю в дивидендах.'
    },
    {
      title: <><span style={{ display: 'inline-block' }}>Ограничения на передачу</span> <br /><span style={{ display: 'inline-block' }}>долей (Tag/Drag Along)</span></>,
      desc: 'Условия Tag-Along (право присоединенной продажи) и Drag-Along (право потребовать совместной продажи) при входе покупателя.'
    },
    {
      title: <><span style={{ display: 'inline-block' }}>Дополнительное</span> <br /><span style={{ display: 'inline-block' }}>финансирование бизнеса</span></>,
      desc: 'Обязанности участников по предоставлению займов или вкладов в имущество и последствия отказа от финансирования.'
    },
    {
      title: <><span style={{ display: 'inline-block' }}>Неустойки и штрафы</span> <br /><span style={{ display: 'inline-block' }}>за нарушение договора</span></>,
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

      {/* ═══ БЛОК 3: СОДЕРЖАНИЕ ДОГОВОРА (ПО ШАБЛОНУ НАПРАВЛЕНИЙ) ═══ */}
      <section className="section" id="content" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              <span style={{ display: 'inline-block' }}>Содержание и ключевые разделы</span> <br />
              <span style={{ display: 'inline-block' }}>корпоративного договора</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Каждый договор разрабатывается с нуля</span> <br />
              <span style={{ display: 'inline-block' }}>под бизнес-модель, риски и архитектуру конкретного партнерства.</span>
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', position: 'relative' }}>
            {contractProvisions.map((item, idx) => (
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
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
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

      {/* ═══ БЛОК 9: СМЕЖНЫЕ НАПРАВЛЕНИЯ ПРАКТИКИ ДЛЯ БИЗНЕСА (ПО ШАБЛОНУ) ═══ */}
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
              Смежные направления практики для бизнеса
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '24px'
            }}>
              <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px, 3.5vw, 34px)', color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.25, flex: '1 1 480px', minWidth: '280px' }}>
                <span style={{ display: "inline-block" }}>Другие корпоративные</span> <br /><span style={{ display: "inline-block" }}>инструменты и споры</span>
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
                Превентивная защита корпоративного контроля и урегулирование разногласий партнеров.
              </p>
            </div>
          </div>

          <div className={relatedServices.length === 4 ? "grid grid-4" : "grid grid-3"} style={{ gap: '20px', marginBottom: '28px' }}>
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

      {/* ═══ БЛОК 10: ФИНАЛЬНАЯ ФОРМА (СВЯЗАТЬСЯ С НАМИ) — ШАБЛОН ═══ */}
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
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Получите первичную</span>{' '}
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>оценку ситуации</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Кратко опишите ситуацию и оставьте контакты. Юрист изучит первичные документы и свяжется с вами для обсуждения правовой задачи.
              </p>

              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация юриста</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Позвоните прямо сейчас: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (4742) 20-15-25</a>
                </p>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '6px' }}>
                  Липецк, ул. Советская, д. 35, офис 213 (приём по записи)
                </div>
              </div>

              <div style={{ background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Конфиденциальность:</strong>
                Не указывайте в форме конфиденциальные данные, коммерческую тайну и закрытые документы. Документы можно передать юристу после согласования защищённого способа связи.
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
                buttonText="Заказать корпоративный договор"
                commentPlaceholder="Кратко опишите задачи: распределение долей, правила голосования, условия инвестирования…"
                hiddenFields={[
                  { name: 'source_page', value: '/biznesu/korporativnyj-yurist/korporativnyj-dogovor/' },
                  { name: 'service', value: 'Разработка корпоративного договора' }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
