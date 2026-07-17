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
    <section className="section bg-cream">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ marginTop: 0, marginBottom: '16px' }}>Приоритетные направления</h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', maxWidth: '800px', margin: '0 auto', marginBottom: '40px' }}>
            Основные направления юридической помощи гражданам и бизнесу.
          </p>
          
          <div className="tabs" style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id as Tab)}
                style={{
                  padding: '16px 32px',
                  border: '1px solid var(--color-border)',
                  background: activeTab === tab.id ? 'var(--color-deep-blue)' : 'transparent',
                  color: activeTab === tab.id ? 'var(--color-white)' : 'var(--color-deep-blue)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  borderRadius: '0'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
          {services[activeTab].map((service, index) => (
            <div key={index} className="service-card" style={{
              background: 'var(--color-white)',
              padding: '40px',
              border: '1px solid var(--color-border)',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative'
            }}>
              <div style={{ 
                fontSize: '12px', 
                color: 'var(--color-primary)', 
                fontWeight: 'bold', 
                marginBottom: '20px' 
              }}>
                {service.num}
              </div>
              <h3 style={{ 
                fontSize: '22px', 
                marginBottom: '16px',
                fontFamily: 'var(--font-serif)',
                color: 'var(--color-deep-blue)'
              }}>
                {service.title}
              </h3>
              <p style={{ 
                color: 'var(--color-text-secondary)', 
                lineHeight: '1.6',
                marginBottom: '30px',
                flexGrow: 1
              }}>
                {service.desc}
              </p>
              <Link href={service.link} style={{
                color: 'var(--color-deep-blue)',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '14px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                Узнать больше <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
