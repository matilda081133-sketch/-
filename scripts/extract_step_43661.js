const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('C:/Users/Honor/.gemini/antigravity/brain/1f8459e5-b4a0-4cd7-ad16-381346f792b3/.system_generated/logs/transcript_full.jsonl'),
  crlfDelay: Infinity
});

rl.on('line', (line) => {
  if (line.includes('"step_index": 43661') || line.includes('"step_index":43661')) {
    const data = JSON.parse(line);
    console.log('Found 43661! Length:', data.content ? data.content.length : 0);
    fs.writeFileSync('scripts/step_43661_full.txt', data.content || '', 'utf8');
  }
});
