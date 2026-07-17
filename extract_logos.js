const Jimp = require('jimp');
const path = require('path');

async function extractLogos() {
  try {
    const imgDarkBg = await Jimp.read(path.join(__dirname, 'public/images/logo_ref_1.jpg'));
    const imgLightBg = await Jimp.read(path.join(__dirname, 'public/images/logo_ref_2.jpg'));
    
    // For dark background image (logo_ref_1.jpg is dark blue ~18,27,46)
    // We want to extract the logo and make it Gold (for the transparent header)
    imgDarkBg.scan(0, 0, imgDarkBg.bitmap.width, imgDarkBg.bitmap.height, function(x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      
      // If it's dark blue (background)
      if (r < 50 && g < 60 && b < 80) {
        this.bitmap.data[idx + 3] = 0; // Fully transparent
      } else {
        // It's the logo text/icon. Make it perfect Gold
        this.bitmap.data[idx + 0] = 212;
        this.bitmap.data[idx + 1] = 175;
        this.bitmap.data[idx + 2] = 55;
        this.bitmap.data[idx + 3] = 255;
      }
    });

    // For light background image (logo_ref_2.jpg is white ~239,237,238)
    // We want to extract the logo and make it Dark Blue (for the white header)
    imgLightBg.scan(0, 0, imgLightBg.bitmap.width, imgLightBg.bitmap.height, function(x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      
      // If it's white/light grey (background)
      if (r > 150 && g > 150 && b > 150) {
        this.bitmap.data[idx + 3] = 0; // Fully transparent
      } else {
        // It's the logo text/icon. Make it perfect Dark Blue
        this.bitmap.data[idx + 0] = 16;
        this.bitmap.data[idx + 1] = 39;
        this.bitmap.data[idx + 2] = 59;
        this.bitmap.data[idx + 3] = 255;
      }
    });

    await imgDarkBg.writeAsync(path.join(__dirname, 'public/images/logo.png'));
    await imgLightBg.writeAsync(path.join(__dirname, 'public/images/logo_dark.png'));
    console.log("Logos successfully extracted with perfect transparency!");
  } catch (err) {
    console.error("Extraction error:", err);
  }
}
extractLogos();
