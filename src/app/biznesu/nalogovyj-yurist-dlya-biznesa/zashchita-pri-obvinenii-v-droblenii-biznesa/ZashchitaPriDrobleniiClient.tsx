'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MilitaryHero from '@/components/MilitaryHero';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import ProcessBlock from '@/components/ProcessBlock';
import CasesBlock, { CaseData } from '@/components/CasesBlock';
import SpecialistBlock from '@/components/SpecialistBlock';
import PricingBlock, { PricingTier } from '@/components/PricingBlock';

export default function ZashchitaPriDrobleniiClient() {
  const situations = [
    {
      tag: 'Взаимозависимость',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Общие учредители, директора</span> <br />
          <span style={{ display: 'inline-block' }}>или родственные связи</span>
        </span>
      ),
      desc: 'Инспекция считает родственные связи или участие одних лиц в капитале нескольких ООО/ИП безусловным доказательством согласованности с целью ухода от налогов.',
      btnText: 'Опровергнуть связь'
    },
    {
      tag: 'Общая инфраструктура',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Один адрес, общий склад,</span> <br />
          <span style={{ display: 'inline-block' }}>сайт или единый IP-адрес</span>
        </span>
      ),
      desc: 'Совпадение IP-адресов отправки отчетности через банк-клиент, общий телефон или вывеска. Обоснуем техническую и договорную природу общего доступа.',
      btnText: 'Защитить структуру'
    },
    {
      tag: 'Персонал',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Перевод сотрудников</span> <br />
          <span style={{ display: 'inline-block' }}>между компаниями группы</span>
        </span>
      ),
      desc: 'Претензии к формальному распределению штата для соблюдения лимита численности на УСН (до 130 человек) или патенте. Докажем реальность трудовых функций.',
      btnText: 'Обосновать штат'
    },
    {
      tag: 'Сбытовые цепочки',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Торговый дом на спецрежиме</span> <br />
          <span style={{ display: 'inline-block' }}>и производственная база</span>
        </span>
      ),
      desc: 'Обвинение в создании посредника на УСН для аккумулирования наценки. Докажем реальные коммерческие риски, логистику и независимый сбыт.',
      btnText: 'Доказать деловую цель'
    },
    {
      tag: 'Налоговая амнистия',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Налоговая амнистия 2025</span> <br />
          <span style={{ display: 'inline-block' }}>по Закону № 176-ФЗ</span>
        </span>
      ),
      desc: 'Оценим применимость механизма добровольного отказа от дробления: условия списания недоимки, пеней и штрафов за 2022–2024 годы без риска санкций.',
      btnText: 'Амнистия по дроблению'
    },
    {
      tag: 'Уголовный риск',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Риск уголовного дела</span> <br />
          <span style={{ display: 'inline-block' }}>по ст. 199 УК РФ</span>
        </span>
      ),
      desc: 'При консолидации доходов сумма доначисленного НДС и налога на прибыль превышает 18,75 млн ₽. Обеспечиваем уголовно-правовой щит для собственников.',
      btnText: 'Снять уголовный риск'
    }
  ];

  const urgentRisks = [
    {
      title: 'Консолидация выручки всей группы на ОСНО',
      desc: 'ФНС объединяет доходы всех юридических лиц и ИП за 3 года и доначисляет НДС 20% и налог на прибыль 20%, что практически всегда приводит к банкротству бизнеса.'
    },
    {
      title: 'Налоговая амнистия по Федеральному закону № 176-ФЗ',
      desc: 'Государство предоставило механизм списания доначислений по дроблению за 2022–2024 годы при условии добровольного объединения бизнеса и уплаты налогов по ОСНО с 2025 года.'
    },
    {
      title: 'Личная субсидиарная ответственность бенефициаров',
      desc: 'Налоговая задолженность взыскивается солидарно со всех участников группы, а также лично с учредителей и фактических контролирующих лиц (КДЛ).'
    }
  ];

  const directions = [
    {
      num: '01',
      title: 'Аудит бизнес-модели на признаки дробления',
      desc: 'Анализируем договоры, штатные расписания, платежные потоки, IP-адреса и активы группы по 17 критериям недобросовестного дробления ФНС.'
    },
    {
      num: '02',
      title: 'Формирование доказательств деловой цели (Business Purpose)',
      desc: 'Обосновываем экономическую целесообразность создания каждого субъекта: выход на новые рынки, разные категории клиентов, лицензирование, риски.'
    },
    {
      num: '03',
      title: 'Доказывание операционной самостоятельности',
      desc: 'Собираем доказательства наличия собственных производственных мощностей, раздельного складского учета, штата сотрудников и независимых поставщиков.'
    },
    {
      num: '04',
      title: 'Налоговая реконструкция с зачетом уплаченных налогов',
      desc: 'В случае частичного объединения настаиваем на обязательном вычете всех налогов, уже уплаченных участниками группы на спецрежимах (УСН/ПСН).'
    },
    {
      num: '05',
      title: 'Сопровождение применения налоговой амнистии',
      desc: 'Разрабатываем безопасный алгоритм перехода на единую систему налогообложения для гарантированного списания старых налоговых долгов по закону № 176-ФЗ.'
    },
    {
      num: '06',
      title: 'Защита в Арбитражном суде Липецкой области',
      desc: 'Разрушаем доказательственную базу инспекции в суде, доказывая отсутствие единого кошелька и фиктивного перераспределения выручки.'
    }
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Диагностика структуры и претензий ФНС',
      desc: 'Изучаем требования налоговой инспекции, акт проверки или решение с обвинением в создании формальной схемы дробления.'
    },
    {
      num: '02',
      title: 'Сбор доказательств самостоятельности субъектов',
      desc: 'Проводим инвентаризацию активов, трудовых ресурсов, договоров аренды и расчетных счетов каждого юридического лица и ИП группы.'
    },
    {
      num: '03',
      title: 'Разработка экономического обоснования структуры',
      desc: 'Формируем подробную аналитическую записку с доказательствами раздельных коммерческих целей и отсутствия налоговой выгоды как главной цели.'
    },
    {
      num: '04',
      title: 'Подготовка возражений и контррасчета',
      desc: 'Составляем мотивированные возражения на акт проверки со встречным расчетом налоговой базы по правилам налоговой реконструкции.'
    },
    {
      num: '05',
      title: 'Представительство в УФНС и арбитражном суде',
      desc: 'Отстаиваем законность структуры бизнеса на всех уровнях досудебного и судебного обжалования до полной отмены претензий.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Аудит рисков дробления и амнистии',
      subtitle: 'Диагностика группы компаний',
      popular: false,
      price: 'от 30 000 ₽',
      features: [
        { name: 'Проверка структуры по 17 критериям дробления ФНС', value: 'Включено' },
        { name: 'Оценка применимости налоговой амнистии (176-ФЗ)', value: 'Включено' },
        { name: 'Анализ рисков по ст. 199 УК РФ для собственников', value: 'Включено' },
        { name: 'План устранения уязвимостей в переписке и договорах', value: 'Включено' }
      ],
      buttonText: 'Заказать аудит',
      buttonHref: '#form'
    },
    {
      title: 'Возражения и досудебная защита от претензий',
      subtitle: 'Защита на стадии проверки и в УФНС',
      popular: true,
      badgeText: 'Частый выбор',
      price: 'от 60 000 ₽',
      features: [
        { name: 'Сбор доказательств деловой цели и самостоятельности', value: 'Включено' },
        { name: 'Контррасчет недоимки с зачетом уплаченного УСН', value: 'Включено' },
        { name: 'Подготовка мотивированных возражений на акт ВНП', value: 'Включено' },
        { name: 'Очное участие при рассмотрении материалов в ИФНС', value: 'Включено' }
      ],
      buttonText: 'Защитить бизнес',
      buttonHref: '#form'
    },
    {
      title: 'Судебное оспаривание в арбитраже',
      subtitle: 'Защита структуры бизнеса в суде',
      popular: false,
      price: 'от 120 000 ₽',
      features: [
        { name: 'Подготовка и подача иска в арбитражный суд', value: 'Включено' },
        { name: 'Приостановление действия решения ФНС по ст. 199 АПК', value: 'Включено' },
        { name: 'Судебная финансово-экономическая экспертиза', value: 'Включено' },
        { name: 'Полное представительство во всех инстанциях', value: 'Включено' }
      ],
      buttonText: 'Судебная защита',
      buttonHref: '#form'
    }
  ];

  const practiceCases: CaseData[] = [
    {
      category: 'Дробление в производстве и торговле',
      title: 'Отмена доначислений на 42 млн ₽ по группе из 3 компаний',
      problem: 'ФНС объединила выручку завода металлоконструкций и двух торговых домов на УСН, посчитав разделение искусственным ради ухода от НДС.',
      action: 'Доказали различие рынков: завод работал с промышленными холдингами по долгосрочным контрактам, а торговые дома вели розничные продажи физлицам через собственные шоурумы со своим штатом.',
      result: 'Арбитражный суд Липецкой области признал решение ФНС незаконным. Самостоятельность каждого предприятия полностью подтверждена.'
    },
    {
      category: 'Налоговая реконструкция',
      title: 'Зачет налогов участников группы и снижение требований на 26 млн ₽',
      problem: 'Инспекция доначислила ресторанному холдингу налог на прибыль без учета того, что участники группы добросовестно платили налог по УСН 15%.',
      action: 'В суде настояли на применении позиции Президиума ВС РФ по делу ООО «Монтаж-Строй»: обязали инспекцию учесть все фактически уплаченные налоги.',
      result: 'Итоговая сумма налоговых претензий снижена с 38 млн ₽ до 12 млн ₽, штрафы и пени пересчитаны пропорционально.'
    },
    {
      category: 'Применение налоговой амнистии',
      title: 'Сопровождение добровольного отказа от дробления со списанием 18 млн ₽',
      problem: 'Сеть автосервисов получила уведомление о риске выездной налоговой проверки по признакам дробления между четырьмя ИП.',
      action: 'Разработали дорожную карту перехода на ОСНО в рамках закона № 176-ФЗ: консолидировали активы в одно ООО, подтвердили добросовестный отказ от схемы.',
      result: 'Налоговый орган закрыл предпроверочный анализ. Все риски доначислений за прошлые 3 года полностью аннулированы в силу закона.'
    }
  ];

  const faqs = [
    {
      q: 'Что считается законным разделением бизнеса, а что незаконным дроблением?',
      a: 'Законное разделение бизнеса обусловлено реальной деловой целью (разные виды деятельности, лицензирование, территориальная экспансия, разделение рисков). Незаконное дробление преследует исключительно получение необоснованной налоговой выгоды за счет сохранения льготных спецрежимов (УСН, ПСН).'
    },
    {
      q: 'Является ли наличие родственников среди директоров признаком дробления?',
      a: 'Взаимозависимость лиц (включая супругов, родителей и детей по ст. 105.1 НК РФ) сама по себе не является доказательством дробления. Верховный Суд РФ неоднократно подчеркивал, что взаимозависимость имеет значение только в совокупности с доказательствами несамостоятельности участников (общий счет, общий штат, единый орган управления).'
    },
    {
      q: 'Как работает налоговая амнистия по дроблению бизнеса в 2025 году?',
      a: 'Согласно ст. 6 Федерального закона № 176-ФЗ, для налогоплательщиков, добровольно отказавшихся от дробления бизнеса с налогового периода 2025 года, суммы налогов, пеней и штрафов по решениям за 2022–2024 годы не взыскиваются и подлежат списанию.'
    },
    {
      q: 'Обязана ли ФНС учитывать налоги, уплаченные на УСН, при консолидации доходов?',
      a: 'Да. Согласно утвержденной судебной практике ВС РФ, инспекция обязана уменьшить сумму доначисленного налога на прибыль и НДС на суммы налогов, которые уже были фактически уплачены участниками схемы по упрощенной системе налогообложения.'
    },
    {
      q: 'Могут ли арестовать личное имущество учредителей при претензиях по дроблению?',
      a: 'Да. Налоговые органы активно используют механизмы пп. 2 п. 2 ст. 45 НК РФ (взыскание задолженности с взаимозависимых лиц) и привлекают фактических бенефициаров к субсидиарной ответственности в порядке банкротства.'
    },
    {
      q: 'Как доказать реальную самостоятельность компаний группы?',
      a: 'Необходимо предоставить документы, подтверждающие раздельное несение расходов: договоры аренды независимых офисов/складов, раздельные кассовые аппараты, собственный штат сотрудников с трудовыми договорами, независимые договоры с контрагентами и раздельное управление счетами.'
    }
  ];

  return (
    <main>
      <Header />

      {/* ═══ БЛОК 1: HERO ═══ */}
      <MilitaryHero
        breadcrumbs={
          <>
            <Link href="/">Главная</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/biznesu/">Бизнесу</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/biznesu/nalogovyj-yurist-dlya-biznesa/">Налоговый юрист для бизнеса</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Защита при дроблении бизнеса</span>
          </>
        }
        superTitle={
          <span style={{ whiteSpace: 'normal', display: 'inline-block', lineHeight: 1.4 }}>
            <span style={{ display: 'inline-block' }}>НАЛОГОВЫЕ ПРОВЕРКИ И СПОРЫ •</span> <br />
            <span style={{ display: 'inline-block' }}>Липецк и Липецкая область</span>
          </span>
        }
        title={
          <span style={{ display: 'block' }}>
            <span style={{ display: 'inline-block' }}>Защита при обвинении</span> <br />
            <span style={{ display: 'inline-block', color: 'var(--color-gold)' }}>в дроблении бизнеса в Липецке</span>
          </span>
        }
        subtitle="Проанализируем доказательства и признаки искусственного разделения компаний, обоснуем деловую цель структуры, защитим интересы бизнеса в проверке, УФНС и суде."
        trustItems={[
          'Опровергнем критерии формального дробления и единого бенефициара',
          'Докажем реальную деловую цель, раздельный персонал и активы',
          'Проверим условия применения налоговой амнистии по дроблению бизнеса',
          'Контррасчет недоимки с учетом налогов, уже уплаченных участниками группы'
        ]}
        primaryCtaText="Обсудить дробление бизнеса"
        primaryCtaLink="#form"
        secondaryCtaText="Риски и амнистия"
        secondaryCtaLink="#urgent"
      />

      {/* ═══ БЛОК 2: СИТУАЦИИ ═══ */}
      <section id="situations" style={{ padding: '60px 0', background: 'var(--color-bg-light)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span
              style={{
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--color-gold)',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}
            >
              ПРИЗНАКИ И ПРЕТЕНЗИИ ФНС
            </span>
            <h2
              style={{
                fontSize: '32px',
                fontWeight: 800,
                color: 'var(--color-text-main)',
                marginTop: '8px',
                marginBottom: '12px'
              }}
            >
              С какими признаками дробления к нам обращаются
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', maxWidth: '750px', margin: '0 auto' }}>
              Взаимозависимость или общий ресурс сами по себе не доказывают наличие схемы. Главное — подтвердить самостоятельность и деловую цель.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px'
            }}
          >
            {situations.map((sit, idx) => (
              <div
                key={idx}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)',
                  padding: '28px',
                  borderRadius: '12px',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
                  border: '1px solid rgba(0,0,0,0.06)',
                  borderTop: '3px solid var(--color-gold)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-10px',
                    width: '70px',
                    height: '70px',
                    opacity: 0.04,
                    pointerEvents: 'none'
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                  </svg>
                </div>

                <div>
                  <div
                    style={{
                      display: 'inline-block',
                      fontSize: '11px',
                      fontWeight: 700,
                      color: 'var(--color-gold)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      background: 'rgba(218, 165, 32, 0.1)',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      marginBottom: '14px'
                    }}
                  >
                    {sit.tag}
                  </div>
                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      color: 'var(--color-text-main)',
                      marginBottom: '12px',
                      lineHeight: '1.3'
                    }}
                  >
                    {sit.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '14px',
                      color: 'var(--color-text-secondary)',
                      lineHeight: '1.5',
                      marginBottom: '20px'
                    }}
                  >
                    {sit.desc}
                  </p>
                </div>

                <a
                  href="#form"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--color-deep-blue)',
                    textDecoration: 'none',
                    borderBottom: '1px dashed var(--color-deep-blue)',
                    width: 'fit-content',
                    paddingBottom: '2px'
                  }}
                >
                  {sit.btnText} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: РИСКИ И НАЛОГОВАЯ АМНИСТИЯ ═══ */}
      <section
        id="urgent"
        style={{
          padding: '70px 0',
          background: 'var(--color-deep-blue)',
          color: '#ffffff',
          position: 'relative'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span
              style={{
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--color-gold)',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}
            >
              РИСКИ И ПРАВОВЫЕ ВОЗМОЖНОСТИ
            </span>
            <h2
              style={{
                fontSize: '32px',
                fontWeight: 800,
                color: '#ffffff',
                marginTop: '8px',
                marginBottom: '12px'
              }}
            >
              Ключевые риски и налоговая амнистия 2025 года
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)', maxWidth: '800px', margin: '0 auto' }}>
              Консолидация выручки группы способна уничтожить рентабельность, однако новые законы дают шанс безопасного урегулирования.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
              marginBottom: '40px'
            }}
          >
            {urgentRisks.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '12px',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'rgba(218, 165, 32, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-gold)',
                      fontWeight: 700,
                      fontSize: '14px'
                    }}
                  >
                    !
                  </div>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                    {item.title}
                  </h3>
                </div>
                <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              background: 'rgba(0,0,0,0.25)',
              borderRadius: '12px',
              padding: '24px',
              borderLeft: '4px solid var(--color-gold)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '20px'
            }}
          >
            <div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                ФНС предъявила претензии к структуре группы компаний или ИП?
              </div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)' }}>
                Оценим применимость налоговой амнистии и выстроим правовую защиту структуры.
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href="tel:+74742201525"
                style={{
                  fontSize: '18px',
                  fontWeight: 800,
                  color: 'var(--color-gold)',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap'
                }}
              >
                +7 (4742) 20-15-25
              </a>
              <a
                href="#form"
                style={{
                  background: 'var(--color-gold)',
                  color: '#ffffff',
                  padding: '12px 24px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  whiteSpace: 'nowrap'
                }}
              >
                Срочная консультация
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: МЕТОДЫ ЗАЩИТЫ ═══ */}
      <section id="directions" style={{ padding: '60px 0', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span
              style={{
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--color-gold)',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}
            >
              СТРАТЕГИЯ ЗАЩИТЫ
            </span>
            <h2
              style={{
                fontSize: '32px',
                fontWeight: 800,
                color: 'var(--color-text-main)',
                marginTop: '8px',
                marginBottom: '12px'
              }}
            >
              Что входит в юридическую помощь при дроблении
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', maxWidth: '750px', margin: '0 auto' }}>
              Разрабатываем доказательственную базу реальности и самостоятельности каждого участника группы.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px'
            }}
          >
            {directions.map((dir, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--color-bg-light)',
                  borderRadius: '12px',
                  padding: '28px',
                  border: '1px solid rgba(0,0,0,0.06)',
                  display: 'flex',
                  gap: '16px'
                }}
              >
                <div
                  style={{
                    fontSize: '22px',
                    fontWeight: 900,
                    color: 'var(--color-gold)',
                    lineHeight: 1
                  }}
                >
                  {dir.num}
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: '17px',
                      fontWeight: 700,
                      color: 'var(--color-text-main)',
                      marginBottom: '8px',
                      lineHeight: 1.3
                    }}
                  >
                    {dir.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '14px',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.5,
                      margin: 0
                    }}
                  >
                    {dir.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 5: ЭТАПЫ РАБОТЫ ═══ */}
      <ProcessBlock
        title="Как проходит защита при обвинении в дроблении"
        steps={processSteps}
      />

      {/* ═══ БЛОК 6: КУРАТОР (SPECIALISTBLOCK) ═══ */}
      <SpecialistBlock
        title="Куратор направления — Аркадий Евгеньевич Бобкин"
        name="Аркадий Евгеньевич Бобкин"
        position={<>Директор, управляющий партнёр ЮК «Де-Юре»,<br />куратор направления «Налоговые проверки и споры»</>}
        imageUrl="/images/bobkin.jpg"
        imagePosition="center 15%"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Аркадий Евгеньевич курирует защиту бизнеса по делам об искусственном дроблении: организует комплексный правовой аудит взаимосвязей группы, доказательственную базу раздельной деловой цели и координирует налоговых юристов, экономистов и адвокатов.
          </span>,
          <div
            key="2"
            style={{
              borderLeft: '3px solid var(--color-gold)',
              paddingLeft: '16px',
              fontStyle: 'italic',
              fontSize: '14.5px',
              color: 'var(--color-deep-blue)',
              margin: '16px 0 0 0'
            }}
          >
            «В спорах о дроблении побеждает тот, кто докажет суду: компании создавались не ради экономии на налогах, а для решения реальных коммерческих задач».
          </div>,
          <ul key="3" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>22 года в следственных подразделениях налоговой полиции и МВД РФ</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>Практический опыт защиты производственных холдингов и торговых сетей региона</span>
            </li>
          </ul>,
          <a key="4" href="/specialisty/bobkin-arkadiy-evgenevich/" style={{ display: 'inline-block', marginTop: '16px', fontSize: '14px', color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
            Подробнее об опыте куратора →
          </a>
        ]}
        buttonText="Задать вопрос куратору"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 7: ЦЕНЫ ═══ */}
      <PricingBlock
        title="Стоимость защиты при обвинении в дроблении"
        subtitle="Цена фиксируется в договоре и зависит от количества юридических лиц и ИП в структуре и объема доначислений"
        tiers={pricingTiers}
      />

      {/* ═══ БЛОК 8: КЕЙСЫ ═══ */}
      <CasesBlock
        title="Практика по делам о дроблении бизнеса"
        subtitle="Примеры защиты структуры холдингов, торговых сетей и применения налоговой амнистии"
        cases={practiceCases}
      />

      {/* ═══ БЛОК 9: FAQ ═══ */}
      <FAQBlock items={faqs} />

      {/* ═══ БЛОК 10: СВЯЗАННЫЕ УСЛУГИ ═══ */}
      <section style={{ padding: '60px 0', background: 'var(--color-bg-light)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2
            style={{
              fontSize: '26px',
              fontWeight: 800,
              color: 'var(--color-text-main)',
              marginBottom: '24px',
              textAlign: 'center'
            }}
          >
            Связанные налоговые услуги
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '16px'
            }}
          >
            <Link
              href="/biznesu/nalogovyj-yurist-dlya-biznesa/"
              style={{
                background: '#ffffff',
                padding: '20px',
                borderRadius: '8px',
                textDecoration: 'none',
                color: 'var(--color-text-main)',
                border: '1px solid rgba(0,0,0,0.06)',
                fontWeight: 600,
                fontSize: '15px',
                display: 'block'
              }}
            >
              ← Все услуги налогового юриста
            </Link>
            <Link
              href="/biznesu/nalogovyj-yurist-dlya-biznesa/soprovozhdenie-nalogovyh-proverok/"
              style={{
                background: '#ffffff',
                padding: '20px',
                borderRadius: '8px',
                textDecoration: 'none',
                color: 'var(--color-text-main)',
                border: '1px solid rgba(0,0,0,0.06)',
                fontWeight: 600,
                fontSize: '15px',
                display: 'block'
              }}
            >
              Сопровождение налоговых проверок →
            </Link>
            <Link
              href="/biznesu/nalogovyj-yurist-dlya-biznesa/osparivanie-donachislenij-i-reshenij-fns/"
              style={{
                background: '#ffffff',
                padding: '20px',
                borderRadius: '8px',
                textDecoration: 'none',
                color: 'var(--color-text-main)',
                border: '1px solid rgba(0,0,0,0.06)',
                fontWeight: 600,
                fontSize: '15px',
                display: 'block'
              }}
            >
              Оспаривание решений ФНС →
            </Link>
            <Link
              href="/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-nalogovym-prestupleniyam/"
              style={{
                background: '#ffffff',
                padding: '20px',
                borderRadius: '8px',
                textDecoration: 'none',
                color: 'var(--color-text-main)',
                border: '1px solid rgba(0,0,0,0.06)',
                fontWeight: 600,
                fontSize: '15px',
                display: 'block'
              }}
            >
              Защита по ст. 199 УК РФ →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 11: ФОРМА И КОНТАКТЫ ═══ */}
      <section id="form" style={{ padding: '70px 0', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
              alignItems: 'start'
            }}
          >
            <div>
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  color: 'var(--color-gold)',
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}
              >
                КОНФИДЕНЦИАЛЬНЫЙ АНАЛИЗ СТРУКТУРЫ
              </span>
              <h2
                style={{
                  fontSize: '32px',
                  fontWeight: 800,
                  color: 'var(--color-text-main)',
                  marginTop: '8px',
                  marginBottom: '16px'
                }}
              >
                Обсудите риски дробления с экспертом
              </h2>
              <p
                style={{
                  fontSize: '15px',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '24px'
                }}
              >
                Кратко опишите, какие компании входят в группу, на какой стадии находится взаимодействие с налоговой инспекцией и какие требования предъявлены. Мы свяжемся с вами для согласования конфиденциальной встречи.
              </p>
              <div
                style={{
                  background: 'var(--color-bg-light)',
                  padding: '20px',
                  borderRadius: '8px',
                  borderLeft: '4px solid var(--color-gold)',
                  marginBottom: '24px'
                }}
              >
                <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--color-deep-blue)' }}>
                  Строгая коммерческая тайна
                </div>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>
                  Любые данные о структуре бизнеса, выручке и аффилированных лицах не передаются третьим лицам.
                </div>
              </div>
              <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
                Офис в Липецке: <strong>ул. Советская, д. 35, оф. 213</strong>
                <br />
                Телефон для связи: <strong>+7 (4742) 20-15-25</strong>
              </div>
            </div>

            <div
              style={{
                background: 'var(--color-bg-light)',
                padding: '32px',
                borderRadius: '12px',
                border: '1px solid rgba(0,0,0,0.08)'
              }}
            >
              <ContactsForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
