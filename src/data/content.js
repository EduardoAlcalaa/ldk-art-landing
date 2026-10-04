export const BRAND = {
  name: 'LDK ART',
  tagline: 'Ideias materializadas.',
  instagramHandle: '@ldk__art',
  instagramUrl: 'https://www.instagram.com/ldk__art/',
};

// WhatsApp number in international format, digits only (country + area code + number).
// TODO: replace with the real business number, e.g. '5511999999999'.
export const WHATSAPP_NUMBER = '5500000000000';

export const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const GENERAL_WHATSAPP_MESSAGE = 'Olá, LDK ART! Vim pelo site e gostaria de fazer um orçamento.';

export const NAV_LINKS = [
  { label: 'Início', href: '#home' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

export const PRODUCTS = [
  {
    title: 'Boneco Jesus',
    image: '/assets/products/jesus.webp',
    alt: 'Boneco do Jesus impresso em 3D e pintado, com túnica branca e sandálias',
    message: 'Olá! Tenho interesse na impressão 3D do boneco do Jesus. Pode me passar mais informações?',
  },
  {
    title: 'Garra do Wolverine',
    image: '/assets/products/garra_wolverine.webp',
    alt: 'Punho do Wolverine impresso em 3D em azul e amarelo, com garras prateadas sobre base de pedras',
    message: 'Olá! Tenho interesse na impressão 3D da garra do Wolverine. Pode me passar mais informações?',
  },
  {
    title: 'Cavaleiro',
    image: '/assets/products/personagem.webp',
    alt: 'Miniatura preta de cavaleiro de armadura com espada, escudo e capa, impressa em 3D',
    message: 'Olá! Tenho interesse na impressão 3D do cavaleiro (miniatura). Pode me passar mais informações?',
  },
  {
    title: 'Dragões Articulados',
    image: '/assets/products/dragoes.webp',
    alt: 'Cinco dragões articulados coloridos impressos em 3D',
    message: 'Olá! Tenho interesse nos dragões articulados impressos em 3D. Pode me passar mais informações?',
  },
];
