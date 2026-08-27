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
import PricingBlock from '@/components/PricingBlock';
import ProcessBlock from '@/components/ProcessBlock';

export default function SporyPoOsagoClient() {
  const cases: CaseData[] = [
    {
      category: 'Доплата возмещения',
      title: 'Доплата после заниженного расчёта',
      problem: 'Страховая перечислила сумму, которая не учитывала часть повреждений и необходимых восстановительных работ.',
      action: 'Изучили страховое дело и материалы осмотра, организовали техническую оценку, сформулировали мотивированные требования и прошли обязательную досудебную стадию.',
      result: 'Клиент получил дополнительное страховое возмещение и подтверждённые расходы в размере, установленном по итогам рассмотрения.'
    },
    {
      category: 'Отказ в выплате',
      title: 'Отмена необоснованного отказа',
      problem: 'Страховщик отказал в страховом возмещении, сославшись на якобы несоответствие повреждений обстоятельствам ДТП.',
      action: 'Сопоставили материалы аварии, фотографии с места происшествия и технические выводы, подготовили мотивированные возражения и досудебное обращение.',
      result: 'Отказ пересмотрен, страховой случай признан и урегулирован в согласованной форме.'
    },
    {
      category: 'Нарушение ремонта',
      title: 'Ответственность за сорванный ремонт',
      problem: 'Автомобиль передали на СТО по направлению страховщика, но ремонт затянулся, а затем машину вернули без качественного устранения повреждений.',
      action: 'Зафиксировали хронологию, претензионную переписку и фактическое состояние автомобиля, предъявили требования страховщику и продолжили защиту интересов.',
      result: 'В пользу доверителя взысканы предусмотренные законом суммы за ненадлежащее исполнение обязательства по организации восстановительного ремонта.'
    }
  ];

  const faqs = [
    {
      q: 'Страховая мало выплатила по ОСАГО. Что делать?',
      a: 'Не ремонтируйте автомобиль до необходимой фиксации. Соберите заявление, акт осмотра, расчёт, сведения о выплате и фотографии. После проверки определяется, нужна ли техническая оценка и какое требование направлять страховщику.'
    },
    {
      q: 'Можно ли сразу подать иск на страховую?',
      a: 'Для большинства споров гражданина со страховщиком по ОСАГО сначала требуется обратиться к страховщику, а затем к финансовому уполномоченному. Возможность суда и предмет иска оцениваются по пройденным стадиям.'
    },
    {
      q: 'Когда нужна независимая экспертиза?',
      a: 'Когда без специальных знаний нельзя обосновать объём повреждений, стоимость восстановления, причинную связь или недостатки ремонта. Её проводят после проверки соблюдения процедуры осмотра страховщиком.'
    },
    {
      q: 'Что делать, если страховая отказала в выплате?',
      a: 'Получить письменный мотивированный отказ, сохранить подтверждение подачи всех документов и проверить указанное основание. Далее формируется заявление о восстановлении нарушенного права и, при необходимости, обращение к финансовому уполномоченному.'
    },
    {
      q: 'Кто отвечает за задержку или плохой ремонт по направлению?',
      a: 'Обстоятельства нужно проверять по направлению, срокам, документам СТО и переписке. Страховщик отвечает за надлежащую организацию восстановительного ремонта в пределах закона, но конкретные требования зависят от нарушения и доказательств.'
    },
    {
      q: 'Если выплаты не хватило из-за лимита ОСАГО, что дальше?',
      a: 'После определения обязательства страховщика разница может взыскиваться с ответственного лица. Это отдельный спор: на странице предусмотрена ссылка на услугу взыскания ущерба с виновника ДТП.'
    },
    {
      q: 'Сколько длится спор по ОСАГО?',
      a: 'Зависит от стадии, экспертизы, ответа страховщика, рассмотрения финансовым уполномоченным и суда. На первичной оценке рассчитываются ближайший срок и ориентировочная последовательность именно по Вашим документам.'
    },
    {
      q: 'Можно ли поручить дело полностью?',
      a: 'Да, объём может включать документы, взаимодействие со страховщиком, финансового уполномоченного и представительство в суде. Полномочия, участие клиента и внешние расходы фиксируются в договоре.'
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
            <Link href="/grazhdanam/">Гражданам</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/grazhdanam/avtoyurist/">Автоюрист</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Споры по ОСАГО</span>
          </>
        }
        superTitle="Автомобильные споры"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(26px, 3.6vw, 44px)' }}>
              Споры по ОСАГО
            </span>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(26px, 3.6vw, 44px)' }}>
              в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Если страховая мало выплатила, отказала или нарушила порядок ремонта, проверим документы и расчёт, определим обязательный досудебный маршрут и подготовим требования.
          </span>
        }
        primaryCtaText="Проверить ситуацию"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_primary_cta_osago"
        primaryCtaSubtext="Для первичной оценки сообщите дату ДТП, страховую компанию, форму возмещения и какой ответ уже получен."
        trustItems={[
          { text: 'Проверим выплату, отказ, направление на ремонт и материалы осмотра' },
          { text: 'Организуем доказательства и подготовим обращение к страховщику' },
          { text: 'Сопроводим обращение к финансовому уполномоченному и в суд — когда это требуется' }
        ]}
        rightContent={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', maxWidth: '420px' }}>
            <div style={{
              background: 'var(--color-white)',
              padding: '32px 28px',
              border: '1px solid var(--color-border)',
              borderTop: '4px solid var(--color-gold)',
              boxShadow: '0 12px 32px rgba(23, 50, 77, 0.08)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '2px solid var(--color-gold)' }}>
                  <img
                    src="/images/konopkin.jpg"
                    alt="Дмитрий Конопкин — адвокат"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 5%' }}
                  />
                </div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Куратор направления</div>
                  <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)' }}>Дмитрий Конопкин</div>
                  <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>Адвокат, председатель КА «Де-Юре»</div>
                </div>
              </div>
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: '0 0 20px 0' }}>
                Юридическая практика с 2016 года. Опыт следственной работы и детальный анализ материалов ДТП, расчётов страховых компаний и экспертиз.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href="#form" className="btn btn-primary" style={{ textAlign: 'center', padding: '12px 20px', fontSize: '14px' }}>
                  Обсудить спор со страховой
                </a>
                <Link href="/team/konopkin-dmitriy-sergeevich/" style={{ textAlign: 'center', fontSize: '13px', color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'underline' }}>
                  Подробнее об адвокате →
                </Link>
              </div>
            </div>
          </div>
        }
      />

      {/* ═══ БЛОК 2: ЧТО СОХРАНИТЬ ДО СПОРА СО СТРАХОВОЙ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Не меняйте состояние автомобиля,</span> <br />
              <span style={{ display: 'inline-block' }}>пока повреждения не зафиксированы</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Правильные действия сразу после ДТП и получения решения страховщика защищают право на полное возмещение ущерба.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '36px' }}>
            {[
              {
                num: '01',
                title: 'Сохраните первичные документы',
                desc: 'Извещение о ДТП, постановление или определение ГИБДД, схему происшествия, фото- и видеоматериалы, контакты участников и свидетелей.'
              },
              {
                num: '02',
                title: 'Подайте заявление с подтверждением',
                desc: 'Передайте комплект документов способом, позволяющим зафиксировать точную дату и содержание обращения в страховую компанию.'
              },
              {
                num: '03',
                title: 'Предоставьте авто на осмотр',
                desc: 'Предоставьте автомобиль страховщику для осмотра в согласованном порядке; обязательно фиксируйте дату, место и результат осмотра.'
              },
              {
                num: '04',
                title: 'Не ремонтируйте до фиксации',
                desc: 'Не разбирайте, не ремонтируйте и не продавайте автомобиль до надлежащей фиксации повреждений и оценки юридических последствий.'
              },
              {
                num: '05',
                title: 'Сохраняйте все ответы и акты',
                desc: 'Акт осмотра, калькуляцию, направление на СТО, соглашения, письменные ответы, уведомления и официальную переписку со страховщиком.'
              },
              {
                num: '06',
                title: 'Не подписывайте соглашений без проверки',
                desc: 'Перед подписанием соглашения о размере или форме возмещения проверьте, не лишает ли оно права на доплату и дальнейшие требования.'
              }
            ].map((step, idx) => (
              <div key={idx} className="hover-lift" style={{
                background: 'var(--color-white)',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-primary)',
                padding: '32px 26px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', letterSpacing: '0.05em', marginBottom: '12px' }}>
                  {step.num}
                </div>
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 12px 0', lineHeight: 1.3, fontWeight: 700 }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            background: 'rgba(23, 50, 77, 0.05)',
            borderLeft: '4px solid var(--color-gold)',
            padding: '20px 24px',
            fontSize: '14.5px',
            color: 'var(--color-deep-blue)',
            lineHeight: 1.6
          }}>
            <strong>Важное процессуальное правило:</strong> Не следует спешить с заказом платной независимой экспертизы до предоставления страховщику законной возможности осмотреть транспортное средство. Экспертиза — инструмент процессуального доказывания, а не автоматическая первая стадия.
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: С КАКИМИ НАРУШЕНИЯМИ ОБРАЩАЮТСЯ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Когда спор со страховой</span> <br />
              <span style={{ display: 'inline-block' }}>требует проверки</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Помогаем потерпевшим при любых разногласиях со страховой компанией по обязательному страхованию.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px' }}>
            {[
              {
                title: 'Страховая выплатила меньше ожидаемого',
                desc: 'Не учтены скрытые повреждения, необходимые ремонтные работы или детали; спорна причинная связь; суммы выплаты недостаточно для восстановления авто.'
              },
              {
                title: 'В выплате отказали',
                desc: 'Страховщик ссылается на отсутствие страхового случая, неполный пакет документов, спорные обстоятельства ДТП или иные формальные основания.'
              },
              {
                title: 'Затянули решение',
                desc: 'Нет страховой выплаты, направления на восстановительный ремонт или мотивированного письменного ответа в установленный законом 20-дневный срок.'
              },
              {
                title: 'Проблемы с направлением на СТО',
                desc: 'Станция техобслуживания не принимает автомобиль, незаконно требует доплату, затягивает согласование или не соответствует нормативным требованиям.'
              },
              {
                title: 'Ремонт затягивается или выполнен плохо',
                desc: 'Нарушены сроки восстановительного ремонта, часть повреждений не устранена, обнаружены дефекты либо автомобиль возвращён без надлежащего ремонта.'
              },
              {
                title: 'Не возместили связанные убытки',
                desc: 'Отказ в компенсации расходов на эвакуацию, независимую экспертизу, хранение транспортного средства или утрату товарной стоимости (УТС).'
              }
            ].map((item, idx) => (
              <div key={idx} className="hover-lift" style={{
                padding: '32px 28px',
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-primary)',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 12px 0', lineHeight: 1.35, fontWeight: 700 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: КАКИЕ МАРШРУТЫ ВОЗМОЖНЫ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Маршруты урегулирования</span> <br />
              <span style={{ display: 'inline-block' }}>спора по ОСАГО</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Позволяет безошибочно определить порядок действий: претензия страховщику, финансовый омбудсмен или иск.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
            {[
              {
                step: '01',
                name: 'Урегулирование со страховщиком',
                when: 'Заявление ещё рассматривается, не представлены отдельные документы или возможно устранить разногласие без конфликта.',
                result: 'Комплектная правовая позиция, зафиксированные требования и официальное подтверждение подачи.'
              },
              {
                step: '02',
                name: 'Заявление о восстановлении нарушенного права (Претензия)',
                when: 'Получена заниженная выплата, отказ, допущена просрочка либо нарушены условия восстановительного ремонта на СТО.',
                result: 'Мотивированное досудебное требование с расчётом и доказательствами; ответ страховщика либо фиксация пропуска срока.'
              },
              {
                step: '03',
                name: 'Служба финансового уполномоченного (Омбудсмен)',
                when: 'Обязательный досудебный этап для потребительских споров граждан со страховыми компаниями по закону № 123-ФЗ.',
                result: 'Официальное обращение по предмету спора, комплект приложений, сопровождение независимой экспертизы и вынесения решения.'
              },
              {
                step: '04',
                name: 'Судебная защита прав потерпевшего',
                when: 'Решение финансового уполномоченного не устраняет нарушение, не исполнено страховщиком либо закон допускает прямой иск.',
                result: 'Исковое заявление и профессиональное судебное представительство в пределах заявленного предмета спора.'
              },
              {
                step: '05',
                name: 'Отдельное требование к виновнику ДТП',
                when: 'Ущерб превышает установленный лимит ответственности страховщика (400 000 ₽) или часть вреда не покрывается ОСАГО.',
                result: 'Маршрутизация на самостоятельное взыскание разницы или полного ущерба с причинителя вреда.'
              }
            ].map((route, i) => (
              <div key={i} style={{
                background: 'var(--color-white)',
                border: '1px solid var(--color-border)',
                borderLeft: '4px solid var(--color-primary)',
                padding: '24px 28px',
                display: 'grid',
                gridTemplateColumns: '80px 1.2fr 1.5fr 1.5fr',
                gap: '20px',
                alignItems: 'center'
              }}>
                <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-gold)' }}>
                  {route.step}
                </div>
                <div>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)' }}>{route.name}</strong>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)', textTransform: 'uppercase', marginBottom: '4px' }}>Когда применяется:</div>
                  <div style={{ fontSize: '14px', color: 'var(--color-deep-blue)', lineHeight: 1.5 }}>{route.when}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)', textTransform: 'uppercase', marginBottom: '4px' }}>Рабочий результат:</div>
                  <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>{route.result}</div>
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
            * Точная процессуальная последовательность зависит от статуса заявителя, подписанных соглашений, выбранной формы возмещения (деньги или СТО) и течения установленных сроков.
          </p>
        </div>
      </section>

      {/* ═══ БЛОК 5: ЧТО СДЕЛАЕТ ЮРИСТ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Что сделает юрист</span> <br />
              <span style={{ display: 'inline-block' }}>по спорам по ОСАГО</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Полный комплекс процессуальной работы — от проверки калькуляции страховщика до фактического зачисления денег на счёт.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '48px' }}>
            {[
              {
                num: '01',
                title: 'Определит предмет спора',
                desc: 'Отделит требования к страховой компании от требований к виновнику аварии, автосервису или дорожным службам.'
              },
              {
                num: '02',
                title: 'Проверит процедуру',
                desc: 'Изучит первичное заявление, комплект документов, организацию осмотра, соблюдение сроков, ответы и форму возмещения.'
              },
              {
                num: '03',
                title: 'Проверит расчёт и доказательства',
                desc: 'Сопоставит акт осмотра, калькуляцию, характер повреждений, ремонтные документы СТО и заключения экспертов.'
              },
              {
                num: '04',
                title: 'Сформулирует требования',
                desc: 'Подготовит заявление страховщику, обращение в службу финансового уполномоченного, возражения и судебный иск.'
              },
              {
                num: '05',
                title: 'Представит интересы',
                desc: 'Организует профессиональное взаимодействие со страховщиком, финансовым омбудсменом, экспертами и судом.'
              },
              {
                num: '06',
                title: 'Зафиксирует следующий шаг',
                desc: 'После каждого процессуального этапа объяснит результат, риски, сроки и расходы без необоснованных обещаний.'
              }
            ].map((item, idx) => (
              <div key={idx} className="hover-lift" style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '38px 24px 30px 24px',
                border: '1px solid var(--color-border)',
                borderTop: '4px solid var(--color-gold)',
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                position: 'relative',
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)'
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
                  borderRadius: '2px'
                }}>
                  {item.num}
                </div>
                <h3 style={{ margin: '8px 0 10px 0', fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)' }}>
                  {item.title}
                </h3>
                <p style={{ margin: 0, fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* ГРАНИЦЫ УСЛУГИ */}
          <div style={{
            background: 'linear-gradient(135deg, #10273B 0%, #17375E 50%, #0D1E2D 100%)',
            border: '1px solid rgba(193, 160, 102, 0.4)',
            borderTop: '3px solid var(--color-gold)',
            boxShadow: '0 8px 30px rgba(16, 39, 59, 0.18)',
            padding: '36px 32px',
            color: '#FFFFFF'
          }}>
            <div className="grid grid-2" style={{ gap: '36px' }}>
              <div>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: '#FFFFFF', margin: '0 0 18px 0', paddingBottom: '12px', borderBottom: '1px solid rgba(255, 255, 255, 0.15)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
                  <span>Входит в юридическую помощь</span>
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {[
                    'Анализ документов, материалов осмотра и стадии урегулирования убытка',
                    'Расчёт процессуального маршрута и сопоставление калькуляции с нормами Единой методики',
                    'Составление заявления о восстановлении нарушенного права страховщику (претензия)',
                    'Подготовка полного комплекта документов в службу финансового уполномоченного',
                    'Подготовка искового заявления и судебное представительство в согласованном объёме'
                  ].map((text, i) => (
                    <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}><polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
                      <span style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.5 }}>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: '#FFFFFF', margin: '0 0 18px 0', paddingBottom: '12px', borderBottom: '1px solid rgba(255, 255, 255, 0.15)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                  <span>Оценивается отдельно</span>
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {[
                    'Независимая автотехническая экспертиза и оценка стоимости восстановительного ремонта',
                    'Оплата государственной пошлины, почтовые расходы и судебные издержки',
                    'Взыскание сверхлимитного ущерба или разницы с виновника происшествия',
                    'Споры по добровольному страхованию КАСКО (отдельный процессуальный порядок)'
                  ].map((text, i) => (
                    <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}><polyline points="20 6 9 17 4 12" /></svg>
                      <span style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.5 }}>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 6: ДОКУМЕНТЫ ДЛЯ ПЕРВИЧНОЙ ОЦЕНКИ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Документы для</span> <br />
              <span style={{ display: 'inline-block' }}>оценки спора по ОСАГО</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Чем полнее комплект документов, тем точнее юрист определит перспективу доплаты или отмены отказа.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '24px', marginBottom: '32px' }}>
            {[
              {
                cat: 'Обязательные документы',
                items: ['Дата, место и обстоятельства ДТП', 'Извещение о ДТП (европротокол) либо документы ГИБДД', 'Полис ОСАГО / сведения о договоре страхования', 'Заявление о страховом возмещении и отметка о принятии', 'Письменный ответ, уведомление или отказ страховщика']
              },
              {
                cat: 'При споре о сумме выплаты',
                items: ['Акт осмотра транспортного средства страховщиком', 'Калькуляция стоимости восстановительного ремонта', 'Банковская выписка о сумме поступившего страхового возмещения', 'Соглашение о размере страховой выплаты (при наличии)', 'Фотографии повреждений до проведения ремонта']
              },
              {
                cat: 'При проблемах с ремонтом на СТО',
                items: ['Направление на восстановительный ремонт, выданное страховщиком', 'Заказ-наряд и акт приёма-передачи автомобиля станции техобслуживания', 'Уведомления станции о сроках, доплатах или отсутствии запчастей', 'Фотоматериалы некачественно выполненных работ и дефектов', 'Претензии, направленные в адрес СТО и страховой компании']
              },
              {
                cat: 'По досудебной стадии',
                items: ['Заявление о восстановлении нарушенного права (претензия страховщику)', 'Почтовые квитанции и описи вложения, подтверждающие отправку', 'Письменный ответ страховой компании на претензию', 'Обращение в службу финансового уполномоченного и вынесенное решение', 'Материалы независимой экспертизы, назначенной омбудсменом']
              }
            ].map((grp, i) => (
              <div key={i} style={{
                background: 'var(--color-white)',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-primary)',
                padding: '30px 26px'
              }}>
                <h3 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', margin: '0 0 16px 0', fontWeight: 700 }}>
                  {grp.cat}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {grp.items.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '14px', color: 'var(--color-deep-blue)', lineHeight: 1.5 }}>
                      <span style={{ color: 'var(--color-gold)', fontWeight: 'bold' }}>—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{
            background: 'var(--color-white)',
            border: '1px dashed var(--color-border)',
            padding: '16px 20px',
            fontSize: '13.5px',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.55
          }}>
            <strong>Безопасность данных:</strong> Не передавайте документы через открытые формы на сайте. Безопасный способ передачи копий для правового анализа согласуем после первого звонка.
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 7: СРОКИ И ЭТАПЫ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Сроки рассмотрения</span> <br />
              <span style={{ display: 'inline-block' }}>и этапы спора</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              По закону об ОСАГО страховщик обязан в течение 20 календарных дней (за исключением праздников) произвести выплату, выдать направление на ремонт или направить мотивированный отказ.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '32px' }}>
            {[
              {
                stage: 'Осмотр авто',
                time: 'до 5 рабочих дней',
                desc: 'Страховщик обязан организовать и провести осмотр повреждённого ТС после получения заявления.'
              },
              {
                stage: 'Решение по выплате/ремонту',
                time: '20 календарных дней',
                desc: 'Срок принятия решения о страховом возмещении либо направлении мотивированного отказа.'
              },
              {
                stage: 'Ответ на претензию',
                time: 'от 10 до 30 дней',
                desc: 'Срок рассмотрения заявления о восстановлении нарушенного права зависит от способа и формы подачи.'
              },
              {
                stage: 'Финансовый уполномоченный',
                time: '15 рабочих дней',
                desc: 'Срок рассмотрения обращения потребителя службой финансового уполномоченного (до 25 дней при экспертизе).'
              },
              {
                stage: 'Обращение в суд',
                time: '30 дней после решения',
                desc: 'Специальный процессуальный срок для обжалования решения омбудсмена или предъявления иска к страховщику.'
              }
            ].map((item, idx) => (
              <div key={idx} style={{
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-primary)',
                padding: '28px 24px'
              }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', marginBottom: '6px' }}>{item.stage}</div>
                <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', marginBottom: '12px' }}>{item.time}</div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>
            * Нормативная база проверена 13.08.2026. Точные сроки рассчитываются индивидуально по материалам дела.
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 8: КУРАТОР УСЛУГИ ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name="Дмитрий Сергеевич Конопкин"
        position="Адвокат, председатель Коллегии адвокатов «Де-Юре»"
        imageUrl="/images/konopkin.jpg"
        imagePosition="center 5%"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Юридическая практика с 2016 года; опыт следственной работы помогает детально анализировать материалы происшествий, договоры и позиции страховых компаний.
          </span>,
          <ul key="2" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>
                Специализируется на автомобильных и страховых спорах: споры по ОСАГО и КАСКО, отказ в выплате, занижение возмещения, некачественный ремонт и споры по ДТП.
              </span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>
                Оценивает материалы страхового дела, калькуляции и экспертные заключения по Единой методике Банка России, выстраивает мотивированную позицию для претензии, службы омбудсмена и суда.
              </span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>
                Защищает интересы автовладельцев в Липецке и Липецкой области, а также ведет дела дистанционно по всей России.
              </span>
            </li>
          </ul>,
          <a key="3" href="/specialisty/konopkin-dmitriy-sergeevich/" style={{ display: 'inline-block', marginTop: '16px', fontSize: '14px', color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }} data-analytics="specialist_profile_click">
            Подробнее об адвокате Дмитрии Сергеевиче Конопкине →
          </a>
        ]}
        buttonText="Обсудить спор по ОСАГО с Дмитрием Сергеевичем"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 9: ПРАКТИКА И КЕЙСЫ ═══ */}
      <CasesBlock
        title="Примеры дел по страховым спорам"
        showAllLink="/praktika/"
        showAllText="Смотреть всю практику"
        showDemoWarning={true}
        cases={cases}
      />

      {/* ═══ БЛОК 10: КАК ПРОХОДИТ РАБОТА ═══ */}
      <ProcessBlock
        title="Как проходит работа по спору"
        subtitle="Прозрачная и последовательная процедура защиты интересов потерпевшего на всех этапах"
        steps={[
          {
            num: '01',
            title: 'Анализ документов и стадии',
            desc: 'Изучаем извещение о ДТП, акт осмотра, калькуляцию страховщика, мотивы отказа или состояние ремонта на СТО.'
          },
          {
            num: '02',
            title: 'Проверка расчёта и доказательств',
            desc: 'Сопоставляем калькуляцию с Единой методикой Банка России, определяем необходимость независимой технической оценки.'
          },
          {
            num: '03',
            title: 'Согласование маршрута и условий',
            desc: 'Предлагаем оптимальный процессуальный маршрут, фиксируем состав работ и стоимость юридической помощи в договоре.'
          },
          {
            num: '04',
            title: 'Досудебные требования и омбудсмен',
            desc: 'Готовим мотивированную претензию страховщику и обращение в службу финансового уполномоченного с комплектом доказательств.'
          },
          {
            num: '05',
            title: 'Судебная защита и исполнение',
            desc: 'При необходимости представляем интересы в суде до фактического перечисления страхового возмещения и судебных расходов.'
          }
        ]}
        ctaTitle="Готовы разобрать вашу ситуацию со страховой"
        ctaSubtitle="Оставьте номер телефона — адвокат свяжется с вами и подскажет законный порядок действий."
        ctaButtonText="Обсудить спор по ОСАГО"
        ctaButtonHref="#form"
      />

      {/* ═══ БЛОК 11: СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость юридической помощи"
        subtitle="Стоимость зависит от стадии урегулирования, объёма доказательств и необходимости судебного представительства."
        tiers={[
          {
            title: 'Анализ документов и отказ',
            subtitle: 'Первичная правовая оценка спора',
            price: 'от 5 000 ₽',
            features: [
              { name: 'Анализ материалов ДТП и страхового дела', value: '✓' },
              { name: 'Проверка законности отказа или калькуляции', value: '✓' },
              { name: 'Определение обязательного маршрута', value: '✓' },
              { name: 'Письменные рекомендации автоюриста', value: '✓' }
            ],
            buttonText: 'Получить оценку',
            buttonHref: '#form'
          },
          {
            title: 'Претензия и финомбудсмен',
            subtitle: 'Полное досудебное урегулирование',
            price: 'от 10 000 ₽',
            popular: true,
            badgeText: 'Популярно',
            features: [
              { name: 'Подготовка мотивированной претензии страховщику', value: '✓' },
              { name: 'Формирование доказательственной базы', value: '✓' },
              { name: 'Обращение к финансовому уполномоченному', value: '✓' },
              { name: 'Процессуальный контроль вынесения решения', value: '✓' }
            ],
            buttonText: 'Заказать услугу',
            buttonHref: '#form'
          },
          {
            title: 'Судебное ведение спора',
            subtitle: 'Защита в суде под ключ',
            price: 'от 25 000 ₽',
            features: [
              { name: 'Подготовка и подача искового заявления', value: '✓' },
              { name: 'Участие адвоката во всех заседаниях суда', value: '✓' },
              { name: 'Взыскание возмещения, неустоек и штрафов', value: '✓' },
              { name: 'Контроль фактического исполнения решения суда', value: '✓' }
            ],
            buttonText: 'Судебная защита',
            buttonHref: '#form'
          }
        ]}
        disclaimer="Стоимость определяется после изучения документов и фиксируется в договоре. Независимая экспертиза, оценка, почтовые и иные внешние расходы согласуются отдельно."
      />

      {/* ═══ БЛОК 12: ЧАСТЫЕ ВОПРОСЫ ═══ */}
      <FAQBlock
        superTitle="Частые вопросы"
        title="Ответы на частые вопросы"
        subtitle="Разъяснения адвоката Дмитрия Конопкина по спорам со страховыми компаниями по ОСАГО"
        ctaText="Задать свой вопрос"
        ctaLink="#form"
        faqs={faqs}
      />

      {/* ═══ БЛОК 13: СВЯЗАННЫЕ УСЛУГИ ═══ */}
      <section className="section bg-cream" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Другие автомобильные</span> <br />
              <span style={{ display: 'inline-block' }}>ситуации</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Смежные направления помощи при дорожно-транспортных происшествиях и страховых спорах.
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
          
          <div className="grid grid-4" style={{ gap: '20px' }}>
            <Link href="/grazhdanam/avtoyurist/spory-po-kasko/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <div 
                className="card related-service-card" 
                style={{ 
                  height: '100%', 
                  minHeight: '160px',
                  padding: '28px 22px', 
                  background: 'var(--color-white)', 
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  borderRadius: '0',
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between',
                  transition: 'all 0.3s',
                  position: 'relative'
                }}
              >
                <div>
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                    <span style={{ display: 'inline-block' }}>Споры</span> <br /><span style={{ display: 'inline-block' }}>по КАСКО</span>
                  </h3>
                  <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    Защита при отказе, недоплате, споре по ремонту, угону или полной гибели автомобиля.
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

            <Link href="/grazhdanam/avtoyurist/vzyskanie-ushcherba-s-vinovnika-dtp/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <div 
                className="card related-service-card" 
                style={{ 
                  height: '100%', 
                  minHeight: '160px',
                  padding: '28px 22px', 
                  background: 'var(--color-white)', 
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  borderRadius: '0',
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between',
                  transition: 'all 0.3s',
                  position: 'relative'
                }}
              >
                <div>
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                    <span style={{ display: 'inline-block' }}>Взыскание</span> <br /><span style={{ display: 'inline-block' }}>с виновника ДТП</span>
                  </h3>
                  <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    Взыскание ущерба сверх страхового лимита ОСАГО или при отсутствии полиса.
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

            <Link href="/grazhdanam/avtoyurist/osparivanie-viny-v-dtp/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <div 
                className="card related-service-card" 
                style={{ 
                  height: '100%', 
                  minHeight: '160px',
                  padding: '28px 22px', 
                  background: 'var(--color-white)', 
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  borderRadius: '0',
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between',
                  transition: 'all 0.3s',
                  position: 'relative'
                }}
              >
                <div>
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                    <span style={{ display: 'inline-block' }}>Оспаривание</span> <br /><span style={{ display: 'inline-block' }}>вины в ДТП</span>
                  </h3>
                  <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    Защита при спорных обстоятельствах аварии, обоюдной вине или необоснованном обвинении.
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

            <Link href="/grazhdanam/avtoyurist/vzyskanie-ushcherba-pri-dtp-bez-osago/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <div 
                className="card related-service-card" 
                style={{ 
                  height: '100%', 
                  minHeight: '160px',
                  padding: '28px 22px', 
                  background: 'var(--color-white)', 
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  borderRadius: '0',
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between',
                  transition: 'all 0.3s',
                  position: 'relative'
                }}
              >
                <div>
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                    <span style={{ display: 'inline-block' }}>ДТП без</span> <br /><span style={{ display: 'inline-block' }}>ОСАГО</span>
                  </h3>
                  <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    Взыскание компенсации ущерба, если у виновника происшествия отсутствует полис.
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
          </div>

          <div style={{ marginTop: '32px' }}>
            <Link href="/grazhdanam/avtoyurist/" className="all-services-link" style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '16px', textDecoration: 'underline', textUnderlineOffset: '4px', display: 'inline-flex', alignItems: 'center', gap: '6px', transition: 'color 0.2s ease' }}>
              Смотреть все услуги автоюриста →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 14: ФИНАЛЬНАЯ ФОРМА ═══ */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px', padding: '80px 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', background: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>
                  Связаться с нами
                </span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                Проверим документы и определим следующий шаг
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Оставьте номер телефона и кратко укажите: дату ДТП, страховую компанию, была ли выплата или отказ и обращались ли Вы к финансовому уполномоченному.
              </p>

              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация автоюриста</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Позвоните прямо сейчас: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (910) 350-31-11</a>
                </p>
              </div>

              <div style={{ background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55, marginTop: '20px' }}>
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Безопасность данных:</strong>
                Не указывайте в форме паспортные данные, номер полиса и иные конфиденциальные сведения. Безопасный способ передачи документов согласуем после звонка.
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm 
                title="Обсудить спор по ОСАГО"
                subtitle="Оставьте имя и номер телефона. Автоюрист перезвонит в течение 15 минут в рабочее время."
                buttonText="Обсудить спор по ОСАГО"
                commentPlaceholder="Кратко опишите ситуацию: дата ДТП, страховая, была ли выплата/отказ…"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
