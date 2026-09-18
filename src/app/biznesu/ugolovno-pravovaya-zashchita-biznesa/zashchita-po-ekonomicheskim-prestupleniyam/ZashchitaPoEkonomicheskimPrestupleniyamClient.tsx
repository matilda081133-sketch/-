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

export default function ZashchitaPoEkonomicheskimPrestupleniyamClient() {
  const economicSituations = [
    {
      tag: 'Статья 159 УК РФ',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Мошенничество в сфере</span> <br />
          <span style={{ display: 'inline-block' }}>предпринимательской деятельности</span>
        </span>
      ),
      desc: 'Обвинения в неисполнении договоров, хищении авансов или бюджетных средств. Доказываем гражданско-правовую природу спора и отсутствие изначального умысла.',
      btnText: 'Защита по ст. 159'
    },
    {
      tag: 'Статья 160 УК РФ',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Присвоение или растрата</span> <br />
          <span style={{ display: 'inline-block' }}>вверенного имущества</span>
        </span>
      ),
      desc: 'Претензии к директорам или материально ответственным лицам по расходованию средств компании, выплатам премий или отчуждению техники.',
      btnText: 'Защита по ст. 160'
    },
    {
      tag: 'Статья 201 УК РФ',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Злоупотребление</span> <br />
          <span style={{ display: 'inline-block' }}>полномочиями директора</span>
        </span>
      ),
      desc: 'Иски и уголовные дела от соучредителей или кредиторов за заключение невыгодных сделок, продажу активов или конфликт интересов.',
      btnText: 'Защита по ст. 201'
    },
    {
      tag: 'Статья 171 УК РФ',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Незаконное предпринимательство</span> <br />
          <span style={{ display: 'inline-block' }}>и работа без лицензии</span>
        </span>
      ),
      desc: 'Претензии надзорных органов к деятельности без обязательного членства в СРО, лицензий или при превышении допустимых лимитов.',
      btnText: 'Защита по ст. 171'
    },
    {
      tag: 'Статья 204 УК РФ',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Коммерческий подкуп</span> <br />
          <span style={{ display: 'inline-block' }}>и откаты при закупках</span>
        </span>
      ),
      desc: 'Обвинения сотрудников отдела снабжения или руководства в получении незаконного вознаграждения за выбор поставщика или подписание актов.',
      btnText: 'Защита по ст. 204'
    },
    {
      tag: 'Банкротные составы',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Неправомерные действия</span> <br />
          <span style={{ display: 'inline-block' }}>при банкротстве (ст. 195–197)</span>
        </span>
      ),
      desc: 'Обвинения в сокрытии имущества от кредиторов, фиктивном или преднамеренном банкротстве компании.',
      btnText: 'Защита от ст. 195-197'
    },
    {
      tag: 'Давление контрагента',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Хозяйственный спор</span> <br />
          <span style={{ display: 'inline-block' }}>перевели в уголовное русло</span>
        </span>
      ),
      desc: 'Недобросовестный партнер использует силовиков как инструмент давления при наличии спора в арбитражном суде.',
      btnText: 'Снять давление'
    },
    {
      tag: 'Арест счетов',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Арест расчётных счетов</span> <br />
          <span style={{ display: 'inline-block' }}>и имущества организации</span>
        </span>
      ),
      desc: 'Следователь наложил арест на активы юрлица в рамках дела против должностного лица. Добиваемся отмены обеспечительных мер.',
      btnText: 'Снять арест'
    }
  ];

  const urgentRisks = [
    {
      title: 'Подмена арбитражного спора уголовным обвинением',
      desc: 'Следственные органы нередко квалифицируют обычный предпринимательский риск или задержку оплаты как мошенничество с целью давления.'
    },
    {
      title: 'Риск избрания жесткой меры пресечения',
      desc: 'Ходатайство следователя о заключении под стражу или домашнем аресте лишает руководителя возможности управлять бизнесом и защищать позицию.'
    },
    {
      title: 'Блокировка деятельности через арест имущества',
      desc: 'Наложение ареста на счета, склады и готовую продукцию приводит к срыву поставок перед третьими лицами и банкротству компании.'
    }
  ];

  const defenseContours = [
    {
      num: '01',
      title: 'Доказывание отсутствия умысла на хищение',
      desc: 'Собираем доказательства реальности хозяйственных операций: деловую переписку, первичные накладные, акты, данные систем трекинга и путевые листы.'
    },
    {
      num: '02',
      title: 'Финансово-экономические экспертизы',
      desc: 'Привлекаем независимых судебных аудиторов для расчета реального баланса взаимных обязательств и опровержения вменяемого следствием размера ущерба.'
    },
    {
      num: '03',
      title: 'Участие адвокатов во всех следственных действиях',
      desc: 'Очная защита на допросах в качестве свидетеля, подозреваемого и обвиняемого, участие в очных ставках и проверках показаний на месте.'
    },
    {
      num: '04',
      title: 'Противодействие необоснованным мерам пресечения',
      desc: 'Добиваемся избрания меры пресечения, не связанной с изоляцией от общества (залог, подписка о невыезде), используя запрет на арест предпринимателей (ч. 1.1 ст. 108 УПК РФ).'
    },
    {
      num: '05',
      title: 'Защита активов и снятие арестов',
      desc: 'Оспариваем судебные постановления об аресте имущества третьих лиц, не имеющих отношения к делу, и добиваемся разблокировки операционных счетов.'
    },
    {
      num: '06',
      title: 'Судебное представительство в уголовном процессе',
      desc: 'Защита прав доверителя в суде первой инстанции, апелляционное и кассационное обжалование незаконных приговоров и постановлений.'
    }
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Изучение процессуальных документов и фабулы',
      desc: 'Анализируем постановление о возбуждении дела, протоколы допросов, результаты выемок и материалы доследственной проверки.'
    },
    {
      num: '02',
      title: 'Выстраивание альтернативной экономической модели',
      desc: 'Готовим контррасчеты и доказательства того, что спор лежит исключительно в гражданско-правовой плоскости.'
    },
    {
      num: '03',
      title: 'Процессуальная защита на предварительном следствии',
      desc: 'Адвокаты компании заявляют обоснованные ходатайства о назначении экспертиз, вызове ключевых свидетелей и приобщении документов защиты.'
    },
    {
      num: '04',
      title: 'Обжалование нарушений следователя',
      desc: 'Используем механизмы ст. 124–125 УПК РФ для признания незаконными действий и решений органов следствия через прокурора и суд.'
    },
    {
      num: '05',
      title: 'Защита в суде и прекращение преследования',
      desc: 'Последовательно отстаиваем позицию невиновности, добиваясь прекращения дела, переквалификации на мягкие составы или оправдательного приговора.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Анализ дела и выработка стратегии',
      subtitle: 'Оценка материалов следствия',
      popular: false,
      price: 'от 30 000 ₽',
      features: [
        { name: 'Изучение постановлений и доказательств обвинения', value: 'Включено' },
        { name: 'Оценка рисков переквалификации и мер пресечения', value: 'Включено' },
        { name: 'Формирование доказательственной базы защиты', value: 'Включено' },
        { name: 'Подготовка плана первоочередных процессуальных шагов', value: 'Включено' }
      ],
      buttonText: 'Заказать стратегию',
      buttonHref: '#form'
    },
    {
      title: 'Защита на предварительном следствии',
      subtitle: 'Комплексное ведение дела у следователя',
      popular: true,
      badgeText: 'Ключевой этап',
      price: 'от 90 000 ₽',
      features: [
        { name: 'Участие адвоката во всех допросах и следственных действиях', value: 'Включено' },
        { name: 'Защита при избрании и продлении меры пресечения', value: 'Включено' },
        { name: 'Ходатайства о назначении судебных экспертиз', value: 'Включено' },
        { name: 'Работа по снятию ареста с расчетных счетов', value: 'Включено' }
      ],
      buttonText: 'Привлечь защиту',
      buttonHref: '#form'
    },
    {
      title: 'Судебное представительство',
      subtitle: 'Защита в суде первой и проверочных инстанций',
      popular: false,
      price: 'от 120 000 ₽',
      features: [
        { name: 'Защита в судебных заседаниях по существу дела', value: 'Включено' },
        { name: 'Допрос свидетелей обвинения и экспертов', value: 'Включено' },
        { name: 'Подготовка и выступление в судебных прениях', value: 'Включено' },
        { name: 'Апелляционное обжалование при необходимости', value: 'Включено' }
      ],
      buttonText: 'Защита в суде',
      buttonHref: '#form'
    }
  ];

  const practiceCases: CaseData[] = [
    {
      category: 'Статья 159 УК РФ',
      title: 'Прекращение уголовного дела о мошенничестве в отношении директора завода',
      problem: 'Следственный орган возбудил дело по ч. 4 ст. 159 УК РФ, утверждая, что директор металлообрабатывающего предприятия похитил 24 млн ₽ предоплаты за поставку металлоконструкций.',
      action: 'Защита собрала доказательства закупки сырья и переписки о форс-мажоре у поставщика проката. Добились назначения комплексной бухгалтерской экспертизы, подтвердившей целевое расходование 100% полученных средств.',
      result: 'Уголовное преследование в отношении руководителя прекращено за отсутствием состава преступления, спор урегулирован в арбитражном суде.'
    },
    {
      category: 'Статья 201 УК РФ',
      title: 'Отказ в аресте генерального директора и переквалификация дела',
      problem: 'Следователь ходатайствовал о заключении директора под стражу по обвинению в злоупотреблении полномочиями, повлекшем ущерб банку-кредитору на сумму 48 млн ₽.',
      action: 'В судебном заседании доказали статус предпринимателя доверителя и незаконность содержания под стражей по ст. 108 УПК РФ. Предоставили гарантийные обязательства поручителей и встречные иски.',
      result: 'Суд отказал в удовлетворении ходатайства следователя об аресте, избрав запрет определенных действий. В дальнейшем дело переквалифицировано без риска лишения свободы.'
    },
    {
      category: 'Арест активов',
      title: 'Снятие ареста с автопарка и счетов логистической компании',
      problem: 'По делу одного из соучредителей следователь наложил арест на 18 грузовых автомобилей, находившихся в лизинге у юрлица, что грозило срывом контрактов торговых сетей.',
      action: 'Подали жалобу в порядке ст. 125 УПК РФ, доказав, что автотранспорт принадлежит лизинговой компании и используется в непрерывной хозяйственной деятельности непричастного предприятия.',
      result: 'Суд отменил постановление об аресте имущества, транспорт вернулся на линии.'
    }
  ];

  const faqs = [
    {
      q: 'Можно ли избежать заключения под стражу по экономическому преступлению?',
      a: 'Да. В силу ч. 1.1 ст. 108 УПК РФ заключение под стражу в отношении подозреваемых или обвиняемых в преступлениях в сфере предпринимательской деятельности (ст. 159, 160, 165, 201 УК РФ и др.) не допускается, если преступления совершены в связи с осуществлением предпринимательской деятельности. Защита представляет документы, подтверждающие коммерческий статус сделки.'
    },
    {
      q: 'Чем обвинение по ст. 159 УК РФ отличается от неисполнения договора в арбитраже?',
      a: 'Ключевое отличие — наличие изначального прямого умысла на безвозмездное изъятие чужих средств ещё до заключения сделки. Если компания предпринимала реальные шаги к исполнению обязательств, несла расходы или попала в форс-мажор, это классический арбитражный спор, исключающий уголовную ответственность.'
    },
    {
      q: 'Может ли один адвокат защищать компанию и генерального директора?',
      a: 'Адвокат защищает конкретное физическое лицо (руководителя, учредителя или бухгалтера). Если интересы юридического лица и должностного лица полностью совпадают, противоречий нет. Однако при возникновении конфликта интересов защита каждого участника поручается отдельным адвокатам команды.'
    },
    {
      q: 'Что делать, если следователь требует дать показания без адвоката?',
      a: 'Вы имеете конституционное право отказаться от дачи показаний до прибытия вашего защитника по соглашению (ст. 48, 51 Конституции РФ). Дача показаний с назначенным следователем дежурным адвокатом несёт высокий риск необратимых ошибок.'
    },
    {
      q: 'Помогает ли добровольное возмещение ущерба прекратить уголовное дело?',
      a: 'По ряду экономических составов возмещение ущерба является законным основанием для прекращения уголовного преследования или освобождения от уголовной ответственности (ст. 76.1 УК РФ, ст. 28.1 УПК РФ).'
    }
  ];

  const relatedServices = [
    {
      title: 'Налоговый юрист для бизнеса',
      desc: 'Проверки ФНС, возражения на акты, обжалование доначислений до уголовной стадии.',
      link: '/biznesu/nalogovyj-yurist-dlya-biznesa/'
    },
    {
      title: 'Корпоративный юрист',
      desc: 'Защита контроля над ООО, споры участников, исключение участника, дедлоки.',
      link: '/biznesu/korporativnyj-yurist/'
    },
    {
      title: 'Разблокировка счёта по 115-ФЗ',
      desc: 'Снятие ограничений банков, ответы на запросы финмониторинга, реабилитация в МВК.',
      link: '/biznesu/razblokirovka-raschetnogo-scheta-po-115-fz/'
    },
    {
      title: 'Банкротство бизнеса',
      desc: 'Защита руководства от субсидиарной ответственности и оспаривания сделок.',
      link: '/biznesu/bankrotstvo-biznesa/'
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
            <Link href="/biznesu/ugolovno-pravovaya-zashchita-biznesa/">Уголовно-правовая защита бизнеса</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Защита по экономическим преступлениям</span>
          </>
        }
        superTitle={
          <span style={{ whiteSpace: 'normal', display: 'inline-block', lineHeight: 1.4 }}>
            <span style={{ display: 'inline-block' }}>УГОЛОВНО-ПРАВОВАЯ ЗАЩИТА БИЗНЕСА •</span> <br />
            <span style={{ display: 'inline-block' }}>Липецк и Липецкая область</span>
          </span>
        }
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Защита по экономическим
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              преступлениям в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '760px', textWrap: 'balance' }}>
            Организуем защиту собственников, руководителей и сотрудников при претензиях по экономическим составам: от доследственной проверки до предварительного следствия и арбитражно-уголовной защиты.
          </span>
        }
        primaryCtaText="Обсудить экономическое дело"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_primary_cta_econ"
        primaryCtaSubtext={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Конфиденциальный звонок куратору направления:
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (910) 350-31-11</a>
            </span>
          </span>
        }
        imageUrl="/images/bobkin.jpg"
        imageName="Аркадий Евгеньевич Бобкин"
        imageSubtitle="Директор, управляющий партнёр ЮК «Де-Юре», куратор направления"
        imageObjectPosition="center 15%"
        trustItems={[
          {
            text: (
              <span>
                <strong>Защита по ст. 159, 160, 201, 171 УК РФ</strong> и смежным составам
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Разграничение коммерческих споров</strong> и уголовных обвинений
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Противодействие арестам счетов</strong> и жестким мерам пресечения
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Опытные адвокаты</strong> с практикой защиты топ-менеджеров
              </span>
            )
          }
        ]}
      />

      {/* ═══ БЛОК 2: СИТУАЦИИ (#SITUATIONS) ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>По каким статьям и поводам</span> <br />
              <span style={{ display: 'inline-block' }}>возникают претензии к бизнесу</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textWrap: 'balance' }}>
              В экономической сфере грань между предпринимательским риском и составом преступления тонка. Поможем вовремя отделить законный бизнес от необоснованных обвинений.
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '24px', marginBottom: '32px' }}>
            {economicSituations.map((item, i) => (
              <div
                key={i}
                className="card hover-lift"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-gold)',
                  borderRadius: '0',
                  padding: '28px 22px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 16px rgba(23, 50, 77, 0.05)',
                  position: 'relative',
                  overflow: 'hidden'
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
                  <div style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: 'var(--color-primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '10px',
                    background: 'rgba(23, 50, 77, 0.06)',
                    padding: '2px 6px',
                    display: 'inline-block'
                  }}>
                    {item.tag}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '17px', fontWeight: 600, color: 'var(--color-deep-blue)', margin: '0 0 10px 0', lineHeight: 1.3 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
                <a
                  href="#form"
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
                  <span>{item.btnText}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.25s ease, stroke 0.25s ease' }}>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: КОГДА НЕЛЬЗЯ ЗАТЯГИВАТЬ (#URGENT) ═══ */}
      <section style={{ background: 'var(--color-deep-blue)', padding: '64px 0 56px', position: 'relative', overflow: 'hidden' }} id="urgent">
        <div className="container">
          <div style={{ maxWidth: '800px', marginBottom: '36px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontFamily: 'var(--font-serif)', color: '#FFFFFF', marginBottom: '12px', marginTop: 0, lineHeight: 1.25 }}>
              <span style={{ display: 'inline-block' }}>Критические риски</span> <br />
              <span style={{ display: 'inline-block' }}>по экономическим делам</span>
            </h2>
            <div style={{ width: '60px', height: '2px', background: 'var(--color-gold)', margin: '16px 0' }} />
            <p style={{ fontSize: '16px', color: '#E8ECF1', lineHeight: 1.65, margin: 0 }}>
              Неверная позиция на первых допросах способна закрепить версию следствия о преступном сговоре группы лиц.
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
              <strong style={{ color: '#FFFFFF' }}>Возбуждено уголовное дело или вызывают на допрос?</strong> Обеспечим участие адвоката с первого процессуального действия.
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
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.15)',
            paddingTop: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <a href="tel:+79103503111" style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.02em' }} data-analytics="phone_click">
                +7 (910) 350-31-11
              </a>
              <a href="tel:+79103503111" className="btn-urgent-call" style={{ padding: '14px 28px', fontSize: '15px' }} data-analytics="phone_click">
                Позвонить юристу
              </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '14px' }}>
                Срочный выезд адвоката по экономическим делам
              </span>
              <a href="#form" className="btn btn-urgent-outline" style={{ padding: '14px 28px', fontSize: '15px', whiteSpace: 'nowrap' }}>
                Срочная защита
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: СОСТАВ ЗАЩИТЫ (КАНОНИЧЕСКИЙ ШАБЛОН #CHECK) ═══ */}
      <section className="section bg-white" id="check" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.25 }}>
              <span style={{ display: 'inline-block' }}>Состав защиты по уголовным делам</span> <br />
              <span style={{ display: 'inline-block' }}>в сфере бизнеса</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Разрабатываем доказательственную базу, опираясь на первичные финансовые документы и реальные условия рынка.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', position: 'relative', marginBottom: '40px' }}>
            {defenseContours.map((item, idx) => (
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
                  {item.num}
                </div>
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '8px 0 14px 0', lineHeight: 1.35 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 5: ЭТАПЫ (PROCESSBLOCK) ═══ */}
      <ProcessBlock
        title="Стратегия защиты на следствии и в суде"
        subtitle="Системная работа уголовных адвокатов и аналитиков по экономическим спорам для защиты доверителя."
        steps={processSteps}
        ctaTitle="Нужна квалифицированная защита по делу?"
        ctaSubtitle="Свяжитесь с куратором направления. Изучим постановление о возбуждении дела и выстроим план защиты."
        ctaButtonText="Обсудить уголовное дело"
        ctaButtonHref="#form"
      />

      {/* ═══ БЛОК 6: КУРАТОР (SPECIALISTBLOCK) ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name="Аркадий Евгеньевич Бобкин"
        position={<>Директор, управляющий партнёр ЮК «Де-Юре»,<br />куратор направления «Уголовно-правовая защита бизнеса»</>}
        imageUrl="/images/bobkin.jpg"
        imagePosition="center 15%"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Аркадий Евгеньевич координирует выработку стратегии защиты по экономическим делам, привлечение экспертов и работу адвокатов. Проработав 22 года следователем по особо важным делам и руководителем Следственной части МВД, он знает типичные слабые места следственных конструкций обвинения.
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
            «В экономических преступлениях решающую роль играют экспертизы и цифры. Если доказать суду реальность товарного движения и обоснованность затрат, обвинение рассыпается».
          </div>,
          <ul key="3" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>22 года следственной работы по сложным многоэпизодным экономическим делам</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>Процессуальную защиту доверителей осуществляют практикующие адвокаты компании</span>
            </li>
          </ul>,
          <a key="4" href="/specialisty/bobkin-arkadiy-evgenevich/" style={{ display: 'inline-block', marginTop: '16px', fontSize: '14px', color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
            Подробнее об опыте куратора →
          </a>
        ]}
        buttonText="Связаться с куратором"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 7: СТОИМОСТЬ (PRICINGBLOCK) ═══ */}
      <PricingBlock
        title="Стоимость защиты по экономическим делам"
        subtitle="Цена услуг фиксируется в соглашении об оказании юридической помощи и зависит от стадии процесса и инкриминируемой статьи."
        tiers={pricingTiers}
        disclaimer="Оплата независимых финансовых и товароведческих экспертиз, нотариальных расходов и командировок за пределы региона согласуется отдельно."
      />

      {/* ═══ БЛОК 8: КЕЙСЫ (CASESBLOCK) ═══ */}
      <CasesBlock
        title="Примеры прекращения экономических дел"
        cases={practiceCases}
      />
      <div className="container" style={{ marginTop: '-40px', marginBottom: '60px', textAlign: 'center' }}>
        <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', fontStyle: 'italic', margin: 0 }}>
          Исход дела определяется совокупностью фактических обстоятельств и своевременностью вступления защитника.
        </p>
      </div>

      {/* ═══ БЛОК 9: FAQ ═══ */}
      <FAQBlock
        title="Частые вопросы по экономическим преступлениям"
        subtitle="Ответы юристов на актуальные вопросы об избрании мер пресечения, доказывании умысла и защите имущества."
        faqs={faqs}
      />

      {/* ═══ БЛОК: СМЕЖНЫЕ НАПРАВЛЕНИЯ ПРАКТИКИ ДЛЯ БИЗНЕСА (ПО ШАБЛОНУ) ═══ */}
      <section className="section bg-light" id="related-services" style={{ padding: '64px 0', background: 'var(--gradient-cream)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ marginBottom: '36px' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '10px'
            }}>
              Смежные направления практики для бизнеса
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '24px'
            }}>
              <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px, 3.5vw, 34px)', color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.25, flex: '1 1 480px', minWidth: '280px' }}>
                <span style={{ display: 'inline-block' }}>Смежные направления</span> <br />
                <span style={{ display: 'inline-block' }}>практики для бизнеса</span>
              </h2>
              <p style={{
                flex: '0 1 440px',
                minWidth: '280px',
                fontSize: '15.5px',
                color: 'var(--color-text-secondary)',
                fontWeight: 400,
                lineHeight: 1.65,
                margin: 0,
                textAlign: 'left',
                textWrap: 'balance'
              }}>
                Если ситуация выходит за рамки обвинения в экономических преступлениях, привлекаем экспертов смежных практик компании «Де-Юре» — по налогам, арбитражу, корпоративным спорам и банкротству.
              </p>
            </div>
          </div>

          <div className="grid grid-4" style={{ gap: '20px', marginBottom: '28px' }}>
            {relatedServices.map((rel, idx) => (
              <Link key={idx} href={rel.link} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
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
                      {rel.title}
                    </h3>
                    <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                      {rel.desc}
                    </p>
                  </div>
                  <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontSize: '13.5px', fontWeight: 600, marginTop: '18px', transition: 'color 0.35s ease' }}>
                    <span>Подробнее об услуге</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.35s ease, stroke 0.35s ease' }}>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div>
            <Link href="/biznesu/" className="all-services-link" style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '15px', textDecoration: 'underline', textUnderlineOffset: '4px', display: 'inline-flex', alignItems: 'center', gap: '6px', transition: 'color 0.3s ease' }}>
              Смотреть все юридические услуги для бизнеса →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 11: ФИНАЛЬНАЯ ФОРМА (СВЯЗАТЬСЯ С НАМИ) — КАНОНИЧЕСКИЙ ШАБЛОН ═══ */}
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
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Получите первичную</span>{' '}
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>оценку ситуации</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Опишите фабулу претензий или инкриминируемую статью. Команда адвокатов изучит материалы и свяжется с вами для выработки безопасной стратегии защиты.
              </p>

              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Прямой контакт со специалистом</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Дежурный телефон: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (910) 350-31-11</a><br />
                  Городской телефон: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (4742) 20-15-25</a>
                </p>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '6px' }}>
                  Липецк, ул. Советская, д. 35, офис 213 (приём руководителей по предварительной записи)
                </div>
              </div>

              <div style={{ background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Адвокатская тайна и конфиденциальность:</strong>
                Все переданные сведения и документы охраняются Федеральным законом № 63-ФЗ «Об адвокатской деятельности и адвокатуре в РФ». Не указывайте в форме паспортные данные и коммерческую тайну — защищённый способ передачи согласуем после контакта.
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm
                title="Написать нам"
                subtitle={
                  <>
                    <span style={{ display: 'inline-block' }}>Оставьте контакты и суть вопроса. Адвокат свяжется с вами</span> <br />
                    <span style={{ display: 'inline-block' }}>в течение 15 минут в рабочее время.</span>
                  </>
                }
                subtext={
                  <>
                    <span style={{ display: 'inline-block' }}>Если вы оставите заявку вечером или в&nbsp;выходной день,</span> <br />
                    <span style={{ display: 'inline-block' }}>мы перезвоним в&nbsp;ближайший рабочий день.</span>
                  </>
                }
                buttonText="Получить консультацию адвоката"
                commentPlaceholder="Кратко укажите: инкриминируемую статью (159, 160, 201 УК РФ), стадию проверки или следствия…"
                hiddenFields={[
                  { name: 'source_page', value: '/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-ekonomicheskim-prestupleniyam/' },
                  { name: 'page_type', value: 'service' },
                  { name: 'direction', value: 'criminal-defense' },
                  { name: 'service', value: 'zashchita-po-ekonomicheskim-prestupleniyam' }
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
