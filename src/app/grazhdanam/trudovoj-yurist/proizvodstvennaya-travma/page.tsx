import type { Metadata } from 'next';
import ProizvodstvennayaTravmaClient from './ProizvodstvennayaTravmaClient';

export const metadata: Metadata = {
  title: 'Юрист по производственным травмам в Липецке | Де-Юре',
  description: 'Помощь юриста при производственной травме и несчастных случаях на производстве в Липецке: оформление акта Н-1, страховые выплаты СФР, компенсация морального вреда.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/trudovoj-yurist/proizvodstvennaya-travma/',
  },
  openGraph: {
    title: 'Юрист по производственным травмам в Липецке | Де-Юре',
    description: 'Помощь юриста при производственной травме и несчастных случаях на производстве в Липецке: оформление акта Н-1, страховые выплаты СФР, компенсация морального вреда.',
    url: 'https://dejure-help.ru/grazhdanam/trudovoj-yurist/proizvodstvennaya-travma/',
    siteName: 'ЮК «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function ProizvodstvennayaTravmaClientPage() {
  return <ProizvodstvennayaTravmaClient />;
}
