'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import { praktikaCases } from '@/data/praktika';

export default function PraktikaClient() {
  const caseItem = praktikaCases[0];
  const [mobileDetailsOpen, setMobileDetailsOpen] = useState(true);

  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('final-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      <Header />

      {/* ═══ БЛОК 1 & 2. ПЕРВЫЙ ЭКРАН (HERO) ═══ */}
      <section
        style={{
          background: 'var(--color-deep-blue, #10273B)',
          color: '#FFFFFF',
          padding: '150px 0 60px',
        }}
      >
        <div className="container" style={{ maxWidth: '1200px' }}>
          {/* Хлебные крошки */}
          <nav
            aria-label="Хлебные крошки"
            style={{
              marginBottom: '24px',
              fontSize: '14px',
              color: 'rgba(255,255,255,0.6)',
            }}
          >
            <Link
              href="/"
              style={{
                color: 'rgba(255,255,255,0.75)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
            >
              Главная
            </Link>
            <span style={{ margin: '0 10px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'rgba(255,255,255,0.95)', fontWeight: 500 }}>
              Практика
            </span>
          </nav>

          {/* H1 Заголовок */}
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 700,
              color: '#FFFFFF',
              lineHeight: 1.2,
              margin: '0 0 16px 0',
            }}
          >
            Практика
          </h1>

          {/* Подзаголовок */}
          <p
            style={{
              fontSize: 'clamp(16px, 2.2vw, 19px)',
              color: 'rgba(255,255,255,0.88)',
              lineHeight: 1.5,
              margin: '0 0 36px 0',
              maxWidth: '860px',
            }}
          >
            Примеры юридических дел, которыми занимались специалисты «Де-Юре»:
            исходная ситуация, проведённая работа и полученный результат.
          </p>

          {/* Компоновка на десктопе: Преамбула слева, плашка справа */}
          <div className="hero-praktika-grid">
            {/* Левая часть: Основная преамбула */}
            <div className="hero-preamble-box">
              <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.65 }}>
                Здесь мы публикуем обезличенные примеры дел, которыми занимались
                специалисты «Де-Юре». Мы соблюдаем требования о
                конфиденциальности и не раскрываем персональные данные
                клиентов, поэтому отдельные обстоятельства изложены без
                сведений, позволяющих установить участников дела.
              </p>
            </div>

            {/* Правая часть: Плашка о наполнении */}
            <div className="hero-badge-box">
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '10px',
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: 'var(--color-gold, #C1A066)',
                    display: 'inline-block',
                  }}
                />
                <h2
                  style={{
                    margin: 0,
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#E5C583',
                    letterSpacing: '0.02em',
                  }}
                >
                  Раздел пополняется
                </h2>
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: '14px',
                  lineHeight: 1.55,
                  color: 'rgba(255,255,255,0.85)',
                }}
              >
                Сейчас здесь представлен один из наших кейсов. Другие примеры из
                практики специалистов «Де-Юре» будут опубликованы позднее.
              </p>
            </div>
          </div>

          {/* CTA-Кнопка на первом экране */}
          <div style={{ marginTop: '32px' }}>
            <a
              href="#final-form"
              onClick={scrollToForm}
              className="btn btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '16px 32px',
                fontSize: '15px',
                fontWeight: 600,
                cursor: 'pointer',
                textDecoration: 'none',
              }}
            >
              <span>Обсудить свою ситуацию</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ═══ ОСНОВНОЙ КОНТЕНТ (КЕЙС) ═══ */}
      <section
        style={{
          background: 'var(--color-cream, #F8F6F2)',
          padding: '60px 0 90px',
        }}
      >
        <div className="container" style={{ maxWidth: '1200px' }}>
          {/* БЛОК 3. ПОЯСНЕНИЕ ПЕРЕД КЕЙСОМ */}
          <div
            style={{
              marginBottom: '28px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <div
              style={{
                width: '3px',
                height: '18px',
                background: 'var(--color-gold, #C1A066)',
                flexShrink: 0,
              }}
            />
            <p
              style={{
                margin: 0,
                fontSize: '14px',
                color: 'var(--color-text-secondary, #6C7A89)',
                lineHeight: 1.5,
              }}
            >
              Результат каждого дела зависит от его обстоятельств и не
              гарантирует аналогичного исхода в другой ситуации.
            </p>
          </div>

          {/* БЛОК 4. КАРТОЧКА КЕЙСА СМОЛЬЯНИНОВОЙ (На всю ширину) */}
          <article
            className="praktika-case-card"
            style={{
              background: '#FFFFFF',
              border: '1px solid rgba(23, 50, 77, 0.12)',
              borderTop: '4px solid var(--color-gold, #C1A066)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
              padding: '44px',
              width: '100%',
              boxSizing: 'border-box',
            }}
          >
            {/* Шапка карточки */}
            <div
              style={{
                borderBottom: '1px solid rgba(23, 50, 77, 0.1)',
                paddingBottom: '24px',
                marginBottom: '32px',
              }}
            >
              {/* Метка направления (Без активной ссылки до публикации хаба) */}
              <div style={{ marginBottom: '14px' }}>
                <span
                  style={{
                    display: 'inline-block',
                    background: 'rgba(193, 160, 102, 0.14)',
                    color: '#8C6F34',
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    padding: '5px 14px',
                    borderRadius: '2px',
                  }}
                >
                  {caseItem.category.title}
                </span>
              </div>

              {/* Заголовок кейса */}
              <h2
                style={{
                  margin: 0,
                  fontSize: 'clamp(22px, 3.5vw, 30px)',
                  fontFamily: 'var(--font-serif)',
                  color: 'var(--color-deep-blue, #10273B)',
                  lineHeight: 1.35,
                  fontWeight: 700,
                }}
              >
                {caseItem.title}
              </h2>
            </div>

            {/* Две ключевые секции: Исходная ситуация и Что осложняло дело */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '28px',
                marginBottom: '32px',
              }}
            >
              {/* Исходная ситуация */}
              <div
                style={{
                  background: 'rgba(23, 50, 77, 0.03)',
                  padding: '24px',
                  borderLeft: '3px solid var(--color-deep-blue, #10273B)',
                }}
              >
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--color-deep-blue, #10273B)',
                    marginBottom: '10px',
                  }}
                >
                  Исходная ситуация
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: '15px',
                    lineHeight: 1.65,
                    color: 'var(--color-text-main, #2C3340)',
                  }}
                >
                  {caseItem.initialSituation}
                </p>
              </div>

              {/* Что осложняло дело */}
              <div
                style={{
                  background: 'rgba(193, 160, 102, 0.05)',
                  padding: '24px',
                  borderLeft: '3px solid var(--color-gold, #C1A066)',
                }}
              >
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#8C6F34',
                    marginBottom: '10px',
                  }}
                >
                  Что осложняло дело
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: '15px',
                    lineHeight: 1.65,
                    color: 'var(--color-text-main, #2C3340)',
                  }}
                >
                  {caseItem.complications}
                </p>
              </div>
            </div>

            {/* Выделенный блок РЕЗУЛЬТАТ (Виден всегда) */}
            <div
              style={{
                background: 'var(--color-deep-blue, #10273B)',
                color: '#FFFFFF',
                padding: '28px 32px',
                marginBottom: '36px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '6px',
                  height: '100%',
                  background: 'var(--color-gold, #C1A066)',
                }}
              />
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#E5C583',
                  marginBottom: '10px',
                }}
              >
                Результат
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: '16px',
                  lineHeight: 1.65,
                  color: '#FFFFFF',
                  fontWeight: 500,
                }}
              >
                {caseItem.result}
              </p>
            </div>

            {/* Кнопка сворачивания/разворачивания подробностей на мобильном */}
            <div className="mobile-toggle-wrapper" style={{ display: 'none' }}>
              <button
                type="button"
                onClick={() => setMobileDetailsOpen(!mobileDetailsOpen)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  background: 'rgba(23, 50, 77, 0.05)',
                  border: '1px solid rgba(23, 50, 77, 0.15)',
                  color: 'var(--color-deep-blue, #10273B)',
                  fontSize: '14px',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  marginBottom: '24px',
                }}
              >
                <span>
                  {mobileDetailsOpen
                    ? 'Скрыть подробности дела'
                    : 'Показать подробности проведения работы'}
                </span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  style={{
                    transform: mobileDetailsOpen
                      ? 'rotate(180deg)'
                      : 'rotate(0deg)',
                    transition: 'transform 0.3s',
                  }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
            </div>

            {/* Разделы с деталями работы */}
            <div
              className={`case-details-container ${
                mobileDetailsOpen ? 'open' : 'closed-mobile'
              }`}
            >
              {/* Что сделал юрист */}
              <div style={{ marginBottom: '32px' }}>
                <h3
                  style={{
                    fontSize: '18px',
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--color-deep-blue, #10273B)',
                    fontWeight: 700,
                    margin: '0 0 16px 0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'var(--color-gold, #C1A066)',
                    }}
                  />
                  Что сделал юрист
                </h3>
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: '22px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  {caseItem.actions.map((act, i) => (
                    <li
                      key={i}
                      style={{
                        fontSize: '15px',
                        lineHeight: 1.6,
                        color: 'var(--color-text-main, #2C3340)',
                      }}
                    >
                      {act}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Что сыграло ключевую роль */}
              <div style={{ marginBottom: '32px' }}>
                <h3
                  style={{
                    fontSize: '18px',
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--color-deep-blue, #10273B)',
                    fontWeight: 700,
                    margin: '0 0 14px 0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'var(--color-gold, #C1A066)',
                    }}
                  />
                  Что сыграло ключевую роль
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: '15px',
                    lineHeight: 1.65,
                    color: 'var(--color-text-main, #2C3340)',
                  }}
                >
                  {caseItem.keyFactors}
                </p>
              </div>

              {/* Подтверждение результата */}
              <div style={{ marginBottom: '36px' }}>
                <h3
                  style={{
                    fontSize: '18px',
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--color-deep-blue, #10273B)',
                    fontWeight: 700,
                    margin: '0 0 14px 0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'var(--color-gold, #C1A066)',
                    }}
                  />
                  Подтверждение результата
                </h3>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    background: 'rgba(23, 50, 77, 0.03)',
                    padding: '20px',
                    border: '1px solid rgba(23, 50, 77, 0.08)',
                  }}
                >
                  {caseItem.courtCases.map((cCase, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '12px',
                        fontSize: '14px',
                        lineHeight: 1.5,
                        flexWrap: 'wrap',
                      }}
                    >
                      <span
                        style={{
                          fontWeight: 700,
                          color: 'var(--color-deep-blue, #10273B)',
                          fontFamily: 'monospace',
                          fontSize: '14px',
                          background: '#FFFFFF',
                          padding: '2px 8px',
                          border: '1px solid rgba(23, 50, 77, 0.15)',
                        }}
                      >
                        {cCase.number}
                      </span>
                      <span style={{ color: 'var(--color-text-main, #2C3340)' }}>
                        — {cCase.court}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Компактный блок специалиста (Внутри карточки) */}
            <div
              style={{
                borderTop: '1px solid rgba(23, 50, 77, 0.1)',
                paddingTop: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '20px',
              }}
            >
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '16px' }}
              >
                <img
                  src={caseItem.specialist.image}
                  alt={caseItem.specialist.name}
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid var(--color-gold, #C1A066)',
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div
                    style={{
                      fontSize: '12px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      color: 'var(--color-text-secondary, #6C7A89)',
                      marginBottom: '4px',
                      fontWeight: 600,
                    }}
                  >
                    Специалист, вестивший дело
                  </div>
                  <Link
                    href={`/specialisty/${caseItem.specialist.slug}/`}
                    style={{
                      fontSize: '17px',
                      fontWeight: 700,
                      color: 'var(--color-deep-blue, #10273B)',
                      textDecoration: 'none',
                      fontFamily: 'var(--font-serif)',
                      display: 'block',
                      transition: 'color 0.2s',
                    }}
                    className="specialist-link"
                  >
                    {caseItem.specialist.name}
                  </Link>
                  <div
                    style={{
                      fontSize: '13px',
                      color: 'var(--color-text-secondary, #6C7A89)',
                      marginTop: '2px',
                    }}
                  >
                    {caseItem.specialist.role} ЮК «Де-Юре»
                  </div>
                </div>
              </div>

              <Link
                href={`/specialisty/${caseItem.specialist.slug}/`}
                className="btn btn-outline"
                style={{
                  padding: '10px 20px',
                  fontSize: '13px',
                  whiteSpace: 'nowrap',
                  textDecoration: 'none',
                }}
              >
                Профиль специалиста →
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* ═══ БЛОК 5. ФИНАЛЬНАЯ ФОРМА ═══ */}
      <section
        id="final-form"
        style={{
          background: '#FFFFFF',
          padding: '80px 0',
          borderTop: '1px solid rgba(23, 50, 77, 0.08)',
        }}
      >
        <div className="container" style={{ maxWidth: '800px' }}>
          <ContactsForm
            title="Нужно решить юридическую проблему?"
            subtitle="Расскажите о своей ситуации. Юрист уточнит основные обстоятельства, перезвонит в течение 15 минут и предложит возможный порядок действий."
            buttonText="Обсудить ситуацию с юристом"
            commentPlaceholder="Опишите вашу ситуацию или вопрос…"
            hiddenFields={[
              { name: 'pageId', value: 'PRAKTIKA-01' },
              { name: 'ctaSource', value: 'praktika_page_form' },
            ]}
          />
        </div>
      </section>

      {/* ═══ БЛОК 6. ПОДВАЛ ═══ */}
      <Footer />

      {/* ═══ АДАПТИВНЫЕ СТИЛИ ═══ */}
      <style dangerouslySetInnerHTML={{ __html: `
        .hero-praktika-grid {
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 32px;
          align-items: stretch;
        }

        .hero-preamble-box {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-left: 4px solid var(--color-gold, #C1A066);
          padding: 24px 28px;
          color: rgba(255, 255, 255, 0.92);
        }

        .hero-badge-box {
          background: rgba(193, 160, 102, 0.12);
          border: 1px solid rgba(193, 160, 102, 0.35);
          padding: 24px;
          color: rgba(255, 255, 255, 0.9);
        }

        .specialist-link:hover {
          color: var(--color-gold, #C1A066) !important;
        }

        @media (max-width: 991px) {
          .hero-praktika-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .praktika-case-card {
            padding: 24px 20px !important;
          }
          .mobile-toggle-wrapper {
            display: block !important;
          }
          .case-details-container.closed-mobile {
            display: none !important;
          }
        }
      `}} />
    </main>
  );
}
