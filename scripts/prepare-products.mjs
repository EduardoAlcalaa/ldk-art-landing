// Normalizes product photos for the collection cards:
// flattens the uneven studio background to the card color (#F8F8F8),
// trims to the object and centers it on a square canvas.
// Usage: node scripts/prepare-products.mjs   (reads assets-src/products, writes public/assets/products)
import sharp from 'sharp';
import { readdirSync } from 'node:fs';
import { basename, extname, join } from 'node:path';

const SRC = 'assets-src/products';
const OUT = 'public/assets/products';
const BG = 248; // card background #F8F8F8
const SIZE = 900;
const FILL = 1; // padding already leaves breathing room // share of the canvas the object's longest side occupies

// Average color of a square patch.
function patch(data, w, x0, y0, n) {
  const sum = [0, 0, 0];
  for (let y = y0; y < y0 + n; y++)
    for (let x = x0; x < x0 + n; x++) for (let c = 0; c < 3; c++) sum[c] += data[(y * w + x) * 3 + c];
  return sum.map((v) => v / (n * n));
}

for (const file of readdirSync(SRC)) {
  const { data, info } = await sharp(join(SRC, file)).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width: w, height: h } = info;
  const n = Math.round(Math.min(w, h) * 0.03);

  // Background field: bilinear blend of the four corner colors.
  const tl = patch(data, w, 0, 0, n), tr = patch(data, w, w - n, 0, n);
  const bl = patch(data, w, 0, h - n, n), br = patch(data, w, w - n, h - n, n);

  const out = Buffer.alloc(data.length);
  for (let y = 0; y < h; y++) {
    const v = y / (h - 1);
    for (let x = 0; x < w; x++) {
      const u = x / (w - 1);
      const i = (y * w + x) * 3;
      const px = [];
      for (let c = 0; c < 3; c++) {
        const bg = (tl[c] * (1 - u) + tr[c] * u) * (1 - v) + (bl[c] * (1 - u) + br[c] * u) * v;
        px.push(Math.min(255, (data[i + c] / bg) * BG));
      }
      // Pull near-background pixels onto the exact card color, with a soft ramp
      // so object edges and shadows keep their gradation.
      const d = Math.max(...px.map((p) => Math.abs(p - BG)));
      const t = Math.min(1, Math.max(0, (d - 10) / 12));
      for (let c = 0; c < 3; c++) out[i + c] = Math.round(BG + (px[c] - BG) * t);
    }
  }

  const trimmed = await sharp(out, { raw: { width: w, height: h, channels: 3 } })
    .trim({ background: { r: BG, g: BG, b: BG }, threshold: 12 })
    .png()
    .toBuffer({ resolveWithObject: true });

  // Pad the crop so the feathered edge falls on background, never on the object.
  const pad = Math.round(Math.max(trimmed.info.width, trimmed.info.height) * 0.08);
  const padded = await sharp(trimmed.data)
    .extend({ top: pad, bottom: pad, left: pad, right: pad, background: { r: BG, g: BG, b: BG } })
    .png()
    .toBuffer({ resolveWithObject: true });

  const scale = (SIZE * FILL) / Math.max(padded.info.width, padded.info.height);
  const rw = Math.round(padded.info.width * scale);
  const rh = Math.round(padded.info.height * scale);
  // Feathered edges hide any leftover background seam around the crop.
  const feather = Math.round(Math.max(rw, rh) * 0.05);
  const mask = Buffer.from(
    `<svg width="${rw}" height="${rh}"><filter id="b"><feGaussianBlur stdDeviation="${feather / 2}"/></filter>` +
      `<rect x="${feather}" y="${feather}" width="${rw - feather * 2}" height="${rh - feather * 2}" fill="#fff" filter="url(#b)"/></svg>`,
  );
  const resized = await sharp(padded.data)
    .resize(rw, rh)
    .ensureAlpha()
    .composite([{ input: mask, blend: 'dest-in' }])
    .png()
    .toBuffer();

  const name = basename(file, extname(file));
  await sharp({ create: { width: SIZE, height: SIZE, channels: 3, background: { r: BG, g: BG, b: BG } } })
    .composite([{ input: resized, left: Math.round((SIZE - rw) / 2), top: Math.round((SIZE - rh) / 2) }])
    .webp({ quality: 88 })
    .toFile(join(OUT, `${name}.webp`));
  console.log('ok', name, `${rw}x${rh}`);
}
