import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Контакты | Де-Юре',
  description: 'Контакты юридической компании Де-Юре в Липецке',
};

export default function ContactsPage() {
  return (
    <main>
      <Header />
      
      <section className="section" style={{ paddingTop: '160px', paddingBottom: '80px', background: 'var(--color-cream)' }}>
        <div className="container">
          <h1 style={{ fontSize: '48px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', margin: 0 }}>Контакты</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p>Страница контактов находится в разработке.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
