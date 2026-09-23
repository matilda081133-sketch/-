const fs = require('fs');
const path = require('path');

const chatHtmlPath = 'C:\\Users\\Honor\\Downloads\\Telegram Desktop\\ChatExport_2026-09-22\\messages.html';
const content = fs.readFileSync(chatHtmlPath, 'utf8');

// Regex for message blocks in Telegram chat export
// Usually: <div class="message default clearfix" ...> ... <div class="from_name">...</div> <div class="text">...</div> ... </div>
const msgRegex = /<div class="message[^"]*" id="([^"]+)">([\s\S]*?)<\/div>\s*(?=<div class="message|$)/g;

let match;
const messages = [];

while ((match = msgRegex.exec(content)) !== null) {
  const id = match[1];
  const block = match[2];
  
  const fromMatch = block.match(/<div class="from_name">\s*([^<]+)\s*<\/div>/);
  const from = fromMatch ? fromMatch[1].trim() : 'Unknown';
  
  const dateMatch = block.match(/<div class="date details" title="([^"]+)">/);
  const date = dateMatch ? dateMatch[1] : '';

  const textMatch = block.match(/<div class="text">([\s\S]*?)<\/div>/);
  let text = textMatch ? textMatch[1] : '';
  // strip html tags from text
  text = text.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]+>/g, '').trim();

  // check media
  const mediaMatch = block.match(/<div class="media clearfix">([\s\S]*?)<\/div>/);
  const media = mediaMatch ? mediaMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() : '';

  if (text || media) {
    messages.push({ id, from, date, text, media });
  }
}

console.log(`Total parsed messages: ${messages.length}`);

// Filter for messages containing TZ, правки, доработки, URLs, etc.
const tzKeywords = ['тз', 'правк', 'доработк', 'хаб', 'замени', 'исправ', 'блок', 'юрист', 'арбитраж', 'недвижим', 'docx', 'pdf'];

const relevant = messages.filter(m => {
  const lower = (m.text + ' ' + m.media).toLowerCase();
  return tzKeywords.some(k => lower.includes(k));
});

console.log(`Relevant messages count: ${relevant.length}`);

fs.writeFileSync('scripts/parsed_chat_relevant.json', JSON.stringify(relevant, null, 2), 'utf8');
console.log('Saved to scripts/parsed_chat_relevant.json');
