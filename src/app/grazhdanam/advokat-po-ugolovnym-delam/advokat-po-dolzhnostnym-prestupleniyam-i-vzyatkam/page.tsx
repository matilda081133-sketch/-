import { Metadata } from 'next';
import AdvokatVzyatkiClient from './AdvokatVzyatkiClient';

export const metadata: Metadata = {
  title: 'Адвокат по делам о взятках и должностным преступлениям в Липецке | Де-Юре',
  description: 'Защита по делам о получении и даче взятки, посредничестве, злоупотреблении и превышении полномочий в Липецке. Проверка, следствие и суд. 📞 +7 (4742) 20-15-25.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-dolzhnostnym-prestupleniyam-i-vzyatkam/',
  },
  openGraph: {
    title: 'Адвокат по делам о взятках и должностным преступлениям в Липецке | Де-Юре',
    description: 'Защита по делам о получении и даче взятки, посредничестве, злоупотреблении и превышении полномочий в Липецке. Проверка, следствие и суд. 📞 +7 (4742) 20-15-25.',
    url: 'https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-dolzhnostnym-prestupleniyam-i-vzyatkam/',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/bobkin.jpg',
        width: 1200,
        height: 630,
        alt: 'Адвокат по должностным преступлениям и взяткам в Липецке — ЮК Де-Юре',
      },
    ],
  },
};

export default function AdvokatVzyatkiClientPage() {
  return <AdvokatVzyatkiClient />;
}
