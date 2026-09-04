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

export default function BankrotstvoFizicheskihLicClient() {
  const cases: CaseData[] = [
    {
      category: 'Потеря дохода / 1,4 млн ₽',
      title: 'Освободили от кредитов после потери основного дохода',
      problem: 'У клиента накопилось 1,4 млн ₽ по потребительским кредитам и кредитным картам перед пятью банками. После сокращения доход снизился более чем вдвое, просрочки росли. В собственности оставалась только единственная квартира, не находившаяся в залоге.',
      action: 'Проверили кредитные договоры, доходы и сделки за предшествующий период, собрали сведения обо всех кредиторах и имуществе, подготовили заявление и сопровождали процедуру реализации имущества. Отдельно подтвердили статус квартиры и раскрыли финансовому управляющему все необходимые сведения.',
      result: 'Суд завершил процедуру и освободил клиента от дальнейшего исполнения требований по кредитам и кредитным картам. Единственная квартира в конкурсную массу не вошла.'
    },
    {
      category: 'Имущество супругов / 2,2 млн ₽',
      title: 'Заранее объяснили последствия продажи автомобиля семьи',
      problem: 'Общая задолженность клиента составляла 2,2 млн ₽. В браке был приобретён автомобиль, оформленный на должника. Клиент рассчитывал сохранить машину и опасался, что супруг потеряет свою долю в общем имуществе.',
      action: 'До подачи заявления оценили статус автомобиля, семейные документы и происхождение обязательств. Объяснили порядок реализации общего имущества и расчёта с супругом, подготовили подтверждения доли второго супруга и сопровождали вопрос в процедуре.',
      result: 'Автомобиль был реализован в установленном порядке, супруг получил причитающуюся ему часть выручки. После завершения расчётов суд освободил клиента от оставшейся кредитной задолженности. Клиент знал имущественные последствия до начала дела.'
    },
    {
      category: 'Оценка рисков / Отказ от подачи',
      title: 'Не стали начинать банкротство из-за риска оспаривания сделки',
      problem: 'Клиент хотел подать заявление при долге 980 000 ₽, но незадолго до обращения продал автомобиль близкому родственнику по цене существенно ниже рыночной и направил часть денег одному кредитору.',
      action: 'Проверили документы по сделке и платежам, объяснили риск её оспаривания, возврата имущества в конкурсную массу и вопросов к добросовестности клиента. Вместо немедленной подачи подготовили безопасный план дальнейших действий и переговоров с кредиторами.',
      result: 'Клиент отказался от неподготовленного банкротства и не понёс расходы на процедуру с заранее выявленным высоким риском. Решение было принято после анализа, а не на основании обещания гарантированно списать долг.'
    }
  ];

  const faqs = [
    {
      q: 'Обязательно ли иметь долг 500 000 ₽?',
      a: 'Нет. При предвидении банкротства гражданин вправе обратиться в суд и при меньшей сумме, если обстоятельства очевидно показывают невозможность исполнить обязательства в срок и имеются признаки неплатёжеспособности или недостаточности имущества. Порог 500 000 ₽ относится к предусмотренной законом обязанности обратиться при совокупности условий.'
    },
    {
      q: 'Нужно ли ждать три месяца просрочки?',
      a: 'Для собственного заявления гражданина закон не устанавливает универсальное правило «ждать три месяца». Суд оценивает признаки неплатёжеспособности, имущество, доход и обстоятельства возникновения долга.'
    },
    {
      q: 'Какие долги могут не списать?',
      a: 'Сохраняются алименты, текущие платежи, требования о возмещении вреда жизни или здоровью, морального вреда и другие прямо названные законом обязательства. Освобождение также может не применяться при сокрытии имущества, недостоверных сведениях и ином установленном недобросовестном поведении.'
    },
    {
      q: 'Заберут ли единственную квартиру?',
      a: 'Единственное пригодное для постоянного проживания жильё обычно защищено исполнительским иммунитетом по ст. 446 ГПК РФ. Но ипотека, залог, чрезмерные характеристики жилья и специальные обстоятельства требуют отдельной проверки. До анализа документов обещать сохранение жилья нельзя.'
    },
    {
      q: 'Что будет с ипотечной квартирой?',
      a: 'Для единственного ипотечного жилья действуют специальные правила, включая механизмы отдельного урегулирования с залоговым кредитором и правила распределения выручки при продаже. Возможность сохранить жильё зависит от обстоятельств дела и позиции банка.'
    },
    {
      q: 'Пострадает ли имущество супруга?',
      a: 'Доля должника в совместном имуществе входит в конкурсную массу. Личное имущество супруга, приобретённое до брака или полученное по безвозмездным сделкам (дар, наследство), взысканию по личным долгам второго супруга не подлежит.'
    },
    {
      q: 'Обязательно ли вводить реализацию имущества?',
      a: 'Закон предусматривает две основные судебные процедуры: реструктуризацию долгов гражданина и реализацию имущества. Выбор процедуры зависит от уровня дохода, возможности расчётов и финансового плана.'
    },
    {
      q: 'Что будет с зарплатой и картами во время суда?',
      a: 'С момента признания гражданина банкротом и введения реализации имущества всеми счетами распоряжается финансовый управляющий. Должнику ежемесячно выделяются денежные средства в размере прожиточного минимума на него и иждивенцев.'
    },
    {
      q: 'Можно ли выезжать за границу во время суда?',
      a: 'Суд вправе временно ограничить право на выезд из РФ по ходатайству кредиторов или управляющего. При наличии уважительных причин (лечение, работа) ограничение может быть отменено досрочно.'
    },
    {
      q: 'В чём отличие банкротства через суд от МФЦ?',
      a: 'Судебное банкротство применяется при любой сумме долга и наличии имущества, требует участия финансового управляющего и депозита. Внесудебное банкротство через МФЦ проводится бесплатно при долге от 25 000 до 1 000 000 ₽ и наличии строго установленных ст. 223.2 оснований.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Предварительный анализ и стратегия',
      subtitle: 'Диагностика долговой ситуации и рисков',
      features: [
        { name: 'Анализ всех кредитных договоров и долгов', value: '✓' },
        { name: 'Оценка рисков для имущества и сделок за 3 года', value: '✓' },
        { name: 'Проверка оснований освобождения от долгов', value: '✓' },
        { name: 'Письменное заключение и план процедуры', value: '✓' }
      ],
      buttonText: 'Уточнить стоимость',
      buttonHref: '#form'
    },
    {
      title: 'Подготовка заявления и сбор документов',
      subtitle: 'Формирование полного пакета для суда',
      popular: true,
      badgeText: 'Популярно',
      features: [
        { name: 'Сбор справок из банков, ФНС, СФР, Росреестра', value: '✓' },
        { name: 'Составление описи имущества и списка кредиторов', value: '✓' },
        { name: 'Подготовка мотивированного заявления в Арбитражный суд', value: '✓' },
        { name: 'Взаимодействие с СРО арбитражных управляющих', value: '✓' }
      ],
      buttonText: 'Уточнить стоимость',
      buttonHref: '#form'
    },
    {
      title: 'Судебное сопровождение под ключ',
      subtitle: 'Полное ведение дела в Арбитражном суде',
      features: [
        { name: 'Представительство во всех судебных заседаниях', value: '✓' },
        { name: 'Взаимодействие с финансовым управляющим', value: '✓' },
        { name: 'Защита имущества и доходов (прожиточный минимум)', value: '✓' },
        { name: 'Контроль до вынесения определения о списании долгов', value: '✓' }
      ],
      buttonText: 'Уточнить стоимость',
      buttonHref: '#form'
    }
  ];

  const steps: ProcessStep[] = [
    {
      num: '01',
      title: 'Обращение и первичная оценка',
      desc: 'Уточняем сумму и состав долгов, наличие судебных дел, исполнительных производств, имущества, дохода и значимых сделок.'
    },
    {
      num: '02',
      title: 'Анализ документов и рисков',
      desc: 'Проверяем обязательства, имущество, семейные обстоятельства и основания, способные повлиять на освобождение от долгов.'
    },
    {
      num: '03',
      title: 'Выбор маршрута и согласование',
      desc: 'Объясняем судебный путь, возможность МФЦ либо альтернативу банкротству; согласовываем состав работ и стоимость.'
    },
    {
      num: '04',
      title: 'Подготовка дела и подача в суд',
      desc: 'Собираем сведения, формируем список кредиторов и имущества, готовим заявление и направляем документы в суд.'
    },
    {
      num: '05',
      title: 'Рассмотрение заявления судом',
      desc: 'Представляем позицию, устраняем замечания, участвуем в судебном заседании по вопросу признания заявления обоснованным.'
    },
    {
      num: '06',
      title: 'Процедура банкротства',
      desc: 'Сопровождаем взаимодействие с финансовым управляющим, требования кредиторов, вопросы имущества и дохода.'
    },
    {
      num: '07',
      title: 'Завершение дела и списание долгов',
      desc: 'Получаем судебный акт и объясняем, какие обязательства прекращены, какие сохранились и какие ограничения действуют дальше.'
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
        '@id': 'https://dejure-help.ru/grazhdanam/bankrotstvo-fizicheskih-lic/#breadcrumbs',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Главная', 'item': 'https://dejure-help.ru/' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Гражданам', 'item': 'https://dejure-help.ru/grazhdanam/' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Банкротство физических лиц', 'item': 'https://dejure-help.ru/grazhdanam/bankrotstvo-fizicheskih-lic/' }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/grazhdanam/bankrotstvo-fizicheskih-lic/#service',
        'url': 'https://dejure-help.ru/grazhdanam/bankrotstvo-fizicheskih-lic/',
        'name': 'Банкротство физических лиц в Липецке',
        'provider': { '@id': 'https://dejure-help.ru/#organization' },
        'areaServed': {
          '@type': 'AdministrativeArea',
          'name': 'Липецк и Липецкая область'
        },
        'description': 'Юридическая помощь при банкротстве физических лиц в Липецке: оценим долги, имущество и сделки, объясним риски и сопроводим процедуру в суде.'
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/grazhdanam/bankrotstvo-fizicheskih-lic/#faq',
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
        '@id': 'https://dejure-help.ru/specialisty/nacheshnikov-vladimir-viktorovich/#person',
        'name': 'Владимир Викторович Начешников',
        'jobTitle': 'Специалист ЮК «Де-Юре»',
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

      {/* ═══ БЛОК 1: ХЛЕБНЫЕ КРОШКИ И ГЛАВНЫЙ ЭКРАН ═══ */}
      <MilitaryHero
        breadcrumbs={
          <>
            <Link href="/">Главная</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/grazhdanam/">Гражданам</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Банкротство физических лиц</span>
          </>
        }
        superTitle="Банкротство граждан • оценка до начала процедуры"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Банкротство
            </span>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              физических лиц в Липецке
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
                Проверим, подходит ли Вам судебное банкротство, какие обязательства
              </span>
              <span className="hero-sub-span-desktop" style={{ display: 'block' }}>
                могут быть прекращены и чем процедура рискует для имущества,
              </span>
              <span className="hero-sub-span-desktop" style={{ display: 'block' }}>
                дохода и совершённых сделок.
              </span>
            </span>
          </>
        }
        primaryCtaText="Проверить возможность банкротства"
        primaryCtaLink="#form"
        primaryCtaAnalytics="cta_click"
        primaryCtaSubtext={
          <>
            <span style={{ display: 'inline-block' }}>Для оценки понадобятся сведения о долгах, доходах, имуществе и сделках:</span> <br className="hidden-mobile" />
            <span style={{ display: 'inline-block' }}>консультация по телефону <a href="tel:+79103503111" data-analytics="phone_click">+7 (910) 350-31-11</a></span>
          </>
        }
        trustItems={[
          { text: 'Оцениваем не только сумму долга, но и имущество, доходы, семью и сделки' },
          { text: 'Объясняем ограничения до заключения договора и подачи заявления в суд' },
          { text: 'Сопровождаем судебную процедуру и взаимодействие с финансовым управляющим' }
        ]}
        imageUrl="/images/nacheshnikov.jpg"
        imageName="Владимир Викторович Начешников"
        imageSubtitle="Специалист ЮК «Де-Юре»"
        imageObjectPosition="center 15%"
      />

      {/* ═══ БЛОК 2: КОГДА СТОИТ ПРОВЕРИТЬ ВОЗМОЖНОСТЬ БАНКРОТСТВА ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                Когда стоит проверить
              </span>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                возможность банкротства
              </span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Не обязательно ждать, пока задолженность вырастет или приставы начнут удержания. Важно оценить ситуацию, когда исполнение обязательств уже стало невозможным либо очевидно, что скоро станет невозможным.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '32px' }}>
            {[
              {
                tag: 'Нагрузка',
                title: 'Платежи превышают возможности',
                desc: 'Дохода не хватает одновременно на обязательные расходы семьи и ежемесячные платежи всем кредиторам.'
              },
              {
                tag: 'Пирамида долгов',
                title: 'Долги закрываются новыми займами',
                desc: 'Кредитная нагрузка растёт, а оформление нового кредита или микрозайма только откладывает неизбежную просрочку.'
              },
              {
                tag: 'Суды и приставы',
                title: 'Начались суды и взыскание',
                desc: 'Появились судебные приказы, иски, исполнительные производства, аресты банковских счетов или удержания из зарплаты.'
              },
              {
                tag: 'Снижение дохода',
                title: 'Доход резко снизился',
                desc: 'Потеря работы, сокращение, болезнь, закрытие источника дохода или рост обязательных расходов изменили платёжеспособность.'
              },
              {
                tag: 'Имущество',
                title: 'Есть риск для имущества',
                desc: 'В собственности находится квартира, автомобиль, земельный участок, доля либо имущество приобретено в браке.'
              },
              {
                tag: 'Инициатива банка',
                title: 'Кредитор готовит банкротство',
                desc: 'Получено уведомление кредитора или в суд уже подано заявление о признании гражданина банкротом.'
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
              <strong>Важно о сумме долга:</strong> Долг 500 000 ₽ — не универсальный минимальный порог. При предвидении банкротства гражданин вправе обратиться в суд и при меньшей сумме долга, если отвечает признакам неплатёжеспособности.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: ЧТО ПРОВЕРИМ ДО НАЧАЛА ПРОЦЕДУРЫ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                Сначала — диагностика
              </span>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                долгов и рисков
              </span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Банкротство подходит не всем. До подачи заявления нужно понять не только размер долга, но и возможный результат процедуры именно при Ваших обстоятельствах.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '32px' }}>
            {[
              { title: 'Состав обязательств', desc: 'Кому и сколько Вы должны; какие требования потенциально прекращаются, а какие могут сохраниться.' },
              { title: 'Доходы и расходы семьи', desc: 'Источники дохода, иждивенцы, удержания и средства, необходимые для нормальной жизни семьи.' },
              { title: 'Имущество и активы', desc: 'Жильё, ипотека, автомобиль, доли, земля, вклады; что может войти в конкурсную массу.' },
              { title: 'Семейные обстоятельства', desc: 'Что приобретено в браке, есть ли общие обязательства и как процедура затронет долю супруга.' },
              { title: 'Сделки и переводы за 3 года', desc: 'Продажи, дарение, раздел имущества, крупные платежи и предпочтительное погашение долгов.' },
              { title: 'Поведение перед кредиторами', desc: 'Полнота сведений, документы при получении кредитов и обстоятельства возникновения задолженности.' }
            ].map((item, idx) => (
              <div key={idx} style={{
                background: 'var(--color-white)',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-primary)',
                padding: '28px 22px',
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)'
              }}>
                <h3 style={{ fontSize: '17px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0', fontWeight: 600 }}>
                  {item.title}
                </h3>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#form" className="btn btn-primary" style={{ padding: '14px 32px' }}>
              Записаться на разбор ситуации
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: ДВА ЗАКОННЫХ МАРШРУТА: СУД И МФЦ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Суд или МФЦ:</span> <br />
              <span style={{ display: 'inline-block' }}>порядок зависит от обстоятельств</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Выбор процессуального порядка зависит от суммы задолженности, наличия имущества и статуса исполнительных производств.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {/* Карточка 1: Судебное банкротство */}
            <div className="hover-lift" style={{
              background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-primary)',
              padding: '36px 28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)'
            }}>
              <div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', marginBottom: '12px' }}>
                  Основной маршрут
                </div>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0' }}>
                  Судебное банкротство
                </h3>
                <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: '0 0 20px 0' }}>
                  Состав долгов, имущества и ситуации требует процедуры в арбитражном суде. Возможны реструктуризация долгов либо реализация имущества.
                </p>
              </div>
              <a href="#form" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '14px', textAlign: 'center' }}>
                Оценить судебный путь
              </a>
            </div>

            {/* Карточка 2: Внесудебное через МФЦ */}
            <div className="hover-lift" style={{
              background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-gold)',
              padding: '36px 28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)'
            }}>
              <div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', marginBottom: '12px' }}>
                  Бесплатная процедура
                </div>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0' }}>
                  Банкротство через МФЦ
                </h3>
                <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: '0 0 20px 0' }}>
                  Размер долга от 25 000 до 1 000 000 ₽ и статус производств соответствуют закону. Сама процедура проводится без суда.
                </p>
              </div>
              <Link href="/grazhdanam/bankrotstvo-fizicheskih-lic/cherez-mfc/" className="btn btn-gold" style={{ padding: '10px 20px', fontSize: '14px', textAlign: 'center', textDecoration: 'none' }}>
                Проверить условия МФЦ →
              </Link>
            </div>

            {/* Карточка 3: Другое решение */}
            <div className="hover-lift" style={{
              background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-primary)',
              padding: '36px 28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)'
            }}>
              <div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', marginBottom: '12px' }}>
                  Альтернатива
                </div>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0' }}>
                  Другое решение
                </h3>
                <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: '0 0 20px 0' }}>
                  Банкротство несоразмерно проблеме, спорен сам долг либо риски выше пользы. Рассматриваем переговоры или защиту у приставов.
                </p>
              </div>
              <a href="#form" className="btn btn-outline" style={{ padding: '10px 20px', fontSize: '14px', textAlign: 'center' }}>
                Подобрать альтернативу
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 5: КАКИЕ ДОЛГИ И РИСКИ ТРЕБУЮТ ОТДЕЛЬНОЙ ОЦЕНКИ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                Какие долги и риски
              </span>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                требуют отдельной оценки
              </span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Разбираем нюансы законодательства о банкротстве: списываемые долги, исключения, сохранность жилья и права супругов.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '28px' }}>
            <div style={{ background: 'var(--color-white)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', padding: '32px 28px' }}>
              <h3 style={{ fontSize: '19px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 12px 0' }}>
                Списываемые обязательства
              </h3>
              <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Кредиты, кредитные карты, микрозаймы, задолженность по налогам и коммунальным платежам, обязательства по распискам и другие денежные требования могут входить в процедуру. Возможность освобождения оценивается по происхождению долга и поведению гражданина.
              </p>
            </div>

            <div style={{ background: 'var(--color-white)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-gold)', padding: '32px 28px' }}>
              <h3 style={{ fontSize: '19px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 12px 0' }}>
                Требования, которые сохраняются
              </h3>
              <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                После процедуры сохраняются требования по текущим платежам, алиментам, возмещению вреда жизни или здоровью, морального вреда и обязательства, неразрывно связанные с личностью кредитора, а также субсидиарная ответственность.
              </p>
            </div>

            <div style={{ background: 'var(--color-white)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-gold)', padding: '32px 28px' }}>
              <h3 style={{ fontSize: '19px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 12px 0' }}>
                Что будет с имуществом и жильём
              </h3>
              <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Единственное пригодное для постоянного проживания жильё защищено исполнительским иммунитетом по ст. 446 ГПК РФ. Ипотечное жильё, залоговые активы, автомобили и дачи оцениваются отдельно по специальным правилам.
              </p>
            </div>

            <div style={{ background: 'var(--color-white)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', padding: '32px 28px' }}>
              <h3 style={{ fontSize: '19px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 12px 0' }}>
                Совместное имущество супругов
              </h3>
              <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Доля гражданина в общем имуществе входит в конкурсную массу. При реализации общего имущества часть выручки, соответствующая доле супруга, возвращается ему, если долг не признан судом общим обязательством семьи.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 6: ЧЕМ ПОМОЖЕТ ЮРИСТ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Чем поможет юрист</span> <br />
              <span style={{ display: 'inline-block' }}>по банкротству физических лиц</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Полный комплекс процессуальной поддержки на всех стадиях банкротства: от правовой диагностики до полного списания задолженности.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '32px' }}>
            {[
              { title: 'Предварительный анализ', desc: 'Письменно или на консультации обозначаем применимый маршрут, ключевые риски и недостающие документы.' },
              { title: 'Подготовка позиции', desc: 'Формируем полный перечень кредиторов, обязательств, имущества, доходов и обстоятельств дела.' },
              { title: 'Подготовка заявления', desc: 'Заявление и приложения готовятся под вашу фактическую ситуацию, а не по универсальному шаблону.' },
              { title: 'Судебное сопровождение', desc: 'Процессуальные документы подаются в срок; позиция гражданина представляется в суде по согласованной стратегии.' },
              { title: 'Работа в процедуре', desc: 'Контролируем взаимодействие с финансовым управляющим, требования кредиторов и вопросы конкурсной массы.' },
              { title: 'Завершение дела', desc: 'Получаем судебный акт, разъясняем прекращенные обязательства и последующие правовые ограничения.' }
            ].map((item, idx) => (
              <div key={idx} className="hover-lift" style={{
                padding: '30px 24px',
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-gold)',
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)'
              }}>
                <h3 style={{ fontSize: '17px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0', fontWeight: 600 }}>
                  {item.title}
                </h3>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 7: КУРАТОР НАПРАВЛЕНИЯ ═══ */}
      <SpecialistBlock
        title="Куратор направления — Владимир Начешников"
        name="Владимир Викторович Начешников"
        position="Специалист ЮК «Де-Юре»"
        imageUrl="/images/nacheshnikov.jpg"
        imagePosition="center 15%"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Владимир Викторович проводит анализ долговой ситуации, оценивает риски для имущества и совершённых сделок, определяет порядок подготовки к судебной процедуре и сопровождает дела о банкротстве физических лиц.
          </span>,
          <ul key="2" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>
                Практический опыт в сфере юридических и корпоративных процедур — с 1997 года.
              </span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>
                Специализируется на судебном банкротстве граждан, защите единственного жилья и исключении рисков оспаривания сделок.
              </span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>
                Ведёт дела в Арбитражном суде Липецкой области и представляет интересы доверителей дистанционно по всей России.
              </span>
            </li>
          </ul>,
          <a key="3" href="/specialisty/" style={{ display: 'inline-block', marginTop: '16px', fontSize: '14px', color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }} data-analytics="specialist_profile_click">
            Подробнее о Владимире Викторовиче Начешникове →
          </a>
        ]}
        buttonText="Обсудить ситуацию с Владимиром Начешниковым"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 8: ПРИМЕРЫ ИЗ ПРАКТИКИ (3 КЕЙСА ИЗ ТЗ) ═══ */}
      <CasesBlock
        title="Примеры дел из практики"
        showAllLink="/praktika/"
        showAllText="Смотреть всю практику"
        showDemoWarning={true}
        cases={cases}
      />

      {/* ═══ БЛОК 9: КАК ПРОХОДИТ РАБОТА И СУДЕБНАЯ ПРОЦЕДУРА ═══ */}
      <ProcessBlock
        title="Как проходит работа"
        subtitle="Последовательный алгоритм взаимодействия от первичной консультации до определения суда о списании долгов"
        steps={steps}
        ctaTitle="Дистанционный формат сопровождения"
        ctaSubtitle="Консультации и обмен документами возможны дистанционно. Необходимость личного присутствия в суде определяется обстоятельствами дела."
        ctaButtonText="Обсудить порядок работы"
        ctaButtonHref="#form"
      />

      {/* ═══ БЛОК 10: ДОКУМЕНТЫ ДЛЯ ПРЕДВАРИТЕЛЬНОГО АНАЛИЗА ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Что подготовить</span> <br />
              <span style={{ display: 'inline-block' }}>к консультации юриста</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Перечень сведений и документов для детального правового анализа ситуации:
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '32px' }}>
            {[
              { title: 'Долги и кредиты', desc: 'Кредитные договоры, справки, выписки, расписки, судебные приказы и постановления приставов.' },
              { title: 'Доходы и работа', desc: 'Сведения о работе, пенсии, пособиях, самозанятости и иных доходах; сведения об иждивенцах.' },
              { title: 'Имущество и счета', desc: 'Сведения о недвижимости, автомобилях, долях, земле, счетах, вкладах и залогах.' },
              { title: 'Семейное положение', desc: 'Свидетельства о браке/разводе, брачный договор, соглашения о разделе имущества (при наличии).' },
              { title: 'Сделки за 3 года', desc: 'Договоры купли-продажи, дарения, раздела имущества, крупные переводы и погашения долгов.' },
              { title: 'Судебный процесс', desc: 'Заявления кредиторов, определения суда, требования управляющего — если дело уже начато.' }
            ].map((item, idx) => (
              <div key={idx} style={{
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-gold)',
                padding: '28px 22px',
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)'
              }}>
                <h3 style={{ fontSize: '17px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0', fontWeight: 600 }}>
                  {item.title}
                </h3>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            background: 'var(--color-white)',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-gold)',
            padding: '20px 28px',
            fontSize: '14px',
            color: 'var(--color-deep-blue)',
            lineHeight: 1.6
          }}>
            <strong>Предупреждение по безопасности:</strong> Не загружайте паспорт, банковские выписки, договоры и иные финансовые документы через форму на сайте. Юрист сообщит защищённый способ передачи после первого контакта.
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 11: СТОИМОСТЬ УСЛУГ И ОБЯЗАТЕЛЬНЫЕ РАСХОДЫ ═══ */}
      <PricingBlock
        title="Стоимость определяется после анализа ситуации"
        subtitle="На объём работы влияют количество кредиторов, состав имущества, наличие залога и совместной собственности, совершённые сделки, уже начатые споры и необходимый объём представительства. До заключения договора мы определим состав сопровождения и отдельно объясним обязательные расходы процедуры."
        tiers={pricingTiers}
        disclaimer={
          <>
            <span style={{ display: 'inline-block' }}><strong>Обязательные расходы судебной процедуры:</strong> Депозит Арбитражного суда (вознаграждение финансового управляющего) — 25 000 ₽ единовременно за процедуру. Публикации в газете «Коммерсантъ» и ЕФРСБ, почтовые расходы оплачиваются по фактическим тарифам. Госпошлина при подаче гражданином не взимается.</span>
          </>
        }
      />

      {/* ═══ БЛОК 12: ПОСЛЕДСТВИЯ БАНКРОТСТВА БЕЗ МИФОВ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Последствия банкротства</span> <br />
              <span style={{ display: 'inline-block' }}>без мифов</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Реальные ограничения и правовые последствия после завершения процедуры банкротства:
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '32px' }}>
            {[
              { title: 'Кредиты и займы 5 лет', desc: 'В течение пяти лет после завершения реализации имущества при получении кредита или займа нужно сообщать о факте банкротства.' },
              { title: 'Повторное обращение 5 лет', desc: 'В течение пяти лет дело о банкротстве не может быть вновь возбуждено по заявлению самого гражданина.' },
              { title: 'Управление организациями 3 года', desc: 'В течение трёх лет нельзя занимать должности в органах управления юридического лица (для банков — 10 лет).' },
              { title: 'Доход и работа', desc: 'Статус банкрота не запрещает работать, открывать самозанятость и получать официальную заработную плату.' },
              { title: 'Публичность сведений', desc: 'Сведения о процедуре публикуются в ЕФРСБ и газете «Коммерсантъ» в установленном законом порядке.' },
              { title: 'Освобождение от долгов', desc: 'Освобождение охватывает все заявленные кредитные долги, за исключением алиментов, вреда здоровью и текущих платежей.' }
            ].map((item, idx) => (
              <div key={idx} style={{
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-gold)',
                padding: '28px 22px',
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)'
              }}>
                <h3 style={{ fontSize: '17px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0', fontWeight: 600 }}>
                  {item.title}
                </h3>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 13: ЧАСТЫЕ ВОПРОСЫ (10 FAQ ИЗ ТЗ) ═══ */}
      <FAQBlock
        superTitle="Частые вопросы"
        title="Ответы на частые вопросы"
        subtitle="Разъяснения специалиста ЮК «Де-Юре» Владимира Начешникова по судебному банкротству граждан"
        ctaText="Задать свой вопрос"
        ctaLink="#form"
        faqs={faqs}
      />

      {/* ═══ БЛОК 14: СВЯЗАННЫЕ УСЛУГИ ═══ */}
      <section className="section bg-cream" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                Связанные услуги
              </span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Смежные направления юридической помощи гражданам и бизнесу.
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
            <Link href="/grazhdanam/bankrotstvo-fizicheskih-lic/cherez-mfc/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
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
                    <span style={{ display: 'inline-block' }}>Внесудебное банкротство</span> <br /><span style={{ display: 'inline-block' }}>через МФЦ</span>
                  </h3>
                  <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    Бесплатное списание долгов от 25 000 до 1 000 000 ₽ без суда по закону № 127-ФЗ.
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

            <Link href="/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
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
                    <span style={{ display: 'inline-block' }}>Юрист по исполнительному</span> <br /><span style={{ display: 'inline-block' }}>производству</span>
                  </h3>
                  <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    Проверить производства, удержания, аресты и действия судебных приставов.
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

            <Link href="/biznesu/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
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
                    <span style={{ display: 'inline-block' }}>Банкротство</span> <br /><span style={{ display: 'inline-block' }}>индивидуального предпринимателя</span>
                  </h3>
                  <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    Разобрать личные и предпринимательские обязательства действующего или закрытого ИП.
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
            <Link href="/grazhdanam/" className="all-services-link" style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '16px', textDecoration: 'underline', textUnderlineOffset: '4px', display: 'inline-flex', alignItems: 'center', gap: '6px', transition: 'color 0.2s ease' }}>
              Смотреть все юридические услуги гражданам →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 15: ОФИС В ЛИПЕЦКЕ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '40px', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>
                  Офис в Липецке
                </span>
              </div>
              <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 38px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
                Офис «Де-Юре» в Липецке
              </h2>
              <p style={{ fontSize: '15.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                Можно встретиться в офисе «Де-Юре» или начать с дистанционного анализа. Перед визитом согласуйте время и подготовьте сведения о долгах и сделках.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>г. Липецк, ул. Советская, д. 35, оф. 213</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <a href="tel:+79103503111" style={{ color: 'var(--color-deep-blue)', textDecoration: 'none', fontWeight: 600 }}>
                    +7 (910) 350-31-11
                  </a>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a href="#form" className="btn btn-primary" style={{ padding: '12px 28px' }}>
                  Записаться на встречу
                </a>
                <a href="tel:+79103503111" className="btn btn-outline" style={{ padding: '12px 24px' }}>
                  Позвонить
                </a>
              </div>
            </div>

            <div style={{
              background: 'var(--color-white)',
              border: '1px solid var(--color-border)',
              padding: '24px',
              boxShadow: '0 8px 30px rgba(23, 50, 77, 0.08)'
            }}>
              <div style={{ position: 'relative', width: '100%', height: '260px', background: '#EAEFE9', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A9b142eb3df8beaf1922c2a939fbfbfab52ca8cfb0f195d9e5b85a3a41a4a496f&amp;source=constructor"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  title="Офис ЮК Де-Юре в Липецке"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 16: ФИНАЛЬНАЯ ФОРМА ═══ */}
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
                Разберём, подходит ли банкротство в Вашей ситуации
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Оставьте номер телефона и кратко опишите ситуацию: примерную сумму долга, есть ли открытые суды, исполнительные производства, имущество или сделки за 3 года. Юрист изучит обстоятельства и свяжется с вами.
              </p>

              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация юриста по банкротству</strong>
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
                title="Обсудить ситуацию с юристом"
                subtitle="Оставьте имя и номер телефона. Юрист перезвонит в течение 15 минут в рабочее время."
                buttonText="Обсудить возможность банкротства"
                commentPlaceholder="Кратко опишите ситуацию: сумма долга, банки, есть ли имущество или суды..."
                hiddenFields={[
                  { name: 'service', value: 'Банкротство физических лиц в Липецке | ЮК «Де-Юре»' },
                  { name: 'category', value: 'bankrotstvo-fizicheskih-lic' },
                  { name: 'specialist', value: 'Владимир Викторович Начешников' }
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
