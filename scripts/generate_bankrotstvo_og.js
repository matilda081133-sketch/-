const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const targetDir = path.join(__dirname, '..', 'public', 'images', 'og');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const ogList = [
  {
    fileName: 'bankrotstvo-biznesa-og.jpg',
    category: 'БАНКРОТСТВО БИЗНЕСА • ЛИПЕЦК',
    lines: ['Юрист по банкротству', 'юридических лиц'],
    bullets: [
      'Сопровождение должника и представление кредитора',
      'Включение в реестр, сделки и субсидиарная ответственность',
      'Защита интересов бизнеса в арбитражном суде Липецка'
    ]
  },
  {
    fileName: 'bankrotstvo-kompanii-so-storony-dolzhnika-og.jpg',
    category: 'БАНКРОТСТВО ДОЛЖНИКА • ЛИПЕЦК',
    lines: ['Банкротство компании', 'со стороны должника'],
    bullets: [
      'Диагностика финансового состояния и рисков руководства',
      'Подготовка заявления и обоснования в арбитражный суд',
      'Законное прохождение процедур наблюдения и конкурсного производства'
    ]
  },
  {
    fileName: 'predstavlenie-interesov-kreditora-og.jpg',
    category: 'ИНТЕРЕСЫ КРЕДИТОРА В БАНКРОТСТВЕ • ЛИПЕЦК',
    lines: ['Представление интересов', 'кредитора в банкротстве'],
    bullets: [
      'Инициирование банкротства должника и включение требований',
      'Участие в собраниях кредиторов и контроль управляющего',
      'Возврат активов через оспаривание сделок и субсидиарную ответственность'
    ]
  },
  {
    fileName: 'vklyuchenie-v-reestr-trebovanij-kreditorov-og.jpg',
    category: 'РЕЕСТР ТРЕБОВАНИЙ КРЕДИТОРОВ • ЛИПЕЦК',
    lines: ['Включение в реестр', 'требований кредиторов'],
    bullets: [
      'Анализ сроков подачи и доказательственной базы',
      'Подготовка мотивированного заявления в арбитражный суд',
      'Защита требования при возражениях должника и управляющего'
    ]
  },
  {
    fileName: 'zashchita-ot-subsidiarnoj-otvetstvennosti-og.jpg',
    category: 'СУБСИДИАРНАЯ ОТВЕТСТВЕННОСТЬ • ЛИПЕЦК',
    lines: ['Защита директора и КДЛ', 'от субсидиарной ответственности'],
    bullets: [
      'Анализ оснований заявления и статуса контролирующего лица',
      'Формирование доказательств добросовестности и делового плана',
      'Защита личных активов руководителя и учредителей в суде'
    ]
  },
  {
    fileName: 'osparivanie-sdelok-pri-bankrotstve-og.jpg',
    category: 'БАНКРОТНЫЕ СПОРЫ • ЛИПЕЦК',
    lines: ['Оспаривание сделок', 'при банкротстве компании'],
    bullets: [
      'Специальные основания: ст. 61.2 и 61.3 Закона о банкротстве',
      'Защита добросовестных контрагентов или возврат активов в массу',
      'Оценка равноценности, предпочтения и финансовой хронологии'
    ]
  },
  {
    fileName: 'obzhalovanie-dejstvij-arbitrazhnogo-upravlyayushchego-og.jpg',
    category: 'СПОРИ С УПРАВЛЯЮЩИМ • ЛИПЕЦК',
    lines: ['Обжалование действий', 'арбитражного управляющего'],
    bullets: [
      'Выявление незаконных действий, бездействия и затягивания дела',
      'Жалобы в Росреестр, СРО и арбитражный суд',
      'Отстранение управляющего и взыскание причиненных убытков'
    ]
  }
];

function escapeXml(str) {
  return (str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function createSvg(item) {
  const line1 = escapeXml(item.lines[0] || '');
  const line2 = escapeXml(item.lines[1] || '');

  const bullet1 = escapeXml(item.bullets[0] || '');
  const bullet2 = escapeXml(item.bullets[1] || '');
  const bullet3 = escapeXml(item.bullets[2] || '');
  const category = escapeXml(item.category || '');

  return `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10273B" />
      <stop offset="100%" stop-color="#17324D" />
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#C1A066" />
      <stop offset="100%" stop-color="#E5CCA0" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)" />
  <rect x="0" y="0" width="1200" height="6" fill="url(#goldGrad)" />

  <!-- Subtle background seal / geometry -->
  <circle cx="1020" cy="315" r="220" fill="none" stroke="rgba(193, 160, 102, 0.08)" stroke-width="2" />
  <circle cx="1020" cy="315" r="170" fill="none" stroke="rgba(193, 160, 102, 0.05)" stroke-dasharray="6,6" stroke-width="2" />

  <!-- Logo and Company Header -->
  <rect x="80" y="65" width="36" height="3" fill="#C1A066" />
  <text x="130" y="73" font-family="Georgia, serif" font-size="20" font-weight="bold" fill="#C1A066" letter-spacing="2">ЮК «ДЕ-ЮРЕ»</text>
  <text x="80" y="108" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#94A3B8" letter-spacing="2">${category}</text>

  <!-- Main Title -->
  <text x="80" y="195" font-family="Georgia, serif" font-size="44" font-weight="bold" fill="#FFFFFF">${line1}</text>
  ${line2 ? `<text x="80" y="252" font-family="Georgia, serif" font-size="44" font-weight="bold" fill="#FFFFFF">${line2}</text>` : ''}

  <!-- Accent Divider -->
  <rect x="80" y="${line2 ? '290' : '235'}" width="70" height="3" fill="#C1A066" />

  <!-- Bullets list -->
  <g transform="translate(80, ${line2 ? '335' : '285'})">
    <g transform="translate(0, 0)">
      <circle cx="10" cy="10" r="10" fill="rgba(193, 160, 102, 0.2)" />
      <circle cx="10" cy="10" r="4" fill="#C1A066" />
      <text x="36" y="16" font-family="Arial, sans-serif" font-size="20" fill="#E2E8F0">${bullet1}</text>
    </g>
    <g transform="translate(0, 48)">
      <circle cx="10" cy="10" r="10" fill="rgba(193, 160, 102, 0.2)" />
      <circle cx="10" cy="10" r="4" fill="#C1A066" />
      <text x="36" y="16" font-family="Arial, sans-serif" font-size="20" fill="#E2E8F0">${bullet2}</text>
    </g>
    <g transform="translate(0, 96)">
      <circle cx="10" cy="10" r="10" fill="rgba(193, 160, 102, 0.2)" />
      <circle cx="10" cy="10" r="4" fill="#C1A066" />
      <text x="36" y="16" font-family="Arial, sans-serif" font-size="20" fill="#E2E8F0">${bullet3}</text>
    </g>
  </g>

  <!-- Bottom Bar with Contacts and City -->
  <rect x="80" y="535" width="1040" height="1" fill="rgba(148, 163, 184, 0.2)" />
  <text x="80" y="575" font-family="Arial, sans-serif" font-size="15" fill="#94A3B8">г. Липецк, ул. Советская, д. 35 • +7 (4742) 20-15-25 • dejure-help.ru</text>
  <text x="1120" y="575" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#C1A066" text-anchor="end">ДЕ-ЮРЕ</text>
</svg>
`;
}

async function run() {
  for (const item of ogList) {
    const svgBuffer = Buffer.from(createSvg(item));
    const outPath = path.join(targetDir, item.fileName);
    await sharp(svgBuffer)
      .jpeg({ quality: 88 })
      .toFile(outPath);
    const stats = fs.statSync(outPath);
    console.log(`Generated: ${item.fileName} (${(stats.size / 1024).toFixed(1)} KB)`);
  }
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
