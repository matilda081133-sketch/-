import Link from 'next/link';
import TeamCarousel from '@/components/TeamCarousel';
import Header from '@/components/Header';
import ServicesBlock from '@/components/ServicesBlock';
import FAQBlock from '@/components/FAQBlock';
import PricingBlock from '@/components/PricingBlock';
import FAQ from '@/components/FAQ';

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
            
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', fontWeight: 500, color: 'var(--color-deep-blue)', background: 'rgba(23, 50, 77, 0.05)', padding: '8px 14px', borderRadius: '6px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Более 20 лет практики
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', fontWeight: 500, color: 'var(--color-deep-blue)', background: 'rgba(23, 50, 77, 0.05)', padding: '8px 14px', borderRadius: '6px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Полная конфиденциальность
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', fontWeight: 500, color: 'var(--color-deep-blue)', background: 'rgba(23, 50, 77, 0.05)', padding: '8px 14px', borderRadius: '6px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Честная оценка перспектив
              </div>
            </div>
          </div>
          <div className="img-placeholder" style={{ height: '600px', boxShadow: 'var(--shadow-md)', border: '8px solid var(--color-white)', padding: 0, overflow: 'hidden' }}>
            <img src="hero_office.png" alt="Юридическая компания" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* PRIORITIES */}
      <ServicesBlock />

      {/* WHY US / USP */}
      <section className="section" style={{ background: 'var(--color-white)', padding: '100px 0', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <h2 style={{ 
            marginTop: 0, 
            marginBottom: '60px', 
            fontSize: '42px', 
            fontFamily: 'var(--font-serif)', 
            color: 'var(--color-deep-blue)',
            textAlign: 'left'
          }}>
            Почему мы?
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            borderTop: '1px solid var(--color-primary)', 
            borderLeft: '1px solid rgba(23, 50, 77, 0.1)',
            borderBottom: '1px solid rgba(23, 50, 77, 0.1)'
          }}>
            
            {[
              {
                tag: "Опыт",
                title: "10+ лет боевой практики",
                desc: "Реальные дела и работающие решения. Не ищем оправданий — находим выходы из любых юридических тупиков."
              },
              {
                tag: "Надежность",
                title: "Абсолютная тайна",
                desc: "Ваши бизнес-детали не выйдут за пределы офиса. Защищаем переданную информацию как собственные секреты."
              },
              {
                tag: "Аналитика",
                title: "Никаких шаблонов",
                desc: "Разбираем задачу до мелочей. Создаем выигрышную стратегию, заточенную именно под ваши цели."
              },
              {
                tag: "Вовлеченность",
                title: "Ваш итоговый успех",
                desc: "Предлагаем прозрачные решения без скрытых условий. Минимизируем риски и максимизируем ваш результат."
              },
              {
                tag: "Сервис",
                title: "Персональный эксперт",
                desc: "На дело назначается профильный юрист. Глубокое погружение в контекст и всегда на связи с вами."
              },
              {
                tag: "Прозрачность",
                title: "Фиксированные цены",
                desc: "Никаких игр с тарифами. Озвученная сумма фиксируется в договоре и не меняется в процессе работы."
              }
            ].map((item, i) => (
              <div key={i} className="usp-card" style={{ 
                padding: '40px', 
                borderRight: '1px solid rgba(23, 50, 77, 0.1)',
                borderBottom: i < 3 ? '1px solid rgba(23, 50, 77, 0.1)' : 'none',
                background: 'var(--color-white)',
                position: 'relative'
              }}>
                <div className="usp-accent"></div>
                <div style={{ fontSize: '11px', letterSpacing: '0.1em', color: 'var(--color-text-secondary)', fontWeight: 700, marginBottom: '16px', textTransform: 'uppercase' }}>
                  {item.tag}
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--color-deep-blue)', marginBottom: '16px', fontFamily: 'var(--font-serif)' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}

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

      {/* PRICING SECTION */}
      <PricingBlock />

      {/* FAQ SECTION */}
      <FAQ />

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
          
          <div className="card" style={{ padding: '40px', borderRadius: '0px' }}>
            <h3 style={{ marginTop: 0, color: 'var(--color-primary)', marginBottom: '10px' }}>Оставить заявку</h3>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '30px' }}>Перезвоним вам в течение 15 минут в рабочее время.</p>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <input type="text" placeholder="Ваше имя" style={{ padding: '16px', border: '1px solid var(--color-border)', borderRadius: '0px', fontSize: '16px', transition: 'border-color 0.3s', outline: 'none' }} />
              <input type="tel" placeholder="+7 (___) ___-__-__" style={{ padding: '16px', border: '1px solid var(--color-border)', borderRadius: '0px', fontSize: '16px', transition: 'border-color 0.3s', outline: 'none' }} />
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
            <div style={{ marginBottom: '24px' }}>
              <img 
                src="/-/images/logo-dark.png" 
                alt="Де-Юре" 
                style={{ 
                  height: '200px', 
                  width: 'auto', 
                  display: 'block'
                }} 
              />
            </div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: 1.5, marginBottom: '16px' }}>
              Надежная правовая защита для бизнеса и граждан. Экспертиза, проверенная годами успешной судебной практики.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="#" target="_blank" rel="nofollow" className="footer-social-icon" aria-label="WhatsApp">
                <svg role="presentation" width="30" height="30" viewBox="0 0 48 48" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0ZM24.2314 12.5C17.8663 12.5 12.4942 17.4255 12.4941 23.9727C12.4941 26.714 13.0015 28.6059 13.4482 30.3047C13.8233 31.6836 14.1543 32.9467 14.1543 34.4414C14.3143 36.4326 17.9823 35.2685 19.1406 33.7793C20.9718 35.1031 22.0251 35.4346 24.292 35.4346C30.5586 35.4011 35.6151 30.2999 35.5938 24.0332C35.5937 17.6682 30.602 12.5 24.2314 12.5ZM24.3857 18.1592V18.165C27.5981 18.349 30.0709 21.0719 29.9453 24.2871C29.7296 27.4955 26.9854 29.9406 23.7734 29.7861C22.768 29.7055 21.8016 29.3614 20.9717 28.7881C20.4699 29.2899 19.6648 29.9402 19.3447 29.8633C18.6774 29.6868 17.8938 26.2951 18.335 23.5098C18.87 20.1452 21.2859 17.9993 24.3857 18.1592Z" />
                </svg>
              </a>
              <a href="#" target="_blank" rel="nofollow" className="footer-social-icon" aria-label="VK">
                <svg role="presentation" width="30" height="30" viewBox="0 0 100 100" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50ZM25 34c.406 19.488 10.15 31.2 27.233 31.2h.968V54.05c6.278.625 11.024 5.216 12.93 11.15H75c-2.436-8.87-8.838-13.773-12.836-15.647C66.162 47.242 71.783 41.62 73.126 34h-8.058c-1.749 6.184-6.932 11.805-11.867 12.336V34h-8.057v21.611C40.147 54.362 33.838 48.304 33.556 34H25Z" />
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
