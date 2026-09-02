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

export default function LisheniePravClient() {
  const cases: CaseData[] = [
    {
      category: 'Недоказанность / Мировой суд',
      title: 'Прекращение дела из-за недоказанности обстоятельств',
      problem: 'Водителю вменили нарушение с возможным лишением прав. Описание события в протоколе расходилось со схемой и видеозаписью.',
      action: 'Ознакомились с материалами, сопоставили время и траекторию движения, подготовили письменные возражения и ходатайство об исследовании записи.',
      result: 'Суд признал, что обвинение не подтверждено достаточной совокупностью доказательств, и прекратил производство по делу.'
    },
    {
      category: 'Нарушение извещения / Апелляция',
      title: 'Отмена постановления и направление на новое рассмотрение',
      problem: 'Дело рассмотрели без водителя, хотя в материалах не было надлежащего подтверждения его извещения о времени и месте заседания.',
      action: 'Проверили движение судебных извещений, подготовили жалобу и обосновали существенное нарушение права на защиту.',
      result: 'Вышестоящий суд отменил постановление мирового судьи и направил дело на новое рассмотрение.'
    },
    {
      category: 'Исключение доказательств / Суд',
      title: 'Исключили противоречивое доказательство из оценки',
      problem: 'Вывод о нарушении основывался на документе, сведения в котором не совпадали с видеозаписью и другими материалами дела.',
      action: 'Подготовили ходатайства, указали конкретные расхождения и представили суду альтернативную последовательность событий.',
      result: 'Суд учёл выявленные противоречия при оценке доказательств и принял решение в пользу доверителя.'
    }
  ];

  const faqs = [
    {
      q: 'Можно ли избежать лишения водительских прав?',
      a: 'Это зависит от конкретного состава нарушения и материалов дела. По некоторым статьям предусмотрена альтернатива в виде штрафа, по другим — нет. Возможны доводы об отсутствии события или состава, недоказанности, недопустимости отдельных доказательств и существенных нарушениях процедуры. Оценить перспективу можно только после изучения документов.'
    },
    {
      q: 'Если протокол уже подписан, защищаться поздно?',
      a: 'Нет. Подпись обычно подтверждает ознакомление или получение копии, но её значение зависит от содержания документа и сделанных отметок. Нужно проверить весь комплект материалов и не пытаться самостоятельно дописывать или исправлять свою копию.'
    },
    {
      q: 'Нужно ли идти в суд, если я не согласен?',
      a: 'Игнорировать извещение рискованно: при надлежащем извещении дело может быть рассмотрено без Вас. Формат участия и необходимость личной явки нужно определить после изучения материалов и позиции.'
    },
    {
      q: 'Какие ошибки в материалах могут иметь значение?',
      a: 'Значение имеют не любые опечатки, а противоречия и нарушения, влияющие на установление события, состава, допустимость доказательств или реализацию права на защиту. Их оценивают не изолированно, а вместе со всеми материалами.'
    },
    {
      q: 'Когда заявлять ходатайства?',
      a: 'Ходатайства заявляют с учётом стадии и цели: об ознакомлении, вызове свидетелей, истребовании записей, назначении исследования, приобщении документов и по другим вопросам. Их содержание должно быть связано с обстоятельствами конкретного дела.'
    },
    {
      q: 'Какой срок обжалования постановления?',
      a: 'Обычный срок — десять дней со дня вручения или получения копии постановления. При пропуске можно заявить ходатайство о восстановлении срока, но нужны уважительные причины и подтверждения. Дату получения необходимо зафиксировать.'
    },
    {
      q: 'Можно ли обжаловать уже вступившее в силу постановление?',
      a: 'КоАП предусматривает пересмотр вступивших в законную силу постановлений, но это иной порядок. Сначала нужно проверить предыдущие решения, материалы и конкретные основания; обещать отмену без такого анализа нельзя.'
    },
    {
      q: 'Когда начинается срок лишения?',
      a: 'Порядок исчисления зависит от вступления постановления в силу и исполнения обязанности по сдаче удостоверения или заявлению о его утрате. Для точного ответа нужно проверить даты и действия по конкретному делу.'
    },
    {
      q: 'Как вернуть удостоверение после окончания срока?',
      a: 'Обычно требуется исполнить установленные законом условия: проверить знания ПДД, уплатить административные штрафы, а по отдельным составам также представить медицинское заключение. Этот вопрос не заменяет защиту по ещё не завершённому делу.'
    },
    {
      q: 'Можно ли работать с адвокатом дистанционно?',
      a: 'Первичный анализ документов, консультации и подготовка позиции возможны дистанционно. Необходимость личного участия адвоката и доверителя зависит от стадии, суда и согласованной стратегии.'
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
            <span>Защита при лишении водительских прав</span>
          </>
        }
        superTitle="Автомобильные споры"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Защита при лишении
            </span>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              водительских прав в Липецке
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
                Проверим протокол, схему, видеозаписи и другие материалы,
              </span>
              <span className="hero-sub-span-desktop" style={{ display: 'block' }}>
                подготовим правовую позицию и представим Ваши интересы
              </span>
              <span className="hero-sub-span-desktop" style={{ display: 'block' }}>
                в суде или при обжаловании.
              </span>
            </span>
          </>
        }
        primaryCtaText="Обсудить ситуацию"
        primaryCtaLink="#form"
        primaryCtaAnalytics="cta_click"
        primaryCtaSubtext={
          <>
            <span style={{ display: 'inline-block' }}>Если заседание назначено или постановление уже получено, сообщите дату:</span> <br className="hidden-mobile" />
            <span style={{ display: 'inline-block' }}>для подготовки и обжалования важны сроки: <a href="tel:+79103503111" data-analytics="phone_click">+7 (910) 350-31-11</a></span>
          </>
        }
        trustItems={[
          { text: 'Подключимся на стадии составления материалов или до первого заседания' },
          { text: 'Подготовим объяснения, ходатайства, возражения и жалобу' },
          { text: 'Сразу обозначим риски — без обещаний гарантированного результата' }
        ]}
        imageUrl="/images/konopkin.jpg"
        imageName="Дмитрий Сергеевич Конопкин"
        imageSubtitle="Адвокат, председатель Коллегии адвокатов «Де-Юре»"
        imageObjectPosition="center 25%"
      />

      {/* ═══ БЛОК 2: В КАКИХ СИТУАЦИЯХ МОЖЕТ ПОТРЕБОВАТЬСЯ ЗАЩИТА ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                В каких ситуациях может потребоваться защита
              </span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Лишение права управления назначается только в предусмотренных законом случаях.</span> <br className="hidden-mobile" />
              <span style={{ display: 'inline-block' }}>Конкретная санкция зависит от состава нарушения, его повторности и обстоятельств дела.</span>
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '32px' }}>
            {[
              {
                tag: 'Опьянение',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Управление</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>в состоянии опьянения</span>
                  </>
                ),
                desc: 'Проверяются основания остановки, соблюдение порядка освидетельствования, разъяснение прав, документы и видеозапись процедуры.'
              },
              {
                tag: 'Отказ',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Отказ от</span>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>медицинского</span>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>освидетельствования</span>
                  </>
                ),
                desc: 'Важно установить, были ли законные основания и требование, соблюдалась ли последовательность действий и правильно ли оформлены материалы.'
              },
              {
                tag: 'Встречная полоса',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Выезд на полосу</span>
                    <span style={{ display: 'block' }}>встречного движения</span>
                  </>
                ),
                desc: 'Анализируются разметка, знаки, схема, траектория, фото- и видеозаписи, а также наличие исключений и повторности.'
              },
              {
                tag: 'Скорость',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Превышение скорости</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>или повторные нарушения</span>
                  </>
                ),
                desc: 'Уточняются способ фиксации, вступление предыдущего постановления в силу и применимая часть статьи КоАП.'
              },
              {
                tag: 'Переезд',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Нарушение правил</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>на железнодорожном переезде</span>
                  </>
                ),
                desc: 'Проверяются фактическая обстановка, сигнализация, расположение автомобиля и доказательства нарушения.'
              },
              {
                tag: 'Вред здоровью',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Причинение вреда</span>
                    <span style={{ display: 'block' }}>здоровью при ДТП</span>
                  </>
                ),
                desc: 'Нужны материалы о механизме ДТП и медицинские документы. При признаках преступления дело относится к уголовному направлению.'
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
              <strong>Важно:</strong> Сам по себе перечень возможных оснований не показывает перспективу конкретного дела. Номер и часть статьи, протокол, приложения и стадия производства обязательны для первичной правовой оценки.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: НЕ ОТКЛАДЫВАЙТЕ ПРОВЕРКУ МАТЕРИАЛОВ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                Не откладывайте
              </span>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                проверку материалов дела
              </span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Чем раньше адвокат изучит документы и обстоятельства дела,</span> <br className="hidden-mobile" />
              <span style={{ display: 'inline-block' }}>тем больше процессуальных возможностей остаётся для выстраивания правовой защиты.</span>
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
                <span style={{ display: 'block' }}>Позволяет безошибочно определить правовую позицию:</span>
                <span style={{ display: 'block' }}>проверка процедуры, ходатайства об исключении доказательств или обжалование.</span>
              </div>
            </div>

            <div className="grid grid-3" style={{ gap: '16px', position: 'relative', zIndex: 1 }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '22px 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <h4 style={{ fontSize: '16.5px', color: '#FFFFFF', margin: 0, fontWeight: 600, lineHeight: 1.35, display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', flexShrink: 0 }}>01</span>
                  <span>
                    <span style={{ display: 'block' }}>Анализ протокола</span>
                    <span style={{ display: 'block' }}>и актов</span>
                  </span>
                </h4>
                <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5, margin: 0 }}>
                  Проверяем законность процедуры, основания остановки и корректность составления процессуальных документов.
                </p>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '22px 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <h4 style={{ fontSize: '16.5px', color: '#FFFFFF', margin: 0, fontWeight: 600, lineHeight: 1.35, display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', flexShrink: 0 }}>02</span>
                  <span>
                    <span style={{ display: 'block' }}>Формирование</span>
                    <span style={{ display: 'block' }}>правовой позиции</span>
                  </span>
                </h4>
                <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5, margin: 0 }}>
                  Готовим мотивированные объяснения, ходатайства об исключении доказательств и вызове свидетелей.
                </p>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '22px 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <h4 style={{ fontSize: '16.5px', color: '#FFFFFF', margin: 0, fontWeight: 600, lineHeight: 1.35, display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', flexShrink: 0 }}>03</span>
                  <span>
                    <span style={{ display: 'block' }}>Защита в суде</span>
                    <span style={{ display: 'block' }}>или обжалование</span>
                  </span>
                </h4>
                <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5, margin: 0 }}>
                  Представляем интересы в мировом или районном суде, заявляем процессуальные возражения и жалобы.
                </p>
              </div>
            </div>
          </div>

          {/* 2 КРУПНЫЕ КАРТОЧКИ */}
          <div className="grid grid-2" style={{ gap: '28px', marginBottom: '32px' }}>
            
            {/* Карточка 1: Что важно сделать сразу */}
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
                  <span style={{ display: 'inline-block' }}>Что важно сделать</span>{' '}
                  <span style={{ display: 'inline-block' }}>своевременно</span>
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                <span style={{ display: 'inline-block' }}>Фиксация доказательств и правильные действия</span>{' '}
                <span style={{ display: 'inline-block' }}>позволяют сохранить процессуальные возможности.</span>
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px', lineHeight: 1.35 }}>
                      Получите и сохраните копии материалов
                    </strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      Протокол, акт освидетельствования, направление на медосвидетельствование, схема, рапорты и иные вручённые документы.
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
                      Не исправляйте документы самостоятельно
                    </strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      Если Вы не согласны, фиксируйте замечания в предусмотренном месте протокола и сохраняйте свою копию.
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
                      Сохраните записи видеорегистратора и камер
                    </strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      Записи регистратора и камер наблюдения могут быть удалены, поэтому их необходимо своевременно сохранить. Также зафиксируйте данные свидетелей и сохраните медицинские документы.
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
                      Уточните суд, номер дела и дату заседания
                    </strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      Не рассчитывайте, что неявка остановит процесс: при надлежащем извещении суд вправе рассмотреть дело без Вас.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Карточка 2: Ошибки, которых следует избегать */}
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
                  <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.3 }}>
                  <span style={{ display: 'inline-block' }}>Ошибки, которых</span>{' '}
                  <span style={{ display: 'inline-block' }}>следует избегать</span>
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                <span style={{ display: 'inline-block' }}>Неправильные действия на начальном этапе</span>{' '}
                <span style={{ display: 'inline-block' }}>могут существенно осложнить судебную защиту.</span>
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px', lineHeight: 1.35 }}>
                      Не признавайте вину без анализа документов
                    </strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      Признание вины в протоколе может осложнить использование некоторых доводов защиты. Важно сначала проверить состав и процедуру.
                    </span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px', lineHeight: 1.35 }}>
                      Не используйте шаблонные жалобы из сети
                    </strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      Жалоба должна отвечать конкретным выводам постановления мирового судьи и материалам Вашего дела.
                    </span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px', lineHeight: 1.35 }}>
                      Не пропускайте десятидневный срок
                    </strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      На обжалование есть 10 дней со дня вручения или получения копии постановления. При уважительной причине срок можно восстановить.
                    </span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px', lineHeight: 1.35 }}>
                      Не скрывайтесь от получения судебных писем
                    </strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      Возврат судебного письма по истечении срока хранения считается надлежащим извещением по закону.
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
            <strong style={{ color: 'var(--color-primary)' }}>Сроки обжалования:</strong> Обычный срок подачи жалобы на постановление по делу об административном правонарушении составляет 10 дней со дня вручения или получения копии постановления. Зафиксируйте точную дату вручения для своевременной подготовки мотивированной жалобы.
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#form" className="btn btn-primary" style={{ display: 'inline-block', padding: '14px 32px' }}>
              Получить первичную оценку
            </a>
          </div>

        </div>
      </section>

      {/* ═══ БЛОК 4: НА ЧЁМ СТРОИТСЯ ЗАЩИТА ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>На чём строится защита</span> <br />
              <span style={{ display: 'inline-block' }}>при риске лишения прав</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Процессуальный и доказательственный анализ материалов дела</span> <br className="hidden-mobile" />
              <span style={{ display: 'inline-block' }}>об административном правонарушении на всех стадиях.</span>
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '48px' }}>
            {[
              {
                num: '01',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Событие</span>
                    <span style={{ display: 'block' }}>и состав</span>
                  </>
                ),
                desc: 'Соответствуют ли установленные обстоятельства признакам конкретного правонарушения; верно ли выбрана часть статьи КоАП.'
              },
              {
                num: '02',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Оценка</span>
                    <span style={{ display: 'block' }}>доказательств</span>
                  </>
                ),
                desc: 'Протоколы, акты, схема, рапорты, показания, фото и видео, результаты освидетельствования и иные материалы в совокупности.'
              },
              {
                num: '03',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Соблюдение</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>законной процедуры</span>
                  </>
                ),
                desc: 'Разъяснение прав, подписи и замечания, извещение, участие понятых или видеозапись, соблюдение требований закона.'
              },
              {
                num: '04',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Выявление</span>
                    <span style={{ display: 'block' }}>противоречий</span>
                  </>
                ),
                desc: 'Расхождения между временем, местом, схемой, объяснениями, видеозаписью и выводами должностных лиц.'
              },
              {
                num: '05',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Сроки</span>
                    <span style={{ display: 'block' }}>и подсудность</span>
                  </>
                ),
                desc: 'Сроки давности привлечения к ответственности, полномочия органа или суда, ход движения и передачи дела.'
              },
              {
                num: '06',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Правовая</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>позиция защиты</span>
                  </>
                ),
                desc: 'Подготовка мотивированных объяснений, ходатайств, запросов, доказательств и доводов для судебного заседания.'
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
                    { title: 'Анализ протокола, актов и материалов дела', desc: 'Изучение процессуальных документов ГИБДД, схемы, рапортов и видеозаписей.' },
                    { title: 'Проверка соблюдения процедуры и прав водителя', desc: 'Установление нарушений порядка освидетельствования, понятых и разъяснения прав.' },
                    { title: 'Подготовка объяснений, возражений и ходатайств', desc: 'Составление мотивированных процессуальных документов для судебного заседания.' },
                    { title: 'Формирование доказательственной базы и запросы', desc: 'Истребование видеозаписей, вызов инспекторов и свидетелей в судебное заседание.' },
                    { title: 'Защита интересов во всех судебных заседаниях', desc: 'Личное участие адвоката в мировом или районном суде, активное доказывание позиции.' }
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
                    { title: 'Независимое техническое исследование', desc: 'Проведение независимой экспертизы дорожных условий, знаков или видеозаписи.' },
                    { title: 'Обжалование в вышестоящих инстанциях', desc: 'Подготовка жалоб и ведение дела в кассационном суде общей юрисдикции.' },
                    { title: 'Дела с признаками уголовного состава (ст. 264 УК)', desc: 'Защита по уголовным делам о ДТП с тяжким вредом здоровью или погибшими.' },
                    { title: 'Возврат удостоверения после отбытия срока', desc: 'Консультации и сдача экзаменов после полного истечения срока лишения права.' }
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

      {/* ═══ БЛОК 5: ВАРИАНТЫ ПОМОЩИ ПО СТАДИЯМ ДЕЛА ═══ */}
      <section className="section bg-light" id="stages" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Варианты юридической помощи</span> <br />
              <span style={{ display: 'inline-block' }}>на разных стадиях процесса</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Подключаемся на любом этапе — от момента составления протокола</span> <br />
              <span style={{ display: 'inline-block' }}>до судебного заседания и обжалования вынесенного постановления.</span>
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
                До суда и судебное рассмотрение
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'До передачи дела в суд: изучим вручённые материалы, зафиксируем замечания и доказательства',
                  'Подготовка к заседанию: ознакомимся с делом, сформируем позицию, подготовим ходатайства',
                  'Представительство в суде: заявим ходатайства, представим доказательства, допросим свидетелей'
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
                Стадия обжалования и пересмотра
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'Обжалование постановления: проверим мотивировку, подготовим жалобу в вышестоящий суд в 10-дневный срок',
                  'Восстановление пропущенного срока: обоснуем уважительность причин пропуска и заявим ходатайство',
                  'Пересмотр вступившего в силу постановления: оценим конкретные правовые основания для кассации'
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
              <strong>Нужна помощь на Вашей стадии?</strong> Опишите обстоятельства составления протокола или дату вынесения постановления — адвокат подскажет правильный алгоритм действий.
            </p>
            <a href="#form" className="btn btn-primary" style={{ padding: '12px 24px', fontSize: '14px', whiteSpace: 'nowrap' }}>
              Узнать формат помощи
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 6: ДОКУМЕНТЫ ДЛЯ ПЕРВИЧНОГО АНАЛИЗА ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Что подготовить для</span> <br />
              <span style={{ display: 'inline-block' }}>разговора с адвокатом</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Если каких-то материалов нет, это не препятствует первичному разговору.</span> <br />
              <span style={{ display: 'inline-block' }}>Адвокат подскажет, что необходимо получить и как ознакомиться с делом.</span>
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '28px', marginBottom: '32px' }}>
            
            {/* Карточка 1: Процессуальные документы ГИБДД */}
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
                <span style={{ display: 'inline-block' }}>Материалы проверки ГИБДД</span>
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Протокол и приложения</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Протокол об административном правонарушении, схема места нарушения, рапорты и объяснения.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Акты освидетельствования</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Акт освидетельствования на состояние опьянения, направление на медосвидетельствование и медицинские справки.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Карточка 2: Судебные материалы и фиксация */}
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
                <span style={{ display: 'inline-block' }}>Судебные материалы и фиксация</span>
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Судебные извещения и постановления</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Судебная повестка, номер дела, дата заседания либо копия постановления суда с отметкой о вручении.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Видеозаписи и хронология событий</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Файлы видеорегистратора, фото дорожных знаков и Ваше краткое описание событий по времени.</span>
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
              <strong>Нет полного комплекта?</strong> Направьте то, что уже есть на руках (протокол или судебную повестку), — адвокат подскажет, какие документы запросить или сфотографировать в суде.
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
            Юридическая практика с 2016 года; опыт следственной работы помогает детально анализировать материалы происшествий, протоколы ГИБДД и видеозаписи.
          </span>,
          <ul key="2" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>
                Ведёт автомобильные споры: защита при лишении водительских прав, оставлении места ДТП, выезде на встречную полосу и отказе от освидетельствования.
              </span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>
                Оценивает допустимость доказательств, выявляет процессуальные нарушения и формирует мотивированную правовую позицию для суда.
              </span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>
                Защищает права водителей в Липецке и Липецкой области, а также ведет дела дистанционно по всей России.
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
        title="Как проходит работа по защите"
        subtitle="Прозрачный и последовательный порядок юридической помощи водителям"
        steps={[
          {
            num: '01',
            title: 'Уточняем статью и стадию',
            desc: 'Выясняем состав правонарушения, стадию дела, дату судебного заседания или дату получения постановления.'
          },
          {
            num: '02',
            title: 'Получаем и изучаем материалы',
            desc: 'Безопасным способом принимаем копии протоколов, актов, схемы и при необходимости знакомимся с делом в суде.'
          },
          {
            num: '03',
            title: 'Проверяем доказательства и риски',
            desc: 'Анализируем соблюдение процедуры, выявляем противоречия и честно обозначаем правовые риски.'
          },
          {
            num: '04',
            title: 'Готовим документы защиты',
            desc: 'Составляем мотивированные объяснения, ходатайства, возражения или жалобу и согласуем их с доверителем.'
          },
          {
            num: '05',
            title: 'Представляем интересы в суде',
            desc: 'Лично участвуем в судебных заседаниях и подробно информируем о результатах каждого процессуального этапа.'
          }
        ]}
        ctaTitle="Готовы разобрать ваше дело об административном правонарушении"
        ctaSubtitle="Оставьте номер телефона — адвокат свяжется с вами и подскажет законный порядок действий."
        ctaButtonText="Обсудить защиту в суде"
        ctaButtonHref="#form"
      />

      {/* ═══ БЛОК 10: СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость юридической помощи"
        subtitle="Стоимость зависит от статьи КоАП РФ, объёма материалов, стадии дела и количества судебных заседаний."
        tiers={[
          {
            title: 'Консультация и оценка',
            subtitle: 'Первичный правовой анализ материалов',
            price: 'от 5 000 ₽',
            features: [
              { name: 'Разбор протокола и материалов ГИБДД', value: '✓' },
              { name: 'Проверка процессуальных нарушений', value: '✓' },
              { name: 'Оценка допустимости доказательств', value: '✓' },
              { name: 'Рекомендации по дальнейшим действиям', value: '✓' }
            ],
            buttonText: 'Получить оценку',
            buttonHref: '#form'
          },
          {
            title: 'Подготовка документов',
            subtitle: 'Процессуальная позиция по делу',
            price: 'от 10 000 ₽',
            popular: true,
            badgeText: 'Популярно',
            features: [
              { name: 'Подготовка письменных объяснений', value: '✓' },
              { name: 'Ходатайства об исключении доказательств', value: '✓' },
              { name: 'Запросы и вызов свидетелей в суд', value: '✓' },
              { name: 'Составление мотивированной жалобы', value: '✓' }
            ],
            buttonText: 'Заказать услугу',
            buttonHref: '#form'
          },
          {
            title: 'Судебное представительство',
            subtitle: 'Защита в судебном заседании',
            price: 'от 25 000 ₽',
            features: [
              { name: 'Полное ознакомление с материалами в суде', value: '✓' },
              { name: 'Участие адвоката во всех заседаниях', value: '✓' },
              { name: 'Заявление ходатайств и допрос инспекторов', value: '✓' },
              { name: 'Ведение дела под ключ по инстанции', value: '✓' }
            ],
            buttonText: 'Судебная защита',
            buttonHref: '#form'
          }
        ]}
        disclaimer={
          <>
            <span style={{ display: 'inline-block' }}>Точную стоимость назовём после изучения документов. Она фиксируется в договоре и не меняется без согласования.</span> <br className="hidden-mobile" />
            <span style={{ display: 'inline-block' }}>Экспертные исследования, почтовые расходы и судебные издержки согласуются отдельно.</span>
          </>
        }
      />

      {/* ═══ БЛОК 11: ЧАСТЫЕ ВОПРОСЫ ═══ */}
      <FAQBlock
        superTitle="Частые вопросы"
        title="Ответы на частые вопросы"
        subtitle="Разъяснения адвоката Дмитрия Конопкина по делам о лишении водительских прав"
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
            <Link href="/grazhdanam/avtoyurist/ostavlenie-mesta-dtp/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
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
                    <span style={{ display: 'inline-block' }}>Оставление</span> <br /><span style={{ display: 'inline-block' }}>места ДТП</span>
                  </h3>
                  <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    Защита по ч. 2 ст. 12.27 КоАП РФ: проверка умысла, анализ видео и процессуальных документов.
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

            <Link href="/grazhdanam/avtoyurist/vzyskanie-ushcherba-s-vinovnika-dtp/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
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
                    <span style={{ display: 'inline-block' }}>Взыскание</span> <br /><span style={{ display: 'inline-block' }}>с виновника ДТП</span>
                  </h3>
                  <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    Взыскание ущерба сверх страхового лимита ОСАГО или непокрытой части вреда.
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
                  <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
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
                  <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
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
                Есть риск лишения водительских прав?
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Сообщите, по какой статье составлены материалы и когда назначено заседание или получено постановление. Мы уточним обстоятельства и скажем, что потребуется для анализа.
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
                Не указывайте паспортные данные и не прикладывайте материалы дела в открытой форме. Безопасный способ передачи согласуем после связи.
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm 
                title="Защита при лишении прав"
                subtitle="Оставьте имя и номер телефона. Автоюрист перезвонит в течение 15 минут в рабочее время."
                buttonText="Получить консультацию"
                commentPlaceholder="Укажите статью КоАП, стадию дела и дату заседания…"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
