const fs = require('fs');

let css = fs.readFileSync('src/app/globals.css', 'utf-8');

const target = `.service-card {
  border-top: 3px solid transparent !important;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.service-card:hover {
  border-top: 3px solid var(--color-gold) !important;
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(16, 39, 59, 0.1);
}

.service-card:hover .card-arrow {
  color: var(--color-gold) !important;
  transform: translateX(5px);
}`;

const replacement = `.service-card {
  border-top: 3px solid transparent !important;
  transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease !important;
}

.service-card .card-arrow {
  transition: transform 0.35s ease, color 0.35s ease;
}

.service-card:hover {
  border-top: 3px solid var(--color-gold) !important;
  transform: translateY(-4px);
  box-shadow: 0 10px 24px rgba(23, 50, 77, 0.12);
}

.service-card:hover .card-arrow {
  color: var(--color-gold) !important;
  transform: translateX(6px);
}`;

css = css.replace(target.replace(/\r\n/g, '\n'), replacement);
fs.writeFileSync('src/app/globals.css', css, 'utf-8');
console.log('Smooth service card styles applied successfully');
