const fs = require('fs');
const path = require('path');

const filePath = 'C:/Users/Honor/Downloads/Telegram Desktop/TZ_dorabotka_stranitsy_Grazhdanam.docx';
const buf = fs.readFileSync(filePath);

// Extract text from docx (XML inside zip)
const { execSync } = require('child_process');

// Use powershell to expand the zip and read word/document.xml
const tmpDir = 'C:/Temp/tz_extract';
if (!fs.existsSync('C:/Temp')) fs.mkdirSync('C:/Temp');
if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir);

execSync(`Expand-Archive -Path "${filePath.replace(/\//g,'\\')}" -DestinationPath "${tmpDir.replace(/\//g,'\\')}" -Force`, { shell: 'powershell' });

const xmlPath = path.join(tmpDir, 'word', 'document.xml');
const xml = fs.readFileSync(xmlPath, 'utf8');

// Extract text from XML
const text = xml
  .replace(/<w:br[^>]*\/>/g, '\n')
  .replace(/<\/w:p>/g, '\n')
  .replace(/<[^>]+>/g, '')
  .replace(/&amp;/g, '&')
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"')
  .replace(/&#xA;/g, '\n')
  .split('\n')
  .map(l => l.trim())
  .filter(l => l.length > 0)
  .join('\n');

console.log(text);
