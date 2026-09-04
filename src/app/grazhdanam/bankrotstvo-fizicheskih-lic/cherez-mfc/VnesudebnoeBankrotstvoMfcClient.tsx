'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MilitaryHero from '@/components/MilitaryHero';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import CasesBlock, { CaseData } from '@/components/CasesBlock';
import SpecialistBlock from '@/components/SpecialistBlock';
import PricingBlock, { PricingTier } from '@/components/PricingBlock';
import ProcessBlock, { ProcessStep } from '@/components/ProcessBlock';

export default function VnesudebnoeBankrotstvoMfcClient() {
  const cases: CaseData[] = [
    {
      category: 'Пенсионеры / Ст. 223.2 № 127-ФЗ',
      title: 'Списание долгов 680 000 ₽ пенсионера через МФЦ',
      problem: 'Пенсионер имел непогашенные кредиты на 680 000 ₽. Из-за открытого исполнительного производства с пенсии удерживалось 50%, средств на жизнь катастрофически не хватало.',
      action: 'Проверили соблюдение годичного срока предъявления исполнительного документа, запросили справку СФР о пенсии и справку ФССП, сформировали корректный реестр кредиторов и подали заявление в МФЦ.',
      result: 'МФЦ включил сведения в ЕФРСБ, удержания с пенсии немедленно прекратились; через 6 месяцев вся сумма долга 680 000 ₽ списана без суда и расходов.'
    },
    {
      category: 'Оконченные ИП / Без имущества',
      title: 'Списание микрозаймов и кредитов на 420 000 ₽',
      problem: 'Доверитель накопил задолженность в 8 микрофинансовых организациях и 2 банках на общую сумму 420 000 ₽. Приставы окончили производство по п. 4 ч. 1 ст. 46, но коллекторы продолжали звонки.',
      action: 'Провели аудит закрытых производств на сайте ФССП, подтвердили отсутствие нового открытого производства, зафиксировали полный список кредиторов с договорами и сопроводили регистрацию в МФЦ.',
      result: 'Через 6 месяцев все долги перед 10 кредиторами полностью аннулированы, звонки коллекторов и требования прекращены навсегда.'
    },
    {
      category: 'Получатели детских пособий',
      title: 'Списание 890 000 ₽ матери-одиночке с пособиями',
      problem: 'Женщина с двумя детьми имела долги по кредитным картам на 890 000 ₽. Единственный доход — единое детское пособие, исполнительный лист находился на исполнении более 1 года.',
      action: 'Получили справку о назначении единого пособия, справку от судебных приставов о длительности исполнения, составили список кредиторов с точным расчётом процентов и подали комплект в МФЦ.',
      result: 'Заявление принято с первого раза, публикация в Федресурсе размещена без замечаний; по истечении 6 месяцев долг списан в полном объёме.'
    }
  ];

  const faqs = [
    {
      q: 'Какая сумма долга подходит для банкротства через МФЦ?',
      a: 'По закону № 127-ФЗ сумма всех денежных обязательств гражданина должна составлять от 25 000 до 1 000 000 рублей. В расчёт включаются кредиты, займы в МФО, налоги, штрафы, коммунальные долги и договоры поручительства.'
    },
    {
      q: 'Сколько стоит процедура в МФЦ?',
      a: 'Сама процедура внесудебного банкротства через МФЦ бесплатна: государственная пошлина не взимается, услуги арбитражного управляющего оплачивать не нужно, публикация в ЕФРСБ также осуществляется бесплатно.'
    },
    {
      q: 'Сколько длится процедура списания?',
      a: 'Ровно 6 месяцев со дня включения сведений о возбуждении процедуры в Единый федеральный реестр сведений о банкротстве (ЕФРСБ). По истечении этого срока долги признаются безнадёжными и списываются.'
    },
    {
      q: 'Что будет, если забыть указать кого-то из кредиторов?',
      a: 'Списываются только те долги и перед теми кредиторами, которые были прямо и корректно указаны заявителем в списке при подаче заявления. Забытый или неуказанный долг останется действующим и не спишется.'
    },
    {
      q: 'Заберут ли единственное жилье?',
      a: 'Нет. Единственное пригодное для проживания жилье (если оно не находится в ипотеке или залоге) защищено статьей 446 ГПК РФ и не подлежит изъятию ни при каких обстоятельствах.'
    },
    {
      q: 'Можно ли выезжать за границу во время процедуры?',
      a: 'При внесудебном банкротстве через МФЦ автоматического запрета на выезд за пределы РФ не вводится. Приостанавливаются все действующие ограничения, наложенные судебными приставами.'
    },
    {
      q: 'Может ли банк перевести процедуру в арбитражный суд?',
      a: 'Кредитор имеет право подать заявление в суд только при наличии законных оснований: если найдено неучтенное имущество, оспоримые сделки за 3 года или заявитель существенно занизил сумму долга. Мы проверяем эти риски до подачи документов.'
    },
    {
      q: 'Когда можно повторно подать на банкротство через МФЦ?',
      a: 'Повторное обращение с заявлением о внесудебном банкротстве возможно не ранее чем через 5 лет после дня завершения предыдущей процедуры.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Анализ и проверка условий',
      subtitle: 'Первичный аудит возможности списания долгов',
      price: 'от 3 000 ₽',
      features: [
        { name: 'Проверка баз ФССП и исполнительных производств', value: '✓' },
        { name: 'Расчёт общей суммы долга и проверка лимитов', value: '✓' },
        { name: 'Оценка рисков по сделкам и имуществу за 3 года', value: '✓' },
        { name: 'Письменное заключение о возможности списания', value: '✓' }
      ],
      buttonText: 'Получить аудит',
      buttonHref: '#form'
    },
    {
      title: 'Подготовка реестра и пакета',
      subtitle: 'Формирование полного пакета для подачи в МФЦ',
      price: 'от 9 000 ₽',
      popular: true,
      badgeText: 'Популярно',
      features: [
        { name: 'Сбор обязательных справок (СФР, ФССП, банки)', value: '✓' },
        { name: 'Составление списка кредиторов по форме Минэка', value: '✓' },
        { name: 'Заполнение заявления о внесудебном банкротстве', value: '✓' },
        { name: 'Пошаговая инструкция по подаче в МФЦ г. Липецка', value: '✓' }
      ],
      buttonText: 'Заказать подготовку',
      buttonHref: '#form'
    },
    {
      title: 'Полное сопровождение под ключ',
      subtitle: 'Сопровождение юристом от сбора до списания долга',
      price: 'от 18 000 ₽',
      features: [
        { name: 'Сбор всех справок и документов без вашего участия', value: '✓' },
        { name: 'Формирование и подача комплекта в МФЦ', value: '✓' },
        { name: 'Контроль публикации в Федресурсе (ЕФРСБ)', value: '✓' },
        { name: 'Защита от претензий кредиторов в течение 6 месяцев', value: '✓' }
      ],
      buttonText: 'Списание под ключ',
      buttonHref: '#form'
    }
  ];

  const steps: ProcessStep[] = [
    {
      num: '01',
      title: 'Аудит долгов и производств в ФССП',
      desc: 'Проверяем основания окончания исполнительных производств по базам ФССП, дату их открытия, сумму долгов и отсутствие запретов.'
    },
    {
      num: '02',
      title: 'Сбор обязательных справок и сведений',
      desc: 'Получаем справки от приставов, СФР (о пенсии или детских пособиях), банков и формируем полный перечень долговых обязательств.'
    },
    {
      num: '03',
      title: 'Формирование реестра всех кредиторов',
      desc: 'Составляем список кредиторов строго по установленной форме Минэкономразвития РФ с точным указанием сумм основного долга, штрафов и пеней.'
    },
    {
      num: '04',
      title: 'Подача в МФЦ и публикация в ЕФРСБ',
      desc: 'Подаем заявление в МФЦ г. Липецка. В течение 3 рабочих дней МФЦ проверяет сведения и публикует сообщение в Федресурсе (ЕФРСБ).'
    },
    {
      num: '05',
      title: '6 месяцев моратория и списание долга',
      desc: 'В течение 6 месяцев действует мораторий на взыскание. По истечении срока гражданин полностью освобождается от уплаты всех указанных долгов.'
    },
    {
      isBanner: true,
      title: 'Дистанционный формат работы',
      desc: 'Для жителей Липецкой области и других регионов доступно дистанционное оформление документов. Защищенный канал передачи копий согласуем после звонка.'
    }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LegalService',
        '@id': 'https://dejure-help.ru/#organization',
        'name': 'ЮК «Де-Юре»',
        'url': 'https://dejure-help.ru',
        'logo': 'https://dejure-help.ru/images/logo_dark.png',
        'telephone': '+7 (910) 350-31-11',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'ул. Советская, д. 35, оф. 213',
          'addressLocality': 'Липецк',
          'addressRegion': 'Липецкая область',
          'addressCountry': 'RU'
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/grazhdanam/bankrotstvo-fizicheskih-lic/cherez-mfc/#breadcrumbs',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Главная', 'item': 'https://dejure-help.ru/' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Гражданам', 'item': 'https://dejure-help.ru/grazhdanam/' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Банкротство физических лиц', 'item': 'https://dejure-help.ru/grazhdanam/bankrotstvo-fizicheskih-lic/' },
          { '@type': 'ListItem', 'position': 4, 'name': 'Внесудебное банкротство через МФЦ', 'item': 'https://dejure-help.ru/grazhdanam/bankrotstvo-fizicheskih-lic/cherez-mfc/' }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/grazhdanam/bankrotstvo-fizicheskih-lic/cherez-mfc/#service',
        'url': 'https://dejure-help.ru/grazhdanam/bankrotstvo-fizicheskih-lic/cherez-mfc/',
        'name': 'Внесудебное банкротство через МФЦ в Липецке',
        'provider': { '@id': 'https://dejure-help.ru/#organization' },
        'areaServed': {
          '@type': 'AdministrativeArea',
          'name': 'Липецк и Липецкая область'
        },
        'description': 'Бесплатное внесудебное списание долгов от 25 000 до 1 000 000 рублей через МФЦ в Липецке. Проверка условий, сбор справок, подготовка списка кредиторов по закону № 127-ФЗ.'
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/grazhdanam/bankrotstvo-fizicheskih-lic/cherez-mfc/#faq',
        'mainEntity': faqs.map(faq => ({
          '@type': 'Question',
          'name': faq.q,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.a
          }
        }))
      },
      {
        '@type': 'Person',
        '@id': 'https://dejure-help.ru/specialisty/#nacheshnikov',
        'name': 'Владимир Владимирович Начешников',
        'jobTitle': 'Ведущий юрист по банкротству',
        'worksFor': { '@id': 'https://dejure-help.ru/#organization' }
      }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      {/* ═══ БЛОК 1: HERO ═══ */}
      <MilitaryHero
        breadcrumbs={
          <>
            <Link href="/">Главная</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/grazhdanam/">Гражданам</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/grazhdanam/bankrotstvo-fizicheskih-lic/">Банкротство физических лиц</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Внесудебное банкротство через МФЦ</span>
          </>
        }
        superTitle="Банкротство физических лиц в Липецке"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Внесудебное банкротство
            </span>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              через МФЦ в Липецке
            </span>
          </span>
        }
        subtitle={
          <>
            <style dangerouslySetInnerHTML={{__html: `
              @media (min-width: 992px) {
                .hero-sub-span-desktop {
                  white-space: nowrap !important;
                }
              }
            `}} />
            <span style={{ display: 'inline-block', maxWidth: '100%' }}>
              <span className="hero-sub-span-desktop" style={{ display: 'block' }}>
                Бесплатное списание долгов от 25 000 до 1 000 000 ₽ по ст. 223.2 закона № 127-ФЗ.
              </span>
              <span className="hero-sub-span-desktop" style={{ display: 'block' }}>
                Проверим основания в ФССП, соберем обязательные справки, составим реестр
              </span>
              <span className="hero-sub-span-desktop" style={{ display: 'block' }}>
                кредиторов и сопроводим процедуру до полного списания задолженности.
              </span>
            </span>
          </>
        }
        primaryCtaText="Проверить условия списания"
        primaryCtaLink="#form"
        primaryCtaAnalytics="cta_click"
        primaryCtaSubtext={
          <>
            <span style={{ display: 'inline-block' }}>Сообщите сумму долга, наличие оконченных производств или статус:</span> <br className="hidden-mobile" />
            <span style={{ display: 'inline-block' }}>пенсионер, получатель пособий: <a href="tel:+79103503111" data-analytics="phone_click">+7 (910) 350-31-11</a></span>
          </>
        }
        trustItems={[
          { text: 'Списание долгов от 25 000 до 1 000 000 ₽ без суда и госпошлин' },
          { text: 'Для граждан с закрытыми ИП, пенсионеров и получателей детских пособий' },
          { text: 'Точный список кредиторов — ни один долг не останется не списанным' }
        ]}
        imageUrl="/images/nacheshnikov.jpg"
        imageName="Владимир Владимирович Начешников"
        imageSubtitle="Ведущий юрист по банкротству граждан, специалист ЮК «Де-Юре»"
        imageObjectPosition="center 20%"
      />

      {/* ═══ БЛОК 2: КОГДА ВОЗМОЖНО ВНЕСУДЕБНОЕ БАНКРОТСТВО ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                Условия и критерии списания
              </span>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                долгов через МФЦ
              </span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Внесудебная процедура доступна гражданам, подходящим под один из установленных</span> <br className="hidden-mobile" />
              <span style={{ display: 'inline-block' }}>законом № 127-ФЗ критериев. Проверим соответствие всем требованиям до подачи заявления.</span>
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '32px' }}>
            {[
              {
                tag: 'Сумма долга',
                title: 'От 25 000 до 1 000 000 ₽',
                desc: 'Учитываются кредиты, займы в МФО, кредитные карты, налоги, штрафы, ЖКХ и договоры поручительства.'
              },
              {
                tag: 'Закрытые ИП',
                title: 'Окончено по п. 4 ч. 1 ст. 46',
                desc: 'Приставы вернули исполнительный лист из-за отсутствия имущества, и нет новых открытых исполнительных производств.'
              },
              {
                tag: 'Пенсионеры',
                title: 'Пенсия — основной доход',
                desc: 'Исполнительный документ старше 1 года, нет имущества для взыскания, кроме единственного жилья и пенсии.'
              },
              {
                tag: 'Детские пособия',
                title: 'Получатели единого пособия',
                desc: 'Граждане, получающие пособие на ребенка, при давности исполнительного документа от 1 года.'
              },
              {
                tag: 'Длительные долги',
                title: 'Исполнение более 7 лет',
                desc: 'Исполнительный документ находится на исполнении у приставов более 7 лет и не исполнен полностью.'
              },
              {
                tag: 'Без расходов',
                title: '0 ₽ пошлин и управляющих',
                desc: 'Процедура абсолютно бесплатна: без оплаты депозита арбитражного управляющего и госпошлин.'
              }
            ].map((item, i) => (
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
                  fontSize: '12px',
                  fontWeight: 700,
                  color: 'var(--color-gold)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '14px',
                  background: 'rgba(193, 160, 102, 0.1)',
                  padding: '4px 10px',
                  alignSelf: 'flex-start',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {item.tag}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '18px',
                  fontWeight: 600,
                  color: 'var(--color-deep-blue)',
                  margin: '0 0 14px 0',
                  lineHeight: 1.35,
                  position: 'relative',
                  zIndex: 1
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '15px',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.6,
                  margin: 0,
                  position: 'relative',
                  zIndex: 1
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            background: 'var(--color-white)',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-gold)',
            padding: '24px 30px',
            boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)'
          }}>
            <p style={{ margin: 0, fontSize: '14.5px', color: 'var(--color-deep-blue)', lineHeight: 1.6 }}>
              <strong>Важное правило списания:</strong> Через МФЦ списываются обязательства только перед теми кредиторами и только в тех суммах, которые были указаны заявителем в приложении к заявлению. Неуказанные долги продолжат действовать.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: КАТЕГОРИИ ГРАЖДАН И СТРАТЕГИЯ ПРОВЕРКИ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                Кому доступно списание долгов
              </span>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                и какие обязательства аннулируются
              </span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>По статье 223.2 закона № 127-ФЗ процедура имеет четкие основания и требования к документам.</span> <br className="hidden-mobile" />
              <span style={{ display: 'inline-block' }}>Проводим предварительный аудит, чтобы исключить риск возврата заявления из МФЦ.</span>
            </p>
          </div>

          {/* Темно-синяя карточка-навигатор */}
          <div style={{
            background: 'linear-gradient(135deg, #10273B 0%, #17375E 50%, #0D1E2D 100%)',
            border: '1px solid rgba(193, 160, 102, 0.4)',
            borderTop: '3px solid var(--color-gold)',
            boxShadow: '0 8px 30px rgba(16, 39, 59, 0.18)',
            padding: '36px 32px',
            marginBottom: '32px',
            position: 'relative'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '24px', position: 'relative', zIndex: 1 }}>
              <div>
                <h3 style={{ fontSize: 'clamp(20px, 2.5vw, 24px)', fontFamily: 'var(--font-serif)', color: '#FFFFFF', margin: 0, lineHeight: 1.25 }}>
                  3 этапа правовой проверки
                </h3>
              </div>
              <div style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.75)', maxWidth: '520px', lineHeight: 1.5 }}>
                <span style={{ display: 'block' }}>Позволяет гарантированно подтвердить право на списание</span>
                <span style={{ display: 'block' }}>и избежать отказа со стороны сотрудников МФЦ.</span>
              </div>
            </div>

            <div className="grid grid-3" style={{ gap: '16px', position: 'relative', zIndex: 1 }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '22px 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <h4 style={{ fontSize: '16.5px', color: '#FFFFFF', margin: 0, fontWeight: 600, lineHeight: 1.35, display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', flexShrink: 0 }}>01</span>
                  <span>
                    <span style={{ display: 'block' }}>Проверяем базы</span>
                    <span style={{ display: 'block' }}>ФССП и доходы</span>
                  </span>
                </h4>
                <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5, margin: 0 }}>
                  Устанавливаем основания закрытия производств, дату исполнительных листов и отсутствие нового открытого производства.
                </p>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '22px 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <h4 style={{ fontSize: '16.5px', color: '#FFFFFF', margin: 0, fontWeight: 600, lineHeight: 1.35, display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', flexShrink: 0 }}>02</span>
                  <span>
                    <span style={{ display: 'block' }}>Запрашиваем</span>
                    <span style={{ display: 'block' }}>обязательные справки</span>
                  </span>
                </h4>
                <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5, margin: 0 }}>
                  Получаем установленные законом справки из СФР о пенсии/пособиях, банков и службы судебных приставов.
                </p>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '22px 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <h4 style={{ fontSize: '16.5px', color: '#FFFFFF', margin: 0, fontWeight: 600, lineHeight: 1.35, display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', flexShrink: 0 }}>03</span>
                  <span>
                    <span style={{ display: 'block' }}>Формируем точный</span>
                    <span style={{ display: 'block' }}>реестр кредиторов</span>
                  </span>
                </h4>
                <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5, margin: 0 }}>
                  Указываем точные реквизиты всех банков, МФО, налоговых органов и точные суммы долгов с процентами и штрафами.
                </p>
              </div>
            </div>
          </div>

          {/* 2 КРУПНЫЕ КАРТОЧКИ */}
          <div className="grid grid-2" style={{ gap: '28px', marginBottom: '32px' }}>
            
            {/* Карточка 1: Категории заявителей */}
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
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.3 }}>
                  <span style={{ display: 'inline-block' }}>Категории граждан</span>{' '}
                  <span style={{ display: 'inline-block' }}>для списания через МФЦ</span>
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                <span style={{ display: 'inline-block' }}>Закон № 127-ФЗ предусматривает 4 основания</span>{' '}
                <span style={{ display: 'inline-block' }}>для подачи заявления во внесудебном порядке:</span>
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px', lineHeight: 1.35 }}>
                      Закрытое производство по п. 4 ч. 1 ст. 46
                    </strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      Пристав окончил производство из-за отсутствия имущества для взыскания, и нет новых открытых дел.
                    </span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px', lineHeight: 1.35 }}>
                      Пенсионеры с единственным доходом
                    </strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      Исполнительный документ предъявлен к исполнению более 1 года назад, нет иного имущества.
                    </span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px', lineHeight: 1.35 }}>
                      Получатели детских пособий
                    </strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      Граждане, получающие единое пособие на ребенка, при длительности исполнительного документа от 1 года.
                    </span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px', lineHeight: 1.35 }}>
                      Долги на исполнении более 7 лет
                    </strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      Исполнительный документ находится на исполнении у приставов более 7 лет и не погашен полностью.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Карточка 2: Списываемые и несписываемые долги */}
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
                  <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.3 }}>
                  <span style={{ display: 'inline-block' }}>Какие долги списываются,</span>{' '}
                  <span style={{ display: 'inline-block' }}>а какие сохраняются</span>
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                <span style={{ display: 'inline-block' }}>Разделяем финансовые обязательства</span>{' '}
                <span style={{ display: 'inline-block' }}>на списываемые и несгораемые по закону:</span>
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px', lineHeight: 1.35 }}>
                      Банковские кредиты и карты (Списываются)
                    </strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      Потребительские кредиты, кредитные карты, овердрафты во всех коммерческих банках.
                    </span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px', lineHeight: 1.35 }}>
                      Микрозаймы и займы физлиц (Списываются)
                    </strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      Займы в МФО, ломбардах, долги по распискам перед гражданами и организациями.
                    </span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px', lineHeight: 1.35 }}>
                      Налоги, штрафы и долги по ЖКХ (Списываются)
                    </strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      Транспортный, имущественный налог, штрафы ГИБДД и задолженности перед управляющими компаниями.
                    </span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(23, 50, 77, 0.4)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px', lineHeight: 1.35 }}>
                      Алименты и вред здоровью (Не списываются)
                    </strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      Алименты, компенсация вреда жизни/здоровью и субсидиарная ответственность сохраняются.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Важно: полупрозрачная карточка */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.65)',
            backdropFilter: 'blur(6px)',
            padding: '22px 28px',
            border: '1px solid rgba(23, 50, 77, 0.08)',
            borderLeft: '4px solid var(--color-gold)',
            fontSize: '14px',
            color: 'var(--color-deep-blue)',
            lineHeight: 1.6,
            marginBottom: '32px'
          }}>
            <strong style={{ color: 'var(--color-primary)' }}>Правовая рамка:</strong> По статье 223.2 закона № 127-ФЗ гражданин обязан включить в список всех известных ему кредиторов с указанием точного размера требований. Если сумма долга окажется свыше 1 000 000 ₽ или обнаружатся открытые производства, списание возможно только в судебном порядке.
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#form" className="btn btn-primary" style={{ display: 'inline-block', padding: '14px 32px' }}>
              Оценить возможность списания через МФЦ
            </a>
          </div>

        </div>
      </section>

      {/* ═══ БЛОК 4: ЧТО СДЕЛАЕТ ЮРИСТ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Что сделает юрист</span> <br />
              <span style={{ display: 'inline-block' }}>по внесудебному банкротству</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Комплексное правовое сопровождение от аудита и сбора справок</span> <br className="hidden-mobile" />
              <span style={{ display: 'inline-block' }}>до регистрации заявления в МФЦ и полного аннулирования долгов.</span>
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '48px' }}>
            {[
              {
                num: '01',
                title: 'Проверит базы ФССП',
                desc: 'Изучит статус всех исполнительных производств, основания их окончания и отсутствие скрытых производств.'
              },
              {
                num: '02',
                title: 'Рассчитает суммы долгов',
                desc: 'Соберет актуальные справки об остатках задолженности, процентах, неустойках и штрафах во всех банках и МФО.'
              },
              {
                num: '03',
                title: 'Соберет комплект справок',
                desc: 'Получит справки из СФР о пенсии/пособиях, банков и службы приставов по утвержденным Минэкономразвития формам.'
              },
              {
                num: '04',
                title: 'Заполнит заявление и реестр',
                desc: 'Составит список кредиторов строго по утвержденной форме: с ИНН, ОГРН, адресами и точными суммами обязательств.'
              },
              {
                num: '05',
                title: 'Сопроводит подачу в МФЦ',
                desc: 'Проконтролирует подачу документов в МФЦ г. Липецка и своевременную публикацию сообщения в Федресурсе (ЕФРСБ).'
              },
              {
                num: '06',
                title: 'Защитит от кредиторов',
                desc: 'Остановит звонки коллекторов и банков на период 6-месячного моратория до финального списания всех долгов.'
              }
            ].map((item, idx) => (
              <div key={idx} className="hover-lift" style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '38px 24px 30px 24px',
                border: '1px solid var(--color-border)',
                borderTop: '4px solid var(--color-gold)',
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                borderRadius: '0',
                position: 'relative',
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '20px',
                  background: 'var(--color-gold)',
                  color: '#FFFFFF',
                  fontSize: '12px',
                  fontWeight: 700,
                  padding: '2px 10px',
                  borderRadius: '2px',
                  letterSpacing: '0.05em'
                }}>
                  {item.num}
                </div>
                <div>
                  <h3 style={{ margin: '8px 0 10px 0', fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)' }}>
                    {item.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ГРАНИЦЫ УСЛУГИ */}
          <div style={{
            background: 'linear-gradient(135deg, #10273B 0%, #17375E 50%, #0D1E2D 100%)',
            border: '1px solid rgba(193, 160, 102, 0.4)',
            borderTop: '3px solid var(--color-gold)',
            boxShadow: '0 8px 30px rgba(16, 39, 59, 0.18)',
            padding: '36px 32px',
            color: '#FFFFFF',
            position: 'relative'
          }}>
            <div className="grid grid-2" style={{ gap: '36px' }}>
              <div>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: '#FFFFFF', margin: '0 0 18px 0', paddingBottom: '12px', borderBottom: '1px solid rgba(255, 255, 255, 0.15)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <span>Входит в юридическое сопровождение</span>
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    { title: 'Анализ соответствия критериям ст. 223.2 закона № 127-ФЗ', desc: 'Проверка долгов, производств ФССП, доходов и оснований списания.' },
                    { title: 'Сбор обязательного комплекта справок', desc: 'Получение справок СФР, ФССП и банков по установленным законом формам.' },
                    { title: 'Формирование списка кредиторов по форме Минэка', desc: 'Безошибочное указание всех кредиторов, договоров и сумм задолженностей.' },
                    { title: 'Подготовка и подача заявления в МФЦ', desc: 'Оформление заявления и сопровождение регистрации в МФЦ г. Липецка.' },
                    { title: 'Мониторинг публикации в Федресурсе (ЕФРСБ)', desc: 'Контроль внесения записи о банкротстве и завершения процедуры через 6 месяцев.' }
                  ].map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                        <polyline points="9 11 12 14 22 4" />
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                      </svg>
                      <div>
                        <strong style={{ display: 'block', fontSize: '15px', color: '#FFFFFF', marginBottom: '2px' }}>{item.title}</strong>
                        <span style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.78)', lineHeight: 1.5 }}>{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: '#FFFFFF', margin: '0 0 18px 0', paddingBottom: '12px', borderBottom: '1px solid rgba(255, 255, 255, 0.15)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  <span>Оценивается отдельно</span>
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    { title: 'Судебное банкротство в Арбитражном суде', desc: 'При долге свыше 1 000 000 ₽ или наличии открытых исполнительных производств.' },
                    { title: 'Сохранение залогового имущества и ипотеки', desc: 'Разработка отдельной стратегии сохранения жилья при залоговых обязательствах.' },
                    { title: 'Защита сделок с имуществом за последние 3 года', desc: 'Правовая защита при попытках кредиторов оспорить договоры дарения или купли-продажи.' },
                    { title: 'Оспаривание незаконных действий судебных приставов', desc: 'Отдельное обжалование незаконных арестов счетов или списания детских пособий.' }
                  ].map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <div>
                        <strong style={{ display: 'block', fontSize: '15px', color: '#FFFFFF', marginBottom: '2px' }}>{item.title}</strong>
                        <span style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.78)', lineHeight: 1.5 }}>{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══ БЛОК 5: РИСКИ И ПРОВЕРКА ОСНОВАНИЙ ═══ */}
      <section className="section bg-light" id="defense" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Проверим риски и основания</span> <br />
              <span style={{ display: 'inline-block' }}>до подачи заявления в МФЦ</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Ошибки в заявлении могут привести к возврату документов МФЦ</span> <br />
              <span style={{ display: 'inline-block' }}>или переходу процедуры в арбитражный суд по инициативе банков.</span>
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '28px', marginBottom: '32px' }}>
            <div style={{
              background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-primary)',
              padding: '32px 28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <h3 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', margin: 0, fontWeight: 700 }}>
                Причины возврата заявления МФЦ
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'Наличие активных (неоконченных) исполнительных производств в базе ФССП',
                  'Сумма задолженности менее 25 000 ₽ или превышает лимит в 1 000 000 ₽',
                  'Неверно оформленные справки из СФР, банков или службы судебных приставов'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '14.5px', color: 'var(--color-deep-blue)', lineHeight: 1.5 }}>
                    <span style={{ color: 'var(--color-gold)', fontWeight: 'bold' }}>—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{
              background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-gold)',
              padding: '32px 28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <h3 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', margin: 0, fontWeight: 700 }}>
                Риски перевода дела в суд банками
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'Кредитор не был указан в списке кредиторов либо сумма долга существенно занижена',
                  'Обнаружение имущества (автомобиль, дача, доли), подлежащего реализации',
                  'Подозрительные сделки по дарению или продаже имущества родственникам за 3 года'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '14.5px', color: 'var(--color-deep-blue)', lineHeight: 1.5 }}>
                    <span style={{ color: 'var(--color-gold)', fontWeight: 'bold' }}>—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{
            background: 'var(--color-white)',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-gold)',
            padding: '24px 30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <p style={{ margin: 0, fontSize: '14.5px', color: 'var(--color-deep-blue)', lineHeight: 1.6, maxWidth: '700px' }}>
              <strong>Сомневаетесь, подходит ли ситуация под МФЦ?</strong> Проведем бесплатный аудит документов и подскажем оптимальный законный путь списания.
            </p>
            <a href="#form" className="btn btn-primary" style={{ padding: '12px 24px', fontSize: '14px', whiteSpace: 'nowrap' }}>
              Проверить условия
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 6: ДОКУМЕНТЫ ДЛЯ ПРОВЕРКИ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Документы для</span> <br />
              <span style={{ display: 'inline-block' }}>банкротства через МФЦ</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Для подготовки заявления и списка кредиторов потребуется базовый комплект документов.</span> <br />
              <span style={{ display: 'inline-block' }}>Недостающие справки мы поможем запросить и получить в ведомствах.</span>
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '28px', marginBottom: '32px' }}>
            
            {/* Карточка 1: Личные документы и долги */}
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
                <span style={{ display: 'inline-block' }}>Личные документы и кредиты</span>
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Удостоверение личности</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Паспорт гражданина РФ, СНИЛС, ИНН и свидетельство о постоянной или временной регистрации.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Кредитные договоры и выписки</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Договоры с банками и МФО, справки о задолженности, претензии, судебные приказы и решения.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Карточка 2: Справки и производства */}
            <div style={{
              background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-gold)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0, paddingBottom: '12px', borderBottom: '1px solid rgba(23, 50, 77, 0.1)' }}>
                <span style={{ display: 'inline-block' }}>Справки и документы ФССП</span>
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Справки из СФР и банков</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Справка о назначении пенсии / справка о получении единого пособия на ребенка со сроком действия.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Справки от судебных приставов</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Постановление об окончании ИП или справка о длительности нахождения исполнительного документа на исполнении.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div style={{
            background: 'var(--color-white)',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-gold)',
            padding: '24px 30px',
            marginTop: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)'
          }}>
            <p style={{ margin: 0, fontSize: '14.5px', color: 'var(--color-deep-blue)', lineHeight: 1.6, maxWidth: '720px' }}>
              <strong>Нет полного комплекта?</strong> Направьте то, что есть на руках (паспорт или список кредитов), — юрист запросит недостающие справки в ведомствах самостоятельно.
            </p>
            <a href="#form" className="btn btn-primary" style={{ padding: '12px 24px', fontSize: '14px', whiteSpace: 'nowrap' }}>
              Отправить документы
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 7: КУРАТОР НАПРАВЛЕНИЯ ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name="Владимир Владимирович Начешников"
        position="Ведущий юрист по банкротству граждан, специалист ЮК «Де-Юре»"
        imageUrl="/images/nacheshnikov.jpg"
        imagePosition="center 15%"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Профессиональный юридический стаж с 1997 года; глубокая специализация в области защиты прав заемщиков, антикризисного урегулирования и списания задолженностей.
          </span>,
          <ul key="2" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>
                Специализируется на внесудебном банкротстве через МФЦ по закону № 127-ФЗ, а также комплексном судебном банкротстве физических лиц.
              </span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>
                Проверяет основания в ФССП, запрашивает справки СФР и формирует безошибочный реестр кредиторов без риска возврата документов.
              </span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>
                Успешно сопроводил списание сотен миллионов рублей долгов жителей Липецка, Липецкой области и других регионов России.
              </span>
            </li>
          </ul>,
          <a key="3" href="/specialisty/" style={{ display: 'inline-block', marginTop: '16px', fontSize: '14px', color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }} data-analytics="specialist_profile_click">
            Подробнее о юристе Владимире Владимировиче Начешникове →
          </a>
        ]}
        buttonText="Обсудить ситуацию с Владимиром Владимировичем"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 8: КЕЙСЫ ═══ */}
      <CasesBlock
        title="Примеры дел из практики"
        showAllLink="/praktika/"
        showAllText="Смотреть всю практику"
        showDemoWarning={true}
        cases={cases}
      />

      {/* ═══ БЛОК 9: КАК ПРОХОДИТ РАБОТА ═══ */}
      <ProcessBlock
        title="Как проходит внесудебное банкротство"
        subtitle="Четкий и последовательный алгоритм списания задолженности через МФЦ"
        steps={steps}
        ctaTitle="Готовы разобрать вашу ситуацию по списанию долгов"
        ctaSubtitle="Оставьте номер телефона — специалист по банкротству свяжется с вами и проверит соответствие условиям."
        ctaButtonText="Обсудить списание долгов"
        ctaButtonHref="#form"
      />

      {/* ═══ БЛОК 10: СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость юридической помощи"
        subtitle="Сама процедура в МФЦ бесплатна. Стоимость юридического сопровождения фиксируется в договоре."
        tiers={pricingTiers}
        disclaimer={
          <>
            <span style={{ display: 'inline-block' }}>Стоимость услуг определяется после изучения документов и фиксируется в договоре.</span> <br className="hidden-mobile" />
            <span style={{ display: 'inline-block' }}>Государственная пошлина и депозит управляющего по закону № 127-ФЗ не взимаются.</span>
          </>
        }
      />

      {/* ═══ БЛОК 11: ЧАСТЫЕ ВОПРОСЫ ═══ */}
      <FAQBlock
        superTitle="Частые вопросы"
        title="Ответы на частые вопросы"
        subtitle="Разъяснения юриста Владимира Начешникова по внесудебному банкротству через МФЦ"
        ctaText="Задать свой вопрос"
        ctaLink="#form"
        faqs={faqs}
      />

      {/* ═══ БЛОК 12: СВЯЗАННЫЕ УСЛУГИ ═══ */}
      <section className="section bg-cream" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                Другие направления помощи
              </span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Смежные юридические услуги по списанию долгов,</span> <br className="hidden-mobile" />
              <span style={{ display: 'inline-block' }}>спорам с приставами и защите имущества.</span>
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
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 380px))', gap: '20px' }}>
            <Link href="/grazhdanam/bankrotstvo-fizicheskih-lic/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <div 
                className="card related-service-card" 
                style={{ 
                  height: '100%', 
                  minHeight: '160px',
                  padding: '28px 22px', 
                  background: 'var(--color-white)', 
                  border: '1px solid var(--color-border)', 
                  borderTop: '3px solid var(--color-primary)',
                  borderRadius: '0',
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between',
                  transition: 'all 0.3s',
                  position: 'relative'
                }}
              >
                <div>
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                    <span style={{ display: 'inline-block' }}>Банкротство</span> <br /><span style={{ display: 'inline-block' }}>физических лиц</span>
                  </h3>
                  <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    Судебное банкротство через Арбитражный суд при долге свыше 500 000 ₽.
                  </p>
                </div>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, transition: 'transform 0.3s' }}>
                  Подробнее 
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/snyatie-aresta-so-scheta/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <div 
                className="card related-service-card" 
                style={{ 
                  height: '100%', 
                  minHeight: '160px',
                  padding: '28px 22px', 
                  background: 'var(--color-white)', 
                  border: '1px solid var(--color-border)', 
                  borderTop: '3px solid var(--color-primary)',
                  borderRadius: '0',
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between',
                  transition: 'all 0.3s',
                  position: 'relative'
                }}
              >
                <div>
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                    <span style={{ display: 'inline-block' }}>Снятие ареста</span> <br /><span style={{ display: 'inline-block' }}>со счетов и карт</span>
                  </h3>
                  <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    Разблокировка зарплатных, пенсионных и социальных счетов у приставов.
                  </p>
                </div>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, transition: 'transform 0.3s' }}>
                  Подробнее 
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/obzhalovanie-dejstvij-sudebnogo-pristava/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <div 
                className="card related-service-card" 
                style={{ 
                  height: '100%', 
                  minHeight: '160px',
                  padding: '28px 22px', 
                  background: 'var(--color-white)', 
                  border: '1px solid var(--color-border)', 
                  borderTop: '3px solid var(--color-primary)',
                  borderRadius: '0',
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between',
                  transition: 'all 0.3s',
                  position: 'relative'
                }}
              >
                <div>
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                    <span style={{ display: 'inline-block' }}>Обжалование</span> <br /><span style={{ display: 'inline-block' }}>действий приставов</span>
                  </h3>
                  <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    Защита от незаконных списаний, удержаний и превышения полномочий ФССП.
                  </p>
                </div>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, transition: 'transform 0.3s' }}>
                  Подробнее 
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/vozvrat-nezakonno-spisannyh-deneg/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <div 
                className="card related-service-card" 
                style={{ 
                  height: '100%', 
                  minHeight: '160px',
                  padding: '28px 22px', 
                  background: 'var(--color-white)', 
                  border: '1px solid var(--color-border)', 
                  borderTop: '3px solid var(--color-primary)',
                  borderRadius: '0',
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between',
                  transition: 'all 0.3s',
                  position: 'relative'
                }}
              >
                <div>
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                    <span style={{ display: 'inline-block' }}>Возврат</span> <br /><span style={{ display: 'inline-block' }}>списанных денег</span>
                  </h3>
                  <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    Возврат незаконно списанных социальных выплат, пособий и прожиточного минимума.
                  </p>
                </div>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, transition: 'transform 0.3s' }}>
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
            <Link href="/grazhdanam/bankrotstvo-fizicheskih-lic/" className="all-services-link" style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '16px', textDecoration: 'underline', textUnderlineOffset: '4px', display: 'inline-flex', alignItems: 'center', gap: '6px', transition: 'color 0.2s ease' }}>
              Смотреть все услуги по банкротству граждан →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 13: ФИНАЛЬНАЯ ФОРМА ═══ */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px', padding: '80px 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', background: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>
                  Связаться с нами
                </span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                Разберём, подходит ли вам списание долгов через МФЦ
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Оставьте номер телефона и кратко укажите: общую сумму долга, есть ли закрытые производства в ФССП или статус пенсионера / получателя детских пособий. Юрист проверит ситуацию и свяжется с вами.
              </p>

              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация специалиста по банкротству</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Позвоните прямо сейчас: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (910) 350-31-11</a>
                </p>
              </div>

              <div style={{ background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55, marginTop: '20px' }}>
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Безопасность данных:</strong>
                Не указывайте в форме паспортные данные, номера кредитных счетов и иные конфиденциальные сведения. Безопасный способ передачи документов согласуем после звонка.
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm 
                title="Обсудить списание долгов"
                subtitle="Оставьте имя и номер телефона. Юрист перезвонит в течение 15 минут в рабочее время."
                buttonText="Обсудить списание через МФЦ"
                commentPlaceholder="Кратко опишите ситуацию: сумма долга, банки, есть ли производства у приставов…"
                hiddenFields={[
                  { name: 'service', value: 'Внесудебное банкротство через МФЦ в Липецке | ЮК «Де-Юре»' },
                  { name: 'category', value: 'bankrotstvo-fizicheskih-lic/cherez-mfc' },
                  { name: 'specialist', value: 'Владимир Владимирович Начешников' }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
