# LDK ART — Landing page

Landing page da LDK ART (impressão 3D). React + Vite + Tailwind CSS.

## Rodar

```
npm install
npm run dev      # desenvolvimento
npm run build    # versão final em dist/
```

## Editar conteúdo

Textos, produtos e número do WhatsApp ficam em `src/data/content.js`
(troque `WHATSAPP_NUMBER` pelo número real, formato `5511999999999`).

## Scripts de imagens

- `node scripts/prepare-products.mjs` — normaliza fotos de `assets-src/products/` para os cards.
- `node scripts/prepare-logo.mjs` — gera a logo transparente e o favicon.
