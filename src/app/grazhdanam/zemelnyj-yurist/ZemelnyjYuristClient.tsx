'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';
import ProcessBlock from '@/components/ProcessBlock';
import CasesBlock from '@/components/CasesBlock';
import PricingBlock from '@/components/PricingBlock';

export default function ZemelnyjYuristClient() {
  const [ctaSource, setCtaSource] = useState('land_hub_form_direct');
  const [ctaText, setCtaText] = useState('Прямой переход к форме');

  const handleCtaClick = (source: string, text: string) => {
    setCtaSource(source);
    setCtaText(text);
  };

  const faqs = [
    {
      q: 'Что делать, если границы участков пересекаются или сосед занял часть земли?',
      a: 'Сначала нужно проверить сведения ЕГРН, межевые и правоустанавливающие документы, а при необходимости — провести кадастровые работы. После установления фактических и юридических границ вопрос можно решить по соглашению с соседом, через исправление реестровой ошибки или в суде.'
    },
    {
      q: 'Можно ли оформить участок, которым семья пользуется много лет?',
      a: 'Иногда можно, но длительное пользование само по себе не подтверждает право собственности. Необходимо установить, на каком основании земля была предоставлена, изучить имеющиеся и архивные документы, характеристики участка и действующие ограничения.'
    },
    {
      q: 'Как разделить земельный участок между собственниками?',
      a: 'Раздел можно провести по соглашению собственников или через суд. Образуемые участки должны соответствовать установленным требованиям по площади, доступу, разрешённому использованию и другим характеристикам. Если раздел невозможен, можно определить порядок пользования участком.'
    },
    {
      q: 'Что делать, если к участку нет прохода или проезда?',
      a: 'Сначала следует проверить, существуют ли другие варианты доступа, и попытаться заключить соглашение с владельцем соседнего участка. Если договориться не удалось, можно требовать установления сервитута через суд. Его условия должны обеспечивать необходимый доступ и как можно меньше ограничивать владельца соседней земли.'
    },
    {
      q: 'Можно ли изменить вид разрешённого использования земельного участка?',
      a: 'Возможность зависит от территориальной зоны, ПЗЗ, градостроительного регламента, ограничений участка и требуемого способа использования. В конкретной ситуации может применяться выбор основного или вспомогательного ВРИ, получение условно разрешённого вида либо изменение ПЗЗ. Сначала необходимо сопоставить характеристики участка и планируемое использование с действующими правилами.'
    },
    {
      q: 'Можно ли перевести земельный участок в другую категорию?',
      a: 'Перевод возможен не всегда. Необходимо определить исходную и требуемую категорию, проверить документы территориального планирования и специальные ограничения, а затем установить орган, который принимает решение. Изменение ВРИ внутри существующей категории переводом земли не является.'
    },
    {
      q: 'Как снизить завышенную кадастровую стоимость участка?',
      a: 'Сначала нужно определить причину завышения: ошибочные сведения об участке или несоответствие кадастровой стоимости рыночной. В зависимости от этого подаётся обращение об исправлении ошибки либо заявление об установлении кадастровой стоимости в размере рыночной. Для оценки перспектив могут потребоваться выписка из ЕГРН и отчёт об оценке.'
    },
    {
      q: 'Как оспорить отказ Росреестра или администрации?',
      a: 'Необходимо изучить само решение, основания отказа и поданные документы. Иногда достаточно устранить замечания и обратиться повторно. Если отказ незаконен или повторная подача не решит проблему, его можно обжаловать в административном или судебном порядке.'
    },
    {
      q: 'Можно ли разрешить земельный спор без суда?',
      a: 'Да. Часть вопросов решается посредством переговоров, соглашения между собственниками, исправления сведений ЕГРН или обращения в государственный либо муниципальный орган. Суд потребуется, если стороны не договорились, орган отказал или право невозможно подтвердить иным способом.'
    },
    {
      q: 'Сколько времени занимает разрешение земельного вопроса?',
      a: 'Срок зависит от характера проблемы, состояния документов, необходимости кадастровых работ или экспертизы и позиции других участников. Внесудебное оформление может занять несколько недель или месяцев, судебный спор — дольше. Более точный срок можно оценить после изучения ситуации.'
    },
    {
      q: 'Какие документы нужны для оценки ситуации и перспектив дела?',
      a: 'Желательно предоставить выписку из ЕГРН, документы на землю и расположенные на ней объекты, межевой план, схемы, решения и уведомления государственных органов, переписку с соседями и судебные документы, если спор уже рассматривается. Если чего-то нет, юрист определит, какие сведения необходимо запросить.'
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
        "@id": "https://dejure-help.ru/#legalservice",
        "name": "Юридическая компания «Де-Юре»",
        "url": "https://dejure-help.ru/",
        "logo": "https://matilda081133-sketch.github.io/images/logo_dark.png",
        "areaServed": ["Липецк", "Липецкая область", "Россия"]
      },
      {
        "@type": "Service",
        "@id": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/#service",
        "name": "Услуги земельного юриста в Липецке",
        "serviceType": "Юридическая помощь по земельным вопросам",
        "url": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/",
        "description": "Помощь земельного юриста в Липецке: споры о границах, оформление прав, сервитут, кадастровая стоимость, изменение ВРИ и перевод земли в другую категорию.",
        "provider": { "@id": "https://dejure-help.ru/#organization" },
        "areaServed": ["Липецк", "Липецкая область", "Россия"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Направления помощи земельного юриста",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Споры о границах земельного участка",
                "url": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/spory-o-granicah-zemelnogo-uchastka/"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Оформление прав на земельный участок",
                "url": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/oformlenie-prav-na-zemelnyj-uchastok/"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Раздел земельного участка",
                "url": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/razdel-zemelnogo-uchastka/"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Установление земельного сервитута",
                "url": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/ustanovlenie-servituta/"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Оспаривание кадастровой стоимости",
                "url": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/osparivanie-kadastrovoj-stoimosti/"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Изменение вида разрешённого использования участка",
                "url": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/izmenenie-vri-zemelnogo-uchastka/"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Перевод земельного участка в другую категорию",
                "url": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/perevod-zemelnogo-uchastka-v-druguyu-kategoriyu/"
              }
            }
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://matilda081133-sketch.github.io/-/" },
          { "@type": "ListItem", "position": 2, "name": "Гражданам", "item": "https://matilda081133-sketch.github.io/-/grazhdanam/" },
          { "@type": "ListItem", "position": 3, "name": "Земельный юрист", "item": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/" }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/#webpage",
        "url": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/",
        "name": "Земельный юрист в Липецке — помощь по земельным вопросам | Де-Юре",
        "description": "Земельный юрист в Липецке: споры о границах, оформление прав, раздел участка, сервитут, кадастровая стоимость, изменение ВРИ и категории земли.",
        "breadcrumb": { "@id": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/#breadcrumb" },
        "mainEntity": { "@id": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/#service" }
      }
    ]
  };

  const showCases = true;

  const situations = [
    {
      tag: 'Границы участка',
      title: 'Сосед занял часть земли или границы участков пересекаются',
      desc: 'Проверим документы, сведения ЕГРН и фактическое расположение границ. Определим возможные требования и необходимые доказательства.'
    },
    {
      tag: 'Оформить право',
      title: 'Землёй пользуются давно, но право на неё не оформлено',
      desc: 'Разберёмся с оформлением участка, который перешёл по наследству, используется без регистрации либо имеет утраченные или противоречивые документы.'
    },
    {
      tag: 'Совместная собственность',
      title: 'Участок нужно разделить или определить порядок пользования',
      desc: 'Оценим возможность раздела, права совладельцев и варианты урегулирования разногласий.'
    },
    {
      tag: 'Доступ к участку',
      title: 'К земле нет необходимого прохода, проезда или доступа к коммуникациям',
      desc: 'Проверим основания для установления сервитута и предложим возможный порядок оформления права пользования частью соседнего участка.'
    },
    {
      tag: 'Кадастровая стоимость',
      title: 'Налог или арендная плата рассчитаны исходя из завышенной стоимости',
      desc: 'Проверим основания для оспаривания кадастровой стоимости и оценим целесообразность дальнейших действий.'
    },
    {
      tag: 'Вид разрешённого использования',
      title: 'Текущий ВРИ не позволяет использовать участок так, как планировалось',
      desc: 'Проверим территориальную зону, ПЗЗ, градостроительный регламент и ограничения участка. Определим, можно ли выбрать подходящий ВРИ или потребуется другая процедура.'
    },
    {
      tag: 'Категория земли',
      title: 'Для планируемого использования участок нужно перевести в другую категорию',
      desc: 'Проверим допустимость перевода, документы территориального планирования и специальные ограничения. Определим, какой орган принимает решение и в каком порядке обращаться.'
    }
  ];

  const directions = [
    {
      slug: 'spory-o-granicah-zemelnogo-uchastka',
      title: 'Споры о границах земельного участка',
      desc: 'Поможем разобраться с наложением участков, ошибками межевания, захватом земли и разногласиями с соседями.',
      link: '/-/grazhdanam/zemelnyj-yurist/spory-o-granicah-zemelnogo-uchastka/'
    },
    {
      slug: 'oformlenie-prav-na-zemelnyj-uchastok',
      title: 'Оформление прав на земельный участок',
      desc: 'Проверим основание права и сопроводим оформление используемого, унаследованного или предоставленного участка.',
      link: '/-/grazhdanam/zemelnyj-yurist/oformlenie-prav-na-zemelnyj-uchastok/'
    },
    {
      slug: 'razdel-zemelnogo-uchastka',
      title: 'Раздел земельного участка',
      desc: 'Оценим, можно ли образовать самостоятельные участки, и сопроводим раздел по соглашению или через суд.',
      link: '/-/grazhdanam/zemelnyj-yurist/razdel-zemelnogo-uchastka/'
    },
    {
      slug: 'ustanovlenie-servituta',
      title: 'Установление земельного сервитута',
      desc: 'Поможем установить сервитут для прохода, проезда или коммуникаций либо защитить участок от чрезмерного обременения.',
      link: '/-/grazhdanam/zemelnyj-yurist/ustanovlenie-servituta/'
    },
    {
      slug: 'osparivanie-kadastrovoj-stoimosti',
      title: 'Оспаривание кадастровой стоимости',
      desc: 'Оценим возможный финансовый эффект и целесообразность установления кадастровой стоимости в размере рыночной.',
      link: '/-/grazhdanam/zemelnyj-yurist/osparivanie-kadastrovoj-stoimosti/'
    },
    {
      slug: 'izmenenie-vri-zemelnogo-uchastka',
      title: 'Изменение вида разрешённого использования участка',
      desc: 'Проверим, допускается ли нужный способ использования земли, и определим процедуру изменения ВРИ.',
      link: '/-/grazhdanam/zemelnyj-yurist/izmenenie-vri-zemelnogo-uchastka/'
    },
    {
      slug: 'perevod-zemelnogo-uchastka-v-druguyu-kategoriyu',
      title: 'Перевод земельного участка в другую категорию',
      desc: 'Оценим допустимость перевода, определим компетентный орган и сопроводим подготовку и подачу документов.',
      link: '/-/grazhdanam/zemelnyj-yurist/perevod-zemelnogo-uchastka-v-druguyu-kategoriyu/'
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
      <div onClickCapture={() => handleCtaClick('land_hub_hero', 'Обсудить ситуацию')}>
        <MilitaryHero 
          breadcrumbs={
            <>
              <a href="/" style={{ color: 'var(--color-primary)' }}>Главная</a> <span style={{ margin: '0 8px' }}>/</span> 
              <a href="/grazhdanam/" style={{ color: 'var(--color-primary)' }}>Гражданам</a> <span style={{ margin: '0 8px' }}>/</span> 
              <span style={{ color: 'var(--color-text-main)' }}>Земельный юрист</span>
            </>
          }
          superTitle="Земельное право"
          title={<>Земельный юрист <br />в Липецке</>}
          subtitle={
            <span style={{ display: 'inline-block', maxWidth: '560px', textWrap: 'balance' }}>
              Если возник спор, сложности с оформлением земли или её использованием, изучим документы, оценим возможные варианты решения и предложим порядок действий.
            </span>
          }
          primaryCtaText="Оценить перспективы дела"
          primaryCtaLink="#form"
          primaryCtaAnalytics="land_hero_consultation_click"
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
                          <span style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)', letterSpacing: '0.05em' }}>ЗЕМЕЛЬНЫЙ УЧАСТОК</span>
                          <span style={{ fontSize: '5px', color: 'var(--color-primary)' }}>Кадастровый план ЕГРН</span>
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

                          <polygon points="25,18 175,12 155,85 18,78" fill="rgba(193, 160, 102, 0.15)" stroke="#C1A066" strokeWidth="1.5" />
                          <polygon points="38,26 162,22 146,75 32,70" fill="none" stroke="#10273B" strokeWidth="0.7" strokeDasharray="3 2" />

                          <circle cx="25" cy="18" r="3" fill="#10273B" />
                          <circle cx="175" cy="12" r="3" fill="#10273B" />
                          <circle cx="155" cy="85" r="3" fill="#10273B" />
                          <circle cx="18" cy="78" r="3" fill="#10273B" />

                          <text x="28" y="22" fill="#10273B" fontSize="7" fontWeight="bold">Т1</text>
                          <text x="162" y="18" fill="#10273B" fontSize="7" fontWeight="bold">Т2</text>
                          <text x="142" y="83" fill="#10273B" fontSize="7" fontWeight="bold">Т3</text>
                          <text x="8" y="75" fill="#10273B" fontSize="7" fontWeight="bold">Т4</text>

                          <text x="75" y="52" fill="#10273B" fontSize="8" fontWeight="bold">S = 1 250 м²</text>
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
                          <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Правовая защита • Липецк</div>
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
            { text: 'Изучим документы и оценим перспективы дела' },
            { text: 'Подберём подходящий способ решения' },
            { text: 'Сопроводим до суда и оформления результата' }
          ]}
        />
      </div>

      {/* ═══ 2. БЛОК СИТУАЦИЙ (7 СИТУАЦИЙ ПО ТЗ) ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '700px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              С какими земельными <br />вопросами обращаются
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Помогаем разобраться в спорах, оформлении и использовании земельных участков. Изучим обстоятельства и документы, определим характер вопроса и возможный порядок действий.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
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
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', opacity: 0.06, pointerEvents: 'none' }}>
                  <svg width="100" height="100" viewBox="0 0 24 24" fill="var(--color-deep-blue)">
                    <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>

                <div style={{ 
                  fontSize: '13px', 
                  fontWeight: 600, 
                  color: 'var(--color-gold)', 
                  marginBottom: '14px',
                  background: 'rgba(193, 160, 102, 0.1)',
                  padding: '4px 12px',
                  alignSelf: 'flex-start',
                  borderRadius: '2px'
                }}>
                  {sit.tag}
                </div>

                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', fontWeight: 600, color: 'var(--color-deep-blue)', lineHeight: 1.4, margin: '0 0 14px 0', whiteSpace: 'pre-line' }}>
                  {sit.title}
                </h3>

                <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0, position: 'relative', zIndex: 1 }}>
                  {sit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3. НАПРАВЛЕНИЯ ПОМОЩИ (7 УСЛУГ + КАРТОЧКА «НЕ НАШЛИ СВОЮ СИТУАЦИЮ?») ═══ */}
      <section id="directions" className="section" style={{ padding: '64px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '700px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Направления помощи
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Выберите подходящее направление. Если вы не уверены, к какой услуге относится ваш вопрос, опишите ситуацию — мы изучим её и подскажем, с чего начать.
            </p>
          </div>
          
          <div className="grid grid-3" style={{ gap: '24px' }}>
            {directions.map((dir, i) => (
              <a key={i} href={dir.link} style={{ textDecoration: 'none', display: 'block' }}>
                <div 
                  className="card service-card" 
                  style={{ 
                    height: '100%', 
                    minHeight: '160px',
                    padding: '30px', 
                    background: 'var(--color-white)', 
                    border: '1px solid var(--color-border)',
                    borderRadius: '0',
                    display: 'flex', 
                    flexDirection: 'column',
                    transition: 'all 0.3s',
                    position: 'relative',
                    borderTop: '3px solid var(--color-primary)'
                  }}
                >
                  <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3 }}>
                    {dir.title}
                  </h3>
                  <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                    {dir.desc}
                  </p>
                  <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, transition: 'transform 0.3s' }}>
                    Подробнее 
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.3s' }}>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </a>
            ))}

            {/* Карточка 8: «Не нашли свою ситуацию?», занимающая доступное пространство в строке с 7-й картой */}
            <div 
              className="card service-card service-card-span-2" 
              style={{ 
                padding: '32px 36px', 
                background: 'var(--color-deep-blue)', 
                border: '1px solid transparent',
                borderRadius: '0',
                display: 'flex', 
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '28px',
                transition: 'all 0.3s',
                position: 'relative',
                borderTop: '3px solid var(--color-gold)',
                boxShadow: '0 8px 16px rgba(16, 39, 59, 0.28)'
              }}
            >
              <style dangerouslySetInnerHTML={{ __html: `
                .service-card-span-2 {
                  grid-column: span 2;
                }
                @media (max-width: 991px) {
                  .service-card-span-2 {
                    grid-column: span 1 !important;
                    flex-direction: column !important;
                    align-items: flex-start !important;
                  }
                }
                .white-btn-custom {
                  background-color: var(--color-white) !important;
                  color: #10273B !important;
                  border: 1px solid var(--color-white) !important;
                  white-space: nowrap;
                  font-weight: 600;
                  padding: 14px 28px !important;
                  transition: all 0.3s ease !important;
                }
                .white-btn-custom:hover {
                  background-color: var(--color-primary) !important;
                  color: var(--color-white) !important;
                  border-color: var(--color-primary) !important;
                }
              `}} />
              <div style={{ flex: '1 1 300px' }}>
                <h3 style={{ margin: '0 0 10px 0', fontSize: '24px', fontFamily: 'var(--font-serif)', color: 'var(--color-white)', lineHeight: 1.3 }}>
                  Не нашли свою ситуацию?
                </h3>
                <p style={{ margin: '0', fontSize: '16px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.55, maxWidth: '580px' }}>
                  Опишите ваш земельный вопрос в форме. Изучим имеющиеся документы и предложим возможные варианты решения.
                </p>
              </div>
              <div style={{ flexShrink: 0 }}>
                <a 
                  href="#form" 
                  className="btn white-btn-custom" 
                  style={{ display: 'inline-block', textAlign: 'center', fontSize: '15px' }}
                  onClick={() => handleCtaClick('land_hub_services_other', 'Не нашли свою ситуацию?')}
                >
                  Обсудить ситуацию
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 5. ПРИМЕРЫ ИЗ ПРАКТИКИ ═══ */}
      {showCases && (
        <CasesBlock 
          title="Примеры из практики"
          showDemoWarning={false}
          resultLabel="Ключевой результат"
          cases={[
            {
              category: "МЕЖЕВАНИЕ И ГРАНИЦЫ",
              title: "Исправили границы участка после ошибки при межевании",
              problem: "При межевании выяснилось, что границы участка пересекаются с соседним. Из-за наложения собственник не мог зарегистрировать уточнённые сведения в ЕГРН.",
              action: "Изучили межевые и правоустанавливающие документы, установили причину расхождения и подготовили требования об исправлении реестровой ошибки.",
              result: "Ошибочные сведения исправлены, границы участка уточнены и внесены в ЕГРН.",
              isDemo: false
            },
            {
              category: "ОФОРМЛЕНИЕ ЗЕМЛИ",
              title: "Оформили право собственности на давно используемый участок",
              problem: "Гражданин много лет пользовался земельным участком при доме, но право на землю не было зарегистрировано, а документов оказалось недостаточно для оформления через Росреестр.",
              action: "Проверили архивные документы и основания пользования землёй, собрали доказательства и подготовили обращение о признании права собственности.",
              result: "Право собственности на участок признано и зарегистрировано в ЕГРН.",
              isDemo: false
            },
            {
              category: "ЗЕМЕЛЬНЫЙ СЕРВИТУТ",
              title: "Добились проезда к участку через соседнюю землю",
              problem: "После изменения границ соседних участков собственник лишился нормального подъезда к своей земле. Договориться с владельцем смежного участка не удалось.",
              action: "Проанализировали возможные варианты доступа, обосновали необходимый маршрут и подготовили требования об установлении земельного сервитута.",
              result: "Установлено право проезда к участку через соседнюю территорию.",
              isDemo: false
            }
          ]}
        />
      )}

      {/* ═══ 6. КАК ПРОХОДИТ РАБОТА ═══ */}
      <ProcessBlock 
        title="Как проходит работа"
        subtitle="Пять последовательных шагов для разрешения земельного вопроса."
        ctaTitle=""
        steps={[
          { num: '01', title: 'Разбираемся в ситуации', desc: 'Вы рассказываете о проблеме и присылаете имеющиеся документы. Мы уточняем обстоятельства и определяем, какая помощь потребуется.' },
          { num: '02', title: 'Изучаем документы', desc: 'Проверяем сведения ЕГРН, правоустанавливающие и межевые документы, решения государственных органов и другие материалы.' },
          { num: '03', title: 'Предлагаем способ решения', desc: 'Оцениваем перспективы, возможные риски и выбираем подходящий порядок действий: переговоры, обращение в органы или суд.' },
          { num: '04', title: 'Защищаем ваши интересы', desc: 'Готовим документы, взаимодействуем с участниками спора и государственными органами, представляем клиента в суде.' },
          { num: '05', title: 'Сопровождаем оформление результата', desc: 'Помогаем внести изменения в ЕГРН, зарегистрировать право или выполнить другие действия, необходимые для завершения дела.' }
        ]}
      />

      {/* ═══ 7. СТОИМОСТЬ ЮРИДИЧЕСКОЙ ПОМОЩИ ═══ */}
      <div onClickCapture={(e) => {
        const target = e.target as HTMLElement;
        const btn = target.closest('a, button');
        if (btn) {
          const text = btn.textContent?.trim() || '';
          if (text.includes('Получить расчёт стоимости')) {
            handleCtaClick('land_hub_price_total', 'Получить расчёт стоимости');
          } else if (text.includes('Записаться на консультацию')) {
            handleCtaClick('land_hub_price_consultation', 'Записаться на консультацию');
          } else if (text.includes('Рассчитать стоимость')) {
            handleCtaClick('land_hub_price_documents', 'Рассчитать стоимость');
          } else if (text.includes('Обсудить ситуацию')) {
            handleCtaClick('land_hub_price_support', 'Обсудить ситуацию');
          } else if (text.includes('Оценить перспективы дела')) {
            handleCtaClick('land_hub_price_court', 'Оценить перспективы дела');
          }
        }
      }}>
        <PricingBlock 
          title="Стоимость услуг земельного юриста"
          subtitle="Стоимость зависит от сложности вопроса, объёма документов, необходимости проведения экспертизы и выбранного порядка решения — через переговоры, государственные органы или суд."
          tiers={[
            {
              title: <>Консультация земельного юриста</>,
              subtitle: 'Первичный разбор',
              popular: false,
              price: 'от ХХХ ₽',
              features: [
                { name: 'Разбор обстоятельств дела', value: '✓' },
                { name: 'Анализ правоустанавливающих документов', value: '✓' },
                { name: 'Определение порядка действий', value: '✓' }
              ],
              buttonText: 'Записаться на консультацию',
              buttonHref: '#form'
            },
            {
              title: <>Подготовка<br />документов</>,
              subtitle: 'Процессуальные документы',
              popular: true,
              badgeText: 'ВОСТРЕБОВАНО',
              price: 'от ХХХ ₽',
              features: [
                { name: 'Подготовка заявлений и претензий', value: '✓' },
                { name: 'Составление исковых заявлений и жалоб', value: '✓' },
                { name: 'Формирование доказательной базы', value: '✓' }
              ],
              buttonText: 'Рассчитать стоимость',
              buttonHref: '#form'
            },
            {
              title: <>Сопровождение земельного вопроса</>,
              subtitle: 'Комплексное сопровождение',
              popular: false,
              price: 'от ХХХ ₽',
              features: [
                { name: 'Взаимодействие с Росреестром и органами', value: '✓' },
                { name: 'Сопровождение согласований и межевания', value: '✓' },
                { name: 'Переговоры со смежными собственниками', value: '✓' }
              ],
              buttonText: 'Обсудить ситуацию',
              buttonHref: '#form'
            },
            {
              title: <>Представительство<br />в суде</>,
              subtitle: 'Защита в суде',
              popular: false,
              price: 'от ХХХ ₽',
              features: [
                { name: 'Разработка правовой позиции', value: '✓' },
                { name: 'Представительство в судебных заседаниях', value: '✓' },
                { name: 'Сопровождение судебной экспертизы', value: '✓' }
              ],
              buttonText: 'Оценить перспективы дела',
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

      {/* ═══ 8. ОТВЕТЫ НА ЧАСТЫЕ ВОПРОСЫ ═══ */}
      <div onClickCapture={() => handleCtaClick('land_hub_faq', 'Задать свой вопрос')}>
        <FAQBlock 
          faqs={faqs} 
          title={<>Ответы на<br />частые вопросы</>}
          subtitle="Собрали ответы на частые вопросы по земельным спорам, оформлению прав, разделу участков, сервитуту, кадастровой стоимости, изменению ВРИ и переводу земли в другую категорию."
          ctaText="Задать свой вопрос"
          ctaLink="#form"
        />
      </div>

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
                Получите первичную оценку ситуации
              </h2>
              
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Опишите земельный вопрос и оставьте контактные данные. Обращение передадим юристу по земельному праву. Он изучит обстоятельства и предложит возможный порядок действий.
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
                  buttonText="Оставить заявку"
                  commentPlaceholder="Кратко опишите земельный вопрос или спор…"
                  subtext="Если вы оставите заявку вечером или в выходной день, мы перезвоним в ближайший рабочий день."
                  hiddenFields={[
                    { name: 'pageId', value: 'CIV-05' },
                    { name: 'pageTitle', value: 'Земельный юрист в Липецке' },
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
