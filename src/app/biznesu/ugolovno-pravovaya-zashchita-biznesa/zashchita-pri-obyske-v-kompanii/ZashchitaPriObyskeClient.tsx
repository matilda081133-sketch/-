'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MilitaryHero from '@/components/MilitaryHero';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import ProcessBlock from '@/components/ProcessBlock';
import CasesBlock, { CaseData } from '@/components/CasesBlock';
import SpecialistBlock from '@/components/SpecialistBlock';
import PricingBlock, { PricingTier } from '@/components/PricingBlock';

export default function ZashchitaPriObyskeClient() {
  const obyskSituations = [
    {
      tag: 'Следственное действие',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Обыск в офисе, на складе</span> <br />
          <span style={{ display: 'inline-block' }}>или производстве</span>
        </span>
      ),
      desc: 'Правоохранительные органы прибыли с постановлением суда или следователя. Контролируем законность входа, соблюдение границ и фиксацию действий.',
      btnText: 'Срочный адвокат'
    },
    {
      tag: 'Изъятие документов',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Выемка финансовой</span> <br />
          <span style={{ display: 'inline-block' }}>и бухгалтерской документации</span>
        </span>
      ),
      desc: 'Истребование конкретных договоров, накладных или журналов учета. Следим за составлением подробной описи каждого тома и листа.',
      btnText: 'Контроль выемки'
    },
    {
      tag: 'Изъятие IT-инфраструктуры',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Изъятие серверов, ПК</span> <br />
          <span style={{ display: 'inline-block' }}>и электронных носителей</span>
        </span>
      ),
      desc: 'Изымают системные блоки, флеш-накопители и телефоны. Заявляем ходатайства о копировании данных (ст. 164.1 УПК РФ) для продолжения бизнеса.',
      btnText: 'Защита данных'
    },
    {
      tag: 'Давление на персонал',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Опрос и разделение</span> <br />
          <span style={{ display: 'inline-block' }}>сотрудников по кабинетам</span>
        </span>
      ),
      desc: 'Попытки силовиков отобрать объяснения или допросить испуганных работников прямо во время обыска. Разъясняем ст. 51 Конституции РФ.',
      btnText: 'Защитить штат'
    },
    {
      tag: 'Проверка контрагента',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Обыск по делу</span> <br />
          <span style={{ display: 'inline-block' }}>сторонней организации</span>
        </span>
      ),
      desc: 'Силовики пришли к добросовестному поставщику или подрядчику по делу сомнительного партнера. Предотвращаем необоснованное изъятие активов.',
      btnText: 'Защитить компанию'
    },
    {
      tag: 'После мероприятия',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Обыск завершился,</span> <br />
          <span style={{ display: 'inline-block' }}>имущество изъято</span>
        </span>
      ),
      desc: 'Анализируем копию протокола, выявляем процессуальные нарушения, готовим жалобы по ст. 124–125 УПК РФ и ходатайства о возврате техники.',
      btnText: 'Вернуть изъятое'
    },
    {
      tag: 'Угроза остановки',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Изъятие ЭЦП и банк-клиента</span> <br />
          <span style={{ display: 'inline-block' }}>— паралич платежей</span>
        </span>
      ),
      desc: 'Блокировка возможности выплатить зарплату и оплатить налоги. Добиваемся возврата токенов или оперативного перевыпуска сертификатов.',
      btnText: 'Восстановить платежи'
    },
    {
      tag: 'Уголовное дело',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Обыск по ст. 159, 199, 201</span> <br />
          <span style={{ display: 'inline-block' }}>Уголовного кодекса РФ</span>
        </span>
      ),
      desc: 'Мероприятие является частью масштабного расследования экономических или налоговых преступлений. Выстраиваем общую линию защиты.',
      btnText: 'Комплексная защита'
    }
  ];

  const urgentRisks = [
    {
      title: 'Запрос документов или вызов на опрос с коротким сроком',
      desc: 'Передача неполных или избыточных документов без правового анализа, а также спонтанные объяснения сотрудников создают основу для обвинения, которую сложно изменить в суде.'
    },
    {
      title: 'Обыск, выемка техники или изъятие серверов',
      desc: 'Изъятие ключевых носителей и первичных документов парализует работу организации. Без контроля специалиста протоколы подписываются с опасными процессуальными неточностями.'
    },
    {
      title: 'Передача акта налоговой проверки в следственные органы',
      desc: 'Срок реакции ограничен: по истечении 75 дней после требования об уплате материалы передаются в СК РФ. Необходимы согласованные действия налоговых юристов и уголовных адвокатов.'
    }
  ];

  const lawyerCheckpoints = [
    {
      num: '01',
      title: 'Проверка постановления и процессуальных полномочий',
      desc: 'Устанавливаем законность оснований: наличие судебного решения или постановления следователя в случаях, не терпящих отлагательства.'
    },
    {
      num: '02',
      title: 'Контроль состава участников и понятых',
      desc: 'Проверяем статус понятых (исключаем стажеров и заинтересованных лиц), требуем обязательного присутствия представителя юридического лица.'
    },
    {
      num: '03',
      title: 'Индивидуализация и опечатывание изымаемого',
      desc: 'Предотвращаем изъятие документов и предметов «пакетами и мешками» без подробной описи. Фиксируем серийные номера всей изымаемой техники.'
    },
    {
      num: '04',
      title: 'Реализация права на копирование информации',
      desc: 'Настаиваем на применении гарантий ч. 2.1 ст. 166 и ст. 164.1 УПК РФ: копирование бухгалтерских баз данных для сохранения жизнедеятельности компании.'
    },
    {
      num: '05',
      title: 'Внесение замечаний в протокол следственного действия',
      desc: 'Фиксируем в протоколе все допущенные силовиками нарушения: недопуск защитника, отказ в копировании файлов, грубость и порчу имущества.'
    },
    {
      num: '06',
      title: 'Получение копии протокола и описи изъятого',
      desc: 'В силу закона копия протокола обыска обязательно вручается представителю компании. Проверяем идентичность выданной копии оригиналу.'
    }
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Экстренный звонок адвокату',
      desc: 'Принимаем вызов, даем первичные инструкции координатору по телефону и незамедлительно направляем адвоката по адресу компании.'
    },
    {
      num: '02',
      title: 'Вступление адвоката в следственное действие',
      desc: 'Адвокат предъявляет ордер, знакомится с постановлением об обыске и пресекает психологическое давление на руководство и сотрудников.'
    },
    {
      num: '03',
      title: 'Очное сопровождение поиска и изъятия',
      desc: 'Контролируем перемещение оперативной группы по кабинетам, исключаем подбросы, добиваемся точной детальной описи изымаемых носителей.'
    },
    {
      num: '04',
      title: 'Подписание протокола с процессуальными замечаниями',
      desc: 'Вносим юридически выверенные формулировки нарушений в протокол обыска перед его подписанием, получаем официальную заверенную копию.'
    },
    {
      num: '05',
      title: 'Обжалование нарушений и возврат имущества',
      desc: 'Подаем жалобы прокурору и в суд по ст. 125 УПК РФ на незаконные действия следствия, ходатайствуем о возврате изъятых компьютеров и серверов.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Экстренная консультация и сопровождение',
      subtitle: 'Удаленный юридический контроль',
      popular: false,
      price: 'от 15 000 ₽',
      features: [
        { name: 'Срочный анализ постановления об обыске/выемке', value: 'Включено' },
        { name: 'Прямой телефонный инструктаж координатора на месте', value: 'Включено' },
        { name: 'Дистанционный контроль формулировок протокола', value: 'Включено' },
        { name: 'План действий руководства на первые сутки', value: 'Включено' }
      ],
      buttonText: 'Срочный звонок',
      buttonHref: 'tel:+74742201525'
    },
    {
      title: 'Очный выезд адвоката на обыск',
      subtitle: 'Личное участие защитника в офисе',
      popular: true,
      badgeText: 'Ключевая помощь',
      price: 'от 60 000 ₽',
      features: [
        { name: 'Немедленный выезд адвоката по адресу организации', value: 'Включено' },
        { name: 'Очный контроль действий следователя, оперов и понятых', value: 'Включено' },
        { name: 'Защита от незаконного изъятия критичной техники', value: 'Включено' },
        { name: 'Внесение нарушений в протокол и получение копии', value: 'Включено' }
      ],
      buttonText: 'Вызвать адвоката',
      buttonHref: '#form'
    },
    {
      title: 'Обжалование и возврат имущества',
      subtitle: 'Работа с последствиями обыска',
      popular: false,
      price: 'от 45 000 ₽',
      features: [
        { name: 'Правовой анализ протокола и описи изъятых вещей', value: 'Включено' },
        { name: 'Подача жалоб в суд и прокуратуру по ст. 124–125 УПК РФ', value: 'Включено' },
        { name: 'Ходатайства о признании доказательств недопустимыми', value: 'Включено' },
        { name: 'Процессуальный возврат изъятых серверов и документов', value: 'Включено' }
      ],
      buttonText: 'Вернуть имущество',
      buttonHref: '#form'
    }
  ];

  const practiceCases: CaseData[] = [
    {
      category: 'Сохранение IT-инфраструктуры',
      title: 'Предотвращение изъятия главного сервера агрохолдинга при обыске',
      problem: 'Следователь с сотрудниками ОЭБиПК прибыл в головной офис с целью изъятия всей серверной стойки, что привело бы к остановке элеватора и отгрузки зерна.',
      action: 'Прибывший адвокат заявил мотивированное ходатайство о применении ст. 164.1 УПК РФ. В присутствии специалиста организовали зеркальное копирование баз 1С на внешние жесткие диски следствия.',
      result: 'Серверное оборудование осталось на предприятии, производство не остановилось ни на час. Процессуальные права компании полностью соблюдены.'
    },
    {
      category: 'Признание обыска незаконным',
      title: 'Отмена результатов обыска в офисе логистической компании по ст. 125 УПК РФ',
      problem: 'Следователь провел обыск в офисе предприятия в порядке «не терпящем отлагательства» без судебного решения, изъяв финансовую документацию за 5 лет.',
      action: 'В протоколе адвокат зафиксировал отсутствие оснований безотлагательности и недопуск понятых в смежные кабинеты. Направили жалобу в районный суд Липецка.',
      result: 'Суд признал производство обыска незаконным. Все изъятые финансовые документы возвращены организации, следствию запрещено использовать их как доказательства.'
    },
    {
      category: 'Возврат техники',
      title: 'Возврат 14 рабочих компьютеров проектного бюро в течение 10 дней',
      problem: 'После выемки в рамках уголовного дела о налоговой неуплате проектный институт лишился компьютеров проектировщиков со специализированным ПО.',
      action: 'Подали ходатайство следователю с подтверждением статуса орудий труда и отсутствия на жестких дисках финансово-хозяйственных документов по спорному контрагенту.',
      result: 'Следователь осмотрел технику в приоритетном порядке и вернул все 14 рабочих станций руководству под сохранную расписку.'
    }
  ];

  const faqs = [
    {
      q: 'Обязан ли следователь ждать прибытия адвоката перед началом обыска?',
      a: 'Закон не содержит прямой обязанности следователя приостанавливать обыск до приезда адвоката. Однако присутствие защитника допускается на любой стадии следственного действия (ч. 11 ст. 182 УПК РФ). Следователь обязан допустить прибывшего адвоката немедленно с момента его появления.'
    },
    {
      q: 'Можно ли не пускать сотрудников правоохранительных органов в офис?',
      a: 'При наличии надлежащего постановления об обыске сотрудники имеют право принудительно вскрывать любые запертые помещения и двери (ч. 6 ст. 182 УПК РФ). Физическое воспрепятствование чревато привлечением бойцов спецназа и обвинением по ст. 318 УК РФ. Правильный путь — требовать удостоверений, фиксировать нарушения и вызывать адвоката.'
    },
    {
      q: 'Что делать, если силовики изымают серверы и компьютеры?',
      a: 'В силу ч. 4.1 ст. 164 и ст. 164.1 УПК РФ при расследовании экономических преступлений изъятие электронных носителей информации не допускается, за исключением строго определенных случаев. Вы имеете законное право ходатайствовать о копировании информации на месте с привлечением специалиста.'
    },
    {
      q: 'Имеют ли право силовики опрашивать сотрудников прямо во время обыска?',
      a: 'Обыск — это следственное действие по отысканию предметов и документов, а не допрос. Сотрудники компании не обязаны отвечать на вопросы оперативников или писать объяснительные на месте. Каждый работник имеет конституционное право по ст. 51 Конституции РФ отказаться от дачи показаний без своего адвоката.'
    },
    {
      q: 'Что делать, если следователь отказывается вносить замечания в протокол?',
      a: 'Представитель компании и адвокат имеют безусловное право собственноручно вписать все замечания и претензии в протокол обыска перед его подписанием. Если следователь препятствует этому, об этом делается запись в графе подписи, а также подается отдельное заявление.'
    },
    {
      q: 'Как быстро можно вернуть изъятые компьютеры и документы?',
      a: 'Сроки зависят от назначения судебных экспертиз. По закону документы и предметы, не имеющие отношения к делу, подлежат возврату. Адвокат подает ходатайства об ускорении осмотра, копировании нужных файлов и возврате оригиналов под сохранную расписку.'
    }
  ];

  const relatedServices = [
    {
      title: 'Налоговый юрист для бизнеса',
      desc: 'Проверки ФНС, возражения на акты, обжалование доначислений до уголовной стадии.',
      link: '/biznesu/nalogovyj-yurist-dlya-biznesa/'
    },
    {
      title: 'Корпоративный юрист',
      desc: 'Защита контроля над ООО, споры участников, исключение участника, дедлоки.',
      link: '/biznesu/korporativnyj-yurist/'
    },
    {
      title: 'Разблокировка счёта по 115-ФЗ',
      desc: 'Снятие ограничений банков, ответы на запросы финмониторинга, реабилитация в МВК.',
      link: '/biznesu/razblokirovka-raschetnogo-scheta-po-115-fz/'
    },
    {
      title: 'Банкротство бизнеса',
      desc: 'Защита руководства от субсидиарной ответственности и оспаривания сделок.',
      link: '/biznesu/bankrotstvo-biznesa/'
    }
  ];

  return (
    <main>
      <Header />

      {/* ═══ БЛОК 1: HERO ═══ */}
      <MilitaryHero
        breadcrumbs={
          <>
            <Link href="/">Главная</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/biznesu/">Бизнесу</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/biznesu/ugolovno-pravovaya-zashchita-biznesa/">Уголовно-правовая защита бизнеса</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Защита при обыске и выемке</span>
          </>
        }
        superTitle={
          <span style={{ whiteSpace: 'normal', display: 'inline-block', lineHeight: 1.4 }}>
            <span style={{ display: 'inline-block' }}>СЛЕДСТВЕННЫЕ ДЕЙСТВИЯ И ОБЫСКИ •</span> <br />
            <span style={{ display: 'inline-block' }}>Липецк и Липецкая область</span>
          </span>
        }
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Защита бизнеса при
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              обыске и выемке в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '760px', textWrap: 'balance' }}>
            Организуем немедленное участие адвоката, проверим основания и границы мероприятия, поможем зафиксировать изъятие документов и техники, предотвратим паралич бизнес-процессов.
          </span>
        }
        primaryCtaText="Связаться с адвокатом"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_primary_cta_obysk"
        primaryCtaSubtext={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Срочный выезд адвоката на обыск:
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (910) 350-31-11</a>
            </span>
          </span>
        }
        imageUrl="/images/bobkin.jpg"
        imageName="Аркадий Евгеньевич Бобкин"
        imageSubtitle="Директор, управляющий партнёр ЮК «Де-Юре», куратор направления"
        imageObjectPosition="center 15%"
        trustItems={[
          {
            text: (
              <span>
                <strong>Срочный выезд адвоката</strong> с момента звонка
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Контроль законности действий</strong> следователя и оперов
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Защита серверов и баз данных</strong> по ст. 164.1 УПК РФ
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Внесение замечаний в протокол</strong> и возврат изъятого
              </span>
            )
          }
        ]}
      />

      {/* ═══ БЛОК 2: СИТУАЦИИ ═══ */}
      <section id="situations" style={{ padding: '60px 0', background: 'var(--color-bg-light)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span
              style={{
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--color-gold)',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}
            >
              СИТУАЦИИ И ВЫЗОВЫ
            </span>
            <h2
              style={{
                fontSize: '32px',
                fontWeight: 800,
                color: 'var(--color-text-main)',
                marginTop: '8px',
                marginBottom: '12px'
              }}
            >
              В каких ситуациях компании нужен адвокат при обыске
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', maxWidth: '750px', margin: '0 auto' }}>
              Каждое следственное действие имеет свои правовые рамки. Адвокат обеспечивает их строгое соблюдение силовиками.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px'
            }}
          >
            {obyskSituations.map((sit, idx) => (
              <div
                key={idx}
                className="card hover-lift"
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)',
                  padding: '28px 22px',
                  borderRadius: '0',
                  boxShadow: '0 4px 16px rgba(23, 50, 77, 0.05)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-gold)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '-15px',
                  width: '90px',
                  height: '90px',
                  opacity: 0.04,
                  pointerEvents: 'none',
                  color: 'var(--color-deep-blue)'
                }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>

                <div>
                  <div
                    style={{
                      display: 'inline-block',
                      fontSize: '11px',
                      fontWeight: 700,
                      color: 'var(--color-primary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      background: 'rgba(23, 50, 77, 0.06)',
                      padding: '2px 6px',
                      borderRadius: '2px',
                      marginBottom: '10px'
                    }}
                  >
                    {sit.tag}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '17px',
                      fontWeight: 600,
                      color: 'var(--color-deep-blue)',
                      marginBottom: '10px',
                      lineHeight: '1.3'
                    }}
                  >
                    {sit.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '13.5px',
                      color: 'var(--color-text-secondary)',
                      lineHeight: '1.5',
                      margin: 0
                    }}
                  >
                    {sit.desc}
                  </p>
                </div>

                <a
                  href="#form"
                  className="situation-btn"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--color-primary)',
                    fontSize: '13px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    marginTop: '16px',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-gold)';
                    const svg = e.currentTarget.querySelector('svg');
                    if (svg) {
                      svg.style.transform = 'translateX(4px)';
                      svg.style.stroke = 'var(--color-gold)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--color-primary)';
                    const svg = e.currentTarget.querySelector('svg');
                    if (svg) {
                      svg.style.transform = 'translateX(0)';
                      svg.style.stroke = 'currentColor';
                    }
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('form');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    else window.location.hash = 'form';
                  }}
                >
                  <span>{sit.btnText}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.25s ease, stroke 0.25s ease' }}>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: КОГДА НЕЛЬЗЯ ЗАТЯГИВАТЬ С ОБРАЩЕНИЕМ (#URGENT) ═══ */}
      <section style={{ background: 'var(--color-deep-blue)', padding: '64px 0 56px', position: 'relative', overflow: 'hidden' }} id="urgent">
        <div className="container">
          <div style={{ maxWidth: '800px', marginBottom: '36px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontFamily: 'var(--font-serif)', color: '#FFFFFF', marginBottom: '12px', marginTop: 0, lineHeight: 1.25 }}>
              <span style={{ display: 'inline-block' }}>Когда нельзя затягивать</span> <br />
              <span style={{ display: 'inline-block' }}>с обращением к юристу</span>
            </h2>
            <div style={{ width: '60px', height: '2px', background: 'var(--color-gold)', margin: '16px 0' }} />
            <p style={{ fontSize: '16px', color: '#E8ECF1', lineHeight: 1.65, margin: 0 }}>
              В уголовно-правовой сфере первые действия и объяснения определяют дальнейший ход дела. Задержка может привести к необратимой фиксации позиции обвинения.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '20px', marginBottom: '36px' }}>
            {urgentRisks.map((risk, idx) => (
              <div
                key={idx}
                className="urgent-card"
                style={{
                  background: 'linear-gradient(135deg, #FAF7F2 0%, #F3ECDF 100%)',
                  padding: '30px 24px',
                  borderTop: '4px solid var(--color-gold)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B08D57" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <div style={{ fontSize: '16.5px', fontWeight: 700, color: 'var(--color-deep-blue)', lineHeight: 1.35, fontFamily: 'var(--font-serif)' }}>
                      {risk.title}
                    </div>
                  </div>
                  <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '14px', lineHeight: 1.55, margin: 0 }}>
                    {risk.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.08)',
            borderLeft: '4px solid var(--color-gold)',
            padding: '16px 24px',
            marginBottom: '32px',
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '14px',
            lineHeight: 1.6
          }}>
            <span style={{ display: 'inline-block' }}>
              <strong style={{ color: '#FFFFFF' }}>Если проверка, обыск или допрос уже начались:</strong> Свяжитесь с юристом до подписания протоколов и передачи документов.
            </span>
          </div>

          <style dangerouslySetInnerHTML={{__html: `
            .urgent-card {
              transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
            }
            .urgent-card:hover {
              transform: translateY(-6px);
              box-shadow: 0 18px 36px rgba(0,0,0,0.28) !important;
            }
            .btn-urgent-outline {
              border: 1px solid rgba(255,255,255,0.8) !important;
              color: #FFFFFF !important;
              background: transparent !important;
              text-decoration: none !important;
              font-weight: 600 !important;
              transition: all 0.3s ease !important;
              border-radius: 0 !important;
              display: inline-block !important;
            }
            .btn-urgent-outline:hover {
              background: rgba(255,255,255,0.18) !important;
              color: #FFFFFF !important;
              border-color: #FFFFFF !important;
            }
            .btn-urgent-call {
              display: inline-block !important;
              border-radius: 0 !important;
              text-decoration: none !important;
              background-color: var(--color-gold) !important;
              color: var(--color-deep-blue) !important;
              font-weight: 700 !important;
              transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
              border: 1px solid var(--color-gold) !important;
            }
            .btn-urgent-call:hover {
              background-color: #FFFFFF !important;
              color: #0B1C2A !important;
              border-color: #FFFFFF !important;
              transform: translateY(-2px);
            }
          `}} />

          {/* Зона связи */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '28px', display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <a href="tel:+79103503111" style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.02em' }} data-analytics="phone_click">
              +7 (910) 350-31-11
            </a>
            <a href="tel:+79103503111" className="btn-urgent-call" style={{ padding: '14px 28px', fontSize: '15px' }} data-analytics="phone_click">
              Позвонить юристу
            </a>
            <a href="#form" className="btn btn-urgent-outline" style={{ padding: '14px 28px', fontSize: '15px' }}>
              Срочная консультация
            </a>
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginLeft: '4px' }}>
              Срочная правовая помощь при проверках и следственных действиях
            </span>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: ЧТО ПРОВЕРЯЕТ И ФИКСИРУЕТ АДВОКАТ (КАНОНИЧЕСКИЙ ШАБЛОН #CHECK) ═══ */}
      <section className="section bg-white" id="check" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.25 }}>
              <span style={{ display: 'inline-block' }}>Что проверяет и фиксирует</span> <br />
              <span style={{ display: 'inline-block' }}>адвокат во время обыска</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Любое процессуальное нарушение, зафиксированное защитником в протоколе, в дальнейшем позволяет признать изъятые доказательства недопустимыми.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', position: 'relative', marginBottom: '40px' }}>
            {lawyerCheckpoints.map((item, idx) => (
              <div
                key={idx}
                className="hover-lift"
                style={{
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  padding: '36px 30px 32px 30px',
                  border: '1px solid var(--color-border)',
                  borderTop: '4px solid var(--color-gold)',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative'
                }}
              >
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
                  {item.num}
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

      {/* ═══ БЛОК 5: ЭТАПЫ РАБОТЫ ═══ */}
      <ProcessBlock
        title="Как проходит сопровождение следственного действия"
        steps={processSteps}
      />

      {/* ═══ БЛОК 6: КУРАТОР (SPECIALISTBLOCK) ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name="Аркадий Евгеньевич Бобкин"
        position={<>Директор, управляющий партнёр ЮК «Де-Юре»,<br />куратор направления «Уголовно-правовая защита бизнеса»</>}
        imageUrl="/images/bobkin.jpg"
        imagePosition="center 15%"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Аркадий Евгеньевич участвует в оценке ситуации, координирует работу следственно-адвокатской группы и разработку правовой позиции. 22 года руководил следственными отделами и работал следователем по особо важным делам. Непосредственное очное участие в следственных действиях на объекте осуществляют уполномоченные адвокаты партнерской коллегии.
          </span>,
          <div
            key="2"
            style={{
              borderLeft: '3px solid var(--color-gold)',
              paddingLeft: '16px',
              fontStyle: 'italic',
              fontSize: '14.5px',
              color: 'var(--color-deep-blue)',
              margin: '16px 0 0 0'
            }}
          >
            «Обыск — это проверка компании на прочность. Главное оружие бизнеса — хладнокровие, протокол и участие квалифицированного адвоката с первых минут».
          </div>,
          <ul key="3" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>22 года в следственных подразделениях налоговой полиции и МВД РФ</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>Очное участие на следственных действиях осуществляют адвокаты с ордером</span>
            </li>
          </ul>,
          <a key="4" href="/specialisty/bobkin-arkadiy-evgenevich/" style={{ display: 'inline-block', marginTop: '16px', fontSize: '14px', color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
            Подробнее об опыте куратора →
          </a>
        ]}
        buttonText="Связаться с куратором"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 7: ЦЕНЫ ═══ */}
      <PricingBlock
        title="Стоимость помощи адвоката при обыске и выемке"
        subtitle="Стоимость фиксируется соглашением и зависит от срочности, места проведения и необходимости последующего обжалования"
        tiers={pricingTiers}
      />

      {/* ═══ БЛОК 8: КЕЙСЫ ═══ */}
      <CasesBlock
        title="Практика защиты бизнеса при следственных действиях"
        subtitle="Примеры защиты серверов, документов и интересов компаний в Липецке и Черноземье"
        cases={practiceCases}
      />

      {/* ═══ БЛОК 9: FAQ ═══ */}
      <FAQBlock items={faqs} />

      {/* ═══ БЛОК: СМЕЖНЫЕ НАПРАВЛЕНИЯ ПРАКТИКИ ДЛЯ БИЗНЕСА (ПО ШАБЛОНУ) ═══ */}
      <section className="section bg-light" id="related-services" style={{ padding: '64px 0', background: 'var(--gradient-cream)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ marginBottom: '36px' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '10px'
            }}>
              Смежные направления практики для бизнеса
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '24px'
            }}>
              <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px, 3.5vw, 34px)', color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.25, flex: '1 1 480px', minWidth: '280px' }}>
                <span style={{ display: 'inline-block' }}>Смежные направления</span> <br />
                <span style={{ display: 'inline-block' }}>практики для бизнеса</span>
              </h2>
              <p style={{
                flex: '0 1 440px',
                minWidth: '280px',
                fontSize: '15.5px',
                color: 'var(--color-text-secondary)',
                fontWeight: 400,
                lineHeight: 1.65,
                margin: 0,
                textAlign: 'left',
                textWrap: 'balance'
              }}>
                Если ситуация выходит за рамки обыска и следственных действий, привлекаем экспертов смежных практик компании «Де-Юре» — по налогам, арбитражу, корпоративным спорам и банкротству.
              </p>
            </div>
          </div>

          <div className="grid grid-4" style={{ gap: '20px', marginBottom: '28px' }}>
            {relatedServices.map((rel, idx) => (
              <Link key={idx} href={rel.link} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                <div
                  className="card related-service-card hover-lift"
                  style={{
                    height: '100%',
                    minHeight: '180px',
                    padding: '26px 24px',
                    background: 'var(--color-white)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 16px rgba(23, 50, 77, 0.04)'
                  }}
                >
                  <div>
                    <h3 style={{ margin: '0 0 10px 0', fontSize: '17px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', lineHeight: 1.35, fontWeight: 700 }}>
                      {rel.title}
                    </h3>
                    <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                      {rel.desc}
                    </p>
                  </div>
                  <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontSize: '13.5px', fontWeight: 600, marginTop: '18px', transition: 'color 0.35s ease' }}>
                    <span>Подробнее об услуге</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.35s ease, stroke 0.35s ease' }}>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div>
            <Link href="/biznesu/" className="all-services-link" style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '15px', textDecoration: 'underline', textUnderlineOffset: '4px', display: 'inline-flex', alignItems: 'center', gap: '6px', transition: 'color 0.3s ease' }}>
              Смотреть все юридические услуги для бизнеса →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 11: ФИНАЛЬНАЯ ФОРМА (СВЯЗАТЬСЯ С НАМИ) — КАНОНИЧЕСКИЙ ШАБЛОН ═══ */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px', padding: '80px 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>
                  Связаться с нами
                </span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Получите первичную</span>{' '}
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>оценку ситуации</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Если обыск или выемка уже начались — немедленно звоните дежурному юристу. Если следственные действия завершились, оставьте контакты для правового анализа протоколов и возврата изъятого.
              </p>

              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Прямой контакт со специалистом</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Дежурный телефон: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (910) 350-31-11</a><br />
                  Городской телефон: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (4742) 20-15-25</a>
                </p>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '6px' }}>
                  Липецк, ул. Советская, д. 35, офис 213 (приём руководителей по предварительной записи)
                </div>
              </div>

              <div style={{ background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Адвокатская тайна и конфиденциальность:</strong>
                Все переданные сведения и документы охраняются Федеральным законом № 63-ФЗ «Об адвокатской деятельности и адвокатуре в РФ». Не указывайте в форме паспортные данные и коммерческую тайну — защищённый способ передачи согласуем после контакта.
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm
                title="Написать нам"
                subtitle={
                  <>
                    <span style={{ display: 'inline-block' }}>Оставьте контакты и суть вопроса. Адвокат свяжется с вами</span> <br />
                    <span style={{ display: 'inline-block' }}>в течение 15 минут в рабочее время.</span>
                  </>
                }
                subtext={
                  <>
                    <span style={{ display: 'inline-block' }}>Если вы оставите заявку вечером или в&nbsp;выходной день,</span> <br />
                    <span style={{ display: 'inline-block' }}>мы перезвоним в&nbsp;ближайший рабочий день.</span>
                  </>
                }
                buttonText="Вызвать адвоката / Оставить заявку"
                commentPlaceholder="Кратко опишите ситуацию: обыск, выемка техники, изъятие серверов, проверяющий орган…"
                hiddenFields={[
                  { name: 'source_page', value: '/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-pri-obyske-v-kompanii/' },
                  { name: 'page_type', value: 'service' },
                  { name: 'direction', value: 'criminal-defense' },
                  { name: 'service', value: 'zashchita-pri-obyske-v-kompanii' }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
