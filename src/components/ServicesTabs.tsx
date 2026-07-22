'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState<'b2c' | 'b2b'>('b2c');

  const b2cServices = [
    { title: "Земельный юрист", desc: "Судебные споры по границам участков, сервитутам и кадастровой стоимости. Юридическая консультация и представительство интересов при конфликтах с госорганами.", href: "/grazhdanam/zemelnyj-yurist/" },
    { title: "Юрист по недвижимости", desc: "Сопровождение сделок купли-продажи, регистрация прав на объекты. Составление исков, споры с застройщиками по ДДУ и признание права собственности через суд.", href: "/grazhdanam/yurist-po-nedvizhimosti/" },
    { title: "Юрист по исполнительному производству", desc: "Взаимодействие со службой судебных приставов (ФССП). Снятие незаконных арестов, защита прав должника и контроль за исполнением судебных решений.", href: "/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/" },
    { title: "Адвокат по уголовным делам", desc: "Экстренная защита при задержании и доследственной проверке. Представительство на этапе следствия и защита интересов обвиняемого или потерпевшего в суде.", href: "/grazhdanam/advokat-po-ugolovnym-delam/" },
    { title: "Военный юрист", desc: "Защита прав военнослужащих: оспаривание решений ВВК, помощь в получении положенных выплат. Представительство в суде по военным и уголовным делам.", href: "/grazhdanam/voennyj-yurist/" },
    { title: "Взыскание долгов", desc: "Досудебный возврат задолженности и взыскание долгов по распискам или договорам через суд. Полное ведение дела вплоть до фактического получения средств.", href: "/grazhdanam/vzyskanie-dolgov/" }
  ];

  const b2bServices = [
    { title: "Юридическое сопровождение бизнеса", desc: "Комплексное абонентское обслуживание компаний. Договорная и претензионная работа, защита коммерческих интересов и текущий правовой аудит документов.", href: "/biznesu/yuridicheskoe-soprovozhdenie-biznesa/" },
    { title: "Недвижимость и строительство", desc: "Сопровождение коммерческих сделок, перевод земель, споры по договорам строительного подряда. Представительство застройщиков в арбитражном суде.", href: "/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/" },
    { title: "Взыскание задолженности", desc: "Претензионный порядок и взыскание дебиторской задолженности с контрагентов через арбитраж. Инициация банкротства должника и розыск активов.", href: "/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/" },
    { title: "Налоговый юрист для бизнеса", desc: "Сопровождение камеральных и выездных проверок. Оспаривание доначислений, защита от штрафов ФНС и оценка налоговых рисков при дроблении бизнеса.", href: "/biznesu/nalogovyj-yurist-dlya-biznesa/" },
    { title: "Исполнительное производство", desc: "Контроль за работой судебных приставов, розыск счетов контрагента. Фактическое принудительное исполнение решений арбитражного суда в пользу бизнеса.", href: "/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/" },
    { title: "Уголовно-правовая защита бизнеса", desc: "Защита руководителей и бенефициаров (КДЛ) от субсидиарной ответственности. Адвокатское сопровождение при обысках, выемках и проверках ОБЭП.", href: "/biznesu/ugolovno-pravovaya-zashchita-biznesa/" }
  ];

  const currentServices = activeTab === 'b2c' ? b2cServices : b2bServices;

  return (
    <section className="section bg-light" style={{ padding: '64px 0', background: 'linear-gradient(145deg, var(--color-cream) 0%, rgba(247, 244, 237, 0.4) 100%)' }}>
      <div className="container">
        <div style={{ maxWidth: '700px', marginBottom: '40px' }}>
          <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
            Ключевые направления юридической помощи
          </h2>
          <p style={{ fontSize: '18px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
            Профессиональные услуги юриста и адвоката в Липецке. Предоставляем комплексное правовое обслуживание для бизнеса и частных лиц: от первичной юридической консультации до представительства в суде.
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '40px' }} role="tablist">
          <button 
            role="tab"
            aria-selected={activeTab === 'b2c'}
            onClick={() => setActiveTab('b2c')}
            style={{
              padding: '12px 24px',
              fontSize: '16px',
              fontWeight: 600,
              borderRadius: '4px',
              border: activeTab === 'b2c' ? '1px solid var(--color-deep-blue)' : '1px solid var(--color-border)',
              background: activeTab === 'b2c' ? 'var(--color-deep-blue)' : 'var(--color-white)',
              color: activeTab === 'b2c' ? 'var(--color-white)' : 'var(--color-text-primary)',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
          >
            Гражданам
          </button>
          <button 
            role="tab"
            aria-selected={activeTab === 'b2b'}
            onClick={() => setActiveTab('b2b')}
            style={{
              padding: '12px 24px',
              fontSize: '16px',
              fontWeight: 600,
              borderRadius: '4px',
              border: activeTab === 'b2b' ? '1px solid var(--color-deep-blue)' : '1px solid var(--color-border)',
              background: activeTab === 'b2b' ? 'var(--color-deep-blue)' : 'var(--color-white)',
              color: activeTab === 'b2b' ? 'var(--color-white)' : 'var(--color-text-primary)',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
          >
            Бизнесу
          </button>
        </div>

        {/* Grid */}
        <div 
          role="tabpanel" 
          className="grid grid-3" 
          style={{ gap: '24px', marginBottom: '40px' }}
        >
          {currentServices.map((service, idx) => (
            <Link href={service.href} key={idx} style={{ textDecoration: 'none', display: 'block' }}>
              <div 
                className="card service-card" 
                style={{ 
                  height: '100%', 
                  minHeight: '160px',
                  padding: '30px', 
                  background: 'var(--color-white)', 
                  border: '1px solid var(--color-border)',
                  borderRadius: '0',
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'all 0.3s',
                  position: 'relative',
                  borderTop: '3px solid var(--color-primary)'
                }}
              >
                <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3 }}>
                  {service.title}
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  {service.desc}
                </p>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, transition: 'transform 0.3s' }}>
                  Подробнее 
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.3s' }}>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer dynamic button */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 30px', background: 'var(--color-white)', border: '1px solid var(--color-border)' }}>
          <span style={{ fontSize: '16px', fontWeight: 500, color: 'var(--color-deep-blue)' }}>Не нашли нужное направление?</span>
          <Link 
            href={activeTab === 'b2c' ? '/grazhdanam/' : '/biznesu/'} 
            className="btn btn-outline"
          >
            {activeTab === 'b2c' ? 'Все услуги гражданам' : 'Все услуги бизнесу'}
          </Link>
        </div>

      </div>
    </section>
  );
}
