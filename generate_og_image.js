const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const targetDir = path.join(__dirname, 'public', 'images', 'og');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const outputPath = path.join(targetDir, 'vyplaty-seme-pogibshego-voennosluzhashchego.jpg');
const konopkinPath = path.join(__dirname, 'public', 'images', 'konopkin.jpg');

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10273B" />
      <stop offset="100%" stop-color="#17324D" />
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#C1A066" />
      <stop offset="100%" stop-color="#D4B87D" />
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)" />
  <rect x="0" y="0" width="1200" height="6" fill="url(#goldGrad)" />

  <!-- Logo and Company Name -->
  <rect x="80" y="70" width="40" height="3" fill="#C1A066" />
  <text x="136" y="76" font-family="Georgia, serif" font-size="20" font-weight="bold" fill="#C1A066" letter-spacing="2">ЮК «ДЕ-ЮРЕ»</text>
  <text x="80" y="110" font-family="Arial, sans-serif" font-size="14" fill="#A0B2C6" letter-spacing="1.5">ВОЕННЫЙ ЮРИСТ В ЛИПЕЦКЕ</text>

  <!-- Title -->
  <text x="80" y="200" font-family="Georgia, serif" font-size="40" font-weight="bold" fill="#FFFFFF">Выплаты семье</text>
  <text x="80" y="255" font-family="Georgia, serif" font-size="40" font-weight="bold" fill="#FFFFFF">погибшего</text>
  <text x="80" y="310" font-family="Georgia, serif" font-size="40" font-weight="bold" fill="#FFFFFF">военнослужащего</text>

  <!-- Subtitle Bullet points -->
  <rect x="80" y="365" width="20" height="2" fill="#C1A066" />
  <text x="112" y="371" font-family="Arial, sans-serif" font-size="17" fill="#E2E8F0">Проверка федеральных, страховых и региональных выплат</text>

  <rect x="80" y="405" width="20" height="2" fill="#C1A066" />
  <text x="112" y="411" font-family="Arial, sans-serif" font-size="17" fill="#E2E8F0">Оценка права каждого заявителя и сбор документов</text>

  <rect x="80" y="445" width="20" height="2" fill="#C1A066" />
  <text x="112" y="451" font-family="Arial, sans-serif" font-size="17" fill="#E2E8F0">Обжалование отказов и защита интересов семьи</text>

  <!-- Attorney badge -->
  <rect x="80" y="510" width="580" height="50" fill="rgba(255,255,255,0.06)" rx="4" stroke="rgba(193,160,102,0.3)" stroke-width="1" />
  <text x="100" y="540" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#C1A066">Куратор направления:</text>
  <text x="280" y="540" font-family="Arial, sans-serif" font-size="16" fill="#FFFFFF">Дмитрий Сергеевич Конопкин (Адвокат)</text>
</svg>
`;

async function run() {
  const photoBuffer = await sharp(konopkinPath)
    .resize(420, 570, { fit: 'cover', position: 'top' })
    .toBuffer();

  const svgBuffer = Buffer.from(svg);

  await sharp(svgBuffer)
    .composite([
      {
        input: photoBuffer,
        top: 30,
        left: 720
      }
    ])
    .jpeg({ quality: 90 })
    .toFile(outputPath);

  console.log('OG Image generated successfully at:', outputPath);
}

run().catch(console.error);
