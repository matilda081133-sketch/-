'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import MilitaryHero from '@/components/MilitaryHero';
import ProcessBlock, { ProcessStep } from '@/components/ProcessBlock';
import PricingBlock, { PricingTier } from '@/components/PricingBlock';
import CasesBlock, { CaseData } from '@/components/CasesBlock';
import FAQBlock, { FAQItem } from '@/components/FAQBlock';
import ContactsForm from '@/components/ContactsForm';

export default function SubsidiarnayaOtvetstvennostClient() {
  const targetSegments = [
    {
      title: 'Действующий директор',
      desc: 'Получил заявление или запрос конкурсного управляющего по управленческим решениям кризисного периода компании. Поможем срочно зафиксировать доказательства добросовестности.'
    },
    {
      title: 'Бывший руководитель',
      desc: 'Вменяют долги и убытки, возникшие после увольнения, либо объединяют разные периоды управления. Чётко разделим даты полномочий, передачу дел и фактическое влияние.'
    },
    {
      title: 'Учредитель / участник ООО',
      desc: 'Заявитель выводит контроль только из размера доли в уставном капитале или родственных связей. Докажем отсутствие оперативного вмешательства в текущую хозяйственную деятельность.'
    },
    {
      title: 'Бенефициар / теневой контролёр',
      desc: 'Лицо не занимало официальных должностей, но его называют бенефициаром бизнеса. Оспорим косвенные догадки заявителя и отсутствие прямой доказательственной связи.'
    },
    {
      title: 'Главный бухгалтер / финдиректор',
      desc: 'Ответственность связывают с искажением бухгалтерской отчётности или утратой первичных документов. Проверим реальный объём должностных обязанностей и объективные причины.'
    }
  ];

  const urgentActions = [
    {
      step: '1',
      title: 'Не удаляйте документы и переписку',
      text: 'Сохраните все рабочие файлы, архивы почты, мессенджеры, выписки и первичные документы. Электронные доказательства — основа защиты добросовестности.'
    },
    {
      step: '2',
      title: 'Зафиксируйте дату получения',
      text: 'Точно зафиксируйте дату вручения заявления или почтового отправления: от этого зависят процессуальные сроки на подготовку отзыва и ходатайств.'
    },
    {
      step: '3',
      title: 'Проверьте судебный статус',
      text: 'Проверьте определение арбитражного суда в КАД: принято ли заявление к производству, назначено ли судебное заседание и наложены ли обеспечительные меры.'
    },
    {
      step: '4',
      title: 'Разделите периоды руководства',
      text: 'Сформируйте точную хронологию: дата назначения, фактическое прекращение полномочий, передача печатей, документации и имущества по акту.'
    },
    {
      step: '5',
      title: 'Не совершайте резких сделок',
      text: 'Не переписывайте имущество на родственников и не подписывайте согласий с претензиями до консультации с судебным юристом.'
    }
  ];

  const defenseContours = [
    {
      title: '1. Оспаривание статуса КДЛ',
      desc: 'Проверяем, доказал ли заявитель фактическую возможность давать обязательные указания. Опровергаем презумпции контроля, обусловленные лишь родством или долей.'
    },
    {
      title: '2. Проверка законных оснований',
      desc: 'Разделяем статьи 61.11 (невозможность погашения, непередача документов, порочные сделки) и 61.12 (неподача заявления о банкротстве) Закона о банкротстве.'
    },
    {
      title: '3. Разграничение периода контроля',
      desc: 'Исключаем из ответственности период до назначения директора и после его фактического ухода с должности. Доказываем надлежащую передачу дел преемнику.'
    },
    {
      title: '4. Опровержение причинной связи',
      desc: 'Доказываем, что банкротство наступило вследствие объективных экономических факторов (санкции, неплатёжи контрагентов), а не управленческих решений ответчика.'
    },
    {
      title: '5. Контррасчёт размера требований',
      desc: 'Исключаем необоснованные долги, требования аффилированных кредиторов, штрафные санкции и обязательства, возникшие вне периода контроля ответчика.'
    },
    {
      title: '6. Процессуальная защита в суде',
      desc: 'Заявляем пропуск срока исковой давности, ходатайствуем об отмене обеспечительных мер, истребуем доказательства и привлекаем профильных экспертов.'
    }
  ];

  const processSteps: ProcessStep[] = [
    {
      number: '01',
      title: 'Анализ заявления и рисков',
      description: 'Изучаем текст заявления управляющего или кредитора, приложенные расчёты, судебные акты и материалы арбитражного дела.'
    },
    {
      number: '02',
      title: 'Сбор доказательств добросовестности',
      description: 'Восстанавливаем переписку, первичку, протоколы собраний, экономические обоснования решений и бизнес-планы выхода из кризиса.'
    },
    {
      number: '03',
      title: 'Разработка правовой позиции',
      description: 'Формируем эшелонированную линию защиты: опровержение статуса КДЛ, отсутствие вины, отсутствие причинно-следственной связи и контррасчёт.'
    },
    {
      number: '04',
      title: 'Подготовка мотивированного отзыва',
      description: 'Составляем мотивированные возражения со ссылками на позиции Верховного Суда РФ, судебную практику и реестр письменных доказательств.'
    },
    {
      number: '05',
      title: 'Судебное представительство',
      description: 'Защищаем интересы руководителя в судебных заседаниях арбитражного суда первой инстанции, заявляем ходатайства и контрдоводы.'
    },
    {
      number: '06',
      title: 'Контроль судебного акта и апелляция',
      description: 'Анализируем вынесенное определение арбитражного суда и при необходимости готовим апелляционную или кассационную жалобу.'
    }
  ];

  const resultsList = [
    'Полный отказ арбитражного суда в привлечении к субсидиарной ответственности;',
    'Исключение конкретного лица из числа контролирующих должника лиц (КДЛ);',
    'Существенное снижение размера субсидиарной ответственности за счёт исключения чужих обязательств;',
    'Снятие обеспечительных мер и арестов с личных банковских счетов, недвижимости и автомобилей ответчика;',
    'Заключение мирового соглашения на взаимоприемлемых условиях с рассрочкой исполнения;',
    'Отмена незаконного определения суда в апелляционной или кассационной инстанции.'
  ];

  const pricingTiers: PricingTier[] = [
    {
      name: 'Экспресс-аудит заявления',
      price: 'от 10 000 ₽',
      period: '1–2 рабочих дня',
      description: 'Правовой анализ полученного заявления о привлечении к субсидиарной ответственности и перспектив защиты.',
      features: [
        'Изучение заявления управляющего/кредитора',
        'Проверка оснований по ст. 61.11, 61.12 Закона о банкротстве',
        'Оценка рисков обеспечительных мер и арестов',
        'Письменные рекомендации и стратегия защиты'
      ],
      isPopular: false,
      ctaText: 'Заказать аудит',
      ctaHref: '#contacts'
    },
    {
      name: 'Подготовка мотивированных возражений',
      price: 'от 35 000 ₽',
      period: 'от 5 рабочих дней',
      description: 'Формирование комплексного письменного отзыва с доказательственной базой и контррасчётом.',
      features: [
        'Разработка правовой позиции по всем эпизодам заявления',
        'Сбор и систематизация доказательств добросовестности',
        'Подготовка контррасчёта размера ответственности',
        'Составление мотивированного отзыва со ссылками на практику ВС РФ'
      ],
      isPopular: true,
      badge: 'Популярный',
      ctaText: 'Подготовить отзыв',
      ctaHref: '#contacts'
    },
    {
      name: 'Комплексная защита в первой инстанции',
      price: 'от 70 000 ₽',
      period: 'на весь период дела',
      description: 'Полное ведение обособленного спора под ключ до вынесения итогового определения суда первой инстанции.',
      features: [
        'Все действия тарифа «Подготовка возражений»',
        'Личное или онлайн участие юриста во всех заседаниях суда',
        'Подача ходатайств об истребовании документов и отмене мер',
        'Взаимодействие с экспертами и приобщение заключений'
      ],
      isPopular: false,
      ctaText: 'Защитить в суде',
      ctaHref: '#contacts'
    },
    {
      name: 'Апелляционное обжалование',
      price: 'от 40 000 ₽',
      period: 'по процессуальным срокам',
      description: 'Защита интересов при обжаловании судебного акта в суде апелляционной или кассационной инстанции.',
      features: [
        'Детальный аудит определения суда первой инстанции',
        'Выявление нарушений норм материального и процессуального права',
        'Подготовка мотивированной апелляционной жалобы',
        'Представительство в арбитражном апелляционном суде'
      ],
      isPopular: false,
      ctaText: 'Обжаловать судебный акт',
      ctaHref: '#contacts'
    }
  ];

  const casesData: CaseData[] = [
    {
      title: 'Бывший директор: разделение периодов управления',
      result: 'Суд полностью отказал во взыскании 38 млн ₽ с бывшего генерального директора',
      duration: '7 месяцев',
      description: 'Конкурсный управляющий потребовал привлечь бывшего директора к субсидиарной ответственности за неподачу заявления о банкротстве и рост кредиторской задолженности.',
      points: [
        'Доказали, что объективное банкротство наступило спустя 14 месяцев после увольнения доверителя',
        'Предоставили акт приёма-передачи дел и доказательства фактической передачи документации преемнику',
        'Опровергли вменение задолженностей, возникших при новом менеджменте компании',
        'Арбитражный суд согласился с доводами защиты и отказал в требованиях к нашему клиенту'
      ]
    },
    {
      title: 'Участник общества: спор о фактическом контроле',
      result: 'Суд отказал во взыскании 22 млн ₽ с миноритарного участника ООО',
      duration: '5 месяцев',
      description: 'Кредиторы пытались привлечь участника с долей 25% солидарно с генеральным директором, утверждая, что он одобрял убыточные сделки компании.',
      points: [
        'Провели правовой анализ протоколов общих собраний и доказали отсутствие кворума для единоличных решений',
        'Опровергли утверждения об извлечении личной выгоды от спорных контрактов',
        'Подтвердили статус пассивного инвестора без вмешательства в оперативное управление',
        'Суд признал презумпцию контроля опровергнутой и снял ответственность'
      ]
    },
    {
      title: 'Директор: спор о причинах банкротства и размере',
      result: 'Размер взыскания уменьшен со 115 млн ₽ до 4,2 млн ₽',
      duration: '9 месяцев',
      description: 'Управляющий вменил руководителю производственного предприятия непередачу первичных документов и все неисполненные обязательства перед реестром.',
      points: [
        'Восстановили факт передачи части архива управляющему и изъятия документов правоохранительными органами',
        'Доказали причинно-следственную связь кризиса предприятия с резким валютным скачком и разрывом цепочек поставок',
        'Исключили из расчёта реестровые долги, возникшие до даты вменяемого нарушения',
        'Суд признал необоснованность привлечения по ст. 61.11 и взыскал ответственность только по узкому эпизоду'
      ]
    }
  ];

  const faqItems: FAQItem[] = [
    {
      question: 'Кого могут признать контролирующим должника лицом?',
      answer: 'Не только директора или участника. Суд оценивает фактическую возможность определять действия компании, конкретный период и доказательства влияния. Формальная должность или доля важны, но не должны подменять анализ фактов.'
    },
    {
      question: 'Учредитель автоматически отвечает по долгам ООО?',
      answer: 'Нет. Сам по себе статус участника не означает автоматическую ответственность по всем долгам. Заявитель должен ссылаться на предусмотренное законом основание, а суд исследует контроль, действия, причинную связь и другие обстоятельства.'
    },
    {
      question: 'Бывший директор тоже может быть ответчиком?',
      answer: 'Да, если требование связано с периодом его контроля или действиями. Защита должна точно разделить даты полномочий, фактическое влияние, передачу дел и эпизоды, которые возникли до или после ухода.'
    },
    {
      question: 'Что делать после получения заявления?',
      answer: 'Сохранить заявление и приложения, проверить определение суда и ближайшее заседание, обеспечить сохранность документов и переписки. Не удалять материалы и не подписывать признание фактов до анализа позиции.'
    },
    {
      question: 'Можно ли защититься ссылкой на экономический кризис?',
      answer: 'Общей ссылки недостаточно. Нужно подтвердить, какие внешние причины действовали, какую информацию имел руководитель, какие решения принимались и почему именно действия ответчика не вызвали невозможность расчётов либо прирост спорных обязательств.'
    },
    {
      question: 'Что если часть документов утрачена?',
      answer: 'Нельзя восстанавливать их фиктивно или задним числом. Нужно установить причину отсутствия, подтвердить передачу или объективные обстоятельства, определить альтернативные источники и корректно объяснить ситуацию суду.'
    },
    {
      question: 'Можно ли уменьшить размер ответственности?',
      answer: 'Размер можно оспаривать, если в него включены неподходящие обязательства, чужие периоды или суммы без необходимой связи. Конкретный результат зависит от основания, расчёта и доказательств; снижение не гарантируется.'
    },
    {
      question: 'Есть ли срок для предъявления такого заявления?',
      answer: 'Закон устанавливает специальные правила и предельные периоды, но их расчёт зависит от основания, момента осведомлённости заявителя и процессуальной ситуации. Срок проверяется по материалам дела и действующей редакции закона.'
    },
    {
      question: 'Можно ли переписать имущество, чтобы его не взыскали?',
      answer: 'Мы не рекомендуем фиктивные или направленные на сокрытие активов действия. Они могут создать дополнительные споры и риски. Допустимы только законные решения после анализа фактов, целей и последствий.'
    },
    {
      question: 'Спишется ли субсидиарный долг в личном банкротстве?',
      answer: 'Этот вопрос относится к отдельной процедуре гражданина и зависит от основания долга и судебных выводов. Страница BIZ-BKR-04 не обещает списание и направляет на индивидуальную диагностику в кластер банкротства физических лиц.'
    }
  ];

  return (
    <div className="page-wrapper">
      <Header />

      <main>
        {/* Хлебные крошки */}
        <div style={{ background: 'var(--color-bg-light)', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container" style={{ padding: '12px 16px' }}>
            <nav aria-label="Хлебные крошки" style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>
              <Link href="/" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>Главная</Link>
              <span style={{ margin: '0 8px' }}>/</span>
              <Link href="/biznesu/" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>Бизнесу</Link>
              <span style={{ margin: '0 8px' }}>/</span>
              <Link href="/biznesu/bankrotstvo-biznesa/" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>Банкротство бизнеса</Link>
              <span style={{ margin: '0 8px' }}>/</span>
              <span style={{ color: 'var(--color-text)' }}>Защита от субсидиарной ответственности</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <MilitaryHero
          badge="Банкротство бизнеса • Защита руководителя и собственника"
          title="Защита от субсидиарной ответственности в Липецке"
          subtitle="Проверим, почему вас считают контролирующим лицом, какие действия связывают с долгами компании и как рассчитана сумма. Сохраним доказательства и подготовим позицию для суда."
          trustItems={[
            'Анализ оснований по ст. 61.11 и 61.12 Закона о банкротстве',
            'Опровержение презумпций контроля и причинной связи',
            'Разделение периодов руководства и уменьшение размера требований'
          ]}
          primaryButtonText="Разобрать основания требования"
          primaryButtonHref="#contacts"
          secondaryButtonText="Позвонить: +7 (910) 350-31-11"
          secondaryButtonHref="tel:+79103503111"
        />

        {/* Срочный блок: Что сделать сейчас */}
        <section className="section" style={{ background: '#fff', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container">
            <div style={{ maxWidth: '840px', margin: '0 auto 36px', textAlign: 'center' }}>
              <span className="badge" style={{ marginBottom: '12px' }}>Срочные действия ответчика</span>
              <h2 style={{ fontSize: '26px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '16px' }}>
                Что сделать сразу после получения заявления или запроса управляющего
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Первые 10 дней определяют исход обособленного спора. Неосторожные действия, поспешные сделки или удаление переписки могут необратимо закрепить процессуальные презумпции против вас.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '20px', marginBottom: '24px' }}>
              {urgentActions.map((action, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'var(--color-bg-light)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px',
                    padding: '22px 20px',
                    borderTop: '3px solid var(--color-gold)'
                  }}
                >
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'var(--color-deep-blue)',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '14px',
                      marginBottom: '12px'
                    }}
                  >
                    {action.step}
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-deep-blue)', marginBottom: '8px' }}>
                    {action.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    {action.text}
                  </p>
                </div>
              ))}
            </div>

            <div
              style={{
                background: 'var(--gradient-cream)',
                border: '1px solid var(--color-border)',
                borderRadius: '8px',
                padding: '16px 20px',
                fontSize: '13px',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.6
              }}
            >
              <strong style={{ color: 'var(--color-deep-blue)' }}>Важное предостережение: </strong>
              Мы категорически не рекомендуем попытки фиктивного сокрытия активов или составления документов «задним числом». Такие действия легко вскрываются в арбитражном суде через налоговые и банковские запросы, переводя хозяйственный спор в плоскость уголовного преследования.
            </div>
          </div>
        </section>

        {/* Сегменты ответчиков */}
        <section className="section" style={{ background: 'var(--color-bg-light)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto 36px', textAlign: 'center' }}>
              <span className="badge" style={{ marginBottom: '12px' }}>Кто находится под риском</span>
              <h2 style={{ fontSize: '26px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '16px' }}>
                Субъекты субсидиарной ответственности в деле о банкротстве
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)' }}>
                Закон о банкротстве позволяет привлекать широкий круг лиц. Стратегия защиты принципиально зависит от вашей процессуальной роли и объема реального контроля.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '20px' }}>
              {targetSegments.map((seg, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#fff',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px',
                    padding: '24px',
                    borderTop: '3px solid var(--color-deep-blue)'
                  }}
                >
                  <h3 style={{ fontSize: '17px', fontWeight: 600, color: 'var(--color-deep-blue)', marginBottom: '10px' }}>
                    {seg.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    {seg.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Карта защиты: 6 контуров */}
        <section className="section" style={{ background: '#fff' }}>
          <div className="container">
            <div style={{ maxWidth: '840px', margin: '0 auto 36px', textAlign: 'center' }}>
              <span className="badge" style={{ marginBottom: '12px' }}>Методология защиты</span>
              <h2 style={{ fontSize: '26px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '16px' }}>
                Карта защиты: шесть независимых контуров анализа
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)' }}>
                Вместо абстрактных заверений мы выстраиваем системную оборону по каждому из шести обязательных элементов доказывания в суде.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '20px' }}>
              {defenseContours.map((contour, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'var(--color-bg-light)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px',
                    padding: '24px',
                    borderTop: '3px solid var(--color-gold)'
                  }}
                >
                  <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-deep-blue)', marginBottom: '10px' }}>
                    {contour.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    {contour.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <ProcessBlock
          title="Порядок работы по защите руководителя и собственника"
          subtitle="Последовательный процессуальный алгоритм от анализа первого требования до вынесения итогового судебного акта."
          steps={processSteps}
        />

        {/* Результаты */}
        <section className="section" style={{ background: 'var(--color-bg-light)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto 36px', textAlign: 'center' }}>
              <span className="badge" style={{ marginBottom: '12px' }}>Правовой результат</span>
              <h2 style={{ fontSize: '26px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '16px' }}>
                Достижимые результаты процессуальной защиты
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)' }}>
                Мы не гарантируем «100% списание всех долгов», а защищаем права доверителя законными процессуальными методами.
              </p>
            </div>

            <div
              style={{
                maxWidth: '780px',
                margin: '0 auto 24px',
                background: '#fff',
                border: '1px solid var(--color-border)',
                borderRadius: '8px',
                padding: '24px 28px'
              }}
            >
              <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {resultsList.map((res, idx) => (
                  <li key={idx} style={{ fontSize: '14px', color: 'var(--color-text)', lineHeight: 1.5 }}>
                    {res}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
              <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', fontStyle: 'italic', margin: 0 }}>
                Судебный акт зависит от совокупности доказательств, фактического периода руководства и реального влияния на деятельность компании-должника.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <PricingBlock
          title="Стоимость защиты от субсидиарной ответственности"
          subtitle="Цена зависит от оснований заявления (ст. 61.11, 61.12), объёма вменяемых эпизодов, периода руководства, числа ответчиков и заседаний. Внешние расходы и экспертизы оплачиваются отдельно."
          tiers={pricingTiers}
        />

        {/* Команда */}
        <section className="section" style={{ background: '#fff', borderTop: '1px solid var(--color-border)' }}>
          <div className="container">
            <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
              <span className="badge" style={{ marginBottom: '12px' }}>Рабочая группа</span>
              <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
                Кто защитит директора и собственника бизнеса
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Споры о субсидиарной ответственности ведёт профильная группа арбитражных юристов «Де-Юре». Мы глубоко понимаем тактику арбитражных управляющих, тонкости финансово-экономического анализа и прецедентную практику Верховного Суда РФ по защите контролирующих лиц.
              </p>
            </div>
          </div>
        </section>

        {/* Cases */}
        <CasesBlock
          title="Судебная практика по субсидиарной ответственности"
          subtitle="Реальные примеры защиты директоров, участников и учредителей в арбитражных судах."
          cases={casesData}
          showDemoWarning={true}
        />

        {/* FAQ */}
        <FAQBlock
          title="Частые вопросы о субсидиарной ответственности"
          items={faqItems}
        />

        {/* Смежные задачи и перелинковка */}
        <section className="section" style={{ background: 'var(--color-bg-light)', borderTop: '1px solid var(--color-border)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto 32px', textAlign: 'center' }}>
              <span className="badge" style={{ marginBottom: '12px' }}>Смежные направления</span>
              <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
                Связанные процедуры в деле о банкротстве
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
                Субсидиарная ответственность часто тесно переплетена с оспариванием сделок должника и действиями арбитражного управляющего.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '16px', maxWidth: '960px', margin: '0 auto' }}>
              <Link
                href="/biznesu/bankrotstvo-biznesa/osparivanie-sdelok-pri-bankrotstve/"
                style={{
                  background: '#fff',
                  border: '1px solid var(--color-border)',
                  borderRadius: '8px',
                  padding: '20px',
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}
              >
                <strong style={{ color: 'var(--color-deep-blue)', fontSize: '15px' }}>Оспаривание сделок должника</strong>
                <span style={{ color: 'var(--color-text-secondary)', fontSize: '13px' }}>Защита контрактов и платежей от признания недействительными.</span>
              </Link>
              <Link
                href="/biznesu/bankrotstvo-biznesa/bankrotstvo-kompanii-so-storony-dolzhnika/"
                style={{
                  background: '#fff',
                  border: '1px solid var(--color-border)',
                  borderRadius: '8px',
                  padding: '20px',
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}
              >
                <strong style={{ color: 'var(--color-deep-blue)', fontSize: '15px' }}>Банкротство компании-должника</strong>
                <span style={{ color: 'var(--color-text-secondary)', fontSize: '13px' }}>Контролируемая ликвидация юрлица через банкротство без личных рисков.</span>
              </Link>
              <Link
                href="/biznesu/bankrotstvo-biznesa/obzhalovanie-dejstvij-arbitrazhnogo-upravlyayushchego/"
                style={{
                  background: '#fff',
                  border: '1px solid var(--color-border)',
                  borderRadius: '8px',
                  padding: '20px',
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}
              >
                <strong style={{ color: 'var(--color-deep-blue)', fontSize: '15px' }}>Жалоба на управляющего</strong>
                <span style={{ color: 'var(--color-text-secondary)', fontSize: '13px' }}>Пресечение злоупотреблений и незаконных запросов управляющего.</span>
              </Link>
              <Link
                href="/biznesu/bankrotstvo-biznesa/predstavlenie-interesov-kreditora/"
                style={{
                  background: '#fff',
                  border: '1px solid var(--color-border)',
                  borderRadius: '8px',
                  padding: '20px',
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}
              >
                <strong style={{ color: 'var(--color-deep-blue)', fontSize: '15px' }}>Представительство кредиторов</strong>
                <span style={{ color: 'var(--color-text-secondary)', fontSize: '13px' }}>Инициирование привлечения недобросовестных лиц к ответственности.</span>
              </Link>
              <Link
                href="/grazhdanam/bankrotstvo-fizicheskih-lic/"
                style={{
                  background: '#fff',
                  border: '1px solid var(--color-border)',
                  borderRadius: '8px',
                  padding: '20px',
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}
              >
                <strong style={{ color: 'var(--color-deep-blue)', fontSize: '15px' }}>Банкротство физических лиц</strong>
                <span style={{ color: 'var(--color-text-secondary)', fontSize: '13px' }}>Диагностика последствий личного долга и списания обязательств.</span>
              </Link>
              <Link
                href="/biznesu/bankrotstvo-biznesa/"
                style={{
                  background: '#fff',
                  border: '1px solid var(--color-border)',
                  borderRadius: '8px',
                  padding: '20px',
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}
              >
                <strong style={{ color: 'var(--color-deep-blue)', fontSize: '15px' }}>Хаб: Банкротство бизнеса</strong>
                <span style={{ color: 'var(--color-text-secondary)', fontSize: '13px' }}>Полная карта услуг по банкротству коммерческих организаций.</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Форма контактов */}
        <div id="contacts">
          <ContactsForm
            title="Разберите основания до подготовки возражений"
            subtitle="Сообщите номер дела, вашу процессуальную роль и полученные документы: заявление, определение суда или запрос управляющего. Юрист конфиденциально определит стратегию защиты."
          />
        </div>
      </main>
    </div>
  );
}
