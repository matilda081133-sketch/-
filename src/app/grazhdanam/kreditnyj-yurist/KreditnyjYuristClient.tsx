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

export default function KreditnyjYuristClient() {
  const faqs = [
    {
      q: 'Может ли кредитный юрист списать кредит?',
      a: 'Нельзя обещать списание действительного кредита только по факту обращения к юристу. Можно проверить законность договора и начислений, учёт платежей, требования нового кредитора и процесс взыскания. Если проблема связана не со спорным требованием, а с устойчивой невозможностью платить все долги, отдельно оценивается банкротство.'
    },
    {
      q: 'Банк подал в суд. Уже поздно обращаться?',
      a: 'Нет. Нужно сразу определить суд, номер дела, дату заседания и срок представления документов. Юрист проверит расчёт, доказательства банка и возможные возражения. Отсутствие заёмщика само по себе не мешает суду рассмотреть дело.'
    },
    {
      q: 'Можно ли через суд просто уменьшить ежемесячный платёж?',
      a: 'Суд не обязан менять график только потому, что платёж стал неудобным. Возможность льготного периода, изменения договора, отсрочки или рассрочки зависит от конкретного правового основания, стадии и документов. Эти варианты нельзя подменять обещанием обязательной реструктуризации.'
    },
    {
      q: 'Нужно ли платить по кредиту, пока идёт спор?',
      a: 'Подача претензии, жалобы или иска обычно не прекращает договор и не приостанавливает начисления автоматически. До изменения условий или принятия обеспечительных мер нужно понимать последствия просрочки и действовать по согласованной стратегии.'
    },
    {
      q: 'Можно ли обязать банк предоставить кредитные каникулы?',
      a: 'Если договор и ситуация соответствуют установленным законом критериям, заёмщик вправе предъявить требование о льготном периоде. В остальных случаях изменение графика зависит от договора и согласия кредитора. Сначала нужно проверить параметры кредита и подтверждение обстоятельств.'
    },
    {
      q: 'Что делать, если кредит или микрозайм оформлен без моего согласия?',
      a: 'Нужно запросить документы и сведения об идентификации, зафиксировать обращение к кредитору и правоохранительным органам, проверить кредитную историю и сохранить цифровые доказательства. Последовательность требований зависит от того, как оформлен договор и куда перечислены деньги.'
    },
    {
      q: 'Банк продал долг коллекторам. Теперь сумма бесспорна?',
      a: 'Нет. Нужно проверить, кто является новым кредитором или представителем, чем подтверждены полномочия и переход права требования, как рассчитана сумма и соблюдены ли правила уведомления и взаимодействия.'
    },
    {
      q: 'Я получил судебный приказ. Что делать?',
      a: 'Определите дату получения и не откладывайте обращение. По общему правилу должник вправе представить возражения в течение десяти дней со дня получения копии приказа. Если срок пропущен, отдельно оцениваются причины и доказательства. Подробный порядок — на странице «Отмена судебного приказа».'
    },
    {
      q: 'Пристав уже списал деньги. Это вопрос кредитного юриста?',
      a: 'Если спор связан с постановлением, арестом, удержанием или бездействием пристава, основное направление — исполнительное производство. Кредитный юрист может объяснить происхождение требования, но действия ФССП рассматриваются на отдельной странице.'
    },
    {
      q: 'Как понять, нужен кредитный юрист или банкротство?',
      a: 'Кредитный юрист нужен, когда спорны договор, сумма, начисления, согласие на кредит либо действия конкретного кредитора. Банкротство рассматривают при устойчивой невозможности исполнять совокупность обязательств. Перед выбором маршрута важно оценить оба аспекта.'
    },
    {
      q: 'Какие документы нужны для консультации?',
      a: 'Договор, график, расчёт задолженности, выписки и все полученные требования или судебные документы. Если полного комплекта нет, начните с того, что уже имеется: юрист определит, что запросить дополнительно.'
    },
    {
      q: 'Можно ли работать дистанционно?',
      a: 'Консультацию, анализ и подготовку большинства документов можно начать дистанционно. Способ участия в переговорах и заседаниях зависит от места рассмотрения, стадии дела и технической возможности суда.'
    }
  ];

  const jsonLdGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/grazhdanam/kreditnyj-yurist/#service',
        name: 'Кредитный юрист в Липецке',
        serviceType: 'Юридическая помощь заёмщикам в спорах с банками и МФО',
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Липецкая область' },
          { '@type': 'Country', name: 'Россия' }
        ],
        provider: {
          '@id': 'https://dejure-help.ru/#organization'
        },
        description: 'Помощь кредитного юриста в Липецке: проверим договор и расчёт долга, подготовим обращения и возражения, защитим интересы в споре с банком или МФО.'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/grazhdanam/kreditnyj-yurist/#breadcrumbs',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://dejure-help.ru/' },
          { '@type': 'ListItem', position: 2, name: 'Гражданам', item: 'https://dejure-help.ru/grazhdanam/' },
          { '@type': 'ListItem', position: 3, name: 'Кредитный юрист', item: 'https://dejure-help.ru/grazhdanam/kreditnyj-yurist/' }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/grazhdanam/kreditnyj-yurist/#faq',
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

  const situations = [
    {
      title: 'Платёж скоро станет непосильным',
      desc: 'Есть ли предусмотренное законом или договором основание изменить порядок платежей; какие документы подтвердят изменение обстоятельств.',
      badge: 'До просрочки'
    },
    {
      title: 'Уже возникла просрочка',
      desc: 'Правильно ли учтены платежи, из чего состоит требование и какие действия кредитора ожидаются дальше.',
      badge: 'Просрочка'
    },
    {
      title: 'Получена претензия банка или МФО',
      desc: 'Срок ответа, полномочия отправителя, расчёт долга и целесообразность письменных возражений.',
      badge: 'Претензия'
    },
    {
      title: 'Банк или МФО подали иск',
      desc: 'Срок подготовки позиции, доказательства платежей, расчёт требований, применимые возражения и необходимость представительства.',
      badge: 'Судебный иск'
    },
    {
      title: 'Получен судебный приказ',
      desc: 'Дата получения, суд, взыскатель, сумма и наличие оснований восстановить срок, если он пропущен.',
      badge: 'Судебный приказ'
    },
    {
      title: 'Долг передан коллекторам',
      desc: 'Кто является кредитором или представителем, подтверждён ли переход права требования и соблюдаются ли правила взаимодействия.',
      badge: 'Коллекторы'
    },
    {
      title: 'Кредит оформлен без согласия',
      desc: 'Как заключён договор, куда перечислены деньги, что сохранилось в переписке и какие записи появились в кредитной истории.',
      badge: 'Кредит без согласия'
    },
    {
      title: 'Пристав уже арестовал счёт',
      desc: 'Это отдельная стадия. Нужен переход к юристу по исполнительному производству, если спор связан с действиями ФССП.',
      badge: 'ФССП / Приставы'
    }
  ];

  const auditItems = [
    {
      title: 'Договор и индивидуальные условия',
      desc: 'Стороны, сумма, ставка, график, дополнительные услуги, порядок изменения условий и уведомления.'
    },
    {
      title: 'Расчёт задолженности',
      desc: 'Основной долг, проценты, неустойка, комиссии, поступившие платежи и периоды начисления.'
    },
    {
      title: 'Документы кредитора',
      desc: 'Претензии, уведомления, уступка требования, иск, приложения и доказательства направления документов.'
    },
    {
      title: 'Стадия и сроки',
      desc: 'Досудебный порядок, судебный приказ, исковое производство, сроки ответа, обжалования и представления доказательств.'
    },
    {
      title: 'Основания требований клиента',
      desc: 'Есть ли нарушение, которое можно подтвердить документами, и какой порядок защиты обязателен до суда.'
    },
    {
      title: 'Платёжеспособность и цель',
      desc: 'Временная трудность, спор о размере долга или устойчивая невозможность исполнять все обязательства — это разные маршруты.'
    }
  ];

  const solutionRoutes = [
    {
      title: 'Обращение к кредитору',
      when: 'Нужно проверить расчёт, заявить требование, представить документы или зафиксировать позицию до суда.',
      action: 'Готовит обращение и приложения, контролирует ответ и определяет следующий порядок защиты.'
    },
    {
      title: 'Льготный период или изменение условий',
      when: 'Есть предусмотренные законом критерии либо кредитор готов обсуждать договорный вариант.',
      action: 'Проверяет условия, готовит требование и оценивает новый график. Не обещает согласие банка без правового основания.'
    },
    {
      title: 'Финансовый уполномоченный',
      when: 'Спор относится к его компетенции и соблюдён обязательный претензионный порядок.',
      action: 'Формирует требование финансовой организации, затем обращение и доказательства по применимости.'
    },
    {
      title: 'Защита по иску кредитора',
      when: 'Банк, МФО или новый кредитор предъявил требования в суде.',
      action: 'Проверяет расчёт и доказательства, готовит возражения, ходатайства и представляет позицию.'
    },
    {
      title: 'Оспаривание договора или операции',
      when: 'Есть подтверждаемое отсутствие согласия, нарушение при заключении договора либо спорная дополнительная услуга.',
      action: 'Собирает доказательства, определяет надлежащего ответчика и последовательность обращений.'
    },
    {
      title: 'Другой юридический маршрут',
      when: 'Проблема уже связана с приставом, взысканием в пользу клиента либо устойчивой неплатёжеспособностью.',
      action: 'Переводит в соответствующее направление без подмены услуги кредитного юриста.'
    }
  ];

  const helpScope = [
    {
      task: 'Разбор ситуации',
      result: 'Определены кредитор, стадия, документы, сроки и вопрос, который действительно можно решать юридически.'
    },
    {
      task: 'Проверка договора и расчёта',
      result: 'Зафиксированы состав требования, спорные элементы, неучтённые платежи и недостающие документы.'
    },
    {
      task: 'Выбор порядка защиты',
      result: 'Согласован досудебный, внесудебный, судебный либо смежный маршрут и объяснены его ограничения.'
    },
    {
      task: 'Подготовка документов',
      result: 'Обращение, претензия, заявление, возражения, жалоба или ходатайство подготовлены под факты дела.'
    },
    {
      task: 'Переговоры и переписка',
      result: 'Позиция клиента изложена последовательно, ответы и предложения кредитора проверены до подписания.'
    },
    {
      task: 'Судебное представительство',
      result: 'Документы подаются в срок, доказательства представлены, процессуальная позиция клиента поддерживается в суде.'
    },
    {
      task: 'Завершение этапа',
      result: 'Юрист разъясняет полученный документ, оставшиеся обязательства и следующий необходимый шаг.'
    }
  ];

  const cases: CaseData[] = [
    {
      category: 'Снижение требований банка',
      title: 'Учли платежи и уменьшили сумму требований банка на 214 000 ₽',
      problem: 'Банк обратился в суд с требованием взыскать 1,18 млн ₽ по потребительскому кредиту. Клиент признавал наличие основного долга, но не соглашался с итоговым расчётом: часть внесённых платежей не была отражена, а неустойка составляла значительную часть требований.',
      action: 'Получили полный расчёт и выписку по счёту, сопоставили даты и назначение платежей, подготовили письменные возражения. Представили подтверждения оплаты и отдельно обосновали несоразмерность начисленной неустойки последствиям нарушения.',
      result: 'Суд учёл ранее внесённые платежи и снизил размер неустойки. Итоговая сумма взыскания оказалась на 214 000 ₽ меньше первоначально заявленной банком. Клиент получил понятный расчёт оставшегося обязательства и судебный акт без спорных начислений.'
    },
    {
      category: 'Кредитные каникулы',
      title: 'Получили льготный период после снижения дохода',
      problem: 'После сокращения на работе доход клиента снизился более чем на треть. До этого платежи по двум кредитам вносились без просрочек, но новый размер дохода уже не позволял соблюдать график. Банк устно предложил только внутреннюю реструктуризацию с увеличением общей переплаты.',
      action: 'Проверили параметры договоров и соответствие ситуации условиям льготного периода, рассчитали изменение дохода, подготовили требование кредитору и комплект подтверждающих документов. Отдельно сравнили последствия каникул с предложенным банком новым графиком.',
      result: 'Кредитор предоставил льготный период на шесть месяцев и направил скорректированные графики. Клиент избежал просрочки и выбрал вариант после сравнения полной финансовой нагрузки, а не подписал первое предложенное соглашение.'
    },
    {
      category: 'Оспаривание займа без согласия',
      title: 'Оспорили микрозайм, который клиент не оформлял',
      problem: 'Клиент обнаружил в кредитной истории микрозайм на 178 000 ₽ и просрочку. МФО ссылалась на дистанционное оформление через личный кабинет, однако деньги поступили на неизвестный клиенту счёт. Из-за записи в кредитной истории банк отказал клиенту в ипотеке.',
      action: 'Запросили у МФО договор, сведения об идентификации, реквизиты перечисления и технические данные оформления. Зафиксировали обращение в правоохранительные органы, подготовили претензию финансовой организации и требования об исправлении кредитной истории, затем сформировали судебную позицию.',
      result: 'Суд установил отсутствие подтверждённого волеизъявления клиента на заключение договора. Требования МФО были отклонены, сведения о спорном обязательстве исключены из кредитной истории. После обновления данных клиент повторно обратился за ипотекой.'
    }
  ];

  const processSteps: ProcessStep[] = [
    {
      num: '01',
      title: 'Обращение',
      desc: 'Уточняем кредитора, вид договора, сумму требования, наличие просрочки, претензии, приказа, иска или исполнительного производства.'
    },
    {
      num: '02',
      title: 'Получение документов',
      desc: 'Запрашиваем договор, график, расчёт, выписки, переписку и процессуальные документы; определяем, чего не хватает.'
    },
    {
      num: '03',
      title: 'Правовая оценка',
      desc: 'Проверяем требования и сроки, отделяем подтверждённые обязательства от спорных, сравниваем возможные маршруты.'
    },
    {
      num: '04',
      title: 'Согласование работы',
      desc: 'Объясняем ожидаемый результат и ограничения, фиксируем состав услуг, стоимость и участие клиента.'
    },
    {
      num: '05',
      title: 'Досудебный этап',
      desc: 'Готовим обращения, требования, претензии, ведём переписку и оцениваем предложения кредитора.'
    },
    {
      num: '06',
      title: 'Судебный этап',
      desc: 'Готовим процессуальные документы, представляем доказательства и позицию в согласованном объёме.'
    },
    {
      num: '07',
      title: 'Следующий шаг',
      desc: 'Разъясняем ответ или судебный акт и при необходимости переводим вопрос в апелляцию, исполнительное производство либо другой профильный маршрут.'
    }
  ];

  const documents = [
    {
      group: 'Договор',
      items: 'Кредитный договор или договор займа, индивидуальные условия, график платежей, дополнительные соглашения.'
    },
    {
      group: 'Платежи и расчёт',
      items: 'Выписки, чеки, история операций, справка о задолженности и расчёт кредитора — если получен.'
    },
    {
      group: 'Переписка',
      items: 'Заявления, ответы, претензии, уведомления, сообщения о передаче долга и предложения изменить условия.'
    },
    {
      group: 'Суд',
      items: 'Судебный приказ, иск, приложения, определения, извещения, решение или жалоба — по текущей стадии.'
    },
    {
      group: 'Кредит без согласия',
      items: 'Кредитная история, сведения о счёте получения денег, сообщения, данные личного кабинета, обращения в МФО, банк и правоохранительные органы.'
    },
    {
      group: 'Изменение дохода',
      items: 'Сведения о доходах и документы, подтверждающие трудную жизненную ситуацию, если рассматриваются предусмотренные законом меры.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Консультация и аудит документов',
      subtitle: 'Оценка договора, расчёта и рисков',
      popular: false,
      price: 'По согласованию',
      features: [
        { name: 'Анализ условий кредитного договора и графика', value: 'Включено' },
        { name: 'Проверка расчёта задолженности кредитора', value: 'Включено' },
        { name: 'Определение надлежащего правового маршрута', value: 'Включено' },
        { name: 'Рекомендации по дальнейшим действиям', value: 'Включено' }
      ],
      buttonText: 'Уточнить стоимость',
      buttonHref: '#form'
    },
    {
      title: 'Отмена судебного приказа',
      subtitle: 'Срочная подача возражений',
      popular: true,
      badgeText: 'Срочно',
      price: 'По согласованию',
      features: [
        { name: 'Проверка 10-дневного срока с даты получения', value: 'Включено' },
        { name: 'Подготовка возражений по ст. 129 ГПК РФ', value: 'Включено' },
        { name: 'Обоснование причин при поздней подаче', value: 'Включено' },
        { name: 'Контроль вынесения определения об отмене', value: 'Включено' }
      ],
      buttonText: 'Подробнее об услуге',
      buttonHref: '/grazhdanam/kreditnyj-yurist/otmena-sudebnogo-prikaza/'
    },
    {
      title: 'Досудебная работа и претензии',
      subtitle: 'Обращения в банк, МФО, финуполномоченному',
      popular: false,
      price: 'По согласованию',
      features: [
        { name: 'Подготовка требований о льготном периоде', value: 'Включено' },
        { name: 'Формирование пакета финуполномоченному', value: 'Включено' },
        { name: 'Письменные претензии и возражения банку', value: 'Включено' },
        { name: 'Правовая проверка встречных соглашений', value: 'Включено' }
      ],
      buttonText: 'Уточнить стоимость',
      buttonHref: '#form'
    },
    {
      title: 'Судебная защита по иску',
      subtitle: 'Представительство в суде первой инстанции',
      popular: false,
      price: 'По согласованию',
      features: [
        { name: 'Подготовка отзыва на иск и контррасчёта долга', value: 'Включено' },
        { name: 'Заявление о сроке давности и ст. 333 ГК РФ', value: 'Включено' },
        { name: 'Участие юриста в судебных заседаниях', value: 'Включено' },
        { name: 'Получение и правовой анализ решения суда', value: 'Включено' }
      ],
      buttonText: 'Уточнить стоимость',
      buttonHref: '#form'
    }
  ];

  const relatedServices = [
    {
      title: 'Отмена судебного приказа',
      desc: 'Получили приказ о взыскании кредита или займа — проверить срок и подготовить возражения.',
      link: '/grazhdanam/kreditnyj-yurist/otmena-sudebnogo-prikaza/',
      isChild: true
    },
    {
      title: 'Банкротство физических лиц',
      desc: 'Оценить применимость процедуры, если проблема состоит в невозможности исполнять совокупность обязательств.',
      link: '/grazhdanam/bankrotstvo-fizicheskih-lic/',
      isChild: false
    },
    {
      title: 'Юрист по исполнительному производству',
      desc: 'Обжаловать арест, удержание, списание или бездействие пристава после начала исполнения.',
      link: '/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/',
      isChild: false
    },
    {
      title: 'Взыскание долгов',
      desc: 'Вернуть деньги по расписке, частному займу или другому обязательству на стороне кредитора.',
      link: '/grazhdanam/vzyskanie-dolgov/',
      isChild: false
    }
  ];

  return (
    <main>
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
            <Link href="/grazhdanam/">Гражданам</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Кредитный юрист</span>
          </>
        }
        superTitle="Споры с банками и МФО • защита заёмщика"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Кредитный юрист
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              в Липецке
            </span>
          </span>
        }
        subtitle="Проверим кредитный договор, расчёт задолженности и документы кредитора. Определим, что обоснованно в Вашей ситуации: обращение в банк или МФО, переговоры, возражения либо защита в суде."
        primaryCtaText="Разобрать кредитную ситуацию"
        primaryCtaLink="#form"
        primaryCtaAnalytics="co_hero_primary_click"
        primaryCtaSubtext="Для начала достаточно кратко описать, кто предъявляет требования и на какой стадии находится спор. Не отправляйте договоры и банковские документы через обычную форму."
        imageUrl="/images/nacheshnikov.jpg"
        imageName="Владимир Викторович Начешников"
        imageSubtitle="Специалист ЮК «Де-Юре», куратор направления"
        imageObjectPosition="center 15%"
        trustItems={[
          {
            text: (
              <span>
                <strong>Работаем на стороне заёмщиков</strong>, созаёмщиков и поручителей
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Отделяем спор о долге</strong> от банкротства и исполнительного производства
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>До начала работы объясняем</strong> возможный результат, ограничения и следующий этап
              </span>
            )
          }
        ]}
      />

      {/* ═══ БЛОК 2: НА КАКОЙ СТАДИИ НАХОДИТСЯ ВАША СИТУАЦИЯ ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '48px', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-primary)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '12px', color: 'var(--color-primary)', fontWeight: 600 }}>
                Стадии спора
              </span>
            </div>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.25, textAlign: 'left' }}>
              На какой стадии находится Ваша ситуация
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.65, margin: 0, textAlign: 'left' }}>
              Способ защиты зависит не только от суммы долга. Важно, кто предъявляет требования, какие документы уже получены и дошёл ли вопрос до суда или приставов.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '24px', marginBottom: '36px' }}>
            {situations.map((item, i) => (
              <div
                key={i}
                className="hover-lift"
                style={{
                  padding: '30px 28px',
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: 'var(--color-gold)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '12px',
                    background: 'rgba(193, 160, 102, 0.1)',
                    padding: '4px 10px',
                    display: 'inline-block'
                  }}>
                    {item.badge}
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '19px',
                    fontWeight: 600,
                    color: 'var(--color-deep-blue)',
                    margin: '0 0 12px 0',
                    lineHeight: 1.35
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: '14.5px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '16px' }}>
            <a
              href="#form"
              className="btn btn-primary"
              style={{ padding: '14px 32px', fontSize: '15px', fontWeight: 600 }}
            >
              Определить стадию и следующий шаг
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: ЧТО ПРОВЕРИТ ЮРИСТ ДО ВЫБОРА РЕШЕНИЯ ═══ */}
      <section className="section" id="audit" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '48px', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-primary)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '12px', color: 'var(--color-primary)', fontWeight: 600 }}>
                Правовой аудит
              </span>
            </div>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.25, textAlign: 'left' }}>
              Сначала — документы и расчёт, затем стратегия
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.65, margin: 0, textAlign: 'left' }}>
              Нельзя обещать уменьшение долга или расторжение договора, не изучив условия кредита, движение платежей и требования кредитора.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '32px' }}>
            {auditItems.map((item, i) => (
              <div
                key={i}
                style={{
                  background: '#FFFFFF',
                  padding: '28px 24px',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.04)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--color-gold)', borderRadius: '50%' }}></div>
                  <h3 style={{ margin: 0, fontSize: '17px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', fontWeight: 600 }}>
                    {item.title}
                  </h3>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            background: '#FFFFFF',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-gold)',
            padding: '24px 28px',
            boxShadow: '0 4px 16px rgba(23, 50, 77, 0.05)'
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <div>
                <strong style={{ display: 'block', color: 'var(--color-deep-blue)', fontSize: '15px', marginBottom: '4px' }}>
                  Важно учитывать:
                </strong>
                <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  Сам факт просрочки не делает требования кредитора незаконными, а обращение с жалобой не приостанавливает платежи и взыскание автоматически. Юрист должен отдельно определить юридический эффект каждого действия.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: СРОЧНАЯ СИТУАЦИЯ: СУДЕБНЫЙ ПРИКАЗ ═══ */}
      <section className="section bg-white" style={{ padding: '60px 0' }}>
        <div className="container">
          <div
            style={{
              background: 'linear-gradient(135deg, var(--color-deep-blue) 0%, #17324D 100%)',
              color: '#FFFFFF',
              padding: '44px 40px',
              borderTop: '4px solid var(--color-gold)',
              boxShadow: '0 8px 32px rgba(16, 39, 59, 0.18)',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
              <div>
                <span style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: 'var(--color-gold)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  background: 'rgba(193, 160, 102, 0.2)',
                  padding: '4px 12px',
                  display: 'inline-block',
                  marginBottom: '12px'
                }}>
                  Срочная ситуация • 10 дней на возражения
                </span>
                <h2 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(24px, 3.2vw, 32px)',
                  color: '#FFFFFF',
                  margin: 0,
                  lineHeight: 1.3
                }}>
                  Получили судебный приказ — сначала проверьте срок
                </h2>
              </div>
            </div>

            <p style={{ fontSize: '15.5px', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.65, margin: 0, maxWidth: '900px' }}>
              Судебный приказ выносится без обычного судебного заседания. Если Вы не согласны с взысканием, важно установить дату получения копии и своевременно подать возражения. При пропуске срока оцениваются причины пропуска и подтверждающие документы.
            </p>

            <div>
              <Link
                href="/grazhdanam/kreditnyj-yurist/otmena-sudebnogo-prikaza/"
                className="btn white-btn-custom"
                style={{
                  backgroundColor: 'var(--color-gold)',
                  color: 'var(--color-deep-blue)',
                  border: '1px solid var(--color-gold)',
                  padding: '14px 28px',
                  fontSize: '15px',
                  fontWeight: 700,
                  display: 'inline-block',
                  textDecoration: 'none'
                }}
              >
                Перейти к отмене судебного приказа →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 5: ВОЗМОЖНЫЕ МАРШРУТЫ РЕШЕНИЯ ═══ */}
      <section className="section" id="routes" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '48px', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-primary)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '12px', color: 'var(--color-primary)', fontWeight: 600 }}>
                Стратегия защиты
              </span>
            </div>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.25, textAlign: 'left' }}>
              Решение зависит от стадии и документов
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.65, margin: 0, textAlign: 'left' }}>
              В зависимости от оснований требований и текущей стадии спора кредитный юрист подбирает надлежащий юридический маршрут:
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '24px' }}>
            {solutionRoutes.map((route, i) => (
              <div
                key={i}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  padding: '30px 26px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.04)'
                }}
              >
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '19px',
                    color: 'var(--color-deep-blue)',
                    margin: '0 0 14px 0',
                    lineHeight: 1.35
                  }}>
                    {route.title}
                  </h3>
                  <div style={{ marginBottom: '12px' }}>
                    <span style={{ fontSize: '12.5px', fontWeight: 600, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '4px' }}>
                      Когда рассматривается:
                    </span>
                    <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                      {route.when}
                    </p>
                  </div>
                  <div>
                    <span style={{ fontSize: '12.5px', fontWeight: 600, color: 'var(--color-deep-blue)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '4px' }}>
                      Что делает юрист:
                    </span>
                    <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                      {route.action}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 6: ЧЕМ ПОМОЖЕТ КРЕДИТНЫЙ ЮРИСТ ═══ */}
      <section className="section bg-white" id="scope" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '48px', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-primary)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '12px', color: 'var(--color-primary)', fontWeight: 600 }}>
                Объём помощи
              </span>
            </div>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.25, textAlign: 'left' }}>
              Чем поможет кредитный юрист
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.65, margin: 0, textAlign: 'left' }}>
              Каждый этап работы направлен на понятный и контролируемый процессуальный результат.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '36px' }}>
            {helpScope.map((item, i) => (
              <div
                key={i}
                style={{
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  border: '1px solid var(--color-border)',
                  borderLeft: '4px solid var(--color-primary)',
                  padding: '20px 24px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  gap: '12px'
                }}
              >
                <div style={{ flex: '0 0 260px' }}>
                  <span style={{ fontSize: '12px', color: 'var(--color-gold)', fontWeight: 700, marginRight: '8px' }}>
                    0{i + 1}.
                  </span>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>
                    {item.task}
                  </strong>
                </div>
                <div style={{ flex: '1 1 400px' }}>
                  <span style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    {item.result}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            background: 'var(--gradient-cream)',
            border: '1px solid var(--color-border)',
            padding: '24px 28px',
            marginBottom: '32px'
          }}>
            <strong style={{ color: 'var(--color-deep-blue)', fontSize: '15px', display: 'block', marginBottom: '6px' }}>
              Границы услуги:
            </strong>
            <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
              Кредитный юрист не выдаёт новый кредит, не является брокером, не обещает остановить начисления одним заявлением и не заменяет отдельную процедуру банкротства или работу с приставами.
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <a
              href="#form"
              className="btn btn-primary"
              style={{ padding: '14px 32px', fontSize: '15px', fontWeight: 600 }}
            >
              Обсудить состав помощи
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 7: КУРАТОР НАПРАВЛЕНИЯ ═══ */}
      <SpecialistBlock
        title="Куратор направления — Владимир Начешников"
        name="Владимир Викторович Начешников"
        position="Специалист ЮК «Де-Юре», куратор направления"
        imageUrl="/images/nacheshnikov.jpg"
        imagePosition="center 15%"
        description={[
          'Владимир Викторович анализирует кредитные договоры и требования кредиторов, определяет правовой маршрут, готовит позицию для переговоров и суда и сопровождает кредитные дела на согласованных этапах.',
          'Практический опыт в сфере юридических и корпоративных процедур — с 1997 года. По подтверждению практики занимается кредитными спорами, отменой судебных приказов и защитой прав заёмщиков.',
          'Организует сбор доказательств, проведение контррасчетов задолженности, взаимодействие с мировыми и районными судами Липецка и области.'
        ]}
        buttonText="Обсудить ситуацию с Владимиром Начешниковым"
        buttonHref="#form"
        profileHref="/specialisty/nacheshnikov-vladimir-viktorovich/"
        profileText="Подробнее о специалисте →"
      />

      {/* ═══ БЛОК 8: ПРИМЕРЫ ИЗ ПРАКТИКИ ═══ */}
      <CasesBlock
        cases={cases}
        title="Примеры из практики"
        showAllLink="/praktika"
        showAllText="Смотреть всю практику →"
      />
      <div className="container" style={{ marginTop: '-40px', marginBottom: '40px' }}>
        <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', opacity: 0.85, fontStyle: 'italic', margin: 0 }}>
          * Результат зависит от обстоятельств конкретного дела и не гарантирует аналогичный исход в другой ситуации.
        </p>
      </div>

      {/* ═══ БЛОК 9: КАК ПРОХОДИТ РАБОТА ═══ */}
      <ProcessBlock
        title="Как проходит работа"
        subtitle="Прозрачные этапы защиты интересов заёмщика от первого звонка до получения итогового процессуального документа."
        steps={processSteps}
        ctaTitle="Банк требует долг или подал в суд?"
        ctaSubtitle="Оставьте заявку — кредитный юрист изучит документы и определит законные варианты снижения долга."
        ctaButtonText="Получить консультацию"
        ctaButtonHref="#form"
      />
      <div className="container" style={{ marginTop: '-20px', marginBottom: '60px' }}>
        <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderLeft: '3px solid var(--color-gold)', padding: '16px 20px', fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
          <strong style={{ color: 'var(--color-deep-blue)' }}>Дистанционный формат:</strong> Консультации и обмен несекретными документами возможны дистанционно. Способ передачи финансовых документов и необходимость личного участия согласуются после установления защищённого канала связи.
        </div>
      </div>

      {/* ═══ БЛОК 10: ДОКУМЕНТЫ ДЛЯ ПРЕДВАРИТЕЛЬНОГО АНАЛИЗА ═══ */}
      <section className="section bg-white" id="documents" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '48px', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-primary)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '12px', color: 'var(--color-primary)', fontWeight: 600 }}>
                Подготовка к разбору
              </span>
            </div>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.25, textAlign: 'left' }}>
              Что подготовить к консультации
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.65, margin: 0, textAlign: 'left' }}>
              Для качественного анализа ситуации полезно заранее собрать имеющиеся документы. Если полного комплекта нет, начните с того, что уже есть: юрист определит, что запросить дополнительно.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '32px' }}>
            {documents.map((doc, i) => (
              <div
                key={i}
                style={{
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  padding: '24px 22px',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.04)'
                }}
              >
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '18px',
                  color: 'var(--color-deep-blue)',
                  margin: '0 0 10px 0',
                  fontWeight: 600
                }}>
                  {doc.group}
                </h3>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                  {doc.items}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            background: 'rgba(23, 50, 77, 0.04)',
            borderLeft: '3px solid var(--color-gold)',
            padding: '16px 20px',
            fontSize: '13.5px',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.55
          }}>
            <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>
              Безопасность передачи данных:
            </strong>
            Не отправляйте финансовые и паспортные документы через общую форму на сайте. Способ безопасной передачи материалов будет согласован специалистом при первом звонке.
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 11: СТОИМОСТЬ УСЛУГ ═══ */}
      <PricingBlock
        title="Стоимость зависит от стадии и объёма работы"
        subtitle="Проверка договора, подготовка одного документа и ведение судебного дела — разные объёмы. До начала работы фиксируем задачу, состав услуг и стоимость выбранного этапа."
        tiers={pricingTiers}
        ctaTitle="Рассчитаем стоимость защиты до начала работы"
        ctaSubtitle="Изучим кредитные документы, определим объём работы и зафиксируем стоимость выбранного пакета."
        ctaButtonText="Уточнить стоимость"
        ctaButtonLink="#form"
        disclaimer="Госпошлина, нотариальная доверенность, почтовые расходы и судебные экспертизы зависят от параметров дела и оплачиваются отдельно."
      />

      {/* ═══ БЛОК 12: ЧАСТЫЕ ВОПРОСЫ (FAQ) ═══ */}
      <FAQBlock
        title="Частые вопросы заёмщиков"
        subtitle="Ответы кредитного юриста на самые важные вопросы о долгах, судах, кредитных каникулах и коллекторах."
        faqs={faqs}
      />

      {/* ═══ БЛОК 13: СВЯЗАННЫЕ УСЛУГИ ═══ */}
      <section className="section bg-white" id="related-services" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '48px', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-primary)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '12px', color: 'var(--color-primary)', fontWeight: 600 }}>
                Смежные направления
              </span>
            </div>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.25, textAlign: 'left' }}>
              Связанные услуги
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.65, margin: 0, textAlign: 'left' }}>
              Если Ваша ситуация выходит за рамки кредитного спора, перейдите в профильный раздел:
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '24px' }}>
            {relatedServices.map((srv, idx) => (
              <div
                key={idx}
                className="hover-lift"
                style={{
                  background: srv.isChild ? 'linear-gradient(160deg, #FFFFFF 0%, #F5F0E6 100%)' : 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  border: srv.isChild ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                  borderTop: '4px solid var(--color-primary)',
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 12px', lineHeight: 1.35 }}>
                    {srv.title}
                  </h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: '0 0 24px' }}>
                    {srv.desc}
                  </p>
                </div>
                <div>
                  <Link
                    href={srv.link}
                    className="btn btn-outline"
                    style={{ width: '100%', textAlign: 'center', padding: '12px 20px', fontSize: '14px', fontWeight: 600 }}
                  >
                    {srv.isChild ? 'Перейти к услуге →' : 'Подробнее о направлении →'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 14: ОФИС В ЛИПЕЦКЕ И ФИНАЛЬНАЯ ФОРМА ═══ */}
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
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Разберите кредитную</span>{' '}
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>ситуацию до действий</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Кратко укажите, кто предъявляет требования, примерную сумму и текущую стадию. Юрист определит, какие документы нужны для оценки.
              </p>

              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация юриста в Липецке</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Позвоните прямо сейчас: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (910) 350-31-11</a>
                </p>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '6px' }}>
                  г. Липецк, ул. Советская, д. 35, офис 213 (приём по записи)
                </div>
              </div>

              <div style={{ background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Конфиденциальность:</strong>
                Не указывайте в форме паспортные данные, реквизиты карт и счетов. Документы можно передать юристу после согласования защищённого способа связи.
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm
                title="Получить консультацию"
                subtitle={
                  <>
                    <span style={{ display: 'inline-block' }}>Оставьте имя и номер телефона. Юрист свяжется с вами</span> <br />
                    <span style={{ display: 'inline-block' }}>в течение 15 минут в рабочее время.</span>
                  </>
                }
                subtext={
                  <>
                    <span style={{ display: 'inline-block' }}>Если вы оставите заявку вечером или в&nbsp;выходной день,</span> <br />
                    <span style={{ display: 'inline-block' }}>мы перезвоним в&nbsp;ближайший рабочий день.</span>
                  </>
                }
                buttonText="Получить консультацию"
                commentPlaceholder="Банк или МФО, примерная сумма, просрочка, претензия, приказ или иск..."
                hiddenFields={[
                  { name: 'source_page', value: '/grazhdanam/kreditnyj-yurist/' },
                  { name: 'page_type', value: 'hub' },
                  { name: 'direction', value: 'credit_lawyer' },
                  { name: 'page_id', value: 'CIV-07' },
                  { name: 'curator_id', value: 'nacheshnikov' },
                  { name: 'service', value: 'Кредитный юрист в Липецке' }
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
