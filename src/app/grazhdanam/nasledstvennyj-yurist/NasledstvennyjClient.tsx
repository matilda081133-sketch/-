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

export default function NasledstvennyjClient() {
  const cases: CaseData[] = [
    {
      category: 'Фактическое принятие / Жильё',
      title: 'Подтвердили фактическое принятие квартиры через суд',
      problem: 'Наследница после смерти матери продолжила жить в квартире, оплачивала коммунальные платежи и содержала жильё, но в 6-месячный срок не подала заявление нотариусу.',
      action: 'Собрали квитанции об оплате ЖКУ, справки о совместном проживании, договоры на ремонт, подготовили заявление и защитили позицию в суде.',
      result: 'Суд установил факт принятия наследства и признал право собственности на квартиру; решение вступило в силу и зарегистрировано в Росреестре.'
    },
    {
      category: 'Восстановление срока / Суд',
      title: 'Восстановили пропущенный срок принятия наследства',
      problem: 'Наследник первой очереди не смог обратиться к нотариусу в течение 6 месяцев из-за длительного лечения и проживания в другом регионе; другие наследники успели оформить доли.',
      action: 'Собрали медицинские документы, доказали уважительность причин пропуска и обращение в суд в пределах 6 месяцев после выздоровления, заявили требования о перераспределении долей.',
      result: 'Суд восстановил срок, аннулировал ранее выданные свидетельства нотариуса и перераспределил доли в наследственном имуществе в пользу доверителя.'
    },
    {
      category: 'Раздел имущества / Переговоры',
      title: 'Разделили наследственное имущество без затяжного судебного спора',
      problem: 'Трое наследников получили доли в квартире и загородном доме, однако не могли договориться о порядке пользования и размерах взаимных компенсаций.',
      action: 'Провели независимую оценку активов, выработали варианты справедливого раздела, провели серию переговоров и подготовили нотариальное соглашение.',
      result: 'Наследники подписали соглашение о разделе без судебных расходов: один получил квартиру с выплатой компенсации, двое других — дом и земельный участок.'
    }
  ];

  const faqs = [
    {
      q: 'С какими вопросами помогает наследственный юрист?',
      a: 'С оформлением наследства у нотариуса, сбором недостающих документов, спорами о завещании, восстановлением пропущенного шестимесячного срока, установлением факта принятия наследства, определением долей и разделом имущества между наследниками. Если нотариус отказывает в совершении действий или между родственниками возник конфликт, юрист выстраивает досудебную и судебную защиту.'
    },
    {
      q: 'В какой срок нужно обратиться к нотариусу после смерти наследодателя?',
      a: 'Общий срок для принятия наследства — 6 месяцев со дня открытия наследства (дня смерти гражданина). Ждать окончания 6 месяцев не нужно: заявление нотариусу необходимо подать ДО истечения этого срока.'
    },
    {
      q: 'Что делать, если шестимесячный срок принятия наследства уже пропущен?',
      a: 'Если вы фактически пользовались имуществом (жили в квартире, оплачивали коммунальные услуги, обрабатывали участок, ремонтировали автомобиль), подаётся иск об установлении факта принятия наследства. Если фактического принятия не было, оцениваются уважительные причины пропуска для восстановления срока через суд по ст. 1155 ГК РФ.'
    },
    {
      q: 'Чем установление факта принятия отличается от восстановления срока?',
      a: 'При установлении факта доказывается, что наследник УЖЕ фактически принял наследство своими действиями в течение первых 6 месяцев. При восстановлении срока доказывается, что наследник НЕ МОГ принять наследство вовремя по уважительным причинам (тяжёлая болезнь, беспомощное состояние, неизвещение).'
    },
    {
      q: 'По каким основаниям можно оспорить завещание?',
      a: 'Основные основания: наследодатель в момент подписания не понимал значения своих действий (ст. 177 ГК РФ), документ подписан под влиянием обмана, угрозы или давления (ст. 179 ГК РФ), подделана подпись либо нарушена нотариальная форма завещания.'
    },
    {
      q: 'Кто имеет право на обязательную долю в наследстве независимо от завещания?',
      a: 'Несовершеннолетние или нетрудоспособные дети наследодателя, его нетрудоспособные супруг и родители, а также нетрудоспособные иждивенцы. Они наследуют не менее половины доли, которая причиталась бы каждому из них при наследовании по закону (ст. 1149 ГК РФ).'
    },
    {
      q: 'Кого закон признаёт недостойным наследником?',
      a: 'Лиц, которые совершили умышленные противоправные действия против наследодателя или других наследников для увеличения своей доли, родителей, лишённых родительских прав, а также лиц, злостно уклонявшихся от законных обязанностей по содержанию наследодателя (ст. 1117 ГК РФ).'
    },
    {
      q: 'Переходят ли долги наследодателя по наследству?',
      a: 'Да. Наследники, принявшие наследство, отвечают по долгам наследодателя солидарно, но ТОЛЬКО в пределах действительной стоимости перешедшего к ним наследственного имущества (ст. 1175 ГК РФ). Личным имуществом наследник по долгам наследодателя не отвечает.'
    },
    {
      q: 'Можно ли оформить наследство или решить спор дистанционно?',
      a: 'Да. Первичный разбор ситуации, правовой анализ и разработка документов проводятся дистанционно. Ведение дела у нотариуса или в суде может осуществляться юристом по нотариальной доверенности без личного присутствия доверителя.'
    },
    {
      q: 'Какие документы нужны для первичной консультации?',
      a: 'Свидетельство о смерти (при наличии), документы, подтверждающие родство (свидетельства о рождении, браке), завещание с отметкой нотариуса (если есть), документы на имущество (выписки ЕГРН, ПТС) и имеющаяся переписка с нотариусом.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Консультация по наследству',
      subtitle: 'Разбор обстоятельств, анализ документов и определение порядка действий',
      features: [
        { name: 'Изучение документов о родстве и имуществе', value: '[уточняется]' },
        { name: 'Проверка соблюдения сроков и рисков', value: '[уточняется]' },
        { name: 'Оценка перспектив нотариального или судебного спора', value: '[уточняется]' },
        { name: 'План дальнейших действий для нотариуса или суда', value: '[уточняется]' }
      ],
      buttonText: 'Записаться на консультацию',
      buttonHref: '#form'
    },
    {
      title: 'Сопровождение у нотариуса',
      subtitle: 'Полное ведение наследственного дела от открытия до получения свидетельства',
      popular: true,
      badgeText: 'Популярно',
      features: [
        { name: 'Подача заявления об открытии наследственного дела', value: '[уточняется]' },
        { name: 'Запросы в архивы ЗАГС, Росреестр, банки и ГИБДД', value: '[уточняется]' },
        { name: 'Контроль состава наследственной массы и долей', value: '[уточняется]' },
        { name: 'Получение свидетельств о праве на наследство', value: '[уточняется]' }
      ],
      buttonText: 'Обсудить оформление',
      buttonHref: '#form'
    },
    {
      title: 'Судебная защита по наследству',
      subtitle: 'Ведение спора в суде: восстановление срока, раздел, оспаривание завещания',
      features: [
        { name: 'Подготовка иска, ходатайств и доказательной базы', value: '[уточняется]' },
        { name: 'Назначение посмертных и почерковедческих экспертиз', value: '[уточняется]' },
        { name: 'Представительство во всех судебных заседаниях', value: '[уточняется]' },
        { name: 'Регистрация права собственности по решению суда', value: '[уточняется]' }
      ],
      buttonText: 'Оценить перспективу',
      buttonHref: '#form'
    }
  ];

  const steps: ProcessStep[] = [
    {
      num: '01',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Разбираемся</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>в ситуации</span>
        </>
      ),
      desc: 'Уточняем круг наследников, состав наследственной массы, наличие завещания, статус нотариального дела и соблюдение 6-месячного срока.'
    },
    {
      num: '02',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Изучаем документы</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и доказательства</span>
        </>
      ),
      desc: 'Проверяем документы о родстве, выписки ЕГРН, материалы нотариуса, квитанции об оплате и основания для возможного судебного спора.'
    },
    {
      num: '03',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Определяем</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>правовой маршрут</span>
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
          'addressLocality': 'Липецк',
          'addressRegion': 'Липецкая область',
          'addressCountry': 'RU'
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/grazhdanam/nasledstvennyj-yurist/#breadcrumbs',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Главная', 'item': 'https://dejure-help.ru/' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Гражданам', 'item': 'https://dejure-help.ru/grazhdanam/' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Наследственный юрист', 'item': 'https://dejure-help.ru/grazhdanam/nasledstvennyj-yurist/' }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/grazhdanam/nasledstvennyj-yurist/#service',
        'url': 'https://dejure-help.ru/grazhdanam/nasledstvennyj-yurist/',
        'name': 'Наследственный юрист в Липецке',
        'provider': { '@id': 'https://dejure-help.ru/#organization' },
        'areaServed': {
          '@type': 'AdministrativeArea',
          'name': 'Липецк и Липецкая область'
        },
        'description': 'Помощь наследственного юриста в Липецке: оформление у нотариуса, восстановление срока, установление факта принятия, оспаривание завещания и раздел наследства.'
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/grazhdanam/nasledstvennyj-yurist/#faq',
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
        '@id': 'https://dejure-help.ru/specialisty/smolyaninova-marina-valerevna/#person',
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
            <span style={{ color: 'var(--color-text-main)' }}>Наследственный юрист</span>
          </>
        }
        superTitle="Наследственное право в Липецке"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Наследственный
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              юрист в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Поможем оформить наследство у нотариуса, восстановить пропущенный срок, доказать фактическое принятие имущества, разделить наследство или оспорить завещание в суде.
          </span>
        }
        primaryCtaText="Обсудить ситуацию с юристом"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_primary_cta_nasledstvo"
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
        trustItems={[
          { text: 'Сопровождение оформления у нотариуса и в суде' },
          { text: 'Защита при спорах о завещании, сроках и долях' },
          { text: 'Проверка долгов наследодателя и состава наследства' },
          { text: 'Куратор — юрист М. В. Смольянинова' }
        ]}
        imageUrl="/images/smolyaninova.jpg"
        imageName="Марина Валерьевна Смольянинова"
        imageSubtitle="Ведущий юрист ЮК «Де-Юре», куратор направления «Наследственное право»"
        imageObjectPosition="center 20%"
      />

      {/* ═══ БЛОК 2: С КАКИМИ СИТУАЦИЯМИ МЫ ПОМОГАЕМ (ТИПОВОЙ ШАБЛОН) ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>С какими ситуациями</span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>мы помогаем гражданам</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Наследственные вопросы редко ограничиваются одним документом. Поможем определить, какой порядок действий подходит именно к вашей ситуации.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {[
              {
                tag: 'Оформление / Нотариус',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Не знаете, с чего</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>начать оформление</span>
                  </>
                ),
                desc: 'Нужно открыть наследственное дело, собрать документы, определить состав имущества и пройти процедуру у нотариуса.'
              },
              {
                tag: 'Сроки / 6 месяцев',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Пропустили срок</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>принятия наследства</span>
                  </>
                ),
                desc: 'Шесть месяцев уже истекли, а заявление нотариусу не подавалось или наследник узнал об имуществе позднее.'
              },
              {
                tag: 'Фактическое принятие',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Пользовались имуществом,</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>но не оформили права</span>
                  </>
                ),
                desc: 'После смерти наследодателя оплачивали расходы, жили в квартире, содержали дом или землю, но к нотариусу вовремя не обратились.'
              },
              {
                tag: 'Завещание / Суд',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Не согласны</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>с завещанием</span>
                  </>
                ),
                desc: 'Есть сомнения в действительности завещания, обстоятельствах его подписания или способности наследодателя понимать значение действий.'
              },
              {
                tag: 'Недостойный наследник',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Другого наследника</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>хотят отстранить</span>
                  </>
                ),
                desc: 'Возник вопрос, есть ли предусмотренные законом основания признать наследника недостойным либо защитить его от необоснованных требований.'
              },
              {
                tag: 'Раздел имущества',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Наследники не могут</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>разделить имущество</span>
                  </>
                ),
                desc: 'Спорят о квартире, доме, земле, автомобиле, долях или компенсации и не могут заключить мирное соглашение.'
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
        </div>
      </section>

      {/* ═══ БЛОК 3: НАПРАВЛЕНИЯ ПОМОЩИ (КАТАЛОГ УСЛУГ С 7-Й КАРТОЧКОЙ) ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Услуги</span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>наследственного юриста</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Выберите конкретную услугу, чтобы узнать порядок действий, необходимые документы и варианты решения вашей задачи.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {[
              {
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Оформление</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и вступление в наследство</span>
                  </>
                ),
                desc: 'Открытие наследственного дела у нотариуса, сбор недостающих справок, подтверждение родства и сопровождение до выдачи свидетельств.',
                link: '/grazhdanam/nasledstvennyj-yurist/oformlenie-i-vstuplenie-v-nasledstvo/'
              },
              {
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Восстановление срока</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>принятия наследства</span>
                  </>
                ),
                desc: 'Судебное восстановление пропущенного 6-месячного срока по ст. 1155 ГК РФ при наличии уважительных причин пропуска.',
                link: '/grazhdanam/nasledstvennyj-yurist/vosstanovlenie-sroka-prinyatiya-nasledstva/'
              },
              {
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Установление факта</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>принятия наследства</span>
                  </>
                ),
                desc: 'Признание права собственности через суд, если вы фактически приняли имущество в течение 6 месяцев, но к нотариусу не ходили.',
                link: '/grazhdanam/nasledstvennyj-yurist/ustanovlenie-fakta-prinyatiya-nasledstva/'
              },
              {
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Оспаривание</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>завещания в суде</span>
                  </>
                ),
                desc: 'Признание завещания недействительным по ст. 177 ГК РФ (невменяемость), пороку воли или нарушениям формы; проведение экспертиз.',
                link: '/grazhdanam/nasledstvennyj-yurist/osparivanie-zaveschaniya/'
              },
              {
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Раздел наследства</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>между наследниками</span>
                  </>
                ),
                desc: 'Мирное соглашение о разделе долей, выделение имущества в натуре, взыскание компенсации и судебный раздел активов.',
                link: '/grazhdanam/nasledstvennyj-yurist/razdel-nasledstva-mezhdu-naslednikami/'
              },
              {
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Признание</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>наследника недостойным</span>
                  </>
                ),
                desc: 'Судебное исключение наследника при наличии законных оснований: умышленных противоправных действий ради получения наследства, лишения родительских прав или злостного уклонения от содержания наследодателя.',
                link: '/grazhdanam/nasledstvennyj-yurist/priznanie-naslednika-nedostojnym/'
              }
            ].map((dir, i) => (
              <Link 
                key={i} 
                href={dir.link} 
                data-analytics="click_nasledstvo_service_card" 
                style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', height: '100%' }}
              >
                <div 
                  className="card service-card hover-lift" 
                  style={{ 
                    height: '100%', 
                    minHeight: '260px',
                    padding: '32px 28px', 
                    background: 'var(--color-white)', 
                    border: '1px solid var(--color-border)',
                    borderTop: '4px solid var(--color-primary)',
                    borderRadius: '0',
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)',
                    transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.45s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.35s ease',
                    position: 'relative'
                  }}
                >
                  <div>
                    <h3 style={{ 
                      margin: '0 0 12px 0', 
                      fontSize: '18px', 
                      fontFamily: 'var(--font-serif)',
                      color: 'var(--color-deep-blue)', 
                      lineHeight: 1.35,
                      minHeight: '52px'
                    }}>
                      {dir.title}
                    </h3>
                    <p style={{ 
                      margin: '0 0 20px 0', 
                      fontSize: '14px', 
                      color: 'var(--color-text-secondary)', 
                      lineHeight: 1.55,
                      minHeight: '75px'
                    }}>
                      {dir.desc}
                    </p>
                  </div>
                  <div className="card-arrow" style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px', 
                    color: 'var(--color-primary)', 
                    fontSize: '14px', 
                    fontWeight: 600,
                    marginTop: 'auto',
                    paddingTop: '12px',
                    borderTop: '1px solid rgba(23, 50, 77, 0.06)'
                  }}>
                    <span>Подробнее</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}

            {/* ═══ 7-я КАРТОЧКА: НЕ НАШЛИ СВОЮ СИТУАЦИЮ (ВО ВСЮ ШИРИНУ) ═══ */}
            <div style={{ gridColumn: '1 / -1', marginTop: '16px' }}>
              <div 
                className="card service-card hover-lift" 
                style={{ 
                  background: 'linear-gradient(135deg, #0B1C2A 0%, #17375E 100%)', 
                  border: '1px solid rgba(193, 160, 102, 0.3)',
                  borderTop: '4px solid var(--color-gold)',
                  borderRadius: '0',
                  padding: '36px 40px',
                  display: 'flex',
                  flexDirection: 'row',
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
                    Опишите ваш наследственный вопрос в форме. Изучим имеющиеся документы и предложим возможные варианты решения.
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
                      borderRadius: '0'
                    }}
                  >
                    Обсудить ситуацию
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: КУРАТОР НАПРАВЛЕНИЯ (ТИПОВОЙ ШАБЛОН) ═══ */}
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

      {/* ═══ БЛОК 5: ПРИМЕРЫ ИЗ ПРАКТИКИ ═══ */}
      <CasesBlock
        title="Примеры дел из практики"
        showAllLink="/praktika/"
        showAllText="Смотреть все дела"
        showDemoWarning={true}
        cases={cases}
      />

      {/* ═══ БЛОК 6: КАК ПРОХОДИТ РАБОТА (ПО ЦЕНТРУ) ═══ */}
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

      {/* ═══ БЛОК 7: СТОИМОСТЬ УСЛУГ ═══ */}
      <PricingBlock
        title="Стоимость услуг наследственного юриста"
        subtitle="Стоимость зависит от состава имущества, количества наследников, состояния документов, необходимости переговоров, работы с нотариусом и обращения в суд."
        tiers={pricingTiers}
        disclaimer="Стоимость определяется после уточнения задачи и изучения имеющихся документов. Состав услуг, цена и порядок оплаты фиксируются в договоре до начала работы. Оплата вознаграждения исполнителя не зависит от исхода дела и не включает государственные пошлины и иные сопутствующие расходы."
      />

      {/* ═══ БЛОК 8: ЧАСТЫЕ ВОПРОСЫ (FAQ) ═══ */}
      <FAQBlock
        superTitle="Частые вопросы клиентов"
        title={<><span>Ответы на</span> <br /><span>частые вопросы</span></>}
        subtitle="О наследственном праве и процедурах оформления"
        ctaText="Задать свой вопрос"
        ctaLink="#form"
        faqs={faqs}
      />

      {/* ═══ БЛОК 9: ФИНАЛЬНАЯ ФОРМА (СВЯЗАТЬСЯ С НАМИ - ТИПОВОЙ 2-КОЛОНОЧНЫЙ ШАБЛОН) ═══ */}
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
                Все сведения и документы защищены профессиональной тайной. Безопасный способ передачи документов согласуем после первичного контакта.
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
                commentPlaceholder="Опишите вашу ситуацию: состав наследства, наличие завещания, пропущен ли срок..."
                hiddenFields={[
                  { name: 'source_page', value: '/grazhdanam/nasledstvennyj-yurist/' },
                  { name: 'direction', value: 'nasledstvennyj_yurist' },
                  { name: 'selected_specialist', value: 'smolyaninova-marina-valerevna' }
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
