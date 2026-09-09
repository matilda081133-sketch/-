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
      a: 'Для единственного ипотечного жилья действуют специальные правила, включая механизмы отдельного урегулирования с залоговым кредитором и правила распределения выручки при продаже. Возможность сохранить жильё зависит от обстоятельств и позиции участников; её нужно оценивать до подачи заявления.'
    },
    {
      q: 'Могут ли продать автомобиль?',
      a: 'Автомобиль обычно входит в конкурсную массу, если на него можно обратить взыскание. Исключения зависят от назначения имущества и конкретных доказательств. Сам факт необходимости машины для семьи не гарантирует её исключение.'
    },
    {
      q: 'Что будет с имуществом супруга?',
      a: 'Личное имущество супруга не становится имуществом должника только из-за брака. Но доля должника в совместно приобретённом имуществе может затрагиваться процедурой, а при общих обязательствах расчёт сложнее. Нужны документы о приобретении имущества и происхождении долга.'
    },
    {
      q: 'Можно ли перед банкротством продать или подарить имущество?',
      a: 'Сделки перед банкротством могут проверяться и оспариваться. Продажа родственнику, цена ниже рынка, дарение или преимущественный расчёт с одним кредитором повышают риск. Не совершайте новые сделки для сокрытия имущества.'
    },
    {
      q: 'Сколько длится судебное банкротство?',
      a: 'Закон устанавливает сроки отдельных стадий, но фактическая продолжительность зависит от процедуры, имущества, требований кредиторов, споров и работы финансового управляющего. Реализация имущества вводится на срок до шести месяцев и может продлеваться в предусмотренном законом порядке.'
    },
    {
      q: 'Можно ли пройти процедуру без юриста?',
      a: 'Закон не требует обязательного представителя. Юрист нужен не для формальной подачи шаблона, а для предварительной оценки рисков, подготовки полного комплекта сведений и сопровождения спорных вопросов в суде и процедуре.'
    },
    {
      q: 'Можно ли работать дистанционно?',
      a: 'Да, консультации, подготовка документов и значительная часть взаимодействия могут проходить дистанционно. Возможность удалённого участия в конкретном заседании определяет суд; при необходимости юрист заранее объяснит формат.'
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
      title: 'Выбор маршрута и условий',
      desc: 'Объясняем судебный путь, возможность МФЦ либо альтернативу банкротству; согласовываем состав работ и стоимость.'
    },
    {
      num: '04',
      title: <><span style={{ display: 'block' }}>Подготовка дела</span><span style={{ display: 'block' }}>и подача в суд</span></>,
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
      title: 'Завершение дела и списание',
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
        'telephone': '+7 (4742) 20-15-25',
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
        'areaServed': [
          { '@type': 'AdministrativeArea', 'name': 'Липецкая область' },
          { '@type': 'Country', 'name': 'Россия' }
        ],
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
            <span style={{ display: 'inline-block' }}>консультация по телефону <a href="tel:+74742201525" data-analytics="phone_click">+7 (4742) 20-15-25</a></span>
          </>
        }
        trustItems={[
          {
            text: (
              <>
                <span style={{ display: 'inline-block' }}>Оцениваем не только сумму долга,</span> <br className="hidden-mobile" />
                <span style={{ display: 'inline-block' }}>но и имущество, доходы, семью и сделки</span>
              </>
            )
          },
          {
            text: (
              <>
                <span style={{ display: 'inline-block' }}>Объясняем ограничения до заключения</span> <br className="hidden-mobile" />
                <span style={{ display: 'inline-block' }}>договора и подачи заявления в суд</span>
              </>
            )
          },
          {
            text: (
              <>
                <span style={{ display: 'inline-block' }}>Сопровождаем судебную процедуру</span> <br className="hidden-mobile" />
                <span style={{ display: 'inline-block' }}>и взаимодействие с финансовым управляющим</span>
              </>
            )
          }
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

      {/* ═══ БЛОК 3: СНАЧАЛА — ДИАГНОСТИКА ДОЛГОВ И РИСКОВ (ORGANIC DIAGNOSTIC AUDIT MATRIX) ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '28px',
            marginBottom: '40px',
            borderBottom: '1px solid rgba(193, 160, 102, 0.3)',
            paddingBottom: '28px'
          }}>
            <div style={{ maxWidth: '620px' }}>
              <div style={{
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--color-gold)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '12px'
              }}>
                Предварительный правовой аудит
              </div>
              <h2 className="with-accent" style={{
                fontSize: 'clamp(28px, 4vw, 42px)',
                fontFamily: 'var(--font-serif)',
                color: 'var(--color-primary)',
                margin: 0,
                lineHeight: 1.2
              }}>
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                  Сначала — диагностика
                </span>
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                  долгов и рисков
                </span>
              </h2>
            </div>
            <div style={{ maxWidth: '480px', paddingTop: '28px' }}>
              <p style={{
                fontSize: '15.5px',
                color: 'var(--color-deep-blue)',
                lineHeight: 1.65,
                margin: 0,
                opacity: 0.92
              }}>
                Банкротство подходит не всем. До подачи заявления нужно понять не только размер долга, но и возможный результат процедуры именно при Ваших обстоятельствах.
              </p>
            </div>
          </div>

          {/* Архитектурный реестр аудита (без однотипных изолированных карточек) */}
          <div style={{
            background: '#FFFFFF',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-gold)',
            boxShadow: '0 4px 25px rgba(23, 50, 77, 0.05)',
            marginBottom: '40px'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))'
            }}>
              {[
                {
                  num: '01',
                  title: 'Состав обязательств',
                  desc: 'Кому и сколько Вы должны; какие требования потенциально прекращаются, а какие могут сохраниться.'
                },
                {
                  num: '02',
                  title: 'Доходы и расходы семьи',
                  desc: 'Источники дохода, иждивенцы, удержания и средства, необходимые для нормальной жизни семьи.'
                },
                {
                  num: '03',
                  title: 'Имущество и активы',
                  desc: 'Жильё, ипотека, автомобиль, доли, земля, вклады; что может войти в конкурсную массу.'
                },
                {
                  num: '04',
                  title: 'Семейные обстоятельства',
                  desc: 'Что приобретено в браке, есть ли общие обязательства и как процедура затронет долю супруга.'
                },
                {
                  num: '05',
                  title: 'Сделки и переводы за 3 года',
                  desc: 'Продажи, дарение, раздел имущества, крупные платежи и предпочтительное погашение долгов.'
                },
                {
                  num: '06',
                  title: 'Поведение перед кредиторами',
                  desc: 'Полнота сведений, документы при получении кредитов и обстоятельства возникновения задолженности.'
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '34px 30px',
                    borderBottom: '1px solid var(--color-border)',
                    borderRight: (idx % 2 === 0) ? '1px solid var(--color-border)' : 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    position: 'relative'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '14px', marginBottom: '10px' }}>
                    <span style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '26px',
                      fontWeight: 600,
                      color: 'var(--color-gold)',
                      lineHeight: 1,
                      letterSpacing: '-0.02em',
                      minWidth: '36px'
                    }}>
                      {item.num}
                    </span>
                    <h3 style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '19px',
                      fontWeight: 600,
                      color: 'var(--color-deep-blue)',
                      margin: 0,
                      lineHeight: 1.3
                    }}>
                      {item.title}
                    </h3>
                  </div>
                  <p style={{
                    fontSize: '14.5px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                    margin: 0,
                    paddingLeft: '50px'
                  }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Интегрированная панель действия */}
            <div style={{
              padding: '24px 32px',
              background: 'linear-gradient(90deg, #FBF8F3 0%, #FFFFFF 100%)',
              borderTop: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span style={{ fontSize: '14.5px', color: 'var(--color-deep-blue)', fontWeight: 500 }}>
                  Проводим диагностику по всем 6 параметрам на консультации до заключения договора
                </span>
              </div>
              <a href="#form" className="btn btn-primary" style={{ padding: '12px 28px', fontSize: '14.5px' }}>
                Записаться на разбор ситуации
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: ДВА ЗАКОННЫХ МАРШРУТА: СУД И МФЦ (DARK BANNER) ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, #10273B 0%, #17375E 50%, #0D1E2D 100%)',
            border: '1px solid rgba(193, 160, 102, 0.4)',
            borderTop: '3px solid var(--color-gold)',
            boxShadow: '0 8px 30px rgba(16, 39, 59, 0.18)',
            padding: '44px 36px',
            color: '#FFFFFF'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: '24px',
              marginBottom: '36px'
            }}>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
                  Выбор маршрута
                </div>
                <h2 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontFamily: 'var(--font-serif)', color: '#FFFFFF', margin: 0, lineHeight: 1.25 }}>
                  <span className="hero-title-span-mobile" style={{ display: 'block' }}>
                    Суд или МФЦ: порядок зависит
                  </span>
                  <span className="hero-title-span-mobile" style={{ display: 'block' }}>
                    от обстоятельств
                  </span>
                </h2>
              </div>
              <div style={{ maxWidth: '460px' }}>
                <p style={{ fontSize: '15.5px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, margin: 0 }}>
                  Выбор процессуального порядка зависит от суммы задолженности, наличия имущества и статуса исполнительных производств.
                </p>
              </div>
            </div>

            <div className="grid grid-3" style={{ gap: '24px' }}>
              {/* Карточка 1: Судебное банкротство */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                padding: '30px 26px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease'
              }}>
                <div>
                  <div style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: '#E0BA7A',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '14px',
                    background: 'rgba(193, 160, 102, 0.15)',
                    padding: '3px 10px',
                    alignSelf: 'flex-start',
                    display: 'inline-block'
                  }}>
                    Основной маршрут
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E0BA7A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      <path d="M3 21h18" />
                      <path d="M5 21V10" />
                      <path d="M19 21V10" />
                      <path d="M9 21V10" />
                      <path d="M15 21V10" />
                      <path d="M2 10h20" />
                      <path d="M12 3L2 10h20L12 3z" />
                    </svg>
                    <h3 style={{ fontSize: '18px', color: '#FFFFFF', margin: 0, fontWeight: 700, fontFamily: 'var(--font-serif)', lineHeight: 1.3 }}>
                      Судебное банкротство
                    </h3>
                  </div>
                  <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, margin: '0 0 24px 0' }}>
                    Состав долгов, имущества и ситуации требует процедуры в арбитражном суде. Возможны реструктуризация долгов либо реализация имущества.
                  </p>
                </div>
                <a href="#form" className="btn btn-primary" style={{ padding: '12px 20px', fontSize: '14px', textAlign: 'center', width: '100%', boxSizing: 'border-box' }}>
                  Оценить судебный путь
                </a>
              </div>

              {/* Карточка 2: Внесудебное через МФЦ */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(193, 160, 102, 0.4)',
                borderTop: '3px solid var(--color-gold)',
                padding: '30px 26px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease'
              }}>
                <div>
                  <div style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: 'var(--color-gold)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '14px',
                    background: 'rgba(193, 160, 102, 0.2)',
                    padding: '3px 10px',
                    alignSelf: 'flex-start',
                    display: 'inline-block'
                  }}>
                    Бесплатная процедура
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E0BA7A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                    <h3 style={{ fontSize: '18px', color: '#E0BA7A', margin: 0, fontWeight: 700, fontFamily: 'var(--font-serif)', lineHeight: 1.3 }}>
                      Банкротство через МФЦ
                    </h3>
                  </div>
                  <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, margin: '0 0 24px 0' }}>
                    Размер долга от 25 000 до 1 000 000 ₽ и статус производств соответствуют закону. Сама процедура проводится без суда.
                  </p>
                </div>
                <Link href="/grazhdanam/bankrotstvo-fizicheskih-lic/cherez-mfc/" className="btn btn-gold" style={{ padding: '12px 20px', fontSize: '14px', textAlign: 'center', textDecoration: 'none', width: '100%', boxSizing: 'border-box' }}>
                  Проверить условия МФЦ →
                </Link>
              </div>

              {/* Карточка 3: Другое решение */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                padding: '30px 26px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease'
              }}>
                <div>
                  <div style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: '#E0BA7A',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '14px',
                    background: 'rgba(193, 160, 102, 0.15)',
                    padding: '3px 10px',
                    alignSelf: 'flex-start',
                    display: 'inline-block'
                  }}>
                    Альтернатива
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E0BA7A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                    <h3 style={{ fontSize: '18px', color: '#FFFFFF', margin: 0, fontWeight: 700, fontFamily: 'var(--font-serif)', lineHeight: 1.3 }}>
                      Другое решение
                    </h3>
                  </div>
                  <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, margin: '0 0 24px 0' }}>
                    Банкротство несоразмерно проблеме, спорен сам долг либо риски выше пользы. Рассматриваем переговоры или защиту у приставов.
                  </p>
                </div>
                <a href="#form" className="btn btn-primary" style={{ padding: '12px 20px', fontSize: '14px', textAlign: 'center', width: '100%', boxSizing: 'border-box' }}>
                  Подобрать альтернативу
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 5: КАКИЕ ДОЛГИ И РИСКИ ТРЕБУЮТ ОТДЕЛЬНОЙ ОЦЕНКИ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '44px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                Какие долги и риски
              </span>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                требуют отдельной оценки
              </span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Разбираем нюансы законодательства о банкротстве: списываемые обязательства, исключения из освобождения, сохранность жилья и защиту прав супругов.
            </p>
          </div>

          {/* Сравнительная двухколоночная структура в строгом юридическом стиле сайта */}
          <div className="grid grid-2" style={{ gap: '30px', alignItems: 'stretch', marginBottom: '32px' }}>
            
            {/* Колонка 1: Списываемые обязательства и защита имущества */}
            <div style={{
              background: '#FFFFFF',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-gold)',
              padding: '36px 32px',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ paddingBottom: '18px', marginBottom: '24px', borderBottom: '1px solid var(--color-border)' }}>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.3, fontWeight: 700 }}>
                  Списываемые обязательства и защита имущества
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="risk-card-item risk-card-item--gold">
                  <h4 style={{ fontSize: '16.5px', color: 'var(--color-deep-blue)', margin: '0 0 6px 0', fontWeight: 600, fontFamily: 'var(--font-serif)' }}>
                    Кредиты, займы и расписки
                  </h4>
                  <p style={{ margin: 0, fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                    Потребительские кредиты, кредитные карты, займы в МФО, налоги, штрафы, коммунальные долги и требования по распискам.
                  </p>
                </div>

                <div className="risk-card-item risk-card-item--gold">
                  <h4 style={{ fontSize: '16.5px', color: 'var(--color-deep-blue)', margin: '0 0 6px 0', fontWeight: 600, fontFamily: 'var(--font-serif)' }}>
                    Единственное пригодное жильё
                  </h4>
                  <p style={{ margin: 0, fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                    Защищено исполнительским иммунитетом по ст. 446 ГПК РФ и исключается из конкурсной массы при отсутствии ипотеки.
                  </p>
                </div>

                <div className="risk-card-item risk-card-item--gold">
                  <h4 style={{ fontSize: '16.5px', color: 'var(--color-deep-blue)', margin: '0 0 6px 0', fontWeight: 600, fontFamily: 'var(--font-serif)' }}>
                    Доля супруга в общем имуществе
                  </h4>
                  <p style={{ margin: 0, fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                    При реализации совместного имущества часть выручки, соответствующая доле супруга, возвращается ему в установленном порядке.
                  </p>
                </div>
              </div>
            </div>

            {/* Колонка 2: Исключения из списания и ключевые риски */}
            <div style={{
              background: '#FFFFFF',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-primary)',
              padding: '36px 32px',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ paddingBottom: '18px', marginBottom: '24px', borderBottom: '1px solid var(--color-border)' }}>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.3, fontWeight: 700 }}>
                  Исключения из списания и ключевые риски
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="risk-card-item risk-card-item--navy">
                  <h4 style={{ fontSize: '16.5px', color: 'var(--color-deep-blue)', margin: '0 0 6px 0', fontWeight: 600, fontFamily: 'var(--font-serif)' }}>
                    Несписываемые обязательства
                  </h4>
                  <p style={{ margin: 0, fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                    Алименты, возмещение вреда жизни или здоровью, моральный вред, текущие платежи и субсидиарная ответственность сохраняются.
                  </p>
                </div>

                <div className="risk-card-item risk-card-item--navy">
                  <h4 style={{ fontSize: '16.5px', color: 'var(--color-deep-blue)', margin: '0 0 6px 0', fontWeight: 600, fontFamily: 'var(--font-serif)' }}>
                    Ипотека, авто и залоговые активы
                  </h4>
                  <p style={{ margin: 0, fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                    Залоговое имущество и транспортные средства подлежат оценке и реализации по специальным нормам Федерального закона № 127-ФЗ.
                  </p>
                </div>

                <div className="risk-card-item risk-card-item--navy">
                  <h4 style={{ fontSize: '16.5px', color: 'var(--color-deep-blue)', margin: '0 0 6px 0', fontWeight: 600, fontFamily: 'var(--font-serif)' }}>
                    Отказ суда в списании долгов
                  </h4>
                  <p style={{ margin: 0, fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                    Наступает при сокрытии имущества или счетов, предоставлении ложных сведений банкам либо недобросовестном поведении.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Плашка с ключевым выводом и кнопкой */}
          <div style={{
            background: 'var(--color-white)',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-gold)',
            padding: '24px 32px',
            boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            flexWrap: 'wrap'
          }}>
            <p style={{ margin: 0, fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.6, maxWidth: '720px' }}>
              <strong>Ключевой вывод:</strong> Предварительная юридическая оценка сделок за 3 года и состава долгов исключает риски отказа в списании еще до обращения в суд.
            </p>
            <a href="#form" className="btn btn-primary" style={{ padding: '12px 28px', fontSize: '14.5px', whiteSpace: 'nowrap' }}>
              Разобрать риски с юристом
            </a>
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

          <div className="grid grid-3" style={{ gap: '20px', position: 'relative', marginBottom: '40px' }}>
            {[
              {
                num: '01',
                title: 'Предварительный анализ',
                desc: 'Письменно или на консультации обозначаем применимый маршрут, ключевые риски и недостающие документы.'
              },
              {
                num: '02',
                title: 'Подготовка позиции',
                desc: 'Формируем полный перечень кредиторов, обязательств, имущества, доходов и обстоятельств дела.'
              },
              {
                num: '03',
                title: 'Подготовка заявления',
                desc: 'Заявление и приложения готовятся под вашу фактическую ситуацию, а не по универсальному шаблону.'
              },
              {
                num: '04',
                title: 'Судебное сопровождение',
                desc: 'Процессуальные документы подаются в срок; позиция гражданина представляется в суде по согласованной стратегии.'
              },
              {
                num: '05',
                title: 'Работа в процедуре',
                desc: 'Контролируем взаимодействие с финансовым управляющим, требования кредиторов и вопросы конкурсной массы.'
              },
              {
                num: '06',
                title: 'Завершение дела',
                desc: 'Получаем судебный акт, разъясняем прекращенные обязательства и последующие правовые ограничения.'
              }
            ].map((item, idx) => (
              <div key={idx} className="hover-lift" style={{
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                padding: '30px 24px 24px 24px',
                border: '1px solid var(--color-border)',
                borderTop: '4px solid var(--color-gold)',
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                boxSizing: 'border-box',
                position: 'relative'
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
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '4px 0 6px 0', lineHeight: 1.3 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#form" className="btn btn-primary" style={{ padding: '14px 32px' }}>
              Обсудить состав сопровождения
            </a>
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
                Практический опыт в сфере юридических и корпоративных <br className="hidden-mobile" />
                процедур — с 1997 года.
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
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Документы для</span> <br />
              <span style={{ display: 'inline-block' }}>предварительного анализа</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Для первичного анализа достаточно сведений и документов, которые есть у вас на руках.</span> <br />
              <span style={{ display: 'inline-block' }}>Точный перечень и порядок сбора недостающих справок юрист определит на консультации.</span>
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '28px', marginBottom: '32px' }}>
            {/* Карточка 1: Документы по долгам, доходам и судебным делам */}
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
                <span style={{ display: 'inline-block' }}>Документы по долгам,</span> <br />
                <span style={{ display: 'inline-block' }}>доходам и судебным делам</span>
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Кредитные договоры и долги</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Договоры с банками, МФО, расписки, налоговые требования, квитанции ЖКХ и справки об актуальном остатке задолженности.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Судебные акты и производства</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Судебные приказы, исковые заявления, постановления приставов о возбуждении или окончании исполнительных производств.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Доходы и трудовая занятость</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Справки о доходах (2-НДФЛ), пенсиях, пособиях, статусе самозанятого или безработного; сведения об иждивенцах в семье.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Карточка 2: Имущество, семья и совершённые сделки */}
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
                <span style={{ display: 'inline-block' }}>Имущество, семья</span> <br />
                <span style={{ display: 'inline-block' }}>и совершённые сделки</span>
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Имущество, счета и вклады</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Сведения о недвижимости, транспорте, долях в уставном капитале, открытых банковских счетах и залогах.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Семейное положение</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Свидетельства о браке/разводе, рождении детей, брачный договор или соглашения о разделе имущества (при наличии).</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Сделки и переводы за 3 года</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Договоры купли-продажи, дарения, соглашения о разделе активов, крупные банковские переводы и расчёты с кредиторами.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div style={{
            background: 'var(--color-white)',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-gold)',
            boxShadow: '0 4px 16px rgba(23, 50, 77, 0.05)',
            padding: '20px 28px',
            fontSize: '14.5px',
            color: 'var(--color-deep-blue)',
            lineHeight: 1.6
          }}>
            <strong>Предупреждение по безопасности:</strong> Не загружайте паспорт, банковские выписки, договоры и иные финансовые документы через открытую форму на сайте. Юрист согласует защищённый способ передачи после первичной консультации.
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
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '44px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              Последствия банкротства без мифов
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Реальные ограничения, предусмотренные законом № 127-ФЗ,</span> <br className="hidden-mobile" />
              <span style={{ display: 'inline-block' }}>и порядок жизни гражданина во время и после завершения процедуры.</span>
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '28px', marginBottom: '36px' }}>
            {/* Карточка 1: Законные последствия после списания долгов */}
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
              <div>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0', paddingBottom: '12px', borderBottom: '1px solid rgba(23, 50, 77, 0.1)', lineHeight: 1.3 }}>
                  <span style={{ display: 'inline-block' }}>Законные последствия</span> <br />
                  <span style={{ display: 'inline-block' }}>после списания долгов</span>
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
                  Официальные последствия и ограничения после завершения судебной процедуры реализации имущества:
                </p>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Освобождение от долгов</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Определение суда освобождает от дальнейшего исполнения заявленных требований банков, МФО, налоговой и иных кредиторов.</span>
                  </div>
                </li>

                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Кредиты и займы 5 лет</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>В течение пяти лет при обращении за кредитом или займом гражданин обязан указывать факт прохождения процедуры банкротства.</span>
                  </div>
                </li>

                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Повторное банкротство 5 лет</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>В течение пяти лет дело о банкротстве не может быть вновь возбуждено по собственному заявлению гражданина.</span>
                  </div>
                </li>

                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Управление организациями 3 года</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>В течение трёх лет нельзя занимать должности в органах управления юридического лица (для банков — 10 лет, для МФО — 5 лет).</span>
                  </div>
                </li>

                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Официальный доход и работа</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Статус банкрота не запрещает работать, открывать самозанятость и получать официальную заработную плату.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Карточка 2: Ограничения в ходе судебного процесса */}
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
              <div>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0', paddingBottom: '12px', borderBottom: '1px solid rgba(23, 50, 77, 0.1)', lineHeight: 1.3 }}>
                  <span style={{ display: 'inline-block' }}>Ограничения в ходе</span> <br />
                  <span style={{ display: 'inline-block' }}>судебного процесса</span>
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
                  Порядок распоряжения денежными средствами и особенности судебной процедуры:
                </p>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Распоряжение счетами и картами</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>С момента введения реализации имущества всеми банковскими счетами гражданина распоряжается утверждённый финансовый управляющий.</span>
                  </div>
                </li>

                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Выплата прожиточного минимума</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Должнику ежемесячно выделяются средства в размере прожиточного минимума на него и каждого нетрудоспособного иждивенца.</span>
                  </div>
                </li>

                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Возможный запрет на выезд</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Суд вправе временно ограничить право на выезд из РФ по ходатайству кредиторов до завершения реализации имущества.</span>
                  </div>
                </li>

                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Публичность сведений в реестрах</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Сведения о ходе дела публикуются в ЕФРСБ и газете «Коммерсантъ». Закон не предусматривает закрытых процедур банкротства.</span>
                  </div>
                </li>

                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Сохраняющиеся обязательства</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Алименты, вред здоровью и моральный вред не списываются и подлежат дальнейшей выплате после завершения дела.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#form" className="btn btn-primary" style={{ padding: '14px 32px' }}>
              Разобрать риски с юристом
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 13: ЧАСТЫЕ ВОПРОСЫ (11 FAQ ИЗ ТЗ) ═══ */}
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
          
          <div className="grid grid-4" style={{ gap: '20px' }}>
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
          <div className="grid grid-2" style={{ gap: '40px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>
                  Офис в Липецке
                </span>
              </div>
              <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 38px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
                <span style={{ display: 'inline-block' }}>Обсудить банкротство</span> <br />
                <span style={{ display: 'inline-block' }}>с юристом</span> <br />
                <span style={{ display: 'inline-block' }}>в Липецке</span>
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
                  <a href="tel:+74742201525" style={{ color: 'var(--color-deep-blue)', textDecoration: 'none', fontWeight: 600 }}>
                    +7 (4742) 20-15-25
                  </a>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a href="#form" className="btn btn-primary" style={{ padding: '12px 28px' }}>
                  Записаться на встречу
                </a>
                <a href="tel:+74742201525" className="btn btn-outline" style={{ padding: '12px 24px' }}>
                  Позвонить
                </a>
              </div>
            </div>

            <div style={{
              background: 'var(--color-white)',
              border: '1px solid var(--color-border)',
              boxShadow: '0 8px 30px rgba(23, 50, 77, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              minHeight: '380px'
            }}>
              <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '320px', background: '#EAEFE9', overflow: 'hidden', flex: 1 }}>
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=39.585799%2C52.604024&amp;z=17&amp;pt=39.585799%2C52.604024%2Cpm2blm"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0, width: '100%', height: '100%', minHeight: '320px' }}
                  allowFullScreen={true}
                  title="Офис ЮК Де-Юре: г. Липецк, ул. Советская, д. 35, оф. 213"
                  loading="lazy"
                ></iframe>
              </div>
              <a
                href="https://yandex.ru/maps/?pt=39.585799,52.604024&z=17&text=%D0%B3.+%D0%9B%D0%B8%D0%BF%D0%B5%D1%86%D0%BA,+%D1%83%D0%BB.+%D0%A1%D0%BE%D0%B2%D0%B5%D1%82%D1%81%D0%BA%D0%B0%D1%8F,+%D0%B4.+35"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-route-map"
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  padding: '14px 20px',
                  fontSize: '15px',
                  fontWeight: 600,
                  borderRadius: 0,
                  borderLeft: 'none',
                  borderRight: 'none',
                  borderBottom: 'none',
                  borderTop: '1px solid var(--color-border)',
                  textDecoration: 'none',
                  boxSizing: 'border-box'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="3 11 22 2 13 21 11 13 3 11" />
                </svg>
                <span>Построить маршрут до офиса</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 16: ФИНАЛЬНАЯ ФОРМА (СВЯЗАТЬСЯ С НАМИ) ═══ */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px', padding: '80px 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>
                  Связаться с нами
                </span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                <span style={{ display: 'inline-block' }}>Проверьте возможность банкротства</span> <br />
                <span style={{ display: 'inline-block' }}>и риски до подачи заявления</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Кратко опишите ситуацию. Юрист уточнит состав долгов, имущество и другие обстоятельства, необходимые для оценки.
              </p>

              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация юриста</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Позвоните прямо сейчас: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (4742) 20-15-25</a>
                </p>
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm
                title="Написать нам"
                subtitle={
                  <>
                    <span style={{ display: 'inline-block' }}>Оставьте имя и номер телефона. Юрист перезвонит</span> <br />
                    <span style={{ display: 'inline-block' }}>в течение 15 минут в рабочее время.</span>
                  </>
                }
                buttonText="Проверить возможность банкротства"
                commentPlaceholder="Примерная сумма долга, количество кредиторов, имущество и стадия взыскания…"
                subtext={
                  <>
                    <span style={{ display: 'inline-block' }}>Перезвоним в течение 15 минут в рабочее время. Если заявка оставлена вечером или в выходной день, перезвоним в ближайший рабочий день.</span> <br />
                    <span style={{ display: 'inline-block', marginTop: '6px', fontSize: '12px', opacity: 0.8 }}>Не указывайте паспортные данные, номера счетов и другие конфиденциальные сведения. Их можно передать юристу после установления защищённого способа связи.</span>
                  </>
                }
                hiddenFields={[
                  { name: 'source_page', value: '/grazhdanam/bankrotstvo-fizicheskih-lic/' },
                  { name: 'page_type', value: 'hub' },
                  { name: 'direction', value: 'bankrotstvo_fizicheskih_lic' },
                  { name: 'service', value: 'bankrotstvo_fizicheskih_lic' },
                  { name: 'curator', value: 'nacheshnikov-vladimir-viktorovich' }
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
