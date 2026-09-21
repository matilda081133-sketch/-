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

export default function ZashchitaPriProverkeObepClient() {
  const obepSituations = [
    {
      tag: 'Запрос документов',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Поступил запрос из ОБЭП</span> <br />
          <span style={{ display: 'inline-block' }}>или полиции</span>
        </span>
      ),
      desc: 'Проверим орган, основание обращения, полномочия должностного лица, срок и объём запрашиваемых документов, после чего подготовим позицию по ответу.',
      btnText: 'Проверить запрос'
    },
    {
      tag: 'Вызов директора',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Вызов генерального директора</span> <br />
          <span style={{ display: 'inline-block' }}>для дачи объяснений</span>
        </span>
      ),
      desc: 'Подготовим правовую позицию, снимем риски самооговора и обеспечим участие адвоката при опросе оперативными сотрудниками.',
      btnText: 'Подготовить директора'
    },
    {
      tag: 'Опрос главбуха',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Вызов главного бухгалтера</span> <br />
          <span style={{ display: 'inline-block' }}>или финансового директора</span>
        </span>
      ),
      desc: 'Вопросы о расчётах, цепочках поставщиков и НДС. Разграничим ответственность и предотвратим квалификацию по налоговым статьям.',
      btnText: 'Защита бухгалтера'
    },
    {
      tag: 'Опрос персонала',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Опрос сотрудников компании</span> <br />
          <span style={{ display: 'inline-block' }}>на рабочих местах или в ОВД</span>
        </span>
      ),
      desc: 'Инструктаж сотрудников о процессуальных правах, ст. 51 Конституции РФ и правилах поведения при психологическом давлении.',
      btnText: 'Инструктаж персонала'
    },
    {
      tag: 'Встречная проверка',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Проверка по контрагенту</span> <br />
          <span style={{ display: 'inline-block' }}>или субподрядчику</span>
        </span>
      ),
      desc: 'Запрос связан с расследованием в отношении вашего партнёра. Важно предоставить документы так, чтобы претензии не перешли на вашу компанию.',
      btnText: 'Оценить риски'
    },
    {
      tag: 'Осмотр офиса',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Гласное обследование помещений</span> <br />
          <span style={{ display: 'inline-block' }}>в рамках закона об ОРД</span>
        </span>
      ),
      desc: 'Оперативники пришли в офис или на склад. Контролируем полномочия, состав распоряжения, действия понятых и изъятие носителей.',
      btnText: 'Срочный выезд'
    },
    {
      tag: 'Угроза дела',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Угроза возбуждения</span> <br />
          <span style={{ display: 'inline-block' }}>уголовного дела (КУСП)</span>
        </span>
      ),
      desc: 'Доследственная проверка подходит к завершению. Срочно подаём мотивированные ходатайства и контрдоказательства отсутствия состава.',
      btnText: 'Предотвратить дело'
    },
    {
      tag: 'Превышение полномочий',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Нарушение прав бизнеса</span> <br />
          <span style={{ display: 'inline-block' }}>сотрудниками полиции</span>
        </span>
      ),
      desc: 'Незаконное удержание имущества, угрозы или воспрепятствование законной деятельности компании. Подготовим жалобы в прокуратуру и УСБ.',
      btnText: 'Обжаловать действия'
    }
  ];

  const urgentRisks = [
    {
      title: 'Спонтанные объяснения и передача лишних документов',
      desc: 'Первые показания, данные без консультации юриста, фиксируются в протоколах опроса и становятся ключевым доказательством обвинения.'
    },
    {
      title: 'Проведение «обследования» под видом обыска',
      desc: 'Гласное обследование в рамках ОРД имеет строгие ограничения. Без адвоката силовики часто проводят фактический обыск без судебного решения.'
    },
    {
      title: 'Игнорирование сроков ответа на запросы',
      desc: 'Необоснованный отказ грозит штрафами и силовым визитом, а бесконтрольная передача коммерческих тайн ставит компанию под удар.'
    }
  ];

  const obepContours = [
    {
      num: '01',
      title: 'Анализ законности запроса ОБЭП',
      desc: 'Проверяем наличие зарегистрированного материала КУСП, обоснованность ссылок на закон «О полиции» и «Об ОРД», а также пределы полномочий органа.'
    },
    {
      num: '02',
      title: 'Фильтрация предоставляемых документов',
      desc: 'Исключаем передачу избыточных файлов, черновиков, личной переписки и документов, не относящихся к предмету проверки, подготавливая заверенные копии по описи.'
    },
    {
      num: '03',
      title: 'Подготовка руководства и сотрудников к опросам',
      desc: 'Разбираем возможные провокационные вопросы оперативников, разъясняем ст. 51 Конституции РФ и выстраиваем фактологически непротиворечивую позицию.'
    },
    {
      num: '04',
      title: 'Очное участие адвоката при следственных действиях',
      desc: 'Адвокат сопровождает директора и сотрудников на опросах в отделе полиции, пресекает давление и фиксирует любые процессуальные отклонения.'
    },
    {
      num: '05',
      title: 'Внесение замечаний и оперативное обжалование',
      desc: 'При выявлении нарушений незамедлительно подаём жалобы вышестоящему руководству МВД, в прокуратуру Липецкой области и суд.'
    },
    {
      num: '06',
      title: 'Предотвращение возбуждения уголовного дела',
      desc: 'Своевременно представляем доказательства добросовестности компании, экономической обоснованности сделок и отсутствия признаков преступления.'
    }
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Первичная оценка запроса и стадии проверки',
      desc: 'Изучаем запрос, повестку или другие полученные документы. Определяем основание обращения, статус участников и первоочередные действия.'
    },
    {
      num: '02',
      title: 'Выработка инструкций и ограничение утечек',
      desc: 'Даём руководству и бухгалтерии четкие правила коммуникации с оперативниками и регламент сбора запрошенной информации.'
    },
    {
      num: '03',
      title: 'Формирование письменной позиции и ответа',
      desc: 'Составляем мотивированный ответ на запрос с приложением строго необходимого объёма заверенных копий документов.'
    },
    {
      num: '04',
      title: 'Сопровождение вызовов и следственных действий',
      desc: 'При необходимости организуем участие адвоката в тех действиях, для которых оно предусмотрено законом и согласованным объёмом помощи.'
    },
    {
      num: '05',
      title: 'Сопровождаем проверку до принятия процессуального решения',
      desc: 'Контролируем сроки и документы, готовим ходатайства, пояснения и возражения, оцениваем принятое решение и дальнейший порядок защиты. Конкретный результат зависит от материалов проверки и решения уполномоченного органа.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Правовой анализ запроса ОБЭП',
      subtitle: 'Оценка требований и подготовка ответа',
      popular: false,
      price: 'от 20 000 ₽',
      features: [
        { name: 'Правовая экспертиза обоснованности запроса', value: 'Включено' },
        { name: 'Определение безопасного перечня документов', value: 'Включено' },
        { name: 'Подготовка мотивированного ответа в ОВД', value: 'Включено' },
        { name: 'Инструктаж контактного лица компании', value: 'Включено' }
      ],
      buttonText: 'Заказать ответ на запрос',
      buttonHref: '#form'
    },
    {
      title: 'Сопровождение опроса / вызова',
      subtitle: 'Очное участие адвоката в полиции',
      popular: true,
      badgeText: 'Популярно',
      price: 'от 35 000 ₽',
      features: [
        { name: 'Предварительная подготовка доверителя к опросу', value: 'Включено' },
        { name: 'Выезд адвоката в отдел полиции / ОБЭП', value: 'Включено' },
        { name: 'Участие в даче объяснений и контроль протокола', value: 'Включено' },
        { name: 'Пресечение психологического давления силовиков', value: 'Включено' }
      ],
      buttonText: 'Привлечь адвоката',
      buttonHref: '#form'
    },
    {
      title: 'Комплексная защита при проверке',
      subtitle: 'Полное ведение доследственной проверки КУСП',
      popular: false,
      price: 'от 75 000 ₽',
      features: [
        { name: 'Неограниченное число выездов адвокатов', value: 'Включено' },
        { name: 'Подготовка всех ответов, возражений и ходатайств', value: 'Включено' },
        { name: 'Сопровождение всех опросов руководства и штата', value: 'Включено' },
        { name: 'Достижение постановления об отказе в возбуждении', value: 'Включено' }
      ],
      buttonText: 'Комплексная защита',
      buttonHref: '#form'
    }
  ];

  const practiceCases: CaseData[] = [
    {
      category: 'Запрос документов',
      title: 'Предотвращение необоснованного изъятия финансовой базы холдинга',
      problem: 'УЭБиПК запросило полную базу 1С, электронную переписку и договоры за 3 года по анонимному сообщению о неуплате налогов.',
      action: 'Подготовили мотивированный ответ с указанием на отсутствие в запросе данных о зарегистрированном КУСП и ссылок на конкретные составы. Предоставили локальную выписку по конкретной сделке.',
      result: 'Оперативники удовлетворились полученными материалами, повторных запросов и визитов в компанию не последовало.'
    },
    {
      category: 'Вызов на опрос',
      title: 'Защита директора агрокомплекса от обвинений в нецелевом расходовании субсидии',
      problem: 'Руководителя предприятия вызвали в ОБЭП для дачи объяснений по поводу использования региональной субсидии на покупку семян.',
      action: 'Адвокат подготовил руководителя к опросу, собрал платежные поручения, акты посевной кампании и заключение агроэксперта. Сопроводил опрос в ОБЭП.',
      result: 'Проверка завершена вынесением постановления об отказе в возбуждении уголовного дела.'
    },
    {
      category: 'Обследование помещений',
      title: 'Пресечение незаконного изъятия компьютерной техники при обследовании офиса',
      problem: 'Оперативники прибыли с распоряжением на гласное обследование и попытались демонтировать системные блоки бухгалтерии.',
      action: 'Срочно прибывший юрист указал на отсутствие права на неизбирательное изъятие оргтехники без копирования данных на месте, предусмотренного ст. 15 закона об ОРД.',
      result: 'Техника оставлена в офисе, информация скопирована на предоставленный диск, работа компании не прекращалась.'
    }
  ];

    const faqs = [
    {
      q: 'Что означает вызов в ОБЭП?',
      a: 'Нужно установить, какое подразделение обращается, в связи с каким материалом, в каком качестве приглашают человека и каким документом оформлен вызов. От этого зависят права, порядок подготовки и необходимость участия адвоката.'
    },
    {
      q: 'Обязана ли компания отвечать на любой запрос полиции?',
      a: 'Обязанность, срок и объём ответа зависят от полномочий органа, основания, стадии и содержания запроса. Документ нужно оценивать конкретно; устное требование и официальный процессуальный документ не равнозначны.'
    },
    {
      q: 'Можно ли не передавать часть запрошенных документов?',
      a: 'Нельзя давать универсальный ответ без запроса и материалов. Юрист проверяет относимость, правовое основание, наличие охраняемой законом информации и допустимый порядок предоставления.'
    },
    {
      q: 'Что делать, если документы требуют срочно?',
      a: 'Зафиксировать запрос и срок, уведомить ответственного руководителя и юриста, определить предмет проверки и не отправлять несистематизированный массив до оценки основания и состава ответа.'
    },
    {
      q: 'Могут ли вызвать сотрудника без официальной повестки?',
      a: 'Способы приглашения и правовые последствия различаются. Важно уточнить подразделение, должностное лицо, цель, статус и форму предстоящего действия, а затем определить порядок участия.'
    },
    {
      q: 'Нужен ли адвокат при даче объяснений?',
      a: 'Это зависит от статуса человека, содержания вопросов и риска для него и компании. Команда сначала оценивает ситуацию; когда требуется процессуальная защита, подключается адвокат.'
    },
    {
      q: 'Чем объяснение отличается от допроса?',
      a: 'Это разные по правовой форме действия. Участнику необходимо заранее понимать свой статус, права, порядок фиксации сведений и последствия подписания документа.'
    },
    {
      q: 'Что делать, если проверяют контрагента?',
      a: 'Собрать договоры, подтверждение исполнения, переписку и платежи, установить роль сотрудников и проверить, какие сведения компания уже передавала. Проверка контрагента может затронуть собственные операции компании.'
    },
    {
      q: 'Может ли проверка ОБЭП закончиться уголовным делом?',
      a: 'По результатам проверки принимается предусмотренное законом решение. Риск зависит от собранных материалов и обстоятельств; задача юридической помощи — оценить стадию, подготовить позицию и обеспечить законную защиту, а не обещать конкретный исход.'
    },
    {
      q: 'Какие документы нужны для консультации?',
      a: 'Полезны запрос или повестка, сведения о звонках и переписке, документы по проверяемой сделке, платежи, налоговые материалы и ранее данные объяснения. Если комплект неполный, юрист определит, что необходимо получить первым.'
    }
  ];

    const relatedServices = [
    {
      title: 'Защита при обыске и выемке в компании',
      desc: 'Контроль соблюдения процедуры, фиксация нарушений, защита цифровой инфраструктуры компании.',
      link: '/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-pri-obyske-v-kompanii/'
    },
    {
      title: 'Уголовно-правовой аудит бизнеса',
      desc: 'Превентивная проверка хозяйственных операций, договоров и решений на предмет уголовных рисков.',
      link: '/biznesu/ugolovno-pravovaya-zashchita-biznesa/ugolovno-pravovoj-audit-biznesa/'
    },
    {
      title: 'Защита по экономическим преступлениям',
      desc: 'Защита руководителей и собственников по обвинениям в мошенничестве, растрате и злоупотреблениях.',
      link: '/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-ekonomicheskim-prestupleniyam/'
    },
    {
      title: 'Защита по налоговым преступлениям',
      desc: 'Защита при доследственных проверках СК РФ и уголовных делах по статьям 199–199.2 УК РФ.',
      link: '/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-nalogovym-prestupleniyam/'
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
            <Link href="/biznesu/ugolovno-pravovaya-zashchita-biznesa/">Уголовно-правовая защита бизнеса</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Защита при проверке ОБЭП</span>
          </>
        }
        superTitle={
          <span style={{ whiteSpace: 'normal', display: 'inline-block', lineHeight: 1.4 }}>
            <span style={{ display: 'inline-block' }}>ДОСЛЕДСТВЕННАЯ ПРОВЕРКА И ОПРОСЫ •</span> <br />
            <span style={{ display: 'inline-block' }}>Липецк и Липецкая область</span>
          </span>
        }
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Защита бизнеса при
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              проверке ОБЭП в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '760px', textWrap: 'balance' }}>
            Анализируем запросы документов, готовим руководителей и сотрудников к опросам, сопровождаем проверочные действия и выстраиваем единую позицию компании на стадии доследственной проверки.
          </span>
        }
        primaryCtaText="Обсудить проверку ОБЭП"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_primary_cta_obep"
        primaryCtaSubtext={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Срочный выезд адвоката в отдел полиции:
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (910) 350-31-11</a>
            </span>
          </span>
        }
        imageUrl="/images/bobkin.jpg"
        imageName="Аркадий Евгеньевич Бобкин"
        imageSubtitle="Директор, управляющий партнёр ЮК «Де-Юре», куратор направления"
        imageObjectPosition="center 15%"
        trustItems={[
          {
            text: (
              <span>
                <strong>Подключаемся после получения запроса,</strong> вызова или информации о проверке контрагента
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Анализ обоснованности запросов</strong> и защита от изъятия лишних данных
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Инструктаж топ-менеджеров</strong> и персонала перед дачей показаний
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>При необходимости организуем участие адвоката</strong> в тех действиях, для которых оно предусмотрено законом и согласованным объёмом помощи
              </span>
            )
          }
        ]}
      />

      {/* ═══ БЛОК 2: СИТУАЦИИ (#SITUATIONS) ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>С какими действиями ОБЭП</span> <br />
              <span style={{ display: 'inline-block' }}>столкнулась компания</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textWrap: 'balance' }}>
              Выберите сценарий проверки. На стадии КУСП каждый документ и сказанное слово имеют решающее значение для будущего компании.
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '24px', marginBottom: '32px' }}>
            {obepSituations.map((item, i) => (
              <div
                key={i}
                className="card hover-lift"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-gold)',
                  borderRadius: '0',
                  padding: '28px 22px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 16px rgba(23, 50, 77, 0.05)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '-15px',
                  width: '90px',
                  height: '90px',
                  opacity: 0.04,
                  pointerEvents: 'none',
                  color: 'var(--color-deep-blue)'
                }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>

                <div>
                  <div style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: 'var(--color-primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '10px',
                    background: 'rgba(23, 50, 77, 0.06)',
                    padding: '2px 6px',
                    display: 'inline-block'
                  }}>
                    {item.tag}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '17px', fontWeight: 600, color: 'var(--color-deep-blue)', margin: '0 0 10px 0', lineHeight: 1.3 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
                <a
                  href="#form"
                  className="situation-btn"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--color-primary)',
                    fontSize: '13px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    marginTop: '16px',
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
                  <span>{item.btnText}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.25s ease, stroke 0.25s ease' }}>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: КОГДА НЕЛЬЗЯ ЗАТЯГИВАТЬ (#URGENT) ═══ */}
      <section style={{ background: 'var(--color-deep-blue)', padding: '64px 0 56px', position: 'relative', overflow: 'hidden' }} id="urgent">
        <div className="container">
          <div style={{ maxWidth: '800px', marginBottom: '36px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontFamily: 'var(--font-serif)', color: '#FFFFFF', marginBottom: '12px', marginTop: 0, lineHeight: 1.25 }}>
              <span style={{ display: 'inline-block' }}>Риски затягивания</span> <br />
              <span style={{ display: 'inline-block' }}>на стадии проверки ОБЭП</span>
            </h2>
            <div style={{ width: '60px', height: '2px', background: 'var(--color-gold)', margin: '16px 0' }} />
            <p style={{ fontSize: '16px', color: '#E8ECF1', lineHeight: 1.65, margin: 0 }}>
              Доследственная проверка длится от 3 до 30 дней. Позиция, зафиксированная в этот период, ложится в основу постановления о возбуждении уголовного дела.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '20px', marginBottom: '36px' }}>
            {urgentRisks.map((risk, idx) => (
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
                      {risk.title}
                    </div>
                  </div>
                  <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '14px', lineHeight: 1.55, margin: 0 }}>
                    {risk.desc}
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
              <strong style={{ color: '#FFFFFF' }}>Срочно вызвали на опрос в полицию?</strong> Не ходите в ОВД в одиночку. Подключите адвоката до подписания объяснений.
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
              font-weight: 600 !important;
              transition: all 0.3s ease !important;
              border-radius: 0 !important;
              display: inline-block !important;
            }
            .btn-urgent-outline:hover {
              background: rgba(255,255,255,0.18) !important;
              color: #FFFFFF !important;
              border-color: #FFFFFF !important;
            }
            .btn-urgent-call {
              display: inline-block !important;
              border-radius: 0 !important;
              text-decoration: none !important;
              background-color: var(--color-gold) !important;
              color: var(--color-deep-blue) !important;
              font-weight: 700 !important;
              transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
              border: 1px solid var(--color-gold) !important;
            }
            .btn-urgent-call:hover {
              background-color: #FFFFFF !important;
              color: #0B1C2A !important;
              border-color: #FFFFFF !important;
              transform: translateY(-2px);
            }
          `}} />

          {/* Зона связи */}
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.15)',
            paddingTop: '28px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px',
            flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <a href="tel:+79103503111" style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.02em' }} data-analytics="phone_click">
                +7 (910) 350-31-11
              </a>
              <a href="tel:+79103503111" className="btn-urgent-call" style={{ padding: '14px 28px', fontSize: '15px' }} data-analytics="phone_click">
                Позвонить юристу
              </a>
              <a href="#form" className="btn btn-urgent-outline" style={{ padding: '14px 28px', fontSize: '15px' }}>
                Вызвать адвоката
              </a>
            </div>
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
              Защита при проверках ОБЭП и вызовах на опросы
            </span>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: СОСТАВ ЮРИДИЧЕСКОЙ ПОМОЩИ (КАНОНИЧЕСКИЙ ШАБЛОН #CHECK) ═══ */}
      <section className="section bg-white" id="check" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.25 }}>
              <span style={{ display: 'inline-block' }}>Состав юридической помощи</span> <br />
              <span style={{ display: 'inline-block' }}>при проверках ОБЭП</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Обеспечиваем защиту интересов компании на каждом этапе взаимодействия с оперативными сотрудниками.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', position: 'relative', marginBottom: '40px' }}>
            {obepContours.map((item, idx) => (
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

      {/* ═══ БЛОК 5: ЭТАПЫ (PROCESSBLOCK) ═══ */}
      <ProcessBlock
        title="Порядок работы при проверке ОБЭП"
        subtitle={
          <>
            <span style={{ display: 'inline-block' }}>Слаженные и юридически выверенные действия команды</span> <br />
            <span style={{ display: 'inline-block' }}>для скорейшего снятия претензий с компании.</span>
          </>
        }
        steps={processSteps}
        ctaTitle="Получили запрос из полиции или вызов?"
        ctaSubtitle="Передайте запрос на анализ. Подготовим безопасный ответ и организуем защиту руководства."
        ctaButtonText="Передать запрос на анализ"
        ctaButtonHref="#form"
      />

      {/* ═══ БЛОК 6: КУРАТОР (SPECIALISTBLOCK) ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name="Аркадий Евгеньевич Бобкин"
        position={<>Директор, управляющий партнёр ЮК «Де-Юре»,<br />куратор направления «Уголовно-правовая защита бизнеса»</>}
        imageUrl="/images/bobkin.jpg"
        imagePosition="center 15%"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block', lineHeight: 1.65, fontSize: '15.5px' }}>
            Аркадий Евгеньевич участвует в первичной оценке ситуации и разработке правовой позиции, координирует работу команды специалистов по сложным уголовно-правовым вопросам бизнеса. 22 года работал в следственных подразделениях налоговой полиции и МВД, в том числе следователем по особо важным делам и руководителем Следственной части. При необходимости процессуальную защиту осуществляет независимый адвокат, подключённый к делу.
          </span>,
          <a key="2" href="/specialisty/bobkin-arkadiy-evgenevich/" style={{ display: 'inline-block', marginTop: '16px', fontSize: '14px', color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
            Подробнее об Аркадии Евгеньевиче Бобкине →
          </a>
        ]}
        buttonText="Обсудить ситуацию с куратором"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 7: СТОИМОСТЬ (PRICINGBLOCK) ═══ */}
      <PricingBlock
        title="Стоимость защиты при проверке ОБЭП"
        subtitle="Стоимость фиксируется в соглашении и не подлежит увеличению без изменения согласованного объёма процессуальных действий."
        tiers={pricingTiers}
        disclaimer="При необходимости срочного ночного выезда или работы за пределами Липецка условия согласуются индивидуально."
      />

      {/* ═══ БЛОК 8: КЕЙСЫ (CASESBLOCK) ═══ */}
      <CasesBlock
        title={
          <span style={{ display: 'block' }}>
            <span style={{ display: 'inline-block' }}>Примеры прекращения</span> <br />
            <span style={{ display: 'inline-block' }}>проверок ОБЭП</span>
          </span>
        }
        cases={practiceCases}
      />
      <div className="container" style={{ marginTop: '-40px', marginBottom: '60px', textAlign: 'center' }}>
        <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', fontStyle: 'italic', margin: 0 }}>
          Результат зависит от своевременности подключения защитников и полноты предоставленных документов.
        </p>
      </div>

      {/* ═══ БЛОК 9: FAQ ═══ */}
      <FAQBlock
        title="Частые вопросы о проверках ОБЭП"
        subtitle="Практические рекомендации юристов по защите прав компании и сотрудников при доследственных мероприятиях."
        faqs={faqs}
      />

      {/* ═══ БЛОК: СМЕЖНЫЕ НАПРАВЛЕНИЯ ПРАКТИКИ ДЛЯ БИЗНЕСА (ПО ШАБЛОНУ) ═══ */}
      <section className="section bg-light" id="related-services" style={{ padding: '64px 0', background: 'var(--gradient-cream)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ marginBottom: '36px' }}>
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
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '24px'
            }}>
              <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px, 3.5vw, 34px)', color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.25, flex: '1 1 480px', minWidth: '280px' }}>
                <span style={{ display: 'inline-block' }}>Смежные направления</span> <br />
                <span style={{ display: 'inline-block' }}>практики для бизнеса</span>
              </h2>
              <p style={{
                flex: '0 1 440px',
                minWidth: '280px',
                fontSize: '15.5px',
                color: 'var(--color-text-secondary)',
                fontWeight: 400,
                lineHeight: 1.65,
                margin: 0,
                textAlign: 'left',
                textWrap: 'balance'
              }}>
                Если ситуация выходит за рамки проверки ОБЭП, привлекаем экспертов смежных практик компании «Де-Юре» — по налогам, арбитражу, корпоративным спорам и банкротству.
              </p>
            </div>
          </div>

          <div className="grid grid-4" style={{ gap: '20px', marginBottom: '28px' }}>
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
                    borderRadius: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 16px rgba(23, 50, 77, 0.04)'
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
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.35s ease, stroke 0.35s ease' }}>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div>
            <Link href="/biznesu/" className="all-services-link" style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '15px', textDecoration: 'underline', textUnderlineOffset: '4px', display: 'inline-flex', alignItems: 'center', gap: '6px', transition: 'color 0.3s ease' }}>
              Смотреть все юридические услуги для бизнеса →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 11: ФИНАЛЬНАЯ ФОРМА (СВЯЗАТЬСЯ С НАМИ) — КАНОНИЧЕСКИЙ ШАБЛОН ═══ */}
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
                Кратко укажите суть ситуации и запроса. Специалист свяжется с вами, уточнит обстоятельства и при необходимости организует подключение адвоката.
              </p>

              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Прямой контакт со специалистом</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Дежурный телефон: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (910) 350-31-11</a><br />
                  Городской телефон: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (4742) 20-15-25</a>
                </p>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '6px' }}>
                  Липецк, ул. Советская, д. 35, офис 213 (приём руководителей по предварительной записи)
                </div>
              </div>

              <div style={{ background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Конфиденциальность обращения</strong>
                Не указывайте в форме паспортные данные, коммерческую тайну и другие чувствительные сведения. Защищённый способ передачи документов согласуем после первого контакта. После подключения адвоката сведения, связанные с оказанием им юридической помощи, охраняются адвокатской тайной.
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm
                title="Написать нам"
                subtitle={
                  <>
                    <span style={{ display: 'inline-block' }}>Оставьте контакты и суть вопроса. Специалист свяжется с вами</span> <br />
                    <span style={{ display: 'inline-block' }}>в течение 15 минут в рабочее время.</span>
                  </>
                }
                subtext={
                  <>
                    <span style={{ display: 'inline-block' }}>Если вы оставите заявку вечером или в&nbsp;выходной день,</span> <br />
                    <span style={{ display: 'inline-block' }}>мы перезвоним в&nbsp;ближайший рабочий день.</span>
                  </>
                }
                buttonText="Получить помощь адвоката"
                commentPlaceholder="Кратко укажите суть ситуации: запрос документов ОБЭП, вызов на опрос, проверка КУСП…"
                hiddenFields={[
                  { name: 'source_page', value: '/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-pri-proverke-obep/' },
                  { name: 'page_type', value: 'service' },
                  { name: 'direction', value: 'criminal-defense' },
                  { name: 'service', value: 'zashchita-pri-proverke-obep' }
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
