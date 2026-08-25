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

export default function IspolnitelnoeGrazhdanamClient() {

  const cases: CaseData[] = [
    {
      category: 'Должник / Возврат выплат',
      title: 'Вернули деньги, списанные из социальной выплаты',
      problem: 'После возбуждения исполнительного производства банк списал поступление, которое относилось к выплатам, защищённым от взыскания. Клиент обнаружил списание уже после движения денег со счёта.',
      action: 'Проверили постановления и выписку по счёту, установили назначение и источник выплаты, собрали подтверждающие документы и подготовили обращения приставу и в банк. Зафиксировали требование о возврате неправомерно взысканной суммы.',
      result: 'Основание списания пересмотрели, деньги вернули на счёт клиента; дальнейшее взыскание скорректировали с учётом вида поступлений.'
    },
    {
      category: 'Должник / Защита имущества',
      title: 'Сняли запрет регистрационных действий с автомобиля нового владельца',
      problem: 'Гражданин приобрёл автомобиль, но при регистрации выяснилось, что после сделки пристав ввёл запрет из-за долга прежнего собственника. Пользоваться автомобилем было можно, зарегистрировать его на покупателя — нет.',
      action: 'Проверили договор, дату передачи автомобиля, оплату и сведения об исполнительном производстве. Подготовили заявление приставу с доказательствами принадлежности имущества другому лицу, а затем — документы для судебной защиты на случай отказа.',
      result: 'Запрет регистрационных действий отменили; покупатель зарегистрировал автомобиль на своё имя.'
    },
    {
      category: 'Взыскатель / Контроль ФССП',
      title: 'Добились реального взыскания после длительного бездействия',
      problem: 'Взыскатель получил исполнительный лист, но в течение длительного времени не получал денег и не понимал, какие действия предпринимал пристав. Ответы на обращения были формальными.',
      action: 'Ознакомились с материалами производства, выявили неиспользованные меры, подготовили ходатайства о запросах в банки и регистрирующие органы, розыске доходов и имущества и проконтролировали сроки рассмотрения. Бездействие обжаловали руководителю подразделения.',
      result: 'Пристав совершил необходимые исполнительные действия, были выявлены доходы и счёт должника; взыскателю начали поступать денежные средства.'
    }
  ];

  const faqs = [
    {
      q: 'Вы помогаете должникам или только взыскателям?',
      a: 'Работаем с обеими сторонами. Должнику помогаем проверить законность списаний, арестов, удержаний и ограничений. Взыскателю — предъявить исполнительный документ, контролировать действия пристава и добиваться фактического исполнения.'
    },
    {
      q: 'Можно ли обжаловать действие или бездействие пристава?',
      a: 'Да, если постановление, действие или бездействие нарушает Ваши права. В зависимости от ситуации возможны жалоба вышестоящему должностному лицу, обращение в прокуратуру или суд. Способ выбирают после изучения материалов и желаемого результата.'
    },
    {
      q: 'Какой срок даётся на жалобу?',
      a: 'Как правило, жалобу подают в течение десяти рабочих дней со дня постановления, действия, установления бездействия либо со дня, когда не извещённое лицо узнало или должно было узнать о нарушении. Начало и возможность восстановления срока нужно проверять индивидуально.'
    },
    {
      q: 'Нужно ли сначала жаловаться старшему приставу, а потом идти в суд?',
      a: 'Не во всех случаях внесудебная жалоба обязательна. Административный и судебный маршруты могут различаться по задаче, срокам и доказательствам. Юрист определит, какой способ или их сочетание подходит именно в Вашей ситуации.'
    },
    {
      q: 'Можно ли вернуть деньги, которые уже списали?',
      a: 'Иногда да. Имеют значение основание взыскания, вид поступления, размер списания, погашение долга и то, куда уже перечислены деньги. Для оценки нужны постановления и банковская выписка с назначением поступления и списания.'
    },
    {
      q: 'Можно ли сохранить прожиточный минимум?',
      a: 'Должник-гражданин вправе обратиться с заявлением о сохранении ежемесячного дохода в размере прожиточного минимума на одном указанном счёте. Правило не применяется к отдельным категориям взысканий, поэтому основания и документы нужно проверить.'
    },
    {
      q: 'Что нужно для консультации?',
      a: 'По возможности подготовьте номер исполнительного производства, исполнительный документ, постановления пристава, уведомления, банковские выписки, переписку и документы на имущество. Если части документов нет, сначала определим, что и где нужно получить.'
    },
    {
      q: 'Можно ли начать работу дистанционно?',
      a: 'Да. Консультацию, изучение электронных копий документов и подготовку обращений можно начать дистанционно. Необходимость личного участия зависит от стадии производства и выбранного способа защиты.'
    }
  ];

  // Анимированный docStack для первого экрана
  const docStack = (
    <div className="hero-right-col" style={{ width: '100%', position: 'relative', display: 'flex', justifyContent: 'center', marginTop: '24px' }}>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '130%',
        height: '130%',
        background: 'radial-gradient(circle, rgba(193, 160, 102, 0.15) 0%, rgba(23, 50, 77, 0.04) 40%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <svg className="hero-vector-svg" style={{ position: 'absolute', top: '45%', left: '85%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', opacity: 0.09, zIndex: 0, pointerEvents: 'none' }} viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="0.6">
        <path d="M3 21h18 M4 21v-2h16v2 M6 19V9 M10 19V9 M14 19V9 M18 19V9 M12 4l-9 5h18l-9-5z M4 9h16"/>
      </svg>

      <div className="mockup-container" style={{ zIndex: 1, margin: 0 }}>
        <div style={{ position: 'absolute', width: '220px', height: '220px', background: 'var(--color-primary)', filter: 'blur(90px)', opacity: 0.12, borderRadius: '50%' }}></div>
        
        {/* Слой 4: Постановление ФССП */}
        <div className="doc-wrapper-float-4">
          <div className="doc-sheet doc-sheet-4">
            <div style={{ padding: '35px 25px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '25px' }}>
                <div style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  ФССП РОССИИ<br/>
                  <span style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)' }}>ИП № 11842/26/48002</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end' }}>
                  <div style={{ width: '80px', height: '3px', background: 'rgba(23,50,77,0.2)' }}></div>
                  <div style={{ width: '50px', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                </div>
              </div>
              <div style={{ width: '140px', height: '6px', background: 'var(--color-primary)', margin: '0 auto 20px auto' }}></div>
              <div style={{ fontSize: '7px', fontWeight: 'bold', color: 'var(--color-deep-blue)', textAlign: 'center', marginBottom: '14px', fontFamily: 'var(--font-serif)' }}>
                ПОСТАНОВЛЕНИЕ О ВОЗБУЖДЕНИИ ИП
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ width: '100%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                <div style={{ width: '90%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                <div style={{ width: '75%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Слой 3: Арест счетов и имущества */}
        <div className="doc-wrapper-float-3">
          <div className="doc-sheet doc-sheet-3">
            <div style={{ padding: '35px 25px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'absolute', top: '22px', left: '22px', width: '95px', height: '28px', border: '1.5px solid rgba(23, 50, 77, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-4deg)' }}>
                <span style={{ fontSize: '5px', fontWeight: 'bold', color: 'rgba(23,50,77,0.7)', fontFamily: 'var(--font-serif)', textAlign: 'center', lineHeight: 1.1 }}>
                  УФССП ПО ЛИПЕЦКОЙ ОБЛ.<br/>ОСП ПО ЛЕВОБЕРЕЖНОМУ Р-НУ
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '30px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end' }}>
                  <div style={{ width: '90px', height: '3px', background: 'rgba(23,50,77,0.2)' }}></div>
                  <div style={{ width: '60px', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                </div>
              </div>
              <div style={{ width: '130px', height: '6px', background: 'var(--color-primary)', margin: '0 auto 16px auto' }}></div>
              <div style={{ fontSize: '7px', fontWeight: 'bold', color: 'var(--color-deep-blue)', textAlign: 'center', marginBottom: '14px', fontFamily: 'var(--font-serif)' }}>
                СНЯТИЕ АРЕСТА СО СЧЕТА И КАРТЫ
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ width: '100%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                <div style={{ width: '95%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                <div style={{ width: '80%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Слой 2: Жалоба на действия / бездействие */}
        <div className="doc-wrapper-float-2">
          <div className="doc-sheet doc-sheet-2">
            <div style={{ padding: '30px 22px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <div style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-primary)' }}>
                  СТАРШЕМУ СУДЕБНОМУ ПРИСТАВУ
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'flex-end' }}>
                  <div style={{ width: '70px', height: '3px', background: 'rgba(23,50,77,0.2)' }}></div>
                  <div style={{ width: '40px', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                </div>
              </div>
              <div style={{ width: '120px', height: '6px', background: 'var(--color-deep-blue)', margin: '0 auto 14px auto' }}></div>
              <div style={{ fontSize: '7px', fontWeight: 'bold', color: 'var(--color-deep-blue)', textAlign: 'center', marginBottom: '12px', fontFamily: 'var(--font-serif)' }}>
                ЖАЛОБА В ПОРЯДКЕ ПОДЧИНЕННОСТИ
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px' }}>
                <div style={{ width: '100%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                <div style={{ width: '85%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                <div style={{ width: '70%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
              </div>
              <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '10px', borderTop: '1px dashed rgba(23,50,77,0.15)' }}>
                <div>
                  <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)' }}>Заявитель:</div>
                  <div style={{ width: '60px', height: '1px', background: 'rgba(23,50,77,0.3)', marginTop: '6px' }}></div>
                </div>
                <div>
                  <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)' }}>Подпись:</div>
                  <div style={{ width: '60px', height: '1px', background: 'rgba(23,50,77,0.3)', marginTop: '6px' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Слой 1: Лицевой лист ЮК Де-Юре */}
        <div className="doc-wrapper-float-1">
          <div className="doc-sheet doc-sheet-1">
            <div style={{ padding: '24px 20px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(23,50,77,0.2)', paddingBottom: '10px', marginBottom: '12px' }}>
                <img src="/images/logo_dark.png" alt="Де-Юре" style={{ width: '55px', height: 'auto', opacity: 0.9 }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', alignItems: 'flex-end' }}>
                  <span style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)', letterSpacing: '0.05em' }}>ПРАВОВОЕ СОПРОВОЖДЕНИЕ</span>
                  <span style={{ fontSize: '5px', color: 'var(--color-primary)', fontWeight: 600 }}>Исполнительное производство</span>
                </div>
              </div>

              <div style={{ width: '100%', background: 'rgba(247, 244, 237, 0.75)', border: '1px solid rgba(193, 160, 102, 0.35)', borderRadius: '2px', marginBottom: '12px', padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)', textTransform: 'uppercase' }}>Статус защиты</span>
                  <span style={{ fontSize: '6px', fontWeight: 'bold', color: '#1B5E20', background: 'rgba(76, 175, 80, 0.15)', padding: '1px 5px', borderRadius: '2px' }}>ПОД КОНТРОЛЕМ</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#FFFFFF', padding: '5px 8px', border: '1px solid rgba(23,50,77,0.08)' }}>
                  <span style={{ fontSize: '6px', color: 'var(--color-text-secondary)' }}>Куратор направления:</span>
                  <span style={{ fontSize: '7px', fontWeight: 'bold', color: 'var(--color-deep-blue)' }}>Смольянинова М. В. (13 лет в ФССП)</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '8px' }}>
                <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C1A066', flexShrink: 0 }}></div>
                  <span style={{ fontSize: '6px', color: 'var(--color-deep-blue)', fontWeight: 500 }}>Защита от незаконных списаний и арестов</span>
                </div>
                <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C1A066', flexShrink: 0 }}></div>
                  <span style={{ fontSize: '6px', color: 'var(--color-deep-blue)', fontWeight: 500 }}>Взыскание по исполнительному листу</span>
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
            <Link href="/grazhdanam/">Гражданам</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span>Юрист по исполнительному производству</span>
          </>
        }
        superTitle="Помощь должникам и взыскателям в Липецке"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>Юрист по исполнительному</span>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>производству в Липецке</span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Защищаем граждан от незаконных списаний, арестов и ограничений, обжалуем действия и бездействие приставов и помогаем взыскателям добиться исполнения решения суда.
          </span>
        }
        primaryCtaText="Обсудить ситуацию"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_primary_cta_b2c_hub"
        primaryCtaSubtext={
          <>Если ограничения или списания уже начались, позвоните: <a href="tel:+79103503111">+7 (910) 350-31-11</a></>
        }
        trustItems={[
          { text: 'Помощь должникам и взыскателям' },
          { text: 'Защита от незаконных списаний и арестов' },
          { text: 'Взаимодействие с ФССП, банками, судами' },
          { text: 'Куратор — 13 лет опыта в ФССП' },
        ]}
        rightContent={docStack}
      />

      {/* ═══ БЛОК 2: КОГДА ВАЖНО НЕ ОТКЛАДЫВАТЬ ОБРАЩЕНИЕ ═══ */}
      <section style={{ background: 'var(--color-deep-blue)', padding: '64px 0 56px', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-white)', marginBottom: '12px', marginTop: 0 }}>
            <span style={{ display: 'inline-block' }}>Когда важно не</span> <br /><span style={{ display: 'inline-block' }}>откладывать обращение</span>
          </h2>
          <div style={{ width: '60px', height: '2px', background: 'var(--color-gold)', marginBottom: '20px' }}></div>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '16px', marginBottom: '40px', maxWidth: '850px', lineHeight: 1.6 }}>
            <span style={{ display: 'inline-block' }}>В исполнительном производстве отдельные решения и действия обжалуются в короткий срок,</span> <br className="hidden-mobile" />
            <span style={{ display: 'inline-block' }}>а деньги или имущество могут быть перечислены взыскателю либо переданы на реализацию.</span> <br className="hidden-mobile" />
            <span style={{ display: 'inline-block' }}>Чем раньше юрист увидит документы, тем больше доступных способов защиты.</span>
          </p>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '32px' }}>
            {/* Карточка 1 */}
            <div 
              className="urgent-card"
              style={{ 
                background: 'linear-gradient(135deg, #FAF7F2 0%, #F3ECDF 100%)', 
                padding: '32px 28px', 
                borderTop: '4px solid var(--color-gold)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px', minHeight: '48px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B08D57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', marginTop: 0, lineHeight: 1.3 }}>
                  Получили постановление или узнали о действии пристава
                </div>
              </div>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                Для жалобы на постановление, действие или бездействие обычно предусмотрено десять рабочих дней. Начало срока зависит от того, когда лицо было извещено или узнало о нарушении, поэтому дату нужно определить по документам.
              </p>
            </div>

            {/* Карточка 2 */}
            <div 
              className="urgent-card"
              style={{ 
                background: 'linear-gradient(135deg, #FAF7F2 0%, #F3ECDF 100%)', 
                padding: '32px 28px', 
                borderTop: '4px solid var(--color-gold)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px', minHeight: '48px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B08D57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', marginTop: 0, lineHeight: 1.3 }}>
                  Списали защищённые выплаты или арестовали имущество
                </div>
              </div>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                Нужно установить основание взыскания, источник денег, статус имущества и стадию исполнения, затем оперативно выбрать заявление, жалобу или обращение в суд.
              </p>
            </div>

            {/* Карточка 3 */}
            <div 
              className="urgent-card"
              style={{ 
                background: 'linear-gradient(135deg, #FAF7F2 0%, #F3ECDF 100%)', 
                padding: '32px 28px', 
                borderTop: '4px solid var(--color-gold)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px', minHeight: '48px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B08D57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', marginTop: 0, lineHeight: 1.3 }}>
                  Взыскание не движется, а активы могут исчезнуть
                </div>
              </div>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                Взыскателю важно проверить материалы производства, заявить конкретные исполнительные действия и оценить, можно ли предъявить документ непосредственно в банк или использовать иной законный маршрут.
              </p>
            </div>
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
            <strong style={{ color: '#FFFFFF' }}>Юридическая справка:</strong> Десятидневный срок следует из статьи 122 Федерального закона № 229-ФЗ и применяется также к судебному <br className="hidden-mobile" />оспариванию по части 3 статьи 219 КАС РФ.
          </div>

          <style dangerouslySetInnerHTML={{__html: `
            .urgent-card:hover {
              transform: translateY(-6px);
              box-shadow: 0 16px 36px rgba(0,0,0,0.22) !important;
            }
            .btn-urgent-outline {
              border: 1px solid rgba(255,255,255,0.8) !important;
              color: #FFFFFF !important;
              background: transparent !important;
              transition: all 0.3s ease !important;
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
              transition: all 0.3s ease !important;
              border: 1px solid var(--color-gold) !important;
            }
            .btn-urgent-call:hover {
              background-color: #FFFFFF !important;
              color: #0B1C2A !important;
              border-color: #FFFFFF !important;
            }
          `}} />

          {/* Зона связи */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '28px', display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <a href="tel:+79103503111" style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.02em' }}>
              +7 (910) 350-31-11
            </a>
            <a href="tel:+79103503111" className="btn-urgent-call" style={{ padding: '14px 28px', fontSize: '15px' }} data-analytics="b2c_urgent_call_click">
              Позвонить юристу
            </a>
            <a href="#form" className="btn btn-urgent-outline" style={{ padding: '14px 28px', fontSize: '15px' }}>
              Описать ситуацию
            </a>
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
              Перезвоним вам в течение 15 минут в рабочее время
            </span>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: С КАКИМИ СИТУАЦИЯМИ МЫ ПОМОГАЕМ (Должник и Взыскатель) ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(24px, 3.4vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.25 }}>
              С какими ситуациями мы помогаем
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Сначала определяем Вашу роль в производстве и проверяем материалы дела. Дальнейший маршрут зависит от того, нужно ли защититься от взыскания или добиться фактического исполнения решения.
            </p>
          </div>

          {/* ГРУППА 1: ДОЛЖНИК */}
          <div style={{ marginBottom: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--color-gold)' }}></div>
              <h3 style={{ fontSize: '22px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0 }}>
                Если Вы должник
              </h3>
            </div>

            <div className="grid grid-3" style={{ gap: '24px' }}>
              {[
                {
                  num: '01',
                  title: 'Списали деньги или удерживают слишком много',
                  desc: 'Проверим основание взыскания, источник поступлений, размер удержаний и возможность вернуть незаконно взысканное.'
                },
                {
                  num: '02',
                  title: 'Арестовали счёт, автомобиль или другое имущество',
                  desc: 'Установим, кем и на каком основании введено ограничение, подготовим документы для его снятия либо оспаривания.'
                },
                {
                  num: '03',
                  title: 'Ограничили выезд, начислили сбор или не окончили производство',
                  desc: 'Проверим постановления и фактическое состояние расчётов, определим порядок обращения и снятия ограничений.'
                }
              ].map((item) => (
                <div
                  key={item.num}
                  className="hover-lift"
                  style={{
                    background: 'var(--color-white)',
                    border: '1px solid var(--color-border)',
                    borderTop: '3px solid var(--color-gold)',
                    boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)',
                    padding: '32px 26px',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative'
                  }}
                >
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(193, 160, 102, 0.15)',
                    color: 'var(--color-gold)',
                    fontWeight: 700,
                    fontSize: '13px',
                    marginBottom: '16px'
                  }}>
                    {item.num}
                  </div>

                  <h4 style={{
                    fontSize: '18px',
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--color-deep-blue)',
                    margin: '0 0 12px 0',
                    lineHeight: 1.35
                  }}>
                    {item.title}
                  </h4>

                  <p style={{
                    fontSize: '14px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ГРУППА 2: ВЗЫСКАТЕЛЬ */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--color-primary)' }}></div>
              <h3 style={{ fontSize: '22px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0 }}>
                Если Вы взыскатель
              </h3>
            </div>

            <div className="grid grid-3" style={{ gap: '24px' }}>
              {[
                {
                  num: '04',
                  title: 'Решение суда есть, но деньги не поступают',
                  desc: 'Проверим исполнительный документ, его предъявление и действия пристава, сформируем план дальнейшего взыскания.'
                },
                {
                  num: '05',
                  title: 'Пристав не разыскивает счета, доходы и имущество',
                  desc: 'Изучим материалы, подготовим ходатайства и при наличии оснований обжалуем бездействие должностного лица.'
                },
                {
                  num: '06',
                  title: 'Нужно выбрать способ предъявления документа',
                  desc: 'Оценим работу через ФССП, банк, работодателя, казначейство или иной предусмотренный законом порядок.'
                }
              ].map((item) => (
                <div
                  key={item.num}
                  className="hover-lift"
                  style={{
                    background: 'var(--color-white)',
                    border: '1px solid var(--color-border)',
                    borderTop: '3px solid var(--color-primary)',
                    boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)',
                    padding: '32px 26px',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative'
                  }}
                >
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(23, 50, 77, 0.1)',
                    color: 'var(--color-primary)',
                    fontWeight: 700,
                    fontSize: '13px',
                    marginBottom: '16px'
                  }}>
                    {item.num}
                  </div>

                  <h4 style={{
                    fontSize: '18px',
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--color-deep-blue)',
                    margin: '0 0 12px 0',
                    lineHeight: 1.35
                  }}>
                    {item.title}
                  </h4>

                  <p style={{
                    fontSize: '14px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: НАПРАВЛЕНИЯ ПОМОЩИ (5 карточек услуг) ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(24px, 3.4vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.25 }}>
              Направления помощи
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Выберите ситуацию, чтобы узнать, какие документы и обстоятельства имеют значение, какие действия возможны и как строится работа по конкретной услуге.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '32px' }}>
            {[
              {
                title: 'Обжалование действий и бездействия судебного пристава',
                desc: 'Проверка постановлений и материалов производства, жалоба вышестоящему должностному лицу, в прокуратуру или обращение в суд — в зависимости от задачи.',
                href: '/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/obzhalovanie-dejstvij-i-bezdejstviya-pristava/'
              },
              {
                title: 'Возврат незаконно списанных приставами денег',
                desc: 'Помощь при списании защищённых выплат, повторном или избыточном взыскании, а также после погашения задолженности.',
                href: '/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/vozvrat-nezakonno-spisannyh-pristavami-deneg/'
              },
              {
                title: 'Снятие ареста со счёта и разблокировка банковской карты',
                desc: 'Проверка основания ареста, источника поступлений и документов; обращения к приставу, в банк или суд по применимому маршруту.',
                href: '/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/snyatie-aresta-so-scheta/'
              },
              {
                title: 'Снятие ареста с автомобиля и запрета на регистрационные действия',
                desc: 'Помощь владельцу или добросовестному приобретателю при аресте транспорта, запрете регистрации и притязаниях на имущество другого лица.',
                href: '/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/snyatie-aresta-s-avtomobilya/'
              },
              {
                title: 'Взыскание по исполнительному листу',
                desc: 'Сопровождение взыскателя после решения суда: предъявление документа, контроль пристава, поиск активов и обжалование бездействия.',
                href: '/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/vzyskanie-po-ispolnitelnomu-listu/'
              }
            ].map((srv, idx) => (
              <a
                key={idx}
                href={srv.href}
                style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}
                data-analytics="click_service_card"
              >
                <div
                  className="card service-card hover-lift"
                  style={{
                    height: '100%',
                    minHeight: '230px',
                    padding: '32px 28px',
                    background: 'var(--color-white)',
                    border: '1px solid var(--color-border)',
                    borderTop: '3px solid var(--color-primary)',
                    borderRadius: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    boxShadow: '0 4px 16px rgba(23, 50, 77, 0.04)'
                  }}
                >
                  <div>
                    <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.35, fontFamily: 'var(--font-serif)' }}>
                      {srv.title}
                    </h3>
                    <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                      {srv.desc}
                    </p>
                  </div>
                  <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, marginTop: 'auto' }}>
                    <span>Подробнее</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* ═══ БЛОК 5: НЕ НАШЛИ СВОЮ СИТУАЦИЮ? ═══ */}
          <div style={{
            background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-gold)',
            padding: '32px 36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
            boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)'
          }}>
            <div style={{ maxWidth: '680px' }}>
              <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>
                Не нашли свою ситуацию?
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.55 }}>
                Кратко опишите, что произошло и на какой стадии находится производство. Юрист изучит обстоятельства и подскажет, относится ли вопрос к исполнительному производству и с каких действий лучше начать.
              </p>
            </div>
            <a href="#form" className="btn btn-primary" style={{ padding: '14px 28px', fontSize: '14px', whiteSpace: 'nowrap' }}>
              Описать ситуацию
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 6: КУРАТОР НАПРАВЛЕНИЯ ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name="Марина Валерьевна Смольянинова"
        position="Ведущий юрист ЮК «Де-Юре», куратор направления «Исполнительное производство»"
        imageUrl="/images/specialists/smolyaninova.jpg"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Марина Валерьевна более 13 лет работала в Федеральной службе судебных приставов, в том числе на руководящих должностях. Занималась организацией и контролем исполнительных производств, рассмотрением обращений и жалоб, участвовала в исполнительных действиях и взаимодействовала с судами и государственными органами. Этот опыт помогает оценивать ситуацию с позиции реальной работы системы принудительного исполнения.
          </span>,
          <ul key="2" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Более 13 лет работы в ФССП, включая руководящие должности</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Более пяти лет юридической практики и судебного представительства</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Представительство граждан и организаций в ФССП, прокуратуре и судах</span>
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
        title="Как проходит работа"
        subtitle="От первичного уточнения ситуации до контроля фактического результата."
        alignTitle="left"
        steps={[
          {
            num: '01',
            title: 'Консультация',
            desc: 'Уточняем Вашу роль в производстве, что уже произошло, какие постановления и уведомления получены и есть ли срочный срок.'
          },
          {
            num: '02',
            title: 'Изучение материалов',
            desc: 'Проверяем исполнительный документ, постановления, банковские выписки, переписку, сведения об имуществе и другие доступные документы.'
          },
          {
            num: '03',
            title: 'Правовая оценка',
            desc: 'Определяем законность действий, доступные требования, риски и оптимальный маршрут: заявление, ходатайство, жалоба, обращение в банк или суд.'
          },
          {
            num: '04',
            title: 'Согласование работы',
            desc: 'Фиксируем задачи, состав юридической помощи, порядок взаимодействия и стоимость до заключения договора.'
          },
          {
            num: '05',
            title: 'Юридические действия',
            desc: 'Готовим и подаём документы, участвуем в исполнительных действиях и представляем интересы клиента в ФССП, банках, прокуратуре и суде.'
          },
          {
            num: '06',
            title: 'Контроль результата',
            desc: 'Отслеживаем рассмотрение обращений и движение производства, сообщаем о результатах и согласовываем следующий шаг.'
          }
        ]}
        ctaTitle="Готовы обсудить вашу ситуацию"
        ctaSubtitle="Опишите задачу — юрист изучит документы и предложит понятный план защиты."
        ctaButtonText="Обсудить ситуацию"
        ctaButtonHref="#form"
        footerNote="Дистанционный формат: Консультацию, изучение документов и подготовку большинства обращений можно начать дистанционно. Если потребуется личное участие юриста в исполнительных действиях, ФССП или суде, место и порядок работы согласуем заранее."
      />

      {/* ═══ БЛОК 9: СТОИМОСТЬ ЮРИДИЧЕСКОЙ ПОМОЩИ ═══ */}
      <PricingBlock
        title="Стоимость юридической помощи"
        subtitle="Стоимость зависит от роли клиента, стадии производства, объёма материалов, срочности, выбранного порядка обжалования и необходимости представительства."
        tiers={[
          {
            title: 'Консультация и анализ',
            subtitle: 'Разбор ситуации и документов',
            features: [
              { name: 'Правовая оценка документов', value: '[уточняется]' },
              { name: 'Проверка сроков и рисков', value: '[уточняется]' },
              { name: 'Выбор оптимального маршрута', value: '[уточняется]' },
              { name: 'Определение первоочередных мер', value: '[уточняется]' }
            ],
            buttonText: 'Получить оценку',
            buttonHref: '#form'
          },
          {
            title: 'Подготовка документов',
            subtitle: 'Заявления, жалобы, иски',
            popular: true,
            badgeText: 'Популярно',
            features: [
              { name: 'Жалоба в порядке подчинённости', value: '[уточняется]' },
              { name: 'Заявление о снятии ареста', value: '[уточняется]' },
              { name: 'Ходатайство о прожиточном минимуме', value: '[уточняется]' },
              { name: 'Иск / заявление в суд (КАС РФ)', value: '[уточняется]' }
            ],
            buttonText: 'Заказать документы',
            buttonHref: '#form'
          },
          {
            title: 'Сопровождение производства',
            subtitle: 'Комплексная защита под ключ',
            features: [
              { name: 'Взаимодействие с приставом и банком', value: '[уточняется]' },
              { name: 'Контроль исполнительных действий', value: '[уточняется]' },
              { name: 'Представительство в суде и ФССП', value: '[уточняется]' },
              { name: 'Сопровождение до результата', value: '[уточняется]' }
            ],
            buttonText: 'Обсудить сопровождение',
            buttonHref: '#form'
          }
        ]}
        disclaimer="Стоимость определяется после уточнения задачи и изучения имеющихся документов. Состав услуг, цена и порядок оплаты фиксируются в договоре до начала работы. Оплата вознаграждения исполнителя не зависит от исхода дела и не включает государственные пошлины и иные сопутствующие расходы."
      />

      {/* ═══ БЛОК 10: FAQ ═══ */}
      <FAQBlock
        superTitle="Частые вопросы клиентов"
        title={<><span>Ответы на</span> <br /><span>частые вопросы</span></>}
        subtitle="Об исполнительном производстве для граждан"
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
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', color: 'var(--color-primary)', fontWeight: 600 }}>
                  Связаться с нами
                </span>
              </div>

              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', lineHeight: 1.25, margin: '0 0 20px 0' }}>
                Обсудите ситуацию с Мариной Валерьевной Смольяниновой
              </h2>

              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: '0 0 32px 0' }}>
                Кратко опишите, что произошло и на какой стадии находится исполнительное производство. Обращение передадим Марине Валерьевне Смольяниновой. Она уточнит обстоятельства, подскажет, какие документы подготовить, и согласует с Вами консультацию.
              </p>

              <div style={{ background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)', border: '1px solid var(--color-border)', borderLeft: '4px solid var(--color-gold)', padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px', marginTop: 'auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-deep-blue)' }}>Перезвоним в течение 15 минут в рабочее время</span>
                </div>
                <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Если Вы оставите заявку вечером или в выходной день, мы перезвоним в ближайший рабочий день.
                </span>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)', lineHeight: 1.4, marginTop: '4px' }}>
                  Не указывайте в форме паспортные данные, номера банковских счетов и конфиденциальные сведения.
                </span>
              </div>
            </div>

            <div style={{ background: 'var(--color-white)', padding: '40px', border: '1px solid var(--color-border)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <ContactsForm
                title="Получить консультацию юриста"
                subtitle="Заполните форму, и мы свяжемся с вами для уточнения деталей"
                buttonText="Получить консультацию"
                hiddenFields={[
                  { name: 'source_page', value: '/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/' },
                  { name: 'direction', value: 'ispolnitelnoe_proizvodstvo_fizlica' },
                  { name: 'selected_specialist', value: 'smolyaninova-marina-valerevna' }
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
