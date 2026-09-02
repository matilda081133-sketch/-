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

export default function IsklyuchenieIzReestraKontroliruemyhLicClient() {
  const cases: CaseData[] = [
  {
    "category": "Режим высылки / ВУЗ",
    "title": "Исключение иностранного студента из реестра контролируемых лиц МВД",
    "problem": "Студент липецкого ВУЗа был ошибочно внесён в реестр контролируемых лиц из-за несвоевременного продления регистрации вузом, банковские карты заблокированы.",
    "action": "Подготовили адвокатский запрос в УМВД, подтвердили статус очного обучения и подали заявление об исправлении технической ошибки в базе данных.",
    "result": "Сведения исключены из реестра контролируемых лиц в течение 3 рабочих дней, банковские счета полностью разблокированы."
  },
  {
    "category": "Блокировка счетов / Бизнес",
    "title": "Разблокировка счетов предпринимателя и снятие режима высылки",
    "problem": "Индивидуальный предприниматель — гражданин СНГ узнал о внесении в реестр после блокировки расчётных счетов и невозможности совершать платежи контрагентам.",
    "action": "Проверили миграционную историю, доказали своевременную оплату патента и подали мотивированную жалобу в Управление по вопросам миграции.",
    "result": "Запись в реестре аннулирована, банк снял все ограничения со счетов, коммерческая деятельность возобновлена без убытков."
  },
  {
    "category": "Защита семьи / 260-ФЗ",
    "title": "Исключение из реестра контролируемых лиц отца детей — граждан РФ",
    "problem": "Доверителю грозило применение мер режима высылки из-за формального нарушения срока уведомления о проживании. В Липецке проживают супруга и двое несовершеннолетних детей — граждане РФ.",
    "action": "Собрали доказательства устойчивых семейных связей, подготовили правовую позицию по балансу публичных и частных интересов и добились отмены решения в досудебном порядке.",
    "result": "МВД исключило доверителя из реестра контролируемых лиц, предотвратив депортацию и принудительное разделение семьи."
  }
];
  const faqs = [
  {
    "q": "Что такое реестр контролируемых лиц МВД?",
    "a": "Это единый государственный реестр иностранцев, которые, по данным МВД, не имеют законных оснований для нахождения в РФ. С момента внесения сведений в отношении лица действует режим высылки."
  },
  {
    "q": "Какие ограничения действуют при включении в реестр (режим высылки)?",
    "a": "Запрещается открытие банковских счетов и переводы, регистрация транспортных средств и недвижимости, управление автомобилем, заключение брака. Действует ограничение свободы передвижения."
  },
  {
    "q": "Как проверить, находится ли человек в реестре контролируемых лиц?",
    "a": "Проверка осуществляется через официальный сервис МВД России. Адвокат поможет сделать официальный запрос для установления точной причины и ведомственного акта, послужившего основанием для включения."
  },
  {
    "q": "Как исключить сведения из реестра контролируемых лиц?",
    "a": "Исключение возможно при: устранении технической ошибки, приобретении законного основания пребывания (РВП, ВНЖ, патент), отмене исходного решения (запрета, выдворения, депортации) через суд или МВД."
  },
  {
    "q": "Разблокируют ли банковские счета после исключения из реестра?",
    "a": "Да. После исключения сведений из ведомственной базы МВД и передачи обновлённых данных в банковскую систему все ограничения по операциям со счетами и картами снимаются."
  }
];
  const pricingTiers: PricingTier[] = [
  {
    "title": "Проверка оснований и запрос",
    "subtitle": "Установление причины внесения в реестр",
    "price": "от 5 000 ₽",
    "features": [
      {
        "name": "Истребование сведений из реестра МВД",
        "value": "✓"
      },
      {
        "name": "Анализ миграционного статуса",
        "value": "✓"
      },
      {
        "name": "План выхода из режима высылки",
        "value": "✓"
      }
    ]
  },
  {
    "popular": true,
    "badgeText": "Популярно",
    "title": "Исключение в досудебном порядке",
    "subtitle": "Подача заявления в УМВД и устранение нарушений",
    "price": "от 15 000 ₽",
    "features": [
      {
        "name": "Сбор оправдательных документов",
        "value": "✓"
      },
      {
        "name": "Заявление об исключении из реестра",
        "value": "✓"
      },
      {
        "name": "Контроль разблокировки банковских счетов",
        "value": "✓"
      }
    ]
  },
  {
    "title": "Судебное оспаривание решения МВД",
    "subtitle": "Административный иск о признании записи незаконной",
    "price": "от 35 000 ₽",
    "features": [
      {
        "name": "Составление административного иска",
        "value": "✓"
      },
      {
        "name": "Представительство адвоката в суде",
        "value": "✓"
      },
      {
        "name": "Компенсация судебных расходов",
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
            <span style={{ color: 'var(--color-text-main)' }}>Исключение из реестра контролируемых лиц</span>
          </>
        }
        superTitle="Миграционный юрист в Липецке"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Исключение из реестра
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              контролируемых лиц МВД
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Установим основание включения в реестр контролируемых лиц и определим законный маршрут: исправление ошибочных сведений, получение законного основания пребывания, отмена исходного решения либо судебное оспаривание. После появления основания для исключения проконтролируем изменение записи и прекращение ограничений.
          </span>
        }
        primaryCtaText="Обсудить ситуацию"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_cta_reestr"
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
                "text": "Работа по новому законодательству о режиме высылки (260-ФЗ)"
        },
        {
                "text": "Разблокировка банковских счетов и электронных кошельков"
        },
        {
                "text": "Снятие ограничений на управление транспортом и сделки"
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
                    Оспаривание запретов на въезд, ставших основанием для применения режима высылки.
                  </p>
                </div>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontSize: '13px', fontWeight: 600, marginTop: '16px', transition: 'color 0.35s ease' }}>
                  <span>Перейти к услуге</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
            </a>

            <a href="/grazhdanam/migracionnyj-yurist/obzhalovanie-administrativnogo-vydvoreniya/" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
              <div className="card service-card hover-lift" style={{ height: '100%', padding: '24px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ margin: '0 0 10px 0', fontSize: '17px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', lineHeight: 1.35 }}>
                    Обжалование административного выдворения
                  </h4>
                  <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    Подача жалобы по главе 30 КоАП РФ на постановление суда о выдворении.
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
                    Судебное оспаривание решения МВД о принудительной высылке по КАС РФ.
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
                    Отмена распоряжений Минюста, ФСБ или Роспотребнадзора о нежелательности пребывания.
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
                  { name: 'source_page', value: '/grazhdanam/migracionnyj-yurist/isklyuchenie-iz-reestra-kontroliruemyh-lic/' },
                  { name: 'direction', value: 'isklyuchenie_iz_reestra_kontrol' },
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
