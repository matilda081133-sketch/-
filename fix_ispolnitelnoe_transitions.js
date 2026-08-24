const fs = require('fs');

let file = 'src/app/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/IspolnitelnoeClient.tsx';
let content = fs.readFileSync(file, 'utf-8');

content = content.replaceAll("className=\"card service-card\" style={{ height: '100%', minHeight: '210px', padding: '28px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: '0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderTop: '3px solid var(--color-primary)', cursor: 'pointer' }}", "className=\"card service-card\" style={{ height: '100%', minHeight: '210px', padding: '28px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: '0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderTop: '3px solid var(--color-primary)', cursor: 'pointer', transition: 'all 0.35s ease' }}");

content = content.replaceAll("className=\"card-arrow\" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600 }}", "className=\"card-arrow\" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, transition: 'all 0.35s ease' }}");

fs.writeFileSync(file, content, 'utf-8');
console.log('IspolnitelnoeClient service cards transitions updated');
