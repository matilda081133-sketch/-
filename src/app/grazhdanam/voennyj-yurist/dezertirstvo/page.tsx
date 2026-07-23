import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';

export const metadata = {
  title: 'Адвокат по дезертирству в Липецке — ст. 338 УК РФ | Де-Юре',
  description: 'Защита по статье 338 УК РФ: срочный разбор обстоятельств, участие при задержании и добровольной явке, защита на следствии и в суде.'
};

export default function DesertirstvoPage() {
  const faqs = [
    { q: 'Чем дезертирство отличается от самовольного оставления части?', a: 'Ключевое отличие заключается в умысле. Дезертирство (ст. 338 УК РФ) предполагает намерение полностью и навсегда уклониться от прохождения военной службы. СОЧ (ст. 337 УК РФ) подразумевает временное отсутствие с намерением рано или поздно вернуться.' },
    { q: 'Имеет ли значение продолжительность отсутствия?', a: 'Да, но само по себе время отсутствия не является единственным критерием. Гораздо важнее поведение военнослужащего, его контакты, попытки трудоустройства и другие факты, доказывающие или опровергающие умысел на полное уклонение.' },
    { q: 'Что делать при добровольной явке?', a: 'Свяжитесь с адвокатом до явки в часть или правоохранительные органы. Добровольная явка может стать смягчающим обстоятельством, но не гарантирует конкретного исхода. Защитник поможет правильно зафиксировать этот факт.' },
    { q: 'Могут ли при задержании поместить в СИЗО?', a: 'Риск помещения в СИЗО при обвинении в дезертирстве высок. Адвокат проверит законность задержания и основания для избрания меры пресечения, а также подготовит аргументы для возможного смягчения.' },
    { q: 'Какие обстоятельства и документы проверяет адвокат?', a: 'Фактическое местонахождение, обстоятельства ухода, поведение после ухода, состояние здоровья, процессуальные документы, медицинские сведения и документы о семье.' },
    { q: 'Можно ли родственнику заключить соглашение с адвокатом?', a: 'Да, родственник может заключить соглашение в интересах военнослужащего, особенно если тот находится под стражей или не имеет возможности выйти на связь самостоятельно.' },
    { q: 'На каких стадиях подключается защитник?', a: 'Мы готовы подключиться на любой стадии: до дачи первых объяснений, при задержании, на этапе следствия или когда дело уже передано в военный суд.' },
    { q: 'От чего зависит стоимость защиты?', a: 'От стадии, срочности, меры пресечения, местонахождения, объема материалов дела и необходимости выездов.' }
  ];

  return (
    <main>
      <Header />
      
      <MilitaryHero 
        breadcrumbs={
          <>
            <a href="/" style={{ color: 'var(--color-primary)' }}>Главная</a> <span style={{ margin: '0 8px' }}>/</span> 
            <a href="/grazhdanam/" style={{ color: 'var(--color-primary)' }}>Гражданам</a> <span style={{ margin: '0 8px' }}>/</span> 
            <a href="/grazhdanam/voennyj-yurist/" style={{ color: 'var(--color-primary)' }}>Военный юрист</a> <span style={{ margin: '0 8px' }}>/</span> 
            <span style={{ color: 'var(--color-text-main)' }}>Дезертирство</span>
          </>
        }
        superTitle="Уголовная защита военнослужащих • статья 338 УК РФ"
        title="Адвокат по делам о дезертирстве в Липецке"
        subtitle="Адвокат оценит факты, связанные с намерением и продолжительностью отсутствия, подключится при задержании или добровольной явке и будет вести защиту на текущей стадии дела."
        primaryCtaText="Связаться с адвокатом"
        secondaryCtaText="Разобраться в отличиях"
        secondaryCtaLink="#differences"
        urgentHint="Не пытайтесь самостоятельно доказывать, что произошедшее «не является дезертирством», до разговора с адвокатом: содержание объяснений может повлиять на оценку умысла."
        trustItems={[
          { text: 'Защита ведётся адвокатом' },
          { text: 'Подключение\nпри задержании и явке' },
          { text: 'Состав работы — в договоре' }
        ]}
      />

      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title text-center" style={{ marginBottom: '40px' }}>Срочные ситуации</h2>
          <div className="grid grid-3" style={{ gap: '20px' }}>
            {[
              'Задержание', 
              'Объявление в розыск', 
              'Решение вопроса о СИЗО', 
              'Добровольная явка', 
              'Возбуждено уголовное дело', 
              'Дело передано в суд'
            ].map((item, i) => (
              <a key={i} href="#form" style={{
                background: 'var(--color-cream)',
                padding: '24px',
                borderLeft: '4px solid #D9534F',
                fontWeight: 500,
                color: 'var(--color-deep-blue)',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }} className="hover-lift">
                <div style={{ marginBottom: '12px' }}>{item}</div>
                <div style={{ color: 'var(--color-primary)', fontSize: '13px', fontWeight: 600 }}>Связаться →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="differences" className="section" style={{ background: 'var(--color-cream)' }}>
        <div className="container grid grid-2" style={{ gap: '60px' }}>
          <div>
            <h2 className="section-title">Чем дезертирство отличается от СОЧ</h2>
            <div style={{ background: 'var(--color-white)', padding: '32px', marginTop: '24px', borderTop: '4px solid var(--color-primary)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
                Ключевая граница — <strong style={{ color: 'var(--color-deep-blue)' }}>направленность умысла</strong>. Дезертирство подразумевает намерение полностью и навсегда уклониться от прохождения военной службы. Самовольное оставление части (СОЧ) — это намерение временно отсутствовать.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Квалификация зависит от доказательств (поведение, попытки скрыться, приобретение поддельных документов) и не определяется исключительно продолжительностью отсутствия.
              </p>
            </div>
          </div>
          <div>
            <h2 className="section-title">Что выясняет адвокат</h2>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '62px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                'Фактическое местонахождение',
                'Обстоятельства ухода или неявки',
                'Поведение и контакты после ухода',
                'Состояние здоровья',
                'Факт задержания и стадия проверки или дела'
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ color: 'var(--color-gold)', marginTop: '2px' }}>✓</div>
                  <span style={{ color: 'var(--color-text-main)', fontSize: '16px' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div>
              <h2 className="section-title">Добровольная явка и задержание</h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', lineHeight: 1.6, marginBottom: '24px' }}>
                Добровольная явка может учитываться как смягчающее обстоятельство, но не гарантирует конкретного исхода. Мы рекомендуем согласовывать явку с адвокатом.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', lineHeight: 1.6, marginBottom: '24px' }}>
                При задержании адвокат в первую очередь проверяет меру пресечения и риск помещения в СИЗО, чтобы оперативно подготовить позицию защиты.
              </p>
            </div>
            
            <div style={{ background: 'var(--color-deep-blue)', padding: '32px', color: 'var(--color-white)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '24px', fontFamily: 'var(--font-serif)', color: 'var(--color-white)' }}>Что делает защита</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <h4 style={{ color: '#E5C494', marginBottom: '8px', fontSize: '18px', fontWeight: 600 }}>1. Анализ квалификации</h4>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', lineHeight: 1.5 }}>Оценка наличия или отсутствия умысла на дезертирство.</p>
                </div>
                <div>
                  <h4 style={{ color: '#E5C494', marginBottom: '8px', fontSize: '18px', fontWeight: 600 }}>2. Участие в следственных действиях</h4>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', lineHeight: 1.5 }}>Защита при допросах, очных ставках и проверках на месте.</p>
                </div>
                <div>
                  <h4 style={{ color: '#E5C494', marginBottom: '8px', fontSize: '18px', fontWeight: 600 }}>3. Сбор доказательств</h4>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', lineHeight: 1.5 }}>Проверка смягчающих обстоятельств, сбор медицинских и процессуальных документов.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQBlock 
        faqs={faqs} 
        superTitle="Частые вопросы" 
        title="Вопросы по делам о дезертирстве"
        subtitle="Ответы на частые вопросы. Информация носит общий характер. Возможный порядок действий зависит от обстоятельств и документов."
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
              <h2 style={{ fontSize: 'clamp(32px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.1 }}>
                Обсудите обстоятельства с адвокатом<br /> до объяснений, допроса или явки
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', lineHeight: 1.6, marginBottom: '0' }}>
                Срочная связь. Уточним местонахождение и необходимые документы.
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
