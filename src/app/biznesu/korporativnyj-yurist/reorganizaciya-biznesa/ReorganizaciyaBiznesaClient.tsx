'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';
import CasesBlock, { CaseData } from '@/components/CasesBlock';
import ProcessBlock, { ProcessStep } from '@/components/ProcessBlock';
import PricingBlock, { PricingTier } from '@/components/PricingBlock';
import SpecialistBlock from '@/components/SpecialistBlock';

export default function ReorganizaciyaBiznesaClient() {
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
        '@id': 'https://dejure-help.ru/biznesu/korporativnyj-yurist/reorganizaciya-biznesa/#service',
        name: 'Юридическое сопровождение реорганизации бизнеса в Липецке',
        serviceType: 'Сопровождение реорганизации юридических лиц (ООО, АО)',
        provider: {
          '@id': 'https://dejure-help.ru/#legalservice'
        },
        areaServed: ['Липецк', 'Липецкая область'],
        description: 'Сопровождение слияния, присоединения, выделения, разделения и преобразования компаний: структура, решения, кредиторы, регистрация и передача активов.'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/biznesu/korporativnyj-yurist/reorganizaciya-biznesa/#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://dejure-help.ru/' },
          { '@type': 'ListItem', position: 2, name: 'Бизнесу', item: 'https://dejure-help.ru/biznesu/' },
          { '@type': 'ListItem', position: 3, name: 'Корпоративный юрист', item: 'https://dejure-help.ru/biznesu/korporativnyj-yurist/' },
          { '@type': 'ListItem', position: 4, name: 'Реорганизация бизнеса', item: 'https://dejure-help.ru/biznesu/korporativnyj-yurist/reorganizaciya-biznesa/' }
        ]
      }
    ]
  };

  const situations = [
    {
      tag: 'Присоединение / Слияние',
      title: <>Объединение компаний <br />в единый холдинг или структуру</>,
      desc: 'Консолидация активов, оптимизация управленческих расходов и повышение капитализации бизнеса.'
    },
    {
      tag: 'Выделение / Разделение',
      title: <>Раздел активов <br />или направлений бизнеса</>,
      desc: 'Выделение непрофильных направлений, подготовка части бизнеса к продаже или цивилизованный раздел активов между учредителями.'
    },
    {
      tag: 'Преобразование (ООО / АО)',
      title: <>Смена организационно-правовой <br />формы компании</>,
      desc: 'Переход из АО в ООО (или наоборот) для привлечения акционерного капитала или упрощения корпоративного управления.'
    },
    {
      tag: 'Оптимизация группы компаний',
      title: <>Ликвидация неэффективных юрлиц <br />через присоединение</>,
      desc: 'Закрытие недействующих дочерних обществ с передачей имущества головной компании без ликвидационных процедур.'
    },
    {
      tag: 'Защита от рисков дробления',
      title: <>Обеление структуры бизнеса <br />по требованиям ФНС</>,
      desc: 'Легальное укрупнение и объединение нескольких связанных компаний во избежание претензий налоговой в искусственном дроблении.'
    },
    {
      tag: 'Правопреемство и лицензии',
      title: <>Сохранение договоров, <br />активов и прав на объекты</>,
      desc: 'Корректная подготовка передаточного акта для бесшовного перехода прав собственности на недвижимость, технику и контракты.'
    }
  ];

  const formsOfReorg = [
    {
      title: 'Присоединение (самая частая форма)',
      desc: 'Одно или несколько обществ прекращают деятельность, а все их права и обязанности переходят к присоединяющему обществу.'
    },
    {
      title: 'Слияние',
      desc: 'Несколько компаний прекращают деятельность с возникновением нового юридического лица, получающего все совокупные активы.'
    },
    {
      title: 'Выделение',
      desc: 'Создание одного или нескольких новых обществ с передачей им части прав и обязанностей реорганизуемого общества (без его ликвидации).'
    },
    {
      title: 'Разделение',
      desc: 'Прекращение деятельности основного общества с разделением всех прав, обязанностей и активов между несколькими новыми компаниями.'
    },
    {
      title: 'Преобразование',
      desc: 'Изменение организационно-правовой формы (например, из АО в ООО или из ООО в АО) с полным сохранением прав и обязательств.'
    }
  ];

  const practiceCases: CaseData[] = [
    {
      category: 'Присоединение',
      title: 'Консолидация агропромышленной группы из 4 компаний в единое предприятие',
      problem: 'Собственники несли избыточные расходы на аудит и администрирование 4 отдельных юридических лиц с перекрестными договорами.',
      action: 'Разработали пошаговую дорожную карту присоединения 3 дочерних компаний к материнскому ООО: подготовили передаточные акты, провели публикации в «Вестнике», уведомили кредиторов и ФНС.',
      result: 'Реорганизация успешно зарегистрирована за 3,5 месяца. Управленческие расходы группы снижены на 30%, консолидированный баланс улучшил кредитный рейтинг.'
    },
    {
      category: 'Выделение активов',
      title: 'Безопасное выделение складского комплекса стоимостью 95 млн ₽ в отдельное юрлицо',
      problem: 'Производственная компания планировала привлечь финансирование под залог складских помещений, не обременяя основное производство.',
      action: 'Структурировали процедуру реорганизации в форме выделения нового ООО: составили передаточный акт, провели инвентаризацию, зарегистрировали компанию и права на недвижимость в Росреестре.',
      result: 'Создана новая компания-хранитель активов. Основной бизнес полностью защищен от претензий по кредитам нового общества.'
    },
    {
      category: 'Преобразование',
      title: 'Преобразование непубличного АО в ООО с оптимизацией документооборота',
      problem: 'Акционеры закрытого завода тратили значительные средства на услуги реестродержателя и соблюдение сложных процедур раскрытия информации.',
      action: 'Подготовили решение общего собрания акционеров о преобразовании в ООО, согласовали порядок конвертации акций в доли уставного капитала, закрыли реестр и зарегистрировали ООО в ФНС.',
      result: 'Успешная регистрация ООО. Расходы на обслуживание реестра устранены, корпоративные процедуры упрощены.'
    }
  ];

  const processSteps: ProcessStep[] = [
    {
      num: '01',
      title: 'Разработка схемы и передаточного акта',
      desc: 'Анализируем цели бизнеса, активы, обязательства и формируем правовую модель реорганизации и передаточный акт.'
    },
    {
      num: '02',
      title: 'Корпоративные решения и уведомление ФНС',
      desc: 'Проводим общие собрания участников, оформляем протоколы и подаем форму уведомления о начале реорганизации в регистрирующий орган.'
    },
    {
      num: '03',
      title: 'Публикации и уведомление кредиторов',
      desc: 'Размещаем обязательные сообщения в Федресурсе и «Вестнике государственной регистрации» дважды с интервалом в 1 месяц.'
    },
    {
      num: '04',
      title: 'Финальная регистрация в ЕГРЮЛ',
      desc: 'Подаем итоговый комплект документов в налоговую, получаем листы записи ЕГРЮЛ и сопровождаем переоформление активов.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Преобразование (ООО ↔ АО)',
      subtitle: 'Смена организационно-правовой формы',
      popular: false,
      price: 'от 40 000 ₽',
      features: [
        { name: 'Подготовка решений и устава нового общества', value: 'Включено' },
        { name: 'Уведомление регистрирующего органа и Федресурса', value: 'Включено' },
        { name: 'Взаимодействие с реестродержателем/ФНС', value: 'Включено' },
        { name: 'Получение документов в ЕГРЮЛ', value: 'Включено' }
      ],
      buttonText: 'Заказать преобразование',
      buttonHref: '#form'
    },
    {
      title: 'Присоединение / Слияние',
      subtitle: 'Консолидация 2 и более компаний',
      popular: true,
      badgeText: 'Популярная услуга',
      price: 'от 65 000 ₽',
      features: [
        { name: 'Разработка договора о присоединении/слиянии', value: 'Включено' },
        { name: 'Подготовка передаточного акта и решений', value: 'Включено' },
        { name: 'Публикации в Вестнике госрегистрации и Федресурсе', value: 'Включено' },
        { name: 'Полное сопровождение до внесения записи в ЕГРЮЛ', value: 'Включено' }
      ],
      buttonText: 'Заказать присоединение',
      buttonHref: '#form'
    },
    {
      title: 'Выделение / Разделение активов',
      subtitle: 'Создание новых компаний и передача имущества',
      popular: false,
      price: 'от 85 000 ₽',
      features: [
        { name: 'Аудит активов и составление передаточного акта', value: 'Включено' },
        { name: 'Уведомления кредиторов и защита от досрочных исков', value: 'Включено' },
        { name: 'Регистрация создаваемых обществ в ФНС', value: 'Включено' },
        { name: 'Юридическое сопровождение переоформления прав в Росреестре', value: 'Включено' }
      ],
      buttonText: 'Заказать выделение',
      buttonHref: '#form'
    }
  ];

  const faqs = [
    {
      q: 'Сколько времени длится процедура реорганизации компании?',
      a: 'В соответствии с требованиями законодательства минимальный срок реорганизации (слияние, присоединение, выделение, разделение) составляет около 3–3,5 месяцев. Это связано с установленными законом сроками для двух обязательных публикаций в «Вестнике государственной регистрации» и ожидания требований кредиторов.'
    },
    {
      q: 'Могут ли кредиторы заблокировать реорганизацию?',
      a: 'Кредиторы реорганизуемого юридического лица вправе потребовать досрочного исполнения обязательств или возмещения убытков в судебном порядке. Однако сам факт предъявления требований не останавливает процедуру государственной регистрации в ЕГРЮЛ, если передаточный акт составлен корректно.'
    },
    {
      q: 'Нужно ли переоформлять лицензии и разрешения при реорганизации?',
      a: 'При преобразовании или присоединении в большинстве случаев лицензии подлежат переоформлению в упрощенном уведомительном порядке. При выделении или разделении требуется проверка лицензионных требований к вновь созданным юрлицам.'
    },
    {
      q: 'Проводит ли налоговая инспекция выездную проверку при реорганизации?',
      a: 'По закону налоговые органы имеют право назначить выездную налоговую проверку реорганизуемой организации независимо от времени проведения предыдущей проверки. Поэтому перед стартом процедуры мы всегда проводим предварительный налоговый аудит рисков.'
    }
  ];

  const relatedServices = [
    {
      title: 'Покупка и продажа бизнеса',
      desc: 'Сопровождение сделок M&A и комплексный Due Diligence.',
      link: '/biznesu/korporativnyj-yurist/pokupka-prodazha-biznesa/'
    },
    {
      title: 'Сделки с долями ООО',
      desc: 'Купля-продажа, дарение и залог долей у нотариуса.',
      link: '/biznesu/korporativnyj-yurist/sdelki-s-dolyami-ooo/'
    },
    {
      title: 'Корпоративный договор',
      desc: 'Фиксация договоренностей участников реорганизованных компаний.',
      link: '/biznesu/korporativnyj-yurist/korporativnyj-dogovor/'
    },
    {
      title: 'Корпоративные споры',
      desc: 'Защита прав участников при разногласиях по передаче активов.',
      link: '/biznesu/korporativnyj-yurist/korporativnye-spory-mezhdu-uchastnikami/'
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />
      <Header />

      {/* ═══ БЛОК 1: HERO ═══ */}
      <MilitaryHero
        breadcrumbs={
          <>
            <Link href="/">Главная</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/biznesu/">Бизнесу</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/biznesu/korporativnyj-yurist/">Корпоративный юрист</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Реорганизация бизнеса</span>
          </>
        }
        superTitle={
          <span style={{ whiteSpace: 'normal', display: 'inline-block', lineHeight: 1.4 }}>
            <span style={{ display: 'inline-block' }}>РЕОРГАНИЗАЦИЯ ЮРИДИЧЕСКИХ ЛИЦ •</span> <br />
            <span style={{ display: 'inline-block' }}>Липецк и ФНС</span>
          </span>
        }
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Реорганизация бизнеса
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Слияние, присоединение, выделение, разделение и преобразование компаний под ключ: разработка структуры, передаточные акты, уведомление кредиторов и регистрация в ФНС.
          </span>
        }
        primaryCtaText="Заказать план реорганизации"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_primary_cta_corp_reorg"
        primaryCtaSubtext={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Перезвоним в рабочее время
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              или ответим по телефону: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (4742) 20-15-25</a>
            </span>
          </span>
        }
        imageUrl="/images/nacheshnikov.jpg"
        imageName="Владимир Викторович Начешников"
        imageSubtitle="Специалист по корпоративным процедурам, куратор направления"
        imageObjectPosition="center 15%"
        trustItems={[
          {
            text: (
              <span>
                <strong>Практический опыт с 1997 года</strong> в сопровождении корпоративных процедур
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Полная конфиденциальность</strong> и защита коммерческой тайны бизнеса
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Арбитражный суд Липецкой области</strong> и арбитражные суды РФ
              </span>
            )
          }
        ]}
      />

      {/* ═══ БЛОК 2: ТИПОВЫЕ СИТУАЦИИ / КОНФЛИКТЫ ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span style={{ display: 'inline-block' }}>Типовые ситуации проведения</span> <br />
              <span style={{ display: 'inline-block' }}>реорганизации компании</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Реорганизация позволяет оптимизировать структуру активов, объединить бизнес или разделить доли без налоговых потерь.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '32px' }}>
            {situations.map((sit, idx) => (
              <div
                key={idx}
                className="hover-lift"
                style={{
                  padding: '36px 30px',
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
              >
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
                  display: 'inline-block',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {sit.tag}
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '20px',
                  fontWeight: 600,
                  color: 'var(--color-deep-blue)',
                  margin: '0 0 14px 0',
                  lineHeight: 1.35,
                  position: 'relative',
                  zIndex: 1
                }}>
                  {sit.title}
                </h3>

                <p style={{
                  fontSize: '15px',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.6,
                  margin: 0,
                  position: 'relative',
                  zIndex: 1
                }}>
                  {sit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: ФОРМЫ РЕОРГАНИЗАЦИИ ═══ */}
      <section className="section bg-white" id="forms">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 50px auto' }}>
            <h2 className="section-title" style={{ marginBottom: '16px' }}>
              Пять форм реорганизации: какую выбрать
            </h2>
            <p className="section-subtitle" style={{ color: 'var(--color-text-secondary)', margin: '0 auto' }}>
              Подбираем форму, идеально отвечающую стратегическим и налоговым целям вашего предприятия.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px' }}>
            {formsOfReorg.map((form, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  padding: '32px 26px',
                  backgroundColor: 'var(--color-bg-light)',
                  border: '1px solid var(--color-border)'
                }}
              >
                <h3 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', marginBottom: '12px', lineHeight: 1.4 }}>
                  {form.title}
                </h3>
                <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {form.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: КУРАТОР ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name="Владимир Викторович Начешников"
        position="Специалист по корпоративным процедурам и сопровождению бизнеса, куратор направления"
        imageUrl="/images/nacheshnikov.jpg"
        imagePosition="center 15%"
        profileHref="/specialisty/nacheshnikov-vladimir-viktorovich/"
        profileText="Подробнее о Владимире Викторовиче Начешникове →"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Реорганизация требует безупречной юридической и бухгалтерской точности: малейшая ошибка в передаточном акте может заблокировать регистрацию в ФНС.
          </span>,
          <span key="2" style={{ color: 'var(--color-deep-blue)', display: 'block', marginTop: '12px' }}>
            Владимир Викторович координирует подготовку корпоративных решений, инвентаризацию, публикации в государственных вестниках и регистрационные действия в налоговых органах Липецка.
          </span>
        ]}
        buttonText="Обсудить реорганизацию с куратором"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 5: КЕЙСЫ ═══ */}
      <CasesBlock
        title={<><span style={{ display: 'inline-block' }}>Примеры проектов</span> <br /><span style={{ display: 'inline-block' }}>по реорганизации предприятий</span></>}
        cases={practiceCases}
        showAllLink="/praktika"
        showAllText="Смотреть всю практику →"
      />

      {/* ═══ БЛОК 6: КАК ПРОХОДИТ РАБОТА (ПОРЯДОК РАБОТЫ) ═══ */}
      <ProcessBlock
        title={<><span style={{ display: 'inline-block' }}>Этапы сопровождения</span> <br /><span style={{ display: 'inline-block' }}>реорганизации бизнеса</span></>}
        subtitle="Полный контроль всех этапов и сроков взаимодействия с государственными органами."
        steps={processSteps}
        ctaTitle="Планируете изменение структуры компании или выделение активов?"
        ctaSubtitle="Разработаем безопасную дорожную карту реорганизации с защитой от претензий кредиторов и ФНС."
        ctaButtonText="Получить план реорганизации"
        ctaButtonHref="#form"
      />

      {/* ═══ БЛОК 7: ТАРИФЫ ═══ */}
      <PricingBlock
        title="Стоимость сопровождения реорганизации"
        subtitle="Фиксированная стоимость, поэтапная оплата в соответствии с договором."
        tiers={pricingTiers}
        ctaTitle="Рассчитаем стоимость реорганизации вашей компании"
        ctaSubtitle="Оставьте заявку — куратор направления проведет предварительный анализ и рассчитает точные сроки и стоимость."
        ctaButtonText="Рассчитать стоимость"
        ctaButtonLink="#form"
      />

      {/* ═══ БЛОК 8: FAQ ═══ */}
      <FAQBlock
        superTitle="Частые вопросы"
        title="Вопросы о реорганизации бизнеса"
        subtitle="Ответы на ключевые вопросы собственников и бухгалтеров по проведению реорганизационных процедур."
        faqs={faqs}
      />

      {/* ═══ БЛОК 9: СМЕЖНЫЕ НАПРАВЛЕНИЯ ПРАКТИКИ ДЛЯ БИЗНЕСА (ПО ШАБЛОНУ) ═══ */}
      <section className="section bg-light" id="related-services" style={{ padding: '64px 0', background: 'var(--gradient-cream)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ maxWidth: '840px', marginBottom: '36px', textAlign: 'left' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '10px'
            }}>
              Смежные направления практики для бизнеса
            </div>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px, 3.5vw, 34px)', color: 'var(--color-deep-blue)', marginBottom: '14px', marginTop: 0, lineHeight: 1.25 }}>
              <span style={{ display: 'inline-block' }}>Смежные услуги</span> <br /><span style={{ display: 'inline-block' }}>по структурированию бизнеса</span>
            </h2>
            <p style={{ fontSize: '15.5px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.65, margin: 0, textWrap: 'balance' }}>
              Безопасное разделение, слияние и оптимизация структуры владения активами.
            </p>
          </div>

          <div className={relatedServices.length === 4 ? "grid grid-4" : "grid grid-3"} style={{ gap: '20px', marginBottom: '28px' }}>
            {relatedServices.map((rel, idx) => (
              <Link key={idx} href={rel.link} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                <div
                  className="card related-service-card hover-lift"
                  style={{
                    height: '100%',
                    minHeight: '180px',
                    padding: '26px 24px',
                    background: 'var(--color-white)',
                    border: '1px solid var(--color-border)',
                    borderTop: '3px solid var(--color-primary)',
                    borderRadius: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 16px rgba(23, 50, 77, 0.04)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div>
                    <h3 style={{ margin: '0 0 10px 0', fontSize: '17px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', lineHeight: 1.35, fontWeight: 700 }}>
                      {rel.title}
                    </h3>
                    <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                      {rel.desc}
                    </p>
                  </div>
                  <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontSize: '13.5px', fontWeight: 600, marginTop: '18px', transition: 'color 0.35s ease' }}>
                    <span>Подробнее об услуге</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 10: ФИНАЛЬНАЯ ФОРМА (СВЯЗАТЬСЯ С НАМИ) — ШАБЛОН ═══ */}
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
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Получите первичную</span>{' '}
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>оценку ситуации</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Кратко опишите ситуацию и оставьте контакты. Юрист изучит первичные документы и свяжется с вами для обсуждения правовой задачи.
              </p>

              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация юриста</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Позвоните прямо сейчас: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (4742) 20-15-25</a>
                </p>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '6px' }}>
                  Липецк, ул. Советская, д. 35, офис 213 (приём по записи)
                </div>
              </div>

              <div style={{ background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Конфиденциальность:</strong>
                Не указывайте в форме конфиденциальные данные, коммерческую тайну и закрытые документы. Документы можно передать юристу после согласования защищённого способа связи.
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
                buttonText="Обсудить план реорганизации"
                commentPlaceholder="Кратко опишите цели: слияние, присоединение, разделение, выделение или преобразование…"
                hiddenFields={[
                  { name: 'source_page', value: '/biznesu/korporativnyj-yurist/reorganizaciya-biznesa/' },
                  { name: 'service', value: 'Реорганизация бизнеса и предприятий' }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
