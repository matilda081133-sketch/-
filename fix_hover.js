const fs = require('fs');
const path = require('path');

const pagePath = path.join('src', 'app', 'page.tsx');
let pageCode = fs.readFileSync(pagePath, 'utf8');

const targetStr = `className="btn" style={{ whiteSpace: 'nowrap', flexShrink: 0, backgroundColor: '#FFFFFF', color: '#17324D', border: 'none', fontWeight: 'bold' }}`;
const replacement = `className="btn btn-light" style={{ whiteSpace: 'nowrap', flexShrink: 0 }}`;

if (pageCode.includes(targetStr)) {
    pageCode = pageCode.replace(targetStr, replacement);
    fs.writeFileSync(pagePath, pageCode);
}

const cssPath = path.join('src', 'app', 'globals.css');
let cssCode = fs.readFileSync(cssPath, 'utf8');

// Replace old .btn-light if it exists
cssCode = cssCode.replace(/\.btn-light\s*{[^}]*}\s*\.btn-light:hover\s*{[^}]*}/g, '');

// Append new .btn-light
cssCode += `
.btn-light {
  background-color: var(--color-white) !important;
  color: var(--color-deep-blue) !important;
  border-color: transparent !important;
  font-weight: 600 !important;
}
.btn-light:hover {
  background-color: var(--color-cream) !important;
  color: var(--color-deep-blue) !important;
  border-color: transparent !important;
}
`;

fs.writeFileSync(cssPath, cssCode);
console.log('Fixed hover styles');
