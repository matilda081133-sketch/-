'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';

export default function RazdelClient() {
  const jsonLdGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LegalService',
        '@id': 'https://dejure-help.ru/#legalservice',
        name: 'Юридическая компания Де-Юре',
        url: 'https://dejure-help.ru/',
        telephone: '+7-910-350-31-11',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'ул. Советская, д. 35, оф. 213',
          addressLocality: 'Липецк',
          addressRegion: 'Липецкая область',
          addressCountry: 'RU'
        },
        areaServed: ['Липецк', 'Липецкая область']
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/razdel-licevyh-schetov-i-poryadka-oplaty-zhku/#service',
        name: 'Юридическая помощь в определении порядка оплаты ЖКУ',
        serviceType: 'Раздел лицевых счетов и порядка оплаты ЖКУ',
        url: 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/razdel-licevyh-schetov-i-poryadka-oplaty-zhku/',
        provider: {
          '@id': 'https://dejure-help.ru/#legalservice'
        },
        areaServed: ['Липецк', 'Липецкая область']
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/razdel-licevyh-schetov-i-poryadka-oplaty-zhku/#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://dejure-help.ru/' },
          { '@type': 'ListItem', position: 2, name: 'Гражданам', item: 'https://dejure-help.ru/grazhdanam/' },
          { '@type': 'ListItem', position: 3, name: 'Жилищный юрист', item: 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/' },
          { '@type': 'ListItem', position: 4, name: 'Раздел лицевых счетов и порядка оплаты ЖКУ', item: 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/razdel-licevyh-schetov-i-poryadka-oplaty-zhku/' }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/razdel-licevyh-schetov-i-poryadka-oplaty-zhku/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Можно ли разделить лицевой счёт в приватизированной квартире?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'В быту так называют определение порядка оплаты и получение отдельных платёжных документов. Возможность и способ зависят от долей, состава платежей, соглашения и позиции исполнителей.'
            }
          },
          {
            '@type': 'Question',
            name: 'Куда подавать заявление?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Сначала определяются все организации, которые выставляют платежи. При согласии направляются соглашение и заявления; при споре может потребоваться иск с участием надлежащих исполнителей.'
            }
          },
          {
            '@type': 'Question',
            name: 'Можно ли разделить оплату без суда?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Да, если участники договорились и исполнители принимают юридически корректное основание. Соглашение должно охватывать нужные виды начислений и не оставлять спорных периодов.'
            }
          },
          {
            '@type': 'Question',
            name: 'Доли оплаты всегда равны долям собственности?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Это базовый ориентир для ряда расходов по общему имуществу, но конкретные строки зависят от правовой природы, приборов учёта, потребления, соглашения и режима жилья.'
            }
          },
          {
            '@type': 'Question',
            name: 'Что будет со старым долгом?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Новый порядок действует на определённые периоды и сам по себе не списывает задолженность. Старый долг проверяется отдельно по кредитору, должникам, периоду, оплатам, пеням и срокам.'
            }
          },
          {
            '@type': 'Question',
            name: 'Если собственник не живёт, он может не платить?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Само отсутствие проживания обычно не прекращает бремя собственника. Но состав начислений и возможность перерасчёта отдельных услуг нужно проверять по документам и фактическим данным.'
            }
          },
          {
            '@type': 'Question',
            name: 'Можно ли разделить счёт в муниципальной квартире?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Нужно оценить договор социального найма, состав семьи и статус бывших членов семьи. Речь может идти о самостоятельной ответственности и отдельных документах, а не о разделе самого договора найма.'
            }
          },
          {
            '@type': 'Question',
            name: 'Нужен ли порядок пользования комнатами?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Не всегда. Порядок пользования и порядок оплаты — разные требования. Они могут быть связаны фактически, но один результат не возникает автоматически из другого.'
            }
          },
          {
            '@type': 'Question',
            name: 'Можно ли взыскать с совладельца то, что я платил за него?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'При наличии оснований и доказательств возможно отдельное денежное требование. Проверяются виды расходов, доли, периоды, платежи и срок исковой давности.'
            }
          },
          {
            '@type': 'Question',
            name: 'Сколько длится дело?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Досудебный этап зависит от числа исполнителей и их ответов, судебный — от участников, нагрузки и обжалования. После анализа дадим ориентир по этапам без гарантии даты результата.'
            }
          }
        ]
      }
    ]
  };

  const terms = [
    {
      term: 'Порядок участия в оплате',
      meaning: 'Кто и в какой части несёт определённые расходы.',
      notHappening: 'Не меняются доли собственности и право проживания.'
    },
    {
      term: 'Отдельный платёжный документ',
      meaning: 'Каждому плательщику формируется своя сумма/документ в согласованном или установленном порядке.',
      notHappening: 'Не возникает отдельная квартира или новый объект права.'
    },
    {
      term: 'Раздельный расчётный учёт',
      meaning: 'Исполнитель учитывает начисления и оплаты раздельно.',
      notHappening: 'Не списывается ранее возникшая задолженность.'
    },
    {
      term: 'Прошлый долг',
      meaning: 'Проверяется по кредитору, периоду, основанию, должникам и оплатам.',
      notHappening: 'Не делится одной только выдачей новых квитанций.'
    },
    {
      term: 'Договор социального найма',
      meaning: 'Сохраняется единый правовой режим муниципального жилья; оценивается ответственность участников.',
      notHappening: 'Не обещаем заключить несколько договоров найма.'
    }
  ];

  const situations = [
    'после развода бывшие супруги сохранили доли, но один собственник оплачивает всю квартиру;',
    'несколько наследников не могут договориться, кто и сколько платит;',
    'УК, ТСЖ, РСО или расчётный центр отказались выдавать отдельные платёжные документы;',
    'один совладелец не живёт и считает, что полностью освобождён от расходов;',
    'в квартире зарегистрированы собственник и члены семьи, а ответственность за начисления спорна;',
    'муниципальной квартирой пользуются бывшие члены одной семьи и нужен раздельный порядок оплаты;',
    'плательщик хочет вернуть подтверждённую часть расходов, которую нёс за других совладельцев;',
    'пришёл судебный приказ или иск по долгу за всю квартиру;',
    'есть несовершеннолетний собственник или зарегистрированный ребёнок и нужно корректно определить участников;',
    'нужно отделить новый порядок оплаты от старой задолженности и пеней.'
  ];

  const legalRegimes = [
    {
      regime: 'Общая долевая собственность',
      checks: 'Выписки ЕГРН, доли, виды платежей, фактические оплаты, соглашения.',
      route: 'Соглашение → обращения исполнителям → иск об определении порядка/долей участия и отдельных документах.'
    },
    {
      regime: 'Совместная собственность',
      checks: 'Основание приобретения, брачный режим, определены ли доли.',
      route: 'Сначала установить применимый режим; вопрос долей может потребовать отдельного требования.'
    },
    {
      regime: 'Один собственник и члены семьи',
      checks: 'Статус членов/бывших членов семьи, соглашение, пользование, солидарная ответственность.',
      route: 'Соглашение или защита в споре; не обещать отдельные документы без анализа обязанности исполнителя.'
    },
    {
      regime: 'Социальный наём',
      checks: 'Договор, состав семьи, статус бывшего члена семьи, проживание, платежи.',
      route: 'Определить режим ответственности и требование к начислениям; не «делить договор найма».'
    },
    {
      regime: 'Коммунальная квартира',
      checks: 'Отдельные комнаты/права, общие помещения, приборы и исполнители.',
      route: 'Разделить начисления по правовой природе и способу расчёта, а не одной общей формулой.'
    }
  ];

  const results = [
    {
      title: 'Соглашение',
      get: 'Письменный порядок оплаты между участниками и пакет для исполнителей.',
      depends: 'Согласие, правовой режим, перечень платежей и исполнимость.'
    },
    {
      title: 'Отдельные документы',
      get: 'Раздельные суммы и учёт по установленной доле/порядку.',
      depends: 'Статус лиц, решение суда/соглашение и система конкретного исполнителя.'
    },
    {
      title: 'Судебное решение',
      get: 'Определённый порядок участия и обязанность совершить требуемые действия.',
      depends: 'Надлежащие требования, участники, доказательства и практика.'
    },
    {
      title: 'Защита по долгу',
      get: 'Отмена приказа, контррасчёт, исключение неподтверждённых периодов/оплат.',
      depends: 'Сроки, основание долга, состав должников и документы.'
    },
    {
      title: 'Возврат части расходов',
      get: 'Взыскание подтверждённых сумм, уплаченных за другого, если есть основания.',
      depends: 'Период, доли, платежи, характер расходов и срок давности.'
    }
  ];

  const checks = [
    'вид права на квартиру, размеры долей и даты их возникновения;',
    'договор социального найма, состав семьи и статус бывших членов семьи — если жильё муниципальное;',
    'кто является плательщиком и кто предъявляет начисления: УК, ТСЖ, РСО, фонд, оператор или расчётный центр;',
    'состав каждой строки квитанции: содержание, коммунальные ресурсы, потребление по счётчику/нормативу, капремонт и иные платежи;',
    'какие расходы распределяются по долям, какие зависят от потребления и где нужна отдельная квалификация;',
    'периоды долга, оплаты, пени, судебные приказы и исполнительные производства;',
    'несовершеннолетних собственников/пользователей и надлежащих законных представителей;',
    'претензионные обращения, отказы исполнителей и возможность добровольного исполнения;',
    'надлежащих истцов, ответчиков и третьих лиц, подсудность, госпошлину и способ защиты;',
    'нужен ли параллельный спор о пользовании, выселении, собственности или начислениях исполнителя.'
  ];

  const routes = [
    {
      name: 'Соглашение плательщиков',
      fit: 'Все участники готовы зафиксировать порядок.',
      res: 'Быстрее суда; важно охватить виды платежей и порядок передачи исполнителям.'
    },
    {
      name: 'Заявление исполнителю',
      fit: 'Есть доли/соглашение и понятное требование к документам.',
      res: 'Возможен добровольный раздельный учёт; отказ нужно получить письменно.'
    },
    {
      name: 'Иск об определении порядка оплаты',
      fit: 'Согласия нет или исполнитель требует судебное решение.',
      res: 'Суд определяет юридически обоснованный порядок; формулировка должна быть исполнимой.'
    },
    {
      name: 'Требование к исполнителю',
      fit: 'Порядок уже установлен, но отдельные документы не формируются.',
      res: 'Проверяются полномочия и техническая роль конкретной организации.'
    },
    {
      name: 'Взыскание понесённых расходов',
      fit: 'Один участник оплатил подтверждённую часть за других.',
      res: 'Отдельный денежный расчёт; не смешивать автоматически с будущими начислениями.'
    },
    {
      name: 'Защита от взыскания',
      fit: 'Есть приказ, иск, приставы или претензия.',
      res: 'Критичны процессуальные сроки; отмена приказа не прекращает материальный спор.'
    }
  ];

  const teamCapabilities = [
    { name: 'Диагностика', res: 'Карта прав, плательщиков, кредиторов, видов начислений и рисков.', note: 'Вывод после документов, а не только по регистрации.' },
    { name: 'Расчёт', res: 'Понятная таблица долей, периодов, платежей и спорных сумм.', note: 'Не подменяет сведения исполнителя и экспертизу сложных приборов учёта.' },
    { name: 'Соглашение / заявления', res: 'Исполнимые документы и комплект приложений.', note: 'Добровольное подписание/принятие третьими лицами не гарантируется.' },
    { name: 'Суд', res: 'Иск, отзывы, ходатайства, доказательства и представительство.', note: 'Итог и сроки определяет суд.' },
    { name: 'Долг', res: 'Возражения, отмена приказа, контррасчёт или отдельное требование.', note: 'Нужны подтверждённые периоды и платежи.' },
    { name: 'Исполнение', res: 'Передача решения исполнителям или работа с исполнительным документом.', note: 'Фактическое исполнение зависит от содержания решения и обязанного лица.' }
  ];

  const processSteps = [
    { num: '1', title: 'Приём', desc: 'Фиксируем режим жилья, доли, плательщиков, исполнителей, долг и судебную стадию.' },
    { num: '2', title: 'Проверка', desc: 'Разбираем документы и строки начислений, строим расчёт и карту требований.' },
    { num: '3', title: 'Досудебно', desc: 'Предлагаем соглашение, направляем заявления и получаем позиции исполнителей.' },
    { num: '4', title: 'Суд', desc: 'Готовим требования/возражения, привлекаем нужных участников, ведём заседания.' },
    { num: '5', title: 'Реализация', desc: 'Передаём соглашение/решение исполнителям, проверяем первые документы.' }
  ];

  const documents = [
    { cat: 'Права на жильё', items: 'Выписка ЕГРН, договор/свидетельство, документы о долях; для соцнайма — договор и документы о составе семьи.' },
    { cat: 'Лица', items: 'Сведения о собственниках, нанимателе, членах/бывших членах семьи, регистрации и несовершеннолетних.' },
    { cat: 'Начисления', items: 'Квитанции по всем поставщикам, детализация, показания, справки о задолженности и лицевых/расчётных идентификаторах.' },
    { cat: 'Оплаты', items: 'Чеки, банковские выписки, история платежей и назначение платежа по периодам.' },
    { cat: 'Переписка', items: 'Соглашения и проекты, заявления в УК/ТСЖ/РСО/расчётный центр, ответы и подтверждения отправки.' },
    { cat: 'Суд / приставы', items: 'Претензия, судебный приказ, иск, определения, уведомления, исполнительный документ и постановления пристава.' }
  ];

  const cases = [
    {
      title: 'Установили раздельную оплату для бывших супругов — совладельцев квартиры',
      tag: 'Собственник 1/2 доли · Общая долевая собственность',
      problem: 'После развода квартира осталась в равных долях. Клиент жил отдельно, но продолжал получать требования по общей задолженности, а договориться о ежемесячных платежах не удалось.',
      action: 'Проверили ЕГРН, квитанции и поставщиков, подготовили предложение о соглашении, получили письменные отказы, сформулировали судебные требования по видам платы и привлекли расчётные организации.',
      result: 'Суд определил участие совладельцев в расходах соразмерно долям и обязал формировать раздельные платёжные документы. После передачи решения первые начисления были проверены и скорректированы по установленному порядку.'
    },
    {
      title: 'Вернули часть расходов, которые наследница оплачивала за других собственников',
      tag: 'Собственник 1/3 доли · Квартира после наследования',
      problem: 'Три наследника получили доли, но квитанции и долг оплачивала одна собственница, чтобы избежать пеней и ограничений. Остальные отказывались участвовать в расходах.',
      action: 'Разделили платежи по правовой природе и периодам, сопоставили даты права и банковские платежи, направили расчёт и претензию, затем заявили самостоятельные денежные требования вместе с доказательствами.',
      result: 'Для будущих начислений оформлен раздельный порядок оплаты; с двух совладельцев взысканы подтверждённые части расходов и соответствующие судебные расходы в установленном судом объёме.'
    },
    {
      title: 'Определили самостоятельную оплату бывшего члена семьи в муниципальной квартире',
      tag: 'Наниматель · Социальный наём',
      problem: 'После распада семьи бывший член семьи нанимателя продолжал проживать в муниципальной квартире, но расходы систематически перекладывались на нанимателя. Просьба «разделить договор» не соответствовала действующему механизму.',
      action: 'Изучили договор социального найма, сведения о составе семьи и платежах, зафиксировали самостоятельный семейный бюджет и фактический порядок пользования, сформулировали требования об определении участия в оплате и выдаче отдельных документов.',
      result: 'Суд определил самостоятельный порядок участия бывшего члена семьи в оплате; расчётная организация начала формировать отдельные документы. Договор социального найма и статус муниципального жилья не изменились.'
    }
  ];

  const pricing = [
    { name: 'Консультация и стратегия', price: 'ХХХ ₽', desc: 'Режим жилья, участники, виды платежей, долг и следующий шаг.' },
    { name: 'Анализ начислений и оплат', price: 'от ХХХ ₽', desc: 'Периоды, кредиторы, квитанции, доли, оплаты и рабочий расчёт.' },
    { name: 'Соглашение о порядке оплаты', price: 'от ХХХ ₽', desc: 'Условия по видам платежей, документам, срокам и передаче исполнителям.' },
    { name: 'Заявления исполнителям', price: 'от ХХХ ₽', desc: 'Требования в УК/ТСЖ/РСО/расчётный центр и комплект приложений.' },
    { name: 'Иск об определении порядка оплаты', price: 'от ХХХ ₽', desc: 'Требования, участники, расчёт, доказательства и приложения.' },
    { name: 'Возражения по долгу / приказу', price: 'от ХХХ ₽', desc: 'Проверка срока, состава долга и процессуальные документы.' },
    { name: 'Взыскание понесённых расходов', price: 'от ХХХ ₽', desc: 'Расчёт, претензия и иск по подтверждённым платежам.' },
    { name: 'Представительство в суде', price: 'от ХХХ ₽', desc: 'Подготовка и участие в согласованном числе заседаний.' },
    { name: 'Комплексное сопровождение', price: 'от ХХХ ₽', desc: 'Соглашение/досудебная стадия, суд и реализация в договорном объёме.' }
  ];

  const faqs = [
    {
      q: 'Можно ли разделить лицевой счёт в приватизированной квартире?',
      a: 'В быту так называют определение порядка оплаты и получение отдельных платёжных документов. Возможность и способ зависят от долей, состава платежей, соглашения и позиции исполнителей.'
    },
    {
      q: 'Куда подавать заявление?',
      a: 'Сначала определяются все организации, которые выставляют платежи. При согласии направляются соглашение и заявления; при споре может потребоваться иск с участием надлежащих исполнителей.'
    },
    {
      q: 'Можно ли разделить оплату без суда?',
      a: 'Да, если участники договорились и исполнители принимают юридически корректное основание. Соглашение должно охватывать нужные виды начислений и не оставлять спорных периодов.'
    },
    {
      q: 'Доли оплаты всегда равны долям собственности?',
      a: 'Это базовый ориентир для ряда расходов по общему имуществу, но конкретные строки зависят от правовой природы, приборов учёта, потребления, соглашения и режима жилья.'
    },
    {
      q: 'Что будет со старым долгом?',
      a: 'Новый порядок действует на определённые периоды и сам по себе не списывает задолженность. Старый долг проверяется отдельно по кредитору, должникам, периоду, оплатам, пеням и срокам.'
    },
    {
      q: 'Если собственник не живёт, он может не платить?',
      a: 'Само отсутствие проживания обычно не прекращает бремя собственника. Но состав начислений и возможность перерасчёта отдельных услуг нужно проверять по документам и фактическим данным.'
    },
    {
      q: 'Можно ли разделить счёт в муниципальной квартире?',
      a: 'Нужно оценить договор социального найма, состав семьи и статус бывших членов семьи. Речь может идти о самостоятельной ответственности и отдельных документах, а не о разделе самого договора найма.'
    },
    {
      q: 'Нужен ли порядок пользования комнатами?',
      a: 'Не всегда. Порядок пользования и порядок оплаты — разные требования. Они могут быть связаны фактически, но один результат не возникает автоматически из другого.'
    },
    {
      q: 'Можно ли взыскать с совладельца то, что я платил за него?',
      a: 'При наличии оснований и доказательств возможно отдельное денежное требование. Проверяются виды расходов, доли, периоды, платежи и срок исковой давности.'
    },
    {
      q: 'Сколько длится дело?',
      a: 'Досудебный этап зависит от числа исполнителей и их ответов, судебный — от участников, нагрузки и обжалования. После анализа дадим ориентир по этапам без гарантии даты результата.'
    }
  ];

  return (
    <main>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      {/* Hero */}
      <section style={{ 
        padding: '140px 0 70px 0', 
        background: 'radial-gradient(at 0% 0%, rgba(255, 255, 255, 0.7) 0%, transparent 60%), radial-gradient(at 100% 100%, rgba(225, 218, 205, 0.5) 0%, transparent 60%), radial-gradient(at 80% 50%, rgba(234, 241, 246, 0.8) 0%, transparent 50%), linear-gradient(135deg, var(--color-cream) 0%, #f4f0e6 100%)'
      }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '8px', fontSize: '13px', color: 'var(--color-text-secondary)', flexWrap: 'wrap', marginBottom: '24px' }}>
            <Link href="/" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>Главная</Link>
            <span>/</span>
            <Link href="/grazhdanam" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>Гражданам</Link>
            <span>/</span>
            <Link href="/grazhdanam/zhilishchnyj-yurist" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>Жилищный юрист</Link>
            <span>/</span>
            <span>Раздел лицевых счетов и порядка оплаты ЖКУ</span>
          </div>

          <div style={{ maxWidth: '900px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '32px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
                Жилищное право · Липецк
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(30px, 3.8vw, 44px)', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', marginBottom: '20px', lineHeight: 1.15 }}>
              Раздел лицевых счетов и порядка оплаты ЖКУ в Липецке
            </h1>

            <p style={{ fontSize: '18px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '32px' }}>
              Определим, кто и в какой части должен оплачивать жильё и коммунальные услуги. Подготовим соглашение, обращение к расчётной организации или иск и поможем получить отдельные платёжные документы.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', marginBottom: '36px' }}>
              {[
                'Долевая собственность и семейные конфликты',
                'Социальный наём — с учётом особого режима ответственности',
                'Будущие начисления, прошлый долг и взыскание — раздельно'
              ].map((f, i) => (
                <div key={i} style={{ padding: '16px', background: 'rgba(255, 255, 255, 0.75)', borderRadius: '4px', borderLeft: '3px solid var(--color-gold)', fontSize: '14px', color: 'var(--color-deep-blue)', lineHeight: 1.45 }}>
                  {f}
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
              <a href="#consultation" className="btn-primary" style={{ padding: '16px 32px', fontSize: '16px' }}>
                Определить порядок оплаты
              </a>
              <a href="tel:+79103503111" className="btn-outline" style={{ padding: '16px 28px', fontSize: '16px' }}>
                Позвонить юристу
              </a>
            </div>

            <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '16px', margin: 0 }}>
              Для первичной оценки сообщите, кому принадлежит квартира, размеры долей, кто зарегистрирован, кто платит и есть ли задолженность или судебный документ.
            </p>
          </div>
        </div>
      </section>

      {/* Что на самом деле можно разделить */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
            <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
              Правовая сущность
            </span>
          </div>

          <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '32px' }}>
            Что на самом деле можно разделить
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '32px' }}>
            {terms.map((t, i) => (
              <div key={i} style={{ background: 'var(--color-cream)', padding: '24px', borderRadius: '4px', borderTop: '3px solid var(--color-primary)' }}>
                <h3 style={{ fontSize: '17px', color: 'var(--color-deep-blue)', fontWeight: 700, marginBottom: '12px' }}>
                  {t.term}
                </h3>
                <div style={{ fontSize: '14px', color: 'var(--color-deep-blue)', marginBottom: '10px', lineHeight: 1.5 }}>
                  <strong>Что означает:</strong> {t.meaning}
                </div>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  <span style={{ color: '#c62828', fontWeight: 600 }}>✕ Чего не происходит:</span> {t.notHappening}
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.6, margin: 0, fontStyle: 'italic', borderLeft: '3px solid var(--color-gold)', paddingLeft: '16px' }}>
            В быту это называют разделом лицевого счёта. На практике юрист добивается юридически корректного порядка оплаты и отдельных платёжных документов — без ложного обещания разделить саму квартиру.
          </p>
        </div>
      </section>

      {/* Когда нужна помощь */}
      <section className="section bg-cream">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
            <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
              Ситуации
            </span>
          </div>

          <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '32px' }}>
            Когда требуется помощь юриста
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '14px' }}>
            {situations.map((s, i) => (
              <div key={i} style={{ background: 'var(--color-white)', padding: '20px', borderRadius: '4px', display: 'flex', alignItems: 'flex-start', gap: '12px', boxShadow: '0 2px 6px rgba(16, 39, 59, 0.04)' }}>
                <span style={{ color: 'var(--color-gold)', fontSize: '18px', lineHeight: 1 }}>◆</span>
                <span style={{ fontSize: '14.5px', color: 'var(--color-deep-blue)', lineHeight: 1.5 }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Правовые режимы */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
            <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
              Статус жилья
            </span>
          </div>

          <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '32px' }}>
            Правовой режим определяет решение
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {legalRegimes.map((lr, i) => (
              <div key={i} style={{ background: 'var(--color-cream)', padding: '24px', borderRadius: '4px', borderLeft: '3px solid var(--color-primary)' }}>
                <h3 style={{ fontSize: '17px', color: 'var(--color-deep-blue)', fontWeight: 700, marginBottom: '10px' }}>
                  {lr.regime}
                </h3>
                <div style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', marginBottom: '10px', lineHeight: 1.5 }}>
                  <strong>Что проверяем:</strong> {lr.checks}
                </div>
                <div style={{ fontSize: '13.5px', color: 'var(--color-deep-blue)', lineHeight: 1.5 }}>
                  <strong>Маршрут:</strong> {lr.route}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Результаты */}
      <section className="section bg-cream">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
            <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
              Решения
            </span>
          </div>

          <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '32px' }}>
            Какой результат возможен
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {results.map((r, i) => (
              <div key={i} style={{ background: 'var(--color-white)', padding: '24px', borderRadius: '4px', boxShadow: '0 2px 8px rgba(16, 39, 59, 0.05)' }}>
                <h3 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', marginBottom: '10px' }}>
                  {r.title}
                </h3>
                <div style={{ fontSize: '14px', color: 'var(--color-deep-blue)', marginBottom: '10px', lineHeight: 1.5 }}>
                  <strong>Что получает клиент:</strong> {r.get}
                </div>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  <strong>От чего зависит:</strong> {r.depends}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Что проверит юрист */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
            <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
              Диагностика
            </span>
          </div>

          <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '32px' }}>
            Что проверит юрист перед началом работы
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '12px' }}>
            {checks.map((ch, idx) => (
              <div key={idx} style={{ padding: '16px', background: 'var(--color-cream)', borderRadius: '4px', fontSize: '14px', color: 'var(--color-deep-blue)', lineHeight: 1.5, borderLeft: '3px solid var(--color-gold)' }}>
                {ch}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Кейсы */}
      <section className="section bg-cream">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
            <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
              Практика
            </span>
          </div>

          <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '36px' }}>
            Примеры из практики
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '24px' }}>
            {cases.map((c, i) => (
              <div key={i} style={{ background: 'var(--color-white)', padding: '32px', borderRadius: '4px', boxShadow: '0 4px 12px rgba(16, 39, 59, 0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '16px' }}>
                <div>
                  <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '8px' }}>
                    {c.tag}
                  </div>
                  <h3 style={{ fontSize: '19px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '14px', lineHeight: 1.3 }}>
                    {c.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5, marginBottom: '12px' }}>
                    <strong>Ситуация:</strong> {c.problem}
                  </p>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    <strong>Что сделали:</strong> {c.action}
                  </p>
                </div>

                <div style={{ background: 'rgba(193, 160, 102, 0.08)', padding: '16px', borderRadius: '4px', borderLeft: '3px solid var(--color-gold)' }}>
                  <div style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--color-gold)', fontWeight: 700, marginBottom: '4px' }}>Результат</div>
                  <div style={{ fontSize: '14px', color: 'var(--color-deep-blue)', fontWeight: 500, lineHeight: 1.45 }}>{c.result}</div>
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', fontStyle: 'italic', margin: 0 }}>
            Результат зависит от вида права, состава жильцов, природы платежей, доказательств и позиции исполнителей. Оценим ваш порядок оплаты по документам.
          </p>
        </div>
      </section>

      {/* Этапы */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
            <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
              Процесс
            </span>
          </div>

          <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '32px' }}>
            Этапы и сроки
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            {processSteps.map((st, i) => (
              <div key={i} style={{ background: 'var(--color-cream)', padding: '24px', borderRadius: '4px' }}>
                <div style={{ fontSize: '28px', fontFamily: 'var(--font-serif)', color: 'var(--color-gold)', fontWeight: 700, marginBottom: '8px' }}>
                  0{st.num}
                </div>
                <h3 style={{ fontSize: '17px', color: 'var(--color-deep-blue)', fontWeight: 700, marginBottom: '8px' }}>
                  {st.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Документы */}
      <section className="section bg-cream">
        <div className="container">
          <div style={{ maxWidth: '900px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
                Документы
              </span>
            </div>

            <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '24px' }}>
              Документы и доказательства
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '24px' }}>
              {documents.map((d, idx) => (
                <div key={idx} style={{ background: 'var(--color-white)', padding: '20px', borderRadius: '4px', boxShadow: '0 2px 6px rgba(16, 39, 59, 0.04)' }}>
                  <div style={{ fontWeight: 700, color: 'var(--color-deep-blue)', fontSize: '15px', marginBottom: '6px' }}>
                    {d.cat}
                  </div>
                  <div style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    {d.items}
                  </div>
                </div>
              ))}
            </div>

            <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', fontStyle: 'italic', margin: 0, background: 'var(--color-white)', padding: '16px', borderRadius: '4px' }}>
              Если нет полной истории начислений, принесите последние квитанции и документы на жильё. Юрист определит, какие сведения запросить до расчёта и суда.
            </p>
          </div>
        </div>
      </section>

      {/* Прайс */}
      <section className="section bg-white" id="pricing">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
            <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
              Прайс
            </span>
          </div>

          <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '32px' }}>
            Стоимость раздела оплаты ЖКУ и юридического сопровождения
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
            {pricing.map((p, i) => (
              <div key={i} style={{ background: 'var(--color-cream)', padding: '20px 24px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                <div style={{ maxWidth: '650px' }}>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '4px' }}>
                    {p.name}
                  </div>
                  <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
                    {p.desc}
                  </div>
                </div>
                <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-primary)', whiteSpace: 'nowrap' }}>
                  {p.price}
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5, marginBottom: '24px' }}>
            Отдельно могут оплачиваться госпошлина, нотариус, доверенность, почта, выезд, апелляция, исполнительное производство и иные внешние расходы. Состав пакета закрепляется в договоре.
          </p>

          <a href="#consultation" className="btn-primary" style={{ padding: '14px 28px', fontSize: '15px' }}>
            Получить расчёт стоимости
          </a>
        </div>
      </section>

      {/* FAQ */}
      <FAQBlock faqs={faqs} title="Частые вопросы по разделу лицевых счетов и оплате ЖКУ" />

      {/* Связанные услуги */}
      <section className="section bg-cream">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
            <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
              Смежные задачи
            </span>
          </div>

          <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '32px' }}>
            Связанные услуги
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {[
              { title: 'Вселение и порядок пользования квартирой', desc: 'Если оплата связана с доступом и фактическим пользованием комнатами.', href: '/grazhdanam/zhilishchnyj-yurist/vselenie-i-ustranenie-prepyatstvij-v-polzovanii-kvartiroj/' },
              { title: 'Споры с УК, ТСЖ и ЖКХ', desc: 'Если неверен тариф, качество услуги или начисление самого исполнителя.', href: '/grazhdanam/zhilishchnyj-yurist/spory-s-upravlyayushchej-kompaniej-i-zhkh/' },
              { title: 'Выселение и выписка из квартиры', desc: 'Если цель — прекратить право проживания/регистрацию, а не только развести оплату.', href: '/grazhdanam/zhilishchnyj-yurist/vyselenie-i-vypiska-iz-kvartiry-cherez-sud/' },
              { title: 'Жилищный юрист (Хаб)', desc: 'Если есть комплексный спор или квалификация ситуации пока не ясна.', href: '/grazhdanam/zhilishchnyj-yurist/' }
            ].map((s, idx) => (
              <div key={idx} style={{ background: 'var(--color-white)', padding: '24px', borderRadius: '4px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '16px', boxShadow: '0 2px 6px rgba(16, 39, 59, 0.04)' }}>
                <div>
                  <h3 style={{ fontSize: '17px', color: 'var(--color-deep-blue)', fontWeight: 700, marginBottom: '8px' }}>{s.title}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>{s.desc}</p>
                </div>
                <Link href={s.href} style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '14px', textDecoration: 'none' }}>
                  Подробнее →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Офис и форма */}
      <section className="section bg-white" id="consultation" style={{ scrollMarginTop: '120px' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start', paddingTop: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>
                  Обращение
                </span>
              </div>
              <h2 style={{ fontSize: '34px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0 }}>
                Определим, какой порядок оплаты можно установить в вашей ситуации
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: 1.6, marginBottom: '32px' }}>
                Оставьте номер и укажите: квартира в собственности или соцнайме, размеры долей, кто платит, есть ли долг и судебный документ.
              </p>

              <div>
                <div style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <span>
                    Перезвоним в течение 15 минут в рабочее время
                  </span>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '16px', lineHeight: 1.5 }}>
                  г. Липецк, ул. Советская, д. 35, оф. 213 · Тел. +7 (910) 350-31-11
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'var(--color-cream)', padding: '40px', borderRadius: '4px', boxShadow: '0 8px 16px rgba(16, 39, 59, 0.08)' }}>
              <ContactsForm 
                title="Получить первичную оценку" 
                subtitle="" 
                buttonText="Получить первичную оценку"
                commentPlaceholder="Режим жилья, доли, кто зарегистрирован, есть ли долг или судебный приказ"
                hiddenFields={[
                  { name: 'service_direction', value: 'Жилищное право - Раздел оплаты ЖКУ' },
                  { name: 'page_url', value: '/grazhdanam/zhilishchnyj-yurist/razdel-licevyh-schetov-i-poryadka-oplaty-zhku/' }
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
