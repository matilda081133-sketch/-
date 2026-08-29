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
import ProcessBlock from '@/components/ProcessBlock';

export default function MigracionnyjClient() {
  const cases: CaseData[] = [
    {
      category: 'Запрет на въезд / Семья в РФ',
      title: 'Отмена запрета на въезд при наличии семьи и близких родственников в России',
      problem: 'Иностранному гражданину ограничили въезд в РФ из-за двух незначительных административных штрафов. В Липецке у него проживали супруга — гражданка РФ и несовершеннолетний ребёнок.',
      action: 'Собрали доказательства семейных связей, постоянного совместного проживания, отсутствия общественной опасности и отсутствия иных правонарушений. Подготовили и направили административное исковое заявление в суд.',
      result: 'Решение о неразрешении въезда признано незаконным и отменено, сведения исключены из базы пограничной службы, доверитель вернулся к семье.'
    },
    {
      category: 'Судебное обжалование / Выдворение',
      title: 'Отмена административного выдворения в суде апелляционной инстанции',
      problem: 'Районный суд назначил иностранному гражданину штраф с административным выдворением за нарушение режима пребывания. Доверитель был помещён в специальное учреждение (ЦВСИГ).',
      action: 'В 10-дневный срок подали апелляционную жалобу, доказали несоразмерность наказания характеру нарушения, наличие официального источника дохода и устойчивых связей в регионе.',
      result: 'Вышестоящий суд изменил постановление: дополнительное наказание в виде выдворения отменено, доверитель освобождён из ЦВСИГ с сохранением права пребывания.'
    },
    {
      category: 'Защита статуса / Аннулирование ВНЖ',
      title: 'Признание незаконным решения об аннулировании вида на жительство (ВНЖ)',
      problem: 'Орган миграционного контроля аннулировал вид на жительство иностранного гражданина, посчитав, что он отсутствовал в России более 6 месяцев непрерывно.',
      action: 'Истребовали медицинские документы и подтверждения непреодолимых обстоятельств, препятствовавших своевременному возвращению, подготовили иск и доказательную базу.',
      result: 'Суд признал решение об аннулировании ВНЖ незаконным и обязал миграционный орган восстановить статус постоянного проживания.'
    }
  ];

  const faqs = [
    {
      q: 'Можно ли помочь, если иностранный гражданин находится за пределами России?',
      a: 'Да, начать работу можно с дистанционного анализа решения и документов. Возможность подачи обращения представителем, необходимость нотариальной доверенности и личного участия зависят от конкретной процедуры. Адвокат сообщит точный порядок после проверки обстоятельств.'
    },
    {
      q: 'Чем отличаются запрет на въезд, выдворение, депортация и нежелательность пребывания?',
      a: 'Это разные правовые меры: запрет (неразрешение въезда) ограничивает пересечение границы; административное выдворение назначается судом по делу об административном правонарушении (КоАП РФ); депортация — это принудительный выезд по решению МВД при утрате законных оснований для нахождения в РФ; решение о нежелательности пребывания принимается федеральным ведомством (МВД, ФСБ, Минюст, Роспотребнадзор). Каждая процедура требует своего процессуального порядка обжалования.'
    },
    {
      q: 'Какой срок обжалования административного выдворения?',
      a: 'По общему правилу (ст. 30.3 КоАП РФ) жалоба на постановление суда о назначении административного выдворения подаётся в течение 10 суток со дня вручения или получения копии постановления. Срок крайне сжатый, поэтому обращаться к адвокату нужно немедленно.'
    },
    {
      q: 'Можно ли отменить запрет на въезд из-за семьи в России?',
      a: 'Наличие супруга, детей или родителей — граждан РФ является весомым основанием для отмены запрета с учётом права на уважение семейной жизни (ст. 8 Конвенции о защите прав человека, ст. 38 Конституции РФ). Однако отмена не происходит автоматически: необходимо доказать устойчивость семейных связей, факт совместного проживания и соразмерность допущенного нарушения.'
    },
    {
      q: 'Что делать, если сведения появились в реестре контролируемых лиц?',
      a: 'Включение в реестр контролируемых лиц влечёт серьёзные ограничения: блокировку банковских счетов, запрет на управление автомобилем, регистрацию брака, сделки с недвижимостью. Необходимо оперативно установить основание включения, устранить причину либо оспорить незаконное решение МВД в административном или судебном порядке.'
    },
    {
      q: 'Что грозит при аннулировании РВП или ВНЖ?',
      a: 'После аннулирования РВП или ВНЖ иностранный гражданин обязан выехать из РФ в течение 15 дней, либо оспорить решение в установленный законом срок. Подача административного иска с ходатайством о мерах предварительной защиты позволяет приостановить действие решения и законно оставаться в России на период судебного процесса.'
    },
    {
      q: 'Оказывает ли компания помощь в оформлении патента на работу?',
      a: 'Нет. Юридическая компания «Де-Юре» не занимается оформлением и переоформлением патентов на работу. Мы специализируемся на правовой защите: обжаловании запретов, выдворений, депортаций, защите и получении статусов РВП, ВНЖ и гражданства РФ.'
    },
    {
      q: 'Можно ли получить гражданство РФ без оформления вида на жительство (ВНЖ)?',
      a: 'По общему правилу закона № 138-ФЗ «О гражданстве РФ» наличие ВНЖ является обязательным условием. Исключения предусмотрены для отдельных категорий (например, военнослужащие по контракту, участники Государственной программы переселения соотечественников и некоторые другие специальные основания). Точный маршрут определяется на консультации.'
    },
    {
      q: 'Какие документы нужны для первичной оценки ситуации?',
      a: 'Направьте копию паспорта с переводом, миграционную карту, регистрацию, имеющиеся постановления, уведомления МВД, судебные акты или решения об ограничении въезда, а также документы, подтверждающие семейные связи в России (при наличии). Если решение на руках отсутствует, адвокат поможет составить запрос на его получение.'
    },
    {
      q: 'Даёт ли юрист 100% гарантию отмены запрета или выдворения?',
      a: 'Закон об адвокатской деятельности и профессиональная этика запрещают давать гарантии исхода дела, зависящего от решения государственного органа или суда. Мы гарантируем детальный правовой анализ, выявление всех процессуальных нарушений, сбор доказательств и профессиональное представительство ваших интересов.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Консультация и первичная оценка',
      subtitle: 'Разбор обстоятельств, документов, срочности и определение правового маршрута',
      price: 'от 5 000 ₽',
      features: [
        { name: 'Анализ миграционных документов и решений', value: '✓' },
        { name: 'Проверка процессуальных сроков обжалования', value: '✓' },
        { name: 'Оценка оснований и перспектив отмены мер', value: '✓' },
        { name: 'Пошаговый план дальнейших действий', value: '✓' }
      ],
      buttonText: 'Заказать консультацию',
      buttonHref: '#form'
    },
    {
      title: 'Правовой анализ и досудебная работа',
      subtitle: 'Истребование актов, подготовка запросов, жалоб в МВД и ведомства',
      price: 'от 15 000 ₽',
      features: [
        { name: 'Официальные адвокатские запросы в МВД и ведомства', value: '✓' },
        { name: 'Подготовка мотивированных жалоб и обращений', value: '✓' },
        { name: 'Формирование доказательной базы и подтверждений', value: '✓' },
        { name: 'Контроль рассмотрения и регламентных сроков', value: '✓' }
      ],
      buttonText: 'Выбрать формат',
      buttonHref: '#form'
    },
    {
      title: 'Судебная защита и обжалование',
      subtitle: 'Составление иска, ходатайств о защите и ведение процесса в суде',
      price: 'от 35 000 ₽',
      features: [
        { name: 'Подготовка административного иска / апелляционной жалобы', value: '✓' },
        { name: 'Ходатайства о мерах предварительной защиты', value: '✓' },
        { name: 'Личное участие адвоката в судебных заседаниях', value: '✓' },
        { name: 'Сопровождение исполнения судебного решения', value: '✓' }
      ],
      buttonText: 'Обсудить защиту',
      buttonHref: '#form'
    }
  ];

  return (
    <main>
      <Header />

      {/* ═══ БЛОК 1: HERO ═══ */}
      <MilitaryHero
        breadcrumbs={
          <>
            <Link href="/" style={{ color: 'var(--color-primary)' }}>Главная</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/grazhdanam/" style={{ color: 'var(--color-primary)' }}>Гражданам</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Миграционный юрист</span>
          </>
        }
        superTitle="Юридическая помощь иностранным гражданам"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(24px, 3.4vw, 44px)' }}>
              Миграционный юрист
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(24px, 3.4vw, 44px)' }}>
              в Липецке и области
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Помогаем отменить запрет на въезд, обжаловать выдворение или депортацию, защитить статус при отказе или аннулировании РВП и ВНЖ, исключить сведения из реестра контролируемых лиц и законно оформить проживание или гражданство РФ.
          </span>
        }
        primaryCtaText="Обсудить ситуацию"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_primary_cta_migration_hub"
        primaryCtaSubtext={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Если вынесен судебный акт
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              или грозит выдворение, позвоните: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (910) 350-31-11</a>
            </span>
          </span>
        }
        trustItems={[
          { text: 'Работаем в Липецке и дистанционно по всей России' },
          { text: 'Разделяем административный и судебный порядок защиты' },
          { text: 'Сразу оцениваем риски и реальные основания — без пустых обещаний' },
          { text: 'Куратор — адвокат Д. С. Конопкин' },
        ]}
        imageUrl="/images/konopkin.jpg"
        imageName="Дмитрий Сергеевич Конопкин"
        imageSubtitle="Адвокат, председатель Коллегии адвокатов «Де-Юре»"
        imageObjectPosition="center 25%"
      />

      {/* ═══ БЛОК 2: КОГДА ВАЖНО НЕ ОТКЛАДЫВАТЬ ОБРАЩЕНИЕ ═══ */}
      <section style={{ background: 'var(--color-deep-blue)', padding: '64px 0 56px', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-white)', marginBottom: '12px', marginTop: 0 }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Когда важно не</span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>откладывать обращение</span>
          </h2>
          <div style={{ width: '60px', height: '2px', background: 'var(--color-gold)', marginBottom: '20px' }}></div>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', marginBottom: '40px', maxWidth: '850px', lineHeight: 1.6 }}>
            В миграционных делах действуют жёсткие процессуальные сроки: пропуск 10 дней на обжалование постановления суда или 15 дней на выезд после аннулирования документов приводит к принудительной высылке и многолетнему запрету на въезд.
          </p>

          <div className="grid grid-2" style={{ gap: '24px', marginBottom: '32px' }}>
            {/* Карточка 1 */}
            <div 
              className="urgent-card"
              style={{ 
                background: 'linear-gradient(135deg, #FAF7F2 0%, #F3ECDF 100%)', 
                padding: '30px 26px', 
                borderTop: '4px solid var(--color-gold)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B08D57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <div style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-deep-blue)', lineHeight: 1.3 }}>
                  Суд вынес постановление об административном выдворении
                </div>
              </div>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
                Срок подачи жалобы по ст. 30.3 КоАП РФ — всего 10 дней со дня получения копии. Требуется срочно составить жалобу и заявить ходатайство о приостановлении выдворения.
              </p>
            </div>

            {/* Карточка 2 */}
            <div 
              className="urgent-card"
              style={{ 
                background: 'linear-gradient(135deg, #FAF7F2 0%, #F3ECDF 100%)', 
                padding: '30px 26px', 
                borderTop: '4px solid var(--color-gold)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B08D57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <div style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-deep-blue)', lineHeight: 1.3 }}>
                  Узнали о запрете на въезд или нежелательности пребывания
                </div>
              </div>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
                Необходимо официально выяснить ведомство-инициатора, статью закона, срок ограничения и собрать доказательства семейных или медицинских оснований для отмены.
              </p>
            </div>

            {/* Карточка 3 */}
            <div 
              className="urgent-card"
              style={{ 
                background: 'linear-gradient(135deg, #FAF7F2 0%, #F3ECDF 100%)', 
                padding: '30px 26px', 
                borderTop: '4px solid var(--color-gold)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B08D57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <div style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-deep-blue)', lineHeight: 1.3 }}>
                  Получили уведомление об отказе или аннулировании РВП / ВНЖ
                </div>
              </div>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
                Закон отводит 15 дней на выезд. Подача административного иска в суд с обеспечительными мерами позволяет легально приостановить выезд и сохранить право на проживание.
              </p>
            </div>

            {/* Карточка 4 */}
            <div 
              className="urgent-card"
              style={{ 
                background: 'linear-gradient(135deg, #FAF7F2 0%, #F3ECDF 100%)', 
                padding: '30px 26px', 
                borderTop: '4px solid var(--color-gold)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B08D57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <div style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-deep-blue)', lineHeight: 1.3 }}>
                  Сведения появились в реестре контролируемых лиц (режим высылки)
                </div>
              </div>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
                Включение в реестр блокирует банковские счета, сделки с недвижимостью и транспортом, регистрацию брака. Требуется срочно установить причину и устранить запись.
              </p>
            </div>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.08)',
            borderLeft: '4px solid var(--color-gold)',
            padding: '16px 24px',
            marginBottom: '32px',
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '14px',
            lineHeight: 1.6
          }}>
            <strong style={{ color: '#FFFFFF' }}>Юридическая справка:</strong> Согласно ст. 30.3 КоАП РФ и ст. 219 КАС РФ, своевременная подача жалобы или административного иска приостанавливает принудительное исполнение решений и защищает от депортации.
          </div>

          {/* Зона связи */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '28px', display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <a href="tel:+79103503111" style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.02em' }}>
              +7 (910) 350-31-11
            </a>
            <a href="#form" className="btn btn-primary" style={{ padding: '14px 28px', fontSize: '15px', backgroundColor: 'var(--color-gold)', color: 'var(--color-deep-blue)', border: '1px solid var(--color-gold)', fontWeight: 700 }}>
              Срочная консультация
            </a>
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
              Разберём документы и оценим срочность в день обращения
            </span>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: С КАКИМИ СИТУАЦИЯМИ МЫ ПОМОГАЕМ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>С какими ситуациями</span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>мы помогаем гражданам</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Сначала устанавливаем точный вид решения, проверяем основание органа и наличие доказательств. Маршрут зависит от того, требуется ли экстренное обжалование или плановое оформление статуса.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {[
              {
                tag: 'Въезд / Граница',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Не пускают в Россию</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>или поставили запрет въезда</span>
                  </>
                ),
                desc: 'Установим орган и статью закона (114-ФЗ), истребуем акт, оценим гуманитарные и семейные основания для отмены ограничения.'
              },
              {
                tag: 'Суд / Выдворение',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Суд вынес решение</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>об административном выдворении</span>
                  </>
                ),
                desc: 'Подадим жалобу в 10-дневный срок, оспорим виновность и соразмерность наказания, добьёмся освобождения из ЦВСИГ.'
              },
              {
                tag: 'Статус / Аннулирование',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Отказали в РВП или ВНЖ</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>либо аннулировали документ</span>
                  </>
                ),
                desc: 'Проверим обоснованность отказа МВД, подготовим административный иск и защитим право проживать в России.'
              },
              {
                tag: 'Режим высылки',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Внесли в реестр</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>контролируемых лиц</span>
                  </>
                ),
                desc: 'Устраним основания нахождения в реестре контролируемых лиц, снимем ограничения по счетам, транспорту и сделкам.'
              },
              {
                tag: 'Проживание / РВП и ВНЖ',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Оформление РВП</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>или вида на жительство (ВНЖ)</span>
                  </>
                ),
                desc: 'Определим подходящее основание (по квоте или без квоты), соберём безупречный комплект документов и сопроводим подачу.'
              },
              {
                tag: 'Паспорт / Гражданство',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Приём в гражданство</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Российской Федерации</span>
                  </>
                ),
                desc: 'Проверим соответствие критериям закона № 138-ФЗ, подготовим заявление, исключим риски отказа и сопроводим присягу.'
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
                  fontSize: '17px', 
                  fontWeight: 600,
                  color: 'var(--color-deep-blue)',
                  margin: '0 0 14px 0',
                  lineHeight: 1.4,
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
        </div>
      </section>

      {/* ═══ БЛОК 4: НАПРАВЛЕНИЯ ПОМОЩИ (9 карточек + 1 темная карточка) ═══ */}
      <section id="directions" className="section" style={{ padding: '64px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Направления помощи
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Выберите ситуацию, чтобы узнать основания, сроки обжалования, необходимые документы и как строится юридическая работа.
            </p>
          </div>
          
          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '40px' }}>
            {[
              {
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Отмена запрета</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>на въезд в Россию</span>
                  </>
                ),
                desc: 'Установление оснований ограничения по 114-ФЗ, досудебные обращения в МВД и ФСБ, судебная отмена неразрешения въезда по семейным и гуманитарным основаниям.',
                link: '/grazhdanam/migracionnyj-yurist/otmena-zapreta-na-vezd-v-rossiyu/'
              },
              {
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Обжалование</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>административного выдворения</span>
                  </>
                ),
                desc: 'Срочная жалоба на постановление суда по ст. 18.8, 18.10 КоАП РФ в 10-дневный срок, приостановление высылки, защита от помещения в ЦВСИГ.',
                link: '/grazhdanam/migracionnyj-yurist/obzhalovanie-administrativnogo-vydvoreniya/'
              },
              {
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Обжалование решения</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>о депортации из России</span>
                  </>
                ),
                desc: 'Оспаривание распоряжений МВД о депортации в порядке КАС РФ с ходатайством о мерах предварительной защиты для приостановления выезда.',
                link: '/grazhdanam/migracionnyj-yurist/obzhalovanie-resheniya-o-deportacii/'
              },
              {
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Обжалование нежелательности</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>пребывания в РФ (ст. 25.10)</span>
                  </>
                ),
                desc: 'Отмена бессрочных и долгосрочных решений Минюста, ФСБ, Роспотребнадзора и МВД по судимости или медицинским показаниям.',
                link: '/grazhdanam/migracionnyj-yurist/obzhalovanie-nezhelatelnosti-prebyvaniya/'
              },
              {
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Исключение из реестра</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>контролируемых лиц МВД</span>
                  </>
                ),
                desc: 'Защита при введении режима высылки: оспаривание незаконной записи, разблокировка банковских счетов и снятие ограничений на сделки.',
                link: '/grazhdanam/migracionnyj-yurist/isklyuchenie-iz-reestra-kontroliruemyh-lic/'
              },
              {
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Обжалование отказа</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>или аннулирования РВП и ВНЖ</span>
                  </>
                ),
                desc: 'Защита статуса при неправомерных действиях миграционных органов, сохранение законного права проживания в России через суд.',
                link: '/grazhdanam/migracionnyj-yurist/otkaz-annulirovanie-rvp-vnzh/'
              },
              {
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Помощь в получении</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>разрешения на временное проживание (РВП)</span>
                  </>
                ),
                desc: 'Проверка оснований по квоте и без квоты (брак, рождение, учёба), подготовка заявления, исключение оснований для отказа МВД.',
                link: '/grazhdanam/migracionnyj-yurist/poluchenie-rvp/'
              },
              {
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Помощь в получении</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>вида на жительство (ВНЖ)</span>
                  </>
                ),
                desc: 'Сопровождение оформления ВНЖ в общем порядке после РВП и по специальным категориям (дети/родители граждан РФ, носители языка, специалисты).',
                link: '/grazhdanam/migracionnyj-yurist/poluchenie-vida-na-zhitelstvo/'
              },
              {
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Помощь в получении</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>гражданства Российской Федерации</span>
                  </>
                ),
                desc: 'Комплексный анализ права на приём в гражданство по закону № 138-ФЗ, проверка пакета документов, сопровождение подачи в МВД.',
                link: '/grazhdanam/migracionnyj-yurist/poluchenie-grazhdanstva-rf/'
              }
            ].map((dir, i) => (
              <a key={i} href={dir.link} data-analytics="click_migration_service_card" style={{ textDecoration: 'none', display: 'block' }}>
                <div 
                  className="card service-card" 
                  style={{ 
                    height: '100%', 
                    minHeight: '170px',
                    padding: '30px', 
                    background: 'var(--color-white)', 
                    border: '1px solid var(--color-border)',
                    borderRadius: '0',
                    display: 'flex', 
                    flexDirection: 'column',
                    transition: 'all 0.3s',
                    position: 'relative',
                    borderTop: '3px solid var(--color-primary)'
                  }}
                >
                  <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3 }}>
                    {dir.title}
                  </h3>
                  <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                    {dir.desc}
                  </p>
                  <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, transition: 'transform 0.3s' }}>
                    Подробнее 
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.3s' }}>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </a>
            ))}

            {/* Не нашли свою ситуацию? (10-я карточка) */}
            <div style={{ gridColumn: 'span 1' }}>
              <div 
                className="card service-card" 
                style={{ 
                  height: '100%', 
                  minHeight: '170px',
                  padding: '30px', 
                  background: 'var(--color-deep-blue)', 
                  border: '1px solid transparent',
                  borderRadius: '0',
                  display: 'flex', 
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '20px',
                  transition: 'all 0.3s',
                  position: 'relative',
                  borderTop: '3px solid var(--color-gold)'
                }}
              >
                <div>
                  <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-white)', lineHeight: 1.3 }}>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Не нашли</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>свою ситуацию?</span>
                  </h3>
                  <p style={{ margin: '0', fontSize: '14px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.5 }}>
                    Кратко опишите, что произошло и на какой стадии находится вопрос. Адвокат изучит обстоятельства и предложит законный порядок действий.
                  </p>
                </div>
                <div>
                  <a href="#form" className="btn" style={{ display: 'inline-block', width: '100%', textAlign: 'center', fontSize: '14px', padding: '12px 20px', backgroundColor: 'var(--color-white)', color: '#10273B', border: '1px solid var(--color-white)', fontWeight: 600 }}>
                    Описать ситуацию
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 5: ЧТО ДЕЛАЕТ МИГРАЦИОННЫЙ ЮРИСТ (По шаблону «Что можно обжаловать») ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Что делает юрист</span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>по миграционным делам</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Состав работы формируется индивидуально в зависимости от цели: экстренная отмена запрета и выдворения или плановое получение документов.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', position: 'relative', marginBottom: '32px' }}>
            {[
              {
                num: '01',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Анализ оснований</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и миграционных документов</span>
                  </>
                ),
                desc: 'Изучаем историю пребывания, дату и текст решения госоргана, проверяем соблюдение регламентов МВД и процессуальных сроков обжалования.'
              },
              {
                num: '02',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Выбор порядка</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>защиты прав доверителя</span>
                  </>
                ),
                desc: 'Определяем надлежащий маршрут: досудебное обращение в вышестоящее ведомство либо подача административного иска в суд.'
              },
              {
                num: '03',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Подготовка жалоб,</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>обращений и судебных исков</span>
                  </>
                ),
                desc: 'Составляем процессуальные документы со ссылками на Конституцию РФ, 115-ФЗ, 114-ФЗ, КоАП РФ, КАС РФ и практику Верховного Суда РФ.'
              },
              {
                num: '04',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Сбор и фиксация</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>доказательственной базы</span>
                  </>
                ),
                desc: 'Направляем адвокатские запросы, собираем подтверждения семейных связей, медицинские справки и документы об источниках дохода.'
              },
              {
                num: '05',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Личное участие</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>в суде и миграционных органах</span>
                  </>
                ),
                desc: 'Представляем интересы на заседаниях, взаимодействуем с подразделениями по вопросам миграции МВД и пограничной службой ФСБ.'
              },
              {
                num: '06',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Контроль фактического</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>исполнения решения суда</span>
                  </>
                ),
                desc: 'Добиваемся снятия ограничений в ЦБДУИГ, базе пограничной службы, исключения сведений из реестра контролируемых лиц и защиты статуса.'
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="hover-lift"
                style={{
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  padding: '36px 30px 32px 30px',
                  border: '1px solid var(--color-border)',
                  borderTop: '4px solid var(--color-gold)',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '24px',
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

                <h3 style={{
                  fontSize: '18px',
                  fontFamily: 'var(--font-serif)',
                  color: 'var(--color-deep-blue)',
                  margin: '8px 0 14px 0',
                  lineHeight: 1.35
                }}>
                  {item.title}
                </h3>

                <p style={{
                  fontSize: '14px',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, maxWidth: '720px', margin: 0 }}>
            Точный состав работы и стоимость фиксируются в договоре после изучения документов и оценки сложности ситуации.
          </p>
        </div>
      </section>

      {/* ═══ БЛОК 6: КУРАТОР НАПРАВЛЕНИЯ ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name="Конопкин Дмитрий Сергеевич"
        position={<>Адвокат, председатель<br />Коллегии адвокатов «Де-Юре»</>}
        imageUrl="/images/konopkin.jpg"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Дмитрий Сергеевич Конопкин имеет 6-летний опыт следственной работы в Следственном комитете РФ и адвокатскую практику с 2022 года. Курирует сложные миграционные споры, требующие оценки законности действий должностных лиц, судебного оспаривания актов государственных органов и экстренной защиты доверителей от административного выдворения и депортации.
          </span>,
          <ul key="2" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Статус адвоката, реестровый номер 48/812</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Председатель Коллегии адвокатов «Де-Юре»</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Судебное представительство в Липецкой области и других регионах РФ</span>
            </li>
          </ul>,
          <a key="3" href="/specialisty/konopkin-dmitriy-sergeevich/" style={{ display: 'inline-block', marginTop: '16px', fontSize: '14px', color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
            Подробнее о Дмитрии Сергеевиче Конопкине →
          </a>
        ]}
        buttonText="Задать вопрос адвокату"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 7: ПРИМЕРЫ ИЗ ПРАКТИКИ ═══ */}
      <CasesBlock
        title="Примеры из практики"
        showAllLink="/praktika/"
        showAllText="Смотреть все дела"
        showDemoWarning={true}
        cases={cases}
      />

      {/* ═══ БЛОК 8: КАК ПРОХОДИТ РАБОТА ═══ */}
      <ProcessBlock
        title="Как проходит работа"
        subtitle="Работаем структурировано — вы знаете, что происходит на каждом этапе."
        alignTitle="center"
        steps={[
          {
            num: '01',
            title: 'Разбираемся в ситуации',
            desc: 'Уточняем гражданство, текущий статус, место нахождения, полученные решения и цель обращения. Определяем, есть ли действие, которое нельзя откладывать.'
          },
          {
            num: '02',
            title: 'Проверяем документы и сведения',
            desc: 'Изучаем паспортные и миграционные документы, уведомления, решения, судебные акты и подтверждающие обстоятельства. При необходимости делаем запросы.'
          },
          {
            num: '03',
            title: 'Формируем правовой маршрут',
            desc: 'Разделяем административный и судебный порядок, оцениваем основания, риски, сроки и необходимый объём работы. Согласовываем действия и стоимость.'
          },
          {
            num: '04',
            title: 'Готовим документы и представляем интересы',
            desc: 'Составляем заявления, обращения, жалобы или административный иск; взаимодействуем с органами и участвуем в судебных заседаниях.'
          },
          {
            num: '05',
            title: 'Контролируем результат',
            desc: 'Отслеживаем рассмотрение, объясняем принятое решение и определяем дальнейшие шаги: исполнение судебного акта, отмена ограничений или урегулирование статуса.'
          }
        ]}
        ctaTitle="Готовы обсудить вашу ситуацию"
        ctaSubtitle="Опишите задачу — адвокат изучит документы и предложит законные варианты решения."
        ctaButtonText="Получить консультацию"
        ctaButtonHref="#form"
        footerNote="Начать можно дистанционно: направить имеющиеся документы и кратко описать ситуацию. Необходимость личного участия, доверенности или явки определяется индивидуально."
      />

      {/* ═══ БЛОК 9: СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость юридической помощи"
        subtitle="Стоимость зависит от вида решения, стадии, объёма документов, необходимости запросов и судебного представительства. Фиксируем цену в договоре."
        tiers={pricingTiers}
        disclaimer="Госпошлины, нотариальные переводы и оформление доверенности оплачиваются отдельно по фактическим тарифам."
      />

      {/* ═══ БЛОК 10: FAQ ═══ */}
      <FAQBlock
        superTitle="Частые вопросы клиентов"
        title={
          <>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Ответы на</span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>частые вопросы</span>
          </>
        }
        subtitle="О миграционном праве и процедурах обжалования"
        ctaText="Задать свой вопрос"
        ctaLink="#form"
        faqs={faqs}
      />

      {/* ═══ БЛОК 11: ФИНАЛЬНАЯ ФОРМА ═══ */}
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
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>с миграционным юристом</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Опишите ситуацию, укажите гражданство и имеющиеся решения. Обращение передадим Дмитрию Сергеевичу Конопкину. Он проверит документы, оценит риски и свяжется с вами для согласования порядка действий.
              </p>
              
              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация адвоката</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Позвоните прямо сейчас: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (910) 350-31-11</a>
                </p>
              </div>

              <div style={{ background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Конфиденциальность:</strong>
                Все сведения и документы защищены профессиональной адвокатской тайной. Безопасный способ передачи документов согласуем после первичного контакта.
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm
                title="Написать нам"
                subtitle={
                  <>
                    <span style={{ display: 'inline-block' }}>Оставьте имя и номер телефона. Адвокат свяжется с вами</span> <br />
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
                commentPlaceholder="Опишите вашу ситуацию: какое решение вынесено, есть ли семья в РФ, какой документ требуется оформить..."
                hiddenFields={[
                  { name: 'source_page', value: '/grazhdanam/migracionnyj-yurist/' },
                  { name: 'direction', value: 'migracionnyj_yurist' },
                  { name: 'selected_specialist', value: 'konopkin-dmitriy-sergeevich' }
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
