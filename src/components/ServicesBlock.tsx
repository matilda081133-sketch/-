'use client';

import { useState } from 'react';
import Link from 'next/link';

type Tab = 'business' | 'citizens';

export default function ServicesBlock() {
  const [activeTab, setActiveTab] = useState<Tab>('business');

  const tabs = [
    { id: 'business', label: 'Юридическим лицам' },
    { id: 'citizens', label: 'Физическим лицам' }
  ];

  const services = {
    business: [
      {
        num: '01',
        title: 'Арбитражные споры',
        desc: 'Взыскание дебиторской задолженности, споры по договорам подряда и поставки, оспаривание сделок и защита интересов в суде.',
        link: '/biznesu/arbitrazh'
      },
      {
        num: '02',
        title: 'Налоговая практика',
        desc: 'Защита при налоговых проверках, оспаривание доначислений ФНС, налоговый консалтинг и возмещение НДС.',
        link: '/biznesu/nalogi'
      },
      {
        num: '03',
        title: 'Банкротство юр. лиц',
        desc: 'Защита от субсидиарной ответственности, оспаривание сделок должника, включение в реестр кредиторов.',
        link: '/biznesu/bankrotstvo'
      },
      {
        num: '04',
        title: 'Корпоративное право',
        desc: 'Разрешение конфликтов учредителей, структурирование бизнеса, защита корпоративных интересов в суде.',
        link: '/biznesu/korporativnoe'
      },
      {
        num: '05',
        title: 'Недвижимость и стройка',
        desc: 'Сопровождение инвестиционных проектов, споры по аренде и подряду, легализация недвижимости.',
        link: '/biznesu/nedvizhimost'
      },
      {
        num: '06',
        title: 'Защита бизнеса (УК РФ)',
        desc: 'Защита при полицейских проверках (ОЭБиПК), сопровождение обысков, защита по экономическим статьям.',
        link: '/biznesu/ugolovnaya'
      }
    ],
    citizens: [
      {
        num: '01',
        title: 'Банкротство физических лиц',
        desc: 'Защита имущества от взысканий, взаимодействие с финансовыми управляющими, внесудебное банкротство.',
        link: '/grazhdanam/bankrotstvo'
      },
      {
        num: '02',
        title: 'Семейные споры',
        desc: 'Бракоразводные процессы, раздел совместно нажитого имущества, споры о детях и алиментные обязательства.',
        link: '/grazhdanam/semejnie'
      },
      {
        num: '03',
        title: 'Споры с застройщиками',
        desc: 'Взыскание неустойки за просрочку, компенсация за строительные недостатки, споры по ДДУ.',
        link: '/grazhdanam/zastroishiki'
      },
      {
        num: '04',
        title: 'Защита прав потребителей',
        desc: 'Возврат бракованных автомобилей, споры со страховыми компаниями, взыскание ущерба за некачественные услуги.',
        link: '/grazhdanam/potrebiteli'
      },
      {
        num: '05',
        title: 'Наследственные дела',
        desc: 'Оспаривание завещаний, восстановление сроков принятия наследства, раздел наследственного имущества.',
        link: '/grazhdanam/nasledstvo'
      },
      {
        num: '06',
        title: 'Миграционные споры',
        desc: 'Отмена выдворения и депортации, снятие запрета на въезд в РФ, оспаривание решений миграционных органов.',
        link: '/praktika/migracionnaya'
      }
    ]
  };

  return (
    <section id="services" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Graphic: Scales of Justice */}
      <svg style={{ position: 'absolute', top: '-5%', left: '2%', width: '400px', height: '400px', opacity: 0.02, zIndex: 0, pointerEvents: 'none' }} viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="0.5">
        <path d="M12 2v20 M4 10v6a2 2 0 0 0 2 2h2 M20 10v6a2 2 0 0 1-2 2h-2 M12 6H4 M12 6h8 M12 22h-4 M12 22h4 M8 6l-4 4 M16 6l4 4"/>
      </svg>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ marginTop: 0, marginBottom: '16px' }}>Приоритетные направления</h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', maxWidth: '800px', margin: '0 auto', marginBottom: '40px' }}>
            Основные направления юридической помощи гражданам и бизнесу.
          </p>

          {/* Switcher / Переключатель */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ 
              display: 'inline-flex', 
              background: 'var(--gradient-light)', 
              border: '1px solid var(--color-primary)',
            }}>
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as Tab)}
                  style={{
                    padding: '16px 48px',
                    border: 'none',
                    background: activeTab === tab.id ? 'var(--color-primary)' : 'transparent',
                    color: activeTab === tab.id ? 'var(--color-white)' : 'var(--color-primary)',
                    fontSize: '16px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'var(--transition)',
                    outline: 'none',
                    minWidth: '250px'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-3" style={{ gap: '30px' }}>
          {services[activeTab].map((service, index) => (
            <Link href={service.link} key={index} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', height: '100%' }}>
              <div className="card-service" style={{ width: '100%', height: '100%' }}>
                <div className="card-service-num">{service.num}</div>
                <div className="card-service-content" style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  flexGrow: 1, 
                  marginTop: '40px' 
                }}>
                  <h3 style={{ marginTop: 0, marginBottom: '16px', fontSize: '22px', color: 'var(--color-deep-blue)', minHeight: '60px' }}>
                    {service.title}
                  </h3>
                  
                  <ul style={{ 
                    listStyle: 'none', 
                    padding: 0, 
                    margin: '0 0 32px 0', 
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                  }}>
                    {service.desc.split(', ').map((sub, i) => (
                      <li key={i} style={{ 
                        color: 'var(--color-text-secondary)', 
                        lineHeight: '1.4',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px'
                      }}>
                        <span style={{ color: 'var(--color-primary)', fontSize: '14px', marginTop: '2px' }}>■</span>
                        <span style={{ fontSize: '15px' }}>{sub.trim().replace(/\.$/, '')}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="card-service-arrow" style={{ 
                    marginTop: 'auto',
                    color: 'var(--color-primary)', 
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    Подробнее <span style={{ fontSize: '18px' }}>→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
