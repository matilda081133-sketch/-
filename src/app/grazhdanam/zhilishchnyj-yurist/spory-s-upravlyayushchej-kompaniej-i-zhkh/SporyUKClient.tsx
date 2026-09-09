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

export default function SporyUKClient() {
  const [ctaSource, setCtaSource] = useState('housing_uk_form_direct');
  const [ctaText, setCtaText] = useState('Прямой переход к форме');

  const handleCtaClick = (source: string, text: string) => {
    setCtaSource(source);
    setCtaText(text);
  };

  const faqs = [
    {
      q: 'Куда жаловаться на управляющую компанию?',
      a: 'Зависит от нарушения: сначала часто нужна доказуемая заявка или претензия, затем ГЖИ, Роспотребнадзор, прокуратура или суд в пределах их компетенции. Универсального адресата для всех вопросов нет.'
    },
    {
      q: 'Можно ли не платить, если услуга некачественная?',
      a: 'Самовольное прекращение оплаты создаёт риск долга и пеней. Безопаснее зафиксировать ненадлежащее качество и требовать официального перерасчёта в установленном законом порядке.'
    },
    {
      q: 'Как доказать, что в квартире холодно или нет напора воды?',
      a: 'Нужны аварийные заявки, вызов инспектора и акт с корректными замерами температуры/давления, датой, помещениями и подписями. Способ фиксации подбирается под конкретную услугу.'
    },
    {
      q: 'Обязана ли УК ремонтировать подъезд, подвал или крышу?',
      a: 'Сначала проверяются состав общего имущества, минимальный перечень обязательных работ, договор управления и характер дефекта. Текущий ремонт УК обязана проводить в рамках тарифа на содержание жилья.'
    },
    {
      q: 'Что делать, если УК игнорирует обращения?',
      a: 'Сохраняйте подтверждения отправки и сроки. По истечении срока ответа подаётся жалоба в Государственную жилищную инспекцию Липецкой области либо исковое заявление в суд.'
    },
    {
      q: 'Как оспорить протокол общего собрания собственников (ОСС)?',
      a: 'Необходимо запросить копию протокола и бюллетеней в ГЖИ, проверить кворум, порядок уведомления и наличие фальсифицированных подписей. Иск подаётся в районный суд в течение 6 месяцев.'
    },
    {
      q: 'Можно ли взыскать с УК моральный вред и штраф 50%?',
      a: 'Да. К отношениям между жильцами и УК применяется Закон РФ «О защите прав потребителей», что даёт право на компенсацию морального вреда, штраф в размере 50% от присуждённой суммы и возмещение расходов на юриста.'
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
        '@id': 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/spory-s-upravlyayushchej-kompaniej-i-zhkh/#service',
        name: 'Споры с управляющей компанией, ТСЖ и ЖКХ в Липецке',
        serviceType: 'Юридическая помощь в спорах с организациями ЖКХ',
        url: 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/spory-s-upravlyayushchej-kompaniej-i-zhkh/',
        provider: { '@id': 'https://dejure-help.ru/#legalservice' },
        areaServed: ['Липецк', 'Липецкая область']
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/spory-s-upravlyayushchej-kompaniej-i-zhkh/#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://dejure-help.ru/' },
          { '@type': 'ListItem', position: 2, name: 'Гражданам', item: 'https://dejure-help.ru/grazhdanam/' },
          { '@type': 'ListItem', position: 3, name: 'Жилищный юрист', item: 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/' },
          { '@type': 'ListItem', position: 4, name: 'Споры с УК, ТСЖ и ЖКХ', item: 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/spory-s-upravlyayushchej-kompaniej-i-zhkh/' }
        ]
      }
    ]
  };

  const situations = [
    {
      tag: 'Завышенные счета',
      title: 'Необоснованные начисления и завышенные нормативы ОДН',
      desc: 'Проверим тарифы, корректность показаний общедомовых приборов учёта и добьёмся обязательного перерасчёта.'
    },
    {
      tag: 'Некачественные услуги',
      title: 'Холодные батареи, слабый напор воды, перебои со светом',
      desc: 'Организуем официальную фиксацию параметров качества коммунальных услуг и снизим плату через претензии и суд.'
    },
    {
      tag: 'Отказ в ремонте',
      title: 'УК не ремонтирует протекающую крышу, швы или подвал',
      desc: 'Обяжем управляющую организацию провести текущий ремонт общего имущества дома через ГЖИ и судебное решение.'
    },
    {
      tag: 'Подделка протоколов',
      title: 'Фальсификация решений общего собрания собственников',
      desc: 'Истребуем бюллетени голосования, выявим отсутствие кворума и признаем протокол ОСС недействительным через суд.'
    },
    {
      tag: 'Ущерб от УК',
      title: 'Ущерб от падения наледи, протечки стояка или затопления подвала',
      desc: 'Докажем вину управляющей компании, организуем независимую экспертизу и взыщем полную стоимость восстановительного ремонта.'
    },
    {
      tag: 'Отказ в информации',
      title: 'УК не предоставляет финансовые отчёты и сметы расходов',
      desc: 'Привлечём организацию к ответственности за нарушение стандарта раскрытия информации и добьёмся финансовой прозрачности.'
    }
  ];

  const helpActions = [
    {
      title: <>Правовой аудит начислений</>,
      desc: 'Изучаем квитанции, договор управления, акты выполненных работ, тарифы и нормативы потребления.'
    },
    {
      title: <>Фиксация нарушений</>,
      desc: 'Составляем акты с замерами температуры, давления, фотографированием дефектов кровли и подъездов.'
    },
    {
      title: <>Претензионная работа</>,
      desc: 'Направляем мотивированные претензии с требованием перерасчёта, выполнения ремонта и выплаты неустойки.'
    },
    {
      title: <>Жалобы в ГЖИ и прокуратуру</>,
      desc: 'Инициируем внеплановые инспекционные проверки Государственной жилищной инспекции Липецкой области.'
    },
    {
      title: <>Судебная защита прав потребителей</>,
      desc: 'Взыскиваем перерасчёт, возмещение ущерба, штраф 50%, неустойку и компенсацию морального вреда.'
    },
    {
      title: <>Оспаривание протоколов ОСС</>,
      desc: 'Признаём недействительными незаконные решения о выборе УК, смене тарифа или передаче общего имущества.'
    }
  ];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />
      <Header />

      {/* ═══ 1. ПЕРВЫЙ ЭКРАН ═══ */}
      <div onClickCapture={() => handleCtaClick('housing_uk_hero', 'Обсудить спор с УК')}>
        <MilitaryHero 
          breadcrumbs={
            <>
              <Link href="/" style={{ color: 'var(--color-primary)' }}>Главная</Link> <span style={{ margin: '0 8px' }}>/</span> 
              <Link href="/grazhdanam/" style={{ color: 'var(--color-primary)' }}>Гражданам</Link> <span style={{ margin: '0 8px' }}>/</span> 
              <Link href="/grazhdanam/zhilishchnyj-yurist/" style={{ color: 'var(--color-primary)' }}>Жилищный юрист</Link> <span style={{ margin: '0 8px' }}>/</span> 
              <span style={{ color: 'var(--color-text-main)' }}>Споры с управляющей компанией и ЖКХ</span>
            </>
          }
          superTitle="Жилищное право • споры с УК и ЖКХ • Липецк"
          title={<>Споры с управляющей компанией <br />и организациями ЖКХ в Липецке</>}
          subtitle={
            <span style={{ display: 'inline-block', maxWidth: '600px', textWrap: 'balance' }}>
              Защитим права собственников: добьёмся перерасчёта незаконных начислений, проведения ремонта общего имущества, возмещения ущерба и отмены сфальсифицированных протоколов собраний.
            </span>
          }
          primaryCtaText="Обсудить спор с УК"
          primaryCtaLink="#form"
          primaryCtaAnalytics="housing_uk_consultation_click"
          primaryCtaSubtext="Перезвоним в течение 15 минут в рабочее время"
          secondaryCtaText="С какими вопросами помогаем"
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
                <path d="M3 21h18 M4 21v-2h16v2 M6 19V9 M10 19V9 M14 19V9 M18 19V9 M12 4l-9 5h18l-9-5z"/>
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
                        <span style={{ fontSize: '4.5px', fontWeight: 'bold', color: 'rgba(23,50,77,0.5)', fontFamily: 'var(--font-serif)' }}>ПРЕТЕНЗИЯ В УК</span>
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
                          АКТ ОБСЛЕДОВАНИЯ<br/>
                          ОБЩЕГО ИМУЩЕСТВА МКД
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
                          <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Собственник:</div>
                          <div style={{ width: '70px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '8px' }}></div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                          <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Инспектор:</div>
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
                          <span style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)', letterSpacing: '0.05em' }}>СПОРИ С УК И ЖКХ</span>
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
                        <div style={{ fontSize: '7px', fontWeight: 'bold', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>ПРЕТЕНЗИОННЫЕ ТРЕБОВАНИЯ:</div>
                        <div style={{ fontSize: '6px', color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>
                          1. Провести перерасчёт за отопление<br/>
                          2. Выполнить текущий ремонт кровли МКД<br/>
                          3. Выплатить штраф 50% по ЗПП
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
                          <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Защита прав в сфере ЖКХ</div>
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
            { text: 'Проверим обоснованность тарифов и начислений' },
            { text: 'Привлечём ГЖИ и надзорные органы' },
            { text: 'Взыщем ущерб, штраф 50% и судебные издержки' }
          ]}
        />
      </div>

      {/* ═══ 2. С КАКИМИ СИТУАЦИЯМИ ОБРАЩАЮТСЯ ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '960px', marginBottom: '44px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              С какими спорами с УК и ТСЖ мы помогаем
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Привлечём управляющую организацию к ответственности за ненадлежащее содержание дома и добьёмся перерасчёта.
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

          <div className="card service-card" style={{ 
            width: '100%', 
            padding: '22px 28px', 
            background: 'var(--color-deep-blue)', 
            borderRadius: '2px',
            borderTop: '3px solid var(--color-gold)',
            boxShadow: '0 4px 16px rgba(16, 39, 59, 0.16)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '18px',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ flex: '1 1 340px' }}>
              <h3 style={{ margin: '0 0 6px 0', fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-white)', lineHeight: 1.3 }}>
                УК обязана возместить ущерб и выплатить 50% штрафа
              </h3>
              <p style={{ margin: '0', fontSize: '14px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5, maxWidth: '780px' }}>
                По закону о защите прав потребителей все расходы на независимую экспертизу, юридическую помощь и штраф 50% от суммы взыскиваются с управляющей организации.
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <a 
                href="#form" 
                className="btn white-btn-custom"
                style={{ display: 'inline-block', textAlign: 'center', fontSize: '14px', backgroundColor: 'var(--color-white)', color: '#10273B', fontWeight: 600, padding: '12px 24px' }}
                onClick={() => handleCtaClick('housing_uk_banner', 'Привлечь УК к ответственности')}
              >
                Привлечь УК к ответу
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. КАК ПОМОГАЕТ ЮРИСТ ═══ */}
      <section className="section" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Как юрист решает споры с управляющими компаниями
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Выстраиваем строгую доказательную базу с фиксацией фактов ненадлежащего оказания услуг и заставляем УК устранять нарушения.
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

      {/* ═══ 4. ПРАКТИКА ═══ */}
      <CasesBlock 
        title={<>Практика по спорам с управляющими <br />компаниями и ЖКХ в Липецке</>}
        showDemoWarning={false}
        resultLabel="Ключевой результат"
        cases={[
          {
            category: "ЗАЛИВ С КРОВЛИ",
            title: "Взыскали 327 800 ₽ ущерба с УК за протечку кровли многоквартирного дома",
            problem: "После дождя затопило квартиру верхнего этажа. УК отказалась признавать вину, ссылаясь на аномальные осадки и ветхость дома.",
            action: "Организовали независимую экспертизу, зафиксировали нарушения правил содержания общего имущества кровли и заявили иск с учётом Закона о ЗПП.",
            result: "Суд взыскал с УК стоимость ремонта, моральный вред, расходы на юриста и 50% штрафа — суммарно 327 800 ₽.",
            isDemo: false
          },
          {
            category: "НЕЗАКОННЫЙ ТАРИФ",
            title: "Отменили сфальсифицированный протокол ОСС и вернули переплату жильцам",
            problem: "Управляющая компания увеличила тариф на содержание жилья на 40%, предоставив протокол собрания с поддельными подписями собственников.",
            action: "Истребовали бюллетени через суд, провели почерковедческий анализ и доказали отсутствие кворума (менее 32% реальных голосов).",
            result: "Суд признал решение общего собрания недействительным и обязал УК произвести перерасчёт тарифа всем жителям дома.",
            isDemo: false
          },
          {
            category: "ОТОПЛЕНИЕ",
            title: "Добились перерасчёта платы за отопление и нормализации температуры",
            problem: "В зимний период температура в угловой квартире не превышала 15°C, при этом УК выставляла полные счета за теплоснабжение.",
            action: "Оформили комиссионные акты замеров с участием жилищной инспекции и направили мотивированную претензию с угрозой судебного штрафа.",
            result: "УК отрегулировала гидравлический режим дома и произвела перерасчёт платы за весь отопительный сезон.",
            isDemo: false
          }
        ]}
      />

      {/* ═══ 5. КАК ПРОХОДИТ РАБОТА ═══ */}
      <ProcessBlock 
        title="Как проходит работа"
        subtitle="Пять этапов правовой защиты против недобросовестных организаций ЖКХ."
        steps={[
          { num: '01', title: 'Анализ ситуации', desc: 'Изучаем квитанции, договор с УК, акты и выявляем юридические основания нарушений.' },
          { num: '02', title: 'Фиксация доказательств', desc: 'Организуем замеры параметров, фотофиксацию и независимую экспертизу повреждений.' },
          { num: '03', title: 'Претензия в УК', desc: 'Направляем официальное требование с расчётом штрафов по Закону о защите прав потребителей.' },
          { num: '04', title: 'Жалобы в надзорные органы', desc: 'Привлекаем Государственную жилищную инспекцию и прокуратуру для вынесения предписаний.' },
          { num: '05', title: 'Судебное взыскание', desc: 'Взыскиваем перерасчёт, ущерб, моральный вред, неустойку и штраф 50% через суд.' }
        ]}
      />

      {/* ═══ 6. СТОИМОСТЬ ═══ */}
      <div onClickCapture={(e) => {
        const target = e.target as HTMLElement;
        const btn = target.closest('a, button');
        if (btn) {
          const text = btn.textContent?.trim() || '';
          if (text.includes('Получить расчёт')) {
            handleCtaClick('housing_uk_price_total', 'Получить расчёт стоимости');
          } else {
            handleCtaClick('housing_uk_price_tier', text);
          }
        }
      }}>
        <PricingBlock 
          title="Стоимость юридической помощи"
          subtitle="Расходы на услуги юриста взыскиваются с управляющей компании в суде."
          tiers={[
            {
              title: <>Консультация и проверка квитанций</>,
              subtitle: 'Первичный аудит',
              popular: false,
              price: 'от ХХХ ₽',
              features: [
                { name: 'Правовой анализ договора управления', value: '✓' },
                { name: 'Проверка структуры и законности начислений', value: '✓' },
                { name: 'Оценка перспектив взыскания', value: '✓' }
              ],
              buttonText: 'Записаться на консультацию',
              buttonHref: '#form'
            },
            {
              title: <>Претензия и жалобы в ГЖИ</>,
              subtitle: 'Досудебное давление',
              popular: true,
              badgeText: 'ВОСТРЕБОВАНО',
              price: 'от ХХХ ₽',
              features: [
                { name: 'Составление мотивированной претензии в УК', value: '✓' },
                { name: 'Жалобы в Жилищную инспекцию и прокуратуру', value: '✓' },
                { name: 'Расчёт штрафных санкций по ЗПП', value: '✓' }
              ],
              buttonText: 'Рассчитать стоимость',
              buttonHref: '#form'
            },
            {
              title: <>Судебный процесс под ключ</>,
              subtitle: 'Полное ведение дела',
              popular: false,
              price: 'от ХХХ ₽',
              features: [
                { name: 'Исковое заявление и ходатайства', value: '✓' },
                { name: 'Представительство во всех заседаниях', value: '✓' },
                { name: 'Взыскание компенсации и штрафа 50%', value: '✓' }
              ],
              buttonText: 'Обсудить ситуацию',
              buttonHref: '#form'
            }
          ]}
          ctaTitle="Точную стоимость определим до начала работы"
          ctaSubtitle="Изучим документы и предложим действенный план привлечения УК к ответственности."
          ctaButtonText="Получить расчёт стоимости"
          ctaButtonLink="#form"
          disclaimer=""
        />
      </div>

      {/* ═══ 7. FAQ ═══ */}
      <div onClickCapture={() => handleCtaClick('housing_uk_faq', 'Задать свой вопрос')}>
        <FAQBlock 
          faqs={faqs} 
          title={<>Частые вопросы по спорам <br />с управляющими компаниями и ЖКХ</>}
          subtitle="Собрали ответы на ключевые вопросы жильцов многоквартирных домов."
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
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Смежные направления помощи по защите интересов собственников жилья.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '20px' }}>
            <Link href="/grazhdanam/zhilishchnyj-yurist/zaliv-kvartiry/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <div className="card service-card" style={{ height: '100%', padding: '32px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', borderRadius: '0', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3 }}>
                  Залив квартиры
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Взыскание стоимости восстановительного ремонта после затопления с виновных соседей или управляющей компании.
                </p>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600 }}>
                  Подробнее →
                </div>
              </div>
            </Link>

            <Link href="/grazhdanam/zhilishchnyj-yurist/razdel-licevyh-schetov-i-poryadka-oplaty-zhku/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <div className="card service-card" style={{ height: '100%', padding: '32px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', borderRadius: '0', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3 }}>
                  Раздел оплаты ЖКУ
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Определение долей участия в оплате коммунальных услуг и получение отдельных платёжных документов.
                </p>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600 }}>
                  Подробнее →
                </div>
              </div>
            </Link>

            <Link href="/grazhdanam/zhilishchnyj-yurist/soglasovanie-i-uzakonenie-pereplanirovki/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <div className="card service-card" style={{ height: '100%', padding: '32px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', borderRadius: '0', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3 }}>
                  Узаконение перепланировки
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Согласование выполненных изменений помещений с администрацией или сохранение ремонта через суд.
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

      {/* ═══ 9. ФОРМА ═══ */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start', paddingTop: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>Связаться с нами</span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                Обсудите спор с управляющей компанией
              </h2>
              
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Опишите возникшую проблему: завышенные начисления, отказ в ремонте или некачественные услуги. Юрист по жилищному праву изучит документы и свяжется с вами.
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
                  commentPlaceholder="Например: УК начислила завышенные платежи по ОДН и отказывается делать перерасчёт…"
                  subtext="Если вы оставите заявку вечером или в выходной день, мы перезвоним в ближайший рабочий день."
                  hiddenFields={[
                    { name: 'pageId', value: 'CIV-HOUSING-UK' },
                    { name: 'pageTitle', value: 'Споры с УК, ТСЖ и ЖКХ в Липецке' },
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
