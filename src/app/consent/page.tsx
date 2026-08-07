import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Согласие на обработку персональных данных — ЮК «Де-Юре»',
  description: 'Текст согласия на обработку персональных данных, которое даётся при отправке форм на сайте dejure-help.ru. Цели, состав данных, срок действия и порядок отзыва.',
  alternates: {
    canonical: 'https://dejure-help.ru/consent/',
  },
};

export default function ConsentPage() {
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
            <span>Согласие на обработку персональных данных</span>
          </nav>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(24px, 4vw, 36px)',
            fontWeight: 700,
            color: '#FFFFFF',
            lineHeight: 1.25,
            margin: 0,
          }}>
            Согласие на обработку персональных данных
          </h1>
          <p style={{ marginTop: '12px', color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>
            Редакция от 07 августа 2026 г. · Версия 1.0
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ background: '#FFFFFF', padding: '60px 0 80px' }}>
        <div className="container" style={{ maxWidth: '900px' }}>

          {/* Lead */}
          <div style={{
            background: 'var(--color-cream, #F5F1EB)',
            borderLeft: '4px solid var(--color-primary, #10273B)',
            padding: '24px 28px',
            marginBottom: '48px',
            borderRadius: '0 4px 4px 0',
          }}>
            <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.8, color: 'var(--color-text-main)', fontStyle: 'italic' }}>
              Настоящая страница содержит полный текст согласия на обработку персональных данных,
              которое даётся при нажатии кнопки отправки формы и установке соответствующей отметки на сайте{' '}
              <a href="https://dejure-help.ru/" style={{ color: 'var(--color-primary)' }}>dejure-help.ru</a>.
            </p>
          </div>

          <div style={{ fontSize: '16px', lineHeight: 1.85, color: 'var(--color-text-main, #2C3340)' }}>

            {/* Кому */}
            <ConsentSection title="Кому даётся согласие">
              <p>
                Нажимая кнопку отправки формы и устанавливая отметку в соответствующем поле, я свободно, своей волей и в своём интересе
                даю <strong>ООО ЮК «Де-Юре»</strong> (ИНН 4800009680, ОГРН 1234800008464, юридический адрес: 398902, Липецкая область,
                г. Липецк, ул. Юношеская, влд. 46Б, пом. 1) согласие на обработку моих персональных данных.
              </p>
            </ConsentSection>

            {/* Цели */}
            <ConsentSection title="Цели обработки">
              <ul style={{ paddingLeft: '20px', margin: 0 }}>
                <li>Получение и регистрация обращения.</li>
                <li>Обратная связь.</li>
                <li>Предварительная консультация.</li>
                <li>Определение возможности и условий юридической помощи.</li>
                <li>Подготовка договора.</li>
                <li>Предотвращение повторных и ошибочных обращений.</li>
              </ul>
            </ConsentSection>

            {/* Состав данных */}
            <ConsentSection title="Состав персональных данных">
              <ul style={{ paddingLeft: '20px', margin: 0 }}>
                <li>Имя.</li>
                <li>Номер телефона.</li>
                <li>Адрес электронной почты (при предоставлении).</li>
                <li>Предпочтительный способ связи.</li>
                <li>Сведения из текста обращения.</li>
                <li>Дата и время отправки формы.</li>
                <li>URL страницы, с которой отправлена форма.</li>
                <li>Уникальный идентификатор заявки (ID).</li>
                <li>Факт установки отметки согласия и редакция текста согласия на момент отправки.</li>
                <li>IP-адрес и минимальные сведения о браузере (user-agent).</li>
              </ul>
            </ConsentSection>

            {/* Разрешённые действия */}
            <ConsentSection title="Разрешённые действия">
              <p>
                Сбор, запись, систематизация, накопление, хранение, уточнение (обновление, изменение), извлечение,
                использование, доступ уполномоченных лиц, передача уполномоченным обработчикам по поручению,
                блокирование, удаление и уничтожение — с использованием средств автоматизации или без таковых.
              </p>
            </ConsentSection>

            {/* Срок действия */}
            <ConsentSection title="Срок действия согласия">
              <p>
                Согласие действует до достижения указанных целей, но не более <strong>одного года</strong> после
                последнего содержательного взаимодействия, если договор не заключён и отсутствует иное законное
                основание для продолжения обработки.
              </p>
              <p>
                Если договор об оказании юридической помощи заключён, обработка данных продолжается на основании
                договора и требований законодательства (в части бухгалтерского и налогового учёта — не менее 5 лет).
              </p>
              <p>
                Доказательство согласия (запись о факте его получения, версии текста, дате и идентификаторе заявки)
                хранится <strong>три года</strong> после прекращения обработки соответствующей заявки.
              </p>
            </ConsentSection>

            {/* Отзыв */}
            <ConsentSection title="Порядок отзыва согласия">
              <p>
                Согласие можно отозвать в любой момент, направив письменное заявление:
              </p>
              <ul style={{ paddingLeft: '20px', margin: 0 }}>
                <li>по электронной почте: <a href="mailto:info@dejure-help.ru" style={{ color: 'var(--color-primary)' }}>info@dejure-help.ru</a>;</li>
                <li>по юридическому адресу: 398902, Липецкая область, г. Липецк, ул. Юношеская, влд. 46Б, пом. 1.</li>
              </ul>
              <p style={{ marginTop: '12px' }}>
                Отзыв согласия не влияет на законность обработки, осуществлённой до его получения.
                После отзыва обработка прекращается, за исключением случаев, когда она необходима для исполнения
                договора или предусмотрена законом.
              </p>
            </ConsentSection>

            {/* Ограничение */}
            <ConsentSection title="Ограничение действия согласия">
              <p style={{
                fontStyle: 'italic',
                borderLeft: '3px solid var(--color-primary)',
                paddingLeft: '16px',
                color: 'var(--color-text-secondary)',
              }}>
                Настоящее согласие <strong>не распространяется</strong> на отправку рекламных сообщений и звонков.
                Оператор не использует предоставленные данные для маркетинговых коммуникаций.
              </p>
            </ConsentSection>

            {/* Ссылки */}
            <ConsentSection title="Ознакомление с Политикой">
              <p>
                Я подтверждаю ознакомление с{' '}
                <a href="/privacy/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)' }}>
                  Политикой в отношении обработки персональных данных
                </a>.
              </p>
            </ConsentSection>

          </div>

          {/* Back link */}
          <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid rgba(23,50,77,0.1)' }}>
            <a href="/" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--color-primary)',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: 600,
            }}>
              ← Вернуться на главную
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

function ConsentSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '36px', paddingBottom: '36px', borderBottom: '1px solid rgba(23,50,77,0.08)' }}>
      <h2 style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '19px',
        fontWeight: 700,
        color: 'var(--color-deep-blue)',
        marginBottom: '14px',
        marginTop: 0,
      }}>
        {title}
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {children}
      </div>
    </div>
  );
}
