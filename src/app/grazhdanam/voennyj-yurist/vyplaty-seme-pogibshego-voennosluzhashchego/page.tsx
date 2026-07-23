import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';

export const metadata = {
  title: 'Выплаты семье погибшего военнослужащего | Де-Юре',
  description: 'Помощь родственникам погибшего военнослужащего: проверка права на федеральные, страховые и региональные выплаты, документы, иждивение и обжалование отказа.'
};

export default function VyplatySemePogibshegoPage() {
  const faqs = [
    { q: 'Кто из родственников может претендовать на выплаты?', a: 'Право на выплаты могут иметь супруги, родители, несовершеннолетние дети, дети до 23 лет (при очном обучении), дети-инвалиды, а в некоторых случаях — бабушки, дедушки или фактические воспитатели. Состав получателей различается в зависимости от вида выплаты.' },
    { q: 'Одинаков ли круг получателей для всех выплат?', a: 'Нет. Для президентских, страховых, единовременных пособий и региональных выплат законом установлены разные критерии родства и иждивения. Мы проверяем право каждого заявителя по каждому основанию отдельно.' },
    { q: 'Когда требуется доказать иждивение?', a: 'Доказывать иждивение необходимо, когда заявитель (например, нетрудоспособный родственник или фактический воспитатель) не входит в безусловный круг получателей конкретной выплаты, но находился на полном содержании погибшего или получал от него основную помощь.' },
    { q: 'Какие документы подтверждают гибель и родство?', a: 'Свидетельство о смерти (или справка о смерти/обстоятельствах безвестного отсутствия), свидетельство о браке, свидетельства о рождении и иные документы ЗАГС. При расхождении в данных может потребоваться судебное установление факта родственных отношений.' },
    { q: 'Что делать при задержке или отказе в выплате?', a: 'Необходимо получить письменный отказ или зафиксировать факт задержки, после чего направить мотивированную жалобу в военную прокуратуру или обратиться с административным иском в гарнизонный военный суд.' },
    { q: 'Можно ли получить несколько видов выплат?', a: 'Да. Выплаты носят различный характер (страховые, социальные, региональные), и получение одной не исключает права на другие, если для этого есть законные основания.' },
    { q: 'Что делать, если военнослужащий пока числится пропавшим без вести?', a: 'Если есть основания полагать, что человек погиб, сначала необходимо установить юридический факт. Мы помогаем с процедурой признания военнослужащего безвестно отсутствующим или объявлением умершим через суд.' },
    { q: 'От чего зависит стоимость сопровождения?', a: 'От числа заявителей и проверяемых оснований, полноты документов, необходимости доказывать иждивение или родство в суде, а также наличия судебного спора по отказу.' }
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
            <span style={{ color: 'var(--color-text-main)' }}>Выплаты семье погибшего</span>
          </>
        }
        superTitle="Помощь родственникам • выплаты и подтверждение права"
        title={<>Юрист по выплатам семье погибшего военнослужащего<br />в Липецке</>}
        subtitle="Проверим, на какие выплаты может претендовать конкретный член семьи, какие документы подтверждают право и как действовать при задержке, отказе или споре об иждивении."
        primaryCtaText="Проверить право на выплаты"
        secondaryCtaText="Какие документы нужны"
        secondaryCtaLink="#documents"
        trustItems={[
          { text: 'Проверяем право каждого получателя' },
          { text: 'Федеральные, страховые и региональные основания' },
          { text: 'Состав работы — в договоре' }
        ]}
      />

      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title text-center">Кто может обратиться</h2>
          <p className="text-center" style={{ color: 'var(--color-text-secondary)', marginBottom: '40px' }}>
            Состав получателей различается по видам выплат. Право может зависеть от родства, возраста, обучения, инвалидности или иждивения.
          </p>
          <div className="grid grid-3" style={{ gap: '20px', maxWidth: '1000px', margin: '0 auto' }}>
            {[
              'Супруги', 
              'Родители', 
              'Дети до 18 лет', 
              'Дети до 23 лет\n(очное обучение)', 
              'Дети-инвалиды\n(инвалидность установлена до 18 лет)', 
              'Фактические воспитатели и иждивенцы'
            ].map((item, i) => (
              <div key={i} style={{
                background: 'var(--color-cream)',
                padding: '24px',
                textAlign: 'left',
                fontWeight: 600,
                color: 'var(--color-deep-blue)',
                borderBottom: '3px solid var(--color-gold)',
                whiteSpace: 'pre-line'
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
            <h2 className="section-title">Какие вопросы мы решаем</h2>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                'Не хватает документов для подачи заявления',
                'Выплата задержана без объяснений',
                'Получен официальный отказ',
                'Кого-то из родственников исключили из числа получателей',
                'Спор о родстве (ошибки в документах)',
                'Необходимость доказать иждивение или фактическое воспитание',
                'Разногласия между получателями выплаты'
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ color: 'var(--color-gold)', marginTop: '2px' }}>✓</div>
                  <span style={{ color: 'var(--color-text-main)', fontSize: '16px' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div style={{ background: 'var(--color-white)', padding: '32px', borderTop: '4px solid var(--color-primary)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', marginTop: '64px' }}>
              <h3 style={{ fontSize: '20px', color: 'var(--color-deep-blue)', marginBottom: '16px' }}>Какие выплаты проверяем</h3>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                Мы анализируем право семьи на получение президентских, иных федеральных, страховых и региональных выплат. Условия начисления и круг получателей для каждой из них отличаются, поэтому мы не используем одну общую формулу, а проверяем право индивидуально.
              </p>
              <h3 style={{ fontSize: '20px', color: 'var(--color-deep-blue)', marginBottom: '16px' }}>Когда нужно доказывать иждивение</h3>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Для некоторых заявителей одного факта родства недостаточно — юридически значимым становится факт нахождения на содержании или зависимость от помощи погибшего. Конкретный перечень доказательств для суда определяется нами индивидуально после изучения вашей ситуации.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="documents" className="section bg-white">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'center' }}>
            <div>
              <h2 className="section-title">Документы</h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', lineHeight: 1.6, marginBottom: '24px' }}>
                Базовый комплект зависит от ситуации. Нам могут потребоваться:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ color: 'var(--color-primary)' }}>•</div>
                  <span>Справка об обстоятельствах безвестного отсутствия или смерти</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ color: 'var(--color-primary)' }}>•</div>
                  <span>Свидетельство или медицинская справка о смерти</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ color: 'var(--color-primary)' }}>•</div>
                  <span>Документы о родстве (свидетельства из ЗАГС)</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ color: 'var(--color-primary)' }}>•</div>
                  <span>Документы, подтверждающие иждивение, обучение или инвалидность</span>
                </li>
              </ul>
            </div>
            
            <div style={{ background: 'var(--color-deep-blue)', padding: '40px', color: 'var(--color-white)' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '24px', fontFamily: 'var(--font-serif)', color: 'var(--color-white)' }}>Этапы работы</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <h4 style={{ color: 'var(--color-gold)', marginBottom: '8px', fontSize: '16px' }}>1. Определение прав</h4>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', lineHeight: 1.5 }}>Определяем круг получателей и перечень возможных выплат.</p>
                </div>
                <div>
                  <h4 style={{ color: 'var(--color-gold)', marginBottom: '8px', fontSize: '16px' }}>2. Сбор документов</h4>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', lineHeight: 1.5 }}>Проверяем имеющиеся бумаги, делаем запросы для сбора недостающих.</p>
                </div>
                <div>
                  <h4 style={{ color: 'var(--color-gold)', marginBottom: '8px', fontSize: '16px' }}>3. Подача обращений</h4>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', lineHeight: 1.5 }}>Направляем заявления в соответствующие органы и фонды.</p>
                </div>
                <div>
                  <h4 style={{ color: 'var(--color-gold)', marginBottom: '8px', fontSize: '16px' }}>4. Обжалование и суд</h4>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', lineHeight: 1.5 }}>Оспариваем незаконные отказы, задержки или доказываем факты в суде.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: '60px', padding: '32px', border: '1px solid var(--color-border)', display: 'flex', gap: '24px', alignItems: 'center', background: 'var(--color-cream)' }}>
            <div style={{ width: '4px', height: '100%', background: 'var(--color-gold)', alignSelf: 'stretch' }} />
            <div>
              <h4 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', marginBottom: '8px' }}>Военнослужащий пока числится пропавшим без вести?</h4>
              <p style={{ color: 'var(--color-text-secondary)', marginBottom: '16px' }}>Для оформления выплат может потребоваться предварительное установление юридического статуса через суд.</p>
              <a href="/grazhdanam/voennyj-yurist/priznanie-voennosluzhashchego-umershim/" style={{ color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'none' }}>
                Подробнее о признании умершим или безвестно отсутствующим →
              </a>
            </div>
          </div>
        </div>
      </section>

      <FAQBlock 
        faqs={faqs} 
        superTitle="Частые вопросы" 
        title="Вопросы по выплатам родственникам"
        subtitle="Ответы на популярные вопросы о выплатах. Информация носит общий характер. Возможный порядок действий зависит от обстоятельств и документов."
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
                Расскажите о вашей ситуации
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', lineHeight: 1.6, marginBottom: '0' }}>
                Мы уточним степень родства, наличие других претендентов<br /> и какие документы уже собраны. Перезвоним в течение 15 минут.
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
