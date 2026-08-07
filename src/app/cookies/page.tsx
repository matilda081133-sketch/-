import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Политика использования файлов cookie — ЮК «Де-Юре»',
  description: 'Информация о том, какие файлы cookie использует сайт dejure-help.ru, для каких целей и как управлять ими.',
  alternates: {
    canonical: 'https://dejure-help.ru/cookies/',
  },
};

export default function CookiesPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-slate-50">
        {/* Hero Section */}
        <section className="bg-[var(--color-deep-blue)] text-white py-10 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[860px]">
            <nav className="text-sm mb-6 text-slate-300">
              <Link href="/" className="hover:text-white transition-colors">Главная</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Политика cookie</span>
            </nav>
            <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4">
              Политика использования файлов cookie
            </h1>
            <p className="text-slate-300 text-lg">
              Редакция от 07 августа 2026 г.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-10 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[860px]">
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-12 border border-slate-200">
              <div 
                className="prose max-w-none"
                style={{
                  fontSize: '16px',
                  lineHeight: '1.8',
                  color: 'var(--color-text-main)'
                }}
              >
                <style>{`
                  .prose h2 {
                    font-family: var(--font-serif);
                    color: var(--color-deep-blue);
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin-top: 2.5rem;
                    margin-bottom: 1rem;
                    padding-bottom: 0.5rem;
                    border-bottom: 1px solid #f1f5f9;
                  }
                  .prose h3 {
                    font-size: 1.125rem;
                    font-weight: 700;
                    margin-top: 1.5rem;
                    margin-bottom: 0.5rem;
                  }
                  .prose p {
                    margin-bottom: 1rem;
                  }
                  .prose ul {
                    list-style-type: disc;
                    padding-left: 1.5rem;
                    margin-bottom: 1rem;
                  }
                `}</style>
                
                <h2>1. Общие положения</h2>
                <p>
                  Сайт https://dejure-help.ru/ использует cookie и аналогичные технологии. Cookie — фрагменты данных, сохраняемые на устройстве пользователя или получаемые сайтом при посещении. Оператор — ООО ЮК «Де-Юре», ИНН 4800009680, info@dejure-help.ru.
                </p>

                <h2>2. Категории cookie</h2>
                
                <h3>2.1. Технически необходимые</h3>
                <p>
                  Нужны для загрузки страниц, авторизации, безопасности и сохранения пользовательских предпочтений. Используются без согласия на основании статьи 6 № 152-ФЗ.<br/>
                  Примеры: session_id, XSRF-token, выбор языка.
                </p>

                <h3>2.2. Аналитические</h3>
                <p>
                  Позволяют анализировать посещаемость и улучшать сайт. Используются только с согласия пользователя.<br/>
                  Пример: Яндекс.Метрика (без Вебвизора, параметры в статистике передаются в Яндекс как оператору-обработчику).
                </p>

                <h3>2.3. Функциональные</h3>
                <p>
                  Запоминают выбор пользователя (наличие баннера cookie). Применяются до получения или отказа в согласии.
                </p>

                <h3>2.4. Рекламные</h3>
                <p>
                  На сайте отсутствуют.
                </p>

                <h2>3. Передача данных третьим лицам</h2>
                <p>
                  Мы не продаём и не передаём данные cookie третьим лицам в маркетинговых целях. Яндекс.Метрика является уполномоченным обработчиком по договору. Техническая инфраструктура — Timeweb.
                </p>

                <h2>4. Управление cookie</h2>
                <p>Вы можете:</p>
                <ul>
                  <li>Принять или отклонить аналитические cookie через баннер на сайте;</li>
                  <li>Отозвать согласие, обновив настройки в баннере;</li>
                  <li>Отключить или удалить cookie через настройки браузера (инструкции: Chrome, Firefox, Safari, Edge).</li>
                </ul>
                <p>
                  Отключение технически необходимых cookie может нарушить работу сайта.
                </p>

                <h2>5. Срок хранения</h2>
                <ul>
                  <li><strong>Технически необходимые:</strong> от сессии до 1 года.</li>
                  <li><strong>Аналитические:</strong> в соответствии с условиями Яндекс.Метрики.</li>
                  <li><strong>Запись о согласии/отказе:</strong> 3 года.</li>
                </ul>

                <h2>6. Обновление политики</h2>
                <p>
                  Мы можем обновлять настоящую Политику. Действующая версия публикуется на этой странице. Продолжение использования сайта после публикации изменений означает принятие обновлённой Политики.
                </p>

                <h2>7. Контакты</h2>
                <p>
                  По вопросам использования cookie и персональных данных обращайтесь: <a href="mailto:info@dejure-help.ru" style={{ color: 'var(--color-primary)' }} className="hover:underline">info@dejure-help.ru</a> или по юридическому адресу: 398902, Липецкая область, г. Липецк, ул. Юношеская, влд. 46Б, пом. 1.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
