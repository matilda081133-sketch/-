const fs = require('fs');
const html1 = fs.readFileSync('temp_1401.html', 'utf8');
const html2 = fs.readFileSync('temp_1410.html', 'utf8');

const getIds = (html) => {
    const matches = html.match(/id="[^"]+"/g) || [];
    return [...new Set(matches)];
};

console.log('14:01 IDs:', getIds(html1).join(', '));
console.log('14:10 IDs:', getIds(html2).join(', '));
