import { Metadata } from 'next';
import OpredeleniePoryadkaObshcheniyaSRebenkomClient from './OpredeleniePoryadkaObshcheniyaSRebenkomClient';

export const metadata: Metadata = {
  title: 'Порядок общения с ребёнком в Липецке | Де-Юре',
  description: 'Юридическая помощь в спорах о порядке общения с ребёнком в Липецке: график встреч, соглашение, суд, изменение и исполнение установленного порядка.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/semejnyj-yurist/opredelenie-poryadka-obshcheniya-s-rebenkom/',
  },
  openGraph: {
    title: 'Порядок общения с ребёнком в Липецке | Де-Юре',
    description: 'Юридическая помощь в спорах о порядке общения с ребёнком в Липецке: график встреч, соглашение, суд, изменение и исполнение установленного порядка.',
    url: 'https://dejure-help.ru/grazhdanam/semejnyj-yurist/opredelenie-poryadka-obshcheniya-s-rebenkom/',
    siteName: 'ЮК «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/smolyaninova.jpg',
        width: 1200,
        height: 630,
        alt: 'Определение порядка общения с ребёнком в Липецке',
      },
    ],
  },
};

export default function OpredeleniePoryadkaObshcheniyaSRebenkomPage() {
  return <OpredeleniePoryadkaObshcheniyaSRebenkomClient />;
}
