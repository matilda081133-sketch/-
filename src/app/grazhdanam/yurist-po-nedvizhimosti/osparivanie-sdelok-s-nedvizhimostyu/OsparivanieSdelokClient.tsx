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
import PricingBlock from '@/components/PricingBlock';

export default function OsparivanieSdelokClient() {
  const faqs = [
    {
      q: 'По каким основаниям чаще всего оспаривают сделки с недвижимостью?',
      a: 'Основные основания: совершение сделки гражданином, не способным понимать значение своих действий (ст. 177 ГК РФ); обман, существенное заблуждение или насилие (ст. 178, 179 ГК РФ); мнимые и притворные сделки (ст. 170 ГК РФ); отсутствие согласия супруга на отчуждение совместного имущества (ст. 35 СК РФ); нарушение прав несовершеннолетних, а также оспаривание сделок должника в процедуре банкротства (ст. 61.2 Закона о банкротстве).'
    },
    {
      q: 'Кто такой добросовестный приобретатель и как его защищает закон?',
      a: 'Добросовестный приобретатель — покупатель, который возмездно приобрёл имущество и при этом не знал и не должен был знать, что продавец не имел права его отчуждать. По ст. 302 ГК РФ имущество не может быть истребовано у добросовестного приобретателя, если оно выбыло из владения собственника по его воле.'
    },
    {
      q: 'Какой срок исковой давности установлен для оспаривания сделок?',
      a: 'Срок исковой давности по оспоримым сделкам составляет 1 год со дня, когда истец узнал об обстоятельствах, являющихся основанием для признания сделки недействительной. По ничтожным сделкам срок составляет 3 года со дня начала исполнения сделки.'
    },
    {
      q: 'Как предотвратить перепродажу квартиры во время судебного спора?',
      a: 'Одновременно с подачей иска необходимо заявить мотивированное ходатайство о применении обеспечительных мер (ст. 139–140 ГПК РФ): наложить судебный арест на объект недвижимости и запретить Управлению Росреестра совершать любые регистрационные действия в отношении спорного объекта.'
    },
    {
      q: 'Что происходит при признании сделки недействительной (реституция)?',
      a: 'По общему правилу п. 2 ст. 167 ГК РФ наступает двусторонняя реституция: каждая из сторон обязана возвратить другой всё полученное по сделке. Покупатель возвращает недвижимость, а продавец обязан вернуть полученные деньги.'
    },
    {
      q: 'Можно ли оспорить договор дарения квартиры?',
      a: 'Да. Договор дарения может быть признан недействительным, если даритель был введён в заблуждение (например, полагал, что подписывает договор пожизненного содержания с иждивением или завещание), не понимал последствий из-за болезни или возраста, либо дарение совершено под давлением.'
    }
  ];

  const cases = [
    {
      category: 'ЗАЩИТА ПОКУПАТЕЛЯ',
      title: 'Защита добросовестного покупателя квартиры от иска родственников продавца',
      problem: 'Спустя 8 месяцев после покупки квартиры родственники продавца подали иск о признании договора купли-продажи недействительным по ст. 177 ГК РФ, утверждая, что продавец страдал психическим расстройством.',
      action: 'Собрали доказательства добросовестности: видеозапись расчётов в банке, переписку с продавцом, справки из психоневрологического диспансера на дату сделки, заявили ходатайство о комплексной посмертной судебной экспертизе.',
      result: 'Суд отказал в признании сделки недействительной и сохранил квартиру за покупателем, признав его добросовестным приобретателем по ст. 302 ГК РФ.',
      isDemo: false
    },
    {
      category: 'ВОЗВРАТ ИМУЩЕСТВА',
      title: 'Признание недействительным договора дарения квартиры пожилым человеком',
      problem: 'Одинокая 82-летняя пенсионерка под влиянием обмана подписала договор дарения единственной квартиры постороннему лицу, полагая, что подписывает договор ренты с условием пожизненного ухода.',
      action: 'Наложили срочный судебный арест на квартиру, запросили медицинские карты пенсионерки, провели судебно-психиатрическую экспертизу о степени внушаемости и доказали факт существенного заблуждения (ст. 178 ГК РФ).',
      result: 'Суд признал договор дарения недействительным, вернул квартиру в собственность пенсионерки и восстановил её регистрационный учёт в жилье.',
      isDemo: false
    },
    {
      category: 'БАНКРОТСТВО ПРОДАВЦА',
      title: 'Защита сделки от финансового управляющего при банкротстве продавца',
      problem: 'Финансовый управляющий обанкротившегося гражданина оспорил сделку продажи загородного дома по ст. 61.2 Закона о банкротстве, требуя вернуть дом в конкурсную массу.',
      action: 'Доказали полную возмездность сделки, рыночный характер цены на основании ретроспективной оценки, отсутствие признаков аффилированности сторон и подтвердили реальность передачи денежных средств.',
      result: 'Арбитражный суд отказал финансовому управляющему в признании сделки недействительной, право собственности доверителя осталось полностью защищённым.',
      isDemo: false
    }
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Аудит сделки и оснований',
      desc: 'Анализируем договор, расчёты, дееспособность сторон, банкротные риски и процессуальные сроки.'
    },
    {
      num: '02',
      title: 'Срочный арест объекта',
      desc: 'Подаём заявление об обеспечительных мерах для запрета Росреестру регистрировать перепродажу квартиры.'
    },
    {
      num: '03',
      title: 'Сбор доказательств',
      desc: 'Запрашиваем медицинскую документацию, банковские выписки, проводим досудебную оценку стоимости.'
    },
    {
      num: '04',
      title: 'Судебный процесс',
      desc: 'Представляем интересы в суде, допрашиваем свидетелей и защищаем позицию при судебной экспертизе.'
    },
    {
      num: '05',
      title: 'Реституция и Росреестр',
      desc: 'Исполняем решение суда: возвращаем недвижимость в собственность либо добиваемся выплаты денег.'
    }
  ];

  const pricingTiers = [
    {
      title: <>Правовой анализ сделки</>,
      subtitle: 'Оценка шансов на победу',
      popular: false,
      price: 'от 12 000 ₽',
      features: [
        { name: 'Анализ оспоримости договора по ГК РФ', value: '✓' },
        { name: 'Проверка сроков исковой давности', value: '✓' },
        { name: 'Оценка статуса добросовестного приобретателя', value: '✓' },
        { name: 'Письменная стратегия ведения дела', value: '✓' }
      ],
      buttonText: 'Заказать анализ',
      buttonHref: '#form'
    },
    {
      title: <>Судебное признание недействительности</>,
      subtitle: 'Оспаривание сделки под ключ',
      popular: true,
      badgeText: 'ВОСТРЕБОВАНО',
      price: 'от 45 000 ₽',
      features: [
        { name: 'Накладывание срочного ареста на объект', value: '✓' },
        { name: 'Подготовка иска и сбор доказательств', value: '✓' },
        { name: 'Назначение судебной психиатрической экспертизы', value: '✓' },
        { name: 'Участие во всех судебных заседаниях', value: '✓' },
        { name: 'Возврат объекта и внесение изменений в ЕГРН', value: '✓' }
      ],
      buttonText: 'Оспорить сделку',
      buttonHref: '#form'
    },
    {
      title: <>Защита добросовестного покупателя</>,
      subtitle: 'Сохранение купленного жилья',
      popular: false,
      price: 'от 45 000 ₽',
      features: [
        { name: 'Формирование статуса добросовестного приобретателя', value: '✓' },
        { name: 'Защита от претензий родственников и опеки', value: '✓' },
        { name: 'Отражение исков управляющих при банкротстве', value: '✓' },
        { name: 'Сохранение права собственности за покупателем', value: '✓' },
        { name: 'Взыскание судебных расходов с оппонента', value: '✓' }
      ],
      buttonText: 'Защитить жильё',
      buttonHref: '#form'
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
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/osparivanie-sdelok-s-nedvizhimostyu/#service',
        name: 'Оспаривание сделок с недвижимостью в Липецке',
        serviceType: 'Оспаривание сделок и признание договоров недействительными',
        provider: {
          '@id': 'https://dejure-help.ru/#legalservice'
        },
        areaServed: ['Липецк', 'Липецкая область'],
        url: 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/osparivanie-sdelok-s-nedvizhimostyu/',
        description: 'Оспаривание сделок с недвижимостью в Липецке: признание договоров купли-продажи и дарения недействительными, защита добросовестных покупателей, арест объектов.'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/osparivanie-sdelok-s-nedvizhimostyu/#breadcrumbs',
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
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Оспаривание сделок с недвижимостью',
            item: 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/osparivanie-sdelok-s-nedvizhimostyu/'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/osparivanie-sdelok-s-nedvizhimostyu/#faq',
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
            <Link href="/grazhdanam/yurist-po-nedvizhimosti/" style={{ color: 'var(--color-primary)' }}>Юрист по недвижимости</Link> <span style={{ margin: '0 8px' }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Оспаривание сделок</span>
          </>
        }
        superTitle="Недействительность сделок • ст. 166–179 ГК РФ • Липецк"
        title={<>Оспаривание сделок <br />с недвижимостью в Липецке</>}
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '560px', textWrap: 'balance' }}>
            Признаем договор купли-продажи, дарения или залога недействительным и вернём квартиру в собственность, либо защитим право добросовестного покупателя от изъятия.
          </span>
        }
        primaryCtaText="Оспорить или защитить сделку"
        primaryCtaLink="#form"
        primaryCtaAnalytics="dispute_deal_hero_click"
        primaryCtaSubtext="Перезвоним в течение 15 минут в рабочее время"
        secondaryCtaText="Основания спора"
        secondaryCtaLink="#grounds"
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

              <div className="doc-wrapper-float-3">
                <div className="doc-sheet doc-sheet-3">
                  <div style={{ padding: '35px 25px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ position: 'absolute', top: '25px', left: '25px', width: '75px', height: '25px', border: '1.5px solid rgba(23, 50, 77, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-5deg)' }}>
                      <span style={{ fontSize: '4.5px', fontWeight: 'bold', color: 'rgba(23,50,77,0.4)', fontFamily: 'var(--font-serif)' }}>СТ. 166-179 ГК</span>
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
                    </div>
                  </div>
                </div>
              </div>

              <div className="doc-wrapper-float-2">
                <div className="doc-sheet doc-sheet-2">
                  <div style={{ padding: '28px 22px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ position: 'absolute', top: '22px', left: '22px', width: '110px', height: '30px', border: '1px solid #C1A066', color: '#C1A066', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-4deg)', opacity: 0.95 }}>
                      <div style={{ fontFamily: 'var(--font-serif)', fontSize: '5px', textAlign: 'center', fontWeight: 'bold', lineHeight: 1.2 }}>
                        ОПРЕДЕЛЕНИЕ СУДА<br/>
                        О НАЛОЖЕНИИ АРЕСТА
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
                        <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Истец:</div>
                        <div style={{ width: '70px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '8px' }}></div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                        <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Ответчик:</div>
                        <div style={{ width: '70px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '8px' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="doc-wrapper-float-1">
                <div className="doc-sheet doc-sheet-1">
                  <div style={{ padding: '26px 22px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(23,50,77,0.2)', paddingBottom: '10px', marginBottom: '14px' }}>
                      <img src="/images/logo_dark.png" alt="Де-Юре" style={{ width: '55px', height: 'auto', opacity: 0.9 }} />
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', alignItems: 'flex-end' }}>
                        <span style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)', letterSpacing: '0.05em' }}>РЕСТИТУЦИЯ</span>
                        <span style={{ fontSize: '5px', color: 'var(--color-primary)' }}>Возврат прав на объект</span>
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
                        <line x1="0" y1="50" x2="200" y2="50" stroke="rgba(23,50,77,0.06)" strokeDasharray="2 2" />
                        <rect x="25" y="15" width="150" height="70" fill="rgba(193, 160, 102, 0.1)" stroke="#C1A066" strokeWidth="1.5" />
                        <line x1="100" y1="15" x2="100" y2="85" stroke="#C1A066" strokeWidth="1" strokeDasharray="3 3" />
                        <text x="35" y="38" fill="#10273B" fontSize="6.5" fontWeight="bold">Договор купли</text>
                        <text x="110" y="38" fill="#C53030" fontSize="6.5" fontWeight="bold">Спор о праве</text>
                        <text x="35" y="65" fill="#1B8738" fontSize="6" fontWeight="bold">Арест наложен</text>
                        <text x="105" y="65" fill="#10273B" fontSize="6" fontWeight="bold">Ст. 302 ГК РФ</text>
                      </svg>
                    </div>

                    <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '8px', borderTop: '1px solid rgba(23,50,77,0.15)' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <div style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)' }}>ЮК «ДЕ-ЮРЕ»</div>
                        <div style={{ fontSize: '9.5px', color: 'rgba(23,50,77,0.75)', fontFamily: 'var(--font-sans)' }}>Защита сделок • Липецк</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
        trustItems={[
          { text: 'Срочное наложение обеспечительных мер (судебного ареста).' },
          { text: 'Назначение судебной психолого-психиатрической экспертизы.' },
          { text: 'Защита добросовестных приобретателей от изъятия жилья.' }
        ]}
      />

      {/* ═══ 2. ОСНОВАНИЯ ОСПАРИВАНИЯ ═══ */}
      <section className="section bg-white" id="grounds" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Основания для признания сделки недействительной
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Каждая правовая ситуация требует отдельного состава доказывания по Гражданскому и Семейному кодексам РФ.
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '24px', marginBottom: '40px' }}>
            {[
              {
                tag: 'НЕДЕЕСПОСОБНОСТЬ',
                title: 'Порок воли продавца',
                desc: 'Совершение сделки гражданином, не способным понимать значение действий или руководить ими из-за болезни или возраста (ст. 177 ГК).'
              },
              {
                tag: 'ОБМАН И ДАВЛЕНИЕ',
                title: 'Заблуждение и обман',
                desc: 'Подписание договора дарения вместо пожизненного содержания, обман со стороны третьих лиц, кабальные условия сделки (ст. 178, 179 ГК).'
              },
              {
                tag: 'БРАК И ДЕТИ',
                title: 'Права супругов и детей',
                desc: 'Отчуждение совместной недвижимости без нотариального согласия супруга (ст. 35 СК РФ) или без согласования с органами опеки.'
              },
              {
                tag: 'БАНКРОТСТВО',
                title: 'Оспаривание при банкротстве',
                desc: 'Продажа объекта по заниженной цене в пределах 3 лет до возбуждения банкротства продавца (ст. 61.2 Закона о банкротстве).'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="hover-lift"
                style={{
                  padding: '28px 24px',
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', opacity: 0.06, pointerEvents: 'none' }}>
                  <svg width="90" height="90" viewBox="0 0 24 24" fill="var(--color-deep-blue)">
                    <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <div style={{ 
                  fontSize: '11px', 
                  fontWeight: 600, 
                  color: 'var(--color-gold)', 
                  marginBottom: '12px',
                  background: 'rgba(193, 160, 102, 0.1)',
                  padding: '3px 8px',
                  alignSelf: 'flex-start',
                  borderRadius: '2px'
                }}>
                  {item.tag}
                </div>
                <h3 style={{ fontSize: '17px', fontFamily: 'var(--font-serif)', fontWeight: 600, color: 'var(--color-deep-blue)', lineHeight: 1.35, margin: '0 0 10px 0' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="card service-card cta-banner-card" style={{ 
            width: '100%', 
            padding: '32px 36px', 
            background: 'var(--color-deep-blue)', 
            borderRadius: '0',
            borderTop: '3px solid var(--color-gold)',
            boxShadow: '0 8px 16px rgba(16, 39, 59, 0.28)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '24px',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ flex: '1 1 300px' }}>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-white)', lineHeight: 1.3 }}>
                Опасаетесь срочной перепродажи спорного жилья?
              </h3>
              <p style={{ margin: '0', fontSize: '15px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5, maxWidth: '640px' }}>
                Мы подготовим заявление о наложении обеспечительных мер и судебного запрета регистрационных действий в день обращения.
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <a 
                href="#form" 
                className="btn white-btn-custom" 
                style={{ display: 'inline-block', textAlign: 'center', fontSize: '15px' }}
              >
                Наложить арест на объект
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. ЭТАПЫ СУДЕБНОГО СПОРА ═══ */}
      <section className="section" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Порядок оспаривания и защиты сделки
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Комплекс мер для надёжной защиты имущественных прав доверителя в районных и арбитражных судах.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {[
              {
                title: 'Срочные обеспечительные меры',
                desc: 'Подача ходатайства об аресте объекта недвижимости в суд для предотвращения дальнейших перепродаж третьим лицам.'
              },
              {
                title: 'Сбор доказательственной базы',
                desc: 'Истребование медицинских карт, банковских выписок, аудиозаписей переговоров, архивных регистрационных дел.'
              },
              {
                title: 'Судебно-психиатрическая экспертиза',
                desc: 'Формулирование вопросов и привлечение экспертов для оценки способности лица понимать значение действий в день сделки.'
              },
              {
                title: 'Защита добросовестности',
                desc: 'Доказывание проявления должной осмотрительности покупателем, рыночности цены и возмездности расчётов по ст. 302 ГК.'
              },
              {
                title: 'Судебное представительство',
                desc: 'Защита позиции во всех судебных инстанциях Липецкой области, допрос свидетелей и опровержение доводов оппонентов.'
              },
              {
                title: 'Двусторонняя реституция',
                desc: 'Возврат объекта законному собственнику либо взыскание полной стоимости недвижимости с недобросовестной стороны.'
              }
            ].map((step, idx) => (
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
                  {step.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4. КЕЙСЫ ═══ */}
      <CasesBlock
        title="Примеры судебных споров по сделкам"
        showDemoWarning={false}
        resultLabel="Результат"
        cases={cases}
      />

      {/* ═══ 5. ПРОЦЕСС ═══ */}
      <ProcessBlock
        title="Процесс защиты интересов"
        subtitle="Пять шагов для признания сделки недействительной или защиты статуса добросовестного покупателя."
        steps={processSteps}
      />

      {/* ═══ 6. СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость услуг по оспариванию сделок"
        subtitle="Прозрачная фиксация стоимости в договоре. Судебные расходы взыскиваются с проигравшей стороны."
        tiers={pricingTiers}
      />

      {/* ═══ 7. ЧАСТЫЕ ВОПРОСЫ (FAQ) ═══ */}
      <FAQBlock
        faqs={faqs}
        title={<>Частые вопросы <br />по оспариванию сделок с недвижимостью</>}
        subtitle="Разъяснения статей 166–179 ГК РФ, сроков давности и статуса добросовестного приобретателя."
        ctaText="Задать свой вопрос"
        ctaLink="#form"
      />

      {/* ═══ 8. СВЯЗАННЫЕ УСЛУГИ ═══ */}
      <section className="section bg-cream" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '700px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Связанные услуги
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Смежные направления помощи по защите имущественных прав.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '20px' }}>
            <Link href="/grazhdanam/yurist-po-nedvizhimosti/soprovozhdenie-sdelok-s-nedvizhimostyu/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <div 
                className="card" 
                style={{ 
                  height: '100%', 
                  padding: '32px', 
                  background: 'var(--color-white)', 
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  borderRadius: '0',
                  display: 'flex', 
                  flexDirection: 'column'
                }}
              >
                <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                  Сопровождение сделок
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Превентивная проверка объекта и собственника для исключения рисков оспаривания.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '15px', fontWeight: 600 }}>
                  Подробнее →
                </div>
              </div>
            </Link>

            <Link href="/grazhdanam/yurist-po-nedvizhimosti/priznanie-prava-sobstvennosti-na-nedvizhimost/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <div 
                className="card" 
                style={{ 
                  height: '100%', 
                  padding: '32px', 
                  background: 'var(--color-white)', 
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  borderRadius: '0',
                  display: 'flex', 
                  flexDirection: 'column'
                }}
              >
                <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                  Признание права
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Оформление права собственности на недвижимость через суд при утере документов.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '15px', fontWeight: 600 }}>
                  Подробнее →
                </div>
              </div>
            </Link>

            <Link href="/grazhdanam/yurist-po-nedvizhimosti/spory-s-zastrojshchikom/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <div 
                className="card" 
                style={{ 
                  height: '100%', 
                  padding: '32px', 
                  background: 'var(--color-white)', 
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  borderRadius: '0',
                  display: 'flex', 
                  flexDirection: 'column'
                }}
              >
                <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                  Споры с застройщиком
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Взыскание неустоек, расторжение ДДУ и компенсация строительных дефектов.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '15px', fontWeight: 600 }}>
                  Подробнее →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 9. ФИНАЛЬНАЯ ФОРМА ═══ */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start', paddingTop: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>Связаться с нами</span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                Защитите свои имущественные интересы
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Кратко опишите ситуацию: тип сделки (купля-продажа, дарение), дату подписания и основание спора. Мы оценим риски и предложим план судебной защиты.
              </p>
              <div style={{ marginTop: '32px' }}>
                <div style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <span>Перезвоним вам в течение 15 минут в рабочее время</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
              <div style={{ background: 'var(--gradient-cream)', padding: '40px', borderRadius: '0', boxShadow: '0 8px 24px rgba(0,0,0,0.15)', width: '100%', border: '1px solid rgba(0,0,0,0.06)' }}>
                <ContactsForm 
                  title="Написать нам" 
                  subtitle="" 
                  buttonText="Оставить заявку" 
                  commentPlaceholder="Опишите обстоятельства сделки и суть претензий…" 
                  subtext="Если вы оставите заявку вечером или в выходной день, мы перезвоним в ближайший рабочий день."
                  hiddenFields={[{ name: 'service', value: 'Оспаривание сделок с недвижимостью' }]} 
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
