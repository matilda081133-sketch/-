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
    "category": "Выдворение / Апелляция",
    "title": "Отмена административного выдворения в Липецком областном суде",
    "problem": "Суд первой инстанции назначил гражданину Узбекистана штраф с выдворением по ч. 1.1 ст. 18.8 КоАП РФ за нарушение срока пребывания.",
    "action": "Подали апелляционную жалобу за 3 дня до истечения срока, доказали наличие законного брака с гражданкой РФ и факт постоянной работы.",
    "result": "Областной суд изменил постановление: выдворение исключено, назначен только штраф, доверитель сохранил право проживать в РФ."
  },
  {
    "category": "Освобождение из ЦВСИГ",
    "title": "Отмена принудительного выдворения и освобождение из спецучреждения",
    "problem": "Доверителя задержали и поместили в ЦВСИГ для принудительного контролируемого выезда.",
    "action": "Вступили в дело в день задержания, собрали доказательства отсутствия общественной опасности и подали срочную жалобу.",
    "result": "Постановление отменено вышестоящим судом, доверитель немедленно освобождён из ЦВСИГ."
  },
  {
    "category": "Процессуальные нарушения",
    "title": "Прекращение производства по делу по ст. 18.10 КоАП РФ",
    "problem": "Иностранного гражданина обвинили в незаконной трудовой деятельности без надлежащего уведомления.",
    "action": "Доказали отсутствие состава правонарушения и непредоставление переводчика при составлении протокола.",
    "result": "Суд полностью прекратил производство по делу за отсутствием состава правонарушения."
  }
];
  const faqs = [
  {
    "q": "Какой точный срок на подачу жалобы на выдворение?",
    "a": "Ровно 10 суток со дня вручения или получения копии постановления суда (ст. 30.3 КоАП РФ). Если последний день выпадает на выходной, срок переносится на первый рабочий день."
  },
  {
    "q": "Приостанавливает ли подача жалобы выдворение?",
    "a": "Да, подача жалобы до вступления постановления в законную силу приостанавливает его исполнение. До рассмотрения дела вышестоящим судом высылка не может быть осуществлена."
  },
  {
    "q": "Что грозит, если не обжаловать выдворение?",
    "a": "Постановление вступает в силу, иностранный гражданин принудительно или самостоятельно выдворяется, и ему автоматически устанавливается запрет на въезд в РФ сроком на 5 лет (при повторном — на 10 лет)."
  },
  {
    "q": "Можно ли отменить выдворение, если срок 10 дней уже пропущен?",
    "a": "Можно заявить ходатайство о восстановлении срока, если он был пропущен по уважительной причине (болезнь, невручение копии постановления, отсутствие перевода). Адвокат поможет грамотно обосновать пропуск."
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
    "title": "Комплексная защита в суде",
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
              административного выдворения
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Подадим апелляционную жалобу в 10-дневный срок по ст. 30.3 КоАП РФ, заявим ходатайство о приостановлении исполнения, добьёмся отмены выдворения и освобождения из ЦВСИГ.
          </span>
        }
        primaryCtaText="Обсудить ситуацию"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_cta_vydvorenie"
        primaryCtaSubtext={
          <>Если требуется срочная помощь юриста, позвоните: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (910) 350-31-11</a></>
        }
        trustItems={[
        {
                "text": "Срочная подготовка жалобы за 24–48 часов"
        },
        {
                "text": "Защита от помещения в ЦВСИГ и принудительной высылки"
        },
        {
                "text": "Исключение 5-летнего запрета на въезд в Россию"
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
                    "tag": "10 дней на жалобу",
                    "title": [
                              "Суд первой инстанции",
                              "назначил штраф с выдворением"
                    ],
                    "desc": "Необходимо немедленно подать жалобу до вступления постановления в законную силу, чтобы остановить высылку."
          },
          {
                    "tag": "ЦВСИГ / Арест",
                    "title": [
                              "Поместили в центр временного",
                              "содержания иностранных граждан (ЦВСИГ)"
                    ],
                    "desc": "Выезжаем к доверителю, составляем срочную жалобу и ходатайствуем об изменении меры пресечения."
          },
          {
                    "tag": "Семья в РФ",
                    "title": [
                              "В России проживают близкие",
                              "родственники — граждане РФ"
                    ],
                    "desc": "Доказываем несоразмерность выдворения с нарушением права на уважение личной и семейной жизни."
          },
          {
                    "tag": "Нарушение сроков",
                    "title": [
                              "Протокол составлен с грубыми",
                              "процессуальными нарушениями"
                    ],
                    "desc": "Проверяем отсутствие переводчика, непредоставление защитника и искажение фактических обстоятельств."
          },
          {
                    "tag": "Оплата патента",
                    "title": [
                              "Задержка платежа за патент",
                              "или сбой банковской системы"
                    ],
                    "desc": "Предоставляем платёжные квитанции, выписки банка и восстанавливаем законность трудовой деятельности."
          },
          {
                    "tag": "Пропущен срок",
                    "title": [
                              "Постановление вступило в силу,",
                              "но копия не вручалась"
                    ],
                    "desc": "Подаём ходатайство о восстановлении пропущенного срока обжалования по уважительным причинам."
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
