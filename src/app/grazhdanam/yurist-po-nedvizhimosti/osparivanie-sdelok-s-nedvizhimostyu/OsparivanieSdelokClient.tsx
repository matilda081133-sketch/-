'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';
import ProcessBlock from '@/components/ProcessBlock';
import CasesBlock from '@/components/CasesBlock';
import PricingBlock from '@/components/PricingBlock';

export default function OsparivanieSdelokClient() {
  const faqs = [
    {
      q: 'По каким основаниям чаще всего оспаривают сделки с недвижимостью?',
      a: 'Основные основания: совершение сделки гражданином, не способным понимать значение своих действий (ст. 177 ГК РФ); обман, существенное заблуждение или насилие (ст. 178, 179 ГК РФ); мнимые и притворные сделки (ст. 170 ГК РФ); отсутствие согласия супруга на отчуждение совместного имущества (ст. 35 СК РФ); нарушение прав несовершеннолетних, а также оспаривание сделок должника в процедуре банкротства (ст. 61.2 Закона о банкротстве).'
    },
    {
      q: 'Кто такой добросовестный приобретатель и как его защищает закон?',
      a: 'Добросовестный приобретатель — покупатель, который возмездно приобрёл имущество и при этом не знал и не должен был знать, что продавец не имел права его отчуждать. По ст. 302 ГК РФ имущество не может быть истребовано у добросовестного приобретателя, если оно выбыло из владения собственника по его воле.'
    },
    {
      q: 'Какой срок исковой давности установлен для оспаривания сделок?',
      a: 'Срок исковой давности по оспоримым сделкам составляет 1 год со дня, когда истец узнал об обстоятельствах, являющихся основанием для признания сделки недействительной. По ничтожным сделкам срок составляет 3 года со дня начала исполнения сделки.'
    },
    {
      q: 'Как предотвратить перепродажу квартиры во время судебного спора?',
      a: 'Одновременно с подачей иска необходимо заявить мотивированное ходатайство о применении обеспечительных мер (ст. 139–140 ГПК РФ): наложить судебный арест на объект недвижимости и запретить Управлению Росреестра совершать любые регистрационные действия в отношении спорного объекта.'
    },
    {
      q: 'Что происходит при признании сделки недействительной (реституция)?',
      a: 'По общему правилу п. 2 ст. 167 ГК РФ наступает двусторонняя реституция: каждая из сторон обязана возвратить другой всё полученное по сделке. Покупатель возвращает недвижимость, а продавец обязан вернуть полученные деньги.'
    },
    {
      q: 'Можно ли оспорить договор дарения квартиры?',
      a: 'Да. Договор дарения может быть признан недействительным, если даритель был введён в заблуждение (например, полагал, что подписывает договор пожизненного содержания с иждивением или завещание), не понимал последствий из-за болезни или возраста, либо дарение совершено под давлением.'
    }
  ];

  const cases = [
    {
      category: 'ЗАЩИТА ПОКУПАТЕЛЯ',
      title: 'Защита добросовестного покупателя квартиры от иска родственников продавца',
      problem: 'Спустя 8 месяцев после покупки квартиры родственники продавца подали иск о признании договора купли-продажи недействительным по ст. 177 ГК РФ, утверждая, что продавец страдал психическим расстройством.',
      action: 'Собрали доказательства добросовестности: видеозапись расчётов в банке, переписку с продавцом, справки из психоневрологического диспансера на дату сделки, заявили ходатайство о комплексной посмертной судебной экспертизе.',
      result: 'Суд отказал в признании сделки недействительной и сохранил квартиру за покупателем, признав его добросовестным приобретателем по ст. 302 ГК РФ.',
      isDemo: false
    },
    {
      category: 'ВОЗВРАТ ИМУЩЕСТВА',
      title: 'Признание недействительным договора дарения квартиры пожилым человеком',
      problem: 'Одинокая 82-летняя пенсионерка под влиянием обмана подписала договор дарения единственной квартиры постороннему лицу, полагая, что подписывает договор ренты с условием пожизненного ухода.',
      action: 'Наложили срочный судебный арест на квартиру, запросили медицинские карты пенсионерки, провели судебно-психиатрическую экспертизу о степени внушаемости и доказали факт существенного заблуждения (ст. 178 ГК РФ).',
      result: 'Суд признал договор дарения недействительным, вернул квартиру в собственность пенсионерки и восстановил её регистрационный учёт в жилье.',
      isDemo: false
    },
    {
      category: 'БАНКРОТСТВО ПРОДАВЦА',
      title: 'Защита сделки от финансового управляющего при банкротстве продавца',
      problem: 'Финансовый управляющий обанкротившегося гражданина оспорил сделку продажи загородного дома по ст. 61.2 Закона о банкротстве, требуя вернуть дом в конкурсную массу.',
      action: 'Доказали полную возмездность сделки, рыночный характер цены на основании ретроспективной оценки, отсутствие признаков аффилированности сторон и подтвердили реальность передачи денежных средств.',
      result: 'Арбитражный суд отказал финансовому управляющему в признании сделки недействительной, право собственности доверителя осталось полностью защищённым.',
      isDemo: false
    }
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Анализ оснований',
      desc: 'Изучаем текст договора, платёжные документы, медицинские справки и проверяем сроки исковой давности.'
    },
    {
      num: '02',
      title: 'Обеспечительные меры',
      desc: 'Ходатайствуем перед судом о наложении ареста на недвижимость и запрета регистрационных действий Росреестра.'
    },
    {
      num: '03',
      title: 'Формирование позиции',
      desc: 'Готовим исковое заявление либо мотивированные возражения ответчика со сбором доказательств добросовестности.'
    },
    {
      num: '04',
      title: 'Судебная экспертиза',
      desc: 'Формулируем вопросы экспертам, сопровождаем судебно-психиатрическую, почерковедческую или оценочную экспертизу.'
    },
    {
      num: '05',
      title: 'Применение последствий',
      desc: 'Добиваемся возврата объекта, сохранения права собственности либо полного взыскания уплаченных денег.'
    }
  ];

  const pricingTiers = [
    {
      title: <>Правовой анализ сделки</>,
      subtitle: 'Оценка оснований',
      popular: false,
      price: 'от ХХХ ₽',
      features: [
        { name: 'Анализ обстоятельств совершения сделки', value: '✓' },
        { name: 'Проверка срока исковой давности', value: '✓' },
        { name: 'Оценка риска признания недействительной', value: '✓' }
      ],
      buttonText: 'Оценить риски',
      buttonHref: '#form'
    },
    {
      title: <>Срочный арест объекта</>,
      subtitle: 'Обеспечительные меры',
      popular: false,
      price: 'от ХХХ ₽',
      features: [
        { name: 'Заявление об аресте недвижимости в суд', value: '✓' },
        { name: 'Запрет перерегистрации в Росреестре', value: '✓' },
        { name: 'Контроль внесения отметки в ЕГРН', value: '✓' }
      ],
      buttonText: 'Наложить арест',
      buttonHref: '#form'
    },
    {
      title: <>Ведение дела в суде под ключ</>,
      subtitle: 'Иск или защита в суде',
      popular: true,
      badgeText: 'ВОСТРЕБОВАНО',
      price: 'от ХХХ ₽',
      features: [
        { name: 'Составление иска или отзыва на иск', value: '✓' },
        { name: 'Представительство во всех инстанциях', value: '✓' },
        { name: 'Сопровождение судебных экспертиз', value: '✓' },
        { name: 'Исполнение решения и регистрация в ЕГРН', value: '✓' }
      ],
      buttonText: 'Защитить права в суде',
      buttonHref: '#form'
    }
  ];

  const jsonLdGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LegalService',
        '@id': 'https://dejure-help.ru/#legalservice',
        name: 'Юридическая компания Де-Юре',
        url: 'https://dejure-help.ru/',
        telephone: '+7 (4742) 20-15-25',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'ул. Советская, д. 35, оф. 213',
          addressLocality: 'Липецк',
          addressRegion: 'Липецкая область',
          addressCountry: 'RU'
        },
        areaServed: ['Липецк', 'Липецкая область']
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/osparivanie-sdelok-s-nedvizhimostyu/#service',
        name: 'Оспаривание сделок с недвижимостью в Липецке',
        serviceType: 'Судебное оспаривание сделок с недвижимостью',
        provider: {
          '@id': 'https://dejure-help.ru/#legalservice'
        },
        areaServed: ['Липецк', 'Липецкая область'],
        url: 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/osparivanie-sdelok-s-nedvizhimostyu/',
        description: 'Помощь в оспаривании сделок с недвижимостью в Липецке: оценим основания и срок, подготовим иск или защиту, добьёмся применимых последствий.'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/osparivanie-sdelok-s-nedvizhimostyu/#breadcrumbs',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Главная',
            item: 'https://dejure-help.ru/'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Гражданам',
            item: 'https://dejure-help.ru/grazhdanam/'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Юрист по недвижимости',
            item: 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/'
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Оспаривание сделок с недвижимостью',
            item: 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/osparivanie-sdelok-s-nedvizhimostyu/'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/osparivanie-sdelok-s-nedvizhimostyu/#faq',
        mainEntity: faqs.map(faq => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a
          }
        }))
      }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />
      <Header />

      {/* ═══ 1. ПЕРВЫЙ ЭКРАН ═══ */}
      <MilitaryHero
        breadcrumbs={
          <>
            <Link href="/" style={{ color: 'var(--color-primary)' }}>Главная</Link> <span style={{ margin: '0 8px' }}>/</span>
            <Link href="/grazhdanam/" style={{ color: 'var(--color-primary)' }}>Гражданам</Link> <span style={{ margin: '0 8px' }}>/</span>
            <Link href="/grazhdanam/yurist-po-nedvizhimosti/" style={{ color: 'var(--color-primary)' }}>Юрист по недвижимости</Link> <span style={{ margin: '0 8px' }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Оспаривание сделок</span>
          </>
        }
        superTitle="Основание, срок и защита объекта"
        title={<>Оспаривание сделок <br />с недвижимостью в Липецке</>}
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '560px', textWrap: 'balance' }}>
            Оценим законность купли-продажи, дарения или ренты, наложим арест на спорный объект, оспорим незаконную сделку либо защитим права добросовестного приобретателя.
          </span>
        }
        primaryCtaText="Оценить перспективы спора"
        primaryCtaLink="#form"
        primaryCtaAnalytics="transaction_dispute_hero_click"
        primaryCtaSubtext="Перезвоним в течение 15 минут в рабочее время"
        rightContent={
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', width: '100%' }}>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '130%',
              height: '130%',
              background: 'radial-gradient(circle, rgba(193, 160, 102, 0.15) 0%, rgba(23, 50, 77, 0.04) 40%, transparent 70%)',
              zIndex: 0,
              pointerEvents: 'none'
            }} />

            <svg style={{ position: 'absolute', top: '40%', left: '85%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', opacity: 0.09, zIndex: 0, pointerEvents: 'none' }} viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="0.6">
              <path d="M3 21h18 M4 21v-2h16v2 M6 19V9 M10 19V9 M14 19V9 M18 19V9 M12 4l-9 5h18l-9-5z M4 9h16"/>
            </svg>

            <div className="mockup-container" style={{ zIndex: 1, margin: 0 }}>
              <div style={{ position: 'absolute', width: '220px', height: '220px', background: 'var(--color-primary)', filter: 'blur(90px)', opacity: 0.12, borderRadius: '50%' }}></div>
              
              <div className="doc-wrapper-float-4">
                <div className="doc-sheet doc-sheet-4">
                  <div style={{ padding: '35px 25px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '30px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end' }}>
                        <div style={{ width: '90px', height: '3px', background: 'rgba(23,50,77,0.2)' }}></div>
                        <div style={{ width: '70px', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>
                    </div>
                    <div style={{ width: '140px', height: '6px', background: 'var(--color-primary)', margin: '0 auto 30px auto' }}></div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ width: '100%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      <div style={{ width: '90%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="doc-wrapper-float-3">
                <div className="doc-sheet doc-sheet-3">
                  <div style={{ padding: '35px 25px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ position: 'absolute', top: '25px', left: '25px', width: '65px', height: '25px', border: '1.5px solid rgba(23, 50, 77, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-5deg)' }}>
                      <span style={{ fontSize: '4px', fontWeight: 'bold', color: 'rgba(23,50,77,0.4)', fontFamily: 'var(--font-serif)' }}>СТ. 166-181 ГК</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '35px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end' }}>
                        <div style={{ width: '95px', height: '3px', background: 'rgba(23,50,77,0.2)' }}></div>
                        <div style={{ width: '55px', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>
                    </div>
                    <div style={{ width: '120px', height: '6px', background: 'var(--color-gold)', margin: '0 auto 25px auto' }}></div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ width: '100%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      <div style={{ width: '85%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      />

      {/* ═══ 2. ОСНОВАНИЯ ДЛЯ ОСПАРИВАНИЯ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
            <span className="badge badge-gold" style={{ marginBottom: '16px' }}>ОСНОВАНИЯ СПОРА</span>
            <h2 className="section-title">В каких случаях сделка может быть отменена</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Мы защищаем собственников как со стороны истца (возврат незаконно отчуждённого жилья), так и со стороны ответчика (защита добросовестного покупателя).
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '24px' }}>
            {[
              {
                tag: 'СТ. 177 ГК РФ',
                title: 'Пороки воли продавца',
                desc: 'Продавец в момент сделки не был способен понимать значение своих действий или руководить ими (болезнь, возраст, алкоголизация).'
              },
              {
                tag: 'СТ. 178, 179 ГК РФ',
                title: 'Обман или заблуждение',
                desc: 'Сделка совершена под влиянием обмана, насилия, угроз или неблагоприятных стечений тяжёлых обстоятельств (кабальная сделка).'
              },
              {
                tag: 'СТ. 302 ГК РФ',
                title: 'Защита покупателя',
                desc: 'Отстаивание статуса добросовестного приобретателя при попытке прежних собственников или их наследников истребовать квартиру.'
              },
              {
                tag: 'БАНКРОТСТВО',
                title: 'Оспаривание при банкротстве',
                desc: 'Защита от требований арбитражного управляющего вернуть недвижимость по сделкам с неравноценным встречным исполнением.'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="situation-card"
                style={{
                  background: '#FFFFFF',
                  padding: '28px 24px',
                  borderRadius: '16px',
                  border: '1px solid rgba(23, 50, 77, 0.08)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}
              >
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--color-gold)',
                  background: 'rgba(193, 160, 102, 0.1)',
                  padding: '4px 10px',
                  borderRadius: '4px',
                  display: 'inline-block',
                  marginBottom: '16px',
                  alignSelf: 'flex-start'
                }}>
                  {item.tag}
                </span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '12px', lineHeight: 1.3 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3. ЧТО ВХОДИТ В УСЛУГУ (HelpScope с золотыми бейджами) ═══ */}
      <section className="section" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
            <span className="badge badge-gold" style={{ marginBottom: '16px' }}>ПЛАН ЗАЩИТЫ</span>
            <h2 className="section-title">Что сделает судебный юрист «Де-Юре»</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Разрабатываем доказательственную стратегию и защищаем объект недвижимости во всех судебных инстанциях.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {[
              {
                num: '01',
                title: 'Срочный арест объекта',
                desc: 'Подаём ходатайство о наложении обеспечительных мер (арест, запрет регистрационных действий), чтобы исключить перепродажу.'
              },
              {
                num: '02',
                title: 'Анализ давности',
                desc: 'Оцениваем годичный или трёхлетний срок исковой давности и моменты, когда сторона узнала о нарушении своих прав.'
              },
              {
                num: '03',
                title: 'Сбор доказательств',
                desc: 'Истребуем выписки банковских переводов, расписки, медицинские карты, нотариальные дела и архивные договоры.'
              },
              {
                num: '04',
                title: 'Судебная экспертиза',
                desc: 'Формируем вопросы для судебно-психиатрической, почерковедческой или оценочной экспертизы и защищаем выводы.'
              },
              {
                num: '05',
                title: 'Представительство в суде',
                desc: 'Участвуем во всех судебных заседаниях в Липецке и Липецком областном суде, опровергаем доводы оппонентов.'
              },
              {
                num: '06',
                title: 'Реституция и ЕГРН',
                desc: 'Контролируем снятие обременений, исполнение судебного акта, возврат денежных средств и регистрацию в Росреестре.'
              }
            ].map((step, idx) => (
              <div
                key={idx}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '32px 24px 24px 24px',
                  border: '1px solid rgba(23, 50, 77, 0.08)',
                  borderTop: '4px solid var(--color-gold)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '24px',
                  background: 'linear-gradient(135deg, var(--color-gold) 0%, #D4AF37 100%)',
                  color: '#FFFFFF',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  padding: '3px 12px',
                  borderRadius: '20px',
                  letterSpacing: '0.05em',
                  boxShadow: '0 2px 6px rgba(193, 160, 102, 0.4)'
                }}>
                  {step.num}
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-primary)', marginTop: '6px', marginBottom: '12px' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.93rem', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4. КЕЙСЫ ═══ */}
      <CasesBlock
        title="Примеры споров по сделкам"
        showDemoWarning={false}
        resultLabel="Результат"
        cases={cases}
      />

      {/* ═══ 5. ПРОЦЕСС РАБОТЫ ═══ */}
      <ProcessBlock
        title="Как проходит работа"
        subtitle="Пять этапов судебной защиты права собственности и денежных средств."
        steps={processSteps}
      />

      {/* ═══ 6. СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость услуг по оспариванию сделок"
        subtitle="Фиксированная стоимость юридического ведения дела фиксируется в договоре и взыскивается с проигравшей стороны."
        tiers={pricingTiers}
      />

      {/* ═══ 7. ЧАСТЫЕ ВОПРОСЫ (FAQ) ═══ */}
      <FAQBlock
        faqs={faqs}
        title={<>Ответы на частые вопросы <br />по оспариванию сделок</>}
        subtitle="Разъяснения положений статей 166–181 и 302 ГК РФ, сроков исковой давности и правил защиты покупателей."
        ctaText="Задать свой вопрос"
        ctaLink="#form"
      />

      {/* ═══ 8. ФИНАЛЬНАЯ ФОРМА ═══ */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start' }}>
              <span className="badge badge-gold" style={{ marginBottom: '16px', alignSelf: 'flex-start' }}>
                КОНСУЛЬТАЦИЯ
              </span>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>
                Защитите недвижимость и деньги в суде
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '32px' }}>
                Опишите ситуацию, какой договор оспаривается (купля-продажа, дарение, рента), подан ли уже иск в суд и наложен ли арест. Мы оценим риски и разработаем надёжную стратегию защиты.
              </p>

              <div style={{
                background: 'var(--color-bg-light)',
                borderRadius: '16px',
                padding: '24px 28px',
                border: '1px solid rgba(23, 50, 77, 0.08)',
                marginTop: 'auto'
              }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '8px' }}>
                  Офис в Липецке
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.6 }}>
                  г. Липецк, ул. Советская, д. 35, офис 213.<br />
                  Телефон: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>+7 (4742) 20-15-25</a><br />
                  Пн–Пт с 9:00 до 18:00. Принимаем исковые заявления на срочный анализ.
                </p>
              </div>
            </div>

            <div>
              <ContactsForm title="Написать нам" subtitle="" buttonText="Оставить заявку" commentPlaceholder="Кратко опишите ситуацию по недвижимости…" hiddenFields={[{ name: 'service', value: 'Оспаривание сделок с недвижимостью' }]} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
