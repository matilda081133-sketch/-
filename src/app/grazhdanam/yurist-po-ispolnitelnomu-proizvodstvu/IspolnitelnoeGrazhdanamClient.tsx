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
        imageUrl="/images/smolyaninova.jpg"
        imageName="Марина Валерьевна Смольянинова"
        imageSubtitle="Ведущий юрист ЮК «Де-Юре», куратор направления «Исполнительное производство» (13 лет опыта в ФССП)"
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

      {/* ═══ БЛОК 3: С КАКИМИ СИТУАЦИЯМИ МЫ ПОМОГАЕМ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span style={{ display: 'inline-block' }}>С какими ситуациями</span> <br />
              <span style={{ display: 'inline-block' }}>мы помогаем</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Сначала определяем Вашу роль в производстве и проверяем материалы дела.</span> <br />
              <span style={{ display: 'inline-block' }}>Дальнейший маршрут зависит от того, нужно ли защититься от взыскания или добиться исполнения решения.</span>
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {[
              { 
                tag: 'Должник / Списания', 
                title: (
                  <>
                    <span style={{ display: 'block' }}>Списали деньги</span>
                    <span style={{ display: 'block' }}>или удерживают доход</span>
                  </>
                ), 
                desc: (
                  <>
                    <span style={{ display: 'inline-block' }}>Проверим основание взыскания,</span>{' '}
                    <span style={{ display: 'inline-block' }}>источник поступлений, размер удержаний</span>{' '}
                    <span style={{ display: 'inline-block' }}>и&nbsp;возможность вернуть взысканное.</span>
                  </>
                ) 
              },
              { 
                tag: 'Должник / Арест', 
                title: (
                  <>
                    <span style={{ display: 'block' }}>Арест счёта, автомобиля</span>
                    <span style={{ display: 'block' }}>или имущества</span>
                  </>
                ), 
                desc: (
                  <>
                    <span style={{ display: 'inline-block' }}>Установим, кем и на каком основании</span>{' '}
                    <span style={{ display: 'inline-block' }}>введено ограничение, подготовим</span>{' '}
                    <span style={{ display: 'inline-block' }}>документы для&nbsp;его снятия либо оспаривания.</span>
                  </>
                ) 
              },
              { 
                tag: 'Должник / Ограничения', 
                title: (
                  <>
                    <span style={{ display: 'block' }}>Запрет на выезд</span>
                    <span style={{ display: 'block' }}>или исполнительский сбор</span>
                  </>
                ), 
                desc: (
                  <>
                    <span style={{ display: 'inline-block' }}>Проверим постановления</span>{' '}
                    <span style={{ display: 'inline-block' }}>и&nbsp;фактическое состояние расчётов,</span>{' '}
                    <span style={{ display: 'inline-block' }}>определим порядок обращения и&nbsp;отмены.</span>
                  </>
                ) 
              },
              { 
                tag: 'Взыскатель / Исполнение', 
                title: (
                  <>
                    <span style={{ display: 'block' }}>Решение суда есть,</span>
                    <span style={{ display: 'block' }}>но деньги не поступают</span>
                  </>
                ), 
                desc: (
                  <>
                    <span style={{ display: 'inline-block' }}>Проверим исполнительный документ,</span>{' '}
                    <span style={{ display: 'inline-block' }}>его предъявление и действия пристава,</span>{' '}
                    <span style={{ display: 'inline-block' }}>сформируем план дальнейшего взыскания.</span>
                  </>
                ) 
              },
              { 
                tag: 'Взыскатель / Розыск', 
                title: (
                  <>
                    <span style={{ display: 'block' }}>Пристав не ищет</span>
                    <span style={{ display: 'block' }}>активы и счета должника</span>
                  </>
                ), 
                desc: (
                  <>
                    <span style={{ display: 'inline-block' }}>Изучим материалы производства,</span>{' '}
                    <span style={{ display: 'inline-block' }}>подготовим ходатайства и при наличии</span>{' '}
                    <span style={{ display: 'inline-block' }}>оснований обжалуем бездействие.</span>
                  </>
                ) 
              },
              { 
                tag: 'Взыскатель / Маршрут', 
                title: (
                  <>
                    <span style={{ display: 'block' }}>Выбор способа</span>
                    <span style={{ display: 'block' }}>предъявления документа</span>
                  </>
                ), 
                desc: (
                  <>
                    <span style={{ display: 'inline-block' }}>Оценим работу через ФССП, банк,</span>{' '}
                    <span style={{ display: 'inline-block' }}>работодателя, казначейство</span>{' '}
                    <span style={{ display: 'inline-block' }}>или&nbsp;иной законный порядок.</span>
                  </>
                ) 
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
                {/* Одинаковый фирменный фоновый векторный водяной знак */}
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
        </div>
      </section>

      {/* ═══ БЛОК 4: НАПРАВЛЕНИЯ ПОМОЩИ (5 карточек + темная 6-я карточка) ═══ */}
      <section id="directions" className="section" style={{ padding: '64px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '700px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Направления помощи
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Выберите ситуацию, чтобы узнать, какие документы и обстоятельства имеют значение, какие действия возможны и как строится работа по конкретной услуге.
            </p>
          </div>
          
          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '40px' }}>
            {[
              {
                title: 'Обжалование действий и бездействия судебного пристава',
                desc: 'Проверка постановлений и материалов производства, жалоба вышестоящему должностному лицу, в прокуратуру или обращение в суд — в зависимости от задачи.',
                link: '/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/obzhalovanie-dejstvij-sudebnogo-pristava/'
              },
              {
                title: 'Возврат незаконно списанных приставами денег',
                desc: 'Помощь при списании защищённых выплат, повторном или избыточном взыскании, а также после погашения задолженности.',
                link: '/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/vozvrat-nezakonno-spisannyh-deneg/'
              },
              {
                title: 'Снятие ареста со счёта и разблокировка банковской карты',
                desc: 'Проверка основания ареста, источника поступлений и документов; обращения к приставу, в банк или суд по применимому маршруту.',
                link: '/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/snyatie-aresta-so-scheta/'
              },
              {
                title: 'Снятие ареста с автомобиля и запрета на регистрационные действия',
                desc: 'Помощь владельцу или добросовестному приобретателю при аресте транспорта, запрете регистрации и притязаниях на имущество другого лица.',
                link: '/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/snyatie-aresta-s-avtomobilya/'
              },
              {
                title: 'Взыскание по исполнительному листу',
                desc: 'Сопровождение взыскателя после решения суда: предъявление документа, контроль пристава, поиск активов и обжалование бездействия.',
                link: '/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/vzyskanie-po-ispolnitelnomu-listu/'
              }
            ].map((dir, i) => (
              <a key={i} href={dir.link} data-analytics="click_service_card" style={{ textDecoration: 'none', display: 'block' }}>
                <div 
                  className="card service-card" 
                  style={{ 
                    height: '100%', 
                    minHeight: '160px',
                    padding: '30px', 
                    background: 'var(--color-white)', 
                    border: '1px solid var(--color-border)',
                    borderRadius: '0',
                    display: 'flex', 
                    flexDirection: 'column',
                    transition: 'all 0.3s',
                    position: 'relative',
                    borderTop: '3px solid var(--color-primary)'
                  }}
                >
                  <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3 }}>
                    {dir.title}
                  </h3>
                  <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                    {dir.desc}
                  </p>
                  <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, transition: 'transform 0.3s' }}>
                    Подробнее 
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.3s' }}>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </a>
            ))}

            {/* Не нашли свою ситуацию? (3-я карточка во 2-й строке) */}
            <div style={{ gridColumn: 'span 1' }}>
              <div 
                className="card service-card" 
                style={{ 
                  height: '100%', 
                  minHeight: '160px',
                  padding: '30px', 
                  background: 'var(--color-deep-blue)', 
                  border: '1px solid transparent',
                  borderRadius: '0',
                  display: 'flex', 
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '20px',
                  transition: 'all 0.3s',
                  position: 'relative',
                  borderTop: '3px solid var(--color-gold)'
                }}
              >
                <style dangerouslySetInnerHTML={{__html: `
                  .white-btn-custom {
                    background-color: var(--color-white) !important;
                    color: #10273B !important;
                    border: 1px solid var(--color-white) !important;
                    transition: all 0.3s ease !important;
                  }
                  .white-btn-custom:hover {
                    background-color: transparent !important;
                    color: var(--color-white) !important;
                    border: 1px solid #FFFFFF !important;
                  }
                `}} />
                <div>
                  <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-white)', lineHeight: 1.3 }}>
                    Не нашли свою ситуацию?
                  </h3>
                  <p style={{ margin: '0', fontSize: '14px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.5 }}>
                    Кратко опишите, что произошло и на какой стадии находится производство. Юрист изучит обстоятельства и подскажет, с каких действий лучше начать.
                  </p>
                </div>
                <div>
                  <a href="#form" className="btn white-btn-custom" style={{ display: 'inline-block', width: '100%', textAlign: 'center', fontSize: '14px', padding: '12px 20px' }}>
                    Описать ситуацию
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 6: КУРАТОР НАПРАВЛЕНИЯ ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name="Марина Валерьевна Смольянинова"
        position={<>Ведущий юрист ЮК «Де-Юре»,<br />куратор направления «Исполнительное производство»</>}
        imageUrl="/images/smolyaninova.jpg"
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
        alignTitle="center"
        steps={[
          {
            num: '01',
            title: 'Консультация',
            desc: 'Уточняем Вашу роль в производстве, что уже произошло, какие постановления и уведомления получены и есть ли срочный срок.'
          },
          {
            num: '02',
            title: 'Изучение материалов',
            desc: 'Проверяем исполнительный документ, постановления, банковские выписки, переписку, сведения об имуществе и другие документы.'
          },
          {
            num: '03',
            title: 'Правовая оценка',
            desc: 'Определяем законность действий, риски и оптимальный маршрут: заявление, ходатайство, жалоба в ФССП или обращение в суд.'
          },
          {
            num: '04',
            title: 'Согласование работы',
            desc: 'Фиксируем задачи, состав юридической помощи, порядок взаимодействия и стоимость до заключения договора.'
          },
          {
            num: '05',
            title: 'Юридические действия и контроль',
            desc: 'Готовим и подаём документы, представляем интересы в ФССП, банках или суде, отслеживаем движение дела до результата.'
          },
          {
            isBanner: true,
            title: 'Дистанционный формат',
            desc: 'Консультацию, изучение документов и подготовку большинства обращений можно начать дистанционно. Если потребуется личное участие юриста в исполнительных действиях, ФССП или суде, место и порядок работы согласуем заранее.'
          }
        ]}
        ctaTitle="Готовы обсудить вашу ситуацию"
        ctaSubtitle="Опишите задачу — юрист изучит документы и предложит понятный план защиты."
        ctaButtonText="Обсудить ситуацию"
        ctaButtonHref="#form"
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
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>Связаться с нами</span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                Обсудите ситуацию с юристом по исполнительному производству
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Кратко опишите, что произошло и на какой стадии находится исполнительное производство. Обращение передадим Марине Валерьевне Смольяниновой. Она проверит документы, оценит ситуацию и согласует с Вами консультацию.
              </p>
              
              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация юриста</strong>
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
                subtext={
                  <>
                    <span style={{ display: 'inline-block' }}>Если вы оставите заявку вечером или в&nbsp;выходной день,</span> <br />
                    <span style={{ display: 'inline-block' }}>мы перезвоним в&nbsp;ближайший рабочий день.</span>
                  </>
                }
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
