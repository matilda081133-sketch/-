'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';
import ProcessBlock from '@/components/ProcessBlock';
import PricingBlock from '@/components/PricingBlock';

export default function IzmenenieVriClient() {
  const [ctaSource, setCtaSource] = useState('vri_change_form_direct');
  const [ctaText, setCtaText] = useState('Прямой переход к форме');

  const handleCtaClick = (source: string, text: string) => {
    setCtaSource(source);
    setCtaText(text);
  };

  const faqs = [
    {
      q: 'Сохранился ли ВРИ, установленный до 1 марта 2026 года?',
      a: 'Да, ранее установленные виды остаются действительными с учётом переходных правил закона № 295-ФЗ.'
    },
    {
      q: 'Можно ли самому выбрать основной ВРИ?',
      a: 'Возможность зависит от применимого регламента, правового статуса участка и правообладателя, ограничений и новых правил Земельного кодекса.'
    },
    {
      q: 'Когда нужен условно разрешённый ВРИ?',
      a: 'Когда желаемый вид предусмотрен соответствующим регламентом как условно разрешённый. Для него применяется специальная процедура.'
    },
    {
      q: 'Что делать, если нужного ВРИ нет в ПЗЗ?',
      a: 'Оценивается возможность изменения ПЗЗ или иной маршрут. Это более длительная процедура, и положительный результат не гарантирован.'
    },
    {
      q: 'Всегда ли нужно менять категорию земли?',
      a: 'Нет. Категория и ВРИ регулируют разные характеристики. Сначала устанавливается, что именно препятствует планируемому использованию.'
    },
    {
      q: 'Можно ли оспорить отказ?',
      a: 'Да, если нарушены полномочия, процедура или неправильно применены нормы. Перспектива определяется после анализа мотивировки и документов.'
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
        "@id": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/izmenenie-vri-zemelnogo-uchastka/#service",
        "name": "Изменение вида разрешённого использования земельного участка в Липецке",
        "serviceType": "Изменение ВРИ и правового режима использования земли",
        "url": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/izmenenie-vri-zemelnogo-uchastka/",
        "description": "Проверим территориальную зону, регламент и ограничения, определим порядок изменения ВРИ земельного участка в Липецке и сопроводим процедуру или обжалование.",
        "provider": { "@id": "https://dejure-help.ru/#organization" },
        "areaServed": ["Липецк", "Липецкая область", "Россия"]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/izmenenie-vri-zemelnogo-uchastka/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://matilda081133-sketch.github.io/-/" },
          { "@type": "ListItem", "position": 2, "name": "Гражданам", "item": "https://matilda081133-sketch.github.io/-/grazhdanam/" },
          { "@type": "ListItem", "position": 3, "name": "Земельный юрист", "item": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/" },
          { "@type": "ListItem", "position": 4, "name": "Изменение ВРИ земельного участка", "item": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/izmenenie-vri-zemelnogo-uchastka/" }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/izmenenie-vri-zemelnogo-uchastka/#webpage",
        "url": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/izmenenie-vri-zemelnogo-uchastka/",
        "name": "Изменение ВРИ земельного участка в Липецке | Де-Юре",
        "description": "Проверим территориальную зону, регламент и ограничения, определим порядок изменения ВРИ земельного участка в Липецке и сопроводим процедуру или обжалование.",
        "breadcrumb": { "@id": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/izmenenie-vri-zemelnogo-uchastka/#breadcrumb" },
        "mainEntity": { "@id": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/izmenenie-vri-zemelnogo-uchastka/#service" }
      }
    ]
  };

  const situations = [
    {
      tag: 'СИТУАЦИЯ 01',
      title: <>Нужно выбрать <br />другой основной ВРИ</>,
      desc: 'Желаемый вид предусмотрен градостроительным регламентом, но его необходимо определить для участка и внести в ЕГРН.'
    },
    {
      tag: 'СИТУАЦИЯ 02',
      title: <>Нужен вспомогательный <br />вид использования</>,
      desc: 'Требуется проверить связь с основным видом, допустимость и порядок отражения сведений.'
    },
    {
      tag: 'СИТУАЦИЯ 03',
      title: <>Нужен условно <br />разрешённый ВРИ</>,
      desc: 'Желаемая деятельность предусмотрена как условная и требует специальной процедуры и решения уполномоченного органа.'
    },
    {
      tag: 'СИТУАЦИЯ 04',
      title: <>Нужного вида нет <br />в территориальной зоне</>,
      desc: 'Необходимо оценить изменение ПЗЗ, иное размещение проекта или отказ от выбранного участка.'
    },
    {
      tag: 'СИТУАЦИЯ 05',
      title: <>В ЕГРН указана <br />старая формулировка</>,
      desc: 'Нужно определить, требуется ли только приведение сведений к классификатору или меняется разрешённое использование по существу.'
    },
    {
      tag: 'СИТУАЦИЯ 06',
      title: <>Получен отказ <br />в изменении ВРИ</>,
      desc: 'Требуется проверить статус заявителя, регламент, ограничения, комплект и мотивировку отказа.'
    }
  ];

  const howHelps = [
    {
      title: <>Аудит статуса <br />участка</>,
      desc: 'Проверяем категорию, текущие ВРИ, территориальную зону, регламент, ограничения и права заявителя.'
    },
    {
      title: <>Проверка цели <br />использования</>,
      desc: 'Сопоставляем планируемый объект или деятельность с классификатором и допустимыми видами.'
    },
    {
      title: <>Выбор процедуры</>,
      desc: 'Разводим выбор основного или вспомогательного вида, условно разрешённый ВРИ, приведение сведений и изменение ПЗЗ.'
    },
    {
      title: <>Подготовка обоснования <br />и документов</>,
      desc: 'Формируем заявление, описание проекта и материалы, требуемые для выбранного маршрута.'
    },
    {
      title: <>Сопровождение рассмотрения</>,
      desc: 'Взаимодействуем с органом, участвуем в публичных процедурах при необходимости и контролируем решение.'
    },
    {
      title: 'Обжалование и ЕГРН',
      desc: 'Проверяем отказ, готовим жалобу или суд и сопровождаем внесение результата в реестр.'
    }
  ];

  const documents = [
    {
      title: 'Сведения об участке',
      desc: 'Кадастровый номер, выписка ЕГРН, категория, площадь, права или договор аренды.'
    },
    {
      title: 'Описание планируемого использования',
      desc: 'Какой объект или деятельность планируются, ориентировочные параметры и функциональное назначение.'
    },
    {
      title: 'Градостроительные материалы',
      desc: 'ГПЗУ, выписки из ПЗЗ, сведения о территориальной зоне, ограничениях и зонах с особыми условиями.'
    },
    {
      title: 'Решения и переписка',
      desc: 'Полученный отказ, заявления, ответы органов, материалы публичных обсуждений и прежние изменения сведений.'
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
      <div onClickCapture={() => handleCtaClick('vri_change_hero', 'Проверить возможный ВРИ')}>
        <MilitaryHero 
          breadcrumbs={
            <>
              <a href="/-/" style={{ color: 'var(--color-primary)' }}>Главная</a> <span style={{ margin: '0 8px' }}>/</span> 
              <a href="/-/grazhdanam/" style={{ color: 'var(--color-primary)' }}>Гражданам</a> <span style={{ margin: '0 8px' }}>/</span> 
              <a href="/-/grazhdanam/zemelnyj-yurist/" style={{ color: 'var(--color-primary)' }}>Земельный юрист</a> <span style={{ margin: '0 8px' }}>/</span> 
              <span style={{ color: 'var(--color-text-main)' }}>Изменение ВРИ земельного участка</span>
            </>
          }
          superTitle="Земельное право • Липецк и Липецкая область"
          title={<>Изменение вида разрешённого <br />использования земельного <br />участка в Липецке</>}
          subtitle={
            <span style={{ display: 'inline-block', maxWidth: '580px', textWrap: 'balance' }}>
              Проверим территориальную зону, действующий ВРИ, регламент и ограничения, чтобы определить: можно ли выбрать нужный вид, требуется разрешение или сначала нужно менять ПЗЗ.
            </span>
          }
          primaryCtaText="Проверить возможный ВРИ"
          primaryCtaLink="#form"
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
                        <span style={{ fontSize: '4px', fontWeight: 'bold', color: 'rgba(23,50,77,0.4)', fontFamily: 'var(--font-serif)' }}>ВРИ № 48-05</span>
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
                          РЕШЕНИЕ ОБ ИЗМЕНЕНИИ<br/>
                          ВИДА ИСПОЛЬЗОВАНИЯ
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
                          <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Территориальная зона:</div>
                          <div style={{ width: '70px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '8px' }}></div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                          <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Росреестр / Администрация:</div>
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
                          <span style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)', letterSpacing: '0.05em' }}>СМЕНА ВРИ ЗЕМЛИ</span>
                          <span style={{ fontSize: '5px', color: 'var(--color-primary)' }}>Градостроительный регламент</span>
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
                          <text x="36" y="52" fill="#10273B" fontSize="6.5" fontWeight="bold">ВРИ УСПЕШНО ИЗМЕНЁН В ЕГРН</text>
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
                          <div style={{ fontSize: '9.5px', color: 'rgba(23,50,77,0.75)', fontFamily: 'var(--font-sans)' }}>Разрешённое использование • Липецк</div>
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
            { text: 'Работаем по правилам, действующим с 1 марта 2026 года' },
            { text: 'Сначала проверяем зону и ограничения' },
            { text: 'Не обещаем изменение, если нужного вида нет в регламенте' }
          ]}
        />
      </div>

      {/* ═══ 2. СИТУАЦИИ КЛИЕНТА ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Когда требуется изменить <br />вид использования участка
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Словом «сменить назначение» пользователи называют разные задачи. Для каждой действует свой маршрут и набор оснований.
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
                Категория и ВРИ — разные характеристики
              </h3>
              <p style={{ margin: '0', fontSize: '15px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5, maxWidth: '640px' }}>
                ВРИ определяет допустимую деятельность на участке в рамках установленного режима. Если препятствие связано именно с категорией земель, применяется отдельная процедура перевода.
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <a 
                href="#form" 
                className="btn white-btn-custom" 
                style={{ display: 'inline-block', textAlign: 'center', fontSize: '15px' }}
                onClick={() => handleCtaClick('vri_change_situations', 'Проверить статус участка')}
              >
                Проверить статус участка
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
              Как юрист помогает <br />изменить ВРИ участка
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Сначала определяется не заявление, а правовой источник допустимых видов использования для конкретной земли.
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
              Что понадобится <br />для проверки ВРИ
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Во многих случаях начать можно с кадастрового номера и краткого описания планируемого использования.
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
                Документы на объект <br />и правовые сведения
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(193, 160, 102, 0.15)', border: '1px solid var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Выписка ЕГРН или номер участка</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Сведения об участке, категории, текущих ВРИ и зарегистрированных правах.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(193, 160, 102, 0.15)', border: '1px solid var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Правоустанавливающие документы</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Договор аренды публичного участка, документы о праве собственности или бессрочном пользовании.</span>
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
                Градостроительные материалы <br />и описания проекта
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(193, 160, 102, 0.15)', border: '1px solid var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Описание планируемого использования</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Назначение объекта, параметры строительства, вид деятельности или бизнес-проект.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(193, 160, 102, 0.15)', border: '1px solid var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Процедурные и градостроительные данные</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>ГПЗУ, выкопировка из ПЗЗ, имеющийся отказ органа или решения публичных слушаний.</span>
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
            Если части документов нет, всё равно можно обратиться. Юрист определит, какие сведения необходимо запросить <br />и требуется ли градостроительный анализ ПЗЗ.
          </div>
        </div>
      </section>

      {/* ═══ 5. КАК ПРОХОДИТ РАБОТА ═══ */}
      <ProcessBlock 
        title="Как проходит работа"
        subtitle="Пять шагов для изменения вида разрешённого использования."
        ctaTitle=""
        steps={[
          { num: '01', title: 'Фиксируем цель использования', desc: 'Уточняем планируемый объект или деятельность и параметры проекта.' },
          { num: '02', title: 'Проверяем правовой режим', desc: 'Анализируем ЕГРН, территориальную зону, регламент, ограничения и действующие ВРИ.' },
          { num: '03', title: 'Определяем процедуру', desc: 'Выбираем применимый маршрут: основной, вспомогательный, условный вид, приведение сведений или изменение ПЗЗ.' },
          { num: '04', title: 'Готовим и сопровождаем обращение', desc: 'Формируем документы и участвуем в административных и публичных процедурах.' },
          { num: '05', title: 'Получаем и оформляем результат', desc: 'Проверяем решение, сопровождаем ЕГРН либо обжалуем отказ при наличии оснований.' }
        ]}
      />

      {/* ═══ 6. СТОИМОСТЬ ═══ */}
      <div onClickCapture={(e) => {
        const target = e.target as HTMLElement;
        const btn = target.closest('a, button');
        if (btn) {
          const text = btn.textContent?.trim() || '';
          if (text.includes('Уточнить стоимость')) {
            handleCtaClick('vri_change_pricing', 'Уточнить стоимость');
          }
        }
      }}>
        <PricingBlock 
          title="Стоимость юридической помощи"
          subtitle="Стоимость зависит от выбранного маршрута: простой выбор допустимого вида, условно разрешённый ВРИ, изменение ПЗЗ или обжалование."
          tiers={[
            {
              title: <>Правовой<br />аудит</>,
              subtitle: 'Проверка ВРИ и зоны',
              popular: false,
              price: 'от ХХХ ₽',
              features: [
                { name: 'Анализ сведений ЕГРН и ПЗЗ', value: '✓' },
                { name: 'Проверка ограничений и регламента', value: '✓' },
                { name: 'Сопоставление цели с классификатором', value: '✓' },
                { name: 'Выбор применимого маршрута', value: '✓' }
              ],
              buttonText: 'Уточнить стоимость',
              buttonHref: '#form'
            },
            {
              title: <>Административная<br />процедура</>,
              subtitle: 'Заявление и сопровождение',
              popular: true,
              badgeText: 'ВОСТРЕБОВАНО',
              price: 'от ХХХ ₽',
              features: [
                { name: 'Подготовка комплекта документов', value: '✓' },
                { name: 'Юридическое обоснование использования', value: '✓' },
                { name: 'Взаимодействие с уполномоченным органом', value: '✓' },
                { name: 'Контроль принятия решения', value: '✓' }
              ],
              buttonText: 'Уточнить стоимость',
              buttonHref: '#form'
            },
            {
              title: <>Сложный<br />маршрут</>,
              subtitle: 'ПЗЗ или судебный спор',
              popular: false,
              price: 'от ХХХ ₽',
              features: [
                { name: 'Анализ перспектив изменения ПЗЗ', value: '✓' },
                { name: 'Подготовка предложений или жалобы', value: '✓' },
                { name: 'Участие в публичной процедуре', value: '✓' },
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
      <div onClickCapture={() => handleCtaClick('vri_change_faq', 'Задать свой вопрос')}>
        <FAQBlock 
          faqs={faqs} 
          title={<>Частые вопросы <br />об изменении вида <br />разрешённого использования</>}
          subtitle="С 1 марта 2026 года порядок регулируется новыми нормами Земельного кодекса; ранее установленные виды продолжают действовать."
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
              Если препятствие связано не с допустимой деятельностью, а с категорией, правом или стоимостью, нужна отдельная услуга.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '32px' }}>
            <a href="/-/grazhdanam/zemelnyj-yurist/perevod-zemelnogo-uchastka-v-druguyu-kategoriyu/" style={{ textDecoration: 'none' }}>
              <div className="card service-card" style={{ padding: '28px', background: '#FFFFFF', borderTop: '3px solid var(--color-primary)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>
                  Перевод участка в другую категорию
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5, flexGrow: 1 }}>
                  Отдельная процедура изменения общего правового режима земли.
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
                  Помощь, если до изменения ВРИ нужно зарегистрировать право или получить землю.
                </p>
                <div style={{ color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, marginTop: '16px' }}>Подробнее →</div>
              </div>
            </a>

            <a href="/-/grazhdanam/zemelnyj-yurist/osparivanie-kadastrovoj-stoimosti/" style={{ textDecoration: 'none' }}>
              <div className="card service-card" style={{ padding: '28px', background: '#FFFFFF', borderTop: '3px solid var(--color-primary)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>
                  Оспаривание кадастровой стоимости
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5, flexGrow: 1 }}>
                  Отдельная экономико-оценочная процедура, если основной вопрос связан с платежом.
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
                Проверьте, какой ВРИ нужен участку
              </h2>
              
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Укажите кадастровый номер и как вы хотите использовать участок. Юрист проверит, какие сведения нужны для определения применимого маршрута.
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
                  commentPlaceholder="Хочу использовать участок под магазин; сейчас в ЕГРН указано ИЖС…"
                  hiddenFields={[
                    { name: 'pageId', value: 'CIV-05-06' },
                    { name: 'pageTitle', value: 'Изменение вида разрешённого использования земельного участка в Липецке' },
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
