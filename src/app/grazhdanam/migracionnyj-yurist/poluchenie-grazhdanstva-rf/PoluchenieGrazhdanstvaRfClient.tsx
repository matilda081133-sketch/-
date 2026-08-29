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

export default function PoluchenieGrazhdanstvaRfClient() {
  const cases: CaseData[] = [
  {
    "category": "Гражданство РФ / 138-ФЗ",
    "title": "Успешный приём в гражданство РФ по родителям — гражданам России",
    "problem": "Заявитель получал отказ в приёме заявления из-за расхождений в транслитерации фамилии в свидетельстве о рождении образца Узбекской ССР.",
    "action": "Провели архивный поиск, оформили заключение лингвистической экспертизы и привели документы в полное соответствие.",
    "result": "Заявление принято, через 3 месяца вынесено положительное решение о приёме в гражданство РФ."
  }
];
  const faqs = [
  {
    "q": "Обязательно ли иметь ВНЖ для получения гражданства РФ?",
    "a": "По общему правилу закона № 138-ФЗ наличие ВНЖ является обязательным требованием. Исключения предусмотрены для участников госпрограммы переселения соотечественников, военнослужащих по контракту и некоторых других специальных категорий."
  },
  {
    "q": "Сколько времени рассматривается заявление на гражданство РФ?",
    "a": "По закону № 138-ФЗ срок рассмотрения заявления составляет до 3 месяцев (в исключительных случаях может быть продлён до 6 месяцев для проведения дополнительных проверок)."
  }
];
  const pricingTiers: PricingTier[] = [
  {
    "title": "Анализ права на гражданство",
    "subtitle": "Проверка соответствия критериям закона № 138-ФЗ",
    "price": "от 4 000 ₽",
    "features": [
      {
        "name": "Анализ оснований для приёма в гражданство",
        "value": "✓"
      },
      {
        "name": "Проверка непрерывности проживания по ВНЖ",
        "value": "✓"
      },
      {
        "name": "Чек-лист документов для подачи в МВД",
        "value": "✓"
      }
    ]
  },
  {
    "title": "Комплект документов на гражданство",
    "subtitle": "Заполнение заявления и проверка всех справок",
    "price": "от 20 000 ₽",
    "features": [
      {
        "name": "Составление заявления по форме МВД",
        "value": "✓"
      },
      {
        "name": "Проверка подтверждения законных доходов",
        "value": "✓"
      },
      {
        "name": "Исключение любых юридических оснований для отказа",
        "value": "✓"
      }
    ]
  },
  {
    "title": "Сопровождение под ключ",
    "subtitle": "От первой консультации до принятия Присяги",
    "price": "от 35 000 ₽",
    "features": [
      {
        "name": "Запись и сопровождение на подачу документов",
        "value": "✓"
      },
      {
        "name": "Контроль прохождения проверок в МВД и ФСБ",
        "value": "✓"
      },
      {
        "name": "Консультирование по процедуре принесения Присяги",
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
            <span style={{ color: 'var(--color-text-main)' }}>Помощь в получении гражданства РФ</span>
          </>
        }
        superTitle="Миграционный юрист в Липецке"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Помощь в получении
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              гражданства Российской Федерации
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Поможем законно вступить в гражданство Российской Федерации по новому закону № 138-ФЗ: проверим основания, подготовим пакет документов и сопроводим подачу до принесения Присяги.
          </span>
        }
        primaryCtaText="Обсудить ситуацию"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_cta_grazhdanstvo"
        primaryCtaSubtext={
          <>Если требуется срочная помощь юриста, позвоните: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (910) 350-31-11</a></>
        }
        trustItems={[
        {
                "text": "Работа по новому Федеральному закону № 138-ФЗ «О гражданстве РФ»"
        },
        {
                "text": "Проверка оснований по рождению, браку с детьми, родителям, ВУЗу"
        },
        {
                "text": "Исключение рисков отказа и аннулирования решения о приёме"
        },
        {
                "text": "Куратор — адвокат Д. С. Конопкин"
        }
]}
        imageUrl="/images/konopkin.jpg"
        imageName="Дмитрий Сергеевич Конопкин"
        imageSubtitle="Адвокат, председатель Коллегии адвокатов «Де-Юре»"
        imageObjectPosition="center 25%"
      />

      {/* ═══ БЛОК 2: ТИПОВЫЕ СИТУАЦИИ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>С какими ситуациями</span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>к нам обращаются доверители</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Каждая миграционная процедура требует индивидуальной проверки оснований, точного соблюдения регламентов и сроков обжалования.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {[
          {
                    "tag": "По родителям",
                    "title": [
                              "Родители имеют гражданство",
                              "Российской Федерации"
                    ],
                    "desc": "Приём в гражданство РФ по постоянно проживающим в России родителям — гражданам РФ."
          },
          {
                    "tag": "Брак и общие дети",
                    "title": [
                              "Брак с гражданином РФ",
                              "при наличии общих детей"
                    ],
                    "desc": "Оформление гражданства по новому закону № 138-ФЗ при наличии брака и общего ребёнка — гражданина РФ."
          },
          {
                    "tag": "Диплом РФ и стаж",
                    "title": [
                              "Окончание ВУЗа в РФ",
                              "и официальный трудовой стаж"
                    ],
                    "desc": "Приём в гражданство для выпускников российских учебных заведений, работающих по специальности."
          },
          {
                    "tag": "Общий порядок",
                    "title": [
                              "Постоянное проживание по ВНЖ",
                              "в течение 5 лет в России"
                    ],
                    "desc": "Оформление гражданства в общем порядке при соблюдении ценза оседлости и подтверждении дохода."
          }
].map((item, i) => (
              <div key={i} className="hover-lift" style={{
                padding: '36px 30px',
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-primary)',
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', opacity: 0.06, pointerEvents: 'none' }}>
                  <svg width="100" height="100" viewBox="0 0 24 24" fill="var(--color-deep-blue)">
                    <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>

                <div style={{ 
                  fontSize: '12px', 
                  fontWeight: 700, 
                  color: 'var(--color-gold)', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.08em', 
                  marginBottom: '14px',
                  background: 'rgba(193, 160, 102, 0.1)',
                  padding: '4px 10px',
                  alignSelf: 'flex-start',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {item.tag}
                </div>
                <h3 style={{ 
                  fontFamily: 'var(--font-serif)', 
                  fontSize: '17px', 
                  fontWeight: 600,
                  color: 'var(--color-deep-blue)',
                  margin: '0 0 14px 0',
                  lineHeight: 1.4,
                  position: 'relative',
                  zIndex: 1
                }}>
                  <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>{item.title[0]}</span>{' '}
                  <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>{item.title[1]}</span>
                </h3>
                <p style={{ 
                  fontSize: '15px', 
                  color: 'var(--color-text-secondary)', 
                  lineHeight: 1.6,
                  margin: 0,
                  position: 'relative',
                  zIndex: 1
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: КУРАТОР НАПРАВЛЕНИЯ ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name="Конопкин Дмитрий Сергеевич"
        position={<>Адвокат, председатель<br />Коллегии адвокатов «Де-Юре»</>}
        imageUrl="/images/konopkin.jpg"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Дмитрий Сергеевич Конопкин имеет 6-летний опыт следственной работы в Следственном комитете РФ и адвокатскую практику с 2022 года. Курирует миграционные споры, требующие судебного оспаривания актов государственных органов и экстренной защиты доверителей.
          </span>,
          <ul key="2" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Статус адвоката, реестровый номер 48/812</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Председатель Коллегии адвокатов «Де-Юре»</span>
            </li>
          </ul>,
          <a key="3" href="/specialisty/konopkin-dmitriy-sergeevich/" style={{ display: 'inline-block', marginTop: '16px', fontSize: '14px', color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
            Подробнее о Дмитрии Сергеевиче Конопкине →
          </a>
        ]}
        buttonText="Задать вопрос адвокату"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 4: ПРИМЕРЫ ИЗ ПРАКТИКИ ═══ */}
      <CasesBlock
        title="Примеры из практики"
        showAllLink="/praktika/"
        showAllText="Смотреть все дела"
        showDemoWarning={true}
        cases={cases}
      />

      {/* ═══ БЛОК 5: КАК ПРОХОДИТ РАБОТА ═══ */}
      <ProcessBlock
        title="Как проходит работа"
        subtitle="Работаем структурировано — вы знаете, что происходит на каждом этапе."
        alignTitle="center"
        steps={[
          {
            num: '01',
            title: 'Разбираемся в ситуации',
            desc: 'Уточняем статус, документы, сроки и цель обращения. Определяем неотложные юридические действия.'
          },
          {
            num: '02',
            title: 'Проверяем документы',
            desc: 'Изучаем акты МВД, протоколы, судебные решения и подтверждения семейных или гуманитарных обстоятельств.'
          },
          {
            num: '03',
            title: 'Формируем правовую позицию',
            desc: 'Определяем административный или судебный порядок, оцениваем риски и фиксируем условия работы.'
          },
          {
            num: '04',
            title: 'Защищаем интересы',
            desc: 'Подаём обращения, жалобы или иск в суд, участвуем в заседаниях и взаимодействуем с ведомствами.'
          },
          {
            num: '05',
            title: 'Контролируем результат',
            desc: 'Отслеживаем фактическое исполнение решения, снятие ограничений или выдачу миграционного документа.'
          }
        ]}
        ctaTitle="Готовы обсудить вашу задачу"
        ctaSubtitle="Опишите ситуацию — адвокат изучит документы и подскажет законный порядок действий."
        ctaButtonText="Получить консультацию"
        ctaButtonHref="#form"
      />

      {/* ═══ БЛОК 6: СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость юридической помощи"
        subtitle="Фиксируем цену в официальном договоре. Без скрытых платежей и непредвиденных расходов."
        tiers={pricingTiers}
        disclaimer="Госпошлины, нотариальные переводы и доверенности оплачиваются отдельно по фактическим тарифам."
      />

      {/* ═══ БЛОК 7: FAQ ═══ */}
      <FAQBlock
        faqs={faqs}
        title="Частые вопросы"
        superTitle="Вопросы и ответы"
      />

      {/* ═══ БЛОК 8: ФОРМА И КОНТАКТЫ ═══ */}
      <section id="form" className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '48px', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
                Правовая оценка
              </span>
              <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 16px 0', lineHeight: 1.25 }}>
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Получить консультацию</span>{' '}
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>по миграционному вопросу</span>
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '28px' }}>
                Опишите ситуацию, укажите гражданство и имеющиеся решения. Адвокат изучит обстоятельства, проверит сроки и свяжется с вами.
              </p>

              <div style={{ background: 'var(--color-white)', padding: '24px', border: '1px solid var(--color-border)', borderLeft: '3px solid var(--color-gold)', marginBottom: '24px' }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '6px' }}>
                  Конфиденциальность и безопасность данных
                </div>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Все переданные сведения и документы защищены профессиональной адвокатской тайной.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  <a href="tel:+79103503111" style={{ color: 'var(--color-deep-blue)', textDecoration: 'none', fontWeight: 600, fontSize: '15px' }}>+7 (910) 350-31-11</a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>г. Липецк, ул. Советская, 35</span>
                </div>
              </div>
            </div>

            <div style={{ background: 'var(--color-white)', padding: '36px', border: '1px solid var(--color-border)', boxShadow: '0 8px 30px rgba(0,0,0,0.06)' }}>
              <ContactsForm
                buttonText="Отправить обращение"
                commentPlaceholder="Опишите вашу задачу: какое решение вынесено, есть ли семья в РФ, какой документ требуется оформить..."
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
