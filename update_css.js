const fs = require('fs');

let css = fs.readFileSync('src/app/globals.css', 'utf8');

// Change .section padding
css = css.replace(
  /\.section \{\s*padding: 80px 0;\s*\}/,
  `.section {\n  padding: 64px 0;\n}`
);

// Add header styles for scrolling if not already present
// Wait, is there a .site-header in globals.css?
if (!css.includes('.site-header.scrolled')) {
  css += `
/* Header Scroll Styles */
.site-header {
  transition: all 0.3s ease;
  padding: 24px 0;
  background: var(--color-white);
  border-bottom: 1px solid transparent;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
}

.site-header.scrolled {
  padding: 12px 0;
  border-bottom: 1px solid var(--color-border);
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
}

.site-header.scrolled img {
  transform: scale(1) !important;
  transition: transform 0.3s ease;
}

.site-header img {
  transition: transform 0.3s ease;
}

/* Nav dropdown fixes */
.nav-item-dropdown {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
}

.dropdown-simple {
  position: absolute;
  top: 100%;
  left: 0;
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  padding: 10px 0;
  list-style: none;
  min-width: 250px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.2s ease;
}

.dropdown-simple.show, .nav-item-dropdown:hover .dropdown-simple {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-link-2 {
  display: block;
  padding: 8px 20px;
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color 0.2s, background 0.2s;
  font-size: 14px;
}

.dropdown-link-2:hover {
  color: var(--color-primary);
  background: var(--color-cream);
}

.chevron-btn {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-secondary);
}
`;
}

fs.writeFileSync('src/app/globals.css', css);
console.log('globals.css updated');
