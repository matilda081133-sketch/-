import type { Metadata } from 'next';
import ProizvodstvennayaTravmaClient from './ProizvodstvennayaTravmaClient';

export const metadata: Metadata = {
  title: 'Юрист по производственным травмам в Липецке | Де-Юре',
  description: 'Помощь юриста при производственной травме и несчастных случаях на производстве в Липецке: оформление акта Н-1, страховые выплаты СФР, компенсация морального вреда. 📞 +7 (4742) 20-15-25.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/trudovoj-yurist/proizvodstvennaya-travma/',
  },
  openGraph: {
    title: 'Юрист по производственным травмам в Липецке | Де-Юре',
    description: 'Помощь юриста при производственной травме и несчастных случаях на производстве в Липецке: оформление акта Н-1, страховые выплаты СФР, компенсация морального вреда. 📞 +7 (4742) 20-15-25.',
    url: 'https://dejure-help.ru/grazhdanam/trudovoj-yurist/proizvodstvennaya-travma/',
    siteName: 'ЮК «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/proizvodstvennaya-travma-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Юрист по производственным травмам в Липецке — ЮК Де-Юре',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Юрист по производственным травмам в Липецке | Де-Юре',
    description: 'Помощь юриста при производственной травме и несчастных случаях на производстве в Липецке: оформление акта Н-1, страховые выплаты СФР, компенсация морального вреда. 📞 +7 (4742) 20-15-25.',
    images: ['https://dejure-help.ru/images/og/proizvodstvennaya-travma-og.jpg'],
  },
};

export default function ProizvodstvennayaTravmaClientPage() {
  return <ProizvodstvennayaTravmaClient />;
}
