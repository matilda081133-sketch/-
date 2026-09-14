'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';
import ProcessBlock from '@/components/ProcessBlock';
import CasesBlock, { CaseData } from '@/components/CasesBlock';
import PricingBlock, { PricingTier } from '@/components/PricingBlock';

export default function ZemelnoGradostroitelnoeClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const faqs = [
    {
      q: 'Когда заказывать градостроительный аудит участка?',
      a: 'До аванса, покупки, долгосрочной аренды и заказа проектирования. Аудит сопоставляет не только ЕГРН, но и ПЗЗ, предельные параметры, охранные зоны, документацию по планировке, подъездные пути и бизнес-цель компании.'
    },
    {
      q: 'Можно ли заранее понять, что разрешено построить?',
      a: 'Можно оценить правовой и градостроительный потенциал участка и выявить условия реализации проекта. Окончательный вывод зависит от актуальных документов, параметров проектируемого объекта и процедур, которые предстоит пройти.'
    },
    {
      q: 'Чем изменение ВРИ отличается от перевода земли в другую категорию?',
      a: 'ВРИ определяет допустимое использование внутри установленной категории и территориальной зоны, а категория относится к глобальному целевому назначению земель. Это принципиально разные процедуры; маршрут выбирается после правового анализа.'
    },
    {
      q: 'Всегда ли можно выбрать основной ВРИ самостоятельно?',
      a: 'Нет. Нужно учитывать действующий градостроительный регламент территориальной зоны, статус земли, зарегистрированные ограничения, сведения ЕГРН и специальные правила. Для условно разрешённого вида требуется отдельная публичная процедура.'
    },
    {
      q: 'Что делать, если нужного использования нет в ПЗЗ?',
      a: 'Проверить территориальную зону, возможность предоставления разрешения на условно разрешённый вид, внесения изменений в ПЗЗ, отклонения от предельных параметров или альтернативной конфигурации проекта.'
    },
    {
      q: 'Можно ли получить муниципальный участок без торгов?',
      a: 'Предоставление публичных участков без торгов допускается строго в случаях, предусмотренных ст. 39.6 ЗК РФ (например, под объекты масштабных инвестиционных проектов, достройку незавершённого строительства или собственникам зданий).'
    },
    {
      q: 'Что такое ЗОУИТ и чем они опасны для проекта?',
      a: 'Зоны с особыми условиями использования территорий (охранные зоны ЛЭП, газопроводов, водоохранные зоны, санитарно-защитные зоны производств, приаэродромные территории). Они накладывают прямой запрет или жёсткие ограничения на строительство.'
    },
    {
      q: 'Как оспорить отказ в выдаче ГПЗУ или предоставлении участка?',
      a: 'Сначала подаётся досудебная претензия или жалоба в вышестоящий орган. При сохранении незаконного отказа юрист подготавливает административное исковое заявление в арбитражный суд по главе 24 АПК РФ.'
    },
    {
      q: 'Помогаете ли вы с публичными слушаниями?',
      a: 'Да. Готовим правовое и градостроительное обоснование для участия в общественных обсуждениях при изменении ПЗЗ или предоставлении разрешения на условно разрешённый вид использования.'
    },
    {
      q: 'От чего зависят срок и стоимость земельного сопровождения?',
      a: 'От правового статуса земли (частная, государственная, неразграниченная), сложности градостроительных ограничений и перечня согласующих инстанций.'
    }
  ];

  const situations = [
    {
      title: 'Подбор и аудит участка до сделки',
      desc: 'Нужно проверить градостроительный регламент, ПЗЗ, ВРИ, ограничения и скрытые охранные зоны до покупки земли или заказа проекта.',
      tag: 'Due Diligence участка'
    },
    {
      title: 'Изменение ВРИ под коммерческий объект',
      desc: 'Текущий вид разрешённого использования не позволяет разместить производство, склад, ТЦ или автосервис. Требуется смена или добавление ВРИ.',
      tag: 'Смена ВРИ'
    },
    {
      title: 'Внесение изменений в ПЗЗ',
      desc: 'Необходимый вид деятельности не предусмотрен территориальной зоной. Требуется изменение карты градостроительного зонирования.',
      tag: 'Изменение ПЗЗ'
    },
    {
      title: 'Получение ГПЗУ и преодоление отказов',
      desc: 'Администрация отказывает в выдаче градостроительного плана или включает недостоверные ограничения пятна застройки.',
      tag: 'ГПЗУ'
    },
    {
      title: 'Оформление публичной земли',
      desc: 'Аренда или выкуп муниципального/государственного земельного участка под коммерческий объект с торгов или без торгов.',
      tag: 'Публичная земля'
    },
    {
      title: 'ЗОУИТ, сервитуты и ограничения',
      desc: 'Участок обременён охранными зонами инженерных сетей, санитарными разрывами, красными линиями или чужими сервитутами.',
      tag: 'Ограничения'
    }
  ];

  const auditDirections = [
    {
      title: 'Права и границы участка',
      desc: 'Сведения ЕГРН, статус границ, реестровые ошибки, наложения, права третьих лиц и законность формирования участка.'
    },
    {
      title: 'ПЗЗ и территориальная зона',
      desc: 'Градостроительный регламент, основные, условно разрешённые и вспомогательные виды разрешённого использования.'
    },
    {
      title: 'Предельные параметры застройки',
      desc: 'Максимальный процент застройки, минимальные отступы от границ, предельная этажность и высота объектов.'
    },
    {
      title: 'Охранные зоны и ЗОУИТ',
      desc: 'Охранные зоны ЛЭП, газопроводов, кабелей связи, водоохранные зоны, санитарно-защитные зоны предприятий, приаэродромная территория.'
    },
    {
      title: 'Красные линии и планировка',
      desc: 'Проекты межевания и планировки территории, красные линии улично-дорожной сети, риски изъятия для публичных нужд.'
    },
    {
      title: 'Подъездные пути и сервитуты',
      desc: 'Правовой доступ к землям общего пользования, необходимость установления частного или публичного сервитута.'
    },
    {
      title: 'Инженерная инфраструктура',
      desc: 'Технические условия подключения, охранные обязательства и проходящие по участку транзитные коммуникации.'
    },
    {
      title: 'Риски отказов органов власти',
      desc: 'Анализ оснований возможных отказов в выдаче разрешений и подготовка аргументированной позиции заявителя.'
    }
  ];

  const cases: CaseData[] = [
    {
      title: 'Аудит участка под логистический комплекс 12 000 кв. м',
      category: 'Аудит участка',
      problem: 'Инвестор планировал приобрести участок 5 га под складской терминал. Продавец заявлял о полном отсутствии ограничений на строительство.',
      action: 'Сопоставили проект планировки территории, материалы ИСОГД и схемы сетей. Выявили незарегистрированную в ЕГРН охранную зону газопровода, пересекающую 40% участка.',
      result: 'Инвестор избежал покупки проблемного участка с прямым запретом на застройку, сохранив свыше 70 млн ₽ инвестиций.'
    },
    {
      title: 'Смена вида разрешённого использования под производственную базу',
      category: 'Изменение ВРИ',
      problem: 'Организация приобрела землю с ВРИ «для сельскохозяйственного производства». Для открытия цеха требовался перевод в производственный ВРИ.',
      action: 'Изучили ПЗЗ муниципального образования, подтвердили вхождение в нужную подзону, подготовили заявление и комплект обоснований, исключив необходимость публичных слушаний.',
      result: 'В ЕГРН внесены изменения: установлен ВРИ «Производственная деятельность», получено согласование на проектирование.'
    },
    {
      title: 'Преодоление незаконного отказа в выдаче ГПЗУ',
      category: 'Получение ГПЗУ',
      problem: 'Орган местного самоуправления отказал в выдаче ГПЗУ со ссылкой на отсутствие утверждённого проекта межевания квартала.',
      action: 'Подготовили правовое заключение со ссылками на ст. 57.3 Градостроительного кодекса РФ и правоприменительную практику Верховного Суда РФ о неправомерности отказа при наличии межевания участка.',
      result: 'Администрация отозвала отказ и выдала градостроительный план земельного участка с полной запечатанной зоной застройки.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Градостроительный экспресс-аудит',
      price: 'от 20 000 ₽',
      subtitle: 'Анализ правового статуса, ПЗЗ, территориальной зоны, доступных ВРИ и очевидных ограничений.',
      buttonText: 'Выбрать тариф',
      buttonHref: '#contacts-form',
      features: [
        { name: 'Анализ выписки ЕГРН и ПЗЗ территории', value: '✓' },
        { name: 'Проверка основных и условных ВРИ', value: '✓' },
        { name: 'Выявление ограничений и ЗОУИТ', value: '✓' },
        { name: 'Письменный отчёт с правовыми выводами', value: '✓' }
      ],
      popular: false
    },
    {
      title: 'Комплексный Due Diligence земли',
      price: 'от 45 000 ₽',
      subtitle: 'Глубокий аудит участка, ИСОГД, сетей, красных линий, проектов планировки и подъездных путей.',
      buttonText: 'Выбрать тариф',
      buttonHref: '#contacts-form',
      features: [
        { name: 'Полная проверка по градостроительным базам', value: '✓' },
        { name: 'Анализ проектов планировки и межевания', value: '✓' },
        { name: 'Оценка рисков отказов и публичных сервитутов', value: '✓' },
        { name: 'Пошаговая дорожная карта освоения участка', value: '✓' }
      ],
      popular: true
    },
    {
      title: 'Смена ВРИ или изменение ПЗЗ',
      price: 'от 50 000 ₽',
      subtitle: 'Юридическое сопровождение изменения вида разрешённого использования или внесения изменений в ПЗЗ.',
      buttonText: 'Выбрать тариф',
      buttonHref: '#contacts-form',
      features: [
        { name: 'Подготовка пакета заявлений и обоснований', value: '✓' },
        { name: 'Взаимодействие с профильными комитетами', value: '✓' },
        { name: 'Участие в общественных обсуждениях', value: '✓' },
        { name: 'Контроль внесения сведений в ЕГРН', value: '✓' }
      ],
      popular: false
    },
    {
      title: 'Оформление участка или спор с органом',
      price: 'от 60 000 ₽',
      subtitle: 'Оформление земли из публичной собственности (аренда/выкуп) либо обжалование отказа в суде.',
      buttonText: 'Выбрать тариф',
      buttonHref: '#contacts-form',
      features: [
        { name: 'Сопровождение процедур по ст. 39.6 ЗК РФ', value: '✓' },
        { name: 'Досудебная претензия и жалоба на отказ', value: '✓' },
        { name: 'Иск в арбитражный суд по гл. 24 АПК РФ', value: '✓' },
        { name: 'Судебное представительство во всех инстанциях', value: '✓' }
      ],
      popular: false
    }
  ];

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
        '@id': 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/zemelno-gradostroitelnoe-soprovozhdenie/#service',
        name: 'Земельно-градостроительное сопровождение бизнеса в Липецке',
        serviceType: 'Юридические услуги по земельному праву и градостроительству для бизнеса',
        provider: {
          '@id': 'https://dejure-help.ru/#legalservice'
        },
        areaServed: ['Липецк', 'Липецкая область'],
        url: 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/zemelno-gradostroitelnoe-soprovozhdenie/'
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/zemelno-gradostroitelnoe-soprovozhdenie/#faq',
        mainEntity: faqs.map(faq => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a
          }
        }))
      }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />
      <Header />

      {/* ═══ 1. ПЕРВЫЙ ЭКРАН ═══ */}
      <MilitaryHero
        breadcrumbs={
          <>
            <Link href="/" style={{ color: 'var(--color-primary)' }}>Главная</Link> <span style={{ margin: '0 8px' }}>/</span>
            <Link href="/biznesu/" style={{ color: 'var(--color-primary)' }}>Бизнесу</Link> <span style={{ margin: '0 8px' }}>/</span>
            <Link href="/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/" style={{ color: 'var(--color-primary)' }}>Юрист по недвижимости и строительству</Link> <span style={{ margin: '0 8px' }}>/</span>
            <span style={{ color: 'var(--color-text-muted)' }}>Земельно-градостроительное сопровождение</span>
          </>
        }
        superTitle="Земля и градостроительство • Бизнесу • Липецк и область"
        title="Земельно-градостроительное сопровождение бизнеса в Липецке"
        subtitle="Проверим градостроительный потенциал участка, поможем изменить ВРИ и ПЗЗ, получить ГПЗУ, оформить землю и снять риски до начала проектирования и строительства."
        trustItems={[
          { text: 'Начинаем до покупки и проектирования' },
          { text: 'Проверяем право, ПЗЗ и ограничения в связке' },
          { text: 'Фиксируем выводы и маршрут письменно' }
        ]}
        primaryCtaText="Обсудить участок под проект"
        primaryCtaLink="#form"
        secondaryCtaText="Что проверит юрист"
        secondaryCtaLink="#situations"
      />

      {/* ═══ 2. КОГДА НУЖЕН ЮРИСТ (СИТУАЦИИ) ═══ */}
      <section style={{ backgroundColor: 'var(--color-white)', padding: '64px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 40px' }}>
            <h2 className="nowrap-desk" style={{ fontSize: '30px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
              Когда бизнесу требуется земельно-градостроительный юрист
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Помогаем инвесторам, застройщикам и собственникам земли подготовить правовую базу под коммерческие и производственные проекты.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            {situations.map((sit, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '12px',
                  padding: '24px'
                }}
              >
                <div style={{
                  display: 'inline-block',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(212,175,55,0.15)',
                  color: '#B8860B',
                  fontSize: '12px',
                  fontWeight: 600,
                  marginBottom: '12px'
                }}>
                  {sit.tag}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '10px' }}>
                  {sit.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: 1.55 }}>
                  {sit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3. НАПРАВЛЕНИЯ АУДИТА ═══ */}
      <section id="audit-points" style={{ backgroundColor: '#F8FAFC', padding: '64px 0', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 40px' }}>
            <h2 className="nowrap-desk" style={{ fontSize: '30px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
              Что проверит юрист: 8 направлений земельного аудита
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Комплексный анализ участка, позволяющий выявить юридические и градостроительные стоп-факторы до крупных финансовых затрат.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px'
          }}>
            {auditDirections.map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: '12px',
                  padding: '24px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <div style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-primary)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '13px',
                    fontWeight: 700
                  }}>
                    {idx + 1}
                  </div>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-deep-blue)', margin: 0 }}>
                    {item.title}
                  </h3>
                </div>
                <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4. ДИАГНОСТИКА: ЧТО ПОДГОТОВИТЬ ДЛЯ СТАРТА ═══ */}
      {/* КРИТИЧЕСКОЕ ПРАВИЛО ДИЗАЙНА: светлый фон секции var(--gradient-cream), не синий! */}
      <section style={{ background: 'var(--gradient-cream)', padding: '64px 0' }}>
        <div className="container">
          <div style={{
            backgroundColor: '#10273B',
            borderRadius: '20px',
            padding: '44px 40px',
            color: '#FFFFFF',
            boxShadow: '0 12px 32px rgba(16,39,59,0.18)'
          }}>
            <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center', marginBottom: '32px' }}>
              <div style={{
                display: 'inline-block',
                padding: '4px 12px',
                borderRadius: '6px',
                backgroundColor: 'rgba(212,175,55,0.18)',
                color: '#D4AF37',
                fontSize: '13px',
                fontWeight: 600,
                marginBottom: '12px'
              }}>
                Пакет документов
              </div>
              <h3 className="nowrap-desk" style={{ fontSize: '26px', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>
                Что подготовить для первичного анализа участка
              </h3>
              <p style={{ fontSize: '15px', color: '#CBD5E1', lineHeight: 1.6 }}>
                Для первого разбора достаточно кадастрового номера, назначения планируемого объекта и параметров проекта.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '16px',
              marginBottom: '32px'
            }}>
              {[
                'Кадастровый номер, адрес или схема расположения территории',
                'Описание объекта: назначение, площадь застройки, этажность, санитарный класс',
                'Выписка из ЕГРН на земельный участок и правоустанавливающие документы',
                'ПЗЗ, ГПЗУ, схемы планировки территории и технические условия — если получены',
                'Заявления, ответы, отказы органов местного самоуправления и переписка',
                'Сведения о сроках сделки, начале проектирования или графике финансирования'
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(212,175,55,0.2)',
                    color: '#D4AF37',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: 700,
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    ✓
                  </div>
                  <span style={{ fontSize: '14px', color: '#E2E8F0', lineHeight: 1.5 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center' }}>
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn btn-gold"
                style={{ padding: '14px 32px', fontSize: '15px', fontWeight: 600 }}
              >
                Отправить кадастровый номер на проверку
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 5. ЭТАПЫ РАБОТЫ (PROCESS BLOCK) ═══ */}
      <ProcessBlock
        title="Этапы сопровождения земельных проектов"
        subtitle="Семь последовательных шагов от аудита потенциала до получения разрешительной базы"
        steps={[
          {
            num: '01',
            title: 'Анализ задачи и параметров',
            desc: 'Изучаем параметры планируемого объекта, требования к коммуникациям, подъездам и санитарным зонам.'
          },
          {
            num: '02',
            title: 'Градостроительный аудит',
            desc: 'Сопоставляем данные ЕГРН, ПЗЗ, карты зон с особыми условиями (ЗОУИТ) и красные линии.'
          },
          {
            num: '03',
            title: 'Выбор правового маршрута',
            desc: 'Определяем способ реализации: смена ВРИ, получение разрешения на условный вид или корректировка ПЗЗ.'
          },
          {
            num: '04',
            title: 'Подготовка обоснований',
            desc: 'Разрабатываем доказательную базу, заявления, схемы и пояснительные записки для органов власти.'
          },
          {
            num: '05',
            title: 'Сопровождение процедур',
            desc: 'Взаимодействуем с профильными ведомствами, участвуем в комиссиях и общественных обсуждениях.'
          },
          {
            num: '06',
            title: 'Регистрация изменений в ЕГРН',
            desc: 'Контролируем внесение обновлённых сведений о ВРИ, границах или виде использования в Росреестр.'
          },
          {
            num: '07',
            title: 'Переход к проектированию',
            desc: 'Передаём сформированный юридический пакет техническим специалистам и проектным организациям.'
          }
        ]}
      />

      {/* ═══ 6. ПРАКТИКА (CASES BLOCK) ═══ */}
      <CasesBlock
        cases={cases}
        title="Практика по земельным и градостроительным делам"
      />

      {/* ═══ 7. СТОИМОСТЬ (PRICING BLOCK) ═══ */}
      <PricingBlock
        title="Стоимость земельно-градостроительных услуг"
        subtitle="Фиксированная стоимость работ, закреплённая в договоре. Понятные и измеримые этапы."
        tiers={pricingTiers}
      />

      {/* ═══ 8. ВОПРОСЫ И ОТВЕТЫ (FAQ BLOCK) ═══ */}
      <FAQBlock
        title="Частые вопросы по земле и градостроительству"
        subtitle="Разъяснения юриста о ВРИ, охранных зонах, ГПЗУ и получении публичных участков"
        faqs={faqs}
      />

      {/* ═══ 9. ФОРМА ОБРАТНОЙ СВЯЗИ (CONTACTS FORM) ═══ */}
      <ContactsForm
        title="Обсудите земельный проект с юристом"
        subtitle="Оставьте кадастровый номер и параметры проекта. Мы свяжемся с вами в течение 15 минут в рабочее время для предварительного анализа."
      />

      <Footer />

      {/* Модальное окно быстрой заявки */}
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(16,39,59,0.7)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setIsModalOpen(false)}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              padding: '36px 32px',
              maxWidth: '540px',
              width: '100%',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                color: '#64748B'
              }}
            >
              ×
            </button>
            <h3 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '10px' }}>
              Консультация по земельному участку
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: 1.5, marginBottom: '24px' }}>
              Укажите контактные данные и кадастровый номер участка. Профильный юрист свяжется с вами в рабочее время.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Спасибо! Ваша заявка принята. Юрист свяжется с вами в рабочее время.');
                setIsModalOpen(false);
              }}
            >
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                  Ваше имя или название компании
                </label>
                <input
                  type="text"
                  required
                  placeholder="ООО «Компания» или представитель"
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    border: '1px solid #CBD5E1',
                    fontSize: '14px'
                  }}
                />
              </div>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                  Телефон для связи
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+7 (___) ___-__-__"
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    border: '1px solid #CBD5E1',
                    fontSize: '14px'
                  }}
                />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                  Кадастровый номер или суть задачи
                </label>
                <textarea
                  rows={3}
                  placeholder="Кадастровый номер 48:..., смена ВРИ, проверка участка под склад..."
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    border: '1px solid #CBD5E1',
                    fontSize: '14px',
                    resize: 'vertical'
                  }}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', padding: '14px', fontSize: '15px', fontWeight: 600 }}
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
