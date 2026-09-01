'use client';

import React, { useState } from 'react';
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
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const cases: CaseData[] = [
    {
      category: 'Взыскатель / Незаконное окончание',
      title: 'Отменили окончание производства в пользу компании',
      problem: 'Компания-взыскатель получила постановление об окончании производства и возврате исполнительного листа. В материалах не было результатов части запросов, а известные взыскателю сведения о транспорте и контрагентах должника не проверялись.',
      action: 'Ознакомились с материалами, сопоставили заявления взыскателя с действиями пристава и подготовили жалобу с перечнем неисполненных проверок и конкретным требованием отменить постановление.',
      result: 'Постановление отменили, производство возобновили; после дополнительных действий обнаружили денежные поступления, из которых началось погашение требования.'
    },
    {
      category: 'Должник / Исполнительский сбор',
      title: 'Оспорили сбор после ненадлежащего извещения компании',
      problem: 'Организация узнала о производстве после ограничений по счёту и получила постановление о взыскании исполнительского сбора, хотя документы о возбуждении производства по надлежащему адресу фактически не поступали.',
      action: 'Проверили адресные данные, способ направления и вручения постановления, дату фактического получения информации и исполнение основного требования. Подготовили заявление в суд и доказательства нарушения порядка извещения.',
      result: 'Суд признал постановление о взыскании исполнительского сбора незаконным; начисление отменили, сведения в производстве скорректировали.'
    },
    {
      category: 'Должник / Снятие ограничений',
      title: 'Добились снятия ареста со счетов и транспорта после исполнения',
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
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Обжалование действий
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              и решений судебных
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              приставов для бизнеса
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              в Липецке и области
            </span>
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
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Если ограничения уже мешают
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              расчётам компании, позвоните: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (910) 350-31-11</a>
            </span>
          </span>
        }
        trustItems={[
          { text: 'Опыт куратора направления — более 13 лет в ФССП' },
          { text: 'Защита компаний-взыскателей и должников' },
          { text: 'Оспаривание в суде и жалоба старшему приставу' },
          { text: 'Срочная оценка рисков для счетов и активов' },
        ]}
        imageUrl="/images/smolyaninova.jpg"
        imageName="Марина Валерьевна Смольянинова"
        imageSubtitle="Ведущий юрист ЮК «Де-Юре», куратор направления «Исполнительное производство»"
        imageObjectPosition="50% -75px"
      />

      {/* ═══ БЛОК 2: КОГДА БИЗНЕСУ НЕЛЬЗЯ ОТКЛАДЫВАТЬ ПРОВЕРКУ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
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
                title: <><span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Ограничены расчёты</span>{' '}<span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>по основному счёту компании</span></>, 
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
                title: <><span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Арестовано имущество,</span>{' '}<span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>необходимое для работы бизнеса</span></>, 
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
                title: <><span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Незаконно начислен</span>{' '}<span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>крупный исполнительский сбор</span></>, 
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
                title: <><span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Пристав не исполняет</span>{' '}<span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>решение суда в пользу компании</span></>, 
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
                title: <><span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Производство окончено</span>{' '}<span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>без фактического взыскания</span></>, 
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
                title: <><span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Ограничения сохраняются</span>{' '}<span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>после полного исполнения долга</span></>, 
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
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Что можно обжаловать</span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>в исполнительном производстве</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Недостаточно указать, что решение мешает работе компании. Нужно определить</span> <br />
              <span style={{ display: 'inline-block' }}>конкретное постановление, нарушение закона и требуемый способ защиты.</span>
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', position: 'relative' }}>
            {[
              {
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Постановления</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>судебного пристава</span>
                  </>
                ),
                desc: 'Возбуждение, отказ, окончание или прекращение производства, исполнительский сбор, оценка имущества и распределение средств.'
              },
              {
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Аресты и запреты</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>в отношении имущества</span>
                  </>
                ),
                desc: 'Оцениваем принадлежность имущества, объём требований, соразмерность мер, соблюдение процедуры и защиту основных средств.'
              },
              {
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Списание</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и распределение средств</span>
                  </>
                ),
                desc: 'Сверяем постановления, сумму требования, законную очерёдность списаний и фактическое движение средств по счетам.'
              },
              {
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Отказ совершить</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>исполнительное действие</span>
                  </>
                ),
                desc: 'Проверяем отказ принять документ, рассмотреть ходатайство стороны, снять утратившее основание ограничение или запрет.'
              },
              {
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Бездействие пристава</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>по взысканию задолженности</span>
                  </>
                ),
                desc: (
                  <>
                    Фиксируем несовершённые запросы, затягивание сроков, нерозыск активов должника и влияние бездействия на возврат долга компании. Если основная задача компании — получить деньги по исполнительному документу, посмотрите услугу <Link href="/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/vzyskanie-po-ispolnitelnomu-listu-s-yuridicheskogo-lica/" style={{ color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>взыскания по исполнительному листу с юридического лица</Link>.
                  </>
                )
              },
              {
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Нарушение прав</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>стороннего собственника</span>
                  </>
                ),
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
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Жалоба руководителю или суд —</span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>после проверки цели и подсудности</span>
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
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Жалоба в порядке</span>{' '}<span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>ведомственной подчинённости (ФССП)</span>
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
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Судебное оспаривание</span>{' '}<span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>в арбитражном суде или СОЮ</span>
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

      {/* ═══ БЛОК 5: ЭТАПЫ ЗАЩИТЫ БИЗНЕСА (Типовой блок этапов) ═══ */}
      <ProcessBlock
        alignTitle="center"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Что входит в обжалование</span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>действий судебного пристава</span>
          </span>
        }
        subtitle={
          <span style={{ display: 'block' }}>
            <span style={{ display: 'block', whiteSpace: 'nowrap' }}>Комплексная работа юриста включает анализ материалов производства,</span>
            <span style={{ display: 'block', whiteSpace: 'nowrap' }}>подготовку процессуальных документов и представительство компании.</span>
          </span>
        }
        steps={[
          {
            num: '01',
            title: <><span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Определим цель</span>{' '}<span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и срочность обжалования</span></>,
            desc: 'Определим срочность, процессуальную роль компании (взыскатель или должник) и требуемый для бизнеса результат.'
          },
          {
            num: '02',
            title: <><span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Изучим</span>{' '}<span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>имеющиеся документы</span></>,
            desc: 'Изучим исполнительный документ, постановления, извещения, ходатайства и имеющиеся ответы ФССП.'
          },
          {
            num: '03',
            title: <><span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Ознакомимся</span>{' '}<span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>с материалами дела</span></>,
            desc: 'Ознакомимся с материалами исполнительного производства в согласованном с вами объёме.'
          },
          {
            num: '04',
            title: <><span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Проверим</span>{' '}<span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>законность оснований</span></>,
            desc: 'Проверим полномочия пристава, основания решения, соблюдение процедуры, сумму и соразмерность мер.'
          },
          {
            num: '05',
            title: <><span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Определим</span>{' '}<span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>надлежащего адресата</span></>,
            desc: 'Определим срок обжалования, компетентного адресата (ФССП или суд) и процессуальную форму обращения.'
          },
          {
            num: '06',
            title: <><span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Подготовим жалобу</span>{' '}<span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>старшему судебному приставу</span></>,
            desc: 'Подготовим мотивированную жалобу в порядке подчинённости, адресные заявления и ходатайства.'
          },
          {
            num: '07',
            title: <><span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Подготовим заявление</span>{' '}<span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>в арбитражный суд</span></>,
            desc: 'Подготовим заявление в арбитражный суд либо документы для суда общей юрисдикции и ходатайство о приостановлении мер.'
          },
          {
            num: '08',
            title: <><span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Представим интересы</span>{' '}<span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>компании до результата</span></>,
            desc: 'Представим интересы компании в ФССП и суде и проконтролируем фактическое устранение нарушения.'
          }
        ]}
        ctaTitle="Готовы обсудить вашу ситуацию"
        ctaSubtitle="Опишите задачу — юрист изучит документы и предложит конкретные шаги."
        ctaButtonText="Обсудить объём помощи"
        ctaButtonHref="#form"
        footerNote="Консультацию, проверку электронных копий и подготовку большинства документов можно начать дистанционно. Необходимость личного участия в ФССП или суде определяется после выбора способа защиты."
      />

      {/* ═══ БЛОК 6: ВЕДУЩИЙ ЮРИСТ ПО УСЛУГЕ ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name="Марина Валерьевна Смольянинова"
        position="Ведущий юрист ЮК «Де-Юре», куратор направления «Исполнительное производство»"
        imageUrl="/images/smolyaninova.jpg"
        profileHref="/specialisty/smolyaninova-marina-valerevna/"
        profileText="Подробнее о Марине Валерьевне Смольяниновой →"
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
          </ul>
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
            subtitle: 'Порядок ведомственной подчинённости',
            popular: true,
            badgeText: 'Популярно',
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
            subtitle: 'Защита в арбитражном суде',
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
