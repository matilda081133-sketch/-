'use client';

import { useState } from 'react';
import Link from 'next/link';

type Tab = 'citizens' | 'business';

export default function ServicesBlock() {
  const [activeTab, setActiveTab] = useState<Tab>('citizens');

  const tabs = [
    { id: 'citizens', label: 'Гражданам' },
    { id: 'business', label: 'Бизнесу' }
  ];

  const priorityServices = [
    {
      num: '01',
      title: 'Земельные споры',
      desc: 'Оспаривание кадастровой стоимости, установление границ участка, споры о правах на землю, легализация самостроя.',
      link: '/grazhdanam/zemelnye-spory'
    },
    {
      num: '02',
      title: 'Споры с недвижимостью',
      desc: 'Сопровождение сделок с недвижимостью, защита прав дольщиков (ДДУ), взыскание неустойки с застройщика.',
      link: '/grazhdanam/zhilischnye-voprosy'
    },
    {
      num: '03',
      title: 'Исполнительное производство',
      desc: 'Взаимодействие с судебными приставами, снятие арестов с имущества, обжалование действий ФССП.',
      link: '/grazhdanam/ispolnitelnoe-proizvodstvo'
    },
    {
      num: '04',
      title: 'Уголовная защита',
      desc: 'Защита на стадии доследственной проверки, следствия и в суде. Экономические и должностные преступления.',
      link: '/grazhdanam/ugolovnaya-zaschita'
    },
    {
      num: '05',
      title: 'Военное право',
      desc: 'Консультации при мобилизации и призыве, оспаривание решений ВВК, выплаты военнослужащим.',
      link: '/grazhdanam/voennyy-yurist'
    },
    {
      num: '06',
      title: 'Юридическое обслуживание',
      desc: 'Аутсорсинг юридических услуг для бизнеса, договорная работа, претензионно-исковая работа, комплаенс.',
      link: '/biznesu/yuridicheskoe-obsluzhivanie'
    }
  ];

  const allServices = {
    citizens: [
      { title: "Банкротство и долги", href: "/grazhdanam/bankrotstvo-i-dolgi" },
      { title: "Семейные споры", href: "/grazhdanam/semeynye-spory" },
      { title: "Уголовная защита", href: "/grazhdanam/ugolovnaya-zaschita" },
      { title: "Жилищные вопросы", href: "/grazhdanam/zhilischnye-voprosy" },
      { title: "Защита прав потребителей", href: "/grazhdanam/zaschita-prav-potrebiteley" },
      { title: "Земельные споры", href: "/grazhdanam/zemelnye-spory" },
      { title: "Автоюрист", href: "/grazhdanam/avtoyurist" },
      { title: "Наследственные дела", href: "/grazhdanam/nasledstvennye-dela" },
      { title: "Военный юрист", href: "/grazhdanam/voennyy-yurist" },
      { title: "Исполнительное производство", href: "/grazhdanam/ispolnitelnoe-proizvodstvo" }
    ],
    business: [
      { title: "Арбитражные споры", href: "/biznesu/arbitrazhnye-spory" },
      { title: "Юридическое обслуживание", href: "/biznesu/yuridicheskoe-obsluzhivanie" },
      { title: "Банкротство юридических лиц", href: "/biznesu/bankrotstvo-yuridicheskih-lits" },
      { title: "Налоговые споры", href: "/biznesu/nalogovye-spory" },
      { title: "Корпоративные споры", href: "/biznesu/korporativnye-spory" },
      { title: "Таможенные споры", href: "/biznesu/tamozhennye-spory" }
    ]
  };

  return (
    <section id="services" className="section bg-light" style={{ position: 'relative', overflow: 'hidden', padding: '80px 0' }}>
      {/* Abstract Background Glows for Depth */}
      <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(234, 241, 246, 0.7) 0%, rgba(247, 244, 237, 0.7) 100%)', zIndex: 0, pointerEvents: 'none' }}></div>
      <div style={{ position: 'absolute', top: '0', right: '-10%', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(212, 175, 55, 0.06) 0%, transparent 70%)', filter: 'blur(80px)', zIndex: 0, pointerEvents: 'none' }}></div>
      <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(23, 50, 77, 0.06) 0%, transparent 70%)', filter: 'blur(60px)', zIndex: 0, pointerEvents: 'none' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'left', marginBottom: '60px' }}>
          <h2 style={{ marginTop: 0, marginBottom: '16px' }}>Приоритетные направления</h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', maxWidth: '800px', margin: '0' }}>
            Основные направления юридической помощи гражданам и бизнесу.
          </p>
        </div>
        
        {/* Priority Cards Grid */}
        <div className="grid grid-3" style={{ gap: '30px', marginBottom: '80px' }}>
          {priorityServices.map((service, index) => (
            <Link href={service.link} key={index} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', height: '100%' }}>
              <div className="card-service" style={{ width: '100%', height: '100%', border: '1px solid rgba(200, 169, 126, 0.4)' }}>
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
                    {service.desc.split(', ').map((sub, i) => {
                      const cleanSub = sub.trim().replace(/\.$/, '');
                      const capitalizedSub = cleanSub.charAt(0).toUpperCase() + cleanSub.slice(1);
                      return (
                        <li key={i} style={{ 
                          color: 'var(--color-text-secondary)', 
                          lineHeight: '1.4',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '8px'
                        }}>
                          <span style={{ color: 'var(--color-primary)', fontSize: '14px', marginTop: '2px' }}>■</span>
                          <span style={{ fontSize: '15px' }}>{capitalizedSub}</span>
                        </li>
                      );
                    })}
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

        {/* All Services Tabs Block */}
        <div style={{ background: 'var(--color-white)', borderRadius: '12px', padding: '40px', boxShadow: '0 10px 30px rgba(23, 50, 77, 0.05)', border: '1px solid rgba(23, 50, 77, 0.05)' }}>
          <h3 style={{ marginTop: 0, marginBottom: '30px', fontSize: '24px', textAlign: 'center' }}>Все направления</h3>
          
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
            <div style={{ 
              display: 'inline-flex', 
              background: 'var(--gradient-light)', 
              border: '1px solid var(--color-primary)',
              borderRadius: '4px',
              overflow: 'hidden'
            }}>
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as Tab)}
                  style={{
                    padding: '12px 32px',
                    border: 'none',
                    background: activeTab === tab.id ? 'var(--color-primary)' : 'transparent',
                    color: activeTab === tab.id ? 'var(--color-white)' : 'var(--color-primary)',
                    fontSize: '15px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'var(--transition)',
                    outline: 'none',
                    minWidth: '200px'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
            {allServices[activeTab].map((item, idx) => (
              <Link href={item.href} key={idx} style={{ 
                padding: '16px 24px', 
                background: 'rgba(234, 241, 246, 0.3)', 
                borderRadius: '8px',
                color: 'var(--color-deep-blue)',
                fontWeight: 500,
                fontSize: '15px',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'background 0.3s, transform 0.3s'
              }} className="hub-link">
                <span>{item.title}</span>
                <span style={{ color: 'var(--color-primary)', opacity: 0.5 }}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html:`
        .hub-link:hover {
          background: rgba(234, 241, 246, 0.8) !important;
          transform: translateY(-2px);
        }
        .hub-link:hover span:last-child {
          opacity: 1 !important;
          transform: translateX(4px);
          transition: all 0.3s ease;
        }
      `}} />
    </section>
  );
}
