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
      category: 'Взыскатель / Незаконное окончание',
      title: 'Отменили преждевременное окончание производства в пользу компании',
      problem: 'Компания-взыскатель получила постановление об окончании производства и возврате исполнительного листа. В материалах не было результатов части запросов, а известные взыскателю сведения о транспорте и контрагентах должника не проверялись.',
      action: 'Ознакомились с материалами, сопоставили заявления взыскателя с действиями пристава и подготовили жалобу с перечнем неисполненных проверок и конкретным требованием отменить постановление.',
      result: 'Постановление отменили, производство возобновили; после дополнительных действий обнаружили денежные поступления, из которых началось погашение требования.'
    },
    {
      category: 'Должник / Исполнительский сбор',
      title: 'Оспорили исполнительский сбор после ненадлежащего извещения компании',
      problem: 'Организация узнала о производстве после ограничений по счёту и получила постановление о взыскании исполнительского сбора, хотя документы о возбуждении производства по надлежащему адресу фактически не поступали.',
      action: 'Проверили адресные данные, способ направления и вручения постановления, дату фактического получения информации и исполнение основного требования. Подготовили заявление в суд и доказательства нарушения порядка извещения.',
      result: 'Суд признал постановление о взыскании исполнительского сбора незаконным; начисление отменили, сведения в производстве скорректировали.'
    },
    {
      category: 'Должник / Снятие ограничений',
      title: 'Добились снятия ограничений со счетов и транспорта после исполнения',
      problem: 'Компания исполнила требование, однако постановления об ограничениях по счетам и транспорту продолжали действовать, что мешало расчётам и регистрации техники.',
      action: 'Сверили оплату и остаток требования, зафиксировали сохраняющиеся ограничения, подали адресные заявления, затем обжаловали бездействие с требованием вынести и направить необходимые постановления.',
      result: 'Ограничения сняли и направили сведения в банк и регистрирующий орган; компания восстановила обычные расчёты и возможность регистрационных действий.'
    }
  ];

  const faqs = [
    {
      q: 'Можно ли обжаловать не только постановление, но и бездействие пристава?',
      a: 'Да. Предметом защиты может быть постановление, конкретное действие, отказ либо бездействие. До подачи жалобы нужно определить нарушенную обязанность пристава и тот юридический результат, который должен восстановить нарушенное право компании.'
    },
    {
      q: 'Какой срок установлен для подачи жалобы?',
      a: 'Законом установлен десятидневный срок, но момент его начала зависит от обстоятельств: даты совершения действия, вынесения постановления, отказа либо момента, когда не извещённое лицо фактически узнало о нарушении. Срок рассчитывается индивидуально после проверки документов.'
    },
    {
      q: 'Обязательно ли сначала жаловаться старшему судебному приставу?',
      a: 'Нет, универсального обязательного досудебного порядка нет. Жалоба в порядке подчинённости вышестоящему должностному лицу и обращение в суд — самостоятельные способы защиты. Выбор зависит от характера нарушения, срочности и доказательной базы.'
    },
    {
      q: 'Куда обращаться компании — в арбитражный суд или суд общей юрисдикции?',
      a: 'Подсудность зависит от вида исполнительного документа, характера спорных правоотношений и субъектного состава сторон. Ошибка с подсудностью ведёт к потере времени, поэтому надлежащий суд определяется юристом до подачи заявления.'
    },
    {
      q: 'Приостанавливает ли подача жалобы списание денег или арест имущества?',
      a: 'Нет, подача жалобы сама по себе автоматически не приостанавливает производство. Основания и порядок приостановления производства, отдельного исполнительного действия или применения обеспечительных мер оцениваются и заявляются отдельно.'
    },
    {
      q: 'Можно ли оспорить постановление о взыскании исполнительского сбора?',
      a: 'Да, при наличии правовых оснований постановление пристава можно оспорить в суде либо ходатайствовать об уменьшении размера сбора или освобождении от его взыскания. Перспектива зависит от соблюдения порядка извещения и причин несвоевременного исполнения.'
    },
    {
      q: 'Что делать, если пристав не предпринимает мер по взысканию долга?',
      a: 'Необходимо изучить материалы исполнительного производства, зафиксировать несовершённые запросы и пропущенные процессуальные сроки. После этого готовится адресная жалоба с требованием совершить конкретные исполнительные действия.'
    },
    {
      q: 'Поможет ли жалоба снять арест с имущества третьего лица?',
      a: 'Не всегда. Если возник спор о принадлежности имущества (например, имущество находится в лизинге, аренде или принадлежит контрагенту), надлежащим способом защиты является самостоятельный иск в суд об освобождении имущества от ареста.'
    },
    {
      q: 'Можно ли начать работу дистанционно?',
      a: 'Да. Для первичной правовой оценки достаточно направить электронные копии исполнительного документа, постановлений, извещений и переписки с ФССП. Необходимость очного участия в службе приставов или суде определяется индивидуально.'
    }
  ];

  // Анимированный mock-up документов ФССП
  const docStack = (
    <div className="military-hero-right" style={{ width: '100%', maxWidth: '440px', margin: '0 auto', flexShrink: 0, display: 'flex', flexDirection: 'column', paddingTop: '0', marginTop: '0' }}>
      <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', width: '100%' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '130%', height: '130%', background: 'radial-gradient(circle, rgba(193, 160, 102, 0.15) 0%, rgba(23, 50, 77, 0.04) 40%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }} />
        <svg style={{ position: 'absolute', top: '40%', left: '85%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', opacity: 0.09, zIndex: 0, pointerEvents: 'none' }} viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="0.6">
          <path d="M3 21h18 M4 21v-2h16v2 M6 19V9 M10 19V9 M14 19V9 M18 19V9 M12 4l-9 5h18l-9-5z M4 9h16" />
        </svg>
        <div className="mockup-container" style={{ zIndex: 1, margin: 0 }}>
          <div style={{ position: 'absolute', width: '220px', height: '220px', background: 'var(--color-primary)', filter: 'blur(90px)', opacity: 0.12, borderRadius: '50%' }}></div>
          
          {/* Слой 4: Жалоба старшему приставу */}
          <div className="doc-wrapper-float-4">
            <div className="doc-sheet doc-sheet-4">
              <div style={{ padding: '35px 25px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '25px' }}>
                  <div style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    УФССП РОССИИ<br />
                    <span style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)' }}>ЖАЛОБА В ПОРЯДКЕ ПОДЧИНЕННОСТИ</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end' }}>
                    <div style={{ width: '80px', height: '3px', background: 'rgba(23,50,77,0.2)' }}></div>
                    <div style={{ width: '50px', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                  </div>
                </div>
                <div style={{ width: '140px', height: '6px', background: 'var(--color-primary)', margin: '0 auto 20px auto' }}></div>
                <div style={{ fontSize: '7px', fontWeight: 'bold', color: 'var(--color-deep-blue)', textAlign: 'center', marginBottom: '14px', fontFamily: 'var(--font-serif)' }}>
                  ОБ ОТМЕНЕ ПОСТАНОВЛЕНИЯ ПРИСТАВА
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ width: '100%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                  <div style={{ width: '90%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                  <div style={{ width: '75%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Слой 3: Постановление об отмене мер */}
          <div className="doc-wrapper-float-3">
            <div className="doc-sheet doc-sheet-3">
              <div style={{ padding: '35px 25px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'absolute', top: '22px', left: '22px', width: '95px', height: '28px', border: '1.5px solid rgba(23, 50, 77, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-4deg)' }}>
                  <span style={{ fontSize: '5px', fontWeight: 'bold', color: 'rgba(23,50,77,0.7)', fontFamily: 'var(--font-serif)', textAlign: 'center', lineHeight: 1.1 }}>
                    УФССП ПО ЛИПЕЦКОЙ ОБЛ.<br />СТАРШИЙ СУДЕБНЫЙ ПРИСТАВ
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
                  ПОСТАНОВЛЕНИЕ ОБ ОТМЕНЕ АРЕСТА
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div style={{ width: '100%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                  <div style={{ width: '95%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                  <div style={{ width: '80%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                </div>
                <div style={{ marginTop: 'auto', paddingTop: '10px', borderTop: '1px dashed rgba(23,50,77,0.15)' }}>
                  <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)' }}>Основание: удовлетворение жалобы стороны ИП</div>
                </div>
              </div>
            </div>
          </div>

          {/* Слой 2: Арбитражный суд — Решение */}
          <div className="doc-wrapper-float-2">
            <div className="doc-sheet doc-sheet-2">
              <div style={{ padding: '28px 22px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'absolute', top: '20px', left: '20px', width: '110px', height: '32px', border: '1px solid #C1A066', color: '#C1A066', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-4deg)', opacity: 0.95 }}>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '5px', textAlign: 'center', fontWeight: 'bold', lineHeight: 1.2 }}>
                    АРБИТРАЖНЫЙ СУД<br />ДЕЛО № А36-3942/2026
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end' }}>
                    <div style={{ width: '85px', height: '3px', background: 'rgba(23,50,77,0.2)' }}></div>
                    <div style={{ width: '45px', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                  </div>
                </div>
                <div style={{ width: '140px', height: '6px', background: 'var(--color-primary)', margin: '0 auto 12px auto' }}></div>
                <div style={{ fontSize: '8px', fontWeight: 'bold', color: 'var(--color-deep-blue)', textAlign: 'center', marginBottom: '4px', fontFamily: 'var(--font-serif)' }}>
                  РЕШЕНИЕ СУДА
                </div>
                <div style={{ fontSize: '6px', color: 'var(--color-gold)', textAlign: 'center', fontWeight: 'bold', marginBottom: '14px', letterSpacing: '0.05em' }}>
                  ГЛАВА 24 АПК РФ
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '5px', color: 'rgba(23,50,77,0.8)' }}>
                    <span>Заявитель: ООО «СтройТех»</span>
                    <span>Действия ФССП: незаконны</span>
                  </div>
                  <div style={{ width: '100%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                  <div style={{ width: '90%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                </div>
                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '8px', borderTop: '1px dashed rgba(23,50,77,0.15)' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                    <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Судья арбитражного суда:</div>
                    <div style={{ width: '70px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '6px' }}></div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                    <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Гербовая печать суда:</div>
                    <div style={{ width: '40px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '6px' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Слой 1: Лицевая карточка дела */}
          <div className="doc-wrapper-float-1">
            <div className="doc-sheet doc-sheet-1">
              <div style={{ padding: '24px 20px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(23,50,77,0.2)', paddingBottom: '10px', marginBottom: '12px' }}>
                  <img src="/images/logo_dark.png" alt="Де-Юре" style={{ width: '55px', height: 'auto', opacity: 0.9 }} />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', alignItems: 'flex-end' }}>
                    <span style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)', letterSpacing: '0.05em' }}>ЗАЩИТА БИЗНЕСА В ФССП</span>
                    <span style={{ fontSize: '5px', color: 'var(--color-primary)', fontWeight: 600 }}>ЮК «Де-Юре» Липецк</span>
                  </div>
                </div>
                
                <div style={{ width: '100%', background: 'rgba(247, 244, 237, 0.75)', border: '1px solid rgba(193, 160, 102, 0.35)', borderRadius: '2px', marginBottom: '12px', padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)', textTransform: 'uppercase' }}>Статус обжалования</span>
                    <span style={{ fontSize: '6px', fontWeight: 'bold', color: '#1B5E20', background: 'rgba(76, 175, 80, 0.15)', padding: '1px 5px', borderRadius: '2px' }}>ЖАЛОБА УДОВЛЕТВОРЕНА</span>
                  </div>
                  <svg width="100%" height="48" viewBox="0 0 220 48" fill="none">
                    <line x1="20" y1="16" x2="80" y2="16" stroke="#C1A066" strokeWidth="2" />
                    <line x1="80" y1="16" x2="140" y2="16" stroke="#C1A066" strokeWidth="2" />
                    <line x1="140" y1="16" x2="200" y2="16" stroke="#C1A066" strokeWidth="2" />
                    <circle cx="20" cy="16" r="6" fill="#10273B" />
                    <text x="20" y="19" fill="#FFF" fontSize="6" fontWeight="bold" textAnchor="middle">✓</text>
                    <text x="20" y="32" fill="#10273B" fontSize="5" fontWeight="bold" textAnchor="middle">Анализ</text>
                    <circle cx="80" cy="16" r="6" fill="#10273B" />
                    <text x="80" y="19" fill="#FFF" fontSize="6" fontWeight="bold" textAnchor="middle">✓</text>
                    <text x="80" y="32" fill="#10273B" fontSize="5" fontWeight="bold" textAnchor="middle">Жалоба</text>
                    <circle cx="140" cy="16" r="6" fill="#10273B" />
                    <text x="140" y="19" fill="#FFF" fontSize="6" fontWeight="bold" textAnchor="middle">✓</text>
                    <text x="140" y="32" fill="#10273B" fontSize="5" fontWeight="bold" textAnchor="middle">Суд / ФССП</text>
                    <circle cx="200" cy="16" r="6" fill="#C1A066" />
                    <text x="200" y="19" fill="#FFF" fontSize="6" fontWeight="bold" textAnchor="middle">✓</text>
                    <text x="200" y="32" fill="#10273B" fontSize="5" fontWeight="bold" textAnchor="middle">Отмена мер</text>
                  </svg>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#FFFFFF', padding: '5px 8px', border: '1px solid rgba(23,50,77,0.08)' }}>
                    <span style={{ fontSize: '6px', color: 'var(--color-text-secondary)' }}>Результат:</span>
                    <span style={{ fontSize: '7px', fontWeight: 'bold', color: 'var(--color-deep-blue)' }}>Арест снят / Постановление отменено</span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C1A066', flexShrink: 0 }}></div>
                    <span style={{ fontSize: '6px', color: 'var(--color-deep-blue)', fontWeight: 500 }}>Оспаривание незаконных мер и постановлений</span>
                  </div>
                  <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C1A066', flexShrink: 0 }}></div>
                    <span style={{ fontSize: '6px', color: 'var(--color-deep-blue)', fontWeight: 500 }}>Защита счетов и активов компании от блокировки</span>
                  </div>
                </div>

                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '8px', borderTop: '1px solid rgba(23,50,77,0.2)' }}>
                  <div>
                    <div style={{ fontSize: '9px', fontWeight: 'bold', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)' }}>ООО ЮК «ДЕ-ЮРЕ»</div>
                    <div style={{ fontSize: '7px', color: 'rgba(23,50,77,0.6)' }}>ИНН 4800009680</div>
                  </div>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', border: '1.5px solid #17375E', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-12deg)', opacity: 0.9 }}>
                    <div style={{ width: '34px', height: '34px', borderRadius: '50%', border: '0.5px dashed #17375E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontSize: '6px', fontWeight: 'bold', color: '#17375E', textAlign: 'center', lineHeight: 1.1 }}>ДЕ-ЮРЕ<br />ЛИПЕЦК</span>
                    </div>
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
            <span style={{ color: 'var(--color-text-main)' }}>Обжалование действий приставов</span>
          </>
        }
        superTitle="Исполнительное производство для бизнеса"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>Обжалование действий</span>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>судебных приставов в Липецке</span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Проверим постановления и материалы исполнительного производства, оценим риски для расчётов и активов компании, подготовим жалобу или заявление в суд и представим интересы бизнеса.
          </span>
        }
        primaryCtaText="Обсудить ситуацию"
        primaryCtaLink="#form"
        primaryCtaAnalytics="b2b_bailiff_hero_cta"
        primaryCtaSubtext={
          <>Если ограничения уже мешают расчётам компании, позвоните: <a href="tel:+79103503111">+7 (910) 350-31-11</a></>
        }
        trustItems={[
          { text: 'Опыт куратора направления — более 13 лет в ФССП' },
          { text: 'Защита компаний-взыскателей и должников' },
          { text: 'Оспаривание в суде и жалоба старшему приставу' },
          { text: 'Срочная оценка рисков для счетов и активов' },
        ]}
        rightContent={docStack}
      />

      {/* ═══ БЛОК 2: КОГДА БИЗНЕСУ НЕЛЬЗЯ ОТКЛАДЫВАТЬ ПРОВЕРКУ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span style={{ display: 'inline-block' }}>Когда действия пристава</span> <br />
              <span style={{ display: 'inline-block' }}>создают прямой риск для бизнеса</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>В исполнительном производстве промедление грозит</span> <br />
              <span style={{ display: 'inline-block' }}>реальными финансовыми потерями как для должника, так и для взыскателя.</span>
            </p>
          </div>
          
          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '32px' }}>
            {[
              { 
                tag: 'Риск блокировки', 
                title: <><span style={{ display: 'inline-block' }}>Ограничены расчёты</span> <br /><span style={{ display: 'inline-block' }}>по основному счёту</span></>, 
                desc: (
                  <>
                    <span style={{ display: 'inline-block' }}>Проверим основание и объём взыскания,</span>{' '}
                    <span style={{ display: 'inline-block' }}>последовательность постановлений</span>{' '}
                    <span style={{ display: 'inline-block' }}>и возможность срочной защиты</span>{' '}
                    <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>без смешения с 115-ФЗ.</span>
                  </>
                )
              },
              { 
                tag: 'Риск изъятия', 
                title: <><span style={{ display: 'inline-block' }}>Арестовано имущество,</span> <br /><span style={{ display: 'inline-block' }}>необходимое для работы</span></>, 
                desc: (
                  <>
                    <span style={{ display: 'inline-block' }}>Оценим принадлежность имущества,</span>{' '}
                    <span style={{ display: 'inline-block' }}>соразмерность меры, порядок ареста</span>{' '}
                    <span style={{ display: 'inline-block' }}>и доказательства последствий для бизнеса.</span>
                  </>
                )
              },
              { 
                tag: 'Риск переплаты', 
                title: <><span style={{ display: 'inline-block' }}>Начислен</span> <br /><span style={{ display: 'inline-block' }}>исполнительский сбор</span></>, 
                desc: (
                  <>
                    <span style={{ display: 'inline-block' }}>Сверим извещение, срок добровольного</span>{' '}
                    <span style={{ display: 'inline-block' }}>исполнения, основания постановления</span>{' '}
                    <span style={{ display: 'inline-block' }}>и объективные обстоятельства задержки.</span>
                  </>
                )
              },
              { 
                tag: 'Риск бездействия', 
                title: <><span style={{ display: 'inline-block' }}>Пристав не исполняет</span> <br /><span style={{ display: 'inline-block' }}>решение в пользу компании</span></>, 
                desc: (
                  <>
                    <span style={{ display: 'inline-block' }}>Установим, какие заявления подавались,</span>{' '}
                    <span style={{ display: 'inline-block' }}>какие действия фактически совершены</span>{' '}
                    <span style={{ display: 'inline-block' }}>и чего потребовать</span>{' '}
                    <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>для продолжения взыскания.</span>
                  </>
                )
              },
              { 
                tag: 'Риск закрытия', 
                title: <><span style={{ display: 'inline-block' }}>Производство окончено</span> <br /><span style={{ display: 'inline-block' }}>или документ возвращён</span></>, 
                desc: (
                  <>
                    <span style={{ display: 'inline-block' }}>Проверим основание решения, полноту</span>{' '}
                    <span style={{ display: 'inline-block' }}>исполнительных действий и возможность отмены</span>{' '}
                    <span style={{ display: 'inline-block' }}>постановления либо повторного предъявления.</span>
                  </>
                )
              },
              { 
                tag: 'Риск запретов', 
                title: <><span style={{ display: 'inline-block' }}>Ограничения сохраняются</span> <br /><span style={{ display: 'inline-block' }}>после исполнения</span></>, 
                desc: (
                  <>
                    <span style={{ display: 'inline-block' }}>Сопоставим фактические поступления,</span>{' '}
                    <span style={{ display: 'inline-block' }}>постановления об окончании и сведения</span>{' '}
                    <span style={{ display: 'inline-block' }}>банков и регистрирующих органов.</span>
                  </>
                )
              }
            ].map((risk, index) => (
              <div 
                key={index}
                className="hover-lift"
                style={{
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
                }}
              >
                {/* Каноничный водяной знак */}
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
                  {risk.tag}
                </div>

                <h3 style={{ 
                  fontFamily: 'var(--font-serif)', 
                  fontSize: '17px !important', 
                  fontWeight: 600, 
                  color: 'var(--color-deep-blue)', 
                  margin: '0 0 14px 0', 
                  lineHeight: 1.4,
                  position: 'relative',
                  zIndex: 1
                }}>
                  {risk.title}
                </h3>

                <p style={{ 
                  fontSize: '15px', 
                  color: 'var(--color-text-secondary)', 
                  lineHeight: 1.6, 
                  margin: 0,
                  position: 'relative',
                  zIndex: 1
                }}>
                  {risk.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            background: 'var(--color-white)',
            padding: '20px 28px',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-gold)',
            boxShadow: '0 4px 16px rgba(23, 50, 77, 0.05)',
            fontSize: '15px',
            color: 'var(--color-deep-blue)',
            fontWeight: 500,
            lineHeight: 1.6
          }}>
            Срок на подачу жалобы обычно составляет 10 дней с даты постановления, действия или момента, когда компании стало известно о нарушении. Юрист проверит сроки по материалам дела.
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: ЧТО МОЖНО ОБЖАЛОВАТЬ ═══ */}
      <section className="section" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              <span style={{ display: 'inline-block' }}>Что можно обжаловать</span> <br />
              <span style={{ display: 'inline-block' }}>в исполнительном производстве</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Недостаточно указать, что решение мешает работе компании. Нужно определить</span> <br />
              <span style={{ display: 'inline-block' }}>конкретное постановление, нарушение закона и требуемый способ защиты.</span>
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', position: 'relative' }}>
            {[
              {
                title: <><span style={{ display: 'inline-block' }}>Постановления</span> <br /><span style={{ display: 'inline-block' }}>пристава</span></>,
                desc: 'Возбуждение, отказ, окончание или прекращение производства, исполнительский сбор, оценка имущества и распределение средств.'
              },
              {
                title: <><span style={{ display: 'inline-block' }}>Аресты и ограничения</span> <br /><span style={{ display: 'inline-block' }}>имущества</span></>,
                desc: 'Оцениваем принадлежность имущества, объём требований, соразмерность мер, соблюдение процедуры и защиту основных средств.'
              },
              {
                title: <><span style={{ display: 'inline-block' }}>Списание и распределение</span> <br /><span style={{ display: 'inline-block' }}>денежных средств</span></>,
                desc: 'Сверяем постановления, сумму требования, законную очерёдность списаний и фактическое движение средств по счетам.'
              },
              {
                title: <><span style={{ display: 'inline-block' }}>Отказ совершить</span> <br /><span style={{ display: 'inline-block' }}>действие</span></>,
                desc: 'Проверяем отказ принять документ, рассмотреть ходатайство стороны, снять утратившее основание ограничение или запрет.'
              },
              {
                title: <><span style={{ display: 'inline-block' }}>Бездействие пристава</span> <br /><span style={{ display: 'inline-block' }}>по взысканию</span></>,
                desc: 'Для компании-взыскателя фиксируем несовершённые запросы, затягивание сроков и влияние бездействия на возврат долга.'
              },
              {
                title: <><span style={{ display: 'inline-block' }}>Нарушение прав</span> <br /><span style={{ display: 'inline-block' }}>иного собственника</span></>,
                desc: 'Если арест затронул имущество третьего лица (лизинг, аренда, хранение), определяем надлежащий иск об освобождении от ареста.'
              }
            ].map((item, index) => (
              <div 
                key={index}
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
                  {String(index + 1).padStart(2, '0')}
                </div>

                <h3 style={{
                  fontSize: '18px',
                  fontFamily: 'var(--font-serif)',
                  color: 'var(--color-deep-blue)',
                  margin: '8px 0 14px 0',
                  lineHeight: 1.35
                }}>
                  {item.title}
                </h3>

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
      </section>

      {/* ═══ БЛОК 4: КАК ВЫБИРАЕМ СПОСОБ ОБЖАЛОВАНИЯ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(24px, 3.4vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.25 }}>
              <span style={{ display: 'block', whiteSpace: 'nowrap' }}>Жалоба руководителю или обращение в суд —</span>
              <span style={{ display: 'block', whiteSpace: 'nowrap' }}>после проверки цели и подсудности</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Вышестоящее должностное лицо и суд имеют разные полномочия, сроки</span> <br />
              <span style={{ display: 'inline-block' }}>и процессуальные последствия. Способ защиты выбирается под конкретную задачу.</span>
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '28px', marginBottom: '32px' }}>
            {/* Карточка 1: Жалоба в порядке подчинённости */}
            <div style={{
              background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-primary)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0, paddingBottom: '12px', borderBottom: '1px solid rgba(23, 50, 77, 0.1)' }}>
                <span style={{ display: 'inline-block' }}>Жалоба в порядке подчинённости (ФССП)</span>
              </h3>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Подаётся старшему судебному приставу или главному судебному приставу субъекта РФ. Позволяет оперативно устранить явные процессуальные нарушения внутри ведомства.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Определение компетентного адресата</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Направляем жалобу строго уполномоченному вышестоящему должностному лицу с соблюдением иерархии ФССП.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Чёткая формулировка требований</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Указываем конкретные статьи 229-ФЗ, нарушенные приставом, и результат, обязательный для исполнения.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Контроль рассмотрения и исполнения</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Отслеживаем вынесение постановления по жалобе и фактическое устранение допущенного нарушения.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Карточка 2: Судебное оспаривание */}
            <div style={{
              background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-primary)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0, paddingBottom: '12px', borderBottom: '1px solid rgba(23, 50, 77, 0.1)' }}>
                <span style={{ display: 'inline-block' }}>Судебное оспаривание (Арбитраж / СОЮ)</span>
              </h3>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Заявление о признании постановлений, действий или бездействия незаконными по правилам главы 24 АПК РФ либо главы 22 КАС РФ с обязательной силой судебного акта.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Точное определение подсудности</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Определяем надлежащий арбитражный суд или суд общей юрисдикции во избежание возврата заявления.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Формирование доказательной базы</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Собираем материалы производства, доказательства несоразмерности мер и нарушения прав компании.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Срочные меры и судебное представительство</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Ходатайствуем о приостановлении оспариваемого постановления и представляем интересы в заседаниях.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div style={{
            background: 'var(--color-white)',
            padding: '20px 28px',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-gold)',
            boxShadow: '0 4px 16px rgba(23, 50, 77, 0.05)',
            fontSize: '15px',
            color: 'var(--color-deep-blue)',
            fontWeight: 500,
            lineHeight: 1.6
          }}>
            Подача жалобы сама по себе не останавливает взыскание. При необходимости юрист готовит мотивированное ходатайство о приостановлении исполнительного производства или обеспечительных мерах.
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 5: ЗАЩИЩАЕМ БИЗНЕС (Структурированный регламент в 2 панели без дробления на карточки) ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '44px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(24px, 3.4vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.25 }}>
              <span style={{ display: 'block', whiteSpace: 'nowrap' }}>Защищаем бизнес от проверки документов</span>
              <span style={{ display: 'block', whiteSpace: 'nowrap' }}>до устранения нарушения</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              <span style={{ display: 'block', whiteSpace: 'nowrap' }}>Комплексная работа юриста включает анализ материалов производства,</span>
              <span style={{ display: 'block', whiteSpace: 'nowrap' }}>подготовку процессуальных документов и представительство компании.</span>
            </p>
          </div>

          {/* 2 тематические панели вместо 8 отдельных карточек */}
          <div className="grid grid-2" style={{ gap: '32px', marginBottom: '40px', alignItems: 'stretch' }}>
            {/* Панель 1: Аудит и проверка */}
            <div style={{
              background: '#FFFFFF',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-primary)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '16px', marginBottom: '24px', borderBottom: '1px solid rgba(23, 50, 77, 0.1)' }}>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0 }}>
                  I. Правовой анализ и аудит ситуации
                </h3>
                <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Шаги 01–04</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {[
                  {
                    num: '01',
                    title: 'Определим цель и срочность',
                    desc: 'Определим срочность, процессуальную роль компании (взыскатель или должник) и требуемый для бизнеса результат.'
                  },
                  {
                    num: '02',
                    title: 'Изучим документы',
                    desc: 'Изучим исполнительный документ, постановления, извещения, ходатайства и имеющиеся ответы ФССП.'
                  },
                  {
                    num: '03',
                    title: 'Ознакомимся с материалами',
                    desc: 'Ознакомимся с материалами исполнительного производства в согласованном с вами объёме.'
                  },
                  {
                    num: '04',
                    title: 'Проверим основания',
                    desc: 'Проверим полномочия пристава, основания решения, соблюдение процедуры, сумму и соразмерность мер.'
                  }
                ].map((step, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '18px', alignItems: 'flex-start' }}>
                    <div style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '20px',
                      fontWeight: 700,
                      color: 'var(--color-gold)',
                      lineHeight: 1.2,
                      minWidth: '28px',
                      flexShrink: 0
                    }}>
                      {step.num}
                    </div>
                    <div>
                      <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-deep-blue)', marginBottom: '4px', lineHeight: 1.35 }}>
                        {step.title}
                      </div>
                      <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                        {step.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Панель 2: Процессуальная защита */}
            <div style={{
              background: '#FFFFFF',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-gold)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '16px', marginBottom: '24px', borderBottom: '1px solid rgba(23, 50, 77, 0.1)' }}>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0 }}>
                  II. Процессуальные действия и защита
                </h3>
                <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Шаги 05–08</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {[
                  {
                    num: '05',
                    title: 'Определим адресата и срок',
                    desc: 'Определим срок обжалования, компетентного адресата (ФССП или суд) и процессуальную форму обращения.'
                  },
                  {
                    num: '06',
                    title: 'Подготовим жалобу в ФССП',
                    desc: 'Подготовим мотивированную жалобу в порядке подчинённости, адресные заявления и ходатайства.'
                  },
                  {
                    num: '07',
                    title: 'Подготовим заявление в суд',
                    desc: 'Подготовим заявление в арбитражный суд либо документы для суда общей юрисдикции и ходатайство о приостановлении мер.'
                  },
                  {
                    num: '08',
                    title: 'Представим интересы компании',
                    desc: 'Представим интересы компании в ФССП и суде и проконтролируем фактическое устранение нарушения.'
                  }
                ].map((step, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '18px', alignItems: 'flex-start' }}>
                    <div style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '20px',
                      fontWeight: 700,
                      color: 'var(--color-primary)',
                      lineHeight: 1.2,
                      minWidth: '28px',
                      flexShrink: 0
                    }}>
                      {step.num}
                    </div>
                    <div>
                      <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-deep-blue)', marginBottom: '4px', lineHeight: 1.35 }}>
                        {step.title}
                      </div>
                      <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                        {step.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#form" className="btn btn-primary" style={{ padding: '15px 36px', fontSize: '15px' }} data-analytics="b2b_bailiff_process_cta">
              Обсудить объём помощи
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 6: ВЕДУЩИЙ ЮРИСТ ПО УСЛУГЕ ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name="Марина Валерьевна Смольянинова"
        position="Ведущий юрист ЮК «Де-Юре», куратор направления «Исполнительное производство»"
        imageUrl="/images/smolyaninova.jpg"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Марина Валерьевна Смольянинова более 13 лет работала в Федеральной службе судебных приставов, в том числе на руководящих должностях. Рассматривала обращения и жалобы, контролировала исполнительные производства и работу сотрудников, взаимодействовала с судами и государственными органами. Этот опыт помогает отделять формальный ответ от действия, которое действительно способно восстановить права бизнеса.
          </span>,
          <ul key="2" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>13 лет опыта работы в Федеральной службе судебных приставов (ФССП)</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Специализация — споры с судебными приставами и защита активов компаний</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Лично проверяет стратегию, жалобы и ключевые процессуальные документы</span>
            </li>
          </ul>,
          <a key="3" href="/specialisty/smolyaninova-marina-valerevna/" style={{ display: 'inline-block', marginTop: '16px', fontSize: '14px', color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
            Подробнее о Марине Валерьевне Смольяниновой →
          </a>
        ]}
        buttonText="Задать вопрос Марине Валерьевне"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 7: ПРИМЕРЫ ИЗ ПРАКТИКИ ═══ */}
      <CasesBlock
        title={<>Каких результатов добивается <br />бизнес при обжаловании</>}
        showAllLink="/praktika/"
        showAllText="Смотреть практику"
        showDemoWarning={true}
        cases={cases}
      />

      {/* ═══ БЛОК 8: КАК ПРОХОДИТ РАБОТА ═══ */}
      <ProcessBlock
        title="Как проходит работа"
        subtitle="От срочной оценки ситуации до фактического устранения нарушения."
        alignTitle="center"
        steps={[
          { num: '01', title: 'Фиксируем срок и риск', desc: 'Уточняем дату документа или действия, роль компании, действующие ограничения, номер производства и результат, который нужен бизнесу.' },
          { num: '02', title: 'Изучаем материалы', desc: 'Проверяем исполнительный документ, постановления, извещения, обращения, ответы, движение денег и доступные материалы производства.' },
          { num: '03', title: 'Определяем нарушение и требование', desc: 'Отделяем неудобные последствия от юридически значимого нарушения и формулируем, какое решение должно восстановить права.' },
          { num: '04', title: 'Выбираем адресата и объём', desc: 'Сравниваем жалобу в порядке подчинённости и судебное оспаривание, определяем подсудность, срочные меры, риски и стоимость.' },
          { num: '05', title: 'Подаём документы и действуем', desc: 'Готовим жалобу, заявление или ходатайство, подаём комплект и сопровождаем рассмотрение в согласованном объёме.' },
          { num: '06', title: 'Контролируем устранение нарушения', desc: 'Проверяем не только судебный акт или решение, но и фактическую отмену постановления, снятие меры либо совершение действия.' },
        ]}
        ctaTitle="Готовы обсудить вашу задачу"
        ctaSubtitle="Кратко опишите ситуацию — мы уточним обстоятельства, проверим сроки и определим оптимальный способ защиты."
        ctaButtonText="Обсудить ситуацию"
        ctaButtonHref="#form"
        footerNote="Консультацию, проверку электронных копий и подготовку большинства документов можно начать дистанционно. Необходимость личного участия в ФССП или суде определяется после выбора способа защиты."
      />

      {/* ═══ БЛОК 9: СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость юридической помощи"
        subtitle="Форматы работы по обжалованию действий и постановлений приставов"
        tiers={[
          {
            title: 'Анализ материалов',
            subtitle: 'Первичная оценка рисков',
            price: 'от 5 000 ₽',
            features: [
              { name: 'Изучение постановлений и сроков', value: 'Да' },
              { name: 'Оценка подсудности и перспектив', value: 'Да' },
              { name: 'Выбор адресата жалобы', value: 'Да' },
              { name: 'Представительство в ФССП / суде', value: 'Нет' }
            ],
            buttonText: 'Обсудить ситуацию',
            buttonHref: '#form'
          },
          {
            title: 'Жалоба в ФССП',
            subtitle: 'Порядок подчинённости',
            popular: true,
            price: 'от 15 000 ₽',
            features: [
              { name: 'Подготовка мотивированной жалобы', value: 'Да' },
              { name: 'Формирование приложений', value: 'Да' },
              { name: 'Контроль рассмотрения старшим приставом', value: 'Да' },
              { name: 'Ведение дела в арбитражном суде', value: 'Нет' }
            ],
            buttonText: 'Обсудить ситуацию',
            buttonHref: '#form'
          },
          {
            title: 'Судебное оспаривание',
            subtitle: 'Арбитраж / СОЮ',
            price: 'от 45 000 ₽',
            features: [
              { name: 'Заявление по гл. 24 АПК / 22 КАС', value: 'Да' },
              { name: 'Ходатайство о приостановлении мер', value: 'Да' },
              { name: 'Судебное представительство', value: 'Да' },
              { name: 'Контроль фактического исполнения', value: 'Да' }
            ],
            buttonText: 'Обсудить ситуацию',
            buttonHref: '#form'
          }
        ]}
        disclaimer="Цена зависит от объёма материалов, срочности, числа оспариваемых постановлений, выбранного порядка (жалоба в порядке подчинённости или суд) и необходимости представительства. Состав услуг и стоимость фиксируются в договоре до начала работы."
        guaranteeText="Если после консультации заключается договор на дальнейшую работу, стоимость консультации засчитывается в оплату по договору."
      />

      {/* ═══ БЛОК 10: FAQ ═══ */}
      <FAQBlock
        superTitle="Частые вопросы бизнеса"
        title={<><span>Частые вопросы</span> <br /><span>об обжаловании действий приставов</span></>}
        subtitle="Разбираем правила сроков, подсудности и механизмы защиты счетов и имущества компании"
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
                Действия пристава мешают работе компании?
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '28px', textWrap: 'balance' }}>
                Укажите номер исполнительного производства, какое постановление или действие оспаривается и чем ситуация рискует для бизнеса. Марина Валерьевна Смольянинова проверит срочность и предложит подходящий способ защиты.
              </p>
              
              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Срочный вопрос по блокировке счетов?</strong>
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
                buttonText="Обсудить ситуацию"
                commentPlaceholder="Кратко опишите ситуацию: номер производства, взыскатель или должник, наложенные ограничения..."
                subtext="Если вы оставите заявку вечером или в выходной день, мы перезвоним в ближайший рабочий день."
                hiddenFields={[
                  { name: 'pageId', value: 'B2B-10-02' },
                  { name: 'templateId', value: 'T06' },
                  { name: 'service', value: 'b2b_bailiff_appeal' },
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
