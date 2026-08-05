'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';
import ProcessBlock from '@/components/ProcessBlock';
import PricingBlock from '@/components/PricingBlock';

export default function OformleniePravClient() {
  const [ctaSource, setCtaSource] = useState('land_rights_form_direct');
  const [ctaText, setCtaText] = useState('Прямой переход к форме');

  const handleCtaClick = (source: string, text: string) => {
    setCtaSource(source);
    setCtaText(text);
  };

  const faqs = [
    {
      q: 'Можно ли оформить участок по старому свидетельству?',
      a: 'Часто ранее возникшее право признаётся действительным, но документ и идентификацию участка необходимо проверить; иногда нужны архивные сведения или кадастровые работы.'
    },
    {
      q: 'Можно ли оформить землю под принадлежащим мне домом?',
      a: 'Право на объект важно, но само по себе не всегда означает автоматическую передачу земли. Проверяются вид права, статус участка, ограничения и применимая процедура.'
    },
    {
      q: 'Что делать, если документов на землю почти нет?',
      a: 'Нужно установить историю предоставления и возможные источники доказательств. После этого определяется административный или судебный маршрут.'
    },
    {
      q: 'Чем приостановление отличается от отказа?',
      a: 'Приостановление обычно даёт срок для устранения конкретных препятствий. Отказ завершает процедуру, но может быть оспорен или сменён новым обращением после исправления причин.'
    },
    {
      q: 'Всегда ли нужно межевание?',
      a: 'Нет. Оно требуется, когда без уточнения или образования участка нельзя завершить выбранную процедуру. Это определяется после проверки ЕГРН и документов.'
    },
    {
      q: 'Когда требуется суд?',
      a: 'Когда право или юридически значимый факт нельзя подтвердить административно, имеется спор либо незаконный отказ. Возможность и предмет иска оцениваются индивидуально.'
    }
  ];

  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://dejure-help.ru/#organization",
        "name": "Юридическая компания «Де-Юре»",
        "url": "https://dejure-help.ru/",
        "logo": "https://matilda081133-sketch.github.io/-/images/logo_dark.png"
      },
      {
        "@type": "LegalService",
        "@id": "https://dejure-help.ru/#legalservice",
        "name": "Юридическая компания «Де-Юре»",
        "url": "https://dejure-help.ru/",
        "logo": "https://matilda081133-sketch.github.io/-/images/logo_dark.png",
        "areaServed": ["Липецк", "Липецкая область", "Россия"]
      },
      {
        "@type": "Service",
        "@id": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/oformlenie-prav-na-zemelnyj-uchastok/#service",
        "name": "Оформление прав на земельный участок в Липецке",
        "serviceType": "Оформление и регистрация прав на землю",
        "url": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/oformlenie-prav-na-zemelnyj-uchastok/",
        "description": "Проверим основания и документы, определим административный или судебный порядок оформления права на земельный участок в Липецке и сопроводим регистрацию.",
        "provider": { "@id": "https://dejure-help.ru/#organization" },
        "areaServed": ["Липецк", "Липецкая область", "Россия"]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/oformlenie-prav-na-zemelnyj-uchastok/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://matilda081133-sketch.github.io/-/" },
          { "@type": "ListItem", "position": 2, "name": "Гражданам", "item": "https://matilda081133-sketch.github.io/-/grazhdanam/" },
          { "@type": "ListItem", "position": 3, "name": "Земельный юрист", "item": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/" },
          { "@type": "ListItem", "position": 4, "name": "Оформление прав на земельный участок", "item": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/oformlenie-prav-na-zemelnyj-uchastok/" }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/oformlenie-prav-na-zemelnyj-uchastok/#webpage",
        "url": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/oformlenie-prav-na-zemelnyj-uchastok/",
        "name": "Оформление прав на земельный участок в Липецке | Де-Юре",
        "description": "Проверим основания и документы, определим административный или судебный порядок оформления права на земельный участок в Липецке и сопроводим регистрацию.",
        "breadcrumb": { "@id": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/oformlenie-prav-na-zemelnyj-uchastok/#breadcrumb" },
        "mainEntity": { "@id": "https://matilda081133-sketch.github.io/-/grazhdanam/zemelnyj-yurist/oformlenie-prav-na-zemelnyj-uchastok/#service" }
      }
    ]
  };

  const situations = [
    {
      tag: 'СИТУАЦИЯ 01',
      title: <>Есть старое свидетельство <br />или постановление</>,
      desc: 'Право возникло давно, но сведения отсутствуют в ЕГРН, документ повреждён, содержит старое описание участка или требует проверки.'
    },
    {
      tag: 'СИТУАЦИЯ 02',
      title: <>Участок перешёл <br />по наследству</>,
      desc: 'Нотариусу или Росреестру недостаточно документов, границы не уточнены либо право наследодателя не было зарегистрировано.'
    },
    {
      tag: 'СИТУАЦИЯ 03',
      title: <>Дом оформлен, <br />а земля под ним — нет</>,
      desc: 'Необходимо определить основание использования участка и возможность его предоставления, аренды или выкупа.'
    },
    {
      tag: 'СИТУАЦИЯ 04',
      title: <>Участком пользуются много <br />лет без полного комплекта документов</>,
      desc: 'Нужно оценить архивные документы, решения органов, фактическое пользование и возможный административный либо судебный маршрут.'
    },
    {
      tag: 'СИТУАЦИЯ 05',
      title: <>Получено приостановление <br />или отказ Росреестра</>,
      desc: 'Требуется проверить причины, устранить недостатки, представить дополнительные документы или обжаловать решение.'
    },
    {
      tag: 'СИТУАЦИЯ 06',
      title: <>Администрация отказала <br />в предоставлении или выкупе</>,
      desc: 'Нужно проверить право на обращение, ограничения участка, мотивировку отказа и перспективу повторного заявления или суда.'
    }
  ];

  const howHelps = [
    {
      title: 'Правовая диагностика',
      desc: 'Проверяем документы, сведения ЕГРН, историю участка, право на дом или другой объект и возможные ограничения.'
    },
    {
      title: 'Восстановление и получение документов',
      desc: 'Определяем, какие архивные акты, справки, решения или дубликаты необходимо запросить, и сопровождаем их получение в согласованном объёме.'
    },
    {
      title: 'Административное оформление',
      desc: 'Готовим заявления и комплект для администрации, Росреестра или иного компетентного органа; контролируем рассмотрение.'
    },
    {
      title: 'Устранение приостановления или отказа',
      desc: 'Анализируем уведомление, исправляем комплект либо готовим аргументированное обжалование.'
    },
    {
      title: 'Признание права через суд',
      desc: 'Формулируем требования, собираем доказательства и представляем интересы, если внесудебного основания недостаточно.'
    },
    {
      title: 'Регистрация после решения',
      desc: 'После получения документа-основания сопровождаем кадастровый учёт и регистрацию права в согласованном объёме.'
    }
  ];

  const documents = [
    {
      title: 'Документы на землю',
      desc: 'Свидетельство, договор, постановление, акт предоставления, выписка из похозяйственной книги, документы об аренде или другие основания.'
    },
    {
      title: 'Сведения ЕГРН и кадастровые материалы',
      desc: 'Выписка, кадастровый номер, межевой план, схема расположения, документы об уточнении границ.'
    },
    {
      title: 'Документы на дом или иной объект',
      desc: 'Выписка ЕГРН, договор, наследственные документы, технический план — если право на землю связано с объектом.'
    },
    {
      title: 'Отказы и переписка',
      desc: 'Уведомление о приостановлении, решение об отказе, ответы администрации, архивов, нотариуса и другие обращения.'
    }
  ];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />
      <Header />

      {/* ═══ 1. ПЕРВЫЙ ЭКРАН ═══ */}
      <div onClickCapture={() => handleCtaClick('land_rights_hero', 'Проверить возможность оформления')}>
        <MilitaryHero 
          breadcrumbs={
            <>
              <a href="/-/" style={{ color: 'var(--color-primary)' }}>Главная</a> <span style={{ margin: '0 8px' }}>/</span> 
              <a href="/-/grazhdanam/" style={{ color: 'var(--color-primary)' }}>Гражданам</a> <span style={{ margin: '0 8px' }}>/</span> 
              <a href="/-/grazhdanam/zemelnyj-yurist/" style={{ color: 'var(--color-primary)' }}>Земельный юрист</a> <span style={{ margin: '0 8px' }}>/</span> 
              <span style={{ color: 'var(--color-text-main)' }}>Оформление прав на земельный участок</span>
            </>
          }
          superTitle="Земельное право • Липецк и Липецкая область"
          title={<><span style={{ display: 'inline-block' }}>Оформление прав на земельный участок</span> <br /><span style={{ display: 'inline-block' }}>в Липецке</span></>}
          subtitle={
            <span style={{ display: 'inline-block', maxWidth: '580px', textWrap: 'balance' }}>
              Проверим, на каком основании можно оформить участок, каких документов не хватает и нужен ли административный или судебный порядок — до подачи заявления и лишних расходов.
            </span>
          }
          primaryCtaText="Проверить возможность оформления"
          primaryCtaLink="#form"
          primaryCtaSubtext="Перезвоним вам в течение 15 минут в рабочее время"
          rightContent={
            <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', width: '100%' }}>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '130%',
                height: '130%',
                background: 'radial-gradient(circle, rgba(193, 160, 102, 0.15) 0%, rgba(23, 50, 77, 0.04) 40%, transparent 70%)',
                zIndex: 0,
                pointerEvents: 'none'
              }} />

              <svg style={{ position: 'absolute', top: '40%', left: '85%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', opacity: 0.09, zIndex: 0, pointerEvents: 'none' }} viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="0.6">
                <path d="M3 21h18 M4 21v-2h16v2 M6 19V9 M10 19V9 M14 19V9 M18 19V9 M12 4l-9 5h18l-9-5z M4 9h16"/>
              </svg>

              <div className="mockup-container" style={{ zIndex: 1, margin: 0 }}>
                <div style={{ position: 'absolute', width: '220px', height: '220px', background: 'var(--color-primary)', filter: 'blur(90px)', opacity: 0.12, borderRadius: '50%' }}></div>
                
                <div className="doc-wrapper-float-4">
                  <div className="doc-sheet doc-sheet-4">
                    <div style={{ padding: '35px 25px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '30px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end' }}>
                          <div style={{ width: '90px', height: '3px', background: 'rgba(23,50,77,0.2)' }}></div>
                          <div style={{ width: '70px', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                        </div>
                      </div>
                      <div style={{ width: '140px', height: '6px', background: 'var(--color-primary)', margin: '0 auto 30px auto' }}></div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <div style={{ width: '100%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                        <div style={{ width: '90%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="doc-wrapper-float-3">
                  <div className="doc-sheet doc-sheet-3">
                    <div style={{ padding: '35px 25px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <div style={{ position: 'absolute', top: '25px', left: '25px', width: '65px', height: '25px', border: '1.5px solid rgba(23, 50, 77, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-5deg)' }}>
                        <span style={{ fontSize: '4px', fontWeight: 'bold', color: 'rgba(23,50,77,0.4)', fontFamily: 'var(--font-serif)' }}>ЕГРН № 48-01/2026</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '35px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end' }}>
                          <div style={{ width: '95px', height: '3px', background: 'rgba(23,50,77,0.2)' }}></div>
                          <div style={{ width: '55px', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                        </div>
                      </div>
                      <div style={{ width: '130px', height: '6px', background: 'var(--color-primary)', margin: '0 auto 30px auto' }}></div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <div style={{ width: '100%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                        <div style={{ width: '95%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                        <div style={{ width: '80%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="doc-wrapper-float-2">
                  <div className="doc-sheet doc-sheet-2">
                    <div style={{ padding: '28px 22px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <div style={{ position: 'absolute', top: '22px', left: '22px', width: '100px', height: '30px', border: '1px solid #C1A066', color: '#C1A066', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-4deg)', opacity: 0.95 }}>
                        <div style={{ fontFamily: 'var(--font-serif)', fontSize: '5px', textAlign: 'center', fontWeight: 'bold', lineHeight: 1.2 }}>
                          АКТ ПРЕДОСТАВЛЕНИЯ<br/>
                          ЗЕМЛИ В СОБСТВЕННОСТЬ
                        </div>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '24px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end' }}>
                          <div style={{ width: '90px', height: '3px', background: 'rgba(23,50,77,0.2)' }}></div>
                          <div style={{ width: '50px', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                        </div>
                      </div>

                      <div style={{ width: '140px', height: '6px', background: 'var(--color-primary)', margin: '0 auto 16px auto' }}></div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                        <div style={{ width: '40%', height: '3px', background: 'rgba(23,50,77,0.2)' }}></div>
                        <div style={{ width: '100%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                        <div style={{ width: '90%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>

                      <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '8px', borderTop: '1px dashed rgba(23,50,77,0.15)' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                          <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Заявитель / Собственник:</div>
                          <div style={{ width: '70px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '8px' }}></div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                          <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Росреестр / Администрация:</div>
                          <div style={{ width: '70px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '8px' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="doc-wrapper-float-1">
                  <div className="doc-sheet doc-sheet-1">
                    <div style={{ padding: '26px 22px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(23,50,77,0.2)', paddingBottom: '10px', marginBottom: '14px' }}>
                        <img src="/-/images/logo_dark.png" alt="Де-Юре" style={{ width: '55px', height: 'auto', opacity: 0.9 }} />
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', alignItems: 'flex-end' }}>
                          <span style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)', letterSpacing: '0.05em' }}>ОФОРМЛЕНИЕ ПРАВ</span>
                          <span style={{ fontSize: '5px', color: 'var(--color-primary)' }}>Выписка из ЕГРН</span>
                        </div>
                      </div>

                      <div className="doc-map-box" style={{ 
                        width: '100%', 
                        height: '110px', 
                        background: 'rgba(247, 244, 237, 0.6)', 
                        border: '1px solid rgba(193, 160, 102, 0.3)', 
                        borderRadius: '2px', 
                        marginBottom: '12px',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '4px'
                      }}>
                        <svg width="100%" height="100%" viewBox="0 0 200 100" fill="none">
                          <line x1="0" y1="33" x2="200" y2="33" stroke="rgba(23,50,77,0.06)" strokeDasharray="2 2" />
                          <line x1="0" y1="66" x2="200" y2="66" stroke="rgba(23,50,77,0.06)" strokeDasharray="2 2" />
                          <line x1="66" y1="0" x2="66" y2="100" stroke="rgba(23,50,77,0.06)" strokeDasharray="2 2" />
                          <line x1="133" y1="0" x2="133" y2="100" stroke="rgba(23,50,77,0.06)" strokeDasharray="2 2" />

                          <polygon points="30,20 170,15 150,85 20,80" fill="rgba(193, 160, 102, 0.15)" stroke="#C1A066" strokeWidth="1.5" />
                          <circle cx="30" cy="20" r="3" fill="#10273B" />
                          <circle cx="170" cy="15" r="3" fill="#10273B" />
                          <circle cx="150" cy="85" r="3" fill="#10273B" />
                          <circle cx="20" cy="80" r="3" fill="#10273B" />
                          <text x="45" y="52" fill="#10273B" fontSize="7" fontWeight="bold">ПРАВО ЗАРЕГИСТРИРОВАНО</text>
                        </svg>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '10px' }}>
                        <div style={{ display: 'flex', gap: '6px' }}>
                          <div style={{ width: '8px', height: '3px', background: 'var(--color-primary)' }}></div>
                          <div style={{ width: '80%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                        </div>
                        <div style={{ width: '95%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>

                      <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '8px', borderTop: '1px solid rgba(23,50,77,0.15)' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                          <div style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)' }}>ЮК «ДЕ-ЮРЕ»</div>
                          <div style={{ fontSize: '9.5px', color: 'rgba(23,50,77,0.75)', fontFamily: 'var(--font-sans)' }}>Право собственности • Липецк</div>
                        </div>
                        <div style={{ position: 'relative', width: '42px', height: '42px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <div style={{ width: '38px', height: '38px', borderRadius: '50%', border: '1.25px solid #17375E', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-12deg)', opacity: 0.9 }}>
                            <div style={{ width: '31px', height: '31px', borderRadius: '50%', border: '0.5px dashed #17375E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <span style={{ fontSize: '3.5px', fontWeight: 'bold', color: '#17375E', textAlign: 'center', lineHeight: 1.1 }}>
                                ДЕ-ЮРЕ<br/>ЛИПЕЦК
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          }
          trustItems={[
            { text: 'Начинаем с основания права и истории участка' },
            { text: 'Разделяем регистрацию, предоставление земли и судебное признание' },
            { text: 'Согласуем объём работы после проверки документов' }
          ]}
        />
      </div>

      {/* ═══ 2. СИТУАЦИИ КЛИЕНТА ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Когда нужна помощь <br />с оформлением прав на землю
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Одинаковая внешне проблема может требовать разных действий. Важно установить, существует ли право уже сейчас, должно ли оно возникнуть после решения органа власти или его придётся подтверждать в суде.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '40px' }}>
            {situations.map((sit, i) => (
              <div key={i} className="hover-lift" style={{ 
                padding: '36px 30px', 
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-primary)',
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{ 
                  fontSize: '12px', 
                  fontWeight: 700, 
                  color: 'var(--color-gold)', 
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '12px',
                  background: 'rgba(193, 160, 102, 0.1)',
                  padding: '4px 10px',
                  alignSelf: 'flex-start'
                }}>
                  {sit.tag}
                </div>

                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', fontWeight: 600, color: 'var(--color-deep-blue)', lineHeight: 1.4, margin: '0 0 14px 0' }}>
                  {sit.title}
                </h3>

                <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {sit.desc}
                </p>
              </div>
            ))}
          </div>

          <div 
            className="card service-card cta-banner-card" 
            style={{ 
              width: '100%', 
              padding: '32px 36px', 
              background: 'var(--color-deep-blue)', 
              borderRadius: '0',
              borderTop: '3px solid var(--color-gold)',
              boxShadow: '0 8px 16px rgba(16, 39, 59, 0.28)'
            }}
          >
            <div style={{ flex: '1 1 300px' }}>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-white)', lineHeight: 1.3 }}>
                Регистрация не создаёт основание права
              </h3>
              <p style={{ margin: '0', fontSize: '15px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5, maxWidth: '640px' }}>
                Если у заявителя нет документа или предусмотренного законом основания, одной подачи в Росреестр недостаточно. Сначала юрист определяет, какой юридический факт, решение органа или судебный акт должен лежать в основе регистрации.
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <a 
                href="#form" 
                className="btn white-btn-custom" 
                style={{ display: 'inline-block', textAlign: 'center', fontSize: '15px' }}
                onClick={() => handleCtaClick('land_rights_situations', 'Проверить документы')}
              >
                Проверить документы
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. КАК ПОМОГАЕТ ЮРИСТ ═══ */}
      <section className="section bg-cream" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '700px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Как юрист помогает <br />оформить права на участок
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Состав работы определяется после проверки основания, статуса участка, документов и уже полученных решений.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', position: 'relative' }}>
            {howHelps.map((item, i) => (
              <div key={i} className="hover-lift" style={{ 
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                padding: '36px 30px 32px 30px', 
                border: '1px solid var(--color-border)',
                borderTop: '4px solid var(--color-gold)',
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                display: 'flex', 
                flexDirection: 'column',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '24px',
                  background: 'var(--color-gold)',
                  color: '#FFFFFF',
                  fontSize: '12px',
                  fontWeight: 700,
                  padding: '2px 10px',
                  borderRadius: '2px',
                  letterSpacing: '0.05em'
                }}>
                  0{i + 1}
                </div>

                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '8px 0 14px 0', lineHeight: 1.35 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4. ДОКУМЕНТЫ ДЛЯ ПЕРВИЧНОЙ ПРОВЕРКИ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Какие документы нужны <br />для первичной проверки
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Для начала достаточно того, что сохранилось у клиента. Точный список формируется после определения маршрута.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '28px', marginBottom: '32px' }}>
            {/* Карточка 1 */}
            <div style={{
              background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-primary)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0, paddingBottom: '12px', borderBottom: '1px solid rgba(23, 50, 77, 0.1)' }}>
                Правоустанавливающие <br />и кадастровые документы
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(193, 160, 102, 0.15)', border: '1px solid var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Документы на землю</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Свидетельство, договор, постановление, акт предоставления, выписка из похозяйственной книги, документы об аренде или другие основания.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(193, 160, 102, 0.15)', border: '1px solid var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Сведения ЕГРН и кадастровые материалы</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Выписка, кадастровый номер, межевой план, схема расположения, документы об уточнении границ.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Карточка 2 */}
            <div style={{
              background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-primary)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0, paddingBottom: '12px', borderBottom: '1px solid rgba(23, 50, 77, 0.1)' }}>
                Связанные объекты <br />и решения органов
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(193, 160, 102, 0.15)', border: '1px solid var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Документы на дом или иной объект</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Выписка ЕГРН, договор, наследственные документы, технический план — если право на землю связано с объектом.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(193, 160, 102, 0.15)', border: '1px solid var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Отказы и переписка</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Уведомление о приостановлении, решение об отказе, ответы администрации, архивов, нотариуса и другие обращения.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div style={{
            background: 'var(--color-white)',
            padding: '20px 28px',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-gold)',
            boxShadow: '0 4px 16px rgba(23, 50, 77, 0.05)',
            fontSize: '15px',
            color: 'var(--color-deep-blue)',
            fontWeight: 500,
            lineHeight: 1.6
          }}>
            Если документов не хватает, обратиться всё равно можно. Юрист определит, какие сведения нужно запросить и требуется ли смежный специалист.
          </div>
        </div>
      </section>

      {/* ═══ 5. КАК ПРОХОДИТ РАБОТА ═══ */}
      <ProcessBlock 
        title="Как проходит работа"
        subtitle="Пять последовательных шагов для оформления права на земельный участок."
        ctaTitle=""
        steps={[
          { num: '01', title: 'Проверяем исходную ситуацию', desc: 'Уточняем, как возникло пользование участком, какие документы сохранились и что уже предпринималось.' },
          { num: '02', title: 'Определяем основание и статус участка', desc: 'Сопоставляем документы, ЕГРН, права на объекты и ограничения.' },
          { num: '03', title: 'Выбираем маршрут', desc: 'Определяем: регистрация существующего права, обращение в администрацию, устранение приостановления или судебная защита.' },
          { num: '04', title: 'Готовим и сопровождаем процедуру', desc: 'Формируем документы, взаимодействуем с органами и при необходимости ведём дело в суде.' },
          { num: '05', title: 'Сопровождаем внесение результата в ЕГРН', desc: 'После появления надлежащего основания контролируем кадастровые и регистрационные действия в согласованном объёме.' }
        ]}
      />

      {/* ═══ 6. СТОИМОСТЬ ═══ */}
      <div onClickCapture={(e) => {
        const target = e.target as HTMLElement;
        const btn = target.closest('a, button');
        if (btn) {
          const text = btn.textContent?.trim() || '';
          if (text.includes('Уточнить стоимость')) {
            handleCtaClick('land_rights_pricing', 'Уточнить стоимость');
          }
        }
      }}>
        <PricingBlock 
          title="Стоимость юридической помощи"
          subtitle="Точная стоимость зависит от основания права, состояния документов, необходимости кадастровых работ и наличия отказа или судебного спора."
          tiers={[
            {
              title: <>Консультация<br />и анализ</>,
              subtitle: 'Первичный разбор',
              popular: false,
              price: 'от ХХХ ₽',
              features: [
                { name: 'Разбор ситуации и документов', value: '✓' },
                { name: 'Проверка сведений ЕГРН', value: '✓' },
                { name: 'Определение недостающих материалов', value: '✓' },
                { name: 'Предварительный маршрут', value: '✓' }
              ],
              buttonText: 'Уточнить стоимость',
              buttonHref: '#form'
            },
            {
              title: <>Административное<br />оформление</>,
              subtitle: 'Подготовка и сопровождение',
              popular: true,
              badgeText: 'ВОСТРЕБОВАНО',
              price: 'от ХХХ ₽',
              features: [
                { name: 'Формирование комплекта документов', value: '✓' },
                { name: 'Заявления в государственные органы', value: '✓' },
                { name: 'Работа с приостановлением и отказами', value: '✓' },
                { name: 'Контроль согласованного этапа', value: '✓' }
              ],
              buttonText: 'Уточнить стоимость',
              buttonHref: '#form'
            },
            {
              title: <>Судебная<br />защита</>,
              subtitle: 'Признание права или обжалование',
              popular: false,
              price: 'от ХХХ ₽',
              features: [
                { name: 'Подготовка иска или жалобы в суд', value: '✓' },
                { name: 'Формирование доказательной базы', value: '✓' },
                { name: 'Процессуальные документы', value: '✓' },
                { name: 'Представительство в суде', value: '✓' }
              ],
              buttonText: 'Уточнить стоимость',
              buttonHref: '#form'
            }
          ]}
          ctaTitle=""
        />
      </div>

      {/* ═══ 7. ОТВЕТЫ НА ЧАСТЫЕ ВОПРОСЫ ═══ */}
      <div onClickCapture={() => handleCtaClick('land_rights_faq', 'Задать свой вопрос')}>
        <FAQBlock 
          faqs={faqs} 
          title={<>Частые вопросы <br />об оформлении прав <br />на земельный участок</>}
          subtitle="Ответ зависит от основания права и статуса участка; универсального комплекта документов не существует."
          ctaText="Задать свой вопрос"
          ctaLink="#form"
        />
      </div>

      {/* ═══ 8. СВЯЗАННЫЕ УСЛУГИ ═══ */}
      <section className="section" style={{ background: 'var(--gradient-cream)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '700px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: '32px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 12px 0' }}>
              Связанные услуги
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
              Если препятствие связано с границами, разделом или режимом использования, может потребоваться другая услуга.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '32px' }}>
            <a href="/-/grazhdanam/zemelnyj-yurist/spory-o-granicah-zemelnogo-uchastka/" style={{ textDecoration: 'none' }}>
              <div className="card service-card" style={{ padding: '28px', background: '#FFFFFF', borderTop: '3px solid var(--color-primary)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>
                  Споры о границах земельного участка
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5, flexGrow: 1 }}>
                  Помощь при наложении координат, захвате части участка и реестровой ошибке.
                </p>
                <div style={{ color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, marginTop: '16px' }}>Подробнее →</div>
              </div>
            </a>

            <a href="/-/grazhdanam/zemelnyj-yurist/razdel-zemelnogo-uchastka/" style={{ textDecoration: 'none' }}>
              <div className="card service-card" style={{ padding: '28px', background: '#FFFFFF', borderTop: '3px solid var(--color-primary)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>
                  Раздел земельного участка
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5, flexGrow: 1 }}>
                  Проверка делимости и оформление самостоятельных участков.
                </p>
                <div style={{ color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, marginTop: '16px' }}>Подробнее →</div>
              </div>
            </a>

            <a href="/-/grazhdanam/zemelnyj-yurist/izmenenie-vri-zemelnogo-uchastka/" style={{ textDecoration: 'none' }}>
              <div className="card service-card" style={{ padding: '28px', background: '#FFFFFF', borderTop: '3px solid var(--color-primary)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>
                  Изменение вида разрешённого использования
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5, flexGrow: 1 }}>
                  Проверка территориальной зоны и допустимого способа использования земли.
                </p>
                <div style={{ color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, marginTop: '16px' }}>Подробнее →</div>
              </div>
            </a>
          </div>

          <div>
            <a href="/-/grazhdanam/zemelnyj-yurist/" style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '15px', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
              Все услуги по земельным вопросам → Земельный юрист
            </a>
          </div>
        </div>
      </section>

      {/* ═══ 9. ФИНАЛЬНАЯ ФОРМА ═══ */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start', paddingTop: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>Связаться с нами</span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                Проверьте возможность оформления участка
              </h2>
              
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Кратко опишите, на каком основании вы пользуетесь землёй, какие документы сохранились и получали ли вы отказ. Юрист уточнит обстоятельства и согласует консультацию.
              </p>
              
              <div style={{ marginTop: '32px' }}>
                <div style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <span>
                    Перезвоним в течение<br />
                    15 минут в рабочее время
                  </span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
              <div style={{ background: 'var(--gradient-cream)', padding: '40px', borderRadius: '0', boxShadow: '0 8px 24px rgba(0,0,0,0.15)', width: '100%', border: '1px solid rgba(0,0,0,0.06)' }}>
                <ContactsForm 
                  title="Написать нам" 
                  subtitle=""
                  buttonText="Получить консультацию"
                  commentPlaceholder="Есть старое постановление и дом, но право на землю не зарегистрировано…"
                  hiddenFields={[
                    { name: 'pageId', value: 'CIV-05-02' },
                    { name: 'pageTitle', value: 'Оформление прав на земельный участок в Липецке' },
                    { name: 'practice', value: 'Земельное право' },
                    { name: 'ctaSource', value: ctaSource },
                    { name: 'cta_source', value: ctaSource },
                    { name: 'cta_text', value: ctaText }
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
