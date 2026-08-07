import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Политика в отношении обработки персональных данных — ЮК «Де-Юре»',
  description: 'Политика ООО ЮК «Де-Юре» в отношении обработки персональных данных: цели, правовые основания, состав данных, права субъектов и порядок их реализации.',
  alternates: {
    canonical: 'https://dejure-help.ru/privacy/',
  },
};

export default function PrivacyPage() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section style={{
        background: 'var(--color-deep-blue)',
        padding: '160px 0 48px',
      }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <nav style={{ marginBottom: '20px', fontSize: '13px', color: 'rgba(255,255,255,0.55)' }}>
            <a href="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Главная</a>
            <span style={{ margin: '0 8px' }}>/</span>
            <span>Политика обработки персональных данных</span>
          </nav>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(24px, 4vw, 36px)',
            fontWeight: 700,
            color: '#FFFFFF',
            lineHeight: 1.25,
            margin: 0,
          }}>
            <span style={{ display: 'block' }}>Политика</span>
            <span style={{ display: 'block' }}>в отношении обработки</span>
            <span style={{ display: 'block' }}>персональных данных</span>
          </h1>
          <p style={{ marginTop: '12px', color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>
            Редакция от 07 августа 2026 г.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ background: '#FFFFFF', padding: '60px 0 80px' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ fontSize: '16px', lineHeight: 1.85, color: 'var(--color-text-main, #2C3340)' }}>

            <PolicySection num="1" title="Общие положения">
              <p>Настоящая Политика определяет порядок обработки персональных данных в ООО ЮК «Де-Юре» (ИНН 4800009680, ОГРН 1234800008464, юридический адрес: 398902, Липецкая область, г. Липецк, ул. Юношеская, влд. 46Б, пом. 1; далее — «Оператор»). Политика разработана в соответствии с требованиями Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных».</p>
              <p>Политика доступна на сайте https://dejure-help.ru/privacy/ без регистрации, авторизации и принятия cookie. Продолжение использования сайта и (или) отправка форм означают ознакомление с Политикой и согласие с её условиями в части автоматически собираемых технических данных.</p>
            </PolicySection>

            <PolicySection num="2" title="Оператор и контактные данные">
              <p><strong>ООО ЮК «Де-Юре»</strong><br />
              ИНН: 4800009680 | ОГРН: 1234800008464<br />
              Юридический адрес: 398902, Липецкая область, г. Липецк, ул. Юношеская, влд. 46Б, пом. 1<br />
              Фактический адрес: г. Липецк, ул. Советская, д. 35, оф. 213<br />
              E-mail: <a href="mailto:info@dejure-help.ru" style={{ color: 'var(--color-primary)' }}>info@dejure-help.ru</a><br />
              Телефон: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)' }}>+7 (910) 350-31-11</a></p>
            </PolicySection>

            <PolicySection num="3" title="Принципы обработки">
              <ul style={{ paddingLeft: '20px', margin: '0' }}>
                <li>Законность, справедливость и прозрачность.</li>
                <li>Ограничение целями: данные собираются только для заявленных целей.</li>
                <li>Минимизация данных: объём не превышает необходимый для цели.</li>
                <li>Точность: данные поддерживаются в актуальном состоянии.</li>
                <li>Ограничение хранения: данные хранятся не дольше необходимого.</li>
                <li>Целостность и конфиденциальность: применяются технические и организационные меры защиты.</li>
              </ul>
            </PolicySection>

            <PolicySection num="4" title="Цели и правовые основания обработки">
              <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '8px', fontSize: '14px' }}>
                <thead>
                  <tr style={{ background: 'var(--color-cream, #F5F1EB)' }}>
                    <th style={{ padding: '10px 14px', textAlign: 'left', border: '1px solid rgba(23,50,77,0.12)', fontWeight: 700 }}>Цель</th>
                    <th style={{ padding: '10px 14px', textAlign: 'left', border: '1px solid rgba(23,50,77,0.12)', fontWeight: 700 }}>Правовое основание</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Получение, регистрация и обработка обращения', 'Согласие субъекта (ст. 6 ч. 1 п. 1 № 152-ФЗ)'],
                    ['Обратная связь и предварительная консультация', 'Согласие субъекта'],
                    ['Определение возможности и условий юридической помощи', 'Согласие субъекта; преддоговорные действия (ст. 6 ч. 1 п. 5)'],
                    ['Подготовка договора и его исполнение', 'Исполнение договора (ст. 6 ч. 1 п. 5)'],
                    ['Предотвращение повторных и ошибочных обращений', 'Согласие субъекта; законный интерес'],
                    ['Ведение бухгалтерского и налогового учёта', 'Исполнение законодательного обязательства (ст. 6 ч. 1 п. 2)'],
                    ['Исполнение требований законодательства', 'Выполнение обязанности оператора (ст. 6 ч. 1 п. 2)'],
                  ].map(([goal, basis], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : 'rgba(245,241,235,0.4)' }}>
                      <td style={{ padding: '9px 14px', border: '1px solid rgba(23,50,77,0.1)' }}>{goal}</td>
                      <td style={{ padding: '9px 14px', border: '1px solid rgba(23,50,77,0.1)' }}>{basis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </PolicySection>

            <PolicySection num="5" title="Состав обрабатываемых данных">
              <p><strong>Данные, предоставляемые субъектом:</strong></p>
              <ul style={{ paddingLeft: '20px' }}>
                <li>Имя (обязательно).</li>
                <li>Номер телефона (обязательно).</li>
                <li>Адрес электронной почты (при указании).</li>
                <li>Предпочтительный способ связи.</li>
                <li>Сведения из текста обращения.</li>
              </ul>
              <p><strong>Данные, фиксируемые автоматически:</strong></p>
              <ul style={{ paddingLeft: '20px' }}>
                <li>Дата и время обращения.</li>
                <li>URL страницы, с которой отправлена форма.</li>
                <li>Уникальный идентификатор заявки (ID).</li>
                <li>Факт установки отметки согласия и редакция текста согласия.</li>
                <li>IP-адрес и минимальные сведения о браузере (user-agent).</li>
              </ul>
              <p style={{ fontStyle: 'italic', fontSize: '14px', color: 'var(--color-text-secondary)', borderLeft: '3px solid var(--color-primary)', paddingLeft: '14px', marginTop: '12px' }}>
                Мы не запрашиваем и просим не указывать в формах паспортные данные, сведения о состоянии здоровья и иные специальные категории данных (ст. 10 № 152-ФЗ). Такие сведения передаются юристу после установления защищённого канала связи.
              </p>
            </PolicySection>

            <PolicySection num="6" title="Инфраструктура и место обработки">
              <p>Первичная запись заявок производится в базе данных на территории Российской Федерации — на инфраструктуре Timeweb (Россия) или в российском контуре Bitrix24. Sanity, Sentry и мессенджеры не являются местом первичной записи заявок.</p>
              <p>Все базы данных с персональными данными размещены на серверах в Российской Федерации в соответствии с требованиями ст. 18.1 № 152-ФЗ.</p>
            </PolicySection>

            <PolicySection num="7" title="Передача данных третьим лицам">
              <p>Оператор не продаёт персональные данные. Передача допускается в следующих случаях:</p>
              <ul style={{ paddingLeft: '20px' }}>
                <li><strong>Уполномоченные обработчики по поручению</strong> (Timeweb, Bitrix24) — только в объёме, необходимом для оказания услуг, на основании договоров поручения обработки с обязательствами по конфиденциальности.</li>
                <li><strong>Коллегия адвокатов «Де-Юре»</strong> — при наличии согласия клиента и необходимости привлечения адвоката.</li>
                <li><strong>Государственные органы</strong> — при наличии законного требования.</li>
              </ul>
            </PolicySection>

            <PolicySection num="8" title="Сроки хранения">
              <ul style={{ paddingLeft: '20px' }}>
                <li>Заявки без заключения договора: не более 1 года с момента последнего взаимодействия.</li>
                <li>Доказательства согласия: 3 года после прекращения обработки конкретной заявки.</li>
                <li>Договорная документация: в соответствии с требованиями законодательства о бухгалтерском учёте (не менее 5 лет).</li>
                <li>Запись о факте обращения (лог): 3 года.</li>
              </ul>
            </PolicySection>

            <PolicySection num="9" title="Права субъектов персональных данных">
              <p>Вы имеете право:</p>
              <ul style={{ paddingLeft: '20px' }}>
                <li>Получить подтверждение факта обработки и копию данных (ст. 14 № 152-ФЗ).</li>
                <li>Потребовать уточнения, блокирования или уничтожения неточных данных (ст. 21).</li>
                <li>Отозвать согласие на обработку (ст. 9 ч. 2); отзыв не влияет на законность обработки до его получения.</li>
                <li>Обжаловать действия Оператора в Роскомнадзоре или суде.</li>
              </ul>
              <p>Запросы направляйте на <a href="mailto:info@dejure-help.ru" style={{ color: 'var(--color-primary)' }}>info@dejure-help.ru</a> или по юридическому адресу. Ответ предоставляется в течение 30 дней.</p>
            </PolicySection>

            <PolicySection num="10" title="Меры защиты">
              <p>Оператор применяет организационные и технические меры защиты: разграничение доступа, шифрование передаваемых данных (HTTPS), обучение сотрудников, хранение данных на защищённой инфраструктуре в РФ.</p>
            </PolicySection>

            <PolicySection num="11" title="Cookie-файлы">
              <p>Сведения об используемых cookie-файлах изложены в отдельном документе: <a href="/cookies/" style={{ color: 'var(--color-primary)' }}>Политика использования файлов cookie</a>.</p>
            </PolicySection>

            <PolicySection num="12" title="Обновление Политики">
              <p>Оператор вправе изменять Политику. Актуальная редакция публикуется на этой странице. Продолжение использования сайта после публикации изменений означает принятие обновлённой Политики.</p>
            </PolicySection>

            <PolicySection num="13" title="Контакты">
              <p>По вопросам обработки персональных данных:<br />
              E-mail: <a href="mailto:info@dejure-help.ru" style={{ color: 'var(--color-primary)' }}>info@dejure-help.ru</a><br />
              Адрес: 398902, Липецкая область, г. Липецк, ул. Юношеская, влд. 46Б, пом. 1</p>
            </PolicySection>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function PolicySection({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '40px', paddingBottom: '40px', borderBottom: '1px solid rgba(23,50,77,0.08)' }}>
      <h2 style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '20px',
        fontWeight: 700,
        color: 'var(--color-deep-blue)',
        marginBottom: '16px',
        marginTop: 0,
      }}>
        {num}. {title}
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {children}
      </div>
    </div>
  );
}
