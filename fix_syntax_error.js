const fs = require('fs');

const sochFile = 'src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx';
let soch = fs.readFileSync(sochFile, 'utf8');

const oldEnd = `            </div>
          </div>
        </div>
      </section>

      {/* Блок 4. Профильный адвокат */}`;

const newEnd = `            </div>
        </div>
      </section>

      {/* Блок 4. Профильный адвокат */}`;

soch = soch.replace(oldEnd, newEnd);
fs.writeFileSync(sochFile, soch);
console.log('Fixed syntax error (extra closing div)');
