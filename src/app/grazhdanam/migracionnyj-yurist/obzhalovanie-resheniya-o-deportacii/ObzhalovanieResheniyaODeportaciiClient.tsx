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

export default function ObzhalovanieResheniyaODeportaciiClient() {
  const cases: CaseData[] = [
  {
    "category": "Меры защиты / КАС РФ",
    "title": "Приостановление депортации через меры предварительной защиты суда",
    "problem": "МВД вынесло распоряжение о депортации иностранного гражданина после аннулирования РВП. Доверителю грозила высылка в течение 3 дней.",
    "action": "Подали иск по КАС РФ и немедленно заявили ходатайство о применении мер предварительной защиты в виде приостановления действия распоряжения.",
    "result": "Суд удовлетворил меры защиты в день подачи иска, депортация остановлена, доверитель законно находится в РФ до решения спора."
  },
  {
    "category": "Защита семьи / Дети",
    "title": "Отмена решения о депортации отца троих детей — граждан России",
    "problem": "МВД вынесло распоряжение о депортации главы семьи с запретом на въезд на 5 лет из-за просрочки регистрации на 2 дня.",
    "action": "В судебном порядке доказали несоразмерность меры тяжести нарушения, подтвердили совместное проживание и воспитание троих детей — граждан РФ.",
    "result": "Суд отменил распоряжение о депортации, миграционный орган оформил легальный статус проживания."
  },
  {
    "category": "ЦВСИГ / Освобождение",
    "title": "Освобождение из спецучреждения (ЦВСИГ) и отмена депортации",
    "problem": "Иностранного гражданина задержали и поместили в ЦВСИГ с целью принудительного исполнения распоряжения о депортации.",
    "action": "Срочно выехали в ЦВСИГ, подготовили экстренную жалобу в суд, выявили грубые процедурные нарушения при оформлении актов МВД.",
    "result": "Суд отменил постановление о содержании в ЦВСИГ, доверитель немедленно освобождён, процедура депортации прекращена."
  }
];
  const faqs = [
  {
    "q": "Чем депортация отличается от административного выдворения?",
    "a": "Депортация — это внесудебное решение миграционного органа (МВД) о принудительной высылке иностранца при утрате законных оснований для пребывания. Выдворение — это мера административного наказания, назначаемая судом по КоАП РФ."
  },
  {
    "q": "В какой срок можно обжаловать решение о депортации?",
    "a": "Распоряжение о депортации может быть обжаловано в суд в порядке административного судопроизводства (КАС РФ) в течение 3 месяцев со дня, когда иностранному гражданину стало известно о нарушении его прав."
  },
  {
    "q": "Как не допустить высылки во время судебного процесса?",
    "a": "При подаче административного искового заявления адвокат заявляет ходатайство о применении мер предварительной защиты (ст. 85 КАС РФ) в виде приостановления действия оспариваемого распоряжения МВД до вступления решения суда в силу."
  },
  {
    "q": "Можно ли отменить депортацию, если в России проживает семья?",
    "a": "Да. Наличие супруга, несовершеннолетних детей или нетрудоспособных родителей — граждан РФ является ключевым основанием для признания депортации несоразмерным вмешательством в семейную жизнь (ст. 38 Конституции РФ и правовых позиций Конституционного Суда РФ)."
  }
];
  const pricingTiers: PricingTier[] = [
  {
    "title": "Анализ распоряжения о депортации",
    "subtitle": "Оценка оснований, срочности и выбор способа защиты",
    "price": "от 7 000 ₽",
    "features": [
      {
        "name": "Правовая экспертиза решения МВД",
        "value": "✓"
      },
      {
        "name": "Оценка семейных и гуманитарных факторов",
        "value": "✓"
      },
      {
        "name": "Подготовка плана судебной защиты",
        "value": "✓"
      }
    ]
  },
  {
    "popular": true,
    "badgeText": "Популярно",
    "title": "Иск и меры предварительной защиты",
    "subtitle": "Составление иска и приостановление высылки через суд",
    "price": "от 25 000 ₽",
    "features": [
      {
        "name": "Административное исковое заявление по КАС РФ",
        "value": "✓"
      },
      {
        "name": "Ходатайство о мерах предварительной защиты",
        "value": "✓"
      },
      {
        "name": "Уведомление УМВД о начале судебного процесса",
        "value": "✓"
      }
    ]
  },
  {
    "title": "Полное судебное представительство",
    "subtitle": "Защита во всех инстанциях до отмены депортации",
    "price": "от 45 000 ₽",
    "features": [
      {
        "name": "Личное участие адвоката в судебных заседаниях",
        "value": "✓"
      },
      {
        "name": "Формирование доказательной базы",
        "value": "✓"
      },
      {
        "name": "Контроль снятия со специального учёта МВД",
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
            <span style={{ color: 'var(--color-text-main)' }}>Обжалование решения о депортации</span>
          </>
        }
        superTitle="Миграционный юрист в Липецке"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Обжалование решения
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              о депортации из России
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Проверим решение МВД о депортации, основание, дату получения и стадию исполнения. При наличии оснований подготовим административный иск и отдельное заявление о мерах предварительной защиты. Решение о временном приостановлении принимает суд.
          </span>
        }
        primaryCtaText="Обсудить ситуацию"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_cta_deportaciya"
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
                "text": "Судебное оспаривание решений МВД по нормам КАС РФ"
        },
        {
                "text": "Ходатайства о мерах предварительной защиты (ст. 85 КАС РФ)"
        },
        {
                "text": "Защита при аннулировании статуса или отбытии наказания"
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

            <a href="/grazhdanam/migracionnyj-yurist/otkaz-annulirovanie-rvp-vnzh/" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
              <div className="card service-card hover-lift" style={{ height: '100%', padding: '24px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ margin: '0 0 10px 0', fontSize: '17px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', lineHeight: 1.35 }}>
                    Обжалование отказа или аннулирования РВП и ВНЖ
                  </h4>
                  <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    Защита статуса проживания при риске возникновения обязанности выехать из РФ.
                  </p>
                </div>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontSize: '13px', fontWeight: 600, marginTop: '16px', transition: 'color 0.35s ease' }}>
                  <span>Перейти к услуге</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
            </a>

            <a href="/grazhdanam/migracionnyj-yurist/obzhalovanie-nezhelatelnosti-prebyvaniya/" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
              <div className="card service-card hover-lift" style={{ height: '100%', padding: '24px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ margin: '0 0 10px 0', fontSize: '17px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', lineHeight: 1.35 }}>
                    Обжалование нежелательности пребывания
                  </h4>
                  <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    Оспаривание распоряжений ведомств о нежелательности пребывания в РФ.
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
                    Снятие режима высылки и исключение сведений из базы контролируемых лиц.
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
                  { name: 'source_page', value: '/grazhdanam/migracionnyj-yurist/obzhalovanie-resheniya-o-deportacii/' },
                  { name: 'direction', value: 'obzhalovanie_deportacii' },
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
