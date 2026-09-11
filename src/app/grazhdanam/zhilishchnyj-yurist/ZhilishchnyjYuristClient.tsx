'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';
import ProcessBlock from '@/components/ProcessBlock';
import CasesBlock from '@/components/CasesBlock';
import PricingBlock from '@/components/PricingBlock';

export default function ZhilishchnyjYuristClient() {
  const [ctaSource, setCtaSource] = useState('housing_hub_form_direct');
  const [ctaText, setCtaText] = useState('Прямой переход к форме');

  const handleCtaClick = (source: string, text: string) => {
    setCtaSource(source);
    setCtaText(text);
  };

  const faqs = [
    {
      q: 'Можно ли выписать человека из квартиры без его согласия?',
      a: 'Если человек не снимается с регистрационного учёта добровольно, вопрос обычно решается через суд. Возможность зависит не только от регистрации, но и от основания вселения, статуса жилья, семейных отношений, проживания, приватизации и других обстоятельств.'
    },
    {
      q: 'Регистрация даёт долю в квартире?',
      a: 'Нет. Регистрация по месту жительства сама по себе не создаёт право собственности. Но у зарегистрированного лица может существовать самостоятельное право пользования, которое нужно оценивать отдельно.'
    },
    {
      q: 'Может ли собственник немедленно выселить бывшего супруга?',
      a: 'Не всегда. Суд оценивает основание пользования, соглашения, обстоятельства прекращения семейных отношений и предусмотренные законом исключения. Самовольное выселение и смена замков могут создать дополнительный спор.'
    },
    {
      q: 'Что делать, если меня не пускают в квартиру?',
      a: 'Соберите документы на право проживания, сохраните переписку и зафиксируйте попытки доступа. Не переходите к силовому вскрытию двери без оценки ситуации: могут потребоваться требования о вселении, устранении препятствий и определении порядка пользования.'
    },
    {
      q: 'Кто отвечает за залив квартиры?',
      a: 'Ответственное лицо определяется по причине протечки и границам ответственности: это может быть сосед, собственник, наниматель, управляющая организация или другая организация. Одного факта расположения квартиры выше недостаточно.'
    },
    {
      q: 'Можно ли начинать ремонт сразу после залива?',
      a: 'Сначала следует обеспечить фиксацию причины и повреждений, составление акта и возможность осмотра другой стороной. Иначе доказать состав и стоимость ущерба может быть сложнее.'
    },
    {
      q: 'Как заставить управляющую компанию сделать перерасчёт?',
      a: 'Нужно проверить основание начисления, показания, периоды, качество услуги и соблюдение порядка обращения. В зависимости от ситуации используются заявление, претензия, жалоба в контролирующий орган или иск.'
    },
    {
      q: 'Можно ли разделить лицевой счёт между собственниками?',
      a: 'Пользовательский термин «раздел лицевого счёта» охватывает разные задачи. На практике может определяться порядок участия в оплате и формироваться отдельный платёжный документ. Старый долг и обязательства не разделяются автоматически.'
    },
    {
      q: 'Помогаете ли вы с муниципальным жильём и социальным наймом?',
      a: 'Да. При анализе учитываются договор социального найма, состав семьи, законность вселения, фактическое проживание, оплата, выезд и наличие другого жилья. Отдельный способ защиты зависит от конкретного спора.'
    },
    {
      q: 'Можно ли приватизировать квартиру при отказе администрации?',
      a: 'Отказ нужно изучить вместе с поданными документами. Иногда причину можно устранить административно, а в других случаях требуется оспаривание отказа или признание права собственности через суд.'
    },
    {
      q: 'Можно ли узаконить уже выполненную перепланировку?',
      a: 'Иногда помещение можно сохранить в изменённом состоянии, если выполненные работы соответствуют требованиям и не нарушают права и безопасность. Нужны технические документы и анализ конкретных изменений; универсальной гарантии нет.'
    },
    {
      q: 'Обязательно ли сначала обращаться с претензией?',
      a: 'Зависит от вида требования, стороны спора и применимого порядка. Даже когда претензия не является формальным условием иска, обращение может помочь зафиксировать нарушение и позицию другой стороны.'
    },
    {
      q: 'Сколько длится жилищный спор?',
      a: 'Срок зависит от досудебного этапа, суда, экспертизы, числа участников, обжалования и исполнения решения. До анализа документов нельзя достоверно обещать конкретный срок.'
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
        telephone: '+7-4742-20-15-25',
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
        '@id': 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/#service',
        name: 'Помощь жилищного юриста в Липецке',
        serviceType: 'Юридическая помощь по жилищным спорам',
        url: 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/',
        provider: {
          '@id': 'https://dejure-help.ru/#legalservice'
        },
        areaServed: ['Липецк', 'Липецкая область']
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://dejure-help.ru/' },
          { '@type': 'ListItem', position: 2, name: 'Гражданам', item: 'https://dejure-help.ru/grazhdanam/' },
          { '@type': 'ListItem', position: 3, name: 'Жилищный юрист', item: 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/' }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/#faq',
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
      tag: 'Выселение и выписка',
      title: 'Нужно выписать или выселить человека из квартиры',
      desc: 'Проверим основание пользования, регистрацию, факт проживания, семейные отношения и основания для обращения в суд.'
    },
    {
      tag: 'Защита от выселения',
      title: 'Вас пытаются выписать или выселить через суд',
      desc: 'Изучим иск и документы, проверим сохранённое право пользования и подготовим обоснованную позицию защиты.'
    },
    {
      tag: 'Вселение и доступ',
      title: <>Не пускают в квартиру <br />или сменили замки</>,
      desc: 'Оценим право на вселение, доказательства препятствий, порядок пользования и подготовим требования в суд.'
    },
    {
      tag: 'Залив квартиры',
      title: <>Квартиру залили соседи <br />или протекла крыша</>,
      desc: 'Поможем зафиксировать причину, определить виновника, организовать независимую оценку ущерба и взыскать выплату.'
    },
    {
      tag: 'Претензия по заливу',
      title: <>С вас требуют компенсацию <br />за залив квартиры</>,
      desc: 'Проверим акт, вину, границы ответственности, калькуляцию сметы и защитим от завышенных требований.'
    },
    {
      tag: 'Споры с УК и ЖКХ',
      title: <>Управляющая компания <br />не исполняет обязанности</>,
      desc: 'Подготовим претензии, жалобы в ГЖИ и иски по незаконным начислениям, содержанию дома и общему имуществу.'
    },
    {
      tag: 'Оплата ЖКУ',
      title: 'Нужно разделить порядок оплаты коммунальных услуг',
      desc: 'Определим доли расходов и поможем оформить отдельные платёжные документы через соглашение или суд.'
    },
    {
      tag: 'Перепланировка',
      title: 'Нужно согласовать или узаконить перепланировку',
      desc: 'Организуем правовой анализ, проектную документацию, согласование с администрацией и судебное сохранение помещения.'
    },
    {
      tag: 'Приватизация жилья',
      title: 'Отказ в приватизации муниципального жилья',
      desc: 'Проверим ордера, архивные справки и признаем право собственности на жильё через суд при отказе администрации.'
    }
  ];

  const directions = [
    {
      title: <><span style={{ display: 'inline-block' }}>Выселение и выписка</span> <br /><span style={{ display: 'inline-block' }}>из квартиры через суд</span></>,
      desc: 'Прекращение права пользования, снятие с регистрационного учёта, освобождение жилого помещения.',
      link: '/grazhdanam/zhilishchnyj-yurist/vyselenie-i-vypiska-iz-kvartiry-cherez-sud/'
    },
    {
      title: <><span style={{ display: 'inline-block' }}>Вселение и устранение</span> <br /><span style={{ display: 'inline-block' }}>препятствий в пользовании</span></>,
      desc: 'Защита права проживать в квартире, получение ключей, определение порядка пользования между совладельцами.',
      link: '/grazhdanam/zhilishchnyj-yurist/vselenie-i-ustranenie-prepyatstvij-v-polzovanii-kvartiroj/'
    },
    {
      title: <><span style={{ display: 'inline-block' }}>Залив</span> <br /><span style={{ display: 'inline-block' }}>квартиры</span></>,
      desc: 'Фиксация повреждений, независимая оценка ущерба, взыскание компенсации с виновника или защита от иска.',
      link: '/grazhdanam/zhilishchnyj-yurist/zaliv-kvartiry/'
    },
    {
      title: <><span style={{ display: 'inline-block' }}>Споры с УК, ТСЖ</span> <br /><span style={{ display: 'inline-block' }}>и организациями ЖКХ</span></>,
      desc: 'Перерасчёт начислений, качество коммунальных услуг, ремонт общего имущества и оспаривание протоколов.',
      link: '/grazhdanam/zhilishchnyj-yurist/spory-s-upravlyayushchej-kompaniej-i-zhkh/'
    },
    {
      title: <><span style={{ display: 'inline-block' }}>Раздел лицевых счетов</span> <br /><span style={{ display: 'inline-block' }}>и порядка оплаты ЖКУ</span></>,
      desc: 'Определение долей участия в оплате коммунальных услуг и получение отдельных платёжных документов.',
      link: '/grazhdanam/zhilishchnyj-yurist/razdel-licevyh-schetov-i-poryadka-oplaty-zhku/'
    },
    {
      title: <><span style={{ display: 'inline-block' }}>Согласование и узаконение</span> <br /><span style={{ display: 'inline-block' }}>перепланировки квартиры</span></>,
      desc: 'Комплексное сопровождение: проект, согласование в администрации или сохранение ремонта через суд.',
      link: '/grazhdanam/zhilishchnyj-yurist/soglasovanie-i-uzakonenie-pereplanirovki/'
    }
  ];

  const legalRegimes = [
    {
      regime: 'Частная собственность',
      check: 'Кто собственник, основания права, кого вселяли, доли, соглашения, несовершеннолетние и лица с правом пожизненного проживания.'
    },
    {
      regime: 'Муниципальное жильё (соцнайм)',
      check: 'Договор соцнайма, ордер, состав семьи нанимателя, периоды проживания и оплаты, причины выезда, наличие другого жилья.'
    },
    {
      regime: 'Служебное жильё и общежития',
      check: 'Основание предоставления, трудовые/служебные отношения, статус фонда, срок пользования и возможность расслужебливания.'
    },
    {
      regime: 'Долевая собственность',
      check: 'Размер долей, фактический порядок пользования, изолированность комнат, ключи, коммунальные расходы и права совладельцев.'
    },
    {
      regime: 'Регистрация без права собственности',
      check: 'Регистрация сама по себе не создаёт собственность; оцениваются основания вселения, фактическое проживание и сохранение права пользования.'
    },
    {
      regime: 'Ипотечное жильё',
      check: 'Обременение банка, статус созаёмщиков, брачный договор, порядок платежей и особенности обращения взыскания.'
    }
  ];

  const urgentActions = [
    {
      situation: 'Залив квартиры',
      dos: 'Снимите фото и видео; вызовите УК или аварийную службу; добейтесь составления подробного акта; сохраните чеки.',
      donts: 'Не начинайте ремонт до независимой фиксации повреждений и не подписывайте пустой акт.'
    },
    {
      situation: 'Не пускают в квартиру',
      dos: 'Сохраните переписку; зафиксируйте факт отказа в доступе; обратитесь к участковому для фиксации препятствий.',
      donts: 'Не вскрывайте двери силой без юридической фиксации обстоятельств во избежание уголовных обвинений.'
    },
    {
      situation: 'Получен иск или судебный приказ',
      dos: 'Зафиксируйте дату получения документа. Если это судебный приказ — проверьте 10-дневный срок для подачи возражений со дня получения его копии. Если это иск — изучите определение суда и установленный судом срок для представления возражений; запросите материалы дела и передайте документы юристу.',
      donts: 'Не игнорируйте судебные заседания и не подписывайте соглашений без консультации с юристом.'
    },
    {
      situation: 'Отказ в перепланировке или приватизации',
      dos: 'Сохраните письменный отказ администрации со всеми приложениями и датой вручения.',
      donts: 'Не подавайте повторно тот же самый пакет документов без устранения правовых оснований отказа.'
    }
  ];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />
      <Header />

      {/* ═══ 1. ПЕРВЫЙ ЭКРАН (MILITARY HERO) ═══ */}
      <div onClickCapture={() => handleCtaClick('housing_hub_hero', 'Разобрать жилищную ситуацию')}>
        <MilitaryHero 
          breadcrumbs={
            <>
              <Link href="/" style={{ color: 'var(--color-primary)' }}>Главная</Link> <span style={{ margin: '0 8px' }}>/</span> 
              <Link href="/grazhdanam/" style={{ color: 'var(--color-primary)' }}>Гражданам</Link> <span style={{ margin: '0 8px' }}>/</span> 
              <span style={{ color: 'var(--color-text-main)' }}>Жилищный юрист</span>
            </>
          }
          superTitle="Жилищное право • жилищные споры • ЖКХ • Липецк"
          title={<>Жилищный юрист <br />в Липецке</>}
          subtitle={
            <span style={{ display: 'inline-block', maxWidth: '580px', textWrap: 'balance' }}>
              Разберём спор о проживании и пользовании жильём, последствия залива, действия управляющей компании, разделение оплаты ЖКУ, приватизацию или перепланировку квартиры.
            </span>
          }
          primaryCtaText="Оценить перспективы дела"
          primaryCtaLink="#form"
          primaryCtaAnalytics="housing_hero_consultation_click"
          primaryCtaSubtext="Перезвоним в течение 15 минут в рабочее время"
          secondaryCtaText="С какими ситуациями помогаем"
          secondaryCtaLink="#situations"
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
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10"/>
              </svg>

              <div className="mockup-container" style={{ zIndex: 1, margin: 0 }}>
                <div style={{ position: 'absolute', width: '220px', height: '220px', background: 'var(--color-primary)', filter: 'blur(90px)', opacity: 0.12, borderRadius: '50%' }}></div>
                
                {/* 4th Sheet */}
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

                {/* 3rd Sheet: ЕГРН Квартира */}
                <div className="doc-wrapper-float-3">
                  <div className="doc-sheet doc-sheet-3">
                    <div style={{ padding: '35px 25px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <div style={{ position: 'absolute', top: '25px', left: '25px', width: '80px', height: '25px', border: '1.5px solid rgba(23, 50, 77, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-5deg)' }}>
                        <span style={{ fontSize: '4.5px', fontWeight: 'bold', color: 'rgba(23,50,77,0.5)', fontFamily: 'var(--font-serif)' }}>ЕГРН: ЖИЛОЕ ПОМЕЩЕНИЕ</span>
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

                {/* 2nd Sheet: Решение суда */}
                <div className="doc-wrapper-float-2">
                  <div className="doc-sheet doc-sheet-2">
                    <div style={{ padding: '28px 22px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <div style={{ position: 'absolute', top: '22px', left: '22px', width: '105px', height: '32px', border: '1px solid #C1A066', color: '#C1A066', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-4deg)', opacity: 0.95 }}>
                        <div style={{ fontFamily: 'var(--font-serif)', fontSize: '5px', textAlign: 'center', fontWeight: 'bold', lineHeight: 1.2 }}>
                          РЕШЕНИЕ СУДА<br/>
                          ПО ЖИЛИЩНОМУ СПОРУ
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
                          <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Собственник помещения:</div>
                          <div style={{ width: '70px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '8px' }}></div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                          <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Представитель:</div>
                          <div style={{ width: '70px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '8px' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 1st Sheet: План квартиры и печать Де-Юре */}
                <div className="doc-wrapper-float-1">
                  <div className="doc-sheet doc-sheet-1">
                    <div style={{ padding: '26px 22px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(23,50,77,0.2)', paddingBottom: '10px', marginBottom: '14px' }}>
                        <img src="/images/logo_dark.png" alt="Де-Юре" style={{ width: '55px', height: 'auto', opacity: 0.9 }} />
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', alignItems: 'flex-end' }}>
                          <span style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)', letterSpacing: '0.05em' }}>ЖИЛИЩНОЕ ПРАВО</span>
                          <span style={{ fontSize: '5px', color: 'var(--color-primary)' }}>Технический план • Защита прав</span>
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
                          <rect x="20" y="10" width="160" height="80" fill="rgba(193, 160, 102, 0.08)" stroke="#10273B" strokeWidth="1.5" />
                          <line x1="105" y1="10" x2="105" y2="90" stroke="#10273B" strokeWidth="1.2" />
                          <line x1="20" y1="55" x2="105" y2="55" stroke="#10273B" strokeWidth="1.2" />
                          <line x1="65" y1="55" x2="65" y2="90" stroke="#10273B" strokeWidth="1.2" />
                          
                          <path d="M50 55 A 15 15 0 0 1 65 40" stroke="#C1A066" strokeWidth="1" strokeDasharray="2 2" />
                          <path d="M105 45 A 15 15 0 0 0 120 60" stroke="#C1A066" strokeWidth="1" strokeDasharray="2 2" />
                          
                          <text x="32" y="36" fill="#10273B" fontSize="6.5" fontWeight="bold">Комната 1 (18.4 м²)</text>
                          <text x="116" y="46" fill="#10273B" fontSize="6.5" fontWeight="bold">Гостиная (24.2 м²)</text>
                          <text x="26" y="76" fill="#10273B" fontSize="5.5" fontWeight="bold">Кухня 9.8 м²</text>
                          <text x="72" y="76" fill="#10273B" fontSize="5.5" fontWeight="bold">С/У 4.5 м²</text>
                          
                          <text x="45" y="96" fill="#C1A066" fontSize="6.5" fontWeight="bold">ПЛАН КВАРТИРЫ • S = 62.5 м²</text>
                        </svg>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '10px' }}>
                        <div style={{ display: 'flex', gap: '6px' }}>
                          <div style={{ width: '8px', height: '3px', background: 'var(--color-primary)' }}></div>
                          <div style={{ width: '80%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                        </div>
                        <div style={{ width: '95%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>

                      <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '8px', borderTop: '1px solid rgba(23,50,77,0.15)' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                          <div style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)' }}>ЮК «ДЕ-ЮРЕ»</div>
                          <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Жилищная защита • Липецк</div>
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
          trustItems={[
            { text: 'Изучим правовой статус жилья и документы' },
            { text: 'Оценим риски и подберём надёжный способ защиты' },
            { text: 'Сопроводим от претензии до суда и исполнения' }
          ]}
        />
      </div>

      {/* ═══ 2. БЛОК СИТУАЦИЙ (НАВИГАТОР) ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '700px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              С какими жилищными <br />вопросами обращаются
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Помогаем разобраться в спорах между собственниками, жильцами, соседями, управляющими компаниями и администрацией.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {situations.map((sit, i) => (
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
                  fontSize: '13px', 
                  fontWeight: 600, 
                  color: 'var(--color-gold)', 
                  marginBottom: '14px',
                  background: 'rgba(193, 160, 102, 0.1)',
                  padding: '4px 12px',
                  alignSelf: 'flex-start',
                  borderRadius: '2px'
                }}>
                  {sit.tag}
                </div>

                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', fontWeight: 600, color: 'var(--color-deep-blue)', lineHeight: 1.4, margin: '0 0 14px 0', whiteSpace: 'pre-line' }}>
                  {sit.title}
                </h3>

                <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0, position: 'relative', zIndex: 1 }}>
                  {sit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3. НАПРАВЛЕНИЯ ПОМОЩИ (6 КАРТОЧЕК + КАРТОЧКА «НЕ НАШЛИ СИТУАЦИЮ?») ═══ */}
      <section id="directions" className="section" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '700px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Направления юридической помощи
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Выберите специализированное направление. Если ситуация нестандартная или охватывает несколько вопросов — опишите детали в форме.
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

            {/* Карточка 7: «Не нашли свою ситуацию?», растянутая на 3 колонки или акцентная */}
            <div 
              className="card service-card service-card-span-3" 
              style={{ 
                gridColumn: '1 / -1',
                padding: '32px 36px', 
                background: 'var(--color-deep-blue)', 
                border: '1px solid transparent',
                borderRadius: '0',
                display: 'flex', 
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '28px',
                transition: 'all 0.3s',
                position: 'relative',
                borderTop: '3px solid var(--color-gold)',
                boxShadow: '0 8px 16px rgba(16, 39, 59, 0.28)'
              }}
            >
              <div style={{ flex: '1 1 500px' }}>
                <h3 style={{ margin: '0 0 10px 0', fontSize: '24px', fontFamily: 'var(--font-serif)', color: 'var(--color-white)', lineHeight: 1.3 }}>
                  Служебное жильё, приватизация или другой жилищный спор?
                </h3>
                <p style={{ margin: '0', fontSize: '16px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.55 }}>
                  Опишите ваш жилищный вопрос в форме. Изучим имеющиеся документы и предложим законные варианты решения.
                </p>
              </div>
              <div style={{ flexShrink: 0 }}>
                <a 
                  href="#form" 
                  className="btn white-btn-custom" 
                  style={{ display: 'inline-block', textAlign: 'center', fontSize: '15px' }}
                  onClick={() => handleCtaClick('housing_hub_services_other', 'Обсудить нестандартный вопрос')}
                >
                  Обсудить ситуацию
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 4. ПРАВОВЫЕ РЕЖИМЫ ЖИЛЬЯ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Правовой режим жилья <br />определяет способ защиты
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Один и тот же спор (выселение, раздел счетов, вселение) решается принципиально по-разному в зависимости от формы собственности и статуса помещения.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '28px', marginBottom: '32px' }}>
            {/* Карточка 1: Частная и долевая собственность */}
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
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0 }}>
                  Частная и долевая собственность
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Правовые режимы, основанные на единоличном праве собственности, наличии выделенных долей либо ипотечных обязательствах.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Частная собственность</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Кто собственник, основания права, кого вселяли, доли, соглашения, несовершеннолетние и лица с правом пожизненного проживания.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Долевая собственность</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Размер долей, фактический порядок пользования, изолированность комнат, ключи, коммунальные расходы и права совладельцев.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Ипотечное жильё</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Обременение банка, статус созаёмщиков, брачный договор, порядок платежей и особенности обращения взыскания.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Карточка 2: Государственный фонд и право пользования */}
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
                  <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0 }}>
                  Государственный фонд и право пользования
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Отношения социального найма, ведомственного жилья, общежитий и регистрации без оформления права собственности.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Муниципальное жильё (соцнайм)</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Договор соцнайма, ордер, состав семьи нанимателя, периоды проживания и оплаты, причины выезда, наличие другого жилья.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Служебное жильё и общежития</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Основание предоставления, трудовые/служебные отношения, статус фонда, срок пользования и возможность расслужебливания.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Регистрация без права собственности</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Регистрация сама по себе не создаёт собственность; оцениваются основания вселения, фактическое проживание и сохранение права пользования.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div style={{
            background: 'rgba(23, 50, 77, 0.03)',
            borderLeft: '3px solid var(--color-gold)',
            padding: '20px 24px',
            borderRadius: '2px'
          }}>
            <p style={{ fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>
              Одинаковая бытовая ситуация может требовать разных исковых требований и доказательств. Поэтому до обещания результата юрист проверяет не только регистрацию, но и право собственности, основание вселения, фактическое проживание и документы на помещение.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ 5. СРОЧНЫЕ ДЕЙСТВИЯ ПРИ ОСТРОМ СПОРЕ ═══ */}
      <section className="section bg-light" style={{ padding: '72px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, #10273B 0%, #17375E 50%, #0D1E2D 100%)',
            border: '1px solid rgba(193, 160, 102, 0.4)',
            borderTop: '3px solid var(--color-gold)',
            boxShadow: '0 8px 30px rgba(16, 39, 59, 0.18)',
            padding: '36px 32px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Фоновый водяной знак */}
            <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', opacity: 0.05, pointerEvents: 'none' }}>
              <svg width="140" height="140" viewBox="0 0 24 24" fill="#FFFFFF">
                <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '28px', position: 'relative', zIndex: 1 }}>
              <div>
                <h3 style={{ fontSize: 'clamp(22px, 2.5vw, 28px)', fontFamily: 'var(--font-serif)', color: '#FFFFFF', margin: 0, lineHeight: 1.25 }}>
                  Что делать при остром жилищном конфликте
                </h3>
              </div>
              <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)', maxWidth: '520px', lineHeight: 1.55 }}>
                <span style={{ display: 'block' }}>Первые действия часто предопределяют исход судебного процесса.</span>
                <span style={{ display: 'block' }}>Важно не совершить ошибок, которые невозможно исправить позже.</span>
              </div>
            </div>

            <div className="grid grid-2" style={{ gap: '20px', position: 'relative', zIndex: 1 }}>
              {urgentActions.map((act, idx) => (
                <div key={idx} style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  padding: '24px 22px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px'
                }}>
                  <h4 style={{ fontSize: '17px', color: '#FFFFFF', margin: 0, fontWeight: 600, lineHeight: 1.35, display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                    <span style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', flexShrink: 0 }}>
                      0{idx + 1}
                    </span>
                    <span>{act.situation}</span>
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.92)', lineHeight: 1.5, display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <span style={{ display: 'inline-block', width: '10px', height: '2px', backgroundColor: 'var(--color-gold)', flexShrink: 0, marginTop: '8px', borderRadius: '1px' }} />
                      <div><strong style={{ color: '#FFFFFF' }}>Что сделать:</strong> {act.dos}</div>
                    </div>
                    <div style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.78)', lineHeight: 1.5, display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <span style={{ display: 'inline-block', width: '10px', height: '2px', backgroundColor: 'var(--color-gold)', flexShrink: 0, marginTop: '8px', borderRadius: '1px' }} />
                      <div><strong style={{ color: '#FFFFFF' }}>Чего избегать:</strong> {act.donts}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 6. ПРИМЕРЫ ИЗ ПРАКТИКИ (CASES BLOCK) ═══ */}
      <CasesBlock 
        title="Примеры из практики"
        showDemoWarning={false}
        resultLabel="Ключевой результат"
        cases={[
          {
            category: "ВЫСЕЛЕНИЕ И ВЫПИСКА",
            title: "Признали бывшего супруга утратившим право пользования квартирой",
            problem: "После развода бывший супруг выехал из квартиры собственницы, забрал вещи и более четырёх лет жил по другому адресу, но добровольно сниматься с регистрационного учёта отказался. Регистрация мешала распорядиться квартирой.",
            action: "Проверили документы о приобретении квартиры, отсутствие соглашения о пользовании и участия в приватизации. Собрали доказательства добровольного выезда и отсутствия расходов по жилью, подготовили иск и представили клиента в суде.",
            result: "Суд признал бывшего супруга утратившим право пользования. Регистрационный учёт был прекращён, собственница распорядилась квартирой без препятствий.",
            isDemo: false
          },
          {
            category: "ЗАЛИВ И СПОР С УК",
            title: "Взыскали 327 800 ₽ ущерба после протечки кровли с управляющей компании",
            problem: "После сильного дождя вода проникла в квартиру верхнего этажа через кровлю. В акте УК не указала причину и отказалась компенсировать ущерб, сославшись на аномальные погодные условия.",
            action: "Добились повторного обследования с фиксацией протечки кровли, организовали независимую оценку ущерба и направили претензию. В суде доказали причинно-следственную связь с ненадлежащим содержанием общего имущества дома.",
            result: "Суд взыскал с УК 327 800 ₽: стоимость восстановительного ремонта, расходы на оценку и юридическую помощь, компенсацию морального вреда и штраф 50%.",
            isDemo: false
          },
          {
            category: "ПРИВАТИЗАЦИЯ",
            title: "Признали право собственности в порядке приватизации через суд",
            problem: "Семья получила отказ в приватизации: в архивном ордере 1980-х годов и современной выписке ЕГРН различалось обозначение корпуса дома. Администрация отказала в передаче квартиры в собственность.",
            action: "Восстановили архивную цепочку актов переадресации, подтвердили законность вселения и факт неиспользованного права на приватизацию. Заявили иск к муниципалитету о признании права собственности.",
            result: "Суд признал за доверителями право собственности на квартиру. На основании решения право зарегистрировано в ЕГРН.",
            isDemo: false
          }
        ]}
      />

      {/* ═══ 7. КАК ПРОХОДИТ РАБОТА (PROCESS BLOCK) ═══ */}
      <ProcessBlock 
        title="Как проходит работа"
        subtitle="Пять последовательных шагов для разрешения жилищного вопроса."
        steps={[
          { num: '01', title: 'Первичный разбор', desc: 'Уточняем основания прав на жильё, статус участников, стадию спора и срочные риски.' },
          { num: '02', title: 'Правовой анализ', desc: 'Проверяем сведения ЕГРН, ордера, лицевые счета, акты, переписку и вырабатываем план действий.' },
          { num: '03', title: 'Досудебное урегулирование', desc: 'Направляем юридически обоснованные претензии, заявления в УК, администрацию или проект соглашения совладельцам.' },
          { num: '04', title: 'Судебная защита', desc: 'Формулируем исковые требования, собираем доказательную базу и представляем интересы во всех заседаниях.' },
          { num: '05', title: 'Оформление результата', desc: 'Сопровождаем снятие с регистрационного учёта, регистрацию права в ЕГРН или получение компенсации.' }
        ]}
      />

      {/* ═══ 8. СТОИМОСТЬ ЮРИДИЧЕСКИХ УСЛУГ (PRICING BLOCK) ═══ */}
      <div onClickCapture={(e) => {
        const target = e.target as HTMLElement;
        const btn = target.closest('a, button');
        if (btn) {
          const text = btn.textContent?.trim() || '';
          if (text.includes('Получить расчёт стоимости')) {
            handleCtaClick('housing_hub_price_total', 'Получить расчёт стоимости');
          } else if (text.includes('Записаться на консультацию')) {
            handleCtaClick('housing_hub_price_consultation', 'Записаться на консультацию');
          } else if (text.includes('Рассчитать стоимость')) {
            handleCtaClick('housing_hub_price_documents', 'Рассчитать стоимость');
          } else if (text.includes('Обсудить ситуацию')) {
            handleCtaClick('housing_hub_price_support', 'Обсудить ситуацию');
          } else if (text.includes('Оценить перспективы дела')) {
            handleCtaClick('housing_hub_price_court', 'Оценить перспективы дела');
          }
        }
      }}>
        <PricingBlock 
          title="Стоимость услуг жилищного юриста"
          subtitle="Точная стоимость зависит от правового режима жилья, состава документов, числа участников и стадии спора. Фиксируем стоимость в договоре до начала работы."
          tiers={[
            {
              title: <>Консультация жилищного юриста</>,
              subtitle: 'Первичный разбор',
              popular: false,
              price: 'от ХХХ ₽',
              features: [
                { name: 'Разбор правового статуса жилья', value: '✓' },
                { name: 'Анализ имеющихся документов', value: '✓' },
                { name: 'Определение судебных перспектив', value: '✓' }
              ],
              buttonText: 'Записаться на консультацию',
              buttonHref: '#form'
            },
            {
              title: <>Подготовка документов</>,
              subtitle: 'Претензии и иски',
              popular: true,
              badgeText: 'ВОСТРЕБОВАНО',
              price: 'от ХХХ ₽',
              features: [
                { name: 'Составление претензий и жалоб в ГЖИ', value: '✓' },
                { name: 'Исковые заявления о выселении/вселении', value: '✓' },
                { name: 'Формирование доказательной базы', value: '✓' }
              ],
              buttonText: 'Рассчитать стоимость',
              buttonHref: '#form'
            },
            {
              title: <>Досудебное сопровождение</>,
              subtitle: 'Переговоры и соглашения',
              popular: false,
              price: 'от ХХХ ₽',
              features: [
                { name: 'Соглашение о порядке оплаты ЖКУ', value: '✓' },
                { name: 'Взаимодействие с УК, ТСЖ и РСО', value: '✓' },
                { name: 'Сопровождение согласований', value: '✓' }
              ],
              buttonText: 'Обсудить ситуацию',
              buttonHref: '#form'
            },
            {
              title: <>Представительство в суде</>,
              subtitle: 'Жилищный спор под ключ',
              popular: false,
              price: 'от ХХХ ₽',
              features: [
                { name: 'Разработка правовой позиции', value: '✓' },
                { name: 'Участие во всех судебных заседаниях', value: '✓' },
                { name: 'Контроль исполнения решения суда', value: '✓' }
              ],
              buttonText: 'Оценить перспективы дела',
              buttonHref: '#form'
            }
          ]}
          ctaTitle="Точную стоимость определим до начала работы"
          ctaSubtitle="Изучим обстоятельства и документы, предложим подходящий формат помощи и согласуем фиксированную стоимость без скрытых платежей."
          ctaButtonText="Получить расчёт стоимости"
          ctaButtonLink="#form"
          disclaimer=""
        />
      </div>

      {/* ═══ 9. ОТВЕТЫ НА ЧАСТЫЕ ВОПРОСЫ (FAQ BLOCK) ═══ */}
      <div onClickCapture={() => handleCtaClick('housing_hub_faq', 'Задать свой вопрос')}>
        <FAQBlock 
          faqs={faqs} 
          title={<>Ответы на частые вопросы <br />по жилищным спорам</>}
          subtitle="Собрали ответы на частые вопросы по выселению, выписке, вселению, спорам с УК, разделу счетов ЖКУ, приватизации и перепланировке."
          ctaText="Задать свой вопрос"
          ctaLink="#form"
        />
      </div>

      {/* ═══ 10. ФИНАЛЬНАЯ ФОРМА ═══ */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start', paddingTop: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>Связаться с нами</span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                Получите первичную оценку жилищной ситуации
              </h2>
              
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Опишите ситуацию и оставьте контакты. Обращение передадим юристу по жилищному праву в Липецке. Он изучит обстоятельства и свяжется с вами для разбора дела.
              </p>

              <div style={{ 
                padding: '20px', 
                background: 'var(--gradient-cream)', 
                borderLeft: '3px solid var(--color-gold)', 
                marginBottom: '28px',
                fontSize: '14px',
                color: 'var(--color-deep-blue)',
                lineHeight: 1.5
              }}>
                <strong>Офис в Липецке:</strong> ул. Советская, д. 35, офис 213.<br/>
                Приём ведётся по предварительной записи.
              </div>
              
              <div>
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
                  commentPlaceholder="Кратко опишите жилищный вопрос или проблему…"
                  subtext="Если вы оставите заявку вечером или в выходной день, мы перезвоним в ближайший рабочий день."
                  hiddenFields={[
                    { name: 'pageId', value: 'CIV-HOUSING' },
                    { name: 'pageTitle', value: 'Жилищный юрист в Липецке' },
                    { name: 'practice', value: 'Жилищное право' },
                    { name: 'ctaSource', value: ctaSource },
                    { name: 'cta_source', value: ctaSource },
                    { name: 'cta_text', value: ctaText }
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
