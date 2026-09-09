'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';
import ProcessBlock from '@/components/ProcessBlock';
import CasesBlock from '@/components/CasesBlock';
import PricingBlock from '@/components/PricingBlock';

export default function RazdelClient() {
  const [ctaSource, setCtaSource] = useState('housing_razdel_form_direct');
  const [ctaText, setCtaText] = useState('Прямой переход к форме');

  const handleCtaClick = (source: string, text: string) => {
    setCtaSource(source);
    setCtaText(text);
  };

  const faqs = [
    {
      q: 'Можно ли разделить лицевой счёт в приватизированной квартире?',
      a: 'В быту так называют определение порядка оплаты и получение отдельных платёжных документов. Возможность и способ зависят от долей, состава платежей, соглашения и позиции исполнителей.'
    },
    {
      q: 'Куда подавать заявление?',
      a: 'Сначала определяются все организации, которые выставляют платежи. При согласии направляются соглашение и заявления; при споре может потребоваться иск с участием надлежащих исполнителей.'
    },
    {
      q: 'Можно ли разделить оплату без суда?',
      a: 'Да, если участники договорились и исполнители принимают юридически корректное основание. Соглашение должно охватывать нужные виды начислений и не оставлять спорных периодов.'
    },
    {
      q: 'Доли оплаты всегда равны долям собственности?',
      a: 'Это базовый ориентир для ряда расходов по общему имуществу, но конкретные строки зависят от правовой природы, приборов учёта, потребления, соглашения и режима жилья.'
    },
    {
      q: 'Что будет со старым долгом?',
      a: 'Новый порядок действует на определённые периоды и сам по себе не списывает задолженность. Старый долг проверяется отдельно по кредитору, должникам, периоду, оплатам, пеням и срокам.'
    },
    {
      q: 'Если собственник не живёт, он может не платить?',
      a: 'Само отсутствие проживания обычно не прекращает бремя собственника. Но состав начислений и возможность перерасчёта отдельных услуг нужно проверять по документам и фактическим данным.'
    },
    {
      q: 'Можно ли разделить счёт в муниципальной квартире?',
      a: 'Нужно оценить договор социального найма, состав семьи и статус бывших членов семьи. Речь может идти о самостоятельной ответственности и отдельных документах, а не о разделе самого договора найма.'
    },
    {
      q: 'Нужен ли порядок пользования комнатами?',
      a: 'Не всегда. Порядок пользования и порядок оплаты — разные требования. Они могут быть связаны фактически, но один результат не возникает автоматически из другого.'
    },
    {
      q: 'Можно ли взыскать с совладельца то, что я платил за него?',
      a: 'При наличии оснований и доказательств возможно отдельное денежное требование. Проверяются виды расходов, доли, периоды, платежи и срок исковой давности.'
    },
    {
      q: 'Сколько длится дело?',
      a: 'Досудебный этап зависит от числа исполнителей и их ответов, судебный — от участников, нагрузки и обжалования. После анализа дадим ориентир по этапам без гарантии даты результата.'
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
        telephone: '+7-4742-20-15-25',
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
        '@id': 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/razdel-licevyh-schetov-i-poryadka-oplaty-zhku/#service',
        name: 'Раздел лицевых счетов и порядка оплаты ЖКУ в Липецке',
        serviceType: 'Юридическая помощь в определении порядка оплаты ЖКУ',
        url: 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/razdel-licevyh-schetov-i-poryadka-oplaty-zhku/',
        provider: { '@id': 'https://dejure-help.ru/#legalservice' },
        areaServed: ['Липецк', 'Липецкая область']
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/razdel-licevyh-schetov-i-poryadka-oplaty-zhku/#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://dejure-help.ru/' },
          { '@type': 'ListItem', position: 2, name: 'Гражданам', item: 'https://dejure-help.ru/grazhdanam/' },
          { '@type': 'ListItem', position: 3, name: 'Жилищный юрист', item: 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/' },
          { '@type': 'ListItem', position: 4, name: 'Раздел лицевых счетов и порядка оплаты ЖКУ', item: 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/razdel-licevyh-schetov-i-poryadka-oplaty-zhku/' }
        ]
      }
    ]
  };

  const situations = [
    {
      tag: 'Развод супругов',
      title: 'После развода один собственник платит за всю квартиру',
      desc: 'Бывшие супруги сохранили доли в праве, но один отказывается оплачивать квитанции, перекладывая расходы на другого.'
    },
    {
      tag: 'Наследники',
      title: <>Несколько наследников <br />не могут договориться по ЖКУ</>,
      desc: 'После вступления в наследство возникла долевая собственность, но соглашения по оплате коммунальных услуг нет.'
    },
    {
      tag: 'Отказ УК / ЕПД',
      title: <>Управляющая компания <br />или РСО отказали в разделении</>,
      desc: 'Организации ЖКХ требуют судебное решение или отказываются формировать раздельные квитанции на оплату.'
    },
    {
      tag: 'Не проживает',
      title: 'Совладелец не живёт и считает, что освобождён от оплаты',
      desc: 'Разберём бремя содержания общего имущества и определим обоснованный размер обязательств непроживающего собственника.'
    },
    {
      tag: 'Муниципальное жильё',
      title: 'В муниципальной квартире проживают бывшие члены семьи',
      desc: 'Определим самостоятельную ответственность за начисления без нарушения договора социального найма.'
    },
    {
      tag: 'Взыскание расходов',
      title: 'Нужно вернуть деньги, уплаченные за других собственников',
      desc: 'Поможем взыскать с других совладельцев подтверждённую часть оплаченных за них коммунальных платежей за 3 года.'
    }
  ];

  const helpActions = [
    {
      title: <>Анализ долей и начислений</>,
      desc: 'Проверяем основания возникновения права собственности или соцнайма, размеры долей, структуру квитанций и тарифы.'
    },
    {
      title: <>Соглашение между собственниками</>,
      desc: 'Составляем юридически грамотное соглашение о порядке участия в расходах по оплате жилья и коммунальных услуг.'
    },
    {
      title: <>Обращения в УК, ТСЖ и РСО</>,
      desc: 'Направляем заявления поставщикам ресурсов и в расчётные центры с требованием формировать раздельные платёжные документы.'
    },
    {
      title: <>Судебный иск о порядке оплаты</>,
      desc: 'Формулируем требования к совладельцам и организациям ЖКХ, формируем доказательственную базу и ведём процесс в суде.'
    },
    {
      title: <>Защита от чужих долгов</>,
      desc: 'Отменяем судебные приказы по долгам других жильцов, исключаем неправомерно начисленные суммы и пени.'
    },
    {
      title: <>Взыскание понесённых расходов</>,
      desc: 'Рассчитываем и взыскиваем через суд компенсацию коммунальных расходов, фактически оплаченных клиентом за других лиц.'
    }
  ];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />
      <Header />

      {/* ═══ 1. ПЕРВЫЙ ЭКРАН (MILITARY HERO) ═══ */}
      <div onClickCapture={() => handleCtaClick('housing_razdel_hero', 'Определить порядок оплаты')}>
        <MilitaryHero 
          breadcrumbs={
            <>
              <Link href="/" style={{ color: 'var(--color-primary)' }}>Главная</Link> <span style={{ margin: '0 8px' }}>/</span> 
              <Link href="/grazhdanam/" style={{ color: 'var(--color-primary)' }}>Гражданам</Link> <span style={{ margin: '0 8px' }}>/</span> 
              <Link href="/grazhdanam/zhilishchnyj-yurist/" style={{ color: 'var(--color-primary)' }}>Жилищный юрист</Link> <span style={{ margin: '0 8px' }}>/</span> 
              <span style={{ color: 'var(--color-text-main)' }}>Раздел лицевых счетов и порядка оплаты ЖКУ</span>
            </>
          }
          superTitle="Жилищное право • порядок оплаты ЖКУ • Липецк"
          title={<>Раздел лицевых счетов <br />и порядка оплаты ЖКУ <br />в Липецке</>}
          subtitle={
            <span style={{ display: 'inline-block', maxWidth: '600px', textWrap: 'balance' }}>
              Определим, кто и в какой части должен оплачивать жильё и коммунальные услуги. Подготовим соглашение, обращение к расчётной организации или иск и поможем получить отдельные платёжные документы.
            </span>
          }
          primaryCtaText="Определить порядок оплаты"
          primaryCtaLink="#form"
          primaryCtaAnalytics="housing_razdel_consultation_click"
          primaryCtaSubtext="Перезвоним в течение 15 минут в рабочее время"
          secondaryCtaText="С какими ситуациями помогаем"
          secondaryCtaLink="#situations"
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
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8"/>
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
                      <div style={{ position: 'absolute', top: '25px', left: '25px', width: '85px', height: '25px', border: '1.5px solid rgba(23, 50, 77, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-5deg)' }}>
                        <span style={{ fontSize: '4.5px', fontWeight: 'bold', color: 'rgba(23,50,77,0.5)', fontFamily: 'var(--font-serif)' }}>ЕПД: РАЗДЕЛЬНЫЙ УЧЁТ</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '35px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end' }}>
                          <div style={{ width: '95px', height: '3px', background: 'rgba(23,50,77,0.2)' }}></div>
                          <div style={{ width: '55px', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                        </div>
                      </div>
                      <div style={{ width: '130px', height: '6px', background: 'var(--color-primary)', margin: '0 auto 30px auto' }}></div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <div style={{ width: '100%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                        <div style={{ width: '95%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                        <div style={{ width: '80%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="doc-wrapper-float-2">
                  <div className="doc-sheet doc-sheet-2">
                    <div style={{ padding: '28px 22px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <div style={{ position: 'absolute', top: '22px', left: '22px', width: '110px', height: '32px', border: '1px solid #C1A066', color: '#C1A066', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-4deg)', opacity: 0.95 }}>
                        <div style={{ fontFamily: 'var(--font-serif)', fontSize: '5px', textAlign: 'center', fontWeight: 'bold', lineHeight: 1.2 }}>
                          РЕШЕНИЕ СУДА<br/>
                          О ПОРЯДКЕ ОПЛАТЫ ЖКУ
                        </div>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '24px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end' }}>
                          <div style={{ width: '90px', height: '3px', background: 'rgba(23,50,77,0.2)' }}></div>
                          <div style={{ width: '50px', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                        </div>
                      </div>

                      <div style={{ width: '140px', height: '6px', background: 'var(--color-primary)', margin: '0 auto 16px auto' }}></div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                        <div style={{ width: '40%', height: '3px', background: 'rgba(23,50,77,0.2)' }}></div>
                        <div style={{ width: '100%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                        <div style={{ width: '90%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>

                      <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '8px', borderTop: '1px dashed rgba(23,50,77,0.15)' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                          <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Доля собственника 1: 1/2</div>
                          <div style={{ width: '70px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '8px' }}></div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                          <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Доля собственника 2: 1/2</div>
                          <div style={{ width: '70px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '8px' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="doc-wrapper-float-1">
                  <div className="doc-sheet doc-sheet-1">
                    <div style={{ padding: '26px 22px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(23,50,77,0.2)', paddingBottom: '10px', marginBottom: '14px' }}>
                        <img src="/images/logo_dark.png" alt="Де-Юре" style={{ width: '55px', height: 'auto', opacity: 0.9 }} />
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', alignItems: 'flex-end' }}>
                          <span style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)', letterSpacing: '0.05em' }}>РАЗДЕЛ ОПЛАТЫ ЖКУ</span>
                          <span style={{ fontSize: '5px', color: 'var(--color-primary)' }}>ЮК «Де-Юре» Липецк</span>
                        </div>
                      </div>

                      <div className="doc-map-box" style={{ 
                        width: '100%', 
                        height: '110px', 
                        background: 'rgba(247, 244, 237, 0.6)', 
                        border: '1px solid rgba(193, 160, 102, 0.3)', 
                        borderRadius: '2px', 
                        marginBottom: '12px',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        padding: '12px'
                      }}>
                        <div style={{ fontSize: '7px', fontWeight: 'bold', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>РАСЧЁТ ДОЛЕЙ ОПЛАТЫ ЖКУ:</div>
                        <div style={{ fontSize: '6px', color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>
                          • Плательщик А: 50% начислений (Л/С № 48-112)<br/>
                          • Плательщик Б: 50% начислений (Л/С № 48-113)<br/>
                          • Индивидуальные приборы учёта: по потреблению
                        </div>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '10px' }}>
                        <div style={{ display: 'flex', gap: '6px' }}>
                          <div style={{ width: '8px', height: '3px', background: 'var(--color-primary)' }}></div>
                          <div style={{ width: '80%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                        </div>
                        <div style={{ width: '95%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>

                      <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '8px', borderTop: '1px solid rgba(23,50,77,0.15)' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                          <div style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)' }}>ЮК «ДЕ-ЮРЕ»</div>
                          <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Правовая помощь • Липецк</div>
                        </div>
                        <div style={{ position: 'relative', width: '42px', height: '42px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <div style={{ width: '38px', height: '38px', borderRadius: '50%', border: '1.25px solid #17375E', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-12deg)', opacity: 0.9 }}>
                            <div style={{ width: '31px', height: '31px', borderRadius: '50%', border: '0.5px dashed #17375E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <span style={{ fontSize: '3.5px', fontWeight: 'bold', color: '#17375E', textAlign: 'center', lineHeight: 1.1 }}>
                                ДЕ-ЮРЕ<br/>ЛИПЕЦК
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          }
          trustItems={[
            { text: 'Определим доли расходов по закону' },
            { text: 'Оформим раздельные платёжные документы' },
            { text: 'Поможем взыскать переплаченные средства' }
          ]}
        />
      </div>

      {/* ═══ 2. С КАКИМИ СИТУАЦИЯМИ ОБРАЩАЮТСЯ ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '850px', marginBottom: '44px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              С какими вопросами <br />по разделу счетов обращаются
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Совместное проживание или наличие долей не должно приводить к оплате чужих долгов. Поможем разделить платежи в добровольном или судебном порядке.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '40px' }}>
            {situations.map((sit, i) => (
              <div key={i} className="hover-lift" style={{ 
                padding: '32px 28px', 
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-primary)',
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', opacity: 0.06, pointerEvents: 'none' }}>
                  <svg width="100" height="100" viewBox="0 0 24 24" fill="var(--color-deep-blue)">
                    <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <div style={{ 
                  fontSize: '12px', 
                  fontWeight: 600, 
                  color: 'var(--color-gold)', 
                  marginBottom: '12px',
                  background: 'rgba(193, 160, 102, 0.1)',
                  padding: '4px 10px',
                  alignSelf: 'flex-start',
                  borderRadius: '2px'
                }}>
                  {sit.tag}
                </div>
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', fontWeight: 600, color: 'var(--color-deep-blue)', lineHeight: 1.4, margin: '0 0 12px 0' }}>
                  {sit.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {sit.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA-плашка с атрибуцией cta_source = housing_razdel_banner */}
          <div 
            className="card service-card cta-banner-card" 
            style={{ 
              width: '100%', 
              padding: '32px 36px', 
              background: 'var(--color-deep-blue)', 
              borderRadius: '0',
              borderTop: '3px solid var(--color-gold)',
              boxShadow: '0 8px 16px rgba(16, 39, 59, 0.28)'
            }}
          >
            <div style={{ flex: '1 1 300px' }}>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-white)', lineHeight: 1.3 }}>
                Раздел счетов не списывает старый долг автоматически
              </h3>
              <p style={{ margin: '0', fontSize: '15px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5, maxWidth: '640px' }}>
                Определение порядка оплаты действует на будущее время. Чтобы не платить за прошлые долги других лиц, требуется отдельная правовая работа по отмене приказов или встречному взысканию.
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <a 
                href="#form" 
                className="btn white-btn-custom" 
                style={{ display: 'inline-block', textAlign: 'center', fontSize: '15px' }}
                onClick={() => handleCtaClick('housing_razdel_banner', 'Разделить лицевые счета')}
              >
                Разделить счета
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. КАК ПОМОГАЕТ ЮРИСТ ═══ */}
      <section className="section" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Как юрист помогает <br />разделить оплату коммунальных услуг
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Подберём оптимальный способ решения — от мирного <br />соглашения до вынесения судебного решения с возложением обязанности на УК.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {helpActions.map((act, idx) => (
              <div key={idx} className="hover-lift" style={{
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                padding: '36px 30px 32px 30px',
                border: '1px solid var(--color-border)',
                borderTop: '4px solid var(--color-gold)',
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '24px',
                  background: 'var(--color-gold)',
                  color: '#FFFFFF',
                  fontSize: '12px',
                  fontWeight: 700,
                  padding: '2px 10px',
                  borderRadius: '2px',
                  letterSpacing: '0.05em'
                }}>
                  0{idx + 1}
                </div>
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '8px 0 14px 0', lineHeight: 1.35 }}>
                  {act.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {act.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4. ПРАКТИКА (CASES BLOCK) ═══ */}
      <CasesBlock 
        title={<>Судебная практика по разделу <br />лицевых счетов и оплате ЖКУ</>}
        showDemoWarning={false}
        resultLabel="Ключевой результат"
        cases={[
          {
            category: "ДОЛЕВАЯ СОБСТВЕННОСТЬ",
            title: "Установили раздельную оплату для бывших супругов — совладельцев квартиры",
            problem: "После развода квартира осталась в равных долях (по 1/2). Клиент проживал отдельно, но продолжал получать требования по общей задолженности, а бывшая супруга коммунальные услуги не оплачивала.",
            action: "Проверили выписку ЕГРН, лицевые счета и поставщиков. Направили предложение о соглашении, получили отказ, после чего подготовили иск об определении порядка оплаты соразмерно долям с привлечением управляющей компании и РСО.",
            result: "Суд удовлетворил иск, определив участие сторон в оплате по 1/2 доле каждому, и обязал выставлять раздельные платёжные документы.",
            isDemo: false
          },
          {
            category: "ВЗЫСКАНИЕ ДОЛГА",
            title: "Взыскали с совладельцев расходы по ЖКУ, оплаченные одной наследницей",
            problem: "Трое наследников получили доли в квартире, однако все квитанции за 2 года оплачивала одна собственница во избежание ареста счетов. Остальные совладельцы компенсировать затраты отказывались.",
            action: "Разделили платежи по периодам и правовой природе, сопоставили квитанции с банковскими выписками доверительницы. Направили претензию, а затем подали иск о взыскании неосновательного обогащения.",
            result: "Суд взыскал с двух совладельцев более 140 000 ₽ в пользу доверительницы и определил раздельный порядок начисления платежей на будущее время.",
            isDemo: false
          },
          {
            category: "СОЦИАЛЬНЫЙ НАЁМ",
            title: "Определили самостоятельную оплату бывшего члена семьи в муниципальной квартире",
            problem: "После распада семьи бывший член семьи нанимателя продолжал проживать в муниципальной квартире, но расходы систематически перекладывались на нанимателя.",
            action: "Изучили договор соцнайма, зафиксировали раздельное ведение хозяйства и заявили требования об определении долей в оплате жилья в соответствии со ст. 69 ЖК РФ.",
            result: "Суд определил самостоятельный порядок участия бывшего члена семьи в расходах и обязал ЕПД формировать отдельные квитанции.",
            isDemo: false
          }
        ]}
      />

      {/* ═══ 5. КАК ПРОХОДИТ РАБОТА ═══ */}
      <ProcessBlock 
        title="Как проходит работа"
        subtitle="Пять шагов к получению раздельных квитанций на оплату ЖКУ."
        steps={[
          { num: '01', title: 'Первичный разбор', desc: 'Уточняем форму собственности, размеры долей, состав зарегистрированных лиц и наличие задолженности.' },
          { num: '02', title: 'Анализ начислений', desc: 'Проверяем квитанции всех поставщиков коммунальных услуг и управляющей компании.' },
          { num: '03', title: 'Досудебный порядок', desc: 'Подготавливаем соглашение совладельцев или официальные заявления в УК и расчётные центры.' },
          { num: '04', title: 'Судебный процесс', desc: 'При отказе составляем иск, обосновываем доли участия и представляем ваши интересы в суде.' },
          { num: '05', title: 'Открытие счетов', desc: 'Передаём решение суда в УК и расчётный центр и контролируем формирование раздельных квитанций.' }
        ]}
      />

      {/* ═══ 6. СТОИМОСТЬ УСЛУГ ═══ */}
      <div onClickCapture={(e) => {
        const target = e.target as HTMLElement;
        const btn = target.closest('a, button');
        if (btn) {
          const text = btn.textContent?.trim() || '';
          if (text.includes('Получить расчёт')) {
            handleCtaClick('housing_razdel_price_total', 'Получить расчёт стоимости');
          } else {
            handleCtaClick('housing_razdel_price_tier', text);
          }
        }
      }}>
        <PricingBlock 
          title="Стоимость юридической помощи"
          subtitle="Стоимость фиксируется в договоре и не меняется в процессе работы. Подберём оптимальный формат сопровождения."
          tiers={[
            {
              title: <>Консультация и анализ</>,
              subtitle: 'Первичный разбор',
              popular: false,
              price: 'от ХХХ ₽',
              features: [
                { name: 'Анализ правового статуса жилья и долей', value: '✓' },
                { name: 'Проверка квитанций и структуры начислений', value: '✓' },
                { name: 'Выработка пошагового плана действий', value: '✓' }
              ],
              buttonText: 'Записаться на консультацию',
              buttonHref: '#form'
            },
            {
              title: <>Соглашение и обращения</>,
              subtitle: 'Досудебное оформление',
              popular: true,
              badgeText: 'ВОСТРЕБОВАНО',
              price: 'от ХХХ ₽',
              features: [
                { name: 'Составление соглашения о порядке оплаты', value: '✓' },
                { name: 'Заявления в УК, ТСЖ, ЕПД и РСО', value: '✓' },
                { name: 'Контроль получения ответов', value: '✓' }
              ],
              buttonText: 'Рассчитать стоимость',
              buttonHref: '#form'
            },
            {
              title: <>Судебный процесс под ключ</>,
              subtitle: 'Раздел через суд',
              popular: false,
              price: 'от ХХХ ₽',
              features: [
                { name: 'Составление и подача иска в суд', value: '✓' },
                { name: 'Представительство во всех заседаниях', value: '✓' },
                { name: 'Передача решения суда в УК/ЕПД', value: '✓' }
              ],
              buttonText: 'Обсудить ситуацию',
              buttonHref: '#form'
            }
          ]}
          ctaTitle="Точную стоимость определим до начала работы"
          ctaSubtitle={<>Изучим документы и предложим подходящий вариант разделения платежей <br />без лишних судебных издержек.</>}
          ctaButtonText="Получить расчёт стоимости"
          ctaButtonLink="#form"
          disclaimer=""
        />
      </div>

      {/* ═══ 7. ЧАСТЫЕ ВОПРОСЫ ═══ */}
      <div onClickCapture={() => handleCtaClick('housing_razdel_faq', 'Задать свой вопрос')}>
        <FAQBlock 
          faqs={faqs} 
          title={<>Частые вопросы <br />по разделу лицевых счетов и оплате ЖКУ</>}
          subtitle="Собрали ответы на ключевые вопросы собственников и нанимателей жилья."
          ctaText="Задать свой вопрос"
          ctaLink="#form"
        />
      </div>

      {/* ═══ 8. СВЯЗАННЫЕ УСЛУГИ ═══ */}
      <section className="section bg-cream" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Связанные услуги жилищного юриста
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
              Смежные направления помощи по защите прав на жилое помещение.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '20px' }}>
            <Link href="/grazhdanam/zhilishchnyj-yurist/spory-s-upravlyayushchej-kompaniej-i-zhkh/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <div className="card service-card" style={{ height: '100%', padding: '32px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', borderRadius: '0', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3 }}>
                  Споры с УК, ТСЖ и ЖКХ
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Оспаривание завышенных начислений, перерасчёт за некачественные услуги и претензии по содержанию дома.
                </p>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600 }}>
                  Подробнее →
                </div>
              </div>
            </Link>

            <Link href="/grazhdanam/zhilishchnyj-yurist/vyselenie-i-vypiska-iz-kvartiry-cherez-sud/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <div className="card service-card" style={{ height: '100%', padding: '32px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', borderRadius: '0', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3 }}>
                  Выселение и выписка через суд
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Прекращение права пользования жильём и снятие с регистрационного учёта непроживающих лиц.
                </p>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600 }}>
                  Подробнее →
                </div>
              </div>
            </Link>

            <Link href="/grazhdanam/zhilishchnyj-yurist/vselenie-i-ustranenie-prepyatstvij-v-polzovanii-kvartiroj/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <div className="card service-card" style={{ height: '100%', padding: '32px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', borderRadius: '0', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3 }}>
                  Вселение и порядок пользования
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Получение доступа в квартиру, защита от смены замков и закрепление комнат за собственниками.
                </p>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600 }}>
                  Подробнее →
                </div>
              </div>
            </Link>
          </div>

          <div style={{ marginTop: '32px' }}>
            <Link href="/grazhdanam/zhilishchnyj-yurist/" style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '16px', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
              Смотреть все услуги жилищного юриста →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 9. ФИНАЛЬНАЯ ФОРМА ═══ */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start', paddingTop: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>Связаться с нами</span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                Обсудите разделение порядка оплаты ЖКУ
              </h2>
              
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Опишите ситуацию: кто является собственником, в каких долях, кто фактически проживает и есть ли накопленная задолженность. Юрист изучит данные и свяжется с вами.
              </p>
              
              <div style={{ marginTop: '32px' }}>
                <div style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <span>
                    Перезвоним вам в течение 15 минут в рабочее время
                  </span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
              <div style={{ background: 'var(--gradient-cream)', padding: '40px', borderRadius: '0', boxShadow: '0 8px 24px rgba(0,0,0,0.15)', width: '100%', border: '1px solid rgba(0,0,0,0.06)' }}>
                <ContactsForm 
                  title="Написать нам" 
                  subtitle=""
                  buttonText="Оставить заявку"
                  commentPlaceholder="Например: квартира в равных долях с бывшим супругом, он не оплачивает ЖКУ…"
                  subtext="Если вы оставите заявку вечером или в выходной день, мы перезвоним в ближайший рабочий день."
                  hiddenFields={[
                    { name: 'pageId', value: 'CIV-HOUSING-RAZDEL' },
                    { name: 'pageTitle', value: 'Раздел лицевых счетов и порядка оплаты ЖКУ в Липецке' },
                    { name: 'practice', value: 'Жилищное право' },
                    { name: 'ctaSource', value: ctaSource },
                    { name: 'cta_source', value: ctaSource },
                    { name: 'cta_text', value: ctaText }
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
