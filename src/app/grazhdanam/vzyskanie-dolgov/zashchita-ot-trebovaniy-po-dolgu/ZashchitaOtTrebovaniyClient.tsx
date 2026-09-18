'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MilitaryHero from '@/components/MilitaryHero';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import CasesBlock, { CaseData } from '@/components/CasesBlock';

export default function ZashchitaOtTrebovaniyClient() {
  const proofItems = [
    {
      title: 'Документ',
      desc: 'Кто подписал, когда составлен, что именно подтверждает и есть ли оригинал.'
    },
    {
      title: 'Передача денег',
      desc: 'Подтверждена ли фактическая передача всей заявленной суммы ответчику или указанному им лицу.'
    },
    {
      title: 'Характер отношений',
      desc: 'Заём ли это, иной договор, расчёт по сделке, новация обязательства или другая правовая конструкция.'
    },
    {
      title: 'Срок',
      desc: 'Когда возникла обязанность вернуть деньги и правильно ли рассчитана исковая давность.'
    },
    {
      title: 'Исполнение',
      desc: 'Что возвращено, как оформлялись платежи, сохранились ли подтверждения и как их связать с требованием.'
    },
    {
      title: 'Расчёт',
      desc: 'Основной долг, проценты, неустойка, периоды, частичные оплаты и арифметика.'
    },
    {
      title: 'Право истца',
      desc: 'Является ли он кредитором, подтверждена ли уступка и какой объём требования перешёл.'
    },
    {
      title: 'Процедура',
      desc: 'Подсудность, извещение, комплект приложений, срок возражений и необходимость экспертизы.'
    }
  ];

  const defenseGrounds = [
    {
      title: 'Деньги не передавались',
      desc: 'Формулировки договора или расписки, подтверждение получения, движение средств и допустимые доказательства безденежности.'
    },
    {
      title: 'Передали меньшую сумму',
      desc: 'Сопоставление указанной суммы с фактическими платежами и обстоятельствами передачи.'
    },
    {
      title: 'Долг возвращён',
      desc: 'Назначение переводов, расписка о возврате, переписка, оригинал долгового документа и последовательность расчётов.'
    },
    {
      title: 'Платёж имел другое основание',
      desc: 'Назначение перевода, договорённости сторон, встречное предоставление и связь переписки с конкретной суммой.'
    },
    {
      title: 'Сумма завышена',
      desc: 'Проценты, неустойка, период просрочки, частичные платежи, зачёт и применимость снижения санкций.'
    },
    {
      title: 'Истёк срок обращения',
      desc: 'Дата наступления обязательства, требования, признания, платежей, судебного обращения и необходимость заявления о давности.'
    },
    {
      title: 'Документ оспаривается',
      desc: 'Оригинал, подпись, дописки, техническое состояние, образцы и целесообразность экспертизы.'
    },
    {
      title: 'Требует новый кредитор',
      desc: 'Цепочка уступки, уведомление, объём переданного права и исполнение первоначальному кредитору.'
    },
    {
      title: 'Есть встречные требования',
      desc: 'Однородность, срок, доказательства и допустимый процессуальный способ: возражение, зачёт или встречный иск.'
    }
  ];

  const stageServices = [
    {
      stage: 'До суда',
      desc: 'Анализирует требование и документы, оценивает последствия ответа, готовит позицию и при необходимости ведёт переговоры.'
    },
    {
      stage: 'Судебный приказ',
      desc: 'Фиксирует дату получения и направляет на отдельную услугу отмены приказа; после отмены оценивает защиту в иске.'
    },
    {
      stage: 'Иск получен',
      desc: 'Изучает материалы, готовит возражения, расчёт, доказательства, ходатайства и позицию по каждому требованию.'
    },
    {
      stage: 'Рассмотрение дела',
      desc: 'Участвует в заседаниях, задаёт вопросы, реагирует на новые доказательства, заявляет обоснованные ходатайства и экспертизу.'
    },
    {
      stage: 'Апелляция',
      desc: 'Проверяет решение и протокол, определяет допустимые доводы, готовит жалобу или возражения и представляет интересы.'
    },
    {
      stage: 'Мировое соглашение',
      desc: 'Проверяет сумму, сроки, отказ от остальных требований, расходы, обеспечение и последствия нарушения.'
    }
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Определяем срочность',
      desc: 'Уточняем, что получено: требование, приказ, иск, повестка или решение, и фиксируем ближайший срок.'
    },
    {
      num: '02',
      title: 'Изучаем материалы',
      desc: 'Проверяем оригиналы и копии, передачу денег, переписку, возвраты, расчёт, полномочия истца и материалы суда.'
    },
    {
      num: '03',
      title: 'Формируем позицию',
      desc: 'Разделяем подтверждённые и спорные обстоятельства, объясняем варианты, риски и недостающие доказательства.'
    },
    {
      num: '04',
      title: 'Готовим документы',
      desc: 'Составляем ответ, возражения, расчёт, ходатайства, жалобу или проект соглашения по конкретному делу.'
    },
    {
      num: '05',
      title: 'Представляем интересы',
      desc: 'Участвуем в переговорах и заседаниях, реагируем на новые доказательства и контролируем процессуальные сроки.'
    },
    {
      num: '06',
      title: 'Объясняем последствия',
      desc: 'После судебного акта оцениваем обжалование, исполнение или переход к профильной услуге.'
    }
  ];

  const pricingFactors = [
    {
      format: 'Правовой анализ',
      details: 'Объём документов и переписки, число платежей, необходимость расчёта и срочность.'
    },
    {
      format: 'Письменная позиция',
      details: 'Претензия или иск, количество требований, доказательств, ходатайств и расчётных периодов.'
    },
    {
      format: 'Представительство',
      details: 'Стадия, число заседаний, экспертиза, встречный иск, новые доказательства и выезд.'
    },
    {
      format: 'Апелляция',
      details: 'Объём дела, содержание решения, срок, допустимые новые материалы и участие в заседании.'
    },
    {
      format: 'Переговоры',
      details: 'Состав требований, условия графика, обеспечение, расходы и оформление прекращения спора.'
    }
  ];

  const casesData: CaseData[] = [
    {
      title: 'Добились отказа во взыскании суммы, которую фактически не передавали',
      category: 'Безденежность займа',
      problem:
        'Истец потребовал 1,2 млн ₽ по подписанному договору займа. Ответчик признавал подпись, но утверждал, что документ оформлялся как обеспечение будущих расчётов, а деньги ему не передавались. Банковских и кассовых подтверждений у истца не было.',
      action:
        'Восстановили переписку сторон до подписания, сопоставили движение средств и формулировки договора, подготовили возражения о безденежности и ходатайства об исследовании оригиналов. Показали противоречия между заявленной датой передачи и финансовыми документами истца.',
      result:
        'Суд установил, что истец не подтвердил фактическую передачу заявленной суммы, и отказал во взыскании основного долга и производных начислений.'
    },
    {
      title: 'Подтвердили частичный возврат и уменьшили требования',
      category: 'Частичный возврат',
      problem:
        'По расписке с ответчика требовали 780 000 ₽ и проценты, не учитывая несколько возвратов. Часть денег перечислялась на счёт кредитора, часть — указанному им родственнику; отдельную расписку на каждый платёж стороны не составляли.',
      action:
        'Собрали выписки и переписку, связали назначения и даты платежей с конкретным займом, подтвердили указание кредитора перечислять часть сумм третьему лицу. Подготовили альтернативный расчёт основного долга и процентов.',
      result:
        'Суд учёл подтверждённые платежи и взыскал только фактический остаток. Требование по процентам было пересчитано с учётом дат частичного возврата.'
    },
    {
      title: 'Исковую давность применили к просроченному требованию',
      category: 'Исковая давность',
      problem:
        'Кредитор обратился в суд спустя длительное время после установленного в расписке срока возврата. Ответчик не подписывал новых соглашений, но в переписке были неоднозначные фразы, которые истец называл признанием долга.',
      action:
        'Проверили дату наступления обязательства, обращения в суд и все действия после просрочки. Разделили обсуждение спорной ситуации и действия, которые действительно могли свидетельствовать о признании долга, подготовили заявление об исковой давности и возражения на позицию истца.',
      result:
        'Суд не признал спорные сообщения достаточным подтверждением перерыва срока и отказал в иске в связи с применением исковой давности.'
    }
  ];

  const faqItems = [
    {
      q: 'Можно ли оспорить расписку, если я её подписал?',
      a: 'Подпись имеет существенное значение, но не исключает проверку содержания документа, передачи денег, суммы, срока и исполнения. Правовая позиция зависит от фактов и допустимых доказательств, а не от одного заявления об оспаривании.'
    },
    {
      q: 'Что такое безденежность договора займа?',
      a: 'Это ситуация, когда заёмщик доказывает, что деньги или иное имущество фактически не получил либо получил в меньшем количестве, чем указано. Для письменного займа действуют специальные правила доказывания.'
    },
    {
      q: 'Можно ли доказать неполучение денег свидетелями?',
      a: 'Если договор займа должен быть письменным, оспаривание по безденежности только свидетельскими показаниями обычно не допускается, кроме прямо предусмотренных законом обстоятельств. Нужно искать и другие допустимые доказательства.'
    },
    {
      q: 'Я вернул долг наличными, но расписку не взял. Что делать?',
      a: 'Нужно восстановить хронологию и проверить переписку, движения по счетам, поведение сторон, возврат оригинала и другие материалы. Отсутствие подтверждения создаёт риск, но вывод делается после анализа совокупности обстоятельств.'
    },
    {
      q: 'Банковский перевод доказывает, что это был заём?',
      a: 'Перевод подтверждает движение денег, но не всегда основание. Суд оценивает назначение, переписку, договорённости, последующие платежи и иные отношения сторон.'
    },
    {
      q: 'Суд сам применит исковую давность?',
      a: 'Как правило, исковая давность применяется судом по заявлению стороны, сделанному до вынесения решения. Срок нужно рассчитать с учётом даты исполнения, требований и возможного признания долга.'
    },
    {
      q: 'Может ли частичный платёж повлиять на срок давности?',
      a: 'Действия, свидетельствующие о признании долга, могут иметь правовые последствия для течения срока. Значение имеет содержание и связь конкретного действия с обязательством.'
    },
    {
      q: 'Можно ли уменьшить проценты и неустойку?',
      a: 'Сначала проверяются основание, ставка, период и арифметика. Для отдельных санкций возможно заявлять о несоразмерности, но уменьшение не происходит автоматически и не относится одинаково ко всем начислениям.'
    },
    {
      q: 'Если подпись подделана, кто назначает экспертизу?',
      a: 'Сторона должна своевременно заявить мотивированное возражение и ходатайство, представить оригинал и сравнительные материалы. Вопрос о назначении экспертизы решает суд.'
    },
    {
      q: 'Что делать, если уже получен судебный приказ?',
      a: 'Сначала зафиксировать дату получения и проверить срок подачи возражений. Подробный порядок относится к отдельной услуге отмены судебного приказа; затягивать с обращением нельзя.'
    },
    {
      q: 'Можно ли договориться без суда?',
      a: 'Да, если условия точно определяют сумму, сроки, порядок платежей, расходы, отказ от остальных требований и последствия исполнения. Не подписывайте признание или новый график без проверки.'
    },
    {
      q: 'Можно ли работать с юристом дистанционно?',
      a: 'Первичный анализ, подготовка позиции и часть заседаний возможны дистанционно. Формат зависит от суда, доказательств, необходимости экспертизы и личного участия.'
    }
  ];

  return (
    <main style={{ position: 'relative', overflowX: 'hidden' }}>
      <Header />

      {/* ═══ БЛОК 1: HERO ═══ */}
      <MilitaryHero
        breadcrumbs={
          <>
            <Link href="/" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>Главная</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/grazhdanam/" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>Гражданам</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/grazhdanam/vzyskanie-dolgov/" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>Взыскание долгов</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Защита от требований</span>
          </>
        }
        superTitle="Частные денежные споры • защита ответчика • Липецк"
        title="Защита от взыскания долга по расписке или договору займа"
        subtitle="Проверим, передавались ли деньги, что подтверждает документ, правильно ли рассчитана сумма и какие доказательства возврата или возражения можно представить в суде."
        trustItems={[
          { text: 'Подключимся на стадии требования, иска или обжалования' },
          { text: 'Проверим расписку, договор, переводы, переписку и расчёт' },
          { text: 'Объясним реальный диапазон результата без обещаний «аннулировать долг»' }
        ]}
        afterTrustContent={
          <p style={{ fontSize: '15px', color: 'var(--color-deep-blue)', opacity: 0.9, margin: '16px 0 24px 0', lineHeight: 1.5, fontWeight: 500 }}>
            Для начала укажите, кто требует деньги и какой документ Вы получили. Не отправляйте расписку, паспорт и банковские сведения через обычную форму.
          </p>
        }
        primaryCtaText="Разобрать требование"
        primaryCtaLink="#defense-form"
        secondaryCtaText="Позвонить юристу"
        secondaryCtaLink="tel:+79103503111"
        imageUrl="/images/smolyaninova.jpg"
        imageName="Смольянинова Марина Валерьевна"
        imageSubtitle="Ведущий юрист ЮК «Де-Юре» • куратор направления"
      />

      {/* ═══ БЛОК 2: ЧТО СДЕЛАТЬ СЕЙЧАС (СРОЧНЫЙ БЛОК) ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '40px' }}>
            <h2
              className="with-accent"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(26px, 3.5vw, 38px)',
                color: 'var(--color-deep-blue)',
                marginBottom: '16px',
                lineHeight: 1.25
              }}
            >
              Не признавайте и не отрицайте долг до проверки документов
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
              Первые действия могут повлиять на доказательства, исковую давность и возможность своевременно заявить возражения. Сначала определите стадию и сохраните материалы.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '28px', marginBottom: '32px' }}>
            {/* Сделать */}
            <div
              className="card"
              style={{
                background: '#FFFFFF',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-deep-blue)',
                padding: '32px 28px',
                boxShadow: '0 4px 16px rgba(16, 39, 59, 0.06)'
              }}
            >
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-deep-blue)', textTransform: 'uppercase', marginBottom: '16px' }}>
                Что нужно сделать
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  'Сохранить конверт, уведомление, претензию, иск и все приложения.',
                  'Зафиксировать дату получения судебного документа и номер дела.',
                  'Скачать или сфотографировать переписку целиком с датами и участниками.',
                  'Собрать подтверждения возврата: выписки, чеки, расписки, сообщения.',
                  'Уточнить суд, срок ответа или заседания и запросить материалы дела.'
                ].map((txt, i) => (
                  <li key={i} style={{ display: 'flex', gap: '10px', fontSize: '14px', color: 'var(--color-text-main)', lineHeight: 1.5 }}>
                    <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>✓</span>
                    <span>{txt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Не делать */}
            <div
              className="card"
              style={{
                background: '#FFFFFF',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid #DC2626',
                padding: '32px 28px',
                boxShadow: '0 4px 16px rgba(16, 39, 59, 0.06)'
              }}
            >
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#DC2626', textTransform: 'uppercase', marginBottom: '16px' }}>
                Чего нельзя делать без анализа
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  'Не подписывать акт сверки, новый график, признание долга или расписку задним числом.',
                  'Не перечислять символическую сумму «для добросовестности», не понимая последствий.',
                  'Не удалять сообщения и не редактировать скриншоты.',
                  'Не придумывать версию о подделке подписи или неполучении денег, если это не так.',
                  'Не игнорировать суд в расчёте на то, что истец сам откажется от требований.'
                ].map((txt, i) => (
                  <li key={i} style={{ display: 'flex', gap: '10px', fontSize: '14px', color: 'var(--color-text-main)', lineHeight: 1.5 }}>
                    <span style={{ color: '#DC2626', fontWeight: 'bold' }}>✕</span>
                    <span>{txt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Плашка судебного приказа */}
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(16, 39, 59, 0.04) 0%, rgba(193, 160, 102, 0.1) 100%)',
              border: '1px solid rgba(193, 160, 102, 0.4)',
              borderLeft: '4px solid var(--color-gold)',
              padding: '24px 28px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '20px'
            }}
          >
            <div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '4px' }}>
                Получили судебный приказ о взыскании долга?
              </div>
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
                Проверьте дату получения и 10-дневный процессуальный срок подачи возражений. Отмена приказа требует отдельного процессуального документа.
              </p>
            </div>
            <div>
              <Link href="/grazhdanam/kreditnyj-yurist/otmena-sudebnogo-prikaza/" className="btn btn-outline" style={{ padding: '10px 20px', fontSize: '13.5px' }}>
                Перейти к отмене судебного приказа →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: ЧТО ДОЛЖЕН ДОКАЗАТЬ ИСТЕЦ И ЧТО ПРОВЕРЯЕТ ЗАЩИТА ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--color-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '44px' }}>
            <h2
              className="with-accent"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(26px, 3.5vw, 38px)',
                color: 'var(--color-deep-blue)',
                marginBottom: '16px',
                lineHeight: 1.25
              }}
            >
              Расписка важна, но суд оценивает весь спор
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, lineHeight: 1.6, margin: 0 }}>
              Каждая сторона доказывает обстоятельства, на которые ссылается. Истцу необходимо подтвердить основание требования, передачу денег, срок и расчёт. Ответчик представляет доказательства своих возражений: неполучения или получения меньшей суммы, возврата, иного основания платежа, ошибок расчёта и пропуска срока.
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '20px' }}>
            {proofItems.map((item, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-gold)',
                  padding: '22px 18px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}
              >
                <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-deep-blue)' }}>
                  {item.title}
                </div>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: ОСНОВАНИЯ ДЛЯ ПРОВЕРКИ ТРЕБОВАНИЙ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px' }}>
            <h2
              className="with-accent"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(26px, 3.5vw, 38px)',
                color: 'var(--color-deep-blue)',
                marginBottom: '16px',
                lineHeight: 1.25
              }}
            >
              Защитная позиция строится на фактах, а не на универсальном шаблоне
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
              Анализируем конкретную причину, по которой требование кредитора является неправомерным или завышенным.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '32px' }}>
            {defenseGrounds.map((item, idx) => (
              <div
                key={idx}
                className="card hover-lift"
                style={{
                  background: '#FAFAFA',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-gold)',
                  padding: '24px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px'
                }}
              >
                <h3 style={{ fontSize: '17px', color: 'var(--color-deep-blue)', margin: 0, fontWeight: 600 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.55 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', fontStyle: 'italic', margin: 0, textAlign: 'center' }}>
            Наличие одного из вопросов не означает автоматического отказа во взыскании. Суд оценивает доказательства в совокупности, а отдельные возражения применяются только при своевременном заявлении.
          </p>
        </div>
      </section>

      {/* ═══ БЛОК 5: ДВА УГЛУБЛЁННЫХ БЛОКА ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '32px', marginBottom: '36px' }}>
            {/* Блок 1: Безденежность */}
            <div
              className="card"
              style={{
                background: '#FFFFFF',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-gold)',
                padding: '32px 28px',
                boxShadow: '0 4px 16px rgba(16, 39, 59, 0.05)'
              }}
            >
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: 'var(--color-deep-blue)', margin: '0 0 16px 0' }}>
                Если расписка подписана, но деньги не получены полностью
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: '0 0 16px 0' }}>
                Закон позволяет заёмщику оспаривать заём по безденежности, доказывая, что деньги фактически не были получены либо получены в меньшем количестве. Если письменная форма обязательна, одной свидетельской версии обычно недостаточно:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13.5px', color: 'var(--color-text-main)' }}>
                <li>• Есть ли в тексте прямое указание, что деньги уже получены;</li>
                <li>• Совпадает ли сумма с банковскими и кассовыми документами;</li>
                <li>• Передавались ли деньги третьему лицу по указанию заёмщика;</li>
                <li>• Есть ли переписка до и после подписания и что она подтверждает;</li>
                <li>• Оспаривается весь заём или только часть суммы;</li>
                <li>• Нужна ли экспертиза подписи, давности или изменений документа.</li>
              </ul>
              <div style={{ fontSize: '13px', color: 'var(--color-deep-blue)', fontWeight: 600, background: 'rgba(16, 39, 59, 0.04)', padding: '12px 16px', borderRadius: '4px' }}>
                Безденежность, незаключённость и недействительность — разные правовые конструкции, требующие точной мотивировки.
              </div>
            </div>

            {/* Блок 2: Возврат долга */}
            <div
              className="card"
              style={{
                background: '#FFFFFF',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-deep-blue)',
                padding: '32px 28px',
                boxShadow: '0 4px 16px rgba(16, 39, 59, 0.05)'
              }}
            >
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: 'var(--color-deep-blue)', margin: '0 0 16px 0' }}>
                Если деньги возвращены, но подтверждения неполные
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: '0 0 16px 0' }}>
                Наличный возврат без расписки создаёт доказательственный риск, но не исключает анализ других материалов. Важно связать каждый платёж с конкретным обязательством и восстановить последовательность расчётов:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13.5px', color: 'var(--color-text-main)' }}>
                <li>• Банковский перевод: получатель, дата, назначение и соответствие графику;</li>
                <li>• Расписка кредитора: какую сумму и обязательство она подтверждает;</li>
                <li>• Переписка: признание получения платежа, согласованный остаток;</li>
                <li>• Частичные платежи: порядок зачёта и период начисления процентов;</li>
                <li>• Завышенные начисления: проверяем ставку, период и соразмерность санкций.</li>
              </ul>
              <div style={{ fontSize: '13px', color: 'var(--color-deep-blue)', fontWeight: 600, background: 'rgba(16, 39, 59, 0.04)', padding: '12px 16px', borderRadius: '4px' }}>
                Уменьшение процентов и неустойки по ст. 333 ГК РФ требует обязательного расчётного обоснования.
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#defense-form" className="btn btn-primary" style={{ padding: '14px 28px' }}>
              Разобрать ситуацию с юристом →
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 6: ВАРИАНТЫ ПОМОЩИ ПО СТАДИЯМ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px' }}>
            <h2
              className="with-accent"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(26px, 3.5vw, 38px)',
                color: 'var(--color-deep-blue)',
                marginBottom: '16px',
                lineHeight: 1.25
              }}
            >
              Варианты помощи по стадиям спора
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
              Подключаемся на любом этапе: от досудебной претензии до заседания в суде или обжалования решения.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '36px' }}>
            {stageServices.map((item, idx) => (
              <div
                key={idx}
                className="card hover-lift"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-gold)',
                  padding: '26px 22px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px'
                }}
              >
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase' }}>
                  Стадия
                </div>
                <h3 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', margin: 0, fontWeight: 600 }}>
                  {item.stage}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.55 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#defense-form" className="btn btn-primary" style={{ padding: '14px 28px' }}>
              Определить стадию и объём защиты →
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 7: КУРАТОР УСЛУГИ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--color-cream)' }}>
        <div className="container">
          <div
            className="card"
            style={{
              background: '#FFFFFF',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-gold)',
              padding: '40px',
              maxWidth: '900px',
              margin: '0 auto',
              boxShadow: '0 8px 30px rgba(16, 39, 59, 0.06)'
            }}
          >
            <div className="grid grid-2" style={{ gap: '36px', alignItems: 'center' }}>
              <div>
                <div style={{ width: '100%', maxWidth: '280px', borderRadius: '4px', overflow: 'hidden', margin: '0 auto', border: '1px solid var(--color-border)' }}>
                  <Image
                    src="/images/smolyaninova.jpg"
                    alt="Марина Смольянинова, ведущий юрист ЮК Де-Юре"
                    width={320}
                    height={400}
                    style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase' }}>
                  Куратор услуги
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', color: 'var(--color-deep-blue)', margin: 0 }}>
                  Смольянинова Марина Валерьевна
                </h3>
                <div style={{ fontSize: '15px', color: 'var(--color-primary)', fontWeight: 600 }}>
                  Ведущий юрист ЮК «Де-Юре»
                </div>
                <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  Марина Смольянинова проверяет не только формулировки расписки или иска, но и всю хронологию отношений: передачу денег, возвраты, переписку, расчёт и процессуальную стадию. Более 13 лет работы в ФССП и более 5 лет судебной практики помогают точно оценить последствия выбранной позиции после решения суда.
                </p>
                <div
                  style={{
                    borderLeft: '3px solid var(--color-gold)',
                    paddingLeft: '16px',
                    fontStyle: 'italic',
                    fontSize: '14px',
                    color: 'var(--color-deep-blue)'
                  }}
                >
                  «Защита начинается не с отрицания долга, а с точного ответа на четыре вопроса: что передано, на каком основании, что уже возвращено и чем это подтверждается».
                </div>
                <div>
                  <a href="#defense-form" className="btn btn-primary" style={{ padding: '12px 24px', fontSize: '14px' }}>
                    Разобрать требование с командой направления
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 8: КЕЙСЫ ИЗ ПРАКТИКИ ═══ */}
      <CasesBlock
        title={
          <div>
            <span style={{ display: 'block', marginBottom: '8px' }}>Примеры защиты от требований по долгам</span>
            <span style={{ display: 'block', fontSize: '15px', color: 'var(--color-text-secondary)', fontWeight: 400, textTransform: 'none', letterSpacing: 'normal' }}>
              В частном денежном споре результат зависит от содержания документов и того, что стороны делали после передачи денег. Один и тот же довод работает по-разному при разных доказательствах.
            </span>
          </div>
        }
        cases={casesData}
      />
      <div className="container" style={{ marginTop: '-40px', marginBottom: '60px', textAlign: 'center' }}>
        <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', fontStyle: 'italic', margin: 0 }}>
          Результат зависит от обстоятельств конкретного дела и не гарантирует аналогичный исход в другой ситуации.
        </p>
      </div>

      {/* ═══ БЛОК 9: КАК ПРОХОДИТ РАБОТА ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--color-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px' }}>
            <h2
              className="with-accent"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(26px, 3.5vw, 38px)',
                color: 'var(--color-deep-blue)',
                marginBottom: '16px',
                lineHeight: 1.25
              }}
            >
              Как проходит работа по защите
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, lineHeight: 1.6, margin: 0 }}>
              Последовательный план защиты прав ответчика в частном споре.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px' }}>
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-gold)',
                  padding: '28px 22px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px'
                }}
              >
                <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)' }}>
                  {step.num}
                </div>
                <h3 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', margin: 0, fontWeight: 600 }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.55 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 10: ЧТО ПОДГОТОВИТЬ ЮРИСТУ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <h2
              className="with-accent"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(26px, 3.5vw, 38px)',
                color: 'var(--color-deep-blue)',
                marginBottom: '24px',
                textAlign: 'center',
                lineHeight: 1.25
              }}
            >
              Что подготовить юристу
            </h2>

            <div
              className="card"
              style={{
                background: '#FAFAFA',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-gold)',
                padding: '36px 32px',
                marginBottom: '20px'
              }}
            >
              <div className="grid grid-2" style={{ gap: '16px' }}>
                {[
                  'Претензию, иск, судебный приказ, повестку, решение и конверты с датами получения;',
                  'Копию и, если есть, оригинал расписки, договора займа, соглашений и актов;',
                  'Банковские выписки и чеки по получению и возврату денег;',
                  'Переписку сторон целиком, а не только отдельные скриншоты;',
                  'Документы о передаче наличных, возврате оригинала или выдаче расписки кредитором;',
                  'Расчёт истца и собственный перечень платежей;',
                  'Документы об уступке права, если требует другой кредитор;',
                  'Краткую хронологию и описание спорных обстоятельств.'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '10px', fontSize: '14.5px', color: 'var(--color-text-main)', lineHeight: 1.5 }}>
                    <span style={{ color: 'var(--color-gold)', fontWeight: 'bold' }}>✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                background: 'rgba(193, 160, 102, 0.1)',
                borderLeft: '3px solid var(--color-gold)',
                padding: '16px 20px',
                fontSize: '14px',
                color: 'var(--color-deep-blue)'
              }}
            >
              <strong>Безопасность данных:</strong> Не прикладывайте документы с персональными и финансовыми данными к обычной форме сайта. Способ передачи согласуем после первичного обращения.
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 11: СТОИМОСТЬ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px' }}>
            <h2
              className="with-accent"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(26px, 3.5vw, 38px)',
                color: 'var(--color-deep-blue)',
                marginBottom: '16px',
                lineHeight: 1.25
              }}
            >
              Стоимость зависит от стадии и доказательств
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
              Анализ претензии, подготовка возражений и ведение дела с экспертизой — разные задачи. До начала работы фиксируем конкретный этап, состав действий и стоимость.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
            {pricingFactors.map((tier, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid var(--color-border)',
                  borderLeft: '4px solid var(--color-gold)',
                  padding: '20px 24px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '16px'
                }}
              >
                <div style={{ flex: '1 1 320px' }}>
                  <h3 style={{ fontSize: '17px', color: 'var(--color-deep-blue)', margin: '0 0 6px 0', fontWeight: 600 }}>
                    {tier.format}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
                    {tier.details}
                  </p>
                </div>
                <div>
                  <a href="#defense-form" className="btn btn-outline" style={{ fontSize: '13px', padding: '9px 18px' }}>
                    Уточнить состав
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', margin: '0 0 24px 0' }}>
            Госпошлина, нотариальные, экспертные, почтовые и иные внешние расходы согласуются отдельно.
          </p>

          <div style={{ textAlign: 'center' }}>
            <a href="#defense-form" className="btn btn-primary" style={{ padding: '14px 28px' }}>
              Уточнить стоимость защиты →
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 12: ЧАСТЫЕ ВОПРОСЫ (FAQ) ═══ */}
      <FAQBlock
        title="Частые вопросы о защите от требований по долгу"
        subtitle="Практические разъяснения юриста о расписках, безденежности займа, снижении процентов и процессуальных сроках."
        faqs={faqItems}
      />

      {/* ═══ БЛОК 13: СВЯЗАННЫЕ УСЛУГИ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(24px, 3vw, 32px)',
                color: 'var(--color-deep-blue)',
                marginBottom: '12px'
              }}
            >
              Смежные направления
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', margin: 0 }}>
              Если Ваша ситуация относится к другим правовым вопросам:
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '20px' }}>
            <Link
              href="/grazhdanam/vzyskanie-dolgov/"
              className="card related-service-card hover-lift"
              style={{
                background: '#FAFAFA',
                border: '1px solid var(--color-border)',
                padding: '24px 20px',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}
            >
              <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-deep-blue)' }}>
                Взыскание долгов
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
                Если деньги должны Вам, перейдите к помощи взыскателю.
              </p>
              <div style={{ color: 'var(--color-primary)', fontSize: '13px', fontWeight: 600, marginTop: 'auto' }}>
                Помощь взыскателю →
              </div>
            </Link>

            <Link
              href="/grazhdanam/kreditnyj-yurist/otmena-sudebnogo-prikaza/"
              className="card related-service-card hover-lift"
              style={{
                background: '#FAFAFA',
                border: '1px solid var(--color-border)',
                padding: '24px 20px',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}
            >
              <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-deep-blue)' }}>
                Отмена судебного приказа
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
                Получили приказ или узнали о нём после списания денежных средств.
              </p>
              <div style={{ color: 'var(--color-primary)', fontSize: '13px', fontWeight: 600, marginTop: 'auto' }}>
                Отменить приказ →
              </div>
            </Link>

            <Link
              href="/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/"
              className="card related-service-card hover-lift"
              style={{
                background: '#FAFAFA',
                border: '1px solid var(--color-border)',
                padding: '24px 20px',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}
            >
              <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-deep-blue)' }}>
                Юрист по исполнительному производству
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
                Решение вступило в силу, пристав арестовал счёт или установил ограничение.
              </p>
              <div style={{ color: 'var(--color-primary)', fontSize: '13px', fontWeight: 600, marginTop: 'auto' }}>
                Подробнее →
              </div>
            </Link>

            <Link
              href="/grazhdanam/kreditnyj-yurist/"
              className="card related-service-card hover-lift"
              style={{
                background: '#FAFAFA',
                border: '1px solid var(--color-border)',
                padding: '24px 20px',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}
            >
              <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-deep-blue)' }}>
                Кредитный юрист
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
                Требование предъявляет банк, МФО или профессиональный кредитор.
              </p>
              <div style={{ color: 'var(--color-primary)', fontSize: '13px', fontWeight: 600, marginTop: 'auto' }}>
                Подробнее →
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 14: ФИНАЛЬНАЯ ФОРМА ═══ */}
      <section id="defense-form" className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <ContactsForm
            title="Разобрать требование по долгу"
            subtitle="Укажите, что Вы получили: претензию, судебный приказ, иск или повестку. Если известна дата суда или получения документа, напишите её в описании."
            buttonText="Получить консультацию"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
