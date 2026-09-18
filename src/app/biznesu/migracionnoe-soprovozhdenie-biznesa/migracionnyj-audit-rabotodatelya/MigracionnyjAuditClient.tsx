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

export default function MigracionnyjAuditClient() {
  const auditSituations = [
    {
      tag: 'Рост иностранного штата',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Штат вырос,</span> <br />
          <span style={{ display: 'inline-block' }}>а контроль остался ручным</span>
        </span>
      ),
      desc: 'Нужен единый реестр сотрудников, проверка сроков патентов и платежей НДФЛ, назначение ответственных и резервный контроль дат.',
      btnText: 'Систематизировать штат'
    },
    {
      tag: 'Смена сотрудников',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Сменился кадровик,</span> <br />
          <span style={{ display: 'inline-block' }}>бухгалтер или юрист</span>
        </span>
      ),
      desc: 'Проверим полноту передачи дел, наличие подтверждений отправки уведомлений в МВД и не закрытые процессуальные сроки.',
      btnText: 'Проверить архив'
    },
    {
      tag: 'Разрозненный архив',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Документы хранятся</span> <br />
          <span style={{ display: 'inline-block' }}>в разных отделах или папках</span>
        </span>
      ),
      desc: 'Соберём сквозное досье по каждому работнику, исключим пробелы в договорах, приказах и отрывных бланках регистрации.',
      btnText: 'Собрать досье'
    },
    {
      tag: 'Несколько объектов',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Работники заняты</span> <br />
          <span style={{ display: 'inline-block' }}>на разных объектах и стройках</span>
        </span>
      ),
      desc: 'Сопоставим территорию действия патентов, профессию и фактическое место выполнения работ установленным ограничениям.',
      btnText: 'Проверить объекты'
    },
    {
      tag: 'Различные статусы',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Сотрудники с патентами,</span> <br />
          <span style={{ display: 'inline-block' }}>граждане ЕАЭС, РВП и ВНЖ</span>
        </span>
      ),
      desc: 'Выстроим отдельный правовой алгоритм по каждой категории иностранцев, исключив применение единого ошибочного шаблона.',
      btnText: 'Разделить статусы'
    },
    {
      tag: 'Работники подрядчиков',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Подрядчик привлекает</span> <br />
          <span style={{ display: 'inline-block' }}>иностранцев на ваш объект</span>
        </span>
      ),
      desc: 'Оценим договорную модель, пропускной режим и разграничение ответственности заказчика и подрядчика по ст. 18.15 КоАП РФ.',
      btnText: 'Проверить подрядчиков'
    }
  ];

  const auditContours = [
    {
      title: '1. Аудит по каждому иностранному работнику',
      items: [
        'Личность, гражданство и применимый правовой статус (патент, ЕАЭС, РВП, ВНЖ)',
        'Действительность паспорта, миграционной карты и регистрационного учета',
        'Сроки действия патента, непрерывность уплаты авансовых платежей НДФЛ',
        'Соответствие указанной профессии и территории субъекта фактической работе',
        'Проверка сведений по официальным базам МВД и реестру контролируемых лиц'
      ]
    },
    {
      title: '2. Аудит документов работодателя',
      items: [
        'Трудовые договоры и договоры ГПХ на соответствие главе 50.1 ТК РФ',
        'Уведомления МВД о заключении и прекращении договоров и подтверждения подачи',
        'Документы миграционного учета при исполнении функции принимающей стороны',
        'Кадровые приказы о приеме, переводе, отстранении и прекращении договоров',
        'Локальные нормативные акты и приказы о назначении ответственных за миграционный учет'
      ]
    },
    {
      title: '3. Аудит фактических процессов и рисков',
      items: [
        'Порядок допуска сотрудников к выполнению работ на производственных объектах',
        'Система контроля своевременности оплаты патентов и продления регистраций',
        'Порядок фиксации переводов на новые объекты или смены трудовой функции',
        'Соблюдение законодательства о защите персональных данных иностранных граждан',
        'Разграничение ответственности при привлечении субподрядных организаций'
      ]
    }
  ];

  const deliverables = [
    {
      title: 'Матрица сотрудников',
      desc: 'Сводный реестр иностранного персонала с фиксацией правового статуса, контрольных дат действия документов и выявленных замечаний.'
    },
    {
      title: 'Карта рисков',
      desc: 'Структурированный перечень нарушений с классификацией по степени критичности: угроза штрафа по ст. 18.15 КоАП РФ, существенные и процедурные риски.'
    },
    {
      title: 'План законного устранения',
      desc: 'Пошаговый алгоритм действий для руководства и кадровой службы по безопасному исправлению выявленных ошибок без фальсификации задним числом.'
    },
    {
      title: 'Регламент и чек-листы',
      desc: 'Календарь обязательных платежей и уведомлений, шаблоны договоров и локальных инструкций для регулярной работы кадровой службы.'
    }
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Бриф и оценка объёма',
      desc: 'Уточняем количество иностранных работников, состав их статусов, число производственных площадок и срочность проведения проверки.'
    },
    {
      num: '02',
      title: 'Безопасная передача документов',
      desc: 'Определяем перечень необходимых копий и согласовываем защищённый канал обмена. Персональные данные защищены соглашением о конфиденциальности.'
    },
    {
      num: '03',
      title: 'Проверка документов и процессов',
      desc: 'Сверяем данные каждого работника по реестрам, изучаем кадровый архив, договоры, уведомления МВД и порядок фактического допуска.'
    },
    {
      num: '04',
      title: 'Карта рисков и план действий',
      desc: 'Классифицируем выявленные риски по ст. 18.15 КоАП РФ и разрабатываем только законные корректирующие меры с определением ответственных.'
    },
    {
      num: '05',
      title: 'Итоговый разбор и регламенты',
      desc: 'Передаём заключение руководству, проводим консультацию с кадровой службой и передаём комплект чек-листов для предотвращения нарушений.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Выборочный аудит',
      subtitle: 'Штат до 5 иностранных работников',
      popular: false,
      price: 'от 20 000 ₽',
      features: [
        { name: 'Проверка полного комплекта документов по сотрудникам', value: 'Включено' },
        { name: 'Анализ трудовых договоров и уведомлений МВД', value: 'Включено' },
        { name: 'Проверка чеков оплаты патентов и сроков', value: 'Включено' },
        { name: 'Письменное заключение с реестром замечаний', value: 'Включено' }
      ],
      buttonText: 'Заказать экспресс-аудит',
      buttonHref: '#form'
    },
    {
      title: 'Комплексный аудит',
      subtitle: 'Штат от 6 до 25 сотрудников',
      popular: true,
      badgeText: 'Рекомендуемый выбор',
      price: 'от 45 000 ₽',
      features: [
        { name: 'Сквозной аудит личных дел всех иностранных работников', value: 'Включено' },
        { name: 'Проверка архива уведомлений МВД и доказательств сдачи', value: 'Включено' },
        { name: 'Анализ миграционного учета и договоров с подрядчиками', value: 'Включено' },
        { name: 'Карта рисков по ст. 18.15 КоАП РФ и план исправлений', value: 'Включено' },
        { name: 'Разработка регламента контроля сроков для кадров', value: 'Включено' }
      ],
      buttonText: 'Заказать комплексный аудит',
      buttonHref: '#form'
    },
    {
      title: 'Аудит крупного предприятия',
      subtitle: 'От 25 работников и несколько объектов',
      popular: false,
      price: 'от 80 000 ₽',
      features: [
        { name: 'Аудит крупного штата с распределёнными объектами', value: 'Включено' },
        { name: 'Проверка многоуровневой цепочки подрядчиков и субподрядчиков', value: 'Включено' },
        { name: 'Выездная верификация фактического допуска на производство', value: 'По согласованию' },
        { name: 'Внедрение системы миграционного комплаенса', value: 'Включено' }
      ],
      buttonText: 'Заказать аудит предприятия',
      buttonHref: '#form'
    }
  ];

  const practiceCases: CaseData[] = [
    {
      category: 'Профилактика рисков',
      title: 'Выявили разрозненный архив уведомлений перед плановой проверкой',
      problem: 'Торговая сеть с 18 иностранными сотрудниками не имела подтверждений отправки части уведомлений в МВД из-за увольнения предыдущего кадрового инспектора.',
      action: 'Провели аудит каждого работника, восстановили доказательственную базу по квитанциям почты и журналам регистрации, обновили договоры и сформировали единый архив.',
      result: 'Компания устранила неопределённость, структурировала личные дела и успешно прошла документарную проверку подразделения миграции МВД без штрафов.'
    },
    {
      category: 'Фактическая модель',
      title: 'Предотвратили штрафы при перемещении работников между стройплощадками',
      problem: 'Строительное предприятие переводило работников с патентами на объект в соседнем районе области с изменением фактической специальности, не указанной в документах.',
      action: 'В ходе аудита выявили несовпадение должностей, разъяснили руководству последствия по ч. 1 ст. 18.15 КоАП РФ и оформили дополнительные соглашения с корректировкой трудовых функций.',
      result: 'Предотвращён риск привлечения к ответственности 12 работников с потенциальной суммой штрафов свыше 3 млн рублей.'
    },
    {
      category: 'Система контроля',
      title: 'Внедрили календарь контроля авансовых платежей по патентам',
      problem: 'На производственном объекте трое работников оплачивали патент с задержкой в 1-2 дня, что создавало риск автоматического аннулирования патентов и незаконного допуска к труду.',
      action: 'Разработали автоматизированный график напоминаний, перевели контроль оплаты чеков на бухгалтерию компании и установили жесткий регламент допуска к сменам.',
      result: 'Исключены просрочки платежей, отстранены до урегулирования сотрудники с рисками аннулирования документов, обеспечена юридическая безопасность предприятия.'
    }
  ];

  const faqs = [
    {
      q: 'Что входит в миграционный аудит работодателя?',
      a: 'Проверка действующих иностранных сотрудников, их паспортов, патентов, чеков и миграционных карт; аудит трудовых договоров, уведомлений МВД и подтверждений подачи; оценка миграционного учета и внутренних регламентов допуска к работе.'
    },
    {
      q: 'Чем аудит отличается от услуги оформления работника?',
      a: 'Оформление решает задачу по одному конкретному кандидату при приеме или увольнении. Аудит проверяет всю систему компании: весь иностранный штат, архив за предыдущие периоды и предотвращает системные штрафы.'
    },
    {
      q: 'Когда компании необходимо проводить миграционный аудит?',
      a: 'При росте иностранного штата, смене кадровика или бухгалтера, перед сделками купли-продажи бизнеса, перед проверками МВД, а также при наличии сомнений в актуальности чеков патентов и уведомлений.'
    },
    {
      q: 'Можно ли провести аудит дистанционно?',
      a: 'Да. Основная часть проверки проводится по электронным копиям документов через согласованный защищённый канал связи. Выезд на производственные площадки согласовывается при необходимости очной проверки фактического допуска.'
    },
    {
      q: 'Сколько времени занимает проведение миграционного аудита?',
      a: 'Срок зависит от численности иностранного штата и состояния архива: экспресс-аудит (до 5 человек) занимает 2-3 рабочих дня, комплексный аудит предприятия — от 5 до 10 рабочих дней.'
    },
    {
      q: 'Что делать, если в ходе аудита обнаружатся нарушения?',
      a: 'Юрист предложит законный план действий по минимизации последствий: корректировку кадровых документов, надлежащее оформление переводов, отстранение сотрудников с недействительными документами. Мы категорически не используем фальсификацию задним числом.'
    },
    {
      q: 'Гарантирует ли проведение аудита отсутствие штрафов?',
      a: 'Аудит позволяет выявить и устранить управляемые риски компании до проверки контролирующими органами. Если нарушение уже совершено и зафиксировано МВД, требуется процессуальная защита в рамках административного дела.'
    },
    {
      q: 'Проверяются ли иностранные работники субподрядчиков?',
      a: 'Да. Мы анализируем договоры подряда, акты допуска на объект и пропускной режим, чтобы защитить компанию-заказчика от перекладывания ответственности за нелегальных рабочих подрядчика.'
    },
    {
      q: 'Проверяются ли работники по реестру контролируемых лиц МВД?',
      a: 'Да. В рамках аудита мы проверяем статус сотрудников и выстраиваем внутренний регламент регулярной сверки со сведениями официальных баз миграционного учета МВД России.'
    },
    {
      q: 'Что получает работодатель по итогам аудита?',
      a: 'Руководитель получает структурированное юридическое заключение: сводную матрицу работников, карту рисков со ссылками на КоАП РФ, пошаговый план исправлений и комплект рабочих чек-листов для кадровика.'
    },
    {
      q: 'Что делать, если МВД уже пришло с проверкой во время аудита?',
      a: 'В такой ситуации аудит немедленно переводится в формат экстренного сопровождения миграционной проверки МВД. Наш специалист подключается к защите интересов компании на объекте.'
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
            <Link href="/biznesu/migracionnoe-soprovozhdenie-biznesa/">Миграционное сопровождение</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Миграционный аудит работодателя</span>
          </>
        }
        superTitle={
          <span style={{ whiteSpace: 'normal', display: 'inline-block', lineHeight: 1.4 }}>
            <span style={{ display: 'inline-block' }}>МИГРАЦИОННЫЙ КОМПЛАЕНС •</span> <br />
            <span style={{ display: 'inline-block' }}>Липецк и Липецкая область</span>
          </span>
        }
        title={
          <span style={{ display: 'block' }}>
            <span style={{ display: 'inline-block' }}>Миграционный аудит</span> <br />
            <span style={{ display: 'inline-block', color: 'var(--color-gold)' }}>работодателя в Липецке</span>
          </span>
        }
        subtitle="Проверим действующих иностранных сотрудников, кадровые документы и систему контроля сроков. Подготовим карту рисков и план устранения нарушений до визита МВД."
        trustItems={[
          'Сверим документы и фактические условия работы по каждому сотруднику',
          'Проверим договоры, уведомления МВД и подтверждения их сдачи',
          'Выявим критичные риски привлечения к ответственности по ст. 18.15 КоАП РФ',
          'Передадим план законных исправлений, ответственных и контрольные даты'
        ]}
        primaryCtaText="Оценить объём аудита"
        primaryCtaLink="#form"
        secondaryCtaText="Что проверяем"
        secondaryCtaLink="#audit-scope"
      />

      {/* Дисклеймер под Hero */}
      <div style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', padding: '14px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', fontSize: '13.5px', color: 'var(--color-text-secondary)', textAlign: 'center' }}>
          <strong style={{ color: 'var(--color-deep-blue)' }}>Внимание:</strong> Если проверка МВД уже началась или получен запрос документов, перейдите в раздел <Link href="/biznesu/migracionnoe-soprovozhdenie-biznesa/yurist-pri-migracionnoj-proverke-mvd/" style={{ color: 'var(--color-deep-blue)', textDecoration: 'underline' }}>сопровождения проверки МВД</Link> для экстренной защиты.
        </div>
      </div>

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
              КОГДА НЕОБХОДИМ АУДИТ
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
              Ситуации, когда системная проверка уже необходима
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', maxWidth: '750px', margin: '0 auto' }}>
              Штрафы по миграционным статьям достигают 800 000 ₽ за одного сотрудника. Аудит позволяет найти и исправить слабые места до выездной проверки.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px'
            }}
          >
            {auditSituations.map((sit, idx) => (
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
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z" />
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

      {/* ═══ БЛОК 3: КОНТУРЫ АУДИТА ═══ */}
      <section id="audit-scope" style={{ padding: '60px 0', background: '#ffffff' }}>
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
              КОМПЛЕКСНЫЙ АНАЛИЗ
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
              Три контура миграционной проверки предприятия
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', maxWidth: '750px', margin: '0 auto' }}>
              Проверяем не только документы сотрудников, но и внутренний процесс кадрового контроля и регламенты взаимодействия подразделений.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px'
            }}
          >
            {auditContours.map((contour, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--color-bg-light)',
                  borderRadius: '12px',
                  padding: '32px',
                  border: '1px solid rgba(0,0,0,0.06)',
                  borderTop: '4px solid var(--color-gold)'
                }}
              >
                <h3
                  style={{
                    fontSize: '19px',
                    fontWeight: 700,
                    color: 'var(--color-text-main)',
                    marginBottom: '18px'
                  }}
                >
                  {contour.title}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {contour.items.map((item, itemIdx) => (
                    <li key={itemIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', marginTop: '7px' }}></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК: РЕЗУЛЬТАТ АУДИТА ═══ */}
      <section style={{ padding: '60px 0', background: 'var(--color-bg-light)' }}>
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
              РЕЗУЛЬТАТ ДЛЯ РУКОВОДИТЕЛЯ
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
              Что получает компания по итогам аудита
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', maxWidth: '750px', margin: '0 auto' }}>
              Результат аудита — не абстрактный совет, а четкий рабочий комплект документов с конкретными инструкциями.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px'
            }}
          >
            {deliverables.map((del, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  borderRadius: '10px',
                  padding: '24px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
                  border: '1px solid rgba(0,0,0,0.06)'
                }}
              >
                <div style={{ fontWeight: 700, fontSize: '17px', color: 'var(--color-deep-blue)', marginBottom: '8px' }}>
                  {del.title}
                </div>
                <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                  {del.desc}
                </div>
              </div>
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
            Дмитрий Сергеевич организует аудит миграционных рисков бизнеса: определяет глубину проверки, контролирует юридический анализ документов и координирует подготовку плана защиты.
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
            «Следовательский опыт в СК РФ позволяет смотреть на кадровый архив компании глазами проверяющего инспектора: мы видим, какие несоответствия в договорах и чеках сразу приведут к составлению протокола, и устраняем эти риски заблаговременно».
          </div>,
          <ul key="3" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>Реестровый номер адвоката: 48/812 в реестре адвокатов Липецкой области</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>Правовой аудит соответствия кадрового делопроизводства миграционному законодательству РФ</span>
            </li>
          </ul>,
          <a key="4" href="/specialisty/konopkin-dmitriy-sergeevich/" style={{ display: 'inline-block', marginTop: '16px', fontSize: '14px', color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
            Подробнее об опыте куратора →
          </a>
        ]}
        buttonText="Задать вопрос адвокату"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 5: ЭТАПЫ РАБОТЫ ═══ */}
      <ProcessBlock
        title="Пять этапов миграционного аудита"
        steps={processSteps}
      />

      {/* ═══ БЛОК 6: ЦЕНЫ ═══ */}
      <PricingBlock
        title="Стоимость миграционного аудита"
        subtitle="Стоимость определяется после согласования объема: количества работников, проверяемых объектов и состояния кадрового архива."
        tiers={pricingTiers}
      />

      {/* ═══ БЛОК 7: КЕЙСЫ ═══ */}
      <CasesBlock
        title="Примеры из практики аудита"
        subtitle="Как аудит помог предотвратить крупные штрафы предприятиям Липецкой области"
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
            Смежные услуги миграционного направления
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '16px'
            }}
          >
            <Link
              href="/biznesu/migracionnoe-soprovozhdenie-biznesa/yuridicheskoe-oformlenie-inostrannyh-rabotnikov/"
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
              Оформление работников под ключ →
            </Link>
            <Link
              href="/biznesu/migracionnoe-soprovozhdenie-biznesa/yurist-pri-migracionnoj-proverke-mvd/"
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
              Юрист при проверке МВД →
            </Link>
            <Link
              href="/biznesu/migracionnoe-soprovozhdenie-biznesa/zashchita-rabotodatelya-po-state-18-15-koap-rf/"
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
              Защита по ст. 18.15 КоАП РФ →
            </Link>
            <Link
              href="/biznesu/migracionnoe-soprovozhdenie-biznesa/"
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
              Хаб: Миграционное сопровождение →
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
                ЗАЯВКА НА АУДИТ
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
                Оценим объём и стоимость миграционного аудита
              </h2>
              <p
                style={{
                  fontSize: '15px',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '24px'
                }}
              >
                Укажите примерное количество иностранных работников и текущую стадию ситуации. Мы уточним объём проверки и предложим оптимальный формат работы.
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
                  Конфиденциальность
                </div>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>
                  Не прикрепляйте персональные данные и копии паспортов сотрудников в веб-форму. Обмен материалами осуществляется исключительно по защищенному каналу связи.
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
