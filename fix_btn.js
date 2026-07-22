const fs = require('fs');
const path = require('path');

const pagePath = path.join('src', 'app', 'page.tsx');
let pageCode = fs.readFileSync(pagePath, 'utf8');

const targetStr = `className="btn" style={{ whiteSpace: 'nowrap', flexShrink: 0, background: 'var(--color-white)', color: 'var(--color-deep-blue)' }}`;
const replacement = `className="btn btn-light" style={{ whiteSpace: 'nowrap', flexShrink: 0 }}`;

if (pageCode.includes(targetStr)) {
    pageCode = pageCode.replace(targetStr, replacement);
    fs.writeFileSync(pagePath, pageCode);
    console.log('Button replaced in page.tsx');
} else {
    // maybe it still has the old style without background inline
    const targetStr2 = `className="btn" style={{ whiteSpace: 'nowrap', flexShrink: 0 }}`;
    if (pageCode.includes(targetStr2)) {
        pageCode = pageCode.replace(targetStr2, replacement);
        fs.writeFileSync(pagePath, pageCode);
        console.log('Button replaced in page.tsx (from old)');
    } else {
        console.log('Button string NOT FOUND in page.tsx');
    }
}

const cssPath = path.join('src', 'app', 'globals.css');
let cssCode = fs.readFileSync(cssPath, 'utf8');
if (!cssCode.includes('.btn-light')) {
    cssCode += '\n.btn-light {\n  background-color: var(--color-white) !important;\n  color: var(--color-deep-blue) !important;\n  border-color: transparent !important;\n}\n.btn-light:hover {\n  background-color: var(--color-cream) !important;\n}\n';
    fs.writeFileSync(cssPath, cssCode);
    console.log('Added .btn-light to globals.css');
}
