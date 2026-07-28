const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('old_hub.html', 'utf8');
const $ = cheerio.load(html);

// 1. Cases Block
console.log('--- CASES BLOCK DATA ---');
const cases = [];
$('div:contains("Кейс")').each((i, el) => {
    const text = $(el).text();
    if (text.includes('Кейс')) {
        // Find closest parent that looks like a card
        // Actually Next.js encodes data in a script tag!
    }
});

// Better yet, extract from __NEXT_DATA__
const nextDataScript = $('#__NEXT_DATA__').html();
if (nextDataScript) {
    fs.writeFileSync('next_data.json', nextDataScript);
    console.log('Wrote __NEXT_DATA__ to next_data.json');
} else {
    console.log('No __NEXT_DATA__ script found');
}
