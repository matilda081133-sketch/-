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

export default function PereplanirovkaClient() {
  const [ctaSource, setCtaSource] = useState('housing_pereplan_form_direct');
  const [ctaText, setCtaText] = useState('Прямой переход к форме');

  const handleCtaClick = (source: string, text: string) => {
    setCtaSource(source);
    setCtaText(text);
  };

  const faqs = [
    {
      q: 'Чем отличается перепланировка от переустройства?',
      a: 'Перепланировка — это изменение конфигурации помещения (перенос стен, проёмов, объединение комнат). Переустройство — это перенос или замена инженерных сетей, сантехники, вентиляции или электрических плит. Оба вида работ требуют согласования.'
    },
    {
      q: 'Можно ли узаконить уже выполненную перепланировку?',
      a: 'Да. Если выполненные работы не нарушают строительные, санитарные и противопожарные нормы, не затрагивают несущие конструкции и права соседей, жилое помещение можно сохранить в перепланированном состоянии через суд.'
    },
    {
      q: 'Что категорически запрещено делать при перепланировке?',
      a: 'Запрещено сносить или ослаблять несущие стены, объединять кухню с газовой плитой с жилой комнатой без двери, выносить радиаторы отопления на балкон, переносить мокрые зоны (санузел, кухня) над жилыми комнатами соседей снизу.'
    },
    {
      q: 'Что грозит за незаконную перепланировку?',
      a: 'Штраф от жилищной инспекции, предписание вернуть квартиру в исходное состояние, сложности при продаже, дарении или получении ипотеки. При отказе выполнить предписание квартира может быть продана с публичных торгов.'
    },
    {
      q: 'Нужно ли согласие всех собственников дома?',
      a: 'Согласие всех собственников МКД (не менее 2/3 или 100% голосов на ОСС) требуется только в том случае, если перепланировка затрагивает общедомовое имущество (например, присоединение тамбура, вентиляционного короба, пробивка отдельного входа в фасадной стене).'
    },
    {
      q: 'Сколько времени занимает согласование?',
      a: 'Досудебное согласование проекта в администрации Липецка занимает от 1.5 до 2.5 месяцев. Узаконение через суд при наличии готового технического заключения занимает в среднем 2–4 месяца.'
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
        '@id': 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/soglasovanie-i-uzakonenie-pereplanirovki/#service',
        name: 'Согласование и узаконение перепланировки в Липецке',
        serviceType: 'Юридическая помощь по согласованию и узаконению перепланировки',
        url: 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/soglasovanie-i-uzakonenie-pereplanirovki/',
        provider: { '@id': 'https://dejure-help.ru/#legalservice' },
        areaServed: ['Липецк', 'Липецкая область']
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/soglasovanie-i-uzakonenie-pereplanirovki/#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://dejure-help.ru/' },
          { '@type': 'ListItem', position: 2, name: 'Гражданам', item: 'https://dejure-help.ru/grazhdanam/' },
          { '@type': 'ListItem', position: 3, name: 'Жилищный юрист', item: 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/' },
          { '@type': 'ListItem', position: 4, name: 'Согласование и узаконение перепланировки', item: 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/soglasovanie-i-uzakonenie-pereplanirovki/' }
        ]
      }
    ]
  };

  const situations = [
    {
      tag: 'Планируемый ремонт',
      title: 'Хотите сделать ремонт и заранее получить разрешение',
      desc: 'Подготовим проект перепланировки, соберём пакет документов и получим распоряжение администрации Липецка до начала работ.'
    },
    {
      tag: 'Сделанный ремонт',
      title: 'Перепланировка уже сделана без предварительного разрешения',
      desc: 'Организуем строительно-техническое заключение о безопасности и сохраним помещение в изменённом виде через суд.'
    },
    {
      tag: 'Предписание ГЖИ',
      title: 'Получено предписание администрации или жилищной инспекции',
      desc: 'Защитим от штрафов и требований вернуть всё в исходное состояние, доказав безопасность выполненных изменений.'
    },
    {
      tag: 'Отказ администрации',
      title: 'Администрация города Липецка отказала в согласовании',
      desc: 'Изучим причины отказа, устраним формальные замечания или оспорим незаконное решение органа местного самоуправления в суде.'
    },
    {
      tag: 'Сделка с квартирой',
      title: 'Нужно продать квартиру, оформить ипотеку или наследство',
      desc: 'Внесём изменения в технический план и сведения ЕГРН, чтобы снять ограничения банка и Росреестра на регистрацию сделок.'
    },
    {
      tag: 'Объединение комнат',
      title: 'Перенос мокрых зон, объединение санузла, расширение кухни',
      desc: 'Проверим допустимость планировочных решений по действующим СП и СНиП, исключив риски для здания.'
    }
  ];

  const helpActions = [
    {
      title: <>Правовой и технический анализ</>,
      desc: 'Сопоставляем планируемые или выполненные изменения со строительными, противопожарными и санитарными нормами.'
    },
    {
      title: <>Разработка проекта перепланировки</>,
      desc: 'Взаимодействуем с сертифицированными проектировщиками (СРО) для подготовки проектной документации и техзаключения.'
    },
    {
      title: <>Согласование в администрации Липецка</>,
      desc: 'Формируем полный комплект документов и представляем ваши интересы в департаменте градостроительства и архитектуры.'
    },
    {
      title: <>Судебное узаконение самовольных работ</>,
      desc: 'Составляем иск о сохранении помещения в перепланированном состоянии, привлекаем экспертов и выигрываем дело в суде.'
    },
    {
      title: <>Акт приёмочной комиссии</>,
      desc: 'Организуем выход приёмочной комиссии администрации и получение акта о завершении переустройства и перепланировки.'
    },
    {
      title: <>Внесение изменений в ЕГРН</>,
      desc: 'Кадастровый инженер изготавливает технический план, на основании которого новые параметры квартиры вносятся в Росреестр.'
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
      <div onClickCapture={() => handleCtaClick('housing_pereplan_hero', 'Узаконить перепланировку')}>
        <MilitaryHero 
          breadcrumbs={
            <>
              <Link href="/" style={{ color: 'var(--color-primary)' }}>Главная</Link> <span style={{ margin: '0 8px' }}>/</span> 
              <Link href="/grazhdanam/" style={{ color: 'var(--color-primary)' }}>Гражданам</Link> <span style={{ margin: '0 8px' }}>/</span> 
              <Link href="/grazhdanam/zhilishchnyj-yurist/" style={{ color: 'var(--color-primary)' }}>Жилищный юрист</Link> <span style={{ margin: '0 8px' }}>/</span> 
              <span style={{ color: 'var(--color-text-main)' }}>Согласование и узаконение перепланировки</span>
            </>
          }
          superTitle="Жилищное право • перепланировка и переустройство • Липецк"
          title={<>Согласование и узаконение <br />перепланировки в Липецке</>}
          subtitle={
            <span style={{ display: 'inline-block', maxWidth: '600px', textWrap: 'balance' }}>
              Комплексное сопровождение: проверим допустимость ремонта, разработаем проект, согласуем с администрацией города Липецка или сохраним помещение через суд с внесением в ЕГРН.
            </span>
          }
          primaryCtaText="Узаконить перепланировку"
          primaryCtaLink="#form"
          primaryCtaAnalytics="housing_pereplan_consultation_click"
          primaryCtaSubtext="Перезвоним в течение 15 минут в рабочее время"
          secondaryCtaText="С какими случаями помогаем"
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
                <path d="M3 3h18v18H3z M3 9h18 M9 21V9"/>
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
                        <span style={{ fontSize: '4.5px', fontWeight: 'bold', color: 'rgba(23,50,77,0.5)', fontFamily: 'var(--font-serif)' }}>РАСПОРЯЖЕНИЕ АДМИНИСТРАЦИИ</span>
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
                          ПРОЕКТ ПЕРЕПЛАНИРОВКИ<br/>
                          И ТЕХНИЧЕСКИЙ ПЛАН
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
                          <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Проектировщик (СРО):</div>
                          <div style={{ width: '70px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '8px' }}></div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                          <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Юрист «Де-Юре»:</div>
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
                          <span style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)', letterSpacing: '0.05em' }}>ПЕРЕПЛАНИРОВКА</span>
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
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '4px'
                      }}>
                        <svg width="100%" height="100%" viewBox="0 0 200 100" fill="none">
                          <rect x="20" y="10" width="160" height="80" fill="rgba(193, 160, 102, 0.08)" stroke="#10273B" strokeWidth="1.5" />
                          <line x1="105" y1="10" x2="105" y2="90" stroke="#10273B" strokeWidth="1.2" />
                          {/* Демонтируемая перегородка красным пунктиром */}
                          <line x1="20" y1="55" x2="105" y2="55" stroke="#C62828" strokeWidth="1.5" strokeDasharray="3 2" />
                          <line x1="65" y1="55" x2="65" y2="90" stroke="#10273B" strokeWidth="1.2" />
                          <text x="30" y="50" fill="#C62828" fontSize="5.5" fontWeight="bold">Демонтаж</text>
                          <text x="32" y="32" fill="#10273B" fontSize="6" fontWeight="bold">Кухня-гостиная</text>
                          <text x="116" y="46" fill="#10273B" fontSize="6" fontWeight="bold">Спальня</text>
                          <text x="45" y="96" fill="#C1A066" fontSize="6.5" fontWeight="bold">ПЛАН ПЕРЕПЛАНИРОВКИ • СОГЛАСОВАНО</text>
                        </svg>
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
                          <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Согласование перепланировок</div>
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
            { text: 'Проверим соответствие СП и СНиП' },
            { text: 'Оформим проектную документацию СРО' },
            { text: 'Согласуем в администрации или узаконим в суде' }
          ]}
        />
      </div>

      {/* ═══ 2. СИТУАЦИИ ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '960px', marginBottom: '44px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              С какими случаями перепланировки мы помогаем
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Согласуем проект до начала ремонта либо узаконим уже выполненные изменения через суд и внесём данные в ЕГРН.
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
                Узаконение через суд защищает от продажи квартиры с торгов
              </h3>
              <p style={{ margin: '0', fontSize: '14px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5, maxWidth: '780px' }}>
                По ст. 29 ЖК РФ при отказе узаконить самовольную перепланировку администрация вправе подать иск о продаже жилья с публичных торгов. Не откладывайте юридическое оформление.
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <a 
                href="#form" 
                className="btn white-btn-custom"
                style={{ display: 'inline-block', textAlign: 'center', fontSize: '14px', backgroundColor: 'var(--color-white)', color: '#10273B', fontWeight: 600, padding: '12px 24px' }}
                onClick={() => handleCtaClick('housing_pereplan_banner', 'Проверить безопасность перепланировки')}
              >
                Проверить перепланировку
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
              Порядок согласования и узаконения перепланировки
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Берём на себя все технические и юридические этапы взаимодействия с проектировщиками, администрацией и судом.
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
        title={<>Практика по согласованию и узаконению <br />перепланировок в Липецке</>}
        showDemoWarning={false}
        resultLabel="Ключевой результат"
        cases={[
          {
            category: "УЗАКОНЕНИЕ ЧЕРЕЗ СУД",
            title: "Сохранили квартиру в перепланированном состоянии после отказа администрации",
            problem: "Собственник объединил ванную комнату с санузлом и расширил коридор. Администрация отказала в согласовании, выдав предписание о демонтаже.",
            action: "Провели строительно-техническую экспертизу, подтвердившую соблюдение норм гидроизоляции и целостность несущих конструкций. Подали иск в суд о сохранении жилья.",
            result: "Суд вынес решение о сохранении помещения в перепланированном состоянии. Сведения с новым техпланом внесены в ЕГРН.",
            isDemo: false
          },
          {
            category: "ОТМЕНА ПРЕДПИСАНИЯ",
            title: "Отменили предписание ГЖИ о возврате в исходное состояние при покупке жилья",
            problem: "Доверитель приобрёл квартиру со сделанной прошлым владельцем перепланировкой (демонтаж ненесущей перегородки) и получил требование восстановить стену.",
            action: "Подготовили проектную документацию, доказали отсутствие нарушений прав соседей и добились отзыва предписания с последующим согласованием.",
            result: "Квартира полностью легализована, претензии надзорных органов сняты.",
            isDemo: false
          },
          {
            category: "ПРОЕКТ ДО РЕМОНТА",
            title: "Согласовали сложный проект перепланировки с организацией дверного проёма",
            problem: "Клиент планировал организовать проём в ненесущей перегородке и перенести кухонное оборудование в новостройке.",
            action: "Разработали проект в проектной организации с допуском СРО и согласовали его в департаменте градостроительства администрации Липецка с первого раза.",
            result: "Получено официальное распоряжение на проведение работ, ремонт выполнен без риска штрафов.",
            isDemo: false
          }
        ]}
      />

      {/* ═══ 5. ПРОЦЕСС ═══ */}
      <ProcessBlock 
        title="Как проходит работа"
        subtitle="Пять шагов к получению официальных документов на перепланировку."
        steps={[
          { num: '01', title: 'Оценка допустимости', desc: 'Изучаем технический паспорт и планируемые/выполненные изменения на соответствие строительным нормам.' },
          { num: '02', title: 'Проект или техзаключение', desc: 'Организуем подготовку проекта перепланировки или заключения эксперта о безопасности конструкций.' },
          { num: '03', title: 'Администрация или суд', desc: 'Подаём пакет документов в орган местного самоуправления или заявляем судебный иск.' },
          { num: '04', title: 'Приёмочная комиссия', desc: 'Оформляем акт приёмочной комиссии после завершения ремонтно-строительных работ.' },
          { num: '05', title: 'Техплан и Росреестр', desc: 'Кадастровый инженер готовит технический план, и обновлённые сведения вносятся в ЕГРН.' }
        ]}
      />

      {/* ═══ 6. ЦЕНЫ ═══ */}
      <div onClickCapture={(e) => {
        const target = e.target as HTMLElement;
        const btn = target.closest('a, button');
        if (btn) {
          const text = btn.textContent?.trim() || '';
          if (text.includes('Получить расчёт')) {
            handleCtaClick('housing_pereplan_price_total', 'Получить расчёт стоимости');
          } else {
            handleCtaClick('housing_pereplan_price_tier', text);
          }
        }
      }}>
        <PricingBlock 
          title="Стоимость согласования перепланировки"
          subtitle="Стоимость фиксируется в договоре и зависит от сложности изменений (несущие/ненесущие стены, мокрые зоны)."
          tiers={[
            {
              title: <>Первичный аудит и проект</>,
              subtitle: 'До начала ремонта',
              popular: false,
              price: 'от ХХХ ₽',
              features: [
                { name: 'Анализ планов БТИ и допустимости работ', value: '✓' },
                { name: 'Разработка проекта перепланировки СРО', value: '✓' },
                { name: 'Инструктаж по подаче в администрацию', value: '✓' }
              ],
              buttonText: 'Записаться на консультацию',
              buttonHref: '#form'
            },
            {
              title: <>Согласование под ключ</>,
              subtitle: 'Полное сопровождение',
              popular: true,
              badgeText: 'ВОСТРЕБОВАНО',
              price: 'от ХХХ ₽',
              features: [
                { name: 'Проект + сбор всех согласований', value: '✓' },
                { name: 'Подача и получение распоряжения', value: '✓' },
                { name: 'Акт приёмочной комиссии администрации', value: '✓' }
              ],
              buttonText: 'Рассчитать стоимость',
              buttonHref: '#form'
            },
            {
              title: <>Узаконение через суд</>,
              subtitle: 'Для выполненного ремонта',
              popular: false,
              price: 'от ХХХ ₽',
              features: [
                { name: 'Техническое заключение о безопасности', value: '✓' },
                { name: 'Исковое заявление и представительство в суде', value: '✓' },
                { name: 'Технический план и внесение в ЕГРН', value: '✓' }
              ],
              buttonText: 'Обсудить ситуацию',
              buttonHref: '#form'
            }
          ]}
          ctaTitle="Точную стоимость определим до начала работы"
          ctaSubtitle="Изучим планировку и предложим самый быстрый и экономный законный маршрут оформления."
          ctaButtonText="Получить расчёт стоимости"
          ctaButtonLink="#form"
          disclaimer=""
        />
      </div>

      {/* ═══ 7. FAQ ═══ */}
      <div onClickCapture={() => handleCtaClick('housing_pereplan_faq', 'Задать свой вопрос')}>
        <FAQBlock 
          faqs={faqs} 
          title={<>Частые вопросы по согласованию <br />и узаконению перепланировки</>}
          subtitle="Собрали ответы на главные вопросы собственников жилья в Липецке."
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
              Смежные направления помощи по оформлению и защите прав на недвижимость.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '20px' }}>
            <Link href="/grazhdanam/zhilishchnyj-yurist/zaliv-kvartiry/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <div className="card service-card" style={{ height: '100%', padding: '32px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', borderRadius: '0', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3 }}>
                  Залив квартиры
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Взыскание стоимости восстановительного ремонта после затопления с виновных соседей или УК.
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
                Обсудите узаконение перепланировки квартиры
              </h2>
              
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Кратко опишите, какие изменения планируются или уже выполнены (демонтаж стен, объединение санузла, перенос кухни). Юрист оценит законность и свяжется с вами.
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
                  commentPlaceholder="Например: объединили ванную и туалет, расширили коридор, нужно узаконить для продажи…"
                  subtext="Если вы оставите заявку вечером или в выходной день, мы перезвоним в ближайший рабочий день."
                  hiddenFields={[
                    { name: 'pageId', value: 'CIV-HOUSING-PEREPLAN' },
                    { name: 'pageTitle', value: 'Согласование и узаконение перепланировки в Липецке' },
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
