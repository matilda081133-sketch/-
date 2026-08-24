const fs = require('fs');
const path = require('path');

const content = 'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MilitaryHero from '@/components/MilitaryHero';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import CasesBlock, { CaseData } from '@/components/CasesBlock';
import SpecialistBlock from '@/components/SpecialistBlock';
import PricingBlock from '@/components/PricingBlock';
import ProcessBlock from '@/components/ProcessBlock';

export default function IspolnitelnoeClient() {

  const cases: CaseData[] = [
    {
      category: 'Взыскатель / ФССП',
      title: 'Взыскание долга с контрагента через исполнительное производство',
      problem: 'Компания получила исполнительный лист, однако пристав не принимал мер: счета должника не арестовывались, имущество не разыскивалось.',
      action: 'Проверили ход производства, направили жалобу на бездействие пристава, предъявили лист напрямую в банк должника.',
      result: 'Денежные средства на счёте должника арестованы, задолженность начала погашаться.'
    },
    {
      category: 'Должник / защита бизнеса',
      title: 'Оспаривание ареста оборудования, необходимого для деятельности',
      problem: 'Пристав наложил арест на производственное оборудование, без которого компания не могла исполнять текущие заказы.',
      action: 'Подготовили ходатайство об исключении имущества из-под ареста, обосновали его принадлежность к основным средствам производства.',
      result: 'Арест с оборудования снят, деятельность компании не прерывалась.'
    },
    {
      category: 'Несколько взыскателей',
      title: 'Выстраивание позиции при нескольких исполнительных листах',
      problem: 'На компанию одновременно поступило несколько исполнительных листов от разных взыскателей; общая сумма превышала текущие активы.',
      action: 'Проанализировали очерёдность и объём требований, подготовили документы для структурированного погашения, организовали переговоры с частью взыскателей.',
      result: 'Выработан и согласован план погашения, исключающий несоразмерное ограничение деятельности.'
    }
  ];

  const faqs = [
    { q: 'Можно ли предъявить исполнительный лист напрямую в банк, минуя ФССП?', a: 'Да, если вам известны реквизиты счетов должника. Это значительно ускоряет процесс взыскания.' },
    { q: 'Пристав не принимает мер уже два месяца. Что делать?', a: 'Необходимо ознакомиться с материалами исполнительного производства и направить жалобу на бездействие пристава вышестоящему руководству или в суд.' },
    { q: 'Как обжаловать бездействие или незаконные действия пристава?', a: 'Жалоба подается в порядке подчиненности старшему судебному приставу либо оспаривается в судебном порядке (КАС РФ или АПК РФ).' },
    { q: 'Пристав арестовал расчётный счёт. Как продолжить деятельность?', a: 'Можно ходатайствовать о снятии ареста в части средств, необходимых для выплаты заработной платы и налогов, либо предложить взамен другое имущество для ареста.' },
    { q: 'Арестовали производственное оборудование. Можно ли его освободить?', a: 'Да, если доказать, что данное оборудование необходимо для основной деятельности компании и его арест приведет к остановке производства, либо оно находится в залоге у третьего лица.' },
    { q: 'На нашу компанию одновременно несколько исполнительных листов. Как быть?', a: 'Возбуждается сводное исполнительное производство. При недостаточности средств требования удовлетворяются в порядке очередности.' },
    { q: 'Можно ли получить отсрочку или рассрочку исполнения?', a: 'Да, для этого необходимо обратиться в суд, выдавший исполнительный документ, с мотивированным заявлением, доказав наличие обстоятельств, затрудняющих единовременное исполнение.' },
    { q: 'Какие документы нужно передать юристу для оценки ситуации?', a: 'Копию исполнительного документа, постановление о возбуждении исполнительного производства, переписку с ФССП (если есть) и документы по сути первоначального спора.' }
  ];

  const risks = [
    { tag: 'Риск блокировки', title: 'Арест расчётных счетов', desc: 'Приостановка платежей, невозможность выдачи зарплаты и расчётов с контрагентами.' },
    { tag: 'Риск изъятия', title: 'Арест имущества', desc: 'Изъятие оборудования, транспорта или товаров в обороте, остановка бизнес-процессов.' },
    { tag: 'Риск потери', title: 'Утрата активов', desc: 'Реализация имущества должника по заниженной стоимости на торгах.' },
    { tag: 'Риск руководства', title: 'Субсидиарная ответственность', desc: 'Привлечение директора и учредителей к ответственности по долгам компании.' },
    { tag: 'Риск репутации', title: 'Блокировка деятельности', desc: 'Падение доверия контрагентов, срыв действующих контрактов.' },
    { tag: 'Риск бездействия', title: 'Затягивание взыскания', desc: 'Если вы взыскатель — риск вывода активов должником из-за медлительности приставов.' }
  ];

  return (
    <>
      <Header />
      <main className=\"b2b-page\">
        {/* Блок 1: Hero */}
        <MilitaryHero
          title={
            <>
              Юридическое сопровождение<br />
              <span style={{ color: 'var(--color-gold)' }}>исполнительного производства</span><br />
              для бизнеса
            </>
          }
          subtitle=\"Защита интересов взыскателя и должника. Снятие арестов, обжалование действий судебных приставов, розыск активов и реальное взыскание долгов.\"
          imageNode={
             <div className=\"military-hero-creative\">
               <div className=\"creative-doc-stack\">
                 <div className=\"creative-doc doc-back\">
                   <div className=\"doc-header\">
                     <div className=\"doc-seal\"></div>
                     <div className=\"doc-lines\">
                       <div className=\"line w-80\"></div>
                       <div className=\"line w-60\"></div>
                     </div>
                   </div>
                   <div className=\"doc-title\">ПОСТАНОВЛЕНИЕ ФССП</div>
                   <div className=\"doc-body\">
                     <div className=\"line w-100\"></div>
                     <div className=\"line w-90\"></div>
                     <div className=\"line w-90\"></div>
                     <div className=\"line w-70\"></div>
                   </div>
                 </div>
                 
                 <div className=\"creative-doc doc-middle\">
                   <div className=\"doc-header\">
                     <div className=\"doc-seal\"></div>
                     <div className=\"doc-lines\">
                       <div className=\"line w-80\"></div>
                       <div className=\"line w-60\"></div>
                     </div>
                   </div>
                   <div className=\"doc-title\">АКТ АРЕСТА</div>
                   <div className=\"doc-body\">
                     <div className=\"line w-100\"></div>
                     <div className=\"line w-90\"></div>
                     <div className=\"line w-90\"></div>
                     <div className=\"line w-70\"></div>
                   </div>
                 </div>

                 <div className=\"creative-doc doc-front\">
                   <div className=\"doc-header\">
                     <div className=\"doc-seal\"></div>
                     <div className=\"doc-lines\">
                       <div className=\"line w-80\"></div>
                       <div className=\"line w-60\"></div>
                     </div>
                   </div>
                   <div className=\"doc-title\">ИСПОЛНИТЕЛЬНЫЙ ЛИСТ</div>
                   <div className=\"doc-body\">
                     <div className=\"line w-100\"></div>
                     <div className=\"line w-90\"></div>
                     <div className=\"line w-90\"></div>
                     <div className=\"line w-70\"></div>
                   </div>
                   <div className=\"doc-stamp-approved\">ПОДЛЕЖИТ ИСПОЛНЕНИЮ</div>
                 </div>
               </div>
             </div>
          }
          primaryCtaText=\"Обсудить ситуацию\"
          primaryCtaLink=\"#form\"
          features={[
            'Защита активов',
            'Снятие арестов',
            'Контроль ФССП'
          ]}
        />

        {/* Блок 2: Риски */}
        <section className=\"section bg-white\" style={{ padding: '80px 0' }}>
          <div className=\"container\">
            <div className=\"section-header text-center\">
              <h2 className=\"section-title\">С какими рисками <span className=\"highlight\">сталкивается бизнес</span></h2>
              <p className=\"section-subtitle\">
                В исполнительном производстве промедление грозит реальными финансовыми потерями как для должника, так и для взыскателя.
              </p>
            </div>
            
            <div className=\"grid grid-3\" style={{ gap: '28px' }}>
              {risks.map((risk, i) => (
                <div key={i} className=\"hover-lift\" style={{
                  padding: '36px 30px',
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <div style={{ marginBottom: '20px' }}>
                    <span style={{
                      background: 'rgba(193, 160, 102, 0.1)',
                      color: 'var(--color-gold)',
                      padding: '4px 12px',
                      fontSize: '13px',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      {risk.tag}
                    </span>
                  </div>
                  <h3 style={{ 
                    fontFamily: 'var(--font-serif)', 
                    fontSize: '22px', 
                    color: 'var(--color-text)',
                    marginBottom: '16px',
                    lineHeight: 1.3
                  }}>
                    {risk.title}
                  </h3>
                  <p style={{ 
                    fontSize: '15px', 
                    color: 'var(--color-text-muted)', 
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    {risk.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Блок 3: Услуги */}
        <section className=\"section bg-light\">
          <div className=\"container\">
            <div className=\"section-header text-center\">
              <h2 className=\"section-title\">Направления <span className=\"highlight\">работы</span></h2>
              <p className=\"section-subtitle\">
                Комплексное сопровождение исполнительного производства на всех стадиях.
              </p>
            </div>

            <div className=\"grid grid-3\">
              <div className=\"service-card hover-lift\">
                <h3 className=\"service-card-title\"><span style={{ display: 'inline-block' }}>Для</span> <span style={{ display: 'inline-block' }}>взыскателей</span></h3>
                <p className=\"service-card-desc\">
                  <span style={{ display: 'inline-block' }}>Розыск счетов</span> <span style={{ display: 'inline-block' }}>и имущества должника.</span> 
                  <span style={{ display: 'inline-block' }}>Предъявление листа</span> <span style={{ display: 'inline-block' }}>в банк.</span>
                  <span style={{ display: 'inline-block' }}>Контроль действий</span> <span style={{ display: 'inline-block' }}>приставов.</span>
                </p>
              </div>
              <div className=\"service-card hover-lift\">
                <h3 className=\"service-card-title\"><span style={{ display: 'inline-block' }}>Для</span> <span style={{ display: 'inline-block' }}>должников</span></h3>
                <p className=\"service-card-desc\">
                  <span style={{ display: 'inline-block' }}>Защита активов</span> <span style={{ display: 'inline-block' }}>от необоснованного ареста.</span> 
                  <span style={{ display: 'inline-block' }}>Снятие ограничений</span> <span style={{ display: 'inline-block' }}>со счетов.</span>
                  <span style={{ display: 'inline-block' }}>Отсрочка или рассрочка</span> <span style={{ display: 'inline-block' }}>исполнения.</span>
                </p>
              </div>
              <div className=\"service-card hover-lift\">
                <h3 className=\"service-card-title\"><span style={{ display: 'inline-block' }}>Споры</span> <span style={{ display: 'inline-block' }}>с ФССП</span></h3>
                <p className=\"service-card-desc\">
                  <span style={{ display: 'inline-block' }}>Обжалование незаконных</span> <span style={{ display: 'inline-block' }}>постановлений.</span> 
                  <span style={{ display: 'inline-block' }}>Оспаривание бездействия</span> <span style={{ display: 'inline-block' }}>пристава.</span>
                  <span style={{ display: 'inline-block' }}>Взыскание убытков</span> <span style={{ display: 'inline-block' }}>с казны РФ.</span>
                </p>
              </div>
            </div>
            
            <div className=\"text-center\" style={{ marginTop: '40px' }}>
              <Link href=\"#form\" className=\"btn btn-primary\">Обсудить ситуацию</Link>
            </div>
          </div>
        </section>

        {/* Блок 4: Процесс работы */}
        <ProcessBlock
          title=\"Как проходит работа\"
          subtitle=\"Четкий алгоритм действий для защиты ваших интересов в исполнительном производстве\"
          steps={[
            {
              num: '01',
              title: 'Анализ ситуации',
              desc: 'Изучаем исполнительный документ, материалы производства и финансовое состояние сторон.'
            },
            {
              num: '02',
              title: 'Разработка стратегии',
              desc: 'Определяем оптимальный путь: розыск активов, снятие арестов или обжалование действий пристава.'
            },
            {
              num: '03',
              title: 'Взаимодействие с ФССП',
              desc: 'Подаем ходатайства, контролируем работу пристава, направляем запросы в регистрирующие органы.'
            },
            {
              num: '04',
              title: 'Достижение результата',
              desc: 'Обеспечиваем фактическое взыскание долга или снимаем незаконные ограничения с бизнеса.'
            }
          ]}
        />

        {/* Блок 5: Стоимость (PricingBlock по образцу Зем.Юриста) */}
        <PricingBlock
          title=\"Форматы работы и стоимость\"
          subtitle=\"Подберем оптимальный формат участия в зависимости от ваших задач\"
          tiers={[
            {
              title: 'Консультация',
              subtitle: 'Анализ перспектив',
              price: 'от 5 000 ₽',
              features: [
                { name: 'Изучение документов', value: 'Да' },
                { name: 'Оценка рисков', value: 'Да' },
                { name: 'Письменное заключение', value: 'По запросу' },
                { name: 'Взаимодействие с ФССП', value: 'Нет' }
              ],
              buttonText: 'Обсудить ситуацию',
              buttonHref: '#form'
            },
            {
              title: 'Разовые действия',
              subtitle: 'Точечная помощь',
              popular: true,
              price: 'от 15 000 ₽',
              features: [
                { name: 'Подготовка документов', value: 'Да' },
                { name: 'Подача ходатайств', value: 'Да' },
                { name: 'Жалоба на пристава', value: 'Да' },
                { name: 'Комплексное ведение', value: 'Нет' }
              ],
              buttonText: 'Обсудить ситуацию',
              buttonHref: '#form'
            },
            {
              title: 'Сопровождение',
              subtitle: 'Под ключ',
              price: 'от 50 000 ₽',
              features: [
                { name: 'Полный анализ', value: 'Да' },
                { name: 'Все процессуальные действия', value: 'Да' },
                { name: 'Участие в суде', value: 'Да' },
                { name: 'Контроль ФССП', value: 'Да' }
              ],
              buttonText: 'Обсудить ситуацию',
              buttonHref: '#form'
            }
          ]}
        />

        {/* Блок 6: Практика (Кейсы) */}
        <CasesBlock
          title=\"Практика по исполнительным производствам\"
          subtitle=\"Примеры того, как мы помогаем бизнесу защитить свои интересы\"
          cases={cases}
          showDemoWarning={true}
        />

        {/* Блок 7: Специалист */}
        <SpecialistBlock
          name=\"Смолянинова Марина Викторовна\"
          position=\"Руководитель практики, ведущий юрист\"
          imageUrl=\"/images/smolyaninova.jpg\"
          description={[
            'Имеет обширный опыт взаимодействия с органами ФССП.',
            'Специализируется на сложных исполнительных производствах, розыске активов и снятии незаконных арестов с бизнеса.',
            'Успешно обжалует незаконные действия и бездействие судебных приставов-исполнителей.'
          ]}
          buttonText=\"Обсудить ситуацию\"
          buttonHref=\"#form\"
        />

        {/* Блок 8: FAQ */}
        <FAQBlock
          title=\"Частые вопросы\"
          faqs={faqs}
        />

        {/* Блок 9: Контакты */}
        <div id=\"form\">
          <ContactsForm
            title=\"Обсудить ситуацию\"
            subtitle=\"Оставьте заявку, и мы свяжемся с вами для оценки перспектив вашего дела.\"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
\;

fs.writeFileSync(path.join('C:\\\\Users\\\\Honor\\\\.gemini\\\\antigravity\\\\scratch\\\\dejure-web\\\\src\\\\app\\\\biznesu\\\\ispolnitelnoe-proizvodstvo-dlya-biznesa', 'IspolnitelnoeClient.tsx'), content, 'utf-8');
console.log('File generated successfully');
