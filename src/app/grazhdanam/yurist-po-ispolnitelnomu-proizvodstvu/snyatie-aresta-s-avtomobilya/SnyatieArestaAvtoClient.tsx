'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MilitaryHero from '@/components/MilitaryHero';
import SpecialistBlock from '@/components/SpecialistBlock';
import ProcessBlock from '@/components/ProcessBlock';
import CasesBlock, { CaseData } from '@/components/CasesBlock';
import PricingBlock from '@/components/PricingBlock';
import FAQBlock from '@/components/FAQBlock';

export default function SnyatieArestaAvtoClient() {
  const cases: CaseData[] = [
    {
      category: 'СНЯТИЕ ЗАПРЕТА / ДОЛГ ОПЛАЧЕН',
      title: 'Добились снятия запрета после погашения долга',
      problem: 'Клиент полностью оплатил задолженность, но спустя три недели не смог продать автомобиль. Проверка показала два запрета в разных исполнительных производствах, один из которых продолжал действовать.',
      action: 'Получили постановления, подтвердили оплату по обоим производствам, направили отдельные обращения приставам и проконтролировали передачу актов об отмене запретов в регистрационный орган.',
      result: 'Оба ограничения были отменены, сведения обновились в базе Госавтоинспекции, клиент успешно зарегистрировал сделку с автомобилем.',
      isDemo: true
    },
    {
      category: 'ПОКУПАТЕЛЬ / ОСВОБОЖДЕНИЕ АВТО',
      title: 'Освободили от ареста автомобиль, купленный до запрета',
      problem: 'Покупатель приобрёл и получил автомобиль, но не успел зарегистрировать его. Позднее пристав ввёл запрет из-за долга продавца и отказался снять его только по договору купли-продажи.',
      action: 'Собрали подтверждения оплаты и фактической передачи машины до даты запрета, подготовили иск в суд об освобождении имущества от ареста, привлекли должника и взыскателя.',
      result: 'Суд признал принадлежность автомобиля покупателю и освободил его от ареста; регистрационные действия стали полностью доступны.',
      isDemo: true
    },
    {
      category: 'ОШИБКА ДАННЫХ / ЧУЖОЙ ДОЛГ',
      title: 'Отменили ограничение, наложенное на автомобиль другого человека',
      problem: 'Запрет появился из-за совпадения данных владельца с должником, хотя VIN и правоустанавливающие документы подтверждали, что автомобиль принадлежит другому лицу и не связан с производством.',
      action: 'Сопоставили регистрационные сведения и материалы производства, представили приставу доказательства о собственнике и потребовали исправить идентификацию имущества.',
      result: 'Постановление в отношении автомобиля отменили без отдельного судебного процесса, сведения об ограничении были исключены из регистрационных данных.',
      isDemo: true
    }
  ];

  const faqs = [
    {
      q: 'Чем запрет регистрационных действий отличается от ареста?',
      a: 'Запрет препятствует изменению регистрационных данных в Госавтоинспекции. Арест имущества — более широкая мера: он включает запрет распоряжаться машиной, а при необходимости может ограничивать пользование и сопровождаться описью или изъятием на спецстоянку.'
    },
    {
      q: 'Снимется ли запрет автоматически после оплаты долга?',
      a: 'Не всегда. Пристав должен вынести постановление об отмене меры и направить его в электронном виде в регистрационный орган. Кроме того, на автомобиле могут оставаться другие ограничения по иным производствам.'
    },
    {
      q: 'Можно ли ездить на автомобиле с запретом регистрации?',
      a: 'Сам по себе регистрационный запрет не всегда означает запрет эксплуатации. Но нужно проверить точный вид меры: при аресте пристав может отдельно ограничить право пользования или изъять автомобиль.'
    },
    {
      q: 'Что делать, если я купил машину до появления запрета?',
      a: 'Соберите договор купли-продажи, расписки или платежные поручения, акт приема-передачи автомобиля. Если пристав не снимает ограничение добровольно из-за спора о принадлежности, подается иск в суд об освобождении имущества от ареста.'
    },
    {
      q: 'А если автомобиль куплен уже после запрета?',
      a: 'Перспектива снятия существенно сложнее и зависит от обстоятельств сделки. В такой ситуации юрист оценивает требования к недобросовестному продавцу: расторжение договора купли-продажи и возврат денежных средств.'
    },
    {
      q: 'Куда подавать заявление о снятии запрета?',
      a: 'Сначала определяется орган и должностное лицо (отдел ФССП), вынесшее конкретное постановление. Обращение не следует направлять только в Госавтоинспекцию: она лишь исполняет поступившее постановление пристава.'
    },
    {
      q: 'Можно ли снять запрет без суда?',
      a: 'Да, если основание бесспорно (долг закрыт, производство окончено, допущена техническая ошибка) и пристав обязан отменить постановление. При споре о праве собственности третьего лица требуется судебный порядок.'
    },
    {
      q: 'Сколько времени занимает снятие ограничения?',
      a: 'Единого срока нет. Время зависит от основания, количества производств, оперативности пристава и фактической выгрузки сведений по каналам межведомственного взаимодействия.'
    },
    {
      q: 'Нужно ли оплачивать чужой долг, чтобы зарегистрировать машину?',
      a: 'Не следует оплачивать чужой долг без детального анализа документов. Сначала нужно установить дату запрета, дату сделки и основания защиты законных прав покупателя.'
    }
  ];

  const docStack = (
    <div className="hero-right-col" style={{ width: '100%', position: 'relative', display: 'flex', justifyContent: 'center' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '150%', height: '150%', background: 'radial-gradient(circle, rgba(23, 50, 77, 0.12) 0%, rgba(23, 50, 77, 0.05) 30%, transparent 60%)', zIndex: 0, pointerEvents: 'none' }} />
      <svg className="hero-vector-svg" style={{ position: 'absolute', top: '38%', left: '98%', transform: 'translate(-50%, -50%)', width: '580px', height: '580px', opacity: 0.10, zIndex: 0, pointerEvents: 'none' }} viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="0.6">
        <path d="M3 21h18 M4 21v-2h16v2 M6 19V9 M10 19V9 M14 19V9 M18 19V9 M12 4l-9 5h18l-9-5z M4 9h16" />
      </svg>
      <div className="mockup-container" style={{ zIndex: 1 }}>
        <div style={{ position: 'absolute', width: '250px', height: '250px', background: 'var(--color-primary)', filter: 'blur(100px)', opacity: 0.15, borderRadius: '50%' }}></div>
        <div className="doc-wrapper-float-4"><div className="doc-sheet doc-sheet-4"><div style={{ padding: '40px 30px', height: '100%', display: 'flex', flexDirection: 'column' }}><div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '40px' }}><div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-end' }}><div style={{ width: '100px', height: '4px', background: 'rgba(23,50,77,0.2)' }}></div><div style={{ width: '80px', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div></div></div><div style={{ width: '160px', height: '8px', background: 'var(--color-primary)', margin: '0 auto 40px auto' }}></div><div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}><div style={{ width: '100%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div><div style={{ width: '100%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div><div style={{ width: '60%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div></div></div></div></div>
        <div className="doc-wrapper-float-3"><div className="doc-sheet doc-sheet-3"><div style={{ padding: '40px 30px', height: '100%', display: 'flex', flexDirection: 'column' }}><div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '40px' }}><div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-end' }}><div style={{ width: '100px', height: '4px', background: 'rgba(23,50,77,0.2)' }}></div><div style={{ width: '60px', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div></div></div><div style={{ width: '140px', height: '8px', background: 'var(--color-primary)', margin: '0 auto 40px auto' }}></div><div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}><div style={{ width: '100%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div><div style={{ width: '95%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div><div style={{ width: '80%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div></div></div></div></div>
        <div className="doc-wrapper-float-2"><div className="doc-sheet doc-sheet-2"><div style={{ padding: '30px 25px', height: '100%', display: 'flex', flexDirection: 'column' }}><div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '30px' }}><div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-end' }}><div style={{ width: '100px', height: '4px', background: 'rgba(23,50,77,0.2)' }}></div><div style={{ width: '60px', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div><div style={{ width: '80px', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div></div></div><div style={{ width: '160px', height: '8px', background: 'var(--color-primary)', margin: '0 auto 20px auto' }}></div><div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}><div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}><div style={{ width: '40%', height: '4px', background: 'rgba(23,50,77,0.2)' }}></div><div style={{ width: '100%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div><div style={{ width: '90%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div></div><div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}><div style={{ width: '50%', height: '4px', background: 'rgba(23,50,77,0.2)' }}></div><div style={{ width: '100%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div><div style={{ width: '85%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div></div></div><div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '10px', borderTop: '1px dashed rgba(23,50,77,0.1)' }}><div><div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.5)' }}>Собственник:</div><div style={{ width: '80px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '10px' }}></div></div><div><div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.5)' }}>Юрист:</div><div style={{ width: '80px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '10px' }}></div></div></div></div></div></div>
        
        {/* Верхний лист - чёткий, крупный и читаемый */}
        <div className="doc-wrapper-float-1">
          <div className="doc-sheet doc-sheet-1">
            <div style={{ padding: '24px 20px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', opacity: 0.03, width: '150px' }}>
                <img src="/images/logo_dark.png" alt="" style={{ width: '100%', height: 'auto' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(23,50,77,0.2)', paddingBottom: '10px', marginBottom: '14px' }}>
                <img src="/images/logo_dark.png" alt="Де-Юре" style={{ width: '68px', height: 'auto', opacity: 0.9 }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'flex-end' }}>
                  <span style={{ fontSize: '9px', fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>ФССП / ГИБДД</span>
                  <div style={{ width: '50px', height: '3px', background: 'rgba(23,50,77,0.2)' }}></div>
                </div>
              </div>

              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', textAlign: 'center', marginBottom: '14px', letterSpacing: '0.02em' }}>
                ЗАЩИТА АВТОВЛАДЕЛЬЦЕВ
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--color-gold)', flexShrink: 0 }}></div>
                  <span style={{ fontSize: '11px', color: 'var(--color-deep-blue)', fontWeight: 600, lineHeight: 1.3 }}>
                    Снятие ареста и запрета регистрации авто
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--color-gold)', flexShrink: 0 }}></div>
                  <span style={{ fontSize: '11px', color: 'var(--color-deep-blue)', fontWeight: 600, lineHeight: 1.3 }}>
                    Заявление приставу и освобождение в суде
                  </span>
                </div>
              </div>

              <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '10px', borderTop: '1px solid rgba(23,50,77,0.2)' }}>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 'bold', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)' }}>ООО ЮК «ДЕ-ЮРЕ»</div>
                  <div style={{ fontSize: '10px', color: 'rgba(23,50,77,0.7)', fontWeight: 500, marginTop: '2px' }}>ИНН 4800009680</div>
                </div>
                <div style={{ width: '54px', height: '54px', borderRadius: '50%', border: '1.5px solid #17375E', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-12deg)', opacity: 0.9 }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', border: '0.75px dashed #17375E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '8.5px', fontWeight: 'bold', color: '#17375E', textAlign: 'center', lineHeight: 1.15, letterSpacing: '0.04em' }}>ДЕ-ЮРЕ<br/>ЛИПЕЦК</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );

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
            <Link href="/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/" style={{ color: 'var(--color-primary)' }}>Юрист по исполнительному производству</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Снятие ареста с автомобиля</span>
          </>
        }
        superTitle="Споры с судебными приставами в Липецке"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Снятие ареста с автомобиля
            </span>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              и запрета на регистрацию
            </span>
          </span>
        }
        subtitle="Проверим, кем и когда введено ограничение, подготовим заявление, жалобу или иск и проконтролируем снятие запрета в регистрационных данных."
        primaryCtaText="Проверить ограничение"
        primaryCtaLink="#form"
        primaryCtaAnalytics="service_car_arrest_hero_cta"
        primaryCtaSubtext={
          <>Если ограничение препятствует сделке, позвоните: <a href="tel:+79103503111" data-analytics="service_car_arrest_phone_click">+7 (910) 350-31-11</a></>
        }
        trustItems={[
          { text: 'Проверяем основания каждого запрета' },
          { text: 'Заявления приставу, жалобы и судебные иски' },
          { text: 'Помощь должникам, собственникам и покупателям' },
          { text: 'Куратор — 13 лет опыта в ФССП' },
        ]}
        rightContent={docStack}
      />

      {/* ═══ БЛОК 2: ЧТО ПРОВЕРИТЬ ДО ОБРАЩЕНИЯ ═══ */}
      <section style={{ background: 'var(--color-deep-blue)', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-white)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              Что проверить до обращения за снятием ограничения
            </h2>
            <div style={{ width: '60px', height: '2px', background: 'var(--color-gold)', marginBottom: '20px' }}></div>
            <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '16px', lineHeight: 1.6, margin: 0, textWrap: 'balance' }}>
              Перед подготовкой документов важно установить точный вид меры, основание её введения и сопоставить даты сделки и постановлений.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '40px' }}>
            <div className="urgent-card" style={{
              background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
              padding: '32px 28px',
              border: '1px solid rgba(255,255,255,0.2)',
              borderTop: '3px solid var(--color-gold)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.3 }}>
                  Установите инициатора и вид меры
                </h3>
              </div>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
                Получите сведения о каждом запрете: орган, подразделение, номер производства, дату и реквизиты постановления. Проверьте, ограничена только регистрация или автомобиль также описан, арестован либо объявлен в розыск.
              </p>
            </div>

            <div className="urgent-card" style={{
              background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
              padding: '32px 28px',
              border: '1px solid rgba(255,255,255,0.2)',
              borderTop: '3px solid var(--color-gold)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.3 }}>
                  Сопоставьте даты
                </h3>
              </div>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
                Для покупателя важны даты договора, оплаты, передачи машины и постановки запрета. Для должника — даты возбуждения производства, оплаты долга, окончания или прекращения производства.
              </p>
            </div>

            <div className="urgent-card" style={{
              background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
              padding: '32px 28px',
              border: '1px solid rgba(255,255,255,0.2)',
              borderTop: '3px solid var(--color-gold)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                </svg>
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.3 }}>
                  Соберите документы на авто
                </h3>
              </div>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
                Подготовьте ПТС или электронную выписку, СТС, договор купли-продажи, документы об оплате и передаче, постановления пристава и подтверждение погашения задолженности.
              </p>
            </div>
          </div>

          <style dangerouslySetInnerHTML={{__html: `
            .urgent-card:hover {
              transform: translateY(-6px);
              box-shadow: 0 16px 36px rgba(0,0,0,0.22) !important;
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
              transition: all 0.3s ease !important;
              border: 1px solid var(--color-gold) !important;
            }
            .btn-urgent-call:hover {
              background-color: #FFFFFF !important;
              color: #0B1C2A !important;
              border-color: #FFFFFF !important;
            }
          `}} />

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '28px', display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <a href="tel:+79103503111" style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.02em' }} data-analytics="service_car_arrest_phone_click">
              +7 (910) 350-31-11
            </a>
            <a href="tel:+79103503111" className="btn-urgent-call" style={{ padding: '14px 28px', fontSize: '15px' }} data-analytics="service_car_arrest_phone_click">
              Позвонить юристу
            </a>
            <a href="#form" className="btn btn-urgent-outline" style={{ padding: '14px 28px', fontSize: '15px' }}>
              Проверить ограничение
            </a>
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
              Перезвоним вам в течение 15 минут в рабочее время
            </span>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: В КАКИХ СИТУАЦИЯХ ПОМОГАЕМ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              Когда можно добиваться снятия ареста или запрета
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Способ отмены ограничения зависит от того, кем является клиент, когда возникло право на автомобиль и исполнено ли требование пристава.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '40px' }}>
            {[
              {
                tag: 'Долг погашен',
                title: 'Долг погашен, но запрет не снят',
                desc: 'Проверим все производства и постановления, добьёмся вынесения и направления документов об отмене ограничения в ГИБДД.'
              },
              {
                tag: 'Покупка до ареста',
                title: 'Автомобиль куплен до введения запрета',
                desc: 'Оценим документы о сделке, оплате и передаче машины; обратимся к приставу, а при споре подготовим иск об освобождении имущества.'
              },
              {
                tag: 'Прежний владелец',
                title: 'Ограничение относится к прежнему владельцу',
                desc: 'Установим связь запрета с должником и проверим, когда право на автомобиль фактически перешло к покупателю.'
              },
              {
                tag: 'Чужое имущество',
                title: 'Арест наложен на чужой автомобиль',
                desc: 'Подтвердим принадлежность имущества и выберем административный либо исковой способ защиты собственника.'
              },
              {
                tag: 'Несколько запретов',
                title: 'На машину действует несколько запретов',
                desc: 'Составим перечень ограничений и отдельный маршрут по каждому инициатору, чтобы снятие одного запрета не оказалось бесполезным.'
              },
              {
                tag: 'Несоразмерность',
                title: 'Пристав не отменяет несоразмерную меру',
                desc: 'Проверим стоимость автомобиля, размер требований, наличие другого имущества и основания для жалобы или судебного оспаривания.'
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

          <div style={{
            background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-gold)',
            padding: '28px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            boxShadow: '0 4px 15px rgba(23, 50, 77, 0.04)'
          }}>
            <div style={{ maxWidth: '720px' }}>
              <h4 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>
                Не уверены, какой маршрут подходит в вашем случае?
              </h4>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                Опишите ситуацию — юрист проверит основания каждого ограничения и подскажет реалистичный порядок действий.
              </p>
            </div>
            <a href="#form" className="btn btn-primary" style={{ whiteSpace: 'nowrap', padding: '12px 24px', fontSize: '14px' }}>
              Разобрать вашу ситуацию
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: ЗАЯВЛЕНИЕ ПРИСТАВУ ИЛИ ОБРАЩЕНИЕ В СУД ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              Заявление приставу или обращение в суд
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Выбор способа защиты зависит от оснований введения меры и наличия спора о праве собственности на автомобиль.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '32px' }}>
            <div style={{ padding: '32px 28px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                </svg>
                <h3 style={{ margin: 0, fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)' }}>
                  Бесспорное основание
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Если долг исполнен, производство завершено, допущена очевидная ошибка либо пристав уже обязан отменить меру, готовим заявление, подтверждающие документы и контролируем исполнение.
              </p>
            </div>

            <div style={{ padding: '32px 28px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <h3 style={{ margin: 0, fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)' }}>
                  Незаконные действия
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Если пристав отказывает, не рассматривает документы или сохраняет несоразмерное ограничение, определяем порядок обжалования руководителю подразделения ФССП либо в суд по КАС РФ.
              </p>
            </div>

            <div style={{ padding: '32px 28px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-gold)', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <h3 style={{ margin: 0, fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)' }}>
                  Спор о собственности
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Когда третье лицо заявляет право на машину, одного заявления приставу недостаточно. Готовим иск в суд об освобождении имущества от ареста и определяем надлежащих ответчиков.
              </p>
            </div>
          </div>

          <div style={{
            background: 'var(--color-white)',
            borderLeft: '4px solid var(--color-gold)',
            padding: '20px 24px',
            border: '1px solid var(--color-border)',
            borderLeftColor: 'var(--color-gold)',
            fontSize: '14px',
            color: 'var(--color-deep-blue)',
            lineHeight: 1.6
          }}>
            <strong style={{ color: 'var(--color-primary)' }}>Важно:</strong> Если автомобиль куплен после введения запрета либо документы о сделке не подтверждают оплату и передачу машины, обещать снятие ограничения нельзя. Юрист отдельно оценивает требования к продавцу и риски оспаривания сделки.
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 5: ЧТО СДЕЛАЕТ ЮРИСТ «ДЕ-ЮРЕ» ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              Что сделает юрист «Де-Юре»
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Комплексная работа по снятию ограничений с автомобиля от первичной проверки баз до фактического обновления регистрационных данных.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '20px', marginBottom: '0' }}>
            {[
              { num: '01', title: 'Проверит сведения об авто', desc: 'Проверит данные об автомобиле, исполнительных производствах и всех инициаторах наложенных ограничений.' },
              { num: '02', title: 'Изучит материалы дела', desc: 'Получит и проанализирует постановления, акт ареста, материалы производства и регистрационные сведения ГИБДД.' },
              { num: '03', title: 'Сопоставит даты и документы', desc: 'Сопоставит даты сделки, передачи автомобиля, возбуждения производства и фактического введения запрета.' },
              { num: '04', title: 'Оценит основания отмены', desc: 'Оценит основания для отмены меры, обжалования действий пристава или освобождения имущества через суд.' },
              { num: '05', title: 'Подготовит документы', desc: 'Подготовит заявление приставу, жалобу, административный иск либо иск об освобождении автомобиля от ареста.' },
              { num: '06', title: 'Представит интересы', desc: 'Представит интересы доверителя в подразделениях ФССП и суде в согласованном объёме.' },
              { num: '07', title: 'Проконтролирует постановление', desc: 'Проконтролирует вынесение постановления об отмене запрета и его передачу в регистрационный орган.' },
              { num: '08', title: 'Проверит чистоту автомобиля', desc: 'Убедится, что сняты все ограничения, препятствующие регистрационным действиям и свободной сделке.' },
            ].map((item) => (
              <div key={item.num} className="hover-lift" style={{
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

            {/* Карточка 09: Получить план действий */}
            <Link href="#form" style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }} data-analytics="click_action_plan_card">
              <div className="hover-lift" style={{
                background: 'linear-gradient(145deg, #0B1C2A 0%, #17375E 100%)',
                padding: '38px 24px 30px 24px',
                border: '1px solid var(--color-border)',
                borderTop: '4px solid var(--color-gold)',
                boxShadow: '0 8px 24px rgba(11, 28, 42, 0.25)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                width: '100%',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                <div>
                  <div style={{
                    position: 'absolute',
                    top: '-14px',
                    left: '20px',
                    background: 'var(--color-gold)',
                    color: 'var(--color-deep-blue)',
                    fontSize: '12px',
                    fontWeight: 700,
                    padding: '2px 10px',
                    borderRadius: '2px',
                    letterSpacing: '0.05em'
                  }}>
                    СТАРТ
                  </div>
                  <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: '#FFFFFF', margin: '8px 0 12px 0', lineHeight: 1.35 }}>
                    Получить план действий
                  </h3>
                  <p style={{ fontSize: '14.5px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, margin: 0 }}>
                    Опишите ситуацию с автомобилем — юрист проверит основания каждого ограничения и подскажет порядок действий.
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-gold)', fontSize: '14px', fontWeight: 600, marginTop: '20px' }}>
                  <span>Перейти к форме</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 6: ВЕДУЩИЙ ЮРИСТ ПО УСЛУГЕ ═══ */}
      <SpecialistBlock
        title={
          <span style={{ display: 'block' }}>
            <span style={{ display: 'block' }}>Ограничения проверяет юрист</span>
            <span style={{ display: 'block' }}>с опытом работы в ФССП</span>
          </span>
        }
        name="Марина Валерьевна Смольянинова"
        position="Ведущий юрист ЮК «Де-Юре», куратор направления «Исполнительное производство»"
        imageUrl="/images/smolyaninova.jpg"
        description={[
          'Марина Валерьевна Смольянинова более 13 лет работала в Федеральной службе судебных приставов, в том числе на руководящих должностях. Этот опыт помогает оценивать не только формальное основание запрета, но и реальный порядок движения постановлений между приставом и регистрационным органом.',
          'Специализируется на защите имущественных прав граждан и бизнеса: снятие незаконных арестов с автотранспорта и счетов, отмена запретов регистрационных действий, освобождение имущества от ареста в судебном порядке.',
          'Лично курирует ведение дел и проверяет ключевые процессуальные документы по каждому делу в направлении исполнительного производства.',
          'Сопровождает доверителей в Липецке и Липецкой области, а также ведёт дистанционную подготовку процессуальных документов по всей России.'
        ]}
        buttonText="Обратиться к Марине Смольяниновой"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 7: ПРИМЕРЫ ИЗ ПРАКТИКИ ═══ */}
      <CasesBlock
        title={
          <span style={{ display: 'block' }}>
            <span style={{ display: 'block' }}>Как может решаться вопрос</span>
            <span style={{ display: 'block' }}>с ограничением автомобиля</span>
          </span>
        }
        showAllLink="/praktika/"
        showAllText="Смотреть все дела"
        showDemoWarning={true}
        cases={cases}
      />

      {/* ═══ БЛОК 8: КАК ПРОХОДИТ РАБОТА ═══ */}
      <ProcessBlock
        title="От проверки запрета до возможности регистрации"
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '800px', textWrap: 'balance' }}>
            <span style={{ display: 'block' }}>Прозрачный пошаговый процесс — от первичного</span>
            <span style={{ display: 'block' }}>анализа ограничений до фактического снятия запрета.</span>
          </span>
        }
        alignTitle="center"
        steps={[
          {
            num: '01',
            title: 'Проверяем ограничения',
            desc: 'Устанавливаем все органы, производства, постановления и даты наложения ограничений.'
          },
          {
            num: '02',
            title: 'Анализируем документы',
            desc: 'Проверяем принадлежность автомобиля, сделку, оплату, долг и основания применённой меры.'
          },
          {
            num: '03',
            title: 'Выбираем процедуру',
            desc: 'Определяем, достаточно ли заявления приставу, нужна ли жалоба или судебный иск.'
          },
          {
            num: '04',
            title: 'Ведём дело',
            desc: 'Готовим документы и представляем интересы клиента в согласованном объёме.'
          },
          {
            num: '05',
            title: 'Контролируем результат',
            desc: 'Проверяем отмену каждого ограничения и обновление сведений в регистрационной базе.'
          },
          {
            isBanner: true,
            title: 'Дистанционный формат',
            desc: 'Консультацию, проверку электронных копий и подготовку большинства документов можно начать дистанционно. Необходимость личного участия в ФССП или суде зависит от выбранного способа защиты.'
          }
        ]}
        ctaTitle="Начните с проверки документов"
        ctaSubtitle="Кратко опишите ситуацию — мы уточним обстоятельства, проверим ограничения и определим следующий шаг."
        ctaButtonText="Обсудить ситуацию"
        ctaButtonHref="#form"
      />

      {/* ═══ БЛОК 9: СТОИМОСТЬ ЮРИДИЧЕСКОЙ ПОМОЩИ ═══ */}
      <PricingBlock
        title="Стоимость снятия ограничения с автомобиля"
        subtitle="Итоговая стоимость зависит от количества запретов, органа-инициатора, наличия спора о собственности и необходимости обращаться в суд."
        tiers={[
          {
            title: 'Анализ документов',
            subtitle: 'Оценка ограничений и рисков',
            price: 'от 5 000 ₽',
            features: [
              { name: 'Проверка баз ФССП и ГИБДД', value: '✓' },
              { name: 'Анализ оснований наложения запрета', value: '✓' },
              { name: 'Определение надлежащего маршрута', value: '✓' },
              { name: 'Письменные рекомендации', value: '✓' }
            ],
            buttonText: 'Получить оценку',
            buttonHref: '#form'
          },
          {
            title: 'Заявление приставу',
            subtitle: 'Внесудебная отмена меры',
            price: 'от 10 000 ₽',
            popular: true,
            badgeText: 'Популярно',
            features: [
              { name: 'Подготовка мотивированного заявления', value: '✓' },
              { name: 'Формирование комплекта доказательств', value: '✓' },
              { name: 'Контроль вынесения постановления', value: '✓' },
              { name: 'Проверка выгрузки данных в ГИБДД', value: '✓' }
            ],
            buttonText: 'Заказать услугу',
            buttonHref: '#form'
          },
          {
            title: 'Жалоба на пристава',
            subtitle: 'Оспаривание бездействия',
            price: 'от 15 000 ₽',
            features: [
              { name: 'Жалоба старшему приставу / УФССП', value: '✓' },
              { name: 'Административный иск (КАС РФ)', value: '✓' },
              { name: 'Оспаривание отказа в отмене запрета', value: '✓' },
              { name: 'Устранение несоразмерных мер', value: '✓' }
            ],
            buttonText: 'Обсудить жалобу',
            buttonHref: '#form'
          },
          {
            title: 'Иск об освобождении авто',
            subtitle: 'Защита прав собственника',
            price: 'от 25 000 ₽',
            features: [
              { name: 'Исковое заявление в суд (ст. 442 ГПК)', value: '✓' },
              { name: 'Доказывание принадлежности машины', value: '✓' },
              { name: 'Представительство в судебных заседаниях', value: '✓' },
              { name: 'Получение судебного акта для ГИБДД', value: '✓' }
            ],
            buttonText: 'Судебная защита',
            buttonHref: '#form'
          }
        ]}
        disclaimer="Стоимость определяется после уточнения задачи и изучения имеющихся документов. Состав услуг, цена и порядок оплаты фиксируются в договоре до начала работы. Оплата вознаграждения исполнителя не зависит от исхода дела и не включает государственные пошлины и сопутствующие расходы."
      />

      {/* ═══ БЛОК 10: FAQ ═══ */}
      <FAQBlock
        superTitle="Частые вопросы клиентов"
        title={
          <span style={{ display: 'block' }}>
            <span style={{ display: 'block' }}>Вопросы о снятии ареста</span>
            <span style={{ display: 'block' }}>и запрета с автомобиля</span>
          </span>
        }
        subtitle={
          <span style={{ display: 'block' }}>
            <span style={{ display: 'block' }}>Разъяснения юриста</span>
            <span style={{ display: 'block' }}>по исполнительному производству</span>
          </span>
        }
        ctaText="Задать свой вопрос"
        ctaLink="#form"
        faqs={faqs}
      />

      {/* ═══ БЛОК 11: ФИНАЛЬНАЯ ФОРМА ═══ */}
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
                Не можете продать или зарегистрировать автомобиль из-за запрета?
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Пришлите сведения об ограничении, постановление пристава и документы на автомобиль. Обращение передадим Марине Валерьевне Смольяниновой. Она проверит основания, количество запретов и согласует с вами понятный план действий.
              </p>

              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация юриста</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Позвоните прямо сейчас: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="service_car_arrest_phone_click">+7 (910) 350-31-11</a>
                </p>
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '28px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', margin: '0 0 16px 0', lineHeight: 1.2 }}>
                  Написать нам
                </h3>
                <p style={{ color: 'var(--color-text-secondary)', marginBottom: '24px', fontSize: '15px', lineHeight: 1.6 }}>
                  <span style={{ display: 'inline-block' }}>Оставьте имя и номер телефона. Юрист перезвонит</span> <br />
                  <span style={{ display: 'inline-block' }}>в течение 15 минут в рабочее время.</span>
                </p>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <input type="hidden" name="source_page" value="/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/snyatie-aresta-s-avtomobilya/" />
                  <input type="hidden" name="direction" value="ispolnitelnoe_snyatie_aresta_avto" />
                  <input type="hidden" name="selected_specialist" value="smolyaninova-marina-valerevna" />
                  <input type="hidden" name="service" value="car_arrest_removal" />
                  <input type="hidden" name="audience" value="citizens" />

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="name" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-deep-blue)' }}>Имя (необязательно)</label>
                    <input type="text" id="name" name="name" autoComplete="name" placeholder="Иван Иванов" style={{ padding: '14px 16px', border: '1px solid rgba(23, 50, 77, 0.2)', borderRadius: '0', fontSize: '15px', outline: 'none', background: 'var(--color-white)', color: 'var(--color-deep-blue)', fontFamily: 'inherit' }} />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="phone" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-deep-blue)' }}>
                      Телефон <span style={{ color: 'var(--color-gold)' }}>*</span>
                    </label>
                    <input type="tel" id="phone" name="phone" autoComplete="tel" required placeholder="+7 (___) ___-__-__" pattern="^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$" style={{ padding: '14px 16px', border: '1px solid rgba(23, 50, 77, 0.2)', borderRadius: '0', fontSize: '15px', outline: 'none', width: '100%', background: 'var(--color-white)', color: 'var(--color-deep-blue)', fontFamily: 'inherit' }} />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="message" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-deep-blue)' }}>Описание ситуации (необязательно)</label>
                    <textarea id="message" name="message" rows={3} placeholder="Кратко опишите автомобиль, орган и суть ограничения..." style={{ padding: '14px 16px', border: '1px solid rgba(23, 50, 77, 0.2)', borderRadius: '0', fontSize: '15px', outline: 'none', fontFamily: 'inherit', resize: 'vertical', background: 'var(--color-white)', color: 'var(--color-deep-blue)' }} />
                  </div>

                  <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer', marginTop: '4px' }}>
                    <input type="checkbox" name="agreement" required style={{ marginTop: '3px', accentColor: 'var(--color-gold)', flexShrink: 0 }} />
                    <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      <Link href="/consent/" target="_blank" style={{ color: 'var(--color-deep-blue)', textDecoration: 'underline' }}>Я даю согласие на обработку персональных данных</Link> и подтверждаю, что ознакомлен с <Link href="/privacy/" target="_blank" style={{ color: 'var(--color-deep-blue)', textDecoration: 'underline' }}>Политикой в отношении обработки персональных данных</Link>.
                    </span>
                  </label>

                  <button type="submit" style={{ width: '100%', padding: '16px', fontSize: '16px', marginTop: '8px', background: '#10273B', color: '#FFFFFF', border: '1px solid #9B7E55', borderRadius: '0', whiteSpace: 'nowrap', fontWeight: 600, cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: '0 4px 12px rgba(16, 39, 59, 0.15)' }}>
                    Проверить документы
                  </button>

                  <div style={{ marginTop: '4px', fontSize: '12px', color: 'var(--color-text-secondary)', lineHeight: 1.4, textAlign: 'center' }}>
                    <span style={{ display: 'inline-block' }}>Если вы оставите заявку вечером или в выходной день,</span> <br />
                    <span style={{ display: 'inline-block' }}>мы перезвоним в ближайший рабочий день.</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 12: ДРУГИЕ НАПРАВЛЕНИЯ ═══ */}
      <section className="section bg-light" style={{ padding: '64px 0', borderTop: '1px solid var(--color-border)', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '28px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '12px', marginTop: 0 }}>
              Направления помощи по исполнительному производству
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
              Помощь должникам и взыскателям по другим вопросам исполнительного производства.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '20px' }}>
            <Link href="/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/obzhalovanie-dejstvij-sudebnogo-pristava/" style={{ textDecoration: 'none', color: 'inherit' }} data-analytics="service_car_arrest_related_click">
              <div className="card service-card" style={{ padding: '24px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '17px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', margin: '0 0 10px 0' }}>
                    Обжалование действий судебного пристава
                  </h3>
                  <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    Жалобы старшему судебному приставу и в суд на незаконные постановления, аресты и бездействие.
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontSize: '13px', fontWeight: 600, marginTop: '16px' }}>
                  <span>Подробнее</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
            </Link>

            <Link href="/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/" style={{ textDecoration: 'none', color: 'inherit' }} data-analytics="service_car_arrest_related_click">
              <div className="card service-card" style={{ padding: '24px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '17px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', margin: '0 0 10px 0' }}>
                    Исполнительное производство для граждан
                  </h3>
                  <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    Комплексная защита прав должников и взыскателей на всех стадиях взаимодействия с ФССП.
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontSize: '13px', fontWeight: 600, marginTop: '16px' }}>
                  <span>Подробнее</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
            </Link>

            <Link href="/grazhdanam/vzyskanie-dolgov/" style={{ textDecoration: 'none', color: 'inherit' }} data-analytics="service_car_arrest_related_click">
              <div className="card service-card" style={{ padding: '24px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '17px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', margin: '0 0 10px 0' }}>
                    Взыскание долгов с физических лиц
                  </h3>
                  <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    Досудебное урегулирование, получение судебного приказа, ведение дела в суде и исполнение решения.
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontSize: '13px', fontWeight: 600, marginTop: '16px' }}>
                  <span>Подробнее</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
