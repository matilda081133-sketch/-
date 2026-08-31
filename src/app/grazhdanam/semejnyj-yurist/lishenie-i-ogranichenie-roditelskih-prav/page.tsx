import { Metadata } from 'next';
import LishenieIOgranichenieRoditelskihPravClient from './LishenieIOgranichenieRoditelskihPravClient';

export const metadata: Metadata = {
  title: 'Лишение и ограничение родительских прав в Липецке | Де-Юре',
  description: 'Юридическая помощь по делам о лишении и ограничении родительских прав в Липецке: оценка оснований, подготовка иска, доказательства и представительство в суде.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/semejnyj-yurist/lishenie-i-ogranichenie-roditelskih-prav/',
  },
  openGraph: {
    title: 'Лишение и ограничение родительских прав в Липецке | Де-Юре',
    description: 'Юридическая помощь по делам о лишении и ограничении родительских прав в Липецке: оценка оснований, подготовка иска, доказательства и представительство в суде.',
    url: 'https://dejure-help.ru/grazhdanam/semejnyj-yurist/lishenie-i-ogranichenie-roditelskih-prav/',
    siteName: 'ЮК «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function LishenieIOgranichenieRoditelskihPravPage() {
  return <LishenieIOgranichenieRoditelskihPravClient />;
}
