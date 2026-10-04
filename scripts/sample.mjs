import sharp from 'sharp';
const img = sharp('scripts/reference.png');
const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
console.log(info);
const px = (x,y)=>{const i=(y*info.width+x)*info.channels;return '#'+[0,1,2].map(k=>data[i+k].toString(16).padStart(2,'0')).join('')};
const pts = {outer:[20,20], white:[100,300], heroRight:[900,250], card1:[140,720], card1b:[350,1010], card2:[400,720], card3:[670,720], about:[600,1090], aboutB:[880,1300], dark:[100,1400], btn:[150,560], blueCube:[560,470], footerdark:[300,1520], ink:[135,240]};
for (const [k,[x,y]] of Object.entries(pts)) console.log(k, px(x,y));
