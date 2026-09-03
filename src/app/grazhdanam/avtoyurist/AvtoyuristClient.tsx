'use client';

import ContactsForm from '@/components/ContactsForm';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MilitaryHero from '@/components/MilitaryHero';
import FAQBlock from '@/components/FAQBlock';
import CasesBlock, { CaseData } from '@/components/CasesBlock';
import SpecialistBlock from '@/components/SpecialistBlock';
import PricingBlock from '@/components/PricingBlock';
import ProcessBlock from '@/components/ProcessBlock';

export default function AvtoyuristClient() {
  const cases: CaseData[] = [
    {
      category: 'Лишение прав',
      title: 'Добились прекращения дела о лишении водительских прав',
      problem: 'Водителю вменили нарушение, за которое предусмотрено лишение права управления. В материалах были противоречия между схемой, объяснениями и видеозаписью.',
      action: 'Изучили материалы, сопоставили траекторию движения с видеозаписью, подготовили письменные возражения и ходатайства об исследовании доказательств.',
      result: 'Обвинение не получило достаточного подтверждения, производство по делу прекратили.'
    },
    {
      category: 'Споры по ОСАГО',
      title: 'Получили доплату страхового возмещения по ОСАГО',
      problem: 'Страховая рассчитала ремонт без части повреждений и выплатила сумму, которой не хватало на восстановление автомобиля.',
      action: 'Проверили материалы осмотра и расчёт, организовали оценку, направили заявление в страховую и подготовили обращение к финансовому уполномоченному.',
      result: 'Размер страхового возмещения пересмотрели, клиент получил доплату и компенсацию предусмотренных расходов.'
    },
    {
      category: 'ДТП без ОСАГО',
      title: 'Взыскали ущерб с виновника без ОСАГО',
      problem: 'Автомобиль клиента был повреждён в ДТП, а ответственность виновника не была застрахована. Добровольно возместить ущерб он отказался.',
      action: 'Зафиксировали повреждения, проверили расчёт восстановительного ремонта, направили претензию и подготовили иск с доказательствами причинной связи и размера ущерба.',
      result: 'Суд взыскал подтверждённый ущерб и судебные расходы с ответственного лица.'
    }
  ];

  const faqs = [
    {
      q: 'Что делать сразу после ДТП?',
      a: 'Обеспечьте безопасность, выполните обязанности участника ДТП и зафиксируйте обстоятельства: положение автомобилей, повреждения, дорожные знаки и разметку, контакты свидетелей, записи регистратора и камер. Не подписывайте документы, не прочитав их; замечания указывайте письменно. Порядок оформления зависит от наличия пострадавших, разногласий и условий применения европротокола.'
    },
    {
      q: 'Когда к автоюристу нужно обратиться срочно?',
      a: 'Если составляют протокол с риском лишения прав, вменяют оставление места ДТП, есть пострадавшие, другая сторона искажает обстоятельства или могут быть утрачены видеозаписи и другие доказательства. Также нельзя откладывать оценку уже вынесенного постановления: срок его обжалования обычно составляет десять дней со дня вручения или получения копии.'
    },
    {
      q: 'Можно ли оспорить вину в ДТП?',
      a: 'Можно оспаривать выводы об обстоятельствах ДТП и распределении ответственности, если они не подтверждаются доказательствами или важные сведения не учтены. Для оценки нужны схема, объяснения, фото и видео, данные о дорожной обстановке, экспертизы и процессуальные документы.'
    },
    {
      q: 'Что делать, если обвиняют в оставлении места ДТП?',
      a: 'Необходимо установить, было ли событие ДТП, являлись ли Вы его участником, знали ли о происшествии и соблюдались ли предусмотренные правила оформления. До подробных объяснений желательно получить копии материалов и восстановить последовательность событий. Само название протокола ещё не означает, что нарушение доказано.'
    },
    {
      q: 'Можно ли сохранить водительские права, если дело уже передано в суд?',
      a: 'Это зависит от состава нарушения, доказательств, соблюдения процедуры и возможных видов наказания. Юрист проверит протокол, схему, извещение, видеозаписи и другие материалы, подготовит позицию и ходатайства. Гарантировать сохранение прав до изучения дела нельзя.'
    },
    {
      q: 'Что делать, если страховая по ОСАГО отказала или выплатила мало?',
      a: 'Нужно получить решение и расчёт страховой, проверить осмотр и учтённые повреждения, при необходимости подтвердить размер ущерба. Для большинства споров потребителя со страховой действует обязательная последовательность: сначала заявление о восстановлении нарушенного права в страховую, затем обращение к финансовому уполномоченному и только после этого — суд.'
    },
    {
      q: 'Чем спор по КАСКО отличается от спора по ОСАГО?',
      a: 'ОСАГО регулируется специальным законом и возмещает вред в пределах страховой ответственности. КАСКО — добровольное страхование автомобиля, поэтому особенно важны условия конкретного договора и правил страхования: перечень рисков, исключения, сроки уведомления и способ возмещения.'
    },
    {
      q: 'Кто возмещает ущерб, если у виновника нет ОСАГО или выплаты недостаточно?',
      a: 'При отсутствии действующего полиса имущественный ущерб обычно предъявляется непосредственно ответственному лицу. Если страхового возмещения недостаточно, с причинителя вреда можно требовать подтверждённую разницу между возмещением и фактическим ущербом. В каждом случае нужно проверить участников, основания ответственности и расчёт.'
    },
    {
      q: 'Какие документы нужны автоюристу?',
      a: 'Желательно подготовить извещение и схему ДТП, протоколы и постановления, фотографии и видеозаписи, полисы, документы страховой, акт осмотра, расчёт или экспертное заключение, претензии и судебные документы. Если части материалов нет, юрист определит, что и где запросить.'
    },
    {
      q: 'Сколько времени занимает автомобильный спор?',
      a: 'Срок зависит от стадии дела и процедуры. Административное обжалование ограничено специальными сроками; страховой спор может включать рассмотрение заявления страховой, финансового уполномоченного и суда; взыскание с виновника зависит от экспертизы, переговоров и судебного разбирательства. Реалистичный срок можно оценить после изучения документов.'
    }
  ];

  return (
    <main>
      <Header />

      {/* ═══ БЛОК 1: HERO ═══ */}
      <MilitaryHero
        breadcrumbs={
          <>
            <Link href="/" style={{ color: 'var(--color-primary)' }}>Главная</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/grazhdanam/" style={{ color: 'var(--color-primary)' }}>Гражданам</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Автоюрист</span>
          </>
        }
        superTitle="Автомобильное право"
        title={
          <span style={{ display: 'block' }}>
            <span style={{ display: 'block' }}>Автоюрист</span>
            <span style={{ display: 'block' }}>в Липецке</span>
          </span>
        }
        subtitle={
          <>
            <style dangerouslySetInnerHTML={{__html: `
              @media (min-width: 992px) {
                .hero-sub-span-desktop {
                  white-space: nowrap !important;
                }
              }
            `}} />
            <span style={{ display: 'inline-block', maxWidth: '100%' }}>
              <span className="hero-sub-span-desktop" style={{ display: 'block' }}>
                Помогаем после ДТП, при риске лишения водительских прав
              </span>
              <span className="hero-sub-span-desktop" style={{ display: 'block' }}>
                и в спорах со страховыми компаниями.
              </span>
            </span>
          </>
        }
        primaryCtaText="Обсудить ситуацию"
        primaryCtaLink="#form"
        primaryCtaAnalytics="cta_click"
        primaryCtaSubtext={
          <>Если ситуация требует срочной помощи, позвоните: <a href="tel:+79103503111" data-analytics="phone_click">+7 (910) 350-31-11</a></>
        }
        trustItems={[
          { text: 'Изучим материалы ДТП, постановления и документы страховой' },
          { text: 'Определим, кому и какие требования можно предъявить' },
          { text: 'Подготовим документы и представим ваши интересы' },
        ]}
        imageUrl="/images/konopkin.jpg"
        imageName="Дмитрий Сергеевич Конопкин"
        imageSubtitle="Адвокат, председатель Коллегии адвокатов «Де-Юре»"
        imageObjectPosition="center 25%"
      />

      {/* ═══ БЛОК 2: СИТУАЦИИ, В КОТОРЫХ НУЖНА ПОМОЩЬ АВТОЮРИСТА ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span style={{ display: 'inline-block' }}>Ситуации, в которых</span> <br />
              <span style={{ display: 'inline-block' }}>нужна помощь автоюриста</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Помогаем разобраться в обстоятельствах ДТП, защитить водительские права</span> <br />
              <span style={{ display: 'inline-block' }}>и определить, с кого и в каком порядке требовать возмещение.</span>
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {[
              {
                tag: 'Лишение прав',
                title: <><span style={{ display: 'block' }}>Есть риск лишения</span><span style={{ display: 'block' }}>водительских прав</span></>,
                desc: 'Составлен протокол, дело передают в суд или постановление уже вынесено, но Вы не согласны с обстоятельствами и выводами.'
              },
              {
                tag: 'Оставление места ДТП',
                title: <><span style={{ display: 'block' }}>Обвиняют в оставлении</span><span style={{ display: 'block' }}>места ДТП</span></>,
                desc: 'Инспектор считает, что Вы уехали с места происшествия, хотя Вы не заметили столкновение, действовали по правилам либо события ДТП не было.'
              },
              {
                tag: 'Споры со страховой',
                title: <><span style={{ display: 'block' }}>Страховая отказала</span><span style={{ display: 'block' }}>или выплатила мало</span></>,
                desc: 'Возмещение по ОСАГО или КАСКО не покрывает ущерб, ремонт затягивается либо страховая исключила часть повреждений.'
              },
              {
                tag: 'ДТП без ОСАГО',
                title: <><span style={{ display: 'block' }}>У виновника аварии</span><span style={{ display: 'block' }}>нет полиса ОСАГО</span></>,
                desc: 'Страховая выплата недоступна, и ущерб нужно подтверждать и взыскивать непосредственно с ответственного лица.'
              },
              {
                tag: 'Оспаривание вины',
                title: <><span style={{ display: 'block' }}>Не согласны с выводами</span><span style={{ display: 'block' }}>о виновности в ДТП</span></>,
                desc: 'Схема, объяснения, видеозаписи или другие материалы не отражают реальную картину, а ответственность распределена без учёта важных обстоятельств.'
              },
              {
                tag: 'Защита от требований',
                title: <><span style={{ display: 'block' }}>С Вас требуют</span><span style={{ display: 'block' }}>завышенный ущерб</span></>,
                desc: 'Потерпевший или страховая предъявили претензию либо иск, но размер, состав повреждений или связь с ДТП вызывают сомнения.'
              }
            ].map((item, i) => (
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
                  lineHeight: 1.4,
                  position: 'relative',
                  zIndex: 1
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '15px',
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
        </div>
      </section>

      {/* ═══ БЛОК 3: СРОЧНЫЕ СИТУАЦИИ ═══ */}
      <section style={{ background: 'var(--color-deep-blue)', padding: '64px 0 56px', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', marginBottom: '36px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontFamily: 'var(--font-serif)', color: '#FFFFFF', marginBottom: '12px', marginTop: 0, lineHeight: 1.25 }}>
              <span style={{ display: 'inline-block' }}>Когда важно обратиться</span> <br />
              <span style={{ display: 'inline-block' }}>без промедления</span>
            </h2>
            <div style={{ width: '60px', height: '2px', background: 'var(--color-gold)', marginBottom: '20px' }}></div>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', marginBottom: '40px', maxWidth: '720px', lineHeight: 1.6 }}>
              В автомобильных делах часть доказательств быстро утрачивается, а срок обжалования постановления по делу об административном правонарушении обычно составляет десять дней со дня вручения или получения его копии.
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '20px', marginBottom: '40px' }}>
            {[
              {
                title: 'Составляют протокол с риском лишения прав',
                desc: 'Важно проверить формулировки, заявить замечания и ходатайства, получить копии материалов.',
                link: '/grazhdanam/avtoyurist/lishenie-voditelskih-prav/'
              },
              {
                title: 'Вменяют оставление места ДТП',
                desc: 'До объяснений нужно восстановить обстоятельства события и оценить, образуют ли действия состав нарушения.',
                link: '/grazhdanam/avtoyurist/ostavlenie-mesta-dtp/'
              },
              {
                title: 'Не согласны со схемой или объяснениями',
                desc: 'Следует сохранить записи регистратора, фото, контакты свидетелей и сведения с камер до их удаления.',
                link: '/grazhdanam/avtoyurist/osparivanie-viny-v-dtp/'
              },
              {
                title: 'В ДТП пострадали люди',
                desc: 'Нужна отдельная оценка возможной административной или уголовной ответственности.',
                link: '#form'
              }
            ].map((item, i) => (
              <a key={i} href={item.link} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }} data-analytics="urgent_card_click">
                <div
                  className="urgent-card"
                  style={{
                    background: 'linear-gradient(135deg, #FAF7F2 0%, #F3ECDF 100%)',
                    padding: '30px 24px',
                    borderTop: '4px solid var(--color-gold)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px' }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B08D57" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                      </svg>
                      <div style={{ fontSize: '16.5px', fontWeight: 700, color: 'var(--color-deep-blue)', lineHeight: 1.35, fontFamily: 'var(--font-serif)' }}>
                        {item.title}
                      </div>
                    </div>
                    <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '14px', lineHeight: 1.55, margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.08)',
            borderLeft: '4px solid var(--color-gold)',
            padding: '16px 24px',
            marginBottom: '32px',
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '14px',
            lineHeight: 1.6
          }}>
            <span style={{ display: 'inline-block' }}>
              <strong style={{ color: '#FFFFFF' }}>Юридическая справка:</strong> Десятидневный срок следует из&nbsp;статьи 30.3 КоАП&nbsp;РФ
            </span> <br className="hidden-mobile" />
            <span style={{ display: 'inline-block' }}>
              для обжалования постановлений по&nbsp;делам об&nbsp;административных правонарушениях.
            </span>
          </div>

          <style dangerouslySetInnerHTML={{__html: `
            .urgent-card {
              transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
            }
            .urgent-card:hover {
              transform: translateY(-6px);
              box-shadow: 0 18px 36px rgba(0,0,0,0.28) !important;
            }
            .btn-urgent-outline {
              border: 1px solid rgba(255,255,255,0.8) !important;
              color: #FFFFFF !important;
              background: transparent !important;
              transition: all 0.3s ease !important;
            }
            .btn-urgent-outline:hover {
              background: rgba(255,255,255,0.18) !important;
              color: #FFFFFF !important;
              border-color: #FFFFFF !important;
            }
            .btn-urgent-call {
              display: inline-block !important;
              border-radius: 0 !important;
              text-decoration: none !important;
              background-color: var(--color-gold) !important;
              color: var(--color-deep-blue) !important;
              font-weight: 700 !important;
              transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
              border: 1px solid var(--color-gold) !important;
            }
            .btn-urgent-call:hover {
              background-color: #FFFFFF !important;
              color: #0B1C2A !important;
              border-color: #FFFFFF !important;
              transform: translateY(-2px);
            }
            .service-card-smooth {
              transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease !important;
            }
            .service-card-smooth:hover {
              transform: translateY(-5px);
              box-shadow: 0 14px 30px rgba(23, 50, 77, 0.08) !important;
              border-color: rgba(193, 160, 102, 0.45) !important;
            }
            .service-card-smooth:hover .card-arrow svg {
              transform: translateX(4px);
            }
            .service-card-smooth .card-arrow svg {
              transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            }
          `}} />

          {/* Зона связи */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '28px', display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <a href="tel:+79103503111" style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.02em' }} data-analytics="phone_click">
              +7 (910) 350-31-11
            </a>
            <a href="tel:+79103503111" className="btn-urgent-call" style={{ padding: '14px 28px', fontSize: '15px' }} data-analytics="phone_click">
              Позвонить адвокату
            </a>
            <a href="#form" className="btn btn-urgent-outline" style={{ padding: '14px 28px', fontSize: '15px' }}>
              Описать ситуацию
            </a>
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
              Перезвоним вам в течение 15 минут в рабочее время
            </span>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: НАПРАВЛЕНИЯ ПОМОЩИ (7 КАРТОЧЕК + СТА КАРТОЧКА) ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Направления помощи автоюриста</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Выберите подходящее направление. Если Вы не уверены, к какой услуге относится вопрос,</span> <br />
              <span style={{ display: 'inline-block' }}>опишите ситуацию — мы изучим материалы и подскажем, с чего начать.</span>
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '20px', marginBottom: '32px' }}>
            {[
              {
                title: 'Защита при лишении водительских прав',
                desc: 'Проверим материалы дела, подготовим позицию и представим Ваши интересы в суде или при обжаловании.',
                link: '/grazhdanam/avtoyurist/lishenie-voditelskih-prav/'
              },
              {
                title: 'Защита при оставлении места ДТП',
                desc: 'Разберём обстоятельства происшествия и оценим, есть ли основания для привлечения к ответственности.',
                link: '/grazhdanam/avtoyurist/ostavlenie-mesta-dtp/'
              },
              {
                title: 'Споры по ОСАГО',
                desc: 'Поможем при отказе, недоплате, споре о ремонте или затягивании страхового возмещения.',
                link: '/grazhdanam/avtoyurist/spory-po-osago/'
              },
              {
                title: 'Споры по КАСКО',
                desc: 'Проверим условия договора и основания решения страховой, подготовим претензию и требования.',
                link: '/grazhdanam/avtoyurist/spory-po-kasko/'
              },
              {
                title: 'Взыскание ущерба с виновника ДТП',
                desc: 'Поможем взыскать непокрытую часть ущерба или защититься от необоснованных требований.',
                link: '/grazhdanam/avtoyurist/vzyskanie-ushcherba-s-vinovnika-dtp/'
              },
              {
                title: 'Взыскание ущерба при ДТП без ОСАГО',
                desc: 'Зафиксируем размер ущерба и подготовим требования непосредственно к ответственному лицу.',
                link: '/grazhdanam/avtoyurist/vzyskanie-ushcherba-pri-dtp-bez-osago/'
              },
              {
                title: 'Оспаривание вины в ДТП',
                desc: 'Проанализируем схему, записи, объяснения и экспертизы, чтобы выстроить позицию по обстоятельствам аварии.',
                link: '/grazhdanam/avtoyurist/osparivanie-viny-v-dtp/'
              }
            ].map((dir, i) => (
              <a key={i} href={dir.link} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }} data-analytics="service_card_click">
                <div className="card service-card service-card-smooth" style={{
                  height: '100%',
                  padding: '26px 24px',
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '0',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderTop: '3px solid var(--color-primary)',
                  cursor: 'pointer'
                }}>
                  <div>
                    <h3 style={{ margin: '0 0 10px 0', fontSize: '17px', color: 'var(--color-deep-blue)', lineHeight: 1.35, fontFamily: 'var(--font-serif)' }}>
                      {dir.title}
                    </h3>
                    <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                      {dir.desc}
                    </p>
                  </div>
                  <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontSize: '13.5px', fontWeight: 600, marginTop: '18px' }}>
                    <span>Подробнее</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </div>
                </div>
              </a>
            ))}

            {/* Карточка 8: «Не нашли свою ситуацию?», занимающая доступное пространство в строке с 7-й картой */}
            <div 
              className="card service-card service-card-span-2" 
              style={{ 
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
              <style dangerouslySetInnerHTML={{ __html: `
                .service-card-span-2 {
                  grid-column: span 2;
                }
                @media (max-width: 991px) {
                  .service-card-span-2 {
                    grid-column: span 1 !important;
                    flex-direction: column !important;
                    align-items: flex-start !important;
                  }
                }
                .white-btn-custom {
                  background-color: var(--color-white) !important;
                  color: #10273B !important;
                  border: 1px solid var(--color-white) !important;
                  white-space: nowrap;
                  font-weight: 600;
                  padding: 14px 28px !important;
                  transition: all 0.3s ease !important;
                }
                .white-btn-custom:hover {
                  background-color: var(--color-primary) !important;
                  color: var(--color-white) !important;
                  border-color: var(--color-primary) !important;
                }
              `}} />
              <div style={{ flex: '1 1 300px' }}>
                <h3 style={{ margin: '0 0 10px 0', fontSize: '24px', fontFamily: 'var(--font-serif)', color: 'var(--color-white)', lineHeight: 1.3 }}>
                  Не нашли свою ситуацию?
                </h3>
                <p style={{ margin: '0', fontSize: '16px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.55, maxWidth: '580px' }}>
                  <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Опишите ваш автомобильный вопрос в форме. Изучим имеющиеся документы</span>{' '}<span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и предложим возможные варианты решения.</span>
                </p>
              </div>
              <div style={{ flexShrink: 0 }}>
                <a 
                  href="#form" 
                  className="btn white-btn-custom" 
                  style={{ display: 'inline-block', textAlign: 'center', fontSize: '15px' }}
                >
                  Обсудить ситуацию
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 5: КУРАТОР НАПРАВЛЕНИЯ ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name="Дмитрий Сергеевич Конопкин"
        position="Адвокат, председатель Коллегии адвокатов «Де-Юре»"
        imageUrl="/images/konopkin.jpg"
        imagePosition="center 5%"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Дмитрий Сергеевич ведёт автомобильные споры: помогает при взыскании ущерба и защите от требований о его возмещении, в спорах со страховыми компаниями и других делах, связанных с ДТП.
          </span>,
          <span key="2" style={{ color: 'var(--color-deep-blue)', display: 'block', marginTop: '10px' }}>
            Юридическая практика — с 2016 года. Опыт работы в Следственном комитете помогает системно оценивать материалы, доказательства и процессуальные риски.
          </span>,
          <ul key="3" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>
                <span style={{ display: 'inline-block' }}>Защита при риске лишения водительских прав</span> <br />
                <span style={{ display: 'inline-block' }}>и по&nbsp;делам об&nbsp;оставлении места ДТП</span>
              </span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>
                <span style={{ display: 'inline-block' }}>Споры по ОСАГО и КАСКО со&nbsp;страховыми</span> <br />
                <span style={{ display: 'inline-block' }}>компаниями и финансовым уполномоченным</span>
              </span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>
                <span style={{ display: 'inline-block' }}>Взыскание ущерба с&nbsp;виновника ДТП,</span> <br />
                <span style={{ display: 'inline-block' }}>защита от&nbsp;требований и оспаривание вины</span>
              </span>
            </li>
          </ul>,
          <a key="4" href="/specialisty/konopkin-dmitriy-sergeevich/" style={{ display: 'inline-block', marginTop: '16px', fontSize: '14px', color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }} data-analytics="specialist_profile_click">
            Подробнее об адвокате Дмитрии Сергеевиче Конопкине →
          </a>
        ]}
        buttonText="Задать вопрос Дмитрию Сергеевичу"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 6: ПРИМЕРЫ ИЗ ПРАКТИКИ ═══ */}
      <CasesBlock
        title="Примеры из практики"
        showAllLink="/praktika/"
        showAllText="Смотреть все дела"
        showDemoWarning={true}
        cases={cases}
      />

      {/* ═══ БЛОК 7: КАК ПРОХОДИТ РАБОТА ═══ */}
      <ProcessBlock
        title="Как проходит работа"
        subtitle={<><span style={{ display: 'inline-block' }}>Прозрачный пошаговый процесс от первичного анализа материалов</span> <br /><span style={{ display: 'inline-block' }}>до исполнения решения.</span></>}
        alignTitle="center"
        steps={[
          {
            num: '01',
            title: 'Разбираемся в ситуации',
            desc: 'Уточняем, что произошло, на какой стадии находится дело и какой результат для Вас важен.'
          },
          {
            num: '02',
            title: 'Изучаем документы и доказательства',
            desc: 'Проверяем схему ДТП, протоколы, постановления, записи, фотографии, документы страховой, расчёты и экспертизы.'
          },
          {
            num: '03',
            title: 'Предлагаем правовой маршрут',
            desc: 'Определяем, кого привлекать к спору, какие требования заявлять, какие сроки учитывать и какие доказательства получить.'
          },
          {
            num: '04',
            title: 'Готовим документы и ведём переговоры',
            desc: 'Составляем объяснения, жалобы, претензии и обращения; взаимодействуем со страховой и финансовым уполномоченным.'
          },
          {
            num: '05',
            title: 'Представляем интересы и сопровождаем',
            desc: 'Участвуем в суде и обжаловании, а после решения помогаем с его исполнением в согласованном объёме.'
          },
          {
            isBanner: true,
            title: 'Дистанционный формат',
            desc: 'Начать можно дистанционно: отправить копии материалов и обсудить ситуацию по телефону или видеосвязи. Личное участие согласовывается, если оно необходимо для конкретного дела.'
          }
        ]}
        ctaTitle="Готовы обсудить вашу ситуацию"
        ctaSubtitle="Опишите обстоятельства происшествия — юрист подскажет план дальнейших действий."
        ctaButtonText="Обсудить ситуацию"
        ctaButtonHref="#form"
      />

      {/* ═══ БЛОК 8: СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость услуг автоюриста"
        subtitle="Стоимость зависит от стадии дела, объёма материалов, необходимости экспертизы, количества участников и выбранного формата помощи."
        tiers={[
          {
            title: 'Консультация автоюриста',
            subtitle: 'Первичный разбор ситуации',
            price: 'от 3 000 ₽',
            features: [
              { name: 'Правовой анализ обстоятельств ДТП', value: '✓' },
              { name: 'Оценка имеющихся документов и рисков', value: '✓' },
              { name: 'Определение надлежащего адресата требований', value: '✓' },
              { name: 'Пошаговые рекомендации по дальнейшим действиям', value: '✓' }
            ],
            buttonText: 'Заказать консультацию',
            buttonHref: '#form'
          },
          {
            title: 'Анализ материалов',
            subtitle: 'Правовая позиция по делу',
            price: 'от 7 000 ₽',
            popular: true,
            badgeText: 'Популярно',
            features: [
              { name: 'Детальное изучение схемы, протоколов и видео', value: '✓' },
              { name: 'Выявление процессуальных нарушений и ошибок', value: '✓' },
              { name: 'Аудит расчёта ущерба и акта страховой', value: '✓' },
              { name: 'Подготовка письменной стратегии защиты', value: '✓' }
            ],
            buttonText: 'Заказать анализ',
            buttonHref: '#form'
          },
          {
            title: 'Подготовка документов',
            subtitle: 'Претензии, жалобы, иски',
            price: 'от 10 000 ₽',
            features: [
              { name: 'Жалоба на постановление по делу об АП', value: '✓' },
              { name: 'Претензия в страховую компанию по ОСАГО/КАСКО', value: '✓' },
              { name: 'Обращение к финансовому уполномоченному', value: '✓' },
              { name: 'Исковое заявление в суд о взыскании ущерба', value: '✓' }
            ],
            buttonText: 'Подготовить документы',
            buttonHref: '#form'
          },
          {
            title: 'Представительство',
            subtitle: 'Полное ведение спора «под ключ»',
            price: 'от 25 000 ₽',
            features: [
              { name: 'Досудебная работа и переговоры со страховой', value: '✓' },
              { name: 'Представительство во всех судебных заседаниях', value: '✓' },
              { name: 'Назначение судебной автотехнической экспертизы', value: '✓' },
              { name: 'Взыскание судебных расходов с проигравшей стороны', value: '✓' }
            ],
            buttonText: 'Комплексная защита',
            buttonHref: '#form'
          }
        ]}
        ctaTitle="Не знаете, какой формат помощи выбрать?"
        ctaSubtitle="Опишите ситуацию — автоюрист изучит материалы ДТП или страхового дела и предложит оптимальный вариант."
        ctaButtonText="Уточнить стоимость"
        ctaButtonLink="#form"
        disclaimer="Точную стоимость определим после изучения ситуации и заранее согласуем состав работ в договоре. Оплата вознаграждения фиксируется до начала работы и не изменится без согласования с Вами."
      />

      {/* ═══ БЛОК 9: FAQ ═══ */}
      <FAQBlock
        superTitle="Частые вопросы"
        title={
          <span style={{ display: 'block' }}>
            <span style={{ display: 'block' }}>Ответы на</span>
            <span style={{ display: 'block' }}>частые вопросы</span>
          </span>
        }
        subtitle="Разъяснения автоюриста по ДТП, лишению прав и страховым спорам"
        ctaText="Задать свой вопрос"
        ctaLink="#form"
        faqs={faqs}
      />

      {/* ═══ БЛОК 10: ФИНАЛЬНАЯ ФОРМА ═══ */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px', padding: '80px 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', background: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>
                  Связаться с нами
                </span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                Нужна помощь автоюриста?
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Кратко опишите ситуацию. Мы уточним обстоятельства, скажем, какие материалы потребуются, и предложим следующий шаг.
              </p>

              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация автоюриста</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Позвоните прямо сейчас: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (910) 350-31-11</a>
                </p>
              </div>

              <div style={{ background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55, marginTop: '20px' }}>
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Безопасность данных:</strong>
                Не указывайте в форме паспортные данные, реквизиты полиса и другие конфиденциальные сведения. Безопасный способ передачи документов согласуем после связи.
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm 
                title="Оставить заявку"
                subtitle="Оставьте контактные данные, автоюрист свяжется с вами для первичного разбора ситуации."
                buttonText="Отправить заявку"
                commentPlaceholder="Кратко опишите ситуацию или вопрос…"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
