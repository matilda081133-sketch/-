import { Metadata } from 'next';
import BiznesuClient from './BiznesuClient';

export const metadata: Metadata = {
  title: 'Юридические услуги для бизнеса в Липецке | ЮК «Де-Юре»',
  description: 'Юридическая помощь бизнесу в Липецке: арбитражные споры, договоры, налоги, банкротство, взыскание долгов и сопровождение компаний. ЮК «Де-Юре».',
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: 'Юридические услуги для бизнеса в Липецке | ЮК «Де-Юре»',
    description: 'Юридическая помощь бизнесу в Липецке: арбитражные споры, договоры, налоги, банкротство, взыскание долгов и сопровождение компаний. ЮК «Де-Юре».',
    url: 'https://dejure-help.ru/biznesu/',
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/',
  },
};

export default function BiznesuPage() {
  return <BiznesuClient />;
}
