const fs = require('fs');

let src = fs.readFileSync('src/app/uslugi/biznesu/BiznesuClient.tsx', 'utf8');

// The old creative block starts at this comment and ends before section 2 comment
const OLD_MARKER = '{/* RICH ELEGANT B2B DOCUMENT SHEET */}';
const NEXT_SECTION = '{/* \u0415\u0415\u0415 2. \u041a\u0410\u0422\u0410\u041b\u041e\u0413';

const startIdx = src.indexOf(OLD_MARKER);
const endOfRightContent = src.lastIndexOf('\n        }\n      />', src.indexOf(NEXT_SECTION));
const endIdx = src.indexOf('/>', endOfRightContent) + 2;

console.log('startIdx:', startIdx, 'endIdx:', endIdx);
console.log('Replacing chars:', endIdx - startIdx);

// Build the new creative (doc stack like homepage)
const newCreative = `{/* ANIMATED DOC STACK */}
            <div className="mockup-container" style={{ zIndex: 1 }}>
              <div style={{ position: 'absolute', width: '250px', height: '250px', background: 'var(--color-primary)', filter: 'blur(100px)', opacity: 0.15, borderRadius: '50%' }}></div>

              <div className="doc-wrapper-float-4">
                <div className="doc-sheet doc-sheet-4">
                  <div style={{ padding: '40px 30px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '40px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-end' }}>
                        <div style={{ width: '100px', height: '4px', background: 'rgba(23,50,77,0.2)' }}></div>
                        <div style={{ width: '80px', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>
                    </div>
                    <div style={{ width: '160px', height: '8px', background: 'var(--color-primary)', margin: '0 auto 40px auto' }}></div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ width: '100%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                      <div style={{ width: '100%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                      <div style={{ width: '60%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="doc-wrapper-float-3">
                <div className="doc-sheet doc-sheet-3">
                  <div style={{ padding: '40px 30px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '40px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-end' }}>
                        <div style={{ width: '100px', height: '4px', background: 'rgba(23,50,77,0.2)' }}></div>
                        <div style={{ width: '60px', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>
                    </div>
                    <div style={{ width: '140px', height: '8px', background: 'var(--color-primary)', margin: '0 auto 40px auto' }}></div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ width: '100%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                      <div style={{ width: '95%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                      <div style={{ width: '80%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="doc-wrapper-float-2">
                <div className="doc-sheet doc-sheet-2">
                  <div style={{ padding: '30px 25px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '30px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-end' }}>
                        <div style={{ width: '100px', height: '4px', background: 'rgba(23,50,77,0.2)' }}></div>
                        <div style={{ width: '60px', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                        <div style={{ width: '80px', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>
                    </div>
                    <div style={{ width: '160px', height: '8px', background: 'var(--color-primary)', margin: '0 auto 20px auto' }}></div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <div style={{ width: '40%', height: '4px', background: 'rgba(23,50,77,0.2)' }}></div>
                        <div style={{ width: '100%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                        <div style={{ width: '90%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <div style={{ width: '50%', height: '4px', background: 'rgba(23,50,77,0.2)' }}></div>
                        <div style={{ width: '100%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                        <div style={{ width: '85%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>
                    </div>
                    <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '10px', borderTop: '1px dashed rgba(23,50,77,0.1)' }}>
                      <div>
                        <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.5)' }}>\u0417\u0430\u043a\u0430\u0437\u0447\u0438\u043a:</div>
                        <div style={{ width: '80px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '10px' }}></div>
                      </div>
                      <div>
                        <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.5)' }}>\u0418\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c:</div>
                        <div style={{ width: '80px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '10px' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="doc-wrapper-float-1">
                <div className="doc-sheet doc-sheet-1">
                  <div style={{ padding: '30px 25px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', opacity: 0.03, width: '150px' }}>
                      <img src="/-/images/logo_dark.png" alt="" style={{ width: '100%', height: 'auto' }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(23,50,77,0.2)', paddingBottom: '12px', marginBottom: '20px' }}>
                      <img src="/-/images/logo_dark.png" alt="" style={{ width: '60px', height: 'auto', opacity: 0.8 }} />
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-end' }}>
                        <div style={{ width: '80px', height: '4px', background: 'rgba(23,50,77,0.2)' }}></div>
                        <div style={{ width: '50px', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>
                    </div>
                    <div style={{ width: '120px', height: '8px', background: 'var(--color-deep-blue)', margin: '0 auto 20px auto' }}></div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <div style={{ width: '12px', height: '4px', background: 'var(--color-primary)', marginTop: '4px', flexShrink: 0 }}></div>
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          <div style={{ width: '100%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                          <div style={{ width: '85%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <div style={{ width: '12px', height: '4px', background: 'var(--color-primary)', marginTop: '4px', flexShrink: 0 }}></div>
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          <div style={{ width: '100%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                          <div style={{ width: '70%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                        </div>
                      </div>
                    </div>
                    <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '10px', borderTop: '1px solid rgba(23,50,77,0.2)' }}>
                      <div>
                        <div style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)' }}>\u041e\u041e\u041e \u00ab\u0414\u0415-\u042e\u0420\u0415\u00bb</div>
                        <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)' }}>\u0418\u041d\u041d 4826145890</div>
                      </div>
                      <div style={{ width: '45px', height: '45px', borderRadius: '50%', border: '1.5px solid #17375E', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-15deg)', opacity: 0.85 }}>
                        <div style={{ width: '37px', height: '37px', borderRadius: '50%', border: '0.5px dashed #17375E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <span style={{ fontSize: '4px', fontWeight: 'bold', color: '#17375E', textAlign: 'center', lineHeight: 1.1 }}>\u0414\u0415-\u042e\u0420\u0415 \u041b\u0418\u041f\u0415\u0426\u041a</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        }
      />`;

const result = src.substring(0, startIdx) + newCreative + src.substring(endIdx);
fs.writeFileSync('src/app/uslugi/biznesu/BiznesuClient.tsx', result, 'utf8');
console.log('DONE! File written. Length was', src.length, 'now', result.length);
