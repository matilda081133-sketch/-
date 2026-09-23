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

export default function MigracionnoeSoprovozhdenieClient() {
  const migrationSituations = [
    {
      tag: 'Приём на работу',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Планируете принять</span> <br />
          <span style={{ display: 'inline-block' }}>иностранного сотрудника</span>
        </span>
      ),
      desc: 'Нужно проверить его статус и документы, определить допустимый порядок оформления и не пропустить обязательные действия работодателя.',
      btnText: 'Проверить кандидата'
    },
    {
      tag: 'Договор и уведомления',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Нужно оформить договор</span> <br />
          <span style={{ display: 'inline-block' }}>и взаимодействие с МВД</span>
        </span>
      ),
      desc: 'Требуется подготовить или проверить договор, кадровые документы и уведомления, связанные с началом или прекращением работы.',
      btnText: 'Оформить документы'
    },
    {
      tag: 'Действующие работники',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Есть сомнения в документах</span> <br />
          <span style={{ display: 'inline-block' }}>работающих иностранцев</span>
        </span>
      ),
      desc: 'Нужно проверить сроки, сведения и комплектность документов, а также соответствие фактической работы оформленным условиям.',
      btnText: 'Провести аудит'
    },
    {
      tag: 'Запрос МВД',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Компания получила запрос</span> <br />
          <span style={{ display: 'inline-block' }}>или требование от МВД</span>
        </span>
      ),
      desc: 'Важно определить объём ответа, сроки, допустимые пояснения и не передать сведения без предварительной правовой оценки.',
      btnText: 'Ответить на запрос'
    },
    {
      tag: 'Проверка или рейд',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Сотрудники МВД прибыли</span> <br />
          <span style={{ display: 'inline-block' }}>на объект или производство</span>
        </span>
      ),
      desc: 'Требуется контролировать действия проверяющих, фиксировать процедуру, организовать документы и защитить интересы компании.',
      btnText: 'Сопровождение проверки'
    },
    {
      tag: 'Протокол или штраф',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Возбуждено дело</span> <br />
          <span style={{ display: 'inline-block' }}>по статье 18.15 КоАП РФ</span>
        </span>
      ),
      desc: 'Нужно изучить материалы дела, подготовить возражения, участвовать в рассмотрении или обжаловать постановление о штрафе.',
      btnText: 'Защита по ст. 18.15'
    }
  ];

  const subServices = [
    {
      title: 'Юридическое оформление иностранных работников',
      desc: 'Проверим документы и статус, подготовим или проверим договоры, уведомления и кадровое оформление при приёме, изменении условий или увольнении.',
      href: '/biznesu/migracionnoe-soprovozhdenie-biznesa/yuridicheskoe-oformlenie-inostrannyh-rabotnikov/'
    },
    {
      title: 'Миграционный аудит работодателя',
      desc: 'Проверим действующих иностранных работников и документы компании, выявим нарушения и подготовим план их устранения до визита МВД.',
      href: '/biznesu/migracionnoe-soprovozhdenie-biznesa/migracionnyj-audit-rabotodatelya/'
    },
    {
      title: 'Юрист при миграционной проверке МВД',
      desc: 'Подготовим компанию к проверочным действиям, сопроводим взаимодействие с МВД, ответы на запросы и возражения по результатам проверки.',
      href: '/biznesu/migracionnoe-soprovozhdenie-biznesa/yurist-pri-migracionnoj-proverke-mvd/'
    },
    {
      title: 'Защита работодателя по статье 18.15 КоАП РФ',
      desc: 'Изучим материалы дела, подготовим позицию и возражения, представим интересы при рассмотрении и обжаловании постановления.',
      href: '/biznesu/migracionnoe-soprovozhdenie-biznesa/zashchita-rabotodatelya-po-state-18-15-koap-rf/'
    }
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Уточняем задачу',
      desc: 'Вы описываете ситуацию: планируемый приём, действующие работники, запрос или проверка МВД, составленный протокол либо постановление.'
    },
    {
      num: '02',
      title: 'Изучаем документы',
      desc: 'Проверяем документы работников и компании, договоры, уведомления, требования МВД и материалы административного дела.'
    },
    {
      num: '03',
      title: 'Оцениваем риски',
      desc: 'Определяем нарушения, процессуальные риски, срочные действия и законные варианты защиты интересов работодателя.'
    },
    {
      num: '04',
      title: 'Согласуем план и стоимость',
      desc: 'Фиксируем состав работ, ответственных специалистов, порядок обмена документами и цену до начала юридической работы.'
    },
    {
      num: '05',
      title: 'Выполняем юридическую работу',
      desc: 'Готовим документы и пояснения, сопровождаем оформление, аудит, проверку или производство по административному делу.'
    },
    {
      num: '06',
      title: 'Передаём результат и рекомендации',
      desc: 'Разъясняем итог, дальнейшие процессуальные действия и меры, которые помогут снизить повторные риски при работе с иностранцами.'
    },
    {
      isBanner: true,
      title: 'Дистанционный формат работы',
      desc: 'Первичную консультацию, обмен документами, аудит и подготовку части материалов можно начать дистанционно. Необходимость личного участия юриста или адвоката зависит от стадии проверки или дела и выбранного формата защиты.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Консультация и оценка рисков',
      subtitle: 'Первичный правовой анализ',
      popular: false,
      price: 'от 10 000 ₽',
      features: [
        { name: 'Разбор конкретной ситуации компании', value: 'Включено' },
        { name: 'Первичная проверка документов и статуса иностранцев', value: 'Включено' },
        { name: 'Определение срочных обязательных действий', value: 'Включено' },
        { name: 'Рекомендации по выбору формата юридической помощи', value: 'Включено' }
      ],
      buttonText: 'Заказать консультацию',
      buttonHref: '#form'
    },
    {
      title: 'Оформление и профилактика',
      subtitle: 'Договоры, уведомления и аудит',
      popular: true,
      badgeText: 'Частый выбор',
      price: 'от 25 000 ₽',
      features: [
        { name: 'Проверка права на труд и разрешительных документов', value: 'Включено' },
        { name: 'Подготовка трудовых договоров и кадровых актов', value: 'Включено' },
        { name: 'Заполнение и подача уведомлений в МВД в течение трёх рабочих дней с даты заключения или прекращения договора', value: 'Включено' },
        { name: 'Миграционный аудит и составление реестра рисков', value: 'Включено' }
      ],
      buttonText: 'Заказать сопровождение',
      buttonHref: '#form'
    },
    {
      title: 'Проверка МВД и защита по КоАП',
      subtitle: 'Срочная административная защита',
      popular: false,
      price: 'от 45 000 ₽',
      features: [
        { name: 'Правовой анализ требований и запросов подразделений МВД', value: 'Включено' },
        { name: 'Юридическое сопровождение действий на объекте компании', value: 'Включено' },
        { name: 'Подготовка мотивированных возражений на протокол', value: 'Включено' },
        { name: 'Обжалование постановлений по ст. 18.15 КоАП РФ в суде', value: 'Включено' }
      ],
      buttonText: 'Срочная защита',
      buttonHref: '#form'
    }
  ];

  const practiceCases: CaseData[] = [
    {
      category: 'Миграционный аудит',
      title: 'Выявили нарушения в документах иностранных работников до проверки МВД',
      problem: 'Компания использовала труд иностранных работников, оформленных в разное время. Документы хранились в нескольких подразделениях, часть сведений не была систематизирована, а кадровая служба сомневалась в актуальности уведомлений и сроков.',
      action: 'Провели аудит личных и кадровых документов, сопоставили статус каждого работника с фактическими условиями работы, проверили уведомления и сформировали перечень нарушений и необходимых исправлений.',
      result: 'Компания привела документы в единый порядок, устранила выявленные нарушения, назначила ответственных и получила рабочий регламент контроля сроков по иностранным сотрудникам.'
    },
    {
      category: 'Проверка МВД',
      title: 'Сопроводили работодателя при внеплановой миграционной проверке',
      problem: 'После проверки объекта компания получила требование представить документы по иностранным работникам и пояснения по условиям их допуска к работе. Срок ответа был ограничен, а часть документов требовала правовой оценки.',
      action: 'Изучили требование и обстоятельства проверки, определили необходимый объём документов, подготовили пояснения, зафиксировали процессуальные замечания и сопровождали взаимодействие с подразделением МВД.',
      result: 'Компания представила согласованную позицию и комплект документов в установленный срок. Часть первоначальных претензий не получила подтверждения; деятельность компании не была приостановлена.'
    },
    {
      category: 'Статья 18.15 КоАП РФ',
      title: 'Отменили постановление о штрафе за иностранного работника',
      problem: 'Работодателя привлекли к ответственности по статье 18.15 КоАП РФ после проверки на объекте. Компания считала, что проверяющие неверно установили фактические обстоятельства и не учли представленные документы.',
      action: 'Изучили материалы проверки и административного дела, выявили противоречия в доказательствах и нарушения процедуры, подготовили жалобу и представили позицию работодателя при рассмотрении дела.',
      result: 'Суд отменил постановление и прекратил производство по делу. Компания избежала назначенного крупного штрафа и сопутствующих неблагоприятных последствий.'
    }
  ];

  const faqs = [
    {
      q: 'Кому подходит миграционное сопровождение бизнеса?',
      a: 'Компаниям и индивидуальным предпринимателям, которые планируют принять иностранного работника, уже используют труд иностранных сотрудников либо столкнулись с запросом, проверкой или административным делом МВД.'
    },
    {
      q: 'С работниками из каких стран вы помогаете работодателям?',
      a: 'Порядок зависит не только от гражданства, но и от статуса человека в России (ЕАЭС, безвизовый порядок по патенту, РВП, ВНЖ). На консультации проверим имеющиеся документы и определим допустимый формат помощи. Получение квот, приглашений, рабочих виз и разрешений для привлечения работников из визовых стран мы не сопровождаем.'
    },
    {
      q: 'Вы получаете или переоформляете патенты?',
      a: 'Нет. Мы не получаем и не переоформляем патенты для физических лиц. При юридическом оформлении работника работодателем мы проверяем уже имеющийся патент, подтверждения авансовых платежей НДФЛ, сроки действия и соответствие планируемой работы указанным условиям.'
    },
    {
      q: 'Можно ли проверить документы иностранца до заключения договора?',
      a: 'Да. Проверим представленные документы и статус, сопоставим их с предполагаемой должностью, местом и условиями работы и обозначим правовые риски до фактического допуска сотрудника к работе.'
    },
    {
      q: 'Вы помогаете с уведомлениями МВД о заключении или расторжении договора?',
      a: 'Да, в рамках юридического оформления иностранного работника мы готовим или проверяем уведомление и порядок его подачи. Напоминаем: срок подачи уведомления в территориальный орган МВД строго ограничен тремя рабочими днями.'
    },
    {
      q: 'Когда компании необходим миграционный аудит?',
      a: 'Если иностранные работники уже оформлены, документы ведут разные сотрудники, менялись ответственные лица или есть сомнения в полноте уведомлений и контроле сроков. Аудит позволяет выявить нарушения до того, как их обнаружит проверяющий орган.'
    },
    {
      q: 'Что делать, если МВД уже запросило документы или пришло на объект?',
      a: 'Не препятствуйте законным действиям и не подписывайте документы без прочтения. Зафиксируйте сведения о проверяющих, основание и предмет мероприятий, назначьте одного контактного представителя и как можно быстрее передайте юристу требование, акт и имеющиеся материалы.'
    },
    {
      q: 'Чем сопровождение проверки отличается от защиты по статье 18.15 КоАП РФ?',
      a: 'Сопровождение проверки начинается на стадии запроса, осмотра или сбора документов инспекторами. Защита по статье 18.15 КоАП РФ требуется, когда уже составляется протокол, рассматривается административное дело либо вынесено постановление о штрафе.'
    },
    {
      q: 'Можно ли отменить или снизить штраф по ст. 18.15 КоАП РФ?',
      a: 'Это зависит от состава нарушения, доказательств, соблюдения процедуры проверки, статуса работодателя и стадии дела. После изучения материалов определим основания для прекращения дела, изменения квалификации, назначения предупреждения или снижения штрафа ниже низшего предела.'
    },
    {
      q: 'Можно ли начать работу дистанционно?',
      a: 'Да. Обсудить задачу, направить документы и согласовать первичные действия можно дистанционно. Необходимость очного участия зависит от стадии проверки или дела и места проведения процессуальных действий.'
    },
    {
      q: 'От чего зависит стоимость услуг?',
      a: 'От количества иностранных работников, их правового статуса, объёма документов, срочности, стадии проверки или судебного дела и необходимого объёма представительства. Состав работ и цена фиксируются в договоре до начала работы.'
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
            <span style={{ color: 'var(--color-text-main)' }}>Миграционное сопровождение бизнеса</span>
          </>
        }
        superTitle={
          <span style={{ whiteSpace: 'normal', display: 'inline-block', lineHeight: 1.4 }}>
            <span style={{ display: 'inline-block' }}>МИГРАЦИОННОЕ ПРАВО ДЛЯ РАБОТОДАТЕЛЕЙ •</span> <br />
            <span style={{ display: 'inline-block' }}>Липецк и Липецкая область</span>
          </span>
        }
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Миграционное сопровождение
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              бизнеса в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '760px', textWrap: 'balance' }}>
            Помогаем компаниям и предпринимателям законно оформлять иностранных работников, снижать миграционные риски и защищать интересы при проверках МВД и административных делах.
          </span>
        }
        primaryCtaText="Обсудить задачу"
        primaryCtaLink="#form"
        primaryCtaSubtext={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Конфиденциальный звонок куратору направления:
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (4742) 20-15-25</a>
            </span>
          </span>
        }
        secondaryCtaText="Направления помощи"
        secondaryCtaLink="#directions"
        imageUrl="/images/konopkin.jpg"
        imageName="Дмитрий Сергеевич Конопкин"
        imageSubtitle="Адвокат, председатель Коллегии адвокатов «Де-Юре», куратор направления «Миграционное сопровождение бизнеса»"
        imageObjectPosition="center 15%"
        trustItems={[
          {
            text: (
              <span>
                <strong>Проверим статус работников</strong> и имеющиеся документы до допуска к работе
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Подготовим или проверим</strong> договоры, уведомления МВД и кадровое оформление
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Сопроводим проверку МВД</strong> и выстроим защиту при претензиях и протоколах
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Не оформляем патенты и визы</strong> — защищаем работодателя в правовом поле
              </span>
            )
          }
        ]}
      />

      {/* ═══ БЛОК 2: СИТУАЦИИ (ШАБЛОН «СИТУАЦИИ») ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <div
              style={{
                fontSize: '12.5px',
                fontWeight: 700,
                color: 'var(--color-gold)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '12px'
              }}
            >
              МИГРАЦИОННЫЕ ВОПРОСЫ РАБОТОДАТЕЛЯ
            </div>
            <h2
              className="with-accent"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px, 4vw, 42px)',
                color: 'var(--color-deep-blue)',
                marginBottom: '16px',
                marginTop: 0,
                lineHeight: 1.2,
                textAlign: 'left'
              }}
            >
              <span style={{ display: 'inline-block' }}>Когда работодателю нужен</span> <br />
              <span style={{ display: 'inline-block' }}>миграционный юрист</span>
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: 'var(--color-text-secondary)',
                fontWeight: 400,
                lineHeight: 1.6,
                margin: 0,
                textAlign: 'left',
                textWrap: 'balance'
              }}
            >
              Подключаемся до приёма иностранного работника, при проверке действующих документов или уже после появления претензий со стороны МВД.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '32px' }}>
            {migrationSituations.map((sit, idx) => (
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
                <div
                  style={{
                    position: 'absolute',
                    top: '-15px',
                    right: '-15px',
                    width: '90px',
                    height: '90px',
                    opacity: 0.04,
                    pointerEvents: 'none',
                    color: 'var(--color-deep-blue)'
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>

                <div>
                  {sit.tag && (
                    <div
                      style={{
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
                      }}
                    >
                      {sit.tag}
                    </div>
                  )}

                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '18px',
                      fontWeight: 600,
                      color: 'var(--color-deep-blue)',
                      margin: '0 0 12px 0',
                      lineHeight: 1.35
                    }}
                  >
                    {sit.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '14px',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.6,
                      margin: 0
                    }}
                  >
                    {sit.desc}
                  </p>
                </div>

                <div style={{ marginTop: '20px' }}>
                  <a
                    href="#form"
                    className="situation-btn"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: 'var(--color-primary)',
                      fontSize: '13.5px',
                      fontWeight: 600,
                      textDecoration: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--color-gold)';
                      const svg = e.currentTarget.querySelector('svg');
                      if (svg) {
                        svg.style.transform = 'translateX(4px)';
                        svg.style.stroke = 'var(--color-gold)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--color-primary)';
                      const svg = e.currentTarget.querySelector('svg');
                      if (svg) {
                        svg.style.transform = 'translateX(0)';
                        svg.style.stroke = 'currentColor';
                      }
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById('form');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                      else window.location.hash = 'form';
                    }}
                  >
                    <span>{sit.btnText}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.25s ease, stroke 0.25s ease' }}>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Баннер «Не нашли свою ситуацию?» */}
          <div
            style={{
              background: 'linear-gradient(135deg, var(--color-deep-blue) 0%, #17324D 100%)',
              padding: '36px 36px',
              borderTop: '3px solid var(--color-gold)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px',
              flexWrap: 'wrap',
              boxShadow: '0 12px 30px rgba(11, 28, 42, 0.15)'
            }}
          >
            <style dangerouslySetInnerHTML={{ __html: `
              .white-btn-custom {
                background-color: var(--color-white) !important;
                color: #10273B !important;
                border: 1px solid var(--color-white) !important;
                white-space: nowrap;
                font-weight: 600;
                padding: 14px 28px !important;
                transition: all 0.3s ease !important;
              }
              .white-btn-custom:hover {
                background-color: var(--color-gold) !important;
                color: var(--color-deep-blue) !important;
                border-color: var(--color-gold) !important;
              }
              @media (min-width: 860px) {
                .b2b-migration-banner-line {
                  white-space: nowrap !important;
                }
              }
            `}} />
            <div style={{ flex: '1 1 auto', minWidth: '280px' }}>
              <h3 style={{ margin: '0 0 12px 0', fontSize: '26px', fontFamily: 'var(--font-serif)', color: '#FFFFFF', lineHeight: 1.3 }}>
                Не нашли свою ситуацию?
              </h3>
              <p style={{ margin: 0, fontSize: '14px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6 }}>
                <span className="b2b-migration-banner-line" style={{ display: 'block' }}>Миграционный вопрос может одновременно затрагивать статус работника, трудовые договоры и действия МВД.</span>
                <span className="b2b-migration-banner-line" style={{ display: 'block' }}>Опишите задачу — мы определим подходящий формат работы.</span>
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
                Обсудить задачу с куратором
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: НАПРАВЛЕНИЯ ПОМОЩИ (ДОЧЕРНИЕ УСЛУГИ) ═══ */}
      <section id="directions" className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <div
              style={{
                fontSize: '12.5px',
                fontWeight: 700,
                color: 'var(--color-gold)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '12px'
              }}
            >
              ПРОФИЛЬНЫЕ УСЛУГИ КЛАСТЕРА
            </div>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span style={{ display: 'inline-block' }}>Направления миграционной</span> <br />
              <span style={{ display: 'inline-block' }}>защиты бизнеса</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Выберите задачу по текущей стадии. Если ситуация затрагивает сразу несколько вопросов, кратко опишите обстоятельства — определим, с чего начать.
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '20px', marginBottom: '32px' }}>
            {subServices.map((sub, idx) => (
              <Link
                key={idx}
                href={sub.href}
                style={{ textDecoration: 'none', display: 'block', height: '100%' }}
              >
                <div
                  className="card service-card hover-lift"
                  style={{
                    height: '100%',
                    minHeight: '220px',
                    padding: '28px 20px',
                    background: 'var(--color-white)',
                    border: '1px solid var(--color-border)',
                    borderTop: '3px solid var(--color-gold)',
                    borderRadius: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)',
                    transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.5s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.35s ease',
                    position: 'relative',
                    cursor: 'pointer'
                  }}
                >
                  <div>
                    <h3 style={{ margin: '0 0 12px 0', fontSize: '17px', color: 'var(--color-deep-blue)', lineHeight: 1.35, fontFamily: 'var(--font-serif)', fontWeight: 600, minHeight: '66px' }}>
                      {sub.title}
                    </h3>
                    <p style={{ margin: '0 0 20px 0', fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                      {sub.desc}
                    </p>
                  </div>
                  <div
                    className="card-arrow"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: 'var(--color-primary)',
                      fontSize: '13.5px',
                      fontWeight: 600,
                      marginTop: 'auto',
                      paddingTop: '12px',
                      borderTop: '1px solid rgba(23, 50, 77, 0.06)',
                      transition: 'transform 0.3s'
                    }}
                  >
                    <span>Подробнее об услуге</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.3s' }}>
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

      {/* ═══ БЛОК 4: КУРАТОР (SPECIALISTBLOCK) ═══ */}
      <SpecialistBlock
        title="Куратор направления — Дмитрий Сергеевич Конопкин"
        name="Дмитрий Сергеевич Конопкин"
        position={<>Адвокат, председатель Коллегии адвокатов «Де-Юре»,<br />куратор направления «Миграционное сопровождение бизнеса»</>}
        imageUrl="/images/konopkin.jpg"
        imagePosition="center 15%"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Дмитрий Сергеевич курирует работу по обращениям работодателей: организует первичную оценку ситуации, определение правовой позиции и координацию дальнейших действий команды.
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
            «До начала адвокатской деятельности шесть лет работал в Следственном комитете Российской Федерации и прошёл путь до старшего следователя по особо важным делам. Этот опыт используется при анализе документов, доказательств и процессуальных рисков, когда компания взаимодействует с проверяющим органом или защищается по административному делу».
          </div>,
          <ul key="3" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>Реестровый номер адвоката: 48/812 в реестре адвокатов Липецкой области</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>Координация правовой помощи работодателям при оформлении сотрудников, проверках МВД и защите по КоАП РФ</span>
            </li>
          </ul>,
          <a key="4" href="/specialisty/konopkin-dmitriy-sergeevich/" style={{ display: 'inline-block', marginTop: '16px', fontSize: '14px', color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
            Подробнее о Дмитрии Конопкине →
          </a>
        ]}
        buttonText="Задать вопрос адвокату"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 5: ЭТАПЫ РАБОТЫ ═══ */}
      <ProcessBlock
        title="Как проходит работа по миграционному сопровождению"
        subtitle="Миграционные задачи работодателя требуют точного учёта статуса работников, документов и стадии ситуации. На каждом этапе фиксируем состав работ, сроки и следующий результат."
        steps={processSteps}
      />

      {/* ═══ БЛОК 6: ЦЕНЫ ═══ */}
      <PricingBlock
        pageUrl="https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/"
        title="Стоимость миграционного сопровождения бизнеса"
        subtitle="Стоимость зависит от количества иностранных работников, их статуса, объёма документов, срочности и стадии проверки МВД. Фиксируется в договоре."
        tiers={pricingTiers}
      />

      {/* ═══ БЛОК 7: КЕЙСЫ ═══ */}
      <CasesBlock
        title="Примеры из практики"
        subtitle="Результаты юридической помощи работодателям Липецка и Липецкой области"
        cases={practiceCases}
      />

      {/* ═══ БЛОК 8: FAQ ═══ */}
      <FAQBlock items={faqs} />

      {/* ═══ БЛОК 9: СВЯЗАННЫЕ УСЛУГИ — КАНОНИЧЕСКИЙ ШАБЛОН ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--color-bg-light)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <div
              style={{
                fontSize: '12.5px',
                fontWeight: 700,
                color: 'var(--color-gold)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '12px'
              }}
            >
              СМЕЖНЫЕ НАПРАВЛЕНИЯ
            </div>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Связанные услуги</span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>для бизнеса</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Миграционный контроль предприятий часто пересекается с уголовно-правовыми рисками, корпоративными процедурами и спорами с работниками.
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '24px' }}>
            <Link href="/biznesu/ugolovno-pravovaya-zashchita-biznesa/ugolovno-pravovoj-audit-biznesa/" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
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
                    Уголовно-правовой аудит бизнеса
                  </h3>
                  <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    Превентивная проверка договоров, хозяйственных цепочек и оценка рисков уголовной ответственности руководства.
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

            <Link href="/biznesu/arbitrazhnyj-yurist/" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
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
                    Арбитражные споры
                  </h3>
                  <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    Представительство в арбитражных судах по экономическим спорам, неисполнению договоров и взысканию убытков.
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

            <Link href="/biznesu/korporativnyj-yurist/" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
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
                    Корпоративный юрист
                  </h3>
                  <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    Защита корпоративного контроля, разрешение споров участников и правовое оформление структуры компании.
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

            <Link href="/biznesu/trudovye-spory-s-rabotnikami/" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
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
                    Трудовые споры для бизнеса
                  </h3>
                  <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    Защита интересов работодателя при проверках ГИТ, спорах с работниками и расследованиях несчастных случаев.
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
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 10: ФИНАЛЬНАЯ ФОРМА (СВЯЗАТЬСЯ С НАМИ) — КАНОНИЧЕСКИЙ ШАБЛОН ═══ */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px', padding: '80px 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>
                  КОНФИДЕНЦИАЛЬНАЯ КОНСУЛЬТАЦИЯ
                </span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Обсудите задачу с Дмитрием</span>{' '}
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Сергеевичем Конопкиным</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Кратко опишите задачу и оставьте контактные данные. Обращение будет передано Дмитрию Сергеевичу Конопкину для первичной правовой оценки ситуации и согласования формата дальнейшей работы.
              </p>

              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация специалиста по миграционному праву</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Телефон для связи: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (4742) 20-15-25</a>
                </p>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '6px' }}>
                  Офис в Липецке: ул. Советская, д. 35, оф. 213 (приём по записи)
                </div>
              </div>

              <div style={{ background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Безопасность и конфиденциальность</strong>
                Не отправляйте через веб-форму паспорта, миграционные карты, патенты и персональные данные работников. Документы передаются только по согласованному защищённому каналу связи.
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm
                title="Написать нам"
                subtitle="Оставьте имя и номер телефона. При желании кратко опишите ситуацию — это поможет юристу подготовиться к разговору."
                subtext="Если вы оставите заявку вечером или в выходной день, мы перезвоним в ближайший рабочий день."
                buttonText="Оставить заявку"
                commentPlaceholder="Кратко опишите задачу: аудит документов иностранцев, проверка патентов, штрафы МВД..."
                hiddenFields={[
                  { name: 'source_page', value: '/biznesu/migracionnoe-soprovozhdenie-biznesa/' },
                  { name: 'service', value: 'Миграционное сопровождение бизнеса' },
                  { name: 'direction', value: 'b2b-migration' }
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
