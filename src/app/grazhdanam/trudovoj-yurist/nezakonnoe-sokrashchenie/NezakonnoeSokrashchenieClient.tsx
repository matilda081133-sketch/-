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

export default function NezakonnoeSokrashchenieClient() {
  const cases: CaseData[] = [
    {
      category: 'Вакансии / Сокрытие',
      title: (
        <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Восстановили</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>инженера из-за сокрытия</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>вакансий при сокращении</span>
        </>
      ),
      problem: 'Завод сократил ведущего инженера, скрыв наличие 4 свободных инженерных ставок в смежном отделе.',
      action: 'Истребовали в суде полное штатное расписание и доказали наличие свободных позиций на дату увольнения.',
      result: 'Суд отменил приказ о сокращении, восстановил инженера и взыскал 440 000 руб.'
    },
    {
      category: 'Преимущество / Ст. 179 ТК',
      title: (
        <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Защитили</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>сотрудника с детьми</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>от незаконного сокращения</span>
        </>
      ),
      problem: 'Из двух менеджеров сократили единственного кормильца семьи с высшей категорией квалификации.',
      action: 'Предоставили документы об образовании, результатах аттестации и свидетельства о рождении иждивенцев.',
      result: 'Сокращение признано незаконным; сотрудник восстановлен на работе.'
    },
    {
      category: 'Выплаты / Ст. 178 ТК',
      title: (
        <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Взыскали</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>пособие за 3 месяца</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>с процентами и ущербом</span>
        </>
      ),
      problem: 'Организация отказала уволенному сотруднику в выплате среднего заработка за 2-й и 3-й месяцы поиска работы.',
      action: 'Подтвердили своевременную постановку на учет в центре занятости и отсутствие трудоустройства.',
      result: 'Суд обязал выплатить 260 000 руб. пособия плюс проценты за задержку.'
    }
  ];

  const faqs = [
    {
      q: 'Какие выплаты положены работнику при сокращении штата?',
      a: 'При сокращении работнику выплачиваются: зарплата за отработанное время, компенсация за неиспользованный отпуск и выходное пособие в размере среднего месячного заработка. Также сохраняется средний заработок на период трудоустройства за 2-й месяц (а по решению службы занятости — и за 3-й месяц).'
    },
    {
      q: 'Кто имеет преимущественное право остаться на работе при сокращении?',
      a: 'Преимущественное право имеют работники с более высокой производительностью труда и квалификацией. При равных показателях предпочтение отдается: семейным при наличии 2+ иждивенцев, лицам, в семье которых нет других работников с доходом, работникам, получившим в организации трудовое увечье (ст. 179 ТК РФ).'
    },
    {
      q: 'Можно ли уволиться до истечения 2 месяцев предупреждения о сокращении?',
      a: 'Да. С письменного согласия работника трудовой договор может быть расторгнут до истечения 2 месяцев с выплатой дополнительной компенсации в размере среднего заработка, рассчитанного пропорционально времени, оставшемуся до конца срока (ч. 3 ст. 180 ТК РФ).'
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
        'name': 'Незаконное сокращение в Липецке — помощь юриста | Де-Юре',
        'provider': { '@id': 'https://dejure-help.ru/#organization' },
        'areaServed': {
          '@type': 'AdministrativeArea',
          'name': 'Липецк и Липецкая область'
        },
        'description': 'Помощь юриста при незаконном сокращении штата в Липецке: проверка процедуры, преимущественное право, предложение вакансий, выплата выходного пособия и суд.'
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
            <span style={{ color: 'var(--color-text-main)' }}>Незаконное сокращение штата в Липецке</span>
          </>
        }
        superTitle="Трудовой юрист в Липецке"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Незаконное
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              сокращение штата
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Проверка законности и реальности сокращения должности, контроль предложения всех вакансий, защита преимущественного права и взыскание полного выходного пособия через суд.
          </span>
        }
        primaryCtaText="Обсудить ситуацию с юристом"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_cta_nezakonnoe_sokrashchenie"
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
        trustItems={[{"text":"Проверка реальности сокращения штата"},{"text":"Контроль соблюдения преимущественного права"},{"text":"Взыскание выходного пособия и среднего заработка"},{"text":"Куратор — юрист М. В. Смольянинова"}]}
        urgentHint="Если вас предупредили о сокращении, не подписывайте соглашения об увольнении без выплаты компенсаций. Юрист оценит, соблюдены ли ваши трудовые гарантии."
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
                tag: 'Фиктивность / Штат',
                title: (
                  <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Мнимое или фиктивное</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>сокращение должности</span>
                  </>
                ),
                desc: 'Должность переименовали или обязанности передали новому сотруднику, а реального сокращения штата компании не произошло.'
              },
              {
                tag: 'Вакансии / Сокрытие',
                title: (
                  <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Не предложили все</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>имеющиеся вакансии</span>
                  </>
                ),
                desc: 'Работодатель обязан предлагать все подходящие вакансии в течение всего 2-месячного срока предупреждения (ч. 3 ст. 81 ТК РФ).'
              },
              {
                tag: 'Квалификация / Преимущество',
                title: (
                  <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Нарушение</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>преимущественного права</span>
                  </>
                ),
                desc: 'Оставлены сотрудники с меньшей производительностью труда и квалификацией, либо проигнорированы семейные льготы (ст. 179 ТК РФ).'
              },
              {
                tag: 'Сроки / Уведомление',
                title: (
                  <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Нарушение сроков</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>предупреждения о сокращении</span>
                  </>
                ),
                desc: 'Работник не был письменно предупрежден персонально под подпись минимум за 2 месяца до планируемой даты увольнения.'
              },
              {
                tag: 'Выплаты / Пособие',
                title: (
                  <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Невыплата</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>выходного пособия</span>
                  </>
                ),
                desc: 'Отказ выплатить выходное пособие в размере среднего заработка за 1-й, 2-й и 3-й месяцы периода трудоустройства (ст. 178 ТК РФ).'
              },
              {
                tag: 'Профсоюз / Защита',
                title: (
                  <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Игнорирование мнения</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>профсоюзной организации</span>
                  </>
                ),
                desc: 'Увольнение члена профсоюза без запроса мотивированного мнения выборного органа первичной организации (ст. 373 ТК РФ).'
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
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Аудит процедуры</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>сокращения штата</span>
              </>
            ),
            subtitle: 'Проверка уведомления, штатного расписания и списков вакансий',
            
            features: [
              { name: 'Анализ штатного расписания до и после', value: '[уточняется]' },
              { name: 'Проверка соблюдения преимущественного права', value: '[уточняется]' },
              { name: 'Оценка полноты предложенных вакансий', value: '[уточняется]' }
            ],
            buttonText: 'Проверить сокращение',
            buttonHref: '#form'
          },
          {
            title: (
              <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Претензии</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и жалобы в ГИТ</span>
              </>
            ),
            subtitle: 'Подготовка мотивированных возражений и защита от увольнения',
            
            features: [
              { name: 'Заявление работодателю о нарушении ст. 179 ТК РФ', value: '[уточняется]' },
              { name: 'Жалоба в трудовую инспекцию и прокуратуру', value: '[уточняется]' },
              { name: 'Переговоры об увеличении суммы компенсации', value: '[уточняется]' }
            ],
            buttonText: 'Заказать претензию',
            buttonHref: '#form'
          },
          {
            title: (
              <>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Судебное оспаривание</span>
                      <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>сокращения «под ключ»</span>
              </>
            ),
            subtitle: 'Восстановление на работе и взыскание выплат за все время процесса',
            popular: true,
            badgeText: 'Популярно',
            features: [
              { name: 'Исковое заявление о восстановлении в должности', value: '[уточняется]' },
              { name: 'Истребование штатных расписаний через суд', value: '[уточняется]' },
              { name: 'Взыскание компенсации вынужденного прогула', value: '[уточняется]' }
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
