const fs = require('fs');
const path = require('path');

const transcriptPath = 'C:/Users/Honor/.gemini/antigravity/brain/6bf3c608-4e1c-48aa-b662-dacb779814bc/.system_generated/logs/transcript_full.jsonl';
const lines = fs.readFileSync(transcriptPath, 'utf8').split('\n');

const filesToRestore = {};

for (const line of lines) {
  if (!line) continue;
  try {
    const entry = JSON.parse(line);
    // Let's target edits made yesterday afternoon (steps between 9645 and 13800 roughly)
    // Actually, let's just get ALL edits after step 9000 that target the military lawyer folder
    if (entry.step_index < 9600 || entry.step_index > 13797) continue;

    if (entry.tool_calls) {
      for (const call of entry.tool_calls) {
        if (call.name === 'replace_file_content' || call.name === 'multi_replace_file_content') {
           const targetFile = call.args.TargetFile;
           if (targetFile && targetFile.includes('grazhdanam\\\\voennyj-yurist') || targetFile.includes('grazhdanam/voennyj-yurist')) {
               const normalizedPath = targetFile.replace(/\\\\/g, '/');
               if (!filesToRestore[normalizedPath]) {
                   filesToRestore[normalizedPath] = [];
               }
               filesToRestore[normalizedPath].push({
                   step: entry.step_index,
                   name: call.name,
                   args: call.args
               });
           }
        }
      }
    }
  } catch(e) {}
}

console.log('Found ' + Object.keys(filesToRestore).length + ' files with edits to restore.');

// Now we need to figure out how to restore them.
// The easiest way is NOT to apply diffs (line numbers might have shifted),
// but instead we can just pull the Final State from the LAST edit made to each file?
// Wait, replace_file_content only replaces a chunk, not the whole file.
// So we HAVE to apply them sequentially.
// Actually, since I did `git checkout`, the files are in the exact same state they were before these edits!
// So applying them sequentially SHOULD work perfectly if we start from a clean git checkout.

// Let's just list how many edits there are per file to see if this is feasible.
for (const file of Object.keys(filesToRestore)) {
    console.log(file + ': ' + filesToRestore[file].length + ' edits');
}
