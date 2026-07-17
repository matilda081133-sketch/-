const fs = require('fs');
const files = [
  'src/app/page.tsx',
  'src/components/Header.tsx',
  'src/components/Footer.tsx'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    // We only want to replace `/images/` with `images/` inside src="" or img: ''
    // Also cover `src="/images/...` -> `src="images/...`
    content = content.replace(/src="\/images\//g, 'src="images/');
    content = content.replace(/src='\/images\//g, "src='images/");
    content = content.replace(/img:\s*'\/images\//g, "img: 'images/");
    // Also if there is any /-/images/ left, change to images/
    content = content.replace(/src="\/-\/images\//g, 'src="images/');
    
    fs.writeFileSync(file, content);
    console.log(`Fixed paths in ${file}`);
  }
});
