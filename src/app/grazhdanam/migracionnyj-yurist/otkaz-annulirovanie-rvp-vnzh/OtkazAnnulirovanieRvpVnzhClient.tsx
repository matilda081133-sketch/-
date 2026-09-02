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

export default function OtkazAnnulirovanieRvpVnzhClient() {
  const cases: CaseData[] = [
  {
    "category": "Аннулирование ВНЖ / Суд",
    "title": "Восстановление вида на жительство после незаконного аннулирования МВД",
    "problem": "МВД аннулировало ВНЖ из-за якобы предоставления недостоверных сведений о доходах. Доверителю выдали уведомление о выезде из РФ в 15-дневный срок.",
    "action": "Истребовали материалы проверки, подтвердили реальность и законность источников дохода банковскими выписками и налоговыми декларациями, оспорили решение в суде.",
    "result": "Суд полностью отменил решение МВД, действие вида на жительство восстановлено, вид на жительство остался бессрочным."
  },
  {
    "category": "Отказ в РВП / Брак",
    "title": "Отмена отказа в выдаче РВП по браку с гражданкой РФ",
    "problem": "Миграционный отдел отказал в приёме документов на РВП, сославшись на сомнения в подлинности справок о знании языка и несудимости.",
    "action": "Провели адвокатскую проверку, получили официальные подтверждения от выдавших организаций и подали иск о признании отказа незаконным.",
    "result": "Суд обязал миграционный орган принять документы на РВП и выдать разрешение в регламентный срок без повторной оплаты госпошлины."
  },
  {
    "category": "Меры защиты / 15 дней",
    "title": "Приостановление 15-дневного срока выезда и сохранение статуса РВП",
    "problem": "После аннулирования РВП иностранный гражданин пропустил часть срока добровольного выезда и рисковал получить автоматический запрет на въезд на 5 лет.",
    "action": "Подали административный иск по КАС РФ с одновременным ходатайством о запрете высылки до окончания судебного процесса.",
    "result": "Суд вынес определение о мерах предварительной защиты, выезд приостановлен, статус доверителя защищён до завершения рассмотрения дела."
  }
];
  const faqs = [
  {
    "q": "Чем отказ в выдаче отличается от аннулирования РВП или ВНЖ?",
    "a": "Отказ выносится на этапе рассмотрения заявления до выдачи документа. Аннулирование прекращает действие уже выданного и действующего РВП или ВНЖ и обязывает покинуть РФ в 15-дневный срок."
  },
  {
    "q": "Какой срок установлен для обжалования отказа или аннулирования?",
    "a": "Решение об отказе или аннулировании РВП/ВНЖ может быть обжаловано в вышестоящий орган МВД в течение 3 рабочих дней либо в суд в течение 3 месяцев со дня получения уведомления."
  },
  {
    "q": "Обязан ли иностранец покинуть Россию в течение 15 дней после аннулирования?",
    "a": "По закону — да, если решение не обжаловано. Однако при подаче административного иска и принятии судом мер предварительной защиты срок выезда законно приостанавливается до решения суда."
  },
  {
    "q": "По каким основаниям чаще всего аннулируют РВП и ВНЖ?",
    "a": "Основные причины: нахождение за пределами РФ более 6 месяцев суммарно за год, неподача ежегодного уведомления о подтверждении проживания, непредоставление подтверждения доходов или привлечение к ответственности."
  }
];
  const pricingTiers: PricingTier[] = [
  {
    "title": "Правовая экспертиза отказа",
    "subtitle": "Анализ уведомления МВД и оценка шансов на отмену",
    "price": "от 5 000 ₽",
    "features": [
      {
        "name": "Изучение решения об отказе / аннулировании",
        "value": "✓"
      },
      {
        "name": "Проверка соблюдения регламента МВД",
        "value": "✓"
      },
      {
        "name": "План защиты статуса",
        "value": "✓"
      }
    ]
  },
  {
    "popular": true,
    "badgeText": "Востребовано",
    "title": <>Судебное восстановление<br />РВП / ВНЖ</>,
    "subtitle": "Административный иск и защита статуса в суде",
    "price": "от 35 000 ₽",
    "features": [
      {
        "name": (
          <>
            <span style={{ display: 'block' }}>Составление административного</span>
            <span style={{ display: 'block' }}>иска по КАС РФ</span>
          </>
        ),
        "value": "✓"
      },
      {
        "name": "Ходатайство о мерах защиты (приостановка выезда)",
        "value": "✓"
      },
      {
        "name": "Представительство адвоката во всех заседаниях",
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
            <span style={{ color: 'var(--color-text-main)' }}>Обжалование отказа или аннулирования РВП и ВНЖ</span>
          </>
        }
        superTitle="Миграционный юрист в Липецке"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Обжалование отказа
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              или аннулирования
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              РВП и ВНЖ
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Проверим решение об отказе или аннулировании РВП/ВНЖ, дату уведомления и последствия для текущего статуса. При наличии оснований подготовим жалобу в МВД либо административный иск. Если существует риск депортации, отдельно заявим мотивированное ходатайство о мерах предварительной защиты.
          </span>
        }
        primaryCtaText="Обсудить ситуацию"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_cta_otkaz_rvp_vnzh"
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
                "text": "Приостановление обязанности выезда из РФ на период суда"
        },
        {
                "text": "Оспаривание отказов по доходам, отсутствию в РФ и проверкам"
        },
        {
                "text": "Восстановление статуса РВП и ВНЖ через суд"
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
              Каждая миграционная процедура требует индивидуальной проверки оснований, точного соблюдения регламентов и сроков обжалования.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 380px))', gap: '20px', marginBottom: '24px' }}>
            {/* Карточка 1: 15 дней на выезд */}
            <div className="card service-card hover-lift" style={{ height: '100%', padding: '28px 24px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
              <div>
                <div style={{ display: 'inline-block', padding: '4px 10px', background: 'rgba(23, 50, 77, 0.08)', color: 'var(--color-primary)', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '14px' }}>
                  15 дней на выезд
                </div>
                <h4 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', lineHeight: 1.35, fontWeight: 700 }}>
                  Уведомление об отмене или аннулировании РВП либо вида на жительство в РФ
                </h4>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  Подача административного иска сама по себе не приостанавливает обязанность выехать. Для временной защиты необходимо отдельное заявление, а решение о применении мер принимает суд.
                </p>
              </div>
              <a href="#form" style={{ textDecoration: 'none' }}>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontSize: '13px', fontWeight: 600, marginTop: '20px', transition: 'color 0.35s ease' }}>
                  <span>Получить защиту</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </a>
            </div>

            {/* Карточка 2: Отказ в приеме / выдаче */}
            <div className="card service-card hover-lift" style={{ height: '100%', padding: '28px 24px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
              <div>
                <div style={{ display: 'inline-block', padding: '4px 10px', background: 'rgba(23, 50, 77, 0.08)', color: 'var(--color-primary)', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '14px' }}>
                  Отказ в выдаче
                </div>
                <h4 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', lineHeight: 1.35, fontWeight: 700 }}>
                  Отказ в приёме документов или выдаче РВП / ВНЖ
                </h4>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  Проверяем законность оснований отказа МВД (доходы, знание языка, сроки пребывания), запрашиваем материалы проверки и готовим досудебную жалобу или административный иск.
                </p>
              </div>
              <a href="#form" style={{ textDecoration: 'none' }}>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontSize: '13px', fontWeight: 600, marginTop: '20px', transition: 'color 0.35s ease' }}>
                  <span>Оценить отказ</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </a>
            </div>
          </div>

          {/* Длинная плашка под карточками */}
          <div style={{ 
            background: 'var(--gradient-cream)', 
            borderLeft: '4px solid var(--color-gold)', 
            borderTop: '1px solid var(--color-border)', 
            borderRight: '1px solid var(--color-border)', 
            borderBottom: '1px solid var(--color-border)', 
            padding: '24px 28px',
            marginTop: '24px'
          }}>
            <h4 style={{ margin: '0 0 10px 0', fontSize: '17px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', fontWeight: 700, lineHeight: 1.35 }}>
              Отказ и аннулирование: разные правовые последствия
            </h4>
            <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
              Отказ означает, что РВП или ВНЖ ещё не были выданы. Аннулирование прекращает уже действующий статус и может повлечь обязанность выехать в течение 15 дней. Поэтому для аннулирования сначала проверяются срочные последствия и меры защиты, а при отказе — мотивировка, документы и возможность административного или судебного обжалования.
            </p>
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
                  { name: 'source_page', value: '/grazhdanam/migracionnyj-yurist/otkaz-annulirovanie-rvp-vnzh/' },
                  { name: 'direction', value: 'otkaz_annulirovanie_rvp_vnzh' },
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
