const fs = require('fs');
let lines = fs.readFileSync('src/app/page.tsx', 'utf-8').split('\n');

const newContent = `        {/* HERO IMAGE */}
        <div className="photo-hover-shadow" style={{ 
          width: '100%',
          height: '100%',
          background: 'var(--color-cream)', 
          borderRadius: '4px',
          overflow: 'hidden',
          position: 'relative'
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="images/hero-photo.jpg" 
            alt="Юридическая помощь" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
          />
        </div>`;

// Replace lines 117 to 283 inclusive (0-indexed lines 117-283 map to 118-284 in 1-indexed)
lines.splice(117, 284 - 117, newContent);

fs.writeFileSync('src/app/page.tsx', lines.join('\n'), 'utf-8');
