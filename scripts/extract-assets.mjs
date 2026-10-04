// Extracts the 3D renders from the reference mockup into public/assets.
import sharp from 'sharp';

const SRC = 'scripts/reference.png';
const crops = {
  'hero-bust': { left: 518, top: 182, width: 417, height: 418 },
  'apparel-watch': { left: 150, top: 712, width: 186, height: 196 },
  'home-knot': { left: 420, top: 712, width: 180, height: 196 },
  'toys-robot': { left: 688, top: 708, width: 178, height: 200 },
  'about-bust': { left: 590, top: 1078, width: 304, height: 247 },
};

for (const [name, region] of Object.entries(crops)) {
  await sharp(SRC)
    .extract(region)
    .resize(region.width * 2, region.height * 2, { kernel: 'lanczos3' })
    .sharpen({ sigma: 0.6 })
    .png()
    .toFile(`public/assets/${name}.png`);
  console.log('ok', name);
}
