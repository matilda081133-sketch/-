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

export default function ObzhalovanieClient() {
  const cases: CaseData[] = [
    {
      category: 'Взыскатель / Отмена окончания',
      title: (
        <>
          <span style={{ display: 'block' }}>Отменили окончание</span>
          <span style={{ display: 'block' }}>исполнительного</span>
          <span style={{ display: 'block' }}>производства</span>
        </>
      ),
      problem: 'Взыскателю вернули исполнительный лист с актом о невозможности взыскания (якобы имущество и доходы должника не обнаружены). При этом часть обязательных запросов пристав не направил, а сведения об официальном месте работы и автомобиле не проверил.',
      action: 'Ознакомились с материалами производства, составили перечень несовершённых исполнительных действий и подготовили жалобу старшему судебному приставу с требованием отменить постановление об окончании и провести необходимые проверки.',
      result: 'Постановление об окончании отменено, производство возобновлено. После направления запросов обнаружен официальный доход должника, и взыскателю начали поступать удержанные средства.'
    },
    {
      category: 'Должник / Исполнительский сбор',
      title: (
        <>
          <span style={{ display: 'block' }}>Оспорили</span>
          <span style={{ display: 'block' }}>исполнительский сбор</span>
          <span style={{ display: 'block' }}>после извещения</span>
        </>
      ),
      problem: 'Гражданин узнал о возбуждении исполнительного производства только после блокировки банковского счёта и вынесения постановления о взыскании исполнительского сбора. Копию постановления о возбуждении он не получал и был лишён возможности добровольного исполнения.',
      action: 'Проверили материалы исполнительного производства, сведения о направлении почтовой корреспонденции и дату фактического получения информации должником. Подготовили и подали в суд административное исковое заявление об отмене сбора.',
      result: 'Суд признал постановление судебного пристава незаконным и отменил исполнительский сбор. Сведения в банке данных исполнительных производств скорректированы.'
    },
    {
      category: 'Алименты / Бездействие',
      title: (
        <>
          <span style={{ display: 'block' }}>Добились действий</span>
          <span style={{ display: 'block' }}>по задолженности</span>
          <span style={{ display: 'block' }}>по алиментам</span>
        </>
      ),
      problem: 'Исполнительное производство по алиментам длилось более года, однако расчёт задолженности не производился, доходы должника своевременно не устанавливались, а обращения взыскателя оставались без содержательного ответа.',
      action: 'Изучили производство, подготовили ходатайства о проведении полного расчёта задолженности и направлении запросов в ФНС и банки, после чего обжаловали бездействие руководителю подразделения ФССП.',
      result: 'Судебный пристав произвёл актуальный расчёт задолженности, направил запросы и наложил арест на счета; текущие выплаты алиментов возобновились, началось погашение долга.'
    }
  ];

  const faqs = [
    {
      q: 'Кто вправе обжаловать действия или бездействие пристава?',
      a: 'Стороны исполнительного производства — взыскатель и должник, а также иные лица, если постановлением, действием или бездействием нарушены их права и законные интересы. Перед подачей жалобы необходимо подтвердить, как именно нарушение затрагивает заявителя.'
    },
    {
      q: 'Какой срок установлен для жалобы?',
      a: 'Как правило, десять дней со дня вынесения постановления, совершения действия или установления бездействия. Если лицо не было извещено, срок исчисляется с момента, когда оно узнало или должно было узнать о нарушении. Конкретный расчёт и возможность восстановления срока проверяются индивидуально по документам.'
    },
    {
      q: 'Нужно сначала жаловаться старшему приставу, а потом идти в суд?',
      a: 'Общего правила об обязательной последовательности нет. Постановления, действия и бездействие могут обжаловаться в порядке подчинённости и оспариваться в суде. Выбор маршрута зависит от требования, доказательств, процессуального срока и необходимого результата.'
    },
    {
      q: 'Куда подают жалобу в порядке подчинённости?',
      a: 'Обычно жалоба на судебного пристава-исполнителя подаётся старшему судебному приставу (руководителю подразделения), в подчинении которого он находится. Для постановлений и действий руководителей действует другая подчинённость, поэтому адресата определяют по должности и материалам дела.'
    },
    {
      q: 'Приостанавливает ли жалоба исполнительное производство?',
      a: 'Сама по себе подача жалобы не означает автоматической остановки взыскания. При наличии оснований вопрос о приостановлении производства или отдельного исполнительного действия ставится дополнительно перед старшим судебным приставом или судом.'
    },
    {
      q: 'Можно ли пожаловаться в прокуратуру?',
      a: 'Обращение в прокуратуру возможно при наличии оснований, однако оно не заменяет специальную жалобу в ФССП или судебное оспаривание и не отменяет постановление пристава автоматически. Юрист оценивает, даст ли этот инструмент практический результат в конкретной ситуации.'
    },
    {
      q: 'Какие документы нужны для оценки?',
      a: 'По возможности подготовьте номер исполнительного производства, исполнительный документ, оспариваемое постановление, извещения, Ваши заявления и ответы пристава, банковские выписки или документы на имущество. Если материалов нет, юрист подскажет, как ознакомиться с делом.'
    },
    {
      q: 'Какого результата можно требовать?',
      a: 'В зависимости от нарушения можно требовать отмены или изменения постановления, признания действия либо бездействия незаконным и возложения обязанности устранить нарушение. Точное требование формулируется после правовой оценки полномочий адресата и материалов дела.'
    },
    {
      q: 'Можно ли начать работу дистанционно?',
      a: 'Да. Консультацию, проверку электронных копий и подготовку документов можно провести дистанционно. Формат дальнейшего участия зависит от выбранного порядка обжалования и региона.'
    }
  ];

  // Анимированный docStack ФССП
  const docStack = (
    <div className="hero-right-col" style={{ width: '100%', position: 'relative', display: 'flex', justifyContent: 'center' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '150%', height: '150%', background: 'radial-gradient(circle, rgba(23, 50, 77, 0.12) 0%, rgba(23, 50, 77, 0.05) 30%, transparent 60%)', zIndex: 0, pointerEvents: 'none' }} />
      <svg className="hero-vector-svg" style={{ position: 'absolute', top: '38%', left: '98%', transform: 'translate(-50%, -50%)', width: '580px', height: '580px', opacity: 0.10, zIndex: 0, pointerEvents: 'none' }} viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="0.6">
        <path d="M3 21h18 M4 21v-2h16v2 M6 19V9 M10 19V9 M14 19V9 M18 19V9 M12 4l-9 5h18l-9-5z M4 9h16" />
      </svg>
      <div className="mockup-container" style={{ zIndex: 1 }}>
        <div style={{ position: 'absolute', width: '250px', height: '250px', background: 'var(--color-primary)', filter: 'blur(100px)', opacity: 0.15, borderRadius: '50%' }}></div>
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
        <div className="doc-wrapper-float-2">
          <div className="doc-sheet doc-sheet-2">
            <div style={{ padding: '30px 25px', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '30px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-end' }}>
                  <div style={{ width: '100px', height: '4px', background: 'rgba(23,50,77,0.2)' }}></div>
                  <div style={{ width: '60px', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                  <div style={{ width: '80px', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                </div>
              </div>
              <div style={{ width: '160px', height: '8px', background: 'var(--color-primary)', margin: '0 auto 20px auto' }}></div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div style={{ width: '40%', height: '4px', background: 'rgba(23,50,77,0.2)' }}></div>
                  <div style={{ width: '100%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                  <div style={{ width: '90%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div style={{ width: '50%', height: '4px', background: 'rgba(23,50,77,0.2)' }}></div>
                  <div style={{ width: '100%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                  <div style={{ width: '85%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                </div>
              </div>
              <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '10px', borderTop: '1px dashed rgba(23,50,77,0.1)' }}>
                <div>
                  <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.5)' }}>Заявитель:</div>
                  <div style={{ width: '80px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '10px' }}></div>
                </div>
                <div>
                  <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.5)' }}>Представитель:</div>
                  <div style={{ width: '80px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '10px' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="doc-wrapper-float-1">
          <div className="doc-sheet doc-sheet-1">
            <div style={{ padding: '24px 20px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', opacity: 0.03, width: '150px' }}>
                <img src="/images/logo_dark.png" alt="" style={{ width: '100%', height: 'auto' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(23,50,77,0.2)', paddingBottom: '10px', marginBottom: '14px' }}>
                <img src="/images/logo_dark.png" alt="Де-Юре" style={{ width: '68px', height: 'auto', opacity: 0.9 }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'flex-end' }}>
                  <span style={{ fontSize: '9px', fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>ФССП РОССИИ</span>
                  <div style={{ width: '50px', height: '3px', background: 'rgba(23,50,77,0.2)' }}></div>
                </div>
              </div>

              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', textAlign: 'center', marginBottom: '14px', letterSpacing: '0.02em' }}>
                ПРАВОВАЯ ЗАЩИТА СТОРОН
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--color-gold)', flexShrink: 0 }}></div>
                  <span style={{ fontSize: '11px', color: 'var(--color-deep-blue)', fontWeight: 600, lineHeight: 1.3 }}>
                    Оспаривание постановлений и действий приставов
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--color-gold)', flexShrink: 0 }}></div>
                  <span style={{ fontSize: '11px', color: 'var(--color-deep-blue)', fontWeight: 600, lineHeight: 1.3 }}>
                    Жалоба старшему приставу и судебный иск
                  </span>
                </div>
              </div>

              <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '10px', borderTop: '1px solid rgba(23,50,77,0.2)' }}>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 'bold', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)' }}>ООО ЮК «ДЕ-ЮРЕ»</div>
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
            <Link href="/">Главная</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/grazhdanam/">Гражданам</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/">Юрист по исполнительному производству</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Обжалование действий судебного пристава</span>
          </>
        }
        superTitle="СПОРЫ С СУДЕБНЫМИ ПРИСТАВАМИ В ЛИПЕЦКЕ"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Обжалование действий
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              и бездействия судебного
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              пристава в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Проверим постановления и материалы исполнительного производства, определим, куда и с какими требованиями обращаться, подготовим жалобу или административный иск и представим Ваши интересы.
          </span>
        }
        primaryCtaText="Обсудить ситуацию"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_primary_cta_obzhalovanie"
        primaryCtaSubtext={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Если установленный срок уже идёт,
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              позвоните прямо сейчас: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (910) 350-31-11</a>
            </span>
          </span>
        }
        trustItems={[
          { text: 'Куратор — Марина Смольянинова' },
          { text: 'Оспаривание постановлений, действий и бездействия' },
          { text: 'Жалоба в порядке подчинённости и административный иск' },
          { text: 'Защита прав должников и взыскателей' }
        ]}
        imageUrl="/images/smolyaninova.jpg"
        imageName="Марина Валерьевна Смольянинова"
        imageSubtitle="Ведущий юрист ЮК «Де-Юре», куратор направления «Исполнительное производство»"
        imageObjectPosition="center 25%"
      />

      {/* ═══ БЛОК 2: КОГДА ВАЖНО ОБРАТИТЬСЯ БЕЗ ПРОМЕДЛЕНИЯ ═══ */}
      <section className="section bg-deep-blue text-white" style={{ position: 'relative', overflow: 'hidden', padding: '80px 0', background: 'var(--color-deep-blue)' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '850px', marginBottom: '40px' }}>
            <div style={{ width: '60px', height: '3px', background: 'var(--color-gold)', marginBottom: '24px' }}></div>
            <h2 style={{ fontSize: 'clamp(26px, 3.6vw, 38px)', fontFamily: 'var(--font-serif)', color: '#FFFFFF', marginBottom: '16px', marginTop: 0, lineHeight: 1.25 }}>
              <span style={{ display: 'inline-block' }}>Когда важно обратиться</span> <br />
              <span style={{ display: 'inline-block' }}>к&nbsp;юристу без промедления</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6, margin: 0, fontWeight: 400, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Для обжалования постановления, действия или бездействия установлен короткий срок.</span> <br className="hidden-mobile" />
              <span style={{ display: 'inline-block' }}>До подготовки жалобы нужно понять, какое право нарушено, чего именно вы&nbsp;хотите добиться</span> <br className="hidden-mobile" />
              <span style={{ display: 'inline-block' }}>и&nbsp;какой орган вправе принять необходимое процессуальное решение.</span>
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '32px' }}>
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
                  <span style={{ display: 'inline-block' }}>Получили постановление,</span> <br />
                  <span style={{ display: 'inline-block' }}>с которым не согласны</span>
                </div>
              </div>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                Зафиксируйте дату получения и не ограничивайтесь устным обращением. Юрист проверит основание постановления, порядок его вынесения и доступный способ оспаривания.
              </p>
            </div>

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
                  <span style={{ display: 'inline-block' }}>Пристав совершил действие,</span> <br />
                  <span style={{ display: 'inline-block' }}>нарушающее права</span>
                </div>
              </div>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                Важно сохранить документы, уведомления, выписки, фотографии и иные подтверждения. Вид доказательств зависит от того, что именно произошло в производстве.
              </p>
            </div>

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
                  <span style={{ display: 'inline-block' }}>Пристав не отвечает</span> <br />
                  <span style={{ display: 'inline-block' }}>или не совершает действий</span>
                </div>
              </div>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                Для жалобы недостаточно общей фразы «ничего не делает». Нужно установить обязанность пристава, подтверждение Вашего обращения, прошедший срок и последствия бездействия.
              </p>
            </div>
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderLeft: '4px solid var(--color-gold)',
            padding: '20px 24px',
            marginBottom: '32px',
            fontSize: '14px',
            color: 'rgba(255,255,255,0.85)',
            lineHeight: 1.6
          }}>
            <strong style={{ color: '#FFFFFF' }}>Юридическая справка:</strong> Десятидневный срок следует из статьи 122 Федерального закона № 229-ФЗ и применяется также <br className="hidden-mobile" />
            к судебному оспариванию по части 3 статьи 219 КАС РФ. Начало, исчисление и возможность восстановления срока проверяются по документам.
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
            <a href="tel:+79103503111" className="btn-urgent-call" style={{ padding: '14px 28px', fontSize: '15px' }} data-analytics="obzhalovanie_urgent_call">
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

      {/* ═══ БЛОК 3: В КАКИХ СИТУАЦИЯХ ПОМОГАЕМ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span style={{ display: 'inline-block' }}>В каких ситуациях</span> <br />
              <span style={{ display: 'inline-block' }}>мы помогаем</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Обжаловать можно не любое неудобное решение, а постановление, действие или бездействие,</span> <br />
              <span style={{ display: 'inline-block' }}>которое нарушает права и принято с нарушением закона. Перед обращением определяем конкретное требование.</span>
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '40px' }}>
            {[
              {
                tag: 'Постановление',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Незаконное</span>{' '}
                    <span style={{ display: 'block' }}>постановление</span>
                  </>
                ),
                desc: 'Проверим постановление о\u00A0возбуждении, окончании или прекращении производства, взыскании сбора, ограничении или расчёте долга.'
              },
              {
                tag: 'Отказ',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Отказ в</span>{' '}
                    <span style={{ display: 'block' }}>совершении действия</span>
                  </>
                ),
                desc: 'Оценим отказ возбудить производство, принять документ, рассмотреть ходатайство, снять ограничение или совершить действие.'
              },
              {
                tag: 'Бездействие',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Бездействие</span>{' '}
                    <span style={{ display: 'block' }}>по взысканию</span>
                  </>
                ),
                desc: 'Проверим, какие запросы и\u00A0действия должен был совершить пристав, какие обращения подавались и\u00A0почему решение не исполняется.'
              },
              {
                tag: 'Нарушения',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Нарушения</span>{' '}
                    <span style={{ display: 'block' }}>при взыскании</span>
                  </>
                ),
                desc: 'Разберём соблюдение порядка извещения, процессуальных сроков, размера требований и\u00A0соразмерности применённых мер.'
              },
              {
                tag: 'Ответы',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Формальные</span>{' '}
                    <span style={{ display: 'block' }}>ответы на обращения</span>
                  </>
                ),
                desc: 'Сопоставим содержание ходатайства и\u00A0ответа с\u00A0материалами дела, зафиксируем нерассмотренные требования и\u00A0адресата жалобы.'
              },
              {
                tag: 'Права третьих лиц',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Нарушены права</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>третьего лица или собственника</span>
                  </>
                ),
                desc: 'Помогаем гражданам, чьи права затронуты действиями пристава (неправомерный арест чужого имущества, ошибки в\u00A0ФИО).'
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

          <div style={{
            background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-gold)',
            padding: '28px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)'
          }}>
            <p style={{ margin: 0, fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.6, maxWidth: '720px' }}>
              <strong>Не уверены, относится ли ситуация к этой услуге?</strong> Опишите, какое постановление получили или какое действие не совершено, — юрист определит подходящий маршрут.
            </p>
            <a href="#form" className="btn btn-primary" style={{ padding: '12px 24px', fontSize: '14px', whiteSpace: 'nowrap' }}>
              Проверить ситуацию
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: КАК ВЫБИРАЕМ СПОСОБ ОБЖАЛОВАНИЯ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Как выбираем</span> <br />
              <span style={{ display: 'inline-block' }}>способ обжалования</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Способ зависит не только от характера нарушения, но и от требуемого результата.</span> <br />
              <span style={{ display: 'inline-block' }}>Сопоставляем полномочия адресата, процессуальный срок, доказательства и риски продолжения взыскания.</span>
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            <div style={{
              background: 'var(--color-white)',
              padding: '36px 30px',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-primary)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
                </svg>
                <h3 style={{ margin: 0, fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)' }}>
                  <span style={{ display: 'inline-block' }}>Жалоба в порядке</span> <br />
                  <span style={{ display: 'inline-block' }}>подчинённости</span>
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Определяем компетентное вышестоящее должностное лицо, формулируем нарушение и требование, подаём жалобу и контролируем срок её рассмотрения. Этот путь помогает быстро устранить нарушение внутри ведомства.
              </p>
            </div>

            <div style={{
              background: 'var(--color-white)',
              padding: '36px 30px',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-primary)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21h18 M4 21v-2h16v2 M6 19V9 M10 19V9 M14 19V9 M18 19V9 M12 4l-9 5h18l-9-5z M4 9h16" />
                </svg>
                <h3 style={{ margin: 0, fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)' }}>
                  <span style={{ display: 'inline-block' }}>Оспаривание</span> <br />
                  <span style={{ display: 'inline-block' }}>в суде (КАС РФ)</span>
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Готовим административное исковое заявление и доказательства того, что решение, действие или бездействие нарушает закон. Представляем клиента в суде и добиваемся отмены незаконных актов.
              </p>
            </div>

            <div style={{
              background: 'var(--color-white)',
              padding: '36px 30px',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-gold)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <h3 style={{ margin: 0, fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)' }}>
                  <span style={{ display: 'inline-block' }}>Дополнительные меры</span> <br />
                  <span style={{ display: 'inline-block' }}>правовой защиты</span>
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Оцениваем необходимость ходатайства о приостановлении исполнительного производства, обращения в прокуратуру и применения обеспечительных мер до принятия итогового решения.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 5: ЧТО ВХОДИТ В ЮРИДИЧЕСКУЮ ПОМОЩЬ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Что входит</span> <br />
              <span style={{ display: 'inline-block' }}>в юридическую помощь</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Полный цикл процессуальных действий юриста — от изучения материалов производства</span> <br className="hidden-mobile" />
              <span style={{ display: 'inline-block' }}>до фактического устранения нарушения и восстановления ваших прав.</span>
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '16px', position: 'relative', marginBottom: '40px' }}>
            {[
              {
                num: '01',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Консультация</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и оценка срочности</span>
                  </>
                ),
                desc: 'Уточняем ситуацию, проверяем процессуальные сроки и определяем первоочередные меры.'
              },
              {
                num: '02',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Ознакомление</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>с материалами</span>
                  </>
                ),
                desc: 'Изучаем постановления, извещения, ответы и другие материалы исполнительного производства.'
              },
              {
                num: '03',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Правовая экспертиза</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>постановлений и действий</span>
                  </>
                ),
                desc: 'Проверяем полномочия пристава, основания решения, соблюдение процедуры и сроков.'
              },
              {
                num: '04',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Формирование</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>правовых требований</span>
                  </>
                ),
                desc: 'Определяем нарушенное право, требуемый результат и надлежащего адресата для обращения.'
              },
              {
                num: '05',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Подготовка жалобы</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>в вышестоящие органы ФССП</span>
                  </>
                ),
                desc: 'Составляем мотивированную жалобу вышестоящему должностному лицу, заявления и ходатайства.'
              },
              {
                num: '06',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Подготовка иска</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>в суд общей юрисдикции</span>
                  </>
                ),
                desc: 'Готовим административное исковое заявление, доказательную базу и комплект приложений.'
              },
              {
                num: '07',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Представительство</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>интересов в органах и суде</span>
                  </>
                ),
                desc: 'Представляем доверителя в подразделениях ФССП и судебных заседаниях в согласованном объёме.'
              },
              {
                num: '08',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Контроль</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>фактического устранения</span>
                  </>
                ),
                desc: 'Отслеживаем исполнение решения по жалобе или судебного акта до фактического результата.'
              }
            ].map((act, idx) => (
              <div key={idx} className="hover-lift" style={{
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                padding: '38px 24px 28px 24px',
                border: '1px solid var(--color-border)',
                borderTop: '4px solid var(--color-gold)',
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                height: '100%',
                minHeight: '235px',
                boxSizing: 'border-box',
                position: 'relative'
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
                  {act.num}
                </div>
                <h3 style={{ fontSize: '17px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '8px 0 12px 0', lineHeight: 1.35, minHeight: '48px' }}>
                  {act.title}
                </h3>
                <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0, minHeight: '68px' }}>
                  {act.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#form" className="btn btn-primary" style={{ display: 'inline-block', padding: '14px 32px' }}>
              Получить консультацию
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 6: ВЕДУЩИЙ ЮРИСТ ПО УСЛУГЕ ═══ */}
      <SpecialistBlock
        title="Ведущий юрист по услуге"
        name="Марина Валерьевна Смольянинова"
        position={<>Ведущий юрист ЮК «Де-Юре»,<br />куратор направления «Исполнительное производство»</>}
        imageUrl="/images/smolyaninova.jpg"
        profileHref="/specialisty/smolyaninova-marina-valerevna/"
        profileText="Подробнее о Марине Валерьевне Смольяниновой →"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Марина Валерьевна более 13 лет работала в Федеральной службе судебных приставов, в том числе на руководящих должностях. Рассматривала обращения и жалобы, контролировала исполнительные производства и работу сотрудников, участвовала во взаимодействии с судами и государственными органами. Этот опыт помогает оценивать не только формальное нарушение, но и то, какое требование способно привести к реальному действию.
          </span>,
          <ul key="2" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Более 13 лет работы в ФССП, включая руководящие должности</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Практическое знание порядка рассмотрения жалоб и организации исполнительных действий</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Опыт ведения дел в Липецке, Липецкой области и дистанционно по РФ</span>
            </li>
          </ul>
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
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '780px', textWrap: 'balance' }}>
            <span style={{ display: 'block' }}>Прозрачный пошаговый процесс — от первой консультации</span>
            <span style={{ display: 'block' }}>до фактического устранения нарушения.</span>
          </span>
        }
        alignTitle="center"
        steps={[
          {
            num: '01',
            title: 'Консультация',
            desc: 'Уточняем Вашу роль, номер производства, оспариваемое решение или действие, желаемый результат и даты, от которых зависит срок.'
          },
          {
            num: '02',
            title: 'Изучение материалов',
            desc: 'Проверяем постановления, извещения, заявления, ответы, сведения из банка. При необходимости определяем, как ознакомиться с делом.'
          },
          {
            num: '03',
            title: 'Выбор требования',
            desc: 'Формулируем нарушение и результат: отменить постановление, признать действие или бездействие незаконным, обязать устранить нарушение.'
          },
          {
            num: '04',
            title: 'Согласование объёма',
            desc: 'Объясняем возможные маршруты, риски и стоимость, фиксируем точный состав работы до заключения договора.'
          },
          {
            num: '05',
            title: 'Подача и сопровождение',
            desc: 'Готовим жалобу или административный иск, подаём документы, представляем Ваши интересы и контролируем устранение нарушения.'
          },
          {
            isBanner: true,
            title: 'Дистанционный формат',
            desc: 'Консультацию, изучение электронных копий и подготовку большинства документов можно начать дистанционно. Необходимость личного участия в ФССП или суде зависит от выбранного способа защиты и согласованного объёма работы.'
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
        subtitle="Стоимость зависит от объёма материалов, срочности, выбранного порядка обжалования и необходимости представительства. После консультации определим состав работы и согласуем цену до заключения договора."
        tiers={[
          {
            title: 'Консультация и анализ',
            subtitle: 'Разбор документов и сроков',
            features: [
              { name: 'Оценка постановлений и материалов дела', value: 'Да' },
              { name: 'Проверка процессуальных сроков', value: 'Да' },
              { name: 'Выбор эффективного порядка защиты', value: 'Да' },
              { name: 'Подготовка письменных документов', value: 'Нет' }
            ],
            buttonText: 'Получить оценку',
            buttonHref: '#form'
          },
          {
            title: 'Подготовка жалобы',
            subtitle: 'Жалоба в порядке подчинённости',
            popular: true,
            badgeText: 'Популярно',
            features: [
              { name: 'Правовой анализ нарушений пристава', value: 'Да' },
              { name: 'Подготовка мотивированной жалобы', value: 'Да' },
              { name: 'Формирование комплекта приложений', value: 'Да' },
              { name: 'Подача и контроль срока рассмотрения', value: 'Да' }
            ],
            buttonText: 'Заказать жалобу',
            buttonHref: '#form'
          },
          {
            title: 'Судебное сопровождение',
            subtitle: 'Административный иск (КАС РФ)',
            features: [
              { name: 'Подготовка административного иска', value: 'Да' },
              { name: 'Сбор и оформление доказательной базы', value: 'Да' },
              { name: 'Представительство в судебных заседаниях', value: 'Да' },
              { name: 'Контроль исполнения судебного акта', value: 'Да' }
            ],
            buttonText: 'Обсудить суд',
            buttonHref: '#form'
          }
        ]}
        disclaimer="Стоимость определяется после уточнения задачи и изучения имеющихся документов. Состав услуг, цена и порядок оплаты фиксируются в договоре до начала работы. Оплата вознаграждения исполнителя не зависит от исхода дела и не включает государственные пошлины и сопутствующие расходы."
      />

      {/* ═══ БЛОК 10: FAQ ═══ */}
      <FAQBlock
        superTitle="ЧАСТЫЕ ВОПРОСЫ КЛИЕНТОВ"
        title={<><span>Ответы на</span> <br /><span>частые вопросы</span></>}
        subtitle="Об обжаловании действий и бездействия судебного пристава"
        ctaText="Задать свой вопрос"
        ctaLink="#form"
        faqs={faqs}
      />

            

{/* ═══ БЛОК 11: ФИНАЛЬНАЯ ФОРМА ═══ */}
                        {/* ═══ БЛОК: НАПРАВЛЕНИЯ ПОМОЩИ ПО ИСПОЛНИТЕЛЬНОМУ ПРОИЗВОДСТВУ ═══ */}
      <section className="section bg-cream" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Направления помощи</span> <br />
              <span style={{ display: 'inline-block' }}>по исполнительному производству</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Помощь должникам и взыскателям по другим вопросам исполнительного производства.
            </p>
          </div>

          <style dangerouslySetInnerHTML={{ __html: `
            .related-service-card {
              border-top: 3px solid var(--color-primary) !important;
            }
            .related-service-card:hover {
              border-top: 3px solid var(--color-primary) !important;
            }
            .related-service-card:hover .card-arrow {
              color: var(--color-gold) !important;
            }
            .related-service-card:hover .card-arrow svg {
              stroke: var(--color-gold) !important;
            }
            .all-services-link:hover {
              color: var(--color-gold) !important;
            }
          `}} />
          
          <div className="grid grid-4" style={{ gap: '20px' }}>
            <Link href="/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/snyatie-aresta-so-scheta/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <div 
                className="card related-service-card" 
                style={{ 
                  height: '100%', 
                  minHeight: '160px',
                  padding: '28px 22px', 
                  background: 'var(--color-white)', 
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  borderRadius: '0',
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between',
                  transition: 'all 0.3s',
                  position: 'relative'
                }}
              >
                <div>
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                    <span style={{ display: 'inline-block' }}>Снятие ареста</span> <br /><span style={{ display: 'inline-block' }}>со счёта</span>
                  </h3>
                  <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    Проверка основания ареста, снятие блокировки банковской карты.
                  </p>
                </div>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, transition: 'transform 0.3s' }}>
                  Подробнее 
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </Link>
            <Link href="/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/snyatie-aresta-s-avtomobilya/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <div 
                className="card related-service-card" 
                style={{ 
                  height: '100%', 
                  minHeight: '160px',
                  padding: '28px 22px', 
                  background: 'var(--color-white)', 
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  borderRadius: '0',
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between',
                  transition: 'all 0.3s',
                  position: 'relative'
                }}
              >
                <div>
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                    <span style={{ display: 'inline-block' }}>Снятие ареста</span> <br /><span style={{ display: 'inline-block' }}>с авто</span>
                  </h3>
                  <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    Снятие запрета регистрационных действий и ареста транспортного средства.
                  </p>
                </div>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, transition: 'transform 0.3s' }}>
                  Подробнее 
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </Link>
            <Link href="/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/vzyskanie-po-ispolnitelnomu-listu/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <div 
                className="card related-service-card" 
                style={{ 
                  height: '100%', 
                  minHeight: '160px',
                  padding: '28px 22px', 
                  background: 'var(--color-white)', 
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  borderRadius: '0',
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between',
                  transition: 'all 0.3s',
                  position: 'relative'
                }}
              >
                <div>
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                    <span style={{ display: 'inline-block' }}>Взыскание по</span> <br /><span style={{ display: 'inline-block' }}>исполнительному листу</span>
                  </h3>
                  <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    Сопровождение взыскателя, розыск счетов и активов должника через ФССП.
                  </p>
                </div>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, transition: 'transform 0.3s' }}>
                  Подробнее 
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </Link>
            <Link href="/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/vozvrat-nezakonno-spisannyh-deneg/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <div 
                className="card related-service-card" 
                style={{ 
                  height: '100%', 
                  minHeight: '160px',
                  padding: '28px 22px', 
                  background: 'var(--color-white)', 
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  borderRadius: '0',
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between',
                  transition: 'all 0.3s',
                  position: 'relative'
                }}
              >
                <div>
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                    <span style={{ display: 'inline-block' }}>Возврат незаконно</span> <br /><span style={{ display: 'inline-block' }}>списанных денег</span>
                  </h3>
                  <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    Возврат незаконно списанных средств, социальных выплат и пенсий.
                  </p>
                </div>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, transition: 'transform 0.3s' }}>
                  Подробнее 
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </Link>
          </div>

          <div style={{ marginTop: '32px' }}>
            <Link href="/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/" className="all-services-link" style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '16px', textDecoration: 'underline', textUnderlineOffset: '4px', display: 'inline-flex', alignItems: 'center', gap: '6px', transition: 'color 0.2s ease' }}>
              Смотреть все услуги по исполнительному производству →
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px', padding: '80px 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>Связаться с нами</span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                <span style={{ display: 'inline-block' }}>Обсудите ситуацию</span> <br />
                <span style={{ display: 'inline-block' }}>с Мариной Валерьевной</span> <br />
                <span style={{ display: 'inline-block' }}>Смольяниновой</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Кратко опишите, какое постановление получили, что сделал или не сделал пристав и когда Вы об этом узнали. Обращение передадим Марине Валерьевне Смольяниновой. Она проверит документы, оценит ситуацию и согласует с Вами консультацию.
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
                buttonText="Получить консультацию"
                commentPlaceholder="Кратко опишите, что произошло (постановление, действие или бездействие пристава)…"
                subtext={
                  <>
                    <span style={{ display: 'inline-block' }}>Если вы оставите заявку вечером или в&nbsp;выходной день,</span> <br />
                    <span style={{ display: 'inline-block' }}>мы перезвоним в&nbsp;ближайший рабочий день.</span>
                  </>
                }
                hiddenFields={[
                  { name: 'source_page', value: '/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/obzhalovanie-dejstvij-sudebnogo-pristava/' },
                  { name: 'page_type', value: 'service' },
                  { name: 'direction', value: 'ispolnitelnoe_proizvodstvo_fizlica' },
                  { name: 'service', value: 'obzhalovanie_dejstvij_sudebnogo_pristava' },
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