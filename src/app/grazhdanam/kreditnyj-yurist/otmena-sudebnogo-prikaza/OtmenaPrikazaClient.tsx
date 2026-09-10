'use client';

import React, { useState } from 'react';
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

export default function OtmenaPrikazaClient() {
  const [activeDeadlineTab, setActiveDeadlineTab] = useState<'received' | 'bank' | 'bailiff' | 'late'>('received');
  const [copied, setCopied] = useState(false);

  const jsonLdGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/grazhdanam/kreditnyj-yurist/otmena-sudebnogo-prikaza/#service',
        name: 'Отмена судебного приказа по кредиту или займу',
        url: 'https://dejure-help.ru/grazhdanam/kreditnyj-yurist/otmena-sudebnogo-prikaza/',
        serviceType: 'Отмена судебного приказа мирового судьи по кредитам и займам',
        areaServed: {
          '@type': 'AdministrativeArea',
          name: 'Липецк и Липецкая область'
        },
        provider: {
          '@id': 'https://dejure-help.ru/#organization'
        },
        description: 'Помощь юриста по отмене судебного приказа: проверка десятидневного срока, подготовка возражений, обоснование причин поздней подачи и прекращение исполнительного производства.'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/grazhdanam/kreditnyj-yurist/otmena-sudebnogo-prikaza/#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://dejure-help.ru/' },
          { '@type': 'ListItem', position: 2, name: 'Гражданам', item: 'https://dejure-help.ru/grazhdanam/' },
          { '@type': 'ListItem', position: 3, name: 'Кредитный юрист', item: 'https://dejure-help.ru/grazhdanam/kreditnyj-yurist/' },
          { '@type': 'ListItem', position: 4, name: 'Отмена судебного приказа', item: 'https://dejure-help.ru/grazhdanam/kreditnyj-yurist/otmena-sudebnogo-prikaza/' }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/grazhdanam/kreditnyj-yurist/otmena-sudebnogo-prikaza/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'За сколько дней можно отменить судебный приказ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'По общему правилу должник вправе представить возражения в течение 10 дней со дня получения копии приказа. Начало срока зависит от обстоятельств вручения, поэтому нужно проверить конверт, трек и материалы дела, а не только дату на приказе.'
            }
          },
          {
            '@type': 'Question',
            name: 'Нужно ли объяснять, почему я не согласен с долгом?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Если возражения поступают в установленный срок, достаточно указать на несогласие с исполнением приказа. Полный спор о договоре, платежах и расчёте рассматривается, если кредитор затем предъявит иск.'
            }
          },
          {
            '@type': 'Question',
            name: 'Что делать, если десять дней уже прошли?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Подать поздние возражения возможно, если обосновать невозможность обратиться вовремя по причинам, не зависевшим от Вас, и приложить подтверждающие документы. Суд оценивает причины и доказательства в конкретном деле.'
            }
          },
          {
            '@type': 'Question',
            name: 'Я не получал письмо из суда. Это гарантирует отмену?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Нет. Суд проверит, куда и как направлялась копия, истёк ли срок хранения и зависело ли неполучение от должника. Поэтому сначала нужны материалы дела и сведения о доставке.'
            }
          },
          {
            '@type': 'Question',
            name: 'Можно ли отменить приказ через Госуслуги?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Сам факт обращения через Госуслуги не заменяет подачу возражений в суд, вынесший приказ. Возможность электронной подачи зависит от доступного официального сервиса и требований к документу; важно получить подтверждение поступления.'
            }
          },
          {
            '@type': 'Question',
            name: 'Куда подавать заявление?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Возражения направляют мировому судье, который вынес приказ. Перед подачей проверяют номер участка, номер дела, реквизиты и допустимый способ направления.'
            }
          },
          {
            '@type': 'Question',
            name: 'Отмена приказа списывает долг?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Нет. Отменяется конкретный судебный приказ. Кредитор вправе предъявить требование в исковом производстве, где можно спорить с договором, расчётом, платежами, уступкой и неустойкой.'
            }
          },
          {
            '@type': 'Question',
            name: 'Что будет с исполнительным производством?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'После отмены приказа определение передают приставу. Отмена судебного акта является основанием для прекращения производства; пристав отменяет применённые меры и ограничения в установленном порядке.'
            }
          },
          {
            '@type': 'Question',
            name: 'Вернут ли деньги, которые уже списали?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Не автоматически. Отдельно оценивается поворот исполнения судебного приказа и наличие последующего иска. Для анализа нужны определение об отмене и документы о взысканных суммах.'
            }
          },
          {
            '@type': 'Question',
            name: 'Сколько суд рассматривает возражения?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Закон устанавливает срок направления сторонам копий определения об отмене — не позднее трёх дней после его вынесения, но не устанавливает универсальный срок вынесения самого определения. Фактический срок контролируют по конкретному судебному участку.'
            }
          }
        ]
      }
    ]
  };

  const deadlineStates = [
    {
      id: 'received',
      title: 'Получил копию недавно',
      desc: 'Не откладывайте подготовку: проверим последний день срока и способ подачи с подтверждением отправки.',
      cta: 'Проверить срок',
      badge: 'В пределах 10 дней'
    },
    {
      id: 'bank',
      title: 'Узнал из банка',
      desc: 'Списание или арест счёта не доказывают, что срок автоматически начинается сегодня. Нужны копия приказа и сведения о его направлении.',
      cta: 'Разобрать документы',
      badge: 'Арест счетов'
    },
    {
      id: 'bailiff',
      title: 'Узнал от пристава',
      desc: 'Проверяем судебный приказ, дату и адрес отправки, материалы дела и исполнительное производство. Отмена происходит в суде, а прекращение исполнения — отдельным действием.',
      cta: 'Проверить два трека',
      badge: 'ИП у приставов'
    },
    {
      id: 'late',
      title: 'Срок, вероятно, пропущен',
      desc: 'Поздние возражения возможны, если доказать невозможность обратиться вовремя по причинам, не зависевшим от должника. Одного объяснения без документов может быть недостаточно.',
      cta: 'Оценить основания',
      badge: 'Поздняя подача'
    }
  ];

  const comparisonItems = [
    {
      gives: 'Прекращение действия конкретного судебного приказа.',
      notMeans: 'Автоматическое списание кредита или займа.'
    },
    {
      gives: 'Переход возможного спора в исковое состязательное производство.',
      notMeans: 'Запрет кредитору обращаться в суд с иском.'
    },
    {
      gives: 'Законное основание прекратить исполнительное производство по ст. 43 № 229-ФЗ.',
      notMeans: 'Мгновенное снятие всех ограничений без передачи определения приставу.'
    },
    {
      gives: 'Возможность отдельно заявить поворот исполнения уже взысканных денег.',
      notMeans: 'Автоматический возврат каждой списанной суммы без судебного заявления.'
    }
  ];

  const situations = [
    {
      tag: 'Письмо из суда',
      title: <>Приказ пришёл <br />из судебного участка</>,
      desc: 'Нужно проверить дату получения, судебный участок, номер дела, взыскателя и подать возражения с подтверждением отправки.'
    },
    {
      tag: 'Арест или списание',
      title: <>Банк арестовал счета <br />или списал деньги</>,
      desc: 'Сначала устанавливаем основание взыскания и получаем судебный приказ. Затем проверяем доставку копии и процессуальный маршрут.'
    },
    {
      tag: 'ФССП и приставы',
      title: <>Пристав возбудил <br />исполнительное производство</>,
      desc: 'Работа идёт параллельно: возражения подаются мировому судье, а после отмены определение передаётся приставу для прекращения производства.'
    },
    {
      tag: 'Неполучение копии',
      title: <>Письмо направили <br />на старый адрес</>,
      desc: 'Проверяем материалы дела, почтовое отправление и причины отсутствия. Для поздней подачи собираем подтверждающие документы.'
    },
    {
      tag: 'Несогласие с суммой',
      title: <>Сумма долга <br />не совпадает с платежами</>,
      desc: 'Отмена приказа возвращает спор в состязательный порядок; детальный контррасчет и платежи готовятся для возможного иска.'
    },
    {
      tag: 'Неизвестный займ / МФО',
      title: <>Приказ вынесен <br />по неизвестному микрозайму</>,
      desc: 'Фиксируем несогласие, запрашиваем договор и сведения об оформлении; дальнейшая защита зависит от доказательств заключения договора.'
    }
  ];

  const lawyerActions = [
    {
      num: '01',
      title: 'Установит процессуальную картину',
      desc: 'Определит суд, номер дела, дату приказа, взыскателя, способ и стадию исполнения.'
    },
    {
      num: '02',
      title: 'Проверит начало и окончание срока',
      desc: 'Сопоставит дату получения, почтовое отслеживание, адрес отправки и календарь процессуальных дней.'
    },
    {
      num: '03',
      title: 'Получит недостающие материалы',
      desc: 'Сформирует перечень документов из суда, ФССП, банка и почтовой организации.'
    },
    {
      num: '04',
      title: 'Подготовит возражения',
      desc: 'Оформит реквизиты, несогласие, просьбу об отмене, приложения и способ подачи.'
    },
    {
      num: '05',
      title: 'Обоснует позднюю подачу',
      desc: 'Свяжет причины пропуска с подтверждающими документами и периодом, когда обращение было невозможно.'
    },
    {
      num: '06',
      title: 'Проконтролирует определение',
      desc: 'Проверит вынесение и получение определения об отмене; оперативно отследит отправку копий сторонам.'
    },
    {
      num: '07',
      title: 'Сопроводит действия после отмены',
      desc: 'Подготовит документы приставу или в банк, оценит поворот исполнения и риск последующего иска.'
    }
  ];

  const practiceCases: CaseData[] = [
    {
      category: 'Своевременная подача / Банк',
      title: 'Отменили приказ банка на 438 600 ₽ в пределах срока',
      problem: 'Клиент получил копию приказа о взыскании задолженности по потребительскому кредиту. До окончания срока оставалось несколько дней. В расчёте банка клиент увидел платежи, которые, по его мнению, были учтены неверно.',
      action: 'Проверили дату вручения и реквизиты судебного участка, подготовили возражения относительно исполнения приказа и направили их способом, позволяющим подтвердить дату подачи. Отдельно сохранили расчёт и подтверждения платежей для возможного искового производства.',
      result: 'Мировой судья отменил судебный приказ. Взыскание по этому приказу не началось. Клиент получил время подготовить доказательства и позицию на случай предъявления банком иска.'
    },
    {
      category: 'Поздние возражения / Поворот исполнения',
      title: 'Суд принял поздние возражения, отменил приказ и вернул клиенту 54 200 ₽',
      problem: 'Клиент узнал о приказе МФО после списания 54 200 ₽ со счёта. Копию приказа направляли по прежнему адресу в период, когда клиент переехал и проходил длительное лечение. Исполнительное производство уже было возбуждено.',
      action: 'Получили копию приказа и сведения о почтовом отправлении, собрали документы о смене места жительства и лечении, подготовили поздние возражения с обоснованием причин. После отмены передали определение приставу и отдельно подали заявление о повороте исполнения.',
      result: 'Суд принял возражения и отменил приказ. Пристав прекратил исполнительное производство и снял ограничения. Суд разрешил поворот исполнения, после чего 54 200 ₽ вернулись клиенту.'
    },
    {
      category: 'Солидарные должники / Поручительство',
      title: 'Отменили один приказ в отношении заёмщика и поручителя на 472 000 ₽',
      problem: 'Банк получил судебный приказ о солидарном взыскании долга с заёмщика и поручителя. Копию вовремя получил только поручитель; стороны не соглашались с итоговым расчётом и размером неустойки.',
      action: 'Проверили срок получения поручителем, подготовили и подали возражения от одного из солидарных должников. Одновременно собрали договор поручительства, выписки и расчёт для последующей защиты по существу.',
      result: 'Мировой судья отменил судебный приказ в отношении обоих должников. Банк сохранил право предъявить иск, а заёмщик и поручитель получили возможность заявить возражения и представить доказательства в обычном судебном разбирательстве.'
    }
  ];

  const processSteps: ProcessStep[] = [
    {
      num: '01',
      title: 'Обращение и фиксация',
      desc: 'Фиксируем суд, взыскателя, сумму, дату получения копии или дату первого обнаружения списания/ареста.'
    },
    {
      num: '02',
      title: 'Проверка документов',
      desc: 'Изучаем приказ, конверт, трек-номер, материалы судебного участка, ФССП и банковские уведомления.'
    },
    {
      num: '03',
      title: 'Выбор процессуального маршрута',
      desc: 'Определяем правовой путь: возражения в срок, поздние возражения с доказательствами, прекращение исполнения или поворот исполнения.'
    },
    {
      num: '04',
      title: 'Подготовка возражений',
      desc: 'Оформляем процессуальный документ со ссылками на ст. 129 ГПК РФ, формируем приложения и подробную инструкцию по подаче.'
    },
    {
      num: '05',
      title: 'Подача и процессуальный контроль',
      desc: 'Сохраняем подтверждение поступления документов в суд, отслеживаем вынесение и отправку определения об отмене.'
    },
    {
      num: '06',
      title: 'Действия после отмены',
      desc: 'Передаём определение приставу или в банк, контролируем постановление о прекращении ИП и оцениваем поворот исполнения.'
    },
    {
      num: '07',
      title: 'Защита при исковом производстве',
      desc: 'Если кредитор затем предъявит иск в районный суд, отдельно формируем состязательную позицию по договору и расчету.'
    }
  ];

  const documentGroups = [
    {
      title: 'Сведения о суде и деле',
      items: ['Копия судебного приказа', 'Почтовый конверт с штемпелем', 'Почтовое извещение или трек-номер', 'Номер судебного участка и номер дела']
    },
    {
      title: 'Как узнали о взыскании',
      items: ['Дата фактического получения письма', 'Уведомление от банка или Госуслуг', 'СМС или постановление ФССП', 'Скриншоты списаний со счетов']
    },
    {
      title: 'Исполнительное производство',
      items: ['Постановление о возбуждении ИП', 'Номер исполнительного производства', 'Постановление об аресте счетов / имущества', 'Выписка по удержанным суммам']
    },
    {
      title: 'При пропуске срока',
      items: ['Справка о лечении / госпитализации', 'Приказ о командировке / путевой лист', 'Документы о смене адреса / регистрации', 'Справка почты о нарушении правил доставки']
    },
    {
      title: 'Кредитные документы',
      items: ['Кредитный договор / договор займа', 'График платежей и квитанции об оплате', 'Выписка по счету кредита', 'Уведомление об уступке долга (цессии)']
    }
  ];

  const afterCancelScenarios = [
    {
      title: 'Кредитор не обращался к приставам',
      desc: 'После отмены приказ утрачивает силу исполнительного документа. Сохраняем определение суда и отслеживаем возможную подачу иска.',
      tag: 'Исполнение не начато'
    },
    {
      title: 'Производство находится у пристава',
      desc: 'Отмена приказа является законным основанием для прекращения ИП по ст. 43 Закона № 229-ФЗ. Определение передаётся приставу для снятия всех арестов.',
      tag: 'ФССП'
    },
    {
      title: 'Приказ передан напрямую в банк',
      desc: 'Устанавливаем, какой документ исполняет банк, и направляем заверенную копию определения об отмене в банк для немедленной разблокировки счетов.',
      tag: 'Банк'
    },
    {
      title: 'Деньги уже взысканы или удержаны',
      desc: 'Отдельно оцениваем возможность поворота исполнения судебного приказа (ст. 443 ГПК РФ) для возврата удержанных средств, если банк еще не подал иск.',
      tag: 'Поворот исполнения'
    },
    {
      title: 'Кредитор подал исковое заявление',
      desc: 'Отмена приказа переводит спор в исковой порядок. Проверяем договор, сроки исковой давности, расчет платежей, проценты и неустойку по ст. 333 ГК РФ.',
      tag: 'Исковой спор'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Проверка приказа и срока',
      subtitle: 'Первичный правовой аудит ситуации',
      popular: false,
      price: 'от 2 500 ₽',
      features: [
        { name: 'Правовой анализ копии судебного приказа', value: 'Включено' },
        { name: 'Проверка даты вручения и календаря сроков', value: 'Включено' },
        { name: 'Аудит базы ФССП и открытых производств', value: 'Включено' },
        { name: 'Выбор оптимального процессуального маршрута', value: 'Включено' }
      ],
      buttonText: 'Уточнить стоимость',
      buttonHref: '#form'
    },
    {
      title: 'Возражения в пределах срока',
      subtitle: 'Подготовка и подача в течение 10 дней',
      popular: true,
      badgeText: 'Популярная услуга',
      price: 'от 4 500 ₽',
      features: [
        { name: 'Составление возражений по ст. 129 ГПК РФ', value: 'Включено' },
        { name: 'Формирование приложений и реквизитов суда', value: 'Включено' },
        { name: 'Направление в суд с подтверждением вручения', value: 'Включено' },
        { name: 'Контроль вынесения определения об отмене', value: 'Включено' }
      ],
      buttonText: 'Заказать отмену',
      buttonHref: '#form'
    },
    {
      title: 'Поздняя подача и поворот',
      subtitle: 'При пропуске срока или начатом взыскании',
      popular: false,
      price: 'от 7 500 ₽',
      features: [
        { name: 'Сбор доказательств уважительности причин пропуска', value: 'Включено' },
        { name: 'Подготовка поздних возражений с правовым обоснованием', value: 'Включено' },
        { name: 'Передача определения в ФССП для прекращения ИП', value: 'Включено' },
        { name: 'Составление заявления о повороте исполнения (возврат денег)', value: 'Включено' }
      ],
      buttonText: 'Оценить ситуацию',
      buttonHref: '#form'
    }
  ];

  const faqs = [
    {
      q: 'За сколько дней можно отменить судебный приказ?',
      a: 'По общему правилу должник вправе представить возражения в течение 10 дней со дня получения копии приказа. Начало срока зависит от обстоятельств вручения, поэтому нужно проверить конверт, трек и материалы дела, а не только дату на приказе.'
    },
    {
      q: 'Нужно ли объяснять, почему я не согласен с долгом?',
      a: 'Если возражения поступают в установленный срок, достаточно указать на несогласие с исполнением приказа. Полный спор о договоре, платежах и расчёте рассматривается, если кредитор затем предъявит иск.'
    },
    {
      q: 'Что делать, если десять дней уже прошли?',
      a: 'Подать поздние возражения возможно, если обосновать невозможность обратиться вовремя по причинам, не зависевшим от Вас, и приложить подтверждающие документы. Суд оценивает причины и доказательства в конкретном деле.'
    },
    {
      q: 'Я не получал письмо из суда. Это гарантирует отмену?',
      a: 'Нет. Суд проверит, куда и как направлялась копия, истёк ли срок хранения и зависело ли неполучение от должника. Поэтому сначала нужны материалы дела и сведения о доставке.'
    },
    {
      q: 'Можно ли отменить приказ через Госуслуги?',
      a: 'Сам факт обращения через Госуслуги не заменяет подачу возражений в суд, вынесший приказ. Возможность электронной подачи зависит от доступного официального сервиса и требований к документу; важно получить подтверждение поступления.'
    },
    {
      q: 'Куда подавать заявление?',
      a: 'Возражения направляют мировому судье, который вынес приказ. Перед подачей проверяют номер участка, номер дела, реквизиты и допустимый способ направления.'
    },
    {
      q: 'Отмена приказа списывает долг?',
      a: 'Нет. Отменяется конкретный судебный приказ. Кредитор вправе предъявить требование в исковом производстве, где можно спорить с договором, расчётом, платежами, уступкой и неустойкой.'
    },
    {
      q: 'Что будет с исполнительным производством?',
      a: 'После отмены приказа определение передают приставу. Отмена судебного акта является основанием для прекращения производства; пристав отменяет применённые меры и ограничения в установленном порядке.'
    },
    {
      q: 'Вернут ли деньги, которые уже списали?',
      a: 'Не автоматически. Отдельно оценивается поворот исполнения судебного приказа и наличие последующего иска. Для анализа нужны определение об отмене и документы о взысканных суммах.'
    },
    {
      q: 'Сколько суд рассматривает возражения?',
      a: 'Закон устанавливает срок направления сторонам копий определения об отмене — не позднее трёх дней после его вынесения, но не устанавливает универсальный срок вынесения самого определения. Фактический срок контролируют по конкретному судебному участку.'
    }
  ];

  const handleCopySample = () => {
    const sampleText = `Мировому судье судебного участка № [номер судебного участка]
От: [ФИО должника полностью]
Адрес: [Индекс, адрес регистрации и фактического проживания]
Телефон: [Номер телефона]

ВОЗРАЖЕНИЯ
относительно исполнения судебного приказа

[Дата вынесения] мировым судьёй судебного участка № [номер] вынесен судебный приказ № [номер дела] о взыскании с меня в пользу [наименование взыскателя / банка / МФО] денежных средств в размере [сумма] руб.

С исполнением указанного судебного приказа не согласен.

На основании статьи 129 Гражданского процессуального кодекса РФ,

ПРОШУ:
Отменить судебный приказ № [номер дела] от [дата вынесения] о взыскании задолженности в пользу [наименование взыскателя].

Приложения:
1. Копия судебного приказа (при наличии).
2. Копия конверта / почтового извещения с отметкой о дате получения.

«___» ________ 202_ г.                 ___________ / [Фамилия И.О.] /`;
    navigator.clipboard.writeText(sampleText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />
      <Header />

      {/* ═══ БЛОК 1: HERO ═══ */}
      <MilitaryHero
        breadcrumbs={
          <>
            <Link href="/">Главная</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/grazhdanam/">Гражданам</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/grazhdanam/kreditnyj-yurist/">Кредитный юрист</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Отмена судебного приказа</span>
          </>
        }
        superTitle="Судебный приказ • срок 10 дней"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Отмена судебного приказа
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              по кредиту или займу
            </span>
          </span>
        }
        subtitle="Проверим, когда начался срок, подготовим возражения и направим их мировому судье. Если приказ уже у приставов или срок пропущен, отдельно соберём основания и документы для принятия поздних возражений."
        primaryCtaText="Проверить срок и документы"
        primaryCtaLink="#form"
        primaryCtaAnalytics="co_hero_primary_click"
        primaryCtaSubtext={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Сообщите дату получения приказа или дату,
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              когда Вы впервые узнали о взыскании
            </span>
          </span>
        }
        imageUrl="/images/nacheshnikov.jpg"
        imageName="Владимир Викторович Начешников"
        imageSubtitle="Специалист по корпоративным процедурам и защите заемщиков, куратор направления"
        imageObjectPosition="center 15%"
        trustItems={[
          {
            text: (
              <span>
                <strong>Определяем суд и номер дела:</strong> проверяем фактическую доставку и исчисление 10 дней
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Практический опыт с 1997 года</strong> в защите прав заёмщиков и отмене судебных актов
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Два параллельных трека:</strong> отмена в суде и прекращение исполнительного производства в ФССП
              </span>
            )
          }
        ]}
      />

      {/* ═══ ДИСКЛЕЙМЕР ПОД HERO ═══ */}
      <section style={{ background: 'var(--color-cream)', borderBottom: '1px solid var(--color-border)', padding: '16px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', justifyContent: 'center', textAlign: 'center', flexWrap: 'wrap' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <span style={{ fontSize: '14px', color: 'var(--color-deep-blue)', fontWeight: 500 }}>
              <strong>Важно знать:</strong> Отправка заявки не отменяет приказ, не останавливает исполнение и не заменяет подачу процессуального документа в суд.
            </span>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 2: СРОЧНЫЙ БЛОК «ПРОВЕРЬТЕ СРОК» ═══ */}
      <section className="section bg-white" id="deadline" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto 48px', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '32px', height: '1px', backgroundColor: 'var(--color-primary)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '12px', color: 'var(--color-primary)', fontWeight: 600 }}>
                Срочная диагностика
              </span>
              <div style={{ width: '32px', height: '1px', backgroundColor: 'var(--color-primary)' }}></div>
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--color-deep-blue)', margin: '0 0 16px', lineHeight: 1.25 }}>
              Когда Вы получили копию судебного приказа?
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.65, margin: 0 }}>
              По общему правилу возражения подаются в течение 10 дней со дня получения копии приказа. Срок нельзя считать только по дате на документе: важны вручение, сведения почты и обстоятельства получения.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '24px', maxWidth: '1000px', margin: '0 auto' }}>
            {deadlineStates.map((st) => (
              <div
                key={st.id}
                className="hover-lift"
                style={{
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', background: 'rgba(23,50,77,0.06)', padding: '4px 10px' }}>
                      {st.badge}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 12px', lineHeight: 1.3 }}>
                    {st.title}
                  </h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: '0 0 24px' }}>
                    {st.desc}
                  </p>
                </div>
                <div>
                  <a
                    href="#form"
                    className="btn btn-outline"
                    style={{ width: '100%', textAlign: 'center', padding: '12px 20px', fontSize: '14px', fontWeight: 600 }}
                  >
                    {st.cta} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: ЧТО ТАКОЕ СУДЕБНЫЙ ПРИКАЗ И ЧТО ДАЕТ ОТМЕНА ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--color-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '850px', marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-primary)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '12px', color: 'var(--color-primary)' }}>
                Процессуальный статус
              </span>
            </div>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 3.5vw, 38px)', color: 'var(--color-deep-blue)', margin: '0 0 16px', lineHeight: 1.25 }}>
              Приказ выносят без заседания — поэтому возражения меняют порядок спора
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.65, margin: 0 }}>
              Судебный приказ мировой судья выносит единолично, без судебного разбирательства и без вызова заёмщика. При своевременном поступлении возражений судья обязан отменить приказ. Кредитор после этого вправе обратиться с иском, где стороны уже представляют расчёты, доказательства и спорят по существу.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '28px' }}>
            {/* Колонка 1: Отмена даёт */}
            <div style={{ background: 'var(--color-white)', border: '1px solid var(--color-border)', borderTop: '4px solid #2E7D32', padding: '36px 30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#E8F5E9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2E7D32', fontWeight: 'bold' }}>
                  ✓
                </div>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: '#2E7D32', margin: 0 }}>
                  Отмена приказа даёт:
                </h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {comparisonItems.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.5 }}>
                    <span style={{ color: '#2E7D32', fontWeight: 'bold', flexShrink: 0 }}>•</span>
                    <span>{item.gives}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Колонка 2: Отмена не означает */}
            <div style={{ background: 'var(--color-white)', border: '1px solid var(--color-border)', borderTop: '4px solid #C62828', padding: '36px 30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#FFEBEE', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C62828', fontWeight: 'bold' }}>
                  ✕
                </div>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: '#C62828', margin: 0 }}>
                  Отмена не означает:
                </h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {comparisonItems.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    <span style={{ color: '#C62828', fontWeight: 'bold', flexShrink: 0 }}>•</span>
                    <span>{item.notMeans}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: ТИПОВЫЕ СИТУАЦИИ ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '48px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '24px' }}>
              <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.25, flex: '1 1 480px', minWidth: '280px' }}>
                <span style={{ display: 'inline-block' }}>Типовые ситуации, в которых</span> <br />
                <span style={{ display: 'inline-block' }}>требуется отмена приказа</span>
              </h2>
              <p style={{ flex: '0 1 440px', minWidth: '280px', fontSize: '15.5px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.65, margin: 0, paddingTop: '4px', textAlign: 'right' }}>
                <span style={{ display: 'inline-block' }}>Поможем оперативно отменить приказ</span> <br />
                <span style={{ display: 'inline-block' }}>и выстроить правовую защиту при спорах</span> <br />
                <span style={{ display: 'inline-block' }}>с банками, МФО и коллекторами.</span>
              </p>
            </div>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '32px' }}>
            {situations.map((sit, idx) => (
              <div
                key={idx}
                className="hover-lift"
                style={{
                  padding: '36px 30px',
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                  position: 'relative'
                }}
              >
                <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '14px' }}>
                  {sit.tag}
                </span>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.35 }}>
                  {sit.title}
                </h3>
                <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {sit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 5: СРОК НЕ ПРОПУЩЕН И СРОК ПРОПУЩЕН ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--color-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-primary)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '12px', color: 'var(--color-primary)' }}>
                Два процессуальных маршрута
              </span>
            </div>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--color-deep-blue)', margin: '0 0 16px', lineHeight: 1.25 }}>
              Своевременные возражения и поздняя подача
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.65, margin: 0 }}>
              Порядок действий кардинально отличается в зависимости от того, уложились ли Вы в 10 дней с момента вручения письма или срок был пропущен.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '28px' }}>
            {/* Маршрут 1 */}
            <div style={{ background: 'var(--color-white)', padding: '36px 30px', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-primary)' }}>
              <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '12px' }}>
                Маршрут 1 • В пределах 10 дней
              </span>
              <h3 style={{ fontSize: '22px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 16px' }}>
                Возражения в установленный срок
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.65, marginBottom: '16px' }}>
                По закону (ст. 129 ГПК РФ) для отмены приказа <strong>достаточно выразить свое несогласие</strong> с его исполнением. На этой стадии не требуется доказывать весь кредитный спор, расчеты или недействительность договора.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14.5px', color: 'var(--color-deep-blue)' }}>
                <li>✓ Обязательно проверяем реквизиты мирового судьи и номер дела</li>
                <li>✓ Оформляем подпись и перечень приложений</li>
                <li>✓ Подаем способом с железной фиксацией даты (почта с описью / канцелярия)</li>
              </ul>
            </div>

            {/* Маршрут 2 */}
            <div style={{ background: 'var(--color-white)', padding: '36px 30px', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-primary)' }}>
              <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '12px' }}>
                Маршрут 2 • Срок пропущен
              </span>
              <h3 style={{ fontSize: '22px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 16px' }}>
                Поздние возражения с доказательствами
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.65, marginBottom: '16px' }}>
                Суд рассматривает поздние возражения только при <strong>обосновании причин, не зависевших от должника</strong>, и документальном подтверждении невозможности подать их вовремя (Постановление Пленума ВС РФ № 62).
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14.5px', color: 'var(--color-deep-blue)' }}>
                <li>✓ Подаются не позднее 10 дней с момента отпадения препятствий</li>
                <li>✓ Доказательства: болезнь, командировка, отпуск, смена адреса, сбои доставки</li>
                <li>✓ К возражениям прикладывается полный пакет подтверждающих документов</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 6: СТРУКТУРА ВОЗРАЖЕНИЙ И HTML-ОБРАЗЕЦ ═══ */}
      <section className="section bg-white" id="sample" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '850px', marginBottom: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-primary)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '12px', color: 'var(--color-primary)' }}>
                Процессуальный образец
              </span>
            </div>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--color-deep-blue)', margin: '0 0 16px', lineHeight: 1.25 }}>
              Что должно быть в возражениях
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.65, margin: 0 }}>
              Возражения подаются в простой письменной форме мировому судье. Документ должен содержать точные реквизиты судебного участка, номер дела, сведения о взыскателе, должнике и прямое указание на несогласие с исполнением.
            </p>
          </div>

          {/* Callout с образцом */}
          <div style={{ background: '#F8F9FA', border: '1px solid var(--color-border)', padding: '36px 32px', position: 'relative', marginBottom: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px', borderBottom: '1px solid var(--color-border)', paddingBottom: '12px' }}>
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-deep-blue)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Базовый текст возражений (если 10-дневный срок не пропущен)
              </span>
              <button
                type="button"
                onClick={handleCopySample}
                style={{
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  padding: '6px 14px',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'var(--color-primary)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                {copied ? '✓ Текст скопирован' : ' Скопировать образец'}
              </button>
            </div>

            <pre style={{
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              fontFamily: 'inherit',
              fontSize: '14.5px',
              color: 'var(--color-deep-blue)',
              lineHeight: 1.65,
              margin: 0,
              background: 'transparent'
            }}>
{`Мировому судье судебного участка № [номер судебного участка]
От: [ФИО должника полностью]
Адрес: [Индекс, адрес регистрации и фактического проживания]
Телефон: [Номер телефона]

ВОЗРАЖЕНИЯ
относительно исполнения судебного приказа

[Дата вынесения] мировым судьёй судебного участка № [номер] вынесен судебный приказ № [номер дела] о взыскании с меня в пользу [наименование взыскателя / банка / МФО] денежных средств в размере [сумма] руб.

С исполнением указанного судебного приказа не согласен.

На основании статьи 129 Гражданского процессуального кодекса РФ,

ПРОШУ:
Отменить судебный приказ № [номер дела] от [дата вынесения] о взыскании задолженности в пользу [наименование взыскателя].

Приложения:
1. Копия судебного приказа (при наличии).
2. Копия конверта / почтового извещения с отметкой о дате получения.

«___» ________ 202_ г.                 ___________ / [Фамилия И.О.] /`}
            </pre>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', background: 'var(--color-cream)', padding: '24px 28px', borderLeft: '4px solid var(--color-primary)' }}>
            <div style={{ flex: '1 1 500px' }}>
              <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px', fontSize: '15px' }}>
                Внимание!
              </strong>
              <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                Этот стандартный образец <strong>не подходит</strong> для пропущенного срока, спорной доставки, солидарных должников или уже начавшегося взыскания у приставов без специального правового обоснования.
              </span>
            </div>
            <a href="#form" className="btn btn-primary" style={{ padding: '12px 24px', fontSize: '14px', whiteSpace: 'nowrap' }}>
              Проверить возражения перед подачей
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 7: ЧТО СДЕЛАЕТ КРЕДИТНЫЙ ЮРИСТ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--color-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-primary)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '12px', color: 'var(--color-primary)' }}>
                Профессиональная помощь
              </span>
            </div>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--color-deep-blue)', margin: '0 0 16px', lineHeight: 1.25 }}>
              Что сделает кредитный юрист «Де-Юре»
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.65, margin: 0 }}>
              Комплексное процессуальное сопровождение от правового анализа до отмены приказа и прекращения исполнительного производства.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px' }}>
            {lawyerActions.map((act, idx) => (
              <div
                key={idx}
                className="hover-lift"
                style={{
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  padding: '30px 24px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ fontSize: '24px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', fontWeight: 'bold', marginBottom: '12px' }}>
                  {act.num}
                </div>
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px', lineHeight: 1.3 }}>
                  {act.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {act.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 8: ПРАКТИКА И КЕЙСЫ ═══ */}
      <CasesBlock
        cases={practiceCases}
        title="Практика отмены судебных приказов"
        showAllLink="/praktika"
        showAllText="Смотреть всю практику"
      />

      {/* ═══ БЛОК 9: ПОШАГОВЫЙ ПРОЦЕСС ═══ */}
      <ProcessBlock
        title="Как проходит работа по отмене приказа"
        subtitle="Четкий алгоритм действий от первой консультации и составления возражений до прекращения взыскания у приставов."
        steps={processSteps}
        ctaTitle="Узнали о судебном приказе?"
        ctaSubtitle="Оставьте заявку — куратор направления проверит срок и подготовит процессуальные возражения."
        ctaButtonText="Проверить документы"
        ctaButtonHref="#form"
      />

      {/* ═══ БЛОК 10: ЧТО ПОДГОТОВИТЬ ═══ */}
      <section className="section bg-white" id="documents" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-primary)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '12px', color: 'var(--color-primary)' }}>
                Пакет документов
              </span>
            </div>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--color-deep-blue)', margin: '0 0 16px', lineHeight: 1.25 }}>
              Что подготовить для консультации
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.65, margin: 0 }}>
              Чем полнее исходные сведения, тем точнее юрист рассчитает сроки и подготовит возражения. Если каких-то документов нет, мы поможем запросить их в суде или ФССП.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '32px' }}>
            {documentGroups.map((grp, idx) => (
              <div key={idx} style={{ background: 'var(--color-cream)', padding: '30px 24px', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)' }}>
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 16px', lineHeight: 1.3 }}>
                  {grp.title}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {grp.items.map((item, itemIdx) => (
                    <li key={itemIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ background: '#F8F9FA', padding: '20px 24px', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              <strong>Конфиденциальность:</strong> Мы не запрашиваем загрузку паспортов и банковских выписок через открытую форму сайта. Передача конфиденциальных документов согласуется со специалистом по защищенным каналам.
            </span>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 11: ЧТО ПРОИСХОДИТ ПОСЛЕ ОТМЕНЫ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--color-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-primary)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '12px', color: 'var(--color-primary)' }}>
                Следующие шаги
              </span>
            </div>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--color-deep-blue)', margin: '0 0 16px', lineHeight: 1.25 }}>
              Что происходит после отмены судебного приказа
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.65, margin: 0 }}>
              Вынесение определения об отмене приказа — ключевой процессуальный шаг, после которого важно правильно распорядиться полученным результатом.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '32px' }}>
            {afterCancelScenarios.map((sc, idx) => (
              <div key={idx} className="hover-lift" style={{ background: 'var(--color-white)', padding: '30px 24px', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)' }}>
                <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '12px' }}>
                  {sc.tag}
                </span>
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 12px', lineHeight: 1.35 }}>
                  {sc.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {sc.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#form" className="btn btn-primary" style={{ padding: '14px 32px' }}>
              Определить действия после отмены приказа
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 12: СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость отмены судебного приказа в Липецке"
        subtitle="Честные фиксированные цены без скрытых платежей. Состав услуг и стоимость фиксируются в договоре до начала работы."
        tiers={pricingTiers}
        ctaTitle="Определим точную стоимость до старта работы"
        ctaSubtitle="Сначала изучим обстоятельства дела и судебный приказ, предложим процессуальный путь и зафиксируем стоимость выбранного этапа."
        ctaButtonText="Уточнить стоимость по моей ситуации"
        ctaButtonLink="#form"
      />

      {/* ═══ БЛОК 13: СПЕЦИАЛИСТ ═══ */}
      <SpecialistBlock
        title="Куратор направления — Владимир Викторович Начешников"
        name="Владимир Викторович Начешников"
        position="Специалист по корпоративным процедурам и защите заемщиков, куратор направления"
        imageUrl="/images/nacheshnikov.jpg"
        imagePosition="center 15%"
        description={[
          'Владимир Начешников проверяет судебный приказ, сведения об извещении и текущую стадию исполнения, определяет процессуальный маршрут и готовит документы для отмены приказа и обязательных действий после неё.',
          'Практический опыт в сфере юридических и процессуальных процедур — с 1997 года. Сопровождает защиту прав граждан и заёмщиков в спорах с банками, микрофинансовыми организациями и коллекторскими агентствами.',
          'Координирует работу с мировыми судьями Липецка и Липецкой области, взаимодействие со службой судебных приставов (ФССП) и последующую защиту по исковым заявлениям.'
        ]}
        buttonText="Обсудить приказ с Владимиром Начешниковым"
        buttonHref="#form"
        profileHref="/specialisty/nacheshnikov-vladimir-viktorovich/"
        profileText="Подробнее о специалисте →"
      />

      {/* ═══ БЛОК 14: ЧАСТЫЕ ВОПРОСЫ (FAQ) ═══ */}
      <FAQBlock
        title="Частые вопросы об отмене судебных приказов"
        subtitle="Ответы юриста на самые распространенные процессуальные вопросы заемщиков."
        faqs={faqs}
      />

      {/* ═══ БЛОК 15: СВЯЗАННЫЕ УСЛУГИ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--color-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', marginBottom: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-primary)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '12px', color: 'var(--color-primary)' }}>
                Комплексная защита
              </span>
            </div>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--color-deep-blue)', margin: '0 0 16px', lineHeight: 1.25 }}>
              Связанные юридические услуги
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.65, margin: 0 }}>
              Если после отмены приказа кредитор обратился с иском либо требуется комплексное списание всех долгов:
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px' }}>
            <Link href="/grazhdanam/kreditnyj-yurist/" style={{ textDecoration: 'none' }}>
              <div className="hover-lift" style={{ background: 'var(--color-white)', padding: '30px 24px', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '19px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px' }}>
                    Кредитный юрист
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    Защита по искам банков, проверка кредитных договоров, снижение неустойки и оспаривание долгов в суде.
                  </p>
                </div>
                <div style={{ marginTop: '16px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600 }}>
                  Подробнее →
                </div>
              </div>
            </Link>

            <Link href="/grazhdanam/bankrotstvo-fizicheskih-lic/" style={{ textDecoration: 'none' }}>
              <div className="hover-lift" style={{ background: 'var(--color-white)', padding: '30px 24px', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '19px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px' }}>
                    Банкротство граждан
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    Законное списание всех кредитов и займов через Арбитражный суд или бесплатно через МФЦ.
                  </p>
                </div>
                <div style={{ marginTop: '16px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600 }}>
                  Подробнее →
                </div>
              </div>
            </Link>

            <Link href="/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/" style={{ textDecoration: 'none' }}>
              <div className="hover-lift" style={{ background: 'var(--color-white)', padding: '30px 24px', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '19px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px' }}>
                    Исполнительное производство
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    Снятие арестов с карт и имущества, прекращение исполнительных производств, защита от незаконных действий приставов.
                  </p>
                </div>
                <div style={{ marginTop: '16px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600 }}>
                  Подробнее →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 16: ОФИС И ФИНАЛЬНАЯ ФОРМА ═══ */}
      <section id="form" className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <ContactsForm
            title="Проверьте срок отмены судебного приказа"
            subtitle="Укажите дату получения копии приказа или дату, когда Вы впервые узнали о взыскании. Мы уточним документы и предложим следующий процессуальный шаг."
            buttonText="Проверить срок и документы"
            commentPlaceholder="Суд, взыскатель, сумма, дата получения приказа или списания средств..."
            hiddenFields={[
              { name: 'page_id', value: 'CIV-07-01' },
              { name: 'service', value: 'cancel_court_order' },
              { name: 'source_block', value: 'final_form' },
              { name: 'term_state', value: activeDeadlineTab }
            ]}
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
