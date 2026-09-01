import { Metadata } from 'next';
import OformlenieIVstuplenieVNasledstvoClient from './OformlenieIVstuplenieVNasledstvoClient';

export const metadata: Metadata = {
  title: 'Оформление и вступление в наследство в Липецке | Де-Юре',
  description: 'Помощь в оформлении наследства по закону и завещанию в Липецке: нотариус, сбор документов, подтверждение родства и прав. Разберём ситуацию и поможем оформить имущество.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/nasledstvennyj-yurist/oformlenie-i-vstuplenie-v-nasledstvo/',
  },
  openGraph: {
    title: 'Оформление и вступление в наследство в Липецке | Де-Юре',
    description: 'Помощь в оформлении наследства по закону и завещанию в Липецке: нотариус, сбор документов, подтверждение родства и прав. Разберём ситуацию и поможем оформить имущество.',
    url: 'https://dejure-help.ru/grazhdanam/nasledstvennyj-yurist/oformlenie-i-vstuplenie-v-nasledstvo/',
    siteName: 'ЮК «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/smolyaninova.jpg',
        width: 1200,
        height: 630,
        alt: 'Оформление и вступление в наследство в Липецке',
      },
    ],
  },
};

export default function Page() {
  return <OformlenieIVstuplenieVNasledstvoClient />;
}
