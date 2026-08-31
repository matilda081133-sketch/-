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

export default function TrudovojClient() {
  const cases: CaseData[] = [
    {
      category: 'Увольнение / Восстановление',
      title: (
        <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Восстановили</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>сотрудника на работе</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и взыскали 480 000 руб.</span>
        </>
      ),
      problem: 'Работника уволили «за прогул», хотя в этот день он находился на больничном, о чем работодатель был извещен.',
      action: 'Доказали факт уважительности отсутствия, запросили медицинские документы и оспорили приказ об увольнении в суде.',
      result: 'Суд отменил приказ, восстановил доверителя в должности и взыскал средний заработок за время прогула.'
    },
    {
      category: 'Зарплата / Серая схема',
      title: (
        <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Доказали размер</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>дохода и взыскали</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>620 000 руб. долга</span>
        </>
      ),
      problem: 'При увольнении строительная фирма выплатила расчет только по официальной минималке, отказав в выплате остального долга.',
      action: 'Собрали переписку, зарплатные ведомости, свидетельские показания и выписки о регулярных безналичных переводах.',
      result: 'Суд признал реальный размер заработной платы и обязал работодателя выплатить всю сумму долга с процентами.'
    },
    {
      category: 'Травма / Компенсация',
      title: (
        <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Признали травму</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>производственной</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и взыскали 850 000 руб.</span>
        </>
      ),
      problem: 'Работник получил перелом на складе, однако руководство оформило травму как бытовую, отказавшись составлять акт Н-1.',
      action: 'Инициировали проверку Роструда, опросили свидетелей происшествия и добились проведения официального расследования.',
      result: 'Акт Н-1 оформлен; с работодателя и СФР взысканы единовременная страховая выплата и компенсация вреда.'
    }
  ];

  const faqs = [
    {
      q: 'В какой срок необходимо обратиться в суд при незаконном увольнении?',
      a: 'По спорам об увольнении работник имеет право обратиться в суд в течение одного месяца со дня вручения ему копии приказа об увольнении либо со дня выдачи трудовой книжки (или предоставления сведений о трудовой деятельности) — ст. 392 ТК РФ.'
    },
    {
      q: 'Сколько времени есть для взыскания долга по зарплате?',
      a: 'За разрешением индивидуального трудового спора о невыплате или неполной выплате заработной платы и других причитающихся выплат работник имеет право обратиться в суд в течение одного года со дня установленного срока выплаты указанных сумм (ч. 2 ст. 392 ТК РФ).'
    },
    {
      q: 'Оплачивает ли работник госпошлину при подаче иска к работодателю?',
      a: 'Нет! В соответствии со статьей 393 ТК РФ и статьей 333.36 НК РФ работники при обращении в суд с исками о восстановлении на работе, взыскании заработной платы и по любым другим трудовым спорам полностью освобождаются от уплаты государственной пошлины и судебных расходов.'
    },
    {
      q: 'Можно ли доказать трудовые отношения, если работал без договора?',
      a: 'Да. Если работник был допущен к выполнению работы с ведома или по поручению работодателя, трудовой договор считается заключенным (ст. 67 ТК РФ). В суде факт работы подтверждается пропусками, журналом смен, путевыми листами, перепиской в мессенджерах, свидетельскими показаниями и банковскими выписками.'
    },
    {
      q: 'Что можно взыскать с работодателя помимо зарплаты?',
      a: 'Помимо основного долга, работник имеет право взыскать денежную компенсацию за каждый день задержки по ст. 236 ТК РФ (не ниже 1/150 ключевой ставки ЦБ РФ), компенсацию морального вреда (ст. 237 ТК РФ), а также возмещение расходов на юридическую помощь.'
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
        'name': 'Трудовой юрист в Липецке — защита прав работников | Де-Юре',
        'provider': { '@id': 'https://dejure-help.ru/#organization' },
        'areaServed': {
          '@type': 'AdministrativeArea',
          'name': 'Липецк и Липецкая область'
        },
        'description': 'Помощь трудового юриста в Липецке для работников: незаконное увольнение, сокращение, невыплата зарплаты, производственные травмы. Защита в суде.'
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
            <span style={{ color: 'var(--color-text-main)' }}>Трудовой юрист в Липецке</span>
          </>
        }
        superTitle="Трудовое право в Липецке"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Трудовой
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              юрист в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Защита работников при незаконном увольнении, сокращении, невыплате зарплаты и производственных травмах. Оценка документов, досудебное урегулирование и представительство в суде.
          </span>
        }
        primaryCtaText="Обсудить трудовой спор"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_cta_trudovoy_hub"
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
        trustItems={[{"text":"Защита прав работников в суде и ГИТ"},{"text":"Восстановление на работе и взыскание выплат"},{"text":"Оспаривание незаконных сокращений и травм"},{"text":"Куратор — юрист М. В. Смольянинова"}]}
        urgentHint="По трудовым спорам об увольнении срок обращения в суд составляет всего 1 месяц со дня вручения приказа или выдачи трудовой книжки (ст. 392 ТК РФ). Не откладывайте консультацию!"
        imageUrl="/images/smolyaninova.jpg"
        imageName="Марина Валерьевна Смольянинова"
        imageSubtitle="Ведущий юрист ЮК «Де-Юре», куратор направления «Трудовое право»"
        imageObjectPosition="center 20%"
      />

      {/* ═══ БЛОК 2: С КАКИМИ СИТУАЦИЯМИ МЫ ПОМОГАЕМ (ТИПОВОЙ ШАБЛОН) ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>С какими ситуациями</span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>мы помогаем работникам</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Трудовые споры требуют оперативной фиксации нарушений и строгого соблюдения процессуальных сроков. Поможем защитить ваши права на любом этапе конфликта.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {[
              {
                tag: 'Увольнение / Приказ',
                title: (
                  <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Незаконное увольнение</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>или принуждение к уходу</span>
                  </>
                ),
                desc: 'Увольнение без оснований, по надуманной статье либо давление руководства с требованием написать заявление «по собственному желанию».'
              },
              {
                tag: 'Сокращение / Штат',
                title: (
                  <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Нарушение процедуры</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>сокращения должности</span>
                  </>
                ),
                desc: 'Сокращение без предложения вакансий, нарушение сроков уведомления, игнорирование преимущественного права оставления на работе.'
              },
              {
                tag: 'Зарплата / Долг',
                title: (
                  <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Задержка зарплаты,</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>премий или расчета</span>
                  </>
                ),
                desc: 'Невыплата оклада, премий, отпускных или окончательного расчета при увольнении. Взыскание процентов и компенсаций.'
              },
              {
                tag: 'Травма / Производство',
                title: (
                  <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Производственная</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>травма и сокрытие</span>
                  </>
                ),
                desc: 'Работодатель отказывается расследовать несчастный случай, искажает акт Н-1 или не оформляет страховые выплаты пострадавшему.'
              },
              {
                tag: 'Договор / Без оформления',
                title: (
                  <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Работа без</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>оформления или ГПХ</span>
                  </>
                ),
                desc: 'Отказ работодателя заключить трудовой договор, подмена трудовых отношений договором самозанятого или ГПХ.'
              },
              {
                tag: 'Дисциплина / Взыскания',
                title: (
                  <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Незаконные</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>выговоры и штрафы</span>
                  </>
                ),
                desc: 'Наложение необоснованных дисциплинарных взысканий, незаконные удержания из заработной платы, лишение премий.'
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

      {/* ═══ БЛОК 3: НАПРАВЛЕНИЯ ПОМОЩИ (КАРТОЧКИ УСЛУГ) ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Услуги трудового юриста</span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>по направлениям</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Выберите специализацию, наиболее точно соответствующую вашей проблеме, чтобы ознакомиться с порядком действий и условиями работы.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '28px' }}>
            <a href="/grazhdanam/trudovoj-yurist/nezakonnoe-uvolnenie/" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }} data-analytics="click_service_card">
              <div className="card service-card hover-lift" style={{ 
                height: '100%', 
                minHeight: '260px', 
                padding: '36px 30px', 
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)', 
                border: '1px solid var(--color-border)', 
                borderRadius: '0', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between', 
                position: 'relative', 
                borderTop: '3px solid var(--color-primary)', 
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                cursor: 'pointer' 
              }}>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px', background: 'rgba(193, 160, 102, 0.1)', padding: '4px 10px', display: 'inline-block' }}>
                    Статья 392 ТК РФ / Суд
                  </div>
                  <h3 style={{ margin: '0 0 14px 0', fontSize: '20px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)' }}>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Незаконное увольнение</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и восстановление на работе</span>
                  </h3>
                  <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                    Правовая экспертиза приказа, подготовка иска, восстановление на работе с выплатой среднего заработка за вынужденный прогул и морального вреда.
                  </p>
                </div>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, marginTop: 'auto' }}>
                  <span>Подробнее об услуге</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
            </a>
            <a href="/grazhdanam/trudovoj-yurist/nezakonnoe-sokrashchenie/" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }} data-analytics="click_service_card">
              <div className="card service-card hover-lift" style={{ 
                height: '100%', 
                minHeight: '260px', 
                padding: '36px 30px', 
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)', 
                border: '1px solid var(--color-border)', 
                borderRadius: '0', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between', 
                position: 'relative', 
                borderTop: '3px solid var(--color-primary)', 
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                cursor: 'pointer' 
              }}>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px', background: 'rgba(193, 160, 102, 0.1)', padding: '4px 10px', display: 'inline-block' }}>
                    Штат / Гарантии
                  </div>
                  <h3 style={{ margin: '0 0 14px 0', fontSize: '20px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)' }}>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Незаконное</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>сокращение штата</span>
                  </h3>
                  <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                    Проверка реальности сокращения, контроль соблюдения преимущественного права, предложения вакансий и выплата выходного пособия.
                  </p>
                </div>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, marginTop: 'auto' }}>
                  <span>Подробнее об услуге</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
            </a>
            <a href="/grazhdanam/trudovoj-yurist/vzyskanie-zarabotnoj-platy/" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }} data-analytics="click_service_card">
              <div className="card service-card hover-lift" style={{ 
                height: '100%', 
                minHeight: '260px', 
                padding: '36px 30px', 
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)', 
                border: '1px solid var(--color-border)', 
                borderRadius: '0', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between', 
                position: 'relative', 
                borderTop: '3px solid var(--color-primary)', 
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                cursor: 'pointer' 
              }}>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px', background: 'rgba(193, 160, 102, 0.1)', padding: '4px 10px', display: 'inline-block' }}>
                    Расчет / Компенсация
                  </div>
                  <h3 style={{ margin: '0 0 14px 0', fontSize: '20px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)' }}>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Взыскание зарплаты</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и причитающихся выплат</span>
                  </h3>
                  <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                    Расчет задолженности, премий и процентов по ст. 236 ТК РФ, претензионная работа, жалобы в ГИТ и взыскание через суд.
                  </p>
                </div>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, marginTop: 'auto' }}>
                  <span>Подробнее об услуге</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
            </a>
            <a href="/grazhdanam/trudovoj-yurist/proizvodstvennaya-travma/" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }} data-analytics="click_service_card">
              <div className="card service-card hover-lift" style={{ 
                height: '100%', 
                minHeight: '260px', 
                padding: '36px 30px', 
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)', 
                border: '1px solid var(--color-border)', 
                borderRadius: '0', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between', 
                position: 'relative', 
                borderTop: '3px solid var(--color-primary)', 
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                cursor: 'pointer' 
              }}>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px', background: 'rgba(193, 160, 102, 0.1)', padding: '4px 10px', display: 'inline-block' }}>
                    Акт Н-1 / Выплаты
                  </div>
                  <h3 style={{ margin: '0 0 14px 0', fontSize: '20px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)' }}>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Юрист по</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>производственным травмам</span>
                  </h3>
                  <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                    Фиксация несчастного случая, обжалование акта расследования, оформление выплат через СФР и взыскание компенсации вреда здоровью.
                  </p>
                </div>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, marginTop: 'auto' }}>
                  <span>Подробнее об услуге</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: ЧТО ДЕЛАЕТ ТРУДОВОЙ ЮРИСТ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Что делает трудовой юрист</span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>для защиты работника</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Комплексное сопровождение: от сбора доказательств до реального зачисления денег на ваш счет.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '24px', marginBottom: '36px' }}>
              <div key="01" className="hover-lift" style={{ 
                display: 'flex', 
                gap: '24px', 
                padding: '30px 26px', 
                border: '1px solid var(--color-border)', 
                borderLeft: '4px solid var(--color-primary)', 
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)', 
                boxShadow: '0 4px 16px rgba(23, 50, 77, 0.04)',
                borderRadius: '0' 
              }}>
                <div style={{ fontSize: '32px', fontWeight: 700, color: 'var(--color-primary)', fontFamily: 'var(--font-serif)', lineHeight: 1, flexShrink: 0, opacity: 0.35, minWidth: '44px' }}>
                  01
                </div>
                <div>
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)' }}>
                    Оцениваем сроки и документы
                  </h3>
                  <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                    Анализируем трудовой договор, приказы, расчетные листки и акты. Проверяем процессуальные сроки обращения в суд (1 месяц при увольнении, 1 год по зарплате).
                  </p>
                </div>
              </div>
              <div key="02" className="hover-lift" style={{ 
                display: 'flex', 
                gap: '24px', 
                padding: '30px 26px', 
                border: '1px solid var(--color-border)', 
                borderLeft: '4px solid var(--color-primary)', 
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)', 
                boxShadow: '0 4px 16px rgba(23, 50, 77, 0.04)',
                borderRadius: '0' 
              }}>
                <div style={{ fontSize: '32px', fontWeight: 700, color: 'var(--color-primary)', fontFamily: 'var(--font-serif)', lineHeight: 1, flexShrink: 0, opacity: 0.35, minWidth: '44px' }}>
                  02
                </div>
                <div>
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)' }}>
                    Выстраиваем доказательную базу
                  </h3>
                  <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                    Собираем доказательства выполнения трудовой функции, переписки, свидетельские показания, справки о доходах и графики смен.
                  </p>
                </div>
              </div>
              <div key="03" className="hover-lift" style={{ 
                display: 'flex', 
                gap: '24px', 
                padding: '30px 26px', 
                border: '1px solid var(--color-border)', 
                borderLeft: '4px solid var(--color-primary)', 
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)', 
                boxShadow: '0 4px 16px rgba(23, 50, 77, 0.04)',
                borderRadius: '0' 
              }}>
                <div style={{ fontSize: '32px', fontWeight: 700, color: 'var(--color-primary)', fontFamily: 'var(--font-serif)', lineHeight: 1, flexShrink: 0, opacity: 0.35, minWidth: '44px' }}>
                  03
                </div>
                <div>
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)' }}>
                    Готовим требования и претензии
                  </h3>
                  <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                    Составляем досудебные претензии работодателю, заявления в Государственную инспекцию труда и прокуратуру.
                  </p>
                </div>
              </div>
              <div key="04" className="hover-lift" style={{ 
                display: 'flex', 
                gap: '24px', 
                padding: '30px 26px', 
                border: '1px solid var(--color-border)', 
                borderLeft: '4px solid var(--color-primary)', 
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)', 
                boxShadow: '0 4px 16px rgba(23, 50, 77, 0.04)',
                borderRadius: '0' 
              }}>
                <div style={{ fontSize: '32px', fontWeight: 700, color: 'var(--color-primary)', fontFamily: 'var(--font-serif)', lineHeight: 1, flexShrink: 0, opacity: 0.35, minWidth: '44px' }}>
                  04
                </div>
                <div>
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)' }}>
                    Защищаем интересы в суде
                  </h3>
                  <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                    Готовим исковое заявление и полностью представляем интересы работника во всех судебных инстанциях без обязательного присутствия клиента.
                  </p>
                </div>
              </div>
              <div key="05" className="hover-lift" style={{ 
                display: 'flex', 
                gap: '24px', 
                padding: '30px 26px', 
                border: '1px solid var(--color-border)', 
                borderLeft: '4px solid var(--color-primary)', 
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)', 
                boxShadow: '0 4px 16px rgba(23, 50, 77, 0.04)',
                borderRadius: '0' 
              }}>
                <div style={{ fontSize: '32px', fontWeight: 700, color: 'var(--color-primary)', fontFamily: 'var(--font-serif)', lineHeight: 1, flexShrink: 0, opacity: 0.35, minWidth: '44px' }}>
                  05
                </div>
                <div>
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)' }}>
                    Добиваемся исполнения решения
                  </h3>
                  <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                    Контролируем фактическое восстановление в должности, внесение записей в трудовую книжку и перечисление всех присужденных сумм.
                  </p>
                </div>
              </div>
          </div>

          <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, maxWidth: '720px', margin: 0 }}>
            Конкретный состав работ определяется после изучения документов и уточнения обстоятельств дела.
          </p>
        </div>
      </section>

      {/* ═══ БЛОК 5: КУРАТОР НАПРАВЛЕНИЯ ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name="Марина Валерьевна Смольянинова"
        position="Ведущий юрист ЮК «Де-Юре»"
        imageUrl="/images/smolyaninova.jpg"
        description={[
          'Специализируется на защите прав работников в сложных и конфликтных трудовых спорах: незаконное увольнение, принуждение к уходу, сокращение штата и невыплата зарплаты.',
          'Глубокий практический опыт в доказывании факта трудовых отношений при работе без договора («серая зарплата», подмена трудового договора гражданско-правовым).',
          'Успешная практика обжалования сокрытых несчастных случаев на производстве и взыскания компенсации тяжкого вреда здоровью с работодателей и Социального фонда РФ.',
          'Ведет дела в Липецке и Липецкой области; доступен дистанционный формат правовой помощи по всей территории России.'
        ]}
        buttonText="Обсудить трудовой спор с Мариной Валерьевной"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 6: ПРИМЕРЫ ДЕЛ ИЗ ПРАКТИКИ ═══ */}
      <CasesBlock
        title="Примеры дел из практики"
        showAllLink="/praktika/"
        showAllText="Смотреть все дела"
        showDemoWarning={true}
        cases={cases}
      />

      {/* ═══ БЛОК 7: КАК ПРОХОДИТ РАБОТА ═══ */}
      <ProcessBlock
        title="Как проходит работа"
        subtitle="Прозрачный и понятный процесс защиты прав работника на каждом этапе взаимодействия."
        alignTitle="left"
        steps={[
          {
            num: '01',
            title: 'Первичный анализ ситуации',
            desc: 'Изучаем трудовой договор, приказы, переписку и расчетные листки. Оцениваем риски и соблюдение сроков обращения.'
          },
          {
            num: '02',
            title: 'Сбор доказательной базы',
            desc: 'Запрашиваем недостающие документы у работодателя, в медицинских учреждениях и госорганах, фиксируем показания свидетелей.'
          },
          {
            num: '03',
            title: 'Претензия и досудебный этап',
            desc: 'Направляем работодателю мотивированное требование, при необходимости привлекаем трудовую инспекцию и прокуратуру.'
          },
          {
            num: '04',
            title: 'Судебная защита интересов',
            desc: 'Подаем исковое заявление в суд, участвуем во всех заседаниях, ходатайствуем об истребовании доказательств и экспертизах.'
          },
          {
            num: '05',
            title: 'Контроль исполнения решения',
            desc: 'Получаем исполнительный лист, контролируем внесение записей в трудовую книжку и фактическое перечисление денежных средств.'
          }
        ]}
        ctaTitle="Нужна помощь по трудовому спору?"
        ctaSubtitle="Опишите ситуацию — юрист оценит сроки обращения, риски и подготовит пошаговый план защиты."
        ctaButtonText="Обсудить ситуацию с юристом"
        ctaButtonHref="#form"
        footerNote="Для первичного анализа понадобятся: трудовой договор, приказы, расчетные листки или выписки со счетов. Возможен полностью дистанционный формат работы."
      />

      {/* ═══ БЛОК 8: СТОИМОСТЬ ЮРИДИЧЕСКОЙ ПОМОЩИ ═══ */}
      <PricingBlock
        title="Стоимость юридической помощи"
        subtitle="Честные и прозрачные цены. Точная стоимость фиксируется в договоре до начала работы."
        tiers={[
          {
            title: (
              <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Консультация</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и правовой анализ</span>
              </>
            ),
            subtitle: 'Изучение документов, расчет сроков давности и выработка плана защиты',
            
            features: [
              { name: 'Правовой анализ трудового договора и приказов', value: '[уточняется]' },
              { name: 'Проверка процессуальных сроков по ст. 392 ТК РФ', value: '[уточняется]' },
              { name: 'Расчет положенных выплат и компенсаций', value: '[уточняется]' }
            ],
            buttonText: 'Оценить ситуацию',
            buttonHref: '#form'
          },
          {
            title: (
              <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Досудебная защита</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и претензионная работа</span>
              </>
            ),
            subtitle: 'Подготовка документов работодателю, в ГИТ и органы прокуратуры',
            
            features: [
              { name: 'Составление мотивированной претензии', value: '[уточняется]' },
              { name: 'Жалобы в Государственную инспекцию труда', value: '[уточняется]' },
              { name: 'Переговоры с работодателем о мирном расчете', value: '[уточняется]' }
            ],
            buttonText: 'Заказать претензию',
            buttonHref: '#form'
          },
          {
            title: (
              <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Судебное ведение</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>трудового спора «под ключ»</span>
              </>
            ),
            subtitle: 'Полное представительство в суде до фактического решения и выплат',
            popular: true,
            badgeText: 'Популярно',
            features: [
              { name: 'Подготовка иска и формирование доказательств', value: '[уточняется]' },
              { name: 'Участие во всех судебных заседаниях', value: '[уточняется]' },
              { name: 'Исполнение решения и получение денег', value: '[уточняется]' }
            ],
            buttonText: 'Выбрать тариф',
            buttonHref: '#form'
          }
        ]}
        disclaimer="Стоимость услуг определяется индивидуально после изучения трудового договора и документов спора. В соответствии со статьей 393 ТК РФ работники освобождены от уплаты госпошлины и судебных расходов."
      />

      {/* ═══ БЛОК 9: ЧАСТЫЕ ВОПРОСЫ (FAQ) ═══ */}
      <FAQBlock
        superTitle="Частые вопросы"
        title={
          <>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Ответы на вопросы</span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>по трудовому праву</span>
          </>
        }
        subtitle="О сроках, документах, порядке выплат и судебной защите работников"
        ctaText="Задать вопрос юристу"
        ctaLink="#form"
        faqs={faqs}
      />

      {/* ═══ БЛОК 10: КОНТАКТНАЯ ФОРМА (КАНОНИЧЕСКИЙ ШАБЛОН) ═══ */}
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
                title="Получить оценку трудового спора"
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
