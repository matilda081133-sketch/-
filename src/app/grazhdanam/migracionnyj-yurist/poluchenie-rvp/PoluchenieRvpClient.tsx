'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MilitaryHero from '@/components/MilitaryHero';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import CasesBlock, { CaseData } from '@/components/CasesBlock';
import SpecialistBlock from '@/components/SpecialistBlock';
import PricingBlock, { PricingTier } from '@/components/PricingBlock';
import ProcessBlock from '@/components/ProcessBlock';

export default function PoluchenieRvpClient() {
  const cases: CaseData[] = [
  {
    "category": "РВП по браку / Без квоты",
    "title": "Оформление РВП по браку с первого обращения без возвратов",
    "problem": "Доверитель состоял в браке с гражданкой РФ в Липецке. Ранее трижды получал немотивированные возвраты заявления инспектором миграционного отдела.",
    "action": "Провели юридический аудит документов, перевели и нотариально заверили иностранные свидетельства, заполнили заявление строго по регламенту МВД и сопроводили подачу.",
    "result": "Пакет документов принят с первого раза без замечаний, штамп РВП в паспорт получен в установленный законом 4-месячный срок."
  },
  {
    "category": "Квота на РВП / Специалисты",
    "title": "Выделение квоты на РВП для востребованного инженера",
    "problem": "Иностранный специалист не имел оснований для подачи без квоты. Самостоятельные обращения в комиссию по распределению квот результата не давали.",
    "action": "Сформировали доказательный пакет документов: ходатайство от липецкого промышленного предприятия, подтверждение профильного стажа и сертификаты квалификации.",
    "result": "Комиссия УМВД выделила квоту с первого рассмотрения, оформлено РВП на 3 года."
  },
  {
    "category": "Выпускники ВУЗов / РФ",
    "title": "Оформление РВП для иностранного выпускника липецкого ВУЗа",
    "problem": "Выпускник государственного университета с отличием оформлял РВП по льготному основанию, однако миграционный отдел затягивал проверку диплома.",
    "action": "Направили официальный запрос в ректорат и УМВД, устранили бюрократические задержки и сопроводили процедуру подачи документов.",
    "result": "РВП успешно оформлено, доверитель официально трудоустроен по специальности."
  }
];
  const faqs = [
  {
    "q": "Что такое РВП и на какой срок оно выдаётся?",
    "a": "Разрешение на временное проживание (РВП) — это статус, позволяющий иностранному гражданину законно жить и работать в России в течение 3 лет. РВП не продлевается — следующим шагом оформляется ВНЖ."
  },
  {
    "q": "Кто имеет право получить РВП без учёта правительственной квоты?",
    "a": "Перечень оснований установлен пунктом 3 статьи 6 закона № 115-ФЗ. В частности, проверяются условия по браку продолжительностью не менее трёх лет либо наличию общего ребёнка, отдельные семейные категории, участие в Госпрограмме, подходящее российское профессиональное образование для граждан государств бывшего СССР, военная служба и другие прямо предусмотренные случаи. Наличие одного бытового признака — брака, диплома или родственника — ещё не подтверждает право на подачу без квоты."
  },
  {
    "q": "Сколько времени МВД рассматривает заявление на РВП?",
    "a": "Для граждан стран с безвизовым въездом срок рассмотрения составляет до 60 дней, для граждан визовых стран — до 4 месяцев с даты приёма заявления."
  },
  {
    "q": "Нужно ли сдавать экзамен по русскому языку для РВП?",
    "a": "Да, необходимо предоставить сертификат о владении русским языком, знании истории и основ законодательства РФ (либо документ об образовании, выданный в СССР до 1991 года или в РФ)."
  }
];
  const pricingTiers: PricingTier[] = [
  {
    "title": "Консультация и проверка оснований",
    "subtitle": "Определение маршрута (по квоте / без квоты)",
    "price": "от 3 000 ₽",
    "features": [
      {
        "name": "Анализ миграционной истории и документов",
        "value": "✓"
      },
      {
        "name": "Подбор оптимального основания по 115-ФЗ",
        "value": "✓"
      },
      {
        "name": "Чек-лист необходимых справок и переводов",
        "value": "✓"
      }
    ]
  },
  {
    "popular": true,
    "badgeText": "Популярно",
    "title": "Подготовка комплекта на РВП",
    "subtitle": "Формирование полного пакета документов под ключ",
    "price": "от 15 000 ₽",
    "features": [
      {
        "name": "Заполнение заявления по регламенту МВД",
        "value": "✓"
      },
      {
        "name": "Проверка нотариальных переводов и справок",
        "value": "✓"
      },
      {
        "name": "Устранение любых юридических рисков отказа",
        "value": "✓"
      }
    ]
  },
  {
    "title": "Комплексное сопровождение",
    "subtitle": "Сопровождение от подачи до получения штампа РВП",
    "price": "от 25 000 ₽",
    "features": [
      {
        "name": "Запись и сопровождение на подачу в МВД",
        "value": "✓"
      },
      {
        "name": "Оперативное реагирование на запросы инспекторов",
        "value": "✓"
      },
      {
        "name": "Контроль регламентного срока выдачи РВП",
        "value": "✓"
      }
    ]
  }
];

  return (
    <main>
      <Header />

      {/* ═══ БЛОК 1: HERO ═══ */}
      <MilitaryHero
        breadcrumbs={
          <>
            <Link href="/" style={{ color: 'var(--color-primary)' }}>Главная</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/grazhdanam/" style={{ color: 'var(--color-primary)' }}>Гражданам</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/grazhdanam/migracionnyj-yurist/" style={{ color: 'var(--color-primary)' }}>Миграционный юрист</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Помощь в получении РВП</span>
          </>
        }
        superTitle="Миграционный юрист в Липецке"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Помощь в получении
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              разрешения на временное
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              проживание (РВП)
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Определим законные основания для получения РВП (по квоте или без квоты), проверим документы, исключим риски отказа МВД и сопроводим процедуру до получения штампа в паспорт.
          </span>
        }
        primaryCtaText="Обсудить ситуацию"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_cta_rvp"
        primaryCtaSubtext={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Чтобы проверить основание и документы до подачи,
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              позвоните: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (910) 350-31-11</a>
            </span>
          </span>
        }
        trustItems={[
        {
                "text": "Оформление РВП без квоты (брак, рождение в РФ, ВУЗ, соотечественники)"
        },
        {
                "text": "Подготовка заявления по строгим регламентам МВД"
        },
        {
                "text": "Юридический аудит документов и защита от отказа"
        },
        {
                "text": "Куратор — адвокат Д. С. Конопкин"
        }
]}
        imageUrl="/images/konopkin.jpg"
        imageName="Дмитрий Сергеевич Конопкин"
        imageSubtitle="Адвокат, председатель Коллегии адвокатов «Де-Юре», куратор направления «Миграционное право»"
        imageObjectPosition="center 20%"
      />

      {/* ═══ БЛОК 2: ТИПОВЫЕ СИТУАЦИИ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>С какими ситуациями</span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>к нам обращаются доверители</span>
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
              <span style={{ display: 'block' }}>В миграционных делах процедуры часто взаимосвязаны.</span>
              <span style={{ display: 'block' }}>Ознакомьтесь с правовыми решениями для сопутствующих задач:</span>
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 380px))', gap: '20px' }}>

            <a href="/grazhdanam/migracionnyj-yurist/poluchenie-vida-na-zhitelstvo/" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
              <div className="card service-card hover-lift" style={{ height: '100%', padding: '24px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ margin: '0 0 10px 0', fontSize: '17px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', lineHeight: 1.35 }}>
                    Помощь в получении вида на жительство (ВНЖ)
                  </h4>
                  <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    Оформление бессрочного статуса постоянного проживания после РВП или напрямую.
                  </p>
                </div>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontSize: '13px', fontWeight: 600, marginTop: '16px', transition: 'color 0.35s ease' }}>
                  <span>Перейти к услуге</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
            </a>

            <a href="/grazhdanam/migracionnyj-yurist/otkaz-annulirovanie-rvp-vnzh/" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
              <div className="card service-card hover-lift" style={{ height: '100%', padding: '24px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ margin: '0 0 10px 0', fontSize: '17px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', lineHeight: 1.35 }}>
                    Обжалование отказа или аннулирования РВП и ВНЖ
                  </h4>
                  <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    Защита от неправомерных отказов в приёме документов и аннулирования статуса.
                  </p>
                </div>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontSize: '13px', fontWeight: 600, marginTop: '16px', transition: 'color 0.35s ease' }}>
                  <span>Перейти к услуге</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 8: ФИНАЛЬНАЯ ФОРМА ═══ */}
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
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Обсудите ситуацию</span>{' '}
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>с миграционным юристом</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Кратко опишите, что произошло, какое решение вынесено и какие документы у вас на руках. Обращение передадим Дмитрию Сергеевичу Конопкину. Он проверит материалы, оценит риски и свяжется с вами для согласования консультации.
              </p>
              
              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация адвоката</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Позвоните прямо сейчас: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (910) 350-31-11</a>
                </p>
              </div>

              <div style={{ background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Конфиденциальность:</strong>
                Сведения об обращении обрабатываются конфиденциально. Безопасный способ передачи документов согласуем после первичного контакта. Если потребуется адвокатская помощь, её объём и условия фиксируются отдельным соглашением с адвокатом.
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm
                title="Написать нам"
                subtitle={
                  <>
                    <span style={{ display: 'inline-block' }}>Оставьте имя и номер телефона. Адвокат свяжется с вами</span> <br />
                    <span style={{ display: 'inline-block' }}>в течение 15 минут в рабочее время.</span>
                  </>
                }
                subtext={
                  <>
                    <span style={{ display: 'inline-block' }}>Если вы оставите заявку вечером или в&nbsp;выходной день,</span> <br />
                    <span style={{ display: 'inline-block' }}>мы перезвоним в&nbsp;ближайший рабочий день.</span>
                  </>
                }
                buttonText="Отправить обращение"
                commentPlaceholder="Опишите вашу ситуацию: какое решение вынесено, есть ли семья в РФ, какой документ требуется оформить..."
                hiddenFields={[
                  { name: 'source_page', value: '/grazhdanam/migracionnyj-yurist/poluchenie-rvp/' },
                  { name: 'direction', value: 'poluchenie_rvp' },
                  { name: 'selected_specialist', value: 'konopkin-dmitriy-sergeevich' }
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
