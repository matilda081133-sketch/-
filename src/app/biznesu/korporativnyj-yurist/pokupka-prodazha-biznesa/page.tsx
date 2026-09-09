import type { Metadata } from 'next';
import PokupkaProdazhaBiznesaClient from './PokupkaProdazhaBiznesaClient';

export const metadata: Metadata = {
  title: 'Покупка и продажа бизнеса в Липецке — юридическое сопровождение | Де-Юре',
  description:
    'Проверка и сопровождение покупки или продажи действующего бизнеса: due diligence, структура сделки, договоры, расчёты, закрытие и переход управления.',
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/korporativnyj-yurist/pokupka-prodazha-biznesa/'
  },
  openGraph: {
    title: 'Покупка и продажа бизнеса в Липецке — юридическое сопровождение | Де-Юре',
    description:
      'Проверка и сопровождение покупки или продажи действующего бизнеса: due diligence, структура сделки, договоры, расчёты, закрытие и переход управления.',
    url: 'https://dejure-help.ru/biznesu/korporativnyj-yurist/pokupka-prodazha-biznesa/',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Юридическая компания «Де-Юре»'
  }
};

export default function PokupkaProdazhaBiznesaPage() {
  return <PokupkaProdazhaBiznesaClient />;
}
