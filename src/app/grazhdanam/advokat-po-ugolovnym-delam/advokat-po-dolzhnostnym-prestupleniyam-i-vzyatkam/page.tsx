import { Metadata } from 'next';
import AdvokatVzyatkiClient from './AdvokatVzyatkiClient';

export const metadata: Metadata = {
  title: 'Адвокат по делам о взятках и должностным преступлениям в Липецке | Де-Юре',
  description:
    'Защита по обвинениям во взятках (ст. 290, 291 УК РФ), коммерческом подкупе, превышении полномочий в Липецке. Аудит ОРМ, защита от провокаций, следственный опыт.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-dolzhnostnym-prestupleniyam-i-vzyatkam/',
  },
  openGraph: {
    title: 'Адвокат по делам о взятках и должностным преступлениям в Липецке | Де-Юре',
    description:
      'Защита по обвинениям во взятках (ст. 290, 291 УК РФ), коммерческом подкупе, превышении полномочий в Липецке. Аудит ОРМ, защита от провокаций, следственный опыт.',
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
