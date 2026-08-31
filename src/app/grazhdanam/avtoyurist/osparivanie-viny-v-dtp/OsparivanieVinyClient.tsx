'use client';

import ContactsForm from '@/components/ContactsForm';

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

export default function OsparivanieVinyClient() {
  const cases: CaseData[] = [
    {
      category: 'Административное производство / Видеозапись',
      title: 'Отменили постановление после анализа видеозаписи',
      problem: 'Водителю вменили нарушение при проезде перекрёстка, опираясь исключительно на объяснение второго участника и неполную схему ДТП.',
      action: 'Получили запись городской камеры, покадрово сопоставили фазы светофора, зафиксировали противоречия и подготовили жалобу с ходатайством об исследовании видео.',
      result: 'Постановление ГИБДД отменено судом, материалы направлены на новое рассмотрение. Водитель защищён от необоснованного признания виновником.'
    },
    {
      category: 'ОСАГО / Страховой спор',
      title: 'Добились определения иной степени вины и выплаты',
      problem: 'Страховщик выплатил лишь 50% возмещения со ссылкой на обоюдную вину, хотя обстоятельства столкновения указывали на преимущественную ответственность второго водителя.',
      action: 'Собрали доказательства, сформулировали вопросы автотехнику, прошли обязательный порядок через финансового уполномоченного и подали иск в суд.',
      result: 'Суд установил вину второго водителя в размере 80% и взыскал со страховой компании недостающее возмещение и судебные расходы.'
    },
    {
      category: 'Гражданский спор / Защита от иска',
      title: 'Отклонили требование о возмещении полного ущерба',
      problem: 'Второй участник подал иск о взыскании 100% ущерба, ссылаясь на формальное нарушение ПДД доверителем, которое не состояло в прямой причинной связи с аварией.',
      action: 'Восстановили детальный механизм ДТП, ходатайствовали о назначении судебной автотехнической экспертизы и доказали техническую возможность истца предотвратить столкновение.',
      result: 'Суд отклонил требования о полной ответственности и распределил ущерб соразмерно реальному вкладу каждого участника.'
    }
  ];

  const faqs = [
    {
      q: 'Можно ли оспорить вину в ДТП?',
      a: 'Да, но сначала нужно определить, какой документ или требование существует. Постановление по КоАП обжалуется по специальной процедуре главы 30 КоАП РФ, а гражданская ответственность и размер ущерба устанавливаются в страховом или имущественном споре.'
    },
    {
      q: 'Сколько времени даётся на жалобу на постановление?',
      a: 'По общему правилу — 10 дней со дня вручения или получения копии постановления. При пропуске срока можно подать ходатайство о его восстановлении с подтверждением уважительных причин.'
    },
    {
      q: 'Можно ли подать отдельный иск об установлении вины?',
      a: 'Самостоятельное заявление только об установлении степени вины законом не предусмотрено. Суд разрешает этот вопрос в рамках конкретного материального требования: о страховой выплате по ОСАГО или о возмещении имущественного вреда.'
    },
    {
      q: 'Обоюдная вина всегда означает 50 на 50?',
      a: 'Нет. Степень ответственности участников может быть различной (например, 70/30 или 80/20). Равные доли (50/50) страховая компания применяет только по умолчанию, когда степень вины каждого участника не установлена судом.'
    },
    {
      q: 'Если ГИБДД не установила нарушение второго водителя, спор проигран?',
      a: 'Не обязательно. В гражданском споре суд оценивает все доказательства в совокупности и не связан исключительно административными материалами. Важно восстановить полную хронологию и доказать причинную связь.'
    },
    {
      q: 'Достаточно ли доказать нарушение ПДД другим участником?',
      a: 'Нет. Нарушение должно находиться в прямой причинной связи с механизмом ДТП и причинением ущерба. Нарушение правил, не повлиявшее на возникновение аварии, не меняет распределение ответственности автоматически.'
    },
    {
      q: 'Нужна ли автотехническая экспертиза?',
      a: 'Не всегда. Экспертиза требуется при наличии технических вопросов (скорость, траектория, момент опасности) и достаточных исходных данных. Сначала юрист анализирует видеозаписи, схему, замеры и формулирует юридически корректные вопросы эксперту.'
    },
    {
      q: 'Кто определяет, какой водитель виноват?',
      a: 'В административном деле орган ГИБДД или суд оценивает конкретный состав КоАП РФ. В споре о страховом возмещении и возмещении вреда окончательную степень вины и ответственность устанавливает только суд.'
    },
    {
      q: 'Что делать, если страховщик выплатил только половину?',
      a: 'Запросить мотивированный расчёт и акт страховой компании, провести аудит материалов и пройти обязательный досудебный порядок (претензия и финансовый уполномоченный). Затем подаётся иск в суд о взыскании недостающей части возмещения.'
    },
    {
      q: 'Какие доказательства особенно важно сохранить?',
      a: 'Оригиналы файлов с видеорегистратора, фотографии места ДТП и повреждений, копию схемы с внесёнными замечаниями, данные городских камер до их перезаписи, контакты свидетелей и протоколы ГИБДД.'
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
            <span style={{ color: 'var(--color-text-main)' }}>Оспаривание вины в ДТП</span>
          </>
        }
        superTitle="Автомобильные споры"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>Оспаривание вины</span>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>в ДТП в Липецке</span>
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
                Проверим схему, объяснения, видео и техническую
              </span>
              <span className="hero-sub-span-desktop" style={{ display: 'block' }}>
                картину аварии, определим процессуальный маршрут
              </span>
              <span className="hero-sub-span-desktop" style={{ display: 'block' }}>
                и подготовим жалобу, позицию для страховщика или суда.
              </span>
            </span>
          </>
        }
        primaryCtaText="Проверить материалы ДТП"
        primaryCtaLink="#form"
        primaryCtaAnalytics="cta_click"
        primaryCtaSubtext={
          <>
            <span style={{ display: 'inline-block' }}>Сообщите дату ДТП, какой документ получен</span> <br className="hidden-mobile" />
            <span style={{ display: 'inline-block' }}>и&nbsp;есть ли видео: <a href="tel:+79103503111" data-analytics="phone_click">+7 (910) 350-31-11</a></span>
          </>
        }
        trustItems={[
          { text: 'Отделим нарушение ПДД от причинной связи с аварией' },
          { text: 'Проверим полную, частичную и обоюдную вину' },
          { text: 'Сохраним доказательства и поможем не пропустить сроки' },
        ]}
        imageUrl="/images/konopkin.jpg"
        imageName="Дмитрий Сергеевич Конопкин"
        imageSubtitle="Адвокат, председатель Коллегии адвокатов «Де-Юре»"
        imageObjectPosition="center 25%"
      />

      {/* ═══ БЛОК 2: В КАКИХ СИТУАЦИЯХ ПОМОГАЕМ ОСПАРИВАТЬ ВИНУ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span style={{ display: 'inline-block' }}>В каких ситуациях помогаем</span> <br />
              <span style={{ display: 'inline-block' }}>оспорить вину в&nbsp;ДТП</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Спор о виновности зависит от зафиксированных обстоятельств и процессуальной стадии.</span> <br />
              <span style={{ display: 'inline-block' }}>Помогаем доказать реальную картину аварии и защитить Ваши законные интересы.</span>
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '40px' }}>
            {[
              {
                tag: 'Постановление КоАП',
                title: <><span style={{ display: 'block' }}>Вменили нарушение ПДД,</span><span style={{ display: 'block' }}>с которым Вы не согласны</span></>,
                desc: 'Проверим протокол, схему, замеры и объяснения, выявим процессуальные нарушения и подадим жалобу по главе 30 КоАП РФ в установленный 10-дневный срок.'
              },
              {
                tag: 'Обоюдная вина',
                title: <><span style={{ display: 'block' }}>Обоюдная вина и выплата</span><span style={{ display: 'block' }}>страховщика 50% по ОСАГО</span></>,
                desc: 'Докажем реальное соотношение действий водителей: равные доли действуют по умолчанию, суд вправе установить иную обоснованную степень (например, 80/20).'
              },
              {
                tag: 'Иск об ущербе',
                title: <><span style={{ display: 'block' }}>Предъявлен иск о взыскании</span><span style={{ display: 'block' }}>полного ущерба от ДТП</span></>,
                desc: 'Защитим от завышенных требований: докажем отсутствие причинной связи и техническую возможность истца предотвратить столкновение.'
              },
              {
                tag: 'Неполная схема',
                title: <><span style={{ display: 'block' }}>Не согласны со схемой ДТП</span><span style={{ display: 'block' }}>или объяснениями участников</span></>,
                desc: 'Сопоставим фото, видеозаписи, следы торможения и обломков, чтобы устранить неточности, искажения и противоречия в материалах ГИБДД.'
              },
              {
                tag: 'Отказ страховой',
                title: <><span style={{ display: 'block' }}>Страховая компания отказала</span><span style={{ display: 'block' }}>в выплате из-за виновности</span></>,
                desc: 'Пройдём обязательный досудебный порядок (претензия и финансовый уполномоченный) и установим истинные обстоятельства в суде.'
              },
              {
                tag: 'Пострадавшие',
                title: <><span style={{ display: 'block' }}>В ДТП причинен вред здоровью</span><span style={{ display: 'block' }}>или значительный ущерб</span></>,
                desc: 'При тяжком вреде или гибели людей нужна отдельная защита по уголовному делу. Обстоятельства ДТП оцениваются с учётом уголовных рисков.'
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
                <span style={{ display: 'block' }}>Не знаете, с чего начать оспаривание?</span>
              </h4>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                <span style={{ display: 'block' }}>Пришлите схему ДТП, видеозапись или постановление —</span>
                <span style={{ display: 'block' }}>юрист оценит доказательства и предложит практический маршрут защиты.</span>
              </p>
            </div>
            <a href="#form" className="btn btn-primary" style={{ whiteSpace: 'nowrap', padding: '12px 24px', fontSize: '14px' }} data-analytics="cta_click">
              Разобрать материалы ДТП
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: ОБЪЕДИНЕННЫЙ БЛОК: СТРАТЕГИЯ, ПРИНЦИПЫ И МАРШРУТЫ ЗАЩИТЫ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Как строится защита</span> <br />
              <span style={{ display: 'inline-block' }}>и установление обстоятельств ДТП</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>В гражданском праве ответственность несёт тот, чьи действия повлекли столкновение.</span> <br />
              <span style={{ display: 'inline-block' }}>Формальный штраф по КоАП не предрешает исход спора об ущербе автоматически.</span>
            </p>
          </div>

          {/* Темно-синяя карточка-навигатор: 3 этапа стратегии защиты */}
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
                  3 этапа стратегии защиты
                </h3>
              </div>
              <div style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.75)', maxWidth: '440px', lineHeight: 1.5 }}>
                <span style={{ display: 'block' }}>Позволяет безошибочно определить порядок действий:</span>
                <span style={{ display: 'block' }}>жалоба в ГИБДД, спор по ОСАГО или судебная защита.</span>
              </div>
            </div>

            <div className="grid grid-3" style={{ gap: '16px', position: 'relative', zIndex: 1 }}>
              {/* Шаг 1 */}
              <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '22px 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <h4 style={{ fontSize: '16.5px', color: '#FFFFFF', margin: 0, fontWeight: 600, lineHeight: 1.35, display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', flexShrink: 0 }}>01</span>
                  <span>
                    <span style={{ display: 'block' }}>Срочно сохраняем</span>
                    <span style={{ display: 'block' }}>исходные данные</span>
                  </span>
                </h4>
                <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5, margin: 0 }}>
                  Оригиналы файлов с регистратора, записи городских камер до перезаписи, фото привязок к знакам и замечания к схеме.
                </p>
              </div>

              {/* Шаг 2 */}
              <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '22px 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <h4 style={{ fontSize: '16.5px', color: '#FFFFFF', margin: 0, fontWeight: 600, lineHeight: 1.35, display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', flexShrink: 0 }}>02</span>
                  <span>
                    <span style={{ display: 'block' }}>Отделяем ПДД</span>
                    <span style={{ display: 'block' }}>от причинной связи</span>
                  </span>
                </h4>
                <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5, margin: 0 }}>
                  Проверяем, повлияло ли конкретное нарушение на столкновение и располагал ли второй водитель возможностью избежать удара.
                </p>
              </div>

              {/* Шаг 3 */}
              <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '22px 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <h4 style={{ fontSize: '16.5px', color: '#FFFFFF', margin: 0, fontWeight: 600, lineHeight: 1.35, display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', flexShrink: 0 }}>03</span>
                  <span>
                    <span style={{ display: 'block' }}>Выбираем маршрут</span>
                    <span style={{ display: 'block' }}>по стадии дела</span>
                  </span>
                </h4>
                <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5, margin: 0 }}>
                  Жалоба на постановление КоАП (10 дней), претензия страховщику по ОСАГО или судебный спор с ходатайством об автоэкспертизе.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-2" style={{ gap: '28px', marginBottom: '32px' }}>
            {/* Карточка 1: Административное обжалование */}
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
                  Административное обжалование (ГИБДД / Суд)
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Применяется, когда вынесено постановление по делу об административном правонарушении, с выводами которого водитель не согласен.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Анализ законности постановления</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Проверяем состав правонарушения, допустимость доказательств и соблюдение процессуального порядка.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Жалоба по главе 30 КоАП РФ (срок 10 дней)</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Готовим мотивированную жалобу вышестоящему должностному лицу или в районный суд.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Истребование записей камер и свидетелей</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Подаём ходатайства об исследовании видеозаписей, дислокации знаков и вызове очевидцев.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Отмена постановления и прекращение дела</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Добиваемся отмены акта ввиду недоказанности или отсутствия состава правонарушения.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Карточка 2: Страховой и судебный спор */}
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
                  Страховой и судебный спор (ОСАГО / Суд)
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Применяется при споре о размере возмещения по ОСАГО, обоюдной вине или при предъявлении иска о возмещении ущерба.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Претензия и финансовый уполномоченный</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Проходим обязательный досудебный порядок для потребителей финансовых услуг по ОСАГО.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Назначение автотехнической экспертизы</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Ставим перед экспертом вопросы о скорости, траектории и технической возможности избежать ДТП.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Судебное установление степени вины</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Добиваемся пересмотра долей ответственности и взыскания полной суммы страхового возмещения.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Защита от имущественных требований</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Опровергаем полную ответственность доверителя и снижаем размер заявленных убытков.</span>
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
            <strong style={{ color: 'var(--color-primary)' }}>Важно:</strong> Отдельного универсального иска «об установлении вины в ДТП» законом не предусмотрено. Суд устанавливает обстоятельства и степень вины в рамках конкретного имущественного требования: о страховой выплате по ОСАГО или о возмещении вреда (п. 46 Пленума ВС РФ № 31). Срок обжалования постановления по КоАП РФ — всего 10 дней со дня получения.
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#form" className="btn btn-primary" style={{ display: 'inline-block', padding: '14px 32px' }}>
              Оценить перспективу спора
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: ЧТО СДЕЛАЕТ АВТОЮРИСТ «ДЕ-ЮРЕ» ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Что сделает юрист «Де-Юре»</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Комплексная работа по защите позиции — от сбора быстро исчезающих доказательств</span> <br />
              <span style={{ display: 'inline-block' }}>до фактического вынесения справедливого судебного решения.</span>
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px' }}>
            {[
              {
                num: '01',
                title: <><span style={{ display: 'block' }}>Определение предмета</span><span style={{ display: 'block' }}>и правовой стратегии</span></>,
                desc: 'Разделит постановление по КоАП, страховую выплату и гражданскую ответственность для выбора точного процессуального пути.'
              },
              {
                num: '02',
                title: <><span style={{ display: 'block' }}>Восстановление хронологии</span><span style={{ display: 'block' }}>и механизма аварии</span></>,
                desc: 'Сопоставит схему, объяснения, фото, видеозаписи, дорожную обстановку и точный момент возникновения опасности.'
              },
              {
                num: '03',
                title: <><span style={{ display: 'block' }}>Адвокатские запросы</span><span style={{ display: 'block' }}>и сохранение записей</span></>,
                desc: 'Направит запросы видеозаписей с городских и ведомственных камер, заявит письменные замечания к материалам ГИБДД.'
              },
              {
                num: '04',
                title: <><span style={{ display: 'block' }}>Проверка прямой</span><span style={{ display: 'block' }}>причинной связи</span></>,
                desc: 'Оценит юридическое значение нарушений ПДД и докажет наличие либо отсутствие технической возможности избежать столкновения.'
              },
              {
                num: '05',
                title: <><span style={{ display: 'block' }}>Назначение автоэкспертизы</span><span style={{ display: 'block' }}>и вопросы эксперту</span></>,
                desc: 'Отделит технические параметры от правовых, проверит полноту исходных данных и сформулирует вопросы эксперту.'
              },
              {
                num: '06',
                title: <><span style={{ display: 'block' }}>Представительство в суде</span><span style={{ display: 'block' }}>и защита до результата</span></>,
                desc: 'Подготовит жалобу, претензию по ОСАГО, иск или отзыв и проведёт все заседания в суде до вынесения решения.'
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
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '8px 0 12px 0', lineHeight: 1.35 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <a href="#form" className="btn btn-primary" style={{ display: 'inline-block', padding: '14px 32px' }}>
              Получить консультацию
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 5: КУРАТОР НАПРАВЛЕНИЯ ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name="Дмитрий Сергеевич Конопкин"
        position="Адвокат, председатель Коллегии адвокатов «Де-Юре»"
        imageUrl="/images/konopkin.jpg"
        imagePosition="center 5%"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Дмитрий Сергеевич специализируется на автомобильных спорах: ведёт дела об оспаривании вины в ДТП, защищает от необоснованных требований о возмещении ущерба и представляет доверителей в спорах со страховыми компаниями.
          </span>,
          <span key="2" style={{ color: 'var(--color-deep-blue)', display: 'block', marginTop: '10px' }}>
            Юридическая практика — с 2016 года. Опыт работы в Следственном комитете помогает системно оценивать доказательства, находить противоречия в материалах ГИБДД и грамотно ставить вопросы перед экспертами-автотехниками.
          </span>,
          <ul key="3" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>
                <span style={{ display: 'inline-block' }}>Оспаривание постановлений ГИБДД</span> <br />
                <span style={{ display: 'inline-block' }}>и необоснованных выводов о виновности</span>
              </span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>
                <span style={{ display: 'inline-block' }}>Установление реальной степени вины</span> <br />
                <span style={{ display: 'inline-block' }}>при обоюдной ответственности участников</span>
              </span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>
                <span style={{ display: 'inline-block' }}>Назначение автотехнических экспертиз</span> <br />
                <span style={{ display: 'inline-block' }}>и защита доверителя во всех судебных инстанциях</span>
              </span>
            </li>
          </ul>,
          <a key="4" href="/specialisty/konopkin-dmitriy-sergeevich/" style={{ display: 'inline-block', marginTop: '16px', fontSize: '14px', color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }} data-analytics="specialist_profile_click">
            Подробнее об адвокате Дмитрии Сергеевиче Конопкине →
          </a>
        ]}
        buttonText="Обсудить дело с адвокатом"
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
        title="Как проходит работа"
        subtitle="Прозрачный пошаговый процесс от первичного анализа материалов аварии до судебного решения."
        alignTitle="center"
        steps={[
          {
            num: '01',
            title: 'Получаем материалы ДТП',
            desc: 'Принимаем схему, постановления, протоколы, страховые документы, фото, видео и контакты свидетелей.'
          },
          {
            num: '02',
            title: 'Определяем стадию и сроки',
            desc: 'Выявляем предмет спора, процессуальные сроки и перечень доказательств, которые нужно сохранить срочно.'
          },
          {
            num: '03',
            title: 'Восстанавливаем механизм',
            desc: 'Анализируем причинную связь нарушений с ДТП и оцениваем необходимость привлечения специалиста-автотехника.'
          },
          {
            num: '04',
            title: 'Согласуем стратегию',
            desc: 'Фиксируем состав необходимых юридических действий, стоимость услуг и процессуальный маршрут.'
          },
          {
            num: '05',
            title: 'Ведём спор до результата',
            desc: 'Готовим жалобу по КоАП, страховую претензию, иск или возражения и представляем Ваши интересы в суде.'
          },
          {
            isBanner: true,
            title: 'Дистанционный формат',
            desc: 'Консультацию, правовой анализ видеозаписи и подготовку процессуальных документов можно провести дистанционно по всей России.'
          }
        ]}
        ctaTitle="Готовы обсудить вашу ситуацию"
        ctaSubtitle="Опишите обстоятельства происшествия — автоюрист изучит материалы и подскажет порядок действий."
        ctaButtonText="Обсудить ситуацию"
        ctaButtonHref="#form"
      />

      {/* ═══ БЛОК 8: СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость услуг по оспариванию вины"
        subtitle="Стоимость зависит от стадии дела, объёма имеющихся материалов, необходимости назначения судебной автотехнической экспертизы и формата участия юриста."
        tiers={[
          {
            title: 'Анализ материалов ДТП',
            subtitle: 'Первичная оценка перспектив',
            price: 'от 5 000 ₽',
            features: [
              { name: 'Правовой анализ схемы ДТП и объяснений', value: '✓' },
              { name: 'Оценка видеозаписей и дорожной обстановки', value: '✓' },
              { name: 'Проверка процессуальных сроков обжалования', value: '✓' },
              { name: 'Письменное заключение о перспективах спора', value: '✓' }
            ],
            buttonText: 'Заказать анализ',
            buttonHref: '#form'
          },
          {
            title: 'Жалоба / Позиция',
            subtitle: 'Досудебная и внесудебная защита',
            price: 'от 10 000 ₽',
            popular: true,
            badgeText: 'Популярно',
            features: [
              { name: 'Жалоба на постановление по главе 30 КоАП РФ', value: '✓' },
              { name: 'Адвокатские запросы видеозаписей и дислокации', value: '✓' },
              { name: 'Претензия в страховую компанию по ОСАГО', value: '✓' },
              { name: 'Обращение к финансовому уполномоченному', value: '✓' }
            ],
            buttonText: 'Подготовить жалобу',
            buttonHref: '#form'
          },
          {
            title: 'Судебная защита',
            subtitle: 'Ведение спора «под ключ»',
            price: 'от 25 000 ₽',
            features: [
              { name: 'Составление иска или мотивированного отзыва', value: '✓' },
              { name: 'Ходатайство о назначении автоэкспертизы', value: '✓' },
              { name: 'Формулирование корректных вопросов эксперту', value: '✓' },
              { name: 'Представительство во всех судебных заседаниях', value: '✓' }
            ],
            buttonText: 'Заказать защиту',
            buttonHref: '#form'
          }
        ]}
        ctaTitle="Не знаете, какой формат помощи выбрать?"
        ctaSubtitle="Опишите ситуацию — автоюрист изучит материалы ДТП и предложит оптимальный процессуальный маршрут."
        ctaButtonText="Уточнить стоимость"
        ctaButtonLink="#form"
        disclaimer="Сначала определим, что именно нужно оспаривать: постановление по КоАП, решение страховщика или требование о возмещении ущерба. После анализа документов зафиксируем состав работы и цену в договоре. Судебная экспертиза, госпошлина и почтовые расходы согласуются отдельно."
      />

      {/* ═══ БЛОК 9: FAQ ═══ */}
      <FAQBlock
        superTitle="Частые вопросы"
        title={
          <span style={{ display: 'block' }}>
            <span style={{ display: 'block' }}>Ответы на</span>
            <span style={{ display: 'block' }}>частые вопросы</span>
          </span>
        }
        subtitle="Разъяснения автоюриста по оспариванию вины, обоюдной ответственности и экспертизе ДТП"
        ctaText="Задать свой вопрос"
        ctaLink="#form"
        faqs={faqs}
      />

            {/* ═══ БЛОК: СВЯЗАННЫЕ УСЛУГИ ═══ */}
      <section className="section bg-cream" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '700px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Связанные услуги
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              <span style={{ display: 'inline-block' }}>Смежные направления помощи</span> <br /><span style={{ display: 'inline-block' }}>при ДТП, спорах о виновности</span> <br /><span style={{ display: 'inline-block' }}>и страховых разногласиях.</span>
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
          
          <div className="grid grid-3" style={{ gap: '24px' }}>
            <Link href="/grazhdanam/avtoyurist/spory-po-osago/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
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
                  <span style={{ display: 'inline-block' }}>Споры по ОСАГО</span>
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Взыскание страхового возмещения при занижении выплаты, отказе страховщика или нарушении сроков ремонта.
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
            <Link href="/grazhdanam/avtoyurist/spory-po-kasko/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
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
                  <span style={{ display: 'inline-block' }}>Споры по КАСКО</span>
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Защита прав автовладельцев при отказе страховой компании в выплате, признании случая нестраховым или тотале.
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
            <Link href="/grazhdanam/avtoyurist/vzyskanie-ushcherba-s-vinovnika-dtp/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
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
                  <span style={{ display: 'inline-block' }}>Взыскание ущерба</span> <br /><span style={{ display: 'inline-block' }}>с виновника ДТП</span>
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Взыскание реального ущерба без учёта износа, утраты товарной стоимости и расходов на лечение.
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
            <Link href="/grazhdanam/avtoyurist/" className="all-services-link" style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '16px', textDecoration: 'underline', textUnderlineOffset: '4px', display: 'inline-flex', alignItems: 'center', gap: '6px', transition: 'color 0.2s ease' }}>
              Смотреть все услуги автоюриста →
            </Link>
          </div>
        </div>
      </section>

{/* ═══ БЛОК 11: ФИНАЛЬНАЯ ФОРМА ═══ */}
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
                Проверим материалы и выберем способ оспаривания
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Оставьте номер телефона и кратко укажите: когда произошло ДТП, какой документ уже получен и есть ли видео, схема, решение страховщика или иск.
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
                Не указывайте в форме паспортные данные, реквизиты полиса и другие конфиденциальные сведения. Безопасный способ передачи документов согласуем после связи.
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm 
                title="Оценить шансы оспаривания"
                subtitle="Оставьте имя и номер телефона. Автоюрист перезвонит в течение 15 минут в рабочее время."
                buttonText="Оставить заявку"
                commentPlaceholder="Кратко опишите ситуацию или вопрос…"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style dangerouslySetInnerHTML={{__html: `
        .service-card-smooth {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease !important;
        }
        .service-card-smooth:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 30px rgba(23, 50, 77, 0.08) !important;
          border-color: rgba(193, 160, 102, 0.45) !important;
        }
        .service-card-smooth:hover .card-arrow svg {
          transform: translateX(4px);
        }
        .service-card-smooth .card-arrow svg {
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}} />
    </main>
  );
}
