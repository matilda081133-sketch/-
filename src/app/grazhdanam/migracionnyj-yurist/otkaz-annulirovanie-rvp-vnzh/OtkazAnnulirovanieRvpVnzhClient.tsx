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
    "badgeText": "Популярно",
    "title": <>Судебное восстановление<br />РВП / ВНЖ</>,
    "subtitle": "Административный иск и защита статуса в суде",
    "price": "от 35 000 ₽",
    "features": [
      {
        "name": "Составление административного иска по КАС РФ",
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
              Если требуется
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              срочная помощь юриста, позвоните: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (910) 350-31-11</a>
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
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Каждая миграционная процедура требует индивидуальной проверки оснований, точного соблюдения регламентов и сроков обжалования.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {[
          {
                    "tag": "15 дней на выезд",
                    "title": [
                              "Уведомление об отмене",
                              "или аннулировании РВП",
                              "либо вида на жительство в РФ"
                    ],
                    "desc": "Подача административного иска сама по себе не приостанавливает обязанность выехать. Для временной защиты необходимо отдельное заявление, а решение о применении мер принимает суд."
          },
          {
                    "tag": "Отказ в выдаче",
                    "title": [
                              "МВД вынесло отказ",
                              "в предоставлении РВП",
                              "или вида на жительство (ВНЖ)"
                    ],
                    "desc": "Проверяем законность отказа, выявляем необоснованные ссылки на подложные сведения или ошибки в межведомственных базах."
          },
          {
                    "tag": "Выезд за границу",
                    "title": [
                              "Аннулировали за выезд",
                              "за пределы России",
                              "сроком более 6 месяцев"
                    ],
                    "desc": "Доказываем уважительность причин отсутствия: экстренное лечение, уход за тяжелобольным родственником или форс-мажор."
          },
          {
                    "tag": "Подтверждение дохода",
                    "title": [
                              "Претензии к ежегодному",
                              "уведомлению о доходах",
                              "или проживанию в регионе"
                    ],
                    "desc": "Подтверждаем законные источники средств, подаём уточнённые справки 2-НДФЛ, банковские выписки и оспариваем претензии МВД."
          },
          {
                    "tag": "Штрафы и правонарушения",
                    "title": [
                              "Аннулирование из-за двух",
                              "административных штрафов",
                              "в течение одного года"
                    ],
                    "desc": "Аннулирование из-за повторного привлечения к административной ответственности. Проверяем точные статьи КоАП РФ, даты вступления постановлений в силу и относятся ли нарушения к категориям, прямо указанным в статьях 7 и 9 закона № 115-ФЗ. Не любые два штрафа, включая обычные нарушения ПДД, образуют основание для аннулирования."
          },
          {
                    "tag": "Семья в России",
                    "title": [
                              "В РФ проживают близкие",
                              "родственники и дети —",
                              "граждане Российской Федерации"
                    ],
                    "desc": "Защищаем право на сохранение статуса с опорой на ст. 38 Конституции РФ и позиции Верховного Суда РФ о защите семьи."
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
                  lineHeight: 1.35, 
                  minHeight: '68px',
                  position: 'relative', 
                  zIndex: 1 
                }}>
                  {item.title.map((line, idx) => (
                    <span key={idx} className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                      {line}
                    </span>
                  ))}
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
      {/* ═══ БЛОК: ОТКАЗ И АННУЛИРОВАНИЕ ═══ */}
      <section className="section bg-light" style={{ padding: '64px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 3.5vw, 38px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Отказ и аннулирование:</span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>разные правовые последствия</span>
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.65, margin: 0 }}>
              Отказ означает, что РВП или ВНЖ ещё не были выданы. Аннулирование прекращает уже действующий статус и может повлечь обязанность выехать в течение 15 дней. Поэтому для аннулирования сначала проверяются срочные последствия и меры защиты, а при отказе — мотивировка, документы и возможность административного или судебного обжалования.
            </p>
          </div>
        </div>
      </section>


      
      {/* ═══ БЛОК: ОТКАЗ И АННУЛИРОВАНИЕ ═══ */}
      <section className="section bg-light" style={{ padding: '64px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 3.5vw, 38px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Отказ и аннулирование:</span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>разные правовые последствия</span>
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.65, margin: 0 }}>
              Отказ означает, что РВП или ВНЖ ещё не были выданы. Аннулирование прекращает уже действующий статус и может повлечь обязанность выехать в течение 15 дней. Поэтому для аннулирования сначала проверяются срочные последствия и меры защиты, а при отказе — мотивировка, документы и возможность административного или судебного обжалования.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: КУРАТОР НАПРАВЛЕНИЯ ═══ */}
            {/* ═══ БЛОК КУРАТОР НАПРАВЛЕНИЯ (ТИПОВОЙ) ═══ */}
            {/* ═══ БЛОК КУРАТОР НАПРАВЛЕНИЯ (ТИПОВОЙ) ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name="Дмитрий Сергеевич Конопкин"
        position={<>Адвокат, председатель Коллегии адвокатов «Де-Юре»,<br />куратор направления «Миграционное право»</>}
        imageUrl="/images/konopkin.jpg"
        imagePosition="center 15%"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Дмитрий Сергеевич Конопкин имеет 6-летний опыт следственной работы в Следственном комитете РФ и адвокатскую практику с 2022 года. Курирует миграционные споры, требующие судебного оспаривания актов государственных органов и экстренной защиты доверителей.
          </span>,
          <ul key="2" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Опыт работы в Следственном комитете с 2016 по 2022 год</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>С сентября 2022 года — адвокат</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Реестровый номер 48/812</span>
            </li>
          </ul>,
          <a key="3" href="/specialisty/konopkin-dmitriy-sergeevich/" style={{ display: 'inline-block', marginTop: '16px', fontSize: '14px', color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
            Подробнее о Дмитрии Сергеевиче Конопкине →
          </a>
        ]}
        buttonText="Задать вопрос адвокату"
        buttonHref="#form"
      />

      {/* ═══ БЛОК: ПРИМЕРЫ ИЗ ПРАКТИКИ ═══ */}
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
        subtitle="Прозрачный пошаговый процесс от первичного анализа материалов до контроля исполнения решения."
        alignTitle="center"
        steps={[
          {
            num: '01',
            title: 'Уточняем ситуацию',
            desc: 'Выясняем, какое решение принято, кем и когда, какие документы есть на руках и какая цель стоит перед доверителем.'
          },
          {
            num: '02',
            title: 'Изучаем материалы дела',
            desc: 'Проверяем протоколы, постановления, основания применения мер, миграционную историю и основания для правовой защиты.'
          },
          {
            num: '03',
            title: 'Формируем правовой маршрут',
            desc: 'Определяем досудебный или судебный порядок, оцениваем процессуальные риски, сроки и фиксируем условия работы.'
          },
          {
            num: '04',
            title: 'Защищаем интересы',
            desc: 'Подаём административный иск в суд, заявляем ходатайство о приостановлении 15-дневного срока на выезд и защищаем статус проживания.'
          },
          {
            isBanner: true,
            title: 'Дистанционный формат',
            desc: 'Начать можно дистанционно: направить имеющиеся документы и кратко описать ситуацию. Необходимость личного участия, доверенности или явки определяется индивидуально.'
          }
        ]}
        ctaTitle="Готовы обсудить вашу ситуацию"
        ctaSubtitle="Опишите задачу — адвокат изучит документы и предложит понятный план защиты."
        ctaButtonText="Обсудить ситуацию"
        ctaButtonHref="#form"
      />

      {/* ═══ БЛОК 6: СТОИМОСТЬ ЮРИДИЧЕСКОЙ ПОМОЩИ ═══ */}
      <PricingBlock
        title="Стоимость юридической помощи"
        subtitle="Стоимость зависит от органа-инициатора, стадии рассмотрения, объёма документов и необходимости личного участия адвоката."
        tiers={pricingTiers}
        disclaimer="Стоимость определяется после уточнения задачи и изучения имеющихся документов. Состав услуг, цена и порядок оплаты фиксируются в соглашении до начала работы. Оплата вознаграждения адвоката не зависит от исхода дела и не включает государственные пошлины, нотариальные переводы и сопутствующие расходы."
      />

      {/* ═══ БЛОК 7: FAQ ═══ */}
      <FAQBlock
        superTitle="Частые вопросы клиентов"
        title={
          <>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Ответы на</span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>частые вопросы</span>
          </>
        }
        subtitle="О защите статуса временного и постоянного проживания"
        ctaText="Задать свой вопрос"
        ctaLink="#form"
        faqs={faqs}
      />

      
      {/* ═══ БЛОК: СВЯЗАННЫЕ СИТУАЦИИ ═══ */}
      <section className="section bg-light" style={{ padding: '64px 0', background: 'var(--gradient-cream)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '32px' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px, 3.5vw, 36px)', color: 'var(--color-deep-blue)', marginBottom: '12px', marginTop: 0, lineHeight: 1.2 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Связанные ситуации</span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и смежные услуги</span>
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
              В миграционных делах процедуры часто взаимосвязаны. Ознакомьтесь с правовыми решениями для сопутствующих задач:
            </p>
          </div>
          <div className="grid grid-2" style={{ gap: '20px' }}>

            <a href="/grazhdanam/migracionnyj-yurist/obzhalovanie-resheniya-o-deportacii/" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
              <div className="card hover-lift" style={{ height: '100%', padding: '24px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ margin: '0 0 10px 0', fontSize: '17px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', lineHeight: 1.35 }}>
                    Обжалование решения о депортации
                  </h4>
                  <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    Защита при назначении депортации и применение мер предварительной защиты.
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontSize: '13px', fontWeight: 600, marginTop: '16px' }}>
                  <span>Перейти к услуге</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
            </a>

            <a href="/grazhdanam/migracionnyj-yurist/isklyuchenie-iz-reestra-kontroliruemyh-lic/" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
              <div className="card hover-lift" style={{ height: '100%', padding: '24px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ margin: '0 0 10px 0', fontSize: '17px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', lineHeight: 1.35 }}>
                    Исключение из реестра контролируемых лиц
                  </h4>
                  <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    Снятие ограничений режима высылки после аннулирования документов.
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontSize: '13px', fontWeight: 600, marginTop: '16px' }}>
                  <span>Перейти к услуге</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
            </a>

            <a href="/grazhdanam/migracionnyj-yurist/poluchenie-rvp/" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
              <div className="card hover-lift" style={{ height: '100%', padding: '24px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ margin: '0 0 10px 0', fontSize: '17px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', lineHeight: 1.35 }}>
                    Помощь в получении РВП
                  </h4>
                  <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    Первичное или повторное оформление разрешения на временное проживание.
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontSize: '13px', fontWeight: 600, marginTop: '16px' }}>
                  <span>Перейти к услуге</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
            </a>

            <a href="/grazhdanam/migracionnyj-yurist/poluchenie-vida-na-zhitelstvo/" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
              <div className="card hover-lift" style={{ height: '100%', padding: '24px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ margin: '0 0 10px 0', fontSize: '17px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', lineHeight: 1.35 }}>
                    Помощь в получении вида на жительство (ВНЖ)
                  </h4>
                  <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    Подготовка пакета документов и подача заявления на вид на жительство в РФ.
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontSize: '13px', fontWeight: 600, marginTop: '16px' }}>
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
