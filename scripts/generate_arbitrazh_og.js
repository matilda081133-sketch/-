const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const targetDir = path.join(__dirname, '..', 'public', 'images', 'og');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const ogList = [
  {
    fileName: 'arbitrazhnyj-yurist.jpg',
    category: 'АРБИТРАЖНЫЙ ЮРИСТ В ЛИПЕЦКЕ',
    lines: ['Арбитражный юрист', 'для бизнеса в Липецке'],
    bullets: [
      'Взыскание долгов и защита от необоснованных требований',
      'Представительство в Арбитражном суде Липецкой области',
      'Апелляция, кассация, исполнительное производство'
    ]
  },
  {
    fileName: 'isk-v-arbitrazhnyj-sud.jpg',
    category: 'АРБИТРАЖНЫЙ ПРОЦЕСС В ЛИПЕЦКЕ',
    lines: ['Подготовка и подача иска', 'в арбитражный суд'],
    bullets: [
      'Расчёт требований, неустойки и процентов по ст. 395 ГК РФ',
      'Соблюдение досудебного претензионного порядка',
      'Подача через «Мой Арбитр» и контроль принятия иска'
    ]
  },
  {
    fileName: 'zashchita-otvetchika-v-arbitrazhnom-sude.jpg',
    category: 'АРБИТРАЖНЫЙ ПРОЦЕСС В ЛИПЕЦКЕ',
    lines: ['Защита ответчика', 'в арбитражном суде'],
    bullets: [
      'Подготовка отзыва и контррасчёта исковых требований',
      'Снижение завышенной неустойки по ст. 333 ГК РФ',
      'Встречный иск, обеспечительные меры, мировое соглашение'
    ]
  },
  {
    fileName: 'obzhalovanie-resheniya-arbitrazhnogo-suda.jpg',
    category: 'АРБИТРАЖНЫЙ ПРОЦЕСС В ЛИПЕЦКЕ',
    lines: ['Обжалование решения', 'арбитражного суда'],
    bullets: [
      'Апелляционные жалобы в 19 ААС (г. Воронеж)',
      'Кассационные жалобы в АС Центрального округа (г. Калуга)',
      'Приостановление исполнения судебных актов'
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
  const line3 = escapeXml(item.lines[2] || '');

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
  ${line3 ? `<text x="80" y="309" font-family="Georgia, serif" font-size="44" font-weight="bold" fill="#FFFFFF">${line3}</text>` : ''}

  <!-- Bullet points -->
  <g transform="translate(0, ${line3 ? 20 : (line2 ? 0 : -20)})">
    <rect x="80" y="335" width="18" height="2.5" fill="#C1A066" />
    <text x="110" y="342" font-family="Arial, sans-serif" font-size="19" fill="#E2E8F0">${bullet1}</text>

    <rect x="80" y="380" width="18" height="2.5" fill="#C1A066" />
    <text x="110" y="387" font-family="Arial, sans-serif" font-size="19" fill="#E2E8F0">${bullet2}</text>

    <rect x="80" y="425" width="18" height="2.5" fill="#C1A066" />
    <text x="110" y="432" font-family="Arial, sans-serif" font-size="19" fill="#E2E8F0">${bullet3}</text>
  </g>

  <!-- Bottom Badge / Guarantee -->
  <rect x="80" y="520" width="560" height="48" fill="rgba(255,255,255,0.06)" rx="4" stroke="rgba(193,160,102,0.3)" stroke-width="1" />
  <text x="104" y="550" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#C1A066">Юридическая компания «Де-Юре»:</text>
  <text x="380" y="550" font-family="Arial, sans-serif" font-size="15" fill="#FFFFFF">Липецк, ул. Советская, 35</text>
</svg>
`;
}

async function generateAll() {
  for (const item of ogList) {
    const outPath = path.join(targetDir, item.fileName);
    const svgStr = createSvg(item);
    const svgBuf = Buffer.from(svgStr);

    await sharp(svgBuf)
      .jpeg({ quality: 90 })
      .toFile(outPath);

    const stat = fs.statSync(outPath);
    console.log(`Created OG image: ${item.fileName} (${(stat.size / 1024).toFixed(1)} KB)`);
  }
}

generateAll().catch(err => {
  console.error(err);
  process.exit(1);
});
