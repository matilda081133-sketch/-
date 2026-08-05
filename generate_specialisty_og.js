const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateOG() {
  const width = 1200;
  const height = 630;

  const svgImage = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10273B" />
        <stop offset="50%" stop-color="#17324D" />
        <stop offset="100%" stop-color="#0A1A28" />
      </linearGradient>
      <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#C1A066" />
        <stop offset="50%" stop-color="#D4AF37" />
        <stop offset="100%" stop-color="#E5C17C" />
      </linearGradient>
    </defs>

    <!-- Background -->
    <rect width="${width}" height="${height}" fill="url(#bg)" />

    <!-- Gold Accent Bar Top -->
    <rect x="0" y="0" width="${width}" height="8" fill="url(#gold)" />

    <!-- Decorative Grid Pattern -->
    <circle cx="1100" cy="100" r="300" fill="none" stroke="rgba(193, 160, 102, 0.08)" stroke-width="2" />
    <circle cx="1100" cy="100" r="450" fill="none" stroke="rgba(193, 160, 102, 0.04)" stroke-width="1.5" />

    <!-- Content Group -->
    <g transform="translate(80, 140)">
      <!-- Company Label -->
      <rect x="0" y="0" width="220" height="34" rx="4" fill="rgba(193, 160, 102, 0.15)" stroke="rgba(193, 160, 102, 0.4)" stroke-width="1" />
      <text x="110" y="22" font-family="Georgia, serif" font-size="14" font-weight="600" fill="#E5C17C" text-anchor="middle" letter-spacing="2">ЮК «ДЕ-ЮРЕ»</text>

      <!-- Main Title -->
      <text x="0" y="100" font-family="Georgia, serif" font-size="46" font-weight="bold" fill="#FFFFFF">Юристы и адвокаты</text>
      <text x="0" y="155" font-family="Georgia, serif" font-size="46" font-weight="bold" fill="#E5C17C">в Липецке</text>

      <!-- Subtitle -->
      <text x="0" y="220" font-family="Arial, sans-serif" font-size="22" fill="#E2E8F0">Команда специалистов по гражданским, военным,</text>
      <text x="0" y="255" font-family="Arial, sans-serif" font-size="22" fill="#E2E8F0">уголовным и корпоративным делам</text>

      <!-- Trust Badges -->
      <g transform="translate(0, 310)">
        <circle cx="16" cy="16" r="16" fill="rgba(193, 160, 102, 0.2)" />
        <path d="M10 16 L14 20 L22 12" stroke="#E5C17C" stroke-width="2.5" fill="none" stroke-linecap="round" />
        <text x="44" y="22" font-family="Arial, sans-serif" font-size="18" font-weight="500" fill="#CBD5E1">Практика с 1995 года</text>

        <circle cx="280" cy="16" r="16" fill="rgba(193, 160, 102, 0.2)" />
        <path d="M274 16 L278 20 L286 12" stroke="#E5C17C" stroke-width="2.5" fill="none" stroke-linecap="round" />
        <text x="308" y="22" font-family="Arial, sans-serif" font-size="18" font-weight="500" fill="#CBD5E1">Персональный подход</text>
      </g>
    </g>
  </svg>
  `;

  const outputDir = path.join(__dirname, 'public', 'images', 'og');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const outputPath = path.join(outputDir, 'specialisty.jpg');
  await sharp(Buffer.from(svgImage))
    .jpeg({ quality: 90 })
    .toFile(outputPath);

  console.log('Generated OG image at:', outputPath, 'Size:', fs.statSync(outputPath).size);
}

generateOG().catch(console.error);
