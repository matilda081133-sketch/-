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
import PricingBlock from '@/components/PricingBlock';
import ProcessBlock from '@/components/ProcessBlock';

export default function ProizvodstvennayaTravmaClient() {
  const cases: CaseData[] = [
    {
      category: 'Сокрытие / Акт Н-1',
      title: (
        <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Добились</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>расследования травмы</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и взыскали 980 000 руб.</span>
        </>
      ),
      problem: 'Монтажник упал с лесов, работодатель заставил заявить о бытовой травме, пообещав оплатить лечение, но обманул.',
      action: 'Привлекли трудовую инспекцию, установили свидетелей и добились составления официального акта Н-1.',
      result: 'Назначены выплаты СФР, с работодателя взыскано 600 000 руб. морального вреда.'
    },
    {
      category: 'Утрата трудоспособности',
      title: (
        <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Взыскали ущерб</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и пожизненные выплаты</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>при утрате трудоспособности</span>
        </>
      ),
      problem: 'Станочник потерял пальцы руки из-за отсутствия защитного кожуха; комиссия пыталась списать вину на работника.',
      action: 'Доказали грубое нарушение работодателем норм охраны труда и добились исключения вины работника из акта.',
      result: 'СФР назначил ежемесячные выплаты; с предприятия взыскана компенсация ущерба.'
    },
    {
      category: 'Смертельный случай',
      title: (
        <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Отсудили</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>2 млн руб. выплат семье</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>погибшего на стройке рабочего</span>
        </>
      ),
      problem: 'Предприятие пыталось доказать, что рабочий погиб в нерабочее время, находясь на территории самовольно.',
      action: 'Истребовали путевые листы, журналы въезда и доказали выполнение трудовых обязанностей в интересах фирмы.',
      result: 'Семье выплачено 2 млн руб. от СФР и 1,5 млн руб. морального вреда с работодателя.'
    }
  ];

  const faqs = [
    {
      q: 'Что делать работнику сразу после получения производственной травмы?',
      a: 'Немедленно обратитесь в медицинское учреждение и обязательно сообщите врачу, что травма получена на рабочем месте во время выполнения трудовых обязанностей. Известите руководство, сохраните контакты свидетелей и ни при каких обстоятельствах не соглашайтесь оформлять «бытовую» травму.'
    },
    {
      q: 'Какие выплаты положены пострадавшему при несчастном случае на производстве?',
      a: 'Пострадавшему положены: 1) Пособие по временной нетрудоспособности в размере 100% среднего заработка; 2) Единовременная страховая выплата от СФР; 3) Ежемесячные страховые выплаты при утрате трудоспособности; 4) Оплата медицинских и реабилитационных расходов; 5) Компенсация морального вреда от работодателя.'
    },
    {
      q: 'В какой срок работодатель обязан расследовать несчастный случай?',
      a: 'Расследование легкого несчастного случая проводится комиссией в течение 3 дней. Расследование тяжелого несчастного случая или со смертельным исходом проводится в течение 15 дней (ст. 229.1 ТК РФ). Если работодатель скрыл происшествие, расследование проводится государственным инспектором труда по заявлению пострадавшего.'
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
          'streetAddress': 'пл. Театральная, д. 3, офис 401',
          'addressLocality': 'Липецк',
          'postalCode': '398001',
          'addressCountry': 'RU'
        }
      },
      {
        '@type': 'Service',
        'name': 'Юрист по производственным травмам в Липецке | Де-Юре',
        'provider': { '@id': 'https://dejure-help.ru/#organization' },
        'areaServed': {
          '@type': 'AdministrativeArea',
          'name': 'Липецк и Липецкая область'
        },
        'description': 'Помощь юриста при производственной травме и несчастных случаях на производстве в Липецке: оформление акта Н-1, страховые выплаты СФР, компенсация морального вреда.'
      },
      {
        '@type': 'FAQPage',
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
        'name': 'Марина Валерьевна Смольянинова',
        'jobTitle': 'Ведущий юрист',
        'url': 'https://dejure-help.ru/specialisty/smolyaninova-marina-valerevna/',
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
            <Link href="/grazhdanam/trudovoj-yurist/">Трудовой юрист</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Юрист по производственным травмам в Липецке</span>
          </>
        }
        superTitle="Трудовой юрист в Липецке"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Юрист по
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              производственным
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              травмам в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Официальная фиксация несчастного случая, обжалование акта Н-1, получение единовременных и ежемесячных выплат от Социального фонда и взыскание компенсации вреда здоровью с работодателя.
          </span>
        }
        primaryCtaText="Обсудить ситуацию с юристом"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_cta_proizvodstvennaya_travma"
        primaryCtaSubtext={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Если требуется срочная помощь, позвоните:
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (910) 350-31-11</a>
            </span>
          </span>
        }
        trustItems={[{"text":"Оформление акта Н-1 и расследование случая"},{"text":"Получение выплат по обязательному страхованию"},{"text":"Взыскание компенсации вреда здоровью и морального вреда"},{"text":"Куратор — юрист М. В. Смольянинова"}]}
        urgentHint="Ни в коем случае не соглашайтесь оформлять травму как «бытовую»! Это лишит вас права на страховые выплаты, оплату лечения и компенсацию утраченного заработка."
        imageUrl="/images/smolyaninova.jpg"
        imageName="Марина Валерьевна Смольянинова"
        imageSubtitle="Ведущий юрист ЮК «Де-Юре», куратор направления «Трудовое право»"
        imageObjectPosition="center 20%"
      />

      {/* ═══ БЛОК 2: В КАКИХ СИТУАЦИЯХ МЫ ПОМОГАЕМ (ТИПОВОЙ ШАБЛОН) ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>В каких ситуациях</span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>мы помогаем гражданам</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Ознакомьтесь с типовыми сценариями. Если ваша ситуация сложнее или включает несколько спорных вопросов — мы разработаем индивидуальную стратегию защиты.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '40px' }}>
            {[
              {
                tag: 'Сокрытие / Давление',
                title: (
                  <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Работодатель</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>скрывает происшествие</span>
                  </>
                ),
                desc: 'Руководство просит сказать врачам, что упали дома, не создает комиссию по расследованию и не извещает ГИТ.'
              },
              {
                tag: 'Акт Н-1 / Оспаривание',
                title: (
                  <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Отказ признать</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>травму производственной</span>
                  </>
                ),
                desc: 'Комиссия составила акт произвольной формы, указав, что травма якобы не связана с производством, либо возложила всю вину на работника.'
              },
              {
                tag: 'СФР / Выплаты',
                title: (
                  <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Отказ или занижение</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>страховых выплат СФР</span>
                  </>
                ),
                desc: 'Отказ Социального фонда РФ назначить единовременное или ежемесячное страховое обеспечение по потере трудоспособности.'
              },
              {
                tag: 'Лечение / Расходы',
                title: (
                  <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Взыскание расходов на</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>лечение и реабилитацию</span>
                  </>
                ),
                desc: 'Компенсация стоимости платных операций, лекарств, протезирования, санаторно-курортного лечения и постороннего ухода.'
              },
              {
                tag: 'Моральный вред',
                title: (
                  <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Взыскание компенсации</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>тяжкого морального вреда</span>
                  </>
                ),
                desc: 'Судебное взыскание с работодателя существенной компенсации физических и нравственных страданий пострадавшего.'
              },
              {
                tag: 'Гибель / Семья',
                title: (
                  <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Смертельный несчастный</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>случай на производстве</span>
                  </>
                ),
                desc: 'Помощь семьям и родственникам погибшего работника: получение 2 млн руб. страховой выплаты и компенсация вреда семье.'
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
                transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.45s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.35s ease'
              }}>
                <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', opacity: 0.06, pointerEvents: 'none' }}>
                  <svg width="100" height="100" viewBox="0 0 24 24" fill="var(--color-deep-blue)">
                    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
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
                  display: 'inline-block',
                  alignSelf: 'flex-start'
                }}>
                  {item.tag}
                </div>
                
                <h3 style={{ 
                  fontFamily: 'var(--font-serif)', 
                  fontSize: '20px', 
                  color: 'var(--color-deep-blue)', 
                  marginBottom: '14px', 
                  marginTop: 0, 
                  lineHeight: 1.3 
                }}>
                  {item.title}
                </h3>
                
                <p style={{ 
                  fontSize: '14px', 
                  color: 'var(--color-text-secondary)', 
                  lineHeight: 1.6, 
                  margin: 0,
                  flexGrow: 1
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: КУРАТОР НАПРАВЛЕНИЯ ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name="Марина Валерьевна Смольянинова"
        position="Ведущий юрист ЮК «Де-Юре»"
        imageUrl="/images/smolyaninova.jpg"
        description={[
          'Специализируется на защите интересов работников в спорах с работодателями любой сложности: незаконные увольнения, дискриминация, сокращения и взыскание задолженностей.',
          'Успешный опыт судебного представительства по спорам о восстановлении на работе с взысканием полного среднего заработка за вынужденный прогул и компенсации морального вреда.',
          'Доскональное знание процессуальных особенностей доказывания трудовых отношений, оспаривания дисциплинарных взысканий и признания несчастных случаев производственными.',
          'Защита прав работников в Липецке и Липецкой области; возможность дистанционного ведения дел по всей России.'
        ]}
        buttonText="Обсудить ситуацию с Мариной Валерьевной"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 4: СТОИМОСТЬ УСЛУГ ═══ */}
      <PricingBlock
        title="Стоимость юридической помощи"
        subtitle="Прозрачные тарифы без скрытых доплат. Состав услуг и условия фиксируются в договоре."
        tiers={[
          {
            title: (
              <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Анализ материалов</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>расследования травмы</span>
              </>
            ),
            subtitle: 'Экспертиза акта Н-1, медицинских документов и заключений экспертиз',
            
            features: [
              { name: 'Проверка правильности квалификации травмы', value: '[уточняется]' },
              { name: 'Анализ степени вины работника в акте', value: '[уточняется]' },
              { name: 'Расчет всех положенных видов выплат', value: '[уточняется]' }
            ],
            buttonText: 'Оценить ситуацию',
            buttonHref: '#form'
          },
          {
            title: (
              <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Оспаривание выводов</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>комиссии в ГИТ и СФР</span>
              </>
            ),
            subtitle: 'Проведение независимой проверки и принудительное оформление акта Н-1',
            
            features: [
              { name: 'Жалоба в Государственную инспекцию труда', value: '[уточняется]' },
              { name: 'Повторное расследование государственным инспектором', value: '[уточняется]' },
              { name: 'Оформление пакета для страховых выплат СФР', value: '[уточняется]' }
            ],
            buttonText: 'Оспорить акт',
            buttonHref: '#form'
          },
          {
            title: (
              <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Судебное взыскание</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>компенсации «под ключ»</span>
              </>
            ),
            subtitle: 'Взыскание утраченного заработка, морального вреда и расходов на лечение',
            popular: true,
            badgeText: 'Популярно',
            features: [
              { name: 'Иск к работодателю и Социальному фонду РФ', value: '[уточняется]' },
              { name: 'Назначение судебно-медицинской экспертизы', value: '[уточняется]' },
              { name: 'Взыскание компенсации морального вреда и расходов', value: '[уточняется]' }
            ],
            buttonText: 'Выбрать тариф',
            buttonHref: '#form'
          }
        ]}
        disclaimer="Стоимость определяется после первичного анализа документов. Согласно ст. 393 ТК РФ работники полностью освобождаются от оплаты госпошлины и судебных расходов при любых спорах с работодателем."
      />

      {/* ═══ БЛОК 5: ПРИМЕРЫ ДЕЛ ИЗ ПРАКТИКИ ═══ */}
      <CasesBlock
        title="Примеры дел из практики"
        showAllLink="/praktika/"
        showAllText="Смотреть все дела"
        showDemoWarning={true}
        cases={cases}
      />

      {/* ═══ БЛОК 6: КАК ПРОХОДИТ РАБОТА ═══ */}
      <ProcessBlock
        title="Как проходит работа"
        subtitle="Понятные шаги и прозрачный контроль на каждом этапе ведения вашего дела."
        alignTitle="left"
        steps={[
          {
            num: '01',
            title: 'Анализ документов и сроков',
            desc: 'Изучаем трудовой договор, приказы, расчетные листки и переписку. Оцениваем риски и соблюдение сроков обращения.'
          },
          {
            num: '02',
            title: 'Сбор доказательной базы',
            desc: 'Запрашиваем недостающие документы у работодателя и в госорганах, фиксируем показания свидетелей.'
          },
          {
            num: '03',
            title: 'Досудебные требования',
            desc: 'Направляем работодателю мотивированную претензию, при необходимости привлекаем ГИТ и прокуратуру.'
          },
          {
            num: '04',
            title: 'Судебное представительство',
            desc: 'Подаем иск в суд, участвуем во всех заседаниях, доказываем неправомерность действий работодателя.'
          },
          {
            num: '05',
            title: 'Получение результата',
            desc: 'Получаем исполнительный лист, контролируем восстановление в должности и выплату всех присужденных сумм.'
          }
        ]}
        ctaTitle="Готовы защитить ваши трудовые права"
        ctaSubtitle="Опишите задачу — юрист изучит документы и предложит конкретные шаги для победы."
        ctaButtonText="Обсудить ситуацию с юристом"
        ctaButtonHref="#form"
        footerNote="Для правовой оценки понадобятся: трудовой договор, приказы, расчетные листки. Возможен дистанционный формат работы."
      />

      {/* ═══ БЛОК 7: ЧАСТЫЕ ВОПРОСЫ (FAQ) ═══ */}
      <FAQBlock
        superTitle="Частые вопросы"
        title={
          <>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Ответы на вопросы</span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>по трудовому спору</span>
          </>
        }
        subtitle="Разъяснения юриста о правах работника и судебной практике"
        ctaText="Задать вопрос юристу"
        ctaLink="#form"
        faqs={faqs}
      />

      {/* ═══ БЛОК 8: КОНТАКТНАЯ ФОРМА (КАНОНИЧЕСКИЙ ШАБЛОН) ═══ */}
      <section className="section" id="form" style={{ padding: '80px 0', background: 'var(--color-bg-light)' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '48px', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-gold)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '13px', fontWeight: 600, color: 'var(--color-gold-text)' }}>
                  Запись на консультацию
                </span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '20px', lineHeight: 1.2 }}>
                Обсудите ваш трудовой спор с юристом
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '32px' }}>
                Опишите ситуацию, и юрист по трудовому праву свяжется с вами в течение 15 минут, чтобы оценить перспективы дела, сроки обращения и составить план защиты.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-gold)' }}></div>
                  <span style={{ fontSize: '15px', color: 'var(--color-deep-blue)', fontWeight: 500 }}>
                    Соблюдение строгой конфиденциальности
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-gold)' }}></div>
                  <span style={{ fontSize: '15px', color: 'var(--color-deep-blue)', fontWeight: 500 }}>
                    Оценка перспектив дела и расчет компенсаций
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-gold)' }}></div>
                  <span style={{ fontSize: '15px', color: 'var(--color-deep-blue)', fontWeight: 500 }}>
                    Возможность дистанционного ведения процесса
                  </span>
                </div>
              </div>
            </div>

            <div style={{ background: 'var(--color-white)', padding: '40px', borderRadius: '0', border: '1px solid var(--color-border)', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
              <ContactsForm
                title="Получить оценку ситуации"
                subtitle="Заполните форму для связи с профильным юристом"
                buttonText="Отправить заявку на консультацию"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
