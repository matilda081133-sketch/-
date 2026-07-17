import type { Metadata } from 'next';
import './globals.css';
import GlobalScrollObserver from '@/components/GlobalScrollObserver';

export const metadata: Metadata = {
  title: 'Де-Юре | Юридическая компания в Липецке',
  description: 'Юридические услуги для граждан и бизнеса в Липецке. Более 10 лет опыта.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Merriweather:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <GlobalScrollObserver />
        {children}
      </body>
    </html>
  );
}
