const fs = require('fs');
const path = require('path');

const subagentIds = [
  '5aba8c16-bd36-4429-8b78-129e8a7e5246',
  '2068188d-117d-46a3-b763-4e759cbb1e14',
  '1de4107b-e0b5-4b23-803a-55096521d7c9',
  '5016e354-4ef8-4707-92d7-7aa4c242ab0e'
];

subagentIds.forEach(id => {
  const p = path.join('C:\\Users\\Honor\\.gemini\\antigravity\\brain', id, '.system_generated\\logs\\transcript.jsonl');
  if (fs.existsSync(p)) {
    const lines = fs.readFileSync(p, 'utf8').trim().split('\n').filter(Boolean);
    console.log(`=== SUBAGENT ${id} (total lines: ${lines.length}) ===`);
    for (let i = lines.length - 1; i >= 0; i--) {
      try {
        const obj = JSON.parse(lines[i]);
        if (obj.content && obj.type === 'PLANNER_RESPONSE') {
          console.log('Last response snippet:\n', obj.content.substring(0, 500));
          break;
        }
      } catch (e) {}
    }
  } else {
    console.log('Path not found for subagent:', id);
  }
});
