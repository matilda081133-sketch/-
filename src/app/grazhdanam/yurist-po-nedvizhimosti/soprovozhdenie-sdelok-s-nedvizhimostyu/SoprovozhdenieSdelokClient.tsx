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
      category: 'СЛОЖНАЯ ЦЕПОЧКА',
      title: 'Продажа квартиры в сложной встречной альтернативной сделке',
      problem: 'Семья продавала квартиру с ипотечным обременением и одновременно покупала дом с участком. В цепочке участвовали два банка, срыв одного этапа создавал риск потери задатка и жилья.',
      action: 'Разработали единую дорожную карту сделки, синхронизировали условия снятия обременения, открытие встречных аккредитивов, сроки фактического освобождения объектов и штрафные санкции за задержку.',
      result: 'Обе сделки зарегистрированы одновременно в один день. Семья переехала в новый дом без разрыва между передачей старой квартиры и получением права на новую.',
      isDemo: false
    },
    {
      category: 'ЗАГОРОДНАЯ НЕДВИЖИМОСТЬ',
      title: 'Покупка жилого дома и земельного участка с расхождениями в ЕГРН',
      problem: 'Покупатели нашли загородный дом, но площадь дома и конфигурация забора не совпадали с данными Росреестра, а капитальная баня и пристройка не стояли на кадастровом учёте.',
      action: 'Сопоставили технические и межевые планы, совместно с кадастровым инженером определили перечень необходимых согласований и обязали продавца узаконить постройки до проведения сделки купли-продажи.',
      result: 'Продавец зарегистрировал изменения за свой счёт. Покупатели приобрели юридически чистый объект с точными границами и зарегистрированными строениями.',
      isDemo: false
    }
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Получаем документы',
      desc: 'Изучаем описание сделки, проект договора и доступный комплект правоустанавливающих документов.'
    },
    {
      num: '02',
      title: 'Определяем формат',
      desc: 'Согласуем глубину проверки, критические сроки и фиксированную стоимость выбранного тарифа.'
    },
    {
      num: '03',
      title: 'Правовой аудит',
      desc: 'Проводим комплексную проверку объекта и продавца, формируем письменное заключение с картой рисков.'
    },
    {
      num: '04',
      title: 'Договор и расчёты',
      desc: 'Составляем юридически грамотный договор купли-продажи, согласуем условия безопасных расчётов.'
    },
    {
      num: '05',
      title: 'Регистрация и приёмка',
      desc: 'Сопровождаем подачу в Росреестр, контролируем переход права и подписание акта приёма-передачи объекта.'
    }
  ];

  const pricingTiers = [
    {
      title: <>Экспертиза договора</>,
      subtitle: 'Анализ условий',
      popular: false,
      price: 'от ХХХ ₽',
      features: [
        { name: 'Правовой анализ проекта договора', value: '✓' },
        { name: 'Выявление кабальных и рискованных условий', value: '✓' },
        { name: 'Подготовка правок в ваших интересах', value: '✓' }
      ],
      buttonText: 'Проверить договор',
      buttonHref: '#form'
    },
    {
      title: <>Проверка объекта и собственника</>,
      subtitle: 'Безопасность покупки',
      popular: true,
      badgeText: 'ВОСТРЕБОВАНО',
      price: 'от ХХХ ₽',
      features: [
        { name: 'История объекта и переходов прав', value: '✓' },
        { name: 'Проверка долгов, арестов и банкротства', value: '✓' },
        { name: 'Письменное заключение с рекомендациями', value: '✓' }
      ],
      buttonText: 'Заказать проверку',
      buttonHref: '#form'
    },
    {
      title: <>Полное сопровождение сделки</>,
      subtitle: 'Под ключ от аванса до ключей',
      popular: false,
      price: 'от ХХХ ₽',
      features: [
        { name: 'Глубокая проверка объекта и сторон', value: '✓' },
        { name: 'Составление всех договоров и соглашений', value: '✓' },
        { name: 'Безопасные расчёты и контроль Росреестра', value: '✓' }
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
        serviceType: 'Юридическое сопровождение сделок',
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
            name: 'Сопровождение сделок с недвижимостью',
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
        superTitle="Сделки с недвижимостью • Липецк"
        title={<>Сопровождение сделок <br />с недвижимостью в Липецке</>}
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '560px', textWrap: 'balance' }}>
            Проверим объект, собственника и документы, подготовим договор и безопасную схему расчётов, сопроводим регистрацию и передачу недвижимости. Риски обозначим до передачи денег.
          </span>
        }
        primaryCtaText="Проверить объект и схему"
        primaryCtaLink="#form"
        primaryCtaAnalytics="deal_support_hero_click"
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
                      <span style={{ fontSize: '4px', fontWeight: 'bold', color: 'rgba(23,50,77,0.4)', fontFamily: 'var(--font-serif)' }}>ДОГОВОР КУПЛИ</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '35px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end' }}>
                        <div style={{ width: '95px', height: '3px', background: 'rgba(23,50,77,0.2)' }}></div>
                        <div style={{ width: '55px', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>
                    </div>
                    <div style={{ width: '120px', height: '6px', background: 'var(--color-gold)', margin: '0 auto 25px auto' }}></div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ width: '100%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      <div style={{ width: '85%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      />

      {/* ═══ 2. СИТУАЦИИ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
            <span className="badge badge-gold" style={{ marginBottom: '16px' }}>СИТУАЦИИ</span>
            <h2 className="section-title">Когда стоит подключить юриста</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Любая ошибка в документах или схеме расчётов может привести к потере недвижимости, денег или долгим судебным спорам.
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '24px' }}>
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
                className="situation-card"
                style={{
                  background: '#FFFFFF',
                  padding: '28px 24px',
                  borderRadius: '16px',
                  border: '1px solid rgba(23, 50, 77, 0.08)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}
              >
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--color-gold)',
                  background: 'rgba(193, 160, 102, 0.1)',
                  padding: '4px 10px',
                  borderRadius: '4px',
                  display: 'inline-block',
                  marginBottom: '16px',
                  alignSelf: 'flex-start'
                }}>
                  {item.tag}
                </span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '12px', lineHeight: 1.3 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3. ЭТАПЫ СОПРОВОЖДЕНИЯ (HelpScope с золотыми бейджами) ═══ */}
      <section className="section" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
            <span className="badge badge-gold" style={{ marginBottom: '16px' }}>БЕЗОПАСНЫЙ ПРОЦЕСС</span>
            <h2 className="section-title">Контроль каждого этапа сделки</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Мы сопровождаем доверителя на всех стадиях: от первой проверки объекта до передачи ключей и подписания итогового передаточного акта.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {[
              {
                num: '01',
                title: 'До внесения аванса',
                desc: 'Анализируем объект и условия резервирования; фиксируем возврат денег, сроки и документы, которые продавец обязан предоставить.'
              },
              {
                num: '02',
                title: 'До основного договора',
                desc: 'Завершаем глубокую проверку, согласуем риски, договор купли-продажи, обязательные согласия супругов и безопасную схему расчётов.'
              },
              {
                num: '03',
                title: 'Подписание и расчёты',
                desc: 'Сверяем полномочия сторон, контролируем закладку средств в аккредитив или эскроу и подтверждение внесения денег.'
              },
              {
                num: '04',
                title: 'Государственная регистрация',
                desc: 'Отслеживаем прохождение документов в Росреестре. При приостановке оперативно устраняем технические или правовые замечания.'
              },
              {
                num: '05',
                title: 'Раскрытие денежных средств',
                desc: 'Проверяем наступление согласованных условий доступа продавца к деньгам (выписка ЕГРН без обременений, снятие с регистрационного учёта).'
              },
              {
                num: '06',
                title: 'Фактическая передача объекта',
                desc: 'Фиксируем состояние квартиры, показания приборов учёта, передачу ключей и отсутствие задолженностей в передаточном акте.'
              }
            ].map((step, idx) => (
              <div
                key={idx}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '32px 24px 24px 24px',
                  border: '1px solid rgba(23, 50, 77, 0.08)',
                  borderTop: '4px solid var(--color-gold)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '24px',
                  background: 'linear-gradient(135deg, var(--color-gold) 0%, #D4AF37 100%)',
                  color: '#FFFFFF',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  padding: '3px 12px',
                  borderRadius: '20px',
                  letterSpacing: '0.05em',
                  boxShadow: '0 2px 6px rgba(193, 160, 102, 0.4)'
                }}>
                  {step.num}
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-primary)', marginTop: '6px', marginBottom: '12px' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.93rem', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>
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
        title="Как проходит работа"
        subtitle="Пять шагов к безопасной покупке или продаже недвижимости."
        steps={processSteps}
      />

      {/* ═══ 6. СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость сопровождения сделок"
        subtitle="Фиксированная стоимость услуг без скрытых комиссий и процентов от цены недвижимости."
        tiers={pricingTiers}
      />

      {/* ═══ 7. ЧАСТЫЕ ВОПРОСЫ (FAQ) ═══ */}
      <FAQBlock
        faqs={faqs}
        title={<>Ответы на частые вопросы <br />по сопровождению сделок</>}
        subtitle="Полезные рекомендации юриста по проверке недвижимости, договорам и безопасным расчётам."
        ctaText="Задать свой вопрос"
        ctaLink="#form"
      />

      {/* ═══ 8. ФИНАЛЬНАЯ ФОРМА ═══ */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start' }}>
              <span className="badge badge-gold" style={{ marginBottom: '16px', alignSelf: 'flex-start' }}>
                КОНСУЛЬТАЦИЯ
              </span>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>
                Проверьте сделку до передачи денег
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '32px' }}>
                Укажите, покупаете или продаёте объект, что уже подписано и когда планируется сделка. Мы свяжемся с вами, оценим риски и согласуем состав проверки.
              </p>

              <div style={{
                background: 'var(--color-bg-light)',
                borderRadius: '16px',
                padding: '24px 28px',
                border: '1px solid rgba(23, 50, 77, 0.08)',
                marginTop: 'auto'
              }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '8px' }}>
                  Офис в Липецке
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.6 }}>
                  г. Липецк, ул. Советская, д. 35, офис 213.<br />
                  Телефон: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>+7 (4742) 20-15-25</a><br />
                  Пн–Пт с 9:00 до 18:00. Принимаем договоры на проверку онлайн.
                </p>
              </div>
            </div>

            <div>
              <ContactsForm title="Написать нам" subtitle="" buttonText="Оставить заявку" commentPlaceholder="Кратко опишите ситуацию по недвижимости…" hiddenFields={[{ name: 'service', value: 'Сопровождение сделок с недвижимостью' }]} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
