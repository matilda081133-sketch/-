const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesToOptimize = [
  'spory-postavki-hero.jpg',
  'bobkin.jpg',
  'konopkin.jpg',
  'smolyaninova.jpg',
  'gusev.jpg',
  'nacheshnikov.jpg',
  'polozova.jpg',
  '2gis_logo.png',
  'office-building.jpg',
  'office-entrance.jpg',
  'team-process.jpg'
];

async function optimize() {
  const imagesDir = path.join(__dirname, '..', 'public', 'images');
  console.log('=== Optimizing images to WebP (Quality 90 - visually identical) ===\n');

  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;

  for (const filename of imagesToOptimize) {
    const inputPath = path.join(imagesDir, filename);
    if (!fs.existsSync(inputPath)) {
      console.log(`Skipping (not found): ${filename}`);
      continue;
    }

    const ext = path.extname(filename);
    const baseName = path.basename(filename, ext);
    const outputPath = path.join(imagesDir, `${baseName}.webp`);

    const originalStats = fs.statSync(inputPath);
    totalOriginalSize += originalStats.size;

    const img = sharp(inputPath);
    const metadata = await img.metadata();

    await img
      .webp({ quality: 90, effort: 6 })
      .toFile(outputPath);

    const newStats = fs.statSync(outputPath);
    totalOptimizedSize += newStats.size;

    const savings = ((originalStats.size - newStats.size) / originalStats.size * 100).toFixed(1);
    console.log(`${filename} (${metadata.width}x${metadata.height})`);
    console.log(`  Original: ${(originalStats.size / 1024).toFixed(1)} KB`);
    console.log(`  WebP:     ${(newStats.size / 1024).toFixed(1)} KB (-${savings}%)\n`);
  }

  const totalSaved = ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1);
  console.log('--------------------------------------------');
  console.log(`Total original:  ${(totalOriginalSize / 1024).toFixed(1)} KB`);
  console.log(`Total optimized: ${(totalOptimizedSize / 1024).toFixed(1)} KB`);
  console.log(`Total savings:   ${((totalOriginalSize - totalOptimizedSize) / 1024).toFixed(1)} KB (${totalSaved}%)`);
}

optimize().catch(console.error);
