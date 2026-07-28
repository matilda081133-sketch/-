const fs = require('fs');
const cp = require('child_process');
const path = require('path');

const transcriptPath = 'C:/Users/Honor/.gemini/antigravity/brain/6bf3c608-4e1c-48aa-b662-dacb779814bc/.system_generated/logs/transcript_full.jsonl';
const lines = fs.readFileSync(transcriptPath, 'utf8').split('\n');

for (const line of lines) {
  if (!line) continue;
  try {
    const entry = JSON.parse(line);
    if (entry.step_index < 9600 || entry.step_index > 13797) continue;

    if (entry.tool_calls) {
      for (const call of entry.tool_calls) {
        
        // Handle RUN_COMMAND with node scripts
        if (call.name === 'run_command' && call.args.CommandLine && call.args.CommandLine.includes('node')) {
            const cmd = call.args.CommandLine;
            // Only run scripts that are just executing local js files, not one-liners or deployments
            if (cmd.match(/^node\s+[a-zA-Z0-9_]+\.js$/)) {
                console.log(`[Step ${entry.step_index}] Running: ${cmd}`);
                try {
                    cp.execSync(cmd, { stdio: 'inherit' });
                } catch(e) {
                    console.log(`[Step ${entry.step_index}] Failed to run ${cmd}`);
                }
            }
        }
        
        // Handle file content replacements
        if ((call.name === 'replace_file_content' || call.name === 'multi_replace_file_content') && call.args.TargetFile) {
           const targetFile = call.args.TargetFile.replace(/\\\\/g, '/').replace(/\\/g, '/');
           if (targetFile.includes('voennyj-yurist') && !targetFile.includes('components')) {
               console.log(`[Step ${entry.step_index}] Replacing content in ${targetFile}`);
               if (fs.existsSync(targetFile)) {
                   let content = fs.readFileSync(targetFile, 'utf8');
                   
                   if (call.name === 'replace_file_content') {
                       if (content.includes(call.args.TargetContent)) {
                           content = content.replace(call.args.TargetContent, call.args.ReplacementContent);
                           fs.writeFileSync(targetFile, content);
                       } else {
                           console.log(`[Step ${entry.step_index}] TargetContent not found in ${targetFile}`);
                       }
                   } else if (call.name === 'multi_replace_file_content') {
                       let allFound = true;
                       for (const chunk of call.args.ReplacementChunks) {
                           if (!content.includes(chunk.TargetContent)) {
                               allFound = false;
                               break;
                           }
                       }
                       if (allFound) {
                           for (const chunk of call.args.ReplacementChunks) {
                               content = content.replace(chunk.TargetContent, chunk.ReplacementContent);
                           }
                           fs.writeFileSync(targetFile, content);
                       } else {
                           console.log(`[Step ${entry.step_index}] Not all TargetContents found in ${targetFile}`);
                       }
                   }
               }
           }
        }
      }
    }
  } catch(e) {}
}
console.log('Replay finished!');
