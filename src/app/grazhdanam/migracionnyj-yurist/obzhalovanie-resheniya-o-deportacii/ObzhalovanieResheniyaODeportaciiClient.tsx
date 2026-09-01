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
            Оспорим распоряжение МВД о депортации в суде в порядке КАС РФ, добьёмся наложения мер предварительной защиты для приостановления выезда и защитим право на проживание в РФ.
          </span>
        }
        primaryCtaText="Обсудить ситуацию"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_cta_deportaciya"
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
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Каждая миграционная процедура требует индивидуальной проверки оснований, точного соблюдения регламентов и сроков обжалования.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {[
          {
                    "tag": "Распоряжение МВД",
                    "title": [
                              "Получено решение МВД",
                              "о принудительной высылке",
                              "и депортации за пределы РФ"
                    ],
                    "desc": "Оспариваем решение руководителя территориального органа МВД по КАС РФ и заявляем ходатайство о незамедлительной приостановке депортации."
          },
          {
                    "tag": "После наказания",
                    "title": [
                              "Депортация после отбытия",
                              "уголовного наказания",
                              "в учреждениях ФСИН России"
                    ],
                    "desc": "Проверяем основания применения депортации, оцениваем семейные связи, наличие жилья и работы на территории Российской Федерации."
          },
          {
                    "tag": "Аннулирование статуса",
                    "title": [
                              "Депортация из-за отказа",
                              "в продлении или отмены",
                              "РВП, ВНЖ или статуса беженца"
                    ],
                    "desc": "Оспариваем первопричину — акт об аннулировании статуса, что автоматически блокирует исполнение распоряжения о депортации."
          },
          {
                    "tag": "Срочная защита",
                    "title": [
                              "Необходимость срочной",
                              "заморозки выдворения",
                              "до рассмотрения иска судом"
                    ],
                    "desc": "Подаём заявление о мерах предварительной защиты по ст. 85 КАС РФ для законного нахождения доверителя в РФ на время разбирательства."
          },
          {
                    "tag": "Семья и дети в РФ",
                    "title": [
                              "В России проживают дети",
                              "или законный супруг —",
                              "граждане Российской Федерации"
                    ],
                    "desc": "Доказываем, что депортация приведёт к разрушению семьи и нарушению конституционных прав несовершеннолетних граждан России."
          },
          {
                    "tag": "Помещение в ЦВСИГ",
                    "title": [
                              "Иностранца поместили",
                              "в центр содержания (ЦВСИГ)",
                              "до исполнения депортации"
                    ],
                    "desc": "Подаём административную жалобу на незаконное содержание в спецучреждении и добиваемся освобождения под судебный контроль."
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
            desc: 'Оспариваем решение МВД в порядке КАС РФ с ходатайством о мерах предварительной защиты для законного приостановления выезда.'
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
        subtitle="Об оспаривании распоряжений МВД о депортации"
        ctaText="Задать свой вопрос"
        ctaLink="#form"
        faqs={faqs}
      />

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
                Все сведения и документы защищены профессиональной адвокатской тайной. Безопасный способ передачи документов согласуем после первичного контакта.
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
