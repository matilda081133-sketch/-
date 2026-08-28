export interface LeadPayload {
  name: string;
  phone: string;
  message?: string;
  specialist?: string;
  pageId?: string;
  ctaSource?: string;
  pricingFormat?: string;
  page_url?: string;
  page_title?: string;
  [key: string]: any;
}

const BITRIX24_WEBHOOK_URL =
  process.env.NEXT_PUBLIC_BITRIX24_WEBHOOK_URL ||
  'https://b24-bbhk9h.bitrix24.ru/rest/1/1zg87m5azpabe6yt/';

const GOOGLE_SCRIPT_URL =
  process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL ||
  'https://script.google.com/macros/s/AKfycbwGuCuHnGFoVmIk1QBGw1v_O2FYIiu9PfsctqFtXLbXah45wrQfR3ez0NJF_Wt0kU36/exec';

function getUtmParams(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  try {
    const params = new URLSearchParams(window.location.search);
    const utm: Record<string, string> = {};
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach((key) => {
      const val = params.get(key);
      if (val) utm[key] = val;
    });
    return utm;
  } catch {
    return {};
  }
}

export async function sendLeadToCRM(payload: LeadPayload): Promise<{ success: boolean; bitrixLeadId?: number; error?: string }> {
  const utm = getUtmParams();

  const titleTopic = payload.specialist || 'Консультация';
  const titleName = payload.name?.trim() || 'Клиент';
  const leadTitle = `Заявка с сайта: ${titleTopic} (${titleName})`;

  const commentParts: string[] = [];
  if (payload.message?.trim()) {
    commentParts.push(`<b>Описание ситуации:</b> ${payload.message.trim()}`);
  }
  if (payload.specialist) {
    commentParts.push(`<b>Услуга / Специалист:</b> ${payload.specialist}`);
  }
  if (payload.page_url) {
    commentParts.push(`<b>Страница:</b> <a href="${payload.page_url}">${payload.page_url}</a>`);
  }
  if (payload.page_title) {
    commentParts.push(`<b>Заголовок страницы:</b> ${payload.page_title}`);
  }
  if (payload.ctaSource) {
    commentParts.push(`<b>Форма / Кнопка:</b> ${payload.ctaSource}`);
  }
  if (payload.pricingFormat) {
    commentParts.push(`<b>Тариф / Формат:</b> ${payload.pricingFormat}`);
  }
  if (payload.pageId) {
    commentParts.push(`<b>ID страницы:</b> ${payload.pageId}`);
  }

  // Дополнительные UTM в комментарий для наглядности
  if (Object.keys(utm).length > 0) {
    commentParts.push(`<b>UTM-метки:</b> ${Object.entries(utm).map(([k, v]) => `${k}=${v}`).join(', ')}`);
  }

  const bitrixEndpoint = BITRIX24_WEBHOOK_URL.replace(/\/?(profile\.json)?$/, '').replace(/\/$/, '') + '/crm.lead.add.json';

  const bitrixBody = {
    fields: {
      TITLE: leadTitle,
      NAME: payload.name || '',
      PHONE: payload.phone ? [{ VALUE: payload.phone.replace(/^'/, ''), VALUE_TYPE: 'WORK' }] : [],
      COMMENTS: commentParts.join('<br>'),
      SOURCE_ID: 'WEB',
      SOURCE_DESCRIPTION: 'Сайт Де Юре',
      STATUS_ID: 'NEW',
      ASSIGNED_BY_ID: 18,
      OPENED: 'Y',
      UTM_SOURCE: utm.utm_source || '',
      UTM_MEDIUM: utm.utm_medium || '',
      UTM_CAMPAIGN: utm.utm_campaign || '',
      UTM_TERM: utm.utm_term || '',
      UTM_CONTENT: utm.utm_content || '',
    },
    params: { REGISTER_SONET_EVENT: 'Y' }
  };

  let bitrixOk = false;
  let bitrixLeadId: number | undefined;
  let lastError: string | undefined;

  // 1. Отправляем в Битрикс24
  try {
    const res = await fetch(bitrixEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bitrixBody),
    });

    if (res.ok) {
      const data = await res.json();
      if (data && data.result) {
        bitrixOk = true;
        bitrixLeadId = data.result;
      }
    } else {
      lastError = `Битрикс24 вернул код ${res.status}`;
    }
  } catch (e: any) {
    console.error('Ошибка отправки в Битрикс24:', e);
    lastError = e?.message || 'Сетевая ошибка при отправке в Битрикс24';
  }

  // 2. Отправляем в Google Таблицу (фоном / резерв)
  if (GOOGLE_SCRIPT_URL) {
    try {
      fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({ ...payload, ...utm, bitrixLeadId }),
        redirect: 'follow',
      }).catch(err => console.warn('Резервная отправка в Google Таблицу завершилась с ошибкой:', err));
    } catch {
      // Игнорируем ошибки резервного канала
    }
  }

  if (bitrixOk) {
    return { success: true, bitrixLeadId };
  }

  return { success: false, error: lastError };
}
