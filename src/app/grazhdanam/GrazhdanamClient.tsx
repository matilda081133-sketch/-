'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';
import TeamCarousel from '@/components/TeamCarousel';
import CasesBlock from '@/components/CasesBlock';
import CtaCard from '@/components/CtaCard';

export default function GrazhdanamClient() {
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
          style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}
          data-analytics="click_citizens_direction"
          data-direction-id={card.title}
          data-target-url={card.link}
        >
          <div
            className="card service-card"
            style={{
              height: '100%',
              padding: '30px',
              background: 'var(--color-white)',
              border: '1px solid var(--color-border)',
              borderRadius: '0',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'all 0.3s ease',
              position: 'relative',
              borderTop: '3px solid var(--color-primary)',
              cursor: 'pointer'
            }}
          >
            <div>
              <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)' }}>
                {card.title}
              </h3>
              <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                {card.desc}
              </p>
            </div>
            <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, marginTop: 'auto' }}>
              <span>Подробнее</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </div>
        </a>
      );
    }

    return (
      <div
        key={idx}
        className="card service-card info-only"
        style={{
          height: '100%',
          padding: '30px',
          background: '#FAF7F2',
          border: '1px solid var(--color-border)',
          borderRadius: '0',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          borderTop: '3px solid rgba(23, 50, 77, 0.2)',
          cursor: 'default'
        }}
      >
        <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)' }}>
          {card.title}
        </h3>
        <p style={{ margin: '0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
          {card.desc}
        </p>
      </div>
    );
  };

  return (
    <main>
      <Header />

      {/* ═══ 1. ПЕРВЫЙ ЭКРАН (MilitaryHero - Шаблонный компонент первого экрана) ═══ */}
      <MilitaryHero
        breadcrumbs={
          <>
            <a href="/-/" style={{ color: 'var(--color-primary)' }}>Главная</a> <span style={{ margin: '0 8px' }}>/</span> 
            <span style={{ color: 'var(--color-text-main)' }}>Гражданам</span>
          </>
        }
        superTitle="Юридическая компания «Де-Юре»"
        title={<><span style={{ display: 'inline-block' }}>Юридическая помощь</span> <br /><span style={{ display: 'inline-block' }}>гражданам в Липецке</span></>}
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Каждым направлением занимается профильный юрист. Помогаем разобраться в ситуации, подготовить необходимые документы и защитить ваши интересы в суде и государственных органах.
          </span>
        }
        primaryCtaText="Описать ситуацию"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_citizens_hero_cta"
        primaryCtaSubtext={
          <>
            Или позвоните:{' '}
            <a href="tel:+74742286838" style={{ color: 'var(--color-deep-blue)', textDecoration: 'none', fontWeight: 600 }} data-analytics="click_citizens_phone" data-placement="hero">
              +7 (4742) 28-68-38
            </a>
          </>
        }
        trustItems={[]}
      />

      {/* ═══ 2. КАТАЛОГ ИЗ 14 НАПРАВЛЕНИЙ (Шаблонные карточки service-card) ═══ */}
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
            <div className="grid grid-3" style={{ gap: '24px' }}>
              {group1Cards.map(renderCard)}
            </div>
          </div>

          {/* Группа 2 */}
          <div style={{ marginBottom: '56px' }}>
            <h3 style={{ fontSize: '22px', fontFamily: 'var(--font-serif)', color: 'var(--color-gold-text, #80633F)', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-gold)' }}></span>
              Группа 2. Долги и обязательства
            </h3>
            <div className="grid grid-3" style={{ gap: '24px' }}>
              {group2Cards.map(renderCard)}
            </div>
          </div>

          {/* Группа 3 */}
          <div>
            <h3 style={{ fontSize: '22px', fontFamily: 'var(--font-serif)', color: 'var(--color-gold-text, #80633F)', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-gold)' }}></span>
              Группа 3. Защита прав в отдельных ситуациях
            </h3>
            <div className="grid grid-3" style={{ gap: '24px' }}>
              {group3Cards.map(renderCard)}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. ЕСЛИ ПОЛЬЗОВАТЕЛЬ НЕ ОПРЕДЕЛИЛСЯ (CtaCard - Шаблонный компонент карточки CTA) ═══ */}
      <section style={{ background: 'var(--color-cream)', padding: '50px 0', borderTop: '1px solid rgba(16, 39, 59, 0.08)', borderBottom: '1px solid rgba(16, 39, 59, 0.08)' }}>
        <div className="container">
          <CtaCard
            title="Не знаете, какое направление выбрать?"
            subtitle="Опишите ситуацию своими словами. Мы уточним обстоятельства и определим, какой специалист сможет помочь."
            buttonText="Описать ситуацию"
            buttonLink="#form"
            style={{ marginTop: 0 }}
          />
        </div>
      </section>

      {/* ═══ 4. СПЕЦИАЛИСТЫ (TeamCarousel - Шаблонный компонент команды) ═══ */}
      <TeamCarousel />

      {/* ═══ 5. ПРАКТИКА (CasesBlock - Шаблонный компонент) ═══ */}
      <CasesBlock
        title="Примеры дел из нашей практики"
        showAllLink=""
        showDemoWarning={false}
        cases={cases.map(c => ({
          category: 'Гражданское право',
          title: c.title,
          problem: c.situation,
          action: c.action,
          result: c.result
        }))}
      />

      {/* ═══ 6. FAQ (FAQBlock - Шаблонный компонент) ═══ */}
      <FAQBlock
        superTitle="Частые вопросы граждан"
        title="Ответы на частые вопросы"
        subtitle="Ответы на популярные вопросы о предоставлении юридической помощи гражданам."
        ctaText="Описать ситуацию"
        ctaLink="#form"
        faqs={faqs}
      />

      {/* ═══ 7. ФИНАЛЬНАЯ ФОРМА (ContactsForm - Шаблонный компонент) ═══ */}
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
    </main>
  );
}
