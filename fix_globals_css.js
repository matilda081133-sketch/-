const fs = require('fs');

let css = fs.readFileSync('src/app/globals.css', 'utf-8');

const target = `.with-accent::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 2px;
  background: var(--color-gold);
}`;

const replacement = `.with-accent::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 2px;
  background: var(--color-gold);
}

.text-center .with-accent::after {
  left: 50%;
  transform: translateX(-50%);
}

.service-card {
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
}

.btn {
  border: 1px solid transparent;
  transition: all 0.3s ease;
}`;

css = css.replace(target, replacement);
fs.writeFileSync('src/app/globals.css', css, 'utf-8');
console.log('globals.css successfully updated');
