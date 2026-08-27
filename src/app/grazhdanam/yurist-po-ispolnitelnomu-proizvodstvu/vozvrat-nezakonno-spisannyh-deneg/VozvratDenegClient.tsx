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

export default function VozvratDenegClient() {
  const cases: CaseData[] = [
    {
      category: 'Защищённый доход',
      title: 'Вернули списанную социальную выплату',
      problem: 'Со счёта должника списали целевую социальную выплату. Из банковской выписки было видно назначение поступления, однако деньги уже ушли в рамках исполнительного производства.',
      action: 'Получили справку о виде и назначении выплаты, сопоставили дату зачисления и списания, подготовили заявление приставу с подтверждающими документами и проконтролировали рассмотрение требования.',
      result: 'Происхождение средств подтвердили, взыскание этой суммы признали ошибочным, деньги вернули на счёт клиента; сведения о защищённом доходе учли для последующих операций.'
    },
    {
      category: 'Повторное взыскание',
      title: 'Добились возврата после повторного погашения одного долга',
      problem: 'Гражданин оплатил задолженность, но до отражения платежа средства дополнительно списали со счёта по тому же требованию. Общая сумма превысила фактический остаток долга.',
      action: 'Сверили исполнительный документ, постановления, платёжные документы и банковскую выписку, рассчитали переплату и направили приставу заявление о возврате излишне полученной суммы.',
      result: 'Погашение задолженности учли, излишне взысканную сумму вернули клиенту, размер долга в производстве скорректировали.'
    },
    {
      category: 'Отмена приказа',
      title: 'Вернули деньги после отмены исполненного судебного приказа',
      problem: 'Судебный приказ отменили уже после того, как деньги перечислили взыскателю. Обращение к приставу не привело к возврату, поскольку средств на депозитном счёте ФССП не осталось.',
      action: 'Подтвердили сумму фактического взыскания, подготовили заявление о повороте исполнения судебного приказа и документы для суда, затем сопровождали получение и предъявление исполнительного листа.',
      result: 'Суд допустил поворот исполнения; полученный исполнительный документ предъявили к взысканию, ранее удержанные деньги вернули клиенту.'
    }
  ];

  const faqs = [
    {
      q: 'Можно ли вернуть деньги, которые приставы уже списали?',
      a: 'Да, если подтверждено незаконное, ошибочное, повторное или избыточное взыскание либо отменено исполненное основание. Способ зависит от того, где находятся средства и кому они перечислены.'
    },
    {
      q: 'Какие выплаты нельзя списывать?',
      a: 'Перечень установлен статьёй 101 Закона № 229-ФЗ и включает ряд целевых компенсаций, пособий и иных выплат. Для некоторых требований действуют исключения, поэтому нужно проверить конкретный вид поступления и долг.'
    },
    {
      q: 'Что делать, если списали пособие или компенсацию?',
      a: 'Получите банковскую выписку и справку плательщика о виде и назначении выплаты. После этого можно определить, кто допустил ошибку и куда направлять требование о возврате.'
    },
    {
      q: 'Вернут ли деньги, если их уже перечислили взыскателю?',
      a: 'Это возможно, но заявление приставу не всегда приводит к возврату. Может потребоваться поворот исполнения отменённого судебного акта или отдельное требование к получателю средств.'
    },
    {
      q: 'Что делать при двойном списании?',
      a: 'Нужно сопоставить оба платежа, остаток долга, несколько исполнительных производств и дату учёта оплаты. Подтверждённая переплата подлежит возврату в установленном порядке.'
    },
    {
      q: 'Можно ли вернуть деньги после отмены судебного приказа?',
      a: 'Вопрос обычно решается через поворот исполнения. Возможность и порядок зависят от стадии спора и наличия нового искового производства, поэтому документы нужно оценивать индивидуально.'
    },
    {
      q: 'Кто отвечает за ошибку — банк или пристав?',
      a: 'Это зависит от постановления, идентификации должника, кода вида дохода, расчёта доступной к взысканию суммы и движения средств. До предъявления требования нужно установить конкретное нарушение каждого участника.'
    },
    {
      q: 'Сколько времени занимает возврат?',
      a: 'Единого срока нет. Он зависит от того, остались ли деньги на депозитном счёте ФССП, требуется ли получить документы, обжаловать отказ или обращаться в суд.'
    },
    {
      q: 'Какие документы нужны для проверки?',
      a: 'Обычно нужны банковская выписка, сведения об исполнительном производстве, постановления, документы об оплате долга и справка об источнике выплаты. Точный перечень определим после изучения ситуации.'
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
        <div className="doc-wrapper-float-2"><div className="doc-sheet doc-sheet-2"><div style={{ padding: '30px 25px', height: '100%', display: 'flex', flexDirection: 'column' }}><div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '30px' }}><div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-end' }}><div style={{ width: '100px', height: '4px', background: 'rgba(23,50,77,0.2)' }}></div><div style={{ width: '60px', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div><div style={{ width: '80px', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div></div></div><div style={{ width: '160px', height: '8px', background: 'var(--color-primary)', margin: '0 auto 20px auto' }}></div><div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}><div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}><div style={{ width: '40%', height: '4px', background: 'rgba(23,50,77,0.2)' }}></div><div style={{ width: '100%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div><div style={{ width: '90%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div></div><div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}><div style={{ width: '50%', height: '4px', background: 'rgba(23,50,77,0.2)' }}></div><div style={{ width: '100%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div><div style={{ width: '85%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div></div></div><div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '10px', borderTop: '1px dashed rgba(23,50,77,0.1)' }}><div><div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.5)' }}>Заявитель:</div><div style={{ width: '80px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '10px' }}></div></div><div><div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.5)' }}>Юрист:</div><div style={{ width: '80px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '10px' }}></div></div></div></div></div></div>
        
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
            <span style={{ color: 'var(--color-text-main)' }}>Возврат незаконно списанных денег</span>
          </>
        }
        superTitle="Споры с судебными приставами в Липецке"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Возврат незаконно списанных
            </span>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              приставами денежных средств
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
                Установим, на каком основании и куда перечислены деньги, соберём подтверждения
              </span>
              <span className="hero-sub-span-desktop" style={{ display: 'block' }}>
                незаконного списания и выберем способ возврата — через банк, ФССП или суд.
              </span>
            </span>
          </>
        }
        primaryCtaText="Проверить списание"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_hero_form"
        primaryCtaSubtext={
          <>Если средства уже списаны со счёта, позвоните: <a href="tel:+79103503111" data-analytics="click_phone">+7 (910) 350-31-11</a></>
        }
        trustItems={[
          { text: 'Проверяем основание списания' },
          { text: 'Возврат социальных и защищённых выплат' },
          { text: 'Устранение повторных и избыточных удержаний' },
          { text: 'Куратор — 13 лет опыта в ФССП' },
        ]}
        imageUrl="/images/smolyaninova.jpg"
        imageName="Марина Валерьевна Смольянинова"
        imageSubtitle="Ведущий юрист ЮК «Де-Юре», куратор направления «Исполнительное производство» (13 лет опыта в ФССП)"
        imageObjectPosition="center 25%"
      />

      {/* ═══ БЛОК 2: В КАКИХ СИТУАЦИЯХ ПОМОГАЕМ ВЕРНУТЬ ДЕНЬГИ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span style={{ display: 'inline-block' }}>В каких ситуациях</span> <br />
              <span style={{ display: 'inline-block' }}>помогаем вернуть деньги</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Одного факта списания недостаточно. Для возврата устанавливаем, какое правило</span> <br />
              <span style={{ display: 'inline-block' }}>было нарушено, кто допустил ошибку и где находятся средства.</span>
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '40px' }}>
            {[
              {
                tag: 'Защищённый доход',
                title: <><span style={{ display: 'block' }}>Списали защищённую</span><span style={{ display: 'block' }}>выплату</span></>,
                desc: 'Проверим пособие, компенсацию, алименты, выплату в возмещение вреда или другое целевое поступление с учётом статьи 101 Закона № 229-ФЗ и предусмотренных исключений.'
              },
              {
                tag: 'Превышение лимита',
                title: <><span style={{ display: 'block' }}>Удержали больше</span><span style={{ display: 'block' }}>допустимого размера</span></>,
                desc: 'Сопоставим вид дохода, размер удержания, требования исполнительных документов и ограничения статьи 99 Закона № 229-ФЗ.'
              },
              {
                tag: 'Двойное списание',
                title: <><span style={{ display: 'block' }}>Долг взыскали</span><span style={{ display: 'block' }}>повторно</span></>,
                desc: 'Проверим платежи, несколько производств, взыскание через банк и ФССП, а также дату отражения погашения задолженности.'
              },
              {
                tag: 'Избыточное списание',
                title: <><span style={{ display: 'block' }}>Списали сумму</span><span style={{ display: 'block' }}>сверх размера долга</span></>,
                desc: 'Установим актуальный остаток долга, исполнительский сбор, расходы и движение денег; потребуем возврата подтверждённого излишка.'
              },
              {
                tag: 'Чужой долг',
                title: <><span style={{ display: 'block' }}>Деньги списали</span><span style={{ display: 'block' }}>за чужой долг</span></>,
                desc: 'Поможем подтвердить ошибочную идентификацию гражданина, направить документы в ФССП и добиться отмены мер и возврата средств доступным способом.'
              },
              {
                tag: 'Отмена приказа / акта',
                title: <><span style={{ display: 'block' }}>Судебный акт отменили</span><span style={{ display: 'block' }}>после взыскания</span></>,
                desc: 'Оценим, возможен ли поворот исполнения, какой суд рассматривает заявление и какие документы подтверждают фактически взысканную сумму.'
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
                <span style={{ display: 'block' }}>Не знаете, почему списали деньги?</span>
              </h4>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                <span style={{ display: 'block' }}>Пришлите номер исполнительного производства и банковскую выписку —</span>
                <span style={{ display: 'block' }}>юрист проверит основания и подскажет порядок действий для возврата.</span>
              </p>
            </div>
            <a href="#form" className="btn btn-primary" style={{ whiteSpace: 'nowrap', padding: '12px 24px', fontSize: '14px' }} data-analytics="click_situation_form">
              Разобраться со списанием
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: ОБЪЕДИНЕННЫЙ БЛОК: ЗАЯВЛЕНИЕ ПРИСТАВУ ИЛИ ОБРАЩЕНИЕ В СУД? ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Заявление приставу</span> <br />
              <span style={{ display: 'inline-block' }}>или обращение в суд?</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Одинаковое внешне списание может требовать разных действий. Сначала восстанавливаем</span> <br />
              <span style={{ display: 'inline-block' }}>движение денег и только затем выбираем процессуальное требование.</span>
            </p>
          </div>

          {/* Темно-синяя карточка-навигатор: 3 действия сразу после списания */}
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
                  3 действия сразу после списания
                </h3>
              </div>
              <div style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.75)', maxWidth: '440px', lineHeight: 1.5 }}>
                <span style={{ display: 'block' }}>Позволяет безошибочно определить порядок действий:</span>
                <span style={{ display: 'block' }}>подавать заявление приставу или готовить иск в суд.</span>
              </div>
            </div>

            <div className="grid grid-3" style={{ gap: '16px', position: 'relative', zIndex: 1 }}>
              {/* Шаг 1 */}
              <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '22px 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <h4 style={{ fontSize: '16.5px', color: '#FFFFFF', margin: 0, fontWeight: 600, lineHeight: 1.35, display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', flexShrink: 0 }}>01</span>
                  <span>
                    <span style={{ display: 'block' }}>Сохраните сведения</span>
                    <span style={{ display: 'block' }}>об операции</span>
                  </span>
                </h4>
                <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5, margin: 0 }}>
                  Получите банковскую выписку с датой, суммой, назначением и реквизитами взыскания. Сохраните сообщения банка и данные исполнительного производства.
                </p>
              </div>

              {/* Шаг 2 */}
              <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '22px 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <h4 style={{ fontSize: '16.5px', color: '#FFFFFF', margin: 0, fontWeight: 600, lineHeight: 1.35, display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', flexShrink: 0 }}>02</span>
                  <span>
                    <span style={{ display: 'block' }}>Подтвердите источник</span>
                    <span style={{ display: 'block' }}>и назначение средств</span>
                  </span>
                </h4>
                <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5, margin: 0 }}>
                  Если списана защищённая выплата, запросите справку у плательщика и документ о зачислении именно этой суммы на счёт.
                </p>
              </div>

              {/* Шаг 3 */}
              <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '22px 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <h4 style={{ fontSize: '16.5px', color: '#FFFFFF', margin: 0, fontWeight: 600, lineHeight: 1.35, display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', flexShrink: 0 }}>03</span>
                  <span>
                    <span style={{ display: 'block' }}>Не откладывайте проверку</span>
                    <span style={{ display: 'block' }}>основания списания</span>
                  </span>
                </h4>
                <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5, margin: 0 }}>
                  Установите, существует ли долг, кому принадлежит производство и успели ли перечислить деньги взыскателю. От этого зависит адресат заявления.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-2" style={{ gap: '28px', marginBottom: '32px' }}>
            {/* Карточка 1: Внесудебный порядок (ФССП и банк) */}
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
                  Внесудебный порядок (ФССП и банк)
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Применяется, когда средства находятся в банке или на депозитном счёте подразделения ФССП, а основание для возврата является подтверждённым.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Проверка движения денежных средств</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Устанавливаем, где находятся списанные суммы — в банке, на депозите ФССП или у взыскателя.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Подтверждение защищённого дохода (ст. 101)</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Формируем комплект справок и выписок с кодами выплат для отмены неправомерного удержания.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Заявление приставу о возврате излишка</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Требуем возврата переплаты при повторном или избыточном списании по ст. 110 № 229-ФЗ.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Контроль перечисления средств на счёт</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Отслеживаем вынесение постановления о возврате и фактическое зачисление денег клиенту.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Карточка 2: Судебный порядок и поворот исполнения */}
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
                  Судебный порядок и поворот исполнения
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Необходим, если деньги уже у взыскателя, пристав отказал в возврате, отменён судебный приказ либо допущена ошибка идентификации.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Поворот исполнения (ст. 443 ГПК РФ)</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Готовим заявление в суд о возврате взысканных средств после отмены судебного приказа или решения.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Жалоба старшему приставу или в УФССП</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Оспариваем незаконные действия, отказ или бездействие должностных лиц службы приставов.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Административный иск по КАС РФ</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Признаём незаконными постановления пристава и обязываем устранить допущенные нарушения.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Защита при ошибке двойника / чужом долге</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Инициируем процедуру исключения сведений и добиваемся возврата ошибочно списанных сумм.</span>
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
            <strong style={{ color: 'var(--color-primary)' }}>Важно:</strong> Статья 101 Федерального закона № 229-ФЗ содержит перечень доходов, на которые не обращается взыскание, но имеет исключения по отдельным видам требований. Если деньги уже перечислены взыскателю, простого заявления приставу недостаточно — требуется поворот исполнения или отдельный судебный порядок защиты.
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#form" className="btn btn-primary" style={{ display: 'inline-block', padding: '14px 32px' }}>
              Оценить основания и риски
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
              <span style={{ display: 'inline-block' }}>Комплексная работа по возврату денежных средств — от анализа выписок</span> <br />
              <span style={{ display: 'inline-block' }}>до фактического зачисления денег на счёт клиента.</span>
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px' }}>
            {[
              {
                num: '01',
                title: <><span style={{ display: 'block' }}>Консультация</span><span style={{ display: 'block' }}>и оценка ситуации</span></>,
                desc: 'Определяем срочность ситуации, основания списания и предварительный правовой маршрут.'
              },
              {
                num: '02',
                title: <><span style={{ display: 'block' }}>Проверка производства</span><span style={{ display: 'block' }}>и судебного акта</span></>,
                desc: 'Изучаем материалы исполнительного производства, основания взыскания и судебные документы.'
              },
              {
                num: '03',
                title: <><span style={{ display: 'block' }}>Анализ выписок</span><span style={{ display: 'block' }}>и назначения платежей</span></>,
                desc: 'Анализируем банковскую выписку, коды выплат, справки плательщика и защищённый статус доходов.'
              },
              {
                num: '04',
                title: <><span style={{ display: 'block' }}>Установление маршрута</span><span style={{ display: 'block' }}>движения денег</span></>,
                desc: 'Определяем текущее местонахождение средств: банк, депозитный счёт ФССП или счёт взыскателя.'
              },
              {
                num: '05',
                title: <><span style={{ display: 'block' }}>Расчёт суммы</span><span style={{ display: 'block' }}>повторного удержания</span></>,
                desc: 'Рассчитываем точный размер переплаты или избыточно удержанной суммы по ст. 99 и 110 № 229-ФЗ.'
              },
              {
                num: '06',
                title: <><span style={{ display: 'block' }}>Заявления в банк</span><span style={{ display: 'block' }}>и подразделение ФССП</span></>,
                desc: 'Готовим мотивированные требования о возврате средств и жалобы в порядке ведомственной подчинённости.'
              },
              {
                num: '07',
                title: <><span style={{ display: 'block' }}>Поворот исполнения</span><span style={{ display: 'block' }}>или административный иск</span></>,
                desc: 'Составляем процессуальные документы для суда по КАС РФ или ст. 443–445 ГПК РФ при судебном порядке.'
              },
              {
                num: '08',
                title: <><span style={{ display: 'block' }}>Контроль возврата</span><span style={{ display: 'block' }}>денежных средств</span></>,
                desc: 'Отслеживаем рассмотрение требований и фактическое поступление денег на счёт доверителя.'
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
                    <span style={{ display: 'block' }}>Получить план</span>
                    <span style={{ display: 'block' }}>действий</span>
                  </h3>
                  <p style={{ fontSize: '14.5px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, margin: 0 }}>
                    Опишите ситуацию со списанием денег — юрист проверит основания каждого удержания и подскажет порядок действий.
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

      {/* ═══ БЛОК 5: ВЕДУЩИЙ ЮРИСТ ПО УСЛУГЕ ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name="Марина Валерьевна Смольянинова"
        position={<>Ведущий юрист ЮК «Де-Юре»,<br />куратор направления «Исполнительное производство»</>}
        imageUrl="/images/smolyaninova.jpg"
        imagePosition="center 25%"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Марина Валерьевна более 13 лет работала в Федеральной службе судебных приставов, в том числе на руководящих должностях. Контролировала исполнительные производства, рассматривала обращения и жалобы, взаимодействовала с судами, банками и государственными органами. Этот опыт помогает быстро восстановить маршрут списания и определить, к кому предъявлять требование о возврате.
          </span>,
          <ul key="2" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>Более 13 лет работы в ФССП, включая руководящие должности</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>Понимание порядка учёта, распределения и возврата взысканных средств</span>
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
        title="Как проходит работа по возврату денег"
        subtitle="Прозрачный пошаговый процесс от анализа выписки до зачисления денег на ваш банковский счёт."
        alignTitle="center"
        steps={[
          {
            num: '01',
            title: 'Проверяем операцию',
            desc: 'Уточняем дату и сумму списания, номер производства, банк, происхождение денег и известное основание взыскания.'
          },
          {
            num: '02',
            title: 'Восстанавливаем движение средств',
            desc: 'Получаем и сопоставляем выписку, постановления, сведения о долге, зачислении на депозит ФССП и перечислении взыскателю.'
          },
          {
            num: '03',
            title: 'Определяем нарушение',
            desc: 'Проверяем защищённый доход, предел удержания, повторность, переплату, ошибочную идентификацию или отмену акта.'
          },
          {
            num: '04',
            title: 'Выбираем адресата',
            desc: 'Определяем, достаточно ли заявления в банк или ФССП либо требуется жалоба, оспаривание или поворот исполнения через суд.'
          },
          {
            num: '05',
            title: 'Подаём документы',
            desc: 'Готовим доказательства и требования, направляем их надлежащему адресату и представляем клиента в согласованном объёме.'
          },
          {
            num: '06',
            title: 'Контролируем возврат',
            desc: 'Проверяем решение по обращению и фактическое поступление денег; при отказе согласуем следующий способ защиты.'
          }
        ]}
        ctaTitle="Готовы обсудить вашу ситуацию"
        ctaSubtitle="Опишите списание средств — юрист проверит основания и подскажет план действий."
        ctaButtonText="Обсудить ситуацию"
        ctaButtonHref="#form"
        footerNote="Проверку выписок, электронных документов и подготовку большинства обращений можно начать дистанционно. Личное участие зависит от способа возврата и согласованного объёма представительства."
      />

      {/* ═══ БЛОК 8: СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость юридической помощи"
        subtitle="Стоимость зависит от причины списания, объёма документов, стадии перечисления денег и необходимости обращения в суд."
        tiers={[
          {
            title: 'Анализ выписки и оснований',
            subtitle: 'Первичная оценка законности списания',
            price: 'от 5 000 ₽',
            features: [
              { name: 'Анализ банковской выписки и кодов выплат', value: '✓' },
              { name: 'Проверка оснований и реквизитов списания', value: '✓' },
              { name: 'Определение статуса защищённого дохода', value: '✓' },
              { name: 'Выбор оптимального способа возврата', value: '✓' }
            ],
            buttonText: 'Получить оценку',
            buttonHref: '#form'
          },
          {
            title: 'Заявление о возврате',
            subtitle: 'Внесудебный возврат через ФССП / банк',
            price: 'от 10 000 ₽',
            popular: true,
            badgeText: 'Популярно',
            features: [
              { name: 'Анализ выписки банка и назначения выплат', value: '✓' },
              { name: 'Подготовка мотивированного заявления в ФССП / банк', value: '✓' },
              { name: 'Формирование доказательств защищённого дохода', value: '✓' },
              { name: 'Контроль вынесения постановления о возврате', value: '✓' }
            ],
            buttonText: 'Заказать услугу',
            buttonHref: '#form'
          },
          {
            title: 'Судебный возврат и поворот',
            subtitle: 'При отказе или отмене приказа',
            price: 'от 20 000 ₽',
            features: [
              { name: 'Жалоба старшему приставу / в УФССП', value: '✓' },
              { name: 'Заявление в суд о повороте исполнения (ст. 443 ГПК РФ)', value: '✓' },
              { name: 'Иск о взыскании неосновательного обогащения', value: '✓' },
              { name: 'Сопровождение до фактического зачисления денег', value: '✓' }
            ],
            buttonText: 'Судебная защита',
            buttonHref: '#form'
          }
        ]}
        disclaimer="Стоимость определяется после уточнения задачи и изучения имеющихся документов. Состав услуг, цена и порядок оплаты фиксируются в договоре до начала работы. Оплата вознаграждения исполнителя не зависит от исхода дела и не включает государственные пошлины и сопутствующие расходы."
      />

      {/* ═══ БЛОК 9: FAQ ═══ */}
      <FAQBlock
        superTitle="Частые вопросы"
        title="Ответы на частые вопросы"
        subtitle="Разъяснения юриста по возврату незаконно списанных денежных средств"
        ctaText="Задать свой вопрос"
        ctaLink="#form"
        faqs={faqs}
      />

      {/* ═══ БЛОК 10: ФИНАЛЬНАЯ ФОРМА ═══ */}
                  {/* ═══ БЛОК: СВЯЗАННЫЕ УСЛУГИ ═══ */}
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
                  Жалобы на незаконные постановления, бездействие и нарушение прав.
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
                  Проверка основания ареста, снятие блокировки банковской карты.
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
                  <span style={{ display: 'inline-block' }}>Снятие ареста</span> <br /><span style={{ display: 'inline-block' }}>с авто</span>
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Снятие запрета регистрационных действий и ареста транспортного средства.
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
            <Link href="/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/vzyskanie-po-ispolnitelnomu-listu/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
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
                  <span style={{ display: 'inline-block' }}>Взыскание по</span> <br /><span style={{ display: 'inline-block' }}>исполнительному листу</span>
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Сопровождение взыскателя, розыск счетов и активов должника через ФССП.
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
                Обсудите списание с Мариной Валерьевной Смольяниновой
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Кратко укажите дату и сумму списания, банк, номер исполнительного производства и происхождение денег, если оно известно. Обращение передадим Марине Валерьевне Смольяниновой. Она уточнит обстоятельства, подскажет, какие документы подготовить, и согласует с вами консультацию.
              </p>

              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация юриста</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Позвоните прямо сейчас: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="service_vozvrat_deneg_phone_click">+7 (910) 350-31-11</a>
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
                  <input type="hidden" name="source_page" value="/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/vozvrat-nezakonno-spisannyh-deneg/" />
                  <input type="hidden" name="direction" value="ispolnitelnoe_proizvodstvo_fizlica" />
                  <input type="hidden" name="service" value="vozvrat_nezakonno_spisannyh_deneg" />
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
                    <textarea id="message" name="message" rows={3} placeholder="Кратко укажите дату и сумму списания, банк, назначение выплаты..." style={{ padding: '14px 16px', border: '1px solid rgba(23, 50, 77, 0.2)', borderRadius: '0', fontSize: '15px', outline: 'none', fontFamily: 'inherit', resize: 'vertical', background: 'var(--color-white)', color: 'var(--color-deep-blue)' }} />
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

      {/* ═══ БЛОК 11: ДРУГИЕ НАПРАВЛЕНИЯ ПО ИСПОЛНИТЕЛЬНОМУ ПРОИЗВОДСТВУ ═══ */}
            

      <Footer />
    </main>
  );
}
