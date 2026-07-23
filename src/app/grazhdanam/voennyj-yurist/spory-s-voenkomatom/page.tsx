import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';

export const metadata = {
  title: 'Споры с военкоматом в Липецке — помощь юриста | Де-Юре',
  description: 'Оспаривание решений призывной комиссии, действий и бездействия военкомата: отсрочка, призыв, воинский учёт, документы, жалоба и административный иск.'
};

export default function VoenkomatPage() {
  const faqs = [
    { q: 'Чем военкомат, призывная комиссия и ВВК отличаются друг от друга?', a: 'Военкомат ведет воинский учет и осуществляет призыв. Призывная комиссия (районная или субъекта РФ) принимает решения о призыве, предоставлении отсрочек и освобождении от службы. ВВК (военно-врачебная комиссия) дает лишь медицинское заключение о категории годности. Решения каждого из этих органов обжалуются по своим правилам.' },
    { q: 'Какие решения призывной комиссии можно обжаловать?', a: 'Можно обжаловать решение о призыве на военную службу, отказ в предоставлении законной отсрочки или освобождения от службы, решение о замене службы на АГС, а также бездействие призывной комиссии.' },
    { q: 'Куда жаловаться на действия или бездействие военкомата?', a: 'Действия и бездействие военкомата можно обжаловать военному комиссару субъекта РФ, в военную прокуратуру или в суд в порядке административного судопроизводства.' },
    { q: 'Как обжаловать отказ в отсрочке?', a: 'Решение районной комиссии об отказе в отсрочке обжалуется в призывную комиссию субъекта РФ (Липецкой области) или в суд.' },
    { q: 'Приостанавливает ли жалоба отправку в войска?', a: 'Обжалование не любого документа автоматически приостанавливает отправку. Например, для решения призывной комиссии субъекта РФ, обжалованного в суд, закон предусматривает приостановление до вступления судебного решения в силу. Конкретный механизм зависит от акта и требует срочной проверки юристом.' },
    { q: 'Что делать, если решение и дата отправки назначены одновременно?', a: 'Необходимо действовать немедленно. Сообщите нам дату отправки. Срочно готовится и подается жалоба в призывную комиссию субъекта РФ или административный иск в суд с ходатайством о применении мер предварительной защиты.' },
    { q: 'Какие документы нужны для суда с военкоматом?', a: 'Копия оспариваемого решения (или выписка из протокола), повестка, документы, подтверждающие ваше право на отсрочку или освобождение (медицинские, справки с учебы/работы, документы о семейном положении).' },
    { q: 'Какой срок обращения в суд и от какого события он считается?', a: 'Общий срок для подачи административного иска — три месяца с момента, когда вам стало известно о нарушении ваших прав (обычно с даты получения решения). Однако специфика призыва требует незамедлительного обращения в суд, не дожидаясь истечения этого срока.' }
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
            <span style={{ color: 'var(--color-text-main)' }}>Споры с военкоматом</span>
          </>
        }
        superTitle="Военкомат и призывная комиссия • жалоба и суд"
        title="Юрист по спорам с военкоматом в Липецке"
        subtitle="Определим, какое решение или действие нарушает права, соберём документы и выберем порядок защиты: вышестоящая комиссия, жалоба, прокуратура или административный иск."
        primaryCtaText="Обсудить решение военкомата"
        secondaryCtaText="Что можно оспорить"
        secondaryCtaLink="#what-to-dispute"
        urgentHint="Если назначена дата отправки, сообщите её сразу. Правовой эффект зависит от того, какое решение принято и каким органом; действовать нужно до исполнения спорного решения."
        trustItems={[
          { text: 'Разграничиваем решения разных органов' },
          { text: 'Жалоба и суд — по ситуации' },
          { text: 'Состав работы — в договоре' }
        ]}
      />

      <section id="what-to-dispute" className="section bg-white">
        <div className="container grid grid-2" style={{ gap: '60px', alignItems: 'flex-end' }}>
          <div>
            <h2 className="section-title">Что можно оспорить</h2>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                'Решение о призыве на военную службу',
                'Отказ в предоставлении законной отсрочки',
                'Действия или бездействие должностных лиц по воинскому учёту',
                'Отказ выдать необходимый документ (справку, военный билет)',
                'Спорные вопросы, связанные с мобилизацией',
                'Процедурные нарушения при медицинском освидетельствовании'
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ color: 'var(--color-gold)', marginTop: '2px' }}>✓</div>
                  <span style={{ color: 'var(--color-text-main)', fontSize: '16px' }}>{item}</span>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: '24px', padding: '16px 24px', background: 'var(--color-cream)' }}>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px', margin: 0 }}>
                * Если вы не согласны именно с категорией годности к военной службе, ознакомьтесь с процедурой <a href="/grazhdanam/voennyj-yurist/osparivanie-zaklyucheniya-vvk/" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>оспаривания заключения ВВК</a>.
              </p>
            </div>
          </div>
          <div>
            <div style={{ background: 'var(--color-deep-blue)', padding: '40px', color: 'var(--color-white)' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '24px', fontFamily: 'var(--font-serif)', color: 'var(--color-white)' }}>Определяем орган и документ</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: '24px' }}>
                Первый шаг в любой защите — точно определить, чей акт мы оспариваем. В системе работают разные органы, и у каждого свои полномочия и порядок обжалования:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ color: 'var(--color-gold)' }}>•</div>
                  <span>Военный комиссариат</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ color: 'var(--color-gold)' }}>•</div>
                  <span>Районная или муниципальная призывная комиссия</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ color: 'var(--color-gold)' }}>•</div>
                  <span>Призывная комиссия субъекта РФ</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-cream)' }}>
        <div className="container grid grid-2" style={{ gap: '60px', alignItems: 'flex-start' }}>
          <div>
            <h2 className="section-title">Способ защиты</h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', lineHeight: 1.6, marginBottom: '24px' }}>
              Мы не предлагаем один универсальный путь. Способ обжалования выбирается исходя из документа и срочности:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ background: 'var(--color-white)', padding: '24px', borderLeft: '4px solid var(--color-primary)' }}>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '8px' }}>Жалоба в вышестоящий орган</h4>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px', margin: 0 }}>Подача жалобы в призывную комиссию субъекта РФ на решение районной комиссии.</p>
              </div>
              <div style={{ background: 'var(--color-white)', padding: '24px', borderLeft: '4px solid var(--color-primary)' }}>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '8px' }}>Обращение в прокуратуру</h4>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px', margin: 0 }}>При явных нарушениях закона, процедур призыва или бездействии должностных лиц.</p>
              </div>
              <div style={{ background: 'var(--color-white)', padding: '24px', borderLeft: '4px solid var(--color-primary)' }}>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '8px' }}>Административный иск</h4>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px', margin: 0 }}>Судебное оспаривание незаконных решений с возможностью применения мер предварительной защиты.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="section-title">Сроки и приостановление</h2>
            <div style={{ background: 'var(--color-white)', padding: '32px', marginTop: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '20px', color: 'var(--color-deep-blue)', marginBottom: '16px' }}>Можно ли приостановить отправку?</h3>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                Важно знать: обжалование <strong>не любого</strong> документа автоматически приостанавливает отправку к месту службы. Например, для решения призывной комиссии субъекта РФ, обжалованного в суд, закон предусматривает приостановление до вступления судебного решения в силу. Конкретный механизм должен проверяться юристом по вашему документу.
              </p>
              
              <h3 style={{ fontSize: '20px', color: 'var(--color-deep-blue)', marginBottom: '16px' }}>Сроки обращения</h3>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Общий срок подачи административного иска исчисляется с момента, когда стало известно о нарушении (по общему правилу — 3 месяца). Однако специальные правила призыва и крайняя срочность исполнения требуют действовать немедленно.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container grid grid-2" style={{ gap: '60px' }}>
          <div>
            <h2 className="section-title">Документы</h2>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '24px' }}>Подготовьте то, что есть на руках:</p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                'Оспариваемое решение или выписка из протокола',
                'Повестка и сведения о назначенной дате отправки',
                'Медицинские документы',
                'Документы, дающие право на отсрочку (учеба, семейные обстоятельства)',
                'Ранее поданные обращения, жалобы и ответы на них',
                'Любые доказательства бездействия должностных лиц'
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ color: 'var(--color-primary)' }}>•</div>
                  <span style={{ color: 'var(--color-deep-blue)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="section-title">Что делает юрист</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '24px' }}>
              {[
                'Определяет оспариваемый акт и орган',
                'Проверяет сроки и правовые основания для отсрочки/освобождения',
                'Запрашивает необходимые выписки и документы',
                'Готовит мотивированную жалобу, административный иск и ходатайства',
                'Представляет ваши интересы в комиссии, прокуратуре или суде',
                'Контролирует исполнение принятого в вашу пользу решения'
              ].map((item, i) => (
                <div key={i} className="hover-lift" style={{ padding: '24px', background: 'var(--color-white)', color: 'var(--color-deep-blue)', borderLeft: '4px solid var(--color-gold)', boxShadow: '0 4px 12px rgba(23, 50, 77, 0.06)', transition: 'transform 0.3s ease, box-shadow 0.3s ease', display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--color-cream)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold)', flexShrink: 0, fontSize: '18px', fontFamily: 'var(--font-serif)' }}>{i + 1}</div>
                  <span style={{ fontWeight: 500, fontSize: '16px', lineHeight: 1.4 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', background: 'var(--color-cream)', zIndex: 0 }}></div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(193, 160, 102, 0.3), transparent)', zIndex: 0 }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '42px', color: 'var(--color-deep-blue)', marginBottom: '24px' }}>
              Этапы работы
            </h2>
          </div>

          <div style={{ position: 'relative' }}>
            {/* Horizontal Line connecting stages (desktop) */}
            <div style={{ position: 'absolute', top: '30px', left: '10%', right: '10%', height: '1px', background: 'rgba(193, 160, 102, 0.3)', zIndex: 0, display: 'none' }} className="d-md-block"></div>
            
            <div className="grid grid-3" style={{ gap: '40px' }}>
              {[
                { t: 'Анализ и квалификация', d: 'Получаем от вас решение и даты, квалифицируем орган и принятый акт.' },
                { t: 'Выбор маршрута', d: 'Выбираем наиболее эффективный и безопасный маршрут защиты (жалоба или иск).' },
                { t: 'Действия', d: 'Подаем жалобу или иск, участвуем в рассмотрении, контролируем дальнейшие действия военкомата.' }
              ].map((step, i) => (
                <div key={i} style={{ 
                  position: 'relative',
                  zIndex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'transparent',
                  padding: '10px'
                }} className="stage-item hover-lift">
                  
                  {/* Organic Number / Dot */}
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
                    <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--color-white)', border: '1px solid rgba(193, 160, 102, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', fontWeight: '300', fontSize: '24px', fontFamily: 'var(--font-serif)', boxShadow: '0 10px 20px rgba(23, 50, 77, 0.05)', position: 'relative' }}>
                      0{i + 1}
                      <div style={{ position: 'absolute', inset: '4px', borderRadius: '50%', border: '1px dashed rgba(193, 160, 102, 0.3)' }}></div>
                    </div>
                  </div>

                  <h4 style={{ fontSize: '22px', color: 'var(--color-deep-blue)', marginBottom: '16px', fontFamily: 'var(--font-serif)', lineHeight: 1.3, textAlign: 'center' }}>
                    {step.t}
                  </h4>
                  <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0, textAlign: 'center' }}>
                    {step.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQBlock 
        faqs={faqs} 
        superTitle="Вопросы и ответы" 
        title="Вопросы по спорам с призывными комиссиями"
        subtitle="Ответы на частые вопросы. Информация носит общий характер. Возможный порядок действий зависит от обстоятельств и документов."
      />

      <section className="section bg-white" id="form">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>
                  Связаться с нами
                </span>
              </div>
              <h2 style={{ fontSize: 'clamp(32px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '24px', lineHeight: 1.1 }}>
                Обсудить проблему с военкоматом
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', lineHeight: 1.6, marginBottom: '0' }}>
                Уточним суть решения или действия, которое вы хотите оспорить, и сроки обжалования. Перезвоним в течение 15 минут.
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
