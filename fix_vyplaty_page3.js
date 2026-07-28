const fs = require('fs');
let page = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/page.tsx', 'utf8');

// 1. Replace the Hero props
const oldTrustItemsRegex = /trustItems=\{\[\s*\{\s*text:\s*'Проверяем несколько оснований выплат'\s*\},[\s\S]*?\]\}/;

const newProps = `primaryCtaSubtext="Перезвоним в течение 15 минут в рабочее время"
        imageUrl="/-/images/konopkin.jpg"
        imageName="Дмитрий Сергеевич Конопкин"
        imageSubtitle="Адвокат, ведущий юрист военного направления"
        trustItems={[]}`;

page = page.replace(oldTrustItemsRegex, newProps);

// 2. Replace the grid items formatting
const oldGridItemRegex = /<div key=\{i\} className="hover-lift" style=\{\{\s*background: 'var\(--color-cream\)',\s*padding: '24px',\s*borderLeft: '4px solid var\(--color-gold\)',\s*color: 'var\(--color-deep-blue\)',\s*transition: 'transform 0\.3s ease, box-shadow 0\.3s ease'\s*\}\}>\s*\{item\}\s*<\/div>/g;

const newGridItem = `<a key={i} href="#form" style={{
                background: 'var(--color-cream)',
                padding: '24px',
                borderLeft: '4px solid #D9534F',
                fontWeight: 500,
                color: 'var(--color-deep-blue)',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }} className="hover-lift">
                <div style={{ marginBottom: '12px' }}>{item}</div>
                <div style={{ color: 'var(--color-primary)', fontSize: '13px', fontWeight: 600 }}>Связаться →</div>
              </a>`;

page = page.replace(oldGridItemRegex, newGridItem);

fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/page.tsx', page, 'utf8');
console.log('Successfully updated injured payments page using MilitaryHero component');
