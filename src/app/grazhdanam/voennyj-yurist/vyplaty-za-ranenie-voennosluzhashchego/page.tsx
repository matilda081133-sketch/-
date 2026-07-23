import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';

export const metadata = {
  title: 'Выплаты за ранение военнослужащего — юрист в Липецке | Де-Юре',
  description: 'Помощь с выплатами за ранение: проверка справок и оснований, запрос документов, обжалование задержки или отказа, представительство в суде.'
};

export default function VyplatyRaneniePage() {
  const faqs = [
    { q: 'Какие выплаты могут быть положены после ранения?', a: 'В зависимости от тяжести ранения, статуса военнослужащего и региона могут быть положены президентские, федеральные, страховые и региональные выплаты. При назначении инвалидности или увольнении возможны дополнительные выплаты.' },
    { q: 'Достаточно ли справки о ранении для получения выплаты?', a: 'Как правило, требуется справка о ранении (контузии, травме, увечье) установленного образца и справка военно-врачебной комиссии (ВВК) о тяжести ранения. Точный перечень зависит от конкретной выплаты.' },
    { q: 'Что делать, если не выдают справку о тяжести ранения?', a: 'Мы поможем составить и направить официальные запросы в госпиталь или воинскую часть, а при незаконном отказе или бездействии — жалобы в военную прокуратуру или суд.' },
    { q: 'Куда обращаться при задержке выплаты?', a: 'Порядок обращения зависит от того, какая именно выплата задержана (через ЕРЦ, страховую компанию или соцзащиту). Сначала подается досудебная претензия или рапорт, затем — административный иск.' },
    { q: 'Можно ли оспорить отказ или неверную квалификацию ранения?', a: 'Да, заключения ВВК и решения об отказе в выплате можно оспорить в вышестоящую комиссию или гарнизонный военный суд.' },
    { q: 'Учитываются ли региональные и страховые выплаты отдельно?', a: 'Да, это самостоятельные основания. Получение федеральной или президентской выплаты не лишает права на региональные или страховые суммы, если они предусмотрены.' },
    { q: 'Можно ли вести вопрос дистанционно?', a: 'Большинство действий по истребованию документов, составлению рапортов, жалоб и заявлений мы можем выполнять дистанционно.' },
    { q: 'От чего зависит стоимость юридической помощи?', a: 'От полноты имеющихся документов, количества проверяемых оснований для выплат, необходимости направления запросов и участия в суде.' }
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
            <span style={{ color: 'var(--color-text-main)' }}>Выплаты за ранение</span>
          </>
        }
        superTitle="Военные выплаты • анализ документов и обжалование"
        title="Юрист по выплатам за ранение военнослужащего в Липецке"
        subtitle="Проверим документы и виды положенных выплат, запросим недостающие сведения и определим порядок действий при задержке, отказе, неверной квалификации ранения или неполной выплате."
        primaryCtaText="Обсудить выплату"
        secondaryCtaText="Проверить документы"
        secondaryCtaLink="#documents"
        trustItems={[
          { text: 'Проверяем несколько оснований выплат' },
          { text: 'Начинаем со справок и решений' },
          { text: 'Условия работы — в договоре' }
        ]}
      />

      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title text-center" style={{ marginBottom: '40px' }}>С какими проблемами обращаются</h2>
          <div className="grid grid-3" style={{ gap: '20px' }}>
            {[
              'Не выдают справки (о ранении или тяжести)', 
              'Выплата задержана без объяснения причин', 
              'Получен незаконный отказ', 
              'Неверно определена тяжесть или характер травмы', 
              'Выплачена не вся положенная сумма', 
              'Не учтена отдельная мера поддержки'
            ].map((item, i) => (
              <div key={i} className="hover-lift" style={{
                background: 'var(--color-cream)',
                padding: '24px',
                borderLeft: '4px solid var(--color-gold)',
                color: 'var(--color-deep-blue)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-cream)' }}>
        <div className="container grid grid-2" style={{ gap: '60px' }}>
          <div>
            <h2 className="section-title">С чего начать</h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', lineHeight: 1.6, marginBottom: '24px' }}>
              Базовые документы, с которых мы начинаем работу — это <strong style={{ color: 'var(--color-deep-blue)' }}>справка о ранении</strong> и <strong style={{ color: 'var(--color-deep-blue)' }}>справка о тяжести ранения</strong>. 
            </p>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: 1.6, marginBottom: '24px' }}>
              Далее мы проверяем медицинские и служебные документы, основания конкретной выплаты (президентские, федеральные, страховые, региональные, в связи с инвалидностью или увольнением) и имеющуюся переписку по отказу или задержке.
            </p>
            <h2 className="section-title" style={{ marginTop: '48px', fontSize: '28px' }}>Как помогаем</h2>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                'Анализ документов и определение возможных выплат',
                'Запрос недостающих медицинских и служебных документов',
                'Обращения в воинскую часть, ЕРЦ, страховую или соцзащиту',
                'Подача жалоб в военную прокуратуру',
                'Административное судопроизводство по применимости'
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ color: 'var(--color-gold)', marginTop: '2px' }}>✓</div>
                  <span style={{ color: 'var(--color-text-main)', fontSize: '16px' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div style={{ background: 'var(--color-deep-blue)', padding: '40px', color: 'var(--color-white)', marginTop: '54px' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '32px', fontFamily: 'var(--font-serif)', color: 'var(--color-white)' }}>Маршруты решения</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <h4 style={{ color: 'var(--color-white)', marginBottom: '8px', fontSize: '16px' }}>1. Документов достаточно</h4>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', lineHeight: 1.5 }}>Составляем заявление на выплату и контролируем начисление.</p>
                </div>
                <div>
                  <h4 style={{ color: 'var(--color-white)', marginBottom: '8px', fontSize: '16px' }}>2. Документа не хватает</h4>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', lineHeight: 1.5 }}>Направляем адвокатские и служебные запросы для истребования справок и выписок.</p>
                </div>
                <div>
                  <h4 style={{ color: 'var(--color-white)', marginBottom: '8px', fontSize: '16px' }}>3. Задержка или отказ</h4>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', lineHeight: 1.5 }}>Готовим мотивированное досудебное обращение или жалобу.</p>
                </div>
                <div>
                  <h4 style={{ color: 'var(--color-white)', marginBottom: '8px', fontSize: '16px' }}>4. Нарушение не устранено</h4>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', lineHeight: 1.5 }}>Формируем доказательства и подаем административный иск в гарнизонный военный суд.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="documents" className="section bg-white">
        <div className="container">
          <h2 className="section-title text-center" style={{ marginBottom: '40px' }}>Документы</h2>
          <div className="grid grid-2" style={{ gap: '40px' }}>
            <div className="hover-lift" style={{ padding: '32px', background: 'var(--color-white)', borderTop: '4px solid var(--color-gold)', boxShadow: '0 4px 12px rgba(23, 50, 77, 0.06), 0 1px 3px rgba(23, 50, 77, 0.1)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
              <h3 style={{ fontSize: '20px', color: 'var(--color-deep-blue)', marginBottom: '24px' }}>Есть у вас</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ color: 'var(--color-primary)' }}>•</div>
                  <span>Справка о ранении (если выдана)</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ color: 'var(--color-primary)' }}>•</div>
                  <span>Справка о тяжести ранения (ВВК)</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ color: 'var(--color-primary)' }}>•</div>
                  <span>Имеющиеся медицинские выписки</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ color: 'var(--color-primary)' }}>•</div>
                  <span>Решения или письменные отказы (если есть)</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ color: 'var(--color-primary)' }}>•</div>
                  <span>Выписки о начислениях</span>
                </li>
              </ul>
            </div>
            <div className="hover-lift" style={{ padding: '32px', background: 'var(--color-cream)', borderTop: '4px solid var(--color-primary)', boxShadow: '0 4px 12px rgba(23, 50, 77, 0.06), 0 1px 3px rgba(23, 50, 77, 0.1)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
              <h3 style={{ fontSize: '20px', color: 'var(--color-deep-blue)', marginBottom: '24px' }}>Можем запросить</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ color: 'var(--color-primary)' }}>•</div>
                  <span>Медицинские документы из госпиталя</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ color: 'var(--color-primary)' }}>•</div>
                  <span>Документы о статусе и прохождении службы</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ color: 'var(--color-primary)' }}>•</div>
                  <span>Материалы административного расследования</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ color: 'var(--color-primary)' }}>•</div>
                  <span>Официальные ответы на ранее поданные рапорты</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQBlock 
        faqs={faqs} 
        superTitle="Вопросы и ответы" 
        title="Вопросы по военным выплатам"
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
                Обсудить ситуацию<br /> с юристом
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', lineHeight: 1.6, marginBottom: '0' }}>
                Уточним обстоятельства получения ранения, какие справки уже есть и что потребуется сделать. Перезвоним в течение 15 минут.
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
