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
          <>Сообщите дату ДТП, какой документ получен и есть ли видео: <a href="tel:+79103503111" data-analytics="phone_click">+7 (910) 350-31-11</a></>
        }
        trustItems={[
          { text: 'Отделим нарушение ПДД от причинной связи с аварией' },
          { text: 'Проверим полную, частичную и обоюдную вину' },
          { text: 'Сохраним доказательства и процессуальные сроки' },
        ]}
        imageUrl="/images/konopkin.jpg"
        imageName="Дмитрий Сергеевич Конопкин"
        imageSubtitle="Адвокат, председатель Коллегии адвокатов «Де-Юре»"
        imageObjectPosition="center 5%"
      />

      {/* ═══ БЛОК 2: ЧТО СДЕЛАТЬ КАК МОЖНО РАНЬШЕ ПОСЛЕ ДТП ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Что сделать</span> <br />
              <span style={{ display: 'inline-block' }}>как можно раньше после ДТП</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Самые быстро исчезающие доказательства — записи камер, следы на дороге,</span> <br />
              <span style={{ display: 'inline-block' }}>расположение обломков, временные знаки и контакты случайных свидетелей.</span>
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '36px' }}>
            {[
              {
                num: '01',
                title: 'Сфотографируйте место',
                desc: 'Зафиксируйте положение автомобилей, разметку, знаки, светофоры, обзорность, следы торможения, обломки и каждое повреждение.'
              },
              {
                num: '02',
                title: 'Сохраните видеозапись',
                desc: 'Сохраните оригинал файла регистратора и копию отдельно; выясните наличие городских, ведомственных и частных камер до перезаписи данных.'
              },
              {
                num: '03',
                title: 'Проверьте схему ДТП',
                desc: 'Внимательно прочитайте схему и объяснения. Замечания, несогласие, отсутствующие объекты и свидетелей фиксируйте письменно до подписания.'
              },
              {
                num: '04',
                title: 'Запросите копии материалов',
                desc: 'Получите или запросите копии материалов, доступных на текущей стадии: схему, объяснения, протоколы, определения, постановление.'
              },
              {
                num: '05',
                title: 'Не спешите с долями по ОСАГО',
                desc: 'Не согласовывайте со страховщиком окончательную долю ответственности и не подписывайте отказ от требований до правового анализа ситуации.'
              },
              {
                num: '06',
                title: 'Срок жалобы — 10 дней',
                desc: 'Если постановление по КоАП уже вручено, зафиксируйте дату получения: общий срок подачи жалобы составляет всего 10 дней.'
              }
            ].map((step, i) => (
              <div key={i} className="hover-lift service-card-smooth" style={{
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                padding: '32px 24px',
                border: '1px solid var(--color-border)',
                borderTop: '4px solid var(--color-gold)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
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
                  borderRadius: '2px'
                }}>
                  {step.num}
                </div>
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '8px 0 12px 0', lineHeight: 1.35 }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Важно: полупрозрачная плашка */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.75)',
            padding: '22px 28px',
            border: '1px solid rgba(23, 50, 77, 0.08)',
            borderLeft: '4px solid var(--color-gold)',
            fontSize: '14.5px',
            color: 'var(--color-deep-blue)',
            lineHeight: 1.6,
            marginBottom: '32px'
          }}>
            <strong style={{ color: 'var(--color-primary)' }}>Важно:</strong> Сохранение исходных доказательств на раннем этапе важнее проведения платной экспертизы без полного комплекта данных. Экспертиза опирается только на то, что надлежащим образом зафиксировано в материалах дела.
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#form" className="btn btn-primary" style={{ display: 'inline-block', padding: '14px 32px' }}>
              Оценить материалы и риски
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: ЧТО ИМЕННО МОЖНО ОСПАРИВАТЬ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Что именно можно оспаривать</span> <br />
              <span style={{ display: 'inline-block' }}>при споре о виновности в ДТП</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Отдельного универсального иска «об установлении вины в ДТП» законом не предусмотрено.</span> <br />
              <span style={{ display: 'inline-block' }}>Способ защиты зависит от того, какой документ уже составлен и на какой стадии находится дело.</span>
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '36px' }}>
            {[
              {
                tag: 'Первичные данные',
                title: 'Схема и первичные материалы',
                desc: 'Проверяем полноту объектов, масштаб, привязки к ориентирам, соответствие фото и фактической обстановке, а также зафиксированные замечания.'
              },
              {
                tag: 'КоАП РФ',
                title: 'Протокол или постановление',
                desc: 'Анализируем состав правонарушения, допустимость доказательств, соблюдение процедуры, мотивировку, причинную связь и сроки обжалования.'
              },
              {
                tag: 'Ответственность',
                title: 'Вывод о полной ответственности',
                desc: 'Оцениваем действия каждого участника происшествия, техническую возможность избежать ДТП и прямую причинную связь конкретных нарушений.'
              },
              {
                tag: 'Степень вины',
                title: 'Так называемая обоюдная вина',
                desc: 'Выясняем, есть ли действительная ответственность обоих водителей, как соотносятся их действия и какая степень вины может быть доказана в суде.'
              },
              {
                tag: 'ОСАГО',
                title: 'Решение страховщика о доле выплаты',
                desc: 'Проверяем, на каких материалах основано решение об урезании выплаты, установлена ли степень судом и соблюдён ли претензионный порядок.'
              },
              {
                tag: 'Суд',
                title: 'Иск о возмещении ущерба',
                desc: 'Оспариваем вину, причинную связь, степень участия ответчиков, а также относимость заявленных повреждений к данному ДТП.'
              }
            ].map((card, i) => (
              <div key={i} className="hover-lift service-card-smooth" style={{
                background: 'var(--color-white)',
                padding: '32px 24px',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-primary)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{
                    display: 'inline-block',
                    background: 'rgba(23, 50, 77, 0.06)',
                    color: 'var(--color-primary)',
                    fontSize: '12px',
                    fontWeight: 600,
                    padding: '3px 8px',
                    marginBottom: '12px'
                  }}>
                    {card.tag}
                  </div>
                  <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 12px 0', lineHeight: 1.35 }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#form" className="btn btn-primary" style={{ display: 'inline-block' }}>
              Разобрать документы с юристом
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: ПОЧЕМУ НАРУШЕНИЕ ПДД НЕ ВСЕГДА ОЗНАЧАЕТ ВИНУ В АВАРИИ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Почему нарушение ПДД</span> <br />
              <span style={{ display: 'inline-block' }}>не всегда означает вину в причинении вреда</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>В гражданском праве ответственность несёт тот, чьи противоправные действия непосредственно</span> <br />
              <span style={{ display: 'inline-block' }}>привели к столкновению. Штраф по КоАП не предрешает исход спора об ущербе автоматически.</span>
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '32px' }}>
            {[
              {
                num: '01',
                title: 'Нужно установить действие',
                desc: 'Как именно двигались автомобили, какие сигналы светофора, знаки и приоритеты действовали, в какой момент возникла опасность для движения.'
              },
              {
                num: '02',
                title: 'Нужно доказать нарушение',
                desc: 'Вывод должен опираться на допустимые и согласующиеся доказательства, а не только на субъективные объяснения второго участника.'
              },
              {
                num: '03',
                title: 'Нужна прямая причинная связь',
                desc: 'Нарушение должно прямо влиять на возникновение аварии. Постороннее нарушение (например, отсутствие полиса) не определяет вину в столкновении.'
              },
              {
                num: '04',
                title: 'Оцениваются действия обоих',
                desc: 'Даже при нарушении одного водителя суд обязательно проверяет действия второго и его техническую возможность предотвратить ДТП (п. 10.1 ПДД).'
              },
              {
                num: '05',
                title: 'Степень вины может различаться',
                desc: 'Если ответственность есть у обоих, доли определяются судом по обстоятельствам; формулировка «обоюдная вина» не означает автоматические 50/50.'
              }
            ].map((principle, i) => (
              <div key={i} style={{
                display: 'flex',
                gap: '18px',
                padding: '24px',
                border: '1px solid var(--color-border)',
                borderLeft: '3px solid var(--color-primary)',
                background: 'var(--color-white)'
              }}>
                <div style={{ fontSize: '26px', fontWeight: 700, color: 'var(--color-primary)', fontFamily: 'var(--font-serif)', lineHeight: 1, flexShrink: 0, opacity: 0.4, minWidth: '36px' }}>
                  {principle.num}
                </div>
                <div>
                  <h3 style={{ margin: '0 0 8px 0', fontSize: '16.5px', fontWeight: 700, color: 'var(--color-deep-blue)', lineHeight: 1.35 }}>
                    {principle.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    {principle.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 5: КАКИЕ ДОКАЗАТЕЛЬСТВА ИСПОЛЬЗОВАТЬ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Какие доказательства использовать</span> <br />
              <span style={{ display: 'inline-block' }}>для защиты своей позиции</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Комплексный анализ доказательств позволяет опровергнуть недостоверные объяснения</span> <br />
              <span style={{ display: 'inline-block' }}>и восстановить подлинную хронологию развития дорожной ситуации.</span>
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '32px' }}>
            {[
              {
                title: 'Фото и видеозаписи',
                desc: 'Положение машин после удара, сигналы светофоров, траектории, обзорность, момент возникновения опасности и повреждения.'
              },
              {
                title: 'Материалы ГИБДД',
                desc: 'Первично зафиксированная обстановка, письменные объяснения, схема ДТП, протоколы, определения и соблюдение процессуального порядка.'
              },
              {
                title: 'Показания свидетелей',
                desc: 'Непосредственно наблюдаемые факты: сигналы, совершаемые манёвры, примерная скорость и поведение участников до столкновения.'
              },
              {
                title: 'Дорожная обстановка',
                desc: 'Дислокация дорожных знаков, циклограмма работы светофоров, разметка, состояние дорожного полотна, освещённость и ремонтные работы.'
              },
              {
                title: 'Автомобили и следы',
                desc: 'Локализация первого контакта, направление деформаций деталей, следы торможения и заноса, данные бортовых электронных блоков.'
              },
              {
                title: 'Экспертные исследования',
                desc: 'Расчётный механизм столкновения, скорости движения, момент возникновения опасности и техническая возможность предотвратить аварию.'
              }
            ].map((item, i) => (
              <div key={i} className="hover-lift service-card-smooth" style={{
                background: 'var(--color-white)',
                padding: '28px 24px',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-gold)'
              }}>
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0', lineHeight: 1.35 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.75)',
            padding: '20px 24px',
            borderLeft: '3px solid var(--color-primary)',
            fontSize: '14px',
            color: 'var(--color-deep-blue)',
            lineHeight: 1.55
          }}>
            <strong>Внимание к файлам:</strong> Пересланный через мессенджеры ролик может потерять метаданные и детализацию. Всегда сохраняйте исходный файл с карты памяти регистратора и саму карту до завершения разбирательства.
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 6: КОГДА НУЖНА АВТОТЕХНИЧЕСКАЯ ЭКСПЕРТИЗА ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Когда нужна автотехническая экспертиза</span> <br />
              <span style={{ display: 'inline-block' }}>и какие вопросы перед ней ставить</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Эксперт исследует исключительно технические вопросы и параметры движения.</span> <br />
              <span style={{ display: 'inline-block' }}>Правовую оценку действий и виновности участников даёт только суд или должностное лицо.</span>
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '32px' }}>
            {[
              {
                num: '01',
                title: 'Скорость и траектория',
                desc: 'Определение расчётной скорости движения транспортных средств по следам торможения, повреждениям и видеозаписи.'
              },
              {
                num: '02',
                title: 'Момент опасности',
                desc: 'Установление момента времени и расстояния, когда для конкретного водителя возникла объективная необходимость реагировать.'
              },
              {
                num: '03',
                title: 'Возможность избежать ДТП',
                desc: 'Располагал ли водитель технической возможностью предотвратить столкновение путём своевременного торможения (п. 10.1 ПДД).'
              },
              {
                num: '04',
                title: 'Техническое соответствие ПДД',
                desc: 'Исследование того, соответствовали ли действия водителей с технической точки зрения требованиям правил дорожного движения.'
              },
              {
                num: '05',
                title: 'Механизм повреждений',
                desc: 'Соответствуют ли зафиксированные повреждения автомобилей заявленной схеме и направлению приложения ударных нагрузок.'
              }
            ].map((q, i) => (
              <div key={i} className="hover-lift service-card-smooth" style={{
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                padding: '30px 24px',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-primary)'
              }}>
                <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-primary)', fontFamily: 'var(--font-serif)', marginBottom: '8px' }}>
                  {q.num}
                </div>
                <h3 style={{ fontSize: '17px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0', lineHeight: 1.35 }}>
                  {q.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  {q.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#form" className="btn btn-primary" style={{ display: 'inline-block' }}>
              Сформулировать вопросы эксперту
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 7: МАРШРУТЫ ЗАЩИТЫ ПО СТАДИЯМ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Маршруты защиты</span> <br />
              <span style={{ display: 'inline-block' }}>в зависимости от стадии дела</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Порядок действий и процессуальные инструменты подбираются под конкретную стадию спора.</span>
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '28px' }}>
            {[
              {
                stage: 'Стадия 01',
                title: 'Оформление и проверка материалов',
                action: 'Подача письменных замечаний к схеме, ходатайства об истребовании записей камер, фиксация свидетелей и дорожной обстановки.',
                result: 'Формирование полного комплекта исходных данных и фиксация правовой позиции до утраты критически важных доказательств.'
              },
              {
                stage: 'Стадия 02',
                title: 'Дело об административном правонарушении',
                action: 'Подготовка мотивированных возражений, участие в разборе в ГИБДД, а при вынесении постановления — жалоба по главе 30 КоАП РФ (10 дней).',
                result: 'Отмена незаконного постановления, исключение недостоверных выводов и прекращение административного производства.'
              },
              {
                stage: 'Стадия 03',
                title: 'Спор со страховой компанией по ОСАГО',
                action: 'Подача заявления в страховую, направление мотивированной претензии, обращение к финансовому уполномоченному и последующий иск в суд.',
                result: 'Судебное установление действительной степени вины и взыскание полной причитающейся суммы страхового возмещения.'
              },
              {
                stage: 'Стадия 04',
                title: 'Иск об ущербе или защита от иска',
                action: 'Формирование исковых требований или мотивированных возражений на иск, ходатайство о судебной экспертизе и доказывание вины.',
                result: 'Взыскание ущерба с виновника либо снижение суммы требований при предъявлении иска к доверителю.'
              }
            ].map((route, i) => (
              <div key={i} className="hover-lift service-card-smooth" style={{
                background: 'var(--color-white)',
                padding: '36px 30px',
                border: '1px solid var(--color-border)',
                borderTop: '4px solid var(--color-gold)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ color: 'var(--color-gold)', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                    {route.stage}
                  </div>
                  <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 16px 0', lineHeight: 1.3 }}>
                    {route.title}
                  </h3>
                  <div style={{ marginBottom: '14px' }}>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Действия юриста:</div>
                    <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>{route.action}</p>
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '4px' }}>Ожидаемый результат:</div>
                    <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>{route.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 8: ЧТО СДЕЛАЕТ ЮРИСТ «ДЕ-ЮРЕ» ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Что сделает автоюрист</span> <br />
              <span style={{ display: 'inline-block' }}>по оспариванию вины в ДТП</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Системное юридическое сопровождение от анализа схемы до защиты интересов в суде.</span>
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px' }}>
            {[
              {
                num: '01',
                title: 'Определит предмет спора',
                desc: 'Разделит постановление по КоАП, страховую выплату и гражданскую ответственность, чтобы исключить неверный процессуальный путь.'
              },
              {
                num: '02',
                title: 'Восстановит хронологию',
                desc: 'Сопоставит схему, объяснения, фото, видео, повреждения, дорожную обстановку и момент возникновения опасности.'
              },
              {
                num: '03',
                title: 'Сохранит доказательства',
                desc: 'Подготовит адвокатские запросы видеозаписей, ходатайства, письменные замечания и перечень материалов для срочного истребования.'
              },
              {
                num: '04',
                title: 'Проверит причинную связь',
                desc: 'Оценит юридическое значение каждого нарушения ПДД и действий обоих участников для установления причин столкновения.'
              },
              {
                num: '05',
                title: 'Сформулирует вопросы эксперту',
                desc: 'Отделит технические вопросы от правовых, проверит полноту исходных данных и проконтролирует ход исследования.'
              },
              {
                num: '06',
                title: 'Представит интересы',
                desc: 'Подготовит жалобу в суд или ГИБДД, страховую претензию, иск или возражения и проведёт судебные заседания.'
              }
            ].map((action, i) => (
              <div key={i} className="hover-lift service-card-smooth" style={{
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                padding: '34px 24px',
                border: '1px solid var(--color-border)',
                borderTop: '4px solid var(--color-gold)',
                position: 'relative'
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
                  borderRadius: '2px'
                }}>
                  {action.num}
                </div>
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '8px 0 12px 0', lineHeight: 1.35 }}>
                  {action.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {action.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 9: ДОКУМЕНТЫ ДЛЯ ПЕРВИЧНОЙ ОЦЕНКИ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Какие документы подготовить</span> <br />
              <span style={{ display: 'inline-block' }}>для первичной оценки ситуации</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Предоставьте имеющиеся материалы. Если части документов не хватает, юрист подскажет,</span> <br />
              <span style={{ display: 'inline-block' }}>как и где их запросить в установленном законом порядке.</span>
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '20px', marginBottom: '32px' }}>
            {[
              {
                title: 'Материалы ДТП',
                items: ['Извещение о ДТП, схема происшествия', 'Протоколы, определения, постановление ГИБДД', 'Объяснения участников ДТП']
              },
              {
                title: 'Фото и видео',
                items: ['Оригинал записи с видеорегистратора', 'Фотографии с места аварии и повреждений', 'Сведения о расположении городских камер']
              },
              {
                title: 'Дорожная обстановка',
                items: ['Фото дорожных знаков и разметки', 'Сведения о режиме работы светофора', 'Данные о погодных условиях и ремонте дороги']
              },
              {
                title: 'Данные об автомобилях',
                items: ['СТС и ПТС на транспортные средства', 'Акты осмотра ТС страховой компанией', 'Сведения об установленном оборудовании']
              },
              {
                title: 'Страховые документы',
                items: ['Полисы ОСАГО и КАСКО участников', 'Заявление о страховой выплате и решение', 'Расчёт страховой выплаты / отказ']
              },
              {
                title: 'Судебные материалы',
                items: ['Исковое заявление и отзыв на иск', 'Определения суда и заключения экспертов', 'Копии ранее принятых судебных актов']
              }
            ].map((cat, i) => (
              <div key={i} className="hover-lift service-card-smooth" style={{
                background: 'var(--color-white)',
                padding: '26px 22px',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-primary)'
              }}>
                <h3 style={{ fontSize: '17px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.3 }}>
                  {cat.title}
                </h3>
                <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {cat.items.map((item, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.45 }}>
                      <span style={{ color: 'var(--color-gold)', fontWeight: 'bold' }}>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#form" className="btn btn-primary" style={{ display: 'inline-block' }}>
              Отправить материалы на проверку
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 10: КУРАТОР НАПРАВЛЕНИЯ ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name="Дмитрий Сергеевич Конопкин"
        position="Адвокат, председатель Коллегии адвокатов «Де-Юре»"
        imageUrl="/images/konopkin.jpg"
        imagePosition="center 15%"
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

      {/* ═══ БЛОК 11: ПРИМЕРЫ ИЗ ПРАКТИКИ ═══ */}
      <CasesBlock
        title="Примеры из практики"
        showAllLink="/praktika/"
        showAllText="Смотреть все дела"
        showDemoWarning={true}
        cases={cases}
      />

      {/* ═══ БЛОК 12: КАК ПРОХОДИТ РАБОТА ═══ */}
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

      {/* ═══ БЛОК 13: СТОИМОСТЬ ═══ */}
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

      {/* ═══ БЛОК 14: FAQ ═══ */}
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

      {/* ═══ БЛОК 15: ДРУГИЕ АВТОМОБИЛЬНЫЕ СИТУАЦИИ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '40px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Другие автомобильные споры</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Если Ваша задача шире или связана с другими вопросами автоправа — выберите подходящее направление.</span>
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '20px' }}>
            {[
              {
                title: 'Споры по ОСАГО',
                desc: 'Если ответственность уже определена, но страховая компания отказала в выплате или занизила сумму ущерба.',
                link: '/grazhdanam/avtoyurist/spory-po-osago/'
              },
              {
                title: 'Взыскание с виновника ДТП',
                desc: 'Если после определения вины требуется взыскать с причинителя вреда непокрытую страховкой часть ущерба.',
                link: '/grazhdanam/avtoyurist/vzyskanie-ushcherba-s-vinovnika-dtp/'
              },
              {
                title: 'ДТП без ОСАГО',
                desc: 'Если у виновника аварии отсутствует действующий полис ОСАГО или он скрылся с места происшествия.',
                link: '/grazhdanam/avtoyurist/dtp-bez-osago/'
              },
              {
                title: 'Оставление места ДТП',
                desc: 'Защита при угрозе лишения водительских прав по ч. 2 ст. 12.27 КоАП РФ за оставление места происшествия.',
                link: '/grazhdanam/avtoyurist/ostavlenie-mesta-dtp/'
              }
            ].map((item, i) => (
              <a key={i} href={item.link} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }} data-analytics="related_service_click">
                <div className="card service-card service-card-smooth" style={{
                  height: '100%',
                  padding: '24px 20px',
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '0',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderTop: '3px solid var(--color-primary)',
                  cursor: 'pointer'
                }}>
                  <div>
                    <h3 style={{ margin: '0 0 10px 0', fontSize: '17px', color: 'var(--color-deep-blue)', lineHeight: 1.35, fontFamily: 'var(--font-serif)' }}>
                      {item.title}
                    </h3>
                    <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                      {item.desc}
                    </p>
                  </div>
                  <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontSize: '13.5px', fontWeight: 600, marginTop: '16px' }}>
                    <span>Подробнее</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </div>
                </div>
              </a>
            ))}
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
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '28px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', margin: '0 0 16px 0', lineHeight: 1.2 }}>
                  Проверить материалы ДТП
                </h3>
                <p style={{ color: 'var(--color-text-secondary)', marginBottom: '24px', fontSize: '15px', lineHeight: 1.6 }}>
                  <span style={{ display: 'inline-block' }}>Оставьте имя и номер телефона. Автоюрист перезвонит</span> <br />
                  <span style={{ display: 'inline-block' }}>в течение 15 минут в рабочее время.</span>
                </p>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <input type="hidden" name="source_page" value="/grazhdanam/avtoyurist/osparivanie-viny-v-dtp/" />
                  <input type="hidden" name="direction" value="avtoyurist" />
                  <input type="hidden" name="service" value="osparivanie-viny-v-dtp" />
                  <input type="hidden" name="selected_specialist" value="konopkin-dmitriy-sergeevich" />
                  <input type="hidden" name="audience" value="citizens" />

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="name" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-deep-blue)' }}>Имя (необязательно)</label>
                    <input type="text" id="name" name="name" autoComplete="name" placeholder="Иван Иванов" style={{ padding: '14px 16px', border: '1px solid rgba(23, 50, 77, 0.2)', borderRadius: '0', fontSize: '15px', outline: 'none', background: 'var(--color-white)', color: 'var(--color-deep-blue)', fontFamily: 'inherit' }} />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="phone" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-deep-blue)' }}>
                      Телефон <span style={{ color: 'var(--color-gold)' }}>*</span>
                    </label>
                    <input type="tel" id="phone" name="phone" autoComplete="tel" required placeholder="+7 (___) ___-__-__" pattern="^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$" style={{ padding: '14px 16px', border: '1px solid rgba(23, 50, 77, 0.2)', borderRadius: '0', fontSize: '15px', outline: 'none', width: '100%', background: 'var(--color-white)', color: 'var(--color-deep-blue)', fontFamily: 'inherit' }} />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="stage" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-deep-blue)' }}>Стадия дела</label>
                    <select id="stage" name="stage" style={{ padding: '14px 16px', border: '1px solid rgba(23, 50, 77, 0.2)', borderRadius: '0', fontSize: '15px', outline: 'none', background: 'var(--color-white)', color: 'var(--color-deep-blue)', fontFamily: 'inherit' }}>
                      <option value="scene">Только произошло / оформление</option>
                      <option value="administrative">Дело в ГИБДД / до вынесения решения</option>
                      <option value="decision">Постановление уже вынесено (срок 10 дней)</option>
                      <option value="insurance">Спор со страховой / отказ / 50% выплаты</option>
                      <option value="civil_claim">Судебный иск о возмещении ущерба</option>
                    </select>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="message" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-deep-blue)' }}>Кратко опишите ситуацию (необязательно)</label>
                    <textarea id="message" name="message" rows={3} placeholder="Укажите дату ДТП, суть спора и наличие видео/схемы..." style={{ padding: '14px 16px', border: '1px solid rgba(23, 50, 77, 0.2)', borderRadius: '0', fontSize: '15px', outline: 'none', fontFamily: 'inherit', resize: 'vertical', background: 'var(--color-white)', color: 'var(--color-deep-blue)' }} />
                  </div>

                  <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer', marginTop: '4px' }}>
                    <input type="checkbox" name="agreement" required style={{ marginTop: '3px', accentColor: 'var(--color-gold)', flexShrink: 0 }} />
                    <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      <Link href="/consent/" target="_blank" style={{ color: 'var(--color-deep-blue)', textDecoration: 'underline' }}>Я даю согласие на обработку персональных данных</Link> и подтверждаю, что ознакомлен с <Link href="/privacy/" target="_blank" style={{ color: 'var(--color-deep-blue)', textDecoration: 'underline' }}>Политикой в отношении обработки персональных данных</Link>.
                    </span>
                  </label>

                  <button type="submit" style={{ width: '100%', padding: '16px', fontSize: '16px', marginTop: '8px', background: '#10273B', color: '#FFFFFF', border: '1px solid #9B7E55', borderRadius: '0', whiteSpace: 'nowrap', fontWeight: 600, cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: '0 4px 12px rgba(16, 39, 59, 0.15)' }}>
                    Проверить материалы ДТП
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
