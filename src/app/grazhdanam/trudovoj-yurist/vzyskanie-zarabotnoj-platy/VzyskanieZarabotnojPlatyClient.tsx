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

export default function VzyskanieZarabotnojPlatyClient() {
  const cases: CaseData[] = [
    {
      category: 'Расчет при увольнении',
      title: (
        <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Взыскали расчет</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>при увольнении и 60 000</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>рублей компенсации долга</span>
        </>
      ),
      problem: 'Торговая компания отказалась выплачивать менеджеру процент от продаж и компенсацию отпуска за 2 года.',
      action: 'Собрали отчеты о продажах, табели учета времени и подали иск с расчетом процентов по ст. 236 ТК РФ.',
      result: 'Суд полностью удовлетворил иск и взыскал долг со всеми компенсациями.'
    },
    {
      category: 'Переработки / Сверхурочные',
      title: (
        <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Доказали переработки</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и отсудили 320 000 руб.</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>за ночные смены водителю</span>
        </>
      ),
      problem: 'Водителю экспедитору не оплачивали сверхурочные часы и ночные рейсы, списывая на «ненормированный день».',
      action: 'Истребовали данные тахографов, путевые листы и геолокацию служебного транспорта.',
      result: 'Суд признал работу сверхурочной и взыскал оплату в полуторном и двойном размере.'
    },
    {
      category: 'Работа без договора',
      title: (
        <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Установили факт</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>трудовых отношений</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и взыскали 580 000 руб.</span>
        </>
      ),
      problem: 'Мастер работал на автосервисе 10 месяцев без договора, после чего владелец выгнал его без выплаты денег.',
      action: 'Предоставили в суд записи камер, заказ-наряды с подписями мастера и свидетельские показания клиентов.',
      result: 'Суд признал факт трудовых отношений и обязал выплатить заработок за все 10 месяцев.'
    }
  ];

  const faqs = [
    {
      q: 'Какая компенсация положена за задержку выплаты зарплаты?',
      a: 'В соответствии со ст. 236 ТК РФ при нарушении срока выплаты заработной платы работодатель обязан выплатить её с уплатой процентов (денежной компенсации) в размере не ниже 1/150 действующей ключевой ставки ЦБ РФ от невыплаченных в срок сумм за каждый день задержки, начиная со следующего дня после установленного срока выплаты.'
    },
    {
      q: 'Можно ли приостановить работу, если зарплату задерживают?',
      a: 'Да. В случае задержки выплаты зарплаты на срок более 15 дней работник имеет право, письменно известив работодателя, приостановить работу на весь период до выплаты задержанной суммы (ст. 142 ТК РФ). В период приостановки работы за сотрудником сохраняется средний заработок!'
    },
    {
      q: 'Можно ли привлечь директора к уголовной ответственности за невыплату?',
      a: 'Да. По ст. 145.1 УК РФ за полную невыплату зарплаты свыше 2 месяцев либо частичную свыше 3 месяцев руководителю грозит уголовная ответственность вплоть до лишения свободы. Подача заявления в следственный комитет часто мотивирует компанию немедленно погасить долг.'
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
        'name': 'Взыскание заработной платы в Липецке — юрист по зарплате | Де-Юре',
        'provider': { '@id': 'https://dejure-help.ru/#organization' },
        'areaServed': {
          '@type': 'AdministrativeArea',
          'name': 'Липецк и Липецкая область'
        },
        'description': 'Помощь юриста по взысканию заработной платы в Липецке: задержка выплат, расчет при увольнении, невыплата премий, компенсация по ст. 236 ТК РФ и суд.'
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
            <span style={{ color: 'var(--color-text-main)' }}>Взыскание заработной платы и выплат в Липецке</span>
          </>
        }
        superTitle="Трудовой юрист в Липецке"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Взыскание
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              заработной платы
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              и выплат в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Проверка трудового договора и расчетных листков, расчет задолженности с процентами по ст. 236 ТК РФ, взыскание премий, отпускных и окончательного расчета через суд.
          </span>
        }
        primaryCtaText="Обсудить ситуацию с юристом"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_cta_vzyskanie_zarabotnoj_platy"
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
        trustItems={[{"text":"Срок обращения в суд — 1 год (ч. 2 ст. 392 ТК РФ)"},{"text":"Взыскание компенсации за каждый день задержки"},{"text":"Освобождение работника от всех госпошлин"},{"text":"Куратор — юрист М. В. Смольянинова"}]}
        urgentHint="За задержку выплаты зарплаты работодатель несет материальную (ст. 236 ТК РФ), административную (ст. 5.27 КоАП РФ) и уголовную ответственность (ст. 145.1 УК РФ)."
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
                tag: 'Задержка / Невыплата',
                title: (
                  <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Систематическая</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>задержка зарплаты</span>
                  </>
                ),
                desc: 'Работодатель задерживает выплату более чем на 15 дней, платит частями или полностью прекратил начисления.'
              },
              {
                tag: 'Расчет / Увольнение',
                title: (
                  <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Невыплата</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>расчета при увольнении</span>
                  </>
                ),
                desc: 'В день увольнения не выплачены оклад, компенсация за все неиспользованные отпуска и положенные премии (ст. 140 ТК РФ).'
              },
              {
                tag: 'Премии / Бонусы',
                title: (
                  <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Невыплата премий</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и надбавок к окладу</span>
                  </>
                ),
                desc: 'Необоснованное лишение премии («депремирование»), невыплата годовых бонусов или надбавок за выслугу лет.'
              },
              {
                tag: 'Переработки / Ночные',
                title: (
                  <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Неоплата</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>сверхурочной работы</span>
                  </>
                ),
                desc: 'Отказ оплачивать переработки в полуторном/двойном размере (ст. 152 ТК РФ) и работу в праздничные дни (ст. 153 ТК РФ).'
              },
              {
                tag: 'Серая зарплата / Долг',
                title: (
                  <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Взыскание</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>«серой» зарплаты</span>
                  </>
                ),
                desc: 'Доказывание реального размера дохода по перепискам, ведомостям и регулярным банковским переводам.'
              },
              {
                tag: 'Без договора / Доказывание',
                title: (
                  <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Невыплата денег при</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>работе без оформления</span>
                  </>
                ),
                desc: 'Установление факта трудовых отношений и принудительное взыскание заработка за весь отработанный период.'
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
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Расчет долга</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и претензия работодателю</span>
              </>
            ),
            subtitle: 'Анализ расчетных листков, расчет процентов и направление претензии',
            
            features: [
              { name: 'Детальный расчет задолженности по ТК РФ', value: '[уточняется]' },
              { name: 'Расчет процентов за задержку по ст. 236 ТК РФ', value: '[уточняется]' },
              { name: 'Составление официальной претензии', value: '[уточняется]' }
            ],
            buttonText: 'Рассчитать долг',
            buttonHref: '#form'
          },
          {
            title: (
              <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Жалобы в ГИТ</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и прокуратуру Липецка</span>
              </>
            ),
            subtitle: 'Привлечение контролирующих органов для давления на работодателя',
            
            features: [
              { name: 'Жалоба в Государственную инспекцию труда', value: '[уточняется]' },
              { name: 'Заявление в прокуратуру по ст. 145.1 УК РФ', value: '[уточняется]' },
              { name: 'Сопровождение проверки надзорных органов', value: '[уточняется]' }
            ],
            buttonText: 'Заказать жалобу',
            buttonHref: '#form'
          },
          {
            title: (
              <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Взыскание выплат</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>через суд «под ключ»</span>
              </>
            ),
            subtitle: 'Полное судебное представительство, арест счетов фирмы и получение денег',
            popular: true,
            badgeText: 'Популярно',
            features: [
              { name: 'Подготовка иска и обеспечительных мер', value: '[уточняется]' },
              { name: 'Участие во всех судебных заседаниях', value: '[уточняется]' },
              { name: 'Предъявление листа напрямую в банк должника', value: '[уточняется]' }
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
