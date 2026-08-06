const fs = require('fs');
let b = fs.readFileSync('src/app/uslugi/biznesu/BiznesuClient.tsx', 'utf8');

// 1. card-arrow buttons -> Подробнее
b = b.replace(/<span>Описать ситуацию<\/span>/g, '<span>Подробнее</span>');

// 2. Remove the dark CTA card (Индивидуальный вопрос) from direction grid - lines 506-554
// Find from the comment to the closing </div>\n          </div>\n        </div>\n      </section>
const ctaStart = b.indexOf('{/* Завершающая темная карточка CTA');
const sectionClose = '          </div>\r\n        </div>\r\n      </section>';
const sectionClose2 = '          </div>\n        </div>\n      </section>';

if (ctaStart !== -1) {
  // Find end - the closing of the section
  const fromCta = b.substring(ctaStart);
  
  // Find the </div></div></section> after the CTA card
  let endIdx = fromCta.indexOf(sectionClose);
  if (endIdx === -1) endIdx = fromCta.indexOf(sectionClose2);
  
  if (endIdx !== -1) {
    const sep = fromCta.indexOf('\r\n') !== -1 ? '\r\n' : '\n';
    const closing = endIdx !== -1 ? (fromCta.indexOf(sectionClose) !== -1 ? sectionClose : sectionClose2) : null;
    
    // Remove from before cta to just before the closing divs, keep the closing divs  
    // The grid starts before: "            {filteredDirections.map"
    // We need to close the grid div, container div, and section
    const beforeCta = b.substring(0, ctaStart);
    const afterCta = b.substring(ctaStart + endIdx + (fromCta.indexOf(sectionClose) !== -1 ? sectionClose.length : sectionClose2.length));
    
    b = beforeCta + '          </div>\r\n        </div>\r\n      </section>' + afterCta;
    console.log('Removed CTA card block');
  } else {
    console.log('Could not find section close, trying line approach');
    // Remove just the Индивидуальный вопрос card div block
  }
}

// 3. Remove the "Индивидуальный вопрос" label div in the separate section (line 770)
// Remove the entire div containing the line + span
const lines = b.split('\n');
const result = [];
let i = 0;
while (i < lines.length) {
  const l = lines[i];
  // Detect the flex div that contains the label
  if (l.trim().startsWith('<div style={{ display:') && l.includes("alignItems: 'center'") && l.includes("gap: '14px'")) {
    // Check if next non-empty line has the label
    let j = i + 1;
    while (j < lines.length && lines[j].trim() === '') j++;
    if (lines[j] && lines[j].includes('Индивидуальный вопрос')) {
      // Skip this div and its content until closing </div>
      let depth = 1;
      i++;
      while (i < lines.length && depth > 0) {
        const t = lines[i].trim();
        if (t.startsWith('<div')) depth++;
        if (t.startsWith('</div>')) depth--;
        i++;
      }
      // Also skip blank line after
      if (i < lines.length && lines[i].trim() === '') i++;
      continue;
    }
  }
  result.push(l);
  i++;
}
b = result.join('\n');

fs.writeFileSync('src/app/uslugi/biznesu/BiznesuClient.tsx', b);

// Verify
const final = fs.readFileSync('src/app/uslugi/biznesu/BiznesuClient.tsx', 'utf8');
console.log('Индивидуальный вопрос:', (final.match(/Индивидуальный вопрос/g) || []).length);
console.log('Описать ситуацию:', (final.match(/Описать ситуацию/g) || []).length);
console.log('Подробнее count:', (final.match(/<span>Подробнее<\/span>/g) || []).length);
console.log('Total lines:', final.split('\n').length);
