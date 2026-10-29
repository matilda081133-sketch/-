/**
 * Единый источник конфигурации интернет-эквайринга ООО ЮК «Де-Юре».
 * Используется:
 * 1. На странице /stoimost/ (блок #oplata)
 * 2. В общем подвале сайта Footer.tsx (колонка «Компания»)
 *
 * Альфа-Банк платёжная страница эквайринга:
 * https://pay.alfabank.ru/sc/LFFpbIZfUkRdZgrC
 */

export const PAYMENT_URL: string | null = 'https://pay.alfabank.ru/sc/LFFpbIZfUkRdZgrC';

export const PAYMENT_BUTTON_TEXT = 'Оплатить услуги';

export const PAYMENT_FOOTER_NOTE =
  'Для оплаты согласованных услуг ООО ЮК «Де-Юре». Сумму и назначение платежа уточните у вашего юриста.';
