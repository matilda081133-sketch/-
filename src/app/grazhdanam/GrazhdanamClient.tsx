'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import Image from 'next/image';

export default function GrazhdanamClient() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const group1Cards = [
    {
      title: 'Семейный юрист',
      desc: 'Алименты, расторжение брака через суд, раздел имущества супругов, установление и оспаривание отцовства, споры о детях, брачные договоры.',
      link: null
    },
    {
      title: 'Наследственный юрист',
      desc: 'Вступление в наследство через суд, восстановление срока принятия наследства, оспаривание завещания, признание наследника недостойным.',
      link: null
    },
    {
      title: 'Жилищный юрист',
      desc: 'Выселение и выписка через суд, залив квартиры, споры с управляющими компаниями и ЖКХ, раздел порядка оплаты коммунальных услуг, узаконение перепланировки.',
      link: null
    },
    {
      title: 'Юрист по недвижимости',
      desc: 'Сопровождение сделок с недвижимостью, проверка документов и рисков, споры с застройщиками, признание прав на недвижимость, легализация самовольных построек.',
      link: null
    },
    {
      title: 'Земельный юрист',
      desc: 'Споры о границах участков, оформление прав на землю, раздел участка и определение порядка пользования, установление сервитута, изменение категории и вида разрешённого использования.',
      link: '/-/grazhdanam/zemelnyj-yurist/'
    }
  ];

  const group2Cards = [
    {
      title: 'Банкротство физических лиц',
      desc: 'Оценка оснований для банкротства, подготовка заявления и документов, сопровождение процедуры, взаимодействие с финансовым управляющим и кредиторами, защита законных интересов должника.',
      link: null
    },
    {
      title: 'Кредитный юрист',
      desc: 'Споры с банками и коллекторами, отмена судебного приказа, проверка требований по кредиту, оспаривание незаконных начислений, урегулирование кредитной задолженности.',
      link: null
    },
    {
      title: 'Взыскание долгов',
      desc: 'Взыскание долгов по договорам и распискам, возврат займов, взыскание неосновательного обогащения, подготовка претензий и исков, представительство в суде.',
      link: null
    },
    {
      title: 'Юрист по исполнительному производству',
      desc: 'Обжалование действий и бездействия приставов, возврат незаконно списанных денег, снятие ареста со счетов и имущества, взыскание по исполнительному листу.',
      link: null
    }
  ];

  const group3Cards = [
    {
      title: 'Автоюрист',
      desc: 'Лишение водительских прав и оставление места ДТП, споры по ОСАГО и КАСКО, взыскание ущерба после ДТП, оспаривание виновности в аварии.',
      link: null
    },
    {
      title: 'Трудовой юрист',
      desc: 'Незаконное увольнение и сокращение, восстановление на работе, взыскание заработной платы, производственные травмы, другие споры работника с работодателем.',
      link: null
    },
    {
      title: 'Адвокат по уголовным делам',
      desc: 'Защита при задержании, обыске и допросе, участие на следствии и в суде, защита по делам о мошенничестве, наркотиках, имущественных, должностных и экономических преступлениях.',
      link: null
    },
    {
      title: 'Военный юрист',
      desc: 'Выплаты за ранение и выплаты семьям погибших, оспаривание заключений ВВК, споры с военкоматами, признание военнослужащего умершим.',
      link: '/-/grazhdanam/voennyj-yurist/'
    },
    {
      title: 'Миграционный юрист',
      desc: 'Отмена запрета на въезд в Россию, обжалование депортации и административного выдворения, получение РВП и вида на жительство, сопровождение миграционных споров.',
      link: null
    }
  ];

  const specialists = [
    {
      name: 'Бобкин Аркадий Евгеньевич',
      status: 'Директор, управляющий партнёр ЮК «Де-Юре»',
      directions: 'Уголовное право, налоговые и сложные имущественные споры',
      link: '/-/team/bobkin-arkadiy-evgenevich/',
      image: '/-/images/bobkin.jpg'
    },
    {
      name: 'Конопкин Дмитрий Сергеевич',
      status: 'Адвокат, партнёр ЮК «Де-Юре»',
      directions: 'Военное право, защита по уголовным делам, споры с госорганами',
      link: '/-/team/konopkin-dmitriy-sergeevich/',
      image: '/-/images/konopkin.jpg'
    },
    {
      name: 'Смольянинова Марина Валерьевна',
      status: 'Старший юрист ЮК «Де-Юре»',
      directions: 'Гражданские и семейные споры, недвижимость, взыскание задолженности',
      link: '/-/team/smolyaninova-marina-valerevna/',
      image: '/-/images/smolyaninova.jpg'
    },
    {
      name: 'Гусев Олег Юрьевич',
      status: 'Ведущий юрист ЮК «Де-Юре»',
      directions: 'Земельные споры, недвижимость, оформление прав на землю',
      link: '/-/team/gusev-oleg-yurevich/',
      image: '/-/images/gusev.jpg'
    }
  ];

  const cases = [
    {
      title: 'Признали право на наследство после пропуска срока',
      situation: 'Клиент не обратился к нотариусу в шестимесячный срок, но после смерти родственника продолжал пользоваться квартирой и оплачивал расходы на неё.',
      action: 'Изучили документы, собрали подтверждения фактического принятия наследства, подготовили заявление и представили интересы клиента в суде.',
      result: 'Суд признал факт принятия наследства и право собственности клиента на квартиру.'
    },
    {
      title: 'Добились восстановления работника после незаконного увольнения',
      situation: 'Работодатель уволил сотрудника за нарушение трудовых обязанностей, не подтвердив проступок и не соблюдая установленную процедуру.',
      action: 'Проверили кадровые документы, подготовили иск, представили доказательства нарушений и интересы работника в суде.',
      result: 'Суд отменил увольнение, восстановил клиента на работе и взыскал выплаты за время вынужденного прогула.'
    },
    {
      title: 'Признали право собственности на долю в квартире',
      situation: 'Клиент вложил средства в приобретение квартиры, но право на его долю не было оформлено, а договориться с другим участником не удалось.',
      action: 'Проанализировали документы и расчёты сторон, сформировали доказательственную позицию, подготовили иск и сопровождали судебное разбирательство.',
      result: 'Суд признал за клиентом право собственности на долю в квартире.'
    }
  ];

  const faqs = [
    {
      q: 'Как понять, к какому направлению относится моя ситуация?',
      a: 'Необязательно определять направление самостоятельно. Кратко опишите, что произошло, и мы уточним обстоятельства и подберём специалиста по характеру вопроса.'
    },
    {
      q: 'Можно ли обратиться, если вопрос относится сразу к нескольким направлениям?',
      a: 'Да. Такие ситуации встречаются, например, когда спор одновременно затрагивает семейные, наследственные и имущественные вопросы. После первичного разговора определим, какой специалист должен вести дело и в какой последовательности решать задачи.'
    },
    {
      q: 'Какие документы нужны для первой консультации?',
      a: 'Подготовьте документы, которые относятся к ситуации: договоры, решения и определения суда, постановления, уведомления, претензии, переписку и другие имеющиеся материалы. Если вы не уверены, что важно, возьмите всё доступное — после обращения специалист уточнит необходимый перечень.'
    },
    {
      q: 'Можно ли обратиться, если дело уже рассматривается в суде?',
      a: 'Да. Сообщите, на какой стадии находится дело и когда назначено ближайшее заседание. Специалист изучит материалы и оценит, какие действия ещё возможны с учётом текущей стадии процесса.'
    },
    {
      q: 'Можно ли обратиться после вынесения решения суда?',
      a: 'Да. В зависимости от обстоятельств можно оценить основания для обжалования, восстановления процессуального срока или сопровождения исполнительного производства. В таких вопросах важны сроки, поэтому при обращении сразу укажите дату решения и дату его получения.'
    },
    {
      q: 'Можно ли получить юридическую помощь дистанционно?',
      a: 'Да. Консультации можно проводить по телефону или видеосвязи, а документы передавать в электронном виде. Возможность полностью дистанционного ведения конкретного дела зависит от его обстоятельств и необходимых процессуальных действий.'
    },
    {
      q: 'Когда станет известна стоимость юридической помощи?',
      a: 'После того как специалист уточнит обстоятельства, изучит доступные документы и определит объём необходимых действий. Состав услуг, стоимость и порядок оплаты согласовываются до начала работы.'
    }
  ];

  const renderCard = (card: { title: string; desc: string; link: string | null }, idx: number) => {
    if (card.link) {
      return (
        <a
          key={idx}
          href={card.link}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justify: 'space-between',
            background: '#FFFFFF',
            padding: '28px 24px',
            border: '1px solid rgba(16, 39, 59, 0.12)',
            borderTop: '4px solid var(--color-gold, #9B7E55)',
            textDecoration: 'none',
            color: 'inherit',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 16px rgba(16, 39, 59, 0.05)',
            cursor: 'pointer'
          }}
          className="citizens-direction-card clickable"
        >
          <div>
            <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue, #10273B)', marginBottom: '12px', marginTop: 0, lineHeight: 1.3 }}>
              {card.title}
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary, #55606E)', lineHeight: 1.55, margin: '0 0 20px 0' }}>
              {card.desc}
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary, #10273B)', fontWeight: 600, fontSize: '14px', marginTop: 'auto' }}>
            <span>Подробнее</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </a>
      );
    }

    return (
      <div
        key={idx}
        style={{
          display: 'flex',
          flexDirection: 'column',
          background: '#FAF7F2',
          padding: '28px 24px',
          border: '1px solid rgba(16, 39, 59, 0.08)',
          borderTop: '4px solid rgba(16, 39, 59, 0.15)',
          cursor: 'default'
        }}
        className="citizens-direction-card info-only"
      >
        <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue, #10273B)', marginBottom: '12px', marginTop: 0, lineHeight: 1.3 }}>
          {card.title}
        </h3>
        <p style={{ fontSize: '14px', color: 'var(--color-text-secondary, #55606E)', lineHeight: 1.55, margin: 0 }}>
          {card.desc}
        </p>
      </div>
    );
  };

  return (
    <main>
      <Header />

      {/* ═══ 1. ПЕРВЫЙ ЭКРАН ═══ */}
      <section
        style={{
          position: 'relative',
          paddingTop: '130px',
          paddingBottom: '80px',
          background: 'linear-gradient(145deg, var(--color-cream) 0%, rgba(247, 244, 237, 0.4) 100%)',
          overflow: 'hidden'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Breadcrumbs */}
          <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginBottom: '32px' }}>
            <a href="/-/" style={{ color: 'var(--color-primary)' }}>Главная</a> <span style={{ margin: '0 8px' }}>/</span> 
            <span style={{ color: 'var(--color-text-main)' }}>Гражданам</span>
          </div>

          <div style={{ maxWidth: '820px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: '#9B7E55' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-gold-text, #80633F)' }}>
                Юридическая компания «Де-Юре»
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(28px, 4vw, 50px)', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', margin: '0 0 20px 0', lineHeight: 1.15 }}>
              Юридическая помощь гражданам в Липецке
            </h1>

            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, marginBottom: '28px', lineHeight: 1.6, maxWidth: '750px' }}>
              Каждым направлением занимается профильный юрист. Помогаем разобраться в ситуации, подготовить необходимые документы и защитить ваши интересы в суде и государственных органах.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '14px' }}>
              <a
                href="#form"
                className="btn btn-primary"
                style={{ padding: '16px 36px', fontSize: '15px', color: '#FFFFFF', backgroundColor: '#10273B', border: '1px solid #9B7E55', boxShadow: '0 4px 14px rgba(16, 39, 59, 0.25)' }}
                data-analytics="click_citizens_hero_cta"
              >
                Описать ситуацию
              </a>
              <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
                Или позвоните:{' '}
                <a href="tel:+74742286838" style={{ color: 'var(--color-deep-blue)', textDecoration: 'none', fontWeight: 600 }} data-analytics="click_citizens_phone" data-placement="hero">
                  +7 (4742) 28-68-38
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. КАТАЛОГ ИЗ 14 НАПРАВЛЕНИЙ ═══ */}
      <section className="section bg-white" id="catalog" style={{ padding: '80px 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, textAlign: 'left' }}>
            Юридическая помощь по разным направлениям
          </h2>
          <div style={{ width: '60px', height: '2px', background: 'var(--color-gold)', marginBottom: '48px' }}></div>

          {/* Группа 1 */}
          <div style={{ marginBottom: '56px' }}>
            <h3 style={{ fontSize: '22px', fontFamily: 'var(--font-serif)', color: 'var(--color-gold-text, #80633F)', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-gold)' }}></span>
              Группа 1. Семья, жильё и имущество
            </h3>
            <div className="citizens-grid-cards">
              {group1Cards.map(renderCard)}
            </div>
          </div>

          {/* Группа 2 */}
          <div style={{ marginBottom: '56px' }}>
            <h3 style={{ fontSize: '22px', fontFamily: 'var(--font-serif)', color: 'var(--color-gold-text, #80633F)', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-gold)' }}></span>
              Группа 2. Долги и обязательства
            </h3>
            <div className="citizens-grid-cards">
              {group2Cards.map(renderCard)}
            </div>
          </div>

          {/* Группа 3 */}
          <div>
            <h3 style={{ fontSize: '22px', fontFamily: 'var(--font-serif)', color: 'var(--color-gold-text, #80633F)', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-gold)' }}></span>
              Группа 3. Защита прав в отдельных ситуациях
            </h3>
            <div className="citizens-grid-cards">
              {group3Cards.map(renderCard)}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. ЕСЛИ ПОЛЬЗОВАТЕЛЬ НЕ ОПРЕДЕЛИЛСЯ ═══ */}
      <section style={{ background: 'var(--color-cream)', padding: '64px 0', borderTop: '1px solid rgba(16, 39, 59, 0.08)', borderBottom: '1px solid rgba(16, 39, 59, 0.08)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px' }}>
            <h2 style={{ fontSize: '30px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '14px', marginTop: 0 }}>
              Не знаете, какое направление выбрать?
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
              Опишите ситуацию своими словами. Мы уточним обстоятельства и определим, какой специалист сможет помочь.
            </p>
            <a
              href="#form"
              className="btn btn-primary"
              style={{ padding: '14px 32px', fontSize: '15px', color: '#FFFFFF', backgroundColor: '#10273B', border: '1px solid #9B7E55' }}
              data-analytics="click_citizens_help_cta"
            >
              Описать ситуацию
            </a>
          </div>
        </div>
      </section>

      {/* ═══ 4. СПЕЦИАЛИСТЫ ПО ДЕЛАМ ГРАЖДАН ═══ */}
      <section className="section bg-white" id="specialists" style={{ padding: '80px 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0 }}>
            Специалисты по делам граждан
          </h2>
          <div style={{ width: '60px', height: '2px', background: 'var(--color-gold)', marginBottom: '40px' }}></div>

          <div className="citizens-specialists-slider">
            {specialists.map((spec, idx) => (
              <div key={idx} className="citizens-spec-card">
                <div style={{ width: '100%', aspectRatio: '3/4', position: 'relative', overflow: 'hidden', backgroundColor: 'var(--color-cream)', marginBottom: '16px', border: '1px solid rgba(16, 39, 59, 0.1)' }}>
                  <img
                    src={spec.image}
                    alt={spec.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />
                </div>
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '6px', marginTop: 0, lineHeight: 1.3 }}>
                  {spec.name}
                </h3>
                <div style={{ fontSize: '13px', color: 'var(--color-gold-text, #80633F)', fontWeight: 600, marginBottom: '10px', lineHeight: 1.4 }}>
                  {spec.status}
                </div>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.45, marginBottom: '16px', flex: 1 }}>
                  {spec.directions}
                </p>
                <a
                  href={spec.link}
                  style={{ fontSize: '13px', color: 'var(--color-primary, #10273B)', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                  data-analytics="click_citizens_specialist"
                >
                  <span>Подробнее о специалисте</span>
                  <span>→</span>
                </a>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '36px', textAlign: 'center' }}>
            <a
              href="/-/team/"
              className="btn btn-outline"
              style={{ padding: '12px 28px', fontSize: '14px' }}
            >
              Все специалисты
            </a>
          </div>
        </div>
      </section>

      {/* ═══ 5. ПРАКТИКА ═══ */}
      <section style={{ background: 'var(--color-cream)', padding: '80px 0' }} id="cases">
        <div className="container">
          <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0 }}>
            Примеры дел из нашей практики
          </h2>
          <div style={{ width: '60px', height: '2px', background: 'var(--color-gold)', marginBottom: '40px' }}></div>

          <div className="grid grid-3" style={{ gap: '24px' }}>
            {cases.map((c, idx) => (
              <div
                key={idx}
                style={{
                  background: '#FFFFFF',
                  padding: '32px 24px',
                  borderTop: '4px solid var(--color-gold)',
                  boxShadow: '0 4px 16px rgba(16, 39, 59, 0.06)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.35 }}>
                  {c.title}
                </h3>
                <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: '14px', lineHeight: 1.55 }}>
                  <strong style={{ color: 'var(--color-deep-blue)' }}>Ситуация:</strong> {c.situation}
                </div>
                <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: '14px', lineHeight: 1.55 }}>
                  <strong style={{ color: 'var(--color-deep-blue)' }}>Что сделали:</strong> {c.action}
                </div>
                <div style={{ fontSize: '14px', color: 'var(--color-deep-blue)', fontWeight: 600, background: 'rgba(200, 169, 126, 0.12)', padding: '12px 14px', borderLeft: '3px solid var(--color-gold)', marginTop: 'auto' }}>
                  <strong>Результат:</strong> {c.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 6. FAQ ═══ */}
      <section className="section bg-white" id="faq" style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, textAlign: 'center' }}>
            Ответы на частые вопросы
          </h2>
          <div style={{ width: '60px', height: '2px', background: 'var(--color-gold)', margin: '0 auto 48px' }}></div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  style={{
                    border: '1px solid rgba(16, 39, 59, 0.12)',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    background: isOpen ? 'var(--color-cream)' : '#FFFFFF',
                    transition: 'background-color 0.2s ease'
                  }}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    style={{
                      width: '100%',
                      padding: '20px 24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontSize: '17px',
                      fontWeight: 600,
                      color: 'var(--color-deep-blue)',
                      fontFamily: 'var(--font-serif)'
                    }}
                    aria-expanded={isOpen}
                    data-analytics="expand_citizens_faq"
                  >
                    <span>{faq.q}</span>
                    <span style={{ fontSize: '22px', fontWeight: 300, marginLeft: '16px', color: 'var(--color-gold)' }}>
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: '0 24px 24px 24px', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ 7. ФИНАЛЬНАЯ ФОРМА ═══ */}
      <section style={{ background: 'var(--color-cream)', padding: '80px 0' }} id="form">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ background: '#FFFFFF', padding: '48px 40px', borderTop: '4px solid var(--color-gold)', boxShadow: '0 12px 36px rgba(16, 39, 59, 0.08)' }}>
            <h2 style={{ fontSize: '32px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '12px', marginTop: 0, textAlign: 'center' }}>
              Обсудите ситуацию с юристом
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', textAlign: 'center', marginBottom: '36px', lineHeight: 1.6 }}>
              Кратко опишите, что произошло. Мы свяжемся с вами, уточним детали и определим, какой специалист сможет помочь.
            </p>

            <ContactsForm
              title=""
              subtitle=""
              buttonText="Оставить заявку"
              commentPlaceholder="Кратко опишите вашу ситуацию…"
              subtext="Перезвоним вам в течение 15 минут в рабочее время."
              hiddenFields={[
                { name: 'pageId', value: 'TOP-02' },
                { name: 'pageTitle', value: 'Юридическая помощь гражданам в Липецке' },
                { name: 'practice', value: 'Юридическая помощь гражданам' }
              ]}
            />
          </div>
        </div>
      </section>

      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        .citizens-grid-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 991px) {
          .citizens-grid-cards {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .citizens-grid-cards {
            grid-template-columns: 1fr;
          }
        }

        .citizens-specialists-slider {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        @media (max-width: 991px) {
          .citizens-specialists-slider {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 576px) {
          .citizens-specialists-slider {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            padding-bottom: 16px;
            gap: 16px;
          }
          .citizens-spec-card {
            flex: 0 0 85%;
            scroll-snap-align: start;
          }
        }

        .citizens-spec-card {
          background: #FFFFFF;
          border: 1px solid rgba(16, 39, 59, 0.08);
          padding: 20px;
          display: flex;
          flex-direction: column;
        }
      `}} />
    </main>
  );
}
