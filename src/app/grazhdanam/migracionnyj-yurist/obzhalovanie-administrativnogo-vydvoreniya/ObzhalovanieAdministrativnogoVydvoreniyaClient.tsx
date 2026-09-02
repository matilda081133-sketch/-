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

export default function ObzhalovanieAdministrativnogoVydvoreniyaClient() {
  const cases: CaseData[] = [
  {
    "category": "Суд второй инстанции / 10 дней",
    "title": "Отмена административного выдворения в Липецком областном суде",
    "problem": "Суд первой инстанции назначил штраф с контролируемым самостоятельным выдворением по ст. 18.8 КоАП РФ из-за нарушения режима пребывания.",
    "action": "В течение 10 дней подали апелляционную жалобу, доказали наличие постоянного места жительства, работы и семьи в РФ.",
    "result": "Областной суд изменил постановление, исключив дополнительное наказание в виде выдворения. Назначен только штраф."
  },
  {
    "category": "ЦВСИГ / Срочная защита",
    "title": "Отмена принудительного выдворения и освобождение из спецучреждения",
    "problem": "Иностранного гражданина поместили в ЦВСИГ с решением о принудительном выдворении за пределы РФ.",
    "action": "В срочном порядке обжаловали судебный акт, заявили ходатайство о приостановлении исполнения и доказали процессуальные нарушения.",
    "result": "Постановление о выдворении отменено, доверитель освобождён из ЦВСИГ в зале суда."
  },
  {
    "category": "Трудовая деятельность / Ст. 18.10 КоАП",
    "title": "Прекращение производства по делу по ст. 18.10 КоАП РФ",
    "problem": "Сотрудники полиции составили протокол за работу без патента и передали материалы в суд на выдворение.",
    "action": "Доказали отсутствие состава правонарушения: трудовые обязанности в момент проверки не выполнялись, протокол составлен с грубыми нарушениями.",
    "result": "Суд прекратил производство по делу за отсутствием состава правонарушения, выдворение предотвращено."
  }
];
  const faqs = [
  {
    "q": "Сколько времени даётся на обжалование выдворения?",
    "a": "По общему правилу жалоба на постановление суда по делу об административном правонарушении подаётся в течение 10 суток со дня вручения или получения копии постановления (ст. 30.3 КоАП РФ)."
  },
  {
    "q": "Можно ли восстановить пропущенный 10-дневный срок обжалования?",
    "a": "Да, закон допускает восстановление срока судьёй при наличии уважительных причин (болезнь, отсутствие перевода, неизвещение, позднее вручение копии постановления)."
  },
  {
    "q": "Приостанавливает ли подача жалобы исполнение выдворения?",
    "a": "Да. Жалоба, поданная в установленный срок на не вступившее в силу постановление, препятствует его вступлению в силу до рассмотрения жалобы. При этом помещение и дальнейшее содержание в ЦВСИГ регулируются отдельным судебным актом и требуют самостоятельной проверки."
  },
  {
    "q": "Чем самостоятельный контролируемый выезд отличается от принудительного?",
    "a": "При самостоятельном выезде иностранец обязан покинуть РФ за свой счёт в течение 5 дней после вступления акта в силу. При принудительном — человека помещают в ЦВСИГ до высылки под конвоем."
  },
  {
    "q": "Какой срок запрета на въезд влечёт выдворение?",
    "a": "Административное выдворение влечёт автоматический запрет на въезд в Российскую Федерацию сроком на 5 лет (а при повторном нарушении — на 10 лет)."
  }
];
  const pricingTiers: PricingTier[] = [
  {
    "title": "Срочный анализ постановления",
    "subtitle": "Проверка протокола, сроков и оснований отмены за 24 часа",
    "price": "от 7 000 ₽",
    "features": [
      {
        "name": "Изучение материалов дела об АП",
        "value": "✓"
      },
      {
        "name": "Оценка процессуальных нарушений",
        "value": "✓"
      },
      {
        "name": "Расчёт срока подачи жалобы (ст. 30.3)",
        "value": "✓"
      },
      {
        "name": "Стратегия защиты в вышестоящем суде",
        "value": "✓"
      }
    ]
  },
  {
    "popular": true,
    "badgeText": "Популярно",
    "title": "Подготовка апелляционной жалобы",
    "subtitle": "Составление мотивированной жалобы с ходатайствами",
    "price": "от 18 000 ₽",
    "features": [
      {
        "name": "Сбор доказательств семьи, работы, жилья",
        "value": "✓"
      },
      {
        "name": "Составление жалобы в областной суд",
        "value": "✓"
      },
      {
        "name": "Ходатайство о приостановлении выдворения",
        "value": "✓"
      },
      {
        "name": "Подача жалобы в установленный срок",
        "value": "✓"
      }
    ]
  },
  {
    title: (
      <>
        <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Комплексная защита</span>{' '}
        <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>в суде</span>
      </>
    ),
    "subtitle": "Ведение процесса в апелляции и освобождение из ЦВСИГ",
    "price": "от 40 000 ₽",
    "features": [
      {
        "name": "Личное участие адвоката в судебных заседаниях",
        "value": "✓"
      },
      {
        "name": "Выезд в ЦВСИГ при необходимости",
        "value": "✓"
      },
      {
        "name": "Допрос свидетелей и приобщение документов",
        "value": "✓"
      },
      {
        "name": "Контроль отмены запрета въезда после суда",
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
            <span style={{ color: 'var(--color-text-main)' }}>Обжалование административного выдворения</span>
          </>
        }
        superTitle="Миграционный юрист в Липецке"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Обжалование
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              административного
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              выдворения
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Проверим постановление и дату получения его копии, подготовим жалобу по главе 30 КоАП РФ и представим доказательства для отмены или изменения наказания. Если человек находится в ЦВСИГ, отдельно проверим судебные акты и основания дальнейшего содержания.
          </span>
        }
        primaryCtaText="Обсудить ситуацию"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_cta_vydvorenie"
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
                "text": "Срочная подготовка жалобы за 24–48 часов"
        },
        {
                "text": "Защита от помещения в ЦВСИГ и принудительной высылки"
        },
        {
                "text": "Защита от последствий выдворения и связанного запрета на въезд"
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
                    Снятие ограничений на въезд в РФ, вынесенных органами МВД или судом.
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
                    Прекращение ограничений режима высылки и разблокировка банковских счетов.
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
                  { name: 'source_page', value: '/grazhdanam/migracionnyj-yurist/obzhalovanie-administrativnogo-vydvoreniya/' },
                  { name: 'direction', value: 'obzhalovanie_vydvoreniya' },
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
