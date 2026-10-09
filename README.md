# LDK ART — Landing page

Landing page da LDK ART (impressão 3D). React + Vite + Tailwind CSS.

## Rodar

```
npm install
npm run dev      # desenvolvimento
npm run build    # versão final em dist/
```

## Editar conteúdo

Textos, links do menu e número do WhatsApp ficam em `src/data/content.js`
(troque `WHATSAPP_NUMBER` pelo número real, formato `5511999999999`).

Produtos, categorias e faixas de preço ficam em `src/data/products.js` — é a única lista,
usada pela Home ("Mais Procurados", 8 itens com `featured: true`) e pelo catálogo.
Itens com `demo: true` são apenas demonstrativos: substitua-os por produtos reais.

## Páginas

- `/` — Home
- `/produtos` — catálogo completo (pesquisa, categorias, faixa de preço, ordenação e "Carregar mais").
  Os filtros ficam na URL, ex.: `/produtos?categoria=articulados&ordem=menor-preco`.

O site usa rotas no navegador (React Router). Ao hospedar, configure o servidor para responder
`index.html` em qualquer caminho (fallback de SPA) — assim `/produtos` funciona ao abrir o link direto.

## Scripts de imagens

- `node scripts/prepare-products.mjs` — normaliza fotos de `assets-src/products/` para os cards.
- `node scripts/prepare-logo.mjs` — gera a logo transparente e o favicon.
