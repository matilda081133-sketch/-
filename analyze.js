const Jimp = require('jimp');
const path = require('path');

async function analyze() {
  try {
    const img1 = await Jimp.read(path.join(__dirname, 'public/images/logo_ref_1.jpg'));
    const img2 = await Jimp.read(path.join(__dirname, 'public/images/logo_ref_2.jpg'));
    
    const hex1 = img1.getPixelColor(0, 0);
    const hex2 = img2.getPixelColor(0, 0);
    
    console.log("Logo 1 BG:", Jimp.intToRGBA(hex1));
    console.log("Logo 2 BG:", Jimp.intToRGBA(hex2));
  } catch(e) {
    console.error(e);
  }
}
analyze();
