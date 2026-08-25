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
import PricingBlock from '@/components/PricingBlock';
import ProcessBlock from '@/components/ProcessBlock';

export default function VzyskanieClient() {
  const cases: CaseData[] = [
    {
      category: 'Взыскание через банк',
      title: 'Взыскали присуждённую сумму непосредственно через банк',
      problem: 'Поставщик получил исполнительный лист на 2,8 млн рублей, но не знал, в каком банке у покупателя-должника сохраняется рабочий счёт.',
      action: 'Проверили документ и срок, запросили сведения о счетах, определили действующий банк и подготовили комплект для прямого предъявления.',
      result: 'Банк перечислил взыскателю 2,8 млн рублей; возбуждать исполнительное производство и разыскивать имущество не потребовалось.'
    },
    {
      category: 'Активы и дебиторка',
      title: 'Добились расчёта после работы с активами и дебиторской задолженностью',
      problem: 'На счетах подрядчика не было достаточной суммы, а пристав ограничился стандартными запросами. Долг по решению арбитражного суда составлял 5,4 млн рублей.',
      action: 'Ознакомились с производством, собрали сведения о транспорте, оборудовании и правах требования к заказчикам должника, подали адресные ходатайства о мерах взыскания.',
      result: 'После введения ограничений должник погасил часть суммы, затем стороны согласовали и исполнили график выплаты остатка; требование закрыто полностью.'
    },
    {
      category: 'Повторное предъявление',
      title: 'Возобновили взыскание после безрезультатного возврата листа',
      problem: 'Производство окончили из-за отсутствия найденного имущества. Позднее взыскатель получил сведения, что организация возобновила деятельность и приобрела оборудование.',
      action: 'Проверили срок повторного предъявления, подтвердили новые сведения, повторно направили документ и подготовили ходатайства о проверке счетов и аресте имущества.',
      result: 'Производство возбудили повторно, на оборудование наложили арест, задолженность 1,9 млн рублей погашена до реализации имущества.'
    }
  ];

  const faqs = [
    {
      q: 'Куда предъявлять исполнительный лист на организацию?',
      a: 'Если известен банк и нужно взыскать деньги со счёта, документ можно направить непосредственно в банк. Когда требуется искать активы и применять меры принудительного исполнения, обычно нужен пристав. Для бюджетных должников может действовать специальный порядок.'
    },
    {
      q: 'Как узнать, в каких банках у должника открыты счета?',
      a: 'Взыскатель с исполнительным листом, срок предъявления которого не истёк, вправе запросить предусмотренные законом сведения в налоговом органе. Комплект и способ подачи проверяются до направления запроса.'
    },
    {
      q: 'Что будет, если денег на счёте недостаточно?',
      a: 'Банк исполняет документ в пределах доступных средств и продолжает исполнение в предусмотренном законом порядке, если документ не отозван и нет другого основания прекратить операции. Одновременно оценивается целесообразность перехода в ФССП.'
    },
    {
      q: 'Можно ли одновременно подать один исполнительный лист в банк и приставам?',
      a: 'Оригинал одного бумажного документа нельзя одновременно предъявить разным адресатам. Маршрут и момент отзыва документа нужно планировать с учётом срока предъявления и уже проведённого частичного взыскания.'
    },
    {
      q: 'Что делать, если у должника несколько взыскателей?',
      a: 'Нужно проверить сводное производство, характер требований, очередь и уже арестованные активы. При недостаточности денег распределение зависит от установленной законом очередности и правил внутри одной очереди.'
    },
    {
      q: 'Обязан ли пристав взыскать долг за два месяца?',
      a: 'Нет. Закон устанавливает общий срок совершения исполнительных действий, но он не гарантирует поступление денег. Фактическая длительность зависит от активов, других требований, обжалований, реализации имущества и поведения должника.'
    },
    {
      q: 'Можно ли повторно предъявить лист после возврата?',
      a: 'Во многих случаях да, но сначала нужно проверить основание возврата и срок нового предъявления. Повторная подача без новых сведений и конкретного плана действий может привести к тому же результату.'
    },
    {
      q: 'Что делать, если должник готовится к банкротству?',
      a: 'Нужно быстро сопоставить индивидуальное взыскание с правилами банкротства: проверить публикации и дело, определить характер требования и момент, когда защита интересов должна продолжаться уже в банкротной процедуре.'
    }
  ];

  // Анимированный docStack для первого экрана
  const docStack = (
    <div className="hero-right-col" style={{ width: '100%', position: 'relative', display: 'flex', justifyContent: 'center' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '150%', height: '150%', background: 'radial-gradient(circle, rgba(23, 50, 77, 0.12) 0%, rgba(23, 50, 77, 0.05) 30%, transparent 60%)', zIndex: 0, pointerEvents: 'none' }} />
      <svg className="hero-vector-svg" style={{ position: 'absolute', top: '38%', left: '98%', transform: 'translate(-50%, -50%)', width: '580px', height: '580px', opacity: 0.10, zIndex: 0, pointerEvents: 'none' }} viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="0.6">
        <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
      <div className="mockup-container" style={{ zIndex: 1 }}>
        <div style={{ position: 'absolute', width: '250px', height: '250px', background: 'var(--color-primary)', filter: 'blur(100px)', opacity: 0.15, borderRadius: '50%' }}></div>
        
        {/* Слой 4 */}
        <div className="doc-wrapper-float-4">
          <div className="doc-sheet doc-sheet-4">
            <div style={{ padding: '40px 30px', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '40px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-end' }}>
                  <div style={{ width: '100px', height: '4px', background: 'rgba(23,50,77,0.2)' }}></div>
                  <div style={{ width: '80px', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                </div>
              </div>
              <div style={{ width: '160px', height: '8px', background: 'var(--color-primary)', margin: '0 auto 40px auto' }}></div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ width: '100%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                <div style={{ width: '100%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                <div style={{ width: '60%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Слой 3 */}
        <div className="doc-wrapper-float-3">
          <div className="doc-sheet doc-sheet-3">
            <div style={{ padding: '40px 30px', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '40px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-end' }}>
                  <div style={{ width: '100px', height: '4px', background: 'rgba(23,50,77,0.2)' }}></div>
                  <div style={{ width: '60px', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                </div>
              </div>
              <div style={{ width: '140px', height: '8px', background: 'var(--color-primary)', margin: '0 auto 40px auto' }}></div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ width: '100%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                <div style={{ width: '95%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                <div style={{ width: '80%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Слой 2 */}
        <div className="doc-wrapper-float-2">
          <div className="doc-sheet doc-sheet-2">
            <div style={{ padding: '30px 25px', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-end' }}>
                  <div style={{ width: '90px', height: '4px', background: 'rgba(23,50,77,0.2)' }}></div>
                  <div style={{ width: '60px', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                </div>
              </div>
              <div style={{ width: '150px', height: '8px', background: 'var(--color-primary)', margin: '0 auto 16px auto' }}></div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                <div style={{ width: '100%', height: '4px', background: 'rgba(23,50,77,0.15)' }}></div>
                <div style={{ width: '90%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                <div style={{ width: '70%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
              </div>
              <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '10px', borderTop: '1px dashed rgba(23,50,77,0.15)' }}>
                <div>
                  <div style={{ fontSize: '6px', color: 'rgba(23,50,77,0.6)' }}>Взыскатель:</div>
                  <div style={{ width: '70px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '8px' }}></div>
                </div>
                <div>
                  <div style={{ fontSize: '6px', color: 'rgba(23,50,77,0.6)' }}>Банк / Отдел ФССП:</div>
                  <div style={{ width: '70px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '8px' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Слой 1: Лицевой лист */}
        <div className="doc-wrapper-float-1">
          <div className="doc-sheet doc-sheet-1">
            <div style={{ padding: '24px 20px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(23,50,77,0.2)', paddingBottom: '10px', marginBottom: '12px' }}>
                <img src="/images/logo_dark.png" alt="Де-Юре" style={{ width: '55px', height: 'auto', opacity: 0.9 }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', alignItems: 'flex-end' }}>
                  <span style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)', letterSpacing: '0.05em' }}>ИСПОЛНИТЕЛЬНЫЙ ДОКУМЕНТ</span>
                  <span style={{ fontSize: '5px', color: 'var(--color-primary)', fontWeight: 600 }}>ЮК «Де-Юре» Липецк</span>
                </div>
              </div>

              <div style={{ width: '100%', background: 'rgba(247, 244, 237, 0.75)', border: '1px solid rgba(193, 160, 102, 0.35)', borderRadius: '2px', marginBottom: '12px', padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)', textTransform: 'uppercase' }}>Маршрут исполнения</span>
                  <span style={{ fontSize: '6px', fontWeight: 'bold', color: '#1B5E20', background: 'rgba(76, 175, 80, 0.15)', padding: '1px 5px', borderRadius: '2px' }}>ВЗЫСКАНИЕ В ХОДЕ</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#FFFFFF', padding: '5px 8px', border: '1px solid rgba(23,50,77,0.08)' }}>
                  <span style={{ fontSize: '6px', color: 'var(--color-text-secondary)' }}>Канал:</span>
                  <span style={{ fontSize: '7px', fontWeight: 'bold', color: 'var(--color-deep-blue)' }}>Прямое предъявление в банк / ФССП</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '8px' }}>
                <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C1A066', flexShrink: 0 }}></div>
                  <span style={{ fontSize: '6px', color: 'var(--color-deep-blue)', fontWeight: 500 }}>Поиск открытых счетов должника через ФНС</span>
                </div>
                <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C1A066', flexShrink: 0 }}></div>
                  <span style={{ fontSize: '6px', color: 'var(--color-deep-blue)', fontWeight: 500 }}>Арест имущества, транспорта и оборудования</span>
                </div>
              </div>

              <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '8px', borderTop: '1px solid rgba(23,50,77,0.2)' }}>
                <div>
                  <div style={{ fontSize: '9px', fontWeight: 'bold', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)' }}>ООО ЮК «ДЕ-ЮРЕ»</div>
                  <div style={{ fontSize: '7px', color: 'rgba(23,50,77,0.6)' }}>ИНН 4800009680</div>
                </div>
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', border: '1.5px solid #17375E', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-12deg)', opacity: 0.9 }}>
                  <div style={{ width: '34px', height: '34px', borderRadius: '50%', border: '0.5px dashed #17375E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '6px', fontWeight: 'bold', color: '#17375E', textAlign: 'center', lineHeight: 1 }}>ДЕ-ЮРЕ<br />ЛИПЕЦК</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

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
            <Link href="/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/">Исполнительное производство для бизнеса</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Взыскание по исполнительному листу</span>
          </>
        }
        superTitle="Исполнительное производство для бизнеса"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Взыскание по исполнительному листу
            </span>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              с юридического лица в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Проверим исполнительный документ, счета и активы организации-должника, выберем способ предъявления и будем контролировать взыскание до согласованного результата.
          </span>
        }
        primaryCtaText="Оценить задачу и документы"
        primaryCtaLink="#form"
        primaryCtaAnalytics="b2b_exec_list_hero_cta"
        primaryCtaSubtext={
          <>Если должник уклоняется от исполнения, позвоните: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (910) 350-31-11</a></>
        }
        trustItems={[
          { text: 'Проверим счета и реальные активы должника' },
          { text: 'Выберем банк или ФССП для быстрого исполнения' },
          { text: 'Контролируем ход взыскания до зачисления денег' },
          { text: 'Куратор — 13 лет опыта в органах ФССП' },
        ]}
        rightContent={docStack}
      />

      {/* ═══ БЛОК 2: СИТУАЦИИ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(24px, 3.4vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.25 }}>
              Ситуации, в которых формальной подачи листа недостаточно
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Просто передать исполнительный лист в ФССП или банк часто недостаточно для фактического получения денег. Юрист подключается, когда требуется оценить платёжеспособность должника, найти скрытые активы и ускорить процесс.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '40px' }}>
            {[
              {
                title: 'Организация-должник не исполнила решение добровольно',
                desc: 'Проверим документ, срок предъявления, сведения о должнике и определим, где вероятнее получить деньги.'
              },
              {
                title: 'Известен банк должника, но непонятно, есть ли деньги',
                desc: 'Получим доступные взыскателю сведения о счетах и оценим прямое предъявление без запуска полного производства у приставов.'
              },
              {
                title: 'У должника несколько счетов, объектов и кредиторов',
                desc: 'Сопоставим ликвидность активов, очередь требований, ограничения и риск сводного производства.'
              },
              {
                title: 'Пристав возбудил производство, но взыскание не движется',
                desc: 'Изучим материалы, подготовим адресные ходатайства и при необходимости отдельно обжалуем бездействие.'
              },
              {
                title: 'Исполнительный лист вернули без результата',
                desc: 'Проверим основание возврата, срок повторного предъявления и новые сведения об активах.'
              },
              {
                title: 'У организации появились признаки банкротства или вывода активов',
                desc: 'Оценим, сохраняет ли смысл индивидуальное взыскание и нужен ли параллельный банкротный либо судебный маршрут.'
              }
            ].map((card, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  borderLeft: '4px solid var(--color-gold)',
                  padding: '32px 28px',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 16px rgba(23, 50, 77, 0.04)',
                  overflow: 'hidden'
                }}
              >
                {/* Фоновый гербовый векторный водяной знак */}
                <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', opacity: 0.06, pointerEvents: 'none' }}>
                  <svg width="100" height="100" viewBox="0 0 24 24" fill="var(--color-deep-blue)">
                    <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>

                <div>
                  <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginTop: 0, marginBottom: '14px', lineHeight: 1.35 }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#form" className="btn btn-primary" style={{ padding: '15px 36px', fontSize: '15px' }} data-analytics="b2b_exec_list_hero_cta">
              Проверить перспективу взыскания
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: СПОСОБЫ ВЗЫСКАНИЯ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(24px, 3.4vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.25 }}>
              Банк, ФССП или специальный порядок — после проверки должника
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Выбор способа взыскания зависит от статуса должника, наличия денежных средств на счетах и структуры его имущества.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '32px', marginBottom: '40px' }}>
            {[
              {
                num: '01',
                title: 'Предъявление исполнительного листа в банк',
                desc: 'Подходит, когда известен банк и задача сводится к взысканию денег со счёта. При наличии средств банк исполняет документ в установленном порядке; при их недостаточности стратегия может потребовать смены канала.'
              },
              {
                num: '02',
                title: 'Исполнительное производство в ФССП',
                desc: 'Нужно, когда требуется искать активы, накладывать аресты, проверять транспорт, недвижимость, оборудование и имущественные права, а также координировать несколько мер принудительного исполнения.'
              },
              {
                num: '03',
                title: 'Казначейство или другой специальный адресат',
                desc: 'Для требований к бюджетным учреждениям и отдельным категориям организаций применяется специальный порядок. Адресат и комплект документов определяются после проверки статуса должника.'
              },
              {
                num: '04',
                title: 'Банкротный маршрут',
                desc: 'Если активов недостаточно или уже введена процедура, оцениваем включение требования в реестр, обеспечительные действия и другие способы защиты кредитора. Это отдельный объём работы и отдельная услуга.'
              }
            ].map((route, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--gradient-cream)',
                  border: '1px solid var(--color-border)',
                  borderTop: '4px solid var(--color-gold)',
                  padding: '36px 32px',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 4px 16px rgba(23, 50, 77, 0.04)'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-16px',
                  right: '24px',
                  background: 'var(--color-primary)',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '14px',
                  fontWeight: 700,
                  padding: '4px 12px',
                  borderRadius: '2px',
                  letterSpacing: '0.05em'
                }}>
                  {route.num}
                </div>

                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginTop: 0, marginBottom: '14px', lineHeight: 1.3 }}>
                  {route.title}
                </h3>
                <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {route.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            background: 'var(--gradient-cream)',
            padding: '24px 30px',
            borderLeft: '4px solid var(--color-primary)',
            fontSize: '14px',
            color: 'var(--color-deep-blue)',
            lineHeight: 1.6
          }}>
            <strong>Юридическая справка:</strong> Согласно ст. 8 Федерального закона № 229-ФЗ, взыскатель вправе направить исполнительный документ непосредственно в банк должника. По ст. 69 взыскатель с действующим исполнительным листом вправе запросить в налоговом органе сведения о счетах должника (предоставляются в 3-дневный срок).
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: ЧТО ВХОДИТ В СОПРОВОЖДЕНИЕ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(24px, 3.4vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.25 }}>
              Управляем взысканием, а не ограничиваемся подачей заявления
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Комплексная работа юриста позволяет задействовать все правовые рычаги для фактического перечисления денег.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '20px 48px', marginBottom: '40px' }}>
            {[
              'проверим исполнительный документ, срок предъявления, сумму и историю исполнения;',
              'проанализируем организацию-должника, действующие производства, банкротные признаки и доступные сведения об активах;',
              'запросим предусмотренные законом сведения о банковских счетах должника;',
              'сравним прямое предъявление в банк и возбуждение производства в ФССП;',
              'подготовим заявление, доверенность, реквизиты и комплект для выбранного адресата;',
              'подадим адресные ходатайства о запросах, аресте и иных допустимых исполнительных действиях;',
              'проверим возможность обращения взыскания на имущественные права и дебиторскую задолженность должника;',
              'ознакомимся с материалами производства и проконтролируем исполнение постановлений;',
              'при необходимости согласуем отдельное обжалование бездействия или смену маршрута;',
              'сверим поступления, остаток требования и основания окончания производства.'
            ].map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="var(--color-primary)" strokeWidth="2" fill="none" />
                  <path d="M7 12l3 3 7-7" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={{ fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div style={{
            background: 'var(--color-white)',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-gold)',
            padding: '24px 30px',
            boxShadow: '0 4px 16px rgba(23, 50, 77, 0.04)',
            fontSize: '14px',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.6
          }}>
            <strong style={{ color: 'var(--color-deep-blue)' }}>Граница услуги:</strong> Получение судебного решения, оспаривание сделок должника, банкротство, субсидиарная ответственность, уголовно-правовая оценка вывода активов и самостоятельный спор с приставом требуют отдельной оценки и включаются в договор только после согласования.
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 5: ДОКУМЕНТЫ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(24px, 3.4vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.25 }}>
              Что подготовить для начала работы
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Чем полнее исходный комплект документов, тем быстрее юрист сможет определить наиболее перспективный маршрут взыскания.
            </p>
          </div>

          <div style={{
            background: 'var(--gradient-cream)',
            border: '1px solid var(--color-border)',
            padding: '40px 36px',
            marginBottom: '36px',
            boxShadow: '0 4px 16px rgba(23, 50, 77, 0.04)'
          }}>
            <div className="grid grid-2" style={{ gap: '20px 40px' }}>
              {[
                'исполнительный лист, судебный приказ или другой исполнительный документ;',
                'судебный акт, на основании которого выдан документ;',
                'расчёт присуждённой и фактически полученной суммы;',
                'постановления пристава и материалы предыдущего производства — если документ уже предъявлялся;',
                'известные сведения о счетах, контрагентах, имуществе и фактической деятельности должника;',
                'выписка ЕГРЮЛ и сведения о банкротстве — если они уже собирались;',
                'доверенность и реквизиты счёта компании-взыскателя.'
              ].map((doc, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="var(--color-primary)" strokeWidth="2" fill="none" />
                    <path d="M7 12l3 3 7-7" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span style={{ fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
                    {doc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#form" className="btn btn-primary" style={{ padding: '15px 36px', fontSize: '15px' }} data-analytics="b2b_exec_list_hero_cta">
              Передать документы на проверку
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 6: ВЕДУЩИЙ ЮРИСТ ПО УСЛУГЕ ═══ */}
      <SpecialistBlock
        title="Взысканием руководит юрист с опытом работы в ФССП"
        name="Марина Валерьевна Смольянинова"
        position="Ведущий юрист ЮК «Де-Юре», куратор направления «Исполнительное производство»"
        imageUrl="/images/smolyaninova.jpg"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Марина Валерьевна Смольянинова более 13 лет работала в Федеральной службе судебных приставов, в том числе на руководящих должностях. Этот опыт помогает оценивать не только формальные сроки, но и практическую последовательность действий: какой источник исполнения проверять первым, какие ходатайства имеют смысл и когда нужно менять маршрут.
          </span>,
          <ul key="2" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>13 лет опыта работы в Федеральной службе судебных приставов (ФССП)</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Специализация — исполнительное производство и взыскание с организаций</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Лично проверяет стратегию, ходатайства и ключевые процессуальные документы</span>
            </li>
          </ul>,
          <a key="3" href="/specialisty/smolyaninova-marina-valerevna/" style={{ display: 'inline-block', marginTop: '16px', fontSize: '14px', color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
            Подробнее о Марине Валерьевне Смольяниновой →
          </a>
        ]}
        buttonText="Обратиться к Марине Смольяниновой"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 7: ПРИМЕРЫ ИЗ ПРАКТИКИ ═══ */}
      <CasesBlock
        title="Как можно добиться фактического взыскания с организации"
        showAllLink="/praktika/"
        showAllText="Смотреть практику"
        showDemoWarning={true}
        cases={cases}
      />

      {/* ═══ БЛОК 8: КАК ПРОХОДИТ РАБОТА ═══ */}
      <ProcessBlock
        alignTitle="center"
        title="От проверки должника до контроля поступлений"
        subtitle="Пошаговый процесс взыскания от первого анализа документов до зачисления денег на счёт компании."
        steps={[
          {
            num: '01',
            title: 'Проверяем документы и срок',
            desc: 'Анализируем исполнительный документ, судебный акт, предыдущие предъявления и остаток требования.'
          },
          {
            num: '02',
            title: 'Оцениваем должника',
            desc: 'Проверяем регистрацию, деятельность, производства, банкротные сведения и доступные данные о счетах и активах.'
          },
          {
            num: '03',
            title: 'Согласуем стратегию и стоимость',
            desc: 'Выбираем банк, ФССП или специальный порядок, фиксируем объём работы и критерии смены маршрута.'
          },
          {
            num: '04',
            title: 'Предъявляем документ и сопровождаем взыскание',
            desc: 'Готовим заявления и ходатайства, взаимодействуем с банком или приставом, контролируем ответы и постановления.'
          },
          {
            num: '05',
            title: 'Фиксируем поступления и следующий шаг',
            desc: 'Сверяем перечисления, остаток долга и риски; при необходимости согласуем повторное предъявление, обжалование или банкротный маршрут.'
          }
        ]}
        ctaTitle="Готовы обсудить вашу задачу"
        ctaSubtitle="Кратко опишите ситуацию — мы уточним обстоятельства, проверим сроки и определим оптимальный способ взыскания."
        ctaButtonText="Начать с оценки должника"
        ctaButtonHref="#form"
        footerNote="Консультацию, проверку электронных копий и подготовку большинства документов можно начать дистанционно. Необходимость личного участия в ФССП или банках определяется после выбора способа исполнения."
      />

      {/* ═══ БЛОК 9: СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость юридической помощи"
        subtitle="Форматы работы по взысканию задолженности с юридических лиц"
        tiers={[
          {
            title: 'Анализ стратегии',
            subtitle: 'Оценка перспектив и счетов',
            price: 'от 5 000 ₽',
            features: [
              { name: 'Проверка исполнительного документа и сроков', value: 'Да' },
              { name: 'Анализ счетов и банкротных рисков должника', value: 'Да' },
              { name: 'Выбор оптимального канала (банк / ФССП)', value: 'Да' },
              { name: 'Сопровождение взыскания', value: 'Нет' }
            ],
            buttonText: 'Обсудить задачу',
            buttonHref: '#form'
          },
          {
            title: 'Предъявление в банк',
            subtitle: 'Прямой маршрут',
            popular: true,
            price: 'от 15 000 ₽',
            features: [
              { name: 'Запрос сведений о счетах через ФНС', value: 'Да' },
              { name: 'Подготовка пакета документов для банка', value: 'Да' },
              { name: 'Контроль 3-дневного срока исполнения', value: 'Да' },
              { name: 'Поиск имущества приставами', value: 'Нет' }
            ],
            buttonText: 'Обсудить задачу',
            buttonHref: '#form'
          },
          {
            title: 'Комплексное взыскание',
            subtitle: 'Сопровождение в ФССП',
            price: 'от 45 000 ₽',
            features: [
              { name: 'Возбуждение производства в ФССП', value: 'Да' },
              { name: 'Ходатайства об аресте счетов и активов', value: 'Да' },
              { name: 'Взыскание дебиторской задолженности', value: 'Да' },
              { name: 'Контроль до фактического зачисления денег', value: 'Да' }
            ],
            buttonText: 'Обсудить задачу',
            buttonHref: '#form'
          }
        ]}
        disclaimer="Цена зависит от суммы и структуры требования, истории исполнения, числа счетов и производств, объёма поиска активов, количества адресатов и необходимости переходить к обжалованию или банкротному маршруту. До начала работы фиксируем состав услуги и стоимость в договоре."
        guaranteeText="Если после консультации заключается договор на дальнейшую работу, стоимость консультации засчитывается в оплату по договору."
      />

      {/* ═══ БЛОК 10: FAQ ═══ */}
      <FAQBlock
        superTitle="Частые вопросы бизнеса"
        title={<><span>Вопросы о взыскании</span> <br /><span>с юридического лица</span></>}
        subtitle="Разбираем правила выбора адресата, розыска счетов и взаимодействия с банками и ФССП"
        ctaText="Задать свой вопрос"
        ctaLink="#form"
        faqs={faqs}
      />

      {/* ═══ БЛОК 11: ФИНАЛЬНАЯ ФОРМА ═══ */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px', padding: '80px 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>Связаться с нами</span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                Есть исполнительный лист к организации, но деньги не поступают?
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '28px', textWrap: 'balance' }}>
                Укажите сумму требования, организацию-должника и что уже предпринималось. Марина Валерьевна Смольянинова проверит документы, доступные источники исполнения и предложит практический маршрут взыскания.
              </p>
              
              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация по взысканию</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Позвоните прямо сейчас: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (910) 350-31-11</a>
                </p>
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm
                title="Написать нам"
                subtitle={
                  <>
                    <span style={{ display: 'inline-block' }}>Оставьте имя и номер телефона. Юрист перезвонит</span> <br />
                    <span style={{ display: 'inline-block' }}>в течение 15 минут в рабочее время.</span>
                  </>
                }
                buttonText="Оценить задачу и документы"
                commentPlaceholder="Кратко опишите ситуацию: сумма долга, наименование должника, предъявлялся ли лист в банк или ФССП..."
                subtext="Если вы оставите заявку вечером или в выходной день, мы перезвоним в ближайший рабочий день."
                hiddenFields={[
                  { name: 'pageId', value: 'B2B-10-01' },
                  { name: 'templateId', value: 'T05' },
                  { name: 'page_type', value: 'service' },
                  { name: 'service', value: 'legal_entity_writ_recovery' },
                  { name: 'direction', value: 'business_enforcement' }
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
