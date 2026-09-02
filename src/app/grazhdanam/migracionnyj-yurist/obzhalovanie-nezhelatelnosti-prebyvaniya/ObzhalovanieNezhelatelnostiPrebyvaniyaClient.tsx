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

export default function ObzhalovanieNezhelatelnostiPrebyvaniyaClient() {
  const cases: CaseData[] = [
  {
    "category": "Минюст / Судебная отмена",
    "title": "Отмена бессрочного решения Минюста РФ о нежелательности пребывания",
    "problem": "После отбытия уголовного наказания Минюст вынес распоряжение о пожизненной нежелательности пребывания иностранного гражданина в РФ.",
    "action": "Подали административный иск в суд, предоставили доказательства погашения судимости, наличия супруги и детей в РФ, положительные характеристики.",
    "result": "Суд признал решение Минюста незаконным и отменил бессрочную нежелательность пребывания."
  },
  {
    "category": "Роспотребнадзор / Здоровье",
    "title": "Отмена решения Роспотребнадзора после прохождения лечения",
    "problem": "Роспотребнадзор признал пребывание нежелательным из-за выявленного инфекционного заболевания. Доверитель прошел полное излечение в аккредитованной клинике.",
    "action": "Истребовали решение, собрали полный комплект медицинских заключений об отсутствии заболевания и обратились в ведомство с мотивированным заявлением.",
    "result": "Роспотребнадзор отменил распоряжение о нежелательности пребывания, статус легального нахождения восстановлен."
  },
  {
    "category": "МВД / Семейные основания",
    "title": "Отмена нежелательности пребывания по решению МВД в суде",
    "problem": "МВД вынесло решение о нежелательности пребывания из-за повторных административных правонарушений. В Липецке проживают престарелые родители — инвалиды, нуждающиеся в постоянном уходе.",
    "action": "Сформировали административный иск по нормам КАС РФ, доказали факт осуществления ухода и нарушение права на уважение семейной жизни (ст. 38 Конституции РФ, позиция Конституционного Суда РФ).",
    "result": "Суд отменил распоряжение МВД, обязал ведомство исключить сведения из баз пограничного контроля."
  }
];
  const faqs = [
  {
    "q": "Что означает решение о нежелательности пребывания?",
    "a": "Это решение уполномоченного федерального органа (Минюст, Роспотребнадзор, МВД, ФСБ) по ст. 25.10 закона № 114-ФЗ. Оно обязывает иностранца выехать из РФ, влечёт депортацию при невыезде и пожизненный или длительный запрет на въезд."
  },
  {
    "q": "Какой орган может признать пребывание нежелательным?",
    "a": "Распоряжение о нежелательности пребывания вправе выносить Минюст РФ (в отношении судимых лиц), Роспотребнадзор (по медицинским показаниям), МВД РФ и ФСБ России (по вопросам безопасности и правопорядка)."
  },
  {
    "q": "Можно ли отменить нежелательность пребывания после погашения судимости?",
    "a": "Да. Сам факт отбытия наказания и погашения судимости в совокупности с семейными связями, отсутствием рецидива и положительными характеристиками служит основанием для отмены бессрочного решения в судебном порядке."
  },
  {
    "q": "Как отменить решение Роспотребнадзора по медицинским основаниям?",
    "a": "После прохождения лечения и получения официального медицинского заключения аккредитованного учреждения об излечении или стойкой ремиссии подаётся заявление в Роспотребнадзор либо административный иск в суд."
  }
];
  const pricingTiers: PricingTier[] = [
  {
    "title": "Запрос и правовая экспертиза",
    "subtitle": "Истребование решения ведомства и проверка оснований",
    "price": "от 8 000 ₽",
    "features": [
      {
        "name": "Адвокатский запрос в Минюст / Роспотребнадзор",
        "value": "✓"
      },
      {
        "name": "Правовой анализ соразмерности решения",
        "value": "✓"
      },
      {
        "name": "План судебного обжалования",
        "value": "✓"
      }
    ]
  },
  {
    "popular": true,
    "badgeText": "Популярно",
    "title": "Судебный процесс по ст. 25.10",
    "subtitle": "Подготовка иска и ведение дела в суде",
    "price": "от 40 000 ₽",
    "features": [
      {
        "name": "Административное исковое заявление по КАС РФ",
        "value": "✓"
      },
      {
        "name": "Сбор доказательств социализации и семьи",
        "value": "✓"
      },
      {
        "name": "Участие адвоката во всех инстанциях",
        "value": "✓"
      },
      {
        "name": "Исключение сведений из базы Погранслужбы",
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
            <span style={{ color: 'var(--color-text-main)' }}>Обжалование нежелательности пребывания</span>
          </>
        }
        superTitle="Миграционный юрист в Липецке"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Обжалование
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              нежелательности пребывания
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              в РФ (ст. 25.10)
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Поможем оспорить в суде бессрочные и долгосрочные решения Минюста, МВД, ФСБ и Роспотребнадзора о нежелательности пребывания по судимости, медицинским или режимным основаниям.
          </span>
        }
        primaryCtaText="Обсудить ситуацию"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_cta_nezhelatelnost"
        primaryCtaSubtext={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Если требуется срочная помощь юриста,
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              позвоните: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (910) 350-31-11</a>
            </span>
          </span>
        }
        trustItems={[
        {
                "text": "Оспаривание решений Минюста, МВД, ФСБ, Роспотребнадзора"
        },
        {
                "text": "Защита при наличии погашенной судимости или семьи в РФ"
        },
        {
                "text": "Исключение бессрочного пожизненного запрета на въезд"
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

            <a href="/grazhdanam/migracionnyj-yurist/otmena-zapreta-na-vezd-v-rossiyu/" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
              <div className="card service-card hover-lift" style={{ height: '100%', padding: '24px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ margin: '0 0 10px 0', fontSize: '17px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', lineHeight: 1.35 }}>
                    Отмена запрета на въезд в Россию
                  </h4>
                  <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    Устранение препятствий для въезда в РФ в ведомственном и судебном порядке.
                  </p>
                </div>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontSize: '13px', fontWeight: 600, marginTop: '16px', transition: 'color 0.35s ease' }}>
                  <span>Перейти к услуге</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
            </a>

            <a href="/grazhdanam/migracionnyj-yurist/obzhalovanie-resheniya-o-deportacii/" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
              <div className="card service-card hover-lift" style={{ height: '100%', padding: '24px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ margin: '0 0 10px 0', fontSize: '17px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', lineHeight: 1.35 }}>
                    Обжалование решения о депортации
                  </h4>
                  <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    Судебная защита от исполнения решений о депортации за пределы России.
                  </p>
                </div>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontSize: '13px', fontWeight: 600, marginTop: '16px', transition: 'color 0.35s ease' }}>
                  <span>Перейти к услуге</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
            </a>

            <a href="/grazhdanam/migracionnyj-yurist/isklyuchenie-iz-reestra-kontroliruemyh-lic/" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
              <div className="card service-card hover-lift" style={{ height: '100%', padding: '24px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ margin: '0 0 10px 0', fontSize: '17px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', lineHeight: 1.35 }}>
                    Исключение из реестра контролируемых лиц
                  </h4>
                  <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    Снятие режима высылки и разблокировка операций по счетам.
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
                  { name: 'source_page', value: '/grazhdanam/migracionnyj-yurist/obzhalovanie-nezhelatelnosti-prebyvaniya/' },
                  { name: 'direction', value: 'obzhalovanie_nezhelatelnosti' },
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
