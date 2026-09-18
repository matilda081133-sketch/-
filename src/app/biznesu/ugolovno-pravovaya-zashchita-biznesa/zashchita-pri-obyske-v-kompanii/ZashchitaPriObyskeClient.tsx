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

  const firstMinutesSteps = [
    {
      title: 'Назначить одного координатора',
      desc: 'Определите руководителя или юриста, который взаимодействует со следователем. Исключите панику и несогласованные реплики персонала.'
    },
    {
      title: 'Срочно связаться с адвокатом',
      desc: 'Сообщите точный адрес, подразделение (МВД, СК РФ, ФСБ), ФИО руководителя следственной группы и реквизиты постановления.'
    },
    {
      title: 'Проверить полномочия и основания',
      desc: 'Потребуйте предъявить служебные удостоверения и постановление суда либо следователя. Убедитесь в точности адреса и реквизитов фирмы.'
    },
    {
      title: 'Инструктировать сотрудников',
      desc: 'Напомните сотрудникам о праве не давать показаний без адвоката (ст. 51 Конституции РФ). Никаких неформальных бесед с оперативниками.'
    },
    {
      title: 'Контролировать фиксацию изъятого',
      desc: 'Все предметы, папки и носители должны опечатываться в присутствии понятых с указанием индивидуальных номеров и характеристик.'
    },
    {
      title: 'Требовать копирования баз данных',
      desc: 'По ст. 164.1 УПК РФ заявите ходатайство о копировании критичной информации и баз 1С на ваши чистые носители с участием специалиста.'
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
            <span style={{ display: 'inline-block' }}>УГОЛОВНО-ПРАВОВАЯ ЗАЩИТА БИЗНЕСА •</span> <br />
            <span style={{ display: 'inline-block' }}>Липецк и Липецкая область</span>
          </span>
        }
        title={
          <span style={{ display: 'block' }}>
            <span style={{ display: 'inline-block' }}>Защита при обыске</span> <br />
            <span style={{ display: 'inline-block', color: 'var(--color-gold)' }}>и выемке в компании</span>
          </span>
        }
        subtitle="Организуем немедленное участие адвоката, проверим основания и границы мероприятия, поможем зафиксировать изъятие документов и техники, предотвратим паралич бизнес-процессов."
        trustItems={[
          'Подключаемся во время следственного действия или сразу после него',
          'Контролируем действия следователя, оперов, спецназа и понятых',
          'Защищаем серверы, ПК и базы данных по ст. 164.1 УПК РФ',
          'Вносим процессуальные замечания и добиваемся возврата техники'
        ]}
        primaryCtaText="Связаться с адвокатом"
        primaryCtaLink="#form"
        secondaryCtaText="Первые действия"
        secondaryCtaLink="#urgent"
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
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)',
                  padding: '28px',
                  borderRadius: '12px',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
                  border: '1px solid rgba(0,0,0,0.06)',
                  borderTop: '3px solid var(--color-gold)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-10px',
                    width: '70px',
                    height: '70px',
                    opacity: 0.04,
                    pointerEvents: 'none'
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                  </svg>
                </div>

                <div>
                  <div
                    style={{
                      display: 'inline-block',
                      fontSize: '11px',
                      fontWeight: 700,
                      color: 'var(--color-gold)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      background: 'rgba(218, 165, 32, 0.1)',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      marginBottom: '14px'
                    }}
                  >
                    {sit.tag}
                  </div>
                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      color: 'var(--color-text-main)',
                      marginBottom: '12px',
                      lineHeight: '1.3'
                    }}
                  >
                    {sit.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '14px',
                      color: 'var(--color-text-secondary)',
                      lineHeight: '1.5',
                      marginBottom: '20px'
                    }}
                  >
                    {sit.desc}
                  </p>
                </div>

                <a
                  href="#form"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--color-deep-blue)',
                    textDecoration: 'none',
                    borderBottom: '1px dashed var(--color-deep-blue)',
                    width: 'fit-content',
                    paddingBottom: '2px'
                  }}
                >
                  {sit.btnText} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: ПЕРВЫЕ МИНУТЫ И СРОЧНОСТЬ ═══ */}
      <section
        id="urgent"
        style={{
          padding: '70px 0',
          background: 'var(--color-deep-blue)',
          color: '#ffffff',
          position: 'relative'
        }}
      >
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
              АЛГОРИТМ ПРИ ПОЯВЛЕНИИ СИЛОВИКОВ
            </span>
            <h2
              style={{
                fontSize: '32px',
                fontWeight: 800,
                color: '#ffffff',
                marginTop: '8px',
                marginBottom: '12px'
              }}
            >
              Что важно сделать в первые минуты обыска или выемки
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)', maxWidth: '800px', margin: '0 auto' }}>
              Спокойствие и соблюдение четкого протокола защитят руководство и сотрудников от уголовных рисков.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
              marginBottom: '40px'
            }}
          >
            {firstMinutesSteps.map((step, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '12px',
                  padding: '24px',
                  display: 'flex',
                  gap: '16px'
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'var(--color-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '14px',
                    flexShrink: 0
                  }}
                >
                  {idx + 1}
                </div>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', marginBottom: '6px' }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5, margin: 0 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              background: 'rgba(0,0,0,0.25)',
              borderRadius: '12px',
              padding: '24px',
              borderLeft: '4px solid var(--color-gold)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '20px'
            }}
          >
            <div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                В офисе уже находятся сотрудники правоохранительных органов?
              </div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)' }}>
                Немедленно наберите номер дежурного адвоката ЮК «Де-Юре».
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href="tel:+74742201525"
                style={{
                  fontSize: '18px',
                  fontWeight: 800,
                  color: 'var(--color-gold)',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap'
                }}
              >
                +7 (4742) 20-15-25
              </a>
              <a
                href="tel:+74742201525"
                style={{
                  background: 'var(--color-gold)',
                  color: '#ffffff',
                  padding: '12px 24px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  whiteSpace: 'nowrap'
                }}
              >
                Вызвать адвоката
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: КОНТРОЛЬ ПРОЦЕДУРЫ ═══ */}
      <section id="directions" style={{ padding: '60px 0', background: '#ffffff' }}>
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
              ПРАВОВОЙ КОНТРОЛЬ НА МЕСТЕ
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
              Что проверяет и фиксирует адвокат во время мероприятия
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', maxWidth: '750px', margin: '0 auto' }}>
              Любое процессуальное нарушение, зафиксированное защитником в протоколе, в дальнейшем позволяет признать изъятые доказательства недопустимыми.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px'
            }}
          >
            {lawyerCheckpoints.map((cp, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--color-bg-light)',
                  borderRadius: '12px',
                  padding: '28px',
                  border: '1px solid rgba(0,0,0,0.06)',
                  display: 'flex',
                  gap: '16px'
                }}
              >
                <div
                  style={{
                    fontSize: '22px',
                    fontWeight: 900,
                    color: 'var(--color-gold)',
                    lineHeight: 1
                  }}
                >
                  {cp.num}
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: '17px',
                      fontWeight: 700,
                      color: 'var(--color-text-main)',
                      marginBottom: '8px',
                      lineHeight: 1.3
                    }}
                  >
                    {cp.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '14px',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.5,
                      margin: 0
                    }}
                  >
                    {cp.desc}
                  </p>
                </div>
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

      {/* ═══ БЛОК 10: СВЯЗАННЫЕ УСЛУГИ КЛАСТЕРА ═══ */}
      <section style={{ padding: '60px 0', background: 'var(--color-bg-light)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2
            style={{
              fontSize: '26px',
              fontWeight: 800,
              color: 'var(--color-text-main)',
              marginBottom: '24px',
              textAlign: 'center'
            }}
          >
            Связанные услуги уголовно-правовой защиты
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '16px'
            }}
          >
            <Link
              href="/biznesu/ugolovno-pravovaya-zashchita-biznesa/"
              style={{
                background: '#ffffff',
                padding: '20px',
                borderRadius: '8px',
                textDecoration: 'none',
                color: 'var(--color-text-main)',
                border: '1px solid rgba(0,0,0,0.06)',
                fontWeight: 600,
                fontSize: '15px',
                display: 'block'
              }}
            >
              ← Все услуги уголовно-правовой защиты
            </Link>
            <Link
              href="/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-pri-proverke-obep/"
              style={{
                background: '#ffffff',
                padding: '20px',
                borderRadius: '8px',
                textDecoration: 'none',
                color: 'var(--color-text-main)',
                border: '1px solid rgba(0,0,0,0.06)',
                fontWeight: 600,
                fontSize: '15px',
                display: 'block'
              }}
            >
              Защита при проверке ОБЭП →
            </Link>
            <Link
              href="/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-ekonomicheskim-prestupleniyam/"
              style={{
                background: '#ffffff',
                padding: '20px',
                borderRadius: '8px',
                textDecoration: 'none',
                color: 'var(--color-text-main)',
                border: '1px solid rgba(0,0,0,0.06)',
                fontWeight: 600,
                fontSize: '15px',
                display: 'block'
              }}
            >
              Защита по экономическим делам →
            </Link>
            <Link
              href="/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-nalogovym-prestupleniyam/"
              style={{
                background: '#ffffff',
                padding: '20px',
                borderRadius: '8px',
                textDecoration: 'none',
                color: 'var(--color-text-main)',
                border: '1px solid rgba(0,0,0,0.06)',
                fontWeight: 600,
                fontSize: '15px',
                display: 'block'
              }}
            >
              Защита по налоговым преступлениям →
            </Link>
            <Link
              href="/biznesu/ugolovno-pravovaya-zashchita-biznesa/ugolovno-pravovoj-audit-biznesa/"
              style={{
                background: '#ffffff',
                padding: '20px',
                borderRadius: '8px',
                textDecoration: 'none',
                color: 'var(--color-text-main)',
                border: '1px solid rgba(0,0,0,0.06)',
                fontWeight: 600,
                fontSize: '15px',
                display: 'block'
              }}
            >
              Уголовно-правовой аудит бизнеса →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 11: ФОРМА И КОНТАКТЫ ═══ */}
      <section id="form" style={{ padding: '70px 0', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
              alignItems: 'start'
            }}
          >
            <div>
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  color: 'var(--color-gold)',
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}
              >
                ЭКСТРЕННАЯ ЮРИДИЧЕСКАЯ ПОМОЩЬ
              </span>
              <h2
                style={{
                  fontSize: '32px',
                  fontWeight: 800,
                  color: 'var(--color-text-main)',
                  marginTop: '8px',
                  marginBottom: '16px'
                }}
              >
                Вызовите адвоката или оставьте заявку
              </h2>
              <p
                style={{
                  fontSize: '15px',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '24px'
                }}
              >
                Если мероприятие уже началось, рекомендуем немедленно позвонить по телефону. Если обыск завершился, опишите, какой орган его проводил и что было изъято. Мы оперативно свяжемся с вами для правовой помощи.
              </p>
              <div
                style={{
                  background: 'var(--color-bg-light)',
                  padding: '20px',
                  borderRadius: '8px',
                  borderLeft: '4px solid var(--color-gold)',
                  marginBottom: '24px'
                }}
              >
                <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--color-deep-blue)' }}>
                  Полная конфиденциальность
                </div>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>
                  Все сведения охраняются законом о государственной и адвокатской тайне. Документы не попадут к третьим лицам.
                </div>
              </div>
              <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
                Офис в Липецке: <strong>ул. Советская, д. 35, оф. 213</strong>
                <br />
                Телефон экстренной связи: <strong>+7 (4742) 20-15-25</strong>
              </div>
            </div>

            <div
              style={{
                background: 'var(--color-bg-light)',
                padding: '32px',
                borderRadius: '12px',
                border: '1px solid rgba(0,0,0,0.08)'
              }}
            >
              <ContactsForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
