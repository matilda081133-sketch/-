const fs = require('fs');
let lines = fs.readFileSync('src/app/page.tsx', 'utf-8').split('\n');

const newContent = `        {/* HERO IMAGE */}
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center' }}>
          <div className="photo-hover-shadow" style={{ 
            width: '100%',
            maxWidth: '450px',
            aspectRatio: '3/4', 
            background: 'var(--color-cream)', 
            borderRadius: '4px',
            overflow: 'hidden',
            position: 'relative'
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="images/hero-photo.jpg" 
              alt="Юридическая помощь" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
`;

// Replace lines 117 to 282 inclusive
lines.splice(117, 283 - 117, newContent);

fs.writeFileSync('src/app/page.tsx', lines.join('\n'), 'utf-8');
