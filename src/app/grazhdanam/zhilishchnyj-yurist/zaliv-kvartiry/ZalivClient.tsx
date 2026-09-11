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

export default function ZalivClient() {
  const [ctaSource, setCtaSource] = useState('housing_zaliv_form_direct');
  const [ctaText, setCtaText] = useState('Прямой переход к форме');

  const handleCtaClick = (source: string, text: string) => {
    setCtaSource(source);
    setCtaText(text);
  };

  const faqs = [
    {
      q: 'Что делать в первые часы после залива квартиры?',
      a: '1. Обесточьте квартиру во избежание замыкания. 2. Вызовите аварийную службу УК для перекрытия стояка. 3. Сделайте подробные фото и видео повреждений. 4. Не начинайте уборку и ремонт до составления официального акта осмотра.'
    },
    {
      q: 'Кто отвечает за залив: сосед сверху или управляющая компания?',
      a: 'Если течь произошла на общем имуществе дома (до первого отключающего вентиля на стояке, на самом стояке, кровле или общем трубопроводе) — отвечает УК. Если протечка возникла после первого крана (гибкая подводка, стиральная машина, батарея с вентилем) — отвечает собственник квартиры сверху.'
    },
    {
      q: 'В какой срок УК обязана составить акт о заливе?',
      a: 'По Постановлению Правительства РФ № 354 управляющая организация обязана составить акт о заливе в течение 12 часов с момента обращения в аварийно-диспетчерскую службу. В акте обязательно указываются причина аварии и все повреждения.'
    },
    {
      q: 'Что делать, если УК отказывается составлять акт или занижает ущерб?',
      a: 'Составьте самостоятельный акт с привлечением не менее двух соседей-свидетелей, зафиксировав дату и факт вызова УК. После этого вызывается независимый эксперт-оценщик для составления официального отчёта об оценке.'
    },
    {
      q: 'Можно ли взыскать с виновника расходы на оценщика и юриста?',
      a: 'Расходы на оценку, госпошлину и юридическую помощь можно заявить к взысканию, если они связаны с делом и подтверждены документами. Суд оценивает их необходимость, а расходы на представителя взыскивает в разумных пределах, поэтому полное возмещение не является автоматическим.'
    },
    {
      q: 'Что делать, если меня несправедливо обвиняют в заливе?',
      a: 'Проверьте границу ответственности: если порыв произошёл на общедомовом стояке или гидроударе, вашей вины нет. Организуем встречную строительно-техническую экспертизу для снятия необоснованных претензий.'
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
        '@id': 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/zaliv-kvartiry/#service',
        name: 'Юрист по заливу квартиры в Липецке',
        serviceType: 'Взыскание ущерба от залива квартиры и защита от претензий',
        url: 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/zaliv-kvartiry/',
        provider: { '@id': 'https://dejure-help.ru/#legalservice' },
        areaServed: ['Липецк', 'Липецкая область']
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/zaliv-kvartiry/#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://dejure-help.ru/' },
          { '@type': 'ListItem', position: 2, name: 'Гражданам', item: 'https://dejure-help.ru/grazhdanam/' },
          { '@type': 'ListItem', position: 3, name: 'Жилищный юрист', item: 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/' },
          { '@type': 'ListItem', position: 4, name: 'Залив квартиры', item: 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/zaliv-kvartiry/' }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/zaliv-kvartiry/#faq',
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
      tag: 'Залили соседи',
      title: 'Соседи сверху затопили квартиру и отказываются платить',
      desc: 'Зафиксируем повреждения, организуем независимую оценку и взыщем полную стоимость ремонта через суд.'
    },
    {
      tag: 'Вина управляющей компании',
      title: 'Протекла крыша, лопнул общедомовой стояк или канализация',
      desc: 'Взыщем с УК стоимость восстановительного ремонта, компенсацию морального вреда и штраф 50% по Закону о ЗПП.'
    },
    {
      tag: 'Отказ в составлении акта',
      title: 'Управляющая компания затягивает выезд или не указывает причину',
      desc: 'Оформим комиссионный акт со свидетелями, проведём досудебную фиксацию и привлечём надзорные органы.'
    },
    {
      tag: 'Занижение суммы ущерба',
      title: 'Виновник или страховая компания занижают стоимость ремонта',
      desc: 'Организуем независимую оценку ущерба; если спор дойдёт до суда и расчёт оспорят, добьёмся назначения судебной экспертизы.'
    },
    {
      tag: 'Вас обвиняют в заливе',
      title: 'Соседи требуют компенсацию, но авария произошла на общем стояке',
      desc: 'Докажем отсутствие вашей вины, переложим ответственность на управляющую компанию или оспорим завышенную смету.'
    },
    {
      tag: 'Мирное соглашение',
      title: 'Стороны готовы договориться, но нужен юридически грамотный договор',
      desc: 'Составим соглашение о добровольном возмещении ущерба с фиксацией суммы и гарантией отсутствия будущих претензий.'
    }
  ];

  const helpActions = [
    {
      title: <>Официальная фиксация залива</>,
      desc: 'Контролируем правильность составления акта УК: причину протечки, границы ответственности и перечень испорченного имущества.'
    },
    {
      title: <>Независимая оценка ущерба</>,
      desc: 'Организуем выезд эксперта-оценщика с надлежащим уведомлением виновника телеграммой для расчёта реальной сметы ремонта.'
    },
    {
      title: <>Досудебная претензия виновнику</>,
      desc: 'Направляем мотивированную претензию с копией экспертного заключения и требованием добровольной выплаты.'
    },
    {
      title: <>Исковое заявление и расчёт неустоек</>,
      desc: 'Составляем исковое заявление, включающее стоимость ремонта, расходы на оценку, юриста, моральный вред и штраф.'
    },
    {
      title: <>Судебное представительство под ключ</>,
      desc: 'Защищаем ваши интересы во всех заседаниях суда, защищаем экспертное заключение и добиваемся решения в вашу пользу.'
    },
    {
      title: <>Фактическое взыскание денег</>,
      desc: 'Получаем исполнительный лист, направляем его в банк или приставам и контролируем поступление денег на ваш счёт.'
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
      <div onClickCapture={() => handleCtaClick('housing_zaliv_hero', 'Взыскать ущерб за залив')}>
        <MilitaryHero 
          breadcrumbs={
            <>
              <Link href="/" style={{ color: 'var(--color-primary)' }}>Главная</Link> <span style={{ margin: '0 8px' }}>/</span> 
              <Link href="/grazhdanam/" style={{ color: 'var(--color-primary)' }}>Гражданам</Link> <span style={{ margin: '0 8px' }}>/</span> 
              <Link href="/grazhdanam/zhilishchnyj-yurist/" style={{ color: 'var(--color-primary)' }}>Жилищный юрист</Link> <span style={{ margin: '0 8px' }}>/</span> 
              <span style={{ color: 'var(--color-text-main)' }}>Залив квартиры</span>
            </>
          }
          superTitle="Жилищное право • возмещение ущерба при заливе • Липецк"
          title={
            <>
              <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>Юрист по заливу</span> <br />
              <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>квартиры в Липецке</span>
            </>
          }
          subtitle={
            <span style={{ display: 'inline-block', maxWidth: '600px', textWrap: 'balance' }}>
              Зафиксируем причину затопления, организуем независимую оценку и заявим к взысканию полную стоимость подтверждённого ущерба с ответственного соседа или управляющей компании. Если требования предъявили вам — проверим причину аварии и защитим от необоснованной суммы.
            </span>
          }
          primaryCtaText="Взыскать ущерб за залив"
          primaryCtaLink="#form"
          primaryCtaAnalytics="housing_zaliv_consultation_click"
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
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
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
                        <span style={{ fontSize: '4.5px', fontWeight: 'bold', color: 'rgba(23,50,77,0.5)', fontFamily: 'var(--font-serif)' }}>ОЦЕНКА УЩЕРБА ЭКСПЕРТОМ</span>
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
                          АКТ О ЗАЛИВЕ ПОМЕЩЕНИЯ<br/>
                          И ПРИЧИНАХ АВАРИИ
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
                          <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Потерпевшая сторона:</div>
                          <div style={{ width: '70px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '8px' }}></div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                          <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Инспектор УК:</div>
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
                          <span style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)', letterSpacing: '0.05em' }}>УЩЕРБ ОТ ЗАЛИВА</span>
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
                        <div style={{ fontSize: '7px', fontWeight: 'bold', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>СМЕТА УЩЕРБА ОТ ЗАЛИВА:</div>
                        <div style={{ fontSize: '6px', color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>
                          • Восстановительный ремонт: 245 000 ₽<br/>
                          • Испорченная мебель и техника: 82 800 ₽<br/>
                          • Судебный штраф 50% и расходы на оценщика
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
                          <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Возмещение ущерба • Липецк</div>
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
            { text: 'Проконтролируем составление акта УК' },
            { text: 'Организуем независимую экспертизу сметы' },
            { text: 'Заявим ущерб и судебные расходы, а в споре с УК — компенсацию морального вреда и штраф по Закону о защите прав потребителей' }
          ]}
        />
      </div>

      {/* ═══ 2. СИТУАЦИИ ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '960px', marginBottom: '44px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              С какими случаями затопления мы помогаем
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Поможем взыскать полный ущерб, даже если виновник отрицает вину, УК отказывается составлять акт или соседи не пускают в квартиру.
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

          {/* CTA-плашка с атрибуцией cta_source = housing_zaliv_banner */}
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
                Не начинайте ремонт до фиксации причины и повреждений
              </h3>
              <p style={{ margin: '0', fontSize: '15px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5, maxWidth: '640px' }}>
                До ремонта составьте акт, сделайте фото и видео и обеспечьте возможность осмотра другой стороной. Раннее устранение следов залива не лишает права на взыскание, но может существенно осложнить доказывание состава и размера ущерба.
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <a 
                href="#form" 
                className="btn white-btn-custom" 
                style={{ display: 'inline-block', textAlign: 'center', fontSize: '15px' }}
                onClick={() => handleCtaClick('housing_zaliv_banner', 'Вызвать эксперта по заливу')}
              >
                Оценить ущерб
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. КАК ПОМОГАЕТ ЮРИСТ ═══ */}
      <section className="section" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Порядок взыскания ущерба после залива
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Обеспечиваем полное юридическое и экспертное <br />сопровождение на каждом этапе разбирательства.
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
        title={<>Судебная практика по взысканию ущерба <br />после залива квартиры в Липецке</>}
        showDemoWarning={false}
        resultLabel="Ключевой результат"
        cases={[
          {
            category: "ВЗЫСКАНИЕ С УК",
            title: "Взыскали 327 800 ₽ с управляющей компании за залив квартиры с кровли",
            problem: "После ливня затопило верхний этаж. УК отказалась компенсировать ущерб, утверждая, что протечка произошла из-за аномального урагана.",
            action: "Провели строительно-техническую экспертизу, доказали нарушение периодичности обслуживания кровли и взыскали ущерб по Закону о ЗПП.",
            result: "Суд взыскал стоимость ремонта, моральный вред, судебные издержки и штраф 50% — суммарно 327 800 ₽.",
            isDemo: false
          },
          {
            category: "ВЗЫСКАНИЕ С СОСЕДА",
            title: "Взыскали 240 000 ₽ ущерба с собственника квартиры сверху за срыв гибкой подводки",
            problem: "У соседа сверху сорвало гибкую подводку стиральной машины, что привело к затоплению трёх помещений. Сосед отказался платить.",
            action: "Оформили акт осмотра, провели независимую оценку с уведомлением виновника телеграммой и заявили иск в Октябрьский районный суд Липецка.",
            result: "Суд взыскал с соседа 240 000 ₽ стоимости восстановительного ремонта плюс расходы на эксперта и представителя.",
            isDemo: false
          },
          {
            category: "ЗАЩИТА ОТ ИСКА",
            title: "Снизили сумму требований соседа с 450 000 ₽ до 80 000 ₽ при заливе",
            problem: "Сосед снизу предъявил к доверителю иск на 450 000 ₽, включив в смету замену паркета и ремонт комнат, не пострадавших от воды.",
            action: "Назначили судебную экспертизу, исключили доаварийный износ и недоказанные повреждения, доказав реальный размер ущерба.",
            result: "Суд удовлетворил требования соседа лишь в сумме 80 000 ₽, сэкономив доверителю 370 000 ₽.",
            isDemo: false
          }
        ]}
      />

      {/* ═══ 5. ПРОЦЕСС ═══ */}
      <ProcessBlock 
        title="Как проходит работа"
        subtitle="Пять шагов к получению денежной компенсации за причинённый ущерб."
        steps={[
          { num: '01', title: 'Фиксация и акт', desc: 'Проверяем правильность составления акта залива с управляющей компанией и фиксируем следы воды.' },
          { num: '02', title: 'Независимая оценка', desc: 'Организуем выезд эксперта-оценщика и составление детального отчёта со сметой ремонта.' },
          { num: '03', title: 'Претензия виновнику', desc: 'Направляем официальную досудебную претензию с предложением добровольного возмещения.' },
          { num: '04', title: 'Судебный процесс', desc: 'Подаём иск в суд, защищаем оценку от возражений ответчика и добиваемся решения.' },
          { num: '05', title: 'Выплата денег', desc: 'Предъявляем исполнительный лист в банк виновника или приставам до полного зачисления средств.' }
        ]}
      />

      {/* ═══ 6. ЦЕНЫ ═══ */}
      <div onClickCapture={(e) => {
        const target = e.target as HTMLElement;
        const btn = target.closest('a, button');
        if (btn) {
          const text = btn.textContent?.trim() || '';
          if (text.includes('Получить расчёт')) {
            handleCtaClick('housing_zaliv_price_total', 'Получить расчёт стоимости');
          } else {
            handleCtaClick('housing_zaliv_price_tier', text);
          }
        }
      }}>
        <PricingBlock 
          title="Стоимость юридической помощи при заливе"
          subtitle="Все расходы на услуги юриста и независимого оценщика взыскиваются с виновника в суде."
          tiers={[
            {
              title: <>Консультация и анализ акта</>,
              subtitle: 'Первичный разбор',
              popular: false,
              price: 'от ХХХ ₽',
              features: [
                { name: 'Анализ акта о заливе и фотоматериалов', value: '✓' },
                { name: 'Определение надлежащего ответчика (сосед/УК)', value: '✓' },
                { name: 'Организация независимой экспертизы', value: '✓' }
              ],
              buttonText: 'Записаться на консультацию',
              buttonHref: '#form'
            },
            {
              title: <>Претензия и досудебный этап</>,
              subtitle: 'Мирное урегулирование',
              popular: true,
              badgeText: 'ВОСТРЕБОВАНО',
              price: 'от ХХХ ₽',
              features: [
                { name: 'Составление и отправка претензии с отчётом', value: '✓' },
                { name: 'Переговоры с виновником или УК', value: '✓' },
                { name: 'Соглашение о возмещении ущерба', value: '✓' }
              ],
              buttonText: 'Рассчитать стоимость',
              buttonHref: '#form'
            },
            {
              title: <>Судебный процесс под ключ</>,
              subtitle: 'Полное взыскание',
              popular: false,
              price: 'от ХХХ ₽',
              features: [
                { name: 'Исковое заявление и защита оценки в суде', value: '✓' },
                { name: 'Взыскание штрафа 50% и морального вреда', value: '✓' },
                { name: 'Исполнение решения и получение денег', value: '✓' }
              ],
              buttonText: 'Обсудить ситуацию',
              buttonHref: '#form'
            }
          ]}
          ctaTitle="Точную стоимость определим до начала работы"
          ctaSubtitle="Изучим обстоятельства залива и предложим оптимальный план взыскания ущерба."
          ctaButtonText="Получить расчёт стоимости"
          ctaButtonLink="#form"
          disclaimer=""
        />
      </div>

      {/* ═══ 7. FAQ ═══ */}
      <div onClickCapture={() => handleCtaClick('housing_zaliv_faq', 'Задать свой вопрос')}>
        <FAQBlock 
          faqs={faqs} 
          title={<>Частые вопросы по возмещению <br />ущерба от залива квартиры</>}
          subtitle="Собрали ответы на главные вопросы пострадавших собственников жилья."
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
            <Link href="/grazhdanam/zhilishchnyj-yurist/spory-s-upravlyayushchej-kompaniej-i-zhkh/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <div className="card service-card" style={{ height: '100%', padding: '32px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', borderRadius: '0', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3 }}>
                  Споры с УК, ТСЖ и ЖКХ
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Оспаривание завышенных начислений, перерасчёт за некачественные услуги и претензии по содержанию дома.
                </p>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600 }}>
                  Подробнее →
                </div>
              </div>
            </Link>

            <Link href="/grazhdanam/zhilishchnyj-yurist/soglasovanie-i-uzakonenie-pereplanirovki/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <div className="card service-card" style={{ height: '100%', padding: '32px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', borderRadius: '0', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3 }}>
                  Узаконение перепланировки
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Согласование выполненных изменений помещений с администрацией или сохранение ремонта через суд.
                </p>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600 }}>
                  Подробнее →
                </div>
              </div>
            </Link>

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
                Обсудите взыскание ущерба от залива с юристом
              </h2>
              
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Опишите обстоятельства залива: составлен ли акт с УК, известна ли причина протечки и кто является виновником (сосед или управляющая компания).
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
                  commentPlaceholder="Например: соседи сверху затопили ванную и коридор, УК составила акт, сосед отказывается платить…"
                  subtext="Если вы оставите заявку вечером или в выходной день, мы перезвоним в ближайший рабочий день."
                  hiddenFields={[
                    { name: 'pageId', value: 'CIV-HOUSING-ZALIV' },
                    { name: 'pageTitle', value: 'Юрист по заливу квартиры в Липецке' },
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
