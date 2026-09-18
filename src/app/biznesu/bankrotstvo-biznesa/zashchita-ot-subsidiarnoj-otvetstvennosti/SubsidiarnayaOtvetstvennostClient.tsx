'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock, { FAQItem } from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';
import CasesBlock, { CaseData } from '@/components/CasesBlock';
import ProcessBlock, { ProcessStep } from '@/components/ProcessBlock';
import PricingBlock, { PricingTier } from '@/components/PricingBlock';
import SpecialistBlock from '@/components/SpecialistBlock';

export default function SubsidiarnayaOtvetstvennostClient() {
  const situations = [
    {
      tag: 'Генеральный директор',
      title: 'Вменяют непередачу бухгалтерской базы и убыточные сделки',
      desc: 'Конкурсный управляющий подал заявление по ст. 61.11 Закона о банкротстве. Докажем объективную невозможность передачи или факт передачи первички.'
    },
    {
      tag: 'Бывший руководитель',
      title: 'Вменяют долги, возникшие после увольнения или смены руководства',
      desc: 'Чётко разделим дату фактического прекращения полномочий, акт приёма-передачи дел и исключим обязательства, возникшие при новом менеджменте.'
    },
    {
      tag: 'Участник ООО',
      title: 'Привлекают к ответственности только из-за доли в компании',
      desc: 'Статус участника сам по себе не равен контролю над бизнесом. Опровергнем презумпцию влияния на хозяйственные решения и докажем пассивный статус.'
    },
    {
      tag: 'Бенефициар бизнеса',
      title: 'Обвиняют в теневом контроле и неформальном извлечении выгоды',
      desc: 'Разрушим косвенные предположения заявителя, докажем отсутствие прямых указаний и экономической связи между решениями и банкротством.'
    },
    {
      tag: 'Главный бухгалтер',
      title: 'Претензии связаны с искажением финансовой отчётности',
      desc: 'Проверим трудовой договор, должностную инструкцию и реальное распределение полномочий. Докажем добросовестность ведения бухгалтерского учёта.'
    },
    {
      tag: 'Арест активов',
      title: 'Суд наложил арест на личные банковские счета и имущество семьи',
      desc: 'Подготовим мотивированное ходатайство об отмене или замене обеспечительных мер, снимем блокировку со счетов для обеспечения нормальной жизни.'
    }
  ];

  const urgentCards = [
    {
      title: 'Срочная подготовка мотивированного отзыва',
      desc: 'Срок подачи отзыва ограничен датой первого судебного заседания. Непредставление письменных возражений толкуется судом как фактическое согласие с доводами заявителя.'
    },
    {
      title: 'Угроза ареста личного имущества и счетов',
      desc: 'Заявители вместе с подачей иска почти всегда требуют наложения обеспечительных мер на недвижимость, автомобили и банковские карты ответчика и членов его семьи.'
    },
    {
      title: 'Категорический запрет на спешный вывод активов',
      desc: 'Дарение или продажа имущества родственникам перед заседанием немедленно квалифицируются судом как злоупотребление правом и приводят к гарантированному проигрышу дела.'
    }
  ];

  const defenseContours = [
    {
      title: 'Оспаривание статуса КДЛ',
      what: 'Проверяем, доказал ли заявитель фактическую возможность давать обязательные указания компании.',
      why: 'Опровергнуть презумпции контроля, основанные исключительно на формальной должности или родственных связях.'
    },
    {
      title: 'Проверка законных оснований иска',
      what: 'Разграничиваем ст. 61.11 (непередача документов, порочные сделки) и ст. 61.12 (неподача заявления о банкротстве).',
      why: 'Выстроить предметную контрпозицию под конкретный состав вменяемого правонарушения.'
    },
    {
      title: 'Разграничение периодов контроля',
      what: 'Исключаем из ответственности периоды до назначения руководителя и после его фактического увольнения.',
      why: 'Снять с доверителя ответственность за долги, возникшие при прежнем или последующем руководстве.'
    },
    {
      title: 'Опровержение причинно-следственной связи',
      what: 'Доказываем наступление банкротства вследствие внешних экономических факторов (санкции, кризис, неплатёжи контрагентов).',
      why: 'Подтвердить, что управленческие решения директора соответствовали стандартам разумности и добросовестности.'
    },
    {
      title: 'Контррасчёт размера требований',
      what: 'Исключаем необоснованные долги, требования аффилированных лиц, штрафные санкции и мораторные проценты.',
      why: 'Кратно уменьшить сумму взыскания даже при частичном удовлетворении заявления судом.'
    },
    {
      title: 'Процессуальная защита в арбитраже',
      what: 'Заявляем пропуск срока исковой давности, ходатайствуем об отмене арестов и привлекаем профильных экспертов.',
      why: 'Добиться полного отказа в удовлетворении требований кредиторов и арбитражного управляющего.'
    }
  ];

  const processSteps: ProcessStep[] = [
    {
      num: '01',
      title: 'Анализ заявления и судебного дела',
      desc: 'Изучаем текст заявления управляющего или кредитора, приложенные расчёты, судебные акты и материалы арбитражного дела.'
    },
    {
      num: '02',
      title: 'Сбор доказательств добросовестности',
      desc: 'Восстанавливаем переписку, первичку, протоколы собраний, экономические обоснования решений и бизнес-планы выхода из кризиса.'
    },
    {
      num: '03',
      title: 'Разработка правовой позиции',
      desc: 'Формируем эшелонированную линию защиты: опровержение статуса КДЛ, отсутствие вины, отсутствие причинно-следственной связи и контррасчёт.'
    },
    {
      num: '04',
      title: 'Подготовка мотивированного отзыва',
      desc: 'Составляем мотивированные возражения со ссылками на позиции Верховного Суда РФ, судебную практику и реестр письменных доказательств.'
    },
    {
      num: '05',
      title: 'Судебное представительство',
      desc: 'Защищаем интересы руководителя в судебных заседаниях арбитражного суда первой инстанции, заявляем ходатайства и контрдоводы.'
    },
    {
      num: '06',
      title: 'Контроль судебного акта и апелляция',
      desc: 'Анализируем вынесенное определение арбитражного суда и при необходимости готовим апелляционную или кассационную жалобу.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Экспресс-аудит заявления',
      subtitle: 'Оценка рисков и перспектив спора',
      price: 'от 10 000 ₽',
      popular: false,
      features: [
        { name: 'изучение заявления управляющего/кредитора', value: 'Да' },
        { name: 'проверка оснований по ст. 61.11, 61.12 Закона о банкротстве', value: 'Да' },
        { name: 'оценка рисков обеспечительных мер и арестов', value: 'Да' },
        { name: 'письменные рекомендации и стратегия защиты', value: 'Да' }
      ],
      buttonText: 'Заказать аудит',
      buttonHref: '#form'
    },
    {
      title: 'Подготовка мотивированного отзыва',
      subtitle: 'Формирование письменной позиции',
      price: 'от 35 000 ₽',
      popular: true,
      badgeText: 'Популярно',
      features: [
        { name: 'разработка правовой позиции по всем эпизодам заявления', value: 'Да' },
        { name: 'сбор и систематизация доказательств добросовестности', value: 'Да' },
        { name: 'подготовка контррасчёта размера ответственности', value: 'Да' },
        { name: 'составление мотивированного отзыва со ссылками на ВС РФ', value: 'Да' }
      ],
      buttonText: 'Подготовить отзыв',
      buttonHref: '#form'
    },
    {
      title: 'Комплексная защита в суде',
      subtitle: 'Полное ведение обособленного спора',
      price: 'от 70 000 ₽',
      popular: false,
      features: [
        { name: 'все действия тарифа «Подготовка отзыва»', value: 'Да' },
        { name: 'личное участие юриста во всех заседаниях суда', value: 'Да' },
        { name: 'подача ходатайств об истребовании и отмене мер', value: 'Да' },
        { name: 'привлечение экспертов и приобщение заключений', value: 'Да' }
      ],
      buttonText: 'Защитить в суде',
      buttonHref: '#form'
    },
    {
      title: 'Апелляционное обжалование',
      subtitle: 'Отмена незаконного определения суда',
      price: 'от 40 000 ₽',
      popular: false,
      features: [
        { name: 'детальный аудит определения суда первой инстанции', value: 'Да' },
        { name: 'выявление нарушений материального и процессуального права', value: 'Да' },
        { name: 'подготовка мотивированной апелляционной жалобы', value: 'Да' },
        { name: 'представительство в 19-м арбитражном апелляционном суде', value: 'Да' }
      ],
      buttonText: 'Обжаловать судебный акт',
      buttonHref: '#form'
    }
  ];

  const casesData: CaseData[] = [
    {
      category: 'Бывший директор',
      title: 'Бывший руководитель: разделение периодов и полный отказ во взыскании 38 млн ₽',
      problem: 'Конкурсный управляющий потребовал привлечь бывшего директора к субсидиарной ответственности за неподачу заявления о банкротстве и рост кредиторской задолженности.',
      action: 'Доказали, что объективное банкротство наступило спустя 14 месяцев после увольнения доверителя. Предоставили акт приёма-передачи дел и опровергли вменение долгов нового менеджмента.',
      result: 'Арбитражный суд Липецкой области согласился с доводами защиты и полностью отказал в удовлетворении требований к нашему доверителю.'
    },
    {
      category: 'Участник общества',
      title: 'Спор о фактическом контроле: отказ во взыскании 22 млн ₽ с миноритария',
      problem: 'Кредиторы пытались привлечь участника с долей 25% солидарно с генеральным директором, утверждая, что он одобрял убыточные контракты компании.',
      action: 'Провели аудит протоколов общих собраний и доказали отсутствие кворума для единоличных решений. Подтвердили статус пассивного инвестора без вмешательства в оперативное управление.',
      result: 'Суд признал презумпцию контроля опровергнутой и полностью снял ответственность с участника.'
    },
    {
      category: 'Действующий директор',
      title: 'Защита от ответственности на 115 млн ₽: снижение суммы до 4,2 млн ₽',
      problem: 'Управляющий вменил директору завода непередачу бухгалтерской первички и потребовал взыскать все долги компании перед реестром кредиторов.',
      action: 'Доказали частичное изъятие архива следственными органами и причинную связь банкротства с санкционными ограничениями на импортное сырье. Исключили чужие долги.',
      result: 'Суд отказал в привлечении по ключевой ст. 61.11 Закона о банкротстве, снизив размер ответственности более чем в 27 раз.'
    }
  ];

  const faqItems: FAQItem[] = [
    {
      q: 'Кого признают контролирующим должника лицом (КДЛ)?',
      a: 'КДЛ признается лицо, имевшее право давать обязательные для компании указания либо иным образом определять её действия в течение 3 лет до признания банкротом. Это руководитель, участники с контрольным пакетом, бенефициары, а в некоторых случаях — финдиректор или ликвидатор.'
    },
    {
      q: 'Учредитель автоматически отвечает по долгам ООО при банкротстве?',
      a: 'Нет. По общему правилу участники не отвечают по обязательствам ООО. Чтобы привлечь учредителя к субсидиарной ответственности, заявитель обязан доказать, что банкротство наступило именно из-за его виновных указаний или одобрения заведомо убыточных сделок.'
    },
    {
      q: 'Могут ли привлечь директора, если он уволился за год до банкротства?',
      a: 'Да, если вменяемые нарушения (непередача документов или совершение подозрительных сделок) приходятся на период его руководства. Защита обязана доказать факт надлежащей передачи дел новому руководителю по описи.'
    },
    {
      q: 'Что делать, если бухгалтерские документы компании утрачены при пожаре или затоплении?',
      a: 'Необходимо подтвердить факт происшествия официальными актами МЧС, коммунальных служб или полиции, а также доказать принятие мер по восстановлению учёта (запросы в банк, контрагентам, налоговую). Без доказательств суд применит презумпцию вины.'
    },
    {
      q: 'Как снять обеспечительные меры и арест с личных счетов?',
      a: 'Подается мотивированное ходатайство об отмене обеспечительных мер либо об их замене. Мы доказываем суду несоразмерность мер, отсутствие риска сокрытия имущества и необходимость разблокировки счетов для выплаты зарплаты и содержания семьи.'
    },
    {
      q: 'Списывается ли субсидиарная ответственность при личном банкротстве гражданина?',
      a: 'Нет. Согласно п. 6 ст. 213.28 Закона о банкротстве долги по субсидиарной ответственности не подлежат списанию при личном банкротстве гражданина. Защищаться необходимо именно в арбитражном споре о привлечении к ответственности.'
    },
    {
      q: 'Какой срок исковой давности по субсидиарной ответственности?',
      a: 'Заявление может быть подано в течение 3 лет со дня, когда заявитель узнал или должен был узнать о наличии оснований, но не позднее 3 лет со дня завершения конкурсного производства и не позднее 10 лет со дня совершения нарушения.'
    },
    {
      q: 'Можно ли заключить мировое соглашение по субсидиарной ответственности?',
      a: 'Да. Закон допускает утверждение мирового соглашения с арбитражным управляющим и кредиторами с согласованием существенной скидки от суммы долга и графика рассрочки выплат.'
    },
    {
      q: 'Что такое деловой риск и как он защищает директора?',
      a: 'Руководитель не несет ответственности за убытки, если действовал в рамках нормального предпринимательского риска, с должной осмотрительностью и имел экономически обоснованный антикризисный план.'
    },
    {
      q: 'Сколько длится рассмотрение спора в арбитражном суде?',
      a: 'Рассмотрение обособленного спора в суде первой инстанции занимает от 4 до 10 месяцев в зависимости от объема экспертиз, запросов в госорганы и числа ответчиков.'
    }
  ];

  const relatedServices = [
    {
      title: 'Банкротство компании со стороны должника',
      desc: 'Превентивная защита предприятия и руководства от рисков субсидиарки.',
      link: '/biznesu/bankrotstvo-biznesa/bankrotstvo-kompanii-so-storony-dolzhnika/'
    },
    {
      title: 'Оспаривание сделок при банкротстве',
      desc: 'Защита сделок директора от признания недействительными по ст. 61.2 и 61.3.',
      link: '/biznesu/bankrotstvo-biznesa/osparivanie-sdelok-pri-bankrotstve/'
    },
    {
      title: 'Обжалование действий арбитражного управляющего',
      desc: 'Пресечение злоупотреблений и предвзятости конкурсного управляющего.',
      link: '/biznesu/bankrotstvo-biznesa/obzhalovanie-dejstvij-arbitrazhnogo-upravlyayushchego/'
    },
    {
      title: 'Корпоративные споры между участниками',
      desc: 'Защита от необоснованных претензий и убытков со стороны партнеров по бизнесу.',
      link: '/biznesu/korporativnyj-yurist/korporativnye-spory-mezhdu-uchastnikami/'
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
        areaServed: ['Липецк', 'Липецкая область'],
        employee: {
          '@id': 'https://dejure-help.ru/specialisty/nacheshnikov-vladimir-viktorovich/#person'
        }
      },
      {
        '@type': 'Person',
        '@id': 'https://dejure-help.ru/specialisty/nacheshnikov-vladimir-viktorovich/#person',
        name: 'Владимир Викторович Начешников',
        url: 'https://dejure-help.ru/specialisty/nacheshnikov-vladimir-viktorovich/',
        worksFor: {
          '@id': 'https://dejure-help.ru/#legalservice'
        }
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/zashchita-ot-subsidiarnoj-otvetstvennosti/#service',
        name: 'Защита от субсидиарной ответственности в Липецке',
        serviceType: 'Защита директоров и учредителей от субсидиарной ответственности при банкротстве',
        provider: {
          '@id': 'https://dejure-help.ru/#legalservice'
        },
        areaServed: ['Липецк', 'Липецкая область'],
        url: 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/zashchita-ot-subsidiarnoj-otvetstvennosti/',
        description: 'Защита генеральных директоров, бенефициаров и учредителей в арбитражном суде: опровержение статуса КДЛ, снятие арестов с личного имущества, доказывание добросовестности.'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/zashchita-ot-subsidiarnoj-otvetstvennosti/#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Главная',
            item: 'https://dejure-help.ru/'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Бизнесу',
            item: 'https://dejure-help.ru/biznesu/'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Банкротство бизнеса',
            item: 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/'
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Защита от субсидиарной ответственности',
            item: 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/zashchita-ot-subsidiarnoj-otvetstvennosti/'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/zashchita-ot-subsidiarnoj-otvetstvennosti/#faq',
        mainEntity: faqItems.map(item => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a
          }
        }))
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />
      <Header />

      {/* ═══ БЛОК 1: HERO ═══ */}
      <MilitaryHero
        breadcrumbs={
          <>
            <Link href="/">Главная</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/biznesu/">Бизнесу</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/biznesu/bankrotstvo-biznesa/">Банкротство бизнеса</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Защита от субсидиарной ответственности</span>
          </>
        }
        superTitle={
          <span style={{ whiteSpace: 'normal', display: 'inline-block', lineHeight: 1.4 }}>
            <span style={{ display: 'inline-block' }}>БАНКРОТСТВО КОМПАНИИ • ЗАЩИТА РУКОВОДСТВА •</span> <br />
            <span style={{ display: 'inline-block' }}>Липецк и арбитраж</span>
          </span>
        }
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Защита от субсидиарной
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              ответственности
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Защитим генерального директора, бенефициаров и учредителей компании при предъявлении требований арбитражного управляющего или кредиторов на любой стадии банкротства.
          </span>
        }
        primaryCtaText="Защитить имущество и права"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_primary_cta_subsidiarnaya_otvetstvennost"
        primaryCtaSubtext={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Перезвоним в рабочее время
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              или ответим по телефону: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (4742) 20-15-25</a>
            </span>
          </span>
        }
        imageUrl="/images/nacheshnikov.jpg"
        imageName="Владимир Викторович Начешников"
        imageSubtitle="Куратор направления арбитражного и банкротного права"
        imageObjectPosition="center 15%"
        trustItems={[
          {
            text: (
              <span>
                <strong>Куратор направления</strong> — Владимир Викторович Начешников
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Опровержение презумпций контроля</strong> и разделение периодов руководства
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Снятие арестов</strong> с личных счетов, недвижимости и автотранспорта
              </span>
            )
          }
        ]}
      />

      {/* ═══ БЛОК 2: ТИПОВЫЕ СИТУАЦИИ / КАТЕГОРИИ ОТВЕТЧИКОВ (#situations) ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span style={{ display: 'inline-block' }}>Субъекты субсидиарной</span> <br />
              <span style={{ display: 'inline-block' }}>ответственности в банкротстве</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Закон позволяет привлекать широкий круг лиц. Стратегия защиты принципиально зависит от вашей процессуальной роли, дат полномочий и реального объёма контроля.
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
                  {sit.tag && (
                    <div style={{
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
                    }}>
                      {sit.tag}
                    </div>
                  )}

                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '18px',
                    fontWeight: 600,
                    color: 'var(--color-deep-blue)',
                    margin: '0 0 12px 0',
                    lineHeight: 1.35
                  }}>
                    {sit.title}
                  </h3>

                  <p style={{
                    fontSize: '14px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    {sit.desc}
                  </p>
                </div>

                <a
                  href="#form"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--color-primary)',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    marginTop: '20px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-primary)')}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('form');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    else window.location.hash = 'form';
                  }}
                >
                  <span>Защитить права</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: СРОЧНОСТЬ — КОГДА ДЕЙСТВОВАТЬ НЕОБХОДИМО СЕЙЧАС (#urgent) ═══ */}
      <section className="section" id="urgent" style={{ background: 'var(--color-deep-blue)', color: '#FFFFFF', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '60px', height: '2px', background: 'var(--color-gold)' }}></div>
              <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Срочность защиты
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 3.8vw, 38px)', color: '#FFFFFF', margin: '0 0 16px 0', lineHeight: 1.25 }}>
              Получили заявление о субсидиарной ответственности? Время ограничено
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.82)', margin: 0, lineHeight: 1.65 }}>
              В отличие от обычного искового производства, в банкротстве бремя доказывания добросовестности возлагается непосредственно на руководителя компании:
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '40px' }}>
            {urgentCards.map((card, cIdx) => (
              <div
                key={cIdx}
                className="urgent-card hover-lift"
                style={{
                  background: 'linear-gradient(135deg, #FAF7F2 0%, #F3ECDF 100%)',
                  padding: '30px 24px',
                  borderTop: '4px solid var(--color-gold)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
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
                      {card.title}
                    </div>
                  </div>
                  <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '14px', lineHeight: 1.55, margin: 0 }}>
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.08)',
            borderLeft: '4px solid var(--color-gold)',
            padding: '24px 28px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px'
          }}>
            <div style={{ maxWidth: '680px' }}>
              <strong style={{ display: 'block', fontSize: '16px', color: '#FFFFFF', marginBottom: '4px' }}>
                Субсидиарная ответственность не списывается через банкротство физического лица
              </strong>
              <span style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.5 }}>
                Взысканный долг остаётся навсегда. Единственный способ защитить личные активы и семью — отбить требования в арбитражном суде.
              </span>
            </div>
            <a
              href="#form"
              className="btn"
              style={{
                background: 'var(--color-gold)',
                color: 'var(--color-deep-blue)',
                fontWeight: 700,
                padding: '14px 26px',
                whiteSpace: 'nowrap',
                textDecoration: 'none'
              }}
            >
              Срочная консультация
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: ШЕСТЬ КОНТУРОВ АНАЛИЗА И ЗАЩИТЫ (#check) ═══ */}
      <section className="section" id="check" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              <span style={{ display: 'inline-block' }}>Карта защиты: шесть независимых</span> <br />
              <span style={{ display: 'inline-block' }}>контуров анализа</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Вместо абстрактных заверений выстраиваем системную оборону по каждому из шести обязательных элементов доказывания в суде.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', position: 'relative' }}>
            {defenseContours.map((item, idx) => (
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
                  0{idx + 1}
                </div>
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '8px 0 14px 0', lineHeight: 1.35 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: '0 0 12px 0' }}>
                  <strong>Что исследуем:</strong> {item.what}
                </p>
                <p style={{ fontSize: '13.5px', color: 'var(--color-deep-blue)', lineHeight: 1.55, margin: 0, borderTop: '1px dashed var(--color-border)', paddingTop: '10px' }}>
                  <strong>Результат:</strong> {item.why}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 5: КУРАТОР НАПРАВЛЕНИЯ ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name="Владимир Викторович Начешников"
        position="Специалист по арбитражным спорам и банкротству, куратор корпоративного направления"
        imageUrl="/images/nacheshnikov.jpg"
        imagePosition="center 15%"
        profileHref="/specialisty/nacheshnikov-vladimir-viktorovich/"
        profileText="Подробнее о Владимире Викторовиче Начешникове →"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Банкротство должника — это не формальная ликвидация компании, а сложный судебный процесс с высокими рисками личной субсидиарной ответственности руководства и учредителей.
          </span>,
          <span key="2" style={{ color: 'var(--color-deep-blue)', display: 'block', marginTop: '12px' }}>
            Владимир Викторович лично руководит правовым аудитом кризисной ситуации, оценивает безопасность сделок за трёхлетний период и формирует выверенную позицию для арбитражного суда.
          </span>
        ]}
        buttonText="Обсудить ситуацию с куратором"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 6: ПРАКТИКА И КЕЙСЫ ═══ */}
      <CasesBlock
        title={<><span style={{ display: 'inline-block' }}>Практика защиты руководства</span> <br /><span style={{ display: 'inline-block' }}>от субсидиарной ответственности</span></>}
        cases={casesData}
        showAllLink="/praktika/"
        showAllText="Смотреть всю практику →"
        showDemoWarning={true}
      />

      {/* ═══ БЛОК 7: ПОРЯДОК РАБОТЫ ═══ */}
      <ProcessBlock
        title="Порядок совместной работы"
        subtitle="Шесть последовательных шагов защиты — от аудита заявления до победы в арбитражном суде."
        alignTitle="center"
        steps={processSteps}
        ctaTitle="Получили заявление о субсидиарной ответственности?"
        ctaSubtitle="Передайте материалы дела на срочную экспертизу ведущему судебному юристу."
        ctaButtonText="Защитить интересы"
        ctaButtonHref="#form"
      />

      {/* ═══ БЛОК 8: ТАРИФЫ И СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость защиты от субсидиарной ответственности"
        subtitle="Фиксированная стоимость юридических услуг в договоре без скрытых доплат."
        tiers={pricingTiers}
        disclaimer="Судебные расходы, государственные пошлины, экспертизы и нотариальные расходы оплачиваются отдельно и при вынесении решения в пользу доверителя взыскиваются с заявителя."
        ctaTitle="Рассчитаем стоимость защиты в арбитраже"
        ctaSubtitle="Оставьте заявку — куратор изучит текст заявления и сформирует стратегию защиты."
        ctaButtonText="Рассчитать стоимость"
        ctaButtonLink="#form"
      />

      {/* ═══ БЛОК 9: FAQ ═══ */}
      <FAQBlock
        superTitle="Частые вопросы ответчиков"
        title={<><span>Вопросы и ответы</span> <br /><span>о субсидиарной ответственности</span></>}
        subtitle="О рисках КДЛ, непередаче документов, арестах имущества и доказывании добросовестности"
        ctaText="Задать свой вопрос"
        ctaLink="#form"
        faqs={faqItems}
      />

      {/* ═══ БЛОК 10: СМЕЖНЫЕ НАПРАВЛЕНИЯ ПРАКТИКИ ═══ */}
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
              Смежные направления практики
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '24px'
            }}>
              <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px, 3.5vw, 34px)', color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.25, flex: '1 1 480px', minWidth: '280px' }}>
                <span style={{ display: 'inline-block' }}>Связанные процедуры</span> <br /><span style={{ display: 'inline-block' }}>в арбитражном суде</span>
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
                Комплексная юридическая защита руководителей, учредителей и собственников бизнеса.
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
                    borderTop: '3px solid var(--color-primary)',
                    borderRadius: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 16px rgba(23, 50, 77, 0.04)',
                    transition: 'all 0.3s ease'
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
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 11: ФИНАЛЬНАЯ ФОРМА (#form) ═══ */}
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
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Защитите активы</span>{' '}
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>до судебного заседания</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Сообщите номер дела, вашу процессуальную роль и сумму вменяемых требований. Юрист изучит карточку дела и назовёт перечень материалов для защиты.
              </p>

              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация юриста</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Позвоните нам: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (4742) 20-15-25</a>
                </p>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '6px' }}>
                  Липецк, ул. Советская, д. 35, офис 213 (приём по записи)
                </div>
              </div>

              <div style={{ background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Конфиденциальность:</strong>
                Не указывайте в форме конфиденциальные финансовые сведения, пароли и личные данные третьих лиц. Безопасный канал передачи документов согласуем после контакта.
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm
                title="Заявка на защиту"
                subtitle="Оставьте контакты и номер дела — юрист свяжется с вами в течение 15 минут в рабочее время."
                subtext="Если вы оставите заявку вечером или в выходной день, мы свяжемся с вами в ближайший рабочий день."
                buttonText="Защитить имущество и права"
                commentPlaceholder="Кратко укажите суть требований, номер дела или сумму иска…"
                hiddenFields={[
                  { name: 'source_page', value: '/biznesu/bankrotstvo-biznesa/zashchita-ot-subsidiarnoj-otvetstvennosti/' },
                  { name: 'service', value: 'Защита от субсидиарной ответственности' }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 12: FOOTER ═══ */}
      <Footer />
    </>
  );
}
