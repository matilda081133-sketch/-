const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const projectDir = 'C:\\Users\\Honor\\.gemini\\antigravity\\scratch\\dejure-web';
const outDir = path.join(projectDir, 'out');

console.log('1. Cleaning .next and out directories...');
const nextDir = path.join(projectDir, '.next');
if (fs.existsSync(nextDir)) {
  fs.rmSync(nextDir, { recursive: true, force: true });
}
if (fs.existsSync(outDir)) {
  fs.rmSync(outDir, { recursive: true, force: true });
}

console.log('2. Building fresh Next.js export...');
execSync('npm run build', { cwd: projectDir, stdio: 'inherit' });

console.log('3. Ensuring .nojekyll exists...');
fs.writeFileSync(path.join(outDir, '.nojekyll'), '', 'utf8');

console.log('4. Initializing git repo inside out folder...');
const outGitDir = path.join(outDir, '.git');
if (fs.existsSync(outGitDir)) {
  fs.rmSync(outGitDir, { recursive: true, force: true });
}

const timestamp = new Date().toISOString();
execSync('git init', { cwd: outDir, stdio: 'inherit' });
execSync('git config user.name "Antigravity"', { cwd: outDir, stdio: 'inherit' });
execSync('git config user.email "antigravity@gemini.ai"', { cwd: outDir, stdio: 'inherit' });
execSync('git checkout -b gh-pages', { cwd: outDir, stdio: 'inherit' });
execSync('git add -A', { cwd: outDir, stdio: 'inherit' });
execSync(`git commit -m "Deploy fresh build to gh-pages ${timestamp}"`, { cwd: outDir, stdio: 'inherit' });
execSync('git remote add origin https://github.com/matilda081133-sketch/-.git', { cwd: outDir, stdio: 'inherit' });

console.log('5. Force pushing new unique commit to gh-pages...');
execSync('git push -f origin gh-pages', { cwd: outDir, stdio: 'inherit' });

console.log('SUCCESSFULLY DEPLOYED NEW COMMIT TO GH-PAGES AT ' + timestamp);
