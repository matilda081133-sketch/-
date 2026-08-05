'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';
import ProcessBlock from '@/components/ProcessBlock';
import PricingBlock from '@/components/PricingBlock';

export default function RazdelUchastkaClient() {
  const [ctaSource, setCtaSource] = useState('land_split_form_direct');
  const [ctaText, setCtaText] = useState('Прямой переход к форме');

  const handleCtaClick = (source: string, text: string) => {
    setCtaSource(source);
    setCtaText(text);
  };

  const faqs = [
    {
      q: 'Можно ли разделить любой участок?',
      a: 'Нет. Проверяются минимальные и максимальные размеры, конфигурация, доступ, ограничения и возможность использования объектов на каждом образуемом участке.'
    },
    {
      q: 'Чем раздел отличается от выдела доли?',
      a: 'При разделе исходный объект прекращается и возникают новые. Выдел прекращает долю выделяющегося участника, а исходный участок может сохраняться для остальных.'
    },
    {
      q: 'Можно ли разделить землю без согласия совладельца?',
      a: 'При отсутствии соглашения вопрос может разрешаться судом, но только если предложенный вариант соответствует закону и технически реализуем.'
    },
    {
      q: 'Что происходит с домом на участке?',
      a: 'Расположение и права на дом могут определять допустимый вариант земли. Иногда сначала или одновременно решается вопрос о разделе объекта либо порядке пользования.'
    },
    {
      q: 'Кто готовит вариант раздела?',
      a: 'Кадастровый инженер готовит кадастровые материалы; при споре может потребоваться судебная экспертиза. Юрист формирует правовую конструкцию и требования.'
    },
    {
      q: 'Что делать, если раздел невозможен?',
      a: 'Можно оценить определение порядка пользования, соглашение между совладельцами или иной способ распоряжения общей собственностью.'
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
        "logo": "https://matilda081133-sketch.github.io/-/images/logo_dark.png"
      },
      {
        "@type": "Service",
        "@id": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/razdel-zemelnogo-uchastka/#service",
        "name": "Раздел земельного участка в Липецке",
        "serviceType": "Раздел земельного участка, выдел доли и определение порядка пользования",
        "url": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/razdel-zemelnogo-uchastka/",
        "description": "Проверим юридическую и техническую делимость земельного участка в Липецке, подготовим соглашение или судебное дело и сопроводим кадастровый учёт.",
        "provider": { "@id": "https://dejure-help.ru/#organization" },
        "areaServed": ["Липецк", "Липецкая область", "Россия"]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/razdel-zemelnogo-uchastka/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://matilda081133-sketch.github.io/-/" },
          { "@type": "ListItem", "position": 2, "name": "Гражданам", "item": "https://matilda081133-sketch.github.io/-/grazhdanam/" },
          { "@type": "ListItem", "position": 3, "name": "Земельный юрист", "item": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/" },
          { "@type": "ListItem", "position": 4, "name": "Раздел земельного участка", "item": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/razdel-zemelnogo-uchastka/" }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/razdel-zemelnogo-uchastka/#webpage",
        "url": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/razdel-zemelnogo-uchastka/",
        "name": "Раздел земельного участка в Липецке | Де-Юре",
        "description": "Проверим юридическую и техническую делимость земельного участка в Липецке, подготовим соглашение или судебное дело и сопроводим кадастровый учёт.",
        "breadcrumb": { "@id": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/razdel-zemelnogo-uchastka/#breadcrumb" },
        "mainEntity": { "@id": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/razdel-zemelnogo-uchastka/#service" }
      }
    ]
  };

  const situations = [
    {
      tag: 'СИТУАЦИЯ 01',
      title: <>Совладельцы хотят оформить <br />отдельные участки</>,
      desc: 'Есть договорённость о варианте раздела, но нужно проверить его допустимость и зарегистрировать новые объекты.'
    },
    {
      tag: 'СИТУАЦИЯ 02',
      title: <>Совладельцы не могут <br />договориться</>,
      desc: 'Стороны спорят о площади, конфигурации, подъезде или о том, кому должна достаться конкретная часть.'
    },
    {
      tag: 'СИТУАЦИЯ 03',
      title: <>Участок получен <br />по наследству</>,
      desc: 'Наследники хотят прекратить общую собственность и получить самостоятельные участки.'
    },
    {
      tag: 'СИТУАЦИЯ 04',
      title: <>Раздел связан <br />с домом</>,
      desc: 'У дома несколько владельцев, планируется раздел здания или уже определены его части, и нужно решить судьбу земли.'
    },
    {
      tag: 'СИТУАЦИЯ 05',
      title: <>Росреестр отказал в учёте <br />образованных участков</>,
      desc: 'Необходимо проверить межевой план, требования к образуемым объектам и причину приостановления или отказа.'
    },
    {
      tag: 'СИТУАЦИЯ 06',
      title: <>Раздел невозможен, но нужно <br />закрепить пользование</>,
      desc: 'Требуется определить, кто и какой частью общего участка пользуется, не прекращая общую собственность.'
    }
  ];

  const howHelps = [
    {
      title: <>Проверка делимости</>,
      desc: 'Анализируем площадь, территориальную зону, предельные размеры, конфигурацию, доступ, ограничения и расположение объектов.'
    },
    {
      title: <>Выбор правовой <br />конструкции</>,
      desc: 'Определяем, нужен ли раздел, выдел доли, соглашение о порядке пользования или иной способ решения.'
    },
    {
      title: <>Подготовка соглашения</>,
      desc: 'Фиксируем вариант раздела, права сторон, распределение расходов и действия по кадастровому учёту.'
    },
    {
      title: <>Работа с кадастровым <br />инженером</>,
      desc: 'Согласуем исходные данные и правовые требования к межевому плану или вариантам раздела.'
    },
    {
      title: <>Судебное дело</>,
      desc: 'Готовим иск или возражения, представляем интересы и работаем с экспертизой, если соглашения нет.'
    },
    {
      title: <>Оформление новых <br />объектов</>,
      desc: 'После соглашения или решения сопровождаем кадастровый учёт и регистрацию прав в согласованном объёме.'
    }
  ];

  const documents = [
    {
      title: 'Документы на участок',
      desc: 'Выписка ЕГРН, договор, свидетельство, наследственные документы и сведения о долях.'
    },
    {
      title: 'Документы на дом и другие объекты',
      desc: 'Выписки, технические планы, решения о разделе или реконструкции — если объекты влияют на вариант.'
    },
    {
      title: 'Кадастровые и градостроительные материалы',
      desc: 'Межевой план, схемы, ПЗЗ, градостроительный план, сведения об ограничениях и подъездах.'
    },
    {
      title: 'Переписка и решения',
      desc: 'Проект соглашения, возражения совладельцев, приостановление Росреестра, заключения и судебные документы.'
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
      <div onClickCapture={() => handleCtaClick('land_split_hero', 'Проверить возможность раздела')}>
        <MilitaryHero 
          breadcrumbs={
            <>
              <a href="/-/" style={{ color: 'var(--color-primary)' }}>Главная</a> <span style={{ margin: '0 8px' }}>/</span> 
              <a href="/-/grazhdanam/" style={{ color: 'var(--color-primary)' }}>Гражданам</a> <span style={{ margin: '0 8px' }}>/</span> 
              <a href="/-/grazhdanam/zemelnyj-yurist/" style={{ color: 'var(--color-primary)' }}>Земельный юрист</a> <span style={{ margin: '0 8px' }}>/</span> 
              <span style={{ color: 'var(--color-text-main)' }}>Раздел земельного участка</span>
            </>
          }
          superTitle="Земельное право • Липецк и Липецкая область"
          title={<><span style={{ display: 'inline-block' }}>Раздел земельного</span> <br /><span style={{ display: 'inline-block' }}>участка в Липецке</span></>}
          subtitle={
            <span style={{ display: 'inline-block', maxWidth: '580px', textWrap: 'balance' }}>
              Проверим площадь, конфигурацию, подъезд, объекты и градостроительные требования, чтобы определить: возможен реальный раздел, выдел доли или только порядок пользования.
            </span>
          }
          primaryCtaText="Проверить возможность раздела"
          primaryCtaLink="#form"
          primaryCtaAnalytics="land_razdel_uchastka_consultation_click"
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
                        <span style={{ fontSize: '4px', fontWeight: 'bold', color: 'rgba(23,50,77,0.4)', fontFamily: 'var(--font-serif)' }}>РАЗДЕЛ № 48-02</span>
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
                          РЕШЕНИЕ О РАЗДЕЛЕ<br/>
                          ЗЕМЕЛЬНОГО УЧАСТКА
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
                          <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Исходный участок:</div>
                          <div style={{ width: '70px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '8px' }}></div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                          <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Образуемые участки:</div>
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
                        <img src="/-/images/logo_dark.png" alt="Де-Юре" style={{ width: '55px', height: 'auto', opacity: 0.9 }} />
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', alignItems: 'flex-end' }}>
                          <span style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)', letterSpacing: '0.05em' }}>РАЗДЕЛ ЗЕМЛИ</span>
                          <span style={{ fontSize: '5px', color: 'var(--color-primary)' }}>Схема образования участков</span>
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

                          {/* Образуемый Участок 1 */}
                          <polygon points="15,15 95,15 95,85 15,85" fill="rgba(193, 160, 102, 0.15)" stroke="#C1A066" strokeWidth="1.5" />
                          <text x="28" y="53" fill="#10273B" fontSize="6.5" fontWeight="bold">УЧАСТОК №1</text>

                          {/* Образуемый Участок 2 */}
                          <polygon points="105,15 185,15 185,85 105,85" fill="rgba(23, 50, 77, 0.08)" stroke="#10273B" strokeWidth="1.5" />
                          <text x="118" y="53" fill="#10273B" fontSize="6.5" fontWeight="bold">УЧАСТОК №2</text>
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
                          <div style={{ fontSize: '9.5px', color: 'rgba(23,50,77,0.75)', fontFamily: 'var(--font-sans)' }}>Кадастровый раздел • Липецк</div>
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
            { text: 'Сначала проверяем принципиальную делимость' },
            { text: 'Учитываем дом, подъезд и градостроительные нормы' },
            { text: 'Подключаем кадастрового инженера по согласованному маршруту' }
          ]}
        />
      </div>

      {/* ═══ 2. СИТУАЦИИ КЛИЕНТА ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Когда требуется раздел участка <br />или порядок пользования
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Наличие долей не означает, что каждому совладельцу можно выделить самостоятельный участок. Результат зависит от характеристик земли и расположенных на ней объектов.
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
                Раздел и порядок пользования — не одно и то же
              </h3>
              <p style={{ margin: '0', fontSize: '15px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5, maxWidth: '640px' }}>
                При разделе исходный участок прекращает существование, а новые участки становятся самостоятельными объектами. Порядок пользования распределяет фактическое использование общей земли, но не создаёт отдельных участков.
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <a 
                href="#form" 
                className="btn white-btn-custom" 
                style={{ display: 'inline-block', textAlign: 'center', fontSize: '15px' }}
                onClick={() => handleCtaClick('land_split_situations', 'Обсудить вариант раздела')}
              >
                Обсудить вариант раздела
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
              Как юрист помогает <br />разделить участок
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Юрист координирует правовую часть с кадастровыми и, <br />при необходимости, строительными исследованиями.
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
              Какие документы понадобятся <br />для проверки раздела
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Первичная оценка начинается с документов на участок и объекты, а не с готового межевого плана.
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
                Правоустанавливающие <br />и кадастровые документы
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(193, 160, 102, 0.15)', border: '1px solid var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Правоустанавливающий документ на землю</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Свидетельство, договор, решение о предоставлении или наследственный документ.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(193, 160, 102, 0.15)', border: '1px solid var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Сведения ЕГРН и план участка</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Выписка ЕГРН, межевой план, схема расположения или чертёж фактических границ.</span>
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
                Объекты, соглашения <br />и полученные отказы
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(193, 160, 102, 0.15)', border: '1px solid var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Документы на здания и сооружения</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Выписки ЕГРН на дома или промышленные объекты, если раздел связан с их использованием.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(193, 160, 102, 0.15)', border: '1px solid var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Предварительные соглашения и отказы</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Проект соглашения сособственников, отказ Росреестра или уведомление администрации, если обращения уже были.</span>
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
            Если части документов нет, всё равно можно обратиться. Юрист определит, какие сведения необходимо запросить и требуется ли привлечение кадастрового инженера.
          </div>
        </div>
      </section>

      {/* ═══ 5. КАК ПРОХОДИТ РАБОТА ═══ */}
      <ProcessBlock 
        title="Как проходит работа"
        subtitle="Пять последовательных шагов для юридического раздела земельного участка."
        ctaTitle=""
        steps={[
          { num: '01', title: 'Уточняем цель и позиции собственников', desc: 'Определяем состав участников, доли, наличие договорённости и связь с домом или другими объектами.' },
          { num: '02', title: 'Проверяем делимость', desc: 'Анализируем ЕГРН, ПЗЗ, размеры, конфигурацию, доступ, ограничения и объекты.' },
          { num: '03', title: 'Разрабатываем допустимый вариант', desc: 'Совместно с кадастровым инженером формируем вариант раздела или порядок пользования.' },
          { num: '04', title: 'Оформляем соглашение или ведём спор', desc: 'Готовим документы для добровольного оформления либо судебные требования и доказательства.' },
          { num: '05', title: 'Регистрируем результат', desc: 'Сопровождаем кадастровый учёт и права на образованные участки либо исполнение установленного порядка.' }
        ]}
      />

      {/* ═══ 6. СТОИМОСТЬ ═══ */}
      <div onClickCapture={(e) => {
        const target = e.target as HTMLElement;
        const btn = target.closest('a, button');
        if (btn) {
          const text = btn.textContent?.trim() || '';
          if (text.includes('Уточнить стоимость')) {
            handleCtaClick('land_split_pricing', 'Уточнить стоимость');
          }
        }
      }}>
        <PricingBlock 
          title="Стоимость юридической помощи"
          subtitle="Стоимость зависит от числа собственников и вариантов, наличия дома, необходимости кадастровых работ, экспертизы и суда."
          tiers={[
            {
              title: <>Консультация<br />и проверка</>,
              subtitle: 'Оценка делимости',
              popular: false,
              price: 'от ХХХ ₽',
              features: [
                { name: 'Анализ прав и долей', value: '✓' },
                { name: 'Проверка ЕГРН и ПЗЗ', value: '✓' },
                { name: 'Оценка ограничений', value: '✓' },
                { name: 'Выбор правовой конструкции', value: '✓' }
              ],
              buttonText: 'Уточнить стоимость',
              buttonHref: '#form'
            },
            {
              title: <>Раздел по<br />соглашению</>,
              subtitle: 'Документы и кадастр',
              popular: true,
              badgeText: 'ВОСТРЕБОВАНО',
              price: 'от ХХХ ₽',
              features: [
                { name: 'Проект соглашения совладельцев', value: '✓' },
                { name: 'Координация с инженером', value: '✓' },
                { name: 'Проверка межевого плана', value: '✓' },
                { name: 'Сопровождение регистрации', value: '✓' }
              ],
              buttonText: 'Уточнить стоимость',
              buttonHref: '#form'
            },
            {
              title: <>Судебный<br />раздел</>,
              subtitle: 'Ведение спора в суде',
              popular: false,
              price: 'от ХХХ ₽',
              features: [
                { name: 'Иск или возражения совладельцев', value: '✓' },
                { name: 'Формирование вариантов раздела', value: '✓' },
                { name: 'Работа с судебной экспертизой', value: '✓' },
                { name: 'Представительство в суде', value: '✓' }
              ],
              buttonText: 'Уточнить стоимость',
              buttonHref: '#form'
            }
          ]}
          ctaTitle=""
        />
      </div>

      {/* ═══ 7. ОТВЕТЫ НА ЧАСТЫЕ ВОПРОСЫ ═══ */}
      <div onClickCapture={() => handleCtaClick('land_split_faq', 'Задать свой вопрос')}>
        <FAQBlock 
          faqs={faqs} 
          title={<>Частые вопросы <br />о разделе <br />земельного участка</>}
          subtitle="Главный вопрос — не размер доли сам по себе, а возможность создать участки, пригодные для разрешённого использования."
          ctaText="Задать свой вопрос"
          ctaLink="#form"
        />
      </div>

      {/* ═══ 8. СВЯЗАННЫЕ УСЛУГИ ═══ */}
      <section className="section" style={{ background: 'var(--gradient-cream)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '700px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: '32px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 12px 0' }}>
              Связанные услуги
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
              Смежная проблема может относиться к границам, оформлению права или доступу к участку.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '32px' }}>
            <a href="/-/grazhdanam/zemelnyj-yurist/spory-o-granicah-zemelnogo-uchastka/" style={{ textDecoration: 'none' }}>
              <div className="card service-card" style={{ padding: '28px', background: '#FFFFFF', borderTop: '3px solid var(--color-primary)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>
                  Споры о границах участка
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5, flexGrow: 1 }}>
                  Помощь при конфликте с соседним участком и наложении координат.
                </p>
                <div style={{ color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, marginTop: '16px' }}>Подробнее →</div>
              </div>
            </a>

            <a href="/-/grazhdanam/zemelnyj-yurist/oformlenie-prav-na-zemelnyj-uchastok/" style={{ textDecoration: 'none' }}>
              <div className="card service-card" style={{ padding: '28px', background: '#FFFFFF', borderTop: '3px solid var(--color-primary)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>
                  Оформление прав на участок
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5, flexGrow: 1 }}>
                  Помощь, если до раздела необходимо зарегистрировать или подтвердить право.
                </p>
                <div style={{ color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, marginTop: '16px' }}>Подробнее →</div>
              </div>
            </a>

            <a href="/-/grazhdanam/zemelnyj-yurist/ustanovlenie-servituta/" style={{ textDecoration: 'none' }}>
              <div className="card service-card" style={{ padding: '28px', background: '#FFFFFF', borderTop: '3px solid var(--color-primary)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>
                  Установление сервитута
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5, flexGrow: 1 }}>
                  Организация прохода или проезда, если доступ к образуемому участку зависит от чужой земли.
                </p>
                <div style={{ color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, marginTop: '16px' }}>Подробнее →</div>
              </div>
            </a>
          </div>

          <div>
            <a href="/-/grazhdanam/zemelnyj-yurist/" style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '15px', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
              Все услуги по земельным вопросам → Земельный юрист
            </a>
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
                Проверьте, можно ли разделить участок
              </h2>
              
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Укажите кадастровый номер, количество собственников, наличие дома и желаемый вариант. Юрист уточнит документы и согласует консультацию.
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
                  commentPlaceholder="У участка два собственника, хотим оформить отдельные части, на земле стоит дом…"
                  hiddenFields={[
                    { name: 'pageId', value: 'CIV-05-03' },
                    { name: 'pageTitle', value: 'Раздел земельного участка в Липецке' },
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
