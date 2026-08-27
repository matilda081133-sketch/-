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
import PricingBlock from '@/components/PricingBlock';
import ProcessBlock from '@/components/ProcessBlock';

export default function SporyPoOsagoClient() {
  const cases: CaseData[] = [
    {
      category: 'Доплата возмещения',
      title: 'Доплата после заниженного расчёта',
      problem: 'Страховая перечислила сумму, которая не учитывала часть повреждений и необходимых восстановительных работ.',
      action: 'Изучили страховое дело и материалы осмотра, организовали техническую оценку, сформулировали мотивированные требования и прошли обязательную досудебную стадию.',
      result: 'Клиент получил дополнительное страховое возмещение и подтверждённые расходы в размере, установленном по итогам рассмотрения.'
    },
    {
      category: 'Отказ в выплате',
      title: 'Отмена необоснованного отказа',
      problem: 'Страховщик отказал в страховом возмещении, сославшись на якобы несоответствие повреждений обстоятельствам ДТП.',
      action: 'Сопоставили материалы аварии, фотографии с места происшествия и технические выводы, подготовили мотивированные возражения и досудебное обращение.',
      result: 'Отказ пересмотрен, страховой случай признан и урегулирован в согласованной форме.'
    },
    {
      category: 'Нарушение ремонта',
      title: 'Ответственность за сорванный ремонт',
      problem: 'Автомобиль передали на СТО по направлению страховщика, но ремонт затянулся, а затем машину вернули без качественного устранения повреждений.',
      action: 'Зафиксировали хронологию, претензионную переписку и фактическое состояние автомобиля, предъявили требования страховщику и продолжили защиту интересов.',
      result: 'В пользу доверителя взысканы предусмотренные законом суммы за ненадлежащее исполнение обязательства по организации восстановительного ремонта.'
    }
  ];

  const faqs = [
    {
      q: 'Страховая мало выплатила по ОСАГО. Что делать?',
      a: 'Не ремонтируйте автомобиль до необходимой фиксации. Соберите заявление, акт осмотра, расчёт, сведения о выплате и фотографии. После проверки определяется, нужна ли техническая оценка и какое требование направлять страховщику.'
    },
    {
      q: 'Можно ли сразу подать иск на страховую?',
      a: 'Для большинства споров гражданина со страховщиком по ОСАГО сначала требуется обратиться к страховщику, а затем к финансовому уполномоченному. Возможность суда и предмет иска оцениваются по пройденным стадиям.'
    },
    {
      q: 'Когда нужна независимая экспертиза?',
      a: 'Когда без специальных знаний нельзя обосновать объём повреждений, стоимость восстановления, причинную связь или недостатки ремонта. Её проводят после проверки соблюдения процедуры осмотра страховщиком.'
    },
    {
      q: 'Что делать, если страховая отказала в выплате?',
      a: 'Получить письменный мотивированный отказ, сохранить подтверждение подачи всех документов и проверить указанное основание. Далее формируется заявление о восстановлении нарушенного права и, при необходимости, обращение к финансовому уполномоченному.'
    },
    {
      q: 'Кто отвечает за задержку или плохой ремонт по направлению?',
      a: 'Обстоятельства нужно проверять по направлению, срокам, документам СТО и переписке. Страховщик отвечает за надлежащую организацию восстановительного ремонта в пределах закона, но конкретные требования зависят от нарушения и доказательств.'
    },
    {
      q: 'Если выплаты не хватило из-за лимита ОСАГО, что дальше?',
      a: 'После определения обязательства страховщика разница может взыскиваться с ответственного лица. Это отдельный спор: на странице предусмотрена ссылка на услугу взыскания ущерба с виновника ДТП.'
    },
    {
      q: 'Сколько длится спор по ОСАГО?',
      a: 'Зависит от стадии, экспертизы, ответа страховщика, рассмотрения финансовым уполномоченным и суда. На первичной оценке рассчитываются ближайший срок и ориентировочная последовательность именно по Вашим документам.'
    },
    {
      q: 'Можно ли поручить дело полностью?',
      a: 'Да, объём может включать документы, взаимодействие со страховщиком, финансового уполномоченного и представительство в суде. Полномочия, участие клиента и внешние расходы фиксируются в договоре.'
    }
  ];

  return (
    <main>
      <Header />

      {/* ═══ БЛОК 1: HERO ═══ */}
      <MilitaryHero
        breadcrumbs={
          <>
            <Link href="/">Главная</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/grazhdanam/">Гражданам</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/grazhdanam/avtoyurist/">Автоюрист</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span>Споры по ОСАГО</span>
          </>
        }
        superTitle="Автомобильные споры"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Споры по ОСАГО
            </span>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              в Липецке
            </span>
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
                Если страховая мало выплатила, отказала или нарушила порядок ремонта,
              </span>
              <span className="hero-sub-span-desktop" style={{ display: 'block' }}>
                проверим документы и расчёт, определим обязательный досудебный маршрут
              </span>
              <span className="hero-sub-span-desktop" style={{ display: 'block' }}>
                и подготовим требования.
              </span>
            </span>
          </>
        }
        primaryCtaText="Проверить ситуацию"
        primaryCtaLink="#form"
        primaryCtaAnalytics="cta_click"
        primaryCtaSubtext={
          <>
            <span style={{ display: 'inline-block' }}>Для первичной оценки сообщите дату ДТП, страховую компанию,</span> <br className="hidden-mobile" />
            <span style={{ display: 'inline-block' }}>форму возмещения и полученный ответ: <a href="tel:+79103503111" data-analytics="phone_click">+7 (910) 350-31-11</a></span>
          </>
        }
        trustItems={[
          {
            text: (
              <>
                <span style={{ display: 'inline-block' }}>Проверим выплату, отказ, направление</span> <br className="hidden-mobile" />
                <span style={{ display: 'inline-block' }}>на ремонт и материалы осмотра</span>
              </>
            )
          },
          { text: 'Организуем доказательства и подготовим обращение к страховщику' },
          { text: 'Сопроводим обращение к финансовому уполномоченному и в суд' }
        ]}
        imageUrl="/images/konopkin.jpg"
        imageName="Дмитрий Сергеевич Конопкин"
        imageSubtitle="Адвокат, председатель Коллегии адвокатов «Де-Юре»"
        imageObjectPosition="center 25%"
      />

      {/* ═══ БЛОК 2: С КАКИМИ НАРУШЕНИЯМИ ОБРАЩАЮТСЯ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Когда спор со страховой</span> <br />
              <span style={{ display: 'inline-block' }}>требует проверки</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Помогаем потерпевшим при любых разногласиях со страховой компанией:</span> <br className="hidden-mobile" />
              <span style={{ display: 'inline-block' }}>от занижения выплаты и затягивания сроков до срыва ремонта на СТО.</span>
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '32px' }}>
            {[
              {
                tag: 'Недоплата',
                title: 'Страховая выплатила меньше ожидаемого',
                desc: 'Не учтены повреждения, работы или детали; спорна причинная связь; расчёт не позволяет восстановить автомобиль.'
              },
              {
                tag: 'Отказ',
                title: 'В страховой выплате отказали',
                desc: 'Страховщик ссылается на отсутствие страхового случая, неполный пакет документов, обстоятельства ДТП или иные основания.'
              },
              {
                tag: 'Сроки',
                title: 'Затянули принятие решения',
                desc: 'Нет страховой выплаты, направления на ремонт или мотивированного письменного ответа в установленный законом 20-дневный срок.'
              },
              {
                tag: 'СТО',
                title: 'Проблемы с направлением на ремонт',
                desc: 'Станция техобслуживания не принимает автомобиль, требует доплату, не согласует работы или нарушает требования закона.'
              },
              {
                tag: 'Качество',
                title: 'Ремонт затягивается или выполнен плохо',
                desc: 'Нарушены сроки восстановительного ремонта, часть повреждений не устранена, обнаружены дефекты или авто вернули без ремонта.'
              },
              {
                tag: 'Убытки',
                title: 'Не возместили связанные убытки',
                desc: 'Отказ в компенсации расходов на эвакуацию, независимую экспертизу, хранение транспортного средства или утрату товарной стоимости (УТС).'
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
                  fontSize: '18px',
                  fontWeight: 600,
                  color: 'var(--color-deep-blue)',
                  margin: '0 0 14px 0',
                  lineHeight: 1.35,
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

      {/* ═══ БЛОК 3: ВАРИАНТЫ РЕШЕНИЯ И МАРШРУТЫ СПОРА ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Маршруты урегулирования</span> <br />
              <span style={{ display: 'inline-block' }}>спора по ОСАГО</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Последовательность защиты прав зависит от стадии урегулирования и статуса спора.</span> <br />
              <span style={{ display: 'inline-block' }}>Определяем порядок действий: претензия страховщику, финансовый омбудсмен или судебный иск.</span>
            </p>
          </div>

          {/* Темно-синяя карточка-навигатор: 3 этапа стратегии спора */}
          <div style={{
            background: 'linear-gradient(135deg, #10273B 0%, #17375E 50%, #0D1E2D 100%)',
            border: '1px solid rgba(193, 160, 102, 0.4)',
            borderTop: '3px solid var(--color-gold)',
            boxShadow: '0 8px 30px rgba(16, 39, 59, 0.18)',
            padding: '36px 32px',
            marginBottom: '32px',
            position: 'relative'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '24px', position: 'relative', zIndex: 1 }}>
              <div>
                <h3 style={{ fontSize: 'clamp(20px, 2.5vw, 24px)', fontFamily: 'var(--font-serif)', color: '#FFFFFF', margin: 0, lineHeight: 1.25 }}>
                  3 этапа стратегии спора
                </h3>
              </div>
              <div style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.75)', maxWidth: '520px', lineHeight: 1.5 }}>
                <span style={{ display: 'block' }}>Позволяет безошибочно определить порядок действий:</span>
                <span style={{ display: 'block' }}>претензия страховщику, финансовый омбудсмен или иск в суд.</span>
              </div>
            </div>

            <div className="grid grid-3" style={{ gap: '16px', position: 'relative', zIndex: 1 }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '22px 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <h4 style={{ fontSize: '16.5px', color: '#FFFFFF', margin: 0, fontWeight: 600, lineHeight: 1.35, display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', flexShrink: 0 }}>01</span>
                  <span>
                    <span style={{ display: 'block' }}>Фиксируем осмотр</span>
                    <span style={{ display: 'block' }}>и доказательства</span>
                  </span>
                </h4>
                <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5, margin: 0 }}>
                  Заявление о страховом случае, акт осмотра, калькуляция ущерба, документы ГИБДД и фиксация повреждений.
                </p>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '22px 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <h4 style={{ fontSize: '16.5px', color: '#FFFFFF', margin: 0, fontWeight: 600, lineHeight: 1.35, display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', flexShrink: 0 }}>02</span>
                  <span>
                    <span style={{ display: 'block' }}>Проверяем расчёт</span>
                    <span style={{ display: 'block' }}>по Единой методике</span>
                  </span>
                </h4>
                <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5, margin: 0 }}>
                  Сопоставляем калькуляцию с правилами Банка России, определяем скрытые повреждения и необходимость независимой оценки.
                </p>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '22px 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <h4 style={{ fontSize: '16.5px', color: '#FFFFFF', margin: 0, fontWeight: 600, lineHeight: 1.35, display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', flexShrink: 0 }}>03</span>
                  <span>
                    <span style={{ display: 'block' }}>Проходим досудебный</span>
                    <span style={{ display: 'block' }}>порядок и суд</span>
                  </span>
                </h4>
                <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5, margin: 0 }}>
                  Претензия страховщику, обращение к финансовому уполномоченному, а при отказе — взыскание в судебном порядке.
                </p>
              </div>
            </div>
          </div>

          {/* 2 КРУПНЫЕ КАРТОЧКИ НАПРАВЛЕНИЙ */}
          <div className="grid grid-2" style={{ gap: '28px', marginBottom: '32px' }}>
            
            {/* Карточка 1: Досудебное урегулирование и финансовый омбудсмен */}
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
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.3 }}>
                  <span style={{ display: 'inline-block' }}>Досудебный порядок и омбудсмен</span>{' '}
                  <span style={{ display: 'inline-block' }}>(Претензия / Служба)</span>
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                <span style={{ display: 'inline-block' }}>Обязательный этап досудебного урегулирования спора со страховой организацией</span>{' '}
                <span style={{ display: 'inline-block' }}>по закону об ОСАГО и закону о финансовом уполномоченном № 123-ФЗ.</span>
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px', lineHeight: 1.35 }}>
                      <span style={{ display: 'inline-block' }}>Фиксация первичных</span>{' '}
                      <span style={{ display: 'inline-block' }}>документов ДТП</span>
                    </strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      Сбор извещения о ДТП, документов ГИБДД, полиса ОСАГО, фото- и видеоматериалов события.
                    </span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px', lineHeight: 1.35 }}>
                      <span style={{ display: 'inline-block' }}>Запрос материалов</span>{' '}
                      <span style={{ display: 'inline-block' }}>страхового дела</span>
                    </strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      Получение акта осмотра страховщика, калькуляции, направления на СТО или письменного решения об отказе.
                    </span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px', lineHeight: 1.35 }}>
                      Заявление о восстановлении нарушенного права
                    </strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      Подготовка мотивированной претензии со ссылками на Закон об ОСАГО, Единую методику и доказательства недоплаты.
                    </span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px', lineHeight: 1.35 }}>
                      <span style={{ display: 'inline-block' }}>Обращение к финансовому</span>{' '}
                      <span style={{ display: 'inline-block' }}>уполномоченному</span>
                    </strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      Формирование полного комплекта приложений и сопровождение рассмотрения спора службой омбудсмена.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Карточка 2: Судебная защита и экспертиза */}
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
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.3 }}>
                  <span style={{ display: 'inline-block' }}>Судебная защита и автоэкспертиза</span>{' '}
                  <span style={{ display: 'inline-block' }}>(Суд / Экспертиза)</span>
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                <span style={{ display: 'inline-block' }}>Судебное представительство, проведение независимой технической экспертизы</span>{' '}
                <span style={{ display: 'inline-block' }}>и взыскание полного страхового возмещения с неустойками.</span>
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px', lineHeight: 1.35 }}>
                      <span style={{ display: 'inline-block' }}>Независимая автотехническая</span>{' '}
                      <span style={{ display: 'inline-block' }}>экспертиза</span>
                    </strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      Установление реального объёма повреждений, стоимости восстановительного ремонта и утраты товарной стоимости.
                    </span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px', lineHeight: 1.35 }}>
                      <span style={{ display: 'inline-block' }}>Взыскание штрафных</span>{' '}
                      <span style={{ display: 'inline-block' }}>санкций со страховщика</span>
                    </strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      Расчёт неустойки за каждый день просрочки (1% в день), финансовой санкции и 50% потребительского штрафа.
                    </span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px', lineHeight: 1.35 }}>
                      <span style={{ display: 'inline-block' }}>Подготовка искового</span>{' '}
                      <span style={{ display: 'inline-block' }}>заявления в суд</span>
                    </strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      Формирование иска к страховщику либо совместного иска со взысканием сверхлимитного ущерба с виновника ДТП.
                    </span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px', lineHeight: 1.35 }}>
                      <span style={{ display: 'inline-block' }}>Представительство в суде</span>{' '}
                      <span style={{ display: 'inline-block' }}>и исполнение</span>
                    </strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      Защита интересов во всех инстанциях, назначение судебной экспертизы и предъявление исполнительного листа в банк.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Важно: полупрозрачная карточка */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.65)',
            backdropFilter: 'blur(6px)',
            padding: '22px 28px',
            border: '1px solid rgba(23, 50, 77, 0.08)',
            borderLeft: '4px solid var(--color-gold)',
            fontSize: '14px',
            color: 'var(--color-deep-blue)',
            lineHeight: 1.6,
            marginBottom: '32px'
          }}>
            <strong style={{ color: 'var(--color-primary)' }}>Правовая рамка:</strong> По общему правилу страховщик в течение 20 календарных дней (кроме нерабочих праздничных дней) обязан произвести страховую выплату, выдать направление на ремонт или направить мотивированный отказ. Досудебное обращение к финансовому уполномоченному обязательно для граждан при имущественных требованиях по ОСАГО.
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#form" className="btn btn-primary" style={{ display: 'inline-block', padding: '14px 32px' }}>
              Оценить расчёт и решение страховой
            </a>
          </div>

        </div>
      </section>

      {/* ═══ БЛОК 4: ЧТО СДЕЛАЕТ ЮРИСТ ПО СПОРАМ ПО ОСАГО ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Что сделает юрист</span> <br />
              <span style={{ display: 'inline-block' }}>по спорам по ОСАГО</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Полный комплекс процессуальной работы — от проверки калькуляции страховщика</span> <br className="hidden-mobile" />
              <span style={{ display: 'inline-block' }}>до фактического зачисления денежных средств или качественного ремонта.</span>
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '48px' }}>
            {[
              {
                num: '01',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Определит</span>
                    <span style={{ display: 'block' }}>предмет спора</span>
                  </>
                ),
                desc: 'Отделит требование к страховщику от требования к виновнику ДТП, СТО или дорожной службе.'
              },
              {
                num: '02',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Проверит</span>
                    <span style={{ display: 'block' }}>процедуру</span>
                  </>
                ),
                desc: 'Изучит первичное заявление, комплект документов, организацию осмотра, сроки, ответы и форму возмещения.'
              },
              {
                num: '03',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Проверит расчёт</span>
                    <span style={{ display: 'block' }}>и доказательства</span>
                  </>
                ),
                desc: 'Сопоставит акт осмотра, калькуляцию, характер повреждений, ремонтные документы СТО и заключения специалистов.'
              },
              {
                num: '04',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Сформулирует</span>
                    <span style={{ display: 'block' }}>требования</span>
                  </>
                ),
                desc: 'Подготовит заявление страховщику, обращение финансовому уполномоченному, возражения и судебный иск.'
              },
              {
                num: '05',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Представит</span>
                    <span style={{ display: 'block' }}>интересы</span>
                  </>
                ),
                desc: 'Организует профессиональное взаимодействие со страховщиком, финансовым омбудсменом, экспертом и судом.'
              },
              {
                num: '06',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Зафиксирует</span>
                    <span style={{ display: 'block' }}>следующий шаг</span>
                  </>
                ),
                desc: 'После каждого этапа объяснит результат, процессуальные риски, сроки и расходы без гарантии исхода.'
              }
            ].map((item, idx) => (
              <div key={idx} className="hover-lift" style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '38px 24px 30px 24px',
                border: '1px solid var(--color-border)',
                borderTop: '4px solid var(--color-gold)',
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                borderRadius: '0',
                position: 'relative',
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)',
                transition: 'all 0.3s ease'
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
                <div>
                  <h3 style={{ margin: '8px 0 10px 0', fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)' }}>
                    {item.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ГРАНИЦЫ УСЛУГИ: ЕДИНАЯ ТЕМНО-СИНЯЯ КАРТОЧКА */}
          <div style={{
            background: 'linear-gradient(135deg, #10273B 0%, #17375E 50%, #0D1E2D 100%)',
            border: '1px solid rgba(193, 160, 102, 0.4)',
            borderTop: '3px solid var(--color-gold)',
            boxShadow: '0 8px 30px rgba(16, 39, 59, 0.18)',
            padding: '36px 32px',
            color: '#FFFFFF',
            position: 'relative'
          }}>
            <div className="grid grid-2" style={{ gap: '36px' }}>
              <div>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: '#FFFFFF', margin: '0 0 18px 0', paddingBottom: '12px', borderBottom: '1px solid rgba(255, 255, 255, 0.15)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <span>Входит в юридическую помощь</span>
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    { title: 'Анализ документов и стадии урегулирования', desc: 'Изучение извещения о ДТП, акта осмотра страховщика, калькуляции и мотивировки решения.' },
                    { title: 'Расчёт процессуального маршрута', desc: 'Сопоставление калькуляции с нормами Единой методики Банка России и определение стратегии защиты.' },
                    { title: 'Подготовка заявления страховщику', desc: 'Составление мотивированного досудебного требования о восстановлении нарушенного права.' },
                    { title: 'Обращение к финансовому уполномоченному', desc: 'Формирование полного комплекта документов и процессуальное сопровождение спора в службе омбудсмена.' },
                    { title: 'Подготовка иска и представительство в суде', desc: 'Ведение судебного процесса в согласованном объёме — от подачи иска до взыскания средств.' }
                  ].map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                        <polyline points="9 11 12 14 22 4" />
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                      </svg>
                      <div>
                        <strong style={{ display: 'block', fontSize: '15px', color: '#FFFFFF', marginBottom: '2px' }}>{item.title}</strong>
                        <span style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.78)', lineHeight: 1.5 }}>{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: '#FFFFFF', margin: '0 0 18px 0', paddingBottom: '12px', borderBottom: '1px solid rgba(255, 255, 255, 0.15)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  <span>Оценивается отдельно</span>
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    { title: 'Независимая автотехническая экспертиза', desc: 'Проведение независимой оценки стоимости восстановительного ремонта и годных остатков.' },
                    { title: 'Судебные пошлины и почтовые расходы', desc: 'Оплата государственной пошлины за рассмотрение дела в суде и почтовые издержки.' },
                    { title: 'Взыскание ущерба с виновника происшествия', desc: 'Взыскание разницы сверх лимита 400 000 ₽ или полного ущерба при отсутствии у виновника полиса.' },
                    { title: 'Споры по добровольному страхованию КАСКО', desc: 'Отдельный процессуальный порядок при спорах по добровольному договору страхования.' }
                  ].map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <div>
                        <strong style={{ display: 'block', fontSize: '15px', color: '#FFFFFF', marginBottom: '2px' }}>{item.title}</strong>
                        <span style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.78)', lineHeight: 1.5 }}>{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══ БЛОК 5: ДОКУМЕНТЫ ДЛЯ ПЕРВИЧНОЙ ОЦЕНКИ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Документы для</span> <br />
              <span style={{ display: 'inline-block' }}>оценки спора по ОСАГО</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Чем полнее комплект документов, тем точнее юрист определит</span> <br />
              <span style={{ display: 'inline-block' }}>правовые перспективы и процессуальный порядок.</span>
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '28px', marginBottom: '32px' }}>
            
            {/* Карточка 1: Первичные документы ДТП и выплаты */}
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
                <span style={{ display: 'inline-block' }}>Документы ДТП и выплаты</span>
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Обязательные документы</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Дата, место и обстоятельства ДТП, извещение (европротокол) либо документы ГИБДД, полис ОСАГО, заявление о страховом возмещении и отметка о принятии.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Материалы расчёта выплаты</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Акт осмотра страховщика, калькуляция восстановительного ремонта, выписка о зачислении средств, соглашение о выплате (при наличии) и фото до ремонта.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Карточка 2: СТО и досудебная стадия */}
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
                <span style={{ display: 'inline-block' }}>Позиция страховщика и СТО</span>
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Документы по направлению на ремонт</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Направление на СТО, заказ-наряд, акт приёма-передачи, переписка с сервисом, уведомления о задержках или доплатах и фото дефектов ремонта.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Досудебная стадия и омбудсмен</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Претензия страховщику с почтовыми квитанциями, официальный ответ, обращение в службу финансового уполномоченного и вынесенное решение.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div style={{
            background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-gold)',
            padding: '24px 30px',
            marginTop: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)'
          }}>
            <p style={{ margin: 0, fontSize: '14.5px', color: 'var(--color-deep-blue)', lineHeight: 1.6, maxWidth: '720px' }}>
              <strong>Нет полного комплекта?</strong> Направьте то, что уже есть на руках (извещение, отказ или калькуляцию), — юрист подскажет, какие документы запросить у страховщика или компетентных органов.
            </p>
            <a href="#form" className="btn btn-primary" style={{ padding: '12px 24px', fontSize: '14px', whiteSpace: 'nowrap' }}>
              Отправить документы
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 6: КУРАТОР НАПРАВЛЕНИЯ ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name="Дмитрий Сергеевич Конопкин"
        position="Адвокат, председатель Коллегии адвокатов «Де-Юре»"
        imageUrl="/images/konopkin.jpg"
        imagePosition="center 5%"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Юридическая практика с 2016 года; опыт следственной работы помогает детально анализировать материалы происшествий, договоры и позиции страховых компаний.
          </span>,
          <ul key="2" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>
                Специализируется на автомобильных и страховых спорах: споры по ОСАГО и КАСКО, отказ в выплате, некачественный ремонт, полная гибель автомобиля и защита при обвинении в ДТП.
              </span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>
                Оценивает материалы страхового дела, калькуляции и экспертные заключения по Единой методике Банка России, выстраивает мотивированную позицию для претензии, службы финансового уполномоченного и суда.
              </span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>
                Защищает интересы автовладельцев в Липецке и Липецкой области, а также ведет дела дистанционно по всей России.
              </span>
            </li>
          </ul>,
          <a key="3" href="/specialisty/konopkin-dmitriy-sergeevich/" style={{ display: 'inline-block', marginTop: '16px', fontSize: '14px', color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }} data-analytics="specialist_profile_click">
            Подробнее об адвокате Дмитрии Сергеевиче Конопкине →
          </a>
        ]}
        buttonText="Обсудить спор по ОСАГО с Дмитрием Сергеевичем"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 7: КЕЙСЫ ═══ */}
      <CasesBlock
        title="Примеры дел по страховым спорам"
        showAllLink="/praktika/"
        showAllText="Смотреть всю практику"
        showDemoWarning={true}
        cases={cases}
      />

      {/* ═══ БЛОК 8: КАК ПРОХОДИТ РАБОТА ═══ */}
      <ProcessBlock
        title="Как проходит работа по спору"
        subtitle="Прозрачный и последовательный порядок защиты прав потерпевшего"
        steps={[
          {
            num: '01',
            title: 'Анализ документов и стадии',
            desc: 'Изучаем извещение о ДТП, акт осмотра, калькуляцию страховщика, мотивы отказа или состояние ремонта на СТО.'
          },
          {
            num: '02',
            title: 'Проверка расчёта и доказательств',
            desc: 'Сопоставляем калькуляцию с Единой методикой Банка России, определяем необходимость независимой технической оценки.'
          },
          {
            num: '03',
            title: 'Согласование маршрута и условий',
            desc: 'Предлагаем оптимальный процессуальный маршрут, фиксируем состав работ и стоимость юридической помощи в договоре.'
          },
          {
            num: '04',
            title: 'Досудебные требования и омбудсмен',
            desc: 'Готовим мотивированную претензию страховщику и обращение в службу финансового уполномоченного с комплектом доказательств.'
          },
          {
            num: '05',
            title: 'Судебная защита и исполнение',
            desc: 'При необходимости представляем интересы в суде до фактического перечисления страхового возмещения и судебных расходов.'
          }
        ]}
        ctaTitle="Готовы разобрать вашу ситуацию со страховой"
        ctaSubtitle="Оставьте номер телефона — адвокат свяжется с вами и подскажет законный порядок действий."
        ctaButtonText="Обсудить спор по ОСАГО"
        ctaButtonHref="#form"
      />

      {/* ═══ БЛОК 9: СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость юридической помощи"
        subtitle="Стоимость зависит от стадии урегулирования, объёма доказательств и необходимости судебного представительства."
        tiers={[
          {
            title: 'Анализ документов и отказ',
            subtitle: 'Первичная правовая оценка спора',
            price: 'от 5 000 ₽',
            features: [
              { name: 'Анализ материалов ДТП и страхового дела', value: '✓' },
              { name: 'Проверка законности отказа или калькуляции', value: '✓' },
              { name: 'Определение обязательного маршрута', value: '✓' },
              { name: 'Письменные рекомендации автоюриста', value: '✓' }
            ],
            buttonText: 'Получить оценку',
            buttonHref: '#form'
          },
          {
            title: 'Претензия и финомбудсмен',
            subtitle: 'Полное досудебное урегулирование',
            price: 'от 10 000 ₽',
            popular: true,
            badgeText: 'Популярно',
            features: [
              { name: 'Подготовка мотивированной претензии страховщику', value: '✓' },
              { name: 'Формирование доказательственной базы', value: '✓' },
              { name: 'Обращение к финансовому уполномоченному', value: '✓' },
              { name: 'Процессуальный контроль вынесения решения', value: '✓' }
            ],
            buttonText: 'Заказать услугу',
            buttonHref: '#form'
          },
          {
            title: 'Судебное ведение спора',
            subtitle: 'Защита в суде под ключ',
            price: 'от 25 000 ₽',
            features: [
              { name: 'Подготовка и подача искового заявления', value: '✓' },
              { name: 'Участие адвоката во всех заседаниях суда', value: '✓' },
              { name: 'Взыскание возмещения, неустоек и штрафов', value: '✓' },
              { name: 'Контроль фактического исполнения решения суда', value: '✓' }
            ],
            buttonText: 'Судебная защита',
            buttonHref: '#form'
          }
        ]}
        disclaimer={
          <>
            <span style={{ display: 'inline-block' }}>Стоимость определяется после изучения документов и фиксируется в договоре.</span> <br className="hidden-mobile" />
            <span style={{ display: 'inline-block' }}>Независимая экспертиза, оценка, почтовые и иные внешние расходы согласуются отдельно.</span>
          </>
        }
      />

      {/* ═══ БЛОК 10: ЧАСТЫЕ ВОПРОСЫ ═══ */}
      <FAQBlock
        superTitle="Частые вопросы"
        title="Ответы на частые вопросы"
        subtitle="Разъяснения адвоката Дмитрия Конопкина по спорам со страховыми компаниями по ОСАГО"
        ctaText="Задать свой вопрос"
        ctaLink="#form"
        faqs={faqs}
      />

      {/* ═══ БЛОК 11: СВЯЗАННЫЕ УСЛУГИ ═══ */}
      <section className="section bg-cream" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Другие автомобильные</span> <br />
              <span style={{ display: 'inline-block' }}>ситуации</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Смежные направления помощи при дорожно-транспортных происшествиях и страховых спорах.
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
            .all-services-link:hover {
              color: var(--color-gold) !important;
            }
          `}} />
          
          <div className="grid grid-4" style={{ gap: '20px' }}>
            <Link href="/grazhdanam/avtoyurist/spory-po-kasko/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <div 
                className="card related-service-card" 
                style={{ 
                  height: '100%', 
                  minHeight: '160px',
                  padding: '28px 22px', 
                  background: 'var(--color-white)', 
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  borderRadius: '0',
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between',
                  transition: 'all 0.3s',
                  position: 'relative'
                }}
              >
                <div>
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                    <span style={{ display: 'inline-block' }}>Споры</span> <br /><span style={{ display: 'inline-block' }}>по КАСКО</span>
                  </h3>
                  <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    Защита при отказе, недоплате, споре по ремонту, угону или полной гибели автомобиля.
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

            <Link href="/grazhdanam/avtoyurist/vzyskanie-ushcherba-s-vinovnika-dtp/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <div 
                className="card related-service-card" 
                style={{ 
                  height: '100%', 
                  minHeight: '160px',
                  padding: '28px 22px', 
                  background: 'var(--color-white)', 
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  borderRadius: '0',
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between',
                  transition: 'all 0.3s',
                  position: 'relative'
                }}
              >
                <div>
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                    <span style={{ display: 'inline-block' }}>Взыскание</span> <br /><span style={{ display: 'inline-block' }}>с виновника ДТП</span>
                  </h3>
                  <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    Взыскание ущерба сверх страхового лимита ОСАГО или при отсутствии полиса.
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

            <Link href="/grazhdanam/avtoyurist/osparivanie-viny-v-dtp/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <div 
                className="card related-service-card" 
                style={{ 
                  height: '100%', 
                  minHeight: '160px',
                  padding: '28px 22px', 
                  background: 'var(--color-white)', 
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  borderRadius: '0',
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between',
                  transition: 'all 0.3s',
                  position: 'relative'
                }}
              >
                <div>
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                    <span style={{ display: 'inline-block' }}>Оспаривание</span> <br /><span style={{ display: 'inline-block' }}>вины в ДТП</span>
                  </h3>
                  <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    Защита при спорных обстоятельствах аварии, обоюдной вине или необоснованном обвинении.
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

            <Link href="/grazhdanam/avtoyurist/vzyskanie-ushcherba-pri-dtp-bez-osago/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <div 
                className="card related-service-card" 
                style={{ 
                  height: '100%', 
                  minHeight: '160px',
                  padding: '28px 22px', 
                  background: 'var(--color-white)', 
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  borderRadius: '0',
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between',
                  transition: 'all 0.3s',
                  position: 'relative'
                }}
              >
                <div>
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                    <span style={{ display: 'inline-block' }}>ДТП без</span> <br /><span style={{ display: 'inline-block' }}>ОСАГО</span>
                  </h3>
                  <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    Взыскание компенсации ущерба, если у виновника происшествия отсутствует полис.
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
          </div>

          <div style={{ marginTop: '32px' }}>
            <Link href="/grazhdanam/avtoyurist/" className="all-services-link" style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '16px', textDecoration: 'underline', textUnderlineOffset: '4px', display: 'inline-flex', alignItems: 'center', gap: '6px', transition: 'color 0.2s ease' }}>
              Смотреть все услуги автоюриста →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 12: ФИНАЛЬНАЯ ФОРМА ═══ */}
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
                Проверим документы и определим следующий шаг
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Оставьте номер телефона и кратко укажите: дату ДТП, страховую компанию, была ли выплата или отказ и обращались ли Вы к финансовому уполномоченному.
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
                Не указывайте в форме паспортные данные, номер полиса и иные конфиденциальные сведения. Безопасный способ передачи документов согласуем после звонка.
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm 
                title="Обсудить спор по ОСАГО"
                subtitle="Оставьте имя и номер телефона. Автоюрист перезвонит в течение 15 минут в рабочее время."
                buttonText="Обсудить спор по ОСАГО"
                commentPlaceholder="Кратко опишите ситуацию: дата ДТП, страховая, была ли выплата/отказ…"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
