const fs = require('fs');
const file = 'src/app/grazhdanam/voennyj-yurist/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// The block to extract starts with:
// {/* 8. Другие вопросы и дистанционная помощь */}
// and ends with its closing </section>
const sectionStartStr = '{/* 8. Другие вопросы и дистанционная помощь */}';
let startIndex = content.indexOf(sectionStartStr);
if (startIndex === -1) {
    console.log('Could not find start of section 8');
    process.exit(1);
}

// Find the end of the section
let endIndex = content.indexOf('</section>', startIndex);
if (endIndex === -1) {
    console.log('Could not find end of section 8');
    process.exit(1);
}
endIndex += '</section>'.length;

const sectionToMove = content.substring(startIndex, endIndex);

// Remove it from the original place
content = content.substring(0, startIndex) + content.substring(endIndex);

// We want to merge it with UrgentContactStrip. 
// UrgentContactStrip is imported and rendered as <UrgentContactStrip />.
// Let's replace <UrgentContactStrip /> with BOTH of them wrapped in a single <section> if possible.
// Wait, UrgentContactStrip already has its own <section> with padding and dark blue bg.
// If we want them on the EXACT same background without a seam, we can just render them in the same <section> with dark blue background.
// To do this properly without breaking UrgentContactStrip usage elsewhere, 
// let's wrap <UrgentContactStrip /> and the moved section in a unified div, and strip the padding from the moved section.
// Actually, if we just place the moved section right after <UrgentContactStrip />, 
// we can change the moved section's `<section className="section" style={{ background: 'var(--color-deep-blue)' }}>` 
// to `<section style={{ background: 'var(--color-deep-blue)', paddingBottom: '60px' }}>` 
// and it will look like one continuous block because the backgrounds are identical!
// Let's modify the sectionToMove to remove top padding so it merges seamlessly with UrgentContactStrip.

let modifiedSectionToMove = sectionToMove.replace(
    /<section className=\"section\" style=\{\{\s*background:\s*'var\(--color-deep-blue\)'\s*\}\}>/,
    '<section style={{ background: \'var(--color-deep-blue)\', paddingBottom: \'64px\' }}>'
);

// Insert it right after <UrgentContactStrip />
const insertTarget = '<UrgentContactStrip />';
content = content.replace(insertTarget, insertTarget + '\n\n      ' + modifiedSectionToMove);

fs.writeFileSync(file, content);
console.log('Section moved successfully!');
