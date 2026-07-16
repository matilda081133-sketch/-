const fs = require('fs');
const html = fs.readFileSync('source.html', 'utf-8');

console.log("--- SPECIALISTS ---");
const index = html.indexOf('Бобкин');
const context = html.substring(Math.max(0, index - 200), index + 8000);
console.log(context.replace(/<[^>]+>/g, '\n').replace(/\n+/g, '\n').trim());

console.log("\n--- SVGS ---");
const svgs = html.match(/<svg[\s\S]*?<\/svg>/g);
if (svgs) {
  // Try to find the ones for VK, TG, or Max
  const unique = [...new Set(svgs)];
  unique.forEach((svg, i) => {
    // Only print svgs that are likely social icons (small width/height or viewbox)
    if (svg.includes('vk') || svg.includes('telegram') || svg.includes('whatsapp') || svg.includes('path')) {
      // Just print all unique svgs to be safe
      console.log(`\n=== SVG ${i} ===\n${svg}`);
    }
  });
}
