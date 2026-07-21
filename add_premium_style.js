const fs = require('fs');

let css = fs.readFileSync('src/app/globals.css', 'utf8');

// Add premium colors if not there
if (!css.includes('--color-gold')) {
  css = css.replace(
    /--color-deep-blue: #10273B;/,
    `--color-deep-blue: #10273B;\n  --color-gold: #B89C72;\n  --color-gold-light: #DFD3C3;`
  );
}

// Enhance Buttons for a more "expensive" feel
css += `
/* Premium Accents */
h2 {
  position: relative;
  padding-bottom: 15px;
}

h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 2px;
  background: var(--color-gold);
}

.text-center h2::after {
  left: 50%;
  transform: translateX(-50%);
}

.service-card {
  border-top: 3px solid transparent !important;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.service-card:hover {
  border-top: 3px solid var(--color-gold) !important;
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(16, 39, 59, 0.08);
}

.service-card:hover .card-arrow {
  color: var(--color-gold) !important;
  transform: translateX(5px);
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
  border: 1px solid var(--color-gold);
  color: var(--color-deep-blue);
}

.btn-outline:hover {
  background-color: var(--color-gold);
  color: var(--color-white);
}

/* Add a subtle elegant pattern to cream backgrounds */
.bg-cream {
  background-image: radial-gradient(var(--color-gold-light) 1px, transparent 1px);
  background-size: 40px 40px;
  background-color: var(--color-cream);
}
`;

fs.writeFileSync('src/app/globals.css', css);
console.log('Premium styles added to globals.css');
