'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';
import ProcessBlock from '@/components/ProcessBlock';
import PricingBlock from '@/components/PricingBlock';

export default function PerevodKategoriiClient() {
  const [ctaSource, setCtaSource] = useState('land_category_form_direct');
  const [ctaText, setCtaText] = useState('Прямой переход к форме');

  const handleCtaClick = (source: string, text: string) => {
    setCtaSource(source);
    setCtaText(text);
  };

  const faqs = [
    {
      q: 'Чем перевод категории отличается от изменения ВРИ?',
      a: 'Категория меняет общий правовой режим земли; ВРИ определяет допустимый способ использования внутри применимого режима. Процедуры различаются.'
    },
    {
      q: 'Кто принимает решение о переводе?',
      a: 'Компетентный орган зависит от принадлежности земли, исходной и целевой категории и местоположения. Это устанавливается до подачи.'
    },
    {
      q: 'Можно ли перевести сельхозземлю под строительство?',
      a: 'Только при наличии предусмотренных законом оснований и с учётом специальных ограничений. Само намерение построить объект недостаточно.'
    },
    {
      q: 'Нужно ли менять границы населённого пункта?',
      a: 'Для отдельных задач перевод связан с установлением или изменением границ населённого пункта и документами территориального планирования.'
    },
    {
      q: 'Что может стать основанием отказа?',
      a: 'Законодательный запрет или ограничение, несоответствие документам планирования, отрицательное заключение обязательной экспертизы и другие специальные основания.'
    },
    {
      q: 'Гарантирует ли перевод возможность строительства?',
      a: 'Нет. После перевода сохраняется необходимость проверить ВРИ, ПЗЗ, ограничения, технические регламенты и разрешительные процедуры.'
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
        "@id": "https://matilda081133-sketch.github.io/grazhdanam/zemelnyj-yurist/perevod-zemelnogo-uchastka-v-druguyu-kategoriyu/#service",
        "name": "Перевод земельного участка в другую категорию в Липецке",
        "serviceType": "Перевод земель и земельных участков из одной категории в другую",
        "url": "https://matilda081133-sketch.github.io/grazhdanam/zemelnyj-yurist/perevod-zemelnogo-uchastka-v-druguyu-kategoriyu/",
        "description": "Проверим допустимость перевода земельного участка в другую категорию в Липецкой области, подготовим обоснование, ходатайство и сопроводим решение или обжалование.",
        "provider": { "@id": "https://dejure-help.ru/#organization" },
        "areaServed": ["Липецк", "Липецкая область", "Россия"]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://matilda081133-sketch.github.io/grazhdanam/zemelnyj-yurist/perevod-zemelnogo-uchastka-v-druguyu-kategoriyu/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://matilda081133-sketch.github.io/-/" },
          { "@type": "ListItem", "position": 2, "name": "Гражданам", "item": "https://matilda081133-sketch.github.io/grazhdanam/" },
          { "@type": "ListItem", "position": 3, "name": "Земельный юрист", "item": "https://matilda081133-sketch.github.io/grazhdanam/zemelnyj-yurist/" },
          { "@type": "ListItem", "position": 4, "name": "Перевод участка в другую категорию", "item": "https://matilda081133-sketch.github.io/grazhdanam/zemelnyj-yurist/perevod-zemelnogo-uchastka-v-druguyu-kategoriyu/" }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://matilda081133-sketch.github.io/grazhdanam/zemelnyj-yurist/perevod-zemelnogo-uchastka-v-druguyu-kategoriyu/#webpage",
        "url": "https://matilda081133-sketch.github.io/grazhdanam/zemelnyj-yurist/perevod-zemelnogo-uchastka-v-druguyu-kategoriyu/",
        "name": "Перевод земельного участка в другую категорию в Липецке | Де-Юре",
        "description": "Проверим допустимость перевода земельного участка в другую категорию в Липецкой области, подготовим обоснование, ходатайство и сопроводим решение или обжалование.",
        "breadcrumb": { "@id": "https://matilda081133-sketch.github.io/grazhdanam/zemelnyj-yurist/perevod-zemelnogo-uchastka-v-druguyu-kategoriyu/#breadcrumb" },
        "mainEntity": { "@id": "https://matilda081133-sketch.github.io/grazhdanam/zemelnyj-yurist/perevod-zemelnogo-uchastka-v-druguyu-kategoriyu/#service" }
      }
    ]
  };

  const situations = [
    {
      tag: 'СИТУАЦИЯ 01',
      title: <>Включение земли в границы <br />населённого пункта</>,
      desc: 'Нужно проверить документы территориального планирования и применимый порядок изменения границ и категории.'
    },
    {
      tag: 'СИТУАЦИЯ 02',
      title: <>Сельхозземлю хотят использовать <br />для другой цели</>,
      desc: 'Перевод сельскохозяйственных угодий ограничен и возможен только при наличии предусмотренных законом оснований.'
    },
    {
      tag: 'СИТУАЦИЯ 03',
      title: <>Земля нужна для промышленного <br />или инфраструктурного объекта</>,
      desc: 'Требуется определить соответствующую категорию, территориальные документы, ограничения и полномочия органа.'
    },
    {
      tag: 'СИТУАЦИЯ 04',
      title: <>Категория препятствует <br />проекту строительства</>,
      desc: 'Сначала нужно подтвердить, что препятствие действительно в категории, а не в ВРИ, ПЗЗ или иной зоне.'
    },
    {
      tag: 'СИТУАЦИЯ 05',
      title: <>В ЕГРН категория отсутствует <br />или указана спорно</>,
      desc: 'Нужно разграничить перевод, отнесение земли к категории и исправление сведений.'
    },
    {
      tag: 'СИТУАЦИЯ 06',
      title: <>Получен отказ <br />в переводе</>,
      desc: 'Требуется проверить компетенцию, комплект, специальные запреты, документы планирования и мотивировку.'
    }
  ];

  const howHelps = [
    {
      title: <>Анализ исходной <br />и целевой категории</>,
      desc: 'Проверяем ЕГРН, фактический статус, желаемое использование и специальные нормы для конкретных категорий.'
    },
    {
      title: <>Проверка территориальных <br />документов</>,
      desc: 'Изучаем генеральный план, границы населённых пунктов, зоны, ограничения и иные документы планирования.'
    },
    {
      title: <>Определение компетентного <br />органа</>,
      desc: 'Устанавливаем, кто вправе принять решение с учётом собственности, категории и местоположения земли.'
    },
    {
      title: <>Подготовка ходатайства <br />и обоснования</>,
      desc: 'Формируем комплект, обосновываем цель и соответствие документам; координируем необходимые исследования.'
    },
    {
      title: <>Сопровождение рассмотрения</>,
      desc: 'Взаимодействуем с органами, отвечаем на запросы и контролируем соблюдение процедуры.'
    },
    {
      title: <>Обжалование и ЕГРН</>,
      desc: 'Анализируем отказ, выбираем повторное обращение или суд и сопровождаем внесение сведений после положительного акта.'
    }
  ];

  const documents = [
    {
      title: 'Сведения об участке',
      desc: 'Кадастровый номер, выписка ЕГРН, площадь, исходная категория, права и ограничения.'
    },
    {
      title: 'Описание цели перевода',
      desc: 'Требуемая категория, планируемый объект или деятельность, параметры и обоснование необходимости.'
    },
    {
      title: 'Территориальные документы',
      desc: 'Генеральный план, схемы территориального планирования, сведения о границах населённого пункта, зонах и регламентах.'
    },
    {
      title: 'Решения и исследования',
      desc: 'Полученные отказы, заключения, материалы экологической экспертизы при необходимости и переписка с органами.'
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
      <div onClickCapture={() => handleCtaClick('land_category_hero', 'Проверить допустимость перевода')}>
        <MilitaryHero 
          breadcrumbs={
            <>
              <a href="/" style={{ color: 'var(--color-primary)' }}>Главная</a> <span style={{ margin: '0 8px' }}>/</span> 
              <a href="/grazhdanam/" style={{ color: 'var(--color-primary)' }}>Гражданам</a> <span style={{ margin: '0 8px' }}>/</span> 
              <a href="/grazhdanam/zemelnyj-yurist/" style={{ color: 'var(--color-primary)' }}>Земельный юрист</a> <span style={{ margin: '0 8px' }}>/</span> 
              <span style={{ color: 'var(--color-text-main)' }}>Перевод участка в другую категорию</span>
            </>
          }
          superTitle="Земельное право • Липецк и Липецкая область"
          title={
            <span style={{ display: 'block' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Перевод земельного</span>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>участка в другую</span>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>категорию в Липецке</span>
            </span>
          }
          subtitle={
            <span style={{ display: 'inline-block', maxWidth: '580px', textWrap: 'balance' }}>
              Проверим исходную и требуемую категорию, ограничения, документы территориального планирования и компетентный орган — до подготовки затратного ходатайства.
            </span>
          }
          primaryCtaText="Проверить допустимость перевода"
          primaryCtaLink="#form"
          primaryCtaAnalytics="land_perevod_kategorii_consultation_click"
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
                        <span style={{ fontSize: '4px', fontWeight: 'bold', color: 'rgba(23,50,77,0.4)', fontFamily: 'var(--font-serif)' }}>ПЕРЕВОД № 48-06</span>
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
                          АКТ О ПЕРЕВОДЕ<br/>
                          КАТЕГОРИИ ЗЕМЕЛЬ
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
                          <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Ходатайство заявителя:</div>
                          <div style={{ width: '70px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '8px' }}></div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                          <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Правительство области:</div>
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
                          <span style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)', letterSpacing: '0.05em' }}>ПЕРЕВОД КАТЕГОРИИ</span>
                          <span style={{ fontSize: '5px', color: 'var(--color-primary)' }}>Земли населённых пунктов</span>
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
                          <text x="32" y="52" fill="#10273B" fontSize="6.5" fontWeight="bold">КАТЕГОРИЯ ЗЕМЕЛЬ ИЗМЕНЕНА</text>
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
                          <div style={{ fontSize: '9.5px', color: 'rgba(23,50,77,0.75)', fontFamily: 'var(--font-sans)' }}>Перевод категорий • Липецк</div>
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
            { text: 'Перевод возможен только по предусмотренному законом маршруту' },
            { text: 'Проверяем специальные ограничения для исходной категории' },
            { text: 'Не подменяем перевод изменением ВРИ или ПЗЗ' }
          ]}
        />
      </div>

      {/* ═══ 2. СИТУАЦИИ КЛИЕНТА ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Когда требуется изменить <br />категорию земель
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              <span style={{ display: 'inline-block' }}>Категория задаёт общий правовой режим земли.</span> <br />
              <span style={{ display: 'inline-block' }}>Для каждой исходной и целевой категории действуют свои условия, компетенция и основания отказа.</span>
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
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Каноничный водяной знак */}
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
                  marginBottom: '12px',
                  background: 'rgba(193, 160, 102, 0.1)',
                  padding: '4px 10px',
                  alignSelf: 'flex-start',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {sit.tag}
                </div>

                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', fontWeight: 600, color: 'var(--color-deep-blue)', lineHeight: 1.4, margin: '0 0 14px 0', position: 'relative', zIndex: 1 }}>
                  {sit.title}
                </h3>

                <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0, position: 'relative', zIndex: 1 }}>
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
                Перевод не равен разрешению на строительство
              </h3>
              <p style={{ margin: '0', fontSize: '15px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5, maxWidth: '640px' }}>
                Даже после изменения категории проект должен соответствовать ВРИ, градостроительным регламентам, ограничениям и иным требованиям. Перевод решает только один уровень правового режима.
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <a 
                href="#form" 
                className="btn white-btn-custom" 
                style={{ display: 'inline-block', textAlign: 'center', fontSize: '15px' }}
                onClick={() => handleCtaClick('land_category_situations', 'Проверить исходные данные')}
              >
                Проверить исходные данные
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
              Как юрист сопровождает <br />перевод категории земли
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Работа начинается с проверки юридической реализуемости, потому что для ряда земель перевод запрещён или допускается только в исключительных случаях.
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
              Какие документы нужны <br />для проверки перевода
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Первичная проверка возможна по кадастровому номеру и описанию проекта, но для ходатайства понадобится расширенный комплект.
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
                Сведения об участке <br />и описания проекта
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}><polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Сведения об участке</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Кадастровый номер, выписка ЕГРН, площадь, исходная категория, права и ограничения.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}><polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Описание цели перевода</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Требуемая категория, планируемый объект или деятельность, параметры и обоснование необходимости.</span>
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
                Территориальные документы <br />и материалы исследований
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}><polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Территориальные документы</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Генеральный план, схемы территориального планирования, сведения о границах населённого пункта, зонах и регламентах.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}><polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Решения и исследования</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Полученные отказы, заключения, материалы экологической экспертизы при необходимости и переписка с органами.</span>
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
            Если части документов нет, всё равно можно обратиться. Юрист определит, какие сведения необходимо запросить <br />и требуется ли градостроительный анализ схемы территориального планирования.
          </div>
        </div>
      </section>

      {/* ═══ 5. КАК ПРОХОДИТ РАБОТА ═══ */}
      <ProcessBlock 
        title="Как проходит работа"
        subtitle="Пять шагов для перевода земельного участка в другую категорию."
        steps={[
          { num: '01', title: 'Определяем цель и требуемую категорию', desc: 'Проверяем, действительно ли для проекта нужен перевод, а не иной земельный или градостроительный инструмент.' },
          { num: '02', title: 'Проверяем допустимость', desc: 'Анализируем специальные ограничения, документы планирования, права и характеристики участка.' },
          { num: '03', title: 'Определяем орган и комплект', desc: 'Устанавливаем компетенцию и формируем перечень обязательных документов и исследований.' },
          { num: '04', title: 'Подаём и сопровождаем ходатайство', desc: 'Готовим обоснование, взаимодействуем с органами и отвечаем на запросы.' },
          { num: '05', title: 'Оформляем решение или обжалуем отказ', desc: 'Контролируем акт и ЕГРН либо выбираем допустимый способ защиты.' }
        ]}
      />

      {/* ═══ 6. СТОИМОСТЬ ═══ */}
      <div onClickCapture={(e) => {
        const target = e.target as HTMLElement;
        const btn = target.closest('a, button');
        if (btn) {
          const text = btn.textContent?.trim() || '';
          if (text.includes('Уточнить стоимость')) {
            handleCtaClick('land_category_pricing', 'Уточнить стоимость');
          }
        }
      }}>
        <PricingBlock 
          title="Стоимость юридической помощи"
          subtitle="Стоимость зависит от исходной и целевой категории, площади, документов планирования, необходимости исследований и наличия отказа."
          tiers={[
            {
              title: <>Правовая<br />оценка</>,
              subtitle: 'Проверка допустимости',
              popular: false,
              price: 'от ХХХ ₽',
              features: [
                { name: 'Анализ категории и цели', value: '✓' },
                { name: 'Проверка специальных ограничений', value: '✓' },
                { name: 'Изучение документов планирования', value: '✓' },
                { name: 'Предварительный маршрут', value: '✓' }
              ],
              buttonText: 'Уточнить стоимость',
              buttonHref: '#form'
            },
            {
              title: <>Административное<br />сопровождение</>,
              subtitle: 'Ходатайство о переводе',
              popular: true,
              badgeText: 'ВОСТРЕБОВАНО',
              price: 'от ХХХ ₽',
              features: [
                { name: 'Подготовка комплекта документов', value: '✓' },
                { name: 'Юридическое обоснование перевода', value: '✓' },
                { name: 'Взаимодействие с уполномоченным органом', value: '✓' },
                { name: 'Контроль принятия акта', value: '✓' }
              ],
              buttonText: 'Уточнить стоимость',
              buttonHref: '#form'
            },
            {
              title: <>Сложный проект<br />или отказ</>,
              subtitle: 'Дополнительные процедуры',
              popular: false,
              price: 'от ХХХ ₽',
              features: [
                { name: 'Координация исследований', value: '✓' },
                { name: 'Работа с территориальными документами', value: '✓' },
                { name: 'Досудебная жалоба или иск', value: '✓' },
                { name: 'Представительство в органах и суде', value: '✓' }
              ],
              buttonText: 'Уточнить стоимость',
              buttonHref: '#form'
            }
          ]}
          />
      </div>

      {/* ═══ 7. ОТВЕТЫ НА ЧАСТЫЕ ВОПРОСЫ ═══ */}
      <div onClickCapture={() => handleCtaClick('land_category_faq', 'Задать свой вопрос')}>
        <FAQBlock 
          faqs={faqs} 
          title={<>Частые вопросы <br />о переводе земли <br />в другую категорию</>}
          subtitle="Единого порядка для всех земель нет: закон устанавливает общую процедуру и специальные правила для каждой категории."
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
              Если препятствие относится к допустимому использованию, праву на землю или стоимости, перевод категории может быть ненужен.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '32px' }}>
            <a href="/grazhdanam/zemelnyj-yurist/izmenenie-vri-zemelnogo-uchastka/" style={{ textDecoration: 'none' }}>
              <div className="card service-card" style={{ padding: '28px', background: '#FFFFFF', borderTop: '3px solid var(--color-primary)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>
                  Изменение вида разрешённого использования
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5, flexGrow: 1 }}>
                  Проверка допустимой деятельности внутри существующего режима земли.
                </p>
                <div style={{ color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, marginTop: '16px' }}>Подробнее →</div>
              </div>
            </a>

            <a href="/grazhdanam/zemelnyj-yurist/oformlenie-prav-na-zemelnyj-uchastok/" style={{ textDecoration: 'none' }}>
              <div className="card service-card" style={{ padding: '28px', background: '#FFFFFF', borderTop: '3px solid var(--color-primary)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>
                  Оформление прав на участок
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5, flexGrow: 1 }}>
                  Помощь, если сначала нужно получить или зарегистрировать право.
                </p>
                <div style={{ color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, marginTop: '16px' }}>Подробнее →</div>
              </div>
            </a>

            <a href="/grazhdanam/zemelnyj-yurist/osparivanie-kadastrovoj-stoimosti/" style={{ textDecoration: 'none' }}>
              <div className="card service-card" style={{ padding: '28px', background: '#FFFFFF', borderTop: '3px solid var(--color-primary)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>
                  Оспаривание кадастровой стоимости
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5, flexGrow: 1 }}>
                  Отдельная процедура, если цель связана преимущественно с платежами.
                </p>
                <div style={{ color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, marginTop: '16px' }}>Подробнее →</div>
              </div>
            </a>
          </div>

          <div>
            <a href="/grazhdanam/zemelnyj-yurist/" style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '15px', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
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
                Проверьте допустимость перевода земли
              </h2>
              
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Укажите кадастровый номер, текущую категорию и для чего планируется использовать участок. Юрист определит, какие документы нужны для первичной оценки.
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
                  commentPlaceholder="Участок относится к сельхозземлям; планируется включение в границы населённого пункта…"
                  hiddenFields={[
                    { name: 'pageId', value: 'CIV-05-07' },
                    { name: 'pageTitle', value: 'Перевод земельного участка в другую категорию в Липецке' },
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
