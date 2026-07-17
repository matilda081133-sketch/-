const Jimp = require('jimp');
const path = require('path');

async function processLogo() {
  try {
    const inputPath = path.join(__dirname, 'public/images/logo_ref_1.jpg');
    
    // We will create two versions: Gold (for dark header) and DarkBlue (for light header)
    // The user said "сделать такой же логотип только синим" and also earlier "такой же как золотой"
    // So one dark blue, one gold.
    const goldColor = { r: 212, g: 175, b: 55 };
    const navyColor = { r: 16, g: 39, b: 59 };

    const darkLogo = await Jimp.read(inputPath); // Will become Dark Blue (for white header)
    const lightLogo = await Jimp.read(inputPath); // Will become Gold (for deep-blue header)

    const width = darkLogo.bitmap.width;
    const height = darkLogo.bitmap.height;

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const hex = darkLogo.getPixelColor(x, y);
        const rgba = Jimp.intToRGBA(hex);

        // A simple threshold: if average of RGB is less than 150, it's the dark logo.
        // Everything else is the light background/checkerboard.
        const avg = (rgba.r + rgba.g + rgba.b) / 3;
        
        if (avg < 150) {
          // It's the logo. 
          darkLogo.setPixelColor(Jimp.rgbaToInt(navyColor.r, navyColor.g, navyColor.b, 255), x, y);
          lightLogo.setPixelColor(Jimp.rgbaToInt(goldColor.r, goldColor.g, goldColor.b, 255), x, y);
        } else {
          // It's the background. Make it fully transparent.
          darkLogo.setPixelColor(Jimp.rgbaToInt(0, 0, 0, 0), x, y);
          lightLogo.setPixelColor(Jimp.rgbaToInt(0, 0, 0, 0), x, y);
        }
      }
    }

    await darkLogo.writeAsync(path.join(__dirname, 'public/images/logo_dark.png'));
    await lightLogo.writeAsync(path.join(__dirname, 'public/images/logo.png'));

    console.log("Logos processed perfectly.");
  } catch (err) {
    console.error("Error:", err);
  }
}

processLogo();
