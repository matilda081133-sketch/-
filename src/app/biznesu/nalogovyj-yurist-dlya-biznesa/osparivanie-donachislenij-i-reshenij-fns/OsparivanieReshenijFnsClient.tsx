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

export default function OsparivanieReshenijFnsClient() {
  const situations = [
    {
      tag: 'Не вступило в силу',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Получено решение ФНС</span> <br />
          <span style={{ display: 'inline-block' }}>о привлечении к ответственности</span>
        </span>
      ),
      desc: 'По закону есть ровно 1 месяц со дня вручения для подачи апелляционной жалобы в УФНС. Подача жалобы приостанавливает вступление решения в силу и списание денег.',
      btnText: 'Апелляционная жалоба'
    },
    {
      tag: 'Вступило в силу',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Решение вступило в силу,</span> <br />
          <span style={{ display: 'inline-block' }}>выставлено требование об уплате</span>
        </span>
      ),
      desc: 'Подаем жалобу на вступившее в силу решение в УФНС (срок — 1 год по ст. 139 НК РФ), ходатайствуем о приостановлении исполнения и готовим обращение в суд.',
      btnText: 'Жалоба в УФНС'
    },
    {
      tag: 'Отказ в УФНС',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>УФНС оставило жалобу</span> <br />
          <span style={{ display: 'inline-block' }}>налогоплательщика без удовлетворения</span>
        </span>
      ),
      desc: 'Обязательный досудебный порядок соблюден. У компании есть 3 месяца для подачи заявления в Арбитражный суд Липецкой области по правилам главы 24 АПК РФ.',
      btnText: 'Иск в арбитраж'
    },
    {
      tag: 'Блокировка счетов',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Принудительное взыскание</span> <br />
          <span style={{ display: 'inline-block' }}>и инкассовые поручения</span>
        </span>
      ),
      desc: 'Заявляем в суде ходатайство о принятии срочных обеспечительных мер (ст. 199 АПК РФ) для приостановления списания средств и разблокировки операционных счетов.',
      btnText: 'Приостановить списание'
    },
    {
      tag: 'Судебный спор',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Рассмотрение спора</span> <br />
          <span style={{ display: 'inline-block' }}>в арбитражном суде</span>
        </span>
      ),
      desc: 'Полное судебное представительство в Арбитражном суде Липецкой области, 19-м арбитражном апелляционном суде (Воронеж) и Арбитражном суде ЦО (Калуга).',
      btnText: 'Судебная защита'
    },
    {
      tag: 'Уголовный риск',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Истекает срок 75 дней</span> <br />
          <span style={{ display: 'inline-block' }}>для передачи материалов в СК РФ</span>
        </span>
      ),
      desc: 'По п. 3 ст. 32 НК РФ при неуплате недоимки свыше 18,75 млн ₽ инспекция направляет материалы следователю. Синхронизируем арбитраж с защитой руководства.',
      btnText: 'Защита от ст. 199'
    }
  ];

  const urgentRisks = [
    {
      title: 'Месячный срок на апелляционную жалобу в УФНС',
      desc: 'Пока жалоба рассматривается вышестоящим налоговым органом (до 1 месяца с возможным продлением), решение инспекции не вступает в силу, и банк не имеет права списывать налоги.'
    },
    {
      title: 'Безусловные основания отмены по п. 14 ст. 101 НК РФ',
      desc: 'Неизвещение налогоплательщика о времени и месте рассмотрения материалов проверки является безусловным нарушением процессуальных гарантий, влекущим отмену решения судом.'
    },
    {
      title: 'Срочные обеспечительные меры суда по ст. 199 АПК РФ',
      desc: 'Одновременно с подачей иска юристы добиваются судебного определения о приостановлении действия решения ФНС, предотвращая списание оборотных средств и банкротство.'
    }
  ];

  const directions = [
    {
      num: '01',
      title: 'Поэпизодный аудит решения и расчетов инспекции',
      desc: 'Разбираем каждую претензию: необоснованность снятия налоговых вычетов по НДС, непризнание расходов по прибыли, применение налоговой реконструкции.'
    },
    {
      num: '02',
      title: 'Выявление процедурных нарушений налогового органа',
      desc: 'Проверяем соблюдение сроков проверки, вручения акта, порядка проведения допросов и надлежащего извещения о рассмотрении материалов.'
    },
    {
      num: '03',
      title: 'Составление апелляционной жалобы в УФНС по региону',
      desc: 'Формируем правовую позицию с детальным контррасчетом, ссылками на судебные прецеденты Верховного Суда РФ и доказательства реальности сделок.'
    },
    {
      num: '04',
      title: 'Судебное приостановление принудительного взыскания',
      desc: 'Готовим ходатайство о принятии обеспечительных мер по ст. 199 АПК РФ с предоставлением встречного обеспечения (банковская гарантия или залог).'
    },
    {
      num: '05',
      title: 'Защита в арбитражных судах всех инстанций',
      desc: 'Представляем компанию в заседаниях суда первой, апелляционной и кассационной инстанций, заявляем ходатайства о назначении судебных экспертиз.'
    },
    {
      num: '06',
      title: 'Возврат излишне взысканных налогов и процентов',
      desc: 'После отмены решения ФНС судом добиваемся возврата списанных сумм из бюджета с начислением процентов за незаконное пользование по ст. 79 НК РФ.'
    }
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Правовой анализ решения ФНС и доказательств',
      desc: 'Изучаем текст решения, акт проверки, протоколы допросов свидетелей и документы, положенные в основу доначислений.'
    },
    {
      num: '02',
      title: 'Подготовка апелляционной жалобы в УФНС',
      desc: 'Разрабатываем подробную жалобу с опровержением выводов инспекторов по каждому контрагенту и подаем ее через проверяющую ИФНС.'
    },
    {
      num: '03',
      title: 'Досудебное урегулирование спора в Управлении',
      desc: 'Контролируем рассмотрение жалобы в УФНС по Липецкой области, направляем дополнительные пояснения и возражения.'
    },
    {
      num: '04',
      title: 'Обращение в арбитражный суд и блокировка списаний',
      desc: 'При частичном или полном отказе УФНС подаем заявление в суд и ходатайство о приостановлении взыскания налогов со счетов.'
    },
    {
      num: '05',
      title: 'Судебный процесс и исполнение решения',
      desc: 'Доказываем незаконность доначислений в судебных прениях, добиваемся полной или частичной отмены решения и отзыва инкассовых поручений.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Апелляционная жалоба в УФНС',
      subtitle: 'Обязательный досудебный этап',
      popular: false,
      price: 'от 40 000 ₽',
      features: [
        { name: 'Поэпизодный анализ решения налогового органа', value: 'Включено' },
        { name: 'Формирование доказательственной базы и контррасчета', value: 'Включено' },
        { name: 'Подготовка и подача жалобы в УФНС по Липецкой обл.', value: 'Включено' },
        { name: 'Сопровождение рассмотрения в вышестоящем органе', value: 'Включено' }
      ],
      buttonText: 'Заказать жалобу',
      buttonHref: '#form'
    },
    {
      title: 'Судебное оспаривание в арбитраже',
      subtitle: 'Комплексное ведение дела в суде',
      popular: true,
      badgeText: 'Частый выбор',
      price: 'от 90 000 ₽',
      features: [
        { name: 'Подготовка заявления по гл. 24 АПК РФ', value: 'Включено' },
        { name: 'Ходатайство об обеспечительных мерах (ст. 199 АПК)', value: 'Включено' },
        { name: 'Представительство во всех заседаниях первой инстанции', value: 'Включено' },
        { name: 'Назначение независимой финансово-налоговой экспертизы', value: 'Включено' }
      ],
      buttonText: 'Защита в суде',
      buttonHref: '#form'
    },
    {
      title: 'Апелляция и кассация (19-й ААС, АС ЦО)',
      subtitle: 'Обжалование в проверочных инстанциях',
      popular: false,
      price: 'от 60 000 ₽',
      features: [
        { name: 'Анализ решения суда первой инстанции', value: 'Включено' },
        { name: 'Подготовка апелляционной или кассационной жалобы', value: 'Включено' },
        { name: 'Очное участие юристов в 19-м ААС (г. Воронеж)', value: 'Включено' },
        { name: 'Участие в Арбитражном суде Центрального округа (г. Калуга)', value: 'Включено' }
      ],
      buttonText: 'Подать апелляцию',
      buttonHref: '#form'
    }
  ];

  const practiceCases: CaseData[] = [
    {
      category: 'Апелляционная жалоба в УФНС',
      title: 'Снижение доначислений на 18 млн ₽ до обращения в суд',
      problem: 'Инспекция по результатам ВНП доначислила оптовому поставщику зерна налог на прибыль и штраф по сделкам с тремя сельхозпроизводителями, сочтя поставки фиктивными.',
      action: 'В апелляционной жалобе в УФНС доказали соблюдение критериев ст. 54.1 НК РФ: предоставили реестры автотранспорта с весовыми карточками элеваторов и доказали должную осмотрительность.',
      result: 'УФНС по Липецкой области изменило решение инспекции, отменив доначисления по двум ключевым эпизодам на общую сумму 18,2 млн ₽.'
    },
    {
      category: 'Арбитражный суд',
      title: 'Признание решения МИФНС недействительным на 34 млн ₽ в первой инстанции',
      problem: 'Налоговый орган отказал строительной компании в праве на налоговые вычеты по НДС при строительстве промышленного цеха, посчитав субподрядчика технической компанией.',
      action: 'В Арбитражном суде Липецкой области добились принятия обеспечительных мер (приостановили инкассо) и провели судебную строительно-техническую экспертизу, подтвердившую реальность работ.',
      result: 'Суд полностью удовлетворил требования компании, признав доначисление 34 млн ₽ незаконным. Обеспечительные меры сохранены до вступления акта в силу.'
    },
    {
      category: 'Налоговая реконструкция',
      title: 'Применение налоговой реконструкции и снижение штрафов в 4 раза',
      problem: 'Инспекция вменила компании умышленное уклонение от налогообложения по п. 3 ст. 122 НК РФ со штрафом 40% и полным отказом в признании расходов по спорному поставщику.',
      action: 'Доказали в суде, что товар реально поступил и использован в производстве. Настояли на применении позиции ВС РФ о расчетном способе исчисления расходов (налоговая реконструкция).',
      result: 'Суд обязал ФНС учесть реальные рыночные расходы компании на сырье, снизив размер недоимки на 60% и уменьшив штраф в 4 раза.'
    }
  ];

  const faqs = [
    {
      q: 'Можно ли оспорить решение ФНС сразу в арбитражном суде?',
      a: 'Нет. В силу п. 2 ст. 138 Налогового кодекса РФ соблюдение досудебного порядка обязательно. Обратиться в арбитражный суд можно только после обжалования решения в вышестоящем налоговом органе (УФНС) либо в случае, если жалоба не была рассмотрена Управлением в установленный законом срок.'
    },
    {
      q: 'Какой срок дается для подачи апелляционной жалобы в УФНС?',
      a: 'Апелляционная жалоба на не вступившее в силу решение о привлечении к ответственности подается в течение 1 месяца со дня вручения решения лицу, в отношении которого оно вынесено (п. 2 ст. 139.1 НК РФ). Жалоба подается через инспекцию, вынесшую решение.'
    },
    {
      q: 'Как приостановить списание денег со счетов после вступления решения в силу?',
      a: 'При обращении в арбитражный суд одновременно подается заявление о принятии обеспечительных мер по ст. 199 АПК РФ. Суд вправе приостановить действие оспариваемого решения, что немедленно обязывает налоговый орган отозвать выставленные инкассовые поручения.'
    },
    {
      q: 'Что такое налоговая реконструкция и когда ее можно применить?',
      a: 'Налоговая реконструкция — это обязанность налогового органа определить действительный размер налоговых обязательств с учетом реальных затрат налогоплательщика на приобретение товара, даже если контрагент 1-го звена признан техническим. Это позволяет сохранить расходы по налогу на прибыль и часть вычетов по НДС.'
    },
    {
      q: 'В течение какого срока можно оспорить решение в арбитражном суде?',
      a: 'Заявление в арбитражный суд может быть подано в течение 3 месяцев со дня, когда организации стало известно о принятии вышестоящим налоговым органом решения по жалобе (ч. 4 ст. 198 АПК РФ).'
    },
    {
      q: 'Что происходит с уголовным риском, если решение ФНС обжалуется в суде?',
      a: 'По закону, если решение не вступило в силу (подана апелляционная жалоба), срок 75 дней для передачи материалов в Следственный комитет не течет. Однако после вступления решения в силу даже судебное обжалование само по себе не приостанавливает передачу материалов в СК РФ, поэтому требуется ходатайствовать о приостановлении действия решения.'
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
            <span style={{ color: 'var(--color-text-main)' }}>Оспаривание решений ФНС</span>
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
            <span style={{ display: 'inline-block' }}>Оспаривание доначислений</span> <br />
            <span style={{ display: 'inline-block', color: 'var(--color-gold)' }}>и решений ФНС в Липецке</span>
          </span>
        }
        subtitle="Разберём решение инспекции по эпизодам, проверим расчёт недоимки и процедурные нарушения, подготовим жалобу в УФНС и защитим интересы бизнеса в арбитражном суде."
        trustItems={[
          'Проверим законность решения и обоснованность расчёта налоговой недоимки',
          'Подготовим апелляционную жалобу в УФНС в установленный месячный срок',
          'Приостановим принудительное взыскание и блокировку счетов в суде',
          'Представительство под ключ в Арбитражном суде Липецкой области'
        ]}
        primaryCtaText="Обсудить решение ФНС"
        primaryCtaLink="#form"
        secondaryCtaText="Сроки обжалования"
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
              СТАДИИ ОБЖАЛОВАНИЯ
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
              В каких ситуациях мы защищаем бизнес
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', maxWidth: '750px', margin: '0 auto' }}>
              Маршрут оспаривания зависит от того, вступило ли решение в законную силу и пройден ли обязательный досудебный порядок.
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

      {/* ═══ БЛОК 3: СРОКИ И ПРИНУДИТЕЛЬНОЕ ВЗЫСКАНИЕ ═══ */}
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
              ПРОЦЕССУАЛЬНЫЕ СРОКИ И РИСКИ
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
              Критически важные сроки при получении решения ФНС
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)', maxWidth: '800px', margin: '0 auto' }}>
              Пропуск установленных законом сроков обжалования приводит к безакцептному списанию денежных средств и передаче дела силовикам.
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
                Получили решение налоговой инспекции или заблокировали счета?
              </div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)' }}>
                Оценим перспективу апелляции и подадим ходатайство о приостановлении списания.
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

      {/* ═══ БЛОК 4: КОНТУРЫ ОСПАРИВАНИЯ ═══ */}
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
              МЕТОДИКА ЗАЩИТЫ
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
              Что входит в юридическую работу по оспариванию решения
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', maxWidth: '750px', margin: '0 auto' }}>
              Разрабатываем комплексную правовую позицию для вышестоящего налогового органа и арбитражного суда.
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
        title="Как проходит оспаривание доначислений и решений ФНС"
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
            Аркадий Евгеньевич курирует обжалование крупных налоговых доначислений: проводит независимый аудит расчетов ФНС, выявляет процессуальные дефекты доказательств обвинения, координирует работу налоговых аудиторов и арбитражных представителей.
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
            «Правосудие в налоговых спорах опирается на две вещи: доказательства реальности хозяйственных операций и выявление процессуальных нарушений налоговой инспекции. Это позволяет ломать даже самые жесткие решения ФНС».
          </div>,
          <ul key="3" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>22 года опыта в следственных подразделениях налоговой полиции и МВД РФ</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>Успешная практика отмены доначислений в УФНС и Арбитражном суде Липецкой области</span>
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
        title="Стоимость оспаривания решений и доначислений"
        subtitle="Цена фиксируется в договоре и зависит от стадии процесса, объема претензий и количества обжалуемых эпизодов"
        tiers={pricingTiers}
      />

      {/* ═══ БЛОК 8: КЕЙСЫ ═══ */}
      <CasesBlock
        title="Примеры из практики оспаривания решений ФНС"
        subtitle="Отмена доначислений по НДС и налогу на прибыль в вышестоящих органах и арбитражном суде"
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
              href="/biznesu/nalogovyj-yurist-dlya-biznesa/zashchita-pri-obvinenii-v-droblenii-biznesa/"
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
              Защита при дроблении бизнеса →
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
                ОЦЕНКА РЕШЕНИЯ ФНС
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
                Обсудите оспаривание решения налоговой
              </h2>
              <p
                style={{
                  fontSize: '15px',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '24px'
                }}
              >
                Укажите дату вынесения или вручения решения, общую сумму доначислений и подавалась ли жалоба в УФНС. Мы свяжемся с вами в течение 15 минут в рабочее время для первичного анализа ситуации.
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
                  Конфиденциальность гарантирована
                </div>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>
                  Все сведения охраняются режимом строгой профессиональной и коммерческой тайны.
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
