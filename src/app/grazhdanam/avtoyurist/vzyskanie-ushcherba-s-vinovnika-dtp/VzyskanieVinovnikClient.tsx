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

export default function VzyskanieVinovnikClient() {
  const cases: CaseData[] = [
    {
      category: 'Непокрытая разница / Суд',
      title: 'Взыскали непокрытую разницу после ОСАГО',
      problem: 'Страховщик исполнил обязательство по ОСАГО в установленном лимите, однако реальная рыночная стоимость восстановительного ремонта автомобиля клиента была существенно выше.',
      action: 'Проверили надлежащую страховую часть, организовали независимую оценку фактического ущерба без износа, определили надлежащего ответчика и подготовили мотивированное исковое заявление.',
      result: 'Суд взыскал с причинителя вреда подтверждённую непокрытую разницу и все судебные расходы; необоснованная страховая недоплата в расчёт к виновнику не включалась.'
    },
    {
      category: 'Определение ответчика / Ст. 1068 ГК РФ',
      title: 'Ответчиком стал владелец-работодатель',
      problem: 'ДТП совершил наёмный водитель организации при выполнении служебного задания. Клиент первоначально планировал предъявить иск лично водителю, у которого не было средств для погашения.',
      action: 'Проверили законное владение автомобилем, путевые листы и трудовые отношения водителя, скорректировали состав ответчиков по ст. 1068 ГК РФ и сформировали доказательственную базу.',
      result: 'Иск удовлетворён в полном объёме за счёт юридического лица — владельца транспорта; риск предъявления неисполнимого требования к водителю исключён.'
    },
    {
      category: 'Защита ответчика / Экспертиза',
      title: 'Снизили завышенное требование к водителю',
      problem: 'К водителю предъявили иск на крупную сумму с повторно учтёнными доаварийными повреждениями, завышенными ценами на детали и расходами, уже частично компенсированными страховой компанией.',
      action: 'Сопоставили акты осмотра, схему ДТП и материалы страхового дела, доказали частичную компенсацию ущерба страховщиком и поставили корректные вопросы перед судебным экспертом.',
      result: 'Суд исключил двойной счёт и доаварийные дефекты, снизив размер подлежащего взысканию ущерба до объективно обоснованного объёма.'
    }
  ];

  const faqs = [
    {
      q: 'Когда можно взыскать разницу с виновника ДТП?',
      a: 'Когда надлежащего страхового возмещения по ОСАГО недостаточно для полного возмещения фактического вреда либо подтверждённая часть убытков не входит в обязательство страховщика. Сначала проверяется страховая часть.'
    },
    {
      q: 'Можно ли взыскать стоимость ремонта без учёта износа?',
      a: 'Фактический ремонт обычно оценивается по рыночным ценам без страхового износа, но суд проверяет необходимость работ, разумный способ восстановления и отсутствие явно несправедливого улучшения автомобиля.'
    },
    {
      q: 'Обязательно ли сначала спорить со страховой?',
      a: 'Если страховая выплатила меньше надлежащего размера, эту часть нельзя автоматически потребовать с виновника. Нужно определить и урегулировать обязательство страховщика либо правильно разделить требования.'
    },
    {
      q: 'Кому предъявлять иск — водителю или собственнику?',
      a: 'Это зависит от законного владения, цели поездки, трудовых отношений и других обстоятельств. Ответчиком может быть водитель, владелец, работодатель или несколько лиц солидарно.'
    },
    {
      q: 'Нужна ли претензия виновнику перед судом?',
      a: 'Для обычного деликтного требования о возмещении вреда она не всегда обязательна по закону, но позволяет раскрыть расчёт, предложить добровольную выплату и зафиксировать доказательственную позицию.'
    },
    {
      q: 'Что взыскивают при полной гибели автомобиля?',
      a: 'Оцениваются рыночная стоимость автомобиля до ДТП, надлежащее страховое возмещение и стоимость годных остатков. Взыскание не должно превышать фактически причинённый вред.'
    },
    {
      q: 'Можно ли взыскать эвакуатор, хранение и экспертизу?',
      a: 'Да, если расходы фактически понесены, необходимы, разумны и причинно связаны с ДТП и защитой права. Каждый вид расходов подтверждается документально.'
    },
    {
      q: 'Что делать, если иск предъявили мне?',
      a: 'Не признавайте расчёт автоматически. До подачи отзыва проверьте статус ответчика, страховую выплату, перечень повреждений, методику расчёта, расходы и формулировки вопросов эксперту.'
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
            <Link href="/grazhdanam/">Гражданам</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/grazhdanam/avtoyurist/">Автоюрист</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span>Взыскание ущерба с виновника ДТП</span>
          </>
        }
        superTitle="Автомобильные споры"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Взыскание ущерба с виновника
            </span>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              ДТП в Липецке
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
                Проверим, какую часть должен возместить страховщик,
              </span>
              <span className="hero-sub-span-desktop" style={{ display: 'block' }}>
                определим ответственное лицо и фактический размер
              </span>
              <span className="hero-sub-span-desktop" style={{ display: 'block' }}>
                непокрытого ущерба, подготовим претензию, иск и доказательства.
              </span>
            </span>
          </>
        }
        primaryCtaText="Рассчитать маршрут взыскания"
        primaryCtaLink="#form"
        primaryCtaAnalytics="cta_click"
        primaryCtaSubtext={
          <>
            <span style={{ display: 'inline-block' }}>Сообщите сумму страхового возмещения, предполагаемый ущерб</span> <br className="hidden-mobile" />
            <span style={{ display: 'inline-block' }}>и есть ли письменный расчёт или иск: <a href="tel:+79103503111" data-analytics="phone_click">+7 (910) 350-31-11</a></span>
          </>
        }
        trustItems={[
          { text: 'Не переложим недоплату страховщика на виновника без проверки' },
          { text: 'Определим надлежащего ответчика: водитель, владелец или работодатель' },
          { text: 'Сопроводим переговоры, суд и получение исполнительного документа' }
        ]}
        imageUrl="/images/konopkin.jpg"
        imageName="Дмитрий Сергеевич Конопкин"
        imageSubtitle="Адвокат, председатель Коллегии адвокатов «Де-Юре»"
        imageObjectPosition="center 25%"
      />

      {/* ═══ БЛОК 2: ЧТО СОХРАНИТЬ И ЧЕГО НЕ ДЕЛАТЬ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                Что сохранить и чего не делать
              </span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Правильная фиксация документов и отказ от поспешных шагов сохраняют</span> <br className="hidden-mobile" />
              <span style={{ display: 'inline-block' }}>доказательственную базу для успешного взыскания или правовой защиты.</span>
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '32px' }}>
            {[
              {
                tag: 'Материалы ДТП',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Сохраните материалы</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и схему происшествия</span>
                  </>
                ),
                desc: 'Схему, определение или постановление ГИБДД, объяснения, фото, видеозаписи, контакты свидетелей и сведения о владельцах авто.'
              },
              {
                tag: 'Страховое дело',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Получите документы</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>страховой компании</span>
                  </>
                ),
                desc: 'Запросите страховой акт, калькуляцию, направление на ремонт, сведения о фактически выплаченной сумме и переписку.'
              },
              {
                tag: 'Сохранность',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Не ремонтируйте</span>
                    <span style={{ display: 'block' }}>авто до осмотра</span>
                  </>
                ),
                desc: 'До независимой фиксации повреждений экспертом не разбирайте и не продавайте автомобиль, чтобы не утратить доказательства.'
              },
              {
                tag: 'Уведомление',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Уведомите ответчика</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>о независимом осмотре</span>
                  </>
                ),
                desc: 'Пригласите предполагаемого ответчика на независимый осмотр способом с подтверждением вручения (телеграмма, заказное письмо).'
              },
              {
                tag: 'Расходы',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Сохраняйте чеки</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и квитанции об оплате</span>
                  </>
                ),
                desc: 'Счета и чеки на эвакуацию, платную стоянку, дефектовку, независимую оценку, хранение и иные сопутствующие расходы.'
              },
              {
                tag: 'Расписка',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Не подписывайте отказ</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>от дальнейших претензий</span>
                  </>
                ),
                desc: 'Не подписывайте расписку «претензий не имею» или мировое соглашение о полном расчёте до разделения страховой и деликтной частей.'
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
                  fontSize: '18px',
                  fontWeight: 600,
                  color: 'var(--color-deep-blue)',
                  margin: '0 0 14px 0',
                  lineHeight: 1.35,
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
            background: 'var(--color-white)',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-gold)',
            padding: '24px 30px',
            boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)'
          }}>
            <p style={{ margin: 0, fontSize: '14.5px', color: 'var(--color-deep-blue)', lineHeight: 1.6 }}>
              <strong>Не допускать двойного взыскания:</strong> В расчёте учитываются уже полученные страховые выплаты, исполненный ремонт, компенсации по КАСКО и иные суммы за тот же вред. Одни и те же убытки нельзя взыскать повторно.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: ПРОВЕРКА ОСАГО И ОТВЕТЧИКА ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                Как отделить страховую часть
              </span>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                и кто отвечает за ущерб
              </span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>По статье 1072 ГК РФ застраховавшее ответственность лицо возмещает разницу только тогда,</span> <br className="hidden-mobile" />
              <span style={{ display: 'inline-block' }}>когда страхового возмещения объективно недостаточно для полного возмещения вреда.</span>
            </p>
          </div>

          {/* Темно-синяя карточка-навигатор */}
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
                  3 этапа правового анализа
                </h3>
              </div>
              <div style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.75)', maxWidth: '520px', lineHeight: 1.5 }}>
                <span style={{ display: 'block' }}>Позволяет безошибочно отделить обязательство страховщика</span>
                <span style={{ display: 'block' }}>от деликтной ответственности причинителя вреда.</span>
              </div>
            </div>

            <div className="grid grid-3" style={{ gap: '16px', position: 'relative', zIndex: 1 }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '22px 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <h4 style={{ fontSize: '16.5px', color: '#FFFFFF', margin: 0, fontWeight: 600, lineHeight: 1.35, display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', flexShrink: 0 }}>01</span>
                  <span>
                    <span style={{ display: 'block' }}>Проверяем выплату</span>
                    <span style={{ display: 'block' }}>по ОСАГО</span>
                  </span>
                </h4>
                <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5, margin: 0 }}>
                  Устанавливаем, выплачен ли лимит и нет ли незаконной недоплаты страховщика, которую нельзя переложить на виновника.
                </p>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '22px 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <h4 style={{ fontSize: '16.5px', color: '#FFFFFF', margin: 0, fontWeight: 600, lineHeight: 1.35, display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', flexShrink: 0 }}>02</span>
                  <span>
                    <span style={{ display: 'block' }}>Устанавливаем</span>
                    <span style={{ display: 'block' }}>надлежащего ответчика</span>
                  </span>
                </h4>
                <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5, margin: 0 }}>
                  Определяем, кто обязан возмещать разницу: непосредственный водитель, собственник машины или работодатель.
                </p>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '22px 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <h4 style={{ fontSize: '16.5px', color: '#FFFFFF', margin: 0, fontWeight: 600, lineHeight: 1.35, display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', flexShrink: 0 }}>03</span>
                  <span>
                    <span style={{ display: 'block' }}>Рассчитываем реальный</span>
                    <span style={{ display: 'block' }}>размер ущерба</span>
                  </span>
                </h4>
                <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5, margin: 0 }}>
                  Определяем рыночную стоимость восстановительного ремонта без страхового износа деталей и сопутствующие расходы.
                </p>
              </div>
            </div>
          </div>

          {/* 2 КРУПНЫЕ КАРТОЧКИ */}
          <div className="grid grid-2" style={{ gap: '28px', marginBottom: '32px' }}>
            
            {/* Карточка 1: Основания требования к причинителю */}
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
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.3 }}>
                  <span style={{ display: 'inline-block' }}>Основания требования</span>{' '}
                  <span style={{ display: 'inline-block' }}>к причинителю вреда</span>
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                <span style={{ display: 'inline-block' }}>Проверяем, какие суммы превышают страховой лимит</span>{' '}
                <span style={{ display: 'inline-block' }}>и подлежат взысканию с ответственного лица.</span>
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px', lineHeight: 1.35 }}>
                      Ущерб превышает лимит 400 000 ₽
                    </strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      Страховая выплатила максимальный установленный законом лимит, однако фактическая стоимость ремонта выше.
                    </span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px', lineHeight: 1.35 }}>
                      Разница из-за расчёта по ОСАГО
                    </strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      Фактический ремонт по реальным рыночным ценам без износа деталей превышает выплату страховщика по Единой методике.
                    </span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px', lineHeight: 1.35 }}>
                      Непокрытые расходы и убытки
                    </strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      Взыскиваем причинно связанные расходы (эвакуация, платная стоянка, независимая оценка, хранение), не вошедшие в ОСАГО.
                    </span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px', lineHeight: 1.35 }}>
                      Полная гибель автомобиля (тотал)
                    </strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      Оцениваем доаварийную стоимость авто за вычетом надлежащего страхового возмещения и стоимости годных остатков.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Карточка 2: Определение надлежащего ответчика */}
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
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.3 }}>
                  <span style={{ display: 'inline-block' }}>Кто обязан возмещать</span>{' '}
                  <span style={{ display: 'inline-block' }}>причинённый вред</span>
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                <span style={{ display: 'inline-block' }}>Ответственность за вред может нести не только водитель,</span>{' '}
                <span style={{ display: 'inline-block' }}>но и собственник машины, работодатель или арендатор.</span>
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px', lineHeight: 1.35 }}>
                      Водитель управлял личным авто
                    </strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      Иск предъявляется непосредственно водителю как причинителю вреда и владельцу источника повышенной опасности.
                    </span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px', lineHeight: 1.35 }}>
                      ДТП на служебном автомобиле (ст. 1068 ГК РФ)
                    </strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      Если виновник выполнял служебные обязанности, ущерб возмещает организация-работодатель, а не наёмный водитель.
                    </span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px', lineHeight: 1.35 }}>
                      Аренда, каршеринг или доверенность
                    </strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      Изучаем договоры аренды, акты приёма-передачи и законность владения для точного определения ответчика в суде.
                    </span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px', lineHeight: 1.35 }}>
                      Несколько участников и солидарная вина
                    </strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      При обоюдной вине или аварии с несколькими машинами проверяем основания солидарного или долевого возмещения вреда.
                    </span>
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
            <strong style={{ color: 'var(--color-primary)' }}>Правовая рамка:</strong> По статье 1072 ГК РФ застраховавшее ответственность лицо возмещает разницу только тогда, когда страхового возмещения недостаточно для полного возмещения вреда. Если страховщик выплатил меньше, чем должен был по ОСАГО, эта недоплата сама по себе не становится долгом виновника.
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#form" className="btn btn-primary" style={{ display: 'inline-block', padding: '14px 32px' }}>
              Оценить страховую часть и ответчика
            </a>
          </div>

        </div>
      </section>

      {/* ═══ БЛОК 4: ЧТО СДЕЛАЕТ ЮРИСТ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Что сделает юрист</span> <br />
              <span style={{ display: 'inline-block' }}>по взысканию ущерба с виновника</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Полный комплекс процессуальной работы — от правовой оценки и переговоров</span> <br className="hidden-mobile" />
              <span style={{ display: 'inline-block' }}>до фактического взыскания всей суммы ущерба в судебном порядке.</span>
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '48px' }}>
            {[
              {
                num: '01',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Разделит</span>
                    <span style={{ display: 'block' }}>ответственных</span>
                  </>
                ),
                desc: 'Проверит страховое обязательство, причинителя, владельца транспорта, работодателя и иных возможных ответчиков.'
              },
              {
                num: '02',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Соберёт</span>
                    <span style={{ display: 'block' }}>доказательства</span>
                  </>
                ),
                desc: 'Изучит материалы ДТП, страховое дело, осмотры, расчёты, расходы и обоснует необходимость экспертизы.'
              },
              {
                num: '03',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Сформирует</span>
                    <span style={{ display: 'block' }}>сумму ущерба</span>
                  </>
                ),
                desc: 'Отделит фактический ущерб от уже возмещённого, исключит двойной счёт и необоснованные позиции.'
              },
              {
                num: '04',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Подготовит</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>комплект документов</span>
                  </>
                ),
                desc: 'Составит претензию, соглашение, иск, возражения, ходатайства и грамотные вопросы эксперту.'
              },
              {
                num: '05',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Представит</span>
                    <span style={{ display: 'block' }}>интересы в суде</span>
                  </>
                ),
                desc: 'Проведёт переговоры и судебные заседания, сопроводит экспертизу и получение исполнительного документа.'
              },
              {
                num: '06',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Оценит</span>
                    <span style={{ display: 'block' }}>взыскуемость</span>
                  </>
                ),
                desc: 'До дополнительных расходов объяснит риски доказывания и перспективы фактического исполнения решения.'
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
          </div>

          {/* ГРАНИЦЫ УСЛУГИ */}
          <div style={{
            background: 'linear-gradient(135deg, #10273B 0%, #17375E 50%, #0D1E2D 100%)',
            border: '1px solid rgba(193, 160, 102, 0.4)',
            borderTop: '3px solid var(--color-gold)',
            boxShadow: '0 8px 30px rgba(16, 39, 59, 0.18)',
            padding: '36px 32px',
            color: '#FFFFFF',
            position: 'relative'
          }}>
            <div className="grid grid-2" style={{ gap: '36px' }}>
              <div>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: '#FFFFFF', margin: '0 0 18px 0', paddingBottom: '12px', borderBottom: '1px solid rgba(255, 255, 255, 0.15)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <span>Входит в юридическую помощь</span>
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    { title: 'Анализ страховой и деликтной частей ущерба', desc: 'Разделение обязательства страховой компании и прямого требования к виновнику ДТП.' },
                    { title: 'Определение надлежащего состава ответчиков', desc: 'Установление круга лиц: водитель, собственник автомобиля, работодатель или арендатор.' },
                    { title: 'Расчёт требований и досудебное урегулирование', desc: 'Подготовка мотивированной претензии или соглашения о добровольном возмещении.' },
                    { title: 'Формирование иска и судебное представительство', desc: 'Составление иска, участие во всех заседаниях суда, доказывание размера реального ущерба.' },
                    { title: 'Сопровождение судебной автоэкспертизы', desc: 'Формулирование корректных вопросов эксперту и анализ экспертного заключения.' }
                  ].map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                        <polyline points="9 11 12 14 22 4" />
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                      </svg>
                      <div>
                        <strong style={{ display: 'block', fontSize: '15px', color: '#FFFFFF', marginBottom: '2px' }}>{item.title}</strong>
                        <span style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.78)', lineHeight: 1.5 }}>{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: '#FFFFFF', margin: '0 0 18px 0', paddingBottom: '12px', borderBottom: '1px solid rgba(255, 255, 255, 0.15)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  <span>Оценивается отдельно</span>
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    { title: 'Независимая автоэкспертиза и оценка', desc: 'Проведение независимой оценки стоимости восстановительного ремонта и годных остатков.' },
                    { title: 'Госпошлина и судебные расходы', desc: 'Оплата государственной пошлины за рассмотрение иска в суде и почтовые отправления.' },
                    { title: 'Спор со страховщиком по ОСАГО или КАСКО', desc: 'Ведение спора со страховой организацией при наличии отдельного страхового спора.' },
                    { title: 'Исполнительное производство после суда', desc: 'Фактический розыск счетов и имущества должника через службу судебных приставов.' }
                  ].map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <div>
                        <strong style={{ display: 'block', fontSize: '15px', color: '#FFFFFF', marginBottom: '2px' }}>{item.title}</strong>
                        <span style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.78)', lineHeight: 1.5 }}>{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══ БЛОК 5: ЕСЛИ ТРЕБОВАНИЕ ПРЕДЪЯВИЛИ ВАМ ═══ */}
      <section className="section bg-light" id="defense" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Проверим, должны ли отвечать</span> <br />
              <span style={{ display: 'inline-block' }}>именно Вы и в каком размере</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Если после ДТП претензию или судебный иск предъявили Вам,</span> <br />
              <span style={{ display: 'inline-block' }}>проверим обоснованность статуса ответчика, вину и расчёт заявленного ущерба.</span>
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '28px', marginBottom: '32px' }}>
            <div style={{
              background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-primary)',
              padding: '32px 28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <h3 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', margin: 0, fontWeight: 700 }}>
                Проверка оснований иска
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'Учтено ли надлежащее обязательство страховщика и все уже выплаченные страховые суммы',
                  'Являетесь ли Вы надлежащим ответчиком: водитель, собственник, работодатель или арендатор',
                  'Установлена ли вина и причинная связь; относятся ли все заявленные повреждения к этой аварии'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '14.5px', color: 'var(--color-deep-blue)', lineHeight: 1.5 }}>
                    <span style={{ color: 'var(--color-gold)', fontWeight: 'bold' }}>—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{
              background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-gold)',
              padding: '32px 28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <h3 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', margin: 0, fontWeight: 700 }}>
                Оспаривание суммы требований
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'Учтены ли выплаты по КАСКО, добровольные платежи и стоимость годных остатков',
                  'Обоснованы ли способ ремонта, цены деталей, расчёт УТС, хранение и расходы на оценку',
                  'Есть ли основания заявить о грубой неосторожности потерпевшего или снизить возмещение по ст. 1083 ГК РФ'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '14.5px', color: 'var(--color-deep-blue)', lineHeight: 1.5 }}>
                    <span style={{ color: 'var(--color-gold)', fontWeight: 'bold' }}>—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{
            background: 'var(--color-white)',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-gold)',
            padding: '24px 30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <p style={{ margin: 0, fontSize: '14.5px', color: 'var(--color-deep-blue)', lineHeight: 1.6, maxWidth: '700px' }}>
              <strong>Получили претензию или иск?</strong> Пришлите документ до подготовки ответа: процессуальные сроки и вопросы эксперту зависят от текущей стадии дела.
            </p>
            <a href="#form" className="btn btn-primary" style={{ padding: '12px 24px', fontSize: '14px', whiteSpace: 'nowrap' }}>
              Проверить требование
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 6: ДОКУМЕНТЫ ДЛЯ ПЕРВИЧНОЙ ОЦЕНКИ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Документы для</span> <br />
              <span style={{ display: 'inline-block' }}>оценки спора с виновником ДТП</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Чем полнее комплект документов, тем точнее юрист определит</span> <br />
              <span style={{ display: 'inline-block' }}>правовые перспективы и процессуальный порядок взыскания.</span>
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '28px', marginBottom: '32px' }}>
            
            {/* Карточка 1: Материалы ДТП и страхования */}
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
                <span style={{ display: 'inline-block' }}>Материалы ДТП и страхования</span>
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Документы происшествия</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Извещение о ДТП, схема аварии, определение или постановление ГИБДД, объяснения участников, фото, видео и контакты свидетелей.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Страховое дело и выплаты</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Полисы, акт осмотра страховой компании, калькуляция, направление на ремонт, выплата или решение финансового уполномоченного.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Карточка 2: Ущерб, расходы и досудебная стадия */}
            <div style={{
              background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-gold)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0, paddingBottom: '12px', borderBottom: '1px solid rgba(23, 50, 77, 0.1)' }}>
                <span style={{ display: 'inline-block' }}>Ущерб, расходы и досудебная стадия</span>
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Документы об ущербе и расходах</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Акт осмотра, отчёт независимой оценки, заказ-наряды СТО, чеки на эвакуацию, платную стоянку и расчёт утраты товарной стоимости.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Претензионная и судебная стадия</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Претензия с почтовыми квитанциями, ответы причинителя, соглашения, расписки, исковые материалы и определения суда.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div style={{
            background: 'var(--color-white)',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-gold)',
            padding: '24px 30px',
            marginTop: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)'
          }}>
            <p style={{ margin: 0, fontSize: '14.5px', color: 'var(--color-deep-blue)', lineHeight: 1.6, maxWidth: '720px' }}>
              <strong>Нет полного комплекта?</strong> Направьте то, что уже есть на руках (документы ГИБДД, фото или претензию), — юрист подскажет, какие документы запросить или оформить.
            </p>
            <a href="#form" className="btn btn-primary" style={{ padding: '12px 24px', fontSize: '14px', whiteSpace: 'nowrap' }}>
              Отправить документы
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 7: КУРАТОР НАПРАВЛЕНИЯ ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name="Дмитрий Сергеевич Конопкин"
        position="Адвокат, председатель Коллегии адвокатов «Де-Юре»"
        imageUrl="/images/konopkin.jpg"
        imagePosition="center 5%"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Юридическая практика с 2016 года; опыт следственной работы помогает детально анализировать материалы происшествий, договоры и позиции страховых компаний.
          </span>,
          <ul key="2" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>
                Специализируется на автомобильных спорах: взыскание ущерба с виновников ДТП сверх лимита ОСАГО, споры с работодателями и собственниками транспорта.
              </span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>
                Оценивает реальную рыночную стоимость восстановительного ремонта без учёта износа деталей и формирует мотивированную позицию для суда.
              </span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>
                Защищает интересы потерпевших и автовладельцев в Липецке и Липецкой области, а также ведет дела дистанционно по всей России.
              </span>
            </li>
          </ul>,
          <a key="3" href="/specialisty/konopkin-dmitriy-sergeevich/" style={{ display: 'inline-block', marginTop: '16px', fontSize: '14px', color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }} data-analytics="specialist_profile_click">
            Подробнее об адвокате Дмитрии Сергеевиче Конопкине →
          </a>
        ]}
        buttonText="Обсудить ситуацию с Дмитрием Сергеевичем"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 8: КЕЙСЫ ═══ */}
      <CasesBlock
        title="Примеры дел из практики"
        showAllLink="/praktika/"
        showAllText="Смотреть всю практику"
        showDemoWarning={true}
        cases={cases}
      />

      {/* ═══ БЛОК 9: КАК ПРОХОДИТ РАБОТА ═══ */}
      <ProcessBlock
        title="Как проходит работа по взысканию"
        subtitle="Прозрачный и последовательный порядок защиты прав потерпевшего"
        steps={[
          {
            num: '01',
            title: 'Анализ материалов ДТП и выплаты',
            desc: 'Получаем документы об аварии, проверяем надлежащую страховую выплату и определяем круг ответственных лиц.'
          },
          {
            num: '02',
            title: 'Организация осмотра и расчёт ущерба',
            desc: 'Организуем осмотр с заблаговременным вызовом ответчика, рассчитываем реальную рыночную стоимость ремонта.'
          },
          {
            num: '03',
            title: 'Согласование стратегии и условий',
            desc: 'Предлагаем оптимальный процессуальный маршрут, фиксируем состав работ и стоимость юридической помощи в договоре.'
          },
          {
            num: '04',
            title: 'Досудебная претензия или переговоры',
            desc: 'Направляем мотивированную претензию либо оформляем соглашение о добровольном возмещении с графиком выплат.'
          },
          {
            num: '05',
            title: 'Судебное представительство и исполнение',
            desc: 'Ведём дело во всех судебных заседаниях до получения решения суда и исполнительного листа.'
          }
        ]}
        ctaTitle="Готовы разобрать вашу ситуацию по взысканию с виновника"
        ctaSubtitle="Оставьте номер телефона — адвокат свяжется с вами и подскажет законный порядок действий."
        ctaButtonText="Обсудить взыскание ущерба"
        ctaButtonHref="#form"
      />

      {/* ═══ БЛОК 10: СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость юридической помощи"
        subtitle="Стоимость зависит от стадии спора, объёма доказательств и необходимости судебного представительства."
        tiers={[
          {
            title: 'Анализ и стратегия',
            subtitle: 'Первичная правовая оценка ситуации',
            price: 'от 5 000 ₽',
            features: [
              { name: 'Проверка выплаты ОСАГО и статуса ответчика', value: '✓' },
              { name: 'Анализ материалов ДТП и схемы аварии', value: '✓' },
              { name: 'Определение надлежащего ответчика', value: '✓' },
              { name: 'Письменные рекомендации автоюриста', value: '✓' }
            ],
            buttonText: 'Получить оценку',
            buttonHref: '#form'
          },
          {
            title: 'Претензия или соглашение',
            subtitle: 'Досудебное урегулирование ущерба',
            price: 'от 10 000 ₽',
            popular: true,
            badgeText: 'Популярно',
            features: [
              { name: 'Расчёт правовой позиции и убытков', value: '✓' },
              { name: 'Подготовка мотивированной претензии', value: '✓' },
              { name: 'Составление соглашения о возмещении', value: '✓' },
              { name: 'Ведение досудебных переговоров', value: '✓' }
            ],
            buttonText: 'Заказать услугу',
            buttonHref: '#form'
          },
          {
            title: 'Судебное представительство',
            subtitle: 'Защита в суде под ключ',
            price: 'от 25 000 ₽',
            features: [
              { name: 'Подготовка и подача искового заявления', value: '✓' },
              { name: 'Участие адвоката во всех заседаниях суда', value: '✓' },
              { name: 'Сопровождение судебной автоэкспертизы', value: '✓' },
              { name: 'Взыскание ущерба и судебных расходов', value: '✓' }
            ],
            buttonText: 'Судебная защита',
            buttonHref: '#form'
          }
        ]}
        disclaimer={
          <>
            <span style={{ display: 'inline-block' }}>Стоимость определяется после изучения документов и фиксируется в договоре.</span> <br className="hidden-mobile" />
            <span style={{ display: 'inline-block' }}>Независимая экспертиза, оценка, госпошлина и почтовые расходы согласуются отдельно.</span>
          </>
        }
      />

      {/* ═══ БЛОК 11: ЧАСТЫЕ ВОПРОСЫ ═══ */}
      <FAQBlock
        superTitle="Частые вопросы"
        title="Ответы на частые вопросы"
        subtitle="Разъяснения адвоката Дмитрия Конопкина по взысканию ущерба с виновника ДТП"
        ctaText="Задать свой вопрос"
        ctaLink="#form"
        faqs={faqs}
      />

      {/* ═══ БЛОК 12: СВЯЗАННЫЕ УСЛУГИ ═══ */}
      <section className="section bg-cream" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                Другие автомобильные ситуации
              </span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Смежные направления помощи при дорожно-транспортных</span> <br className="hidden-mobile" />
              <span style={{ display: 'inline-block' }}>происшествиях и страховых спорах.</span>
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
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 380px))', gap: '20px' }}>
            <Link href="/grazhdanam/avtoyurist/spory-po-osago/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
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
                    <span style={{ display: 'inline-block' }}>Споры</span> <br /><span style={{ display: 'inline-block' }}>по ОСАГО</span>
                  </h3>
                  <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    Защита при отказе, занижении выплаты, просрочке или срыве ремонта по ОСАГО.
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

            <Link href="/grazhdanam/avtoyurist/vzyskanie-ushcherba-pri-dtp-bez-osago/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
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
                    <span style={{ display: 'inline-block' }}>Взыскание ущерба</span> <br /><span style={{ display: 'inline-block' }}>при ДТП без ОСАГО</span>
                  </h3>
                  <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    Если ответственность виновника аварии не была застрахована.
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

            <Link href="/grazhdanam/avtoyurist/osparivanie-viny-v-dtp/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
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
                    <span style={{ display: 'inline-block' }}>Оспаривание</span> <br /><span style={{ display: 'inline-block' }}>вины в ДТП</span>
                  </h3>
                  <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    Защита при спорных обстоятельствах аварии, обоюдной вине или необоснованном обвинении.
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

            <Link href="/grazhdanam/avtoyurist/spory-po-kasko/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
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
                    <span style={{ display: 'inline-block' }}>Споры</span> <br /><span style={{ display: 'inline-block' }}>по КАСКО</span>
                  </h3>
                  <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    Защита при отказе, недоплате, споре по ремонту, угону или полной гибели авто.
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
            <Link href="/grazhdanam/avtoyurist/" className="all-services-link" style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '16px', textDecoration: 'underline', textUnderlineOffset: '4px', display: 'inline-flex', alignItems: 'center', gap: '6px', transition: 'color 0.2s ease' }}>
              Смотреть все услуги автоюриста →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 13: ФИНАЛЬНАЯ ФОРМА ═══ */}
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
                Разберём, с кого и какую сумму можно требовать
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Оставьте номер телефона и кратко укажите: была ли выплата ОСАГО, размер предполагаемого ущерба и Вы взыскиваете ущерб или получили требование.
              </p>

              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация автоюриста</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Позвоните прямо сейчас: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (910) 350-31-11</a>
                </p>
              </div>

              <div style={{ background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55, marginTop: '20px' }}>
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Безопасность данных:</strong>
                Не указывайте в форме паспортные данные, VIN, номер полиса и иные конфиденциальные сведения. Безопасный способ передачи документов согласуем после звонка.
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm 
                title="Обсудить взыскание ущерба"
                subtitle="Оставьте имя и номер телефона. Автоюрист перезвонит в течение 15 минут в рабочее время."
                buttonText="Обсудить взыскание ущерба"
                commentPlaceholder="Кратко опишите ситуацию: сумма ущерба, выплата ОСАГО, стадия спора…"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
