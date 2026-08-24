const fs = require('fs');

let css = fs.readFileSync('src/app/globals.css', 'utf-8');
css = css.replace(/\r\n/g, '\n');

// Find and fix
const beforeStr = `/* Premium Accents */
.with-accent { position: relative; padding-bottom: 15px; }`;

const block = `/* Premium Accents */
.with-accent { position: relative; padding-bottom: 15px; }

.with-accent::after {
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
}

.btn:hover {
  background-color: var(--color-deep-blue);
  border-color: var(--color-gold);
}

.btn-outline {
  border: 1px solid var(--color-gold) !important;
  color: var(--color-deep-blue) !important;
  background-color: transparent !important;
}`;

// Replace everything from /* Premium Accents */ until .btn-outline { ... }
const regex = /\/\* Premium Accents \*\/[\s\S]*?\.btn-outline\s*\{[^}]*\}/m;
if (regex.test(css)) {
  css = css.replace(regex, block);
  fs.writeFileSync('src/app/globals.css', css, 'utf-8');
  console.log('Successfully replaced with regex');
} else {
  console.log('Regex did not match');
}
