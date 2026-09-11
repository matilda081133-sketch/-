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
      tag: 'До просрочки',
      title: [
        'Платёж скоро станет',
        'непосильным для оплаты',
        'по графику договора'
      ],
      desc: 'Есть ли предусмотренное законом или договором основание изменить порядок платежей; какие документы подтвердят изменение обстоятельств.'
    },
    {
      tag: 'Просрочка',
      title: [
        'Уже возникла просрочка',
        'по кредиту или займу',
        'и начисляются штрафы'
      ],
      desc: 'Правильно ли учтены платежи, из чего состоит требование и какие действия кредитора ожидаются дальше.'
    },
    {
      tag: 'Претензия',
      title: [
        'Получено требование',
        'или официальная претензия',
        'от банка либо МФО'
      ],
      desc: 'Срок ответа, полномочия отправителя, расчёт долга и целесообразность письменных возражений.'
    },
    {
      tag: 'Судебный иск',
      title: [
        'Банк или МФО',
        'подали исковое заявление',
        'о взыскании долга в суд'
      ],
      desc: 'Срок подготовки позиции, доказательства платежей, расчёт требований, применимые возражения и необходимость представительства.'
    },
    {
      tag: 'Судебный приказ',
      title: [
        'Мировой судья вынес',
        'судебный приказ о взыскании',
        'задолженности по кредиту'
      ],
      desc: 'Дата получения, суд, взыскатель, сумма и наличие оснований восстановить срок, если он пропущен.'
    },
    {
      tag: 'Коллекторы',
      title: [
        'Долг по кредиту',
        'передан коллекторам',
        'или новому кредитору'
      ],
      desc: 'Кто является кредитором или представителем, подтверждён ли переход права требования и соблюдаются ли правила взаимодействия.'
    },
    {
      tag: 'Кредит без согласия',
      title: [
        'Кредит или микрозайм',
        'оформлен мошенниками',
        'без вашего согласия'
      ],
      desc: 'Как заключён договор, куда перечислены деньги, что сохранилось в переписке и какие записи появились в кредитной истории.'
    },
    {
      tag: 'ФССП / Приставы',
      title: [
        'Судебный пристав',
        'уже арестовал счета',
        'или удерживает доход'
      ],
      desc: 'Это отдельная стадия. Нужен переход к юристу по исполнительному производству, если спор связан с действиями ФССП.'
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
      num: '01',
      title: 'Аудит ситуации и расчёт долга',
      desc: 'Определяем кредитора, стадию спора, проверяем структуру долга, скрытые начисления, неучтённые платежи и сроки обжалования.'
    },
    {
      num: '02',
      title: 'Выбор порядка защиты',
      desc: 'Подбираем надёжный маршрут: досудебные претензии, льготный период, финансовый уполномоченный или судебная защита.'
    },
    {
      num: '03',
      title: 'Подготовка документов',
      desc: 'Составляем мотивированные возражения на судебный приказ или иск, ходатайства о снижении неустойки, запросы и жалобы.'
    },
    {
      num: '04',
      title: 'Переговоры и претензии',
      desc: 'Ведём официальную переписку с банком, МФО или коллекторами, фиксируем нарушения и проверяем законность уступки права.'
    },
    {
      num: '05',
      title: 'Судебное представительство',
      desc: 'Лично защищаем интересы заёмщика в суде, доказываем необоснованность требований кредитора и снижаем сумму взыскания.'
    },
    {
      num: '06',
      title: 'Контроль исполнения решения',
      desc: 'Получаем судебный акт, проверяем правильность расчёта, прекращение начислений и защищаем от незаконных действий приставов.'
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
    },
    {
      isBanner: true,
      title: 'Дистанционный формат',
      desc: 'Консультации и обмен несекретными документами возможны дистанционно. Способ передачи финансовых документов и необходимость личного участия согласуются после установления защищённого канала связи.'
    }
  ];

  const primaryDocuments = [
    {
      title: 'Кредитный договор или договор займа',
      desc: 'Индивидуальные условия, график платежей, дополнительные соглашения и заявления заёмщика.'
    },
    {
      title: 'Выписки по счёту и квитанции',
      desc: 'Банковские выписки, чеки, история транзакций в онлайн-банке и справка о текущей задолженности.'
    },
    {
      title: 'Документы об изменении дохода',
      desc: 'Справка 2-НДФЛ, трудовая книжка с записью об увольнении или больничные листы (для кредитных каникул).'
    }
  ];

  const secondaryDocuments = [
    {
      title: 'Переписка и претензии',
      desc: 'Заявления, ответы кредитора, претензии, уведомления об уступке прав (цессии) и требования досрочного возврата.'
    },
    {
      title: 'Судебные акты и извещения',
      desc: 'Судебный приказ, исковое заявление банка или МФО с расчётом, повестки, определения суда, постановление пристава.'
    },
    {
      title: 'Документы по займам без согласия',
      desc: 'Кредитная история из БКИ, выписка о переводе на сторонний счёт, талон-уведомление из полиции.'
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
      desc: 'Получили приказ о взыскании кредита или микрозайма — проверить 10-дневный срок и отменить приказ.',
      link: '/grazhdanam/kreditnyj-yurist/otmena-sudebnogo-prikaza/'
    },
    {
      title: 'Банкротство физических лиц',
      desc: 'Оценить законную возможность полного списания долгов через суд или бесплатно через МФЦ.',
      link: '/grazhdanam/bankrotstvo-fizicheskih-lic/'
    },
    {
      title: 'Юрист по исполнительному производству',
      desc: 'Защитить доходы от чрезмерных удержаний, снять арест со счетов или обжаловать действия пристава.',
      link: '/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/'
    },
    {
      title: 'Возврат списанных денег',
      desc: 'Поворот исполнения судебного приказа, возврат удержанных банком сумм и социальных выплат.',
      link: '/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/vozvrat-nezakonno-spisannyh-deneg/'
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
                <strong>До начала работы объясняем</strong> возможный результат,<br />ограничения и следующий этап
              </span>
            )
          }
        ]}
      />

      {/* ═══ БЛОК 2: НА КАКОЙ СТАДИИ НАХОДИТСЯ ВАША СИТУАЦИЯ ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>На какой стадии</span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>находится Ваша ситуация</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Способ защиты зависит не только от суммы долга. Важно, кто предъявляет требования, какие документы уже получены и дошёл ли вопрос до суда или приставов.
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '28px', marginBottom: '36px' }}>
            {situations.map((item, i) => (
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
                  lineHeight: 1.35, 
                  minHeight: '68px',
                  position: 'relative', 
                  zIndex: 1 
                }}>
                  {item.title.map((line, idx) => (
                    <span key={idx} className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                      {line}
                    </span>
                  ))}
                </h3>
                <p style={{ 
                  fontSize: '14.5px', 
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

      {/* ═══ БЛОК 3: ДИАГНОСТИКА: ПОЧЕМУ СНАЧАЛА НУЖЕН АНАЛИЗ МАТЕРИАЛОВ ═══ */}
      <section className="section bg-light" id="audit" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{
            borderBottom: '1px solid rgba(193, 160, 102, 0.3)',
            paddingBottom: '28px',
            marginBottom: '40px'
          }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px'
            }}>
              Правовой аудит
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '28px'
            }}>
              <div style={{ maxWidth: '620px' }}>
                <h2 className="with-accent" style={{
                  fontSize: 'clamp(28px, 4vw, 42px)',
                  fontFamily: 'var(--font-serif)',
                  color: 'var(--color-primary)',
                  margin: 0,
                  lineHeight: 1.2
                }}>
                  <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                    Почему сначала нужен
                  </span>
                  <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                    анализ материалов
                  </span>
                </h2>
              </div>
              <div style={{ maxWidth: '480px', paddingTop: '4px' }}>
                <p style={{
                  fontSize: '15.5px',
                  color: 'var(--color-deep-blue)',
                  lineHeight: 1.65,
                  margin: 0,
                  opacity: 0.92
                }}>
                  Нельзя обещать уменьшение долга или расторжение договора, не изучив условия кредита, движение платежей и требования кредитора.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-2" style={{ gap: '28px', marginBottom: '32px' }}>
            {/* Карточка 1: Проверка документов и расчёта */}
            <div style={{
              background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-primary)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0, paddingBottom: '12px', borderBottom: '1px solid rgba(23, 50, 77, 0.1)' }}>
                Основа отношений и расчёт задолженности
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  {
                    title: 'Договор и индивидуальные условия',
                    desc: 'Стороны, сумма, процентная ставка, график, дополнительные услуги и страхование, порядок уведомления и изменения условий.'
                  },
                  {
                    title: 'Расчёт задолженности и выписка по счёту',
                    desc: 'Основной долг, проценты, неустойка, комиссии, фактически поступившие платежи и периоды начисления.'
                  },
                  {
                    title: 'Документы кредитора и основания уступки',
                    desc: 'Претензии, уведомления, уступка требования (цессия), иск, приложения и доказательства направления документов.'
                  }
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <polyline points="9 11 12 14 22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                    <div>
                      <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '3px' }}>
                        {item.title}
                      </strong>
                      <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                        {item.desc}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Карточка 2: Процессуальный статус и стратегия */}
            <div style={{
              background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-gold)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0, paddingBottom: '12px', borderBottom: '1px solid rgba(23, 50, 77, 0.1)' }}>
                Процессуальный статус и риски
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  {
                    title: 'Стадия и процессуальные сроки',
                    desc: 'Досудебный порядок, судебный приказ, исковое производство, сроки ответа, обжалования и представления доказательств.'
                  },
                  {
                    title: 'Основания требований и нарушений',
                    desc: 'Есть ли нарушение, которое можно подтвердить документами, и какой порядок защиты обязателен до суда.'
                  },
                  {
                    title: 'Платёжеспособность и цель защиты',
                    desc: 'Временная трудность, спор о размере долга или устойчивая невозможность исполнять обязательства — выбор точного маршрута.'
                  }
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <polyline points="9 11 12 14 22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                    <div>
                      <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '3px' }}>
                        {item.title}
                      </strong>
                      <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                        {item.desc}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{
            padding: '24px 32px',
            background: '#FFFFFF',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-gold)',
            boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <div style={{ maxWidth: '680px' }}>
                <strong style={{ display: 'block', color: 'var(--color-deep-blue)', fontSize: '14.5px', marginBottom: '2px' }}>
                  Важно учитывать:
                </strong>
                <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Сам факт просрочки не делает требования кредитора незаконными, а обращение с жалобой не приостанавливает платежи и взыскание автоматически. Юрист должен отдельно определить юридический эффект каждого действия.
                </span>
              </div>
            </div>
            <a href="#form" className="btn btn-primary" style={{ padding: '12px 28px', fontSize: '14.5px' }}>
              Передать документы на аудит
            </a>
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
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Чем поможет</span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>кредитный юрист</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance', textAlign: 'left' }}>
              Каждый этап работы направлен на понятный и контролируемый процессуальный результат.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '20px', position: 'relative', marginBottom: '36px' }}>
            {helpScope.map((item, idx) => (
              <div key={idx} className="hover-lift" style={{
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                padding: '30px 24px 24px 24px',
                border: '1px solid var(--color-border)',
                borderTop: '4px solid var(--color-gold)',
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                boxSizing: 'border-box',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '20px',
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
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '4px 0 8px 0', lineHeight: 1.3 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            background: 'var(--gradient-cream)',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-gold)',
            padding: '22px 28px',
            marginBottom: '36px'
          }}>
            <strong style={{ color: 'var(--color-primary)', fontSize: '15px', display: 'block', marginBottom: '6px' }}>
              Границы услуги:
            </strong>
            <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-deep-blue)', opacity: 0.9, lineHeight: 1.6 }}>
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
        title={<><span style={{ display: 'inline-block' }}>Куратор направления — Владимир</span> <br /><span style={{ display: 'inline-block' }}>Викторович Начешников</span></>}
        name="Владимир Викторович Начешников"
        position="Специалист по корпоративным процедурам и защите заемщиков, куратор направления"
        imageUrl="/images/nacheshnikov.jpg"
        imagePosition="center 15%"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Владимир Начешников проверяет кредитные договоры, судебные приказы, иски банков и МФО, определяет процессуальный маршрут и выстраивает состязательную защиту интересов заёмщика в суде и ФССП.
          </span>,
          <ul key="2" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>
                Практический опыт в сфере юридических и процессуальных процедур — с 1997 года. Сопровождает защиту прав граждан и заёмщиков в спорах с банками, микрофинансовыми организациями и коллекторскими агентствами.
              </span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>
                Координирует работу с мировыми судьями и районными судами Липецка и области, взаимодействие с ФССП и поворот исполнения неправомерно взысканных сумм.
              </span>
            </li>
          </ul>,
          <a key="3" href="/specialisty/nacheshnikov-vladimir-viktorovich/" style={{ display: 'inline-block', marginTop: '16px', fontSize: '14px', color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }} data-analytics="specialist_profile_click">
            Подробнее о специалисте →
          </a>
        ]}
        buttonText="Обсудить ситуацию с Владимиром Начешниковым"
        buttonHref="#form"
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

      {/* ═══ БЛОК 10: ЧТО ПОДГОТОВИТЬ ДЛЯ КОНСУЛЬТАЦИИ ═══ */}
      <section className="section bg-white" id="documents" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-primary)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '12px', color: 'var(--color-primary)', fontWeight: 600 }}>
                Необходимые материалы
              </span>
            </div>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.2 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Что подготовить</span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>к консультации</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: '16px 0 0 0', lineHeight: 1.6, textWrap: 'balance' }}>
              Для качественного анализа ситуации полезно заранее собрать имеющиеся документы. Если полного комплекта нет, начните с того, что уже есть: юрист определит, что запросить дополнительно.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '28px', marginBottom: '32px' }}>
            {/* Карточка 1: Договорные и финансовые документы */}
            <div style={{
              background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-primary)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0, paddingBottom: '12px', borderBottom: '1px solid rgba(23, 50, 77, 0.1)' }}>
                Договорные и финансовые документы
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {primaryDocuments.map((doc, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <polyline points="9 11 12 14 22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                    <div>
                      <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>
                        {doc.title}
                      </strong>
                      <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                        {doc.desc}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Карточка 2: Переписка, суд и особые случаи */}
            <div style={{
              background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-gold)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0, paddingBottom: '12px', borderBottom: '1px solid rgba(23, 50, 77, 0.1)' }}>
                Переписка, суд и особые случаи
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {secondaryDocuments.map((doc, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <div>
                      <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>
                        {doc.title}
                      </strong>
                      <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                        {doc.desc}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
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
            Не отправляйте конфиденциальные финансовые и паспортные документы через общую форму на сайте. Способ безопасной передачи материалов будет согласован специалистом при первом звонке.
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
      <section className="section bg-cream" id="related-services" style={{ padding: '80px 0', background: 'var(--gradient-cream)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-primary)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '12px', color: 'var(--color-primary)', fontWeight: 600 }}>
                Смежные направления
              </span>
            </div>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                Связанные услуги
              </span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Если Ваша ситуация выходит за рамки кредитного спора или требует сопутствующих мер защиты:
            </p>
          </div>

          <style dangerouslySetInnerHTML={{ __html: `
            .related-service-card {
              border-top: 3px solid var(--color-primary) !important;
            }
            .related-service-card:hover {
              border-top: 3px solid var(--color-primary) !important;
            }
            .related-service-card:hover .card-arrow {
              color: var(--color-gold) !important;
            }
            .related-service-card:hover .card-arrow svg {
              stroke: var(--color-gold) !important;
            }
          `}} />

          <div className="grid grid-4" style={{ gap: '20px' }}>
            {relatedServices.map((srv, idx) => (
              <Link key={idx} href={srv.link} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                <div
                  className="card related-service-card hover-lift"
                  style={{
                    height: '100%',
                    minHeight: '180px',
                    padding: '28px 22px',
                    background: 'var(--color-white)',
                    border: '1px solid var(--color-border)',
                    borderTop: '3px solid var(--color-primary)',
                    borderRadius: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 16px rgba(23, 50, 77, 0.04)',
                    transition: 'all 0.3s ease',
                    position: 'relative'
                  }}
                >
                  <div>
                    <h3 style={{ margin: '0 0 10px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                      {srv.title}
                    </h3>
                    <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      {srv.desc}
                    </p>
                  </div>
                  <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, transition: 'transform 0.3s' }}>
                    Подробнее 
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
