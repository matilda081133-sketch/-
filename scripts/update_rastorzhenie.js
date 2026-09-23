const fs = require('fs');
const file = 'src/app/grazhdanam/yurist-po-nedvizhimosti/rastorzhenie-ddu/RastorzhenieDDUClient.tsx';
let content = fs.readFileSync(file, 'utf8');

const targetStr = `            <div className="grid grid-2" style={{ gap: '22px', position: 'relative', zIndex: 1 }}>
              {[
                {
                  title: 'Односторонний отказ (ст. 9 № 214-ФЗ)',
                  desc: 'Применяется при просрочке свыше 2 месяцев или существенных строительных дефектах. Не требует согласия застройщика и судебного процесса.'
                },
                {
                  title: 'Сроки прекращения договора',
                  desc: 'ДДУ считается расторгнутым со дня направления застройщику официального письменного уведомления заказным письмом с описью вложений.'
                },
                {
                  title: 'Добровольное соглашение сторон',
                  desc: 'Взаимное расторжение ДДУ. Важно зафиксировать обязательство возврата денег, отсутствие штрафных удержаний и точные сроки выплат.'
                },
                {
                  title: 'Урегулирование ипотеки и эскроу',
                  desc: 'Согласование порядка перечисления средств между уполномоченным банком, счётом эскроу и дольщиком для снятия залога и закрытия кредита.'
                },
                {
                  title: 'Судебное расторжение ДДУ',
                  desc: 'Необходимо при существенном изменении проекта, превышении площади более чем на 5%, заморозке стройки или отказе признавать недостатки.'
                },
                {
                  title: 'Взыскание процентов и убытков',
                  desc: 'Через суд взыскиваются проценты за пользование деньгами (1/150 ключевой ставки ЦБ за каждый день), судебные расходы, штраф 50% и моральный вред.'
                },
                {
                  title: 'Уступка права требования',
                  desc: 'Если оснований для расторжения недостаточно или этот вариант финансово невыгоден, организуем передачу прав по ДДУ другому покупателю.'
                },
                {
                  title: 'Безопасность сделки по цессии',
                  desc: 'Согласуем уступку с банком и застройщиком, обеспечим безопасные расчёты и регистрацию договора уступки прав в Росреестре.'
                }
              ].map((item, idx) => (`;

const replaceStr = `            <div className="grid grid-2" style={{ gap: '22px', position: 'relative', zIndex: 1 }}>
              {[
                {
                  title: 'Односторонний отказ',
                  desc: 'Применяется при просрочке свыше 2 месяцев или существенных строительных дефектах. Не требует согласия застройщика и судебного процесса.'
                },
                {
                  title: 'Добровольное соглашение сторон',
                  desc: 'Взаимное расторжение ДДУ. Важно зафиксировать обязательство возврата денег, отсутствие штрафных удержаний и точные сроки выплат.'
                },
                {
                  title: 'Судебное расторжение',
                  desc: 'Необходимо при существенном изменении проекта, превышении площади более чем на 5%, заморозке стройки или отказе признавать недостатки.'
                },
                {
                  title: 'Уступка права требования',
                  desc: 'Если оснований для расторжения недостаточно или этот вариант финансово невыгоден, организуем передачу прав по ДДУ другому покупателю.'
                }
              ].map((item, idx) => (`;

const normContent = content.replace(/\r\n/g, '\n');
const normTarget = targetStr.replace(/\r\n/g, '\n');
const normReplace = replaceStr.replace(/\r\n/g, '\n');

if (normContent.includes(normTarget)) {
  let updated = normContent.replace(normTarget, normReplace);
  
  const gridCloseTarget = '              ))}\n            </div>\n          </div>';
  const gridCloseReplace = `              ))}
            </div>

            <div style={{
              marginTop: '28px',
              padding: '16px 20px',
              background: 'rgba(255, 255, 255, 0.06)',
              borderLeft: '3px solid var(--color-gold)',
              borderRadius: '2px',
              fontSize: '14.5px',
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: 1.55
            }}>
              Если ДДУ оплачивался за счёт ипотеки, согласуем с банком порядок возврата средств со счёта эскроу, погашения кредита и снятия залога.
            </div>
          </div>`;

  if (updated.includes(gridCloseTarget)) {
    updated = updated.replace(gridCloseTarget, gridCloseReplace);
    fs.writeFileSync(file, updated, 'utf8');
    console.log('Successfully updated RastorzhenieDDUClient.tsx');
  } else {
    console.log('Grid close target not found');
  }
} else {
  console.log('Target array not found');
}
