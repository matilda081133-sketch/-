'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MilitaryHero from '@/components/MilitaryHero';
import FAQBlock from '@/components/FAQBlock';
import CasesBlock, { CaseData } from '@/components/CasesBlock';
import SpecialistBlock from '@/components/SpecialistBlock';
import PricingBlock from '@/components/PricingBlock';
import ProcessBlock from '@/components/ProcessBlock';

export default function SnyatieArestaSchetaClient() {
  const cases: CaseData[] = [
    {
      category: 'Погашение долга',
      title: 'Сняли арест после полного погашения задолженности',
      problem: 'Клиент полностью оплатил долг и исполнительский сбор, однако спустя две недели банковский счёт оставался заблокирован. В банке ссылались на отсутствие постановления пристава о снятии ареста.',
      action: 'Сверили платежи и расчёт задолженности, получили постановление об окончании исполнительного производства, направили приставу обращение об отмене ограничений и проконтролировали отправку документа в банк.',
      result: 'Пристав вынес постановление о снятии ареста и направил его в кредитную организацию. После обработки документа банк восстановил клиенту возможность распоряжаться средствами на счёте.'
    },
    {
      category: 'Излишний арест',
      title: 'Освободили от ареста сумму сверх размера требований',
      problem: 'В рамках одного производства ограничения отразились сразу на нескольких счетах клиента, а общая сумма заблокированных средств существенно превысила остаток задолженности.',
      action: 'Получили сведения по всем счетам и производству, сопоставили остаток долга и объём ограничений, подготовили ходатайство со ссылкой на излишне арестованные денежные средства и приложили банковские документы.',
      result: 'Арест скорректировали в пределах актуальной суммы требований, с подтверждённого излишка ограничение сняли. Клиент получил доступ к остальным деньгам без прекращения законного взыскания долга.'
    },
    {
      category: 'Ошибочная идентификация',
      title: 'Отменили арест счёта, наложенный из-за ошибочной идентификации',
      problem: 'Счёт клиента заблокировали по исполнительному производству в отношении человека с совпадающими фамилией, именем и датой рождения. Клиент не был стороной спора и ранее не получал документов о долге.',
      action: 'Сопоставили идентификаторы должника, подготовили документы о личности и принадлежности счёта, направили обращение в подразделение ФССП и потребовали отменить меры, применённые к ненадлежащему лицу.',
      result: 'Ошибку идентификации подтвердили, постановление в отношении счёта клиента отменили и передали в банк. Доступ к счёту восстановили; сведения клиента отделили от данных фактического должника.'
    }
  ];

  const faqs = [
    {
      q: 'Можно ли снять арест со счёта через банк?',
      a: 'Если ограничение наложено постановлением пристава, банк обычно не вправе отменить его по просьбе клиента. Сначала нужно добиться надлежащего постановления об отмене или корректировке ареста и проверить его поступление в банк.'
    },
    {
      q: 'Сколько времени занимает снятие ареста?',
      a: 'Единого срока нет. Он зависит от причины ограничения, наличия документов, необходимости подтвердить оплату или защищённый доход, вынесения постановления и его обработки банком. Обещать универсальный срок до проверки нельзя.'
    },
    {
      q: 'Арест снимется автоматически после оплаты долга?',
      a: 'Не всегда. Нужно проверить полный расчёт, исполнительский сбор, другие производства, вынесение постановления об окончании производства и отмене ограничений, а также его направление в банк.'
    },
    {
      q: 'Можно ли снять арест только с зарплатного счёта?',
      a: 'Сам факт зачисления зарплаты не всегда означает полное снятие ареста. Проверяются допустимый размер взыскания, идентификация дохода и возможность скорректировать порядок удержаний или защитить установленную законом сумму.'
    },
    {
      q: 'Что делать, если на счёт поступают пособия или алименты?',
      a: 'Нужно подтвердить вид и назначение поступлений банковской выпиской и документами плательщика. Правовой режим зависит от конкретного дохода и вида взыскиваемого требования, поэтому перечень статьи 101 применяется с учётом исключений.'
    },
    {
      q: 'Можно ли снять арест, если долг мне не принадлежит?',
      a: 'Да, если подтверждена ошибочная идентификация или счёт не принадлежит должнику. Потребуются документы о личности, принадлежности счёта и несоответствии данным фактического должника.'
    },
    {
      q: 'Почему банк не разблокировал счёт после постановления пристава?',
      a: 'Нужно проверить, направлено ли постановление именно в этот банк, содержит ли реквизиты нужного счёта и объём снятия ограничения, получено ли оно банком и нет ли другого действующего ареста.'
    },
    {
      q: 'Нужно ли обжаловать постановление пристава в суде?',
      a: 'Не всегда. В части случаев вопрос решается заявлением или жалобой руководителю. Судебный порядок нужен, если акт, отказ или бездействие невозможно устранить административным способом либо такой способ уже не дал результата.'
    },
    {
      q: 'Какие документы нужны для проверки?',
      a: 'Обычно нужны уведомление или справка банка об ограничении, выписка по счёту, номер исполнительного производства, постановления, документы об оплате долга и подтверждение происхождения поступлений. Точный перечень определим по ситуации.'
    }
  ];

  const docStack = (
    <div className="hero-right-col" style={{ width: '100%', position: 'relative', display: 'flex', justifyContent: 'center' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '150%', height: '150%', background: 'radial-gradient(circle, rgba(23, 50, 77, 0.12) 0%, rgba(23, 50, 77, 0.05) 30%, transparent 60%)', zIndex: 0, pointerEvents: 'none' }} />
      <svg className="hero-vector-svg" style={{ position: 'absolute', top: '38%', left: '98%', transform: 'translate(-50%, -50%)', width: '580px', height: '580px', opacity: 0.10, zIndex: 0, pointerEvents: 'none' }} viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="0.6">
        <path d="M3 21h18 M4 21v-2h16v2 M6 19V9 M10 19V9 M14 19V9 M18 19V9 M12 4l-9 5h18l-9-5z M4 9h16" />
      </svg>
      <div className="mockup-container" style={{ zIndex: 1 }}>
        <div style={{ position: 'absolute', width: '250px', height: '250px', background: 'var(--color-primary)', filter: 'blur(100px)', opacity: 0.15, borderRadius: '50%' }}></div>
        <div className="doc-wrapper-float-4"><div className="doc-sheet doc-sheet-4"><div style={{ padding: '40px 30px', height: '100%', display: 'flex', flexDirection: 'column' }}><div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '40px' }}><div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-end' }}><div style={{ width: '100px', height: '4px', background: 'rgba(23,50,77,0.2)' }}></div><div style={{ width: '80px', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div></div></div><div style={{ width: '160px', height: '8px', background: 'var(--color-primary)', margin: '0 auto 40px auto' }}></div><div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}><div style={{ width: '100%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div><div style={{ width: '100%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div><div style={{ width: '60%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div></div></div></div></div>
        <div className="doc-wrapper-float-3"><div className="doc-sheet doc-sheet-3"><div style={{ padding: '40px 30px', height: '100%', display: 'flex', flexDirection: 'column' }}><div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '40px' }}><div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-end' }}><div style={{ width: '100px', height: '4px', background: 'rgba(23,50,77,0.2)' }}></div><div style={{ width: '60px', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div></div></div><div style={{ width: '140px', height: '8px', background: 'var(--color-primary)', margin: '0 auto 40px auto' }}></div><div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}><div style={{ width: '100%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div><div style={{ width: '95%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div><div style={{ width: '80%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div></div></div></div></div>
        <div className="doc-wrapper-float-2"><div className="doc-sheet doc-sheet-2"><div style={{ padding: '30px 25px', height: '100%', display: 'flex', flexDirection: 'column' }}><div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '30px' }}><div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-end' }}><div style={{ width: '100px', height: '4px', background: 'rgba(23,50,77,0.2)' }}></div><div style={{ width: '60px', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div><div style={{ width: '80px', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div></div></div><div style={{ width: '160px', height: '8px', background: 'var(--color-primary)', margin: '0 auto 20px auto' }}></div><div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}><div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}><div style={{ width: '40%', height: '4px', background: 'rgba(23,50,77,0.2)' }}></div><div style={{ width: '100%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div><div style={{ width: '90%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div></div><div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}><div style={{ width: '50%', height: '4px', background: 'rgba(23,50,77,0.2)' }}></div><div style={{ width: '100%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div><div style={{ width: '85%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div></div></div><div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '10px', borderTop: '1px dashed rgba(23,50,77,0.1)' }}><div><div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.5)' }}>Владелец счёта:</div><div style={{ width: '80px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '10px' }}></div></div><div><div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.5)' }}>Юрист:</div><div style={{ width: '80px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '10px' }}></div></div></div></div></div></div>
        
        {/* Верхний лист - чёткий, крупный и читаемый */}
        <div className="doc-wrapper-float-1">
          <div className="doc-sheet doc-sheet-1">
            <div style={{ padding: '24px 20px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', opacity: 0.03, width: '150px' }}>
                <img src="/images/logo_dark.png" alt="" style={{ width: '100%', height: 'auto' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(23,50,77,0.2)', paddingBottom: '10px', marginBottom: '14px' }}>
                <img src="/images/logo_dark.png" alt="Де-Юре" style={{ width: '68px', height: 'auto', opacity: 0.9 }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'flex-end' }}>
                  <div style={{ width: '75px', height: '4px', background: 'rgba(23,50,77,0.25)' }}></div>
                  <div style={{ width: '45px', height: '3px', background: 'rgba(23,50,77,0.15)' }}></div>
                </div>
              </div>
              <div style={{ width: '130px', height: '7px', background: 'var(--color-deep-blue)', margin: '0 auto 14px auto' }}></div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '14px' }}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div style={{ width: '12px', height: '4px', background: 'var(--color-primary)', marginTop: '3px', flexShrink: 0 }}></div>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <div style={{ width: '100%', height: '4px', background: 'rgba(23,50,77,0.15)' }}></div>
                    <div style={{ width: '85%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div style={{ width: '12px', height: '4px', background: 'var(--color-primary)', marginTop: '3px', flexShrink: 0 }}></div>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <div style={{ width: '100%', height: '4px', background: 'rgba(23,50,77,0.15)' }}></div>
                    <div style={{ width: '70%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '10px', borderTop: '1px solid rgba(23,50,77,0.2)' }}>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', letterSpacing: '0.02em' }}>ООО ЮК «ДЕ-ЮРЕ»</div>
                  <div style={{ fontSize: '10px', color: 'rgba(23,50,77,0.7)', fontWeight: 500, marginTop: '2px' }}>ИНН 4800009680</div>
                </div>
                <div style={{ width: '54px', height: '54px', borderRadius: '50%', border: '1.5px solid #17375E', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-12deg)', opacity: 0.9 }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', border: '0.75px dashed #17375E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '8.5px', fontWeight: 'bold', color: '#17375E', textAlign: 'center', lineHeight: 1.15, letterSpacing: '0.04em' }}>ДЕ-ЮРЕ<br/>ЛИПЕЦК</span>
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
            <Link href="/" style={{ color: 'var(--color-primary)' }}>Главная</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/grazhdanam/" style={{ color: 'var(--color-primary)' }}>Гражданам</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/" style={{ color: 'var(--color-primary)' }}>Юрист по исполнительному производству</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Снятие ареста со счёта</span>
          </>
        }
        superTitle="Споры с судебными приставами в Липецке"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Снятие ареста со счёта
            </span>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              или банковской карты
            </span>
          </span>
        }
        subtitle={
          <>
            <style dangerouslySetInnerHTML={{__html: `
              @media (min-width: 992px) {
                .hero-sub-span-desktop {
                  white-space: nowrap !important;
                }
              }
            `}} />
            <span style={{ display: 'inline-block', maxWidth: '100%' }}>
              <span className="hero-sub-span-desktop" style={{ display: 'block' }}>
                Установим источник и основание ограничения, подготовим документы
              </span>
              <span className="hero-sub-span-desktop" style={{ display: 'block' }}>
                для его отмены или корректировки и проконтролируем передачу постановления в банк.
              </span>
            </span>
          </>
        }
        primaryCtaText="Проверить арест счёта"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_hero_form"
        primaryCtaSubtext={
          <>Если доступ к средствам уже заблокирован, позвоните: <a href="tel:+79103503111" data-analytics="click_phone">+7 (910) 350-31-11</a></>
        }
        trustItems={[
          { text: 'Проверяем основание каждого ареста' },
          { text: 'Отмена блокировки счетов и карт' },
          { text: 'Защита зарплаты, пенсий и пособий' },
          { text: 'Куратор — 13 лет опыта в ФССП' },
        ]}
        rightContent={docStack}
      />

      {/* ═══ БЛОК 2: ЧТО СДЕЛАТЬ, ЕСЛИ СЧЁТ ИЛИ КАРТА ЗАБЛОКИРОВАНЫ (СРОЧНЫЕ ДЕЙСТВИЯ) ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              Что сделать, если счёт или карта заблокированы
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Не переводите на арестованный счёт новые деньги, пока не выясните вид ограничения. Сначала зафиксируйте сведения банка и исполнительного производства.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '36px' }}>
            {[
              {
                num: '01',
                title: 'Уточните, кем наложено ограничение',
                desc: 'Запросите в банке номер и дату документа, орган-инициатор, сумму ареста и сведения о доступном остатке. Это позволит не обращаться не по адресу.'
              },
              {
                num: '02',
                title: 'Проверьте исполнительные производства',
                desc: 'Сопоставьте номер производства, взыскателя, сумму долга, дату возбуждения и уже произведённые оплаты. Проверьте, нет ли нескольких производств.'
              },
              {
                num: '03',
                title: 'Сохраните документы о поступлениях',
                desc: 'Если на счёт поступают зарплата, пенсия, алименты, пособия или компенсации, сохраните банковскую выписку и запросите у плательщика документы о виде и назначении дохода.'
              }
            ].map((step, idx) => (
              <div key={idx} className="hover-lift" style={{
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                padding: '36px 28px',
                border: '1px solid var(--color-border)',
                borderTop: '4px solid var(--color-gold)',
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}>
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
                  {step.num}
                </div>
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '8px 0 12px 0', lineHeight: 1.35 }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            background: 'rgba(23, 50, 77, 0.04)',
            borderLeft: '4px solid var(--color-gold)',
            padding: '20px 24px',
            marginBottom: '32px',
            fontSize: '14px',
            color: 'var(--color-deep-blue)',
            lineHeight: 1.6
          }}>
            <strong style={{ color: 'var(--color-primary)' }}>Юридическая справка:</strong> Арест денежных средств регулируется статьёй 81 Федерального закона № 229-ФЗ. При излишнем аресте пристав обязан незамедлительно принять меры к его снятию. Порядок удержаний и защита социальных выплат проверяются по статьям 99 и 101 Закона № 229-ФЗ.
          </div>

          <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '28px', display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <a href="tel:+79103503111" style={{ color: 'var(--color-deep-blue)', fontSize: '20px', fontWeight: 700, textDecoration: 'none', letterSpacing: '0.02em' }} data-analytics="click_phone">
              +7 (910) 350-31-11
            </a>
            <a href="tel:+79103503111" className="btn btn-primary" style={{ padding: '12px 28px', fontSize: '14px' }} data-analytics="click_phone">
              Позвонить юристу
            </a>
            <a href="#form" className="btn btn-outline" style={{ padding: '12px 28px', fontSize: '14px' }} data-analytics="click_urgent_form">
              Проверить арест счёта
            </a>
            <span style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>
              Перезвоним в течение 15 минут в рабочее время
            </span>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: В КАКИХ СИТУАЦИЯХ ПОМОГАЕМ СНЯТЬ АРЕСТ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              В каких ситуациях помогаем снять арест со счёта
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Ограничение снимается не потому, что счёт нужен клиенту, а при наличии подтверждённого правового основания. Сначала определяем, какое именно нарушение или обстоятельство нужно доказать.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '40px' }}>
            {[
              {
                tag: 'Долг погашен',
                title: 'Долг погашен, но счёт не разблокирован',
                desc: 'Проверим учёт платежа, остаток основного долга, исполнительского сбора и расходов, а также наличие постановления об окончании производства и отмене ограничений.'
              },
              {
                tag: 'Излишний арест',
                title: 'Арестована сумма больше долга',
                desc: 'Сопоставим размер требований и фактически ограниченные средства, подготовим требование о снятии ареста с подтверждённого излишка.'
              },
              {
                tag: 'Чужой долг',
                title: 'Счёт арестован за долг другого человека',
                desc: 'Поможем подтвердить ошибочную идентификацию, принадлежность счёта и отсутствие обязанности по чужому исполнительному документу.'
              },
              {
                tag: 'Защищённый доход',
                title: 'На счёт поступают защищённые выплаты',
                desc: 'Проверим вид дохода, назначение и код платежа, исключения закона и документы, которыми подтверждается особый режим поступлений.'
              },
              {
                tag: 'Окончание ИП',
                title: 'Арест не отменён после окончания производства',
                desc: 'Проверим основание завершения производства, содержание постановления, его отправку в банк и сохранение других законных ограничений.'
              },
              {
                tag: 'Задержка банка',
                title: 'Банк сохраняет блокировку после постановления',
                desc: 'Установим, получил ли банк надлежащий документ, соответствует ли он конкретному счёту и сумме, и определим способ добиться его фактического исполнения.'
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
                  {item.title}
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

          {/* Белая карточка с тенью */}
          <div style={{
            background: '#FFFFFF',
            border: '1px solid rgba(23, 50, 77, 0.08)',
            borderLeft: '4px solid var(--color-gold)',
            padding: '28px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            boxShadow: '0 10px 30px rgba(23, 50, 77, 0.09), 0 2px 8px rgba(23, 50, 77, 0.04)'
          }}>
            <div style={{ maxWidth: '720px' }}>
              <h4 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>
                Не уверены, кто арестовал счёт?
              </h4>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                Пришлите уведомление банка или выписку с реквизитами ограничения — юрист определит, какие сведения запросить дальше.
              </p>
            </div>
            <a href="#form" className="btn btn-primary" style={{ whiteSpace: 'nowrap', padding: '12px 24px', fontSize: '14px' }} data-analytics="click_situation_form">
              Разобраться с арестом
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: ОТ ЧЕГО ЗАВИСИТ СПОСОБ СНЯТИЯ АРЕСТА ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              От чего зависит способ снятия ареста
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Внешне блокировка выглядит одинаково, но решение зависит от того, кем наложено ограничение и сохраняется ли основание для взыскания.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '32px' }}>
            <div style={{
              background: 'var(--color-white)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-primary)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              padding: '32px 28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                </svg>
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0 }}>
                  Ошибка или излишний арест
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Готовим подтверждения, заявление или ходатайство приставу. При отказе либо бездействии выбираем жалобу руководителю или обращение в суд.
              </p>
            </div>

            <div style={{
              background: 'var(--color-white)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-gold)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              padding: '32px 28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0 }}>
                  Долг исполнен или ИП завершено
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Проверяем полный расчёт, постановление об окончании или прекращении производства и отмену мер. Затем контролируем направление документа в конкретный банк.
              </p>
            </div>

            <div style={{
              background: 'var(--color-white)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-primary)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              padding: '32px 28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0 }}>
                  Ограничение наложено не приставом
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Если инициатор — суд, следователь, налоговый орган или банк по 115-ФЗ, маршрут исполнительного производства не применяется — предлагаем отдельную правовую оценку.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#form" className="btn btn-primary" style={{ display: 'inline-block', padding: '14px 32px' }}>
              Оценить основания и документы
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 5: ЧТО ВХОДИТ В ЮРИДИЧЕСКУЮ ПОМОЩЬ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              Что входит в юридическую помощь
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Комплексная работа по снятию ограничений — от первичного анализа производства до фактической разблокировки счёта в банке.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px' }}>
            {[
              {
                num: '01',
                title: 'Консультация и оценка ситуации',
                desc: 'Определяем срочность ситуации, основания блокировки и предварительный правовой маршрут действий.'
              },
              {
                num: '02',
                title: 'Проверка производства и банка',
                desc: 'Запрашиваем данные об исполнительном документе, постановлениях и банке-исполнителе ограничения.'
              },
              {
                num: '03',
                title: 'Сверка сумм и платежей',
                desc: 'Сопоставляем размер долга, сбора, фактически арестованные суммы и наличие иных исполнительных производств.'
              },
              {
                num: '04',
                title: 'Анализ выписок и доходов',
                desc: 'Изучаем банковскую выписку, коды выплат и документы о происхождении защищённых законом средств.'
              },
              {
                num: '05',
                title: 'Заявление или ходатайство приставу',
                desc: 'Составляем мотивированное требование приставу об отмене или соразмерной корректировке ареста со счёта.'
              },
              {
                num: '06',
                title: 'Жалоба вышестоящему приставу',
                desc: 'Подаём мотивированную жалобу старшему судебному приставу или в УФССП при отказе либо бездействии.'
              },
              {
                num: '07',
                title: 'Административный иск в суд',
                desc: 'Готовим административное исковое заявление по КАС РФ и доказательную базу, если требуется судебный порядок.'
              },
              {
                num: '08',
                title: 'Контроль разблокировки в банке',
                desc: 'Отслеживаем вынесение, направление постановления в банк и фактическое снятие ареста в кредитной организации.'
              }
            ].map((item, idx) => (
              <div key={idx} className="hover-lift" style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '38px 24px 30px 24px',
                border: '1px solid var(--color-border)',
                borderTop: '4px solid var(--color-gold)',
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                borderRadius: '0',
                position: 'relative',
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '20px',
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
                <div>
                  <h3 style={{ margin: '8px 0 10px 0', fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)' }}>
                    {item.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Карточка 09: Получить план действий */}
            <Link href="#form" style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }} data-analytics="click_action_plan_card">
              <div className="hover-lift" style={{
                background: 'linear-gradient(145deg, #0B1C2A 0%, #17375E 100%)',
                padding: '38px 24px 30px 24px',
                border: '1px solid var(--color-border)',
                borderTop: '4px solid var(--color-gold)',
                boxShadow: '0 8px 24px rgba(11, 28, 42, 0.25)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                width: '100%',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                <div>
                  <div style={{
                    position: 'absolute',
                    top: '-14px',
                    left: '20px',
                    background: 'var(--color-gold)',
                    color: 'var(--color-deep-blue)',
                    fontSize: '12px',
                    fontWeight: 700,
                    padding: '2px 10px',
                    borderRadius: '2px',
                    letterSpacing: '0.05em'
                  }}>
                    СТАРТ
                  </div>
                  <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: '#FFFFFF', margin: '8px 0 12px 0', lineHeight: 1.35 }}>
                    Получить план действий
                  </h3>
                  <p style={{ fontSize: '14.5px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, margin: 0 }}>
                    Опишите ситуацию с арестом счёта — юрист проверит основания каждого ограничения и подскажет порядок действий.
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-gold)', fontSize: '14px', fontWeight: 600, marginTop: '20px' }}>
                  <span>Получить</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 6: ВЕДУЩИЙ ЮРИСТ ПО УСЛУГЕ ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name="Марина Валерьевна Смольянинова"
        position={<>Ведущий юрист ЮК «Де-Юре»,<br />куратор направления «Исполнительное производство»</>}
        imageUrl="/images/smolyaninova.jpg"
        imagePosition="center 15%"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Марина Валерьевна более 13 лет работала в Федеральной службе судебных приставов, в том числе на руководящих должностях. Контролировала исполнительные производства, рассматривала обращения и жалобы, взаимодействовала с судами, банками и государственными органами. Этот опыт помогает определить источник ограничения, проверить правомерность ареста и выстроить маршрут до фактической разблокировки счёта.
          </span>,
          <ul key="2" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>Более 13 лет работы в ФССП, включая руководящие должности</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>Практическое знание порядка взаимодействия приставов с банками и вынесения постановлений</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>Сопровождает доверителей в Липецке и Липецкой области, а также дистанционно по всей РФ</span>
            </li>
          </ul>,
          <a key="3" href="/specialisty/smolyaninova-marina-valerevna/" style={{ display: 'inline-block', marginTop: '16px', fontSize: '14px', color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
            Подробнее о Марине Валерьевне Смольяниновой →
          </a>
        ]}
        buttonText="Задать вопрос юристу"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 7: ПРИМЕРЫ ИЗ ПРАКТИКИ ═══ */}
      <CasesBlock
        title="Примеры из практики"
        showAllLink="/praktika/"
        showAllText="Смотреть все дела"
        showDemoWarning={true}
        cases={cases}
      />

      {/* ═══ БЛОК 8: КАК ПРОХОДИТ РАБОТА ═══ */}
      <ProcessBlock
        title="Как проходит снятие ареста со счёта"
        subtitle="Прозрачный пошаговый процесс от первичного анализа до фактического восстановления доступа к деньгам."
        alignTitle="center"
        steps={[
          {
            num: '01',
            title: 'Уточняем ситуацию',
            desc: 'Уточняем, как проявляется ограничение, какой банк и известен ли номер исполнительного производства.'
          },
          {
            num: '02',
            title: 'Получаем и проверяем документы',
            desc: 'Получаем и проверяем постановления, сведения о долге, платежах, счетах и происхождении поступлений.'
          },
          {
            num: '03',
            title: 'Определяем основание',
            desc: 'Определяем основание для полного снятия, частичной корректировки ареста либо другого способа защиты.'
          },
          {
            num: '04',
            title: 'Готовим документы',
            desc: 'Согласуем состав работы и стоимость; готовим заявление, ходатайство, жалобу или обращение в суд.'
          },
          {
            num: '05',
            title: 'Контролируем пристава',
            desc: 'Контролируем рассмотрение требования и получение надлежащего постановления об отмене ареста.'
          },
          {
            num: '06',
            title: 'Проверяем исполнение банком',
            desc: 'Проверяем направление документа в банк и фактическое изменение статуса счёта до результата.'
          }
        ]}
        ctaTitle="Готовы обсудить вашу ситуацию"
        ctaSubtitle="Опишите блокировку счёта — юрист проверит основания и подскажет план действий."
        ctaButtonText="Обсудить ситуацию"
        ctaButtonHref="#form"
        footerNote="Проверку производства, документов банка и подготовку обращений можно начать дистанционно. Необходимость личного участия зависит от причины ареста, стадии обжалования и выбранного способа защиты."
      />

      {/* ═══ БЛОК 9: СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость снятия ареста со счёта"
        subtitle="Стоимость зависит от источника ограничения, количества производств и банков, наличия постановлений и необходимости обжалования."
        tiers={[
          {
            title: 'Заявление приставу',
            subtitle: 'Внесудебная отмена ареста',
            price: 'от 10 000 ₽',
            popular: true,
            badgeText: 'Популярно',
            features: [
              { name: 'Подготовка мотивированного заявления / ходатайства', value: '✓' },
              { name: 'Формирование комплекта доказательств и выписок', value: '✓' },
              { name: 'Контроль вынесения постановления об отмене ареста', value: '✓' },
              { name: 'Проверка направления документа в конкретный банк', value: '✓' }
            ],
            buttonText: 'Заказать услугу',
            buttonHref: '#form'
          },
          {
            title: 'Жалоба на бездействие',
            subtitle: 'Оспаривание отказа или задержки',
            price: 'от 15 000 ₽',
            features: [
              { name: 'Жалоба старшему приставу / УФССП', value: '✓' },
              { name: 'Административный иск в суд (КАС РФ)', value: '✓' },
              { name: 'Устранение излишнего или ошибочного ареста', value: '✓' },
              { name: 'Защита социальных выплат и доходов', value: '✓' }
            ],
            buttonText: 'Обсудить жалобу',
            buttonHref: '#form'
          },
          {
            title: 'Комплексная разблокировка',
            subtitle: 'Полное правовое сопровождение',
            price: 'от 25 000 ₽',
            features: [
              { name: 'Анализ всех производств и банковских счетов', value: '✓' },
              { name: 'Взаимодействие с приставом и кредитными организациями', value: '✓' },
              { name: 'Судебное представительство при необходимости', value: '✓' },
              { name: 'Сопровождение до фактической разблокировки денег', value: '✓' }
            ],
            buttonText: 'Комплексная защита',
            buttonHref: '#form'
          }
        ]}
        disclaimer="Стоимость определяется после уточнения задачи и изучения имеющихся документов. Состав услуг, цена и порядок оплаты фиксируются в договоре до начала работы. Оплата вознаграждения исполнителя не зависит от исхода дела и не включает государственные пошлины и сопутствующие расходы."
      />

      {/* ═══ БЛОК 10: FAQ ═══ */}
      <FAQBlock
        superTitle="Частые вопросы"
        title="Ответы на частые вопросы"
        subtitle="Разъяснения юриста по снятию ареста со счетов и карт"
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
                <div style={{ width: '40px', height: '2px', background: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>
                  Связаться с нами
                </span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                Обсудите арест счёта с Мариной Валерьевной Смольяниновой
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Кратко укажите банк, когда обнаружили ограничение, номер исполнительного производства и погашен ли долг, если это известно. Обращение передадим Марине Валерьевне Смольяниновой. Она проверит основания, подскажет необходимые документы и согласует с вами консультацию.
              </p>

              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация юриста</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Позвоните прямо сейчас: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="service_schet_arrest_phone_click">+7 (910) 350-31-11</a>
                </p>
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '28px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', margin: '0 0 16px 0', lineHeight: 1.2 }}>
                  Написать нам
                </h3>
                <p style={{ color: 'var(--color-text-secondary)', marginBottom: '24px', fontSize: '15px', lineHeight: 1.6 }}>
                  <span style={{ display: 'inline-block' }}>Оставьте имя и номер телефона. Юрист перезвонит</span> <br />
                  <span style={{ display: 'inline-block' }}>в течение 15 минут в рабочее время.</span>
                </p>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <input type="hidden" name="source_page" value="/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/snyatie-aresta-so-scheta/" />
                  <input type="hidden" name="direction" value="ispolnitelnoe_proizvodstvo_fizlica" />
                  <input type="hidden" name="service" value="snyatie_aresta_so_scheta" />
                  <input type="hidden" name="selected_specialist" value="smolyaninova-marina-valerevna" />
                  <input type="hidden" name="audience" value="citizens" />

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="name" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-deep-blue)' }}>Имя (необязательно)</label>
                    <input type="text" id="name" name="name" autoComplete="name" placeholder="Иван Иванов" style={{ padding: '14px 16px', border: '1px solid rgba(23, 50, 77, 0.2)', borderRadius: '0', fontSize: '15px', outline: 'none', background: 'var(--color-white)', color: 'var(--color-deep-blue)', fontFamily: 'inherit' }} />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="phone" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-deep-blue)' }}>
                      Телефон <span style={{ color: 'var(--color-gold)' }}>*</span>
                    </label>
                    <input type="tel" id="phone" name="phone" autoComplete="tel" required placeholder="+7 (___) ___-__-__" pattern="^\\+7 \\(\\d{3}\\) \\d{3}-\\d{2}-\\d{2}$" style={{ padding: '14px 16px', border: '1px solid rgba(23, 50, 77, 0.2)', borderRadius: '0', fontSize: '15px', outline: 'none', width: '100%', background: 'var(--color-white)', color: 'var(--color-deep-blue)', fontFamily: 'inherit' }} />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="message" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-deep-blue)' }}>Описание ситуации (необязательно)</label>
                    <textarea id="message" name="message" rows={3} placeholder="Кратко укажите банк, когда возникло ограничение и есть ли данные об ИП..." style={{ padding: '14px 16px', border: '1px solid rgba(23, 50, 77, 0.2)', borderRadius: '0', fontSize: '15px', outline: 'none', fontFamily: 'inherit', resize: 'vertical', background: 'var(--color-white)', color: 'var(--color-deep-blue)' }} />
                  </div>

                  <div style={{ background: 'rgba(23, 50, 77, 0.04)', padding: '10px 14px', borderLeft: '3px solid var(--color-gold)', fontSize: '12px', color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>
                    Безопасность данных: не указывайте полный номер карты, реквизиты счёта и коды из сообщений банка. Документы передаются юристу после согласования безопасного канала связи.
                  </div>

                  <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer', marginTop: '4px' }}>
                    <input type="checkbox" name="agreement" required style={{ marginTop: '3px', accentColor: 'var(--color-gold)', flexShrink: 0 }} />
                    <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      <Link href="/consent/" target="_blank" style={{ color: 'var(--color-deep-blue)', textDecoration: 'underline' }}>Я даю согласие на обработку персональных данных</Link> и подтверждаю, что ознакомлен с <Link href="/privacy/" target="_blank" style={{ color: 'var(--color-deep-blue)', textDecoration: 'underline' }}>Политикой в отношении обработки персональных данных</Link>.
                    </span>
                  </label>

                  <button type="submit" style={{ width: '100%', padding: '16px', fontSize: '16px', marginTop: '8px', background: '#10273B', color: '#FFFFFF', border: '1px solid #9B7E55', borderRadius: '0', whiteSpace: 'nowrap', fontWeight: 600, cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: '0 4px 12px rgba(16, 39, 59, 0.15)' }}>
                    Получить консультацию
                  </button>

                  <div style={{ marginTop: '4px', fontSize: '12px', color: 'var(--color-text-secondary)', lineHeight: 1.4, textAlign: 'center' }}>
                    <span style={{ display: 'inline-block' }}>Если вы оставите заявку вечером или в выходной день,</span> <br />
                    <span style={{ display: 'inline-block' }}>мы перезвоним в ближайший рабочий день.</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 12: ДРУГИЕ НАПРАВЛЕНИЯ ПО ИСПОЛНИТЕЛЬНОМУ ПРОИЗВОДСТВУ ═══ */}
      <section className="section bg-light" style={{ padding: '64px 0', borderTop: '1px solid var(--color-border)', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '28px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '12px', marginTop: 0 }}>
              Направления помощи по исполнительному производству
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
              Помощь должникам и взыскателям по другим вопросам исполнительного производства.
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '20px' }}>
            {[
              {
                title: 'Обжалование действий приставов',
                desc: 'Жалобы на незаконные постановления, бездействие и нарушение прав.',
                link: '/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/obzhalovanie-dejstvij-sudebnogo-pristava/'
              },
              {
                title: 'Возврат списанных денег',
                desc: 'Возврат незаконно списанных пособий, пенсий и излишне удержанных сумм.',
                link: '/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/vozvrat-nezakonno-spisannyh-pristavami-deneg/'
              },
              {
                title: 'Снятие ареста с авто',
                desc: 'Снятие запрета регистрационных действий и ареста транспортного средства.',
                link: '/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/snyatie-aresta-s-avtomobilya/'
              },
              {
                title: 'Взыскание по исполнительному листу',
                desc: 'Сопровождение взыскателя, розыск счетов и активов должника через ФССП.',
                link: '/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/vzyskanie-po-ispolnitelnomu-listu/'
              }
            ].map((item, idx) => (
              <a key={idx} href={item.link} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                <div className="card service-card" style={{ height: '100%', padding: '24px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: '0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderTop: '3px solid var(--color-primary)', cursor: 'pointer', transition: 'all 0.3s ease' }}>
                  <div>
                    <h3 style={{ margin: '0 0 10px 0', fontSize: '16px', color: 'var(--color-deep-blue)', lineHeight: 1.35, fontFamily: 'var(--font-serif)' }}>
                      {item.title}
                    </h3>
                    <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      {item.desc}
                    </p>
                  </div>
                  <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontSize: '13px', fontWeight: 600, marginTop: '16px' }}>
                    <span>Подробнее</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
