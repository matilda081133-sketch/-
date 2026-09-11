const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const outDir = path.join(rootDir, 'out');

console.log('--- DEPLOYING TO GH-PAGES ---');

console.log('1. Checking out directory...');
if (!fs.existsSync(outDir) || !fs.existsSync(path.join(outDir, 'index.html'))) {
  console.error('out directory or out/index.html does not exist. Run npm run build first.');
  process.exit(1);
}

// Ensure CNAME and .nojekyll exist
fs.writeFileSync(path.join(outDir, 'CNAME'), 'dejure-help.ru\n');
fs.writeFileSync(path.join(outDir, '.nojekyll'), '');

console.log('2. Preparing temporary git deployment repo inside out directory...');
const gitDir = path.join(outDir, '.git');
if (fs.existsSync(gitDir)) {
  fs.rmSync(gitDir, { recursive: true, force: true });
}

// Get the remote URL from current git repo
const remoteUrl = execSync('git config --get remote.origin.url', { cwd: rootDir, encoding: 'utf8' }).trim();
let lastCommitMsg = 'Deploy update';
try {
  lastCommitMsg = execSync('git log -1 --pretty=%s', { cwd: rootDir, encoding: 'utf8' }).trim();
} catch (e) {
  // fallback
}

console.log(`Remote: ${remoteUrl}`);
console.log(`Commit message: ${lastCommitMsg}`);

execSync('git init', { cwd: outDir, stdio: 'inherit' });
execSync('git config user.name "Matilda"', { cwd: outDir, stdio: 'inherit' });
execSync('git config user.email "matilda081133@sketch.local"', { cwd: outDir, stdio: 'inherit' });
execSync('git checkout -b gh-pages', { cwd: outDir, stdio: 'inherit' });
execSync(`git remote add origin ${remoteUrl}`, { cwd: outDir, stdio: 'inherit' });
execSync('git add -A', { cwd: outDir, stdio: 'inherit' });

const sanitizedMsg = lastCommitMsg.replace(/["`$\\]/g, ' ');
execSync(`git commit -m "${sanitizedMsg}"`, { cwd: outDir, stdio: 'inherit' });

console.log('3. Pushing to origin/gh-pages...');
execSync('git push origin gh-pages --force', { cwd: outDir, stdio: 'inherit' });

// Clean up .git from out
fs.rmSync(gitDir, { recursive: true, force: true });

console.log('Deployment to gh-pages branch successfully completed!');
