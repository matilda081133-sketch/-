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
      a: 'По редакции, проверенной 11 августа 2026 года, предусмотрено лишение права управления на срок от одного года до полутора лет либо административный арест до пятнадцати суток. Перед публикацией и при каждом обновлении норму нужно перепроверять.'
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
            <span>Защита при оставлении места ДТП</span>
          </>
        }
        superTitle="Автомобильные споры"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Защита при оставлении
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              места ДТП в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Проверим, было ли событие ДТП и доказан ли умысел на оставление места, изучим схему, записи камер, повреждения и объяснения, подготовим позицию для ГИБДД и суда.
          </span>
        }
        primaryCtaText="Обсудить ситуацию"
        primaryCtaLink="#form"
        primaryCtaAnalytics="cta_click"
        primaryCtaSubtext={
          <>
            <span style={{ display: 'inline-block' }}>Если Вас уже вызывают в ГИБДД или суд, сообщите дату и не откладывайте передачу документов:</span> <br className="hidden-mobile" />
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
      <section style={{ background: 'var(--color-deep-blue)', padding: '64px 0 56px', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-white)', marginBottom: '12px', marginTop: 0 }}>
            Ответственность наступает не за любой отъезд после происшествия
          </h2>
          <div style={{ width: '60px', height: '2px', background: 'var(--color-gold)', marginBottom: '20px' }}></div>
          
          <div style={{
            background: 'rgba(255, 255, 255, 0.08)',
            borderLeft: '4px solid var(--color-gold)',
            padding: '16px 20px',
            marginBottom: '24px',
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '14.5px',
            lineHeight: 1.55
          }}>
            <strong>Правовая рамка (ч. 2 ст. 12.27 КоАП РФ):</strong> Оставление водителем места ДТП в нарушение ПДД при отсутствии признаков преступления влечёт лишение права управления на срок от одного года до полутора лет либо административный арест до пятнадцати суток. <span style={{ opacity: 0.7, fontSize: '13px' }}>(редакция проверена 11.08.2026)</span>
          </div>

          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15.5px', marginBottom: '36px', maxWidth: '880px', lineHeight: 1.6 }}>
            Для привлечения к ответственности суд должен установить не только перемещение или отсутствие водителя на первоначальной точке, но и юридически значимые обстоятельства: было ли дорожно-транспортное происшествие, являлся ли человек его участником, нарушал ли он порядок действий после ДТП и осознавал ли факт происшествия, умышленно оставляя место. Каждый элемент проверяется по материалам дела.
          </p>

          <div className="grid grid-4" style={{ gap: '20px' }}>
            {[
              {
                title: 'Событие ДТП',
                desc: 'Событие должно возникнуть в процессе движения транспортного средства и повлечь предусмотренные ПДД последствия: вред людям, повреждение транспорта, сооружений, груза или иной материальный ущерб.'
              },
              {
                title: 'Причастность водителя',
                desc: 'Нужно установить связь действий конкретного водителя с происшествием. Механического контакта может не быть, если нарушение водителя стало причиной ДТП и он осознавал произошедшее.'
              },
              {
                title: 'Порядок оформления',
                desc: 'Проверяется, имел ли водитель право переместить автомобиль, оформить происшествие без полиции или следовать указаниям сотрудника полиции о месте оформления.'
              },
              {
                title: 'Умышленная форма вины',
                desc: 'Суд оценивает, понимал ли водитель, что произошло ДТП, и желал ли покинуть место в нарушение правил. Умысел нельзя подменять предположением.'
              }
            ].map((card, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderTop: '3px solid var(--color-gold)',
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                <h3 style={{ margin: 0, fontSize: '17px', color: 'var(--color-white)', fontFamily: 'var(--font-serif)' }}>
                  {card.title}
                </h3>
                <p style={{ margin: 0, fontSize: '13.5px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.55 }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: СИТУАЦИИ, В КОТОРЫХ НУЖЕН АДВОКАТ ═══ */}
      <section className="section bg-light" style={{ padding: '64px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(26px, 3.6vw, 38px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Когда особенно важно проверить материалы до суда
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Фактические обстоятельства каждого случая индивидуальны. Разбираем конкретную ситуацию до дачи объяснений в ГИБДД или первого заседания.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '36px' }}>
            {[
              {
                tag: 'Касание без повреждений',
                title: 'Не заметили касания или повреждения',
                desc: 'Нужно сопоставить характер удара, размер и локализацию повреждений, шум, обзор, габариты автомобиля, видео и последующее поведение.'
              },
              {
                tag: 'Освобождение дороги',
                title: 'Отъехали, чтобы не блокировать движение',
                desc: 'Важно, насколько далеко переместился автомобиль, была ли зафиксирована обстановка, оставался ли водитель доступен для оформления и имелся ли умысел покинуть место.'
              },
              {
                tag: 'Парковочный контакт',
                title: 'Задели припаркованный автомобиль',
                desc: 'Отсутствие второго водителя не отменяет обязанностей участника ДТП. Ключевыми становятся записи камер, повреждения, время и действия после контакта.'
              },
              {
                tag: 'Устная договорённость',
                title: 'Участники договорились на месте',
                desc: 'Устная договорённость или расписка не всегда означают, что требования ПДД и правила оформления были соблюдены.'
              },
              {
                tag: 'Помощь пострадавшему',
                title: 'Доставляли пострадавшего в больницу',
                desc: 'ПДД допускают это в экстренном случае при определённых условиях, но требуют сообщить данные и возвратиться к месту происшествия.'
              },
              {
                tag: 'Вызов постфактум',
                title: 'Вызвали спустя несколько дней',
                desc: 'Нужно выяснить, на каких доказательствах основана причастность, запросить материалы и подготовить последовательные объяснения.'
              }
            ].map((item, i) => (
              <div key={i} className="hover-lift" style={{
                padding: '30px 24px',
                background: '#FFFFFF',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-primary)',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                <span style={{ fontSize: '11.5px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {item.tag}
                </span>
                <h3 style={{ margin: 0, fontSize: '17px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', lineHeight: 1.35 }}>
                  {item.title}
                </h3>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#form" className="btn btn-primary" style={{ display: 'inline-block', padding: '14px 32px' }} data-analytics="cta_click">
              Разобрать мою ситуацию с адвокатом
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: ЧТО СДЕЛАТЬ ДО ОБЪЯСНЕНИЙ ИЛИ СУДА ═══ */}
      <section className="section bg-white" style={{ padding: '64px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(26px, 3.6vw, 38px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Не теряйте доказательства и не формируйте версию наугад
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Первые действия после вызова или происшествия определяют возможность доказать отсутствие умысла и защитить свои права.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '20px', marginBottom: '32px' }}>
            {[
              {
                num: '01',
                title: 'Зафиксируйте хронологию',
                text: 'Запишите маршрут, время, место остановки, звонки, сообщения и свои действия сразу после события. Не редактируйте исходные файлы.'
              },
              {
                num: '02',
                title: 'Сохраните запись регистратора',
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
                title: 'Обсудите факты с адвокатом',
                text: 'До подробных объяснений согласуйте позицию с защитником. Не придумывайте недостоверных версий и не уничтожайте записи.'
              }
            ].map((step, i) => (
              <div key={i} style={{
                padding: '24px 22px',
                background: 'var(--color-white)',
                border: '1px solid var(--color-border)',
                borderLeft: '4px solid var(--color-primary)',
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start'
              }}>
                <span style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', flexShrink: 0 }}>
                  {step.num}
                </span>
                <div>
                  <h3 style={{ margin: '0 0 6px 0', fontSize: '16.5px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)' }}>
                    {step.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            background: 'rgba(23, 50, 77, 0.04)',
            borderLeft: '4px solid #C62828',
            padding: '18px 24px',
            fontSize: '14.5px',
            color: 'var(--color-deep-blue)',
            lineHeight: 1.55
          }}>
            <strong style={{ color: '#C62828' }}>Если люди пострадали:</strong> Окажите помощь, вызовите скорую помощь и полицию. При возможной уголовной квалификации (тяжкий вред здоровью или гибель людей) требуется отдельная срочная защита <a href="/ugolovnye-dela/" style={{ color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'underline' }}>адвоката по уголовным делам</a>.
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 5: ЧТО ПРОВЕРИТ АДВОКАТ ═══ */}
      <section className="section bg-light" style={{ padding: '64px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(26px, 3.6vw, 38px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Защита строится на фактах, а не на одной формальной ошибке
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Анализируем доказательства в совокупности, сопоставляя каждую деталь с требованиями закона и актуальной практикой Верховного Суда РФ.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {[
              {
                title: 'Наличие события ДТП',
                desc: 'Характер события, движение автомобиля, наличие материального ущерба или вреда, место и время происшествия.'
              },
              {
                title: 'Причастность',
                desc: 'Траектория, контакты, записи камер, показания, повреждения, причинная связь между действиями водителя и последствиями.'
              },
              {
                title: 'Осведомлённость и умысел',
                desc: 'Мог ли водитель почувствовать или увидеть событие, его действия сразу после него, остановка, звонки, возвращение, общение с участниками.'
              },
              {
                title: 'Соблюдение ПДД',
                desc: 'Были ли основания освободить проезжую часть, оформить ДТП без полиции, покинуть место по указанию сотрудника либо доставить пострадавшего.'
              },
              {
                title: 'Процессуальные документы',
                desc: 'Протоколы, схема, объяснения, извещение, права участника, ходатайства, противоречия и полнота материалов дела.'
              },
              {
                title: 'Допустимость доказательств',
                desc: 'Источник и содержание видеозаписей, показания свидетелей, осмотры, фото, экспертные выводы и возможность их проверки.'
              },
              {
                title: 'Сроки и стадия',
                desc: 'Дата составления материалов, заседание, вручение постановления, срок обычного обжалования и возможный дальнейший маршрут.'
              }
            ].map((check, i) => (
              <div key={i} style={{
                padding: '20px 22px',
                background: '#FFFFFF',
                border: '1px solid var(--color-border)',
                borderTop: '2px solid var(--color-primary)',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <h3 style={{ margin: 0, fontSize: '16px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)' }}>
                    {check.title}
                  </h3>
                </div>
                <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  {check.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 6: ВАРИАНТЫ ПОМОЩИ ПО СТАДИЯМ ═══ */}
      <section className="section bg-white" style={{ padding: '64px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(26px, 3.6vw, 38px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Подключимся на текущей стадии дела
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Объём участия адвоката определяется стадией процесса и задачами доверителя.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '20px', marginBottom: '32px' }}>
            {[
              {
                num: '1',
                title: 'До составления протокола',
                desc: 'Уточним стадию, изучим первичные документы, поможем сохранить доказательства и подготовиться к объяснениям и ходатайствам.'
              },
              {
                num: '2',
                title: 'При оформлении в ГИБДД',
                desc: 'Проверим документы, зафиксируем замечания, заявим ходатайства об истребовании видео и доказательств, не допуская поспешных признаний.'
              },
              {
                num: '3',
                title: 'В мировом суде',
                desc: 'Сформируем правовую позицию, представим доказательства, допросим свидетелей, заявим ходатайства и возражения, примем участие в заседаниях.'
              },
              {
                num: '4',
                title: 'При обжаловании',
                desc: 'Проверим постановление и материалы, подготовим жалобу по конкретным выводам суда и представим интересы при её рассмотрении.'
              },
              {
                num: '5',
                title: 'После вступления в силу',
                desc: 'Оценим предусмотренные законом способы дальнейшего пересмотра и перспективу их применения без обещания повторного рассмотрения.'
              }
            ].map((stage, i) => (
              <div key={i} style={{
                padding: '24px 20px',
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-gold)',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}>
                <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)' }}>
                  Стадия {stage.num}
                </span>
                <h3 style={{ margin: 0, fontSize: '17px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)' }}>
                  {stage.title}
                </h3>
                <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#form" className="btn btn-primary" style={{ display: 'inline-block', padding: '14px 32px' }} data-analytics="cta_click">
              Обсудить стадию дела
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
            Дмитрий Конопкин ведёт автомобильные споры и дела, в которых важны тщательная проверка фактов, процессуальных документов и доказательств. Опыт следственной работы помогает оценивать версии участников, видеозаписи, показания и противоречия в материалах дела.
          </span>,
          <ul key="2" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Юридическая практика с 2016 года</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>В 2016–2022 годах работал в Следственном комитете</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Адвокат с 2022 года</span>
            </li>
          </ul>,
          <a key="3" href="/specialisty/konopkin-dmitriy-sergeevich/" style={{ display: 'inline-block', marginTop: '16px', fontSize: '14px', color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
            Подробнее о Дмитрие Сергеевиче Конопкине →
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
        subtitle="Последовательная работа адвоката на каждом этапе защиты."
        alignTitle="center"
        steps={[
          {
            num: '01',
            title: 'Уточняем факты и стадию',
            desc: 'Фиксируем дату вызова, заседания или получения постановления.'
          },
          {
            num: '02',
            title: 'Получаем и изучаем материалы',
            desc: 'Сопоставляем схему, повреждения, видео, объяснения и процессуальные документы.'
          },
          {
            num: '03',
            title: 'Определяем правовую позицию',
            desc: 'Отдельно оцениваем событие ДТП, причастность, соблюдение ПДД, осведомлённость и умысел.'
          },
          {
            num: '04',
            title: 'Собираем доказательства',
            desc: 'Готовим запросы, ходатайства, объяснения, возражения или жалобу.'
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
        ctaButtonText="Обсудить ситуацию"
        ctaButtonHref="#form"
      />

      {/* ═══ БЛОК 10: СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость зависит от стадии и объёма работы"
        subtitle="На стоимость влияют объём материалов, необходимость срочно сохранять и истребовать доказательства, количество заседаний, место рассмотрения и стадия дела. После первичного анализа мы определим состав работ и зафиксируем стоимость и порядок оплаты в договоре."
        tiers={[
          {
            title: 'Первичный анализ документов',
            subtitle: 'Изучение протокола, видеозаписей, схемы и объяснений',
            price: 'По согласованию',
            features: [
              { name: 'Анализ события ДТП и признаков умысла', value: '✓' },
              { name: 'Проверка соблюдения процессуального порядка', value: '✓' },
              { name: 'Рекомендации по дальнейшим действиям', value: '✓' }
            ],
            buttonText: 'Заказать анализ',
            buttonHref: '#form'
          },
          {
            title: 'Защита в ГИБДД и мировом суде',
            subtitle: 'Полное ведение дела: ходатайства, доказательства, заседания',
            price: 'По согласованию',
            popular: true,
            badgeText: 'Популярно',
            features: [
              { name: 'Подготовка правовой позиции и возражений', value: '✓' },
              { name: 'Истребование видеозаписей и допрос свидетелей', value: '✓' },
              { name: 'Личное участие адвоката в судебных заседаниях', value: '✓' }
            ],
            buttonText: 'Обсудить защиту',
            buttonHref: '#form'
          },
          {
            title: 'Обжалование постановления суда',
            subtitle: 'Подготовка жалобы и представительство в вышестоящем суде',
            price: 'По согласованию',
            features: [
              { name: 'Анализ мотивировки постановления суда', value: '✓' },
              { name: 'Составление обоснованной жалобы со ссылками на ВС РФ', value: '✓' },
              { name: 'Участие в рассмотрении жалобы вышестоящим судом', value: '✓' }
            ],
            buttonText: 'Подготовить жалобу',
            buttonHref: '#form'
          }
        ]}
      />

      {/* ═══ БЛОК 11: ДОКУМЕНТЫ ДЛЯ ПЕРВИЧНОГО АНАЛИЗА ═══ */}
      <section className="section bg-light" style={{ padding: '64px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '36px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(26px, 3.6vw, 38px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Что подготовить к первой консультации
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Чем полнее исходные материалы, тем быстрее адвокат сможет оценить обстоятельства и риски:
            </p>
          </div>

          <div style={{
            background: '#FFFFFF',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-gold)',
            padding: '32px 28px',
            boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
            marginBottom: '24px'
          }}>
            <div className="grid grid-2" style={{ gap: '16px 28px' }}>
              {[
                'протоколы, определения, извещения и повестки, если уже получены;',
                'схема ДТП, объяснения участников и свидетелей;',
                'фото и видео места, автомобилей и повреждений в исходном виде;',
                'запись регистратора и сведения о возможных городских или объектовых камерах;',
                'данные звонков, сообщений, навигации, парковки или пропускной системы;',
                'постановление суда и конверт либо электронное уведомление о получении — для расчёта срока обжалования.'
              ].map((doc, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <span style={{ fontSize: '14px', color: 'var(--color-deep-blue)', lineHeight: 1.5 }}>
                    {doc}
                  </span>
                </div>
              ))}
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
      <section className="section bg-light" style={{ padding: '64px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '36px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(26px, 3.6vw, 38px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Если вопрос связан не только с оставлением места ДТП
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Выберите смежное направление или опишите ситуацию в форме — мы поможем сориентироваться.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '20px' }}>
            {[
              {
                title: 'Лишение прав по другому нарушению',
                desc: 'Защита по ч. 4–5 ст. 12.15, ст. 12.8, 12.26, 12.9 ч. 4–5 КоАП РФ и другим составам.',
                link: '/grazhdanam/avtoyurist/lishenie-voditelskih-prav/'
              },
              {
                title: 'Спор о том, кто виновен в аварии',
                desc: 'Оспаривание вины в ДТП, трасологическая экспертиза, отмена незаконных постановлений ГИБДД.',
                link: '/grazhdanam/avtoyurist/osparivanie-viny-v-dtp/'
              },
              {
                title: 'Страховая отказала или занизила выплату',
                desc: 'Споры со страховыми компаниями по ОСАГО и КАСКО, взыскание недоплаты и неустойки.',
                link: '#form'
              },
              {
                title: 'В ДТП пострадали люди',
                desc: 'Защита водителей при причинении вреда здоровью или признаках уголовной ответственности (ст. 264 УК РФ).',
                link: '#form'
              }
            ].map((rel, idx) => (
              <a key={idx} href={rel.link} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <div style={{
                  padding: '24px 22px',
                  background: '#FFFFFF',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '12px'
                }}>
                  <div>
                    <h3 style={{ margin: '0 0 8px 0', fontSize: '17px', color: 'var(--color-deep-blue)' }}>
                      {rel.title}
                    </h3>
                    <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      {rel.desc}
                    </p>
                  </div>
                  <div style={{ color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                    Подробнее →
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 14: ФИНАЛЬНАЯ ФОРМА ═══ */}
      <ContactsForm
        title="Расскажите, на какой стадии находится дело"
        subtitle="Укажите, когда произошло событие, вызывали ли Вас в ГИБДД, составлен ли протокол и назначена ли дата суда. Мы свяжемся с Вами, уточним документы и предложим следующий шаг."
        buttonText="Получить консультацию"
        subtext="Перезвоним в течение 15 минут в рабочее время. Вечером или в выходной — в ближайший рабочий день."
      />

      <Footer />
    </main>
  );
}
