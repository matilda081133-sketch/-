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
import PricingBlock, { PricingTier } from '@/components/PricingBlock';
import ProcessBlock from '@/components/ProcessBlock';

export default function OstavlenieMestaDtpClient() {
  const cases: CaseData[] = [
    {
      category: 'Мировой суд / Оценка умысла',
      title: 'Отсутствие доказанного умысла после перемещения автомобиля',
      problem: 'Водитель после лёгкого контакта остановился в нескольких метрах, чтобы не перекрывать движение, и оставался рядом. Вменили ст. 12.27 ч. 2 КоАП РФ.',
      action: 'Исследовали видеозапись, место остановки, действия водителя, объяснения второго участника и характер повреждений.',
      result: 'Суд пришёл к выводу об отсутствии умышленного оставления места происшествия и прекратил производство по ч. 2 ст. 12.27 КоАП РФ.'
    },
    {
      category: 'Парковка / Осведомлённость',
      title: 'Водитель не осознавал факт контакта на парковке',
      problem: 'Заявитель обнаружил повреждение и указал на автомобиль клиента по записи камеры. Вменили оставление места ДТП.',
      action: 'Провели оценку качества видео, траектории, габаритов, локализации и сопоставимости повреждений, уровня шума и видимости.',
      result: 'Суд согласился с доводами защиты об отсутствии доказанной осведомлённости о контакте и состава правонарушения.'
    },
    {
      category: 'Обжалование / Оценка доказательств',
      title: 'Обжалование постановления из-за неполной оценки доказательств',
      problem: 'Суд первой инстанции положил в основу решения противоречивые объяснения и не исследовал запись регистратора, назначив лишение прав.',
      action: 'Подготовили жалобу, доказали существенные процессуальные нарушения и добились приобщения и исследования видеозаписи.',
      result: 'Вышестоящий суд отменил постановление и направил дело на новое рассмотрение для всесторонней оценки доказательств.'
    }
  ];

  const faqs = [
    {
      q: 'Что считается оставлением места ДТП?',
      a: 'Это умышленное оставление водителем в нарушение ПДД места происшествия, участником которого он являлся, до надлежащего оформления. Для квалификации проверяются конкретные факты, а не только то, что автомобиль переместился.'
    },
    {
      q: 'Что грозит по части 2 статьи 12.27 КоАП РФ?',
      a: 'По редакции, проверенной 11 августа 2026 года, предусмотрено лишение права управления на срок от одного года до полутора лет либо административный арест до пятнадцати суток. Норму необходимо проверять по актуальной редакции закона.'
    },
    {
      q: 'Если я не заметил ДТП, могут ли лишить прав?',
      a: 'Умышленная форма вины является обязательным элементом состава. Однако одного заявления «не заметил» недостаточно: оцениваются повреждения, характер контакта, обзор, шум, габариты автомобиля, видео, показания и действия водителя.'
    },
    {
      q: 'Можно ли отъехать, чтобы освободить дорогу?',
      a: 'ПДД в определённых случаях обязывают освободить проезжую часть, предварительно зафиксировав положение автомобилей, следы и повреждения. Важно отличать необходимое перемещение от фактического ухода от оформления.'
    },
    {
      q: 'Можно ли уехать, если второй участник не имеет претензий?',
      a: 'Только отсутствие претензий не заменяет предусмотренный законом порядок оформления. Оставить место можно, когда выполнены условия оформления без полиции либо получены соответствующие указания сотрудника полиции.'
    },
    {
      q: 'Что делать, если вызвали в ГИБДД?',
      a: 'Уточните подразделение, должностное лицо, номер материала и свой процессуальный статус. Получите юридическую консультацию до подробных объяснений, сохраните доказательства и не игнорируйте вызов.'
    },
    {
      q: 'Поможет ли возвращение на место ДТП?',
      a: 'Возвращение и последующие действия учитываются вместе с другими обстоятельствами, но не гарантируют отсутствия состава. Важны время, причины отъезда, сохранение доказательств и поведение участника.'
    },
    {
      q: 'Можно ли заменить лишение штрафом?',
      a: 'Часть 2 статьи 12.27 КоАП РФ не предусматривает штраф как альтернативную санкцию. Защита не должна строиться на обещании такой замены. Возможная переквалификация зависит от установленных фактов и правовой оценки.'
    },
    {
      q: 'Если постановление уже вынесено, сколько времени на жалобу?',
      a: 'Жалоба обычно подаётся в течение десяти дней со дня вручения или получения копии постановления. Пропущенный срок может быть восстановлен при наличии оснований, которые нужно подтвердить.'
    },
    {
      q: 'Нужно ли личное участие, если есть адвокат?',
      a: 'Это зависит от стадии, позиции и решения суда. Адвокат может представлять интересы и заявлять ходатайства, но в отдельных ситуациях личные объяснения необходимы или целесообразны.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Первичный анализ документов',
      subtitle: 'Изучение протокола, видеозаписей, схемы и объяснений',
      price: 'от 5 000 ₽',
      features: [
        { name: 'Анализ события ДТП и признаков умысла', value: '✓' },
        { name: 'Проверка соблюдения процессуального порядка', value: '✓' },
        { name: 'Оценка допустимости доказательств', value: '✓' },
        { name: 'Рекомендации по дальнейшим действиям', value: '✓' }
      ],
      buttonText: 'Заказать анализ',
      buttonHref: '#form'
    },
    {
      title: 'Защита в ГИБДД и мировом суде',
      subtitle: 'Полное ведение дела: ходатайства, доказательства, заседания',
      price: 'от 25 000 ₽',
      popular: true,
      badgeText: 'Популярно',
      features: [
        { name: 'Подготовка правовой позиции и возражений', value: '✓' },
        { name: 'Истребование видеозаписей и допрос свидетелей', value: '✓' },
        { name: 'Личное участие адвоката во всех заседаниях', value: '✓' },
        { name: 'Защита от необоснованного лишения прав', value: '✓' }
      ],
      buttonText: 'Обсудить защиту',
      buttonHref: '#form'
    },
    {
      title: 'Обжалование постановления суда',
      subtitle: 'Подготовка жалобы и представительство в вышестоящем суде',
      price: 'от 15 000 ₽',
      features: [
        { name: 'Анализ мотивировки постановления суда', value: '✓' },
        { name: 'Составление обоснованной жалобы со ссылками на ВС РФ', value: '✓' },
        { name: 'Участие в рассмотрении жалобы вышестоящим судом', value: '✓' },
        { name: 'Восстановление срока обжалования при необходимости', value: '✓' }
      ],
      buttonText: 'Подготовить жалобу',
      buttonHref: '#form'
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
            <span style={{ color: 'var(--color-text-main)' }}>Защита при оставлении места ДТП</span>
          </>
        }
        superTitle="Автомобильные споры"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Защита при оставлении
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              места ДТП в Липецке
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
                Проверим, было ли событие ДТП и доказан ли умысел на оставление места,
              </span>
              <span className="hero-sub-span-desktop" style={{ display: 'block' }}>
                изучим схему, записи камер, повреждения и объяснения,
              </span>
              <span className="hero-sub-span-desktop" style={{ display: 'block' }}>
                подготовим мотивированную позицию для ГИБДД и суда.
              </span>
            </span>
          </>
        }
        primaryCtaText="Обсудить ситуацию"
        primaryCtaLink="#form"
        primaryCtaAnalytics="cta_click"
        primaryCtaSubtext={
          <>
            <span style={{ display: 'inline-block' }}>Если Вас уже вызывают в ГИБДД или суд, сообщите дату:</span> <br className="hidden-mobile" />
            <span style={{ display: 'inline-block' }}>записи камер могут храниться ограниченное время. Звоните: <a href="tel:+79103503111" data-analytics="phone_click">+7 (910) 350-31-11</a></span>
          </>
        }
        trustItems={[
          { text: 'Подключимся до первого объяснения или судебного заседания' },
          { text: 'Зафиксируем и запросим доказательства, которые могут быть утрачены' },
          { text: 'Сразу обозначим риски — без обещаний гарантированного результата' }
        ]}
        imageUrl="/images/konopkin.jpg"
        imageName="Дмитрий Сергеевич Конопкин"
        imageSubtitle="Адвокат, председатель Коллегии адвокатов «Де-Юре»"
        imageObjectPosition="center 25%"
      />

      {/* ═══ БЛОК 2: НЕ ТЕРЯЙТЕ ДОКАЗАТЕЛЬСТВА И НЕ ФОРМИРУЙТЕ ВЕРСИЮ НАУГАД (ОБЪЕДИНЕННЫЙ БЛОК) ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                Не теряйте доказательства
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                и не формируйте версию наугад
              </span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Правильная фиксация документов и отказ от поспешных шагов сохраняют</span> <br className="hidden-mobile" />
              <span style={{ display: 'inline-block' }}>доказательственную базу для успешной правовой защиты в ГИБДД и суде.</span>
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '32px' }}>
            {[
              {
                tag: 'Хронология',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Зафиксируйте</span>
                    <span style={{ display: 'block' }}>хронологию событий</span>
                  </>
                ),
                desc: 'Запишите точный маршрут, время, место остановки, звонки, сообщения и действия сразу после события. Не редактируйте исходные файлы.'
              },
              {
                tag: 'Видеозаписи',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Сохраните запись</span>
                    <span style={{ display: 'block' }}>видеорегистратора</span>
                  </>
                ),
                desc: 'Сделайте копии записи видеорегистратора, фото автомобиля и места, сохраните данные навигации, парковки, пропускной системы и свидетелей.'
              },
              {
                tag: 'Процессуальный статус',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Уточните вызов</span>
                    <span style={{ display: 'block' }}>в ГИБДД</span>
                  </>
                ),
                desc: 'Выясните, куда и в каком качестве Вас вызывают, номер материала, дату явки или заседания. Получите копии составленных документов.'
              },
              {
                tag: 'Подписание документов',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Не подписывайте</span>
                    <span style={{ display: 'block' }}>пустые бланки</span>
                  </>
                ),
                desc: 'Не подписывайте документы, содержание которых непонятно. Замечания излагайте письменно и добивайтесь их внесения в протокол.'
              },
              {
                tag: 'Консультация',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Обсудите факты</span>
                    <span style={{ display: 'block' }}>с адвокатом</span>
                  </>
                ),
                desc: 'До подробных объяснений согласуйте позицию с защитником. Не придумывайте недостоверных версий и не уничтожайте записи.'
              },
              {
                tag: 'Особые ситуации',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Учтите специфику</span>
                    <span style={{ display: 'block' }}>происшествия</span>
                  </>
                ),
                desc: 'Касание без повреждений, освобождение дороги, парковочный контакт или доставка пострадавшего требуют отдельной правовой оценки.'
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
            borderLeft: '4px solid #C62828',
            padding: '24px 30px',
            boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)'
          }}>
            <p style={{ margin: 0, fontSize: '14.5px', color: 'var(--color-deep-blue)', lineHeight: 1.6 }}>
              <strong style={{ color: '#C62828' }}>Если люди пострадали:</strong> Окажите помощь, немедленно вызовите скорую медицинскую помощь и полицию. При возможной уголовной квалификации (тяжкий вред здоровью или гибель людей по ст. 264 УК РФ) требуется отдельная срочная защита <a href="/ugolovnye-dela/" style={{ color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>адвоката по уголовным делам</a>.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: ОТВЕТСТВЕННОСТЬ НАСТУПАЕТ НЕ ЗА ЛЮБОЙ ОТЪЕЗД (ТЕМНО-СИНЯЯ КАРТОЧКА-НАВИГАТОР + 2 КАРТОЧКИ) ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          
          <div style={{ maxWidth: '820px', marginBottom: '40px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                Ответственность наступает не за любой
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                отъезд после происшествия
              </span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Для привлечения по ч. 2 ст. 12.27 КоАП РФ суд должен установить всю совокупность юридически значимых обстоятельств,</span> <br className="hidden-mobile" />
              <span style={{ display: 'inline-block' }}>а не исходить из одного лишь факта перемещения транспортного средства.</span>
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
                  4 обязательных элемента доказывания
                </h3>
              </div>
              <div style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.75)', maxWidth: '520px', lineHeight: 1.5 }}>
                <span style={{ display: 'block' }}>Каждый элемент проверяется по материалам дела:</span>
                <span style={{ display: 'block' }}>отсутствие хотя бы одного исключает состав правонарушения.</span>
              </div>
            </div>

            <div className="grid grid-4" style={{ gap: '16px', position: 'relative', zIndex: 1 }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '22px 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <h4 style={{ fontSize: '16.5px', color: '#FFFFFF', margin: 0, fontWeight: 600, lineHeight: 1.35, display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', flexShrink: 0 }}>01</span>
                  <span>
                    <span style={{ display: 'block' }}>Событие</span>
                    <span style={{ display: 'block' }}>ДТП</span>
                  </span>
                </h4>
                <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5, margin: 0 }}>
                  Возникло в процессе движения и повлекло вред людям, повреждение авто, сооружений или материальный ущерб.
                </p>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '22px 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <h4 style={{ fontSize: '16.5px', color: '#FFFFFF', margin: 0, fontWeight: 600, lineHeight: 1.35, display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', flexShrink: 0 }}>02</span>
                  <span>
                    <span style={{ display: 'block' }}>Причастность</span>
                    <span style={{ display: 'block' }}>водителя</span>
                  </span>
                </h4>
                <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5, margin: 0 }}>
                  Устанавливается прямая связь между действиями водителя и происшествием (в том числе при бесконтактном ДТП).
                </p>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '22px 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <h4 style={{ fontSize: '16.5px', color: '#FFFFFF', margin: 0, fontWeight: 600, lineHeight: 1.35, display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', flexShrink: 0 }}>03</span>
                  <span>
                    <span style={{ display: 'block' }}>Порядок</span>
                    <span style={{ display: 'block' }}>оформления</span>
                  </span>
                </h4>
                <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5, margin: 0 }}>
                  Проверяется право освободить проезжую часть, оформить происшествие без полиции или следовать указаниям МВД.
                </p>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '22px 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <h4 style={{ fontSize: '16.5px', color: '#FFFFFF', margin: 0, fontWeight: 600, lineHeight: 1.35, display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', flexShrink: 0 }}>04</span>
                  <span>
                    <span style={{ display: 'block' }}>Умышленная</span>
                    <span style={{ display: 'block' }}>форма вины</span>
                  </span>
                </h4>
                <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5, margin: 0 }}>
                  Осознавал ли водитель факт ДТП и желал ли умышленно скрыться от оформления. Умысел нельзя предполагать.
                </p>
              </div>
            </div>
          </div>

          {/* 2 КРУПНЫЕ КАРТОЧКИ */}
          <div className="grid grid-2" style={{ gap: '28px', marginBottom: '32px' }}>
            
            {/* Карточка 1: Что исследует суд и защитник */}
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
                  <span style={{ display: 'inline-block' }}>Что исследует адвокат</span>{' '}
                  <span style={{ display: 'inline-block' }}>при проверке умысла</span>
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                <span style={{ display: 'inline-block' }}>Сопоставляем объективные данные для исключения</span>{' '}
                <span style={{ display: 'inline-block' }}>необоснованного обвинения в умышленном скрытии.</span>
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px', lineHeight: 1.35 }}>
                      Характер контакта и повреждения
                    </strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      Оцениваем силу удара, локализацию, уровень шума, видимость, габариты и возможность реально почувствовать касание.
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
                      Поведение водителя сразу после события
                    </strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      Проверяем остановку, осмотр автомобиля, звонки, сохранение траектории и взаимодействие с другими участниками.
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
                      Записи камер и качество видеоматериалов
                    </strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      Истребуем записи регистраторов и объектовых камер для подтверждения фактических действий водителя на месте.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Карточка 2: Основания прекращения дела */}
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
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.3 }}>
                  <span style={{ display: 'inline-block' }}>Основания для прекращения</span>{' '}
                  <span style={{ display: 'inline-block' }}>производства по делу</span>
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                <span style={{ display: 'inline-block' }}>Правовые результаты, которых добивается защита</span>{' '}
                <span style={{ display: 'inline-block' }}>при исследовании материалов в суде.</span>
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px', lineHeight: 1.35 }}>
                      Отсутствие события или состава (ст. 24.5 КоАП РФ)
                    </strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      Доказываем отсутствие материального ущерба либо недоказанность умысла и осведомлённости о факте ДТП.
                    </span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px', lineHeight: 1.35 }}>
                      Малозначительность правонарушения (ст. 2.9 КоАП РФ)
                    </strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      При минимальных повреждениях и отсутствии вреда суд вправе ограничиться устным замечанием без лишения прав.
                    </span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px', lineHeight: 1.35 }}>
                      Исключение недопустимых доказательств
                    </strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      Оспариваем процессуальные нарушения при составлении протокола, схемы и получении первичных объяснений.
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
            <strong style={{ color: 'var(--color-primary)' }}>Правовая справка (ч. 2 ст. 12.27 КоАП РФ):</strong> Санкция статьи предусматривает лишение права управления на срок от 1 до 1.5 лет либо административный арест до 15 суток. Штраф законом не предусмотрен, поэтому защита выстраивается на доказывании отсутствия умысла, состава либо процессуальных нарушений.
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#form" className="btn btn-primary" style={{ display: 'inline-block', padding: '14px 36px' }}>
              Оценить материалы и перспективы дела
            </a>
          </div>

        </div>
      </section>

      {/* ═══ БЛОК 4: ЧТО СДЕЛАЕТ АДВОКАТ ПРИ ОБВИНЕНИИ В ОСТАВЛЕНИИ МЕСТА ДТП (КАК В ДТП БЕЗ ОСАГО) ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Что сделает адвокат</span> <br />
              <span style={{ display: 'inline-block' }}>при обвинении в оставлении места ДТП</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Полный комплекс процессуальной защиты — от срочного истребования видеозаписей</span> <br className="hidden-mobile" />
              <span style={{ display: 'inline-block' }}>до прекращения производства в суде или обжалования судебного постановления.</span>
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '48px' }}>
            {[
              {
                num: '01',
                title: (
                  <>
                    <span style={{ display: 'block' }}>До составления</span>
                    <span style={{ display: 'block' }}>протокола</span>
                  </>
                ),
                desc: 'Уточнит процессуальный статус, изучит первичные документы, поможет сохранить видеозаписи камер и подготовит позицию до дачи объяснений.'
              },
              {
                num: '02',
                title: (
                  <>
                    <span style={{ display: 'block' }}>При оформлении</span>
                    <span style={{ display: 'block' }}>материалов в ГИБДД</span>
                  </>
                ),
                desc: 'Проверит схему и рапорты, зафиксирует письменные замечания, заявит ходатайства об истребовании записей и допросе очевидцев.'
              },
              {
                num: '03',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Правовой анализ</span>
                    <span style={{ display: 'block' }}>доказательств</span>
                  </>
                ),
                desc: 'Сопоставит траекторию, локализацию повреждений, обзорность, габариты и обоснует отсутствие умысла на оставление места происшествия.'
              },
              {
                num: '04',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Защита</span>
                    <span style={{ display: 'block' }}>в мировом суде</span>
                  </>
                ),
                desc: 'Подготовит письменные возражения, заявит ходатайства об исключении недопустимых доказательств и примет личное участие во всех заседаниях.'
              },
              {
                num: '05',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Допрос инспекторов</span>
                    <span style={{ display: 'block' }}>и свидетелей</span>
                  </>
                ),
                desc: 'Выявит противоречия в показаниях заявителя и сотрудников ГИБДД, докажет добросовестность и последовательность поведения водителя.'
              },
              {
                num: '06',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Обжалование</span>
                    <span style={{ display: 'block' }}>постановления суда</span>
                  </>
                ),
                desc: 'Составит мотивированную жалобу в вышестоящий суд со ссылками на разъяснения ВС РФ и добьётся пересмотра или отмены судебного акта.'
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
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', opacity: 0.05, pointerEvents: 'none' }}>
              <svg width="140" height="140" viewBox="0 0 24 24" fill="#FFFFFF">
                <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: '#FFFFFF', margin: '0 0 12px 0' }}>
                Границы услуги и уголовно-правовая квалификация
              </h3>
              <p style={{ fontSize: '14.5px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, margin: 0 }}>
                Услуга охватывает производство по делам об административных правонарушениях по ч. 2 ст. 12.27 КоАП РФ. При наличии пострадавших с тяжким вредом здоровью или признаках уголовной ответственности по ст. 264 УК РФ защита осуществляется по отдельному соглашению адвокатом по уголовным делам.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 5: КУРАТОР НАПРАВЛЕНИЯ ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name="Дмитрий Сергеевич Конопкин"
        position="Адвокат, председатель Коллегии адвокатов «Де-Юре»"
        imageUrl="/images/konopkin.jpg"
        imagePosition="center 20%"
        profileHref="/specialisty/konopkin-dmitriy-sergeevich/"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Дмитрий Сергеевич Конопкин ведёт автомобильные споры и дела, в которых критически важна тщательная проверка фактов, процессуальных документов и доказательственной базы. Опыт следственной работы помогает детально оценивать версии участников, видеозаписи, показания свидетелей и противоречия в материалах дела.
          </span>,
          <ul key="2" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Юридическая практика с 2016 года</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>В 2016–2022 годах работал в Следственном комитете РФ</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Адвокат с 2022 года, председатель Коллегии адвокатов «Де-Юре»</span>
            </li>
          </ul>,
          <a key="3" href="/specialisty/konopkin-dmitriy-sergeevich/" style={{ display: 'inline-block', marginTop: '16px', fontSize: '14px', color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
            Подробнее о Дмитрии Сергеевиче Конопкине →
          </a>
        ]}
        buttonText="Обратиться к адвокату"
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
        title="От первичного анализа до решения по делу"
        subtitle="Последовательная работа адвоката на каждом этапе защиты прав водителя."
        alignTitle="center"
        steps={[
          {
            num: '01',
            title: 'Уточняем факты и стадию',
            desc: 'Фиксируем дату вызова, судебного заседания или получения постановления.'
          },
          {
            num: '02',
            title: 'Получаем и изучаем материалы',
            desc: 'Сопоставляем схему, повреждения, видеозаписи, объяснения и процессуальные документы.'
          },
          {
            num: '03',
            title: 'Определяем правовую позицию',
            desc: 'Отдельно оцениваем событие ДТП, причастность, соблюдение ПДД, осведомлённость и умысел.'
          },
          {
            num: '04',
            title: 'Собираем доказательства',
            desc: 'Готовим запросы, ходатайства, письменные объяснения, возражения или жалобу.'
          },
          {
            num: '05',
            title: 'Представляем интересы',
            desc: 'Участвуем в ГИБДД и судебных заседаниях в согласованном договором объёме.'
          },
          {
            num: '06',
            title: 'Разъясняем решение',
            desc: 'Обсуждаем обжалование или исполнение постановления без обещания заранее заданного исхода.'
          }
        ]}
        ctaTitle="Готовы разобрать вашу ситуацию"
        ctaSubtitle="Опишите обстоятельства — адвокат изучит факты и подскажет практический план действий."
        ctaButtonText="Обсудить ситуацию с адвокатом"
        ctaButtonHref="#form"
      />

      {/* ═══ БЛОК 8: СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость юридической помощи"
        subtitle="На стоимость влияют объём материалов дела, необходимость срочно сохранять и истребовать доказательства, количество судебных заседаний и стадия процесса."
        tiers={pricingTiers}
      />

      {/* ═══ БЛОК 9: ДОКУМЕНТЫ ДЛЯ ПЕРВИЧНОГО АНАЛИЗА ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                Что подготовить
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                к первой консультации
              </span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Чем полнее исходные материалы, тем быстрее адвокат сможет оценить обстоятельства</span> <br className="hidden-mobile" />
              <span style={{ display: 'inline-block' }}>происшествия и определить риски по делу:</span>
            </p>
          </div>

          <div style={{
            background: 'linear-gradient(145deg, #0B1C2A 0%, #17375E 100%)',
            color: '#FFFFFF',
            border: '1px solid rgba(193, 160, 102, 0.35)',
            borderLeft: '4px solid var(--color-gold)',
            padding: '36px 32px',
            marginBottom: '24px',
            boxShadow: '0 20px 40px rgba(16, 39, 59, 0.15)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Фоновый гербовый водяной знак */}
            <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', opacity: 0.05, pointerEvents: 'none' }}>
              <svg width="140" height="140" viewBox="0 0 24 24" fill="#FFFFFF">
                <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </div>

            <div className="grid grid-2" style={{ gap: '16px 32px', marginBottom: '28px', position: 'relative', zIndex: 1 }}>
              {[
                'протоколы, определения, извещения и повестки, если уже получены;',
                'схема ДТП, объяснения участников и свидетелей происшествия;',
                'фото и видео места, автомобилей и повреждений в исходном виде;',
                'запись регистратора и сведения о возможных городских или объектовых камерах;',
                'данные звонков, сообщений, навигации, парковки или пропускной системы;',
                'постановление суда и конверт либо электронное уведомление о получении — для расчёта срока обжалования.'
              ].map((doc, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <span style={{ fontSize: '14.5px', color: 'rgba(255, 255, 255, 0.95)', lineHeight: 1.55 }}>
                    {doc}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.15)', position: 'relative', zIndex: 1 }}>
              <span style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)' }}>
                Электронные копии документов можно передать для дистанционной оценки
              </span>
              <a href="#form" className="btn btn-primary" style={{ padding: '12px 28px', fontSize: '14px', background: 'var(--color-gold)', borderColor: 'var(--color-gold)', color: '#FFFFFF' }} data-analytics="cta_click">
                Передать документы на проверку
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 10: ЧАСТЫЕ ВОПРОСЫ (FAQ) ═══ */}
      <FAQBlock
        title="Частые вопросы"
        subtitle="Ответы на ключевые вопросы по делам об оставлении места происшествия по части 2 статьи 12.27 КоАП РФ."
        faqs={faqs}
      />

      {/* ═══ БЛОК 11: ДРУГИЕ АВТОМОБИЛЬНЫЕ СИТУАЦИИ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                Если вопрос связан не только
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                с оставлением места ДТП
              </span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Выберите смежное направление или опишите ситуацию в форме — мы поможем сориентироваться</span> <br className="hidden-mobile" />
              <span style={{ display: 'inline-block' }}>в правовых вариантах решения проблемы.</span>
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
            {[
              {
                title: (
                  <>
                    <span style={{ display: 'inline-block' }}>Лишение</span> <br /><span style={{ display: 'inline-block' }}>водительских прав</span>
                  </>
                ),
                desc: 'Защита по ч. 4–5 ст. 12.15, ст. 12.8, 12.26, 12.9 ч. 4–5 КоАП РФ и другим составам.',
                link: '/grazhdanam/avtoyurist/lishenie-voditelskih-prav/'
              },
              {
                title: (
                  <>
                    <span style={{ display: 'inline-block' }}>Оспаривание</span> <br /><span style={{ display: 'inline-block' }}>вины в ДТП</span>
                  </>
                ),
                desc: 'Оспаривание выводов ГИБДД, автотехническая экспертиза, защита при спорных обстоятельствах аварии.',
                link: '/grazhdanam/avtoyurist/osparivanie-viny-v-dtp/'
              },
              {
                title: (
                  <>
                    <span style={{ display: 'inline-block' }}>Взыскание</span> <br /><span style={{ display: 'inline-block' }}>с виновника ДТП</span>
                  </>
                ),
                desc: 'Взыскание ущерба сверх страхового лимита ОСАГО или при отсутствии страховки у причинителя.',
                link: '/grazhdanam/avtoyurist/vzyskanie-ushcherba-s-vinovnika-dtp/'
              },
              {
                title: (
                  <>
                    <span style={{ display: 'inline-block' }}>Споры</span> <br /><span style={{ display: 'inline-block' }}>по ОСАГО</span>
                  </>
                ),
                desc: 'Защита при отказе, занижении выплаты, просрочке или срыве ремонта по полису ОСАГО.',
                link: '/grazhdanam/avtoyurist/spory-po-osago/'
              }
            ].map((rel, idx) => (
              <Link key={idx} href={rel.link} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                <div 
                  className="card related-service-card hover-lift" 
                  style={{ 
                    height: '100%', 
                    minHeight: '180px',
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
                      {rel.title}
                    </h3>
                    <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      {rel.desc}
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
            ))}
          </div>

          <div style={{ marginTop: '32px' }}>
            <Link href="/grazhdanam/avtoyurist/" className="all-services-link" style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '16px', textDecoration: 'underline', textUnderlineOffset: '4px', display: 'inline-flex', alignItems: 'center', gap: '6px', transition: 'color 0.2s ease' }}>
              Смотреть все услуги автоюриста →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 12: ФИНАЛЬНАЯ ФОРМА ═══ */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px', padding: '80px 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', background: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>
                  Связаться с адвокатом
                </span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                Расскажите, на какой стадии находится дело
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Укажите, когда произошло событие, вызывали ли Вас в ГИБДД, составлен ли протокол и назначена ли дата суда. Мы свяжемся с Вами, уточним документы и предложим следующий шаг.
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
            </div>

            <div>
              <ContactsForm
                title="Получить консультацию адвоката"
                subtitle="Оставьте номер телефона. Адвокат изучит обстоятельства дела и свяжется с вами."
                buttonText="Получить консультацию"
                subtext="Перезвоним в течение 15 минут в рабочее время. Вечером или в выходной — в ближайший рабочий день."
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
