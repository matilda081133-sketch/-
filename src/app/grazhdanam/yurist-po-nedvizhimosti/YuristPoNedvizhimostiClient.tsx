'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';
import ProcessBlock from '@/components/ProcessBlock';
import CasesBlock from '@/components/CasesBlock';
import PricingBlock, { PricingTier } from '@/components/PricingBlock';

export default function YuristPoNedvizhimostiClient() {
  const faqs = [
    {
      q: 'Чем юрист отличается от риелтора при покупке квартиры?',
      a: 'Риелтор обычно организует поиск объекта и взаимодействие сторон. Юрист оценивает правовые основания и риски, проверяет документы и условия договора, предлагает способы снизить риск оспаривания, потери денег или невозможности зарегистрировать право. Конкретный объём проверки зависит от объекта и доступных документов.'
    },
    {
      q: 'Можно ли гарантировать юридическую чистоту недвижимости?',
      a: 'Абсолютную гарантию дать нельзя: часть обстоятельств может не отражаться в реестрах или документах. Задача проверки — выявить доступные риски, запросить дополнительные подтверждения, изменить условия сделки или рекомендовать отказаться от неё, если риск нельзя приемлемо снизить.'
    },
    {
      q: 'Достаточно ли выписки ЕГРН?',
      a: 'Нет. Выписка показывает зарегистрированные сведения на дату её формирования, но не заменяет анализ основания права, истории объекта, полномочий стороны, семейных и банкротных рисков, условий расчётов и других обстоятельств конкретной сделки.'
    },
    {
      q: 'Когда лучше обращаться: до аванса или после?',
      a: 'Лучше до передачи аванса или задатка и до подписания документов. Если деньги уже переданы, нужно проверить условия соглашения и не подписывать новые документы без оценки последствий.'
    },
    {
      q: 'Что делать, если Росреестр приостановил регистрацию?',
      a: 'Сначала нужно изучить уведомление и понять причину. Иногда достаточно предоставить или исправить документы; в других случаях требуется участие второй стороны, установление права либо обжалование. Универсально подавать тот же комплект повторно или сразу идти в суд не следует.'
    },
    {
      q: 'Можно ли признать право собственности без договора?',
      a: 'Возможность зависит от основания приобретения, фактических обстоятельств и доказательств. Суд не заменяет отсутствующий документ автоматически. Юрист определит надлежащий способ защиты и круг участников после изучения материалов.'
    },
    {
      q: 'В течение какого срока можно оспорить сделку?',
      a: 'Срок зависит от основания недействительности, момента, когда лицо узнало или должно было узнать о нарушении, и других обстоятельств. Оценивать срок нужно по конкретным требованиям и документам; откладывать анализ после получения иска или выявления проблемы не стоит.'
    },
    {
      q: 'Можно ли узаконить любой самовольно построенный дом или пристройку?',
      a: 'Нет. Учитываются права на землю, допустимость строительства, параметры объекта, безопасность, права третьих лиц и возможность устранить нарушения. До обращения в суд нужно оценить внесудебный путь и риск встречного требования о сносе.'
    },
    {
      q: 'Что можно потребовать от застройщика при недостатках квартиры?',
      a: 'Способ защиты зависит от характера недостатков, условий договора, даты и порядка приёмки, фиксации дефектов и действующего регулирования. Это может быть устранение недостатков, соразмерное уменьшение цены, возмещение обоснованных расходов или иное применимое требование.'
    },
    {
      q: 'Можно ли работать дистанционно?',
      a: 'Консультацию, анализ документов, подготовку позиции и часть процессуальной работы можно проводить дистанционно. Необходимость личного участия, осмотра объекта, экспертизы или заседаний определяется по ситуации.'
    },
    {
      q: 'От чего зависит стоимость услуг?',
      a: 'От вида и количества объектов, числа участников, объёма документов, сложности рисков, стадии регистрации или суда, необходимости переговоров, экспертизы и представительства. Стоимость каждого согласованного этапа фиксируется до его начала.'
    }
  ];

  const cases = [
    {
      category: 'СДЕЛКИ И ПРОВЕРКА',
      title: 'Проверили квартиру перед покупкой и изменили схему сделки',
      problem: 'Покупатель выбрал квартиру на вторичном рынке и планировал внести крупный аванс. Объект несколько раз переходил между родственниками, продавец действовал через представителя, а часть документов стороны предлагали предоставить после подписания.',
      action: 'Проверили основания права и цепочку переходов, полномочия представителя, ограничения и судебные риски; запросили недостающие документы; переработали условия аванса, договора и раскрытия расчётов.',
      result: 'Клиент получил перечень выявленных рисков и провёл сделку только после их устранения, с согласованным порядком регистрации, передачи объекта и доступа продавца к деньгам.',
      isDemo: false
    },
    {
      category: 'ОСПАРИВАНИЕ СДЕЛОК',
      title: 'Защитили покупателя в споре об оспаривании сделки',
      problem: 'После регистрации права прежний собственник потребовал вернуть квартиру, заявив, что при продаже не понимал последствий своих действий. Покупатель уже оплатил объект и начал ремонт.',
      action: 'Проанализировали обстоятельства заключения и исполнения договора, подтверждение расчётов, поведение сторон до и после сделки, собрали документы и свидетельства добросовестности приобретателя, подготовили возражения и позицию по экспертизе.',
      result: 'Суд отказал в возврате квартиры; зарегистрированное право покупателя сохранилось, а заявленные обеспечительные ограничения были сняты после вступления решения в силу.',
      isDemo: false
    },
    {
      category: 'СПОРЫ С ЗАСТРОЙЩИКОМ',
      title: 'Взыскали расходы на устранение недостатков новостройки',
      problem: 'После передачи квартиры собственники обнаружили промерзание наружной стены, нарушение геометрии оконных проёмов и дефекты стяжки. Застройщик признал только часть недостатков и затягивал ремонт.',
      action: 'Организовали фиксацию дефектов, проверили техническое заключение и расчёт расходов, направили претензию, сформировали требования и представили интересы в суде.',
      result: 'В пользу собственников взысканы подтверждённые расходы на устранение недостатков и иные применимые выплаты; полученные средства позволили выполнить ремонт выбранной подрядной организацией.',
      isDemo: false
    }
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Уточняем ситуацию',
      desc: 'Уточняем объект, участников, цель и текущую стадию. Сообщаем, какие документы нужны для первичной оценки.'
    },
    {
      num: '02',
      title: 'Изучаем документы',
      desc: 'Изучаем документы и доступные сведения. Отделяем устранимые риски от обстоятельств, которые могут потребовать отказа от сделки или судебной защиты.'
    },
    {
      num: '03',
      title: 'Согласуем решение',
      desc: 'Предлагаем варианты, объём работ, стоимость и ожидаемый результат каждого этапа. Фиксируем выбранный вариант в договоре.'
    },
    {
      num: '04',
      title: 'Выполняем действия',
      desc: 'Готовим документы и выполняем согласованные действия: проверка, переговоры, договор, регистрация, претензия, экспертиза или суд.'
    },
    {
      num: '05',
      title: 'Итоговый результат',
      desc: 'Сопровождаем оформление или исполнение результата в пределах договора и сообщаем клиенту о следующих действиях и сроках.'
    }
  ];

  const situations = [
    {
      tag: 'ПОКУПКА КВАРТИРЫ',
      title: 'Покупаю недвижимость',
      desc: 'Нужно проверить объект, продавца, документы, договор и порядок расчётов до передачи денег.'
    },
    {
      tag: 'ПРОДАЖА И ДАРЕНИЕ',
      title: 'Продаю или передаю объект',
      desc: 'Нужно подготовить договор, согласовать условия, регистрацию, расчёты и передачу недвижимости.'
    },
    {
      tag: 'СПОР С ЗАСТРОЙЩИКОМ',
      title: 'Застройщик нарушил обязательства',
      desc: 'Просрочка передачи, дефекты отделки, отказ платить неустойку или необходимость расторгнуть ДДУ.'
    },
    {
      tag: 'ОФОРМЛЕНИЕ ПРАВ',
      title: 'Право не удаётся оформить',
      desc: 'Не хватает документов, продавец уклоняется от регистрации, или требуется судебное признание права.'
    },
    {
      tag: 'ОСПАРИВАНИЕ СДЕЛКИ',
      title: 'Сделку хотят отменить',
      desc: 'Предъявлен иск либо есть основания оспорить куплю-продажу, дарение или другую передачу объекта.'
    },
    {
      tag: 'САМОВОЛЬНАЯ ПОСТРОЙКА',
      title: 'Постройку требуют снести',
      desc: 'Нужно оценить возможность сохранения, оформления и судебной защиты дома, здания или пристройки.'
    },
    {
      tag: 'ПРИОСТАНОВКА В РОСРЕЕСТРЕ',
      title: 'Росреестр приостановил регистрацию',
      desc: 'Определим причину: устранимые замечания, скрытый спор о праве или пороки представленных документов.'
    },
    {
      tag: 'СЛОЖНАЯ СИТУАЦИЯ',
      title: 'Не знаю, с чего начать',
      desc: 'Опишите объект, участников и текущую стадию — разберём риски и определим профильный маршрут защиты.'
    }
  ];

  const directions = [
    {
      title: 'Сопровождение сделок с недвижимостью',
      desc: 'Проверим объект и сторону сделки, подготовим договор, согласуем безопасные расчёты и сопроводим регистрацию и передачу.',
      link: '/grazhdanam/yurist-po-nedvizhimosti/soprovozhdenie-sdelok-s-nedvizhimostyu/'
    },
    {
      title: 'Споры с застройщиком в Липецке',
      desc: 'Определим вид требований по просрочке, недостаткам или расторжению ДДУ и выстроим претензионную и судебную работу.',
      link: '/grazhdanam/yurist-po-nedvizhimosti/spory-s-zastrojshchikom/'
    },
    {
      title: 'Взыскание неустойки по ДДУ',
      desc: 'Рассчитаем применимые требования, подготовим претензию и иск, сопроводим спор и фактическое исполнение решения.',
      link: '/grazhdanam/yurist-po-nedvizhimosti/vzyskanie-neustojki-po-ddu/'
    },
    {
      title: 'Расторжение договора ДДУ',
      desc: 'Проверим основания и последствия выхода из договора, подготовим уведомление, соглашение или судебные требования.',
      link: '/grazhdanam/yurist-po-nedvizhimosti/rastorzhenie-ddu/'
    },
    {
      title: 'Компенсация за недостатки квартиры',
      desc: 'Поможем зафиксировать дефекты, определить надлежащее требование и взыскать обоснованные расходы или компенсацию.',
      link: '/grazhdanam/yurist-po-nedvizhimosti/nedostatki-kvartiry-i-vzyskanie-rashodov/'
    },
    {
      title: 'Легализация самовольной постройки',
      desc: 'Оценим землю, параметры и документы объекта, возможность внесудебного оформления или признания права через суд.',
      link: '/grazhdanam/yurist-po-nedvizhimosti/legalizaciya-samovolnoj-postrojki/'
    },
    {
      title: 'Признание права собственности',
      desc: 'Установим основание права, подготовим доказательства и добьёмся оформления объекта в Росреестре или через суд.',
      link: '/grazhdanam/yurist-po-nedvizhimosti/priznanie-prava-sobstvennosti-na-nedvizhimost/'
    },
    {
      title: 'Оспаривание сделок с недвижимостью',
      desc: 'Оценим основания недействительности, заявим иск либо выстроим защиту добросовестного приобретателя в суде.',
      link: '/grazhdanam/yurist-po-nedvizhimosti/osparivanie-sdelok-s-nedvizhimostyu/'
    }
  ];

  const helpItems = [
    {
      title: 'Объект и сведения ЕГРН',
      desc: 'Правообладатели, актуальные характеристики, ограничения, обременения, аресты и зарегистрированные притязания третьих лиц в доступном объёме.'
    },
    {
      title: 'Основания права и переходы',
      desc: 'Договоры купли-продажи, дарения, приватизация, судебные акты, полномочия представителей и нотариальные согласия супругов.'
    },
    {
      title: 'Статус и риски сторон',
      desc: 'Дееспособность сторон, полномочия, семейный статус, исполнительные производства ФССП, задолженности и открытые риски банкротства.'
    },
    {
      title: 'Договор и порядок расчётов',
      desc: 'Существенные условия, цена, сроки, условия безопасного доступа к деньгам (аккредитив, эскроу, ячейка) и передача объекта по акту.'
    },
    {
      title: 'ДДУ и новостройки',
      desc: 'Договор долевого участия, перенос сроков, односторонние акты, претензии, строительные дефекты, экспертные заключения и моратории.'
    },
    {
      title: 'Самовольные объекты',
      desc: 'Права на земельный участок, градостроительные регламенты, ПЗЗ, технические характеристики постройки, позиция администрации и риски сноса.'
    },
    {
      title: 'Судебная перспектива',
      desc: 'Определение надлежащих сторон, основания требований, исковая давность, доказательства, обеспечительные меры и исполнение судебного решения.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Консультация с анализом документов',
      subtitle: 'Первичный правовой разбор',
      popular: false,
      price: 'от 3 000 ₽',
      features: [
        { name: 'Изучение представленных документов', value: '✓' },
        { name: 'Оценка рисков и правовых вариантов', value: '✓' },
        { name: 'Рекомендации по дальнейшим действиям', value: '✓' }
      ],
      buttonText: 'Записаться на консультацию',
      buttonHref: '#form'
    },
    {
      title: 'Проверка юридической чистоты',
      subtitle: 'Безопасность сделки с недвижимостью',
      popular: true,
      badgeText: 'ВОСТРЕБОВАНО',
      price: 'от 15 000 ₽',
      features: [
        { name: 'Проверка права, истории и обременений', value: '✓' },
        { name: 'Проверка продавца и рисков банкротства', value: '✓' },
        { name: 'Письменное заключение с оценкой рисков', value: '✓' }
      ],
      buttonText: 'Заказать проверку',
      buttonHref: '#form'
    },
    {
      title: 'Сопровождение сделки под ключ',
      subtitle: 'Комплексная защита интересов',
      popular: false,
      price: 'от 25 000 ₽',
      features: [
        { name: 'Комплексная проверка объекта и сторон', value: '✓' },
        { name: 'Подготовка договора и безопасных расчётов', value: '✓' },
        { name: 'Контроль регистрации в Росреестре и передачи', value: '✓' }
      ],
      buttonText: 'Обсудить сделку',
      buttonHref: '#form'
    },
    {
      title: 'Судебная защита и споры',
      subtitle: 'Представительство в суде',
      popular: false,
      price: 'от 45 000 ₽',
      features: [
        { name: 'Споры с застройщиками и взыскание по ДДУ', value: '✓' },
        { name: 'Признание прав и узаконивание самостроя', value: '✓' },
        { name: 'Оспаривание сделок и защита приобретателя', value: '✓' }
      ],
      buttonText: 'Рассчитать стоимость',
      buttonHref: '#form'
    }
  ];

  const relatedServices = [
    {
      title: 'Жилищные споры и ЖКХ',
      desc: 'Вселение, выселение, выписка через суд, соцнаём, споры с управляющей компанией, заливы квартир и перепланировка.',
      link: '/grazhdanam/zhilishchnyj-yurist/'
    },
    {
      title: 'Земельные участки и границы',
      desc: 'Межевание, реестровые ошибки, наложение границ, сервитут, изменение вида разрешённого использования (ВРИ).',
      link: '/grazhdanam/zemelnyj-yurist/'
    },
    {
      title: 'Семейный раздел имущества',
      desc: 'Раздел совместно нажитой недвижимости супругов при разводе, брачные договоры, выдел долей и ипотечные долги.',
      link: '/grazhdanam/semejnyj-yurist/'
    },
    {
      title: 'Наследственные споры',
      desc: 'Оформление наследства на квартиру или дом, восстановление срока принятия, выдел обязательной доли и оспаривание завещания.',
      link: '/grazhdanam/nasledstvennyj-yurist/'
    },
    {
      title: 'Ипотечные долги и залоги',
      desc: 'Споры с банками по кредитным договорам, обращение взыскания на заложенную квартиру, защита от торгов.',
      link: '/grazhdanam/kreditnyj-yurist/'
    },
    {
      title: 'Коммерческая недвижимость (B2B)',
      desc: 'Сделки юридических лиц и ИП с нежилыми помещениями, складами, договоры аренды, подряды и арбитражные споры.',
      link: '/biznesu/arbitrazhnyj-yurist/'
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
        areaServed: ['Липецк', 'Липецкая область']
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/#service',
        name: 'Услуги юриста по недвижимости в Липецке',
        serviceType: 'Юридическая помощь по недвижимости и сделкам',
        provider: {
          '@id': 'https://dejure-help.ru/#legalservice'
        },
        areaServed: ['Липецк', 'Липецкая область'],
        url: 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/',
        description: 'Помощь юриста по недвижимости в Липецке: сопровождение сделок, споры с застройщиком, признание права собственности и оспаривание сделок.',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Направления помощи юриста по недвижимости',
          itemListElement: directions.map(dir => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: dir.title,
              url: `https://dejure-help.ru${dir.link}`
            }
          }))
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/#breadcrumb',
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
            name: 'Гражданам',
            item: 'https://dejure-help.ru/grazhdanam/'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Юрист по недвижимости',
            item: 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/#faq',
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

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />
      <Header />

      {/* ═══ 1. ПЕРВЫЙ ЭКРАН ═══ */}
      <MilitaryHero
        breadcrumbs={
          <>
            <Link href="/" style={{ color: 'var(--color-primary)' }}>Главная</Link> <span style={{ margin: '0 8px' }}>/</span>
            <Link href="/grazhdanam/" style={{ color: 'var(--color-primary)' }}>Гражданам</Link> <span style={{ margin: '0 8px' }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Юрист по недвижимости</span>
          </>
        }
        superTitle="Недвижимость • сделки • споры • Липецк"
        title={<>Юрист по недвижимости <br />в Липецке</>}
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '640px', textWrap: 'balance' }}>
            Проверим документы и правовую историю объекта, оценим риски сделки или спора и предложим надёжный способ оформить либо защитить ваше право на недвижимость.
          </span>
        }
        primaryCtaText="Оценить перспективы дела"
        primaryCtaLink="#form"
        primaryCtaAnalytics="re_hero_consultation_click"
        primaryCtaSubtext="Перезвоним в течение 15 минут в рабочее время"
        secondaryCtaText="С какими ситуациями помогаем"
        secondaryCtaLink="#situations"
        trustItems={[
          { text: 'Проверка документов и правовой истории объекта' },
          { text: 'Безопасное сопровождение расчётов и регистрации' },
          { text: 'Судебная защита права собственности и споры по ДДУ' }
        ]}
        rightContent={
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', width: '100%' }}>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '130%',
              height: '130%',
              background: 'radial-gradient(circle, rgba(193, 160, 102, 0.15) 0%, rgba(23, 50, 77, 0.04) 40%, transparent 70%)',
              zIndex: 0,
              pointerEvents: 'none'
            }} />

            <svg style={{ position: 'absolute', top: '40%', left: '85%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', opacity: 0.09, zIndex: 0, pointerEvents: 'none' }} viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="0.6">
              <path d="M3 21h18 M4 21v-2h16v2 M6 19V9 M10 19V9 M14 19V9 M18 19V9 M12 4l-9 5h18l-9-5z M4 9h16"/>
            </svg>

            <div className="mockup-container" style={{ zIndex: 1, margin: 0 }}>
              <div style={{ position: 'absolute', width: '220px', height: '220px', background: 'var(--color-primary)', filter: 'blur(90px)', opacity: 0.12, borderRadius: '50%' }}></div>
              
              {/* Лист 4: Фоновый документ */}
              <div className="doc-wrapper-float-4">
                <div className="doc-sheet doc-sheet-4">
                  <div style={{ padding: '35px 25px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '30px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end' }}>
                        <div style={{ width: '90px', height: '3px', background: 'rgba(23,50,77,0.2)' }}></div>
                        <div style={{ width: '70px', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>
                    </div>
                    <div style={{ width: '140px', height: '6px', background: 'var(--color-primary)', margin: '0 auto 30px auto' }}></div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ width: '100%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      <div style={{ width: '90%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Лист 3: Выписка ЕГРН */}
              <div className="doc-wrapper-float-3">
                <div className="doc-sheet doc-sheet-3">
                  <div style={{ padding: '35px 25px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ position: 'absolute', top: '25px', left: '25px', width: '85px', height: '25px', border: '1.5px solid rgba(23, 50, 77, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-5deg)' }}>
                      <span style={{ fontSize: '4.5px', fontWeight: 'bold', color: 'rgba(23,50,77,0.5)', fontFamily: 'var(--font-serif)' }}>ЕГРН № 48/01-2026</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '35px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end' }}>
                        <div style={{ width: '95px', height: '3px', background: 'rgba(23,50,77,0.2)' }}></div>
                        <div style={{ width: '55px', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>
                    </div>
                    <div style={{ width: '130px', height: '6px', background: 'var(--color-primary)', margin: '0 auto 30px auto' }}></div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <div style={{ width: '100%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      <div style={{ width: '95%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      <div style={{ width: '80%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Лист 2: Договор купли-продажи / ДДУ */}
              <div className="doc-wrapper-float-2">
                <div className="doc-sheet doc-sheet-2">
                  <div style={{ padding: '28px 22px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ position: 'absolute', top: '22px', left: '22px', width: '110px', height: '32px', border: '1px solid #C1A066', color: '#C1A066', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-4deg)', opacity: 0.95 }}>
                      <div style={{ fontFamily: 'var(--font-serif)', fontSize: '5px', textAlign: 'center', fontWeight: 'bold', lineHeight: 1.2 }}>
                        ДОГОВОР КУПЛИ-ПРОДАЖИ<br/>НЕДВИЖИМОСТИ
                      </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '24px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end' }}>
                        <div style={{ width: '90px', height: '3px', background: 'rgba(23,50,77,0.2)' }}></div>
                        <div style={{ width: '50px', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>
                    </div>

                    <div style={{ width: '140px', height: '6px', background: 'var(--color-primary)', margin: '0 auto 16px auto' }}></div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                      <div style={{ width: '40%', height: '3px', background: 'rgba(23,50,77,0.2)' }}></div>
                      <div style={{ width: '100%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      <div style={{ width: '90%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                    </div>

                    <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '8px', borderTop: '1px dashed rgba(23,50,77,0.15)' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                        <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Покупатель:</div>
                        <div style={{ width: '70px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '8px' }}></div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                        <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Продавец:</div>
                        <div style={{ width: '70px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '8px' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Лист 1: План объекта с печатью */}
              <div className="doc-wrapper-float-1">
                <div className="doc-sheet doc-sheet-1">
                  <div style={{ padding: '26px 22px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(23,50,77,0.2)', paddingBottom: '10px', marginBottom: '14px' }}>
                      <img src="/images/logo_dark.png" alt="Де-Юре" style={{ width: '55px', height: 'auto', opacity: 0.9 }} />
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', alignItems: 'flex-end' }}>
                        <span style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)', letterSpacing: '0.05em' }}>ПЛАН ОБЪЕКТА</span>
                        <span style={{ fontSize: '5px', color: 'var(--color-primary)' }}>Технический паспорт БТИ / ЕГРН</span>
                      </div>
                    </div>

                    <div className="doc-map-box" style={{ 
                      width: '100%', 
                      height: '110px', 
                      background: 'rgba(247, 244, 237, 0.6)', 
                      border: '1px solid rgba(193, 160, 102, 0.3)', 
                      borderRadius: '2px', 
                      marginBottom: '12px', 
                      position: 'relative', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      padding: '4px' 
                    }}>
                      <svg width="100%" height="100%" viewBox="0 0 200 100" fill="none">
                        <rect x="20" y="10" width="160" height="80" fill="rgba(193, 160, 102, 0.12)" stroke="#10273B" strokeWidth="1.5" />
                        <line x1="90" y1="10" x2="90" y2="90" stroke="#10273B" strokeWidth="1.2" />
                        <line x1="90" y1="50" x2="180" y2="50" stroke="#10273B" strokeWidth="1.2" />
                        <line x1="20" y1="55" x2="90" y2="55" stroke="#10273B" strokeWidth="1.2" strokeDasharray="2 2" />
                        <path d="M90 35 A15 15 0 0 0 75 50" fill="none" stroke="#C1A066" strokeWidth="0.8" />
                        <path d="M110 50 A15 15 0 0 0 125 35" fill="none" stroke="#C1A066" strokeWidth="0.8" />
                        <text x="30" y="36" fill="#10273B" fontSize="6.5" fontWeight="bold">Гостиная 22.4 м²</text>
                        <text x="30" y="75" fill="#10273B" fontSize="6.5" fontWeight="bold">Кухня 12.8 м²</text>
                        <text x="100" y="32" fill="#10273B" fontSize="6.5" fontWeight="bold">Спальня 16.5 м²</text>
                        <text x="100" y="72" fill="#10273B" fontSize="6.5" fontWeight="bold">Холл / СУ 8.5 м²</text>
                        <text x="135" y="86" fill="#C1A066" fontSize="7" fontWeight="bold">S = 74.2 м²</text>
                      </svg>
                    </div>

                    <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '8px', borderTop: '1px solid rgba(23,50,77,0.15)' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <div style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)' }}>ЮК «ДЕ-ЮРЕ»</div>
                        <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Правовая защита • Липецк</div>
                      </div>
                      <div style={{ position: 'relative', width: '42px', height: '42px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ width: '38px', height: '38px', borderRadius: '50%', border: '1.25px solid #17375E', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-12deg)', opacity: 0.9 }}>
                          <div style={{ width: '31px', height: '31px', borderRadius: '50%', border: '0.5px dashed #17375E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ fontSize: '3.5px', fontWeight: 'bold', color: '#17375E', textAlign: 'center', lineHeight: 1.1 }}>
                              ДЕ-ЮРЕ<br/>ЛИПЕЦК
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        }
      />

      {/* ═══ 2. БЛОК СИТУАЦИЙ ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.25 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block' }}>
                С какими вопросами
              </span>
              <span className="hero-title-span-mobile" style={{ display: 'block' }}>
                по недвижимости обращаются
              </span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Помогаем разобраться в сделках, спорах с застройщиками, оформлении и защите права собственности. Изучим документы, определим характер задачи и предложим законный порядок действий.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', gridAutoRows: '1fr' }}>
            {situations.map((sit, i) => (
              <div
                key={i}
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

            {/* Карточка 9: Экспресс-анализ (CTA-карточка в 3-й строке) */}
            <div className="hover-lift" style={{ 
              padding: '32px 28px', 
              background: 'linear-gradient(145deg, #10273B 0%, #17324D 100%)',
              border: '1px solid rgba(193, 160, 102, 0.35)',
              borderTop: '3px solid var(--color-gold)',
              boxShadow: '0 8px 30px rgba(16, 39, 59, 0.18)',
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'space-between',
              position: 'relative', 
              overflow: 'hidden',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', opacity: 0.1, pointerEvents: 'none' }}>
                <svg width="100" height="100" viewBox="0 0 24 24" fill="#C1A066">
                  <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>

              <div>
                <div style={{ 
                  fontSize: '11.5px', 
                  fontWeight: 700, 
                  color: 'var(--color-gold)', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.06em', 
                  marginBottom: '12px',
                  background: 'rgba(193, 160, 102, 0.15)',
                  padding: '3px 8px',
                  alignSelf: 'flex-start',
                  display: 'inline-block',
                  borderRadius: '2px'
                }}>
                  Экспресс-анализ
                </div>
                <h3 style={{ 
                  fontFamily: 'var(--font-serif)', 
                  fontSize: '18px', 
                  fontWeight: 600, 
                  color: '#FFFFFF', 
                  margin: '0 0 12px 0', 
                  lineHeight: 1.35,
                  position: 'relative',
                  zIndex: 1
                }}>
                  Определить следующий шаг
                </h3>
                <p style={{ 
                  fontSize: '14px', 
                  color: '#CBD5E1', 
                  lineHeight: 1.6,
                  margin: 0,
                  position: 'relative',
                  zIndex: 1
                }}>
                  Проверим объект, сторону сделки, процессуальные сроки и подберём законный маршрут защиты.
                </p>
              </div>

              <div style={{ position: 'relative', zIndex: 1, marginTop: '20px' }}>
                <a
                  href="#form"
                  className="btn btn-gold"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '9px 14px',
                    fontSize: '13px',
                    fontWeight: 700,
                    backgroundColor: 'var(--color-gold)',
                    color: 'var(--color-deep-blue)',
                    borderRadius: '0',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 12px rgba(193, 160, 102, 0.25)'
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('form');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    else window.location.hash = 'form';
                  }}
                >
                  Определить стадию и следующий шаг
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. НАПРАВЛЕНИЯ ПОМОЩИ ═══ */}
      <section id="directions" className="section" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Направления юридической помощи
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block' }}>
                Выберите специализированную услугу. Если ваша ситуация
              </span>
              <span className="hero-title-span-mobile" style={{ display: 'block' }}>
                затрагивает несколько вопросов, опишите детали в форме —
              </span>
              <span className="hero-title-span-mobile" style={{ display: 'block' }}>
                мы разберёмся и подскажем оптимальный план действий.
              </span>
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px' }}>
            {directions.map((dir, i) => (
              <Link key={i} href={dir.link} style={{ textDecoration: 'none', display: 'block' }}>
                <div 
                  className="card service-card" 
                  style={{ 
                    height: '100%', 
                    minHeight: '160px',
                    padding: '30px', 
                    background: 'var(--color-white)', 
                    border: '1px solid var(--color-border)',
                    borderRadius: '0',
                    display: 'flex', 
                    flexDirection: 'column', 
                    transition: 'all 0.3s',
                    position: 'relative',
                    borderTop: '3px solid var(--color-primary)'
                  }}
                >
                  <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3 }}>
                    {dir.title}
                  </h3>
                  <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                    {dir.desc}
                  </p>
                  <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, transition: 'transform 0.3s' }}>
                    Подробнее 
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.3s' }}>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}

            {/* Карточка 9: «Нестандартная ситуация», завершающая сетку 3х3 в одном ряду с картой 8 */}
            <div 
              className="card service-card" 
              style={{ 
                height: '100%', 
                minHeight: '160px',
                padding: '30px', 
                background: 'var(--color-deep-blue)', 
                border: '1px solid transparent',
                borderRadius: '0',
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                transition: 'all 0.3s',
                position: 'relative',
                borderTop: '3px solid var(--color-gold)',
                boxShadow: '0 8px 16px rgba(16, 39, 59, 0.28)'
              }}
            >
              <div>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-white)', lineHeight: 1.35, fontWeight: 600 }}>
                  Нестандартная или сложная ситуация с недвижимостью?
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.55 }}>
                  Опишите вашу задачу в форме. Изучим имеющиеся документы и предложим надёжные законные варианты решения.
                </p>
              </div>
              <div style={{ marginTop: 'auto', paddingTop: '14px', borderTop: '1px solid rgba(255, 255, 255, 0.15)' }}>
                <a 
                  href="#form" 
                  className="btn white-btn-custom" 
                  style={{ 
                    display: 'inline-block', 
                    width: '100%',
                    textAlign: 'center', 
                    fontSize: '13.5px',
                    background: 'var(--color-white)',
                    color: 'var(--color-deep-blue)',
                    padding: '10px 18px',
                    fontWeight: 600,
                    textDecoration: 'none'
                  }}
                >
                  Обсудить ситуацию
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 4. ПРЕДВАРИТЕЛЬНЫЙ ПРАВОВОЙ АУДИТ (ORGANIC DIAGNOSTIC AUDIT MATRIX) ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '28px',
            marginBottom: '40px',
            borderBottom: '1px solid rgba(193, 160, 102, 0.3)',
            paddingBottom: '28px'
          }}>
            <div style={{ maxWidth: '620px' }}>
              <div style={{
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--color-gold)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '12px'
              }}>
                Предварительный правовой аудит
              </div>
              <h2 className="with-accent" style={{
                fontSize: 'clamp(28px, 4vw, 42px)',
                fontFamily: 'var(--font-serif)',
                color: 'var(--color-primary)',
                margin: 0,
                lineHeight: 1.2
              }}>
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                  Сначала — диагностика
                </span>
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                  объекта и рисков
                </span>
              </h2>
            </div>
            <div style={{ maxWidth: '480px', paddingTop: '28px' }}>
              <p style={{
                fontSize: '15.5px',
                color: 'var(--color-deep-blue)',
                lineHeight: 1.65,
                margin: 0,
                opacity: 0.92
              }}>
                Выявляем скрытые риски, которые можно установить по документам, государственным реестрам и судебным базам, и предлагаем способы их законного устранения.
              </p>
            </div>
          </div>

          <style dangerouslySetInnerHTML={{ __html: `
            @media (max-width: 640px) {
              .audit-cta-card {
                grid-column: 1 / -1 !important;
              }
            }
          `}} />

          {/* Архитектурный реестр аудита */}
          <div style={{
            background: '#FFFFFF',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-gold)',
            boxShadow: '0 4px 25px rgba(23, 50, 77, 0.05)',
            marginBottom: '40px'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))'
            }}>
              {helpItems.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '34px 30px',
                    borderBottom: idx < 6 ? '1px solid var(--color-border)' : 'none',
                    borderRight: idx % 2 === 0 ? '1px solid var(--color-border)' : 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    position: 'relative'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '14px', marginBottom: '10px' }}>
                    <span style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '26px',
                      fontWeight: 600,
                      color: 'var(--color-gold)',
                      lineHeight: 1,
                      letterSpacing: '-0.02em',
                      minWidth: '36px'
                    }}>
                      0{idx + 1}
                    </span>
                    <h3 style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '19px',
                      fontWeight: 600,
                      color: 'var(--color-deep-blue)',
                      margin: 0,
                      lineHeight: 1.3
                    }}>
                      {item.title}
                    </h3>
                  </div>
                  <p style={{
                    fontSize: '14.5px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                    margin: 0,
                    paddingLeft: '50px'
                  }}>
                    {item.desc}
                  </p>
                </div>
              ))}

              {/* 08: Карточка действия в одном ряду с пунктом 07 во всю оставшуюся ширину */}
              <div
                className="audit-cta-card"
                style={{
                  gridColumn: '2 / -1',
                  padding: '32px 34px',
                  background: 'linear-gradient(145deg, #FBF8F3 0%, #F5EFE6 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '24px',
                  width: '100%',
                  boxSizing: 'border-box'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: '1 1 320px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span style={{ fontSize: '15.5px', color: 'var(--color-deep-blue)', fontWeight: 600, lineHeight: 1.5 }}>
                    Проводим правовую диагностику объекта и участников до передачи денег или обращения в суд
                  </span>
                </div>
                <a
                  href="#form"
                  className="btn btn-primary"
                  style={{
                    padding: '13px 28px',
                    fontSize: '14.5px',
                    whiteSpace: 'nowrap',
                    flexShrink: 0
                  }}
                >
                  Записаться на разбор ситуации
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 5. ПРИМЕРЫ ИЗ ПРАКТИКИ ═══ */}
      <CasesBlock
        title="Примеры задач по недвижимости"
        showDemoWarning={false}
        resultLabel="Результат"
        cases={cases}
      />

      {/* ═══ 6. ПРОЦЕСС РАБОТЫ ═══ */}
      <ProcessBlock
        title="Как проходит работа"
        subtitle="Пять последовательных шагов от первичного анализа документов до завершения сделки или исполнения решения суда."
        steps={processSteps}
      />

      {/* ═══ 7. ЧТО ПОДГОТОВИТЬ К ПЕРВОЙ ВСТРЕЧЕ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Что можно подготовить</span> <br />
              <span style={{ display: 'inline-block' }}>к первой консультации</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Если части документов нет на руках, всё равно запишитесь на консультацию. Юрист проверит статус объекта по открытым реестрам, определит недостающие материалы и направит запросы.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '28px', marginBottom: '32px' }}>
            {/* Карточка 1: Правоустанавливающие и договорные документы */}
            <div style={{
              background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-primary)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingBottom: '12px', borderBottom: '1px solid rgba(23, 50, 77, 0.1)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                </svg>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0 }}>
                  Правоустанавливающие и договорные документы
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Необходимы для подтверждения юридической чистоты объекта, оснований владения и условий планируемой сделки.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Выписка из ЕГРН и документы-основания</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Свидетельства, договоры купли-продажи, дарения, приватизации, свидетельства о праве на наследство.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Договоры и соглашения по сделке</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Проект или подписанный договор купли-продажи, ДДУ, предварительный договор, соглашение об авансе или задатке.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Технические документы и планы на объект</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Технический план, кадастровый паспорт, межевой план земельного участка, ГПЗУ, разрешения на строительство.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Финансовые и расчётные документы</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Расписки в передаче денежных средств, банковские платёжные поручения, выписки со счетов эскроу или аккредитивов.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Карточка 2: Претензии, переписка и судебные материалы */}
            <div style={{
              background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-gold)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingBottom: '12px', borderBottom: '1px solid rgba(23, 50, 77, 0.1)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0 }}>
                  Претензии, переписка и судебные материалы
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Подтверждают претензии сторон, зафиксированные нарушения, соблюдение претензионного порядка и позицию оппонента.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Акты, дефектные ведомости и сметы</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Акты осмотра и приёма-передачи, ведомости строительных дефектов, заключения независимых экспертов или сметы.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Досудебная переписка и претензии</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Письменные претензии, почтовые квитанции об отправке, ответы продавца, застройщика или управляющей компании.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Уведомления Росреестра и госорганов</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Уведомления о приостановлении или отказе в государственной регистрации права, предписания надзорных ведомств.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Судебные документы (при наличии спора)</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Исковое заявление, судебные повестки, определения суда, отзывы ответчика или состоявшееся решение суда.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Информационная плашка */}
          <div style={{
            background: 'var(--color-white)',
            padding: '24px 28px',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-gold)',
            boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)',
            fontSize: '14.5px',
            color: 'var(--color-deep-blue)',
            lineHeight: 1.65,
            marginBottom: '32px'
          }}>
            <strong style={{ color: 'var(--color-primary)' }}>Если части документов нет на руках:</strong> не откладывайте консультацию. Юрист проведёт первичную правовую диагностику ситуации, определит ключевые риски и поможет истребовать недостающие документы через Росреестр, нотариальную палату, архив или судебный запрос.
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#form" className="btn btn-primary" style={{ display: 'inline-block' }}>
              Записаться на консультацию по недвижимости
            </a>
          </div>
        </div>
      </section>

      {/* ═══ 8. СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость услуг юриста по недвижимости"
        subtitle="Цена зависит от количества объектов, объёма документов, стадии регистрации или спора, необходимости проведения экспертизы и судебного представительства."
        tiers={pricingTiers}
        ctaTitle="Точную стоимость определим до начала работы"
        ctaSubtitle="Сначала изучим обстоятельства и документы, предложим подходящий формат помощи и зафиксируем стоимость в договоре. Она не изменится без вашего согласия."
        ctaButtonText="Получить расчёт стоимости"
        ctaButtonLink="#form"
        disclaimer="* Отдельно при необходимости оплачиваются государственная пошлина, нотариальные тарифы, независимая оценка, строительно-техническая экспертиза, выписки из ЕГРН и услуги кадастрового инженера. Состав расходов согласуется до начала работы."
      />

      {/* ═══ 9. СМЕЖНЫЕ ВОПРОСЫ И ДРУГИЕ ПРАКТИКИ (ПО ШАБЛОНУ) ═══ */}
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
              Комплексная правовая помощь
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '24px'
            }}>
              <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 3.5vw, 36px)', color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.25, flex: '1 1 480px', minWidth: '280px' }}>
                <span style={{ display: 'inline-block' }}>Смежные вопросы</span> <br /><span style={{ display: 'inline-block' }}>и другие практики</span>
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
                Если задача выходит за рамки классических сделок с недвижимостью, подключаем профильных юристов других практик компании «Де-Юре» для всесторонней защиты ваших интересов.
              </p>
            </div>
          </div>

          <style dangerouslySetInnerHTML={{ __html: `
            .related-service-card {
              border-top: 3px solid var(--color-primary) !important;
            }
            .related-service-card:hover {
              border-top: 3px solid var(--color-gold) !important;
              transform: translateY(-4px);
              box-shadow: 0 12px 30px rgba(23, 50, 77, 0.08) !important;
            }
            .related-service-card:hover .card-arrow {
              color: var(--color-gold) !important;
            }
            .related-service-card:hover .card-arrow svg {
              stroke: var(--color-gold) !important;
              transform: translateX(4px);
            }
            .all-services-link:hover {
              color: var(--color-gold) !important;
            }
          `}} />

          <div className="grid grid-3" style={{ gap: '20px', marginBottom: '28px' }}>
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

          <div style={{ marginTop: '28px' }}>
            <Link href="/grazhdanam/" className="all-services-link" style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '15px', textDecoration: 'underline', textUnderlineOffset: '4px', display: 'inline-flex', alignItems: 'center', gap: '6px', transition: 'color 0.2s ease' }}>
              Смотреть все юридические услуги компании «Де-Юре» для граждан →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 10. ЧАСТЫЕ ВОПРОСЫ (FAQ) ═══ */}
      <FAQBlock
        faqs={faqs}
        title={<>Ответы на частые вопросы <br />по недвижимости</>}
        subtitle="Юридические разъяснения по проверке объектов, спорам с застройщиками, самовольным постройкам и судебной практике."
        ctaText="Задать свой вопрос"
        ctaLink="#form"
      />

      {/* ═══ 11. ФИНАЛЬНАЯ ФОРМА ═══ */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start', paddingTop: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>Связаться с нами</span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                Получите первичную оценку ситуации
              </h2>
              
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Опишите ваш вопрос по недвижимости и оставьте контактные данные. Обращение передадим профильному юристу. Он изучит обстоятельства и предложит возможный порядок действий.
              </p>
              
              <div style={{
                background: 'var(--gradient-cream)',
                padding: '24px 28px',
                borderLeft: '3px solid var(--color-primary)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                marginBottom: '28px'
              }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '6px' }}>Офис в Липецке</div>
                <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  г. Липецк, ул. Советская, д. 35, офис 213<br />
                  Пн–Пт с 9:00 до 18:00 • Возможно дистанционное ведение дел
                </div>
              </div>

              <div style={{ marginTop: 'auto' }}>
                <div style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <span>
                    Перезвоним в течение 15 минут в рабочее время
                  </span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
              <div style={{ background: 'var(--gradient-cream)', padding: '40px', borderRadius: '0', boxShadow: '0 8px 24px rgba(0,0,0,0.15)', width: '100%', border: '1px solid rgba(0,0,0,0.06)' }}>
                <ContactsForm 
                  title="Написать нам" 
                  subtitle=""
                  buttonText="Оставить заявку"
                  commentPlaceholder="Кратко опишите ситуацию по недвижимости…"
                  subtext="Если вы оставите заявку вечером или в выходной день, мы перезвоним в ближайший рабочий день."
                  hiddenFields={[
                    { name: 'service', value: 'Юрист по недвижимости' }
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
