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
        desc: 'Взыскание дебиторской задолженности, споры по договорам подряда и поставки, защита интересов в суде.',
        link: '/biznesu/arbitrazh',
        icon: '⚖️'
      },
      {
        title: 'Налоговая практика',
        desc: 'Защита при выездных и камеральных проверках ФНС, оспаривание доначислений, налоговый консалтинг.',
        link: '/biznesu/nalogi',
        icon: '📊'
      },
      {
        title: 'Банкротство юр. лиц',
        desc: 'Защита от субсидиарной ответственности, контролируемое банкротство, включение в реестр кредиторов.',
        link: '/biznesu/bankrotstvo',
        icon: '🏢'
      },
      {
        title: 'Корпоративное право',
        desc: 'Разрешение конфликтов учредителей, защита от рейдерских захватов, структурирование сделок.',
        link: '/biznesu/korporativnoe',
        icon: '🤝'
      }
    ],
    citizens: [
      {
        title: 'Банкротство физ. лиц',
        desc: 'Законное списание долгов по кредитам и ЖКХ, защита имущества от приставов и коллекторов.',
        link: '/grazhdanam/bankrotstvo',
        icon: '💳'
      },
      {
        title: 'Семейные споры',
        desc: 'Сложные разводы, раздел совместно нажитого имущества, споры о детях и алиментах.',
        link: '/grazhdanam/semejnie',
        icon: '👨‍👩‍👧'
      },
      {
        title: 'Споры с застройщиками',
        desc: 'Взыскание неустойки за просрочку, компенсация за строительные недостатки, приемка квартир.',
        link: '/grazhdanam/zastroishiki',
        icon: '🏗️'
      },
      {
        title: 'Наследственные дела',
        desc: 'Оспаривание завещаний, восстановление сроков, раздел наследственного имущества.',
        link: '/grazhdanam/nasledstvo',
        icon: '📜'
      },
      {
        title: 'Защита прав потребителей',
        desc: 'Возврат бракованных автомобилей, споры со страховыми, маркетплейсами и мед. клиниками.',
        link: '/grazhdanam/potrebiteli',
        icon: '🛍️'
      }
    ],
    special: [
      {
        title: 'Уголовная защита (White-collar)',
        desc: 'Защита руководителей и собственников по экономическим, должностным и налоговым преступлениям.',
        link: '/praktika/ugolovnaya',
        icon: '🛡️'
      },
      {
        title: 'Миграционные споры',
        desc: 'Снятие запрета на въезд в РФ, обжалование депортации, помощь в получении ВНЖ и гражданства.',
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
            <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: 'var(--color-primary)', fontFamily: 'var(--font-serif)' }}>
              {service.title}
            </h3>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '32px', lineHeight: '1.6', flexGrow: 1 }}>
              {service.desc}
            </p>
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
