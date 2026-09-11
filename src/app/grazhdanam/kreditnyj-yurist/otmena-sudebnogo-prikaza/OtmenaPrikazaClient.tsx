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

  const deadlineStates: Array<{
    id: 'received' | 'bank' | 'bailiff' | 'late';
    title: string;
    desc: string;
    cta: string;
    badge: string;
  }> = [
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
      title: <><span style={{ display: 'block' }}>Установит</span>{' '}<span style={{ display: 'block' }}>процессуальную картину</span></>,
      desc: 'Определит суд, номер дела, дату приказа, взыскателя, способ и стадию исполнения.'
    },
    {
      num: '02',
      title: <><span style={{ display: 'block' }}>Проверит начало</span>{' '}<span style={{ display: 'block' }}>и окончание срока</span></>,
      desc: 'Сопоставит дату получения, почтовое отслеживание, адрес отправки и календарь процессуальных дней.'
    },
    {
      num: '03',
      title: <><span style={{ display: 'block' }}>Получит недостающие</span>{' '}<span style={{ display: 'block' }}>материалы</span></>,
      desc: 'Сформирует перечень документов из суда, ФССП, банка и почтовой организации.'
    },
    {
      num: '04',
      title: <><span style={{ display: 'block' }}>Подготовит</span>{' '}<span style={{ display: 'block' }}>возражения</span></>,
      desc: 'Оформит реквизиты, несогласие, просьбу об отмене, приложения и способ подачи.'
    },
    {
      num: '05',
      title: <><span style={{ display: 'block' }}>Обоснует</span>{' '}<span style={{ display: 'block' }}>позднюю подачу</span></>,
      desc: 'Свяжет причины пропуска с подтверждающими документами и периодом, когда обращение было невозможно.'
    },
    {
      num: '06',
      title: <><span style={{ display: 'block' }}>Проконтролирует</span>{' '}<span style={{ display: 'block' }}>определение</span></>,
      desc: 'Проверит вынесение и получение определения об отмене; оперативно отследит отправку копий сторонам.'
    },
    {
      num: '07',
      title: <><span style={{ display: 'block' }}>Сопроводит действия</span>{' '}<span style={{ display: 'block' }}>после отмены</span></>,
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

  const relatedServices = [
    {
      title: 'Кредитный юрист',
      desc: 'Защита по искам банков, проверка кредитных договоров, снижение неустойки и оспаривание долгов в суде.',
      link: '/grazhdanam/kreditnyj-yurist/'
    },
    {
      title: 'Банкротство физических лиц',
      desc: 'Законное списание всех кредитов и займов через Арбитражный суд или бесплатно через МФЦ.',
      link: '/grazhdanam/bankrotstvo-fizicheskih-lic/'
    },
    {
      title: 'Исполнительное производство',
      desc: 'Снятие арестов с карт и имущества, прекращение исполнительных производств, защита от незаконных действий приставов.',
      link: '/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/'
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
                <strong>Определяем суд и номер дела:</strong> проверяем фактическую<br />доставку и исчисление 10 дней
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Практический опыт с 1997 года</strong> в защите прав заёмщиков<br />и отмене судебных актов
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Два параллельных трека:</strong> отмена в суде и прекращение<br />исполнительного производства в ФССП
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

      {/* ═══ БЛОК 2: СРОЧНЫЙ БЛОК «ПРОВЕРЬТЕ СРОК» (ШАБЛОН «КОГДА СРОЧНО») ═══ */}
      <section id="deadline" style={{ background: 'var(--color-deep-blue)', padding: '64px 0 56px', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px'
            }}>
              Срочная диагностика
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-white)', marginBottom: '12px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Когда Вы получили копию</span> <br />
              <span style={{ display: 'inline-block' }}>судебного приказа?</span>
            </h2>
            <div style={{ width: '60px', height: '2px', background: 'var(--color-gold)', marginBottom: '20px' }}></div>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', maxWidth: '750px', lineHeight: 1.6, margin: 0 }}>
              <span style={{ display: 'inline-block' }}>Возражения подаются в течение 10 дней со дня вручения.</span> <br />
              <span style={{ display: 'inline-block' }}>Срок нельзя считать только по дате на документе:</span> <br />
              <span style={{ display: 'inline-block' }}>важны обстоятельства и факт доставки.</span>
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '16px', marginBottom: '32px' }}>
            {deadlineStates.map((st) => (
              <div
                key={st.id}
                className="urgent-card"
                style={{
                  background: 'linear-gradient(135deg, #FAF7F2 0%, #F3ECDF 100%)',
                  padding: '24px 20px',
                  borderTop: '4px solid var(--color-gold)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  minHeight: '260px',
                  boxSizing: 'border-box'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B08D57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-deep-blue)', lineHeight: 1.35, minHeight: '44px', wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                      {st.title}
                    </div>
                  </div>
                  <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '13px', lineHeight: 1.55, margin: '0 0 16px' }}>
                    {st.desc}
                  </p>
                </div>
                <div>
                  <a
                    href="#form"
                    className="btn btn-outline"
                    style={{
                      width: '100%',
                      textAlign: 'center',
                      padding: '10px 14px',
                      fontSize: '13px',
                      fontWeight: 600,
                      borderColor: 'var(--color-primary)',
                      color: 'var(--color-primary)'
                    }}
                    onClick={() => setActiveDeadlineTab(st.id)}
                  >
                    {st.cta} →
                  </a>
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
            <strong style={{ color: '#FFFFFF' }}>Юридическая справка:</strong> 10-дневный процессуальный срок начинает течь со следующего дня после фактического вручения копии судебного приказа должнику под расписку либо дня поступления в суд почтового возврата с отметкой об истечении срока хранения (ст. 107, 108, 128 ГПК РФ).
          </div>

          {/* Зона связи */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <a href="tel:+74742201525" style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.02em' }}>
                +7 (4742) 20-15-25
              </a>
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>|</span>
              <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}>
                Липецк, ул. Советская, 35, оф. 213 • Консультация по отмене приказа
              </span>
            </div>
            <a
              href="#form"
              className="btn btn-urgent-call"
              style={{ padding: '12px 24px', fontSize: '14px', whiteSpace: 'nowrap' }}
            >
              Срочная консультация юриста
            </a>
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
              transition: all 0.3s ease !important;
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
              transition: all 0.3s ease !important;
              border: 1px solid var(--color-gold) !important;
            }
            .btn-urgent-call:hover {
              background-color: #FFFFFF !important;
              color: #0B1C2A !important;
              border-color: #FFFFFF !important;
            }
          `}} />
        </div>
      </section>

      {/* ═══ БЛОК 3: ЧТО ТАКОЕ СУДЕБНЫЙ ПРИКАЗ И ЧТО ДАЕТ ОТМЕНА ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--color-cream)' }}>
        <div className="container">
          <div style={{ marginBottom: '48px' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: '24px'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-primary)' }}></div>
                  <span style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '12px', color: 'var(--color-primary)' }}>
                    Процессуальный статус
                  </span>
                </div>
                <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.2 }}>
                  <span style={{ display: 'inline-block' }}>Приказ выносят без заседания —</span> <br />
                  <span style={{ display: 'inline-block' }}>возражения меняют порядок спора</span>
                </h2>
              </div>
              <p style={{
                flex: '0 1 440px',
                minWidth: '280px',
                fontSize: '15.5px',
                color: 'var(--color-text-secondary)',
                fontWeight: 400,
                lineHeight: 1.65,
                margin: 0,
                textAlign: 'right'
              }}>
                <span style={{ display: 'inline-block' }}>При поступлении возражений судья обязан</span> <br />
                <span style={{ display: 'inline-block' }}>отменить приказ. Спор переходит в состязательный</span> <br />
                <span style={{ display: 'inline-block' }}>порядок с исследованием доказательств.</span>
              </p>
            </div>
          </div>

          <div className="grid grid-2" style={{ gap: '28px' }}>
            {/* Карточка 1: Отмена приказа даёт */}
            <div
              className="hover-lift"
              style={{
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-primary)',
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                padding: '36px 32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}
            >
              <div>
                <h3 style={{
                  fontSize: '20px',
                  fontFamily: 'var(--font-serif)',
                  color: 'var(--color-deep-blue)',
                  margin: 0,
                  paddingBottom: '14px',
                  borderBottom: '1px solid rgba(23, 50, 77, 0.1)',
                  lineHeight: 1.3,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <div style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    background: 'rgba(46, 125, 50, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span>Отмена приказа даёт:</span>
                </h3>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {comparisonItems.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px' }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{item.gives}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Карточка 2: Отмена не означает */}
            <div
              className="hover-lift"
              style={{
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid #C62828',
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                padding: '36px 32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}
            >
              <div>
                <h3 style={{
                  fontSize: '20px',
                  fontFamily: 'var(--font-serif)',
                  color: 'var(--color-deep-blue)',
                  margin: 0,
                  paddingBottom: '14px',
                  borderBottom: '1px solid rgba(23, 50, 77, 0.1)',
                  lineHeight: 1.3,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <div style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    background: 'rgba(198, 40, 40, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C62828" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </div>
                  <span>Отмена не означает:</span>
                </h3>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {comparisonItems.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C62828" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px' }}>
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
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
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '24px'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-primary)' }}></div>
                  <span style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '12px', color: 'var(--color-primary)' }}>
                    Типовые случаи
                  </span>
                </div>
                <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.2 }}>
                  <span style={{ display: 'inline-block' }}>Типовые ситуации, в которых</span> <br />
                  <span style={{ display: 'inline-block' }}>требуется отмена приказа</span>
                </h2>
              </div>
              <p style={{
                flex: '0 1 440px',
                minWidth: '280px',
                fontSize: '15.5px',
                color: 'var(--color-text-secondary)',
                fontWeight: 400,
                lineHeight: 1.65,
                margin: 0,
                paddingTop: '28px',
                textAlign: 'right'
              }}>
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
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: 'var(--color-gold)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '14px',
                  background: 'rgba(193, 160, 102, 0.1)',
                  padding: '4px 10px',
                  alignSelf: 'flex-start',
                  display: 'inline-block',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {sit.tag}
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '20px',
                  fontWeight: 600,
                  color: 'var(--color-deep-blue)',
                  margin: '0 0 14px 0',
                  lineHeight: 1.35,
                  position: 'relative',
                  zIndex: 1
                }}>
                  {sit.title}
                </h3>

                <p style={{
                  fontSize: '15px',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.6,
                  margin: 0,
                  position: 'relative',
                  zIndex: 1
                }}>
                  {sit.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '16px' }}>
            <a
              href="#form"
              className="btn btn-primary"
              style={{ padding: '14px 32px', fontSize: '15px', fontWeight: 600 }}
            >
              Обсудить отмену приказа с юристом
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 5: СРОК НЕ ПРОПУЩЕН И СРОК ПРОПУЩЕН ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--color-cream)' }}>
        <div className="container">
          <div style={{ marginBottom: '48px' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '24px'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-primary)' }}></div>
                  <span style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '12px', color: 'var(--color-primary)' }}>
                    Два процессуальных маршрута
                  </span>
                </div>
                <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.2 }}>
                  <span style={{ display: 'inline-block' }}>Своевременные возражения</span> <br />
                  <span style={{ display: 'inline-block' }}>и поздняя подача</span>
                </h2>
              </div>
              <p style={{
                flex: '0 1 440px',
                minWidth: '280px',
                fontSize: '15.5px',
                color: 'var(--color-text-secondary)',
                fontWeight: 400,
                lineHeight: 1.65,
                margin: 0,
                paddingTop: '28px',
                textAlign: 'right'
              }}>
                <span style={{ display: 'inline-block' }}>Порядок действий кардинально отличается</span> <br />
                <span style={{ display: 'inline-block' }}>в зависимости от того, уложились ли Вы в 10 дней</span> <br />
                <span style={{ display: 'inline-block' }}>или процессуальный срок был пропущен.</span>
              </p>
            </div>
          </div>

          <div className="grid grid-2" style={{ gap: '28px' }}>
            {/* Маршрут 1 */}
            <div className="hover-lift" style={{ background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)', padding: '36px 30px', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-primary)', boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)' }}>
              <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '12px' }}>
                Маршрут 1 • В пределах 10 дней
              </span>
              <h3 style={{ fontSize: '22px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 16px' }}>
                Возражения в установленный срок
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.65, marginBottom: '16px' }}>
                По закону (ст. 129 ГПК РФ) для отмены приказа <strong>достаточно выразить свое несогласие</strong> с его исполнением. На этой стадии не требуется доказывать весь кредитный спор, расчеты или недействительность договора.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14.5px', color: 'var(--color-deep-blue)' }}>
                <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Обязательно проверяем реквизиты мирового судьи и номер дела</span>
                </li>
                <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Оформляем подпись и перечень приложений</span>
                </li>
                <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Подаем способом с железной фиксацией даты (почта с описью / канцелярия)</span>
                </li>
              </ul>
            </div>

            {/* Маршрут 2 */}
            <div className="hover-lift" style={{ background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)', padding: '36px 30px', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-gold)', boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)' }}>
              <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '12px' }}>
                Маршрут 2 • Срок пропущен
              </span>
              <h3 style={{ fontSize: '22px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 16px' }}>
                Поздние возражения с доказательствами
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.65, marginBottom: '16px' }}>
                Суд рассматривает поздние возражения только при <strong>обосновании причин, не зависевших от должника</strong>, и документальном подтверждении невозможности подать их вовремя (Постановление Пленума ВС РФ № 62).
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14.5px', color: 'var(--color-deep-blue)' }}>
                <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Подаются не позднее 10 дней с момента отпадения препятствий</span>
                </li>
                <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Доказательства: болезнь, командировка, отпуск, смена адреса, сбои доставки</span>
                </li>
                <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>К возражениям прикладывается полный пакет подтверждающих документов</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 6: СТРУКТУРА ВОЗРАЖЕНИЙ И HTML-ОБРАЗЕЦ ═══ */}
      <section className="section bg-white" id="sample" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '48px' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '24px'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-primary)' }}></div>
                  <span style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '12px', color: 'var(--color-primary)', fontWeight: 600 }}>
                    Процессуальный образец
                  </span>
                </div>
                <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.2 }}>
                  <span style={{ display: 'inline-block' }}>Что должно быть</span> <br />
                  <span style={{ display: 'inline-block' }}>в возражениях</span>
                </h2>
              </div>
              <p style={{
                flex: '0 1 440px',
                minWidth: '280px',
                fontSize: '15.5px',
                color: 'var(--color-text-secondary)',
                fontWeight: 400,
                lineHeight: 1.65,
                margin: 0,
                paddingTop: '28px',
                textAlign: 'right'
              }}>
                <span style={{ display: 'inline-block' }}>Возражения подаются мировому судье.</span> <br />
                <span style={{ display: 'inline-block' }}>Документ содержит реквизиты участка, номер дела</span> <br />
                <span style={{ display: 'inline-block' }}>и указание на несогласие с исполнением.</span>
              </p>
            </div>
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
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Что сделает кредитный юрист</span> <br />
              <span style={{ display: 'inline-block' }}>«Де-Юре»</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Комплексное процессуальное сопровождение — от анализа материалов и восстановления срока</span> <br className="hidden-mobile" />
              <span style={{ display: 'inline-block' }}>до фактической отмены приказа и прекращения исполнительного производства.</span>
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '20px' }}>
            {lawyerActions.map((item, idx) => (
              <div key={idx} className="hover-lift" style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '38px 22px 28px 22px',
                border: '1px solid var(--color-border)',
                borderTop: '4px solid var(--color-gold)',
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                borderRadius: '0',
                position: 'relative',
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '20px',
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

                <h3 style={{
                  fontSize: '18px',
                  fontFamily: 'var(--font-serif)',
                  color: 'var(--color-deep-blue)',
                  margin: '8px 0 12px 0',
                  lineHeight: 1.35
                }}>
                  {item.title}
                </h3>

                <p style={{
                  fontSize: '14px',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.55,
                  margin: 0,
                  marginTop: 'auto'
                }}>
                  {item.desc}
                </p>
              </div>
            ))}

            {/* Карточка 8: CTA рядом с карточкой 07 */}
            <div
              className="hover-lift"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '34px 22px 26px 22px',
                border: '1px solid rgba(193, 160, 102, 0.4)',
                borderTop: '4px solid var(--color-gold)',
                background: 'linear-gradient(135deg, var(--color-deep-blue) 0%, #17324D 100%)',
                boxShadow: '0 8px 24px rgba(16, 39, 59, 0.16)',
                position: 'relative',
                transition: 'all 0.3s ease'
              }}
            >
              <div>
                <div style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: 'var(--color-gold)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '12px',
                  background: 'rgba(193, 160, 102, 0.2)',
                  padding: '3px 8px',
                  display: 'inline-block'
                }}>
                  Юридическая помощь
                </div>
                <h3 style={{
                  fontSize: '18px',
                  fontFamily: 'var(--font-serif)',
                  color: '#FFFFFF',
                  margin: '0 0 10px 0',
                  lineHeight: 1.35
                }}>
                  Обсудить отмену приказа
                </h3>
                <p style={{
                  fontSize: '13.5px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: 1.55,
                  margin: '0 0 20px 0'
                }}>
                  Оставьте заявку — кредитный юрист изучит приказ, проверит сроки и защитит Ваши интересы.
                </p>
              </div>
              <div>
                <a
                  href="#form"
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    textAlign: 'center',
                    padding: '12px 14px',
                    fontSize: '13.5px',
                    fontWeight: 700,
                    backgroundColor: 'var(--color-gold)',
                    color: 'var(--color-deep-blue)',
                    border: '1px solid var(--color-gold)',
                    display: 'block',
                    boxSizing: 'border-box'
                  }}
                >
                  Обсудить отмену приказа с юристом →
                </a>
              </div>
            </div>
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

      {/* ═══ БЛОК 10: ЧТО ПОДГОТОВИТЬ ДЛЯ КОНСУЛЬТАЦИИ ═══ */}
      <section className="section bg-white" id="documents" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '48px' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '24px'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-primary)' }}></div>
                  <span style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '12px', color: 'var(--color-primary)', fontWeight: 600 }}>
                    Необходимые материалы
                  </span>
                </div>
                <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.2 }}>
                  <span style={{ display: 'inline-block' }}>Что подготовить</span> <br />
                  <span style={{ display: 'inline-block' }}>для консультации</span>
                </h2>
              </div>
              <p style={{
                flex: '0 1 440px',
                minWidth: '280px',
                fontSize: '15.5px',
                color: 'var(--color-text-secondary)',
                fontWeight: 400,
                lineHeight: 1.65,
                margin: 0,
                paddingTop: '28px',
                textAlign: 'right'
              }}>
                <span style={{ display: 'inline-block' }}>Чем полнее исходные сведения, тем точнее</span> <br />
                <span style={{ display: 'inline-block' }}>юрист рассчитает сроки и подготовит возражения.</span> <br />
                <span style={{ display: 'inline-block' }}>Недостающие данные поможем запросить в суде.</span>
              </p>
            </div>
          </div>

          <div className="grid grid-2" style={{ gap: '28px', marginBottom: '32px' }}>
            {/* Карточка 1: Обязательно (при наличии) */}
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
                Обязательно (при наличии)
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  {
                    title: 'Судебный приказ или извещение',
                    desc: 'Копия судебного приказа, конверт со штемпелем, извещение или трек-номер отправления.',
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    )
                  },
                  {
                    title: 'Сведения о суде и номере дела',
                    desc: 'Номер судебного участка мирового судьи, номер дела и наименование взыскателя.',
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      </svg>
                    )
                  },
                  {
                    title: 'Дата обнаружения взыскания',
                    desc: 'Сведения о фактическом получении письма, уведомление Госуслуг или банка об аресте.',
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    )
                  },
                  {
                    title: 'Постановление судебного пристава',
                    desc: 'Номер и постановление о возбуждении ИП, если взыскание уже передано в ФССП.',
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    )
                  }
                ].map((doc, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    {doc.icon}
                    <div>
                      <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>
                        {doc.title}
                      </strong>
                      <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                        {doc.desc}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Карточка 2: Дополнительно помогает */}
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
                Дополнительно помогает
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  {
                    title: 'Документы об уважительности пропуска',
                    desc: 'Справки о лечении, командировочные листы, документы о смене адреса при поздней подаче.',
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="12" y1="18" x2="12" y2="12" />
                        <line x1="9" y1="15" x2="15" y2="15" />
                      </svg>
                    )
                  },
                  {
                    title: 'Кредитный договор и график платежей',
                    desc: 'Договор займа или кредита, условия кредитования и уведомление об уступке прав (цессии).',
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                        <polyline points="10 9 9 9 8 9" />
                      </svg>
                    )
                  },
                  {
                    title: 'Квитанции и выписки по счету',
                    desc: 'Подтверждения ранее внесённых платежей для составления контррасчета задолженности.',
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                        <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1z" />
                        <line x1="8" y1="8" x2="16" y2="8" />
                        <line x1="8" y1="12" x2="16" y2="12" />
                        <line x1="8" y1="16" x2="12" y2="16" />
                      </svg>
                    )
                  },
                  {
                    title: 'Банковская выписка по удержаниям',
                    desc: 'Выписка со списанными суммами для последующего заявления о повороте исполнения.',
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                        <path d="M3 21h18" />
                        <path d="M5 21V10" />
                        <path d="M19 21V10" />
                        <path d="M9 21V10" />
                        <path d="M15 21V10" />
                        <path d="M2 10h20" />
                        <path d="M12 3L2 10h20L12 3z" />
                      </svg>
                    )
                  }
                ].map((doc, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    {doc.icon}
                    <div>
                      <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>
                        {doc.title}
                      </strong>
                      <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                        {doc.desc}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{
            background: 'rgba(23, 50, 77, 0.04)',
            borderLeft: '3px solid var(--color-gold)',
            padding: '16px 20px',
            fontSize: '13.5px',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.55,
            marginBottom: '48px'
          }}>
            <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>
              Конфиденциальность:
            </strong>
            Мы не запрашиваем загрузку паспортов и банковских выписок через открытую форму сайта. Способ безопасной передачи материалов будет согласован специалистом при первом звонке.
          </div>

          {/* Карточка: Что происходит после отмены судебного приказа */}
          <div style={{
            background: 'linear-gradient(135deg, var(--color-deep-blue) 0%, #17324D 100%)',
            border: '1px solid rgba(193, 160, 102, 0.4)',
            borderTop: '3px solid var(--color-gold)',
            boxShadow: '0 8px 30px rgba(16, 39, 59, 0.18)',
            padding: '36px 32px',
            position: 'relative'
          }}>
            <div className="stages-header-row" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px',
              marginBottom: '24px',
              position: 'relative',
              zIndex: 1
            }}>
              <div style={{ flex: '1 1 auto', minWidth: '280px' }}>
                <h3 style={{ fontSize: 'clamp(19px, 2.2vw, 24px)', fontFamily: 'var(--font-serif)', color: '#FFFFFF', margin: 0, lineHeight: 1.25 }}>
                  <span style={{ display: 'inline-block' }}>Что происходит после</span> <br />
                  <span style={{ display: 'inline-block' }}>отмены судебного приказа</span>
                </h3>
              </div>
              <div className="stages-subtitle-right" style={{
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.85)',
                maxWidth: '500px',
                lineHeight: 1.55,
                textAlign: 'right',
                flex: '0 0 auto'
              }}>
                <div style={{ fontWeight: 500, marginBottom: '4px' }}>
                  <span style={{ display: 'inline-block' }}>Вынесение определения об отмене приказа —</span> <br />
                  <span style={{ display: 'inline-block' }}>ключевой процессуальный шаг:</span>
                </div>
                <div style={{ color: 'rgba(255, 255, 255, 0.75)' }}>
                  <span style={{ display: 'inline-block' }}>важно правильно распорядиться полученным</span> <br />
                  <span style={{ display: 'inline-block' }}>результатом на стадии исполнения.</span>
                </div>
              </div>
            </div>

            <div className="grid grid-5" style={{ gap: '16px', position: 'relative', zIndex: 1 }}>
              {afterCancelScenarios.map((sc, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    padding: '20px 16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: 'var(--color-gold)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      background: 'rgba(193, 160, 102, 0.15)',
                      padding: '3px 8px',
                      borderRadius: '2px'
                    }}>
                      {sc.tag}
                    </span>
                    <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)' }}>
                      0{idx + 1}
                    </span>
                  </div>
                  <h4 style={{ fontSize: '15px', fontFamily: 'var(--font-serif)', color: '#FFFFFF', margin: 0, fontWeight: 600, lineHeight: 1.3 }}>
                    {sc.title}
                  </h4>
                  <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5, margin: 0 }}>
                    {sc.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 11: СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость отмены судебного приказа в Липецке"
        subtitle="Честные фиксированные цены без скрытых платежей. Состав услуг и стоимость фиксируются в договоре до начала работы."
        tiers={pricingTiers}
        ctaTitle="Определим точную стоимость до старта работы"
        ctaSubtitle="Сначала изучим обстоятельства дела и судебный приказ, предложим процессуальный путь и зафиксируем стоимость выбранного этапа."
        ctaButtonText="Уточнить стоимость по моей ситуации"
        ctaButtonLink="#form"
      />

      {/* ═══ БЛОК 12: СПЕЦИАЛИСТ ═══ */}
      <SpecialistBlock
        title={<><span style={{ display: 'inline-block' }}>Куратор направления — Владимир</span> <br /><span style={{ display: 'inline-block' }}>Викторович Начешников</span></>}
        name="Владимир Викторович Начешников"
        position="Специалист по корпоративным процедурам и защите заемщиков, куратор направления"
        imageUrl="/images/nacheshnikov.jpg"
        imagePosition="center 15%"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Владимир Начешников проверяет судебный приказ, сведения об извещении и текущую стадию исполнения, определяет процессуальный маршрут и готовит документы для отмены приказа и обязательных действий после неё.
          </span>,
          <ul key="2" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>
                Практический опыт в сфере юридических и процессуальных процедур — с 1997 года. Сопровождает защиту прав граждан и заёмщиков в спорах с банками, микрофинансовыми организациями и коллекторскими агентствами.
              </span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>
                Координирует работу с мировыми судьями Липецка и Липецкой области, взаимодействие со службой судебных приставов (ФССП) и последующую защиту по исковым заявлениям.
              </span>
            </li>
          </ul>,
          <a key="3" href="/specialisty/nacheshnikov-vladimir-viktorovich/" style={{ display: 'inline-block', marginTop: '16px', fontSize: '14px', color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }} data-analytics="specialist_profile_click">
            Подробнее о специалисте →
          </a>
        ]}
        buttonText="Обсудить ситуацию с Владимиром Начешниковым"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 14: ЧАСТЫЕ ВОПРОСЫ (FAQ) ═══ */}
      <FAQBlock
        title="Частые вопросы об отмене судебных приказов"
        subtitle="Ответы юриста на самые распространенные процессуальные вопросы заемщиков."
        faqs={faqs}
      />

      {/* ═══ БЛОК 13: СВЯЗАННЫЕ УСЛУГИ ═══ */}
      <section className="section bg-cream" id="related-services" style={{ padding: '80px 0', background: 'var(--gradient-cream)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-primary)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '12px', color: 'var(--color-primary)', fontWeight: 600 }}>
                Смежные направления
              </span>
            </div>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                Связанные
              </span>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                юридические услуги
              </span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Если после отмены приказа кредитор обратился с иском либо требуется комплексное списание всех долгов:
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
          `}} />

          <div className="grid grid-3" style={{ gap: '20px' }}>
            {relatedServices.map((srv, idx) => (
              <Link key={idx} href={srv.link} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                <div
                  className="card related-service-card hover-lift"
                  style={{
                    height: '100%',
                    minHeight: '180px',
                    padding: '28px 22px',
                    background: 'var(--color-white)',
                    border: '1px solid var(--color-border)',
                    borderTop: '3px solid var(--color-primary)',
                    borderRadius: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 16px rgba(23, 50, 77, 0.04)',
                    transition: 'all 0.3s ease',
                    position: 'relative'
                  }}
                >
                  <div>
                    <h3 style={{ margin: '0 0 10px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                      {srv.title}
                    </h3>
                    <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      {srv.desc}
                    </p>
                  </div>
                  <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, transition: 'transform 0.3s' }}>
                    Подробнее 
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

      {/* ═══ БЛОК 14: ОФИС В ЛИПЕЦКЕ И ФИНАЛЬНАЯ ФОРМА ═══ */}
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
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Проверьте судебный приказ</span>{' '}
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и сроки до списания средств</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Укажите дату получения копии приказа или дату, когда вы впервые узнали о взыскании. Юрист проверит срок, основания и подготовит процессуальные возражения.
              </p>

              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация юриста в Липецке</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Позвоните прямо сейчас: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (910) 350-31-11</a>
                </p>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '6px' }}>
                  г. Липецк, ул. Советская, д. 35, офис 213 (приём по записи)
                </div>
              </div>

              <div style={{ background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Конфиденциальность:</strong>
                Не указывайте в форме паспортные данные, номера счетов и карт. Документы можно передать юристу после согласования защищённого канала связи.
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm
                title="Проверить срок и документы"
                subtitle={
                  <>
                    <span style={{ display: 'inline-block' }}>Оставьте имя и номер телефона. Юрист свяжется с вами</span> <br />
                    <span style={{ display: 'inline-block' }}>в течение 15 минут в рабочее время.</span>
                  </>
                }
                subtext={
                  <>
                    <span style={{ display: 'inline-block' }}>Если вы оставите заявку вечером или в&nbsp;выходной день,</span> <br />
                    <span style={{ display: 'inline-block' }}>мы перезвоним в&nbsp;ближайший рабочий день.</span>
                  </>
                }
                buttonText="Проверить срок и документы"
                commentPlaceholder="Суд, взыскатель, сумма, дата получения приказа или списания средств..."
                hiddenFields={[
                  { name: 'source_page', value: '/grazhdanam/kreditnyj-yurist/otmena-sudebnogo-prikaza/' },
                  { name: 'page_type', value: 'service' },
                  { name: 'direction', value: 'credit_lawyer' },
                  { name: 'page_id', value: 'CIV-07-01' },
                  { name: 'curator_id', value: 'nacheshnikov' },
                  { name: 'service', value: 'Отмена судебного приказа в Липецке' },
                  { name: 'term_state', value: activeDeadlineTab }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
