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

export default function YuridicheskoeOformlenieClient() {
  const situations = [
    {
      tag: 'Приём иностранца',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Планируете принять</span> <br />
          <span style={{ display: 'inline-block' }}>иностранного гражданина</span>
        </span>
      ),
      desc: 'Нужно определить его правовой статус, перечень документов и допустимость выполнения работы до фактического допуска на объект.',
      btnText: 'Проверить кандидата'
    },
    {
      tag: 'Патент работника',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Кандидат работает</span> <br />
          <span style={{ display: 'inline-block' }}>на основании патента</span>
        </span>
      ),
      desc: 'Проверим действующий патент, субъект РФ, указанную профессию и квитанции об оплате авансовых платежей НДФЛ.',
      btnText: 'Проверить патент'
    },
    {
      tag: 'Граждане ЕАЭС',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Приём граждан</span> <br />
          <span style={{ display: 'inline-block' }}>Беларуси, Армении, Казахстана, Киргизии</span>
        </span>
      ),
      desc: 'Патент не требуется, но сохраняются обязательные требования к трудовому договору и 3-дневному уведомлению территориального органа МВД.',
      btnText: 'Оформить сотрудника ЕАЭС'
    },
    {
      tag: 'РВП или ВНЖ',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>У сотрудника имеется</span> <br />
          <span style={{ display: 'inline-block' }}>РВП или вид на жительство</span>
        </span>
      ),
      desc: 'Сопоставим статус, срок действия разрешительного документа, территориальные ограничения по РВП и условия трудового договора.',
      btnText: 'Оформить с РВП/ВНЖ'
    },
    {
      tag: 'Договор ГПХ',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Привлечение по договору</span> <br />
          <span style={{ display: 'inline-block' }}>гражданско-правового характера (ГПХ)</span>
        </span>
      ),
      desc: 'Миграционные обязанности заказчика по уведомлению МВД и проверке права на труд не отменяются гражданско-правовой формой договора.',
      btnText: 'Проверить договор ГПХ'
    },
    {
      tag: 'Увольнение',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Прекращение договора</span> <br />
          <span style={{ display: 'inline-block' }}>с иностранным работником</span>
        </span>
      ),
      desc: 'Подготовим кадровые документы, проверим основание расторжения и направим обязательное уведомление в МВД строго в срок до 3 рабочих дней.',
      btnText: 'Оформить увольнение'
    }
  ];

  const checkPoints = [
    {
      num: '01',
      title: 'Личность и миграционный статус',
      desc: 'Паспорт и нотариальный перевод при необходимости; основание и срок законного пребывания или проживания в РФ; проверка по реестрам МВД.'
    },
    {
      num: '02',
      title: 'Право на трудовую деятельность',
      desc: 'Нужен ли патент либо действует льготный режим (ЕАЭС, РВП, ВНЖ); соответствие территории действия и указанной специальности фактической работе.'
    },
    {
      num: '03',
      title: 'Действительность разрешений и чеков',
      desc: 'Сроки действия патента, реквизиты, непрерывность ежемесячных авансовых платежей по НДФЛ, отсутствие оснований для аннулирования.'
    },
    {
      num: '04',
      title: 'Условия и место выполнения работы',
      desc: 'Работодатель/заказчик, точный адрес объекта в Липецкой области, должность, трудовая функция, дата фактического начала работ.'
    },
    {
      num: '05',
      title: 'Трудовой или гражданско-правовой договор',
      desc: 'Наличие всех обязательных миграционных реквизитов, сведений о полисе ДМС/ОМС, документов о статусе и условий оплаты труда.'
    },
    {
      num: '06',
      title: 'Уведомление подразделения МВД',
      desc: 'Заполнение актуальной формы уведомления, определение надлежащего территориального органа МВД, способ подачи и фиксация подтверждения.'
    }
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Получаем исходные данные',
      desc: 'Уточняем гражданство кандидата, его статус, предполагаемое место и характер работы, планируемую дату заключения договора.'
    },
    {
      num: '02',
      title: 'Проверяем документы',
      desc: 'Сопоставляем представленные документы иностранного гражданина с требованиями законодательства и условиями будущего договора.'
    },
    {
      num: '03',
      title: 'Формируем правовой маршрут',
      desc: 'Определяем применимый порядок оформления, список недостающих сведений, контрольные сроки и исключаем риски привлечения к ст. 18.15 КоАП РФ.'
    },
    {
      num: '04',
      title: 'Согласуем состав и стоимость',
      desc: 'Фиксируем перечень кадровых документов, порядок взаимодействия с бухгалтерией и кадровой службой, сроки и цену в договоре.'
    },
    {
      num: '05',
      title: 'Готовим документы и уведомления',
      desc: 'Разрабатываем или проверяем трудовой договор / ГПД, кадровые приказы и формируем официальное уведомление для МВД по актуальной форме.'
    },
    {
      num: '06',
      title: 'Контролируем сдачу и сроки',
      desc: 'Контролируем направление уведомления в 3-дневный срок, получаем подтверждение подачи и передаём компании календарь контрольных дат.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Проверка документов работника',
      subtitle: 'Аудит перед допуском к работе',
      popular: false,
      price: 'от 5 000 ₽',
      features: [
        { name: 'Анализ миграционного статуса и паспорта', value: 'Включено' },
        { name: 'Проверка патента и квитанций об оплате НДФЛ', value: 'Включено' },
        { name: 'Оценка соответствия должности и территории Липецка', value: 'Включено' },
        { name: 'Письменное заключение о допустимости приема', value: 'Включено' }
      ],
      buttonText: 'Проверить кандидата',
      buttonHref: '#form'
    },
    {
      title: 'Оформление приёма или увольнения',
      subtitle: 'Полное кадрово-миграционное сопровождение',
      popular: true,
      badgeText: 'Частый выбор',
      price: 'от 12 000 ₽',
      features: [
        { name: 'Правовой аудит полного пакета документов иностранца', value: 'Включено' },
        { name: 'Подготовка трудового договора / ГПД с миграционными пунктами', value: 'Включено' },
        { name: 'Заполнение формы уведомления МВД по актуальному регламенту', value: 'Включено' },
        { name: 'Контроль подачи уведомления в течение 3 рабочих дней', value: 'Включено' },
        { name: 'Памятка кадровой службе по контрольным датам и платежам', value: 'Включено' }
      ],
      buttonText: 'Оформить сотрудника',
      buttonHref: '#form'
    },
    {
      title: 'Оформление группы сотрудников',
      subtitle: 'От 3 работников одновременно',
      popular: false,
      price: 'от 25 000 ₽',
      features: [
        { name: 'Сквозная проверка документов всей группы кандидатов', value: 'Включено' },
        { name: 'Комплект договоров и кадровых актов под ключ', value: 'Включено' },
        { name: 'Пакетная подготовка уведомлений в территориальный орган МВД', value: 'Включено' },
        { name: 'Формирование единого реестра контроля сроков и платежей', value: 'Включено' }
      ],
      buttonText: 'Оформить группу',
      buttonHref: '#form'
    }
  ];

  const practiceCases: CaseData[] = [
    {
      category: 'Приём на работу',
      title: 'Оформили приём гражданина ЕАЭС без лишних документов',
      problem: 'Кадровая служба производственного предприятия готовила приём специалиста из Казахстана по шаблону для патентных работников и сомневалась, какие разрешительные документы необходимы.',
      action: 'Определили применимый статус работника в рамках Договора о ЕАЭС, проверили паспорт и регистрацию, скорректировали проект трудового договора и подготовили форму уведомления МВД.',
      result: 'Работник был допущен к работе строго в соответствии с законом, а компания сохранила документальное подтверждение своевременного уведомления МВД в 3-дневный срок.'
    },
    {
      category: 'Работник с патентом',
      title: 'Обнаружили несоответствие патента до фактического допуска к работе',
      problem: 'Строительная компания планировала вывести сотрудника на объект в Липецке, но в имеющемся патенте была указана смежная специальность, не соответствовавшая функционалу.',
      action: 'Провели проверку патента, квитанций и условий планируемого договора. Разъяснили руководству риски по ч. 1 ст. 18.15 КоАП РФ и скорректировали трудовую функцию до допуска на стройплощадку.',
      result: 'Работодатель избежал претензий контролирующих органов и штрафа до 800 000 ₽ благодаря своевременной правовой корректировке.'
    },
    {
      category: 'Увольнение',
      title: 'Подготовили прекращение договора и уведомили МВД в установленный срок',
      problem: 'Компания расторгала договор с иностранным работником по соглашению сторон и хотела исключить расхождения между датой издания приказа и сведениями для миграционного органа.',
      action: 'Проверили основание и дату расторжения договора, подготовили кадровый приказ, заполнили актуальную форму уведомления МВД и организовали отправку с описью вложения.',
      result: 'Трудовые отношения прекращены корректно, подтверждение отправки уведомления получено на второй рабочий день, риски привлечения к ответственности исключены.'
    }
  ];

  const faqs = [
    {
      q: 'Можно ли принять иностранца по обычному трудовому договору?',
      a: 'Трудовой договор с иностранным гражданином заключается с учётом общих норм ТК РФ и специальных положений главы 50.1 ТК РФ. В договоре обязательно указываются реквизиты патента, РВП, ВНЖ либо полиса ДМС (если применимо).'
    },
    {
      q: 'В какой срок нужно уведомить МВД о заключении или прекращении договора?',
      a: 'Работодатель или заказчик работ обязан уведомить территориальный орган МВД в субъекте РФ, где трудится иностранец, в срок, не превышающий 3 рабочих дней с даты заключения или прекращения соответствующего договора (п. 8 ст. 13 Федерального закона № 115-ФЗ).'
    },
    {
      q: 'Нужно ли подавать уведомление в МВД при приёме гражданина страны ЕАЭС?',
      a: 'Да. Освобождение граждан государств ЕАЭС (Беларусь, Казахстан, Армения, Киргизия) от обязанности получать патент не освобождает работодателя от обязанности уведомить орган МВД о заключении или расторжении трудового договора в 3-дневный срок.'
    },
    {
      q: 'Вы помогаете получить или переоформить патент?',
      a: 'Нет. Мы не занимаемся оформлением, получением или переоформлением патентов для физических лиц. В рамках услуг работодателю мы проверяем подлинность, сроки действия, чеки и соответствие уже имеющегося у работника патента.'
    },
    {
      q: 'Оформляете ли вы работников из стран с визовым режимом?',
      a: 'Нет. Мы не сопровождаем оформление квот, приглашений на въезд, рабочих виз, разрешений на привлечение и использование иностранных работников и разрешений на работу для визовых стран.'
    },
    {
      q: 'Можно ли сначала допустить иностранца к работе, а оформить документы позже?',
      a: 'Категорически нет. Фактический допуск иностранного гражданина к выполнению работ без надлежащих документов образует состав административного правонарушения по ч. 1 ст. 18.15 КоАП РФ со штрафом для юрлиц от 250 000 до 800 000 ₽ либо приостановлением деятельности до 90 суток.'
    },
    {
      q: 'Защищает ли договор ГПХ от проверок миграционной службы?',
      a: 'Нет. Обязанность проверки права на работу и 3-дневного уведомления МВД распространяется как на трудовые договоры, так и на договоры ГПХ. Кроме того, притворное прикрытие трудовых отношений договором ГПХ создаёт дополнительные риски со стороны трудовой инспекции.'
    },
    {
      q: 'Что делать, если 3-дневный срок уведомления МВД уже пропущен?',
      a: 'Не направляйте документы хаотично задним числом. Необходимо срочно связаться с юристом для правового анализа ситуации, установления точной даты заключения договора и формирования защитной позиции до инициации проверки МВД.'
    },
    {
      q: 'Можно ли провести оформление документов дистанционно?',
      a: 'Да. Правовой анализ документов работника, составление трудового договора и заполнение форм уведомлений можно провести дистанционно по электронным копиям. Оригиналы подписываются сторонами на месте.'
    },
    {
      q: 'Как проверить, оплачен ли патент иностранного сотрудника?',
      a: 'Необходимо ежемесячно проверять квитанции об уплате налога на доходы физических лиц в виде фиксированного авансового платежа. Платёж должен быть внесён до дня истечения оплаченного периода, с корректными реквизитами и указанием ИНН работника.'
    },
    {
      q: 'Какие документы нужны для первичной проверки кандидата?',
      a: 'Паспорт кандидата, миграционная карта (при наличии), отрывной бланк уведомления о прибытии (миграционный учёт), патент с чеками оплаты (или РВП / ВНЖ), а также предполагаемая должность и адрес объекта работы в Липецкой области.'
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
            <span style={{ color: 'var(--color-text-main)' }}>Оформление иностранных работников</span>
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
              Юридическое оформление
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              иностранных работников в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '760px', textWrap: 'balance' }}>
            Проверим, вправе ли иностранный гражданин работать у вашей компании, подготовим кадровые документы и уведомим МВД в строгий 3-дневный срок.
          </span>
        }
        primaryCtaText="Проверить документы работника"
        primaryCtaLink="#form"
        primaryCtaSubtext={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Конфиденциальный звонок куратору направления:
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (910) 350-31-11</a>
            </span>
          </span>
        }
        secondaryCtaText="Что проверяем"
        secondaryCtaLink="#included"
        imageUrl="/images/konopkin.jpg"
        imageName="Дмитрий Сергеевич Конопкин"
        imageSubtitle="Адвокат, председатель Коллегии адвокатов «Де-Юре», куратор направления «Миграционное сопровождение бизнеса»"
        imageObjectPosition="center 15%"
        trustItems={[
          {
            text: (
              <span>
                <strong>Определим точные требования</strong> по правовому статусу конкретного работника
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Проверим паспорт</strong>, миграционный статус, патент и чеки авансовых платежей
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Подготовим или проверим договор</strong> и официальное уведомление территориального органа МВД
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Зафиксируем доказательства</strong> подачи документов и передадим график контрольных дат
              </span>
            )
          }
        ]}
      />

      {/* Дисклеймер под Hero */}
      <div style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', padding: '14px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', fontSize: '13.5px', color: 'var(--color-text-secondary)', textAlign: 'center' }}>
          <strong style={{ color: 'var(--color-deep-blue)' }}>Важно:</strong> Мы не оформляем патенты, квоты, приглашения, рабочие визы и разрешения на работу. Проверяем имеющиеся документы и обеспечиваем законное оформление работодателем.
        </div>
      </div>

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
              СИТУАЦИИ ОФОРМЛЕНИЯ
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
              <span style={{ display: 'inline-block' }}>Когда работодателю важно</span> <br />
              <span style={{ display: 'inline-block' }}>проверить оформление сотрудника</span>
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
              Требования зависят от гражданства, правового статуса, региона и вида деятельности. Ошибка в сроке или форме влечёт штраф до 800 000 ₽ за каждого человека.
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
              padding: '40px 48px',
              borderTop: '3px solid var(--color-gold)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '32px',
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
            `}} />
            <div style={{ flex: '1 1 500px', minWidth: '280px' }}>
              <h3 style={{ margin: '0 0 12px 0', fontSize: '26px', fontFamily: 'var(--font-serif)', color: '#FFFFFF', lineHeight: 1.3 }}>
                Не нашли свою ситуацию?
              </h3>
              <p style={{ margin: 0, fontSize: '15px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6 }}>
                <span style={{ display: 'inline-block' }}>Опишите вашу миграционную задачу. Изучим имеющиеся документы иностранца</span> <br />
                <span style={{ display: 'inline-block' }}>и определим безопасный порядок оформления.</span>
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
                Описать ситуацию
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: ЧТО ПРОВЕРЯЕМ ДО ДОПУСКА К РАБОТЕ (#INCLUDED) ═══ */}
      <section className="section bg-white" id="included" style={{ padding: '80px 0' }}>
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
              ПРАВОВОЙ КОНТРОЛЬ
            </div>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.25, textAlign: 'left' }}>
              <span style={{ display: 'inline-block' }}>Что проверяет юрист до</span> <br />
              <span style={{ display: 'inline-block' }}>допуска иностранца к работе</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Сначала подтверждаем законное право конкретного гражданина на выполнение конкретной работы у вашего юрлица или ИП.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', position: 'relative' }}>
            {checkPoints.map((item, idx) => (
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
                  {item.num}
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

      {/* ═══ БЛОК 4: КУРАТОР (SPECIALISTBLOCK) ═══ */}
      <SpecialistBlock
        title="Куратор направления — Дмитрий Сергеевич Конопкин"
        name="Дмитрий Сергеевич Конопкин"
        position={<>Адвокат, председатель Коллегии адвокатов «Де-Юре»,<br />куратор направления «Миграционное сопровождение бизнеса»</>}
        imageUrl="/images/konopkin.jpg"
        imagePosition="center 15%"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Дмитрий Сергеевич организует первичную правовую оценку обращения работодателя, определение состава работы и координацию команды юристов.
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
            «Шесть лет работы в Следственном комитете РФ до старшего следователя по особо важным делам сформировали понимание доказательственной базы и процессуальных рисков. При оформлении иностранных сотрудников критически важно не допустить формальных ошибок в договорах и уведомлениях МВД».
          </div>,
          <ul key="3" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>Реестровый номер адвоката: 48/812 в реестре адвокатов Липецкой области</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>Контроль соблюдения миграционного законодательства и сроков подачи обязательных уведомлений</span>
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
        title="Порядок юридического оформления иностранного работника"
        steps={processSteps}
      />

      {/* ═══ БЛОК 6: ЦЕНЫ ═══ */}
      <PricingBlock
        title="Стоимость юридического оформления"
        subtitle="Цена фиксируется в договоре и зависит от статуса работника, комплектности документов и необходимости подготовки кадровых актов."
        tiers={pricingTiers}
      />

      {/* ═══ БЛОК 7: КЕЙСЫ ═══ */}
      <CasesBlock
        title="Примеры из практики оформления"
        subtitle="Реальные примеры снижения миграционных рисков работодателей в Липецке"
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
            Если задача вышла за рамки стандартного оформления
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '16px'
            }}
          >
            <Link
              href="/biznesu/migracionnoe-soprovozhdenie-biznesa/migracionnyj-audit-rabotodatelya/"
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
              Миграционный аудит работодателя →
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
                ПРОВЕРКА ДО ДОПУСКА К РАБОТЕ
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
                Проверим документы до оформления иностранного работника
              </h2>
              <p
                style={{
                  fontSize: '15px',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '24px'
                }}
              >
                Укажите статус сотрудника, планируемое действие и дату. Мы уточним, какие документы нужны и какой формат юридической помощи подойдёт вашей компании.
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
                  Безопасность персональных данных
                </div>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>
                  Не загружайте сканы паспортов и миграционных карт через открытую веб-форму. Документы передаются только по согласованному защищённому каналу связи после первичного контакта.
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
