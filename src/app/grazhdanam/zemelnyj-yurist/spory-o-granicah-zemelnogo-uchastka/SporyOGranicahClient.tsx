'use client';

import Link from 'next/link';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';
import ProcessBlock from '@/components/ProcessBlock';
import CasesBlock from '@/components/CasesBlock';
import PricingBlock from '@/components/PricingBlock';
import CtaCard from '@/components/CtaCard';

export default function SporyOGranicahClient() {
  const [ctaSource, setCtaSource] = useState('land_boundary_form_direct');
  const [ctaText, setCtaText] = useState('Прямой переход к форме');

  const handleCtaClick = (source: string, text: string) => {
    setCtaSource(source);
    setCtaText(text);
  };

  const faqs = [
    {
      q: 'Что делать, если сосед занял часть моего участка?',
      a: 'Сначала необходимо проверить документы на оба участка, сведения ЕГРН и фактическое расположение границы. Если нарушение подтвердится, можно потребовать освободить занятую территорию и перенести ограждение или объект. При отсутствии соглашения спор разрешается в суде.'
    },
    {
      q: 'Что делать при наложении границ земельных участков?',
      a: 'Нужно определить причину наложения: ошибку в межевом плане, сведениях ЕГРН или исходных документах. После этого можно подготовить исправленные кадастровые документы, согласовать изменения с собственником соседнего участка либо обратиться в суд.'
    },
    {
      q: 'Что делать, если сосед отказывается согласовывать границы?',
      a: 'Сам отказ не всегда останавливает кадастровые работы, но необходимо проверить причины возражений и соблюдение процедуры извещения. Если разногласия относятся к местоположению границы и урегулировать их не удалось, вопрос может потребовать судебного разрешения.'
    },
    {
      q: 'Что важнее: сведения ЕГРН или фактически установленный забор?',
      a: 'Универсального ответа нет. Суд сопоставляет сведения ЕГРН, документы об образовании участка, материалы межевания, согласование границ и фактическое пользование землёй. Само по себе длительное существование забора не всегда подтверждает юридическую границу.'
    },
    {
      q: 'Можно ли исправить реестровую ошибку без суда?',
      a: 'Да, если ошибка подтверждена необходимыми документами и её исправление не вызывает спора о правах и границах. Если сосед возражает или изменение затрагивает его участок, может потребоваться судебное решение.'
    },
    {
      q: 'Нужны ли кадастровый инженер и землеустроительная экспертиза?',
      a: 'Кадастровый инженер выполняет измерения и готовит кадастровые документы. Землеустроительная экспертиза может потребоваться, если спор рассматривается судом и для установления границы необходимы специальные знания. Юрист определяет правовую позицию, требования, состав доказательств и вопросы, которые следует поставить перед экспертом. Необходимость каждого специалиста устанавливается после проверки документов.'
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
        "logo": "https://matilda081133-sketch.github.io/images/logo_dark.png",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Липецк",
          "addressRegion": "Липецкая область",
          "addressCountry": "RU"
        }
      },
      {
        "@type": "LegalService",
        "@id": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/spory-o-granicah-zemelnogo-uchastka/#legalservice",
        "name": "Юрист по спорам о границах земельного участка в Липецке",
        "serviceType": "Юридическая помощь по спорам о границах земельного участка",
        "url": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/spory-o-granicah-zemelnogo-uchastka/",
        "description": "Юридическая помощь при наложении границ, реестровой ошибке, захвате части участка и споре с соседом в Липецке.",
        "provider": { "@id": "https://dejure-help.ru/#organization" },
        "areaServed": ["Липецк", "Липецкая область", "Россия"]
      },
      {
        "@type": "Service",
        "@id": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/spory-o-granicah-zemelnogo-uchastka/#service",
        "name": "Споры о границах земельного участка",
        "serviceType": "Защита прав на земельный участок и определение границ",
        "provider": { "@id": "https://dejure-help.ru/#organization" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/spory-o-granicah-zemelnogo-uchastka/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://matilda081133-sketch.github.io/-/" },
          { "@type": "ListItem", "position": 2, "name": "Гражданам", "item": "https://matilda081133-sketch.github.io/-/grazhdanam/" },
          { "@type": "ListItem", "position": 3, "name": "Земельный юрист", "item": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/" },
          { "@type": "ListItem", "position": 4, "name": "Споры о границах участка", "item": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/spory-o-granicah-zemelnogo-uchastka/" }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/spory-o-granicah-zemelnogo-uchastka/#webpage",
        "url": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/spory-o-granicah-zemelnogo-uchastka/",
        "name": "Юрист по спорам о границах земельного участка в Липецке | Де-Юре",
        "description": "Юридическая помощь при наложении границ, реестровой ошибке, захвате части участка и споре с соседом в Липецке.",
        "breadcrumb": { "@id": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/spory-o-granicah-zemelnogo-uchastka/#breadcrumb" },
        "mainEntity": { "@id": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/spory-o-granicah-zemelnogo-uchastka/#legalservice" }
      }
    ]
  };

  const showCases = true;

  const situations = [
    {
      tag: 'Захват участка',
      title: <>Сосед перенёс забор <br />или занял часть участка</>,
      desc: 'Фактическая граница изменилась, часть земли оказалась за чужим ограждением либо на спорной территории размещён объект.'
    },
    {
      tag: 'Пересечение координат',
      title: <>Границы участков <br />накладываются</>,
      desc: 'Координаты в ЕГРН пересекаются, из-за чего невозможно уточнить границы, оформить участок или провести сделку.'
    },
    {
      tag: 'Ответный отказ',
      title: <>Сосед отказывается <br />согласовывать границу</>,
      desc: 'Смежный собственник не подписывает акт согласования или заявляет возражения против предложенного варианта межевания.'
    },
    {
      tag: 'Ошибки ЕГРН',
      title: <>В ЕГРН обнаружена <br />реестровая ошибка</>,
      desc: 'Сведения о координатах не соответствуют исходным документам, фактическому расположению участка или данным о смежных землях.'
    },
    {
      tag: 'Претензия соседа',
      title: <>От вас требуют перенести <br />забор или освободить землю</>,
      desc: 'Сосед предъявил претензию, обратился в суд или утверждает, что ограждение либо объект находится на его участке.'
    },
    {
      tag: 'Судебное дело',
      title: <>Спор уже рассматривается <br />в суде</>,
      desc: 'Получен иск, назначена землеустроительная экспертиза или вынесен судебный акт, который нужно оценить и определить дальнейшие действия.'
    }
  ];

  const helpActions = [
    {
      title: <>Проверка документов <br />и кадастровых сведений</>,
      desc: 'Изучаем основания возникновения права, сведения ЕГРН, межевые материалы, акты согласования, схемы и историю образования участков.'
    },
    {
      title: <>Досудебное <br />урегулирование</>,
      desc: 'Готовим претензию, правовую позицию и варианты соглашения; участвуем в переговорах и взаимодействии со смежным собственником.'
    },
    {
      title: <>Обращения в Росреестр <br />и другие органы</>,
      desc: 'Определяем, возможно ли исправление сведений без суда, и готовим необходимые обращения и документы в пределах согласованной работы.'
    },
    {
      title: <>Подготовка и ведение <br />судебного дела</>,
      desc: 'Формулируем требования, готовим иск или возражения, собираем доказательства и представляем интересы клиента в суде.'
    },
    {
      title: <>Работа с кадастровым <br />инженером и экспертизой</>,
      desc: 'Определяем необходимые исходные данные, оцениваем материалы специалистов и формулируем вопросы для судебной землеустроительной экспертизы.'
    },
    {
      title: <>Оформление <br />результата</>,
      desc: 'После соглашения или судебного решения помогаем выполнить согласованные действия для внесения изменений в ЕГРН или фактического устранения нарушения.'
    }
  ];

  const relatedServices = [
    {
      title: <><span style={{ display: 'inline-block' }}>Раздел</span> <br /><span style={{ display: 'inline-block' }}>земельного участка</span></>,
      desc: 'Помощь при разделе земли между собственниками, образовании самостоятельных участков и определении порядка использования общего участка.',
      link: '/grazhdanam/zemelnyj-yurist/razdel-zemelnogo-uchastka/'
    },
    {
      title: <><span style={{ display: 'inline-block' }}>Установление</span> <br /><span style={{ display: 'inline-block' }}>земельного сервитута</span></>,
      desc: 'Помощь в оформлении права прохода, проезда или прокладки коммуникаций через соседний участок, если использовать землю без этого невозможно.',
      link: '/grazhdanam/zemelnyj-yurist/ustanovlenie-servituta/'
    },
    {
      title: <><span style={{ display: 'inline-block' }}>Оформление прав</span> <br /><span style={{ display: 'inline-block' }}>на земельный участок</span></>,
      desc: 'Помощь при оформлении права на участок, взаимодействии с администрацией и устранении препятствий к государственной регистрации.',
      link: '/grazhdanam/zemelnyj-yurist/oformlenie-prav-na-zemelnyj-uchastok/'
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
      <div onClickCapture={() => handleCtaClick('land_boundary_hero', 'Обсудить спор о границе')}>
        <MilitaryHero 
          breadcrumbs={
            <>
              <a href="/" style={{ color: 'var(--color-primary)' }}>Главная</a> <span style={{ margin: '0 8px' }}>/</span> 
              <a href="/grazhdanam/" style={{ color: 'var(--color-primary)' }}>Гражданам</a> <span style={{ margin: '0 8px' }}>/</span> 
              <a href="/grazhdanam/zemelnyj-yurist/" style={{ color: 'var(--color-primary)' }}>Земельный юрист</a> <span style={{ margin: '0 8px' }}>/</span> 
              <span style={{ color: 'var(--color-text-main)' }}>Споры о границах участка</span>
            </>
          }
          superTitle="Земельное право • Липецк и Липецкая область"
          title={
            <span style={{ display: 'block' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Юрист по спорам</span>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>о границах земельного</span>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>участка в Липецке</span>
            </span>
          }
          subtitle={
            <span style={{ display: 'inline-block', maxWidth: '640px', textWrap: 'balance' }}>
              Проверим документы и кадастровые сведения, определим причину спора и выстроим защиту границ участка — от переговоров и работы с кадастровым инженером до суда.
            </span>
          }
          primaryCtaText="Обсудить спор о границе"
          primaryCtaLink="#form"
          primaryCtaAnalytics="land_spory_o_granicah_consultation_click"
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
                        <span style={{ fontSize: '4px', fontWeight: 'bold', color: 'rgba(23,50,77,0.4)', fontFamily: 'var(--font-serif)' }}>ЕГРН № 48-14/2026</span>
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
                      <div style={{ position: 'absolute', top: '22px', left: '22px', width: '100px', height: '30px', border: '1px solid #C1A066', color: '#C1A066', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-4deg)', opacity: 0.95 }}>
                        <div style={{ fontFamily: 'var(--font-serif)', fontSize: '5px', textAlign: 'center', fontWeight: 'bold', lineHeight: 1.2 }}>
                          АКТ СОГЛАСОВАНИЯ<br/>
                          МЕЖЕВЫХ ГРАНИЦ № 84
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
                          <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Смежный собственник:</div>
                          <div style={{ width: '70px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '8px' }}></div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                          <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Кадастровый инженер:</div>
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
                          <span style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)', letterSpacing: '0.05em' }}>СМЕЖНЫЕ ГРАНИЦЫ</span>
                          <span style={{ fontSize: '5px', color: 'var(--color-primary)' }}>Схема межевого плана</span>
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
                          <line x1="0" y1="50" x2="200" y2="50" stroke="rgba(23,50,77,0.06)" strokeDasharray="2 2" />
                          <line x1="100" y1="0" x2="100" y2="100" stroke="rgba(23,50,77,0.06)" strokeDasharray="2 2" />

                          {/* Участок А */}
                          <polygon points="15,15 95,15 95,85 15,85" fill="rgba(193, 160, 102, 0.15)" stroke="#C1A066" strokeWidth="1.5" />
                          <text x="35" y="52" fill="#10273B" fontSize="7" fontWeight="bold">Участок №1</text>

                          {/* Участок Б с наложением */}
                          <polygon points="90,15 185,15 185,85 90,85" fill="rgba(23, 50, 77, 0.08)" stroke="#10273B" strokeWidth="1.2" strokeDasharray="4 2" />
                          <text x="115" y="52" fill="#10273B" fontSize="7" fontWeight="bold">Участок №2</text>

                          {/* Спорная зона наложения */}
                          <polygon points="90,15 95,15 95,85 90,85" fill="rgba(197, 48, 48, 0.3)" stroke="#C53030" strokeWidth="1" />
                          <text x="82" y="10" fill="#C53030" fontSize="6" fontWeight="bold">Наложение</text>
                        </svg>
                      </div>

                      <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '8px', borderTop: '1px solid rgba(23,50,77,0.15)' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                          <div style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)' }}>ЮК «ДЕ-ЮРЕ»</div>
                          <div style={{ fontSize: '9.5px', color: 'rgba(23,50,77,0.75)', fontFamily: 'var(--font-sans)' }}>Защита границ • Липецк</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
          trustItems={[
            { text: 'Начинаем с документов и сведений ЕГРН.' },
            { text: 'При необходимости подключаем кадастрового инженера.' },
            { text: 'Определяем досудебный или судебный маршрут после анализа.' }
          ]}
        />
      </div>

      {/* ═══ 2. С КАКИМИ СИТУАЦИЯМИ ОБРАЩАЮТСЯ ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              С какими спорами о границах земельного участка обращаются
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Причина конфликта не всегда очевидна по выписке из ЕГРН или расположению забора. Сначала необходимо сопоставить документы, кадастровые сведения и фактическое использование участков.
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
                flexDirection: 'column'
              }}>
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

          {/* CTA-плашка с атрибуцией cta_source = land_boundary_documents */}
          <div className="card service-card cta-banner-card" style={{ 
            width: '100%', 
            padding: '32px 36px', 
            background: 'var(--color-deep-blue)', 
            borderRadius: '0',
            borderTop: '3px solid var(--color-gold)',
            boxShadow: '0 8px 16px rgba(16, 39, 59, 0.28)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '24px',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ flex: '1 1 300px' }}>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-white)', lineHeight: 1.3 }}>
                Одних кадастровых измерений может быть недостаточно
              </h3>
              <p style={{ margin: '0', fontSize: '15px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5, maxWidth: '640px' }}>
                Кадастровый инженер определяет координаты и готовит кадастровые документы, но не разрешает спор между собственниками. Юрист проверит документы и сведения ЕГРН, определит правовую позицию, необходимые требования и доказательства.
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <a 
                href="#form" 
                className="btn white-btn-custom" 
                style={{ display: 'inline-block', textAlign: 'center', fontSize: '15px' }}
                onClick={() => handleCtaClick('land_boundary_documents', 'Проверить документы')}
              >
                Проверить документы
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
              Как юрист помогает <br />разрешить спор о границе
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Состав работы зависит от причины расхождения, позиции соседнего собственника и стадии дела. После первичного анализа определяется подходящий маршрут и объём юридической помощи.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', position: 'relative' }}>
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

      {/* ═══ 4. ДОКУМЕНТЫ ДЛЯ ПЕРВИЧНОЙ ПРОВЕРКИ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Какие документы понадобятся <br />для проверки границы
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Точный перечень зависит от причины спора. Для первичного <br />анализа достаточно направить документы и материалы, которые уже есть.
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
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Выписки из ЕГРН</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Выписка на ваш участок и, если имеется, сведения о соседнем участке, граница с которым стала предметом спора.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Документы на земельный участок</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Договор, свидетельство, решение администрации, акт предоставления земли, документы о наследовании или другие основания возникновения права.</span>
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
                Межевые и доказательственные материалы
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Межевые и кадастровые материалы</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Межевой план, акт согласования границ, схема расположения участка, заключение кадастрового инженера и результаты выполненных измерений.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Материалы об обстоятельствах спора</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Фотографии ограждений и объектов, переписка с соседом, претензии, ответы Росреестра, администрации и другие имеющиеся документы.</span>
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
            Если части документов нет, всё равно можно обратиться. Юрист определит, какие сведения необходимо получить <br />и требуется ли привлечение кадастрового инженера.
          </div>
        </div>
      </section>

      {/* ═══ 6. ПРАКТИКА ПО СПОРАМ О ГРАНИЦАХ ═══ */}
      {showCases && (
        <CasesBlock 
          title={<>Практика по спорам <br />о границах земельных участков</>}
          showAllLink="/praktika"
          showDemoWarning={false}
          resultLabel="Ключевой результат"
          cases={[
            {
              category: "МЕЖЕВАНИЕ И ГРАНИЦЫ",
              title: "Вернули владельцу часть участка, занятую соседом",
              problem: "После установки нового забора сосед фактически присоединил к своему участку часть земли клиента. Стороны по-разному определяли, где должна проходить общая граница, а сведения ЕГРН не позволяли разрешить спор без дополнительного исследования документов и участка.",
              action: "Изучили правоустанавливающие документы, межевые материалы и историю формирования обоих участков. Организовали кадастровые измерения, зафиксировали расположение забора и подготовили иск об установлении границы и устранении препятствий в пользовании землёй. В суде поставили перед экспертом вопросы о юридически обоснованном варианте прохождения границы.",
              result: "Суд установил границу по варианту, подтверждённому документами и экспертизой, и обязал соседа освободить занятую часть участка и перенести ограждение.",
              isDemo: false
            },
            {
              category: "РЕЕСТРОВАЯ ОШИБКА",
              title: "Устранили наложение границ, мешавшее оформить участок",
              problem: "При подготовке документов собственник обнаружил, что граница соседнего участка по сведениям ЕГРН пересекает его землю. Из-за наложения завершить кадастровое оформление участка было невозможно.",
              action: "Сопоставили сведения ЕГРН, межевые планы и исходные документы на оба участка. Установили, что при межевании соседнего участка координаты были определены с ошибкой. Подготовили требования об исправлении реестровой ошибки и установлении правильных границ, привлекли к делу необходимых собственников и органы регистрации.",
              result: "Суд признал наличие реестровой ошибки и установил границы участков по координатам, определённым экспертом. После вступления решения в силу пересечение устранили, а корректные сведения внесли в ЕГРН.",
              isDemo: false
            },
            {
              category: "СОГЛАСОВАНИЕ ГРАНИЦ",
              title: "Установили границу при отказе соседа согласовать межевание",
              problem: "Клиент решил уточнить границы участка, однако собственник соседней земли отказался подписывать акт согласования. Он утверждал, что исторически пользовался частью спорной территории, но документов, подтверждающих его позицию, не представил.",
              action: "Проверили соблюдение процедуры извещения и согласования, изучили документы об образовании участков, старые планы и фактическое землепользование. Попытались урегулировать спор без суда, а после отказа соседа подготовили иск и доказательства выбранного варианта границы.",
              result: "Суд установил местоположение общей границы. Решение стало основанием для завершения кадастровых работ и внесения уточнённых координат участка в ЕГРН без подписи соседа.",
              isDemo: false
            }
          ]}
        />
      )}

      {/* ═══ 7. КАК ПРОХОДИТ РАБОТА ═══ */}
      <ProcessBlock 
        title="Как проходит работа"
        subtitle="Пять последовательных шагов для разрешения спора о границе."
        steps={[
          { num: '01', title: 'Разбираем ситуацию', desc: 'Уточняем, в чём состоит спор, как фактически используются участки, где расположены ограждения и какие действия уже предпринимались.' },
          { num: '02', title: 'Изучаем документы и сведения ЕГРН', desc: 'Проверяем документы на землю, межевые материалы, координаты границ, обращения и ответы государственных органов.' },
          { num: '03', title: 'Определяем причину спора и способ защиты', desc: 'Устанавливаем, связано ли расхождение с реестровой ошибкой, результатами межевания или действиями соседа. Определяем возможные требования и состав доказательств.' },
          { num: '04', title: 'Проводим досудебную или судебную работу', desc: 'Готовим обращения, претензии, соглашения или иск. При необходимости взаимодействуем с кадастровым инженером и формируем вопросы для эксперта.' },
          { num: '05', title: 'Сопровождаем оформление результата', desc: 'Представляем интересы клиента и помогаем выполнить действия, необходимые для внесения изменений в ЕГРН или фактического устранения нарушения.' }
        ]}
      />

      {/* ═══ 8. СТОИМОСТЬ ЮРИДИЧЕСКОЙ ПОМОЩИ ═══ */}
      <div onClickCapture={(e) => {
        const target = e.target as HTMLElement;
        const btn = target.closest('a, button');
        if (btn) {
          const text = btn.textContent?.trim() || '';
          if (text.includes('Получить расчёт стоимости')) {
            handleCtaClick('land_boundary_price_total', 'Получить расчёт стоимости');
          } else if (text.includes('Уточнить стоимость') || text.includes('Запросить')) {
            const card = btn.closest('.pricing-tier-card');
            if (card) {
              const cardTitle = card.querySelector('h3')?.textContent?.trim() || '';
              if (cardTitle.includes('Досудебное')) {
                handleCtaClick('land_boundary_price_pretrial', 'Досудебное урегулирование');
              } else if (cardTitle.includes('Судебная')) {
                handleCtaClick('land_boundary_price_court', 'Судебная защита');
              } else {
                handleCtaClick('land_boundary_price_analysis', 'Консультация и анализ');
              }
            }
          }
        }
      }}>
        <PricingBlock 
          title="Стоимость юридической помощи"
          subtitle="Точная стоимость зависит от состояния документов, характера расхождения, необходимости кадастровых работ или экспертизы и выбранного порядка разрешения спора. Объём работы и стоимость согласуем до заключения договора."
          tiers={[
            {
              title: <>Консультация и анализ</>,
              subtitle: 'Первичный разбор',
              popular: false,
              price: 'от ХХХ ₽',
              features: [
                { name: 'Консультация по обстоятельствам спора', value: '✓' },
                { name: 'Анализ имеющихся документов', value: '✓' },
                { name: 'Определение необходимых материалов', value: '✓' },
                { name: 'Предварительный план действий', value: '✓' }
              ],
              buttonText: 'Уточнить стоимость',
              buttonHref: '#form'
            },
            {
              title: <>Досудебное урегулирование</>,
              subtitle: 'Переговоры и документы',
              popular: true,
              badgeText: 'ВОСТРЕБОВАНО',
              price: 'от ХХХ ₽',
              features: [
                { name: 'Подготовка претензии или обращения', value: '✓' },
                { name: 'Правовая оценка возражений соседа', value: '✓' },
                { name: 'Участие в согласовании позиции', value: '✓' },
                { name: 'Взаимодействие с органами и специалистами', value: '✓' }
              ],
              buttonText: 'Уточнить стоимость',
              buttonHref: '#form'
            },
            {
              title: <>Судебная защита</>,
              subtitle: 'Ведение земельного спора',
              popular: false,
              price: 'от ХХХ ₽',
              features: [
                { name: 'Подготовка иска и процессуальных документов', value: '✓' },
                { name: 'Формирование доказательственной позиции', value: '✓' },
                { name: 'Работа с заключениями и экспертизой', value: '✓' },
                { name: 'Представительство интересов в суде', value: '✓' }
              ],
              buttonText: 'Уточнить стоимость',
              buttonHref: '#form'
            }
          ]}
          ctaTitle="Точную стоимость определим до начала работы"
          ctaSubtitle="Сначала изучим обстоятельства и документы, предложим подходящий формат помощи и согласуем стоимость. Она не изменится без согласования с вами."
          ctaButtonText="Получить расчёт стоимости"
          ctaButtonLink="#form"
          disclaimer=""
        />
      </div>

      {/* ═══ 9. ЧАСТЫЕ ВОПРОСЫ ═══ */}
      <div onClickCapture={() => handleCtaClick('land_boundary_faq', 'Задать свой вопрос')}>
        <FAQBlock 
          faqs={faqs} 
          title={<>Частые вопросы <br />о спорах по границах <br />земельного участка</>}
          subtitle="Собрали ответы на основные вопросы о наложении границ, межевании, реестровых ошибках и спорах с соседями."
          ctaText="Задать свой вопрос"
          ctaLink="#form"
        />
      </div>

      {/* ═══ 10. СВЯЗАННЫЕ УСЛУГИ ═══ */}
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
            <Link href="/grazhdanam/zemelnyj-yurist/razdel-zemelnogo-uchastka/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
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
                  <span style={{ display: 'inline-block' }}>Раздел земельного</span> <br /><span style={{ display: 'inline-block' }}>участка</span>
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Поможем разделить участок между собственниками, выделить долю в натуре или объединить смежные земли.
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
            <Link href="/grazhdanam/zemelnyj-yurist/ustanovlenie-servituta/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
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
                  <span style={{ display: 'inline-block' }}>Установление</span> <br /><span style={{ display: 'inline-block' }}>сервитута</span>
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Оформим право ограниченного пользования чужим участком для прохода, проезда или прокладки коммуникаций.
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
            <Link href="/grazhdanam/zemelnyj-yurist/osparivanie-kadastrovoj-stoimosti/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
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
                  <span style={{ display: 'inline-block' }}>Оспаривание кадастровой</span> <br /><span style={{ display: 'inline-block' }}>стоимости</span>
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Снизим завышенную кадастровую стоимость земли через комиссию или суд для уменьшения налогов и арендных платежей.
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

      {/* ═══ 11. ФИНАЛЬНАЯ ФОРМА ═══ */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start', paddingTop: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>Связаться с нами</span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                Обсудите спор о границе земельного участка
              </h2>
              
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Кратко опишите, где проходит спорная граница, в чём состоит разногласие с соседом и какие документы у вас есть. Юрист изучит обращение, уточнит обстоятельства и согласует с вами консультацию.
              </p>
              
              <div style={{ marginTop: '32px' }}>
                <div style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <span>
                    Перезвоним вам в течение<br />
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
                  commentPlaceholder="Например: сосед перенёс забор, и часть моего участка оказалась за его ограждением…"
                  subtext="Если вы оставите заявку вечером или в выходной день, мы перезвоним в ближайший рабочий день."
                  hiddenFields={[
                    { name: 'pageId', value: 'CIV-05-01' },
                    { name: 'pageTitle', value: 'Споры о границах земельного участка в Липецке' },
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
