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
import PricingBlock, { PricingTier } from '@/components/PricingBlock';
import ProcessBlock from '@/components/ProcessBlock';

export default function OtmenaZapretaNaVezdVRossiyuClient() {
  const cases: CaseData[] = [
  {
    "category": "Семья и дети / Конституция РФ",
    "title": "Отмена запрета на въезд при наличии несовершеннолетних детей — граждан РФ",
    "problem": "Иностранному гражданину поставили запрет на въезд на 3 года из-за двух административных штрафов ГИБДД. В Липецке осталась супруга и двое несовершеннолетних детей — граждан России.",
    "action": "Подали административный иск в суд, доказали своевременную уплату штрафов, устойчивые семейные связи и нарушение баланса публичных и частных интересов.",
    "result": "Суд признал решение МВД незаконным и обязал исключить сведения из контрольного списка Пограничной службы ФСБ."
  },
  {
    "category": "Очное обучение / ВУЗ",
    "title": "Отмена запрета въезда иностранному студенту липецкого университета",
    "problem": "Студент 4 курса не смог вовремя выехать из РФ из-за экстренной госпитализации. При выезде на каникулы узнал об ограничении въезда на 3 года.",
    "action": "Истребовали медицинские выписки, подтвердили непрерывный очный учебный процесс и направили мотивированную досудебную жалобу в УМВД.",
    "result": "УМВД отменило собственное решение о неразрешении въезда, студент беспрепятственно продолжил обучение."
  },
  {
    "category": "Бессрочный запрет / 114-ФЗ",
    "title": "Признание недействительным бессрочного ограничения на въезд",
    "problem": "Доверителю установили запрет на въезд без указания срока и конкретного ведомства-инициатора при пересечении границы.",
    "action": "Через адвокатские запросы установили ведомство-инициатор, истребовали материалы и оспорили незаконный акт в суде.",
    "result": "Суд отменил незаконный акт, данные удалены из контрольных баз, право въезда в РФ полностью восстановлено."
  }
];
  const faqs = [
  {
    "q": "Как узнать, кем и на какой срок наложен запрет на въезд?",
    "a": "Официальный и надёжный способ — направление адвокатского запроса в Главное управление по вопросам миграции МВД России и Пограничную службу ФСБ РФ. Проверка через неофициальные базы часто выдаёт устаревшие сведения."
  },
  {
    "q": "Можно ли отменить запрет, если иностранный гражданин находится за границей?",
    "a": "Значительную часть работы можно организовать дистанционно: получить решение, изучить документы, подготовить обращение или иск. В зависимости от органа, процессуального действия и позиции суда могут потребоваться доверенность, дополнительные документы или личное участие доверителя. Точный порядок определяется после изучения ситуации."
  },
  {
    "q": "Сколько времени занимает отмена запрета через суд?",
    "a": "Единого срока отмены запрета нет. Он зависит от получения официального решения и материалов, выбранного административного или судебного порядка, подсудности, необходимости обжалования и наличия других ограничений. После отмены решения отдельно проверяется обновление сведений в ведомственных базах."
  },
  {
    "q": "Чем результат справочной онлайн-проверки отличается от официального решения?",
    "a": "Онлайн-сервисы носят исключительно справочный характер, могут отображать неполные или устаревшие сведения и не содержат мотивированных оснований, органа-инициатора и реквизитов акта. Для юридических действий и обжалования требуется официальный ответ ведомства либо судебное решение."
  },
  {
    "q": "Обязательно ли сначала обращаться в МВД или другое ведомство?",
    "a": "Зависит от органа-инициатора и конкретного основания запрета. В ряде случаев возможно досудебное обращение в вышестоящий орган, а в других — целесообразно сразу обращаться в суд с административным иском по КАС РФ."
  },
  {
    "q": "Какие документы нужны для первичной оценки запрета?",
    "a": "Копия паспорта с переводом, миграционная карта, уведомление о неразрешении въезда (при наличии) и документы, подтверждающие семейные связи, очное обучение, лечение или трудовую деятельность в России."
  },
  {
    "q": "Можно ли покупать билет сразу после отмены решения?",
    "a": "Сразу покупать билет не рекомендуется. После вынесения судебного решения или ведомственного акта об отмене требуется время для направления сведений в Пограничную службу ФСБ РФ и фактической актуализации контрольных списков на пунктах пропуска."
  },
  {
    "q": "Чем запрет на въезд отличается от выдворения, депортации и нежелательности пребывания?",
    "a": "Запрет — это ограничение въезда по закону № 114-ФЗ; выдворение — мера судебного наказания по КоАП РФ; депортация — принудительная высылка при утрате законных оснований пребывания; нежелательность пребывания — распоряжение уполномоченного ведомства, влекущее длительное или бессрочное ограничение."
  },
  {
    "q": "Гарантирует ли брак с гражданином РФ 100% отмену запрета?",
    "a": "Брак является сильнейшим аргументом, но суд оценивает добросовестность, совместное проживание, отсутствие фиктивности и тяжесть нарушений. Грамотно сформированная доказательная база существенно повышает шансы на успех."
  },
  {
    "q": "Что делать, если запрет наложен из-за неоплаченных штрафов?",
    "a": "Необходимо оперативно оплатить все задолженности, получить квитанции с отметкой банка и приложить их к досудебной жалобе в МВД или административному иску вместе с доказательствами тесной связи с Россией."
  },
  {
    "q": "Можно ли въехать в Россию, пока идёт судебный процесс?",
    "a": "До отмены решения и обновления контрольных списков погранслужбы въезд в РФ закрыт. Попытка нелегального пересечения границы влечёт уголовную ответственность по ст. 322 УК РФ."
  }
];
  const pricingTiers: PricingTier[] = [
  {
    "title": "Анализ оснований и запрос",
    "subtitle": "Истребование решения, проверка статьи 114-ФЗ и оценка перспектив",
    "price": "от 5 000 ₽",
    "features": [
      {
        "name": "Адвокатские запросы в МВД и ФСБ",
        "value": "✓"
      },
      {
        "name": "Установление точного срока и органа",
        "value": "✓"
      },
      {
        "name": "Анализ семейных и гуманитарных оснований",
        "value": "✓"
      },
      {
        "name": "Правовое заключение адвоката",
        "value": "✓"
      }
    ]
  },
  {
    "popular": true,
    "badgeText": "Популярно",
    "title": "Досудебное обжалование",
    "subtitle": "Подготовка мотивированного обращения в ведомство-инициатор",
    "price": "от 15 000 ₽",
    "features": [
      {
        "name": "Сбор доказательств семейных связей / лечения",
        "value": "✓"
      },
      {
        "name": "Подготовка жалобы вышестоящему руководству",
        "value": "✓"
      },
      {
        "name": "Контроль регламентных сроков ответа",
        "value": "✓"
      },
      {
        "name": "Взаимодействие с миграционным отделом",
        "value": "✓"
      }
    ]
  },
  {
    "title": "Судебная отмена запрета",
    "subtitle": "Административное исковое заявление и представительство в суде",
    "price": "от 35 000 ₽",
    "features": [
      {
        "name": "Составление иска по нормам КАС РФ",
        "value": "✓"
      },
      {
        "name": "Участие адвоката во всех заседаниях суда",
        "value": "✓"
      },
      {
        "name": "Получение решения суда с отметкой о вступлении",
        "value": "✓"
      },
      {
        "name": "Контроль снятия запрета в Погранслужбе ФСБ",
        "value": "✓"
      }
    ]
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
            <Link href="/grazhdanam/migracionnyj-yurist/" style={{ color: 'var(--color-primary)' }}>Миграционный юрист</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Отмена запрета на въезд в Россию</span>
          </>
        }
        superTitle="Миграционный юрист в Липецке"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Отмена запрета
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              на въезд в Россию
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Установим ведомство и статью закона (114-ФЗ), истребуем официальное решение, подготовим досудебное обращение или административный иск в суд по семейным, гуманитарным и процессуальным основаниям.
          </span>
        }
        primaryCtaText="Обсудить ситуацию"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_cta_zapret_vezd"
        primaryCtaSubtext={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Если требуется срочная помощь юриста,
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              позвоните: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (910) 350-31-11</a>
            </span>
          </span>
        }
        trustItems={[
        {
                "text": "Официальные запросы в МВД, ФСБ, Минюст и Погранслужбу"
        },
        {
                "text": "Защита по семейным основаниям (ст. 8 ЕКПЧ, ст. 38 Конституции РФ)"
        },
        {
                "text": "Отмена неразрешения въезда в суде и досудебном порядке"
        },
        {
                "text": "Куратор — адвокат Д. С. Конопкин"
        }
]}
        imageUrl="/images/konopkin.jpg"
        imageName="Дмитрий Сергеевич Конопкин"
        imageSubtitle="Адвокат, председатель Коллегии адвокатов «Де-Юре», куратор направления «Миграционное право»"
        imageObjectPosition="center 20%"
      />

      {/* ═══ БЛОК 2: ТИПОВЫЕ СИТУАЦИИ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>С какими ситуациями</span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>к нам обращаются доверители</span>
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
              <span style={{ display: 'block' }}>В миграционных делах процедуры часто взаимосвязаны.</span>
              <span style={{ display: 'block' }}>Ознакомьтесь с правовыми решениями для сопутствующих задач:</span>
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 380px))', gap: '20px' }}>

            <a href="/grazhdanam/migracionnyj-yurist/obzhalovanie-nezhelatelnosti-prebyvaniya/" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
              <div className="card service-card hover-lift" style={{ height: '100%', padding: '24px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ margin: '0 0 10px 0', fontSize: '17px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', lineHeight: 1.35 }}>
                    Обжалование нежелательности пребывания
                  </h4>
                  <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    Оспаривание бессрочных распоряжений Минюста, Роспотребнадзора или ФСБ РФ.
                  </p>
                </div>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontSize: '13px', fontWeight: 600, marginTop: '16px', transition: 'color 0.35s ease' }}>
                  <span>Перейти к услуге</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
            </a>

            <a href="/grazhdanam/migracionnyj-yurist/obzhalovanie-resheniya-o-deportacii/" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
              <div className="card service-card hover-lift" style={{ height: '100%', padding: '24px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ margin: '0 0 10px 0', fontSize: '17px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', lineHeight: 1.35 }}>
                    Обжалование решения о депортации
                  </h4>
                  <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    Административный иск по КАС РФ и ходатайства о мерах предварительной защиты.
                  </p>
                </div>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontSize: '13px', fontWeight: 600, marginTop: '16px', transition: 'color 0.35s ease' }}>
                  <span>Перейти к услуге</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 8: ФИНАЛЬНАЯ ФОРМА ═══ */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px', padding: '80px 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>
                  Связаться с нами
                </span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Обсудите ситуацию</span>{' '}
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>с миграционным юристом</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Кратко опишите, что произошло, какое решение вынесено и какие документы у вас на руках. Обращение передадим Дмитрию Сергеевичу Конопкину. Он проверит материалы, оценит риски и свяжется с вами для согласования консультации.
              </p>
              
              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация адвоката</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Позвоните прямо сейчас: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (910) 350-31-11</a>
                </p>
              </div>

              <div style={{ background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Конфиденциальность:</strong>
                Сведения об обращении обрабатываются конфиденциально. Безопасный способ передачи документов согласуем после первичного контакта. Если потребуется адвокатская помощь, её объём и условия фиксируются отдельным соглашением с адвокатом.
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm
                title="Написать нам"
                subtitle={
                  <>
                    <span style={{ display: 'inline-block' }}>Оставьте имя и номер телефона. Адвокат свяжется с вами</span> <br />
                    <span style={{ display: 'inline-block' }}>в течение 15 минут в рабочее время.</span>
                  </>
                }
                subtext={
                  <>
                    <span style={{ display: 'inline-block' }}>Если вы оставите заявку вечером или в&nbsp;выходной день,</span> <br />
                    <span style={{ display: 'inline-block' }}>мы перезвоним в&nbsp;ближайший рабочий день.</span>
                  </>
                }
                buttonText="Отправить обращение"
                commentPlaceholder="Опишите вашу ситуацию: какое решение вынесено, есть ли семья в РФ, какой документ требуется оформить..."
                hiddenFields={[
                  { name: 'source_page', value: '/grazhdanam/migracionnyj-yurist/otmena-zapreta-na-vezd-v-rossiyu/' },
                  { name: 'direction', value: 'otmena_zapreta_vezda' },
                  { name: 'selected_specialist', value: 'konopkin-dmitriy-sergeevich' }
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
