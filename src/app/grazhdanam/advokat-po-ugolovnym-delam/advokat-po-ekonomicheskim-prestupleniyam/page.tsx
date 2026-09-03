import { Metadata } from 'next';
import AdvokatEkonomicheskieClient from './AdvokatEkonomicheskieClient';

export const metadata: Metadata = {
  title: 'Адвокат по экономическим преступлениям в Липецке | Де-Юре',
  description:
    'Защита руководителей, предпринимателей и бухгалтеров по экономическим и налоговым преступлениям (ст. 199, 160, 201 УК РФ) в Липецке. Экс-следователи по ОВД.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-ekonomicheskim-prestupleniyam/',
  },
  openGraph: {
    title: 'Адвокат по экономическим преступлениям в Липецке | Де-Юре',
    description:
      'Защита руководителей, предпринимателей и бухгалтеров по экономическим и налоговым преступлениям (ст. 199, 160, 201 УК РФ) в Липецке. Экс-следователи по ОВД.',
    url: 'https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-ekonomicheskim-prestupleniyam/',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/bobkin.jpg',
        width: 1200,
        height: 630,
        alt: 'Адвокат по экономическим преступлениям в Липецке — ЮК Де-Юре',
      },
    ],
  },
};

export default function AdvokatEkonomicheskieClientPage() {
  return <AdvokatEkonomicheskieClient />;
}
