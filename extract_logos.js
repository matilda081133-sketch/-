const Jimp = require('jimp');
const path = require('path');

async function extractLogos() {
  try {
    const imgDarkBg = await Jimp.read(path.join(__dirname, 'public/images/logo_ref_1.jpg'));
    const imgLightBg = await Jimp.read(path.join(__dirname, 'public/images/logo_ref_2.jpg'));
    
    // Wipe 25 pixels from the bottom to ensure the thick framing line is gone
    const wipeBorders = (x, y, width, height) => {
      return (x < 10 || x >= width - 10 || y < 10 || y >= height - 25);
    };

    imgDarkBg.scan(0, 0, imgDarkBg.bitmap.width, imgDarkBg.bitmap.height, function(x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      
      if (wipeBorders(x, y, this.bitmap.width, this.bitmap.height) || (r < 50 && g < 60 && b < 80)) {
        this.bitmap.data[idx + 3] = 0; // Fully transparent
      } else {
        this.bitmap.data[idx + 0] = 212;
        this.bitmap.data[idx + 1] = 175;
        this.bitmap.data[idx + 2] = 55;
        this.bitmap.data[idx + 3] = 255;
      }
    });

    imgLightBg.scan(0, 0, imgLightBg.bitmap.width, imgLightBg.bitmap.height, function(x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      
      if (wipeBorders(x, y, this.bitmap.width, this.bitmap.height) || (r > 150 && g > 150 && b > 150)) {
        this.bitmap.data[idx + 3] = 0; // Fully transparent
      } else {
        this.bitmap.data[idx + 0] = 16;
        this.bitmap.data[idx + 1] = 39;
        this.bitmap.data[idx + 2] = 59;
        this.bitmap.data[idx + 3] = 255;
      }
    });

    await imgDarkBg.writeAsync(path.join(__dirname, 'public/images/logo.png'));
    await imgLightBg.writeAsync(path.join(__dirname, 'public/images/logo_dark.png'));
    console.log("Logos successfully extracted, cropped 25px from bottom!");
  } catch (err) {
    console.error("Extraction error:", err);
  }
}
extractLogos();
