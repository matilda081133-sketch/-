'use client';

import Link from 'next/link';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';
import ProcessBlock from '@/components/ProcessBlock';
import PricingBlock from '@/components/PricingBlock';

export default function OsparivanieKadastrovojStoimostiClient() {
  const [ctaSource, setCtaSource] = useState('cadastral_value_form_direct');
  const [ctaText, setCtaText] = useState('Прямой переход к форме');

  const handleCtaClick = (source: string, text: string) => {
    setCtaSource(source);
    setCtaText(text);
  };

  const faqs = [
    {
      q: 'Как понять, окупится ли процедура?',
      a: 'Нужно сопоставить возможное уменьшение платежей за применимый период со стоимостью отчёта, юридической работы, госпошлины и возможной экспертизы.'
    },
    {
      q: 'Можно ли сразу обратиться в суд?',
      a: 'В Липецкой области действует порядок установления стоимости в размере рыночной через бюджетное учреждение. Судебный маршрут рассматривается после решения учреждения и с учётом предмета спора.'
    },
    {
      q: 'Кто определяет рыночную стоимость?',
      a: 'Независимый оценщик готовит отчёт на требуемую дату. Юрист определяет правовой маршрут и проверяет комплект, но не подменяет оценщика.'
    },
    {
      q: 'Повлияет ли новая стоимость на налог или аренду?',
      a: 'Возможное влияние зависит от вида платежа, даты применения и специальных правил. Это проверяется отдельно до начала процедуры.'
    },
    {
      q: 'Что делать, если в характеристиках объекта ошибка?',
      a: 'Сначала определить характер ошибки. Для неё может действовать иной порядок, чем для установления стоимости в размере рыночной.'
    },
    {
      q: 'Что делать после отказа?',
      a: 'Проверить мотивировку, отчёт, соблюдение процедуры и срок обращения. После этого решается вопрос о новом заявлении или судебном обжаловании.'
    }
  ];

  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://dejure-help.ru/#organization",
        "name": "Юридическая компания «Де-Юре»",
        "url": "https://dejure-help.ru/",
        "logo": "https://matilda081133-sketch.github.io/images/logo_dark.png"
      },
      {
        "@type": "Service",
        "@id": "https://matilda081133-sketch.github.io/grazhdanam/zemelnyj-yurist/osparivanie-kadastrovoj-stoimosti/#service",
        "name": "Оспаривание кадастровой стоимости в Липецке",
        "serviceType": "Пересмотр и снижение кадастровой стоимости",
        "url": "https://matilda081133-sketch.github.io/grazhdanam/zemelnyj-yurist/osparivanie-kadastrovoj-stoimosti/",
        "description": "Оценим экономический смысл пересмотра кадастровой стоимости в Липецкой области, организуем рыночную оценку и сопроводим внесудебную и судебную процедуру.",
        "provider": { "@id": "https://dejure-help.ru/#organization" },
        "areaServed": ["Липецк", "Липецкая область", "Россия"]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://matilda081133-sketch.github.io/grazhdanam/zemelnyj-yurist/osparivanie-kadastrovoj-stoimosti/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://matilda081133-sketch.github.io/-/" },
          { "@type": "ListItem", "position": 2, "name": "Гражданам", "item": "https://matilda081133-sketch.github.io/grazhdanam/" },
          { "@type": "ListItem", "position": 3, "name": "Земельный юрист", "item": "https://matilda081133-sketch.github.io/grazhdanam/zemelnyj-yurist/" },
          { "@type": "ListItem", "position": 4, "name": "Оспаривание кадастровой стоимости", "item": "https://matilda081133-sketch.github.io/grazhdanam/zemelnyj-yurist/osparivanie-kadastrovoj-stoimosti/" }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://matilda081133-sketch.github.io/grazhdanam/zemelnyj-yurist/osparivanie-kadastrovoj-stoimosti/#webpage",
        "url": "https://matilda081133-sketch.github.io/grazhdanam/zemelnyj-yurist/osparivanie-kadastrovoj-stoimosti/",
        "name": "Оспаривание кадастровой стоимости в Липецке | Де-Юре",
        "description": "Оценим экономический смысл пересмотра кадастровой стоимости в Липецкой области, организуем рыночную оценку и сопроводим внесудебную и судебную процедуру.",
        "breadcrumb": { "@id": "https://matilda081133-sketch.github.io/grazhdanam/zemelnyj-yurist/osparivanie-kadastrovoj-stoimosti/#breadcrumb" },
        "mainEntity": { "@id": "https://matilda081133-sketch.github.io/grazhdanam/zemelnyj-yurist/osparivanie-kadastrovoj-stoimosti/#service" }
      }
    ]
  };

  const situations = [
    {
      tag: 'СИТУАЦИЯ 01',
      title: <>Существенно вырос <br />земельный налог</>,
      desc: 'Нужно проверить актуальную стоимость, налоговую базу, период и возможный эффект установления рыночной стоимости.'
    },
    {
      tag: 'СИТУАЦИЯ 02',
      title: <>Арендная плата зависит <br />от кадастровой стоимости</>,
      desc: 'Для публичной земли требуется проверить формулу договора и влияние новая величины на платежи.'
    },
    {
      tag: 'СИТУАЦИЯ 03',
      title: <>Кадастровая стоимость <br />влияет на выкуп</>,
      desc: 'Перед затратами на оценку нужно подтвердить зависимость выкупной цены и сравнить расходы с возможным эффектом.'
    },
    {
      tag: 'СИТУАЦИЯ 04',
      title: <>Стоимость заметно <br />выше рыночной</>,
      desc: 'Разница должна подтверждаться отчётом на установленную дату, а не приблизительной оценкой или ценой объявления.'
    },
    {
      tag: 'СИТУАЦИЯ 05',
      title: <>В характеристиках объекта <br />есть ошибка</>,
      desc: 'Нужно определить, применяется ли процедура исправления ошибки или установления стоимости в размере рыночной.'
    },
    {
      tag: 'СИТУАЦИЯ 06',
      title: <>Получен отказ <br />бюджетного учреждения</>,
      desc: 'Требуется проверить отчёт, основания отказа, процедуру и перспективу обжалования решения.'
    }
  ];

  const howHelps = [
    {
      title: <>Предварительная экономическая <br />оценка</>,
      desc: 'Проверяем объект, текущую стоимость, вид платежа, период и ориентир рыночной величины.'
    },
    {
      title: <>Проверка правового <br />режима</>,
      desc: 'Определяем заявителя, нужную дату оценки, применимый порядок и возможные ограничения перерасчёта.'
    },
    {
      title: <>Организация отчёта <br />оценщика</>,
      desc: 'Формируем задание, координируем оценщика и проверяем юридическую комплектность материалов.'
    },
    {
      title: <>Обращение в бюджетное <br />учреждение</>,
      desc: 'Готовим заявление и комплект по действующему в регионе порядку, сопровождаем рассмотрение.'
    },
    {
      title: <>Оспаривание отказа</>,
      desc: 'Анализируем решение учреждения, готовим административный иск и работаем с судебной экспертизой при необходимости.'
    },
    {
      title: <>Контроль результата</>,
      desc: 'Сопровождаем внесение сведений и отдельно проверяем действия по конкретному налогу, аренде или выкупу в согласованном объёме.'
    }
  ];

  const documents = [
    {
      title: 'Сведения об объекте',
      desc: 'Кадастровый номер, выписка ЕГРН, назначение, площадь и характеристики.'
    },
    {
      title: 'Документы о праве или аренде',
      desc: 'Выписка, договор аренды публичной земли, документы о выкупе и статус заявителя.'
    },
    {
      title: 'Данные о платеже',
      desc: 'Налоговые уведомления, расчёт аренды, выкупной цены или иной платёж, зависящий от стоимости.'
    },
    {
      title: 'Оценочные и процедурные материалы',
      desc: 'Отчёт оценщика, уведомление о стоимости, заявление, решение бюджетного учреждения или судебные документы.'
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
      <div onClickCapture={() => handleCtaClick('cadastral_value_hero', 'Оценить целесообразность')}>
        <MilitaryHero 
          breadcrumbs={
            <>
              <a href="/" style={{ color: 'var(--color-primary)' }}>Главная</a> <span style={{ margin: '0 8px' }}>/</span> 
              <a href="/grazhdanam/" style={{ color: 'var(--color-primary)' }}>Гражданам</a> <span style={{ margin: '0 8px' }}>/</span> 
              <a href="/grazhdanam/zemelnyj-yurist/" style={{ color: 'var(--color-primary)' }}>Земельный юрист</a> <span style={{ margin: '0 8px' }}>/</span> 
              <span style={{ color: 'var(--color-text-main)' }}>Оспаривание кадастровой стоимости</span>
            </>
          }
          superTitle="Земельное право • Липецк и Липецкая область"
          title={
            <span style={{ display: 'block' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Оспаривание</span>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>кадастровой стоимости</span>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>в Липецке</span>
            </span>
          }
          subtitle={
            <span style={{ display: 'inline-block', maxWidth: '580px', textWrap: 'balance' }}>
              Сначала сопоставим потенциальную экономию со стоимостью оценки и юридической работы, затем определим актуальный внесудебный и при необходимости судебный маршрут.
            </span>
          }
          primaryCtaText="Оценить целесообразность"
          primaryCtaLink="#form"
          primaryCtaAnalytics="land_kadastrovaya_stoimost_consultation_click"
          primaryCtaSubtext="Перезвоним вам в течение 15 минут в рабочее время"
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
                      <div style={{ position: 'absolute', top: '25px', left: '25px', width: '75px', height: '25px', border: '1.5px solid rgba(23, 50, 77, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-5deg)' }}>
                        <span style={{ fontSize: '4px', fontWeight: 'bold', color: 'rgba(23,50,77,0.4)', fontFamily: 'var(--font-serif)' }}>ОЦЕНКА № 48-04</span>
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
                          ОТЧЁТ ОБ ОЦЕНКЕ<br/>
                          РЫНОЧНОЙ СТОИМОСТИ
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
                          <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Заявитель / Налогоплательщик:</div>
                          <div style={{ width: '70px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '8px' }}></div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                          <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Оценочная компания:</div>
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
                          <span style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)', letterSpacing: '0.05em' }}>КАДАСТРОВАЯ СТОИМОСТЬ</span>
                          <span style={{ fontSize: '5px', color: 'var(--color-primary)' }}>Расчёт налогооблагаемой базы</span>
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
                          <line x1="0" y1="33" x2="200" y2="33" stroke="rgba(23,50,77,0.06)" strokeDasharray="2 2" />
                          <line x1="0" y1="66" x2="200" y2="66" stroke="rgba(23,50,77,0.06)" strokeDasharray="2 2" />
                          <line x1="66" y1="0" x2="66" y2="100" stroke="rgba(23,50,77,0.06)" strokeDasharray="2 2" />
                          <line x1="133" y1="0" x2="133" y2="100" stroke="rgba(23,50,77,0.06)" strokeDasharray="2 2" />

                          <polygon points="20,15 180,15 180,85 20,85" fill="rgba(193, 160, 102, 0.15)" stroke="#C1A066" strokeWidth="1.5" />
                          <text x="30" y="52" fill="#10273B" fontSize="6.5" fontWeight="bold">РЫНОЧНАЯ СТОИМОСТЬ ОПРЕДЕЛЕНА</text>
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
                          <div style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)' }}>ЮК «ДЕ-ЮРЕ»</div>
                          <div style={{ fontSize: '9.5px', color: 'rgba(23,50,77,0.75)', fontFamily: 'var(--font-sans)' }}>Снижение налога / аренды</div>
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
            { text: 'Начинаем с экономического расчёта' },
            { text: 'Отчёт готовит независимый оценщик' },
            { text: 'Не обещаем процент снижения до анализа объекта и даты оценки' }
          ]}
        />
      </div>

      {/* ═══ 2. СИТУАЦИИ КЛИЕНТА ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Когда проверяют <br />кадастровую стоимость
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Высокая цифра в ЕГРН сама по себе не означает, что процедуру стоит начинать. Важно понять влияние на конкретный платёж и период возможного применения результата.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '40px' }}>
            {situations.map((sit, i) => (
              <div key={i} className="hover-lift" style={{ 
                padding: '36px 30px', 
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-primary)',
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{ 
                  fontSize: '12px', 
                  fontWeight: 700, 
                  color: 'var(--color-gold)', 
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '12px',
                  background: 'rgba(193, 160, 102, 0.1)',
                  padding: '4px 10px',
                  alignSelf: 'flex-start'
                }}>
                  {sit.tag}
                </div>

                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', fontWeight: 600, color: 'var(--color-deep-blue)', lineHeight: 1.4, margin: '0 0 14px 0' }}>
                  {sit.title}
                </h3>

                <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {sit.desc}
                </p>
              </div>
            ))}
          </div>

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
                Снижение должно окупаться
              </h3>
              <p style={{ margin: '0', fontSize: '15px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5, maxWidth: '640px' }}>
                Сопоставляются ожидаемое уменьшение платежей, оставшийся период применения стоимости, цена отчёта, юридическая работа и возможная экспертиза. Универсального процента или порога нет.
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <a 
                href="#form" 
                className="btn white-btn-custom" 
                style={{ display: 'inline-block', textAlign: 'center', fontSize: '15px' }}
                onClick={() => handleCtaClick('cadastral_value_situations', 'Рассчитать возможный эффект')}
              >
                Рассчитать возможный эффект
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. КАК ПОМОГАЕТ ЮРИСТ ═══ */}
      <section className="section bg-cream" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '700px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Как юрист сопровождает <br />пересмотр кадастровой стоимости
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Юрист отвечает за правовой маршрут и доказательства, а рыночную стоимость определяет оценщик.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', position: 'relative' }}>
            {howHelps.map((item, i) => (
              <div key={i} className="hover-lift" style={{ 
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
                  0{i + 1}
                </div>

                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '8px 0 14px 0', lineHeight: 1.35 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4. ДОКУМЕНТЫ ДЛЯ ПЕРВИЧНОЙ ПРОВЕРКИ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Какие данные нужны <br />для предварительной оценки
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Начать можно с кадастрового номера и вида платежа; для решения о запуске процедуры потребуется больше данных.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '28px', marginBottom: '32px' }}>
            {/* Карточка 1 */}
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
                Сведения об объекте <br />и правах на недвижимость
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}><polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Сведения об объекте</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Кадастровый номер, выписка ЕГРН, назначение, площадь и основные характеристики.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}><polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Документы о праве или аренде</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Выписка ЕГРН, договор аренды публичной земли, документы о выкупе и подтверждение статуса заявителя.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Карточка 2 */}
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
                Данные о платеже <br />и процедуры оспаривания
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}><polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Данные о платеже</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Налоговые уведомления, расчёт аренды, выкупной цены или иной платёж, зависящий от стоимости.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}><polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Оценочные и процедурные материалы</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Отчёт оценщика, уведомление о стоимости, заявление, решение бюджетного учреждения или судебные документы.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div style={{
            background: 'var(--color-white)',
            padding: '20px 28px',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-gold)',
            boxShadow: '0 4px 16px rgba(23, 50, 77, 0.05)',
            fontSize: '15px',
            color: 'var(--color-deep-blue)',
            fontWeight: 500,
            lineHeight: 1.6
          }}>
            Если части документов нет, всё равно можно обратиться. Юрист определит, какие сведения необходимо запросить <br />и требуется ли привлечение независимого оценщика.
          </div>
        </div>
      </section>

      {/* ═══ 5. КАК ПРОХОДИТ РАБОТА ═══ */}
      <ProcessBlock 
        title="Как проходит работа"
        subtitle="Пять шагов для пересмотра кадастровой стоимости."
        steps={[
          { num: '01', title: 'Получаем данные об объекте и платеже', desc: 'Уточняем кадастровый номер, текущую стоимость, право, вид и размер платежа.' },
          { num: '02', title: 'Оцениваем целесообразность', desc: 'Сопоставляем возможный эффект, период и все предполагаемые расходы.' },
          { num: '03', title: 'Организуем рыночную оценку', desc: 'Определяем дату и требования к отчёту, координируем независимого оценщика.' },
          { num: '04', title: 'Проходим внесудебную процедуру', desc: 'Подаём заявление в уполномоченное бюджетное учреждение и сопровождаем рассмотрение.' },
          { num: '05', title: 'Защищаем результат', desc: 'При необходимости обжалуем решение, работаем с экспертизой и контролируем внесение сведений.' }
        ]}
      />

      {/* ═══ 6. СТОИМОСТЬ ═══ */}
      <div onClickCapture={(e) => {
        const target = e.target as HTMLElement;
        const btn = target.closest('a, button');
        if (btn) {
          const text = btn.textContent?.trim() || '';
          if (text.includes('Уточнить стоимость')) {
            handleCtaClick('cadastral_value_pricing', 'Уточнить стоимость');
          }
        }
      }}>
        <PricingBlock 
          title="Стоимость юридической помощи"
          subtitle="Стоимость зависит от объекта, отчёта оценщика, стадии процедуры, необходимости суда и экспертизы."
          tiers={[
            {
              title: <>Предварительная<br />оценка</>,
              subtitle: 'Расчёт целесообразности',
              popular: false,
              price: 'от ХХХ ₽',
              features: [
                { name: 'Проверка стоимости и платежа', value: '✓' },
                { name: 'Оценка периода применения эффекта', value: '✓' },
                { name: 'Предварительная рыночная вилка', value: '✓' },
                { name: 'Обоснованное решение о запуске', value: '✓' }
              ],
              buttonText: 'Уточнить стоимость',
              buttonHref: '#form'
            },
            {
              title: <>Внесудебная<br />процедура</>,
              subtitle: 'Оценка и заявление в ОБУ',
              popular: true,
              badgeText: 'ВОСТРЕБОВАНО',
              price: 'от ХХХ ₽',
              features: [
                { name: 'Координация работы оценщика', value: '✓' },
                { name: 'Проверка отчёта об оценке', value: '✓' },
                { name: 'Подготовка заявления по ст. 22.1', value: '✓' },
                { name: 'Сопровождение рассмотрения', value: '✓' }
              ],
              buttonText: 'Уточнить стоимость',
              buttonHref: '#form'
            },
            {
              title: <>Судебное<br />обжалование</>,
              subtitle: 'Защита при отказе ОБУ',
              popular: false,
              price: 'от ХХХ ₽',
              features: [
                { name: 'Анализ решения учреждения', value: '✓' },
                { name: 'Административное исковое заявление', value: '✓' },
                { name: 'Работа с судебной экспертизой', value: '✓' },
                { name: 'Представительство в суде', value: '✓' }
              ],
              buttonText: 'Уточнить стоимость',
              buttonHref: '#form'
            }
          ]}
          />
      </div>

      {/* ═══ 7. ОТВЕТЫ НА ЧАСТЫЕ ВОПРОСЫ ═══ */}
      <div onClickCapture={() => handleCtaClick('cadastral_value_faq', 'Задать свой вопрос')}>
        <FAQBlock 
          faqs={faqs} 
          title={<>Частые вопросы <br />об оспаривании <br />кадастровой стоимости</>}
          subtitle="Результат оценивается не только по новой цифре, но и по фактическому влиянию на платежи и периоду её применения."
          ctaText="Задать свой вопрос"
          ctaLink="#form"
        />
      </div>

      {/* ═══ 8. СВЯЗАННЫЕ УСЛУГИ ═══ */}
            {/* ═══ БЛОК: СВЯЗАННЫЕ УСЛУГИ ═══ */}
      <section className="section bg-cream" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '700px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Связанные услуги
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              <span style={{ display: 'inline-block' }}>Смежные направления помощи</span> <br /><span style={{ display: 'inline-block' }}>по оформлению прав, межеванию</span> <br /><span style={{ display: 'inline-block' }}>и разрешению земельных споров.</span>
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
          
          <div className="grid grid-2" style={{ gap: '24px' }}>
            <Link href="/grazhdanam/zemelnyj-yurist/spory-o-granicah-zemelnogo-uchastka/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
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
                  <span style={{ display: 'inline-block' }}>Споры о границах</span> <br /><span style={{ display: 'inline-block' }}>земельного участка</span>
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Поможем разобраться с наложением границ, ошибками межевания, самозахватом земли и разногласиями с соседями.
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
            <Link href="/grazhdanam/zemelnyj-yurist/oformlenie-prav-na-zemelnyj-uchastok/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
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
                  <span style={{ display: 'inline-block' }}>Оформление прав</span> <br /><span style={{ display: 'inline-block' }}>на земельный участок</span>
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Проверим основание права и сопроводим оформление используемого, унаследованного или предоставленного участка.
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
            <Link href="/grazhdanam/zemelnyj-yurist/izmenenie-vri-zemelnogo-uchastka/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
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
                  <span style={{ display: 'inline-block' }}>Изменение ВРИ</span> <br /><span style={{ display: 'inline-block' }}>земельного участка</span>
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Изменим вид разрешённого использования участка для строительства, ведения бизнеса или снижения платежей.
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
            <Link href="/grazhdanam/zemelnyj-yurist/perevod-zemelnogo-uchastka-v-druguyu-kategoriyu/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
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
                  <span style={{ display: 'inline-block' }}>Перевод участка</span> <br /><span style={{ display: 'inline-block' }}>в другую категорию</span>
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Подготовим ходатайство и обоснуем перевод земель сельхозназначения, населённых пунктов или промышленности.
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
            <Link href="/grazhdanam/zemelnyj-yurist/" className="all-services-link" style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '16px', textDecoration: 'underline', textUnderlineOffset: '4px', display: 'inline-flex', alignItems: 'center', gap: '6px', transition: 'color 0.2s ease' }}>
              Смотреть все услуги земельного юриста →
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
                Оцените целесообразность пересмотра стоимости
              </h2>
              
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Укажите кадастровый номер, вид и примерный размер платежа, а также есть ли уже отчёт или решение учреждения. Юрист уточнит данные для расчёта.
              </p>
              
              <div style={{ marginTop: '32px' }}>
                <div style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <span>
                    Перезвоним в течение<br />
                    15 минут в рабочее время
                  </span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
              <div style={{ background: 'var(--gradient-cream)', padding: '40px', borderRadius: '0', boxShadow: '0 8px 24px rgba(0,0,0,0.15)', width: '100%', border: '1px solid rgba(0,0,0,0.06)' }}>
                <ContactsForm 
                  title="Написать нам" 
                  subtitle=""
                  buttonText="Получить консультацию"
                  commentPlaceholder="Кадастровая стоимость участка влияет на аренду; ежегодный платёж составляет…"
                  hiddenFields={[
                    { name: 'pageId', value: 'CIV-05-05' },
                    { name: 'pageTitle', value: 'Оспаривание кадастровой стоимости в Липецке' },
                    { name: 'practice', value: 'Земельное право' },
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
