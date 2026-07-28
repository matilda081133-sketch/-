const fs = require('fs');
let html = fs.readFileSync('temp_1401.html', 'utf8');
let page = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', 'utf8');

// Function to safely extract a section from HTML by ID
function extractSectionHTML(id) {
    const startIdx = html.indexOf('id="' + id + '"');
    if (startIdx === -1) return null;
    let sectionStart = html.lastIndexOf('<section', startIdx);
    if (sectionStart === -1) return null;
    let sectionEnd = html.indexOf('</section>', startIdx) + 10;
    return html.substring(sectionStart, sectionEnd);
}

// Convert HTML to generic React JSX
function htmlToJSX(htmlStr) {
    return htmlStr
        .replace(/class=/g, 'className=')
        .replace(/style="([^"]*)"/g, (match, p1) => {
            const styles = p1.split(';').filter(Boolean);
            const styleObj = {};
            styles.forEach(s => {
                let [key, val] = s.split(':');
                if (key && val) {
                    // camelCase key
                    key = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
                    styleObj[key] = val.trim();
                }
            });
            return 'style={' + JSON.stringify(styleObj) + '}';
        })
        .replace(/<img([^>]*)>/g, '<img$1 />')
        .replace(/<br>/g, '<br />');
}

// Sections to replace
const sections = ['audience', 'directions', 'specialist', 'remote'];

sections.forEach(id => {
    let sectionHTML = extractSectionHTML(id);
    if (sectionHTML) {
        let jsx = htmlToJSX(sectionHTML);
        
        // Find in page.tsx
        let startPage = page.indexOf('id="' + id + '"');
        if (startPage > -1) {
            let sectionStart = page.lastIndexOf('<section', startPage);
            let sectionEnd = page.indexOf('</section>', startPage);
            if (sectionStart > -1 && sectionEnd > -1) {
                // If it's a Component, like <SpecialistBlock />, it doesn't start with <section
                // Oh wait, SpecialistBlock is used as <SpecialistBlock in page.tsx!
                // Let's check page.tsx
            }
        }
    }
});

// For SpecialistBlock, it's a React component in page.tsx, so replacing it with HTML will remove the Component!
// So instead of a generic script, I will explicitly craft the replacement string for EACH block.
