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
            <Link href="/" style={{ color: 'var(--color-primary)' }}>Главная</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/grazhdanam/" style={{ color: 'var(--color-primary)' }}>Гражданам</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/grazhdanam/avtoyurist/" style={{ color: 'var(--color-primary)' }}>Автоюрист</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Взыскание ущерба с виновника ДТП</span>
          </>
        }
        superTitle="Автомобильные споры"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Взыскание ущерба</span>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>с виновника ДТП в Липецке</span>
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

      {/* ═══ БЛОК 2: КОГДА ВОЗНИКАЕТ ТРЕБОВАНИЕ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                Сначала определяется
              </span>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                надлежащее обязательство страховщика
              </span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>По статье 1072 ГК РФ застраховавшее ответственность лицо возмещает разницу</span> <br className="hidden-mobile" />
              <span style={{ display: 'inline-block' }}>только тогда, когда страхового возмещения объективно недостаточно для полного возмещения вреда.</span>
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '32px' }}>
            {[
              {
                tag: 'Лимит ОСАГО',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Ущерб превышает</span>
                    <span style={{ display: 'block' }}>лимит страховщика</span>
                  </>
                ),
                desc: 'Надлежащее страховое возмещение в пределах установленного законом лимита недостаточно для полного восстановления имущества.'
              },
              {
                tag: 'Рыночный расчёт',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Разница из-за правил</span>
                    <span style={{ display: 'block' }}>страхового расчёта</span>
                  </>
                ),
                desc: 'Фактический ущерб по реальным рыночным ценам без износа отличается от возмещения, рассчитанного по Единой методике ОСАГО.'
              },
              {
                tag: 'Расходы',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Непокрытые</span>
                    <span style={{ display: 'block' }}>расходы и убытки</span>
                  </>
                ),
                desc: 'Проверяются причинно связанные и разумные расходы (эвакуация, платная стоянка, оценка, хранение), не вошедшие в выплату по ОСАГО.'
              },
              {
                tag: 'Тотал',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Полная гибель</span>
                    <span style={{ display: 'block' }}>автомобиля</span>
                  </>
                ),
                desc: 'Вместо стоимости ремонта оцениваются доаварийная стоимость автомобиля, надлежащее страховое возмещение и стоимость годных остатков.'
              },
              {
                tag: 'Солидарность',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Несколько</span>
                    <span style={{ display: 'block' }}>ответственных лиц</span>
                  </>
                ),
                desc: 'В зависимости от обстоятельств аварии может возникать долевое распределение вины или солидарная ответственность владельцев источников опасности.'
              },
              {
                tag: 'Защита',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Защита ответчика</span>
                    <span style={{ display: 'block' }}>от завышения</span>
                  </>
                ),
                desc: 'Если иск предъявили Вам, проверим обоснованность суммы, надлежащего ответчика, факт ДТП и исключим двойной расчёт.'
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
              <strong>Правовая рамка:</strong> По статье 1072 ГК РФ застраховавшее ответственность лицо возмещает разницу только тогда, когда страхового возмещения недостаточно для полного возмещения вреда. Если страховщик выплатил меньше, чем должен был по ОСАГО, эта недоплата сама по себе не становится долгом виновника.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: ЧТО СОХРАНИТЬ И ЧЕГО НЕ ДЕЛАТЬ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                Что сохранить
              </span>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                и чего не делать
              </span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Правильная фиксация документов и отказ от поспешных шагов</span> <br />
              <span style={{ display: 'inline-block' }}>сохраняют доказательственную базу для успешного взыскания или правовой защиты.</span>
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '32px' }}>
            {[
              { num: '01', title: 'Сохраните материалы ДТП', desc: 'Схему, определение или постановление ГИБДД, объяснения, фото, видеозаписи, контакты свидетелей и сведения о владельцах авто.' },
              { num: '02', title: 'Получите документы страховой', desc: 'Запросите страховой акт, калькуляцию, направление на ремонт, сведения о фактически выплаченной сумме и переписку.' },
              { 
                num: '03', 
                title: (
                  <>
                    <span style={{ display: 'block' }}>Не ремонтируйте</span>
                    <span style={{ display: 'block' }}>авто до осмотра</span>
                  </>
                ), 
                desc: 'До независимой фиксации повреждений экспертом не разбирайте и не продавайте автомобиль, чтобы не утратить доказательства.' 
              },
              { num: '04', title: 'Уведомите ответчика об осмотре', desc: 'Пригласите предполагаемого ответчика на независимый осмотр способом, позволяющим подтвердить факт вручения (телеграмма, заказное письмо).' },
              { num: '05', title: 'Сохраняйте чеки и квитанции', desc: 'Счета и чеки на эвакуацию, платную стоянку, дефектовку, независимую оценку, хранение и иные заявляемые сопутствующие расходы.' },
              { num: '06', title: 'Не подписывайте отказ от претензий', desc: 'Не подписывайте расписку «претензий не имею» или мировое соглашение о полном расчёте до отделения страховой и деликтной частей.' }
            ].map((step, idx) => (
              <div key={idx} style={{
                background: 'var(--color-white)',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-primary)',
                padding: '28px 24px',
                boxShadow: '0 4px 15px rgba(23, 50, 77, 0.03)'
              }}>
                <div style={{ fontSize: '24px', fontFamily: 'var(--font-serif)', color: 'var(--color-gold)', fontWeight: 700, marginBottom: '12px' }}>
                  {step.num}
                </div>
                <h3 style={{ fontSize: '17px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', margin: '0 0 10px 0', fontWeight: 700 }}>
                  {step.title}
                </h3>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                  {step.desc}
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

      {/* ═══ БЛОК 4: ЧТО МОЖНО ВКЛЮЧИТЬ В РАСЧЕТ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                Что можно включить
              </span>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                в расчёт ущерба
              </span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Каждая позиция требования должна быть причинно связана с ДТП, фактически обоснована и подтверждена документами.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '20px', marginBottom: '32px' }}>
            {[
              {
                num: '01',
                title: 'Восстановительный ремонт',
                desc: 'Повреждения относятся к ДТП; работы и детали необходимы; стоимость определяется по реальному рынку и не создаёт явно несправедливого улучшения авто.'
              },
              {
                num: '02',
                title: 'Утрата товарной стоимости',
                desc: 'Рассчитывается при наличии условий снижения стоимости для относительно новых авто, если УТС не была надлежащим образом возмещена страховщиком.'
              },
              {
                num: '03',
                title: 'Эвакуация и хранение',
                desc: 'Расходы фактически понесены, необходимы, разумны по периоду и причинно связаны с последствиями аварии.'
              },
              {
                num: '04',
                title: 'Оценка и экспертиза',
                desc: 'Расходы на независимое исследование, необходимое для защиты нарушенного права, при обоснованности поставленных вопросов и цен.'
              },
              {
                num: '05',
                title: 'Полная гибель (тотал)',
                desc: 'Разница между доаварийной стоимостью авто, надлежащим страховым возмещением и стоимостью годных остатков.'
              },
              {
                num: '06',
                title: 'Иные подтверждённые убытки',
                desc: 'Наличие, размер, причинная связь и разумность подтверждены документами (упущенная выгода требует особо строгого доказывания).'
              }
            ].map((item) => (
              <div key={item.num} style={{
                display: 'flex',
                gap: '16px',
                padding: '24px',
                border: '1px solid var(--color-border)',
                borderLeft: '3px solid var(--color-primary)',
                background: 'var(--color-white)',
                borderRadius: '0'
              }}>
                <div style={{
                  fontSize: '24px',
                  fontWeight: 700,
                  color: 'var(--color-primary)',
                  fontFamily: 'var(--font-serif)',
                  lineHeight: 1,
                  flexShrink: 0,
                  opacity: 0.4,
                  minWidth: '32px'
                }}>
                  {item.num}
                </div>
                <div>
                  <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 700, color: 'var(--color-deep-blue)', lineHeight: 1.3 }}>
                    {item.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    {item.desc}
                  </p>
                </div>
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
              <strong>Обратите внимание:</strong> Моральный вред за повреждение автомобиля законом обычно не предусматривается. Вред жизни и здоровью является самостоятельным предметом спора с отдельным доказыванием.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 5: КТО ОТВЕЧАЕТ И ОТДЕЛЕНИЕ СТРАХОВОЙ ЧАСТИ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                Кто отвечает за ущерб
              </span>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                и как отделить страховую часть
              </span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Водитель, собственник автомобиля и гражданско-правовой ответчик могут быть разными лицами.
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
                  Определение надлежащего ответчика
                </h3>
              </div>
              <span style={{ fontSize: '13px', color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                Правовой анализ
              </span>
            </div>

            <div className="grid grid-2" style={{ gap: '20px', position: 'relative', zIndex: 1 }}>
              {[
                {
                  role: 'Водитель на своём авто',
                  desc: 'Отвечает лично как непосредственный причинитель вреда и законный владелец источника повышенной опасности.'
                },
                {
                  role: 'Авто принадлежит другому лицу',
                  desc: 'Проверяются законные основания владения и доверенности; одного свидетельства о регистрации недостаточно для автоматического вывода.'
                },
                {
                  role: 'ДТП при исполнении работы',
                  desc: 'По ст. 1068 ГК РФ за вред, причинённый работником при исполнении трудовых обязанностей, отвечает работодатель (организация или ИП).'
                },
                {
                  role: 'Несколько участников ДТП',
                  desc: 'При обоюдной вине или причинении вреда третьему лицу проверяются основания солидарной или долевой ответственности владельцев авто.'
                }
              ].map((s, idx) => (
                <div key={idx} style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderLeft: '3px solid var(--color-gold)',
                  padding: '20px 24px'
                }}>
                  <h4 style={{ margin: '0 0 8px 0', fontSize: '16px', color: '#FFFFFF', fontFamily: 'var(--font-serif)' }}>
                    {s.role}
                  </h4>
                  <p style={{ margin: 0, fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.55 }}>
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Алгоритм отделения страховой части */}
          <div className="grid grid-2" style={{ gap: '24px', marginBottom: '32px' }}>
            <div style={{
              background: 'var(--color-white)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-primary)',
              padding: '32px 28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <h3 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', margin: 0, fontWeight: 700 }}>
                Как отделяется страховая часть
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'Определяем размер возмещения, которое страховщик обязан был предоставить по закону',
                  'Проверяем соблюдение досудебного порядка со страховой компанией',
                  'Определяем фактический размер ущерба по правилам главы 59 ГК РФ',
                  'Вычитаем надлежащее страховое возмещение и иные компенсации того же вреда',
                  'Проверяем возражения о годных остатках, разумности цен и возможном улучшении авто'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '14.5px', color: 'var(--color-deep-blue)', lineHeight: 1.5 }}>
                    <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{
              background: 'var(--color-white)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-gold)',
              padding: '32px 28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '20px'
            }}>
              <div>
                <h3 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', margin: '0 0 12px 0', fontWeight: 700 }}>
                  Если страховая компания недоплатила
                </h3>
                <p style={{ margin: 0, fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  Суд не взыщет с виновника ту часть ущерба, которая по закону об ОСАГО входит в обязательство страховой компании. В этом случае параллельно или предварительно ведётся спор со страховщиком.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link href="/grazhdanam/avtoyurist/spory-po-osago/" className="btn btn-outline" style={{ padding: '10px 20px', fontSize: '14px' }}>
                  Споры по ОСАГО →
                </Link>
                <a href="#form" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '14px' }}>
                  Оценить документы
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 6: ВАРИАНТЫ РЕШЕНИЯ СПОРА ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                Варианты решения
              </span>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                спора с виновником
              </span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Выбираем наиболее эффективный маршрут в зависимости от готовности ответчика к диалогу и наличия доказательств.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '24px' }}>
            {[
              {
                title: 'Переговоры и соглашение',
                when: 'Когда ответчик признаёт вину и основу расчёта, но требуется зафиксировать сумму, рассрочку или график.',
                result: 'Письменное соглашение с чётким расчётом, графиком платежей, способом перечисления и санкциями за просрочку.'
              },
              {
                title: 'Досудебная претензия',
                when: 'Нужно официально раскрыть доказательства, расчёт непокрытой суммы и предложить добровольное погашение.',
                result: 'Мотивированное требование с полным комплектом подтверждающих документов и шанс закрыть спор без судебных издержек.'
              },
              {
                title: 'Судебный иск к ответчику',
                when: 'Размер ущерба и страховая часть определены, но ответчик уклоняется от добровольного возмещения вреда.',
                result: 'Исковое заявление, ходатайства об обеспечении иска (арест авто), сопровождение судебной экспертизы и решение суда.'
              },
              {
                title: 'Исполнение решения суда',
                when: 'Судебный акт вступил в законную силу или заключено утверждённое судом мировое соглашение.',
                result: 'Получение исполнительного листа и передача в банк должника или в службу судебных приставов для фактического взыскания.'
              }
            ].map((route, i) => (
              <div key={i} style={{
                background: 'var(--color-white)',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-primary)',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}>
                <h3 style={{ margin: 0, fontSize: '18px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                  {route.title}
                </h3>
                <div>
                  <div style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--color-gold)', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '4px' }}>Когда подходит:</div>
                  <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>{route.when}</p>
                </div>
                <div>
                  <div style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--color-primary)', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '4px' }}>Результат:</div>
                  <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-deep-blue)', lineHeight: 1.55, fontWeight: 500 }}>{route.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 7: ЧТО СДЕЛАЕТ ЮРИСТ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                Что сделает юрист
              </span>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                по взысканию ущерба
              </span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Комплексное сопровождение спора от правовой оценки до исполнения решения суда.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '20px', marginBottom: '32px' }}>
            {[
              { num: '01', title: 'Разделит ответственных', desc: 'Проверит страховое обязательство, причинителя, владельца транспорта, работодателя и иных возможных ответчиков.' },
              { num: '02', title: 'Соберёт доказательства', desc: 'Изучит материалы ДТП, страховое дело, осмотры, расчёты, расходы и обоснует необходимость экспертизы.' },
              { num: '03', title: 'Сформирует сумму', desc: 'Отделит фактический ущерб от уже возмещённого, исключит двойной счёт и необоснованные позиции.' },
              { num: '04', title: 'Подготовит документы', desc: 'Составит претензию, соглашение, иск, возражения, ходатайства и грамотные вопросы эксперту.' },
              { num: '05', title: 'Представит интересы', desc: 'Проведёт переговоры и судебные заседания, сопроводит экспертизу и получение исполнительного документа.' },
              { num: '06', title: 'Оценит взыскуемость', desc: 'До дополнительных расходов объяснит риски доказывания и перспективы фактического исполнения решения.' }
            ].map((item) => (
              <div key={item.num} style={{
                display: 'flex',
                gap: '16px',
                padding: '24px',
                border: '1px solid var(--color-border)',
                borderLeft: '3px solid var(--color-primary)',
                background: 'var(--color-white)',
                borderRadius: '0'
              }}>
                <div style={{
                  fontSize: '24px',
                  fontWeight: 700,
                  color: 'var(--color-primary)',
                  fontFamily: 'var(--font-serif)',
                  lineHeight: 1,
                  flexShrink: 0,
                  opacity: 0.4,
                  minWidth: '32px'
                }}>
                  {item.num}
                </div>
                <div>
                  <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 700, color: 'var(--color-deep-blue)', lineHeight: 1.3 }}>
                    {item.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Состав и границы услуги */}
          <div style={{
            background: 'linear-gradient(135deg, #10273B 0%, #17375E 50%, #0D1E2D 100%)',
            border: '1px solid rgba(193, 160, 102, 0.4)',
            borderTop: '3px solid var(--color-gold)',
            boxShadow: '0 8px 30px rgba(16, 39, 59, 0.18)',
            padding: '36px 32px',
            position: 'relative'
          }}>
            <div className="grid grid-2" style={{ gap: '24px' }}>
              <div>
                <h4 style={{ margin: '0 0 12px 0', fontSize: '16px', color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Входит в юридическую помощь
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    'Анализ страховой и деликтной частей ущерба',
                    'Определение надлежащего состава ответчиков',
                    'Расчёт требований и подготовка правовой позиции',
                    'Составление претензии или соглашения об урегулировании',
                    'Подготовка искового заявления, возражений и ходатайств',
                    'Судебное представительство и сопровождение экспертизы'
                  ].map((it, i) => (
                    <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '13.5px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.5 }}>
                      <span style={{ color: 'var(--color-gold)', fontWeight: 'bold' }}>✓</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 style={{ margin: '0 0 12px 0', fontSize: '16px', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Оценивается отдельно
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    'Независимая автотехническая экспертиза и оценка',
                    'Оплата государственной пошлины и почтовых отправлений',
                    'Спор со страховщиком как с отдельным ответчиком',
                    'Исполнительное производство после вступления решения в силу',
                    'Споры о возмещении вреда здоровью и уголовные производства'
                  ].map((it, i) => (
                    <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '13.5px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.5 }}>
                      <span style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 'bold' }}>—</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 8: ЕСЛИ ТРЕБОВАНИЕ ПРЕДЪЯВИЛИ ВАМ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                Проверим, должны ли отвечать
              </span>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                именно Вы и в каком размере
              </span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Защита владельца, водителя или работодателя от завышенного расчёта, двойного взыскания либо иска к ненадлежащему ответчику.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '24px', marginBottom: '32px' }}>
            <div style={{
              background: 'var(--color-white)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-gold)',
              padding: '32px 28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <h3 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', margin: 0, fontWeight: 700 }}>
                Правовой статус и ответственность
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'Являетесь ли Вы надлежащим ответчиком: водитель, владелец, работник и собственник имеют разный статус',
                  'Учтено ли надлежащее обязательство страховщика и все уже выплаченные страховые суммы',
                  'Относятся ли заявленные повреждения к конкретному ДТП и не включён ли прежний износ или дефекты'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '14.5px', color: 'var(--color-deep-blue)', lineHeight: 1.5 }}>
                    <span style={{ color: 'var(--color-gold)', fontWeight: 'bold' }}>—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{
              background: 'var(--color-white)',
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
                  'Обоснованы ли способ ремонта, цены деталей, расчёт УТС, хранение и расходы на экспертизу',
                  'Не превышает ли расчёт доаварийную стоимость авто с учётом годных остатков при тотале',
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
              Проверить требования
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 9: ДОКУМЕНТЫ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                Документы для
              </span>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                оценки спора с виновником
              </span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Подготовьте имеющиеся материалы. Если части документов нет, юрист подскажет, как и где их официально запросить.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '28px' }}>
            <div style={{
              background: 'var(--color-white)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-primary)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0, paddingBottom: '12px', borderBottom: '1px solid rgba(23, 50, 77, 0.1)' }}>
                Документы ДТП и страхования
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Материалы ДТП</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Извещение о ДТП, схема аварии, определение или постановление ГИБДД, объяснения, фото, видео и данные участников.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Страховое дело</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Полисы, акт осмотра страховой, калькуляция, направление на ремонт, выплата или решение финансового уполномоченного.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div style={{
              background: 'var(--color-white)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-gold)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0, paddingBottom: '12px', borderBottom: '1px solid rgba(23, 50, 77, 0.1)' }}>
                Ущерб и досудебная переписка
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Оценка и чеки расходов</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Отчёт независимой оценки, заказ-наряды СТО, чеки на эвакуацию, платную стоянку и расчёт утраты товарной стоимости (УТС).</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Претензии и судебные акты</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Претензия с квитанциями об отправке, ответы второй стороны, проект иска, определения суда или экспертное заключение.</span>
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

      {/* ═══ БЛОК 10: КУРАТОР ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name="Дмитрий Сергеевич Конопкин"
        position="Адвокат, председатель Коллегии адвокатов «Де-Юре»"
        imageUrl="/images/konopkin.jpg"
        imagePosition="center 5%"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Дмитрий Конопкин ведёт автомобильные споры: разделяет страховую и гражданско-правовую ответственность, проверяет доказательства ущерба и формирует позицию для переговоров и суда.
          </span>,
          <ul key="2" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>
                Юридическая практика с 2016 года; опыт следственной работы помогает детально анализировать материалы ДТП, расчётов страховых компаний и экспертиз.
              </span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>
                Защищает интересы потерпевших по взысканию реального ущерба без износа, а также представляет интересы автовладельцев при защите от завышенных требований.
              </span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>
                Консультирует и ведёт дела в Липецке и Липецкой области, а также дистанционно по всей России.
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

      {/* ═══ БЛОК 11: КЕЙСЫ ═══ */}
      <CasesBlock
        title="Примеры дел из практики"
        showAllLink="/praktika/"
        showAllText="Смотреть все дела"
        showDemoWarning={true}
        cases={cases}
      />

      {/* ═══ БЛОК 12: ПРОЦЕСС РАБОТЫ ═══ */}
      <ProcessBlock
        title="Как проходит работа"
        subtitle="Прозрачные этапы ведения дела от первой консультации до исполнения решения суда."
        alignTitle="left"
        steps={[
          {
            num: '01',
            title: 'Получаем материалы дела',
            desc: 'Принимаем документы ДТП, страховое дело, калькуляцию ущерба и сведения о статусе предполагаемого ответчика.'
          },
          {
            num: '02',
            title: 'Разделяем обязательства',
            desc: 'Отделяем обязательство страховщика от деликтного требования к причинителю, проверяем состав ответчиков и доказательства.'
          },
          {
            num: '03',
            title: 'Согласуем стратегию и цену',
            desc: 'Определяем план действий, объём юридической помощи, фиксируем стоимость и необходимость привлечения эксперта.'
          },
          {
            num: '04',
            title: 'Ведём досудебную и судебную работу',
            desc: 'Проводим переговоры, направляем претензию, готовим иск в суд, сопровождаем судебную экспертизу и заседания.'
          },
          {
            num: '05',
            title: 'Сопровождаем исполнение',
            desc: 'После вступления решения в силу получаем исполнительный документ и передаём его в банк или службу судебных приставов.'
          }
        ]}
        ctaTitle="Готовы разобрать вашу ситуацию"
        ctaSubtitle="Опишите обстоятельства аварии и размер ущерба — адвокат изучит документы и предложит понятный план действий."
        ctaButtonText="Обсудить взыскание"
        ctaButtonHref="#form"
        footerNote="Для оценки перспектив дела понадобятся: документы ГИБДД, сведения о страховой выплате и отчёт об оценке ущерба. Возможен дистанционный формат работы."
      />

      {/* ═══ БЛОК 13: СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость юридической помощи"
        subtitle="Стоимость зависит от числа ответчиков, состава требований и стадии спора."
        tiers={[
          {
            title: 'Анализ и маршрут',
            subtitle: 'Первичная правовая оценка документов',
            price: 'от 5 000 ₽',
            features: [
              { name: 'Проверка страховой выплаты и лимита ОСАГО', value: '✓' },
              { name: 'Определение надлежащего ответчика', value: '✓' },
              { name: 'Расчёт непокрытой разницы и ущерба', value: '✓' },
              { name: 'Письменный план действий автоюриста', value: '✓' }
            ],
            buttonText: 'Получить оценку',
            buttonHref: '#form'
          },
          {
            title: 'Претензия или соглашение',
            subtitle: 'Досудебное урегулирование с причинителем',
            price: 'от 10 000 ₽',
            popular: true,
            badgeText: 'Популярно',
            features: [
              { name: 'Формирование доказательственной базы', value: '✓' },
              { name: 'Подготовка мотивированной претензии', value: '✓' },
              { name: 'Составление соглашения о добровольной выплате', value: '✓' },
              { name: 'Ведение переговоров с ответчиком', value: '✓' }
            ],
            buttonText: 'Заказать услугу',
            buttonHref: '#form'
          },
          {
            title: 'Судебное представительство',
            subtitle: 'Полное ведение дела в суде под ключ',
            price: 'от 25 000 ₽',
            features: [
              { name: 'Подготовка и подача искового заявления', value: '✓' },
              { name: 'Участие адвоката во всех судебных заседаниях', value: '✓' },
              { name: 'Постановка вопросов и сопровождение экспертизы', value: '✓' },
              { name: 'Получение решения суда и исполнительного листа', value: '✓' }
            ],
            buttonText: 'Судебная защита',
            buttonHref: '#form'
          }
        ]}
        disclaimer={
          <>
            <span style={{ display: 'inline-block' }}>Сначала проверим страховую часть, ответчика, доказательства и сумму. После этого зафиксируем объём работы в договоре.</span> <br className="hidden-mobile" />
            <span style={{ display: 'inline-block' }}>Экспертиза, оценка, госпошлина, почтовые, нотариальные и иные внешние расходы согласуются отдельно.</span>
          </>
        }
      />

      {/* ═══ БЛОК 14: FAQ ═══ */}
      <FAQBlock
        superTitle="Частые вопросы"
        title="Ответы на вопросы о взыскании ущерба"
        subtitle="Разъяснения адвоката Дмитрия Конопкина по вопросам взыскания разницы с виновника ДТП и защиты ответчиков"
        ctaText="Задать свой вопрос"
        ctaLink="#form"
        faqs={faqs}
      />

      {/* ═══ БЛОК 15: ДРУГИЕ АВТОМОБИЛЬНЫЕ СИТУАЦИИ ═══ */}
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
          
          <div className="grid grid-4" style={{ gap: '20px' }}>
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
                  <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.45 }}>
                    Если проблема заключается в недоплате или отказе страховщика.
                  </p>
                </div>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontSize: '13px', fontWeight: 600, marginTop: '16px' }}>
                  <span>Подробнее</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
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
                  <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.45 }}>
                    Если ответственность виновника вообще не застрахована.
                  </p>
                </div>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontSize: '13px', fontWeight: 600, marginTop: '16px' }}>
                  <span>Подробнее</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
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
                  <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.45 }}>
                    Если сначала нужно установить обстоятельства и распределение вины.
                  </p>
                </div>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontSize: '13px', fontWeight: 600, marginTop: '16px' }}>
                  <span>Подробнее</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
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
                  <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.45 }}>
                    Если требование основано на договоре добровольного страхования.
                  </p>
                </div>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontSize: '13px', fontWeight: 600, marginTop: '16px' }}>
                  <span>Подробнее</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>
            </Link>
          </div>

          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <Link 
              href="/grazhdanam/avtoyurist/" 
              className="all-services-link"
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px', 
                color: 'var(--color-primary)', 
                fontWeight: 600, 
                fontSize: '15px', 
                textDecoration: 'none',
                transition: 'color 0.2s'
              }}
            >
              <span>Все направления помощи автоюриста</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 16: ФИНАЛЬНАЯ ФОРМА ═══ */}
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
                Проверим, с кого и какую сумму можно требовать
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
