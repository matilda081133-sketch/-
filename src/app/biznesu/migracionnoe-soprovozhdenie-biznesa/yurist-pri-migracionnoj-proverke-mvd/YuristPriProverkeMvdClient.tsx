'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MilitaryHero from '@/components/MilitaryHero';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import ProcessBlock from '@/components/ProcessBlock';
import CasesBlock, { CaseData } from '@/components/CasesBlock';
import SpecialistBlock from '@/components/SpecialistBlock';
import PricingBlock, { PricingTier } from '@/components/PricingBlock';

export default function YuristPriProverkeMvdClient() {
  const situations = [
    {
      tag: 'Письменный запрос',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Получен запрос или</span> <br />
          <span style={{ display: 'inline-block' }}>требование документов от МВД</span>
        </span>
      ),
      desc: 'Проверим полномочия органа, обоснованность перечня документов, сформируем заверенные копии с описью и подготовим безопасные пояснения.',
      btnText: 'Ответить на запрос'
    },
    {
      tag: 'Вызов в отдел',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Вызывают руководителя</span> <br />
          <span style={{ display: 'inline-block' }}>или кадровика в ОВМ МВД</span>
        </span>
      ),
      desc: 'Установим процессуальный статус вызываемого лица, цель визита и обеспечим личное участие юриста или адвоката при даче объяснений.',
      btnText: 'Сопровождение в МВД'
    },
    {
      tag: 'Полиция на объекте',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Сотрудники МВД прибыли</span> <br />
          <span style={{ display: 'inline-block' }}>в офис или на производство</span>
        </span>
      ),
      desc: 'Проверим служебные удостоверения и распоряжение о проверке, назначим единого представителя и пресечем процессуальные нарушения.',
      btnText: 'Экстренный выезд'
    },
    {
      tag: 'Опрос работников',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Проверяют иностранцев</span> <br />
          <span style={{ display: 'inline-block' }}>и отбирают объяснения</span>
        </span>
      ),
      desc: 'Контролируем законность действий проверяющих, разъясняем права сотрудникам и исключаем психологическое давление со стороны полиции.',
      btnText: 'Защита при опросе'
    },
    {
      tag: 'Истребование оригиналов',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Требуют выдать оригиналы</span> <br />
          <span style={{ display: 'inline-block' }}>договоров и личных дел</span>
        </span>
      ),
      desc: 'Оценим законность изъятия, проконтролируем составление подробного протокола изъятия и сохраним заверенные копии для работы компании.',
      btnText: 'Контроль изъятия'
    },
    {
      tag: 'Угроза протокола',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Составляется протокол</span> <br />
          <span style={{ display: 'inline-block' }}>по ст. 18.15 КоАП РФ</span>
        </span>
      ),
      desc: 'Срочно внесём мотивированные замечания в протокол, зафиксируем нарушения процедуры проверки и сформируем доказательственную базу защиты.',
      btnText: 'Защита от протокола'
    }
  ];

  const urgentRules = [
    {
      title: '1. Проверьте документы проверяющих',
      desc: 'Попросите предъявить служебные удостоверения и распоряжение (приказ) о проведении проверки. Перепишите ФИО, должности и номер распоряжения.'
    },
    {
      title: '2. Назначьте одного представителя',
      desc: 'Все коммуникации с проверяющими должен вести один уполномоченный сотрудник или прибывший юрист. Запретите другим сотрудникам давать хаотичные комментарии.'
    },
    {
      title: '3. Не передавайте оригиналы без акта',
      desc: 'Предоставляйте только заверенные копии по описи. В случае изъятия оригиналов требуйте составления протокола изъятия с вручением вам копии.'
    },
    {
      title: '4. Не подписывайте документы не читая',
      desc: 'Внимательно читайте каждый протокол и акт. При несогласии вносите формулировку: «С выводами не согласен, подробные возражения будут представлены защитником».'
    }
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Срочный контакт и инструктаж',
      desc: 'Немедленно связываемся с руководством или контактным лицом на объекте, фиксируем стадию проверки и даем первоочередные инструкции персоналу.'
    },
    {
      num: '02',
      title: 'Квалификация оснований проверки',
      desc: 'Изучаем распоряжение о проверке, требование или запрос МВД, проверяем законность оснований, предмет и сроки проведения мероприятий.'
    },
    {
      num: '03',
      title: 'Организация единого канала взаимодействия',
      desc: 'Берём общение с сотрудниками МВД на себя, исключаем противоречивые пояснения работников и неконтролируемую передачу архива.'
    },
    {
      num: '04',
      title: 'Формирование пакета документов и пояснений',
      desc: 'Готовим структурированный комплект документов с сопроводительным письмом и мотивированными письменными пояснениями по спорным фактам.'
    },
    {
      num: '05',
      title: 'Фиксация итогов и правовая защита',
      desc: 'Получаем копии акта проверки и протоколов, анализируем замечания; при наличии претензий переводим материалы в производство по ст. 18.15 КоАП РФ.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Анализ запроса и подготовка ответа',
      subtitle: 'Документарная проверка МВД',
      popular: false,
      price: 'от 15 000 ₽',
      features: [
        { name: 'Правовая экспертиза требования подразделения МВД', value: 'Включено' },
        { name: 'Формирование безопасного комплекта документов', value: 'Включено' },
        { name: 'Подготовка мотивированных письменных пояснений', value: 'Включено' },
        { name: 'Контроль процессуальных сроков ответа', value: 'Включено' }
      ],
      buttonText: 'Ответить на запрос',
      buttonHref: '#form'
    },
    {
      title: 'Сопровождение проверки на объекте',
      subtitle: 'Очное участие при проверке или опросе',
      popular: true,
      badgeText: 'Срочный выезд',
      price: 'от 35 000 ₽',
      features: [
        { name: 'Оперативный выезд юриста/адвоката на объект компании', value: 'Включено' },
        { name: 'Проверка полномочий сотрудников полиции и распоряжения', value: 'Включено' },
        { name: 'Участие при осмотре помещений и опросе работников', value: 'Включено' },
        { name: 'Фиксация процессуальных нарушений в акте проверки', value: 'Включено' }
      ],
      buttonText: 'Вызвать юриста',
      buttonHref: '#form'
    },
    {
      title: 'Комплексная защита при проверке',
      subtitle: 'Полное сопровождение проверки под ключ',
      popular: false,
      price: 'от 60 000 ₽',
      features: [
        { name: 'Неограниченное юридическое сопровождение всех этапов', value: 'Включено' },
        { name: 'Защита руководства при вызовах в миграционный орган', value: 'Включено' },
        { name: 'Подготовка возражений на акт проверки', value: 'Включено' },
        { name: 'Предотвращение составления протоколов по ст. 18.15 КоАП', value: 'Включено' }
      ],
      buttonText: 'Комплексная защита',
      buttonHref: '#form'
    }
  ];

  const practiceCases: CaseData[] = [
    {
      category: 'Запрос документов',
      title: 'Сузили объём требования МВД до законного предмета проверки',
      problem: 'Отдел по вопросам миграции направил строительной компании требование представить за 2 дня кадровые документы по 45 иностранным работникам за 3 предшествующих года.',
      action: 'Изучили основание запроса, выявили превышение предмета проверки. Направили мотивированное ходатайство с предоставлением документов строго по проверяемому объекту и согласовали продление срока.',
      result: 'Компания избежала штрафа за непредоставление сведений и передала проверенный пакет документов без раскрытия лишней внутренней информации.'
    },
    {
      category: 'Выездная проверка',
      title: 'Не допустили привлечения к ответственности при рейде на складе',
      problem: 'Сотрудники полиции в ходе рейда задержали на складском комплексе 6 иностранных граждан без патентов, утверждая, что они допущены к работе логистическим оператором.',
      action: 'Юрист прибыл на склад в течение 40 минут. Предъявил договоры с клининговой компанией-подрядчиком, журнал вводного инструктажа и доказал отсутствие трудовых отношений с задержанными.',
      result: 'В отношении логистического оператора проверка прекращена без составления протокола. Предотвращен совокупный штраф до 4,8 млн рублей.'
    },
    {
      category: 'Опрос сотрудников',
      title: 'Исключили давление на работников при даче объяснений в ОВМ',
      problem: 'Директора и кадровика производственной фирмы вызвали в подразделение МВД для дачи объяснений по поводу якобы несвоевременного уведомления об увольнении работников.',
      action: 'Адвокат сопровождал должностных лиц на опросе. Предоставили квитанции почтовых отправлений с описью вложения, подтверждающие своевременность уведомления в 3-дневный срок.',
      result: 'Инспекторы отказались от составления протокола об административном правонарушении, проверка завершена без претензий к предприятию.'
    }
  ];

  const faqs = [
    {
      q: 'Что делать в первую очередь, если сотрудники МВД уже прибыли на объект?',
      a: 'Немедленно свяжитесь с юристом. Попросите проверяющих предъявить служебные удостоверения и распоряжение о проверке, перепишите их данные. Назначьте одного представителя компании и попросите сотрудников не давать комментариев до согласования позиции.'
    },
    {
      q: 'Имеют ли право сотрудники МВД проверять документы у всех работников?',
      a: 'В рамках проведения контрольно-надзорных мероприятий сотрудники вправе проверять документы, удостоверяющие личность и подтверждающие право на пребывание и осуществление трудовой деятельности. При этом действия проверяющих должны строго соответствовать распоряжению о проверке.'
    },
    {
      q: 'Обязана ли компания отдавать оригиналы трудовых договоров и личных дел?',
      a: 'По общему правилу проверка проводится по заверенным копиям. Изъятие оригиналов допускается только в исключительных случаях с обязательным составлением протокола изъятия в присутствии понятых (или с видеозаписью) и вручением копии протокола работодателю.'
    },
    {
      q: 'Может ли юрист или адвокат присутствовать при проверке и опросе?',
      a: 'Да. В соответствии с законодательством РФ юридическое лицо и граждане имеют право на получение квалифицированной юридической помощи. Защитник вправе присутствовать при проведении проверочных мероприятий и фиксации объяснений.'
    },
    {
      q: 'Как правильно вести себя работникам при отборе объяснений?',
      a: 'Работникам следует отвечать правдиво только на те вопросы, которые относятся к их непосредственным обязанностям и известным им фактам. Не следует подписывать пустые бланки или протоколы с формулировками, которые они не говорили.'
    },
    {
      q: 'Можно ли вести видеозапись действий сотрудников полиции на объекте?',
      a: 'Да, деятельность полиции является открытой для общества в той мере, в какой это не противоречит требованиям закона. Видеосъёмка действий проверяющих на производственной площадке дисциплинирует стороны и фиксирует возможные нарушения.'
    },
    {
      q: 'Что делать, если срок для ответа на запрос МВД составляет всего 1-2 дня?',
      a: 'Необходимо немедленно подать мотивированное ходатайство о продлении срока предоставления документов в связи со значительным объёмом и необходимостью архивного подбора, одновременно предоставив имеющуюся часть документов.'
    },
    {
      q: 'Стоит ли отвечать на устные телефонные звонки из миграционной службы?',
      a: 'Любое взаимодействие с государственными органами желательно переводить в письменную форму. Попросите направить официальный письменный запрос или повестку с указанием процессуального основания вызова.'
    },
    {
      q: 'Что делать, если проверяющие выявили факт работы иностранца без патента?',
      a: 'Не пытайтесь фальсифицировать документы задним числом. Необходимо установить, кем фактически был допущен сотрудник (возможно, подрядчиком), зафиксировать реальные обстоятельства и готовить позицию защиты по субъекту правонарушения.'
    },
    {
      q: 'Чем сопровождение проверки отличается от защиты по ст. 18.15 КоАП РФ?',
      a: 'Сопровождение проверки направлено на то, чтобы предотвратить нарушения при проверке и не допустить составления протокола. Защита по ст. 18.15 начинается, когда протокол уже составлен и дело направлено на рассмотрение или в суд.'
    },
    {
      q: 'Как быстро юрист может подключиться к ситуации в Липецке?',
      a: 'По телефону и мессенджерам консультация и правовой анализ документов начинаются немедленно. При необходимости очного участия выезд на объект в черте Липецка осуществляется в течение 40–60 минут.'
    }
  ];

  return (
    <main>
      <Header />

      {/* ═══ БЛОК 1: HERO ═══ */}
      <MilitaryHero
        breadcrumbs={
          <>
            <Link href="/">Главная</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/biznesu/">Бизнесу</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/biznesu/migracionnoe-soprovozhdenie-biznesa/">Миграционное сопровождение</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Юрист при проверке МВД</span>
          </>
        }
        superTitle={
          <span style={{ whiteSpace: 'normal', display: 'inline-block', lineHeight: 1.4 }}>
            <span style={{ display: 'inline-block' }}>ЭКСТРЕННАЯ ЮРИДИЧЕСКАЯ ПОМОЩЬ •</span> <br />
            <span style={{ display: 'inline-block' }}>Липецк и Липецкая область</span>
          </span>
        }
        title={
          <span style={{ display: 'block' }}>
            <span style={{ display: 'inline-block' }}>Юрист при миграционной</span> <br />
            <span style={{ display: 'inline-block', color: 'var(--color-gold)' }}>проверке МВД в Липецке</span>
          </span>
        }
        subtitle="Проверим основание и объём требований, организуем подготовку документов и пояснений, подключимся к взаимодействию с МВД и защитим компанию от незаконных претензий."
        trustItems={[
          'Оценим законность распоряжения, требования МВД и сроки ответа',
          'Организуем единый контролируемый канал общения с проверяющими',
          'Подготовим выверенные копии, опись, ответы и мотивированные возражения',
          'Срочно подключимся на объекте для фиксации процессуальных нарушений'
        ]}
        primaryCtaText="Срочно подключить юриста"
        primaryCtaLink="#form"
        secondaryCtaText="Что делать при визите"
        secondaryCtaLink="#urgent-action"
      />

      {/* ═══ ЭКСТРЕННЫЙ БЛОК: ЧТО ДЕЛАТЬ ПРИ ПРОВЕРКЕ ═══ */}
      <section id="urgent-action" style={{ background: 'var(--color-deep-blue)', color: '#ffffff', padding: '60px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span
              style={{
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--color-gold)',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}
            >
              ЭКСТРЕННЫЙ АЛГОРИТМ
            </span>
            <h2
              style={{
                fontSize: '30px',
                fontWeight: 800,
                color: '#ffffff',
                marginTop: '8px',
                marginBottom: '12px'
              }}
            >
              Сотрудники полиции уже на объекте? Что делать прямо сейчас
            </h2>
            <p style={{ fontSize: '15.5px', color: 'rgba(255,255,255,0.8)', maxWidth: '750px', margin: '0 auto' }}>
              Сохраняйте спокойствие. Не препятствуйте законным действиям сотрудников, но и не допускайте бесконтрольного опроса и изъятия документов.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px',
              marginBottom: '32px'
            }}
          >
            {urgentRules.map((rule, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderTop: '3px solid var(--color-gold)',
                  borderRadius: '10px',
                  padding: '24px'
                }}
              >
                <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-gold)', marginBottom: '8px' }}>
                  {rule.title}
                </div>
                <div style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.55 }}>
                  {rule.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Плашка срочного звонка */}
          <div
            style={{
              background: 'rgba(218, 165, 32, 0.15)',
              border: '1px solid var(--color-gold)',
              borderRadius: '10px',
              padding: '20px 28px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '20px'
            }}
          >
            <div>
              <div style={{ fontWeight: 700, fontSize: '18px', color: '#ffffff' }}>
                Требуется срочный выезд или консультация юриста?
              </div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', marginTop: '4px' }}>
                Прямая линия связи с дежурным юристом коллегии по миграционным проверкам в Липецке.
              </div>
            </div>
            <a
              href="tel:+74742201525"
              style={{
                background: 'var(--color-gold)',
                color: 'var(--color-deep-blue)',
                padding: '12px 28px',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '16px',
                textDecoration: 'none',
                whiteSpace: 'nowrap'
              }}
            >
              +7 (4742) 20-15-25
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 2: СИТУАЦИИ ═══ */}
      <section id="situations" style={{ padding: '60px 0', background: 'var(--color-bg-light)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span
              style={{
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--color-gold)',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}
            >
              СЦЕНАРИИ ВЗАИМОДЕЙСТВИЯ С МВД
            </span>
            <h2
              style={{
                fontSize: '32px',
                fontWeight: 800,
                color: 'var(--color-text-main)',
                marginTop: '8px',
                marginBottom: '12px'
              }}
            >
              С какими формами проверки сталкивается бизнес
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', maxWidth: '750px', margin: '0 auto' }}>
              Подключаемся на любой стадии: от получения первого письменного запроса до сопровождения рейдовых мероприятий на объекте.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px'
            }}
          >
            {situations.map((sit, idx) => (
              <div
                key={idx}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)',
                  padding: '28px',
                  borderRadius: '12px',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
                  border: '1px solid rgba(0,0,0,0.06)',
                  borderTop: '3px solid var(--color-gold)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-10px',
                    width: '70px',
                    height: '70px',
                    opacity: 0.04,
                    pointerEvents: 'none'
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                  </svg>
                </div>

                <div>
                  <div
                    style={{
                      display: 'inline-block',
                      fontSize: '11px',
                      fontWeight: 700,
                      color: 'var(--color-gold)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      background: 'rgba(218, 165, 32, 0.1)',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      marginBottom: '14px'
                    }}
                  >
                    {sit.tag}
                  </div>
                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      color: 'var(--color-text-main)',
                      marginBottom: '12px',
                      lineHeight: '1.3'
                    }}
                  >
                    {sit.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '14px',
                      color: 'var(--color-text-secondary)',
                      lineHeight: '1.5',
                      marginBottom: '20px'
                    }}
                  >
                    {sit.desc}
                  </p>
                </div>

                <a
                  href="#form"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--color-deep-blue)',
                    textDecoration: 'none',
                    borderBottom: '1px dashed var(--color-deep-blue)',
                    width: 'fit-content',
                    paddingBottom: '2px'
                  }}
                >
                  {sit.btnText} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: ЧТО ДЕЛАЕТ ЮРИСТ ═══ */}
      <section style={{ padding: '60px 0', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span
              style={{
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--color-gold)',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}
            >
              ПРАВОВОЙ КОНТРОЛЬ МЕРОПРИЯТИЙ
            </span>
            <h2
              style={{
                fontSize: '32px',
                fontWeight: 800,
                color: 'var(--color-text-main)',
                marginTop: '8px',
                marginBottom: '12px'
              }}
            >
              Действия юриста при сопровождении проверки
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', maxWidth: '750px', margin: '0 auto' }}>
              Контролируем каждый шаг проверяющих органов для защиты прав предприятия и исключения необоснованных претензий.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px'
            }}
          >
            <div style={{ background: 'var(--color-bg-light)', padding: '28px', borderRadius: '12px', borderLeft: '4px solid var(--color-gold)' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-text-main)', marginBottom: '10px' }}>
                Проверка оснований и полномочий
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Сверяем распоряжение о проверке, проверяем наличие подписи уполномоченного руководителя, срок проведения проверки и соответствие проверяемого объекта указанному в приказе.
              </p>
            </div>
            <div style={{ background: 'var(--color-bg-light)', padding: '28px', borderRadius: '12px', borderLeft: '4px solid var(--color-gold)' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-text-main)', marginBottom: '10px' }}>
                Контроль передачи материалов
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Формируем реестр выдаваемых документов, заверяем копии надлежащим образом и требуем расписку должностного лица с отметкой о дате и времени получения.
              </p>
            </div>
            <div style={{ background: 'var(--color-bg-light)', padding: '28px', borderRadius: '12px', borderLeft: '4px solid var(--color-gold)' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-text-main)', marginBottom: '10px' }}>
                Участие при даче объяснений
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Разъясняем сотрудникам положения ст. 51 Конституции РФ, пресекаем наводящие и искажающие вопросы инспекторов, вносим возражения непосредственно в протокол опроса.
              </p>
            </div>
            <div style={{ background: 'var(--color-bg-light)', padding: '28px', borderRadius: '12px', borderLeft: '4px solid var(--color-gold)' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-text-main)', marginBottom: '10px' }}>
                Письменные возражения на акт
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                При выявлении замечаний составляем аргументированные возражения на акт проверки с приложением подтверждающих документов до вынесения решения о возбуждении дела.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: КУРАТОР (SPECIALISTBLOCK) ═══ */}
      <SpecialistBlock
        title="Куратор направления — Дмитрий Сергеевич Конопкин"
        name="Дмитрий Сергеевич Конопкин"
        position={<>Адвокат, председатель Коллегии адвокатов «Де-Юре»,<br />куратор направления «Миграционное сопровождение бизнеса»</>}
        imageUrl="/images/konopkin.jpg"
        imagePosition="center 15%"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Дмитрий Сергеевич лично координирует правовую помощь при внеплановых проверках бизнеса: организует экстренный выезд, определяет границы полномочий проверяющих и контролирует соблюдение процессуального порядка.
          </span>,
          <div
            key="2"
            style={{
              borderLeft: '3px solid var(--color-gold)',
              paddingLeft: '16px',
              fontStyle: 'italic',
              fontSize: '14.5px',
              color: 'var(--color-deep-blue)',
              margin: '16px 0 0 0'
            }}
          >
            «Шесть лет работы в следственных органах СК РФ научили нас мгновенно оценивать законность действий правоохранителей. При проверке бизнеса решающее значение имеют первые часы: грамотная фиксация нарушений в акте проверки часто позволяет полностью прекратить производство до назначения штрафа».
          </div>,
          <ul key="3" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>Реестровый номер адвоката: 48/812 в реестре адвокатов Липецкой области</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>Защита прав юридических лиц и ИП при контрольно-надзорных мероприятиях МВД и полиции</span>
            </li>
          </ul>,
          <a key="4" href="/specialisty/konopkin-dmitriy-sergeevich/" style={{ display: 'inline-block', marginTop: '16px', fontSize: '14px', color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
            Подробнее о Дмитрии Конопкине →
          </a>
        ]}
        buttonText="Связаться по проверке"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 5: ЭТАПЫ РАБОТЫ ═══ */}
      <ProcessBlock
        title="Порядок работы юриста при проверке МВД"
        steps={processSteps}
      />

      {/* ═══ БЛОК 6: ЦЕНЫ ═══ */}
      <PricingBlock
        title="Стоимость сопровождения проверки"
        subtitle="Стоимость определяется в зависимости от формата (дистанционный ответ на запрос либо очный выезд на объект) и фиксируется в договоре."
        tiers={pricingTiers}
      />

      {/* ═══ БЛОК 7: КЕЙСЫ ═══ */}
      <CasesBlock
        title="Примеры сопровождения проверок"
        subtitle="Как участие юриста позволило защитить компании Липецка от административных штрафов"
        cases={practiceCases}
      />

      {/* ═══ БЛОК 8: FAQ ═══ */}
      <FAQBlock items={faqs} />

      {/* ═══ БЛОК 9: СВЯЗАННЫЕ УСЛУГИ ═══ */}
      <section style={{ padding: '60px 0', background: 'var(--color-bg-light)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2
            style={{
              fontSize: '26px',
              fontWeight: 800,
              color: 'var(--color-text-main)',
              marginBottom: '24px',
              textAlign: 'center'
            }}
          >
            Смежные услуги миграционного направления
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '16px'
            }}
          >
            <Link
              href="/biznesu/migracionnoe-soprovozhdenie-biznesa/zashchita-rabotodatelya-po-state-18-15-koap-rf/"
              style={{
                background: '#ffffff',
                padding: '20px',
                borderRadius: '8px',
                textDecoration: 'none',
                color: 'var(--color-text-main)',
                border: '1px solid rgba(0,0,0,0.06)',
                fontWeight: 600,
                fontSize: '15px',
                display: 'block'
              }}
            >
              Защита по ст. 18.15 КоАП РФ →
            </Link>
            <Link
              href="/biznesu/migracionnoe-soprovozhdenie-biznesa/migracionnyj-audit-rabotodatelya/"
              style={{
                background: '#ffffff',
                padding: '20px',
                borderRadius: '8px',
                textDecoration: 'none',
                color: 'var(--color-text-main)',
                border: '1px solid rgba(0,0,0,0.06)',
                fontWeight: 600,
                fontSize: '15px',
                display: 'block'
              }}
            >
              Миграционный аудит работодателя →
            </Link>
            <Link
              href="/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-pri-proverke-obep/"
              style={{
                background: '#ffffff',
                padding: '20px',
                borderRadius: '8px',
                textDecoration: 'none',
                color: 'var(--color-text-main)',
                border: '1px solid rgba(0,0,0,0.06)',
                fontWeight: 600,
                fontSize: '15px',
                display: 'block'
              }}
            >
              Защита при проверке ОБЭП →
            </Link>
            <Link
              href="/biznesu/migracionnoe-soprovozhdenie-biznesa/"
              style={{
                background: '#ffffff',
                padding: '20px',
                borderRadius: '8px',
                textDecoration: 'none',
                color: 'var(--color-text-main)',
                border: '1px solid rgba(0,0,0,0.06)',
                fontWeight: 600,
                fontSize: '15px',
                display: 'block'
              }}
            >
              Хаб: Миграционное сопровождение →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 10: ФОРМА И КОНТАКТЫ ═══ */}
      <section id="form" style={{ padding: '70px 0', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
              alignItems: 'start'
            }}
          >
            <div>
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  color: 'var(--color-gold)',
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}
              >
                СРОЧНАЯ ЮРИДИЧЕСКАЯ ПОМОЩЬ
              </span>
              <h2
                style={{
                  fontSize: '32px',
                  fontWeight: 800,
                  color: 'var(--color-text-main)',
                  marginTop: '8px',
                  marginBottom: '16px'
                }}
              >
                Подключите юриста к проверке МВД
              </h2>
              <p
                style={{
                  fontSize: '15px',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '24px'
                }}
              >
                Укажите, что именно произошло: получен письменный запрос или сотрудники полиции уже находятся на объекте. Обращение передаётся дежурному специалисту немедленно.
              </p>
              <div
                style={{
                  background: 'var(--color-bg-light)',
                  padding: '20px',
                  borderRadius: '8px',
                  borderLeft: '4px solid var(--color-gold)',
                  marginBottom: '24px'
                }}
              >
                <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--color-deep-blue)' }}>
                  Если проверка идёт прямо сейчас
                </div>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>
                  Звоните по прямому номеру для экстренной связи: <strong>+7 (4742) 20-15-25</strong>. Юрист даст первые инструкции и организует выезд.
                </div>
              </div>
              <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
                Офис в Липецке: <strong>ул. Советская, д. 35, оф. 213</strong>
                <br />
                Телефон для связи: <strong>+7 (4742) 20-15-25</strong>
              </div>
            </div>

            <div
              style={{
                background: 'var(--color-bg-light)',
                padding: '32px',
                borderRadius: '12px',
                border: '1px solid rgba(0,0,0,0.08)'
              }}
            >
              <ContactsForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
