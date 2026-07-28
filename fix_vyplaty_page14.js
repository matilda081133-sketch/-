const fs = require('fs');
let page = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/page.tsx', 'utf8');

const target = `            ))}
          </div>
        </div>
      </section>`;

const replacement = `            ))}
          </div>

          <div style={{ marginTop: '20px' }}>
            <div 
              className="card service-card" 
              style={{ 
                padding: '40px', 
                background: 'var(--color-deep-blue)', 
                border: 'none',
                borderRadius: '0',
                display: 'flex', 
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '30px',
                transition: 'all 0.3s',
                position: 'relative',
                borderTop: '3px solid var(--color-gold)'
              }}
            >
              <style dangerouslySetInnerHTML={{__html: \`
                .white-btn-custom {
                  background-color: var(--color-white);
                  color: var(--color-deep-blue);
                  border: 1px solid var(--color-white);
                }
                .white-btn-custom:hover {
                  background-color: var(--color-primary) !important;
                  color: var(--color-white) !important;
                  border-color: var(--color-primary) !important;
                }
                
                @media (max-width: 768px) {
                  .horizontal-card-inner {
                    flex-direction: column !important;
                    align-items: flex-start !important;
                  }
                  .horizontal-card-btn {
                    margin-top: 20px;
                  }
                }
              \`}} />
              <div className="horizontal-card-inner" style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ flex: '1', textAlign: 'left' }}>
                  <h3 style={{ margin: '0 0 12px 0', fontSize: '24px', color: 'var(--color-white)', lineHeight: 1.3 }}>
                    Не нашли свою ситуацию?
                  </h3>
                  <p style={{ margin: '0', fontSize: '16px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.5 }}>
                    Кратко опишите обстоятельства — мы изучим вопрос <br/>и подскажем, какой специалист сможет помочь.
                  </p>
                </div>
                <div className="horizontal-card-btn" style={{ flexShrink: 0, textAlign: 'right' }}>
                  <a href="#form" className="btn white-btn-custom" style={{ display: 'inline-block', width: 'auto', fontSize: '16px', padding: '14px 28px' }}>
                    Описать ситуацию
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>`;

if (page.includes(target)) {
    page = page.replace(target, replacement);
    fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/page.tsx', page, 'utf8');
    console.log('Successfully added full-width card!');
} else {
    console.log('Target string not found!');
}
