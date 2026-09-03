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
    "category": "Гражданство по родителям / 138-ФЗ",
    "title": "Успешный приём в гражданство РФ по родителям — гражданам России",
    "problem": "Доверитель проживал в Липецке по ВНЖ и имел нетрудоспособную мать — гражданку РФ. Требовалось оформить гражданство по новому Федеральному закону № 138-ФЗ.",
    "action": "Сформировали пакет документов по нормам 138-ФЗ, подтвердили родство архивными справками ЗАГС, заполнили заявление и сопроводили подачу в УМВД.",
    "result": "Решение о приёме в гражданство принято за 3 месяца, доверитель успешно принёс Присягу и получил паспорт гражданина РФ."
  },
  {
    "category": "Брак и дети / Льготный порядок",
    "title": "Приём в гражданство РФ по браку и общему ребёнку по 138-ФЗ",
    "problem": "Супруги состоят в браке 3 года, воспитывают общего несовершеннолетнего ребёнка — гражданина РФ. Требовалось пройти процедуру без возвратов и задержек.",
    "action": "Проверили пакет документов, подтвердили совместное проживание и отсутствие миграционных нарушений, организовали подачу заявления в миграционный орган.",
    "result": "Заявление удовлетворено в полном объёме, доверитель получил паспорт гражданина РФ."
  },
  {
    "category": "Госпрограмма / Переселение",
    "title": "Оформление гражданства РФ для участников Госпрограммы переселения",
    "problem": "Семья из трёх человек переехала в Липецкую область по Госпрограмме добровольного переселения соотечественников. Требовалось полное сопровождение от РВП до паспорта РФ.",
    "action": "Подготовили пакеты документов на всех членов семьи, сопроводили получение компенсаций и подачу на гражданство без очередей и возвратов.",
    "result": "Вся семья получила гражданство РФ в ускоренном порядке и оформила внутренние паспорта РФ."
  }
];
    const faqs = [
  {
    "q": "Чем общий порядок отличается от специальных оснований?",
    "a": "Общий порядок (ст. 15 закона № 138-ФЗ) требует 5 лет непрерывного постоянного проживания в РФ по ВНЖ, владения русским языком, знания истории и основ законодательства. Специальные основания (ст. 16 закона № 138-ФЗ) позволяют претендовать на гражданство без соблюдения пятилетнего срока проживания при наличии предусмотренных законом семейных, образовательных или иных оснований."
  },
  {
    "q": "Можно ли получить гражданство по совершеннолетнему ребёнку?",
    "a": "Да, наличие совершеннолетнего дееспособного сына или дочери — гражданина РФ, постоянно проживающего в России, является специальным основанием по п. 2 ч. 1 ст. 16 закона № 138-ФЗ. При этом заявитель должен постоянно проживать в РФ по ВНЖ и соответствовать общим критериям, если для него не установлены изъятия."
  },
  {
    "q": "Что даёт родитель — гражданин РФ?",
    "a": "Наличие хотя бы одного родителя (усыновителя) — гражданина РФ, постоянно проживающего на территории России, даёт право на приём в гражданство по специальному основанию (п. 1 ч. 1 ст. 16 закона № 138-ФЗ) без соблюдения пятилетнего срока проживания по ВНЖ."
  },
  {
    "q": "Достаточно ли рождения в СССР?",
    "a": "Само по себе рождение в СССР или наличие гражданства СССР в прошлом не является безусловным самостоятельным основанием. Закон требует наличия дополнительных юридических фактов: рождения именно на территории РСФСР, постоянного проживания в РФ, наличия ВНЖ или участия в специальных программах."
  },
  {
    "q": "Какие документы нужны для подтверждения родства и изменения ФИО?",
    "a": "Требуются официальные свидетельства или справки органов ЗАГС: свидетельства о рождении, заключении или расторжении брака, перемене имени, архивные выписки. Документы, выданные иностранными государствами, должны быть легализованы (апостилированы) и переведены на русский язык с нотариальным удостоверением."
  },
  {
    "q": "Кто освобождается от подтверждения знания русского языка, истории и основ права?",
    "a": "Требования о владении русским языком, знании истории России и основ законодательства не применяются к заявителям, достигшим 70 лет, и к инвалидам I группы. Для отдельных специальных категорий действуют дополнительные освобождения, которые проверяются по применимой части статьи 16 закона № 138-ФЗ."
  },
  {
    "q": "Что происходит, если Присяга не принесена в установленный срок?",
    "a": "В соответствии с законом № 138-ФЗ решение о приёме в гражданство вступает в силу со дня принесения Присяги. Если лицо без уважительных причин не приносит Присягу в течение одного года со дня принятия решения, такое решение считается недействительным и отменяется."
  },
  {
    "q": "Чем приём в гражданство отличается от признания гражданином?",
    "a": "Приём в гражданство — это процедура приобретения гражданства иностранцем или лицом без гражданства по волеизъявлению и решению уполномоченного органа. Признание гражданином — это юридическое подтверждение того, что лицо уже являлось гражданином РФ в силу закона на определённую историческую дату."
  },
  {
    "q": "Какие обстоятельства могут привести к отклонению заявления?",
    "a": "Статья 18 закона № 138-ФЗ устанавливает исчерпывающий перечень оснований отклонения: выступление за насильственное изменение конституционного строя РФ, участие в экстремистской деятельности, наличие неснятой или непогашенной судимости за умышленные преступления, предоставление подложных документов или заведомо ложных сведений, а также несоблюдение установленных законом условий."
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
    "popular": true,
    "badgeText": "Популярно",
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
              гражданства
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Российской Федерации
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
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Чтобы проверить</span> <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>основание и документы до подачи, позвоните: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (910) 350-31-11</a>
            </span>
          </span>
        }
        trustItems={[
          {
            text: (
              <>
                <span style={{ display: 'block' }}>Работа по новому Федеральному закону</span>
                <span style={{ display: 'block', whiteSpace: 'nowrap' }}>№ 138-ФЗ «О гражданстве РФ»</span>
              </>
            )
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
                    "tag": "По родителям",
                    "title": [
                              "Родители имеют статус",
                              "и постоянное гражданство",
                              "Российской Федерации"
                    ],
                    "desc": "Оформляем гражданство в упрощённом порядке по восходящей линии без необходимости соблюдения пятилетнего срока проживания."
          },
          {
                    "tag": "Брак и общие дети",
                    "title": [
                              "Официальный брак с гражданином",
                              "Российской Федерации",
                              "при наличии общего ребёнка"
                    ],
                    "desc": "Собираем доказательства совместного проживания, готовим заявление и сопровождаем подачу документов в миграционные органы."
          },
          {
                    "tag": "Диплом РФ и стаж",
                    "title": [
                              "Окончание ВУЗа в РФ",
                              "с получением диплома",
                              "и официальный трудовой стаж"
                    ],
                    "desc": "Подтверждаем профессиональную деятельность, аккредитацию образовательной программы и стаж работы по специальности."
          },
          {
                    "tag": "Общий порядок",
                    "title": [
                              "Постоянное проживание",
                              "по виду на жительство (ВНЖ)",
                              "в течение 5 лет в России"
                    ],
                    "desc": "Проверяем пять лет постоянного проживания по ВНЖ, владение русским языком, знание истории России и основ законодательства, а также отсутствие оснований отклонения заявления по статье 18 закона № 138-ФЗ. Для специальных категорий часть требований может не применяться."
          },
          {
                    "tag": "Участники Госпрограммы",
                    "title": [
                              "Переселение в Липецк",
                              "по Государственной программе",
                              "соотечественников за рубежом"
                    ],
                    "desc": "Помогаем с оформлением свидетельства участника Госпрограммы, регистрацией по месту жительства и ускоренным получением паспорта РФ."
          },
          {
                    "tag": "По взрослым детям",
                    "title": [
                              "Совершеннолетний",
                              "сын или дочь —",
                              "гражданин РФ"
                    ],
                    "desc": "Проверяем гражданство и проживание ребёнка в России, родство, изменения ФИО и требование к постоянному проживанию заявителя. Наличие взрослого ребёнка может быть специальным основанием, но не отменяет проверку остальных условий соответствующей части статьи 16."
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
        subtitle={<><span style={{ display: 'inline-block' }}>Прозрачный пошаговый процесс от первичного анализа материалов</span> <br /><span style={{ display: 'inline-block' }}>до контроля исполнения решения.</span></>}
        alignTitle="center"
        steps={[
          {
            num: '01',
            title: 'Определяем процедуру',
            desc: 'Определяем процедуру: приём в гражданство РФ, оформление гражданства ребёнка, признание гражданином или подтверждение наличия гражданства.'
          },
          {
            num: '02',
            title: 'Проверяем ВНЖ и специальные основания',
            desc: 'Проверяем действительность ВНЖ, срок проживания и основания по ст. 16 закона № 138-ФЗ (родственники, брак, образование).'
          },
          {
            num: '03',
            title: 'Формируем доказательственную базу',
            desc: 'Формируем доказательственную цепочку родства, подтверждаем документы ЗАГС и проверяем отсутствие оснований отклонения по ст. 18 закона № 138-ФЗ.'
          },
          {
            num: '04',
            title: 'Сопровождаем подачу и Присягу',
            desc: 'Готовим заявление по форме МВД, координируем подачу, ответы на запросы ведомств и процедуру принесения Присяги.'
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
        subtitle="О приёме в гражданство РФ по закону № 138-ФЗ"
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
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                В миграционных делах процедуры часто взаимосвязаны.
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                Ознакомьтесь с правовыми решениями для сопутствующих задач:
              </span>
            </p>
          </div>
          <div className="grid grid-2" style={{ gap: '20px' }}>

            <a href="/grazhdanam/migracionnyj-yurist/poluchenie-rvp/" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
              <div className="card related-service-card hover-lift" style={{ height: '100%', padding: '24px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ margin: '0 0 10px 0', fontSize: '17px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', lineHeight: 1.35 }}>
                    Помощь в получении РВП
                  </h4>
                  <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    Начальный этап легализации — получение разрешения на временное проживание.
                  </p>
                </div>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontSize: '13px', fontWeight: 600, marginTop: '16px' }}>
                  <span>Перейти к услуге</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
            </a>

            <a href="/grazhdanam/migracionnyj-yurist/poluchenie-vida-na-zhitelstvo/" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
              <div className="card related-service-card hover-lift" style={{ height: '100%', padding: '24px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ margin: '0 0 10px 0', fontSize: '17px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', lineHeight: 1.35 }}>
                    Помощь в получении вида на жительство (ВНЖ)
                  </h4>
                  <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    Оформление ВНЖ как обязательного условия для вступления в гражданство РФ.
                  </p>
                </div>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontSize: '13px', fontWeight: 600, marginTop: '16px' }}>
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
                  { name: 'source_page', value: '/grazhdanam/migracionnyj-yurist/poluchenie-grazhdanstva-rf/' },
                  { name: 'direction', value: 'poluchenie_grazhdanstva' },
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
