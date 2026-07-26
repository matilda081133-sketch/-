const fs = require('fs');
const execSync = require('child_process').execSync;

try {
  fs.mkdirSync('./temp_docx', { recursive: true });
  execSync('tar -xf "C:/Users/Honor/Downloads/Telegram Desktop/TZ_dorabotka_stranitsy_Kontakty_De-Yure.docx" -C ./temp_docx');
  const xml = fs.readFileSync('./temp_docx/word/document.xml', 'utf8');
  const text = xml.replace(/<[^>]+>/g, ' ');
  fs.writeFileSync('tz_kontakty.txt', text.replace(/\s+/g, ' '));
} catch (e) {
  console.error(e);
} finally {
  fs.rmSync('./temp_docx', { recursive: true, force: true });
}
