const fs = require('fs');

// Fix ExtendedContactStrip in ALL files
const dir = 'src/app/grazhdanam/voennyj-yurist';
const subfiles = [
    'dezertirstvo', 'osparivanie-zaklyucheniya-vvk', 'priznanie-voennosluzhashchego-umershim', 
    'samovolnoe-ostavlenie-chasti', 'spory-s-voenkomatom', 'vyplaty-seme-pogibshego-voennosluzhashchego', 'vyplaty-za-ranenie-voennosluzhashchego'
];
for(const sub of subfiles) {
    let f = dir + '/' + sub + '/page.tsx';
    let c = fs.readFileSync(f, 'utf8');
    c = c.replace(/<\/>[\s\n]*<ExtendedContactStrip \/>[\s\n]*\}\n[\s]*superTitle=/g, '</>\n        }\n        superTitle=');
    fs.writeFileSync(f, c);
}

// Fix page.tsx 336 (extra closing divs)
let hub = fs.readFileSync(dir + '/page.tsx', 'utf8');
hub = hub.replace('        ]}\n      />\n      </div>\n      </div>', '        ]}\n      />');
fs.writeFileSync(dir + '/page.tsx', hub);

// Fix SOCH 296 (broken div)
let soch = fs.readFileSync(dir + '/samovolnoe-ostavlenie-chasti/page.tsx', 'utf8');
soch = soch.replace(/Чем СОЧ отличается от дезертирства<\/h3>[\s\n]*<div[\s\n]*<div style={{ height: '1px'/g, 'Чем СОЧ отличается от дезертирства</h3>\n                  <div style={{ display: \'flex\', flexDirection: \'column\', gap: \'16px\' }}>\n                  <div style={{ height: \'1px\'');
soch = soch.replace(/Применимость этих норм требует отдельной проверки адвокатом\.[\s\n]*<\/p>[\s\n]*<\/div> style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>/g, 'Применимость этих норм требует отдельной проверки адвокатом.\n                </p>\n              </div>');
fs.writeFileSync(dir + '/samovolnoe-ostavlenie-chasti/page.tsx', soch);
console.log('Fixed using regex!');
