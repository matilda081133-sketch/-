const fs = require('fs');

const content = fs.readFileSync('C:\\Users\\Honor\\Downloads\\Telegram Desktop\\ChatExport_2026-09-22\\messages.html', 'utf8');

// Match message blocks
const msgRegex = /<div class="message[^"]*" id="([^"]+)">([\s\S]*?)(?=<div class="message[^"]*" id=|<\/body>|$)/g;

let match;
const allMessages = [];

while ((match = msgRegex.exec(content)) !== null) {
  const id = match[1];
  const block = match[2];

  const fromMatch = block.match(/<div class="from_name">\s*([^<]+)\s*<\/div>/);
  const from = fromMatch ? fromMatch[1].trim() : '';

  const dateMatch = block.match(/<div class="date details" title="([^"]+)">/);
  const date = dateMatch ? dateMatch[1] : '';

  const textMatch = block.match(/<div class="text">([\s\S]*?)<\/div>/);
  let text = textMatch ? textMatch[1] : '';
  text = text.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]+>/g, '').trim();

  const mediaMatch = block.match(/<div class="media_wrap clearfix">([\s\S]*?)<\/div>\s*<\/div>/);
  let media = '';
  if (mediaMatch) {
    media = mediaMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  }

  allMessages.push({ id, from, date, text, media });
}

console.log(`Extracted total: ${allMessages.length} messages`);

// Save all messages to a readable format
let out = '';
allMessages.forEach((m, idx) => {
  out += `\n################################################################################\n`;
  out += `[#${idx + 1}] ID: ${m.id} | DATE: ${m.date} | FROM: ${m.from}\n`;
  if (m.media) out += `[MEDIA]: ${m.media}\n`;
  if (m.text) out += `[TEXT]:\n${m.text}\n`;
});

fs.writeFileSync('scripts/all_chat_dump.txt', out, 'utf8');
console.log('Saved all_chat_dump.txt, size:', out.length);
