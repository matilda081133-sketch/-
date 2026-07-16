import Link from 'next/link';
import TeamCarousel from '@/components/TeamCarousel';
import Header from '@/components/Header';
import ServicesBlock from '@/components/ServicesBlock';
import FAQBlock from '@/components/FAQBlock';

export default function Home() {
  return (
    <main>
      <Header />

      {/* HERO (Enhanced) */}
      <section style={{ 
        position: 'relative', 
        minHeight: '85vh', 
        display: 'flex', 
        alignItems: 'center',
        paddingTop: '100px',
        background: 'linear-gradient(145deg, var(--color-cream) 0%, rgba(247, 244, 237, 0.4) 100%)',
        overflow: 'hidden'
      }}>
        {/* Decorative circle */}
        <div style={{
          position: 'absolute', top: '-20%', right: '-10%', width: '800px', height: '800px',
          background: 'radial-gradient(circle, var(--color-grey-blue) 0%, rgba(234, 241, 246, 0) 70%)',
          borderRadius: '50%', zIndex: 0
        }} />
        
        <div className="container grid grid-2" style={{ gap: '60px', alignItems: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{ padding: '40px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
                Юридическая компания в Липецке
              </span>
            </div>
            <h1 style={{ marginBottom: '24px' }}>Надёжная правовая защита ваших интересов</h1>
            <p style={{ fontSize: '20px', color: 'var(--color-text-secondary)', marginBottom: '30px', maxWidth: '520px', lineHeight: 1.5 }}>
              Разрешаем сложные судебные споры. Защищаем активы бизнеса и права граждан с гарантией конфиденциальности.
            </p>
            
            <div style={{ marginBottom: '16px', fontWeight: 600, color: 'var(--color-deep-blue)' }}>
              Выберите ваше направление для первой бесплатной консультации:
            </div>
            <div className="flex gap-4" style={{ marginBottom: '30px' }}>
              <Link href="/grazhdanam" className="btn">Услуги гражданам</Link>
              <Link href="/biznesu" className="btn btn-outline">Услуги бизнесу</Link>
            </div>
            
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--color-text-secondary)', background: 'rgba(23, 50, 77, 0.05)', padding: '6px 12px', borderRadius: '4px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Более 20 лет практики
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--color-text-secondary)', background: 'rgba(23, 50, 77, 0.05)', padding: '6px 12px', borderRadius: '4px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Полная конфиденциальность
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--color-text-secondary)', background: 'rgba(23, 50, 77, 0.05)', padding: '6px 12px', borderRadius: '4px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Честная оценка перспектив
              </div>
            </div>
          </div>
          <div className="img-placeholder" style={{ height: '600px', boxShadow: 'var(--shadow-md)', border: '8px solid var(--color-white)', padding: 0, overflow: 'hidden' }}>
            <img src="/hero_office.png" alt="Юридическая компания" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* PRIORITIES */}
      <section className="section bg-cream">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ marginTop: 0, marginBottom: '16px' }}>Приоритетные направления</h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
              Мы берем в работу только те дела, в которых имеем подтвержденную годами экспертизу.
            </p>
          </div>
          
          <div className="grid grid-3" style={{ gap: '30px' }}>
            <div className="card-service">
              <div className="card-service-num">01</div>
              <div className="card-service-content">
                <h3>Семейные споры</h3>
                <p>Развод, алименты, раздел имущества, установление отцовства и споры о детях. Деликатное решение сложнейших семейных конфликтов.</p>
                <div className="card-service-arrow">Подробнее <span style={{fontSize: '18px'}}>→</span></div>
              </div>
            </div>
            
            <div className="card-service">
              <div className="card-service-num">02</div>
              <div className="card-service-content">
                <h3>Банкротство</h3>
                <p>Всесторонний анализ финансового состояния, списание долгов граждан и защита активов юридических лиц. Полное сопровождение процедуры.</p>
                <div className="card-service-arrow">Подробнее <span style={{fontSize: '18px'}}>→</span></div>
              </div>
            </div>

            <div className="card-service">
              <div className="card-service-num">03</div>
              <div className="card-service-content">
                <h3>Арбитраж и Бизнес</h3>
                <p>Комплексная защита бизнеса: от договорной работы до отражения рейдерских захватов и проверок ФНС.</p>
                <div className="card-service-arrow">Подробнее <span style={{fontSize: '18px'}}>→</span></div>
              </div>
            </div>

            <div className="card-service">
              <div className="card-service-num">04</div>
              <div className="card-service-content">
                <h3>Уголовная защита</h3>
                <p>Защита обвиняемых и потерпевших на стадии следствия и в суде. Специализируемся на экономических преступлениях.</p>
                <div className="card-service-arrow">Подробнее <span style={{fontSize: '18px'}}>→</span></div>
              </div>
            </div>

            <div className="card-service">
              <div className="card-service-num">05</div>
              <div className="card-service-content">
                <h3>Недвижимость и Земля</h3>
                <p>Сопровождение сложных сделок, оспаривание кадастровой стоимости, строительные споры и работа с УФАС.</p>
                <div className="card-service-arrow">Подробнее <span style={{fontSize: '18px'}}>→</span></div>
              </div>
            </div>

            <div className="card-service">
              <div className="card-service-num">06</div>
              <div className="card-service-content">
                <h3>Трудовые споры</h3>
                <p>Защита интересов работников и работодателей. Урегулирование массовых увольнений и споров о невыплате зарплаты.</p>
                <div className="card-service-arrow">Подробнее <span style={{fontSize: '18px'}}>→</span></div>
              </div>
            </div>

            <div className="card-service">
              <div className="card-service-num">07</div>
              <div className="card-service-content">
                <h3>Военное право</h3>
                <p>Оспаривание решений ВВК и действий должностных лиц, помощь в получении законных выплат военнослужащим.</p>
                <div className="card-service-arrow">Подробнее <span style={{fontSize: '18px'}}>→</span></div>
              </div>
            </div>

            <div className="card-service">
              <div className="card-service-num">08</div>
              <div className="card-service-content">
                <h3>Помощь при ДТП</h3>
                <p>Оспаривание вины, взыскание компенсаций со страховых компаний и виновников ДТП без учета износа.</p>
                <div className="card-service-arrow">Подробнее <span style={{fontSize: '18px'}}>→</span></div>
              </div>
            </div>

            <div className="card-service">
              <div className="card-service-num">09</div>
              <div className="card-service-content">
                <h3>Наследство</h3>
                <p>Восстановление сроков, оспаривание завещаний, выдел обязательной доли и решение споров между наследниками.</p>
                <div className="card-service-arrow">Подробнее <span style={{fontSize: '18px'}}>→</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / FACTS */}
      <section className="section bg-white">
        <div className="container">
          <h2 style={{ marginTop: 0, marginBottom: '60px', textAlign: 'center' }}>Факты, а не обещания</h2>
          <div className="grid grid-3" style={{ gap: '40px', width: '100%', textAlign: 'center' }}>
            <div className="card">
              <div style={{ fontSize: '3.5rem', fontWeight: 'bold', color: 'var(--color-primary)', fontFamily: 'var(--font-serif)', marginBottom: '16px' }}>15+</div>
              <p style={{ fontWeight: 600, fontSize: '18px', color: 'var(--color-deep-blue)' }}>Лет судебной практики</p>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', marginTop: '12px' }}>Наши юристы имеют опыт работы следователями и федеральными судьями</p>
            </div>
            <div className="card">
              <div style={{ fontSize: '3.5rem', fontWeight: 'bold', color: 'var(--color-primary)', fontFamily: 'var(--font-serif)', marginBottom: '16px' }}>100%</div>
              <p style={{ fontWeight: 600, fontSize: '18px', color: 'var(--color-deep-blue)' }}>Конфиденциальность</p>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', marginTop: '12px' }}>Гарантируем полную анонимность всех консультаций по ФЗ №152</p>
            </div>
            <div className="card">
              <div style={{ fontSize: '3.5rem', fontWeight: 'bold', color: 'var(--color-primary)', fontFamily: 'var(--font-serif)', marginBottom: '16px' }}>0 ₽</div>
              <p style={{ fontWeight: 600, fontSize: '18px', color: 'var(--color-deep-blue)' }}>Первичный анализ</p>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', marginTop: '12px' }}>Тщательное рассмотрение документов и оценка перспектив дела бесплатно</p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <TeamCarousel />

      {/* CASES */}
      <section className="section bg-cream">
        <div className="container">
          <div className="flex justify-between items-center" style={{ marginBottom: '60px' }}>
            <h2 style={{ margin: 0 }}>Результаты нашей работы</h2>
            <Link href="/praktika" className="btn btn-outline">Смотреть все дела</Link>
          </div>
          <div className="grid grid-2" style={{ gap: '40px' }}>
            
            <div className="card">
              <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <span style={{ fontSize: '12px', fontWeight: 600, padding: '4px 12px', background: 'var(--color-grey-blue)', borderRadius: '16px', color: 'var(--color-primary)' }}>Субсидиарная ответственность</span>
                <span style={{ fontSize: '12px', fontWeight: 600, padding: '4px 12px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: '16px', color: 'var(--color-text-secondary)' }}>2025 год</span>
              </div>
              <h4 style={{ marginTop: 0, marginBottom: '24px' }}>Защита активов бывшего директора на 45 млн руб.</h4>
              
              <div style={{ background: 'var(--color-cream)', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
                <p style={{ fontSize: '15px', margin: 0 }}>
                  <strong style={{ color: 'var(--color-primary)' }}>Ситуация:</strong> Кредиторы пытались привлечь бывшего руководителя к выплате долгов компании-банкрота.
                </p>
              </div>
              <div style={{ padding: '0 20px', marginBottom: '20px', borderLeft: '2px solid var(--color-primary)' }}>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', margin: 0 }}>
                  <strong>Действия:</strong> Адвокаты провели финансово-экономический анализ, доказав деловую цель оспариваемых сделок и отсутствие вины руководителя.
                </p>
              </div>
              <div style={{ background: 'rgba(23, 50, 77, 0.05)', padding: '20px', borderRadius: '8px', marginBottom: '30px', flexGrow: 1 }}>
                <p style={{ fontSize: '15px', margin: 0 }}>
                  <strong style={{ color: 'var(--color-deep-blue)' }}>Результат:</strong> Полный отказ судом в иске. Клиент сохранил личные активы и недвижимость.
                </p>
              </div>

              <Link href="/praktika/case-1" className="link-animated">Детали решения суда <span>→</span></Link>
            </div>

            <div className="card">
              <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <span style={{ fontSize: '12px', fontWeight: 600, padding: '4px 12px', background: 'var(--color-grey-blue)', borderRadius: '16px', color: 'var(--color-primary)' }}>Семейные споры</span>
                <span style={{ fontSize: '12px', fontWeight: 600, padding: '4px 12px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: '16px', color: 'var(--color-text-secondary)' }}>2026 год</span>
              </div>
              <h4 style={{ marginTop: 0, marginBottom: '24px' }}>Раздел бизнеса и поиск скрытых счетов</h4>
              
              <div style={{ background: 'var(--color-cream)', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
                <p style={{ fontSize: '15px', margin: 0 }}>
                  <strong style={{ color: 'var(--color-primary)' }}>Ситуация:</strong> При разводе супруг переоформил долю в ООО на третьих лиц по заниженной стоимости.
                </p>
              </div>
              <div style={{ padding: '0 20px', marginBottom: '20px', borderLeft: '2px solid var(--color-primary)' }}>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', margin: 0 }}>
                  <strong>Действия:</strong> Наложен арест на счета. Поданы иски об оспаривании фиктивной цепочки сделок. Назначена судебная экспертиза стоимости компании.
                </p>
              </div>
              <div style={{ background: 'rgba(23, 50, 77, 0.05)', padding: '20px', borderRadius: '8px', marginBottom: '30px', flexGrow: 1 }}>
                <p style={{ fontSize: '15px', margin: 0 }}>
                  <strong style={{ color: 'var(--color-deep-blue)' }}>Результат:</strong> Клиент получил компенсацию 50% от реальной рыночной стоимости бизнеса и возмещение расходов.
                </p>
              </div>

              <Link href="/praktika/case-2" className="link-animated">Детали решения суда <span>→</span></Link>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <FAQBlock />

      {/* CTA SECTION */}
      <section className="section bg-deep-blue" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', bottom: '-50%', left: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)', borderRadius: '50%' }}></div>
        <div className="container grid grid-2" style={{ gap: '80px', alignItems: 'center', position: 'relative', zIndex: 1 }}>
          <div>
            <h2 style={{ marginTop: 0, color: 'var(--color-white)' }}>Обсудите ситуацию с юристом</h2>
            <p style={{ fontSize: '20px', marginBottom: '40px', color: 'rgba(255,255,255,0.8)' }}>
              Проведем первичный правовой анализ ваших документов и оценим реальные судебные перспективы без скрытых платежей.
            </p>
            <div className="flex-col gap-8">
              <div className="flex items-center gap-4">
                <a href="tel:+79103503111" style={{ fontSize: '28px', fontWeight: 'bold', color: 'var(--color-white)' }}>+7 (910) 350-31-11</a>
              </div>
              <div className="flex items-center gap-4">
                <span style={{ fontSize: '18px', color: 'var(--color-white)' }}>г. Липецк, ул. Советская, д. 35, оф. 213</span>
              </div>
            </div>
          </div>
          
          <div className="card" style={{ padding: '40px', borderRadius: '16px' }}>
            <h3 style={{ marginTop: 0, color: 'var(--color-primary)', marginBottom: '10px' }}>Оставить заявку</h3>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '30px' }}>Перезвоним вам в течение 15 минут в рабочее время.</p>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <input type="text" placeholder="Ваше имя" style={{ padding: '16px', border: '1px solid var(--color-border)', borderRadius: '8px', fontSize: '16px', transition: 'border-color 0.3s', outline: 'none' }} />
              <input type="tel" placeholder="+7 (___) ___-__-__" style={{ padding: '16px', border: '1px solid var(--color-border)', borderRadius: '8px', fontSize: '16px', transition: 'border-color 0.3s', outline: 'none' }} />
              <button type="button" className="btn" style={{ width: '100%', padding: '18px', fontSize: '18px', marginTop: '10px' }}>Обсудить ситуацию с юристом</button>
              <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', textAlign: 'center', margin: 0 }}>
                Отправляя заявку, вы соглашаетесь с <Link href="/privacy" className="link-animated" style={{ fontSize: '13px' }}>политикой конфиденциальности</Link>.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#0B1C2A', color: 'var(--color-white)', padding: '40px 0 20px' }}>
        <div className="container grid grid-4" style={{ gap: '30px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '30px', marginBottom: '20px' }}>
          <div>
            <div style={{ fontSize: '28px', fontWeight: 'bold', fontFamily: 'var(--font-serif)', color: 'var(--color-white)', marginBottom: '16px' }}>
              Де-Юре
            </div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: 1.5, marginBottom: '16px' }}>
              Надежная правовая защита для бизнеса и граждан. Экспертиза, проверенная годами успешной судебной практики.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="#" target="_blank" rel="nofollow" className="footer-social-icon" aria-label="Telegram">
                <svg role="presentation" width="30" height="30" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M85.8219 37.1946C85.8219 37.1946 85.8219 37.1946 85.8219 37.0041C83.1366 29.6723 78.2642 23.3423 71.8637 18.8703C65.4632 14.3982 57.8436 12 50.0356 12C42.2275 12 34.6079 14.3982 28.2074 18.8703C21.8069 23.3423 16.9345 29.6723 14.2492 37.0041C14.2492 37.0041 14.2492 37.0041 14.2492 37.1946C11.2503 45.4682 11.2503 54.5318 14.2492 62.8053C14.2492 62.8053 14.2492 62.8054 14.2492 62.9959C16.9345 70.3277 21.8069 76.6577 28.2074 81.1297C34.6079 85.6018 42.2275 88 50.0356 88C57.8436 88 65.4632 85.6018 71.8637 81.1297C78.2642 76.6577 83.1366 70.3277 85.8219 62.9959C85.8219 62.9959 85.8219 62.9959 85.8219 62.8053C88.8208 54.5318 88.8208 45.4682 85.8219 37.1946V37.1946ZM20.4613 57.6222C19.1397 52.6267 19.1397 47.3733 20.4613 42.3778H27.55C26.9403 47.441 26.9403 52.559 27.55 57.6222H20.4613ZM23.5864 65.2445H28.922C29.8165 68.6434 31.0951 71.9294 32.7331 75.039C28.9955 72.4929 25.8711 69.1473 23.5864 65.2445ZM28.922 34.7555H23.5864C25.8383 30.8647 28.9227 27.52 32.6187 24.961C31.0202 28.0756 29.78 31.3614 28.922 34.7555V34.7555ZM46.1482 79.3456C41.4673 75.9106 38.1797 70.9049 36.8872 65.2445H46.1482V79.3456ZM46.1482 57.6222H35.2484C34.5372 52.5656 34.5372 47.4344 35.2484 42.3778H46.1482V57.6222ZM46.1482 34.7555H36.8872C38.1797 29.0951 41.4673 24.0894 46.1482 20.6544V34.7555ZM76.3323 34.7555H70.9967C70.1022 31.3566 68.8236 28.0706 67.1856 24.961C70.9232 27.507 74.0475 30.8527 76.3323 34.7555ZM53.7704 20.6544C58.4514 24.0894 61.7389 29.0951 63.0315 34.7555H53.7704V20.6544ZM53.7704 79.3456V65.2445H63.0315C61.7389 70.9049 58.4514 75.9106 53.7704 79.3456V79.3456ZM64.6702 57.6222H53.7704V42.3778H64.6702C65.3814 47.4344 65.3814 52.5656 64.6702 57.6222ZM67.2999 75.039C68.9379 71.9294 70.2165 68.6434 71.111 65.2445H76.4466C74.1618 69.1473 71.0375 72.4929 67.2999 75.039ZM79.4574 57.6222H72.3687C72.6787 55.0934 72.8314 52.5478 72.826 50C72.8302 47.4523 72.6775 44.9067 72.3687 42.3778H79.4574C80.779 47.3733 80.779 52.6267 79.4574 57.6222Z" />
                </svg>
              </a>
              <a href="#" target="_blank" rel="nofollow" className="footer-social-icon" aria-label="WhatsApp">
                <svg role="presentation" width="30" height="30" viewBox="0 0 48 48" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0ZM24.2314 12.5C17.8663 12.5 12.4942 17.4255 12.4941 23.9727C12.4941 26.714 13.0015 28.6059 13.4482 30.3047C13.8233 31.6836 14.1543 32.9467 14.1543 34.4414C14.3143 36.4326 17.9823 35.2685 19.1406 33.7793C20.9718 35.1031 22.0251 35.4346 24.292 35.4346C30.5586 35.4011 35.6151 30.2999 35.5938 24.0332C35.5937 17.6682 30.602 12.5 24.2314 12.5ZM24.3857 18.1592V18.165C27.5981 18.349 30.0709 21.0719 29.9453 24.2871C29.7296 27.4955 26.9854 29.9406 23.7734 29.7861C22.768 29.7055 21.8016 29.3614 20.9717 28.7881C20.4699 29.2899 19.6648 29.9402 19.3447 29.8633C18.6774 29.6868 17.8938 26.2951 18.335 23.5098C18.87 20.1452 21.2859 17.9993 24.3857 18.1592Z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 style={{ color: 'var(--color-white)', margin: '0 0 16px 0', fontSize: '16px' }}>Гражданам</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><Link href="/grazhdanam/semejnyj-yurist" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', transition: 'color 0.3s' }}>Семейные споры</Link></li>
              <li><Link href="/grazhdanam/bankrotstvo" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', transition: 'color 0.3s' }}>Банкротство физлиц</Link></li>
              <li><Link href="/grazhdanam/ugolovnyj-advokat" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', transition: 'color 0.3s' }}>Уголовный адвокат</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: 'var(--color-white)', margin: '0 0 16px 0', fontSize: '16px' }}>Бизнесу</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><Link href="/biznesu/arbitrazh" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', transition: 'color 0.3s' }}>Арбитражные споры</Link></li>
              <li><Link href="/biznesu/soprovozhdenie" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', transition: 'color 0.3s' }}>Абонентское обслуживание</Link></li>
              <li><Link href="/biznesu/nalogi" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', transition: 'color 0.3s' }}>Налоговые споры</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: 'var(--color-white)', margin: '0 0 16px 0', fontSize: '16px' }}>Компания</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><Link href="/o-kompanii" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', transition: 'color 0.3s' }}>О нас</Link></li>
              <li><Link href="/specialists" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', transition: 'color 0.3s' }}>Команда</Link></li>
              <li><Link href="/kontakty" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', transition: 'color 0.3s' }}>Контакты</Link></li>
            </ul>
          </div>
        </div>
        <div className="container" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginBottom: '20px', display: 'flex', flexWrap: 'wrap', rowGap: '6px', columnGap: '16px' }}>
          <span>ООО ЮК "ДЕ-ЮРЕ"</span>
          <span>ИНН/КПП: 4800009680/480001001</span>
          <span>ОГРН: 1234800008464</span>
          <span>Юридический адрес: 398902, Липецкая область, г. о. город Липецк, г. Липецк, ул. Юношеская, влд. 46Б, помещение 1</span>
          <span>Расчетный счет: 407 02 810 9 0293 0 008 123</span>
          <span>Банк: АО "АЛЬФА-БАНК"</span>
          <span>БИК Банка: 44525593</span>
          <span>Корреспондентский счет: 301 01 181 02 0000 0000593</span>
        </div>
        <div className="container flex justify-between" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>
          <span>© 2026 ООО «Де-Юре». Все права защищены.</span>
          <Link href="/privacy" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'underline' }}>Политика конфиденциальности</Link>
        </div>
      </footer>
    </main>
  );
}
