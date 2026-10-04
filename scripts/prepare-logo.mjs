// Turns the black-on-white LDK ART logo into a transparent PNG (black ink, alpha from darkness)
// plus a square favicon. Usage: node scripts/prepare-logo.mjs
import sharp from 'sharp';

const SRC = 'assets-src/brand/ldk-art-logo-original.png';

const { data, info } = await sharp(SRC)
  .flatten({ background: '#ffffff' })
  .greyscale()
  .trim({ background: '#ffffff', threshold: 40 })
  .raw()
  .toBuffer({ resolveWithObject: true });

const rgba = Buffer.alloc(info.width * info.height * 4);
for (let i = 0; i < info.width * info.height; i++) {
  // Contrast stretch so anti-aliased edges stay smooth but the paper turns fully transparent.
  const alpha = Math.max(0, Math.min(255, ((235 - data[i]) / 200) * 255));
  rgba[i * 4 + 3] = Math.round(alpha);
}

const logo = sharp(rgba, { raw: { width: info.width, height: info.height, channels: 4 } });
await logo.clone().resize({ height: 240 }).png().toFile('public/assets/brand/ldk-art-logo.png');

const mark = await logo.clone().resize({ width: 48 }).png().toBuffer();
await sharp({ create: { width: 64, height: 64, channels: 4, background: '#ffffff' } })
  .composite([{ input: mark, gravity: 'center' }])
  .png()
  .toFile('public/favicon.png');

console.log('logo', info.width, 'x', info.height);
