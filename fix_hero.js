const fs = require('fs');

let b = fs.readFileSync('src/app/uslugi/biznesu/BiznesuClient.tsx', 'utf8');

// Find the start of rightContent (the hero creative section)
const startMarker = '{/* RICH ELEGANT B2B DOCUMENT SHEET */}';
const endMarker = '{/* ═══ 2. КАТАЛОГ';

const startIdx = b.indexOf(startMarker);
// Find the closing of the mockup-container div + the wrapping divs before section 2
// We need to find the end of rightContent closing } and />
// Look for the pattern: end of the doc-wrapper-main, then </div></div>}/>
// After startMarker, find the next occurrence of endMarker
const endIdx = b.indexOf(endMarker);

if (startIdx === -1) {
  console.log('ERROR: startMarker not found');
  process.exit(1);
}
if (endIdx === -1) {
  console.log('ERROR: endMarker not found');
  process.exit(1);
}

console.log('startIdx:', startIdx, 'endIdx:', endIdx);

// The section we need to replace is from startMarker backwards to "{/* RICH ELEGANT" 
// and forward to the closing />  before endMarker
// Let's find the exact boundaries by looking at what's between

const creativeSection = b.substring(startIdx, endIdx);
console.log('Creative section first 100 chars:', creativeSection.substring(0, 100));
console.log('Creative section last 100 chars:', creativeSection.substring(creativeSection.length - 100));

// Count the last few lines to find the closing pattern
const lines = b.split('\n');
const startLine = b.substring(0, startIdx).split('\n').length;
const endLine = b.substring(0, endIdx).split('\n').length;
console.log('Lines', startLine, 'to', endLine);
lines.slice(endLine - 5, endLine + 2).forEach((l, i) => console.log(endLine - 5 + i + 1, JSON.stringify(l.trim().substring(0, 80))));
