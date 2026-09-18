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
        { name: 'Заполнение и подача уведомлений в МВД в срок 3 дней', value: 'Включено' },
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
            <span style={{ display: 'inline-block' }}>Миграционное сопровождение</span> <br />
            <span style={{ display: 'inline-block', color: 'var(--color-gold)' }}>бизнеса в Липецке</span>
          </span>
        }
        subtitle="Помогаем компаниям и предпринимателям законно оформлять иностранных работников, снижать миграционные риски и защищать интересы при проверках МВД и административных делах."
        trustItems={[
          'Проверим статус работников и имеющиеся документы до допуска к работе',
          'Подготовим или проверим договоры, уведомления МВД и кадровое оформление',
          'Сопроводим проверку МВД и выстроим защиту при претензиях и протоколах',
          'Не оформляем патенты и визы — защищаем работодателя в правовом поле'
        ]}
        primaryCtaText="Обсудить задачу"
        primaryCtaLink="#form"
        secondaryCtaText="Направления помощи"
        secondaryCtaLink="#directions"
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
              МИГРАЦИОННЫЕ ВОПРОСЫ РАБОТОДАТЕЛЯ
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
              Когда работодателю нужен миграционный юрист
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', maxWidth: '750px', margin: '0 auto' }}>
              Подключаемся до приёма иностранного работника, при проверке действующих документов или уже после появления претензий со стороны МВД.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px'
            }}
          >
            {migrationSituations.map((sit, idx) => (
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
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
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

      {/* ═══ БЛОК 3: НАПРАВЛЕНИЯ ПОМОЩИ (ДОЧЕРНИЕ УСЛУГИ) ═══ */}
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
              ПРОФИЛЬНЫЕ УСЛУГИ КЛАСТЕРА
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
              Направления миграционной защиты бизнеса
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', maxWidth: '750px', margin: '0 auto' }}>
              Выберите задачу по текущей стадии. Если ситуация затрагивает сразу несколько вопросов, кратко опишите обстоятельства — определим, с чего начать.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
              marginBottom: '32px'
            }}
          >
            {subServices.map((sub, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--color-bg-light)',
                  borderRadius: '12px',
                  padding: '32px',
                  border: '1px solid rgba(0,0,0,0.06)',
                  borderLeft: '4px solid var(--color-gold)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: '20px',
                      fontWeight: 700,
                      color: 'var(--color-text-main)',
                      marginBottom: '12px',
                      lineHeight: 1.3
                    }}
                  >
                    {sub.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '14.5px',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: '24px'
                    }}
                  >
                    {sub.desc}
                  </p>
                </div>
                <Link
                  href={sub.href}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '14px',
                    fontWeight: 700,
                    color: 'var(--color-deep-blue)',
                    textDecoration: 'none'
                  }}
                >
                  Подробнее об услуге →
                </Link>
              </div>
            ))}
          </div>

          <div
            style={{
              background: 'var(--color-bg-light)',
              borderRadius: '8px',
              padding: '24px',
              textAlign: 'center',
              border: '1px dashed rgba(0,0,0,0.15)'
            }}
          >
            <div style={{ fontWeight: 700, fontSize: '16px', color: 'var(--color-text-main)', marginBottom: '4px' }}>
              Не нашли свою ситуацию?
            </div>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', maxWidth: '700px', margin: '0 auto 16px auto' }}>
              Миграционный вопрос может одновременно затрагивать статус работника, трудовые документы, уведомления и действия МВД. Опишите задачу — мы определим подходящий формат работы.
            </p>
            <a
              href="#form"
              style={{
                background: 'var(--color-deep-blue)',
                color: '#ffffff',
                padding: '10px 20px',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-block'
              }}
            >
              Обсудить задачу с куратором
            </a>
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
        steps={processSteps}
      />

      {/* Плашка о дистанционном формате */}
      <section style={{ padding: '0 0 40px 0', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div
            style={{
              background: 'var(--color-bg-light)',
              padding: '20px 24px',
              borderRadius: '8px',
              borderLeft: '4px solid var(--color-gold)',
              fontSize: '14.5px',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.6
            }}
          >
            <strong style={{ color: 'var(--color-deep-blue)' }}>Дистанционный формат работы:</strong> Первичную консультацию, обмен документами, аудит и подготовку части материалов можно начать дистанционно. Необходимость личного участия юриста или адвоката зависит от стадии проверки или дела и выбранного формата защиты.
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 6: ЦЕНЫ ═══ */}
      <PricingBlock
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

      {/* ═══ БЛОК 9: СВЯЗАННЫЕ УСЛУГИ ═══ */}
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
            Связанные услуги для бизнеса
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '16px'
            }}
          >
            <Link
              href="/biznesu/ugolovno-pravovaya-zashchita-biznesa/ugolovno-pravovoj-audit-biznesa/"
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
              Уголовно-правовой аудит бизнеса →
            </Link>
            <Link
              href="/biznesu/arbitrazhnyj-yurist/"
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
              Арбитражные споры →
            </Link>
            <Link
              href="/biznesu/korporativnyj-yurist/"
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
              Корпоративный юрист →
            </Link>
            <Link
              href="/biznesu/trudovoj-yurist-dlya-biznesa/"
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
              Трудовые споры для бизнеса →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 10: ФОРМА И КОНТАКТЫ ═══ */}
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
                КОНФИДЕНЦИАЛЬНАЯ КОНСУЛЬТАЦИЯ
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
                Обсудите задачу с Дмитрием Сергеевичем Конопкиным
              </h2>
              <p
                style={{
                  fontSize: '15px',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '24px'
                }}
              >
                Кратко опишите задачу и оставьте контактные данные. Обращение будет передано Дмитрию Сергеевичу Конопкину для первичной правовой оценки ситуации и согласования формата дальнейшей работы.
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
                  Безопасность и конфиденциальность
                </div>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>
                  Не отправляйте через веб-форму паспорта, миграционные карты, патенты и персональные данные работников. Документы передаются только по согласованному защищённому каналу связи.
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
