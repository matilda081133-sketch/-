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

      {/* ═══ БЛОК 2: ЧТО ГРОЗИТ И ЧТО ДОЛЖНО БЫТЬ ДОКАЗАНО ═══ */}
      <section style={{ background: 'var(--color-deep-blue)', padding: '80px 0 72px', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '40px', textAlign: 'left' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-white)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                Ответственность наступает не за любой
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                отъезд после происшествия
              </span>
            </h2>
            <div style={{ width: '60px', height: '2px', background: 'var(--color-gold)', marginBottom: '24px' }}></div>
            
            <div style={{
              background: 'rgba(255, 255, 255, 0.08)',
              borderLeft: '4px solid var(--color-gold)',
              padding: '18px 24px',
              marginBottom: '24px',
              color: 'rgba(255, 255, 255, 0.95)',
              fontSize: '15px',
              lineHeight: 1.6
            }}>
              <strong style={{ color: '#FFFFFF' }}>Правовая рамка (ч. 2 ст. 12.27 КоАП РФ):</strong> Оставление водителем места ДТП в нарушение ПДД при отсутствии признаков преступления влечёт лишение права управления на срок от одного года до полутора лет либо административный арест до пятнадцати суток. <span style={{ opacity: 0.75, fontSize: '13.5px' }}>(редакция проверена 11.08.2026)</span>
            </div>

            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', margin: 0, lineHeight: 1.65, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Для привлечения к ответственности суд должен установить не только перемещение</span> <br className="hidden-mobile" />
              <span style={{ display: 'inline-block' }}>автомобиля, но и юридически значимые обстоятельства: событие ДТП, причастность водителя,</span> <br className="hidden-mobile" />
              <span style={{ display: 'inline-block' }}>нарушение порядка оформления и умышленную форму вины.</span>
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '20px' }}>
            {[
              {
                num: '01',
                title: 'Событие ДТП',
                desc: 'Событие должно возникнуть в процессе движения транспортного средства и повлечь предусмотренные ПДД последствия: вред людям, повреждение транспорта, сооружений, груза или иной материальный ущерб.'
              },
              {
                num: '02',
                title: 'Причастность водителя',
                desc: 'Нужно установить связь действий конкретного водителя с происшествием. Механического контакта может не быть, если нарушение водителя стало причиной ДТП и он осознавал произошедшее.'
              },
              {
                num: '03',
                title: 'Порядок оформления',
                desc: 'Проверяется, имел ли водитель право переместить автомобиль, оформить происшествие без полиции или следовать указаниям сотрудника полиции о месте оформления.'
              },
              {
                num: '04',
                title: 'Умышленная вина',
                desc: 'Суд оценивает, понимал ли водитель, что произошло ДТП, и желал ли покинуть место в нарушение правил. Умысел нельзя подменять предположением.'
              }
            ].map((card, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderTop: '3px solid var(--color-gold)',
                padding: '28px 22px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)' }}>
                  {card.num}
                </span>
                <h3 style={{ margin: 0, fontSize: '18px', color: 'var(--color-white)', fontFamily: 'var(--font-serif)', lineHeight: 1.3 }}>
                  {card.title}
                </h3>
                <p style={{ margin: 0, fontSize: '14px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.55 }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: СИТУАЦИИ, В КОТОРЫХ НУЖЕН АДВОКАТ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                Когда особенно важно
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                проверить материалы до суда
              </span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Фактические обстоятельства каждого случая индивидуальны. Разбираем конкретную</span> <br className="hidden-mobile" />
              <span style={{ display: 'inline-block' }}>ситуацию до дачи объяснений в ГИБДД или первого судебного заседания.</span>
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '40px' }}>
            {[
              {
                tag: 'Касание без повреждений',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Не заметили касания</span>
                    <span style={{ display: 'block' }}>или повреждения</span>
                  </>
                ),
                desc: 'Нужно сопоставить характер удара, размер и локализацию повреждений, шум, обзор, габариты автомобиля, видео и последующее поведение.'
              },
              {
                tag: 'Освобождение дороги',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Отъехали, чтобы не</span>
                    <span style={{ display: 'block' }}>блокировать движение</span>
                  </>
                ),
                desc: 'Важно, насколько далеко переместился автомобиль, была ли зафиксирована обстановка, оставался ли водитель доступен для оформления и имелся ли умысел покинуть место.'
              },
              {
                tag: 'Парковочный контакт',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Задели припаркованный</span>
                    <span style={{ display: 'block' }}>автомобиль</span>
                  </>
                ),
                desc: 'Отсутствие второго водителя не отменяет обязанностей участника ДТП. Ключевыми становятся записи камер, повреждения, время и действия после контакта.'
              },
              {
                tag: 'Устная договорённость',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Участники договорились</span>
                    <span style={{ display: 'block' }}>на месте</span>
                  </>
                ),
                desc: 'Устная договорённость или расписка не всегда означают, что требования ПДД и правила оформления были соблюдены.'
              },
              {
                tag: 'Помощь пострадавшему',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Доставляли пострадавшего</span>
                    <span style={{ display: 'block' }}>в больницу</span>
                  </>
                ),
                desc: 'ПДД допускают это в экстренном случае при определённых условиях, но требуют сообщить данные и возвратиться к месту происшествия.'
              },
              {
                tag: 'Вызов постфактум',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Вызвали в ГИБДД</span>
                    <span style={{ display: 'block' }}>спустя несколько дней</span>
                  </>
                ),
                desc: 'Нужно выяснить, на каких доказательствах основана причастность, запросить материалы и подготовить последовательные объяснения.'
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

          <div style={{ textAlign: 'center' }}>
            <a href="#form" className="btn btn-primary" style={{ display: 'inline-block', padding: '14px 36px' }} data-analytics="cta_click">
              Разобрать мою ситуацию с адвокатом
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: ЧТО СДЕЛАТЬ ДО ОБЪЯСНЕНИЙ ИЛИ СУДА ═══ */}
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
              <span style={{ display: 'inline-block' }}>Первые действия после вызова или происшествия определяют возможность</span> <br className="hidden-mobile" />
              <span style={{ display: 'inline-block' }}>доказать отсутствие умысла и защитить водительские права.</span>
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '24px', marginBottom: '32px' }}>
            {[
              {
                num: '01',
                title: 'Зафиксируйте хронологию событий',
                text: 'Запишите маршрут, время, место остановки, звонки, сообщения и свои действия сразу после события. Не редактируйте исходные файлы.'
              },
              {
                num: '02',
                title: 'Сохраните запись видеорегистратора',
                text: 'Сделайте копии записи видеорегистратора, фото автомобиля и места, сохраните данные навигации, парковки, пропускной системы и контакты свидетелей.'
              },
              {
                num: '03',
                title: 'Уточните процессуальный статус',
                text: 'Выясните, куда и в каком качестве Вас вызывают, номер материала, дату явки или заседания. Получите копии составленных документов.'
              },
              {
                num: '04',
                title: 'Не подписывайте пустые бланки',
                text: 'Не подписывайте документы, содержание которых непонятно. Замечания излагайте письменно и добивайтесь их внесения в протокол.'
              },
              {
                num: '05',
                title: 'Обсудите факты с адвокатом до дачи объяснений',
                text: 'До подробных объяснений согласуйте позицию с защитником. Не придумывайте недостоверных версий и не уничтожайте записи.'
              }
            ].map((step, i) => (
              <div key={i} style={{
                padding: '28px 26px',
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                border: '1px solid var(--color-border)',
                borderLeft: '4px solid var(--color-primary)',
                boxShadow: '0 4px 16px rgba(23, 50, 77, 0.04)',
                display: 'flex',
                gap: '18px',
                alignItems: 'flex-start'
              }}>
                <span style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', flexShrink: 0 }}>
                  {step.num}
                </span>
                <div>
                  <h3 style={{ margin: '0 0 8px 0', fontSize: '17px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', lineHeight: 1.35 }}>
                    {step.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            background: 'var(--color-white)',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid #C62828',
            padding: '22px 28px',
            boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)',
            fontSize: '15px',
            color: 'var(--color-deep-blue)',
            lineHeight: 1.6
          }}>
            <strong style={{ color: '#C62828' }}>Если люди пострадали:</strong> Окажите помощь, вызовите скорую медицинскую помощь и полицию. При возможной уголовной квалификации (тяжкий вред здоровью или гибель людей по ст. 264 УК РФ) требуется отдельная срочная защита <a href="/ugolovnye-dela/" style={{ color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>адвоката по уголовным делам</a>.
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 5: ЧТО ПРОВЕРИТ АДВОКАТ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                Защита строится на фактах,
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                а не на одной формальной ошибке
              </span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Анализируем доказательства в совокупности, сопоставляя каждую деталь с требованиями закона</span> <br className="hidden-mobile" />
              <span style={{ display: 'inline-block' }}>и актуальной правоприменительной практикой Верховного Суда РФ.</span>
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {[
              {
                title: 'Наличие события ДТП',
                desc: 'Характер события, движение автомобиля, наличие материального ущерба или вреда, место и время происшествия.'
              },
              {
                title: 'Причастность водителя',
                desc: 'Траектория, контакты, записи камер, показания, повреждения, причинная связь между действиями водителя и последствиями.'
              },
              {
                title: 'Осведомлённость и умысел',
                desc: 'Мог ли водитель почувствовать или увидеть событие, его действия сразу после него, остановка, звонки, возвращение, общение с участниками.'
              },
              {
                title: 'Соблюдение норм ПДД',
                desc: 'Были ли основания освободить проезжую часть, оформить ДТП без полиции, покинуть место по указанию сотрудника либо доставить пострадавшего.'
              },
              {
                title: 'Процессуальные документы',
                desc: 'Протоколы, схема, объяснения, извещение, разъяснение прав, ходатайства, противоречия и полнота материалов дела.'
              },
              {
                title: 'Допустимость доказательств',
                desc: 'Источник и содержание видеозаписей, показания свидетелей, осмотры, фототаблицы, экспертные выводы и возможность их проверки.'
              },
              {
                title: 'Сроки давности и стадия',
                desc: 'Дата составления материалов, срок привлечения к ответственности, судебное заседание, вручение постановления и срок обжалования.'
              }
            ].map((check, i) => (
              <div key={i} className="hover-lift" style={{
                padding: '24px 22px',
                background: '#FFFFFF',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-primary)',
                boxShadow: '0 4px 16px rgba(23, 50, 77, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <h3 style={{ margin: 0, fontSize: '17px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', lineHeight: 1.3 }}>
                    {check.title}
                  </h3>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                  {check.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 6: ВАРИАНТЫ ПОМОЩИ ПО СТАДИЯМ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                Подключимся на текущей
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                стадии дела
              </span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Объём участия адвоката определяется стадией административного процесса</span> <br className="hidden-mobile" />
              <span style={{ display: 'inline-block' }}>и поставленными доверителем задачами.</span>
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '40px' }}>
            {[
              {
                num: '01',
                title: 'До составления протокола',
                desc: 'Уточним стадию, изучим первичные документы, поможем сохранить доказательства и подготовиться к даче объяснений и ходатайствам.'
              },
              {
                num: '02',
                title: 'При оформлении в ГИБДД',
                desc: 'Проверим документы, зафиксируем замечания, заявим ходатайства об истребовании видеозаписей и доказательств, не допуская поспешных признаний.'
              },
              {
                num: '03',
                title: 'В мировом суде',
                desc: 'Сформируем правовую позицию, представим доказательства, допросим свидетелей и инспекторов, заявим ходатайства и возражения, примем личное участие в заседаниях.'
              },
              {
                num: '04',
                title: 'При обжаловании',
                desc: 'Проверим постановление и материалы дела, подготовим мотивированную жалобу по конкретным выводам суда и представим интересы при её рассмотрении.'
              },
              {
                num: '05',
                title: 'После вступления в силу',
                desc: 'Оценим предусмотренные законом способы дальнейшего пересмотра и перспективу их применения без обещания гарантированной отмены.'
              }
            ].map((stage, i) => (
              <div key={i} className="hover-lift" style={{
                padding: '30px 24px',
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-gold)',
                boxShadow: '0 4px 16px rgba(23, 50, 77, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Стадия {stage.num}
                </span>
                <h3 style={{ margin: 0, fontSize: '18px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', lineHeight: 1.35 }}>
                  {stage.title}
                </h3>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#form" className="btn btn-primary" style={{ display: 'inline-block', padding: '14px 36px' }} data-analytics="cta_click">
              Обсудить стадию дела с адвокатом
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

      {/* ═══ БЛОК 8: ПРИМЕРЫ ИЗ ПРАКТИКИ ═══ */}
      <CasesBlock
        title="Примеры из практики"
        showAllLink="/praktika/"
        showAllText="Смотреть все дела"
        showDemoWarning={true}
        cases={cases}
      />

      {/* ═══ БЛОК 9: КАК ПРОХОДИТ РАБОТА ═══ */}
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

      {/* ═══ БЛОК 10: СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость юридической помощи"
        subtitle="На стоимость влияют объём материалов дела, необходимость срочно сохранять и истребовать доказательства, количество судебных заседаний и стадия процесса."
        tiers={pricingTiers}
      />

      {/* ═══ БЛОК 11: ДОКУМЕНТЫ ДЛЯ ПЕРВИЧНОГО АНАЛИЗА ═══ */}
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

      {/* ═══ БЛОК 12: ЧАСТЫЕ ВОПРОСЫ (FAQ) ═══ */}
      <FAQBlock
        title="Частые вопросы"
        subtitle="Ответы на ключевые вопросы по делам об оставлении места происшествия по части 2 статьи 12.27 КоАП РФ."
        faqs={faqs}
      />

      {/* ═══ БЛОК 13: ДРУГИЕ АВТОМОБИЛЬНЫЕ СИТУАЦИИ ═══ */}
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

      {/* ═══ БЛОК 14: ФИНАЛЬНАЯ ФОРМА ═══ */}
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
