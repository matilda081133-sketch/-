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

export default function NezakonnoeUvolnenieClient() {
  const cases: CaseData[] = [
    {
      category: 'Прогул / Больничный',
      title: (
        <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Доказали</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>незаконность увольнения</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и вернули должность в суде</span>
        </>
      ),
      problem: 'Сотрудника уволили за однократный прогул, проигнорировав справку от врача о вызове неотложной помощи.',
      action: 'Запросили официальные данные скорой помощи, доказали уважительность отсутствия и нарушение ст. 193 ТК РФ.',
      result: 'Суд восстановил работника, взыскал 390 000 руб. за прогул и 50 000 руб. морального вреда.'
    },
    {
      category: 'Принуждение / Заявление',
      title: (
        <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Признали</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>заявление недействительным</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>из-за давления руководства</span>
        </>
      ),
      problem: 'Руководитель закрыл бухгалтера в кабинете и заставил написать заявление под угрозой уголовного преследования.',
      action: 'Истребовали аудиозаписи, видео с камер наблюдения и свидетельские показания коллег о факте психологического давления.',
      result: 'Увольнение признано незаконным; доверитель восстановлен с выплатой компенсации.'
    },
    {
      category: 'Ст. 261 ТК РФ / Защита матери',
      title: (
        <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Отменили</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>увольнение матери ребёнка</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>с выплатой 520 000 рублей</span>
        </>
      ),
      problem: 'Сотрудницу уволили якобы за непрохождение испытательного срока, зная о наличии маленького ребёнка.',
      action: 'Указали суду на императивный запрет ст. 261 ТК РФ и доказали отсутствие факта неудовлетворительного испытания.',
      result: 'Суд признал приказ недействительным и взыскал с работодателя все положенные выплаты.'
    }
  ];

  const faqs = [
    {
      q: 'Можно ли не восстанавливаться на работе, а только получить деньги?',
      a: 'Да! Работник вправе заявить требование не о восстановлении на прежнем месте, а об изменении формулировки основания увольнения (например, на «по собственному желанию») и даты увольнения на дату вынесения решения суда, с одновременным взысканием среднего заработка за весь период вынужденного прогула (ст. 394 ТК РФ).'
    },
    {
      q: 'Что делать, если работодатель отказывается выдать трудовую книжку и приказ?',
      a: 'Работодатель обязан выдать копии связанных с работой документов в течение 3 рабочих дней со дня подачи письменного заявления (ст. 62 ТК РФ). Если документы не выданы, юрист направляет официальное адвокатское требование либо ходатайствует перед судом об их принудительном истребовании.'
    },
    {
      q: 'Когда вступает в силу решение о восстановлении на работе?',
      a: 'Решение суда о восстановлении на работе незаконно уволенного работника подлежит немедленному исполнению (ст. 396 ТК РФ). Работодатель обязан допустить сотрудника к работе на следующий же день после оглашения судебного решения, не дожидаясь вступления акта в законную силу.'
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
        'name': 'Незаконное увольнение в Липецке — помощь юриста | Де-Юре',
        'provider': { '@id': 'https://dejure-help.ru/#organization' },
        'areaServed': {
          '@type': 'AdministrativeArea',
          'name': 'Липецк и Липецкая область'
        },
        'description': 'Помощь юриста при незаконном увольнении в Липецке: восстановление на работе, отмена дисциплинарных взысканий, взыскание среднего заработка за вынужденный прогул.'
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
            <span style={{ color: 'var(--color-text-main)' }}>Незаконное увольнение и восстановление на работе в Липецке</span>
          </>
        }
        superTitle="Трудовой юрист в Липецке"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Незаконное увольнение
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              и восстановление
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              на работе в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Проверка оснований и порядка увольнения, отмена незаконных приказов, восстановление в должности через суд, взыскание среднего заработка за вынужденный прогул и компенсация морального вреда.
          </span>
        }
        primaryCtaText="Обсудить ситуацию с юристом"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_cta_nezakonnoe_uvolnenie"
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
        trustItems={[{"text":"Срок обращения в суд — 1 месяц (ст. 392 ТК РФ)"},{"text":"Взыскание оплаты за все время прогула"},{"text":"Изменение формулировки увольнения в трудовой"},{"text":"Куратор — юрист М. В. Смольянинова"}]}
        urgentHint="Внимание: срок подачи иска о восстановлении на работе составляет всего 30 дней с момента получения приказа или трудовой книжки. Промедление может привести к отказу суда по формальным основаниям!"
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
                tag: 'Статья / Прогул',
                title: (
                  <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Увольнение за прогул</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>или неоднократный проступок</span>
                  </>
                ),
                desc: 'Приказ издан без истребования письменных объяснений, в период болезни либо при наличии уважительных причин отсутствия.'
              },
              {
                tag: 'Давление / Принуждение',
                title: (
                  <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Принуждение к увольнению</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>«по собственному желанию»</span>
                  </>
                ),
                desc: 'Психологическое давление руководства, угрозы уволить по компрометирующей статье или создание невыносимых условий.'
              },
              {
                tag: 'Испытательный срок',
                title: (
                  <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Увольнение на</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>испытательном сроке</span>
                  </>
                ),
                desc: 'Расторжение договора без конкретных доказательств несоответствия должности или с нарушением 3-дневного срока уведомления.'
              },
              {
                tag: 'Беременность / Дети',
                title: (
                  <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Увольнение</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>беременных и матерей</span>
                  </>
                ),
                desc: 'Грубое нарушение ст. 261 ТК РФ: увольнение беременных женщин, матерей детей до 3 лет или матерей-одиночек.'
              },
              {
                tag: 'Больничный / Отпуск',
                title: (
                  <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Увольнение в период</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>отпуска или больничного</span>
                  </>
                ),
                desc: 'Прямой запрет закона: работодатель не вправе расторгать трудовой договор по своей инициативе во время нетрудоспособности.'
              },
              {
                tag: 'Формулировка / Книжка',
                title: (
                  <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Изменение статьи</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>увольнения в трудовой</span>
                  </>
                ),
                desc: 'Исправление порочащей записи в трудовой книжке на увольнение по собственному желанию или соглашению сторон.'
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
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Анализ приказа</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и оснований увольнения</span>
              </>
            ),
            subtitle: 'Правовая экспертиза документов, оценка соблюдения процедуры и сроков',
            
            features: [
              { name: 'Проверка законности основания по ТК РФ', value: '[уточняется]' },
              { name: 'Анализ соблюдения процедуры взыскания', value: '[уточняется]' },
              { name: 'Расчет компенсации за вынужденный прогул', value: '[уточняется]' }
            ],
            buttonText: 'Оценить шансы',
            buttonHref: '#form'
          },
          {
            title: (
              <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Подготовка иска</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и сбор доказательств</span>
              </>
            ),
            subtitle: 'Формирование комплекта для районного суда и ходатайств об истребовании',
            
            features: [
              { name: 'Составление искового заявления в суд', value: '[уточняется]' },
              { name: 'Расчет среднего заработка за прогул', value: '[уточняется]' },
              { name: 'Истребование табелей и локальных актов', value: '[уточняется]' }
            ],
            buttonText: 'Заказать иск',
            buttonHref: '#form'
          },
          {
            title: (
              <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Представительство</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>в суде «под ключ»</span>
              </>
            ),
            subtitle: 'Полное ведение процесса до восстановления и зачисления всех денег',
            popular: true,
            badgeText: 'Популярно',
            features: [
              { name: 'Участие во всех судебных заседаниях', value: '[уточняется]' },
              { name: 'Допрос свидетелей и опровержение позиции фирмы', value: '[уточняется]' },
              { name: 'Немедленное исполнение решения суда', value: '[уточняется]' }
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
