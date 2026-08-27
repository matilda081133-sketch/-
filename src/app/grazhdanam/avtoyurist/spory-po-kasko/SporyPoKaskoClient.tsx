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

export default function SporyPoKaskoClient() {
  const cases: CaseData[] = [
    {
      category: 'Отказ / Исключение из правил',
      title: 'Страховой отказ после ДТП',
      problem: 'Страховщик сослался на исключение из правил страхования и отказал в возмещении повреждений автомобиля после аварии.',
      action: 'Проверили редакцию правил, обстоятельства события и доказательства, подготовили мотивированное требование и прошли обязательную досудебную стадию.',
      result: 'Отказ пересмотрен; клиент получил страховое возмещение в форме и размере, установленных по итогам рассмотрения.'
    },
    {
      category: 'Недоплата / Расчёт ремонта',
      title: 'Доплата по расчёту ремонта',
      problem: 'Выплата не учитывала часть скрытых повреждений и необходимых ремонтных работ, предусмотренных договором КАСКО.',
      action: 'Сопоставили акт осмотра и калькуляцию с материалами события, организовали специальную независимую оценку и предъявили обоснованные требования.',
      result: 'Страховщик произвёл доплату и возместил подтверждённые расходы в признанном размере.'
    },
    {
      category: 'Тотал / Годные остатки',
      title: 'Перерасчёт при полной гибели',
      problem: 'Из выплаты за тотальную гибель автомобиля вычли спорную стоимость предшествующих повреждений и завышенную стоимость годных остатков.',
      action: 'Проверили условия полиса, хронологию повреждений, расчёт страховой суммы и выбранный клиентом вариант распоряжения остатками.',
      result: 'Расчёт скорректирован; клиент получил дополнительное возмещение. Детали публикуются по реально подтверждённому делу.'
    }
  ];

  const faqs = [
    {
      q: 'Страховая отказала в выплате по КАСКО. Что делать?',
      a: 'Получите письменный отказ, сохраните полис и правила нужной редакции, заявление и доказательства события. Основание нужно сопоставить с договором и фактами, после чего определяется содержание заявления страховщику.'
    },
    {
      q: 'Все ли условия правил КАСКО обязательны?',
      a: 'Проверяется ссылка на правила в полисе, их предоставление страхователю, редакция и согласование условий. Одного упоминания пункта в отказе недостаточно для оценки.'
    },
    {
      q: 'Можно ли сразу обратиться в суд?',
      a: 'Если спор потребительский и подпадает под компетенцию финансового уполномоченного, сначала необходимы обращение к страховщику и досудебное рассмотрение. При сумме свыше установленного лимита или ином статусе маршрут может отличаться.'
    },
    {
      q: 'Когда нужна независимая экспертиза?',
      a: 'Когда требуются специальные знания о повреждениях, стоимости ремонта, качестве работ, полной гибели или остатках. Момент и вопросы эксперту определяются после проверки осмотра и условий договора.'
    },
    {
      q: 'Что делать, если ремонт по КАСКО затягивается?',
      a: 'Сохраните направление, документы СТО, даты передачи автомобиля и переписку. Срок и ответственный за нарушение определяются по договору, правилам и фактической организации ремонта.'
    },
    {
      q: 'Как рассчитывают выплату при полной гибели?',
      a: 'Проверяются страховая сумма, предусмотренная амортизация, критерий полной гибели, предшествующие повреждения и судьба годных остатков. Универсальной формулы для всех полисов нет.'
    },
    {
      q: 'Может ли отсутствие второго ключа повлечь отказ при угоне?',
      a: 'Нужно изучить условия договора, обстоятельства утраты ключа, действия страхователя и правовые основания отказа. Сам по себе бытовой факт нельзя оценить без договора и доказательств.'
    },
    {
      q: 'Можно ли поручить весь спор юристу?',
      a: 'Да. Объём может включать требования страховщику, финансового уполномоченного, экспертизу и суд. Полномочия, участие клиента и внешние расходы фиксируются в договоре.'
    }
  ];

  const relatedServices = [
    {
      title: 'Споры по ОСАГО',
      desc: 'Помощь при отказе, занижении выплаты или затягивании ремонта по обязательному страхованию автогражданской ответственности.',
      link: '/grazhdanam/avtoyurist/spory-po-osago/'
    },
    {
      title: 'Взыскание ущерба с виновника ДТП',
      desc: 'Взыскание разницы сверх лимита страховки, износа деталей или полного ущерба при отсутствии у виновника полиса.',
      link: '/grazhdanam/avtoyurist/vzyskanie-ushcherba-s-vinovnika-dtp/'
    },
    {
      title: 'Оспаривание вины в ДТП',
      desc: 'Защита при спорных обстоятельствах аварии, обоюдной вине или необоснованном обвинении по материалам ГИБДД.',
      link: '/grazhdanam/avtoyurist/osparivanie-viny-v-dtp/'
    },
    {
      title: 'Автоюрист в Липецке',
      desc: 'Комплексная юридическая помощь водителям: лишение прав, оставление места ДТП, споры с автосалонами и дорожными службами.',
      link: '/grazhdanam/avtoyurist/'
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
            <span>Споры по КАСКО</span>
          </>
        }
        superTitle="Автомобильные споры"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Споры по КАСКО
            </span>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', lineHeight: 1.6 }}>
            <span style={{ display: 'inline-block' }}>Если страховая отказала, занизила возмещение или нарушила</span> <br className="hidden-mobile" />
            <span style={{ display: 'inline-block' }}>условия ремонта, проверим полис, правила и материалы события,</span> <br className="hidden-mobile" />
            <span style={{ display: 'inline-block' }}>определим досудебный маршрут и подготовим требования.</span>
          </span>
        }
        primaryCtaText="Проверить отказ или расчёт"
        primaryCtaLink="#form"
        primaryCtaAnalytics="cta_click"
        primaryCtaSubtext={
          <>
            <span style={{ display: 'inline-block' }}>Для первичной оценки нужны полис, действовавшая редакция правил</span> <br className="hidden-mobile" />
            <span style={{ display: 'inline-block' }}>и&nbsp;письменное решение страховщика: <a href="tel:+79103503111" data-analytics="phone_click">+7 (910) 350-31-11</a></span>
          </>
        }
        trustItems={[
          { text: 'Проверим риски, исключения и обязанности по Вашей программе' },
          { text: 'Сопоставим основание отказа или расчёта с документами' },
          { text: 'Сопроводим претензию, финансового уполномоченного и суд' }
        ]}
        imageUrl="/images/konopkin.jpg"
        imageName="Дмитрий Сергеевич Конопкин"
        imageSubtitle="Адвокат, председатель Коллегии адвокатов «Де-Юре»"
        imageObjectPosition="center 25%"
      />

      {/* ═══ БЛОК 2: С КАКИМИ СПОРАМИ ОБРАЩАЮТСЯ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Проверяем не только отказ,</span> <br />
              <span style={{ display: 'inline-block' }}>но и исполнение договора</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>В отличие от ОСАГО, правила КАСКО определяются конкретной программой страхования.</span> <br className="hidden-mobile" />
              <span style={{ display: 'inline-block' }}>Помогаем разобраться в условиях полиса, обоснованности позиции страховщика и защитить Ваши права.</span>
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '32px' }}>
            {[
              {
                tag: 'Отказ',
                title: 'Отказ в страховом возмещении',
                desc: 'Страховщик ссылается на исключение, нарушение обязанностей, недостоверные сведения, отсутствие документов или нестраховой характер события.'
              },
              {
                tag: 'Недоплата',
                title: 'Заниженная выплата',
                desc: 'Не учтены повреждения или работы, применён спорный износ, амортизация, франшиза или иной порядок расчёта.'
              },
              {
                tag: 'Ремонт',
                title: 'Проблемы с ремонтом',
                desc: 'Не выдают направление, СТО требует доплату, ремонт затягивается, объём не согласован или результат некачественный.'
              },
              {
                tag: 'Тотал',
                title: 'Полная гибель автомобиля',
                desc: 'Спор касается критерия «тотала», страховой суммы, амортизации, предшествующих повреждений или стоимости годных остатков.'
              },
              {
                tag: 'Угон',
                title: 'Угон или хищение',
                desc: 'Оспариваются обстоятельства события, комплект ключей и документов, сроки уведомления, выгодоприобретатель или порядок выплаты.'
              },
              {
                tag: 'Сроки',
                title: 'Нарушение срока',
                desc: 'Страховщик не принимает решение или не исполняет признанное обязательство в срок, определённый договором и правилами.'
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
                {/* Фоновый векторный водяной знак */}
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

          {/* Плашка CTA с тенью */}
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
            <p style={{ margin: 0, fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.6, maxWidth: '720px' }}>
              <strong>Не уверены, относится ли ситуация к этой услуге?</strong> Опишите, какое решение принято страховой компанией, — юрист изучит документы и подскажет порядок действий.
            </p>
            <a href="#form" className="btn btn-primary" style={{ padding: '12px 24px', fontSize: '14px', whiteSpace: 'nowrap' }}>
              Проверить ситуацию
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: ВАРИАНТЫ РЕШЕНИЯ И МАРШРУТЫ СПОРА ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Варианты решения</span> <br />
              <span style={{ display: 'inline-block' }}>и маршруты спора</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Маршрут защиты зависит от текущей стадии, размера требований и статуса страхователя.</span> <br />
              <span style={{ display: 'inline-block' }}>Определяем необходимый порядок действий: доукомплектование, претензия, финансовый уполномоченный или суд.</span>
            </p>
          </div>

          {/* Темно-синяя карточка-навигатор: 3 этапа стратегии спора */}
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
                  3 этапа стратегии спора
                </h3>
              </div>
              <div style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.75)', maxWidth: '480px', lineHeight: 1.55 }}>
                <span style={{ display: 'block' }}>Позволяет безошибочно определить порядок действий:</span>
                <span style={{ display: 'block' }}>доукомплектование, претензия страховщику, омбудсмен или иск.</span>
              </div>
            </div>

            <div className="grid grid-3" style={{ gap: '16px', position: 'relative', zIndex: 1 }}>
              {/* Шаг 1 */}
              <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '22px 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <h4 style={{ fontSize: '16.5px', color: '#FFFFFF', margin: 0, fontWeight: 600, lineHeight: 1.35, display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', flexShrink: 0 }}>01</span>
                  <span>
                    <span style={{ display: 'block' }}>Сохраняем договор</span>
                    <span style={{ display: 'block' }}>и доказательства</span>
                  </span>
                </h4>
                <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5, margin: 0 }}>
                  Полис нужной редакции, заявление о страховом случае, документы органов (ГИБДД/МВД/МЧС) и письменное решение страховщика.
                </p>
              </div>

              {/* Шаг 2 */}
              <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '22px 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <h4 style={{ fontSize: '16.5px', color: '#FFFFFF', margin: 0, fontWeight: 600, lineHeight: 1.35, display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', flexShrink: 0 }}>02</span>
                  <span>
                    <span style={{ display: 'block' }}>Сопоставляем правила</span>
                    <span style={{ display: 'block' }}>со статьёй 943 ГК РФ</span>
                  </span>
                </h4>
                <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5, margin: 0 }}>
                  Проверяем законность исключений, франшизы, методики расчёта ущерба, амортизации и условий признания «тотала».
                </p>
              </div>

              {/* Шаг 3 */}
              <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '22px 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <h4 style={{ fontSize: '16.5px', color: '#FFFFFF', margin: 0, fontWeight: 600, lineHeight: 1.35, display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', flexShrink: 0 }}>03</span>
                  <span>
                    <span style={{ display: 'block' }}>Выбираем маршрут</span>
                    <span style={{ display: 'block' }}>по стадии спора</span>
                  </span>
                </h4>
                <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5, margin: 0 }}>
                  Претензия страховщику, обращение к финансовому уполномоченному (до 500 000 ₽) или исковое заявление в суд.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-2" style={{ gap: '28px', marginBottom: '32px' }}>
            {/* Карточка 1: Досудебный маршрут */}
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
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.3 }}>
                  <span style={{ display: 'block' }}>Досудебное урегулирование</span>
                  <span style={{ display: 'block' }}>(Страховщик / Омбудсмен)</span>
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Обязательный порядок для потребителей финансовых услуг при отказе, занижении выплаты или нарушении сроков ремонта.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Доукомплектование и фиксация позиции</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Направляем недостающие документы страховщику и согласовываем осмотр без преждевременного конфликта.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Претензия страховщику (заявление о нарушении)</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Составляем мотивированное досудебное требование со ссылками на договор, правила КАСКО и доказательства.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Обращение к финансовому уполномоченному</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Направляем заявление в службу омбудсмена при требованиях до 500 000 ₽, участвуем в рассмотрении.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Исполнение решения или фиксация отказа</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Контролируем выплату возмещения либо фиксируем решение омбудсмена для последующего обращения в суд.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Карточка 2: Судебный спор и экспертиза */}
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
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.3 }}>
                  <span style={{ display: 'block' }}>Судебная защита и автоэкспертиза</span>
                  <span style={{ display: 'block' }}>(Суд / Экспертиза)</span>
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Применяется при сумме требований свыше 500 000 ₽, несогласии с решением омбудсмена или уклонении страховщика.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Исковое заявление и процессуальные сроки</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Составляем иск с соблюдением обязательного досудебного порядка, расчётом неустойки и штрафа.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Судебная автотехническая экспертиза</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Ставим перед экспертом вопросы о механизме повреждений, стоимости ремонта, тотале и годных остатках.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Оспаривание позиции страховщика</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Исключаем заниженные нормо-часы, необоснованную амортизацию и доказываем наступление страхового случая.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Взыскание возмещения, штрафа и расходов</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Добиваемся выплаты страхового возмещения, 50% штрафа по ЗоЗПП, неустойки и всех судебных издержек.</span>
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
            <strong style={{ color: 'var(--color-primary)' }}>Правовая рамка:</strong> Правила страхования становятся частью договора при соблюдении требований статьи 943 ГК РФ. Для каждого дела проверяются полис, приложения, действовавшая редакция правил и подтверждение их вручения страхователю. Для требований потребителей по КАСКО лимит рассмотрения финансовым уполномоченным составляет не более 500 000 рублей.
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#form" className="btn btn-primary" style={{ display: 'inline-block', padding: '14px 32px' }}>
              Оценить перспективу спора
            </a>
          </div>

        </div>
      </section>

      {/* ═══ БЛОК 4: ЧТО СДЕЛАЕТ ЮРИСТ ПО СПОРАМ ПО КАСКО ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Что сделает юрист</span> <br />
              <span style={{ display: 'inline-block' }}>по спорам по КАСКО</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Полный цикл процессуальных действий — от правового анализа полиса и правил</span> <br className="hidden-mobile" />
              <span style={{ display: 'inline-block' }}>до фактического получения страхового возмещения или качественного ремонта.</span>
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '40px' }}>
            {[
              {
                num: '01',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Восстановит</span>
                    <span style={{ display: 'block' }}>договорную картину</span>
                  </>
                ),
                desc: 'Соберёт полис, приложения, правила нужной редакции, заявление о страховом случае и решение страховщика.'
              },
              {
                num: '02',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Проверит отказ</span>
                    <span style={{ display: 'block' }}>или расчёт</span>
                  </>
                ),
                desc: 'Сопоставит формулировки договора с фактами, доказательствами, причинной связью и применимыми нормами права.'
              },
              {
                num: '03',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Определит</span>
                    <span style={{ display: 'block' }}>доказательства</span>
                  </>
                ),
                desc: 'Оценит необходимость осмотра, независимой экспертизы, запроса страхового дела, документов органов и материалов СТО.'
              },
              {
                num: '04',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Подготовит</span>
                    <span style={{ display: 'block' }}>требования</span>
                  </>
                ),
                desc: 'Составит заявление страховщику, обращение финансовому уполномоченному, возражения, иск и иные процессуальные документы.'
              },
              {
                num: '05',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Представит</span>
                    <span style={{ display: 'block' }}>интересы</span>
                  </>
                ),
                desc: 'Организует взаимодействие со страховой компанией, экспертом, финансовым уполномоченным и судом в согласованном объёме.'
              },
              {
                num: '06',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Разделит</span>
                    <span style={{ display: 'block' }}>требования</span>
                  </>
                ),
                desc: 'Отделит спор по КАСКО от ОСАГО, требования к виновнику ДТП, автосервису, банку или лизинговой компании.'
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
          <div className="grid grid-2" style={{ gap: '28px' }}>
            {/* Карточка 1: Входит в юридическую помощь */}
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
                <span style={{ display: 'inline-block' }}>Входит в юридическую помощь</span>
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {[
                  { title: 'Анализ полиса, правил и страхового дела', desc: 'Изучение условий договора, действовавшей редакции правил страхования и письменного решения страховщика.' },
                  { title: 'Выработка правовой позиции', desc: 'Определение законности отказа или расчёта, оценка рисков и выбор наиболее эффективного процессуального маршрута.' },
                  { title: 'Подготовка претензии страховщику', desc: 'Составление мотивированного досудебного требования со ссылками на закон, правила КАСКО и доказательства.' },
                  { title: 'Обращение к финансовому уполномоченному', desc: 'Формирование полного комплекта документов и процессуальное сопровождение спора в службе омбудсмена.' },
                  { title: 'Подготовка иска и представительство в суде', desc: 'Ведение судебного процесса в согласованном объёме — от подачи иска до получения судебного решения.' }
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <polyline points="9 11 12 14 22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                    <div>
                      <strong style={{ display: 'block', fontSize: '15.5px', color: 'var(--color-deep-blue)', marginBottom: '3px' }}>{item.title}</strong>
                      <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Карточка 2: Оценивается отдельно */}
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
                <span style={{ display: 'inline-block' }}>Оценивается отдельно</span>
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {[
                  { title: 'Независимая экспертиза и оценка', desc: 'Проведение независимой автотехнической экспертизы, расчёт стоимости восстановительного ремонта и годных остатков.' },
                  { title: 'Судебные пошлины и почтовые расходы', desc: 'Госпошлина за рассмотрение дела в суде, оплата услуг почты и обязательные процессуальные издержки.' },
                  { title: 'Требования к виновнику аварии или СТО', desc: 'Взыскание ущерба сверх лимитов или претензии к станции техобслуживания как к самостоятельному ответчику.' },
                  { title: 'Споры с банками и лизинговыми компаниями', desc: 'Урегулирование правовых вопросов с залогодержателями, банками и лизингодателями при кредитных авто.' }
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <div>
                      <strong style={{ display: 'block', fontSize: '15.5px', color: 'var(--color-deep-blue)', marginBottom: '3px' }}>{item.title}</strong>
                      <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* ═══ БЛОК 5: ДОКУМЕНТЫ ДЛЯ ПЕРВИЧНОЙ ОЦЕНКИ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Документы для оценки спора</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Чем полнее комплект документов, тем точнее юрист определит правовые перспективы и процессуальный порядок.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {[
              {
                title: 'Договор страхования',
                desc: 'Полис КАСКО, приложения и дополнительные соглашения, правила страхования нужной редакции, квитанции об оплате премии, кредитный/залоговый договор (при наличии).'
              },
              {
                title: 'Документы о событии',
                desc: 'Заявление о страховом случае, документы ГИБДД / МВД / МЧС по ситуации, фото- и видеоматериалы, данные о ключах, охранных системах и участниках.'
              },
              {
                title: 'Решение страховщика',
                desc: 'Запросы документов, акт осмотра, калькуляция ущерба, направление на ремонт, письменный отказ, проект соглашения или выписка о выплате.'
              },
              {
                title: 'Ремонт или полная гибель',
                desc: 'Документы СТО, заказ-наряды, акты приёмки, переписка с сервисом, расчёт стоимости годных остатков и соглашение об их передаче.'
              },
              {
                title: 'Досудебная стадия',
                desc: 'Заявление (претензия) о нарушении права, почтовая квитанция об отправке, ответ страховщика, обращение и решение финансового уполномоченного.'
              }
            ].map((item, idx) => (
              <div key={idx} style={{
                padding: '24px',
                background: 'var(--color-white)',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-primary)',
                boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 700, color: 'var(--color-deep-blue)' }}>{item.title}</h3>
                <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 6: КУРАТОР НАПРАВЛЕНИЯ ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name="Дмитрий Сергеевич Конопкин"
        position="Адвокат, председатель Коллегии адвокатов «Де-Юре»"
        imageUrl="/images/konopkin.jpg"
        imagePosition="center 25%"
        description={[
          'Юридическая практика с 2016 года; опыт следственной работы помогает детально анализировать материалы происшествий, договоры и позиции страховых компаний.',
          'Специализируется на автомобильных и страховых спорах: споры по КАСКО и ОСАГО, отказ в выплате, некачественный ремонт, полная гибель автомобиля и защита при обвинении в ДТП.',
          'Оценивает буквальное содержание полиса и правил страхования, выстраивает мотивированную позицию для претензии, службы финансового уполномоченного и суда.',
          'Защищает интересы автовладельцев в Липецке и Липецкой области, а также ведет дела дистанционно по всей России.'
        ]}
        buttonText="Обсудить спор по КАСКО с Дмитрием Сергеевичем"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 7: КЕЙСЫ ═══ */}
      <CasesBlock
        title="Примеры дел по страховым спорам"
        showAllLink="/praktika/"
        showAllText="Смотреть всю практику"
        showDemoWarning={true}
        cases={cases}
      />

      {/* ═══ БЛОК 8: КАК ПРОХОДИТ РАБОТА ═══ */}
      <ProcessBlock
        title="Как проходит работа"
        subtitle="Работаем структурированно — вы знаете, что происходит на каждом этапе разрешения спора."
        alignTitle="left"
        steps={[
          { num: '01', title: 'Изучаем полис и документы', desc: 'Получаем полис КАСКО, редакцию правил, заявление, решение страховщика и доказательства события.' },
          { num: '02', title: 'Определяем правовой маршрут', desc: 'Оцениваем статус заявителя, предмет спора, договорные обязанности, сроки и обязательный досудебный порядок.' },
          { num: '03', title: 'Согласуем стратегию и стоимость', desc: 'Предлагаем план действий, определяем объём работы, фиксируем цену и необходимость внешнего эксперта.' },
          { num: '04', title: 'Готовим требования и сопровождаем', desc: 'Направляем претензию в страховую, заявление финансовому уполномоченному, организуем экспертизу и ведём дело в суде.' },
          { num: '05', title: 'Добиваемся исполнения', desc: 'Контролируем выплату страхового возмещения, доплаты, исполнение решения суда или получение качественного ремонта.' }
        ]}
        ctaTitle="Готовы обсудить вашу ситуацию со страховой"
        ctaSubtitle="Опишите спор — юрист изучит документы и предложит обоснованный план действий."
        ctaButtonText="Обсудить спор по КАСКО"
        ctaButtonHref="#form"
        footerNote="Для оценки ситуации понадобятся: полис КАСКО, действовавшая редакция правил, письменное решение страховой (отказ или калькуляция) и документы о событии. Возможен дистанционный формат работы."
      />

      {/* ═══ БЛОК 9: СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость юридической помощи"
        subtitle="Сначала изучим полис, правила, решение страховщика и уже пройденные стадии. Затем определим объём работы и зафиксируем цену."
        tiers={[
          {
            title: 'Форматы работы',
            subtitle: 'По спорам со страховыми компаниями по КАСКО',
            features: [
              { name: 'Разовая правовая оценка отказа или расчёта страховой', value: '[уточняется]' },
              { name: 'Подготовка досудебного заявления страховщику / претензии', value: '[уточняется]' },
              { name: 'Подготовка обращения финансовому уполномоченному', value: '[уточняется]' },
              { name: 'Комплексное ведение дела в суде по спору с КАСКО', value: '[уточняется]' }
            ],
            buttonText: 'Узнать стоимость по документам',
            buttonHref: '#form'
          }
        ]}
        disclaimer="Стоимость определяется после изучения полиса, правил страхования и письменного решения страховщика. Состав услуг, цена и порядок оплаты фиксируются в договоре до начала работы. Оплата услуг исполнителя не включает расходы на независимую экспертизу, государственные пошлины и почтовые отправления."
      />

      {/* ═══ БЛОК 10: ЧАСТЫЕ ВОПРОСЫ ═══ */}
      <FAQBlock
        superTitle="Частые вопросы"
        title={<><span>Ответы на вопросы</span> <br /><span>по спорам по КАСКО</span></>}
        subtitle="О правилах, отказе, занижении выплаты и досудебном порядке"
        ctaText="Задать вопрос юристу"
        ctaLink="#form"
        faqs={faqs}
      />

      {/* ═══ БЛОК 11: ДРУГИЕ АВТОМОБИЛЬНЫЕ СИТУАЦИИ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Другие автомобильные ситуации</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Если Ваш вопрос связан с другими обстоятельствами ДТП или обязательным страхованием:
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '20px' }}>
            {relatedServices.map((srv, idx) => (
              <Link key={idx} href={srv.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="hover-lift" style={{
                  padding: '28px',
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  borderLeft: '4px solid var(--color-primary)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '12px'
                }}>
                  <div>
                    <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)' }}>
                      {srv.title}
                    </h3>
                    <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                      {srv.desc}
                    </p>
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    Подробнее →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 12: ФИНАЛЬНАЯ ФОРМА ═══ */}
      <section id="form" className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <ContactsForm
            title="Проверим полис и решение страховой"
            subtitle="Оставьте номер телефона и кратко укажите: событие, страховую компанию, получен ли письменный отказ или расчёт и обращались ли Вы к финансовому уполномоченному."
            buttonText="Обсудить спор по КАСКО"
            hiddenFields={[{ name: 'page_context', value: 'CIV-10-04 / Споры по КАСКО' }]}
            subtext="Нажимая кнопку, вы соглашаетесь на обработку персональных данных в соответствии с политикой конфиденциальности. Данные полиса и документов согласовываются по безопасному каналу."
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
