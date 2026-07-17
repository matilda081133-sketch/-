const Jimp = require('jimp');
const path = require('path');

async function processLogo() {
  try {
    // Load the reference image (try both if needed, we assume logo_ref_1 is the one)
    const img1 = await Jimp.read(path.join(__dirname, 'public/images/logo_ref_1.jpg'));
    
    // We will create two versions: Gold (for dark header) and DarkBlue/Gold (for light header)
    // Actually, let's just make it Gold and transparent for both, or White for dark header.
    // The user said "точно такой же как золотой" (exactly same as gold). Let's make it gold.
    const goldColor = { r: 212, g: 175, b: 55 };
    const navyColor = { r: 16, g: 39, b: 59 };
    const whiteColor = { r: 255, g: 255, b: 255 };

    const width = img1.bitmap.width;
    const height = img1.bitmap.height;

    // Create dark version (to be used when scrolled - header is white)
    // Dark version should be navy blue or gold. Let's make the logo Navy Blue.
    const darkLogo = await Jimp.read(path.join(__dirname, 'public/images/logo_ref_1.jpg'));
    
    // Create light version (to be used at top - header is transparent/dark)
    // Light version should be white or gold. Let's make it Gold.
    const lightLogo = await Jimp.read(path.join(__dirname, 'public/images/logo_ref_1.jpg'));

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const hex = img1.getPixelColor(x, y);
        const rgba = Jimp.intToRGBA(hex);

        // Checkerboard is usually grey/white. Logo is usually dark.
        // If it's a dark pixel, it belongs to the logo.
        // A simple threshold: if average of RGB is less than 150, it's logo.
        const avg = (rgba.r + rgba.g + rgba.b) / 3;
        
        if (avg < 150) {
          // It's the logo. 
          // For Dark Logo (on white background), we color it Navy.
          darkLogo.setPixelColor(Jimp.rgbaToInt(navyColor.r, navyColor.g, navyColor.b, 255), x, y);
          
          // For Light Logo (on dark background), we color it Gold.
          lightLogo.setPixelColor(Jimp.rgbaToInt(goldColor.r, goldColor.g, goldColor.b, 255), x, y);
        } else {
          // It's the background (checkerboard/white). Make it fully transparent.
          darkLogo.setPixelColor(Jimp.rgbaToInt(0, 0, 0, 0), x, y);
          lightLogo.setPixelColor(Jimp.rgbaToInt(0, 0, 0, 0), x, y);
        }
      }
    }

    // Save
    await darkLogo.writeAsync(path.join(__dirname, 'public/images/logo_dark.png'));
    await lightLogo.writeAsync(path.join(__dirname, 'public/images/logo.png'));

    console.log("Logos processed successfully.");
  } catch (err) {
    console.error("Error processing logos:", err);
  }
}

processLogo();
