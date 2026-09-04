'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';
import ProcessBlock, { ProcessStep } from '@/components/ProcessBlock';
import CasesBlock, { CaseData } from '@/components/CasesBlock';
import SpecialistBlock from '@/components/SpecialistBlock';

export default function VnesudebnoeBankrotstvoMfcClient() {
  // 4 основания (Блок 3)
  const grounds = [
    {
      num: '01',
      title: 'Оконченное исполнительное производство',
      desc: 'На дату подачи заявление производство окончено из-за отсутствия имущества для взыскания по пункту 4 части 1 статьи 46 Закона № 229-ФЗ. После возврата документа нет иных новых незавершённых производств по взысканию денег.'
    },
    {
      num: '02',
      title: 'Пенсия либо участие в СВО',
      desc: 'Пенсия является основным доходом либо гражданин участвует/участвовал в СВО. Исполнительный документ предъявлялся не позднее года назад, требования не исполнены полностью; отсутствует имущество для взыскания с учётом специальных правил.'
    },
    {
      num: '03',
      title: 'Ежемесячное пособие на ребёнка',
      desc: 'Гражданин получает установленное законом ежемесячное пособие в связи с рождением и воспитанием ребёнка. Исполнительный документ предъявлялся не позднее года назад и не исполнен полностью; отсутствует имущество для взыскания.'
    },
    {
      num: '04',
      title: 'Исполнительный документ старше семи лет',
      desc: 'Исполнительный документ имущественного характера предъявлялся к исполнению не позднее семи лет назад, а требования по нему не исполнены либо исполнены частично.'
    }
  ];

  // Какие обязательства входят в лимит (Блок 4)
  const debtCategories = [
    {
      title: 'Кредиты, кредитные карты и микрозаймы',
      desc: 'Банковские кредиты, кредитные линии, овердрафты и займы в микрофинансовых организациях.'
    },
    {
      title: 'Долги по договорам, распискам и решениям',
      desc: 'Задолженности перед физическими и юридическими лицами по договорам, распискам и вступившим в силу судебным актам.'
    },
    {
      title: 'Налоги, сборы и обязательные платежи',
      desc: 'Налоговые начисления, пени, штрафы, обязательные взносы и задолженности по коммунальным услугам.'
    },
    {
      title: 'Обязательства по поручительству',
      desc: 'Поручительства и иные обеспечительные денежные требования независимо от наличия просрочки у основного должника.'
    }
  ];

  // Что проверит юрист (Блок 5)
  const lawyerChecks = [
    {
      title: 'Основание для МФЦ',
      desc: 'Определено конкретное основание из статьи 223.2 Закона № 127-ФЗ, а не только формальное соответствие суммы долга.'
    },
    {
      title: 'Исполнительные производства',
      desc: 'Проверены даты, основания окончания, новые производства и точное содержание исполнительных документов в базе ФССП.'
    },
    {
      title: 'Доход и статус',
      desc: 'Для пенсионеров, участников СВО и получателей детских пособий определён и проверен комплект актуальных справок.'
    },
    {
      title: 'Имущество и изменения',
      desc: 'Оценены зарегистрированное имущество, имущественные права, наследство, подарки и обстоятельства, способные повлиять на процедуру.'
    },
    {
      title: 'Кредиторы и суммы',
      desc: 'Сформирован полный список кредиторов с официальными наименованиями, реквизитами и выверенными суммами требований.'
    },
    {
      title: 'Исключения из освобождения',
      desc: 'Заранее обозначены обязательства, которые по закону сохранятся после завершения процедуры (алименты, вред и др.).'
    },
    {
      title: 'Оптимальный маршрут',
      desc: 'Если условия МФЦ не соблюдаются, предложен судебный либо иной законный вариант без заведомо бесперспективной подачи.'
    }
  ];

  // Документы для предварительного анализа (Блок 6)
  const documentGroups = [
    {
      title: 'Личность',
      items: 'Паспорт, СНИЛС, ИНН; подтверждение места жительства или пребывания для правильного выбора МФЦ.'
    },
    {
      title: 'Долги и договоры',
      items: 'Кредитные договоры, справки об остатке задолженности, выписки, расписки, судебные акты, полный перечень кредиторов.'
    },
    {
      title: 'Документы от приставов',
      items: 'Постановления о возбуждении и окончании производств, сведения о возврате исполнительных документов, актуальные данные ФССП.'
    },
    {
      title: 'Доход и статус',
      items: 'Справки о пенсии, подтверждение участия в СВО, справка о ежемесячном пособии на ребёнка и сведения об иных доходах.'
    },
    {
      title: 'Имущество',
      items: 'Сведения о недвижимости, транспорте, долях, счетах, имущественных правах; сведения о наследстве и ожидаемых изменениях.'
    },
    {
      title: 'Предыдущие процедуры',
      items: 'Даты завершения или прекращения прошлых процедур банкротства и решений о возврате заявлений МФЦ.'
    }
  ];

  // Риски списка кредиторов (Блок 7)
  const creditorRisks = [
    'Не подставлять в форму только названия банков из памяти — нужны точные реквизиты.',
    'Проверить правопреемников, коллекторские агентства и договоры цессии.',
    'Сверить судебные приказы, исполнительные листы, налоги и частные займы.',
    'Не рассчитывать, что сведения автоматически подтянутся и исправятся после подачи.'
  ];

  // Шаги работы (Блок 8)
  const processSteps: ProcessStep[] = [
    {
      num: '01',
      title: 'Первичная оценка',
      desc: 'Уточняем сумму и состав долгов, статус дохода, исполнительные производства, имущество и прошлые процедуры.'
    },
    {
      num: '02',
      title: 'Проверка основания',
      desc: 'Определяем применимый подпункт статьи 223.2 Закона № 127-ФЗ и выявляем правовые препятствия до обращения в МФЦ.'
    },
    {
      num: '03',
      title: 'Сбор сведений и справок',
      desc: 'Формируем полный список кредиторов и документов; объясняем, какие именно справки нужны по Вашему основанию.'
    },
    {
      num: '04',
      title: 'Подготовка заявления',
      desc: 'Заполняем заявление и приложения по актуальной форме, проверяем суммы, основания возникновения и реквизиты кредиторов.'
    },
    {
      num: '05',
      title: 'Подача в МФЦ',
      desc: 'Клиент подаёт документы в МФЦ по месту жительства или пребывания; формат участия юриста согласовывается отдельно.'
    },
    {
      num: '06',
      title: 'Контроль публикации в ЕФРСБ',
      desc: 'Проверяем сведения о возбуждении процедуры в ЕФРСБ либо оперативно разбираем основания возврата заявления.'
    },
    {
      num: '07',
      title: 'Сопровождение 6 месяцев',
      desc: 'Объясняем ограничения, отслеживаем обстоятельства, о которых нужно сообщить, и дату завершения процедуры.'
    }
  ];

  // Что происходит после публикации (Блок 9)
  const efrsbRules = [
    {
      title: 'Мораторий на требования',
      desc: 'В отношении указанных в заявлении требований вводится мораторий; прекращается начисление неустоек, штрафов и процентов в установленном законом объёме.'
    },
    {
      title: 'Приостановление взыскания',
      desc: 'Исполнение имущественных исполнительных документов приостанавливается с установленными законом исключениями.'
    },
    {
      title: 'Запрет на новые обязательства',
      desc: 'Во время процедуры нельзя получать новые займы и кредиты, выдавать поручительства и совершать иные обеспечительные сделки.'
    },
    {
      title: 'Проверки со стороны кредиторов',
      desc: 'Кредиторы из списка вправе направлять запросы о зарегистрированном имуществе и имущественных правах должника.'
    },
    {
      title: 'Обязанность уведомить МФЦ',
      desc: 'Если имущественное положение существенно улучшилось (наследство, дар и т.д.), гражданин обязан уведомить МФЦ в течение 5 рабочих дней.'
    },
    {
      title: 'Право кредиторов на судебное банкротство',
      desc: 'Кредитор вправе инициировать судебное банкротство при наличии оснований, предусмотренных законом (включая сокрытие имущества).'
    }
  ];

  // Кейсы (Блок 11)
  const mfcCases: CaseData[] = [
    {
      category: 'ВНЕСУДЕБНОЕ БАНКРОТСТВО',
      title: 'Провели пенсионера через процедуру без суда',
      problem: 'У клиента было 480 000 ₽ задолженности по двум кредитам и кредитной карте. Пенсия являлась основным источником дохода, исполнительный документ был предъявлен менее года назад и оставался исполненным лишь частично. Имущества для взыскания не имелось.',
      action: 'Проверили исполнительные производства, подтвердили применимое пенсионное основание, получили необходимые справки, сверили наименования банков и суммы по каждому обязательству, подготовили заявление и список кредиторов.',
      result: 'Сведения о процедуре были включены в ЕФРСБ. Через шесть месяцев внесудебное банкротство успешно завершилось, а требования указанных кредиторов были прекращены в предусмотренном законом объёме.'
    },
    {
      category: 'ПОСОБИЕ НА РЕБЁНКА',
      title: 'Подготовили заявление для получателя пособия на ребёнка',
      problem: 'У матери двоих детей накопилось 315 000 ₽ по микрозаймам и кредитной карте. Она получала ежемесячное пособие в связи с рождением и воспитанием ребёнка. Исполнительный документ был предъявлен менее года назад, взыскание полностью не произведено, имущества не имелось.',
      action: 'Подтвердили статус и сроки исполнительного документа, собрали актуальные справки, восстановили цепочку уступки двух займов коллекторам и указали действующих кредиторов, а не первоначальные МФО.',
      result: 'МФЦ принял заявление с первого раза, процедура прошла без возврата. По истечении шести месяцев клиент был освобождён от указанных обязательств в установленном законом порядке.'
    },
    {
      category: 'СТАРОЕ ПРОИЗВОДСТВО',
      title: 'Использовали основание по длительному неисполнению документа',
      problem: 'Долг клиента составлял 870 000 ₽. Исполнительный документ был предъявлен более семи лет назад и оставался исполненным только в небольшой части. В базе числились разные номера производств и сменившийся взыскатель.',
      action: 'Сопоставили судебный акт, исполнительный документ и историю производств, проверили дату предъявления и остаток долга, установили правопреемника кредитора и подготовили точный список обязательств.',
      result: 'Заявление подали по корректному основанию статьи 223.2 Закона № 127-ФЗ. Процедура была возбуждена и по истечении шести месяцев завершилась освобождением от требований, включённых в заявление.'
    }
  ];

  // Возврат и прекращение (Блок 12)
  const terminationScenarios = [
    {
      title: 'Заявление возвращено МФЦ',
      desc: 'Причину возврата нужно разобрать по документам. Повторное обращение возможно не ранее чем через один месяц; неправомерные действия или недостоверные межведомственные сведения могут быть обжалованы в установленном порядке.'
    },
    {
      title: 'Появилось имущество или доход',
      desc: 'Если имущественное положение существенно улучшилось (наследство, подарок), гражданин обязан уведомить МФЦ в течение 5 рабочих дней, после чего процедура прекращается.'
    },
    {
      title: 'Обнаружен неуказанный кредитор',
      desc: 'Его требование не попадает под мораторий и не прекращается по итогам внесудебной процедуры. Кредитор также вправе инициировать судебное банкротство в случаях, указанных законом.'
    },
    {
      title: 'Обнаружено сокрытое имущество или сделка',
      desc: 'Кредитор вправе использовать предусмотренные законом правовые механизмы, включая подачу заявления о признании гражданина банкротом в арбитражный суд.'
    },
    {
      title: 'Условия МФЦ не соблюдаются',
      desc: 'Не стоит подавать заявление «на удачу»: лучше сразу оценить судебное банкротство, переговоры с кредиторами или работу с исполнительным производством.'
    }
  ];

  // Последствия после завершения (Блок 14)
  const afterEffects = [
    {
      title: 'Освобождение от заявленных долгов',
      desc: 'Освобождение касается требований кредиторов, указанных в заявлении, с учётом заявленных сумм и предусмотренных законом исключений.'
    },
    {
      title: 'Сохранение неуказанных требований',
      desc: 'Требования кредиторов, не включённых в заявление, сохраняются в полном объёме; также не прекращаются алименты, возмещение вреда и требования при недобросовестности.'
    },
    {
      title: 'Информирование о банкротстве (5 лет)',
      desc: 'В течение пяти лет при обращении за получением кредита или займа гражданин обязан указывать на факт своего банкротства.'
    },
    {
      title: 'Запрет на повторную подачу (5 лет)',
      desc: 'В течение пяти лет гражданин не вправе повторно инициировать собственное внесудебное или судебное банкротство.'
    },
    {
      title: 'Ограничения на руководство (3 года)',
      desc: 'В течение трёх лет нельзя занимать должности в органах управления юридического лица (для кредитных и финансовых организаций сроки выше).'
    },
    {
      title: 'Публичность сведений в ЕФРСБ',
      desc: 'Сведения о проведении и завершении процедуры публикуются в открытом реестре ЕФРСБ, поэтому гарантировать конфиденциальность невозможно.'
    }
  ];

  // FAQ (Блок 15)
  const mfcFaqList = [
    {
      q: 'Достаточно ли долга от 25 000 до 1 000 000 ₽ для подачи заявления?',
      a: 'Нет. Кроме подходящего общего размера обязательств необходимо наличие хотя бы одного из четырёх оснований, предусмотренных статьёй 223.2 Закона № 127-ФЗ.'
    },
    {
      q: 'МФЦ сам проверит и добавит всех кредиторов?',
      a: 'Нет. Гражданин самостоятельно формирует и подаёт список кредиторов. Требования неуказанного кредитора не прекращаются, а заниженная сумма долга освобождается только в заявленном размере.'
    },
    {
      q: 'Сколько длится внесудебное банкротство?',
      a: 'Шесть месяцев со дня включения сведений о возбуждении процедуры в ЕФРСБ, если процедура не будет прекращена раньше.'
    },
    {
      q: 'Нужно ли платить госпошлину и финансовому управляющему?',
      a: 'Нет. Внесудебная процедура проводится бесплатно и без участия финансового управляющего. Платной может быть только отдельно заказанная помощь юриста.'
    },
    {
      q: 'Можно ли подать заявление онлайн?',
      a: 'Закон предусматривает подачу заявления в МФЦ по месту жительства или пребывания. Актуальный доступный способ обращения и регламент конкретного МФЦ нужно проверять перед подачей.'
    },
    {
      q: 'Что делать, если МФЦ вернул заявление?',
      a: 'Установить точную причину возврата и исправить комплект документов. Повторно обратиться можно не ранее чем через один месяц со дня возврата или размещения сообщения.'
    },
    {
      q: 'Что будет, если во время процедуры получить наследство?',
      a: 'Если имущество или другое существенное изменение позволяет полностью либо значительно погасить долги, нужно уведомить МФЦ в течение пяти рабочих дней; процедура прекращается.'
    },
    {
      q: 'Все ли долги прекратятся после завершения процедуры?',
      a: 'Нет. Сохраняются требования неуказанных кредиторов и обязательства, на которые закон не распространяет освобождение (алименты, возмещение вреда, субсидиарная ответственность и др.).'
    },
    {
      q: 'Можно ли выбрать МФЦ вместо суда при долге больше 1 млн ₽?',
      a: 'Нет, если общий размер учитываемых обязательств превышает установленный законом лимит. В этом случае необходимо рассматривать судебное банкротство.'
    },
    {
      q: 'Нужен ли юрист для процедуры через МФЦ?',
      a: 'По закону участие юриста не обязательно. Юрист полезен для предварительной проверки основания, производств ФССП, формирования полного списка кредиторов и минимизации рисков возврата.'
    }
  ];

  // Связанные услуги (Блок 16)
  const relatedServices = [
    {
      title: 'Судебное банкротство физических лиц',
      desc: 'Если условия МФЦ не соблюдаются, долг выше 1 млн ₽ или есть сложное имущество, оценить процедуру через суд.',
      link: '/grazhdanam/bankrotstvo-fizicheskih-lic/'
    },
    {
      title: 'Кредитный юрист',
      desc: 'Оспорить спорный долг, незаконные начисления, комиссии или кредит, оформленный без Вашего согласия.',
      link: '/grazhdanam/kreditnyj-yurist/'
    },
    {
      title: 'Юрист по исполнительному производству',
      desc: 'Проверить производства, удержания из дохода, аресты счетов и действия судебного пристава-исполнителя.',
      link: '/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/'
    },
    {
      title: 'Банкротство индивидуального предпринимателя',
      desc: 'Разобрать личные и предпринимательские обязательства действующего или недавно закрытого ИП.',
      link: '/biznesu/bankrotstvo-biznesa/bankrotstvo-individualnogo-predprinimatelya/'
    }
  ];

  // JSON-LD Schema
  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://dejure-help.ru/grazhdanam/bankrotstvo-fizicheskih-lic/cherez-mfc/#service",
        "name": "Внесудебное банкротство через МФЦ в Липецке",
        "serviceType": "Юридическая помощь при внесудебном банкротстве физических лиц",
        "description": "Проверим условия внесудебного банкротства через МФЦ, исполнительные производства и список кредиторов. Поможем подготовить заявление без лишних рисков.",
        "areaServed": [
          { "@type": "AdministrativeArea", "name": "Липецкая область" },
          { "@type": "Country", "name": "Россия" }
        ],
        "provider": { "@id": "https://dejure-help.ru/#organization" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://dejure-help.ru/grazhdanam/bankrotstvo-fizicheskih-lic/cherez-mfc/#breadcrumbs",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Главная",
            "item": "https://dejure-help.ru/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Гражданам",
            "item": "https://dejure-help.ru/grazhdanam/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Банкротство физических лиц",
            "item": "https://dejure-help.ru/grazhdanam/bankrotstvo-fizicheskih-lic/"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Внесудебное банкротство через МФЦ",
            "item": "https://dejure-help.ru/grazhdanam/bankrotstvo-fizicheskih-lic/cherez-mfc/"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://dejure-help.ru/grazhdanam/bankrotstvo-fizicheskih-lic/cherez-mfc/#faq",
        "mainEntity": mfcFaqList.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
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

      {/* ═══ 1. ПЕРВЫЙ ЭКРАН (MilitaryHero) ═══ */}
      <MilitaryHero
        breadcrumbs={
          <>
            <Link href="/" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>Главная</Link>
            <span style={{ margin: '0 8px' }}>/</span>
            <Link href="/grazhdanam/" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>Гражданам</Link>
            <span style={{ margin: '0 8px' }}>/</span>
            <Link href="/grazhdanam/bankrotstvo-fizicheskih-lic/" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>Банкротство физических лиц</Link>
            <span style={{ margin: '0 8px' }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Через МФЦ</span>
          </>
        }
        superTitle="Банкротство без суда • предварительная проверка условий"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>Внесудебное банкротство</span>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>через МФЦ в Липецке</span>
          </span>
        }
        subtitle="Проверим, соответствует ли Ваша ситуация условиям бесплатной процедуры, восстановим список кредиторов и объясним риски до подачи заявления."
        primaryCtaText="Проверить условия банкротства через МФЦ"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_mfc_hero_cta"
        primaryCtaSubtext={
          <>
            Окончательный вывод возможен после проверки исполнительных производств, доходов, имущества и состава обязательств.{' '}
            <span style={{ display: 'block', marginTop: '4px', fontSize: '13px', color: 'var(--color-text-secondary)' }}>
              Или позвоните:{' '}
              <a href="tel:+79103503111" style={{ color: 'var(--color-deep-blue)', textDecoration: 'none', fontWeight: 600 }}>
                +7 (910) 350-31-11
              </a>
            </span>
          </>
        }
        trustItems={[
          { text: 'Сумма обязательств — от 25 000 до 1 000 000 ₽.' },
          { text: 'Процедура в МФЦ длится шесть месяцев и не требует финансового управляющего.' },
          { text: 'Одной подходящей суммы долга недостаточно: нужно одно из четырёх законных оснований.' }
        ]}
        imageUrl="/images/nacheshnikov.jpg"
        imageName="Владимир Викторович Начешников"
        imageSubtitle="Специалист ЮК «Де-Юре» по банкротству граждан"
      />

      {/* ═══ 2. КОМУ МОЖЕТ ПОДОЙТИ ВНЕСУДЕБНОЕ БАНКРОТСТВО (4 основания) ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '48px', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
                Основания по закону
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 700, color: 'var(--color-text-main)', lineHeight: 1.25, marginBottom: '20px' }}>
              Кому может подойти внесудебное банкротство
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.6, color: 'var(--color-text-secondary)', margin: 0 }}>
              Подать заявление через МФЦ можно при общей сумме учитываемых законом обязательств от 25 000 до 1 000 000 ₽ и наличии хотя бы одного из оснований ниже. Проверять нужно не только размер просрочки, а все денежные обязательства и обязательные платежи, которые закон включает в расчёт.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {grounds.map((g, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--color-bg-light)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '8px',
                  padding: '32px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative'
                }}
              >
                <div
                  style={{
                    alignSelf: 'flex-start',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    backgroundColor: 'rgba(197, 160, 89, 0.12)',
                    color: 'var(--color-primary)',
                    marginBottom: '16px'
                  }}
                >
                  ОСНОВАНИЕ {g.num}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-text-main)', marginBottom: '12px', lineHeight: 1.35 }}>
                  {g.title}
                </h3>
                <p style={{ fontSize: '14.5px', lineHeight: 1.6, color: 'var(--color-text-secondary)', margin: 0 }}>
                  {g.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '24px', padding: '16px 20px', background: '#F8FAFC', borderRadius: '6px', borderLeft: '3px solid var(--color-primary)', fontSize: '13.5px', color: 'var(--color-text-secondary)' }}>
            <strong>Важно:</strong> Не является автоматическим вердиктом. Предварительная оценка требует сопоставления официальных справок, банка данных исполнительных производств ФССП и истории предъявления исполнительных документов.
          </div>
        </div>
      </section>

      {/* ═══ 3. КАКИЕ ОБЯЗАТЕЛЬСТВА ВХОДЯТ В ДИАПАЗОН 25 000–1 000 000 ₽ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '40px', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
                Расчёт лимита
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(24px, 2.8vw, 34px)', fontWeight: 700, color: 'var(--color-text-main)', lineHeight: 1.25, marginBottom: '16px' }}>
              Какие обязательства входят в диапазон от 25 000 до 1 000 000 ₽
            </h2>
            <p style={{ fontSize: '15.5px', lineHeight: 1.6, color: 'var(--color-text-secondary)', margin: 0 }}>
              Для проверки лимита учитываются не только просроченные кредиты. Закон охватывает денежные обязательства и обязательные платежи, включая обязательства, срок исполнения которых ещё не наступил, алименты и поручительство независимо от просрочки основного должника. При этом освобождение по итогам процедуры имеет собственные исключения.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {debtCategories.map((cat, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1px solid var(--color-border)',
                  borderRadius: '8px',
                  padding: '24px 20px',
                  borderTop: '3px solid var(--color-primary)'
                }}
              >
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-text-main)', marginBottom: '10px' }}>
                  {cat.title}
                </h3>
                <p style={{ fontSize: '13.5px', lineHeight: 1.55, color: 'var(--color-text-secondary)', margin: 0 }}>
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '32px', textAlign: 'center' }}>
            <Link
              href="#form"
              className="btn btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 28px',
                fontWeight: 600,
                fontSize: '15px',
                borderRadius: '6px'
              }}
            >
              Проверить состав долгов перед подачей
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 4. ЧТО ПРОВЕРИТ ЮРИСТ ДО ПОДАЧИ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '44px', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
                Юридический аудит
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(24px, 2.8vw, 34px)', fontWeight: 700, color: 'var(--color-text-main)', lineHeight: 1.25, marginBottom: '16px' }}>
              Что проверит юрист до подачи заявления в МФЦ
            </h2>
            <p style={{ fontSize: '15.5px', lineHeight: 1.6, color: 'var(--color-text-secondary)', margin: 0 }}>
              Предварительный правовой аудит исключает заведомо необоснованную подачу, возврат заявления и риски оспаривания со стороны кредиторов.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
            {lawyerChecks.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--color-bg-light)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '8px',
                  padding: '24px 20px',
                  display: 'flex',
                  gap: '16px'
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(197, 160, 89, 0.15)',
                    color: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '14px',
                    flexShrink: 0
                  }}
                >
                  {idx + 1}
                </div>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-text-main)', marginBottom: '8px' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '13.5px', lineHeight: 1.55, color: 'var(--color-text-secondary)', margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 5. ДОКУМЕНТЫ ДЛЯ ПРЕДВАРИТЕЛЬНОГО АНАЛИЗА ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '44px', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
                Пакет сведений
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(24px, 2.8vw, 34px)', fontWeight: 700, color: 'var(--color-text-main)', lineHeight: 1.25, marginBottom: '16px' }}>
              Документы для предварительного анализа
            </h2>
            <p style={{ fontSize: '15.5px', lineHeight: 1.6, color: 'var(--color-text-secondary)', margin: 0 }}>
              Для подготовки заявления по актуальной форме и проверки оснований юристу потребуется комплект сведений по следующим категориям:
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
            {documentGroups.map((doc, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1px solid var(--color-border)',
                  borderRadius: '8px',
                  padding: '24px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }}></div>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-text-main)', margin: 0 }}>
                    {doc.title}
                  </h3>
                </div>
                <p style={{ fontSize: '13.5px', lineHeight: 1.55, color: 'var(--color-text-secondary)', margin: 0 }}>
                  {doc.items}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '28px', padding: '16px 20px', background: '#FFFBEB', borderRadius: '6px', borderLeft: '3px solid #D97706', fontSize: '13.5px', color: '#92400E' }}>
            <strong>Предупреждение о конфиденциальности:</strong> Не отправляйте паспортные данные, банковские выписки и финансовые документы через обычную форму на сайте. После первой связи юрист сообщит защищённый способ передачи сведений.
          </div>
        </div>
      </section>

      {/* ═══ 6. СПИСОК КРЕДИТОРОВ: КЛЮЧЕВОЙ РИСК ПРОЦЕДУРЫ ═══ */}
      <section className="section" style={{ padding: '80px 0', background: '#111827', color: '#ffffff', borderBottom: '1px solid #1F2937' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '40px', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
                Ключевой риск процедуры
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(24px, 2.8vw, 36px)', fontWeight: 700, color: '#ffffff', lineHeight: 1.25, marginBottom: '18px' }}>
              МФЦ не дополнит заявление за Вас
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.65, color: '#D1D5DB', margin: 0 }}>
              Освобождение распространяется на требования кредиторов, указанных в заявлении, и в пределах корректно заявленной суммы. Долг перед неуказанным кредитором не прекращается. Если сумма указана ниже фактической, освобождение действует только в указанном размере. Поэтому перед подачей нужно восстановить полный состав обязательств, официальные наименования кредиторов и суммы требований.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '36px' }}>
            {creditorRisks.map((risk, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  padding: '20px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px'
                }}
              >
                <div style={{ color: 'var(--color-primary)', fontSize: '18px', lineHeight: 1 }}>⚠</div>
                <span style={{ fontSize: '14px', lineHeight: 1.5, color: '#E5E7EB' }}>
                  {risk}
                </span>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'left' }}>
            <Link
              href="#form"
              className="btn btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 28px',
                fontWeight: 600,
                fontSize: '15px',
                borderRadius: '6px'
              }}
            >
              Сверить список кредиторов с юристом
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 7. КАК ПРОХОДИТ РАБОТА (ProcessBlock) ═══ */}
      <ProcessBlock
        title="Как проходит подготовка и сама процедура в МФЦ"
        subtitle="Сопровождаем процесс от предварительного аудита до истечения шести месяцев и контроля сведений в ЕФРСБ."
        steps={processSteps}
      />

      {/* ═══ 8. ЧТО ПРОИСХОДИТ ПОСЛЕ ВКЛЮЧЕНИЯ В ЕФРСБ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '44px', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
                Режим процедуры
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(24px, 2.8vw, 34px)', fontWeight: 700, color: 'var(--color-text-main)', lineHeight: 1.25, marginBottom: '16px' }}>
              Что происходит после включения сведений в ЕФРСБ
            </h2>
            <p style={{ fontSize: '15.5px', lineHeight: 1.6, color: 'var(--color-text-secondary)', margin: 0 }}>
              С момента публикации сообщения о возбуждении процедуры в Едином федеральном реестре сведений о банкротстве наступают следующие правовые последствия:
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
            {efrsbRules.map((rule, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--color-bg-light)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '8px',
                  padding: '24px 20px',
                  borderLeft: '3px solid var(--color-primary)'
                }}
              >
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-text-main)', marginBottom: '8px' }}>
                  {rule.title}
                </h3>
                <p style={{ fontSize: '13.5px', lineHeight: 1.55, color: 'var(--color-text-secondary)', margin: 0 }}>
                  {rule.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 9. КУРАТОР НАПРАВЛЕНИЯ (SpecialistBlock) ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name="Владимир Викторович Начешников"
        position="Специалист ЮК «Де-Юре» по банкротству граждан"
        description={[
          "Владимир Викторович оценивает основания для внесудебного банкротства, проверяет исполнительные производства и состав обязательств, помогает выбрать между процедурой через МФЦ и судебным маршрутом.",
          "Практический опыт в сфере юридических и корпоративных процедур — с 1997 года."
        ]}
        imageUrl="/images/nacheshnikov.jpg"
        profileHref="/specialisty/nacheshnikov-vladimir-viktorovich/"
        profileText="Подробнее о специалисте →"
        buttonText="Обсудить ситуацию с Владимиром Начешниковым"
        buttonHref="#form"
      />

      {/* ═══ 10. ПРИМЕРЫ ИЗ ПРАКТИКИ (CasesBlock) ═══ */}
      <CasesBlock
        cases={mfcCases}
        title="Примеры из практики по банкротству через МФЦ"
      />

      {/* ═══ 11. ВОЗВРАТ И ПРЕКРАЩЕНИЕ ПРОЦЕДУРЫ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '44px', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
                Правовые последствия
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(24px, 2.8vw, 34px)', fontWeight: 700, color: 'var(--color-text-main)', lineHeight: 1.25, marginBottom: '16px' }}>
              Возврат заявления и прекращение процедуры
            </h2>
            <p style={{ fontSize: '15.5px', lineHeight: 1.6, color: 'var(--color-text-secondary)', margin: 0 }}>
              Закон четко регулирует обстоятельства, при которых МФЦ может вернуть заявление или при которых возбуждённая процедура подлежит прекращению:
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {terminationScenarios.map((scen, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1px solid var(--color-border)',
                  borderRadius: '8px',
                  padding: '24px 20px'
                }}
              >
                <div
                  style={{
                    display: 'inline-block',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    fontSize: '11.5px',
                    fontWeight: 700,
                    backgroundColor: 'rgba(197, 160, 89, 0.12)',
                    color: 'var(--color-primary)',
                    marginBottom: '12px'
                  }}
                >
                  СИТУАЦИЯ {idx + 1}
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-text-main)', marginBottom: '8px' }}>
                  {scen.title}
                </h3>
                <p style={{ fontSize: '13.5px', lineHeight: 1.55, color: 'var(--color-text-secondary)', margin: 0 }}>
                  {scen.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 12. СТОИМОСТЬ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '44px', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
                Финансовые условия
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(24px, 2.8vw, 34px)', fontWeight: 700, color: 'var(--color-text-main)', lineHeight: 1.25, marginBottom: '16px' }}>
              Процедура в МФЦ бесплатна. Работа юриста оплачивается отдельно
            </h2>
            <p style={{ fontSize: '15.5px', lineHeight: 1.6, color: 'var(--color-text-secondary)', margin: 0 }}>
              МФЦ и оператор ЕФРСБ не взимают плату за проведение внесудебного банкротства. Обращение к юристу не является обязательным условием. Стоимость работы «Де-Юре» зависит от количества кредиторов, состояния исполнительных производств, необходимости восстанавливать документы и устранять причины предыдущего возврата.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div
              style={{
                background: 'var(--color-bg-light)',
                border: '1px solid var(--color-border)',
                borderRadius: '8px',
                padding: '32px 24px',
                borderTop: '3px solid #10B981'
              }}
            >
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#10B981', textTransform: 'uppercase', marginBottom: '8px' }}>
                Государственная услуга
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-text-main)', marginBottom: '12px' }}>
                Подача и процедура в МФЦ
              </h3>
              <div style={{ fontSize: '24px', fontWeight: 700, color: '#10B981', marginBottom: '12px' }}>
                0 ₽ (Бесплатно)
              </div>
              <p style={{ fontSize: '13.5px', lineHeight: 1.55, color: 'var(--color-text-secondary)', margin: 0 }}>
                По закону процедура проводится без государственной пошлины, без финансового управляющего и без платы за публикацию в ЕФРСБ.
              </p>
            </div>

            <div
              style={{
                background: 'var(--color-bg-light)',
                border: '1px solid var(--color-border)',
                borderRadius: '8px',
                padding: '32px 24px',
                borderTop: '3px solid var(--color-primary)'
              }}
            >
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', marginBottom: '8px' }}>
                Юридическая помощь «Де-Юре»
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-text-main)', marginBottom: '12px' }}>
                Аудит, документы и сопровождение
              </h3>
              <div style={{ fontSize: '18px', fontWeight: 600, color: 'var(--color-text-main)', marginBottom: '12px' }}>
                По согласованию после анализа
              </div>
              <p style={{ fontSize: '13.5px', lineHeight: 1.55, color: 'var(--color-text-secondary)', marginBottom: '20px' }}>
                Включает проверку оснований по ст. 223.2, аудит исполнительных производств, формирование списка кредиторов и подготовку заявления.
              </p>
              <Link
                href="#form"
                className="btn btn-primary"
                style={{
                  display: 'inline-block',
                  width: '100%',
                  textAlign: 'center',
                  padding: '12px 20px',
                  fontWeight: 600,
                  fontSize: '14px',
                  borderRadius: '6px'
                }}
              >
                Уточнить стоимость
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 13. ПОСЛЕДСТВИЯ ПОСЛЕ ЗАВЕРШЕНИЯ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '44px', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
                После 6 месяцев
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(24px, 2.8vw, 34px)', fontWeight: 700, color: 'var(--color-text-main)', lineHeight: 1.25, marginBottom: '16px' }}>
              Последствия после завершения процедуры
            </h2>
            <p style={{ fontSize: '15.5px', lineHeight: 1.6, color: 'var(--color-text-secondary)', margin: 0 }}>
              После успешного завершения шестимесячного срока и внесения записи в ЕФРСБ наступают установленные законом последствия:
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
            {afterEffects.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1px solid var(--color-border)',
                  borderRadius: '8px',
                  padding: '24px 20px'
                }}
              >
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-text-main)', marginBottom: '8px' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '13.5px', lineHeight: 1.55, color: 'var(--color-text-secondary)', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 14. ЧАСТЫЕ ВОПРОСЫ (FAQBlock) ═══ */}
      <FAQBlock
        superTitle="Вопросы и ответы"
        title="Частые вопросы о банкротстве через МФЦ"
        subtitle="Ответы на распространенные вопросы о бесплатной внесудебной процедуре, основаниях и рисках."
        faqs={mfcFaqList}
      />

      {/* ═══ 15. СВЯЗАННЫЕ УСЛУГИ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
                Смежные направления
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(24px, 2.8vw, 34px)', fontWeight: 700, color: 'var(--color-text-main)', lineHeight: 1.25, marginBottom: '16px' }}>
              Связанные услуги
            </h2>
            <p style={{ fontSize: '15.5px', lineHeight: 1.6, color: 'var(--color-text-secondary)', margin: 0 }}>
              Если условия внесудебного банкротства через МФЦ не подходят или ситуация требует иных мер правовой защиты:
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {relatedServices.map((srv, idx) => (
              <Link
                key={idx}
                href={srv.link}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: '#ffffff',
                  border: '1px solid var(--color-border)',
                  borderRadius: '8px',
                  padding: '24px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                }}
                className="hover-gold-card"
              >
                <div>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-text-main)', marginBottom: '10px' }}>
                    {srv.title}
                  </h3>
                  <p style={{ fontSize: '13.5px', lineHeight: 1.55, color: 'var(--color-text-secondary)', margin: 0 }}>
                    {srv.desc}
                  </p>
                </div>
                <span style={{ marginTop: '16px', fontSize: '13.5px', fontWeight: 600, color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  Подробнее →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 16. ЛОКАЛЬНЫЙ БЛОК И ОФИС ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
                  Офис в Липецке
                </span>
              </div>
              <h2 style={{ fontSize: 'clamp(24px, 2.8vw, 34px)', fontWeight: 700, color: 'var(--color-text-main)', lineHeight: 1.25, marginBottom: '16px' }}>
                Проверить условия банкротства через МФЦ в Липецке
              </h2>
              <p style={{ fontSize: '15.5px', lineHeight: 1.6, color: 'var(--color-text-secondary)', marginBottom: '24px' }}>
                Можно встретиться в офисе «Де-Юре» или начать с дистанционного анализа. Перед визитом согласуйте время и подготовьте сведения о долгах и исполнительных производствах.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '15px', color: 'var(--color-text-main)', marginBottom: '28px' }}>
                <div><strong>Адрес:</strong> г. Липецк, ул. Советская, д. 35, оф. 213</div>
                <div>
                  <strong>Телефон:</strong>{' '}
                  <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 600 }}>
                    +7 (910) 350-31-11
                  </a>
                </div>
                <div><strong>Время работы:</strong> Пн–Пт с 9:00 до 18:00</div>
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link
                  href="#form"
                  className="btn btn-primary"
                  style={{ padding: '12px 24px', fontWeight: 600, fontSize: '14px', borderRadius: '6px' }}
                >
                  Записаться на встречу
                </Link>
                <a
                  href="https://yandex.ru/maps/-/CDuO4V0k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{
                    padding: '12px 24px',
                    fontWeight: 600,
                    fontSize: '14px',
                    borderRadius: '6px',
                    border: '1px solid var(--color-border)',
                    background: '#ffffff',
                    color: 'var(--color-text-main)',
                    textDecoration: 'none'
                  }}
                >
                  Построить маршрут
                </a>
              </div>
            </div>

            <div style={{ position: 'relative', height: '320px', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
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
      </section>

      {/* ═══ 17. ФИНАЛЬНАЯ ФОРМА (ContactsForm) ═══ */}
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
