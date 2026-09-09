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

export default function VyselenieClient() {
  const [ctaSource, setCtaSource] = useState('housing_vyselenie_form_direct');
  const [ctaText, setCtaText] = useState('Прямой переход к форме');

  const handleCtaClick = (source: string, text: string) => {
    setCtaSource(source);
    setCtaText(text);
  };

  const faqs = [
    {
      q: 'Можно ли выписать человека из квартиры без его согласия и присутствия?',
      a: 'Да, исключительно в судебном порядке. Паспортный стол или МФЦ снимают гражданина с регистрационного учёта без его личного согласия только на основании вступившего в законную силу решения суда.'
    },
    {
      q: 'Можно ли выписать бывшего супруга после развода?',
      a: 'Да, по ч. 4 ст. 31 ЖК РФ право пользования жилым помещением за бывшим членом семьи собственника прекращается с момента расторжения брака, если между ними не было заключено брачного договора или соглашения о сохранении права проживания.'
    },
    {
      q: 'Кого нельзя выписать из квартиры даже через суд?',
      a: 'Нельзя выписать: лиц, отказавшихся от участия в приватизации данной квартиры (за ними сохраняется бессрочное право пользования); несовершеннолетних детей собственника (за редкими исключениями); получателей ренты и лиц, указанных в завещательном отказе.'
    },
    {
      q: 'Можно ли выписать человека из муниципальной квартиры?',
      a: 'Да. По ст. 83 ЖК РФ гражданина можно признать утратившим право пользования, если он добровольно выехал на другое постоянное место жительства, забрал личные вещи, не оплачивает ЖКУ и не пытается вселиться.'
    },
    {
      q: 'Что делать, если человек прописан, но никогда не жил в квартире?',
      a: 'В суд подаётся исковое заявление о признании гражданина не приобретшим право пользования жилым помещением. В суде доказывается, что человек никогда фактически не вселялся и не вёз свои вещи.'
    },
    {
      q: 'Сколько времени занимает судебная выписка?',
      a: 'В среднем рассмотрение дела в районном суде Липецка занимает от 2 до 3 месяцев. После вступления решения в законную силу снятие с учёта в органах МВД занимает 3–5 рабочих дней.'
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
        '@id': 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/vyselenie-i-vypiska-iz-kvartiry-cherez-sud/#service',
        name: 'Выселение и выписка из квартиры через суд в Липецке',
        serviceType: 'Юридическая помощь по выписке и выселению граждан через суд',
        url: 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/vyselenie-i-vypiska-iz-kvartiry-cherez-sud/',
        provider: { '@id': 'https://dejure-help.ru/#legalservice' },
        areaServed: ['Липецк', 'Липецкая область']
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/vyselenie-i-vypiska-iz-kvartiry-cherez-sud/#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://dejure-help.ru/' },
          { '@type': 'ListItem', position: 2, name: 'Гражданам', item: 'https://dejure-help.ru/grazhdanam/' },
          { '@type': 'ListItem', position: 3, name: 'Жилищный юрист', item: 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/' },
          { '@type': 'ListItem', position: 4, name: 'Выселение и выписка через суд', item: 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/vyselenie-i-vypiska-iz-kvartiry-cherez-sud/' }
        ]
      }
    ]
  };

  const situations = [
    {
      tag: 'Бывший супруг',
      title: 'Бывший супруг выехал после развода, но отказывается выписываться',
      desc: 'Прекратим право пользования по ст. 31 ЖК РФ и снимем с регистрационного учёта без его присутствия в суде.'
    },
    {
      tag: 'Не проживает годами',
      title: 'Прописанный родственник или знакомый давно живёт в другом месте',
      desc: 'Признаем утратившим право пользования жильём на основании добровольного выезда и отсутствия оплаты ЖКУ.'
    },
    {
      tag: 'Никогда не вселялся',
      title: 'Человека прописали формально, но он ни дня не жил в квартире',
      desc: 'Признаем неприобретшим право пользования помещением и аннулируем регистрационную запись через суд.'
    },
    {
      tag: 'Покупка квартиры с жильцами',
      title: 'Купили квартиру, а прежние собственники или их жильцы не выписываются',
      desc: 'Прекратим права пользования прежних жильцов по ст. 292 ГК РФ и освободим жильё от обременений.'
    },
    {
      tag: 'Фактическое выселение',
      title: <>Человек незаконно проживает <br />в квартире и отказывается освободить её</>,
      desc: 'Добьёмся судебного решения о принудительном выселении и сопроводим исполнительные действия с приставами.'
    },
    {
      tag: 'Защита от выписки',
      title: 'Вас незаконно пытаются выписать или выселить из единственного жилья',
      desc: 'Докажем вынужденный характер выезда, право бессрочного пользования или добьёмся отсрочки выселения.'
    }
  ];

  const helpActions = [
    {
      title: <>Правовой анализ оснований</>,
      desc: 'Проверяем статус жилья (собственность, соцнайм), историю приватизации, основания вселения и родственные связи.'
    },
    {
      title: <>Сбор доказательной базы</>,
      desc: 'Истребуем справки о непроживании, сведения из поликлиник, почты, управляющей компании и организуем показания свидетелей.'
    },
    {
      title: <>Досудебное уведомление</>,
      desc: 'Составляем и направляем официальное требование о добровольном снятии с учёта и освобождении помещения.'
    },
    {
      title: <>Исковое заявление под ключ</>,
      desc: 'Формируем точные исковые требования с соблюдением ст. 31, 35, 83 ЖК РФ и актуальной практики ВС РФ.'
    },
    {
      title: <>Судебное представительство</>,
      desc: 'Ведём дело во всех заседаниях районного суда Липецка до вынесения окончательного решения без вашего личного участия.'
    },
    {
      title: <>Снятие с регистрационного учёта</>,
      desc: 'Получаем вступившее в силу решение суда и обеспечиваем фактическое снятие гражданина с учёта в органах МВД.'
    }
  ];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />
      <Header />

      {/* ═══ 1. ПЕРВЫЙ ЭКРАН ═══ */}
      <div onClickCapture={() => handleCtaClick('housing_vyselenie_hero', 'Выписать человека через суд')}>
        <MilitaryHero 
          breadcrumbs={
            <>
              <Link href="/" style={{ color: 'var(--color-primary)' }}>Главная</Link> <span style={{ margin: '0 8px' }}>/</span> 
              <Link href="/grazhdanam/" style={{ color: 'var(--color-primary)' }}>Гражданам</Link> <span style={{ margin: '0 8px' }}>/</span> 
              <Link href="/grazhdanam/zhilishchnyj-yurist/" style={{ color: 'var(--color-primary)' }}>Жилищный юрист</Link> <span style={{ margin: '0 8px' }}>/</span> 
              <span style={{ color: 'var(--color-text-main)' }}>Выселение и выписка из квартиры через суд</span>
            </>
          }
          superTitle="Жилищное право • выписка и выселение через суд • Липецк"
          title={
            <>
              <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>Выселение и выписка</span> <br />
              <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>из квартиры через суд</span> <br />
              <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>в Липецке</span>
            </>
          }
          subtitle={
            <span style={{ display: 'inline-block', maxWidth: '600px', textWrap: 'balance' }}>
              Признаем бывшего супруга, родственника или прежнего владельца утратившим право пользования, снимем с регистрационного учёта в МВД и освободим жильё под ключ.
            </span>
          }
          primaryCtaText="Выписать человека через суд"
          primaryCtaLink="#form"
          primaryCtaAnalytics="housing_vyselenie_consultation_click"
          primaryCtaSubtext="Перезвоним в течение 15 минут в рабочее время"
          secondaryCtaText="С какими случаями помогаем"
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
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M8.5 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z M18 8l5 5 M23 8l-5 5"/>
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
                      <div style={{ position: 'absolute', top: '25px', left: '25px', width: '85px', height: '25px', border: '1.5px solid rgba(23, 50, 77, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-5deg)' }}>
                        <span style={{ fontSize: '4.5px', fontWeight: 'bold', color: 'rgba(23,50,77,0.5)', fontFamily: 'var(--font-serif)' }}>СПРАВКА О НЕПРОЖИВАНИИ</span>
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

                <div className="doc-wrapper-float-2">
                  <div className="doc-sheet doc-sheet-2">
                    <div style={{ padding: '28px 22px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <div style={{ position: 'absolute', top: '22px', left: '22px', width: '110px', height: '32px', border: '1px solid #C1A066', color: '#C1A066', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-4deg)', opacity: 0.95 }}>
                        <div style={{ fontFamily: 'var(--font-serif)', fontSize: '5px', textAlign: 'center', fontWeight: 'bold', lineHeight: 1.2 }}>
                          РЕШЕНИЕ СУДА<br/>
                          О ПРЕКРАЩЕНИИ ПРАВА ПОЛЬЗОВАНИЯ
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
                          <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Собственник квартиры:</div>
                          <div style={{ width: '70px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '8px' }}></div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                          <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Ответчик (выписан):</div>
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
                          <span style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)', letterSpacing: '0.05em' }}>СУДЕБНАЯ ВЫПИСКА</span>
                          <span style={{ fontSize: '5px', color: 'var(--color-primary)' }}>ЮК «Де-Юре» Липецк</span>
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
                        flexDirection: 'column',
                        justifyContent: 'center',
                        padding: '12px'
                      }}>
                        <div style={{ fontSize: '7px', fontWeight: 'bold', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>РЕЗУЛЬТАТ ПО ДЕЛУ:</div>
                        <div style={{ fontSize: '6px', color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>
                          1. Признать ответчика утратившим право пользования<br/>
                          2. Снять с регистрационного учёта по адресу жилья<br/>
                          3. Выселить и обязать освободить помещение
                        </div>
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
                          <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Защита прав собственников жилья</div>
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
            { text: 'Проверим основания прекращения права пользования' },
            { text: 'Соберём доказательства для суда без вашего участия' },
            { text: 'Снимем гражданина с регистрационного учёта в МВД' }
          ]}
        />
      </div>

      {/* ═══ 2. СИТУАЦИИ ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '960px', marginBottom: '44px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Кого можно выписать из квартиры через суд
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Собственник не должен нести лишние расходы на ЖКУ и терпеть чужую регистрацию в своей недвижимости. Поможем снять с учёта законно и быстро.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '40px' }}>
            {situations.map((sit, i) => (
              <div key={i} className="hover-lift" style={{ 
                padding: '32px 28px', 
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-primary)',
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', opacity: 0.06, pointerEvents: 'none' }}>
                  <svg width="100" height="100" viewBox="0 0 24 24" fill="var(--color-deep-blue)">
                    <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <div style={{ 
                  fontSize: '12px', 
                  fontWeight: 600, 
                  color: 'var(--color-gold)', 
                  marginBottom: '12px',
                  background: 'rgba(193, 160, 102, 0.1)',
                  padding: '4px 10px',
                  alignSelf: 'flex-start',
                  borderRadius: '2px'
                }}>
                  {sit.tag}
                </div>
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', fontWeight: 600, color: 'var(--color-deep-blue)', lineHeight: 1.4, margin: '0 0 12px 0' }}>
                  {sit.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {sit.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA-плашка с атрибуцией cta_source = housing_vyselenie_banner */}
          <div 
            className="card service-card cta-banner-card" 
            style={{ 
              width: '100%', 
              padding: '32px 36px', 
              background: 'var(--color-deep-blue)', 
              borderRadius: '0',
              borderTop: '3px solid var(--color-gold)',
              boxShadow: '0 8px 16px rgba(16, 39, 59, 0.28)'
            }}
          >
            <div style={{ flex: '1 1 300px' }}>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-white)', lineHeight: 1.3 }}>
                Выписка проходит без согласия и присутствия ответчика
              </h3>
              <p style={{ margin: '0', fontSize: '15px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5, maxWidth: '640px' }}>
                Если ответчик уклоняется от явки в суд или его текущее местонахождение неизвестно, дело рассматривается по последнему известному месту жительства с вынесением законного решения.
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <a 
                href="#form" 
                className="btn white-btn-custom" 
                style={{ display: 'inline-block', textAlign: 'center', fontSize: '15px' }}
                onClick={() => handleCtaClick('housing_vyselenie_banner', 'Выписать непроживающего гражданина')}
              >
                Выписать через суд
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. КАК ПОМОГАЕТ ЮРИСТ ═══ */}
      <section className="section" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Порядок выписки и выселения через суд
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Полностью берём на себя судебный процесс — от сбора доказательств <br />до получения обновлённой выписки из домовой книги.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {helpActions.map((act, idx) => (
              <div key={idx} className="hover-lift" style={{
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                padding: '36px 30px 32px 30px',
                border: '1px solid var(--color-border)',
                borderTop: '4px solid var(--color-gold)',
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}>
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
                  {act.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {act.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4. ПРАКТИКА ═══ */}
      <CasesBlock 
        title={<>Судебная практика по выписке <br />и выселению граждан в Липецке</>}
        showDemoWarning={false}
        resultLabel="Ключевой результат"
        cases={[
          {
            category: "ВЫПИСКА БЫВШЕГО СУПРУГА",
            title: "Выписали бывшего супруга из личной квартиры доверительницы",
            problem: "После развода бывший муж уехал в другой регион, но отказался добровольно сниматься с учёта, препятствуя продаже квартиры.",
            action: "Доказали прекращение семейных отношений по ч. 4 ст. 31 ЖК РФ, отсутствие соглашений о проживании и добровольный выезд.",
            result: "Суд признал ответчика утратившим право пользования. Регистрация аннулирована в УВМ МВД по Липецкой области.",
            isDemo: false
          },
          {
            category: "ПОКУПКА КВАРТИРЫ",
            title: "Выселили и выписали родственников прежнего собственника после сделки",
            problem: "Клиент приобрёл квартиру, однако взрослый сын продавца отказался освобождать помещение и выписываться.",
            action: "Подали иск по ст. 292 ГК РФ о прекращении права пользования в связи со сменой собственника жилого помещения.",
            result: "Суд вынес решение о выселении и снятии с учёта. Квартира освобождена с участием судебных приставов.",
            isDemo: false
          },
          {
            category: "МУНИЦИПАЛЬНОЕ ЖИЛЬЁ",
            title: "Признали утратившим право пользования гражданина, не проживавшего 7 лет",
            problem: "Наниматель муниципальной квартиры не мог приватизировать жильё из-за прописанного брата, уехавшего в 2017 году.",
            action: "Собрали доказательства неоплаты ЖКУ, выезда на другое постоянное место жительства и отсутствия попыток вселения.",
            result: "Суд признал ответчика утратившим право по ст. 83 ЖК РФ. Доверитель успешно приватизировал квартиру на себя.",
            isDemo: false
          }
        ]}
      />

      {/* ═══ 5. ПРОЦЕСС ═══ */}
      <ProcessBlock 
        title="Как проходит работа"
        subtitle="Пять этапов судебного снятия с регистрационного учёта."
        steps={[
          { num: '01', title: 'Правовая экспертиза', desc: 'Проверяем документы на квартиру, историю прописки, основания вселения и семейный статус.' },
          { num: '02', title: 'Сбор доказательств', desc: 'Запрашиваем архивные справки, акты управляющей компании, сведения о фактическом проживании.' },
          { num: '03', title: 'Подача иска в суд', desc: 'Составляем процессуальный иск и оплачиваем государственную пошлину.' },
          { num: '04', title: 'Судебные заседания', desc: 'Представляем вашу позицию в районном суде до вынесения решения в вашу пользу.' },
          { num: '05', title: 'Выписка в МВД', desc: 'Передаём решение суда в миграционный орган и получаем чистую домовую книгу.' }
        ]}
      />

      {/* ═══ 6. ЦЕНЫ ═══ */}
      <div onClickCapture={(e) => {
        const target = e.target as HTMLElement;
        const btn = target.closest('a, button');
        if (btn) {
          const text = btn.textContent?.trim() || '';
          if (text.includes('Получить расчёт')) {
            handleCtaClick('housing_vyselenie_price_total', 'Получить расчёт стоимости');
          } else {
            handleCtaClick('housing_vyselenie_price_tier', text);
          }
        }
      }}>
        <PricingBlock 
          title="Стоимость выписки через суд"
          subtitle="Стоимость фиксируется в договоре и не увеличивается в процессе рассмотрения дела."
          tiers={[
            {
              title: <>Консультация и подготовка иска</>,
              subtitle: 'Для самостоятельной подачи',
              popular: false,
              price: 'от ХХХ ₽',
              features: [
                { name: 'Правовой анализ документов на квартиру', value: '✓' },
                { name: 'Составление искового заявления со ссылками на ЖК РФ', value: '✓' },
                { name: 'Пошаговый план ведения дела в суде', value: '✓' }
              ],
              buttonText: 'Записаться на консультацию',
              buttonHref: '#form'
            },
            {
              title: <>Выписка через суд под ключ</>,
              subtitle: 'Полное ведение дела',
              popular: true,
              badgeText: 'ВОСТРЕБОВАНО',
              price: 'от ХХХ ₽',
              features: [
                { name: 'Сбор доказательств и справок о непроживании', value: '✓' },
                { name: 'Участие во всех заседаниях районного суда', value: '✓' },
                { name: 'Получение решения суда и выписка в МВД', value: '✓' }
              ],
              buttonText: 'Рассчитать стоимость',
              buttonHref: '#form'
            },
            {
              title: <>Выселение с судебными приставами</>,
              subtitle: 'Принудительное освобождение',
              popular: false,
              price: 'от ХХХ ₽',
              features: [
                { name: 'Получение исполнительного листа', value: '✓' },
                { name: 'Взаимодействие с отделом ФССП', value: '✓' },
                { name: 'Участие в фактическом выселении жильца', value: '✓' }
              ],
              buttonText: 'Обсудить ситуацию',
              buttonHref: '#form'
            }
          ]}
          ctaTitle="Точную стоимость определим до начала работы"
          ctaSubtitle="Изучим обстоятельства вселения и предложим гарантированный законный способ выписки."
          ctaButtonText="Получить расчёт стоимости"
          ctaButtonLink="#form"
          disclaimer=""
        />
      </div>

      {/* ═══ 7. FAQ ═══ */}
      <div onClickCapture={() => handleCtaClick('housing_vyselenie_faq', 'Задать свой вопрос')}>
        <FAQBlock 
          faqs={faqs} 
          title={<>Частые вопросы <br />по выписке и выселению из квартиры</>}
          subtitle="Собрали ответы на главные вопросы собственников жилья в Липецке."
          ctaText="Задать свой вопрос"
          ctaLink="#form"
        />
      </div>

      {/* ═══ 8. СВЯЗАННЫЕ УСЛУГИ ═══ */}
      <section className="section bg-cream" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Связанные услуги жилищного юриста
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
              Смежные направления помощи по защите прав на жилое помещение.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '20px' }}>
            <Link href="/grazhdanam/zhilishchnyj-yurist/vselenie-i-ustranenie-prepyatstvij-v-polzovanii-kvartiroj/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <div className="card service-card" style={{ height: '100%', padding: '32px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', borderRadius: '0', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3 }}>
                  Вселение и порядок пользования
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Получение доступа в квартиру, защита от смены замков и закрепление комнат за собственниками.
                </p>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600 }}>
                  Подробнее →
                </div>
              </div>
            </Link>

            <Link href="/grazhdanam/zhilishchnyj-yurist/razdel-licevyh-schetov-i-poryadka-oplaty-zhku/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <div className="card service-card" style={{ height: '100%', padding: '32px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', borderRadius: '0', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3 }}>
                  Раздел оплаты ЖКУ
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Определение долей участия в оплате коммунальных услуг и получение отдельных платёжных документов.
                </p>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600 }}>
                  Подробнее →
                </div>
              </div>
            </Link>

            <Link href="/grazhdanam/zhilishchnyj-yurist/zaliv-kvartiry/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <div className="card service-card" style={{ height: '100%', padding: '32px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', borderRadius: '0', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3 }}>
                  Залив квартиры
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Взыскание стоимости восстановительного ремонта после затопления с виновных соседей или УК.
                </p>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600 }}>
                  Подробнее →
                </div>
              </div>
            </Link>
          </div>

          <div style={{ marginTop: '32px' }}>
            <Link href="/grazhdanam/zhilishchnyj-yurist/" style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '16px', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
              Смотреть все услуги жилищного юриста →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 9. ФОРМА ═══ */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start', paddingTop: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>Связаться с нами</span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                Обсудите выписку из квартиры через суд
              </h2>
              
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Опишите ситуацию: кого необходимо выписать, на каком основании возникло право собственности, проживает ли человек фактически. Юрист свяжется с вами.
              </p>
              
              <div style={{ marginTop: '32px' }}>
                <div style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <span>
                    Перезвоним вам в течение 15 минут в рабочее время
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
                  commentPlaceholder="Например: бывший муж выехал после развода, не платит за квартиру, нужно выписать через суд…"
                  subtext="Если вы оставите заявку вечером или в выходной день, мы перезвоним в ближайший рабочий день."
                  hiddenFields={[
                    { name: 'pageId', value: 'CIV-HOUSING-VYSELENIE' },
                    { name: 'pageTitle', value: 'Выселение и выписка из квартиры через суд в Липецке' },
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
