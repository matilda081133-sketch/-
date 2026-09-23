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
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Юрист при миграционной
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              проверке МВД в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '760px', textWrap: 'balance' }}>
            Проверим основание и объём требований, организуем подготовку документов и пояснений, подключимся к взаимодействию с МВД и защитим компанию от незаконных претензий.
          </span>
        }
        primaryCtaText="Срочно подключить юриста"
        primaryCtaLink="#form"
        primaryCtaSubtext={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Конфиденциальный звонок куратору направления:
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (4742) 20-15-25</a>
            </span>
          </span>
        }
        secondaryCtaText="Что делать при визите"
        secondaryCtaLink="#urgent-action"
        imageUrl="/images/konopkin.jpg"
        imageName="Дмитрий Сергеевич Конопкин"
        imageSubtitle="Адвокат, председатель Коллегии адвокатов «Де-Юре», куратор направления «Миграционное сопровождение бизнеса»"
        imageObjectPosition="center 15%"
        trustItems={[
          {
            text: (
              <span>
                <strong>Оценим законность распоряжения</strong>, требования МВД и сроки ответа
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Организуем единый контролируемый</strong> канал общения с проверяющими
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Подготовим выверенные копии</strong>, опись, ответы и мотивированные возражения
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Срочно подключимся на объекте</strong> для фиксации процессуальных нарушений
              </span>
            )
          }
        ]}
      />

      {/* ═══ ЭКСТРЕННЫЙ БЛОК: ЧТО ДЕЛАТЬ ПРИ ПРОВЕРКЕ (#URGENT-ACTION) ═══ */}
      <section style={{ background: 'var(--color-deep-blue)', padding: '64px 0 56px', position: 'relative', overflow: 'hidden' }} id="urgent-action">
        <div className="container">
          <div style={{ maxWidth: '800px', marginBottom: '36px' }}>
            <div
              style={{
                fontSize: '12.5px',
                fontWeight: 700,
                color: 'var(--color-gold)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '12px'
              }}
            >
              ЭКСТРЕННЫЙ АЛГОРИТМ
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontFamily: 'var(--font-serif)', color: '#FFFFFF', marginBottom: '12px', marginTop: 0, lineHeight: 1.25 }}>
              <span style={{ display: 'inline-block' }}>Сотрудники полиции уже на объекте?</span> <br />
              <span style={{ display: 'inline-block' }}>Что делать прямо сейчас</span>
            </h2>
            <div style={{ width: '60px', height: '2px', background: 'var(--color-gold)', margin: '16px 0' }} />
            <p style={{ fontSize: '16px', color: '#E8ECF1', lineHeight: 1.65, margin: 0 }}>
              Сохраняйте спокойствие. Не препятствуйте законным действиям сотрудников, но и не допускайте бесконтрольного опроса и изъятия документов.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '20px', marginBottom: '36px' }}>
            {urgentRules.map((rule, idx) => (
              <div
                key={idx}
                className="urgent-card"
                style={{
                  background: 'linear-gradient(135deg, #FAF7F2 0%, #F3ECDF 100%)',
                  padding: '30px 24px',
                  borderTop: '4px solid var(--color-gold)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B08D57" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <div style={{ fontSize: '16.5px', fontWeight: 700, color: 'var(--color-deep-blue)', lineHeight: 1.35, fontFamily: 'var(--font-serif)' }}>
                      {rule.title}
                    </div>
                  </div>
                  <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '14px', lineHeight: 1.55, margin: 0 }}>
                    {rule.desc}
                  </p>
                </div>
              </div>
            ))}
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
            <span style={{ display: 'inline-block' }}>
              <strong style={{ color: '#FFFFFF' }}>Требуется срочный выезд или консультация юриста?</strong> Прямая линия связи с дежурным юристом коллегии по миграционным проверкам в Липецке.
            </span>
          </div>

          <style dangerouslySetInnerHTML={{__html: `
            .urgent-card {
              transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
            }
            .urgent-card:hover {
              transform: translateY(-6px);
              box-shadow: 0 18px 36px rgba(0,0,0,0.28) !important;
            }
            .btn-urgent-outline {
              border: 1px solid rgba(255,255,255,0.8) !important;
              color: #FFFFFF !important;
              background: transparent !important;
              text-decoration: none !important;
              font-weight: 600;
              transition: all 0.3s ease !important;
            }
            .btn-urgent-outline:hover {
              background: rgba(255,255,255,0.15) !important;
              border-color: #FFFFFF !important;
              color: #FFFFFF !important;
            }
            .btn-urgent-call {
              transition: all 0.3s ease !important;
            }
            .btn-urgent-call:hover {
              background: #d4af37 !important;
              transform: translateY(-1px);
            }
          `}} />

          {/* Плашка срочной связи */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: '16px',
            flexWrap: 'wrap'
          }}>
            <a href="tel:+74742201525" style={{
              color: 'var(--color-gold)',
              fontSize: '20px',
              fontWeight: 700,
              textDecoration: 'none',
              fontFamily: 'var(--font-serif)',
              letterSpacing: '0.02em',
              marginRight: '8px'
            }}>
              +7 (4742) 20-15-25
            </a>
            <a
              href="tel:+74742201525"
              className="btn btn-urgent-call"
              style={{
                background: 'var(--color-gold)',
                color: 'var(--color-deep-blue)',
                fontWeight: 700,
                padding: '12px 24px',
                fontSize: '14px',
                textDecoration: 'none',
                display: 'inline-block'
              }}
            >
              Вызвать юриста на проверку
            </a>
            <a
              href="#form"
              className="btn btn-urgent-outline"
              style={{
                padding: '12px 24px',
                fontSize: '14px',
                display: 'inline-block'
              }}
            >
              Срочная защита
            </a>
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginLeft: '4px' }}>
              Прямая линия связи с дежурным юристом коллегии в Липецке
            </span>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 2: СИТУАЦИИ (ШАБЛОН «СИТУАЦИИ») ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <div
              style={{
                fontSize: '12.5px',
                fontWeight: 700,
                color: 'var(--color-gold)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '12px'
              }}
            >
              СЦЕНАРИИ ВЗАИМОДЕЙСТВИЯ С МВД
            </div>
            <h2
              className="with-accent"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px, 4vw, 42px)',
                color: 'var(--color-deep-blue)',
                marginBottom: '16px',
                marginTop: 0,
                lineHeight: 1.2,
                textAlign: 'left'
              }}
            >
              <span style={{ display: 'inline-block' }}>С какими формами проверки</span> <br />
              <span style={{ display: 'inline-block' }}>сталкивается бизнес</span>
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: 'var(--color-text-secondary)',
                fontWeight: 400,
                lineHeight: 1.6,
                margin: 0,
                textAlign: 'left',
                textWrap: 'balance'
              }}
            >
              Подключаемся на любой стадии: от получения первого письменного запроса до сопровождения рейдовых мероприятий на объекте.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '32px' }}>
            {situations.map((sit, idx) => (
              <div
                key={idx}
                className="card hover-lift"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-gold)',
                  borderRadius: '0',
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '-15px',
                    right: '-15px',
                    width: '90px',
                    height: '90px',
                    opacity: 0.04,
                    pointerEvents: 'none',
                    color: 'var(--color-deep-blue)'
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                  </svg>
                </div>

                <div>
                  {sit.tag && (
                    <div
                      style={{
                        fontSize: '11.5px',
                        fontWeight: 700,
                        color: 'var(--color-primary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        marginBottom: '12px',
                        background: 'rgba(23, 50, 77, 0.06)',
                        padding: '3px 8px',
                        display: 'inline-block',
                        borderRadius: '2px'
                      }}
                    >
                      {sit.tag}
                    </div>
                  )}

                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '18px',
                      fontWeight: 600,
                      color: 'var(--color-deep-blue)',
                      margin: '0 0 12px 0',
                      lineHeight: 1.35
                    }}
                  >
                    {sit.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '14px',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.6,
                      margin: 0
                    }}
                  >
                    {sit.desc}
                  </p>
                </div>

                <div style={{ marginTop: '20px' }}>
                  <a
                    href="#form"
                    className="situation-btn"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: 'var(--color-primary)',
                      fontSize: '13.5px',
                      fontWeight: 600,
                      textDecoration: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--color-gold)';
                      const svg = e.currentTarget.querySelector('svg');
                      if (svg) {
                        svg.style.transform = 'translateX(4px)';
                        svg.style.stroke = 'var(--color-gold)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--color-primary)';
                      const svg = e.currentTarget.querySelector('svg');
                      if (svg) {
                        svg.style.transform = 'translateX(0)';
                        svg.style.stroke = 'currentColor';
                      }
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById('form');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                      else window.location.hash = 'form';
                    }}
                  >
                    <span>{sit.btnText}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.25s ease, stroke 0.25s ease' }}>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Баннер «Не нашли свою ситуацию?» */}
          <div
            style={{
              background: 'linear-gradient(135deg, var(--color-deep-blue) 0%, #17324D 100%)',
              padding: '40px 48px',
              borderTop: '3px solid var(--color-gold)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '32px',
              flexWrap: 'wrap',
              boxShadow: '0 12px 30px rgba(11, 28, 42, 0.15)'
            }}
          >
            <style dangerouslySetInnerHTML={{ __html: `
              .white-btn-custom {
                background-color: var(--color-white) !important;
                color: #10273B !important;
                border: 1px solid var(--color-white) !important;
                white-space: nowrap;
                font-weight: 600;
                padding: 14px 28px !important;
                transition: all 0.3s ease !important;
              }
              .white-btn-custom:hover {
                background-color: var(--color-gold) !important;
                color: var(--color-deep-blue) !important;
                border-color: var(--color-gold) !important;
              }
            `}} />
            <div style={{ flex: '1 1 500px', minWidth: '280px' }}>
              <h3 style={{ margin: '0 0 12px 0', fontSize: '26px', fontFamily: 'var(--font-serif)', color: '#FFFFFF', lineHeight: 1.3 }}>
                Не нашли свою ситуацию?
              </h3>
              <p style={{ margin: 0, fontSize: '15px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6 }}>
                <span style={{ display: 'inline-block' }}>Проверяющие органы уже выставили требования или прибыли на объект?</span> <br />
                <span style={{ display: 'inline-block' }}>Опишите обстоятельства — юрист подключится к защите немедленно.</span>
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
                  whiteSpace: 'nowrap'
                }}
              >
                Описать ситуацию
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: ЧТО ДЕЛАЕТ ЮРИСТ (#CONTROL) ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <div
              style={{
                fontSize: '12.5px',
                fontWeight: 700,
                color: 'var(--color-gold)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '12px'
              }}
            >
              ПРАВОВОЙ КОНТРОЛЬ МЕРОПРИЯТИЙ
            </div>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.25, textAlign: 'left' }}>
              <span style={{ display: 'inline-block' }}>Действия юриста при</span> <br />
              <span style={{ display: 'inline-block' }}>сопровождении проверки</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Контролируем каждый шаг проверяющих органов для защиты прав предприятия и исключения необоснованных претензий.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '24px' }}>
            {[
              {
                num: '01',
                title: 'Проверка оснований и полномочий',
                desc: 'Сверяем распоряжение о проверке, проверяем наличие подписи уполномоченного руководителя, срок проведения проверки и соответствие проверяемого объекта указанному в приказе.'
              },
              {
                num: '02',
                title: 'Контроль передачи материалов',
                desc: 'Формируем реестр выдаваемых документов, заверяем копии надлежащим образом и требуем расписку должностного лица с отметкой о дате и времени получения.'
              },
              {
                num: '03',
                title: 'Участие при даче объяснений',
                desc: 'Разъясняем сотрудникам положения ст. 51 Конституции РФ, пресекаем наводящие и искажающие вопросы инспекторов, вносим возражения непосредственно в протокол опроса.'
              },
              {
                num: '04',
                title: 'Письменные возражения на акт',
                desc: 'При выявлении замечаний составляем аргументированные возражения на акт проверки с приложением подтверждающих документов до вынесения решения о возбуждении дела.'
              }
            ].map((item, idx) => (
              <div
                key={idx}
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
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '8px 0 14px 0', lineHeight: 1.35 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
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
        subtitle="При миграционной проверке важны скорость и единый порядок действий. Сразу определяем стадию, контролируем передачу документов и фиксируем процессуально значимые обстоятельства."
        steps={processSteps}
      />

      {/* ═══ БЛОК 6: ЦЕНЫ ═══ */}
      <PricingBlock
        pageUrl="https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/yurist-pri-migracionnoj-proverke-mvd/"
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
              <ContactsForm
              customFields={
                <>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="company" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-deep-blue)' }}>Компания (необязательно)</label>
                    <input type="text" id="company" name="company" placeholder="ООО «Компания»" style={{ padding: '14px 16px', border: '1px solid rgba(23, 50, 77, 0.2)', borderRadius: '0', fontSize: '15px', outline: 'none', background: 'var(--color-white)', color: 'var(--color-deep-blue)', fontFamily: 'inherit' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="inspection_stage" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-deep-blue)' }}>Стадия</label>
                    <select id="inspection_stage" name="inspection_stage" defaultValue="получен запрос" style={{ padding: '14px 16px', border: '1px solid rgba(23, 50, 77, 0.2)', borderRadius: '0', fontSize: '15px', outline: 'none', background: 'var(--color-white)', color: 'var(--color-deep-blue)', fontFamily: 'inherit' }}>
                      <option value="получен запрос">Получен запрос</option>
                      <option value="вызвали в МВД">Вызвали в МВД</option>
                      <option value="сотрудники на объекте">Сотрудники на объекте</option>
                      <option value="проверяют работников">Проверяют работников</option>
                      <option value="составляют протокол">Составляют протокол</option>
                    </select>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="event_datetime" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-deep-blue)' }}>Дата и время события</label>
                    <input type="text" id="event_datetime" name="event_datetime" placeholder="Например: сегодня в 14:00 или 25.09" style={{ padding: '14px 16px', border: '1px solid rgba(23, 50, 77, 0.2)', borderRadius: '0', fontSize: '15px', outline: 'none', background: 'var(--color-white)', color: 'var(--color-deep-blue)', fontFamily: 'inherit' }} />
                  </div>
                </>
              }
              buttonText="Подключить юриста"
              commentLabel="Комментарий (необязательно)"
            />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
