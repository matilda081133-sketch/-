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
              Обжалование нежелательности
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              пребывания в РФ (ст. 25.10)
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
              Если требуется
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              срочная помощь юриста, позвоните: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (910) 350-31-11</a>
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
      {/* ═══ БЛОК: СРОКИ И ПРЕДВАРИТЕЛЬНАЯ ЗАЩИТА ═══ */}
      <section className="section bg-light" style={{ padding: '48px 0', background: 'var(--gradient-cream)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto', background: 'var(--color-white)', padding: '24px 28px', borderLeft: '4px solid var(--color-primary)', boxShadow: '0 2px 12px rgba(23, 50, 77, 0.05)' }}>
            <h3 style={{ margin: '0 0 10px 0', fontSize: '18px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)' }}>Сроки обжалования и меры предварительной защиты</h3>
            <p style={{ margin: 0, fontSize: '15px', color: 'var(--color-deep-blue)', opacity: 0.9, lineHeight: 1.6 }}>
              Для обращения в суд обычно применяется трёхмесячный срок со дня, когда человек узнал или должен был узнать о нарушении права, если специальная норма не устанавливает иное. Жалоба в ведомство и административный иск сами по себе не приостанавливают последствия решения. При риске срочного исполнения отдельно оцениваются меры предварительной защиты.
            </p>
          </div>
        </div>
      </section>


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
                    "tag": "Судимость и соразмерность",
                    "title": [
                              "Погашение судимости",
                              "и оценка соразмерности",
                              "принятого решения"
                    ],
                    "desc": "Погашение судимости, поведение после освобождения, отсутствие новых нарушений и семейные связи могут иметь значение при оценке актуальной угрозы и соразмерности решения. Одного погашения судимости недостаточно для гарантированной отмены."
          },
          {
                    "tag": "Роспотребнадзор",
                    "title": [
                              "Решение из-за диагноза",
                              "или медицинского заключения",
                              "органов Роспотребнадзора"
                    ],
                    "desc": "Доказываем успешное прохождение лечения, отсутствие эпидемиологической угрозы и наличие близких родственников — граждан РФ."
          },
          {
                    "tag": "ФСБ / Безопасность",
                    "title": [
                              "Решение по соображениям",
                              "государственной безопасности",
                              "со стороны органов ФСБ"
                    ],
                    "desc": "Определяем компетентный суд, истребуем доступные материалы и формируем позицию с учётом возможного ограничения доступа к отдельным сведениям. При необходимости последовательно используем апелляционное и кассационное обжалование."
          },
          {
                    "tag": "Бессрочный запрет",
                    "title": [
                              "Пожизненный бессрочный",
                              "запрет на въезд в Россию",
                              "без установленного срока"
                    ],
                    "desc": "Добиваемся в суде отмены бессрочного характера ограничений со ссылками на правовые позиции Конституционного Суда РФ."
          },
          {
                    "tag": "Семья в России",
                    "title": [
                              "В РФ постоянно проживают",
                              "супруг, родители или дети —",
                              "граждане Российской Федерации"
                    ],
                    "desc": "Обосновываем несоразмерность вмешательства в семейную жизнь с учётом статьи 38 Конституции РФ, интересов несовершеннолетних детей и актуальной практики российских судов."
          },
          {
                    "tag": "Контрактная служба / СВО",
                    "title": [
                              "Контрактная служба",
                              "или участие в боевых",
                              "действиях (с 26.06.2026)"
                    ],
                    "desc": "С 26 июня 2026 года для отдельных действующих контрактных военнослужащих и бывших контрактников, участвовавших в боевых действиях, действуют специальные ограничения на принятие решений о нежелательности пребывания. Для решений, принятых начиная с 24 февраля 2022 года, предусмотрены переходные правила прекращения исполнения. Необходимо подтвердить соответствие каждому установленному законом критерию."
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
            desc: 'Подаём административный иск к Минюсту, МВД или ФСБ, доказываем несоразмерность меры и наличие устойчивых семейных связей.'
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
        subtitle="Об отмене решений по ст. 25.10 114-ФЗ"
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
