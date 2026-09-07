'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import ContactsForm from '@/components/ContactsForm';

export default function ObzhalovanieClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LegalService',
        '@id': 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/obzhalovanie-resheniya-arbitrazhnogo-suda/#service',
        'name': 'Обжалование решений арбитражных судов — Де-Юре Липецк',
        'description': 'Правовой аудит судебных актов, оценка оснований отмены, подготовка апелляционных и кассационных жалоб, представительство в вышестоящих судах.',
        'url': 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/obzhalovanie-resheniya-arbitrazhnogo-suda/',
        'telephone': '+7 (910) 350-31-11',
        'priceRange': '₽₽₽',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'пл. Победы, д. 8, офис 412',
          'addressLocality': 'Липецк',
          'addressRegion': 'Липецкая область',
          'postalCode': '398001',
          'addressCountry': 'RU'
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/obzhalovanie-resheniya-arbitrazhnogo-suda/#breadcrumb',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Главная',
            'item': 'https://dejure-help.ru/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Бизнесу',
            'item': 'https://dejure-help.ru/biznesu/'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Арбитражный юрист',
            'item': 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/'
          },
          {
            '@type': 'ListItem',
            'position': 4,
            'name': 'Обжалование решения',
            'item': 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/obzhalovanie-resheniya-arbitrazhnogo-suda/'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/obzhalovanie-resheniya-arbitrazhnogo-suda/#faq',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Сколько времени есть на подачу апелляционной жалобы?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Апелляционная жалоба подается в течение одного месяца со дня принятия арбитражным судом первой инстанции решения в окончательной форме (если иной срок не установлен АПК РФ).'
            }
          },
          {
            '@type': 'Question',
            'name': 'Какой срок установлен для кассационной жалобы?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Кассационная жалоба в Арбитражный суд округа подается в срок, не превышающий двух месяцев со дня вступления в законную силу обжалуемого судебного акта.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Остановит ли подача жалобы исполнение решения суда?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Подача апелляционной жалобы приостанавливает вступление решения в законную силу. В кассации для остановки исполнения необходимо подать отдельное мотивированное ходатайство о приостановлении исполнения решения (ст. 283 АПК РФ).'
            }
          },
          {
            '@type': 'Question',
            'name': 'Можно ли представлять новые доказательства в апелляции?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Дополнительные доказательства принимаются судом апелляционной инстанции, только если заявитель обосновал невозможность их представления в суд первой инстанции по уважительным причинам (ст. 268 АПК РФ).'
            }
          },
          {
            '@type': 'Question',
            'name': 'Можно ли восстановить пропущенный срок на обжалование?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Да, по ходатайству лица срок может быть восстановлен арбитражным судом при условии, что ходатайство подано не позднее 6 месяцев со дня принятия акта и причины пропуска признаны уважительными.'
            }
          }
        ]
      }
    ]
  };

  const situations: { tag: string; title: React.ReactNode; desc: string }[] = [
    {
      tag: 'Отказ в иске',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Суд первой инстанции</span> <br />
          <span style={{ display: 'inline-block' }}>отказал в удовлетворении иска</span>
        </span>
      ),
      desc: 'Судья не учел ключевые доказательства, неверно истолковал условия договора или нормы закона. Необходимо апелляционное обжалование.'
    },
    {
      tag: 'Взыскание с компании',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>С вашей компании взыскали</span> <br />
          <span style={{ display: 'inline-block' }}>необоснованную сумму</span>
        </span>
      ),
      desc: 'Суд удовлетворил иск оппонента, не применил ст. 333 ГК РФ или проигнорировал возражения ответчика. Требуется отмена судебного акта.'
    },
    {
      tag: 'Жалоба оппонента',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Проигравшая сторона</span> <br />
          <span style={{ display: 'inline-block' }}>подала апелляционную жалобу</span>
        </span>
      ),
      desc: 'Вы выиграли дело в первой инстанции, но оппонент пытается отменить решение. Требуется подготовка мотивированного отзыва на жалобу.'
    },
    {
      tag: 'Нарушение норм права',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Суд нарушил нормы</span> <br />
          <span style={{ display: 'inline-block' }}>процессуального права</span>
        </span>
      ),
      desc: 'Рассмотрение дела в отсутствие неизвещенного участника, нарушение тайны совещания, отсутствие протокола (безусловные основания отмены).'
    },
    {
      tag: 'Кассационный пересмотр',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Апелляция оставила</span> <br />
          <span style={{ display: 'inline-block' }}>решение без изменений</span>
        </span>
      ),
      desc: 'Две инстанции ошиблись в применении материального права. Требуется подача кассационной жалобы в Арбитражный суд округа.'
    },
    {
      tag: 'Приостановление исполнения',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Угроза списания денег</span> <br />
          <span style={{ display: 'inline-block' }}>по исполнительному листу</span>
        </span>
      ),
      desc: 'Решение вступило в силу, но вы подаете кассационную жалобу. Требуется срочное приостановление исполнения судебного акта.'
    }
  ];

  const urgentItems: { title: React.ReactNode; desc: string }[] = [
    {
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Месячный срок на апелляцию</span> <br />
          <span style={{ display: 'inline-block' }}>подходит к концу</span>
        </span>
      ),
      desc: 'Пропуск месячного срока со дня изготовления мотивированного решения влечет возврат жалобы без рассмотрения.'
    },
    {
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Выдан исполнительный лист</span> <br />
          <span style={{ display: 'inline-block' }}>и начато списание</span>
        </span>
      ),
      desc: 'Оппонент предъявил лист в банк или приставам. Требуется срочная кассационная жалоба с ходатайством о приостановлении исполнения.'
    },
    {
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Двухмесячный срок</span> <br />
          <span style={{ display: 'inline-block' }}>на подачу кассации</span>
        </span>
      ),
      desc: 'Кассационная жалоба в Арбитражный суд Центрального округа должна быть подана строго в течение 2 месяцев.'
    },
    {
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Смена судебного представителя</span> <br />
          <span style={{ display: 'inline-block' }}>после первой инстанции</span>
        </span>
      ),
      desc: 'Предыдущий юрист проиграл дело. Требуется экстренное ознакомление с материалами дела и выстраивание новой правовой позиции.'
    }
  ];

  const routes: { tag: string; title: React.ReactNode; desc: string; route: string }[] = [
    {
      tag: 'Вторая инстанция',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Апелляционное обжалование</span> <br />
          <span style={{ display: 'inline-block' }}>в 19-й арбитражный суд</span>
        </span>
      ),
      desc: 'Полная перепроверка дела по существу, оценка доказательств, исправление фактических и правовых ошибок первой инстанции.',
      route: 'Подача апелляционной жалобы через суд первой инстанции в 19-й ААС (г. Воронеж).'
    },
    {
      tag: 'Третья инстанция',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Кассационное обжалование</span> <br />
          <span style={{ display: 'inline-block' }}>в АС Центрального округа</span>
        </span>
      ),
      desc: 'Проверка правильности применения норм материального и процессуального права арбитражными судами округа (г. Калуга).',
      route: 'Подача кассационной жалобы с ходатайством о приостановлении исполнения решения.'
    },
    {
      tag: 'Защита победы',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Отзыв на жалобу оппонента</span> <br />
          <span style={{ display: 'inline-block' }}>и защита решения</span>
        </span>
      ),
      desc: 'Оппонент обжалует решение, вынесенное в вашу пользу. Готовим мотивированные возражения и защищаем выводы суда.',
      route: 'Подготовка отзыва на апелляционную или кассационную жалобу со ссылками на практику.'
    }
  ];

  const stages: { num: string; stage: React.ReactNode; works: string; result: string }[] = [
    {
      num: '01',
      stage: 'Аудит судебного акта и материалов дела',
      works: 'Изучаем мотивированное решение, протоколы и аудиозаписи заседаний, письменные позиции сторон и приобщенные доказательства.',
      result: 'Заключение о наличии оснований для отмены решения (ст. 270, 288 АПК РФ).'
    },
    {
      num: '02',
      stage: 'Определение судебной стратегии и доводов жалобы',
      works: 'Формулируем нарушения норм материального и процессуального права, несоответствие выводов суда фактическим обстоятельствам.',
      result: 'Правовая позиция апелляционной или кассационной жалобы со ссылками на практику ВС РФ.'
    },
    {
      num: '03',
      stage: 'Составление текста жалобы и ходатайств',
      works: 'Готовим жалобу, ходатайство о восстановлении срока (при необходимости) и ходатайство о приостановлении исполнения решения.',
      result: 'Готовый комплект документов, согласованный с доверителем.'
    },
    {
      num: '04',
      stage: 'Оплата госпошлины и подача через «Мой Арбитр»',
      works: 'Направляем копии жалобы участникам дела, оплачиваем пошлину и подаем жалобу в арбитражный суд.',
      result: 'Определение вышестоящего арбитражного суда о принятии жалобы к производству.'
    },
    {
      num: '05',
      stage: 'Судебное представительство в суде апелляции / кассации',
      works: 'Личное либо онлайн-участие в судебных заседаниях 19-го ААС или АС Центрального округа, дача устных пояснений и ответов на вопросы коллегии.',
      result: 'Постановление об отмене незаконного судебного акта или оставлении решения в силе.'
    }
  ];

  const disputeCategories = [
    {
      title: 'Обжалование по договорам поставки',
      desc: 'Отмена решений по неоплате, качеству товара, гарантийным срокам и снижению неустоек.',
      href: '/biznesu/'
    },
    {
      title: 'Обжалование по договорам подряда',
      desc: 'Пересмотр решений по объемам КС-2, скрытым недостаткам и результатам строительных экспертиз.',
      href: '/biznesu/'
    },
    {
      title: 'Обжалование по взысканию задолженности',
      desc: 'Отмена актов о необоснованном взыскании долга, пеней, процентов за пользование чужими средствами.',
      href: '/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/'
    },
    {
      title: 'Обжалование по спорам об аренде',
      desc: 'Пересмотр решений о расторжении договоров аренды, освобождении площадей и возмещении улучшений.',
      href: '/biznesu/'
    },
    {
      title: 'Обжалование налоговых решений',
      desc: 'Отмена судебных актов по доначислениям ФНС, отказам в вычетах по НДС и блокировкам счетов.',
      href: '/biznesu/'
    },
    {
      title: 'Обжалование по корпоративным спорам',
      desc: 'Пересмотр актов по оспариванию решений общих собраний, сделок и взысканию убытков с директора.',
      href: '/biznesu/'
    },
    {
      title: 'Обжалование обеспечительных мер',
      desc: 'Отмена определений суда о наложении ареста на счета и имущество компании.',
      href: '/biznesu/arbitrazhnyj-yurist/'
    },
    {
      title: 'Обжалование определений суда',
      desc: 'Обжалование определений об оставлении без рассмотрения, прекращении производства, экспертизе.',
      href: '/biznesu/arbitrazhnyj-yurist/'
    },
    {
      title: 'Отзывы на жалобы оппонентов',
      desc: 'Защита вступивших и не вступивших в силу решений первой инстанции в апелляции и кассации.',
      href: '/biznesu/arbitrazhnyj-yurist/'
    }
  ];

  const cases = [
    {
      num: '01',
      category: '19-й ААС (г. Воронеж) • Отмена решения',
      desc: 'Суд первой инстанции взыскал с компании 18,5\u00A0млн\u00A0₽ по подрядному спору. В апелляционной инстанции доказано нарушение судом правил оценки экспертного заключения.',
      result: 'Решение суда первой инстанции отменено полностью. В удовлетворении иска оппоненту отказано.',
      badge: 'Полная отмена взыскания'
    },
    {
      num: '02',
      category: 'АС Центрального округа • Кассация',
      desc: 'Суды первой и апелляционной инстанций неправомерно отказали во взыскании неустойки 4,2\u00A0млн\u00A0₽. Подготовлена кассационная жалоба с обоснованием неправильного применения норм ГК РФ.',
      result: 'Кассационный суд отменил судебные акты и направил дело на новое рассмотрение с обязательными указаниями.',
      badge: 'Успешная кассация'
    },
    {
      num: '03',
      category: 'Приостановление исполнения решения',
      desc: 'Оппонент получил исполнительный лист на 9,8\u00A0млн\u00A0₽. Одновременно с кассационной жалобой подано ходатайство о приостановлении исполнения решения суда.',
      result: 'Кассационный суд приостановил исполнение судебного акта, предотвратив безакцептное списание средств со счета.',
      badge: 'Остановка списания средств'
    }
  ];

  const pricingTiers = [
    {
      name: 'Правовой аудит решения и протокола',
      price: 'от 25 000 ₽',
      desc: 'Анализ решения суда первой инстанции и определение перспектив отмены в апелляции.',
      features: [
        'Изучение мотивировочной части решения суда',
        'Анализ протоколов и аудиозаписей заседаний',
        'Поиск безусловных оснований для отмены (ст. 270 АПК)',
        'Оценка актуальной практики округа и ВС РФ',
        'Письменное заключение о перспективах жалобы'
      ],
      highlight: false
    },
    {
      name: 'Составление апелляционной / кассационной жалобы',
      price: 'от 45 000 ₽',
      desc: 'Полная подготовка мотивированной жалобы со всеми ходатайствами и подачей в суд.',
      features: [
        'Все услуги тарифа «Правовой аудит решения»',
        'Подготовка текста апелляционной или кассационной жалобы',
        'Ходатайство о восстановлении пропущенного срока',
        'Ходатайство о приостановлении исполнения судебного акта',
        'Подача документов через систему «Мой Арбитр»'
      ],
      highlight: true
    },
    {
      name: 'Обжалование решения «под ключ»',
      price: 'от 85 000 ₽',
      desc: 'Составление жалобы и личное участие представителя в заседаниях вышестоящего суда.',
      features: [
        'Все услуги тарифа «Составление жалобы»',
        'Личное участие юриста в заседаниях 19-го ААС / АС ЦО',
        'Подготовка дополнительных письменных пояснений коллегии',
        'Отслеживание публикации постановления суда',
        'Взыскание судебных расходов на обжалование'
      ],
      highlight: false
    }
  ];

  const faqItems = [
    {
      q: 'Сколько времени есть на подачу апелляционной жалобы?',
      a: 'Апелляционная жалоба подается в течение одного месяца со дня принятия арбитражным судом первой инстанции решения в окончательной форме (если иной срок не установлен АПК РФ).'
    },
    {
      q: 'Какой срок установлен для кассационной жалобы?',
      a: 'Кассационная жалоба в Арбитражный суд округа подается в срок, не превышающий двух месяцев со дня вступления в законную силу обжалуемого судебного акта.'
    },
    {
      q: 'Остановит ли подача жалобы исполнение решения суда?',
      a: 'Подача апелляционной жалобы приостанавливает вступление решения в законную силу. В кассации для остановки исполнения необходимо подать отдельное мотивированное ходатайство о приостановлении исполнения решения (ст. 283 АПК РФ).'
    },
    {
      q: 'Можно ли представлять новые доказательства в апелляции?',
      a: 'Дополнительные доказательства принимаются судом апелляционной инстанции, только если заявитель обосновал невозможность их представления в суд первой инстанции по уважительным причинам (ст. 268 АПК РФ).'
    },
    {
      q: 'Можно ли восстановить пропущенный срок на обжалование?',
      a: 'Да, по ходатайству лица срок может быть восстановлен арбитражным судом при условии, что ходатайство подано не позднее 6 месяцев со дня принятия акта и причины пропуска признаны уважительными.'
    },
    {
      q: 'Где проходят заседания апелляционного и кассационного судов?',
      a: 'Для решений Арбитражного суда Липецкой области апелляционной инстанцией является 19-й арбитражный апелляционный суд (г. Воронеж), а кассационной инстанцией — Арбитражный суд Центрального округа (г. Калуга). Возможно участие как очно, так и в режиме веб-конференции.'
    }
  ];

  return (
    <>
      <Script
        id="obzhalovanie-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ═══ БЛОК 1: HERO (ОБЖАЛОВАНИЕ РЕШЕНИЙ) ═══ */}
      <section className="hero bg-light" style={{ padding: '60px 0 70px 0', borderBottom: '1px solid var(--color-border)', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <nav aria-label="Хлебные крошки" style={{ marginBottom: '24px' }}>
            <ol style={{
              display: 'flex',
              flexWrap: 'wrap',
              listStyle: 'none',
              padding: 0,
              margin: 0,
              fontSize: '13.5px',
              color: 'var(--color-text-secondary)'
            }}>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <Link href="/" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>Главная</Link>
                <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <Link href="/biznesu/" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>Бизнесу</Link>
                <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <Link href="/biznesu/arbitrazhnyj-yurist/" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>Арбитражный юрист</Link>
                <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
              </li>
              <li style={{ color: 'var(--color-deep-blue)', fontWeight: 500 }}>
                Обжалование решения
              </li>
            </ol>
          </nav>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '40px'
          }}>
            <div style={{ flex: '1 1 580px', maxWidth: '720px' }}>
              <div style={{
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--color-gold)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '14px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-gold)' }}></span>
                Срочный режим после судебного акта • Липецк и Липецкая область
              </div>

              <h1 className="with-accent" style={{
                fontSize: 'clamp(30px, 4.5vw, 44px)',
                fontFamily: 'var(--font-serif)',
                color: 'var(--color-primary)',
                lineHeight: 1.15,
                margin: '0 0 20px 0',
                fontWeight: 600
              }}>
                Обжалование решения <br />арбитражного суда в Липецке
              </h1>

              <p style={{
                fontSize: '17px',
                color: 'var(--color-deep-blue)',
                lineHeight: 1.6,
                marginBottom: '32px',
                opacity: 0.92,
                maxWidth: '640px'
              }}>
                Проверим решение и материалы дела, оценим основания и сроки апелляции или кассации, подготовим жалобу и представим интересы бизнеса.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', marginBottom: '40px' }}>
                <a href="#form" className="btn btn-primary" style={{ padding: '15px 32px', fontSize: '15.5px' }}>
                  Подать жалобу на решение
                </a>
                <a href="#situations" className="btn btn-outline" style={{ padding: '15px 28px', fontSize: '15.5px' }}>
                  Основания для отмены ↓
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px', color: 'var(--color-text-secondary)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>Представительство в 19-м ААС (Воронеж) и АС Центрального округа (Калуга).</span>
              </div>
            </div>

            <div style={{ flex: '1 1 380px', maxWidth: '440px' }}>
              <div style={{
                background: '#FFFFFF',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-primary)',
                boxShadow: '0 8px 30px rgba(23, 50, 77, 0.07)',
                padding: '28px 24px'
              }}>
                <div style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: 'var(--color-gold)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '16px'
                }}>
                  Смежные услуги арбитражной практики
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <Link
                    href="/biznesu/arbitrazhnyj-yurist/zashchita-otvetchika-v-arbitrazhnom-sude/"
                    className="hover-lift"
                    style={{
                      display: 'block',
                      padding: '14px 16px',
                      background: 'var(--color-bg-light)',
                      border: '1px solid var(--color-border)',
                      borderLeft: '3px solid var(--color-gold)',
                      textDecoration: 'none'
                    }}
                  >
                    <strong style={{ display: 'block', fontSize: '14px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>
                      Защита ответчика в суде →
                    </strong>
                    <span style={{ fontSize: '12.5px', color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>
                      Отзыв на иск, возражения и снижение неустойки.
                    </span>
                  </Link>

                  <Link
                    href="/biznesu/arbitrazhnyj-yurist/isk-v-arbitrazhnyj-sud/"
                    className="hover-lift"
                    style={{
                      display: 'block',
                      padding: '14px 16px',
                      background: 'var(--color-bg-light)',
                      border: '1px solid var(--color-border)',
                      borderLeft: '3px solid var(--color-primary)',
                      textDecoration: 'none'
                    }}
                  >
                    <strong style={{ display: 'block', fontSize: '14px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>
                      Подготовка и подача иска →
                    </strong>
                    <span style={{ fontSize: '12.5px', color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>
                      Запуск нового судебного процесса.
                    </span>
                  </Link>

                  <Link
                    href="/biznesu/arbitrazhnyj-yurist/"
                    className="hover-lift"
                    style={{
                      display: 'block',
                      padding: '14px 16px',
                      background: 'var(--color-bg-light)',
                      border: '1px solid var(--color-border)',
                      borderLeft: '3px solid var(--color-deep-blue)',
                      textDecoration: 'none'
                    }}
                  >
                    <strong style={{ display: 'block', fontSize: '14px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>
                      Общий хаб: Арбитражный юрист →
                    </strong>
                    <span style={{ fontSize: '12.5px', color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>
                      Ведение арбитражных дел на всех стадиях.
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 2: СИТУАЦИИ ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '44px', textAlign: 'left' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px'
            }}>
              Поводы для обжалования
            </div>
            <h2 className="with-accent" style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-deep-blue)',
              margin: '0 0 16px 0',
              lineHeight: 1.2
            }}>
              Когда необходимо обжаловать судебный акт
            </h2>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '32px' }}>
            {situations.map((item, i) => (
              <div
                key={i}
                className="hover-lift"
                style={{
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  padding: '32px 26px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)'
                }}
              >
                <div>
                  <div style={{
                    fontSize: '11.5px',
                    fontWeight: 700,
                    color: 'var(--color-gold)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '12px',
                    background: 'rgba(193, 160, 102, 0.12)',
                    padding: '4px 10px',
                    display: 'inline-block'
                  }}>
                    {item.tag}
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '18px',
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
        </div>
      </section>

      {/* ═══ БЛОК 3: СРОЧНЫЕ СИТУАЦИИ ═══ */}
      <section className="section" style={{ background: 'var(--color-deep-blue)', color: '#FFFFFF', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '44px', textAlign: 'left' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px'
            }}>
              Критические процессуальные риски
            </div>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontFamily: 'var(--font-serif)',
              color: '#FFFFFF',
              margin: '0 0 16px 0',
              lineHeight: 1.2
            }}>
              Когда жалобу нужно подавать немедленно
            </h2>
          </div>

          <div className="grid grid-2" style={{ gap: '24px', marginBottom: '40px' }}>
            {urgentItems.map((item, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderLeft: '4px solid var(--color-gold)',
                  padding: '28px 26px'
                }}
              >
                <h3 style={{
                  fontSize: '18px',
                  fontFamily: 'var(--font-serif)',
                  color: '#FFFFFF',
                  margin: '0 0 10px 0',
                  lineHeight: 1.35
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '14.5px',
                  color: 'rgba(255, 255, 255, 0.78)',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.15)',
            paddingTop: '28px',
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            flexWrap: 'wrap'
          }}>
            <a href="tel:+79103503111" style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.02em' }}>
              +7 (910) 350-31-11
            </a>
            <a href="tel:+79103503111" className="btn-urgent-call" style={{ padding: '14px 28px', fontSize: '15px' }}>
              Позвонить юристу по обжалованию
            </a>
            <a href="#form" className="btn btn-urgent-outline" style={{ padding: '14px 28px', fontSize: '15px' }}>
              Отправить решение на аудит
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: ДИАГНОСТИКА: ДВЕ ВЕЩИ ДО ОБЖАЛОВАНИЯ ═══ */}
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
                Экспертный аудит решения
              </div>
              <h2 className="with-accent" style={{
                fontSize: 'clamp(28px, 4vw, 40px)',
                fontFamily: 'var(--font-serif)',
                color: 'var(--color-primary)',
                margin: 0,
                lineHeight: 1.2
              }}>
                До составления жалобы <br />проверяем две ключевые вещи
              </h2>
            </div>
            <div style={{ maxWidth: '480px', paddingTop: '24px' }}>
              <p style={{
                fontSize: '15.5px',
                color: 'var(--color-deep-blue)',
                lineHeight: 1.65,
                margin: 0,
                opacity: 0.92
              }}>
                Определяем фундаментальные судебные ошибки, которые служат безусловными основаниями для отмены решения.
              </p>
            </div>
          </div>

          <div className="grid grid-2" style={{ gap: '28px', marginBottom: '32px' }}>
            <div style={{
              background: '#FFFFFF',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-primary)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              padding: '36px 32px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
                <span style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(193, 160, 102, 0.15)',
                  color: 'var(--color-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '15px'
                }}>1</span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: 'var(--color-deep-blue)', margin: 0 }}>
                  Нарушения норм материального и процессуального права
                </h3>
              </div>
              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', color: 'var(--color-deep-blue)', lineHeight: 1.7 }}>
                <li>Неприменение закона, подлежащего применению, или неверное истолкование</li>
                <li>Рассмотрение дела в незаконном составе или в отсутствие неизвещенной стороны</li>
                <li>Нарушение правил ведения протокола или тайны совещательной комнаты</li>
              </ul>
            </div>

            <div style={{
              background: '#FFFFFF',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-gold)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              padding: '36px 32px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
                <span style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(193, 160, 102, 0.15)',
                  color: 'var(--color-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '15px'
                }}>2</span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: 'var(--color-deep-blue)', margin: 0 }}>
                  Несоответствие выводов суда обстоятельствам дела
                </h3>
              </div>
              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', color: 'var(--color-deep-blue)', lineHeight: 1.7 }}>
                <li>Недоказанность имеющих значение для дела обстоятельств</li>
                <li>Игнорирование допустимых и относимых доказательств в решении</li>
                <li>Противоречие выводов суда представленным в дело документам</li>
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
            <span style={{ fontSize: '14.5px', color: 'var(--color-deep-blue)', fontWeight: 500 }}>
              Оцениваем шансы на отмену решения до подачи жалобы и оплаты государственной пошлины
            </span>
            <a href="#form" className="btn btn-primary" style={{ padding: '12px 28px', fontSize: '14.5px' }}>
              Проверить решение на ошибки
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 5: СЦЕНАРИИ ОБЖАЛОВАНИЯ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '48px', textAlign: 'left' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px'
            }}>
              Судебные инстанции
            </div>
            <h2 className="with-accent" style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-deep-blue)',
              margin: '0 0 16px 0',
              lineHeight: 1.2
            }}>
              Инстанции обжалования судебных актов
            </h2>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {routes.map((item, i) => (
              <div
                key={i}
                className="hover-lift"
                style={{
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  padding: '34px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)'
                }}
              >
                <div>
                  <div style={{
                    fontSize: '11.5px',
                    fontWeight: 700,
                    color: 'var(--color-gold)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '14px',
                    background: 'rgba(193, 160, 102, 0.12)',
                    padding: '4px 10px',
                    display: 'inline-block'
                  }}>
                    {item.tag}
                  </div>
                  <h3 style={{
                    fontSize: '18px',
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--color-deep-blue)',
                    margin: '0 0 12px 0',
                    lineHeight: 1.35
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                    margin: '0 0 20px 0'
                  }}>
                    {item.desc}
                  </p>
                </div>

                <div style={{
                  borderTop: '1px solid rgba(193, 160, 102, 0.25)',
                  paddingTop: '16px',
                  fontSize: '13px',
                  color: 'var(--color-primary)',
                  fontWeight: 500,
                  lineHeight: 1.45
                }}>
                  <span style={{ color: 'var(--color-gold)', fontWeight: 700, display: 'block', marginBottom: '2px', fontSize: '11.5px', textTransform: 'uppercase' }}>
                    Порядок обжалования:
                  </span>
                  {item.route}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 6: ЭТАПЫ РАБОТЫ ═══ */}
      <section className="section bg-light" id="stages" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '44px', textAlign: 'left' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px'
            }}>
              Порядок обжалования
            </div>
            <h2 className="with-accent" style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-primary)',
              margin: '0 0 16px 0',
              lineHeight: 1.2
            }}>
              Этапы подготовки жалобы и защиты в вышестоящем суде
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {stages.map((st, i) => (
              <div
                key={i}
                className="stage-horizontal-card hover-lift"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid var(--color-border)',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)',
                  padding: '28px 32px',
                  display: 'grid',
                  gridTemplateColumns: '80px 1.2fr 2fr 1.5fr',
                  alignItems: 'center',
                  gap: '24px',
                  position: 'relative'
                }}
              >
                <div className="stage-accent"></div>
                <div style={{
                  fontSize: '28px',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 700,
                  color: 'var(--color-gold)'
                }}>
                  {st.num}
                </div>
                <div>
                  <h3 style={{
                    fontSize: '17px',
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--color-deep-blue)',
                    margin: 0,
                    lineHeight: 1.35
                  }}>
                    {st.stage}
                  </h3>
                </div>
                <div>
                  <span style={{ fontSize: '11.5px', fontWeight: 700, color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '4px' }}>
                    Состав работы:
                  </span>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.55 }}>
                    {st.works}
                  </p>
                </div>
                <div style={{
                  background: 'rgba(193, 160, 102, 0.08)',
                  padding: '14px 18px',
                  borderLeft: '3px solid var(--color-gold)'
                }}>
                  <span style={{ fontSize: '11.5px', fontWeight: 700, color: 'var(--color-deep-blue)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '2px' }}>
                    Результат этапа:
                  </span>
                  <span style={{ fontSize: '13.5px', color: 'var(--color-deep-blue)', lineHeight: 1.45, fontWeight: 500 }}>
                    {st.result}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 7: КАТЕГОРИИ СПОРОВ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '44px', textAlign: 'left' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px'
            }}>
              Отраслевая практика
            </div>
            <h2 className="with-accent" style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-deep-blue)',
              margin: '0 0 16px 0',
              lineHeight: 1.2
            }}>
              Категории дел, по которым мы отменяем решения
            </h2>
          </div>

          <div className="claims-matrix-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px'
          }}>
            {disputeCategories.map((cat, i) => (
              <div
                key={i}
                className="usp-card hover-lift"
                style={{
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  border: '1px solid var(--color-border)',
                  padding: '30px 26px',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)'
                }}
              >
                <div className="usp-accent"></div>
                <div>
                  <h3 style={{
                    fontSize: '17.5px',
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--color-deep-blue)',
                    margin: '0 0 12px 0',
                    lineHeight: 1.35
                  }}>
                    {cat.title}
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                    margin: '0 0 16px 0'
                  }}>
                    {cat.desc}
                  </p>
                </div>
                <Link
                  href={cat.href}
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--color-primary)',
                    textDecoration: 'none'
                  }}
                >
                  Подробнее о направлении →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 8: ДОКУМЕНТЫ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '44px', textAlign: 'left' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
              Документы для жалобы
            </div>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', margin: '0 0 16px 0', lineHeight: 1.2 }}>
              Документы для составления апелляционной или кассационной жалобы
            </h2>
          </div>

          <div className="grid grid-2" style={{ gap: '28px' }}>
            <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', padding: '36px 32px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px' }}>
                Судебные акты
              </div>
              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.75 }}>
                <li>Полный текст обжалуемого решения / постановления суда</li>
                <li>Сведения о дате изготовления мотивированного решения</li>
                <li>Копия искового заявления, отзыва и определений первой инстанции</li>
                <li>Номер дела в Картотеке арбитражных дел</li>
              </ul>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-gold)', padding: '36px 32px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px' }}>
                Материалы судебного процесса
              </div>
              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.75 }}>
                <li>Протоколы судебных заседаний и аудиозаписи процесса</li>
                <li>Письменные ходатайства, отклоненные судом первой инстанции</li>
                <li>Заключения судебных экспертов и рецензии специалистов</li>
                <li>Документы, подтверждающие уважительность пропуска срока</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 9: СПЕЦИАЛИСТЫ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
            border: '1px solid var(--color-border)',
            borderTop: '3px solid var(--color-primary)',
            padding: '40px 48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '32px'
          }}>
            <div style={{ maxWidth: '640px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                Опыт в проверочных инстанциях
              </div>
              <h3 style={{ fontSize: '22px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0' }}>
                Обжалование решений опытными юристами-процессуалистами
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.65, margin: 0 }}>
                Специализируемся на поиске системных правовых ошибок в решениях судов первой инстанции и успешной защите позиции в 19-м ААС и АС Центрального округа.
              </p>
            </div>
            <a href="#form" className="btn btn-primary" style={{ padding: '14px 32px', fontSize: '15px' }}>
              Отправить решение на анализ
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 10: КЕЙСЫ ═══ */}
      <section className="section bg-light" id="cases" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '44px', textAlign: 'left' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
              Практика отмен
            </div>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', margin: '0 0 16px 0', lineHeight: 1.2 }}>
              Примеры отмены решений в апелляции и кассации
            </h2>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {cases.map((c, i) => (
              <div
                key={i}
                className="hover-lift"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <span style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'var(--color-gold)' }}>
                      {c.num}
                    </span>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-primary)', background: 'rgba(193, 160, 102, 0.15)', padding: '4px 8px', borderRadius: '2px', textTransform: 'uppercase' }}>
                      {c.badge}
                    </span>
                  </div>
                  <div style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--color-deep-blue)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '10px' }}>
                    {c.category}
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
                    {c.desc}
                  </p>
                </div>
                <div style={{ borderTop: '1px solid rgba(193, 160, 102, 0.25)', paddingTop: '14px', fontSize: '13px', color: 'var(--color-deep-blue)', fontWeight: 600 }}>
                  {c.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 11: ПРОЦЕСС РАБОТЫ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '44px', textAlign: 'left' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
              Порядок работы
            </div>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 16px 0', lineHeight: 1.2 }}>
              Как мы готовим жалобу в вышестоящий суд
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div style={{ padding: '24px', background: 'var(--color-bg-light)', borderLeft: '3px solid var(--color-primary)' }}>
              <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '6px' }}>
                1. Срочный аудит решения
              </strong>
              <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                Вы присылаете решение суда. Мы анализируем сроки и основания для отмены.
              </span>
            </div>
            <div style={{ padding: '24px', background: 'var(--color-bg-light)', borderLeft: '3px solid var(--color-gold)' }}>
              <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '6px' }}>
                2. Составление текста жалобы
              </strong>
              <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                Формулируем доводы о нарушениях суда, готовим ходатайство о приостановлении исполнения.
              </span>
            </div>
            <div style={{ padding: '24px', background: 'var(--color-bg-light)', borderLeft: '3px solid var(--color-primary)' }}>
              <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '6px' }}>
                3. Представительство в суде
              </strong>
              <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                Подаем жалобу через «Мой Арбитр» и лично участвуем в судебном заседании апелляции или кассации.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 12: ЦЕНЫ ═══ */}
      <section className="section bg-light" id="pricing" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '44px', textAlign: 'left' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
              Стоимость услуг
            </div>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', margin: '0 0 16px 0', lineHeight: 1.2 }}>
              Тарифы на обжалование судебных решений
            </h2>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {pricingTiers.map((tier, i) => (
              <div
                key={i}
                className="hover-lift"
                style={{
                  background: '#FFFFFF',
                  border: tier.highlight ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                  borderTop: '4px solid var(--color-primary)',
                  padding: '36px 30px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: tier.highlight ? '0 8px 30px rgba(23, 50, 77, 0.1)' : '0 4px 20px rgba(23, 50, 77, 0.04)'
                }}
              >
                <div>
                  <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>
                    {tier.name}
                  </h3>
                  <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', marginBottom: '14px' }}>
                    {tier.price}
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, marginBottom: '24px' }}>
                    {tier.desc}
                  </p>
                  <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '20px', marginBottom: '28px' }}>
                    <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                      {tier.features.map((feat, idx) => (
                        <li key={idx}>{feat}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a href="#form" className={tier.highlight ? 'btn btn-primary' : 'btn btn-outline'} style={{ width: '100%', textAlign: 'center', padding: '12px 20px', fontSize: '14.5px' }}>
                  Выбрать тариф
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 13: FAQ ═══ */}
      <section className="section bg-white" id="faq" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '44px', textAlign: 'left' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
              Частые вопросы
            </div>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 16px 0', lineHeight: 1.2 }}>
              Вопросы об обжаловании судебных актов
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '900px' }}>
            {faqItems.map((item, i) => (
              <div
                key={i}
                style={{
                  border: '1px solid var(--color-border)',
                  background: openFaq === i ? 'var(--color-bg-light)' : '#FFFFFF',
                  transition: 'all 0.2s'
                }}
              >
                <button
                  onClick={() => toggleFaq(i)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    gap: '16px'
                  }}
                  aria-expanded={openFaq === i}
                >
                  <span style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)' }}>
                    {item.q}
                  </span>
                  <span style={{ fontSize: '20px', color: 'var(--color-gold)', fontWeight: 700, transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 24px 22px 24px', fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.65, borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 14: ОФИС В ЛИПЕЦКЕ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
                Офис в Липецке
              </div>
              <h2 className="with-accent" style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', margin: '0 0 20px 0', lineHeight: 1.25 }}>
                Обжалование решений в 19-м ААС и АС Центрального округа
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14.5px', color: 'var(--color-deep-blue)', marginBottom: '32px' }}>
                <div><strong>Адрес:</strong> г. Липецк, пл. Победы, д. 8, офис 412</div>
                <div><strong>Режим работы:</strong> Пн–Пт с 09:00 до 18:00 (по предварительной записи)</div>
                <div><strong>Телефон:</strong> +7 (910) 350-31-11</div>
              </div>
              <a href="https://yandex.ru/maps/-/CDuWqM5Z" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-route-map" style={{ width: '100%', textAlign: 'center', padding: '14px 28px', fontSize: '15px' }}>
                Построить маршрут на Яндекс.Картах →
              </a>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-gold)', boxShadow: '0 8px 30px rgba(23, 50, 77, 0.08)', padding: '24px' }}>
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=39.573436%2C52.603884&z=16&pt=39.573436,52.603884,pm2rdm"
                width="100%"
                height="340"
                frameBorder="0"
                allowFullScreen={true}
                style={{ position: 'relative', border: '1px solid var(--color-border)' }}
                title="Офис Де-Юре на карте Липецка"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 15: ФИНАЛЬНАЯ ФОРМА ═══ */}
      <section className="section bg-white" id="form" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
              Обжалование судебного акта
            </div>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 16px 0', lineHeight: 1.2 }}>
              Поручите обжалование решения арбитражному юристу
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
              Прикрепите копию судебного решения или укажите номер дела. Перезвоним в течение 15 минут в рабочее время для срочной оценки шансов на отмену.
            </p>
          </div>

          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <ContactsForm
              title="Заявка на обжалование решения арбитражного суда"
              subtitle="Перезвоним в течение 15 минут в рабочее время для анализа судебного акта."
              hiddenFields={[{ name: 'service', value: 'Обжалование решения арбитражного суда' }]}
              buttonText="Подать жалобу на решение"
            />
          </div>
        </div>
      </section>
    </>
  );
}
