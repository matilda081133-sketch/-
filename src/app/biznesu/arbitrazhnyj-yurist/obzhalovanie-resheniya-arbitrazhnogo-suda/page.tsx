import type { Metadata } from 'next';
import ObzhalovanieClient from './ObzhalovanieClient';

export const metadata: Metadata = {
  title: 'Обжалование решения арбитражного суда в Липецке | Де-Юре',
  description:
    'Проверим решение и материалы дела, оценим основания и сроки апелляции или кассации, подготовим жалобу и представим интересы бизнеса.',
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/obzhalovanie-resheniya-arbitrazhnogo-suda/'
  },
  openGraph: {
    title: 'Обжалование решения арбитражного суда в Липецке | Де-Юре',
    description:
      'Апелляционное и кассационное обжалование судебных актов арбитражных судов: правовой аудит решения, восстановление сроков, приостановление исполнения, подготовка жалоб и судебное представительство.',
    url: 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/obzhalovanie-resheniya-arbitrazhnogo-suda/',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Юридическая компания «Де-Юре»'
  }
};

export default function ObzhalovaniePage() {
  return <ObzhalovanieClient />;
}
