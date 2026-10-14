// Fonte única de produtos: a Home (seção "Mais Procurados") e o catálogo (/produtos) leem desta lista.
// Para adicionar um produto, coloque a foto em assets-src/products/, rode `node scripts/prepare-products.mjs`
// e inclua um objeto abaixo. Campos:
//   id        identificador único (sem espaços nem acentos)
//   category  um dos ids de CATEGORIES
//   price     preço em reais (número)
//   featured  true para aparecer na Home (máximo de HOME_FEATURED_LIMIT)
//   demo      true = produto DEMONSTRATIVO, criado só para preencher o layout. Não é um produto real
//             confirmado da LDK ART; substitua ou remova antes de publicar.

export const CATEGORIES = [
  { id: 'personagens', label: 'Personagens' },
  { id: 'colecionaveis', label: 'Colecionáveis' },
  { id: 'articulados', label: 'Articulados' },
  { id: 'decoracao', label: 'Decoração' },
  { id: 'acessorios', label: 'Acessórios' },
];

export const PRICE_RANGES = [
  { id: 'ate-60', label: 'Até R$ 60', min: 0, max: 60 },
  { id: '60-120', label: 'R$ 60 a R$ 120', min: 60, max: 120 },
  { id: 'acima-120', label: 'Acima de R$ 120', min: 120, max: Infinity },
];

export const HOME_FEATURED_LIMIT = 8;

const orderMessage = (title) =>
  `Olá! Tenho interesse na impressão 3D de: ${title}. Pode me passar mais informações?`;

const product = (p) => ({ message: orderMessage(p.title), ...p });

export const PRODUCTS = [
  // --- Produtos reais da LDK ART (preços de referência — confirmar os valores reais) ---
  product({
    id: 'boneco-jesus',
    title: 'Boneco Jesus',
    category: 'personagens',
    price: 89.9,
    featured: true,
    image: '/assets/products/jesus.webp',
    alt: 'Boneco do Jesus impresso em 3D e pintado, com túnica branca e sandálias',
    message: 'Olá! Tenho interesse na impressão 3D do boneco do Jesus. Pode me passar mais informações?',
  }),
  product({
    id: 'garra-wolverine',
    title: 'Garra do Wolverine',
    category: 'colecionaveis',
    price: 149.9,
    featured: true,
    image: '/assets/products/garra_wolverine.webp',
    alt: 'Punho do Wolverine impresso em 3D em azul e amarelo, com garras prateadas sobre base de pedras',
    message: 'Olá! Tenho interesse na impressão 3D da garra do Wolverine. Pode me passar mais informações?',
  }),
  product({
    id: 'cavaleiro',
    title: 'Cavaleiro',
    category: 'personagens',
    price: 59.9,
    featured: true,
    image: '/assets/products/personagem.webp',
    alt: 'Miniatura preta de cavaleiro de armadura com espada, escudo e capa, impressa em 3D',
    message: 'Olá! Tenho interesse na impressão 3D do cavaleiro (miniatura). Pode me passar mais informações?',
  }),
  product({
    id: 'dragoes-articulados',
    title: 'Dragões Articulados',
    category: 'articulados',
    price: 129.9,
    featured: true,
    image: '/assets/products/dragoes.webp',
    alt: 'Cinco dragões articulados coloridos impressos em 3D',
    message: 'Olá! Tenho interesse nos dragões articulados impressos em 3D. Pode me passar mais informações?',
  }),
  product({
    id: 'mascote-corinthians',
    title: 'Mascote do Corinthians',
    category: 'colecionaveis',
    price: 149.9,
    featured: true,
    image: '/assets/products/mascote_corinthians.webp',
    alt: 'Mascote gavião do Corinthians musculoso, com asas pretas e uniforme alvinegro, sobre base com o escudo do clube, impresso em 3D',
    message: 'Olá! Tenho interesse na impressão 3D do mascote do Corinthians. Pode me passar mais informações?',
  }),
  product({
    id: 'mascote-flamengo',
    title: 'Mascote do Flamengo',
    category: 'colecionaveis',
    price: 149.9,
    featured: true,
    image: '/assets/products/mascote_flamengo.webp',
    alt: 'Mascote urubu do Flamengo musculoso, com camisa rubro-negra e calção branco, sobre base listrada, impresso em 3D',
    message: 'Olá! Tenho interesse na impressão 3D do mascote do Flamengo. Pode me passar mais informações?',
  }),

  // --- Produtos DEMONSTRATIVOS (demo: true) — apenas para completar o layout ---
  product({
    id: 'robo-articulado',
    title: 'Robô Articulado',
    category: 'articulados',
    price: 69.9,
    featured: true,
    demo: true,
    image: '/assets/products/robo-articulado.webp',
    alt: 'Robô azul com braços e pernas articulados, impresso em 3D',
  }),
  product({
    id: 'suporte-controle-deadpool',
    title: 'Suporte de Controle Deadpool',
    category: 'acessorios',
    price: 119.9,
    featured: true,
    demo: true,
    image: '/assets/products/suporte-controle-deadpool.webp',
    alt: 'Suporte de controle de videogame em formato de Deadpool, impresso em 3D',
  }),
  product({
    id: 'busto-classico',
    title: 'Busto Clássico',
    category: 'decoracao',
    price: 189.9,
    featured: true,
    demo: true,
    image: '/assets/products/busto-classico.webp',
    alt: 'Busto clássico preto fosco impresso em 3D',
  }),
  product({
    id: 'camaleao-articulado',
    title: 'Camaleão Articulado',
    category: 'articulados',
    price: 39.9,
    featured: true,
    demo: true,
    image: '/assets/products/camaleao-articulado.webp',
    alt: 'Camaleão verde e vermelho com corpo articulado, impresso em 3D',
  }),
  product({
    id: 'escultura-no-infinito',
    title: 'Escultura Nó Infinito',
    category: 'decoracao',
    price: 79.9,
    demo: true,
    image: '/assets/products/no-infinito.webp',
    alt: 'Escultura decorativa preta em formato de nó entrelaçado, impressa em 3D',
  }),
  product({
    id: 'relogio-flex',
    title: 'Relógio Flex',
    category: 'acessorios',
    price: 99.9,
    demo: true,
    image: '/assets/products/relogio-flex.webp',
    alt: 'Relógio de pulso azul com pulseira flexível, impresso em 3D',
  }),
];

// Os 8 produtos da Home: primeiro os marcados como `featured`, completando com os demais se faltar.
export const getFeaturedProducts = (limit = HOME_FEATURED_LIMIT) =>
  [...PRODUCTS.filter((p) => p.featured), ...PRODUCTS.filter((p) => !p.featured)].slice(0, limit);

const currency = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
export const formatPrice = (value) => currency.format(value);
