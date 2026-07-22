with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_content = """        {/* HERO IMAGE */}
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
"""

# Delete lines 117 to 282 (0-indexed 117 to 283)
del lines[117:283]
lines.insert(117, new_content)

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.writelines(lines)
