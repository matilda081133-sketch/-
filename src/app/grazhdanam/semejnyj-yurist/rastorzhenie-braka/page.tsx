import { Metadata } from 'next';
import RastorzhenieBrakaClient from './RastorzhenieBrakaClient';

export const metadata: Metadata = {
  title: 'Расторжение брака через суд в Липецке | Де-Юре',
  description: 'Юридическая помощь при расторжении брака через суд в Липецке: развод при наличии несовершеннолетних детей, при несогласии супруга, без вашего личного присутствия.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/semejnyj-yurist/rastorzhenie-braka/',
  },
  openGraph: {
    title: 'Расторжение брака через суд в Липецке | Де-Юре',
    description: 'Юридическая помощь при расторжении брака через суд в Липецке: развод при наличии несовершеннолетних детей, при несогласии супруга, без вашего личного присутствия.',
    url: 'https://dejure-help.ru/grazhdanam/semejnyj-yurist/rastorzhenie-braka/',
    siteName: 'ЮК «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function RastorzhenieBrakaPage() {
  return <RastorzhenieBrakaClient />;
}
