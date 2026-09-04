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
      category: 'Пенсионеры / Ст. 223.2 № 127-ФЗ',
      title: 'Провели пенсионера через процедуру без суда',
      problem: 'У клиента было 480 000 ₽ задолженности по двум кредитам и кредитной карте. Пенсия являлась основным доходом, исполнительный документ был предъявлен менее года назад и оставался исполненным лишь частично. Имущества, на которое можно обратить взыскание, не было.',
      action: 'Проверили исполнительные производства, подтвердили применимое основание, получили необходимые справки, сверили наименования банков и суммы по каждому обязательству, подготовили заявление и список кредиторов.',
      result: 'Сведения о процедуре были включены в ЕФРСБ. Через шесть месяцев внесудебное банкротство завершилось, а требования указанных в заявлении кредиторов были прекращены в предусмотренном законом объёме.'
    },
    {
      category: 'Получатели детских пособий',
      title: 'Подготовили заявление для получателя пособия на ребёнка',
      problem: 'У матери двоих детей накопилось 315 000 ₽ по микрозаймам и кредитной карте. Она получала ежемесячное пособие в связи с рождением и воспитанием ребёнка. Исполнительный документ был предъявлен менее года назад, взыскание полностью не произведено, имущества для обращения взыскания не имелось.',
      action: 'Подтвердили статус и сроки исполнительного документа, собрали актуальные справки, восстановили цепочку уступки двух займов коллекторам и указали действующих кредиторов, а не первоначальные МФО.',
      result: 'МФЦ принял заявление, процедура прошла без возврата. После шести месяцев клиент был освобождён от указанных обязательств в установленном законом порядке.'
    },
    {
      category: 'Длительное неисполнение (>7 лет)',
      title: 'Использовали основание по длительному неисполнению документа',
      problem: 'Долг клиента составлял 870 000 ₽. Исполнительный документ был предъявлен более семи лет назад и оставался исполненным только в небольшой части. Клиент считал, что старое производство автоматически закрывает вопрос, но в базе были разные номера производств и сменившийся взыскатель.',
      action: 'Сопоставили судебный акт, исполнительный документ и историю производств, проверили дату предъявления и остаток долга, установили правопреемника кредитора и подготовили точный список обязательств.',
      result: 'Заявление подали по корректному основанию статьи 223.2. Процедура была возбуждена и по истечении шести месяцев завершилась освобождением от требований, включённых в заявление.'
    }
  ];

  const faqs = [
    {
      q: 'Достаточно ли долга от 25 000 до 1 000 000 ₽?',
      a: 'Нет. Кроме подходящего общего размера обязательств необходимо одно из четырёх оснований, предусмотренных статьёй 223.2 Закона № 127-ФЗ (оконченное ИП по п. 4 ч. 1 ст. 46, пенсия/СВО, единое пособие на ребёнка или неисполнение документа старше 7 лет).'
    },
    {
      q: 'МФЦ сам проверит и добавит всех кредиторов?',
      a: 'Нет. Гражданин сам подаёт список кредиторов. Требования неуказанного кредитора не прекращаются, а заниженная сумма освобождается только в заявленном размере.'
    },
    {
      q: 'Сколько длится внесудебное банкротство?',
      a: 'Шесть месяцев со дня включения сведений о возбуждении процедуры в ЕФРСБ, если процедура не будет прекращена раньше.'
    },
    {
      q: 'Нужно ли платить госпошлину и финансовому управляющему?',
      a: 'Нет. Внесудебная процедура проводится бесплатно и без финансового управляющего. Платной может быть отдельно заказанная помощь юриста по проверке и подготовке документов.'
    },
    {
      q: 'Можно ли подать заявление онлайн?',
      a: 'Закон предусматривает подачу в МФЦ по месту жительства или пребывания. Актуальный доступный способ обращения и порядок конкретного МФЦ нужно проверить перед подачей.'
    },
    {
      q: 'Что делать, если МФЦ вернул заявление?',
      a: 'Установить причину возврата и исправить комплект документов. Повторно обратиться можно не ранее чем через один месяц со дня возврата или размещения соответствующего сообщения.'
    },
    {
      q: 'Что будет, если во время процедуры получить наследство?',
      a: 'Если имущество или другое существенное изменение позволяет полностью либо значительно погасить долги, нужно уведомить МФЦ в течение пяти рабочих дней; процедура прекращается.'
    },
    {
      q: 'Все ли долги прекратятся?',
      a: 'Нет. Сохраняются требования неуказанных кредиторов и обязательства, на которые закон не распространяет освобождение (алименты, вред здоровью, текущие платежи).'
    },
    {
      q: 'Можно ли выбрать МФЦ вместо суда при долге больше 1 млн ₽?',
      a: 'Нет, если общий размер учитываемых обязательств превышает установленный законом лимит в 1 000 000 ₽. В этом случае проводится судебная процедура в Арбитражном суде.'
    },
    {
      q: 'Нужен ли юрист?',
      a: 'По закону обращение к юристу необязательно. Помощь юриста необходима для проверки права на процедуру, аудита баз ФССП, формирования точного списка кредиторов и предотвращения рисков возврата или судебных исков банков.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Предварительная консультация',
      subtitle: 'Первичная оценка права на внесудебное банкротство',
      features: [
        { name: 'Проверка оснований по ст. 223.2 № 127-ФЗ', value: '✓' },
        { name: 'Аудит баз ФССП и открытых производств', value: '✓' },
        { name: 'Оценка общего размера денежных обязательств', value: '✓' },
        { name: 'Разъяснение рисков и выбор маршрута', value: '✓' }
      ],
      buttonText: 'Уточнить стоимость',
      buttonHref: '#form'
    },
    {
      title: 'Проверка условий и документов',
      subtitle: 'Комплексный правовой аудит ситуации',
      popular: true,
      badgeText: 'Популярно',
      features: [
        { name: 'Детальный анализ исполнительных документов', value: '✓' },
        { name: 'Проверка справок СФР о доходах и пособиях', value: '✓' },
        { name: 'Оценка рисков для имущества и сделок', value: '✓' },
        { name: 'Письменные рекомендации юриста по банкротству', value: '✓' }
      ],
      buttonText: 'Уточнить стоимость',
      buttonHref: '#form'
    },
    {
      title: 'Подготовка заявления и реестра',
      subtitle: 'Формирование комплекта для подачи в МФЦ',
      features: [
        { name: 'Сбор необходимых справок из ведомств', value: '✓' },
        { name: 'Составление списка кредиторов по форме Минэка', value: '✓' },
        { name: 'Заполнение заявления о внесудебном банкротстве', value: '✓' },
        { name: 'Инструкция и сопровождение подачи в МФЦ', value: '✓' }
      ],
      buttonText: 'Уточнить стоимость',
      buttonHref: '#form'
    }
  ];

  const steps: ProcessStep[] = [
    {
      num: '01',
      title: 'Первичная оценка ситуации',
      desc: 'Уточняем сумму и состав долгов, статус дохода, исполнительные производства, имущество и прошлые процедуры.'
    },
    {
      num: '02',
      title: 'Проверка законного основания',
      desc: 'Определяем применимый подпункт статьи 223.2 и выявляем препятствия до обращения в МФЦ.'
    },
    {
      num: '03',
      title: 'Сбор сведений и справок',
      desc: 'Формируем полный список кредиторов и документов; объясняем, какие справки нужны по конкретному основанию.'
    },
    {
      num: '04',
      title: 'Подготовка заявления и списка',
      desc: 'Заполняем заявление и приложения по актуальной форме, проверяем суммы и реквизиты кредиторов.'
    },
    {
      num: '05',
      title: 'Подача заявления в МФЦ',
      desc: 'Клиент подаёт документы в МФЦ по месту жительства или пребывания; формат участия юриста согласовывается отдельно.'
    },
    {
      num: '06',
      title: 'Контроль публикации в ЕФРСБ',
      desc: 'Проверяем сведения о возбуждении процедуры в ЕФРСБ либо оперативно устраняем основание возврата заявления.'
    },
    {
      num: '07',
      title: 'Шесть месяцев моратория и финал',
      desc: 'Объясняем ограничения, отслеживаем обстоятельства и контролируем дату завершения процедуры и списания долгов.'
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
        'description': 'Проверим условия внесудебного банкротства через МФЦ, исполнительные производства и список кредиторов. Поможем подготовить заявление без лишних рисков.'
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
            <Link href="/grazhdanam/bankrotstvo-fizicheskih-lic/">Банкротство физических лиц</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Через МФЦ</span>
          </>
        }
        superTitle="Банкротство без суда • предварительная проверка условий"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Внесудебное банкротство
            </span>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              через МФЦ в Липецке
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
                Проверим, соответствует ли Ваша ситуация условиям бесплатной процедуры,
              </span>
              <span className="hero-sub-span-desktop" style={{ display: 'block' }}>
                восстановим список кредиторов и объясним риски до подачи заявления.
              </span>
            </span>
          </>
        }
        primaryCtaText="Проверить условия банкротства через МФЦ"
        primaryCtaLink="#form"
        primaryCtaAnalytics="cta_click"
        primaryCtaSubtext={
          <>
            <span style={{ display: 'inline-block' }}>Окончательный вывод возможен после проверки исполнительных производств,</span> <br className="hidden-mobile" />
            <span style={{ display: 'inline-block' }}>доходов, имущества и состава обязательств: <a href="tel:+79103503111" data-analytics="phone_click">+7 (910) 350-31-11</a></span>
          </>
        }
        trustItems={[
          { text: 'Сумма обязательств — от 25 000 до 1 000 000 ₽' },
          { text: 'Процедура в МФЦ длится шесть месяцев и не требует финансового управляющего' },
          { text: 'Одной подходящей суммы долга недостаточно: нужно одно из четырёх законных оснований' }
        ]}
        imageUrl="/images/nacheshnikov.jpg"
        imageName="Владимир Викторович Начешников"
        imageSubtitle="Специалист ЮК «Де-Юре»"
        imageObjectPosition="center 15%"
      />

      {/* ═══ БЛОК 2: КОМУ МОЖЕТ ПОДОЙТИ ВНЕСУДЕБНОЕ БАНКРОТСТВО (4 ОСНОВАНИЯ) ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                Кому может подойти
              </span>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                внесудебное банкротство
              </span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Подать заявление через МФЦ можно при общей сумме учитываемых законом обязательств от 25 000 до 1 000 000 ₽ и наличии хотя бы одного из оснований ниже. Проверять нужно не только размер просрочки, а все денежные обязательства и обязательные платежи, которые закон включает в расчёт.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '28px', marginBottom: '32px' }}>
            {[
              {
                tag: 'Основание 1',
                title: 'Оконченное исполнительное производство',
                desc: 'На дату подачи производство окончено из-за отсутствия имущества для взыскания по пункту 4 части 1 статьи 46 Закона № 229-ФЗ; после возврата документа нет иных новых незавершённых производств по взысканию денег.'
              },
              {
                tag: 'Основание 2',
                title: 'Пенсия либо участие в СВО',
                desc: 'Пенсия является основным доходом либо гражданин участвует/участвовал в СВО; исполнительный документ предъявлялся не позднее года назад, требования не исполнены полностью; отсутствует имущество для взыскания с учётом специальных правил.'
              },
              {
                tag: 'Основание 3',
                title: 'Ежемесячное пособие на ребёнка',
                desc: 'Гражданин получает установленное законом ежемесячное пособие; исполнительный документ предъявлялся не позднее года назад и не исполнен полностью; отсутствует имущество для взыскания.'
              },
              {
                tag: 'Основание 4',
                title: 'Исполнительный документ старше семи лет',
                desc: 'Исполнительный документ имущественного характера предъявлялся к исполнению не позднее семи лет назад, а требования по нему не исполнены либо исполнены частично.'
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
              <strong>Предварительная оценка:</strong> Интерфейс помогает определить предварительное основание, однако окончательный вывод о праве на списание через МФЦ делается после юридической проверки документов и исполнительных производств.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: КАКИЕ ОБЯЗАТЕЛЬСТВА ВХОДЯТ В ДИАПАЗОН 25 000–1 000 000 ₽ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                Какие обязательства входят
              </span>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                в диапазон 25 000–1 000 000 ₽
              </span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Для проверки лимита учитываются не только просроченные кредиты. Закон охватывает денежные обязательства и обязательные платежи, включая обязательства, срок исполнения которых ещё не наступил, алименты и поручительство независимо от просрочки основного должника. При этом освобождение по итогам процедуры имеет собственные исключения.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '24px', marginBottom: '32px' }}>
            <div style={{
              background: 'var(--color-white)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-primary)',
              padding: '32px 28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <h3 style={{ fontSize: '19px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0 }}>
                Включаются в расчёт лимита долга:
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'Кредиты, кредитные карты и займы в микрофинансовых организациях (МФО)',
                  'Долги по договорам, распискам и вступившим в силу судебным актам',
                  'Налоги, сборы, штрафы и иные обязательные платежи в бюджет',
                  'Обязательства по поручительству и иные учитываемые законом денежные требования'
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <polyline points="9 11 12 14 22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                    <span style={{ fontSize: '14.5px', color: 'var(--color-deep-blue)', lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{
              background: 'var(--color-white)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-gold)',
              padding: '32px 28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <h3 style={{ fontSize: '19px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0 }}>
                Исключения из освобождения:
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'Требования по алиментам и содержанию несовершеннолетних детей',
                  'Возмещение вреда, причинённого жизни или здоровью граждан',
                  'Компенсация морального вреда и требования о выплате заработной платы',
                  'Обязательства, возникшие вследствие недобросовестного поведения или сокрытия сведений'
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    <span style={{ fontSize: '14.5px', color: 'var(--color-deep-blue)', lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: ЧТО ПРОВЕРИТ ЮРИСТ ДО ПОДАЧИ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Что проверит юрист</span> <br />
              <span style={{ display: 'inline-block' }}>до подачи заявления</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Тщательная юридическая диагностика гарантирует отсутствие рисков возврата документов сотрудниками МФЦ и перехода дела в Арбитражный суд.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '32px' }}>
            {[
              { title: 'Основание для МФЦ', desc: 'Определено конкретное основание из статьи 223.2, а не только подходящая сумма долга.' },
              { title: 'Исполнительные производства', desc: 'Проверены даты, основания окончания, новые производства и содержание исполнительных документов.' },
              { title: 'Доход и статус', desc: 'Для пенсионеров, участников СВО и получателей пособия определён комплект актуальных справок.' },
              { title: 'Имущество и изменения', desc: 'Оценены зарегистрированное имущество, имущественные права, наследство, подарки и иные обстоятельства.' },
              { title: 'Кредиторы и суммы', desc: 'Сформирован полный список кредиторов с корректными наименованиями и максимально точными суммами.' },
              { title: 'Исключения и маршрут', desc: 'Обозначены исключения; если условия МФЦ не соблюдаются — предложен судебный маршрут.' }
            ].map((item, idx) => (
              <div key={idx} className="hover-lift" style={{
                padding: '30px 24px',
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-primary)',
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

      {/* ═══ БЛОК 5: ДОКУМЕНТЫ ДЛЯ ПРЕДВАРИТЕЛЬНОГО АНАЛИЗА ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Документы для</span> <br />
              <span style={{ display: 'inline-block' }}>предварительного анализа</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Базовые сведения и документы, необходимые для проверки ситуации и подготовки заявления в МФЦ.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '32px' }}>
            {[
              { title: 'Личность', desc: 'Паспорт, СНИЛС, ИНН; место жительства или пребывания для выбора МФЦ.' },
              { title: 'Долги', desc: 'Договоры, справки, выписки, расписки, судебные акты, перечень кредиторов и ориентировочные суммы.' },
              { title: 'Приставы', desc: 'Постановления о возбуждении и окончании производств, сведения о возврате исполнительных документов, данные ФССП.' },
              { title: 'Доход и статус', desc: 'Сведения о пенсии, участии в СВО, ежемесячном пособии и иных доходах; применимые справки по актуальной форме.' },
              { title: 'Имущество', desc: 'Недвижимость, транспорт, доли, счета и иные права; сведения о наследстве, дарах и ожидаемых изменениях.' },
              { title: 'Предыдущие процедуры', desc: 'Даты завершения или прекращения прошлых процедур банкротства и возвратов заявлений.' }
            ].map((item, idx) => (
              <div key={idx} style={{
                background: 'var(--color-white)',
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
            <strong>Предупреждение по безопасности:</strong> Не отправляйте паспорт, банковские выписки и финансовые документы через обычную форму на сайте. После первичного звонка юрист сообщит защищённый способ передачи.
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 6: СПИСОК КРЕДИТОРОВ: КЛЮЧЕВОЙ РИСК ПРОЦЕДУРЫ ═══ */}
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
            <div style={{ maxWidth: '820px', marginBottom: '28px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
                Ключевой риск процедуры
              </div>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontFamily: 'var(--font-serif)', color: '#FFFFFF', margin: '0 0 16px 0', lineHeight: 1.25 }}>
                МФЦ не дополнит заявление за Вас
              </h2>
              <p style={{ fontSize: '15.5px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, margin: 0 }}>
                Освобождение распространяется только на требования кредиторов, указанных в заявлении, и в пределах корректно заявленной суммы. Долг перед неуказанным кредитором не прекращается. Если сумма указана ниже фактической, освобождение действует только в указанном размере. Поэтому перед подачей нужно восстановить полный состав обязательств, официальные наименования кредиторов и суммы требований.
              </p>
            </div>

            <div className="grid grid-2" style={{ gap: '20px' }}>
              {[
                { title: 'Не подставлять названия из памяти', desc: 'Нужно указывать точные юридические наименования, ИНН и ОГРН каждого банка и микрофинансовой организации.' },
                { title: 'Проверить правопреемников и коллекторов', desc: 'Учесть переуступленные договоры (цессии), чтобы долг не остался за коллекторским агентством.' },
                { title: 'Сверить судебные приказы и налоги', desc: 'Включить в реестр долги перед налоговой инспекцией, фондами, расписки и коммунальные службы.' },
                { title: 'Сведения не подтягиваются автоматически', desc: 'МФЦ лишь принимает готовый перечень и не несет ответственности за пропущенные вами обязательства.' }
              ].map((item, idx) => (
                <div key={idx} style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.12)', padding: '20px 22px' }}>
                  <h3 style={{ fontSize: '16px', color: 'var(--color-gold)', margin: '0 0 6px 0', fontWeight: 600 }}>
                    {item.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.78)', lineHeight: 1.5 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 7: КАК ПРОХОДИТ РАБОТА И САМА ПРОЦЕДУРА ═══ */}
      <ProcessBlock
        title="Как проходит работа"
        subtitle="Последовательный алгоритм действий от первого звонка до полного завершения процедуры"
        steps={steps}
        ctaTitle="Что происходит после включения сведений в ЕФРСБ"
        ctaSubtitle="В отношении указанных требований вводится мораторий: прекращается начисление процентов и штрафов, приостанавливается исполнение приставами, а по истечении 6 месяцев долги списываются."
        ctaButtonText="Проверить условия списания"
        ctaButtonHref="#form"
      />

      {/* ═══ БЛОК 8: РИСКИ ВОЗВРАТА И ПРЕКРАЩЕНИЯ ПРОЦЕДУРЫ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Возврат и прекращение</span> <br />
              <span style={{ display: 'inline-block' }}>внесудебной процедуры</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Разбираем юридические основания возврата заявления и ситуации, при которых процедура может быть прекращена.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '24px', marginBottom: '32px' }}>
            {[
              {
                title: 'Заявление возвращено МФЦ',
                desc: 'Причину нужно разобрать по документам. После возврата повторное обращение возможно не ранее чем через один месяц; действия и недостоверные межведомственные сведения могут быть обжалованы в установленном порядке.'
              },
              {
                title: 'Появилось имущество или доход',
                desc: 'Если имущественное положение существенно улучшилось (наследство, дар), гражданин обязан уведомить МФЦ в течение 5 рабочих дней; процедура прекращается.'
              },
              {
                title: 'Обнаружен неуказанный кредитор',
                desc: 'Его требование не попадает под мораторий и не прекращается по итогам внесудебной процедуры; кредитор может инициировать судебный процесс в арбитражном суде.'
              },
              {
                title: 'Спорная сделка за 3 года',
                desc: 'Кредитор вправе оспорить подозрительные сделки по дарению или продаже имущества родственникам через обращение в арбитражный суд.'
              }
            ].map((item, idx) => (
              <div key={idx} style={{
                background: 'var(--color-white)',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-primary)',
                padding: '30px 26px',
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)'
              }}>
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0', fontWeight: 600 }}>
                  {item.title}
                </h3>
                <p style={{ margin: 0, fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#form" className="btn btn-primary" style={{ padding: '14px 32px' }}>
              Разобрать риски с юристом
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 9: КУРАТОР НАПРАВЛЕНИЯ ═══ */}
      <SpecialistBlock
        title="Куратор направления — Владимир Начешников"
        name="Владимир Викторович Начешников"
        position="Специалист ЮК «Де-Юре»"
        imageUrl="/images/nacheshnikov.jpg"
        imagePosition="center 15%"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Владимир Викторович оценивает основания для внесудебного банкротства, проверяет исполнительные производства и состав обязательств, помогает выбрать между процедурой через МФЦ и судебным маршрутом.
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
                Специализируется на правовой проверке документов, формировании реестра кредиторов и предотвращении рисков при списании задолженностей.
              </span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>
                Сопровождает клиентов в Липецке и Липецкой области, а также проводит предварительный анализ ситуации дистанционно.
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

      {/* ═══ БЛОК 10: ПРИМЕРЫ ИЗ ПРАКТИКИ (3 КЕЙСА ИЗ ТЗ) ═══ */}
      <CasesBlock
        title="Примеры дел из практики"
        showAllLink="/praktika/"
        showAllText="Смотреть всю практику"
        showDemoWarning={true}
        cases={cases}
      />

      {/* ═══ БЛОК 11: СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Процедура в МФЦ бесплатна. Работа юриста оплачивается отдельно"
        subtitle="МФЦ и оператор ЕФРСБ не взимают плату за проведение внесудебного банкротства. Обращение к юристу не является обязательным условием. Стоимость работы «Де-Юре» зависит от количества кредиторов, состояния исполнительных производств и необходимости восстанавливать документы."
        tiers={pricingTiers}
        disclaimer={
          <>
            <span style={{ display: 'inline-block' }}>Подача и процедура в МФЦ — бесплатно по закону (без госпошлины, финансового управляющего и платы за публикации).</span> <br className="hidden-mobile" />
            <span style={{ display: 'inline-block' }}>Стоимость юридических услуг компании согласовывается после изучения документов и фиксируется в договоре.</span>
          </>
        }
      />

      {/* ═══ БЛОК 12: ПОСЛЕДСТВИЯ ПРОЦЕДУРЫ ПОСЛЕ ЗАВЕРШЕНИЯ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Последствия банкротства</span> <br />
              <span style={{ display: 'inline-block' }}>после завершения процедуры</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Законные последствия и ограничения после признания гражданина банкротом во внесудебном порядке:
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '32px' }}>
            {[
              { title: 'Освобождение от обязательств', desc: 'Освобождение касается требований кредиторов, указанных в заявлении, с учётом заявленных сумм и установленных законом исключений.' },
              { title: 'Кредиты и займы 5 лет', desc: 'В течение пяти лет при обращении за кредитом или займом в банки и МФО необходимо сообщать о факте внесудебного банкротства.' },
              { title: 'Повторное банкротство 5 лет', desc: 'В течение пяти лет нельзя повторно инициировать собственное внесудебное банкротство через МФЦ.' },
              { title: 'Управление организациями 3 года', desc: 'В течение трёх лет нельзя участвовать в управлении юридическим лицом (для банков и страховых действуют более длительные сроки).' },
              { title: 'Доход и работа без запретов', desc: 'Статус банкрота не запрещает официально работать, получать заработную плату или пенсию после завершения процедуры.' },
              { title: 'Публичность сведений', desc: 'Сведения о процедуре публикуются в ЕФРСБ. Закон не предусматривает закрытых или секретных процедур банкротства.' }
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
        subtitle="Разъяснения специалиста ЮК «Де-Юре» Владимира Начешникова по банкротству через МФЦ"
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
            <Link href="/grazhdanam/bankrotstvo-fizicheskih-lic/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
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
                    <span style={{ display: 'inline-block' }}>Судебное банкротство</span> <br /><span style={{ display: 'inline-block' }}>физических лиц</span>
                  </h3>
                  <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    Если условия МФЦ не соблюдаются, оценить процедуру через арбитражный суд.
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
                    Проверить производства, удержания, аресты и действия пристава.
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
            <Link href="/grazhdanam/bankrotstvo-fizicheskih-lic/" className="all-services-link" style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '16px', textDecoration: 'underline', textUnderlineOffset: '4px', display: 'inline-flex', alignItems: 'center', gap: '6px', transition: 'color 0.2s ease' }}>
              Смотреть все услуги по банкротству граждан →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 15: ЛОКАЛЬНЫЙ БЛОК И ОФИС ═══ */}
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
                Проверить условия банкротства через МФЦ в Липецке
              </h2>
              <p style={{ fontSize: '15.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                Можно встретиться в офисе «Де-Юре» или начать с дистанционного анализа. Перед визитом согласуйте время и подготовьте сведения о долгах и исполнительных производствах.
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
                Проверьте право на внесудебное банкротство до подачи в МФЦ
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Кратко укажите сумму долга, статус исполнительных производств и основной источник дохода. Юрист определит, какие сведения нужны для предварительной оценки.
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
                title="Проверить право на процедуру"
                subtitle="Оставьте имя и номер телефона. Юрист перезвонит в течение 15 минут в рабочее время."
                buttonText="Отправить на проверку"
                commentPlaceholder="Сумма долга, есть ли закрытые производства у приставов, пенсионер или получатель детского пособия..."
                hiddenFields={[
                  { name: 'service', value: 'Внесудебное банкротство через МФЦ в Липецке | ЮК «Де-Юре»' },
                  { name: 'category', value: 'bankrotstvo-fizicheskih-lic/cherez-mfc' },
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
