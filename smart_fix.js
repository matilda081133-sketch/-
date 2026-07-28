const fs = require('fs');

// 1. Fix SOCH
let soch = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', 'utf8');

// A. Fix ExtendedContactStrip placement
soch = soch.replace(/<\/>\s*<ExtendedContactStrip \/>\s*\}\s*superTitle=/g, '</>\n        }\n        superTitle=');

// B. Replace the bad SOCH block exactly as it was replaced before
// Wait, the SOCH block is already correct in git! 
// Ah, `replay.js` was trying to apply a fix to it, but failed because the regex was wrong.
// If I just get it from git, the SOCH block is from July 17. 
// Did I change the SOCH block on July 27?
// YES! In step 12827 I ran `fix_soch_cards.js`.
// And in step 13088 I ran `fix_cards.js`.
// I will just let `replay.js` run, and THEN I will fix the 2 syntax errors!
