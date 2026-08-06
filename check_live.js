fetch('https://matilda081133-sketch.github.io/-/grazhdanam/')
  .then(r => r.text())
  .then(html => {
    const idx1 = html.indexOf('Подробнее');
    const idx2 = html.indexOf('Описать ситуацию');
    if (idx1 !== -1) console.log('Подробнее context:', html.substring(idx1-80, idx1+40).replace(/\s+/g,' '));
    if (idx2 !== -1) console.log('Описать context:', html.substring(idx2-80, idx2+50).replace(/\s+/g,' '));

    // Find card-arrow button texts
    let pos = 0;
    let count = 0;
    while (count < 5) {
      const ca = html.indexOf('card-arrow', pos);
      if (ca === -1) break;
      const chunk = html.substring(ca, ca+300);
      const spanMatch = chunk.match(/<span>([^<]+)<\/span>/);
      if (spanMatch) console.log('card-arrow button #' + (++count) + ':', spanMatch[1]);
      pos = ca + 1;
    }
  });
