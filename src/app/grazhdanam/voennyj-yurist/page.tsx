import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';

export const metadata = {
  title: 'Военный юрист в Липецке — помощь военнослужащим | Де-Юре',
  description: 'Юридическая помощь военнослужащим и родственникам в Липецке: уголовные дела, ВВК, выплаты, военкомат и признание военнослужащего умершим. Работа по России.'
};

export default function MilitaryLawyerHub() {
  const directions = [
    {
      title: 'Самовольное оставление части (СОЧ)',
      desc: 'Помощь при задержании, подготовке добровольной явки и защита по статье 337 УК РФ.',
      link: '/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/',
      urgent: true
    },
    {
      title: 'Дезертирство',
      desc: 'Срочный разбор умысла, участие при явке или задержании по статье 338 УК РФ.',
      link: '/grazhdanam/voennyj-yurist/dezertirstvo/',
      urgent: true
    },
    {
      title: 'Выплаты за ранение',
      desc: 'Проверка справок, запрос документов и обжалование при задержке или отказе.',
      link: '/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/'
    },
    {
      title: 'Выплаты семье погибшего',
      desc: 'Проверка оснований по каждому получателю, сбор документов и доказывание иждивения.',
      link: '/grazhdanam/voennyj-yurist/vyplaty-seme-pogibshego-voennosluzhashchego/'
    },
    {
      title: 'Признание безвестно отсутствующим',
      desc: 'Установление юридического статуса через суд для выплат и наследства.',
      link: '/grazhdanam/voennyj-yurist/priznanie-voennosluzhashchego-umershim/'
    },
    {
      title: 'Оспаривание заключения ВВК',
      desc: 'Анализ медицинских документов, вышестоящая комиссия и суд.',
      link: '/grazhdanam/voennyj-yurist/osparivanie-zaklyucheniya-vvk/'
    },
    {
      title: 'Споры с военкоматом',
      desc: 'Обжалование решений призывной комиссии и вопросы воинского учета.',
      link: '/grazhdanam/voennyj-yurist/spory-s-voenkomatom/'
    },
    {
      title: 'Иной вопрос',
      desc: 'Не нашли свою ситуацию? Оставьте контакты, и мы разберем ваш случай индивидуально.',
      link: '#form'
    }
  ];

  const faqs = [
    { q: 'С какими вопросами помогает военный юрист?', a: 'Мы помогаем по уголовным делам (СОЧ, дезертирство), оспариванию заключений ВВК, получению положенных выплат (за ранение, семье погибшего), спорам с военкоматом и признанию военнослужащего безвестно отсутствующим или умершим.' },
    { q: 'Когда для дела обязательно нужен адвокат?', a: 'Адвокат обязательно требуется для защиты по уголовным делам. По вопросам выплат, ВВК и административным спорам в зависимости от задачи может работать юрист или адвокат.' },
    { q: 'Можно ли обратиться родственнику военнослужащего?', a: 'Да. Родственник может обратиться за первичной консультацией и заключить соглашение в интересах военнослужащего. Возможность представительства по конкретным действиям зависит от наличия доверенности.' },
    { q: 'Можно ли вести дело дистанционно из другого региона?', a: 'Подготовка рапортов, заявлений, жалоб и анализ документов могут осуществляться дистанционно. Уголовная защита требует личного участия адвоката.' },
    { q: 'Что сообщить, если военнослужащего задержали?', a: 'В первую очередь сообщите фактическое место нахождения (отдел, комендатура и т.д.) и причину задержания, если она известна. Немедленно свяжитесь с адвокатом.' },
    { q: 'Какие документы нужны для первичного разбора?', a: 'Подготовьте медицинские документы, справки, рапорты, процессуальные документы или ответы органов — только то, что относится к вашей ситуации.' },
    { q: 'Можно ли подготовить рапорт или жалобу дистанционно?', a: 'Да, мы можем подготовить документы дистанционно. Подписывать и подавать их будет сам военнослужащий.' },
    { q: 'От чего зависит стоимость помощи?', a: 'Стоимость зависит от срочности, объема анализируемых документов, стадии дела и необходимости личного участия адвоката или выезда.' }
  ];

  return (
    <main>
      <Header />
      
      <MilitaryHero 
        breadcrumbs={
          <>
            <a href="/" style={{ color: 'var(--color-primary)' }}>Главная</a> <span style={{ margin: '0 8px' }}>/</span> 
            Гражданам <span style={{ margin: '0 8px' }}>/</span> 
            <span style={{ color: 'var(--color-text-main)' }}>Военный юрист</span>
          </>
        }
        superTitle="Военное право • Липецк и работа по России"
        title="Военный юрист в Липецке"
        subtitle="Помогаем военнослужащим и их близким по уголовным делам, ВВК, выплатам, спорам с военкоматами и признанию пропавшего военнослужащего безвестно отсутствующим или умершим. После первичного разбора определим, кто нужен — юрист или адвокат — и возможный порядок действий."
        primaryCtaText="Обсудить ситуацию"
        secondaryCtaText="Выбрать направление"
        secondaryCtaLink="#directions"
        urgentHint="Если человека задержали или решается вопрос о помещении в СИЗО, сразу сообщите причину задержания и фактическое место нахождения."
        trustItems={[
          { text: 'Юрист или адвокат — по характеру дела' },
          { text: 'Липецк и дистанционная работа по России' },
          { text: 'Состав и стоимость — в договоре' }
        ]}
      />

      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: '40px' }}>Кому помогаем</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
            gap: '20px'
          }}>
            {['Контрактники', 'Мобилизованные', 'Добровольцы', 'Призывники', 'Участники СВО', 'Родственники'].map((aud, i) => (
              <div key={i} style={{
                background: 'var(--color-cream)',
                padding: '24px',
                textAlign: 'left',
                fontWeight: 600,
                color: 'var(--color-deep-blue)',
                borderBottom: '3px solid var(--color-gold)'
              }}>
                {aud}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="directions" className="section" style={{ background: 'var(--color-cream)' }}>
        <div className="container">
          <h2 className="section-title text-center">Выберите направление</h2>
          <div className="grid grid-4" style={{ marginTop: '48px', gap: '16px' }}>
            {directions.map((dir, i) => (
              <a key={i} href={dir.link} style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                background: 'var(--color-white)',
                padding: '32px',
                textDecoration: 'none',
                position: 'relative',
                boxShadow: '0 10px 30px rgba(0,0,0,0.03)'
              }} className={`hover-lift ${dir.urgent ? 'border-red' : 'border-hover-blue'}`}>
                {dir.urgent && (
                  <span style={{ 
                    position: 'absolute', 
                    top: '12px', right: '12px', 
                    background: 'rgba(217, 83, 79, 0.1)', 
                    color: '#D9534F', 
                    fontSize: '11px', 
                    fontWeight: 700, 
                    padding: '4px 8px', 
                    borderRadius: '4px',
                    textTransform: 'uppercase'
                  }}>
                    Срочно
                  </span>
                )}
                <h3 style={{ fontSize: '20px', marginBottom: '16px', color: 'var(--color-deep-blue)' }}>{dir.title}</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: 1.5, marginBottom: '24px' }}>
                  {dir.desc}
                </p>
                <div style={{ marginTop: 'auto', color: 'var(--color-primary)', fontWeight: 600, fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  Подробнее <span style={{ transition: 'transform 0.3s' }}>→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container grid grid-2" style={{ gap: '60px' }}>
          <div>
            <h2 className="section-title">Срочные ситуации</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '32px' }}>
              {[
                { t: 'Задержание / Решение о СИЗО', d: 'Сообщите фактическое место нахождения, причину задержания и не давайте объяснений без адвоката.' },
                { t: 'Добровольная явка', d: 'Свяжитесь с адвокатом до прибытия в часть или комендатуру для оценки рисков и формирования позиции.' },
                { t: 'Решение призывной комиссии', d: 'Если назначена дата отправки, оспорить решение нужно до этого момента, иначе обжалование усложнится.' }
              ].map((urg, i) => (
                <div key={i} style={{ padding: '24px', border: '1px solid var(--color-border)', borderLeft: '4px solid #D9534F' }}>
                  <h4 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', marginBottom: '8px' }}>{urg.t}</h4>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', marginBottom: '16px' }}>{urg.d}</p>
                  <a href="#form" style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '14px' }}>Связаться с адвокатом →</a>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="section-title">Другие вопросы</h2>
            <div style={{ padding: '32px', background: 'var(--color-cream)', marginTop: '32px' }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  'Невыплата денежного довольствия и иных положенных выплат',
                  'Составление рапортов и жалоб',
                  'Обращения в военную прокуратуру'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ color: 'var(--color-gold)', marginTop: '2px' }}>✓</div>
                    <span style={{ color: 'var(--color-deep-blue)', fontWeight: 500 }}>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#form" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>Обсудить вопрос</a>
            </div>

            <div style={{ marginTop: '40px' }}>
              <h3 style={{ fontSize: '24px', color: 'var(--color-deep-blue)', marginBottom: '16px' }}>Что можно сделать дистанционно</h3>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Подготовка рапортов, заявлений и жалоб, анализ документов, консультация родственников. Важно: документ подписывает сам военнослужащий. Представительство родственника зависит от доверенности, а уголовная защита требует личного участия адвоката.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'linear-gradient(to right, var(--color-deep-blue) 0%, #1c3c5d 100%)', color: 'var(--color-white)' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px' }}>
            <div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', marginBottom: '24px', color: 'var(--color-white)' }}>Кто подключается к делу</h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '18px', lineHeight: 1.6 }}>
                В уголовном деле защиту ведет адвокат. По выплатам, ВВК и административным спорам в зависимости от задачи может работать юрист или адвокат. Мы определяем нужного специалиста на этапе разбора ситуации.
              </p>
            </div>
            <div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', marginBottom: '24px', color: 'var(--color-white)' }}>Что происходит после обращения</h2>
              <ol style={{ paddingLeft: '20px', color: 'rgba(255,255,255,0.8)', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '16px', lineHeight: 1.6 }}>
                <li>Выясняем суть, срочность, местонахождение и имеющиеся документы.</li>
                <li>Определяем правовой маршрут и нужного специалиста.</li>
                <li>Согласуем состав работ и стоимость.</li>
                <li>Начинаем работу.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <FAQBlock 
        faqs={faqs} 
        superTitle="Вопросы и ответы" 
        title="Частые вопросы о военной защите"
        subtitle="Ответы на популярные вопросы о юридической помощи военнослужащим. Информация носит общий характер. Возможный порядок действий зависит от обстоятельств и документов."
      />

      <section className="section bg-white" id="form">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>
                  Связаться с нами
                </span>
              </div>
              <h2 style={{ fontSize: 'clamp(32px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '24px', lineHeight: 1.1 }}>
                Расскажите, что произошло
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', lineHeight: 1.6, marginBottom: '0' }}>
                Уточним срочность, нужного специалиста и какие документы потребуются для первичного разбора. Перезвоним в течение 15 минут.
              </p>
            </div>
            <div>
              <ContactsForm title="Написать нам" subtitle="" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
