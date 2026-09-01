import { Metadata } from 'next';
import RazdelNasledstvaMezhduNaslednikamiClient from './RazdelNasledstvaMezhduNaslednikamiClient';

export const metadata: Metadata = {
  title: 'Раздел наследства между наследниками в Липецке | Де-Юре',
  description: 'Помощь в разделе наследственного имущества в Липецке: мирное соглашение, расчёт компенсации, преимущественное право и судебный раздел. Сопроводим до регистрации прав.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/nasledstvennyj-yurist/razdel-nasledstva-mezhdu-naslednikami/',
  },
  openGraph: {
    title: 'Раздел наследства между наследниками в Липецке | Де-Юре',
    description: 'Помощь в разделе наследственного имущества в Липецке: мирное соглашение, расчёт компенсации, преимущественное право и судебный раздел. Сопроводим до регистрации прав.',
    url: 'https://dejure-help.ru/grazhdanam/nasledstvennyj-yurist/razdel-nasledstva-mezhdu-naslednikami/',
    siteName: 'ЮК «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/smolyaninova.jpg',
        width: 1200,
        height: 630,
        alt: 'Раздел наследства между наследниками в Липецке',
      },
    ],
  },
};

export default function Page() {
  return <RazdelNasledstvaMezhduNaslednikamiClient />;
}
