import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';

export const metadata = {
  title: 'Оспаривание ВВК в Липецке — помощь юриста | Де-Юре',
  description: 'Помощь при несогласии с ВВК: анализ медицинских документов, обращение в вышестоящую комиссию, повторное освидетельствование и судебное обжалование.'
};

export default function VvkPage() {
  const faqs = [
    { q: 'Какие заключения ВВК можно оспорить?', a: 'Оспорить можно несогласие с категорией годности, неполный учет заболевания или травмы, неправильное определение причинной связи (например, «общее заболевание» вместо «военной травмы»), а также решения об отпуске или освобождении.' },
    { q: 'Куда сначала обращаться: в вышестоящую ВВК или в суд?', a: 'Закон позволяет обращаться как в вышестоящую военно-врачебную комиссию, так и напрямую в суд. Маршрут выбирается индивидуально в зависимости от характера нарушений и собранных медицинских документов.' },
    { q: 'Какие медицинские документы нужны?', a: 'Само заключение ВВК (или справка), медицинская карта, выписки из истории болезни, результаты анализов и обследований, подтверждающие наличие диагноза или тяжесть травмы.' },
    { q: 'Что делать, если документы не выдают или обследование было неполным?', a: 'В рамках работы мы можем подготовить и направить адвокатские запросы или жалобы для истребования вашей медицинской документации из госпиталя или части.' },
    { q: 'Можно ли требовать повторного освидетельствования?', a: 'Да, при выявлении нарушений или изменении состояния здоровья можно заявлять требования о проведении контрольного или повторного освидетельствования.' },
    { q: 'Нужна ли независимая экспертиза?', a: 'Она может потребоваться в судебном процессе, если суд сочтет необходимым провести независимую военно-врачебную экспертизу для проверки доводов сторон.' },
    { q: 'Приостанавливает ли обжалование исполнение других решений?', a: 'Само по себе обжалование заключения ВВК автоматически не приостанавливает решения призывной комиссии или приказы командования. Приостановка требует подачи отдельных заявлений.' },
    { q: 'От чего зависит стоимость работы?', a: 'От объема медицинской документации, необходимости истребования документов, уровня комиссии, в которую подается жалоба, а также участия в суде и экспертизе.' }
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
            <span style={{ color: 'var(--color-text-main)' }}>Оспаривание ВВК</span>
          </>
        }
        superTitle="Военно-врачебная комиссия • досудебное и судебное обжалование"
        title={<>Оспаривание заключения<br />ВВК в Липецке</>}
        subtitle="Проверим заключение и медицинские документы, определим порядок обращения в вышестоящую ВВК или суд и сформулируем требования о пересмотре результата освидетельствования."
        primaryCtaText="Обсудить заключение ВВК"
        secondaryCtaText="Какие документы нужны"
        secondaryCtaLink="#documents"
        trustItems={[
          { text: 'Начинаем с медицинских документов' },
          { text: 'Вышестоящая ВВК и суд — по ситуации' },
          { text: 'Состав работы — в договоре' }
        ]}
      />

      <section className="section bg-white">
        <div className="container grid grid-2" style={{ gap: '60px', alignItems: 'center' }}>
          <div>
            <h2 className="section-title">Что оспаривают</h2>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                'Неверную категорию годности к службе',
                'Неполный учет имеющегося заболевания или травмы',
                'Причинную связь (например, установление «общего заболевания» вместо «военной травмы»)',
                'Неправомерное заключение об отпуске или освобождении от обязанностей',
                'Неполное медицинское обследование'
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ color: 'var(--color-gold)', marginTop: '2px' }}>✓</div>
                  <span style={{ color: 'var(--color-text-main)', fontSize: '16px' }}>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="section-title" style={{ marginTop: '48px', fontSize: '24px' }}>Если документы не выдают</h2>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
              Нередки случаи, когда госпиталь или часть не выдают на руки заключение или медицинские карты. В рамках нашей работы мы можем направить адвокатский запрос для истребования необходимых документов.
            </p>
          </div>
          <div>
            <div style={{ background: 'var(--color-cream)', padding: '32px', borderTop: '4px solid var(--color-primary)' }}>
              <h3 style={{ fontSize: '20px', color: 'var(--color-deep-blue)', marginBottom: '16px' }}>Что мы проверяем в документах</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  'Само заключение ВВК (или справку о результатах)',
                  'Установленные диагнозы и проведенные обследования',
                  'Выписки из госпиталей и результаты лечения',
                  'Медицинские карты военнослужащего',
                  'Документы, подтверждающие обстоятельства получения ранения или травмы',
                  'Подтверждение неполного обследования или отказа выдать документы'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ color: 'var(--color-primary)' }}>•</div>
                    <span style={{ color: 'var(--color-deep-blue)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-cream)' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'flex-end' }}>
            <div>
              <h2 className="section-title">Маршрут обжалования</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '24px' }}>
                <div style={{ padding: '20px', background: 'var(--color-white)', borderRadius: '0', boxShadow: '0 5px 15px rgba(0,0,0,0.03)' }}>
                  <strong style={{ color: 'var(--color-deep-blue)' }}>1. Анализ и дообследование</strong>
                  <p style={{ color: 'var(--color-text-secondary)', marginTop: '8px', fontSize: '14px' }}>Получение документов и, при необходимости, независимое обследование.</p>
                </div>
                <div style={{ padding: '20px', background: 'var(--color-white)', borderRadius: '0', boxShadow: '0 5px 15px rgba(0,0,0,0.03)' }}>
                  <strong style={{ color: 'var(--color-deep-blue)' }}>2. Вышестоящая ВВК или Суд</strong>
                  <p style={{ color: 'var(--color-text-secondary)', marginTop: '8px', fontSize: '14px' }}>Жалоба в вышестоящую комиссию или административное исковое заявление.</p>
                </div>
                <div style={{ padding: '20px', background: 'var(--color-white)', borderRadius: '0', boxShadow: '0 5px 15px rgba(0,0,0,0.03)' }}>
                  <strong style={{ color: 'var(--color-deep-blue)' }}>3. Экспертиза в суде</strong>
                  <p style={{ color: 'var(--color-text-secondary)', marginTop: '8px', fontSize: '14px' }}>Проведение судебной военно-врачебной экспертизы (по необходимости).</p>
                </div>
              </div>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px', marginTop: '16px', fontStyle: 'italic' }}>
                * Маршрут не является обязательной линейкой: возможны разные входы в процедуру в зависимости от ситуации.
              </p>
            </div>
            
            <div style={{ background: 'var(--color-deep-blue)', padding: '40px', color: 'var(--color-white)' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '24px', fontFamily: 'var(--font-serif)', color: 'var(--color-white)' }}>Какие требования можно заявлять</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ color: 'var(--color-gold)' }}>✓</div>
                  <span>Признание заключения ВВК незаконным</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ color: 'var(--color-gold)' }}>✓</div>
                  <span>Отмена заключения комиссии</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ color: 'var(--color-gold)' }}>✓</div>
                  <span>Обязанность провести повторное или контрольное освидетельствование</span>
                </li>
              </ul>
              
              <h3 style={{ fontSize: '20px', marginBottom: '16px', fontFamily: 'var(--font-serif)', color: 'var(--color-white)' }}>Что может изменить новое заключение?</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
                В зависимости от вида заключения, пересмотр может изменить категорию годности, возможность исполнения обязанностей или занимаемую должность, решить вопрос увольнения со службы, а также изменить оценку причинной связи и тяжести травмы для выплат.
              </p>
            </div>
          </div>
          
          <div style={{ marginTop: '40px', padding: '24px', background: 'var(--color-white)', borderLeft: '4px solid var(--color-gold)' }}>
            <h4 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', marginBottom: '8px' }}>Сроки</h4>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Сроки обжалования и действия заключений различаются по категориям военнослужащих и виду самого заключения (согласно Положению о ВВК). Рекомендуем обращаться за помощью сразу после получения спорного документа.
            </p>
          </div>
        </div>
      </section>

      <section id="documents" className="section bg-white">
        <div className="container">
          <h2 className="section-title text-center" style={{ marginBottom: '40px' }}>Этапы работы</h2>
          <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ position: 'absolute', left: '23px', top: '24px', bottom: '24px', width: '2px', background: 'rgba(23, 50, 77, 0.1)' }}></div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {[
                { t: 'Анализ', d: 'Получаем заключение и меддокументы, проверяем наличие нарушений.' },
                { t: 'Выбор маршрута', d: 'Определяем, куда эффективнее подать жалобу — в вышестоящую ВВК или в суд.' },
                { t: 'Подготовка', d: 'Готовим мотивированную жалобу или административный иск, при необходимости истребуем документы.' },
                { t: 'Рассмотрение', d: 'Участвуем в рассмотрении жалобы или представляем интересы в суде.' },
                { t: 'Экспертиза', d: 'Инициируем независимую экспертизу в рамках судебного процесса.' },
                { t: 'Результат', d: 'Сопровождаем процедуру повторного освидетельствования (при назначении).' }
              ].map((step, i) => (
                <div key={i} style={{ display: 'flex', gap: '24px', position: 'relative', zIndex: 1 }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--color-white)', border: '2px solid var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', fontWeight: 'bold', fontSize: '20px', fontFamily: 'var(--font-serif)', flexShrink: 0, boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                    0{i + 1}
                  </div>
                  <div style={{ paddingTop: '10px' }}>
                    <h4 style={{ fontSize: '20px', color: 'var(--color-deep-blue)', marginBottom: '8px', fontFamily: 'var(--font-serif)' }}>{step.t}</h4>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: 1.6, margin: 0 }}>{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQBlock 
        faqs={faqs} 
        superTitle="Вопросы и ответы" 
        title="Вопросы об оспаривании ВВК"
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
                Расскажите о заключении ВВК
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', lineHeight: 1.6, marginBottom: '0' }}>
                Уточним вашу ситуацию, имеющиеся диагнозы и сроки на обжалование. Перезвоним в течение 15 минут.
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
