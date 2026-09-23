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
      title: 'Налоговая амнистия при дроблении бизнеса по Закону № 176-ФЗ',
      desc: 'Проверим условия применения налоговой амнистии и добьёмся прекращения обязанности по уплате налогов, пеней и штрафов за 2022–2024 годы, если бизнес выполнил установленные законом требования добровольного отказа от дробления в 2025–2026 годах.',
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
      desc: 'Если размер неисполненной налоговой обязанности достигает крупного размера и ФНС усматривает признаки умышленного уклонения, возникает риск уголовного дела по ст. 199 УК РФ. Согласуем налоговую позицию с уголовно-правовой защитой и снизим риски для руководителей и собственников.',
      btnText: 'Снять уголовный риск',
      link: 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-nalogovym-prestupleniyam/'
    }
  ];

  const urgentRisks = [
    {
      title: 'Консолидация выручки всей группы на ОСНО',
      desc: 'ФНС может объединить показатели участников и пересчитать налоговые обязательства так, как если бы деятельность велась единым хозяйствующим субъектом. Это может привести к крупным доначислениям, блокировке оборотных средств и угрозе финансовой устойчивости бизнеса.'
    },
    {
      title: 'Налоговая амнистия по Федеральному закону № 176-ФЗ',
      desc: 'Закон предусматривает прекращение обязанности по уплате связанных с дроблением налогов, пеней и штрафов за 2022–2024 годы при соблюдении условий добровольного отказа от дробления в 2025–2026 годах. Объединение компаний и переход на ОСНО — не единственные возможные способы отказа.'
    },
    {
      title: 'Личная субсидиарная ответственность бенефициаров',
      desc: 'При наличии предусмотренных законом оснований ФНС может добиваться взыскания задолженности с взаимозависимых лиц, а при банкротстве — привлечения руководителей, учредителей и фактических контролирующих лиц к субсидиарной ответственности.'
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
      desc: 'Определим допустимый способ отказа от дробления и сопроводим выполнение условий, необходимых для прекращения обязанности по уплате налогов, пеней и штрафов по Закону № 176-ФЗ.'
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
      q: 'Как работает налоговая амнистия по дроблению бизнеса в 2025–2026 годах?',
      a: 'Механизм позволяет прекратить обязанность по уплате связанных с дроблением налогов, пеней и штрафов за 2022–2024 годы при соблюдении установленных законом условий добровольного отказа от дробления в 2025–2026 годах. Проверим применимость амнистии к конкретной ситуации и определим действия, необходимые для её использования.'
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
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Защита при обвинении
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              в дроблении бизнеса в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '760px', textWrap: 'balance' }}>
            Проанализируем доказательства и признаки искусственного разделения компаний, обоснуем деловую цель структуры, защитим интересы бизнеса в проверке, УФНС и суде.
          </span>
        }
        primaryCtaText="Обсудить дробление бизнеса"
        primaryCtaLink="#form"
        primaryCtaSubtext={
          <span style={{ display: 'block' }}>
            <span style={{ display: 'inline-block' }}>Или позвоните для оперативного разбора:</span>{' '}
            <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
              <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (4742) 20-15-25</a>
            </span>
          </span>
        }
        secondaryCtaText="Риски и амнистия"
        secondaryCtaLink="#urgent"
        imageUrl="/images/bobkin.jpg"
        imageName="Аркадий Евгеньевич Бобкин"
        imageSubtitle="Директор, управляющий партнёр ЮК «Де-Юре», куратор направления"
        imageObjectPosition="center 15%"
        trustItems={[
          {
            text: (
              <span>
                <strong>Опровергнем критерии</strong> формального дробления и единого бенефициара
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Докажем реальную деловую цель</strong>, раздельный персонал и активы
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Проверим условия применения</strong> налоговой амнистии по дроблению бизнеса
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Контррасчет недоимки</strong> с учетом налогов, уже уплаченных участниками группы
              </span>
            )
          }
        ]}
      />

      {/* ═══ БЛОК 2: СИТУАЦИИ (ШАБЛОН «СИТУАЦИИ») ═══ */}
      <section id="situations" className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <div
              style={{
                fontSize: '12.5px',
                fontWeight: 700,
                color: 'var(--color-gold)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '12px'
              }}
            >
              ПРИЗНАКИ И ПРЕТЕНЗИИ ФНС
            </div>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span style={{ display: 'inline-block' }}>С какими признаками дробления</span> <br />
              <span style={{ display: 'inline-block' }}>к нам обращаются</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Взаимозависимость или общий ресурс сами по себе не доказывают наличие схемы. Главное — подтвердить самостоятельность и деловую цель.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '32px' }}>
            {situations.map((sit, idx) => (
              <div
                key={idx}
                className="card hover-lift"
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)',
                  padding: '28px 22px',
                  borderRadius: '0',
                  boxShadow: '0 4px 16px rgba(23, 50, 77, 0.05)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-gold)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '-15px',
                  width: '90px',
                  height: '90px',
                  opacity: 0.04,
                  pointerEvents: 'none',
                  color: 'var(--color-deep-blue)'
                }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>

                <div>
                  <div
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: 'var(--color-primary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '10px',
                      background: 'rgba(23, 50, 77, 0.06)',
                      padding: '2px 6px',
                      display: 'inline-block'
                    }}
                  >
                    {sit.tag}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '17px',
                      fontWeight: 600,
                      color: 'var(--color-deep-blue)',
                      marginBottom: '10px',
                      lineHeight: '1.3'
                    }}
                  >
                    {sit.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '13.5px',
                      color: 'var(--color-text-secondary)',
                      lineHeight: '1.5',
                      margin: 0
                    }}
                  >
                    {sit.desc}
                  </p>
                </div>

                <a
                  href={sit.link || "#form"}
                  className="situation-btn"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--color-primary)',
                    fontSize: '13px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    marginTop: '16px',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-gold)';
                    const svg = e.currentTarget.querySelector('svg');
                    if (svg) {
                      svg.style.transform = 'translateX(4px)';
                      svg.style.stroke = 'var(--color-gold)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--color-primary)';
                    const svg = e.currentTarget.querySelector('svg');
                    if (svg) {
                      svg.style.transform = 'translateX(0)';
                      svg.style.stroke = 'currentColor';
                    }
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('form');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    else window.location.hash = 'form';
                  }}
                >
                  <span>{sit.btnText}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.25s ease, stroke 0.25s ease' }}>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            ))}
          </div>

          {/* Плашка «Не нашли свою ситуацию?» */}
          <div
            style={{
              background: 'var(--color-deep-blue)',
              borderRadius: '0',
              padding: '40px 48px',
              borderTop: '3px solid var(--color-gold)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '32px',
              flexWrap: 'wrap',
              boxShadow: '0 12px 30px rgba(11, 28, 42, 0.15)'
            }}
          >
            <style dangerouslySetInnerHTML={{ __html: `
              .white-btn-custom {
                background-color: var(--color-white) !important;
                color: #10273B !important;
                border: 1px solid var(--color-white) !important;
                white-space: nowrap;
                font-weight: 600;
                padding: 14px 28px !important;
                transition: all 0.3s ease !important;
              }
              .white-btn-custom:hover {
                background-color: var(--color-gold) !important;
                color: var(--color-deep-blue) !important;
                border-color: var(--color-gold) !important;
              }
            `}} />
            <div style={{ flex: '1 1 500px', minWidth: '280px' }}>
              <h3 style={{ margin: '0 0 12px 0', fontSize: '26px', fontFamily: 'var(--font-serif)', color: '#FFFFFF', lineHeight: 1.3 }}>
                Не нашли свою ситуацию?
              </h3>
              <p style={{ margin: 0, fontSize: '15px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6 }}>
                <span style={{ display: 'inline-block' }}>Опишите структуру вашей группы компаний или суть претензий ФНС.</span> <br />
                <span style={{ display: 'inline-block' }}>Налоговый юрист разберет риски и предложит безопасную стратегию.</span>
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <a
                href="#form"
                className="btn white-btn-custom"
                style={{
                  display: 'inline-block',
                  textAlign: 'center',
                  fontSize: '15px',
                  padding: '14px 28px',
                  fontWeight: 600,
                  whiteSpace: 'nowrap'
                }}
              >
                Описать ситуацию
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: РИСКИ И НАЛОГОВАЯ АМНИСТИЯ (#URGENT) ═══ */}
      <section style={{ background: 'var(--color-deep-blue)', padding: '64px 0 56px', position: 'relative', overflow: 'hidden' }} id="urgent">
        <div className="container">
          <div style={{ maxWidth: '800px', marginBottom: '36px' }}>
            <div
              style={{
                fontSize: '12.5px',
                fontWeight: 700,
                color: 'var(--color-gold)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '12px'
              }}
            >
              РИСКИ И ПРАВОВЫЕ ВОЗМОЖНОСТИ
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontFamily: 'var(--font-serif)', color: '#FFFFFF', marginBottom: '12px', marginTop: 0, lineHeight: 1.25 }}>
              Ключевые риски и условия налоговой амнистии
            </h2>
            <div style={{ width: '60px', height: '2px', background: 'var(--color-gold)', margin: '16px 0' }} />
            <p style={{ fontSize: '16px', color: '#E8ECF1', lineHeight: 1.65, margin: 0 }}>
              <span style={{ display: 'inline-block' }}>Консолидация выручки группы способна уничтожить рентабельность,</span> <br />
              <span style={{ display: 'inline-block' }}>однако новые законы дают шанс безопасного урегулирования.</span>
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '20px', marginBottom: '36px' }}>
            {urgentRisks.map((risk, idx) => (
              <div
                key={idx}
                className="urgent-card"
                style={{
                  background: 'linear-gradient(135deg, #FAF7F2 0%, #F3ECDF 100%)',
                  padding: '30px 24px',
                  borderTop: '4px solid var(--color-gold)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B08D57" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <div style={{ fontSize: '16.5px', fontWeight: 700, color: 'var(--color-deep-blue)', lineHeight: 1.35, fontFamily: 'var(--font-serif)' }}>
                      {risk.title}
                    </div>
                  </div>
                  <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '14px', lineHeight: 1.55, margin: 0 }}>
                    {risk.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.08)',
            borderLeft: '4px solid var(--color-gold)',
            padding: '16px 24px',
            marginBottom: '32px',
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '14px',
            lineHeight: 1.6
          }}>
            <span style={{ display: 'inline-block' }}>
              <strong style={{ color: '#FFFFFF' }}>ФНС предъявила претензии к структуре группы компаний или ИП?</strong> Оценим применимость налоговой амнистии и выстроим правовую защиту структуры.
            </span>
          </div>

          <style dangerouslySetInnerHTML={{__html: `
            .urgent-card {
              transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
            }
            .urgent-card:hover {
              transform: translateY(-6px);
              box-shadow: 0 18px 36px rgba(0,0,0,0.28) !important;
            }
            .btn-urgent-outline {
              border: 1px solid rgba(255,255,255,0.8) !important;
              color: #FFFFFF !important;
              background: transparent !important;
              text-decoration: none !important;
              font-weight: 600 !important;
              transition: all 0.3s ease !important;
              border-radius: 0 !important;
              display: inline-block !important;
            }
            .btn-urgent-outline:hover {
              background: rgba(255,255,255,0.18) !important;
              color: #FFFFFF !important;
              border-color: #FFFFFF !important;
            }
            .btn-urgent-call {
              display: inline-block !important;
              border-radius: 0 !important;
              text-decoration: none !important;
              background-color: var(--color-gold) !important;
              color: var(--color-deep-blue) !important;
              font-weight: 700 !important;
              transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
              border: 1px solid var(--color-gold) !important;
            }
            .btn-urgent-call:hover {
              background-color: #FFFFFF !important;
              color: #0B1C2A !important;
              border-color: #FFFFFF !important;
              transform: translateY(-2px);
            }
          `}} />

          {/* Зона связи */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '28px', display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <a href="tel:+74742201525" style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.02em' }} data-analytics="phone_click">
              +7 (4742) 20-15-25
            </a>
            <a href="tel:+74742201525" className="btn-urgent-call" style={{ padding: '14px 28px', fontSize: '15px' }} data-analytics="phone_click">
              Позвонить юристу
            </a>
            <a href="#form" className="btn btn-urgent-outline" style={{ padding: '14px 28px', fontSize: '15px' }}>
              Срочная консультация
            </a>
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginLeft: '4px' }}>
              Срочный выезд налогового юриста при претензиях в дроблении
            </span>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: СТРАТЕГИЯ ЗАЩИТЫ (#CHECK) ═══ */}
      <section className="section bg-white" id="check" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <div
              style={{
                fontSize: '12.5px',
                fontWeight: 700,
                color: 'var(--color-gold)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '12px'
              }}
            >
              СТРАТЕГИЯ ЗАЩИТЫ
            </div>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.25, textAlign: 'left' }}>
              <span style={{ display: 'inline-block' }}>Что входит в юридическую</span> <br />
              <span style={{ display: 'inline-block' }}>помощь при дроблении</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Разрабатываем доказательственную базу реальности и самостоятельности каждого участника группы.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', position: 'relative', marginBottom: '40px' }}>
            {directions.map((dir, idx) => (
              <div
                key={idx}
                className="hover-lift"
                style={{
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  padding: '36px 30px 32px 30px',
                  border: '1px solid var(--color-border)',
                  borderTop: '4px solid var(--color-gold)',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '24px',
                  background: 'var(--color-gold)',
                  color: '#FFFFFF',
                  fontSize: '12px',
                  fontWeight: 700,
                  padding: '2px 10px',
                  borderRadius: '2px',
                  letterSpacing: '0.05em'
                }}>
                  {dir.num}
                </div>
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '8px 0 14px 0', lineHeight: 1.35 }}>
                  {dir.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {dir.desc}
                </p>
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
              <span style={{ display: 'block', textWrap: 'balance' }}>
                <span style={{ display: 'inline-block' }}>Практический опыт защиты производственных</span> <br />
                <span style={{ display: 'inline-block' }}>холдингов и торговых сетей региона</span>
              </span>
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
        pageUrl="https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/zashchita-pri-obvinenii-v-droblenii-biznesa/"
        title="Стоимость защиты при обвинении в дроблении"
        subtitle="Цена фиксируется в договоре и зависит от количества юридических лиц и ИП в структуре и объема доначислений"
        tiers={pricingTiers}
      />

      {/* ═══ БЛОК 8: КЕЙСЫ ═══ */}
      <CasesBlock
        title={
          <>
            <span style={{ display: 'inline-block' }}>Практика по делам</span> <br />
            <span style={{ display: 'inline-block' }}>о дроблении бизнеса</span>
          </>
        }
        subtitle="Примеры защиты структуры холдингов, торговых сетей и применения налоговой амнистии"
        cases={practiceCases}
      />

      {/* ═══ БЛОК 9: FAQ ═══ */}
      <FAQBlock items={faqs} />

      {/* ═══ БЛОК 10: СВЯЗАННЫЕ НАЛОГОВЫЕ УСЛУГИ — КАНОНИЧЕСКИЙ ШАБЛОН ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--color-bg-light)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <div
              style={{
                fontSize: '12.5px',
                fontWeight: 700,
                color: 'var(--color-gold)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '12px'
              }}
            >
              СМЕЖНЫЕ НАПРАВЛЕНИЯ
            </div>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              Связанные налоговые услуги
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Комплексная защита налоговых интересов бизнеса: от сопровождения камеральных и выездных проверок до оспаривания доначислений и защиты от уголовной ответственности.
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '24px' }}>
            <Link href="/biznesu/nalogovyj-yurist-dlya-biznesa/" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
              <div
                className="card related-service-card hover-lift"
                style={{
                  height: '100%',
                  minHeight: '180px',
                  padding: '26px 24px',
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '0',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 16px rgba(23, 50, 77, 0.04)'
                }}
              >
                <div>
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '17px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', lineHeight: 1.35, fontWeight: 700 }}>
                    Все услуги налогового юриста
                  </h3>
                  <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    Комплексное налоговое консультирование бизнеса, аудит фискальных рисков и выстраивание правовой защиты.
                  </p>
                </div>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontSize: '13.5px', fontWeight: 600, marginTop: '18px', transition: 'color 0.35s ease' }}>
                  <span>Подробнее об услуге</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/biznesu/nalogovyj-yurist-dlya-biznesa/soprovozhdenie-nalogovyh-proverok/" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
              <div
                className="card related-service-card hover-lift"
                style={{
                  height: '100%',
                  minHeight: '180px',
                  padding: '26px 24px',
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '0',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 16px rgba(23, 50, 77, 0.04)'
                }}
              >
                <div>
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '17px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', lineHeight: 1.35, fontWeight: 700 }}>
                    Сопровождение налоговых проверок
                  </h3>
                  <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    Правовой контроль камеральных и выездных проверок ИФНС, участие в допросах свидетелей и подготовка возражений.
                  </p>
                </div>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontSize: '13.5px', fontWeight: 600, marginTop: '18px', transition: 'color 0.35s ease' }}>
                  <span>Подробнее об услуге</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/biznesu/nalogovyj-yurist-dlya-biznesa/osparivanie-donachislenij-i-reshenij-fns/" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
              <div
                className="card related-service-card hover-lift"
                style={{
                  height: '100%',
                  minHeight: '180px',
                  padding: '26px 24px',
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '0',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 16px rgba(23, 50, 77, 0.04)'
                }}
              >
                <div>
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '17px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', lineHeight: 1.35, fontWeight: 700 }}>
                    Оспаривание решений ФНС
                  </h3>
                  <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    Отмена неправомерных доначислений налогов, пеней и штрафов в досудебном порядке (УФНС) и в арбитражном суде.
                  </p>
                </div>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontSize: '13.5px', fontWeight: 600, marginTop: '18px', transition: 'color 0.35s ease' }}>
                  <span>Подробнее об услуге</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-nalogovym-prestupleniyam/" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
              <div
                className="card related-service-card hover-lift"
                style={{
                  height: '100%',
                  minHeight: '180px',
                  padding: '26px 24px',
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '0',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 16px rgba(23, 50, 77, 0.04)'
                }}
              >
                <div>
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '17px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', lineHeight: 1.35, fontWeight: 700 }}>
                    Защита по ст. 199 УК РФ
                  </h3>
                  <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    Уголовно-правовая защита руководителей и учредителей при налоговых проверках СК РФ и возбуждении уголовных дел.
                  </p>
                </div>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontSize: '13.5px', fontWeight: 600, marginTop: '18px', transition: 'color 0.35s ease' }}>
                  <span>Подробнее об услуге</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 11: ФИНАЛЬНАЯ ФОРМА (КОНФИДЕНЦИАЛЬНЫЙ АНАЛИЗ СТРУКТУРЫ) — КАНОНИЧЕСКИЙ ШАБЛОН ═══ */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px', padding: '80px 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>
                  КОНФИДЕНЦИАЛЬНЫЙ АНАЛИЗ СТРУКТУРЫ
                </span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Обсудите риски дробления</span>{' '}
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>с экспертом</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Кратко опишите, какие компании входят в группу, на какой стадии находится взаимодействие с налоговой инспекцией и какие требования предъявлены. Мы свяжемся с вами для согласования конфиденциальной встречи.
              </p>

              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация налогового юриста</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Телефон для связи: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (4742) 20-15-25</a>
                </p>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '6px' }}>
                  Офис в Липецке: ул. Советская, д. 35, оф. 213 (приём по записи)
                </div>
              </div>

              <div style={{ background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Строгая коммерческая тайна</strong>
                Любые данные о структуре бизнеса, выручке и аффилированных лицах не передаются третьим лицам.
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm
                title="Написать нам"
                subtitle="Оставьте имя и номер телефона. При желании кратко опишите ситуацию — это поможет юристу подготовиться к разговору."
                subtext="Если вы оставите заявку вечером или в выходной день, мы перезвоним в ближайший рабочий день."
                buttonText="Оставить заявку"
                commentPlaceholder="Кратко опишите ситуацию: количество юрлиц/ИП, спецрежимы, претензии налоговой…"
                hiddenFields={[
                  { name: 'source_page', value: '/biznesu/nalogovyj-yurist-dlya-biznesa/zashchita-pri-obvinenii-v-droblenii-biznesa/' },
                  { name: 'service', value: 'Защита при обвинении в дроблении бизнеса' },
                  { name: 'direction', value: 'tax-defense' }
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
