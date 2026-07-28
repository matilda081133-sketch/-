const fs = require('fs');
let page = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', 'utf8');

const regex = /<div className="grid grid-2" style={{ gap: '40px' }}>\s*{\/\* Левая колонка - Объединенная карточка \*\/}[\s\S]*?{\/\* Правая колонка - Темная акцентная карточка \*\/}[\s\S]*?<\/svg>\s*<\/div>\s*<h3.*?Что сообщить при первом обращении<\/h3>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;

const newBlock = `<div className="grid grid-2" style={{ gap: '40px' }}>
            {/* Левая колонка - Освобождение от ответственности */}
            <div style={{ background: 'var(--color-white)', borderRadius: '4px', borderTop: '4px solid var(--color-primary)', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', padding: '40px', height: '100%' }}>
                <h3 style={{ fontSize: '22px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px' }}>Освобождение от ответственности</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: 1.7, margin: 0 }}>
                  Примечание к статье 337 УК РФ допускает освобождение от уголовной ответственности лица, впервые совершившего деяние (ч. 1–4), если отсутствие стало следствием стечения тяжёлых обстоятельств. Это не автоматическое основание: необходимо установить применимую часть статьи и документально подтвердить фактические обстоятельства.
                </p>
            </div>

            {/* Правая колонка - Отличие от дезертирства */}
            <div style={{ background: 'var(--color-white)', borderRadius: '4px', borderTop: '4px solid var(--color-primary)', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', padding: '40px', height: '100%' }}>
                <h3 style={{ fontSize: '22px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '24px' }}>Чем СОЧ отличается от дезертирства</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {/* СОЧ */}
                  <div style={{ padding: '20px', background: 'var(--color-cream)', borderLeft: '4px solid var(--color-primary)', borderRadius: '0 4px 4px 0' }}>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>СОЧ (ст. 337 УК РФ)</div>
                    <div style={{ fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.6 }}><strong>Временное уклонение</strong> от исполнения обязанностей военной службы. Квалификация определяется по совокупности материалов дела.</div>
                  </div>
                  
                  {/* Дезертирство */}
                  <div style={{ padding: '20px', background: '#FFF8F8', borderLeft: '4px solid #D9534F', borderRadius: '0 4px 4px 0' }}>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#D9534F', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Дезертирство (ст. 338 УК РФ)</div>
                    <div style={{ fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.6 }}>Цель <strong>вовсе уклониться</strong> от прохождения службы. Направленность умысла на полное уклонение; продолжительность отсутствия сама по себе вопрос не решает.</div>
                  </div>
                </div>
            </div>
          </div>`;

if (page.match(regex)) {
    page = page.replace(regex, newBlock);
    fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', page, 'utf8');
    console.log('Successfully updated the Responsibility cards layout');
} else {
    console.log('Regex did not match!');
}
