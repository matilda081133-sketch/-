const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');

async function optimizeImages() {
  console.log('Optimizing images in:', IMAGES_DIR);

  // 1. logo_dark.png -> logo_dark.webp (lossless/high quality 95, full 1024x1024)
  const logoInput = path.join(IMAGES_DIR, 'logo_dark.png');
  const logoOutput = path.join(IMAGES_DIR, 'logo_dark.webp');
  if (fs.existsSync(logoInput)) {
    await sharp(logoInput)
      .webp({ quality: 95, effort: 6 })
      .toFile(logoOutput);
    console.log(`logo_dark.webp created: ${fs.statSync(logoOutput).size} bytes (from ${fs.statSync(logoInput).size} bytes)`);
  }

  // 2. 2gis_logo.png -> 2gis_logo.webp (200w retina for 44px container)
  const twogisInput = path.join(IMAGES_DIR, '2gis_logo.png');
  const twogisOutput = path.join(IMAGES_DIR, '2gis_logo.webp');
  if (fs.existsSync(twogisInput)) {
    await sharp(twogisInput)
      .resize(200)
      .webp({ quality: 95, effort: 6 })
      .toFile(twogisOutput);
    console.log(`2gis_logo.webp created: ${fs.statSync(twogisOutput).size} bytes (from ${fs.statSync(twogisInput).size} bytes)`);
  }

  // 3. yandex_logo.png -> yandex_logo.webp (150w retina for 44px container)
  const yandexInput = path.join(IMAGES_DIR, 'yandex_logo.png');
  const yandexOutput = path.join(IMAGES_DIR, 'yandex_logo.webp');
  if (fs.existsSync(yandexInput)) {
    await sharp(yandexInput)
      .resize(150)
      .webp({ quality: 95, effort: 6 })
      .toFile(yandexOutput);
    console.log(`yandex_logo.webp created: ${fs.statSync(yandexOutput).size} bytes (from ${fs.statSync(yandexInput).size} bytes)`);
  }

  // 4. Team photos -> WebP (quality 90, full original resolution)
  const teamPhotos = [
    'bobkin.jpg',
    'konopkin.jpg',
    'smolyaninova.jpg',
    'nacheshnikov.jpg',
    'gusev.jpg',
    'polozova.jpg'
  ];

  for (const file of teamPhotos) {
    const input = path.join(IMAGES_DIR, file);
    const baseName = path.parse(file).name;
    const output = path.join(IMAGES_DIR, `${baseName}.webp`);
    if (fs.existsSync(input)) {
      await sharp(input)
        .webp({ quality: 90, effort: 6 })
        .toFile(output);
      console.log(`${baseName}.webp created: ${fs.statSync(output).size} bytes (from ${fs.statSync(input).size} bytes)`);
    }
  }

  console.log('Image optimization finished successfully!');
}

optimizeImages().catch(err => {
  console.error('Error optimizing images:', err);
  process.exit(1);
});
