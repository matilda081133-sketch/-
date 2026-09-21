'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock, { FAQItem } from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';
import CasesBlock, { CaseData } from '@/components/CasesBlock';
import ProcessBlock, { ProcessStep } from '@/components/ProcessBlock';
import PricingBlock, { PricingTier } from '@/components/PricingBlock';
export default function ObzhalovanieUpravlyayushchegoClient() {
  const situations = [
    {
      tag: 'Бездействие',
      title: 'Нет ответа или процессуального действия управляющего',
      desc: 'Проверяем содержание обращения, подтверждение доставки, нормативную обязанность управляющего и то, какое право затронуто задержкой.'
    },
    {
      tag: 'Документы и отчёты',
      title: 'Не предоставляют документы или сведения кредиторам',
      desc: 'Проверяем процессуальный статус заявителя в деле, объём права на информацию, сделанный запрос и основания фактического отказа.'
    },
    {
      tag: 'Активы должника',
      title: 'Имущество не ищут, не сохраняют или реализуют сомнительно',
      desc: 'Проверяем обязанность по инвентаризации, сведения об активе, решения собрания кредиторов, оценку, публикации и последствия для конкурсной массы.'
    },
    {
      tag: 'Собрание кредиторов',
      title: 'Нарушения при созыве и проведении собрания кредиторов',
      desc: 'Проверяем надлежащее уведомление, законность повестки, допуск участников, порядок подсчёта голосов, протокол и способ судебной защиты.'
    },
    {
      tag: 'Торги и расчёты',
      title: 'Спорные торги, расчёты или нарушение очередности выплат',
      desc: 'Определяем процессуальную стадию: достаточно ли жалобы на действия управляющего либо требуется отдельный обособленный спор о торгах или сделке.'
    },
    {
      tag: 'Сделки и долги',
      title: 'Отказ оспаривать сделку или взыскивать задолженность',
      desc: 'Проверяем обоснованность требований кредитора, доказательства, экономическую целесообразность, полномочия и судебную перспективу.'
    }
  ];

  const urgentCards = [
    {
      num: '01',
      title: 'Зафиксируйте конкретный эпизод',
      desc: 'Запишите, какое именно действие совершено либо какую обязанность управляющий должен был исполнить, но допустил бездействие.'
    },
    {
      num: '02',
      title: 'Сохраните исходные документы',
      desc: 'Сохраните исходные письма, запросы, почтовые квитанции, отчёты, публикации в ЕФРСБ, протоколы и карточку дела — не редактируйте оригиналы.'
    },
    {
      num: '03',
      title: 'Определите ближайшее событие',
      desc: 'Отметьте ближайшее необратимое или влияющее на права событие: собрание кредиторов, торги, расчёты, передачу имущества или судебное заседание.'
    },
    {
      num: '04',
      title: 'Не рассылайте эмоциональных жалоб',
      desc: 'Не угрожайте управляющему и не рассылайте одну эмоциональную жалобу во все инстанции: адресат строго зависит от требуемого результата.'
    },
    {
      num: '05',
      title: 'Передайте материалы на анализ',
      desc: 'Не публикуйте конфиденциальные сведения. После контакта юрист согласует безопасный канал передачи и список необходимых материалов.'
    }
  ];

  const complaintRoutes = [
    {
      title: 'Арбитражный суд в деле о банкротстве',
      target: 'Защитить права в конкретной процедуре и получить судебный акт по действию или бездействию управляющего.',
      notReplace: 'Не заменяет автоматическое отстранение, взыскание убытков и административное наказание.'
    },
    {
      title: 'Саморегулируемая организация (СРО)',
      target: 'Проверить соблюдение членом СРО стандартов и правил профессиональной деятельности арбитражных управляющих.',
      notReplace: 'Не заменяет судебное восстановление нарушенного права и отмену процессуальных последствий.'
    },
    {
      title: 'Управление Росреестра',
      target: 'Поставить вопрос о нарушении законодательства о банкротстве и административном контроле (ст. 14.13 КоАП РФ).',
      notReplace: 'Не заменяет судебную жалобу в рамках дела о банкротстве и самостоятельный спор.'
    },
    {
      title: 'Взыскание убытков / страхование / КФ',
      target: 'Добиться имущественной компенсации при наличии доказанного ущерба, противоправности и причинной связи.',
      notReplace: 'Не входит в простую жалобу — требует самостоятельного иска с отдельным расчётом и сметой.'
    },
    {
      title: 'Процессуальное обжалование судебного акта',
      target: 'Пересмотреть определение или решение арбитражного суда в апелляционной или кассационной инстанции.',
      notReplace: 'Не является жалобой на управляющего — относится к арбитражному судопроизводству.'
    }
  ];

  const analysisContours = [
    {
      title: 'Статус и права заявителя',
      what: 'Проверяем процессуальный статус кредитора (включенность в реестр, размер требований) или статус участника должника.',
      why: 'Исключить отказ суда в рассмотрении жалобы по причине отсутствия процессуального права.'
    },
    {
      title: 'Квалификация нарушений закона',
      what: 'Сопоставляем действия или бездействие АУ со статьями 20.3, 60, 129, 130 и 139 Закона № 127-ФЗ.',
      why: 'Сформировать неоспоримый состав правонарушения, исключающий субъективное судейское усмотрение.'
    },
    {
      title: 'Доказательственная база',
      what: 'Собираем почтовые квитанции, скриншоты публикаций в ЕФРСБ, выписки из банков, отчеты об оценке и протоколы собраний.',
      why: 'Обеспечить 100% документальное подтверждение каждого довода жалобы.'
    },
    {
      title: 'Расчёт причинённого ущерба',
      what: 'Определяем разницу между реальной стоимостью актива и ценой продажи либо размер необоснованно списанных расходов.',
      why: 'Обосновать реальное нарушение прав заявителя и подготовить основание для взыскания убытков.'
    },
    {
      title: 'Точная маршрутизация обращения',
      what: 'Выбираем адресата: арбитражный суд (ст. 60), Управление Росреестра (ст. 14.13 КоАП РФ) или дисциплинарный комитет СРО.',
      why: 'Добиться максимального правового эффекта без потери времени на формальные отписки.'
    },
    {
      title: 'Контроль исполнения определения',
      what: 'Контролируем устранение нарушений, передачу документов, отстранение управляющего и утверждение нового АУ.',
      why: 'Довести рассмотрение жалобы до реального восстановления имущественных прав доверителя.'
    }
  ];

  const processSteps: ProcessStep[] = [
    {
      num: '01',
      title: 'Фиксация нарушений и аудит дела',
      desc: 'Изучаем отчеты управляющего, публикации в ЕФРСБ, картотеку арбитража и выявляем отступления от Закона о банкротстве.'
    },
    {
      num: '02',
      title: 'Сбор доказательственной базы',
      desc: 'Формируем официальные запросы, фиксируем почтовые отправления, собираем выписки и альтернативные оценки имущества.'
    },
    {
      num: '03',
      title: 'Подготовка мотивированной жалобы',
      desc: 'Составляем жалобу со ссылками на судебную практику ВС РФ, требованиями об устранении нарушений или отстранении управляющего.'
    },
    {
      num: '04',
      title: 'Принятие обеспечительных мер',
      desc: 'При необходимости заявляем ходатайство о приостановлении торгов или запрете расходования средств конкурсной массы.'
    },
    {
      num: '05',
      title: 'Судебное представительство',
      desc: 'Поддерживаем жалобу в судебных заседаниях арбитражного суда, опровергаем возражения управляющего и его представителей.'
    },
    {
      num: '06',
      title: 'Контроль исполнения и взыскание убытков',
      desc: 'Контролируем отстранение АУ, выбор новой кандидатуры либо взыскиваем причиненный ущерб со страховой компании управляющего.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Экспертиза действий управляющего',
      subtitle: 'Анализ отчетов и рисков дела',
      price: 'от 10 000 ₽',
      popular: false,
      features: [
        { name: 'правовой анализ отчетов и публикаций АУ', value: 'Да' },
        { name: 'проверка соблюдения сроков процедуры', value: 'Да' },
        { name: 'оценка перспектив отстранения или жалобы', value: 'Да' },
        { name: 'письменное заключение с планом действий', value: 'Да' }
      ],
      buttonText: 'Заказать экспертизу',
      buttonHref: '#form'
    },
    {
      title: 'Подготовка и подача жалобы',
      subtitle: 'Жалоба в арбитражный суд (ст. 60)',
      price: 'от 25 000 ₽',
      popular: true,
      badgeText: 'Востребовано',
      features: [
        { name: 'составление мотивированной жалобы в арбитраж', value: 'Да' },
        { name: 'формирование реестра доказательств нарушений', value: 'Да' },
        { name: 'подготовка жалоб в Росреестр и СРО', value: 'Да' },
        { name: 'подача документов через систему «Мой Арбитр»', value: 'Да' }
      ],
      buttonText: 'Подать жалобу',
      buttonHref: '#form'
    },
    {
      title: 'Ведение спора в суде под ключ',
      subtitle: 'Судебное представительство',
      price: 'от 55 000 ₽',
      popular: false,
      features: [
        { name: 'все действия тарифа «Подготовка жалобы»', value: 'Да' },
        { name: 'участие во всех судебных заседаниях суда', value: 'Да' },
        { name: 'подача ходатайств об обеспечительных мерах', value: 'Да' },
        { name: 'доказывание грубости нарушений для отстранения', value: 'Да' }
      ],
      buttonText: 'Передать спор юристу',
      buttonHref: '#form'
    },
    {
      title: 'Взыскание убытков с управляющего',
      subtitle: 'Возмещение причиненного ущерба',
      price: 'от 60 000 ₽',
      popular: false,
      features: [
        { name: 'расчет реального ущерба конкурсной массе', value: 'Да' },
        { name: 'доказывание вины и причинной связи в суде', value: 'Да' },
        { name: 'взыскание средств со страховой компании АУ', value: 'Да' },
        { name: 'обращение к компенсационному фонду СРО', value: 'Да' }
      ],
      buttonText: 'Взыскать убытки',
      buttonHref: '#form'
    }
  ];

  const casesData: CaseData[] = [
    {
      category: 'Приостановление торгов',
      title: 'Отмена незаконного положения о торгах и сохранение имущества на 45 млн ₽',
      problem: 'Конкурсный управляющий утвердил продажу имущественного комплекса завода по заниженной в 3 раза начальной цене в пользу связанного покупателя.',
      action: 'Подали срочную жалобу в арбитражный суд с ходатайством об обеспечительных мерах. Доказали занижение стоимости и нарушение правил публикации.',
      result: 'Торги приостановлены судом, положение признано недействительным, начальная цена повышена до справедливой рыночной оценки 45 млн ₽.'
    },
    {
      category: 'Отстранение управляющего',
      title: 'Отстранение конкурсного управляющего за уклонение от оспаривания сделок',
      problem: 'Управляющий на протяжении 8 месяцев игнорировал требования кредиторов об оспаривании вывода автопарка должника на сумму 19 млн ₽.',
      action: 'Зафиксировали бездействие официальными запросами, доказали в суде осведомленность АУ о признаках недействительности сделок и причинение вреда.',
      result: 'Арбитражный суд Липецкой области признал бездействие незаконным и вынес определение об отстранении конкурсного управляющего от исполнения обязанностей.'
    },
    {
      category: 'Взыскание убытков',
      title: 'Взыскание 4,8 млн ₽ убытков с арбитражного управляющего за пропуск срока',
      problem: 'Управляющий не предъявил исполнительные листы к банковским счетам контрагентов должника, допустив истечение срока давности и утрату дебиторки.',
      action: 'Доказали виновное бездействие АУ и прямую причинно-следственную связь с утратой возможности реального пополнения конкурсной массы.',
      result: 'Суд взыскал 4,8 млн ₽ убытков с управляющего; выплата полностью получена кредиторами за счёт страхового полиса ответственности АУ.'
    }
  ];

  const faqItems: FAQItem[] = [
    {
      q: 'Куда эффективнее жаловаться на арбитражного управляющего?',
      a: 'Основной и наиболее действенный орган — арбитражный суд, рассматривающий дело о банкротстве (ст. 60 Закона о банкротстве). Только суд может признать действия незаконными, обязать совершить действия, отстранить управляющего или взыскать с него убытки. Жалобы в Росреестр и СРО эффективны как дополнительный рычаг давления для привлечения к административной ответственности.'
    },
    {
      q: 'Кто имеет право обжаловать действия или бездействие управляющего?',
      a: 'Правом на подачу жалобы в арбитражный суд обладают конкурсные кредиторы, уполномоченный орган (ФНС), должник, а также учредители (участники) должника через своего представителя.'
    },
    {
      q: 'За какие нарушения арбитражного управляющего могут отстранить?',
      a: 'Отстранение — исключительная мера. Для этого необходимо доказать не просто формальное нарушение, а неисполнение или ненадлежащее исполнение обязанностей, которое повлекло или могло повлечь убытки для должника или кредиторов.'
    },
    {
      q: 'Как доказать незаконность бездействия управляющего?',
      a: 'Необходимо подтвердить, что кредитор официально обращался к управляющему (с отметкой о вручении или почтовой описью), управляющий имел реальную возможность совершить требуемое действие, но не предпринял мер в разумный срок, нарушив законные права кредиторов.'
    },
    {
      q: 'Можно ли оспорить привлечение управляющим сторонних юристов и бухгалтеров?',
      a: 'Да. Если услуги привлеченных лиц дублируют прямые обязанности управляющего либо стоимость их услуг явно завышена по сравнению со среднерыночной, кредиторы вправе подать ходатайство о признании расходов необоснованными и снижении вознаграждения.'
    },
    {
      q: 'Как взыскать убытки с арбитражного управляющего?',
      a: 'Подается заявление в арбитражный суд о взыскании убытков. После вступления судебного акта в силу взыскание производится со страховой организации, где застрахована ответственность АУ (лимит от 10 млн ₽), а при недостаточности — из компенсационного фонда СРО (до 50 млн ₽) и личного имущества.'
    },
    {
      q: 'Какой срок установлен для рассмотрения жалобы в арбитражном суде?',
      a: 'Согласно ст. 60 Закона о банкротстве жалоба рассматривается судьей в срок не позднее 1 месяца с даты ее поступления в арбитражный суд.'
    },
    {
      q: 'Что делать, если управляющий занижает начальную цену на торгах?',
      a: 'Подается жалоба на действие управляющего по утверждению положения о торгах с одновременным ходатайством о принятии обеспечительных мер в виде запрета проведения торгов до разрешения спора по существу.'
    },
    {
      q: 'Влечет ли удовлетворение жалобы автоматическое исключение из СРО?',
      a: 'При повторном привлечении к административной ответственности по ст. 14.13 КоАП РФ Росреестр и суд вправе применить меру в виде дисквалификации управляющего на срок от 6 месяцев до 3 лет.'
    },
    {
      q: 'Возмещаются ли расходы на юриста при удовлетворении жалобы на АУ?',
      a: 'Да. Судебные расходы, понесенные кредитором при рассмотрении обоснованной жалобы на действия управляющего, взыскиваются непосредственно с арбитражного управляющего как с проигравшей стороны.'
    }
  ];

  const relatedServices = [
    {
      title: 'Представление интересов кредитора',
      desc: 'Комплексный контроль за процедурой банкротства и собраниями кредиторов.',
      link: '/biznesu/bankrotstvo-biznesa/predstavlenie-interesov-kreditora/'
    },
    {
      title: 'Оспаривание сделок при банкротстве',
      desc: 'Подача заявлений об отмене сделок при уклонении конкурсного управляющего.',
      link: '/biznesu/bankrotstvo-biznesa/osparivanie-sdelok-pri-bankrotstve/'
    },
    {
      title: 'Включение в реестр требований',
      desc: 'Установление и защита требований кредитора в арбитражном суде.',
      link: '/biznesu/bankrotstvo-biznesa/vklyuchenie-v-reestr-trebovanij-kreditorov/'
    },
    {
      title: 'Банкротство компании со стороны должника',
      desc: 'Защита предприятия и директора при злоупотреблениях со стороны АУ.',
      link: '/biznesu/bankrotstvo-biznesa/bankrotstvo-kompanii-so-storony-dolzhnika/'
    }
  ];

  return (
    <>
      <Header />

      {/* ═══ БЛОК 1: HERO ═══ */}
      <MilitaryHero
        breadcrumbs={
          <>
            <Link href="/">Главная</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/biznesu/">Бизнесу</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/biznesu/bankrotstvo-biznesa/">Банкротство бизнеса</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Обжалование действий управляющего</span>
          </>
        }
        superTitle={
          <span style={{ whiteSpace: 'normal', display: 'inline-block', lineHeight: 1.4 }}>
            <span style={{ display: 'inline-block' }}>БАНКРОТСТВО КОМПАНИИ • СУДЕБНЫЙ НАДЗОР ЗА АУ •</span> <br />
            <span style={{ display: 'inline-block' }}>Липецк и Липецкая область</span>
          </span>
        }
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Обжалование действий
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              арбитражного управляющего
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              в Липецке
            </span>
          </span>
        }
        subtitle={
          <div>
            <p style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance', margin: '0 0 16px 0', fontSize: '16px', lineHeight: 1.6 }}>
              Проверим конкретное действие или бездействие, нарушение вашего права и нужный результат. Подготовим судебную жалобу либо обращение в компетентный орган и представим позицию.
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '12px' }}>
              <span style={{ padding: '6px 12px', background: 'rgba(23, 50, 77, 0.08)', border: '1px solid var(--color-border)', fontSize: '12.5px', fontWeight: 600, color: 'var(--color-deep-blue)' }}>
                Управляющий бездействует
              </span>
              <span style={{ padding: '6px 12px', background: 'rgba(23, 50, 77, 0.08)', border: '1px solid var(--color-border)', fontSize: '12.5px', fontWeight: 600, color: 'var(--color-deep-blue)' }}>
                Совершил спорное действие
              </span>
              <span style={{ padding: '6px 12px', background: 'rgba(23, 50, 77, 0.08)', border: '1px solid var(--color-border)', fontSize: '12.5px', fontWeight: 600, color: 'var(--color-deep-blue)' }}>
                Не предоставляет сведения
              </span>
              <span style={{ padding: '6px 12px', background: 'rgba(23, 50, 77, 0.08)', border: '1px solid var(--color-border)', fontSize: '12.5px', fontWeight: 600, color: 'var(--color-deep-blue)' }}>
                Затронуты торги, собрание или расчёты
              </span>
              <span style={{ padding: '6px 12px', background: 'rgba(23, 50, 77, 0.08)', border: '1px solid var(--color-border)', fontSize: '12.5px', fontWeight: 600, color: 'var(--color-deep-blue)' }}>
                Не знаю, куда обращаться
              </span>
            </div>
          </div>
        }
        primaryCtaText="Разобрать действия управляющего"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_primary_cta_obzhalovanie_upravlyayushchego"
        primaryCtaSubtext={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Ответим в течение 15 минут в рабочее время
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              или по телефону: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (910) 350-31-11</a>
            </span>
          </span>
        }
        imageUrl="/images/hero_office.png"
        imageObjectPosition="center 15%"
        trustItems={[
          {
            text: (
              <span>
                <strong>Адресаты жалобы:</strong> арбитражный суд в деле о банкротстве, Росреестр и профильная СРО
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Предмет проверки:</strong> конкретное действие, бездействие, нарушение прав и обязанностей по закону
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Доказательства:</strong> фиксация запросов, подтверждение доставки, проверка отчётов и публикаций
              </span>
            )
          }
        ]}
      />

      {/* ═══ БЛОК 2: ЧТО СДЕЛАТЬ СЕЙЧАС (#urgent) ═══ */}
      <section className="section" id="urgent" style={{ background: 'var(--color-deep-blue)', color: '#FFFFFF', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '60px', height: '2px', background: 'var(--color-gold)' }}></div>
              <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Что сделать сейчас
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 3.8vw, 38px)', color: '#FFFFFF', margin: '0 0 16px 0', lineHeight: 1.25 }}>
              Сначала зафиксируйте нарушение и сохраните доказательства
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.82)', margin: 0, lineHeight: 1.65 }}>
              Пять безопасных действий при нарушении ваших прав арбитражным управляющим:
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '36px' }}>
            {urgentCards.map((card, cIdx) => (
              <div
                key={cIdx}
                className="urgent-card hover-lift"
                style={{
                  background: 'linear-gradient(135deg, #FAF7F2 0%, #F3ECDF 100%)',
                  padding: '26px 22px',
                  borderTop: '4px solid var(--color-gold)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  position: 'relative'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gold)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      Шаг {card.num}
                    </span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B08D57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-deep-blue)', lineHeight: 1.35, fontFamily: 'var(--font-serif)', marginBottom: '10px' }}>
                    {card.title}
                  </div>
                  <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '13.5px', lineHeight: 1.55, margin: 0 }}>
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.08)',
            borderLeft: '4px solid var(--color-gold)',
            padding: '18px 24px',
            marginBottom: '32px',
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '14px',
            lineHeight: 1.6
          }}>
            <strong style={{ color: '#FFFFFF' }}>Важно:</strong> Подготовим запросы и соберём доказательства, необходимые для подтверждения статуса заявителя, спорного действия или бездействия и нарушения его прав. Эмоциональные обращения без документальной фиксации фактов отклоняются судом и надзорными органами.
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
            <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px', marginLeft: '4px' }}>
              Консультация юриста по банкротным спорам
            </span>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: КУДА ОБРАЩАТЬСЯ (#routes) ═══ */}
      <section className="section bg-white" id="routes" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '48px', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <div style={{ width: '40px', height: '2px', background: 'var(--color-primary)' }}></div>
              <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Маршрутизация жалобы
              </span>
            </div>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.25 }}>
              Куда обращаться: пять направлений защиты прав
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textWrap: 'balance' }}>
              Выбор органа или суда строго зависит от нужного результата: процессуальное восстановление прав в деле о банкротстве, профессиональный надзор СРО, административный контроль или взыскание убытков.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {complaintRoutes.map((route, rIdx) => (
              <div
                key={rIdx}
                className="hover-lift"
                style={{
                  background: 'var(--gradient-cream)',
                  border: '1px solid var(--color-border)',
                  borderTop: '4px solid var(--color-primary)',
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 16px rgba(23, 50, 77, 0.04)'
                }}
              >
                <div>
                  <div style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: 'var(--color-gold)',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    marginBottom: '10px'
                  }}>
                    Маршрут 0{rIdx + 1}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', color: 'var(--color-deep-blue)', margin: '0 0 12px 0', lineHeight: 1.35 }}>
                    {route.title}
                  </h3>
                  <p style={{ fontSize: '13.5px', color: 'var(--color-deep-blue)', lineHeight: 1.55, margin: '0 0 12px 0' }}>
                    <strong>Цель:</strong> {route.target}
                  </p>
                </div>
                <div style={{ borderTop: '1px dashed var(--color-border)', paddingTop: '10px', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  <strong style={{ color: 'var(--color-primary)' }}>Ограничение:</strong> {route.notReplace}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: С КАКИМИ СИТУАЦИЯМИ РАБОТАЕМ (#situations) ═══ */}
      <section className="section bg-light" id="situations" style={{ padding: '80px 0', background: 'var(--gradient-cream)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <div style={{ width: '40px', height: '2px', background: 'var(--color-gold)' }}></div>
              <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Предмет проверки
              </span>
            </div>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span style={{ display: 'inline-block' }}>С какими ситуациями</span> <br />
              <span style={{ display: 'inline-block' }}>работаем</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Проверяем факты и выбираем надлежащий процессуальный способ защиты прав участника дела о банкротстве.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '32px' }}>
            {situations.map((sit, idx) => (
              <div
                key={idx}
                className="card hover-lift"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-gold)',
                  borderRadius: '0',
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div>
                  {sit.tag && (
                    <div style={{
                      fontSize: '11.5px',
                      fontWeight: 700,
                      color: 'var(--color-primary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      marginBottom: '12px',
                      background: 'rgba(23, 50, 77, 0.06)',
                      padding: '3px 8px',
                      display: 'inline-block',
                      borderRadius: '2px'
                    }}>
                      {sit.tag}
                    </div>
                  )}

                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '18px',
                    fontWeight: 600,
                    color: 'var(--color-deep-blue)',
                    margin: '0 0 12px 0',
                    lineHeight: 1.35
                  }}>
                    {sit.title}
                  </h3>

                  <p style={{
                    fontSize: '14px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    {sit.desc}
                  </p>
                </div>

                <a
                  href="#form"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--color-primary)',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    marginTop: '20px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-primary)')}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('form');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    else window.location.hash = 'form';
                  }}
                >
                  <span>Разобрать ситуацию</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: ШЕСТЬ КОНТУРОВ АНАЛИЗА НАРУШЕНИЙ (#check) ═══ */}
      <section className="section" id="check" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              <span style={{ display: 'inline-block' }}>Шесть контуров правового</span> <br />
              <span style={{ display: 'inline-block' }}>анализа действий управляющего</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Шесть контрольных факторов, исключающих риск признания жалобы необоснованной или формальной.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', position: 'relative' }}>
            {analysisContours.map((item, idx) => (
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
                  0{idx + 1}
                </div>
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '8px 0 14px 0', lineHeight: 1.35 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: '0 0 12px 0' }}>
                  <strong>Что исследуем:</strong> {item.what}
                </p>
                <p style={{ fontSize: '13.5px', color: 'var(--color-deep-blue)', lineHeight: 1.55, margin: 0, borderTop: '1px dashed var(--color-border)', paddingTop: '10px' }}>
                  <strong>Результат:</strong> {item.why}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 6: ПРАКТИКА И КЕЙСЫ ═══ */}
      <CasesBlock
        title={<><span style={{ display: 'inline-block' }}>Практика обжалования действий</span> <br /><span style={{ display: 'inline-block' }}>арбитражных управляющих</span></>}
        cases={casesData}
        showAllLink="/praktika/"
        showAllText="Смотреть всю практику →"
        showDemoWarning={true}
      />

      {/* ═══ БЛОК 7: ПОРЯДОК РАБОТЫ ═══ */}
      <ProcessBlock
        title="Порядок совместной работы"
        subtitle="Шесть последовательных шагов: от аудита отчетов АУ до реального возмещения убытков."
        alignTitle="center"
        steps={processSteps}
        ctaTitle="Управляющий нарушает ваши права?"
        ctaSubtitle="Передайте отчеты и материалы дела на правовой анализ судебным юристам."
        ctaButtonText="Проверить нарушения"
        ctaButtonHref="#form"
      />

      {/* ═══ БЛОК 8: ТАРИФЫ И СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость обжалования действий управляющего"
        subtitle="Фиксированная стоимость юридических услуг в договоре. Все издержки взыскиваются с АУ."
        tiers={pricingTiers}
        disclaimer="Госпошлина за рассмотрение жалобы, почтовые расходы и стоимость судебных экспертиз оплачиваются отдельно и при удовлетворении требований подлежат взысканию с арбитражного управляющего."
        ctaTitle="Рассчитаем стоимость подачи жалобы"
        ctaSubtitle="Оставьте заявку — юрист проведет предварительный аудит нарушений и подготовит смету."
        ctaButtonText="Рассчитать стоимость"
        ctaButtonLink="#form"
      />

      {/* ═══ БЛОК 9: FAQ ═══ */}
      <FAQBlock
        superTitle="Частые вопросы о жалобах на АУ"
        title={<><span>Вопросы и ответы</span> <br /><span>об обжаловании действий управляющего</span></>}
        subtitle="О порядке подачи по ст. 60, отстранении управляющего, торгах и убытках"
        ctaText="Задать свой вопрос"
        ctaLink="#form"
        faqs={faqItems}
      />

      {/* ═══ БЛОК 10: СМЕЖНЫЕ НАПРАВЛЕНИЯ ПРАКТИКИ ═══ */}
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
              Смежные направления практики
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '24px'
            }}>
              <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px, 3.5vw, 34px)', color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.25, flex: '1 1 480px', minWidth: '280px' }}>
                <span style={{ display: 'inline-block' }}>Связанные процедуры</span> <br /><span style={{ display: 'inline-block' }}>в деле о банкротстве</span>
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
                Комплексная правовая защита прав кредиторов и должников в процедурах банкротства.
              </p>
            </div>
          </div>

          <style dangerouslySetInnerHTML={{ __html: `
            .related-service-card {
              border-top: 3px solid var(--color-primary) !important;
              transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
            }
            .related-service-card:hover {
              border-top: 3px solid var(--color-gold) !important;
              transform: translateY(-6px) !important;
              box-shadow: 0 16px 36px rgba(23, 50, 77, 0.12) !important;
            }
            .related-service-card:hover .card-arrow {
              color: var(--color-gold) !important;
            }
            .related-service-card:hover .card-arrow svg {
              stroke: var(--color-gold) !important;
              transform: translateX(6px) !important;
            }
          `}} />

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
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 11: ФИНАЛЬНАЯ ФОРМА (#form) ═══ */}
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
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Пресеките злоупотребления</span>{' '}
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>управляющего вовремя</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Сообщите номер дела, вашу процессуальную роль и суть допущенного нарушения (торги, затягивание, расходы). Юрист изучит карточку дела и назовёт перспективы жалобы.
              </p>

              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация юриста</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Позвоните нам: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (910) 350-31-11</a>
                </p>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '6px' }}>
                  Липецк, ул. Советская, д. 35, офис 213 (приём по записи)
                </div>
              </div>

              <div style={{ background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Конфиденциальность:</strong>
                Не указывайте в форме конфиденциальные финансовые сведения и коммерческую тайну. Защищённый канал передачи документов согласуем после контакта.
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm
                title="Заявка на проверку действий АУ"
                subtitle="Оставьте контакты и номер дела — юрист свяжется с вами в течение 15 минут в рабочее время."
                subtext="Если вы оставите заявку вечером или в выходной день, мы свяжемся с вами в ближайший рабочий день."
                buttonText="Разобрать действия управляющего"
                commentPlaceholder="Кратко укажите суть нарушений: торги, затягивание, непредставление отчетов…"
                hiddenFields={[
                  { name: 'source_page', value: '/biznesu/bankrotstvo-biznesa/obzhalovanie-dejstvij-arbitrazhnogo-upravlyayushchego/' },
                  { name: 'service', value: 'Обжалование действий арбитражного управляющего' }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 12: FOOTER ═══ */}
      <Footer />
    </>
  );
}
