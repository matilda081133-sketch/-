const fs = require('fs');

let css = fs.readFileSync('src/app/globals.css', 'utf8');

if (!css.includes('.footer-social-icon')) {
  css += `

/* Footer Social Icons */
.footer-social-icon {
  opacity: 0.6;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
}

.footer-social-icon:hover {
  opacity: 1;
  background: var(--color-primary);
  transform: translateY(-2px);
}
`;

  fs.writeFileSync('src/app/globals.css', css);
  console.log('globals.css updated with .footer-social-icon');
} else {
  console.log('.footer-social-icon already exists');
}
