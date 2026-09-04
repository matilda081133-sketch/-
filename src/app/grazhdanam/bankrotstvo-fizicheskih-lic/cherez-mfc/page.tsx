import { Metadata } from 'next';
import VnesudebnoeBankrotstvoMfcClient from './VnesudebnoeBankrotstvoMfcClient';

export const metadata: Metadata = {
  title: 'Банкротство через МФЦ в Липецке — помощь юриста | Де-Юре',
  description: 'Проверим условия внесудебного банкротства через МФЦ, исполнительные производства и список кредиторов. Поможем подготовить заявление без лишних рисков.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/bankrotstvo-fizicheskih-lic/cherez-mfc/',
  },
  openGraph: {
    title: 'Внесудебное банкротство через МФЦ в Липецке | Де-Юре',
    description: 'Проверим, подходит ли бесплатная процедура через МФЦ, и поможем корректно подготовить сведения о долгах и кредиторах.',
    url: 'https://dejure-help.ru/grazhdanam/bankrotstvo-fizicheskih-lic/cherez-mfc/',
    siteName: 'Юридическая компания Де-Юре',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Внесудебное банкротство через МФЦ в Липецке — ЮК Де-Юре',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Внесудебное банкротство через МФЦ в Липецке | Де-Юре',
    description: 'Проверим условия внесудебного банкротства через МФЦ, исполнительные производства и список кредиторов.',
    images: ['/images/og-image.jpg'],
  },
};

export default function VnesudebnoeBankrotstvoMfcPage() {
  return <VnesudebnoeBankrotstvoMfcClient />;
}
