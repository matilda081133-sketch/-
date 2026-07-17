const fs = require('fs'); 
const data = JSON.parse(fs.readFileSync('C:/Users/Honor/.gemini/antigravity/brain/56e86143-9eb9-46a5-a4dd-e251f79248ec/.system_generated/steps/4034/output.txt', 'utf8')); 
data.outputComponents.filter(c => c.screen).flatMap(c => c.screen.screens).forEach(s => {
  console.log(s.width + 'x' + s.height + ' | ' + s.title + ' | ' + s.screenshot?.downloadUrl);
});
