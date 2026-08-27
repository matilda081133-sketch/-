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

export default function VzyskanieIspolnitelnyListClient() {
  const cases: CaseData[] = [
    {
      category: 'Предъявление в банк',
      title: 'Взыскали присуждённую сумму через банк должника',
      problem: 'После решения суда клиент получил исполнительный лист на 480 000 рублей, но не знал, где у должника находятся деньги, и опасался затяжного производства у приставов.',
      action: 'Проверили срок и реквизиты листа, получили сведения о счетах должника, выбрали банк с действующим счётом и подготовили заявление для непосредственного предъявления документа.',
      result: 'Банк перечислил клиенту 480 000 рублей; обращаться к приставам и разыскивать имущество не потребовалось.'
    },
    {
      category: 'Взыскание алиментов',
      title: 'Добились погашения задолженности по алиментам и выплат',
      problem: 'Алименты поступали нерегулярно, задолженность увеличивалась, а в материалах производства не было актуальных сведений о месте работы и счетах должника.',
      action: 'Ознакомились с производством, добились расчёта задолженности, запросов о доходах и счетах, направления документа работодателю и применения предусмотренных законом ограничений.',
      result: 'Начались регулярные удержания из заработной платы, накопленная задолженность стала погашаться дополнительно к текущим алиментам.'
    },
    {
      category: 'Повторное предъявление',
      title: 'Возобновили взыскание после возврата исполнительного листа',
      problem: 'Пристав окончил производство из-за отсутствия обнаруженного имущества. Позднее клиент узнал, что должник приобрёл автомобиль и официально трудоустроился.',
      action: 'Проверили срок повторного предъявления, собрали сведения о новых активах, повторно предъявили лист и подали ходатайства об обращении взыскания на доход и запрете регистрационных действий с автомобилем.',
      result: 'Производство возбудили повторно, удержания пошли из заработной платы, а оставшаяся сумма была выплачена после введения ограничения на автомобиль.'
    }
  ];

  const faqs = [
    {
      q: 'Куда подавать исполнительный лист?',
      a: 'Адресат зависит от должника и известной информации. Документ можно предъявить приставам, непосредственно в банк, а в предусмотренных законом случаях — работодателю, казначейству или иному органу. Юрист сравнивает маршруты до подачи.'
    },
    {
      q: 'Можно ли узнать, в каких банках у должника есть счета?',
      a: 'Взыскатель с исполнительным листом, срок предъявления которого не истёк, вправе обратиться в налоговый орган за предусмотренными законом сведениями о счетах должника.'
    },
    {
      q: 'Какой срок предъявления исполнительного листа?',
      a: 'Общее правило для листа на основании судебного акта — три года со дня вступления акта в законную силу. Для периодических платежей и ряда других документов действуют специальные сроки; также учитываются предыдущие предъявления и перерыв срока.'
    },
    {
      q: 'Обязан ли пристав взыскать деньги за два месяца?',
      a: 'Закон устанавливает общий двухмесячный срок совершения исполнительных действий, но это не гарантия фактического взыскания. Результат зависит от наличия денег и имущества, очередности требований, розыска и обжалований.'
    },
    {
      q: 'Что делать, если пристав ничего не делает?',
      a: 'Нужно изучить материалы производства и определить, какие обязательные или запрошенные действия не совершены. После этого подаются адресные ходатайства, жалоба руководителю либо административный иск.'
    },
    {
      q: 'Можно ли подать лист в банк без приставов?',
      a: 'Да, если речь идёт о взыскании денег или их аресте и известен банк должника. Вместе с документом подаётся заявление с обязательными сведениями и реквизитами взыскателя.'
    },
    {
      q: 'Что происходит, если денег на счёте недостаточно?',
      a: 'Банк перечисляет доступную сумму и, если нет законного основания прекратить исполнение, продолжает исполнять документ по мере поступления денег до полного погашения требования.'
    },
    {
      q: 'Можно ли предъявить документ повторно после возврата?',
      a: 'Во многих случаях — да, но нужно проверить основание окончания производства и правильно рассчитать новый срок предъявления. Повторная подача без новых сведений или ходатайств может снова не дать результата.'
    },
    {
      q: 'Можно ли взыскать алименты напрямую через работодателя?',
      a: 'Для периодических платежей закон предусматривает предъявление исполнительного документа лицу, выплачивающему должнику зарплату или иной периодический доход. Перед подачей проверяются документ, место работы и реквизиты заявления.'
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
        <div className="doc-wrapper-float-2"><div className="doc-sheet doc-sheet-2"><div style={{ padding: '30px 25px', height: '100%', display: 'flex', flexDirection: 'column' }}><div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '30px' }}><div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-end' }}><div style={{ width: '100px', height: '4px', background: 'rgba(23,50,77,0.2)' }}></div><div style={{ width: '60px', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div><div style={{ width: '80px', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div></div></div><div style={{ width: '160px', height: '8px', background: 'var(--color-primary)', margin: '0 auto 20px auto' }}></div><div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}><div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}><div style={{ width: '40%', height: '4px', background: 'rgba(23,50,77,0.2)' }}></div><div style={{ width: '100%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div><div style={{ width: '90%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div></div><div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}><div style={{ width: '50%', height: '4px', background: 'rgba(23,50,77,0.2)' }}></div><div style={{ width: '100%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div><div style={{ width: '85%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div></div></div><div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '10px', borderTop: '1px dashed rgba(23,50,77,0.1)' }}><div><div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.5)' }}>Взыскатель:</div><div style={{ width: '80px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '10px' }}></div></div><div><div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.5)' }}>Юрист:</div><div style={{ width: '80px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '10px' }}></div></div></div></div></div></div>
        
        {/* Верхний лист */}
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
            <span style={{ color: 'var(--color-text-main)' }}>Взыскание по исполнительному листу</span>
          </>
        }
        superTitle="Исполнительное производство в Липецке"
        title={
          <span style={{ display: 'block' }}>
            <span style={{ display: 'block' }}>Взыскание по</span>
            <span style={{ display: 'block' }}>исполнительному листу</span>
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
                Проверим документ и сведения о должнике, выберем способ предъявления,
              </span>
              <span className="hero-sub-span-desktop" style={{ display: 'block' }}>
                добьёмся необходимых действий пристава и проконтролируем поступление денег.
              </span>
            </span>
          </>
        }
        primaryCtaText="Оценить перспективу взыскания"
        primaryCtaLink="#form"
        primaryCtaAnalytics="service_exec_list_hero_cta"
        primaryCtaSubtext={
          <>Если судебный акт уже получен, позвоните: <a href="tel:+79103503111" data-analytics="service_exec_list_phone_click">+7 (910) 350-31-11</a></>
        }
        trustItems={[
          { text: 'Проверяем должника и имущество' },
          { text: 'Предъявление в банк или ФССП' },
          { text: 'Контроль и обжалование бездействия' },
          { text: 'Куратор — 13 лет опыта в ФССП' },
        ]}
        imageUrl="/images/smolyaninova.jpg"
        imageName="Марина Валерьевна Смольянинова"
        imageSubtitle="Ведущий юрист ЮК «Де-Юре», куратор направления «Исполнительное производство» (13 лет опыта в ФССП)"
        imageObjectPosition="center 25%"
      />

      {/* ═══ БЛОК 2: В КАКИХ СИТУАЦИЯХ ПОМОГАЕМ (КОГДА СТОИТ ПОДКЛЮЧИТЬ ЮРИСТА) ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span style={{ display: 'inline-block' }}>Когда стоит подключить</span> <br />
              <span style={{ display: 'inline-block' }}>юриста к&nbsp;взысканию</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Судебный акт подтверждает право на&nbsp;деньги, но&nbsp;исполнение требует активных действий.</span> <br />
              <span style={{ display: 'inline-block' }}>Помогаем взыскателю на&nbsp;любой стадии исполнительного производства.</span>
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '40px' }}>
            {[
              {
                tag: 'Старт взыскания',
                title: <><span style={{ display: 'block' }}>Исполнительный лист</span><span style={{ display: 'block' }}>получен, но не предъявлен</span></>,
                desc: 'Проверим срок и реквизиты документа, сведения о должнике и выберем между приставами, банком и специальным порядком исполнения.'
              },
              {
                tag: 'Бездействие пристава',
                title: <><span style={{ display: 'block' }}>Пристав возбудил дело,</span><span style={{ display: 'block' }}>но денег нет</span></>,
                desc: 'Оценим материалы дела, подготовим конкретные ходатайства о запросах, аресте, розыске имущества и других допустимых мерах.'
              },
              {
                tag: 'Розыск активов',
                title: <><span style={{ display: 'block' }}>Должник скрывает</span><span style={{ display: 'block' }}>доходы или имущество</span></>,
                desc: 'Соберём доступные сведения, проверим сделки и активы и определим, какие действия вправе совершить пристав или взыскатель.'
              },
              {
                tag: 'Повторная подача',
                title: <><span style={{ display: 'block' }}>Исполнительный лист</span><span style={{ display: 'block' }}>вернули без взыскания</span></>,
                desc: 'Проверим основание окончания, срок повторного предъявления и целесообразность новой подачи с подготовленным планом действий.'
              },
              {
                tag: 'Периодические выплаты',
                title: <><span style={{ display: 'block' }}>Взыскание алиментов</span><span style={{ display: 'block' }}>и периодических выплат</span></>,
                desc: 'Выстроим исполнение с учётом текущих платежей, задолженности, места работы и специальных мер ответственности.'
              },
              {
                tag: 'Казначейский порядок',
                title: <><span style={{ display: 'block' }}>Должник — госорган</span><span style={{ display: 'block' }}>или бюджетная организация</span></>,
                desc: 'Определим, применяется ли казначейский порядок, и подготовим комплект для надлежащего финансового органа.'
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
                <span style={{ display: 'block' }}>Не знаете, с чего начать взыскание?</span>
              </h4>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                <span style={{ display: 'block' }}>Пришлите исполнительный документ или решение суда —</span>
                <span style={{ display: 'block' }}>юрист проверит сроки и предложит практический маршрут действий.</span>
              </p>
            </div>
            <a href="#form" className="btn btn-primary" style={{ whiteSpace: 'nowrap', padding: '12px 24px', fontSize: '14px' }} data-analytics="service_exec_list_hero_cta">
              Разобрать исполнительный документ
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: ОБЪЕДИНЕННЫЙ БЛОК: СЛУЖБА ПРИСТАВОВ ИЛИ ПРЕДЪЯВЛЕНИЕ НАПРЯМУЮ В БАНК? ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Служба приставов или</span> <br />
              <span style={{ display: 'inline-block' }}>предъявление напрямую в&nbsp;банк?</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Выбираем маршрут, который повышает шанс реально получить деньги,</span> <br />
              <span style={{ display: 'inline-block' }}>а&nbsp;не&nbsp;просто передать исполнительный лист в&nbsp;канцелярию.</span>
            </p>
          </div>

          {/* Темно-синяя карточка-навигатор: 3 этапа стратегии взыскания */}
          <div style={{
            background: 'linear-gradient(135deg, #10273B 0%, #17375E 50%, #0D1E2D 100%)',
            border: '1px solid rgba(193, 160, 102, 0.4)',
            borderTop: '3px solid var(--color-gold)',
            boxShadow: '0 8px 30px rgba(16, 39, 59, 0.18)',
            padding: '36px 32px',
            marginBottom: '32px',
            position: 'relative'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '24px', position: 'relative', zIndex: 1 }}>
              <div>
                <h3 style={{ fontSize: 'clamp(20px, 2.5vw, 24px)', fontFamily: 'var(--font-serif)', color: '#FFFFFF', margin: 0, lineHeight: 1.25 }}>
                  3 этапа стратегии взыскания
                </h3>
              </div>
              <div style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.75)', maxWidth: '440px', lineHeight: 1.5 }}>
                <span style={{ display: 'block' }}>Позволяет безошибочно определить порядок действий:</span>
                <span style={{ display: 'block' }}>предъявлять в банк, приставам или работодателю.</span>
              </div>
            </div>

            <div className="grid grid-3" style={{ gap: '16px', position: 'relative', zIndex: 1 }}>
              {/* Шаг 1 */}
              <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '22px 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <h4 style={{ fontSize: '16.5px', color: '#FFFFFF', margin: 0, fontWeight: 600, lineHeight: 1.35, display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', flexShrink: 0 }}>01</span>
                  <span>
                    <span style={{ display: 'block' }}>Проверяем документ</span>
                    <span style={{ display: 'block' }}>и срок предъявления</span>
                  </span>
                </h4>
                <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5, margin: 0 }}>
                  Устанавливаем вид документа, дату вступления акта в силу, предыдущие предъявления, перерывы срока и остаток долга.
                </p>
              </div>

              {/* Шаг 2 */}
              <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '22px 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <h4 style={{ fontSize: '16.5px', color: '#FFFFFF', margin: 0, fontWeight: 600, lineHeight: 1.35, display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', flexShrink: 0 }}>02</span>
                  <span>
                    <span style={{ display: 'block' }}>Ищем наиболее</span>
                    <span style={{ display: 'block' }}>ликвидный источник</span>
                  </span>
                </h4>
                <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5, margin: 0 }}>
                  Проверяем известные банки, официальный доход, транспорт, недвижимость и доли. Маршрут выбирается по вероятности выплат.
                </p>
              </div>

              {/* Шаг 3 */}
              <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '22px 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <h4 style={{ fontSize: '16.5px', color: '#FFFFFF', margin: 0, fontWeight: 600, lineHeight: 1.35, display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', flexShrink: 0 }}>03</span>
                  <span>
                    <span style={{ display: 'block' }}>Фиксируем действия</span>
                    <span style={{ display: 'block' }}>и контролируем результат</span>
                  </span>
                </h4>
                <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5, margin: 0 }}>
                  Подаём адресные ходатайства, контролируем запросы и перечисления. При бездействии используем жалобы и суд.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-2" style={{ gap: '28px', marginBottom: '32px' }}>
            {/* Карточка 1: В службу судебных приставов */}
            <div style={{
              background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-primary)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingBottom: '12px', borderBottom: '1px solid rgba(23, 50, 77, 0.1)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                </svg>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0 }}>
                  В службу судебных приставов (ФССП)
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Подходит, когда местонахождение денег неизвестно, требуется розыск активов, арест счетов, транспорта, недвижимости или запрет на выезд.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Комплексный розыск имущества должника</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Инициируем запросы в банки, ГИБДД, Росреестр, ФНС, СФР и кредитные организации.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Арест счетов, имущества и запрет на выезд</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Ходатайствуем о наложении ареста на транспорт, недвижимость и ограничении выезда за границу.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Обращение взыскания на доходы и зарплату</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Направляем постановления по месту работы и контролируем ежемесячные удержания.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Обжалование бездействия судебного пристава</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Подаём жалобы старшему приставу, в УФССП или суд при волоките и затягивании дела.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Карточка 2: Напрямую в банк или работодателю */}
            <div style={{
              background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-gold)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingBottom: '12px', borderBottom: '1px solid rgba(23, 50, 77, 0.1)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0 }}>
                  Непосредственно в банк или работодателю
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Применяется, когда известен банк с деньгами на счёте должника либо место его официальной работы (по ст. 8 и 9 Закона № 229-ФЗ).
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Запрос сведений о счетах должника в ФНС</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Используем право взыскателя по ст. 69 № 229-ФЗ на получение данных о банках должника.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Прямое предъявление листа в банк должника</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Готовим заявление по ст. 8 Закона № 229-ФЗ для списания средств в 3-дневный срок.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Исполнение через работодателя должника</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Предъявляем документ по ст. 9 Закона № 229-ФЗ для периодических выплат и сумм до 100 000 ₽.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Казначейский порядок для госорганов</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Оформляем исполнение через органы Федерального казначейства при должнике-бюджетополучателе.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Важно: полупрозрачная карточка */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.65)',
            backdropFilter: 'blur(6px)',
            padding: '22px 28px',
            border: '1px solid rgba(23, 50, 77, 0.08)',
            borderLeft: '4px solid var(--color-gold)',
            fontSize: '14px',
            color: 'var(--color-deep-blue)',
            lineHeight: 1.6,
            marginBottom: '32px'
          }}>
            <strong style={{ color: 'var(--color-primary)' }}>Важно:</strong> Общий трёхлетний срок предъявления (ст. 21 № 229-ФЗ) исчисляется индивидуально: для периодических платежей, восстановленных сроков и после возврата листа действуют специальные правила. Одновременно предъявлять один оригинал документа в разные места закон запрещает.
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#form" className="btn btn-primary" style={{ display: 'inline-block', padding: '14px 32px' }}>
              Оценить перспективу взыскания
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: ЧТО СДЕЛАЕТ ЮРИСТ «ДЕ-ЮРЕ» ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Что сделает юрист «Де-Юре»</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Комплексная работа по фактическому взысканию денег — от проверки документа</span> <br />
              <span style={{ display: 'inline-block' }}>до контроля перечисления всей суммы долга.</span>
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px' }}>
            {[
              {
                num: '01',
                title: <><span style={{ display: 'block' }}>Проверка документа</span><span style={{ display: 'block' }}>и срока предъявления</span></>,
                desc: 'Проверит исполнительный документ, срок предъявления и историю исполнения.'
              },
              {
                num: '02',
                title: <><span style={{ display: 'block' }}>Анализ сведений</span><span style={{ display: 'block' }}>о должнике и доходах</span></>,
                desc: 'Проанализирует сведения о должнике, его доходах, счетах и имуществе.'
              },
              {
                num: '03',
                title: <><span style={{ display: 'block' }}>Выбор адресата</span><span style={{ display: 'block' }}>и подача заявления</span></>,
                desc: 'Выберет наиболее результативный канал исполнения и подготовит комплект документов.'
              },
              {
                num: '04',
                title: <><span style={{ display: 'block' }}>Запрос счетов</span><span style={{ display: 'block' }}>через налоговые органы</span></>,
                desc: 'Запросит доступные взыскателю по закону сведения о действующих счетах должника.'
              },
              {
                num: '05',
                title: <><span style={{ display: 'block' }}>Подготовка ходатайств</span><span style={{ display: 'block' }}>об аресте и розыске</span></>,
                desc: 'Подготовит ходатайства о конкретных мерах принудительного исполнения.'
              },
              {
                num: '06',
                title: <><span style={{ display: 'block' }}>Ознакомление с делом</span><span style={{ display: 'block' }}>и аудит работы ФССП</span></>,
                desc: 'Ознакомится с материалами производства и проверит полноту совершенных действий.'
              },
              {
                num: '07',
                title: <><span style={{ display: 'block' }}>Обжалование бездействия</span><span style={{ display: 'block' }}>в УФССП или суде</span></>,
                desc: 'Подаст жалобу на незаконное постановление или волокиту пристава.'
              },
              {
                num: '08',
                title: <><span style={{ display: 'block' }}>Контроль зачислений</span><span style={{ display: 'block' }}>денежных средств</span></>,
                desc: 'Проконтролирует фактическое поступление денег на счёт взыскателя.'
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
            <Link href="#form" style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }} data-analytics="service_exec_list_hero_cta">
              <div className="hover-lift" style={{
                background: 'linear-gradient(145deg, #0B1C2A 0%, #17375E 100%)',
                padding: '38px 24px 26px 24px',
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
                  <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: '#FFFFFF', margin: '8px 0 10px 0', lineHeight: 1.3 }}>
                    <span style={{ display: 'block' }}>Получить план</span>
                    <span style={{ display: 'block' }}>взыскания</span>
                  </h3>
                  <p style={{ fontSize: '14.5px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.5, margin: 0 }}>
                    Опишите ситуацию — юрист проверит должника и&nbsp;составит план.
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-gold)', fontSize: '14px', fontWeight: 600, marginTop: '12px' }}>
                  <span>Получить</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 5: ВЕДУЩИЙ ЮРИСТ ПО УСЛУГЕ ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name="Марина Валерьевна Смольянинова"
        position={<>Ведущий юрист ЮК «Де-Юре»,<br />куратор направления «Исполнительное производство»</>}
        imageUrl="/images/smolyaninova.jpg"
        imagePosition="center 25%"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Марина Валерьевна более 13 лет работала в Федеральной службе судебных приставов, в том числе на руководящих должностях. Этот опыт помогает оценивать не только формальные сроки, но и то, какие конкретные действия действительно могут привести к обнаружению активов и реальному исполнению требования.
          </span>,
          <ul key="2" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>Более 13 лет работы в ФССП, включая руководящие должности</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>Специализация — исполнительное производство и споры с судебными приставами</span>
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

      {/* ═══ БЛОК 6: ПРИМЕРЫ ИЗ ПРАКТИКИ ═══ */}
      <CasesBlock
        title="Примеры из практики"
        showAllLink="/praktika/"
        showAllText="Смотреть все дела"
        showDemoWarning={true}
        cases={cases}
      />

      {/* ═══ БЛОК 7: КАК ПРОХОДИТ РАБОТА ═══ */}
      <ProcessBlock
        title="Как проходит взыскание по исполнительному листу"
        subtitle="Прозрачный пошаговый процесс от первичного аудита документа до фактического зачисления средств."
        alignTitle="center"
        steps={[
          {
            num: '01',
            title: 'Проверяем документы',
            desc: 'Анализируем исполнительный документ, судебный акт, срок, предыдущие предъявления и остаток задолженности.'
          },
          {
            num: '02',
            title: 'Оцениваем должника',
            desc: 'Собираем доступные сведения о счетах, доходах, имуществе, месте нахождения и действующих производствах.'
          },
          {
            num: '03',
            title: 'Выбираем канал исполнения',
            desc: 'Определяем, куда выгоднее предъявить документ (банк, ФССП, работодатель) и какие меры запросить.'
          },
          {
            num: '04',
            title: 'Сопровождаем взыскание',
            desc: 'Подаём документы, ходатайства и жалобы, взаимодействуем с приставом, банком или другим адресатом.'
          },
          {
            num: '05',
            title: 'Контролируем поступления',
            desc: 'Сверяем перечисления и остаток долга, при необходимости корректируем маршрут до окончания работы.'
          }
        ]}
        ctaTitle="Готовы обсудить вашу ситуацию"
        ctaSubtitle="Опишите исполнительный лист — юрист проверит перспективы и подскажет план действий."
        ctaButtonText="Обсудить ситуацию"
        ctaButtonHref="#form"
        footerNote="Проверку исполнительного листа, поиск открытых счетов должника и подготовку обращений можно начать дистанционно. Личное участие зависит от выбранного канала взыскания и согласованного объёма представительства."
      />

      {/* ═══ БЛОК 8: СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость юридической помощи"
        subtitle="Стоимость зависит от суммы и вида требования, истории производства, объёма поиска активов и необходимости обжаловать бездействие."
        tiers={[
          {
            title: 'Предъявление в банк',
            subtitle: 'Взыскание через кредитную организацию',
            price: 'от 10 000 ₽',
            popular: true,
            badgeText: 'Популярно',
            features: [
              { name: 'Анализ исполнительного листа и срока предъявления', value: '✓' },
              { name: 'Запрос сведений о счетах должника в ФНС (ст. 69)', value: '✓' },
              { name: 'Подготовка мотивированного заявления в банк (ст. 8)', value: '✓' },
              { name: 'Контроль исполнения и списания средств со счёта', value: '✓' }
            ],
            buttonText: 'Заказать услугу',
            buttonHref: '#form'
          },
          {
            title: 'Сопровождение в ФССП',
            subtitle: 'Работа с судебными приставами',
            price: 'от 15 000 ₽',
            features: [
              { name: 'Подготовка заявления о возбуждении ИП (ст. 30)', value: '✓' },
              { name: 'Ходатайства об аресте счетов, авто и недвижимости', value: '✓' },
              { name: 'Установление запрета на выезд должника за границу', value: '✓' },
              { name: 'Жалоба на бездействие старшему приставу / УФССП', value: '✓' }
            ],
            buttonText: 'Обсудить ситуацию',
            buttonHref: '#form'
          },
          {
            title: 'Комплексное взыскание',
            subtitle: 'Полное сопровождение до результата',
            price: 'от 25 000 ₽',
            features: [
              { name: 'Розыск активов и скрытого имущества должника', value: '✓' },
              { name: 'Судебное обжалование бездействия по КАС РФ', value: '✓' },
              { name: 'Обращение взыскания на имущество у третьих лиц', value: '✓' },
              { name: 'Сопровождение до фактического зачисления денег', value: '✓' }
            ],
            buttonText: 'Комплексная защита',
            buttonHref: '#form'
          }
        ]}
        disclaimer="Стоимость определяется после уточнения задачи и изучения имеющихся документов. Состав услуг, цена и порядок оплаты фиксируются в договоре до начала работы. Оплата вознаграждения исполнителя не зависит от исхода дела и не включает государственные пошлины и сопутствующие расходы."
      />

      {/* ═══ БЛОК 9: FAQ ═══ */}
      <FAQBlock
        superTitle="Частые вопросы"
        title="Ответы на частые вопросы"
        subtitle="Разъяснения юриста по взысканию денежных средств по исполнительному листу"
        ctaText="Задать свой вопрос"
        ctaLink="#form"
        faqs={faqs}
      />

      {/* ═══ БЛОК 10: ФИНАЛЬНАЯ ФОРМА ═══ */}
            {/* ═══ БЛОК: СВЯЗАННЫЕ УСЛУГИ ═══ */}
      <section className="section bg-cream" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '700px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Связанные услуги
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              <span style={{ display: 'inline-block' }}>Смежные направления правовой помощи</span> <br /><span style={{ display: 'inline-block' }}>для должников и взыскателей</span> <br /><span style={{ display: 'inline-block' }}>в исполнительном производстве.</span>
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
          
          <div className="grid grid-2" style={{ gap: '24px' }}>
            <Link href="/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/obzhalovanie-dejstvij-sudebnogo-pristava/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <div 
                className="card related-service-card" 
                style={{ 
                  height: '100%', 
                  minHeight: '140px',
                  padding: '32px', 
                  background: 'var(--color-white)', 
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  borderRadius: '0',
                  display: 'flex', 
                  flexDirection: 'column', 
                  transition: 'all 0.3s',
                  position: 'relative'
                }}
              >
                <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                  <span style={{ display: 'inline-block' }}>Обжалование действий</span> <br /><span style={{ display: 'inline-block' }}>приставов</span>
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Жалобы на незаконные постановления, бездействие судебного пристава и нарушение процессуальных прав.
                </p>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '15px', fontWeight: 600, transition: 'transform 0.3s' }}>
                  Подробнее 
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </Link>
            <Link href="/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/snyatie-aresta-so-scheta/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <div 
                className="card related-service-card" 
                style={{ 
                  height: '100%', 
                  minHeight: '140px',
                  padding: '32px', 
                  background: 'var(--color-white)', 
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  borderRadius: '0',
                  display: 'flex', 
                  flexDirection: 'column', 
                  transition: 'all 0.3s',
                  position: 'relative'
                }}
              >
                <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                  <span style={{ display: 'inline-block' }}>Снятие ареста</span> <br /><span style={{ display: 'inline-block' }}>со счёта</span>
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Проверка основания ареста, снятие блокировки банковской карты и защита прожиточного минимума.
                </p>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '15px', fontWeight: 600, transition: 'transform 0.3s' }}>
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
                  minHeight: '140px',
                  padding: '32px', 
                  background: 'var(--color-white)', 
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  borderRadius: '0',
                  display: 'flex', 
                  flexDirection: 'column', 
                  transition: 'all 0.3s',
                  position: 'relative'
                }}
              >
                <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                  <span style={{ display: 'inline-block' }}>Снятие ареста</span> <br /><span style={{ display: 'inline-block' }}>с автомобиля</span>
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Снятие запрета регистрационных действий и ареста транспортного средства, наложенных приставом.
                </p>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '15px', fontWeight: 600, transition: 'transform 0.3s' }}>
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
                  minHeight: '140px',
                  padding: '32px', 
                  background: 'var(--color-white)', 
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  borderRadius: '0',
                  display: 'flex', 
                  flexDirection: 'column', 
                  transition: 'all 0.3s',
                  position: 'relative'
                }}
              >
                <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                  <span style={{ display: 'inline-block' }}>Возврат незаконно</span> <br /><span style={{ display: 'inline-block' }}>списанных денег</span>
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Возврат незаконно списанных социальных пособий, пенсий и излишне удержанных сумм через ФССП или суд.
                </p>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '15px', fontWeight: 600, transition: 'transform 0.3s' }}>
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
                <div style={{ width: '40px', height: '2px', background: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>
                  Связаться с нами
                </span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                Есть исполнительный лист, но деньги не поступают?
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Пришлите исполнительный документ, судебный акт и сведения о предыдущих попытках взыскания. Юрист проверит срок, возможные источники исполнения и предложит практический план действий.
              </p>

              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация юриста</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Позвоните прямо сейчас: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="service_exec_list_phone_click">+7 (910) 350-31-11</a>
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
                  <input type="hidden" name="source_page" value="/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/vzyskanie-po-ispolnitelnomu-listu/" />
                  <input type="hidden" name="direction" value="ispolnitelnoe_proizvodstvo_fizlica" />
                  <input type="hidden" name="service" value="vzyskanie_po_ispolnitelnomu_listu" />
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
                    <textarea id="message" name="message" rows={3} placeholder="Кратко укажите сумму долга, суд, дату выдачи листа и есть ли данные об активах..." style={{ padding: '14px 16px', border: '1px solid rgba(23, 50, 77, 0.2)', borderRadius: '0', fontSize: '15px', outline: 'none', fontFamily: 'inherit', resize: 'vertical', background: 'var(--color-white)', color: 'var(--color-deep-blue)' }} />
                  </div>

                  <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer', marginTop: '4px' }}>
                    <input type="checkbox" name="agreement" required style={{ marginTop: '3px', accentColor: 'var(--color-gold)', flexShrink: 0 }} />
                    <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      <Link href="/consent/" target="_blank" style={{ color: 'var(--color-deep-blue)', textDecoration: 'underline' }}>Я даю согласие на обработку персональных данных</Link> и подтверждаю, что ознакомлен с <Link href="/privacy/" target="_blank" style={{ color: 'var(--color-deep-blue)', textDecoration: 'underline' }}>Политикой в отношении обработки персональных данных</Link>.
                    </span>
                  </label>

                  <button type="submit" style={{ width: '100%', padding: '16px', fontSize: '16px', marginTop: '8px', background: '#10273B', color: '#FFFFFF', border: '1px solid #9B7E55', borderRadius: '0', whiteSpace: 'nowrap', fontWeight: 600, cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: '0 4px 12px rgba(16, 39, 59, 0.15)' }}>
                    Оценить перспективу взыскания
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

      {/* ═══ БЛОК 11: ДРУГИЕ НАПРАВЛЕНИЯ ПО ИСПОЛНИТЕЛЬНОМУ ПРОИЗВОДСТВУ ═══ */}
            

      <Footer />
    </main>
  );
}
