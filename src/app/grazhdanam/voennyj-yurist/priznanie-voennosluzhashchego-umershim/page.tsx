import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';

export const metadata = {
  title: 'Признание военнослужащего умершим в Липецке | Де-Юре',
  description: 'Помощь семье пропавшего военнослужащего в Липецке: запросы, доказательства, заявление в компетентный суд, признание безвестно отсутствующим или объявление умершим.'
};

export default function PriznanieUmershimPage() {
  const faqs = [
    { q: 'Чем пропавший без вести отличается от безвестно отсутствующего?', a: '«Пропавший без вести» — это фактический статус, когда нет связи, но юридически человек жив, пока суд не установит иное. «Признание безвестно отсутствующим» — это правовой статус, установленный решением суда.' },
    { q: 'Чем признание безвестно отсутствующим отличается от объявления умершим?', a: 'Это две разные юридические процедуры с разными основаниями, сроками и правовыми последствиями. Признание безвестно отсутствующим позволяет назначить управляющего имуществом, а объявление умершим открывает наследство и дает право на выплаты в связи с гибелью.' },
    { q: 'Кто может обратиться в суд?', a: 'Заявление могут подать заинтересованные лица — супруги, дети, родители или иные родственники, чьи права зависят от установления этого статуса (например, для получения выплат или оформления наследства).' },
    { q: 'Какие документы обычно нужны семье?', a: 'Справка об обстоятельствах безвестного отсутствия или гибели, извещения, официальные ответы из воинской части, ответы на запросы из военной прокуратуры и документы, подтверждающие ваше родство.' },
    { q: 'В какой суд подаётся заявление?', a: 'Подсудность зависит от специфики дела. В связи с режимом государственной тайны и особенностями участия военнослужащих, такие дела могут относиться к компетенции суда субъекта РФ (например, Липецкого областного суда). Мы определяем компетентный суд перед подачей заявления.' },
    { q: 'Когда можно начинать судебную процедуру?', a: 'Сроки зависят от конкретных обстоятельств исчезновения и наличия справок об обстоятельствах, угрожавших смертью. Возможны специальные, сокращенные сроки (например, 6 месяцев). Точка отсчета определяется по официальным документам.' },
    { q: 'Нужно ли сначала направлять запросы в воинскую часть и другие органы?', a: 'Да, перед обращением в суд необходимо собрать доказательства того, что были предприняты меры к розыску, но местонахождение военнослужащего установить не удалось.' },
    { q: 'Поможет ли решение суда обратиться за выплатами и наследством?', a: 'Да, вступившее в законную силу решение суда об объявлении умершим является основанием для получения свидетельства о смерти в ЗАГСе, открытия наследства и обращения за страховыми и федеральными выплатами.' }
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
            <span style={{ color: 'var(--color-text-main)' }}>Признание безвестно отсутствующим или умершим</span>
          </>
        }
        superTitle="Помощь семье пропавшего военнослужащего"
        title="Признание военнослужащего безвестно отсутствующим или умершим в Липецке"
        subtitle="Проверим официальный статус и документы, направим необходимые запросы, определим подходящий судебный порядок и представим интересы семьи в деле о признании безвестно отсутствующим или объявлении умершим."
        primaryCtaText="Обсудить документы"
        secondaryCtaText="Как проходит процедура"
        secondaryCtaLink="#procedure"
        trustItems={[
          { text: 'Два разных правовых статуса' },
          { text: 'Запросы и судебное представительство' },
          { text: 'Состав работы — в договоре' }
        ]}
      />

      <section className="section bg-white">
        <div className="container grid grid-2" style={{ gap: '60px' }}>
          <div>
            <h2 className="section-title">С какой ситуацией обращаются</h2>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                'Нет связи с военнослужащим длительное время',
                'Получено официальное уведомление (извещение) о пропаже',
                'Имеется справка об обстоятельствах безвестного отсутствия',
                'От разных ведомств приходят противоречивые ответы',
                'Требуется установить юридический статус для оформления выплат, наследства или решения семейных вопросов'
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ color: 'var(--color-gold)', marginTop: '2px' }}>✓</div>
                  <span style={{ color: 'var(--color-text-main)', fontSize: '16px' }}>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="section-title" style={{ marginTop: '48px', fontSize: '24px' }}>Какие запросы мы делаем</h2>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '16px' }}>Мы не занимаемся фактическим розыском, но проводим юридически значимую подготовку. Направляем запросы в:</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
              <div className="hover-lift" style={{ background: 'var(--color-cream)', padding: '24px', fontWeight: 600, color: 'var(--color-deep-blue)', borderLeft: '4px solid var(--color-gold)', boxShadow: '0 4px 12px rgba(23, 50, 77, 0.06)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>Воинская часть</div>
              <div className="hover-lift" style={{ background: 'var(--color-cream)', padding: '24px', fontWeight: 600, color: 'var(--color-deep-blue)', borderLeft: '4px solid var(--color-gold)', boxShadow: '0 4px 12px rgba(23, 50, 77, 0.06)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>Военно-следственный отдел</div>
              <div className="hover-lift" style={{ background: 'var(--color-cream)', padding: '24px', fontWeight: 600, color: 'var(--color-deep-blue)', borderLeft: '4px solid var(--color-gold)', boxShadow: '0 4px 12px rgba(23, 50, 77, 0.06)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>Военная комендатура</div>
              <div className="hover-lift" style={{ background: 'var(--color-cream)', padding: '24px', fontWeight: 600, color: 'var(--color-deep-blue)', borderLeft: '4px solid var(--color-gold)', boxShadow: '0 4px 12px rgba(23, 50, 77, 0.06)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>Военная прокуратура</div>
            </div>
          </div>
          <div>
            <div style={{ background: 'var(--color-white)', padding: '32px', borderTop: '4px solid var(--color-primary)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '20px', color: 'var(--color-deep-blue)', marginBottom: '16px' }}>Два судебных маршрута</h3>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                Понятие «признание погибшим» в быту часто путают. В праве есть две процедуры:
                <br/><br/>
                <strong style={{ color: 'var(--color-deep-blue)' }}>1. Признание безвестно отсутствующим.</strong> Требует меньше времени с момента потери связи, но не приравнивается к смерти.
                <br/><br/>
                <strong style={{ color: 'var(--color-deep-blue)' }}>2. Объявление умершим.</strong> Приравнивается к смерти. Основанием может быть справка об обстоятельствах, угрожавших смертью, или истечение установленного законом срока.
              </p>
              
              <h3 style={{ fontSize: '20px', color: 'var(--color-deep-blue)', marginBottom: '16px' }}>Когда возможно обращение</h3>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                Возможны специальные правила. Точка отсчёта и применимые сроки определяются юристом только по официальным документам (извещениям, ответам из части). 
              </p>

              <h3 style={{ fontSize: '20px', color: 'var(--color-deep-blue)', marginBottom: '16px' }}>Какой суд рассматривает дело</h3>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                С учетом последних изменений законодательства и практики по защите сведений о военнослужащих, такие дела могут быть подсудны областному суду. Мы определим компетентный суд по действующим правилам на момент подачи.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="procedure" className="section" style={{ background: 'var(--color-cream)' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'flex-end' }}>
            <div>
              <h2 className="section-title">Документы и доказательства</h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', lineHeight: 1.6, marginBottom: '24px' }}>
                Для суда необходимо подготовить базу.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ color: 'var(--color-primary)' }}>•</div>
                  <span>Справка об обстоятельствах безвестного отсутствия или смерти</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ color: 'var(--color-primary)' }}>•</div>
                  <span>Уведомления родственников (извещения)</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ color: 'var(--color-primary)' }}>•</div>
                  <span>Ответы воинской части и следственных органов</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ color: 'var(--color-primary)' }}>•</div>
                  <span>Документы о родстве (свидетельства)</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ color: 'var(--color-primary)' }}>•</div>
                  <span>Документы, подтверждающие юридическую заинтересованность (для чего нужен статус)</span>
                </li>
              </ul>
              
              <div style={{ padding: '24px', background: 'var(--color-white)', borderLeft: '4px solid var(--color-primary)' }}>
                <h3 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', marginBottom: '8px' }}>Что меняется после решения?</h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  Вступившее в силу решение суда дает возможность решать вопросы выплат, наследства и семейных отношений. Однако оно не означает автоматического назначения всех выплат — за ними нужно будет обращаться отдельно.
                </p>
              </div>
            </div>
            
            <div style={{ background: 'var(--color-deep-blue)', padding: '40px', color: 'var(--color-white)' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '24px', fontFamily: 'var(--font-serif)', color: 'var(--color-white)' }}>Этапы работы</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold)', flexShrink: 0, fontSize: '18px', fontFamily: 'var(--font-serif)' }}>1</div>
                  <div>
                    <strong style={{ display: 'block', color: 'var(--color-white)', marginBottom: '4px' }}>Анализ статуса</strong>
                    <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>Оцениваем имеющиеся документы и определяем правовой маршрут.</span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold)', flexShrink: 0, fontSize: '18px', fontFamily: 'var(--font-serif)' }}>2</div>
                  <div>
                    <strong style={{ display: 'block', color: 'var(--color-white)', marginBottom: '4px' }}>Запросы</strong>
                    <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>Истребуем ответы от ведомств.</span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold)', flexShrink: 0, fontSize: '18px', fontFamily: 'var(--font-serif)' }}>3</div>
                  <div>
                    <strong style={{ display: 'block', color: 'var(--color-white)', marginBottom: '4px' }}>Подготовка заявления</strong>
                    <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>Формируем доказательную базу и подаем заявление в компетентный суд.</span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold)', flexShrink: 0, fontSize: '18px', fontFamily: 'var(--font-serif)' }}>4</div>
                  <div>
                    <strong style={{ display: 'block', color: 'var(--color-white)', marginBottom: '4px' }}>Судебное представительство</strong>
                    <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>Участвуем в заседаниях и добиваемся решения.</span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold)', flexShrink: 0, fontSize: '18px', fontFamily: 'var(--font-serif)' }}>5</div>
                  <div>
                    <strong style={{ display: 'block', color: 'var(--color-white)', marginBottom: '4px' }}>Дальнейшие действия</strong>
                    <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>Помогаем использовать решение для выплат или наследства.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQBlock 
        faqs={faqs} 
        superTitle="Вопросы и ответы" 
        title="Частые вопросы о судебной процедуре"
        subtitle="Ответы на популярные вопросы. Информация носит общий характер. Возможный порядок действий зависит от обстоятельств и документов."
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
                Обсудить ситуацию<br /> с адвокатом
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', lineHeight: 1.6, marginBottom: '0' }}>
                Уточним, сколько времени прошло с момента исчезновения, есть ли ответ из части и в какой суд нужно обращаться. Перезвоним в течение 15 минут.
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
