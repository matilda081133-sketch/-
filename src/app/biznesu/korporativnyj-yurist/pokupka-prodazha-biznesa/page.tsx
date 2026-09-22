import type { Metadata } from 'next';
import PokupkaProdazhaBiznesaClient from './PokupkaProdazhaBiznesaClient';

export const metadata: Metadata = {
  title: 'Покупка и продажа бизнеса в Липецке — юридическое сопровождение | Де-Юре',
  description: 'Проверка и сопровождение покупки или продажи действующего бизнеса: due diligence, структура сделки, договоры, расчёты, закрытие и переход управления. 📞 +7 (4742) 20-15-25.',
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/korporativnyj-yurist/pokupka-prodazha-biznesa/'
  },
  openGraph: {
    title: 'Покупка и продажа бизнеса в Липецке — юридическое сопровождение | Де-Юре',
    description: 'Проверка и сопровождение покупки или продажи действующего бизнеса: due diligence, структура сделки, договоры, расчёты, закрытие и переход управления. 📞 +7 (4742) 20-15-25.',
    url: 'https://dejure-help.ru/biznesu/korporativnyj-yurist/pokupka-prodazha-biznesa/',
    type: 'website',
        images: [
      {
        url: 'https://dejure-help.ru/images/og/business-purchase-sale-og.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Покупка и продажа бизнеса в Липецке — ЮК «Де-Юре»'
      }
    ],
    locale: 'ru_RU',
    siteName: 'Юридическая компания «Де-Юре»'
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://dejure-help.ru/images/og/business-purchase-sale-og.jpg']
  }
};

export default function PokupkaProdazhaBiznesaPage() {
  return <PokupkaProdazhaBiznesaClient />;
}
