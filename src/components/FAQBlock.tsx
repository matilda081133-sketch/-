'use client';

interface FAQ {
  q: string;
  a: string;
}

interface FAQBlockProps {
  faqs?: FAQ[];
}

export default function FAQBlock({ faqs: propFaqs }: FAQBlockProps) {
  const defaultFaqs = [
    {
      q: 'Как проходит первое обращение?',
      a: 'На первой встрече юрист уточнит суть вашего вопроса, проведет правовую экспертизу имеющихся документов и оценит судебные перспективы дела. Мы предложим возможные варианты решения и определим, какой адвокат или юрист в Липецке лучше всего подойдет для вашей задачи.'
    },
    {
      q: 'Какие документы нужно подготовить?',
      a: 'Состав документов зависит от вашей ситуации. Для подачи иска в суд чаще всего достаточно паспорта, договоров (если есть), судебных решений и переписки. Мы уточним точный список во время первичного приема.'
    },
    {
      q: 'Как определяется стоимость юридической помощи?',
      a: 'Стоимость услуг юриста или адвоката зависит от объема работ, сложности дела и необходимости привлечения экспертов. Мы фиксируем цену на ведение дела в суде и порядок оплаты в официальном договоре на оказание юридических услуг до начала работ. Скрытых платежей нет.'
    },
    {
      q: 'Кто будет вести моё дело?',
      a: 'Дело ведет специалист, профиль которого строго соответствует вашей проблеме (например, профильный земельный юрист или опытный адвокат по уголовным делам). В сложных спорах мы привлекаем команду юристов.'
    },
    {
      q: 'Можно ли подключить адвоката или нескольких специалистов?',
      a: 'Да. Если дело требует обязательного наличия адвокатского статуса (например, уголовный процесс) или лежит на стыке нескольких отраслей права (субсидиарная ответственность), мы формируем команду, в которую входит адвокат.'
    },
    {
      q: 'Какие гарантии может дать юридическая компания?',
      a: 'Мы гарантируем высший профессионализм, строгую конфиденциальность (адвокатскую тайну) и полное соблюдение ваших интересов в рамках закона. Ни один юрист не может обещать 100% выигрыша в суде, но мы всегда объективно и честно предупреждаем о рисках до подписания договора.'
    },
    {
      q: 'Как я буду узнавать о ходе дела?',
      a: 'Мы находимся на постоянной связи с доверителем. Вы будете регулярно получать детальные отчеты о проделанной юридической работе, назначенных судебных заседаниях и любых изменениях в ходе процесса.'
    },
    {
      q: 'Можно ли работать дистанционно?',
      a: 'Да, в большинстве случаев мы можем оказывать юридические услуги дистанционно, включая правовые консультации онлайн, составление процессуальных документов и представительство в суде на основании нотариальной доверенности.'
    },
    {
      q: 'Как обеспечивается конфиденциальность?',
      a: 'Мы строго соблюдаем коммерческую тайну и адвокатскую тайну. Вся переданная нам информация, материалы дела и документы защищены и не подлежат разглашению третьим лицам или госорганам без вашего прямого согласия.'
    },
    {
      q: 'Работаете ли вы за пределами Липецка и области?',
      a: 'Да. Мы представляем интересы бизнеса и граждан не только в судах Липецка и области, но и в других регионах России, включая арбитраж в Москве, если этого требует специфика и масштаб дела.'
    }
  ];

  const faqs = propFaqs || defaultFaqs;

  return (
    <section className="section bg-white" style={{ padding: '80px 0', borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        <div className="grid grid-2" style={{ gap: '80px', alignItems: 'flex-start' }}>
          
          {/* Left Side: Sticky Header & Info */}
          <div className="reveal-on-scroll" style={{ position: 'sticky', top: '120px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
                Частые вопросы клиентов
              </span>
            </div>
            <h2 style={{ fontSize: '48px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '32px', lineHeight: 1.1 }}>
              Ответы на важные вопросы
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', lineHeight: 1.6, marginBottom: '40px', maxWidth: '400px' }}>
              Мы собрали самые частые вопросы наших доверителей. Если вы не нашли ответ на свой вопрос — свяжитесь с нами для индивидуальной консультации.
            </p>
            <a href="#consultation" className="btn btn-outline" style={{ display: 'inline-flex' }}>Задать свой вопрос</a>
          </div>

          {/* Right Side: Accordion */}
          <div className="reveal-on-scroll delay-200" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, index) => (
              <details key={index} className="faq-details" style={{
                background: 'var(--color-white)',
                border: '1px solid rgba(23, 50, 77, 0.1)',
                borderRadius: '4px',
                transition: 'var(--transition)',
                color: 'var(--color-deep-blue)',
                overflow: 'hidden'
              }}>
                <summary style={{
                  padding: '24px 32px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  fontSize: '20px',
                  fontWeight: '500',
                  fontFamily: 'var(--font-sans)',
                  listStyle: 'none',
                  background: 'transparent'
                }} className="faq-summary">
                  <span style={{ paddingRight: '20px', lineHeight: 1.4, color: 'var(--color-deep-blue)', fontWeight: 600 }}>{faq.q}</span>
                  <span className="faq-icon" style={{ 
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: '1px solid rgba(23, 50, 77, 0.2)',
                    transition: 'all 0.3s ease',
                    flexShrink: 0,
                    color: 'var(--color-gold)',
                    fontSize: '24px'
                  }}>
                    +
                  </span>
                </summary>
                
                <div style={{
                  padding: '32px',
                  background: 'var(--color-cream)',
                  color: 'var(--color-text-main)',
                  lineHeight: '1.6',
                  fontSize: '16px',
                  borderTop: '1px solid var(--color-border)'
                }}>
                  <div>
                    {faq.a}
                  </div>
                </div>
              </details>
            ))}
          </div>
          
        </div>
      </div>
      <style jsx>{`
        .faq-summary::-webkit-details-marker {
          display: none;
        }
        details[open] .faq-icon {
          background: rgba(255, 255, 255, 0.1);
          transform: rotate(45deg);
        }
        details:hover {
          box-shadow: 0 20px 40px rgba(16, 39, 59, 0.15);
        }
      `}</style>
    </section>
  );
}
