'use client';

import { useState } from 'react';
import Link from 'next/link';

type Tab = 'business' | 'citizens' | 'special';

export default function ServicesBlock() {
  const [activeTab, setActiveTab] = useState<Tab>('business');

  const tabs = [
    { id: 'business', label: 'Для бизнеса' },
    { id: 'citizens', label: 'Гражданам' },
    { id: 'special', label: 'Специальные практики' },
  ];

  const services = {
    business: [
      {
        title: 'Арбитражные споры',
        subServices: [
          'Взыскание дебиторской задолженности',
          'Споры по договорам подряда и поставки',
          'Защита интересов в суде'
        ],
        link: '/biznesu/arbitrazh',
        icon: '⚖️'
      },
      {
        title: 'Налоговая практика',
        subServices: [
          'Защита при налоговых проверках',
          'Оспаривание доначислений ФНС',
          'Налоговый консалтинг'
        ],
        link: '/biznesu/nalogi',
        icon: '📊'
      },
      {
        title: 'Банкротство юр. лиц',
        subServices: [
          'Защита от субсидиарной ответственности',
          'Контролируемое банкротство',
          'Включение в реестр кредиторов'
        ],
        link: '/biznesu/bankrotstvo',
        icon: '🏢'
      },
      {
        title: 'Корпоративное право',
        subServices: [
          'Разрешение конфликтов учредителей',
          'Защита от рейдерских захватов',
          'Структурирование сделок'
        ],
        link: '/biznesu/korporativnoe',
        icon: '🤝'
      }
    ],
    citizens: [
      {
        title: 'Банкротство физ. лиц',
        subServices: [
          'Списание долгов по кредитам и ЖКХ',
          'Защита имущества от приставов',
          'Защита от коллекторов'
        ],
        link: '/grazhdanam/bankrotstvo',
        icon: '💳'
      },
      {
        title: 'Семейные споры',
        subServices: [
          'Сложные разводы',
          'Раздел совместно нажитого имущества',
          'Споры о детях и алиментах'
        ],
        link: '/grazhdanam/semejnie',
        icon: '👨‍👩‍👧'
      },
      {
        title: 'Споры с застройщиками',
        subServices: [
          'Взыскание неустойки за просрочку',
          'Компенсация за недостатки',
          'Приемка квартир'
        ],
        link: '/grazhdanam/zastroishiki',
        icon: '🏗️'
      },
      {
        title: 'Наследственные дела',
        subServices: [
          'Оспаривание завещаний',
          'Восстановление сроков',
          'Раздел наследственного имущества'
        ],
        link: '/grazhdanam/nasledstvo',
        icon: '📜'
      },
      {
        title: 'Защита прав потребителей',
        subServices: [
          'Возврат бракованных автомобилей',
          'Споры со страховыми',
          'Взыскание ущерба'
        ],
        link: '/grazhdanam/potrebiteli',
        icon: '🛍️'
      }
    ],
    special: [
      {
        title: 'Уголовная защита',
        subServices: [
          'Защита по экономическим преступлениям',
          'Защита по должностным преступлениям',
          'Сопровождение при допросах'
        ],
        link: '/praktika/ugolovnaya',
        icon: '🛡️'
      },
      {
        title: 'Миграционные споры',
        subServices: [
          'Отмена выдворения и депортации',
          'Снятие запрета на въезд в РФ',
          'Помощь в получении ВНЖ'
        ],
        link: '/praktika/migracionnaya',
        icon: '🌍'
      }
    ]
  };

  return (
    <section className="container" style={{ padding: '100px 24px', background: 'var(--color-cream)' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 style={{ fontSize: '42px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '24px' }}>
          Ключевые направления
        </h2>
        <p style={{ fontSize: '18px', color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          Мы структурировали наш 20-летний опыт по профильным практикам, чтобы предлагать узкоспециализированные и эффективные решения.
        </p>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '50px', flexWrap: 'wrap' }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as Tab)}
            style={{
              padding: '16px 32px',
              borderRadius: 'var(--radius-lg)',
              border: 'none',
              background: activeTab === tab.id ? 'var(--color-primary)' : 'var(--color-white)',
              color: activeTab === tab.id ? 'var(--color-white)' : 'var(--color-primary)',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: activeTab === tab.id ? 'var(--shadow-md)' : 'var(--shadow-sm)',
              transition: 'var(--transition)'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: '30px',
        animation: 'fadeIn 0.5s ease-out'
      }}>
        {services[activeTab].map((service, index) => (
          <div key={index} className="service-card" style={{ 
            background: 'var(--color-white)', 
            padding: '40px 30px', 
            borderRadius: 'var(--radius-lg)', 
            boxShadow: 'var(--shadow-sm)', 
            transition: 'var(--transition)',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ fontSize: '40px', marginBottom: '24px', opacity: 0.9 }}>
              {service.icon}
            </div>
            <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px', color: 'var(--color-primary)', fontFamily: 'var(--font-serif)' }}>
              {service.title}
            </h3>
            
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              margin: '0 0 32px 0', 
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              {service.subServices.map((sub, i) => (
                <li key={i} style={{ 
                  color: 'var(--color-text-secondary)', 
                  lineHeight: '1.4',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px'
                }}>
                  <svg style={{ flexShrink: 0, marginTop: '4px', color: 'var(--color-accent)' }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span style={{ fontSize: '15px' }}>{sub}</span>
                </li>
              ))}
            </ul>

            <Link href={service.link} style={{ 
              color: 'var(--color-accent)', 
              fontWeight: 'bold', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px',
              textTransform: 'uppercase',
              fontSize: '14px',
              letterSpacing: '1px'
            }}>
              Подробнее <span style={{ transition: 'transform 0.3s ease' }} className="arrow">→</span>
            </Link>
          </div>
        ))}
      </div>

      <style jsx>{`
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
        }
        .service-card:hover .arrow {
          transform: translateX(5px);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
