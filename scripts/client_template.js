const fs = require('fs');

function renderClientComponent(config) {
  const {
    componentName,
    breadcrumbs,
    superTitle,
    heroTitle,
    subtitle,
    primaryCtaText,
    primaryCtaAnalytics,
    trustItems,
    situationsTitle,
    situationsSubtitle,
    situations,
    checkpointsTitle,
    checkpointsSubtitle,
    checkpoints,
    directionsTitle,
    directionsSubtitle,
    directions,
    casesSuperTitle,
    casesTitle,
    casesSubtitle,
    cases,
    processTitle,
    processSubtitle,
    processSteps,
    pricingTitle,
    pricingSubtitle,
    pricingTiers,
    pricingDisclaimer,
    faqSuperTitle,
    faqTitle,
    faqSubtitle,
    faqs,
    formSuperTitle,
    formTitle,
    formSubtitle,
    formCommentPlaceholder,
    hiddenFields,
    canonical,
    serviceName,
    serviceDescription
  } = config;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        'itemListElement': breadcrumbs.map((b, i) => ({
          '@type': 'ListItem',
          'position': i + 1,
          'name': b.name,
          'item': b.link ? ('https://dejure-help.ru' + b.link) : canonical
        }))
      },
      {
        '@type': 'Service',
        'name': serviceName,
        'description': serviceDescription,
        'url': canonical,
        'areaServed': {
          '@type': 'AdministrativeArea',
          'name': 'Липецк и Липецкая область'
        },
        'provider': {
          '@type': 'LegalService',
          'name': 'Юридическая компания «Де-Юре»',
          'url': 'https://dejure-help.ru',
          'telephone': '+7-910-350-31-11',
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': 'пл. Театральная, д. 3, офис 401',
            'addressLocality': 'Липецк',
            'addressCountry': 'RU'
          }
        }
      },
      {
        '@type': 'FAQPage',
        'mainEntity': faqs.map(f => ({
          '@type': 'Question',
          'name': f.q,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': f.a
          }
        }))
      }
    ]
  };

  return `'use client';

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

export default function ${componentName}() {
  const jsonLd = ${JSON.stringify(jsonLd, null, 2)};

  const situations = ${JSON.stringify(situations, null, 2)};
  ${checkpoints ? `const checkpoints = ${JSON.stringify(checkpoints, null, 2)};` : ''}
  const directions = ${JSON.stringify(directions, null, 2)};
  const cases: CaseData[] = ${JSON.stringify(cases, null, 2)};
  const processSteps = ${JSON.stringify(processSteps, null, 2)};
  const pricingTiers = ${JSON.stringify(pricingTiers, null, 2)};
  const faqs = ${JSON.stringify(faqs, null, 2)};

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
            ${breadcrumbs.map((b, i) => {
              if (i < breadcrumbs.length - 1) {
                return `<Link href="${b.link}">${b.name}</Link><span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>`;
              }
              return `<span style={{ color: 'var(--color-text-main)' }}>${b.name}</span>`;
            }).join('\n            ')}
          </>
        }
        superTitle=${JSON.stringify(superTitle)}
        title={
          <span style={{ display: 'block' }}>
            ${heroTitle.map(line => `<span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>${line}</span>`).join(' ')}
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            ${subtitle}
          </span>
        }
        primaryCtaText=${JSON.stringify(primaryCtaText)}
        primaryCtaLink="#form"
        primaryCtaAnalytics=${JSON.stringify(primaryCtaAnalytics)}
        primaryCtaSubtext={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Перезвоним вам в течение 15 минут
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              в рабочее время
            </span>
          </span>
        }
        trustItems={${JSON.stringify(trustItems, null, 2)}}
        imageUrl="/images/smolyaninova.jpg"
        imageObjectPosition="50% -75px"
        imageName="Марина Валерьевна Смольянинова"
        imageSubtitle="Ведущий юрист ЮК «Де-Юре», куратор направления «Трудовые споры с работниками»"
      />

      {/* ═══ БЛОК 2: СИТУАЦИИ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              ${situationsTitle}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              ${situationsSubtitle}
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {situations.map((sit, i) => (
              <div
                key={i}
                className="hover-lift"
                style={{
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
                }}
              >
                <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', opacity: 0.08, pointerEvents: 'none' }}>
                  <svg width="100" height="100" viewBox="0 0 24 24" fill="var(--color-deep-blue)">
                    <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                {sit.tag && (
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
                )}

                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', fontWeight: 600, color: 'var(--color-deep-blue)', lineHeight: 1.4, margin: '0 0 14px 0' }}>
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

      ${checkpoints ? `
      {/* ═══ БЛОК 3: ЧТО ПРОВЕРЯЕМ / ОСОБЕННОСТИ ═══ */}
      <section className="section bg-cream" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              ${checkpointsTitle}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              ${checkpointsSubtitle}
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {checkpoints.map((cp, i) => (
              <div
                key={i}
                className="hover-lift"
                style={{
                  padding: '32px 28px',
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-gold)',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative'
                }}
              >
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', fontWeight: 600, color: 'var(--color-deep-blue)', lineHeight: 1.4, margin: '0 0 12px 0' }}>
                  {cp.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {cp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      ` : ''}

      {/* ═══ БЛОК НАПРАВЛЕНИЙ / СВЯЗАННЫХ УСЛУГ ═══ */}
      <section id="directions" className="section" style={{ padding: '64px 0', background: checkpoints ? 'var(--color-white)' : 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>${directionsTitle}</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              ${directionsSubtitle}
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '32px' }}>
            {directions.map((dir, i) => (
              <a key={i} href={dir.link} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div
                  className="card service-card"
                  style={{
                    height: '100%',
                    minHeight: '220px',
                    padding: '28px',
                    background: 'var(--color-white)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    borderTop: '3px solid var(--color-primary)',
                    cursor: 'pointer'
                  }}
                >
                  <div>
                    <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', lineHeight: 1.35 }}>
                      {dir.title}
                    </h3>
                    <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                      {dir.desc}
                    </p>
                  </div>
                  <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, marginTop: 'auto', paddingTop: '14px', borderTop: '1px solid rgba(23, 50, 77, 0.06)' }}>
                    <span>Подробнее</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Баннер «Не нашли свою ситуацию?» */}
          <div
            style={{
              marginTop: '32px',
              background: 'linear-gradient(135deg, var(--color-deep-blue) 0%, #17324D 100%)',
              padding: '40px 48px',
              borderTop: '3px solid var(--color-gold)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '32px',
              flexWrap: 'wrap',
              boxShadow: '0 12px 30px rgba(11, 28, 42, 0.15)'
            }}
          >
            <div style={{ flex: '1 1 500px', minWidth: '280px' }}>
              <h3 style={{ margin: '0 0 12px 0', fontSize: '26px', fontFamily: 'var(--font-serif)', color: '#FFFFFF', lineHeight: 1.3 }}>
                Не нашли свою ситуацию?
              </h3>
              <p style={{ margin: 0, fontSize: '15px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6 }}>
                <span style={{ display: 'inline-block' }}>Опишите ваш трудовой вопрос в форме. Изучим имеющиеся документы</span> <br />
                <span style={{ display: 'inline-block' }}>и предложим возможные варианты решения.</span>
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <a
                href="#form"
                className="btn white-btn-custom"
                style={{
                  display: 'inline-block',
                  textAlign: 'center',
                  fontSize: '15px',
                  padding: '14px 28px',
                  fontWeight: 600,
                  whiteSpace: 'nowrap'
                }}
              >
                Описать ситуацию
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 5: КУРАТОР НАПРАВЛЕНИЯ ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name="Марина Валерьевна Смольянинова"
        position={<>Ведущий юрист ЮК «Де-Юре»,<br />куратор направления «Трудовые споры с работниками»</>}
        imageUrl="/images/smolyaninova.jpg"
        imagePosition="50% -75px"
        profileHref="/specialisty/smolyaninova-marina-valerevna/"
        profileText="Подробнее о Марине Валерьевне Смольяниновой →"
        description={[
          'Марина Валерьевна курирует обращения работодателей по трудовым спорам: проводит первичную правовую оценку, определяет необходимые документы и последовательность действий, готовит позицию для переговоров, взаимодействия с государственными органами и судебной защиты.',
          'Опыт работы в Федеральной службе судебных приставов и представительства организаций в судах помогает оценивать не только перспективу спора, но и практическое исполнение решения.'
        ]}
      />

      {/* ═══ БЛОК 6: ПРИМЕРЫ ИЗ ПРАКТИКИ ═══ */}
      <CasesBlock
        superTitle=${JSON.stringify(casesSuperTitle || 'Судебная и досудебная практика')}
        title={${casesTitle}}
        subtitle=${JSON.stringify(casesSubtitle || 'Примеры урегулирования трудовых споров и защиты работодателей')}
        cases={cases}
        allCasesLink="/praktika/"
        allCasesText="Смотреть все дела →"
        ctaTitle="Нужна помощь по аналогичному трудовому вопросу?"
        ctaSubtitle="Опишите обстоятельства — юрист оценит перспективы дела и предложит план действий."
        ctaButtonText="Обсудить ситуацию"
        ctaButtonHref="#form"
      />

      {/* ═══ БЛОК 7: КАК ПРОХОДИТ РАБОТА ═══ */}
      <ProcessBlock
        superTitle="Порядок взаимодействия"
        title=${JSON.stringify(processTitle || 'Как проходит работа')}
        subtitle=${JSON.stringify(processSubtitle || 'Прозрачный и понятный процесс от первой консультации до защиты позиции компании')}
        steps={processSteps}
      />

      {/* ═══ БЛОК 8: СТОИМОСТЬ ЮРИДИЧЕСКОЙ ПОМОЩИ ═══ */}
      <PricingBlock
        title=${JSON.stringify(pricingTitle || 'Стоимость юридической помощи')}
        subtitle=${JSON.stringify(pricingSubtitle || 'Стоимость зависит от стадии спора, объёма документов, срочности и необходимости участия в переговорах, проверке или суде.')}
        tiers={pricingTiers}
        disclaimer=${JSON.stringify(pricingDisclaimer || 'Стоимость определяется после уточнения задачи и изучения имеющихся документов. Состав услуг, цена и порядок оплаты фиксируются в договоре до начала работы. Оплата вознаграждения исполнителя не зависит от исхода дела и не включает государственные пошлины и сопутствующие расходы.')}
      />

      {/* ═══ БЛОК 9: ЧАСТЫЕ ВОПРОСЫ (FAQ) ═══ */}
      <FAQBlock
        superTitle=${JSON.stringify(faqSuperTitle || 'Частые вопросы работодателей')}
        title={${faqTitle}}
        subtitle=${JSON.stringify(faqSubtitle || 'О процедурах, проверках, рисках и порядке работы')}
        ctaText="Задать свой вопрос"
        ctaLink="#form"
        faqs={faqs}
      />

      {/* ═══ БЛОК 10: ФИНАЛЬНАЯ ФОРМА ═══ */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px', padding: '80px 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>
                  ${formSuperTitle || 'Связаться с нами'}
                </span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                ${formTitle}
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                ${formSubtitle}
              </p>
              
              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация юриста</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Позвоните прямо сейчас: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (910) 350-31-11</a>
                </p>
              </div>

              <div style={{ background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Конфиденциальность:</strong>
                Не указывайте в форме паспортные данные работников, сведения о здоровье и коммерческую тайну. Документы можно передать юристу после согласования защищённого способа связи.
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm
                title="Написать нам"
                subtitle={
                  <>
                    <span style={{ display: 'inline-block' }}>Оставьте имя и номер телефона. Юрист свяжется с вами</span> <br />
                    <span style={{ display: 'inline-block' }}>в течение 15 минут в рабочее время.</span>
                  </>
                }
                subtext={
                  <>
                    <span style={{ display: 'inline-block' }}>Если вы оставите заявку вечером или в&nbsp;выходной день,</span> <br />
                    <span style={{ display: 'inline-block' }}>мы перезвоним в&nbsp;ближайший рабочий день.</span>
                  </>
                }
                buttonText="Отправить обращение"
                commentPlaceholder=${JSON.stringify(formCommentPlaceholder || 'Кратко опишите ситуацию: спор с работником, проверка ГИТ, увольнение, кадровый вопрос...')}
                hiddenFields={${JSON.stringify(hiddenFields, null, 2)}}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
`;
}

module.exports = { renderClientComponent };
