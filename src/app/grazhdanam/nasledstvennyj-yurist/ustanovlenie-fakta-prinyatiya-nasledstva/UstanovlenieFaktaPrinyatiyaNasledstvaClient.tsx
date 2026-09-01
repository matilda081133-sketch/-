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

export default function UstanovlenieFaktaPrinyatiyaNasledstvaClient() {
  const cases: CaseData[] = [
    {
        "category": "Фактическое принятие / ЖКУ",
        "title": "Установили факт принятия квартиры спустя 7 лет после смерти отца",
        "problem": "Сын проживал в квартире отца, оплачивал счета, но к нотариусу вовремя не обратился; возник риск признания жилья выморочным.",
        "action": "Собрали чеки об оплате коммунальных услуг, квитанции о замене сантехники и привлекли соседей в качестве свидетелей.",
        "result": "Суд установил факт принятия наследства и признал право собственности за сыном."
    },
    {
        "category": "Дача / Земельный участок",
        "title": "Оформили права на дачу и участок в СНТ при отсутствии документов",
        "problem": "Дочь более 10 лет возделывала земельный участок умершей матери, платила членские взносы, но нотариальное дело не открывалось.",
        "action": "Получили справки от председателя СНТ, выписки из лицевых счетов и подготовили заявление в суд.",
        "result": "Право собственности на земельный участок и садовый дом признано судом и зарегистрировано в Росреестре."
    },
    {
        "category": "Автомобиль / Кредиты",
        "title": "Доказали факт принятия автомобиля через оплату кредита умершего",
        "problem": "Банк требовал изъятия кредитного автомобиля, на который наследник не оформил документы у нотариуса.",
        "action": "Предоставили в суд выписки о регулярных платежах по кредиту за счёт средств наследника и полисы ОСАГО.",
        "result": "Суд признал автомобиль принятым наследством, сохранив имущество за доверителем."
    }
];
  const faqs = [
  {
    "q": "Какие действия считаются фактическим принятием наследства?",
    "a": "Вступление во владение или управление имуществом, принятие мер по сохранению имущества (ремонт, установка замков), оплата расходов на содержание (ЖКУ, налоги, взносы) и оплата долгов наследодателя за свой счёт в течение первых 6 месяцев (п. 2 ст. 1153 ГК РФ)."
  },
  {
    "q": "Какие документы подтверждают фактическое принятие?",
    "a": "Квитанции об оплате коммунальных услуг и налогов с датами первых 6 месяцев, справки о совместном проживании, договоры на ремонт, чеки на покупку стройматериалов и показания свидетелей."
  },
  {
    "q": "Можно ли установить факт принятия, если прошло много лет?",
    "a": "Да. Срок давности на установление факта принятия наследства законом не ограничен, если удастся доказать совершение фактических действий в первые 6 месяцев после смерти."
  }
];

  const pricingTiers: PricingTier[] = [
    {
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Консультация</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и аудит доказательств</span>
        </>
      ),
      subtitle: 'Оценка квитанций, справок и проверка факта принятия в 6-месячный срок',
      features: [
      {
              "name": "Анализ имеющихся квитанций и справок",
              "value": "[уточняется]"
      },
      {
              "name": "Определение перечня недостающих доказательств",
              "value": "[уточняется]"
      },
      {
              "name": "Правовое заключение",
              "value": "[уточняется]"
      }
],
      buttonText: 'Проверить шансы',
      buttonHref: '#form'
    },
    {
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Подготовка</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>иска в суд</span>
        </>
      ),
      subtitle: 'Составление искового заявления с доказательной базой для признания права',
      features: [
      {
              "name": "Иск об установлении факта принятия",
              "value": "[уточняется]"
      },
      {
              "name": "Ходатайства о вызове свидетелей",
              "value": "[уточняется]"
      },
      {
              "name": "Запросы в управляющие компании",
              "value": "[уточняется]"
      }
],
      buttonText: 'Заказать иск',
      buttonHref: '#form'
    },
    {
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Ведение дела в суде</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>«под ключ»</span>
        </>
      ),
      subtitle: 'Полное судебное сопровождение до признания права собственности и Росреестра',
      popular: true,
      badgeText: 'Популярно',
      features: [
      {
              "name": "Участие во всех судебных заседаниях",
              "value": "[уточняется]"
      },
      {
              "name": "Допрос свидетелей и экспертов",
              "value": "[уточняется]"
      },
      {
              "name": "Регистрация права собственности в ЕГРН",
              "value": "[уточняется]"
      }
],
      buttonText: 'Выбрать тариф',
      buttonHref: '#form'
    }
  ];

  const steps: ProcessStep[] = [
    {
      num: '01',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Изучаем ситуацию</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и документы</span>
        </>
      ),
      desc: 'Анализируем родственные связи, имеющиеся справки, свидетельства и завещания, проверяем сроки и риски споров.'
    },
    {
      num: '02',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Собираем недостающие</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>доказательства</span>
        </>
      ),
      desc: 'Запрашиваем архивные документы из ЗАГС, делаем запросы в банки, Росреестр, медицинские учреждения и к нотариусам.'
    },
    {
      num: '03',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Формируем правовую</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>стратегию</span>
        </>
      ),
      desc: 'Сравниваем нотариальный, переговорный и судебный варианты, оцениваем риски, сроки и согласовываем фиксированную стоимость.'
    },
    {
      num: '04',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Готовим документы</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и ведём процесс</span>
        </>
      ),
      desc: 'Составляем заявления нотариусу, исковые заявления в суд, ходатайства об экспертизах и представляем ваши интересы на заседаниях.'
    },
    {
      num: '05',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Сопровождаем</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>регистрацию прав</span>
        </>
      ),
      desc: 'После получения свидетельства нотариуса или решения суда помогаем завершить регистрацию права собственности в Росреестре.'
    },
    {
      isBanner: true,
      title: 'Дистанционный формат',
      desc: 'Первичное обсуждение и передача копий документов могут пройти дистанционно. Защищённый канал передачи документов согласуется после первичного контакта.'
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
          'streetAddress': 'ул. Советская, д. 35',
          'addressCountry': 'RU'
        }
      },
      {
        '@type': 'Service',
        'name': 'Установление факта принятия наследства в Липецке | Де-Юре',
        'provider': { '@id': 'https://dejure-help.ru/#organization' },
        'areaServed': {
          '@type': 'AdministrativeArea',
          'name': 'Липецк и Липецкая область'
        },
        'description': 'Помощь в установлении факта принятия наследства через суд в Липецке, если 6-месячный срок у нотариуса пропущен. Сбор доказательств и признание права.'
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
            <Link href="/grazhdanam/nasledstvennyj-yurist/">Наследственный юрист</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Установление факта принятия наследства в суде</span>
          </>
        }
        superTitle="Наследственный юрист в Липецке"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Установление факта
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              принятия наследства в суде
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Признание права собственности на имущество через суд, если 6-месячный срок обращения к нотариусу пропущен, но вы фактически пользуетесь и содержите имущество.
          </span>
        }
        primaryCtaText="Обсудить ситуацию с юристом"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_cta_ustanovlenie_fakta"
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
        trustItems={[{"text":"Признание права собственности через суд"},{"text":"Сбор квитанций, справок и свидетельских показаний"},{"text":"Работа при пропуске срока на годы и десятилетия"},{"text":"Куратор — юрист М. В. Смольянинова"}]}
        imageUrl="/images/smolyaninova.jpg"
        imageName="Марина Валерьевна Смольянинова"
        imageSubtitle="Ведущий юрист ЮК «Де-Юре», куратор направления «Наследственное право»"
        imageObjectPosition="center 20%"
      />

      {/* ═══ БЛОК 2: В КАКИХ СИТУАЦИЯХ МЫ ПОМОГАЕМ (ТИПОВОЙ ШАБЛОН) ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>В каких ситуациях</span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>мы можем помочь</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Ознакомьтесь с типовыми сценариями. Если ваша ситуация сложнее или включает несколько вопросов — мы разработаем индивидуальный план действий.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '40px' }}>
            {[
              {
                tag: 'ЖКУ / Квартира',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Проживание</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>в квартире после смерти</span>
                  </>
                ),
                desc: 'Наследник продолжал жить в квартире умершего, оплачивал ЖКУ и налоги, но к нотариусу не ходил.'
              },
              {
                tag: 'Дача / Земля',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Обработка</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и содержание дачи/земли</span>
                  </>
                ),
                desc: 'Пользование земельным участком, посадка урожая, оплата взносов в СНТ и благоустройство территории.'
              },
              {
                tag: 'Ремонт / Дом',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Ремонт</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и сохранение имущества</span>
                  </>
                ),
                desc: 'Установка забора, замена крыши, ремонт техники или поддержание сохранности жилого дома.'
              },
              {
                tag: 'Долги / Погашение',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Оплата долгов</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и кредитов умершего</span>
                  </>
                ),
                desc: 'Погашение кредитов, коммунальных задолженностей или налогов за счёт личных средств наследника.'
              },
              {
                tag: 'Автомобиль / ТО',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Владение</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>автомобилем наследодателя</span>
                  </>
                ),
                desc: 'Управление машиной, прохождение ТО, оформление страховок и оплата штрафов после смерти владельца.'
              },
              {
                tag: 'Отказ нотариуса',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Отказ нотариуса</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>из-за пропуска срока</span>
                  </>
                ),
                desc: 'Получение постановления нотариуса об отказе в совершении нотариального действия и перевод спора в суд.'
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
                  fontSize: '17px', 
                  fontWeight: 600,
                  color: 'var(--color-deep-blue)', 
                  margin: '0 0 12px 0', 
                  lineHeight: 1.35, 
                  minHeight: '44px',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {item.title}
                </h3>
                <p style={{ 
                  color: 'var(--color-text-secondary)', 
                  fontSize: '14px', 
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

          <div style={{ textAlign: 'center' }}>
            <a href="#form" className="btn btn-primary" style={{ display: 'inline-block' }}>
              Получить правовую оценку
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: КУРАТОР НАПРАВЛЕНИЯ (ТИПОВОЙ ШАБЛОН) ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name="Марина Валерьевна Смольянинова"
        position={<>Ведущий юрист ЮК &#171;Де-Юре&#187;,<br />куратор направления &#171;Наследственное право&#187;</>}
        imageUrl="/images/smolyaninova.jpg"
        imagePosition="center 20%"
        profileHref="/specialisty/smolyaninova-marina-valerevna/"
        profileText="Подробнее о Марине Валерьевне Смольяниновой →"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            13 лет профессионального опыта в сфере правоприменения и защиты прав граждан: глубокое знание процедур, требований нотариата и судебной практики.
          </span>,
          <ul key="2" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Специализируется на комплексном сопровождении наследственных дел: оформление у нотариуса, восстановление сроков, оспаривание завещаний и выдел долей</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Успешный опыт мирного досудебного урегулирования споров между наследниками и защиты интересов доверителей в судах всех инстанций</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Ведёт наследственные дела в Липецке и Липецкой области; доступен дистанционный формат работы для доверителей из любых регионов России и из-за рубежа</span>
            </li>
          </ul>
        ]}
        buttonText="Задать вопрос юристу"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 4: ПРИМЕРЫ ИЗ ПРАКТИКИ ═══ */}
      <CasesBlock
        title="Примеры дел из практики"
        showAllLink="/praktika/"
        showAllText="Смотреть все дела"
        showDemoWarning={true}
        cases={cases}
      />

      {/* ═══ БЛОК 5: КАК ПРОХОДИТ РАБОТА ═══ */}
      <ProcessBlock
        title="Как проходит работа"
        subtitle="Чёткий алгоритм действий — вы всегда знаете, что происходит на каждом этапе вашего дела."
        alignTitle="center"
        steps={steps}
        ctaTitle="Готовы обсудить вашу ситуацию"
        ctaSubtitle="Опишите задачу — юрист изучит документы и предложит понятный план действий."
        ctaButtonText="Обсудить ситуацию"
        ctaButtonHref="#form"
      />

      {/* ═══ БЛОК 6: СТОИМОСТЬ УСЛУГ ═══ */}
      <PricingBlock
        title="Стоимость услуг наследственного юриста"
        subtitle="Стоимость зависит от сложности спора, состава имущества, наличия документов и необходимости судебного процесса."
        tiers={pricingTiers}
        disclaimer="Стоимость определяется после уточнения задачи и изучения имеющихся документов. Состав услуг, цена и порядок оплаты фиксируются в договоре до начала работы. Оплата вознаграждения исполнителя не зависит от исхода дела и не включает государственные пошлины и сопутствующие судебные расходы."
      />

      {/* ═══ БЛОК 7: ЧАСТЫЕ ВОПРОСЫ (FAQ) ═══ */}
      <FAQBlock
        superTitle="Частые вопросы клиентов"
        title={<><span>Ответы на</span> <br /><span>частые вопросы</span></>}
        subtitle="О процедурах и юридических тонкостях"
        ctaText="Задать свой вопрос"
        ctaLink="#form"
        faqs={faqs}
      />

      {/* ═══ БЛОК 8: ФИНАЛЬНАЯ ФОРМА (СВЯЗАТЬСЯ С НАМИ - ТИПОВОЙ 2-КОЛОНОЧНЫЙ ШАБЛОН) ═══ */}
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
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Обсудите ситуацию</span>{' '}
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>с наследственным юристом</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Опишите ситуацию, состав имущества и статус обращения к нотариусу. Обращение передадим Марине Валерьевне Смольяниновой. Она проверит документы, оценит риски и свяжется с вами для согласования порядка действий.
              </p>
              
              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '20px' }}>
                <div style={{ fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '8px', fontSize: '15px' }}>
                  Прямой контакт для срочных вопросов:
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                  <a href="tel:+79103503111" style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-primary)', textDecoration: 'none' }}>
                    +7 (910) 350-31-11
                  </a>
                  <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>
                    (Пн-Пт 9:00 - 18:00)
                  </span>
                </div>
              </div>

              <div style={{ marginTop: 'auto', paddingTop: '10px' }}>
                <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Гарантируем конфиденциальность. Данные передаются только юристу компании «Де-Юре» для правового анализа.
                </p>
              </div>
            </div>

            <div>
              <div style={{ background: 'var(--color-white)', padding: '40px', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-primary)', boxShadow: '0 12px 40px rgba(23, 50, 77, 0.08)' }}>
                <ContactsForm 
                  title="Заявка на консультацию" 
                  subtitle="Заполните форму, и юрист свяжется с вами в течение 15 минут"
                  hiddenFields={[
                    { name: 'service', value: 'Установление факта принятия наследства в Липецке | Де-Юре' },
                    { name: 'category', value: 'nasledstvennyj-yurist/ustanovlenie-fakta-prinyatiya-nasledstva' },
                    { name: 'specialist', value: 'Марина Валерьевна Смольянинова' }
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
