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

export default function VnesudebnoeBankrotstvoMfcClient() {
  const cases: CaseData[] = [
    {
      category: 'Пенсионеры / МФЦ',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Провели пенсионера</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>через банкротство в МФЦ</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>без судебных расходов</span>
        </>
      ),
      problem: 'Задолженность составляла 480 000 ₽ по двум кредитам и кредитной карте. Пенсия — основной доход, исполнительный документ предъявлялся менее года назад и не исполнен полностью.',
      action: 'Проверили исполнительные производства, подтвердили пенсионное основание ст. 223.2, собрали справки, выверили список кредиторов и помогли подать заявление в МФЦ.',
      result: 'Сведения включены в ЕФРСБ без возврата. Через 6 месяцев процедура завершена с полным освобождением от указанных долгов.'
    },
    {
      category: 'Пособие на ребёнка / МФО',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Списали 315 000 ₽</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>по микрозаймам для</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>получателя детского пособия</span>
        </>
      ),
      problem: 'У матери двоих детей накопилось 315 000 ₽ по микрозаймам и картам. Клиентка получала единое пособие на детей, имущества для взыскания не имелось.',
      action: 'Подтвердили статус и срок исполнительного документа, восстановили цепочку уступки долгов коллекторам, указали действующих кредиторов и заполнили заявление.',
      result: 'МФЦ принял документы с первого раза. По истечении 6 месяцев долги перед всеми включёнными кредиторами были списаны.'
    },
    {
      category: 'Длительное взыскание / 7 лет',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Применили основание</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>длительного неисполнения</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и списали 870 000 ₽</span>
        </>
      ),
      problem: 'Долг 870 000 ₽ тянулся более 7 лет. Производства периодически возобновлялись, сменился взыскатель, и клиент не мог самостоятельно составить список.',
      action: 'Сопоставили судебный акт, исполнительный документ и историю производств, установили правопреемника банка и сформировали точный реестр обязательств.',
      result: 'Заявление зарегистрировано в МФЦ по основанию 7-летнего взыскания. Через 6 месяцев процедура успешно завершилась.'
    }
  ];

  const faqs = [
    {
      q: 'Достаточно ли долга от 25 000 до 1 000 000 ₽ для обращения в МФЦ?',
      a: 'Нет. Одной подходящей суммы долга недостаточно. Гражданин обязан подтвердить одно из четырёх законных оснований, установленных статьёй 223.2 Федерального закона № 127-ФЗ (оконченное производство по п. 4 ч. 1 ст. 46, пенсия/СВО, детское пособие или 7 лет взыскания).'
    },
    {
      q: 'МФЦ сам найдёт и добавит всех кредиторов?',
      a: 'Нет. МФЦ лишь принимает заявление. Гражданин самостоятельно несёт ответственность за полноту списка. Долги перед кредиторами, не включёнными в заявление, не прекращаются и останутся за должником.'
    },
    {
      q: 'Сколько длится процедура через МФЦ?',
      a: 'Ровно шесть месяцев со дня включения сведений о возбуждении процедуры в ЕФРСБ, если в течение этого срока кредиторы не инициируют судебное банкротство.'
    },
    {
      q: 'Нужно ли платить госпошлину или финансовому управляющему?',
      a: 'Нет. Государственная процедура в МФЦ полностью бесплатна, госпошлина не взимается, финансовый управляющий не привлекается.'
    },
    {
      q: 'Что делать, если МФЦ вернул заявление?',
      a: 'Необходимо разобрать причины возврата (ошибки в справках, новые открытые производства в ФССП) и устранить их. Повторно подать заявление в МФЦ можно не ранее чем через один месяц.'
    },
    {
      q: 'Что будет, если во время процедуры получить наследство или доход?',
      a: 'Если в течение 6 месяцев имущественное положение существенно улучшилось (получено наследство, подарок, высокооплачиваемая работа), гражданин обязан уведомить МФЦ в течение 5 рабочих дней, после чего процедура прекращается.'
    },
    {
      q: 'Все ли долги списываются через МФЦ?',
      a: 'Прекращаются только обязательства перед кредиторами, указанными в заявлении, и в пределах заявленных сумм. Алименты, возмещение вреда жизни/здоровью и задолженность по неуказанным займам сохраняются.'
    },
    {
      q: 'Можно ли обратиться в МФЦ при долге свыше 1 000 000 ₽?',
      a: 'Нет. Если общая сумма обязательств превышает 1 000 000 ₽, внесудебный маршрут не применим — необходимо оформлять судебное банкротство.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Процедура в МФЦ',
      subtitle: 'Государственная услуга в МФЦ по закону № 127-ФЗ',
      price: '0 ₽ (Бесплатно)',
      features: [
        { name: 'Госпошлина за процедуру', value: '0 ₽' },
        { name: 'Вознаграждение управляющего', value: 'Не требуется' },
        { name: 'Публикация в реестре ЕФРСБ', value: 'Бесплатно' },
        { name: 'Срок проведения процедуры', value: '6 месяцев' }
      ],
      buttonText: 'Подать самостоятельно',
      buttonHref: '#form'
    },
    {
      title: 'Проверка оснований и рисков',
      subtitle: 'Аудит исполнительных производств, справок и права на процедуру в МФЦ',
      popular: true,
      badgeText: 'Рекомендуем',
      features: [
        { name: 'Проверка по ст. 223.2 № 127-ФЗ', value: '[уточняется]' },
        { name: 'Анализ банка данных ФССП', value: '[уточняется]' },
        { name: 'Проверка актуальности справок', value: '[уточняется]' },
        { name: 'Оценка риска возврата МФЦ', value: '[уточняется]' }
      ],
      buttonText: 'Заказать аудит',
      buttonHref: '#form'
    },
    {
      title: 'Подготовка заявления «под ключ»',
      subtitle: 'Формирование безошибочного реестра кредиторов и полного пакета документов',
      features: [
        { name: 'Восстановление цепочек цессий', value: '[уточняется]' },
        { name: 'Точный расчёт сумм обязательств', value: '[уточняется]' },
        { name: 'Заполнение утверждённой формы заявления', value: '[уточняется]' },
        { name: 'Сопровождение до публикации в ЕФРСБ', value: '[уточняется]' }
      ],
      buttonText: 'Подготовить документы',
      buttonHref: '#form'
    }
  ];

  const steps: ProcessStep[] = [
    {
      num: '01',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Проверяем право</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>на банкротство в МФЦ</span>
        </>
      ),
      desc: 'Сопоставляем сумму обязательств с лимитом 25к–1М ₽ и подтверждаем наличие одного из 4 законных оснований статьи 223.2.'
    },
    {
      num: '02',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Формируем список</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>кредиторов и справки</span>
        </>
      ),
      desc: 'Восстанавливаем полные реквизиты банков, МФО, коллекторов и точные суммы долгов, собираем необходимые справки по доходам и ФССП.'
    },
    {
      num: '03',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Заполняем заявление</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>по форме закона</span>
        </>
      ),
      desc: 'Оформляем заявление и приложения строго по актуальным регламентам, исключая основания для возврата документов специалистами МФЦ.'
    },
    {
      num: '04',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Подача в МФЦ</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и контроль публикации</span>
        </>
      ),
      desc: 'Клиент подаёт готовый пакет в МФЦ по месту жительства. Мы контролируем внесение сведений о возбуждении процедуры в ЕФРСБ.'
    },
    {
      num: '05',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Завершение процедуры</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и списание долгов</span>
        </>
      ),
      desc: 'Через 6 месяцев процедура завершается, а в ЕФРСБ публикуется запись об освобождении гражданина от указанных обязательств.'
    },
    {
      isBanner: true,
      title: 'Дистанционный формат',
      desc: 'Предварительный аудит производств приставов, проверка справок и составление заявления проводятся дистанционно.'
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
        '@id': 'https://dejure-help.ru/grazhdanam/bankrotstvo-fizicheskih-lic/cherez-mfc/#breadcrumbs',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Главная', 'item': 'https://dejure-help.ru/' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Гражданам', 'item': 'https://dejure-help.ru/grazhdanam/' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Банкротство физических лиц', 'item': 'https://dejure-help.ru/grazhdanam/bankrotstvo-fizicheskih-lic/' },
          { '@type': 'ListItem', 'position': 4, 'name': 'Через МФЦ', 'item': 'https://dejure-help.ru/grazhdanam/bankrotstvo-fizicheskih-lic/cherez-mfc/' }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/grazhdanam/bankrotstvo-fizicheskih-lic/cherez-mfc/#service',
        'url': 'https://dejure-help.ru/grazhdanam/bankrotstvo-fizicheskih-lic/cherez-mfc/',
        'name': 'Внесудебное банкротство через МФЦ в Липецке',
        'provider': { '@id': 'https://dejure-help.ru/#organization' },
        'areaServed': {
          '@type': 'AdministrativeArea',
          'name': 'Липецк и Липецкая область'
        },
        'description': 'Юридическая помощь при внесудебном банкротстве через МФЦ: проверка условий по ст. 223.2, исполнительных производств и подготовка списка кредиторов.'
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/grazhdanam/bankrotstvo-fizicheskih-lic/cherez-mfc/#faq',
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
        'jobTitle': 'Специалист ЮК «Де-Юре» по банкротству граждан',
        'url': 'https://dejure-help.ru/specialisty/nacheshnikov-vladimir-viktorovich/',
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
            <Link href="/grazhdanam/bankrotstvo-fizicheskih-lic/">Банкротство физических лиц</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Через МФЦ</span>
          </>
        }
        superTitle="Банкротство без суда • предварительная проверка"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Внесудебное банкротство
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              через МФЦ в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Проверим, соответствует ли Ваша ситуация условиям бесплатной процедуры, восстановим полный список кредиторов и объясним риски до подачи заявления.
          </span>
        }
        primaryCtaText="Проверить условия для МФЦ"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_cta_mfc_service"
        primaryCtaSubtext={
          <>Если требуется срочная консультация, позвоните: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (910) 350-31-11</a></>
        }
        trustItems={[
          { text: 'Сумма обязательств — от 25 000 до 1 000 000 ₽' },
          { text: 'Процедура длится 6 месяцев и не требует управляющего' },
          { text: 'Проверяем 4 законных основания ст. 223.2 № 127-ФЗ' },
          { text: 'Куратор — специалист В. В. Начешников' }
        ]}
        imageUrl="/images/nacheshnikov.jpg"
        imageName="Владимир Викторович Начешников"
        imageSubtitle="Специалист ЮК «Де-Юре», куратор направления «Банкротство граждан»"
        imageObjectPosition="center 20%"
      />

      {/* ═══ БЛОК 2: 4 ОСНОВАНИЯ ДЛЯ МФЦ (ТИПОВОЙ ШАБЛОН) ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Кому подходит</span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>банкротство через МФЦ</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Для подачи заявления через МФЦ сумма долга должна быть от 25 000 до 1 000 000 ₽, а также подтверждено хотя бы одно из четырёх законных оснований статьи 223.2 Закона № 127-ФЗ:
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '28px' }}>
            {[
              {
                tag: 'Основание 01',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Оконченное производство</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>из-за отсутствия имущества</span>
                  </>
                ),
                desc: 'Производство окончено приставом по п. 4 ч. 1 ст. 46 Закона № 229-ФЗ, исполнительный документ возвращён взыскателю, и нет иных открытых производств.'
              },
              {
                tag: 'Основание 02',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Пенсионеры или</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>участники СВО</span>
                  </>
                ),
                desc: 'Пенсия является основным доходом (или гражданин участник СВО), исполнительный лист предъявлен от 1 года назад, долг не закрыт, имущества нет.'
              },
              {
                tag: 'Основание 03',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Получатели пособия</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>на детей до 17 лет</span>
                  </>
                ),
                desc: 'Гражданин получает ежемесячное единое пособие на ребёнка, исполнительный лист старше 1 года не исполнен полностью, имущества для взыскания нет.'
              },
              {
                tag: 'Основание 04',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Исполнительный документ</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>старше семи лет</span>
                  </>
                ),
                desc: 'Исполнительный документ имущественного характера предъявлялся к исполнению не позднее 7 лет назад и остаётся неисполненным либо исполнен частично.'
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

      {/* ═══ БЛОК 3: КРИТИЧЕСКИЙ РИСК: СПИСОК КРЕДИТОРОВ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>МФЦ не дополнит</span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>заявление за Вас</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0 }}>
              Освобождение распространяется исключительно на требования кредиторов, указанных в заявлении, и в пределах заявленной суммы. Долг перед неуказанным банком или МФО не прекращается.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px' }}>
            {[
              {
                title: 'Официальные наименования',
                desc: 'Нельзя указывать банки «по памяти» — нужны точные юридические лица, ОГРН, ИНН и юридические адреса.'
              },
              {
                title: 'Коллекторы и цессии',
                desc: 'Если долг был продан, в заявлении должен быть указан действующий кредитор (коллекторское агентство), а не первоначальный банк.'
              },
              {
                title: 'Точные суммы долга',
                desc: 'Если сумма долга занижена, списание произойдёт только в пределах указанной суммы, а остаток долга придётся выплачивать.'
              }
            ].map((card, i) => (
              <div 
                key={i}
                className="card service-card hover-lift"
                style={{
                  padding: '32px 28px',
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  borderTop: '4px solid var(--color-primary)',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)'
                }}
              >
                <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)' }}>
                  {card.title}
                </h3>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: КУРАТОР НАПРАВЛЕНИЯ (ТИПОВОЙ ШАБЛОН) ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name="Владимир Викторович Начешников"
        position={<>Специалист ЮК &#171;Де-Юре&#187;,<br />куратор направления &#171;Банкротство граждан&#187;</>}
        imageUrl="/images/nacheshnikov.jpg"
        imagePosition="center 20%"
        profileHref="/specialisty/nacheshnikov-vladimir-viktorovich/"
        profileText="Подробнее о Владимире Викторовиче Начешникове →"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Практический опыт в сфере юридических и корпоративных процедур — с 1997 года.
          </span>,
          <ul key="2" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Проверяет законные основания по ст. 223.2 Закона № 127-ФЗ и исключает риски возврата заявления</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Восстанавливает полный перечень кредиторов, коллекторов и точные суммы требований</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Помогает выбрать между бесплатной процедурой в МФЦ и судебным банкротством</span>
            </li>
          </ul>
        ]}
        buttonText="Задать вопрос специалисту"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 5: ПРИМЕРЫ ИЗ ПРАКТИКИ ═══ */}
      <CasesBlock
        title="Примеры дел из практики"
        showAllLink="/praktika/"
        cases={cases}
      />

      {/* ═══ БЛОК 6: СТОИМОСТЬ УСЛУГ (ТИПОВОЙ ТАРИФНЫЙ ШАБЛОН) ═══ */}
      <PricingBlock
        title="Стоимость внесудебного банкротства"
        subtitle="Процедура в МФЦ бесплатна по закону. Юридическая проверка и подготовка документов оплачиваются отдельно."
        tiers={pricingTiers}
        ctaTitle="Проверьте условия до обращения в МФЦ"
        ctaSubtitle="Сначала проверим базу ФССП, документы и статус исполнительных производств, чтобы избежать отказа МФЦ и риска сохранения долгов."
        ctaButtonText="Проверить право на процедуру"
        ctaButtonLink="#form"
      />

      {/* ═══ БЛОК 7: ПОРЯДОК РАБОТЫ (ТИПОВОЙ ШАБЛОН) ═══ */}
      <ProcessBlock
        title="Как проходит банкротство через МФЦ"
        subtitle="Прозрачный порядок действий от первичной юридической проверки оснований до внесения итоговой записи в ЕФРСБ."
        steps={steps}
      />

      {/* ═══ БЛОК 8: ЧАСТЫЕ ВОПРОСЫ (ТИПОВОЙ ШАБЛОН) ═══ */}
      <FAQBlock
        superTitle="Частые вопросы клиентов"
        title="Ответы на важные вопросы о банкротстве в МФЦ"
        subtitle="Мы собрали главные вопросы доверителей о бесплатном внесудебном банкротстве. Если вы не нашли ответ — свяжитесь с нами."
        faqs={faqs}
      />

      {/* ═══ БЛОК 9: ОФИС В ЛИПЕЦКЕ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '40px', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
                  Офис в Липецке
                </span>
              </div>
              <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 38px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
                Проверить условия банкротства через МФЦ в Липецке
              </h2>
              <p style={{ fontSize: '15.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                Можно встретиться в офисе «Де-Юре» или начать работу дистанционно. Перед визитом согласуйте время, чтобы специалист подготовился к разбору ситуации.
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

            {/* Карточка-карта */}
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

      {/* ═══ БЛОК 10: ФИНАЛЬНАЯ ФОРМА ═══ */}
      <section id="form" className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <ContactsForm
            title="Проверьте право на внесудебное банкротство до подачи в МФЦ"
            subtitle="Кратко укажите сумму долга, статус исполнительных производств и основной источник дохода. Юрист определит, какие сведения нужны для предварительной оценки."
            buttonText="Проверить условия для МФЦ"
            commentPlaceholder="Сумма долга, есть ли постановления приставов, пенсия или пособие, подавали ли заявление ранее…"
            hiddenFields={[
              { name: 'serviceId', value: 'bankruptcy_mfc' },
              { name: 'pageId', value: 'CIV-06-01' },
              { name: 'curatorId', value: 'nacheshnikov' }
            ]}
            subtext={
              <>
                Перезвоним в течение 15 минут в рабочее время; вне рабочего времени — в ближайший рабочий день.
                <span style={{ display: 'block', marginTop: '6px', fontSize: '12.5px', color: 'var(--color-text-secondary)' }}>
                  Не указывайте паспортные данные, номера счетов и иные конфиденциальные сведения. Их можно передать после установления защищённого способа связи.
                </span>
              </>
            }
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
