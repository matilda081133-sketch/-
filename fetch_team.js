const fs = require('fs');

async function run() {
  const res = await fetch('https://dejure-help.ru');
  const buffer = await res.arrayBuffer();
  const text = new TextDecoder('utf-8').decode(buffer);
  
  const matches = text.match(/<div class="t531__box">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g);
  if (matches) {
    matches.forEach(m => {
      console.log(m.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
    });
  } else {
    console.log('No team found');
  }
}
run();
