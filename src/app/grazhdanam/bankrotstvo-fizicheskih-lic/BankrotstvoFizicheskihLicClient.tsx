'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';
import ProcessBlock from '@/components/ProcessBlock';
import CasesBlock, { CaseData } from '@/components/CasesBlock';
import SpecialistBlock from '@/components/SpecialistBlock';

export default function BankrotstvoFizicheskihLicClient() {
  const [activeTab, setActiveTab] = useState<'all' | 'risks'>('all');

  // Ситуации (Блок 2)
  const situations = [
    {
      title: 'Платежи превышают возможности',
      desc: 'Дохода не хватает одновременно на обязательные расходы и платежи всем кредиторам.'
    },
    {
      title: 'Долги закрываются новыми займами',
      desc: 'Кредитная нагрузка растёт, а новый заём только переносит просрочку.'
    },
    {
      title: 'Начались суды и взыскание',
      desc: 'Есть судебные приказы, исполнительные производства, аресты счетов или удержания из дохода.'
    },
    {
      title: 'Доход резко снизился',
      desc: 'Потеря работы, болезнь, закрытие источника дохода или рост обязательных расходов изменили платёжеспособность.'
    },
    {
      title: 'Есть риск для имущества',
      desc: 'В собственности квартира, автомобиль, доля, участок либо имущество приобретено в браке.'
    },
    {
      title: 'Кредитор готовит банкротство',
      desc: 'Получено заявление кредитора или сведения о намерении инициировать дело.'
    }
  ];

  // Диагностика (Блок 3)
  const diagnostics = [
    {
      title: 'Состав обязательств',
      desc: 'Кому и сколько Вы должны; какие требования потенциально прекращаются, а какие могут сохраниться.'
    },
    {
      title: 'Доходы и расходы',
      desc: 'Источники дохода, иждивенцы, удержания и средства, необходимые для обычной жизни семьи.'
    },
    {
      title: 'Имущество и активы',
      desc: 'Жильё, ипотека, автомобиль, доли, земля, вклады и иные активы; что может войти в конкурсную массу.'
    },
    {
      title: 'Семейные обстоятельства',
      desc: 'Что приобретено в браке, есть ли общие обязательства и как процедура может затронуть долю супруга.'
    },
    {
      title: 'Сделки и переводы',
      desc: 'Продажи, дарение, раздел имущества, крупные платежи и предпочтительное погашение отдельных долгов.'
    },
    {
      title: 'Поведение перед кредиторами',
      desc: 'Полнота сведений, документы при получении кредитов и обстоятельства возникновения задолженности.'
    }
  ];

  // Маршруты (Блок 4)
  const routes = [
    {
      title: 'Судебное банкротство',
      when: 'Состав долгов, имущества и ситуации требует процедуры в арбитражном суде. Возможны реструктуризация долгов либо реализация имущества.',
      next: 'Провести правовую оценку, подготовить заявление и документы, определить риски до подачи.',
      ctaText: 'Обсудить судебный маршрут',
      ctaLink: '#form',
      isPrimary: true
    },
    {
      title: 'Внесудебное банкротство через МФЦ',
      when: 'Размер долга (от 25 000 до 1 000 000 ₽) и статус исполнительных производств соответствуют специальным условиям закона. Процедура без суда.',
      next: 'Перейти на страницу «Банкротство через МФЦ» и проверить соответствие всем условиям.',
      ctaText: 'Проверить условия внесудебного банкротства →',
      ctaLink: '/grazhdanam/bankrotstvo-fizicheskih-lic/cherez-mfc/',
      isLink: true
    },
    {
      title: 'Другое решение',
      when: 'Банкротство несоразмерно проблеме, спорен сам долг либо риски процедуры выше ожидаемой пользы.',
      next: 'Рассмотреть спор с кредитором, реструктуризацию или защиту в исполнительном производстве.',
      ctaText: 'Подобрать альтернативу',
      ctaLink: '#form',
      isPrimary: false
    }
  ];

  // Анализ рисков и долгов (Блок 5)
  const riskCategories = [
    {
      title: 'Какие обязательства обычно анализируются для освобождения',
      desc: 'Кредиты, кредитные карты, микрозаймы, задолженность по налогам и коммунальным платежам, обязательства по распискам и другие денежные требования могут входить в процедуру. Возможность освобождения оценивается по происхождению долга, моменту его возникновения и поведению гражданина.'
    },
    {
      title: 'Какие требования могут сохраниться',
      desc: 'После процедуры сохраняются, в частности, требования по текущим платежам, алиментам, возмещению вреда жизни или здоровью, морального вреда и другие требования, неразрывно связанные с личностью кредитора. Закон предусматривает и иные исключения, включая субсидиарную ответственность и убытки.'
    },
    {
      title: 'Когда суд может не освободить от обязательств',
      desc: 'Риск возникает при сокрытии имущества или сведений, предоставлении заведомо недостоверной информации, незаконном поведении при возникновении или исполнении обязательств и других обстоятельствах, прямо предусмотренных законом. Нельзя начинать процедуру без проверки предшествующих действий.'
    },
    {
      title: 'Что будет с имуществом гражданина',
      desc: 'По общему правилу имущество формирует конкурсную массу, кроме защищённого исполнительским иммунитетом. Единственное жильё обычно защищено, но для ипотечного, залогового и чрезмерного по характеристикам жилья действуют специальные правила. Автомобиль и ценное имущество оцениваются отдельно.'
    },
    {
      title: 'Что будет с совместным имуществом супругов',
      desc: 'Доля гражданина в общем имуществе может быть включена в конкурсную массу. При реализации общего имущества часть выручки, соответствующая доле супруга, по общему правилу передаётся ему, но общие обязательства супругов и залог меняют расчёт. Нужна проверка оснований долга.'
    }
  ];

  // Чем поможет юрист (Блок 6)
  const lawyerHelp = [
    {
      num: '01',
      title: 'Предварительный анализ',
      desc: 'Письменно или на консультации обозначены применимый маршрут, ключевые риски и недостающие документы.'
    },
    {
      num: '02',
      title: 'Подготовка позиции',
      desc: 'Сформирован полный перечень кредиторов, обязательств, имущества, доходов и фактических обстоятельств дела.'
    },
    {
      num: '03',
      title: 'Подготовка заявления',
      desc: 'Заявление и приложения подготовлены под Вашу фактическую ситуацию, а не по универсальному шаблону.'
    },
    {
      num: '04',
      title: 'Судебное сопровождение',
      desc: 'Процессуальные документы подаются в срок; позиция гражданина представляется в суде по согласованной стратегии.'
    },
    {
      num: '05',
      title: 'Работа в процедуре',
      desc: 'Контролируется взаимодействие с финансовым управляющим, требования кредиторов и вопросы конкурсной массы.'
    },
    {
      num: '06',
      title: 'Завершение дела',
      desc: 'Юрист разъясняет судебный акт, сохранившиеся обязательства и последующие правовые ограничения.'
    }
  ];

  // Кейсы (Блок 8)
  const cases: CaseData[] = [
    {
      category: 'СУДЕБНОЕ БАНКРОТСТВО',
      title: 'Освободили от кредитов после потери основного дохода',
      problem: 'У клиента накопилось 1,4 млн ₽ по потребительским кредитам и кредитным картам перед пятью банками. После сокращения доход снизился более чем вдвое, просрочки росли. В собственности оставалась только единственная квартира, не находившаяся в залоге.',
      action: 'Проверили кредитные договоры, доходы и сделки за предшествующий период, собрали сведения обо всех кредиторах и имуществе, подготовили заявление и сопровождали процедуру реализации имущества. Отдельно подтвердили статус квартиры и раскрыли финансовому управляющему все необходимые сведения.',
      result: 'Суд завершил процедуру и освободил клиента от дальнейшего исполнения требований по кредитам и кредитным картам. Единственная квартира в конкурсную массу не вошла.'
    },
    {
      category: 'ИМУЩЕСТВО И СУПРУГИ',
      title: 'Заранее объяснили последствия продажи автомобиля семьи',
      problem: 'Общая задолженность клиента составляла 2,2 млн ₽. В браке был приобретён автомобиль, оформленный на должника. Клиент рассчитывал сохранить машину и опасался, что супруг потеряет свою долю в общем имуществе.',
      action: 'До подачи заявления оценили статус автомобиля, семейные документы и происхождение обязательств. Объяснили порядок реализации общего имущества и расчёта с супругом, подготовили подтверждения доли второго супруга и сопровождали вопрос в процедуре.',
      result: 'Автомобиль был реализован в установленном порядке, супруг получил причитающуюся ему часть выручки. После завершения расчётов суд освободил клиента от оставшейся кредитной задолженности. Клиент знал имущественные последствия до начала дела.'
    },
    {
      category: 'ПРЕДВАРИТЕЛЬНАЯ ДИАГНОСТИКА',
      title: 'Не стали начинать банкротство из-за риска оспаривания сделки',
      problem: 'Клиент хотел подать заявление при долге 980 000 ₽, но незадолго до обращения продал автомобиль близкому родственнику по цене существенно ниже рыночной и направил часть денег одному кредитору.',
      action: 'Проверили документы по сделке и платежам, объяснили риск её оспаривания, возврата имущества в конкурсную массу и вопросов к добросовестности клиента. Вместо немедленной подачи подготовили безопасный план дальнейших действий и переговоров с кредиторами.',
      result: 'Клиент отказался от неподготовленного банкротства и не понёс расходы на процедуру с заранее выявленным высоким риском. Решение было принято после детального анализа.'
    }
  ];

  // Процесс (Блок 9)
  const processSteps = [
    {
      num: '01',
      title: 'Обращение',
      desc: 'Уточняем сумму и состав долгов, наличие судебных дел, исполнительных производств, имущества, дохода и значимых сделок.'
    },
    {
      num: '02',
      title: 'Анализ документов',
      desc: 'Проверяем обязательства, имущество, семейные обстоятельства и основания, способные повлиять на освобождение от долгов.'
    },
    {
      num: '03',
      title: 'Выбор маршрута',
      desc: 'Объясняем судебный путь, возможность МФЦ либо альтернативу банкротству; согласовываем состав работ и стоимость.'
    },
    {
      num: '04',
      title: 'Подготовка дела',
      desc: 'Собираем сведения, формируем список кредиторов и имущества, готовим заявление и процессуальные приложения.'
    },
    {
      num: '05',
      title: 'Рассмотрение судом',
      desc: 'Представляем позицию, устраняем замечания, участвуем в вопросе введения применимой процедуры.'
    },
    {
      num: '06',
      title: 'Процедура',
      desc: 'Сопровождаем взаимодействие с финансовым управляющим, требования кредиторов, имущество, доход и ходатайства.'
    },
    {
      num: '07',
      title: 'Завершение',
      desc: 'Получаем судебный акт и объясняем, какие обязательства прекращены, какие сохранились и какие ограничения действуют дальше.'
    }
  ];

  // Документы (Блок 10)
  const docGroups = [
    {
      title: 'Долги',
      desc: 'Кредитные договоры и справки, сведения из личных кабинетов, расписки, судебные акты, постановления приставов, перечень кредиторов и примерные суммы.'
    },
    {
      title: 'Доходы',
      desc: 'Сведения о работе, пенсии, пособиях, самозанятости и иных источниках дохода; сведения об иждивенцах.'
    },
    {
      title: 'Имущество',
      desc: 'Сведения о недвижимости, автомобиле, долях, земле, счетах, вкладах и залогах; документы о совместной собственности.'
    },
    {
      title: 'Семья',
      desc: 'Сведения о браке и разводе, брачный договор, соглашения или судебные акты о разделе имущества — при наличии.'
    },
    {
      title: 'Сделки',
      desc: 'Продажа, дарение, раздел имущества, крупные переводы и погашение долгов за предшествующий период.'
    },
    {
      title: 'Процесс',
      desc: 'Полученные заявления кредиторов, определения арбитражного суда, требования финансового управляющего — если дело уже начато.'
    }
  ];

  // Стоимость и расходы (Блок 11)
  const expenses = [
    {
      title: 'Анализ и консультация',
      desc: 'Цена определяется после изучения ситуации. До утверждения прайса — по кнопке «Уточнить стоимость».'
    },
    {
      title: 'Судебное сопровождение',
      desc: 'Состав юридических услуг и фиксированное вознаграждение компании указываются в договоре до начала работ.'
    },
    {
      title: 'Финансовый управляющий',
      desc: '25 000 ₽ единовременно за каждую процедуру; сумма вносится на депозитный счёт арбитражного суда (ст. 20.6 № 127-ФЗ).'
    },
    {
      title: 'Публикации и почтовые расходы',
      desc: 'Оплачиваются по фактическим расходам (сообщения в ЕФРСБ, газета «Коммерсантъ», уведомления кредиторам).'
    },
    {
      title: 'Госпошлина',
      desc: 'При подаче заявления самим гражданином-должником госпошлина не взимается (НК РФ, ст. 333.21).'
    },
    {
      title: 'Обособленные споры',
      desc: 'Оспаривание сделок, исключение имущества и иные дополнительные споры при необходимости оформляются отдельно.'
    }
  ];

  // Последствия без мифов (Блок 12)
  const consequences = [
    {
      title: 'Кредиты и займы',
      desc: 'В течение 5 лет после завершения реализации имущества при получении кредита или займа нужно сообщать о факте банкротства.'
    },
    {
      title: 'Повторное обращение',
      desc: 'В течение 5 лет дело не может быть вновь возбуждено по заявлению самого гражданина.'
    },
    {
      title: 'Управление организациями',
      desc: 'По общему правилу в течение 3 лет нельзя участвовать в управлении юрлицом (для банков и финорганизаций сроки больше).'
    },
    {
      title: 'Доход и работа',
      desc: 'Статус банкрота не запрещает работать и получать доход. Распоряжение доходом во время процедуры регулируется судебными решениями.'
    },
    {
      title: 'Публичность',
      desc: 'Сведения о процедуре публикуются в ЕФРСБ. Нельзя обещать, что факт банкротства останется закрытым.'
    },
    {
      title: 'Обязательства',
      desc: 'Освобождение не охватывает все виды требований (алименты, вред здоровью) и не применяется при доказанной недобросовестности.'
    }
  ];

  // FAQ (Блок 13)
  const faqs = [
    {
      q: 'Обязательно ли иметь долг 500 000 ₽?',
      a: 'Нет. При предвидении банкротства гражданин вправе обратиться в суд и при меньшей сумме, если обстоятельства очевидно показывают невозможность исполнить обязательства в срок и имеются признаки неплатёжеспособности или недостаточности имущества. Порог 500 000 ₽ относится к предусмотренной законом обязанности обратиться при совокупности дополнительных условий.'
    },
    {
      q: 'Нужно ли ждать три месяца просрочки?',
      a: 'Для собственного заявления гражданина закон не устанавливает универсальное правило «ждать три месяца». Суд оценивает признаки неплатёжеспособности, имущество, доход и обстоятельства возникновения долга.'
    },
    {
      q: 'Какие долги могут не списать?',
      a: 'Сохраняются алименты, текущие платежи, требования о возмещении вреда жизни или здоровью, морального вреда и другие прямо названные законом обязательства. Освобождение также может не применяться при сокрытии имущества, недостоверных сведениях и ином установленном недобросовестном поведении.'
    },
    {
      q: 'Заберут ли единственную квартиру?',
      a: 'Единственное пригодное для постоянного проживания жильё обычно защищено исполнительским иммунитетом. Но ипотека, залог, чрезмерные характеристики жилья и специальные обстоятельства требуют отдельной проверки. До анализа документов обещать сохранение жилья нельзя.'
    },
    {
      q: 'Что будет с ипотечной квартирой?',
      a: 'Для единственного ипотечного жилья действуют специальные правила, включая механизмы отдельного урегулирования с залоговым кредитором и правила распределения выручки при продаже. Возможность сохранить жильё зависит от обстоятельств и позиции участников; её нужно оценивать до подачи заявления.'
    },
    {
      q: 'Могут ли продать автомобиль?',
      a: 'Автомобиль обычно входит в конкурсную массу, если на него можно обратить взыскание. Исключения зависят от назначения имущества и конкретных доказательств. Сам факт необходимости машины для семьи не гарантирует её исключение.'
    },
    {
      q: 'Что будет с имуществом супруга?',
      a: 'Личное имущество супруга не становится имуществом должника только из-за брака. Но доля должника в совместно приобретённом имуществе может затрагиваться процедурой, а при общих обязательствах расчёт сложнее. Нужны документы о приобретении имущества и происхождении долга.'
    },
    {
      q: 'Можно ли перед банкротством продать или подарить имущество?',
      a: 'Сделки перед банкротством могут проверяться и оспариваться. Продажа родственнику, цена ниже рынка, дарение или преимущественный расчёт с одним кредитором повышают риск. Не совершайте новые сделки для сокрытия имущества.'
    },
    {
      q: 'Сколько длится судебное банкротство?',
      a: 'Закон устанавливает сроки отдельных стадий, но фактическая продолжительность зависит от процедуры, имущества, требований кредиторов, споров и работы финансового управляющего. Реализация имущества вводится на срок до шести месяцев и может продлеваться в предусмотренном законом порядке.'
    },
    {
      q: 'Можно ли пройти процедуру без юриста?',
      a: 'Закон не требует обязательного представителя. Юрист нужен не для формальной подачи шаблона, а для предварительной оценки рисков, подготовки полного комплекта сведений и сопровождения спорных вопросов в суде и процедуре.'
    },
    {
      q: 'Можно ли работать дистанционно?',
      a: 'Да, консультации, подготовка документов и значительная часть взаимодействия могут проходить дистанционно. Возможность удалённого участия в конкретном заседании определяет суд; при необходимости юрист заранее объяснит формат.'
    }
  ];

  // Связанные услуги (Блок 14)
  const relatedServices = [
    {
      title: 'Внесудебное банкротство через МФЦ',
      desc: 'Проверить, соответствуете ли Вы условиям бесплатной внесудебной процедуры без суда и финансового управляющего.',
      link: '/grazhdanam/bankrotstvo-fizicheskih-lic/cherez-mfc/'
    },
    {
      title: 'Кредитный юрист',
      desc: 'Оспорить спорный долг, незаконные начисления или кредит, оформленный без Вашего согласия.',
      link: '/grazhdanam/kreditnyj-yurist/'
    },
    {
      title: 'Юрист по исполнительному производству',
      desc: 'Обжаловать действия пристава, удержания из дохода или аресты счетов, если банкротство не начато.',
      link: '/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/'
    },
    {
      title: 'Банкротство индивидуального предпринимателя',
      desc: 'Разобрать личные и предпринимательские обязательства действующего или закрытого ИП.',
      link: '/biznesu/bankrotstvo-biznesa/bankrotstvo-individualnogo-predprinimatelya/'
    }
  ];

  // JSON-LD Schema
  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://dejure-help.ru/grazhdanam/bankrotstvo-fizicheskih-lic/#service",
        "name": "Банкротство физических лиц в Липецке",
        "serviceType": "Юридическое сопровождение судебного банкротства физических лиц",
        "description": "Юридическая помощь при банкротстве физических лиц в Липецке: оценим долги, имущество и сделки, объясним риски и сопроводим процедуру в суде.",
        "areaServed": [
          { "@type": "AdministrativeArea", "name": "Липецкая область" },
          { "@type": "Country", "name": "Россия" }
        ],
        "provider": { "@id": "https://dejure-help.ru/#organization" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://dejure-help.ru/grazhdanam/bankrotstvo-fizicheskih-lic/#breadcrumbs",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://dejure-help.ru/" },
          { "@type": "ListItem", "position": 2, "name": "Гражданам", "item": "https://dejure-help.ru/grazhdanam/" },
          { "@type": "ListItem", "position": 3, "name": "Банкротство физических лиц", "item": "https://dejure-help.ru/grazhdanam/bankrotstvo-fizicheskih-lic/" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://dejure-help.ru/grazhdanam/bankrotstvo-fizicheskih-lic/#faq",
        "mainEntity": faqs.map(f => ({
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
            <span style={{ color: 'var(--color-text-main)' }}>Банкротство физических лиц</span>
          </>
        }
        superTitle="Банкротство граждан • оценка до начала процедуры"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>Банкротство физических лиц</span>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>в Липецке</span>
          </span>
        }
        subtitle="Проверим, подходит ли Вам судебное банкротство, какие обязательства могут быть прекращены и чем процедура рискует для имущества, дохода и совершённых сделок."
        primaryCtaText="Проверить возможность банкротства"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_bankruptcy_hero_cta"
        primaryCtaSubtext={
          <>
            Для оценки понадобятся сведения о долгах, доходах, имуществе и сделках.{' '}
            <span style={{ display: 'block', marginTop: '4px', fontSize: '13px', color: 'var(--color-text-secondary)' }}>
              Или позвоните:{' '}
              <a href="tel:+79103503111" style={{ color: 'var(--color-deep-blue)', textDecoration: 'none', fontWeight: 600 }}>
                +7 (910) 350-31-11
              </a>
            </span>
          </>
        }
        trustItems={[
          { text: 'Оцениваем не только сумму долга, но и имущество, доходы, семейные обстоятельства и сделки.' },
          { text: 'Объясняем ограничения до заключения договора и подачи заявления в суд.' },
          { text: 'Сопровождаем судебную процедуру и взаимодействие с финансовым управляющим.' }
        ]}
        imageUrl="/images/nacheshnikov.jpg"
        imageName="Владимир Викторович Начешников"
        imageSubtitle="Специалист ЮК «Де-Юре» по банкротству граждан"
      />

      {/* ═══ 2. КОГДА СТОИТ ПРОВЕРИТЬ ВОЗМОЖНОСТЬ БАНКРОТСТВА ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
                Основания для анализа
              </span>
            </div>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              Когда стоит проверить возможность банкротства
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
              Не обязательно ждать, пока задолженность вырастет или приставы начнут удержания. Важно оценить ситуацию, когда исполнение обязательств уже стало невозможным либо очевидно, что скоро станет невозможным.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '40px' }}>
            {situations.map((sit, idx) => (
              <div
                key={idx}
                className="hover-lift"
                style={{
                  background: 'var(--color-cream)',
                  padding: '32px 28px',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.35 }}>
                  {sit.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {sit.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Важная правовая плашка */}
          <div style={{
            background: 'linear-gradient(135deg, var(--color-deep-blue) 0%, #17324D 100%)',
            color: '#FFFFFF',
            padding: '28px 32px',
            borderLeft: '4px solid var(--color-gold)',
            boxShadow: '0 8px 24px rgba(11, 28, 42, 0.12)',
            display: 'flex',
            gap: '16px',
            alignItems: 'flex-start'
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <div style={{ fontSize: '14.5px', lineHeight: 1.6, color: 'rgba(255, 255, 255, 0.9)' }}>
              <strong style={{ color: '#FFFFFF' }}>Важно: </strong>
              Долг 500 000 ₽ — не универсальный минимальный порог для добровольного обращения. При предвидении банкротства гражданин вправе обратиться в суд и при меньшей сумме, если отвечает признакам неплатёжеспособности или недостаточности имущества. Обязанность обратиться при совокупности условий регулируется отдельно.
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. СНАЧАЛА — ДИАГНОСТИКА ДОЛГОВ И РИСКОВ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              Сначала — диагностика долгов и рисков
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
              Банкротство подходит не всем. До подачи заявления нужно понять не только размер долга, но и возможный результат процедуры именно при Ваших обстоятельствах.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '40px' }}>
            {diagnostics.map((item, idx) => (
              <div
                key={idx}
                className="hover-lift"
                style={{
                  background: 'var(--color-white)',
                  padding: '32px 28px',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-gold)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0 }}>
                    {item.title}
                  </h3>
                </div>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#form" className="btn btn-primary" style={{ padding: '14px 36px', fontSize: '15px' }}>
              Записаться на разбор ситуации
            </a>
          </div>
        </div>
      </section>

      {/* ═══ 4. ДВА ЗАКОННЫХ МАРШРУТА ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              Суд или МФЦ: порядок зависит от обстоятельств
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
              Выбор процедуры определяется суммой долгов, наличием имущества, статусом исполнительных производств и составом кредиторов.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {routes.map((rt, idx) => (
              <div
                key={idx}
                style={{
                  background: rt.isPrimary 
                    ? 'linear-gradient(145deg, #10273B 0%, #17324D 100%)' 
                    : 'var(--color-cream)',
                  color: rt.isPrimary ? '#FFFFFF' : 'inherit',
                  padding: '36px 30px',
                  border: '1px solid var(--color-border)',
                  borderTop: rt.isPrimary ? '4px solid var(--color-gold)' : '4px solid var(--color-primary)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: rt.isPrimary ? '0 10px 30px rgba(11, 28, 42, 0.15)' : 'none'
                }}
              >
                <div>
                  <h3 style={{ 
                    fontSize: '20px', 
                    fontFamily: 'var(--font-serif)', 
                    color: rt.isPrimary ? '#FFFFFF' : 'var(--color-deep-blue)', 
                    margin: '0 0 16px 0',
                    lineHeight: 1.3
                  }}>
                    {rt.title}
                  </h3>
                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', color: rt.isPrimary ? 'var(--color-gold)' : 'var(--color-primary)', fontWeight: 700, marginBottom: '6px' }}>
                      Когда применяется:
                    </div>
                    <p style={{ fontSize: '14px', lineHeight: 1.55, margin: 0, color: rt.isPrimary ? 'rgba(255,255,255,0.85)' : 'var(--color-text-secondary)' }}>
                      {rt.when}
                    </p>
                  </div>
                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', color: rt.isPrimary ? 'var(--color-gold)' : 'var(--color-primary)', fontWeight: 700, marginBottom: '6px' }}>
                      Следующий шаг:
                    </div>
                    <p style={{ fontSize: '14px', lineHeight: 1.55, margin: 0, color: rt.isPrimary ? 'rgba(255,255,255,0.85)' : 'var(--color-text-secondary)' }}>
                      {rt.next}
                    </p>
                  </div>
                </div>

                {rt.isLink ? (
                  <Link 
                    href={rt.ctaLink}
                    className="btn btn-primary"
                    style={{
                      padding: '12px 20px',
                      fontSize: '13.5px',
                      textAlign: 'center',
                      display: 'block',
                      textDecoration: 'none'
                    }}
                  >
                    {rt.ctaText}
                  </Link>
                ) : (
                  <a
                    href={rt.ctaLink}
                    className={rt.isPrimary ? 'btn btn-gold' : 'btn btn-outline'}
                    style={{
                      padding: '12px 20px',
                      fontSize: '13.5px',
                      textAlign: 'center',
                      display: 'block',
                      textDecoration: 'none'
                    }}
                  >
                    {rt.ctaText}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 5. КАКИЕ ДОЛГИ И РИСКИ ТРЕБУЮТ ОТДЕЛЬНОЙ ОЦЕНКИ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              Какие долги и риски требуют отдельной оценки
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
              Результат процедуры зависит от юридической квалификации обязательств, состава активов и семейных документов.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {riskCategories.map((rc, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--color-white)',
                  padding: '28px 32px',
                  border: '1px solid var(--color-border)',
                  borderLeft: '4px solid var(--color-primary)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px'
                }}
              >
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0 }}>
                  {rc.title}
                </h3>
                <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.65, margin: 0 }}>
                  {rc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 6. ЧЕМ ПОМОЖЕТ ЮРИСТ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              Чем поможет юрист
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
              Юрист выстраивает доказательственную базу, защищает права доверителя и обеспечивает контроль над всеми процессуальными действиями.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '40px' }}>
            {lawyerHelp.map((item, idx) => (
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
                <div
                  style={{
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
                  }}
                >
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

          <div style={{ textAlign: 'center' }}>
            <a href="#form" className="btn btn-primary" style={{ padding: '14px 36px', fontSize: '15px' }}>
              Обсудить состав сопровождения
            </a>
          </div>
        </div>
      </section>

      {/* ═══ 7. КУРАТОР НАПРАВЛЕНИЯ ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name="Владимир Викторович Начешников"
        position="Специалист ЮК «Де-Юре» по банкротству граждан"
        description={[
          "Владимир Викторович проводит анализ долговой ситуации, оценивает риски для имущества и совершённых сделок, определяет порядок подготовки к судебной процедуре и сопровождает дела о банкротстве физических лиц.",
          "Практический опыт в сфере юридических и корпоративных процедур — с 1997 года. География реализованных проектов включает Москву, Санкт-Петербург, Челябинск, Липецк и Республику Беларусь.",
          "В делах, требующих судебного представительства, экспертизы или взаимодействия с финансовым управляющим, Владимир Викторович работает совместно с профильными специалистами команды ЮК «Де-Юре»."
        ]}
        imageUrl="/images/nacheshnikov.jpg"
        profileHref="/specialisty/nacheshnikov-vladimir-viktorovich/"
        profileText="Подробнее о специалисте →"
        buttonText="Обсудить ситуацию с Владимиром Начешниковым"
        buttonHref="#form"
      />

      {/* ═══ 8. ПРИМЕРЫ ИЗ ПРАКТИКИ (CasesBlock) ═══ */}
      <CasesBlock
        title="Примеры из практики"
        cases={cases}
      />

      {/* ═══ 9. КАК ПРОХОДИТ РАБОТА (ProcessBlock) ═══ */}
      <ProcessBlock
        title="Как проходит работа и судебная процедура"
        subtitle="Прозрачный пошаговый процесс от первого правового анализа до вынесения итогового судебного акта об освобождении от обязательств."
        steps={processSteps}
        alignTitle="left"
        footerNote="Консультации и обмен несекретными документами возможны дистанционно. Способ участия в заседаниях и необходимость личного присутствия определяются по обстоятельствам дела и требованиям суда."
      />

      {/* ═══ 10. ДОКУМЕНТЫ ДЛЯ ПРЕДВАРИТЕЛЬНОГО АНАЛИЗА ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              Что подготовить к консультации
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
              Сбор сведений позволяет юристу восстановить полную картину и исключить непредвиденные риски при обращении в суд.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '36px' }}>
            {docGroups.map((dg, idx) => (
              <div
                key={idx}
                className="hover-lift"
                style={{
                  background: 'var(--color-cream)',
                  padding: '30px 26px',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px'
                }}
              >
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0 }}>
                  {dg.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  {dg.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Предупреждение о безопасности */}
          <div style={{
            background: 'rgba(23, 50, 77, 0.05)',
            border: '1px solid rgba(23, 50, 77, 0.15)',
            padding: '20px 24px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px'
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            <span style={{ fontSize: '14px', color: 'var(--color-deep-blue)', lineHeight: 1.5 }}>
              <strong>Конфиденциальность:</strong> Не загружайте паспорт, банковские выписки, договоры и иные финансовые документы через обычную форму на сайте. Юрист сообщит защищённый способ передачи после первого звонка.
            </span>
          </div>
        </div>
      </section>

      {/* ═══ 11. СТОИМОСТЬ И ОБЯЗАТЕЛЬНЫЕ РАСХОДЫ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              Стоимость определяется после анализа ситуации
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
              На объём работы влияют количество кредиторов, состав имущества, наличие залога и совместной собственности, совершённые сделки, уже начатые споры и необходимый объём представительства. До заключения договора мы определим состав сопровождения и отдельно объясним обязательные расходы процедуры.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '40px' }}>
            {expenses.map((exp, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--color-white)',
                  padding: '30px 26px',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-gold)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px'
                }}
              >
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0 }}>
                  {exp.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  {exp.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#form" className="btn btn-primary" style={{ padding: '14px 36px', fontSize: '15px' }}>
              Получить расчёт стоимости
            </a>
            <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '10px' }}>
              Расчёт возможен после сведений о долгах, имуществе и сделках
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 12. ПОСЛЕДСТВИЯ БАНКРОТСТВА БЕЗ МИФОВ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              Последствия банкротства без мифов
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
              Закон устанавливает чёткий перечень правовых последствий, без преувеличений и рекламных обещаний.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {consequences.map((item, idx) => (
              <div
                key={idx}
                className="hover-lift"
                style={{
                  background: 'var(--color-cream)',
                  padding: '30px 26px',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px'
                }}
              >
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 13. ЧАСТЫЕ ВОПРОСЫ (FAQBlock) ═══ */}
      <FAQBlock
        superTitle="Вопросы и ответы"
        title="Частые вопросы о банкротстве физических лиц"
        subtitle="Ответы на ключевые практические и правовые вопросы о судебной процедуре признания гражданина банкротом."
        faqs={faqs}
      />

      {/* ═══ 14. СВЯЗАННЫЕ УСЛУГИ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              Связанные услуги и альтернативные решения
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
              Если судебное банкротство не подходит или спор лежит в смежной области — ознакомьтесь с другими направлениями.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '28px' }}>
            {relatedServices.map((srv, idx) => (
              <Link
                key={idx}
                href={srv.link}
                className="hover-lift"
                style={{
                  background: 'var(--color-cream)',
                  padding: '32px 28px',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  textDecoration: 'none',
                  color: 'inherit'
                }}
              >
                <div>
                  <h3 style={{ fontSize: '19px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>
                    {srv.title}
                  </h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: '0 0 16px 0' }}>
                    {srv.desc}
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontWeight: 600, fontSize: '14px' }}>
                  <span>Перейти к услуге</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 15. ЛОКАЛЬНЫЙ БЛОК И ОФИС ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '40px', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
                  Офис в Липецке
                </span>
              </div>
              <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 38px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
                Обсудить банкротство с юристом в Липецке
              </h2>
              <p style={{ fontSize: '15.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                Можно встретиться в офисе «Де-Юре» или начать работу дистанционно. Перед визитом согласуйте время, чтобы специалист подготовился к разбору ситуации.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>г. Липецк, ул. Советская, д. 35, оф. 213</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <a href="tel:+79103503111" style={{ color: 'var(--color-deep-blue)', textDecoration: 'none', fontWeight: 600 }}>
                    +7 (910) 350-31-11
                  </a>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a href="#form" className="btn btn-primary" style={{ padding: '12px 28px' }}>
                  Записаться на встречу
                </a>
                <a href="tel:+79103503111" className="btn btn-outline" style={{ padding: '12px 24px' }}>
                  Позвонить
                </a>
              </div>
            </div>

            {/* Карточка-карта */}
            <div style={{
              background: 'var(--color-white)',
              border: '1px solid var(--color-border)',
              padding: '24px',
              boxShadow: '0 8px 30px rgba(23, 50, 77, 0.08)'
            }}>
              <div style={{ position: 'relative', width: '100%', height: '260px', background: '#EAEFE9', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', padding: '20px' }}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '8px' }}>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--color-deep-blue)' }}>ЮК «Де-Юре» Липецк</div>
                  <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>ул. Советская, д. 35, оф. 213</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 16. ФИНАЛЬНАЯ ФОРМА (ContactsForm) ═══ */}
      <section id="form" className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <ContactsForm
            title="Проверьте возможность банкротства и риски до подачи заявления"
            subtitle="Кратко опишите ситуацию. Юрист уточнит состав долгов, имущество и другие обстоятельства, необходимые для предварительной оценки."
            buttonText="Проверить возможность банкротства"
            commentPlaceholder="Примерная сумма долга, количество кредиторов, имущество и стадия взыскания…"
            hiddenFields={[
              { name: 'serviceId', value: 'bankruptcy_individual' },
              { name: 'pageId', value: 'CIV-06' },
              { name: 'curatorId', value: 'nacheshnikov' }
            ]}
            subtext={
              <>
                Перезвоним в течение 15 минут в рабочее время. Если заявка оставлена вечером или в выходной день, перезвоним в ближайший рабочий день.
                <span style={{ display: 'block', marginTop: '6px', fontSize: '12.5px', color: 'var(--color-text-secondary)' }}>
                  Не указывайте паспортные данные, номера счетов и другие конфиденциальные сведения. Их можно передать юристу после установления защищённого способа связи.
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
