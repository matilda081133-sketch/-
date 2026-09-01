import { Metadata } from 'next';
import RastorzhenieBrakaClient from './RastorzhenieBrakaClient';

export const metadata: Metadata = {
  title: 'Расторжение брака через суд в Липецке | Де-Юре',
  description: 'Помощь семейного юриста по расторжению брака через суд в Липецке. Развод при наличии несовершеннолетних детей, несогласии супруга или без присутствия в суде.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/semejnyj-yurist/rastorzhenie-braka/',
  },
  openGraph: {
    title: 'Расторжение брака через суд в Липецке | Де-Юре',
    description: 'Помощь семейного юриста по расторжению брака через суд в Липецке. Развод при наличии несовершеннолетних детей, несогласии супруга или без присутствия в суде.',
    url: 'https://dejure-help.ru/grazhdanam/semejnyj-yurist/rastorzhenie-braka/',
    siteName: 'ЮК «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/smolyaninova.jpg',
        width: 1200,
        height: 630,
        alt: 'Расторжение брака через суд в Липецке',
      },
    ],
  },
};

export default function RastorzhenieBrakaPage() {
  return <RastorzhenieBrakaClient />;
}
