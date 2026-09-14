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

export default function SoprovozhdenieSdelokClient() {
  const faqs = [
    {
      q: 'Зачем нужен юрист, если у продавца или покупателя уже есть риелтор?',
      a: 'Риелтор заинтересован в совершении сделки и получении комиссии. Юрист действует строго в интересах своего доверителя, выявляет скрытые юридические дефекты, проверяет историю объекта и продавца, правит договор под ваши интересы и не допустит небезопасных расчётов.'
    },
    {
      q: 'Достаточно ли проверить свежую выписку из ЕГРН перед покупкой?',
      a: 'Категорически нет. Выписка показывает только зарегистрированные права на конкретную секунду. Она не отражает: скрытых банкротных рисков продавца, правопритязаний бывших супругов, временно выписанных лиц, нарушений прав несовершеннолетних при приватизации или маткапитале, а также цепочки недействительных предыдущих сделок.'
    },
    {
      q: 'Какой способ расчётов считается наиболее безопасным?',
      a: 'Наиболее безопасными являются безотзывный аккредитив и публичный депозитный счёт нотариуса или эскроу-счёт банка. Деньги поступают продавцу только после документального подтверждения регистрации перехода права собственности в Росреестре без обременений.'
    },
    {
      q: 'Что проверяется при покупке дома с земельным участком?',
      a: 'Проверяется соответствие фактических границ межеванию в ЕГРН, вид разрешённого использования (ВРИ) и категория земли, градостроительные регламенты и зоны с особыми условиями использования (ЗОУИТ — охранные зоны ЛЭП, газопроводов), а также легальность всех построек на участке.'
    },
    {
      q: 'В чём риски покупки недвижимости, оформленной по доверенности?',
      a: 'Доверенность может быть отозвана доверителем за час до сделки, признана недействительной по причине недееспособности доверителя, или доверитель может скончаться (что автоматически прекращает действие доверенности по ст. 188 ГК РФ). Требуется обязательная проверка полномочий и личный контакт с собственником.'
    },
    {
      q: 'Когда нужно привлекать юриста — до или после внесения аванса?',
      a: 'Исключительно до передачи любых денежных средств. Соглашение об авансе или задатке уже возлагает на вас финансовые и юридические обязательства. Передавать деньги следует только после проверки объекта и на условиях полного возврата при обнаружении дефектов.'
    }
  ];

  const cases = [
    {
      category: 'ПРОВЕРКА И ДОГОВОР',
      title: 'Покупка квартиры с наследственной историей и доверенностью',
      problem: 'Покупатель выбрал квартиру, которую продавали вскоре после оформления наследства. Переговоры вёл представитель по доверенности, а крупный аванс требовали внести до ознакомления с документами.',
      action: 'Восстановили цепочку прав и основание наследования, проверили полномочия представителя и судебную историю продавца, запросили недостающие документы, переработали условия договора и перевели расчёты на безотзывный аккредитив.',
      result: 'Клиент не принял на себя риски; сделка проведена безопасно после устранения сомнительных пунктов, а доступ продавца к деньгам открылся строго после регистрации права в Росреестре.',
      isDemo: false
    },
    {
      category: 'ЗАГОРОДНАЯ НЕДВИЖИМОСТЬ',
      title: 'Проверка дома и земельного участка со скрытыми ограничениями',
      problem: 'При покупке коттеджа выяснилось, что часть участка попадает в охранную зону газопровода, а пристроенная баня возведена с нарушением градостроительных отступов от границы с соседом.',
      action: 'Изучили ГПЗУ, правила землепользования и застройки района, провели согласование с продавцом об устранении нарушений и снижении цены договора с фиксацией условий в предварительном договоре.',
      result: 'Клиент спасён от покупки объекта под угрозой сноса; сделка скорректирована с гарантией отсутствия претензий органов надзора и соседей.',
      isDemo: false
    },
    {
      category: 'БЕЗОПАСНЫЕ РАСЧЁТЫ',
      title: 'Альтернативная сделка из трёх квартир с детскими долями',
      problem: 'Сложная цепочка сделок с участием органов опеки, ипотечных средств двух разных банков и выделением долей несовершеннолетним. Существовал риск разрыва цепочки на этапе регистрации.',
      action: 'Синхронизировали сроки подачи документов, условия раскрытия аккредитивов в обоих банках, согласовали распоряжение опеки и обеспечили одновременную регистрацию всех переходов прав.',
      result: 'Все три объекта успешно зарегистрированы в Росреестре за один регистрационный цикл; ни один из участников не понёс финансовых потерь.',
      isDemo: false
    }
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Анализ документов и истории',
      desc: 'Запрашиваем выписки из ЕГРН, архивные справки, проверяем собственника по базам судов, ФССП, реестру банкротств и нотариату.'
    },
    {
      num: '02',
      title: 'Правовой аудит рисков',
      desc: 'Выявляем скрытые права третьих лиц, маткапитал, приватизацию, супружеские доли и риск оспаривания сделки.'
    },
    {
      num: '03',
      title: 'Составление и правка договора',
      desc: 'Разрабатываем индивидуальный договор купли-продажи с гарантиями, заверениями об обстоятельствах и штрафами.'
    },
    {
      num: '04',
      title: 'Безопасные расчёты',
      desc: 'Организуем расчёты через безотзывный аккредитив, депозит нотариуса или эскроу-счёт с чёткими условиями раскрытия.'
    },
    {
      num: '05',
      title: <>Регистрация <br />и передаточный акт</>,
      desc: 'Контролируем регистрацию в Росреестре, отсутствие приостановок и подписание акта приёма-передачи объекта.'
    }
  ];

  const pricingTiers = [
    {
      title: <>Экспертиза договора</>,
      subtitle: 'Анализ проекта и правок',
      popular: false,
      price: 'от 10 000 ₽',
      features: [
        { name: 'Правовой анализ проекта договора', value: '✓' },
        { name: 'Выявление кабальных и рискованных условий', value: '✓' },
        { name: 'Подготовка правок в ваших интересах', value: '✓' },
        { name: 'Письменные рекомендации юриста', value: '✓' }
      ],
      buttonText: 'Проверить договор',
      buttonHref: '#form'
    },
    {
      title: <>Проверка объекта и сторон</>,
      subtitle: 'Комплексный юридический аудит',
      popular: true,
      badgeText: 'ВОСТРЕБОВАНО',
      price: 'от 15 000 ₽',
      features: [
        { name: 'История объекта и переходов прав', value: '✓' },
        { name: 'Проверка собственников по базам ФССП и судов', value: '✓' },
        { name: 'Анализ банкротных и супружеских рисков', value: '✓' },
        { name: 'Письменное правовое заключение', value: '✓' },
        { name: 'Инструкция по безопасным расчётам', value: '✓' }
      ],
      buttonText: 'Заказать аудит',
      buttonHref: '#form'
    },
    {
      title: <>Сопровождение под ключ</>,
      subtitle: 'От аванса до ключей и Росреестра',
      popular: false,
      price: 'от 35 000 ₽',
      features: [
        { name: 'Полный аудит объекта и всех собственников', value: '✓' },
        { name: 'Составление предварительного и основного договоров', value: '✓' },
        { name: 'Организация расчётов (аккредитив/эскроу)', value: '✓' },
        { name: 'Личное присутствие на сделке', value: '✓' },
        { name: 'Контроль регистрации и передачи объекта', value: '✓' }
      ],
      buttonText: 'Сопроводить сделку',
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
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/soprovozhdenie-sdelok-s-nedvizhimostyu/#service',
        name: 'Сопровождение сделок с недвижимостью в Липецке',
        serviceType: 'Юридическое сопровождение сделок с недвижимостью',
        provider: {
          '@id': 'https://dejure-help.ru/#legalservice'
        },
        areaServed: ['Липецк', 'Липецкая область'],
        url: 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/soprovozhdenie-sdelok-s-nedvizhimostyu/',
        description: 'Юридическое сопровождение покупки и продажи недвижимости в Липецке: проверка объекта и сторон, договор, безопасные расчёты, регистрация и приёмка.'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/soprovozhdenie-sdelok-s-nedvizhimostyu/#breadcrumbs',
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
            name: 'Сопровождение сделок',
            item: 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/soprovozhdenie-sdelok-s-nedvizhimostyu/'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/soprovozhdenie-sdelok-s-nedvizhimostyu/#faq',
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
            <span style={{ color: 'var(--color-text-main)' }}>Сопровождение сделок</span>
          </>
        }
        superTitle="Сделки с недвижимостью • проверка • расчёты • Липецк"
        title={<>Сопровождение сделок <br />с недвижимостью <br />в Липецке</>}
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '560px', textWrap: 'balance' }}>
            Проверим объект, собственника и документы, подготовим договор и безопасную схему расчётов, сопроводим регистрацию и передачу объекта. Риски обозначим до передачи денег.
          </span>
        }
        primaryCtaText="Проверить объект и схему"
        primaryCtaLink="#form"
        primaryCtaAnalytics="deal_support_hero_click"
        primaryCtaSubtext="Перезвоним в течение 15 минут в рабочее время"
        secondaryCtaText="Ситуации клиентов"
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
                    <div style={{ position: 'absolute', top: '25px', left: '25px', width: '75px', height: '25px', border: '1.5px solid rgba(23, 50, 77, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-5deg)' }}>
                      <span style={{ fontSize: '4.5px', fontWeight: 'bold', color: 'rgba(23,50,77,0.4)', fontFamily: 'var(--font-serif)' }}>ЕГРН ВЫПИСКА</span>
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
                    </div>
                  </div>
                </div>
              </div>

              <div className="doc-wrapper-float-2">
                <div className="doc-sheet doc-sheet-2">
                  <div style={{ padding: '28px 22px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ position: 'absolute', top: '22px', left: '22px', width: '110px', height: '30px', border: '1px solid #C1A066', color: '#C1A066', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-4deg)', opacity: 0.95 }}>
                      <div style={{ fontFamily: 'var(--font-serif)', fontSize: '5px', textAlign: 'center', fontWeight: 'bold', lineHeight: 1.2 }}>
                        ДОГОВОР КУПЛИ-ПРОДАЖИ<br/>
                        ОБЪЕКТА НЕДВИЖИМОСТИ
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
                        <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Покупатель:</div>
                        <div style={{ width: '70px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '8px' }}></div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                        <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Продавец:</div>
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
                        <span style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)', letterSpacing: '0.05em' }}>АУДИТ СДЕЛКИ</span>
                        <span style={{ fontSize: '5px', color: 'var(--color-primary)' }}>Безопасные расчёты</span>
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
                        <rect x="25" y="15" width="150" height="70" fill="rgba(193, 160, 102, 0.1)" stroke="#C1A066" strokeWidth="1.5" />
                        <line x1="85" y1="15" x2="85" y2="85" stroke="#C1A066" strokeWidth="1" />
                        <line x1="25" y1="55" x2="85" y2="55" stroke="#C1A066" strokeWidth="1" />
                        <text x="35" y="38" fill="#10273B" fontSize="6.5" fontWeight="bold">Гостиная</text>
                        <text x="35" y="72" fill="#10273B" fontSize="6.5" fontWeight="bold">Кухня</text>
                        <text x="105" y="45" fill="#10273B" fontSize="7" fontWeight="bold">АККРЕДИТИВ</text>
                        <text x="98" y="65" fill="#1B8738" fontSize="6" fontWeight="bold">✓ Чистота проверена</text>
                      </svg>
                    </div>

                    <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '8px', borderTop: '1px solid rgba(23,50,77,0.15)' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <div style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)' }}>ЮК «ДЕ-ЮРЕ»</div>
                        <div style={{ fontSize: '9.5px', color: 'rgba(23,50,77,0.75)', fontFamily: 'var(--font-sans)' }}>Безопасные сделки • Липецк</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
        trustItems={[
          { text: 'Глубокая проверка истории объекта и собственников.' },
          { text: 'Организация расчётов через безотзывный аккредитив или эскроу.' },
          { text: 'Защита покупателя и продавца от потери имущества и денег.' }
        ]}
      />

      {/* ═══ 2. СИТУАЦИИ ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Когда стоит подключить юриста
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block' }}>
                Любая ошибка в документах или схеме расчётов может привести
              </span>
              <span className="hero-title-span-mobile" style={{ display: 'block' }}>
                к потере недвижимости, денег или долгим судебным спорам.
              </span>
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '24px', marginBottom: '40px' }}>
            {[
              {
                tag: 'ПОКУПКА КВАРТИРЫ',
                title: 'Покупаете квартиру',
                desc: 'Проверим историю объекта и продавца, договор, аванс, расчёты, регистрацию и условия освобождения жилья.'
              },
              {
                tag: 'ПРОДАЖА ОБЪЕКТА',
                title: 'Продаёте недвижимость',
                desc: 'Подготовим условия, при которых вы получите деньги в полном объёме и передадите объект без неоправданных рисков.'
              },
              {
                tag: 'АЛЬТЕРНАТИВА',
                title: 'Сделка в цепочке',
                desc: 'Согласуем встречные договоры, сроки, расчёты и последствия задержки любого из участников альтернативной покупки.'
              },
              {
                tag: 'ДОМ С УЧАСТКОМ',
                title: 'Дом с землёй',
                desc: 'Сопоставим сведения о доме и земельном участке с фактическим объектом, проверим ПЗЗ, границы и охранные зоны.'
              },
              {
                tag: 'ДОЛИ И ДЕТИ',
                title: 'Доли или маткапитал',
                desc: 'Проверим обязательную нотариальную форму, согласия органов опеки, приказы и условия выделения детских долей.'
              },
              {
                tag: 'ДОВЕРЕННОСТЬ',
                title: 'Сделка по доверенности',
                desc: 'Проверим подлинность доверенности, действительность полномочий доверителя и риски возможной отмены.'
              },
              {
                tag: 'НАСЛЕДСТВО',
                title: 'Объект после наследства',
                desc: 'Оценим риск появления неучтённых наследников, обязательных долей и судебных притязаний к покупателю.'
              },
              {
                tag: 'ПРОВЕРКА РИЕЛТОРА',
                title: 'Договор от риелтора',
                desc: 'Проведём независимую юридическую экспертизу и устраним пункты, ущемляющие интересы вашей стороны.'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="hover-lift"
                style={{
                  padding: '28px 24px',
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', opacity: 0.06, pointerEvents: 'none' }}>
                  <svg width="90" height="90" viewBox="0 0 24 24" fill="var(--color-deep-blue)">
                    <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <div style={{ 
                  fontSize: '11px', 
                  fontWeight: 600, 
                  color: 'var(--color-gold)', 
                  marginBottom: '12px',
                  background: 'rgba(193, 160, 102, 0.1)',
                  padding: '3px 8px',
                  alignSelf: 'flex-start',
                  borderRadius: '2px'
                }}>
                  {item.tag}
                </div>
                <h3 style={{ fontSize: '17px', fontFamily: 'var(--font-serif)', fontWeight: 600, color: 'var(--color-deep-blue)', lineHeight: 1.35, margin: '0 0 10px 0' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

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
                Планируете внести аванс или задаток?
              </h3>
              <p style={{ margin: '0', fontSize: '15px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5, maxWidth: '640px' }}>
                Покажите предварительный договор юристу до передачи денег. Мы сформулируем условия возврата средств при отказе банка или выявлении юридических дефектов.
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <a 
                href="#form" 
                className="btn white-btn-custom" 
                style={{ display: 'inline-block', textAlign: 'center', fontSize: '15px' }}
              >
                Проверить перед авансом
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. ЭТАПЫ СОПРОВОЖДЕНИЯ ═══ */}
      <section className="section" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Контроль каждого этапа сделки
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Мы сопровождаем доверителя на всех стадиях: от первой проверки объекта до передачи ключей и подписания итогового передаточного акта.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {[
              {
                title: 'До внесения аванса',
                desc: 'Анализируем объект и условия резервирования; фиксируем возврат денег, сроки и документы, которые продавец обязан предоставить.'
              },
              {
                title: 'До основного договора',
                desc: 'Завершаем глубокую проверку, согласуем риски, договор купли-продажи, обязательные согласия супругов и безопасную схему расчётов.'
              },
              {
                title: 'Подписание и расчёты',
                desc: 'Сверяем полномочия сторон, контролируем закладку средств в аккредитив или эскроу и подтверждение внесения денег.'
              },
              {
                title: 'Государственная регистрация',
                desc: 'Отслеживаем прохождение документов в Росреестре. При приостановке оперативно устраняем технические или правовые замечания.'
              },
              {
                title: 'Раскрытие денежных средств',
                desc: 'Проверяем наступление согласованных условий доступа продавца к деньгам (выписка ЕГРН без обременений, снятие с регистрационного учёта).'
              },
              {
                title: 'Фактическая передача объекта',
                desc: 'Фиксируем состояние квартиры, показания приборов учёта, передачу ключей и отсутствие задолженностей в передаточном акте.'
              }
            ].map((step, idx) => (
              <div
                key={idx}
                className="hover-lift"
                style={{
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  padding: '36px 30px 32px 30px',
                  border: '1px solid var(--color-border)',
                  borderTop: '4px solid var(--color-gold)',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative'
                }}
              >
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
                  {step.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4. КЕЙСЫ ═══ */}
      <CasesBlock
        title="Примеры сопровождения сделок"
        showDemoWarning={false}
        resultLabel="Результат"
        cases={cases}
      />

      {/* ═══ 5. ПРОЦЕСС РАБОТЫ ═══ */}
      <ProcessBlock
        title="Как проходит сопровождение"
        subtitle="Пять шагов для безопасного проведения покупки или продажи недвижимости."
        steps={processSteps}
      />

      {/* ═══ 6. ЧТО ПРОВЕРЯЕТ ЮРИСТ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Что проверяет юрист перед сделкой
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Анализ строится на сопоставлении десятков официальных реестров и правовых документов.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '28px', marginBottom: '32px' }}>
            {/* Карточка 1: Проверка юридической судьбы объекта */}
            <div style={{
              background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-primary)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingBottom: '12px', borderBottom: '1px solid rgba(23, 50, 77, 0.1)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                </svg>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0 }}>
                  Проверка юридической судьбы объекта
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Анализируем историю прав, ограничения и законность владения для исключения риска истребования имущества.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>История всех переходов прав и цепочка оснований</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Договоры купли-продажи, приватизация, дарение, свидетельства о праве на наследство и судебные решения.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Обременения, аресты, залоги и судебные споры</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Наличие зарегистрированных и скрытых арестов, ипотек, залогов, запретов ФССП и претензий третьих лиц.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Материнский капитал и выполнение обязанности по долям</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Использование субсидий и маткапитала при покупке, соблюдение законных прав несовершеннолетних детей.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Техническая документация и планировка</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Соответствие фактической планировки поэтажному плану БТИ, выявление неузаконенных перепланировок.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Карточка 2: Проверка благонадёжности собственников */}
            <div style={{
              background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-gold)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingBottom: '12px', borderBottom: '1px solid rgba(23, 50, 77, 0.1)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="8.5" cy="7" r="4"></circle>
                  <polyline points="17 11 19 13 23 9"></polyline>
                </svg>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0 }}>
                  Проверка благонадёжности собственников
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Изучаем финансовое состояние, семейные обязательства и дееспособность продавца для предотвращения отмены сделки.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Банкротные риски и долговые обязательства</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Проверка продавца по ЕФРСБ, картотеке арбитражных дел и базам ФССП на риск банкротного оспаривания.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Супружеские права и согласие на отчуждение</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Брачные договоры, нотариальные согласия супругов (включая бывших), подтверждение единоличной собственности.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Дееспособность и подлинность доверенностей</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Проверка подлинности доверенностей по реестру ФНП, полномочий представителей и дееспособности сторон.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Действительность паспортов и налоговый статус</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Проверка паспортов по учётам МВД, отсутствие запретов на сделки и риска субсидиарной ответственности.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Информационная плашка */}
          <div style={{
            background: 'var(--color-white)',
            padding: '24px 28px',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-gold)',
            boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)',
            fontSize: '14.5px',
            color: 'var(--color-deep-blue)',
            lineHeight: 1.65,
            marginBottom: '32px'
          }}>
            <strong style={{ color: 'var(--color-primary)' }}>Письменное заключение юриста:</strong> по итогам проверки вы получаете отчёт с оценкой юридической чистоты объекта, перечнем выявленных факторов риска и чёткими рекомендациями по согласованию условий договора и схемы расчётов.
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#form" className="btn btn-primary" style={{ display: 'inline-block' }}>
              Заказать проверку перед сделкой
            </a>
          </div>
        </div>
      </section>

      {/* ═══ 7. СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость сопровождения сделок с недвижимостью"
        subtitle="Фиксированная стоимость каждого пакета согласуется до начала работы. Отдельно согласуются выезды и сложные цепочки сделок."
        tiers={pricingTiers}
      />

      {/* ═══ 8. ЧАСТЫЕ ВОПРОСЫ (FAQ) ═══ */}
      <FAQBlock
        faqs={faqs}
        title={<>Ответы на частые вопросы <br />по сопровождению сделок</>}
        subtitle="Разъяснения по проверке юридической чистоты, безопасным расчётам и рискам доверенностей."
        ctaText="Задать свой вопрос"
        ctaLink="#form"
      />

      {/* ═══ 9. СВЯЗАННЫЕ УСЛУГИ ═══ */}
      <section className="section bg-cream" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '700px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Связанные услуги
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Смежные направления помощи по защите прав на недвижимость.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '20px' }}>
            <Link href="/grazhdanam/yurist-po-nedvizhimosti/spory-s-zastrojshchikom/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <div 
                className="card" 
                style={{ 
                  height: '100%', 
                  padding: '32px', 
                  background: 'var(--color-white)', 
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  borderRadius: '0',
                  display: 'flex', 
                  flexDirection: 'column'
                }}
              >
                <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                  Споры с застройщиком
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Взыскание неустойки по ДДУ, расторжение договора и компенсация за строительные дефекты.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '15px', fontWeight: 600 }}>
                  Подробнее →
                </div>
              </div>
            </Link>

            <Link href="/grazhdanam/yurist-po-nedvizhimosti/priznanie-prava-sobstvennosti-na-nedvizhimost/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <div 
                className="card" 
                style={{ 
                  height: '100%', 
                  padding: '32px', 
                  background: 'var(--color-white)', 
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  borderRadius: '0',
                  display: 'flex', 
                  flexDirection: 'column'
                }}
              >
                <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                  Признание права собственности
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Судебное признание права на квартиру, дом, самовольную постройку или гараж.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '15px', fontWeight: 600 }}>
                  Подробнее →
                </div>
              </div>
            </Link>

            <Link href="/grazhdanam/yurist-po-nedvizhimosti/osparivanie-sdelok-s-nedvizhimostyu/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <div 
                className="card" 
                style={{ 
                  height: '100%', 
                  padding: '32px', 
                  background: 'var(--color-white)', 
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  borderRadius: '0',
                  display: 'flex', 
                  flexDirection: 'column'
                }}
              >
                <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                  Оспаривание сделок
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Защита от недействительных сделок, мошенничества и возврат незаконно отчуждённого жилья.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '15px', fontWeight: 600 }}>
                  Подробнее →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 10. ФИНАЛЬНАЯ ФОРМА ═══ */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start', paddingTop: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>Связаться с нами</span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                Обсудите сделку с юристом по недвижимости
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Кратко опишите объект, планируемый способ расчётов и текущую стадию переговоров. Мы оценим риски и согласуем формат сопровождения.
              </p>
              <div style={{ marginTop: '32px' }}>
                <div style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <span>Перезвоним вам в течение 15 минут в рабочее время</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
              <div style={{ background: 'var(--gradient-cream)', padding: '40px', borderRadius: '0', boxShadow: '0 8px 24px rgba(0,0,0,0.15)', width: '100%', border: '1px solid rgba(0,0,0,0.06)' }}>
                <ContactsForm 
                  title="Написать нам" 
                  subtitle="" 
                  buttonText="Получить консультацию" 
                  commentPlaceholder="Кратко опишите сделку (квартира, дом, аванс)…" 
                  subtext="Если вы оставите заявку вечером или в выходной день, мы перезвоним в ближайший рабочий день."
                  hiddenFields={[{ name: 'service', value: 'Сопровождение сделок с недвижимостью' }]} 
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
