import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';

export const metadata = {
  title: 'Адвокат по СОЧ в Липецке — статья 337 УК РФ | Де-Юре',
  description: 'Защита по делам о самовольном оставлении части: разбор обстоятельств, подготовка добровольной явки, участие при задержании, на следствии и в суде.'
};

export default function SochPage() {
  const faqs = [
    { q: 'Что сообщить адвокату в первую очередь?', a: 'Сообщите срок отсутствия, фактическое местонахождение, есть ли факт задержания и какие медицинские документы или жалобы на здоровье имеются.' },
    { q: 'Можно ли обратиться родственнику, если военнослужащий не может позвонить сам?', a: 'Да, родственник может заключить соглашение с адвокатом в интересах военнослужащего.' },
    { q: 'Когда самовольное оставление части становится уголовным делом?', a: 'Значение имеет длительность отсутствия, статус военнослужащего, причины ухода и направленность умысла. Уголовное дело возбуждается при наличии признаков состава преступления, предусмотренного ст. 337 УК РФ.' },
    { q: 'Чем СОЧ отличается от дезертирства?', a: 'Ключевое отличие — в умысле. При СОЧ военнослужащий намеревается временно уклониться от службы, а при дезертирстве — полностью избежать прохождения военной службы.' },
    { q: 'Как организовать добровольную явку с адвокатом?', a: 'Адвокат предварительно разбирает ситуацию, помогает подготовить медицинские и иные документы, согласовывает порядок явки и сопровождает военнослужащего.' },
    { q: 'Какие медицинские документы могут иметь значение?', a: 'Любые справки, выписки и результаты обследований, подтверждающие наличие заболевания, препятствующего прохождению службы, или свидетельствующие о необходимости оказания срочной медицинской помощи.' },
    { q: 'Что делать, если человека задержали и решается вопрос о СИЗО?', a: 'Немедленно свяжитесь с адвокатом. До прибытия защитника не давайте никаких объяснений и показаний.' },
    { q: 'От чего зависит стоимость защиты?', a: 'От стадии дела, срочности, местонахождения доверителя, необходимости срочного выезда и объема работы по сбору доказательств.' }
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
            <span style={{ color: 'var(--color-text-main)' }}>СОЧ</span>
          </>
        }
        superTitle="Уголовная защита военнослужащих • статья 337 УК РФ"
        title="Адвокат по делам о самовольном оставлении части (СОЧ) в Липецке"
        subtitle="Адвокат выяснит срок и причины отсутствия, фактическое местонахождение, наличие задержания и стадию дела, после чего определит безопасный порядок действий и подключится к защите."
        primaryCtaText="Связаться с адвокатом"
        secondaryCtaText="Что сообщить адвокату"
        secondaryCtaLink="#info"
        urgentHint="Не давайте объяснения и не участвуйте в опросе или допросе без адвоката. Сообщите близким фактическое место нахождения и название органа, который проводит действия."
        trustItems={[
          { text: 'Защита ведётся адвокатом' },
          { text: 'Подключение до объяснений и допроса' },
          { text: 'Условия работы — в договоре' }
        ]}
      />

      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title text-center" style={{ marginBottom: '40px' }}>Когда нужна срочная помощь</h2>
          <div className="grid grid-3" style={{ gap: '20px' }}>
            {[
              'Человек находится вне части', 
              'Задержан', 
              'Доставлен в следственный орган или комендатуру', 
              'Решается вопрос о помещении в СИЗО', 
              'Хочет добровольно явиться', 
              'Дело уже в суде'
            ].map((item, i) => (
              <div key={i} style={{
                background: 'var(--color-cream)',
                padding: '24px',
                borderLeft: '4px solid #D9534F',
                fontWeight: 500,
                color: 'var(--color-deep-blue)',
                display: 'flex',
                alignItems: 'center',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }} className="hover-lift">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="info" className="section" style={{ background: 'var(--color-cream)' }}>
        <div className="container grid grid-2" style={{ gap: '60px' }}>
          <div>
            <h2 className="section-title">Что важно сообщить адвокату</h2>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                'Срок отсутствия и фактическое местонахождение',
                'Причина ухода или неявки в часть',
                'Состояние здоровья, наличие медицинских документов',
                'Факт задержания и его причина (если применимо)',
                'Был ли суд по мере пресечения',
                'Связь с частью: какие рапорты или уведомления направлялись'
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ color: 'var(--color-gold)', marginTop: '2px' }}>✓</div>
                  <span style={{ color: 'var(--color-text-main)', fontSize: '16px' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div style={{ background: 'var(--color-white)', padding: '32px', borderTop: '4px solid var(--color-primary)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '20px', color: 'var(--color-deep-blue)', marginBottom: '16px' }}>СОЧ или другая квалификация?</h3>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                Значение имеют длительность отсутствия, статус военнослужащего, причины ухода и направленность умысла. Не пытайтесь самостоятельно выбирать часть статьи. Окончательную квалификацию определяет следствие на основе собранных доказательств. Наша задача — не допустить ухудшения положения.
              </p>
              <h3 style={{ fontSize: '20px', color: 'var(--color-deep-blue)', marginBottom: '16px' }}>Обстоятельства, которые нужно проверить</h3>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                В первую очередь мы анализируем состояние здоровья и медицинские доказательства. Индивидуально проверяются факты неуставных отношений или тяжелая болезнь родственников. Значение обстоятельства зависит от длительности отсутствия, поведения после его возникновения и подтверждающих документов.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div>
              <h2 className="section-title">Добровольная явка</h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', lineHeight: 1.6, marginBottom: '24px' }}>
                Добровольная явка — ответственный шаг, который требует подготовки. Сама по себе явка не исключает ответственность автоматически, но может быть учтена. 
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                {[
                  'Предварительный разбор ситуации',
                  'Подготовка подтверждающих документов',
                  'Согласование порядка явки с адвокатом',
                  'Сопровождение при явке'
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-gold)' }} />
                    <span style={{ fontSize: '16px', color: 'var(--color-deep-blue)', fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div style={{ background: 'var(--color-deep-blue)', padding: '32px', color: 'var(--color-white)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '24px', fontFamily: 'var(--font-serif)', color: 'var(--color-white)' }}>Что делает адвокат</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <h4 style={{ color: '#E5C494', marginBottom: '8px', fontSize: '18px', fontWeight: 600 }}>1. До объяснений</h4>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', lineHeight: 1.5 }}>Изучает ситуацию, оценивает риски и формирует позицию защиты.</p>
                </div>
                <div>
                  <h4 style={{ color: '#E5C494', marginBottom: '8px', fontSize: '18px', fontWeight: 600 }}>2. На следствии</h4>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', lineHeight: 1.5 }}>Участвует в следственных действиях, собирает и представляет доказательства, заявляет ходатайства.</p>
                </div>
                <div>
                  <h4 style={{ color: '#E5C494', marginBottom: '8px', fontSize: '18px', fontWeight: 600 }}>3. В суде</h4>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', lineHeight: 1.5 }}>Ведет защиту в судебных заседаниях, обжалует приговор при необходимости.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQBlock 
        faqs={faqs} 
        superTitle="Частые вопросы" 
        title="Вопросы по делам о СОЧ"
        subtitle="Ответы на частые вопросы родственников и военнослужащих. Информация носит общий характер. Возможный порядок действий зависит от обстоятельств и документов."
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
                Если человека задержали или он готовится явиться,<br /> не откладывайте связь<br /> с адвокатом
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', lineHeight: 1.6, marginBottom: '0' }}>
                Уточним срочность, местонахождение и необходимые документы. Перезвоним в течение 15 минут.
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
