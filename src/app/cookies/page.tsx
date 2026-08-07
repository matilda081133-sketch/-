import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Политика использования файлов cookie — «Де-Юре»',
  description: 'Информация о том, какие файлы cookie использует сайт dejure-help.ru, для каких целей и как управлять ими.',
  alternates: {
    canonical: 'https://dejure-help.ru/cookies/',
  },
};

// ─── Sub-components ──────────────────────────────────────────────────────────

function Section({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: '32px' }}>
      <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-deep-blue, #10273B)', marginBottom: '12px', marginTop: 0 }}>
        {num}. {title}
      </h2>
      {children}
    </section>
  );
}

function SubSection({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '16px' }}>
      <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-deep-blue, #10273B)', marginBottom: '8px', marginTop: 0 }}>
        {num}. {title}
      </h3>
      {children}
    </div>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ margin: '0 0 10px', fontSize: '15px', lineHeight: 1.75, color: '#374151' }}>
      {children}
    </p>
  );
}

function UL({ items }: { items: React.ReactNode[] }) {
  return (
    <ul style={{ margin: '0 0 10px', paddingLeft: '20px' }}>
      {items.map((item, i) => (
        <li key={i} style={{ fontSize: '15px', lineHeight: 1.75, color: '#374151', marginBottom: '4px' }}>
          {item}
        </li>
      ))}
    </ul>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function CookiesPolicyPage() {
  const publicationDate = '07 августа 2026 г.';

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow bg-slate-50">
        {/* Hero */}
        <section style={{ background: 'var(--color-deep-blue, #10273B)', color: '#ffffff', padding: '160px 0 48px' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px' }}>
            <nav style={{ fontSize: '13px', marginBottom: '20px', color: 'rgba(255,255,255,0.65)' }}>
              <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Главная</Link>
              <span style={{ margin: '0 8px' }}>/</span>
              <span style={{ color: '#fff' }}>Политика cookie</span>
            </nav>
            <h1 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontFamily: 'var(--font-serif)', fontWeight: 700, color: '#FFFFFF', margin: '0 0 12px', lineHeight: 1.25 }}>
              <span style={{ display: 'block' }}>Политика использования</span>
              <span style={{ display: 'block' }}>файлов cookie</span>
            </h1>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.6)', fontSize: '15px' }}>
              Редакция от {publicationDate}
            </p>
          </div>
        </section>

        {/* Content */}
        <section style={{ padding: '48px 0 64px' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ background: '#ffffff', borderRadius: '8px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', padding: 'clamp(24px, 5vw, 56px)', border: '1px solid rgba(23,50,77,0.08)' }}>

              <Section num="1" title="Общие положения">
                <P>
                  Сайт <a href="https://dejure-help.ru/" style={{ color: 'var(--color-primary, #10273B)' }}>https://dejure-help.ru/</a> использует cookie и аналогичные технологии. Cookie — фрагменты данных, сохраняемые на устройстве или получаемые при посещении.
                </P>
                <P>
                  Оператор — ООО ЮК «Де-Юре», ИНН 4800009680,{' '}
                  <a href="mailto:info@dejure-help.ru" style={{ color: 'var(--color-primary, #10273B)' }}>info@dejure-help.ru</a>.
                </P>
              </Section>

              <Section num="2" title="Категории cookie">
                <SubSection num="2.1" title="Технически необходимые">
                  <P>
                    Нужны для загрузки страниц, безопасности, сохранения выбора, предотвращения повторного баннера, форм и основных функций. Через баннер не отключаются.
                  </P>
                </SubSection>
                <SubSection num="2.2" title="Функциональные">
                  <P>
                    Нужны для дополнительных функций, включая Яндекс Карту и настройки. До согласия внешняя карта не загружается; показывается заглушка и кнопка «Показать карту».
                  </P>
                </SubSection>
                <SubSection num="2.3" title="Аналитические">
                  <P>
                    Анализируют посещения, источники, страницы, длительность, действия, устройства и ошибки. Сервисы: Яндекс Метрика, Вебвизор, Roistat.
                  </P>
                </SubSection>
                <SubSection num="2.4" title="Маркетинговые">
                  <P>
                    Оценивают рекламу и связывают посещение с заявкой или звонком. Включают функции Roistat и пиксели ВКонтакте при подключении. Используются только после согласия.
                  </P>
                </SubSection>
              </Section>

              <Section num="3" title="Используемые сервисы">
                <P>
                  Метрика, Вебвизор, Яндекс Карты, Roistat, Sentry, Timeweb и технологии ВКонтакте при подключении.
                </P>
                <P>
                  Обычные ссылки Telegram, MAX и WhatsApp сами cookie не ставят; при добавлении виджетов политика обновляется.
                </P>
              </Section>

              <Section num="4" title="Сроки хранения">
                <UL items={[
                  'выбор пользователя — до 12 месяцев;',
                  'необходимые cookie — сессия либо до 12 месяцев;',
                  'функциональные — до 12 месяцев;',
                  'аналитические и маркетинговые — до 24 месяцев.'
                ]} />
              </Section>

              <Section num="5" title="Управление cookie">
                <P>
                  При первом посещении можно принять или отклонить необязательные cookie. До согласия необязательные технологии не загружаются.
                </P>
                <P>
                  Просмотр, прокрутка и закрытие баннера не считаются согласием. Выбор меняется через «Настройки cookie» в подвале сайта. Отказ не мешает просмотру и подаче заявки.
                </P>
              </Section>

              <Section num="6" title="Изменение Политики">
                <P>
                  Политика обновляется при новых сервисах или изменении закона. Актуальная редакция:{' '}
                  <a href="https://dejure-help.ru/cookies/" style={{ color: 'var(--color-primary, #10273B)' }}>
                    https://dejure-help.ru/cookies/
                  </a>.
                </P>
                <P>
                  Вопросы:{' '}
                  <a href="mailto:info@dejure-help.ru" style={{ color: 'var(--color-primary, #10273B)' }}>
                    info@dejure-help.ru
                  </a>.
                </P>
              </Section>

              {/* Bottom nav */}
              <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid rgba(23,50,77,0.08)', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link href="/privacy" style={{ fontSize: '14px', color: 'var(--color-primary, #10273B)', textDecoration: 'underline' }}>
                  Политика обработки персональных данных
                </Link>
                <Link href="/consent" style={{ fontSize: '14px', color: 'var(--color-primary, #10273B)', textDecoration: 'underline' }}>
                  Согласие на обработку данных
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
