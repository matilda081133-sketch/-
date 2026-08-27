import Link from 'next/link';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';
import SpecialistBlock from '@/components/SpecialistBlock';
import ProcessBlock from '@/components/ProcessBlock';
import PricingBlock from '@/components/PricingBlock';
import CasesBlock from '@/components/CasesBlock';

export const metadata = {
  title: 'Признание безвестно отсутствующим и объявление умершим | Де-Юре',
  description: 'Помощь семье пропавшего военнослужащего в Липецке: проверка обстоятельств и сроков, подготовка заявления, сбор доказательств и представительство в суде.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/voennyj-yurist/priznanie-voennosluzhashchego-umershim/',
  },
  openGraph: {
    title: 'Признание безвестно отсутствующим и объявление умершим | Де-Юре',
    description: 'Помощь семье пропавшего военнослужащего в Липецке: проверка обстоятельств и сроков, подготовка заявления, сбор доказательств и представительство в суде.',
    url: 'https://dejure-help.ru/grazhdanam/voennyj-yurist/priznanie-voennosluzhashchego-umershim/',
    siteName: 'ЮК «Де-Юре»',
    images: [{ url: 'https://dejure-help.ru/images/konopkin.jpg', width: 1200, height: 630 }],
    locale: 'ru_RU',
    type: 'website'
  }
};

export default function PriznanieUmershimPage() {
  const faqs = [
    { q: 'Чем статус «пропал без вести» отличается от признания безвестно отсутствующим?', a: 'Сообщение воинской части или иной официальный документ фиксирует имеющиеся сведения о военнослужащем, но не заменяет судебное решение. Безвестно отсутствующим гражданина признаёт суд. Для обращения важно проверить формулировки документов, срок отсутствия сведений и юридическую цель заявителя.' },
    { q: 'Как понять, нужно признавать военнослужащего безвестно отсутствующим или объявлять умершим?', a: 'Это зависит не только от цели семьи, но и от обстоятельств исчезновения и доказательств. Безвестное отсутствие применяется при длительном отсутствии сведений. Для объявления умершим нужны предусмотренные законом основания: например, обстоятельства, угрожавшие смертью, либо ранее установленный статус безвестно отсутствующего и истечение специального срока. Процедуру выбирают после анализа документов.' },
    { q: 'Когда можно обращаться в суд?', a: 'Для участников СВО и других лиц, прямо указанных в специальном законе, действуют особые сроки. Признание безвестно отсутствующим возможно при отсутствии сведений в течение шести месяцев. Объявление умершим возможно после шести месяцев со дня обстоятельств, угрожавших смертью или позволявших предполагать гибель, либо по истечении трёх месяцев после вступления в силу решения о признании безвестно отсутствующим. Для других ситуаций могут действовать общие правила, поэтому срок нужно определять по статусу лица и основаниям заявления.' },
    { q: 'Нужно ли сначала обязательно признавать военнослужащего безвестно отсутствующим?', a: 'Нет. Предварительное признание безвестно отсутствующим — не обязательная ступень во всех делах. Если имеются предусмотренные законом обстоятельства, позволяющие предполагать гибель, вопрос об объявлении умершим может ставиться непосредственно. Если таких доказательств недостаточно, может быть обоснован другой маршрут.' },
    { q: 'В какой суд подаётся заявление?', a: 'По общему правилу заявление подаётся по месту жительства или месту нахождения заинтересованного лица. Однако при определении родовой подсудности нужно учитывать, потребуется ли суду исследовать сведения, составляющие государственную тайну: такие гражданские дела рассматриваются судом субъекта Российской Федерации как судом первой инстанции (например, Липецким областным судом). Поэтому конкретный суд определяется после анализа предмета заявления и необходимых доказательств.' },
    { q: 'Что делать, если воинская часть не отвечает или не выдаёт документы?', a: 'Нужно зафиксировать обращения и полученные ответы, определить надлежащего адресата и повторно запросить конкретные документы. При подготовке дела можно заявить ходатайство об истребовании сведений, которые заявитель не может получить самостоятельно. Суд при подготовке дела также выясняет, кто располагает сведениями, и направляет запросы в соответствующие организации, включая воинские части.' },
    { q: 'Обязательно ли иметь розыскное дело?', a: 'Само по себе отсутствие заведённого розыскного дела не исключает объявления гражданина умершим. Суд оценивает отсутствие сведений о месте пребывания и обстоятельства, угрожавшие смертью или позволявшие предполагать гибель. При этом конкретный набор доказательств определяется обстоятельствами дела.' },
    { q: 'Прекращается ли поиск после обращения в суд?', a: 'Обращение за установлением юридического статуса не является заявлением семьи о прекращении поиска и не подтверждает само по себе, что судьба человека достоверно известна. Если появляются новые сведения о месте пребывания, они должны учитываться судом и государственными органами.' },
    { q: 'Что меняется после решения суда?', a: 'Последствия зависят от установленного статуса. Признание безвестно отсутствующим позволяет решать отдельные вопросы управления имуществом и защиты прав заинтересованных лиц. Решение об объявлении умершим является основанием для государственной регистрации смерти и влечёт последствия, связанные со смертью гражданина. Конкретные дальнейшие действия — выплаты, наследство, семейные и имущественные вопросы — рассматриваются отдельно.' },
    { q: 'Что произойдёт, если военнослужащий вернётся или будет найден?', a: 'При явке гражданина или обнаружении его места пребывания суд новым решением отменяет ранее принятое решение о признании безвестно отсутствующим или объявлении умершим. Дальнейшие имущественные и иные последствия разрешаются по применимым нормам и обстоятельствам конкретного случая.' }
  ];

  const jsonLdGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://dejure-help.ru/#organization',
        name: 'Юридическая компания «Де-Юре»',
        url: 'https://dejure-help.ru/',
        logo: 'https://dejure-help.ru/images/logo.png',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Липецк',
          addressRegion: 'Липецкая область',
          addressCountry: 'RU'
        }
      },
      {
        '@type': 'LegalService',
        '@id': 'https://dejure-help.ru/grazhdanam/voennyj-yurist/priznanie-voennosluzhashchego-umershim/#service',
        name: 'Признание военнослужащего безвестно отсутствующим или объявление умершим',
        serviceType: 'Юридическая помощь по признанию военнослужащего безвестно отсутствующим или объявлению умершим',
        url: 'https://dejure-help.ru/grazhdanam/voennyj-yurist/priznanie-voennosluzhashchego-umershim/',
        description: 'Помощь семье пропавшего военнослужащего: разграничение процедур, сбор доказательств, истребование документов и судебная защита в Липецке.',
        provider: { '@id': 'https://dejure-help.ru/#organization' },
        areaServed: ['Липецк', 'Липецкая область', 'Россия']
      },
      {
        '@type': 'Person',
        '@id': 'https://dejure-help.ru/specialisty/konopkin-dmitriy-sergeevich/#person',
        name: 'Дмитрий Сергеевич Конопкин',
        jobTitle: 'Адвокат, председатель Коллегии адвокатов «Де-Юре», куратор направления «Военное право»',
        description: 'Реестровый номер 48/812 в реестре адвокатов Липецкой области. Специалист по защите прав военнослужащих и их семей.',
        image: 'https://dejure-help.ru/images/konopkin.jpg',
        url: 'https://dejure-help.ru/specialisty/konopkin-dmitriy-sergeevich/',
        worksFor: { '@id': 'https://dejure-help.ru/#organization' }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/grazhdanam/voennyj-yurist/priznanie-voennosluzhashchego-umershim/#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://dejure-help.ru/' },
          { '@type': 'ListItem', position: 2, name: 'Гражданам', item: 'https://dejure-help.ru/grazhdanam/' },
          { '@type': 'ListItem', position: 3, name: 'Военный юрист', item: 'https://dejure-help.ru/grazhdanam/voennyj-yurist/' },
          { '@type': 'ListItem', position: 4, name: 'Признание безвестно отсутствующим или объявление умершим', item: 'https://dejure-help.ru/grazhdanam/voennyj-yurist/priznanie-voennosluzhashchego-umershim/' }
        ]
      },
      {
        '@type': 'WebPage',
        '@id': 'https://dejure-help.ru/grazhdanam/voennyj-yurist/priznanie-voennosluzhashchego-umershim/#webpage',
        url: 'https://dejure-help.ru/grazhdanam/voennyj-yurist/priznanie-voennosluzhashchego-umershim/',
        name: 'Признание военнослужащего безвестно отсутствующим или объявление умершим — юрист в Липецке | Де-Юре',
        description: 'Помощь семье пропавшего военнослужащего: разграничение процедур, сбор доказательств, истребование документов и судебная защита в Липецке.',
        breadcrumb: { '@id': 'https://dejure-help.ru/grazhdanam/voennyj-yurist/priznanie-voennosluzhashchego-umershim/#breadcrumb' },
        mainEntity: { '@id': 'https://dejure-help.ru/grazhdanam/voennyj-yurist/priznanie-voennosluzhashchego-umershim/#service' }
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/grazhdanam/voennyj-yurist/priznanie-voennosluzhashchego-umershim/#faq',
        mainEntity: faqs.map(faq => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a }
        }))
      }
    ]
  };

  const situations = [
    { tag: 'Ситуация 1', title: 'Военнослужащий числится пропавшим без вести', desc: 'Есть извещение, выписка или устная информация от части, но дальнейших достоверных сведений о месте пребывания нет.' },
    { tag: 'Ситуация 2', title: 'Воинская часть не выдаёт документы', desc: 'Ответы не поступают, содержат неполные сведения либо семья не понимает, какую справку нужно получить для суда.' },
    { tag: 'Ситуация 3', title: 'Семье нужно защитить права при сохраняющейся неопределённости', desc: 'Требуется решить имущественный, семейный или социальный вопрос, но объявлять человека умершим оснований пока нет.' },
    { tag: 'Ситуация 4', title: 'Обстоятельства позволяют предполагать гибель', desc: 'Имеются сведения об опасных обстоятельствах исчезновения, однако государственная регистрация смерти не произведена.' },
    { tag: 'Ситуация 5', title: 'Военнослужащий уже признан безвестно отсутствующим', desc: 'После вступления решения в силу сведений о месте пребывания не появилось, и требуется оценить основания для следующего обращения в суд.' },
    { tag: 'Ситуация 6', title: 'Дело уже начато другим заинтересованным лицом', desc: 'Нужно понять последствия заявленного требования, представить позицию семьи и проверить доказательства, на которых оно основано.' }
  ];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />
      <Header />
      
      {/* ═══ 1. ПЕРВЫЙ ЭКРАН (MILITARY HERO) ═══ */}
      <MilitaryHero 
        breadcrumbs={
          <>
            <a href="/" style={{ color: 'var(--color-primary)' }}>Главная</a> <span style={{ margin: '0 8px' }}>/</span> 
            <a href="/grazhdanam/" style={{ color: 'var(--color-primary)' }}>Гражданам</a> <span style={{ margin: '0 8px' }}>/</span> 
            <a href="/grazhdanam/voennyj-yurist/" style={{ color: 'var(--color-primary)' }}>Военный юрист</a> <span style={{ margin: '0 8px' }}>/</span> 
            <span style={{ color: 'var(--color-text-main)' }}>Признание безвестно отсутствующим или объявление умершим</span>
          </>
        }
        superTitle="Военное право • помощь семье пропавшего военнослужащего"
        title={<><span style={{ display: 'inline-block' }}>Признание военнослужащего</span> <br /><span style={{ display: 'inline-block' }}>безвестно отсутствующим</span> <br /><span style={{ display: 'inline-block' }}>или объявление умершим</span></>}
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '580px', textWrap: 'balance' }}>
            <span style={{ display: 'inline-block' }}>Проверим официальный статус и документы,</span> <br />
            <span style={{ display: 'inline-block' }}>объясним различия между двумя судебными процедурами,</span> <br />
            <span style={{ display: 'inline-block' }}>подготовим доказательства и представим интересы семьи в суде.</span>
          </span>
        }
        primaryCtaText="Обсудить ситуацию"
        primaryCtaLink="#form"
        primaryCtaSubtext="Перезвоним вам в течение 15 минут в рабочее время"
        imageUrl="/images/konopkin.jpg"
        imageName="Дмитрий Сергеевич Конопкин"
        imageSubtitle="Адвокат, председатель Коллегии адвокатов «Де-Юре», куратор направления «Военное право»"
        imageMarginTop="20px"
        trustItems={[
          { text: <><span style={{ display: 'inline-block' }}>Определяем подходящий</span> <span style={{ display: 'inline-block' }}>юридический статус</span></> },
          { text: <><span style={{ display: 'inline-block' }}>Собираем доказательства</span> <span style={{ display: 'inline-block' }}>и направляем запросы</span></> },
          { text: <><span style={{ display: 'inline-block' }}>Представляем интересы семьи</span> <span style={{ display: 'inline-block' }}>в судебном процессе</span></> }
        ]}
      />

      {/* ═══ 2. С КАКОЙ СИТУАЦИЕЙ ОБРАЩАЮТСЯ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '700px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              <span style={{ display: 'inline-block' }}>С какой ситуацией</span> <br /><span style={{ display: 'inline-block' }}>обращаются</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Поможем разобрать Вашу ситуацию, проверить имеющиеся извещения и выстроить<br />
              правовую позицию для обращения в компетентный суд.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {situations.map((sit, i) => (
              <div key={i} className="hover-lift" style={{ 
                padding: '36px 30px', 
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)', 
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-primary)',
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
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
        </div>
      </section>

      {/* ═══ 3. КАКОЙ СУДЕБНЫЙ СТАТУС ТРЕБУЕТСЯ ═══ */}
      <section className="section bg-cream" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(32px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0 }}>
              <span style={{ display: 'inline-block' }}>Какой судебный статус требуется</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Формулировка «пропал без вести» описывает фактическую ситуацию или служебный статус,<br />
              но сама по себе не заменяет решение суда. Признание безвестно отсутствующим<br />
              и объявление умершим имеют разные основания и последствия.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '28px', marginBottom: '32px' }}>
            {/* Card 1 */}
            <div style={{ 
              background: 'linear-gradient(145deg, #0B1C2A 0%, #17375E 100%)', 
              padding: '40px', 
              borderRadius: '0', 
              color: 'var(--color-white)', 
              display: 'flex', 
              flexDirection: 'column', 
              height: '100%', 
              position: 'relative', 
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(23, 50, 77, 0.15)'
            }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px', position: 'relative', zIndex: 1 }}>
                Первый маршрут
              </div>
              <h3 style={{ fontSize: '24px', color: '#D2B282', marginBottom: '20px', fontFamily: 'var(--font-serif)', position: 'relative', zIndex: 1 }}>
                Признание<br />безвестно отсутствующим
              </h3>
              <p style={{ fontSize: '16px', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)', marginBottom: '24px', position: 'relative', zIndex: 1 }}>
                Подходит, когда длительное время нет сведений о месте пребывания, но обстоятельства не дают достаточных оснований считать гибель установленной.
              </p>
              <div style={{ background: 'rgba(255,255,255,0.1)', padding: '16px 20px', borderLeft: '4px solid var(--color-gold)', fontSize: '14px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5, marginTop: 'auto', position: 'relative', zIndex: 1 }}>
                Такой статус позволяет защищать права семьи и имущество пропавшего без юридического признания смерти.
              </div>
            </div>

            {/* Card 2 */}
            <div style={{ 
              background: 'linear-gradient(145deg, #0B1C2A 0%, #17375E 100%)', 
              padding: '40px', 
              borderRadius: '0', 
              color: 'var(--color-white)', 
              display: 'flex', 
              flexDirection: 'column', 
              height: '100%', 
              position: 'relative', 
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(23, 50, 77, 0.15)'
            }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px', position: 'relative', zIndex: 1 }}>
                Второй маршрут
              </div>
              <h3 style={{ fontSize: '24px', color: '#D2B282', marginBottom: '20px', fontFamily: 'var(--font-serif)', position: 'relative', zIndex: 1 }}>
                Объявление умершим
              </h3>
              <p style={{ fontSize: '16px', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)', marginBottom: '24px', position: 'relative', zIndex: 1 }}>
                Рассматривается, когда документы и обстоятельства позволяют предполагать гибель либо когда после признания безвестно отсутствующим прошёл предусмотренный законом период и сведений о человеке не появилось.
              </p>
              <div style={{ background: 'rgba(255,255,255,0.1)', padding: '16px 20px', borderLeft: '4px solid var(--color-gold)', fontSize: '14px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5, marginTop: 'auto', position: 'relative', zIndex: 1 }}>
                Решение влечёт последствия, связанные со смертью, поэтому доказательства и цель обращения нужно оценить особенно внимательно.
              </div>
            </div>
          </div>

          <div style={{ 
            background: 'var(--color-white)', 
            padding: '16px 24px', 
            border: '1px solid var(--color-border)',
            color: 'var(--color-text-secondary)',
            fontSize: '14px',
            margin: '32px 0',
            borderLeft: '4px solid var(--color-primary)',
            maxWidth: '800px',
            fontStyle: 'italic'
          }}>
            <strong style={{ fontStyle: 'normal', color: 'var(--color-deep-blue)' }}>Не нужно заранее выбирать процедуру.</strong> Сначала проверяем, какой статус подтверждается документами, какие последствия он создаст и какой суд компетентен рассматривать дело.
          </div>

          {/* ═══ ПРОМЕЖУТОЧНЫЙ CTA CARD ═══ */}
          <div 
            className="card service-card cta-banner-card" 
            style={{ 
              width: '100%', 
              padding: '36px 40px', 
              background: 'var(--color-deep-blue)', 
              borderRadius: '0',
              display: 'flex', 
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '32px',
              flexWrap: 'wrap',
              borderTop: '3px solid var(--color-gold)',
              boxShadow: '0 12px 36px rgba(11, 28, 42, 0.22)'
            }}
          >
            <div style={{ flex: '1 1 500px' }}>
              <h3 style={{ margin: '0 0 12px 0', fontSize: '22px', fontFamily: 'var(--font-serif)', color: 'var(--color-white)', lineHeight: 1.3 }}>
                Не знаете, какая процедура подходит вашей семье?
              </h3>
              <p style={{ margin: '0', fontSize: '15px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, maxWidth: '780px' }}>
                Расскажите, когда пропал военнослужащий, какой официальный статус указан в документах и какие ответы уже получены. Дмитрий Сергеевич Конопкин проверит материалы и определит, что необходимо сделать в первую очередь.
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <a href="#form" className="btn white-btn-custom" style={{ padding: '14px 32px', fontSize: '15px', display: 'inline-block' }}>
                Проверить основания
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 4. БЛОК КУРАТОРА НАПРАВЛЕНИЯ ═══ */}
      <SpecialistBlock 
        title="Куратор направления"
        name="Дмитрий Сергеевич Конопкин"
        position={<>Адвокат, председатель Коллегии адвокатов «Де-Юре»,<br />куратор направления «Военное право»</>}
        imageUrl="/images/konopkin.jpg"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Дмитрий Сергеевич Конопкин курирует судебные процессы по установлению юридического статуса военнослужащих. Он помогает правильно квалифицировать ситуацию, составить запросы в ведомства и сформировать убедительную доказательную базу для обращения в суд.
          </span>,
          <ul key="2" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', background: 'var(--color-gold)', borderRadius: '50%' }}></div>
              Адвокат, реестровый номер 48/812 в реестре адвокатов Липецкой области
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', background: 'var(--color-gold)', borderRadius: '50%' }}></div>
              С 2016 по 2022 год работал в СК РФ; прошёл путь до старшего следователя по особо важным делам
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', background: 'var(--color-gold)', borderRadius: '50%' }}></div>
              Специализируется на сложных судебных делах с участием государственных и силовых органов
            </li>
          </ul>,
          <a key="3" href="/specialisty/konopkin-dmitriy-sergeevich/" style={{ display: 'inline-block', marginTop: '16px', fontSize: '14px', color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
            Подробнее о Дмитрии Сергеевиче Конопкине →
          </a>
        ]}
        buttonText="Обсудить ситуацию с адвокатом"
        buttonHref="#form"
      />

      {/* ═══ ДОКУМЕНТЫ ДЛЯ ОБРАЩЕНИЯ В СУД ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Какие документы нужны <br />для обращения в суд
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Состав документов зависит от выбранной процедуры. Если части документов нет, адвокат запросит их до или во время процесса.
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
                <span style={{ display: 'inline-block' }}>Официальные извещения</span> <br />
                <span style={{ display: 'inline-block' }}>и ответы ведомств</span>
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Извещение о статусе пропавшего</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Справки или извещения из воинской части, военкомата или МО РФ с датой и местом последнего контакта.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Ответы государственных органов</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Письменные ответы военной прокуратуры, СК РФ, Красного Креста и аппарата уполномоченного.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Карточка 2 */}
            <div style={{
              background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-gold)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0, paddingBottom: '12px', borderBottom: '1px solid rgba(23, 50, 77, 0.1)' }}>
                <span style={{ display: 'inline-block' }}>Документы о родстве</span> <br />
                <span style={{ display: 'inline-block' }}>и материальной зависимости</span>
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Документы, подтверждающие родство</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Свидетельства о рождении, браке, установлении отцовства или судебные решения.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Доказательства юридической цели</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Документы на имущество, банковские счета, договоры и выписки, подтверждающие необходимость признания статуса.</span>
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
            Если часть документов отсутствует, не откладывайте обращение. Адвокат сформирует официальные запросы и заявит ходатайство об истребовании материалов суд.
          </div>
        </div>
      </section>

      {/* ═══ 5. ПРИМЕРЫ ИЗ ПРАКТИКИ ═══ */}
      <CasesBlock 
        title="Примеры из практики"
        showDemoWarning={true}
        cases={[
          {
            category: 'ПРИЗНАНИЕ БЕЗВЕСТНО ОТСУТСТВУЮЩИМ',
            title: 'Признание военнослужащего безвестно отсутствующим через суд',
            problem: 'Военнослужащий пропал в зоне боевых действий. Извещение от воинской части подтверждало отсутствие сведений, но не заменяло судебное решение. Семье требовалось официально установить статус военнослужащего, чтобы решить вопрос управления его имуществом.',
            action: 'Изучили имеющиеся извещения и ответы ведомств, направили адвокатские запросы для укомплектования материалов и подготовили заявление в суд. В процессе обосновали наличие оснований для признания военнослужащего безвестно отсутствующим.',
            result: 'Суд удовлетворил заявление и признал военнослужащего безвестно отсутствующим. Решение вступило в законную силу.',
            isDemo: true
          },
          {
            category: 'ОБЪЯВЛЕНИЕ УМЕРШИМ',
            title: 'Объявление военнослужащего умершим при наличии сведений о гибели',
            problem: 'Сведения и материалы дела указывали, что военнослужащий пропал без вести при обстоятельствах, угрожавших смертью. Государственная регистрация смерти не была произведена, из-за чего семья не могла реализовать свои права.',
            action: 'Собрали доказательственную базу, подтверждающую обстоятельства исчезновения, определили подсудность дела, подготовили заявление и заявили необходимые ходатайства об истребовании сведений. Представляли интересы семьи во всех судебных заседаниях.',
            result: 'Суд оценил совокупность доказательств и вынес решение об объявлении военнослужащего умершим.',
            isDemo: true
          },
          {
            category: 'СМЕНА СТАТУСА',
            title: 'Объявление военнослужащего умершим после признания безвестно отсутствующим',
            problem: 'Ранее военнослужащий был признан безвестно отсутствующим. По истечении установленного законом периода сведений о месте его пребывания так и не появилось.',
            action: 'Проверили применимые сроки, подготовили заявление об объявлении гражданина умершим, собрали подтверждения того, что новые сведения о месте пребывания не поступали, и провели процесс в суде.',
            result: 'Суд объявил военнослужащего умершим. Решение суда стало основанием для государственной регистрации смерти.',
            isDemo: true
          }
        ]}
      />

      {/* ═══ 6. КАК ПРОХОДИТ РАБОТА ═══ */}
      <ProcessBlock 
        title="Как проходит работа"
        subtitle=""
        steps={[
          { num: '01', title: 'Разбираем ситуацию', desc: 'Уточняем, когда и при каких обстоятельствах пропал военнослужащий, какой статус указан в документах и для защиты какого права требуется судебное решение.' },
          { num: '02', title: 'Проверяем документы', desc: 'Изучаем извещения, справки, ответы воинской части и государственных органов. Определяем, какие документы можно запросить до суда и какие сведения потребуется истребовать в процессе.' },
          { num: '03', title: 'Выбираем процедуру', desc: 'Разграничиваем признание безвестно отсутствующим, объявление умершим и иные возможные процедуры. Проверяем сроки и подсудность.' },
          { num: '04', title: 'Готовим заявление', desc: 'Формируем доказательственную позицию, указываем юридическую цель обращения, подаём заявление и представляем интересы доверителя в суде.' },
          { num: '05', title: 'Получаем решение', desc: 'Контролируем вступление решения в законную силу, объясняем порядок его использования и помогаем с дальнейшими шагами.' },
          { isBanner: true, title: 'Дистанционный формат', desc: 'Начать работу можно дистанционно: провести консультацию, проверить документы и подготовить обращения. Формат участия в суде определяется отдельно.' }
        ]}
      />

      {/* ═══ 7. СТОИМОСТЬ ═══ */}
      <PricingBlock 
        title="Стоимость юридической помощи"
        subtitle="Точная стоимость зависит от выбранной процедуры, объёма отсутствующих документов, подсудности и сложности доказательственной базы."
        tiers={[
          {
            title: <><span style={{ display: 'inline-block' }}>Первичный</span> <br /><span style={{ display: 'inline-block' }}>анализ</span></>,
            subtitle: <>Проверка имеющегося комплекта<br />и выбор процедуры</>,
            features: [
              { name: 'Правовой анализ извещений и ответов', value: '✓' },
              { name: 'Определение подсудности и применимого срока', value: '✓' },
              { name: 'Формирование стратегии для суда', value: '✓' }
            ],
            buttonText: 'Запросить расчет',
            buttonHref: '#form',
            popular: false
          },
          {
            title: <><span style={{ display: 'inline-block' }}>Подготовка</span> <br /><span style={{ display: 'inline-block' }}>документов</span></>,
            subtitle: <>Формирование доказательств<br />и заявления в суд</>,
            badgeText: 'ВОСТРЕБОВАНО',
            features: [
              { name: 'Составление адвокатских запросов', value: '✓' },
              { name: 'Подготовка заявления в компетентный суд', value: '✓' },
              { name: 'Формирование комплекта приложений и ходатайств', value: '✓' }
            ],
            buttonText: 'Обсудить объём',
            buttonHref: '#form',
            popular: true
          },
          {
            title: <><span style={{ display: 'inline-block' }}>Судебное</span> <br /><span style={{ display: 'inline-block' }}>представительство</span></>,
            subtitle: 'Полное ведение дела в суде до решения',
            features: [
              { name: 'Участие адвоката в судебных заседаниях', value: '✓' },
              { name: 'Истребование сведений через суд', value: '✓' },
              { name: 'Получение решения суда с отметкой о вступлении', value: '✓' }
            ],
            buttonText: 'Начать процедуру',
            buttonHref: '#form',
            popular: false
          }
        ]}
      />

      {/* ═══ 8. ЧАСТЫЕ ВОПРОСЫ ═══ */}
      <FAQBlock 
        faqs={faqs} 
        title={<><span style={{ display: 'inline-block' }}>Частые вопросы</span> <br /><span style={{ display: 'inline-block' }}>о признании военнослужащего</span> <br /><span style={{ display: 'inline-block' }}>безвестно отсутствующим</span> <br /><span style={{ display: 'inline-block' }}>или объявлении умершим</span></>}
        subtitle="Ответы на популярные вопросы. Информация носит общий характер. Возможный порядок действий зависит от обстоятельств и документов."
        ctaText="Задать свой вопрос"
        ctaLink="#form"
      />

      {/* ═══ 9. СВЯЗАННЫЕ УСЛУГИ ═══ */}
            {/* ═══ БЛОК: СВЯЗАННЫЕ УСЛУГИ ═══ */}
      <section className="section bg-cream" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '700px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Связанная услуга
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              <span style={{ display: 'inline-block' }}>Смежная услуга при вопросах,</span> <br /><span style={{ display: 'inline-block' }}>связанных с оформлением выплат</span> <br /><span style={{ display: 'inline-block' }}>и защитой прав семьи военнослужащего.</span>
            </p>
          </div>

          <style dangerouslySetInnerHTML={{ __html: `
            .related-service-card {
              border-top: 3px solid var(--color-primary) !important;
            }
            .related-service-card:hover {
              border-top: 3px solid var(--color-primary) !important;
            }
            .related-service-card:hover .card-arrow {
              color: var(--color-gold) !important;
            }
            .related-service-card:hover .card-arrow svg {
              stroke: var(--color-gold) !important;
            }
            .all-services-link:hover {
              color: var(--color-gold) !important;
            }
          `}} />
          
          <div style={{ maxWidth: '560px' }}>
            <Link href="/grazhdanam/voennyj-yurist/vyplaty-seme-pogibshego-voennosluzhashchego/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <div 
                className="card related-service-card" 
                style={{ 
                  height: '100%', 
                  minHeight: '140px',
                  padding: '32px', 
                  background: 'var(--color-white)', 
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  borderRadius: '0',
                  display: 'flex', 
                  flexDirection: 'column', 
                  transition: 'all 0.3s',
                  position: 'relative'
                }}
              >
                <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                  <span style={{ display: 'inline-block' }}>Выплаты семье погибшего</span> <br /><span style={{ display: 'inline-block' }}>военнослужащего</span>
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Комплексная помощь в оформлении президентских, страховых и региональных выплат членам семьи после вступления решения суда в законную силу.
                </p>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '15px', fontWeight: 600, transition: 'transform 0.3s' }}>
                  Подробнее 
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </Link>
          </div>

          <div style={{ marginTop: '32px' }}>
            <Link href="/grazhdanam/voennyj-yurist/" className="all-services-link" style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '16px', textDecoration: 'underline', textUnderlineOffset: '4px', display: 'inline-flex', alignItems: 'center', gap: '6px', transition: 'color 0.2s ease' }}>
              Смотреть все услуги военного юриста →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 10. ФОРМА ОБРАЩЕНИЯ ═══ */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start', paddingTop: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>
                  Связаться с нами
                </span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0 }}>
                Нужно определить юридический статус пропавшего военнослужащего?
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px' }}>
                Кратко опишите, когда пропал военнослужащий,<br />
                какой статус указан в документах и какие ответы<br />
                уже получены. Для первичного разговора не<br />
                требуется полный комплект документов.
              </p>

              <div style={{ marginTop: '32px' }}>
                <div style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <span>
                    Перезвоним вам в течение<br />
                    15 минут в рабочее время
                  </span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
              <div style={{ background: 'var(--gradient-cream)', padding: '40px', borderRadius: '0', boxShadow: '0 8px 24px rgba(0,0,0,0.15)', width: '100%', border: '1px solid rgba(0,0,0,0.06)' }}>
                <ContactsForm title="Написать нам" subtitle="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
