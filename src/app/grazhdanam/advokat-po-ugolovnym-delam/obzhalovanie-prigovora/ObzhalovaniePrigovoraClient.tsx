'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MilitaryHero from '@/components/MilitaryHero';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import CasesBlock, { CaseData } from '@/components/CasesBlock';
import SpecialistBlock from '@/components/SpecialistBlock';
import PricingBlock, { PricingTier } from '@/components/PricingBlock';
import ProcessBlock, { ProcessStep } from '@/components/ProcessBlock';

export default function ObzhalovaniePrigovoraClient() {
  const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Главная",
          "item": "https://dejure-help.ru/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Гражданам",
          "item": "https://dejure-help.ru/grazhdanam/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Адвокат по уголовным делам",
          "item": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Обжалование приговора",
          "item": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/obzhalovanie-prigovora/"
        }
      ]
    },
    {
      "@type": "Service",
      "name": "Обжалование приговора в Липецке",
      "description": "Апелляционное и кассационное обжалование приговоров по уголовным делам в Липецке. Аудит протоколов, выявление нарушений УПК, отмена и смягчение наказания.",
      "url": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/obzhalovanie-prigovora/",
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Липецк и Липецкая область"
      },
      "provider": {
        "@type": "LegalService",
        "name": "Юридическая компания «Де-Юре»",
        "url": "https://dejure-help.ru",
        "telephone": "+7-910-350-31-11",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "ул. Советская, д. 35, оф. 213",
          "addressLocality": "Липецк",
          "addressCountry": "RU"
        }
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "В какой срок можно подать апелляционную жалобу на приговор?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Апелляционная жалоба подается в течение 15 суток со дня провозглашения приговора, а осужденным, содержащимся под стражей, — в тот же срок со дня вручения ему копии приговора (ст. 389.4 УПК РФ). Пропущенный по уважительной причине срок может быть восстановлен судом."
          }
        },
        {
          "@type": "Question",
          "name": "Может ли суд апелляционной инстанции ухудшить положение осужденного?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Суд апелляционной инстанции может ухудшить положение осужденного (увеличить срок или изменить статью на более тяжкую) ТОЛЬКО в том случае, если по этим основаниям подано апелляционное представление прокурора или жалоба потерпевшего. По жалобе защиты ухудшение исключено."
          }
        },
        {
          "@type": "Question",
          "name": "Чем кассация отличается от апелляции?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Апелляция пересматривает не вступивший в силу приговор и заново оценивает фактические обстоятельства и доказательства. Кассация проверяет вступивший в законную силу приговор исключительно на предмет существенных нарушений норм материального и процессуального права."
          }
        },
        {
          "@type": "Question",
          "name": "Можно ли приложить к апелляционной жалобе новые доказательства?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да, дополнительные материалы могут быть представлены в суд апелляционной инстанции. Однако лицо, заявляющее ходатайство об их исследовании, обязано обосновать невозможность их представления в суд первой инстанции по уважительным причинам."
          }
        }
      ]
    }
  ]
};

  const situations = [
  {
    "title": "Несогласие с суровостью назначенного наказания",
    "desc": "Суд первой инстанции назначил чрезмерно суровое наказание в виде реального лишения свободы без учета смягчающих обстоятельств.",
    "impact": "Обосновываем возможность применения ст. 64, 73 УК РФ (условный срок) или снижения срока отбывания наказания."
  },
  {
    "title": "Неправильная квалификация содеянного судом",
    "desc": "Суд необоснованно вменил тяжкий состав преступления вместо менее тяжкого (например, ст. 159 вместо ст. 165 или ст. 228.1 вместо 228).",
    "impact": "Доказываем отсутствие квалифицирующих признаков и добиваемся переквалификации со снижением категории преступления."
  },
  {
    "title": "Существенные нарушения уголовно-процессуального закона",
    "desc": "Нарушение права на защиту, отказ в допросе свидетелей, использование недопустимых доказательств, расхождения с протоколом.",
    "impact": "Добиваемся полной отмены приговора и направления уголовного дела на новое судебное рассмотрение."
  },
  {
    "title": "Приговор уже вступил в законную силу (кассация)",
    "desc": "Апелляция оставила приговор без изменения, лицо отбывает наказание, требуется подача кассационной жалобы.",
    "impact": "Готовим сплошную кассационную жалобу в Первый кассационный суд общей юрисдикции (г. Саратов) или Верховный Суд РФ."
  }
];
  const checkpoints = [
  {
    "title": "Несоответствие выводов суда фактическим обстоятельствам дела",
    "desc": "Сопоставляем показания свидетелей в протоколе с тем, как они изложены в описательно-мотивировочной части приговора."
  },
  {
    "title": "Существенные нарушения уголовно-процессуального закона",
    "desc": "Проверяем соблюдение тайны совещательной комнаты, непрерывность процесса, оглашение показаний без оснований."
  },
  {
    "title": "Неправильное применение уголовного закона",
    "desc": "Анализируем правильность применения норм Общей и Особенной частей УК РФ, правил сложения наказаний и рецидива."
  },
  {
    "title": "Несправедливость назначенного судом наказания",
    "desc": "Оцениваем учет судом личности подсудимого, состояния здоровья, наличия иждивенцев и возмещения ущерба."
  },
  {
    "title": "Соблюдение сроков обжалования (15 суток)",
    "desc": "Контролируем срок подачи апелляционной жалобы (15 суток с момента оглашения или вручения копии осужденному под стражей)."
  },
  {
    "title": "Полнота аудиопротоколирования судебных заседаний",
    "desc": "Сравниваем аудиозаписи заседаний с письменным протоколом и подаем мотивированные замечания на протокол."
  }
];
  const casesData: CaseData[] = [
  {
    "title": "Снижение срока лишения свободы на 3 года в суде апелляции",
    "category": "Апелляционное обжалование",
    "problem": "Районный суд приговорил доверителя к 7 годам колонии по ч. 4 ст. 159 УК РФ, проигнорировав частичное возмещение ущерба.",
    "action": "Адвокат подготовил развернутую жалобу в Липецкий областной суд с доказательствами активного способствования раскрытию.",
    "result": "Апелляционная инстанция изменила приговор, снизив наказание до 4 лет лишения свободы."
  },
  {
    "title": "Отмена приговора в кассационном суде с направлением на новое рассмотрение",
    "category": "Кассация (ст. 401.15 УПК РФ)",
    "problem": "Суд первой инстанции необоснованно отклонил ходатайство защиты о проведении повторной почерковедческой экспертизы.",
    "action": "Подали кассационную жалобу в Первый кассационный суд общей юрисдикции о нарушении принципа состязательности сторон.",
    "result": "Кассационный суд отменил обвинительный приговор и апелляционное определение, направив дело на новое рассмотрение."
  },
  {
    "title": "Замена реального срока на условное осуждение по ст. 73 УК РФ",
    "category": "Смягчение наказания",
    "problem": "Доверителю за экономическое преступление было назначено 3 года лишения свободы с отбыванием в колонии общего режима.",
    "action": "В апелляции доказали полное возмещение вреда, наличие тяжелого заболевания у супруги и отсутствие общественной опасности.",
    "result": "Суд апелляционной инстанции постановил считать назначенное наказание условным с испытательным сроком 3 года."
  }
];
  const processSteps: ProcessStep[] = [
  {
    "num": "01",
    "title": "Ознакомление с протоколом и материалами",
    "desc": "Изучаем приговор, протокол судебного заседания, аудиозаписи и вещественные доказательства в суде."
  },
  {
    "num": "02",
    "title": "Подача предварительной апелляционной жалобы",
    "desc": "Подаем краткую жалобу в 15-дневный срок для предотвращения вступления приговора в законную силу."
  },
  {
    "num": "03",
    "title": "Подготовка развернутой жалобы и дополнений",
    "desc": "Формулируем детальную правовую позицию со ссылками на листы томов дела, судебную практику ВС РФ и нарушения УПК."
  },
  {
    "num": "04",
    "title": "Защита в апелляционной или кассационной инстанции",
    "desc": "Лично выступаем в судебном заседании вышестоящего суда, обосновываем жалобу и заявляем новые ходатайства."
  }
];
  const pricingTiers: PricingTier[] = [
  {
    "title": "Аудит приговора и консультация",
    "subtitle": "Оценка перспектив отмены / смягчения",
    "price": "от 10 000 ₽",
    "popular": false,
    "features": [
      {
        "name": "детальный анализ текста приговора суда",
        "value": "Да"
      },
      {
        "name": "выявление процессуальных оснований для жалобы",
        "value": "Да"
      },
      {
        "name": "оценка вероятности изменения наказания",
        "value": "Да"
      }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form"
  },
  {
    "title": "Составление апелляционной / кассационной жалобы",
    "subtitle": "Подготовка мотивированного документа",
    "price": "от 30 000 ₽",
    "popular": true,
    "badgeText": "Востребовано",
    "features": [
      {
        "name": "изучение протоколов и материалов дела в суде",
        "value": "Да"
      },
      {
        "name": "составление развернутой жалобы со ссылками на нормы",
        "value": "Да"
      },
      {
        "name": "подготовка замечаний на протокол заседания",
        "value": "Да"
      },
      {
        "name": "направление жалобы в вышестоящий суд",
        "value": "Да"
      }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form"
  },
  {
    "title": "Ведение дела в апелляции / кассации под ключ",
    "subtitle": "Жалоба + личное участие в суде",
    "price": "от 50 000 ₽",
    "popular": false,
    "features": [
      {
        "name": "подготовка и подача полной жалобы и дополнений",
        "value": "Да"
      },
      {
        "name": "личное участие адвоката в судебном заседании",
        "value": "Да"
      },
      {
        "name": "подготовка речи в прениях вышестоящего суда",
        "value": "Да"
      },
      {
        "name": "контроль исполнения решения вышестоящего суда",
        "value": "Да"
      }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form"
  }
];
  const relatedServices = [
  {
    "title": "Условно-досрочное освобождение (УДО)",
    "desc": "Освобождение осужденных от отбывания наказания после вступления приговора в законную силу.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/uslovno-dosrochnoe-osvobozhdenie/"
  },
  {
    "title": "Адвокат по экономическим преступлениям",
    "desc": "Защита и обжалование приговоров по налогам, мошенничеству и растрате в бизнесе.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-ekonomicheskim-prestupleniyam/"
  },
  {
    "title": "Адвокат по делам о наркотиках (ст. 228)",
    "desc": "Обжалование суровых приговоров по делам о сбыте и хранении наркотических средств.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-delam-o-narkotikah/"
  }
];
  const faqItems = [
  {
    "q": "В какой срок можно подать апелляционную жалобу на приговор?",
    "a": "Апелляционная жалоба подается в течение 15 суток со дня провозглашения приговора, а осужденным, содержащимся под стражей, — в тот же срок со дня вручения ему копии приговора (ст. 389.4 УПК РФ). Пропущенный по уважительной причине срок может быть восстановлен судом."
  },
  {
    "q": "Может ли суд апелляционной инстанции ухудшить положение осужденного?",
    "a": "Суд апелляционной инстанции может ухудшить положение осужденного (увеличить срок или изменить статью на более тяжкую) ТОЛЬКО в том случае, если по этим основаниям подано апелляционное представление прокурора или жалоба потерпевшего. По жалобе защиты ухудшение исключено."
  },
  {
    "q": "Чем кассация отличается от апелляции?",
    "a": "Апелляция пересматривает не вступивший в силу приговор и заново оценивает фактические обстоятельства и доказательства. Кассация проверяет вступивший в законную силу приговор исключительно на предмет существенных нарушений норм материального и процессуального права."
  },
  {
    "q": "Можно ли приложить к апелляционной жалобе новые доказательства?",
    "a": "Да, дополнительные материалы могут быть представлены в суд апелляционной инстанции. Однако лицо, заявляющее ходатайство об их исследовании, обязано обосновать невозможность их представления в суд первой инстанции по уважительным причинам."
  }
];

  return (
    <div style={{ backgroundColor: 'var(--color-cream)', minHeight: '100vh' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main id="main-content">
        {/* 1. Хлебные крошки и Hero */}
        <MilitaryHero
          breadcrumbs={
            <nav aria-label="Хлебные крошки" style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginBottom: '16px' }}>
              <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Главная</Link>
              <span>/</span>
              <Link href="/grazhdanam/" style={{ color: 'inherit', textDecoration: 'none' }}>Гражданам</Link>
              <span>/</span>
              <Link href="/grazhdanam/advokat-po-ugolovnym-delam/" style={{ color: 'inherit', textDecoration: 'none' }}>Адвокат по уголовным делам</Link>
              <span>/</span>
              <span style={{ color: '#FFFFFF' }}>Обжалование приговора</span>
            </nav>
          }
          superTitle="Уголовный процесс • Апелляция и кассация"
          title={
            <span style={{ display: 'block' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                Обжалование приговора
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                по уголовному делу
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                в Липецке
              </span>
            </span>
          }
          subtitle="Профессиональное обжалование судебных решений в судах апелляционной и кассационной инстанций. Анализируем протоколы заседаний, находим существенные нарушения УПК РФ и добиваемся смягчения или отмены приговора. Связь в рабочее время: Пн–Пт с 09:00 до 18:00."
          primaryCtaText="Обсудить ситуацию"
          primaryCtaLink="#form"
          primaryCtaSubtext={
            <span style={{ display: 'block' }}>
              <span style={{ whiteSpace: 'nowrap' }}>Перезвоним вам в течение 15 минут в рабочее время</span>
            </span>
          }
          trustItems={[
            { text: 'Аудит материалов дела, протокола заседаний и текста приговора' },
            { text: 'Составление обоснованной апелляционной или кассационной жалобы' },
            { text: 'Защита в Липецком областном суде и Первом кассационном суде общей юрисдикции' }
          ]}
          imageUrl="/images/bobkin.jpg"
          imageName="Аркадий Евгеньевич Бобкин"
          imageSubtitle="Куратор практики • Директор, управляющий партнёр ЮК «Де-Юре», более 22 лет следственного опыта"
        />

        {/* 2. Ситуации и встроенный чек-лист */}
        <section className="section bg-white" style={{ padding: '80px 0', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container">
            <div style={{ textAlign: 'left', marginBottom: '40px', maxWidth: '820px' }}>
              <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--color-deep-blue)', marginBottom: '14px', marginTop: 0, lineHeight: 1.2 }}>
                <span style={{ display: "inline-block" }}>Когда требуется</span> <br />
                <span style={{ display: "inline-block" }}>обжалование приговора</span> <br />
                <span style={{ display: "inline-block" }}>в вышестоящих судах</span>
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Апелляционная инстанция повторно исследует доказательства, а кассация проверяет законность применения норм права.
              </p>
            </div>

            {/* Карточки ситуаций */}
            <div className="grid grid-2" style={{ gap: '24px', marginBottom: '36px' }}>
              {situations.map((sit, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'var(--color-cream)',
                    border: '1px solid var(--color-border)',
                    borderLeft: '4px solid var(--color-gold)',
                    padding: '28px 24px',
                    boxShadow: '0 4px 12px rgba(16, 39, 59, 0.03)'
                  }}
                >
                  <h3 style={{ fontSize: '19px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0', lineHeight: 1.35 }}>
                    {sit.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: '0 0 14px 0' }}>
                    {sit.desc}
                  </p>
                  <div style={{ fontSize: '13.5px', color: 'var(--color-primary)', fontWeight: 600, borderTop: '1px dashed rgba(23,55,94,0.15)', paddingTop: '10px' }}>
                    Позиция защиты: {sit.impact}
                  </div>
                </div>
              ))}
            </div>

            {/* Встроенная тёмно-синяя карточка чек-листа */}
            <div style={{
              backgroundColor: 'var(--color-deep-blue)',
              color: '#FFFFFF',
              borderTop: '3px solid var(--color-gold)',
              padding: '40px 36px',
              boxShadow: '0 10px 30px rgba(16, 39, 59, 0.15)',
              marginBottom: '32px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', paddingBottom: '16px', borderBottom: '1px solid rgba(255, 255, 255, 0.15)', marginBottom: '20px' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
                <div>
                  <h3 style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontFamily: 'var(--font-serif)', color: '#FFFFFF', margin: 0, lineHeight: 1.25 }}>
                    Что проверяет адвокат при аудите приговора
                  </h3>
                </div>
              </div>

              <p style={{ margin: '0 0 28px 0', fontSize: '15px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, maxWidth: '820px' }}>
                Ключевые основания для отмены или изменения судебного решения (ст. 389.15 УПК РФ):
              </p>

              <div className="grid grid-2" style={{ gap: '22px' }}>
                {checkpoints.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <polyline points="9 11 12 14 22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                    <div>
                      <strong style={{ display: 'block', fontSize: '15px', color: '#FFFFFF', marginBottom: '3px', lineHeight: 1.35 }}>
                        {item.title}
                      </strong>
                      <span style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.55 }}>
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <a href="#form" className="btn btn-primary" style={{ display: 'inline-block', padding: '14px 32px' }}>
                Получить консультацию
              </a>
            </div>
          </div>
        </section>

        {/* 3. Куратор и адвокаты */}
        <SpecialistBlock
          title={
            <>
              <span style={{ display: 'block' }}>Стратегию определяет специалист</span>{' '}
              <span style={{ display: 'block' }}>с 22-летним следственным опытом</span>
            </>
          }
          name="Бобкин Аркадий Евгеньевич"
          position={<>Директор, управляющий партнёр ЮК «Де-Юре»,<br />куратор практики уголовного права</>}
          imageUrl="/images/bobkin.jpg"
          imagePosition="50% -75px"
          profileHref="/specialisty/bobkin-arkadiy-evgenevich/"
          profileText="Подробнее об Аркадии Евгеньевиче Бобкине →"
          description={[
            <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block', lineHeight: 1.6 }}>
              Юрист с 1997 года. Более 22 лет работал в следственных подразделениях налоговой полиции и МВД, в том числе следователем по особо важным делам и руководителем Следственной части по расследованию организованной преступной деятельности. Анализирует материалы с учётом внутренней логики расследования, заранее выявляет процессуальные уязвимости следствия и определяет генеральную стратегию защиты.
            </span>,
            <ul key="2" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
                <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
                <span>Анализ материалов проверки и уголовного дела с позиции следственного опыта</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
                <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
                <span>Оценка уголовно-правовых и процессуальных рисков доверителя</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
                <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
                <span>Координация работы адвокатов и привлечённых судебных экспертов</span>
              </li>
            </ul>
          ]}
          buttonText="Обсудить ситуацию с куратором"
          buttonHref="#form"
        />

        {/* 4. Кейсы */}
        <CasesBlock
          title={
            <>
              <span style={{ display: 'block' }}>Примеры дел</span>{' '}
              <span style={{ display: 'block' }}>из практики защиты</span>
            </>
          }
          cases={casesData}
        />

        {/* 5. Процесс */}
        <ProcessBlock
          title={
            <>
              <span style={{ display: 'block' }}>Этапы юридической</span>{' '}
              <span style={{ display: 'block' }}>защиты по делу</span>
            </>
          }
          steps={processSteps}
        />

        {/* 6. Стоимость */}
        <PricingBlock
          title="Стоимость услуг адвоката"
          subtitle="Стоимость определяется категорией дела, стадией, объёмом материалов и срочностью. Точные условия и цена фиксируются в соглашении до начала работы."
          tiers={pricingTiers}
          disclaimer="Точная стоимость и состав работы закрепляются в соглашении. Дополнительные расходы на эксперта, специалиста, командировку, копирование материалов и иные действия заранее согласовываются отдельно, если они необходимы."
        />

        {/* 7. Смежные услуги (3 карточки + ссылка, БЕЗ баннера) */}
        <section className="section bg-white" style={{ padding: '80px 0', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container">
            <div style={{ textAlign: 'left', marginBottom: '40px', maxWidth: '820px' }}>
              <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--color-deep-blue)', marginBottom: '14px', marginTop: 0, lineHeight: 1.2 }}>
                <span style={{ display: "inline-block" }}>Смежные услуги</span> <br />
                <span style={{ display: "inline-block" }}>уголовно-правового</span> <br />
                <span style={{ display: "inline-block" }}>направления</span>
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Если задача выходит за рамки конкретного состава, подключаем другие услуги практики уголовного права.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '24px', marginBottom: '32px' }}>
              {relatedServices.map((srv, idx) => (
                <Link
                  key={idx}
                  href={srv.link}
                  style={{
                    backgroundColor: 'var(--color-cream)',
                    border: '1px solid var(--color-border)',
                    padding: '28px 24px',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 12px rgba(16, 39, 59, 0.03)'
                  }}
                  className="hover-card"
                >
                  <div>
                    <h3 style={{ fontSize: '19px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0', lineHeight: 1.35 }}>
                      {srv.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: '0 0 16px 0' }}>
                      {srv.desc}
                    </p>
                  </div>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    Подробнее →
                  </span>
                </Link>
              ))}
            </div>

            <div style={{ textAlign: 'center' }}>
              <Link
                href="/grazhdanam/advokat-po-ugolovnym-delam/"
                style={{ fontSize: '15px', fontWeight: 600, color: 'var(--color-primary)', textDecoration: 'none' }}
              >
                Смотреть все услуги практики уголовного права →
              </Link>
            </div>
          </div>
        </section>

        {/* 8. FAQ */}
        <FAQBlock
          superTitle="Частые вопросы"
          title={
            <>
              <span style={{ display: 'block' }}>Ответы на</span>{' '}
              <span style={{ display: 'block' }}>частые вопросы</span>
            </>
          }
          subtitle="О процессуальных правах, следственных действиях, доказательствах и рисках"
          faqs={faqItems}
        />

        {/* 9. Финальная форма */}
        <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px', padding: '80px 0' }}>
          <div className="container">
            <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                  <img
                    src="/images/bobkin.jpg"
                    alt="Аркадий Евгеньевич Бобкин"
                    style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--color-gold)' }}
                  />
                  <div>
                    <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 4px 0' }}>
                      Бобкин Аркадий Евгеньевич
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0 }}>
                      Директор, управляющий партнёр ЮК «Де-Юре» • 22 года следственного опыта
                    </p>
                  </div>
                </div>

                <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0 }}>
                  <span style={{ display: 'block' }}>Обсудите уголовное дело</span>{' '}
                  <span style={{ display: 'block' }}>с Аркадием Бобкиным</span>
                </h2>
                <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                  Кратко укажите, что происходит: проверка, вызов, задержание, следствие или суд. В рабочее время свяжемся с вами в течение 15 минут для правовой оценки.
                </p>

                <div style={{ marginTop: 'auto', backgroundColor: 'var(--color-cream)', padding: '20px', border: '1px solid var(--color-border)' }}>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-deep-blue)', marginBottom: '6px' }}>
                    Адрес офиса:
                  </div>
                  <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    Липецк, ул. Советская, д. 35, оф. 213 (приём по предварительной записи)
                  </div>
                </div>
              </div>

              <div>
                <ContactsForm
                  title=""
                  subtitle=""
                  buttonText="Отправить обращение"
                  hiddenFields={[{ name: 'page', value: '/grazhdanam/advokat-po-ugolovnym-delam/obzhalovanie-prigovora/' }]}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
